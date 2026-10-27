var ym=Object.defineProperty;var Em=(r,e,t)=>e in r?ym(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ye=(r,e,t)=>Em(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var mh="1.3.27";function hd(r,e,t){return Math.max(r,Math.min(e,t))}function Tm(r,e,t){return(1-t)*r+t*e}function bm(r,e,t,n){return Tm(r,e,1-Math.exp(-t*n))}function wm(r,e){return(r%e+e)%e}var Am=class{constructor(){Ye(this,"isRunning",!1);Ye(this,"value",0);Ye(this,"from",0);Ye(this,"to",0);Ye(this,"currentTime",0);Ye(this,"lerp");Ye(this,"duration");Ye(this,"easing");Ye(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=hd(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=bm(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Rm(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Cm=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ye(this,"width",0);Ye(this,"height",0);Ye(this,"scrollHeight",0);Ye(this,"scrollWidth",0);Ye(this,"debouncedResize");Ye(this,"wrapperResizeObserver");Ye(this,"contentResizeObserver");Ye(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ye(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ye(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Rm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fd=class{constructor(){Ye(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Pm=100/6,rr={passive:!1};function _h(r,e){return r===1?Pm:r===2?e:1}var Dm=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ye(this,"touchStart",{x:0,y:0});Ye(this,"lastDelta",{x:0,y:0});Ye(this,"window",{width:0,height:0});Ye(this,"emitter",new fd);Ye(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ye(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ye(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ye(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=_h(n,this.window.width),s=_h(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ye(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}};const gh=r=>Math.min(1,1.001-2**(-10*r));var Lm=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:_,virtualScroll:m,overscroll:w=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:L=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:I=A,stopInertiaOnNavigate:T=!1,respectReducedMotion:M=!0}={}){Ye(this,"_isScrolling",!1);Ye(this,"_isStopped",!1);Ye(this,"_isLocked",!1);Ye(this,"_preventNextNativeScrollEvent",!1);Ye(this,"_resetVelocityTimeout",null);Ye(this,"_rafId",null);Ye(this,"_isDraggingSelection",!1);Ye(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ye(this,"isTouching");Ye(this,"isIos");Ye(this,"time",0);Ye(this,"userData",{});Ye(this,"lastVelocity",0);Ye(this,"velocity",0);Ye(this,"direction",0);Ye(this,"options");Ye(this,"targetScroll");Ye(this,"animatedScroll");Ye(this,"animate",new Am);Ye(this,"emitter",new fd);Ye(this,"dimensions");Ye(this,"virtualScroll");Ye(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ye(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ye(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ye(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ye(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ye(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var v,_,m,w,b;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent"))||h==="vertical"&&((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((w=g.hasAttribute)==null?void 0:w.call(g,"data-lenis-prevent-touch"))||s&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ye(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ye(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=mh,window.lenis||(window.lenis={}),window.lenis.version=mh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=gh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:v,prevent:_,virtualScroll:m,overscroll:w,autoRaf:b,anchors:S,autoToggle:L,allowNestedScroll:D,naiveDimensions:I,stopInertiaOnNavigate:T,respectReducedMotion:M},this.dimensions=new Cm(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Dm(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=r,p=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const v=g.getBoundingClientRect(),_=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),w=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(b)?0:b)}}if(typeof d=="number"){if(d+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=hd(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=gh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,f,d,p,g;if(n-(i.time??0)>2e3){i.time=Date.now();const D=window.getComputedStyle(r);if(i.computedStyle=D,s=["auto","overlay","scroll"].includes(D.overflowX),o=["auto","overlay","scroll"].includes(D.overflowY),c=["auto"].includes(D.overscrollBehaviorX),h=["auto"].includes(D.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,d=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,a=f>p,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=p,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,p=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,m,w,b,S,L;if(v==="horizontal")_=Math.round(r.scrollLeft),m=f-p,w=e,b=s,S=a,L=c;else if(v==="vertical")_=Math.round(r.scrollTop),m=d-g,w=t,b=o,S=l,L=h;else return!1;return!L&&(_>=m||_<=0)?!0:(w>0?_<m:_>0)&&b&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?wm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function dd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zo={duration:.5,overwrite:!1,delay:0},Lu,hn,Bt,di=1e8,Lt=1/di,Mc=Math.PI*2,Im=Mc/4,Um=0,pd=Math.sqrt,Nm=Math.cos,Om=Math.sin,ln=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Iu=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},On=function(e){return e!==!1},Uu=function(){return typeof window<"u"},ra=function(e){return Wt(e)||ln(e)},md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,Fm=/random\([^)]+\)/g,Bm=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,_d=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gd=/[+-]=-?[.\d]+/,zm=/[^,'"\[\]\s]+/gi,km=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Ti,yc,Nu,oi={},sl={},vd,xd=function(e){return(sl=Ys(e,oi))&&Hn},Ou=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ko=function(e,t){return!t&&console.warn(e)},Sd=function(e,t){return e&&(oi[e]=t)&&sl&&(sl[e]=t)||oi},Ho=function(){return 0},Hm={suppressEvents:!0,isStart:!0,kill:!1},Ga={suppressEvents:!0,kill:!1},Vm={suppressEvents:!0},Fu={},xr=[],Ec={},Md,qn={},Cl={},xh=30,Wa=[],Bu="",zu=function(e){var t=e[0],n,i;if(Li(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(t););n=Wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gd(e[i],n)))||e.splice(i,1);return e},$r=function(e){return e._gsap||zu(pi(e))[0]._gsap},yd=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():Iu(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Gm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ol=function(){var e=xr.length,t=xr.slice(0),n,i;for(Ec={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ku=function(e){return!!(e._initted||e._startAt||e.add)},Ed=function(e,t,n,i){xr.length&&!hn&&ol(),e.render(t,n,!!(hn&&t<0&&ku(e))),xr.length&&!hn&&ol()},Td=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zm).length<2?t:ln(e)?e.trim():e},bd=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ys=function(e,t){for(var n in t)e[n]=t[n];return e},Sh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wo=function(e){var t=e.parent||Ht,n=e.keyframes?Wm(xn(e.keyframes)):ai;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Xm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},xl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ym=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tc=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Ga):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qm=function r(e){return!e||e._ts&&r(e.parent)},Mh=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sl=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},Ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sl(e),n._dirty||Zr(n,e)),e},Ad=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ll(e.rawTime(),t),(!t._dur||Jo(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Ai=function(e,t,n,i){return t.parent&&Er(t),t._start=kt((ji(n)?n:n||e!==Ht?ci(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wd(e,t,"_first","_last",e._sort?"_start":0),bc(t)||(e._recent=t),i||Ad(e,t),e._ts<0&&Ml(e,e._tTime),e},Rd=function(e,t){return(oi.ScrollTrigger||Ou("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},Cd=function(e,t,n,i,s){if(Vu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Md!==Kn.frame)return xr.push(e),e._lazy=[s,i],1},$m=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},bc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zm=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&$m(e)&&!(!e._initted&&bc(e))||(e._ts<0||e._dp._ts<0)&&!bc(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=Jo(0,e._tDur,t),h=qs(l,a),e._yoyo&&h&1&&(o=1-o),h!==qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&Cd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Tc(e,t,n,!0),e._onUpdate&&!n&&Qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Er(e,1),!n&&!hn&&(Qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Km=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$s=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ml(e,e._tTime=e._tDur*a),e.parent&&Sl(e),n||Zr(e.parent,e),e},yh=function(e){return e instanceof Un?Zr(e):$s(e,e._dur)},Jm={_start:0,endTime:Ho,totalDuration:Ho},ci=function r(e,t,n){var i=e.labels,s=e._recent||Jm,o=e.duration()>=di?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ao=function(e,t,n){var i=ji(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},Rr=function(e,t){return e||e===0?t(e):t},Jo=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!ln(e)||!(t=km.exec(e))?"":t[1]},jm=function(e,t,n){return Rr(n,function(i){return Jo(e,t,i)})},wc=[].slice,Pd=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Ti},Qm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||Pd(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):ln(e)&&!n&&(yc||!Zs())?wc.call((t||Nu).querySelectorAll(e),0):xn(e)?Qm(e,n):Pd(e)?wc.call(e,0):e?[e]:[]},Ac=function(e){return e=pi(e)[0]||ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?ko("Invalid scope")||Nu.createElement("div"):e)}},Dd=function(e){return e.sort(function(){return .5-Math.random()})},Ld=function(e){if(Wt(e))return e;var t=Li(e)?e:{each:e},n=Kr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return ln(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,p,g){var v=(g||t).length,_=o[v],m,w,b,S,L,D,A,I,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,di])[1],!T){for(A=-di;A<(A=g[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(_=o[v]=[],m=l?Math.min(T,v)*h-.5:i%T,w=T===di?0:l?v*f/T-.5:i/T|0,A=0,I=di,D=0;D<v;D++)b=D%T-m,S=w-(D/T|0),_[D]=L=c?Math.abs(c==="y"?S:b):pd(b*b+S*S),L>A&&(A=L),L<I&&(I=L);i==="random"&&Dd(_),_.max=A-I,_.min=I,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(i==="edges"?-1:1),_.b=v<0?s-v:s,_.u=gn(t.amount||t.each)||0,n=n&&v<0?f_(n):n}return v=(_[d]-_.min)/_.max||0,kt(_.b+(n?n(v):v)*_.v)+_.u}},Rc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ji(n)?0:gn(n))}},Id=function(e,t){var n=xn(e),i,s;return!n&&Li(e)&&(i=n=e.radius||di,e.values?(e=pi(e.values),(s=!ji(e[0]))&&(i*=i)):e=Rc(e.increment)),Rr(t,n?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=di,h=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||ji(o)?h:h+gn(o)}:Rc(e))},Ud=function(e,t,n,i){return Rr(xn(e)?!t:n===!0?!!(n=0):!i,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},e_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},t_=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},n_=function(e,t,n){return Od(e,t,0,1,n)},Nd=function(e,t,n){return Rr(n,function(i){return e[~~t(i)]})},i_=function r(e,t,n){var i=t-e;return xn(e)?Nd(e,r(0,e.length),t):Rr(n,function(s){return(i+(s-e)%i)%i+e})},r_=function r(e,t,n){var i=t-e,s=i*2;return xn(e)?Nd(e,r(0,e.length-1),t):Rr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Vo=function(e){return e.replace(Fm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Bm);return Ud(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Od=function(e,t,n,i,s){var o=t-e,a=i-n;return Rr(s,function(l){return n+((l-e)/o*a||0)})},s_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=ln(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var v=Math.min(d,~~g);return h[v](g-v)},n=t}else i||(e=Ys(xn(e)?[]:{},e));if(!h){for(l in t)Hu.call(a,e,l,"get",t[l]);s=function(g){return Xu(g,a)||(o?e.p:e)}}}return Rr(n,s)},Eh=function(e,t,n){var i=e.labels,s=di,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qn=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&ol(),a&&(Bt=a),h=l?s.apply(c,l):s.call(c),Bt=o,h},go=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&Qn(e,"onInterrupt"),e},Ds,Fd=[],Bd=function(e){if(e)if(e=!e.name&&e.default||e,Uu()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ho,render:Xu,add:Hu,kill:y_,modifier:M_,rawVars:0},o={targetTest:0,get:0,getSetter:Wu,aliases:{},register:0};if(Zs(),e!==i){if(qn[t])return;ai(i,ai(al(e,s),o)),Ys(i.prototype,Ys(s,al(e,o))),qn[i.prop=t]=i,e.targetTest&&(Wa.push(i),Fu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sd(t,i),e.register&&e.register(Hn,i,Bn)}else Fd.push(e)},Dt=255,vo={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},zd=function(e,t,n){var i=e?ji(e)?[e>>16,e>>8&Dt,e&Dt]:0:vo.black,s,o,a,l,c,h,f,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])i=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(vh),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pl(l+1/3,s,o),i[1]=Pl(l,s,o),i[2]=Pl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(_d),n&&i.length<4&&(i[3]=1),i}else i=e.match(vh)||vo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(p=f-d,c=h>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},kd=function(e){var t=[],n=[],i=-1;return e.split(Sr).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Th=function(e,t,n){var i="",s=(e+i).match(Sr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=zd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=kd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Sr,"1").split(Ps),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Sr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Sr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),o_=/hsl[a]?\(/,Hd=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=o_.test(t),e[1]=Th(e[1],n),e[0]=Th(e[0],n,kd(e[1])),!0},Go,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,p,g=function v(_){var m=r()-i,w=_===!0,b,S,L,D;if((m>e||m<0)&&(n+=m-t),i+=m,L=i-n,b=L-o,(b>0||w)&&(D=++f.frame,d=L-f.time*1e3,f.time=L=L/1e3,o+=b+(b>=s?4:s-b),S=1),w||(l=c(v)),S)for(p=0;p<a.length;p++)a[p](L,d,D,_)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){vd&&(!yc&&Uu()&&(Ti=yc=window,Nu=Ti.document||{},oi.gsap=Hn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Hn.version),xd(sl||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),Fd.forEach(Bd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Go=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Go=0,c=Ho},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,m,w){var b=m?function(S,L,D,A){_(S,L,D,A),f.remove(b)}:_;return f.remove(_),a[w?"unshift":"push"](b),Zs(),b},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},f})(),Zs=function(){return!Go&&Kn.wake()},gt={},a_=/^[\d.\-M][\d.\-,\s]/,l_=/["']/g,c_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(l_,"").trim():+c,i=l.substr(a+1).trim();return t},u_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},h_=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[c_(t[1])]:u_(e).split(",").map(Td)):gt._CE&&a_.test(e)?gt._CE("",e):n},f_=function(e){return function(t){return 1-e(1-t)}},Kr=function(e,t){return e&&(Wt(e)?e:gt[e]||h_(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Fn(e,function(a){gt[a]=oi[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},Vd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Mc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Om((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Vd(a);return s=Mc/s,l.config=function(c,h){return r(e,c,h)},l},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Vd(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;ls("Elastic",Dl("in"),Dl("out"),Dl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(pd(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-Nm(r*Im)+1});ls("Back",Ll("in"),Ll("out"),Ll());gt.SteppedEase=gt.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Jo(0,o,a)|0)+s)*n}}};zo.ease=gt["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Bu+=r+","+r+"Params,"});var Gd=function(e,t){this.id=Um++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yd,this.set=t?t.getSetter:Wu},Wo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$s(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Go||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ml(this,n),!s._dp||s.parent||Ad(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ed(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Jo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sl(this),Ym(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Vm);var i=hn;return hn=n,ku(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Wt(n)?n:bd,l=function(){var h=i.then;i.then=null,s&&s(),Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){go(this)},r})();ai(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var Un=(function(r){dd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ht&&Ai(n.parent||Ht,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rd(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ao(0,arguments,this),this},t.from=function(i,s,o){return Ao(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ao(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Ai(this,Kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Kt(i,o,ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,wo(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,wo(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:kt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,v,_,m,w,b,S,L,D,A;if(this!==Ht&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,S=this._start,b=this._ts,m=!b,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=kt(h%_),h===l?(v=this._repeat,d=c):(L=kt(h/_),v=~~L,v&&v===L&&(d=c,v--),d>c&&(d=c)),L=qs(this._tTime,_),!a&&this._tTime&&L!==v&&this._tTime-L*_-this._dur<=0&&(L=v),D&&v&1&&(d=c-d,A=1),v!==L&&!this._lock){var I=D&&L&1,T=I===(D&&v&1);if(v<L&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(A?0:kt(v*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=v),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Km(this,kt(a),kt(d)),w&&(h-=d-(d=w._start))),this._tTime=h,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!L&&(Qn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=-Lt);break}}p=g}else{p=this._last;for(var M=i<0?i:d;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||hn&&ku(p)),d!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=M?-Lt:Lt);break}}p=g}}if(w&&!s&&(this.pause(),w.render(d>=a?0:-Lt)._zTime=d>=a?1:-1,this._ts))return this._start=S,Sl(this),this.render(i,s,o);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ji(s)||(s=ci(this,s,i)),!(i instanceof Wo)){if(xn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Wt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&xl(this,i),i===this._recent&&(this._recent=this._last),Zr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Kt.delayedCall(0,s||Ho,o);return a.data="isPause",this._hasPause=1,Ai(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=pi(i),l=this._first,c=ji(s),h;l;)l instanceof Kt?Gm(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,p,g=Kt.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&$s(g,_,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ai({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Eh(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Eh(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Zr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=di,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=kt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$s(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ht._ts&&(Ed(Ht,ll(i,Ht)),Md=Kn.frame),Kn.frame>=xh){xh+=ii.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&ii.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(Wo);ai(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var d_=function(e,t,n,i,s,o,a){var l=new Bn(this._pt,e,t,0,1,Zd,null,s),c=0,h=0,f,d,p,g,v,_,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Vo(i)),o&&(w=[n,i],o(w,e,t),n=w[0],i=w[1]),d=n.match(Rl)||[];f=Rl.exec(i);)g=f[0],v=i.substring(c,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==d[h++]&&(_=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:_,c:g.charAt(1)==="="?Os(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(gd.test(i)||m)&&(l.e=0),this._pt=l,l},Hu=function(e,t,n,i,s,o,a,l,c,h){Wt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Wt(f)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Wt(f)?c?v_:qd:Gu,g;if(ln(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(g=Os(d,i)+(gn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Cc)return!isNaN(d*i)&&i!==""?(g=new Bn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?S_:$d,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Ou(t,i),d_.call(this,e,t,d,i,p,l||ii.stringFilter,c))},p_=function(e,t,n,i,s){if(Wt(e)&&(e=Ro(e,s,t,n,i)),!Li(e)||e.style&&e.nodeType||xn(e)||md(e))return ln(e)?Ro(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ro(e[a],s,t,n,i);return o},Wd=function(e,t,n,i,s,o){var a,l,c,h;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:p_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},dr,Cc,Vu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,v=e._startAt,_=e._targets,m=e.parent,w=m&&m.data==="nested"?m.vars.targets:_,b=e._overwrite==="auto"&&!Lu,S=e.timeline,L=i.easeReverse||f,D,A,I,T,M,U,z,W,$,K,q,X,G;if(S&&(!d||!s)&&(s="none"),e._ease=Kr(s,zo.ease),e._rEase=L&&(Kr(L)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||d&&!i.stagger){if(W=_[0]?$r(_[0]).harness:0,X=W&&i[W.prop],D=al(i,Fu),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&g?Ga:Hm),v._lazy=0),o){if(Er(e._startAt=Kt.set(_,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!p)&&e._startAt.revert(Ga),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!v){if(t&&(a=!1),I=ai({overwrite:!1,data:"isFromStart",lazy:a&&!v&&On(l),immediateRender:a,stagger:0,parent:m},D),X&&(I[W.prop]=X),Er(e._startAt=Kt.set(_,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Ga):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&On(l)||l&&!g,A=0;A<_.length;A++){if(M=_[A],z=M._gsap||zu(_)[A]._gsap,e._ptLookup[A]=K={},Ec[z.id]&&xr.length&&ol(),q=w===_?A:w.indexOf(M),W&&($=new W).init(M,X||D,e,q,w)!==!1&&(e._pt=T=new Bn(e._pt,M,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(ae){K[ae]=T}),$.priority&&(U=1)),!W||X)for(I in D)qn[I]&&($=Wd(I,D,e,q,M,w))?$.priority&&(U=1):K[I]=T=Hu.call(e,M,I,"get",D[I],q,w,0,i.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),b&&e._pt&&(dr=e,Ht.killTweensOf(M,K,e.globalTime(t)),G=!e.parent,dr=0),e._pt&&l&&(Ec[z.id]=1)}U&&Kd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&S.render(di,!0,!0)},m_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Cc=1,e.vars[t]="+=0",Vu(e,a),Cc=0,l?ko(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)f=c[p],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Yt(n)+gn(f.e)),f.b&&(f.b=h.s+gn(f.b))},__=function(e,t){var n=e[0]?$r(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ys({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(xn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ro=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Vo(e):e},Xd=Bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yd={};Fn(Xd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});var Kt=(function(r){dd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:wo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,m=i.parent||Ht,w=(xn(n)||md(n)?ji(n[0]):"length"in i)?[n]:pi(n),b,S,L,D,A,I,T,M;if(a._targets=w.length?zu(w):ko("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||ra(c)||ra(h)){i=a.vars;var U=i.easeReverse||i.yoyoEase;if(b=a.timeline=new Un({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:w}),b.kill(),b.parent=b._dp=Hi(a),b._start=0,d||ra(c)||ra(h)){if(D=w.length,T=d&&Ld(d),Li(d))for(A in d)~Xd.indexOf(A)&&(M||(M={}),M[A]=d[A]);for(S=0;S<D;S++)L=al(i,Yd),L.stagger=0,U&&(L.easeReverse=U),M&&Ys(L,M),I=w[S],L.duration=+Ro(c,Hi(a),S,I,w),L.delay=(+Ro(h,Hi(a),S,I,w)||0)-a._delay,!d&&D===1&&L.delay&&(a._delay=h=L.delay,a._start+=h,L.delay=0),b.to(I,L,T?T(S,I,w):0),b._ease=gt.none;b.duration()?c=h=0:a.timeline=0}else if(g){wo(ai(b.vars.defaults,{ease:"none"})),b._ease=Kr(g.ease||i.ease||"none");var z=0,W,$,K;if(xn(g))g.forEach(function(q){return b.to(w,q,">")}),b.duration();else{L={};for(A in g)A==="ease"||A==="easeEach"||g_(A,g[A],L,g.easeEach);for(A in L)for(W=L[A].sort(function(q,X){return q.t-X.t}),z=0,S=0;S<W.length;S++)$=W[S],K={ease:$.e,duration:($.t-(S?W[S-1].t:0))/100*c},K[A]=$.v,b.to(w,K,z),z+=K.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return p===!0&&!Lu&&(dr=Hi(a),Ht.killTweensOf(w),dr=0),Ai(m,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===kt(m._time)&&On(f)&&qm(Hi(a))&&m.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-h)||0)),_&&Rd(Hi(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Lt&&!h?l:i<Lt?0:i,d,p,g,v,_,m,w,b;if(!c)Zm(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,b=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,s,o);if(d=kt(f%v),f===l?(g=this._repeat,d=c):(_=kt(f/v),g=~~_,g&&g===_?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),_=qs(this._tTime,v),d===a&&!o&&this._initted&&g===_)return this._tTime=f,this;g!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(kt(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(Cd(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var L=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(S?-1:1)/L:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(d/c);if(this._from&&(this.ratio=w=1-w),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(Qn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Tc(this,i,s,o),Qn(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Tc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Er(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Go||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vu(this,c),h=this._ease(c/this._dur),m_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ml(this,0),this.parent||wd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||go(this),this.parent&&o!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?pi(i):a,c=this._ptLookup,h=this._pt,f,d,p,g,v,_,m;if((!s||s==="all")&&Xm(a,l))return s==="all"&&(this._pt=0),go(this);for(f=this._op=this._op||[],s!=="all"&&(ln(s)&&(v={},Fn(s,function(w){return v[w]=1}),s=v),s=__(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,p={}):(p=f[m]=f[m]||{},g=s);for(v in g)_=d&&d[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&xl(this,_,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&go(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ao(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ao(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ht.killTweensOf(i,s,o)},e})(Wo);ai(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Un,t=wc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gu=function(e,t,n){return e[t]=n},qd=function(e,t,n){return e[t](n)},v_=function(e,t,n,i){return e[t](i.fp,n)},x_=function(e,t,n){return e.setAttribute(t,n)},Wu=function(e,t){return Wt(e[t])?qd:Iu(e[t])&&e.setAttribute?x_:Gu},$d=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},S_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},M_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},y_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},E_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$d,this.d=l||this,this.set=c||Gu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=E_,this.m=n,this.mt=s,this.tween=i},r})();Fn(Bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Fu[r]=1});oi.TweenMax=oi.TweenLite=Kt;oi.TimelineLite=oi.TimelineMax=Un;Ht=new Un({sortChildren:!1,defaults:zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=Hd;var Jr=[],Xa={},T_=[],bh=0,b_=0,Il=function(e){return(Xa[e]||T_).map(function(t){return t()})},Pc=function(){var e=Date.now(),t=[];e-bh>2&&(Il("matchMediaInit"),Jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ti.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bh=e,Il("matchMedia"))},Jd=(function(){function r(t,n){this.selector=n&&Ac(n),this.data=[],this._r=[],this.isReverted=!1,this.id=b_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var o=this,a=function(){var c=Bt,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ac(s)),Bt=o,f=i.apply(o,arguments),Wt(f)&&o._r.push(f),Bt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Jr.length;o--;)Jr[o].id===this.id&&Jr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),w_=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Li(n)||(n={matches:n});var o=new Jd(0,s||this.scope),a=o.conditions={},l,c,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ti.matchMedia(n[c]),l&&(Jr.indexOf(o)<0&&Jr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Pc):l.addEventListener("change",Pc)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bd(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=pi(e)[0]);var s=$r(e||{}).get,o=n?bd:Td;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(h){return Hn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=qn[t],a=$r(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Ds._pt=0,f.init(e,n?h+n:h,Ds,0,[e]),f.render(1,f),Ds._pt&&Xu(1,Ds)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Hn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Kr(e.ease,zo.ease)),Sh(zo,e||{})},config:function(e){return Sh(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!oi[a]&&ko(t+" effect requires "+a+" plugin.")}),Cl[t]=function(a,l,c){return n(pi(a),ai(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(Cl[t](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=Kr(t)},parseEase:function(e,t){return arguments.length?Kr(e,t):gt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Ht,n,0),n},context:function(e,t){return e?new Jd(e,t):Bt},matchMedia:function(e){return new w_(e)},matchMediaRefresh:function(){return Jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pc()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:i_,wrapYoyo:r_,distribute:Ld,random:Ud,snap:Id,normalize:n_,getUnit:gn,clamp:jm,splitColor:zd,toArray:pi,selector:Ac,mapRange:Od,pipe:e_,unitize:t_,interpolate:s_,shuffle:Dd},install:xd,effects:Cl,ticker:Kn,updateRoot:Un.updateRoot,plugins:qn,globalTimeline:Ht,core:{PropTween:Bn,globals:Sd,Tween:Kt,Timeline:Un,Animation:Wo,getCache:$r,_removeLinkedListItem:xl,reverting:function(){return hn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return Lu=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=Kt[r]});Kn.add(Un.updateRoot);Ds=cl.to({},{duration:0});var A_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},R_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=A_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}R_(a,s)}}}},Hn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",Rc),Ul("modifiers"),Ul("snap",Id))||cl;Kt.version=Un.version=Hn.version="3.15.0";vd=1;Uu()&&Zs();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wh,pr,Fs,Yu,Xr,Ah,qu,C_=function(){return typeof window<"u"},Qi={},Fr=180/Math.PI,Bs=Math.PI/180,cs=Math.atan2,Rh=1e8,$u=/([A-Z])/g,P_=/(left|right|width|margin|padding|x)/i,D_=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},O_=function(e,t,n){return e.style[t]=n},F_=function(e,t,n){return e.style.setProperty(t,n)},B_=function(e,t,n){return e._gsap[t]=n},z_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},k_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},H_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Vt="transform",zn=Vt+"Origin",V_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Vi(i,a)}):this.tfm[e]=o.x?o[e]:Vi(i,e),e===zn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},ep=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},G_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($u,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!n[Vt]&&(ep(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},tp=function(e,t){var n={target:e,props:[],revert:G_,save:V_};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},np,Lc=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($u,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ks(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,n){var i=t||Xr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ch[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ch[o]:"")+e},Ic=function(){C_()&&window.document&&(wh=window,pr=wh.document,Fs=pr.documentElement,Xr=Lc("div")||{style:{}},Lc("div"),Vt=Ks(Vt),zn=Vt+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",np=!!Ks("perspective"),qu=Hn.core.reverting,Yu=1)},Ph=function(e){var t=e.ownerSVGElement,n=Lc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fs.removeChild(n),s},Dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ip=function(e){var t,n;try{t=e.getBBox()}catch{t=Ph(e),n=1}return t&&(t.width||t.height)||n||(t=Ph(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dh(e,["x","cx","x1"])||0,y:+Dh(e,["y","cy","y1"])||0,width:0,height:0}:t},rp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ip(e))},Tr=function(e,t){if(t){var n=e.style,i;t in Qi&&t!==zn&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace($u,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,o){var a=new Bn(e._pt,t,n,0,1,o?Qd:jd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Lh={deg:1,rad:1,turn:1},W_={grid:1,flex:1},br=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Xr.style,l=P_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",p=i==="%",g,v,_,m;if(i===o||!s||Lh[i]||Lh[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&rp(e),(p||o==="%")&&(Qi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Yt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===pr||!v.appendChild)&&(v=pr.body),_=v._gsap,_&&p&&_.width&&l&&_.time===Kn.time&&!_.uncache)return Yt(s/_.width*f);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=f+i,g=e[h],w?e.style[t]=w:Tr(e,t)}else(p||o==="%")&&!W_[ei(v,"display")]&&(a.position=ei(e,"position")),v===e&&(a.position="static"),v.appendChild(Xr),g=Xr[h],v.removeChild(Xr),a.position="absolute";return l&&p&&(_=$r(v),_.time=Kn.time,_.width=v[h]),Yt(d?g*s/f:g&&s?f/g*s:0)},Vi=function(e,t,n,i){var s;return Yu||Ic(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(s=Yo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:hl(ei(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[t]&&ul[t](e,t,n)||ei(e,t)||yd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?br(e,t,s,n)+n:s},X_=function(e,t,n,i){if(!n||n==="none"){var s=Ks(t,e,1),o=s&&ei(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ei(e,"borderTopColor"))}var a=new Bn(this._pt,e.style,t,0,1,Zd),l=0,c=0,h,f,d,p,g,v,_,m,w,b,S,L;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=ei(e,t)||i,v?e.style[t]=v:Tr(e,t)),h=[n,i],Hd(h),n=h[0],i=h[1],d=n.match(Ps)||[],L=i.match(Ps)||[],L.length){for(;f=Ps.exec(i);)_=f[0],w=i.substring(l,f.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),_!==(v=d[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=Os(p,_)+S),m=parseFloat(_),b=_.substr((m+"").length),l=Ps.lastIndex-b.length,b||(b=b||ii.units[t]||S,l===i.length&&(i+=b,a.e+=b)),S!==b&&(p=br(e,t,v,b)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:p,c:m-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Qd:jd;return gd.test(i)&&(a.e=0),this._pt=a,a},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ih[n]||n,t[1]=Ih[i]||i,t.join(" ")},q_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Qi[a]&&(l=1,a=a==="transformOrigin"?zn:Vt),Tr(n,a);l&&(Tr(n,Vt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Yo(n,1),o.uncache=1,ep(i)))}},ul={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Bn(e._pt,t,n,0,0,q_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Xo=[1,0,0,1,0,0],sp={},op=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uh=function(e){var t=ei(e,Vt);return op(t)?Xo:t.substr(7).match(_d).map(Yt)},Zu=function(e,t){var n=e._gsap||$r(e),i=e.style,s=Uh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!e.offsetParent&&e!==Fs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Fs.appendChild(e)),s=Uh(e),l?i.display=l:Tr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Zu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],m=l[4],w=l[5],b=t.split(" "),S=parseFloat(b[0])||0,L=parseFloat(b[1])||0,D,A,I,T;n?l!==Xo&&(A=p*_-g*v)&&(I=S*(_/A)+L*(-v/A)+(v*w-_*m)/A,T=S*(-g/A)+L*(p/A)-(p*w-g*m)/A,S=I,L=T):(D=ip(e),S=D.x+(~b[0].indexOf("%")?S/100*D.width:S),L=D.y+(~(b[1]||b[0]).indexOf("%")?L/100*D.height:L)),i||i!==!1&&a.smooth?(m=S-c,w=L-h,a.xOffset=f+(m*p+w*v)-m,a.yOffset=d+(m*g+w*_)-w):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(mr(o,a,"xOrigin",c,S),mr(o,a,"yOrigin",h,L),mr(o,a,"xOffset",f,a.xOffset),mr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},Yo=function(e,t){var n=e._gsap||new Gd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ei(e,zn)||"0",h,f,d,p,g,v,_,m,w,b,S,L,D,A,I,T,M,U,z,W,$,K,q,X,G,ae,N,Se,Fe,Ze,ne,le;return h=f=d=v=_=m=w=b=S=0,p=g=1,n.svg=!!(e.getCTM&&rp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),A=Zu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Uc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,D=n.yOrigin||0,A!==Xo&&(U=A[0],z=A[1],W=A[2],$=A[3],h=K=A[4],f=q=A[5],A.length===6?(p=Math.sqrt(U*U+z*z),g=Math.sqrt($*$+W*W),v=U||z?cs(z,U)*Fr:0,w=W||$?cs(W,$)*Fr+v:0,w&&(g*=Math.abs(Math.cos(w*Bs))),n.svg&&(h-=L-(L*U+D*W),f-=D-(L*z+D*$))):(le=A[6],Ze=A[7],N=A[8],Se=A[9],Fe=A[10],ne=A[11],h=A[12],f=A[13],d=A[14],I=cs(le,Fe),_=I*Fr,I&&(T=Math.cos(-I),M=Math.sin(-I),X=K*T+N*M,G=q*T+Se*M,ae=le*T+Fe*M,N=K*-M+N*T,Se=q*-M+Se*T,Fe=le*-M+Fe*T,ne=Ze*-M+ne*T,K=X,q=G,le=ae),I=cs(-W,Fe),m=I*Fr,I&&(T=Math.cos(-I),M=Math.sin(-I),X=U*T-N*M,G=z*T-Se*M,ae=W*T-Fe*M,ne=$*M+ne*T,U=X,z=G,W=ae),I=cs(z,U),v=I*Fr,I&&(T=Math.cos(I),M=Math.sin(I),X=U*T+z*M,G=K*T+q*M,z=z*T-U*M,q=q*T-K*M,U=X,K=G),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,m=180-m),p=Yt(Math.sqrt(U*U+z*z+W*W)),g=Yt(Math.sqrt(q*q+le*le)),I=cs(K,q),w=Math.abs(I)>2e-4?I*Fr:0,S=ne?1/(ne<0?-ne:ne):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!op(ei(e,Vt)),X&&e.setAttribute("transform",X))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(p*=-1,w+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Yt(p),n.scaleY=Yt(g),n.rotation=Yt(v)+a,n.rotationX=Yt(_)+a,n.rotationY=Yt(m)+a,n.skewX=w+a,n.skewY=b+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zn]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?Z_:np?ap:$_,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nl=function(e,t,n){var i=gn(t);return Yt(parseFloat(t)+parseFloat(br(e,"x",n+"px",i)))+i},$_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ap(e,t)},Cr="0deg",ao="0px",Pr=") ",ap=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,v=n.scaleY,_=n.transformPerspective,m=n.force3D,w=n.target,b=n.zOrigin,S="",L=m==="auto"&&e&&e!==1||m===!0;if(b&&(f!==Cr||h!==Cr)){var D=parseFloat(h)*Bs,A=Math.sin(D),I=Math.cos(D),T;D=parseFloat(f)*Bs,T=Math.cos(D),o=Nl(w,o,A*T*-b),a=Nl(w,a,-Math.sin(D)*-b),l=Nl(w,l,I*T*-b+b)}_!==ao&&(S+="perspective("+_+Pr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(L||o!==ao||a!==ao||l!==ao)&&(S+=l!==ao||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Cr&&(S+="rotate("+c+Pr),h!==Cr&&(S+="rotateY("+h+Pr),f!==Cr&&(S+="rotateX("+f+Pr),(d!==Cr||p!==Cr)&&(S+="skew("+d+", "+p+Pr),(g!==1||v!==1)&&(S+="scale("+g+", "+v+Pr),w.style[Vt]=S||"translate(0, 0)"},Z_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,v=n.yOrigin,_=n.xOffset,m=n.yOffset,w=n.forceCSS,b=parseFloat(o),S=parseFloat(a),L,D,A,I,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Bs,c*=Bs,L=Math.cos(l)*f,D=Math.sin(l)*f,A=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(h*=Bs,T=Math.tan(c-h),T=Math.sqrt(1+T*T),A*=T,I*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),L*=T,D*=T)),L=Yt(L),D=Yt(D),A=Yt(A),I=Yt(I)):(L=f,I=d,D=A=0),(b&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(b=br(p,"x",o,"px"),S=br(p,"y",a,"px")),(g||v||_||m)&&(b=Yt(b+g-(g*L+v*A)+_),S=Yt(S+v-(g*D+v*I)+m)),(i||s)&&(T=p.getBBox(),b=Yt(b+i/100*T.width),S=Yt(S+s/100*T.height)),T="matrix("+L+","+D+","+A+","+I+","+b+","+S+")",p.setAttribute("transform",T),w&&(p.style[Vt]=T)},K_=function(e,t,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Rh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Rh)%o-~~(c/o)*o)),e._pt=d=new Bn(e._pt,t,n,i,c,L_),d.e=h,d.u="deg",e._props.push(n),d},Nh=function(e,t){for(var n in t)e[n]=t[n];return e},J_=function(e,t,n){var i=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Vt]=t,a=Yo(n,1),Tr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],o[Vt]=t,a=Yo(n,1),o[Vt]=c);for(l in Qi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=gn(c),g=gn(h),f=p!==g?br(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Bn(e._pt,a,l,f,d-f,Dc),e._pt.u=g||0,e._props.push(l));Nh(a,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ul[e>1?"border"+r:r]=function(a,l,c,h,f){var d,p;if(arguments.length<4)return d=o.map(function(g){return Vi(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(g,v){return p[g]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,p,f)}});var lp={name:"css",register:Ic,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,p,g,v,_,m,w,b,S,L,D,A,I,T;Yu||Ic(),this.styles=this.styles||tp(e),I=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(h=t[v],!(qn[v]&&Wd(v,t,n,i,e,s)))){if(p=typeof h,g=ul[v],p==="function"&&(h=h.call(n,i,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Vo(h)),g)g(this,e,v,h,n)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",Sr.lastIndex=0,Sr.test(c)||(_=gn(c),m=gn(h),m?_!==m&&(c=br(e,v,c,m)+m):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,v),o.push(v),I.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],ln(c)&&~c.indexOf("random(")&&(c=Vo(c)),gn(c+"")||c==="auto"||(c+=ii.units[v]||gn(Vi(e,v))||""),(c+"").charAt(1)==="="&&(c=Vi(e,v))):c=Vi(e,v),d=parseFloat(c),w=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),f=parseFloat(h),v in Ci&&(v==="autoAlpha"&&(d===1&&Vi(e,"visibility")==="hidden"&&f&&(d=0),I.push("visibility",0,a.visibility),mr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Ci[v],~v.indexOf(",")&&(v=v.split(",")[0]))),b=v in Qi,b){if(this.styles.save(v),T=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=ei(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=h,h=ei(e,"perspective"),M?e.style.perspective=M:Tr(e,"perspective")}f=parseFloat(h)}if(S||(L=e._gsap,L.renderTransform&&!t.parseTransform||Yo(e,t.parseTransform),D=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new Bn(this._pt,a,Vt,0,1,L.renderTransform,L,0,-1),S.dep=1),v==="scale")this._pt=new Bn(this._pt,L,"scaleY",L.scaleY,(w?Os(L.scaleY,w+f):f)-L.scaleY||0,Dc),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){I.push(zn,0,a[zn]),h=Y_(h),L.svg?Uc(e,h,0,D,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==L.zOrigin&&mr(this,L,"zOrigin",L.zOrigin,m),mr(this,a,v,hl(c),hl(h)));continue}else if(v==="svgOrigin"){Uc(e,h,1,D,0,this);continue}else if(v in sp){K_(this,L,v,d,w?Os(d,w+h):h);continue}else if(v==="smoothOrigin"){mr(this,L,"smooth",L.smooth,h);continue}else if(v==="force3D"){L[v]=h;continue}else if(v==="transform"){J_(this,h,e);continue}}else v in a||(v=Ks(v)||v);if(b||(f||f===0)&&(d||d===0)&&!D_.test(h)&&v in a)_=(c+"").substr((d+"").length),f||(f=0),m=gn(h)||(v in ii.units?ii.units[v]:_),_!==m&&(d=br(e,v,c,m)),this._pt=new Bn(this._pt,b?L:a,v,d,(w?Os(d,w+f):f)-d,!b&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?N_:Dc),this._pt.u=m||0,b&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=U_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=I_);else if(v in a)X_.call(this,e,v,c,w?w+h:h);else if(v in e)this.add(e,v,c||e[v],w?w+h:h,i,s);else if(v!=="parseTransform"){Ou(v,h);continue}b||(v in a?I.push(v,0,a[v]):typeof e[v]=="function"?I.push(v,2,e[v]()):I.push(v,1,c||e[v])),o.push(v)}}A&&Kd(this)},render:function(e,t){if(t.tween._time||!qu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in Qi&&t!==zn&&(e._gsap.x||Vi(e,"x"))?n&&Ah===n?t==="scale"?z_:B_:(Ah=n||{})&&(t==="scale"?k_:H_):e.style&&!Iu(e.style[t])?O_:~t.indexOf("-")?F_:Wu(e,t)},core:{_removeProperty:Tr,_getMatrix:Zu}};Hn.utils.checkPrefix=Ks;Hn.core.getStyleSaver=tp;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){Qi[s]=1});Fn(e,function(s){ii.units[s]="deg",sp[s]=1}),Ci[i[13]]=r+","+e,Fn(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ii.units[r]="px"});Hn.registerPlugin(lp);var ns=Hn.registerPlugin(lp)||Hn;ns.core.Tween;function j_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q_(r,e,t){return e&&j_(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,Ya,Jn,_r,gr,zs,cp,Br,ks,up,Xi,Mi,hp,fp=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},dp=1,Ls=[],pt=[],Di=[],Co=Date.now,Nc=function(e,t){return t},eg=function(){var e=ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,pt),i.push.apply(i,Di),pt=n,Di=i,Nc=function(o,a){return t[o](a)}},Mr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},Po=function(e){return!!~up.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sa="scrollLeft",oa="scrollTop",Oc=function(){return Xi&&Xi.isPressed||pt.cache++},fl=function(e,t){var n=function i(s){if(s||s===0){dp&&(Jn.history.scrollRestoration="manual");var o=Xi&&Xi.isPressed;s=i.v=Math.round(s)||(Xi&&Xi.iOS?1:0),e(s),i.cacheID=pt.cache,o&&Nc("ss",s)}else(t||pt.cache!==i.cacheID||Nc("ref"))&&(i.cacheID=pt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:sa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(r){return arguments.length?Jn.scrollTo(r,Qt.sc()):Jn.pageXOffset||_r[sa]||gr[sa]||zs[sa]||0})},Qt={s:oa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:fl(function(r){return arguments.length?Jn.scrollTo(Cn.sc(),r):Jn.pageYOffset||_r[oa]||gr[oa]||zs[oa]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},wr=function(e,t){var n=t.s,i=t.sc;Po(e)&&(e=_r.scrollingElement||gr);var s=pt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=pt.push(e)-1),pt[s+o]||yn(e,"scroll",Oc);var a=pt[s+o],l=a||(pt[s+o]=fl(Mr(e,n),!0)||(Po(e)?i:fl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Fc=function(e,t,n){var i=e,s=e,o=Co(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,v){var _=Co();v||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var v=a,_=s,m=Co();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-v)*1e3};return{update:h,reset:f,getVelocity:d}},lo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Oh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},pp=function(){ks=cn.core.globals().ScrollTrigger,ks&&ks.core&&eg()},mp=function(e){return cn=e||fp(),!Ya&&cn&&typeof document<"u"&&document.body&&(Jn=window,_r=document,gr=_r.documentElement,zs=_r.body,up=[Jn,_r,gr,zs],cn.utils.clamp,hp=cn.core.context||function(){},Br="onpointerenter"in zs?"pointer":"mouse",cp=qt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=qt.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dp=0},500),Ya=1),ks||pp(),Ya};Cn.op=Qt;pt.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ya||mp(cn)||console.warn("Please gsap.registerPlugin(Observer)"),ks||pp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,v=n.event,_=n.onDragStart,m=n.onDragEnd,w=n.onDrag,b=n.onPress,S=n.onRelease,L=n.onRight,D=n.onLeft,A=n.onUp,I=n.onDown,T=n.onChangeX,M=n.onChangeY,U=n.onChange,z=n.onToggleX,W=n.onToggleY,$=n.onHover,K=n.onHoverEnd,q=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,ae=n.onGestureStart,N=n.onGestureEnd,Se=n.onWheel,Fe=n.onEnable,Ze=n.onDisable,ne=n.onClick,le=n.scrollSpeed,he=n.capture,fe=n.allowClicks,Re=n.lockAxis,Be=n.onLockAxis;this.target=a=In(a)||gr,this.vars=n,p&&(p=cn.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,le=le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(zs).lineHeight)||22);var qe,je,Xe,ze,F,Ve,me,k=this,ue=0,Le=0,be=n.passive||!h&&n.passive!==!1,C=wr(a,Cn),y=wr(a,Qt),V=C(),j=y(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",oe=Po(a),Te=a.ownerDocument||_r,pe=[0,0,0],_e=[0,0,0],Ke=0,xe=function(){return Ke=Co()},Me=function(Ge,rt){return(k.event=Ge)&&p&&tg(Ge.target,p)||rt&&se&&Ge.pointerType!=="touch"||X&&X(Ge,rt)},Ue=function(){k._vx.reset(),k._vy.reset(),je.pause(),f&&f(k)},Ne=function(){var Ge=k.deltaX=Oh(pe),rt=k.deltaY=Oh(_e),De=Math.abs(Ge)>=i,nt=Math.abs(rt)>=i;U&&(De||nt)&&U(k,Ge,rt,pe,_e),De&&(L&&k.deltaX>0&&L(k),D&&k.deltaX<0&&D(k),T&&T(k),z&&k.deltaX<0!=ue<0&&z(k),ue=k.deltaX,pe[0]=pe[1]=pe[2]=0),nt&&(I&&k.deltaY>0&&I(k),A&&k.deltaY<0&&A(k),M&&M(k),W&&k.deltaY<0!=Le<0&&W(k),Le=k.deltaY,_e[0]=_e[1]=_e[2]=0),(ze||Xe)&&(q&&q(k),Xe&&(_&&Xe===1&&_(k),w&&w(k),Xe=0),ze=!1),Ve&&!(Ve=!1)&&Be&&Be(k),F&&(Se(k),F=!1),qe=0},Pe=function(Ge,rt,De){pe[De]+=Ge,_e[De]+=rt,k._vx.update(Ge),k._vy.update(rt),c?qe||(qe=requestAnimationFrame(Ne)):Ne()},$e=function(Ge,rt){Re&&!me&&(k.axis=me=Math.abs(Ge)>Math.abs(rt)?"x":"y",Ve=!0),me!=="y"&&(pe[2]+=Ge,k._vx.update(Ge,!0)),me!=="x"&&(_e[2]+=rt,k._vy.update(rt,!0)),c?qe||(qe=requestAnimationFrame(Ne)):Ne()},ke=function(Ge){if(!Me(Ge,1)){Ge=lo(Ge,h);var rt=Ge.clientX,De=Ge.clientY,nt=rt-k.x,We=De-k.y,tt=k.isDragging;k.x=rt,k.y=De,(tt||(nt||We)&&(Math.abs(k.startX-rt)>=s||Math.abs(k.startY-De)>=s))&&(Xe||(Xe=tt?2:1),tt||(k.isDragging=!0),$e(nt,We))}},Qe=k.onPress=function(Oe){Me(Oe,1)||Oe&&Oe.button||(k.axis=me=null,je.pause(),k.isPressed=!0,Oe=lo(Oe),ue=Le=0,k.startX=k.x=Oe.clientX,k.startY=k.y=Oe.clientY,k._vx.reset(),k._vy.reset(),yn(G?a:Te,Mi[1],ke,be,!0),k.deltaX=k.deltaY=0,b&&b(k))},B=k.onRelease=function(Oe){if(!Me(Oe,1)){Mn(G?a:Te,Mi[1],ke,!0);var Ge=!isNaN(k.y-k.startY),rt=k.isDragging,De=rt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),nt=lo(Oe);!De&&Ge&&(k._vx.reset(),k._vy.reset(),h&&fe&&cn.delayedCall(.08,function(){if(Co()-Ke>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(Te.createEvent){var We=Te.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Jn,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(We)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&rt&&!G&&je.restart(!0),Xe&&Ne(),m&&rt&&m(k),S&&S(k,De)}},te=function(Ge){return Ge.touches&&Ge.touches.length>1&&(k.isGesturing=!0)&&ae(Ge,k.isDragging)},ie=function(){return(k.isGesturing=!1)||N(k)},ce=function(Ge){if(!Me(Ge)){var rt=C(),De=y();Pe((rt-V)*le,(De-j)*le,1),V=rt,j=De,f&&je.restart(!0)}},Ae=function(Ge){if(!Me(Ge)){Ge=lo(Ge,h),Se&&(F=!0);var rt=(Ge.deltaMode===1?l:Ge.deltaMode===2?Jn.innerHeight:1)*g;Pe(Ge.deltaX*rt,Ge.deltaY*rt,0),f&&!G&&je.restart(!0)}},Ce=function(Ge){if(!Me(Ge)){var rt=Ge.clientX,De=Ge.clientY,nt=rt-k.x,We=De-k.y;k.x=rt,k.y=De,ze=!0,f&&je.restart(!0),(nt||We)&&$e(nt,We)}},et=function(Ge){k.event=Ge,$(k)},vt=function(Ge){k.event=Ge,K(k)},Ot=function(Ge){return Me(Ge)||lo(Ge,h)&&ne(k)};je=k._dc=cn.delayedCall(d||.25,Ue).pause(),k.deltaX=k.deltaY=0,k._vx=Fc(0,50,!0),k._vy=Fc(0,50,!0),k.scrollX=C,k.scrollY=y,k.isDragging=k.isGesturing=k.isPressed=!1,hp(this),k.enable=function(Oe){return k.isEnabled||(yn(oe?Te:a,"scroll",Oc),o.indexOf("scroll")>=0&&yn(oe?Te:a,"scroll",ce,be,he),o.indexOf("wheel")>=0&&yn(a,"wheel",Ae,be,he),(o.indexOf("touch")>=0&&cp||o.indexOf("pointer")>=0)&&(yn(a,Mi[0],Qe,be,he),yn(Te,Mi[2],B),yn(Te,Mi[3],B),fe&&yn(a,"click",xe,!0,!0),ne&&yn(a,"click",Ot),ae&&yn(Te,"gesturestart",te),N&&yn(Te,"gestureend",ie),$&&yn(a,Br+"enter",et),K&&yn(a,Br+"leave",vt),q&&yn(a,Br+"move",Ce)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=ze=Xe=!1,k._vx.reset(),k._vy.reset(),V=C(),j=y(),Oe&&Oe.type&&Qe(Oe),Fe&&Fe(k)),k},k.disable=function(){k.isEnabled&&(Ls.filter(function(Oe){return Oe!==k&&Po(Oe.target)}).length||Mn(oe?Te:a,"scroll",Oc),k.isPressed&&(k._vx.reset(),k._vy.reset(),Mn(G?a:Te,Mi[1],ke,!0)),Mn(oe?Te:a,"scroll",ce,he),Mn(a,"wheel",Ae,he),Mn(a,Mi[0],Qe,he),Mn(Te,Mi[2],B),Mn(Te,Mi[3],B),Mn(a,"click",xe,!0),Mn(a,"click",Ot),Mn(Te,"gesturestart",te),Mn(Te,"gestureend",ie),Mn(a,Br+"enter",et),Mn(a,Br+"leave",vt),Mn(a,Br+"move",Ce),k.isEnabled=k.isPressed=k.isDragging=!1,Ze&&Ze(k))},k.kill=k.revert=function(){k.disable();var Oe=Ls.indexOf(k);Oe>=0&&Ls.splice(Oe,1),Xi===k&&(Xi=0)},Ls.push(k),G&&Po(a)&&(Xi=k),k.enable(v)},Q_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.0";qt.create=function(r){return new qt(r)};qt.register=mp;qt.getAll=function(){return Ls.slice()};qt.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};fp()&&cn.registerPlugin(qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var He,Rs,dt,At,$n,Tt,Ku,dl,qo,Do,xo,aa,mn,yl,Bc,bn,Fh,Bh,Cs,_p,Ol,gp,Tn,zc,vp,xp,fr,kc,Ju,Hs,ju,Lo,Hc,Fl,la=1,_n=Date.now,Bl=_n(),mi=0,So=0,zh=function(e,t,n){var i=Yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},kh=function(e,t){return t&&(!Yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ng=function r(){return So&&requestAnimationFrame(r)},Hh=function(){return yl=1},Vh=function(){return yl=0},bi=function(e){return e},Mo=function(e){return Math.round(e*1e5)/1e5||0},Sp=function(){return typeof window<"u"},Mp=function(){return He||Sp()&&(He=window.gsap)&&He.registerPlugin&&He},is=function(e){return!!~Ku.indexOf(e)},yp=function(e){return(e==="Height"?ju:dt["inner"+e])||$n["client"+e]||Tt["client"+e]},Ep=function(e){return Mr(e,"getBoundingClientRect")||(is(e)?function(){return Ja.width=dt.innerWidth,Ja.height=ju,Ja}:function(){return Gi(e)})},ig=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Mr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?yp(s):e["client"+s])||0}},rg=function(e,t){return!t||~Di.indexOf(e)?Ep(e):function(){return Ja}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Mr(e,n))?o()-Ep(e)()[s]:is(e)?($n[n]||Tt[n])-yp(i):e[n]-e["offset"+i])},ca=function(e,t){for(var n=0;n<Cs.length;n+=3)(!t||~t.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},Yn=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},yo=function(e){return typeof e=="number"},zr=function(e){return typeof e=="object"},co=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},us=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},hs=Math.abs,Tp="left",bp="top",Qu="right",eh="bottom",jr="width",Qr="height",Io="Right",Uo="Left",No="Top",Oo="Bottom",Zt="padding",ui="margin",Js="Width",th="Height",jt="px",hi=function(e){return dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},sg=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gi=function(e,t){var n=t&&hi(e)[Bc]!=="matrix(1, 0, 0, 1, 0, 0)"&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},wp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},og=function(e){return function(t){return He.utils.snap(wp(e),t)}},nh=function(e){var t=He.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ag=function(e){return function(t,n){return nh(wp(e))(t,n.direction)}},ua=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},an=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ha=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fa={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},qa=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},da=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,g=At.createElement("div"),v=is(n)||Mr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=v?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,b=w?c:h,S="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(S+=(i===Qt?Qu:eh)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],$a(g,0,i,w),g},$a=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Js]=1,s["border"+a+Js]=0,s[n.p]=t+"px",He.set(e,s)},ct=[],Vc={},$o,Xh=function(){return _n()-mi>34&&($o||($o=requestAnimationFrame(Zi)))},fs=function(){(!Tn||!Tn.isPressed||Tn.startX>Tt.clientWidth)&&(pt.cache++,Tn?$o||($o=requestAnimationFrame(Zi)):Zi(),mi||ss("scrollStart"),mi=_n())},zl=function(){xp=dt.innerWidth,vp=dt.innerHeight},Eo=function(e){pt.cache++,(e===!0||!mn&&!gp&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!zc||xp!==dt.innerWidth||Math.abs(dt.innerHeight-vp)>dt.innerHeight*.25))&&dl.restart(!0)},rs={},lg=[],Ap=function r(){return on(ut,"scrollEnd",r)||Yr(!0)},ss=function(e){return rs[e]&&rs[e].map(function(t){return t()})||lg},Xn=[],Rp=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},Cp=function(){return pt.forEach(function(e){return vn(e)&&++e.cacheID&&(e.rec=e())})},ih=function(e,t){var n;for(bn=0;bn<ct.length;bn++)n=ct[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Lo=!0,t&&Rp(t),t||ss("revert")},Pp=function(e,t){pt.cache++,(t||!wn)&&pt.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(dt.history.scrollRestoration=Ju=e)},wn,es=0,Yh,cg=function(){if(Yh!==es){var e=Yh=es;requestAnimationFrame(function(){return e===es&&Yr(!0)})}},Dp=function(){Tt.appendChild(Hs),ju=!Tn&&Hs.offsetHeight||dt.innerHeight,Tt.removeChild(Hs)},qh=function(e){return qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Yr=function(e,t){if($n=At.documentElement,Tt=At.body,Ku=[dt,At,$n,Tt],mi&&!e&&!Lo){an(ut,"scrollEnd",Ap);return}Dp(),wn=ut.isRefreshing=!0,Lo||Cp();var n=ss("refreshInit");_p&&ut.sort(),t||ih(),pt.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),Lo=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Hc=1,qh(!0),ct.forEach(function(i){var s=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qh(!1),Hc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),pt.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pp(Ju,1),dl.pause(),es++,wn=2,Zi(2),ct.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=ut.isRefreshing=!1,ss("refresh")},Gc=0,Za=1,Fo,Zi=function(e){if(e===2||!wn&&!Lo){ut.isUpdating=!0,Fo&&Fo.update(0);var t=ct.length,n=_n(),i=n-Bl>=50,s=t&&ct[0].scroll();if(Za=Gc>s?-1:1,wn||(Gc=s),i&&(mi&&!yl&&n-mi>200&&(mi=0,ss("scrollEnd")),xo=Bl,Bl=n),Za<0){for(bn=t;bn-- >0;)ct[bn]&&ct[bn].update(0,i);Za=1}else for(bn=0;bn<t;bn++)ct[bn]&&ct[bn].update(0,i);ut.isUpdating=!1}$o=0},Wc=[Tp,bp,eh,Qu,ui+Oo,ui+Io,ui+No,ui+Uo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ka=Wc.concat([jr,Qr,"boxSizing","max"+Js,"max"+th,"position",ui,Zt,Zt+No,Zt+Io,Zt+Oo,Zt+Uo]),ug=function(e,t,n){Vs(n);var i=e._gsap;if(i.spacerIsNative)Vs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},kl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Wc.length,o=t.style,a=e.style,l;s--;)l=Wc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[eh]=a[Qu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=pl(e,Cn)+jt,o[Qr]=pl(e,Qt)+jt,o[Zt]=a[ui]=a[bp]=a[Tp]="0",Vs(i),a[jr]=a["max"+Js]=n[jr],a[Qr]=a["max"+th]=n[Qr],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hg=/([A-Z])/g,Vs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(hg,"-$1").toLowerCase())}},pa=function(e){for(var t=Ka.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ka[s],n[Ka[s]]);return i.t=e,i},fg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ja={left:0,top:0},$h=function(e,t,n,i,s,o,a,l,c,h,f,d,p,g){vn(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?qa("0"+e.substr(3),n):0));var v=p?p.time():0,_,m,w;if(p&&p.seek(0),isNaN(e)||(e=+e),yo(e))p&&(e=He.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&$a(a,n,i,!0);else{vn(t)&&(t=t(l));var b=(e||"0").split(" "),S,L,D,A;w=In(t,l)||Tt,S=Gi(w)||{},(!S||!S.left&&!S.top)&&hi(w).display==="none"&&(A=w.style.display,w.style.display="block",S=Gi(w),A?w.style.display=A:w.style.removeProperty("display")),L=qa(b[0],S[i.d]),D=qa(b[1]||"0",n),e=S[i.p]-c[i.p]-h+L+s-D,a&&$a(a,D,i,n-D<20||a._isStart&&D>20),n-=n-D}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,T=o._isStart;_="scroll"+i.d2,$a(o,I,i,T&&I>20||!T&&(f?Math.max(Tt[_],$n[_]):o.parentNode[_])<=I+1),f&&(c=Gi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return p&&w&&(_=Gi(w),p.seek(d),m=Gi(w),p._caScrollDist=_[i.p]-m[i.p],e=e/p._caScrollDist*d),p&&p.seek(v),p?e:Math.round(e)},dg=/(webkit|moz|length|cssText|inset)/i,Zh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=hi(e);for(o in a)!+o&&!dg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}},Lp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ma=function(e,t,n){var i={};i[t.p]="+="+n,He.set(e,i)},Kh=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,p=l.onComplete,g={};c=c||n();var v=Lp(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){pt.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=He.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",n.wheelHandler),ut.isTouch&&an(e,"touchmove",n.wheelHandler),s},ut=(function(){function r(t,n){Rs||r.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!So){this.update=this.refresh=this.kill=bi;return}n=Gh(Yn(n)||yo(n)||n.nodeType?{trigger:n}:n,fa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,b=s.once,S=s.snap,L=s.pinReparent,D=s.pinSpacer,A=s.containerAnimation,I=s.fastScrollEnd,T=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Qt,U=!f&&f!==0,z=In(n.scroller||dt),W=He.core.getCache(z),$=is(z),K=("pinType"in n?n.pinType:Mr(z,"pinType")||$&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=U&&n.toggleActions.split(" "),G="markers"in n?n.markers:fa.markers,ae=$?0:parseFloat(hi(z)["border"+M.p2+Js])||0,N=this,Se=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Fe=ig(z,$,M),Ze=rg(z,$),ne=0,le=0,he=0,fe=wr(z,M),Re,Be,qe,je,Xe,ze,F,Ve,me,k,ue,Le,be,C,y,V,j,se,oe,Te,pe,_e,Ke,xe,Me,Ue,Ne,Pe,$e,ke,Qe,B,te,ie,ce,Ae,Ce,et,vt;if(N._startClamp=N._endClamp=!1,N._dir=M,_*=45,N.scroller=z,N.scroll=A?A.time.bind(A):fe,je=fe(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(_p=1,n.refreshPriority===-9999&&(Fo=N)),W.tweenScroll=W.tweenScroll||{top:Kh(z,Qt),left:Kh(z,Cn)},N.tweenTo=Re=W.tweenScroll[M.p],N.scrubDuration=function(De){te=yo(De)&&De,te?B?B.duration(De):B=He.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return m&&m(N)}}):(B&&B.progress(1).kill(),B=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(f),ke=0,l||(l=i.vars.id)),S&&((!zr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Tt.style&&He.set($?[Tt,$n]:z,{scrollBehavior:"auto"}),pt.forEach(function(De){return vn(De)&&De.target===($?At.scrollingElement||$n:z)&&(De.smooth=!1)}),qe=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?og(i):S.snapTo==="labelsDirectional"?ag(i):S.directional!==!1?function(De,nt){return nh(S.snapTo)(De,_n()-le<500?0:nt.direction)}:He.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=zr(ie)?Do(ie.min,ie.max):Do(ie,ie),ce=He.delayedCall(S.delay||te/2||.1,function(){var De=fe(),nt=_n()-le<500,We=Re.tween;if((nt||Math.abs(N.getVelocity())<10)&&!We&&!yl&&ne!==De){var tt=(De-ze)/C,Ft=i&&!U?i.totalProgress():tt,ot=nt?0:(Ft-Qe)/(_n()-xo)*1e3||0,Ct=He.utils.clamp(-tt,1-tt,hs(ot/2)*ot/.185),Xt=tt+(S.inertia===!1?0:Ct),bt,Et,xt=S,Sn=xt.onStart,St=xt.onInterrupt,Gt=xt.onComplete;if(bt=qe(Xt,N),yo(bt)||(bt=Xt),Et=Math.max(0,Math.round(ze+bt*C)),De<=F&&De>=ze&&Et!==De){if(We&&!We._initted&&We.data<=hs(Et-De))return;S.inertia===!1&&(Ct=bt-tt),Re(Et,{duration:ie(hs(Math.max(hs(Xt-Ft),hs(bt-Ft))*.185/ot/.05||0)),ease:S.ease||"power3",data:hs(Et-De),onInterrupt:function(){return ce.restart(!0)&&St&&us(N,St)},onComplete:function(){N.update(),ne=fe(),i&&!U&&(B?B.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),ke=Qe=i&&!U?i.totalProgress():N.progress,w&&w(N),Gt&&us(N,Gt)}},De,Ct*C,Et-De-Ct*C),Sn&&us(N,Sn,Re.tween)}}else N.isActive&&ne!==De&&ce.restart(!0)}).pause()),l&&(Vc[l]=N),d=N.trigger=In(d||p!==!0&&p),vt=d&&d._gsap&&d._gsap.stRevert,vt&&(vt=vt(N)),p=p===!0?d:In(p),Yn(a)&&(a={targets:d,className:a}),p&&(g===!1||g===ui||(g=!g&&p.parentNode&&p.parentNode.style&&hi(p.parentNode).display==="flex"?!1:Zt),N.pin=p,Be=He.core.getCache(p),Be.spacer?y=Be.pinState:(D&&(D=In(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),Be.spacerIsNative=!!D,D&&(Be.spacerState=pa(D))),Be.spacer=se=D||At.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),Be.pinState=y=pa(p)),n.force3D!==!1&&He.set(p,{force3D:!0}),N.spacer=se=Be.spacer,$e=hi(p),xe=$e[g+M.os2],Te=He.getProperty(p),pe=He.quickSetter(p,M.a,jt),kl(p,se,$e),j=pa(p)),G){Le=zr(G)?Gh(G,Wh):Wh,k=da("scroller-start",l,z,M,Le,0),ue=da("scroller-end",l,z,M,Le,0,k),oe=k["offset"+M.op.d2];var Ot=In(Mr(z,"content")||z);Ve=this.markerStart=da("start",l,Ot,M,Le,oe,0,A),me=this.markerEnd=da("end",l,Ot,M,Le,oe,0,A),A&&(et=He.quickSetter([Ve,me],M.a,jt)),!K&&!(Di.length&&Mr(z,"fixedMarkers")===!0)&&(sg($?Tt:z),He.set([k,ue],{force3D:!0}),Ue=He.quickSetter(k,M.a,jt),Pe=He.quickSetter(ue,M.a,jt))}if(A){var Oe=A.vars.onUpdate,Ge=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Oe&&Oe.apply(A,Ge||[])})}if(N.previous=function(){return ct[ct.indexOf(N)-1]},N.next=function(){return ct[ct.indexOf(N)+1]},N.revert=function(De,nt){if(!nt)return N.kill(!0);var We=De!==!1||!N.enabled,tt=mn;We!==N.isReverted&&(We&&(Ae=Math.max(fe(),N.scroll.rec||0),he=N.progress,Ce=i&&i.progress()),Ve&&[Ve,me,k,ue].forEach(function(Ft){return Ft.style.display=We?"none":"block"}),We&&(mn=N,N.update(We)),p&&(!L||!N.isActive)&&(We?ug(p,se,y):kl(p,se,hi(p),Me)),We||N.update(We),mn=tt,N.isReverted=We)},N.refresh=function(De,nt,We,tt){if(!((mn||!N.enabled)&&!nt)){if(p&&De&&mi){an(r,"scrollEnd",Ap);return}!wn&&Se&&Se(N),mn=N,Re.tween&&!We&&(Re.tween.kill(),Re.tween=0),B&&B.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ft=Fe(),ot=Ze(),Ct=A?A.duration():Pi(z,M),Xt=C<=.01||!C,bt=0,Et=tt||0,xt=zr(We)?We.end:n.end,Sn=n.endTrigger||d,St=zr(We)?We.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),Gt=N.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,N),u=d&&Math.max(0,ct.indexOf(N))||0,x=u,E,R,P,O,H,Z,Y,Q,ee,re,de,ge,we;for(G&&zr(We)&&(ge=He.getProperty(k,M.p),we=He.getProperty(ue,M.p));x-- >0;)Z=ct[x],Z.end||Z.refresh(0,1)||(mn=N),Y=Z.pin,Y&&(Y===d||Y===p||Y===Gt)&&!Z.isReverted&&(re||(re=[]),re.unshift(Z),Z.revert(!0,!0)),Z!==ct[x]&&(u--,x--);for(vn(St)&&(St=St(N)),St=zh(St,"start",N),ze=$h(St,d,Ft,M,fe(),Ve,k,N,ot,ae,K,Ct,A,N._startClamp&&"_startClamp")||(p?-.001:0),vn(xt)&&(xt=xt(N)),Yn(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(Yn(St)?St.split(" ")[0]:"")+xt:(bt=qa(xt.substr(2),Ft),xt=Yn(St)?St:(A?He.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ze):ze)+bt,Sn=d)),xt=zh(xt,"end",N),F=Math.max(ze,$h(xt||(Sn?"100% 0":Ct),Sn,Ft,M,fe()+bt,me,ue,N,ot,ae,K,Ct,A,N._endClamp&&"_endClamp"))||-.001,bt=0,x=u;x--;)Z=ct[x]||{},Y=Z.pin,Y&&Z.start-Z._pinPush<=ze&&!A&&Z.end>0&&(E=Z.end-(N._startClamp?Math.max(0,Z.start):Z.start),(Y===d&&Z.start-Z._pinPush<ze||Y===Gt)&&isNaN(St)&&(bt+=E*(1-Z.progress)),Y===p&&(Et+=E));if(ze+=bt,F+=bt,N._startClamp&&(N._startClamp+=bt),N._endClamp&&!wn&&(N._endClamp=F||-.001,F=Math.min(F,Pi(z,M))),C=F-ze||(ze-=.01)&&.001,Xt&&(he=He.utils.clamp(0,1,He.utils.normalize(ze,F,Ae))),N._pinPush=Et,Ve&&bt&&(E={},E[M.a]="+="+bt,Gt&&(E[M.p]="-="+fe()),He.set([Ve,me],E)),p&&!(Hc&&N.end>=Pi(z,M)))E=hi(p),O=M===Qt,P=fe(),_e=parseFloat(Te(M.a))+Et,!Ct&&F>1&&(de=($?At.scrollingElement||$n:z).style,de={style:de,value:de["overflow"+M.a.toUpperCase()]},$&&hi(Tt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(de.style["overflow"+M.a.toUpperCase()]="scroll")),kl(p,se,E),j=pa(p),R=Gi(p,!0),Q=K&&wr(z,O?Cn:Qt)(),g?(Me=[g+M.os2,C+Et+jt],Me.t=se,x=g===Zt?pl(p,M)+C+Et:0,x&&(Me.push(M.d,x+jt),se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),Vs(Me),Gt&&ct.forEach(function(ye){ye.pin===Gt&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),K&&fe(Ae)):(x=pl(p,M),x&&se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+jt)),K&&(H={top:R.top+(O?P-ze:Q)+jt,left:R.left+(O?Q:P-ze)+jt,boxSizing:"border-box",position:"fixed"},H[jr]=H["max"+Js]=Math.ceil(R.width)+jt,H[Qr]=H["max"+th]=Math.ceil(R.height)+jt,H[ui]=H[ui+No]=H[ui+Io]=H[ui+Oo]=H[ui+Uo]="0",H[Zt]=E[Zt],H[Zt+No]=E[Zt+No],H[Zt+Io]=E[Zt+Io],H[Zt+Oo]=E[Zt+Oo],H[Zt+Uo]=E[Zt+Uo],V=fg(y,H,L),wn&&fe(0)),i?(ee=i._initted,Ol(1),i.render(i.duration(),!0,!0),Ke=Te(M.a)-_e+C+Et,Ne=Math.abs(C-Ke)>1,K&&Ne&&V.splice(V.length-2,2),i.render(0,!0,!0),ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ol(0)):Ke=C,de&&(de.value?de.style["overflow"+M.a.toUpperCase()]=de.value:de.style.removeProperty("overflow-"+M.a));else if(d&&fe()&&!A)for(R=d.parentNode;R&&R!==Tt;)R._pinOffset&&(ze-=R._pinOffset,F-=R._pinOffset),R=R.parentNode;re&&re.forEach(function(ye){return ye.revert(!1,!0)}),N.start=ze,N.end=F,je=Xe=wn?Ae:fe(),!A&&!wn&&(je<Ae&&fe(Ae),N.scroll.rec=0),N.revert(!1,!0),le=_n(),ce&&(ne=-1,ce.restart(!0)),mn=0,i&&U&&(i._initted||Ce)&&i.progress()!==Ce&&i.progress(Ce||0,!0).render(i.time(),!0,!0),(Xt||he!==N.progress||A||v||i&&!i._initted)&&(i&&!U&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ze<-.001&&!he?He.utils.normalize(ze,F,0):he,!0),N.progress=Xt||(je-ze)/C===he?0:he),p&&g&&(se._pinOffset=Math.round(N.progress*Ke)),B&&B.invalidate(),isNaN(ge)||(ge-=He.getProperty(k,M.p),we-=He.getProperty(ue,M.p),ma(k,M,ge),ma(Ve,M,ge-(tt||0)),ma(ue,M,we),ma(me,M,we-(tt||0))),Xt&&!wn&&N.update(),h&&!wn&&!be&&(be=!0,h(N),be=!1)}},N.getVelocity=function(){return(fe()-Xe)/(_n()-xo)*1e3||0},N.endAnimation=function(){co(N.callbackAnimation),i&&(B?B.progress(1):i.paused()?U||co(i,N.direction<0,1):co(i,i.reversed()))},N.labelToScroll=function(De){return i&&i.labels&&(ze||N.refresh()||ze)+i.labels[De]/i.duration()*C||0},N.getTrailing=function(De){var nt=ct.indexOf(N),We=N.direction>0?ct.slice(0,nt).reverse():ct.slice(nt+1);return(Yn(De)?We.filter(function(tt){return tt.vars.preventOverlaps===De}):We).filter(function(tt){return N.direction>0?tt.end<=ze:tt.start>=F})},N.update=function(De,nt,We){if(!(A&&!We&&!De)){var tt=wn===!0?Ae:N.scroll(),Ft=De?0:(tt-ze)/C,ot=Ft<0?0:Ft>1?1:Ft||0,Ct=N.progress,Xt,bt,Et,xt,Sn,St,Gt,u;if(nt&&(Xe=je,je=A?fe():tt,S&&(Qe=ke,ke=i&&!U?i.totalProgress():ot)),_&&p&&!mn&&!la&&mi&&(!ot&&ze<tt+(tt-Xe)/(_n()-xo)*_?ot=1e-4:ot===1&&F>tt+(tt-Xe)/(_n()-xo)*_&&(ot=.9999)),ot!==Ct&&N.enabled){if(Xt=N.isActive=!!ot&&ot<1,bt=!!Ct&&Ct<1,St=Xt!==bt,Sn=St||!!ot!=!!Ct,N.direction=ot>Ct?1:-1,N.progress=ot,Sn&&!mn&&(Et=ot&&!Ct?0:ot===1?1:Ct===1?2:3,U&&(xt=!St&&X[Et+1]!=="none"&&X[Et+1]||X[Et],u=i&&(xt==="complete"||xt==="reset"||xt in i))),T&&(St||u)&&(u||f||!i)&&(vn(T)?T(N):N.getTrailing(T).forEach(function(P){return P.endAnimation()})),U||(B&&!mn&&!la?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",ot,i._tTime/i._tDur):(B.vars.totalProgress=ot,B.invalidate().restart())):i&&i.totalProgress(ot,!!(mn&&(le||De)))),p){if(De&&g&&(se.style[g+M.os2]=xe),!K)pe(Mo(_e+Ke*ot));else if(Sn){if(Gt=!De&&ot>Ct&&F+1>tt&&tt+1>=Pi(z,M),L)if(!De&&(Xt||Gt)){var x=Gi(p,!0),E=tt-ze;Zh(p,Tt,x.top+(M===Qt?E:0)+jt,x.left+(M===Qt?0:E)+jt)}else Zh(p,se);Vs(Xt||Gt?V:j),Ne&&ot<1&&Xt||pe(_e+(ot===1&&!Gt?Ke:0))}}S&&!Re.tween&&!mn&&!la&&ce.restart(!0),a&&(St||b&&ot&&(ot<1||!Fl))&&qo(a.targets).forEach(function(P){return P.classList[Xt||b?"add":"remove"](a.className)}),o&&!U&&!De&&o(N),Sn&&!mn?(U&&(u&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),o&&o(N)),(St||!Fl)&&(c&&St&&us(N,c),q[Et]&&us(N,q[Et]),b&&(ot===1?N.kill(!1,1):q[Et]=0),St||(Et=ot===1?1:3,q[Et]&&us(N,q[Et]))),I&&!Xt&&Math.abs(N.getVelocity())>(yo(I)?I:2500)&&(co(N.callbackAnimation),B?B.progress(1):co(i,xt==="reverse"?1:!ot,1))):U&&o&&!mn&&o(N)}if(Pe){var R=A?tt/A.duration()*(A._caScrollDist||0):tt;Ue(R+(k._isFlipped?1:0)),Pe(R)}et&&et(-tt/A.duration()*(A._caScrollDist||0))}},N.enable=function(De,nt){N.enabled||(N.enabled=!0,an(z,"resize",Eo),$||an(z,"scroll",fs),Se&&an(r,"refreshInit",Se),De!==!1&&(N.progress=he=0,je=Xe=ne=fe()),nt!==!1&&N.refresh())},N.getTween=function(De){return De&&Re?Re.tween:B},N.setPositions=function(De,nt,We,tt){if(A){var Ft=A.scrollTrigger,ot=A.duration(),Ct=Ft.end-Ft.start;De=Ft.start+Ct*De/ot,nt=Ft.start+Ct*nt/ot}N.refresh(!1,!1,{start:kh(De,We&&!!N._startClamp),end:kh(nt,We&&!!N._endClamp)},tt),N.update()},N.adjustPinSpacing=function(De){if(Me&&De){var nt=Me.indexOf(M.d)+1;Me[nt]=parseFloat(Me[nt])+De+jt,Me[1]=parseFloat(Me[1])+De+jt,Vs(Me)}},N.disable=function(De,nt){if(De!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,nt||B&&B.pause(),Ae=0,Be&&(Be.uncache=1),Se&&on(r,"refreshInit",Se),ce&&(ce.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!$)){for(var We=ct.length;We--;)if(ct[We].scroller===z&&ct[We]!==N)return;on(z,"resize",Eo),$||on(z,"scroll",fs)}},N.kill=function(De,nt){N.disable(De,nt),B&&!nt&&B.kill(),l&&delete Vc[l];var We=ct.indexOf(N);We>=0&&ct.splice(We,1),We===bn&&Za>0&&bn--,We=0,ct.forEach(function(tt){return tt.scroller===N.scroller&&(We=1)}),We||wn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,De&&i.revert({kill:!1}),nt||i.kill()),Ve&&[Ve,me,k,ue].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),Fo===N&&(Fo=0),p&&(Be&&(Be.uncache=1),We=0,ct.forEach(function(tt){return tt.pin===p&&We++}),We||(Be.spacer=0)),n.onKill&&n.onKill(N)},ct.push(N),N.enable(!1,!1),vt&&vt(N),i&&i.add&&!C){var rt=N.update;N.update=function(){N.update=rt,pt.cache++,ze||F||N.refresh()},He.delayedCall(.01,N.update),C=.01,ze=F=0}else N.refresh();p&&cg()},r.register=function(n){return Rs||(He=n||Mp(),Sp()&&window.document&&r.enable(),Rs=So),Rs},r.defaults=function(n){if(n)for(var i in n)fa[i]=n[i];return fa},r.disable=function(n,i){So=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),on(dt,"wheel",fs),on(At,"scroll",fs),clearInterval(aa),on(At,"touchcancel",bi),on(Tt,"touchstart",bi),ua(on,At,"pointerdown,touchstart,mousedown",Hh),ua(on,At,"pointerup,touchend,mouseup",Vh),dl.kill(),ca(on);for(var s=0;s<pt.length;s+=3)ha(on,pt[s],pt[s+1]),ha(on,pt[s],pt[s+2])},r.enable=function(){if(dt=window,At=document,$n=At.documentElement,Tt=At.body,He){if(qo=He.utils.toArray,Do=He.utils.clamp,kc=He.core.context||bi,Ol=He.core.suppressOverwrites||bi,Ju=dt.history.scrollRestoration||"auto",Gc=dt.pageYOffset||0,He.core.globals("ScrollTrigger",r),Tt){So=1,Hs=document.createElement("div"),Hs.style.height="100vh",Hs.style.position="absolute",Dp(),ng(),qt.register(He),r.isTouch=qt.isTouch,fr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zc=qt.isTouch===1,an(dt,"wheel",fs),Ku=[dt,At,$n,Tt],He.matchMedia?(r.matchMedia=function(h){var f=He.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},He.addEventListener("matchMediaInit",function(){Cp(),ih()}),He.addEventListener("matchMediaRevert",function(){return Rp()}),He.addEventListener("matchMedia",function(){Yr(0,1),ss("matchMedia")}),He.matchMedia().add("(orientation: portrait)",function(){return zl(),zl})):console.warn("Requires GSAP 3.11.0 or later"),zl(),an(At,"scroll",fs);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,o=He.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Gi(Tt),Qt.m=Math.round(a.top+Qt.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),aa=setInterval(Xh,250),He.delayedCall(.5,function(){return la=0}),an(At,"touchcancel",bi),an(Tt,"touchstart",bi),ua(an,At,"pointerdown,touchstart,mousedown",Hh),ua(an,At,"pointerup,touchend,mouseup",Vh),Bc=He.utils.checkPrefix("transform"),Ka.push(Bc),Rs=_n(),dl=He.delayedCall(.2,Yr).pause(),Cs=[At,"visibilitychange",function(){var h=dt.innerWidth,f=dt.innerHeight;At.hidden?(Fh=h,Bh=f):(Fh!==h||Bh!==f)&&Eo()},At,"DOMContentLoaded",Yr,dt,"load",Yr,dt,"resize",Eo],ca(an),ct.forEach(function(h){return h.enable(0,1)}),l=0;l<pt.length;l+=3)ha(on,pt[l],pt[l+1]),ha(on,pt[l],pt[l+2])}else if(At){var c=function h(){r.enable(),At.removeEventListener("DOMContentLoaded",h)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Fl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(aa)||(aa=i)&&setInterval(Xh,i),"ignoreMobileResize"in n&&(zc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ca(on)||ca(an,n.autoRefreshEvents||"none"),gp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),o=pt.indexOf(s),a=is(s);~o&&pt.splice(o,a?6:2),i&&(a?Di.unshift(dt,i,Tt,i,$n,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Yn(n)?In(n):n).getBoundingClientRect(),a=o[s?jr:Qr]*i||0;return s?o.right-a>0&&o.left+a<dt.innerWidth:o.bottom-a>0&&o.top+a<dt.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=In(n));var o=n.getBoundingClientRect(),a=o[s?jr:Qr],l=i==null?a/2:i in ml?ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/dt.innerWidth:(o.top+l)/dt.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=rs.killAll||[];rs={},i.forEach(function(s){return s()})}},r})();ut.version="3.15.0";ut.saveStyles=function(r){return r?qo(r).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),kc())}}):Xn};ut.revert=function(r,e){return ih(!r,e)};ut.create=function(r,e){return new ut(r,e)};ut.refresh=function(r){return r?Eo(!0):(Rs||ut.register())&&Yr(!0)};ut.update=function(r){return++pt.cache&&Zi(r===!0?2:0)};ut.clearScrollMemory=Pp;ut.maxScroll=function(r,e){return Pi(r,e?Cn:Qt)};ut.getScrollFunc=function(r,e){return wr(In(r),e?Cn:Qt)};ut.getById=function(r){return Vc[r]};ut.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ut.isScrolling=function(){return!!mi};ut.snapDirectional=nh;ut.addEventListener=function(r,e){var t=rs[r]||(rs[r]=[]);~t.indexOf(e)||t.push(e)};ut.removeEventListener=function(r,e){var t=rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ut.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],p=He.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return vn(s)&&(s=s(),an(ut,"refresh",function(){return s=e.batchMax()})),qo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ut.create(c))}),t};var Jh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===$n&&r(Tt,t)},_a={auto:1,scroll:1},pg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||He.core.getCache(s),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_a[(l=hi(s)).overflowY]||_a[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!is(s)&&(_a[(l=hi(s)).overflowY]||_a[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ip=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&an(At,qt.eventTypes[0],Qh,!1,!0)},onDisable:function(){return on(At,qt.eventTypes[0],Qh,!0)}})},mg=/(input|label|select|textarea)/i,jh,Qh=function(e){var t=mg.test(e.target.tagName);(t||jh)&&(e._gsapAllow=!0,jh=t)},_g=function(e){zr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=In(e.target)||$n,h=He.core.globals().ScrollSmoother,f=h&&h.get(),d=fr&&(e.content&&In(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=wr(c,Qt),g=wr(c,Cn),v=1,_=(qt.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,m=0,w=vn(i)?function(){return i(a)}:function(){return i||2.8},b,S,L=Ip(c,e.type,!0,s),D=function(){return S=!1},A=bi,I=bi,T=function(){l=Pi(c,Qt),I=Do(fr?1:0,l),n&&(A=Do(0,Pi(c,Cn))),b=es},M=function(){d._gsap.y=Mo(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(S){requestAnimationFrame(D);var G=Mo(a.deltaY/2),ae=I(p.v-G);if(d&&ae!==p.v+p.offset){p.offset=ae-p.v;var N=Mo((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",d._gsap.y=N+"px",p.cacheID=pt.cache,Zi()}return!0}p.offset&&M(),S=!0},z,W,$,K,q=function(){T(),z.isActive()&&z.vars.scrollY>l&&(p()>l?z.progress(1)&&p(l):z.resetTo("scrollY",l))};return d&&He.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return fr&&X.type==="touchmove"&&U()||v>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=v;v=Mo((dt.visualViewport&&dt.visualViewport.scale||1)/_),z.pause(),X!==v&&Hl(c,v>1.01?!0:n?!1:"x"),W=g(),$=p(),T(),b=es},e.onRelease=e.onGestureStart=function(X,G){if(p.offset&&M(),!G)K.restart(!0);else{pt.cache++;var ae=w(),N,Se;n&&(N=g(),Se=N+ae*.05*-X.velocityX/.227,ae*=Jh(g,N,Se,Pi(c,Cn)),z.vars.scrollX=A(Se)),N=p(),Se=N+ae*.05*-X.velocityY/.227,ae*=Jh(p,N,Se,Pi(c,Qt)),z.vars.scrollY=I(Se),z.invalidate().duration(ae).play(.01),(fr&&z.vars.scrollY>=l||N>=l-1)&&He.to({},{onUpdate:q,duration:ae})}o&&o(X)},e.onWheel=function(){z._ts&&z.pause(),_n()-m>1e3&&(b=0,m=_n())},e.onChange=function(X,G,ae,N,Se){if(es!==b&&T(),G&&n&&g(A(N[2]===G?W+(X.startX-X.x):g()+G-N[1])),ae){p.offset&&M();var Fe=Se[2]===ae,Ze=Fe?$+X.startY-X.y:p()+ae-Se[1],ne=I(Ze);Fe&&Ze!==ne&&($+=ne-Ze),p(ne)}(ae||G)&&Zi()},e.onEnable=function(){Hl(c,n?!1:"x"),ut.addEventListener("refresh",q),an(dt,"resize",q),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),L.enable()},e.onDisable=function(){Hl(c,!0),on(dt,"resize",q),ut.removeEventListener("refresh",q),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=fr,fr&&!p()&&p(1),fr&&He.ticker.add(bi),K=a._dc,z=He.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lp(p,p(),function(){return z.pause()})},onUpdate:Zi,onComplete:K.vars.onComplete}),a};ut.sort=function(r){if(vn(r))return ct.sort(r);var e=dt.pageYOffset||0;return ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+dt.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ut.observe=function(r){return new qt(r)};ut.normalizeScroll=function(r){if(typeof r>"u")return Tn;if(r===!0&&Tn)return Tn.enable();if(r===!1){Tn&&Tn.kill(),Tn=r;return}var e=r instanceof qt?r:_g(r);return Tn&&Tn.target===e.target&&Tn.kill(),is(e.target)&&(Tn=e),e};ut.core={_getVelocityProp:Fc,_inputObserver:Ip,_scrollers:pt,_proxies:Di,bridge:{ss:function(){mi||ss("scrollStart"),mi=_n()},ref:function(){return mn}}};Mp()&&He.registerPlugin(ut);const gg=[{title:"TradeForge",tags:"concept • web • solidity • development • 3d",url:"https://kianpk.github.io/tradeforge/",hue:"linear-gradient(135deg, #1a2ffb, #6d8cff 40%, #0b1024)"},{title:"Zyrax Drive",tags:"web • design • development • 3d • animation",url:"https://kianpk.github.io/zyrax-drive/",hue:"linear-gradient(135deg, #101018, #2a1a5e 45%, #c1ff00)"},{title:"Playfield",tags:"web • design • development • 3d • physics",url:"https://kianpk.github.io/playfield/",hue:"linear-gradient(135deg, #0e2a22, #1db954 50%, #d9ffe8)"},{title:"Orbit Desk",tags:"web • design • development • 3d • r3f",url:"https://kianpk.github.io/orbit-desk/",hue:"linear-gradient(145deg, #1b1030, #8832f7 55%, #ffb4ef)"},{title:"VaultForge",tags:"solidity • protocol • development",url:"https://github.com/kianPk/vaultforge",hue:"linear-gradient(135deg, #141820, #3d4a66 40%, #9fd0ff)"},{title:"LoadForge",tags:"rust • systems • development",url:"https://github.com/kianPk/loadforge",hue:"linear-gradient(135deg, #2a1208, #ff8039 50%, #ffe0c8)"},{title:"GateProxy",tags:"go • networking • development",url:"https://github.com/kianPk/gateproxy",hue:"linear-gradient(135deg, #071820, #00b7c2 50%, #c8fbff)"},{title:"Honeypot Deck",tags:"web • security • vue • lab",url:"https://kianpk.github.io/honeypot-deck/",hue:"linear-gradient(135deg, #2a0810, #ff4c41 45%, #ffd0d0)"},{title:"Sentinel Grid",tags:"web • security • visualization",url:"https://kianpk.github.io/sentinel-grid/",hue:"linear-gradient(135deg, #0a1420, #1a2ffb 50%, #9db4ff)"},{title:"Lumen Commerce",tags:"web • design • development • commerce",url:"https://kianpk.github.io/lumen-commerce/",hue:"linear-gradient(135deg, #20180a, #ffd24a 50%, #fff4c8)"},{title:"Netprobe Lab",tags:"concept • web • security lab",url:"https://kianpk.github.io/netprobe-lab/",hue:"linear-gradient(135deg, #120820, #b65fff 50%, #f0d8ff)"},{title:"PulseHub",tags:"go • realtime • development",url:"https://github.com/kianPk/pulsehub",hue:"linear-gradient(135deg, #081410, #a2ffab 50%, #e8ffe9)"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="170",vg=0,ef=1,xg=2,Up=1,Sg=2,ki=3,Ar=0,kn=1,Ri=2,yr=0,Gs=1,tf=2,nf=3,rf=4,Mg=5,Gr=100,yg=101,Eg=102,Tg=103,bg=104,wg=200,Ag=201,Rg=202,Cg=203,Xc=204,Yc=205,Pg=206,Dg=207,Lg=208,Ig=209,Ug=210,Ng=211,Og=212,Fg=213,Bg=214,qc=0,$c=1,Zc=2,js=3,Kc=4,Jc=5,jc=6,Qc=7,Np=0,zg=1,kg=2,Ki=0,Hg=1,Vg=2,Gg=3,Wg=4,Xg=5,Yg=6,qg=7,Op=300,Qs=301,eo=302,eu=303,tu=304,El=306,_l=1e3,Yi=1001,nu=1002,Pn=1003,$g=1004,ga=1005,un=1006,Vl=1007,vr=1008,er=1009,Fp=1010,Bp=1011,Zo=1012,sh=1013,os=1014,ti=1015,qi=1016,oh=1017,ah=1018,to=1020,zp=35902,kp=1021,Hp=1022,ni=1023,Vp=1024,Gp=1025,Ws=1026,no=1027,lh=1028,ch=1029,Wp=1030,uh=1031,hh=1033,ja=33776,Qa=33777,el=33778,tl=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,_u=37814,gu=37815,vu=37816,xu=37817,Su=37818,Mu=37819,yu=37820,Eu=37821,nl=36492,Tu=36494,bu=36495,Xp=36283,wu=36284,Au=36285,Ru=36286,Zg=3200,Kg=3201,Jg=0,jg=1,jn="",An="srgb",tr="srgb-linear",Tl="linear",Pt="srgb",ds=7680,sf=519,Qg=512,e0=513,t0=514,Yp=515,n0=516,i0=517,r0=518,s0=519,of=35044,va=35048,af="300 es",$i=2e3,gl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,Cu=180/Math.PI;function jo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Rn(r,e,t){return Math.max(e,Math.min(t,r))}function o0(r,e){return(r%e+e)%e}function Wl(r,e,t){return(1-t)*r+t*e}function uo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],v=i[0],_=i[3],m=i[6],w=i[1],b=i[4],S=i[7],L=i[2],D=i[5],A=i[8];return s[0]=o*v+a*w+l*L,s[3]=o*_+a*b+l*D,s[6]=o*m+a*S+l*A,s[1]=c*v+h*w+f*L,s[4]=c*_+h*b+f*D,s[7]=c*m+h*S+f*A,s[2]=d*v+p*w+g*L,s[5]=d*_+p*b+g*D,s[8]=d*m+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new st;function qp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ko(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function a0(){const r=Ko("canvas");return r.style.display="block",r}const lf={};function To(r){r in lf||(lf[r]=!0,console.warn(r))}function l0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function c0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function u0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=Ji(r.r),r.g=Ji(r.g),r.b=Ji(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Tl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const cf=[.64,.33,.3,.6,.15,.06],uf=[.2126,.7152,.0722],hf=[.3127,.329],ff=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),df=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[tr]:{primaries:cf,whitePoint:hf,transfer:Tl,toXYZ:ff,fromXYZ:df,luminanceCoefficients:uf,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:cf,whitePoint:hf,transfer:Pt,toXYZ:ff,fromXYZ:df,luminanceCoefficients:uf,outputColorSpaceConfig:{drawingBufferColorSpace:An}}});let ps;class h0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ko("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f0=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yl(i[o].image)):s.push(Yl(i[o]))}else s=Yl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?h0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d0=0;class fn extends ro{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Yi,i=Yi,s=un,o=vr,a=ni,l=er,c=fn.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=jo(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Op;fn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,L=(m+1)/2,D=(h+d)/4,A=(f+v)/4,I=(g+_)/4;return b>S&&b>L?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=D/n,s=A/n):S>L?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=D/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=I/s),this.set(n,i,s,t),this}let w=Math.sqrt((_-g)*(_-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-g)/w,this.y=(f-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p0 extends ro{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends p0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zp extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let _=1-a;const m=l*d+c*p+h*g+f*v,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),D=Math.atan2(L,m*w);_=Math.sin(_*D)/L,a=Math.sin(a*D)/L}const S=a*w;if(l=l*_+d*S,c=c*_+p*S,h=h*_+g*S,f=f*_+v*S,_===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-a*p,e[t+2]=c*g+h*p+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new J,pf=new nr;class Qo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Sa.subVectors(this.max,ho),ms.subVectors(e.a,ho),_s.subVectors(e.b,ho),gs.subVectors(e.c,ho),sr.subVectors(_s,ms),or.subVectors(gs,_s),Dr.subVectors(ms,gs);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Dr.z,Dr.y,sr.z,0,-sr.x,or.z,0,-or.x,Dr.z,0,-Dr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Dr.y,Dr.x,0];return!$l(t,ms,_s,gs,Sa)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,ms,_s,gs,Sa))?!1:(Ma.crossVectors(sr,or),t=[Ma.x,Ma.y,Ma.z],$l(t,ms,_s,gs,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new J,new J,new J,new J,new J,new J,new J,new J],gi=new J,xa=new Qo,ms=new J,_s=new J,gs=new J,sr=new J,or=new J,Dr=new J,ho=new J,Sa=new J,Ma=new J,Lr=new J;function $l(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Lr.fromArray(r,s);const a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),h=n.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _0=new Qo,fo=new J,Zl=new J;class fh{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Zl)),this.expandByPoint(fo.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new J,Kl=new J,ya=new J,ar=new J,Jl=new J,Ea=new J,jl=new J;class g0{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Kl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=ar.dot(this.direction),l=-ar.dot(ya),c=ar.lengthSq(),h=Math.abs(1-o*o);let f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Kl).addScaledVector(ya,d),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,i,s){Jl.subVectors(t,e),Ea.subVectors(n,e),jl.crossVectors(Jl,Ea);let o=this.direction.dot(jl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(ar,Ea));if(l<0)return null;const c=a*this.direction.dot(Jl.cross(ar));if(c<0||l+c>o)return null;const h=-a*ar.dot(jl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_)}set(e,t,n,i,s,o,a,l,c,h,f,d,p,g,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=c*h,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),lr.crossVectors(n,Gn),lr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),lr.crossVectors(n,Gn)),lr.normalize(),Ta.crossVectors(Gn,lr),i[0]=lr.x,i[4]=Ta.x,i[8]=Gn.x,i[1]=lr.y,i[5]=Ta.y,i[9]=Gn.y,i[2]=lr.z,i[6]=Ta.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],v=n[6],_=n[10],m=n[14],w=n[3],b=n[7],S=n[11],L=n[15],D=i[0],A=i[4],I=i[8],T=i[12],M=i[1],U=i[5],z=i[9],W=i[13],$=i[2],K=i[6],q=i[10],X=i[14],G=i[3],ae=i[7],N=i[11],Se=i[15];return s[0]=o*D+a*M+l*$+c*G,s[4]=o*A+a*U+l*K+c*ae,s[8]=o*I+a*z+l*q+c*N,s[12]=o*T+a*W+l*X+c*Se,s[1]=h*D+f*M+d*$+p*G,s[5]=h*A+f*U+d*K+p*ae,s[9]=h*I+f*z+d*q+p*N,s[13]=h*T+f*W+d*X+p*Se,s[2]=g*D+v*M+_*$+m*G,s[6]=g*A+v*U+_*K+m*ae,s[10]=g*I+v*z+_*q+m*N,s[14]=g*T+v*W+_*X+m*Se,s[3]=w*D+b*M+S*$+L*G,s[7]=w*A+b*U+S*K+L*ae,s[11]=w*I+b*z+S*q+L*N,s[15]=w*T+b*W+S*X+L*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],_=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*p-n*l*p)+v*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+_*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*h-n*c*h)+m*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],_=e[14],m=e[15],w=f*_*c-v*d*c+v*l*p-a*_*p-f*l*m+a*d*m,b=g*d*c-h*_*c-g*l*p+o*_*p+h*l*m-o*d*m,S=h*v*c-g*f*c+g*a*p-o*v*p-h*a*m+o*f*m,L=g*f*l-h*v*l-g*a*d+o*v*d+h*a*_-o*f*_,D=t*w+n*b+i*S+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=w*A,e[1]=(v*d*s-f*_*s-v*i*p+n*_*p+f*i*m-n*d*m)*A,e[2]=(a*_*s-v*l*s+v*i*c-n*_*c-a*i*m+n*l*m)*A,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=b*A,e[5]=(h*_*s-g*d*s+g*i*p-t*_*p-h*i*m+t*d*m)*A,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=S*A,e[9]=(g*f*s-h*v*s-g*n*p+t*v*p+h*n*m-t*f*m)*A,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=L*A,e[13]=(h*v*i-g*f*i+g*n*d-t*v*d-h*n*_+t*f*_)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*_-t*a*_)*A,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,g=s*f,v=o*h,_=o*f,m=a*f,w=l*c,b=l*h,S=l*f,L=n.x,D=n.y,A=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+S)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(p-S)*D,i[5]=(1-(d+m))*D,i[6]=(_+w)*D,i[7]=0,i[8]=(g+b)*A,i[9]=(_-w)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/s,h=1/o,f=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=$i){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===$i)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===gl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=$i){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-s),d=(t+e)*c,p=(n+i)*h;let g,v;if(a===$i)g=(o+s)*f,v=-2*f;else if(a===gl)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new J,vi=new Jt,v0=new J(0,0,0),x0=new J(1,1,1),lr=new J,Ta=new J,Gn=new J,mf=new Jt,_f=new nr;class Ii{constructor(e=0,t=0,n=0,i=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S0=0;const gf=new J,xs=new nr,Oi=new Jt,ba=new J,po=new J,M0=new J,y0=new nr,vf=new J(1,0,0),xf=new J(0,1,0),Sf=new J(0,0,1),Mf={type:"added"},E0={type:"removed"},Ss={type:"childadded",child:null},Ql={type:"childremoved",child:null};class ri extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new J,t=new Ii,n=new nr,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new st}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(po,ba,this.up):Oi.lookAt(ba,po,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Oi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ri.DEFAULT_UP=new J(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new J,Fi=new J,ec=new J,Bi=new J,Ms=new J,ys=new J,yf=new J,tc=new J,nc=new J,ic=new J,rc=new zt,sc=new zt,oc=new zt;class Ei{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Fi.subVectors(n,t),ec.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(Fi),l=xi.dot(ec),c=Fi.dot(Fi),h=Fi.dot(ec),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return rc.setScalar(0),sc.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(e,t),sc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(rc,s.x),o.addScaledVector(sc,s.y),o.addScaledVector(oc,s.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Fi.subVectors(e,t),xi.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),xi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ms.subVectors(i,n),ys.subVectors(s,n),tc.subVectors(e,n);const l=Ms.dot(tc),c=ys.dot(tc);if(l<=0&&c<=0)return t.copy(n);nc.subVectors(e,i);const h=Ms.dot(nc),f=ys.dot(nc);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ms,o);ic.subVectors(e,s);const p=Ms.dot(ic),g=ys.dot(ic);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ys,a);const _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return yf.subVectors(s,i),a=(f-h)/(f-h+(p-g)),t.copy(i).addScaledVector(yf,a);const m=1/(_+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Ms,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ac(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=o0(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ac(o,s,e+1/3),this.g=ac(o,s,e),this.b=ac(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Mt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Rn(pn.r*255,0,255))*65536+Math.round(Rn(pn.g*255,0,255))*256+Math.round(Rn(pn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=An){Mt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(wa);const n=Wl(cr.h,wa.h,t),i=Wl(cr.s,wa.s,t),s=Wl(cr.l,wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new mt;mt.NAMES=Jp;let T0=0;class bl extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=jo(),this.name="",this.blending=Gs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dh extends bl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wi=b0();function b0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function w0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Rn(r,-65504,65504),Wi.floatView[0]=r;const e=Wi.uint32View[0],t=e>>23&511;return Wi.baseTable[t]+((e&8388607)>>Wi.shiftTable[t])}function A0(r){const e=r>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[e]+(r&1023)]+Wi.exponentTable[e],Wi.floatView[0]}const Ef={toHalfFloat:w0,fromHalfFloat:A0},$t=new J,Aa=new Rt;class si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=uo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==of&&(e.usage=this.usage),e}}class jp extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qp extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ts extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let R0=0;const li=new Jt,lc=new ri,Es=new J,Wn=new Qo,mo=new Qo,rn=new J;class ir extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?Qp:jp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ts(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Wn.min,mo.min),Wn.expandByPoint(rn),rn.addVectors(Wn.max,mo.max),Wn.expandByPoint(rn)):(Wn.expandByPoint(mo.min),Wn.expandByPoint(mo.max))}Wn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),rn.add(Es)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new J,l[I]=new J;const c=new J,h=new J,f=new J,d=new Rt,p=new Rt,g=new Rt,v=new J,_=new J;function m(I,T,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(v),a[T].add(v),a[M].add(v),l[I].add(_),l[T].add(_),l[M].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,T=w.length;I<T;++I){const M=w[I],U=M.start,z=M.count;for(let W=U,$=U+z;W<$;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new J,S=new J,L=new J,D=new J;function A(I){L.fromBufferAttribute(i,I),D.copy(L);const T=a[I];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(D,T);const U=S.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,U)}for(let I=0,T=w.length;I<T;++I){const M=w[I],U=M.start,z=M.count;for(let W=U,$=U+z;W<$;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new J,s=new J,o=new J,a=new J,l=new J,c=new J,h=new J,f=new J;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new si(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new Jt,Ir=new g0,Ra=new fh,bf=new J,Ca=new J,Pa=new J,Da=new J,cc=new J,La=new J,wf=new J,Ia=new J;class Nn extends ri{constructor(e=new ir,t=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(cc.fromBufferAttribute(f,e),o?La.addScaledVector(cc,h):La.addScaledVector(cc.sub(t),h))}t.add(La)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Ra.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ra,bf)===null||Ir.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),b=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=w,L=b;S<L;S+=3){const D=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);i=Ua(this,m,e,n,c,h,f,D,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);i=Ua(this,o,e,n,c,h,f,w,b,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const _=d[g],m=o[_.materialIndex],w=Math.max(_.start,p.start),b=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=w,L=b;S<L;S+=3){const D=S,A=S+1,I=S+2;i=Ua(this,m,e,n,c,h,f,D,A,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,m=v;_<m;_+=3){const w=_,b=_+1,S=_+2;i=Ua(this,o,e,n,c,h,f,w,b,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function C0(r,e,t,n,i,s,o,a){let l;if(e.side===kn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ar,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:r}}function Ua(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ca),r.getVertexPosition(l,Pa),r.getVertexPosition(c,Da);const h=C0(r,e,t,n,Ca,Pa,Da,wf);if(h){const f=new J;Ei.getBarycoord(wf,Ca,Pa,Da,f),i&&(h.uv=Ei.getInterpolatedAttribute(i,a,l,c,f,new Rt)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,a,l,c,f,new Rt)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,f,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new J,materialIndex:0};Ei.getNormal(Ca,Pa,Da,d.normal),h.face=d,h.barycoord=f}return h}class ea extends ir{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ts(c,3)),this.setAttribute("normal",new ts(h,3)),this.setAttribute("uv",new ts(f,2));function g(v,_,m,w,b,S,L,D,A,I,T){const M=S/A,U=L/I,z=S/2,W=L/2,$=D/2,K=A+1,q=I+1;let X=0,G=0;const ae=new J;for(let N=0;N<q;N++){const Se=N*U-W;for(let Fe=0;Fe<K;Fe++){const Ze=Fe*M-z;ae[v]=Ze*w,ae[_]=Se*b,ae[m]=$,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[_]=0,ae[m]=D>0?1:-1,h.push(ae.x,ae.y,ae.z),f.push(Fe/A),f.push(1-N/I),X+=1}}for(let N=0;N<I;N++)for(let Se=0;Se<A;Se++){const Fe=d+Se+K*N,Ze=d+Se+K*(N+1),ne=d+(Se+1)+K*(N+1),le=d+(Se+1)+K*N;l.push(Fe,Ze,le),l.push(Ze,ne,le),G+=6}a.addGroup(p,G,T),p+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const n=io(r[t]);for(const i in n)e[i]=n[i]}return e}function P0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function em(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const D0={clone:io,merge:En};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends bl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tm extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new J,Af=new Rt,Rf=new Rt;class Zn extends tm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cu*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,Af,Rf),t.subVectors(Rf,Af)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,bs=1;class U0 extends ri{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn(Ts,bs,e,t);i.layers=this.layers,this.add(i);const s=new Zn(Ts,bs,e,t);s.layers=this.layers,this.add(s);const o=new Zn(Ts,bs,e,t);o.layers=this.layers,this.add(o);const a=new Zn(Ts,bs,e,t);a.layers=this.layers,this.add(a);const l=new Zn(Ts,bs,e,t);l.layers=this.layers,this.add(l);const c=new Zn(Ts,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nm extends fn{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N0 extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ea(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:yr});s.uniforms.tEquirect.value=t;const o=new Nn(i,s),a=t.minFilter;return t.minFilter===vr&&(t.minFilter=un),new U0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const uc=new J,O0=new J,F0=new st;class kr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uc.subVectors(n,t).cross(O0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F0.getNormalMatrix(e),i=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new fh,Na=new J;class im{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,o=new kr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],p=i[8],g=i[9],v=i[10],_=i[11],m=i[12],w=i[13],b=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,_-p,S-m).normalize(),n[1].setComponents(l+s,d+c,_+p,S+m).normalize(),n[2].setComponents(l+o,d+h,_+g,S+w).normalize(),n[3].setComponents(l-o,d-h,_-g,S-w).normalize(),n[4].setComponents(l-a,d-f,_-v,S-b).normalize(),t===$i)n[5].setComponents(l+a,d+f,_+v,S+b).normalize();else if(t===gl)n[5].setComponents(a,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function B0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class so extends ir{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,p=[],g=[],v=[],_=[];for(let m=0;m<h;m++){const w=m*d-o;for(let b=0;b<c;b++){const S=b*f-s;g.push(S,-w,0),v.push(0,0,1),_.push(b/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const b=w+c*m,S=w+c*(m+1),L=w+1+c*(m+1),D=w+1+c*m;p.push(b,S,D),p.push(S,L,D)}this.setIndex(p),this.setAttribute("position",new ts(g,3)),this.setAttribute("normal",new ts(v,3)),this.setAttribute("uv",new ts(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,Q0=`#ifdef USE_BUMPMAP
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
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
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
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
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
#endif`,Fv=`struct PhysicalMaterial {
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
}`,Bv=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
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
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
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
}`,Yx=`#define DISTANCE
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
}`,qx=`#define DISTANCE
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
}`,Jx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,eS=`#define LAMBERT
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define MATCAP
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
}`,iS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,sS=`#define NORMAL
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
}`,oS=`#define PHONG
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
}`,aS=`#define PHONG
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
}`,lS=`#define STANDARD
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
}`,cS=`#define STANDARD
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
}`,uS=`#define TOON
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
}`,hS=`#define TOON
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
}`,fS=`uniform float size;
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
}`,dS=`uniform vec3 diffuse;
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
}`,pS=`#include <common>
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
}`,mS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,gS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:z0,alphahash_pars_fragment:k0,alphamap_fragment:H0,alphamap_pars_fragment:V0,alphatest_fragment:G0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:Y0,batching_pars_vertex:q0,batching_vertex:$0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:J0,iridescence_fragment:j0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:sv,color_pars_vertex:ov,color_vertex:av,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:_v,envmap_fragment:gv,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Dv,envmap_vertex:Mv,fog_vertex:yv,fog_pars_vertex:Ev,fog_fragment:Tv,fog_pars_fragment:bv,gradientmap_pars_fragment:wv,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Nv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Fv,lights_fragment_begin:Bv,lights_fragment_maps:zv,lights_fragment_end:kv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:Yv,map_particle_fragment:qv,map_particle_pars_fragment:$v,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Jv,morphcolor_vertex:jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:sx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:fx,packing:dx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:_x,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Mx,shadowmap_vertex:yx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:bx,skinning_vertex:wx,skinnormal_vertex:Ax,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Px,tonemapping_pars_fragment:Dx,transmission_fragment:Lx,transmission_pars_fragment:Ix,uv_pars_fragment:Ux,uv_pars_vertex:Nx,uv_vertex:Ox,worldpos_vertex:Fx,background_vert:Bx,background_frag:zx,backgroundCube_vert:kx,backgroundCube_frag:Hx,cube_vert:Vx,cube_frag:Gx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:Yx,distanceRGBA_frag:qx,equirect_vert:$x,equirect_frag:Zx,linedashed_vert:Kx,linedashed_frag:Jx,meshbasic_vert:jx,meshbasic_frag:Qx,meshlambert_vert:eS,meshlambert_frag:tS,meshmatcap_vert:nS,meshmatcap_frag:iS,meshnormal_vert:rS,meshnormal_frag:sS,meshphong_vert:oS,meshphong_frag:aS,meshphysical_vert:lS,meshphysical_frag:cS,meshtoon_vert:uS,meshtoon_frag:hS,points_vert:fS,points_frag:dS,shadow_vert:pS,shadow_frag:mS,sprite_vert:_S,sprite_frag:gS},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},wi={basic:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:En([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:En([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:En([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:En([Ie.points,Ie.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:En([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:En([Ie.common,Ie.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:En([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:En([Ie.sprite,Ie.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:En([Ie.common,Ie.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:En([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Oa={r:0,b:0,g:0},Nr=new Ii,vS=new Jt;function xS(r,e,t,n,i,s,o){const a=new mt(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function v(w){let b=!1;const S=g(w);S===null?m(a,l):S&&S.isColor&&(m(S,1),b=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===El)?(h===void 0&&(h=new Nn(new ea(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:io(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Nr.copy(b.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vS.makeRotationFromEuler(Nr)),h.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,(f!==S||d!==S.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nn(new so(2,2),new _i({name:"BackgroundMaterial",uniforms:io(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,b){w.getRGB(Oa,em(r)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:v,addToRenderList:_}}function SS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,U,z,W,$){let K=!1;const q=f(W,z,U);s!==q&&(s=q,c(s.object)),K=p(M,W,z,$),K&&g(M,W,z,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,U,z,W),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function f(M,U,z){const W=z.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let K=$[U.id];K===void 0&&(K={},$[U.id]=K);let q=K[W];return q===void 0&&(q=d(l()),K[W]=q),q}function d(M){const U=[],z=[],W=[];for(let $=0;$<t;$++)U[$]=0,z[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,U,z,W){const $=s.attributes,K=U.attributes;let q=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){const N=$[G];let Se=K[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),N===void 0||N.attribute!==Se||Se&&N.data!==Se.data)return!0;q++}return s.attributesNum!==q||s.index!==W}function g(M,U,z,W){const $={},K=U.attributes;let q=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){let N=K[G];N===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));const Se={};Se.attribute=N,N&&N.data&&(Se.data=N.data),$[G]=Se,q++}s.attributes=$,s.attributesNum=q,s.index=W}function v(){const M=s.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function _(M){m(M,0)}function m(M,U){const z=s.newAttributes,W=s.enabledAttributes,$=s.attributeDivisors;z[M]=1,W[M]===0&&(r.enableVertexAttribArray(M),W[M]=1),$[M]!==U&&(r.vertexAttribDivisor(M,U),$[M]=U)}function w(){const M=s.newAttributes,U=s.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==M[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function b(M,U,z,W,$,K,q){q===!0?r.vertexAttribIPointer(M,U,z,$,K):r.vertexAttribPointer(M,U,z,W,$,K)}function S(M,U,z,W){v();const $=W.attributes,K=z.getAttributes(),q=U.defaultAttributeValues;for(const X in K){const G=K[X];if(G.location>=0){let ae=$[X];if(ae===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const N=ae.normalized,Se=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const Ze=Fe.buffer,ne=Fe.type,le=Fe.bytesPerElement,he=ne===r.INT||ne===r.UNSIGNED_INT||ae.gpuType===sh;if(ae.isInterleavedBufferAttribute){const fe=ae.data,Re=fe.stride,Be=ae.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe,fe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<G.locationSize;qe++)_(G.location+qe);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let qe=0;qe<G.locationSize;qe++)b(G.location+qe,Se/G.locationSize,ne,N,Re*le,(Be+Se/G.locationSize*qe)*le,he)}else{if(ae.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<G.locationSize;fe++)_(G.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let fe=0;fe<G.locationSize;fe++)b(G.location+fe,Se/G.locationSize,ne,N,Se*le,Se/G.locationSize*fe*le,he)}}else if(q!==void 0){const N=q[X];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(G.location,N);break;case 3:r.vertexAttrib3fv(G.location,N);break;case 4:r.vertexAttrib4fv(G.location,N);break;default:r.vertexAttrib1fv(G.location,N)}}}}w()}function L(){I();for(const M in n){const U=n[M];for(const z in U){const W=U[z];for(const $ in W)h(W[$].object),delete W[$];delete U[z]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const z in U){const W=U[z];for(const $ in W)h(W[$].object),delete W[$];delete U[z]}delete n[M.id]}function A(M){for(const U in n){const z=n[U];if(z[M.id]===void 0)continue;const W=z[M.id];for(const $ in W)h(W[$].object),delete W[$];delete z[M.id]}}function I(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:w}}function MS(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ni&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==er&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!I)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:L,maxSamples:D}}function ES(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new kr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{const w=s?0:n,b=w*4;let S=m.clippingState||null;l.value=S,S=h(g,d,b,p);for(let L=0;L!==b;++L)S[L]=t[L];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const m=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,S=p;b!==v;++b,S+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function TS(r){let e=new WeakMap;function t(o,a){return a===eu?o.mapping=Qs:a===tu&&(o.mapping=eo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===eu||a===tu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new N0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bS extends tm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Cf=[.125,.215,.35,.446,.526,.582],Wr=20,hc=new bS,Pf=new mt;let fc=null,dc=0,pc=0,mc=!1;const Hr=(1+Math.sqrt(5))/2,ws=1/Hr,Df=[new J(-Hr,ws,0),new J(Hr,ws,0),new J(-ws,0,Hr),new J(ws,0,Hr),new J(0,Hr,-ws),new J(0,Hr,ws),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:qi,format:ni,colorSpace:tr,depthBuffer:!1},i=If(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wS(s)),this._blurMaterial=AS(s,e,t)}return i}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,n,i){const a=new Zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pf),h.toneMapping=Ki,h.autoClear=!1;const p=new dh({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new Nn(new ea,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Pf),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;Fa(i,w*b,m>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qs||e.mapping===eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Df[(i-s-1)%Df.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Nn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),v=s/g,_=isFinite(s)?1+Math.floor(h*v):Wr;_>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wr}`);const m=[];let w=0;for(let A=0;A<Wr;++A){const I=A/v,T=Math.exp(-I*I/2);m.push(T),A===0?w+=T:A<_&&(w+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[i],L=3*S*(i>b-Is?i-b+Is:0),D=4*(this._cubeSize-S);Fa(t,L,D,3*S,2*S),l.setRenderTarget(t),l.render(f,hc)}}function wS(r){const e=[],t=[],n=[];let i=r;const s=r-Is+1+Cf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Is?l=Cf[o-r+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,_=2,m=1,w=new Float32Array(v*g*p),b=new Float32Array(_*g*p),S=new Float32Array(m*g*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,I=D>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];w.set(T,v*g*D),b.set(d,_*g*D);const M=[D,D,D,D,D,D];S.set(M,m*g*D)}const L=new ir;L.setAttribute("position",new si(w,v)),L.setAttribute("uv",new si(b,_)),L.setAttribute("faceIndex",new si(S,m)),e.push(L),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function If(r,e,t){const n=new as(r,e,t);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function AS(r,e,t){const n=new Float32Array(Wr),i=new J(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Uf(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Nf(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function RS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===eu||l===tu,h=l===Qs||l===eo;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Lf(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function CS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PS(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let _=0,m=v.length;_<m;_++)e.remove(v[_])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let _=0,m=v.length;_<m;_++)e.update(v[_],r.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let b=0,S=w.length;b<S;b+=3){const L=w[b+0],D=w[b+1],A=w[b+2];d.push(L,D,D,A,A,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const L=b+0,D=b+1,A=b+2;d.push(L,D,D,A,A,L)}}else return;const _=new(qp(d)?Qp:jp)(d,1);_.version=v;const m=s.get(f);m&&e.remove(m),s.set(f,_)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function DS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,n,1)}function f(d,p,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*v[w];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function LS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function IS(r,e,t){const n=new WeakMap,i=new zt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let L=a.attributes.position.count*S,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*D*4*f),I=new Zp(A,L,D,f);I.type=ti,I.needsUpdate=!0;const T=S*4;for(let U=0;U<f;U++){const z=m[U],W=w[U],$=b[U],K=L*D*4*U;for(let q=0;q<z.count;q++){const X=q*T;g===!0&&(i.fromBufferAttribute(z,q),A[K+X+0]=i.x,A[K+X+1]=i.y,A[K+X+2]=i.z,A[K+X+3]=0),v===!0&&(i.fromBufferAttribute(W,q),A[K+X+4]=i.x,A[K+X+5]=i.y,A[K+X+6]=i.z,A[K+X+7]=0),_===!0&&(i.fromBufferAttribute($,q),A[K+X+8]=i.x,A[K+X+9]=i.y,A[K+X+10]=i.z,A[K+X+11]=$.itemSize===4?i.w:1)}}d={count:f,texture:I,size:new Rt(L,D)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function US(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class sm extends fn{constructor(e,t,n,i,s,o,a,l,c,h=Ws){if(h!==Ws&&h!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ws&&(n=os),n===void 0&&h===no&&(n=to),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const om=new fn,Of=new sm(1,1),am=new Zp,lm=new m0,cm=new nm,Ff=[],Bf=[],zf=new Float32Array(16),kf=new Float32Array(9),Hf=new Float32Array(4);function oo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ff[i];if(s===void 0&&(s=new Float32Array(i),Ff[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wl(r,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function NS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function OS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function FS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function BS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function zS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Hf.set(n),r.uniformMatrix2fv(this.addr,!1,Hf),tn(t,n)}}function kS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;kf.set(n),r.uniformMatrix3fv(this.addr,!1,kf),tn(t,n)}}function HS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;zf.set(n),r.uniformMatrix4fv(this.addr,!1,zf),tn(t,n)}}function VS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function GS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function WS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function XS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function YS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function ZS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function KS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Of.compareFunction=Yp,s=Of):s=om,t.setTexture2D(e||s,i)}function JS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lm,i)}function jS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cm,i)}function QS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||am,i)}function eM(r){switch(r){case 5126:return NS;case 35664:return OS;case 35665:return FS;case 35666:return BS;case 35674:return zS;case 35675:return kS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return YS;case 36294:return qS;case 36295:return $S;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return QS}}function tM(r,e){r.uniform1fv(this.addr,e)}function nM(r,e){const t=oo(e,this.size,2);r.uniform2fv(this.addr,t)}function iM(r,e){const t=oo(e,this.size,3);r.uniform3fv(this.addr,t)}function rM(r,e){const t=oo(e,this.size,4);r.uniform4fv(this.addr,t)}function sM(r,e){const t=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function oM(r,e){const t=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function aM(r,e){const t=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lM(r,e){r.uniform1iv(this.addr,e)}function cM(r,e){r.uniform2iv(this.addr,e)}function uM(r,e){r.uniform3iv(this.addr,e)}function hM(r,e){r.uniform4iv(this.addr,e)}function fM(r,e){r.uniform1uiv(this.addr,e)}function dM(r,e){r.uniform2uiv(this.addr,e)}function pM(r,e){r.uniform3uiv(this.addr,e)}function mM(r,e){r.uniform4uiv(this.addr,e)}function _M(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||om,s[o])}function gM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lm,s[o])}function vM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cm,s[o])}function xM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||am,s[o])}function SM(r){switch(r){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}class MM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eM(t.type)}}class yM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SM(t.type)}}class EM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Vf(r,e){r.seq.push(e),r.map[e.id]=e}function TM(r,e,t){const n=r.name,i=n.length;for(_c.lastIndex=0;;){const s=_c.exec(n),o=_c.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vf(t,c===void 0?new MM(a,r,e):new yM(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new EM(a),Vf(t,f)),t=f}}}class il{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);TM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const bM=37297;let wM=0;function AM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wf=new st;function RM(r){Mt._getMatrix(Wf,Mt.workingColorSpace,r);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Tl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+AM(r.getShaderSource(e),o)}else return i}function CM(r,e){const t=RM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function PM(r,e){let t;switch(e){case Hg:t="Linear";break;case Vg:t="Reinhard";break;case Gg:t="Cineon";break;case Wg:t="ACESFilmic";break;case Yg:t="AgX";break;case qg:t="Neutral";break;case Xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new J;function DM(){Mt.getLuminanceCoefficients(Ba);const r=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function IM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function bo(r){return r!==""}function Yf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(r){return r.replace(NM,FM)}const OM=new Map;function FM(r,e){let t=at[e];if(t===void 0){const n=OM.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pu(t)}const BM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(r){return r.replace(BM,zM)}function zM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function kM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function HM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case eo:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function GM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Np:e="ENVMAP_BLENDING_MULTIPLY";break;case zg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function WM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function XM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kM(t),c=HM(t),h=VM(t),f=GM(t),d=WM(t),p=LM(t),g=IM(s),v=i.createProgram();let _,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(_=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?at.tonemapping_pars_fragment:"",t.toneMapping!==Ki?PM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,CM("linearToOutputTexel",t.outputColorSpace),DM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=Pu(o),o=Yf(o,t),o=qf(o,t),a=Pu(a),a=Yf(a,t),a=qf(a,t),o=$f(o),a=$f(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+_+o,S=w+m+a,L=Gf(i,i.VERTEX_SHADER,b),D=Gf(i,i.FRAGMENT_SHADER,S);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(U){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),W=i.getShaderInfoLog(L).trim(),$=i.getShaderInfoLog(D).trim();let K=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,L,D);else{const X=Xf(i,L,"vertex"),G=Xf(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+X+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||$==="")&&(q=!1);q&&(U.diagnostics={runnable:K,programLog:z,vertexShader:{log:W,prefix:_},fragmentShader:{log:$,prefix:m}})}i.deleteShader(L),i.deleteShader(D),I=new il(i,v),T=UM(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,bM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let YM=0;class qM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $M(e),t.set(e,n)),n}}class $M{constructor(e){this.id=YM++,this.code=e,this.usedTimes=0}}function ZM(r,e,t,n,i,s,o){const a=new Kp,l=new qM,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,M,U,z,W){const $=z.fog,K=W.geometry,q=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),G=X&&X.mapping===El?X.image.height:null,ae=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Se=N!==void 0?N.length:0;let Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Ze,ne,le,he;if(ae){const Oe=wi[ae];Ze=Oe.vertexShader,ne=Oe.fragmentShader}else Ze=T.vertexShader,ne=T.fragmentShader,l.update(T),le=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);const fe=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,qe=W.isBatchedMesh===!0,je=!!T.map,Xe=!!T.matcap,ze=!!X,F=!!T.aoMap,Ve=!!T.lightMap,me=!!T.bumpMap,k=!!T.normalMap,ue=!!T.displacementMap,Le=!!T.emissiveMap,be=!!T.metalnessMap,C=!!T.roughnessMap,y=T.anisotropy>0,V=T.clearcoat>0,j=T.dispersion>0,se=T.iridescence>0,oe=T.sheen>0,Te=T.transmission>0,pe=y&&!!T.anisotropyMap,_e=V&&!!T.clearcoatMap,Ke=V&&!!T.clearcoatNormalMap,xe=V&&!!T.clearcoatRoughnessMap,Me=se&&!!T.iridescenceMap,Ue=se&&!!T.iridescenceThicknessMap,Ne=oe&&!!T.sheenColorMap,Pe=oe&&!!T.sheenRoughnessMap,$e=!!T.specularMap,ke=!!T.specularColorMap,Qe=!!T.specularIntensityMap,B=Te&&!!T.transmissionMap,te=Te&&!!T.thicknessMap,ie=!!T.gradientMap,ce=!!T.alphaMap,Ae=T.alphaTest>0,Ce=!!T.alphaHash,et=!!T.extensions;let vt=Ki;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(vt=r.toneMapping);const Ot={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Ze,fragmentShader:ne,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:qe,batchingColor:qe&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:je,matcap:Xe,envMap:ze,envMapMode:ze&&X.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ve,bumpMap:me,normalMap:k,displacementMap:d&&ue,emissiveMap:Le,normalMapObjectSpace:k&&T.normalMapType===jg,normalMapTangentSpace:k&&T.normalMapType===Jg,metalnessMap:be,roughnessMap:C,anisotropy:y,anisotropyMap:pe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:xe,dispersion:j,iridescence:se,iridescenceMap:Me,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:Ne,sheenRoughnessMap:Pe,specularMap:$e,specularColorMap:ke,specularIntensityMap:Qe,transmission:Te,transmissionMap:B,thicknessMap:te,gradientMap:ie,opaque:T.transparent===!1&&T.blending===Gs&&T.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Ce,combine:T.combine,mapUv:je&&v(T.map.channel),aoMapUv:F&&v(T.aoMap.channel),lightMapUv:Ve&&v(T.lightMap.channel),bumpMapUv:me&&v(T.bumpMap.channel),normalMapUv:k&&v(T.normalMap.channel),displacementMapUv:ue&&v(T.displacementMap.channel),emissiveMapUv:Le&&v(T.emissiveMap.channel),metalnessMapUv:be&&v(T.metalnessMap.channel),roughnessMapUv:C&&v(T.roughnessMap.channel),anisotropyMapUv:pe&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(T.sheenRoughnessMap.channel),specularMapUv:$e&&v(T.specularMap.channel),specularColorMapUv:ke&&v(T.specularColorMap.channel),specularIntensityMapUv:Qe&&v(T.specularIntensityMap.channel),transmissionMapUv:B&&v(T.transmissionMap.channel),thicknessMapUv:te&&v(T.thicknessMap.channel),alphaMapUv:ce&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(k||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(je||ce),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:je&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===Pt,decodeVideoTextureEmissive:Le&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===Pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ri,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:et&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&T.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function m(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)M.push(U),M.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(w(M,T),b(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function w(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const M=g[T.type];let U;if(M){const z=wi[M];U=D0.clone(z.uniforms)}else U=T.uniforms;return U}function L(T,M){let U;for(let z=0,W=h.length;z<W;z++){const $=h[z];if($.cacheKey===M){U=$,++U.usedTimes;break}}return U===void 0&&(U=new XM(r,M,T,s),h.push(U)),U}function D(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:I}}function KM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function JM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,g,v,_){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:_},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=_),e++,m}function a(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,g,v,_){const m=o(f,d,p,g,v,_);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||JM),n.length>1&&n.sort(d||Kf),i.length>1&&i.sort(d||Kf)}function h(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function jM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jf,r.set(n,[o])):i>=s.length?(o=new Jf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function QM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new mt};break;case"SpotLight":t={position:new J,direction:new J,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function ey(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ty=0;function ny(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iy(r){const e=new QM,t=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,s=new Jt,o=new Jt;function a(c){let h=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,v=0,_=0,m=0,w=0,b=0,S=0,L=0,D=0,A=0;c.sort(ny);for(let T=0,M=c.length;T<M;T++){const U=c[T],z=U.color,W=U.intensity,$=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*W,f+=z.g*W,d+=z.b*W;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],W);A++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=U.shadow.matrix,w++}n.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(z).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[v]=q;const X=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,X.updateMatrices(U),U.castShadow&&D++),n.spotLightMatrix[v]=X.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=K,S++}v++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(z).multiplyScalar(W),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=q,_++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const X=U.shadow,G=t.get(U);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=q,g++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(W),q.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[m]=q,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=A,n.version=ty++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0;const _=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const b=c[m];if(b.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),f++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:n}}function jf(r){const e=new iy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ry(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new jf(r),e.set(i,[a])):s>=o.length?(a=new jf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class sy extends bl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends bl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;function cy(r,e,t){let n=new im;const i=new Rt,s=new Rt,o=new zt,a=new sy({depthPacking:Kg}),l=new oy,c={},h=t.maxTextureSize,f={[Ar]:kn,[kn]:Ar,[Ri]:Ri},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:ay,fragmentShader:ly}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ir;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nn(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let m=this.type;this.render=function(D,A,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),z=r.state;z.setBlending(yr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=m!==ki&&this.type===ki,$=m===ki&&this.type!==ki;for(let K=0,q=D.length;K<q;K++){const X=D[K],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ae=G.getFrameExtents();if(i.multiply(ae),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,G.mapSize.y=s.y)),G.map===null||W===!0||$===!0){const Se=this.type!==ki?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new as(i.x,i.y,Se),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const N=G.getViewportCount();for(let Se=0;Se<N;Se++){const Fe=G.getViewport(Se);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(o),G.updateMatrices(X,Se),n=G.getFrustum(),S(A,I,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===ki&&w(G,I),G.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(T,M,U)};function w(D,A){const I=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new as(i.x,i.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(A,null,I,p,v,null)}function b(D,A,I,T){let M=null;const U=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)M=U;else if(M=I.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,W=A.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let K=$[W];K===void 0&&(K=M.clone(),$[W]=K,A.addEventListener("dispose",L)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,T===ki?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=r.properties.get(M);z.light=I}return M}function S(D,A,I,T,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ki)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const W=e.update(D),$=D.material;if(Array.isArray($)){const K=W.groups;for(let q=0,X=K.length;q<X;q++){const G=K[q],ae=$[G.materialIndex];if(ae&&ae.visible){const N=b(D,ae,T,M);D.onBeforeShadow(r,D,A,I,W,N,G),r.renderBufferDirect(I,null,W,N,D,G),D.onAfterShadow(r,D,A,I,W,N,G)}}}else if($.visible){const K=b(D,$,T,M);D.onBeforeShadow(r,D,A,I,W,K,null),r.renderBufferDirect(I,null,W,K,D,null),D.onAfterShadow(r,D,A,I,W,K,null)}}const z=D.children;for(let W=0,$=z.length;W<$;W++)S(z[W],A,I,T,M)}function L(D){D.target.removeEventListener("dispose",L);for(const I in c){const T=c[I],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const uy={[qc]:$c,[Zc]:jc,[Kc]:Qc,[js]:Jc,[$c]:qc,[jc]:Zc,[Qc]:Kc,[Jc]:js};function hy(r,e){function t(){let B=!1;const te=new zt;let ie=null;const ce=new zt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!B&&(r.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,Ce,et,vt,Ot){Ot===!0&&(Ae*=vt,Ce*=vt,et*=vt),te.set(Ae,Ce,et,vt),ce.equals(te)===!1&&(r.clearColor(Ae,Ce,et,vt),ce.copy(te))},reset:function(){B=!1,ie=null,ce.set(-1,0,0,0)}}}function n(){let B=!1,te=!1,ie=null,ce=null,Ae=null;return{setReversed:function(Ce){if(te!==Ce){const et=e.get("EXT_clip_control");te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const vt=Ae;Ae=null,this.setClear(vt)}te=Ce},getReversed:function(){return te},setTest:function(Ce){Ce?fe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ce){ie!==Ce&&!B&&(r.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(te&&(Ce=uy[Ce]),ce!==Ce){switch(Ce){case qc:r.depthFunc(r.NEVER);break;case $c:r.depthFunc(r.ALWAYS);break;case Zc:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Kc:r.depthFunc(r.EQUAL);break;case Jc:r.depthFunc(r.GEQUAL);break;case jc:r.depthFunc(r.GREATER);break;case Qc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ce}},setLocked:function(Ce){B=Ce},setClear:function(Ce){Ae!==Ce&&(te&&(Ce=1-Ce),r.clearDepth(Ce),Ae=Ce)},reset:function(){B=!1,ie=null,ce=null,Ae=null,te=!1}}}function i(){let B=!1,te=null,ie=null,ce=null,Ae=null,Ce=null,et=null,vt=null,Ot=null;return{setTest:function(Oe){B||(Oe?fe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Oe){te!==Oe&&!B&&(r.stencilMask(Oe),te=Oe)},setFunc:function(Oe,Ge,rt){(ie!==Oe||ce!==Ge||Ae!==rt)&&(r.stencilFunc(Oe,Ge,rt),ie=Oe,ce=Ge,Ae=rt)},setOp:function(Oe,Ge,rt){(Ce!==Oe||et!==Ge||vt!==rt)&&(r.stencilOp(Oe,Ge,rt),Ce=Oe,et=Ge,vt=rt)},setLocked:function(Oe){B=Oe},setClear:function(Oe){Ot!==Oe&&(r.clearStencil(Oe),Ot=Oe)},reset:function(){B=!1,te=null,ie=null,ce=null,Ae=null,Ce=null,et=null,vt=null,Ot=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,b=null,S=null,L=null,D=null,A=new mt(0,0,0),I=0,T=!1,M=null,U=null,z=null,W=null,$=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=X>=2);let ae=null,N={};const Se=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Ze=new zt().fromArray(Se),ne=new zt().fromArray(Fe);function le(B,te,ie,ce){const Ae=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(B,Ce),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<ie;et++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(te+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Ce}const he={};he[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc(js),me(!1),k(ef),fe(r.CULL_FACE),F(yr);function fe(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Re(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Be(B,te){return f[B]!==te?(r.bindFramebuffer(B,te),f[B]=te,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=te),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=te),!0):!1}function qe(B,te){let ie=p,ce=!1;if(B){ie=d.get(te),ie===void 0&&(ie=[],d.set(te,ie));const Ae=B.textures;if(ie.length!==Ae.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,et=Ae.length;Ce<et;Ce++)ie[Ce]=r.COLOR_ATTACHMENT0+Ce;ie.length=Ae.length,ce=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,ce=!0);ce&&r.drawBuffers(ie)}function je(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Xe={[Gr]:r.FUNC_ADD,[yg]:r.FUNC_SUBTRACT,[Eg]:r.FUNC_REVERSE_SUBTRACT};Xe[Tg]=r.MIN,Xe[bg]=r.MAX;const ze={[wg]:r.ZERO,[Ag]:r.ONE,[Rg]:r.SRC_COLOR,[Xc]:r.SRC_ALPHA,[Ug]:r.SRC_ALPHA_SATURATE,[Lg]:r.DST_COLOR,[Pg]:r.DST_ALPHA,[Cg]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[Ig]:r.ONE_MINUS_DST_COLOR,[Dg]:r.ONE_MINUS_DST_ALPHA,[Ng]:r.CONSTANT_COLOR,[Og]:r.ONE_MINUS_CONSTANT_COLOR,[Fg]:r.CONSTANT_ALPHA,[Bg]:r.ONE_MINUS_CONSTANT_ALPHA};function F(B,te,ie,ce,Ae,Ce,et,vt,Ot,Oe){if(B===yr){v===!0&&(Re(r.BLEND),v=!1);return}if(v===!1&&(fe(r.BLEND),v=!0),B!==Mg){if(B!==_||Oe!==T){if((m!==Gr||S!==Gr)&&(r.blendEquation(r.FUNC_ADD),m=Gr,S=Gr),Oe)switch(B){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tf:r.blendFunc(r.ONE,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,b=null,L=null,D=null,A.set(0,0,0),I=0,_=B,T=Oe}return}Ae=Ae||te,Ce=Ce||ie,et=et||ce,(te!==m||Ae!==S)&&(r.blendEquationSeparate(Xe[te],Xe[Ae]),m=te,S=Ae),(ie!==w||ce!==b||Ce!==L||et!==D)&&(r.blendFuncSeparate(ze[ie],ze[ce],ze[Ce],ze[et]),w=ie,b=ce,L=Ce,D=et),(vt.equals(A)===!1||Ot!==I)&&(r.blendColor(vt.r,vt.g,vt.b,Ot),A.copy(vt),I=Ot),_=B,T=!1}function Ve(B,te){B.side===Ri?Re(r.CULL_FACE):fe(r.CULL_FACE);let ie=B.side===kn;te&&(ie=!ie),me(ie),B.blending===Gs&&B.transparent===!1?F(yr):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ce=B.stencilWrite;a.setTest(ce),ce&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(B){M!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),M=B)}function k(B){B!==vg?(fe(r.CULL_FACE),B!==U&&(B===ef?r.cullFace(r.BACK):B===xg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),U=B}function ue(B){B!==z&&(q&&r.lineWidth(B),z=B)}function Le(B,te,ie){B?(fe(r.POLYGON_OFFSET_FILL),(W!==te||$!==ie)&&(r.polygonOffset(te,ie),W=te,$=ie)):Re(r.POLYGON_OFFSET_FILL)}function be(B){B?fe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function C(B){B===void 0&&(B=r.TEXTURE0+K-1),ae!==B&&(r.activeTexture(B),ae=B)}function y(B,te,ie){ie===void 0&&(ae===null?ie=r.TEXTURE0+K-1:ie=ae);let ce=N[ie];ce===void 0&&(ce={type:void 0,texture:void 0},N[ie]=ce),(ce.type!==B||ce.texture!==te)&&(ae!==ie&&(r.activeTexture(ie),ae=ie),r.bindTexture(B,te||he[B]),ce.type=B,ce.texture=te)}function V(){const B=N[ae];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){Ze.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Ze.copy(B))}function Pe(B){ne.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function $e(B,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let ce=ie.get(B);ce===void 0&&(ce=r.getUniformBlockIndex(te,B.name),ie.set(B,ce))}function ke(B,te){const ce=c.get(te).get(B);l.get(te)!==ce&&(r.uniformBlockBinding(te,ce,B.__bindingPointIndex),l.set(te,ce))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ae=null,N={},f={},d=new WeakMap,p=[],g=null,v=!1,_=null,m=null,w=null,b=null,S=null,L=null,D=null,A=new mt(0,0,0),I=0,T=!1,M=null,U=null,z=null,W=null,$=null,Ze.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Re,bindFramebuffer:Be,drawBuffers:qe,useProgram:je,setBlending:F,setMaterial:Ve,setFlipSided:me,setCullFace:k,setLineWidth:ue,setPolygonOffset:Le,setScissorTest:be,activeTexture:C,bindTexture:y,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:se,texImage2D:Me,texImage3D:Ue,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Ke,texStorage3D:xe,texSubImage2D:oe,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Ne,viewport:Pe,reset:Qe}}function Qf(r,e,t,n){const i=fy(n);switch(t){case kp:return r*e;case Vp:return r*e;case Gp:return r*e*2;case lh:return r*e/i.components*i.byteLength;case ch:return r*e/i.components*i.byteLength;case Wp:return r*e*2/i.components*i.byteLength;case uh:return r*e*2/i.components*i.byteLength;case Hp:return r*e*3/i.components*i.byteLength;case ni:return r*e*4/i.components*i.byteLength;case hh:return r*e*4/i.components*i.byteLength;case ja:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ru:case ou:return Math.max(r,16)*Math.max(e,8)/4;case iu:case su:return Math.max(r,8)*Math.max(e,8)/2;case au:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nl:case Tu:case bu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xp:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Au:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(r){switch(r){case er:case Fp:return{byteLength:1,components:1};case Zo:case Bp:case qi:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case os:case sh:case ti:return{byteLength:4,components:1};case zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function dy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Ko("canvas")}function v(C,y,V){let j=1;const se=be(C);if((se.width>V||se.height>V)&&(j=V/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const oe=Math.floor(j*se.width),Te=Math.floor(j*se.height);f===void 0&&(f=g(oe,Te));const pe=y?g(oe,Te):f;return pe.width=oe,pe.height=Te,pe.getContext("2d").drawImage(C,0,0,oe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+oe+"x"+Te+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,y,V,j,se=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=y;if(y===r.RED&&(V===r.FLOAT&&(oe=r.R32F),V===r.HALF_FLOAT&&(oe=r.R16F),V===r.UNSIGNED_BYTE&&(oe=r.R8)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(oe=r.R8UI),V===r.UNSIGNED_SHORT&&(oe=r.R16UI),V===r.UNSIGNED_INT&&(oe=r.R32UI),V===r.BYTE&&(oe=r.R8I),V===r.SHORT&&(oe=r.R16I),V===r.INT&&(oe=r.R32I)),y===r.RG&&(V===r.FLOAT&&(oe=r.RG32F),V===r.HALF_FLOAT&&(oe=r.RG16F),V===r.UNSIGNED_BYTE&&(oe=r.RG8)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(oe=r.RG8UI),V===r.UNSIGNED_SHORT&&(oe=r.RG16UI),V===r.UNSIGNED_INT&&(oe=r.RG32UI),V===r.BYTE&&(oe=r.RG8I),V===r.SHORT&&(oe=r.RG16I),V===r.INT&&(oe=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),V===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),V===r.UNSIGNED_INT&&(oe=r.RGB32UI),V===r.BYTE&&(oe=r.RGB8I),V===r.SHORT&&(oe=r.RGB16I),V===r.INT&&(oe=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),V===r.UNSIGNED_INT&&(oe=r.RGBA32UI),V===r.BYTE&&(oe=r.RGBA8I),V===r.SHORT&&(oe=r.RGBA16I),V===r.INT&&(oe=r.RGBA32I)),y===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),y===r.RGBA){const Te=se?Tl:Mt.getTransfer(j);V===r.FLOAT&&(oe=r.RGBA32F),V===r.HALF_FLOAT&&(oe=r.RGBA16F),V===r.UNSIGNED_BYTE&&(oe=Te===Pt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(C,y){let V;return C?y===null||y===os||y===to?V=r.DEPTH24_STENCIL8:y===ti?V=r.DEPTH32F_STENCIL8:y===Zo&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===os||y===to?V=r.DEPTH_COMPONENT24:y===ti?V=r.DEPTH_COMPONENT32F:y===Zo&&(V=r.DEPTH_COMPONENT16),V}function L(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function D(C){const y=C.target;y.removeEventListener("dispose",D),I(y),y.isVideoTexture&&h.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),M(y)}function I(C){const y=n.get(C);if(y.__webglInit===void 0)return;const V=C.source,j=d.get(V);if(j){const se=j[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(C),Object.keys(j).length===0&&d.delete(V)}n.remove(C)}function T(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const V=C.source,j=d.get(V);delete j[y.__cacheKey],o.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let se=0;se<y.__webglFramebuffer[j].length;se++)r.deleteFramebuffer(y.__webglFramebuffer[j][se]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let j=0,se=V.length;j<se;j++){const oe=n.get(V[j]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(C)}let U=0;function z(){U=0}function W(){const C=U;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function $(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function K(C,y){const V=n.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(V,C,y);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function q(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ne(V,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function X(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ne(V,C,y);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function G(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){le(V,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const ae={[_l]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[nu]:r.MIRRORED_REPEAT},N={[Pn]:r.NEAREST,[$g]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[Vl]:r.LINEAR_MIPMAP_NEAREST,[vr]:r.LINEAR_MIPMAP_LINEAR},Se={[Qg]:r.NEVER,[s0]:r.ALWAYS,[e0]:r.LESS,[Yp]:r.LEQUAL,[t0]:r.EQUAL,[r0]:r.GEQUAL,[n0]:r.GREATER,[i0]:r.NOTEQUAL};function Fe(C,y){if(y.type===ti&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===Vl||y.magFilter===ga||y.magFilter===vr||y.minFilter===un||y.minFilter===Vl||y.minFilter===ga||y.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ae[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ae[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ae[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,N[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,N[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pn||y.minFilter!==ga&&y.minFilter!==vr||y.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",D));const j=y.source;let se=d.get(j);se===void 0&&(se={},d.set(j,se));const oe=$(y);if(oe!==C.__cacheKey){se[oe]===void 0&&(se[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[oe].usedTimes++;const Te=se[C.__cacheKey];Te!==void 0&&(se[C.__cacheKey].usedTimes--,Te.usedTimes===0&&T(y)),C.__cacheKey=oe,C.__webglTexture=se[oe].texture}return V}function ne(C,y,V){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);const se=Ze(C,y),oe=y.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+V);const Te=n.get(oe);if(oe.version!==Te.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const pe=Mt.getPrimaries(Mt.workingColorSpace),_e=y.colorSpace===jn?null:Mt.getPrimaries(y.colorSpace),Ke=y.colorSpace===jn||pe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let xe=v(y.image,!1,i.maxTextureSize);xe=Le(y,xe);const Me=s.convert(y.format,y.colorSpace),Ue=s.convert(y.type);let Ne=b(y.internalFormat,Me,Ue,y.colorSpace,y.isVideoTexture);Fe(j,y);let Pe;const $e=y.mipmaps,ke=y.isVideoTexture!==!0,Qe=Te.__version===void 0||se===!0,B=oe.dataReady,te=L(y,xe);if(y.isDepthTexture)Ne=S(y.format===no,y.type),Qe&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Me,Ue,null));else if(y.isDataTexture)if($e.length>0){ke&&Qe&&t.texStorage2D(r.TEXTURE_2D,te,Ne,$e[0].width,$e[0].height);for(let ie=0,ce=$e.length;ie<ce;ie++)Pe=$e[ie],ke?B&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Ue,Pe.data):t.texImage2D(r.TEXTURE_2D,ie,Ne,Pe.width,Pe.height,0,Me,Ue,Pe.data);y.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(r.TEXTURE_2D,te,Ne,xe.width,xe.height),B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Me,Ue,xe.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Me,Ue,xe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Ne,$e[0].width,$e[0].height,xe.depth);for(let ie=0,ce=$e.length;ie<ce;ie++)if(Pe=$e[ie],y.format!==ni)if(Me!==null)if(ke){if(B)if(y.layerUpdates.size>0){const Ae=Qf(Pe.width,Pe.height,y.format,y.type);for(const Ce of y.layerUpdates){const et=Pe.data.subarray(Ce*Ae/Pe.data.BYTES_PER_ELEMENT,(Ce+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Ce,Pe.width,Pe.height,1,Me,et)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,xe.depth,Me,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,xe.depth,Me,Ue,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Ne,Pe.width,Pe.height,xe.depth,0,Me,Ue,Pe.data)}else{ke&&Qe&&t.texStorage2D(r.TEXTURE_2D,te,Ne,$e[0].width,$e[0].height);for(let ie=0,ce=$e.length;ie<ce;ie++)Pe=$e[ie],y.format!==ni?Me!==null?ke?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Ne,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?B&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,Me,Ue,Pe.data):t.texImage2D(r.TEXTURE_2D,ie,Ne,Pe.width,Pe.height,0,Me,Ue,Pe.data)}else if(y.isDataArrayTexture)if(ke){if(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Ne,xe.width,xe.height,xe.depth),B)if(y.layerUpdates.size>0){const ie=Qf(xe.width,xe.height,y.format,y.type);for(const ce of y.layerUpdates){const Ae=xe.data.subarray(ce*ie/xe.data.BYTES_PER_ELEMENT,(ce+1)*ie/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,xe.width,xe.height,1,Me,Ue,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,Ue,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Me,Ue,xe.data);else if(y.isData3DTexture)ke?(Qe&&t.texStorage3D(r.TEXTURE_3D,te,Ne,xe.width,xe.height,xe.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,Ue,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Me,Ue,xe.data);else if(y.isFramebufferTexture){if(Qe)if(ke)t.texStorage2D(r.TEXTURE_2D,te,Ne,xe.width,xe.height);else{let ie=xe.width,ce=xe.height;for(let Ae=0;Ae<te;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,Ne,ie,ce,0,Me,Ue,null),ie>>=1,ce>>=1}}else if($e.length>0){if(ke&&Qe){const ie=be($e[0]);t.texStorage2D(r.TEXTURE_2D,te,Ne,ie.width,ie.height)}for(let ie=0,ce=$e.length;ie<ce;ie++)Pe=$e[ie],ke?B&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Me,Ue,Pe):t.texImage2D(r.TEXTURE_2D,ie,Ne,Me,Ue,Pe);y.generateMipmaps=!1}else if(ke){if(Qe){const ie=be(xe);t.texStorage2D(r.TEXTURE_2D,te,Ne,ie.width,ie.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ue,xe)}else t.texImage2D(r.TEXTURE_2D,0,Ne,Me,Ue,xe);_(y)&&m(j),Te.__version=oe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function le(C,y,V){if(y.image.length!==6)return;const j=Ze(C,y),se=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const oe=n.get(se);if(se.version!==oe.__version||j===!0){t.activeTexture(r.TEXTURE0+V);const Te=Mt.getPrimaries(Mt.workingColorSpace),pe=y.colorSpace===jn?null:Mt.getPrimaries(y.colorSpace),_e=y.colorSpace===jn||Te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!Ke&&!xe?Me[ce]=v(y.image[ce],!0,i.maxCubemapSize):Me[ce]=xe?y.image[ce].image:y.image[ce],Me[ce]=Le(y,Me[ce]);const Ue=Me[0],Ne=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type),$e=b(y.internalFormat,Ne,Pe,y.colorSpace),ke=y.isVideoTexture!==!0,Qe=oe.__version===void 0||j===!0,B=se.dataReady;let te=L(y,Ue);Fe(r.TEXTURE_CUBE_MAP,y);let ie;if(Ke){ke&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,$e,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){ie=Me[ce].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const Ce=ie[Ae];y.format!==ni?Ne!==null?ke?B&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,$e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Ce.width,Ce.height,Ne,Pe,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,$e,Ce.width,Ce.height,0,Ne,Pe,Ce.data)}}}else{if(ie=y.mipmaps,ke&&Qe){ie.length>0&&te++;const ce=be(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,$e,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(xe){ke?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Ne,Pe,Me[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,Me[ce].width,Me[ce].height,0,Ne,Pe,Me[ce].data);for(let Ae=0;Ae<ie.length;Ae++){const et=ie[Ae].image[ce].image;ke?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,et.width,et.height,Ne,Pe,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,$e,et.width,et.height,0,Ne,Pe,et.data)}}else{ke?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,Pe,Me[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,Ne,Pe,Me[ce]);for(let Ae=0;Ae<ie.length;Ae++){const Ce=ie[Ae];ke?B&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Ne,Pe,Ce.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,$e,Ne,Pe,Ce.image[ce])}}}_(y)&&m(r.TEXTURE_CUBE_MAP),oe.__version=se.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function he(C,y,V,j,se,oe){const Te=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),_e=b(V.internalFormat,Te,pe,V.colorSpace),Ke=n.get(y),xe=n.get(V);if(xe.__renderTarget=y,!Ke.__hasExternalTextures){const Me=Math.max(1,y.width>>oe),Ue=Math.max(1,y.height>>oe);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,oe,_e,Me,Ue,y.depth,0,Te,pe,null):t.texImage2D(se,oe,_e,Me,Ue,0,Te,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),k(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,se,xe.__webglTexture,0,me(y)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,se,xe.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(C,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const j=y.depthTexture,se=j&&j.isDepthTexture?j.type:null,oe=S(y.stencilBuffer,se),Te=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=me(y);k(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,oe,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,oe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,oe,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,C)}else{const j=y.textures;for(let se=0;se<j.length;se++){const oe=j[se],Te=s.convert(oe.format,oe.colorSpace),pe=s.convert(oe.type),_e=b(oe.internalFormat,Te,pe,oe.colorSpace),Ke=me(y);V&&k(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,_e,y.width,y.height):k(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,_e,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,_e,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const se=j.__webglTexture,oe=me(y);if(y.depthTexture.format===Ws)k(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(y.depthTexture.format===no)k(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Be(C){const y=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=j}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=r.createRenderbuffer(),fe(y.__webglDepthbuffer[j],C,!1);else{const se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),fe(y.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(C,y,V){const j=n.get(C);y!==void 0&&he(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Be(C)}function je(C){const y=C.texture,V=n.get(C),j=n.get(y);C.addEventListener("dispose",A);const se=C.textures,oe=C.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,o.memory.textures++),oe){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)V.__webglFramebuffer[pe][_e]=r.createFramebuffer()}else V.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)V.__webglFramebuffer[pe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Te)for(let pe=0,_e=se.length;pe<_e;pe++){const Ke=n.get(se[pe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&k(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const _e=se[pe];V.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Ke=s.convert(_e.format,_e.colorSpace),xe=s.convert(_e.type),Me=b(_e.internalFormat,Ke,xe,_e.colorSpace,C.isXRRenderTarget===!0),Ue=me(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)he(V.__webglFramebuffer[pe][_e],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else he(V.__webglFramebuffer[pe],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,_e=se.length;pe<_e;pe++){const Ke=se[pe],xe=n.get(Ke);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),Fe(r.TEXTURE_2D,Ke),he(V.__webglFramebuffer,C,Ke,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),_(Ke)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),Fe(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)he(V.__webglFramebuffer[_e],C,y,r.COLOR_ATTACHMENT0,pe,_e);else he(V.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,pe,0);_(y)&&m(pe),t.unbindTexture()}C.depthBuffer&&Be(C)}function Xe(C){const y=C.textures;for(let V=0,j=y.length;V<j;V++){const se=y[V];if(_(se)){const oe=w(C),Te=n.get(se).__webglTexture;t.bindTexture(oe,Te),m(oe),t.unbindTexture()}}}const ze=[],F=[];function Ve(C){if(C.samples>0){if(k(C)===!1){const y=C.textures,V=C.width,j=C.height;let se=r.COLOR_BUFFER_BIT;const oe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(C),pe=y.length>1;if(pe)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=n.get(y[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,V,j,0,0,V,j,se,r.NEAREST),l===!0&&(ze.length=0,F.length=0,ze.push(r.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ze.push(oe),F.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const Ke=n.get(y[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function me(C){return Math.min(i.maxSamples,C.samples)}function k(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Le(C,y){const V=C.colorSpace,j=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==tr&&V!==jn&&(Mt.getTransfer(V)===Pt?(j!==ni||se!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=k}function py(r,e){function t(n,i=jn){let s;const o=Mt.getTransfer(i);if(n===er)return r.UNSIGNED_BYTE;if(n===oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fp)return r.BYTE;if(n===Bp)return r.SHORT;if(n===Zo)return r.UNSIGNED_SHORT;if(n===sh)return r.INT;if(n===os)return r.UNSIGNED_INT;if(n===ti)return r.FLOAT;if(n===qi)return r.HALF_FLOAT;if(n===kp)return r.ALPHA;if(n===Hp)return r.RGB;if(n===ni)return r.RGBA;if(n===Vp)return r.LUMINANCE;if(n===Gp)return r.LUMINANCE_ALPHA;if(n===Ws)return r.DEPTH_COMPONENT;if(n===no)return r.DEPTH_STENCIL;if(n===lh)return r.RED;if(n===ch)return r.RED_INTEGER;if(n===Wp)return r.RG;if(n===uh)return r.RG_INTEGER;if(n===hh)return r.RGBA_INTEGER;if(n===ja||n===Qa||n===el||n===tl)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===lu||n===cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===lu)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_u)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===Tu||n===bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xp||n===wu||n===Au||n===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class my extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:gy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sy extends ro{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const v=new xy,_=t.getContextAttributes();let m=null,w=null;const b=[],S=[],L=new Rt;let D=null;const A=new Zn;A.viewport=new zt;const I=new Zn;I.viewport=new zt;const T=[A,I],M=new my;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=b[ne];return le===void 0&&(le=new gc,b[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=b[ne];return le===void 0&&(le=new gc,b[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=b[ne];return le===void 0&&(le=new gc,b[ne]=le),le.getHandSpace()};function W(ne){const le=S.indexOf(ne.inputSource);if(le===-1)return;const he=b[le];he!==void 0&&(he.update(ne.inputSource,ne.frame,c||o),he.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",K);for(let ne=0;ne<b.length;ne++){const le=S[ne];le!==null&&(S[ne]=null,b[ne].disconnect(le))}U=null,z=null,v.reset(),e.setRenderTarget(m),p=null,d=null,f=null,i=null,w=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",$),i.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new as(p.framebufferWidth,p.framebufferHeight,{format:ni,type:er,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,he=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?no:Ws,he=_.stencil?to:os);const Re={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new as(d.textureWidth,d.textureHeight,{format:ni,type:er,depthTexture:new sm(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(ne){for(let le=0;le<ne.removed.length;le++){const he=ne.removed[le],fe=S.indexOf(he);fe>=0&&(S[fe]=null,b[fe].disconnect(he))}for(let le=0;le<ne.added.length;le++){const he=ne.added[le];let fe=S.indexOf(he);if(fe===-1){for(let Be=0;Be<b.length;Be++)if(Be>=S.length){S.push(he),fe=Be;break}else if(S[Be]===null){S[Be]=he,fe=Be;break}if(fe===-1)break}const Re=b[fe];Re&&Re.connect(he)}}const q=new J,X=new J;function G(ne,le,he){q.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);const fe=q.distanceTo(X),Re=le.projectionMatrix.elements,Be=he.projectionMatrix.elements,qe=Re[14]/(Re[10]-1),je=Re[14]/(Re[10]+1),Xe=(Re[9]+1)/Re[5],ze=(Re[9]-1)/Re[5],F=(Re[8]-1)/Re[0],Ve=(Be[8]+1)/Be[0],me=qe*F,k=qe*Ve,ue=fe/(-F+Ve),Le=ue*-F;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Le),ne.translateZ(ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const be=qe+ue,C=je+ue,y=me-Le,V=k+(fe-Le),j=Xe*je/C*be,se=ze*je/C*be;ne.projectionMatrix.makePerspective(y,V,j,se,be,C),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ae(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let le=ne.near,he=ne.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(he=v.depthFar)),M.near=I.near=A.near=le,M.far=I.far=A.far=he,(U!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,z=M.far),A.layers.mask=ne.layers.mask|2,I.layers.mask=ne.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const fe=ne.parent,Re=M.cameras;ae(M,fe);for(let Be=0;Be<Re.length;Be++)ae(Re[Be],fe);Re.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),N(ne,M,fe)};function N(ne,le,he){he===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(he.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cu*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Se=null;function Fe(ne,le){if(h=le.getViewerPose(c||o),g=le,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let fe=!1;he.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Be=0;Be<he.length;Be++){const qe=he[Be];let je=null;if(p!==null)je=p.getViewport(qe);else{const ze=f.getViewSubImage(d,qe);je=ze.viewport,Be===0&&(e.setRenderTargetTextures(w,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(w))}let Xe=T[Be];Xe===void 0&&(Xe=new Zn,Xe.layers.enable(Be),Xe.viewport=new zt,T[Be]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(je.x,je.y,je.width,je.height),Be===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Xe)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Be=f.getDepthInformation(he[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,i.renderState)}}for(let he=0;he<b.length;he++){const fe=S[he],Re=b[he];fe!==null&&Re!==void 0&&Re.update(fe,le,c||o)}Se&&Se(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ze=new rm;Ze.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const Or=new Ii,My=new Jt;function yy(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,em(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,w,b,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),v(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,w,b):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===kn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===kn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const w=e.get(m),b=w.envMap,S=w.envMapRotation;b&&(_.envMap.value=b,Or.copy(S),Or.x*=-1,Or.y*=-1,Or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.envMapRotation.value.setFromMatrix4(My.makeRotationFromEuler(Or)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,w,b){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*w,_.scale.value=b*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,w){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const w=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ey(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;n.uniformBlockBinding(w,S)}function c(w,b){let S=i[w.id];S===void 0&&(g(w),S=h(w),i[w.id]=S,w.addEventListener("dispose",_));const L=b.program;n.updateUBOMapping(w,L);const D=e.render.frame;s[w.id]!==D&&(d(w),s[w.id]=D)}function h(w){const b=f();w.__bindingPointIndex=b;const S=r.createBuffer(),L=w.__size,D=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,L,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=i[w.id],S=w.uniforms,L=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,A=S.length;D<A;D++){const I=Array.isArray(S[D])?S[D]:[S[D]];for(let T=0,M=I.length;T<M;T++){const U=I[T];if(p(U,D,T,L)===!0){const z=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let K=0;K<W.length;K++){const q=W[K],X=v(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,z+$,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(w,b,S,L){const D=w.value,A=b+"_"+S;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const I=L[A];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return L[A]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function g(w){const b=w.uniforms;let S=0;const L=16;for(let A=0,I=b.length;A<I;A++){const T=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,U=T.length;M<U;M++){const z=T[M],W=Array.isArray(z.value)?z.value:[z.value];for(let $=0,K=W.length;$<K;$++){const q=W[$],X=v(q),G=S%L,ae=G%X.boundary,N=G+ae;S+=ae,N!==0&&L-N<X.storage&&(S+=L-N),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=X.storage}}}const D=S%L;return D>0&&(S+=L-D),w.__size=S,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function _(w){const b=w.target;b.removeEventListener("dispose",_);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class um{constructor(e={}){const{canvas:t=a0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=Ki,this.toneMappingExposure=1;const S=this;let L=!1,D=0,A=0,I=null,T=-1,M=null;const U=new zt,z=new zt;let W=null;const $=new mt(0);let K=0,q=t.width,X=t.height,G=1,ae=null,N=null;const Se=new zt(0,0,q,X),Fe=new zt(0,0,q,X);let Ze=!1;const ne=new im;let le=!1,he=!1;const fe=new Jt,Re=new Jt,Be=new J,qe=new zt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ze(){return I===null?G:1}let F=n;function Ve(u,x){return t.getContext(u,x)}try{const u={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),F===null){const x="webgl2";if(F=Ve(x,u),F===null)throw Ve(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let me,k,ue,Le,be,C,y,V,j,se,oe,Te,pe,_e,Ke,xe,Me,Ue,Ne,Pe,$e,ke,Qe,B;function te(){me=new CS(F),me.init(),ke=new py(F,me),k=new yS(F,me,e,ke),ue=new hy(F,me),k.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Le=new LS(F),be=new KM,C=new dy(F,me,ue,be,k,ke,Le),y=new TS(S),V=new RS(S),j=new B0(F),Qe=new SS(F,j),se=new PS(F,j,Le,Qe),oe=new US(F,se,j,Le),Ne=new IS(F,k,C),xe=new ES(be),Te=new ZM(S,y,V,me,k,Qe,xe),pe=new yy(S,be),_e=new jM,Ke=new ry(me),Ue=new xS(S,y,V,ue,oe,p,l),Me=new cy(S,oe,k),B=new Ey(F,Le,k,ue),Pe=new MS(F,me,Le),$e=new DS(F,me,Le),Le.programs=Te.programs,S.capabilities=k,S.extensions=me,S.properties=be,S.renderLists=_e,S.shadowMap=Me,S.state=ue,S.info=Le}te();const ie=new Sy(S,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const u=me.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=me.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(u){u!==void 0&&(G=u,this.setSize(q,X,!1))},this.getSize=function(u){return u.set(q,X)},this.setSize=function(u,x,E=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=u,X=x,t.width=Math.floor(u*G),t.height=Math.floor(x*G),E===!0&&(t.style.width=u+"px",t.style.height=x+"px"),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set(q*G,X*G).floor()},this.setDrawingBufferSize=function(u,x,E){q=u,X=x,G=E,t.width=Math.floor(u*E),t.height=Math.floor(x*E),this.setViewport(0,0,u,x)},this.getCurrentViewport=function(u){return u.copy(U)},this.getViewport=function(u){return u.copy(Se)},this.setViewport=function(u,x,E,R){u.isVector4?Se.set(u.x,u.y,u.z,u.w):Se.set(u,x,E,R),ue.viewport(U.copy(Se).multiplyScalar(G).round())},this.getScissor=function(u){return u.copy(Fe)},this.setScissor=function(u,x,E,R){u.isVector4?Fe.set(u.x,u.y,u.z,u.w):Fe.set(u,x,E,R),ue.scissor(z.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(u){ue.setScissorTest(Ze=u)},this.setOpaqueSort=function(u){ae=u},this.setTransparentSort=function(u){N=u},this.getClearColor=function(u){return u.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(u=!0,x=!0,E=!0){let R=0;if(u){let P=!1;if(I!==null){const O=I.texture.format;P=O===hh||O===uh||O===ch}if(P){const O=I.texture.type,H=O===er||O===os||O===Zo||O===to||O===oh||O===ah,Z=Ue.getClearColor(),Y=Ue.getClearAlpha(),Q=Z.r,ee=Z.g,re=Z.b;H?(g[0]=Q,g[1]=ee,g[2]=re,g[3]=Y,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Q,v[1]=ee,v[2]=re,v[3]=Y,F.clearBufferiv(F.COLOR,0,v))}else R|=F.COLOR_BUFFER_BIT}x&&(R|=F.DEPTH_BUFFER_BIT),E&&(R|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),_e.dispose(),Ke.dispose(),be.dispose(),y.dispose(),V.dispose(),oe.dispose(),Qe.dispose(),B.dispose(),Te.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",De),ie.removeEventListener("sessionend",nt),We.stop()};function ce(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const u=Le.autoReset,x=Me.enabled,E=Me.autoUpdate,R=Me.needsUpdate,P=Me.type;te(),Le.autoReset=u,Me.enabled=x,Me.autoUpdate=E,Me.needsUpdate=R,Me.type=P}function Ce(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function et(u){const x=u.target;x.removeEventListener("dispose",et),vt(x)}function vt(u){Ot(u),be.remove(u)}function Ot(u){const x=be.get(u).programs;x!==void 0&&(x.forEach(function(E){Te.releaseProgram(E)}),u.isShaderMaterial&&Te.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,E,R,P,O){x===null&&(x=je);const H=P.isMesh&&P.matrixWorld.determinant()<0,Z=Sn(u,x,E,R,P);ue.setMaterial(R,H);let Y=E.index,Q=1;if(R.wireframe===!0){if(Y=se.getWireframeAttribute(E),Y===void 0)return;Q=2}const ee=E.drawRange,re=E.attributes.position;let de=ee.start*Q,ge=(ee.start+ee.count)*Q;O!==null&&(de=Math.max(de,O.start*Q),ge=Math.min(ge,(O.start+O.count)*Q)),Y!==null?(de=Math.max(de,0),ge=Math.min(ge,Y.count)):re!=null&&(de=Math.max(de,0),ge=Math.min(ge,re.count));const we=ge-de;if(we<0||we===1/0)return;Qe.setup(P,R,Z,E,Y);let ye,Ee=Pe;if(Y!==null&&(ye=j.get(Y),Ee=$e,Ee.setIndex(ye)),P.isMesh)R.wireframe===!0?(ue.setLineWidth(R.wireframeLinewidth*ze()),Ee.setMode(F.LINES)):Ee.setMode(F.TRIANGLES);else if(P.isLine){let ve=R.linewidth;ve===void 0&&(ve=1),ue.setLineWidth(ve*ze()),P.isLineSegments?Ee.setMode(F.LINES):P.isLineLoop?Ee.setMode(F.LINE_LOOP):Ee.setMode(F.LINE_STRIP)}else P.isPoints?Ee.setMode(F.POINTS):P.isSprite&&Ee.setMode(F.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ee.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ee.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const ve=P._multiDrawStarts,ht=P._multiDrawCounts,Je=P._multiDrawCount,It=Y?j.get(Y).bytesPerElement:1,yt=be.get(R).currentProgram.getUniforms();for(let it=0;it<Je;it++)yt.setValue(F,"_gl_DrawID",it),Ee.render(ve[it]/It,ht[it])}else if(P.isInstancedMesh)Ee.renderInstances(de,we,P.count);else if(E.isInstancedBufferGeometry){const ve=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,ht=Math.min(E.instanceCount,ve);Ee.renderInstances(de,we,ht)}else Ee.render(de,we)};function Oe(u,x,E){u.transparent===!0&&u.side===Ri&&u.forceSinglePass===!1?(u.side=kn,u.needsUpdate=!0,bt(u,x,E),u.side=Ar,u.needsUpdate=!0,bt(u,x,E),u.side=Ri):bt(u,x,E)}this.compile=function(u,x,E=null){E===null&&(E=u),m=Ke.get(E),m.init(x),b.push(m),E.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),u!==E&&u.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const R=new Set;return u.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const O=P.material;if(O)if(Array.isArray(O))for(let H=0;H<O.length;H++){const Z=O[H];Oe(Z,E,P),R.add(Z)}else Oe(O,E,P),R.add(O)}),b.pop(),m=null,R},this.compileAsync=function(u,x,E=null){const R=this.compile(u,x,E);return new Promise(P=>{function O(){if(R.forEach(function(H){be.get(H).currentProgram.isReady()&&R.delete(H)}),R.size===0){P(u);return}setTimeout(O,10)}me.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Ge=null;function rt(u){Ge&&Ge(u)}function De(){We.stop()}function nt(){We.start()}const We=new rm;We.setAnimationLoop(rt),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(u){Ge=u,ie.setAnimationLoop(u),u===null?We.stop():We.start()},ie.addEventListener("sessionstart",De),ie.addEventListener("sessionend",nt),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(x),x=ie.getCamera()),u.isScene===!0&&u.onBeforeRender(S,u,x,I),m=Ke.get(u,b.length),m.init(x),b.push(m),Re.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),ne.setFromProjectionMatrix(Re),he=this.localClippingEnabled,le=xe.init(this.clippingPlanes,he),_=_e.get(u,w.length),_.init(),w.push(_),ie.enabled===!0&&ie.isPresenting===!0){const O=S.xr.getDepthSensingMesh();O!==null&&tt(O,x,-1/0,S.sortObjects)}tt(u,x,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ae,N),Xe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Xe&&Ue.addToRenderList(_,u),this.info.render.frame++,le===!0&&xe.beginShadows();const E=m.state.shadowsArray;Me.render(E,u,x),le===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=_.opaque,P=_.transmissive;if(m.setupLights(),x.isArrayCamera){const O=x.cameras;if(P.length>0)for(let H=0,Z=O.length;H<Z;H++){const Y=O[H];ot(R,P,u,Y)}Xe&&Ue.render(u);for(let H=0,Z=O.length;H<Z;H++){const Y=O[H];Ft(_,u,Y,Y.viewport)}}else P.length>0&&ot(R,P,u,x),Xe&&Ue.render(u),Ft(_,u,x);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),u.isScene===!0&&u.onAfterRender(S,u,x),Qe.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],le===!0&&xe.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function tt(u,x,E,R){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)E=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||ne.intersectsSprite(u)){R&&qe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Re);const H=oe.update(u),Z=u.material;Z.visible&&_.push(u,H,Z,E,qe.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||ne.intersectsObject(u))){const H=oe.update(u),Z=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),qe.copy(u.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),qe.copy(H.boundingSphere.center)),qe.applyMatrix4(u.matrixWorld).applyMatrix4(Re)),Array.isArray(Z)){const Y=H.groups;for(let Q=0,ee=Y.length;Q<ee;Q++){const re=Y[Q],de=Z[re.materialIndex];de&&de.visible&&_.push(u,H,de,E,qe.z,re)}}else Z.visible&&_.push(u,H,Z,E,qe.z,null)}}const O=u.children;for(let H=0,Z=O.length;H<Z;H++)tt(O[H],x,E,R)}function Ft(u,x,E,R){const P=u.opaque,O=u.transmissive,H=u.transparent;m.setupLightsView(E),le===!0&&xe.setGlobalState(S.clippingPlanes,E),R&&ue.viewport(U.copy(R)),P.length>0&&Ct(P,x,E),O.length>0&&Ct(O,x,E),H.length>0&&Ct(H,x,E),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ot(u,x,E,R){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[R.id]===void 0&&(m.state.transmissionRenderTarget[R.id]=new as(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?qi:er,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const O=m.state.transmissionRenderTarget[R.id],H=R.viewport||U;O.setSize(H.z,H.w);const Z=S.getRenderTarget();S.setRenderTarget(O),S.getClearColor($),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ue.render(E);const Y=S.toneMapping;S.toneMapping=Ki;const Q=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),m.setupLightsView(R),le===!0&&xe.setGlobalState(S.clippingPlanes,R),Ct(u,E,R),C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O),me.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let re=0,de=x.length;re<de;re++){const ge=x[re],we=ge.object,ye=ge.geometry,Ee=ge.material,ve=ge.group;if(Ee.side===Ri&&we.layers.test(R.layers)){const ht=Ee.side;Ee.side=kn,Ee.needsUpdate=!0,Xt(we,E,R,ye,Ee,ve),Ee.side=ht,Ee.needsUpdate=!0,ee=!0}}ee===!0&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O))}S.setRenderTarget(Z),S.setClearColor($,K),Q!==void 0&&(R.viewport=Q),S.toneMapping=Y}function Ct(u,x,E){const R=x.isScene===!0?x.overrideMaterial:null;for(let P=0,O=u.length;P<O;P++){const H=u[P],Z=H.object,Y=H.geometry,Q=R===null?H.material:R,ee=H.group;Z.layers.test(E.layers)&&Xt(Z,x,E,Y,Q,ee)}}function Xt(u,x,E,R,P,O){u.onBeforeRender(S,x,E,R,P,O),u.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),P.onBeforeRender(S,x,E,R,u,O),P.transparent===!0&&P.side===Ri&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,S.renderBufferDirect(E,x,R,P,u,O),P.side=Ar,P.needsUpdate=!0,S.renderBufferDirect(E,x,R,P,u,O),P.side=Ri):S.renderBufferDirect(E,x,R,P,u,O),u.onAfterRender(S,x,E,R,P,O)}function bt(u,x,E){x.isScene!==!0&&(x=je);const R=be.get(u),P=m.state.lights,O=m.state.shadowsArray,H=P.state.version,Z=Te.getParameters(u,P.state,O,x,E),Y=Te.getProgramCacheKey(Z);let Q=R.programs;R.environment=u.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(u.isMeshStandardMaterial?V:y).get(u.envMap||R.environment),R.envMapRotation=R.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,Q===void 0&&(u.addEventListener("dispose",et),Q=new Map,R.programs=Q);let ee=Q.get(Y);if(ee!==void 0){if(R.currentProgram===ee&&R.lightsStateVersion===H)return xt(u,Z),ee}else Z.uniforms=Te.getUniforms(u),u.onBeforeCompile(Z,S),ee=Te.acquireProgram(Z,Y),Q.set(Y,ee),R.uniforms=Z.uniforms;const re=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(re.clippingPlanes=xe.uniform),xt(u,Z),R.needsLights=Gt(u),R.lightsStateVersion=H,R.needsLights&&(re.ambientLightColor.value=P.state.ambient,re.lightProbe.value=P.state.probe,re.directionalLights.value=P.state.directional,re.directionalLightShadows.value=P.state.directionalShadow,re.spotLights.value=P.state.spot,re.spotLightShadows.value=P.state.spotShadow,re.rectAreaLights.value=P.state.rectArea,re.ltc_1.value=P.state.rectAreaLTC1,re.ltc_2.value=P.state.rectAreaLTC2,re.pointLights.value=P.state.point,re.pointLightShadows.value=P.state.pointShadow,re.hemisphereLights.value=P.state.hemi,re.directionalShadowMap.value=P.state.directionalShadowMap,re.directionalShadowMatrix.value=P.state.directionalShadowMatrix,re.spotShadowMap.value=P.state.spotShadowMap,re.spotLightMatrix.value=P.state.spotLightMatrix,re.spotLightMap.value=P.state.spotLightMap,re.pointShadowMap.value=P.state.pointShadowMap,re.pointShadowMatrix.value=P.state.pointShadowMatrix),R.currentProgram=ee,R.uniformsList=null,ee}function Et(u){if(u.uniformsList===null){const x=u.currentProgram.getUniforms();u.uniformsList=il.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function xt(u,x){const E=be.get(u);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function Sn(u,x,E,R,P){x.isScene!==!0&&(x=je),C.resetTextureUnits();const O=x.fog,H=R.isMeshStandardMaterial?x.environment:null,Z=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tr,Y=(R.isMeshStandardMaterial?V:y).get(R.envMap||H),Q=R.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,ee=!!E.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),re=!!E.morphAttributes.position,de=!!E.morphAttributes.normal,ge=!!E.morphAttributes.color;let we=Ki;R.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(we=S.toneMapping);const ye=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Ee=ye!==void 0?ye.length:0,ve=be.get(R),ht=m.state.lights;if(le===!0&&(he===!0||u!==M)){const lt=u===M&&R.id===T;xe.setState(R,u,lt)}let Je=!1;R.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ht.state.version||ve.outputColorSpace!==Z||P.isBatchedMesh&&ve.batching===!1||!P.isBatchedMesh&&ve.batching===!0||P.isBatchedMesh&&ve.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&ve.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&ve.instancing===!1||!P.isInstancedMesh&&ve.instancing===!0||P.isSkinnedMesh&&ve.skinning===!1||!P.isSkinnedMesh&&ve.skinning===!0||P.isInstancedMesh&&ve.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ve.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ve.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ve.instancingMorph===!1&&P.morphTexture!==null||ve.envMap!==Y||R.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==xe.numPlanes||ve.numIntersection!==xe.numIntersection)||ve.vertexAlphas!==Q||ve.vertexTangents!==ee||ve.morphTargets!==re||ve.morphNormals!==de||ve.morphColors!==ge||ve.toneMapping!==we||ve.morphTargetsCount!==Ee)&&(Je=!0):(Je=!0,ve.__version=R.version);let It=ve.currentProgram;Je===!0&&(It=bt(R,x,P));let yt=!1,it=!1,Ut=!1;const ft=It.getUniforms(),wt=ve.uniforms;if(ue.useProgram(It.program)&&(yt=!0,it=!0,Ut=!0),R.id!==T&&(T=R.id,it=!0),yt||M!==u){ue.buffers.depth.getReversed()?(fe.copy(u.projectionMatrix),c0(fe),u0(fe),ft.setValue(F,"projectionMatrix",fe)):ft.setValue(F,"projectionMatrix",u.projectionMatrix),ft.setValue(F,"viewMatrix",u.matrixWorldInverse);const nn=ft.map.cameraPosition;nn!==void 0&&nn.setValue(F,Be.setFromMatrixPosition(u.matrixWorld)),k.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ft.setValue(F,"isOrthographic",u.isOrthographicCamera===!0),M!==u&&(M=u,it=!0,Ut=!0)}if(P.isSkinnedMesh){ft.setOptional(F,P,"bindMatrix"),ft.setOptional(F,P,"bindMatrixInverse");const lt=P.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ft.setValue(F,"boneTexture",lt.boneTexture,C))}P.isBatchedMesh&&(ft.setOptional(F,P,"batchingTexture"),ft.setValue(F,"batchingTexture",P._matricesTexture,C),ft.setOptional(F,P,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",P._indirectTexture,C),ft.setOptional(F,P,"batchingColorTexture"),P._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",P._colorsTexture,C));const _t=E.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Ne.update(P,E,It),(it||ve.receiveShadow!==P.receiveShadow)&&(ve.receiveShadow=P.receiveShadow,ft.setValue(F,"receiveShadow",P.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(wt.envMap.value=Y,wt.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(wt.envMapIntensity.value=x.environmentIntensity),it&&(ft.setValue(F,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&St(wt,Ut),O&&R.fog===!0&&pe.refreshFogUniforms(wt,O),pe.refreshMaterialUniforms(wt,R,G,X,m.state.transmissionRenderTarget[u.id]),il.upload(F,Et(ve),wt,C)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(il.upload(F,Et(ve),wt,C),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ft.setValue(F,"center",P.center),ft.setValue(F,"modelViewMatrix",P.modelViewMatrix),ft.setValue(F,"normalMatrix",P.normalMatrix),ft.setValue(F,"modelMatrix",P.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const lt=R.uniformsGroups;for(let nn=0,Dn=lt.length;nn<Dn;nn++){const Vn=lt[nn];B.update(Vn,It),B.bind(Vn,It)}}return It}function St(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function Gt(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(u,x,E){be.get(u.texture).__webglTexture=x,be.get(u.depthTexture).__webglTexture=E;const R=be.get(u);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=E===void 0,R.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,x){const E=be.get(u);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,E=0){I=u,D=x,A=E;let R=!0,P=null,O=!1,H=!1;if(u){const Y=be.get(u);if(Y.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(F.FRAMEBUFFER,null),R=!1;else if(Y.__webglFramebuffer===void 0)C.setupRenderTarget(u);else if(Y.__hasExternalTextures)C.rebindTextures(u,be.get(u.texture).__webglTexture,be.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const re=u.depthTexture;if(Y.__boundDepthTexture!==re){if(re!==null&&be.has(re)&&(u.width!==re.image.width||u.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(u)}}const Q=u.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(H=!0);const ee=be.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(ee[x])?P=ee[x][E]:P=ee[x],O=!0):u.samples>0&&C.useMultisampledRTT(u)===!1?P=be.get(u).__webglMultisampledFramebuffer:Array.isArray(ee)?P=ee[E]:P=ee,U.copy(u.viewport),z.copy(u.scissor),W=u.scissorTest}else U.copy(Se).multiplyScalar(G).floor(),z.copy(Fe).multiplyScalar(G).floor(),W=Ze;if(ue.bindFramebuffer(F.FRAMEBUFFER,P)&&R&&ue.drawBuffers(u,P),ue.viewport(U),ue.scissor(z),ue.setScissorTest(W),O){const Y=be.get(u.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y.__webglTexture,E)}else if(H){const Y=be.get(u.texture),Q=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.__webglTexture,E||0,Q)}T=-1},this.readRenderTargetPixels=function(u,x,E,R,P,O,H){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=be.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&H!==void 0&&(Z=Z[H]),Z){ue.bindFramebuffer(F.FRAMEBUFFER,Z);try{const Y=u.texture,Q=Y.format,ee=Y.type;if(!k.textureFormatReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-R&&E>=0&&E<=u.height-P&&F.readPixels(x,E,R,P,ke.convert(Q),ke.convert(ee),O)}finally{const Y=I!==null?be.get(I).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,Y)}}},this.readRenderTargetPixelsAsync=async function(u,x,E,R,P,O,H){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=be.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&H!==void 0&&(Z=Z[H]),Z){const Y=u.texture,Q=Y.format,ee=Y.type;if(!k.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=u.width-R&&E>=0&&E<=u.height-P){ue.bindFramebuffer(F.FRAMEBUFFER,Z);const re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.bufferData(F.PIXEL_PACK_BUFFER,O.byteLength,F.STREAM_READ),F.readPixels(x,E,R,P,ke.convert(Q),ke.convert(ee),0);const de=I!==null?be.get(I).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,de);const ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await l0(F,ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,O),F.deleteBuffer(re),F.deleteSync(ge),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,x=null,E=0){u.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,u=arguments[1]);const R=Math.pow(2,-E),P=Math.floor(u.image.width*R),O=Math.floor(u.image.height*R),H=x!==null?x.x:0,Z=x!==null?x.y:0;C.setTexture2D(u,0),F.copyTexSubImage2D(F.TEXTURE_2D,E,0,0,H,Z,P,O),ue.unbindTexture()},this.copyTextureToTexture=function(u,x,E=null,R=null,P=0){u.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,u=arguments[1],x=arguments[2],P=arguments[3]||0,E=null);let O,H,Z,Y,Q,ee,re,de,ge;const we=u.isCompressedTexture?u.mipmaps[P]:u.image;E!==null?(O=E.max.x-E.min.x,H=E.max.y-E.min.y,Z=E.isBox3?E.max.z-E.min.z:1,Y=E.min.x,Q=E.min.y,ee=E.isBox3?E.min.z:0):(O=we.width,H=we.height,Z=we.depth||1,Y=0,Q=0,ee=0),R!==null?(re=R.x,de=R.y,ge=R.z):(re=0,de=0,ge=0);const ye=ke.convert(x.format),Ee=ke.convert(x.type);let ve;x.isData3DTexture?(C.setTexture3D(x,0),ve=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(C.setTexture2DArray(x,0),ve=F.TEXTURE_2D_ARRAY):(C.setTexture2D(x,0),ve=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),Je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),It=F.getParameter(F.UNPACK_SKIP_PIXELS),yt=F.getParameter(F.UNPACK_SKIP_ROWS),it=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,we.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Y),F.pixelStorei(F.UNPACK_SKIP_ROWS,Q),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ee);const Ut=u.isDataArrayTexture||u.isData3DTexture,ft=x.isDataArrayTexture||x.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){const wt=be.get(u),_t=be.get(x),lt=be.get(wt.__renderTarget),nn=be.get(_t.__renderTarget);ue.bindFramebuffer(F.READ_FRAMEBUFFER,lt.__webglFramebuffer),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Dn=0;Dn<Z;Dn++)Ut&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(u).__webglTexture,P,ee+Dn),u.isDepthTexture?(ft&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(x).__webglTexture,P,ge+Dn),F.blitFramebuffer(Y,Q,O,H,re,de,O,H,F.DEPTH_BUFFER_BIT,F.NEAREST)):ft?F.copyTexSubImage3D(ve,P,re,de,ge+Dn,Y,Q,O,H):F.copyTexSubImage2D(ve,P,re,de,ge+Dn,Y,Q,O,H);ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ft?u.isDataTexture||u.isData3DTexture?F.texSubImage3D(ve,P,re,de,ge,O,H,Z,ye,Ee,we.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(ve,P,re,de,ge,O,H,Z,ye,we.data):F.texSubImage3D(ve,P,re,de,ge,O,H,Z,ye,Ee,we):u.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,P,re,de,O,H,ye,Ee,we.data):u.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,P,re,de,we.width,we.height,ye,we.data):F.texSubImage2D(F.TEXTURE_2D,P,re,de,O,H,ye,Ee,we);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,It),F.pixelStorei(F.UNPACK_SKIP_ROWS,yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,it),P===0&&x.generateMipmaps&&F.generateMipmap(ve),ue.unbindTexture()},this.copyTextureToTexture3D=function(u,x,E=null,R=null,P=0){return u.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,R=arguments[1]||null,u=arguments[2],x=arguments[3],P=arguments[4]||0),To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,x,E,R,P)},this.initRenderTarget=function(u){be.get(u).__webglFramebuffer===void 0&&C.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?C.setTextureCube(u,0):u.isData3DTexture?C.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?C.setTexture2DArray(u,0):C.setTexture2D(u,0),ue.unbindTexture()},this.resetState=function(){D=0,A=0,I=null,ue.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class hm extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fm extends fn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Pn,h=Pn,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o extends si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ty extends fn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const vl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class by{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const wy=new by;class ta{constructor(e){this.manager=e!==void 0?e:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class Ay extends Error{constructor(e,t){super(e),this.response=t}}class Ry extends ta{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const _=new ReadableStream({start(m){w();function w(){f.read().then(({done:b,value:S})=>{if(b)m.close();else{v+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let D=0,A=h.length;D<A;D++){const I=h[D];I.onProgress&&I.onProgress(L)}m.enqueue(S),w()}},b=>{m.error(b)})}}});return new Response(_)}else throw new Ay(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{vl.add(e,c);const h=zi[e];delete zi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cy extends ta{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ko("img");function l(){h(),vl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Py extends ta{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new fm,a=new Ry(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Yi,o.wrapT=c.wrapT!==void 0?c.wrapT:Yi,o.magFilter=c.magFilter!==void 0?c.magFilter:un,o.minFilter=c.minFilter!==void 0?c.minFilter:un,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=vr),c.mipmapCount===1&&(o.minFilter=un),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class za extends ta{constructor(e){super(e)}load(e,t,n,i){const s=new fn,o=new Cy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ed extends ir{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var fi=Uint8Array,Ns=Uint16Array,Dy=Int32Array,dm=new fi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pm=new fi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ly=new fi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mm=function(r,e){for(var t=new Ns(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Dy(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},_m=mm(dm,2),gm=_m.b,Iy=_m.r;gm[28]=258,Iy[258]=28;var Uy=mm(pm,0),Ny=Uy.b,Du=new Ns(32768);for(var Nt=0;Nt<32768;++Nt){var hr=(Nt&43690)>>1|(Nt&21845)<<1;hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,Du[Nt]=((hr&65280)>>8|(hr&255)<<8)>>1}var Bo=(function(r,e,t){for(var n=r.length,i=0,s=new Ns(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Ns(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ns(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],f=o[r[i]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)a[Du[f]>>l]=c}else for(a=new Ns(n),i=0;i<n;++i)r[i]&&(a[i]=Du[o[r[i]-1]++]>>15-r[i]);return a}),na=new fi(288);for(var Nt=0;Nt<144;++Nt)na[Nt]=8;for(var Nt=144;Nt<256;++Nt)na[Nt]=9;for(var Nt=256;Nt<280;++Nt)na[Nt]=7;for(var Nt=280;Nt<288;++Nt)na[Nt]=8;var vm=new fi(32);for(var Nt=0;Nt<32;++Nt)vm[Nt]=5;var Oy=Bo(na,9,1),Fy=Bo(vm,5,1),vc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Si=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},xc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},By=function(r){return(r+7)/8|0},zy=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new fi(r.subarray(e,t))},ky=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],yi=function(r,e,t){var n=new Error(e||ky[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,yi),!t)throw n;return n},Hy=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new fi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new fi(i*3));var c=function(je){var Xe=t.length;if(je>Xe){var ze=new fi(Math.max(Xe*2,je));ze.set(t),t=ze}},h=e.f||0,f=e.p||0,d=e.b||0,p=e.l,g=e.d,v=e.m,_=e.n,m=i*8;do{if(!p){h=Si(r,f,1);var w=Si(r,f+1,3);if(f+=3,w)if(w==1)p=Oy,g=Fy,v=9,_=5;else if(w==2){var D=Si(r,f,31)+257,A=Si(r,f+10,15)+4,I=D+Si(r,f+5,31)+1;f+=14;for(var T=new fi(I),M=new fi(19),U=0;U<A;++U)M[Ly[U]]=Si(r,f+U*3,7);f+=A*3;for(var z=vc(M),W=(1<<z)-1,$=Bo(M,z,1),U=0;U<I;){var K=$[Si(r,f,W)];f+=K&15;var b=K>>4;if(b<16)T[U++]=b;else{var q=0,X=0;for(b==16?(X=3+Si(r,f,3),f+=2,q=T[U-1]):b==17?(X=3+Si(r,f,7),f+=3):b==18&&(X=11+Si(r,f,127),f+=7);X--;)T[U++]=q}}var G=T.subarray(0,D),ae=T.subarray(D);v=vc(G),_=vc(ae),p=Bo(G,v,1),g=Bo(ae,_,1)}else yi(1);else{var b=By(f)+4,S=r[b-4]|r[b-3]<<8,L=b+S;if(L>i){l&&yi(0);break}a&&c(d+S),t.set(r.subarray(b,L),d),e.b=d+=S,e.p=f=L*8,e.f=h;continue}if(f>m){l&&yi(0);break}}a&&c(d+131072);for(var N=(1<<v)-1,Se=(1<<_)-1,Fe=f;;Fe=f){var q=p[xc(r,f)&N],Ze=q>>4;if(f+=q&15,f>m){l&&yi(0);break}if(q||yi(2),Ze<256)t[d++]=Ze;else if(Ze==256){Fe=f,p=null;break}else{var ne=Ze-254;if(Ze>264){var U=Ze-257,le=dm[U];ne=Si(r,f,(1<<le)-1)+gm[U],f+=le}var he=g[xc(r,f)&Se],fe=he>>4;he||yi(3),f+=he&15;var ae=Ny[fe];if(fe>3){var le=pm[fe];ae+=xc(r,f)&(1<<le)-1,f+=le}if(f>m){l&&yi(0);break}a&&c(d+131072);var Re=d+ne;if(d<ae){var Be=s-ae,qe=Math.min(ae,Re);for(Be+d<0&&yi(3);d<qe;++d)t[d]=n[Be+d]}for(;d<Re;++d)t[d]=t[d-ae]}}e.l=p,e.p=Fe,e.b=d,e.f=h,p&&(h=1,e.m=v,e.d=g,e.n=_)}while(!h);return d!=t.length&&o?zy(t,0,d):t.subarray(0,d)},Vy=new fi(0),Gy=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&yi(6,"invalid zlib data"),(r[1]>>5&1)==1&&yi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function ka(r,e){return Hy(r.subarray(Gy(r),-4),{i:2},e,e)}var Wy=typeof TextDecoder<"u"&&new TextDecoder,Xy=0;try{Wy.decode(Vy,{stream:!0}),Xy=1}catch{}class Yy extends Py{constructor(e){super(e),this.type=qi}parse(e){const T=Math.pow(2.7182818,2.2);function M(u,x){let E=0;for(let P=0;P<65536;++P)(P==0||u[P>>3]&1<<(P&7))&&(x[E++]=P);const R=E-1;for(;E<65536;)x[E++]=0;return R}function U(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}const z={l:0,c:0,lc:0};function W(u,x,E,R,P){for(;E<u;)x=x<<8|Pe(R,P),E+=8;E-=u,z.l=x>>E&(1<<u)-1,z.c=x,z.lc=E}const $=new Array(59);function K(u){for(let E=0;E<=58;++E)$[E]=0;for(let E=0;E<65537;++E)$[u[E]]+=1;let x=0;for(let E=58;E>0;--E){const R=x+$[E]>>1;$[E]=x,x=R}for(let E=0;E<65537;++E){const R=u[E];R>0&&(u[E]=R|$[R]++<<6)}}function q(u,x,E,R,P,O){const H=x;let Z=0,Y=0;for(;R<=P;R++){if(H.value-x.value>E)return!1;W(6,Z,Y,u,H);const Q=z.l;if(Z=z.c,Y=z.lc,O[R]=Q,Q==63){if(H.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");W(8,Z,Y,u,H);let ee=z.l+6;if(Z=z.c,Y=z.lc,R+ee>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)O[R++]=0;R--}else if(Q>=59){let ee=Q-59+2;if(R+ee>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)O[R++]=0;R--}}K(O)}function X(u){return u&63}function G(u){return u>>6}function ae(u,x,E,R){for(;x<=E;x++){const P=G(u[x]),O=X(u[x]);if(P>>O)throw new Error("Invalid table entry");if(O>14){const H=R[P>>O-14];if(H.len)throw new Error("Invalid table entry");if(H.lit++,H.p){const Z=H.p;H.p=new Array(H.lit);for(let Y=0;Y<H.lit-1;++Y)H.p[Y]=Z[Y]}else H.p=new Array(1);H.p[H.lit-1]=x}else if(O){let H=0;for(let Z=1<<14-O;Z>0;Z--){const Y=R[(P<<14-O)+H];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=O,Y.lit=x,H++}}}return!0}const N={c:0,lc:0};function Se(u,x,E,R){u=u<<8|Pe(E,R),x+=8,N.c=u,N.lc=x}const Fe={c:0,lc:0};function Ze(u,x,E,R,P,O,H,Z,Y){if(u==x){R<8&&(Se(E,R,P,O),E=N.c,R=N.lc),R-=8;let Q=E>>R;if(Q=new Uint8Array([Q])[0],Z.value+Q>Y)return!1;const ee=H[Z.value-1];for(;Q-- >0;)H[Z.value++]=ee}else if(Z.value<Y)H[Z.value++]=u;else return!1;Fe.c=E,Fe.lc=R}function ne(u){return u&65535}function le(u){const x=ne(u);return x>32767?x-65536:x}const he={a:0,b:0};function fe(u,x){const E=le(u),P=le(x),O=E+(P&1)+(P>>1),H=O,Z=O-P;he.a=H,he.b=Z}function Re(u,x){const E=ne(u),R=ne(x),P=E-(R>>1)&65535,O=R+P-32768&65535;he.a=O,he.b=P}function Be(u,x,E,R,P,O,H){const Z=H<16384,Y=E>P?P:E;let Q=1,ee,re;for(;Q<=Y;)Q<<=1;for(Q>>=1,ee=Q,Q>>=1;Q>=1;){re=0;const de=re+O*(P-ee),ge=O*Q,we=O*ee,ye=R*Q,Ee=R*ee;let ve,ht,Je,It;for(;re<=de;re+=we){let yt=re;const it=re+R*(E-ee);for(;yt<=it;yt+=Ee){const Ut=yt+ye,ft=yt+ge,wt=ft+ye;Z?(fe(u[yt+x],u[ft+x]),ve=he.a,Je=he.b,fe(u[Ut+x],u[wt+x]),ht=he.a,It=he.b,fe(ve,ht),u[yt+x]=he.a,u[Ut+x]=he.b,fe(Je,It),u[ft+x]=he.a,u[wt+x]=he.b):(Re(u[yt+x],u[ft+x]),ve=he.a,Je=he.b,Re(u[Ut+x],u[wt+x]),ht=he.a,It=he.b,Re(ve,ht),u[yt+x]=he.a,u[Ut+x]=he.b,Re(Je,It),u[ft+x]=he.a,u[wt+x]=he.b)}if(E&Q){const Ut=yt+ge;Z?fe(u[yt+x],u[Ut+x]):Re(u[yt+x],u[Ut+x]),ve=he.a,u[Ut+x]=he.b,u[yt+x]=ve}}if(P&Q){let yt=re;const it=re+R*(E-ee);for(;yt<=it;yt+=Ee){const Ut=yt+ye;Z?fe(u[yt+x],u[Ut+x]):Re(u[yt+x],u[Ut+x]),ve=he.a,u[Ut+x]=he.b,u[yt+x]=ve}}ee=Q,Q>>=1}return re}function qe(u,x,E,R,P,O,H,Z,Y){let Q=0,ee=0;const re=H,de=Math.trunc(R.value+(P+7)/8);for(;R.value<de;)for(Se(Q,ee,E,R),Q=N.c,ee=N.lc;ee>=14;){const we=Q>>ee-14&16383,ye=x[we];if(ye.len)ee-=ye.len,Ze(ye.lit,O,Q,ee,E,R,Z,Y,re),Q=Fe.c,ee=Fe.lc;else{if(!ye.p)throw new Error("hufDecode issues");let Ee;for(Ee=0;Ee<ye.lit;Ee++){const ve=X(u[ye.p[Ee]]);for(;ee<ve&&R.value<de;)Se(Q,ee,E,R),Q=N.c,ee=N.lc;if(ee>=ve&&G(u[ye.p[Ee]])==(Q>>ee-ve&(1<<ve)-1)){ee-=ve,Ze(ye.p[Ee],O,Q,ee,E,R,Z,Y,re),Q=Fe.c,ee=Fe.lc;break}}if(Ee==ye.lit)throw new Error("hufDecode issues")}}const ge=8-P&7;for(Q>>=ge,ee-=ge;ee>0;){const we=x[Q<<14-ee&16383];if(we.len)ee-=we.len,Ze(we.lit,O,Q,ee,E,R,Z,Y,re),Q=Fe.c,ee=Fe.lc;else throw new Error("hufDecode issues")}return!0}function je(u,x,E,R,P,O){const H={value:0},Z=E.value,Y=Ne(x,E),Q=Ne(x,E);E.value+=4;const ee=Ne(x,E);if(E.value+=4,Y<0||Y>=65537||Q<0||Q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const re=new Array(65537),de=new Array(16384);U(de);const ge=R-(E.value-Z);if(q(u,E,ge,Y,Q,re),ee>8*(R-(E.value-Z)))throw new Error("Something wrong with hufUncompress");ae(re,Y,Q,de),qe(re,de,u,E,ee,Q,O,P,H)}function Xe(u,x,E){for(let R=0;R<E;++R)x[R]=u[x[R]]}function ze(u){for(let x=1;x<u.length;x++){const E=u[x-1]+u[x]-128;u[x]=E}}function F(u,x){let E=0,R=Math.floor((u.length+1)/2),P=0;const O=u.length-1;for(;!(P>O||(x[P++]=u[E++],P>O));)x[P++]=u[R++]}function Ve(u){let x=u.byteLength;const E=new Array;let R=0;const P=new DataView(u);for(;x>0;){const O=P.getInt8(R++);if(O<0){const H=-O;x-=H+1;for(let Z=0;Z<H;Z++)E.push(P.getUint8(R++))}else{const H=O;x-=2;const Z=P.getUint8(R++);for(let Y=0;Y<H+1;Y++)E.push(Z)}}return E}function me(u,x,E,R,P,O){let H=new DataView(O.buffer);const Z=E[u.idx[0]].width,Y=E[u.idx[0]].height,Q=3,ee=Math.floor(Z/8),re=Math.ceil(Z/8),de=Math.ceil(Y/8),ge=Z-(re-1)*8,we=Y-(de-1)*8,ye={value:0},Ee=new Array(Q),ve=new Array(Q),ht=new Array(Q),Je=new Array(Q),It=new Array(Q);for(let it=0;it<Q;++it)It[it]=x[u.idx[it]],Ee[it]=it<1?0:Ee[it-1]+re*de,ve[it]=new Float32Array(64),ht[it]=new Uint16Array(64),Je[it]=new Uint16Array(re*64);for(let it=0;it<de;++it){let Ut=8;it==de-1&&(Ut=we);let ft=8;for(let _t=0;_t<re;++_t){_t==re-1&&(ft=ge);for(let lt=0;lt<Q;++lt)ht[lt].fill(0),ht[lt][0]=P[Ee[lt]++],k(ye,R,ht[lt]),ue(ht[lt],ve[lt]),Le(ve[lt]);be(ve);for(let lt=0;lt<Q;++lt)C(ve[lt],Je[lt],_t*64)}let wt=0;for(let _t=0;_t<Q;++_t){const lt=E[u.idx[_t]].type;for(let nn=8*it;nn<8*it+Ut;++nn){wt=It[_t][nn];for(let Dn=0;Dn<ee;++Dn){const Vn=Dn*64+(nn&7)*8;H.setUint16(wt+0*lt,Je[_t][Vn+0],!0),H.setUint16(wt+2*lt,Je[_t][Vn+1],!0),H.setUint16(wt+4*lt,Je[_t][Vn+2],!0),H.setUint16(wt+6*lt,Je[_t][Vn+3],!0),H.setUint16(wt+8*lt,Je[_t][Vn+4],!0),H.setUint16(wt+10*lt,Je[_t][Vn+5],!0),H.setUint16(wt+12*lt,Je[_t][Vn+6],!0),H.setUint16(wt+14*lt,Je[_t][Vn+7],!0),wt+=16*lt}}if(ee!=re)for(let nn=8*it;nn<8*it+Ut;++nn){const Dn=It[_t][nn]+8*ee*2*lt,Vn=ee*64+(nn&7)*8;for(let ia=0;ia<ft;++ia)H.setUint16(Dn+ia*2*lt,Je[_t][Vn+ia],!0)}}}const yt=new Uint16Array(Z);H=new DataView(O.buffer);for(let it=0;it<Q;++it){E[u.idx[it]].decoded=!0;const Ut=E[u.idx[it]].type;if(E[it].type==2)for(let ft=0;ft<Y;++ft){const wt=It[it][ft];for(let _t=0;_t<Z;++_t)yt[_t]=H.getUint16(wt+_t*2*Ut,!0);for(let _t=0;_t<Z;++_t)H.setFloat32(wt+_t*2*Ut,te(yt[_t]),!0)}}}function k(u,x,E){let R,P=1;for(;P<64;)R=x[u.value],R==65280?P=64:R>>8==255?P+=R&255:(E[P]=R,P++),u.value++}function ue(u,x){x[0]=te(u[0]),x[1]=te(u[1]),x[2]=te(u[5]),x[3]=te(u[6]),x[4]=te(u[14]),x[5]=te(u[15]),x[6]=te(u[27]),x[7]=te(u[28]),x[8]=te(u[2]),x[9]=te(u[4]),x[10]=te(u[7]),x[11]=te(u[13]),x[12]=te(u[16]),x[13]=te(u[26]),x[14]=te(u[29]),x[15]=te(u[42]),x[16]=te(u[3]),x[17]=te(u[8]),x[18]=te(u[12]),x[19]=te(u[17]),x[20]=te(u[25]),x[21]=te(u[30]),x[22]=te(u[41]),x[23]=te(u[43]),x[24]=te(u[9]),x[25]=te(u[11]),x[26]=te(u[18]),x[27]=te(u[24]),x[28]=te(u[31]),x[29]=te(u[40]),x[30]=te(u[44]),x[31]=te(u[53]),x[32]=te(u[10]),x[33]=te(u[19]),x[34]=te(u[23]),x[35]=te(u[32]),x[36]=te(u[39]),x[37]=te(u[45]),x[38]=te(u[52]),x[39]=te(u[54]),x[40]=te(u[20]),x[41]=te(u[22]),x[42]=te(u[33]),x[43]=te(u[38]),x[44]=te(u[46]),x[45]=te(u[51]),x[46]=te(u[55]),x[47]=te(u[60]),x[48]=te(u[21]),x[49]=te(u[34]),x[50]=te(u[37]),x[51]=te(u[47]),x[52]=te(u[50]),x[53]=te(u[56]),x[54]=te(u[59]),x[55]=te(u[61]),x[56]=te(u[35]),x[57]=te(u[36]),x[58]=te(u[48]),x[59]=te(u[49]),x[60]=te(u[57]),x[61]=te(u[58]),x[62]=te(u[62]),x[63]=te(u[63])}function Le(u){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),H=.5*Math.cos(3*3.14159/8),Z=.5*Math.cos(7*3.14159/16),Y=new Array(4),Q=new Array(4),ee=new Array(4),re=new Array(4);for(let de=0;de<8;++de){const ge=de*8;Y[0]=R*u[ge+2],Y[1]=H*u[ge+2],Y[2]=R*u[ge+6],Y[3]=H*u[ge+6],Q[0]=E*u[ge+1]+P*u[ge+3]+O*u[ge+5]+Z*u[ge+7],Q[1]=P*u[ge+1]-Z*u[ge+3]-E*u[ge+5]-O*u[ge+7],Q[2]=O*u[ge+1]-E*u[ge+3]+Z*u[ge+5]+P*u[ge+7],Q[3]=Z*u[ge+1]-O*u[ge+3]+P*u[ge+5]-E*u[ge+7],ee[0]=x*(u[ge+0]+u[ge+4]),ee[3]=x*(u[ge+0]-u[ge+4]),ee[1]=Y[0]+Y[3],ee[2]=Y[1]-Y[2],re[0]=ee[0]+ee[1],re[1]=ee[3]+ee[2],re[2]=ee[3]-ee[2],re[3]=ee[0]-ee[1],u[ge+0]=re[0]+Q[0],u[ge+1]=re[1]+Q[1],u[ge+2]=re[2]+Q[2],u[ge+3]=re[3]+Q[3],u[ge+4]=re[3]-Q[3],u[ge+5]=re[2]-Q[2],u[ge+6]=re[1]-Q[1],u[ge+7]=re[0]-Q[0]}for(let de=0;de<8;++de)Y[0]=R*u[16+de],Y[1]=H*u[16+de],Y[2]=R*u[48+de],Y[3]=H*u[48+de],Q[0]=E*u[8+de]+P*u[24+de]+O*u[40+de]+Z*u[56+de],Q[1]=P*u[8+de]-Z*u[24+de]-E*u[40+de]-O*u[56+de],Q[2]=O*u[8+de]-E*u[24+de]+Z*u[40+de]+P*u[56+de],Q[3]=Z*u[8+de]-O*u[24+de]+P*u[40+de]-E*u[56+de],ee[0]=x*(u[de]+u[32+de]),ee[3]=x*(u[de]-u[32+de]),ee[1]=Y[0]+Y[3],ee[2]=Y[1]-Y[2],re[0]=ee[0]+ee[1],re[1]=ee[3]+ee[2],re[2]=ee[3]-ee[2],re[3]=ee[0]-ee[1],u[0+de]=re[0]+Q[0],u[8+de]=re[1]+Q[1],u[16+de]=re[2]+Q[2],u[24+de]=re[3]+Q[3],u[32+de]=re[3]-Q[3],u[40+de]=re[2]-Q[2],u[48+de]=re[1]-Q[1],u[56+de]=re[0]-Q[0]}function be(u){for(let x=0;x<64;++x){const E=u[0][x],R=u[1][x],P=u[2][x];u[0][x]=E+1.5747*P,u[1][x]=E-.1873*R-.4682*P,u[2][x]=E+1.8556*R}}function C(u,x,E){for(let R=0;R<64;++R)x[E+R]=Ef.toHalfFloat(y(u[R]))}function y(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(T,Math.abs(u)-1)}function V(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function j(u){const x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),E=new Uint8Array(Ve(x)),R=new Uint8Array(E.length);return ze(E),F(E,R),new DataView(R.buffer)}function se(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),E=ka(x),R=new Uint8Array(E.length);return ze(E),F(E,R),new DataView(R.buffer)}function oe(u){const x=u.viewer,E={value:u.offset.value},R=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),P=new Uint8Array(8192);let O=0;const H=new Array(u.inputChannels.length);for(let we=0,ye=u.inputChannels.length;we<ye;we++)H[we]={},H[we].start=O,H[we].end=H[we].start,H[we].nx=u.columns,H[we].ny=u.lines,H[we].size=u.type,O+=H[we].nx*H[we].ny*H[we].size;const Z=ie(x,E),Y=ie(x,E);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(Z<=Y)for(let we=0;we<Y-Z+1;we++)P[we+Z]=$e(x,E);const Q=new Uint16Array(65536),ee=M(P,Q),re=Ne(x,E);je(u.array,x,E,re,R,O);for(let we=0;we<u.inputChannels.length;++we){const ye=H[we];for(let Ee=0;Ee<H[we].size;++Ee)Be(R,ye.start+Ee,ye.nx,ye.size,ye.ny,ye.nx*ye.size,ee)}Xe(Q,R,O);let de=0;const ge=new Uint8Array(R.buffer.byteLength);for(let we=0;we<u.lines;we++)for(let ye=0;ye<u.inputChannels.length;ye++){const Ee=H[ye],ve=Ee.nx*Ee.size,ht=new Uint8Array(R.buffer,Ee.end*2,ve*2);ge.set(ht,de),de+=ve*2,Ee.end+=ve}return new DataView(ge.buffer)}function Te(u){const x=u.array.slice(u.offset.value,u.offset.value+u.size),E=ka(x),R=u.inputChannels.length*u.lines*u.columns*u.totalBytes,P=new ArrayBuffer(R),O=new DataView(P);let H=0,Z=0;const Y=new Array(4);for(let Q=0;Q<u.lines;Q++)for(let ee=0;ee<u.inputChannels.length;ee++){let re=0;switch(u.inputChannels[ee].pixelType){case 1:Y[0]=H,Y[1]=Y[0]+u.columns,H=Y[1]+u.columns;for(let ge=0;ge<u.columns;++ge){const we=E[Y[0]++]<<8|E[Y[1]++];re+=we,O.setUint16(Z,re,!0),Z+=2}break;case 2:Y[0]=H,Y[1]=Y[0]+u.columns,Y[2]=Y[1]+u.columns,H=Y[2]+u.columns;for(let ge=0;ge<u.columns;++ge){const we=E[Y[0]++]<<24|E[Y[1]++]<<16|E[Y[2]++]<<8;re+=we,O.setUint32(Z,re,!0),Z+=4}break}}return O}function pe(u){const x=u.viewer,E={value:u.offset.value},R=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),P={version:ke(x,E),unknownUncompressedSize:ke(x,E),unknownCompressedSize:ke(x,E),acCompressedSize:ke(x,E),dcCompressedSize:ke(x,E),rleCompressedSize:ke(x,E),rleUncompressedSize:ke(x,E),rleRawSize:ke(x,E),totalAcUncompressedCount:ke(x,E),totalDcUncompressedCount:ke(x,E),acCompression:ke(x,E)};if(P.version<2)throw new Error("EXRLoader.parse: "+St.compression+" version "+P.version+" is unsupported");const O=new Array;let H=ie(x,E)-2;for(;H>0;){const ye=_e(x.buffer,E),Ee=$e(x,E),ve=Ee>>2&3,ht=(Ee>>4)-1,Je=new Int8Array([ht])[0],It=$e(x,E);O.push({name:ye,index:Je,type:It,compression:ve}),H-=ye.length+3}const Z=St.channels,Y=new Array(u.inputChannels.length);for(let ye=0;ye<u.inputChannels.length;++ye){const Ee=Y[ye]={},ve=Z[ye];Ee.name=ve.name,Ee.compression=0,Ee.decoded=!1,Ee.type=ve.pixelType,Ee.pLinear=ve.pLinear,Ee.width=u.columns,Ee.height=u.lines}const Q={idx:new Array(3)};for(let ye=0;ye<u.inputChannels.length;++ye){const Ee=Y[ye];for(let ve=0;ve<O.length;++ve){const ht=O[ve];Ee.name==ht.name&&(Ee.compression=ht.compression,ht.index>=0&&(Q.idx[ht.index]=ye),Ee.offset=ye)}}let ee,re,de;if(P.acCompressedSize>0)switch(P.acCompression){case 0:ee=new Uint16Array(P.totalAcUncompressedCount),je(u.array,x,E,P.acCompressedSize,ee,P.totalAcUncompressedCount);break;case 1:const ye=u.array.slice(E.value,E.value+P.totalAcUncompressedCount),Ee=ka(ye);ee=new Uint16Array(Ee.buffer),E.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){const ye={array:u.array,offset:E,size:P.dcCompressedSize};re=new Uint16Array(se(ye).buffer),E.value+=P.dcCompressedSize}if(P.rleRawSize>0){const ye=u.array.slice(E.value,E.value+P.rleCompressedSize),Ee=ka(ye);de=Ve(Ee.buffer),E.value+=P.rleCompressedSize}let ge=0;const we=new Array(Y.length);for(let ye=0;ye<we.length;++ye)we[ye]=new Array;for(let ye=0;ye<u.lines;++ye)for(let Ee=0;Ee<Y.length;++Ee)we[Ee].push(ge),ge+=Y[Ee].width*u.type*2;me(Q,we,Y,ee,re,R);for(let ye=0;ye<Y.length;++ye){const Ee=Y[ye];if(!Ee.decoded)switch(Ee.compression){case 2:let ve=0,ht=0;for(let Je=0;Je<u.lines;++Je){let It=we[ye][ve];for(let yt=0;yt<Ee.width;++yt){for(let it=0;it<2*Ee.type;++it)R[It++]=de[ht+it*Ee.width*Ee.height];ht++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function _e(u,x){const E=new Uint8Array(u);let R=0;for(;E[x.value+R]!=0;)R+=1;const P=new TextDecoder().decode(E.slice(x.value,x.value+R));return x.value=x.value+R+1,P}function Ke(u,x,E){const R=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+E));return x.value=x.value+E,R}function xe(u,x){const E=Ue(u,x),R=Ne(u,x);return[E,R]}function Me(u,x){const E=Ne(u,x),R=Ne(u,x);return[E,R]}function Ue(u,x){const E=u.getInt32(x.value,!0);return x.value=x.value+4,E}function Ne(u,x){const E=u.getUint32(x.value,!0);return x.value=x.value+4,E}function Pe(u,x){const E=u[x.value];return x.value=x.value+1,E}function $e(u,x){const E=u.getUint8(x.value);return x.value=x.value+1,E}const ke=function(u,x){let E;return"getBigInt64"in DataView.prototype?E=Number(u.getBigInt64(x.value,!0)):E=u.getUint32(x.value+4,!0)+Number(u.getUint32(x.value,!0)<<32),x.value+=8,E};function Qe(u,x){const E=u.getFloat32(x.value,!0);return x.value+=4,E}function B(u,x){return Ef.toHalfFloat(Qe(u,x))}function te(u){const x=(u&31744)>>10,E=u&1023;return(u>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function ie(u,x){const E=u.getUint16(x.value,!0);return x.value+=2,E}function ce(u,x){return te(ie(u,x))}function Ae(u,x,E,R){const P=E.value,O=[];for(;E.value<P+R-1;){const H=_e(x,E),Z=Ue(u,E),Y=$e(u,E);E.value+=3;const Q=Ue(u,E),ee=Ue(u,E);O.push({name:H,pixelType:Z,pLinear:Y,xSampling:Q,ySampling:ee})}return E.value+=1,O}function Ce(u,x){const E=Qe(u,x),R=Qe(u,x),P=Qe(u,x),O=Qe(u,x),H=Qe(u,x),Z=Qe(u,x),Y=Qe(u,x),Q=Qe(u,x);return{redX:E,redY:R,greenX:P,greenY:O,blueX:H,blueY:Z,whiteX:Y,whiteY:Q}}function et(u,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=$e(u,x);return E[R]}function vt(u,x){const E=Ue(u,x),R=Ue(u,x),P=Ue(u,x),O=Ue(u,x);return{xMin:E,yMin:R,xMax:P,yMax:O}}function Ot(u,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=$e(u,x);return E[R]}function Oe(u,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=$e(u,x);return E[R]}function Ge(u,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],P=Ne(u,x),O=Ne(u,x),H=$e(u,x);return{xSize:P,ySize:O,levelMode:E[H&15],roundingMode:R[H>>4]}}function rt(u,x){const E=Qe(u,x),R=Qe(u,x);return[E,R]}function De(u,x){const E=Qe(u,x),R=Qe(u,x),P=Qe(u,x);return[E,R,P]}function nt(u,x,E,R,P){if(R==="string"||R==="stringvector"||R==="iccProfile")return Ke(x,E,P);if(R==="chlist")return Ae(u,x,E,P);if(R==="chromaticities")return Ce(u,E);if(R==="compression")return et(u,E);if(R==="box2i")return vt(u,E);if(R==="envmap")return Oe(u,E);if(R==="tiledesc")return Ge(u,E);if(R==="lineOrder")return Ot(u,E);if(R==="float")return Qe(u,E);if(R==="v2f")return rt(u,E);if(R==="v3f")return De(u,E);if(R==="int")return Ue(u,E);if(R==="rational")return xe(u,E);if(R==="timecode")return Me(u,E);if(R==="preview")return E.value+=P,"skipped";E.value+=P}function We(u,x){const E=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function tt(u,x,E){let R=0;switch(u.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=We(Math.max(x,E),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Ft(u,x,E,R){const P=new Array(u);for(let O=0;O<u;O++){const H=1<<O;let Z=x/H|0;R=="ROUND_UP"&&Z*H<x&&(Z+=1);const Y=Math.max(Z,1);P[O]=(Y+E-1)/E|0}return P}function ot(){const u=this,x=u.offset,E={value:0};for(let R=0;R<u.tileCount;R++){const P=Ue(u.viewer,x),O=Ue(u.viewer,x);x.value+=8,u.size=Ne(u.viewer,x);const H=P*u.blockWidth,Z=O*u.blockHeight;u.columns=H+u.blockWidth>u.width?u.width-H:u.blockWidth,u.lines=Z+u.blockHeight>u.height?u.height-Z:u.blockHeight;const Y=u.columns*u.totalBytes,ee=u.size<u.lines*Y?u.uncompress(u):V(u);x.value+=u.size;for(let re=0;re<u.lines;re++){const de=re*u.columns*u.totalBytes;for(let ge=0;ge<u.inputChannels.length;ge++){const we=St.channels[ge].name,ye=u.channelByteOffsets[we]*u.columns,Ee=u.decodeChannels[we];if(Ee===void 0)continue;E.value=de+ye;const ve=(u.height-(1+Z+re))*u.outLineWidth;for(let ht=0;ht<u.columns;ht++){const Je=ve+(ht+H)*u.outputChannels+Ee;u.byteArray[Je]=u.getter(ee,E)}}}}}function Ct(){const u=this,x=u.offset,E={value:0};for(let R=0;R<u.height/u.blockHeight;R++){const P=Ue(u.viewer,x)-St.dataWindow.yMin;u.size=Ne(u.viewer,x),u.lines=P+u.blockHeight>u.height?u.height-P:u.blockHeight;const O=u.columns*u.totalBytes,Z=u.size<u.lines*O?u.uncompress(u):V(u);x.value+=u.size;for(let Y=0;Y<u.blockHeight;Y++){const Q=R*u.blockHeight,ee=Y+u.scanOrder(Q);if(ee>=u.height)continue;const re=Y*O,de=(u.height-1-ee)*u.outLineWidth;for(let ge=0;ge<u.inputChannels.length;ge++){const we=St.channels[ge].name,ye=u.channelByteOffsets[we]*u.columns,Ee=u.decodeChannels[we];if(Ee!==void 0){E.value=re+ye;for(let ve=0;ve<u.columns;ve++){const ht=de+ve*u.outputChannels+Ee;u.byteArray[ht]=u.getter(Z,E)}}}}}}function Xt(u,x,E){const R={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=u.getUint8(4);const P=u.getUint8(5);R.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},E.value=8;let O=!0;for(;O;){const H=_e(x,E);if(H==0)O=!1;else{const Z=_e(x,E),Y=Ne(u,E),Q=nt(u,x,E,Z,Y);Q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${Z}'.`):R[H]=Q}}if((P&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function bt(u,x,E,R,P){const O={size:0,viewer:x,array:E,offset:R,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:tr};switch(u.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=V;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=j;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=se;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=oe;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Te;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=pe;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}const H={};for(const ee of u.channels)switch(ee.name){case"Y":case"R":case"G":case"B":case"A":H[ee.name]=!0,O.type=ee.pixelType}let Z=!1;if(H.R&&H.G&&H.B)Z=!H.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(H.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(P){case ti:O.getter=ce;break;case qi:O.getter=ie;break}else if(O.type==2)switch(P){case ti:O.getter=Qe;break;case qi:O.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+u.compression+".");O.columns=O.width;const Y=O.width*O.height*O.outputChannels;switch(P){case ti:O.byteArray=new Float32Array(Y),Z&&O.byteArray.fill(1,0,Y);break;case qi:O.byteArray=new Uint16Array(Y),Z&&O.byteArray.fill(15360,0,Y);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let Q=0;for(const ee of u.channels)O.decodeChannels[ee.name]!==void 0&&(O.channelByteOffsets[ee.name]=Q),Q+=ee.pixelType*2;if(O.totalBytes=Q,O.outLineWidth=O.width*O.outputChannels,u.lineOrder==="INCREASING_Y"?O.scanOrder=ee=>ee:O.scanOrder=ee=>O.height-1-ee,O.outputChannels==4?(O.format=ni,O.colorSpace=tr):(O.format=lh,O.colorSpace=jn),u.spec.singleTile){O.blockHeight=u.tiles.ySize,O.blockWidth=u.tiles.xSize;const ee=tt(u.tiles,O.width,O.height),re=Ft(ee,O.width,u.tiles.xSize,u.tiles.roundingMode),de=Ft(ee,O.height,u.tiles.ySize,u.tiles.roundingMode);O.tileCount=re[0]*de[0];for(let ge=0;ge<ee;ge++)for(let we=0;we<de[ge];we++)for(let ye=0;ye<re[ge];ye++)ke(x,R);O.decode=ot.bind(O)}else{O.blockWidth=O.width;const ee=Math.ceil(O.height/O.blockHeight);for(let re=0;re<ee;re++)ke(x,R);O.decode=Ct.bind(O)}return O}const Et={value:0},xt=new DataView(e),Sn=new Uint8Array(e),St=Xt(xt,e,Et),Gt=bt(St,xt,Sn,Et,this.type);return Gt.decode(),{header:St,width:Gt.width,height:Gt.height,data:Gt.byteArray,format:Gt.format,colorSpace:Gt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=un,o.magFilter=un,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}async function Vr(r){const t=await(await fetch(r)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],i=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=i.vertexCount,o=i.indexCount;let a=4+n;const l=new ir,c=i.attributes;for(let h=0,f=c.length;h<f;h++){const d=c[h],p=d.id,g=p==="indices"?o:s,v=d.componentSize,_=globalThis[d.storageType],m=new _(t,a,g*v),w=_.BYTES_PER_ELEMENT;let b;if(d.needsPack){const S=d.packedComponents,L=S.length,D=d.storageType.indexOf("Int")===0,A=1<<w*8,I=D?A*.5:0,T=1/A;b=new Float32Array(g*v);for(let M=0,U=0;M<g;M++)for(let z=0;z<L;z++){const W=S[z];b[U]=(m[U]+I)*T*W.delta+W.from,U++}}else b=m;p==="indices"?l.setIndex(new si(b,1)):l.setAttribute(p,new si(b,v)),a+=g*v*w}return l.computeBoundingSphere(),l}const Ha=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Sc={density:1,friction:2,restitution:.8},qy=40,qr=8,$y=`
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
`,Zy=`
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
uniform vec4 u_nearPositionRadiusList[${qr}];
uniform vec3 u_nearColorList[${qr}];

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

  for (int i = 0; i < ${qr}; i++) {
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
  gi /= float(${qr});

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
`,Ky=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Jy=`
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
`;function jy(r){const e={...Sc},t={...Sc},n={...Sc};return[{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!0,isColored:!0,radius:1,...e},{color:r,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function Qy(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function td(r,e,t,n,i){const s=Math.max(0,Math.min(1,(r-e)/(t-e||1)));return n+(i-n)*s}class eE{constructor(e,t,n,i,s,o=!1){this.position=new J((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new nr().setFromEuler(new Ii(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=i,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new J,this.gravityAcc=new J}applyImpulse(){this.velocity.add(new J((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(qy),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function tE(r,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Ha.length),i=Ha[n];const s=new hm,o=new Zn(25,1,.1,100);o.position.set(0,0,25);const a=new um({canvas:r,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=tr,a.toneMapping=Ki;let l=!0;const c="/zyrax-studio/",h=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,p]=await Promise.all([Vr(h),new Promise((F,Ve)=>{new Yy().load(f,F,void 0,Ve)})]);p.minFilter=un,p.magFilter=un,p.generateMipmaps=!1,p.colorSpace=jn;const g=new J(10,10,5),v=jy(i),_=Qy("balloonBody-25"),m=[],w=[],b=[],S=[],L=Array.from({length:qr},()=>new zt(0,0,-999,.01)),D=Array.from({length:qr},()=>new mt(1118481)),A=F=>new _i({uniforms:{u_matcap:{value:p},u_color:{value:new mt(F.color)},u_bgColor:{value:new mt(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:g},u_selfPositionRadius:{value:new zt(0,0,0,1)},u_selfRotation:{value:new zt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Ve=>Ve.clone())},u_nearColorList:{value:D.map(Ve=>Ve.clone())}},vertexShader:$y,fragmentShader:Zy});for(const F of v){const Ve=A(F),me=new Nn(d,Ve);me.frustumCulled=!1,me.scale.setScalar(F.radius),s.add(me),w.push(me),b.push(Ve),m.push(new eE(F.radius,F.density,F.friction,F.restitution,_,!1)),S.push({i:w.length-1,d2:0})}const I=new _i({uniforms:{u_color0:{value:new mt(i)},u_color1:{value:new mt(1316117)},u_aspect:{value:1}},vertexShader:Ky,fragmentShader:Jy,depthWrite:!1}),T=new Nn(new so(90,60),I);T.position.z=-12,T.renderOrder=-1e3,s.add(T);const M=new Rt(0,0),U=new J,z=new J,W=new J,$=new J,K=new J,q=new J,X=new J,G=new J,ae=new J,N=new J,Se=new nr,Fe=.025,Ze=.1,ne=.12,le=F=>{const Ve=(e||r).getBoundingClientRect();M.x=(F.clientX-Ve.left)/Ve.width*2-1,M.y=-((F.clientY-Ve.top)/Ve.height*2-1)};window.addEventListener("pointermove",le);const he=()=>{n=(n+1)%Ha.length,i=Ha[n],w.forEach((F,Ve)=>{const me=v[Ve];me.isColored&&(F.material.uniforms.u_color.value.set(i),me.color=i)}),I.uniforms.u_color0.value.set(i),m.forEach(F=>F.applyImpulse())},fe=()=>he();r.addEventListener("click",fe),e==null||e.addEventListener("click",fe);const Re=()=>{const F=e||r.parentElement,Ve=F.clientWidth,me=F.clientHeight,k=Ve/Math.max(me,1);o.fov=td(k,2.2,2/3,18,30),o.aspect=k,o.updateProjectionMatrix(),a.setSize(Ve,me,!1),I.uniforms.u_aspect.value=k};Re(),window.addEventListener("resize",Re);let Be=0,qe=performance.now();const je=performance.now(),Xe=()=>{const Ve=(e||r).getBoundingClientRect();l=Ve.bottom>0&&Ve.top<window.innerHeight};window.addEventListener("scroll",Xe,{passive:!0}),Xe();const ze=F=>{if(Be=requestAnimationFrame(ze),!l){qe=F;return}let Ve=Math.min(.05,(F-qe)/1e3);qe=F;const me=t?1:2;Ve/=me;const k=(F-je)/1e3,ue=td(k,.3,2,25,17.5);o.position.z=ue;for(let Le=0;Le<me;Le++){const be=new J(M.x,M.y,.5).unproject(o);be.sub(o.position).normalize();const C=(0-o.position.z)/be.z;U.copy(o.position).addScaledVector(be,C),W.copy(U).sub(z).multiplyScalar(ne/Math.max(Ve,.001)),$.copy(U).sub(o.position);const y=$.lengthSq()||1;z.copy(U);for(let V=0;V<m.length;V++){const j=m[V];j.updateGravity(Ve),q.copy(j.velocity),X.copy(j.position);for(let pe=V+1;pe<m.length;pe++){const _e=m[pe];ae.copy(_e.velocity),N.copy(_e.position),K.copy(X).sub(N);const Ke=K.length(),xe=j.radius+_e.radius;if(Ke<xe&&Ke>1e-6){const Me=Math.sqrt(j.friction*_e.friction);j.frictionTot+=Me,_e.frictionTot+=Me,K.normalize(),K.multiplyScalar(.5*(Ke-xe)),X.sub(K),N.add(K),K.normalize();const Ue=q.dot(K),Ne=ae.dot(K),Pe=j.mass,$e=_e.mass,ke=(Pe*Ue+$e*Ne-$e*(Ue-Ne)*j.restitution)/(Pe+$e),Qe=(Pe*Ue+$e*Ne-Pe*(Ne-Ue)*_e.restitution)/(Pe+$e);q.addScaledVector(K,(ke-Ue)/(1+Me)),ae.addScaledVector(K,(Qe-Ne)/(1+Me)),_e.position.copy(N),_e.velocity.copy(ae)}}G.copy(X).sub(o.position);let se=G.dot($)/y;se=G.sub(ae.copy($).multiplyScalar(se)).length()-j.radius-Fe,se<0&&(G.copy(X).sub(o.position).cross($).normalize(),ae.copy($).cross(G).normalize(),X.sub(ae.multiplyScalar(Ze*se)),ae.multiplyScalar(-ne/Math.max(Ve,.001)),q.add(ae),q.add(W));let oe=X.length();if(oe>0){G.set(1,1,1).normalize();let pe=1-Math.abs(G.dot(ae.copy(X).normalize()));pe*=Ve*Math.min(1,Math.max(0,oe/2))*.5,pe*=V%2*2-1,Se.setFromAxisAngle(G,pe),ae.copy(X).applyQuaternion(Se).sub(G.copy(X)),q.add(ae)}G.crossVectors(X,q);let Te=G.length();Te/=j.inertia,Te>0&&(G.normalize(),Se.setFromAxisAngle(G,Te*Ve),j.quaternion.premultiply(Se)),j.position.copy(X),j.velocity.copy(q),j.update(Ve),["x","y","z"].forEach(pe=>{const _e=pe==="z"?5.5:7.5;j.position[pe]>_e&&(j.position[pe]=_e,j.velocity[pe]*=-.55),j.position[pe]<-_e&&(j.position[pe]=-_e,j.velocity[pe]*=-.55)})}}for(let Le=0;Le<w.length;Le++){const be=w[Le],C=m[Le];be.position.copy(C.position),be.quaternion.copy(C.quaternion);const y=b[Le].uniforms;y.u_selfPositionRadius.value.set(C.position.x,C.position.y,C.position.z,C.radius),y.u_selfRotation.value.set(C.quaternion.x,C.quaternion.y,C.quaternion.z,C.quaternion.w),y.u_bgColor.value.copy(I.uniforms.u_color1.value)}for(let Le=0;Le<w.length;Le++){for(let y=0;y<w.length;y++)S[y].i=y,S[y].d2=Le===y?0:m[Le].position.distanceToSquared(m[y].position);S.sort((y,V)=>y.d2-V.d2);const be=b[Le].uniforms.u_nearPositionRadiusList.value,C=b[Le].uniforms.u_nearColorList.value;for(let y=0;y<qr;y++){const V=S[y+1]?S[y+1].i:S[0].i,j=m[V];be[y].set(j.position.x,j.position.y,j.position.z,j.radius),C[y].copy(b[V].uniforms.u_color.value)}}o.position.x+=(M.x*.9-o.position.x)*.04,o.position.y+=(M.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Be=requestAnimationFrame(ze),{cycleColor:he,destroy(){cancelAnimationFrame(Be),window.removeEventListener("pointermove",le),window.removeEventListener("resize",Re),window.removeEventListener("scroll",Xe),r.removeEventListener("click",fe),e==null||e.removeEventListener("click",fe),b.forEach(F=>F.dispose()),I.dispose(),a.dispose()}}}const nd=53,Va=16,id=["helmet","helmet_glass","glove_shoes","wearpack"];function sn(r,e,t,n,i){const s=Math.max(0,Math.min(1,(r-e)/(t-e||1)));return n+(i-n)*s}function rd(r){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=r})}async function nE(r,e){const[t,n]=await Promise.all([rd(r),rd(e)]),i=document.createElement("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0,i.width,i.height);const o=s.getImageData(0,0,i.width,i.height);s.clearRect(0,0,i.width,i.height),s.drawImage(t,0,0,i.width,i.height);const a=s.getImageData(0,0,i.width,i.height);for(let c=0;c<a.data.length;c+=4)a.data[c+3]=o.data[c];s.putImageData(a,0,0);const l=new Ty(i);return l.colorSpace=jn,l.flipY=!1,l.needsUpdate=!0,l}function sd(r,e,t){const n=new fm(r,e,t,ni,ti);return n.magFilter=Pn,n.minFilter=Pn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}const iE=`
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
`,rE=`
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
`,sE=`
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
`,oE=`
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
`,aE=`
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
`;async function lE(r,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,i="/zyrax-studio/",s=new hm;s.background=new mt(15790586);const o=new Zn(45,1,.1,400);o.position.set(0,0,28);const a=new um({canvas:r,antialias:!n,alpha:!1,powerPreference:"high-performance"});a.setClearColor(15790586,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),a.outputColorSpace=An;const[l,c,h,f,d,p,g,v,..._]=await Promise.all([Vr(`${i}assets/models/tunnels/astronaut_animations.buf`),Vr(`${i}assets/models/tunnels/astronaut_in_animation.buf`),Vr(`${i}assets/models/tunnels/astronaut_out_animation.buf`),new za().loadAsync(`${i}assets/textures/tunnels/white_matcap.jpg`),new za().loadAsync(`${i}assets/textures/tunnels/earth.webp`),new za().loadAsync(`${i}assets/textures/tunnels/white_block.webp`),Vr(`${i}assets/models/tunnels/tunnel_block_base.buf`),Vr(`${i}assets/models/tunnels/tunnel_block_wall.buf`),...id.map(me=>Vr(`${i}assets/models/tunnels/astronaut_${me}.buf`))]);f.colorSpace=jn,d.colorSpace=An,p.colorSpace=An,p.wrapS=p.wrapT=_l;const m=l.attributes.position.array,w=l.attributes.orient.array,b=m.length/3,S=b/nd,L=Math.ceil(Math.sqrt(b)),D=Math.ceil(b/L),A=L*D,I=new Float32Array(A*4),T=new Float32Array(A*4);for(let me=0,k=0,ue=0;me<b;me++,k+=3,ue+=4)I[ue]=m[k],I[ue+1]=m[k+1],I[ue+2]=m[k+2],I[ue+3]=1,T[ue]=w[ue],T[ue+1]=w[ue+1],T[ue+2]=w[ue+2],T[ue+3]=w[ue+3];const M=sd(I,L,D),U=sd(T,L,D),z=new _o(new Float32Array([0,0,18]),3);z.setUsage(va);const W=new _o(new Float32Array([0,0,0,1]),4);W.setUsage(va);const $=new _o(new Float32Array([0,1,0]),3);$.setUsage(va);const K=new _o(new Float32Array([90,91,0]),3);K.setUsage(va);const q={u_animationPositionTexture:{value:M},u_animationOrientTexture:{value:U},u_animationTextureSize:{value:new Rt(L,D)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:f},u_envTexture:{value:d},u_ambientColor:{value:new mt("#566d80")},u_bgColor:{value:new mt("#f0f1fa")},u_sunPosition:{value:new J(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0}},X={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async me=>{const[k,ue]=await Promise.all([nE(`${i}assets/textures/tunnels/astronaut/astronaut_${me}_arm.webp`,`${i}assets/textures/tunnels/astronaut/astronaut_${me}_base.webp`),new za().loadAsync(`${i}assets/textures/tunnels/astronaut/astronaut_${me}_nor.webp`)]);ue.colorSpace=jn,ue.flipY=!1,X[me]={armb:k,nor:ue}})),X.helmet_glass=X.helmet;const G=new Us;s.add(G),id.forEach((me,k)=>{const ue=_[k],Le=new ed;for(const se in ue.attributes)Le.setAttribute(se,ue.attributes[se]);ue.index&&Le.setIndex(ue.index),Le.instanceCount=1,Le.setAttribute("instancePos",z),Le.setAttribute("instanceOrient",W),Le.setAttribute("instanceAnimationFrameFromToBlend1",$),Le.setAttribute("instanceAnimationFrameFromToBlend2",K);const be=me==="helmet_glass"||me==="card"?"helmet":me,C=me==="helmet_glass",y={...q,u_armbTexture:{value:X[be].armb},u_norTexture:{value:X[be].nor}},V=new _i({uniforms:y,vertexShader:iE,fragmentShader:C?sE:rE,transparent:C,side:Ri,defines:{BONE_COUNT:nd}}),j=new Nn(Le,V);j.frustumCulled=!1,G.add(j)});const ae=new Us;s.add(ae);const N=(me,k)=>{const ue=new ed;for(const y in me.attributes)ue.setAttribute(y,me.attributes[y]);me.index&&ue.setIndex(me.index);const Le=new Float32Array(Va);for(let y=0;y<Va;y++)Le[y]=y;ue.setAttribute("a_instanceId",new _o(Le,1)),ue.instanceCount=Va;const be=new _i({uniforms:{u_texture:{value:p},u_ratio:{value:0},u_ratioInverse:{value:1}},vertexShader:oE,fragmentShader:aE,transparent:!0,defines:{BLOCK_COUNT:Va,...k?{IS_WALL:1}:{}}}),C=new Nn(ue,be);return C.frustumCulled=!1,ae.add(C),be},Se=N(g,!1),Fe=N(v,!0),Ze=new Nn(new so(80,80),new dh({color:15790586}));Ze.position.z=-40,s.add(Ze),(t?Array.from(t.querySelectorAll(".home-goal-tunnel-title-line")):[]).forEach(me=>{const k=me.textContent.trim().split(/\s+/);me.innerHTML=k.map(ue=>`<span class="goal-word">${ue}</span>`).join(" ")});let le=0,he=0,fe=0,Re=0,Be=performance.now(),qe=!1;const je=()=>{const me=r.parentElement||e,k=me.clientWidth||window.innerWidth,ue=me.clientHeight||window.innerHeight;o.aspect=k/Math.max(ue,1),o.updateProjectionMatrix(),a.setSize(k,ue,!1)};je(),window.addEventListener("resize",je);const Xe=(me,k)=>{const ue=me.attributes.position.array,Le=me.attributes.orient.array,be=ue.length/3,C=Math.max(0,Math.min(be-1.0001,k*(be-1))),y=Math.floor(C),V=Math.min(be-1,y+1),j=C-y,se=new J().fromArray(ue,y*3).lerp(new J().fromArray(ue,V*3),j),oe=new nr().fromArray(Le,y*4).slerp(new nr().fromArray(Le,V*4),j);return{p:se,q:oe}},ze=()=>{if(!e)return;const me=e.getBoundingClientRect(),k=window.innerHeight,ue=me.height-k,Le=Math.max(0,Math.min(1,-me.top/Math.max(ue,1)));le=sn(Le,.12,.72,0,1),he=sn(Le,.05,.25,0,1);const be=sn(Le,.55,.85,0,1);q.u_whiteTunnelRatio.value=le,q.u_showRatio.value=he,q.u_frameOutRatio.value=be,Se.uniforms.u_ratio.value=le,Fe.uniforms.u_ratio.value=le,Se.uniforms.u_ratioInverse.value=1-le,Fe.uniforms.u_ratioInverse.value=1-le;let C;if(le<1)C=Xe(c,sn(le,0,1,0,.79));else{const y=sn(Le,.72,.95,0,1);C=Xe(h,sn(y,0,1,.79,.99)),C.p.y-=(n?0:.4)*y*y}if(z.setXYZ(0,C.p.x,C.p.y,C.p.z),W.setXYZW(0,C.q.x,C.q.y,C.q.z,C.q.w),z.needsUpdate=!0,W.needsUpdate=!0,o.fov=sn(le,0,1,55,28),o.position.set(0,.15,sn(le,0,1,32,14)),o.lookAt(0,0,sn(le,0,1,18,0)),o.updateProjectionMatrix(),t){const y=sn(Le,0,.45,0,1),V=sn(y,.5,1,1,n?4.5:8),j=sn(y,.85,1,1,0)*sn(y,0,.08,0,1),se=sn(y,.35,.65,0,1);t.style.opacity=String(j),t.style.transform=`translate3d(-50%, -50%, 0) scale(${V})`,t.querySelectorAll(".goal-word").forEach((oe,Te,pe)=>{const _e=oe.parentElement,Ke=Array.from(_e.querySelectorAll(".goal-word")),xe=Ke.indexOf(oe),Me=(Ke.length-1)/2,Ue=(xe-Me)*1.2*se;oe.style.transform=`translateX(${Ue}em)`}),t.style.visibility=j<.02?"hidden":"visible"}qe=me.bottom>0&&me.top<k*1.2},F=()=>ze();window.addEventListener("scroll",F,{passive:!0}),ze();const Ve=me=>{Re=requestAnimationFrame(Ve);const k=Math.min(.05,(me-Be)/1e3);if(Be=me,!qe)return;const ue=le;let Le=sn(he,0,1,0,.75),be=0,C=89;ue>=.5&&(Le=sn(ue,.9,1,0,1),be=140,C=Math.min(S-1,287)),fe+=k*Le;const y=C-be+1,V=fe*60%y,j=Math.floor(V)+be,se=(Math.floor(V)+1)%y+be,oe=V-Math.floor(V);$.setXYZ(0,j,se,oe),$.needsUpdate=!0;const Te=sn(ue+he,.9,2,90,139),pe=Math.floor(Te),_e=Math.ceil(Te),Ke=Te-pe;K.setXYZ(0,pe,_e,Ke),K.needsUpdate=!0,q.u_loopLinearBlend.value=sn(ue,.45,.85,0,.65),a.render(s,o)};return Re=requestAnimationFrame(Ve),requestAnimationFrame(()=>{je(),ze(),a.render(s,o)}),{resize:je,updateScroll:ze,destroy(){cancelAnimationFrame(Re),window.removeEventListener("resize",je),window.removeEventListener("scroll",F),a.dispose()}}}ns.registerPlugin(ut);const cE=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),xm=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};xm();window.addEventListener("resize",xm);const Al=new Lm({duration:cE?.95:1.2,smoothWheel:!0,syncTouch:!1});Al.on("scroll",ut.update);ns.ticker.add(r=>Al.raf(r*1e3));ns.ticker.lagSmoothing(0);const od=document.getElementById("project-list");od&&(od.innerHTML=gg.map(r=>`
    <a class="project-item" href="${r.url}" target="_blank" rel="noreferrer" data-reveal>
      <div class="project-item-main">
        <div class="project-item-image" style="background:${r.hue}"><span>${r.title}</span></div>
      </div>
      <div class="project-item-line-1">${r.tags}</div>
      <div class="project-item-line-2">${r.title}</div>
    </a>`).join(""));const uE=document.getElementById("hero-canvas"),hE=document.getElementById("home-hero-visual-container"),As=document.getElementById("home-hero");tE(uE,hE).then(()=>{As==null||As.classList.add("is-in")}).catch(r=>{console.error("Balloons hero failed",r),As==null||As.classList.add("is-in")});const fE=document.getElementById("home-goal"),dE=document.getElementById("goal-tunnel-canvas"),pE=document.getElementById("home-goal-tunnel-title");let rl=null;lE(dE,fE,pE).then(r=>{rl=r}).catch(r=>{console.error("Goal tunnel failed",r)});Al.on("scroll",()=>{rl==null||rl.updateScroll()});function Sm(r,e="word"){if(!r)return;const n=r.textContent.trim().split(/\s+/);r.textContent="",n.forEach((i,s)=>{const o=document.createElement("span");o.className=e,o.textContent=i,o.style.transitionDelay=`${s*35}ms`,r.appendChild(o),r.appendChild(document.createTextNode(" "))})}Sm(document.getElementById("home-hero-title"));Sm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var r;(r=document.getElementById("home-hero-title"))==null||r.classList.add("is-in")});const mE=document.querySelectorAll(".home-hero-scroll-container-cross");mE.forEach((r,e)=>{r.style.transitionDelay=`${.15+e*.08}s`});document.querySelectorAll("[data-reveal]").forEach((r,e)=>{ut.create({trigger:r,start:"top 88%",onEnter:()=>{r.style.transitionDelay=`${e%4*60}ms`,r.classList.add("is-in")}})});ns.utils.toArray("#home-reel-title, #home-reel-desc, #home-featured-title").forEach(r=>{ns.from(r,{y:48,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})});ns.from(".home-goal-texts-paragraph",{y:40,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:".home-goal-texts-paragraph",start:"top 90%"}});const Mm=document.querySelector("[data-menu]");var ad;(ad=document.querySelector("[data-menu-open]"))==null||ad.addEventListener("click",()=>{Mm.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(r=>{r.addEventListener("click",()=>{Mm.hidden=!0,document.body.style.overflow=""})});var ld;(ld=document.querySelector("[data-reel]"))==null||ld.addEventListener("click",r=>{const e=r.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var cd;(cd=document.querySelector("[data-sound]"))==null||cd.addEventListener("click",r=>{r.currentTarget.classList.toggle("is-on")});var ud;(ud=document.querySelector("#end-bottom"))==null||ud.addEventListener("click",r=>{r.preventDefault(),Al.scrollTo("#footer-section")});
