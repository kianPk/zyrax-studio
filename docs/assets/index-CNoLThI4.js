var c0=Object.defineProperty;var u0=(i,e,t)=>e in i?c0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var qe=(i,e,t)=>u0(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var df="1.3.27";function lp(i,e,t){return Math.max(i,Math.min(e,t))}function h0(i,e,t){return(1-t)*i+t*e}function f0(i,e,t,n){return h0(i,e,1-Math.exp(-t*n))}function d0(i,e){return(i%e+e)%e}var p0=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=lp(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=f0(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function m0(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var _0=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=m0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},cp=class{constructor(){qe(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const g0=100/6,Pr={passive:!1};function pf(i,e){return i===1?g0:i===2?e:1}var v0=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new cp);qe(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});qe(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});qe(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});qe(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=pf(n,this.window.width),o=pf(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pr),this.element.addEventListener("touchstart",this.onTouchStart,Pr),this.element.addEventListener("touchmove",this.onTouchMove,Pr),this.element.addEventListener("touchend",this.onTouchEnd,Pr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Pr),this.element.removeEventListener("touchstart",this.onTouchStart,Pr),this.element.removeEventListener("touchmove",this.onTouchMove,Pr),this.element.removeEventListener("touchend",this.onTouchEnd,Pr)}};const mf=i=>Math.min(1,1.001-2**(-10*i));var x0=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:w=!1,anchors:y=!1,autoToggle:L=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:P=T,stopInertiaOnNavigate:M=!1,respectReducedMotion:S=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new p0);qe(this,"emitter",new cp);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});qe(this,"onPointerDown",i=>{i.button===1&&this.reset()});qe(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,w;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=df,window.lenis||(window.lenis={}),window.lenis.version=df,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=mf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:w,anchors:y,autoToggle:L,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:M,respectReducedMotion:S},this.dimensions=new _0(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new v0(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?y.left:y.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=lp(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=mf:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,o=["auto","overlay","scroll"].includes(C.overflowX),s=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,w,y,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,w=o,y=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,w=s,y=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&w&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?d0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function ur(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function up(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ca={duration:.5,overwrite:!1,delay:0},rh,xn,kt,gi=1e8,It=1/gi,iu=Math.PI*2,S0=iu/4,y0=0,hp=Math.sqrt,w0=Math.cos,M0=Math.sin,fn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},oh=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},qn=function(e){return e!==!1},sh=function(){return typeof window<"u"},Ba=function(e){return Zt(e)||fn(e)},fp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,b0=/random\([^)]+\)/g,T0=/,\s*/g,_f=/(?:-?\.?\d|\.)+/gi,dp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pp=/[+-]=-?[.\d]+/,E0=/[^,'"\[\]\s]+/gi,A0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,zi,ru,ah,ci={},Cl={},mp,_p=function(e){return(Cl=_s(e,ci))&&jn},lh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ua=function(e,t){return!t&&console.warn(e)},gp=function(e,t){return e&&(ci[e]=t)&&Cl&&(Cl[e]=t)||ci},ha=function(){return 0},R0={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},C0={suppressEvents:!0},ch={},Xr=[],ou={},vp,ti={},ac={},gf=30,xl=[],uh="",hh=function(e){var t=e[0],n,r;if(Yi(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=xl.length;r--&&!xl[r].targetTest(t););n=xl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new kp(e[r],n)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||hh(vi(e))[0]._gsap},xp=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():oh(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},P0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pl=function(){var e=Xr.length,t=Xr.slice(0),n,r;for(ou={},Xr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},fh=function(e){return!!(e._initted||e._startAt||e.add)},Sp=function(e,t,n,r){Xr.length&&!xn&&Pl(),e.render(t,n,!!(xn&&t<0&&fh(e))),Xr.length&&!xn&&Pl()},yp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(E0).length<2?t:fn(e)?e.trim():e},wp=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},D0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},_s=function(e,t){for(var n in t)e[n]=t[n];return e},vf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Dl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ea=function(e){var t=e.parent||Wt,n=e.keyframes?D0(Dn(e.keyframes)):ui;if(qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},L0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Mp=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Wl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},$r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},I0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},su=function(e,t,n,r){return e._startAt&&(xn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},U0=function i(e){return!e||e._ts&&i(e.parent)},xf=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},Ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xl=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},ql=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xl(e),n._dirty||Ao(n,e)),e},bp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ll(e.rawTime(),t),(!t._dur||Sa(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),Ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Hi=function(e,t,n,r){return t.parent&&$r(t),t._start=Gt((vr(n)?n:n||e!==Wt?pi(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mp(e,t,"_first","_last",e._sort?"_start":0),au(t)||(e._recent=t),r||bp(e,t),e._ts<0&&ql(e,e._tTime),e},Tp=function(e,t){return(ci.ScrollTrigger||lh("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Ep=function(e,t,n,r,o){if(ph(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vp!==ni.frame)return Xr.push(e),e._lazy=[o,r],1},F0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},au=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},N0=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&F0(e)&&!(!e._initted&&au(e))||(e._ts<0||e._dp._ts<0)&&!au(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Sa(0,e._tDur,t),u=gs(l,a),e._yoyo&&u&1&&(s=1-s),u!==gs(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||xn||r||e._zTime===It||!t&&e._zTime){if(!e._initted&&Ep(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&su(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&$r(e,1),!n&&!xn&&(ri(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},O0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},vs=function(e,t,n,r){var o=e._repeat,s=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Gt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&ql(e,e._tTime=e._tDur*a),e.parent&&Xl(e),n||Ao(e.parent,e),e},Sf=function(e){return e instanceof Wn?Ao(e):vs(e,e._dur)},z0={_start:0,endTime:ha,totalDuration:ha},pi=function i(e,t,n){var r=e.labels,o=e._recent||z0,s=e.duration()>=gi?o.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ta=function(e,t,n){var r=vr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;s.immediateRender=qn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new tn(t[0],s,t[o+1])},Qr=function(e,t){return e||e===0?t(e):t},Sa=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!fn(e)||!(t=A0.exec(e))?"":t[1]},B0=function(e,t,n){return Qr(n,function(r){return Sa(e,t,r)})},lu=[].slice,Ap=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==zi},k0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return fn(r)&&!t||Ap(r,1)?(o=n).push.apply(o,vi(r)):n.push(r)})||n},vi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):fn(e)&&!n&&(ru||!xs())?lu.call((t||ah).querySelectorAll(e),0):Dn(e)?k0(e,n):Ap(e)?lu.call(e,0):e?[e]:[]},cu=function(e){return e=vi(e)[0]||ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?ua("Invalid scope")||ah.createElement("div"):e)}},Rp=function(e){return e.sort(function(){return .5-Math.random()})},Cp=function(e){if(Zt(e))return e;var t=Yi(e)?e:{each:e},n=Ro(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return fn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,w,y,L,C,T,P,M;if(!_){if(M=t.grid==="auto"?0:(t.grid||[1,gi])[1],!M){for(T=-gi;T<(T=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(_=s[g]=[],p=l?Math.min(M,g)*u-.5:r%M,b=M===gi?0:l?g*d/M-.5:r/M|0,T=0,P=gi,C=0;C<g;C++)w=C%M-p,y=b-(C/M|0),_[C]=L=c?Math.abs(c==="y"?y:w):hp(w*w+y*y),L>T&&(T=L),L<P&&(P=L);r==="random"&&Rp(_),_.max=T-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Cn(t.amount||t.each)||0,n=n&&g<0?Q0(n):n}return g=(_[f]-_.min)/_.max||0,Gt(_.b+(n?n(g):g)*_.v)+_.u}},uu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(vr(n)?0:Cn(n))}},Pp=function(e,t){var n=Dn(e),r,o;return!n&&Yi(e)&&(r=n=e.radius||gi,e.values?(e=vi(e.values),(o=!vr(e[0]))&&(r*=r)):e=uu(e.increment)),Qr(t,n?Zt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=gi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||vr(s)?u:u+Cn(s)}:uu(e))},Dp=function(e,t,n,r){return Qr(Dn(e)?!t:n===!0?!!(n=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},H0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},V0=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},G0=function(e,t,n){return Ip(e,t,0,1,n)},Lp=function(e,t,n){return Qr(n,function(r){return e[~~t(r)]})},W0=function i(e,t,n){var r=t-e;return Dn(e)?Lp(e,i(0,e.length),t):Qr(n,function(o){return(r+(o-e)%r)%r+e})},X0=function i(e,t,n){var r=t-e,o=r*2;return Dn(e)?Lp(e,i(0,e.length-1),t):Qr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},fa=function(e){return e.replace(b0,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(T0);return Dp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Ip=function(e,t,n,r,o){var s=t-e,a=r-n;return Qr(o,function(l){return n+((l-e)/s*a||0)})},q0=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=fn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=_s(Dn(e)?[]:{},e));if(!u){for(l in t)dh.call(a,e,l,"get",t[l]);o=function(v){return gh(v,a)||(s?e.p:e)}}}return Qr(n,o)},yf=function(e,t,n){var r=e.labels,o=gi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ri=function(e,t,n){var r=e.vars,o=r[t],s=kt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Xr.length&&Pl(),a&&(kt=a),u=l?o.apply(c,l):o.call(c),kt=s,u},Ks=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&ri(e,"onInterrupt"),e},ss,Up=[],Fp=function(e){if(e)if(e=!e.name&&e.default||e,sh()||e.headless){var t=e.name,n=Zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:ha,render:gh,add:dh,kill:c_,modifier:l_,rawVars:0},s={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(xs(),e!==r){if(ti[t])return;ui(r,ui(Dl(e,o),s)),_s(r.prototype,_s(o,Dl(e,s))),ti[r.prop=t]=r,e.targetTest&&(xl.push(r),ch[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gp(t,r),e.register&&e.register(jn,r,$n)}else Up.push(e)},Lt=255,js={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},lc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},Np=function(e,t,n){var r=e?vr(e)?[e>>16,e>>8&Lt,e&Lt]:0:js.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])r=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Lt,r&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(_f),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=lc(l+1/3,o,s),r[1]=lc(l,o,s),r[2]=lc(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(dp),n&&r.length<4&&(r[3]=1),r}else r=e.match(_f)||js.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Lt,s=r[1]/Lt,a=r[2]/Lt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Op=function(e){var t=[],n=[],r=-1;return e.split(qr).forEach(function(o){var s=o.match(os)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},wf=function(e,t,n){var r="",o=(e+r).match(qr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Np(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Op(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(qr,"1").split(os),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(qr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},qr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Y0=/hsl[a]?\(/,zp=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=Y0.test(t),e[1]=wf(e[1],n),e[0]=wf(e[0],n,Op(e[1])),!0},da,ni=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,w,y,L,C;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,w=L-s,(w>0||b)&&(C=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,s+=w+(w>=o?4:o-w),y=1),b||(l=c(g)),y)for(m=0;m<a.length;m++)a[m](L,f,C,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){mp&&(!ru&&sh()&&(zi=ru=window,ah=zi.document||{},ci.gsap=jn,(zi.gsapVersions||(zi.gsapVersions=[])).push(jn.version),_p(Cl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Up.forEach(Fp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},da=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),da=0,c=ha},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var w=p?function(y,L,C,T){_(y,L,C,T),d.remove(w)}:_;return d.remove(_),a[b?"unshift":"push"](w),xs(),w},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),xs=function(){return!da&&ni.wake()},St={},$0=/^[\d.\-M][\d.\-,\s]/,Z0=/["']/g,K0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Z0,"").trim():+c,r=l.substr(a+1).trim();return t},j0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},J0=function(e){var t=(e+"").split("("),n=St[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[K0(t[1])]:j0(e).split(",").map(yp)):St._CE&&$0.test(e)?St._CE("",e):n},Q0=function(e){return function(t){return 1-e(1-t)}},Ro=function(e,t){return e&&(Zt(e)?e:St[e]||J0(e))||t},Io=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Yn(e,function(a){St[a]=ci[a]=o,St[s=a.toLowerCase()]=n;for(var l in o)St[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=o[l]}),o},Bp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cc=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/iu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*M0((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bp(a);return o=iu/o,l.config=function(c,u){return i(e,c,u)},l},uc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Bp(n);return r.config=function(o){return i(e,o)},r};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Io(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;Io("Elastic",cc("in"),cc("out"),cc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Io("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Io("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Io("Circ",function(i){return-(hp(1-i*i)-1)});Io("Sine",function(i){return i===1?1:-w0(i*S0)+1});Io("Back",uc("in"),uc("out"),uc());St.SteppedEase=St.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-It;return function(a){return((r*Sa(0,s,a)|0)+o)*n}}};ca.ease=St["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return uh+=i+","+i+"Params,"});var kp=function(e,t){this.id=y0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xp,this.set=t?t.getSetter:_h},pa=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vs(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),da||ni.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(xs(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ql(this,n),!o._dp||o.parent||bp(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?gs(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Sa(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),Xl(this),I0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Hi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=C0);var r=xn;return xn=n,fh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Sf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),qn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,qn(r)),this._dur||(this._zTime=-It),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-It)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Zt(n)?n:wp,l=function(){var u=r.then;r.then=null,o&&o(),Zt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ks(this)},i})();ui(pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Wn=(function(i){up(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=qn(n.sortChildren),Wt&&Hi(n.parent||Wt,ur(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Tp(ur(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return ta(0,arguments,this),this},t.from=function(r,o,s){return ta(1,arguments,this),this},t.fromTo=function(r,o,s,a){return ta(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,ea(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new tn(r,o,pi(this,s),1),this},t.call=function(r,o,s){return Hi(this,tn.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new tn(r,s,pi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,ea(s).immediateRender=qn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,ea(a).immediateRender=qn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Gt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,w,y,L,C,T;if(this!==Wt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,w=this._ts,p=!w,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Gt(u%_),u===l?(g=this._repeat,f=c):(L=Gt(u/_),g=~~L,g&&g===L&&(f=c,g--),f>c&&(f=c)),L=gs(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),C&&g&1&&(f=c-f,T=1),g!==L&&!this._lock){var P=C&&L&1,M=P===(C&&g&1);if(g<L&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Gt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=O0(this,Gt(a),Gt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!L&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-It);break}}m=v}else{m=this._last;for(var S=r<0?r:f;m;){if(v=m._prev,(m._act||S<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,o,s||xn&&fh(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=S?-It:It);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-It)._zTime=f>=a?1:-1,this._ts))return this._start=y,Xl(this),this.render(r,o,s);this._onUpdate&&!o&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$r(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(vr(o)||(o=pi(this,o,r)),!(r instanceof pa)){if(Dn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(fn(r))return this.addLabel(r,o);if(Zt(r))r=tn.delayedCall(0,r);else return this}return this!==r?Hi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return fn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&Wl(this,r),r===this._recent&&(this._recent=this._last),Ao(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=pi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=tn.delayedCall(0,o||ha,s);return a.data="isPause",this._hasPause=1,Hi(this,a,pi(this,r))},t.removePause=function(r){var o=this._first;for(r=pi(this,r);o;)o._start===r&&o.data==="isPause"&&$r(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Vr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=vi(r),l=this._first,c=vr(o),u;l;)l instanceof tn?P0(l._targets,a)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=pi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=tn.to(s,ui({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||It,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&vs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,ui({startAt:{time:pi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),yf(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),yf(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Gt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return Ao(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ao(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=gi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Hi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Gt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;vs(s,s===Wt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Wt._ts&&(Sp(Wt,Ll(r,Wt)),vp=ni.frame),ni.frame>=gf){gf+=si.autoSleep||120;var o=Wt._first;if((!o||!o._ts)&&si.autoSleep&&ni._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ni.sleep()}}},e})(pa);ui(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var e_=function(e,t,n,r,o,s,a){var l=new $n(this._pt,e,t,0,1,qp,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=fa(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(sc)||[];d=sc.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?cs(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=sc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(pp.test(r)||p)&&(l.e=0),this._pt=l,l},dh=function(e,t,n,r,o,s,a,l,c,u){Zt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Zt(d)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Zt(d)?c?o_:Wp:mh,v;if(fn(r)&&(~r.indexOf("random(")&&(r=fa(r)),r.charAt(1)==="="&&(v=cs(f,r)+(Cn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||hu)return!isNaN(f*r)&&r!==""?(v=new $n(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?a_:Xp,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&lh(t,r),e_.call(this,e,t,f,r,m,l||si.stringFilter,c))},t_=function(e,t,n,r,o){if(Zt(e)&&(e=na(e,o,t,n,r)),!Yi(e)||e.style&&e.nodeType||Dn(e)||fp(e))return fn(e)?na(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=na(e[a],o,t,n,r);return s},Hp=function(e,t,n,r,o,s){var a,l,c,u;if(ti[e]&&(a=new ti[e]).init(o,a.rawVars?t[e]:t_(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new $n(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==ss))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vr,hu,ph=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,w=e._overwrite==="auto"&&!rh,y=e.timeline,L=r.easeReverse||d,C,T,P,M,S,R,F,N,k,H,V,W,B;if(y&&(!f||!o)&&(o="none"),e._ease=Ro(o,ca.ease),e._rEase=L&&(Ro(L)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(N=_[0]?Eo(_[0]).harness:0,W=N&&r[N.prop],C=Dl(r,ch),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?vl:R0),g._lazy=0),s){if($r(e._startAt=tn.set(_,ui({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!m)&&e._startAt.revert(vl),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=ui({overwrite:!1,data:"isFromStart",lazy:a&&!g&&qn(l),immediateRender:a,stagger:0,parent:p},C),W&&(P[N.prop]=W),$r(e._startAt=tn.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&qn(l)||l&&!v,T=0;T<_.length;T++){if(S=_[T],F=S._gsap||hh(_)[T]._gsap,e._ptLookup[T]=H={},ou[F.id]&&Xr.length&&Pl(),V=b===_?T:b.indexOf(S),N&&(k=new N).init(S,W||C,e,V,b)!==!1&&(e._pt=M=new $n(e._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(se){H[se]=M}),k.priority&&(R=1)),!N||W)for(P in C)ti[P]&&(k=Hp(P,C,e,V,S,b))?k.priority&&(R=1):H[P]=M=dh.call(e,S,P,"get",C[P],V,b,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),w&&e._pt&&(Vr=e,Wt.killTweensOf(S,H,e.globalTime(t)),B=!e.parent,Vr=0),e._pt&&l&&(ou[F.id]=1)}R&&Yp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&y.render(gi,!0,!0)},n_=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return hu=1,e.vars[t]="+=0",ph(e,a),hu=0,l?ua(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Kt(n)+Cn(d.e)),d.b&&(d.b=u.s+Cn(d.b))},i_=function(e,t){var n=e[0]?Eo(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=_s({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},r_=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},na=function(e,t,n,r,o){return Zt(e)?e.call(t,n,r,o):fn(e)&&~e.indexOf("random(")?fa(e):e},Vp=uh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Gp={};Yn(Vp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Gp[i]=1});var tn=(function(i){up(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:ea(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Wt,b=(Dn(n)||fp(n)?vr(n[0]):"length"in r)?[n]:vi(n),w,y,L,C,T,P,M,S;if(a._targets=b.length?hh(b):ua("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||Ba(c)||Ba(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(w=a.timeline=new Wn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),w.kill(),w.parent=w._dp=ur(a),w._start=0,f||Ba(c)||Ba(u)){if(C=b.length,M=f&&Cp(f),Yi(f))for(T in f)~Vp.indexOf(T)&&(S||(S={}),S[T]=f[T]);for(y=0;y<C;y++)L=Dl(r,Gp),L.stagger=0,R&&(L.easeReverse=R),S&&_s(L,S),P=b[y],L.duration=+na(c,ur(a),y,P,b),L.delay=(+na(u,ur(a),y,P,b)||0)-a._delay,!f&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),w.to(P,L,M?M(y,P,b):0),w._ease=St.none;w.duration()?c=u=0:a.timeline=0}else if(v){ea(ui(w.vars.defaults,{ease:"none"})),w._ease=Ro(v.ease||r.ease||"none");var F=0,N,k,H;if(Dn(v))v.forEach(function(V){return w.to(b,V,">")}),w.duration();else{L={};for(T in v)T==="ease"||T==="easeEach"||r_(T,v[T],L,v.easeEach);for(T in L)for(N=L[T].sort(function(V,W){return V.t-W.t}),F=0,y=0;y<N.length;y++)k=N[y],H={ease:k.e,duration:(k.t-(y?N[y-1].t:0))/100*c},H[T]=k.v,w.to(b,H,F),F+=H.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return m===!0&&!rh&&(Vr=ur(a),Wt.killTweensOf(b),Vr=0),Hi(p,ur(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Gt(p._time)&&qn(d)&&U0(ur(a))&&p.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),_&&Tp(ur(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-It&&!u?l:r<It?0:r,f,m,v,g,_,p,b,w;if(!c)N0(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Gt(d%g),d===l?(v=this._repeat,f=c):(_=Gt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=gs(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Gt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Ep(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var y=f<a;if(y!==this._inv){var L=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(y?-1:1)/L:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(ri(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;w&&w.render(r<0?r:w._dur*w._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&su(this,r,o,s),ri(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&su(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&$r(this,1),!o&&!(u&&!a)&&(d||a||p)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){da||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ph(this,c),u=this._ease(c/this._dur),n_(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(ql(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Ks(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Vr&&Vr.vars.overwrite!==!0)._first||Ks(this),this.parent&&s!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?vi(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&L0(a,l))return o==="all"&&(this._pt=0),Ks(this);for(d=this._op=this._op||[],o!=="all"&&(fn(o)&&(g={},Yn(o,function(b){return g[b]=1}),o=g),o=i_(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Wl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Ks(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return ta(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return ta(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Wt.killTweensOf(r,o,s)},e})(pa);ui(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var e=new Wn,t=lu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var mh=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},o_=function(e,t,n,r){return e[t](r.fp,n)},s_=function(e,t,n){return e.setAttribute(t,n)},_h=function(e,t){return Zt(e[t])?Wp:oh(e[t])&&e.setAttribute?s_:mh},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},a_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},gh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},l_=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},c_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},u_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Yp=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},$n=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||Xp,this.d=l||this,this.set=c||mh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=u_,this.m=n,this.mt=o,this.tween=r},i})();Yn(uh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return ch[i]=1});ci.TweenMax=ci.TweenLite=tn;ci.TimelineLite=ci.TimelineMax=Wn;Wt=new Wn({sortChildren:!1,defaults:ca,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=zp;var Co=[],Sl={},h_=[],Mf=0,f_=0,hc=function(e){return(Sl[e]||h_).map(function(t){return t()})},fu=function(){var e=Date.now(),t=[];e-Mf>2&&(hc("matchMediaInit"),Co.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=zi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),hc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Mf=e,hc("matchMedia"))},$p=(function(){function i(t,n){this.selector=n&&cu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=f_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Zt(n)&&(o=r,r=n,n=Zt);var s=this,a=function(){var c=kt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=cu(o)),kt=s,d=r.apply(s,arguments),Zt(d)&&s._r.push(d),kt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Zt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=kt;kt=null,n(this),kt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=Co.length;s--;)Co[s].id===this.id&&Co.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),d_=(function(){function i(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Yi(n)||(n={matches:n});var s=new $p(0,o||this.scope),a=s.conditions={},l,c,u;kt&&!s.selector&&(s.selector=kt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(Co.indexOf(s)<0&&Co.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(fu):l.addEventListener("change",fu)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Il={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Fp(r)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,n,r){fn(e)&&(e=vi(e)[0]);var o=Eo(e||{}).get,s=n?wp:yp;return n==="native"&&(n=""),e&&(t?s((ti[t]&&ti[t].get||o)(e,t,n,r)):function(a,l,c){return s((ti[a]&&ti[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=ti[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;ss._pt=0,d.init(e,n?u+n:u,ss,0,[e]),d.render(1,d),ss._pt&&gh(1,ss)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=jn.to(e,ui((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ro(e.ease,ca.ease)),vf(ca,e||{})},config:function(e){return vf(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ti[a]&&!ci[a]&&ua(t+" effect requires "+a+" plugin.")}),ac[t]=function(a,l,c){return n(vi(a),ui(l||{},o),c)},s&&(Wn.prototype[t]=function(a,l,c){return this.add(ac[t](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=Ro(t)},parseEase:function(e,t){return arguments.length?Ro(e,t):St},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wn(e),r,o;for(n.smoothChildTiming=qn(e.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,r=Wt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Hi(n,r,r._start-r._delay),r=o;return Hi(Wt,n,0),n},context:function(e,t){return e?new $p(e,t):kt},matchMedia:function(e){return new d_(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||fu()},addEventListener:function(e,t){var n=Sl[e]||(Sl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Sl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:W0,wrapYoyo:X0,distribute:Cp,random:Dp,snap:Pp,normalize:G0,getUnit:Cn,clamp:B0,splitColor:Np,toArray:vi,selector:cu,mapRange:Ip,pipe:H0,unitize:V0,interpolate:q0,shuffle:Rp},install:_p,effects:ac,ticker:ni,updateRoot:Wn.updateRoot,plugins:ti,globalTimeline:Wt,core:{PropTween:$n,globals:gp,Tween:tn,Timeline:Wn,Animation:pa,getCache:Eo,_removeLinkedListItem:Wl,reverting:function(){return xn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return rh=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Il[i]=tn[i]});ni.add(Wn.updateRoot);ss=Il.to({},{duration:0});var p_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},m_=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=p_(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},fc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(fn(o)&&(l={},Yn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}m_(a,o)}}}},jn=Il.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fc("roundProps",uu),fc("modifiers"),fc("snap",Pp))||Il;tn.version=Wn.version=jn.version="3.15.0";mp=1;sh()&&xs();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bf,Gr,us,vh,bo,Tf,xh,__=function(){return typeof window<"u"},xr={},vo=180/Math.PI,hs=Math.PI/180,Vo=Math.atan2,Ef=1e8,Sh=/([A-Z])/g,g_=/(left|right|width|margin|padding|x)/i,v_=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},x_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},M_=function(e,t,n){return e.style[t]=n},b_=function(e,t,n){return e.style.setProperty(t,n)},T_=function(e,t,n){return e._gsap[t]=n},E_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},A_=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},R_=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},qt="transform",Zn=qt+"Origin",C_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in xr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(r,a)}):this.tfm[e]=s.x?s[e]:fr(r,e),e===Zn&&(this.tfm.zOrigin=s.zOrigin);else return Vi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(qt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=qt}(o||t)&&this.props.push(e,t,o[e])},jp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},P_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Sh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=xh(),(!o||!o.isStart)&&!n[qt]&&(jp(n),r.zOrigin&&n[Zn]&&(n[Zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jp=function(e,t){var n={target:e,props:[],revert:P_,save:C_};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Qp,pu=function(e,t){var n=Gr.createElementNS?Gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gr.createElement(e);return n&&n.style?n:Gr.createElement(e)},oi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Sh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ss(t)||t,1)||""},Af="O,Moz,ms,Ms,Webkit".split(","),Ss=function(e,t,n){var r=t||bo,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Af[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Af[s]:"")+e},mu=function(){__()&&window.document&&(bf=window,Gr=bf.document,us=Gr.documentElement,bo=pu("div")||{style:{}},pu("div"),qt=Ss(qt),Zn=qt+"Origin",bo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qp=!!Ss("perspective"),xh=jn.core.reverting,vh=1)},Rf=function(e){var t=e.ownerSVGElement,n=pu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),us.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),us.removeChild(n),o},Cf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},em=function(e){var t,n;try{t=e.getBBox()}catch{t=Rf(e),n=1}return t&&(t.width||t.height)||n||(t=Rf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Cf(e,["x","cx","x1"])||0,y:+Cf(e,["y","cy","y1"])||0,width:0,height:0}:t},tm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&em(e))},Zr=function(e,t){if(t){var n=e.style,r;t in xr&&t!==Zn&&(t=qt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Sh,"-$1").toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,r,o,s){var a=new $n(e._pt,t,n,0,1,s?Kp:Zp);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},Pf={deg:1,rad:1,turn:1},D_={grid:1,flex:1},Kr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=bo.style,l=g_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||Pf[r]||Pf[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&tm(e),(m||s==="%")&&(xr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Kt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Gr||!g.appendChild)&&(g=Gr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===ni.time&&!_.uncache)return Kt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:Zr(e,t)}else(m||s==="%")&&!D_[oi(g,"display")]&&(a.position=oi(e,"position")),g===e&&(a.position="static"),g.appendChild(bo),v=bo[u],g.removeChild(bo),a.position="absolute";return l&&m&&(_=Eo(g),_.time=ni.time,_.width=g[u]),Kt(f?v*o/d:v&&o?d/v*o:0)},fr=function(e,t,n,r){var o;return vh||mu(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),xr[t]&&t!=="transform"?(o=_a(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Fl(oi(e,Zn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=Ul[t]&&Ul[t](e,t,n)||oi(e,t)||xp(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Kr(e,t,o,n)+n:o},L_=function(e,t,n,r){if(!n||n==="none"){var o=Ss(t,e,1),s=o&&oi(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,qp),l=0,c=0,u,d,f,m,v,g,_,p,b,w,y,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=oi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=oi(e,t)||r,g?e.style[t]=g:Zr(e,t)),u=[n,r],zp(u),n=u[0],r=u[1],f=n.match(os)||[],L=r.match(os)||[],L.length){for(;d=os.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,y=g.substr((m+"").length),_.charAt(1)==="="&&(_=cs(m,_)+y),p=parseFloat(_),w=_.substr((p+"").length),l=os.lastIndex-w.length,w||(w=w||si.units[t]||y,l===r.length&&(r+=w,a.e+=w)),y!==w&&(m=Kr(e,t,g,w)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Kp:Zp;return pp.test(r)&&(a.e=0),this._pt=a,a},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Df[n]||n,t[1]=Df[r]||r,t.join(" ")},U_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],xr[a]&&(l=1,a=a==="transformOrigin"?Zn:qt),Zr(n,a);l&&(Zr(n,qt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",_a(n,1),s.uncache=1,jp(r)))}},Ul={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new $n(e._pt,t,n,0,0,U_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ma=[1,0,0,1,0,0],nm={},im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lf=function(e){var t=oi(e,qt);return im(t)?ma:t.substr(7).match(dp).map(Kt)},yh=function(e,t){var n=e._gsap||Eo(e),r=e.style,o=Lf(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?ma:o):(o===ma&&!e.offsetParent&&e!==us&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,us.appendChild(e)),o=Lf(e),l?r.display=l:Zr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):us.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},_u=function(e,t,n,r,o,s){var a=e._gsap,l=o||yh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],w=t.split(" "),y=parseFloat(w[0])||0,L=parseFloat(w[1])||0,C,T,P,M;n?l!==ma&&(T=m*_-v*g)&&(P=y*(_/T)+L*(-g/T)+(g*b-_*p)/T,M=y*(-v/T)+L*(m/T)-(m*b-v*p)/T,y=P,L=M):(C=em(e),y=C.x+(~w[0].indexOf("%")?y/100*C.width:y),L=C.y+(~(w[1]||w[0]).indexOf("%")?L/100*C.height:L)),r||r!==!1&&a.smooth?(p=y-c,b=L-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Zn]="0px 0px",s&&(Wr(s,a,"xOrigin",c,y),Wr(s,a,"yOrigin",u,L),Wr(s,a,"xOffset",d,a.xOffset),Wr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+L)},_a=function(e,t){var n=e._gsap||new kp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=oi(e,Zn)||"0",u,d,f,m,v,g,_,p,b,w,y,L,C,T,P,M,S,R,F,N,k,H,V,W,B,se,X,ge,_e,Pe,J,ee;return u=d=f=g=_=p=b=w=y=0,m=v=1,n.svg=!!(e.getCTM&&tm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),r.scale=r.rotate=r.translate="none"),T=yh(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),_u(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),L=n.xOrigin||0,C=n.yOrigin||0,T!==ma&&(R=T[0],F=T[1],N=T[2],k=T[3],u=H=T[4],d=V=T[5],T.length===6?(m=Math.sqrt(R*R+F*F),v=Math.sqrt(k*k+N*N),g=R||F?Vo(F,R)*vo:0,b=N||k?Vo(N,k)*vo+g:0,b&&(v*=Math.abs(Math.cos(b*hs))),n.svg&&(u-=L-(L*R+C*N),d-=C-(L*F+C*k))):(ee=T[6],Pe=T[7],X=T[8],ge=T[9],_e=T[10],J=T[11],u=T[12],d=T[13],f=T[14],P=Vo(ee,_e),_=P*vo,P&&(M=Math.cos(-P),S=Math.sin(-P),W=H*M+X*S,B=V*M+ge*S,se=ee*M+_e*S,X=H*-S+X*M,ge=V*-S+ge*M,_e=ee*-S+_e*M,J=Pe*-S+J*M,H=W,V=B,ee=se),P=Vo(-N,_e),p=P*vo,P&&(M=Math.cos(-P),S=Math.sin(-P),W=R*M-X*S,B=F*M-ge*S,se=N*M-_e*S,J=k*S+J*M,R=W,F=B,N=se),P=Vo(F,R),g=P*vo,P&&(M=Math.cos(P),S=Math.sin(P),W=R*M+F*S,B=H*M+V*S,F=F*M-R*S,V=V*M-H*S,R=W,H=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Kt(Math.sqrt(R*R+F*F+N*N)),v=Kt(Math.sqrt(V*V+ee*ee)),P=Vo(H,V),b=Math.abs(P)>2e-4?P*vo:0,y=J?1/(J<0?-J:J):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!im(oi(e,qt)),W&&e.setAttribute("transform",W))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Kt(m),n.scaleY=Kt(v),n.rotation=Kt(g)+a,n.rotationX=Kt(_)+a,n.rotationY=Kt(p)+a,n.skewX=b+a,n.skewY=w+a,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Zn]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?N_:Qp?rm:F_,n.uncache=0,n},Fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},dc=function(e,t,n){var r=Cn(t);return Kt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",r)))+r},F_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rm(e,t)},ao="0deg",Hs="0px",lo=") ",rm=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,w=n.zOrigin,y="",L=p==="auto"&&e&&e!==1||p===!0;if(w&&(d!==ao||u!==ao)){var C=parseFloat(u)*hs,T=Math.sin(C),P=Math.cos(C),M;C=parseFloat(d)*hs,M=Math.cos(C),s=dc(b,s,T*M*-w),a=dc(b,a,-Math.sin(C)*-w),l=dc(b,l,P*M*-w+w)}_!==Hs&&(y+="perspective("+_+lo),(r||o)&&(y+="translate("+r+"%, "+o+"%) "),(L||s!==Hs||a!==Hs||l!==Hs)&&(y+=l!==Hs||L?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+lo),c!==ao&&(y+="rotate("+c+lo),u!==ao&&(y+="rotateY("+u+lo),d!==ao&&(y+="rotateX("+d+lo),(f!==ao||m!==ao)&&(y+="skew("+f+", "+m+lo),(v!==1||g!==1)&&(y+="scale("+v+", "+g+lo),b.style[qt]=y||"translate(0, 0)"},N_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,w=parseFloat(s),y=parseFloat(a),L,C,T,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,L=Math.cos(l)*d,C=Math.sin(l)*d,T=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=hs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),L*=M,C*=M)),L=Kt(L),C=Kt(C),T=Kt(T),P=Kt(P)):(L=d,P=f,C=T=0),(w&&!~(s+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=Kr(m,"x",s,"px"),y=Kr(m,"y",a,"px")),(v||g||_||p)&&(w=Kt(w+v-(v*L+g*T)+_),y=Kt(y+g-(v*C+g*P)+p)),(r||o)&&(M=m.getBBox(),w=Kt(w+r/100*M.width),y=Kt(y+o/100*M.height)),M="matrix("+L+","+C+","+T+","+P+","+w+","+y+")",m.setAttribute("transform",M),b&&(m.style[qt]=M)},O_=function(e,t,n,r,o){var s=360,a=fn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?vo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Ef)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Ef)%s-~~(c/s)*s)),e._pt=f=new $n(e._pt,t,n,r,c,x_),f.e=u,f.u="deg",e._props.push(n),f},If=function(e,t){for(var n in t)e[n]=t[n];return e},z_=function(e,t,n){var r=If({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[qt]=t,a=_a(n,1),Zr(n,qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qt],s[qt]=t,a=_a(n,1),s[qt]=c);for(l in xr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Cn(c),v=Cn(u),d=m!==v?Kr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new $n(e._pt,a,l,d,f-d,du),e._pt.u=v||0,e._props.push(l));If(a,r)};Yn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});Ul[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return fr(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var om={name:"css",register:mu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,w,y,L,C,T,P,M;vh||mu(),this.styles=this.styles||Jp(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ti[g]&&Hp(g,t,n,r,e,o)))){if(m=typeof u,v=Ul[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=fa(u)),v)v(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",qr.lastIndex=0,qr.test(c)||(_=Cn(c),p=Cn(u),p?_!==p&&(c=Kr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],fn(c)&&~c.indexOf("random(")&&(c=fa(c)),Cn(c+"")||c==="auto"||(c+=si.units[g]||Cn(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Vi&&(g==="autoAlpha"&&(f===1&&fr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Wr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in xr,w){if(this.styles.save(g),M=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=oi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=oi(e,"perspective"),S?e.style.perspective=S:Zr(e,"perspective")}d=parseFloat(u)}if(y||(L=e._gsap,L.renderTransform&&!t.parseTransform||_a(e,t.parseTransform),C=t.smoothOrigin!==!1&&L.smooth,y=this._pt=new $n(this._pt,a,qt,0,1,L.renderTransform,L,0,-1),y.dep=1),g==="scale")this._pt=new $n(this._pt,L,"scaleY",L.scaleY,(b?cs(L.scaleY,b+d):d)-L.scaleY||0,du),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Zn,0,a[Zn]),u=I_(u),L.svg?_u(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&Wr(this,L,"zOrigin",L.zOrigin,p),Wr(this,a,g,Fl(c),Fl(u)));continue}else if(g==="svgOrigin"){_u(e,u,1,C,0,this);continue}else if(g in nm){O_(this,L,g,f,b?cs(f,b+u):u);continue}else if(g==="smoothOrigin"){Wr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){z_(this,u,e);continue}}else g in a||(g=Ss(g)||g);if(w||(d||d===0)&&(f||f===0)&&!v_.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Cn(u)||(g in si.units?si.units[g]:_),_!==p&&(f=Kr(e,g,c,p)),this._pt=new $n(this._pt,w?L:a,g,f,(b?cs(f,b+d):d)-f,!w&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?w_:du),this._pt.u=p||0,w&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=y_):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=S_);else if(g in a)L_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){lh(g,u);continue}w||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}T&&Yp(this)},render:function(e,t){if(t.tween._time||!xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Vi,getSetter:function(e,t,n){var r=Vi[t];return r&&r.indexOf(",")<0&&(t=r),t in xr&&t!==Zn&&(e._gsap.x||fr(e,"x"))?n&&Tf===n?t==="scale"?E_:T_:(Tf=n||{})&&(t==="scale"?A_:R_):e.style&&!oh(e.style[t])?M_:~t.indexOf("-")?b_:_h(e,t)},core:{_removeProperty:Zr,_getMatrix:yh}};jn.utils.checkPrefix=Ss;jn.core.getStyleSaver=Jp;(function(i,e,t,n){var r=Yn(i+","+e+","+t,function(o){xr[o]=1});Yn(e,function(o){si.units[o]="deg",nm[o]=1}),Vi[r[13]]=i+","+e,Yn(n,function(o){var s=o.split(":");Vi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){si.units[i]="px"});jn.registerPlugin(om);var wh=jn.registerPlugin(om)||jn;wh.core.Tween;const sm=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="170",B_=0,Uf=1,k_=2,am=1,H_=2,cr=3,jr=0,Kn=1,Pn=2,Ri=0,Yr=1,Ff=2,Nf=3,Of=4,ga=5,Nn=100,V_=101,G_=102,W_=103,X_=104,yl=200,mi=201,q_=202,Y_=203,Nl=204,Ol=205,$_=206,Z_=207,K_=208,j_=209,J_=210,Q_=211,eg=212,tg=213,ng=214,gu=0,vu=1,xu=2,ys=3,Su=4,yu=5,wu=6,Mu=7,lm=0,ig=1,rg=2,qi=0,og=1,sg=2,ag=3,lg=4,cg=5,ug=6,hg=7,cm=300,ws=301,Ms=302,bu=303,Tu=304,Yl=306,fs=1e3,On=1001,zl=1002,on=1003,fg=1004,ka=1005,gt=1006,pc=1007,Gi=1008,Ci=1009,um=1010,hm=1011,Do=1012,bh=1013,Lo=1014,Xn=1015,Wi=1016,Th=1017,Eh=1018,bs=1020,fm=35902,dm=1021,pm=1022,vn=1023,mm=1024,_m=1025,ds=1026,Ts=1027,Ah=1028,Rh=1029,gm=1030,Ch=1031,Ph=1033,wl=33776,Ml=33777,bl=33778,Tl=33779,Eu=35840,Au=35841,Ru=35842,Cu=35843,Pu=36196,Du=37492,Lu=37496,Iu=37808,Uu=37809,Fu=37810,Nu=37811,Ou=37812,zu=37813,Bu=37814,ku=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,qu=37821,El=36492,Yu=36494,$u=36495,vm=36283,Zu=36284,Ku=36285,ju=36286,dg=3200,pg=3201,mg=0,_g=1,jt="",Fn="srgb",$i="srgb-linear",$l="linear",Dt="srgb",Go=7680,zf=519,gg=512,vg=513,xg=514,xm=515,Sg=516,yg=517,wg=518,Mg=519,Bf=35044,Dr=35048,kf="300 es",pr=2e3,Bl=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hf=1234567;const ia=Math.PI/180,va=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Rn(i,e,t){return Math.max(e,Math.min(t,i))}function Dh(i,e){return(i%e+e)%e}function bg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Tg(i,e,t){return i!==e?(t-i)/(e-i):0}function ra(i,e,t){return(1-t)*i+t*e}function Eg(i,e,t,n){return ra(i,e,1-Math.exp(-t*n))}function Ag(i,e=1){return e-Math.abs(Dh(i,e*2)-e)}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dg(i,e){return i+Math.random()*(e-i)}function Lg(i){return i*(.5-Math.random())}function Ig(i){i!==void 0&&(Hf=i);let e=Hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ug(i){return i*ia}function Fg(i){return i*va}function Ng(i){return(i&i-1)===0&&i!==0}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bg(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bt={DEG2RAD:ia,RAD2DEG:va,generateUUID:Rs,clamp:Rn,euclideanModulo:Dh,mapLinear:bg,inverseLerp:Tg,lerp:ra,damp:Eg,pingpong:Ag,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Dg,randFloatSpread:Lg,seededRandom:Ig,degToRad:Ug,radToDeg:Fg,isPowerOfTwo:Ng,ceilPowerOfTwo:Og,floorPowerOfTwo:zg,setQuaternionFromProperEuler:Bg,normalize:In,denormalize:rs};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,o,s,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],w=r[4],y=r[7],L=r[2],C=r[5],T=r[8];return o[0]=s*g+a*b+l*L,o[3]=s*_+a*w+l*C,o[6]=s*p+a*y+l*T,o[1]=c*g+u*b+d*L,o[4]=c*_+u*w+d*C,o[7]=c*p+u*y+d*T,o[2]=f*g+m*b+v*L,o[5]=f*_+m*w+v*C,o[8]=f*p+m*y+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new ht;function Sm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kg(){const i=xa("canvas");return i.style.display="block",i}const Vf={};function Js(i){i in Vf||(Vf[i]=!0,console.warn(i))}function Hg(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Vg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jt?$l:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _r(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Gf=[.64,.33,.3,.6,.15,.06],Wf=[.2126,.7152,.0722],Xf=[.3127,.329],qf=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[$i]:{primaries:Gf,whitePoint:Xf,transfer:$l,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Gf,whitePoint:Xf,transfer:Dt,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});let Wo;class Wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wo===void 0&&(Wo=xa("canvas")),Wo.width=e.width,Wo.height=e.height;const n=Wo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_r(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_r(t[n]/255)*255):t[n]=_r(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xg=0;class ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(_c(r[s].image)):o.push(_c(r[s]))}else o=_c(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function _c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qg=0;class Sn extends As{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=On,r=On,o=gt,s=Gi,a=vn,l=Ci,c=Sn.DEFAULT_ANISOTROPY,u=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Rs(),this.name="",this.source=new ym(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=cm;Sn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,L=(p+1)/2,C=(u+f)/4,T=(d+g)/4,P=(v+_)/4;return w>y&&w>L?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=C/n,o=T/n):y>L?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=C/r,o=P/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=T/o,r=P/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ym(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Yg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wm extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $g extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),C=Math.atan2(L,p*b);_=Math.sin(_*C)/L,a=Math.sin(a*C)/L}const y=a*b;if(l=l*_+f*y,c=c*_+m*y,u=u*_+v*y,d=d*_+g*y,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new q,$f=new zn;class Cs{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,wi):wi.fromBufferAttribute(o,s),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Va.subVectors(this.max,Vs),Xo.subVectors(e.a,Vs),qo.subVectors(e.b,Vs),Yo.subVectors(e.c,Vs),Lr.subVectors(qo,Xo),Ir.subVectors(Yo,qo),co.subVectors(Xo,Yo);let t=[0,-Lr.z,Lr.y,0,-Ir.z,Ir.y,0,-co.z,co.y,Lr.z,0,-Lr.x,Ir.z,0,-Ir.x,co.z,0,-co.x,-Lr.y,Lr.x,0,-Ir.y,Ir.x,0,-co.y,co.x,0];return!vc(t,Xo,qo,Yo,Va)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,Xo,qo,Yo,Va))?!1:(Ga.crossVectors(Lr,Ir),t=[Ga.x,Ga.y,Ga.z],vc(t,Xo,qo,Yo,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new q,new q,new q,new q,new q,new q,new q,new q],wi=new q,Ha=new Cs,Xo=new q,qo=new q,Yo=new q,Lr=new q,Ir=new q,co=new q,Vs=new q,Va=new q,Ga=new q,uo=new q;function vc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){uo.fromArray(i,o);const a=r.x*Math.abs(uo.x)+r.y*Math.abs(uo.y)+r.z*Math.abs(uo.z),l=e.dot(uo),c=t.dot(uo),u=n.dot(uo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zg=new Cs,Gs=new q,xc=new q;class Lh{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zg.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(xc)),this.expandByPoint(Gs.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new q,Sc=new q,Wa=new q,Ur=new q,yc=new q,Xa=new q,wc=new q;class Kg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sc.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Sc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Wa),a=Ur.dot(this.direction),l=-Ur.dot(Wa),c=Ur.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sc).addScaledVector(Wa,f),m}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),r=ir.dot(ir)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,o){yc.subVectors(t,e),Xa.subVectors(n,e),wc.crossVectors(yc,Xa);let s=this.direction.dot(wc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ur.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(Ur,Xa));if(l<0)return null;const c=a*this.direction.dot(yc.cross(Ur));if(c<0||l+c>s)return null;const u=-a*Ur.dot(wc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),o=1/$o.setFromMatrixColumn(e,1).length(),s=1/$o.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Jg)}lookAt(e,t,n){const r=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Fr.crossVectors(n,Qn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Fr.crossVectors(n,Qn)),Fr.normalize(),qa.crossVectors(Qn,Fr),r[0]=Fr.x,r[4]=qa.x,r[8]=Qn.x,r[1]=Fr.y,r[5]=qa.y,r[9]=Qn.y,r[2]=Fr.z,r[6]=qa.z,r[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],w=n[7],y=n[11],L=n[15],C=r[0],T=r[4],P=r[8],M=r[12],S=r[1],R=r[5],F=r[9],N=r[13],k=r[2],H=r[6],V=r[10],W=r[14],B=r[3],se=r[7],X=r[11],ge=r[15];return o[0]=s*C+a*S+l*k+c*B,o[4]=s*T+a*R+l*H+c*se,o[8]=s*P+a*F+l*V+c*X,o[12]=s*M+a*N+l*W+c*ge,o[1]=u*C+d*S+f*k+m*B,o[5]=u*T+d*R+f*H+m*se,o[9]=u*P+d*F+f*V+m*X,o[13]=u*M+d*N+f*W+m*ge,o[2]=v*C+g*S+_*k+p*B,o[6]=v*T+g*R+_*H+p*se,o[10]=v*P+g*F+_*V+p*X,o[14]=v*M+g*N+_*W+p*ge,o[3]=b*C+w*S+y*k+L*B,o[7]=b*T+w*R+y*H+L*se,o[11]=b*P+w*F+y*V+L*X,o[15]=b*M+w*N+y*W+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,w=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,y=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,L=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,C=t*b+n*w+r*y+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=b*T,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*T,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*T,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*T,e[4]=w*T,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*T,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*T,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*T,e[8]=y*T,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*T,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*T,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*T,e[12]=L*T,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*T,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*T,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,w=l*u,y=l*d,L=n.x,C=n.y,T=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+y)*L,r[2]=(v-w)*L,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+p))*C,r[6]=(_+b)*C,r[7]=0,r[8]=(v+w)*T,r[9]=(_-b)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=$o.set(r[0],r[1],r[2]).length();const s=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const c=1/o,u=1/s,d=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=pr){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===pr)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Bl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=pr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===pr)v=(s+o)*d,g=-2*d;else if(a===Bl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $o=new q,Mi=new yt,jg=new q(0,0,0),Jg=new q(1,1,1),Fr=new q,qa=new q,Qn=new q,Zf=new yt,Kf=new zn;class hi{constructor(e=0,t=0,n=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Mm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const jf=new q,Zo=new zn,rr=new yt,Ya=new q,Ws=new q,ev=new q,tv=new zn,Jf=new q(1,0,0),Qf=new q(0,1,0),ed=new q(0,0,1),td={type:"added"},nv={type:"removed"},Ko={type:"childadded",child:null},Mc={type:"childremoved",child:null};class ai extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new q,t=new hi,n=new zn,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new ht}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ws,Ya,this.up):rr.lookAt(Ya,Ws,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(rr),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nv),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ai.DEFAULT_UP=new q(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new q,or=new q,bc=new q,sr=new q,jo=new q,Jo=new q,nd=new q,Tc=new q,Ec=new q,Ac=new q,Rc=new Ft,Cc=new Ft,Pc=new Ft;class Ai{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bi.subVectors(e,t),r.cross(bi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){bi.subVectors(r,t),or.subVectors(n,t),bc.subVectors(e,t);const s=bi.dot(bi),a=bi.dot(or),l=bi.dot(bc),c=or.dot(or),u=or.dot(bc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,sr.x),l.addScaledVector(s,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Rc,o.x),s.addScaledVector(Cc,o.y),s.addScaledVector(Pc,o.z),s}static isFrontFacing(e,t,n,r){return bi.subVectors(n,t),or.subVectors(e,t),bi.cross(or).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),bi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ai.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;jo.subVectors(r,n),Jo.subVectors(o,n),Tc.subVectors(e,n);const l=jo.dot(Tc),c=Jo.dot(Tc);if(l<=0&&c<=0)return t.copy(n);Ec.subVectors(e,r);const u=jo.dot(Ec),d=Jo.dot(Ec);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(jo,s);Ac.subVectors(e,o);const m=jo.dot(Ac),v=Jo.dot(Ac);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Jo,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return nd.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(nd,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(jo,s).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=Dh(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Dc(s,o,e+1/3),this.g=Dc(s,o,e),this.b=Dc(s,o,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Mt.fromWorkingColorSpace(bn.copy(this),e),Math.round(Rn(bn.r*255,0,255))*65536+Math.round(Rn(bn.g*255,0,255))*256+Math.round(Rn(bn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,r=bn.g,o=bn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Fn){Mt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,r=bn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL($a);const n=ra(Nr.h,$a.h,t),r=ra(Nr.s,$a.s,t),o=ra(Nr.l,$a.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ye;Ye.NAMES=bm;let iv=0;class Zl extends As{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Rs(),this.name="",this.blending=Yr,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ih extends Zl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dr=rv();function rv(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function ov(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Rn(i,-65504,65504),dr.floatView[0]=i;const e=dr.uint32View[0],t=e>>23&511;return dr.baseTable[t]+((e&8388607)>>dr.shiftTable[t])}function sv(i){const e=i>>10;return dr.uint32View[0]=dr.mantissaTable[dr.offsetTable[e]+(i&1023)]+dr.exponentTable[e],dr.floatView[0]}const id={toHalfFloat:ov,fromHalfFloat:sv},en=new q,Za=new et;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}}class Tm extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Em extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Po extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let av=0;const di=new yt,Lc=new ai,Qo=new q,ei=new Cs,Xs=new Cs,hn=new q;class yr extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?Em:Tm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ht().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Po(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];ei.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ei.min,Xs.min),ei.expandByPoint(hn),hn.addVectors(ei.max,Xs.max),ei.expandByPoint(hn)):(ei.expandByPoint(Xs.min),ei.expandByPoint(Xs.max))}ei.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)hn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),hn.add(Qo)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,u=new q,d=new q,f=new et,m=new et,v=new et,g=new q,_=new q;function p(P,M,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,M),v.fromBufferAttribute(o,S),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(R),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),a[P].add(g),a[M].add(g),a[S].add(g),l[P].add(_),l[M].add(_),l[S].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){const S=b[P],R=S.start,F=S.count;for(let N=R,k=R+F;N<k;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new q,y=new q,L=new q,C=new q;function T(P){L.fromBufferAttribute(r,P),C.copy(L);const M=a[P];w.copy(M),w.sub(L.multiplyScalar(L.dot(M))).normalize(),y.crossVectors(C,M);const R=y.dot(l[P])<0?-1:1;s.setXYZW(P,w.x,w.y,w.z,R)}for(let P=0,M=b.length;P<M;++P){const S=b[P],R=S.start,F=S.count;for(let N=R,k=R+F;N<k;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new $t(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new yt,ho=new Kg,Ka=new Lh,od=new q,ja=new q,Ja=new q,Qa=new q,Ic=new q,el=new q,sd=new q,tl=new q;class Ut extends ai{constructor(e=new yr,t=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){el.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Ic.fromBufferAttribute(d,e),s?el.addScaledVector(Ic,u):el.addScaledVector(Ic.sub(t),u))}t.add(el)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(o),ho.copy(e.ray).recast(e.near),!(Ka.containsPoint(ho.origin)===!1&&(ho.intersectSphere(Ka,od)===null||ho.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(rd.copy(o).invert(),ho.copy(e.ray).applyMatrix4(rd),!(n.boundingBox!==null&&ho.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),w=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let y=b,L=w;y<L;y+=3){const C=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);r=nl(this,p,e,n,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);r=nl(this,s,e,n,c,u,d,b,w,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),w=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let y=b,L=w;y<L;y+=3){const C=y,T=y+1,P=y+2;r=nl(this,p,e,n,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,w=_+1,y=_+2;r=nl(this,s,e,n,c,u,d,b,w,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function lv(i,e,t,n,r,o,s,a){let l;if(e.side===Kn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===jr,a),l===null)return null;tl.copy(a),tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,ja),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Qa);const u=lv(i,e,t,n,ja,Ja,Qa,sd);if(u){const d=new q;Ai.getBarycoord(sd,ja,Ja,Qa,d),r&&(u.uv=Ai.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(u.uv1=Ai.getInterpolatedAttribute(o,a,l,c,d,new et)),s&&(u.normal=Ai.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Ai.getNormal(ja,Ja,Qa,f.normal),u.face=f,u.barycoord=d}return u}class ya extends yr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Po(c,3)),this.setAttribute("normal",new Po(u,3)),this.setAttribute("uv",new Po(d,2));function v(g,_,p,b,w,y,L,C,T,P,M){const S=y/T,R=L/P,F=y/2,N=L/2,k=C/2,H=T+1,V=P+1;let W=0,B=0;const se=new q;for(let X=0;X<V;X++){const ge=X*R-N;for(let _e=0;_e<H;_e++){const Pe=_e*S-F;se[g]=Pe*b,se[_]=ge*w,se[p]=k,c.push(se.x,se.y,se.z),se[g]=0,se[_]=0,se[p]=C>0?1:-1,u.push(se.x,se.y,se.z),d.push(_e/T),d.push(1-X/P),W+=1}}for(let X=0;X<P;X++)for(let ge=0;ge<T;ge++){const _e=f+ge+H*X,Pe=f+ge+H*(X+1),J=f+(ge+1)+H*(X+1),ee=f+(ge+1)+H*X;l.push(_e,Pe,ee),l.push(Pe,J,ee),B+=6}a.addGroup(m,B,M),m+=B,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const n=Es(i[t]);for(const r in n)e[r]=n[r]}return e}function cv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Am(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const uv={clone:Es,merge:Un};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Zl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rm extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new q,ad=new et,ld=new et;class Gn extends Rm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,ad,ld),t.subVectors(ld,ad)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class dv extends ai{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new Gn(es,ts,e,t);o.layers=this.layers,this.add(o);const s=new Gn(es,ts,e,t);s.layers=this.layers,this.add(s);const a=new Gn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new Gn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Gn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Cm extends Sn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pv extends Sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ya(5,5,5),o=new At({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Ri});o.uniforms.tEquirect.value=t;const s=new Ut(r,o),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=gt),new dv(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Uc=new q,mv=new q,_v=new ht;class xo{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Uc.subVectors(n,t).cross(mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_v.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new Lh,il=new q;class Pm{constructor(e=new xo,t=new xo,n=new xo,r=new xo,o=new xo,s=new xo){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],w=r[14],y=r[15];if(n[0].setComponents(l-o,f-c,_-m,y-p).normalize(),n[1].setComponents(l+o,f+c,_+m,y+p).normalize(),n[2].setComponents(l+s,f+u,_+v,y+b).normalize(),n[3].setComponents(l-s,f-u,_-v,y-b).normalize(),n[4].setComponents(l-a,f-d,_-g,y-w).normalize(),t===pr)n[5].setComponents(l+a,f+d,_+g,y+w).normalize();else if(t===Bl)n[5].setComponents(a,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(e){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dm(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function gv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class li extends yr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let w=0;w<c;w++){const y=w*d-o;v.push(y,-b,0),g.push(0,0,1),_.push(w/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,y=b+c*(p+1),L=b+1+c*(p+1),C=b+1+c*p;m.push(w,y,C),m.push(y,L,C)}this.setIndex(m),this.setAttribute("position",new Po(v,3)),this.setAttribute("normal",new Po(g,3)),this.setAttribute("uv",new Po(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
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
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ev=`#ifdef USE_BATCHING
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
#endif`,Av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Vv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gv=`vec3 transformedNormal = objectNormal;
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
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,gx=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ax=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n1=`float getShadowMask() {
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
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
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
}`,b1=`#if DEPTH_PACKING == 3200
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
}`,T1=`#define DISTANCE
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
}`,E1=`#define DISTANCE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,L1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,O1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,B1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,V1=`#define STANDARD
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
}`,G1=`#define TOON
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
}`,W1=`#define TOON
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
}`,X1=`uniform float size;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,$1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,K1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:vv,alphahash_pars_fragment:xv,alphamap_fragment:Sv,alphamap_pars_fragment:yv,alphatest_fragment:wv,alphatest_pars_fragment:Mv,aomap_fragment:bv,aomap_pars_fragment:Tv,batching_pars_vertex:Ev,batching_vertex:Av,begin_vertex:Rv,beginnormal_vertex:Cv,bsdfs:Pv,iridescence_fragment:Dv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Nv,color_fragment:Ov,color_pars_fragment:zv,color_pars_vertex:Bv,color_vertex:kv,common:Hv,cube_uv_reflection_fragment:Vv,defaultnormal_vertex:Gv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:qv,emissivemap_pars_fragment:Yv,colorspace_fragment:$v,colorspace_pars_fragment:Zv,envmap_fragment:Kv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Jv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:sx,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:hx,lights_toon_pars_fragment:fx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:_x,lights_fragment_begin:gx,lights_fragment_maps:vx,lights_fragment_end:xx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Mx,map_fragment:bx,map_pars_fragment:Tx,map_particle_fragment:Ex,map_particle_pars_fragment:Ax,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Px,morphcolor_vertex:Dx,morphnormal_vertex:Lx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Nx,normal_pars_fragment:Ox,normal_pars_vertex:zx,normal_vertex:Bx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:$x,dithering_fragment:Zx,dithering_pars_fragment:Kx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:e1,shadowmap_vertex:t1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:r1,skinning_vertex:o1,skinnormal_vertex:s1,specularmap_fragment:a1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:h1,transmission_pars_fragment:f1,uv_pars_fragment:d1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:_1,background_vert:g1,background_frag:v1,backgroundCube_vert:x1,backgroundCube_frag:S1,cube_vert:y1,cube_frag:w1,depth_vert:M1,depth_frag:b1,distanceRGBA_vert:T1,distanceRGBA_frag:E1,equirect_vert:A1,equirect_frag:R1,linedashed_vert:C1,linedashed_frag:P1,meshbasic_vert:D1,meshbasic_frag:L1,meshlambert_vert:I1,meshlambert_frag:U1,meshmatcap_vert:F1,meshmatcap_frag:N1,meshnormal_vert:O1,meshnormal_frag:z1,meshphong_vert:B1,meshphong_frag:k1,meshphysical_vert:H1,meshphysical_frag:V1,meshtoon_vert:G1,meshtoon_frag:W1,points_vert:X1,points_frag:q1,shadow_vert:Y1,shadow_frag:$1,sprite_vert:Z1,sprite_frag:K1},ze={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ki={basic:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Un([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Un([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Un([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ye(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Un([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Un([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Un([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Un([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Un([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Un([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Un([ze.common,ze.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Un([ze.lights,ze.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ki.physical={uniforms:Un([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const rl={r:0,b:0,g:0},po=new hi,j1=new yt;function J1(i,e,t,n,r,o,s){const a=new Ye(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function g(b){let w=!1;const y=v(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){const y=v(w);y&&(y.isCubeTexture||y.mapping===Yl)?(u===void 0&&(u=new Ut(new ya(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Es(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),po.copy(w.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(po)),u.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Dt,(d!==y||f!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ut(new li(2,2),new At({name:"BackgroundMaterial",uniforms:Es(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(rl,Am(i)),n.buffers.color.setClear(rl.r,rl.g,rl.b,w,s)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function Q1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(S,R,F,N,k){let H=!1;const V=d(N,F,R);o!==V&&(o=V,c(o.object)),H=m(S,N,F,k),H&&v(S,N,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,y(S,R,F,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,R,F){const N=F.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let H=k[R.id];H===void 0&&(H={},k[R.id]=H);let V=H[N];return V===void 0&&(V=f(l()),H[N]=V),V}function f(S){const R=[],F=[],N=[];for(let k=0;k<t;k++)R[k]=0,F[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:N,object:S,attributes:{},index:null}}function m(S,R,F,N){const k=o.attributes,H=R.attributes;let V=0;const W=F.getAttributes();for(const B in W)if(W[B].location>=0){const X=k[B];let ge=H[B];if(ge===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),X===void 0||X.attribute!==ge||ge&&X.data!==ge.data)return!0;V++}return o.attributesNum!==V||o.index!==N}function v(S,R,F,N){const k={},H=R.attributes;let V=0;const W=F.getAttributes();for(const B in W)if(W[B].location>=0){let X=H[B];X===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const ge={};ge.attribute=X,X&&X.data&&(ge.data=X.data),k[B]=ge,V++}o.attributes=k,o.attributesNum=V,o.index=N}function g(){const S=o.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function _(S){p(S,0)}function p(S,R){const F=o.newAttributes,N=o.enabledAttributes,k=o.attributeDivisors;F[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),k[S]!==R&&(i.vertexAttribDivisor(S,R),k[S]=R)}function b(){const S=o.newAttributes,R=o.enabledAttributes;for(let F=0,N=R.length;F<N;F++)R[F]!==S[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function w(S,R,F,N,k,H,V){V===!0?i.vertexAttribIPointer(S,R,F,k,H):i.vertexAttribPointer(S,R,F,N,k,H)}function y(S,R,F,N){g();const k=N.attributes,H=F.getAttributes(),V=R.defaultAttributeValues;for(const W in H){const B=H[W];if(B.location>=0){let se=k[W];if(se===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const X=se.normalized,ge=se.itemSize,_e=e.get(se);if(_e===void 0)continue;const Pe=_e.buffer,J=_e.type,ee=_e.bytesPerElement,ce=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===bh;if(se.isInterleavedBufferAttribute){const le=se.data,be=le.stride,De=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)p(B.location+Ne,le.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)_(B.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ne=0;Ne<B.locationSize;Ne++)w(B.location+Ne,ge/B.locationSize,J,X,be*ee,(De+ge/B.locationSize*Ne)*ee,ce)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<B.locationSize;le++)p(B.location+le,se.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<B.locationSize;le++)_(B.location+le);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let le=0;le<B.locationSize;le++)w(B.location+le,ge/B.locationSize,J,X,ge*ee,ge/B.locationSize*le*ee,ce)}}else if(V!==void 0){const X=V[W];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(B.location,X);break;case 3:i.vertexAttrib3fv(B.location,X);break;case 4:i.vertexAttrib4fv(B.location,X);break;default:i.vertexAttrib1fv(B.location,X)}}}}b()}function L(){P();for(const S in n){const R=n[S];for(const F in R){const N=R[F];for(const k in N)u(N[k].object),delete N[k];delete R[F]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const F in R){const N=R[F];for(const k in N)u(N[k].object),delete N[k];delete R[F]}delete n[S.id]}function T(S){for(const R in n){const F=n[R];if(F[S.id]===void 0)continue;const N=F[S.id];for(const k in N)u(N[k].object),delete N[k];delete F[S.id]}}function P(){M(),s=!0,o!==r&&(o=r,c(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function eS(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tS(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function nS(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new xo,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,w=b*4;let y=p.clippingState||null;l.value=y,y=u(v,f,w,m);for(let L=0;L!==w;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,y=m;w!==g;++w,y+=4)s.copy(d[w]).applyMatrix4(b,a),s.normal.toArray(_,y),_[y+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function iS(i){let e=new WeakMap;function t(s,a){return a===bu?s.mapping=ws:a===Tu&&(s.mapping=Ms),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===bu||a===Tu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new pv(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Kl extends Rm{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,cd=[.125,.215,.35,.446,.526,.582],wo=20,Fc=new Kl,ud=new Ye;let Nc=null,Oc=0,zc=0,Bc=!1;const So=(1+Math.sqrt(5))/2,ns=1/So,hd=[new q(-So,ns,0),new q(So,ns,0),new q(-ns,0,So),new q(ns,0,So),new q(0,So,-ns),new q(0,So,ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Oc,zc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Wi,format:vn,colorSpace:$i,depthBuffer:!1},r=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rS(o)),this._blurMaterial=oS(o,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Fc)}_sceneToCubeUV(e,t,n,r){const a=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ud),u.toneMapping=qi,u.autoClear=!1;const m=new Ih({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new Ut(new ya,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(ud),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;ol(r,b*w,p>2?w:0,w,w),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ws||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Fc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=hd[(r-o-1)%hd.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*wo-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):wo;_>wo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wo}`);const p=[];let b=0;for(let T=0;T<wo;++T){const P=T/g,M=Math.exp(-P*P/2);p.push(M),T===0?b+=M:T<_&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=v,f.mipInt.value=w-n;const y=this._sizeLods[r],L=3*y*(r>w-as?r-w+as:0),C=4*(this._cubeSize-y);ol(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Fc)}}function rS(i){const e=[],t=[],n=[];let r=i;const o=i-as+1+cd.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-as?l=cd[s-i+as-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),w=new Float32Array(_*v*m),y=new Float32Array(p*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,P=C>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,g*v*C),w.set(f,_*v*C);const S=[C,C,C,C,C,C];y.set(S,p*v*C)}const L=new yr;L.setAttribute("position",new $t(b,g)),L.setAttribute("uv",new $t(w,_)),L.setAttribute("faceIndex",new $t(y,p)),e.push(L),r>as&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dd(i,e,t){const n=new Sr(i,e,t);return n.texture.mapping=Yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ol(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function oS(i,e,t){const n=new Float32Array(wo),r=new q(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function pd(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function md(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function sS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bu||l===Tu,u=l===ws||l===Ms;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new fd(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new fd(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function aS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lS(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let w=0,y=b.length;w<y;w+=3){const L=b[w+0],C=b[w+1],T=b[w+2];f.push(L,C,C,T,T,L)}}else if(v!==void 0){const b=v.array;g=v.version;for(let w=0,y=b.length/3-1;w<y;w+=3){const L=w+0,C=w+1,T=w+2;f.push(L,C,C,T,T,L)}}else return;const _=new(Sm(f)?Em:Tm)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function cS(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hS(i,e,t){const n=new WeakMap,r=new Ft;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let L=a.attributes.position.count*y,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*C*4*d),P=new wm(T,L,C,d);P.type=Xn,P.needsUpdate=!0;const M=y*4;for(let R=0;R<d;R++){const F=p[R],N=b[R],k=w[R],H=L*C*4*R;for(let V=0;V<F.count;V++){const W=V*M;v===!0&&(r.fromBufferAttribute(F,V),T[H+W+0]=r.x,T[H+W+1]=r.y,T[H+W+2]=r.z,T[H+W+3]=0),g===!0&&(r.fromBufferAttribute(N,V),T[H+W+4]=r.x,T[H+W+5]=r.y,T[H+W+6]=r.z,T[H+W+7]=0),_===!0&&(r.fromBufferAttribute(k,V),T[H+W+8]=r.x,T[H+W+9]=r.y,T[H+W+10]=r.z,T[H+W+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new et(L,C)},n.set(a,f),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function fS(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class kl extends Sn{constructor(e,t,n,r,o,s,a,l,c,u=ds){if(u!==ds&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ds&&(n=Lo),n===void 0&&u===Ts&&(n=bs),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lm=new Sn,_d=new kl(1,1),Im=new wm,Um=new $g,Fm=new Cm,gd=[],vd=[],xd=new Float32Array(16),Sd=new Float32Array(9),yd=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=gd[r];if(o===void 0&&(o=new Float32Array(r),gd[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jl(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function gS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),an(t,n)}}function vS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),an(t,n)}}function xS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),an(t,n)}}function SS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function bS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function RS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=xm,o=_d):o=Lm,t.setTexture2D(e||o,r)}function CS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Um,r)}function PS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fm,r)}function DS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Im,r)}function LS(i){switch(i){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return _S;case 35674:return gS;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return SS;case 35667:case 35671:return yS;case 35668:case 35672:return wS;case 35669:case 35673:return MS;case 5125:return bS;case 36294:return TS;case 36295:return ES;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return DS}}function IS(i,e){i.uniform1fv(this.addr,e)}function US(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function FS(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function NS(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function OS(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zS(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function BS(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kS(i,e){i.uniform1iv(this.addr,e)}function HS(i,e){i.uniform2iv(this.addr,e)}function VS(i,e){i.uniform3iv(this.addr,e)}function GS(i,e){i.uniform4iv(this.addr,e)}function WS(i,e){i.uniform1uiv(this.addr,e)}function XS(i,e){i.uniform2uiv(this.addr,e)}function qS(i,e){i.uniform3uiv(this.addr,e)}function YS(i,e){i.uniform4uiv(this.addr,e)}function $S(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Lm,o[s])}function ZS(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Um,o[s])}function KS(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Fm,o[s])}function jS(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Im,o[s])}function JS(i){switch(i){case 5126:return IS;case 35664:return US;case 35665:return FS;case 35666:return NS;case 35674:return OS;case 35675:return zS;case 35676:return BS;case 5124:case 35670:return kS;case 35667:case 35671:return HS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return WS;case 36294:return XS;case 36295:return qS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return jS}}class QS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=LS(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JS(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function wd(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){const n=i.name,r=n.length;for(kc.lastIndex=0;;){const o=kc.exec(n),s=kc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){wd(t,c===void 0?new QS(a,i,e):new ey(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ty(a),wd(t,d)),t=d}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);ny(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Md(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const iy=37297;let ry=0;function oy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const bd=new ht;function sy(i){Mt._getMatrix(bd,Mt.workingColorSpace,i);const e=`mat3( ${bd.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case $l:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Td(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+oy(i.getShaderSource(e),s)}else return r}function ay(i,e){const t=sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ly(i,e){let t;switch(e){case og:t="Linear";break;case sg:t="Reinhard";break;case ag:t="Cineon";break;case lg:t="ACESFilmic";break;case ug:t="AgX";break;case hg:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sl=new q;function cy(){Mt.getLuminanceCoefficients(sl);const i=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function hy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Qs(i){return i!==""}function Ed(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(dy,my)}const py=new Map;function my(i,e){let t=dt[e];if(t===void 0){const n=py.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}const _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(_y,gy)}function gy(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Cd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===am?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ms:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function yy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lm:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case rg:e="ENVMAP_BLENDING_ADD";break}return e}function wy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function My(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=vy(t),c=xy(t),u=Sy(t),d=yy(t),f=wy(t),m=uy(t),v=hy(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(_=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?dt.tonemapping_pars_fragment:"",t.toneMapping!==qi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),s=Ju(s),s=Ed(s,t),s=Ad(s,t),a=Ju(a),a=Ed(a,t),a=Ad(a,t),s=Rd(s),a=Rd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+_+s,y=b+p+a,L=Md(r,r.VERTEX_SHADER,w),C=Md(r,r.FRAGMENT_SHADER,y);r.attachShader(g,L),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(C).trim();let H=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,C);else{const W=Td(r,L,"vertex"),B=Td(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+W+`
`+B)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||k==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:F,vertexShader:{log:N,prefix:_},fragmentShader:{log:k,prefix:p}})}r.deleteShader(L),r.deleteShader(C),P=new Al(r,g),M=fy(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,iy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=C,this}let by=0;class Ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ey(e),t.set(e,n)),n}}class Ey{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}}function Ay(i,e,t,n,r,o,s){const a=new Mm,l=new Ty,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,S,R,F,N){const k=F.fog,H=N.geometry,V=M.isMeshStandardMaterial?F.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),B=W&&W.mapping===Yl?W.image.height:null,se=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=X!==void 0?X.length:0;let _e=0;H.morphAttributes.position!==void 0&&(_e=1),H.morphAttributes.normal!==void 0&&(_e=2),H.morphAttributes.color!==void 0&&(_e=3);let Pe,J,ee,ce;if(se){const st=ki[se];Pe=st.vertexShader,J=st.fragmentShader}else Pe=M.vertexShader,J=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const le=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,$e=!!M.map,We=!!M.matcap,nt=!!W,z=!!M.aoMap,je=!!M.lightMap,Xe=!!M.bumpMap,Je=!!M.normalMap,He=!!M.displacementMap,Oe=!!M.emissiveMap,Le=!!M.metalnessMap,U=!!M.roughnessMap,A=M.anisotropy>0,Y=M.clearcoat>0,$=M.dispersion>0,ne=M.iridescence>0,ie=M.sheen>0,Te=M.transmission>0,pe=A&&!!M.anisotropyMap,me=Y&&!!M.clearcoatMap,tt=Y&&!!M.clearcoatNormalMap,de=Y&&!!M.clearcoatRoughnessMap,Me=ne&&!!M.iridescenceMap,Ee=ne&&!!M.iridescenceThicknessMap,Ie=ie&&!!M.sheenColorMap,ue=ie&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ge=!!M.specularColorMap,it=!!M.specularIntensityMap,G=Te&&!!M.transmissionMap,te=Te&&!!M.thicknessMap,oe=!!M.gradientMap,fe=!!M.alphaMap,Ue=M.alphaTest>0,Fe=!!M.alphaHash,ot=!!M.extensions;let Ct=qi;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Pt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:J,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:We,envMap:nt,envMapMode:nt&&W.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:je,bumpMap:Xe,normalMap:Je,displacementMap:f&&He,emissiveMap:Oe,normalMapObjectSpace:Je&&M.normalMapType===_g,normalMapTangentSpace:Je&&M.normalMapType===mg,metalnessMap:Le,roughnessMap:U,anisotropy:A,anisotropyMap:pe,clearcoat:Y,clearcoatMap:me,clearcoatNormalMap:tt,clearcoatRoughnessMap:de,dispersion:$,iridescence:ne,iridescenceMap:Me,iridescenceThicknessMap:Ee,sheen:ie,sheenColorMap:Ie,sheenRoughnessMap:ue,specularMap:Be,specularColorMap:Ge,specularIntensityMap:it,transmission:Te,transmissionMap:G,thicknessMap:te,gradientMap:oe,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:Fe,combine:M.combine,mapUv:$e&&g(M.map.channel),aoMapUv:z&&g(M.aoMap.channel),lightMapUv:je&&g(M.lightMap.channel),bumpMapUv:Xe&&g(M.bumpMap.channel),normalMapUv:Je&&g(M.normalMap.channel),displacementMapUv:He&&g(M.displacementMap.channel),emissiveMapUv:Oe&&g(M.emissiveMap.channel),metalnessMapUv:Le&&g(M.metalnessMap.channel),roughnessMapUv:U&&g(M.roughnessMap.channel),anisotropyMapUv:pe&&g(M.anisotropyMap.channel),clearcoatMapUv:me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:Ge&&g(M.specularColorMap.channel),specularIntensityMapUv:it&&g(M.specularIntensityMap.channel),transmissionMapUv:G&&g(M.transmissionMap.channel),thicknessMapUv:te&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Je||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&($e||fe),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:Oe&&M.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(S,M),w(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function w(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=v[M.type];let R;if(S){const F=ki[S];R=uv.clone(F.uniforms)}else R=M.uniforms;return R}function L(M,S){let R;for(let F=0,N=u.length;F<N;F++){const k=u[F];if(k.cacheKey===S){R=k,++R.usedTimes;break}}return R===void 0&&(R=new My(i,S,M,o),u.push(R)),R}function C(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function Ry(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Cy),n.length>1&&n.sort(f||Pd),r.length>1&&r.sort(f||Pd)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function Py(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Dd,i.set(n,[s])):r>=o.length?(s=new Dd,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ye};break;case"SpotLight":t={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Iy=0;function Uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fy(i){const e=new Dy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new yt,s=new yt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,w=0,y=0,L=0,C=0,T=0;c.sort(Uy);for(let M=0,S=c.length;M<S;M++){const R=c[M],F=R.color,N=R.intensity,k=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=V,m++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;const W=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,W.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=W.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=H,y++}g++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=V,_++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const W=R.shadow,B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=R.shadow.matrix,w++}n.point[v]=V,v++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=T,n.version=Iy++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(w.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),m++}else if(w.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),s.identity(),o.copy(w.matrixWorld),o.premultiply(_),s.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(w.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),f++}else if(w.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Ld(i){const e=new Fy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Ny(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Ld(i),e.set(r,[a])):o>=s.length?(a=new Ld(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Oy extends Zl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zy extends Zl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new Pm;const r=new et,o=new et,s=new Ft,a=new Oy({depthPacking:pg}),l=new zy,c={},u=t.maxTextureSize,d={[jr]:Kn,[Kn]:jr,[Pn]:Pn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:By,fragmentShader:ky}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new yr;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ut(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=am;let p=this.type;this.render=function(C,T,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ri),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==cr&&this.type===cr,k=p===cr&&this.type!==cr;for(let H=0,V=C.length;H<V;H++){const W=C[H],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const se=B.getFrameExtents();if(r.multiply(se),o.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/se.x),r.x=o.x*se.x,B.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/se.y),r.y=o.y*se.y,B.mapSize.y=o.y)),B.map===null||N===!0||k===!0){const ge=this.type!==cr?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new Sr(r.x,r.y,ge),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const X=B.getViewportCount();for(let ge=0;ge<X;ge++){const _e=B.getViewport(ge);s.set(o.x*_e.x,o.y*_e.y,o.x*_e.z,o.y*_e.w),F.viewport(s),B.updateMatrices(W,ge),n=B.getFrustum(),y(T,P,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===cr&&b(B,P),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(M,S,R)};function b(C,T){const P=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,P,m,g,null)}function w(C,T,P,M){let S=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,N=T.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let H=k[N];H===void 0&&(H=S.clone(),k[N]=H,T.addEventListener("dispose",L)),S=H}if(S.visible=T.visible,S.wireframe=T.wireframe,M===cr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=P}return S}function y(C,T,P,M,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===cr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const N=e.update(C),k=C.material;if(Array.isArray(k)){const H=N.groups;for(let V=0,W=H.length;V<W;V++){const B=H[V],se=k[B.materialIndex];if(se&&se.visible){const X=w(C,se,M,S);C.onBeforeShadow(i,C,T,P,N,X,B),i.renderBufferDirect(P,null,N,X,C,B),C.onAfterShadow(i,C,T,P,N,X,B)}}}else if(k.visible){const H=w(C,k,M,S);C.onBeforeShadow(i,C,T,P,N,H,null),i.renderBufferDirect(P,null,N,H,C,null),C.onAfterShadow(i,C,T,P,N,H,null)}}const F=C.children;for(let N=0,k=F.length;N<k;N++)y(F[N],T,P,M,S)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const M=c[P],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Vy={[gu]:vu,[xu]:wu,[Su]:Mu,[ys]:yu,[vu]:gu,[wu]:xu,[Mu]:Su,[yu]:ys};function Gy(i,e){function t(){let G=!1;const te=new Ft;let oe=null;const fe=new Ft(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!G&&(i.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Fe,ot,Ct,Pt){Pt===!0&&(Ue*=Ct,Fe*=Ct,ot*=Ct),te.set(Ue,Fe,ot,Ct),fe.equals(te)===!1&&(i.clearColor(Ue,Fe,ot,Ct),fe.copy(te))},reset:function(){G=!1,oe=null,fe.set(-1,0,0,0)}}}function n(){let G=!1,te=!1,oe=null,fe=null,Ue=null;return{setReversed:function(Fe){if(te!==Fe){const ot=e.get("EXT_clip_control");te?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ct=Ue;Ue=null,this.setClear(Ct)}te=Fe},getReversed:function(){return te},setTest:function(Fe){Fe?le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Fe){oe!==Fe&&!G&&(i.depthMask(Fe),oe=Fe)},setFunc:function(Fe){if(te&&(Fe=Vy[Fe]),fe!==Fe){switch(Fe){case gu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case xu:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Su:i.depthFunc(i.EQUAL);break;case yu:i.depthFunc(i.GEQUAL);break;case wu:i.depthFunc(i.GREATER);break;case Mu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Fe}},setLocked:function(Fe){G=Fe},setClear:function(Fe){Ue!==Fe&&(te&&(Fe=1-Fe),i.clearDepth(Fe),Ue=Fe)},reset:function(){G=!1,oe=null,fe=null,Ue=null,te=!1}}}function r(){let G=!1,te=null,oe=null,fe=null,Ue=null,Fe=null,ot=null,Ct=null,Pt=null;return{setTest:function(st){G||(st?le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(st){te!==st&&!G&&(i.stencilMask(st),te=st)},setFunc:function(st,dn,pn){(oe!==st||fe!==dn||Ue!==pn)&&(i.stencilFunc(st,dn,pn),oe=st,fe=dn,Ue=pn)},setOp:function(st,dn,pn){(Fe!==st||ot!==dn||Ct!==pn)&&(i.stencilOp(st,dn,pn),Fe=st,ot=dn,Ct=pn)},setLocked:function(st){G=st},setClear:function(st){Pt!==st&&(i.clearStencil(st),Pt=st)},reset:function(){G=!1,te=null,oe=null,fe=null,Ue=null,Fe=null,ot=null,Ct=null,Pt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,w=null,y=null,L=null,C=null,T=new Ye(0,0,0),P=0,M=!1,S=null,R=null,F=null,N=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=W>=2);let se=null,X={};const ge=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Pe=new Ft().fromArray(ge),J=new Ft().fromArray(_e);function ee(G,te,oe,fe){const Ue=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(G,Fe),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<oe;ot++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(te+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Fe}const ce={};ce[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(i.DEPTH_TEST),s.setFunc(ys),Xe(!1),Je(Uf),le(i.CULL_FACE),z(Ri);function le(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function be(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function De(G,te){return d[G]!==te?(i.bindFramebuffer(G,te),d[G]=te,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(G,te){let oe=m,fe=!1;if(G){oe=f.get(te),oe===void 0&&(oe=[],f.set(te,oe));const Ue=G.textures;if(oe.length!==Ue.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,ot=Ue.length;Fe<ot;Fe++)oe[Fe]=i.COLOR_ATTACHMENT0+Fe;oe.length=Ue.length,fe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,fe=!0);fe&&i.drawBuffers(oe)}function $e(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const We={[Nn]:i.FUNC_ADD,[V_]:i.FUNC_SUBTRACT,[G_]:i.FUNC_REVERSE_SUBTRACT};We[W_]=i.MIN,We[X_]=i.MAX;const nt={[yl]:i.ZERO,[mi]:i.ONE,[q_]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[J_]:i.SRC_ALPHA_SATURATE,[K_]:i.DST_COLOR,[$_]:i.DST_ALPHA,[Y_]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[j_]:i.ONE_MINUS_DST_COLOR,[Z_]:i.ONE_MINUS_DST_ALPHA,[Q_]:i.CONSTANT_COLOR,[eg]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[ng]:i.ONE_MINUS_CONSTANT_ALPHA};function z(G,te,oe,fe,Ue,Fe,ot,Ct,Pt,st){if(G===Ri){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),G!==ga){if(G!==_||st!==M){if((p!==Nn||y!==Nn)&&(i.blendEquation(i.FUNC_ADD),p=Nn,y=Nn),st)switch(G){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ff:i.blendFunc(i.ONE,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ff:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Of:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,w=null,L=null,C=null,T.set(0,0,0),P=0,_=G,M=st}return}Ue=Ue||te,Fe=Fe||oe,ot=ot||fe,(te!==p||Ue!==y)&&(i.blendEquationSeparate(We[te],We[Ue]),p=te,y=Ue),(oe!==b||fe!==w||Fe!==L||ot!==C)&&(i.blendFuncSeparate(nt[oe],nt[fe],nt[Fe],nt[ot]),b=oe,w=fe,L=Fe,C=ot),(Ct.equals(T)===!1||Pt!==P)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Pt),T.copy(Ct),P=Pt),_=G,M=!1}function je(G,te){G.side===Pn?be(i.CULL_FACE):le(i.CULL_FACE);let oe=G.side===Kn;te&&(oe=!oe),Xe(oe),G.blending===Yr&&G.transparent===!1?z(Ri):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),o.setMask(G.colorWrite);const fe=G.stencilWrite;a.setTest(fe),fe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(G){S!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),S=G)}function Je(G){G!==B_?(le(i.CULL_FACE),G!==R&&(G===Uf?i.cullFace(i.BACK):G===k_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),R=G}function He(G){G!==F&&(V&&i.lineWidth(G),F=G)}function Oe(G,te,oe){G?(le(i.POLYGON_OFFSET_FILL),(N!==te||k!==oe)&&(i.polygonOffset(te,oe),N=te,k=oe)):be(i.POLYGON_OFFSET_FILL)}function Le(G){G?le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+H-1),se!==G&&(i.activeTexture(G),se=G)}function A(G,te,oe){oe===void 0&&(se===null?oe=i.TEXTURE0+H-1:oe=se);let fe=X[oe];fe===void 0&&(fe={type:void 0,texture:void 0},X[oe]=fe),(fe.type!==G||fe.texture!==te)&&(se!==oe&&(i.activeTexture(oe),se=oe),i.bindTexture(G,te||ce[G]),fe.type=G,fe.texture=te)}function Y(){const G=X[se];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(G){Pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function ue(G){J.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function Be(G,te){let oe=c.get(te);oe===void 0&&(oe=new WeakMap,c.set(te,oe));let fe=oe.get(G);fe===void 0&&(fe=i.getUniformBlockIndex(te,G.name),oe.set(G,fe))}function Ge(G,te){const fe=c.get(te).get(G);l.get(te)!==fe&&(i.uniformBlockBinding(te,fe,G.__bindingPointIndex),l.set(te,fe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,X={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,w=null,y=null,L=null,C=null,T=new Ye(0,0,0),P=0,M=!1,S=null,R=null,F=null,N=null,k=null,Pe.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:le,disable:be,bindFramebuffer:De,drawBuffers:Ne,useProgram:$e,setBlending:z,setMaterial:je,setFlipSided:Xe,setCullFace:Je,setLineWidth:He,setPolygonOffset:Oe,setScissorTest:Le,activeTexture:U,bindTexture:A,unbindTexture:Y,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:Me,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Ge,texStorage2D:tt,texStorage3D:de,texSubImage2D:ie,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:me,scissor:Ie,viewport:ue,reset:it}}function Id(i,e,t,n){const r=Wy(n);switch(t){case dm:return i*e;case mm:return i*e;case _m:return i*e*2;case Ah:return i*e/r.components*r.byteLength;case Rh:return i*e/r.components*r.byteLength;case gm:return i*e*2/r.components*r.byteLength;case Ch:return i*e*2/r.components*r.byteLength;case pm:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case Ph:return i*e*4/r.components*r.byteLength;case wl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:case Cu:return Math.max(i,16)*Math.max(e,8)/4;case Eu:case Ru:return Math.max(i,8)*Math.max(e,8)/2;case Pu:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case El:case Yu:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vm:case Zu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ku:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(i){switch(i){case Ci:case um:return{byteLength:1,components:1};case Do:case hm:case Wi:return{byteLength:2,components:1};case Th:case Eh:return{byteLength:2,components:4};case Lo:case bh:case Xn:return{byteLength:4,components:1};case fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xy(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return m?new OffscreenCanvas(U,A):xa("canvas")}function g(U,A,Y){let $=1;const ne=Le(U);if((ne.width>Y||ne.height>Y)&&($=Y/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor($*ne.width),Te=Math.floor($*ne.height);d===void 0&&(d=v(ie,Te));const pe=A?v(ie,Te):d;return pe.width=ie,pe.height=Te,pe.getContext("2d").drawImage(U,0,0,ie,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Te+")."),pe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(U,A,Y,$,ne=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=A;if(A===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),A===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),A===i.RGBA){const Te=ne?$l:Mt.getTransfer($);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=Te===Dt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(U,A){let Y;return U?A===null||A===Lo||A===bs?Y=i.DEPTH24_STENCIL8:A===Xn?Y=i.DEPTH32F_STENCIL8:A===Do&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Lo||A===bs?Y=i.DEPTH_COMPONENT24:A===Xn?Y=i.DEPTH_COMPONENT32F:A===Do&&(Y=i.DEPTH_COMPONENT16),Y}function L(U,A){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==on&&U.minFilter!==gt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function C(U){const A=U.target;A.removeEventListener("dispose",C),P(A),A.isVideoTexture&&u.delete(A)}function T(U){const A=U.target;A.removeEventListener("dispose",T),S(A)}function P(U){const A=n.get(U);if(A.__webglInit===void 0)return;const Y=U.source,$=f.get(Y);if($){const ne=$[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(U),Object.keys($).length===0&&f.delete(Y)}n.remove(U)}function M(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const Y=U.source,$=f.get(Y);delete $[A.__cacheKey],s.memory.textures--}function S(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let ne=0;ne<A.__webglFramebuffer[$].length;ne++)i.deleteFramebuffer(A.__webglFramebuffer[$][ne]);else i.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)i.deleteFramebuffer(A.__webglFramebuffer[$]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=U.textures;for(let $=0,ne=Y.length;$<ne;$++){const ie=n.get(Y[$]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(Y[$])}n.remove(U)}let R=0;function F(){R=0}function N(){const U=R;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),R+=1,U}function k(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function H(U,A){const Y=n.get(U);if(U.isVideoTexture&&He(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,U,A);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function V(U,A){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){J(Y,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function W(U,A){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){J(Y,U,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function B(U,A){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ee(Y,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}const se={[fs]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},X={[on]:i.NEAREST,[fg]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[gt]:i.LINEAR,[pc]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ge={[gg]:i.NEVER,[Mg]:i.ALWAYS,[vg]:i.LESS,[xm]:i.LEQUAL,[xg]:i.EQUAL,[wg]:i.GEQUAL,[Sg]:i.GREATER,[yg]:i.NOTEQUAL};function _e(U,A){if(A.type===Xn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===gt||A.magFilter===pc||A.magFilter===ka||A.magFilter===Gi||A.minFilter===gt||A.minFilter===pc||A.minFilter===ka||A.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,se[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,se[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,se[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,X[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,X[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===on||A.minFilter!==ka&&A.minFilter!==Gi||A.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(U,A){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",C));const $=A.source;let ne=f.get($);ne===void 0&&(ne={},f.set($,ne));const ie=k(A);if(ie!==U.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),ne[ie].usedTimes++;const Te=ne[U.__cacheKey];Te!==void 0&&(ne[U.__cacheKey].usedTimes--,Te.usedTimes===0&&M(A)),U.__cacheKey=ie,U.__webglTexture=ne[ie].texture}return Y}function J(U,A,Y){let $=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=i.TEXTURE_3D);const ne=Pe(U,A),ie=A.source;t.bindTexture($,U.__webglTexture,i.TEXTURE0+Y);const Te=n.get(ie);if(ie.version!==Te.__version||ne===!0){t.activeTexture(i.TEXTURE0+Y);const pe=Mt.getPrimaries(Mt.workingColorSpace),me=A.colorSpace===jt?null:Mt.getPrimaries(A.colorSpace),tt=A.colorSpace===jt||pe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let de=g(A.image,!1,r.maxTextureSize);de=Oe(A,de);const Me=o.convert(A.format,A.colorSpace),Ee=o.convert(A.type);let Ie=w(A.internalFormat,Me,Ee,A.colorSpace,A.isVideoTexture);_e($,A);let ue;const Be=A.mipmaps,Ge=A.isVideoTexture!==!0,it=Te.__version===void 0||ne===!0,G=ie.dataReady,te=L(A,de);if(A.isDepthTexture)Ie=y(A.format===Ts,A.type),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ie,de.width,de.height,0,Me,Ee,null));else if(A.isDataTexture)if(Be.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,te,Ie,Be[0].width,Be[0].height);for(let oe=0,fe=Be.length;oe<fe;oe++)ue=Be[oe],Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ue.width,ue.height,Me,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,oe,Ie,ue.width,ue.height,0,Me,Ee,ue.data);A.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,te,Ie,de.width,de.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Me,Ee,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,de.width,de.height,0,Me,Ee,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ie,Be[0].width,Be[0].height,de.depth);for(let oe=0,fe=Be.length;oe<fe;oe++)if(ue=Be[oe],A.format!==vn)if(Me!==null)if(Ge){if(G)if(A.layerUpdates.size>0){const Ue=Id(ue.width,ue.height,A.format,A.type);for(const Fe of A.layerUpdates){const ot=ue.data.subarray(Fe*Ue/ue.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Fe,ue.width,ue.height,1,Me,ot)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ue.width,ue.height,de.depth,Me,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ie,ue.width,ue.height,de.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ue.width,ue.height,de.depth,Me,Ee,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ie,ue.width,ue.height,de.depth,0,Me,Ee,ue.data)}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,te,Ie,Be[0].width,Be[0].height);for(let oe=0,fe=Be.length;oe<fe;oe++)ue=Be[oe],A.format!==vn?Me!==null?Ge?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ue.width,ue.height,Me,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ie,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ue.width,ue.height,Me,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,oe,Ie,ue.width,ue.height,0,Me,Ee,ue.data)}else if(A.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ie,de.width,de.height,de.depth),G)if(A.layerUpdates.size>0){const oe=Id(de.width,de.height,A.format,A.type);for(const fe of A.layerUpdates){const Ue=de.data.subarray(fe*oe/de.data.BYTES_PER_ELEMENT,(fe+1)*oe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,Me,Ee,Ue)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Ee,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Me,Ee,de.data);else if(A.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,te,Ie,de.width,de.height,de.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Ee,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Me,Ee,de.data);else if(A.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,te,Ie,de.width,de.height);else{let oe=de.width,fe=de.height;for(let Ue=0;Ue<te;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ie,oe,fe,0,Me,Ee,null),oe>>=1,fe>>=1}}else if(Be.length>0){if(Ge&&it){const oe=Le(Be[0]);t.texStorage2D(i.TEXTURE_2D,te,Ie,oe.width,oe.height)}for(let oe=0,fe=Be.length;oe<fe;oe++)ue=Be[oe],Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me,Ee,ue):t.texImage2D(i.TEXTURE_2D,oe,Ie,Me,Ee,ue);A.generateMipmaps=!1}else if(Ge){if(it){const oe=Le(de);t.texStorage2D(i.TEXTURE_2D,te,Ie,oe.width,oe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ee,de)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Me,Ee,de);_(A)&&p($),Te.__version=ie.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ee(U,A,Y){if(A.image.length!==6)return;const $=Pe(U,A),ne=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Y);const ie=n.get(ne);if(ne.version!==ie.__version||$===!0){t.activeTexture(i.TEXTURE0+Y);const Te=Mt.getPrimaries(Mt.workingColorSpace),pe=A.colorSpace===jt?null:Mt.getPrimaries(A.colorSpace),me=A.colorSpace===jt||Te===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const tt=A.isCompressedTexture||A.image[0].isCompressedTexture,de=A.image[0]&&A.image[0].isDataTexture,Me=[];for(let fe=0;fe<6;fe++)!tt&&!de?Me[fe]=g(A.image[fe],!0,r.maxCubemapSize):Me[fe]=de?A.image[fe].image:A.image[fe],Me[fe]=Oe(A,Me[fe]);const Ee=Me[0],Ie=o.convert(A.format,A.colorSpace),ue=o.convert(A.type),Be=w(A.internalFormat,Ie,ue,A.colorSpace),Ge=A.isVideoTexture!==!0,it=ie.__version===void 0||$===!0,G=ne.dataReady;let te=L(A,Ee);_e(i.TEXTURE_CUBE_MAP,A);let oe;if(tt){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Be,Ee.width,Ee.height);for(let fe=0;fe<6;fe++){oe=Me[fe].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){const Fe=oe[Ue];A.format!==vn?Ie!==null?Ge?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,Fe.width,Fe.height,Ie,ue,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,Be,Fe.width,Fe.height,0,Ie,ue,Fe.data)}}}else{if(oe=A.mipmaps,Ge&&it){oe.length>0&&te++;const fe=Le(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Be,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){Ge?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Me[fe].width,Me[fe].height,Ie,ue,Me[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Be,Me[fe].width,Me[fe].height,0,Ie,ue,Me[fe].data);for(let Ue=0;Ue<oe.length;Ue++){const ot=oe[Ue].image[fe].image;Ge?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,ot.width,ot.height,Ie,ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,Be,ot.width,ot.height,0,Ie,ue,ot.data)}}else{Ge?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ie,ue,Me[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Be,Ie,ue,Me[fe]);for(let Ue=0;Ue<oe.length;Ue++){const Fe=oe[Ue];Ge?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,Ie,ue,Fe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,Be,Ie,ue,Fe.image[fe])}}}_(A)&&p(i.TEXTURE_CUBE_MAP),ie.__version=ne.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ce(U,A,Y,$,ne,ie){const Te=o.convert(Y.format,Y.colorSpace),pe=o.convert(Y.type),me=w(Y.internalFormat,Te,pe,Y.colorSpace),tt=n.get(A),de=n.get(Y);if(de.__renderTarget=A,!tt.__hasExternalTextures){const Me=Math.max(1,A.width>>ie),Ee=Math.max(1,A.height>>ie);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,me,Me,Ee,A.depth,0,Te,pe,null):t.texImage2D(ne,ie,me,Me,Ee,0,Te,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Je(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ne,de.__webglTexture,0,Xe(A)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ne,de.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(U,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const $=A.depthTexture,ne=$&&$.isDepthTexture?$.type:null,ie=y(A.stencilBuffer,ne),Te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Xe(A);Je(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ie,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,U)}else{const $=A.textures;for(let ne=0;ne<$.length;ne++){const ie=$[ne],Te=o.convert(ie.format,ie.colorSpace),pe=o.convert(ie.type),me=w(ie.internalFormat,Te,pe,ie.colorSpace),tt=Xe(A);Y&&Je(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,me,A.width,A.height):Je(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,me,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,me,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(A.depthTexture);$.__renderTarget=A,(!$.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const ne=$.__webglTexture,ie=Xe(A);if(A.depthTexture.format===ds)Je(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(A.depthTexture.format===Ts)Je(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function De(U){const A=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=$}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");be(A.__webglFramebuffer,U)}else if(Y){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=i.createRenderbuffer(),le(A.__webglDepthbuffer[$],U,!1);else{const ne=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),le(A.__webglDepthbuffer,U,!1);else{const $=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(U,A,Y){const $=n.get(U);A!==void 0&&ce($.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&De(U)}function $e(U){const A=U.texture,Y=n.get(U),$=n.get(A);U.addEventListener("dispose",T);const ne=U.textures,ie=U.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=A.version,s.memory.textures++),ie){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let me=0;me<A.mipmaps.length;me++)Y.__webglFramebuffer[pe][me]=i.createFramebuffer()}else Y.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let pe=0,me=ne.length;pe<me;pe++){const tt=n.get(ne[pe]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&Je(U)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const me=ne[pe];Y.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const tt=o.convert(me.format,me.colorSpace),de=o.convert(me.type),Me=w(me.internalFormat,tt,de,me.colorSpace,U.isXRRenderTarget===!0),Ee=Xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),_e(i.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(Y.__webglFramebuffer[pe][me],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else ce(Y.__webglFramebuffer[pe],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,me=ne.length;pe<me;pe++){const tt=ne[pe],de=n.get(tt);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),_e(i.TEXTURE_2D,tt),ce(Y.__webglFramebuffer,U,tt,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),_(tt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),_e(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(Y.__webglFramebuffer[me],U,A,i.COLOR_ATTACHMENT0,pe,me);else ce(Y.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,pe,0);_(A)&&p(pe),t.unbindTexture()}U.depthBuffer&&De(U)}function We(U){const A=U.textures;for(let Y=0,$=A.length;Y<$;Y++){const ne=A[Y];if(_(ne)){const ie=b(U),Te=n.get(ne).__webglTexture;t.bindTexture(ie,Te),p(ie),t.unbindTexture()}}}const nt=[],z=[];function je(U){if(U.samples>0){if(Je(U)===!1){const A=U.textures,Y=U.width,$=U.height;let ne=i.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(U),pe=A.length>1;if(pe)for(let me=0;me<A.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<A.length;me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const tt=n.get(A[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,Y,$,0,0,Y,$,ne,i.NEAREST),l===!0&&(nt.length=0,z.length=0,nt.push(i.COLOR_ATTACHMENT0+me),U.depthBuffer&&U.resolveDepthBuffer===!1&&(nt.push(ie),z.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let me=0;me<A.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const tt=n.get(A[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Xe(U){return Math.min(r.maxSamples,U.samples)}function Je(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function He(U){const A=s.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function Oe(U,A){const Y=U.colorSpace,$=U.format,ne=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==$i&&Y!==jt&&(Mt.getTransfer(Y)===Dt?($!==vn||ne!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function Le(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Je}function qy(i,e){function t(n,r=jt){let o;const s=Mt.getTransfer(r);if(n===Ci)return i.UNSIGNED_BYTE;if(n===Th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===um)return i.BYTE;if(n===hm)return i.SHORT;if(n===Do)return i.UNSIGNED_SHORT;if(n===bh)return i.INT;if(n===Lo)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===dm)return i.ALPHA;if(n===pm)return i.RGB;if(n===vn)return i.RGBA;if(n===mm)return i.LUMINANCE;if(n===_m)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Rh)return i.RED_INTEGER;if(n===gm)return i.RG;if(n===Ch)return i.RG_INTEGER;if(n===Ph)return i.RGBA_INTEGER;if(n===wl||n===Ml||n===bl||n===Tl)if(s===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===wl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===wl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eu||n===Au||n===Ru||n===Cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Eu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ru)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Du||n===Lu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Pu||n===Du)return s===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Lu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Uu||n===Fu||n===Nu||n===Ou||n===zu||n===Bu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Iu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Yu||n===$u)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===El)return s===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vm||n===Zu||n===Ku||n===ju)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===El)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Yy extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $y={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($y)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
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

}`;class jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Sn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:Zy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jy extends As{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new jy,_=t.getContextAttributes();let p=null,b=null;const w=[],y=[],L=new et;let C=null;const T=new Gn;T.viewport=new Ft;const P=new Gn;P.viewport=new Ft;const M=[T,P],S=new Yy;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=w[J];return ee===void 0&&(ee=new Hc,w[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=w[J];return ee===void 0&&(ee=new Hc,w[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=w[J];return ee===void 0&&(ee=new Hc,w[J]=ee),ee.getHandSpace()};function N(J){const ee=y.indexOf(J.inputSource);if(ee===-1)return;const ce=w[ee];ce!==void 0&&(ce.update(J.inputSource,J.frame,c||s),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",H);for(let J=0;J<w.length;J++){const ee=y[J];ee!==null&&(y[J]=null,w[J].disconnect(ee))}R=null,F=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Sr(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,ce=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Ts:ds,ce=_.stencil?bs:Lo);const be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Sr(f.textureWidth,f.textureHeight,{format:vn,type:Ci,depthTexture:new kl(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let ee=0;ee<J.removed.length;ee++){const ce=J.removed[ee],le=y.indexOf(ce);le>=0&&(y[le]=null,w[le].disconnect(ce))}for(let ee=0;ee<J.added.length;ee++){const ce=J.added[ee];let le=y.indexOf(ce);if(le===-1){for(let De=0;De<w.length;De++)if(De>=y.length){y.push(ce),le=De;break}else if(y[De]===null){y[De]=ce,le=De;break}if(le===-1)break}const be=w[le];be&&be.connect(ce)}}const V=new q,W=new q;function B(J,ee,ce){V.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const le=V.distanceTo(W),be=ee.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ne=be[14]/(be[10]-1),$e=be[14]/(be[10]+1),We=(be[9]+1)/be[5],nt=(be[9]-1)/be[5],z=(be[8]-1)/be[0],je=(De[8]+1)/De[0],Xe=Ne*z,Je=Ne*je,He=le/(-z+je),Oe=He*-z;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Oe),J.translateZ(He),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Le=Ne+He,U=$e+He,A=Xe-Oe,Y=Je+(le-Oe),$=We*$e/U*Le,ne=nt*$e/U*Le;J.projectionMatrix.makePerspective(A,Y,$,ne,Le,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ee=J.near,ce=J.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),S.near=P.near=T.near=ee,S.far=P.far=T.far=ce,(R!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far),T.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,S.layers.mask=T.layers.mask|P.layers.mask;const le=J.parent,be=S.cameras;se(S,le);for(let De=0;De<be.length;De++)se(be[De],le);be.length===2?B(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),X(J,S,le)};function X(J,ee,ce){ce===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=va*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ge=null;function _e(J,ee){if(u=ee.getViewerPose(c||s),v=ee,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let le=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let De=0;De<ce.length;De++){const Ne=ce[De];let $e=null;if(m!==null)$e=m.getViewport(Ne);else{const nt=d.getViewSubImage(f,Ne);$e=nt.viewport,De===0&&(e.setRenderTargetTextures(b,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(b))}let We=M[De];We===void 0&&(We=new Gn,We.layers.enable(De),We.viewport=new Ft,M[De]=We),We.matrix.fromArray(Ne.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ne.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set($e.x,$e.y,$e.width,$e.height),De===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(We)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const De=d.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&g.init(e,De,r.renderState)}}for(let ce=0;ce<w.length;ce++){const le=y[ce],be=w[ce];le!==null&&be!==void 0&&be.update(le,ee,c||s)}ge&&ge(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Pe=new Dm;Pe.setAnimationLoop(_e),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}}const mo=new hi,Qy=new yt;function ew(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Am(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,y)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,w):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Kn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Kn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,y=b.envMapRotation;w&&(_.envMap.value=w,mo.copy(y),mo.x*=-1,mo.y*=-1,mo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),_.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(mo)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=w*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tw(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const y=w.program;n.uniformBlockBinding(b,y)}function c(b,w){let y=r[b.id];y===void 0&&(v(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",_));const L=w.program;n.updateUBOMapping(b,L);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function u(b){const w=d();b.__bindingPointIndex=w;const y=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const w=r[b.id],y=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,T=y.length;C<T;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,S=P.length;M<S;M++){const R=P[M];if(m(R,C,M,L)===!0){const F=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let H=0;H<N.length;H++){const V=N[H],W=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+k,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,w,y,L){const C=b.value,T=w+"_"+y;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const P=L[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(b){const w=b.uniforms;let y=0;const L=16;for(let T=0,P=w.length;T<P;T++){const M=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,R=M.length;S<R;S++){const F=M[S],N=Array.isArray(F.value)?F.value:[F.value];for(let k=0,H=N.length;k<H;k++){const V=N[k],W=g(V),B=y%L,se=B%W.boundary,X=B+se;y+=se,X!==0&&L-X<W.storage&&(y+=L-X),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=W.storage}}}const C=y%L;return C>0&&(y+=L-C),b.__size=y,b.__cache={},this}function g(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function _(b){const w=b.target;w.removeEventListener("dispose",_);const y=s.indexOf(w.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Jl{constructor(e={}){const{canvas:t=kg(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=qi,this.toneMappingExposure=1;const y=this;let L=!1,C=0,T=0,P=null,M=-1,S=null;const R=new Ft,F=new Ft;let N=null;const k=new Ye(0);let H=0,V=t.width,W=t.height,B=1,se=null,X=null;const ge=new Ft(0,0,V,W),_e=new Ft(0,0,V,W);let Pe=!1;const J=new Pm;let ee=!1,ce=!1;const le=new yt,be=new yt,De=new q,Ne=new Ft,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function nt(){return P===null?B:1}let z=n;function je(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),z===null){const x="webgl2";if(z=je(x,h),z===null)throw je(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Xe,Je,He,Oe,Le,U,A,Y,$,ne,ie,Te,pe,me,tt,de,Me,Ee,Ie,ue,Be,Ge,it,G;function te(){Xe=new aS(z),Xe.init(),Ge=new qy(z,Xe),Je=new tS(z,Xe,e,Ge),He=new Gy(z,Xe),Je.reverseDepthBuffer&&f&&He.buffers.depth.setReversed(!0),Oe=new uS(z),Le=new Ry,U=new Xy(z,Xe,He,Le,Je,Ge,Oe),A=new iS(y),Y=new sS(y),$=new gv(z),it=new Q1(z,$),ne=new lS(z,$,Oe,it),ie=new fS(z,ne,$,Oe),Ie=new hS(z,Je,U),de=new nS(Le),Te=new Ay(y,A,Y,Xe,Je,it,de),pe=new ew(y,Le),me=new Py,tt=new Ny(Xe),Ee=new J1(y,A,Y,He,ie,m,l),Me=new Hy(y,ie,Je),G=new tw(z,Oe,Je,He),ue=new eS(z,Xe,Oe),Be=new cS(z,Xe,Oe),Oe.programs=Te.programs,y.capabilities=Je,y.extensions=Xe,y.properties=Le,y.renderLists=me,y.shadowMap=Me,y.state=He,y.info=Oe}te();const oe=new Jy(y,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const h=Xe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Xe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(V,W,!1))},this.getSize=function(h){return h.set(V,W)},this.setSize=function(h,x,E=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=h,W=x,t.width=Math.floor(h*B),t.height=Math.floor(x*B),E===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(V*B,W*B).floor()},this.setDrawingBufferSize=function(h,x,E){V=h,W=x,B=E,t.width=Math.floor(h*E),t.height=Math.floor(x*E),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(R)},this.getViewport=function(h){return h.copy(ge)},this.setViewport=function(h,x,E,D){h.isVector4?ge.set(h.x,h.y,h.z,h.w):ge.set(h,x,E,D),He.viewport(R.copy(ge).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(_e)},this.setScissor=function(h,x,E,D){h.isVector4?_e.set(h.x,h.y,h.z,h.w):_e.set(h,x,E,D),He.scissor(F.copy(_e).multiplyScalar(B).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(h){He.setScissorTest(Pe=h)},this.setOpaqueSort=function(h){se=h},this.setTransparentSort=function(h){X=h},this.getClearColor=function(h){return h.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(h=!0,x=!0,E=!0){let D=0;if(h){let I=!1;if(P!==null){const O=P.texture.format;I=O===Ph||O===Ch||O===Rh}if(I){const O=P.texture.type,Z=O===Ci||O===Lo||O===Do||O===bs||O===Th||O===Eh,re=Ee.getClearColor(),j=Ee.getClearAlpha(),K=re.r,Q=re.g,ae=re.b;Z?(v[0]=K,v[1]=Q,v[2]=ae,v[3]=j,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=K,g[1]=Q,g[2]=ae,g[3]=j,z.clearBufferiv(z.COLOR,0,g))}else D|=z.COLOR_BUFFER_BIT}x&&(D|=z.DEPTH_BUFFER_BIT),E&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),me.dispose(),tt.dispose(),Le.dispose(),A.dispose(),Y.dispose(),ie.dispose(),it.dispose(),G.dispose(),Te.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",eo),oe.removeEventListener("sessionend",Zi),Bn.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=Oe.autoReset,x=Me.enabled,E=Me.autoUpdate,D=Me.needsUpdate,I=Me.type;te(),Oe.autoReset=h,Me.enabled=x,Me.autoUpdate=E,Me.needsUpdate=D,Me.type=I}function Fe(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function ot(h){const x=h.target;x.removeEventListener("dispose",ot),Ct(x)}function Ct(h){Pt(h),Le.remove(h)}function Pt(h){const x=Le.get(h).programs;x!==void 0&&(x.forEach(function(E){Te.releaseProgram(E)}),h.isShaderMaterial&&Te.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,E,D,I,O){x===null&&(x=$e);const Z=I.isMesh&&I.matrixWorld.determinant()<0,re=Pi(h,x,E,D,I);He.setMaterial(D,Z);let j=E.index,K=1;if(D.wireframe===!0){if(j=ne.getWireframeAttribute(E),j===void 0)return;K=2}const Q=E.drawRange,ae=E.attributes.position;let xe=Q.start*K,ye=(Q.start+Q.count)*K;O!==null&&(xe=Math.max(xe,O.start*K),ye=Math.min(ye,(O.start+O.count)*K)),j!==null?(xe=Math.max(xe,0),ye=Math.min(ye,j.count)):ae!=null&&(xe=Math.max(xe,0),ye=Math.min(ye,ae.count));const Re=ye-xe;if(Re<0||Re===1/0)return;it.setup(I,D,re,E,j);let Ae,we=ue;if(j!==null&&(Ae=$.get(j),we=Be,we.setIndex(Ae)),I.isMesh)D.wireframe===!0?(He.setLineWidth(D.wireframeLinewidth*nt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),He.setLineWidth(ve*nt()),I.isLineSegments?we.setMode(z.LINES):I.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else I.isPoints?we.setMode(z.POINTS):I.isSprite&&we.setMode(z.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)we.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))we.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,at=I._multiDrawCounts,Qe=I._multiDrawCount,pt=j?$.get(j).bytesPerElement:1,vt=Le.get(D).currentProgram.getUniforms();for(let Ze=0;Ze<Qe;Ze++)vt.setValue(z,"_gl_DrawID",Ze),we.render(ve[Ze]/pt,at[Ze])}else if(I.isInstancedMesh)we.renderInstances(xe,Re,I.count);else if(E.isInstancedBufferGeometry){const ve=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,at=Math.min(E.instanceCount,ve);we.renderInstances(xe,Re,at)}else we.render(xe,Re)};function st(h,x,E){h.transparent===!0&&h.side===Pn&&h.forceSinglePass===!1?(h.side=Kn,h.needsUpdate=!0,br(h,x,E),h.side=jr,h.needsUpdate=!0,br(h,x,E),h.side=Pn):br(h,x,E)}this.compile=function(h,x,E=null){E===null&&(E=h),p=tt.get(E),p.init(x),w.push(p),E.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==E&&h.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const O=I.material;if(O)if(Array.isArray(O))for(let Z=0;Z<O.length;Z++){const re=O[Z];st(re,E,I),D.add(re)}else st(O,E,I),D.add(O)}),w.pop(),p=null,D},this.compileAsync=function(h,x,E=null){const D=this.compile(h,x,E);return new Promise(I=>{function O(){if(D.forEach(function(Z){Le.get(Z).currentProgram.isReady()&&D.delete(Z)}),D.size===0){I(h);return}setTimeout(O,10)}Xe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let dn=null;function pn(h){dn&&dn(h)}function eo(){Bn.stop()}function Zi(){Bn.start()}const Bn=new Dm;Bn.setAnimationLoop(pn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(h){dn=h,oe.setAnimationLoop(h),h===null?Bn.stop():Bn.start()},oe.addEventListener("sessionstart",eo),oe.addEventListener("sessionend",Zi),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(x),x=oe.getCamera()),h.isScene===!0&&h.onBeforeRender(y,h,x,P),p=tt.get(h,w.length),p.init(x),w.push(p),be.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),J.setFromProjectionMatrix(be),ce=this.localClippingEnabled,ee=de.init(this.clippingPlanes,ce),_=me.get(h,b.length),_.init(),b.push(_),oe.enabled===!0&&oe.isPresenting===!0){const O=y.xr.getDepthSensingMesh();O!==null&&wr(O,x,-1/0,y.sortObjects)}wr(h,x,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(se,X),We=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,We&&Ee.addToRenderList(_,h),this.info.render.frame++,ee===!0&&de.beginShadows();const E=p.state.shadowsArray;Me.render(E,h,x),ee===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,I=_.transmissive;if(p.setupLights(),x.isArrayCamera){const O=x.cameras;if(I.length>0)for(let Z=0,re=O.length;Z<re;Z++){const j=O[Z];Si(D,I,h,j)}We&&Ee.render(h);for(let Z=0,re=O.length;Z<re;Z++){const j=O[Z];Mr(_,h,j,j.viewport)}}else I.length>0&&Si(D,I,h,x),We&&Ee.render(h),Mr(_,h,x);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(y,h,x),it.resetDefaultState(),M=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],ee===!0&&de.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function wr(h,x,E,D){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)E=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||J.intersectsSprite(h)){D&&Ne.setFromMatrixPosition(h.matrixWorld).applyMatrix4(be);const Z=ie.update(h),re=h.material;re.visible&&_.push(h,Z,re,E,Ne.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||J.intersectsObject(h))){const Z=ie.update(h),re=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ne.copy(h.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Ne.copy(Z.boundingSphere.center)),Ne.applyMatrix4(h.matrixWorld).applyMatrix4(be)),Array.isArray(re)){const j=Z.groups;for(let K=0,Q=j.length;K<Q;K++){const ae=j[K],xe=re[ae.materialIndex];xe&&xe.visible&&_.push(h,Z,xe,E,Ne.z,ae)}}else re.visible&&_.push(h,Z,re,E,Ne.z,null)}}const O=h.children;for(let Z=0,re=O.length;Z<re;Z++)wr(O[Z],x,E,D)}function Mr(h,x,E,D){const I=h.opaque,O=h.transmissive,Z=h.transparent;p.setupLightsView(E),ee===!0&&de.setGlobalState(y.clippingPlanes,E),D&&He.viewport(R.copy(D)),I.length>0&&Ki(I,x,E),O.length>0&&Ki(O,x,E),Z.length>0&&Ki(Z,x,E),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Si(h,x,E,D){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new Sr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Wi:Ci,minFilter:Gi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const O=p.state.transmissionRenderTarget[D.id],Z=D.viewport||R;O.setSize(Z.z,Z.w);const re=y.getRenderTarget();y.setRenderTarget(O),y.getClearColor(k),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),We&&Ee.render(E);const j=y.toneMapping;y.toneMapping=qi;const K=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),ee===!0&&de.setGlobalState(y.clippingPlanes,D),Ki(h,E,D),U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Q=!1;for(let ae=0,xe=x.length;ae<xe;ae++){const ye=x[ae],Re=ye.object,Ae=ye.geometry,we=ye.material,ve=ye.group;if(we.side===Pn&&Re.layers.test(D.layers)){const at=we.side;we.side=Kn,we.needsUpdate=!0,Uo(Re,E,D,Ae,we,ve),we.side=at,we.needsUpdate=!0,Q=!0}}Q===!0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O))}y.setRenderTarget(re),y.setClearColor(k,H),K!==void 0&&(D.viewport=K),y.toneMapping=j}function Ki(h,x,E){const D=x.isScene===!0?x.overrideMaterial:null;for(let I=0,O=h.length;I<O;I++){const Z=h[I],re=Z.object,j=Z.geometry,K=D===null?Z.material:D,Q=Z.group;re.layers.test(E.layers)&&Uo(re,x,E,j,K,Q)}}function Uo(h,x,E,D,I,O){h.onBeforeRender(y,x,E,D,I,O),h.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(y,x,E,D,h,O),I.transparent===!0&&I.side===Pn&&I.forceSinglePass===!1?(I.side=Kn,I.needsUpdate=!0,y.renderBufferDirect(E,x,D,I,h,O),I.side=jr,I.needsUpdate=!0,y.renderBufferDirect(E,x,D,I,h,O),I.side=Pn):y.renderBufferDirect(E,x,D,I,h,O),h.onAfterRender(y,x,E,D,I,O)}function br(h,x,E){x.isScene!==!0&&(x=$e);const D=Le.get(h),I=p.state.lights,O=p.state.shadowsArray,Z=I.state.version,re=Te.getParameters(h,I.state,O,x,E),j=Te.getProgramCacheKey(re);let K=D.programs;D.environment=h.isMeshStandardMaterial?x.environment:null,D.fog=x.fog,D.envMap=(h.isMeshStandardMaterial?Y:A).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,K===void 0&&(h.addEventListener("dispose",ot),K=new Map,D.programs=K);let Q=K.get(j);if(Q!==void 0){if(D.currentProgram===Q&&D.lightsStateVersion===Z)return to(h,re),Q}else re.uniforms=Te.getUniforms(h),h.onBeforeCompile(re,y),Q=Te.acquireProgram(re,j),K.set(j,Q),D.uniforms=re.uniforms;const ae=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ae.clippingPlanes=de.uniform),to(h,re),D.needsLights=fi(h),D.lightsStateVersion=Z,D.needsLights&&(ae.ambientLightColor.value=I.state.ambient,ae.lightProbe.value=I.state.probe,ae.directionalLights.value=I.state.directional,ae.directionalLightShadows.value=I.state.directionalShadow,ae.spotLights.value=I.state.spot,ae.spotLightShadows.value=I.state.spotShadow,ae.rectAreaLights.value=I.state.rectArea,ae.ltc_1.value=I.state.rectAreaLTC1,ae.ltc_2.value=I.state.rectAreaLTC2,ae.pointLights.value=I.state.point,ae.pointLightShadows.value=I.state.pointShadow,ae.hemisphereLights.value=I.state.hemi,ae.directionalShadowMap.value=I.state.directionalShadowMap,ae.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ae.spotShadowMap.value=I.state.spotShadowMap,ae.spotLightMatrix.value=I.state.spotLightMatrix,ae.spotLightMap.value=I.state.spotLightMap,ae.pointShadowMap.value=I.state.pointShadowMap,ae.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=Q,D.uniformsList=null,Q}function ji(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Al.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function to(h,x){const E=Le.get(h);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function Pi(h,x,E,D,I){x.isScene!==!0&&(x=$e),U.resetTextureUnits();const O=x.fog,Z=D.isMeshStandardMaterial?x.environment:null,re=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$i,j=(D.isMeshStandardMaterial?Y:A).get(D.envMap||Z),K=D.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,Q=!!E.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ae=!!E.morphAttributes.position,xe=!!E.morphAttributes.normal,ye=!!E.morphAttributes.color;let Re=qi;D.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Re=y.toneMapping);const Ae=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,we=Ae!==void 0?Ae.length:0,ve=Le.get(D),at=p.state.lights;if(ee===!0&&(ce===!0||h!==S)){const ut=h===S&&D.id===M;de.setState(D,h,ut)}let Qe=!1;D.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==at.state.version||ve.outputColorSpace!==re||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==j||D.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==de.numPlanes||ve.numIntersection!==de.numIntersection)||ve.vertexAlphas!==K||ve.vertexTangents!==Q||ve.morphTargets!==ae||ve.morphNormals!==xe||ve.morphColors!==ye||ve.toneMapping!==Re||ve.morphTargetsCount!==we)&&(Qe=!0):(Qe=!0,ve.__version=D.version);let pt=ve.currentProgram;Qe===!0&&(pt=br(D,x,I));let vt=!1,Ze=!1,Tt=!1;const ct=pt.getUniforms(),xt=ve.uniforms;if(He.useProgram(pt.program)&&(vt=!0,Ze=!0,Tt=!0),D.id!==M&&(M=D.id,Ze=!0),vt||S!==h){He.buffers.depth.getReversed()?(le.copy(h.projectionMatrix),Vg(le),Gg(le),ct.setValue(z,"projectionMatrix",le)):ct.setValue(z,"projectionMatrix",h.projectionMatrix),ct.setValue(z,"viewMatrix",h.matrixWorldInverse);const Jt=ct.map.cameraPosition;Jt!==void 0&&Jt.setValue(z,De.setFromMatrixPosition(h.matrixWorld)),Je.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ct.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),S!==h&&(S=h,Ze=!0,Tt=!0)}if(I.isSkinnedMesh){ct.setOptional(z,I,"bindMatrix"),ct.setOptional(z,I,"bindMatrixInverse");const ut=I.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ct.setValue(z,"boneTexture",ut.boneTexture,U))}I.isBatchedMesh&&(ct.setOptional(z,I,"batchingTexture"),ct.setValue(z,"batchingTexture",I._matricesTexture,U),ct.setOptional(z,I,"batchingIdTexture"),ct.setValue(z,"batchingIdTexture",I._indirectTexture,U),ct.setOptional(z,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(z,"batchingColorTexture",I._colorsTexture,U));const ft=E.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&Ie.update(I,E,pt),(Ze||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,ct.setValue(z,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(xt.envMap.value=j,xt.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&x.environment!==null&&(xt.envMapIntensity.value=x.environmentIntensity),Ze&&(ct.setValue(z,"toneMappingExposure",y.toneMappingExposure),ve.needsLights&&yn(xt,Tt),O&&D.fog===!0&&pe.refreshFogUniforms(xt,O),pe.refreshMaterialUniforms(xt,D,B,W,p.state.transmissionRenderTarget[h.id]),Al.upload(z,ji(ve),xt,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Al.upload(z,ji(ve),xt,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ct.setValue(z,"center",I.center),ct.setValue(z,"modelViewMatrix",I.modelViewMatrix),ct.setValue(z,"normalMatrix",I.normalMatrix),ct.setValue(z,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ut=D.uniformsGroups;for(let Jt=0,mn=ut.length;Jt<mn;Jt++){const wn=ut[Jt];G.update(wn,pt),G.bind(wn,pt)}}return pt}function yn(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function fi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,x,E){Le.get(h.texture).__webglTexture=x,Le.get(h.depthTexture).__webglTexture=E;const D=Le.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=E===void 0,D.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const E=Le.get(h);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,E=0){P=h,C=x,T=E;let D=!0,I=null,O=!1,Z=!1;if(h){const j=Le.get(h);if(j.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(z.FRAMEBUFFER,null),D=!1;else if(j.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if(j.__hasExternalTextures)U.rebindTextures(h,Le.get(h.texture).__webglTexture,Le.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ae=h.depthTexture;if(j.__boundDepthTexture!==ae){if(ae!==null&&Le.has(ae)&&(h.width!==ae.image.width||h.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const K=h.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(Z=!0);const Q=Le.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Q[x])?I=Q[x][E]:I=Q[x],O=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=Le.get(h).__webglMultisampledFramebuffer:Array.isArray(Q)?I=Q[E]:I=Q,R.copy(h.viewport),F.copy(h.scissor),N=h.scissorTest}else R.copy(ge).multiplyScalar(B).floor(),F.copy(_e).multiplyScalar(B).floor(),N=Pe;if(He.bindFramebuffer(z.FRAMEBUFFER,I)&&D&&He.drawBuffers(h,I),He.viewport(R),He.scissor(F),He.setScissorTest(N),O){const j=Le.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+x,j.__webglTexture,E)}else if(Z){const j=Le.get(h.texture),K=x||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.__webglTexture,E||0,K)}M=-1},this.readRenderTargetPixels=function(h,x,E,D,I,O,Z){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=Le.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Z!==void 0&&(re=re[Z]),re){He.bindFramebuffer(z.FRAMEBUFFER,re);try{const j=h.texture,K=j.format,Q=j.type;if(!Je.textureFormatReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-D&&E>=0&&E<=h.height-I&&z.readPixels(x,E,D,I,Ge.convert(K),Ge.convert(Q),O)}finally{const j=P!==null?Le.get(P).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(h,x,E,D,I,O,Z){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=Le.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Z!==void 0&&(re=re[Z]),re){const j=h.texture,K=j.format,Q=j.type;if(!Je.textureFormatReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-D&&E>=0&&E<=h.height-I){He.bindFramebuffer(z.FRAMEBUFFER,re);const ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.bufferData(z.PIXEL_PACK_BUFFER,O.byteLength,z.STREAM_READ),z.readPixels(x,E,D,I,Ge.convert(K),Ge.convert(Q),0);const xe=P!==null?Le.get(P).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,xe);const ye=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hg(z,ye,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,O),z.deleteBuffer(ae),z.deleteSync(ye),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,E=0){h.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-E),I=Math.floor(h.image.width*D),O=Math.floor(h.image.height*D),Z=x!==null?x.x:0,re=x!==null?x.y:0;U.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,E,0,0,Z,re,I,O),He.unbindTexture()},this.copyTextureToTexture=function(h,x,E=null,D=null,I=0){h.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],x=arguments[2],I=arguments[3]||0,E=null);let O,Z,re,j,K,Q,ae,xe,ye;const Re=h.isCompressedTexture?h.mipmaps[I]:h.image;E!==null?(O=E.max.x-E.min.x,Z=E.max.y-E.min.y,re=E.isBox3?E.max.z-E.min.z:1,j=E.min.x,K=E.min.y,Q=E.isBox3?E.min.z:0):(O=Re.width,Z=Re.height,re=Re.depth||1,j=0,K=0,Q=0),D!==null?(ae=D.x,xe=D.y,ye=D.z):(ae=0,xe=0,ye=0);const Ae=Ge.convert(x.format),we=Ge.convert(x.type);let ve;x.isData3DTexture?(U.setTexture3D(x,0),ve=z.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),ve=z.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,x.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,x.unpackAlignment);const at=z.getParameter(z.UNPACK_ROW_LENGTH),Qe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pt=z.getParameter(z.UNPACK_SKIP_PIXELS),vt=z.getParameter(z.UNPACK_SKIP_ROWS),Ze=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Re.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,j),z.pixelStorei(z.UNPACK_SKIP_ROWS,K),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Q);const Tt=h.isDataArrayTexture||h.isData3DTexture,ct=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const xt=Le.get(h),ft=Le.get(x),ut=Le.get(xt.__renderTarget),Jt=Le.get(ft.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,ut.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let mn=0;mn<re;mn++)Tt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(h).__webglTexture,I,Q+mn),h.isDepthTexture?(ct&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(x).__webglTexture,I,ye+mn),z.blitFramebuffer(j,K,O,Z,ae,xe,O,Z,z.DEPTH_BUFFER_BIT,z.NEAREST)):ct?z.copyTexSubImage3D(ve,I,ae,xe,ye+mn,j,K,O,Z):z.copyTexSubImage2D(ve,I,ae,xe,ye+mn,j,K,O,Z);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ct?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(ve,I,ae,xe,ye,O,Z,re,Ae,we,Re.data):x.isCompressedArrayTexture?z.compressedTexSubImage3D(ve,I,ae,xe,ye,O,Z,re,Ae,Re.data):z.texSubImage3D(ve,I,ae,xe,ye,O,Z,re,Ae,we,Re):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,ae,xe,O,Z,Ae,we,Re.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,ae,xe,Re.width,Re.height,Ae,Re.data):z.texSubImage2D(z.TEXTURE_2D,I,ae,xe,O,Z,Ae,we,Re);z.pixelStorei(z.UNPACK_ROW_LENGTH,at),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pt),z.pixelStorei(z.UNPACK_SKIP_ROWS,vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ze),I===0&&x.generateMipmaps&&z.generateMipmap(ve),He.unbindTexture()},this.copyTextureToTexture3D=function(h,x,E=null,D=null,I=0){return h.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,D=arguments[1]||null,h=arguments[2],x=arguments[3],I=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,E,D,I)},this.initRenderTarget=function(h){Le.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),He.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,He.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class Jr extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wa extends Sn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=on,u=on,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An extends $t{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class nw extends Sn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class iw{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const rw=new iw;class Ma{constructor(e){this.manager=e!==void 0?e:rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class ow extends Error{constructor(e,t){super(e),this.response=t}}class sw extends Ma{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Hl.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:r});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ar[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:w,value:y})=>{if(w)p.close();else{g+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,T=u.length;C<T;C++){const P=u[C];P.onProgress&&P.onProgress(L)}p.enqueue(y),b()}},w=>{p.error(w)})}}});return new Response(_)}else throw new ow(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Hl.add(e,c);const u=ar[e];delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class aw extends Ma{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Hl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=xa("img");function l(){u(),Hl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class lw extends Ma{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new wa,a=new sw(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:On,s.wrapT=c.wrapT!==void 0?c.wrapT:On,s.magFilter=c.magFilter!==void 0?c.magFilter:gt,s.minFilter=c.minFilter!==void 0?c.minFilter:gt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Gi),c.mipmapCount===1&&(s.minFilter=gt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class Bi extends Ma{constructor(e){super(e)}load(e,t,n,r){const o=new Sn,s=new aw(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Mo extends yr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var _i=Uint8Array,ls=Uint16Array,cw=Int32Array,Nm=new _i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Om=new _i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),uw=new _i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zm=function(i,e){for(var t=new ls(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new cw(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Bm=zm(Nm,2),km=Bm.b,hw=Bm.r;km[28]=258,hw[258]=28;var fw=zm(Om,0),dw=fw.b,Qu=new ls(32768);for(var Nt=0;Nt<32768;++Nt){var zr=(Nt&43690)>>1|(Nt&21845)<<1;zr=(zr&52428)>>2|(zr&13107)<<2,zr=(zr&61680)>>4|(zr&3855)<<4,Qu[Nt]=((zr&65280)>>8|(zr&255)<<8)>>1}var oa=(function(i,e,t){for(var n=i.length,r=0,o=new ls(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new ls(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new ls(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[Qu[d]>>l]=c}else for(a=new ls(n),r=0;r<n;++r)i[r]&&(a[r]=Qu[s[i[r]-1]++]>>15-i[r]);return a}),ba=new _i(288);for(var Nt=0;Nt<144;++Nt)ba[Nt]=8;for(var Nt=144;Nt<256;++Nt)ba[Nt]=9;for(var Nt=256;Nt<280;++Nt)ba[Nt]=7;for(var Nt=280;Nt<288;++Nt)ba[Nt]=8;var Hm=new _i(32);for(var Nt=0;Nt<32;++Nt)Hm[Nt]=5;var pw=oa(ba,9,1),mw=oa(Hm,5,1),Vc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ti=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Gc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},_w=function(i){return(i+7)/8|0},gw=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new _i(i.subarray(e,t))},vw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ei=function(i,e,t){var n=new Error(e||vw[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ei),!t)throw n;return n},xw=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new _i(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new _i(r*3));var c=function($e){var We=t.length;if($e>We){var nt=new _i(Math.max(We*2,$e));nt.set(t),t=nt}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=Ti(i,d,1);var b=Ti(i,d+1,3);if(d+=3,b)if(b==1)m=pw,v=mw,g=9,_=5;else if(b==2){var C=Ti(i,d,31)+257,T=Ti(i,d+10,15)+4,P=C+Ti(i,d+5,31)+1;d+=14;for(var M=new _i(P),S=new _i(19),R=0;R<T;++R)S[uw[R]]=Ti(i,d+R*3,7);d+=T*3;for(var F=Vc(S),N=(1<<F)-1,k=oa(S,F,1),R=0;R<P;){var H=k[Ti(i,d,N)];d+=H&15;var w=H>>4;if(w<16)M[R++]=w;else{var V=0,W=0;for(w==16?(W=3+Ti(i,d,3),d+=2,V=M[R-1]):w==17?(W=3+Ti(i,d,7),d+=3):w==18&&(W=11+Ti(i,d,127),d+=7);W--;)M[R++]=V}}var B=M.subarray(0,C),se=M.subarray(C);g=Vc(B),_=Vc(se),m=oa(B,g,1),v=oa(se,_,1)}else Ei(1);else{var w=_w(d)+4,y=i[w-4]|i[w-3]<<8,L=w+y;if(L>r){l&&Ei(0);break}a&&c(f+y),t.set(i.subarray(w,L),f),e.b=f+=y,e.p=d=L*8,e.f=u;continue}if(d>p){l&&Ei(0);break}}a&&c(f+131072);for(var X=(1<<g)-1,ge=(1<<_)-1,_e=d;;_e=d){var V=m[Gc(i,d)&X],Pe=V>>4;if(d+=V&15,d>p){l&&Ei(0);break}if(V||Ei(2),Pe<256)t[f++]=Pe;else if(Pe==256){_e=d,m=null;break}else{var J=Pe-254;if(Pe>264){var R=Pe-257,ee=Nm[R];J=Ti(i,d,(1<<ee)-1)+km[R],d+=ee}var ce=v[Gc(i,d)&ge],le=ce>>4;ce||Ei(3),d+=ce&15;var se=dw[le];if(le>3){var ee=Om[le];se+=Gc(i,d)&(1<<ee)-1,d+=ee}if(d>p){l&&Ei(0);break}a&&c(f+131072);var be=f+J;if(f<se){var De=o-se,Ne=Math.min(se,be);for(De+f<0&&Ei(3);f<Ne;++f)t[f]=n[De+f]}for(;f<be;++f)t[f]=t[f-se]}}e.l=m,e.p=_e,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?gw(t,0,f):t.subarray(0,f)},Sw=new _i(0),yw=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ei(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ei(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function al(i,e){return xw(i.subarray(yw(i),-4),{i:2},e,e)}var ww=typeof TextDecoder<"u"&&new TextDecoder,Mw=0;try{ww.decode(Sw,{stream:!0}),Mw=1}catch{}class bw extends lw{constructor(e){super(e),this.type=Wi}parse(e){const M=Math.pow(2.7182818,2.2);function S(h,x){let E=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(x[E++]=I);const D=E-1;for(;E<65536;)x[E++]=0;return D}function R(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const F={l:0,c:0,lc:0};function N(h,x,E,D,I){for(;E<h;)x=x<<8|ue(D,I),E+=8;E-=h,F.l=x>>E&(1<<h)-1,F.c=x,F.lc=E}const k=new Array(59);function H(h){for(let E=0;E<=58;++E)k[E]=0;for(let E=0;E<65537;++E)k[h[E]]+=1;let x=0;for(let E=58;E>0;--E){const D=x+k[E]>>1;k[E]=x,x=D}for(let E=0;E<65537;++E){const D=h[E];D>0&&(h[E]=D|k[D]++<<6)}}function V(h,x,E,D,I,O){const Z=x;let re=0,j=0;for(;D<=I;D++){if(Z.value-x.value>E)return!1;N(6,re,j,h,Z);const K=F.l;if(re=F.c,j=F.lc,O[D]=K,K==63){if(Z.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");N(8,re,j,h,Z);let Q=F.l+6;if(re=F.c,j=F.lc,D+Q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)O[D++]=0;D--}else if(K>=59){let Q=K-59+2;if(D+Q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)O[D++]=0;D--}}H(O)}function W(h){return h&63}function B(h){return h>>6}function se(h,x,E,D){for(;x<=E;x++){const I=B(h[x]),O=W(h[x]);if(I>>O)throw new Error("Invalid table entry");if(O>14){const Z=D[I>>O-14];if(Z.len)throw new Error("Invalid table entry");if(Z.lit++,Z.p){const re=Z.p;Z.p=new Array(Z.lit);for(let j=0;j<Z.lit-1;++j)Z.p[j]=re[j]}else Z.p=new Array(1);Z.p[Z.lit-1]=x}else if(O){let Z=0;for(let re=1<<14-O;re>0;re--){const j=D[(I<<14-O)+Z];if(j.len||j.p)throw new Error("Invalid table entry");j.len=O,j.lit=x,Z++}}}return!0}const X={c:0,lc:0};function ge(h,x,E,D){h=h<<8|ue(E,D),x+=8,X.c=h,X.lc=x}const _e={c:0,lc:0};function Pe(h,x,E,D,I,O,Z,re,j){if(h==x){D<8&&(ge(E,D,I,O),E=X.c,D=X.lc),D-=8;let K=E>>D;if(K=new Uint8Array([K])[0],re.value+K>j)return!1;const Q=Z[re.value-1];for(;K-- >0;)Z[re.value++]=Q}else if(re.value<j)Z[re.value++]=h;else return!1;_e.c=E,_e.lc=D}function J(h){return h&65535}function ee(h){const x=J(h);return x>32767?x-65536:x}const ce={a:0,b:0};function le(h,x){const E=ee(h),I=ee(x),O=E+(I&1)+(I>>1),Z=O,re=O-I;ce.a=Z,ce.b=re}function be(h,x){const E=J(h),D=J(x),I=E-(D>>1)&65535,O=D+I-32768&65535;ce.a=O,ce.b=I}function De(h,x,E,D,I,O,Z){const re=Z<16384,j=E>I?I:E;let K=1,Q,ae;for(;K<=j;)K<<=1;for(K>>=1,Q=K,K>>=1;K>=1;){ae=0;const xe=ae+O*(I-Q),ye=O*K,Re=O*Q,Ae=D*K,we=D*Q;let ve,at,Qe,pt;for(;ae<=xe;ae+=Re){let vt=ae;const Ze=ae+D*(E-Q);for(;vt<=Ze;vt+=we){const Tt=vt+Ae,ct=vt+ye,xt=ct+Ae;re?(le(h[vt+x],h[ct+x]),ve=ce.a,Qe=ce.b,le(h[Tt+x],h[xt+x]),at=ce.a,pt=ce.b,le(ve,at),h[vt+x]=ce.a,h[Tt+x]=ce.b,le(Qe,pt),h[ct+x]=ce.a,h[xt+x]=ce.b):(be(h[vt+x],h[ct+x]),ve=ce.a,Qe=ce.b,be(h[Tt+x],h[xt+x]),at=ce.a,pt=ce.b,be(ve,at),h[vt+x]=ce.a,h[Tt+x]=ce.b,be(Qe,pt),h[ct+x]=ce.a,h[xt+x]=ce.b)}if(E&K){const Tt=vt+ye;re?le(h[vt+x],h[Tt+x]):be(h[vt+x],h[Tt+x]),ve=ce.a,h[Tt+x]=ce.b,h[vt+x]=ve}}if(I&K){let vt=ae;const Ze=ae+D*(E-Q);for(;vt<=Ze;vt+=we){const Tt=vt+Ae;re?le(h[vt+x],h[Tt+x]):be(h[vt+x],h[Tt+x]),ve=ce.a,h[Tt+x]=ce.b,h[vt+x]=ve}}Q=K,K>>=1}return ae}function Ne(h,x,E,D,I,O,Z,re,j){let K=0,Q=0;const ae=Z,xe=Math.trunc(D.value+(I+7)/8);for(;D.value<xe;)for(ge(K,Q,E,D),K=X.c,Q=X.lc;Q>=14;){const Re=K>>Q-14&16383,Ae=x[Re];if(Ae.len)Q-=Ae.len,Pe(Ae.lit,O,K,Q,E,D,re,j,ae),K=_e.c,Q=_e.lc;else{if(!Ae.p)throw new Error("hufDecode issues");let we;for(we=0;we<Ae.lit;we++){const ve=W(h[Ae.p[we]]);for(;Q<ve&&D.value<xe;)ge(K,Q,E,D),K=X.c,Q=X.lc;if(Q>=ve&&B(h[Ae.p[we]])==(K>>Q-ve&(1<<ve)-1)){Q-=ve,Pe(Ae.p[we],O,K,Q,E,D,re,j,ae),K=_e.c,Q=_e.lc;break}}if(we==Ae.lit)throw new Error("hufDecode issues")}}const ye=8-I&7;for(K>>=ye,Q-=ye;Q>0;){const Re=x[K<<14-Q&16383];if(Re.len)Q-=Re.len,Pe(Re.lit,O,K,Q,E,D,re,j,ae),K=_e.c,Q=_e.lc;else throw new Error("hufDecode issues")}return!0}function $e(h,x,E,D,I,O){const Z={value:0},re=E.value,j=Ie(x,E),K=Ie(x,E);E.value+=4;const Q=Ie(x,E);if(E.value+=4,j<0||j>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ae=new Array(65537),xe=new Array(16384);R(xe);const ye=D-(E.value-re);if(V(h,E,ye,j,K,ae),Q>8*(D-(E.value-re)))throw new Error("Something wrong with hufUncompress");se(ae,j,K,xe),Ne(ae,xe,h,E,Q,K,O,I,Z)}function We(h,x,E){for(let D=0;D<E;++D)x[D]=h[x[D]]}function nt(h){for(let x=1;x<h.length;x++){const E=h[x-1]+h[x]-128;h[x]=E}}function z(h,x){let E=0,D=Math.floor((h.length+1)/2),I=0;const O=h.length-1;for(;!(I>O||(x[I++]=h[E++],I>O));)x[I++]=h[D++]}function je(h){let x=h.byteLength;const E=new Array;let D=0;const I=new DataView(h);for(;x>0;){const O=I.getInt8(D++);if(O<0){const Z=-O;x-=Z+1;for(let re=0;re<Z;re++)E.push(I.getUint8(D++))}else{const Z=O;x-=2;const re=I.getUint8(D++);for(let j=0;j<Z+1;j++)E.push(re)}}return E}function Xe(h,x,E,D,I,O){let Z=new DataView(O.buffer);const re=E[h.idx[0]].width,j=E[h.idx[0]].height,K=3,Q=Math.floor(re/8),ae=Math.ceil(re/8),xe=Math.ceil(j/8),ye=re-(ae-1)*8,Re=j-(xe-1)*8,Ae={value:0},we=new Array(K),ve=new Array(K),at=new Array(K),Qe=new Array(K),pt=new Array(K);for(let Ze=0;Ze<K;++Ze)pt[Ze]=x[h.idx[Ze]],we[Ze]=Ze<1?0:we[Ze-1]+ae*xe,ve[Ze]=new Float32Array(64),at[Ze]=new Uint16Array(64),Qe[Ze]=new Uint16Array(ae*64);for(let Ze=0;Ze<xe;++Ze){let Tt=8;Ze==xe-1&&(Tt=Re);let ct=8;for(let ft=0;ft<ae;++ft){ft==ae-1&&(ct=ye);for(let ut=0;ut<K;++ut)at[ut].fill(0),at[ut][0]=I[we[ut]++],Je(Ae,D,at[ut]),He(at[ut],ve[ut]),Oe(ve[ut]);Le(ve);for(let ut=0;ut<K;++ut)U(ve[ut],Qe[ut],ft*64)}let xt=0;for(let ft=0;ft<K;++ft){const ut=E[h.idx[ft]].type;for(let Jt=8*Ze;Jt<8*Ze+Tt;++Jt){xt=pt[ft][Jt];for(let mn=0;mn<Q;++mn){const wn=mn*64+(Jt&7)*8;Z.setUint16(xt+0*ut,Qe[ft][wn+0],!0),Z.setUint16(xt+2*ut,Qe[ft][wn+1],!0),Z.setUint16(xt+4*ut,Qe[ft][wn+2],!0),Z.setUint16(xt+6*ut,Qe[ft][wn+3],!0),Z.setUint16(xt+8*ut,Qe[ft][wn+4],!0),Z.setUint16(xt+10*ut,Qe[ft][wn+5],!0),Z.setUint16(xt+12*ut,Qe[ft][wn+6],!0),Z.setUint16(xt+14*ut,Qe[ft][wn+7],!0),xt+=16*ut}}if(Q!=ae)for(let Jt=8*Ze;Jt<8*Ze+Tt;++Jt){const mn=pt[ft][Jt]+8*Q*2*ut,wn=Q*64+(Jt&7)*8;for(let Tr=0;Tr<ct;++Tr)Z.setUint16(mn+Tr*2*ut,Qe[ft][wn+Tr],!0)}}}const vt=new Uint16Array(re);Z=new DataView(O.buffer);for(let Ze=0;Ze<K;++Ze){E[h.idx[Ze]].decoded=!0;const Tt=E[h.idx[Ze]].type;if(E[Ze].type==2)for(let ct=0;ct<j;++ct){const xt=pt[Ze][ct];for(let ft=0;ft<re;++ft)vt[ft]=Z.getUint16(xt+ft*2*Tt,!0);for(let ft=0;ft<re;++ft)Z.setFloat32(xt+ft*2*Tt,te(vt[ft]),!0)}}}function Je(h,x,E){let D,I=1;for(;I<64;)D=x[h.value],D==65280?I=64:D>>8==255?I+=D&255:(E[I]=D,I++),h.value++}function He(h,x){x[0]=te(h[0]),x[1]=te(h[1]),x[2]=te(h[5]),x[3]=te(h[6]),x[4]=te(h[14]),x[5]=te(h[15]),x[6]=te(h[27]),x[7]=te(h[28]),x[8]=te(h[2]),x[9]=te(h[4]),x[10]=te(h[7]),x[11]=te(h[13]),x[12]=te(h[16]),x[13]=te(h[26]),x[14]=te(h[29]),x[15]=te(h[42]),x[16]=te(h[3]),x[17]=te(h[8]),x[18]=te(h[12]),x[19]=te(h[17]),x[20]=te(h[25]),x[21]=te(h[30]),x[22]=te(h[41]),x[23]=te(h[43]),x[24]=te(h[9]),x[25]=te(h[11]),x[26]=te(h[18]),x[27]=te(h[24]),x[28]=te(h[31]),x[29]=te(h[40]),x[30]=te(h[44]),x[31]=te(h[53]),x[32]=te(h[10]),x[33]=te(h[19]),x[34]=te(h[23]),x[35]=te(h[32]),x[36]=te(h[39]),x[37]=te(h[45]),x[38]=te(h[52]),x[39]=te(h[54]),x[40]=te(h[20]),x[41]=te(h[22]),x[42]=te(h[33]),x[43]=te(h[38]),x[44]=te(h[46]),x[45]=te(h[51]),x[46]=te(h[55]),x[47]=te(h[60]),x[48]=te(h[21]),x[49]=te(h[34]),x[50]=te(h[37]),x[51]=te(h[47]),x[52]=te(h[50]),x[53]=te(h[56]),x[54]=te(h[59]),x[55]=te(h[61]),x[56]=te(h[35]),x[57]=te(h[36]),x[58]=te(h[48]),x[59]=te(h[49]),x[60]=te(h[57]),x[61]=te(h[58]),x[62]=te(h[62]),x[63]=te(h[63])}function Oe(h){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),Z=.5*Math.cos(3*3.14159/8),re=.5*Math.cos(7*3.14159/16),j=new Array(4),K=new Array(4),Q=new Array(4),ae=new Array(4);for(let xe=0;xe<8;++xe){const ye=xe*8;j[0]=D*h[ye+2],j[1]=Z*h[ye+2],j[2]=D*h[ye+6],j[3]=Z*h[ye+6],K[0]=E*h[ye+1]+I*h[ye+3]+O*h[ye+5]+re*h[ye+7],K[1]=I*h[ye+1]-re*h[ye+3]-E*h[ye+5]-O*h[ye+7],K[2]=O*h[ye+1]-E*h[ye+3]+re*h[ye+5]+I*h[ye+7],K[3]=re*h[ye+1]-O*h[ye+3]+I*h[ye+5]-E*h[ye+7],Q[0]=x*(h[ye+0]+h[ye+4]),Q[3]=x*(h[ye+0]-h[ye+4]),Q[1]=j[0]+j[3],Q[2]=j[1]-j[2],ae[0]=Q[0]+Q[1],ae[1]=Q[3]+Q[2],ae[2]=Q[3]-Q[2],ae[3]=Q[0]-Q[1],h[ye+0]=ae[0]+K[0],h[ye+1]=ae[1]+K[1],h[ye+2]=ae[2]+K[2],h[ye+3]=ae[3]+K[3],h[ye+4]=ae[3]-K[3],h[ye+5]=ae[2]-K[2],h[ye+6]=ae[1]-K[1],h[ye+7]=ae[0]-K[0]}for(let xe=0;xe<8;++xe)j[0]=D*h[16+xe],j[1]=Z*h[16+xe],j[2]=D*h[48+xe],j[3]=Z*h[48+xe],K[0]=E*h[8+xe]+I*h[24+xe]+O*h[40+xe]+re*h[56+xe],K[1]=I*h[8+xe]-re*h[24+xe]-E*h[40+xe]-O*h[56+xe],K[2]=O*h[8+xe]-E*h[24+xe]+re*h[40+xe]+I*h[56+xe],K[3]=re*h[8+xe]-O*h[24+xe]+I*h[40+xe]-E*h[56+xe],Q[0]=x*(h[xe]+h[32+xe]),Q[3]=x*(h[xe]-h[32+xe]),Q[1]=j[0]+j[3],Q[2]=j[1]-j[2],ae[0]=Q[0]+Q[1],ae[1]=Q[3]+Q[2],ae[2]=Q[3]-Q[2],ae[3]=Q[0]-Q[1],h[0+xe]=ae[0]+K[0],h[8+xe]=ae[1]+K[1],h[16+xe]=ae[2]+K[2],h[24+xe]=ae[3]+K[3],h[32+xe]=ae[3]-K[3],h[40+xe]=ae[2]-K[2],h[48+xe]=ae[1]-K[1],h[56+xe]=ae[0]-K[0]}function Le(h){for(let x=0;x<64;++x){const E=h[0][x],D=h[1][x],I=h[2][x];h[0][x]=E+1.5747*I,h[1][x]=E-.1873*D-.4682*I,h[2][x]=E+1.8556*D}}function U(h,x,E){for(let D=0;D<64;++D)x[E+D]=id.toHalfFloat(A(h[D]))}function A(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(M,Math.abs(h)-1)}function Y(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function $(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(je(x)),D=new Uint8Array(E.length);return nt(E),z(E,D),new DataView(D.buffer)}function ne(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=al(x),D=new Uint8Array(E.length);return nt(E),z(E,D),new DataView(D.buffer)}function ie(h){const x=h.viewer,E={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let O=0;const Z=new Array(h.inputChannels.length);for(let Re=0,Ae=h.inputChannels.length;Re<Ae;Re++)Z[Re]={},Z[Re].start=O,Z[Re].end=Z[Re].start,Z[Re].nx=h.columns,Z[Re].ny=h.lines,Z[Re].size=h.type,O+=Z[Re].nx*Z[Re].ny*Z[Re].size;const re=oe(x,E),j=oe(x,E);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(re<=j)for(let Re=0;Re<j-re+1;Re++)I[Re+re]=Be(x,E);const K=new Uint16Array(65536),Q=S(I,K),ae=Ie(x,E);$e(h.array,x,E,ae,D,O);for(let Re=0;Re<h.inputChannels.length;++Re){const Ae=Z[Re];for(let we=0;we<Z[Re].size;++we)De(D,Ae.start+we,Ae.nx,Ae.size,Ae.ny,Ae.nx*Ae.size,Q)}We(K,D,O);let xe=0;const ye=new Uint8Array(D.buffer.byteLength);for(let Re=0;Re<h.lines;Re++)for(let Ae=0;Ae<h.inputChannels.length;Ae++){const we=Z[Ae],ve=we.nx*we.size,at=new Uint8Array(D.buffer,we.end*2,ve*2);ye.set(at,xe),xe+=ve*2,we.end+=ve}return new DataView(ye.buffer)}function Te(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=al(x),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(D),O=new DataView(I);let Z=0,re=0;const j=new Array(4);for(let K=0;K<h.lines;K++)for(let Q=0;Q<h.inputChannels.length;Q++){let ae=0;switch(h.inputChannels[Q].pixelType){case 1:j[0]=Z,j[1]=j[0]+h.columns,Z=j[1]+h.columns;for(let ye=0;ye<h.columns;++ye){const Re=E[j[0]++]<<8|E[j[1]++];ae+=Re,O.setUint16(re,ae,!0),re+=2}break;case 2:j[0]=Z,j[1]=j[0]+h.columns,j[2]=j[1]+h.columns,Z=j[2]+h.columns;for(let ye=0;ye<h.columns;++ye){const Re=E[j[0]++]<<24|E[j[1]++]<<16|E[j[2]++]<<8;ae+=Re,O.setUint32(re,ae,!0),re+=4}break}}return O}function pe(h){const x=h.viewer,E={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Ge(x,E),unknownUncompressedSize:Ge(x,E),unknownCompressedSize:Ge(x,E),acCompressedSize:Ge(x,E),dcCompressedSize:Ge(x,E),rleCompressedSize:Ge(x,E),rleUncompressedSize:Ge(x,E),rleRawSize:Ge(x,E),totalAcUncompressedCount:Ge(x,E),totalDcUncompressedCount:Ge(x,E),acCompression:Ge(x,E)};if(I.version<2)throw new Error("EXRLoader.parse: "+yn.compression+" version "+I.version+" is unsupported");const O=new Array;let Z=oe(x,E)-2;for(;Z>0;){const Ae=me(x.buffer,E),we=Be(x,E),ve=we>>2&3,at=(we>>4)-1,Qe=new Int8Array([at])[0],pt=Be(x,E);O.push({name:Ae,index:Qe,type:pt,compression:ve}),Z-=Ae.length+3}const re=yn.channels,j=new Array(h.inputChannels.length);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const we=j[Ae]={},ve=re[Ae];we.name=ve.name,we.compression=0,we.decoded=!1,we.type=ve.pixelType,we.pLinear=ve.pLinear,we.width=h.columns,we.height=h.lines}const K={idx:new Array(3)};for(let Ae=0;Ae<h.inputChannels.length;++Ae){const we=j[Ae];for(let ve=0;ve<O.length;++ve){const at=O[ve];we.name==at.name&&(we.compression=at.compression,at.index>=0&&(K.idx[at.index]=Ae),we.offset=Ae)}}let Q,ae,xe;if(I.acCompressedSize>0)switch(I.acCompression){case 0:Q=new Uint16Array(I.totalAcUncompressedCount),$e(h.array,x,E,I.acCompressedSize,Q,I.totalAcUncompressedCount);break;case 1:const Ae=h.array.slice(E.value,E.value+I.totalAcUncompressedCount),we=al(Ae);Q=new Uint16Array(we.buffer),E.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Ae={array:h.array,offset:E,size:I.dcCompressedSize};ae=new Uint16Array(ne(Ae).buffer),E.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Ae=h.array.slice(E.value,E.value+I.rleCompressedSize),we=al(Ae);xe=je(we.buffer),E.value+=I.rleCompressedSize}let ye=0;const Re=new Array(j.length);for(let Ae=0;Ae<Re.length;++Ae)Re[Ae]=new Array;for(let Ae=0;Ae<h.lines;++Ae)for(let we=0;we<j.length;++we)Re[we].push(ye),ye+=j[we].width*h.type*2;Xe(K,Re,j,Q,ae,D);for(let Ae=0;Ae<j.length;++Ae){const we=j[Ae];if(!we.decoded)switch(we.compression){case 2:let ve=0,at=0;for(let Qe=0;Qe<h.lines;++Qe){let pt=Re[Ae][ve];for(let vt=0;vt<we.width;++vt){for(let Ze=0;Ze<2*we.type;++Ze)D[pt++]=xe[at+Ze*we.width*we.height];at++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function me(h,x){const E=new Uint8Array(h);let D=0;for(;E[x.value+D]!=0;)D+=1;const I=new TextDecoder().decode(E.slice(x.value,x.value+D));return x.value=x.value+D+1,I}function tt(h,x,E){const D=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+E));return x.value=x.value+E,D}function de(h,x){const E=Ee(h,x),D=Ie(h,x);return[E,D]}function Me(h,x){const E=Ie(h,x),D=Ie(h,x);return[E,D]}function Ee(h,x){const E=h.getInt32(x.value,!0);return x.value=x.value+4,E}function Ie(h,x){const E=h.getUint32(x.value,!0);return x.value=x.value+4,E}function ue(h,x){const E=h[x.value];return x.value=x.value+1,E}function Be(h,x){const E=h.getUint8(x.value);return x.value=x.value+1,E}const Ge=function(h,x){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(x.value,!0)):E=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,E};function it(h,x){const E=h.getFloat32(x.value,!0);return x.value+=4,E}function G(h,x){return id.toHalfFloat(it(h,x))}function te(h){const x=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function oe(h,x){const E=h.getUint16(x.value,!0);return x.value+=2,E}function fe(h,x){return te(oe(h,x))}function Ue(h,x,E,D){const I=E.value,O=[];for(;E.value<I+D-1;){const Z=me(x,E),re=Ee(h,E),j=Be(h,E);E.value+=3;const K=Ee(h,E),Q=Ee(h,E);O.push({name:Z,pixelType:re,pLinear:j,xSampling:K,ySampling:Q})}return E.value+=1,O}function Fe(h,x){const E=it(h,x),D=it(h,x),I=it(h,x),O=it(h,x),Z=it(h,x),re=it(h,x),j=it(h,x),K=it(h,x);return{redX:E,redY:D,greenX:I,greenY:O,blueX:Z,blueY:re,whiteX:j,whiteY:K}}function ot(h,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Be(h,x);return E[D]}function Ct(h,x){const E=Ee(h,x),D=Ee(h,x),I=Ee(h,x),O=Ee(h,x);return{xMin:E,yMin:D,xMax:I,yMax:O}}function Pt(h,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Be(h,x);return E[D]}function st(h,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Be(h,x);return E[D]}function dn(h,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],I=Ie(h,x),O=Ie(h,x),Z=Be(h,x);return{xSize:I,ySize:O,levelMode:E[Z&15],roundingMode:D[Z>>4]}}function pn(h,x){const E=it(h,x),D=it(h,x);return[E,D]}function eo(h,x){const E=it(h,x),D=it(h,x),I=it(h,x);return[E,D,I]}function Zi(h,x,E,D,I){if(D==="string"||D==="stringvector"||D==="iccProfile")return tt(x,E,I);if(D==="chlist")return Ue(h,x,E,I);if(D==="chromaticities")return Fe(h,E);if(D==="compression")return ot(h,E);if(D==="box2i")return Ct(h,E);if(D==="envmap")return st(h,E);if(D==="tiledesc")return dn(h,E);if(D==="lineOrder")return Pt(h,E);if(D==="float")return it(h,E);if(D==="v2f")return pn(h,E);if(D==="v3f")return eo(h,E);if(D==="int")return Ee(h,E);if(D==="rational")return de(h,E);if(D==="timecode")return Me(h,E);if(D==="preview")return E.value+=I,"skipped";E.value+=I}function Bn(h,x){const E=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function wr(h,x,E){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=Bn(Math.max(x,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function Mr(h,x,E,D){const I=new Array(h);for(let O=0;O<h;O++){const Z=1<<O;let re=x/Z|0;D=="ROUND_UP"&&re*Z<x&&(re+=1);const j=Math.max(re,1);I[O]=(j+E-1)/E|0}return I}function Si(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.tileCount;D++){const I=Ee(h.viewer,x),O=Ee(h.viewer,x);x.value+=8,h.size=Ie(h.viewer,x);const Z=I*h.blockWidth,re=O*h.blockHeight;h.columns=Z+h.blockWidth>h.width?h.width-Z:h.blockWidth,h.lines=re+h.blockHeight>h.height?h.height-re:h.blockHeight;const j=h.columns*h.totalBytes,Q=h.size<h.lines*j?h.uncompress(h):Y(h);x.value+=h.size;for(let ae=0;ae<h.lines;ae++){const xe=ae*h.columns*h.totalBytes;for(let ye=0;ye<h.inputChannels.length;ye++){const Re=yn.channels[ye].name,Ae=h.channelByteOffsets[Re]*h.columns,we=h.decodeChannels[Re];if(we===void 0)continue;E.value=xe+Ae;const ve=(h.height-(1+re+ae))*h.outLineWidth;for(let at=0;at<h.columns;at++){const Qe=ve+(at+Z)*h.outputChannels+we;h.byteArray[Qe]=h.getter(Q,E)}}}}}function Ki(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const I=Ee(h.viewer,x)-yn.dataWindow.yMin;h.size=Ie(h.viewer,x),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const O=h.columns*h.totalBytes,re=h.size<h.lines*O?h.uncompress(h):Y(h);x.value+=h.size;for(let j=0;j<h.blockHeight;j++){const K=D*h.blockHeight,Q=j+h.scanOrder(K);if(Q>=h.height)continue;const ae=j*O,xe=(h.height-1-Q)*h.outLineWidth;for(let ye=0;ye<h.inputChannels.length;ye++){const Re=yn.channels[ye].name,Ae=h.channelByteOffsets[Re]*h.columns,we=h.decodeChannels[Re];if(we!==void 0){E.value=ae+Ae;for(let ve=0;ve<h.columns;ve++){const at=xe+ve*h.outputChannels+we;h.byteArray[at]=h.getter(re,E)}}}}}}function Uo(h,x,E){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const I=h.getUint8(5);D.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},E.value=8;let O=!0;for(;O;){const Z=me(x,E);if(Z==0)O=!1;else{const re=me(x,E),j=Ie(h,E),K=Zi(h,x,E,re,j);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${re}'.`):D[Z]=K}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function br(h,x,E,D,I){const O={size:0,viewer:x,array:E,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:$i};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=Y;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=$;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ne;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ne;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ie;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Te;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=pe;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const Z={};for(const Q of h.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":Z[Q.name]=!0,O.type=Q.pixelType}let re=!1;if(Z.R&&Z.G&&Z.B)re=!Z.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(Z.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(I){case Xn:O.getter=fe;break;case Wi:O.getter=oe;break}else if(O.type==2)switch(I){case Xn:O.getter=it;break;case Wi:O.getter=G}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const j=O.width*O.height*O.outputChannels;switch(I){case Xn:O.byteArray=new Float32Array(j),re&&O.byteArray.fill(1,0,j);break;case Wi:O.byteArray=new Uint16Array(j),re&&O.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let K=0;for(const Q of h.channels)O.decodeChannels[Q.name]!==void 0&&(O.channelByteOffsets[Q.name]=K),K+=Q.pixelType*2;if(O.totalBytes=K,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=Q=>Q:O.scanOrder=Q=>O.height-1-Q,O.outputChannels==4?(O.format=vn,O.colorSpace=$i):(O.format=Ah,O.colorSpace=jt),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const Q=wr(h.tiles,O.width,O.height),ae=Mr(Q,O.width,h.tiles.xSize,h.tiles.roundingMode),xe=Mr(Q,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=ae[0]*xe[0];for(let ye=0;ye<Q;ye++)for(let Re=0;Re<xe[ye];Re++)for(let Ae=0;Ae<ae[ye];Ae++)Ge(x,D);O.decode=Si.bind(O)}else{O.blockWidth=O.width;const Q=Math.ceil(O.height/O.blockHeight);for(let ae=0;ae<Q;ae++)Ge(x,D);O.decode=Ki.bind(O)}return O}const ji={value:0},to=new DataView(e),Pi=new Uint8Array(e),yn=Uo(to,e,ji),fi=br(yn,to,Pi,ji,this.type);return fi.decode(),{header:yn,width:fi.width,height:fi.height,data:fi.byteArray,format:fi.format,colorSpace:fi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=gt,s.magFilter=gt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Tn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new yr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let w;if(f.needsPack){const y=f.packedComponents,L=y.length,C=f.storageType.indexOf("Int")===0,T=1<<b*8,P=C?T*.5:0,M=1/T;w=new Float32Array(v*g);for(let S=0,R=0;S<v;S++)for(let F=0;F<L;F++){const N=y[F];w[R]=(p[R]+P)*M*N.delta+N.from,R++}}else w=p;if(m==="indices"){let y=w;w instanceof Uint8Array&&(y=new Uint16Array(w.length),y.set(w)),l.setIndex(new $t(y,1))}else l.setAttribute(m,new $t(w,g));a+=v*g*b}return l.computeBoundingSphere(),l}const ll=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Wc={density:1,friction:2,restitution:.8},Tw=40,To=8,Ew=`
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
`,Aw=`
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
uniform vec4 u_nearPositionRadiusList[${To}];
uniform vec3 u_nearColorList[${To}];

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

  for (int i = 0; i < ${To}; i++) {
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
  gi /= float(${To});

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
`,Rw=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Cw=`
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
`;function Pw(i){const e={...Wc},t={...Wc},n={...Wc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function Dw(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Ud(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class Lw{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new zn().setFromEuler(new hi(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(Tw),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function Iw(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*ll.length),r=ll[n];const o=new Jr,s=new Gn(25,1,.1,100);s.position.set(0,0,25);const a=new Jl({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=$i,a.toneMapping=qi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Tn(u),new Promise((z,je)=>{new bw().load(d,z,void 0,je)})]);m.minFilter=gt,m.magFilter=gt,m.generateMipmaps=!1,m.colorSpace=jt;const v=new q(10,10,5),g=Pw(r),_=Dw("balloonBody-25"),p=[],b=[],w=[],y=[],L=Array.from({length:To},()=>new Ft(0,0,-999,.01)),C=Array.from({length:To},()=>new Ye(1118481)),T=z=>new At({uniforms:{u_matcap:{value:m},u_color:{value:new Ye(z.color)},u_bgColor:{value:new Ye(1316117)},u_roughness:{value:z.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ft(0,0,0,1)},u_selfRotation:{value:new Ft(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(je=>je.clone())},u_nearColorList:{value:C.map(je=>je.clone())}},vertexShader:Ew,fragmentShader:Aw});for(const z of g){const je=T(z),Xe=new Ut(f,je);Xe.frustumCulled=!1,Xe.scale.setScalar(z.radius),o.add(Xe),b.push(Xe),w.push(je),p.push(new Lw(z.radius,z.density,z.friction,z.restitution,_,!1)),y.push({i:b.length-1,d2:0})}const P=new At({uniforms:{u_color0:{value:new Ye(r)},u_color1:{value:new Ye(1316117)},u_aspect:{value:1}},vertexShader:Rw,fragmentShader:Cw,depthWrite:!1}),M=new Ut(new li(90,60),P);M.position.z=-12,M.renderOrder=-1e3,o.add(M);const S=new et(0,0),R=new q,F=new q,N=new q,k=new q,H=new q,V=new q,W=new q,B=new q,se=new q,X=new q,ge=new zn,_e=.025,Pe=.1,J=.12,ee=z=>{const je=(e||i).getBoundingClientRect();S.x=(z.clientX-je.left)/je.width*2-1,S.y=-((z.clientY-je.top)/je.height*2-1)};window.addEventListener("pointermove",ee);const ce=()=>{n=(n+1)%ll.length,r=ll[n],b.forEach((z,je)=>{const Xe=g[je];Xe.isColored&&(z.material.uniforms.u_color.value.set(r),Xe.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(z=>z.applyImpulse())},le=()=>ce();i.addEventListener("click",le),e==null||e.addEventListener("click",le);const be=()=>{const z=e||i.parentElement,je=z.clientWidth,Xe=z.clientHeight,Je=je/Math.max(Xe,1);s.fov=Ud(Je,2.2,2/3,18,30),s.aspect=Je,s.updateProjectionMatrix(),a.setSize(je,Xe,!1),P.uniforms.u_aspect.value=Je};be(),window.addEventListener("resize",be);let De=0,Ne=performance.now();const $e=performance.now(),We=()=>{const je=(e||i).getBoundingClientRect();l=je.bottom>0&&je.top<window.innerHeight};window.addEventListener("scroll",We,{passive:!0}),We();const nt=z=>{if(De=requestAnimationFrame(nt),!l){Ne=z;return}let je=Math.min(.05,(z-Ne)/1e3);Ne=z;const Xe=t?1:2;je/=Xe;const Je=(z-$e)/1e3,He=Ud(Je,.3,2,25,17.5);s.position.z=He;for(let Oe=0;Oe<Xe;Oe++){const Le=new q(S.x,S.y,.5).unproject(s);Le.sub(s.position).normalize();const U=(0-s.position.z)/Le.z;R.copy(s.position).addScaledVector(Le,U),N.copy(R).sub(F).multiplyScalar(J/Math.max(je,.001)),k.copy(R).sub(s.position);const A=k.lengthSq()||1;F.copy(R);for(let Y=0;Y<p.length;Y++){const $=p[Y];$.updateGravity(je),V.copy($.velocity),W.copy($.position);for(let pe=Y+1;pe<p.length;pe++){const me=p[pe];se.copy(me.velocity),X.copy(me.position),H.copy(W).sub(X);const tt=H.length(),de=$.radius+me.radius;if(tt<de&&tt>1e-6){const Me=Math.sqrt($.friction*me.friction);$.frictionTot+=Me,me.frictionTot+=Me,H.normalize(),H.multiplyScalar(.5*(tt-de)),W.sub(H),X.add(H),H.normalize();const Ee=V.dot(H),Ie=se.dot(H),ue=$.mass,Be=me.mass,Ge=(ue*Ee+Be*Ie-Be*(Ee-Ie)*$.restitution)/(ue+Be),it=(ue*Ee+Be*Ie-ue*(Ie-Ee)*me.restitution)/(ue+Be);V.addScaledVector(H,(Ge-Ee)/(1+Me)),se.addScaledVector(H,(it-Ie)/(1+Me)),me.position.copy(X),me.velocity.copy(se)}}B.copy(W).sub(s.position);let ne=B.dot(k)/A;ne=B.sub(se.copy(k).multiplyScalar(ne)).length()-$.radius-_e,ne<0&&(B.copy(W).sub(s.position).cross(k).normalize(),se.copy(k).cross(B).normalize(),W.sub(se.multiplyScalar(Pe*ne)),se.multiplyScalar(-J/Math.max(je,.001)),V.add(se),V.add(N));let ie=W.length();if(ie>0){B.set(1,1,1).normalize();let pe=1-Math.abs(B.dot(se.copy(W).normalize()));pe*=je*Math.min(1,Math.max(0,ie/2))*.5,pe*=Y%2*2-1,ge.setFromAxisAngle(B,pe),se.copy(W).applyQuaternion(ge).sub(B.copy(W)),V.add(se)}B.crossVectors(W,V);let Te=B.length();Te/=$.inertia,Te>0&&(B.normalize(),ge.setFromAxisAngle(B,Te*je),$.quaternion.premultiply(ge)),$.position.copy(W),$.velocity.copy(V),$.update(je),["x","y","z"].forEach(pe=>{const me=pe==="z"?5.5:7.5;$.position[pe]>me&&($.position[pe]=me,$.velocity[pe]*=-.55),$.position[pe]<-me&&($.position[pe]=-me,$.velocity[pe]*=-.55)})}}for(let Oe=0;Oe<b.length;Oe++){const Le=b[Oe],U=p[Oe];Le.position.copy(U.position),Le.quaternion.copy(U.quaternion);const A=w[Oe].uniforms;A.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),A.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),A.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let Oe=0;Oe<b.length;Oe++){for(let A=0;A<b.length;A++)y[A].i=A,y[A].d2=Oe===A?0:p[Oe].position.distanceToSquared(p[A].position);y.sort((A,Y)=>A.d2-Y.d2);const Le=w[Oe].uniforms.u_nearPositionRadiusList.value,U=w[Oe].uniforms.u_nearColorList.value;for(let A=0;A<To;A++){const Y=y[A+1]?y[A+1].i:y[0].i,$=p[Y];Le[A].set($.position.x,$.position.y,$.position.z,$.radius),U[A].copy(w[Y].uniforms.u_color.value)}}s.position.x+=(S.x*.9-s.position.x)*.04,s.position.y+=(S.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return De=requestAnimationFrame(nt),{cycleColor:ce,destroy(){cancelAnimationFrame(De),window.removeEventListener("pointermove",ee),window.removeEventListener("resize",be),window.removeEventListener("scroll",We),i.removeEventListener("click",le),e==null||e.removeEventListener("click",le),w.forEach(z=>z.dispose()),P.dispose(),a.dispose()}}}function Xt(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function ii(i){return Xt(i,0,1)}function Vm(i,e,t){return(t-i)/(e-i||1)}function yo(i,e,t){return Xt(Vm(i,e,t),0,1)}function he(i,e,t,n,r,o){let s=yo(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function Fd(i,e,t,n,r,o){let s=Vm(e,t,i);return n+s*(r-n)}function Uw(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,w)=>_*(g*g*g)+p*(g*g)+b*g+w,a=(g,_,p,b,w)=>{const y=g*g;return _*(y*g)+p*y+b*g+w},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function _t(i){return Uw(i,.35,0,0,1)}function Vl(i){return i===1?1:1-Math.pow(2,-10*i)}function Fw(i){return i===0?0:Math.pow(1024,i-1)}function Nw(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function Ow(i){return 1-Math.cos(i*Math.PI/2)}function eh(i){return Math.sin(i*Math.PI/2)}function zw(i){return-(Math.cos(Math.PI*i)-1)/2}function Bw(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function th(i){return i*i*i}function nh(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function En(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,Fd(n,t,t-r,-1,0));s+=Math.max(0,Fd(n,0,-r,0,1));const a=he(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function kw(i){return 1-Math.pow(1-i,3)}function Hw(i){return i*i*i*i}function Vw(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Ni(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Nd=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function cl(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function Od(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function Fh(i){const e={};let t=0;for(const f of Nd)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=cl(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=cl(v),p=cl(g),b=Math.max(_.height,Od(v,1080/1496)),w=Math.max(p.height,Od(g,1537/2e3));n=(_.top||m.top)-f;const y=(f+b)*.5,L=Math.max((f+w)*.5+f,f*1.85),C=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),T=document.documentElement.scrollHeight,P=C?Math.max(cl(C).bottom,T):T;let M=Math.max(f*1.35,P-m.bottom);const S=Math.max(f*12,T-f-n);let R=Math.max(f*8,m.bottom-n-y-L);const F=y+L+M;F+R>S&&(R=Math.max(f*6,S-F)),F+R>S&&(M=Math.max(f*.5,S-y-L-R)),e.blackFrameShow.pixelCount=y,e.astronautDrop.pixelCount=L,e.astronautWait.pixelCount=Math.max(f*.5,M),r=0;for(const N of Nd){const k=e[N.id];k.pixelFrom=r,k.weight&&(k.pixelCount=R*k.weight/t),k.id==="blackFrameIn"&&(k.pixelCount=Math.min(k.pixelCount,f*1.15)),r+=k.pixelCount,k.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,b=Math.max(p-_,1e-6),w=c()-_,y=w/b;return{ratio:Math.max(0,Math.min(1,y)),raw:y,active:y>=0&&y<1,global:c()/Math.max(r,1),pixel:w,pixelCount:b}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const Gw=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,Ww=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,Xw="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",qw="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Gm=`
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
`,Wm=`
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
`,Yw=`
${Gm}
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
${Wm}
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
`,$w=`
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
`,zd=`
${Gm}
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
${Wm}
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
`,lr=5,ul=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Zw=`
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
`,Kw=`
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
`,jw=`
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
`,Jw=`
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
`;function is(i,e,t=!1,n=0){const r={minFilter:gt,magFilter:gt,format:vn,type:n>0?Ci:Wi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new Sr(i,e,r);return t&&n===0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Do),t&&n>0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Do),o}function Qw(i,e,t,{isMobile:n=!1}={}){const r=new et(1,1);i.getSize(r);let o=!!n,s=is(1,1,!0,4),a=is(1,1,!1),l=is(1,1,!1),c=is(1,1,!1),u=null,d=null;const f=[],m=[];for(let $=0;$<lr;$++)f.push(is(1,1)),m.push(is(1,1));const v=new Kl(-1,1,1,-1,0,1),g=new Ut(new li(2,2),new Ih),_=new Jr;_.add(g);const p=new At({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new et(1,1)},u_aspect:{value:new et(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:ul,fragmentShader:Zw,depthTest:!1,depthWrite:!1,toneMapped:!1}),b=[];for(let $=0;$<lr;$++){const ne=3+$*2;b.push(new At({uniforms:{u_texture:{value:null},u_resolution:{value:new et(1,1)},u_direction:{value:new et(1,0)}},defines:{KERNEL_RADIUS:ne,SIGMA:ne},vertexShader:ul,fragmentShader:Kw,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const w=new Float32Array(lr),y=new At({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:w}},vertexShader:ul,fragmentShader:jw,depthTest:!1,depthWrite:!1,toneMapped:!1});let L=0;const C=new At({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new yt},u_prevProjectionViewMatrix:{value:new yt},u_aspect:{value:new et(1,1)},u_amount:{value:1}},vertexShader:ul,fragmentShader:Jw,depthTest:!1,depthWrite:!1,toneMapped:!1}),T=new yt,P=new yt,M=new yt,S=new yt,R=new yt,F=new q,N=new hi,k=new q(1,1,1),H=new zn;let V=!0,W=1,B=!1,se=0,X=0,ge=1,_e=1,Pe=0,J=.015,ee=.6,ce=.3,le=.5,be=0,De=new Ye(0),Ne=!0,$e=1,We=1,nt=1;const z=new et(1,0),je=new et(0,1),Xe=($,ne)=>{g.material=$,i.setRenderTarget(ne),i.clear(),i.render(_,v)},Je=$=>{const ne=Math.max(1,$);return 1<<Math.ceil(Math.log(ne)/Math.log(2))},He=($,ne)=>{$e=Math.max(1,Math.floor($)),We=Math.max(1,Math.floor(ne));const ie=1;s.setSize(Math.max(1,Math.floor($e*ie)),Math.max(1,Math.floor(We*ie))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const Te=o?3:2;let pe=Math.max(1,Math.ceil($e/Te)),me=Math.max(1,Math.ceil(We/Te));c.setSize(pe,me);for(let de=0;de<lr;de++)f[de].setSize(pe,me),m[de].setSize(pe,me),pe=Math.max(1,Math.ceil(pe/2)),me=Math.max(1,Math.ceil(me/2));p.uniforms.u_texelSize.value.set(1/$e,1/We);const tt=We/Math.sqrt($e*$e+We*We)*2;p.uniforms.u_aspect.value.set($e/We*tt,tt),C.uniforms.u_aspect.value.set($e/Math.max(We,1),1)},Oe=({blackFrameInRatio:$=0,blackTitleRatio:ne=0,blackTunnelRatio:ie=0,whiteFrameRatio:Te=0,whiteTunnelWaitRatio:pe=0,astronautDropRatio:me=0,isWhiteTunnelActive:tt=!1,isBlackTunnelActive:de=!1,isMobile:Me=!1}={})=>{o=!!Me;let Ee=$*(Bt.lerp(0,.15,ne)+Bt.clamp((ie-.2)/.2,0,1)*.25);if(ie>=.65){const ue=Bt.clamp((ie-.65)/.1,0,1);Ee=Ee+(.08-Ee)*ue}if(tt&&(Ee=0),!tt&&$>.55&&ie<.25){const ue=Bt.lerp(Me?.24:.42,Me?.12:.18,Bt.clamp(ne/.5,0,1));Ee=Math.max(Ee,ue*Math.min(1,$))}if(ge=ie<1?Bt.lerp(1,3,Bt.clamp(ie/.7,0,1)):1,tt){const ue=Me?12:20;se=me<1?Bt.lerp(4,2,Bt.clamp(Te/.05,0,1)):Bt.lerp(0,ue,Bt.clamp(pe/.1,0,1)),X=Me?.4:.5,_e=Me?1.1:1.2,nt=Me?1.05:1.15,Ee=0,be=Bt.lerp(.3,0,Bt.clamp(pe/.1,0,1)),De.set(me<1?"#ffffff":"#000000")}else{nt=1;const ue=Bt.clamp(ne/.25,0,1);se=Bt.lerp(Me?22:30,Me?5:6,ue),be=0,De.set("#000000")}Pe=Ee;const Ie=!tt&&$>.55&&ie<.2;ee=Ie?.85:.6,J=Ie?.04:Me?.012:.02,ce=Ie?.15:.3,le=Ie?.75:.5,tt||(X=Me?.15:Ie?.55:.5,_e=Ie?1.15:1),B=de||tt},Le=($,ne=0)=>{F.set(0,0,$),N.set(0,0,ne)},U=()=>{V=!0},A=($,ne)=>{const ie=i.autoClear;i.autoClear=!0,Xe($,ne),i.autoClear=ie},Y=()=>{if(!Ne){i.setRenderTarget(null),i.render(e,t);return}const $=i.getRenderTarget(),ne=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(De,be),i.clear();const ie=e.background;e.background=null;const Te=u==null?void 0:u.mesh,pe=!!(Te!=null&&Te.visible);pe&&(Te.visible=!1);const me=d==null?void 0:d.mesh,tt=!!(me!=null&&me.visible);if(tt&&(me.visible=!1),i.render(e,t),e.background=ie,d!=null&&d.visible&&d.overlayScene?(me&&(me.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(d.overlayScene,v),i.autoClear=!0):tt&&me&&(me.visible=!1),u!=null&&u.active&&u.overlayScene){for(let Be=0;Be<lr;Be++)w[Be]=0,y.uniforms[`u_blurTexture${Be}`].value=s.texture;y.uniforms.u_texture.value=s.texture,y.uniforms.u_saturation.value=1;const ue=y.uniforms.u_scrollPaint.value;y.uniforms.u_scrollPaint.value=0,Xe(y,a),y.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,We),Te&&(Te.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else pe&&Te&&(Te.visible=!1);let de=s.texture;if(T.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),M.copy(T).invert(),B&&W>0?(V&&(P.copy(T),V=!1),R.compose(F,H.setFromEuler(N),k),R.invert(),S.copy(P).multiply(R),C.uniforms.u_texture.value=s.texture,C.uniforms.u_depthTexture.value=s.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(M),C.uniforms.u_prevProjectionViewMatrix.value.copy(S),C.uniforms.u_amount.value=W,A(C,l),de=l.texture,P.copy(T)):(P.copy(T),V=!0),se<.05&&Pe<.005){y.uniforms.u_texture.value=de;for(let ue=0;ue<lr;ue++)w[ue]=0,y.uniforms[`u_blurTexture${ue}`].value=de;y.uniforms.u_saturation.value=1,i.setRenderTarget(null),Xe(y,null),i.autoClear=ne,i.setRenderTarget($);return}p.uniforms.u_texture.value=de,p.uniforms.u_amount.value=_e,p.uniforms.u_haloStrength.value=Pe,p.uniforms.u_haloWidth.value=ee,p.uniforms.u_haloRGBShift.value=J,p.uniforms.u_haloMaskInner.value=ce,p.uniforms.u_haloMaskOuter.value=le,A(p,c);const Me=o?3:lr;let Ee=c;for(let ue=0;ue<Me;ue++){const Be=b[ue];Be.uniforms.u_texture.value=Ee.texture,Be.uniforms.u_resolution.value.set(Ee.width,Ee.height),Be.uniforms.u_direction.value=z,A(Be,f[ue]),Be.uniforms.u_texture.value=f[ue].texture,Be.uniforms.u_resolution.value.set(f[ue].width,f[ue].height),Be.uniforms.u_direction.value=je,A(Be,m[ue]),Ee=m[ue]}let Ie=se;if(o)Ie*=nt;else{const ue=Je($e/2)>>1,Be=Je(We/2)>>1,Ge=Math.max(1,Math.ceil(Math.log(ue*Be)/Math.log(2)));Ie=se*1024/Math.pow(Ge,4)*.85*48*nt}for(let ue=0;ue<lr;ue++){if(ue>=Me){w[ue]=0;continue}const Be=(Me-ue)/Me;let Ge=Ie*(Be+(1.2-Be*2)*X)/Math.pow(2,Me-ue-1);!o&&ue===0&&(Ge*=.15),!o&&ue===1&&(Ge*=.45),!o&&ue>=3&&(Ge*=1.75),w[ue]=Ge}y.uniforms.u_texture.value=de,y.uniforms.u_saturation.value=ge;for(let ue=0;ue<lr;ue++){const Be=ue<Me?m[ue].texture:m[Me-1].texture;y.uniforms[`u_blurTexture${ue}`].value=Be}i.setRenderTarget(null),Xe(y,null),i.autoClear=ne,i.setRenderTarget($)};return He(r.x,r.y),{resize:He,sync:Oe,render:Y,setEfxOffset:Le,markEfxSync:U,setGlassPass($){u=$||null},setFrameBgPass($){d=$||null},setEfxAmount($){W=$},get clearAlpha(){return be},setEnabled($){Ne=!!$},setScrollVelocity($){const ne=Math.min(1,Math.abs($)*.12);L+=(ne-L)*.12,y.uniforms.u_scrollPaint.value=L},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),f.forEach($=>$.dispose()),m.forEach($=>$.dispose()),p.dispose(),y.dispose(),C.dispose(),b.forEach($=>$.dispose()),g.geometry.dispose()}}}function eM(i,e,t){return i+(e-i)*t}const kr=class kr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<kr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&kr.MAX_VERTICES_MASK,a=s+1&kr.MAX_VERTICES_MASK;return eM(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};qe(kr,"MAX_VERTICES",512),qe(kr,"MAX_VERTICES_MASK",kr.MAX_VERTICES-1);let Gl=kr;const Oi=new q,la=class la{constructor(){this._position=new q,this._rotation=new zn,this._euler=new hi,this._scale=new q(1,1,1),this._matrix=new yt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Gl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Oi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Oi.multiply(this._positionScale),Oi.multiplyScalar(this._positionAmplitude*la.FBM_NORM),this._position.copy(Oi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Oi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Oi.multiply(this._rotationScale),Oi.multiplyScalar(this._rotationAmplitude*la.FBM_NORM),this._euler.set(Oi.x,Oi.y,Oi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};qe(la,"FBM_NORM",1/.75);let sa=la;class ih{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Bd=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],tM=26,_o=64,nM=34,qs=new et(1465,1024),iM=`
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
`,rM=`
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
`,oM=`
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
`,sM=`
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
`,hl=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function aM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function lM(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?nM:tM,[s,a]=await Promise.all([new Bi().loadAsync(`${e}assets/textures/tunnels/${r}`),Tn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Fn,s.flipY=!1,s.needsUpdate=!0;const l=new xi;i.add(l);const c=new li(1,1),u=new Mo;for(const S in c.attributes)u.setAttribute(S,c.attributes[S]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let S=0,R=0;S<o;S++,R+=4){d[S]=S/o;const F=Bd[S%Bd.length];f[R]=F.x/qs.x,f[R+1]=F.y/qs.y,f[R+2]=F.w/qs.x,f[R+3]=F.h/qs.y,m[R]=Math.random(),m[R+1]=Math.random(),m[R+2]=Math.random(),m[R+3]=Math.random()}u.setAttribute("instanceId",new An(d,1)),u.setAttribute("instanceUvInfo",new An(f,4)),u.setAttribute("instanceRands",new An(m,4)),u.instanceCount=o;const v=new At({vertexShader:iM,fragmentShader:rM,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:qs.clone()},u_bgColor:{value:new Ye(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:ga,blendEquation:Nn,blendSrc:Nl,blendDst:Ol,blendEquationAlpha:Nn,blendSrcAlpha:yl,blendDstAlpha:yl,defines:{COUNT:o}}),g=new Ut(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new Mo;for(const S in a.attributes)_.setAttribute(S,a.attributes[S]);a.index&&(_.index=a.index);const p=aM("diamonds-3"),b=new Float32Array(_o*3),w=new Float32Array(_o*3),y=new Float32Array(_o*4),L=new q;for(let S=0,R=0,F=0;S<_o;S++,R+=3,F+=4)b[R]=16*(p()*2-1),b[R+1]=16*(p()*2-1),b[R+2]=19-(_o-S-1)/(_o-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),w[R]=L.x,w[R+1]=L.y,w[R+2]=L.z,y[F]=p(),y[F+1]=p(),y[F+2]=p(),y[F+3]=p();_.setAttribute("a_instancePosition",new An(b,3)),_.setAttribute("a_instanceRotationAxis",new An(w,3)),_.setAttribute("a_instanceRand",new An(y,4)),_.instanceCount=_o;const C=[];for(let S=0;S<25;S++)C.push(new Ft(hl[S*4],hl[S*4+1],hl[S*4+2],hl[S*4+3]));const T=new At({vertexShader:oM,fragmentShader:sM,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Ye("#689aff")},u_planes:{value:C},u_bgColor:{value:new Ye(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:ga,blendEquation:Nn,blendSrc:mi,blendDst:yl,blendEquationAlpha:Nn,blendSrcAlpha:mi,blendDstAlpha:mi}),P=new Ut(_,T);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,l.add(P),g.renderOrder=15;const M=new Ye(0);return{update({whiteTunnelWaitRatio:S=0,aspect:R=1,bg:F="#000000"}={}){const N=he(S,0,.2,0,1),k=N>0;l.visible=k,g.visible=k,P.visible=k,v.uniforms.u_activeRatio.value=N,T.uniforms.u_activeRatio.value=N,v.uniforms.u_aspect.value=R,T.uniforms.u_aspect.value=R,M.set(F),v.uniforms.u_bgColor.value.copy(M),T.uniforms.u_bgColor.value.copy(M)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),T.dispose(),a.dispose(),i.remove(l)}}}const fl=946,kd=2,cM=`
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
`,uM=`
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
`;function Hd(i,e,t){const n=new wa(i,e,t,vn,Xn);return n.magFilter=on,n.minFilter=on,n.wrapS=On,n.wrapT=On,n.needsUpdate=!0,n.colorSpace=jt,n}async function hM(i,{base:e}){const[t,n]=await Promise.all([Tn(`${e}assets/models/tunnels/broken_glass.buf`),Tn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const F=new Float32Array(r.array.length);F.set(r.array),t.setAttribute("piece",new $t(F,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(fl*3),l=new Float32Array(o.length/3*4);for(let F=0,N=0;F<o.length;F+=3,N+=4)l[N]=o[F],l[N+1]=o[F+1],l[N+2]=o[F+2],l[N+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Hd(l,fl,a),d=Hd(c,fl,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new et(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new et(fl,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new At({uniforms:f,vertexShader:cM,fragmentShader:uM,transparent:!0,depthWrite:!1,depthTest:!0,side:Pn,toneMapped:!1}),v=new Ut(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new Jr,_=new xi;_.add(v),g.add(_);let p=0,b=1,w=1,y=0,L=1,C=!1;const T=new q(0,0,1),P=new zn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return C},updateFromScroll:({glassBreakRatio:F=0,astronautDropRatio:N=0,frameHeight:k=0,frameRotation:H=0,frameScale:V=1}={})=>{p=he(F,0,1,0,1,eh),b=he(N,.75,1,1,0),w=Math.max(1,k||window.innerHeight),y=H||0,L=Math.max(1e-4,V||1),C=p>0&&N<1,_.visible=C,C||(v.visible=!1)},syncToCamera:(F,N=window.innerHeight)=>{if(!C||!F||p<=0)return v.visible=!1,!1;v.position.copy(F.position),v.quaternion.copy(F.quaternion),v.translateZ(-kd);const k=Math.tan(F.fov*Math.PI/360)*kd*2,H=w/Math.max(N,1)*k*L;P.setFromAxisAngle(T,-y),v.quaternion.multiply(P),v.scale.setScalar(Math.max(H,1e-4));const V=p*(a-1),W=Math.floor(V),B=Math.min(W+1,a-1);return f.u_frameFrom.value=W,f.u_frameTo.value=B,f.u_frameRatio.value=V-W,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(F,N,k)=>{f.u_backgroundTexture.value=F,f.u_resolution.value.set(N,k)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const fM=`
varying vec2 v_uv;
varying vec2 v_uv2;
uniform vec2 u_viewportResolution;
uniform vec2 u_frameOffset;
uniform float u_frameScale;
uniform float u_frameRotate;
uniform vec2 u_domXY;
uniform vec2 u_domWH;
uniform vec2 u_dom2Offset;
uniform vec2 u_dom2WH;
mat2 getRotation2D(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}
void main() {
  // Fullscreen quad: position.xy in clip [-1,1]
  vec2 clip = position.xy;
  v_uv = clip * 0.5 + 0.5;
  v_uv.y = 1.0 - v_uv.y;
  v_uv = (v_uv * u_viewportResolution - u_domXY - u_domWH * 0.5);
  v_uv -= u_frameOffset;
  v_uv = getRotation2D(u_frameRotate) * v_uv;
  v_uv /= max(u_frameScale, 1e-4);
  v_uv2 = v_uv + (-u_dom2Offset);
  v_uv2 = (v_uv2 + u_dom2WH * 0.5) / max(u_dom2WH, vec2(1e-4));
  v_uv = (v_uv + u_domWH * 0.5) / max(u_domWH, vec2(1e-4));
  gl_Position = vec4(clip, 0.0, 1.0);
}
`,dM=`
uniform sampler2D u_dom2Texture;
uniform vec3 u_bgColor;
uniform vec2 u_domWH;
uniform float u_globalRadius;
uniform float u_radiusScale;
uniform vec3 u_glowColor;
uniform float u_glowRadius;
uniform float u_glowUpperBound;
uniform float u_glowPow;
uniform float u_glowTint;
varying vec2 v_uv;
varying vec2 v_uv2;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / max(edge1 - edge0, 1e-5), 0.0, 1.0);
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
  float d = sdRoundedBox((uv - 0.5) * size, halfSize, radius);
  return smoothstep(0., 0. - fwidth(d), d);
}
float sdBox(in vec2 p, in vec2 b) {
  vec2 w = abs(p) - b;
  float g = max(w.x, w.y);
  return (g > 0.0) ? length(max(w, 0.0)) : g;
}
void main() {
  vec3 map = texture2D(u_dom2Texture, v_uv2).rgb;
  float opacity = 1.0 - getRoundedCornerMask(v_uv, u_domWH, u_globalRadius * u_radiusScale, 1.0);
  vec3 color = u_bgColor;
  vec2 tabletSize = vec2(u_domWH.x / max(u_domWH.y, 1.0), 1.);
  float tabletRadiusOffset = 0.05;
  vec2 pos = (v_uv * 2. - 1.) * tabletSize;
  float dist = sdBox(pos, tabletSize - tabletRadiusOffset) - u_glowRadius - tabletRadiusOffset;
  color = mix(u_glowColor, color, pow(linearStep(0., u_glowUpperBound, dist), max(u_glowPow, 1e-4)));
  color = mix(color, mix(map.ggg, map.ggg * u_glowColor, u_glowTint), 1. - map.r);
  gl_FragColor = vec4(color, opacity);
}
`;function Vd(i){return new Promise(e=>{new Bi().load(i,t=>{t.colorSpace=jt,t.flipY=!1,t.minFilter=gt,t.magFilter=gt,t.needsUpdate=!0,e(t)},void 0,()=>e(null))})}async function pM({base:i}){const[e,t]=await Promise.all([Vd(`${i}assets/textures/tunnels/tablet.png`),Vd(`${i}assets/textures/tunnels/desktop.png`)]),n=(()=>{const p=new Uint8Array([0,0,0,255]),b=new wa(p,1,1);return b.needsUpdate=!0,b})(),r={u_bgColor:{value:new Ye("#000000")},u_frameOffset:{value:new et},u_frameScale:{value:1},u_frameRotate:{value:0},u_radiusScale:{value:1},u_glowColor:{value:new Ye(0,0,0)},u_glowRadius:{value:.11},u_glowUpperBound:{value:.5},u_glowPow:{value:.1},u_glowTint:{value:0},u_domXY:{value:new et},u_domWH:{value:new et(1,1)},u_dom2Offset:{value:new et},u_dom2WH:{value:new et(1,1)},u_dom2Texture:{value:n},u_viewportResolution:{value:new et(1,1)},u_globalRadius:{value:24}},o=new li(2,2),s=new At({uniforms:r,vertexShader:fM,fragmentShader:dM,depthTest:!1,depthWrite:!1,transparent:!0,blending:Yr,toneMapped:!1}),a=new Ut(o,s);a.frustumCulled=!1,a.renderOrder=-1,a.visible=!1,a.name="goal-frame-bg";const l=new Jr;l.add(a);const c=new Ye("#1a2ffb"),u=new Ye("#000000"),d=new Ye("#f0f1fa"),f=new Ye;let m=0,v=0,g=0;return{mesh:a,overlayScene:l,updateFromScroll:({isBlackSide:p=!1,blackFrameInRatio:b=0,whiteFrameOutRatio:w=0,glassBreakRatio:y=0,astronautDropRatio:L=0,blackFrameShowRatio:C=0,frameRect:T=null,innerRect:P=null,viewportW:M=window.innerWidth,viewportH:S=window.innerHeight,globalRadius:R=24}={})=>{var $e,We;r.u_viewportResolution.value.set(M,S),r.u_globalRadius.value=R;const F=T,N=P||T;if(!F||F.width<4||F.height<4)return a.visible=!1,null;let k,H,V,W=0,B=0,se=0,X=0;const ge=r.u_glowColor.value;if(p)k=Xt(b,0,1),H=k*.4,V=1,W=he(k,0,1,.11,-.5),B=he(k,0,1,.25,2),se=he(k,0,1,.06,.3),ge.copy(u).lerp(d,k),r.u_dom2Texture.value=($e=e==null?void 0:e.image)!=null&&$e.width?e:n,r.u_bgColor.value.set("#000000");else{k=1-Xt(w,0,1),H=k*-.3,V=0;const nt=y;if(nt<0)X=.8,ge.copy(u);else{W=-.5,B=he(nt,0,.15,0,.8),B=he(nt,.15,.3,B,2),se=he(nt,0,.1,.3,1),se=he(nt,.1,1,se,.2),X=.5;let z=he(nt,0,.1,1,0);z=he(nt,.1,.8,z,.85),ge.copy(c).lerp(f.copy(u),z)}r.u_dom2Texture.value=(We=t==null?void 0:t.image)!=null&&We.width?t:n,r.u_bgColor.value.set("#000000")}const _e=S*.2*(1-Xt(C,0,1)),Pe=Math.hypot(M,S),J=Bt.lerp(1,Pe/Math.min(F.width,F.height),k),ee=L,ce=F.top+_e,le=ce+F.height,be=F.bottom>0&&F.top<S&&F.right>0&&F.left<M&&le>0&&ce<S;if(a.visible=k<.999&&ee<1&&be,!a.visible)return null;m=F.left,v=ce,g=0,r.u_domWH.value.set(Math.max(1,Math.ceil(F.width)),Math.max(1,Math.ceil(F.height))),r.u_domXY.value.set(m,v-g),N?(r.u_dom2Offset.value.set(N.left+N.width*.5-F.left-F.width*.5,N.top+N.height*.5-(F.top+_e)-F.height*.5),r.u_dom2WH.value.set(Math.max(1,N.width),Math.max(1,N.height))):(r.u_dom2Offset.value.set(0,0),r.u_dom2WH.value.set(F.width,F.height));const De=ee<1?M*.5-F.left-F.width*.5:0,Ne=-(F.top+_e+F.height*.5-S*.5);return r.u_frameOffset.value.set(De*k,Ne*k),r.u_frameScale.value=J,r.u_frameRotate.value=H,r.u_radiusScale.value=V,r.u_glowRadius.value=W,r.u_glowUpperBound.value=B,r.u_glowPow.value=se,r.u_glowTint.value=X,{frameScale:J,frameRotation:H,cameraViewportOffsetX:De*(1-k),cameraViewportOffsetY:Ne*(1-k)}},resize(p,b){r.u_viewportResolution.value.set(p,b)},get visible(){return a.visible},dispose(){o.dispose(),s.dispose(),e==null||e.dispose(),t==null||t.dispose(),n.dispose()}}}const dl=53,pl=16,ml=20,Gd=["helmet","helmet_glass","glove_shoes","wearpack"],Ys=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Xc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Wd(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Xd(i,e){const[t,n]=await Promise.all([Wd(i),Wd(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new wa(u,r,o,vn,Ci);return d.colorSpace=jt,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=Gi,d.magFilter=gt,d.anisotropy=8,d.wrapS=On,d.wrapT=On,d.needsUpdate=!0,d}function qd(i,e,t){const n=new wa(i,e,t,vn,Xn);return n.magFilter=on,n.minFilter=on,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function qc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new An(t,3)}const _l=`
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
`;async function mM(i,e,t){var jh,Jh,Qh,ef;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,w,y,...L]=await Promise.all([Tn(`${r}assets/models/tunnels/astronaut_animations.buf`),Tn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Tn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new Bi().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new Bi().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new Bi().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Tn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Tn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Tn(`${r}assets/models/tunnels/grid_base_ld.buf`),Tn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Tn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Tn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new Bi().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),Tn(`${r}assets/models/tunnels/earth_card.buf`),new Bi().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...Gd.map(Se=>Tn(`${r}assets/models/tunnels/astronaut_${Se}.buf`))]),C=new Jr;C.background=new Ye(0);const T=new q(0,0,25),P=new q(0,0,24),M=45,S=new Gn(M,1,1,200);S.position.copy(T),S.lookAt(P);let R;try{R=new Jl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Se){throw console.error("Goal WebGL unavailable",Se),Se}R.setClearColor(0,1),R.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),R.outputColorSpace=$i,R.toneMapping=qi,R.autoClear=!0,c.colorSpace=jt,c.generateMipmaps=!1,c.minFilter=gt,c.magFilter=gt,u.colorSpace=jt,u.generateMipmaps=!1,u.minFilter=gt,u.magFilter=gt,d.colorSpace=jt,d.wrapS=d.wrapT=fs,d.generateMipmaps=!1,d.minFilter=gt,d.magFilter=gt;const F=s.attributes.position.array,N=s.attributes.orient.array,k=F.length/3,H=Math.ceil(Math.sqrt(k)),V=Math.ceil(k/H),W=H*V,B=new Float32Array(W*4),se=new Float32Array(W*4);for(let Se=0,ke=0,Ce=0;Se<k;Se++,ke+=3,Ce+=4)B[Ce]=F[ke],B[Ce+1]=F[ke+1],B[Ce+2]=F[ke+2],B[Ce+3]=1,se[Ce]=N[Ce],se[Ce+1]=N[Ce+1],se[Ce+2]=N[Ce+2],se[Ce+3]=N[Ce+3];const X=qd(B,H,V),ge=qd(se,H,V),_e=new An(new Float32Array([0,0,18]),3);_e.setUsage(Dr);const Pe=new An(new Float32Array([0,0,0,1]),4);Pe.setUsage(Dr);const J=new An(new Float32Array([0,1,0]),3);J.setUsage(Dr);const ee=new An(new Float32Array([90,91,0]),3);ee.setUsage(Dr);const ce=()=>{const Se=new Sr(1,1,{minFilter:gt,magFilter:gt,format:vn,generateMipmaps:!1});return Se.texture.wrapS=Se.texture.wrapT=zl,Se},le=ce(),be=ce(),De=ce();let Ne=le,$e=be;const We=`
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
}`,nt=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,z=new At({uniforms:{u_texture:{value:null},u_direction:{value:new et(1,0)},u_resolution:{value:new et(1,1)}},vertexShader:nt,fragmentShader:We,depthTest:!1,depthWrite:!1,toneMapped:!1}),je=new Kl(-1,1,1,-1,0,1),Xe=new Jr,Je=new Ut(new li(2,2),z);Xe.add(Je);const He=(Se,ke)=>{const Ce=Math.max(1,Se.width),Ke=Math.max(1,Se.height);z.uniforms.u_resolution.value.set(Ce,Ke),z.uniforms.u_texture.value=Se.texture,z.uniforms.u_direction.value.set(ke,0),R.setRenderTarget(De),R.clear(),R.render(Xe,je),z.uniforms.u_texture.value=De.texture,z.uniforms.u_direction.value.set(0,ke),R.setRenderTarget(Se),R.clear(),R.render(Xe,je),R.setRenderTarget(null)},Oe={u_animationPositionTexture:{value:X},u_animationOrientTexture:{value:ge},u_animationTextureSize:{value:new et(H,V)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ye("#566d80")},u_bgColor:{value:new Ye("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ye(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Ye("#aaaafb")},u_cardPosition:{value:new q}},Le={u_blackTunnelTexture:{value:Ne.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},U={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Se=>{const[ke,Ce]=await Promise.all([Xd(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_base.webp`),new Bi().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_nor.webp`)]);Ce.colorSpace=jt,Ce.flipY=!1,Ce.generateMipmaps=!0,Ce.minFilter=Gi,Ce.magFilter=gt,Ce.anisotropy=8,U[Se]={armb:ke,nor:Ce}}));const A=((Jh=(jh=R.capabilities).getMaxAnisotropy)==null?void 0:Jh.call(jh))||8;for(const Se of Object.keys(U)){const{armb:ke,nor:Ce}=U[Se];ke&&(ke.anisotropy=Math.min(8,A),ke.needsUpdate=!0),Ce&&(Ce.anisotropy=Math.min(8,A),Ce.needsUpdate=!0)}U.helmet_glass=U.helmet;const Y=new xi;C.add(Y);const $=[],ne=4,ie=new An(new Float32Array(ne*3),3);ie.setUsage(Dr);const Te=new An(new Float32Array(ne*4),4);Te.setUsage(Dr);const pe=new An(new Float32Array(ne*3),3);pe.setUsage(Dr);const me=new An(new Float32Array(ne*3),3);me.setUsage(Dr);for(let Se=0;Se<ne;Se++)Te.setXYZW(Se,0,0,0,1),pe.setXYZ(Se,0,1,0),me.setXYZ(Se,90,91,0);const tt=[];let de=0;const Me={value:0};Gd.forEach((Se,ke)=>{const Ce=L[ke],Ke=new Mo;for(const un in Ce.attributes)Ke.setAttribute(un,Ce.attributes[un]);Ce.index&&Ke.setIndex(Ce.index),Ke.instanceCount=1,Ke.setAttribute("instancePos",_e),Ke.setAttribute("instanceOrient",Pe),Ke.setAttribute("instanceAnimationFrameFromToBlend1",J),Ke.setAttribute("instanceAnimationFrameFromToBlend2",ee);const rt=Se==="helmet_glass"||Se==="card"?"helmet":Se,mt=Se==="helmet_glass",lt={...Oe,u_armbTexture:{value:U[rt].armb},u_norTexture:{value:U[rt].nor}},Et={...Oe,...Le,u_armbTexture:{value:U[rt].armb},u_norTexture:{value:U[rt].nor}},Ht=new At({uniforms:lt,vertexShader:_l,fragmentShader:Yw,transparent:!0,blending:Ri,side:Pn,defines:{BONE_COUNT:dl,IS_WHITE:!0,...mt?{IS_HELMET_GLASS:!0}:{}}}),cn=new At({uniforms:Et,vertexShader:_l,fragmentShader:zd,transparent:!0,blending:Ri,side:Pn,defines:{BONE_COUNT:dl,IS_BLACK:!0,...mt?{IS_HELMET_GLASS:!0}:{}}}),kn=new Ut(Ke,Ht);if(kn.frustumCulled=!1,kn.userData.whiteMat=Ht,kn.userData.blackMat=cn,Y.add(kn),$.push(kn),!mt){const un=new Mo;for(const yi in Ce.attributes)un.setAttribute(yi,Ce.attributes[yi]);Ce.index&&un.setIndex(Ce.index),un.instanceCount=ne,un.setAttribute("instancePos",ie),un.setAttribute("instanceOrient",Te),un.setAttribute("instanceAnimationFrameFromToBlend1",pe),un.setAttribute("instanceAnimationFrameFromToBlend2",me);const _n=new At({uniforms:{...Et,u_armbTexture:{value:U[rt].armb},u_norTexture:{value:U[rt].nor},u_alpha:Me},vertexShader:_l,fragmentShader:zd,transparent:!0,depthWrite:!1,depthTest:!1,blending:ga,blendEquation:Nn,blendSrc:mi,blendDst:mi,blendEquationAlpha:Nn,blendSrcAlpha:mi,blendDstAlpha:mi,side:Pn,defines:{BONE_COUNT:dl,IS_BLACK:!0,IS_CLONE:!0}}),rn=new Ut(un,_n);rn.frustumCulled=!1,rn.renderOrder=1e3,rn.visible=!1,Y.add(rn),tt.push(rn)}});const Ee=new et(5,23),Ie=new Gl;let ue=0,Be=!1;const Ge=document.createElement("canvas");Ge.width=Ge.height=11;{const Se=Ge.getContext("2d");Se.fillStyle="#000",Se.fillRect(0,0,11,11),Se.fillStyle="#f00",Se.fillRect(1,1,3,9),Se.fillStyle="#0f0",Se.fillRect(4,1,3,9),Se.fillStyle="#00f",Se.fillRect(7,1,3,9)}const it=new nw(Ge);it.needsUpdate=!0,it.minFilter=gt,it.magFilter=gt;const G=await new Bi().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);G.minFilter=on,G.magFilter=on,G.colorSpace=jt,G.flipY=!1;const te=new li(.2,.15).translate(0,1.68,.1);te.setAttribute("boneIndices",new $t(new Uint8Array([0,0,0,0,0,0,0,0]),2)),te.setAttribute("boneWeights",new $t(new Float32Array([1,0,1,0,1,0,1,0]),2)),te.setAttribute("tangent",new $t(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),te.setAttribute("ao",new $t(new Float32Array([1,1,1,1]),1));const oe=new Mo;for(const Se in te.attributes)oe.setAttribute(Se,te.attributes[Se]);te.index&&oe.setIndex(te.index),oe.instanceCount=1,oe.setAttribute("instancePos",_e),oe.setAttribute("instanceOrient",Pe),oe.setAttribute("instanceAnimationFrameFromToBlend1",J),oe.setAttribute("instanceAnimationFrameFromToBlend2",ee);const fe=new At({uniforms:{...Oe,u_cardLedTexture:{value:it},u_cardTexture:{value:G},u_cardColor:{value:new Ye("#ddddff")},u_cardUvOffset:{value:new et(0,0)},u_cardTextureSize:{value:Ee},u_cardOpacity:{value:0}},vertexShader:_l,fragmentShader:$w,transparent:!0,depthTest:!1,depthWrite:!1,side:Pn,blending:ga,blendEquation:Nn,blendSrc:mi,blendDst:mi,blendEquationAlpha:Nn,blendSrcAlpha:mi,blendDstAlpha:mi,defines:{BONE_COUNT:dl}}),Ue=new Ut(oe,fe);Ue.frustumCulled=!1,Ue.renderOrder=100,Ue.visible=!1,Y.add(Ue);const Fe=new xi;C.add(Fe);const ot=new sa;ot.positionAmplitude=2,ot.positionFrequency=1,ot._enableRotationNoise=!1;const Ct=ot.position;let Pt=0,st=1,dn=typeof window<"u"?window.scrollY:0,pn=1;const eo=(Se,ke)=>{const Ce=new Mo;for(const lt in Se.attributes)Ce.setAttribute(lt,Se.attributes[lt]);Se.index&&Ce.setIndex(Se.index);const Ke=new Float32Array(pl);for(let lt=0;lt<pl;lt++)Ke[lt]=lt;Ce.setAttribute("a_instanceId",new An(Ke,1)),Ce.instanceCount=pl;const rt=new At({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:Ct},u_time:{value:0}},vertexShader:Xw,fragmentShader:qw,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:pl,...ke?{IS_WALL:!0}:{}}}),mt=new Ut(Ce,rt);return mt.frustumCulled=!1,Fe.add(mt),rt},Zi=eo(f,!1),Bn=eo(m,!0),wr=await lM(C,{base:r,isMobile:n,sharedTime:Oe.u_time}),Mr=new At({uniforms:{u_color:{value:new Ye(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ri}),Si=new Ut(new li(200,200),Mr);Si.position.z=-80,Si.renderOrder=-10,C.add(Si),y.colorSpace=jt,y.generateMipmaps=!1,y.minFilter=gt,y.magFilter=gt;const Ki={u_earthTexture:{value:y},u_bgColor:{value:new Ye(0)},u_atmosphereColor:{value:new Ye("#4169E1")}},Uo=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,br=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,ji=new xi,to=new At({uniforms:Ki,vertexShader:Uo,fragmentShader:br,depthWrite:!0,depthTest:!0}),Pi=new Ut(w,to);Pi.frustumCulled=!1,Pi.renderOrder=-1,ji.add(Pi),C.add(ji);const yn=new xi;C.add(yn);const fi=await Xd(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);fi.wrapS=fi.wrapT=fs,b.colorSpace=jt,b.flipY=!1,b.wrapS=b.wrapT=fs;const h={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Ne.texture},u_greebleArmbTexture:{value:fi},u_greebleNormalTexture:{value:b},u_resolution:{value:new et(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new Ye(Ys[0])},u_color2:{value:new Ye(Xc[0])}},x=(Se,ke,Ce)=>{const Ke=new Mo;for(const Et in Se.attributes)Ke.setAttribute(Et,Se.attributes[Et]);Se.index&&Ke.setIndex(Se.index);const rt=Se.attributes.position.count;Ke.getAttribute("ao")||Ke.setAttribute("ao",new $t(new Float32Array(rt).fill(1),1)),Ke.getAttribute("areaRatio")||Ke.setAttribute("areaRatio",new $t(new Float32Array(rt),1)),Ke.getAttribute("height")||Ke.setAttribute("height",new $t(new Float32Array(rt).fill(1),1)),Ke.getAttribute("cluster")||Ke.setAttribute("cluster",new $t(new Float32Array(rt),1)),Ke.setAttribute("instancePos",qc(ke.attributes.position)),Ke.setAttribute("instanceGridIds",qc(ke.attributes.gridIds)),Ke.setAttribute("instanceAxis",qc(ke.attributes.rotAxis)),Ke.instanceCount=ke.attributes.position.count;const mt=new At({uniforms:h,vertexShader:Gw,fragmentShader:Ww,side:Pn,transparent:!1,depthWrite:!0,blending:Yr,defines:{GRID_SIZE:ml,...Ce?{IS_HD:!0}:{}}}),lt=new Ut(Ke,mt);return lt.frustumCulled=!1,lt.renderOrder=Ce?2:1,yn.add(lt),lt};x(v,g,!1),o&&_&&p&&x(_,p,!0);let E=0,D=0,I=0,O=M,Z=0,re=-80,j=0;const K=new sa;K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0;const Q=new ih(new q,1,.65,1.3),ae=new ih(new q,1,.85,1.1),xe=Array.from({length:ne},()=>{const Se=new sa;return Se.positionFrequency=.2,Se.rotationFrequency=.6,Se.positionAmplitude=12,Se.rotationAmplitude=10,Se}),ye=Float32Array.from({length:ne+1},(Se,ke)=>ke===0?0:Math.random()*2),Re=new Float32Array(ne),Ae=new Float32Array(ne),we=new q,ve=new zn,at=new yt,Qe=new yt,pt=new q,vt=new q,Ze=new zn,Tt=new hi,ct=new q(1,1,1),xt=new Ye,ft=new Ye,ut=new q,Jt=new q;let mn=0,wn=0,Tr=0,Ql=0,Fo=.08;const Oh=.1;let Ea=!1,Ds=0,Aa=0,zh=0,Ra=0,Ca=0,Bh=0,kh=0;window.addEventListener("pointermove",Se=>{mn=Se.clientX/Math.max(window.innerWidth,1)*2-1,wn=Se.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ea=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ea=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ea=!1},{passive:!0});const ec=()=>{S.near=1,S.far=200,S.position.copy(T),S.up.set(0,1,0),S.lookAt(P),S.fov=O,ut.set(0,0,-1).applyQuaternion(S.quaternion);let Se=Jt.copy(P).sub(S.position).dot(ut);const ke=S.fov,Ce=ke+I,Ke=Math.max(1,Math.min(170,Ce));let rt=Se*Math.tan(ke/360*Math.PI/2)/Math.tan(Ke/360*Math.PI/2)-Se;Number.isFinite(rt)||(rt=0),S.translateZ(rt),S.fov=ke,Se+=rt;const mt=Math.max(1,R.domElement.width||window.innerWidth),lt=Math.max(1,R.domElement.height||window.innerHeight);Math.abs(Ra)>.25||Math.abs(Ca)>.25?S.setViewOffset(mt,lt,Ra,Ca,mt,lt):S.clearViewOffset(),S.translateZ(Se*-1);const Et=n?Fo*.35:Fo,Ht=Math.max(-1,Math.min(1,wn))*Et,cn=Math.max(-1,Math.min(1,-mn))*Et;Tr+=(Ht-Tr)*Oh,Ql+=(cn-Ql)*Oh,Tt.set(Tr,Ql,0),Ze.setFromEuler(Tt),S.quaternion.multiply(Ze),S.translateZ(Se),S.updateProjectionMatrix()},Jm=Se=>{K.update(Se),Q.update(Se,K.position),pt.copy(K.euler),ae.update(Se,pt),Tt.set(ae.value.x,ae.value.y,ae.value.z),Ze.setFromEuler(Tt),Qe.compose(Q.value,Ze,ct),at.compose(we,ve,ct),at.multiply(Qe),at.decompose(pt,Ze,vt);{const ke=Math.max(1,R.domElement.width||window.innerWidth),Ce=Math.max(1,R.domElement.height||window.innerHeight),Ke=Math.max(.5,S.position.distanceTo(P)),rt=2*Math.tan((S.fov||45)*Math.PI/360)*Ke,mt=rt*(ke/Ce),lt=.55;pt.x+=Bh/ke*mt*lt,pt.y+=kh/Ce*rt*lt}if(_e.setXYZ(0,pt.x,pt.y,pt.z),Pe.setXYZW(0,Ze.x,Ze.y,Ze.z,Ze.w),_e.needsUpdate=!0,Pe.needsUpdate=!0,nc=1+Math.min(3.5,Q.valueVel.length()*.2+ae.valueVel.length()*.2),de>.01&&!Ot&&!Di){for(let ke=0;ke<ne;ke++){const Ce=xe[ke];Ce.positionFrequency=.2,Ce.rotationFrequency=.6,Ce.positionAmplitude=12,Ce.rotationAmplitude=10,Ce.update(Se),at.compose(we,ve,ct),at.multiply(Ce.matrix),at.decompose(pt,Ze,vt);const Ke=ke/Math.max(ne-1,1),rt=he(de,Ke*.3,.7+Ke*.3,1,0,zw);vt.set(_e.getX(0),_e.getY(0),_e.getZ(0)),pt.lerp(vt,rt),ie.setXYZ(ke,pt.x,pt.y,pt.z),Te.setXYZW(ke,Ze.x,Ze.y,Ze.z,Ze.w)}ie.needsUpdate=!0,Te.needsUpdate=!0}},Ve=document.getElementById("home-goal-tunnel-sticky")||((Qh=i.closest)==null?void 0:Qh.call(i,"#home-goal-tunnel-sticky"))||((ef=e==null?void 0:e.querySelector)==null?void 0:ef.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,Ln=Fh(e);let ln=0,Ls=0,No=0,Rt=0,Jn=0,tc=0,no=0,Pa=0,Ji=0,Yt=0,Hh=0,Di=!0,Qt=!1,Ot=!1,Is=0,Er=0,nc=1,ic=0,Vh=performance.now(),Us=!1,Gh=!1;const nn=Qw(R,C,S,{isMobile:n});let Li=null,Ar=null;try{Li=await hM(C,{base:r}),nn.setGlassPass(Li)}catch(Se){console.warn("Broken glass failed to load",Se)}try{Ar=await pM({base:r}),nn.setFrameBgPass(Ar)}catch(Se){console.warn("FrameBg failed to load",Se)}let Wh=0,Xh=0;const Oo=()=>{var Ht;const Se=(Ht=Ve==null?void 0:Ve.querySelector)==null?void 0:Ht.call(Ve,"[data-goal-screen-clip]"),ke=Ve==null?void 0:Ve.classList.contains("is-windowed"),Ce=Ve==null?void 0:Ve.classList.contains("is-pinned"),Ke=ke&&Se?Se:Ve;let rt=(Ke==null?void 0:Ke.clientWidth)||window.innerWidth,mt=(Ke==null?void 0:Ke.clientHeight)||window.innerHeight;if((Ce||!ke)&&n&&window.visualViewport&&(rt=Math.round(window.visualViewport.width)||rt,mt=Math.round(window.visualViewport.height)||mt),rt=Math.max(1,rt),mt=Math.max(1,mt),rt===Wh&&mt===Xh)return;Wh=rt,Xh=mt,S.aspect=rt/mt,ec(),R.setSize(rt,mt,!1),nn.resize(rt,mt),h.u_resolution.value.set(rt,mt);const lt=Math.max(1,Math.floor(rt*.25)),Et=Math.max(1,Math.floor(mt*.25));(le.width!==lt||le.height!==Et)&&(le.setSize(lt,Et),be.setSize(lt,Et),De.setSize(lt,Et))};Oo(),window.addEventListener("resize",Oo);const qh=(Se,ke,Ce=100)=>{const Ke=Se.attributes.position.array,rt=Se.attributes.orient.array,mt=Math.min(Math.floor(ke),Ce-1),lt=Math.min(Math.ceil(ke),Ce-1),Et=ke-Math.floor(ke),Ht=new q().fromArray(Ke,mt*3).lerp(new q().fromArray(Ke,lt*3),Et),cn=new zn().fromArray(rt,mt*4).slerp(new zn().fromArray(rt,lt*4),Et);return{p:Ht,q:cn}},Da=()=>{var io,Qi,Ui,Bo,Ua,tf,nf;if(!e)return;const Se=window.innerHeight,ke=window.scrollY||0;ke!==dn&&(pn=ke>dn?1:-1,dn=ke),Jn=Ln.range("blackFrameIn").ratio;const Ce=Ln.range("blackFrameShow").ratio;No=Ln.range("blackTitle").ratio,Rt=Ln.range("blackTunnel").ratio,Ve!=null&&Ve.classList.contains("is-windowed")&&Oo(),no=Ln.range("whiteTunnel").ratio,ln=Ln.between("whiteTunnel","whiteFrameOut").ratio,Pa=Ln.range("whiteFrameOut").ratio,tc=Ln.range("whiteFrameBreak").ratio,Hh=Ln.between("whiteTunnel","whiteFrameBreak").ratio,Yt=Ln.between("whiteFrameBreak","astronautDrop").ratio,Ji=((io=Ln.range("astronautWait"))==null?void 0:io.ratio)??0,zh=Ln.between("whiteFrameBreak","astronautWait").ratio;{const Vt=Ln.range("astronautDrop"),er=Math.max(0,Vt.pixel||0),Os=Math.max(1,Vt.pixelCount||er),zs=Math.min(er,Os),Fi=window.innerWidth||1,Hn=((Qi=Ve==null?void 0:Ve.querySelector)==null?void 0:Qi.call(Ve,"[data-goal-screen-clip]"))||Ve||e.querySelector("#home-goal-image-out"),ko=(Ui=Hn==null?void 0:Hn.getBoundingClientRect)==null?void 0:Ui.call(Hn),Fa=ko?ko.left+ko.width*.5-Fi*.5:0;Bh=he(Yt,0,1,0,Fa,nh),kh=-zs,Ra=0,Ca=0}Di=No<1,Qt=Rt<1&&!Di,Ot=ln<=1&&!Qt&&!Di,Ls=Ot?Ni(0,.15,Hh):1,nn.sync({blackFrameInRatio:Jn,blackTitleRatio:No,blackTunnelRatio:Rt,whiteFrameRatio:no,whiteTunnelWaitRatio:Ji,astronautDropRatio:Yt,isWhiteTunnelActive:Ot,isBlackTunnelActive:Qt,isMobile:n});{const Vt=e.querySelector("#home-goal-image-out-inner"),er=e.querySelector("#home-goal-image-out"),Os=e.querySelector("#home-goal-image-in"),zs=e.querySelector("#home-goal-image-in-inner"),Fi=er==null?void 0:er.getBoundingClientRect(),Hn=Vt==null?void 0:Vt.getBoundingClientRect(),ko=Os==null?void 0:Os.getBoundingClientRect(),Fa=zs==null?void 0:zs.getBoundingClientRect(),n0=Ln.range("blackFrameShow").ratio,ro=window.innerWidth||1,Ho=window.innerHeight||1;let oo=Fi&&Fi.height>8?Fi.height:Hn&&Hn.height>8?Hn.height:0;oo<8&&(oo=((Hn==null?void 0:Hn.width)||(Vt==null?void 0:Vt.clientWidth)||(Ve==null?void 0:Ve.clientWidth)||ro*.7)*(1537/2e3));const rf=Qt||Di,i0=Ve==null?void 0:Ve.classList.contains("is-pinned"),r0=Ve==null?void 0:Ve.classList.contains("is-windowed"),oc=(Bo=Ve==null?void 0:Ve.getBoundingClientRect)==null?void 0:Bo.call(Ve),Bs=(Ua=Ve==null?void 0:Ve.querySelector)==null?void 0:Ua.call(Ve,"[data-goal-screen-clip]"),Na=(tf=Bs==null?void 0:Bs.getBoundingClientRect)==null?void 0:tf.call(Bs),Cr=bt=>!!bt&&bt.width>8&&bt.height>8&&bt.bottom>8&&bt.top<Ho-8&&bt.right>8&&bt.left<ro-8,of=2e3/1537,sf=(bt,so)=>{const ks=Math.max(8,so),za=ks*of,cf=(bt==null?void 0:bt.width)||ro,uf=(bt==null?void 0:bt.height)||Ho,hf=(bt==null?void 0:bt.left)||0,ff=(bt==null?void 0:bt.top)||0;return{left:hf+(cf-za)*.5,top:ff+(uf-ks)*.5,width:za,height:ks,right:hf+(cf-za)*.5+za,bottom:ff+(uf-ks)*.5+ks}};let gn,Oa;if(rf)gn=Cr(ko)?ko:Cr(Na)?Na:Cr(oc)?oc:null,Oa=Cr(Fa)?Fa:gn;else if(i0||r0){const bt=Cr(Na)?Na:oc,so=Cr(Fi)&&Fi.height>8?Fi.height:Math.min(((bt==null?void 0:bt.height)||Ho)*.72,((bt==null?void 0:bt.width)||ro)*.92/of);gn=sf(bt,so),Oa={left:gn.left+gn.width*.022,top:gn.top+gn.height*.028,width:gn.width*.957,height:gn.height*.702},oo=gn.height}else gn=Cr(Fi)?Fi:sf({left:0,top:0,width:ro,height:Ho},oo),Oa=Cr(Hn)?Hn:gn;let af=20;try{const bt=getComputedStyle(document.documentElement),so=parseFloat(bt.getPropertyValue("--global-border-radius")||"");Number.isFinite(so)&&so>0&&(af=so)}catch{}const tr=Ar==null?void 0:Ar.updateFromScroll({isBlackSide:rf,blackFrameInRatio:Jn,whiteFrameOutRatio:Pa,glassBreakRatio:Yt,astronautDropRatio:Yt,blackFrameShowRatio:n0,frameRect:gn,innerRect:Oa,viewportW:ro,viewportH:Ho,globalRadius:af});tr&&(Ra=tr.cameraViewportOffsetX||0,Ca=tr.cameraViewportOffsetY||0);const lf=1-Xt(Pa,0,1),o0=Math.hypot(ro,Ho),s0=Math.min((gn==null?void 0:gn.width)>8?gn.width:oo*(2e3/1537),oo),a0=(tr==null?void 0:tr.frameScale)??Bt.lerp(1,o0/Math.max(s0,1),lf),l0=(tr==null?void 0:tr.frameRotation)??lf*-.3;Li&&Li.updateFromScroll({glassBreakRatio:Yt,astronautDropRatio:Yt,frameHeight:oo,frameRotation:l0,frameScale:a0})}Oe.u_whiteTunnelRatio.value=ln,Oe.u_showRatio.value=Ls,Oe.u_frameOutRatio.value=tc,Zi.uniforms.u_ratio.value=ln,Bn.uniforms.u_ratio.value=ln,Zi.uniforms.u_ratioInverse.value=1-ln,Bn.uniforms.u_ratioInverse.value=1-ln,Oe.u_ambientColor.value.set(Ot&&Yt<1?"#6a7f94":"#566d80");const Ke=new Ye("#ffffff");Qt||Di?Ke.set("#000000"):Ot&&Ke.set(Yt<1?"#ffffff":"#000000"),Mr.uniforms.u_color.value.copy(Ke),C.background=null,R.setClearColor(Ke,nn.clearAlpha),Oe.u_bgColor.value.copy(Ke),Ve&&!Ve.classList.contains("is-windowed")&&(Ve.style.background=Yt>=1&&!n?"transparent":Ke.getStyle());const rt=Ve==null?void 0:Ve.classList.contains("is-windowed");!(Ve==null?void 0:Ve.classList.contains("is-pinned"))||rt?(document.documentElement.style.background="",document.body.style.background=""):Ot&&Yt>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):Ot?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):Qt||Di?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Fe.visible=Ot&&Yt<1,yn.visible=Qt,Si.visible=!(Ot&&Yt<1),Ki.u_bgColor.value.copy(Ke);const lt=Bt.clamp(Ce,0,1),Et=Bt.clamp(Jn,0,1);Pi.position.y=-(10*(1-lt)+2.5+30*Et),Pi.scale.setScalar(he(Et,0,.5,40,70)),ji.rotation.x=he(Et,0,.5,0,-1),Pi.visible=Et<1&&!Ot&&!Qt;const Ht=document.getElementById("header");Ht&&((Ve==null?void 0:Ve.classList.contains("is-pinned"))?Ot||Ji>0?Ht.style.color="#000000":Ht.style.color="#ffffff":Ht.style.color="");const cn=e.dataset.goalPhase==="black-tunnel",kn=e.dataset.goalPhase==="white";(Qt&&!cn||Ot&&!kn)&&nn.markEfxSync();const un=Ot;for(const Vt of $){const er=un?Vt.userData.whiteMat:Vt.userData.blackMat;Vt.material!==er&&(Vt.material=er)}de=Qt?Ni(.2,.4,Rt):0,Me.value=de;for(const Vt of tt)Vt.visible=!Ot&&de>.01;let _n;if(Ot){const Vt=ln<1?he(ln,0,1,0,79):he(Yt,0,1,79,99);_n=qh(l,Vt,100),_n.p.y-=(n?0:.4)*Vw(Yt)}else _n=qh(a,100*th(Jn),100);if(we.copy(_n.p),ve.copy(_n.q),K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0,Qt){const Vt=Rt;K.positionFrequency=.2+.5*Vt,K.rotationFrequency=.15,K.positionAmplitude=5*Vt,K.rotationAmplitude=60*Vt}else Ot&&(K.positionFrequency=he(no,0,.45,.5,.2),K.rotationFrequency=he(no,0,.45,.4,.15),K.positionAmplitude=he(no,0,.75,5,0),K.rotationAmplitude=he(no,0,.75,15,0));Y.visible=Ls>.02;const rn=window.innerHeight||1,yi=(nf=Ve==null?void 0:Ve.querySelector)==null?void 0:nf.call(Ve,"[data-goal-screen-clip]"),zo=Math.max(1,Ji>.001||Yt>=1?rn:rt&&(yi==null?void 0:yi.clientHeight)||(Ve==null?void 0:Ve.clientHeight)||rn),Rr=Jn<1?Jn:Ji>.001||Yt>=1?1:1-no,Fs=Bt.lerp(zo,rn,Rr),Ns=T.distanceTo(P),La=M/180*Math.PI,Ia=Math.tan(La/2)*Ns*2*(rn/Math.max(Fs,1));O=Math.atan(Ia/2/Ns)*2/Math.PI*180,Ot?I=he(ln,0,1,60,0):Qt?(I=Math.sin(Rt*10+Pt)*(n?4.5:7.5)*Ni(0,.2,Rt),yn.position.z=-80*yo(.2,0,Rt)):(I=0,yn.position.z=-80),Fo=.08*Ni(.5,1,No)+.02,ln>0&&(Fo*=he(Ln.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Fo=he(Ji,0,.1,Fo,.05),Aa=(1-Ds)*pn*2.5*he(Jn,0,.5,0,1)*he(Ji,0,.25,1,0),ec(),Le.u_frameIn.value=Jn,Le.u_sunFactor.value=Qt?1-Ni(.1,.2,Rt):1,Le.u_blackTunnelRatio.value=Qt?Ni(.1,.3,Rt):0,Le.u_endRatio.value=Qt?Ni(.65,.9,Rt):0,Le.u_offsetZ.value=h.u_offsetZ.value;const zt=he(Yt,1,0,.2,1)*(tc>0?1:0);Oe.u_tintColor.value.setStyle("#2533c2").multiplyScalar(zt);const Ii=Ve.getBoundingClientRect();Us=Ii.bottom>0&&Ii.top<Se,Us&&!Gh&&Di&&(Is=0,Er=0),Gh=Us,e.dataset.goalPhase=Ot?"white":Qt?"black-tunnel":Jn<.98||Ve!=null&&Ve.classList.contains("is-windowed")?"window":"title"},Qm=Se=>{if(!Qt){h.u_showRatio.value=0,nn.setEfxOffset(0,0);return}h.u_showRatio.value=Fw(yo(0,.1,Rt));const ke=h.u_outBloomFromToStrength.value;ke.z=he(Rt,.65,.75,0,.2),ke.z=he(Rt,.75,.85,ke.z,.15),ke.z=he(Rt,.85,1,ke.z,.15),ke.x=he(Rt,.75,.85,20,60),ke.x=he(Rt,.9,1,ke.x,30);const Ce=he(Rt,.6,1,0,1,Ow);h.u_blackTunnelTransformRatio.value=Ce;const Ke=pn*Se;E+=Ke*yo(.1,.3,Rt)*he(Ce,0,.25,1,.5),D+=Ke*he(Ce,0,.25,1.5,1);const rt=E,mt=Math.floor(rt),lt=rt-mt,Et=(mt+nh(lt))*ml+D*ml+Rt*ml*10,Ht=-80*yo(.2,0,Rt);let cn=Ht-re,kn=Et-Z;(Math.abs(kn)>8||Math.abs(cn)>20)&&(kn=0,cn=0),j=cn+kn,re=Ht,Z=Et,yn.position.z=Ht,h.u_offsetZ.value=Et,Le.u_offsetZ.value=Et,h.u_time.value=Pt;const un=Ys.length*he(Rt,.2,1,0,1),_n=Math.floor(un),rn=Math.min(Math.ceil(un),Ys.length-1),zo=un-_n>.5?1:0;xt.set(Ys[_n]),ft.set(Ys[rn]),xt.lerp(ft,zo),h.u_color1.value.copy(xt),xt.set(Xc[_n]),ft.set(Xc[rn]),xt.lerp(ft,zo),h.u_color2.value.copy(xt);const Rr=n?.45:1;nn.setEfxOffset(j*he(Rt,0,.2,0,1)*Rr,j*Ce*.01*Rr),nn.setEfxAmount(he(Rt,0,.25,.35,.85)*(n?.35:1)),I=Math.sin(Rt*10+Pt)*(n?4.5:7.5)*Ni(0,.2,Rt)};let rc=0;const e0=Se=>{if(!Ot){wr.update({whiteTunnelWaitRatio:0,aspect:S.aspect}),rc=ln;return}ot.update(Se),Zi.uniforms.u_time.value=Pt,Bn.uniforms.u_time.value=Pt,Zi.uniforms.u_fbm.value=Ct,Bn.uniforms.u_fbm.value=Ct;let ke=ln-rc;Math.abs(ke)>.08&&(ke=0);const Ce=n?0:.7,Ke=Bt.clamp(-ke*he(ln,0,.9,500,0,eh)*Ce,-1,1),rt=Bt.clamp(-ke*he(ln,0,.8,45,0,eh)*Ce,-1,1);nn.setEfxOffset(Ke,rt),nn.setEfxAmount(n?0:he(ln,.75,1,1,0)),rc=ln;const mt=Ot&&Yt>=1?"#000000":Ot?"#ffffff":"#000000",lt=n?Math.max(S.aspect,.95):Math.max(S.aspect,.01);wr.update({whiteTunnelWaitRatio:Yt>=1?Ji:0,aspect:lt,bg:mt})},Yh=()=>Da();window.addEventListener("scroll",Yh,{passive:!0}),Da();const $h=Se=>{var Ia;const ke=Math.min(.05,Math.max(0,Se||.016666666666666666));if(Vh=performance.now(),!Us){if(Ve){const zt=Ve.getBoundingClientRect();zt.bottom>0&&zt.top<window.innerHeight&&nn.render()}return}Ds+=((Ea?1:0)-Ds)*.1,st=he(Ds,0,1,1,.3)*ke,st=he(Jn,0,1,ke,st),st=he(zh,.5,.75,st,ke),Pt+=st,Oe.u_time.value=Pt,Aa=(1-Ds)*pn*2.5*he(Jn,0,.5,0,1)*he(Ji,0,.25,1,0),Qm(st),e0(st),Jm(st),Qt&&(I=Math.sin(Rt*10+Pt)*(n?4.5:7.5)*Ni(0,.2,Rt)),ec();const Ce=Yt,Ke=he(Ce,0,.1,0,1)*he(Ce,.9,1,1,0);Oe.u_loopLinearBlend.value=Ke;const rt=he(Ce,.9,1,0,1,th);Be=rt>0;let mt,lt,Et,Ht=!0;if(Ce<.5)Er=0,mt=Ni(-.3,1,No)*.75,lt=0,Et=89,fe.uniforms.u_cardOpacity.value=0;else{mt=he(Ce,.9,1,0,1),lt=140,Et=287;const zt=Math.min(2,Math.max(0,.5+Math.max(0,Ie.getFbm(Pt*8,3)+.5)*4));fe.uniforms.u_cardOpacity.value=zt*rt,Ce<1?(Er=Math.max(0,Er),Ht=!1):(Ht=!0,Er=0)}Er===0&&(Is+=st*mt*nc),Ke===1&&(Is=0);const cn=Math.max(1,Et-lt+1),kn=ye[0];let _n=(kn+Is)*60;_n=(_n%cn+cn)%cn;let rn=Math.floor(_n),yi=(rn+1)%cn+lt;rn+=lt,yi<rn&&!Ht&&(yi=rn=lt,Is=-kn,Er=Number.POSITIVE_INFINITY);const zo=_n-Math.floor(_n);J.setXYZ(0,rn,yi,zo),J.needsUpdate=!0;const Rr=he(Pa+Ce,.9,2,90,139,Hw),Fs=Math.floor(Rr),Ns=Math.ceil(Rr),La=Rr-Fs;ee.setXYZ(0,Fs,Ns,La),ee.needsUpdate=!0,Ue.visible=Ce>=.95&&Ls>.02,ue=Be?ue+st:0;{const zt=Ee.x,Ii=Ee.y,io=Math.floor(10*ue%(zt*(Ii+1))),Qi=io/(zt*(Ii+1)),Ui=yo(0,.15,Qi)*yo(1,.9,Qi);Oe.u_faceLedLight.value=Ui,fe.uniforms.u_cardUvOffset.value.set(io%zt/zt,(Ii-Math.floor(io/zt))/Ii)}if(Oe.u_cardPosition.value.set(_e.getX(0),_e.getY(0)+.9,_e.getZ(0)),de>.01&&!Ot&&!Di){for(let zt=0;zt<ne;zt++){Re[zt]=(Re[zt]+.2*st)%1,Er===0&&(Ae[zt]+=st*mt*nc);const Qi=(Bt.lerp(0,ye[zt+1],de)+Ae[zt])*60%cn;let Ui=Math.floor(Qi),Bo=(Ui+1)%cn+lt;Ui+=lt,Bo<Ui&&!Ht&&(Bo=Ui=lt);const Ua=Qi-Math.floor(Qi);pe.setXYZ(zt,Ui,Bo,Ua),me.setXYZ(zt,Fs,Ns,La)}pe.needsUpdate=!0,me.needsUpdate=!0}if((Ia=nn.setScrollVelocity)==null||Ia.call(nn,Math.abs(Aa)+Math.abs(pn)*.5),Qt){const zt=h.u_resolution.value.clone();Fe.visible=!1,Si.visible=!1,Y.visible=Ls>.02,h.u_feedbackTexture.value=Ne.texture,h.u_resolution.value.set($e.width,$e.height),R.setRenderTarget($e),R.setClearColor(0,0),R.clear(),R.render(C,S),He($e,n?10:16),He($e,n?3:4),R.setRenderTarget(null),h.u_resolution.value.copy(zt);const Ii=Ne;Ne=$e,$e=Ii,h.u_feedbackTexture.value=Ne.texture,Le.u_blackTunnelTexture.value=Ne.texture,Si.visible=!0}R.setClearColor(Oe.u_bgColor.value,nn.clearAlpha),nn.render()},Zh=Se=>{ic=requestAnimationFrame(Zh);const ke=Math.min(.05,(Se-Vh)/1e3);Se-Kh>50&&$h(ke)};let Kh=0;const t0=Se=>{Kh=performance.now(),$h(Se)};return ic=requestAnimationFrame(Zh),requestAnimationFrame(()=>{Oo(),Da(),nn.render()}),{resize:Oo,updateScroll:Da,tickFrame:t0,getAutoScrollSpeed:()=>Aa,getGlassRatio:()=>(Li==null?void 0:Li.ratio)??0,getAstronautDropRatio:()=>Yt,getWhiteTunnelRatio:()=>ln,getBlackFrameInRatio:()=>Jn,getBlackTunnelRatio:()=>Rt,getBlackTitleRatio:()=>No,isGoalAudioActive:()=>!!(Ve&&(Ve.classList.contains("is-pinned")||Ve.classList.contains("is-windowed")||Us&&(Di||Qt||Ot))),destroy(){cancelAnimationFrame(ic),window.removeEventListener("resize",Oo),window.removeEventListener("scroll",Yh),Li==null||Li.dispose(),Ar==null||Ar.dispose(),le.dispose(),be.dispose(),De.dispose(),z.dispose(),nn.destroy(),R.dispose()}}}function _M(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=Fh(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(C=>{C._offsetX=0});return}b.forEach(C=>{C.style.transform="translateZ(0)"});let w=g;b.forEach(C=>{const T=C.getBoundingClientRect();C._domRect=T,w-=T.width});let y=0;const L=w/(b.length-1);b.forEach(C=>{C._offsetX=-C._domRect.left+_+y,y+=C._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=he(_,0,.25,0,1);r.progress();const w=window.visualViewport,y=Math.round((w==null?void 0:w.height)||window.innerHeight),L=Math.round((w==null?void 0:w.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const F=i.getBoundingClientRect(),N=window.scrollY||0,k=Math.round((w==null?void 0:w.offsetLeft)||0),H=Math.round((w==null?void 0:w.width)||window.innerWidth),W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+N,B=N>=W-1&&F.bottom>0,se=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",B),u&&(u.style.height=B?`${y}px`:"0px"),B&&!se?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!B&&se&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.left="",t.style.width="",t.style.height="",window.dispatchEvent(new Event("resize"))),B&&(t.style.top=`${L}px`,t.style.left=`${k}px`,t.style.width=`${H}px`,t.style.height=`${y}px`,t.style.right="auto",t.style.bottom="auto"),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let C=he(v,a,l,0,1);const T=C>0&&C<1;let P=he(C,.5,1,1,o()?9:12,th);P*=he(C,0,.15,.85,1,kw);let M=he(C,.9,1,1,0);M*=he(C,0,.05,0,1),M*=he(g,0,.12,1,0);const S=he(C,.4,.6,0,1,nh);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(M),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=T&&M>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(F=>{const N=F._offsetX||0;F.style.transform=`translateX(${S*N}px)`}),s){const F=he(g,.02,.15,1,0);s.style.opacity=String(F),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const R=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":R<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function gl(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function gM(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function go(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function vM(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=go(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=go(document.getElementById("home-reel-desc"),2),l=go(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}),v.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)",X.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(X=>{X.style.overflow="hidden",X.style.display="block",X.style.position="relative"}),f=[...gl(r,"word"),...gl(o,"word")],f.forEach(X=>{X.style.position="relative",X.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=gl(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),w=go(document.getElementById("home-featured-title"),2),y=go(document.getElementById("home-featured-disclaimer"),2),L=go(document.getElementById("home-featured-cta"),1);let C=[],T=[],P=!0;const M=()=>{P=!1,w&&(w._time=0,w._animating=!1),y&&(y._time=0,y._animating=!1),L&&(L._time=0,L._animating=!1),i()||(T.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}),C.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(w){if(w.style.overflow="hidden",C=gM(w),y){const X=y.textContent.trim();y.textContent="";const ge=document.createElement("div");ge.className="line",ge.textContent=X,ge.style.transform="translate3d(0, 100%, 0)",ge.style.willChange="transform";const _e=document.createElement("div");_e.style.position="relative",_e.style.overflow="hidden",_e.appendChild(ge),y.appendChild(_e),T=[ge]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),M()}})();const R=go(document.getElementById("home-goal-title"),2);let F=[];R&&(R.style.overflow="hidden",F=gl(R,"word"),F.forEach(X=>{X.style.transform="translate3d(0, 100%, 0)",X.style.opacity="0"}));let N=0,k=!1,H=0;const V=X=>{if(!t||!e)return;if(!En(e).isActive){g=!0;return}g&&(g=!1,_());const _e=En(t),Pe=En(s||a),ee=window.innerHeight*.1;if(t._time=Xt(t._time+(t._animating?X:-X),0,2),a&&(a._time=Xt(a._time+(a._animating?X:-X),0,2)),l&&(l._ratio=ii(l._ratio+(l._animating?X:-X))),_e.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):f.forEach((ce,le)=>{let be,De;le<2?(be=he(t._time-Math.abs(2-le)/10,.5,1.2,-m,0,_t),De=he(t._time-le/10,0,1,100,0,_t)):(be=0,De=he(t._time-le/10,0,1,-100,0,_t)),ce.style.transform=`translate3d(${be}px, ${De}%, 0)`}),n)){const ce=_e.showScreenOffset*-ee*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Pe.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Pe.showScreenOffset*-ee*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(le=>{le.style.opacity="1",le.style.transform="translate3d(0, 0, 0)"}):v.forEach((le,be)=>{const De=he(a._time-be/100,0,1,.1,1,Vl),Ne=he(a._time-be/100,0,1,100,0,Vl);le.style.opacity=String(De),le.style.transform=`translate3d(0, ${Ne}%, 0)`})),l){const le=Pe.showScreenOffset*-ee*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${le}px) translate3d(0, ${he(l._ratio,0,1,150,0,_t)}%, 0) rotate(${he(l._ratio,0,1,10,0,_t)}deg)`,l.style.opacity=String(_t(l._ratio))):(l.style.transform=`translateY(${le}px)`,l.style.opacity="1")}}if(c){const ce=En(c),le=ii(he(ce.showScreenOffset,.05,.85,0,1,_t));c.style.opacity=String(le),c.style.transform=`translate3d(0, ${he(le,0,1,80,0,_t)}px, 0) scale(${he(le,0,1,.96,1,_t)})`}if(u){const ce=En(u);H=ii(he(ce.showScreenOffset,0,.7,0,1,_t)),u.style.opacity=String(.4+H*.6),u.style.transform=`translate3d(0, ${he(H,0,1,60,0,_t)}px, 0) scale(${he(H,0,1,.94,1,_t)})`,k=H>.9,N=Xt(N+(k?X:-X*2),0,1.4),d.forEach((le,be)=>{const De=he(N-be/10,0,.6,0,1,_t),Ne=he(N-be/10,0,.6,0,180,_t);le.style.transform=`scale(${De}) rotate(${Ne}deg)`,le.style.display="inline-block"})}},W=X=>{if(!b||!w)return;if(En(b).isActive){P&&M();const _e=En(w),Pe=En(y),J=En(L);w._time=Xt(w._time+(w._animating?X:-X),0,2),y&&(y._time=Xt(y._time+(y._animating?X:-X),0,2)),L&&(L._time=Xt(L._time+(L._animating?X:-X),0,1)),_e.screenRatio>-1&&(w._animating=!0,i()?C.forEach(ee=>{ee.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((ee,ce)=>{const le=he(w._time*1.5-ce/20,0,1,1,0,_t),be=he(w._time*1.5-ce/20,0,1,10,0,_t);ee.style.transform=`translate3d(0, ${le}em, 0) rotate(${be}deg)`})),Pe.screenRatio>-1&&y&&(y._animating=!0,i()?T.forEach(ee=>{ee.style.transform="translate3d(0, 0, 0)"}):T.forEach((ee,ce)=>{const le=he(y._time-ce/20,0,1,100,0,_t);ee.style.transform=`translate3d(0, ${le}%, 0)`})),J.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${he(L._time,0,1,150,0,_t)}%, 0) rotate(${he(L._time,0,1,10,0,_t)}deg)`,L.style.opacity=String(_t(L._time))))}else P=!0},B=X=>{if(!R)return;En(R).screenRatio>-1&&(R._animating=!0),R._time=Xt(R._time+(R._animating?X:-X),0,2),F.forEach((_e,Pe)=>{const J=he(R._time-Pe/20,0,1,0,1,_t),ee=he(R._time-Pe/20,0,1,100,0,_t);_e.style.opacity=String(J),_e.style.transform=`translate3d(0, ${ee}%, 0)`})},se=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",se),{update(X){V(X),W(X),B(X)},destroy(){window.removeEventListener("resize",se)}}}const Yd=28,xM=4,SM=8;function $d(){return window.innerWidth<812}function yM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,M;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((M=a==null?void 0:a.textContent)==null?void 0:M.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(S=>{const R=document.createElement("div");if(R.className="project-item-line-2-inner-list",R.style.transform="translateY(-400%)",S===" ")R.style.width="0.3em";else for(let F=0;F<4;F++){const N=document.createElement("span");N.textContent=S,R.appendChild(N)}a.appendChild(R),d.push(R)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,w=!1,y=0,L=0,C=0,T=0;return $d()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(S){const R=En(t),F=R.ratio>-1&&R.ratio<1;F&&(w=!0),w&&(_+=S);const N=ii(he(_,0,.85,0,1,_t)),k=he(N,0,1,90,0,_t);if(t.style.opacity=String(N),t.style.transform=`translate3d(0, ${k}px, 0)`,s&&F){p+=S;const H=Math.min(c.length,Math.floor(Yd*p)-xM),V=Math.min(c.length,Math.floor(Yd*p));let W="";for(let B=0;B<Math.max(0,H);B++)W+=c[B];for(let B=0;B<V-Math.max(0,H);B++)W+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=W}if(F&&(b+=S*.8),g=ii(g+(m?1:-1)*S*2.5),$d())d.forEach((H,V)=>{const W=ii(g-Math.abs(V-d.length-1)/100),B=he(W,0,1,0,1.5,_t);H.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((H,V)=>{const W=he(V,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),B=ii(b-Math.cos(W)/SM),se=he(B,0,1,500,0,Nw),X=ii(g-Math.abs(V-d.length-1)/100),ge=he(X,0,1,0,1.5,_t);H.style.transform=`translate3d(${ge}em, -${se}%, 0)`}),l){const H=he(g,.3,1,0,1,_t);l.style.transform=`translateX(${H}em)`}if(v=Xt(v+(f?1:-1)*S,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(C=(Math.random()-.5)*he(v,0,.6,1,0)*8,T=(Math.random()-.5)*he(v,0,.6,1,0)*8):(C*=.92,T*=.92),y+=(C-y)*.2,L+=(T-L)*.2;const H=he(v,0,1,1,1.06,_t);o.style.transform=`translate3d(${y}px, ${L}px, 0) scale(${H})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Zd=12,Kd=6,wM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,MM=`
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
  float stepDist = dist / float(${Zd});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Zd}; i++) {
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
  float numSampleInv = 1.0 / float(${Kd});
  for (int i = 0; i < ${Kd}; i++) {
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
`;function bM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function TM(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new Jl({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(y){return n.remove(),console.warn("Featured WebGL unavailable",y),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Fn;const o=new Jr,s=new Kl(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new Bi,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=y=>{c.x=y.clientX,c.y=y.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new li(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(y,L)=>{var le,be,De;const C=y.dataset.id||((le=i[L])==null?void 0:le.id),T=y.querySelector(".project-item-main"),P=y.querySelector(".project-item-image img");P&&(P.style.opacity="0",P.setAttribute("aria-hidden","true"));const M=new Ye(y.dataset.colorBg||"#111111");let S,R;try{[S,R]=await Promise.all([a.loadAsync(`${l}${C}/home.webp`),a.loadAsync(`${l}${C}/home_depth.webp`)])}catch(Ne){console.warn("Featured WebGL textures failed for",C,Ne),P&&(P.style.opacity="1");return}S.colorSpace=Fn,S.wrapS=S.wrapT=On,S.minFilter=gt,S.magFilter=gt,S.generateMipmaps=!1,R.colorSpace=jt,R.wrapS=R.wrapT=On,R.minFilter=gt,R.magFilter=gt,R.generateMipmaps=!1;const F=new et(((be=S.image)==null?void 0:be.width)||1024,((De=S.image)==null?void 0:De.height)||1024),N=new q(0,0,-1),k=new ih(new q,1,.6,2),H=bM(1,2.2,.7,3);H.target=0;const V=new et,W=new et,B={u_texture:{value:S},u_depthTexture:{value:R},u_colorBg:{value:M},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:F},u_domWH:{value:new et(1,1)},u_shiftXY:{value:V},u_focusPos:{value:N},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new et(1,1)},u_globalRadius:{value:15},u_time:{value:0}},se=new At({uniforms:B,vertexShader:wM,fragmentShader:MM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),X=new Ut(d,se);X.frustumCulled=!1,X.renderOrder=10+L,X.visible=!1,o.add(X);let ge=!1,_e=0,Pe=0,J=0;const ee=[0,.2,.3],ce=Ne=>{for(let $e=0;$e<ee.length;$e++)if(Ne<ee[$e])return $e;return ee.length};window.innerWidth>=812&&(T==null||T.addEventListener("mouseenter",()=>{ge=!0}),T==null||T.addEventListener("mouseleave",()=>{ge=!1})),f.push({mesh:X,uniforms:B,focusDyn:k,focusPos:N,zoomDyn:H,shiftXY:V,shiftXYTarget:W,index:L,main:T,dom:y,update(Ne,$e,We,nt,z){const je=En(y);if(!(je.ratio>-1&&je.ratio<1)||!T){Pe=0,X.visible=!1,B.u_showRatio.value=0;return}Pe+=Ne;const Je=T.getBoundingClientRect(),He=Math.max(1,Je.width),Oe=Math.max(1,Je.height);B.u_domWH.value.set(He,Oe),B.u_resolution.value.set($e,We),B.u_time.value=nt,B.u_rippleStrength.value=Math.min(.15,z*.5),B.u_globalRadius.value=Math.min(He,Oe)*.04;const Le=he(Pe,0,2,0,1,Vl),U=L%2-.5,A=(1-Le)*U*-$e*.1,Y=(1-Le)*U*.1;X.position.set(Je.left+He*.5+A,We-(Je.top+Oe*.5),0),X.scale.set(He,Oe,1),X.rotation.z=-Y;const $=he(Pe,0,1.5,0,1,Vl);B.u_showRatio.value=$,X.visible=$>.01;const ne=_e;if(_e=Xt(_e+(ge?1:-1)*Ne,0,1),ne<_e){const Te=ce(ne),pe=ce(_e);pe!==Te&&W.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(he(_e,0,.6,1,0)),pe===ee.length&&W.multiplyScalar(.5)}else W.multiplyScalar(.95);V.lerp(W,.2);const ie=k.target;if(ge){const Te=_e>0?he(_e,0,.3,1,0)*Oe*.75:0;ie.x=(c.x-Je.left-He*.5+Math.cos(nt*20)*Te)/He*-Oe,ie.y=(c.y-Je.top-Oe*.5-Math.sin(nt*30)*Te)/Oe*Oe,ie.z=.5}else ie.x=0,ie.y=0,ie.z=-1;k.update(Ne),N.copy(k.value),H.target=ge?1:0,H.update(Ne),B.u_zoomRatio.value=H.value,J=Xt(J+(ge?.75:-1)*Ne,0,1),B.u_dofRangeOffset.value=Bt.lerp(0,-.5,J),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,b=0;const w=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return w(),window.addEventListener("resize",w),{update(y){_+=y;const L=window.scrollY,C=Math.abs(L-p)/Math.max(y,.001);p=L,b+=(Math.min(1,C*.002)-b)*.15;const P=En(e).isActive;if(n.style.visibility=P?"visible":"hidden",!!P){for(const M of f)M.update(y,v,g,_,b);r.render(o,s)}},resize:w,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",w),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(y=>{y.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function EM(){return window.innerWidth<812}function AM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function RM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&AM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,w=0;const y=C=>{var P;if(!C)return;const T=(P=C.play)==null?void 0:P.call(C);T&&typeof T.catch=="function"&&T.catch(()=>{})};return{update:C=>{var R;if(!i)return;const T=e?En(e):null,P=n?En(n):null,M=EM(),S=M?!!(P!=null&&P.isActive):!!T&&T.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",S),S){const F=(T==null?void 0:T.top)??0,N=(T==null?void 0:T.height)??1,k=window.innerHeight,H=F-(k-N)*.5,V=((P==null?void 0:P.top)??0)-(k-((P==null?void 0:P.height)??k))*.5;if(w=ii(he(window.scrollY+F,H,V,0,1)),w=ii(he((T==null?void 0:T.showScreenOffset)??0,.15,1.1,0,1,_t)),r&&(y(r),r.style.opacity=String(.35+w*.65)),t&&(y(t),t.style.opacity=String(1-w*.85)),e){const W=he(w,0,1,1,1.08,_t);e.style.transform=`scale(${W})`,e.style.opacity=String(he(w,.7,1,1,.15,_t))}if(n){const W=he(w,0,1,48,0,_t),B=he(w,0,1,.94,1,_t);n.style.transform=`translate3d(0, ${W}px, 0) scale(${B})`,n.style.opacity=String(.25+w*.75)}w===1||w>.9?(m=!0,v=!0):(v=!1,m=!1),p=w>.85,b=w>.85}else(R=r==null?void 0:r.pause)==null||R.call(r),w=0,m=!1,v=!1,p=!1,b=!1;if(d=Xt(d+(m?C:-C),0,1e9),f=Math.min(w,ii(f+(v?C:-C))),u=d%l,o!=null&&o._splitted&&!M){const F=o._splitted.words;for(let N=0;N<F.length;N++){const k=F[N];c-u>l-1&&(k._randCharIndex=Math.round(Math.random()*(k._chars.length-1)));for(let H=0;H<k._chars.length;H++){const V=k._chars[H];let W=he(f-N/4-H/20,0,.6,200,0,_t);H===k._randCharIndex&&(W+=he(u-N/10,.5,1.3,0,-100,_t)),V._inner&&(V._inner.style.transform=`translate3d(0, ${W}%, 0)`)}}}c=u,g=Xt(g+(p?C:-C*2),0,1.4),_=Xt(_+(b?C:-C*2),0,1.4),s.forEach((F,N)=>{const k=he(g-N/10,0,.6,0,1,_t),H=he(g-N/10,0,.6,0,180,_t);F.style.transform=`scale(${k}) rotate(${H}deg)`}),a.forEach((F,N)=>{const k=he(_-N/10,0,.6,0,1,_t),H=he(_-N/10,0,.6,0,180,_t);F.style.transform=`scale(${k}) rotate(${H}deg)`})},destroy(){}}}const Yc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],CM=`
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
`,PM=`
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
`,DM=`
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
`,LM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function IM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function UM(){const i=IM(),e="/zyrax-studio/",t=await Promise.all(Yc.map(T=>Tn(`${e}assets/models/lines/${T.fileName}.buf`))),n=new Jr,r=new Gn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let s;try{s=new Jl({canvas:i,alpha:!0,antialias:!o,premultipliedAlpha:!1,powerPreference:o?"low-power":"default"})}catch(T){return console.error("Lines WebGL unavailable",T),{update(){},resize(){},destroy(){},setPaused(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new q,c=new q,u=new Cs,d=new et,f=new yt,m=new yt,v=new yt,g=new yt;let _=!1,p=!0;for(let T=0;T<Yc.length;T++){const P=Yc[T],M=t[T],S=document.querySelector(P.sectionSelector);if(!S||!M)continue;const R=new xi,F=new xi;R.add(F),n.add(R);const N=new At({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:P.aoThreshold},u_color0:{value:new Ye(P.color0)},u_color1:{value:new Ye(P.color1)},u_radius:{value:.008}},vertexShader:CM,fragmentShader:PM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),k=new Ut(M,N);k.frustumCulled=!1,k.renderOrder=200,F.add(k);const H=new At({uniforms:{u_color0:{value:new Ye(P.color0)},u_color1:{value:new Ye(P.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:DM,fragmentShader:LM,side:Pn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),V=new Ut(new li(2,2),H);V.frustumCulled=!1,V.renderOrder=200,F.add(V);const W=M.attributes.position.array,B=M.attributes.position.count,se=new Float32Array(B);for(let X=0;X<B;X++)se[X]=W[X*3+2];a.push({data:P,sectionEl:S,container:R,inner:F,mesh:k,mat:N,circle:V,circleMat:H,lineRatioArray:se,cpAttr:M.attributes.CP,cdAttr:M.attributes.Cd,count:B,offsetY:0,framePos:new q,frameQuat:new zn,frameScale:new q(1,1,1)})}let b=1,w=1;const y=()=>{b=window.innerWidth||1,w=window.innerHeight||1;const T=Math.sqrt(b*b+w*w),P=w/T;d.set(b/w*P,P),r.fov=60,r.aspect=b/w,r.position.set(b/2,-w/2,w/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(b/2,-w/2,0),r.updateProjectionMatrix(),s.setSize(b,w,!1)};y(),window.addEventListener("resize",y);const L=T=>{var A;const{data:P,sectionEl:M,container:S,inner:R,mat:F,circle:N,circleMat:k,lineRatioArray:H,cpAttr:V,cdAttr:W,count:B}=T,X=En(M).top+T.offsetY,ge=w,_e=P.scrollToRatioFactors;let Pe=ii(-(X-_e[0]*ge)/(_e[1]*ge));Pe=Bw(Pe);const J=b<=812,ee=.008*he(b,540,1920,2,1)*(J?.72:1),ce=b/d.x,le=w/d.y;let be=P.margin.x,De=P.margin.y;J&&P.id==="goal"&&(be=.42,De=-.35),R.position.x=be*ce,R.position.y=De*le-X,R.scale.set(ce,le,1),T._showSmooth==null&&(T._showSmooth=Pe),T._showSmooth+=(Pe-T._showSmooth)*(J?.32:.18),T._targetA=Pe,F.uniforms.u_showRatio.value=T._showSmooth,F.uniforms.u_radius.value=ee;const Ne=(A=M.dataset)==null?void 0:A.goalPhase,$e=P.id==="goal"&&(Ne==="black-tunnel"||Ne==="white");if(S.position.copy(T.framePos),S.quaternion.copy(T.frameQuat),S.scale.copy(T.frameScale),S.updateMatrixWorld(!0),u.min.copy(P.boxMin),u.max.copy(P.boxMax),u.applyMatrix4(R.matrixWorld),S.visible=!$e&&u.max.y>-w&&u.min.y<0&&T._showSmooth>.001,!S.visible)return;const We=T._showSmooth;let nt=0,z=B-1;for(;nt<z;){const Y=nt+z+1>>1;H[Y]<=We?nt=Y:z=Y-1}const je=nt,Xe=Math.min(je+1,B-1);let Je=0;if(je<B-1){const Y=H[Xe]-H[je]||1;Je=(We-H[je])/Y}l.fromArray(V.array,je*3),c.fromArray(V.array,Xe*3),l.lerp(c,Je);const He=W.array;let Oe=He[je]*(1-Je)+He[Xe]*Je;Oe=.9+.1*Oe;const Le=ii((We-(P.aoThreshold-.02))/.04);N.position.copy(l),N.scale.set(ee,ee,1),k.uniforms.u_ao.value=Math.min(1,Oe+1-Le);let U=H[je]*(1-Je)+H[Xe]*Je;U=1-Math.pow(1-Xt(U,0,1),2),k.uniforms.u_mixRatio.value=U},C=()=>{if(_){if(p){for(const M of a)M.container.visible=!1;s.clear(),p=!1}return}let T=!1,P=!1;for(const M of a){L(M),M.container.visible&&(T=!0);const S=M._targetA??0,R=M._showSmooth??0;Math.abs(S-R)>8e-4&&(P=!0)}(T||P||p)&&s.render(n,r),p=T||P};return C(),{update:C,resize:y,setGoalOffset(T){const P=a.find(M=>M.data.id==="goal");P&&(P.offsetY=T||0)},setGoalFrame({scale:T=1,rotation:P=0,active:M=!1}={}){const S=a.find(N=>N.data.id==="goal");if(!S)return;if(!M){S.framePos.set(0,0,0),S.frameQuat.identity(),S.frameScale.set(1,1,1);return}const R=b*.5,F=-w*.5;f.makeTranslation(R,F,0),m.makeRotationZ(-P),v.makeScale(T,T,1),g.makeTranslation(-R,-F,0),f.multiply(m).multiply(v).multiply(g),f.decompose(S.framePos,S.frameQuat,S.frameScale)},setPaused(T){if(_=!!T,_){for(const P of a)P.container.visible=!1;try{s.clear()}catch{}p=!1}},destroy(){window.removeEventListener("resize",y),s.dispose(),i.remove()}}}const $c=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function FM(i,e,t,n){var P;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const M=Array.from(e.childNodes);e.appendChild(f),M.forEach(S=>f.appendChild(S))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const M=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==M&&(m.src=M)};v();let g="",_=null,p=(P=e.parentElement)==null?void 0:P.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const M=s||a;if(!M)return null;const S=M.getBoundingClientRect();return S.width<8||S.height<8?null:{left:S.left,top:S.top,width:S.width,height:S.height}},w=()=>{const M=window.visualViewport;return $c&&M?{vw:Math.round(M.width)||window.innerWidth,vh:Math.round(M.height)||window.innerHeight,top:Math.round(M.offsetTop||0),left:Math.round(M.offsetLeft||0)}:{vw:window.innerWidth,vh:window.innerHeight,top:0,left:0}},y=(M,S=0,R=0)=>{if(!M)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const{vw:F,vh:N,top:k,left:H}=w();e.style.position="fixed",e.style.left=`${H}px`,e.style.top=`${k}px`,e.style.width=`${F}px`,e.style.height=`${N}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const V=Xt(R,0,1),W=M.left-H+M.width*d.left*(1-V),B=M.top-k+M.height*d.top*(1-V),se=M.width*d.width+(F-M.width*d.width)*V,X=M.height*d.height+(N-M.height*d.height)*V;f&&(f.style.inset="unset",f.style.left=`${W}px`,f.style.top=`${B}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,se)}px`,f.style.height=`${Math.max(1,X)}px`,f.style.borderRadius=V>.85?"0px":`${Math.min(M.width,M.height)*.03*(1-V)}px`,f.style.background="#000",f.style.transform=S?`rotate(${S}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${M.left-H}px`,m.style.top=`${M.top-k}px`,m.style.width=`${M.width}px`,m.style.height=`${M.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=S?`rotate(${S}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},L=()=>{var M;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(M=n==null?void 0:n.setGoalFrame)==null||M.call(n,{active:!1})},C=()=>{const M=t.range("blackFrameShow").ratio,S=t.range("blackFrameIn").ratio,R=t.range("blackTunnel").ratio,F=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),{vw:k,vh:H,top:V,left:W}=w(),B=N.bottom>0&&N.top<H;_=b();const se=B&&R<.02&&F<.01&&S<.999;if(se&&_){let X=Xt(S,0,1);if(_.top<H*.4){const ee=Xt((H*.4-_.top)/(H*.65),0,1);X=Math.max(X,he(ee,0,1,0,1))}const ge={left:W,top:V,width:k,height:H},_e={left:_.left+(ge.left-_.left)*X,top:_.top+(ge.top-_.top)*X,width:_.width+(ge.width-_.width)*X,height:_.height+(ge.height-_.height)*X},Pe=he(X,0,1,0,.35)*(1-X);y(_e,Pe,X);const J=Math.max(he(M,0,.2,.35,1),N.top<H*.85?1:0);if(e.style.opacity=String(J),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(he(X,0,.75,1,0)*J),m.style.visibility=X>.92?"hidden":"visible"),o&&(o.style.visibility=X>.98?"hidden":"visible"),u&&(u.style.visibility=X>.55?"":"hidden"),l&&!$c){const ee=he(X,0,1,0,H*.12);l.style.transform=`translate3d(0, ${-ee}px, 0)`}if(c&&!$c&&_){const ee=i.querySelector("#home-goal-context"),ce=(ee==null?void 0:ee.getBoundingClientRect().top)??0,le=ee&&parseFloat(getComputedStyle(ee).paddingTop)||0,be=_.top-ce-le+_.height*.5;c.style.top=`${be}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:X>.01,scale:he(X,0,1,1,2.4),rotation:Pe}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:X,blackFrameShow:M,frameRect:_}}if(g==="window"){L(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),e.classList.add("is-pinned"),e.style.position="fixed",e.style.left=`${W}px`,e.style.top=`${V}px`,e.style.width=`${k}px`,e.style.height=`${H}px`,e.style.right="auto",e.style.bottom="auto",e.style.zIndex="4",e.style.background="#000000",p&&(p.style.height="0px");let X=e.previousElementSibling;for(;X;){if(X!==p&&X.getAttribute("aria-hidden")==="true"){X.style.height=`${H}px`;break}X=X.previousElementSibling}e.parentElement!==document.body&&document.body.appendChild(e),g="full",window.dispatchEvent(new Event("resize"))}else!se&&o&&R>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden"));return(!B||N.top>H*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:S,blackFrameShow:M,frameRect:_}},T=()=>{v(),C()};return window.addEventListener("resize",T),window.addEventListener("scroll",C,{passive:!0}),C(),{update:C,destroy(){window.removeEventListener("resize",T),window.removeEventListener("scroll",C),m==null||m.remove(),L()},getFrameRect:()=>_}}const jd="/zyrax-studio/assets/audios/",NM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},OM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function Jd(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function zM(){const i={};for(const[p,b]of Object.entries(NM))i[p]=Jd(`${jd}${b}`,{loop:!0,volume:0});const e={};for(const[p,b]of Object.entries(OM))e[p]=b.map(w=>Jd(`${jd}${w}`,{loop:!1,volume:.85}));let t=!1,n=null,r=null,o=null,s=1,a=1.2;const l={hover:0,click:0,focus:0,page:0,glass:0};let c=0;const u=async()=>{if(!t){t=!0;try{const p=i.generic;p.volume=0,await p.play(),p.pause(),p.currentTime=0,n||f("generic",.01)}catch{t=!1}}},d=p=>{if(!t)return;const b=e[p];if(!(b!=null&&b.length))return;const w=l[p]%b.length;l[p]=w+1;const y=b[w].cloneNode();y.volume=p==="focus"?.4:p==="glass"?1:.85,y.play().catch(()=>{})},f=(p,b=1.2)=>{if(!i[p]||n===p)return;r=n,o=p,s=0,a=Math.max(.05,b),n=p;const w=i[p];w.volume>.01&&!w.paused||(w.volume=0),t&&w.play().catch(()=>{})},m=p=>{if(t)if(o&&s<1){s=Math.min(1,s+p/a);const b=s*s*(3-2*s);if(r&&i[r]&&(i[r].volume=Math.max(0,1-b),b>=1)){i[r].pause();try{i[r].currentTime=0}catch{}}i[o]&&(i[o].volume=b,i[o].paused&&i[o].play().catch(()=>{})),b>=1&&(r=null,o=null)}else n&&i[n]&&(i[n].volume<1&&(i[n].volume=1),i[n].paused&&i[n].play().catch(()=>{}))},v=()=>{},g=({blackFrameInRatio:p=0,blackTunnelRatio:b=0,whiteTunnelRatio:w=0,astronautDropRatio:y=0}={})=>{const L=y,C=p,T=b,P=w;C>.5&&T===0?(c=0,f("cinematic_2",.5)):T>0&&P===0?(f("cinematic_3",.5),c=0):P>0&&L===0||P>0&&L<=.8?f("cinematic_2",.5):P>0&&L>.8?f("generic_end",1):(c=0,f("generic",1)),L===0?c=1:c===1&&(d("glass"),c=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(p=>{p.addEventListener("mouseenter",()=>d("hover")),p.addEventListener("click",()=>d("click"))});const _=()=>{u()};return window.addEventListener("pointerdown",_,{passive:!0}),window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("wheel",_,{passive:!0,once:!0}),window.addEventListener("keydown",_,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:v,syncTunnelAudio:g,playSfx:d,setEnabled(){},get enabled(){return!0},destroy(){Object.values(i).forEach(p=>{p.pause(),p.src=""})}}}const mr=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let Zc=0;const Nh=({notifyResize:i=!1}={})=>{var n;const e=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,t=e*.01;document.documentElement.style.setProperty("--vh",`${t}px`),i&&mr&&Math.abs(e-Zc)>1?(Zc=e,window.dispatchEvent(new Event("resize"))):Zc=e};Nh();window.addEventListener("resize",()=>Nh());let Kc=0,Xm=()=>{};const qm=()=>{Kc||(Kc=window.setTimeout(()=>{Kc=0,Nh({notifyResize:!0}),Xm()},mr?48:0))};var ip;(ip=window.visualViewport)==null||ip.addEventListener("resize",qm);var rp;(rp=window.visualViewport)==null||rp.addEventListener("scroll",qm);const Xi=new x0({duration:mr?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!mr,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:mr?.9:.82,touchMultiplier:mr?1:1.1});window.lenis=Xi;let $s=0,Zs=0,aa=!1,Ym=0;window.addEventListener("wheel",()=>{Ym=performance.now(),aa=!0},{passive:!0});window.addEventListener("pointerdown",()=>{aa=!0},{passive:!0});const BM="/zyrax-studio/assets/projects/",Qd=document.getElementById("project-list");Qd&&(Qd.innerHTML=sm.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${BM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const kM=document.getElementById("hero-canvas"),HM=document.getElementById("home-hero-visual-container"),Br=document.getElementById("home-hero"),jc=document.getElementById("home-hero-title"),Jc=document.getElementById("home-hero-visual-container"),ep=document.getElementById("home-hero-scroll-container"),gr=document.getElementById("home-goal"),VM=document.getElementById("goal-tunnel-canvas"),GM=document.getElementById("home-goal-tunnel-title"),$m=document.getElementById("home-goal-tunnel-sticky"),Zm=_M(gr,GM,$m),WM=gr?Fh(gr):null,Qc=zM();let wt=null,tp="";const XM=vM(),qM=yM(),YM=RM();let Vn=null,Rl=null;const Km=gr?FM(gr,$m,WM,{setGoalFrame:(...i)=>{var e;return(e=Vn==null?void 0:Vn.setGoalFrame)==null?void 0:e.call(Vn,...i)}}):{update(){}};Xm=()=>{var i;Km.update(),Zm.updateScroll(),(i=wt==null?void 0:wt.updateScroll)==null||i.call(wt)};let np=performance.now();wh.ticker.add(i=>{var r,o,s,a,l,c,u;const e=performance.now(),t=Math.min(.05,(e-np)/1e3);if(np=e,!mr&&(wt!=null&&wt.getAutoScrollSpeed&&($s=wt.getAutoScrollSpeed()),e-Ym>80&&Math.abs($s)>.01&&(aa=!1),Zs+=Math.abs($s)>0&&!aa?t:-1,Zs=Math.max(0,Math.min(1,Zs)),!aa&&Zs>0&&Math.abs($s)>.01)){const f=window.innerHeight,m=$s*f*t*Zs*.55,v=(Xi.animatedScroll??Xi.scroll??window.scrollY)+m;Xi.scrollTo(v,{immediate:!0,force:!0})}Xi.raf(i*1e3),XM.update(t),qM.update(t),Rl==null||Rl.update(t),YM.update(t),Vn==null||Vn.update(),(r=wt==null?void 0:wt.tickFrame)==null||r.call(wt,t),Qc.update(t);const n=((o=gr==null?void 0:gr.dataset)==null?void 0:o.goalPhase)||"";n&&n!==tp&&(tp=n,Qc.syncGoalPhase(),(s=Vn==null?void 0:Vn.setPaused)==null||s.call(Vn,mr&&(n==="black-tunnel"||n==="white"))),wt!=null&&wt.getAstronautDropRatio&&Qc.syncTunnelAudio({blackFrameInRatio:((a=wt.getBlackFrameInRatio)==null?void 0:a.call(wt))??0,blackTunnelRatio:((l=wt.getBlackTunnelRatio)==null?void 0:l.call(wt))??0,whiteTunnelRatio:((c=wt.getWhiteTunnelRatio)==null?void 0:c.call(wt))??0,astronautDropRatio:((u=wt.getAstronautDropRatio)==null?void 0:u.call(wt))??0})});wh.ticker.lagSmoothing(0);Xi.on("scroll",()=>{if(Km.update(),Zm.updateScroll(),wt==null||wt.updateScroll(),!Br)return;const i=Br.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));jc&&(jc.style.transform=`translate3d(0, ${t*-12}vh, 0)`,jc.style.opacity=String(Math.max(0,1-t*1.2))),Jc&&(Jc.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,Jc.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),ep&&(ep.style.opacity=String(Math.max(0,1-t*2)))});UM().then(i=>{Vn=i}).catch(i=>console.error("Scroll lines failed",i));mM(VM,gr).then(i=>{wt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{Iw(kM,HM).then(()=>Br==null?void 0:Br.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Br==null||Br.classList.add("is-in")})});mr||TM(sm).then(i=>{Rl=i}).catch(i=>console.error("Featured WebGL failed",i));function jm(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}jm(document.getElementById("home-hero-title"));jm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const $M=document.querySelectorAll(".home-hero-scroll-container-cross");$M.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const eu=document.getElementById("header"),tu=document.getElementById("header-container"),Hr=document.getElementById("header-background"),nu=document.getElementById("header-menu"),ms=document.getElementById("header-right-menu-btn");let hr=!1;const Ta=i=>{hr=!!i,eu==null||eu.classList.toggle("--menu-opened",hr),tu==null||tu.classList.toggle("--opened",hr),Hr==null||Hr.classList.toggle("--opened",hr),nu==null||nu.classList.toggle("--opened",hr),ms==null||ms.classList.toggle("--opened",hr),Hr&&(Hr.style.opacity=hr?window.innerWidth>=1e3?"0.2":"1":"0")};ms==null||ms.addEventListener("click",i=>{i.stopPropagation(),Ta(!hr)});Hr==null||Hr.addEventListener("click",()=>Ta(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Ta(!1),t==="contact"?(e.preventDefault(),Xi.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Xi.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!hr)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Ta(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Ta(!1)});var op;(op=document.querySelector("[data-reel]"))==null||op.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var sp;(sp=document.querySelector("#end-bottom"))==null||sp.addEventListener("click",i=>{i.preventDefault(),Xi.scrollTo("#footer-section")});var ap;(ap=document.querySelector("#footer-bottom-up"))==null||ap.addEventListener("click",i=>{i.preventDefault(),Xi.scrollTo(0)});
