var h0=Object.defineProperty;var f0=(i,e,t)=>e in i?h0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ze=(i,e,t)=>f0(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var _f="1.3.27";function hp(i,e,t){return Math.max(i,Math.min(e,t))}function d0(i,e,t){return(1-t)*i+t*e}function p0(i,e,t,n){return d0(i,e,1-Math.exp(-t*n))}function m0(i,e){return(i%e+e)%e}var _0=class{constructor(){Ze(this,"isRunning",!1);Ze(this,"value",0);Ze(this,"from",0);Ze(this,"to",0);Ze(this,"currentTime",0);Ze(this,"lerp");Ze(this,"duration");Ze(this,"easing");Ze(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=hp(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=p0(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function g0(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var v0=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ze(this,"width",0);Ze(this,"height",0);Ze(this,"scrollHeight",0);Ze(this,"scrollWidth",0);Ze(this,"debouncedResize");Ze(this,"wrapperResizeObserver");Ze(this,"contentResizeObserver");Ze(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ze(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ze(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=g0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fp=class{constructor(){Ze(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const x0=100/6,Rr={passive:!1};function gf(i,e){return i===1?x0:i===2?e:1}var y0=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ze(this,"touchStart",{x:0,y:0});Ze(this,"lastDelta",{x:0,y:0});Ze(this,"window",{width:0,height:0});Ze(this,"emitter",new fp);Ze(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ze(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ze(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ze(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=gf(n,this.window.width),o=gf(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ze(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rr),this.element.addEventListener("touchstart",this.onTouchStart,Rr),this.element.addEventListener("touchmove",this.onTouchMove,Rr),this.element.addEventListener("touchend",this.onTouchEnd,Rr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Rr),this.element.removeEventListener("touchstart",this.onTouchStart,Rr),this.element.removeEventListener("touchmove",this.onTouchMove,Rr),this.element.removeEventListener("touchend",this.onTouchEnd,Rr)}};const vf=i=>Math.min(1,1.001-2**(-10*i));var S0=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:M=!1,anchors:S=!1,autoToggle:L=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:y=!0}={}){Ze(this,"_isScrolling",!1);Ze(this,"_isStopped",!1);Ze(this,"_isLocked",!1);Ze(this,"_preventNextNativeScrollEvent",!1);Ze(this,"_resetVelocityTimeout",null);Ze(this,"_rafId",null);Ze(this,"_isDraggingSelection",!1);Ze(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ze(this,"isTouching");Ze(this,"isIos");Ze(this,"time",0);Ze(this,"userData",{});Ze(this,"lastVelocity",0);Ze(this,"velocity",0);Ze(this,"direction",0);Ze(this,"options");Ze(this,"targetScroll");Ze(this,"animatedScroll");Ze(this,"animate",new _0);Ze(this,"emitter",new fp);Ze(this,"dimensions");Ze(this,"virtualScroll");Ze(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ze(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ze(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ze(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ze(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ze(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,M;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((M=v.hasAttribute)==null?void 0:M.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ze(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ze(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=_f,window.lenis||(window.lenis={}),window.lenis.version=_f,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=vf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:M,anchors:S,autoToggle:L,allowNestedScroll:R,naiveDimensions:P,stopInertiaOnNavigate:w,respectReducedMotion:y},this.dimensions=new v0(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new y0(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=hp(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=vf:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(i);if(r.computedStyle=R,o=["auto","overlay","scroll"].includes(R.overflowX),s=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,M,S,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,M=o,S=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,M=s,S=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&M&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?m0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function ur(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function dp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ha={duration:.5,overwrite:!1,delay:0},ah,gn,Vt,gi=1e8,Ut=1/gi,au=Math.PI*2,M0=au/4,w0=0,pp=Math.sqrt,b0=Math.cos,T0=Math.sin,dn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},lh=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},qn=function(e){return e!==!1},ch=function(){return typeof window<"u"},ka=function(e){return Kt(e)||dn(e)},mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,E0=/random\([^)]+\)/g,A0=/,\s*/g,xf=/(?:-?\.?\d|\.)+/gi,_p=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gp=/[+-]=-?[.\d]+/,R0=/[^,'"\[\]\s]+/gi,C0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Hi,lu,uh,ui={},Cl={},vp,xp=function(e){return(Cl=xs(e,ui))&&jn},hh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},yp=function(e,t){return e&&(ui[e]=t)&&Cl&&(Cl[e]=t)||ui},da=function(){return 0},P0={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},D0={suppressEvents:!0},fh={},Gr=[],cu={},Sp,ni={},uc={},yf=30,xl=[],dh="",ph=function(e){var t=e[0],n,r;if(Zi(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=xl.length;r--&&!xl[r].targetTest(t););n=xl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Gp(e[r],n)))||e.splice(r,1);return e},Ao=function(e){return e._gsap||ph(vi(e))[0]._gsap},Mp=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():lh(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},L0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pl=function(){var e=Gr.length,t=Gr.slice(0),n,r;for(cu={},Gr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},mh=function(e){return!!(e._initted||e._startAt||e.add)},wp=function(e,t,n,r){Gr.length&&!gn&&Pl(),e.render(t,n,!!(gn&&t<0&&mh(e))),Gr.length&&!gn&&Pl()},bp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(R0).length<2?t:dn(e)?e.trim():e},Tp=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},I0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},xs=function(e,t){for(var n in t)e[n]=t[n];return e},Sf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Dl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ia=function(e){var t=e.parent||qt,n=e.keyframes?I0(Pn(e.keyframes)):hi;if(qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},U0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ep=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Xl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},F0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uu=function(e,t,n,r){return e._startAt&&(gn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},N0=function i(e){return!e||e._ts&&i(e.parent)},Mf=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},Ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ql=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Yl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ql(e),n._dirty||Ro(n,e)),e},Ap=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ll(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},Wi=function(e,t,n,r){return t.parent&&qr(t),t._start=Xt((vr(n)?n:n||e!==qt?pi(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ep(e,t,"_first","_last",e._sort?"_start":0),hu(t)||(e._recent=t),r||Ap(e,t),e._ts<0&&Yl(e,e._tTime),e},Rp=function(e,t){return(ui.ScrollTrigger||hh("scrollTrigger",t))&&ui.ScrollTrigger.create(t,e)},Cp=function(e,t,n,r,o){if(gh(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sp!==ii.frame)return Gr.push(e),e._lazy=[o,r],1},O0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},hu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},z0=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&O0(e)&&!(!e._initted&&hu(e))||(e._ts<0||e._dp._ts<0)&&!hu(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ma(0,e._tDur,t),u=ys(l,a),e._yoyo&&u&1&&(s=1-s),u!==ys(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||gn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&Cp(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&uu(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&qr(e,1),!n&&!gn&&(oi(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},B0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ss=function(e,t,n,r){var o=e._repeat,s=Xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Xt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&Yl(e,e._tTime=e._tDur*a),e.parent&&ql(e),n||Ro(e.parent,e),e},wf=function(e){return e instanceof Wn?Ro(e):Ss(e,e._dur)},k0={_start:0,endTime:da,totalDuration:da},pi=function i(e,t,n){var r=e.labels,o=e._recent||k0,s=e.duration()>=gi?o.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ra=function(e,t,n){var r=vr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;s.immediateRender=qn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new nn(t[0],s,t[o+1])},jr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!dn(e)||!(t=C0.exec(e))?"":t[1]},H0=function(e,t,n){return jr(n,function(r){return Ma(e,t,r)})},fu=[].slice,Pp=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Hi},V0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return dn(r)&&!t||Pp(r,1)?(o=n).push.apply(o,vi(r)):n.push(r)})||n},vi=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):dn(e)&&!n&&(lu||!Ms())?fu.call((t||uh).querySelectorAll(e),0):Pn(e)?V0(e,n):Pp(e)?fu.call(e,0):e?[e]:[]},du=function(e){return e=vi(e)[0]||fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?fa("Invalid scope")||uh.createElement("div"):e)}},Dp=function(e){return e.sort(function(){return .5-Math.random()})},Lp=function(e){if(Kt(e))return e;var t=Zi(e)?e:{each:e},n=Co(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return dn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,M,S,L,R,A,P,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,gi])[1],!w){for(A=-gi;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=s[g]=[],p=l?Math.min(w,g)*u-.5:r%w,b=w===gi?0:l?g*d/w-.5:r/w|0,A=0,P=gi,R=0;R<g;R++)M=R%w-p,S=b-(R/w|0),_[R]=L=c?Math.abs(c==="y"?S:M):pp(M*M+S*S),L>A&&(A=L),L<P&&(P=L);r==="random"&&Dp(_),_.max=A-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Rn(t.amount||t.each)||0,n=n&&g<0?t_(n):n}return g=(_[f]-_.min)/_.max||0,Xt(_.b+(n?n(g):g)*_.v)+_.u}},pu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(vr(n)?0:Rn(n))}},Ip=function(e,t){var n=Pn(e),r,o;return!n&&Zi(e)&&(r=n=e.radius||gi,e.values?(e=vi(e.values),(o=!vr(e[0]))&&(r*=r)):e=pu(e.increment)),jr(t,n?Kt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=gi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||vr(s)?u:u+Rn(s)}:pu(e))},Up=function(e,t,n,r){return jr(Pn(e)?!t:n===!0?!!(n=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},G0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},W0=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},X0=function(e,t,n){return Np(e,t,0,1,n)},Fp=function(e,t,n){return jr(n,function(r){return e[~~t(r)]})},q0=function i(e,t,n){var r=t-e;return Pn(e)?Fp(e,i(0,e.length),t):jr(n,function(o){return(r+(o-e)%r)%r+e})},Y0=function i(e,t,n){var r=t-e,o=r*2;return Pn(e)?Fp(e,i(0,e.length-1),t):jr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},pa=function(e){return e.replace(E0,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(A0);return Up(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Np=function(e,t,n,r,o){var s=t-e,a=r-n;return jr(o,function(l){return n+((l-e)/s*a||0)})},$0=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=dn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=xs(Pn(e)?[]:{},e));if(!u){for(l in t)_h.call(a,e,l,"get",t[l]);o=function(v){return yh(v,a)||(s?e.p:e)}}}return jr(n,o)},bf=function(e,t,n){var r=e.labels,o=gi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},oi=function(e,t,n){var r=e.vars,o=r[t],s=Vt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Gr.length&&Pl(),a&&(Vt=a),u=l?o.apply(c,l):o.call(c),Vt=s,u},Qs=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&oi(e,"onInterrupt"),e},ls,Op=[],zp=function(e){if(e)if(e=!e.name&&e.default||e,ch()||e.headless){var t=e.name,n=Kt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:da,render:yh,add:_h,kill:h_,modifier:u_,rawVars:0},s={targetTest:0,get:0,getSetter:xh,aliases:{},register:0};if(Ms(),e!==r){if(ni[t])return;hi(r,hi(Dl(e,o),s)),xs(r.prototype,xs(o,Dl(e,s))),ni[r.prop=t]=r,e.targetTest&&(xl.push(r),fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yp(t,r),e.register&&e.register(jn,r,$n)}else Op.push(e)},It=255,ea={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},hc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},Bp=function(e,t,n){var r=e?vr(e)?[e>>16,e>>8&It,e&It]:0:ea.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])r=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&It,r&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(xf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=hc(l+1/3,o,s),r[1]=hc(l,o,s),r[2]=hc(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(_p),n&&r.length<4&&(r[3]=1),r}else r=e.match(xf)||ea.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/It,s=r[1]/It,a=r[2]/It,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},kp=function(e){var t=[],n=[],r=-1;return e.split(Wr).forEach(function(o){var s=o.match(as)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},Tf=function(e,t,n){var r="",o=(e+r).match(Wr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Bp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=kp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Wr,"1").split(as),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Wr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Wr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Z0=/hsl[a]?\(/,Hp=function(e){var t=e.join(" "),n;if(Wr.lastIndex=0,Wr.test(t))return n=Z0.test(t),e[1]=Tf(e[1],n),e[0]=Tf(e[0],n,kp(e[1])),!0},ma,ii=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,M,S,L,R;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,M=L-s,(M>0||b)&&(R=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,s+=M+(M>=o?4:o-M),S=1),b||(l=c(g)),S)for(m=0;m<a.length;m++)a[m](L,f,R,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){vp&&(!lu&&ch()&&(Hi=lu=window,uh=Hi.document||{},ui.gsap=jn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(jn.version),xp(Cl||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Op.forEach(zp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},ma=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=da},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var M=p?function(S,L,R,A){_(S,L,R,A),d.remove(M)}:_;return d.remove(_),a[b?"unshift":"push"](M),Ms(),M},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),Ms=function(){return!ma&&ii.wake()},yt={},K0=/^[\d.\-M][\d.\-,\s]/,j0=/["']/g,J0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(j0,"").trim():+c,r=l.substr(a+1).trim();return t},Q0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},e_=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[J0(t[1])]:Q0(e).split(",").map(bp)):yt._CE&&K0.test(e)?yt._CE("",e):n},t_=function(e){return function(t){return 1-e(1-t)}},Co=function(e,t){return e&&(Kt(e)?e:yt[e]||e_(e))||t},Uo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Yn(e,function(a){yt[a]=ui[a]=o,yt[s=a.toLowerCase()]=n;for(var l in o)yt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=o[l]}),o},Vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/au*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*T0((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Vp(a);return o=au/o,l.config=function(c,u){return i(e,c,u)},l},dc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Vp(n);return r.config=function(o){return i(e,o)},r};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Uo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Uo("Elastic",fc("in"),fc("out"),fc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Uo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Uo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Uo("Circ",function(i){return-(pp(1-i*i)-1)});Uo("Sine",function(i){return i===1?1:-b0(i*M0)+1});Uo("Back",dc("in"),dc("out"),dc());yt.SteppedEase=yt.steps=ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Ut;return function(a){return((r*Ma(0,s,a)|0)+o)*n}}};ha.ease=yt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return dh+=i+","+i+"Params,"});var Gp=function(e,t){this.id=w0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mp,this.set=t?t.getSetter:xh},_a=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ss(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),ma||ii.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ms(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Yl(this,n),!o._dp||o.parent||Ap(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?ys(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),ql(this),F0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Xt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=D0);var r=gn;return gn=n,mh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),qn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,qn(r)),this._dur||(this._zTime=-Ut),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Ut)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Kt(n)?n:Tp,l=function(){var u=r.then;r.then=null,o&&o(),Kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Qs(this)},i})();hi(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Wn=(function(i){dp(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=qn(n.sortChildren),qt&&Wi(n.parent||qt,ur(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Rp(ur(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return ra(0,arguments,this),this},t.from=function(r,o,s){return ra(1,arguments,this),this},t.fromTo=function(r,o,s,a){return ra(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,ia(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new nn(r,o,pi(this,s),1),this},t.call=function(r,o,s){return Wi(this,nn.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new nn(r,s,pi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,ia(s).immediateRender=qn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,ia(a).immediateRender=qn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,M,S,L,R,A;if(this!==qt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,M=this._ts,p=!M,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Xt(u%_),u===l?(g=this._repeat,f=c):(L=Xt(u/_),g=~~L,g&&g===L&&(f=c,g--),f>c&&(f=c)),L=ys(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),R&&g&1&&(f=c-f,A=1),g!==L&&!this._lock){var P=R&&L&1,w=P===(R&&g&1);if(g<L&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Xt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=B0(this,Xt(a),Xt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!L&&(oi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-Ut);break}}m=v}else{m=this._last;for(var y=r<0?r:f;m;){if(v=m._prev,(m._act||y<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,o,s||gn&&mh(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=y?-Ut:Ut);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-Ut)._zTime=f>=a?1:-1,this._ts))return this._start=S,ql(this),this.render(r,o,s);this._onUpdate&&!o&&oi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(oi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(vr(o)||(o=pi(this,o,r)),!(r instanceof _a)){if(Pn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(dn(r))return this.addLabel(r,o);if(Kt(r))r=nn.delayedCall(0,r);else return this}return this!==r?Wi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return dn(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(r.parent===this&&Xl(this,r),r===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=pi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=nn.delayedCall(0,o||da,s);return a.data="isPause",this._hasPause=1,Wi(this,a,pi(this,r))},t.removePause=function(r){var o=this._first;for(r=pi(this,r);o;)o._start===r&&o.data==="isPause"&&qr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)kr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=vi(r),l=this._first,c=vr(o),u;l;)l instanceof nn?L0(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=pi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=nn.to(s,hi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Ut,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&Ss(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,hi({startAt:{time:pi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),bf(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),bf(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Xt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return Ro(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ro(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=gi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Wi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Xt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Ss(s,s===qt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(qt._ts&&(wp(qt,Ll(r,qt)),Sp=ii.frame),ii.frame>=yf){yf+=ai.autoSleep||120;var o=qt._first;if((!o||!o._ts)&&ai.autoSleep&&ii._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ii.sleep()}}},e})(_a);hi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var n_=function(e,t,n,r,o,s,a){var l=new $n(this._pt,e,t,0,1,Zp,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=pa(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(cc)||[];d=cc.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?fs(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=cc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(gp.test(r)||p)&&(l.e=0),this._pt=l,l},_h=function(e,t,n,r,o,s,a,l,c,u){Kt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Kt(d)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Kt(d)?c?a_:Yp:vh,v;if(dn(r)&&(~r.indexOf("random(")&&(r=pa(r)),r.charAt(1)==="="&&(v=fs(f,r)+(Rn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||mu)return!isNaN(f*r)&&r!==""?(v=new $n(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?c_:$p,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&hh(t,r),n_.call(this,e,t,f,r,m,l||ai.stringFilter,c))},i_=function(e,t,n,r,o){if(Kt(e)&&(e=oa(e,o,t,n,r)),!Zi(e)||e.style&&e.nodeType||Pn(e)||mp(e))return dn(e)?oa(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=oa(e[a],o,t,n,r);return s},Wp=function(e,t,n,r,o,s){var a,l,c,u;if(ni[e]&&(a=new ni[e]).init(o,a.rawVars?t[e]:i_(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new $n(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==ls))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kr,mu,gh=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,M=e._overwrite==="auto"&&!ah,S=e.timeline,L=r.easeReverse||d,R,A,P,w,y,C,N,F,z,B,H,V,k;if(S&&(!f||!o)&&(o="none"),e._ease=Co(o,ha.ease),e._rEase=L&&(Co(L)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(F=_[0]?Ao(_[0]).harness:0,V=F&&r[F.prop],R=Dl(r,fh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?vl:P0),g._lazy=0),s){if(qr(e._startAt=nn.set(_,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!m)&&e._startAt.revert(vl),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=hi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&qn(l),immediateRender:a,stagger:0,parent:p},R),V&&(P[F.prop]=V),qr(e._startAt=nn.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&qn(l)||l&&!v,A=0;A<_.length;A++){if(y=_[A],N=y._gsap||ph(_)[A]._gsap,e._ptLookup[A]=B={},cu[N.id]&&Gr.length&&Pl(),H=b===_?A:b.indexOf(y),F&&(z=new F).init(y,V||R,e,H,b)!==!1&&(e._pt=w=new $n(e._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(se){B[se]=w}),z.priority&&(C=1)),!F||V)for(P in R)ni[P]&&(z=Wp(P,R,e,H,y,b))?z.priority&&(C=1):B[P]=w=_h.call(e,y,P,"get",R[P],H,b,0,r.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),M&&e._pt&&(kr=e,qt.killTweensOf(y,B,e.globalTime(t)),k=!e.parent,kr=0),e._pt&&l&&(cu[N.id]=1)}C&&Kp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&S.render(gi,!0,!0)},r_=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return mu=1,e.vars[t]="+=0",gh(e,a),mu=0,l?fa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Jt(n)+Rn(d.e)),d.b&&(d.b=u.s+Rn(d.b))},o_=function(e,t){var n=e[0]?Ao(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=xs({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},s_=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},oa=function(e,t,n,r,o){return Kt(e)?e.call(t,n,r,o):dn(e)&&~e.indexOf("random(")?pa(e):e},Xp=dh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qp={};Yn(Xp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return qp[i]=1});var nn=(function(i){dp(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:ia(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||qt,b=(Pn(n)||mp(n)?vr(n[0]):"length"in r)?[n]:vi(n),M,S,L,R,A,P,w,y;if(a._targets=b.length?ph(b):fa("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||ka(c)||ka(u)){r=a.vars;var C=r.easeReverse||r.yoyoEase;if(M=a.timeline=new Wn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),M.kill(),M.parent=M._dp=ur(a),M._start=0,f||ka(c)||ka(u)){if(R=b.length,w=f&&Lp(f),Zi(f))for(A in f)~Xp.indexOf(A)&&(y||(y={}),y[A]=f[A]);for(S=0;S<R;S++)L=Dl(r,qp),L.stagger=0,C&&(L.easeReverse=C),y&&xs(L,y),P=b[S],L.duration=+oa(c,ur(a),S,P,b),L.delay=(+oa(u,ur(a),S,P,b)||0)-a._delay,!f&&R===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),M.to(P,L,w?w(S,P,b):0),M._ease=yt.none;M.duration()?c=u=0:a.timeline=0}else if(v){ia(hi(M.vars.defaults,{ease:"none"})),M._ease=Co(v.ease||r.ease||"none");var N=0,F,z,B;if(Pn(v))v.forEach(function(H){return M.to(b,H,">")}),M.duration();else{L={};for(A in v)A==="ease"||A==="easeEach"||s_(A,v[A],L,v.easeEach);for(A in L)for(F=L[A].sort(function(H,V){return H.t-V.t}),N=0,S=0;S<F.length;S++)z=F[S],B={ease:z.e,duration:(z.t-(S?F[S-1].t:0))/100*c},B[A]=z.v,M.to(b,B,N),N+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return m===!0&&!ah&&(kr=ur(a),qt.killTweensOf(b),kr=0),Wi(p,ur(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Xt(p._time)&&qn(d)&&N0(ur(a))&&p.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-u)||0)),_&&Rp(ur(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Ut&&!u?l:r<Ut?0:r,f,m,v,g,_,p,b,M;if(!c)z0(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Xt(d%g),d===l?(v=this._repeat,f=c):(_=Xt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=ys(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Xt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Cp(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var S=f<a;if(S!==this._inv){var L=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(S?-1:1)/L:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(oi(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&uu(this,r,o,s),oi(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&oi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&uu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(oi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){ma||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gh(this,c),u=this._ease(c/this._dur),r_(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(Yl(this,0),this.parent||Ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,kr&&kr.vars.overwrite!==!0)._first||Qs(this),this.parent&&s!==this.timeline.totalDuration()&&Ss(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?vi(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&U0(a,l))return o==="all"&&(this._pt=0),Qs(this);for(d=this._op=this._op||[],o!=="all"&&(dn(o)&&(g={},Yn(o,function(b){return g[b]=1}),o=g),o=o_(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Xl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Qs(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return ra(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return ra(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return qt.killTweensOf(r,o,s)},e})(_a);hi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(i){nn[i]=function(){var e=new Wn,t=fu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vh=function(e,t,n){return e[t]=n},Yp=function(e,t,n){return e[t](n)},a_=function(e,t,n,r){return e[t](r.fp,n)},l_=function(e,t,n){return e.setAttribute(t,n)},xh=function(e,t){return Kt(e[t])?Yp:lh(e[t])&&e.setAttribute?l_:vh},$p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},c_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},u_=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},h_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Xl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},f_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Kp=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},$n=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||$p,this.d=l||this,this.set=c||vh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=f_,this.m=n,this.mt=o,this.tween=r},i})();Yn(dh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return fh[i]=1});ui.TweenMax=ui.TweenLite=nn;ui.TimelineLite=ui.TimelineMax=Wn;qt=new Wn({sortChildren:!1,defaults:ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=Hp;var Po=[],yl={},d_=[],Ef=0,p_=0,pc=function(e){return(yl[e]||d_).map(function(t){return t()})},_u=function(){var e=Date.now(),t=[];e-Ef>2&&(pc("matchMediaInit"),Po.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Hi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),pc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ef=e,pc("matchMedia"))},jp=(function(){function i(t,n){this.selector=n&&du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Kt(n)&&(o=r,r=n,n=Kt);var s=this,a=function(){var c=Vt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=du(o)),Vt=s,d=r.apply(s,arguments),Kt(d)&&s._r.push(d),Vt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Kt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Vt;Vt=null,n(this),Vt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=Po.length;s--;)Po[s].id===this.id&&Po.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),m_=(function(){function i(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Zi(n)||(n={matches:n});var s=new jp(0,o||this.scope),a=s.conditions={},l,c,u;Vt&&!s.selector&&(s.selector=Vt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Hi.matchMedia(n[c]),l&&(Po.indexOf(s)<0&&Po.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(_u):l.addEventListener("change",_u)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Il={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return zp(r)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,r){dn(e)&&(e=vi(e)[0]);var o=Ao(e||{}).get,s=n?Tp:bp;return n==="native"&&(n=""),e&&(t?s((ni[t]&&ni[t].get||o)(e,t,n,r)):function(a,l,c){return s((ni[a]&&ni[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=ni[t],a=Ao(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;ls._pt=0,d.init(e,n?u+n:u,ls,0,[e]),d.render(1,d),ls._pt&&yh(1,ls)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=jn.to(e,hi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Co(e.ease,ha.ease)),Sf(ha,e||{})},config:function(e){return Sf(ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ni[a]&&!ui[a]&&fa(t+" effect requires "+a+" plugin.")}),uc[t]=function(a,l,c){return n(vi(a),hi(l||{},o),c)},s&&(Wn.prototype[t]=function(a,l,c){return this.add(uc[t](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Co(t)},parseEase:function(e,t){return arguments.length?Co(e,t):yt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wn(e),r,o;for(n.smoothChildTiming=qn(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,r=qt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&Wi(n,r,r._start-r._delay),r=o;return Wi(qt,n,0),n},context:function(e,t){return e?new jp(e,t):Vt},matchMedia:function(e){return new m_(e)},matchMediaRefresh:function(){return Po.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||_u()},addEventListener:function(e,t){var n=yl[e]||(yl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:q0,wrapYoyo:Y0,distribute:Lp,random:Up,snap:Ip,normalize:X0,getUnit:Rn,clamp:H0,splitColor:Bp,toArray:vi,selector:du,mapRange:Np,pipe:G0,unitize:W0,interpolate:$0,shuffle:Dp},install:xp,effects:uc,ticker:ii,updateRoot:Wn.updateRoot,plugins:ni,globalTimeline:qt,core:{PropTween:$n,globals:yp,Tween:nn,Timeline:Wn,Animation:_a,getCache:Ao,_removeLinkedListItem:Xl,reverting:function(){return gn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return ah=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Il[i]=nn[i]});ii.add(Wn.updateRoot);ls=Il.to({},{duration:0});var __=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},g_=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=__(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},mc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(dn(o)&&(l={},Yn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}g_(a,o)}}}},jn=Il.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mc("roundProps",pu),mc("modifiers"),mc("snap",Ip))||Il;nn.version=Wn.version=jn.version="3.15.0";vp=1;ch()&&Ms();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Af,Hr,ds,Sh,To,Rf,Mh,v_=function(){return typeof window<"u"},xr={},xo=180/Math.PI,ps=Math.PI/180,Wo=Math.atan2,Cf=1e8,wh=/([A-Z])/g,x_=/(left|right|width|margin|padding|x)/i,y_=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},M_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},b_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},T_=function(e,t,n){return e.style[t]=n},E_=function(e,t,n){return e.style.setProperty(t,n)},A_=function(e,t,n){return e._gsap[t]=n},R_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},C_=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},P_=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},$t="transform",Zn=$t+"Origin",D_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in xr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(r,a)}):this.tfm[e]=s.x?s[e]:fr(r,e),e===Zn&&(this.tfm.zOrigin=s.zOrigin);else return Xi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf($t)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=$t}(o||t)&&this.props.push(e,t,o[e])},em=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(wh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Mh(),(!o||!o.isStart)&&!n[$t]&&(em(n),r.zOrigin&&n[Zn]&&(n[Zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tm=function(e,t){var n={target:e,props:[],revert:L_,save:D_};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},nm,vu=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},si=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(wh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ws(t)||t,1)||""},Pf="O,Moz,ms,Ms,Webkit".split(","),ws=function(e,t,n){var r=t||To,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Pf[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Pf[s]:"")+e},xu=function(){v_()&&window.document&&(Af=window,Hr=Af.document,ds=Hr.documentElement,To=vu("div")||{style:{}},vu("div"),$t=ws($t),Zn=$t+"Origin",To.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nm=!!ws("perspective"),Mh=jn.core.reverting,Sh=1)},Df=function(e){var t=e.ownerSVGElement,n=vu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),ds.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),ds.removeChild(n),o},Lf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},im=function(e){var t,n;try{t=e.getBBox()}catch{t=Df(e),n=1}return t&&(t.width||t.height)||n||(t=Df(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lf(e,["x","cx","x1"])||0,y:+Lf(e,["y","cy","y1"])||0,width:0,height:0}:t},rm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&im(e))},Yr=function(e,t){if(t){var n=e.style,r;t in xr&&t!==Zn&&(t=$t),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(wh,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,r,o,s){var a=new $n(e._pt,t,n,0,1,s?Qp:Jp);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},If={deg:1,rad:1,turn:1},I_={grid:1,flex:1},$r=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=To.style,l=x_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||If[r]||If[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&rm(e),(m||s==="%")&&(xr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Jt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Hr||!g.appendChild)&&(g=Hr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===ii.time&&!_.uncache)return Jt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:Yr(e,t)}else(m||s==="%")&&!I_[si(g,"display")]&&(a.position=si(e,"position")),g===e&&(a.position="static"),g.appendChild(To),v=To[u],g.removeChild(To),a.position="absolute";return l&&m&&(_=Ao(g),_.time=ii.time,_.width=g[u]),Jt(f?v*o/d:v&&o?d/v*o:0)},fr=function(e,t,n,r){var o;return Sh||xu(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),xr[t]&&t!=="transform"?(o=va(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Fl(si(e,Zn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=Ul[t]&&Ul[t](e,t,n)||si(e,t)||Mp(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?$r(e,t,o,n)+n:o},U_=function(e,t,n,r){if(!n||n==="none"){var o=ws(t,e,1),s=o&&si(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=si(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,Zp),l=0,c=0,u,d,f,m,v,g,_,p,b,M,S,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=si(e,t)||r,g?e.style[t]=g:Yr(e,t)),u=[n,r],Hp(u),n=u[0],r=u[1],f=n.match(as)||[],L=r.match(as)||[],L.length){for(;d=as.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),_.charAt(1)==="="&&(_=fs(m,_)+S),p=parseFloat(_),M=_.substr((p+"").length),l=as.lastIndex-M.length,M||(M=M||ai.units[t]||S,l===r.length&&(r+=M,a.e+=M)),S!==M&&(m=$r(e,t,g,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Qp:Jp;return gp.test(r)&&(a.e=0),this._pt=a,a},Uf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Uf[n]||n,t[1]=Uf[r]||r,t.join(" ")},N_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],xr[a]&&(l=1,a=a==="transformOrigin"?Zn:$t),Yr(n,a);l&&(Yr(n,$t),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",va(n,1),s.uncache=1,em(r)))}},Ul={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new $n(e._pt,t,n,0,0,N_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ga=[1,0,0,1,0,0],om={},sm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ff=function(e){var t=si(e,$t);return sm(t)?ga:t.substr(7).match(_p).map(Jt)},bh=function(e,t){var n=e._gsap||Ao(e),r=e.style,o=Ff(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?ga:o):(o===ga&&!e.offsetParent&&e!==ds&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ds.appendChild(e)),o=Ff(e),l?r.display=l:Yr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ds.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},yu=function(e,t,n,r,o,s){var a=e._gsap,l=o||bh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],M=t.split(" "),S=parseFloat(M[0])||0,L=parseFloat(M[1])||0,R,A,P,w;n?l!==ga&&(A=m*_-v*g)&&(P=S*(_/A)+L*(-g/A)+(g*b-_*p)/A,w=S*(-v/A)+L*(m/A)-(m*b-v*p)/A,S=P,L=w):(R=im(e),S=R.x+(~M[0].indexOf("%")?S/100*R.width:S),L=R.y+(~(M[1]||M[0]).indexOf("%")?L/100*R.height:L)),r||r!==!1&&a.smooth?(p=S-c,b=L-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Zn]="0px 0px",s&&(Vr(s,a,"xOrigin",c,S),Vr(s,a,"yOrigin",u,L),Vr(s,a,"xOffset",d,a.xOffset),Vr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},va=function(e,t){var n=e._gsap||new Gp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=si(e,Zn)||"0",u,d,f,m,v,g,_,p,b,M,S,L,R,A,P,w,y,C,N,F,z,B,H,V,k,se,G,pe,Ee,De,Q,ne;return u=d=f=g=_=p=b=M=S=0,m=v=1,n.svg=!!(e.getCTM&&rm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[$t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$t]!=="none"?l[$t]:"")),r.scale=r.rotate=r.translate="none"),A=bh(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),yu(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,R=n.yOrigin||0,A!==ga&&(C=A[0],N=A[1],F=A[2],z=A[3],u=B=A[4],d=H=A[5],A.length===6?(m=Math.sqrt(C*C+N*N),v=Math.sqrt(z*z+F*F),g=C||N?Wo(N,C)*xo:0,b=F||z?Wo(F,z)*xo+g:0,b&&(v*=Math.abs(Math.cos(b*ps))),n.svg&&(u-=L-(L*C+R*F),d-=R-(L*N+R*z))):(ne=A[6],De=A[7],G=A[8],pe=A[9],Ee=A[10],Q=A[11],u=A[12],d=A[13],f=A[14],P=Wo(ne,Ee),_=P*xo,P&&(w=Math.cos(-P),y=Math.sin(-P),V=B*w+G*y,k=H*w+pe*y,se=ne*w+Ee*y,G=B*-y+G*w,pe=H*-y+pe*w,Ee=ne*-y+Ee*w,Q=De*-y+Q*w,B=V,H=k,ne=se),P=Wo(-F,Ee),p=P*xo,P&&(w=Math.cos(-P),y=Math.sin(-P),V=C*w-G*y,k=N*w-pe*y,se=F*w-Ee*y,Q=z*y+Q*w,C=V,N=k,F=se),P=Wo(N,C),g=P*xo,P&&(w=Math.cos(P),y=Math.sin(P),V=C*w+N*y,k=B*w+H*y,N=N*w-C*y,H=H*w-B*y,C=V,B=k),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Jt(Math.sqrt(C*C+N*N+F*F)),v=Jt(Math.sqrt(H*H+ne*ne)),P=Wo(B,H),b=Math.abs(P)>2e-4?P*xo:0,S=Q?1/(Q<0?-Q:Q):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sm(si(e,$t)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Jt(m),n.scaleY=Jt(v),n.rotation=Jt(g)+a,n.rotationX=Jt(_)+a,n.rotationY=Jt(p)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=S+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Zn]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?z_:nm?am:O_,n.uncache=0,n},Fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},_c=function(e,t,n){var r=Rn(t);return Jt(parseFloat(t)+parseFloat($r(e,"x",n+"px",r)))+r},O_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,am(e,t)},lo="0deg",Gs="0px",co=") ",am=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,M=n.zOrigin,S="",L=p==="auto"&&e&&e!==1||p===!0;if(M&&(d!==lo||u!==lo)){var R=parseFloat(u)*ps,A=Math.sin(R),P=Math.cos(R),w;R=parseFloat(d)*ps,w=Math.cos(R),s=_c(b,s,A*w*-M),a=_c(b,a,-Math.sin(R)*-M),l=_c(b,l,P*w*-M+M)}_!==Gs&&(S+="perspective("+_+co),(r||o)&&(S+="translate("+r+"%, "+o+"%) "),(L||s!==Gs||a!==Gs||l!==Gs)&&(S+=l!==Gs||L?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+co),c!==lo&&(S+="rotate("+c+co),u!==lo&&(S+="rotateY("+u+co),d!==lo&&(S+="rotateX("+d+co),(f!==lo||m!==lo)&&(S+="skew("+f+", "+m+co),(v!==1||g!==1)&&(S+="scale("+v+", "+g+co),b.style[$t]=S||"translate(0, 0)"},z_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,M=parseFloat(s),S=parseFloat(a),L,R,A,P,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ps,c*=ps,L=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ps,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,P*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),L*=w,R*=w)),L=Jt(L),R=Jt(R),A=Jt(A),P=Jt(P)):(L=d,P=f,R=A=0),(M&&!~(s+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=$r(m,"x",s,"px"),S=$r(m,"y",a,"px")),(v||g||_||p)&&(M=Jt(M+v-(v*L+g*A)+_),S=Jt(S+g-(v*R+g*P)+p)),(r||o)&&(w=m.getBBox(),M=Jt(M+r/100*w.width),S=Jt(S+o/100*w.height)),w="matrix("+L+","+R+","+A+","+P+","+M+","+S+")",m.setAttribute("transform",w),b&&(m.style[$t]=w)},B_=function(e,t,n,r,o){var s=360,a=dn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?xo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Cf)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Cf)%s-~~(c/s)*s)),e._pt=f=new $n(e._pt,t,n,r,c,S_),f.e=u,f.u="deg",e._props.push(n),f},Nf=function(e,t){for(var n in t)e[n]=t[n];return e},k_=function(e,t,n){var r=Nf({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[$t]=t,a=va(n,1),Yr(n,$t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[$t],s[$t]=t,a=va(n,1),s[$t]=c);for(l in xr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Rn(c),v=Rn(u),d=m!==v?$r(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new $n(e._pt,a,l,d,f-d,gu),e._pt.u=v||0,e._props.push(l));Nf(a,r)};Yn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});Ul[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return fr(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var lm={name:"css",register:xu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,M,S,L,R,A,P,w;Sh||xu(),this.styles=this.styles||tm(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ni[g]&&Wp(g,t,n,r,e,o)))){if(m=typeof u,v=Ul[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=pa(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Wr.lastIndex=0,Wr.test(c)||(_=Rn(c),p=Rn(u),p?_!==p&&(c=$r(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],dn(c)&&~c.indexOf("random(")&&(c=pa(c)),Rn(c+"")||c==="auto"||(c+=ai.units[g]||Rn(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Xi&&(g==="autoAlpha"&&(f===1&&fr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Vr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in xr,M){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=si(e,"perspective"),y?e.style.perspective=y:Yr(e,"perspective")}d=parseFloat(u)}if(S||(L=e._gsap,L.renderTransform&&!t.parseTransform||va(e,t.parseTransform),R=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new $n(this._pt,a,$t,0,1,L.renderTransform,L,0,-1),S.dep=1),g==="scale")this._pt=new $n(this._pt,L,"scaleY",L.scaleY,(b?fs(L.scaleY,b+d):d)-L.scaleY||0,gu),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Zn,0,a[Zn]),u=F_(u),L.svg?yu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&Vr(this,L,"zOrigin",L.zOrigin,p),Vr(this,a,g,Fl(c),Fl(u)));continue}else if(g==="svgOrigin"){yu(e,u,1,R,0,this);continue}else if(g in om){B_(this,L,g,f,b?fs(f,b+u):u);continue}else if(g==="smoothOrigin"){Vr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){k_(this,u,e);continue}}else g in a||(g=ws(g)||g);if(M||(d||d===0)&&(f||f===0)&&!y_.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Rn(u)||(g in ai.units?ai.units[g]:_),_!==p&&(f=$r(e,g,c,p)),this._pt=new $n(this._pt,M?L:a,g,f,(b?fs(f,b+d):d)-f,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?b_:gu),this._pt.u=p||0,M&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=w_):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=M_);else if(g in a)U_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){hh(g,u);continue}M||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}A&&Kp(this)},render:function(e,t){if(t.tween._time||!Mh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Xi,getSetter:function(e,t,n){var r=Xi[t];return r&&r.indexOf(",")<0&&(t=r),t in xr&&t!==Zn&&(e._gsap.x||fr(e,"x"))?n&&Rf===n?t==="scale"?R_:A_:(Rf=n||{})&&(t==="scale"?C_:P_):e.style&&!lh(e.style[t])?T_:~t.indexOf("-")?E_:xh(e,t)},core:{_removeProperty:Yr,_getMatrix:bh}};jn.utils.checkPrefix=ws;jn.core.getStyleSaver=tm;(function(i,e,t,n){var r=Yn(i+","+e+","+t,function(o){xr[o]=1});Yn(e,function(o){ai.units[o]="deg",om[o]=1}),Xi[r[13]]=i+","+e,Yn(n,function(o){var s=o.split(":");Xi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ai.units[i]="px"});jn.registerPlugin(lm);var Th=jn.registerPlugin(lm)||jn;Th.core.Tween;const cm=[{id:"zyrax_drive",title:"Zyrax Drive",tags:"web • three.js • r3f • interactive • 3d",url:"https://kianpk.github.io/zyrax-drive/",colorBg:"#0a0c12",colorText:"#e8ecff"},{id:"orbit_desk",title:"Orbit Desk",tags:"web • react • three.js • portfolio • 3d",url:"https://kianpk.github.io/orbit-desk/",colorBg:"#10131a",colorText:"#f0f3ff"},{id:"playfield",title:"Playfield",tags:"web • three.js • ammo.js • physics • 3d",url:"https://kianpk.github.io/playfield/",colorBg:"#0d1520",colorText:"#d9f0ff"},{id:"tradeforge",title:"TradeForge",tags:"web3 • solidity • foundry • defi",url:"https://kianpk.github.io/tradeforge/",colorBg:"#0b1210",colorText:"#c8ffd8"},{id:"velocity_arena",title:"Velocity Arena",tags:"web • vue • socket.io • multiplayer • game",url:"https://kianpk.github.io/velocity-arena/",colorBg:"#120a14",colorText:"#ffd6f0"},{id:"neon_serpent",title:"Neon Serpent",tags:"web • canvas • arcade • game",url:"https://kianpk.github.io/neon-serpent/",colorBg:"#060b12",colorText:"#9dffe8"},{id:"hexsweep",title:"Hexsweep",tags:"web • svg • puzzle • game",url:"https://kianpk.github.io/hexsweep/",colorBg:"#e8f2ee",colorText:"#0a3d32"},{id:"brickforge",title:"Brickforge",tags:"web • canvas • arcade • particles",url:"https://kianpk.github.io/brickforge/",colorBg:"#140c0a",colorText:"#ffe0d0"},{id:"zyrax_studio",title:"Zyrax Studio",tags:"web • three.js • scroll • immersive",url:"https://kianpk.github.io/zyrax-studio/",colorBg:"#0e1016",colorText:"#f0f1fa"},{id:"server_pulse",title:"Server Pulse",tags:"web • cs2 • realtime • dashboard",url:"https://kianpk.github.io/server-pulse/",colorBg:"#0a1014",colorText:"#cde8ff"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="170",H_=0,Of=1,V_=2,um=1,G_=2,cr=3,Zr=0,Kn=1,Cn=2,Ri=0,Xr=1,zf=2,Bf=3,kf=4,xa=5,On=100,W_=101,X_=102,q_=103,Y_=104,Sl=200,mi=201,$_=202,Z_=203,Nl=204,Ol=205,K_=206,j_=207,J_=208,Q_=209,eg=210,tg=211,ng=212,ig=213,rg=214,Su=0,Mu=1,wu=2,bs=3,bu=4,Tu=5,Eu=6,Au=7,hm=0,og=1,sg=2,$i=0,ag=1,lg=2,cg=3,ug=4,hg=5,fg=6,dg=7,fm=300,Ts=301,Es=302,Ru=303,Cu=304,$l=306,ms=1e3,zn=1001,zl=1002,sn=1003,pg=1004,Ha=1005,vt=1006,gc=1007,qi=1008,Ci=1009,dm=1010,pm=1011,Lo=1012,Ah=1013,Io=1014,Xn=1015,Yi=1016,Rh=1017,Ch=1018,As=1020,mm=35902,_m=1021,gm=1022,_n=1023,vm=1024,xm=1025,_s=1026,Rs=1027,Ph=1028,Dh=1029,ym=1030,Lh=1031,Ih=1033,Ml=33776,wl=33777,bl=33778,Tl=33779,Pu=35840,Du=35841,Lu=35842,Iu=35843,Uu=36196,Fu=37492,Nu=37496,Ou=37808,zu=37809,Bu=37810,ku=37811,Hu=37812,Vu=37813,Gu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,$u=37819,Zu=37820,Ku=37821,El=36492,ju=36494,Ju=36495,Sm=36283,Qu=36284,eh=36285,th=36286,mg=3200,_g=3201,gg=0,vg=1,Qt="",Nn="srgb",Ki="srgb-linear",Zl="linear",Pt="srgb",Xo=7680,Hf=519,xg=512,yg=513,Sg=514,Mm=515,Mg=516,wg=517,bg=518,Tg=519,Vf=35044,Cr=35048,Gf="300 es",pr=2e3,Bl=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wf=1234567;const sa=Math.PI/180,ya=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function An(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function Eg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ag(i,e,t){return i!==e?(t-i)/(e-i):0}function aa(i,e,t){return(1-t)*i+t*e}function Rg(i,e,t,n){return aa(i,e,1-Math.exp(-t*n))}function Cg(i,e=1){return e-Math.abs(Uh(i,e*2)-e)}function Pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ig(i,e){return i+Math.random()*(e-i)}function Ug(i){return i*(.5-Math.random())}function Fg(i){i!==void 0&&(Wf=i);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*sa}function Og(i){return i*ya}function zg(i){return(i&i-1)===0&&i!==0}function Bg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hg(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:sa,RAD2DEG:ya,generateUUID:Ds,clamp:An,euclideanModulo:Uh,mapLinear:Eg,inverseLerp:Ag,lerp:aa,damp:Rg,pingpong:Cg,smoothstep:Pg,smootherstep:Dg,randInt:Lg,randFloat:Ig,randFloatSpread:Ug,seededRandom:Fg,degToRad:Ng,radToDeg:Og,isPowerOfTwo:zg,ceilPowerOfTwo:Bg,floorPowerOfTwo:kg,setQuaternionFromProperEuler:Hg,normalize:Un,denormalize:ss};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,o,s,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],M=r[4],S=r[7],L=r[2],R=r[5],A=r[8];return o[0]=s*g+a*b+l*L,o[3]=s*_+a*M+l*R,o[6]=s*p+a*S+l*A,o[1]=c*g+u*b+d*L,o[4]=c*_+u*M+d*R,o[7]=c*p+u*S+d*A,o[2]=f*g+m*b+v*L,o[5]=f*_+m*M+v*R,o[8]=f*p+m*S+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new dt;function wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vg(){const i=Sa("canvas");return i.style.display="block",i}const Xf={};function ta(i){i in Xf||(Xf[i]=!0,console.warn(i))}function Gg(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Wg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bt={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?Zl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _r(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const qf=[.64,.33,.3,.6,.15,.06],Yf=[.2126,.7152,.0722],$f=[.3127,.329],Zf=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[Ki]:{primaries:qf,whitePoint:$f,transfer:Zl,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:Yf,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:qf,whitePoint:$f,transfer:Pt,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:Yf,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}});let qo;class qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qo===void 0&&(qo=Sa("canvas")),qo.width=e.width,qo.height=e.height;const n=qo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_r(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_r(t[n]/255)*255):t[n]=_r(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yg=0;class bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(xc(r[s].image)):o.push(xc(r[s]))}else o=xc(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $g=0;class vn extends Ps{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=zn,r=zn,o=vt,s=qi,a=_n,l=Ci,c=vn.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Ds(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=fm;vn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(m+1)/2,L=(p+1)/2,R=(u+f)/4,A=(d+g)/4,P=(v+_)/4;return M>S&&M>L?M<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(M),r=R/n,o=A/n):S>L?S<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),n=R/r,o=P/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=A/o,r=P/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zg extends Ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Zg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tm extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const L=Math.sqrt(M),R=Math.atan2(L,p*b);_=Math.sin(_*R)/L,a=Math.sin(a*R)/L}const S=a*b;if(l=l*_+f*S,c=c*_+m*S,u=u*_+v*S,d=d*_+g*S,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new Y,jf=new Bn;class Ls{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Si):Si.fromBufferAttribute(o,s),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Ga.subVectors(this.max,Ws),Yo.subVectors(e.a,Ws),$o.subVectors(e.b,Ws),Zo.subVectors(e.c,Ws),Pr.subVectors($o,Yo),Dr.subVectors(Zo,$o),uo.subVectors(Yo,Zo);let t=[0,-Pr.z,Pr.y,0,-Dr.z,Dr.y,0,-uo.z,uo.y,Pr.z,0,-Pr.x,Dr.z,0,-Dr.x,uo.z,0,-uo.x,-Pr.y,Pr.x,0,-Dr.y,Dr.x,0,-uo.y,uo.x,0];return!Sc(t,Yo,$o,Zo,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,Yo,$o,Zo,Ga))?!1:(Wa.crossVectors(Pr,Dr),t=[Wa.x,Wa.y,Wa.z],Sc(t,Yo,$o,Zo,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Si=new Y,Va=new Ls,Yo=new Y,$o=new Y,Zo=new Y,Pr=new Y,Dr=new Y,uo=new Y,Ws=new Y,Ga=new Y,Wa=new Y,ho=new Y;function Sc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ho.fromArray(i,o);const a=r.x*Math.abs(ho.x)+r.y*Math.abs(ho.y)+r.z*Math.abs(ho.z),l=e.dot(ho),c=t.dot(ho),u=n.dot(ho);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jg=new Ls,Xs=new Y,Mc=new Y;class Fh{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jg.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Mc)),this.expandByPoint(Xs.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new Y,wc=new Y,Xa=new Y,Lr=new Y,bc=new Y,qa=new Y,Tc=new Y;class Jg{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(wc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Xa),a=Lr.dot(this.direction),l=-Lr.dot(Xa),c=Lr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wc).addScaledVector(Xa,f),m}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),r=ir.dot(ir)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,o){bc.subVectors(t,e),qa.subVectors(n,e),Tc.crossVectors(bc,qa);let s=this.direction.dot(Tc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Lr.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Lr,qa));if(l<0)return null;const c=a*this.direction.dot(bc.cross(Lr));if(c<0||l+c>s)return null;const u=-a*Lr.dot(Tc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),o=1/Ko.setFromMatrixColumn(e,1).length(),s=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qg,e,ev)}lookAt(e,t,n){const r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ir.crossVectors(n,ei),Ir.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ir.crossVectors(n,ei)),Ir.normalize(),Ya.crossVectors(ei,Ir),r[0]=Ir.x,r[4]=Ya.x,r[8]=ei.x,r[1]=Ir.y,r[5]=Ya.y,r[9]=ei.y,r[2]=Ir.z,r[6]=Ya.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],M=n[7],S=n[11],L=n[15],R=r[0],A=r[4],P=r[8],w=r[12],y=r[1],C=r[5],N=r[9],F=r[13],z=r[2],B=r[6],H=r[10],V=r[14],k=r[3],se=r[7],G=r[11],pe=r[15];return o[0]=s*R+a*y+l*z+c*k,o[4]=s*A+a*C+l*B+c*se,o[8]=s*P+a*N+l*H+c*G,o[12]=s*w+a*F+l*V+c*pe,o[1]=u*R+d*y+f*z+m*k,o[5]=u*A+d*C+f*B+m*se,o[9]=u*P+d*N+f*H+m*G,o[13]=u*w+d*F+f*V+m*pe,o[2]=v*R+g*y+_*z+p*k,o[6]=v*A+g*C+_*B+p*se,o[10]=v*P+g*N+_*H+p*G,o[14]=v*w+g*F+_*V+p*pe,o[3]=b*R+M*y+S*z+L*k,o[7]=b*A+M*C+S*B+L*se,o[11]=b*P+M*N+S*H+L*G,o[15]=b*w+M*F+S*V+L*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,M=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,S=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,L=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,R=t*b+n*M+r*S+o*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=M*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=S*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,M=l*u,S=l*d,L=n.x,R=n.y,A=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+S)*L,r[2]=(v-M)*L,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(f+p))*R,r[6]=(_+b)*R,r[7]=0,r[8]=(v+M)*A,r[9]=(_-b)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Ko.set(r[0],r[1],r[2]).length();const s=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const c=1/o,u=1/s,d=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=pr){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===pr)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Bl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=pr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===pr)v=(s+o)*d,g=-2*d;else if(a===Bl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ko=new Y,Mi=new St,Qg=new Y(0,0,0),ev=new Y(1,1,1),Ir=new Y,Ya=new Y,ei=new Y,Jf=new St,Qf=new Bn;class fi{constructor(e=0,t=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-An(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tv=0;const ed=new Y,jo=new Bn,rr=new St,$a=new Y,qs=new Y,nv=new Y,iv=new Bn,td=new Y(1,0,0),nd=new Y(0,1,0),id=new Y(0,0,1),rd={type:"added"},rv={type:"removed"},Jo={type:"childadded",child:null},Ec={type:"childremoved",child:null};class li extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new Y,t=new fi,n=new Bn,r=new Y(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new dt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.multiply(jo),this}rotateOnWorldAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.premultiply(jo),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(qs,$a,this.up):rr.lookAt($a,qs,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),jo.setFromRotationMatrix(rr),this.quaternion.premultiply(jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rv),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}li.DEFAULT_UP=new Y(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new Y,or=new Y,Ac=new Y,sr=new Y,Qo=new Y,es=new Y,od=new Y,Rc=new Y,Cc=new Y,Pc=new Y,Dc=new Nt,Lc=new Nt,Ic=new Nt;class Ei{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wi.subVectors(e,t),r.cross(wi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){wi.subVectors(r,t),or.subVectors(n,t),Ac.subVectors(e,t);const s=wi.dot(wi),a=wi.dot(or),l=wi.dot(Ac),c=or.dot(or),u=or.dot(Ac),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,sr.x),l.addScaledVector(s,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Dc.setScalar(0),Lc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Dc,o.x),s.addScaledVector(Lc,o.y),s.addScaledVector(Ic,o.z),s}static isFrontFacing(e,t,n,r){return wi.subVectors(n,t),or.subVectors(e,t),wi.cross(or).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),wi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Qo.subVectors(r,n),es.subVectors(o,n),Rc.subVectors(e,n);const l=Qo.dot(Rc),c=es.dot(Rc);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,r);const u=Qo.dot(Cc),d=es.dot(Cc);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Qo,s);Pc.subVectors(e,o);const m=Qo.dot(Pc),v=es.dot(Pc);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(es,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return od.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(od,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Qo,s).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Uh(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Uc(s,o,e+1/3),this.g=Uc(s,o,e),this.b=Uc(s,o,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return bt.fromWorkingColorSpace(wn.copy(this),e),Math.round(An(wn.r*255,0,255))*65536+Math.round(An(wn.g*255,0,255))*256+Math.round(An(wn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(wn.copy(this),t);const n=wn.r,r=wn.g,o=wn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Nn){bt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,n=wn.g,r=wn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Za);const n=aa(Ur.h,Za.h,t),r=aa(Ur.s,Za.s,t),o=aa(Ur.l,Za.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ke;Ke.NAMES=Am;let ov=0;class Kl extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Ds(),this.name="",this.blending=Xr,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nh extends Kl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dr=sv();function sv(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function av(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=An(i,-65504,65504),dr.floatView[0]=i;const e=dr.uint32View[0],t=e>>23&511;return dr.baseTable[t]+((e&8388607)>>dr.shiftTable[t])}function lv(i){const e=i>>10;return dr.uint32View[0]=dr.mantissaTable[dr.offsetTable[e]+(i&1023)]+dr.exponentTable[e],dr.floatView[0]}const sd={toHalfFloat:av,fromHalfFloat:lv},tn=new Y,Ka=new Qe;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vf,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vf&&(e.usage=this.usage),e}}class Rm extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cm extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Do extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cv=0;const di=new St,Fc=new li,ts=new Y,ti=new Ls,Ys=new Ls,fn=new Y;class Sr extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wm(e)?Cm:Rm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new dt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Do(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ti.min,Ys.min),ti.expandByPoint(fn),fn.addVectors(ti.max,Ys.max),ti.expandByPoint(fn)):(ti.expandByPoint(Ys.min),ti.expandByPoint(Ys.max))}ti.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)fn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(fn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),fn.add(ts)),r=Math.max(r,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new Y,l[P]=new Y;const c=new Y,u=new Y,d=new Y,f=new Qe,m=new Qe,v=new Qe,g=new Y,_=new Y;function p(P,w,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,w),v.fromBufferAttribute(o,y),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(C),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(C),a[P].add(g),a[w].add(g),a[y].add(g),l[P].add(_),l[w].add(_),l[y].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,w=b.length;P<w;++P){const y=b[P],C=y.start,N=y.count;for(let F=C,z=C+N;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new Y,S=new Y,L=new Y,R=new Y;function A(P){L.fromBufferAttribute(r,P),R.copy(L);const w=a[P];M.copy(w),M.sub(L.multiplyScalar(L.dot(w))).normalize(),S.crossVectors(R,w);const C=S.dot(l[P])<0?-1:1;s.setXYZW(P,M.x,M.y,M.z,C)}for(let P=0,w=b.length;P<w;++P){const y=b[P],C=y.start,N=y.count;for(let F=C,z=C+N;F<z;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new Y,o=new Y,s=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Zt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new St,fo=new Jg,ja=new Fh,ld=new Y,Ja=new Y,Qa=new Y,el=new Y,Nc=new Y,tl=new Y,cd=new Y,nl=new Y;class Ft extends li{constructor(e=new Sr,t=new Nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){tl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Nc.fromBufferAttribute(d,e),s?tl.addScaledVector(Nc,u):tl.addScaledVector(Nc.sub(t),u))}t.add(tl)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(o),fo.copy(e.ray).recast(e.near),!(ja.containsPoint(fo.origin)===!1&&(fo.intersectSphere(ja,ld)===null||fo.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(ad.copy(o).invert(),fo.copy(e.ray).applyMatrix4(ad),!(n.boundingBox!==null&&fo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fo)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),M=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=b,L=M;S<L;S+=3){const R=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=il(this,p,e,n,c,u,d,R,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),M=a.getX(_+1),S=a.getX(_+2);r=il(this,s,e,n,c,u,d,b,M,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),M=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=b,L=M;S<L;S+=3){const R=S,A=S+1,P=S+2;r=il(this,p,e,n,c,u,d,R,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,M=_+1,S=_+2;r=il(this,s,e,n,c,u,d,b,M,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function uv(i,e,t,n,r,o,s,a){let l;if(e.side===Kn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Zr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nl);return c<t.near||c>t.far?null:{distance:c,point:nl.clone(),object:i}}function il(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ja),i.getVertexPosition(l,Qa),i.getVertexPosition(c,el);const u=uv(i,e,t,n,Ja,Qa,el,cd);if(u){const d=new Y;Ei.getBarycoord(cd,Ja,Qa,el,d),r&&(u.uv=Ei.getInterpolatedAttribute(r,a,l,c,d,new Qe)),o&&(u.uv1=Ei.getInterpolatedAttribute(o,a,l,c,d,new Qe)),s&&(u.normal=Ei.getInterpolatedAttribute(s,a,l,c,d,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};Ei.getNormal(Ja,Qa,el,f.normal),u.face=f,u.barycoord=d}return u}class wa extends Sr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Do(c,3)),this.setAttribute("normal",new Do(u,3)),this.setAttribute("uv",new Do(d,2));function v(g,_,p,b,M,S,L,R,A,P,w){const y=S/A,C=L/P,N=S/2,F=L/2,z=R/2,B=A+1,H=P+1;let V=0,k=0;const se=new Y;for(let G=0;G<H;G++){const pe=G*C-F;for(let Ee=0;Ee<B;Ee++){const De=Ee*y-N;se[g]=De*b,se[_]=pe*M,se[p]=z,c.push(se.x,se.y,se.z),se[g]=0,se[_]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),d.push(Ee/A),d.push(1-G/P),V+=1}}for(let G=0;G<P;G++)for(let pe=0;pe<A;pe++){const Ee=f+pe+B*G,De=f+pe+B*(G+1),Q=f+(pe+1)+B*(G+1),ne=f+(pe+1)+B*G;l.push(Ee,De,ne),l.push(De,Q,ne),k+=6}a.addGroup(m,k,w),m+=k,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const n=Cs(i[t]);for(const r in n)e[r]=n[r]}return e}function hv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const fv={clone:Cs,merge:Fn};var dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Kl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dm extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new Y,ud=new Qe,hd=new Qe;class Gn extends Dm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,ud,hd),t.subVectors(hd,ud)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class mv extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new Gn(ns,is,e,t);o.layers=this.layers,this.add(o);const s=new Gn(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new Gn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new Gn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new Gn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lm extends vn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _v extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wa(5,5,5),o=new At({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Ri});o.uniforms.tEquirect.value=t;const s=new Ft(r,o),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=vt),new mv(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Oc=new Y,gv=new Y,vv=new dt;class yo{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Oc.subVectors(n,t).cross(gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vv.getNormalMatrix(e),r=this.coplanarPoint(Oc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new Fh,rl=new Y;class Im{constructor(e=new yo,t=new yo,n=new yo,r=new yo,o=new yo,s=new yo){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-o,f-c,_-m,S-p).normalize(),n[1].setComponents(l+o,f+c,_+m,S+p).normalize(),n[2].setComponents(l+s,f+u,_+v,S+b).normalize(),n[3].setComponents(l-s,f-u,_-v,S-b).normalize(),n[4].setComponents(l-a,f-d,_-g,S-M).normalize(),t===pr)n[5].setComponents(l+a,f+d,_+g,S+M).normalize();else if(t===Bl)n[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Um(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function xv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ci extends Sr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let M=0;M<c;M++){const S=M*d-o;v.push(S,-b,0),g.push(0,0,1),_.push(M/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,S=b+c*(p+1),L=b+1+c*(p+1),R=b+1+c*p;m.push(M,S,R),m.push(S,L,R)}this.setIndex(m),this.setAttribute("position",new Do(v,3)),this.setAttribute("normal",new Do(g,3)),this.setAttribute("uv",new Do(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
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
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Uv=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gv=`#define PI 3.141592653589793
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
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,E1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,L1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,U1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,N1=`#define LAMBERT
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
}`,O1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,k1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,G1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,q1=`#define TOON
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
}`,Y1=`uniform float size;
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
}`,$1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,J1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:yv,alphahash_pars_fragment:Sv,alphamap_fragment:Mv,alphamap_pars_fragment:wv,alphatest_fragment:bv,alphatest_pars_fragment:Tv,aomap_fragment:Ev,aomap_pars_fragment:Av,batching_pars_vertex:Rv,batching_vertex:Cv,begin_vertex:Pv,beginnormal_vertex:Dv,bsdfs:Lv,iridescence_fragment:Iv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:zv,color_fragment:Bv,color_pars_fragment:kv,color_pars_vertex:Hv,color_vertex:Vv,common:Gv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:qv,displacementmap_vertex:Yv,emissivemap_fragment:$v,emissivemap_pars_fragment:Zv,colorspace_fragment:Kv,colorspace_pars_fragment:jv,envmap_fragment:Jv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:fx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:rx,fog_fragment:ox,fog_pars_fragment:sx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:ux,lights_pars_begin:hx,lights_toon_fragment:dx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:_x,lights_physical_fragment:gx,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Tx,map_fragment:Ex,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Lx,morphcolor_vertex:Ix,morphnormal_vertex:Ux,morphtarget_pars_vertex:Fx,morphtarget_vertex:Nx,normal_fragment_begin:Ox,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:$x,premultiplied_alpha_fragment:Zx,project_vertex:Kx,dithering_fragment:jx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:o1,skinning_pars_vertex:s1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:h1,tonemapping_pars_fragment:f1,transmission_fragment:d1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:_1,uv_vertex:g1,worldpos_vertex:v1,background_vert:x1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:M1,cube_vert:w1,cube_frag:b1,depth_vert:T1,depth_frag:E1,distanceRGBA_vert:A1,distanceRGBA_frag:R1,equirect_vert:C1,equirect_frag:P1,linedashed_vert:D1,linedashed_frag:L1,meshbasic_vert:I1,meshbasic_frag:U1,meshlambert_vert:F1,meshlambert_frag:N1,meshmatcap_vert:O1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:k1,meshphong_vert:H1,meshphong_frag:V1,meshphysical_vert:G1,meshphysical_frag:W1,meshtoon_vert:X1,meshtoon_frag:q1,points_vert:Y1,points_frag:$1,shadow_vert:Z1,shadow_frag:K1,sprite_vert:j1,sprite_frag:J1},Ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Gi={basic:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Ve.points,Ve.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Ve.common,Ve.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Ve.sprite,Ve.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Fn([Ve.common,Ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Fn([Ve.lights,Ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Gi.physical={uniforms:Fn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ol={r:0,b:0,g:0},mo=new fi,Q1=new St;function ey(i,e,t,n,r,o,s){const a=new Ke(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const S=v(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,M){const S=v(M);S&&(S.isCubeTexture||S.mapping===$l)?(u===void 0&&(u=new Ft(new wa(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Cs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mo.copy(M.backgroundRotation),mo.x*=-1,mo.y*=-1,mo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(mo)),u.material.toneMapped=bt.getTransfer(S.colorSpace)!==Pt,(d!==S||f!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ft(new ci(2,2),new At({name:"BackgroundMaterial",uniforms:Cs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=bt.getTransfer(S.colorSpace)!==Pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(ol,Pm(i)),n.buffers.color.setClear(ol.r,ol.g,ol.b,M,s)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function ty(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(y,C,N,F,z){let B=!1;const H=d(F,N,C);o!==H&&(o=H,c(o.object)),B=m(y,F,N,z),B&&v(y,F,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,S(y,C,N,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,C,N){const F=N.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let B=z[C.id];B===void 0&&(B={},z[C.id]=B);let H=B[F];return H===void 0&&(H=f(l()),B[F]=H),H}function f(y){const C=[],N=[],F=[];for(let z=0;z<t;z++)C[z]=0,N[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,C,N,F){const z=o.attributes,B=C.attributes;let H=0;const V=N.getAttributes();for(const k in V)if(V[k].location>=0){const G=z[k];let pe=B[k];if(pe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),G===void 0||G.attribute!==pe||pe&&G.data!==pe.data)return!0;H++}return o.attributesNum!==H||o.index!==F}function v(y,C,N,F){const z={},B=C.attributes;let H=0;const V=N.getAttributes();for(const k in V)if(V[k].location>=0){let G=B[k];G===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(G=y.instanceColor));const pe={};pe.attribute=G,G&&G.data&&(pe.data=G.data),z[k]=pe,H++}o.attributes=z,o.attributesNum=H,o.index=F}function g(){const y=o.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function _(y){p(y,0)}function p(y,C){const N=o.newAttributes,F=o.enabledAttributes,z=o.attributeDivisors;N[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),z[y]!==C&&(i.vertexAttribDivisor(y,C),z[y]=C)}function b(){const y=o.newAttributes,C=o.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==y[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function M(y,C,N,F,z,B,H){H===!0?i.vertexAttribIPointer(y,C,N,z,B):i.vertexAttribPointer(y,C,N,F,z,B)}function S(y,C,N,F){g();const z=F.attributes,B=N.getAttributes(),H=C.defaultAttributeValues;for(const V in B){const k=B[V];if(k.location>=0){let se=z[V];if(se===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const G=se.normalized,pe=se.itemSize,Ee=e.get(se);if(Ee===void 0)continue;const De=Ee.buffer,Q=Ee.type,ne=Ee.bytesPerElement,ue=Q===i.INT||Q===i.UNSIGNED_INT||se.gpuType===Ah;if(se.isInterleavedBufferAttribute){const ce=se.data,ge=ce.stride,ke=se.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)p(k.location+Ne,ce.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)_(k.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Ne=0;Ne<k.locationSize;Ne++)M(k.location+Ne,pe/k.locationSize,Q,G,ge*ne,(ke+pe/k.locationSize*Ne)*ne,ue)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)p(k.location+ce,se.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<k.locationSize;ce++)_(k.location+ce);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ce=0;ce<k.locationSize;ce++)M(k.location+ce,pe/k.locationSize,Q,G,pe*ne,pe/k.locationSize*ce*ne,ue)}}else if(H!==void 0){const G=H[V];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(k.location,G);break;case 3:i.vertexAttrib3fv(k.location,G);break;case 4:i.vertexAttrib4fv(k.location,G);break;default:i.vertexAttrib1fv(k.location,G)}}}}b()}function L(){P();for(const y in n){const C=n[y];for(const N in C){const F=C[N];for(const z in F)u(F[z].object),delete F[z];delete C[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const N in C){const F=C[N];for(const z in F)u(F[z].object),delete F[z];delete C[N]}delete n[y.id]}function A(y){for(const C in n){const N=n[C];if(N[y.id]===void 0)continue;const F=N[y.id];for(const z in F)u(F[z].object),delete F[z];delete N[y.id]}}function P(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function ny(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iy(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ci&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:L,maxSamples:R}}function ry(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new yo,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,M=b*4;let S=p.clippingState||null;l.value=S,S=u(v,f,M,m);for(let L=0;L!==M;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let M=0,S=m;M!==g;++M,S+=4)s.copy(d[M]).applyMatrix4(b,a),s.normal.toArray(_,S),_[S+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function oy(i){let e=new WeakMap;function t(s,a){return a===Ru?s.mapping=Ts:a===Cu&&(s.mapping=Es),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Ru||a===Cu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _v(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class jl extends Dm{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,fd=[.125,.215,.35,.446,.526,.582],wo=20,zc=new jl,dd=new Ke;let Bc=null,kc=0,Hc=0,Vc=!1;const So=(1+Math.sqrt(5))/2,rs=1/So,pd=[new Y(-So,rs,0),new Y(So,rs,0),new Y(-rs,0,So),new Y(rs,0,So),new Y(0,So,-rs),new Y(0,So,rs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,kc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Yi,format:_n,colorSpace:Ki,depthBuffer:!1},r=_d(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(o)),this._blurMaterial=ay(o,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,zc)}_sceneToCubeUV(e,t,n,r){const a=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dd),u.toneMapping=$i,u.autoClear=!1;const m=new Nh({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new Ft(new wa,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(dd),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;sl(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ts||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ft(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,zc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=pd[(r-o-1)%pd.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ft(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*wo-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):wo;_>wo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wo}`);const p=[];let b=0;for(let A=0;A<wo;++A){const P=A/g,w=Math.exp(-P*P/2);p.push(w),A===0?b+=w:A<_&&(b+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const S=this._sizeLods[r],L=3*S*(r>M-cs?r-M+cs:0),R=4*(this._cubeSize-S);sl(t,L,R,3*S,2*S),l.setRenderTarget(t),l.render(d,zc)}}function sy(i){const e=[],t=[],n=[];let r=i;const o=i-cs+1+fd.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-cs?l=fd[s-i+cs-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),M=new Float32Array(_*v*m),S=new Float32Array(p*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,P=R>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(w,g*v*R),M.set(f,_*v*R);const y=[R,R,R,R,R,R];S.set(y,p*v*R)}const L=new Sr;L.setAttribute("position",new Zt(b,g)),L.setAttribute("uv",new Zt(M,_)),L.setAttribute("faceIndex",new Zt(S,p)),e.push(L),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _d(i,e,t){const n=new yr(i,e,t);return n.texture.mapping=$l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ay(i,e,t){const n=new Float32Array(wo),r=new Y(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function gd(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vd(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function ly(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ru||l===Cu,u=l===Ts||l===Es;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new md(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new md(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function cy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ta("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function uy(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let M=0,S=b.length;M<S;M+=3){const L=b[M+0],R=b[M+1],A=b[M+2];f.push(L,R,R,A,A,L)}}else if(v!==void 0){const b=v.array;g=v.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const L=M+0,R=M+1,A=M+2;f.push(L,R,R,A,A,L)}}else return;const _=new(wm(f)?Cm:Rm)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hy(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dy(i,e,t){const n=new WeakMap,r=new Nt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let L=a.attributes.position.count*S,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*R*4*d),P=new Tm(A,L,R,d);P.type=Xn,P.needsUpdate=!0;const w=S*4;for(let C=0;C<d;C++){const N=p[C],F=b[C],z=M[C],B=L*R*4*C;for(let H=0;H<N.count;H++){const V=H*w;v===!0&&(r.fromBufferAttribute(N,H),A[B+V+0]=r.x,A[B+V+1]=r.y,A[B+V+2]=r.z,A[B+V+3]=0),g===!0&&(r.fromBufferAttribute(F,H),A[B+V+4]=r.x,A[B+V+5]=r.y,A[B+V+6]=r.z,A[B+V+7]=0),_===!0&&(r.fromBufferAttribute(z,H),A[B+V+8]=r.x,A[B+V+9]=r.y,A[B+V+10]=r.z,A[B+V+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Qe(L,R)},n.set(a,f),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function py(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class kl extends vn{constructor(e,t,n,r,o,s,a,l,c,u=_s){if(u!==_s&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Io),n===void 0&&u===Rs&&(n=As),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fm=new vn,xd=new kl(1,1),Nm=new Tm,Om=new Kg,zm=new Lm,yd=[],Sd=[],Md=new Float32Array(16),wd=new Float32Array(9),bd=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=yd[r];if(o===void 0&&(o=new Float32Array(r),yd[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function my(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),ln(t,n)}}function yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),ln(t,n)}}function Sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),ln(t,n)}}function My(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function Ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Py(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=Mm,o=xd):o=Fm,t.setTexture2D(e||o,r)}function Dy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Om,r)}function Ly(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zm,r)}function Iy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nm,r)}function Uy(i){switch(i){case 5126:return my;case 35664:return _y;case 35665:return gy;case 35666:return vy;case 35674:return xy;case 35675:return yy;case 35676:return Sy;case 5124:case 35670:return My;case 35667:case 35671:return wy;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return Ey;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Iy}}function Fy(i,e){i.uniform1fv(this.addr,e)}function Ny(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function Oy(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function zy(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function By(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ky(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hy(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vy(i,e){i.uniform1iv(this.addr,e)}function Gy(i,e){i.uniform2iv(this.addr,e)}function Wy(i,e){i.uniform3iv(this.addr,e)}function Xy(i,e){i.uniform4iv(this.addr,e)}function qy(i,e){i.uniform1uiv(this.addr,e)}function Yy(i,e){i.uniform2uiv(this.addr,e)}function $y(i,e){i.uniform3uiv(this.addr,e)}function Zy(i,e){i.uniform4uiv(this.addr,e)}function Ky(i,e,t){const n=this.cache,r=e.length,o=Jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Fm,o[s])}function jy(i,e,t){const n=this.cache,r=e.length,o=Jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Om,o[s])}function Jy(i,e,t){const n=this.cache,r=e.length,o=Jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||zm,o[s])}function Qy(i,e,t){const n=this.cache,r=e.length,o=Jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Nm,o[s])}function eS(i){switch(i){case 5126:return Fy;case 35664:return Ny;case 35665:return Oy;case 35666:return zy;case 35674:return By;case 35675:return ky;case 35676:return Hy;case 5124:case 35670:return Vy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return $y;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){const n=i.name,r=n.length;for(Gc.lastIndex=0;;){const o=Gc.exec(n),s=Gc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Td(t,c===void 0?new tS(a,i,e):new nS(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new iS(a),Td(t,d)),t=d}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);rS(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Ed(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const oS=37297;let sS=0;function aS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Ad=new dt;function lS(i){bt._getMatrix(Ad,bt.workingColorSpace,i);const e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Zl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+aS(i.getShaderSource(e),s)}else return r}function cS(i,e){const t=lS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uS(i,e){let t;switch(e){case ag:t="Linear";break;case lg:t="Reinhard";break;case cg:t="Cineon";break;case ug:t="ACESFilmic";break;case fg:t="AgX";break;case dg:t="Neutral";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const al=new Y;function hS(){bt.getLuminanceCoefficients(al);const i=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function dS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function na(i){return i!==""}function Cd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(mS,gS)}const _S=new Map;function gS(i,e){let t=mt[e];if(t===void 0){const n=_S.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(i){return i.replace(vS,xS)}function xS(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ld(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function yS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===um?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Es:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case og:e="ENVMAP_BLENDING_MIX";break;case sg:e="ENVMAP_BLENDING_ADD";break}return e}function bS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function TS(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=yS(t),c=SS(t),u=MS(t),d=wS(t),f=bS(t),m=fS(t),v=dS(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(na).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(na).join(`
`),p.length>0&&(p+=`
`)):(_=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?mt.tonemapping_pars_fragment:"",t.toneMapping!==$i?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),s=nh(s),s=Cd(s,t),s=Pd(s,t),a=nh(a),a=Cd(a,t),a=Pd(a,t),s=Dd(s),a=Dd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+_+s,S=b+p+a,L=Ed(r,r.VERTEX_SHADER,M),R=Ed(r,r.FRAGMENT_SHADER,S);r.attachShader(g,L),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(R).trim();let B=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,R);else{const V=Rd(r,L,"vertex"),k=Rd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+V+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||z==="")&&(H=!1);H&&(C.diagnostics={runnable:B,programLog:N,vertexShader:{log:F,prefix:_},fragmentShader:{log:z,prefix:p}})}r.deleteShader(L),r.deleteShader(R),P=new Al(r,g),w=pS(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,oS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=R,this}let ES=0;class AS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RS(e),t.set(e,n)),n}}class RS{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}}function CS(i,e,t,n,r,o,s){const a=new Em,l=new AS,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,y,C,N,F){const z=N.fog,B=F.geometry,H=w.isMeshStandardMaterial?N.environment:null,V=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),k=V&&V.mapping===$l?V.image.height:null,se=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const G=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pe=G!==void 0?G.length:0;let Ee=0;B.morphAttributes.position!==void 0&&(Ee=1),B.morphAttributes.normal!==void 0&&(Ee=2),B.morphAttributes.color!==void 0&&(Ee=3);let De,Q,ne,ue;if(se){const ct=Gi[se];De=ct.vertexShader,Q=ct.fragmentShader}else De=w.vertexShader,Q=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const ce=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,$e=!!w.map,Be=!!w.matcap,et=!!V,W=!!w.aoMap,Ye=!!w.lightMap,Le=!!w.bumpMap,We=!!w.normalMap,Xe=!!w.displacementMap,st=!!w.emissiveMap,de=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,X=w.clearcoat>0,Z=w.dispersion>0,j=w.iridescence>0,ee=w.sheen>0,Re=w.transmission>0,Me=T&&!!w.anisotropyMap,_e=X&&!!w.clearcoatMap,Ie=X&&!!w.clearcoatNormalMap,me=X&&!!w.clearcoatRoughnessMap,xe=j&&!!w.iridescenceMap,Ae=j&&!!w.iridescenceThicknessMap,Pe=ee&&!!w.sheenColorMap,le=ee&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,He=!!w.specularColorMap,tt=!!w.specularIntensityMap,q=Re&&!!w.transmissionMap,ie=Re&&!!w.thicknessMap,re=!!w.gradientMap,he=!!w.alphaMap,ze=w.alphaTest>0,be=!!w.alphaHash,nt=!!w.extensions;let xt=$i;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(xt=i.toneMapping);const zt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:Q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ki,alphaToCoverage:!!w.alphaToCoverage,map:$e,matcap:Be,envMap:et,envMapMode:et&&V.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:Ye,bumpMap:Le,normalMap:We,displacementMap:f&&Xe,emissiveMap:st,normalMapObjectSpace:We&&w.normalMapType===vg,normalMapTangentSpace:We&&w.normalMapType===gg,metalnessMap:de,roughnessMap:I,anisotropy:T,anisotropyMap:Me,clearcoat:X,clearcoatMap:_e,clearcoatNormalMap:Ie,clearcoatRoughnessMap:me,dispersion:Z,iridescence:j,iridescenceMap:xe,iridescenceThicknessMap:Ae,sheen:ee,sheenColorMap:Pe,sheenRoughnessMap:le,specularMap:Oe,specularColorMap:He,specularIntensityMap:tt,transmission:Re,transmissionMap:q,thicknessMap:ie,gradientMap:re,opaque:w.transparent===!1&&w.blending===Xr&&w.alphaToCoverage===!1,alphaMap:he,alphaTest:ze,alphaHash:be,combine:w.combine,mapUv:$e&&g(w.map.channel),aoMapUv:W&&g(w.aoMap.channel),lightMapUv:Ye&&g(w.lightMap.channel),bumpMapUv:Le&&g(w.bumpMap.channel),normalMapUv:We&&g(w.normalMap.channel),displacementMapUv:Xe&&g(w.displacementMap.channel),emissiveMapUv:st&&g(w.emissiveMap.channel),metalnessMapUv:de&&g(w.metalnessMap.channel),roughnessMapUv:I&&g(w.roughnessMap.channel),anisotropyMapUv:Me&&g(w.anisotropyMap.channel),clearcoatMapUv:_e&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:le&&g(w.sheenRoughnessMap.channel),specularMapUv:Oe&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:tt&&g(w.specularIntensityMap.channel),transmissionMapUv:q&&g(w.transmissionMap.channel),thicknessMapUv:ie&&g(w.thicknessMap.channel),alphaMapUv:he&&g(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(We||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&($e||he),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Pt,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Cn,flipSided:w.side===Kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&w.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(b(y,w),M(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const y=v[w.type];let C;if(y){const N=Gi[y];C=fv.clone(N.uniforms)}else C=w.uniforms;return C}function L(w,y){let C;for(let N=0,F=u.length;N<F;N++){const z=u[N];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new TS(i,y,w,o),u.push(C)),C}function R(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function PS(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function DS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||DS),n.length>1&&n.sort(f||Id),r.length>1&&r.sort(f||Id)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function LS(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Ud,i.set(n,[s])):r>=o.length?(s=new Ud,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function IS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ke};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function US(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let FS=0;function NS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OS(i){const e=new IS,t=US(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const r=new Y,o=new St,s=new St;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,M=0,S=0,L=0,R=0,A=0;c.sort(NS);for(let w=0,y=c.length;w<y;w++){const C=c[w],N=C.color,F=C.intensity,z=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*F,d+=N.g*F,f+=N.b*F;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],F);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,k=t.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=H,m++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=z,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[g]=H;const V=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,V.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=V.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=B,S++}g++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=H,_++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const V=C.shadow,k=t.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=C.shadow.matrix,M++}n.point[v]=H,v++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(F),H.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=A,n.version=FS++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(M.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(M.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),s.identity(),o.copy(M.matrixWorld),o.premultiply(_),s.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Fd(i){const e=new OS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function zS(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Fd(i),e.set(r,[a])):o>=s.length?(a=new Fd(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class BS extends Kl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kS extends Kl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
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
}`;function GS(i,e,t){let n=new Im;const r=new Qe,o=new Qe,s=new Nt,a=new BS({depthPacking:_g}),l=new kS,c={},u=t.maxTextureSize,d={[Zr]:Kn,[Kn]:Zr,[Cn]:Cn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:HS,fragmentShader:VS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Sr;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ft(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=um;let p=this.type;this.render=function(R,A,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ri),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==cr&&this.type===cr,z=p===cr&&this.type!==cr;for(let B=0,H=R.length;B<H;B++){const V=R[B],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const se=k.getFrameExtents();if(r.multiply(se),o.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/se.x),r.x=o.x*se.x,k.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/se.y),r.y=o.y*se.y,k.mapSize.y=o.y)),k.map===null||F===!0||z===!0){const pe=this.type!==cr?{minFilter:sn,magFilter:sn}:{};k.map!==null&&k.map.dispose(),k.map=new yr(r.x,r.y,pe),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const G=k.getViewportCount();for(let pe=0;pe<G;pe++){const Ee=k.getViewport(pe);s.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),N.viewport(s),k.updateMatrices(V,pe),n=k.getFrustum(),S(A,P,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===cr&&b(k,P),k.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,y,C)};function b(R,A){const P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new yr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,m,g,null)}function M(R,A,P,w){let y=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=y.uuid,F=A.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let B=z[F];B===void 0&&(B=y.clone(),z[F]=B,A.addEventListener("dispose",L)),y=B}if(y.visible=A.visible,y.wireframe=A.wireframe,w===cr?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=P}return y}function S(R,A,P,w,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===cr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),z=R.material;if(Array.isArray(z)){const B=F.groups;for(let H=0,V=B.length;H<V;H++){const k=B[H],se=z[k.materialIndex];if(se&&se.visible){const G=M(R,se,w,y);R.onBeforeShadow(i,R,A,P,F,G,k),i.renderBufferDirect(P,null,F,G,R,k),R.onAfterShadow(i,R,A,P,F,G,k)}}}else if(z.visible){const B=M(R,z,w,y);R.onBeforeShadow(i,R,A,P,F,B,null),i.renderBufferDirect(P,null,F,B,R,null),R.onAfterShadow(i,R,A,P,F,B,null)}}const N=R.children;for(let F=0,z=N.length;F<z;F++)S(N[F],A,P,w,y)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const w=c[P],y=R.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const WS={[Su]:Mu,[wu]:Eu,[bu]:Au,[bs]:Tu,[Mu]:Su,[Eu]:wu,[Au]:bu,[Tu]:bs};function XS(i,e){function t(){let q=!1;const ie=new Nt;let re=null;const he=new Nt(0,0,0,0);return{setMask:function(ze){re!==ze&&!q&&(i.colorMask(ze,ze,ze,ze),re=ze)},setLocked:function(ze){q=ze},setClear:function(ze,be,nt,xt,zt){zt===!0&&(ze*=xt,be*=xt,nt*=xt),ie.set(ze,be,nt,xt),he.equals(ie)===!1&&(i.clearColor(ze,be,nt,xt),he.copy(ie))},reset:function(){q=!1,re=null,he.set(-1,0,0,0)}}}function n(){let q=!1,ie=!1,re=null,he=null,ze=null;return{setReversed:function(be){if(ie!==be){const nt=e.get("EXT_clip_control");ie?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const xt=ze;ze=null,this.setClear(xt)}ie=be},getReversed:function(){return ie},setTest:function(be){be?ce(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(be){re!==be&&!q&&(i.depthMask(be),re=be)},setFunc:function(be){if(ie&&(be=WS[be]),he!==be){switch(be){case Su:i.depthFunc(i.NEVER);break;case Mu:i.depthFunc(i.ALWAYS);break;case wu:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case bu:i.depthFunc(i.EQUAL);break;case Tu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case Au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=be}},setLocked:function(be){q=be},setClear:function(be){ze!==be&&(ie&&(be=1-be),i.clearDepth(be),ze=be)},reset:function(){q=!1,re=null,he=null,ze=null,ie=!1}}}function r(){let q=!1,ie=null,re=null,he=null,ze=null,be=null,nt=null,xt=null,zt=null;return{setTest:function(ct){q||(ct?ce(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(ct){ie!==ct&&!q&&(i.stencilMask(ct),ie=ct)},setFunc:function(ct,Lt,Dn){(re!==ct||he!==Lt||ze!==Dn)&&(i.stencilFunc(ct,Lt,Dn),re=ct,he=Lt,ze=Dn)},setOp:function(ct,Lt,Dn){(be!==ct||nt!==Lt||xt!==Dn)&&(i.stencilOp(ct,Lt,Dn),be=ct,nt=Lt,xt=Dn)},setLocked:function(ct){q=ct},setClear:function(ct){zt!==ct&&(i.clearStencil(ct),zt=ct)},reset:function(){q=!1,ie=null,re=null,he=null,ze=null,be=null,nt=null,xt=null,zt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,M=null,S=null,L=null,R=null,A=new Ke(0,0,0),P=0,w=!1,y=null,C=null,N=null,F=null,z=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=V>=2);let se=null,G={};const pe=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),De=new Nt().fromArray(pe),Q=new Nt().fromArray(Ee);function ne(q,ie,re,he){const ze=new Uint8Array(4),be=i.createTexture();i.bindTexture(q,be),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<re;nt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(ie+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return be}const ue={};ue[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),s.setFunc(bs),Le(!1),We(Of),ce(i.CULL_FACE),W(Ri);function ce(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function ge(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function ke(q,ie){return d[q]!==ie?(i.bindFramebuffer(q,ie),d[q]=ie,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(q,ie){let re=m,he=!1;if(q){re=f.get(ie),re===void 0&&(re=[],f.set(ie,re));const ze=q.textures;if(re.length!==ze.length||re[0]!==i.COLOR_ATTACHMENT0){for(let be=0,nt=ze.length;be<nt;be++)re[be]=i.COLOR_ATTACHMENT0+be;re.length=ze.length,he=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,he=!0);he&&i.drawBuffers(re)}function $e(q){return v!==q?(i.useProgram(q),v=q,!0):!1}const Be={[On]:i.FUNC_ADD,[W_]:i.FUNC_SUBTRACT,[X_]:i.FUNC_REVERSE_SUBTRACT};Be[q_]=i.MIN,Be[Y_]=i.MAX;const et={[Sl]:i.ZERO,[mi]:i.ONE,[$_]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[eg]:i.SRC_ALPHA_SATURATE,[J_]:i.DST_COLOR,[K_]:i.DST_ALPHA,[Z_]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Q_]:i.ONE_MINUS_DST_COLOR,[j_]:i.ONE_MINUS_DST_ALPHA,[tg]:i.CONSTANT_COLOR,[ng]:i.ONE_MINUS_CONSTANT_COLOR,[ig]:i.CONSTANT_ALPHA,[rg]:i.ONE_MINUS_CONSTANT_ALPHA};function W(q,ie,re,he,ze,be,nt,xt,zt,ct){if(q===Ri){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),q!==xa){if(q!==_||ct!==w){if((p!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),p=On,S=On),ct)switch(q){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zf:i.blendFunc(i.ONE,i.ONE);break;case Bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,M=null,L=null,R=null,A.set(0,0,0),P=0,_=q,w=ct}return}ze=ze||ie,be=be||re,nt=nt||he,(ie!==p||ze!==S)&&(i.blendEquationSeparate(Be[ie],Be[ze]),p=ie,S=ze),(re!==b||he!==M||be!==L||nt!==R)&&(i.blendFuncSeparate(et[re],et[he],et[be],et[nt]),b=re,M=he,L=be,R=nt),(xt.equals(A)===!1||zt!==P)&&(i.blendColor(xt.r,xt.g,xt.b,zt),A.copy(xt),P=zt),_=q,w=!1}function Ye(q,ie){q.side===Cn?ge(i.CULL_FACE):ce(i.CULL_FACE);let re=q.side===Kn;ie&&(re=!re),Le(re),q.blending===Xr&&q.transparent===!1?W(Ri):W(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),s.setFunc(q.depthFunc),s.setTest(q.depthTest),s.setMask(q.depthWrite),o.setMask(q.colorWrite);const he=q.stencilWrite;a.setTest(he),he&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),st(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(q){y!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),y=q)}function We(q){q!==H_?(ce(i.CULL_FACE),q!==C&&(q===Of?i.cullFace(i.BACK):q===V_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),C=q}function Xe(q){q!==N&&(H&&i.lineWidth(q),N=q)}function st(q,ie,re){q?(ce(i.POLYGON_OFFSET_FILL),(F!==ie||z!==re)&&(i.polygonOffset(ie,re),F=ie,z=re)):ge(i.POLYGON_OFFSET_FILL)}function de(q){q?ce(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function I(q){q===void 0&&(q=i.TEXTURE0+B-1),se!==q&&(i.activeTexture(q),se=q)}function T(q,ie,re){re===void 0&&(se===null?re=i.TEXTURE0+B-1:re=se);let he=G[re];he===void 0&&(he={type:void 0,texture:void 0},G[re]=he),(he.type!==q||he.texture!==ie)&&(se!==re&&(i.activeTexture(re),se=re),i.bindTexture(q,ie||ue[q]),he.type=q,he.texture=ie)}function X(){const q=G[se];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(q){De.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),De.copy(q))}function le(q){Q.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function Oe(q,ie){let re=c.get(ie);re===void 0&&(re=new WeakMap,c.set(ie,re));let he=re.get(q);he===void 0&&(he=i.getUniformBlockIndex(ie,q.name),re.set(q,he))}function He(q,ie){const he=c.get(ie).get(q);l.get(ie)!==he&&(i.uniformBlockBinding(ie,he,q.__bindingPointIndex),l.set(ie,he))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,G={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,M=null,S=null,L=null,R=null,A=new Ke(0,0,0),P=0,w=!1,y=null,C=null,N=null,F=null,z=null,De.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:ge,bindFramebuffer:ke,drawBuffers:Ne,useProgram:$e,setBlending:W,setMaterial:Ye,setFlipSided:Le,setCullFace:We,setLineWidth:Xe,setPolygonOffset:st,setScissorTest:de,activeTexture:I,bindTexture:T,unbindTexture:X,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:xe,texImage3D:Ae,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:Ie,texStorage3D:me,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:Me,compressedTexSubImage3D:_e,scissor:Pe,viewport:le,reset:tt}}function Nd(i,e,t,n){const r=qS(n);switch(t){case _m:return i*e;case vm:return i*e;case xm:return i*e*2;case Ph:return i*e/r.components*r.byteLength;case Dh:return i*e/r.components*r.byteLength;case ym:return i*e*2/r.components*r.byteLength;case Lh:return i*e*2/r.components*r.byteLength;case gm:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case Ih:return i*e*4/r.components*r.byteLength;case Ml:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Du:case Iu:return Math.max(i,16)*Math.max(e,8)/4;case Pu:case Lu:return Math.max(i,8)*Math.max(e,8)/2;case Uu:case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case El:case ju:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sm:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qS(i){switch(i){case Ci:case dm:return{byteLength:1,components:1};case Lo:case pm:case Yi:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Io:case Ah:case Xn:return{byteLength:4,components:1};case mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function YS(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return m?new OffscreenCanvas(I,T):Sa("canvas")}function g(I,T,X){let Z=1;const j=de(I);if((j.width>X||j.height>X)&&(Z=X/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(Z*j.width),Re=Math.floor(Z*j.height);d===void 0&&(d=v(ee,Re));const Me=T?v(ee,Re):d;return Me.width=ee,Me.height=Re,Me.getContext("2d").drawImage(I,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ee+"x"+Re+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,T,X,Z,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=T;if(T===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),T===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),T===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),T===i.RGBA){const Re=j?Zl:bt.getTransfer(Z);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=Re===Pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(I,T){let X;return I?T===null||T===Io||T===As?X=i.DEPTH24_STENCIL8:T===Xn?X=i.DEPTH32F_STENCIL8:T===Lo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Io||T===As?X=i.DEPTH_COMPONENT24:T===Xn?X=i.DEPTH_COMPONENT32F:T===Lo&&(X=i.DEPTH_COMPONENT16),X}function L(I,T){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==sn&&I.minFilter!==vt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function R(I){const T=I.target;T.removeEventListener("dispose",R),P(T),T.isVideoTexture&&u.delete(T)}function A(I){const T=I.target;T.removeEventListener("dispose",A),y(T)}function P(I){const T=n.get(I);if(T.__webglInit===void 0)return;const X=I.source,Z=f.get(X);if(Z){const j=Z[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(I),Object.keys(Z).length===0&&f.delete(X)}n.remove(I)}function w(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const X=I.source,Z=f.get(X);delete Z[T.__cacheKey],s.memory.textures--}function y(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let j=0;j<T.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(T.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=I.textures;for(let Z=0,j=X.length;Z<j;Z++){const ee=n.get(X[Z]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),n.remove(X[Z])}n.remove(I)}let C=0;function N(){C=0}function F(){const I=C;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),C+=1,I}function z(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function B(I,T){const X=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,I,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function H(I,T){const X=n.get(I);if(I.version>0&&X.__version!==I.version){Q(X,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function V(I,T){const X=n.get(I);if(I.version>0&&X.__version!==I.version){Q(X,I,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function k(I,T){const X=n.get(I);if(I.version>0&&X.__version!==I.version){ne(X,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}const se={[ms]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},G={[sn]:i.NEAREST,[pg]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[gc]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},pe={[xg]:i.NEVER,[Tg]:i.ALWAYS,[yg]:i.LESS,[Mm]:i.LEQUAL,[Sg]:i.EQUAL,[bg]:i.GEQUAL,[Mg]:i.GREATER,[wg]:i.NOTEQUAL};function Ee(I,T){if(T.type===Xn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vt||T.magFilter===gc||T.magFilter===Ha||T.magFilter===qi||T.minFilter===vt||T.minFilter===gc||T.minFilter===Ha||T.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,se[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,se[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,se[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,G[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===sn||T.minFilter!==Ha&&T.minFilter!==qi||T.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function De(I,T){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",R));const Z=T.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const ee=z(T);if(ee!==I.__cacheKey){j[ee]===void 0&&(j[ee]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,X=!0),j[ee].usedTimes++;const Re=j[I.__cacheKey];Re!==void 0&&(j[I.__cacheKey].usedTimes--,Re.usedTimes===0&&w(T)),I.__cacheKey=ee,I.__webglTexture=j[ee].texture}return X}function Q(I,T,X){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const j=De(I,T),ee=T.source;t.bindTexture(Z,I.__webglTexture,i.TEXTURE0+X);const Re=n.get(ee);if(ee.version!==Re.__version||j===!0){t.activeTexture(i.TEXTURE0+X);const Me=bt.getPrimaries(bt.workingColorSpace),_e=T.colorSpace===Qt?null:bt.getPrimaries(T.colorSpace),Ie=T.colorSpace===Qt||Me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let me=g(T.image,!1,r.maxTextureSize);me=st(T,me);const xe=o.convert(T.format,T.colorSpace),Ae=o.convert(T.type);let Pe=M(T.internalFormat,xe,Ae,T.colorSpace,T.isVideoTexture);Ee(Z,T);let le;const Oe=T.mipmaps,He=T.isVideoTexture!==!0,tt=Re.__version===void 0||j===!0,q=ee.dataReady,ie=L(T,me);if(T.isDepthTexture)Pe=S(T.format===Rs,T.type),tt&&(He?t.texStorage2D(i.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Pe,me.width,me.height,0,xe,Ae,null));else if(T.isDataTexture)if(Oe.length>0){He&&tt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,Oe[0].width,Oe[0].height);for(let re=0,he=Oe.length;re<he;re++)le=Oe[re],He?q&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,le.width,le.height,xe,Ae,le.data):t.texImage2D(i.TEXTURE_2D,re,Pe,le.width,le.height,0,xe,Ae,le.data);T.generateMipmaps=!1}else He?(tt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,me.width,me.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,xe,Ae,me.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,me.width,me.height,0,xe,Ae,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Pe,Oe[0].width,Oe[0].height,me.depth);for(let re=0,he=Oe.length;re<he;re++)if(le=Oe[re],T.format!==_n)if(xe!==null)if(He){if(q)if(T.layerUpdates.size>0){const ze=Nd(le.width,le.height,T.format,T.type);for(const be of T.layerUpdates){const nt=le.data.subarray(be*ze/le.data.BYTES_PER_ELEMENT,(be+1)*ze/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,be,le.width,le.height,1,xe,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,me.depth,xe,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Pe,le.width,le.height,me.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,me.depth,xe,Ae,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Pe,le.width,le.height,me.depth,0,xe,Ae,le.data)}else{He&&tt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,Oe[0].width,Oe[0].height);for(let re=0,he=Oe.length;re<he;re++)le=Oe[re],T.format!==_n?xe!==null?He?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,le.width,le.height,xe,le.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?q&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,le.width,le.height,xe,Ae,le.data):t.texImage2D(i.TEXTURE_2D,re,Pe,le.width,le.height,0,xe,Ae,le.data)}else if(T.isDataArrayTexture)if(He){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Pe,me.width,me.height,me.depth),q)if(T.layerUpdates.size>0){const re=Nd(me.width,me.height,T.format,T.type);for(const he of T.layerUpdates){const ze=me.data.subarray(he*re/me.data.BYTES_PER_ELEMENT,(he+1)*re/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,xe,Ae,ze)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(T.isData3DTexture)He?(tt&&t.texStorage3D(i.TEXTURE_3D,ie,Pe,me.width,me.height,me.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(T.isFramebufferTexture){if(tt)if(He)t.texStorage2D(i.TEXTURE_2D,ie,Pe,me.width,me.height);else{let re=me.width,he=me.height;for(let ze=0;ze<ie;ze++)t.texImage2D(i.TEXTURE_2D,ze,Pe,re,he,0,xe,Ae,null),re>>=1,he>>=1}}else if(Oe.length>0){if(He&&tt){const re=de(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ie,Pe,re.width,re.height)}for(let re=0,he=Oe.length;re<he;re++)le=Oe[re],He?q&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,xe,Ae,le):t.texImage2D(i.TEXTURE_2D,re,Pe,xe,Ae,le);T.generateMipmaps=!1}else if(He){if(tt){const re=de(me);t.texStorage2D(i.TEXTURE_2D,ie,Pe,re.width,re.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ae,me)}else t.texImage2D(i.TEXTURE_2D,0,Pe,xe,Ae,me);_(T)&&p(Z),Re.__version=ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ne(I,T,X){if(T.image.length!==6)return;const Z=De(I,T),j=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const ee=n.get(j);if(j.version!==ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+X);const Re=bt.getPrimaries(bt.workingColorSpace),Me=T.colorSpace===Qt?null:bt.getPrimaries(T.colorSpace),_e=T.colorSpace===Qt||Re===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let he=0;he<6;he++)!Ie&&!me?xe[he]=g(T.image[he],!0,r.maxCubemapSize):xe[he]=me?T.image[he].image:T.image[he],xe[he]=st(T,xe[he]);const Ae=xe[0],Pe=o.convert(T.format,T.colorSpace),le=o.convert(T.type),Oe=M(T.internalFormat,Pe,le,T.colorSpace),He=T.isVideoTexture!==!0,tt=ee.__version===void 0||Z===!0,q=j.dataReady;let ie=L(T,Ae);Ee(i.TEXTURE_CUBE_MAP,T);let re;if(Ie){He&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Oe,Ae.width,Ae.height);for(let he=0;he<6;he++){re=xe[he].mipmaps;for(let ze=0;ze<re.length;ze++){const be=re[ze];T.format!==_n?Pe!==null?He?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,be.width,be.height,Pe,le,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,Oe,be.width,be.height,0,Pe,le,be.data)}}}else{if(re=T.mipmaps,He&&tt){re.length>0&&ie++;const he=de(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Oe,he.width,he.height)}for(let he=0;he<6;he++)if(me){He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,xe[he].width,xe[he].height,Pe,le,xe[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Oe,xe[he].width,xe[he].height,0,Pe,le,xe[he].data);for(let ze=0;ze<re.length;ze++){const nt=re[ze].image[he].image;He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,nt.width,nt.height,Pe,le,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,Oe,nt.width,nt.height,0,Pe,le,nt.data)}}else{He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe,le,xe[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Oe,Pe,le,xe[he]);for(let ze=0;ze<re.length;ze++){const be=re[ze];He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Pe,le,be.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,Oe,Pe,le,be.image[he])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),ee.__version=j.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ue(I,T,X,Z,j,ee){const Re=o.convert(X.format,X.colorSpace),Me=o.convert(X.type),_e=M(X.internalFormat,Re,Me,X.colorSpace),Ie=n.get(T),me=n.get(X);if(me.__renderTarget=T,!Ie.__hasExternalTextures){const xe=Math.max(1,T.width>>ee),Ae=Math.max(1,T.height>>ee);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ee,_e,xe,Ae,T.depth,0,Re,Me,null):t.texImage2D(j,ee,_e,xe,Ae,0,Re,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,me.__webglTexture,0,Le(T)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,me.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const Z=T.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,ee=S(T.stencilBuffer,j),Re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=Le(T);We(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ee,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ee,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,I)}else{const Z=T.textures;for(let j=0;j<Z.length;j++){const ee=Z[j],Re=o.convert(ee.format,ee.colorSpace),Me=o.convert(ee.type),_e=M(ee.internalFormat,Re,Me,ee.colorSpace),Ie=Le(T);X&&We(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,_e,T.width,T.height):We(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,_e,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_e,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const j=Z.__webglTexture,ee=Le(T);if(T.depthTexture.format===_s)We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(T.depthTexture.format===Rs)We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(I){const T=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=Z}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,I)}else if(X){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(T.__webglDepthbuffer[Z],I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ce(T.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,T,X){const Z=n.get(I);T!==void 0&&ue(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ke(I)}function $e(I){const T=I.texture,X=n.get(I),Z=n.get(T);I.addEventListener("dispose",A);const j=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Re=j.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,s.memory.textures++),ee){X.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[Me]=[];for(let _e=0;_e<T.mipmaps.length;_e++)X.__webglFramebuffer[Me][_e]=i.createFramebuffer()}else X.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let Me=0;Me<T.mipmaps.length;Me++)X.__webglFramebuffer[Me]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Re)for(let Me=0,_e=j.length;Me<_e;Me++){const Ie=n.get(j[Me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),s.memory.textures++)}if(I.samples>0&&We(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Me=0;Me<j.length;Me++){const _e=j[Me];X.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const Ie=o.convert(_e.format,_e.colorSpace),me=o.convert(_e.type),xe=M(_e.internalFormat,Ie,me,_e.colorSpace,I.isXRRenderTarget===!0),Ae=Le(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,xe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,X.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,T);for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)ue(X.__webglFramebuffer[Me][_e],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_e);else ue(X.__webglFramebuffer[Me],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let Me=0,_e=j.length;Me<_e;Me++){const Ie=j[Me],me=n.get(Ie);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ee(i.TEXTURE_2D,Ie),ue(X.__webglFramebuffer,I,Ie,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),_(Ie)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Z.__webglTexture),Ee(Me,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)ue(X.__webglFramebuffer[_e],I,T,i.COLOR_ATTACHMENT0,Me,_e);else ue(X.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,Me,0);_(T)&&p(Me),t.unbindTexture()}I.depthBuffer&&ke(I)}function Be(I){const T=I.textures;for(let X=0,Z=T.length;X<Z;X++){const j=T[X];if(_(j)){const ee=b(I),Re=n.get(j).__webglTexture;t.bindTexture(ee,Re),p(ee),t.unbindTexture()}}}const et=[],W=[];function Ye(I){if(I.samples>0){if(We(I)===!1){const T=I.textures,X=I.width,Z=I.height;let j=i.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(I),Me=T.length>1;if(Me)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ie=n.get(T[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,X,Z,0,0,X,Z,j,i.NEAREST),l===!0&&(et.length=0,W.length=0,et.push(i.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(et.push(ee),W.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ie=n.get(T[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Le(I){return Math.min(r.maxSamples,I.samples)}function We(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(I){const T=s.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function st(I,T){const X=I.colorSpace,Z=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Ki&&X!==Qt&&(bt.getTransfer(X)===Pt?(Z!==_n||j!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function de(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Ne,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=We}function $S(i,e){function t(n,r=Qt){let o;const s=bt.getTransfer(r);if(n===Ci)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dm)return i.BYTE;if(n===pm)return i.SHORT;if(n===Lo)return i.UNSIGNED_SHORT;if(n===Ah)return i.INT;if(n===Io)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===_m)return i.ALPHA;if(n===gm)return i.RGB;if(n===_n)return i.RGBA;if(n===vm)return i.LUMINANCE;if(n===xm)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Dh)return i.RED_INTEGER;if(n===ym)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===Ml||n===wl||n===bl||n===Tl)if(s===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Du||n===Lu||n===Iu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Pu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Du)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Iu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uu||n===Fu||n===Nu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Uu||n===Fu)return s===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Nu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===zu||n===Bu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===$u||n===Zu||n===Ku)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ou)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ku)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===ju||n===Ju)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===El)return s===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ju)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sm||n===Qu||n===eh||n===th)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===El)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Qu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ZS extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new vn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:jS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends Ps{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new QS,_=t.getContextAttributes();let p=null,b=null;const M=[],S=[],L=new Qe;let R=null;const A=new Gn;A.viewport=new Nt;const P=new Gn;P.viewport=new Nt;const w=[A,P],y=new ZS;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=M[Q];return ne===void 0&&(ne=new Wc,M[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=M[Q];return ne===void 0&&(ne=new Wc,M[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=M[Q];return ne===void 0&&(ne=new Wc,M[Q]=ne),ne.getHandSpace()};function F(Q){const ne=S.indexOf(Q.inputSource);if(ne===-1)return;const ue=M[ne];ue!==void 0&&(ue.update(Q.inputSource,Q.frame,c||s),ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<M.length;Q++){const ne=S[Q];ne!==null&&(S[Q]=null,M[Q].disconnect(ne))}C=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ne={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new yr(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,ue=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?Rs:_s,ue=_.stencil?As:Io);const ge={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new yr(f.textureWidth,f.textureHeight,{format:_n,type:Ci,depthTexture:new kl(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Q){for(let ne=0;ne<Q.removed.length;ne++){const ue=Q.removed[ne],ce=S.indexOf(ue);ce>=0&&(S[ce]=null,M[ce].disconnect(ue))}for(let ne=0;ne<Q.added.length;ne++){const ue=Q.added[ne];let ce=S.indexOf(ue);if(ce===-1){for(let ke=0;ke<M.length;ke++)if(ke>=S.length){S.push(ue),ce=ke;break}else if(S[ke]===null){S[ke]=ue,ce=ke;break}if(ce===-1)break}const ge=M[ce];ge&&ge.connect(ue)}}const H=new Y,V=new Y;function k(Q,ne,ue){H.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);const ce=H.distanceTo(V),ge=ne.projectionMatrix.elements,ke=ue.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),$e=ge[14]/(ge[10]+1),Be=(ge[9]+1)/ge[5],et=(ge[9]-1)/ge[5],W=(ge[8]-1)/ge[0],Ye=(ke[8]+1)/ke[0],Le=Ne*W,We=Ne*Ye,Xe=ce/(-W+Ye),st=Xe*-W;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(st),Q.translateZ(Xe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ge[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const de=Ne+Xe,I=$e+Xe,T=Le-st,X=We+(ce-st),Z=Be*$e/I*de,j=et*$e/I*de;Q.projectionMatrix.makePerspective(T,X,Z,j,de,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,ue=Q.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),y.near=P.near=A.near=ne,y.far=P.far=A.far=ue,(C!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,N=y.far),A.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const ce=Q.parent,ge=y.cameras;se(y,ce);for(let ke=0;ke<ge.length;ke++)se(ge[ke],ce);ge.length===2?k(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),G(Q,y,ce)};function G(Q,ne,ue){ue===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ya*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let pe=null;function Ee(Q,ne){if(u=ne.getViewerPose(c||s),v=ne,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ce=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let ke=0;ke<ue.length;ke++){const Ne=ue[ke];let $e=null;if(m!==null)$e=m.getViewport(Ne);else{const et=d.getViewSubImage(f,Ne);$e=et.viewport,ke===0&&(e.setRenderTargetTextures(b,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(b))}let Be=w[ke];Be===void 0&&(Be=new Gn,Be.layers.enable(ke),Be.viewport=new Nt,w[ke]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set($e.x,$e.y,$e.width,$e.height),ke===0&&(y.matrix.copy(Be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Be)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const ke=d.getDepthInformation(ue[0]);ke&&ke.isValid&&ke.texture&&g.init(e,ke,r.renderState)}}for(let ue=0;ue<M.length;ue++){const ce=S[ue],ge=M[ue];ce!==null&&ge!==void 0&&ge.update(ce,ne,c||s)}pe&&pe(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const De=new Um;De.setAnimationLoop(Ee),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const _o=new fi,tM=new St;function nM(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Pm(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,S)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,M):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Kn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Kn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,S=b.envMapRotation;M&&(_.envMap.value=M,_o.copy(S),_o.x*=-1,_o.y*=-1,_o.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),_.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(_o)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,M){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=M*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iM(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=r[b.id];S===void 0&&(v(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",_));const L=M.program;n.updateUBOMapping(b,L);const R=e.render.frame;o[b.id]!==R&&(f(b),o[b.id]=R)}function u(b){const M=d();b.__bindingPointIndex=M;const S=i.createBuffer(),L=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],S=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,A=S.length;R<A;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,y=P.length;w<y;w++){const C=P[w];if(m(C,R,w,L)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let B=0;B<F.length;B++){const H=F[B],V=g(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+z,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,S,L){const R=b.value,A=M+"_"+S;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const P=L[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function v(b){const M=b.uniforms;let S=0;const L=16;for(let A=0,P=M.length;A<P;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,C=w.length;y<C;y++){const N=w[y],F=Array.isArray(N.value)?N.value:[N.value];for(let z=0,B=F.length;z<B;z++){const H=F[z],V=g(H),k=S%L,se=k%V.boundary,G=k+se;S+=se,G!==0&&L-G<V.storage&&(S+=L-G),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=V.storage}}}const R=S%L;return R>0&&(S+=L-R),b.__size=S,b.__cache={},this}function g(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function _(b){const M=b.target;M.removeEventListener("dispose",_);const S=s.indexOf(M.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Ql{constructor(e={}){const{canvas:t=Vg(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=$i,this.toneMappingExposure=1;const S=this;let L=!1,R=0,A=0,P=null,w=-1,y=null;const C=new Nt,N=new Nt;let F=null;const z=new Ke(0);let B=0,H=t.width,V=t.height,k=1,se=null,G=null;const pe=new Nt(0,0,H,V),Ee=new Nt(0,0,H,V);let De=!1;const Q=new Im;let ne=!1,ue=!1;const ce=new St,ge=new St,ke=new Y,Ne=new Nt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function et(){return P===null?k:1}let W=n;function Ye(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",be,!1),W===null){const x="webgl2";if(W=Ye(x,h),W===null)throw Ye(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Le,We,Xe,st,de,I,T,X,Z,j,ee,Re,Me,_e,Ie,me,xe,Ae,Pe,le,Oe,He,tt,q;function ie(){Le=new cy(W),Le.init(),He=new $S(W,Le),We=new iy(W,Le,e,He),Xe=new XS(W,Le),We.reverseDepthBuffer&&f&&Xe.buffers.depth.setReversed(!0),st=new fy(W),de=new PS,I=new YS(W,Le,Xe,de,We,He,st),T=new oy(S),X=new ly(S),Z=new xv(W),tt=new ty(W,Z),j=new uy(W,Z,st,tt),ee=new py(W,j,Z,st),Pe=new dy(W,We,I),me=new ry(de),Re=new CS(S,T,X,Le,We,tt,me),Me=new nM(S,de),_e=new LS,Ie=new zS(Le),Ae=new ey(S,T,X,Xe,ee,m,l),xe=new GS(S,ee,We),q=new iM(W,st,We,Xe),le=new ny(W,Le,st),Oe=new hy(W,Le,st),st.programs=Re.programs,S.capabilities=We,S.extensions=Le,S.properties=de,S.renderLists=_e,S.shadowMap=xe,S.state=Xe,S.info=st}ie();const re=new eM(S,W);this.xr=re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const h=Le.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Le.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(h){h!==void 0&&(k=h,this.setSize(H,V,!1))},this.getSize=function(h){return h.set(H,V)},this.setSize=function(h,x,E=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=h,V=x,t.width=Math.floor(h*k),t.height=Math.floor(x*k),E===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(H*k,V*k).floor()},this.setDrawingBufferSize=function(h,x,E){H=h,V=x,k=E,t.width=Math.floor(h*E),t.height=Math.floor(x*E),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(C)},this.getViewport=function(h){return h.copy(pe)},this.setViewport=function(h,x,E,D){h.isVector4?pe.set(h.x,h.y,h.z,h.w):pe.set(h,x,E,D),Xe.viewport(C.copy(pe).multiplyScalar(k).round())},this.getScissor=function(h){return h.copy(Ee)},this.setScissor=function(h,x,E,D){h.isVector4?Ee.set(h.x,h.y,h.z,h.w):Ee.set(h,x,E,D),Xe.scissor(N.copy(Ee).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(h){Xe.setScissorTest(De=h)},this.setOpaqueSort=function(h){se=h},this.setTransparentSort=function(h){G=h},this.getClearColor=function(h){return h.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(h=!0,x=!0,E=!0){let D=0;if(h){let U=!1;if(P!==null){const O=P.texture.format;U=O===Ih||O===Lh||O===Dh}if(U){const O=P.texture.type,$=O===Ci||O===Io||O===Lo||O===As||O===Rh||O===Ch,oe=Ae.getClearColor(),J=Ae.getClearAlpha(),te=oe.r,K=oe.g,ae=oe.b;$?(v[0]=te,v[1]=K,v[2]=ae,v[3]=J,W.clearBufferuiv(W.COLOR,0,v)):(g[0]=te,g[1]=K,g[2]=ae,g[3]=J,W.clearBufferiv(W.COLOR,0,g))}else D|=W.COLOR_BUFFER_BIT}x&&(D|=W.DEPTH_BUFFER_BIT),E&&(D|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",be,!1),_e.dispose(),Ie.dispose(),de.dispose(),T.dispose(),X.dispose(),ee.dispose(),tt.dispose(),q.dispose(),Re.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pi),re.removeEventListener("sessionend",Jr),kn.stop()};function he(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=st.autoReset,x=xe.enabled,E=xe.autoUpdate,D=xe.needsUpdate,U=xe.type;ie(),st.autoReset=h,xe.enabled=x,xe.autoUpdate=E,xe.needsUpdate=D,xe.type=U}function be(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function nt(h){const x=h.target;x.removeEventListener("dispose",nt),xt(x)}function xt(h){zt(h),de.remove(h)}function zt(h){const x=de.get(h).programs;x!==void 0&&(x.forEach(function(E){Re.releaseProgram(E)}),h.isShaderMaterial&&Re.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,E,D,U,O){x===null&&(x=$e);const $=U.isMesh&&U.matrixWorld.determinant()<0,oe=Us(h,x,E,D,U);Xe.setMaterial(D,$);let J=E.index,te=1;if(D.wireframe===!0){if(J=j.getWireframeAttribute(E),J===void 0)return;te=2}const K=E.drawRange,ae=E.attributes.position;let ve=K.start*te,we=(K.start+K.count)*te;O!==null&&(ve=Math.max(ve,O.start*te),we=Math.min(we,(O.start+O.count)*te)),J!==null?(ve=Math.max(ve,0),we=Math.min(we,J.count)):ae!=null&&(ve=Math.max(ve,0),we=Math.min(we,ae.count));const Ue=we-ve;if(Ue<0||Ue===1/0)return;tt.setup(U,D,oe,E,J);let Ce,Te=le;if(J!==null&&(Ce=Z.get(J),Te=Oe,Te.setIndex(Ce)),U.isMesh)D.wireframe===!0?(Xe.setLineWidth(D.wireframeLinewidth*et()),Te.setMode(W.LINES)):Te.setMode(W.TRIANGLES);else if(U.isLine){let ye=D.linewidth;ye===void 0&&(ye=1),Xe.setLineWidth(ye*et()),U.isLineSegments?Te.setMode(W.LINES):U.isLineLoop?Te.setMode(W.LINE_LOOP):Te.setMode(W.LINE_STRIP)}else U.isPoints?Te.setMode(W.POINTS):U.isSprite&&Te.setMode(W.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Te.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Te.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,ht=U._multiDrawCounts,Je=U._multiDrawCount,Ct=J?Z.get(J).bytesPerElement:1,ot=de.get(D).currentProgram.getUniforms();for(let it=0;it<Je;it++)ot.setValue(W,"_gl_DrawID",it),Te.render(ye[it]/Ct,ht[it])}else if(U.isInstancedMesh)Te.renderInstances(ve,Ue,U.count);else if(E.isInstancedBufferGeometry){const ye=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,ht=Math.min(E.instanceCount,ye);Te.renderInstances(ve,Ue,ht)}else Te.render(ve,Ue)};function ct(h,x,E){h.transparent===!0&&h.side===Cn&&h.forceSinglePass===!1?(h.side=Kn,h.needsUpdate=!0,wr(h,x,E),h.side=Zr,h.needsUpdate=!0,wr(h,x,E),h.side=Cn):wr(h,x,E)}this.compile=function(h,x,E=null){E===null&&(E=h),p=Ie.get(E),p.init(x),M.push(p),E.traverseVisible(function(U){U.isLight&&U.layers.test(x.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),h!==E&&h.traverseVisible(function(U){U.isLight&&U.layers.test(x.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const D=new Set;return h.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const O=U.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){const oe=O[$];ct(oe,E,U),D.add(oe)}else ct(O,E,U),D.add(O)}),M.pop(),p=null,D},this.compileAsync=function(h,x,E=null){const D=this.compile(h,x,E);return new Promise(U=>{function O(){if(D.forEach(function($){de.get($).currentProgram.isReady()&&D.delete($)}),D.size===0){U(h);return}setTimeout(O,10)}Le.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Lt=null;function Dn(h){Lt&&Lt(h)}function Pi(){kn.stop()}function Jr(){kn.start()}const kn=new Um;kn.setAnimationLoop(Dn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(h){Lt=h,re.setAnimationLoop(h),h===null?kn.stop():kn.start()},re.addEventListener("sessionstart",Pi),re.addEventListener("sessionend",Jr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,P),p=Ie.get(h,M.length),p.init(x),M.push(p),ge.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Q.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,ne=me.init(this.clippingPlanes,ue),_=_e.get(h,b.length),_.init(),b.push(_),re.enabled===!0&&re.isPresenting===!0){const O=S.xr.getDepthSensingMesh();O!==null&&Di(O,x,-1/0,S.sortObjects)}Di(h,x,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(se,G),Be=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Be&&Ae.addToRenderList(_,h),this.info.render.frame++,ne===!0&&me.beginShadows();const E=p.state.shadowsArray;xe.render(E,h,x),ne===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,U=_.transmissive;if(p.setupLights(),x.isArrayCamera){const O=x.cameras;if(U.length>0)for(let $=0,oe=O.length;$<oe;$++){const J=O[$];Qr(D,U,h,J)}Be&&Ae.render(h);for(let $=0,oe=O.length;$<oe;$++){const J=O[$];Mr(_,h,J,J.viewport)}}else U.length>0&&Qr(D,U,h,x),Be&&Ae.render(h),Mr(_,h,x);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(S,h,x),tt.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&me.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Di(h,x,E,D){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)E=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Q.intersectsSprite(h)){D&&Ne.setFromMatrixPosition(h.matrixWorld).applyMatrix4(ge);const $=ee.update(h),oe=h.material;oe.visible&&_.push(h,$,oe,E,Ne.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Q.intersectsObject(h))){const $=ee.update(h),oe=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ne.copy(h.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ne.copy($.boundingSphere.center)),Ne.applyMatrix4(h.matrixWorld).applyMatrix4(ge)),Array.isArray(oe)){const J=$.groups;for(let te=0,K=J.length;te<K;te++){const ae=J[te],ve=oe[ae.materialIndex];ve&&ve.visible&&_.push(h,$,ve,E,Ne.z,ae)}}else oe.visible&&_.push(h,$,oe,E,Ne.z,null)}}const O=h.children;for(let $=0,oe=O.length;$<oe;$++)Di(O[$],x,E,D)}function Mr(h,x,E,D){const U=h.opaque,O=h.transmissive,$=h.transparent;p.setupLightsView(E),ne===!0&&me.setGlobalState(S.clippingPlanes,E),D&&Xe.viewport(C.copy(D)),U.length>0&&Jn(U,x,E),O.length>0&&Jn(O,x,E),$.length>0&&Jn($,x,E),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Qr(h,x,E,D){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new yr(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Yi:Ci,minFilter:qi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const O=p.state.transmissionRenderTarget[D.id],$=D.viewport||C;O.setSize($.z,$.w);const oe=S.getRenderTarget();S.setRenderTarget(O),S.getClearColor(z),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Ae.render(E);const J=S.toneMapping;S.toneMapping=$i;const te=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),ne===!0&&me.setGlobalState(S.clippingPlanes,D),Jn(h,E,D),I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O),Le.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let ae=0,ve=x.length;ae<ve;ae++){const we=x[ae],Ue=we.object,Ce=we.geometry,Te=we.material,ye=we.group;if(Te.side===Cn&&Ue.layers.test(D.layers)){const ht=Te.side;Te.side=Kn,Te.needsUpdate=!0,eo(Ue,E,D,Ce,Te,ye),Te.side=ht,Te.needsUpdate=!0,K=!0}}K===!0&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O))}S.setRenderTarget(oe),S.setClearColor(z,B),te!==void 0&&(D.viewport=te),S.toneMapping=J}function Jn(h,x,E){const D=x.isScene===!0?x.overrideMaterial:null;for(let U=0,O=h.length;U<O;U++){const $=h[U],oe=$.object,J=$.geometry,te=D===null?$.material:D,K=$.group;oe.layers.test(E.layers)&&eo(oe,x,E,J,te,K)}}function eo(h,x,E,D,U,O){h.onBeforeRender(S,x,E,D,U,O),h.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),U.onBeforeRender(S,x,E,D,h,O),U.transparent===!0&&U.side===Cn&&U.forceSinglePass===!1?(U.side=Kn,U.needsUpdate=!0,S.renderBufferDirect(E,x,D,U,h,O),U.side=Zr,U.needsUpdate=!0,S.renderBufferDirect(E,x,D,U,h,O),U.side=Cn):S.renderBufferDirect(E,x,D,U,h,O),h.onAfterRender(S,x,E,D,U,O)}function wr(h,x,E){x.isScene!==!0&&(x=$e);const D=de.get(h),U=p.state.lights,O=p.state.shadowsArray,$=U.state.version,oe=Re.getParameters(h,U.state,O,x,E),J=Re.getProgramCacheKey(oe);let te=D.programs;D.environment=h.isMeshStandardMaterial?x.environment:null,D.fog=x.fog,D.envMap=(h.isMeshStandardMaterial?X:T).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,te===void 0&&(h.addEventListener("dispose",nt),te=new Map,D.programs=te);let K=te.get(J);if(K!==void 0){if(D.currentProgram===K&&D.lightsStateVersion===$)return ji(h,oe),K}else oe.uniforms=Re.getUniforms(h),h.onBeforeCompile(oe,S),K=Re.acquireProgram(oe,J),te.set(J,K),D.uniforms=oe.uniforms;const ae=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ae.clippingPlanes=me.uniform),ji(h,oe),D.needsLights=Ln(h),D.lightsStateVersion=$,D.needsLights&&(ae.ambientLightColor.value=U.state.ambient,ae.lightProbe.value=U.state.probe,ae.directionalLights.value=U.state.directional,ae.directionalLightShadows.value=U.state.directionalShadow,ae.spotLights.value=U.state.spot,ae.spotLightShadows.value=U.state.spotShadow,ae.rectAreaLights.value=U.state.rectArea,ae.ltc_1.value=U.state.rectAreaLTC1,ae.ltc_2.value=U.state.rectAreaLTC2,ae.pointLights.value=U.state.point,ae.pointLightShadows.value=U.state.pointShadow,ae.hemisphereLights.value=U.state.hemi,ae.directionalShadowMap.value=U.state.directionalShadowMap,ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ae.spotShadowMap.value=U.state.spotShadowMap,ae.spotLightMatrix.value=U.state.spotLightMatrix,ae.spotLightMap.value=U.state.spotLightMap,ae.pointShadowMap.value=U.state.pointShadowMap,ae.pointShadowMatrix.value=U.state.pointShadowMatrix),D.currentProgram=K,D.uniformsList=null,K}function to(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Al.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function ji(h,x){const E=de.get(h);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function Us(h,x,E,D,U){x.isScene!==!0&&(x=$e),I.resetTextureUnits();const O=x.fog,$=D.isMeshStandardMaterial?x.environment:null,oe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ki,J=(D.isMeshStandardMaterial?X:T).get(D.envMap||$),te=D.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,K=!!E.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ae=!!E.morphAttributes.position,ve=!!E.morphAttributes.normal,we=!!E.morphAttributes.color;let Ue=$i;D.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=S.toneMapping);const Ce=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Te=Ce!==void 0?Ce.length:0,ye=de.get(D),ht=p.state.lights;if(ne===!0&&(ue===!0||h!==y)){const at=h===y&&D.id===w;me.setState(D,h,at)}let Je=!1;D.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==ht.state.version||ye.outputColorSpace!==oe||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==J||D.fog===!0&&ye.fog!==O||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==me.numPlanes||ye.numIntersection!==me.numIntersection)||ye.vertexAlphas!==te||ye.vertexTangents!==K||ye.morphTargets!==ae||ye.morphNormals!==ve||ye.morphColors!==we||ye.toneMapping!==Ue||ye.morphTargetsCount!==Te)&&(Je=!0):(Je=!0,ye.__version=D.version);let Ct=ye.currentProgram;Je===!0&&(Ct=wr(D,x,U));let ot=!1,it=!1,pt=!1;const ut=Ct.getUniforms(),Mt=ye.uniforms;if(Xe.useProgram(Ct.program)&&(ot=!0,it=!0,pt=!0),D.id!==w&&(w=D.id,it=!0),ot||y!==h){Xe.buffers.depth.getReversed()?(ce.copy(h.projectionMatrix),Wg(ce),Xg(ce),ut.setValue(W,"projectionMatrix",ce)):ut.setValue(W,"projectionMatrix",h.projectionMatrix),ut.setValue(W,"viewMatrix",h.matrixWorldInverse);const jt=ut.map.cameraPosition;jt!==void 0&&jt.setValue(W,ke.setFromMatrixPosition(h.matrixWorld)),We.logarithmicDepthBuffer&&ut.setValue(W,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ut.setValue(W,"isOrthographic",h.isOrthographicCamera===!0),y!==h&&(y=h,it=!0,pt=!0)}if(U.isSkinnedMesh){ut.setOptional(W,U,"bindMatrix"),ut.setOptional(W,U,"bindMatrixInverse");const at=U.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ut.setValue(W,"boneTexture",at.boneTexture,I))}U.isBatchedMesh&&(ut.setOptional(W,U,"batchingTexture"),ut.setValue(W,"batchingTexture",U._matricesTexture,I),ut.setOptional(W,U,"batchingIdTexture"),ut.setValue(W,"batchingIdTexture",U._indirectTexture,I),ut.setOptional(W,U,"batchingColorTexture"),U._colorsTexture!==null&&ut.setValue(W,"batchingColorTexture",U._colorsTexture,I));const ft=E.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&Pe.update(U,E,Ct),(it||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ut.setValue(W,"receiveShadow",U.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Mt.envMap.value=J,Mt.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&x.environment!==null&&(Mt.envMapIntensity.value=x.environmentIntensity),it&&(ut.setValue(W,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&xn(Mt,pt),O&&D.fog===!0&&Me.refreshFogUniforms(Mt,O),Me.refreshMaterialUniforms(Mt,D,k,V,p.state.transmissionRenderTarget[h.id]),Al.upload(W,to(ye),Mt,I)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Al.upload(W,to(ye),Mt,I),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ut.setValue(W,"center",U.center),ut.setValue(W,"modelViewMatrix",U.modelViewMatrix),ut.setValue(W,"normalMatrix",U.normalMatrix),ut.setValue(W,"modelMatrix",U.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const at=D.uniformsGroups;for(let jt=0,yn=at.length;jt<yn;jt++){const Sn=at[jt];q.update(Sn,Ct),q.bind(Sn,Ct)}}return Ct}function xn(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function Ln(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,x,E){de.get(h.texture).__webglTexture=x,de.get(h.depthTexture).__webglTexture=E;const D=de.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=E===void 0,D.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const E=de.get(h);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,E=0){P=h,R=x,A=E;let D=!0,U=null,O=!1,$=!1;if(h){const J=de.get(h);if(J.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(W.FRAMEBUFFER,null),D=!1;else if(J.__webglFramebuffer===void 0)I.setupRenderTarget(h);else if(J.__hasExternalTextures)I.rebindTextures(h,de.get(h.texture).__webglTexture,de.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ae=h.depthTexture;if(J.__boundDepthTexture!==ae){if(ae!==null&&de.has(ae)&&(h.width!==ae.image.width||h.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(h)}}const te=h.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&($=!0);const K=de.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[x])?U=K[x][E]:U=K[x],O=!0):h.samples>0&&I.useMultisampledRTT(h)===!1?U=de.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?U=K[E]:U=K,C.copy(h.viewport),N.copy(h.scissor),F=h.scissorTest}else C.copy(pe).multiplyScalar(k).floor(),N.copy(Ee).multiplyScalar(k).floor(),F=De;if(Xe.bindFramebuffer(W.FRAMEBUFFER,U)&&D&&Xe.drawBuffers(h,U),Xe.viewport(C),Xe.scissor(N),Xe.setScissorTest(F),O){const J=de.get(h.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+x,J.__webglTexture,E)}else if($){const J=de.get(h.texture),te=x||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.__webglTexture,E||0,te)}w=-1},this.readRenderTargetPixels=function(h,x,E,D,U,O,$){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=de.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&$!==void 0&&(oe=oe[$]),oe){Xe.bindFramebuffer(W.FRAMEBUFFER,oe);try{const J=h.texture,te=J.format,K=J.type;if(!We.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-D&&E>=0&&E<=h.height-U&&W.readPixels(x,E,D,U,He.convert(te),He.convert(K),O)}finally{const J=P!==null?de.get(P).__webglFramebuffer:null;Xe.bindFramebuffer(W.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(h,x,E,D,U,O,$){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=de.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&$!==void 0&&(oe=oe[$]),oe){const J=h.texture,te=J.format,K=J.type;if(!We.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-D&&E>=0&&E<=h.height-U){Xe.bindFramebuffer(W.FRAMEBUFFER,oe);const ae=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ae),W.bufferData(W.PIXEL_PACK_BUFFER,O.byteLength,W.STREAM_READ),W.readPixels(x,E,D,U,He.convert(te),He.convert(K),0);const ve=P!==null?de.get(P).__webglFramebuffer:null;Xe.bindFramebuffer(W.FRAMEBUFFER,ve);const we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Gg(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ae),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,O),W.deleteBuffer(ae),W.deleteSync(we),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,E=0){h.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-E),U=Math.floor(h.image.width*D),O=Math.floor(h.image.height*D),$=x!==null?x.x:0,oe=x!==null?x.y:0;I.setTexture2D(h,0),W.copyTexSubImage2D(W.TEXTURE_2D,E,0,0,$,oe,U,O),Xe.unbindTexture()},this.copyTextureToTexture=function(h,x,E=null,D=null,U=0){h.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],x=arguments[2],U=arguments[3]||0,E=null);let O,$,oe,J,te,K,ae,ve,we;const Ue=h.isCompressedTexture?h.mipmaps[U]:h.image;E!==null?(O=E.max.x-E.min.x,$=E.max.y-E.min.y,oe=E.isBox3?E.max.z-E.min.z:1,J=E.min.x,te=E.min.y,K=E.isBox3?E.min.z:0):(O=Ue.width,$=Ue.height,oe=Ue.depth||1,J=0,te=0,K=0),D!==null?(ae=D.x,ve=D.y,we=D.z):(ae=0,ve=0,we=0);const Ce=He.convert(x.format),Te=He.convert(x.type);let ye;x.isData3DTexture?(I.setTexture3D(x,0),ye=W.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(I.setTexture2DArray(x,0),ye=W.TEXTURE_2D_ARRAY):(I.setTexture2D(x,0),ye=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,x.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,x.unpackAlignment);const ht=W.getParameter(W.UNPACK_ROW_LENGTH),Je=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ct=W.getParameter(W.UNPACK_SKIP_PIXELS),ot=W.getParameter(W.UNPACK_SKIP_ROWS),it=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ue.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ue.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,J),W.pixelStorei(W.UNPACK_SKIP_ROWS,te),W.pixelStorei(W.UNPACK_SKIP_IMAGES,K);const pt=h.isDataArrayTexture||h.isData3DTexture,ut=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const Mt=de.get(h),ft=de.get(x),at=de.get(Mt.__renderTarget),jt=de.get(ft.__renderTarget);Xe.bindFramebuffer(W.READ_FRAMEBUFFER,at.__webglFramebuffer),Xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let yn=0;yn<oe;yn++)pt&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,de.get(h).__webglTexture,U,K+yn),h.isDepthTexture?(ut&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,de.get(x).__webglTexture,U,we+yn),W.blitFramebuffer(J,te,O,$,ae,ve,O,$,W.DEPTH_BUFFER_BIT,W.NEAREST)):ut?W.copyTexSubImage3D(ye,U,ae,ve,we+yn,J,te,O,$):W.copyTexSubImage2D(ye,U,ae,ve,we+yn,J,te,O,$);Xe.bindFramebuffer(W.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ut?h.isDataTexture||h.isData3DTexture?W.texSubImage3D(ye,U,ae,ve,we,O,$,oe,Ce,Te,Ue.data):x.isCompressedArrayTexture?W.compressedTexSubImage3D(ye,U,ae,ve,we,O,$,oe,Ce,Ue.data):W.texSubImage3D(ye,U,ae,ve,we,O,$,oe,Ce,Te,Ue):h.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,U,ae,ve,O,$,Ce,Te,Ue.data):h.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,U,ae,ve,Ue.width,Ue.height,Ce,Ue.data):W.texSubImage2D(W.TEXTURE_2D,U,ae,ve,O,$,Ce,Te,Ue);W.pixelStorei(W.UNPACK_ROW_LENGTH,ht),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ct),W.pixelStorei(W.UNPACK_SKIP_ROWS,ot),W.pixelStorei(W.UNPACK_SKIP_IMAGES,it),U===0&&x.generateMipmaps&&W.generateMipmap(ye),Xe.unbindTexture()},this.copyTextureToTexture3D=function(h,x,E=null,D=null,U=0){return h.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,D=arguments[1]||null,h=arguments[2],x=arguments[3],U=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,E,D,U)},this.initRenderTarget=function(h){de.get(h).__webglFramebuffer===void 0&&I.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?I.setTextureCube(h,0):h.isData3DTexture?I.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?I.setTexture2DArray(h,0):I.setTexture2D(h,0),Xe.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,Xe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class Kr extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ba extends vn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=sn,u=sn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class rM extends vn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class oM{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const sM=new oM;class Ta{constructor(e){this.manager=e!==void 0?e:sM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class aM extends Error{constructor(e,t){super(e),this.response=t}}class lM extends Ta{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Hl.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:r});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ar[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:M,value:S})=>{if(M)p.close();else{g+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let R=0,A=u.length;R<A;R++){const P=u[R];P.onProgress&&P.onProgress(L)}p.enqueue(S),b()}},M=>{p.error(M)})}}});return new Response(_)}else throw new aM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Hl.add(e,c);const u=ar[e];delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cM extends Ta{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Hl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Sa("img");function l(){u(),Hl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class uM extends Ta{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new ba,a=new lM(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:zn,s.wrapT=c.wrapT!==void 0?c.wrapT:zn,s.magFilter=c.magFilter!==void 0?c.magFilter:vt,s.minFilter=c.minFilter!==void 0?c.minFilter:vt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=qi),c.mipmapCount===1&&(s.minFilter=vt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class Vi extends Ta{constructor(e){super(e)}load(e,t,n,r){const o=new vn,s=new cM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class bo extends Sr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var _i=Uint8Array,us=Uint16Array,hM=Int32Array,Bm=new _i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),km=new _i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fM=new _i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hm=function(i,e){for(var t=new us(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new hM(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Vm=Hm(Bm,2),Gm=Vm.b,dM=Vm.r;Gm[28]=258,dM[258]=28;var pM=Hm(km,0),mM=pM.b,ih=new us(32768);for(var Ot=0;Ot<32768;++Ot){var Nr=(Ot&43690)>>1|(Ot&21845)<<1;Nr=(Nr&52428)>>2|(Nr&13107)<<2,Nr=(Nr&61680)>>4|(Nr&3855)<<4,ih[Ot]=((Nr&65280)>>8|(Nr&255)<<8)>>1}var la=(function(i,e,t){for(var n=i.length,r=0,o=new us(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new us(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new us(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[ih[d]>>l]=c}else for(a=new us(n),r=0;r<n;++r)i[r]&&(a[r]=ih[s[i[r]-1]++]>>15-i[r]);return a}),Ea=new _i(288);for(var Ot=0;Ot<144;++Ot)Ea[Ot]=8;for(var Ot=144;Ot<256;++Ot)Ea[Ot]=9;for(var Ot=256;Ot<280;++Ot)Ea[Ot]=7;for(var Ot=280;Ot<288;++Ot)Ea[Ot]=8;var Wm=new _i(32);for(var Ot=0;Ot<32;++Ot)Wm[Ot]=5;var _M=la(Ea,9,1),gM=la(Wm,5,1),Xc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},bi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},qc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},vM=function(i){return(i+7)/8|0},xM=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new _i(i.subarray(e,t))},yM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ti=function(i,e,t){var n=new Error(e||yM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ti),!t)throw n;return n},SM=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new _i(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new _i(r*3));var c=function($e){var Be=t.length;if($e>Be){var et=new _i(Math.max(Be*2,$e));et.set(t),t=et}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=bi(i,d,1);var b=bi(i,d+1,3);if(d+=3,b)if(b==1)m=_M,v=gM,g=9,_=5;else if(b==2){var R=bi(i,d,31)+257,A=bi(i,d+10,15)+4,P=R+bi(i,d+5,31)+1;d+=14;for(var w=new _i(P),y=new _i(19),C=0;C<A;++C)y[fM[C]]=bi(i,d+C*3,7);d+=A*3;for(var N=Xc(y),F=(1<<N)-1,z=la(y,N,1),C=0;C<P;){var B=z[bi(i,d,F)];d+=B&15;var M=B>>4;if(M<16)w[C++]=M;else{var H=0,V=0;for(M==16?(V=3+bi(i,d,3),d+=2,H=w[C-1]):M==17?(V=3+bi(i,d,7),d+=3):M==18&&(V=11+bi(i,d,127),d+=7);V--;)w[C++]=H}}var k=w.subarray(0,R),se=w.subarray(R);g=Xc(k),_=Xc(se),m=la(k,g,1),v=la(se,_,1)}else Ti(1);else{var M=vM(d)+4,S=i[M-4]|i[M-3]<<8,L=M+S;if(L>r){l&&Ti(0);break}a&&c(f+S),t.set(i.subarray(M,L),f),e.b=f+=S,e.p=d=L*8,e.f=u;continue}if(d>p){l&&Ti(0);break}}a&&c(f+131072);for(var G=(1<<g)-1,pe=(1<<_)-1,Ee=d;;Ee=d){var H=m[qc(i,d)&G],De=H>>4;if(d+=H&15,d>p){l&&Ti(0);break}if(H||Ti(2),De<256)t[f++]=De;else if(De==256){Ee=d,m=null;break}else{var Q=De-254;if(De>264){var C=De-257,ne=Bm[C];Q=bi(i,d,(1<<ne)-1)+Gm[C],d+=ne}var ue=v[qc(i,d)&pe],ce=ue>>4;ue||Ti(3),d+=ue&15;var se=mM[ce];if(ce>3){var ne=km[ce];se+=qc(i,d)&(1<<ne)-1,d+=ne}if(d>p){l&&Ti(0);break}a&&c(f+131072);var ge=f+Q;if(f<se){var ke=o-se,Ne=Math.min(se,ge);for(ke+f<0&&Ti(3);f<Ne;++f)t[f]=n[ke+f]}for(;f<ge;++f)t[f]=t[f-se]}}e.l=m,e.p=Ee,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?xM(t,0,f):t.subarray(0,f)},MM=new _i(0),wM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ti(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ti(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ll(i,e){return SM(i.subarray(wM(i),-4),{i:2},e,e)}var bM=typeof TextDecoder<"u"&&new TextDecoder,TM=0;try{bM.decode(MM,{stream:!0}),TM=1}catch{}class EM extends uM{constructor(e){super(e),this.type=Yi}parse(e){const w=Math.pow(2.7182818,2.2);function y(h,x){let E=0;for(let U=0;U<65536;++U)(U==0||h[U>>3]&1<<(U&7))&&(x[E++]=U);const D=E-1;for(;E<65536;)x[E++]=0;return D}function C(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const N={l:0,c:0,lc:0};function F(h,x,E,D,U){for(;E<h;)x=x<<8|le(D,U),E+=8;E-=h,N.l=x>>E&(1<<h)-1,N.c=x,N.lc=E}const z=new Array(59);function B(h){for(let E=0;E<=58;++E)z[E]=0;for(let E=0;E<65537;++E)z[h[E]]+=1;let x=0;for(let E=58;E>0;--E){const D=x+z[E]>>1;z[E]=x,x=D}for(let E=0;E<65537;++E){const D=h[E];D>0&&(h[E]=D|z[D]++<<6)}}function H(h,x,E,D,U,O){const $=x;let oe=0,J=0;for(;D<=U;D++){if($.value-x.value>E)return!1;F(6,oe,J,h,$);const te=N.l;if(oe=N.c,J=N.lc,O[D]=te,te==63){if($.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");F(8,oe,J,h,$);let K=N.l+6;if(oe=N.c,J=N.lc,D+K>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[D++]=0;D--}else if(te>=59){let K=te-59+2;if(D+K>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[D++]=0;D--}}B(O)}function V(h){return h&63}function k(h){return h>>6}function se(h,x,E,D){for(;x<=E;x++){const U=k(h[x]),O=V(h[x]);if(U>>O)throw new Error("Invalid table entry");if(O>14){const $=D[U>>O-14];if($.len)throw new Error("Invalid table entry");if($.lit++,$.p){const oe=$.p;$.p=new Array($.lit);for(let J=0;J<$.lit-1;++J)$.p[J]=oe[J]}else $.p=new Array(1);$.p[$.lit-1]=x}else if(O){let $=0;for(let oe=1<<14-O;oe>0;oe--){const J=D[(U<<14-O)+$];if(J.len||J.p)throw new Error("Invalid table entry");J.len=O,J.lit=x,$++}}}return!0}const G={c:0,lc:0};function pe(h,x,E,D){h=h<<8|le(E,D),x+=8,G.c=h,G.lc=x}const Ee={c:0,lc:0};function De(h,x,E,D,U,O,$,oe,J){if(h==x){D<8&&(pe(E,D,U,O),E=G.c,D=G.lc),D-=8;let te=E>>D;if(te=new Uint8Array([te])[0],oe.value+te>J)return!1;const K=$[oe.value-1];for(;te-- >0;)$[oe.value++]=K}else if(oe.value<J)$[oe.value++]=h;else return!1;Ee.c=E,Ee.lc=D}function Q(h){return h&65535}function ne(h){const x=Q(h);return x>32767?x-65536:x}const ue={a:0,b:0};function ce(h,x){const E=ne(h),U=ne(x),O=E+(U&1)+(U>>1),$=O,oe=O-U;ue.a=$,ue.b=oe}function ge(h,x){const E=Q(h),D=Q(x),U=E-(D>>1)&65535,O=D+U-32768&65535;ue.a=O,ue.b=U}function ke(h,x,E,D,U,O,$){const oe=$<16384,J=E>U?U:E;let te=1,K,ae;for(;te<=J;)te<<=1;for(te>>=1,K=te,te>>=1;te>=1;){ae=0;const ve=ae+O*(U-K),we=O*te,Ue=O*K,Ce=D*te,Te=D*K;let ye,ht,Je,Ct;for(;ae<=ve;ae+=Ue){let ot=ae;const it=ae+D*(E-K);for(;ot<=it;ot+=Te){const pt=ot+Ce,ut=ot+we,Mt=ut+Ce;oe?(ce(h[ot+x],h[ut+x]),ye=ue.a,Je=ue.b,ce(h[pt+x],h[Mt+x]),ht=ue.a,Ct=ue.b,ce(ye,ht),h[ot+x]=ue.a,h[pt+x]=ue.b,ce(Je,Ct),h[ut+x]=ue.a,h[Mt+x]=ue.b):(ge(h[ot+x],h[ut+x]),ye=ue.a,Je=ue.b,ge(h[pt+x],h[Mt+x]),ht=ue.a,Ct=ue.b,ge(ye,ht),h[ot+x]=ue.a,h[pt+x]=ue.b,ge(Je,Ct),h[ut+x]=ue.a,h[Mt+x]=ue.b)}if(E&te){const pt=ot+we;oe?ce(h[ot+x],h[pt+x]):ge(h[ot+x],h[pt+x]),ye=ue.a,h[pt+x]=ue.b,h[ot+x]=ye}}if(U&te){let ot=ae;const it=ae+D*(E-K);for(;ot<=it;ot+=Te){const pt=ot+Ce;oe?ce(h[ot+x],h[pt+x]):ge(h[ot+x],h[pt+x]),ye=ue.a,h[pt+x]=ue.b,h[ot+x]=ye}}K=te,te>>=1}return ae}function Ne(h,x,E,D,U,O,$,oe,J){let te=0,K=0;const ae=$,ve=Math.trunc(D.value+(U+7)/8);for(;D.value<ve;)for(pe(te,K,E,D),te=G.c,K=G.lc;K>=14;){const Ue=te>>K-14&16383,Ce=x[Ue];if(Ce.len)K-=Ce.len,De(Ce.lit,O,te,K,E,D,oe,J,ae),te=Ee.c,K=Ee.lc;else{if(!Ce.p)throw new Error("hufDecode issues");let Te;for(Te=0;Te<Ce.lit;Te++){const ye=V(h[Ce.p[Te]]);for(;K<ye&&D.value<ve;)pe(te,K,E,D),te=G.c,K=G.lc;if(K>=ye&&k(h[Ce.p[Te]])==(te>>K-ye&(1<<ye)-1)){K-=ye,De(Ce.p[Te],O,te,K,E,D,oe,J,ae),te=Ee.c,K=Ee.lc;break}}if(Te==Ce.lit)throw new Error("hufDecode issues")}}const we=8-U&7;for(te>>=we,K-=we;K>0;){const Ue=x[te<<14-K&16383];if(Ue.len)K-=Ue.len,De(Ue.lit,O,te,K,E,D,oe,J,ae),te=Ee.c,K=Ee.lc;else throw new Error("hufDecode issues")}return!0}function $e(h,x,E,D,U,O){const $={value:0},oe=E.value,J=Pe(x,E),te=Pe(x,E);E.value+=4;const K=Pe(x,E);if(E.value+=4,J<0||J>=65537||te<0||te>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ae=new Array(65537),ve=new Array(16384);C(ve);const we=D-(E.value-oe);if(H(h,E,we,J,te,ae),K>8*(D-(E.value-oe)))throw new Error("Something wrong with hufUncompress");se(ae,J,te,ve),Ne(ae,ve,h,E,K,te,O,U,$)}function Be(h,x,E){for(let D=0;D<E;++D)x[D]=h[x[D]]}function et(h){for(let x=1;x<h.length;x++){const E=h[x-1]+h[x]-128;h[x]=E}}function W(h,x){let E=0,D=Math.floor((h.length+1)/2),U=0;const O=h.length-1;for(;!(U>O||(x[U++]=h[E++],U>O));)x[U++]=h[D++]}function Ye(h){let x=h.byteLength;const E=new Array;let D=0;const U=new DataView(h);for(;x>0;){const O=U.getInt8(D++);if(O<0){const $=-O;x-=$+1;for(let oe=0;oe<$;oe++)E.push(U.getUint8(D++))}else{const $=O;x-=2;const oe=U.getUint8(D++);for(let J=0;J<$+1;J++)E.push(oe)}}return E}function Le(h,x,E,D,U,O){let $=new DataView(O.buffer);const oe=E[h.idx[0]].width,J=E[h.idx[0]].height,te=3,K=Math.floor(oe/8),ae=Math.ceil(oe/8),ve=Math.ceil(J/8),we=oe-(ae-1)*8,Ue=J-(ve-1)*8,Ce={value:0},Te=new Array(te),ye=new Array(te),ht=new Array(te),Je=new Array(te),Ct=new Array(te);for(let it=0;it<te;++it)Ct[it]=x[h.idx[it]],Te[it]=it<1?0:Te[it-1]+ae*ve,ye[it]=new Float32Array(64),ht[it]=new Uint16Array(64),Je[it]=new Uint16Array(ae*64);for(let it=0;it<ve;++it){let pt=8;it==ve-1&&(pt=Ue);let ut=8;for(let ft=0;ft<ae;++ft){ft==ae-1&&(ut=we);for(let at=0;at<te;++at)ht[at].fill(0),ht[at][0]=U[Te[at]++],We(Ce,D,ht[at]),Xe(ht[at],ye[at]),st(ye[at]);de(ye);for(let at=0;at<te;++at)I(ye[at],Je[at],ft*64)}let Mt=0;for(let ft=0;ft<te;++ft){const at=E[h.idx[ft]].type;for(let jt=8*it;jt<8*it+pt;++jt){Mt=Ct[ft][jt];for(let yn=0;yn<K;++yn){const Sn=yn*64+(jt&7)*8;$.setUint16(Mt+0*at,Je[ft][Sn+0],!0),$.setUint16(Mt+2*at,Je[ft][Sn+1],!0),$.setUint16(Mt+4*at,Je[ft][Sn+2],!0),$.setUint16(Mt+6*at,Je[ft][Sn+3],!0),$.setUint16(Mt+8*at,Je[ft][Sn+4],!0),$.setUint16(Mt+10*at,Je[ft][Sn+5],!0),$.setUint16(Mt+12*at,Je[ft][Sn+6],!0),$.setUint16(Mt+14*at,Je[ft][Sn+7],!0),Mt+=16*at}}if(K!=ae)for(let jt=8*it;jt<8*it+pt;++jt){const yn=Ct[ft][jt]+8*K*2*at,Sn=K*64+(jt&7)*8;for(let no=0;no<ut;++no)$.setUint16(yn+no*2*at,Je[ft][Sn+no],!0)}}}const ot=new Uint16Array(oe);$=new DataView(O.buffer);for(let it=0;it<te;++it){E[h.idx[it]].decoded=!0;const pt=E[h.idx[it]].type;if(E[it].type==2)for(let ut=0;ut<J;++ut){const Mt=Ct[it][ut];for(let ft=0;ft<oe;++ft)ot[ft]=$.getUint16(Mt+ft*2*pt,!0);for(let ft=0;ft<oe;++ft)$.setFloat32(Mt+ft*2*pt,ie(ot[ft]),!0)}}}function We(h,x,E){let D,U=1;for(;U<64;)D=x[h.value],D==65280?U=64:D>>8==255?U+=D&255:(E[U]=D,U++),h.value++}function Xe(h,x){x[0]=ie(h[0]),x[1]=ie(h[1]),x[2]=ie(h[5]),x[3]=ie(h[6]),x[4]=ie(h[14]),x[5]=ie(h[15]),x[6]=ie(h[27]),x[7]=ie(h[28]),x[8]=ie(h[2]),x[9]=ie(h[4]),x[10]=ie(h[7]),x[11]=ie(h[13]),x[12]=ie(h[16]),x[13]=ie(h[26]),x[14]=ie(h[29]),x[15]=ie(h[42]),x[16]=ie(h[3]),x[17]=ie(h[8]),x[18]=ie(h[12]),x[19]=ie(h[17]),x[20]=ie(h[25]),x[21]=ie(h[30]),x[22]=ie(h[41]),x[23]=ie(h[43]),x[24]=ie(h[9]),x[25]=ie(h[11]),x[26]=ie(h[18]),x[27]=ie(h[24]),x[28]=ie(h[31]),x[29]=ie(h[40]),x[30]=ie(h[44]),x[31]=ie(h[53]),x[32]=ie(h[10]),x[33]=ie(h[19]),x[34]=ie(h[23]),x[35]=ie(h[32]),x[36]=ie(h[39]),x[37]=ie(h[45]),x[38]=ie(h[52]),x[39]=ie(h[54]),x[40]=ie(h[20]),x[41]=ie(h[22]),x[42]=ie(h[33]),x[43]=ie(h[38]),x[44]=ie(h[46]),x[45]=ie(h[51]),x[46]=ie(h[55]),x[47]=ie(h[60]),x[48]=ie(h[21]),x[49]=ie(h[34]),x[50]=ie(h[37]),x[51]=ie(h[47]),x[52]=ie(h[50]),x[53]=ie(h[56]),x[54]=ie(h[59]),x[55]=ie(h[61]),x[56]=ie(h[35]),x[57]=ie(h[36]),x[58]=ie(h[48]),x[59]=ie(h[49]),x[60]=ie(h[57]),x[61]=ie(h[58]),x[62]=ie(h[62]),x[63]=ie(h[63])}function st(h){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),$=.5*Math.cos(3*3.14159/8),oe=.5*Math.cos(7*3.14159/16),J=new Array(4),te=new Array(4),K=new Array(4),ae=new Array(4);for(let ve=0;ve<8;++ve){const we=ve*8;J[0]=D*h[we+2],J[1]=$*h[we+2],J[2]=D*h[we+6],J[3]=$*h[we+6],te[0]=E*h[we+1]+U*h[we+3]+O*h[we+5]+oe*h[we+7],te[1]=U*h[we+1]-oe*h[we+3]-E*h[we+5]-O*h[we+7],te[2]=O*h[we+1]-E*h[we+3]+oe*h[we+5]+U*h[we+7],te[3]=oe*h[we+1]-O*h[we+3]+U*h[we+5]-E*h[we+7],K[0]=x*(h[we+0]+h[we+4]),K[3]=x*(h[we+0]-h[we+4]),K[1]=J[0]+J[3],K[2]=J[1]-J[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],h[we+0]=ae[0]+te[0],h[we+1]=ae[1]+te[1],h[we+2]=ae[2]+te[2],h[we+3]=ae[3]+te[3],h[we+4]=ae[3]-te[3],h[we+5]=ae[2]-te[2],h[we+6]=ae[1]-te[1],h[we+7]=ae[0]-te[0]}for(let ve=0;ve<8;++ve)J[0]=D*h[16+ve],J[1]=$*h[16+ve],J[2]=D*h[48+ve],J[3]=$*h[48+ve],te[0]=E*h[8+ve]+U*h[24+ve]+O*h[40+ve]+oe*h[56+ve],te[1]=U*h[8+ve]-oe*h[24+ve]-E*h[40+ve]-O*h[56+ve],te[2]=O*h[8+ve]-E*h[24+ve]+oe*h[40+ve]+U*h[56+ve],te[3]=oe*h[8+ve]-O*h[24+ve]+U*h[40+ve]-E*h[56+ve],K[0]=x*(h[ve]+h[32+ve]),K[3]=x*(h[ve]-h[32+ve]),K[1]=J[0]+J[3],K[2]=J[1]-J[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],h[0+ve]=ae[0]+te[0],h[8+ve]=ae[1]+te[1],h[16+ve]=ae[2]+te[2],h[24+ve]=ae[3]+te[3],h[32+ve]=ae[3]-te[3],h[40+ve]=ae[2]-te[2],h[48+ve]=ae[1]-te[1],h[56+ve]=ae[0]-te[0]}function de(h){for(let x=0;x<64;++x){const E=h[0][x],D=h[1][x],U=h[2][x];h[0][x]=E+1.5747*U,h[1][x]=E-.1873*D-.4682*U,h[2][x]=E+1.8556*D}}function I(h,x,E){for(let D=0;D<64;++D)x[E+D]=sd.toHalfFloat(T(h[D]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function X(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Z(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(Ye(x)),D=new Uint8Array(E.length);return et(E),W(E,D),new DataView(D.buffer)}function j(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=ll(x),D=new Uint8Array(E.length);return et(E),W(E,D),new DataView(D.buffer)}function ee(h){const x=h.viewer,E={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),U=new Uint8Array(8192);let O=0;const $=new Array(h.inputChannels.length);for(let Ue=0,Ce=h.inputChannels.length;Ue<Ce;Ue++)$[Ue]={},$[Ue].start=O,$[Ue].end=$[Ue].start,$[Ue].nx=h.columns,$[Ue].ny=h.lines,$[Ue].size=h.type,O+=$[Ue].nx*$[Ue].ny*$[Ue].size;const oe=re(x,E),J=re(x,E);if(J>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(oe<=J)for(let Ue=0;Ue<J-oe+1;Ue++)U[Ue+oe]=Oe(x,E);const te=new Uint16Array(65536),K=y(U,te),ae=Pe(x,E);$e(h.array,x,E,ae,D,O);for(let Ue=0;Ue<h.inputChannels.length;++Ue){const Ce=$[Ue];for(let Te=0;Te<$[Ue].size;++Te)ke(D,Ce.start+Te,Ce.nx,Ce.size,Ce.ny,Ce.nx*Ce.size,K)}Be(te,D,O);let ve=0;const we=new Uint8Array(D.buffer.byteLength);for(let Ue=0;Ue<h.lines;Ue++)for(let Ce=0;Ce<h.inputChannels.length;Ce++){const Te=$[Ce],ye=Te.nx*Te.size,ht=new Uint8Array(D.buffer,Te.end*2,ye*2);we.set(ht,ve),ve+=ye*2,Te.end+=ye}return new DataView(we.buffer)}function Re(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=ll(x),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,U=new ArrayBuffer(D),O=new DataView(U);let $=0,oe=0;const J=new Array(4);for(let te=0;te<h.lines;te++)for(let K=0;K<h.inputChannels.length;K++){let ae=0;switch(h.inputChannels[K].pixelType){case 1:J[0]=$,J[1]=J[0]+h.columns,$=J[1]+h.columns;for(let we=0;we<h.columns;++we){const Ue=E[J[0]++]<<8|E[J[1]++];ae+=Ue,O.setUint16(oe,ae,!0),oe+=2}break;case 2:J[0]=$,J[1]=J[0]+h.columns,J[2]=J[1]+h.columns,$=J[2]+h.columns;for(let we=0;we<h.columns;++we){const Ue=E[J[0]++]<<24|E[J[1]++]<<16|E[J[2]++]<<8;ae+=Ue,O.setUint32(oe,ae,!0),oe+=4}break}}return O}function Me(h){const x=h.viewer,E={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),U={version:He(x,E),unknownUncompressedSize:He(x,E),unknownCompressedSize:He(x,E),acCompressedSize:He(x,E),dcCompressedSize:He(x,E),rleCompressedSize:He(x,E),rleUncompressedSize:He(x,E),rleRawSize:He(x,E),totalAcUncompressedCount:He(x,E),totalDcUncompressedCount:He(x,E),acCompression:He(x,E)};if(U.version<2)throw new Error("EXRLoader.parse: "+xn.compression+" version "+U.version+" is unsupported");const O=new Array;let $=re(x,E)-2;for(;$>0;){const Ce=_e(x.buffer,E),Te=Oe(x,E),ye=Te>>2&3,ht=(Te>>4)-1,Je=new Int8Array([ht])[0],Ct=Oe(x,E);O.push({name:Ce,index:Je,type:Ct,compression:ye}),$-=Ce.length+3}const oe=xn.channels,J=new Array(h.inputChannels.length);for(let Ce=0;Ce<h.inputChannels.length;++Ce){const Te=J[Ce]={},ye=oe[Ce];Te.name=ye.name,Te.compression=0,Te.decoded=!1,Te.type=ye.pixelType,Te.pLinear=ye.pLinear,Te.width=h.columns,Te.height=h.lines}const te={idx:new Array(3)};for(let Ce=0;Ce<h.inputChannels.length;++Ce){const Te=J[Ce];for(let ye=0;ye<O.length;++ye){const ht=O[ye];Te.name==ht.name&&(Te.compression=ht.compression,ht.index>=0&&(te.idx[ht.index]=Ce),Te.offset=Ce)}}let K,ae,ve;if(U.acCompressedSize>0)switch(U.acCompression){case 0:K=new Uint16Array(U.totalAcUncompressedCount),$e(h.array,x,E,U.acCompressedSize,K,U.totalAcUncompressedCount);break;case 1:const Ce=h.array.slice(E.value,E.value+U.totalAcUncompressedCount),Te=ll(Ce);K=new Uint16Array(Te.buffer),E.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){const Ce={array:h.array,offset:E,size:U.dcCompressedSize};ae=new Uint16Array(j(Ce).buffer),E.value+=U.dcCompressedSize}if(U.rleRawSize>0){const Ce=h.array.slice(E.value,E.value+U.rleCompressedSize),Te=ll(Ce);ve=Ye(Te.buffer),E.value+=U.rleCompressedSize}let we=0;const Ue=new Array(J.length);for(let Ce=0;Ce<Ue.length;++Ce)Ue[Ce]=new Array;for(let Ce=0;Ce<h.lines;++Ce)for(let Te=0;Te<J.length;++Te)Ue[Te].push(we),we+=J[Te].width*h.type*2;Le(te,Ue,J,K,ae,D);for(let Ce=0;Ce<J.length;++Ce){const Te=J[Ce];if(!Te.decoded)switch(Te.compression){case 2:let ye=0,ht=0;for(let Je=0;Je<h.lines;++Je){let Ct=Ue[Ce][ye];for(let ot=0;ot<Te.width;++ot){for(let it=0;it<2*Te.type;++it)D[Ct++]=ve[ht+it*Te.width*Te.height];ht++}ye++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function _e(h,x){const E=new Uint8Array(h);let D=0;for(;E[x.value+D]!=0;)D+=1;const U=new TextDecoder().decode(E.slice(x.value,x.value+D));return x.value=x.value+D+1,U}function Ie(h,x,E){const D=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+E));return x.value=x.value+E,D}function me(h,x){const E=Ae(h,x),D=Pe(h,x);return[E,D]}function xe(h,x){const E=Pe(h,x),D=Pe(h,x);return[E,D]}function Ae(h,x){const E=h.getInt32(x.value,!0);return x.value=x.value+4,E}function Pe(h,x){const E=h.getUint32(x.value,!0);return x.value=x.value+4,E}function le(h,x){const E=h[x.value];return x.value=x.value+1,E}function Oe(h,x){const E=h.getUint8(x.value);return x.value=x.value+1,E}const He=function(h,x){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(x.value,!0)):E=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,E};function tt(h,x){const E=h.getFloat32(x.value,!0);return x.value+=4,E}function q(h,x){return sd.toHalfFloat(tt(h,x))}function ie(h){const x=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function re(h,x){const E=h.getUint16(x.value,!0);return x.value+=2,E}function he(h,x){return ie(re(h,x))}function ze(h,x,E,D){const U=E.value,O=[];for(;E.value<U+D-1;){const $=_e(x,E),oe=Ae(h,E),J=Oe(h,E);E.value+=3;const te=Ae(h,E),K=Ae(h,E);O.push({name:$,pixelType:oe,pLinear:J,xSampling:te,ySampling:K})}return E.value+=1,O}function be(h,x){const E=tt(h,x),D=tt(h,x),U=tt(h,x),O=tt(h,x),$=tt(h,x),oe=tt(h,x),J=tt(h,x),te=tt(h,x);return{redX:E,redY:D,greenX:U,greenY:O,blueX:$,blueY:oe,whiteX:J,whiteY:te}}function nt(h,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Oe(h,x);return E[D]}function xt(h,x){const E=Ae(h,x),D=Ae(h,x),U=Ae(h,x),O=Ae(h,x);return{xMin:E,yMin:D,xMax:U,yMax:O}}function zt(h,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Oe(h,x);return E[D]}function ct(h,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Oe(h,x);return E[D]}function Lt(h,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],U=Pe(h,x),O=Pe(h,x),$=Oe(h,x);return{xSize:U,ySize:O,levelMode:E[$&15],roundingMode:D[$>>4]}}function Dn(h,x){const E=tt(h,x),D=tt(h,x);return[E,D]}function Pi(h,x){const E=tt(h,x),D=tt(h,x),U=tt(h,x);return[E,D,U]}function Jr(h,x,E,D,U){if(D==="string"||D==="stringvector"||D==="iccProfile")return Ie(x,E,U);if(D==="chlist")return ze(h,x,E,U);if(D==="chromaticities")return be(h,E);if(D==="compression")return nt(h,E);if(D==="box2i")return xt(h,E);if(D==="envmap")return ct(h,E);if(D==="tiledesc")return Lt(h,E);if(D==="lineOrder")return zt(h,E);if(D==="float")return tt(h,E);if(D==="v2f")return Dn(h,E);if(D==="v3f")return Pi(h,E);if(D==="int")return Ae(h,E);if(D==="rational")return me(h,E);if(D==="timecode")return xe(h,E);if(D==="preview")return E.value+=U,"skipped";E.value+=U}function kn(h,x){const E=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function Di(h,x,E){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=kn(Math.max(x,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function Mr(h,x,E,D){const U=new Array(h);for(let O=0;O<h;O++){const $=1<<O;let oe=x/$|0;D=="ROUND_UP"&&oe*$<x&&(oe+=1);const J=Math.max(oe,1);U[O]=(J+E-1)/E|0}return U}function Qr(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.tileCount;D++){const U=Ae(h.viewer,x),O=Ae(h.viewer,x);x.value+=8,h.size=Pe(h.viewer,x);const $=U*h.blockWidth,oe=O*h.blockHeight;h.columns=$+h.blockWidth>h.width?h.width-$:h.blockWidth,h.lines=oe+h.blockHeight>h.height?h.height-oe:h.blockHeight;const J=h.columns*h.totalBytes,K=h.size<h.lines*J?h.uncompress(h):X(h);x.value+=h.size;for(let ae=0;ae<h.lines;ae++){const ve=ae*h.columns*h.totalBytes;for(let we=0;we<h.inputChannels.length;we++){const Ue=xn.channels[we].name,Ce=h.channelByteOffsets[Ue]*h.columns,Te=h.decodeChannels[Ue];if(Te===void 0)continue;E.value=ve+Ce;const ye=(h.height-(1+oe+ae))*h.outLineWidth;for(let ht=0;ht<h.columns;ht++){const Je=ye+(ht+$)*h.outputChannels+Te;h.byteArray[Je]=h.getter(K,E)}}}}}function Jn(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const U=Ae(h.viewer,x)-xn.dataWindow.yMin;h.size=Pe(h.viewer,x),h.lines=U+h.blockHeight>h.height?h.height-U:h.blockHeight;const O=h.columns*h.totalBytes,oe=h.size<h.lines*O?h.uncompress(h):X(h);x.value+=h.size;for(let J=0;J<h.blockHeight;J++){const te=D*h.blockHeight,K=J+h.scanOrder(te);if(K>=h.height)continue;const ae=J*O,ve=(h.height-1-K)*h.outLineWidth;for(let we=0;we<h.inputChannels.length;we++){const Ue=xn.channels[we].name,Ce=h.channelByteOffsets[Ue]*h.columns,Te=h.decodeChannels[Ue];if(Te!==void 0){E.value=ae+Ce;for(let ye=0;ye<h.columns;ye++){const ht=ve+ye*h.outputChannels+Te;h.byteArray[ht]=h.getter(oe,E)}}}}}}function eo(h,x,E){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const U=h.getUint8(5);D.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},E.value=8;let O=!0;for(;O;){const $=_e(x,E);if($==0)O=!1;else{const oe=_e(x,E),J=Pe(h,E),te=Jr(h,x,E,oe,J);te===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${oe}'.`):D[$]=te}}if((U&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function wr(h,x,E,D,U){const O={size:0,viewer:x,array:E,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ki};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=X;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=Z;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=j;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=j;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ee;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Re;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Me;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Me;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const $={};for(const K of h.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":$[K.name]=!0,O.type=K.pixelType}let oe=!1;if($.R&&$.G&&$.B)oe=!$.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if($.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(U){case Xn:O.getter=he;break;case Yi:O.getter=re;break}else if(O.type==2)switch(U){case Xn:O.getter=tt;break;case Yi:O.getter=q}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const J=O.width*O.height*O.outputChannels;switch(U){case Xn:O.byteArray=new Float32Array(J),oe&&O.byteArray.fill(1,0,J);break;case Yi:O.byteArray=new Uint16Array(J),oe&&O.byteArray.fill(15360,0,J);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let te=0;for(const K of h.channels)O.decodeChannels[K.name]!==void 0&&(O.channelByteOffsets[K.name]=te),te+=K.pixelType*2;if(O.totalBytes=te,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=K=>K:O.scanOrder=K=>O.height-1-K,O.outputChannels==4?(O.format=_n,O.colorSpace=Ki):(O.format=Ph,O.colorSpace=Qt),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const K=Di(h.tiles,O.width,O.height),ae=Mr(K,O.width,h.tiles.xSize,h.tiles.roundingMode),ve=Mr(K,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=ae[0]*ve[0];for(let we=0;we<K;we++)for(let Ue=0;Ue<ve[we];Ue++)for(let Ce=0;Ce<ae[we];Ce++)He(x,D);O.decode=Qr.bind(O)}else{O.blockWidth=O.width;const K=Math.ceil(O.height/O.blockHeight);for(let ae=0;ae<K;ae++)He(x,D);O.decode=Jn.bind(O)}return O}const to={value:0},ji=new DataView(e),Us=new Uint8Array(e),xn=eo(ji,e,to),Ln=wr(xn,ji,Us,to,this.type);return Ln.decode(),{header:xn,width:Ln.width,height:Ln.height,data:Ln.byteArray,format:Ln.format,colorSpace:Ln.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=vt,s.magFilter=vt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function bn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new Sr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let M;if(f.needsPack){const S=f.packedComponents,L=S.length,R=f.storageType.indexOf("Int")===0,A=1<<b*8,P=R?A*.5:0,w=1/A;M=new Float32Array(v*g);for(let y=0,C=0;y<v;y++)for(let N=0;N<L;N++){const F=S[N];M[C]=(p[C]+P)*w*F.delta+F.from,C++}}else M=p;if(m==="indices"){let S=M;M instanceof Uint8Array&&(S=new Uint16Array(M.length),S.set(M)),l.setIndex(new Zt(S,1))}else l.setAttribute(m,new Zt(M,g));a+=v*g*b}return l.computeBoundingSphere(),l}const cl=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Yc={density:1,friction:2,restitution:.8},AM=40,Eo=8,RM=`
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
`,CM=`
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
uniform vec4 u_nearPositionRadiusList[${Eo}];
uniform vec3 u_nearColorList[${Eo}];

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

  for (int i = 0; i < ${Eo}; i++) {
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
  gi /= float(${Eo});

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
`,PM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DM=`
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
`;function LM(i){const e={...Yc},t={...Yc},n={...Yc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function IM(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function $c(i,e,t,n,r,o){let s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return o&&(s=o(s)),n+(r-n)*s}function Od(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)}class UM{constructor(e,t,n,r,o,s=!1){this.position=new Y((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Bn().setFromEuler(new fi(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new Y,this.gravityAcc=new Y}applyImpulse(){this.velocity.add(new Y((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(AM),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function FM(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*cl.length),r=cl[n];const o=new Kr,s=new Gn(25,1,.1,100);s.position.set(0,0,25);const a=new Ql({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Ki,a.toneMapping=$i;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([bn(u),new Promise((Ye,Le)=>{new EM().load(d,Ye,void 0,Le)})]);m.minFilter=vt,m.magFilter=vt,m.generateMipmaps=!1,m.colorSpace=Qt;const v=new Y(10,10,5),g=LM(r),_=IM("balloon24"),p=[],b=[],M=[],S=[],L=Array.from({length:Eo},()=>new Nt(0,0,-999,.01)),R=Array.from({length:Eo},()=>new Ke(1118481)),A=Ye=>new At({uniforms:{u_matcap:{value:m},u_color:{value:new Ke(Ye.color)},u_bgColor:{value:new Ke(1316117)},u_roughness:{value:Ye.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Nt(0,0,0,1)},u_selfRotation:{value:new Nt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Le=>Le.clone())},u_nearColorList:{value:R.map(Le=>Le.clone())}},vertexShader:RM,fragmentShader:CM});for(const Ye of g){const Le=A(Ye),We=new Ft(f,Le);We.frustumCulled=!1,We.scale.setScalar(Ye.radius),o.add(We),b.push(We),M.push(Le),p.push(new UM(Ye.radius,Ye.density,Ye.friction,Ye.restitution,_,!1)),S.push({i:b.length-1,d2:0})}const P=new At({uniforms:{u_color0:{value:new Ke(r)},u_color1:{value:new Ke(1316117)},u_aspect:{value:1}},vertexShader:PM,fragmentShader:DM,depthWrite:!1}),w=new Ft(new ci(90,60),P);w.position.z=-12,w.renderOrder=-1e3,o.add(w);const y=new Qe(0,0),C=new Y,N=new Y,F=new Y,z=new Y,B=new Y,H=new Y,V=new Y,k=new Y,se=new Y,G=new Y,pe=new Bn,Ee=.025,De=.1,Q=.12,ne=Ye=>{const Le=(e||i).getBoundingClientRect();y.x=(Ye.clientX-Le.left)/Le.width*2-1,y.y=-((Ye.clientY-Le.top)/Le.height*2-1)};window.addEventListener("pointermove",ne);const ue=()=>{n=(n+1)%cl.length,r=cl[n],b.forEach((Ye,Le)=>{const We=g[Le];We.isColored&&(Ye.material.uniforms.u_color.value.set(r),We.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(Ye=>Ye.applyImpulse())},ce=()=>ue();i.addEventListener("click",ce),e==null||e.addEventListener("click",ce);let ge=0;const ke=()=>{var T;const Ye=e||i.parentElement,Le=Ye.clientWidth,We=Ye.clientHeight,Xe=Le/Math.max(We,1),st=$c(Xe,2.2,2/3,18,30),de=((T=window.visualViewport)==null?void 0:T.height)||window.innerHeight||We,I=Math.max(.15,Math.min(1,We/Math.max(de,1)));s.fov=2*Math.atan(Math.tan(st*Math.PI/360)*I)*180/Math.PI,s.aspect=Xe,s.updateProjectionMatrix(),a.setSize(Le,We,!1),P.uniforms.u_aspect.value=Xe};ke(),window.addEventListener("resize",ke);let Ne=0,$e=performance.now();const Be=performance.now(),et=()=>{const Le=(e||i).getBoundingClientRect();l=Le.bottom>0&&Le.top<window.innerHeight};window.addEventListener("scroll",et,{passive:!0}),et();const W=Ye=>{if(Ne=requestAnimationFrame(W),!l){$e=Ye;return}let Le=Math.min(.05,(Ye-$e)/1e3);$e=Ye;const We=t?1:2;Le/=We;const Xe=(Ye-Be)/1e3,st=$c(Xe,.3,2,25,17.5,Od);s.position.z=st,ge=$c(Xe,.3,3,100,0,Od);{const de=s.fov,I=Math.max(1,Math.min(170,de+ge)),T=st,X=T*Math.tan(de/360*Math.PI/2)/Math.tan(I/360*Math.PI/2)-T;Number.isFinite(X)&&(s.position.z=st+X)}for(let de=0;de<We;de++){const I=new Y(y.x,y.y,.5).unproject(s);I.sub(s.position).normalize();const T=(0-s.position.z)/I.z;C.copy(s.position).addScaledVector(I,T),F.copy(C).sub(N).multiplyScalar(Q/Math.max(Le,.001)),z.copy(C).sub(s.position);const X=z.lengthSq()||1;N.copy(C);for(let Z=0;Z<p.length;Z++){const j=p[Z];j.updateGravity(Le),H.copy(j.velocity),V.copy(j.position);for(let _e=Z+1;_e<p.length;_e++){const Ie=p[_e];se.copy(Ie.velocity),G.copy(Ie.position),B.copy(V).sub(G);const me=B.length(),xe=j.radius+Ie.radius;if(me<xe&&me>1e-6){const Ae=Math.sqrt(j.friction*Ie.friction);j.frictionTot+=Ae,Ie.frictionTot+=Ae,B.normalize(),B.multiplyScalar(.5*(me-xe)),V.sub(B),G.add(B),B.normalize();const Pe=H.dot(B),le=se.dot(B),Oe=j.mass,He=Ie.mass,tt=(Oe*Pe+He*le-He*(Pe-le)*j.restitution)/(Oe+He),q=(Oe*Pe+He*le-Oe*(le-Pe)*Ie.restitution)/(Oe+He);H.addScaledVector(B,(tt-Pe)/(1+Ae)),se.addScaledVector(B,(q-le)/(1+Ae)),Ie.position.copy(G),Ie.velocity.copy(se)}}k.copy(V).sub(s.position);let ee=k.dot(z)/X;ee=k.sub(se.copy(z).multiplyScalar(ee)).length()-j.radius-Ee,ee<0&&(k.copy(V).sub(s.position).cross(z).normalize(),se.copy(z).cross(k).normalize(),V.sub(se.multiplyScalar(De*ee)),se.multiplyScalar(-Q/Math.max(Le,.001)),H.add(se),H.add(F));let Re=V.length();if(Re>0){k.set(1,1,1).normalize();let _e=1-Math.abs(k.dot(se.copy(V).normalize()));_e*=Le*Math.min(1,Math.max(0,Re/2))*.5,_e*=Z%2*2-1,pe.setFromAxisAngle(k,_e),se.copy(V).applyQuaternion(pe).sub(k.copy(V)),H.add(se)}k.crossVectors(V,H);let Me=k.length();Me/=j.inertia,Me>0&&(k.normalize(),pe.setFromAxisAngle(k,Me*Le),j.quaternion.premultiply(pe)),j.position.copy(V),j.velocity.copy(H),j.update(Le),["x","y","z"].forEach(_e=>{const Ie=_e==="z"?5.5:7.5;j.position[_e]>Ie&&(j.position[_e]=Ie,j.velocity[_e]*=-.55),j.position[_e]<-Ie&&(j.position[_e]=-Ie,j.velocity[_e]*=-.55)})}}for(let de=0;de<b.length;de++){const I=b[de],T=p[de];I.position.copy(T.position),I.quaternion.copy(T.quaternion);const X=M[de].uniforms;X.u_selfPositionRadius.value.set(T.position.x,T.position.y,T.position.z,T.radius),X.u_selfRotation.value.set(T.quaternion.x,T.quaternion.y,T.quaternion.z,T.quaternion.w),X.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let de=0;de<b.length;de++){for(let X=0;X<b.length;X++)S[X].i=X,S[X].d2=de===X?0:p[de].position.distanceToSquared(p[X].position);S.sort((X,Z)=>X.d2-Z.d2);const I=M[de].uniforms.u_nearPositionRadiusList.value,T=M[de].uniforms.u_nearColorList.value;for(let X=0;X<Eo;X++){const Z=S[X+1]?S[X+1].i:S[0].i,j=p[Z];I[X].set(j.position.x,j.position.y,j.position.z,j.radius),T[X].copy(M[Z].uniforms.u_color.value)}}s.position.x=0,s.position.y=0,s.lookAt(0,0,0),a.render(o,s)};return Ne=requestAnimationFrame(W),{cycleColor:ue,destroy(){cancelAnimationFrame(Ne),window.removeEventListener("pointermove",ne),window.removeEventListener("resize",ke),window.removeEventListener("scroll",et),i.removeEventListener("click",ce),e==null||e.removeEventListener("click",ce),M.forEach(Ye=>Ye.dispose()),P.dispose(),a.dispose()}}}function Yt(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function ri(i){return Yt(i,0,1)}function Xm(i,e,t){return(t-i)/(e-i||1)}function Mo(i,e,t){return Yt(Xm(i,e,t),0,1)}function fe(i,e,t,n,r,o){let s=Mo(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function zd(i,e,t,n,r,o){let s=Xm(e,t,i);return n+s*(r-n)}function NM(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,M)=>_*(g*g*g)+p*(g*g)+b*g+M,a=(g,_,p,b,M)=>{const S=g*g;return _*(S*g)+p*S+b*g+M},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function gt(i){return NM(i,.35,0,0,1)}function Vl(i){return i===1?1:1-Math.pow(2,-10*i)}function OM(i){return i===0?0:Math.pow(1024,i-1)}function zM(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function BM(i){return 1-Math.cos(i*Math.PI/2)}function rh(i){return Math.sin(i*Math.PI/2)}function kM(i){return-(Math.cos(Math.PI*i)-1)/2}function HM(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function oh(i){return i*i*i}function Gl(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Tn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,zd(n,t,t-r,-1,0));s+=Math.max(0,zd(n,0,-r,0,1));const a=fe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function VM(i){return 1-Math.pow(1-i,3)}function GM(i){return i*i*i*i}function WM(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Bi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Bd=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function ul(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function kd(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function zh(i){const e={};let t=0;for(const f of Bd)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=ul(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=ul(v),p=ul(g),b=Math.max(_.height,kd(v,1080/1496)),M=Math.max(p.height,kd(g,1537/2e3));n=(_.top||m.top)-f;const S=(f+b)*.5,L=Math.max((f+M)*.5+f,f*1.85),R=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),A=document.documentElement.scrollHeight,P=R?Math.max(ul(R).bottom,A):A;let w=Math.max(f*1.35,P-m.bottom);const y=Math.max(f*12,A-f-n);let C=Math.max(f*8,m.bottom-n-S-L);const N=S+L+w;N+C>y&&(C=Math.max(f*6,y-N)),N+C>y&&(w=Math.max(f*.5,y-S-L-C)),e.blackFrameShow.pixelCount=S,e.astronautDrop.pixelCount=L,e.astronautWait.pixelCount=Math.max(f*.5,w),r=0;for(const F of Bd){const z=e[F.id];z.pixelFrom=r,z.weight&&(z.pixelCount=C*z.weight/t),z.id==="blackFrameIn"&&(z.pixelCount=Math.min(z.pixelCount,f*1.15)),r+=z.pixelCount,z.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,b=Math.max(p-_,1e-6),M=c()-_,S=M/b;return{ratio:Math.max(0,Math.min(1,S)),raw:S,active:S>=0&&S<1,global:c()/Math.max(r,1),pixel:M,pixelCount:b}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const XM=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,qM=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,YM="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",$M="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",qm=`
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
`,Ym=`
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
`,ZM=`
${qm}
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
${Ym}
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
`,KM=`
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
`,Hd=`
${qm}
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
${Ym}
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
`,lr=5,hl=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,jM=`
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
`,JM=`
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
`,QM=`
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
`,ew=`
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
`;function os(i,e,t=!1,n=0){const r={minFilter:vt,magFilter:vt,format:_n,type:n>0?Ci:Yi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new yr(i,e,r);return t&&n===0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Lo),t&&n>0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Lo),o}function tw(i,e,t,{isMobile:n=!1}={}){const r=new Qe(1,1);i.getSize(r);let o=!!n,s=os(1,1,!0,4),a=os(1,1,!1),l=os(1,1,!1),c=os(1,1,!1),u=null,d=null;const f=[],m=[];for(let Z=0;Z<lr;Z++)f.push(os(1,1)),m.push(os(1,1));const v=new jl(-1,1,1,-1,0,1),g=new Ft(new ci(2,2),new Nh),_=new Kr;_.add(g);const p=new At({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new Qe(1,1)},u_aspect:{value:new Qe(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:hl,fragmentShader:jM,depthTest:!1,depthWrite:!1,toneMapped:!1}),b=[];for(let Z=0;Z<lr;Z++){const j=3+Z*2;b.push(new At({uniforms:{u_texture:{value:null},u_resolution:{value:new Qe(1,1)},u_direction:{value:new Qe(1,0)}},defines:{KERNEL_RADIUS:j,SIGMA:j},vertexShader:hl,fragmentShader:JM,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const M=new Float32Array(lr),S=new At({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:M}},vertexShader:hl,fragmentShader:QM,depthTest:!1,depthWrite:!1,toneMapped:!1});let L=0;const R=new At({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new St},u_prevProjectionViewMatrix:{value:new St},u_aspect:{value:new Qe(1,1)},u_amount:{value:1}},vertexShader:hl,fragmentShader:ew,depthTest:!1,depthWrite:!1,toneMapped:!1}),A=new St,P=new St,w=new St,y=new St,C=new St,N=new Y,F=new fi,z=new Y(1,1,1),B=new Bn;let H=!0,V=1,k=!1,se=0,G=0,pe=1,Ee=1,De=0,Q=.015,ne=.6,ue=.3,ce=.5,ge=0,ke=new Ke(0),Ne=!0,$e=1,Be=1,et=1;const W=new Qe(1,0),Ye=new Qe(0,1),Le=(Z,j)=>{g.material=Z,i.setRenderTarget(j),i.clear(),i.render(_,v)},We=Z=>{const j=Math.max(1,Z);return 1<<Math.ceil(Math.log(j)/Math.log(2))},Xe=(Z,j)=>{$e=Math.max(1,Math.floor(Z)),Be=Math.max(1,Math.floor(j));const ee=1;s.setSize(Math.max(1,Math.floor($e*ee)),Math.max(1,Math.floor(Be*ee))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const Re=o?3:2;let Me=Math.max(1,Math.ceil($e/Re)),_e=Math.max(1,Math.ceil(Be/Re));c.setSize(Me,_e);for(let me=0;me<lr;me++)f[me].setSize(Me,_e),m[me].setSize(Me,_e),Me=Math.max(1,Math.ceil(Me/2)),_e=Math.max(1,Math.ceil(_e/2));p.uniforms.u_texelSize.value.set(1/$e,1/Be);const Ie=Be/Math.sqrt($e*$e+Be*Be)*2;p.uniforms.u_aspect.value.set($e/Be*Ie,Ie),R.uniforms.u_aspect.value.set($e/Math.max(Be,1),1)},st=({blackFrameInRatio:Z=0,blackTitleRatio:j=0,blackTunnelRatio:ee=0,whiteFrameRatio:Re=0,whiteTunnelWaitRatio:Me=0,astronautDropRatio:_e=0,isWhiteTunnelActive:Ie=!1,isBlackTunnelActive:me=!1,isMobile:xe=!1}={})=>{o=!!xe;let Ae=Z*(Dt.lerp(0,.15,j)+Dt.clamp((ee-.2)/.2,0,1)*.25);if(ee>=.65){const le=Dt.clamp((ee-.65)/.1,0,1);Ae=Ae+(.08-Ae)*le}if(Ie&&(Ae=0),!Ie&&Z>.55&&ee<.25){const le=Dt.lerp(xe?.24:.42,xe?.12:.18,Dt.clamp(j/.5,0,1));Ae=Math.max(Ae,le*Math.min(1,Z))}if(pe=ee<1?Dt.lerp(1,3,Dt.clamp(ee/.7,0,1)):1,Ie){const le=_e>.001&&_e<1,Oe=xe?10:16;se=_e<1?Dt.lerp(le?1.6:4,le?1.1:2,Dt.clamp(Re/.05,0,1)):Dt.lerp(0,Oe,Dt.clamp(Me/.1,0,1)),G=le?xe?.28:.35:xe?.4:.5,Ee=le?1:xe?1.1:1.2,et=le?.45:xe?.95:1.05,Ae=0;const He=le?.12:.3;ge=Dt.lerp(He,0,Dt.clamp(Me/.1,0,1)),ke.set(_e<1?"#ffffff":"#000000")}else{et=1;const le=Dt.clamp(j/.25,0,1);se=Dt.lerp(xe?22:30,xe?5:6,le),ge=0,ke.set("#000000")}De=Ae;const Pe=!Ie&&Z>.55&&ee<.2;ne=Pe?.85:.6,Q=Pe?.04:xe?.012:.02,ue=Pe?.15:.3,ce=Pe?.75:.5,Ie||(G=xe?.15:Pe?.55:.5,Ee=Pe?1.15:1),k=me||Ie},de=(Z,j=0)=>{N.set(0,0,Z),F.set(0,0,j)},I=()=>{H=!0},T=(Z,j)=>{const ee=i.autoClear;i.autoClear=!0,Le(Z,j),i.autoClear=ee},X=()=>{if(!Ne){i.setRenderTarget(null),i.render(e,t);return}const Z=i.getRenderTarget(),j=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(ke,ge),i.clear();const ee=e.background;e.background=null;const Re=u==null?void 0:u.mesh,Me=!!(Re!=null&&Re.visible);Me&&(Re.visible=!1);const _e=d==null?void 0:d.mesh,Ie=!!(_e!=null&&_e.visible);if(Ie&&(_e.visible=!1),i.render(e,t),e.background=ee,d!=null&&d.visible&&d.overlayScene?(_e&&(_e.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(d.overlayScene,v),i.autoClear=!0):Ie&&_e&&(_e.visible=!1),u!=null&&u.active&&u.overlayScene){for(let Oe=0;Oe<lr;Oe++)M[Oe]=0,S.uniforms[`u_blurTexture${Oe}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const le=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,Le(S,a),S.uniforms.u_scrollPaint.value=le,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Be),Re&&(Re.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else Me&&Re&&(Re.visible=!1);let me=s.texture;if(A.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),w.copy(A).invert(),k&&V>0?(H&&(P.copy(A),H=!1),C.compose(N,B.setFromEuler(F),z),C.invert(),y.copy(P).multiply(C),R.uniforms.u_texture.value=s.texture,R.uniforms.u_depthTexture.value=s.depthTexture,R.uniforms.u_projectionViewInverseMatrix.value.copy(w),R.uniforms.u_prevProjectionViewMatrix.value.copy(y),R.uniforms.u_amount.value=V,T(R,l),me=l.texture,P.copy(A)):(P.copy(A),H=!0),se<.05&&De<.005){S.uniforms.u_texture.value=me;for(let le=0;le<lr;le++)M[le]=0,S.uniforms[`u_blurTexture${le}`].value=me;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),Le(S,null),i.autoClear=j,i.setRenderTarget(Z);return}p.uniforms.u_texture.value=me,p.uniforms.u_amount.value=Ee,p.uniforms.u_haloStrength.value=De,p.uniforms.u_haloWidth.value=ne,p.uniforms.u_haloRGBShift.value=Q,p.uniforms.u_haloMaskInner.value=ue,p.uniforms.u_haloMaskOuter.value=ce,T(p,c);const xe=o?3:lr;let Ae=c;for(let le=0;le<xe;le++){const Oe=b[le];Oe.uniforms.u_texture.value=Ae.texture,Oe.uniforms.u_resolution.value.set(Ae.width,Ae.height),Oe.uniforms.u_direction.value=W,T(Oe,f[le]),Oe.uniforms.u_texture.value=f[le].texture,Oe.uniforms.u_resolution.value.set(f[le].width,f[le].height),Oe.uniforms.u_direction.value=Ye,T(Oe,m[le]),Ae=m[le]}let Pe=se;if(o)Pe*=et;else{const le=We($e/2)>>1,Oe=We(Be/2)>>1,He=Math.max(1,Math.ceil(Math.log(le*Oe)/Math.log(2)));Pe=se*1024/Math.pow(He,4)*.85*48*et}for(let le=0;le<lr;le++){if(le>=xe){M[le]=0;continue}const Oe=(xe-le)/xe;let He=Pe*(Oe+(1.2-Oe*2)*G)/Math.pow(2,xe-le-1);!o&&le===0&&(He*=.15),!o&&le===1&&(He*=.45),!o&&le>=3&&(He*=1.75),M[le]=He}S.uniforms.u_texture.value=me,S.uniforms.u_saturation.value=pe;for(let le=0;le<lr;le++){const Oe=le<xe?m[le].texture:m[xe-1].texture;S.uniforms[`u_blurTexture${le}`].value=Oe}i.setRenderTarget(null),Le(S,null),i.autoClear=j,i.setRenderTarget(Z)};return Xe(r.x,r.y),{resize:Xe,sync:st,render:X,setEfxOffset:de,markEfxSync:I,setGlassPass(Z){u=Z||null},setFrameBgPass(Z){d=Z||null},setEfxAmount(Z){V=Z},get clearAlpha(){return ge},setEnabled(Z){Ne=!!Z},setScrollVelocity(Z){const j=Math.min(1,Math.abs(Z)*.12);L+=(j-L)*.12,S.uniforms.u_scrollPaint.value=L},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),f.forEach(Z=>Z.dispose()),m.forEach(Z=>Z.dispose()),p.dispose(),S.dispose(),R.dispose(),b.forEach(Z=>Z.dispose()),g.geometry.dispose()}}}function nw(i,e,t){return i+(e-i)*t}const zr=class zr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<zr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&zr.MAX_VERTICES_MASK,a=s+1&zr.MAX_VERTICES_MASK;return nw(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ze(zr,"MAX_VERTICES",512),Ze(zr,"MAX_VERTICES_MASK",zr.MAX_VERTICES-1);let Wl=zr;const ki=new Y,ua=class ua{constructor(){this._position=new Y,this._rotation=new Bn,this._euler=new fi,this._scale=new Y(1,1,1),this._matrix=new St,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new Y(1,1,1),this._rotationScale=new Y(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Wl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;ki.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),ki.multiply(this._positionScale),ki.multiplyScalar(this._positionAmplitude*ua.FBM_NORM),this._position.copy(ki)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;ki.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),ki.multiply(this._rotationScale),ki.multiplyScalar(this._rotationAmplitude*ua.FBM_NORM),this._euler.set(ki.x,ki.y,ki.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ze(ua,"FBM_NORM",1/.75);let ca=ua;class sh{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Vd=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],iw=26,go=64,rw=34,$s=new Qe(1465,1024),ow=`
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
`,sw=`
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
`,aw=`
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
`,lw=`
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
`,fl=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function cw(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function uw(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?rw:iw,[s,a]=await Promise.all([new Vi().loadAsync(`${e}assets/textures/tunnels/${r}`),bn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Nn,s.flipY=!1,s.needsUpdate=!0;const l=new xi;i.add(l);const c=new ci(1,1),u=new bo;for(const y in c.attributes)u.setAttribute(y,c.attributes[y]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let y=0,C=0;y<o;y++,C+=4){d[y]=y/o;const N=Vd[y%Vd.length];f[C]=N.x/$s.x,f[C+1]=N.y/$s.y,f[C+2]=N.w/$s.x,f[C+3]=N.h/$s.y,m[C]=Math.random(),m[C+1]=Math.random(),m[C+2]=Math.random(),m[C+3]=Math.random()}u.setAttribute("instanceId",new En(d,1)),u.setAttribute("instanceUvInfo",new En(f,4)),u.setAttribute("instanceRands",new En(m,4)),u.instanceCount=o;const v=new At({vertexShader:ow,fragmentShader:sw,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:$s.clone()},u_bgColor:{value:new Ke(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:xa,blendEquation:On,blendSrc:Nl,blendDst:Ol,blendEquationAlpha:On,blendSrcAlpha:Sl,blendDstAlpha:Sl,defines:{COUNT:o}}),g=new Ft(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new bo;for(const y in a.attributes)_.setAttribute(y,a.attributes[y]);a.index&&(_.index=a.index);const p=cw("diamonds-3"),b=new Float32Array(go*3),M=new Float32Array(go*3),S=new Float32Array(go*4),L=new Y;for(let y=0,C=0,N=0;y<go;y++,C+=3,N+=4)b[C]=16*(p()*2-1),b[C+1]=16*(p()*2-1),b[C+2]=19-(go-y-1)/(go-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),M[C]=L.x,M[C+1]=L.y,M[C+2]=L.z,S[N]=p(),S[N+1]=p(),S[N+2]=p(),S[N+3]=p();_.setAttribute("a_instancePosition",new En(b,3)),_.setAttribute("a_instanceRotationAxis",new En(M,3)),_.setAttribute("a_instanceRand",new En(S,4)),_.instanceCount=go;const R=[];for(let y=0;y<25;y++)R.push(new Nt(fl[y*4],fl[y*4+1],fl[y*4+2],fl[y*4+3]));const A=new At({vertexShader:aw,fragmentShader:lw,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Ke("#689aff")},u_planes:{value:R},u_bgColor:{value:new Ke(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:xa,blendEquation:On,blendSrc:mi,blendDst:Sl,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi}),P=new Ft(_,A);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,l.add(P),g.renderOrder=15;const w=new Ke(0);return{update({whiteTunnelWaitRatio:y=0,aspect:C=1,bg:N="#000000"}={}){const F=fe(y,0,.2,0,1),z=F>0;l.visible=z,g.visible=z,P.visible=z,v.uniforms.u_activeRatio.value=F,A.uniforms.u_activeRatio.value=F,v.uniforms.u_aspect.value=C,A.uniforms.u_aspect.value=C,w.set(N),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const dl=946,Gd=2,hw=`
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
`,fw=`
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
`;function Wd(i,e,t){const n=new ba(i,e,t,_n,Xn);return n.magFilter=sn,n.minFilter=sn,n.wrapS=zn,n.wrapT=zn,n.needsUpdate=!0,n.colorSpace=Qt,n}async function dw(i,{base:e}){const[t,n]=await Promise.all([bn(`${e}assets/models/tunnels/broken_glass.buf`),bn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Zt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(dl*3),l=new Float32Array(o.length/3*4);for(let N=0,F=0;N<o.length;N+=3,F+=4)l[F]=o[N],l[F+1]=o[N+1],l[F+2]=o[N+2],l[F+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Wd(l,dl,a),d=Wd(c,dl,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new Qe(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new Qe(dl,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new At({uniforms:f,vertexShader:hw,fragmentShader:fw,transparent:!0,depthWrite:!1,depthTest:!0,side:Cn,toneMapped:!1}),v=new Ft(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new Kr,_=new xi;_.add(v),g.add(_);let p=0,b=1,M=1,S=0,L=1,R=!1;const A=new Y(0,0,1),P=new Bn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return R},updateFromScroll:({glassBreakRatio:N=0,astronautDropRatio:F=0,frameHeight:z=0,frameRotation:B=0,frameScale:H=1}={})=>{p=fe(N,0,1,0,1,rh),b=fe(F,.75,1,1,0),M=Math.max(1,z||window.innerHeight),S=B||0,L=Math.max(1e-4,H||1),R=p>0&&F<1,_.visible=R,R||(v.visible=!1)},syncToCamera:(N,F=window.innerHeight)=>{if(!R||!N||p<=0)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-Gd);const z=Math.tan(N.fov*Math.PI/360)*Gd*2,B=M/Math.max(F,1)*z*L;P.setFromAxisAngle(A,-S),v.quaternion.multiply(P),v.scale.setScalar(Math.max(B,1e-4));const H=p*(a-1),V=Math.floor(H),k=Math.min(V+1,a-1);return f.u_frameFrom.value=V,f.u_frameTo.value=k,f.u_frameRatio.value=H-V,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(N,F,z)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(F,z)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const pw=`
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
`,mw=`
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
`;function Xd(i){return new Promise(e=>{new Vi().load(i,t=>{t.colorSpace=Qt,t.flipY=!1,t.minFilter=vt,t.magFilter=vt,t.needsUpdate=!0,e(t)},void 0,()=>e(null))})}async function _w({base:i}){const[e,t]=await Promise.all([Xd(`${i}assets/textures/tunnels/tablet.png`),Xd(`${i}assets/textures/tunnels/desktop.png`)]),n=(()=>{const p=new Uint8Array([0,0,0,255]),b=new ba(p,1,1);return b.needsUpdate=!0,b})(),r={u_bgColor:{value:new Ke("#000000")},u_frameOffset:{value:new Qe},u_frameScale:{value:1},u_frameRotate:{value:0},u_radiusScale:{value:1},u_glowColor:{value:new Ke(0,0,0)},u_glowRadius:{value:.11},u_glowUpperBound:{value:.5},u_glowPow:{value:.1},u_glowTint:{value:0},u_domXY:{value:new Qe},u_domWH:{value:new Qe(1,1)},u_dom2Offset:{value:new Qe},u_dom2WH:{value:new Qe(1,1)},u_dom2Texture:{value:n},u_viewportResolution:{value:new Qe(1,1)},u_globalRadius:{value:24}},o=new ci(2,2),s=new At({uniforms:r,vertexShader:pw,fragmentShader:mw,depthTest:!1,depthWrite:!1,transparent:!0,blending:Xr,toneMapped:!1}),a=new Ft(o,s);a.frustumCulled=!1,a.renderOrder=-1,a.visible=!1,a.name="goal-frame-bg";const l=new Kr;l.add(a);const c=new Ke("#1a2ffb"),u=new Ke("#000000"),d=new Ke("#f0f1fa"),f=new Ke;let m=0,v=0,g=0;return{mesh:a,overlayScene:l,updateFromScroll:({isBlackSide:p=!1,blackFrameInRatio:b=0,whiteFrameOutRatio:M=0,glassBreakRatio:S=0,astronautDropRatio:L=0,blackFrameShowRatio:R=0,frameRect:A=null,innerRect:P=null,viewportW:w=window.innerWidth,viewportH:y=window.innerHeight,globalRadius:C=24}={})=>{var $e,Be;r.u_viewportResolution.value.set(w,y),r.u_globalRadius.value=C;const N=A,F=P||A;if(!N||N.width<4||N.height<4)return a.visible=!1,null;let z,B,H,V=0,k=0,se=0,G=0;const pe=r.u_glowColor.value;if(p)z=Yt(b,0,1),B=z*.4,H=1,V=fe(z,0,1,.11,-.5),k=fe(z,0,1,.25,2),se=fe(z,0,1,.06,.3),pe.copy(u).lerp(d,z),r.u_dom2Texture.value=($e=e==null?void 0:e.image)!=null&&$e.width?e:n,r.u_bgColor.value.set("#000000");else{z=1-Yt(M,0,1),B=z*-.3,H=0;const et=S;if(et<0)G=.8,pe.copy(u);else{V=-.25,k=fe(et,0,.15,0,.45),k=fe(et,.15,.3,k,1),se=fe(et,0,.1,.35,.85),se=fe(et,.1,1,se,.35),G=.28;let W=fe(et,0,.1,1,0);W=fe(et,.1,.8,W,.9),pe.copy(c).lerp(f.copy(u),W)}r.u_dom2Texture.value=(Be=t==null?void 0:t.image)!=null&&Be.width?t:n,r.u_bgColor.value.set("#000000")}const Ee=y*.2*(1-Yt(R,0,1)),De=Math.hypot(w,y),Q=Dt.lerp(1,De/Math.min(N.width,N.height),z),ne=L,ue=N.top+Ee,ce=ue+N.height,ge=N.bottom>0&&N.top<y&&N.right>0&&N.left<w&&ce>0&&ue<y;if(a.visible=z<.999&&ne<1&&ge,!a.visible)return null;m=N.left,v=ue,g=0,r.u_domWH.value.set(Math.max(1,Math.ceil(N.width)),Math.max(1,Math.ceil(N.height))),r.u_domXY.value.set(m,v-g),F?(r.u_dom2Offset.value.set(F.left+F.width*.5-N.left-N.width*.5,F.top+F.height*.5-(N.top+Ee)-N.height*.5),r.u_dom2WH.value.set(Math.max(1,F.width),Math.max(1,F.height))):(r.u_dom2Offset.value.set(0,0),r.u_dom2WH.value.set(N.width,N.height));const ke=ne<1?w*.5-N.left-N.width*.5:0,Ne=-(N.top+Ee+N.height*.5-y*.5);return r.u_frameOffset.value.set(ke*z,Ne*z),r.u_frameScale.value=Q,r.u_frameRotate.value=B,r.u_radiusScale.value=H,r.u_glowRadius.value=V,r.u_glowUpperBound.value=k,r.u_glowPow.value=se,r.u_glowTint.value=G,{frameScale:Q,frameRotation:B,cameraViewportOffsetX:ke*(1-z),cameraViewportOffsetY:Ne*(1-z)}},resize(p,b){r.u_viewportResolution.value.set(p,b)},get visible(){return a.visible},dispose(){o.dispose(),s.dispose(),e==null||e.dispose(),t==null||t.dispose(),n.dispose()}}}const Zs=53,pl=16,ml=20,qd=["helmet","helmet_glass","glove_shoes","wearpack"],Ks=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Zc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Yd(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function $d(i,e){const[t,n]=await Promise.all([Yd(i),Yd(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new ba(u,r,o,_n,Ci);return d.colorSpace=Qt,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=qi,d.magFilter=vt,d.anisotropy=8,d.wrapS=zn,d.wrapT=zn,d.needsUpdate=!0,d}function Zd(i,e,t){const n=new ba(i,e,t,_n,Xn);return n.magFilter=sn,n.minFilter=sn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Kc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new En(t,3)}const _l=`
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
`;async function gw(i,e,t){var ef,tf,nf,rf;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,M,S,...L]=await Promise.all([bn(`${r}assets/models/tunnels/astronaut_animations.buf`),bn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),bn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new Vi().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new Vi().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new Vi().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),bn(`${r}assets/models/tunnels/tunnel_block_base.buf`),bn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),bn(`${r}assets/models/tunnels/grid_base_ld.buf`),bn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?bn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?bn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new Vi().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),bn(`${r}assets/models/tunnels/earth_card.buf`),new Vi().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...qd.map(Se=>bn(`${r}assets/models/tunnels/astronaut_${Se}.buf`))]),R=new Kr;R.background=new Ke(0);const A=new Y(0,0,25),P=new Y(0,0,24),w=45,y=new Gn(w,1,1,200);y.position.copy(A),y.lookAt(P);let C;try{C=new Ql({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Se){throw console.error("Goal WebGL unavailable",Se),Se}C.setClearColor(0,1),C.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),C.outputColorSpace=Ki,C.toneMapping=$i,C.autoClear=!0,c.colorSpace=Qt,c.generateMipmaps=!1,c.minFilter=vt,c.magFilter=vt,u.colorSpace=Qt,u.generateMipmaps=!1,u.minFilter=vt,u.magFilter=vt,d.colorSpace=Qt,d.wrapS=d.wrapT=ms,d.generateMipmaps=!1,d.minFilter=vt,d.magFilter=vt;const N=s.attributes.position.array,F=s.attributes.orient.array,z=N.length/3,B=z/Zs,H=Math.ceil(Math.sqrt(z)),V=Math.ceil(z/H),k=H*V,se=new Float32Array(k*4),G=new Float32Array(k*4);for(let Se=0,Ge=0,Fe=0;Se<z;Se++,Ge+=3,Fe+=4)se[Fe]=N[Ge],se[Fe+1]=N[Ge+1],se[Fe+2]=N[Ge+2],se[Fe+3]=1,G[Fe]=F[Fe],G[Fe+1]=F[Fe+1],G[Fe+2]=F[Fe+2],G[Fe+3]=F[Fe+3];const pe=Zd(se,H,V),Ee=Zd(G,H,V),De=new En(new Float32Array([0,0,18]),3);De.setUsage(Cr);const Q=new En(new Float32Array([0,0,0,1]),4);Q.setUsage(Cr);const ne=new En(new Float32Array([0,1,0]),3);ne.setUsage(Cr);const ue=new En(new Float32Array([90,91,0]),3);ue.setUsage(Cr);const ce=()=>{const Se=new yr(1,1,{minFilter:vt,magFilter:vt,format:_n,generateMipmaps:!1});return Se.texture.wrapS=Se.texture.wrapT=zl,Se},ge=ce(),ke=ce(),Ne=ce();let $e=ge,Be=ke;const et=`
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
}`,W=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Ye=new At({uniforms:{u_texture:{value:null},u_direction:{value:new Qe(1,0)},u_resolution:{value:new Qe(1,1)}},vertexShader:W,fragmentShader:et,depthTest:!1,depthWrite:!1,toneMapped:!1}),Le=new jl(-1,1,1,-1,0,1),We=new Kr,Xe=new Ft(new ci(2,2),Ye);We.add(Xe);const st=(Se,Ge)=>{const Fe=Math.max(1,Se.width),je=Math.max(1,Se.height);Ye.uniforms.u_resolution.value.set(Fe,je),Ye.uniforms.u_texture.value=Se.texture,Ye.uniforms.u_direction.value.set(Ge,0),C.setRenderTarget(Ne),C.clear(),C.render(We,Le),Ye.uniforms.u_texture.value=Ne.texture,Ye.uniforms.u_direction.value.set(0,Ge),C.setRenderTarget(Se),C.clear(),C.render(We,Le),C.setRenderTarget(null)},de={u_animationPositionTexture:{value:pe},u_animationOrientTexture:{value:Ee},u_animationTextureSize:{value:new Qe(H,V)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ke("#566d80")},u_bgColor:{value:new Ke("#000000")},u_sunPosition:{value:new Y(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ke(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Ke("#aaaafb")},u_cardPosition:{value:new Y}},I={u_blackTunnelTexture:{value:$e.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},T={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Se=>{const[Ge,Fe]=await Promise.all([$d(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_base.webp`),new Vi().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_nor.webp`)]);Fe.colorSpace=Qt,Fe.flipY=!1,Fe.generateMipmaps=!0,Fe.minFilter=qi,Fe.magFilter=vt,Fe.anisotropy=8,T[Se]={armb:Ge,nor:Fe}}));const X=((tf=(ef=C.capabilities).getMaxAnisotropy)==null?void 0:tf.call(ef))||8;for(const Se of Object.keys(T)){const{armb:Ge,nor:Fe}=T[Se];Ge&&(Ge.anisotropy=Math.min(8,X),Ge.needsUpdate=!0),Fe&&(Fe.anisotropy=Math.min(8,X),Fe.needsUpdate=!0)}T.helmet_glass=T.helmet;const Z=new xi;R.add(Z);const j=[],ee=4,Re=new En(new Float32Array(ee*3),3);Re.setUsage(Cr);const Me=new En(new Float32Array(ee*4),4);Me.setUsage(Cr);const _e=new En(new Float32Array(ee*3),3);_e.setUsage(Cr);const Ie=new En(new Float32Array(ee*3),3);Ie.setUsage(Cr);for(let Se=0;Se<ee;Se++)Me.setXYZW(Se,0,0,0,1),_e.setXYZ(Se,0,1,0),Ie.setXYZ(Se,90,91,0);const me=[];let xe=0;const Ae={value:0};qd.forEach((Se,Ge)=>{const Fe=L[Ge],je=new bo;for(const hn in Fe.attributes)je.setAttribute(hn,Fe.attributes[hn]);Fe.index&&je.setIndex(Fe.index),je.instanceCount=1,je.setAttribute("instancePos",De),je.setAttribute("instanceOrient",Q),je.setAttribute("instanceAnimationFrameFromToBlend1",ne),je.setAttribute("instanceAnimationFrameFromToBlend2",ue);const rt=Se==="helmet_glass"||Se==="card"?"helmet":Se,_t=Se==="helmet_glass",lt={...de,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor}},Et={...de,...I,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor}},Wt=new At({uniforms:lt,vertexShader:_l,fragmentShader:ZM,transparent:!0,blending:Ri,side:Cn,defines:{BONE_COUNT:Zs,IS_WHITE:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),un=new At({uniforms:Et,vertexShader:_l,fragmentShader:Hd,transparent:!0,blending:Ri,side:Cn,defines:{BONE_COUNT:Zs,IS_BLACK:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),Hn=new Ft(je,Wt);if(Hn.frustumCulled=!1,Hn.userData.whiteMat=Wt,Hn.userData.blackMat=un,Z.add(Hn),j.push(Hn),!_t){const hn=new bo;for(const yi in Fe.attributes)hn.setAttribute(yi,Fe.attributes[yi]);Fe.index&&hn.setIndex(Fe.index),hn.instanceCount=ee,hn.setAttribute("instancePos",Re),hn.setAttribute("instanceOrient",Me),hn.setAttribute("instanceAnimationFrameFromToBlend1",_e),hn.setAttribute("instanceAnimationFrameFromToBlend2",Ie);const pn=new At({uniforms:{...Et,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor},u_alpha:Ae},vertexShader:_l,fragmentShader:Hd,transparent:!0,depthWrite:!1,depthTest:!1,blending:xa,blendEquation:On,blendSrc:mi,blendDst:mi,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi,side:Cn,defines:{BONE_COUNT:Zs,IS_BLACK:!0,IS_CLONE:!0}}),on=new Ft(hn,pn);on.frustumCulled=!1,on.renderOrder=1e3,on.visible=!1,Z.add(on),me.push(on)}});const Pe=new Qe(5,23),le=new Wl;let Oe=0,He=!1;const tt=document.createElement("canvas");tt.width=tt.height=11;{const Se=tt.getContext("2d");Se.fillStyle="#000",Se.fillRect(0,0,11,11),Se.fillStyle="#f00",Se.fillRect(1,1,3,9),Se.fillStyle="#0f0",Se.fillRect(4,1,3,9),Se.fillStyle="#00f",Se.fillRect(7,1,3,9)}const q=new rM(tt);q.needsUpdate=!0,q.minFilter=vt,q.magFilter=vt;const ie=await new Vi().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ie.minFilter=sn,ie.magFilter=sn,ie.colorSpace=Qt,ie.flipY=!1;const re=new ci(.2,.15).translate(0,1.68,.1);re.setAttribute("boneIndices",new Zt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),re.setAttribute("boneWeights",new Zt(new Float32Array([1,0,1,0,1,0,1,0]),2)),re.setAttribute("tangent",new Zt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),re.setAttribute("ao",new Zt(new Float32Array([1,1,1,1]),1));const he=new bo;for(const Se in re.attributes)he.setAttribute(Se,re.attributes[Se]);re.index&&he.setIndex(re.index),he.instanceCount=1,he.setAttribute("instancePos",De),he.setAttribute("instanceOrient",Q),he.setAttribute("instanceAnimationFrameFromToBlend1",ne),he.setAttribute("instanceAnimationFrameFromToBlend2",ue);const ze=new At({uniforms:{...de,u_cardLedTexture:{value:q},u_cardTexture:{value:ie},u_cardColor:{value:new Ke("#ddddff")},u_cardUvOffset:{value:new Qe(0,0)},u_cardTextureSize:{value:Pe},u_cardOpacity:{value:0}},vertexShader:_l,fragmentShader:KM,transparent:!0,depthTest:!1,depthWrite:!1,side:Cn,blending:xa,blendEquation:On,blendSrc:mi,blendDst:mi,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi,defines:{BONE_COUNT:Zs}}),be=new Ft(he,ze);be.frustumCulled=!1,be.renderOrder=100,be.visible=!1,Z.add(be);const nt=new xi;R.add(nt);const xt=new ca;xt.positionAmplitude=2,xt.positionFrequency=1,xt._enableRotationNoise=!1;const zt=xt.position;let ct=0,Lt=1,Dn=typeof window<"u"?window.scrollY:0,Pi=1;const Jr=(Se,Ge)=>{const Fe=new bo;for(const lt in Se.attributes)Fe.setAttribute(lt,Se.attributes[lt]);Se.index&&Fe.setIndex(Se.index);const je=new Float32Array(pl);for(let lt=0;lt<pl;lt++)je[lt]=lt;Fe.setAttribute("a_instanceId",new En(je,1)),Fe.instanceCount=pl;const rt=new At({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:zt},u_time:{value:0}},vertexShader:YM,fragmentShader:$M,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:pl,...Ge?{IS_WALL:!0}:{}}}),_t=new Ft(Fe,rt);return _t.frustumCulled=!1,nt.add(_t),rt},kn=Jr(f,!1),Di=Jr(m,!0),Mr=await uw(R,{base:r,isMobile:n,sharedTime:de.u_time}),Qr=new At({uniforms:{u_color:{value:new Ke(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ri}),Jn=new Ft(new ci(200,200),Qr);Jn.position.z=-80,Jn.renderOrder=-10,R.add(Jn),S.colorSpace=Qt,S.generateMipmaps=!1,S.minFilter=vt,S.magFilter=vt;const eo={u_earthTexture:{value:S},u_bgColor:{value:new Ke(0)},u_atmosphereColor:{value:new Ke("#4169E1")}},wr=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,to=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,ji=new xi,Us=new At({uniforms:eo,vertexShader:wr,fragmentShader:to,depthWrite:!0,depthTest:!0}),xn=new Ft(M,Us);xn.frustumCulled=!1,xn.renderOrder=-1,ji.add(xn),R.add(ji);const Ln=new xi;R.add(Ln);const h=await $d(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);h.wrapS=h.wrapT=ms,b.colorSpace=Qt,b.flipY=!1,b.wrapS=b.wrapT=ms;const x={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:$e.texture},u_greebleArmbTexture:{value:h},u_greebleNormalTexture:{value:b},u_resolution:{value:new Qe(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new Y(0,70,0)},u_color1:{value:new Ke(Ks[0])},u_color2:{value:new Ke(Zc[0])}},E=(Se,Ge,Fe)=>{const je=new bo;for(const Et in Se.attributes)je.setAttribute(Et,Se.attributes[Et]);Se.index&&je.setIndex(Se.index);const rt=Se.attributes.position.count;je.getAttribute("ao")||je.setAttribute("ao",new Zt(new Float32Array(rt).fill(1),1)),je.getAttribute("areaRatio")||je.setAttribute("areaRatio",new Zt(new Float32Array(rt),1)),je.getAttribute("height")||je.setAttribute("height",new Zt(new Float32Array(rt).fill(1),1)),je.getAttribute("cluster")||je.setAttribute("cluster",new Zt(new Float32Array(rt),1)),je.setAttribute("instancePos",Kc(Ge.attributes.position)),je.setAttribute("instanceGridIds",Kc(Ge.attributes.gridIds)),je.setAttribute("instanceAxis",Kc(Ge.attributes.rotAxis)),je.instanceCount=Ge.attributes.position.count;const _t=new At({uniforms:x,vertexShader:XM,fragmentShader:qM,side:Cn,transparent:!1,depthWrite:!0,blending:Xr,defines:{GRID_SIZE:ml,...Fe?{IS_HD:!0}:{}}}),lt=new Ft(je,_t);return lt.frustumCulled=!1,lt.renderOrder=Fe?2:1,Ln.add(lt),lt};E(v,g,!1),o&&_&&p&&E(_,p,!0);let D=0,U=0,O=0,$=w,oe=0,J=-80,te=0;const K=new ca;K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0;const ae=new sh(new Y,1,.65,1.3),ve=new sh(new Y,1,.85,1.1),we=Array.from({length:ee},()=>{const Se=new ca;return Se.positionFrequency=.2,Se.rotationFrequency=.6,Se.positionAmplitude=12,Se.rotationAmplitude=10,Se}),Ue=Float32Array.from({length:ee+1},(Se,Ge)=>Ge===0?0:Math.random()*2),Ce=new Float32Array(ee),Te=new Float32Array(ee),ye=new Y,ht=new Bn,Je=new St,Ct=new St,ot=new Y,it=new Y,pt=new Bn,ut=new fi,Mt=new Y(1,1,1),ft=new Ke,at=new Ke,jt=new Y,yn=new Y;let Sn=0,no=0,ec=0,tc=0,Fo=.08;const kh=.1;let Ra=!1,Fs=0,Ca=0,Hh=0,Pa=0,Da=0,Vh=0,Gh=0;window.addEventListener("pointermove",Se=>{Sn=Se.clientX/Math.max(window.innerWidth,1)*2-1,no=Se.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ra=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ra=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ra=!1},{passive:!0});const nc=()=>{y.near=1,y.far=200,y.position.copy(A),y.up.set(0,1,0),y.lookAt(P),y.fov=$,jt.set(0,0,-1).applyQuaternion(y.quaternion);let Se=yn.copy(P).sub(y.position).dot(jt);const Ge=y.fov,Fe=Ge+O,je=Math.max(1,Math.min(170,Fe));let rt=Se*Math.tan(Ge/360*Math.PI/2)/Math.tan(je/360*Math.PI/2)-Se;Number.isFinite(rt)||(rt=0),y.translateZ(rt),y.fov=Ge,Se+=rt;const _t=Math.max(1,C.domElement.width||window.innerWidth),lt=Math.max(1,C.domElement.height||window.innerHeight);Math.abs(Pa)>.25||Math.abs(Da)>.25?y.setViewOffset(_t,lt,Pa,Da,_t,lt):y.clearViewOffset(),y.translateZ(Se*-1);const Et=n?Fo*.35:Fo,Wt=Math.max(-1,Math.min(1,no))*Et,un=Math.max(-1,Math.min(1,-Sn))*Et;ec+=(Wt-ec)*kh,tc+=(un-tc)*kh,ut.set(ec,tc,0),pt.setFromEuler(ut),y.quaternion.multiply(pt),y.translateZ(Se),y.updateProjectionMatrix()},t0=Se=>{K.update(Se),ae.update(Se,K.position),ot.copy(K.euler),ve.update(Se,ot),ut.set(ve.value.x,ve.value.y,ve.value.z),pt.setFromEuler(ut),Ct.compose(ae.value,pt,Mt),Je.compose(ye,ht,Mt),Je.multiply(Ct),Je.decompose(ot,pt,it);{const Ge=Math.max(1,C.domElement.width||window.innerWidth),Fe=Math.max(1,C.domElement.height||window.innerHeight),je=Math.max(.5,y.position.distanceTo(P)),rt=2*Math.tan((y.fov||45)*Math.PI/360)*je,_t=rt*(Ge/Fe),lt=.55;ot.x+=Vh/Ge*_t*lt,ot.y+=Gh/Fe*rt*lt}if(De.setXYZ(0,ot.x,ot.y,ot.z),Q.setXYZW(0,pt.x,pt.y,pt.z,pt.w),De.needsUpdate=!0,Q.needsUpdate=!0,rc=1+Math.min(3.5,ae.valueVel.length()*.2+ve.valueVel.length()*.2),xe>.01&&!Bt&&!Li){for(let Ge=0;Ge<ee;Ge++){const Fe=we[Ge];Fe.positionFrequency=.2,Fe.rotationFrequency=.6,Fe.positionAmplitude=12,Fe.rotationAmplitude=10,Fe.update(Se),Je.compose(ye,ht,Mt),Je.multiply(Fe.matrix),Je.decompose(ot,pt,it);const je=Ge/Math.max(ee-1,1),rt=fe(xe,je*.3,.7+je*.3,1,0,kM);it.set(De.getX(0),De.getY(0),De.getZ(0)),ot.lerp(it,rt),Re.setXYZ(Ge,ot.x,ot.y,ot.z),Me.setXYZW(Ge,pt.x,pt.y,pt.z,pt.w)}Re.needsUpdate=!0,Me.needsUpdate=!0}},qe=document.getElementById("home-goal-tunnel-sticky")||((nf=i.closest)==null?void 0:nf.call(i,"#home-goal-tunnel-sticky"))||((rf=e==null?void 0:e.querySelector)==null?void 0:rf.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,In=zh(e);let cn=0,Ns=0,No=0,Rt=0,Qn=0,ic=0,io=0,La=0,Ji=0,Gt=0,Wh=0,Li=!0,en=!1,Bt=!1,Oo=0,Qi=0,rc=1,oc=0,Xh=performance.now(),Os=!1,qh=!1;const rn=tw(C,R,y,{isMobile:n});let Ii=null,br=null;try{Ii=await dw(R,{base:r}),rn.setGlassPass(Ii)}catch(Se){console.warn("Broken glass failed to load",Se)}try{br=await _w({base:r}),rn.setFrameBgPass(br)}catch(Se){console.warn("FrameBg failed to load",Se)}let Yh=0,$h=0;const zo=()=>{var Wt;const Se=(Wt=qe==null?void 0:qe.querySelector)==null?void 0:Wt.call(qe,"[data-goal-screen-clip]"),Ge=qe==null?void 0:qe.classList.contains("is-windowed"),Fe=qe==null?void 0:qe.classList.contains("is-pinned"),je=Ge&&Se?Se:qe;let rt=(je==null?void 0:je.clientWidth)||window.innerWidth,_t=(je==null?void 0:je.clientHeight)||window.innerHeight;if((Fe||!Ge)&&n&&window.visualViewport&&(rt=Math.round(window.visualViewport.width)||rt,_t=Math.round(window.visualViewport.height)||_t),rt=Math.max(1,rt),_t=Math.max(1,_t),rt===Yh&&_t===$h)return;Yh=rt,$h=_t,y.aspect=rt/_t,nc(),C.setSize(rt,_t,!1),rn.resize(rt,_t),x.u_resolution.value.set(rt,_t);const lt=Math.max(1,Math.floor(rt*.25)),Et=Math.max(1,Math.floor(_t*.25));(ge.width!==lt||ge.height!==Et)&&(ge.setSize(lt,Et),ke.setSize(lt,Et),Ne.setSize(lt,Et))};zo(),window.addEventListener("resize",zo);const Zh=(Se,Ge,Fe=100)=>{const je=Se.attributes.position.array,rt=Se.attributes.orient.array,_t=Math.min(Math.floor(Ge),Fe-1),lt=Math.min(Math.ceil(Ge),Fe-1),Et=Ge-Math.floor(Ge),Wt=new Y().fromArray(je,_t*3).lerp(new Y().fromArray(je,lt*3),Et),un=new Bn().fromArray(rt,_t*4).slerp(new Bn().fromArray(rt,lt*4),Et);return{p:Wt,q:un}},Ia=()=>{var ro,er,Fi,ko,Na,of,sf;if(!e)return;const Se=window.innerHeight,Ge=window.scrollY||0;Ge!==Dn&&(Pi=Ge>Dn?1:-1,Dn=Ge),Qn=In.range("blackFrameIn").ratio;const Fe=In.range("blackFrameShow").ratio;No=In.range("blackTitle").ratio,Rt=In.range("blackTunnel").ratio,qe!=null&&qe.classList.contains("is-windowed")&&zo(),io=In.range("whiteTunnel").ratio,cn=In.between("whiteTunnel","whiteFrameOut").ratio,La=In.range("whiteFrameOut").ratio,ic=In.range("whiteFrameBreak").ratio,Wh=In.between("whiteTunnel","whiteFrameBreak").ratio,Gt=In.between("whiteFrameBreak","astronautDrop").ratio,Ji=((ro=In.range("astronautWait"))==null?void 0:ro.ratio)??0,Hh=In.between("whiteFrameBreak","astronautWait").ratio;{const Ht=In.range("astronautDrop"),Ni=window.innerHeight||1,Ho=Math.max(0,Ht.pixel||0),ks=Math.min(Math.max(1,Ht.pixelCount||Ho),Ni*(n?.32:.42)),Oi=Math.min(Ho,ks),zi=window.innerWidth||1,Er=((er=qe==null?void 0:qe.querySelector)==null?void 0:er.call(qe,"[data-goal-screen-clip]"))||qe||e.querySelector("#home-goal-image-out"),Vo=(Fi=Er==null?void 0:Er.getBoundingClientRect)==null?void 0:Fi.call(Er),ac=Vo?Vo.left+Vo.width*.5-zi*.5:0;Vh=fe(Gt,0,1,0,ac,Gl),Gh=-Oi*fe(Gt,.15,.85,0,1),Pa=0,Da=0}Li=No<1,en=Rt<1&&!Li,Bt=cn<=1&&!en&&!Li,Ns=Bt?Bi(0,.15,Wh):1,rn.sync({blackFrameInRatio:Qn,blackTitleRatio:No,blackTunnelRatio:Rt,whiteFrameRatio:io,whiteTunnelWaitRatio:Ji,astronautDropRatio:Gt,isWhiteTunnelActive:Bt,isBlackTunnelActive:en,isMobile:n});{const Ht=e.querySelector("#home-goal-image-out-inner"),Ni=e.querySelector("#home-goal-image-out"),Ho=e.querySelector("#home-goal-image-in"),ks=e.querySelector("#home-goal-image-in-inner"),Oi=Ni==null?void 0:Ni.getBoundingClientRect(),zi=Ht==null?void 0:Ht.getBoundingClientRect(),Er=Ho==null?void 0:Ho.getBoundingClientRect(),Vo=ks==null?void 0:ks.getBoundingClientRect(),ac=In.range("blackFrameShow").ratio,oo=window.innerWidth||1,Go=window.innerHeight||1;let so=Oi&&Oi.height>8?Oi.height:zi&&zi.height>8?zi.height:0;so<8&&(so=((zi==null?void 0:zi.width)||(Ht==null?void 0:Ht.clientWidth)||(qe==null?void 0:qe.clientWidth)||oo*.7)*(1537/2e3));const af=en||Li,o0=qe==null?void 0:qe.classList.contains("is-pinned"),s0=qe==null?void 0:qe.classList.contains("is-windowed"),lc=(ko=qe==null?void 0:qe.getBoundingClientRect)==null?void 0:ko.call(qe),Hs=(Na=qe==null?void 0:qe.querySelector)==null?void 0:Na.call(qe,"[data-goal-screen-clip]"),Oa=(of=Hs==null?void 0:Hs.getBoundingClientRect)==null?void 0:of.call(Hs),Ar=Tt=>!!Tt&&Tt.width>8&&Tt.height>8&&Tt.bottom>8&&Tt.top<Go-8&&Tt.right>8&&Tt.left<oo-8,lf=2e3/1537,cf=(Tt,ao)=>{const Vs=Math.max(8,ao),Ba=Vs*lf,ff=(Tt==null?void 0:Tt.width)||oo,df=(Tt==null?void 0:Tt.height)||Go,pf=(Tt==null?void 0:Tt.left)||0,mf=(Tt==null?void 0:Tt.top)||0;return{left:pf+(ff-Ba)*.5,top:mf+(df-Vs)*.5,width:Ba,height:Vs,right:pf+(ff-Ba)*.5+Ba,bottom:mf+(df-Vs)*.5+Vs}};let mn,za;if(af)mn=Ar(Er)?Er:Ar(Oa)?Oa:Ar(lc)?lc:null,za=Ar(Vo)?Vo:mn;else if(o0||s0){const Tt=Ar(Oa)?Oa:lc,ao=Ar(Oi)&&Oi.height>8?Oi.height:Math.min(((Tt==null?void 0:Tt.height)||Go)*.72,((Tt==null?void 0:Tt.width)||oo)*.92/lf);mn=cf(Tt,ao),za={left:mn.left+mn.width*.022,top:mn.top+mn.height*.028,width:mn.width*.957,height:mn.height*.702},so=mn.height}else mn=Ar(Oi)?Oi:cf({left:0,top:0,width:oo,height:Go},so),za=Ar(zi)?zi:mn;let uf=20;try{const Tt=getComputedStyle(document.documentElement),ao=parseFloat(Tt.getPropertyValue("--global-border-radius")||"");Number.isFinite(ao)&&ao>0&&(uf=ao)}catch{}const tr=br==null?void 0:br.updateFromScroll({isBlackSide:af,blackFrameInRatio:Qn,whiteFrameOutRatio:La,glassBreakRatio:Gt,astronautDropRatio:Gt,blackFrameShowRatio:ac,frameRect:mn,innerRect:za,viewportW:oo,viewportH:Go,globalRadius:uf});tr&&(Pa=tr.cameraViewportOffsetX||0,Da=tr.cameraViewportOffsetY||0);const hf=1-Yt(La,0,1),a0=Math.hypot(oo,Go),l0=Math.min((mn==null?void 0:mn.width)>8?mn.width:so*(2e3/1537),so),c0=(tr==null?void 0:tr.frameScale)??Dt.lerp(1,a0/Math.max(l0,1),hf),u0=(tr==null?void 0:tr.frameRotation)??hf*-.3;Ii&&Ii.updateFromScroll({glassBreakRatio:Gt,astronautDropRatio:Gt,frameHeight:so,frameRotation:u0,frameScale:c0})}de.u_whiteTunnelRatio.value=cn,de.u_showRatio.value=Ns,de.u_frameOutRatio.value=ic,kn.uniforms.u_ratio.value=cn,Di.uniforms.u_ratio.value=cn,kn.uniforms.u_ratioInverse.value=1-cn,Di.uniforms.u_ratioInverse.value=1-cn,de.u_ambientColor.value.set(Bt&&Gt<1?"#6a7f94":"#566d80");const je=new Ke("#ffffff");en||Li?je.set("#000000"):Bt&&je.set(Gt<1?"#ffffff":"#000000"),Qr.uniforms.u_color.value.copy(je),R.background=null,C.setClearColor(je,rn.clearAlpha),de.u_bgColor.value.copy(je),qe&&!qe.classList.contains("is-windowed")&&(qe.style.background=Gt>=1&&!n?"transparent":je.getStyle());const rt=qe==null?void 0:qe.classList.contains("is-windowed");!(qe==null?void 0:qe.classList.contains("is-pinned"))||rt?(document.documentElement.style.background="",document.body.style.background=""):Bt&&Gt>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):Bt?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):en||Li?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),nt.visible=Bt&&Gt<1,Ln.visible=en,Jn.visible=!(Bt&&Gt<1),eo.u_bgColor.value.copy(je);const lt=Dt.clamp(Fe,0,1),Et=Dt.clamp(Qn,0,1);xn.position.y=-(10*(1-lt)+2.5+30*Et),xn.scale.setScalar(fe(Et,0,.5,40,70)),ji.rotation.x=fe(Et,0,.5,0,-1),xn.visible=Et<1&&!Bt&&!en;const Wt=document.getElementById("header");Wt&&((qe==null?void 0:qe.classList.contains("is-pinned"))?Bt||Ji>0?Wt.style.color="#000000":Wt.style.color="#ffffff":Wt.style.color="");const un=e.dataset.goalPhase==="black-tunnel",Hn=e.dataset.goalPhase==="white";(en&&!un||Bt&&!Hn)&&rn.markEfxSync();const hn=Bt;for(const Ht of j){const Ni=hn?Ht.userData.whiteMat:Ht.userData.blackMat;Ht.material!==Ni&&(Ht.material=Ni)}xe=en?Bi(.2,.4,Rt):0,Ae.value=xe;for(const Ht of me)Ht.visible=!Bt&&xe>.01;let pn;if(Bt){const Ht=cn<1?fe(cn,0,1,0,79):fe(Gt,0,1,79,99);pn=Zh(l,Ht,100),pn.p.y-=(n?0:.4)*WM(Gt)}else pn=Zh(a,100*oh(Qn),100);if(ye.copy(pn.p),ht.copy(pn.q),K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0,en){const Ht=Rt;K.positionFrequency=.2+.5*Ht,K.rotationFrequency=.15,K.positionAmplitude=5*Ht,K.rotationAmplitude=60*Ht}else Bt&&(K.positionFrequency=fe(io,0,.45,.5,.2),K.rotationFrequency=fe(io,0,.45,.4,.15),K.positionAmplitude=fe(io,0,.75,5,0),K.rotationAmplitude=fe(io,0,.75,15,0));Z.visible=Ns>.02;const on=window.innerHeight||1,yi=(sf=qe==null?void 0:qe.querySelector)==null?void 0:sf.call(qe,"[data-goal-screen-clip]"),Bo=Math.max(1,Ji>.001||Gt>=1?on:rt&&(yi==null?void 0:yi.clientHeight)||(qe==null?void 0:qe.clientHeight)||on),Tr=Qn<1?Qn:Ji>.001||Gt>=1?1:1-io,zs=Dt.lerp(Bo,on,Tr),Bs=A.distanceTo(P),Ua=w/180*Math.PI,Fa=Math.tan(Ua/2)*Bs*2*(on/Math.max(zs,1));if($=Math.atan(Fa/2/Bs)*2/Math.PI*180,n&&y.aspect>0&&y.aspect<.85){const Ni=2*Math.atan(Math.tan(52*Math.PI/360)/y.aspect)*180/Math.PI;$=Math.max($,Math.min(Ni,82))}Bt?O=fe(cn,0,1,60,0):en?(O=Math.sin(Rt*10+ct)*(n?4.5:7.5)*Bi(0,.2,Rt),Ln.position.z=-80*Mo(.2,0,Rt)):(O=0,Ln.position.z=-80),Fo=.08*Bi(.5,1,No)+.02,cn>0&&(Fo*=fe(In.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Fo=fe(Ji,0,.1,Fo,.05),Ca=(1-Fs)*Pi*1.15*fe(Qn,.85,1,0,1)*fe(Ji,0,.25,1,0),nc(),I.u_frameIn.value=Qn,I.u_sunFactor.value=en?1-Bi(.1,.2,Rt):1,I.u_blackTunnelRatio.value=en?Bi(.1,.3,Rt):0,I.u_endRatio.value=en?Bi(.65,.9,Rt):0,I.u_offsetZ.value=x.u_offsetZ.value;const kt=fe(Gt,1,0,.15,.55)*(ic>0?1:0);de.u_tintColor.value.setStyle("#2533c2").multiplyScalar(kt);const Ui=qe.getBoundingClientRect();Os=Ui.bottom>0&&Ui.top<Se,Os&&!qh&&Li&&(Oo=0,Qi=0),qh=Os,e.dataset.goalPhase=Bt?"white":en?"black-tunnel":Qn<.98||qe!=null&&qe.classList.contains("is-windowed")?"window":"title"},n0=Se=>{if(!en){x.u_showRatio.value=0,rn.setEfxOffset(0,0);return}x.u_showRatio.value=OM(Mo(0,.1,Rt));const Ge=x.u_outBloomFromToStrength.value;Ge.z=fe(Rt,.65,.75,0,.2),Ge.z=fe(Rt,.75,.85,Ge.z,.15),Ge.z=fe(Rt,.85,1,Ge.z,.15),Ge.x=fe(Rt,.75,.85,20,60),Ge.x=fe(Rt,.9,1,Ge.x,30);const Fe=fe(Rt,.6,1,0,1,BM);x.u_blackTunnelTransformRatio.value=Fe;const je=Pi*Se;D+=je*Mo(.1,.3,Rt)*fe(Fe,0,.25,1,.5),U+=je*fe(Fe,0,.25,1.5,1);const rt=D,_t=Math.floor(rt),lt=rt-_t,Et=(_t+Gl(lt))*ml+U*ml+Rt*ml*10,Wt=-80*Mo(.2,0,Rt);let un=Wt-J,Hn=Et-oe;(Math.abs(Hn)>8||Math.abs(un)>20)&&(Hn=0,un=0),te=un+Hn,J=Wt,oe=Et,Ln.position.z=Wt,x.u_offsetZ.value=Et,I.u_offsetZ.value=Et,x.u_time.value=ct;const hn=Ks.length*fe(Rt,.2,1,0,1),pn=Math.floor(hn),on=Math.min(Math.ceil(hn),Ks.length-1),Bo=hn-pn>.5?1:0;ft.set(Ks[pn]),at.set(Ks[on]),ft.lerp(at,Bo),x.u_color1.value.copy(ft),ft.set(Zc[pn]),at.set(Zc[on]),ft.lerp(at,Bo),x.u_color2.value.copy(ft);const Tr=n?.45:1;rn.setEfxOffset(te*fe(Rt,0,.2,0,1)*Tr,te*Fe*.01*Tr),rn.setEfxAmount(fe(Rt,0,.25,.35,.85)*(n?.35:1)),O=Math.sin(Rt*10+ct)*(n?4.5:7.5)*Bi(0,.2,Rt)};let sc=0;const i0=Se=>{if(!Bt){Mr.update({whiteTunnelWaitRatio:0,aspect:y.aspect}),sc=cn;return}xt.update(Se),kn.uniforms.u_time.value=ct,Di.uniforms.u_time.value=ct,kn.uniforms.u_fbm.value=zt,Di.uniforms.u_fbm.value=zt;let Ge=cn-sc;Math.abs(Ge)>.08&&(Ge=0);const Fe=n?0:.7,je=Dt.clamp(-Ge*fe(cn,0,.9,500,0,rh)*Fe,-1,1),rt=Dt.clamp(-Ge*fe(cn,0,.8,45,0,rh)*Fe,-1,1);rn.setEfxOffset(je,rt),rn.setEfxAmount(n?0:fe(cn,.75,1,1,0)),sc=cn;const _t=Bt&&Gt>=1?"#000000":Bt?"#ffffff":"#000000",lt=n?Math.max(y.aspect,.95):Math.max(y.aspect,.01);Mr.update({whiteTunnelWaitRatio:Gt>=1?Ji:0,aspect:lt,bg:_t})},Kh=()=>Ia();window.addEventListener("scroll",Kh,{passive:!0}),Ia();const jh=Se=>{var Fa;const Ge=Math.min(.05,Math.max(0,Se||.016666666666666666));if(Xh=performance.now(),!Os){if(qe){const kt=qe.getBoundingClientRect();kt.bottom>0&&kt.top<window.innerHeight&&rn.render()}return}Fs+=((Ra?1:0)-Fs)*.1,Lt=fe(Fs,0,1,1,.3)*Ge,Lt=fe(Qn,0,1,Ge,Lt),Lt=fe(Hh,.5,.75,Lt,Ge),ct+=Lt,de.u_time.value=ct,Ca=(1-Fs)*Pi*1.15*fe(Qn,.85,1,0,1)*fe(Ji,0,.25,1,0),n0(Lt),i0(Lt),t0(Lt),en&&(O=Math.sin(Rt*10+ct)*(n?4.5:7.5)*Bi(0,.2,Rt)),nc();const Fe=Gt,je=fe(Fe,0,.1,0,1)*fe(Fe,.9,1,1,0);de.u_loopLinearBlend.value=je;const rt=fe(Fe,.9,1,0,1,oh);He=rt>0;let _t,lt,Et,Wt=!0;if(Fe<.5)Qi=0,_t=Bi(-.3,1,No)*.75,lt=0,Et=89,ze.uniforms.u_cardOpacity.value=0;else{_t=fe(Fe,.85,1,0,1),lt=140,Et=Math.min(287,Math.max(140,B-1));const kt=Math.min(2,Math.max(0,.5+Math.max(0,le.getFbm(ct*8,3)+.5)*4));ze.uniforms.u_cardOpacity.value=kt*rt,Fe<1?(Qi=Math.max(0,Qi),Wt=!1):(Wt=!0,Qi===Number.POSITIVE_INFINITY&&(Oo=0),Qi=0)}Qi===0&&(Oo+=Lt*_t*rc),je===1&&(Oo=0);const un=Math.max(1,Et-lt+1),Hn=Ue[0];let pn=(Hn+Oo)*60;pn=(pn%un+un)%un;let on=Math.floor(pn),yi=(on+1)%un+lt;on+=lt,yi<on&&!Wt&&(yi=on=lt,Oo=-Hn,Qi=Number.POSITIVE_INFINITY);const Bo=pn-Math.floor(pn);ne.setXYZ(0,on,yi,Bo),ne.needsUpdate=!0;const Tr=fe(La+Fe,.9,2,90,139,GM),zs=Math.floor(Tr),Bs=Math.ceil(Tr),Ua=Tr-zs;ue.setXYZ(0,zs,Bs,Ua),ue.needsUpdate=!0,be.visible=Fe>=.95&&Ns>.02,Oe=He?Oe+Lt:0;{const kt=Pe.x,Ui=Pe.y,ro=Math.floor(10*Oe%(kt*(Ui+1))),er=ro/(kt*(Ui+1)),Fi=Mo(0,.15,er)*Mo(1,.9,er);de.u_faceLedLight.value=Fi,ze.uniforms.u_cardUvOffset.value.set(ro%kt/kt,(Ui-Math.floor(ro/kt))/Ui)}if(de.u_cardPosition.value.set(De.getX(0),De.getY(0)+.9,De.getZ(0)),xe>.01&&!Bt&&!Li){for(let kt=0;kt<ee;kt++){Ce[kt]=(Ce[kt]+.2*Lt)%1,Qi===0&&(Te[kt]+=Lt*_t*rc);const er=(Dt.lerp(0,Ue[kt+1],xe)+Te[kt])*60%un;let Fi=Math.floor(er),ko=(Fi+1)%un+lt;Fi+=lt,ko<Fi&&!Wt&&(ko=Fi=lt);const Na=er-Math.floor(er);_e.setXYZ(kt,Fi,ko,Na),Ie.setXYZ(kt,zs,Bs,Ua)}_e.needsUpdate=!0,Ie.needsUpdate=!0}if((Fa=rn.setScrollVelocity)==null||Fa.call(rn,Math.abs(Ca)+Math.abs(Pi)*.5),en){const kt=x.u_resolution.value.clone();nt.visible=!1,Jn.visible=!1,Z.visible=Ns>.02,x.u_feedbackTexture.value=$e.texture,x.u_resolution.value.set(Be.width,Be.height),C.setRenderTarget(Be),C.setClearColor(0,0),C.clear(),C.render(R,y),st(Be,n?10:16),st(Be,n?3:4),C.setRenderTarget(null),x.u_resolution.value.copy(kt);const Ui=$e;$e=Be,Be=Ui,x.u_feedbackTexture.value=$e.texture,I.u_blackTunnelTexture.value=$e.texture,Jn.visible=!0}C.setClearColor(de.u_bgColor.value,rn.clearAlpha),rn.render()},Jh=Se=>{oc=requestAnimationFrame(Jh);const Ge=Math.min(.05,(Se-Xh)/1e3);Se-Qh>50&&jh(Ge)};let Qh=0;const r0=Se=>{Qh=performance.now(),jh(Se)};return oc=requestAnimationFrame(Jh),requestAnimationFrame(()=>{zo(),Ia(),rn.render()}),{resize:zo,updateScroll:Ia,tickFrame:r0,getAutoScrollSpeed:()=>Ca,getGlassRatio:()=>(Ii==null?void 0:Ii.ratio)??0,getAstronautDropRatio:()=>Gt,getWhiteTunnelRatio:()=>cn,getBlackFrameInRatio:()=>Qn,getBlackTunnelRatio:()=>Rt,getBlackTitleRatio:()=>No,isGoalAudioActive:()=>!!(qe&&(qe.classList.contains("is-pinned")||qe.classList.contains("is-windowed")||Os&&(Li||en||Bt))),destroy(){cancelAnimationFrame(oc),window.removeEventListener("resize",zo),window.removeEventListener("scroll",Kh),Ii==null||Ii.dispose(),br==null||br.dispose(),ge.dispose(),ke.dispose(),Ne.dispose(),Ye.dispose(),rn.destroy(),C.dispose()}}}function vw(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=zh(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(R=>{R._offsetX=0});return}b.forEach(R=>{R.style.transform="translateZ(0)"});let M=g;b.forEach(R=>{const A=R.getBoundingClientRect();R._domRect=A,M-=A.width});let S=0;const L=M/(b.length-1);b.forEach(R=>{R._offsetX=-R._domRect.left+_+S,S+=R._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.height="0px",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=fe(_,0,.25,0,1);r.progress();const M=window.visualViewport,S=Math.round((M==null?void 0:M.height)||window.innerHeight),L=Math.round((M==null?void 0:M.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const N=i.getBoundingClientRect(),F=window.scrollY||0,z=Math.round((M==null?void 0:M.offsetLeft)||0),B=Math.round((M==null?void 0:M.width)||window.innerWidth),V=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+F,k=r.range("blackFrameIn").ratio,se=t.dataset.goalOwned==="full"||k>=.999,pe=N.bottom>0&&(se||F>=V-1),Ee=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",pe),u&&(u.style.height="0px"),pe&&!Ee?t.parentElement!==document.body&&document.body.appendChild(t):!pe&&Ee&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),delete t.dataset.goalOwned,t.style.position="",t.style.top="",t.style.left="",t.style.width="",t.style.height="",t.style.right="",t.style.bottom="",t.style.zIndex="",t.style.background=""),pe&&(t.style.position="fixed",t.style.top=`${L}px`,t.style.left=`${z}px`,t.style.width=`${B}px`,t.style.height=`${S}px`,t.style.right="auto",t.style.bottom="auto",t.style.zIndex="4",t.style.background=b>.05||_>.01?"#ffffff":"#000000")}let R=fe(v,a,l,0,1);const A=R>0&&R<1;let P=fe(R,.5,1,1,o()?9:12,oh);P*=fe(R,0,.15,.85,1,VM);let w=fe(R,.9,1,1,0);w*=fe(R,0,.05,0,1),w*=fe(g,0,.12,1,0);const y=fe(R,.4,.6,0,1,Gl);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(w),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=A&&w>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(N=>{const F=N._offsetX||0;N.style.transform=`translateX(${y*F}px)`}),s){const N=fe(g,.02,.15,1,0);s.style.opacity=String(N),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const C=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":C<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function gl(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function xw(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function vo(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function yw(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=vo(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=vo(document.getElementById("home-reel-desc"),2),l=vo(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}),v.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)",G.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(G=>{G.style.overflow="hidden",G.style.display="block",G.style.position="relative"}),f=[...gl(r,"word"),...gl(o,"word")],f.forEach(G=>{G.style.position="relative",G.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=gl(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),M=vo(document.getElementById("home-featured-title"),2),S=vo(document.getElementById("home-featured-disclaimer"),2),L=vo(document.getElementById("home-featured-cta"),1);let R=[],A=[],P=!0;const w=()=>{P=!1,M&&(M._time=0,M._animating=!1),S&&(S._time=0,S._animating=!1),L&&(L._time=0,L._animating=!1),i()||(A.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}),R.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(M){if(M.style.overflow="hidden",R=xw(M),S){const G=S.textContent.trim();S.textContent="";const pe=document.createElement("div");pe.className="line",pe.textContent=G,pe.style.transform="translate3d(0, 100%, 0)",pe.style.willChange="transform";const Ee=document.createElement("div");Ee.style.position="relative",Ee.style.overflow="hidden",Ee.appendChild(pe),S.appendChild(Ee),A=[pe]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),w()}})();const C=vo(document.getElementById("home-goal-title"),2);let N=[];C&&(C.style.overflow="hidden",N=gl(C,"word"),N.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)",G.style.opacity="0"}));let F=0,z=!1,B=0;const H=G=>{if(!t||!e)return;if(!Tn(e).isActive){g=!0;return}g&&(g=!1,_());const Ee=Tn(t),De=Tn(s||a),ne=window.innerHeight*.1;if(t._time=Yt(t._time+(t._animating?G:-G),0,2),a&&(a._time=Yt(a._time+(a._animating?G:-G),0,2)),l&&(l._ratio=ri(l._ratio+(l._animating?G:-G))),Ee.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ue=>{ue.style.transform="translate3d(0, 0, 0)"}):f.forEach((ue,ce)=>{let ge,ke;ce<2?(ge=fe(t._time-Math.abs(2-ce)/10,.5,1.2,-m,0,gt),ke=fe(t._time-ce/10,0,1,100,0,gt)):(ge=0,ke=fe(t._time-ce/10,0,1,-100,0,gt)),ue.style.transform=`translate3d(${ge}px, ${ke}%, 0)`}),n)){const ue=Ee.showScreenOffset*-ne*.5;n.style.transform=`translate3d(0, ${ue}px, 0)`}if(De.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ue=De.showScreenOffset*-ne*1.5;if(a&&(a.style.transform=`translate3d(0, ${ue}px, 0)`,i()?v.forEach(ce=>{ce.style.opacity="1",ce.style.transform="translate3d(0, 0, 0)"}):v.forEach((ce,ge)=>{const ke=fe(a._time-ge/100,0,1,.1,1,Vl),Ne=fe(a._time-ge/100,0,1,100,0,Vl);ce.style.opacity=String(ke),ce.style.transform=`translate3d(0, ${Ne}%, 0)`})),l){const ce=De.showScreenOffset*-ne*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ce}px) translate3d(0, ${fe(l._ratio,0,1,150,0,gt)}%, 0) rotate(${fe(l._ratio,0,1,10,0,gt)}deg)`,l.style.opacity=String(gt(l._ratio))):(l.style.transform=`translateY(${ce}px)`,l.style.opacity="1")}}if(c){const ue=Tn(c),ce=ri(fe(ue.showScreenOffset,.05,.85,0,1,gt));c.style.opacity=String(ce),c.style.transform=`translate3d(0, ${fe(ce,0,1,80,0,gt)}px, 0) scale(${fe(ce,0,1,.96,1,gt)})`}if(u){const ue=Tn(u);B=ri(fe(ue.showScreenOffset,0,.7,0,1,gt)),u.style.opacity=String(.4+B*.6),u.style.transform=`translate3d(0, ${fe(B,0,1,60,0,gt)}px, 0) scale(${fe(B,0,1,.94,1,gt)})`,z=B>.9,F=Yt(F+(z?G:-G*2),0,1.4),d.forEach((ce,ge)=>{const ke=fe(F-ge/10,0,.6,0,1,gt),Ne=fe(F-ge/10,0,.6,0,180,gt);ce.style.transform=`scale(${ke}) rotate(${Ne}deg)`,ce.style.display="inline-block"})}},V=G=>{if(!b||!M)return;if(Tn(b).isActive){P&&w();const Ee=Tn(M),De=Tn(S),Q=Tn(L);M._time=Yt(M._time+(M._animating?G:-G),0,2),S&&(S._time=Yt(S._time+(S._animating?G:-G),0,2)),L&&(L._time=Yt(L._time+(L._animating?G:-G),0,1)),Ee.screenRatio>-1&&(M._animating=!0,i()?R.forEach(ne=>{ne.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):R.forEach((ne,ue)=>{const ce=fe(M._time*1.5-ue/20,0,1,1,0,gt),ge=fe(M._time*1.5-ue/20,0,1,10,0,gt);ne.style.transform=`translate3d(0, ${ce}em, 0) rotate(${ge}deg)`})),De.screenRatio>-1&&S&&(S._animating=!0,i()?A.forEach(ne=>{ne.style.transform="translate3d(0, 0, 0)"}):A.forEach((ne,ue)=>{const ce=fe(S._time-ue/20,0,1,100,0,gt);ne.style.transform=`translate3d(0, ${ce}%, 0)`})),Q.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${fe(L._time,0,1,150,0,gt)}%, 0) rotate(${fe(L._time,0,1,10,0,gt)}deg)`,L.style.opacity=String(gt(L._time))))}else P=!0},k=G=>{if(!C)return;Tn(C).screenRatio>-1&&(C._animating=!0),C._time=Yt(C._time+(C._animating?G:-G),0,2),N.forEach((Ee,De)=>{const Q=fe(C._time-De/20,0,1,0,1,gt),ne=fe(C._time-De/20,0,1,100,0,gt);Ee.style.opacity=String(Q),Ee.style.transform=`translate3d(0, ${ne}%, 0)`})},se=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",se),{update(G){H(G),V(G),k(G)},destroy(){window.removeEventListener("resize",se)}}}const Kd=28,Sw=4,Mw=8;function jd(){return window.innerWidth<812}function ww(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,w;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(y=>{const C=document.createElement("div");if(C.className="project-item-line-2-inner-list",C.style.transform="translateY(-400%)",y===" ")C.style.width="0.3em";else for(let N=0;N<4;N++){const F=document.createElement("span");F.textContent=y,C.appendChild(F)}a.appendChild(C),d.push(C)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,M=!1,S=0,L=0,R=0,A=0;return jd()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(y){const C=Tn(t),N=C.ratio>-1&&C.ratio<1;N&&(M=!0),M&&(_+=y);const F=ri(fe(_,0,.85,0,1,gt)),z=fe(F,0,1,90,0,gt);if(t.style.opacity=String(F),t.style.transform=`translate3d(0, ${z}px, 0)`,s&&N){p+=y;const B=Math.min(c.length,Math.floor(Kd*p)-Sw),H=Math.min(c.length,Math.floor(Kd*p));let V="";for(let k=0;k<Math.max(0,B);k++)V+=c[k];for(let k=0;k<H-Math.max(0,B);k++)V+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=V}if(N&&(b+=y*.8),g=ri(g+(m?1:-1)*y*2.5),jd())d.forEach((B,H)=>{const V=ri(g-Math.abs(H-d.length-1)/100),k=fe(V,0,1,0,1.5,gt);B.style.transform=`translate3d(1.5em, 0, 0) translateX(${k}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((B,H)=>{const V=fe(H,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),k=ri(b-Math.cos(V)/Mw),se=fe(k,0,1,500,0,zM),G=ri(g-Math.abs(H-d.length-1)/100),pe=fe(G,0,1,0,1.5,gt);B.style.transform=`translate3d(${pe}em, -${se}%, 0)`}),l){const B=fe(g,.3,1,0,1,gt);l.style.transform=`translateX(${B}em)`}if(v=Yt(v+(f?1:-1)*y,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(R=(Math.random()-.5)*fe(v,0,.6,1,0)*8,A=(Math.random()-.5)*fe(v,0,.6,1,0)*8):(R*=.92,A*=.92),S+=(R-S)*.2,L+=(A-L)*.2;const B=fe(v,0,1,1,1.06,gt);o.style.transform=`translate3d(${S}px, ${L}px, 0) scale(${B})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Jd=12,Qd=6,bw=1.35,Tw=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ew=`
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
  float stepDist = dist / float(${Jd});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Jd}; i++) {
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
  float numSampleInv = 1.0 / float(${Qd});
  for (int i = 0; i < ${Qd}; i++) {
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
`;function Aw(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function Rw(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){},beginOpen(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new Ql({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(F){return n.remove(),console.warn("Featured WebGL unavailable",F),{update(){},resize(){},destroy(){},beginOpen(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Nn;const o=new Kr,s=new jl(0,1,1,0,-1e3,1e3);s.position.z=10;const a={x:0,y:0},l=F=>{a.x=F.clientX,a.y=F.clientY};window.addEventListener("pointermove",l,{passive:!0});const c=new ci(1,1),u=new Vi,d="/zyrax-studio/assets/projects/",f=[],m=Array.from(t.querySelectorAll(".project-item"));let v=null,g=null,_=0,p=!1,b=!1,M=0;const S=new Map;await Promise.all(m.map(async(F,z)=>{var We,Xe,st;const B=F.dataset.id||((We=i[z])==null?void 0:We.id),H=i.find(de=>de.id===B)||i[z]||{},V=F.querySelector(".project-item-main"),k=F.querySelector(".project-item-image img");k&&(k.style.opacity="0",k.setAttribute("aria-hidden","true"));const se=new Ke(F.dataset.colorBg||"#111111");let G,pe;try{[G,pe]=await Promise.all([u.loadAsync(`${d}${B}/home.webp`),u.loadAsync(`${d}${B}/home_depth.webp`)])}catch(de){console.warn("Featured cover failed for",B,de),k&&(k.style.opacity="1");return}G.colorSpace=Nn,G.wrapS=G.wrapT=zn,G.minFilter=vt,G.magFilter=vt,G.generateMipmaps=!1,pe.colorSpace=Qt,pe.wrapS=pe.wrapT=zn,pe.minFilter=vt,pe.magFilter=vt,pe.generateMipmaps=!1;const Ee=new Qe(((Xe=G.image)==null?void 0:Xe.width)||1280,((st=G.image)==null?void 0:st.height)||832),De=new Y(0,0,-1),Q=new sh(new Y,1,.6,2),ne=Aw(1,2.2,.7,3);ne.target=0;const ue=new Qe,ce=new Qe,ge={u_texture:{value:G},u_depthTexture:{value:pe},u_colorBg:{value:se},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:Ee},u_domWH:{value:new Qe(1,1)},u_shiftXY:{value:ue},u_focusPos:{value:De},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new Qe(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ke=new At({uniforms:ge,vertexShader:Tw,fragmentShader:Ew,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ne=new Ft(c,ke);Ne.frustumCulled=!1,Ne.renderOrder=10+z,Ne.visible=!1,o.add(Ne);let $e=!1,Be=0,et=0,W=0;const Ye=[0,.2,.3],Le=de=>{for(let I=0;I<Ye.length;I++)if(de<Ye[I])return I;return Ye.length};window.innerWidth>=812&&(V==null||V.addEventListener("mouseenter",()=>{p||($e=!0)}),V==null||V.addEventListener("mouseleave",()=>{$e=!1})),F.addEventListener("click",de=>{if(de.metaKey||de.ctrlKey||de.shiftKey||de.altKey||de.button!==0)return;if(p){de.preventDefault();return}const I=H.url||F.getAttribute("href");I&&(de.preventDefault(),C(B,I))}),f.push({id:B,mesh:Ne,uniforms:ge,colorMap:G,depthMap:pe,focusDyn:Q,focusPos:De,zoomDyn:ne,shiftXY:ue,shiftXYTarget:ce,index:z,main:V,dom:F,get isHover(){return $e},set isHover(de){$e=de},update(de,I,T,X,Z,j,ee){const Re=ee&&ee===B,Me=Tn(F);if(!(Me.ratio>-1&&Me.ratio<1)&&!p||!V){et=0,Ne.visible=!1,ge.u_showRatio.value=0;return}et+=de;const Ie=V.getBoundingClientRect();let me=Math.max(1,Ie.width),xe=Math.max(1,Ie.height),Ae=Ie.left+me*.5,Pe=T-(Ie.top+xe*.5);p&&!S.has(B)&&S.set(B,{cx:Ae,cy:Pe,w:me,h:xe});const le=S.get(B)||{cx:Ae,cy:Pe,w:me,h:xe};if(p&&j>0&&ee){const be=S.get(ee);if(be){const nt=Math.max(I/be.w,T/be.h)*1.2,xt=Dt.lerp(1,nt,j),zt=Dt.lerp(0,I*.5-be.cx,j),ct=Dt.lerp(0,T*.5-be.cy,j);Ae=(le.cx-be.cx)*xt+be.cx+zt,Pe=(le.cy-be.cy)*xt+be.cy+ct,me=le.w*xt,xe=le.h*xt,Ne.rotation.y=j*.3*((be.cx-I*.5)/I),Ne.rotation.z=-j*.3*((be.cx-I*.5)/I)}}else Ne.rotation.y=0,Ne.rotation.z=0;ge.u_domWH.value.set(le.w,le.h),ge.u_resolution.value.set(I,T),ge.u_time.value=X,ge.u_rippleStrength.value=p?Math.min(.2,j*.12):Math.min(.15,Z*.5),ge.u_globalRadius.value=p?Math.min(le.w,le.h)*Dt.lerp(.04,0,j):Math.min(le.w,le.h)*.04;const Oe=fe(et,0,2,0,1,Vl),He=z%2-.5,tt=p?0:(1-Oe)*He*-I*.1,q=p?Ne.rotation.z:(1-Oe)*He*.1;Ne.position.set(Ae+tt,Pe,Re?2:0),Ne.scale.set(me,xe,1),p||(Ne.rotation.z=-q);const ie=fe(et,0,1.5,0,1,Vl);ge.u_showRatio.value=p?Math.max(ie,1):ie,Ne.visible=ge.u_showRatio.value>.01,Ne.renderOrder=Re?100:10+z;const re=Be;if(Be=Yt(Be+($e&&!p?1:-1)*de,0,1),re<Be){const be=Le(re),nt=Le(Be);nt!==be&&ce.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(fe(Be,0,.6,1,0)),nt===Ye.length&&ce.multiplyScalar(.5)}else ce.multiplyScalar(.95);ue.lerp(ce,.2);const he=Q.target;if($e&&!p||(Re?j:0)>.01){if($e&&!p){const be=Be>0?fe(Be,0,.3,1,0)*xe*.75:0;he.x=(a.x-Ie.left-Ie.width*.5+Math.cos(X*20)*be)/Ie.width*-Ie.height,he.y=(a.y-Ie.top-Ie.height*.5-Math.sin(X*30)*be)/Ie.height*Ie.height}else he.x=0,he.y=0;he.z=.5}else he.x=0,he.y=0,he.z=-1;Q.update(de),De.copy(Q.value),ne.target=$e||Re?1:0,ne.update(de),ge.u_zoomRatio.value=ne.value,W=Yt(W+($e||Re?.75:-1)*de,0,1),ge.u_dofRangeOffset.value=Dt.lerp(0,-.5,W),ge.u_saturation.value=0,ge.u_brightness.value=0,p?Re?ge.u_activeRatio.value=j*j:(ge.u_activeRatio.value=Math.min(1,j*1.2),ge.u_showRatio.value=Math.max(0,1-j*1.4)):ge.u_activeRatio.value=0}})}));let L=1,R=1,A=0,P=window.scrollY,w=0;function y(F){var B;const z=window.lenis;document.documentElement.classList.add("featured-opening"),(B=z==null?void 0:z.stop)==null||B.call(z)}function C(F,z){if(!p){v=F,g=z,p=!0,b=!1,_=0,M=0,S.clear(),y();for(const B of f){if(!B.main)continue;const H=B.main.getBoundingClientRect();S.set(B.id,{cx:H.left+H.width*.5,cy:R-(H.top+H.height*.5),w:Math.max(1,H.width),h:Math.max(1,H.height)}),B.isHover=!1}}}const N=()=>{L=window.innerWidth,R=window.innerHeight,r.setSize(L,R,!1),s.left=0,s.right=L,s.top=R,s.bottom=0,s.updateProjectionMatrix()};return N(),window.addEventListener("resize",N),{beginOpen:C,update(F){if(A+=F,p&&(_=Math.min(1,_+F/bw),M=Gl(_),_>=1&&!b)){b=!0;const k=g;setTimeout(()=>{k&&window.location.assign(k)},120)}const z=window.scrollY,B=Math.abs(z-P)/Math.max(F,.001);P=z,w+=(Math.min(1,B*.002)-w)*.15;const V=Tn(e).isActive||p;if(n.style.visibility=V?"visible":"hidden",n.style.zIndex=p?"40":"",!!V){for(const k of f)k.update(F,L,R,A,w,M,v);r.render(o,s)}},resize:N,destroy(){window.removeEventListener("pointermove",l),window.removeEventListener("resize",N),document.documentElement.classList.remove("has-featured-webgl","featured-opening"),f.forEach(F=>{var z,B;(z=F.colorMap)==null||z.dispose(),(B=F.depthMap)==null||B.dispose(),F.mesh.material.dispose()}),c.dispose(),r.dispose(),n.remove()}}}function Cw(){return window.innerWidth<812}function Pw(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function Dw(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&Pw(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,M=0;const S=R=>{var P;if(!R)return;const A=(P=R.play)==null?void 0:P.call(R);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:R=>{var C;if(!i)return;const A=e?Tn(e):null,P=n?Tn(n):null,w=Cw(),y=w?!!(P!=null&&P.isActive):!!A&&A.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",y),y){const N=(A==null?void 0:A.top)??0,F=(A==null?void 0:A.height)??1,z=window.innerHeight,B=N-(z-F)*.5,H=((P==null?void 0:P.top)??0)-(z-((P==null?void 0:P.height)??z))*.5;if(M=ri(fe(window.scrollY+N,B,H,0,1)),M=ri(fe((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,gt)),r&&(S(r),r.style.opacity=String(.35+M*.65)),t&&(S(t),t.style.opacity=String(1-M*.85)),e){const V=fe(M,0,1,1,1.08,gt);e.style.transform=`scale(${V})`,e.style.opacity=String(fe(M,.7,1,1,.15,gt))}if(n){const V=fe(M,0,1,48,0,gt),k=fe(M,0,1,.94,1,gt);n.style.transform=`translate3d(0, ${V}px, 0) scale(${k})`,n.style.opacity=String(.25+M*.75)}M===1||M>.9?(m=!0,v=!0):(v=!1,m=!1),p=M>.85,b=M>.85}else(C=r==null?void 0:r.pause)==null||C.call(r),M=0,m=!1,v=!1,p=!1,b=!1;if(d=Yt(d+(m?R:-R),0,1e9),f=Math.min(M,ri(f+(v?R:-R))),u=d%l,o!=null&&o._splitted&&!w){const N=o._splitted.words;for(let F=0;F<N.length;F++){const z=N[F];c-u>l-1&&(z._randCharIndex=Math.round(Math.random()*(z._chars.length-1)));for(let B=0;B<z._chars.length;B++){const H=z._chars[B];let V=fe(f-F/4-B/20,0,.6,200,0,gt);B===z._randCharIndex&&(V+=fe(u-F/10,.5,1.3,0,-100,gt)),H._inner&&(H._inner.style.transform=`translate3d(0, ${V}%, 0)`)}}}c=u,g=Yt(g+(p?R:-R*2),0,1.4),_=Yt(_+(b?R:-R*2),0,1.4),s.forEach((N,F)=>{const z=fe(g-F/10,0,.6,0,1,gt),B=fe(g-F/10,0,.6,0,180,gt);N.style.transform=`scale(${z}) rotate(${B}deg)`}),a.forEach((N,F)=>{const z=fe(_-F/10,0,.6,0,1,gt),B=fe(_-F/10,0,.6,0,180,gt);N.style.transform=`scale(${z}) rotate(${B}deg)`})},destroy(){}}}const jc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new Y(-.0112049,-.0141946,0),boxMax:new Y(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new Y(-.0180006,-.00963629,0),boxMax:new Y(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Lw=`
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
`,Iw=`
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
`,Uw=`
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
`,Fw=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Nw(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function Ow(){const i=Nw(),e="/zyrax-studio/",t=await Promise.all(jc.map(A=>bn(`${e}assets/models/lines/${A.fileName}.buf`))),n=new Kr,r=new Gn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let s;try{s=new Ql({canvas:i,alpha:!0,antialias:!o,premultipliedAlpha:!1,powerPreference:o?"low-power":"default"})}catch(A){return console.error("Lines WebGL unavailable",A),{update(){},resize(){},destroy(){},setPaused(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new Y,c=new Y,u=new Ls,d=new Qe,f=new St,m=new St,v=new St,g=new St;let _=!1,p=!0;for(let A=0;A<jc.length;A++){const P=jc[A],w=t[A],y=document.querySelector(P.sectionSelector);if(!y||!w)continue;const C=new xi,N=new xi;C.add(N),n.add(C);const F=new At({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:P.aoThreshold},u_color0:{value:new Ke(P.color0)},u_color1:{value:new Ke(P.color1)},u_radius:{value:.008}},vertexShader:Lw,fragmentShader:Iw,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),z=new Ft(w,F);z.frustumCulled=!1,z.renderOrder=200,N.add(z);const B=new At({uniforms:{u_color0:{value:new Ke(P.color0)},u_color1:{value:new Ke(P.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:Uw,fragmentShader:Fw,side:Cn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),H=new Ft(new ci(2,2),B);H.frustumCulled=!1,H.renderOrder=200,N.add(H);const V=w.attributes.position.array,k=w.attributes.position.count,se=new Float32Array(k);for(let G=0;G<k;G++)se[G]=V[G*3+2];a.push({data:P,sectionEl:y,container:C,inner:N,mesh:z,mat:F,circle:H,circleMat:B,lineRatioArray:se,cpAttr:w.attributes.CP,cdAttr:w.attributes.Cd,count:k,offsetY:0,framePos:new Y,frameQuat:new Bn,frameScale:new Y(1,1,1)})}let b=1,M=1;const S=()=>{b=window.innerWidth||1,M=window.innerHeight||1;const A=Math.sqrt(b*b+M*M),P=M/A;d.set(b/M*P,P),r.fov=60,r.aspect=b/M,r.position.set(b/2,-M/2,M/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(b/2,-M/2,0),r.updateProjectionMatrix(),s.setSize(b,M,!1)};S(),window.addEventListener("resize",S);const L=A=>{var T;const{data:P,sectionEl:w,container:y,inner:C,mat:N,circle:F,circleMat:z,lineRatioArray:B,cpAttr:H,cdAttr:V,count:k}=A,G=Tn(w).top+A.offsetY,pe=M,Ee=P.scrollToRatioFactors;let De=ri(-(G-Ee[0]*pe)/(Ee[1]*pe));De=HM(De);const Q=b<=812,ne=.008*fe(b,540,1920,2,1)*(Q?.72:1),ue=b/d.x,ce=M/d.y;let ge=P.margin.x,ke=P.margin.y;Q&&P.id==="goal"&&(ge=.42,ke=-.35),C.position.x=ge*ue,C.position.y=ke*ce-G,C.scale.set(ue,ce,1),A._showSmooth==null&&(A._showSmooth=De),A._showSmooth+=(De-A._showSmooth)*(Q?.32:.18),A._targetA=De,N.uniforms.u_showRatio.value=A._showSmooth,N.uniforms.u_radius.value=ne;const Ne=(T=w.dataset)==null?void 0:T.goalPhase,$e=P.id==="goal"&&(Ne==="black-tunnel"||Ne==="white");if(y.position.copy(A.framePos),y.quaternion.copy(A.frameQuat),y.scale.copy(A.frameScale),y.updateMatrixWorld(!0),u.min.copy(P.boxMin),u.max.copy(P.boxMax),u.applyMatrix4(C.matrixWorld),y.visible=!$e&&u.max.y>-M&&u.min.y<0&&A._showSmooth>.001,!y.visible)return;const Be=A._showSmooth;let et=0,W=k-1;for(;et<W;){const X=et+W+1>>1;B[X]<=Be?et=X:W=X-1}const Ye=et,Le=Math.min(Ye+1,k-1);let We=0;if(Ye<k-1){const X=B[Le]-B[Ye]||1;We=(Be-B[Ye])/X}l.fromArray(H.array,Ye*3),c.fromArray(H.array,Le*3),l.lerp(c,We);const Xe=V.array;let st=Xe[Ye]*(1-We)+Xe[Le]*We;st=.9+.1*st;const de=ri((Be-(P.aoThreshold-.02))/.04);F.position.copy(l),F.scale.set(ne,ne,1),z.uniforms.u_ao.value=Math.min(1,st+1-de);let I=B[Ye]*(1-We)+B[Le]*We;I=1-Math.pow(1-Yt(I,0,1),2),z.uniforms.u_mixRatio.value=I},R=()=>{if(_){if(p){for(const w of a)w.container.visible=!1;s.clear(),p=!1}return}let A=!1,P=!1;for(const w of a){L(w),w.container.visible&&(A=!0);const y=w._targetA??0,C=w._showSmooth??0;Math.abs(y-C)>8e-4&&(P=!0)}(A||P||p)&&s.render(n,r),p=A||P};return R(),{update:R,resize:S,setGoalOffset(A){const P=a.find(w=>w.data.id==="goal");P&&(P.offsetY=A||0)},setGoalFrame({scale:A=1,rotation:P=0,active:w=!1}={}){const y=a.find(F=>F.data.id==="goal");if(!y)return;if(!w){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const C=b*.5,N=-M*.5;f.makeTranslation(C,N,0),m.makeRotationZ(-P),v.makeScale(A,A,1),g.makeTranslation(-C,-N,0),f.multiply(m).multiply(v).multiply(g),f.decompose(y.framePos,y.frameQuat,y.frameScale)},setPaused(A){if(_=!!A,_){for(const P of a)P.container.visible=!1;try{s.clear()}catch{}p=!1}},destroy(){window.removeEventListener("resize",S),s.dispose(),i.remove()}}}const Jc=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function zw(i,e,t,n){var P;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const w=Array.from(e.childNodes);e.appendChild(f),w.forEach(y=>f.appendChild(y))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const w=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==w&&(m.src=w)};v();let g="",_=null,p=(P=e.parentElement)==null?void 0:P.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const w=s||a;if(!w)return null;const y=w.getBoundingClientRect();return y.width<8||y.height<8?null:{left:y.left,top:y.top,width:y.width,height:y.height}},M=()=>{const w=window.visualViewport;return Jc&&w?{vw:Math.round(w.width)||window.innerWidth,vh:Math.round(w.height)||window.innerHeight,top:Math.round(w.offsetTop||0),left:Math.round(w.offsetLeft||0)}:{vw:window.innerWidth,vh:window.innerHeight,top:0,left:0}},S=(w,y=0,C=0)=>{if(!w)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const{vw:N,vh:F,top:z,left:B}=M();e.style.position="fixed",e.style.left=`${B}px`,e.style.top=`${z}px`,e.style.width=`${N}px`,e.style.height=`${F}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const H=Yt(C,0,1),V=w.left-B+w.width*d.left*(1-H),k=w.top-z+w.height*d.top*(1-H),se=w.width*d.width+(N-w.width*d.width)*H,G=w.height*d.height+(F-w.height*d.height)*H;f&&(f.style.inset="unset",f.style.left=`${V}px`,f.style.top=`${k}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,se)}px`,f.style.height=`${Math.max(1,G)}px`,f.style.borderRadius=H>.85?"0px":`${Math.min(w.width,w.height)*.03*(1-H)}px`,f.style.background="#000",f.style.transform=y?`rotate(${y}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${w.left-B}px`,m.style.top=`${w.top-z}px`,m.style.width=`${w.width}px`,m.style.height=`${w.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=y?`rotate(${y}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},L=()=>{var w;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(w=n==null?void 0:n.setGoalFrame)==null||w.call(n,{active:!1})},R=()=>{const w=t.range("blackFrameShow").ratio,y=t.range("blackFrameIn").ratio,C=t.range("blackTunnel").ratio,N=t.between("whiteTunnel","whiteFrameOut").ratio,F=i.getBoundingClientRect(),{vw:z,vh:B,top:H,left:V}=M(),k=F.bottom>0&&F.top<B;_=b();const se=k&&C<.02&&N<.01&&y<.999;if(se&&_){let G=Yt(y,0,1);if(_.top<B*.4){const ne=Yt((B*.4-_.top)/(B*.65),0,1);G=Math.max(G,fe(ne,0,1,0,.35))}const pe={left:V,top:H,width:z,height:B},Ee={left:_.left+(pe.left-_.left)*G,top:_.top+(pe.top-_.top)*G,width:_.width+(pe.width-_.width)*G,height:_.height+(pe.height-_.height)*G},De=fe(G,0,1,0,.35)*(1-G);S(Ee,De,G);const Q=Math.max(fe(w,0,.2,.35,1),F.top<B*.85?1:0);if(e.style.opacity=String(Q),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(fe(G,0,.75,1,0)*Q),m.style.visibility=G>.92?"hidden":"visible"),o&&(o.style.visibility=G>.98?"hidden":"visible"),u&&(u.style.visibility=G>.55?"":"hidden"),l&&!Jc){const ne=fe(G,0,1,0,B*.12);l.style.transform=`translate3d(0, ${-ne}px, 0)`}if(c&&!Jc&&_){const ne=i.querySelector("#home-goal-context"),ue=(ne==null?void 0:ne.getBoundingClientRect().top)??0,ce=ne&&parseFloat(getComputedStyle(ne).paddingTop)||0,ge=_.top-ue-ce+_.height*.5;c.style.top=`${ge}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:G>.01,scale:fe(G,0,1,1,2.4),rotation:De}),g!=="window"&&(g="window"),{mode:"window",blackFrameIn:G,blackFrameShow:w,frameRect:_}}if(g==="window"){L(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),e.dataset.goalOwned="full",e.classList.add("is-pinned"),e.style.position="fixed",e.style.left=`${V}px`,e.style.top=`${H}px`,e.style.width=`${z}px`,e.style.height=`${B}px`,e.style.right="auto",e.style.bottom="auto",e.style.zIndex="4",e.style.background="#000000",p&&(p.style.height="0px");let G=e.previousElementSibling;for(;G;){if(G!==p&&G.getAttribute("aria-hidden")==="true"){G.style.height="0px";break}G=G.previousElementSibling}e.parentElement!==document.body&&document.body.appendChild(e),g="full"}else!se&&o&&C>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden"));return(!k||F.top>B*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:y,blackFrameShow:w,frameRect:_}},A=()=>{v(),R()};return window.addEventListener("resize",A),window.addEventListener("scroll",R,{passive:!0}),R(),{update:R,destroy(){window.removeEventListener("resize",A),window.removeEventListener("scroll",R),m==null||m.remove(),L()},getFrameRect:()=>_}}const ep="/zyrax-studio/assets/audios/",Bw={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},kw={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function tp(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function Hw(){const i={};for(const[p,b]of Object.entries(Bw))i[p]=tp(`${ep}${b}`,{loop:!0,volume:0});const e={};for(const[p,b]of Object.entries(kw))e[p]=b.map(M=>tp(`${ep}${M}`,{loop:!1,volume:.85}));let t=!1,n=null,r=null,o=null,s=1,a=1.2;const l={hover:0,click:0,focus:0,page:0,glass:0};let c=0;const u=async()=>{if(!t){t=!0;try{const p=i.generic;p.volume=0,await p.play(),p.pause(),p.currentTime=0,n||f("generic",.01)}catch{t=!1}}},d=p=>{if(!t)return;const b=e[p];if(!(b!=null&&b.length))return;const M=l[p]%b.length;l[p]=M+1;const S=b[M].cloneNode();S.volume=p==="focus"?.4:p==="glass"?1:.85,S.play().catch(()=>{})},f=(p,b=1.2)=>{if(!i[p]||n===p)return;r=n,o=p,s=0,a=Math.max(.05,b),n=p;const M=i[p];M.volume>.01&&!M.paused||(M.volume=0),t&&M.play().catch(()=>{})},m=p=>{if(t)if(o&&s<1){s=Math.min(1,s+p/a);const b=s*s*(3-2*s);if(r&&i[r]&&(i[r].volume=Math.max(0,1-b),b>=1)){i[r].pause();try{i[r].currentTime=0}catch{}}i[o]&&(i[o].volume=b,i[o].paused&&i[o].play().catch(()=>{})),b>=1&&(r=null,o=null)}else n&&i[n]&&(i[n].volume<1&&(i[n].volume=1),i[n].paused&&i[n].play().catch(()=>{}))},v=()=>{},g=({blackFrameInRatio:p=0,blackTunnelRatio:b=0,whiteTunnelRatio:M=0,astronautDropRatio:S=0}={})=>{const L=S,R=p,A=b,P=M;R>.5&&A===0?(c=0,f("cinematic_2",.5)):A>0&&P===0?(f("cinematic_3",.5),c=0):P>0&&L===0||P>0&&L<=.8?f("cinematic_2",.5):P>0&&L>.8?f("generic_end",1):(c=0,f("generic",1)),L===0?c=1:c===1&&(d("glass"),c=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(p=>{p.addEventListener("mouseenter",()=>d("hover")),p.addEventListener("click",()=>d("click"))});const _=()=>{u()};return window.addEventListener("pointerdown",_,{passive:!0}),window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("wheel",_,{passive:!0,once:!0}),window.addEventListener("keydown",_,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:v,syncTunnelAudio:g,playSfx:d,setEnabled(){},get enabled(){return!0},destroy(){Object.values(i).forEach(p=>{p.pause(),p.src=""})}}}const mr=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let Qc=0;const Bh=({notifyResize:i=!1}={})=>{var n;const e=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,t=e*.01;document.documentElement.style.setProperty("--vh",`${t}px`),i&&mr&&Math.abs(e-Qc)>1?(Qc=e,window.dispatchEvent(new Event("resize"))):Qc=e};Bh();window.addEventListener("resize",()=>Bh());let eu=0,$m=()=>{};const Zm=()=>{eu||(eu=window.setTimeout(()=>{eu=0,Bh({notifyResize:!0}),$m()},mr?48:0))};var sp;(sp=window.visualViewport)==null||sp.addEventListener("resize",Zm);var ap;(ap=window.visualViewport)==null||ap.addEventListener("scroll",Zm);const Ai=new S0({duration:mr?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!mr,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:mr?.9:.82,touchMultiplier:mr?1:1.1});window.lenis=Ai;let js=0,Js=0,hs=!1,Km=0;window.addEventListener("wheel",()=>{Km=performance.now(),hs=!0},{passive:!0});window.addEventListener("pointerdown",()=>{hs=!0},{passive:!0});const Vw="/zyrax-studio/assets/projects/",np=document.getElementById("project-list");np&&(np.innerHTML=cm.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${Vw}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const Gw=document.getElementById("hero-canvas"),Ww=document.getElementById("home-hero-visual-container"),Or=document.getElementById("home-hero"),tu=document.getElementById("home-hero-title"),nu=document.getElementById("home-hero-visual-container"),ip=document.getElementById("home-hero-scroll-container"),gr=document.getElementById("home-goal"),Xw=document.getElementById("goal-tunnel-canvas"),qw=document.getElementById("home-goal-tunnel-title"),jm=document.getElementById("home-goal-tunnel-sticky"),Jm=vw(gr,qw,jm),Yw=gr?zh(gr):null,iu=Hw();let wt=null,rp="";const $w=yw(),Zw=ww(),Kw=Dw();let Vn=null,Rl=null;const Qm=gr?zw(gr,jm,Yw,{setGoalFrame:(...i)=>{var e;return(e=Vn==null?void 0:Vn.setGoalFrame)==null?void 0:e.call(Vn,...i)}}):{update(){}};$m=()=>{var i;Qm.update(),Jm.updateScroll(),(i=wt==null?void 0:wt.updateScroll)==null||i.call(wt)};let op=performance.now();Th.ticker.add(i=>{var r,o,s,a,l,c,u;const e=performance.now(),t=Math.min(.05,(e-op)/1e3);if(op=e,!mr&&(wt!=null&&wt.getAutoScrollSpeed&&(js=wt.getAutoScrollSpeed()),e-Km>1400&&!Ai.isScrolling?Math.abs(js)>.01&&(hs=!1):hs=!0,Js+=Math.abs(js)>0&&!hs?t*.35:-1.2,Js=Math.max(0,Math.min(1,Js)),!hs&&Js>.15&&Math.abs(js)>.01)){const f=window.innerHeight,m=js*f*t*Js*.22,v=(Ai.animatedScroll??Ai.scroll??window.scrollY)+m;Ai.scrollTo(v,{immediate:!0,force:!0})}Ai.raf(i*1e3),$w.update(t),Zw.update(t),Rl==null||Rl.update(t),Kw.update(t),Vn==null||Vn.update(),(r=wt==null?void 0:wt.tickFrame)==null||r.call(wt,t),iu.update(t);const n=((o=gr==null?void 0:gr.dataset)==null?void 0:o.goalPhase)||"";n&&n!==rp&&(rp=n,iu.syncGoalPhase(),(s=Vn==null?void 0:Vn.setPaused)==null||s.call(Vn,mr&&(n==="black-tunnel"||n==="white"))),wt!=null&&wt.getAstronautDropRatio&&iu.syncTunnelAudio({blackFrameInRatio:((a=wt.getBlackFrameInRatio)==null?void 0:a.call(wt))??0,blackTunnelRatio:((l=wt.getBlackTunnelRatio)==null?void 0:l.call(wt))??0,whiteTunnelRatio:((c=wt.getWhiteTunnelRatio)==null?void 0:c.call(wt))??0,astronautDropRatio:((u=wt.getAstronautDropRatio)==null?void 0:u.call(wt))??0})});Th.ticker.lagSmoothing(0);Ai.on("scroll",()=>{if(Qm.update(),Jm.updateScroll(),wt==null||wt.updateScroll(),!Or)return;const i=Or.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));tu&&(tu.style.transform=`translate3d(0, ${t*-12}vh, 0)`,tu.style.opacity=String(Math.max(0,1-t*1.2))),nu&&(nu.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,nu.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),ip&&(ip.style.opacity=String(Math.max(0,1-t*2)))});Ow().then(i=>{Vn=i}).catch(i=>console.error("Scroll lines failed",i));gw(Xw,gr).then(i=>{wt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{FM(Gw,Ww).then(()=>Or==null?void 0:Or.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Or==null||Or.classList.add("is-in")})});mr||Rw(cm).then(i=>{Rl=i}).catch(i=>console.error("Featured WebGL failed",i));function e0(i,e="word"){if(!i)return;const t=Array.from(i.querySelectorAll(".hero-name")).map(o=>o.textContent.trim()),r=i.textContent.trim().split(/\s+/);i.textContent="",r.forEach((o,s)=>{const a=document.createElement("span");a.className=e,t.includes(o)&&a.classList.add("hero-name"),a.textContent=o,a.style.transitionDelay=`${s*35}ms`,i.appendChild(a),i.appendChild(document.createTextNode(" "))})}e0(document.getElementById("home-hero-title"));e0(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const jw=document.querySelectorAll(".home-hero-scroll-container-cross");jw.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const ru=document.getElementById("header"),ou=document.getElementById("header-container"),Br=document.getElementById("header-background"),su=document.getElementById("header-menu"),vs=document.getElementById("header-right-menu-btn");let hr=!1;const Aa=i=>{hr=!!i,ru==null||ru.classList.toggle("--menu-opened",hr),ou==null||ou.classList.toggle("--opened",hr),Br==null||Br.classList.toggle("--opened",hr),su==null||su.classList.toggle("--opened",hr),vs==null||vs.classList.toggle("--opened",hr),Br&&(Br.style.opacity=hr?window.innerWidth>=1e3?"0.2":"1":"0")};vs==null||vs.addEventListener("click",i=>{i.stopPropagation(),Aa(!hr)});Br==null||Br.addEventListener("click",()=>Aa(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Aa(!1),t==="contact"?(e.preventDefault(),Ai.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Ai.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!hr)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Aa(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Aa(!1)});var lp;(lp=document.querySelector("[data-reel]"))==null||lp.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var cp;(cp=document.querySelector("#end-bottom"))==null||cp.addEventListener("click",i=>{i.preventDefault(),Ai.scrollTo("#footer-section")});var up;(up=document.querySelector("#footer-bottom-up"))==null||up.addEventListener("click",i=>{i.preventDefault(),Ai.scrollTo(0)});
