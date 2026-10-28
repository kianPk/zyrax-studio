var _m=Object.defineProperty;var gm=(i,e,t)=>e in i?_m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ve=(i,e,t)=>gm(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Rh="1.3.27";function bd(i,e,t){return Math.max(i,Math.min(e,t))}function vm(i,e,t){return(1-t)*i+t*e}function xm(i,e,t,n){return vm(i,e,1-Math.exp(-t*n))}function ym(i,e){return(i%e+e)%e}var Sm=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=bd(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=xm(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function Mm(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var wm=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Mm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Td=class{constructor(){Ve(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const bm=100/6,Tr={passive:!1};function Ch(i,e){return i===1?bm:i===2?e:1}var Tm=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Td);Ve(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ve(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ve(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ve(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Ch(n,this.window.width),o=Ch(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Tr),this.element.addEventListener("touchstart",this.onTouchStart,Tr),this.element.addEventListener("touchmove",this.onTouchMove,Tr),this.element.addEventListener("touchend",this.onTouchEnd,Tr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Tr),this.element.removeEventListener("touchstart",this.onTouchStart,Tr),this.element.removeEventListener("touchmove",this.onTouchMove,Tr),this.element.removeEventListener("touchend",this.onTouchEnd,Tr)}};const Ph=i=>Math.min(1,1.001-2**(-10*i));var Em=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:w=!0,autoRaf:S=!1,anchors:y=!1,autoToggle:P=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:C=A,stopInertiaOnNavigate:b=!1,respectReducedMotion:M=!0}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"_rafId",null);Ve(this,"_isDraggingSelection",!1);Ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ve(this,"isTouching");Ve(this,"isIos");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new Sm);Ve(this,"emitter",new Td);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ve(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ve(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ve(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,w,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Rh,window.lenis||(window.lenis={}),window.lenis.version=Rh,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Ph:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:w,autoRaf:S,anchors:y,autoToggle:P,allowNestedScroll:R,naiveDimensions:C,stopInertiaOnNavigate:b,respectReducedMotion:M},this.dimensions=new wm(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Tm(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?y.left:y.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),w=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=bd(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=Ph:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(i);if(r.computedStyle=R,o=["auto","overlay","scroll"].includes(R.overflowX),s=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,w,S,y,P;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,w=e,S=o,y=a,P=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,w=t,S=s,y=l,P=u;else return!1;return!P&&(_>=p||_<=0)?!0:(w>0?_<p:_>0)&&S&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?ym(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function ur(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ed(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},Nu,_n,zt,mi=1e8,Lt=1/mi,Fc=Math.PI*2,Am=Fc/4,Rm=0,Ad=Math.sqrt,Cm=Math.cos,Pm=Math.sin,pn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},Ou=function(e){return typeof e>"u"},Ji=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},zu=function(){return typeof window<"u"},ga=function(e){return Xt(e)||pn(e)},Rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Dm=/random\([^)]+\)/g,Lm=/,\s*/g,Dh=/(?:-?\.?\d|\.)+/gi,Cd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pd=/[+-]=-?[.\d]+/,Im=/[^,'"\[\]\s]+/gi,Um=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Xi,Nc,Bu,ri={},sl={},Dd,Ld=function(e){return(sl=as(e,ri))&&Yn},ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Js=function(e,t){return!t&&console.warn(e)},Id=function(e,t){return e&&(ri[e]=t)&&sl&&(sl[e]=t)||ri},Qs=function(){return 0},Fm={suppressEvents:!0,isStart:!0,kill:!1},Za={suppressEvents:!0,kill:!1},Nm={suppressEvents:!0},Hu={},kr=[],Oc={},Ud,jn={},Gl={},Lh=30,Ka=[],Vu="",Gu=function(e){var t=e[0],n,r;if(Ji(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ka.length;r--&&!Ka[r].targetTest(t););n=Ka[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new np(e[r],n)))||e.splice(r,1);return e},go=function(e){return e._gsap||Gu(_i(e))[0]._gsap},Fd=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():Ou(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Jo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Om=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},al=function(){var e=kr.length,t=kr.slice(0),n,r;for(Oc={},kr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Wu=function(e){return!!(e._initted||e._startAt||e.add)},Nd=function(e,t,n,r){kr.length&&!_n&&al(),e.render(t,n,!!(_n&&t<0&&Wu(e))),kr.length&&!_n&&al()},Od=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Im).length<2?t:pn(e)?e.trim():e},zd=function(e){return e},oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},as=function(e,t){for(var n in t)e[n]=t[n];return e},Ih=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ji(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ll=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Vs=function(e){var t=e.parent||Ht,n=e.keyframes?zm(An(e.keyframes)):oi;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Bd=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},yl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},km=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zc=function(e,t,n,r){return e._startAt&&(_n?e._startAt.revert(Za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Hm=function i(e){return!e||e._ts&&i(e.parent)},Uh=function(e){return e._repeat?ls(e._tTime,e=e.duration()+e._rDelay)*e:0},ls=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},cl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sl=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},Ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sl(e),n._dirty||vo(n,e)),e},kd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=cl(e.rawTime(),t),(!t._dur||la(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Yi=function(e,t,n,r){return t.parent&&Gr(t),t._start=kt((gr(n)?n:n||e!==Ht?hi(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bd(e,t,"_first","_last",e._sort?"_start":0),Bc(t)||(e._recent=t),r||kd(e,t),e._ts<0&&Ml(e,e._tTime),e},Hd=function(e,t){return(ri.ScrollTrigger||ku("scrollTrigger",t))&&ri.ScrollTrigger.create(t,e)},Vd=function(e,t,n,r,o){if(qu(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ud!==Jn.frame)return kr.push(e),e._lazy=[o,r],1},Vm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Bc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gm=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&Vm(e)&&!(!e._initted&&Bc(e))||(e._ts<0||e._dp._ts<0)&&!Bc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=la(0,e._tDur,t),u=ls(l,a),e._yoyo&&u&1&&(s=1-s),u!==ls(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||_n||r||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&Vd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&zc(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Gr(e,1),!n&&!_n&&(ei(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},cs=function(e,t,n,r){var o=e._repeat,s=kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:kt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&Ml(e,e._tTime=e._tDur*a),e.parent&&Sl(e),n||vo(e.parent,e),e},Fh=function(e){return e instanceof kn?vo(e):cs(e,e._dur)},Xm={_start:0,endTime:Qs,totalDuration:Qs},hi=function i(e,t,n){var r=e.labels,o=e._recent||Xm,s=e.duration()>=mi?o.endTime(!1):e._dur,a,l,c;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Gs=function(e,t,n){var r=gr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;s.immediateRender=Vn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new tn(t[0],s,t[o+1])},Yr=function(e,t){return e||e===0?t(e):t},la=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!pn(e)||!(t=Um.exec(e))?"":t[1]},qm=function(e,t,n){return Yr(n,function(r){return la(e,t,r)})},kc=[].slice,Gd=function(e,t){return e&&Ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ji(e[0]))&&!e.nodeType&&e!==Xi},Ym=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return pn(r)&&!t||Gd(r,1)?(o=n).push.apply(o,_i(r)):n.push(r)})||n},_i=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):pn(e)&&!n&&(Nc||!us())?kc.call((t||Bu).querySelectorAll(e),0):An(e)?Ym(e,n):Gd(e)?kc.call(e,0):e?[e]:[]},Hc=function(e){return e=_i(e)[0]||Js("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _i(t,n.querySelectorAll?n:n===e?Js("Invalid scope")||Bu.createElement("div"):e)}},Wd=function(e){return e.sort(function(){return .5-Math.random()})},Xd=function(e){if(Xt(e))return e;var t=Ji(e)?e:{each:e},n=xo(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return pn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,w,S,y,P,R,A,C,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,mi])[1],!b){for(A=-mi;A<(A=v[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(_=s[g]=[],p=l?Math.min(b,g)*u-.5:r%b,w=b===mi?0:l?g*d/b-.5:r/b|0,A=0,C=mi,R=0;R<g;R++)S=R%b-p,y=w-(R/b|0),_[R]=P=c?Math.abs(c==="y"?y:S):Ad(S*S+y*y),P>A&&(A=P),P<C&&(C=P);r==="random"&&Wd(_),_.max=A-C,_.min=C,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Tn(t.amount||t.each)||0,n=n&&g<0?s0(n):n}return g=(_[f]-_.min)/_.max||0,kt(_.b+(n?n(g):g)*_.v)+_.u}},Vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=kt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(gr(n)?0:Tn(n))}},qd=function(e,t){var n=An(e),r,o;return!n&&Ji(e)&&(r=n=e.radius||mi,e.values?(e=_i(e.values),(o=!gr(e[0]))&&(r*=r)):e=Vc(e.increment)),Yr(t,n?Xt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=mi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||gr(s)?u:u+Tn(s)}:Vc(e))},Yd=function(e,t,n,r){return Yr(An(e)?!t:n===!0?!!(n=0):!r,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},$m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},Zm=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},Km=function(e,t,n){return Zd(e,t,0,1,n)},$d=function(e,t,n){return Yr(n,function(r){return e[~~t(r)]})},jm=function i(e,t,n){var r=t-e;return An(e)?$d(e,i(0,e.length),t):Yr(n,function(o){return(r+(o-e)%r)%r+e})},Jm=function i(e,t,n){var r=t-e,o=r*2;return An(e)?$d(e,i(0,e.length-1),t):Yr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},ea=function(e){return e.replace(Dm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Lm);return Yd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Zd=function(e,t,n,r,o){var s=t-e,a=r-n;return Yr(o,function(l){return n+((l-e)/s*a||0)})},Qm=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=pn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=as(An(e)?[]:{},e));if(!u){for(l in t)Xu.call(a,e,l,"get",t[l]);o=function(v){return Zu(v,a)||(s?e.p:e)}}}return Yr(n,o)},Nh=function(e,t,n){var r=e.labels,o=mi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ei=function(e,t,n){var r=e.vars,o=r[t],s=zt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&kr.length&&al(),a&&(zt=a),u=l?o.apply(c,l):o.call(c),zt=s,u},zs=function(e){return Gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&ei(e,"onInterrupt"),e},$o,Kd=[],jd=function(e){if(e)if(e=!e.name&&e.default||e,zu()||e.headless){var t=e.name,n=Xt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Qs,render:Zu,add:Xu,kill:_0,modifier:m0,rawVars:0},s={targetTest:0,get:0,getSetter:$u,aliases:{},register:0};if(us(),e!==r){if(jn[t])return;oi(r,oi(ll(e,o),s)),as(r.prototype,as(o,ll(e,s))),jn[r.prop=t]=r,e.targetTest&&(Ka.push(r),Hu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Id(t,r),e.register&&e.register(Yn,r,Wn)}else Kd.push(e)},Pt=255,Bs={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Wl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Jd=function(e,t,n){var r=e?gr(e)?[e>>16,e>>8&Pt,e&Pt]:0:Bs.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])r=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Dh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=Wl(l+1/3,o,s),r[1]=Wl(l,o,s),r[2]=Wl(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(Cd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Dh)||Bs.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Pt,s=r[1]/Pt,a=r[2]/Pt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Qd=function(e){var t=[],n=[],r=-1;return e.split(Hr).forEach(function(o){var s=o.match(Yo)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},Oh=function(e,t,n){var r="",o=(e+r).match(Hr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Jd(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Qd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Hr,"1").split(Yo),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Hr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Hr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),e0=/hsl[a]?\(/,ep=function(e){var t=e.join(" "),n;if(Hr.lastIndex=0,Hr.test(t))return n=e0.test(t),e[1]=Oh(e[1],n),e[0]=Oh(e[0],n,Qd(e[1])),!0},ta,Jn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,w=_===!0,S,y,P,R;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,S=P-s,(S>0||w)&&(R=++d.frame,f=P-d.time*1e3,d.time=P=P/1e3,s+=S+(S>=o?4:o-S),y=1),w||(l=c(g)),y)for(m=0;m<a.length;m++)a[m](P,f,R,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Dd&&(!Nc&&zu()&&(Xi=Nc=window,Bu=Xi.document||{},ri.gsap=Yn,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(Yn.version),Ld(sl||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),Kd.forEach(jd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},ta=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ta=0,c=Qs},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,w){var S=p?function(y,P,R,A){_(y,P,R,A),d.remove(S)}:_;return d.remove(_),a[w?"unshift":"push"](S),us(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),us=function(){return!ta&&Jn.wake()},mt={},t0=/^[\d.\-M][\d.\-,\s]/,n0=/["']/g,i0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(n0,"").trim():+c,r=l.substr(a+1).trim();return t},r0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},o0=function(e){var t=(e+"").split("("),n=mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i0(t[1])]:r0(e).split(",").map(Od)):mt._CE&&t0.test(e)?mt._CE("",e):n},s0=function(e){return function(t){return 1-e(1-t)}},xo=function(e,t){return e&&(Xt(e)?e:mt[e]||o0(e))||t},bo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Gn(e,function(a){mt[a]=ri[a]=o,mt[s=a.toLowerCase()]=n;for(var l in o)mt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[a+"."+l]=o[l]}),o},tp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xl=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/Fc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Pm((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:tp(a);return o=Fc/o,l.config=function(c,u){return i(e,c,u)},l},ql=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:tp(n);return r.config=function(o){return i(e,o)},r};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;bo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;bo("Elastic",Xl("in"),Xl("out"),Xl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};bo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);bo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});bo("Circ",function(i){return-(Ad(1-i*i)-1)});bo("Sine",function(i){return i===1?1:-Cm(i*Am)+1});bo("Back",ql("in"),ql("out"),ql());mt.SteppedEase=mt.steps=ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Lt;return function(a){return((r*la(0,s,a)|0)+o)*n}}};js.ease=mt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Vu+=i+","+i+"Params,"});var np=function(e,t){this.id=Rm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fd,this.set=t?t.getSetter:$u},na=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cs(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),ta||Jn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(us(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Ml(this,n),!o._dp||o.parent||kd(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?ls(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?cl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),Sl(this),km(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Nm);var r=_n;return _n=n,Wu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Fh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(hi(this,n),Vn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Vn(r)),this._dur||(this._zTime=-Lt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Lt)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Xt(n)?n:zd,l=function(){var u=r.then;r.then=null,o&&o(),Xt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){zs(this)},i})();oi(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var kn=(function(i){Ed(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Vn(n.sortChildren),Ht&&Yi(n.parent||Ht,ur(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Hd(ur(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Gs(0,arguments,this),this},t.from=function(r,o,s){return Gs(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Gs(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,Vs(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new tn(r,o,hi(this,s),1),this},t.call=function(r,o,s){return Yi(this,tn.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new tn(r,s,hi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,Vs(s).immediateRender=Vn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,Vs(a).immediateRender=Vn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:kt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,w,S,y,P,R,A;if(this!==Ht&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=kt(u%_),u===l?(g=this._repeat,f=c):(P=kt(u/_),g=~~P,g&&g===P&&(f=c,g--),f>c&&(f=c)),P=ls(this._tTime,_),!a&&this._tTime&&P!==g&&this._tTime-P*_-this._dur<=0&&(P=g),R&&g&1&&(f=c-f,A=1),g!==P&&!this._lock){var C=R&&P&1,b=C===(R&&g&1);if(g<P&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(A?0:kt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Wm(this,kt(a),kt(f)),w&&(u-=f-(f=w._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!P&&(ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){w=0,v&&(u+=this._zTime=-Lt);break}}m=v}else{m=this._last;for(var M=r<0?r:f;m;){if(v=m._prev,(m._act||M<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(M-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(M-m._start)*m._ts,o,s||_n&&Wu(m)),f!==this._time||!this._ts&&!p){w=0,v&&(u+=this._zTime=M?-Lt:Lt);break}}m=v}}if(w&&!o&&(this.pause(),w.render(f>=a?0:-Lt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Sl(this),this.render(r,o,s);this._onUpdate&&!o&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Gr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(gr(o)||(o=hi(this,o,r)),!(r instanceof na)){if(An(r))return r.forEach(function(a){return s.add(a,o)}),this;if(pn(r))return this.addLabel(r,o);if(Xt(r))r=tn.delayedCall(0,r);else return this}return this!==r?Yi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return pn(r)?this.removeLabel(r):Xt(r)?this.killTweensOf(r):(r.parent===this&&yl(this,r),r===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=hi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=tn.delayedCall(0,o||Qs,s);return a.data="isPause",this._hasPause=1,Yi(this,a,hi(this,r))},t.removePause=function(r){var o=this._first;for(r=hi(this,r);o;)o._start===r&&o.data==="isPause"&&Gr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Or!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=_i(r),l=this._first,c=gr(o),u;l;)l instanceof tn?Om(l._targets,a)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=hi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=tn.to(s,oi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Lt,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&cs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,oi({startAt:{time:hi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Nh(this,hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Nh(this,hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=kt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return vo(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vo(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=mi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Yi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=kt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;cs(s,s===Ht&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Ht._ts&&(Nd(Ht,cl(r,Ht)),Ud=Jn.frame),Jn.frame>=Lh){Lh+=ni.autoSleep||120;var o=Ht._first;if((!o||!o._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Jn.sleep()}}},e})(na);oi(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a0=function(e,t,n,r,o,s,a){var l=new Wn(this._pt,e,t,0,1,lp,null,o),c=0,u=0,d,f,m,v,g,_,p,w;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=ea(r)),s&&(w=[n,r],s(w,e,t),n=w[0],r=w[1]),f=n.match(Vl)||[];d=Vl.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?Jo(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=Vl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Pd.test(r)||p)&&(l.e=0),this._pt=l,l},Xu=function(e,t,n,r,o,s,a,l,c,u){Xt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Xt(d)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Xt(d)?c?f0:sp:Yu,v;if(pn(r)&&(~r.indexOf("random(")&&(r=ea(r)),r.charAt(1)==="="&&(v=Jo(f,r)+(Tn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||Gc)return!isNaN(f*r)&&r!==""?(v=new Wn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?p0:ap,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&ku(t,r),a0.call(this,e,t,f,r,m,l||ni.stringFilter,c))},l0=function(e,t,n,r,o){if(Xt(e)&&(e=Ws(e,o,t,n,r)),!Ji(e)||e.style&&e.nodeType||An(e)||Rd(e))return pn(e)?Ws(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=Ws(e[a],o,t,n,r);return s},ip=function(e,t,n,r,o,s){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(o,a.rawVars?t[e]:l0(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new Wn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==$o))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Or,Gc,qu=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,w=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!Nu,y=e.timeline,P=r.easeReverse||d,R,A,C,b,M,D,N,F,V,W,G,B,k;if(y&&(!f||!o)&&(o="none"),e._ease=xo(o,js.ease),e._rEase=P&&(xo(P)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(F=_[0]?go(_[0]).harness:0,B=F&&r[F.prop],R=ll(r,Hu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Za:Fm),g._lazy=0),s){if(Gr(e._startAt=tn.set(_,oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!m)&&e._startAt.revert(Za),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),C=oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Vn(l),immediateRender:a,stagger:0,parent:p},R),B&&(C[F.prop]=B),Gr(e._startAt=tn.set(_,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(Za):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Vn(l)||l&&!v,A=0;A<_.length;A++){if(M=_[A],N=M._gsap||Gu(_)[A]._gsap,e._ptLookup[A]=W={},Oc[N.id]&&kr.length&&al(),G=w===_?A:w.indexOf(M),F&&(V=new F).init(M,B||R,e,G,w)!==!1&&(e._pt=b=new Wn(e._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(le){W[le]=b}),V.priority&&(D=1)),!F||B)for(C in R)jn[C]&&(V=ip(C,R,e,G,M,w))?V.priority&&(D=1):W[C]=b=Xu.call(e,M,C,"get",R[C],G,w,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),S&&e._pt&&(Or=e,Ht.killTweensOf(M,W,e.globalTime(t)),k=!e.parent,Or=0),e._pt&&l&&(Oc[N.id]=1)}D&&cp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&y.render(mi,!0,!0)},c0=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gc=1,e.vars[t]="+=0",qu(e,a),Gc=0,l?Js(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Zt(n)+Tn(d.e)),d.b&&(d.b=u.s+Tn(d.b))},u0=function(e,t){var n=e[0]?go(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=as({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},h0=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Ws=function(e,t,n,r,o){return Xt(e)?e.call(t,n,r,o):pn(e)&&~e.indexOf("random(")?ea(e):e},rp=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",op={};Gn(rp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return op[i]=1});var tn=(function(i){Ed(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:Vs(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Ht,w=(An(n)||Rd(n)?gr(n[0]):"length"in r)?[n]:_i(n),S,y,P,R,A,C,b,M;if(a._targets=w.length?Gu(w):Js("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||ga(c)||ga(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(S=a.timeline=new kn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:w}),S.kill(),S.parent=S._dp=ur(a),S._start=0,f||ga(c)||ga(u)){if(R=w.length,b=f&&Xd(f),Ji(f))for(A in f)~rp.indexOf(A)&&(M||(M={}),M[A]=f[A]);for(y=0;y<R;y++)P=ll(r,op),P.stagger=0,D&&(P.easeReverse=D),M&&as(P,M),C=w[y],P.duration=+Ws(c,ur(a),y,C,w),P.delay=(+Ws(u,ur(a),y,C,w)||0)-a._delay,!f&&R===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),S.to(C,P,b?b(y,C,w):0),S._ease=mt.none;S.duration()?c=u=0:a.timeline=0}else if(v){Vs(oi(S.vars.defaults,{ease:"none"})),S._ease=xo(v.ease||r.ease||"none");var N=0,F,V,W;if(An(v))v.forEach(function(G){return S.to(w,G,">")}),S.duration();else{P={};for(A in v)A==="ease"||A==="easeEach"||h0(A,v[A],P,v.easeEach);for(A in P)for(F=P[A].sort(function(G,B){return G.t-B.t}),N=0,y=0;y<F.length;y++)V=F[y],W={ease:V.e,duration:(V.t-(y?F[y-1].t:0))/100*c},W[A]=V.v,S.to(w,W,N),N+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!Nu&&(Or=ur(a),Ht.killTweensOf(w),Or=0),Yi(p,ur(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===kt(p._time)&&Vn(d)&&Hm(ur(a))&&p.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-u)||0)),_&&Hd(ur(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Lt&&!u?l:r<Lt?0:r,f,m,v,g,_,p,w,S;if(!c)Gm(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=kt(d%g),d===l?(v=this._repeat,f=c):(_=kt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=ls(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(kt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Vd(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var y=f<a;if(y!==this._inv){var P=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(y?-1:1)/P:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(ei(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&zc(this,r,o,s),ei(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&zc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Gr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){ta||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||qu(this,c),u=this._ease(c/this._dur),c0(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(Ml(this,0),this.parent||Bd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Or&&Or.vars.overwrite!==!0)._first||zs(this),this.parent&&s!==this.timeline.totalDuration()&&cs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?_i(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&Bm(a,l))return o==="all"&&(this._pt=0),zs(this);for(d=this._op=this._op||[],o!=="all"&&(pn(o)&&(g={},Gn(o,function(w){return g[w]=1}),o=g),o=u0(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&yl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&zs(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Gs(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Gs(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Ht.killTweensOf(r,o,s)},e})(na);oi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(i){tn[i]=function(){var e=new kn,t=kc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Yu=function(e,t,n){return e[t]=n},sp=function(e,t,n){return e[t](n)},f0=function(e,t,n,r){return e[t](r.fp,n)},d0=function(e,t,n){return e.setAttribute(t,n)},$u=function(e,t){return Xt(e[t])?sp:Ou(e[t])&&e.setAttribute?d0:Yu},ap=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},p0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},m0=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},_0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},g0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},cp=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},Wn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||ap,this.d=l||this,this.set=c||Yu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=g0,this.m=n,this.mt=o,this.tween=r},i})();Gn(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Hu[i]=1});ri.TweenMax=ri.TweenLite=tn;ri.TimelineLite=ri.TimelineMax=kn;Ht=new kn({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=ep;var yo=[],ja={},v0=[],zh=0,x0=0,Yl=function(e){return(ja[e]||v0).map(function(t){return t()})},Wc=function(){var e=Date.now(),t=[];e-zh>2&&(Yl("matchMediaInit"),yo.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Xi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),zh=e,Yl("matchMedia"))},up=(function(){function i(t,n){this.selector=n&&Hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=x0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Xt(n)&&(o=r,r=n,n=Xt);var s=this,a=function(){var c=zt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=Hc(o)),zt=s,d=r.apply(s,arguments),Xt(d)&&s._r.push(d),zt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Xt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=zt;zt=null,n(this),zt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof tn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=yo.length;s--;)yo[s].id===this.id&&yo.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),y0=(function(){function i(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Ji(n)||(n={matches:n});var s=new up(0,o||this.scope),a=s.conditions={},l,c,u;zt&&!s.selector&&(s.selector=zt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Xi.matchMedia(n[c]),l&&(yo.indexOf(s)<0&&yo.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wc):l.addEventListener("change",Wc)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),ul={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return jd(r)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){pn(e)&&(e=_i(e)[0]);var o=go(e||{}).get,s=n?zd:Od;return n==="native"&&(n=""),e&&(t?s((jn[t]&&jn[t].get||o)(e,t,n,r)):function(a,l,c){return s((jn[a]&&jn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=_i(e),e.length>1){var r=e.map(function(u){return Yn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=jn[t],a=go(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;$o._pt=0,d.init(e,n?u+n:u,$o,0,[e]),d.render(1,d),$o._pt&&Zu(1,$o)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=Yn.to(e,oi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,js.ease)),Ih(js,e||{})},config:function(e){return Ih(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!jn[a]&&!ri[a]&&Js(t+" effect requires "+a+" plugin.")}),Gl[t]=function(a,l,c){return n(_i(a),oi(l||{},o),c)},s&&(kn.prototype[t]=function(a,l,c){return this.add(Gl[t](a,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){mt[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):mt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kn(e),r,o;for(n.smoothChildTiming=Vn(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,r=Ht._first;r;)o=r._next,(t||!(!r._dur&&r instanceof tn&&r.vars.onComplete===r._targets[0]))&&Yi(n,r,r._start-r._delay),r=o;return Yi(Ht,n,0),n},context:function(e,t){return e?new up(e,t):zt},matchMedia:function(e){return new y0(e)},matchMediaRefresh:function(){return yo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Wc()},addEventListener:function(e,t){var n=ja[e]||(ja[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ja[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:jm,wrapYoyo:Jm,distribute:Xd,random:Yd,snap:qd,normalize:Km,getUnit:Tn,clamp:qm,splitColor:Jd,toArray:_i,selector:Hc,mapRange:Zd,pipe:$m,unitize:Zm,interpolate:Qm,shuffle:Wd},install:Ld,effects:Gl,ticker:Jn,updateRoot:kn.updateRoot,plugins:jn,globalTimeline:Ht,core:{PropTween:Wn,globals:Id,Tween:tn,Timeline:kn,Animation:na,getCache:go,_removeLinkedListItem:yl,reverting:function(){return _n},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return Nu=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ul[i]=tn[i]});Jn.add(kn.updateRoot);$o=ul.to({},{duration:0});var S0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M0=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=S0(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},$l=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(pn(o)&&(l={},Gn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}M0(a,o)}}}},Yn=ul.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$l("roundProps",Vc),$l("modifiers"),$l("snap",qd))||ul;tn.version=kn.version=Yn.version="3.15.0";Dd=1;zu()&&us();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bh,zr,Qo,Ku,mo,kh,ju,w0=function(){return typeof window<"u"},vr={},lo=180/Math.PI,es=Math.PI/180,Po=Math.atan2,Hh=1e8,Ju=/([A-Z])/g,b0=/(left|right|width|margin|padding|x)/i,T0=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},R0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},C0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},P0=function(e,t,n){return e.style[t]=n},D0=function(e,t,n){return e.style.setProperty(t,n)},L0=function(e,t,n){return e._gsap[t]=n},I0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},U0=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},F0=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Vt="transform",Xn=Vt+"Origin",N0=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in vr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=dr(r,a)}):this.tfm[e]=s.x?s[e]:dr(r,e),e===Xn&&(this.tfm.zOrigin=s.zOrigin);else return $i.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Vt}(o||t)&&this.props.push(e,t,o[e])},dp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},O0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Ju,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=ju(),(!o||!o.isStart)&&!n[Vt]&&(dp(n),r.zOrigin&&n[Xn]&&(n[Xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pp=function(e,t){var n={target:e,props:[],revert:O0,save:N0};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},mp,qc=function(e,t){var n=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return n&&n.style?n:zr.createElement(e)},ti=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ju,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,hs(t)||t,1)||""},Vh="O,Moz,ms,Ms,Webkit".split(","),hs=function(e,t,n){var r=t||mo,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Vh[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Vh[s]:"")+e},Yc=function(){w0()&&window.document&&(Bh=window,zr=Bh.document,Qo=zr.documentElement,mo=qc("div")||{style:{}},qc("div"),Vt=hs(Vt),Xn=Vt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mp=!!hs("perspective"),ju=Yn.core.reverting,Ku=1)},Gh=function(e){var t=e.ownerSVGElement,n=qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),Qo.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),Qo.removeChild(n),o},Wh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_p=function(e){var t,n;try{t=e.getBBox()}catch{t=Gh(e),n=1}return t&&(t.width||t.height)||n||(t=Gh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wh(e,["x","cx","x1"])||0,y:+Wh(e,["y","cy","y1"])||0,width:0,height:0}:t},gp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_p(e))},Wr=function(e,t){if(t){var n=e.style,r;t in vr&&t!==Xn&&(t=Vt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Ju,"-$1").toLowerCase())):n.removeAttribute(t)}},Br=function(e,t,n,r,o,s){var a=new Wn(e._pt,t,n,0,1,s?fp:hp);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},Xh={deg:1,rad:1,turn:1},z0={grid:1,flex:1},Xr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=mo.style,l=b0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||Xh[r]||Xh[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&gp(e),(m||s==="%")&&(vr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Zt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===zr||!g.appendChild)&&(g=zr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===Jn.time&&!_.uncache)return Zt(o/_.width*d);if(m&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+r,v=e[u],w?e.style[t]=w:Wr(e,t)}else(m||s==="%")&&!z0[ti(g,"display")]&&(a.position=ti(e,"position")),g===e&&(a.position="static"),g.appendChild(mo),v=mo[u],g.removeChild(mo),a.position="absolute";return l&&m&&(_=go(g),_.time=Jn.time,_.width=g[u]),Zt(f?v*o/d:v&&o?d/v*o:0)},dr=function(e,t,n,r){var o;return Ku||Yc(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(o=ra(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:fl(ti(e,Xn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=hl[t]&&hl[t](e,t,n)||ti(e,t)||Fd(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Xr(e,t,o,n)+n:o},B0=function(e,t,n,r){if(!n||n==="none"){var o=hs(t,e,1),s=o&&ti(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,lp),l=0,c=0,u,d,f,m,v,g,_,p,w,S,y,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ti(e,t)||r,g?e.style[t]=g:Wr(e,t)),u=[n,r],ep(u),n=u[0],r=u[1],f=n.match(Yo)||[],P=r.match(Yo)||[],P.length){for(;d=Yo.exec(r);)_=d[0],w=r.substring(l,d.index),v?v=(v+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,y=g.substr((m+"").length),_.charAt(1)==="="&&(_=Jo(m,_)+y),p=parseFloat(_),S=_.substr((p+"").length),l=Yo.lastIndex-S.length,S||(S=S||ni.units[t]||y,l===r.length&&(r+=S,a.e+=S)),y!==S&&(m=Xr(e,t,g,S)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?fp:hp;return Pd.test(r)&&(a.e=0),this._pt=a,a},qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k0=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=qh[n]||n,t[1]=qh[r]||r,t.join(" ")},H0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],vr[a]&&(l=1,a=a==="transformOrigin"?Xn:Vt),Wr(n,a);l&&(Wr(n,Vt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ra(n,1),s.uncache=1,dp(r)))}},hl={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new Wn(e._pt,t,n,0,0,H0);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ia=[1,0,0,1,0,0],vp={},xp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Yh=function(e){var t=ti(e,Vt);return xp(t)?ia:t.substr(7).match(Cd).map(Zt)},Qu=function(e,t){var n=e._gsap||go(e),r=e.style,o=Yh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?ia:o):(o===ia&&!e.offsetParent&&e!==Qo&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Qo.appendChild(e)),o=Yh(e),l?r.display=l:Wr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Qo.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},$c=function(e,t,n,r,o,s){var a=e._gsap,l=o||Qu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],w=l[5],S=t.split(" "),y=parseFloat(S[0])||0,P=parseFloat(S[1])||0,R,A,C,b;n?l!==ia&&(A=m*_-v*g)&&(C=y*(_/A)+P*(-g/A)+(g*w-_*p)/A,b=y*(-v/A)+P*(m/A)-(m*w-v*p)/A,y=C,P=b):(R=_p(e),y=R.x+(~S[0].indexOf("%")?y/100*R.width:y),P=R.y+(~(S[1]||S[0]).indexOf("%")?P/100*R.height:P)),r||r!==!1&&a.smooth?(p=y-c,w=P-u,a.xOffset=d+(p*m+w*g)-p,a.yOffset=f+(p*v+w*_)-w):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Xn]="0px 0px",s&&(Br(s,a,"xOrigin",c,y),Br(s,a,"yOrigin",u,P),Br(s,a,"xOffset",d,a.xOffset),Br(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+P)},ra=function(e,t){var n=e._gsap||new np(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=ti(e,Xn)||"0",u,d,f,m,v,g,_,p,w,S,y,P,R,A,C,b,M,D,N,F,V,W,G,B,k,le,K,ye,Se,Le,j,oe;return u=d=f=g=_=p=w=S=y=0,m=v=1,n.svg=!!(e.getCTM&&gp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),A=Qu(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),$c(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),P=n.xOrigin||0,R=n.yOrigin||0,A!==ia&&(D=A[0],N=A[1],F=A[2],V=A[3],u=W=A[4],d=G=A[5],A.length===6?(m=Math.sqrt(D*D+N*N),v=Math.sqrt(V*V+F*F),g=D||N?Po(N,D)*lo:0,w=F||V?Po(F,V)*lo+g:0,w&&(v*=Math.abs(Math.cos(w*es))),n.svg&&(u-=P-(P*D+R*F),d-=R-(P*N+R*V))):(oe=A[6],Le=A[7],K=A[8],ye=A[9],Se=A[10],j=A[11],u=A[12],d=A[13],f=A[14],C=Po(oe,Se),_=C*lo,C&&(b=Math.cos(-C),M=Math.sin(-C),B=W*b+K*M,k=G*b+ye*M,le=oe*b+Se*M,K=W*-M+K*b,ye=G*-M+ye*b,Se=oe*-M+Se*b,j=Le*-M+j*b,W=B,G=k,oe=le),C=Po(-F,Se),p=C*lo,C&&(b=Math.cos(-C),M=Math.sin(-C),B=D*b-K*M,k=N*b-ye*M,le=F*b-Se*M,j=V*M+j*b,D=B,N=k,F=le),C=Po(N,D),g=C*lo,C&&(b=Math.cos(C),M=Math.sin(C),B=D*b+N*M,k=W*b+G*M,N=N*b-D*M,G=G*b-W*M,D=B,W=k),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Zt(Math.sqrt(D*D+N*N+F*F)),v=Zt(Math.sqrt(G*G+oe*oe)),C=Po(W,G),w=Math.abs(C)>2e-4?C*lo:0,y=j?1/(j<0?-j:j):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!xp(ti(e,Vt)),B&&e.setAttribute("transform",B))),Math.abs(w)>90&&Math.abs(w)<270&&(o?(m*=-1,w+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Zt(m),n.scaleY=Zt(v),n.rotation=Zt(g)+a,n.rotationX=Zt(_)+a,n.rotationY=Zt(p)+a,n.skewX=w+a,n.skewY=S+a,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Xn]=fl(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?G0:mp?yp:V0,n.uncache=0,n},fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zl=function(e,t,n){var r=Tn(t);return Zt(parseFloat(t)+parseFloat(Xr(e,"x",n+"px",r)))+r},V0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yp(e,t)},Jr="0deg",Rs="0px",Qr=") ",yp=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,w=n.target,S=n.zOrigin,y="",P=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Jr||u!==Jr)){var R=parseFloat(u)*es,A=Math.sin(R),C=Math.cos(R),b;R=parseFloat(d)*es,b=Math.cos(R),s=Zl(w,s,A*b*-S),a=Zl(w,a,-Math.sin(R)*-S),l=Zl(w,l,C*b*-S+S)}_!==Rs&&(y+="perspective("+_+Qr),(r||o)&&(y+="translate("+r+"%, "+o+"%) "),(P||s!==Rs||a!==Rs||l!==Rs)&&(y+=l!==Rs||P?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Qr),c!==Jr&&(y+="rotate("+c+Qr),u!==Jr&&(y+="rotateY("+u+Qr),d!==Jr&&(y+="rotateX("+d+Qr),(f!==Jr||m!==Jr)&&(y+="skew("+f+", "+m+Qr),(v!==1||g!==1)&&(y+="scale("+v+", "+g+Qr),w.style[Vt]=y||"translate(0, 0)"},G0=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,w=n.forceCSS,S=parseFloat(s),y=parseFloat(a),P,R,A,C,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=es,c*=es,P=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=es,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,C*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),P*=b,R*=b)),P=Zt(P),R=Zt(R),A=Zt(A),C=Zt(C)):(P=d,C=f,R=A=0),(S&&!~(s+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Xr(m,"x",s,"px"),y=Xr(m,"y",a,"px")),(v||g||_||p)&&(S=Zt(S+v-(v*P+g*A)+_),y=Zt(y+g-(v*R+g*C)+p)),(r||o)&&(b=m.getBBox(),S=Zt(S+r/100*b.width),y=Zt(y+o/100*b.height)),b="matrix("+P+","+R+","+A+","+C+","+S+","+y+")",m.setAttribute("transform",b),w&&(m.style[Vt]=b)},W0=function(e,t,n,r,o){var s=360,a=pn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?lo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Hh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Hh)%s-~~(c/s)*s)),e._pt=f=new Wn(e._pt,t,n,r,c,E0),f.e=u,f.u="deg",e._props.push(n),f},$h=function(e,t){for(var n in t)e[n]=t[n];return e},X0=function(e,t,n){var r=$h({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Vt]=t,a=ra(n,1),Wr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],s[Vt]=t,a=ra(n,1),s[Vt]=c);for(l in vr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Tn(c),v=Tn(u),d=m!==v?Xr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,a,l,d,f-d,Xc),e._pt.u=v||0,e._props.push(l));$h(a,r)};Gn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});hl[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return dr(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var Sp={name:"css",register:Yc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,w,S,y,P,R,A,C,b;Ku||Yc(),this.styles=this.styles||pp(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(jn[g]&&ip(g,t,n,r,e,o)))){if(m=typeof u,v=hl[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ea(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Hr.lastIndex=0,Hr.test(c)||(_=Tn(c),p=Tn(u),p?_!==p&&(c=Xr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),C.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],pn(c)&&~c.indexOf("random(")&&(c=ea(c)),Tn(c+"")||c==="auto"||(c+=ni.units[g]||Tn(dr(e,g))||""),(c+"").charAt(1)==="="&&(c=dr(e,g))):c=dr(e,g),f=parseFloat(c),w=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),w&&(u=u.substr(2)),d=parseFloat(u),g in $i&&(g==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&d&&(f=0),C.push("visibility",0,a.visibility),Br(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=$i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in vr,S){if(this.styles.save(g),b=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=ti(e,"perspective"),M?e.style.perspective=M:Wr(e,"perspective")}d=parseFloat(u)}if(y||(P=e._gsap,P.renderTransform&&!t.parseTransform||ra(e,t.parseTransform),R=t.smoothOrigin!==!1&&P.smooth,y=this._pt=new Wn(this._pt,a,Vt,0,1,P.renderTransform,P,0,-1),y.dep=1),g==="scale")this._pt=new Wn(this._pt,P,"scaleY",P.scaleY,(w?Jo(P.scaleY,w+d):d)-P.scaleY||0,Xc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Xn,0,a[Xn]),u=k0(u),P.svg?$c(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&Br(this,P,"zOrigin",P.zOrigin,p),Br(this,a,g,fl(c),fl(u)));continue}else if(g==="svgOrigin"){$c(e,u,1,R,0,this);continue}else if(g in vp){W0(this,P,g,f,w?Jo(f,w+u):u);continue}else if(g==="smoothOrigin"){Br(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){X0(this,u,e);continue}}else g in a||(g=hs(g)||g);if(S||(d||d===0)&&(f||f===0)&&!T0.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Tn(u)||(g in ni.units?ni.units[g]:_),_!==p&&(f=Xr(e,g,c,p)),this._pt=new Wn(this._pt,S?P:a,g,f,(w?Jo(f,w+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?C0:Xc),this._pt.u=p||0,S&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=R0):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=A0);else if(g in a)B0.call(this,e,g,c,w?w+u:u);else if(g in e)this.add(e,g,c||e[g],w?w+u:u,r,o);else if(g!=="parseTransform"){ku(g,u);continue}S||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),s.push(g)}}A&&cp(this)},render:function(e,t){if(t.tween._time||!ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:$i,getSetter:function(e,t,n){var r=$i[t];return r&&r.indexOf(",")<0&&(t=r),t in vr&&t!==Xn&&(e._gsap.x||dr(e,"x"))?n&&kh===n?t==="scale"?I0:L0:(kh=n||{})&&(t==="scale"?U0:F0):e.style&&!Ou(e.style[t])?P0:~t.indexOf("-")?D0:$u(e,t)},core:{_removeProperty:Wr,_getMatrix:Qu}};Yn.utils.checkPrefix=hs;Yn.core.getStyleSaver=pp;(function(i,e,t,n){var r=Gn(i+","+e+","+t,function(o){vr[o]=1});Gn(e,function(o){ni.units[o]="deg",vp[o]=1}),$i[r[13]]=i+","+e,Gn(n,function(o){var s=o.split(":");$i[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ni.units[i]="px"});Yn.registerPlugin(Sp);var eh=Yn.registerPlugin(Sp)||Yn;eh.core.Tween;const Mp=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="170",q0=0,Zh=1,Y0=2,wp=1,$0=2,cr=3,qr=0,qn=1,En=2,Di=0,Vr=1,Kh=2,jh=3,Jh=4,oa=5,In=100,Z0=101,K0=102,j0=103,J0=104,Ja=200,fi=201,Q0=202,e_=203,ts=204,ns=205,t_=206,n_=207,i_=208,r_=209,o_=210,s_=211,a_=212,l_=213,c_=214,Zc=0,Kc=1,jc=2,fs=3,Jc=4,Qc=5,eu=6,tu=7,bp=0,u_=1,h_=2,ji=0,f_=1,d_=2,p_=3,m_=4,__=5,g_=6,v_=7,Tp=300,ds=301,ps=302,nu=303,iu=304,wl=306,is=1e3,Un=1001,dl=1002,on=1003,x_=1004,va=1005,pt=1006,Kl=1007,Pi=1008,Li=1009,Ep=1010,Ap=1011,Mo=1012,nh=1013,wo=1014,Hn=1015,Zi=1016,ih=1017,rh=1018,ms=1020,Rp=35902,Cp=1021,Pp=1022,mn=1023,Dp=1024,Lp=1025,rs=1026,_s=1027,oh=1028,sh=1029,Ip=1030,ah=1031,lh=1033,Qa=33776,el=33777,tl=33778,nl=33779,ru=35840,ou=35841,su=35842,au=35843,lu=36196,cu=37492,uu=37496,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,_u=37813,gu=37814,vu=37815,xu=37816,yu=37817,Su=37818,Mu=37819,wu=37820,bu=37821,il=36492,Tu=36494,Eu=36495,Up=36283,Au=36284,Ru=36285,Cu=36286,y_=3200,S_=3201,M_=0,w_=1,nn="",Dn="srgb",Qi="srgb-linear",bl="linear",At="srgb",Do=7680,Qh=519,b_=512,T_=513,E_=514,Fp=515,A_=516,R_=517,C_=518,P_=519,ef=35044,Er=35048,tf="300 es",mr=2e3,pl=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const Xs=Math.PI/180,sa=180/Math.PI;function xs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function D_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function L_(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function I_(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function U_(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function F_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function N_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function O_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function z_(i,e){return i+Math.random()*(e-i)}function B_(i){return i*(.5-Math.random())}function k_(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H_(i){return i*Xs}function V_(i){return i*sa}function G_(i){return(i&i-1)===0&&i!==0}function W_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function X_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function q_(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ot={DEG2RAD:Xs,RAD2DEG:sa,generateUUID:xs,clamp:bn,euclideanModulo:ch,mapLinear:D_,inverseLerp:L_,lerp:qs,damp:I_,pingpong:U_,smoothstep:F_,smootherstep:N_,randInt:O_,randFloat:z_,randFloatSpread:B_,seededRandom:k_,degToRad:H_,radToDeg:V_,isPowerOfTwo:G_,ceilPowerOfTwo:W_,floorPowerOfTwo:X_,setQuaternionFromProperEuler:q_,normalize:Cn,denormalize:qo};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,r,o,s,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],w=r[1],S=r[4],y=r[7],P=r[2],R=r[5],A=r[8];return o[0]=s*g+a*w+l*P,o[3]=s*_+a*S+l*R,o[6]=s*p+a*y+l*A,o[1]=c*g+u*w+d*P,o[4]=c*_+u*S+d*R,o[7]=c*p+u*y+d*A,o[2]=f*g+m*w+v*P,o[5]=f*_+m*S+v*R,o[8]=f*p+m*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new ut;function Np(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Y_(){const i=aa("canvas");return i.style.display="block",i}const rf={};function ks(i){i in rf||(rf[i]=!0,console.warn(i))}function $_(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Z_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===At&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===At&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nn?bl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _r(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const of=[.64,.33,.3,.6,.15,.06],sf=[.2126,.7152,.0722],af=[.3127,.329],lf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Qi]:{primaries:of,whitePoint:af,transfer:bl,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:sf,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:of,whitePoint:af,transfer:At,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:sf,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}});let Lo;class j_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Lo===void 0&&(Lo=aa("canvas")),Lo.width=e.width,Lo.height=e.height;const n=Lo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Lo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_r(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_r(t[n]/255)*255):t[n]=_r(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Jl(r[s].image)):o.push(Jl(r[s]))}else o=Jl(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q_=0;class gn extends vs{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Un,r=Un,o=pt,s=Pi,a=mn,l=Li,c=gn.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=xs(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Tp;gn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,P=(p+1)/2,R=(u+f)/4,A=(d+g)/4,C=(v+_)/4;return S>y&&S>P?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=R/n,o=A/n):y>P?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=R/r,o=C/r):P<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),n=A/o,r=C/o),this.set(n,r,o,t),this}let w=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(_-v)/w,this.y=(d-g)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eg extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new gn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends eg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zp extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tg extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),R=Math.atan2(P,p*w);_=Math.sin(_*R)/P,a=Math.sin(a*R)/P}const y=a*w;if(l=l*_+f*y,c=c*_+m*y,u=u*_+v*y,d=d*_+g*y,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ql=new q,uf=new Fn;class ys{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,bi):bi.fromBufferAttribute(o,s),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),ya.subVectors(this.max,Cs),Io.subVectors(e.a,Cs),Uo.subVectors(e.b,Cs),Fo.subVectors(e.c,Cs),Ar.subVectors(Uo,Io),Rr.subVectors(Fo,Uo),eo.subVectors(Io,Fo);let t=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-eo.z,eo.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,eo.z,0,-eo.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-eo.y,eo.x,0];return!ec(t,Io,Uo,Fo,ya)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Io,Uo,Fo,ya))?!1:(Sa.crossVectors(Ar,Rr),t=[Sa.x,Sa.y,Sa.z],ec(t,Io,Uo,Fo,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new q,new q,new q,new q,new q,new q,new q,new q],bi=new q,xa=new ys,Io=new q,Uo=new q,Fo=new q,Ar=new q,Rr=new q,eo=new q,Cs=new q,ya=new q,Sa=new q,to=new q;function ec(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){to.fromArray(i,o);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),l=e.dot(to),c=t.dot(to),u=n.dot(to);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ng=new ys,Ps=new q,tc=new q;class uh{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ps,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(tc)),this.expandByPoint(Ps.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new q,nc=new q,Ma=new q,Cr=new q,ic=new q,wa=new q,rc=new q;class ig{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nc.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(nc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Ma),a=Cr.dot(this.direction),l=-Cr.dot(Ma),c=Cr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nc).addScaledVector(Ma,f),m}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),r=ir.dot(ir)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,o){ic.subVectors(t,e),wa.subVectors(n,e),rc.crossVectors(ic,wa);let s=this.direction.dot(rc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Cr.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Cr,wa));if(l<0)return null;const c=a*this.direction.dot(ic.cross(Cr));if(c<0||l+c>s)return null;const u=-a*Cr.dot(rc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/No.setFromMatrixColumn(e,0).length(),o=1/No.setFromMatrixColumn(e,1).length(),s=1/No.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,og)}lookAt(e,t,n){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Pr.crossVectors(n,Zn),Pr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Pr.crossVectors(n,Zn)),Pr.normalize(),ba.crossVectors(Zn,Pr),r[0]=Pr.x,r[4]=ba.x,r[8]=Zn.x,r[1]=Pr.y,r[5]=ba.y,r[9]=Zn.y,r[2]=Pr.z,r[6]=ba.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],w=n[3],S=n[7],y=n[11],P=n[15],R=r[0],A=r[4],C=r[8],b=r[12],M=r[1],D=r[5],N=r[9],F=r[13],V=r[2],W=r[6],G=r[10],B=r[14],k=r[3],le=r[7],K=r[11],ye=r[15];return o[0]=s*R+a*M+l*V+c*k,o[4]=s*A+a*D+l*W+c*le,o[8]=s*C+a*N+l*G+c*K,o[12]=s*b+a*F+l*B+c*ye,o[1]=u*R+d*M+f*V+m*k,o[5]=u*A+d*D+f*W+m*le,o[9]=u*C+d*N+f*G+m*K,o[13]=u*b+d*F+f*B+m*ye,o[2]=v*R+g*M+_*V+p*k,o[6]=v*A+g*D+_*W+p*le,o[10]=v*C+g*N+_*G+p*K,o[14]=v*b+g*F+_*B+p*ye,o[3]=w*R+S*M+y*V+P*k,o[7]=w*A+S*D+y*W+P*le,o[11]=w*C+S*N+y*G+P*K,o[15]=w*b+S*F+y*B+P*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],w=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,y=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,P=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,R=t*w+n*S+r*y+o*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=y*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=P*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,w=l*c,S=l*u,y=l*d,P=n.x,R=n.y,A=n.z;return r[0]=(1-(g+p))*P,r[1]=(m+y)*P,r[2]=(v-S)*P,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(f+p))*R,r[6]=(_+w)*R,r[7]=0,r[8]=(v+S)*A,r[9]=(_-w)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=No.set(r[0],r[1],r[2]).length();const s=No.set(r[4],r[5],r[6]).length(),a=No.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ti.copy(this);const c=1/o,u=1/s,d=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=mr){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===mr)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===pl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=mr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===mr)v=(s+o)*d,g=-2*d;else if(a===pl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const No=new q,Ti=new vt,rg=new q(0,0,0),og=new q(1,1,1),Pr=new q,ba=new q,Zn=new q,hf=new vt,ff=new Fn;class si{constructor(e=0,t=0,n=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sg=0;const df=new q,Oo=new Fn,rr=new vt,Ta=new q,Ds=new q,ag=new q,lg=new Fn,pf=new q(1,0,0),mf=new q(0,1,0),_f=new q(0,0,1),gf={type:"added"},cg={type:"removed"},zo={type:"childadded",child:null},oc={type:"childremoved",child:null};class ii extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new q,t=new si,n=new Fn,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ut}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.premultiply(Oo),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(_f,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(_f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ds,Ta,this.up):rr.lookAt(Ta,Ds,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),Oo.setFromRotationMatrix(rr),this.quaternion.premultiply(Oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),zo.child=e,this.dispatchEvent(zo),zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cg),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),zo.child=e,this.dispatchEvent(zo),zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ii.DEFAULT_UP=new q(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new q,or=new q,sc=new q,sr=new q,Bo=new q,ko=new q,vf=new q,ac=new q,lc=new q,cc=new q,uc=new Ut,hc=new Ut,fc=new Ut;class Ci{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ei.subVectors(e,t),r.cross(Ei);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Ei.subVectors(r,t),or.subVectors(n,t),sc.subVectors(e,t);const s=Ei.dot(Ei),a=Ei.dot(or),l=Ei.dot(sc),c=or.dot(or),u=or.dot(sc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,sr.x),l.addScaledVector(s,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(uc,o.x),s.addScaledVector(hc,o.y),s.addScaledVector(fc,o.z),s}static isFrontFacing(e,t,n,r){return Ei.subVectors(n,t),or.subVectors(e,t),Ei.cross(or).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ei.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Bo.subVectors(r,n),ko.subVectors(o,n),ac.subVectors(e,n);const l=Bo.dot(ac),c=ko.dot(ac);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,r);const u=Bo.dot(lc),d=ko.dot(lc);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Bo,s);cc.subVectors(e,o);const m=Bo.dot(cc),v=ko.dot(cc);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ko,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return vf.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(vf,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Bo,s).addScaledVector(ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ch(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=dc(s,o,e+1/3),this.g=dc(s,o,e),this.b=dc(s,o,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Dn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return yt.fromWorkingColorSpace(yn.copy(this),e),Math.round(bn(yn.r*255,0,255))*65536+Math.round(bn(yn.g*255,0,255))*256+Math.round(bn(yn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,o=yn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Dn){yt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Ea);const n=qs(Dr.h,Ea.h,t),r=qs(Dr.s,Ea.s,t),o=qs(Dr.l,Ea.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ze;Ze.NAMES=kp;let ug=0;class Tl extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=xs(),this.name="",this.blending=Vr,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ts,this.blendDst=ns,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ts&&(n.blendSrc=this.blendSrc),this.blendDst!==ns&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Do&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Do&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Do&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hh extends Tl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pr=hg();function hg(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function fg(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=bn(i,-65504,65504),pr.floatView[0]=i;const e=pr.uint32View[0],t=e>>23&511;return pr.baseTable[t]+((e&8388607)>>pr.shiftTable[t])}function dg(i){const e=i>>10;return pr.uint32View[0]=pr.mantissaTable[pr.offsetTable[e]+(i&1023)]+pr.exponentTable[e],pr.floatView[0]}const xf={toHalfFloat:fg,fromHalfFloat:dg},en=new q,Aa=new nt;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),r=Cn(r,this.array),o=Cn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ef&&(e.usage=this.usage),e}}class Hp extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vp extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class So extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pg=0;const ui=new vt,pc=new ii,Ho=new q,Kn=new ys,Ls=new ys,dn=new q;class yr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Vp:Hp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ut().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new So(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Kn.min,Ls.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,Ls.max),Kn.expandByPoint(dn)):(Kn.expandByPoint(Ls.min),Kn.expandByPoint(Ls.max))}Kn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)dn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(dn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dn.fromBufferAttribute(a,c),l&&(Ho.fromBufferAttribute(e,c),dn.add(Ho)),r=Math.max(r,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;const c=new q,u=new q,d=new q,f=new nt,m=new nt,v=new nt,g=new q,_=new q;function p(C,b,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),f.fromBufferAttribute(o,C),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,M),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(D),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),a[C].add(g),a[b].add(g),a[M].add(g),l[C].add(_),l[b].add(_),l[M].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,b=w.length;C<b;++C){const M=w[C],D=M.start,N=M.count;for(let F=D,V=D+N;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new q,y=new q,P=new q,R=new q;function A(C){P.fromBufferAttribute(r,C),R.copy(P);const b=a[C];S.copy(b),S.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(R,b);const D=y.dot(l[C])<0?-1:1;s.setXYZW(C,S.x,S.y,S.z,D)}for(let C=0,b=w.length;C<b;++C){const M=w[C],D=M.start,N=M.count;for(let F=D,V=D+N;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Wt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yf=new vt,no=new ig,Ra=new uh,Sf=new q,Ca=new q,Pa=new q,Da=new q,mc=new q,La=new q,Mf=new q,Ia=new q;class It extends ii{constructor(e=new yr,t=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){La.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(mc.fromBufferAttribute(d,e),s?La.addScaledVector(mc,u):La.addScaledVector(mc.sub(t),u))}t.add(La)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(o),no.copy(e.ray).recast(e.near),!(Ra.containsPoint(no.origin)===!1&&(no.intersectSphere(Ra,Sf)===null||no.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(yf.copy(o).invert(),no.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&no.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],w=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let y=w,P=S;y<P;y+=3){const R=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);r=Ua(this,p,e,n,c,u,d,R,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const w=a.getX(_),S=a.getX(_+1),y=a.getX(_+2);r=Ua(this,s,e,n,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],w=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let y=w,P=S;y<P;y+=3){const R=y,A=y+1,C=y+2;r=Ua(this,p,e,n,c,u,d,R,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const w=_,S=_+1,y=_+2;r=Ua(this,s,e,n,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function mg(i,e,t,n,r,o,s,a){let l;if(e.side===qn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===qr,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:i}}function Ua(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ca),i.getVertexPosition(l,Pa),i.getVertexPosition(c,Da);const u=mg(i,e,t,n,Ca,Pa,Da,Mf);if(u){const d=new q;Ci.getBarycoord(Mf,Ca,Pa,Da,d),r&&(u.uv=Ci.getInterpolatedAttribute(r,a,l,c,d,new nt)),o&&(u.uv1=Ci.getInterpolatedAttribute(o,a,l,c,d,new nt)),s&&(u.normal=Ci.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Ci.getNormal(Ca,Pa,Da,f.normal),u.face=f,u.barycoord=d}return u}class ca extends yr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new So(c,3)),this.setAttribute("normal",new So(u,3)),this.setAttribute("uv",new So(d,2));function v(g,_,p,w,S,y,P,R,A,C,b){const M=y/A,D=P/C,N=y/2,F=P/2,V=R/2,W=A+1,G=C+1;let B=0,k=0;const le=new q;for(let K=0;K<G;K++){const ye=K*D-F;for(let Se=0;Se<W;Se++){const Le=Se*M-N;le[g]=Le*w,le[_]=ye*S,le[p]=V,c.push(le.x,le.y,le.z),le[g]=0,le[_]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),d.push(Se/A),d.push(1-K/C),B+=1}}for(let K=0;K<C;K++)for(let ye=0;ye<A;ye++){const Se=f+ye+W*K,Le=f+ye+W*(K+1),j=f+(ye+1)+W*(K+1),oe=f+(ye+1)+W*K;l.push(Se,Le,oe),l.push(Le,j,oe),k+=6}a.addGroup(m,k,b),m+=k,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=gs(i[t]);for(const r in n)e[r]=n[r]}return e}function _g(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const gg={clone:gs,merge:Pn};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Tl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wp extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new q,wf=new nt,bf=new nt;class Bn extends Wp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,wf,bf),t.subVectors(bf,wf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vo=-90,Go=1;class yg extends ii{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Vo,Go,e,t);r.layers=this.layers,this.add(r);const o=new Bn(Vo,Go,e,t);o.layers=this.layers,this.add(o);const s=new Bn(Vo,Go,e,t);s.layers=this.layers,this.add(s);const a=new Bn(Vo,Go,e,t);a.layers=this.layers,this.add(a);const l=new Bn(Vo,Go,e,t);l.layers=this.layers,this.add(l);const c=new Bn(Vo,Go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===mr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Xp extends gn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sg extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ca(5,5,5),o=new Rt({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Di});o.uniforms.tEquirect.value=t;const s=new It(r,o),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=pt),new yg(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const _c=new q,Mg=new q,wg=new ut;class co{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_c.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wg.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new uh,Fa=new q;class qp{constructor(e=new co,t=new co,n=new co,r=new co,o=new co,s=new co){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mr){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],w=r[13],S=r[14],y=r[15];if(n[0].setComponents(l-o,f-c,_-m,y-p).normalize(),n[1].setComponents(l+o,f+c,_+m,y+p).normalize(),n[2].setComponents(l+s,f+u,_+v,y+w).normalize(),n[3].setComponents(l-s,f-u,_-v,y-w).normalize(),n[4].setComponents(l-a,f-d,_-g,y-S).normalize(),t===mr)n[5].setComponents(l+a,f+d,_+g,y+S).normalize();else if(t===pl)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){return io.center.set(0,0,0),io.radius=.7071067811865476,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yp(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function bg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Ii extends yr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const w=p*f-s;for(let S=0;S<c;S++){const y=S*d-o;v.push(y,-w,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const S=w+c*p,y=w+c*(p+1),P=w+1+c*(p+1),R=w+1+c*p;m.push(S,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new So(v,3)),this.setAttribute("normal",new So(g,3)),this.setAttribute("uv",new So(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yv=`BlinnPhongMaterial material;
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
#endif`,wv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
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
#endif`,zv=`#if defined( USE_MORPHCOLORS )
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
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
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Ix=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
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
}`,zx=`#include <common>
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
}`,kx=`#define LAMBERT
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
}`,Hx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Kx=`#define TOON
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
}`,jx=`#define TOON
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
}`,Qx=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,n1=`uniform float rotation;
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
}`,i1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Tg,alphahash_pars_fragment:Eg,alphamap_fragment:Ag,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Dg,aomap_pars_fragment:Lg,batching_pars_vertex:Ig,batching_vertex:Ug,begin_vertex:Fg,beginnormal_vertex:Ng,bsdfs:Og,iridescence_fragment:zg,bumpmap_pars_fragment:Bg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:jg,displacementmap_vertex:Jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:rv,envmap_pars_fragment:ov,envmap_pars_vertex:sv,envmap_physical_pars_fragment:gv,envmap_vertex:av,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:uv,fog_pars_fragment:hv,gradientmap_pars_fragment:fv,lightmap_pars_fragment:dv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:_v,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:yv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Mv,lights_physical_pars_fragment:wv,lights_fragment_begin:bv,lights_fragment_maps:Tv,lights_fragment_end:Ev,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Lv,map_particle_fragment:Iv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Ov,morphcolor_vertex:zv,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:Hv,normal_fragment_begin:Vv,normal_fragment_maps:Gv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:jv,opaque_fragment:Jv,packing:Qv,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:ax,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:ux,skinning_pars_vertex:hx,skinning_vertex:fx,skinnormal_vertex:dx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:_x,tonemapping_pars_fragment:gx,transmission_fragment:vx,transmission_pars_fragment:xx,uv_pars_fragment:yx,uv_pars_vertex:Sx,uv_vertex:Mx,worldpos_vertex:wx,background_vert:bx,background_frag:Tx,backgroundCube_vert:Ex,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Dx,distanceRGBA_vert:Lx,distanceRGBA_frag:Ix,equirect_vert:Ux,equirect_frag:Fx,linedashed_vert:Nx,linedashed_frag:Ox,meshbasic_vert:zx,meshbasic_frag:Bx,meshlambert_vert:kx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:Kx,meshtoon_frag:jx,points_vert:Jx,points_frag:Qx,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Ne={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},qi={basic:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Pn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Pn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Pn([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Pn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Pn([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Pn([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Pn([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Pn([Ne.lights,Ne.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};qi.physical={uniforms:Pn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Na={r:0,b:0,g:0},ro=new si,r1=new vt;function o1(i,e,t,n,r,o,s){const a=new Ze(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function g(w){let S=!1;const y=v(w);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,S){const y=v(S);y&&(y.isCubeTexture||y.mapping===wl)?(u===void 0&&(u=new It(new ca(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:gs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ro.copy(S.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(ro)),u.material.toneMapped=yt.getTransfer(y.colorSpace)!==At,(d!==y||f!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new Ii(2,2),new Rt({name:"BackgroundMaterial",uniforms:gs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=yt.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(Na,Gp(i)),n.buffers.color.setClear(Na.r,Na.g,Na.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:g,addToRenderList:_}}function s1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(M,D,N,F,V){let W=!1;const G=d(F,N,D);o!==G&&(o=G,c(o.object)),W=m(M,F,N,V),W&&v(M,F,N,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,y(M,D,N,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,D,N){const F=N.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[D.id];W===void 0&&(W={},V[D.id]=W);let G=W[F];return G===void 0&&(G=f(l()),W[F]=G),G}function f(M){const D=[],N=[],F=[];for(let V=0;V<t;V++)D[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,D,N,F){const V=o.attributes,W=D.attributes;let G=0;const B=N.getAttributes();for(const k in B)if(B[k].location>=0){const K=V[k];let ye=W[k];if(ye===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),K===void 0||K.attribute!==ye||ye&&K.data!==ye.data)return!0;G++}return o.attributesNum!==G||o.index!==F}function v(M,D,N,F){const V={},W=D.attributes;let G=0;const B=N.getAttributes();for(const k in B)if(B[k].location>=0){let K=W[k];K===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const ye={};ye.attribute=K,K&&K.data&&(ye.data=K.data),V[k]=ye,G++}o.attributes=V,o.attributesNum=G,o.index=F}function g(){const M=o.newAttributes;for(let D=0,N=M.length;D<N;D++)M[D]=0}function _(M){p(M,0)}function p(M,D){const N=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;N[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==D&&(i.vertexAttribDivisor(M,D),V[M]=D)}function w(){const M=o.newAttributes,D=o.enabledAttributes;for(let N=0,F=D.length;N<F;N++)D[N]!==M[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function S(M,D,N,F,V,W,G){G===!0?i.vertexAttribIPointer(M,D,N,V,W):i.vertexAttribPointer(M,D,N,F,V,W)}function y(M,D,N,F){g();const V=F.attributes,W=N.getAttributes(),G=D.defaultAttributeValues;for(const B in W){const k=W[B];if(k.location>=0){let le=V[B];if(le===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const K=le.normalized,ye=le.itemSize,Se=e.get(le);if(Se===void 0)continue;const Le=Se.buffer,j=Se.type,oe=Se.bytesPerElement,ce=j===i.INT||j===i.UNSIGNED_INT||le.gpuType===nh;if(le.isInterleavedBufferAttribute){const se=le.data,Te=se.stride,Oe=le.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<k.locationSize;Pe++)p(k.location+Pe,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)_(k.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Pe=0;Pe<k.locationSize;Pe++)S(k.location+Pe,ye/k.locationSize,j,K,Te*oe,(Oe+ye/k.locationSize*Pe)*oe,ce)}else{if(le.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)p(k.location+se,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<k.locationSize;se++)_(k.location+se);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let se=0;se<k.locationSize;se++)S(k.location+se,ye/k.locationSize,j,K,ye*oe,ye/k.locationSize*se*oe,ce)}}else if(G!==void 0){const K=G[B];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(k.location,K);break;case 3:i.vertexAttrib3fv(k.location,K);break;case 4:i.vertexAttrib4fv(k.location,K);break;default:i.vertexAttrib1fv(k.location,K)}}}}w()}function P(){C();for(const M in n){const D=n[M];for(const N in D){const F=D[N];for(const V in F)u(F[V].object),delete F[V];delete D[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const N in D){const F=D[N];for(const V in F)u(F[V].object),delete F[V];delete D[N]}delete n[M.id]}function A(M){for(const D in n){const N=n[D];if(N[M.id]===void 0)continue;const F=N[M.id];for(const V in F)u(F[V].object),delete F[V];delete N[M.id]}}function C(){b(),s=!0,o!==r&&(o=r,c(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function a1(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l1(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Li&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function c1(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new co,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const w=o?0:n,S=w*4;let y=p.clippingState||null;l.value=y,y=u(v,f,S,m);for(let P=0;P!==S;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,y=m;S!==g;++S,y+=4)s.copy(d[S]).applyMatrix4(w,a),s.normal.toArray(_,y),_[y+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function u1(i){let e=new WeakMap;function t(s,a){return a===nu?s.mapping=ds:a===iu&&(s.mapping=ps),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===nu||a===iu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Sg(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class fh extends Wp{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zo=4,Tf=[.125,.215,.35,.446,.526,.582],fo=20,gc=new fh,Ef=new Ze;let vc=null,xc=0,yc=0,Sc=!1;const uo=(1+Math.sqrt(5))/2,Wo=1/uo,Af=[new q(-uo,Wo,0),new q(uo,Wo,0),new q(-Wo,0,uo),new q(Wo,0,uo),new q(0,uo,-Wo),new q(0,uo,Wo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,xc,yc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Zi,format:mn,colorSpace:Qi,depthBuffer:!1},r=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(o)),this._blurMaterial=f1(o,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,r){const a=new Bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ef),u.toneMapping=ji,u.autoClear=!1;const m=new hh({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),v=new It(new ca,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Ef),g=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Oa(r,w*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ds||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Af[(r-o-1)%Af.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new It(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*fo-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):fo;_>fo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${fo}`);const p=[];let w=0;for(let A=0;A<fo;++A){const C=A/g,b=Math.exp(-C*C/2);p.push(b),A===0?w+=b:A<_&&(w+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const y=this._sizeLods[r],P=3*y*(r>S-Zo?r-S+Zo:0),R=4*(this._cubeSize-y);Oa(t,P,R,3*y,2*y),l.setRenderTarget(t),l.render(d,gc)}}function h1(i){const e=[],t=[],n=[];let r=i;const o=i-Zo+1+Tf.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Zo?l=Tf[s-i+Zo-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,w=new Float32Array(g*v*m),S=new Float32Array(_*v*m),y=new Float32Array(p*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,C=R>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];w.set(b,g*v*R),S.set(f,_*v*R);const M=[R,R,R,R,R,R];y.set(M,p*v*R)}const P=new yr;P.setAttribute("position",new Wt(w,g)),P.setAttribute("uv",new Wt(S,_)),P.setAttribute("faceIndex",new Wt(y,p)),e.push(P),r>Zo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(i,e,t){const n=new xr(i,e,t);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function f1(i,e,t){const n=new Float32Array(fo),r=new q(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Pf(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Df(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function d1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===nu||l===iu,u=l===ds||l===ps;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rf(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Rf(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function p1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function m1(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let S=0,y=w.length;S<y;S+=3){const P=w[S+0],R=w[S+1],A=w[S+2];f.push(P,R,R,A,A,P)}}else if(v!==void 0){const w=v.array;g=v.version;for(let S=0,y=w.length/3-1;S<y;S+=3){const P=S+0,R=S+1,A=S+2;f.push(P,R,R,A,A,P)}}else return;const _=new(Np(f)?Vp:Hp)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function _1(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let w=0;w<v;w++)p+=m[w]*g[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function g1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function v1(i,e,t){const n=new WeakMap,r=new Ut;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let P=a.attributes.position.count*y,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*d),C=new zp(A,P,R,d);C.type=Hn,C.needsUpdate=!0;const b=y*4;for(let D=0;D<d;D++){const N=p[D],F=w[D],V=S[D],W=P*R*4*D;for(let G=0;G<N.count;G++){const B=G*b;v===!0&&(r.fromBufferAttribute(N,G),A[W+B+0]=r.x,A[W+B+1]=r.y,A[W+B+2]=r.z,A[W+B+3]=0),g===!0&&(r.fromBufferAttribute(F,G),A[W+B+4]=r.x,A[W+B+5]=r.y,A[W+B+6]=r.z,A[W+B+7]=0),_===!0&&(r.fromBufferAttribute(V,G),A[W+B+8]=r.x,A[W+B+9]=r.y,A[W+B+10]=r.z,A[W+B+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new nt(P,R)},n.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function x1(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class ml extends gn{constructor(e,t,n,r,o,s,a,l,c,u=rs){if(u!==rs&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=wo),n===void 0&&u===_s&&(n=ms),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $p=new gn,Lf=new ml(1,1),Zp=new zp,Kp=new tg,jp=new Xp,If=[],Uf=[],Ff=new Float32Array(16),Nf=new Float32Array(9),Of=new Float32Array(4);function Ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=If[r];if(o===void 0&&(o=new Float32Array(r),If[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function El(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function b1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),an(t,n)}}function T1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Nf.set(n),i.uniformMatrix3fv(this.addr,!1,Nf),an(t,n)}}function E1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),an(t,n)}}function A1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function P1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function D1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function F1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Lf.compareFunction=Fp,o=Lf):o=$p,t.setTexture2D(e||o,r)}function N1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kp,r)}function O1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||jp,r)}function z1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zp,r)}function B1(i){switch(i){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return w1;case 35674:return b1;case 35675:return T1;case 35676:return E1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return P1;case 5125:return D1;case 36294:return L1;case 36295:return I1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return z1}}function k1(i,e){i.uniform1fv(this.addr,e)}function H1(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function V1(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function G1(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function W1(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function X1(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q1(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y1(i,e){i.uniform1iv(this.addr,e)}function $1(i,e){i.uniform2iv(this.addr,e)}function Z1(i,e){i.uniform3iv(this.addr,e)}function K1(i,e){i.uniform4iv(this.addr,e)}function j1(i,e){i.uniform1uiv(this.addr,e)}function J1(i,e){i.uniform2uiv(this.addr,e)}function Q1(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){const n=this.cache,r=e.length,o=El(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||$p,o[s])}function ny(i,e,t){const n=this.cache,r=e.length,o=El(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Kp,o[s])}function iy(i,e,t){const n=this.cache,r=e.length,o=El(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||jp,o[s])}function ry(i,e,t){const n=this.cache,r=e.length,o=El(t,r);sn(n,o)||(i.uniform1iv(this.addr,o),an(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Zp,o[s])}function oy(i){switch(i){case 5126:return k1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return W1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return j1;case 36294:return J1;case 36295:return Q1;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}class sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function cy(i,e,t){const n=i.name,r=n.length;for(Mc.lastIndex=0;;){const o=Mc.exec(n),s=Mc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){zf(t,c===void 0?new sy(a,i,e):new ay(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ly(a),zf(t,d)),t=d}}}class rl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);cy(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Bf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const uy=37297;let hy=0;function fy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const kf=new ut;function dy(i){yt._getMatrix(kf,yt.workingColorSpace,i);const e=`mat3( ${kf.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case bl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fy(i.getShaderSource(e),s)}else return r}function py(i,e){const t=dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function my(i,e){let t;switch(e){case f_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="Cineon";break;case m_:t="ACESFilmic";break;case g_:t="AgX";break;case v_:t="Neutral";break;case __:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new q;function _y(){yt.getLuminanceCoefficients(za);const i=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function vy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Hs(i){return i!==""}function Vf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace(yy,My)}const Sy=new Map;function My(i,e){let t=ft[e];if(t===void 0){const n=Sy.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pu(t)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(i){return i.replace(wy,by)}function by(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ty(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function Ey(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ay(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Ry(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bp:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function Cy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Py(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=Ty(t),c=Ey(t),u=Ay(t),d=Ry(t),f=Cy(t),m=gy(t),v=vy(o),g=r.createProgram();let _,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(_=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ft.tonemapping_pars_fragment:"",t.toneMapping!==ji?my("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,py("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),s=Pu(s),s=Vf(s,t),s=Gf(s,t),a=Pu(a),a=Vf(a,t),a=Gf(a,t),s=Wf(s),a=Wf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+_+s,y=w+p+a,P=Bf(r,r.VERTEX_SHADER,S),R=Bf(r,r.FRAGMENT_SHADER,y);r.attachShader(g,P),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(R).trim();let W=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,R);else{const B=Hf(r,P,"vertex"),k=Hf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+B+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:W,programLog:N,vertexShader:{log:F,prefix:_},fragmentShader:{log:V,prefix:p}})}r.deleteShader(P),r.deleteShader(R),C=new rl(r,g),b=xy(r,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,uy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}let Dy=0;class Ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Iy(e),t.set(e,n)),n}}class Iy{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}}function Uy(i,e,t,n,r,o,s){const a=new Bp,l=new Ly,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,M,D,N,F){const V=N.fog,W=F.geometry,G=b.isMeshStandardMaterial?N.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),k=B&&B.mapping===wl?B.image.height:null,le=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=K!==void 0?K.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let Le,j,oe,ce;if(le){const _t=qi[le];Le=_t.vertexShader,j=_t.fragmentShader}else Le=b.vertexShader,j=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const se=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,Ge=!!b.map,Be=!!b.matcap,tt=!!B,z=!!b.aoMap,ke=!!b.lightMap,We=!!b.bumpMap,je=!!b.normalMap,Ue=!!b.displacementMap,qe=!!b.emissiveMap,ze=!!b.metalnessMap,U=!!b.roughnessMap,E=b.anisotropy>0,H=b.clearcoat>0,$=b.dispersion>0,ae=b.iridescence>0,ie=b.sheen>0,Ce=b.transmission>0,he=E&&!!b.anisotropyMap,_e=H&&!!b.clearcoatMap,Ke=H&&!!b.clearcoatNormalMap,fe=H&&!!b.clearcoatRoughnessMap,ue=ae&&!!b.iridescenceMap,ge=ae&&!!b.iridescenceThicknessMap,Ee=ie&&!!b.sheenColorMap,De=ie&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Xe=!!b.specularColorMap,Qe=!!b.specularIntensityMap,X=Ce&&!!b.transmissionMap,ee=Ce&&!!b.thicknessMap,te=!!b.gradientMap,de=!!b.alphaMap,Ie=b.alphaTest>0,Fe=!!b.alphaHash,it=!!b.extensions;let St=ji;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(St=i.toneMapping);const qt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Le,fragmentShader:j,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:Be,envMap:tt,envMapMode:tt&&B.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:ke,bumpMap:We,normalMap:je,displacementMap:f&&Ue,emissiveMap:qe,normalMapObjectSpace:je&&b.normalMapType===w_,normalMapTangentSpace:je&&b.normalMapType===M_,metalnessMap:ze,roughnessMap:U,anisotropy:E,anisotropyMap:he,clearcoat:H,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:fe,dispersion:$,iridescence:ae,iridescenceMap:ue,iridescenceThicknessMap:ge,sheen:ie,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Je,specularColorMap:Xe,specularIntensityMap:Qe,transmission:Ce,transmissionMap:X,thicknessMap:ee,gradientMap:te,opaque:b.transparent===!1&&b.blending===Vr&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:Fe,combine:b.combine,mapUv:Ge&&g(b.map.channel),aoMapUv:z&&g(b.aoMap.channel),lightMapUv:ke&&g(b.lightMap.channel),bumpMapUv:We&&g(b.bumpMap.channel),normalMapUv:je&&g(b.normalMap.channel),displacementMapUv:Ue&&g(b.displacementMap.channel),emissiveMapUv:qe&&g(b.emissiveMap.channel),metalnessMapUv:ze&&g(b.metalnessMap.channel),roughnessMapUv:U&&g(b.roughnessMap.channel),anisotropyMapUv:he&&g(b.anisotropyMap.channel),clearcoatMapUv:_e&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(b.sheenRoughnessMap.channel),specularMapUv:Je&&g(b.specularMap.channel),specularColorMapUv:Xe&&g(b.specularColorMap.channel),specularIntensityMapUv:Qe&&g(b.specularIntensityMap.channel),transmissionMapUv:X&&g(b.transmissionMap.channel),thicknessMapUv:ee&&g(b.thicknessMap.channel),alphaMapUv:de&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(je||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ge||de),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:qe&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const M=v[b.type];let D;if(M){const N=qi[M];D=gg.clone(N.uniforms)}else D=b.uniforms;return D}function P(b,M){let D;for(let N=0,F=u.length;N<F;N++){const V=u[N];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Py(i,M,b,o),u.push(D)),D}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:C}}function Fy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yf(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Ny),n.length>1&&n.sort(f||qf),r.length>1&&r.sort(f||qf)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function Oy(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Yf,i.set(n,[s])):r>=o.length?(s=new Yf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function zy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ze};break;case"SpotLight":t={position:new q,direction:new q,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function By(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ky=0;function Hy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vy(i){const e=new zy,t=By(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new vt,s=new vt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,w=0,S=0,y=0,P=0,R=0,A=0;c.sort(Hy);for(let b=0,M=c.length;b<M;b++){const D=c[b],N=D.color,F=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*F,d+=N.g*F,f+=N.b*F;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],F);A++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,k=t.get(D);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[g]=G;const B=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,B.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=B.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=W,y++}g++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=G,_++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const B=D.shadow,k=t.get(D);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=D.shadow.matrix,S++}n.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(F),G.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==p||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==y||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,C.directionalLength=m,C.pointLength=v,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=p,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=y,C.numSpotMaps=P,C.numLightProbes=A,n.version=ky++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function $f(i){const e=new Vy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Gy(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new $f(i),e.set(r,[a])):o>=s.length?(a=new $f(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wy extends Tl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends Tl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`;function $y(i,e,t){let n=new qp;const r=new nt,o=new nt,s=new Ut,a=new Wy({depthPacking:S_}),l=new Xy,c={},u=t.maxTextureSize,d={[qr]:qn,[qn]:qr,[En]:En},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new yr;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let p=this.type;this.render=function(R,A,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==cr&&this.type===cr,V=p===cr&&this.type!==cr;for(let W=0,G=R.length;W<G;W++){const B=R[W],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const le=k.getFrameExtents();if(r.multiply(le),o.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/le.x),r.x=o.x*le.x,k.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/le.y),r.y=o.y*le.y,k.mapSize.y=o.y)),k.map===null||F===!0||V===!0){const ye=this.type!==cr?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new xr(r.x,r.y,ye),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const K=k.getViewportCount();for(let ye=0;ye<K;ye++){const Se=k.getViewport(ye);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),N.viewport(s),k.updateMatrices(B,ye),n=k.getFrustum(),y(A,C,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===cr&&w(k,C),k.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(b,M,D)};function w(R,A){const C=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,C,m,g,null)}function S(R,A,C,b){let M=null;const D=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,F=A.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let W=V[F];W===void 0&&(W=M.clone(),V[F]=W,A.addEventListener("dispose",P)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,b===cr?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=C}return M}function y(R,A,C,b,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===cr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const F=e.update(R),V=R.material;if(Array.isArray(V)){const W=F.groups;for(let G=0,B=W.length;G<B;G++){const k=W[G],le=V[k.materialIndex];if(le&&le.visible){const K=S(R,le,b,M);R.onBeforeShadow(i,R,A,C,F,K,k),i.renderBufferDirect(C,null,F,K,R,k),R.onAfterShadow(i,R,A,C,F,K,k)}}}else if(V.visible){const W=S(R,V,b,M);R.onBeforeShadow(i,R,A,C,F,W,null),i.renderBufferDirect(C,null,F,W,R,null),R.onAfterShadow(i,R,A,C,F,W,null)}}const N=R.children;for(let F=0,V=N.length;F<V;F++)y(N[F],A,C,b,M)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const b=c[C],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Zy={[Zc]:Kc,[jc]:eu,[Jc]:tu,[fs]:Qc,[Kc]:Zc,[eu]:jc,[tu]:Jc,[Qc]:fs};function Ky(i,e){function t(){let X=!1;const ee=new Ut;let te=null;const de=new Ut(0,0,0,0);return{setMask:function(Ie){te!==Ie&&!X&&(i.colorMask(Ie,Ie,Ie,Ie),te=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Fe,it,St,qt){qt===!0&&(Ie*=St,Fe*=St,it*=St),ee.set(Ie,Fe,it,St),de.equals(ee)===!1&&(i.clearColor(Ie,Fe,it,St),de.copy(ee))},reset:function(){X=!1,te=null,de.set(-1,0,0,0)}}}function n(){let X=!1,ee=!1,te=null,de=null,Ie=null;return{setReversed:function(Fe){if(ee!==Fe){const it=e.get("EXT_clip_control");ee?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const St=Ie;Ie=null,this.setClear(St)}ee=Fe},getReversed:function(){return ee},setTest:function(Fe){Fe?se(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Fe){te!==Fe&&!X&&(i.depthMask(Fe),te=Fe)},setFunc:function(Fe){if(ee&&(Fe=Zy[Fe]),de!==Fe){switch(Fe){case Zc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case jc:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Jc:i.depthFunc(i.EQUAL);break;case Qc:i.depthFunc(i.GEQUAL);break;case eu:i.depthFunc(i.GREATER);break;case tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Fe}},setLocked:function(Fe){X=Fe},setClear:function(Fe){Ie!==Fe&&(ee&&(Fe=1-Fe),i.clearDepth(Fe),Ie=Fe)},reset:function(){X=!1,te=null,de=null,Ie=null,ee=!1}}}function r(){let X=!1,ee=null,te=null,de=null,Ie=null,Fe=null,it=null,St=null,qt=null;return{setTest:function(_t){X||(_t?se(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(_t){ee!==_t&&!X&&(i.stencilMask(_t),ee=_t)},setFunc:function(_t,Kt,Nn){(te!==_t||de!==Kt||Ie!==Nn)&&(i.stencilFunc(_t,Kt,Nn),te=_t,de=Kt,Ie=Nn)},setOp:function(_t,Kt,Nn){(Fe!==_t||it!==Kt||St!==Nn)&&(i.stencilOp(_t,Kt,Nn),Fe=_t,it=Kt,St=Nn)},setLocked:function(_t){X=_t},setClear:function(_t){qt!==_t&&(i.clearStencil(_t),qt=_t)},reset:function(){X=!1,ee=null,te=null,de=null,Ie=null,Fe=null,it=null,St=null,qt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,w=null,S=null,y=null,P=null,R=null,A=new Ze(0,0,0),C=0,b=!1,M=null,D=null,N=null,F=null,V=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=B>=2);let le=null,K={};const ye=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Le=new Ut().fromArray(ye),j=new Ut().fromArray(Se);function oe(X,ee,te,de){const Ie=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(X,Fe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<te;it++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ee+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Fe}const ce={};ce[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(i.DEPTH_TEST),s.setFunc(fs),We(!1),je(Zh),se(i.CULL_FACE),z(Di);function se(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function Te(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Oe(X,ee){return d[X]!==ee?(i.bindFramebuffer(X,ee),d[X]=ee,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(X,ee){let te=m,de=!1;if(X){te=f.get(ee),te===void 0&&(te=[],f.set(ee,te));const Ie=X.textures;if(te.length!==Ie.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,it=Ie.length;Fe<it;Fe++)te[Fe]=i.COLOR_ATTACHMENT0+Fe;te.length=Ie.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function Ge(X){return v!==X?(i.useProgram(X),v=X,!0):!1}const Be={[In]:i.FUNC_ADD,[Z0]:i.FUNC_SUBTRACT,[K0]:i.FUNC_REVERSE_SUBTRACT};Be[j0]=i.MIN,Be[J0]=i.MAX;const tt={[Ja]:i.ZERO,[fi]:i.ONE,[Q0]:i.SRC_COLOR,[ts]:i.SRC_ALPHA,[o_]:i.SRC_ALPHA_SATURATE,[i_]:i.DST_COLOR,[t_]:i.DST_ALPHA,[e_]:i.ONE_MINUS_SRC_COLOR,[ns]:i.ONE_MINUS_SRC_ALPHA,[r_]:i.ONE_MINUS_DST_COLOR,[n_]:i.ONE_MINUS_DST_ALPHA,[s_]:i.CONSTANT_COLOR,[a_]:i.ONE_MINUS_CONSTANT_COLOR,[l_]:i.CONSTANT_ALPHA,[c_]:i.ONE_MINUS_CONSTANT_ALPHA};function z(X,ee,te,de,Ie,Fe,it,St,qt,_t){if(X===Di){g===!0&&(Te(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),X!==oa){if(X!==_||_t!==b){if((p!==In||y!==In)&&(i.blendEquation(i.FUNC_ADD),p=In,y=In),_t)switch(X){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,S=null,P=null,R=null,A.set(0,0,0),C=0,_=X,b=_t}return}Ie=Ie||ee,Fe=Fe||te,it=it||de,(ee!==p||Ie!==y)&&(i.blendEquationSeparate(Be[ee],Be[Ie]),p=ee,y=Ie),(te!==w||de!==S||Fe!==P||it!==R)&&(i.blendFuncSeparate(tt[te],tt[de],tt[Fe],tt[it]),w=te,S=de,P=Fe,R=it),(St.equals(A)===!1||qt!==C)&&(i.blendColor(St.r,St.g,St.b,qt),A.copy(St),C=qt),_=X,b=!1}function ke(X,ee){X.side===En?Te(i.CULL_FACE):se(i.CULL_FACE);let te=X.side===qn;ee&&(te=!te),We(te),X.blending===Vr&&X.transparent===!1?z(Di):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),o.setMask(X.colorWrite);const de=X.stencilWrite;a.setTest(de),de&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(X){M!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),M=X)}function je(X){X!==q0?(se(i.CULL_FACE),X!==D&&(X===Zh?i.cullFace(i.BACK):X===Y0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),D=X}function Ue(X){X!==N&&(G&&i.lineWidth(X),N=X)}function qe(X,ee,te){X?(se(i.POLYGON_OFFSET_FILL),(F!==ee||V!==te)&&(i.polygonOffset(ee,te),F=ee,V=te)):Te(i.POLYGON_OFFSET_FILL)}function ze(X){X?se(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function U(X){X===void 0&&(X=i.TEXTURE0+W-1),le!==X&&(i.activeTexture(X),le=X)}function E(X,ee,te){te===void 0&&(le===null?te=i.TEXTURE0+W-1:te=le);let de=K[te];de===void 0&&(de={type:void 0,texture:void 0},K[te]=de),(de.type!==X||de.texture!==ee)&&(le!==te&&(i.activeTexture(te),le=te),i.bindTexture(X,ee||ce[X]),de.type=X,de.texture=ee)}function H(){const X=K[le];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(X){Le.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function De(X){j.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Je(X,ee){let te=c.get(ee);te===void 0&&(te=new WeakMap,c.set(ee,te));let de=te.get(X);de===void 0&&(de=i.getUniformBlockIndex(ee,X.name),te.set(X,de))}function Xe(X,ee){const de=c.get(ee).get(X);l.get(ee)!==de&&(i.uniformBlockBinding(ee,de,X.__bindingPointIndex),l.set(ee,de))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,K={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,w=null,S=null,y=null,P=null,R=null,A=new Ze(0,0,0),C=0,b=!1,M=null,D=null,N=null,F=null,V=null,Le.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:Te,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:Ge,setBlending:z,setMaterial:ke,setFlipSided:We,setCullFace:je,setLineWidth:Ue,setPolygonOffset:qe,setScissorTest:ze,activeTexture:U,bindTexture:E,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:ae,texImage2D:ue,texImage3D:ge,updateUBOMapping:Je,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:fe,texSubImage2D:ie,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ee,viewport:De,reset:Qe}}function Zf(i,e,t,n){const r=jy(n);switch(t){case Cp:return i*e;case Dp:return i*e;case Lp:return i*e*2;case oh:return i*e/r.components*r.byteLength;case sh:return i*e/r.components*r.byteLength;case Ip:return i*e*2/r.components*r.byteLength;case ah:return i*e*2/r.components*r.byteLength;case Pp:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case lh:return i*e*4/r.components*r.byteLength;case Qa:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ou:case au:return Math.max(i,16)*Math.max(e,8)/4;case ru:case su:return Math.max(i,8)*Math.max(e,8)/2;case lu:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case il:case Tu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Up:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ru:case Cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(i){switch(i){case Li:case Ep:return{byteLength:1,components:1};case Mo:case Ap:case Zi:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case wo:case nh:case Hn:return{byteLength:4,components:1};case Rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jy(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,E){return m?new OffscreenCanvas(U,E):aa("canvas")}function g(U,E,H){let $=1;const ae=ze(U);if((ae.width>H||ae.height>H)&&($=H/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor($*ae.width),Ce=Math.floor($*ae.height);d===void 0&&(d=v(ie,Ce));const he=E?v(ie,Ce):d;return he.width=ie,he.height=Ce,he.getContext("2d").drawImage(U,0,0,ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Ce+")."),he}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,E,H,$,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=E;if(E===i.RED&&(H===i.FLOAT&&(ie=i.R32F),H===i.HALF_FLOAT&&(ie=i.R16F),H===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.R8UI),H===i.UNSIGNED_SHORT&&(ie=i.R16UI),H===i.UNSIGNED_INT&&(ie=i.R32UI),H===i.BYTE&&(ie=i.R8I),H===i.SHORT&&(ie=i.R16I),H===i.INT&&(ie=i.R32I)),E===i.RG&&(H===i.FLOAT&&(ie=i.RG32F),H===i.HALF_FLOAT&&(ie=i.RG16F),H===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RG8UI),H===i.UNSIGNED_SHORT&&(ie=i.RG16UI),H===i.UNSIGNED_INT&&(ie=i.RG32UI),H===i.BYTE&&(ie=i.RG8I),H===i.SHORT&&(ie=i.RG16I),H===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),H===i.UNSIGNED_INT&&(ie=i.RGB32UI),H===i.BYTE&&(ie=i.RGB8I),H===i.SHORT&&(ie=i.RGB16I),H===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),H===i.UNSIGNED_INT&&(ie=i.RGBA32UI),H===i.BYTE&&(ie=i.RGBA8I),H===i.SHORT&&(ie=i.RGBA16I),H===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),E===i.RGBA){const Ce=ae?bl:yt.getTransfer($);H===i.FLOAT&&(ie=i.RGBA32F),H===i.HALF_FLOAT&&(ie=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ie=Ce===At?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(U,E){let H;return U?E===null||E===wo||E===ms?H=i.DEPTH24_STENCIL8:E===Hn?H=i.DEPTH32F_STENCIL8:E===Mo&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wo||E===ms?H=i.DEPTH_COMPONENT24:E===Hn?H=i.DEPTH_COMPONENT32F:E===Mo&&(H=i.DEPTH_COMPONENT16),H}function P(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==on&&U.minFilter!==pt?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function R(U){const E=U.target;E.removeEventListener("dispose",R),C(E),E.isVideoTexture&&u.delete(E)}function A(U){const E=U.target;E.removeEventListener("dispose",A),M(E)}function C(U){const E=n.get(U);if(E.__webglInit===void 0)return;const H=U.source,$=f.get(H);if($){const ae=$[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(U),Object.keys($).length===0&&f.delete(H)}n.remove(U)}function b(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const H=U.source,$=f.get(H);delete $[E.__cacheKey],s.memory.textures--}function M(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ae=0;ae<E.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=U.textures;for(let $=0,ae=H.length;$<ae;$++){const ie=n.get(H[$]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(H[$])}n.remove(U)}let D=0;function N(){D=0}function F(){const U=D;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),D+=1,U}function V(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function W(U,E){const H=n.get(U);if(U.isVideoTexture&&Ue(U),U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,U,E);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function G(U,E){const H=n.get(U);if(U.version>0&&H.__version!==U.version){j(H,U,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function B(U,E){const H=n.get(U);if(U.version>0&&H.__version!==U.version){j(H,U,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function k(U,E){const H=n.get(U);if(U.version>0&&H.__version!==U.version){oe(H,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const le={[is]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},K={[on]:i.NEAREST,[x_]:i.NEAREST_MIPMAP_NEAREST,[va]:i.NEAREST_MIPMAP_LINEAR,[pt]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},ye={[b_]:i.NEVER,[P_]:i.ALWAYS,[T_]:i.LESS,[Fp]:i.LEQUAL,[E_]:i.EQUAL,[C_]:i.GEQUAL,[A_]:i.GREATER,[R_]:i.NOTEQUAL};function Se(U,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pt||E.magFilter===Kl||E.magFilter===va||E.magFilter===Pi||E.minFilter===pt||E.minFilter===Kl||E.minFilter===va||E.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,le[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,K[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==va&&E.minFilter!==Pi||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Le(U,E){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",R));const $=E.source;let ae=f.get($);ae===void 0&&(ae={},f.set($,ae));const ie=V(E);if(ie!==U.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,H=!0),ae[ie].usedTimes++;const Ce=ae[U.__cacheKey];Ce!==void 0&&(ae[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(E)),U.__cacheKey=ie,U.__webglTexture=ae[ie].texture}return H}function j(U,E,H){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);const ae=Le(U,E),ie=E.source;t.bindTexture($,U.__webglTexture,i.TEXTURE0+H);const Ce=n.get(ie);if(ie.version!==Ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const he=yt.getPrimaries(yt.workingColorSpace),_e=E.colorSpace===nn?null:yt.getPrimaries(E.colorSpace),Ke=E.colorSpace===nn||he===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let fe=g(E.image,!1,r.maxTextureSize);fe=qe(E,fe);const ue=o.convert(E.format,E.colorSpace),ge=o.convert(E.type);let Ee=S(E.internalFormat,ue,ge,E.colorSpace,E.isVideoTexture);Se($,E);let De;const Je=E.mipmaps,Xe=E.isVideoTexture!==!0,Qe=Ce.__version===void 0||ae===!0,X=ie.dataReady,ee=P(E,fe);if(E.isDepthTexture)Ee=y(E.format===_s,E.type),Qe&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Ee,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,ue,ge,null));else if(E.isDataTexture)if(Je.length>0){Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,Je[0].width,Je[0].height);for(let te=0,de=Je.length;te<de;te++)De=Je[te],Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,ge,De.data):t.texImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,ue,ge,De.data);E.generateMipmaps=!1}else Xe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,fe.width,fe.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,ue,ge,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,ue,ge,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ee,Je[0].width,Je[0].height,fe.depth);for(let te=0,de=Je.length;te<de;te++)if(De=Je[te],E.format!==mn)if(ue!==null)if(Xe){if(X)if(E.layerUpdates.size>0){const Ie=Zf(De.width,De.height,E.format,E.type);for(const Fe of E.layerUpdates){const it=De.data.subarray(Fe*Ie/De.data.BYTES_PER_ELEMENT,(Fe+1)*Ie/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Fe,De.width,De.height,1,ue,it)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,fe.depth,ue,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ee,De.width,De.height,fe.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,fe.depth,ue,ge,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ee,De.width,De.height,fe.depth,0,ue,ge,De.data)}else{Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,Je[0].width,Je[0].height);for(let te=0,de=Je.length;te<de;te++)De=Je[te],E.format!==mn?ue!==null?Xe?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,De.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,ge,De.data):t.texImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,ue,ge,De.data)}else if(E.isDataArrayTexture)if(Xe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ee,fe.width,fe.height,fe.depth),X)if(E.layerUpdates.size>0){const te=Zf(fe.width,fe.height,E.format,E.type);for(const de of E.layerUpdates){const Ie=fe.data.subarray(de*te/fe.data.BYTES_PER_ELEMENT,(de+1)*te/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,fe.width,fe.height,1,ue,ge,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ue,ge,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,fe.width,fe.height,fe.depth,0,ue,ge,fe.data);else if(E.isData3DTexture)Xe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ee,Ee,fe.width,fe.height,fe.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ue,ge,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,fe.width,fe.height,fe.depth,0,ue,ge,fe.data);else if(E.isFramebufferTexture){if(Qe)if(Xe)t.texStorage2D(i.TEXTURE_2D,ee,Ee,fe.width,fe.height);else{let te=fe.width,de=fe.height;for(let Ie=0;Ie<ee;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ee,te,de,0,ue,ge,null),te>>=1,de>>=1}}else if(Je.length>0){if(Xe&&Qe){const te=ze(Je[0]);t.texStorage2D(i.TEXTURE_2D,ee,Ee,te.width,te.height)}for(let te=0,de=Je.length;te<de;te++)De=Je[te],Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue,ge,De):t.texImage2D(i.TEXTURE_2D,te,Ee,ue,ge,De);E.generateMipmaps=!1}else if(Xe){if(Qe){const te=ze(fe);t.texStorage2D(i.TEXTURE_2D,ee,Ee,te.width,te.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,ge,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,ge,fe);_(E)&&p($),Ce.__version=ie.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function oe(U,E,H){if(E.image.length!==6)return;const $=Le(U,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+H);const ie=n.get(ae);if(ae.version!==ie.__version||$===!0){t.activeTexture(i.TEXTURE0+H);const Ce=yt.getPrimaries(yt.workingColorSpace),he=E.colorSpace===nn?null:yt.getPrimaries(E.colorSpace),_e=E.colorSpace===nn||Ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let de=0;de<6;de++)!Ke&&!fe?ue[de]=g(E.image[de],!0,r.maxCubemapSize):ue[de]=fe?E.image[de].image:E.image[de],ue[de]=qe(E,ue[de]);const ge=ue[0],Ee=o.convert(E.format,E.colorSpace),De=o.convert(E.type),Je=S(E.internalFormat,Ee,De,E.colorSpace),Xe=E.isVideoTexture!==!0,Qe=ie.__version===void 0||$===!0,X=ae.dataReady;let ee=P(E,ge);Se(i.TEXTURE_CUBE_MAP,E);let te;if(Ke){Xe&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Je,ge.width,ge.height);for(let de=0;de<6;de++){te=ue[de].mipmaps;for(let Ie=0;Ie<te.length;Ie++){const Fe=te[Ie];E.format!==mn?Ee!==null?Xe?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Ee,De,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Je,Fe.width,Fe.height,0,Ee,De,Fe.data)}}}else{if(te=E.mipmaps,Xe&&Qe){te.length>0&&ee++;const de=ze(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Je,de.width,de.height)}for(let de=0;de<6;de++)if(fe){Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ue[de].width,ue[de].height,Ee,De,ue[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,ue[de].width,ue[de].height,0,Ee,De,ue[de].data);for(let Ie=0;Ie<te.length;Ie++){const it=te[Ie].image[de].image;Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,it.width,it.height,Ee,De,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Je,it.width,it.height,0,Ee,De,it.data)}}else{Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee,De,ue[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,Ee,De,ue[de]);for(let Ie=0;Ie<te.length;Ie++){const Fe=te[Ie];Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Ee,De,Fe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Je,Ee,De,Fe.image[de])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ce(U,E,H,$,ae,ie){const Ce=o.convert(H.format,H.colorSpace),he=o.convert(H.type),_e=S(H.internalFormat,Ce,he,H.colorSpace),Ke=n.get(E),fe=n.get(H);if(fe.__renderTarget=E,!Ke.__hasExternalTextures){const ue=Math.max(1,E.width>>ie),ge=Math.max(1,E.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,_e,ue,ge,E.depth,0,Ce,he,null):t.texImage2D(ae,ie,_e,ue,ge,0,Ce,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ae,fe.__webglTexture,0,We(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ae,fe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const $=E.depthTexture,ae=$&&$.isDepthTexture?$.type:null,ie=y(E.stencilBuffer,ae),Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=We(E);je(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ie,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const $=E.textures;for(let ae=0;ae<$.length;ae++){const ie=$[ae],Ce=o.convert(ie.format,ie.colorSpace),he=o.convert(ie.type),_e=S(ie.internalFormat,Ce,he,ie.colorSpace),Ke=We(E);H&&je(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,_e,E.width,E.height):je(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ae=$.__webglTexture,ie=We(E);if(E.depthTexture.format===rs)je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===_s)je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(U){const E=n.get(U),H=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=$}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,U)}else if(H){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),se(E.__webglDepthbuffer[$],U,!1);else{const ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,U,!1);else{const $=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(U,E,H){const $=n.get(U);E!==void 0&&ce($.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Oe(U)}function Ge(U){const E=U.texture,H=n.get(U),$=n.get(E);U.addEventListener("dispose",A);const ae=U.textures,ie=U.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,s.memory.textures++),ie){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)H.__webglFramebuffer[he][_e]=i.createFramebuffer()}else H.__webglFramebuffer[he]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)H.__webglFramebuffer[he]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let he=0,_e=ae.length;he<_e;he++){const Ke=n.get(ae[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&je(U)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const _e=ae[he];H.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const Ke=o.convert(_e.format,_e.colorSpace),fe=o.convert(_e.type),ue=S(_e.internalFormat,Ke,fe,_e.colorSpace,U.isXRRenderTarget===!0),ge=We(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,H.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),se(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Se(i.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ce(H.__webglFramebuffer[he][_e],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ce(H.__webglFramebuffer[he],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,_e=ae.length;he<_e;he++){const Ke=ae[he],fe=n.get(Ke);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Se(i.TEXTURE_2D,Ke),ce(H.__webglFramebuffer,U,Ke,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),_(Ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),Se(he,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ce(H.__webglFramebuffer[_e],U,E,i.COLOR_ATTACHMENT0,he,_e);else ce(H.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,he,0);_(E)&&p(he),t.unbindTexture()}U.depthBuffer&&Oe(U)}function Be(U){const E=U.textures;for(let H=0,$=E.length;H<$;H++){const ae=E[H];if(_(ae)){const ie=w(U),Ce=n.get(ae).__webglTexture;t.bindTexture(ie,Ce),p(ie),t.unbindTexture()}}}const tt=[],z=[];function ke(U){if(U.samples>0){if(je(U)===!1){const E=U.textures,H=U.width,$=U.height;let ae=i.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),he=E.length>1;if(he)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Ke=n.get(E[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,ae,i.NEAREST),l===!0&&(tt.length=0,z.length=0,tt.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push(ie),z.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Ke=n.get(E[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function We(U){return Math.min(r.maxSamples,U.samples)}function je(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(U){const E=s.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function qe(U,E){const H=U.colorSpace,$=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Qi&&H!==nn&&(yt.getTransfer(H)===At?($!==mn||ae!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=je}function Qy(i,e){function t(n,r=nn){let o;const s=yt.getTransfer(r);if(n===Li)return i.UNSIGNED_BYTE;if(n===ih)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ep)return i.BYTE;if(n===Ap)return i.SHORT;if(n===Mo)return i.UNSIGNED_SHORT;if(n===nh)return i.INT;if(n===wo)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===Cp)return i.ALPHA;if(n===Pp)return i.RGB;if(n===mn)return i.RGBA;if(n===Dp)return i.LUMINANCE;if(n===Lp)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===oh)return i.RED;if(n===sh)return i.RED_INTEGER;if(n===Ip)return i.RG;if(n===ah)return i.RG_INTEGER;if(n===lh)return i.RGBA_INTEGER;if(n===Qa||n===el||n===tl||n===nl)if(s===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===el)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===ou||n===su||n===au)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ru)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ou)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===lu||n===cu)return s===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===uu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===yu||n===Su||n===Mu||n===wu||n===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===hu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return s===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===Tu||n===Eu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===il)return s===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Up||n===Au||n===Ru||n===Cu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===il)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class eS extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tS={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
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

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new gn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oS extends vs{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new rS,_=t.getContextAttributes();let p=null,w=null;const S=[],y=[],P=new nt;let R=null;const A=new Bn;A.viewport=new Ut;const C=new Bn;C.viewport=new Ut;const b=[A,C],M=new eS;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=S[j];return oe===void 0&&(oe=new wc,S[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=S[j];return oe===void 0&&(oe=new wc,S[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=S[j];return oe===void 0&&(oe=new wc,S[j]=oe),oe.getHandSpace()};function F(j){const oe=y.indexOf(j.inputSource);if(oe===-1)return;const ce=S[oe];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||s),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const oe=y[j];oe!==null&&(y[j]=null,S[j].disconnect(oe))}D=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,w=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new xr(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,ce=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?_s:rs,ce=_.stencil?ms:wo);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new xr(f.textureWidth,f.textureHeight,{format:mn,type:Li,depthTexture:new ml(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let oe=0;oe<j.removed.length;oe++){const ce=j.removed[oe],se=y.indexOf(ce);se>=0&&(y[se]=null,S[se].disconnect(ce))}for(let oe=0;oe<j.added.length;oe++){const ce=j.added[oe];let se=y.indexOf(ce);if(se===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=y.length){y.push(ce),se=Oe;break}else if(y[Oe]===null){y[Oe]=ce,se=Oe;break}if(se===-1)break}const Te=S[se];Te&&Te.connect(ce)}}const G=new q,B=new q;function k(j,oe,ce){G.setFromMatrixPosition(oe.matrixWorld),B.setFromMatrixPosition(ce.matrixWorld);const se=G.distanceTo(B),Te=oe.projectionMatrix.elements,Oe=ce.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),Ge=Te[14]/(Te[10]+1),Be=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],z=(Te[8]-1)/Te[0],ke=(Oe[8]+1)/Oe[0],We=Pe*z,je=Pe*ke,Ue=se/(-z+ke),qe=Ue*-z;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ze=Pe+Ue,U=Ge+Ue,E=We-qe,H=je+(se-qe),$=Be*Ge/U*ze,ae=tt*Ge/U*ze;j.projectionMatrix.makePerspective(E,H,$,ae,ze,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let oe=j.near,ce=j.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),M.near=C.near=A.near=oe,M.far=C.far=A.far=ce,(D!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,N=M.far),A.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const se=j.parent,Te=M.cameras;le(M,se);for(let Oe=0;Oe<Te.length;Oe++)le(Te[Oe],se);Te.length===2?k(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),K(j,M,se)};function K(j,oe,ce){ce===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=sa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ye=null;function Se(j,oe){if(u=oe.getViewerPose(c||s),v=oe,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let se=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Oe=0;Oe<ce.length;Oe++){const Pe=ce[Oe];let Ge=null;if(m!==null)Ge=m.getViewport(Pe);else{const tt=d.getViewSubImage(f,Pe);Ge=tt.viewport,Oe===0&&(e.setRenderTargetTextures(w,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(w))}let Be=b[Oe];Be===void 0&&(Be=new Bn,Be.layers.enable(Oe),Be.viewport=new Ut,b[Oe]=Be),Be.matrix.fromArray(Pe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Pe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Oe===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Be)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Oe=d.getDepthInformation(ce[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let ce=0;ce<S.length;ce++){const se=y[ce],Te=S[ce];se!==null&&Te!==void 0&&Te.update(se,oe,c||s)}ye&&ye(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Le=new Yp;Le.setAnimationLoop(Se),this.setAnimationLoop=function(j){ye=j},this.dispose=function(){}}}const oo=new si,sS=new vt;function aS(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Gp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,w,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,y)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,w,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===qn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===qn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,y=w.envMapRotation;S&&(_.envMap.value=S,oo.copy(y),oo.x*=-1,oo.y*=-1,oo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),_.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(oo)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,w,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*w,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,w){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const w=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lS(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const y=S.program;n.uniformBlockBinding(w,y)}function c(w,S){let y=r[w.id];y===void 0&&(v(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",_));const P=S.program;n.updateUBOMapping(w,P);const R=e.render.frame;o[w.id]!==R&&(f(w),o[w.id]=R)}function u(w){const S=d();w.__bindingPointIndex=S;const y=i.createBuffer(),P=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],y=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=y.length;R<A;R++){const C=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,M=C.length;b<M;b++){const D=C[b];if(m(D,R,b,P)===!0){const N=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let W=0;W<F.length;W++){const G=F[W],B=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,y,P){const R=w.value,A=S+"_"+y;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const C=P[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function v(w){const S=w.uniforms;let y=0;const P=16;for(let A=0,C=S.length;A<C;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,D=b.length;M<D;M++){const N=b[M],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,W=F.length;V<W;V++){const G=F[V],B=g(G),k=y%P,le=k%B.boundary,K=k+le;y+=le,K!==0&&P-K<B.storage&&(y+=P-K),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=B.storage}}}const R=y%P;return R>0&&(y+=P-R),w.__size=y,w.__cache={},this}function g(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function _(w){const S=w.target;S.removeEventListener("dispose",_);const y=s.indexOf(S.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Al{constructor(e={}){const{canvas:t=Y_(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=ji,this.toneMappingExposure=1;const y=this;let P=!1,R=0,A=0,C=null,b=-1,M=null;const D=new Ut,N=new Ut;let F=null;const V=new Ze(0);let W=0,G=t.width,B=t.height,k=1,le=null,K=null;const ye=new Ut(0,0,G,B),Se=new Ut(0,0,G,B);let Le=!1;const j=new qp;let oe=!1,ce=!1;const se=new vt,Te=new vt,Oe=new q,Pe=new Ut,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function tt(){return C===null?k:1}let z=n;function ke(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),z===null){const x="webgl2";if(z=ke(x,h),z===null)throw ke(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let We,je,Ue,qe,ze,U,E,H,$,ae,ie,Ce,he,_e,Ke,fe,ue,ge,Ee,De,Je,Xe,Qe,X;function ee(){We=new p1(z),We.init(),Xe=new Qy(z,We),je=new l1(z,We,e,Xe),Ue=new Ky(z,We),je.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),qe=new g1(z),ze=new Fy,U=new Jy(z,We,Ue,ze,je,Xe,qe),E=new u1(y),H=new d1(y),$=new bg(z),Qe=new s1(z,$),ae=new m1(z,$,qe,Qe),ie=new x1(z,ae,$,qe),Ee=new v1(z,je,U),fe=new c1(ze),Ce=new Uy(y,E,H,We,je,Qe,fe),he=new aS(y,ze),_e=new Oy,Ke=new Gy(We),ge=new o1(y,E,H,Ue,ie,m,l),ue=new $y(y,ie,je),X=new lS(z,qe,je,Ue),De=new a1(z,We,qe),Je=new _1(z,We,qe),qe.programs=Ce.programs,y.capabilities=je,y.extensions=We,y.properties=ze,y.renderLists=_e,y.shadowMap=ue,y.state=Ue,y.info=qe}ee();const te=new oS(y,z);this.xr=te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const h=We.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=We.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(h){h!==void 0&&(k=h,this.setSize(G,B,!1))},this.getSize=function(h){return h.set(G,B)},this.setSize=function(h,x,T=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=h,B=x,t.width=Math.floor(h*k),t.height=Math.floor(x*k),T===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(G*k,B*k).floor()},this.setDrawingBufferSize=function(h,x,T){G=h,B=x,k=T,t.width=Math.floor(h*T),t.height=Math.floor(x*T),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(D)},this.getViewport=function(h){return h.copy(ye)},this.setViewport=function(h,x,T,L){h.isVector4?ye.set(h.x,h.y,h.z,h.w):ye.set(h,x,T,L),Ue.viewport(D.copy(ye).multiplyScalar(k).round())},this.getScissor=function(h){return h.copy(Se)},this.setScissor=function(h,x,T,L){h.isVector4?Se.set(h.x,h.y,h.z,h.w):Se.set(h,x,T,L),Ue.scissor(N.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(h){Ue.setScissorTest(Le=h)},this.setOpaqueSort=function(h){le=h},this.setTransparentSort=function(h){K=h},this.getClearColor=function(h){return h.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(h=!0,x=!0,T=!0){let L=0;if(h){let I=!1;if(C!==null){const O=C.texture.format;I=O===lh||O===ah||O===sh}if(I){const O=C.texture.type,Y=O===Li||O===wo||O===Mo||O===ms||O===ih||O===rh,ne=ge.getClearColor(),Z=ge.getClearAlpha(),Q=ne.r,J=ne.g,re=ne.b;Y?(v[0]=Q,v[1]=J,v[2]=re,v[3]=Z,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=Q,g[1]=J,g[2]=re,g[3]=Z,z.clearBufferiv(z.COLOR,0,g))}else L|=z.COLOR_BUFFER_BIT}x&&(L|=z.DEPTH_BUFFER_BIT),T&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),_e.dispose(),Ke.dispose(),ze.dispose(),E.dispose(),H.dispose(),ie.dispose(),Qe.dispose(),X.dispose(),Ce.dispose(),te.dispose(),te.removeEventListener("sessionstart",To),te.removeEventListener("sessionend",Eo),$n.stop()};function de(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const h=qe.autoReset,x=ue.enabled,T=ue.autoUpdate,L=ue.needsUpdate,I=ue.type;ee(),qe.autoReset=h,ue.enabled=x,ue.autoUpdate=T,ue.needsUpdate=L,ue.type=I}function Fe(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function it(h){const x=h.target;x.removeEventListener("dispose",it),St(x)}function St(h){qt(h),ze.remove(h)}function qt(h){const x=ze.get(h).programs;x!==void 0&&(x.forEach(function(T){Ce.releaseProgram(T)}),h.isShaderMaterial&&Ce.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,T,L,I,O){x===null&&(x=Ge);const Y=I.isMesh&&I.matrixWorld.determinant()<0,ne=Fi(h,x,T,L,I);Ue.setMaterial(L,Y);let Z=T.index,Q=1;if(L.wireframe===!0){if(Z=ae.getWireframeAttribute(T),Z===void 0)return;Q=2}const J=T.drawRange,re=T.attributes.position;let xe=J.start*Q,me=(J.start+J.count)*Q;O!==null&&(xe=Math.max(xe,O.start*Q),me=Math.min(me,(O.start+O.count)*Q)),Z!==null?(xe=Math.max(xe,0),me=Math.min(me,Z.count)):re!=null&&(xe=Math.max(xe,0),me=Math.min(me,re.count));const Ae=me-xe;if(Ae<0||Ae===1/0)return;Qe.setup(I,L,ne,T,Z);let Me,we=De;if(Z!==null&&(Me=$.get(Z),we=Je,we.setIndex(Me)),I.isMesh)L.wireframe===!0?(Ue.setLineWidth(L.wireframeLinewidth*tt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(I.isLine){let ve=L.linewidth;ve===void 0&&(ve=1),Ue.setLineWidth(ve*tt()),I.isLineSegments?we.setMode(z.LINES):I.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else I.isPoints?we.setMode(z.POINTS):I.isSprite&&we.setMode(z.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)we.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))we.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,rt=I._multiDrawCounts,Ye=I._multiDrawCount,wt=Z?$.get(Z).bytesPerElement:1,gt=ze.get(L).currentProgram.getUniforms();for(let et=0;et<Ye;et++)gt.setValue(z,"_gl_DrawID",et),we.render(ve[et]/wt,rt[et])}else if(I.isInstancedMesh)we.renderInstances(xe,Ae,I.count);else if(T.isInstancedBufferGeometry){const ve=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,rt=Math.min(T.instanceCount,ve);we.renderInstances(xe,Ae,rt)}else we.render(xe,Ae)};function _t(h,x,T){h.transparent===!0&&h.side===En&&h.forceSinglePass===!1?(h.side=qn,h.needsUpdate=!0,er(h,x,T),h.side=qr,h.needsUpdate=!0,er(h,x,T),h.side=En):er(h,x,T)}this.compile=function(h,x,T=null){T===null&&(T=h),p=Ke.get(T),p.init(x),S.push(p),T.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==T&&h.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const L=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const O=I.material;if(O)if(Array.isArray(O))for(let Y=0;Y<O.length;Y++){const ne=O[Y];_t(ne,T,I),L.add(ne)}else _t(O,T,I),L.add(O)}),S.pop(),p=null,L},this.compileAsync=function(h,x,T=null){const L=this.compile(h,x,T);return new Promise(I=>{function O(){if(L.forEach(function(Y){ze.get(Y).currentProgram.isReady()&&L.delete(Y)}),L.size===0){I(h);return}setTimeout(O,10)}We.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Kt=null;function Nn(h){Kt&&Kt(h)}function To(){$n.stop()}function Eo(){$n.start()}const $n=new Yp;$n.setAnimationLoop(Nn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(h){Kt=h,te.setAnimationLoop(h),h===null?$n.stop():$n.start()},te.addEventListener("sessionstart",To),te.addEventListener("sessionend",Eo),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(x),x=te.getCamera()),h.isScene===!0&&h.onBeforeRender(y,h,x,C),p=Ke.get(h,S.length),p.init(x),S.push(p),Te.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),j.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,oe=fe.init(this.clippingPlanes,ce),_=_e.get(h,w.length),_.init(),w.push(_),te.enabled===!0&&te.isPresenting===!0){const O=y.xr.getDepthSensingMesh();O!==null&&$r(O,x,-1/0,y.sortObjects)}$r(h,x,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(le,K),Be=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Be&&ge.addToRenderList(_,h),this.info.render.frame++,oe===!0&&fe.beginShadows();const T=p.state.shadowsArray;ue.render(T,h,x),oe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=_.opaque,I=_.transmissive;if(p.setupLights(),x.isArrayCamera){const O=x.cameras;if(I.length>0)for(let Y=0,ne=O.length;Y<ne;Y++){const Z=O[Y];vi(L,I,h,Z)}Be&&ge.render(h);for(let Y=0,ne=O.length;Y<ne;Y++){const Z=O[Y];ai(_,h,Z,Z.viewport)}}else I.length>0&&vi(L,I,h,x),Be&&ge.render(h),ai(_,h,x);C!==null&&(U.updateMultisampleRenderTarget(C),U.updateRenderTargetMipmap(C)),h.isScene===!0&&h.onAfterRender(y,h,x),Qe.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function $r(h,x,T,L){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)T=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){L&&Pe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Te);const Y=ie.update(h),ne=h.material;ne.visible&&_.push(h,Y,ne,T,Pe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){const Y=ie.update(h),ne=h.material;if(L&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Pe.copy(h.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Pe.copy(Y.boundingSphere.center)),Pe.applyMatrix4(h.matrixWorld).applyMatrix4(Te)),Array.isArray(ne)){const Z=Y.groups;for(let Q=0,J=Z.length;Q<J;Q++){const re=Z[Q],xe=ne[re.materialIndex];xe&&xe.visible&&_.push(h,Y,xe,T,Pe.z,re)}}else ne.visible&&_.push(h,Y,ne,T,Pe.z,null)}}const O=h.children;for(let Y=0,ne=O.length;Y<ne;Y++)$r(O[Y],x,T,L)}function ai(h,x,T,L){const I=h.opaque,O=h.transmissive,Y=h.transparent;p.setupLightsView(T),oe===!0&&fe.setGlobalState(y.clippingPlanes,T),L&&Ue.viewport(D.copy(L)),I.length>0&&Ui(I,x,T),O.length>0&&Ui(O,x,T),Y.length>0&&Ui(Y,x,T),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function vi(h,x,T,L){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new xr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Zi:Li,minFilter:Pi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const O=p.state.transmissionRenderTarget[L.id],Y=L.viewport||D;O.setSize(Y.z,Y.w);const ne=y.getRenderTarget();y.setRenderTarget(O),y.getClearColor(V),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Be&&ge.render(T);const Z=y.toneMapping;y.toneMapping=ji;const Q=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),oe===!0&&fe.setGlobalState(y.clippingPlanes,L),Ui(h,T,L),U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O),We.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let re=0,xe=x.length;re<xe;re++){const me=x[re],Ae=me.object,Me=me.geometry,we=me.material,ve=me.group;if(we.side===En&&Ae.layers.test(L.layers)){const rt=we.side;we.side=qn,we.needsUpdate=!0,Yt(Ae,T,L,Me,we,ve),we.side=rt,we.needsUpdate=!0,J=!0}}J===!0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O))}y.setRenderTarget(ne),y.setClearColor(V,W),Q!==void 0&&(L.viewport=Q),y.toneMapping=Z}function Ui(h,x,T){const L=x.isScene===!0?x.overrideMaterial:null;for(let I=0,O=h.length;I<O;I++){const Y=h[I],ne=Y.object,Z=Y.geometry,Q=L===null?Y.material:L,J=Y.group;ne.layers.test(T.layers)&&Yt(ne,x,T,Z,Q,J)}}function Yt(h,x,T,L,I,O){h.onBeforeRender(y,x,T,L,I,O),h.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(y,x,T,L,h,O),I.transparent===!0&&I.side===En&&I.forceSinglePass===!1?(I.side=qn,I.needsUpdate=!0,y.renderBufferDirect(T,x,L,I,h,O),I.side=qr,I.needsUpdate=!0,y.renderBufferDirect(T,x,L,I,h,O),I.side=En):y.renderBufferDirect(T,x,L,I,h,O),h.onAfterRender(y,x,T,L,I,O)}function er(h,x,T){x.isScene!==!0&&(x=Ge);const L=ze.get(h),I=p.state.lights,O=p.state.shadowsArray,Y=I.state.version,ne=Ce.getParameters(h,I.state,O,x,T),Z=Ce.getProgramCacheKey(ne);let Q=L.programs;L.environment=h.isMeshStandardMaterial?x.environment:null,L.fog=x.fog,L.envMap=(h.isMeshStandardMaterial?H:E).get(h.envMap||L.environment),L.envMapRotation=L.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,Q===void 0&&(h.addEventListener("dispose",it),Q=new Map,L.programs=Q);let J=Q.get(Z);if(J!==void 0){if(L.currentProgram===J&&L.lightsStateVersion===Y)return Mr(h,ne),J}else ne.uniforms=Ce.getUniforms(h),h.onBeforeCompile(ne,y),J=Ce.acquireProgram(ne,Z),Q.set(Z,J),L.uniforms=ne.uniforms;const re=L.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(re.clippingPlanes=fe.uniform),Mr(h,ne),L.needsLights=xi(h),L.lightsStateVersion=Y,L.needsLights&&(re.ambientLightColor.value=I.state.ambient,re.lightProbe.value=I.state.probe,re.directionalLights.value=I.state.directional,re.directionalLightShadows.value=I.state.directionalShadow,re.spotLights.value=I.state.spot,re.spotLightShadows.value=I.state.spotShadow,re.rectAreaLights.value=I.state.rectArea,re.ltc_1.value=I.state.rectAreaLTC1,re.ltc_2.value=I.state.rectAreaLTC2,re.pointLights.value=I.state.point,re.pointLightShadows.value=I.state.pointShadow,re.hemisphereLights.value=I.state.hemi,re.directionalShadowMap.value=I.state.directionalShadowMap,re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,re.spotShadowMap.value=I.state.spotShadowMap,re.spotLightMatrix.value=I.state.spotLightMatrix,re.spotLightMap.value=I.state.spotLightMap,re.pointShadowMap.value=I.state.pointShadowMap,re.pointShadowMatrix.value=I.state.pointShadowMatrix),L.currentProgram=J,L.uniformsList=null,J}function Sr(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=rl.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Mr(h,x){const T=ze.get(h);T.outputColorSpace=x.outputColorSpace,T.batching=x.batching,T.batchingColor=x.batchingColor,T.instancing=x.instancing,T.instancingColor=x.instancingColor,T.instancingMorph=x.instancingMorph,T.skinning=x.skinning,T.morphTargets=x.morphTargets,T.morphNormals=x.morphNormals,T.morphColors=x.morphColors,T.morphTargetsCount=x.morphTargetsCount,T.numClippingPlanes=x.numClippingPlanes,T.numIntersection=x.numClipIntersection,T.vertexAlphas=x.vertexAlphas,T.vertexTangents=x.vertexTangents,T.toneMapping=x.toneMapping}function Fi(h,x,T,L,I){x.isScene!==!0&&(x=Ge),U.resetTextureUnits();const O=x.fog,Y=L.isMeshStandardMaterial?x.environment:null,ne=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qi,Z=(L.isMeshStandardMaterial?H:E).get(L.envMap||Y),Q=L.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,J=!!T.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),re=!!T.morphAttributes.position,xe=!!T.morphAttributes.normal,me=!!T.morphAttributes.color;let Ae=ji;L.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=y.toneMapping);const Me=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,we=Me!==void 0?Me.length:0,ve=ze.get(L),rt=p.state.lights;if(oe===!0&&(ce===!0||h!==M)){const lt=h===M&&L.id===b;fe.setState(L,h,lt)}let Ye=!1;L.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==rt.state.version||ve.outputColorSpace!==ne||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==Z||L.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==fe.numPlanes||ve.numIntersection!==fe.numIntersection)||ve.vertexAlphas!==Q||ve.vertexTangents!==J||ve.morphTargets!==re||ve.morphNormals!==xe||ve.morphColors!==me||ve.toneMapping!==Ae||ve.morphTargetsCount!==we)&&(Ye=!0):(Ye=!0,ve.__version=L.version);let wt=ve.currentProgram;Ye===!0&&(wt=er(L,x,I));let gt=!1,et=!1,bt=!1;const st=wt.getUniforms(),xt=ve.uniforms;if(Ue.useProgram(wt.program)&&(gt=!0,et=!0,bt=!0),L.id!==b&&(b=L.id,et=!0),gt||M!==h){Ue.buffers.depth.getReversed()?(se.copy(h.projectionMatrix),Z_(se),K_(se),st.setValue(z,"projectionMatrix",se)):st.setValue(z,"projectionMatrix",h.projectionMatrix),st.setValue(z,"viewMatrix",h.matrixWorldInverse);const Bt=st.map.cameraPosition;Bt!==void 0&&Bt.setValue(z,Oe.setFromMatrixPosition(h.matrixWorld)),je.logarithmicDepthBuffer&&st.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&st.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,et=!0,bt=!0)}if(I.isSkinnedMesh){st.setOptional(z,I,"bindMatrix"),st.setOptional(z,I,"bindMatrixInverse");const lt=I.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(z,"boneTexture",lt.boneTexture,U))}I.isBatchedMesh&&(st.setOptional(z,I,"batchingTexture"),st.setValue(z,"batchingTexture",I._matricesTexture,U),st.setOptional(z,I,"batchingIdTexture"),st.setValue(z,"batchingIdTexture",I._indirectTexture,U),st.setOptional(z,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(z,"batchingColorTexture",I._colorsTexture,U));const at=T.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&Ee.update(I,T,wt),(et||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,st.setValue(z,"receiveShadow",I.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(xt.envMap.value=Z,xt.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&x.environment!==null&&(xt.envMapIntensity.value=x.environmentIntensity),et&&(st.setValue(z,"toneMappingExposure",y.toneMappingExposure),ve.needsLights&&li(xt,bt),O&&L.fog===!0&&he.refreshFogUniforms(xt,O),he.refreshMaterialUniforms(xt,L,k,B,p.state.transmissionRenderTarget[h.id]),rl.upload(z,Sr(ve),xt,U)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(rl.upload(z,Sr(ve),xt,U),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&st.setValue(z,"center",I.center),st.setValue(z,"modelViewMatrix",I.modelViewMatrix),st.setValue(z,"normalMatrix",I.normalMatrix),st.setValue(z,"modelMatrix",I.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const lt=L.uniformsGroups;for(let Bt=0,jt=lt.length;Bt<jt;Bt++){const ln=lt[Bt];X.update(ln,wt),X.bind(ln,wt)}}return wt}function li(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function xi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(h,x,T){ze.get(h.texture).__webglTexture=x,ze.get(h.depthTexture).__webglTexture=T;const L=ze.get(h);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=T===void 0,L.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const T=ze.get(h);T.__webglFramebuffer=x,T.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,T=0){C=h,R=x,A=T;let L=!0,I=null,O=!1,Y=!1;if(h){const Z=ze.get(h);if(Z.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(z.FRAMEBUFFER,null),L=!1;else if(Z.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if(Z.__hasExternalTextures)U.rebindTextures(h,ze.get(h.texture).__webglTexture,ze.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const re=h.depthTexture;if(Z.__boundDepthTexture!==re){if(re!==null&&ze.has(re)&&(h.width!==re.image.width||h.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const Q=h.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(Y=!0);const J=ze.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(J[x])?I=J[x][T]:I=J[x],O=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=ze.get(h).__webglMultisampledFramebuffer:Array.isArray(J)?I=J[T]:I=J,D.copy(h.viewport),N.copy(h.scissor),F=h.scissorTest}else D.copy(ye).multiplyScalar(k).floor(),N.copy(Se).multiplyScalar(k).floor(),F=Le;if(Ue.bindFramebuffer(z.FRAMEBUFFER,I)&&L&&Ue.drawBuffers(h,I),Ue.viewport(D),Ue.scissor(N),Ue.setScissorTest(F),O){const Z=ze.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+x,Z.__webglTexture,T)}else if(Y){const Z=ze.get(h.texture),Q=x||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.__webglTexture,T||0,Q)}b=-1},this.readRenderTargetPixels=function(h,x,T,L,I,O,Y){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){Ue.bindFramebuffer(z.FRAMEBUFFER,ne);try{const Z=h.texture,Q=Z.format,J=Z.type;if(!je.textureFormatReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-L&&T>=0&&T<=h.height-I&&z.readPixels(x,T,L,I,Xe.convert(Q),Xe.convert(J),O)}finally{const Z=C!==null?ze.get(C).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,x,T,L,I,O,Y){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){const Z=h.texture,Q=Z.format,J=Z.type;if(!je.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-L&&T>=0&&T<=h.height-I){Ue.bindFramebuffer(z.FRAMEBUFFER,ne);const re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.bufferData(z.PIXEL_PACK_BUFFER,O.byteLength,z.STREAM_READ),z.readPixels(x,T,L,I,Xe.convert(Q),Xe.convert(J),0);const xe=C!==null?ze.get(C).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,xe);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await $_(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,O),z.deleteBuffer(re),z.deleteSync(me),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,T=0){h.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const L=Math.pow(2,-T),I=Math.floor(h.image.width*L),O=Math.floor(h.image.height*L),Y=x!==null?x.x:0,ne=x!==null?x.y:0;U.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,T,0,0,Y,ne,I,O),Ue.unbindTexture()},this.copyTextureToTexture=function(h,x,T=null,L=null,I=0){h.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,h=arguments[1],x=arguments[2],I=arguments[3]||0,T=null);let O,Y,ne,Z,Q,J,re,xe,me;const Ae=h.isCompressedTexture?h.mipmaps[I]:h.image;T!==null?(O=T.max.x-T.min.x,Y=T.max.y-T.min.y,ne=T.isBox3?T.max.z-T.min.z:1,Z=T.min.x,Q=T.min.y,J=T.isBox3?T.min.z:0):(O=Ae.width,Y=Ae.height,ne=Ae.depth||1,Z=0,Q=0,J=0),L!==null?(re=L.x,xe=L.y,me=L.z):(re=0,xe=0,me=0);const Me=Xe.convert(x.format),we=Xe.convert(x.type);let ve;x.isData3DTexture?(U.setTexture3D(x,0),ve=z.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),ve=z.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,x.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,x.unpackAlignment);const rt=z.getParameter(z.UNPACK_ROW_LENGTH),Ye=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wt=z.getParameter(z.UNPACK_SKIP_PIXELS),gt=z.getParameter(z.UNPACK_SKIP_ROWS),et=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Z),z.pixelStorei(z.UNPACK_SKIP_ROWS,Q),z.pixelStorei(z.UNPACK_SKIP_IMAGES,J);const bt=h.isDataArrayTexture||h.isData3DTexture,st=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const xt=ze.get(h),at=ze.get(x),lt=ze.get(xt.__renderTarget),Bt=ze.get(at.__renderTarget);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,lt.__webglFramebuffer),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let jt=0;jt<ne;jt++)bt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(h).__webglTexture,I,J+jt),h.isDepthTexture?(st&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(x).__webglTexture,I,me+jt),z.blitFramebuffer(Z,Q,O,Y,re,xe,O,Y,z.DEPTH_BUFFER_BIT,z.NEAREST)):st?z.copyTexSubImage3D(ve,I,re,xe,me+jt,Z,Q,O,Y):z.copyTexSubImage2D(ve,I,re,xe,me+jt,Z,Q,O,Y);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else st?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,we,Ae.data):x.isCompressedArrayTexture?z.compressedTexSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,Ae.data):z.texSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,we,Ae):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,re,xe,O,Y,Me,we,Ae.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,re,xe,Ae.width,Ae.height,Me,Ae.data):z.texSubImage2D(z.TEXTURE_2D,I,re,xe,O,Y,Me,we,Ae);z.pixelStorei(z.UNPACK_ROW_LENGTH,rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ye),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,et),I===0&&x.generateMipmaps&&z.generateMipmap(ve),Ue.unbindTexture()},this.copyTextureToTexture3D=function(h,x,T=null,L=null,I=0){return h.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,L=arguments[1]||null,h=arguments[2],x=arguments[3],I=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,T,L,I)},this.initRenderTarget=function(h){ze.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),Ue.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,Ue.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class Ms extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rl extends gn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=on,u=on,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn extends Wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class cS extends gn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const _l={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uS{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const hS=new uS;class ua{constructor(e){this.manager=e!==void 0?e:hS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class fS extends Error{constructor(e,t){super(e),this.response=t}}class dS extends ua{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=_l.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:r});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ar[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){w();function w(){d.read().then(({done:S,value:y})=>{if(S)p.close();else{g+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let R=0,A=u.length;R<A;R++){const C=u[R];C.onProgress&&C.onProgress(P)}p.enqueue(y),w()}},S=>{p.error(S)})}}});return new Response(_)}else throw new fS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{_l.add(e,c);const u=ar[e];delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pS extends ua{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=_l.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=aa("img");function l(){u(),_l.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class mS extends ua{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new Rl,a=new dS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Un,s.wrapT=c.wrapT!==void 0?c.wrapT:Un,s.magFilter=c.magFilter!==void 0?c.magFilter:pt,s.minFilter=c.minFilter!==void 0?c.minFilter:pt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Pi),c.mipmapCount===1&&(s.minFilter=pt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class hr extends ua{constructor(e){super(e)}load(e,t,n,r){const o=new gn,s=new pS(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class po extends yr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var di=Uint8Array,Ko=Uint16Array,_S=Int32Array,Jp=new di([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qp=new di([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gS=new di([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),em=function(i,e){for(var t=new Ko(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new _S(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},tm=em(Jp,2),nm=tm.b,vS=tm.r;nm[28]=258,vS[258]=28;var xS=em(Qp,0),yS=xS.b,Du=new Ko(32768);for(var Ft=0;Ft<32768;++Ft){var Ir=(Ft&43690)>>1|(Ft&21845)<<1;Ir=(Ir&52428)>>2|(Ir&13107)<<2,Ir=(Ir&61680)>>4|(Ir&3855)<<4,Du[Ft]=((Ir&65280)>>8|(Ir&255)<<8)>>1}var Ys=(function(i,e,t){for(var n=i.length,r=0,o=new Ko(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new Ko(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new Ko(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[Du[d]>>l]=c}else for(a=new Ko(n),r=0;r<n;++r)i[r]&&(a[r]=Du[s[i[r]-1]++]>>15-i[r]);return a}),ha=new di(288);for(var Ft=0;Ft<144;++Ft)ha[Ft]=8;for(var Ft=144;Ft<256;++Ft)ha[Ft]=9;for(var Ft=256;Ft<280;++Ft)ha[Ft]=7;for(var Ft=280;Ft<288;++Ft)ha[Ft]=8;var im=new di(32);for(var Ft=0;Ft<32;++Ft)im[Ft]=5;var SS=Ys(ha,9,1),MS=Ys(im,5,1),bc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ai=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Tc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},wS=function(i){return(i+7)/8|0},bS=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new di(i.subarray(e,t))},TS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ri=function(i,e,t){var n=new Error(e||TS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ri),!t)throw n;return n},ES=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new di(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new di(r*3));var c=function(Ge){var Be=t.length;if(Ge>Be){var tt=new di(Math.max(Be*2,Ge));tt.set(t),t=tt}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=Ai(i,d,1);var w=Ai(i,d+1,3);if(d+=3,w)if(w==1)m=SS,v=MS,g=9,_=5;else if(w==2){var R=Ai(i,d,31)+257,A=Ai(i,d+10,15)+4,C=R+Ai(i,d+5,31)+1;d+=14;for(var b=new di(C),M=new di(19),D=0;D<A;++D)M[gS[D]]=Ai(i,d+D*3,7);d+=A*3;for(var N=bc(M),F=(1<<N)-1,V=Ys(M,N,1),D=0;D<C;){var W=V[Ai(i,d,F)];d+=W&15;var S=W>>4;if(S<16)b[D++]=S;else{var G=0,B=0;for(S==16?(B=3+Ai(i,d,3),d+=2,G=b[D-1]):S==17?(B=3+Ai(i,d,7),d+=3):S==18&&(B=11+Ai(i,d,127),d+=7);B--;)b[D++]=G}}var k=b.subarray(0,R),le=b.subarray(R);g=bc(k),_=bc(le),m=Ys(k,g,1),v=Ys(le,_,1)}else Ri(1);else{var S=wS(d)+4,y=i[S-4]|i[S-3]<<8,P=S+y;if(P>r){l&&Ri(0);break}a&&c(f+y),t.set(i.subarray(S,P),f),e.b=f+=y,e.p=d=P*8,e.f=u;continue}if(d>p){l&&Ri(0);break}}a&&c(f+131072);for(var K=(1<<g)-1,ye=(1<<_)-1,Se=d;;Se=d){var G=m[Tc(i,d)&K],Le=G>>4;if(d+=G&15,d>p){l&&Ri(0);break}if(G||Ri(2),Le<256)t[f++]=Le;else if(Le==256){Se=d,m=null;break}else{var j=Le-254;if(Le>264){var D=Le-257,oe=Jp[D];j=Ai(i,d,(1<<oe)-1)+nm[D],d+=oe}var ce=v[Tc(i,d)&ye],se=ce>>4;ce||Ri(3),d+=ce&15;var le=yS[se];if(se>3){var oe=Qp[se];le+=Tc(i,d)&(1<<oe)-1,d+=oe}if(d>p){l&&Ri(0);break}a&&c(f+131072);var Te=f+j;if(f<le){var Oe=o-le,Pe=Math.min(le,Te);for(Oe+f<0&&Ri(3);f<Pe;++f)t[f]=n[Oe+f]}for(;f<Te;++f)t[f]=t[f-le]}}e.l=m,e.p=Se,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?bS(t,0,f):t.subarray(0,f)},AS=new di(0),RS=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ri(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ri(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ba(i,e){return ES(i.subarray(RS(i),-4),{i:2},e,e)}var CS=typeof TextDecoder<"u"&&new TextDecoder,PS=0;try{CS.decode(AS,{stream:!0}),PS=1}catch{}class DS extends mS{constructor(e){super(e),this.type=Zi}parse(e){const b=Math.pow(2.7182818,2.2);function M(h,x){let T=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(x[T++]=I);const L=T-1;for(;T<65536;)x[T++]=0;return L}function D(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const N={l:0,c:0,lc:0};function F(h,x,T,L,I){for(;T<h;)x=x<<8|De(L,I),T+=8;T-=h,N.l=x>>T&(1<<h)-1,N.c=x,N.lc=T}const V=new Array(59);function W(h){for(let T=0;T<=58;++T)V[T]=0;for(let T=0;T<65537;++T)V[h[T]]+=1;let x=0;for(let T=58;T>0;--T){const L=x+V[T]>>1;V[T]=x,x=L}for(let T=0;T<65537;++T){const L=h[T];L>0&&(h[T]=L|V[L]++<<6)}}function G(h,x,T,L,I,O){const Y=x;let ne=0,Z=0;for(;L<=I;L++){if(Y.value-x.value>T)return!1;F(6,ne,Z,h,Y);const Q=N.l;if(ne=N.c,Z=N.lc,O[L]=Q,Q==63){if(Y.value-x.value>T)throw new Error("Something wrong with hufUnpackEncTable");F(8,ne,Z,h,Y);let J=N.l+6;if(ne=N.c,Z=N.lc,L+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[L++]=0;L--}else if(Q>=59){let J=Q-59+2;if(L+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[L++]=0;L--}}W(O)}function B(h){return h&63}function k(h){return h>>6}function le(h,x,T,L){for(;x<=T;x++){const I=k(h[x]),O=B(h[x]);if(I>>O)throw new Error("Invalid table entry");if(O>14){const Y=L[I>>O-14];if(Y.len)throw new Error("Invalid table entry");if(Y.lit++,Y.p){const ne=Y.p;Y.p=new Array(Y.lit);for(let Z=0;Z<Y.lit-1;++Z)Y.p[Z]=ne[Z]}else Y.p=new Array(1);Y.p[Y.lit-1]=x}else if(O){let Y=0;for(let ne=1<<14-O;ne>0;ne--){const Z=L[(I<<14-O)+Y];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=O,Z.lit=x,Y++}}}return!0}const K={c:0,lc:0};function ye(h,x,T,L){h=h<<8|De(T,L),x+=8,K.c=h,K.lc=x}const Se={c:0,lc:0};function Le(h,x,T,L,I,O,Y,ne,Z){if(h==x){L<8&&(ye(T,L,I,O),T=K.c,L=K.lc),L-=8;let Q=T>>L;if(Q=new Uint8Array([Q])[0],ne.value+Q>Z)return!1;const J=Y[ne.value-1];for(;Q-- >0;)Y[ne.value++]=J}else if(ne.value<Z)Y[ne.value++]=h;else return!1;Se.c=T,Se.lc=L}function j(h){return h&65535}function oe(h){const x=j(h);return x>32767?x-65536:x}const ce={a:0,b:0};function se(h,x){const T=oe(h),I=oe(x),O=T+(I&1)+(I>>1),Y=O,ne=O-I;ce.a=Y,ce.b=ne}function Te(h,x){const T=j(h),L=j(x),I=T-(L>>1)&65535,O=L+I-32768&65535;ce.a=O,ce.b=I}function Oe(h,x,T,L,I,O,Y){const ne=Y<16384,Z=T>I?I:T;let Q=1,J,re;for(;Q<=Z;)Q<<=1;for(Q>>=1,J=Q,Q>>=1;Q>=1;){re=0;const xe=re+O*(I-J),me=O*Q,Ae=O*J,Me=L*Q,we=L*J;let ve,rt,Ye,wt;for(;re<=xe;re+=Ae){let gt=re;const et=re+L*(T-J);for(;gt<=et;gt+=we){const bt=gt+Me,st=gt+me,xt=st+Me;ne?(se(h[gt+x],h[st+x]),ve=ce.a,Ye=ce.b,se(h[bt+x],h[xt+x]),rt=ce.a,wt=ce.b,se(ve,rt),h[gt+x]=ce.a,h[bt+x]=ce.b,se(Ye,wt),h[st+x]=ce.a,h[xt+x]=ce.b):(Te(h[gt+x],h[st+x]),ve=ce.a,Ye=ce.b,Te(h[bt+x],h[xt+x]),rt=ce.a,wt=ce.b,Te(ve,rt),h[gt+x]=ce.a,h[bt+x]=ce.b,Te(Ye,wt),h[st+x]=ce.a,h[xt+x]=ce.b)}if(T&Q){const bt=gt+me;ne?se(h[gt+x],h[bt+x]):Te(h[gt+x],h[bt+x]),ve=ce.a,h[bt+x]=ce.b,h[gt+x]=ve}}if(I&Q){let gt=re;const et=re+L*(T-J);for(;gt<=et;gt+=we){const bt=gt+Me;ne?se(h[gt+x],h[bt+x]):Te(h[gt+x],h[bt+x]),ve=ce.a,h[bt+x]=ce.b,h[gt+x]=ve}}J=Q,Q>>=1}return re}function Pe(h,x,T,L,I,O,Y,ne,Z){let Q=0,J=0;const re=Y,xe=Math.trunc(L.value+(I+7)/8);for(;L.value<xe;)for(ye(Q,J,T,L),Q=K.c,J=K.lc;J>=14;){const Ae=Q>>J-14&16383,Me=x[Ae];if(Me.len)J-=Me.len,Le(Me.lit,O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;else{if(!Me.p)throw new Error("hufDecode issues");let we;for(we=0;we<Me.lit;we++){const ve=B(h[Me.p[we]]);for(;J<ve&&L.value<xe;)ye(Q,J,T,L),Q=K.c,J=K.lc;if(J>=ve&&k(h[Me.p[we]])==(Q>>J-ve&(1<<ve)-1)){J-=ve,Le(Me.p[we],O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;break}}if(we==Me.lit)throw new Error("hufDecode issues")}}const me=8-I&7;for(Q>>=me,J-=me;J>0;){const Ae=x[Q<<14-J&16383];if(Ae.len)J-=Ae.len,Le(Ae.lit,O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;else throw new Error("hufDecode issues")}return!0}function Ge(h,x,T,L,I,O){const Y={value:0},ne=T.value,Z=Ee(x,T),Q=Ee(x,T);T.value+=4;const J=Ee(x,T);if(T.value+=4,Z<0||Z>=65537||Q<0||Q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const re=new Array(65537),xe=new Array(16384);D(xe);const me=L-(T.value-ne);if(G(h,T,me,Z,Q,re),J>8*(L-(T.value-ne)))throw new Error("Something wrong with hufUncompress");le(re,Z,Q,xe),Pe(re,xe,h,T,J,Q,O,I,Y)}function Be(h,x,T){for(let L=0;L<T;++L)x[L]=h[x[L]]}function tt(h){for(let x=1;x<h.length;x++){const T=h[x-1]+h[x]-128;h[x]=T}}function z(h,x){let T=0,L=Math.floor((h.length+1)/2),I=0;const O=h.length-1;for(;!(I>O||(x[I++]=h[T++],I>O));)x[I++]=h[L++]}function ke(h){let x=h.byteLength;const T=new Array;let L=0;const I=new DataView(h);for(;x>0;){const O=I.getInt8(L++);if(O<0){const Y=-O;x-=Y+1;for(let ne=0;ne<Y;ne++)T.push(I.getUint8(L++))}else{const Y=O;x-=2;const ne=I.getUint8(L++);for(let Z=0;Z<Y+1;Z++)T.push(ne)}}return T}function We(h,x,T,L,I,O){let Y=new DataView(O.buffer);const ne=T[h.idx[0]].width,Z=T[h.idx[0]].height,Q=3,J=Math.floor(ne/8),re=Math.ceil(ne/8),xe=Math.ceil(Z/8),me=ne-(re-1)*8,Ae=Z-(xe-1)*8,Me={value:0},we=new Array(Q),ve=new Array(Q),rt=new Array(Q),Ye=new Array(Q),wt=new Array(Q);for(let et=0;et<Q;++et)wt[et]=x[h.idx[et]],we[et]=et<1?0:we[et-1]+re*xe,ve[et]=new Float32Array(64),rt[et]=new Uint16Array(64),Ye[et]=new Uint16Array(re*64);for(let et=0;et<xe;++et){let bt=8;et==xe-1&&(bt=Ae);let st=8;for(let at=0;at<re;++at){at==re-1&&(st=me);for(let lt=0;lt<Q;++lt)rt[lt].fill(0),rt[lt][0]=I[we[lt]++],je(Me,L,rt[lt]),Ue(rt[lt],ve[lt]),qe(ve[lt]);ze(ve);for(let lt=0;lt<Q;++lt)U(ve[lt],Ye[lt],at*64)}let xt=0;for(let at=0;at<Q;++at){const lt=T[h.idx[at]].type;for(let Bt=8*et;Bt<8*et+bt;++Bt){xt=wt[at][Bt];for(let jt=0;jt<J;++jt){const ln=jt*64+(Bt&7)*8;Y.setUint16(xt+0*lt,Ye[at][ln+0],!0),Y.setUint16(xt+2*lt,Ye[at][ln+1],!0),Y.setUint16(xt+4*lt,Ye[at][ln+2],!0),Y.setUint16(xt+6*lt,Ye[at][ln+3],!0),Y.setUint16(xt+8*lt,Ye[at][ln+4],!0),Y.setUint16(xt+10*lt,Ye[at][ln+5],!0),Y.setUint16(xt+12*lt,Ye[at][ln+6],!0),Y.setUint16(xt+14*lt,Ye[at][ln+7],!0),xt+=16*lt}}if(J!=re)for(let Bt=8*et;Bt<8*et+bt;++Bt){const jt=wt[at][Bt]+8*J*2*lt,ln=J*64+(Bt&7)*8;for(let Zr=0;Zr<st;++Zr)Y.setUint16(jt+Zr*2*lt,Ye[at][ln+Zr],!0)}}}const gt=new Uint16Array(ne);Y=new DataView(O.buffer);for(let et=0;et<Q;++et){T[h.idx[et]].decoded=!0;const bt=T[h.idx[et]].type;if(T[et].type==2)for(let st=0;st<Z;++st){const xt=wt[et][st];for(let at=0;at<ne;++at)gt[at]=Y.getUint16(xt+at*2*bt,!0);for(let at=0;at<ne;++at)Y.setFloat32(xt+at*2*bt,ee(gt[at]),!0)}}}function je(h,x,T){let L,I=1;for(;I<64;)L=x[h.value],L==65280?I=64:L>>8==255?I+=L&255:(T[I]=L,I++),h.value++}function Ue(h,x){x[0]=ee(h[0]),x[1]=ee(h[1]),x[2]=ee(h[5]),x[3]=ee(h[6]),x[4]=ee(h[14]),x[5]=ee(h[15]),x[6]=ee(h[27]),x[7]=ee(h[28]),x[8]=ee(h[2]),x[9]=ee(h[4]),x[10]=ee(h[7]),x[11]=ee(h[13]),x[12]=ee(h[16]),x[13]=ee(h[26]),x[14]=ee(h[29]),x[15]=ee(h[42]),x[16]=ee(h[3]),x[17]=ee(h[8]),x[18]=ee(h[12]),x[19]=ee(h[17]),x[20]=ee(h[25]),x[21]=ee(h[30]),x[22]=ee(h[41]),x[23]=ee(h[43]),x[24]=ee(h[9]),x[25]=ee(h[11]),x[26]=ee(h[18]),x[27]=ee(h[24]),x[28]=ee(h[31]),x[29]=ee(h[40]),x[30]=ee(h[44]),x[31]=ee(h[53]),x[32]=ee(h[10]),x[33]=ee(h[19]),x[34]=ee(h[23]),x[35]=ee(h[32]),x[36]=ee(h[39]),x[37]=ee(h[45]),x[38]=ee(h[52]),x[39]=ee(h[54]),x[40]=ee(h[20]),x[41]=ee(h[22]),x[42]=ee(h[33]),x[43]=ee(h[38]),x[44]=ee(h[46]),x[45]=ee(h[51]),x[46]=ee(h[55]),x[47]=ee(h[60]),x[48]=ee(h[21]),x[49]=ee(h[34]),x[50]=ee(h[37]),x[51]=ee(h[47]),x[52]=ee(h[50]),x[53]=ee(h[56]),x[54]=ee(h[59]),x[55]=ee(h[61]),x[56]=ee(h[35]),x[57]=ee(h[36]),x[58]=ee(h[48]),x[59]=ee(h[49]),x[60]=ee(h[57]),x[61]=ee(h[58]),x[62]=ee(h[62]),x[63]=ee(h[63])}function qe(h){const x=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),Y=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),Z=new Array(4),Q=new Array(4),J=new Array(4),re=new Array(4);for(let xe=0;xe<8;++xe){const me=xe*8;Z[0]=L*h[me+2],Z[1]=Y*h[me+2],Z[2]=L*h[me+6],Z[3]=Y*h[me+6],Q[0]=T*h[me+1]+I*h[me+3]+O*h[me+5]+ne*h[me+7],Q[1]=I*h[me+1]-ne*h[me+3]-T*h[me+5]-O*h[me+7],Q[2]=O*h[me+1]-T*h[me+3]+ne*h[me+5]+I*h[me+7],Q[3]=ne*h[me+1]-O*h[me+3]+I*h[me+5]-T*h[me+7],J[0]=x*(h[me+0]+h[me+4]),J[3]=x*(h[me+0]-h[me+4]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[me+0]=re[0]+Q[0],h[me+1]=re[1]+Q[1],h[me+2]=re[2]+Q[2],h[me+3]=re[3]+Q[3],h[me+4]=re[3]-Q[3],h[me+5]=re[2]-Q[2],h[me+6]=re[1]-Q[1],h[me+7]=re[0]-Q[0]}for(let xe=0;xe<8;++xe)Z[0]=L*h[16+xe],Z[1]=Y*h[16+xe],Z[2]=L*h[48+xe],Z[3]=Y*h[48+xe],Q[0]=T*h[8+xe]+I*h[24+xe]+O*h[40+xe]+ne*h[56+xe],Q[1]=I*h[8+xe]-ne*h[24+xe]-T*h[40+xe]-O*h[56+xe],Q[2]=O*h[8+xe]-T*h[24+xe]+ne*h[40+xe]+I*h[56+xe],Q[3]=ne*h[8+xe]-O*h[24+xe]+I*h[40+xe]-T*h[56+xe],J[0]=x*(h[xe]+h[32+xe]),J[3]=x*(h[xe]-h[32+xe]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[0+xe]=re[0]+Q[0],h[8+xe]=re[1]+Q[1],h[16+xe]=re[2]+Q[2],h[24+xe]=re[3]+Q[3],h[32+xe]=re[3]-Q[3],h[40+xe]=re[2]-Q[2],h[48+xe]=re[1]-Q[1],h[56+xe]=re[0]-Q[0]}function ze(h){for(let x=0;x<64;++x){const T=h[0][x],L=h[1][x],I=h[2][x];h[0][x]=T+1.5747*I,h[1][x]=T-.1873*L-.4682*I,h[2][x]=T+1.8556*L}}function U(h,x,T){for(let L=0;L<64;++L)x[T+L]=xf.toHalfFloat(E(h[L]))}function E(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(b,Math.abs(h)-1)}function H(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function $(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),T=new Uint8Array(ke(x)),L=new Uint8Array(T.length);return tt(T),z(T,L),new DataView(L.buffer)}function ae(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ba(x),L=new Uint8Array(T.length);return tt(T),z(T,L),new DataView(L.buffer)}function ie(h){const x=h.viewer,T={value:h.offset.value},L=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let O=0;const Y=new Array(h.inputChannels.length);for(let Ae=0,Me=h.inputChannels.length;Ae<Me;Ae++)Y[Ae]={},Y[Ae].start=O,Y[Ae].end=Y[Ae].start,Y[Ae].nx=h.columns,Y[Ae].ny=h.lines,Y[Ae].size=h.type,O+=Y[Ae].nx*Y[Ae].ny*Y[Ae].size;const ne=te(x,T),Z=te(x,T);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=Z)for(let Ae=0;Ae<Z-ne+1;Ae++)I[Ae+ne]=Je(x,T);const Q=new Uint16Array(65536),J=M(I,Q),re=Ee(x,T);Ge(h.array,x,T,re,L,O);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=Y[Ae];for(let we=0;we<Y[Ae].size;++we)Oe(L,Me.start+we,Me.nx,Me.size,Me.ny,Me.nx*Me.size,J)}Be(Q,L,O);let xe=0;const me=new Uint8Array(L.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let Me=0;Me<h.inputChannels.length;Me++){const we=Y[Me],ve=we.nx*we.size,rt=new Uint8Array(L.buffer,we.end*2,ve*2);me.set(rt,xe),xe+=ve*2,we.end+=ve}return new DataView(me.buffer)}function Ce(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ba(x),L=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(L),O=new DataView(I);let Y=0,ne=0;const Z=new Array(4);for(let Q=0;Q<h.lines;Q++)for(let J=0;J<h.inputChannels.length;J++){let re=0;switch(h.inputChannels[J].pixelType){case 1:Z[0]=Y,Z[1]=Z[0]+h.columns,Y=Z[1]+h.columns;for(let me=0;me<h.columns;++me){const Ae=T[Z[0]++]<<8|T[Z[1]++];re+=Ae,O.setUint16(ne,re,!0),ne+=2}break;case 2:Z[0]=Y,Z[1]=Z[0]+h.columns,Z[2]=Z[1]+h.columns,Y=Z[2]+h.columns;for(let me=0;me<h.columns;++me){const Ae=T[Z[0]++]<<24|T[Z[1]++]<<16|T[Z[2]++]<<8;re+=Ae,O.setUint32(ne,re,!0),ne+=4}break}}return O}function he(h){const x=h.viewer,T={value:h.offset.value},L=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Xe(x,T),unknownUncompressedSize:Xe(x,T),unknownCompressedSize:Xe(x,T),acCompressedSize:Xe(x,T),dcCompressedSize:Xe(x,T),rleCompressedSize:Xe(x,T),rleUncompressedSize:Xe(x,T),rleRawSize:Xe(x,T),totalAcUncompressedCount:Xe(x,T),totalDcUncompressedCount:Xe(x,T),acCompression:Xe(x,T)};if(I.version<2)throw new Error("EXRLoader.parse: "+li.compression+" version "+I.version+" is unsupported");const O=new Array;let Y=te(x,T)-2;for(;Y>0;){const Me=_e(x.buffer,T),we=Je(x,T),ve=we>>2&3,rt=(we>>4)-1,Ye=new Int8Array([rt])[0],wt=Je(x,T);O.push({name:Me,index:Ye,type:wt,compression:ve}),Y-=Me.length+3}const ne=li.channels,Z=new Array(h.inputChannels.length);for(let Me=0;Me<h.inputChannels.length;++Me){const we=Z[Me]={},ve=ne[Me];we.name=ve.name,we.compression=0,we.decoded=!1,we.type=ve.pixelType,we.pLinear=ve.pLinear,we.width=h.columns,we.height=h.lines}const Q={idx:new Array(3)};for(let Me=0;Me<h.inputChannels.length;++Me){const we=Z[Me];for(let ve=0;ve<O.length;++ve){const rt=O[ve];we.name==rt.name&&(we.compression=rt.compression,rt.index>=0&&(Q.idx[rt.index]=Me),we.offset=Me)}}let J,re,xe;if(I.acCompressedSize>0)switch(I.acCompression){case 0:J=new Uint16Array(I.totalAcUncompressedCount),Ge(h.array,x,T,I.acCompressedSize,J,I.totalAcUncompressedCount);break;case 1:const Me=h.array.slice(T.value,T.value+I.totalAcUncompressedCount),we=Ba(Me);J=new Uint16Array(we.buffer),T.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Me={array:h.array,offset:T,size:I.dcCompressedSize};re=new Uint16Array(ae(Me).buffer),T.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Me=h.array.slice(T.value,T.value+I.rleCompressedSize),we=Ba(Me);xe=ke(we.buffer),T.value+=I.rleCompressedSize}let me=0;const Ae=new Array(Z.length);for(let Me=0;Me<Ae.length;++Me)Ae[Me]=new Array;for(let Me=0;Me<h.lines;++Me)for(let we=0;we<Z.length;++we)Ae[we].push(me),me+=Z[we].width*h.type*2;We(Q,Ae,Z,J,re,L);for(let Me=0;Me<Z.length;++Me){const we=Z[Me];if(!we.decoded)switch(we.compression){case 2:let ve=0,rt=0;for(let Ye=0;Ye<h.lines;++Ye){let wt=Ae[Me][ve];for(let gt=0;gt<we.width;++gt){for(let et=0;et<2*we.type;++et)L[wt++]=xe[rt+et*we.width*we.height];rt++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function _e(h,x){const T=new Uint8Array(h);let L=0;for(;T[x.value+L]!=0;)L+=1;const I=new TextDecoder().decode(T.slice(x.value,x.value+L));return x.value=x.value+L+1,I}function Ke(h,x,T){const L=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+T));return x.value=x.value+T,L}function fe(h,x){const T=ge(h,x),L=Ee(h,x);return[T,L]}function ue(h,x){const T=Ee(h,x),L=Ee(h,x);return[T,L]}function ge(h,x){const T=h.getInt32(x.value,!0);return x.value=x.value+4,T}function Ee(h,x){const T=h.getUint32(x.value,!0);return x.value=x.value+4,T}function De(h,x){const T=h[x.value];return x.value=x.value+1,T}function Je(h,x){const T=h.getUint8(x.value);return x.value=x.value+1,T}const Xe=function(h,x){let T;return"getBigInt64"in DataView.prototype?T=Number(h.getBigInt64(x.value,!0)):T=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,T};function Qe(h,x){const T=h.getFloat32(x.value,!0);return x.value+=4,T}function X(h,x){return xf.toHalfFloat(Qe(h,x))}function ee(h){const x=(h&31744)>>10,T=h&1023;return(h>>15?-1:1)*(x?x===31?T?NaN:1/0:Math.pow(2,x-15)*(1+T/1024):6103515625e-14*(T/1024))}function te(h,x){const T=h.getUint16(x.value,!0);return x.value+=2,T}function de(h,x){return ee(te(h,x))}function Ie(h,x,T,L){const I=T.value,O=[];for(;T.value<I+L-1;){const Y=_e(x,T),ne=ge(h,T),Z=Je(h,T);T.value+=3;const Q=ge(h,T),J=ge(h,T);O.push({name:Y,pixelType:ne,pLinear:Z,xSampling:Q,ySampling:J})}return T.value+=1,O}function Fe(h,x){const T=Qe(h,x),L=Qe(h,x),I=Qe(h,x),O=Qe(h,x),Y=Qe(h,x),ne=Qe(h,x),Z=Qe(h,x),Q=Qe(h,x);return{redX:T,redY:L,greenX:I,greenY:O,blueX:Y,blueY:ne,whiteX:Z,whiteY:Q}}function it(h,x){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=Je(h,x);return T[L]}function St(h,x){const T=ge(h,x),L=ge(h,x),I=ge(h,x),O=ge(h,x);return{xMin:T,yMin:L,xMax:I,yMax:O}}function qt(h,x){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=Je(h,x);return T[L]}function _t(h,x){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=Je(h,x);return T[L]}function Kt(h,x){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],I=Ee(h,x),O=Ee(h,x),Y=Je(h,x);return{xSize:I,ySize:O,levelMode:T[Y&15],roundingMode:L[Y>>4]}}function Nn(h,x){const T=Qe(h,x),L=Qe(h,x);return[T,L]}function To(h,x){const T=Qe(h,x),L=Qe(h,x),I=Qe(h,x);return[T,L,I]}function Eo(h,x,T,L,I){if(L==="string"||L==="stringvector"||L==="iccProfile")return Ke(x,T,I);if(L==="chlist")return Ie(h,x,T,I);if(L==="chromaticities")return Fe(h,T);if(L==="compression")return it(h,T);if(L==="box2i")return St(h,T);if(L==="envmap")return _t(h,T);if(L==="tiledesc")return Kt(h,T);if(L==="lineOrder")return qt(h,T);if(L==="float")return Qe(h,T);if(L==="v2f")return Nn(h,T);if(L==="v3f")return To(h,T);if(L==="int")return ge(h,T);if(L==="rational")return fe(h,T);if(L==="timecode")return ue(h,T);if(L==="preview")return T.value+=I,"skipped";T.value+=I}function $n(h,x){const T=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function $r(h,x,T){let L=0;switch(h.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=$n(Math.max(x,T),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function ai(h,x,T,L){const I=new Array(h);for(let O=0;O<h;O++){const Y=1<<O;let ne=x/Y|0;L=="ROUND_UP"&&ne*Y<x&&(ne+=1);const Z=Math.max(ne,1);I[O]=(Z+T-1)/T|0}return I}function vi(){const h=this,x=h.offset,T={value:0};for(let L=0;L<h.tileCount;L++){const I=ge(h.viewer,x),O=ge(h.viewer,x);x.value+=8,h.size=Ee(h.viewer,x);const Y=I*h.blockWidth,ne=O*h.blockHeight;h.columns=Y+h.blockWidth>h.width?h.width-Y:h.blockWidth,h.lines=ne+h.blockHeight>h.height?h.height-ne:h.blockHeight;const Z=h.columns*h.totalBytes,J=h.size<h.lines*Z?h.uncompress(h):H(h);x.value+=h.size;for(let re=0;re<h.lines;re++){const xe=re*h.columns*h.totalBytes;for(let me=0;me<h.inputChannels.length;me++){const Ae=li.channels[me].name,Me=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we===void 0)continue;T.value=xe+Me;const ve=(h.height-(1+ne+re))*h.outLineWidth;for(let rt=0;rt<h.columns;rt++){const Ye=ve+(rt+Y)*h.outputChannels+we;h.byteArray[Ye]=h.getter(J,T)}}}}}function Ui(){const h=this,x=h.offset,T={value:0};for(let L=0;L<h.height/h.blockHeight;L++){const I=ge(h.viewer,x)-li.dataWindow.yMin;h.size=Ee(h.viewer,x),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const O=h.columns*h.totalBytes,ne=h.size<h.lines*O?h.uncompress(h):H(h);x.value+=h.size;for(let Z=0;Z<h.blockHeight;Z++){const Q=L*h.blockHeight,J=Z+h.scanOrder(Q);if(J>=h.height)continue;const re=Z*O,xe=(h.height-1-J)*h.outLineWidth;for(let me=0;me<h.inputChannels.length;me++){const Ae=li.channels[me].name,Me=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we!==void 0){T.value=re+Me;for(let ve=0;ve<h.columns;ve++){const rt=xe+ve*h.outputChannels+we;h.byteArray[rt]=h.getter(ne,T)}}}}}}function Yt(h,x,T){const L={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=h.getUint8(4);const I=h.getUint8(5);L.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},T.value=8;let O=!0;for(;O;){const Y=_e(x,T);if(Y==0)O=!1;else{const ne=_e(x,T),Z=Ee(h,T),Q=Eo(h,x,T,ne,Z);Q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):L[Y]=Q}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function er(h,x,T,L,I){const O={size:0,viewer:x,array:T,offset:L,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Qi};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=H;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=$;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ae;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ae;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ie;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Ce;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=he;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=he;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const Y={};for(const J of h.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":Y[J.name]=!0,O.type=J.pixelType}let ne=!1;if(Y.R&&Y.G&&Y.B)ne=!Y.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(Y.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(I){case Hn:O.getter=de;break;case Zi:O.getter=te;break}else if(O.type==2)switch(I){case Hn:O.getter=Qe;break;case Zi:O.getter=X}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const Z=O.width*O.height*O.outputChannels;switch(I){case Hn:O.byteArray=new Float32Array(Z),ne&&O.byteArray.fill(1,0,Z);break;case Zi:O.byteArray=new Uint16Array(Z),ne&&O.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let Q=0;for(const J of h.channels)O.decodeChannels[J.name]!==void 0&&(O.channelByteOffsets[J.name]=Q),Q+=J.pixelType*2;if(O.totalBytes=Q,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=J=>J:O.scanOrder=J=>O.height-1-J,O.outputChannels==4?(O.format=mn,O.colorSpace=Qi):(O.format=oh,O.colorSpace=nn),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const J=$r(h.tiles,O.width,O.height),re=ai(J,O.width,h.tiles.xSize,h.tiles.roundingMode),xe=ai(J,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=re[0]*xe[0];for(let me=0;me<J;me++)for(let Ae=0;Ae<xe[me];Ae++)for(let Me=0;Me<re[me];Me++)Xe(x,L);O.decode=vi.bind(O)}else{O.blockWidth=O.width;const J=Math.ceil(O.height/O.blockHeight);for(let re=0;re<J;re++)Xe(x,L);O.decode=Ui.bind(O)}return O}const Sr={value:0},Mr=new DataView(e),Fi=new Uint8Array(e),li=Yt(Mr,e,Sr),xi=er(li,Mr,Fi,Sr,this.type);return xi.decode(),{header:li,width:xi.width,height:xi.height,data:xi.byteArray,format:xi.format,colorSpace:xi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=pt,s.magFilter=pt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Sn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new yr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),w=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const y=f.packedComponents,P=y.length,R=f.storageType.indexOf("Int")===0,A=1<<w*8,C=R?A*.5:0,b=1/A;S=new Float32Array(v*g);for(let M=0,D=0;M<v;M++)for(let N=0;N<P;N++){const F=y[N];S[D]=(p[D]+C)*b*F.delta+F.from,D++}}else S=p;if(m==="indices"){let y=S;S instanceof Uint8Array&&(y=new Uint16Array(S.length),y.set(S)),l.setIndex(new Wt(y,1))}else l.setAttribute(m,new Wt(S,g));a+=v*g*w}return l.computeBoundingSphere(),l}const ka=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Ec={density:1,friction:2,restitution:.8},LS=40,_o=8,IS=`
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
`,US=`
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
uniform vec4 u_nearPositionRadiusList[${_o}];
uniform vec3 u_nearColorList[${_o}];

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

  for (int i = 0; i < ${_o}; i++) {
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
  gi /= float(${_o});

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
`,FS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,NS=`
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
`;function OS(i){const e={...Ec},t={...Ec},n={...Ec};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function zS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Kf(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class BS{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Fn().setFromEuler(new si(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(LS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function kS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*ka.length),r=ka[n];const o=new Ms,s=new Bn(25,1,.1,100);s.position.set(0,0,25);const a=new Al({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Qi,a.toneMapping=ji;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Sn(u),new Promise((z,ke)=>{new DS().load(d,z,void 0,ke)})]);m.minFilter=pt,m.magFilter=pt,m.generateMipmaps=!1,m.colorSpace=nn;const v=new q(10,10,5),g=OS(r),_=zS("balloonBody-25"),p=[],w=[],S=[],y=[],P=Array.from({length:_o},()=>new Ut(0,0,-999,.01)),R=Array.from({length:_o},()=>new Ze(1118481)),A=z=>new Rt({uniforms:{u_matcap:{value:m},u_color:{value:new Ze(z.color)},u_bgColor:{value:new Ze(1316117)},u_roughness:{value:z.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ut(0,0,0,1)},u_selfRotation:{value:new Ut(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(ke=>ke.clone())},u_nearColorList:{value:R.map(ke=>ke.clone())}},vertexShader:IS,fragmentShader:US});for(const z of g){const ke=A(z),We=new It(f,ke);We.frustumCulled=!1,We.scale.setScalar(z.radius),o.add(We),w.push(We),S.push(ke),p.push(new BS(z.radius,z.density,z.friction,z.restitution,_,!1)),y.push({i:w.length-1,d2:0})}const C=new Rt({uniforms:{u_color0:{value:new Ze(r)},u_color1:{value:new Ze(1316117)},u_aspect:{value:1}},vertexShader:FS,fragmentShader:NS,depthWrite:!1}),b=new It(new Ii(90,60),C);b.position.z=-12,b.renderOrder=-1e3,o.add(b);const M=new nt(0,0),D=new q,N=new q,F=new q,V=new q,W=new q,G=new q,B=new q,k=new q,le=new q,K=new q,ye=new Fn,Se=.025,Le=.1,j=.12,oe=z=>{const ke=(e||i).getBoundingClientRect();M.x=(z.clientX-ke.left)/ke.width*2-1,M.y=-((z.clientY-ke.top)/ke.height*2-1)};window.addEventListener("pointermove",oe);const ce=()=>{n=(n+1)%ka.length,r=ka[n],w.forEach((z,ke)=>{const We=g[ke];We.isColored&&(z.material.uniforms.u_color.value.set(r),We.color=r)}),C.uniforms.u_color0.value.set(r),p.forEach(z=>z.applyImpulse())},se=()=>ce();i.addEventListener("click",se),e==null||e.addEventListener("click",se);const Te=()=>{const z=e||i.parentElement,ke=z.clientWidth,We=z.clientHeight,je=ke/Math.max(We,1);s.fov=Kf(je,2.2,2/3,18,30),s.aspect=je,s.updateProjectionMatrix(),a.setSize(ke,We,!1),C.uniforms.u_aspect.value=je};Te(),window.addEventListener("resize",Te);let Oe=0,Pe=performance.now();const Ge=performance.now(),Be=()=>{const ke=(e||i).getBoundingClientRect();l=ke.bottom>0&&ke.top<window.innerHeight};window.addEventListener("scroll",Be,{passive:!0}),Be();const tt=z=>{if(Oe=requestAnimationFrame(tt),!l){Pe=z;return}let ke=Math.min(.05,(z-Pe)/1e3);Pe=z;const We=t?1:2;ke/=We;const je=(z-Ge)/1e3,Ue=Kf(je,.3,2,25,17.5);s.position.z=Ue;for(let qe=0;qe<We;qe++){const ze=new q(M.x,M.y,.5).unproject(s);ze.sub(s.position).normalize();const U=(0-s.position.z)/ze.z;D.copy(s.position).addScaledVector(ze,U),F.copy(D).sub(N).multiplyScalar(j/Math.max(ke,.001)),V.copy(D).sub(s.position);const E=V.lengthSq()||1;N.copy(D);for(let H=0;H<p.length;H++){const $=p[H];$.updateGravity(ke),G.copy($.velocity),B.copy($.position);for(let he=H+1;he<p.length;he++){const _e=p[he];le.copy(_e.velocity),K.copy(_e.position),W.copy(B).sub(K);const Ke=W.length(),fe=$.radius+_e.radius;if(Ke<fe&&Ke>1e-6){const ue=Math.sqrt($.friction*_e.friction);$.frictionTot+=ue,_e.frictionTot+=ue,W.normalize(),W.multiplyScalar(.5*(Ke-fe)),B.sub(W),K.add(W),W.normalize();const ge=G.dot(W),Ee=le.dot(W),De=$.mass,Je=_e.mass,Xe=(De*ge+Je*Ee-Je*(ge-Ee)*$.restitution)/(De+Je),Qe=(De*ge+Je*Ee-De*(Ee-ge)*_e.restitution)/(De+Je);G.addScaledVector(W,(Xe-ge)/(1+ue)),le.addScaledVector(W,(Qe-Ee)/(1+ue)),_e.position.copy(K),_e.velocity.copy(le)}}k.copy(B).sub(s.position);let ae=k.dot(V)/E;ae=k.sub(le.copy(V).multiplyScalar(ae)).length()-$.radius-Se,ae<0&&(k.copy(B).sub(s.position).cross(V).normalize(),le.copy(V).cross(k).normalize(),B.sub(le.multiplyScalar(Le*ae)),le.multiplyScalar(-j/Math.max(ke,.001)),G.add(le),G.add(F));let ie=B.length();if(ie>0){k.set(1,1,1).normalize();let he=1-Math.abs(k.dot(le.copy(B).normalize()));he*=ke*Math.min(1,Math.max(0,ie/2))*.5,he*=H%2*2-1,ye.setFromAxisAngle(k,he),le.copy(B).applyQuaternion(ye).sub(k.copy(B)),G.add(le)}k.crossVectors(B,G);let Ce=k.length();Ce/=$.inertia,Ce>0&&(k.normalize(),ye.setFromAxisAngle(k,Ce*ke),$.quaternion.premultiply(ye)),$.position.copy(B),$.velocity.copy(G),$.update(ke),["x","y","z"].forEach(he=>{const _e=he==="z"?5.5:7.5;$.position[he]>_e&&($.position[he]=_e,$.velocity[he]*=-.55),$.position[he]<-_e&&($.position[he]=-_e,$.velocity[he]*=-.55)})}}for(let qe=0;qe<w.length;qe++){const ze=w[qe],U=p[qe];ze.position.copy(U.position),ze.quaternion.copy(U.quaternion);const E=S[qe].uniforms;E.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),E.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),E.u_bgColor.value.copy(C.uniforms.u_color1.value)}for(let qe=0;qe<w.length;qe++){for(let E=0;E<w.length;E++)y[E].i=E,y[E].d2=qe===E?0:p[qe].position.distanceToSquared(p[E].position);y.sort((E,H)=>E.d2-H.d2);const ze=S[qe].uniforms.u_nearPositionRadiusList.value,U=S[qe].uniforms.u_nearColorList.value;for(let E=0;E<_o;E++){const H=y[E+1]?y[E+1].i:y[0].i,$=p[H];ze[E].set($.position.x,$.position.y,$.position.z,$.radius),U[E].copy(S[H].uniforms.u_color.value)}}s.position.x+=(M.x*.9-s.position.x)*.04,s.position.y+=(M.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Oe=requestAnimationFrame(tt),{cycleColor:ce,destroy(){cancelAnimationFrame(Oe),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",Te),window.removeEventListener("scroll",Be),i.removeEventListener("click",se),e==null||e.removeEventListener("click",se),S.forEach(z=>z.dispose()),C.dispose(),a.dispose()}}}function rn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Qn(i){return rn(i,0,1)}function rm(i,e,t){return(t-i)/(e-i||1)}function ho(i,e,t){return rn(rm(i,e,t),0,1)}function pe(i,e,t,n,r,o){let s=ho(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function jf(i,e,t,n,r,o){let s=rm(e,t,i);return n+s*(r-n)}function HS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,w)=>1/(3*_*g*g+2*p*g+w),s=(g,_,p,w,S)=>_*(g*g*g)+p*(g*g)+w*g+S,a=(g,_,p,w,S)=>{const y=g*g;return _*(y*g)+p*y+w*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function dt(i){return HS(i,.35,0,0,1)}function gl(i){return i===1?1:1-Math.pow(2,-10*i)}function VS(i){return i===0?0:Math.pow(1024,i-1)}function GS(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function WS(i){return 1-Math.cos(i*Math.PI/2)}function Lu(i){return Math.sin(i*Math.PI/2)}function XS(i){return-(Math.cos(Math.PI*i)-1)/2}function qS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Iu(i){return i*i*i}function Uu(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Mn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,jf(n,t,t-r,-1,0));s+=Math.max(0,jf(n,0,-r,0,1));const a=pe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function YS(i){return 1-Math.pow(1-i,3)}function $S(i){return i*i*i*i}function ZS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Gi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Jf=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function Ha(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function Qf(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function ph(i){const e={};let t=0;for(const f of Jf)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=Ha(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=Ha(v),p=Ha(g),w=Math.max(_.height,Qf(v,1080/1496)),S=Math.max(p.height,Qf(g,1537/2e3));n=(_.top||m.top)-f;const y=(f+w)*.5,P=Math.max((f+S)*.5+f,f*1.85),R=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),A=document.documentElement.scrollHeight,C=R?Math.max(Ha(R).bottom,A):A;let b=Math.max(f*.85,C-m.bottom);const M=Math.max(f*12,A-f-n);let D=Math.max(f*8,m.bottom-n-y-P);const N=y+P+b;N+D>M&&(D=Math.max(f*6,M-N)),N+D>M&&(b=Math.max(f*.5,M-y-P-D)),e.blackFrameShow.pixelCount=y,e.astronautDrop.pixelCount=P,e.astronautWait.pixelCount=Math.max(f*.5,b),r=0;for(const F of Jf){const V=e[F.id];V.pixelFrom=r,V.weight&&(V.pixelCount=D*V.weight/t),V.id==="blackFrameIn"&&(V.pixelCount=Math.min(V.pixelCount,f*1.15)),r+=V.pixelCount,V.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,w=Math.max(p-_,1e-6),S=c()-_,y=S/w;return{ratio:Math.max(0,Math.min(1,y)),raw:y,active:y>=0&&y<1,global:c()/Math.max(r,1),pixel:S,pixelCount:w}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const KS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,jS=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,JS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",QS="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",om=`
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
`,sm=`
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
`,eM=`
${om}
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
${sm}
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
`,tM=`
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
`,ed=`
${om}
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
${sm}
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
`,lr=5,Va=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,nM=`
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
`,iM=`
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
`,rM=`
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
`,oM=`
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
`;function Xo(i,e,t=!1,n=0){const r={minFilter:pt,magFilter:pt,format:mn,type:n>0?Li:Zi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new xr(i,e,r);return t&&n===0&&(o.depthTexture=new ml(i,e),o.depthTexture.type=Mo),t&&n>0&&(o.depthTexture=new ml(i,e),o.depthTexture.type=Mo),o}function sM(i,e,t,{isMobile:n=!1}={}){const r=new nt(1,1);i.getSize(r);let o=!!n,s=Xo(1,1,!0,4),a=Xo(1,1,!1),l=Xo(1,1,!1),c=Xo(1,1,!1),u=null;const d=[],f=[];for(let H=0;H<lr;H++)d.push(Xo(1,1)),f.push(Xo(1,1));const m=new fh(-1,1,1,-1,0,1),v=new It(new Ii(2,2),new hh),g=new Ms;g.add(v);const _=new Rt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new nt(1,1)},u_aspect:{value:new nt(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Va,fragmentShader:nM,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=[];for(let H=0;H<lr;H++){const $=3+H*2;p.push(new Rt({uniforms:{u_texture:{value:null},u_resolution:{value:new nt(1,1)},u_direction:{value:new nt(1,0)}},defines:{KERNEL_RADIUS:$,SIGMA:$},vertexShader:Va,fragmentShader:iM,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const w=new Float32Array(lr),S=new Rt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:w}},vertexShader:Va,fragmentShader:rM,depthTest:!1,depthWrite:!1,toneMapped:!1});let y=0;const P=new Rt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new nt(1,1)},u_amount:{value:1}},vertexShader:Va,fragmentShader:oM,depthTest:!1,depthWrite:!1,toneMapped:!1}),R=new vt,A=new vt,C=new vt,b=new vt,M=new vt,D=new q,N=new si,F=new q(1,1,1),V=new Fn;let W=!0,G=1,B=!1,k=0,le=0,K=1,ye=1,Se=0,Le=.015,j=.6,oe=.3,ce=.5,se=0,Te=new Ze(0),Oe=!0,Pe=1,Ge=1,Be=1;const tt=new nt(1,0),z=new nt(0,1),ke=(H,$)=>{v.material=H,i.setRenderTarget($),i.clear(),i.render(g,m)},We=H=>{const $=Math.max(1,H);return 1<<Math.ceil(Math.log($)/Math.log(2))},je=(H,$)=>{Pe=Math.max(1,Math.floor(H)),Ge=Math.max(1,Math.floor($));const ae=1;s.setSize(Math.max(1,Math.floor(Pe*ae)),Math.max(1,Math.floor(Ge*ae))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const ie=o?3:2;let Ce=Math.max(1,Math.ceil(Pe/ie)),he=Math.max(1,Math.ceil(Ge/ie));c.setSize(Ce,he);for(let Ke=0;Ke<lr;Ke++)d[Ke].setSize(Ce,he),f[Ke].setSize(Ce,he),Ce=Math.max(1,Math.ceil(Ce/2)),he=Math.max(1,Math.ceil(he/2));_.uniforms.u_texelSize.value.set(1/Pe,1/Ge);const _e=Ge/Math.sqrt(Pe*Pe+Ge*Ge)*2;_.uniforms.u_aspect.value.set(Pe/Ge*_e,_e),P.uniforms.u_aspect.value.set(Pe/Math.max(Ge,1),1)},Ue=({blackFrameInRatio:H=0,blackTitleRatio:$=0,blackTunnelRatio:ae=0,whiteFrameRatio:ie=0,whiteTunnelWaitRatio:Ce=0,astronautDropRatio:he=0,isWhiteTunnelActive:_e=!1,isBlackTunnelActive:Ke=!1,isMobile:fe=!1}={})=>{o=!!fe;let ue=H*(Ot.lerp(0,.15,$)+Ot.clamp((ae-.2)/.2,0,1)*.25);if(ae>=.65){const Ee=Ot.clamp((ae-.65)/.1,0,1);ue=ue+(.08-ue)*Ee}if(_e&&(ue=0),!_e&&H>.55&&ae<.25){const Ee=Ot.lerp(fe?.24:.42,fe?.12:.18,Ot.clamp($/.5,0,1));ue=Math.max(ue,Ee*Math.min(1,H))}if(Se=ue,K=ae<1?Ot.lerp(1,3,Ot.clamp(ae/.7,0,1)):1,_e){const Ee=fe?12:20;k=he<1?Ot.lerp(4,2,Ot.clamp(ie/.05,0,1)):Ot.lerp(0,Ee,Ot.clamp(Ce/.1,0,1)),le=fe?.45:.62,ye=fe?1.2:1.35,Be=fe?1.15:1.35,se=Ot.lerp(he<1?.38:.3,0,Ot.clamp(Ce/.1,0,1)),Te.set(he<1?"#ffffff":"#000000")}else{Be=1;const Ee=Ot.clamp($/.25,0,1);k=Ot.lerp(fe?22:30,fe?5:6,Ee),se=0,Te.set("#000000")}const ge=!_e&&H>.55&&ae<.2;j=ge?.85:.6,Le=ge?.04:fe?.012:.02,oe=ge?.15:.3,ce=ge?.75:.5,_e||(le=fe?.15:ge?.55:.5,ye=ge?1.15:1),B=Ke||_e},qe=(H,$=0)=>{D.set(0,0,H),N.set(0,0,$)},ze=()=>{W=!0},U=(H,$)=>{const ae=i.autoClear;i.autoClear=!0,ke(H,$),i.autoClear=ae},E=()=>{if(!Oe){i.setRenderTarget(null),i.render(e,t);return}const H=i.getRenderTarget(),$=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(Te,se),i.clear();const ae=e.background;e.background=null;const ie=u==null?void 0:u.mesh,Ce=!!(ie!=null&&ie.visible);if(Ce&&(ie.visible=!1),i.render(e,t),e.background=ae,u!=null&&u.active&&u.overlayScene){for(let ge=0;ge<lr;ge++)w[ge]=0,S.uniforms[`u_blurTexture${ge}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ue=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,ke(S,a),S.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Ge),ie&&(ie.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else Ce&&ie&&(ie.visible=!1);let he=s.texture;if(R.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),C.copy(R).invert(),B&&G>0?(W&&(A.copy(R),W=!1),M.compose(D,V.setFromEuler(N),F),M.invert(),b.copy(A).multiply(M),P.uniforms.u_texture.value=s.texture,P.uniforms.u_depthTexture.value=s.depthTexture,P.uniforms.u_projectionViewInverseMatrix.value.copy(C),P.uniforms.u_prevProjectionViewMatrix.value.copy(b),P.uniforms.u_amount.value=G,U(P,l),he=l.texture,A.copy(R)):(A.copy(R),W=!0),k<.05&&Se<.005){S.uniforms.u_texture.value=he;for(let ue=0;ue<lr;ue++)w[ue]=0,S.uniforms[`u_blurTexture${ue}`].value=he;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),ke(S,null),i.autoClear=$,i.setRenderTarget(H);return}_.uniforms.u_texture.value=he,_.uniforms.u_amount.value=ye,_.uniforms.u_haloStrength.value=Se,_.uniforms.u_haloWidth.value=j,_.uniforms.u_haloRGBShift.value=Le,_.uniforms.u_haloMaskInner.value=oe,_.uniforms.u_haloMaskOuter.value=ce,U(_,c);const _e=o?3:lr;let Ke=c;for(let ue=0;ue<_e;ue++){const ge=p[ue];ge.uniforms.u_texture.value=Ke.texture,ge.uniforms.u_resolution.value.set(Ke.width,Ke.height),ge.uniforms.u_direction.value=tt,U(ge,d[ue]),ge.uniforms.u_texture.value=d[ue].texture,ge.uniforms.u_resolution.value.set(d[ue].width,d[ue].height),ge.uniforms.u_direction.value=z,U(ge,f[ue]),Ke=f[ue]}let fe=k;if(o)fe*=Be;else{const ue=We(Pe/2)>>1,ge=We(Ge/2)>>1,Ee=Math.max(1,Math.ceil(Math.log(ue*ge)/Math.log(2)));fe=k*1024/Math.pow(Ee,4)*.85*48*Be}for(let ue=0;ue<lr;ue++){if(ue>=_e){w[ue]=0;continue}const ge=(_e-ue)/_e;let Ee=fe*(ge+(1.2-ge*2)*le)/Math.pow(2,_e-ue-1);!o&&ue===0&&(Ee*=.15),!o&&ue===1&&(Ee*=.45),!o&&ue>=3&&(Ee*=1.75),w[ue]=Ee}S.uniforms.u_texture.value=he,S.uniforms.u_saturation.value=K;for(let ue=0;ue<lr;ue++){const ge=ue<_e?f[ue].texture:f[_e-1].texture;S.uniforms[`u_blurTexture${ue}`].value=ge}i.setRenderTarget(null),ke(S,null),i.autoClear=$,i.setRenderTarget(H)};return je(r.x,r.y),{resize:je,sync:Ue,render:E,setEfxOffset:qe,markEfxSync:ze,setGlassPass(H){u=H||null},setEfxAmount(H){G=H},get clearAlpha(){return se},setEnabled(H){Oe=!!H},setScrollVelocity(H){const $=Math.min(1,Math.abs(H)*.12);y+=($-y)*.12,S.uniforms.u_scrollPaint.value=y},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.forEach(H=>H.dispose()),f.forEach(H=>H.dispose()),_.dispose(),S.dispose(),P.dispose(),p.forEach(H=>H.dispose()),v.geometry.dispose()}}}function aM(i,e,t){return i+(e-i)*t}const Fr=class Fr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<Fr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&Fr.MAX_VERTICES_MASK,a=s+1&Fr.MAX_VERTICES_MASK;return aM(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ve(Fr,"MAX_VERTICES",512),Ve(Fr,"MAX_VERTICES_MASK",Fr.MAX_VERTICES-1);let vl=Fr;const Wi=new q,Ks=class Ks{constructor(){this._position=new q,this._rotation=new Fn,this._euler=new si,this._scale=new q(1,1,1),this._matrix=new vt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new vl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Wi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Wi.multiply(this._positionScale),Wi.multiplyScalar(this._positionAmplitude*Ks.FBM_NORM),this._position.copy(Wi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Wi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Wi.multiply(this._rotationScale),Wi.multiplyScalar(this._rotationAmplitude*Ks.FBM_NORM),this._euler.set(Wi.x,Wi.y,Wi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ve(Ks,"FBM_NORM",1/.75);let $s=Ks;class Fu{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const td=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],lM=26,so=64,cM=34,Is=new nt(1465,1024),uM=`
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
`,hM=`
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
`,fM=`
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
`,dM=`
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
`,Ga=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function pM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function mM(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?cM:lM,[s,a]=await Promise.all([new hr().loadAsync(`${e}assets/textures/tunnels/${r}`),Sn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Dn,s.flipY=!1,s.needsUpdate=!0;const l=new gi;i.add(l);const c=new Ii(1,1),u=new po;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let M=0,D=0;M<o;M++,D+=4){d[M]=M/o;const N=td[M%td.length];f[D]=N.x/Is.x,f[D+1]=N.y/Is.y,f[D+2]=N.w/Is.x,f[D+3]=N.h/Is.y,m[D]=Math.random(),m[D+1]=Math.random(),m[D+2]=Math.random(),m[D+3]=Math.random()}u.setAttribute("instanceId",new wn(d,1)),u.setAttribute("instanceUvInfo",new wn(f,4)),u.setAttribute("instanceRands",new wn(m,4)),u.instanceCount=o;const v=new Rt({vertexShader:uM,fragmentShader:hM,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:Is.clone()},u_bgColor:{value:new Ze(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:oa,blendEquation:In,blendSrc:ts,blendDst:ns,blendEquationAlpha:In,blendSrcAlpha:Ja,blendDstAlpha:Ja,defines:{COUNT:o}}),g=new It(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new po;for(const M in a.attributes)_.setAttribute(M,a.attributes[M]);a.index&&(_.index=a.index);const p=pM("diamonds-3"),w=new Float32Array(so*3),S=new Float32Array(so*3),y=new Float32Array(so*4),P=new q;for(let M=0,D=0,N=0;M<so;M++,D+=3,N+=4)w[D]=16*(p()*2-1),w[D+1]=16*(p()*2-1),w[D+2]=19-(so-M-1)/(so-1)*8,P.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[D]=P.x,S[D+1]=P.y,S[D+2]=P.z,y[N]=p(),y[N+1]=p(),y[N+2]=p(),y[N+3]=p();_.setAttribute("a_instancePosition",new wn(w,3)),_.setAttribute("a_instanceRotationAxis",new wn(S,3)),_.setAttribute("a_instanceRand",new wn(y,4)),_.instanceCount=so;const R=[];for(let M=0;M<25;M++)R.push(new Ut(Ga[M*4],Ga[M*4+1],Ga[M*4+2],Ga[M*4+3]));const A=new Rt({vertexShader:fM,fragmentShader:dM,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Ze("#689aff")},u_planes:{value:R},u_bgColor:{value:new Ze(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:oa,blendEquation:In,blendSrc:fi,blendDst:Ja,blendEquationAlpha:In,blendSrcAlpha:fi,blendDstAlpha:fi}),C=new It(_,A);C.frustumCulled=!1,C.renderOrder=20,C.visible=!1,A.blending=Vr,A.blendSrc=ts,A.blendDst=ns,A.blendSrcAlpha=ts,A.blendDstAlpha=ns,l.add(C),g.renderOrder=15;const b=new Ze(0);return{update({whiteTunnelWaitRatio:M=0,aspect:D=1,bg:N="#000000"}={}){const F=pe(M,0,.2,0,1),V=F>0;l.visible=V,g.visible=V,C.visible=V,v.uniforms.u_activeRatio.value=F,A.uniforms.u_activeRatio.value=F,v.uniforms.u_aspect.value=D,A.uniforms.u_aspect.value=D,b.set(N),v.uniforms.u_bgColor.value.copy(b),A.uniforms.u_bgColor.value.copy(b)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const Wa=946,nd=2,_M=`
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
`,gM=`
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
`;function id(i,e,t){const n=new Rl(i,e,t,mn,Hn);return n.magFilter=on,n.minFilter=on,n.wrapS=Un,n.wrapT=Un,n.needsUpdate=!0,n.colorSpace=nn,n}async function vM(i,{base:e}){const[t,n]=await Promise.all([Sn(`${e}assets/models/tunnels/broken_glass.buf`),Sn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Wt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(Wa*3),l=new Float32Array(o.length/3*4);for(let N=0,F=0;N<o.length;N+=3,F+=4)l[F]=o[N],l[F+1]=o[N+1],l[F+2]=o[N+2],l[F+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=id(l,Wa,a),d=id(c,Wa,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new nt(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new nt(Wa,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new Rt({uniforms:f,vertexShader:_M,fragmentShader:gM,transparent:!0,depthWrite:!1,depthTest:!0,side:En,toneMapped:!1}),v=new It(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new Ms,_=new gi;_.add(v),g.add(_);let p=0,w=1,S=1,y=0,P=1,R=!1;const A=new q(0,0,1),C=new Fn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return R},updateFromScroll:({glassBreakRatio:N=0,whiteFrameBreakRatio:F=0,astronautDropRatio:V=0,frameHeight:W=0,frameRotation:G=0,frameScale:B=1}={})=>{const k=N>0||F===0?N:F;p=pe(k,0,1,0,1,Lu),w=pe(V,.75,1,1,0),S=Math.max(1,W||window.innerHeight),y=G||0,P=B||1,R=p>.001&&V<1,_.visible=R,R||(v.visible=!1)},syncToCamera:(N,F=window.innerHeight)=>{if(!R||!N)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-nd);const V=Math.tan(N.fov*Math.PI/360)*nd*2,W=S/Math.max(F,1)*V*P;C.setFromAxisAngle(A,-y),v.quaternion.multiply(C),v.scale.setScalar(Math.max(W,1e-4));const G=p*(a-1),B=Math.floor(G),k=Math.min(B+1,a-1);return f.u_frameFrom.value=B,f.u_frameTo.value=k,f.u_frameRatio.value=G-B,f.u_fragmentScale.value=w,v.visible=!0,!0},setBackground:(N,F,V)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(F,V)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const Us=53,Xa=16,qa=20,rd=["helmet","helmet_glass","glove_shoes","wearpack"],Fs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Ac=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function od(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function sd(i,e){const[t,n]=await Promise.all([od(i),od(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new Rl(u,r,o,mn,Li);return d.colorSpace=nn,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=Pi,d.magFilter=pt,d.anisotropy=8,d.wrapS=Un,d.wrapT=Un,d.needsUpdate=!0,d}function ad(i,e,t){const n=new Rl(i,e,t,mn,Hn);return n.magFilter=on,n.minFilter=on,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Rc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new wn(t,3)}const Ya=`
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
`;async function xM(i,e,t){var wh,bh,Th,Eh;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,w,S,y,...P]=await Promise.all([Sn(`${r}assets/models/tunnels/astronaut_animations.buf`),Sn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Sn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new hr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new hr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new hr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Sn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Sn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Sn(`${r}assets/models/tunnels/grid_base_ld.buf`),Sn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Sn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Sn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new hr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),Sn(`${r}assets/models/tunnels/earth_card.buf`),new hr().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...rd.map(be=>Sn(`${r}assets/models/tunnels/astronaut_${be}.buf`))]),R=new Ms;R.background=new Ze(0);const A=new q(0,0,25),C=new q(0,0,24),b=45,M=new Bn(b,1,1,200);M.position.copy(A),M.lookAt(C);let D;try{D=new Al({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(be){throw console.error("Goal WebGL unavailable",be),be}D.setClearColor(0,1),D.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),D.outputColorSpace=Qi,D.toneMapping=ji,D.autoClear=!0,c.colorSpace=nn,c.generateMipmaps=!1,c.minFilter=pt,c.magFilter=pt,u.colorSpace=nn,u.generateMipmaps=!1,u.minFilter=pt,u.magFilter=pt,d.colorSpace=nn,d.wrapS=d.wrapT=is,d.generateMipmaps=!1,d.minFilter=pt,d.magFilter=pt;const N=s.attributes.position.array,F=s.attributes.orient.array,V=N.length/3,W=V/Us,G=Math.ceil(Math.sqrt(V)),B=Math.ceil(V/G),k=G*B,le=new Float32Array(k*4),K=new Float32Array(k*4);for(let be=0,He=0,Re=0;be<V;be++,He+=3,Re+=4)le[Re]=N[He],le[Re+1]=N[He+1],le[Re+2]=N[He+2],le[Re+3]=1,K[Re]=F[Re],K[Re+1]=F[Re+1],K[Re+2]=F[Re+2],K[Re+3]=F[Re+3];const ye=ad(le,G,B),Se=ad(K,G,B),Le=new wn(new Float32Array([0,0,18]),3);Le.setUsage(Er);const j=new wn(new Float32Array([0,0,0,1]),4);j.setUsage(Er);const oe=new wn(new Float32Array([0,1,0]),3);oe.setUsage(Er);const ce=new wn(new Float32Array([90,91,0]),3);ce.setUsage(Er);const se=()=>{const be=new xr(1,1,{minFilter:Pi,magFilter:pt,format:mn,generateMipmaps:!0});return be.texture.wrapS=be.texture.wrapT=dl,be},Te=se(),Oe=se();let Pe=Te,Ge=Oe;const Be={u_animationPositionTexture:{value:ye},u_animationOrientTexture:{value:Se},u_animationTextureSize:{value:new nt(G,B)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ze("#566d80")},u_bgColor:{value:new Ze("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ze(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Ze("#aaaafb")},u_cardPosition:{value:new q}},tt={u_blackTunnelTexture:{value:Pe.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},z={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async be=>{const[He,Re]=await Promise.all([sd(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${be}_base.webp`),new hr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_nor.webp`)]);Re.colorSpace=nn,Re.flipY=!1,Re.generateMipmaps=!0,Re.minFilter=Pi,Re.magFilter=pt,Re.anisotropy=8,z[be]={armb:He,nor:Re}}));const ke=((bh=(wh=D.capabilities).getMaxAnisotropy)==null?void 0:bh.call(wh))||8;for(const be of Object.keys(z)){const{armb:He,nor:Re}=z[be];He&&(He.anisotropy=Math.min(8,ke),He.needsUpdate=!0),Re&&(Re.anisotropy=Math.min(8,ke),Re.needsUpdate=!0)}z.helmet_glass=z.helmet;const We=new gi;R.add(We);const je=[],Ue=4,qe=new wn(new Float32Array(Ue*3),3);qe.setUsage(Er);const ze=new wn(new Float32Array(Ue*4),4);ze.setUsage(Er);const U=new wn(new Float32Array(Ue*3),3);U.setUsage(Er);const E=new wn(new Float32Array(Ue*3),3);E.setUsage(Er);for(let be=0;be<Ue;be++)ze.setXYZW(be,0,0,0,1),U.setXYZ(be,0,1,0),E.setXYZ(be,90,91,0);const H=[];let $=0;const ae={value:0};rd.forEach((be,He)=>{const Re=P[He],$e=new po;for(const fn in Re.attributes)$e.setAttribute(fn,Re.attributes[fn]);Re.index&&$e.setIndex(Re.index),$e.instanceCount=1,$e.setAttribute("instancePos",Le),$e.setAttribute("instanceOrient",j),$e.setAttribute("instanceAnimationFrameFromToBlend1",oe),$e.setAttribute("instanceAnimationFrameFromToBlend2",ce);const ot=be==="helmet_glass"||be==="card"?"helmet":be,Mt=be==="helmet_glass",ht={...Be,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor}},Et={...Be,...tt,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor}},$t=new Rt({uniforms:ht,vertexShader:Ya,fragmentShader:eM,transparent:!0,blending:Di,side:En,defines:{BONE_COUNT:Us,IS_WHITE:!0,...Mt?{IS_HELMET_GLASS:!0}:{}}}),vn=new Rt({uniforms:Et,vertexShader:Ya,fragmentShader:ed,transparent:!0,blending:Di,side:En,defines:{BONE_COUNT:Us,IS_BLACK:!0,...Mt?{IS_HELMET_GLASS:!0}:{}}}),zn=new It($e,$t);if(zn.frustumCulled=!1,zn.userData.whiteMat=$t,zn.userData.blackMat=vn,We.add(zn),je.push(zn),!Mt){const fn=new po;for(const ci in Re.attributes)fn.setAttribute(ci,Re.attributes[ci]);Re.index&&fn.setIndex(Re.index),fn.instanceCount=Ue,fn.setAttribute("instancePos",qe),fn.setAttribute("instanceOrient",ze),fn.setAttribute("instanceAnimationFrameFromToBlend1",U),fn.setAttribute("instanceAnimationFrameFromToBlend2",E);const Rn=new Rt({uniforms:{...Et,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor},u_alpha:ae},vertexShader:Ya,fragmentShader:ed,transparent:!0,depthWrite:!1,depthTest:!1,blending:oa,blendEquation:In,blendSrc:fi,blendDst:fi,blendEquationAlpha:In,blendSrcAlpha:fi,blendDstAlpha:fi,side:En,defines:{BONE_COUNT:Us,IS_BLACK:!0,IS_CLONE:!0}}),Qt=new It(fn,Rn);Qt.frustumCulled=!1,Qt.renderOrder=1e3,Qt.visible=!1,We.add(Qt),H.push(Qt)}});const ie=new nt(5,23),Ce=new vl;let he=0,_e=!1;const Ke=document.createElement("canvas");Ke.width=Ke.height=11;{const be=Ke.getContext("2d");be.fillStyle="#000",be.fillRect(0,0,11,11),be.fillStyle="#f00",be.fillRect(1,1,3,9),be.fillStyle="#0f0",be.fillRect(4,1,3,9),be.fillStyle="#00f",be.fillRect(7,1,3,9)}const fe=new cS(Ke);fe.needsUpdate=!0,fe.minFilter=pt,fe.magFilter=pt;const ue=await new hr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ue.minFilter=on,ue.magFilter=on,ue.colorSpace=nn,ue.flipY=!1;const ge=new Ii(.2,.15).translate(0,1.68,.1);ge.setAttribute("boneIndices",new Wt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),ge.setAttribute("boneWeights",new Wt(new Float32Array([1,0,1,0,1,0,1,0]),2)),ge.setAttribute("tangent",new Wt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),ge.setAttribute("ao",new Wt(new Float32Array([1,1,1,1]),1));const Ee=new po;for(const be in ge.attributes)Ee.setAttribute(be,ge.attributes[be]);ge.index&&Ee.setIndex(ge.index),Ee.instanceCount=1,Ee.setAttribute("instancePos",Le),Ee.setAttribute("instanceOrient",j),Ee.setAttribute("instanceAnimationFrameFromToBlend1",oe),Ee.setAttribute("instanceAnimationFrameFromToBlend2",ce);const De=new Rt({uniforms:{...Be,u_cardLedTexture:{value:fe},u_cardTexture:{value:ue},u_cardColor:{value:new Ze("#ddddff")},u_cardUvOffset:{value:new nt(0,0)},u_cardTextureSize:{value:ie},u_cardOpacity:{value:0}},vertexShader:Ya,fragmentShader:tM,transparent:!0,depthTest:!1,depthWrite:!1,side:En,blending:oa,blendEquation:In,blendSrc:fi,blendDst:fi,blendEquationAlpha:In,blendSrcAlpha:fi,blendDstAlpha:fi,defines:{BONE_COUNT:Us}}),Je=new It(Ee,De);Je.frustumCulled=!1,Je.renderOrder=100,Je.visible=!1,We.add(Je);const Xe=new gi;R.add(Xe);const Qe=new $s;Qe.positionAmplitude=2,Qe.positionFrequency=1,Qe._enableRotationNoise=!1;const X=Qe.position;let ee=0,te=1,de=typeof window<"u"?window.scrollY:0,Ie=1;const Fe=(be,He)=>{const Re=new po;for(const ht in be.attributes)Re.setAttribute(ht,be.attributes[ht]);be.index&&Re.setIndex(be.index);const $e=new Float32Array(Xa);for(let ht=0;ht<Xa;ht++)$e[ht]=ht;Re.setAttribute("a_instanceId",new wn($e,1)),Re.instanceCount=Xa;const ot=new Rt({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:X},u_time:{value:0}},vertexShader:JS,fragmentShader:QS,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Xa,...He?{IS_WALL:!0}:{}}}),Mt=new It(Re,ot);return Mt.frustumCulled=!1,Xe.add(Mt),ot},it=Fe(f,!1),St=Fe(m,!0),qt=await mM(R,{base:r,isMobile:n,sharedTime:Be.u_time}),_t=new Rt({uniforms:{u_color:{value:new Ze(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Di}),Kt=new It(new Ii(200,200),_t);Kt.position.z=-80,Kt.renderOrder=-10,R.add(Kt),y.colorSpace=nn,y.generateMipmaps=!1,y.minFilter=pt,y.magFilter=pt;const Nn={u_earthTexture:{value:y},u_bgColor:{value:new Ze(0)},u_atmosphereColor:{value:new Ze("#4169E1")}},To=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,Eo=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,$n=new gi,$r=new Rt({uniforms:Nn,vertexShader:To,fragmentShader:Eo,depthWrite:!0,depthTest:!0}),ai=new It(S,$r);ai.frustumCulled=!1,ai.renderOrder=-1,$n.add(ai),R.add($n);const vi=new gi;R.add(vi);const Ui=await sd(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);Ui.wrapS=Ui.wrapT=is,w.colorSpace=nn,w.flipY=!1,w.wrapS=w.wrapT=is;const Yt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Pe.texture},u_greebleArmbTexture:{value:Ui},u_greebleNormalTexture:{value:w},u_resolution:{value:new nt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new Ze(Fs[0])},u_color2:{value:new Ze(Ac[0])}},er=(be,He,Re)=>{const $e=new po;for(const Et in be.attributes)$e.setAttribute(Et,be.attributes[Et]);be.index&&$e.setIndex(be.index);const ot=be.attributes.position.count;$e.getAttribute("ao")||$e.setAttribute("ao",new Wt(new Float32Array(ot).fill(1),1)),$e.getAttribute("areaRatio")||$e.setAttribute("areaRatio",new Wt(new Float32Array(ot),1)),$e.getAttribute("height")||$e.setAttribute("height",new Wt(new Float32Array(ot).fill(1),1)),$e.getAttribute("cluster")||$e.setAttribute("cluster",new Wt(new Float32Array(ot),1)),$e.setAttribute("instancePos",Rc(He.attributes.position)),$e.setAttribute("instanceGridIds",Rc(He.attributes.gridIds)),$e.setAttribute("instanceAxis",Rc(He.attributes.rotAxis)),$e.instanceCount=He.attributes.position.count;const Mt=new Rt({uniforms:Yt,vertexShader:KS,fragmentShader:jS,side:En,transparent:!1,depthWrite:!0,blending:Vr,defines:{GRID_SIZE:qa,...Re?{IS_HD:!0}:{}}}),ht=new It($e,Mt);return ht.frustumCulled=!1,ht.renderOrder=Re?2:1,vi.add(ht),ht};er(v,g,!1),o&&_&&p&&er(_,p,!0);let Sr=0,Mr=0,Fi=0,li=b,xi=0,h=-80,x=0;const T=new $s;T.positionFrequency=.2,T.rotationFrequency=.15,T.positionAmplitude=0,T.rotationAmplitude=0;const L=new Fu(new q,1,.65,1.3),I=new Fu(new q,1,.85,1.1),O=Array.from({length:Ue},()=>{const be=new $s;return be.positionFrequency=.2,be.rotationFrequency=.6,be.positionAmplitude=12,be.rotationAmplitude=10,be}),Y=Float32Array.from({length:Ue+1},(be,He)=>He===0?0:Math.random()*2),ne=new Float32Array(Ue),Z=new Float32Array(Ue),Q=new q,J=new Fn,re=new vt,xe=new vt,me=new q,Ae=new q,Me=new Fn,we=new si,ve=new q(1,1,1),rt=new Ze,Ye=new Ze,wt=new q,gt=new q;let et=0,bt=0,st=0,xt=0,at=.08;const lt=.1;let Bt=!1,jt=0,ln=0,Zr=0,Pl=0,Dl=0;window.addEventListener("pointermove",be=>{et=be.clientX/Math.max(window.innerWidth,1)*2-1,bt=be.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Bt=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Bt=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Bt=!1},{passive:!0});const Ll=()=>{M.near=1,M.far=200,M.position.copy(A),M.up.set(0,1,0),M.lookAt(C),M.fov=li,wt.set(0,0,-1).applyQuaternion(M.quaternion);let be=gt.copy(C).sub(M.position).dot(wt);const He=M.fov,Re=He+Fi,$e=Math.max(1,Math.min(170,Re));let ot=be*Math.tan(He/360*Math.PI/2)/Math.tan($e/360*Math.PI/2)-be;Number.isFinite(ot)||(ot=0),M.translateZ(ot),M.fov=He,be+=ot;const Mt=Math.max(1,D.domElement.width||window.innerWidth),ht=Math.max(1,D.domElement.height||window.innerHeight);Math.abs(Pl)>.25||Math.abs(Dl)>.25?M.setViewOffset(Mt,ht,Pl,Dl,Mt,ht):M.clearViewOffset(),M.translateZ(be*-1);const Et=n?at*.35:at,$t=Math.max(-1,Math.min(1,bt))*Et,vn=Math.max(-1,Math.min(1,-et))*Et;st+=($t-st)*lt,xt+=(vn-xt)*lt,we.set(st,xt,0),Me.setFromEuler(we),M.quaternion.multiply(Me),M.translateZ(be),M.updateProjectionMatrix()},um=be=>{if(T.update(be),L.update(be,T.position),me.copy(T.euler),I.update(be,me),we.set(I.value.x,I.value.y,I.value.z),Me.setFromEuler(we),xe.compose(L.value,Me,ve),re.compose(Q,J,ve),re.multiply(xe),re.decompose(me,Me,Ae),Le.setXYZ(0,me.x,me.y,me.z),j.setXYZW(0,Me.x,Me.y,Me.z,Me.w),Le.needsUpdate=!0,j.needsUpdate=!0,Ul=1+Math.min(3.5,L.valueVel.length()*.2+I.valueVel.length()*.2),$>.01&&!Gt&&!wr){for(let He=0;He<Ue;He++){const Re=O[He];Re.positionFrequency=.2,Re.rotationFrequency=.6,Re.positionAmplitude=12,Re.rotationAmplitude=10,Re.update(be),re.compose(Q,J,ve),re.multiply(Re.matrix),re.decompose(me,Me,Ae);const $e=He/Math.max(Ue-1,1),ot=pe($,$e*.3,.7+$e*.3,1,0,XS);Ae.set(Le.getX(0),Le.getY(0),Le.getZ(0)),me.lerp(Ae,ot),qe.setXYZ(He,me.x,me.y,me.z),ze.setXYZW(He,Me.x,Me.y,Me.z,Me.w)}qe.needsUpdate=!0,ze.needsUpdate=!0}},ct=document.getElementById("home-goal-tunnel-sticky")||((Th=i.closest)==null?void 0:Th.call(i,"#home-goal-tunnel-sticky"))||((Eh=e==null?void 0:e.querySelector)==null?void 0:Eh.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,On=ph(e);let cn=0,ws=0,bs=0,Tt=0,yi=0,Il=0,Kr=0,Ts=0,Ni=0,Jt=0,mh=0,wr=!0,un=!1,Gt=!1,Ao=0,Oi=0,Ul=1,Fl=0,_h=performance.now(),da=!1,gh=!1;const hn=sM(D,R,M,{isMobile:n});let zi=null;try{zi=await vM(R,{base:r}),hn.setGlassPass(zi)}catch(be){console.warn("Broken glass failed to load",be)}const Ro=()=>{var Et;const be=(Et=ct==null?void 0:ct.querySelector)==null?void 0:Et.call(ct,"[data-goal-screen-clip]"),He=ct==null?void 0:ct.classList.contains("is-windowed"),Re=He&&be?be:ct;let $e=(Re==null?void 0:Re.clientWidth)||window.innerWidth,ot=(Re==null?void 0:Re.clientHeight)||window.innerHeight;!He&&n&&window.visualViewport&&($e=Math.round(window.visualViewport.width)||$e,ot=Math.round(window.visualViewport.height)||ot),M.aspect=$e/Math.max(ot,1),Ll(),D.setSize($e,ot,!1),hn.resize($e,ot),Yt.u_resolution.value.set($e,ot);const Mt=Math.max(1,Math.floor($e*.25)),ht=Math.max(1,Math.floor(ot*.25));(Te.width!==Mt||Te.height!==ht)&&(Te.setSize(Mt,ht),Oe.setSize(Mt,ht))};Ro(),window.addEventListener("resize",Ro);const vh=(be,He,Re=100)=>{const $e=be.attributes.position.array,ot=be.attributes.orient.array,Mt=Math.min(Math.floor(He),Re-1),ht=Math.min(Math.ceil(He),Re-1),Et=He-Math.floor(He),$t=new q().fromArray($e,Mt*3).lerp(new q().fromArray($e,ht*3),Et),vn=new Fn().fromArray(ot,Mt*4).slerp(new Fn().fromArray(ot,ht*4),Et);return{p:$t,q:vn}},pa=()=>{var jr,tr,ki;if(!e)return;const be=window.innerHeight,He=window.scrollY||0;He!==de&&(Ie=He>de?1:-1,de=He),yi=On.range("blackFrameIn").ratio;const Re=On.range("blackFrameShow").ratio;bs=On.range("blackTitle").ratio,Tt=On.range("blackTunnel").ratio,ct!=null&&ct.classList.contains("is-windowed")&&Ro(),Kr=On.range("whiteTunnel").ratio,cn=On.between("whiteTunnel","whiteFrameOut").ratio,Ts=On.range("whiteFrameOut").ratio,Il=On.range("whiteFrameBreak").ratio,mh=On.between("whiteTunnel","whiteFrameBreak").ratio,Jt=On.between("whiteFrameBreak","astronautDrop").ratio,Ni=((jr=On.range("astronautWait"))==null?void 0:jr.ratio)??0,Zr=On.between("whiteFrameBreak","astronautWait").ratio;{const Ct=On.range("astronautDrop"),Hi=Math.max(0,Ct.pixel||0),Vi=window.innerWidth||1,Si=window.innerHeight||1,Mi=e.querySelector("#home-goal-image-out")||e.querySelector("#home-goal-image-out-inner"),wi=(tr=Mi==null?void 0:Mi.getBoundingClientRect)==null?void 0:tr.call(Mi),Ol=wi?wi.left+wi.width*.5-Vi*.5:0,zl=pe(Jt,0,1,0,Ol,Uu),Bl=-Hi,kl=1-Ts,Ah=Ct.ratio,pm=Ah<1&&wi?Vi*.5-wi.left-wi.width*.5:0,mm=Si*.2*(1-Math.min(1,Re));let Hl=wi?-(wi.top+mm+wi.height*.5-Si*.5):0;Ah>=1&&(Hl=Ot.clamp(Hl,-Si*.35,Si*.35)),Pl=pm*(1-kl)+zl,Dl=Hl*(1-kl)+Bl}if(wr=bs<1,un=Tt<1&&!wr,Gt=cn<=1&&!un&&!wr,ws=Gt?Gi(0,.15,mh):1,hn.sync({blackFrameInRatio:yi,blackTitleRatio:bs,blackTunnelRatio:Tt,whiteFrameRatio:Kr,whiteTunnelWaitRatio:Ni,astronautDropRatio:Jt,isWhiteTunnelActive:Gt,isBlackTunnelActive:un,isMobile:n}),zi){const Ct=e.querySelector("#home-goal-image-out-inner"),Hi=e.querySelector("#home-goal-image-out"),Vi=Hi==null?void 0:Hi.getBoundingClientRect(),Si=Ct==null?void 0:Ct.getBoundingClientRect();let Mi=Vi&&Vi.height>8?Vi.height:Si&&Si.height>8?Si.height:0;Mi<8&&(Mi=((Si==null?void 0:Si.width)||(Ct==null?void 0:Ct.clientWidth)||(ct==null?void 0:ct.clientWidth)||window.innerWidth*.7)*(1537/2e3));const wi=Math.hypot(window.innerWidth,be),Ol=Math.min((Vi==null?void 0:Vi.width)>8?Vi.width:Mi*(2e3/1537),Mi),zl=Ot.lerp(1,wi/Math.max(Ol,1),rn(Ts,0,1)),Bl=pe(Ts,0,1,-.3,0)*pe(Jt,0,.15,1,.2);zi.updateFromScroll({glassBreakRatio:Jt,astronautDropRatio:Jt,frameHeight:Mi,frameRotation:Bl,frameScale:zl})}Be.u_whiteTunnelRatio.value=cn,Be.u_showRatio.value=ws,Be.u_frameOutRatio.value=Il,it.uniforms.u_ratio.value=cn,St.uniforms.u_ratio.value=cn,it.uniforms.u_ratioInverse.value=1-cn,St.uniforms.u_ratioInverse.value=1-cn,Be.u_ambientColor.value.set(Gt&&Jt<1?"#6a7f94":"#566d80");const $e=new Ze("#ffffff");un||wr?$e.set("#000000"):Gt&&$e.set(Jt<1?"#ffffff":"#000000"),_t.uniforms.u_color.value.copy($e),R.background=null,D.setClearColor($e,hn.clearAlpha),Be.u_bgColor.value.copy($e),ct&&!ct.classList.contains("is-windowed")&&(ct.style.background=Jt>=1?"transparent":$e.getStyle());const ot=ct==null?void 0:ct.classList.contains("is-windowed");!(ct==null?void 0:ct.classList.contains("is-pinned"))||ot?(document.documentElement.style.background="",document.body.style.background=""):Gt&&Jt>=1||Gt?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):un||wr?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Xe.visible=Gt&&Jt<1,vi.visible=un,Kt.visible=!(Gt&&Jt<1),Nn.u_bgColor.value.copy($e);const ht=Ot.clamp(Re,0,1),Et=Ot.clamp(yi,0,1);ai.position.y=-(10*(1-ht)+2.5+30*Et),ai.scale.setScalar(pe(Et,0,.5,40,70)),$n.rotation.x=pe(Et,0,.5,0,-1),ai.visible=Et<1&&!Gt&&!un;const $t=document.getElementById("header");$t&&((ct==null?void 0:ct.classList.contains("is-pinned"))?Gt||Ni>0?$t.style.color="#000000":$t.style.color="#ffffff":$t.style.color="");const vn=e.dataset.goalPhase==="black-tunnel",zn=e.dataset.goalPhase==="white";(un&&!vn||Gt&&!zn)&&hn.markEfxSync();const fn=Gt;for(const Ct of je){const Hi=fn?Ct.userData.whiteMat:Ct.userData.blackMat;Ct.material!==Hi&&(Ct.material=Hi)}$=un?Gi(.2,.4,Tt):0,ae.value=$;for(const Ct of H)Ct.visible=!Gt&&$>.01;let Rn;if(Gt){const Ct=cn<1?pe(cn,0,1,0,79):pe(Jt,0,1,79,99);Rn=vh(l,Ct,100),Rn.p.y-=(n?0:.4)*ZS(Jt)}else Rn=vh(a,100*Iu(yi),100);if(Q.copy(Rn.p),J.copy(Rn.q),T.positionFrequency=.2,T.rotationFrequency=.15,T.positionAmplitude=0,T.rotationAmplitude=0,un){const Ct=Tt;T.positionFrequency=.2+.5*Ct,T.rotationFrequency=.15,T.positionAmplitude=5*Ct,T.rotationAmplitude=60*Ct}else Gt&&(T.positionFrequency=pe(Kr,0,.45,.5,.2),T.rotationFrequency=pe(Kr,0,.45,.4,.15),T.positionAmplitude=pe(Kr,0,.75,5,0),T.rotationAmplitude=pe(Kr,0,.75,15,0));We.visible=ws>.02;const Qt=window.innerHeight||1,ci=(ki=ct==null?void 0:ct.querySelector)==null?void 0:ki.call(ct,"[data-goal-screen-clip]"),Co=Math.max(1,Ni>.001||Jt>=1?Qt:ot&&(ci==null?void 0:ci.clientHeight)||(ct==null?void 0:ct.clientHeight)||Qt),br=yi<1?yi:Ni>.001||Jt>=1?1:1-Kr,Es=Ot.lerp(Co,Qt,br),As=A.distanceTo(C),ma=b/180*Math.PI,_a=Math.tan(ma/2)*As*2*(Qt/Math.max(Es,1));li=Math.atan(_a/2/As)*2/Math.PI*180,Gt?Fi=pe(cn,0,1,60,0):un?(Fi=Math.sin(Tt*10+ee)*(n?4.5:7.5)*Gi(0,.2,Tt),vi.position.z=-80*ho(.2,0,Tt)):(Fi=0,vi.position.z=-80),at=.08*Gi(.5,1,bs)+.02,cn>0&&(at*=pe(On.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),at=pe(Ni,0,.1,at,.05),ln=(1-jt)*Ie*2.5*pe(yi,0,.5,0,1)*pe(Ni,0,.25,1,0),Ll(),tt.u_frameIn.value=yi,tt.u_sunFactor.value=un?1-Gi(.1,.2,Tt):1,tt.u_blackTunnelRatio.value=un?Gi(.1,.3,Tt):0,tt.u_endRatio.value=un?Gi(.65,.9,Tt):0,tt.u_offsetZ.value=Yt.u_offsetZ.value;const Nt=pe(Jt,1,0,.2,1)*(Il>0?1:0);Be.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Nt);const Bi=ct.getBoundingClientRect();da=Bi.bottom>0&&Bi.top<be,da&&!gh&&wr&&(Ao=0,Oi=0),gh=da,e.dataset.goalPhase=Gt?"white":un?"black-tunnel":yi<.98||ct!=null&&ct.classList.contains("is-windowed")?"window":"title"},hm=be=>{if(!un){Yt.u_showRatio.value=0,hn.setEfxOffset(0,0);return}Yt.u_showRatio.value=VS(ho(0,.1,Tt));const He=Yt.u_outBloomFromToStrength.value;He.z=pe(Tt,.65,.75,0,.2),He.z=pe(Tt,.75,.85,He.z,.15),He.z=pe(Tt,.85,1,He.z,.15),He.x=pe(Tt,.75,.85,20,60),He.x=pe(Tt,.9,1,He.x,30);const Re=pe(Tt,.6,1,0,1,WS);Yt.u_blackTunnelTransformRatio.value=Re;const $e=Ie*be;Sr+=$e*ho(.1,.3,Tt)*pe(Re,0,.25,1,.5),Mr+=$e*pe(Re,0,.25,1.5,1);const ot=Sr,Mt=Math.floor(ot),ht=ot-Mt,Et=(Mt+Uu(ht))*qa+Mr*qa+Tt*qa*10,$t=-80*ho(.2,0,Tt);let vn=$t-h,zn=Et-xi;(Math.abs(zn)>8||Math.abs(vn)>20)&&(zn=0,vn=0),x=vn+zn,h=$t,xi=Et,vi.position.z=$t,Yt.u_offsetZ.value=Et,tt.u_offsetZ.value=Et,Yt.u_time.value=ee;const fn=Fs.length*pe(Tt,.2,1,0,1),Rn=Math.floor(fn),Qt=Math.min(Math.ceil(fn),Fs.length-1),Co=fn-Rn>.5?1:0;rt.set(Fs[Rn]),Ye.set(Fs[Qt]),rt.lerp(Ye,Co),Yt.u_color1.value.copy(rt),rt.set(Ac[Rn]),Ye.set(Ac[Qt]),rt.lerp(Ye,Co),Yt.u_color2.value.copy(rt);const br=n?.45:1;hn.setEfxOffset(x*pe(Tt,0,.2,0,1)*br,x*Re*.01*br),hn.setEfxAmount(pe(Tt,0,.25,.35,.85)*(n?.35:1)),Fi=Math.sin(Tt*10+ee)*(n?4.5:7.5)*Gi(0,.2,Tt)};let Nl=0;const fm=be=>{if(!Gt){qt.update({whiteTunnelWaitRatio:0,aspect:M.aspect}),Nl=cn;return}Qe.update(be),it.uniforms.u_time.value=ee,St.uniforms.u_time.value=ee,it.uniforms.u_fbm.value=X,St.uniforms.u_fbm.value=X;let He=cn-Nl;Math.abs(He)>.08&&(He=0);const Re=n?0:.7,$e=Ot.clamp(-He*pe(cn,0,.9,500,0,Lu)*Re,-1,1),ot=Ot.clamp(-He*pe(cn,0,.8,45,0,Lu)*Re,-1,1);hn.setEfxOffset($e,ot),hn.setEfxAmount(n?0:pe(cn,.75,1,1,0)),Nl=cn;const Mt=Gt||Ni>0?"#ffffff":"#000000",ht=n?Math.max(M.aspect,.95):Math.max(M.aspect,.01);qt.update({whiteTunnelWaitRatio:Jt>=1?Ni:0,aspect:ht,bg:Mt})},xh=()=>pa();window.addEventListener("scroll",xh,{passive:!0}),pa();const yh=be=>{var _a;const He=Math.min(.05,Math.max(0,be||.016666666666666666));if(_h=performance.now(),!da){if(ct){const Nt=ct.getBoundingClientRect();Nt.bottom>0&&Nt.top<window.innerHeight&&hn.render()}return}jt+=((Bt?1:0)-jt)*.1,te=pe(jt,0,1,1,.3)*He,te=pe(yi,0,1,He,te),te=pe(Zr,.5,.75,te,He),ee+=te,Be.u_time.value=ee,ln=(1-jt)*Ie*2.5*pe(yi,0,.5,0,1)*pe(Ni,0,.25,1,0),hm(te),fm(te),um(te),un&&(Fi=Math.sin(Tt*10+ee)*7.5*Gi(0,.2,Tt)),Ll();const Re=Jt,$e=pe(Re,0,.1,0,1)*pe(Re,.9,1,1,0);Be.u_loopLinearBlend.value=$e;const ot=pe(Re,.9,1,0,1,Iu);_e=ot>0;let Mt,ht,Et,$t=!0;if(Re<.5)Oi=0,Mt=Gi(-.3,1,bs)*.75,ht=0,Et=89,De.uniforms.u_cardOpacity.value=0;else{Oi===Number.POSITIVE_INFINITY&&Re>=1&&(Oi=0,Ao=0),Mt=pe(Re,.9,1,0,1),ht=140,Et=Math.min(W-1,287);const Nt=Math.min(2,Math.max(0,.5+Math.max(0,Ce.getFbm(ee*8,3)+.5)*4));De.uniforms.u_cardOpacity.value=Nt*ot,Re<1?(Oi=Math.max(0,Oi),$t=!1):($t=!0,Oi=0)}Oi===0&&(Ao+=te*Mt*Ul),$e===1&&(Ao=0);const vn=Et-ht+1,zn=Y[0];let Rn=(zn+Ao)*60%vn,Qt=Math.floor(Rn),ci=(Qt+1)%vn+ht;Qt+=ht,ci<Qt&&($t||(ci=Qt=ht,Ao=-zn,Oi=Number.POSITIVE_INFINITY));const Co=Rn-Math.floor(Rn);oe.setXYZ(0,Qt,ci,$t||ci>=Qt?Co:0),oe.needsUpdate=!0;const br=pe(Ts+Re,.9,2,90,139,$S),Es=Math.floor(br),As=Math.ceil(br),ma=br-Es;ce.setXYZ(0,Es,As,ma),ce.needsUpdate=!0,Je.visible=Re>=.95&&ws>.02,he=_e?he+te:0;{const Nt=ie.x,Bi=ie.y,jr=Math.floor(10*he%(Nt*(Bi+1))),tr=jr/(Nt*(Bi+1)),ki=ho(0,.15,tr)*ho(1,.9,tr);Be.u_faceLedLight.value=ki,De.uniforms.u_cardUvOffset.value.set(jr%Nt/Nt,(Bi-Math.floor(jr/Nt))/Bi)}if(Be.u_cardPosition.value.set(Le.getX(0),Le.getY(0)+.9,Le.getZ(0)),$>.01&&!Gt&&!wr){for(let Nt=0;Nt<Ue;Nt++){ne[Nt]=(ne[Nt]+.2*te)%1,Oi===0&&(Z[Nt]+=te*Mt*Ul);const tr=(Ot.lerp(0,Y[Nt+1],$)+Z[Nt])*60%vn;let ki=Math.floor(tr),Ct=(ki+1)%vn+ht;ki+=ht,Ct<ki&&!$t&&(Ct=ki=ht);const Hi=tr-Math.floor(tr);U.setXYZ(Nt,ki,Ct,Hi),E.setXYZ(Nt,Es,As,ma)}U.needsUpdate=!0,E.needsUpdate=!0}if((_a=hn.setScrollVelocity)==null||_a.call(hn,Math.abs(ln)+Math.abs(Ie)*.5),un){const Nt=Yt.u_resolution.value.clone();Xe.visible=!1,Kt.visible=!1,We.visible=ws>.02,Yt.u_feedbackTexture.value=Pe.texture,Yt.u_resolution.value.set(Ge.width,Ge.height),D.setRenderTarget(Ge),D.setClearColor(0,0),D.clear(),D.render(R,M),D.setRenderTarget(null),Yt.u_resolution.value.copy(Nt);const Bi=Pe;Pe=Ge,Ge=Bi,Yt.u_feedbackTexture.value=Pe.texture,tt.u_blackTunnelTexture.value=Pe.texture,Kt.visible=!0}D.setClearColor(Be.u_bgColor.value,hn.clearAlpha),hn.render()},Sh=be=>{Fl=requestAnimationFrame(Sh);const He=Math.min(.05,(be-_h)/1e3);be-Mh>50&&yh(He)};let Mh=0;const dm=be=>{Mh=performance.now(),yh(be)};return Fl=requestAnimationFrame(Sh),requestAnimationFrame(()=>{Ro(),pa(),hn.render()}),{resize:Ro,updateScroll:pa,tickFrame:dm,getAutoScrollSpeed:()=>ln,getGlassRatio:()=>(zi==null?void 0:zi.ratio)??0,getAstronautDropRatio:()=>Jt,getWhiteTunnelRatio:()=>cn,destroy(){cancelAnimationFrame(Fl),window.removeEventListener("resize",Ro),window.removeEventListener("scroll",xh),zi==null||zi.dispose(),Te.dispose(),Oe.dispose(),hn.destroy(),D.dispose()}}}function yM(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=ph(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const w=Array.from(p.querySelectorAll(".goal-word"));if(w.length<2){w.forEach(R=>{R._offsetX=0});return}w.forEach(R=>{R.style.transform="translateZ(0)"});let S=g;w.forEach(R=>{const A=R.getBoundingClientRect();R._domRect=A,S-=A.width});let y=0;const P=S/(w.length-1);w.forEach(R=>{R._offsetX=-R._domRect.left+_+y,y+=R._domRect.width+P})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,w=pe(_,0,.25,0,1);r.progress();const S=window.visualViewport,y=Math.round((S==null?void 0:S.height)||window.innerHeight),P=Math.round((S==null?void 0:S.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const N=i.getBoundingClientRect(),F=window.scrollY||0,W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+F,G=F>=W-1&&N.bottom>y,B=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",G),u&&(u.style.height=G?`${y}px`:"0px"),G&&!B?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!G&&B&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.height="",window.dispatchEvent(new Event("resize"))),G&&(t.style.top=`${P}px`,t.style.height=`${y}px`),t.style.background=w>.05||_>.01?"#ffffff":"#000000"}let R=pe(v,a,l,0,1);const A=R>0&&R<1;let C=pe(R,.5,1,1,o()?9:12,Iu);C*=pe(R,0,.15,.85,1,YS);let b=pe(R,.9,1,1,0);b*=pe(R,0,.05,0,1),b*=pe(g,0,.12,1,0);const M=pe(R,.4,.6,0,1,Uu);if(e.classList.toggle("is-on-black",w<.5),e.style.opacity=String(b),e.style.transform=`translate3d(-50%, -50%, 0) scale(${C})`,e.style.visibility=A&&b>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(N=>{const F=N._offsetX||0;N.style.transform=`translateX(${M*F}px)`}),s){const N=pe(g,.02,.15,1,0);s.style.opacity=String(N),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const D=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":D<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:w}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function $a(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function SM(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function ao(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function MM(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=ao(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=ao(document.getElementById("home-reel-desc"),2),l=ao(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),v.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(K=>{K.style.overflow="hidden",K.style.display="block",K.style.position="relative"}),f=[...$a(r,"word"),...$a(o,"word")],f.forEach(K=>{K.style.position="relative",K.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=$a(a,"word"),a.style.overflow="hidden"),_())})();const w=document.getElementById("home-featured"),S=ao(document.getElementById("home-featured-title"),2),y=ao(document.getElementById("home-featured-disclaimer"),2),P=ao(document.getElementById("home-featured-cta"),1);let R=[],A=[],C=!0;const b=()=>{C=!1,S&&(S._time=0,S._animating=!1),y&&(y._time=0,y._animating=!1),P&&(P._time=0,P._animating=!1),i()||(A.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),R.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",R=SM(S),y){const K=y.textContent.trim();y.textContent="";const ye=document.createElement("div");ye.className="line",ye.textContent=K,ye.style.transform="translate3d(0, 100%, 0)",ye.style.willChange="transform";const Se=document.createElement("div");Se.style.position="relative",Se.style.overflow="hidden",Se.appendChild(ye),y.appendChild(Se),A=[ye]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),b()}})();const D=ao(document.getElementById("home-goal-title"),2);let N=[];D&&(D.style.overflow="hidden",N=$a(D,"word"),N.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}));let F=0,V=!1,W=0;const G=K=>{if(!t||!e)return;if(!Mn(e).isActive){g=!0;return}g&&(g=!1,_());const Se=Mn(t),Le=Mn(s||a),oe=window.innerHeight*.1;if(t._time=rn(t._time+(t._animating?K:-K),0,2),a&&(a._time=rn(a._time+(a._animating?K:-K),0,2)),l&&(l._ratio=Qn(l._ratio+(l._animating?K:-K))),Se.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):f.forEach((ce,se)=>{let Te,Oe;se<2?(Te=pe(t._time-Math.abs(2-se)/10,.5,1.2,-m,0,dt),Oe=pe(t._time-se/10,0,1,100,0,dt)):(Te=0,Oe=pe(t._time-se/10,0,1,-100,0,dt)),ce.style.transform=`translate3d(${Te}px, ${Oe}%, 0)`}),n)){const ce=Se.showScreenOffset*-oe*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Le.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Le.showScreenOffset*-oe*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(se=>{se.style.opacity="1",se.style.transform="translate3d(0, 0, 0)"}):v.forEach((se,Te)=>{const Oe=pe(a._time-Te/100,0,1,.1,1,gl),Pe=pe(a._time-Te/100,0,1,100,0,gl);se.style.opacity=String(Oe),se.style.transform=`translate3d(0, ${Pe}%, 0)`})),l){const se=Le.showScreenOffset*-oe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${se}px) translate3d(0, ${pe(l._ratio,0,1,150,0,dt)}%, 0) rotate(${pe(l._ratio,0,1,10,0,dt)}deg)`,l.style.opacity=String(dt(l._ratio))):(l.style.transform=`translateY(${se}px)`,l.style.opacity="1")}}if(c){const ce=Mn(c),se=Qn(pe(ce.showScreenOffset,.05,.85,0,1,dt));c.style.opacity=String(se),c.style.transform=`translate3d(0, ${pe(se,0,1,80,0,dt)}px, 0) scale(${pe(se,0,1,.96,1,dt)})`}if(u){const ce=Mn(u);W=Qn(pe(ce.showScreenOffset,0,.7,0,1,dt)),u.style.opacity=String(.4+W*.6),u.style.transform=`translate3d(0, ${pe(W,0,1,60,0,dt)}px, 0) scale(${pe(W,0,1,.94,1,dt)})`,V=W>.9,F=rn(F+(V?K:-K*2),0,1.4),d.forEach((se,Te)=>{const Oe=pe(F-Te/10,0,.6,0,1,dt),Pe=pe(F-Te/10,0,.6,0,180,dt);se.style.transform=`scale(${Oe}) rotate(${Pe}deg)`,se.style.display="inline-block"})}},B=K=>{if(!w||!S)return;if(Mn(w).isActive){C&&b();const Se=Mn(S),Le=Mn(y),j=Mn(P);S._time=rn(S._time+(S._animating?K:-K),0,2),y&&(y._time=rn(y._time+(y._animating?K:-K),0,2)),P&&(P._time=rn(P._time+(P._animating?K:-K),0,1)),Se.screenRatio>-1&&(S._animating=!0,i()?R.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):R.forEach((oe,ce)=>{const se=pe(S._time*1.5-ce/20,0,1,1,0,dt),Te=pe(S._time*1.5-ce/20,0,1,10,0,dt);oe.style.transform=`translate3d(0, ${se}em, 0) rotate(${Te}deg)`})),Le.screenRatio>-1&&y&&(y._animating=!0,i()?A.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):A.forEach((oe,ce)=>{const se=pe(y._time-ce/20,0,1,100,0,dt);oe.style.transform=`translate3d(0, ${se}%, 0)`})),j.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${pe(P._time,0,1,150,0,dt)}%, 0) rotate(${pe(P._time,0,1,10,0,dt)}deg)`,P.style.opacity=String(dt(P._time))))}else C=!0},k=K=>{if(!D)return;Mn(D).screenRatio>-1&&(D._animating=!0),D._time=rn(D._time+(D._animating?K:-K),0,2),N.forEach((Se,Le)=>{const j=pe(D._time-Le/20,0,1,0,1,dt),oe=pe(D._time-Le/20,0,1,100,0,dt);Se.style.opacity=String(j),Se.style.transform=`translate3d(0, ${oe}%, 0)`})},le=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",le),{update(K){G(K),B(K),k(K)},destroy(){window.removeEventListener("resize",le)}}}const ld=28,wM=4,bM=8;function cd(){return window.innerWidth<812}function TM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var C,b;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((C=s==null?void 0:s.textContent)==null?void 0:C.trim())||"",u=((b=a==null?void 0:a.textContent)==null?void 0:b.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(M=>{const D=document.createElement("div");if(D.className="project-item-line-2-inner-list",D.style.transform="translateY(-400%)",M===" ")D.style.width="0.3em";else for(let N=0;N<4;N++){const F=document.createElement("span");F.textContent=M,D.appendChild(F)}a.appendChild(D),d.push(D)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,w=0,S=!1,y=0,P=0,R=0,A=0;return cd()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(M){const D=Mn(t),N=D.ratio>-1&&D.ratio<1;N&&(S=!0),S&&(_+=M);const F=Qn(pe(_,0,.85,0,1,dt)),V=pe(F,0,1,90,0,dt);if(t.style.opacity=String(F),t.style.transform=`translate3d(0, ${V}px, 0)`,s&&N){p+=M;const W=Math.min(c.length,Math.floor(ld*p)-wM),G=Math.min(c.length,Math.floor(ld*p));let B="";for(let k=0;k<Math.max(0,W);k++)B+=c[k];for(let k=0;k<G-Math.max(0,W);k++)B+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=B}if(N&&(w+=M*.8),g=Qn(g+(m?1:-1)*M*2.5),cd())d.forEach((W,G)=>{const B=Qn(g-Math.abs(G-d.length-1)/100),k=pe(B,0,1,0,1.5,dt);W.style.transform=`translate3d(1.5em, 0, 0) translateX(${k}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((W,G)=>{const B=pe(G,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),k=Qn(w-Math.cos(B)/bM),le=pe(k,0,1,500,0,GS),K=Qn(g-Math.abs(G-d.length-1)/100),ye=pe(K,0,1,0,1.5,dt);W.style.transform=`translate3d(${ye}em, -${le}%, 0)`}),l){const W=pe(g,.3,1,0,1,dt);l.style.transform=`translateX(${W}em)`}if(v=rn(v+(f?1:-1)*M,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(R=(Math.random()-.5)*pe(v,0,.6,1,0)*8,A=(Math.random()-.5)*pe(v,0,.6,1,0)*8):(R*=.92,A*=.92),y+=(R-y)*.2,P+=(A-P)*.2;const W=pe(v,0,1,1,1.06,dt);o.style.transform=`translate3d(${y}px, ${P}px, 0) scale(${W})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const ud=12,hd=6,EM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,AM=`
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
  float stepDist = dist / float(${ud});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${ud}; i++) {
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
  float numSampleInv = 1.0 / float(${hd});
  for (int i = 0; i < ${hd}; i++) {
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
`;function RM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function CM(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new Al({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(y){return n.remove(),console.warn("Featured WebGL unavailable",y),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Dn;const o=new Ms,s=new fh(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new hr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=y=>{c.x=y.clientX,c.y=y.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new Ii(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(y,P)=>{var se,Te,Oe;const R=y.dataset.id||((se=i[P])==null?void 0:se.id),A=y.querySelector(".project-item-main"),C=y.querySelector(".project-item-image img");C&&(C.style.opacity="0",C.setAttribute("aria-hidden","true"));const b=new Ze(y.dataset.colorBg||"#111111");let M,D;try{[M,D]=await Promise.all([a.loadAsync(`${l}${R}/home.webp`),a.loadAsync(`${l}${R}/home_depth.webp`)])}catch(Pe){console.warn("Featured WebGL textures failed for",R,Pe),C&&(C.style.opacity="1");return}M.colorSpace=Dn,M.wrapS=M.wrapT=Un,M.minFilter=pt,M.magFilter=pt,M.generateMipmaps=!1,D.colorSpace=nn,D.wrapS=D.wrapT=Un,D.minFilter=pt,D.magFilter=pt,D.generateMipmaps=!1;const N=new nt(((Te=M.image)==null?void 0:Te.width)||1024,((Oe=M.image)==null?void 0:Oe.height)||1024),F=new q(0,0,-1),V=new Fu(new q,1,.6,2),W=RM(1,2.2,.7,3);W.target=0;const G=new nt,B=new nt,k={u_texture:{value:M},u_depthTexture:{value:D},u_colorBg:{value:b},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:N},u_domWH:{value:new nt(1,1)},u_shiftXY:{value:G},u_focusPos:{value:F},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new nt(1,1)},u_globalRadius:{value:15},u_time:{value:0}},le=new Rt({uniforms:k,vertexShader:EM,fragmentShader:AM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),K=new It(d,le);K.frustumCulled=!1,K.renderOrder=10+P,K.visible=!1,o.add(K);let ye=!1,Se=0,Le=0,j=0;const oe=[0,.2,.3],ce=Pe=>{for(let Ge=0;Ge<oe.length;Ge++)if(Pe<oe[Ge])return Ge;return oe.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{ye=!0}),A==null||A.addEventListener("mouseleave",()=>{ye=!1})),f.push({mesh:K,uniforms:k,focusDyn:V,focusPos:F,zoomDyn:W,shiftXY:G,shiftXYTarget:B,index:P,main:A,dom:y,update(Pe,Ge,Be,tt,z){const ke=Mn(y);if(!(ke.ratio>-1&&ke.ratio<1)||!A){Le=0,K.visible=!1,k.u_showRatio.value=0;return}Le+=Pe;const je=A.getBoundingClientRect(),Ue=Math.max(1,je.width),qe=Math.max(1,je.height);k.u_domWH.value.set(Ue,qe),k.u_resolution.value.set(Ge,Be),k.u_time.value=tt,k.u_rippleStrength.value=Math.min(.15,z*.5),k.u_globalRadius.value=Math.min(Ue,qe)*.04;const ze=pe(Le,0,2,0,1,gl),U=P%2-.5,E=(1-ze)*U*-Ge*.1,H=(1-ze)*U*.1;K.position.set(je.left+Ue*.5+E,Be-(je.top+qe*.5),0),K.scale.set(Ue,qe,1),K.rotation.z=-H;const $=pe(Le,0,1.5,0,1,gl);k.u_showRatio.value=$,K.visible=$>.01;const ae=Se;if(Se=rn(Se+(ye?1:-1)*Pe,0,1),ae<Se){const Ce=ce(ae),he=ce(Se);he!==Ce&&B.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(pe(Se,0,.6,1,0)),he===oe.length&&B.multiplyScalar(.5)}else B.multiplyScalar(.95);G.lerp(B,.2);const ie=V.target;if(ye){const Ce=Se>0?pe(Se,0,.3,1,0)*qe*.75:0;ie.x=(c.x-je.left-Ue*.5+Math.cos(tt*20)*Ce)/Ue*-qe,ie.y=(c.y-je.top-qe*.5-Math.sin(tt*30)*Ce)/qe*qe,ie.z=.5}else ie.x=0,ie.y=0,ie.z=-1;V.update(Pe),F.copy(V.value),W.target=ye?1:0,W.update(Pe),k.u_zoomRatio.value=W.value,j=rn(j+(ye?.75:-1)*Pe,0,1),k.u_dofRangeOffset.value=Ot.lerp(0,-.5,j),k.u_saturation.value=0,k.u_brightness.value=0,k.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,w=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(y){_+=y;const P=window.scrollY,R=Math.abs(P-p)/Math.max(y,.001);p=P,w+=(Math.min(1,R*.002)-w)*.15;const C=Mn(e).isActive;if(n.style.visibility=C?"visible":"hidden",!!C){for(const b of f)b.update(y,v,g,_,w);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(y=>{y.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function PM(){return window.innerWidth<812}function DM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function LM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&DM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,w=!1,S=0;const y=R=>{var C;if(!R)return;const A=(C=R.play)==null?void 0:C.call(R);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:R=>{var D;if(!i)return;const A=e?Mn(e):null,C=n?Mn(n):null,b=PM(),M=b?!!(C!=null&&C.isActive):!!A&&A.showScreenOffset>0&&(C?C.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const N=(A==null?void 0:A.top)??0,F=(A==null?void 0:A.height)??1,V=window.innerHeight,W=N-(V-F)*.5,G=((C==null?void 0:C.top)??0)-(V-((C==null?void 0:C.height)??V))*.5;if(S=Qn(pe(window.scrollY+N,W,G,0,1)),S=Qn(pe((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,dt)),r&&(y(r),r.style.opacity=String(.35+S*.65)),t&&(y(t),t.style.opacity=String(1-S*.85)),e){const B=pe(S,0,1,1,1.08,dt);e.style.transform=`scale(${B})`,e.style.opacity=String(pe(S,.7,1,1,.15,dt))}if(n){const B=pe(S,0,1,48,0,dt),k=pe(S,0,1,.94,1,dt);n.style.transform=`translate3d(0, ${B}px, 0) scale(${k})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,w=S>.85}else(D=r==null?void 0:r.pause)==null||D.call(r),S=0,m=!1,v=!1,p=!1,w=!1;if(d=rn(d+(m?R:-R),0,1e9),f=Math.min(S,Qn(f+(v?R:-R))),u=d%l,o!=null&&o._splitted&&!b){const N=o._splitted.words;for(let F=0;F<N.length;F++){const V=N[F];c-u>l-1&&(V._randCharIndex=Math.round(Math.random()*(V._chars.length-1)));for(let W=0;W<V._chars.length;W++){const G=V._chars[W];let B=pe(f-F/4-W/20,0,.6,200,0,dt);W===V._randCharIndex&&(B+=pe(u-F/10,.5,1.3,0,-100,dt)),G._inner&&(G._inner.style.transform=`translate3d(0, ${B}%, 0)`)}}}c=u,g=rn(g+(p?R:-R*2),0,1.4),_=rn(_+(w?R:-R*2),0,1.4),s.forEach((N,F)=>{const V=pe(g-F/10,0,.6,0,1,dt),W=pe(g-F/10,0,.6,0,180,dt);N.style.transform=`scale(${V}) rotate(${W}deg)`}),a.forEach((N,F)=>{const V=pe(_-F/10,0,.6,0,1,dt),W=pe(_-F/10,0,.6,0,180,dt);N.style.transform=`scale(${V}) rotate(${W}deg)`})},destroy(){}}}const Cc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],IM=`
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
`,UM=`
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
`,FM=`
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
`,NM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function OM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function zM(){const i=OM(),e="/zyrax-studio/",t=await Promise.all(Cc.map(p=>Sn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new Ms,r=new Bn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let o;try{o=new Al({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}o.setClearColor(0,0);const s=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.5)),o.autoClear=!0;const a=[],l=new q,c=new q,u=new ys,d=new nt;for(let p=0;p<Cc.length;p++){const w=Cc[p],S=t[p],y=document.querySelector(w.sectionSelector);if(!y||!S)continue;const P=new gi,R=new gi;P.add(R),n.add(P);const A=new Rt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:w.aoThreshold},u_color0:{value:new Ze(w.color0)},u_color1:{value:new Ze(w.color1)},u_radius:{value:.008}},vertexShader:IM,fragmentShader:UM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),C=new It(S,A);C.frustumCulled=!1,C.renderOrder=200,R.add(C);const b=new Rt({uniforms:{u_color0:{value:new Ze(w.color0)},u_color1:{value:new Ze(w.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:FM,fragmentShader:NM,side:En,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new It(new Ii(2,2),b);M.frustumCulled=!1,M.renderOrder=200,R.add(M);const D=S.attributes.position.array,N=S.attributes.position.count,F=new Float32Array(N);for(let V=0;V<N;V++)F[V]=D[V*3+2];a.push({data:w,sectionEl:y,container:P,inner:R,mesh:C,mat:A,circle:M,circleMat:b,lineRatioArray:F,cpAttr:S.attributes.CP,cdAttr:S.attributes.Cd,count:N,offsetY:0,framePos:new q,frameQuat:new Fn,frameScale:new q(1,1,1)})}let f=1,m=1;const v=()=>{f=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(f*f+m*m),w=m/p;d.set(f/m*w,w),r.fov=60,r.aspect=f/m,r.position.set(f/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-m/2,0),r.updateProjectionMatrix(),o.setSize(f,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var z;const{data:w,sectionEl:S,container:y,inner:P,mat:R,circle:A,circleMat:C,lineRatioArray:b,cpAttr:M,cdAttr:D,count:N}=p,V=Mn(S).top+p.offsetY,W=m,G=w.scrollToRatioFactors;let B=Qn(-(V-G[0]*W)/(G[1]*W));B=qS(B);const k=f<=812,le=.008*pe(f,540,1920,2,1)*(k?.72:1),K=f/d.x,ye=m/d.y;let Se=w.margin.x,Le=w.margin.y;k&&w.id==="goal"&&(Se=.42,Le=-.35),P.position.x=Se*K,P.position.y=Le*ye-V,P.scale.set(K,ye,1),p._showSmooth==null&&(p._showSmooth=B),p._showSmooth+=(B-p._showSmooth)*.18,R.uniforms.u_showRatio.value=p._showSmooth,R.uniforms.u_radius.value=le;const j=(z=S.dataset)==null?void 0:z.goalPhase,oe=w.id==="goal"&&(j==="black-tunnel"||j==="white");y.position.copy(p.framePos),y.quaternion.copy(p.frameQuat),y.scale.copy(p.frameScale),y.updateMatrixWorld(!0),u.min.copy(w.boxMin),u.max.copy(w.boxMax),u.applyMatrix4(P.matrixWorld),y.visible=!oe&&u.max.y>-m&&u.min.y<0&&B>.001;let ce=0,se=0;for(let ke=0;ke<N;ke++)B>=b[ke]&&(ce=ke,ke===N-1?se=0:se=(B-b[ke])/(b[ke+1]-b[ke]||1));const Te=ce,Oe=Math.min(ce+1,N-1);l.fromArray(M.array,ce*3),c.fromArray(M.array,Oe*3),l.lerp(c,se);const Pe=D.array;let Ge=Pe[Te]*(1-se)+Pe[Oe]*se;Ge=.9+.1*Ge;const Be=Qn((B-(w.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(le,le,1),C.uniforms.u_ao.value=Math.min(1,Ge+1-Be);let tt=b[Te]*(1-se)+b[Oe]*se;tt=1-Math.pow(1-rn(tt,0,1),2),C.uniforms.u_mixRatio.value=tt},_=()=>{for(const p of a)g(p);o.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const w=a.find(S=>S.data.id==="goal");w&&(w.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:w=0,active:S=!1}={}){const y=a.find(D=>D.data.id==="goal");if(!y)return;if(!S){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const P=f*.5,R=-m*.5,A=new vt;A.makeTranslation(P,R,0);const C=new vt().makeRotationZ(-w),b=new vt().makeScale(p,p,1),M=new vt().makeTranslation(-P,-R,0);A.multiply(C).multiply(b).multiply(M),A.decompose(y.framePos,y.frameQuat,y.frameScale)},destroy(){window.removeEventListener("resize",v),o.dispose(),i.remove()}}}const fd=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function BM(i,e,t,n){var A;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const C=Array.from(e.childNodes);e.appendChild(f),C.forEach(b=>f.appendChild(b))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const C=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==C&&(m.src=C)};v();let g="",_=null,p=(A=e.parentElement)==null?void 0:A.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const w=()=>{const C=s||a;if(!C)return null;const b=C.getBoundingClientRect();return b.width<8||b.height<8?null:{left:b.left,top:b.top,width:b.width,height:b.height}},S=(C,b=0,M=0)=>{if(!C)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const D=window.innerWidth,N=window.innerHeight;e.style.position="fixed",e.style.left="0px",e.style.top="0px",e.style.width=`${D}px`,e.style.height=`${N}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const F=rn(M,0,1),V=C.left+C.width*d.left*(1-F),W=C.top+C.height*d.top*(1-F),G=C.width*d.width+(D-C.width*d.width)*F,B=C.height*d.height+(N-C.height*d.height)*F;f&&(f.style.inset="unset",f.style.left=`${V}px`,f.style.top=`${W}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,G)}px`,f.style.height=`${Math.max(1,B)}px`,f.style.borderRadius=F>.85?"0px":`${Math.min(C.width,C.height)*.03*(1-F)}px`,f.style.background="#000",f.style.transform=b?`rotate(${b}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${C.left}px`,m.style.top=`${C.top}px`,m.style.width=`${C.width}px`,m.style.height=`${C.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=b?`rotate(${b}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},y=()=>{var C;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(C=n==null?void 0:n.setGoalFrame)==null||C.call(n,{active:!1})},P=()=>{const C=t.range("blackFrameShow").ratio,b=t.range("blackFrameIn").ratio,M=t.range("blackTunnel").ratio,D=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),F=window.innerHeight,V=window.innerWidth,W=N.bottom>0&&N.top<F;_=w();const G=W&&M<.02&&D<.01&&b<.999;if(G&&_){let B=rn(b,0,1);if(_.top<F*.4){const Se=rn((F*.4-_.top)/(F*.65),0,1);B=Math.max(B,pe(Se,0,1,0,1))}const k={left:0,top:0,width:V,height:F},le={left:_.left+(k.left-_.left)*B,top:_.top+(k.top-_.top)*B,width:_.width+(k.width-_.width)*B,height:_.height+(k.height-_.height)*B},K=pe(B,0,1,0,.35)*(1-B);S(le,K,B);const ye=Math.max(pe(C,0,.2,.35,1),N.top<F*.85?1:0);if(e.style.opacity=String(ye),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(pe(B,0,.75,1,0)*ye),m.style.visibility=B>.92?"hidden":"visible"),o&&(o.style.visibility=B>.98?"hidden":"visible"),u&&(u.style.visibility=B>.55?"":"hidden"),l&&!fd){const Se=pe(B,0,1,0,F*.12);l.style.transform=`translate3d(0, ${-Se}px, 0)`}if(c&&!fd&&_){const Se=i.querySelector("#home-goal-context"),Le=(Se==null?void 0:Se.getBoundingClientRect().top)??0,j=Se&&parseFloat(getComputedStyle(Se).paddingTop)||0,oe=_.top-Le-j+_.height*.5;c.style.top=`${oe}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:B>.01,scale:pe(B,0,1,1,2.4),rotation:K}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:B,blackFrameShow:C,frameRect:_}}return g==="window"?(y(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),g="full",window.dispatchEvent(new Event("resize"))):!G&&o&&M>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden")),(!W||N.top>F*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:b,blackFrameShow:C,frameRect:_}},R=()=>{v(),P()};return window.addEventListener("resize",R),{update:P,destroy(){window.removeEventListener("resize",R),m==null||m.remove(),y()},getFrameRect:()=>_}}const dd="/zyrax-studio/assets/audios/",kM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},HM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function pd(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function VM(){const i={};for(const[w,S]of Object.entries(kM))i[w]=pd(`${dd}${S}`,{loop:!0,volume:0});const e={};for(const[w,S]of Object.entries(HM))e[w]=S.map(y=>pd(`${dd}${y}`,{loop:!1,volume:.85}));const t=!0;let n=!1,r=null,o=null,s=null,a=1,l=1.2;const c={hover:0,click:0,focus:0,page:0,glass:0},u=async()=>{if(!n){n=!0;try{const w=i.generic;w.volume=0,await w.play(),w.pause(),w.currentTime=0,r||f("generic",.8)}catch{n=!1}}},d=w=>{if(!n)return;const S=e[w];if(!(S!=null&&S.length))return;const y=c[w]%S.length;c[w]=y+1;const P=S[y].cloneNode();P.volume=w==="focus"?.4:w==="glass"?1:.85,P.play().catch(()=>{})},f=(w,S=1.2)=>{if(!i[w]||r===w)return;o=r,s=w,a=0,l=Math.max(.05,S),r=w;const y=i[w];y.volume=0,n&&y.play().catch(()=>{})},m=w=>{if(n)if(s&&a<1){a=Math.min(1,a+w/l);const S=a*a*(3-2*a);o&&i[o]&&(i[o].volume=1-S,S>=1&&(i[o].pause(),i[o].currentTime=0)),i[s]&&(i[s].volume=S,i[s].paused&&i[s].play().catch(()=>{})),S>=1&&(o=null,s=null)}else r&&i[r]&&(i[r].volume=1,i[r].paused&&i[r].play().catch(()=>{}))};let v=0;const g=w=>{w==="window"?f("generic",1):w==="title"||w==="black-tunnel"?f("cinematic_0",1.4):w==="white"?f("cinematic_3",1.6):f("generic",1.2)},_=({blackFrameInRatio:w=0,blackTunnelRatio:S=0,whiteTunnelRatio:y=0,astronautDropRatio:P=0}={})=>{w>.5&&S===0||S>0&&y===0?(v=0,f("cinematic_0",.8)):y>0&&P<=.8?f("cinematic_3",.8):y>0&&P>.8&&f("generic_end",1),P===0?v=1:v===1&&(d("glass"),v=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(w=>{w.addEventListener("mouseenter",()=>d("hover")),w.addEventListener("click",()=>d("click"))});const p=()=>{u()};return window.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("keydown",p,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:g,syncTunnelAudio:_,playSfx:d,setEnabled(){},get enabled(){return t},destroy(){Object.values(i).forEach(w=>{w.pause(),w.src=""})}}}const jo=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,Cl=()=>{var e;const i=((e=window.visualViewport)==null?void 0:e.height)||window.innerHeight;document.documentElement.style.setProperty("--vh",`${i*.01}px`)};Cl();window.addEventListener("resize",Cl);var xd;(xd=window.visualViewport)==null||xd.addEventListener("resize",Cl);var yd;(yd=window.visualViewport)==null||yd.addEventListener("scroll",Cl);const Ki=new Em({duration:jo?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!jo,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:jo?.9:.82,touchMultiplier:jo?1:1.1});window.lenis=Ki;let Ns=0,Os=0,Zs=!1,am=0;window.addEventListener("wheel",()=>{am=performance.now(),Zs=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Zs=!0},{passive:!0});const GM="/zyrax-studio/assets/projects/",md=document.getElementById("project-list");md&&(md.innerHTML=Mp.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${GM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const WM=document.getElementById("hero-canvas"),XM=document.getElementById("home-hero-visual-container"),Ur=document.getElementById("home-hero"),Pc=document.getElementById("home-hero-title"),Dc=document.getElementById("home-hero-visual-container"),_d=document.getElementById("home-hero-scroll-container"),Ln=document.getElementById("home-goal"),qM=document.getElementById("goal-tunnel-canvas"),YM=document.getElementById("home-goal-tunnel-title"),lm=document.getElementById("home-goal-tunnel-sticky"),$M=yM(Ln,YM,lm),ZM=Ln?ph(Ln):null,xl=VM();let Dt=null,gd="";const KM=MM(),jM=TM(),JM=LM();let pi=null,ol=null;const QM=Ln?BM(Ln,lm,ZM,{setGoalFrame:(...i)=>{var e;return(e=pi==null?void 0:pi.setGoalFrame)==null?void 0:e.call(pi,...i)}}):{update(){}};let vd=performance.now();eh.ticker.add(i=>{var n,r,o,s;const e=performance.now(),t=Math.min(.05,(e-vd)/1e3);if(vd=e,!jo&&(Dt!=null&&Dt.getAutoScrollSpeed&&(Ns=Dt.getAutoScrollSpeed()),e-am>80&&Math.abs(Ns)>.01&&(Zs=!1),Os+=Math.abs(Ns)>0&&!Zs?t:-1,Os=Math.max(0,Math.min(1,Os)),!Zs&&Os>0&&Math.abs(Ns)>.01)){const l=window.innerHeight,c=Ns*l*t*Os*.55,u=(Ki.animatedScroll??Ki.scroll??window.scrollY)+c;Ki.scrollTo(u,{immediate:!0,force:!0})}Ki.raf(i*1e3),KM.update(t),jM.update(t),ol==null||ol.update(t),JM.update(t),pi==null||pi.update(),(n=Dt==null?void 0:Dt.tickFrame)==null||n.call(Dt,t),xl.update(t),Dt!=null&&Dt.getAstronautDropRatio&&xl.syncTunnelAudio({blackFrameInRatio:((r=Ln==null?void 0:Ln.dataset)==null?void 0:r.goalPhase)==="window"?0:1,blackTunnelRatio:((o=Ln==null?void 0:Ln.dataset)==null?void 0:o.goalPhase)==="black-tunnel"?1:0,whiteTunnelRatio:((s=Dt.getWhiteTunnelRatio)==null?void 0:s.call(Dt))??0,astronautDropRatio:Dt.getAstronautDropRatio()??0})});eh.ticker.lagSmoothing(0);Ki.on("scroll",()=>{var o,s;$M.updateScroll(),QM.update(),Dt==null||Dt.updateScroll(),pi==null||pi.update();const i=((o=Ln==null?void 0:Ln.dataset)==null?void 0:o.goalPhase)||"";if(i&&i!==gd&&(gd=i,xl.syncGoalPhase(i)),Dt!=null&&Dt.getAstronautDropRatio&&xl.syncTunnelAudio({whiteTunnelRatio:((s=Dt.getWhiteTunnelRatio)==null?void 0:s.call(Dt))??0,astronautDropRatio:Dt.getAstronautDropRatio()??0}),!Ur)return;const e=Ur.getBoundingClientRect(),t=window.innerHeight,n=Math.max(0,Math.min(1,-e.top/Math.max(e.height,1))),r=Math.max(0,Math.min(1,(t-e.bottom)/t));Pc&&(Pc.style.transform=`translate3d(0, ${n*-12}vh, 0)`,Pc.style.opacity=String(Math.max(0,1-n*1.2))),Dc&&(Dc.style.transform=`translate3d(0, ${n*18}vh, 0) scale(${1-n*.08})`,Dc.style.opacity=String(Math.max(0,1-Math.max(n,r)*.85))),_d&&(_d.style.opacity=String(Math.max(0,1-n*2)))});zM().then(i=>{pi=i}).catch(i=>console.error("Scroll lines failed",i));xM(qM,Ln).then(i=>{Dt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{kS(WM,XM).then(()=>Ur==null?void 0:Ur.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Ur==null||Ur.classList.add("is-in")})});jo||CM(Mp).then(i=>{ol=i}).catch(i=>console.error("Featured WebGL failed",i));function cm(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}cm(document.getElementById("home-hero-title"));cm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const ew=document.querySelectorAll(".home-hero-scroll-container-cross");ew.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const Lc=document.getElementById("header"),Ic=document.getElementById("header-container"),Nr=document.getElementById("header-background"),Uc=document.getElementById("header-menu"),ss=document.getElementById("header-right-menu-btn");let fr=!1;const fa=i=>{fr=!!i,Lc==null||Lc.classList.toggle("--menu-opened",fr),Ic==null||Ic.classList.toggle("--opened",fr),Nr==null||Nr.classList.toggle("--opened",fr),Uc==null||Uc.classList.toggle("--opened",fr),ss==null||ss.classList.toggle("--opened",fr),Nr&&(Nr.style.opacity=fr?window.innerWidth>=1e3?"0.2":"1":"0")};ss==null||ss.addEventListener("click",i=>{i.stopPropagation(),fa(!fr)});Nr==null||Nr.addEventListener("click",()=>fa(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");fa(!1),t==="contact"?(e.preventDefault(),Ki.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Ki.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!fr)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||fa(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&fa(!1)});var Sd;(Sd=document.querySelector("[data-reel]"))==null||Sd.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Md;(Md=document.querySelector("#end-bottom"))==null||Md.addEventListener("click",i=>{i.preventDefault(),Ki.scrollTo("#footer-section")});var wd;(wd=document.querySelector("#footer-bottom-up"))==null||wd.addEventListener("click",i=>{i.preventDefault(),Ki.scrollTo(0)});
