var g0=Object.defineProperty;var v0=(i,e,t)=>e in i?g0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ye=(i,e,t)=>v0(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var yf="1.3.27";function _p(i,e,t){return Math.max(i,Math.min(e,t))}function x0(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return x0(i,e,1-Math.exp(-t*n))}function S0(i,e){return(i%e+e)%e}var M0=class{constructor(){Ye(this,"isRunning",!1);Ye(this,"value",0);Ye(this,"from",0);Ye(this,"to",0);Ye(this,"currentTime",0);Ye(this,"lerp");Ye(this,"duration");Ye(this,"easing");Ye(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=_p(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=y0(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function w0(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var b0=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ye(this,"width",0);Ye(this,"height",0);Ye(this,"scrollHeight",0);Ye(this,"scrollWidth",0);Ye(this,"debouncedResize");Ye(this,"wrapperResizeObserver");Ye(this,"contentResizeObserver");Ye(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ye(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ye(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=w0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},gp=class{constructor(){Ye(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const T0=100/6,Lr={passive:!1};function Sf(i,e){return i===1?T0:i===2?e:1}var E0=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ye(this,"touchStart",{x:0,y:0});Ye(this,"lastDelta",{x:0,y:0});Ye(this,"window",{width:0,height:0});Ye(this,"emitter",new gp);Ye(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ye(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ye(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ye(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Sf(n,this.window.width),o=Sf(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ye(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Lr),this.element.addEventListener("touchstart",this.onTouchStart,Lr),this.element.addEventListener("touchmove",this.onTouchMove,Lr),this.element.addEventListener("touchend",this.onTouchEnd,Lr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Lr),this.element.removeEventListener("touchstart",this.onTouchStart,Lr),this.element.removeEventListener("touchmove",this.onTouchMove,Lr),this.element.removeEventListener("touchend",this.onTouchEnd,Lr)}};const Mf=i=>Math.min(1,1.001-2**(-10*i));var A0=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:S=!1,anchors:M=!1,autoToggle:L=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:y=!0}={}){Ye(this,"_isScrolling",!1);Ye(this,"_isStopped",!1);Ye(this,"_isLocked",!1);Ye(this,"_preventNextNativeScrollEvent",!1);Ye(this,"_resetVelocityTimeout",null);Ye(this,"_rafId",null);Ye(this,"_isDraggingSelection",!1);Ye(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ye(this,"isTouching");Ye(this,"isIos");Ye(this,"time",0);Ye(this,"userData",{});Ye(this,"lastVelocity",0);Ye(this,"velocity",0);Ye(this,"direction",0);Ye(this,"options");Ye(this,"targetScroll");Ye(this,"animatedScroll");Ye(this,"animate",new M0);Ye(this,"emitter",new gp);Ye(this,"dimensions");Ye(this,"virtualScroll");Ye(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ye(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ye(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ye(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ye(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ye(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ye(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ye(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yf,window.lenis||(window.lenis={}),window.lenis.version=yf,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Mf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:S,anchors:M,autoToggle:L,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:w,respectReducedMotion:y},this.dimensions=new b0(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new E0(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?M.left:M.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=_p(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=Mf:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,o=["auto","overlay","scroll"].includes(C.overflowX),s=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,S,M,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,S=o,M=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,S=s,M=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&S&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?S0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function dr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function vp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ma={duration:.5,overwrite:!1,delay:0},uh,yn,Xt,yi=1e8,Ft=1/yi,uu=Math.PI*2,R0=uu/4,C0=0,xp=Math.sqrt,P0=Math.cos,D0=Math.sin,_n=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},Mr=function(e){return typeof e=="number"},hh=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},fh=function(){return typeof window<"u"},Wa=function(e){return Qt(e)||_n(e)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,L0=/random\([^)]+\)/g,I0=/,\s*/g,wf=/(?:-?\.?\d|\.)+/gi,Sp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mp=/[+-]=-?[.\d]+/,U0=/[^,'"\[\]\s]+/gi,F0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,Gi,hu,dh,di={},Il={},wp,bp=function(e){return(Il=Ms(e,di))&&ei},ph=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_a=function(e,t){return!t&&console.warn(e)},Tp=function(e,t){return e&&(di[e]=t)&&Il&&(Il[e]=t)||di},ga=function(){return 0},N0={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},O0={suppressEvents:!0},mh={},Yr=[],fu={},Ep,oi={},pc={},bf=30,wl=[],_h="",gh=function(e){var t=e[0],n,r;if(ji(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=wl.length;r--&&!wl[r].targetTest(t););n=wl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new $p(e[r],n)))||e.splice(r,1);return e},Do=function(e){return e._gsap||gh(Si(e))[0]._gsap},Ap=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():hh(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},z0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ul=function(){var e=Yr.length,t=Yr.slice(0),n,r;for(fu={},Yr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vh=function(e){return!!(e._initted||e._startAt||e.add)},Rp=function(e,t,n,r){Yr.length&&!yn&&Ul(),e.render(t,n,!!(yn&&t<0&&vh(e))),Yr.length&&!yn&&Ul()},Cp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U0).length<2?t:_n(e)?e.trim():e},Pp=function(e){return e},pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},B0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},Tf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Fl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},sa=function(e){var t=e.parent||$t,n=e.keyframes?B0(In(e.keyframes)):pi;if(Zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},k0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Dp=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Zl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},H0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},du=function(e,t,n,r){return e._startAt&&(yn?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},V0=function i(e){return!e||e._ts&&i(e.parent)},Ef=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,t){var n=Math.floor(e=Yt(e/t));return e&&n===e?n-1:n},Nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kl=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},jl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kl(e),n._dirty||Lo(n,e)),e},Lp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nl(e.rawTime(),t),(!t._dur||Ea(0,t.totalDuration(),n)-t._tTime>Ft)&&t.render(n,!0)),Lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ft}},Xi=function(e,t,n,r){return t.parent&&Kr(t),t._start=Yt((Mr(n)?n:n||e!==$t?gi(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dp(e,t,"_first","_last",e._sort?"_start":0),pu(t)||(e._recent=t),r||Lp(e,t),e._ts<0&&jl(e,e._tTime),e},Ip=function(e,t){return(di.ScrollTrigger||ph("scrollTrigger",t))&&di.ScrollTrigger.create(t,e)},Up=function(e,t,n,r,o){if(yh(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ep!==si.frame)return Yr.push(e),e._lazy=[o,r],1},G0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},pu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},W0=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&G0(e)&&!(!e._initted&&pu(e))||(e._ts<0||e._dp._ts<0)&&!pu(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ea(0,e._tDur,t),u=ws(l,a),e._yoyo&&u&1&&(s=1-s),u!==ws(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||yn||r||e._zTime===Ft||!t&&e._zTime){if(!e._initted&&Up(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ft:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&du(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Kr(e,1),!n&&!yn&&(li(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},X0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},bs=function(e,t,n,r){var o=e._repeat,s=Yt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Yt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&jl(e,e._tTime=e._tDur*a),e.parent&&Kl(e),n||Lo(e.parent,e),e},Af=function(e){return e instanceof Yn?Lo(e):bs(e,e._dur)},q0={_start:0,endTime:ga,totalDuration:ga},gi=function i(e,t,n){var r=e.labels,o=e._recent||q0,s=e.duration()>=yi?o.endTime(!1):e._dur,a,l,c;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},aa=function(e,t,n){var r=Mr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;s.immediateRender=Zn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new sn(t[0],s,t[o+1])},to=function(e,t){return e||e===0?t(e):t},Ea=function(e,t,n){return n<e?e:n>t?t:n},Dn=function(e,t){return!_n(e)||!(t=F0.exec(e))?"":t[1]},Y0=function(e,t,n){return to(n,function(r){return Ea(e,t,r)})},mu=[].slice,Fp=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Gi},$0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return _n(r)&&!t||Fp(r,1)?(o=n).push.apply(o,Si(r)):n.push(r)})||n},Si=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):_n(e)&&!n&&(hu||!Ts())?mu.call((t||dh).querySelectorAll(e),0):In(e)?$0(e,n):Fp(e)?mu.call(e,0):e?[e]:[]},_u=function(e){return e=Si(e)[0]||_a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?_a("Invalid scope")||dh.createElement("div"):e)}},Np=function(e){return e.sort(function(){return .5-Math.random()})},Op=function(e){if(Qt(e))return e;var t=ji(e)?e:{each:e},n=Io(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return _n(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,S,M,L,C,A,P,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,yi])[1],!w){for(A=-yi;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=s[g]=[],p=l?Math.min(w,g)*u-.5:r%w,b=w===yi?0:l?g*d/w-.5:r/w|0,A=0,P=yi,C=0;C<g;C++)S=C%w-p,M=b-(C/w|0),_[C]=L=c?Math.abs(c==="y"?M:S):xp(S*S+M*M),L>A&&(A=L),L<P&&(P=L);r==="random"&&Np(_),_.max=A-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Dn(t.amount||t.each)||0,n=n&&g<0?a_(n):n}return g=(_[f]-_.min)/_.max||0,Yt(_.b+(n?n(g):g)*_.v)+_.u}},gu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Yt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mr(n)?0:Dn(n))}},zp=function(e,t){var n=In(e),r,o;return!n&&ji(e)&&(r=n=e.radius||yi,e.values?(e=Si(e.values),(o=!Mr(e[0]))&&(r*=r)):e=gu(e.increment)),to(t,n?Qt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=yi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||Mr(s)?u:u+Dn(s)}:gu(e))},Bp=function(e,t,n,r){return to(In(e)?!t:n===!0?!!(n=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Z0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},K0=function(e,t){return function(n){return e(parseFloat(n))+(t||Dn(n))}},j0=function(e,t,n){return Hp(e,t,0,1,n)},kp=function(e,t,n){return to(n,function(r){return e[~~t(r)]})},J0=function i(e,t,n){var r=t-e;return In(e)?kp(e,i(0,e.length),t):to(n,function(o){return(r+(o-e)%r)%r+e})},Q0=function i(e,t,n){var r=t-e,o=r*2;return In(e)?kp(e,i(0,e.length-1),t):to(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},va=function(e){return e.replace(L0,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(I0);return Bp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Hp=function(e,t,n,r,o){var s=t-e,a=r-n;return to(o,function(l){return n+((l-e)/s*a||0)})},e_=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=_n(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=Ms(In(e)?[]:{},e));if(!u){for(l in t)xh.call(a,e,l,"get",t[l]);o=function(v){return wh(v,a)||(s?e.p:e)}}}return to(n,o)},Rf=function(e,t,n){var r=e.labels,o=yi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},li=function(e,t,n){var r=e.vars,o=r[t],s=Xt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Yr.length&&Ul(),a&&(Xt=a),u=l?o.apply(c,l):o.call(c),Xt=s,u},na=function(e){return Kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&li(e,"onInterrupt"),e},fs,Vp=[],Gp=function(e){if(e)if(e=!e.name&&e.default||e,fh()||e.headless){var t=e.name,n=Qt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:ga,render:wh,add:xh,kill:g_,modifier:__,rawVars:0},s={targetTest:0,get:0,getSetter:Mh,aliases:{},register:0};if(Ts(),e!==r){if(oi[t])return;pi(r,pi(Fl(e,o),s)),Ms(r.prototype,Ms(o,Fl(e,s))),oi[r.prop=t]=r,e.targetTest&&(wl.push(r),mh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tp(t,r),e.register&&e.register(ei,r,jn)}else Vp.push(e)},Ut=255,ia={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},mc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},Wp=function(e,t,n){var r=e?Mr(e)?[e>>16,e>>8&Ut,e&Ut]:0:ia.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])r=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ut,r&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(wf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=mc(l+1/3,o,s),r[1]=mc(l,o,s),r[2]=mc(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(Sp),n&&r.length<4&&(r[3]=1),r}else r=e.match(wf)||ia.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Ut,s=r[1]/Ut,a=r[2]/Ut,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Xp=function(e){var t=[],n=[],r=-1;return e.split($r).forEach(function(o){var s=o.match(hs)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},Cf=function(e,t,n){var r="",o=(e+r).match($r),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Wp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Xp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace($r,"1").split(hs),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split($r),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},$r=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),t_=/hsl[a]?\(/,qp=function(e){var t=e.join(" "),n;if($r.lastIndex=0,$r.test(t))return n=t_.test(t),e[1]=Cf(e[1],n),e[0]=Cf(e[0],n,Xp(e[1])),!0},xa,si=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,S,M,L,C;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,S=L-s,(S>0||b)&&(C=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,s+=S+(S>=o?4:o-S),M=1),b||(l=c(g)),M)for(m=0;m<a.length;m++)a[m](L,f,C,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){wp&&(!hu&&fh()&&(Gi=hu=window,dh=Gi.document||{},di.gsap=ei,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(ei.version),bp(Il||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),Vp.forEach(Gp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},xa=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),xa=0,c=ga},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var S=p?function(M,L,C,A){_(M,L,C,A),d.remove(S)}:_;return d.remove(_),a[b?"unshift":"push"](S),Ts(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),Ts=function(){return!xa&&si.wake()},yt={},n_=/^[\d.\-M][\d.\-,\s]/,i_=/["']/g,r_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(i_,"").trim():+c,r=l.substr(a+1).trim();return t},o_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},s_=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[r_(t[1])]:o_(e).split(",").map(Cp)):yt._CE&&n_.test(e)?yt._CE("",e):n},a_=function(e){return function(t){return 1-e(1-t)}},Io=function(e,t){return e&&(Qt(e)?e:yt[e]||s_(e))||t},zo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Kn(e,function(a){yt[a]=di[a]=o,yt[s=a.toLowerCase()]=n;for(var l in o)yt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=o[l]}),o},Yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_c=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/uu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*D0((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Yp(a);return o=uu/o,l.config=function(c,u){return i(e,c,u)},l},gc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Yp(n);return r.config=function(o){return i(e,o)},r};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;zo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;zo("Elastic",_c("in"),_c("out"),_c());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};zo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);zo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});zo("Circ",function(i){return-(xp(1-i*i)-1)});zo("Sine",function(i){return i===1?1:-P0(i*R0)+1});zo("Back",gc("in"),gc("out"),gc());yt.SteppedEase=yt.steps=di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Ft;return function(a){return((r*Ea(0,s,a)|0)+o)*n}}};ma.ease=yt["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return _h+=i+","+i+"Params,"});var $p=function(e,t){this.id=C0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ap,this.set=t?t.getSetter:Mh},ya=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),xa||si.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ts(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(jl(this,n),!o._dp||o.parent||Lp(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ef(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ef(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?ws(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ft?0:this._rts,this.totalTime(Ea(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),Kl(this),H0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Yt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Xi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=O0);var r=yn;return yn=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Af(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Af(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(gi(this,n),Zn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Zn(r)),this._dur||(this._zTime=-Ft),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Ft)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Qt(n)?n:Pp,l=function(){var u=r.then;r.then=null,o&&o(),Qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){na(this)},i})();pi(ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var Yn=(function(i){vp(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Zn(n.sortChildren),$t&&Xi(n.parent||$t,dr(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Ip(dr(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return aa(0,arguments,this),this},t.from=function(r,o,s){return aa(1,arguments,this),this},t.fromTo=function(r,o,s,a){return aa(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,sa(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new sn(r,o,gi(this,s),1),this},t.call=function(r,o,s){return Xi(this,sn.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new sn(r,s,gi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,sa(s).immediateRender=Zn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,sa(a).immediateRender=Zn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Yt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,S,M,L,C,A;if(this!==$t&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Yt(u%_),u===l?(g=this._repeat,f=c):(L=Yt(u/_),g=~~L,g&&g===L&&(f=c,g--),f>c&&(f=c)),L=ws(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),C&&g&1&&(f=c-f,A=1),g!==L&&!this._lock){var P=C&&L&1,w=P===(C&&g&1);if(g<L&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Yt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=X0(this,Yt(a),Yt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!L&&(li(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-Ft);break}}m=v}else{m=this._last;for(var y=r<0?r:f;m;){if(v=m._prev,(m._act||y<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,o,s||yn&&vh(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=y?-Ft:Ft);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-Ft)._zTime=f>=a?1:-1,this._ts))return this._start=M,Kl(this),this.render(r,o,s);this._onUpdate&&!o&&li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Kr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(li(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(Mr(o)||(o=gi(this,o,r)),!(r instanceof ya)){if(In(r))return r.forEach(function(a){return s.add(a,o)}),this;if(_n(r))return this.addLabel(r,o);if(Qt(r))r=sn.delayedCall(0,r);else return this}return this!==r?Xi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return _n(r)?this.removeLabel(r):Qt(r)?this.killTweensOf(r):(r.parent===this&&Zl(this,r),r===this._recent&&(this._recent=this._last),Lo(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=gi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=sn.delayedCall(0,o||ga,s);return a.data="isPause",this._hasPause=1,Xi(this,a,gi(this,r))},t.removePause=function(r){var o=this._first;for(r=gi(this,r);o;)o._start===r&&o.data==="isPause"&&Kr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Wr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=Si(r),l=this._first,c=Mr(o),u;l;)l instanceof sn?z0(l._targets,a)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=gi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=sn.to(s,pi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Ft,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&bs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,pi({startAt:{time:gi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rf(this,gi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rf(this,gi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ft)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Yt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return Lo(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lo(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=yi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Xi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Yt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;bs(s,s===$t&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if($t._ts&&(Rp($t,Nl(r,$t)),Ep=si.frame),si.frame>=bf){bf+=ui.autoSleep||120;var o=$t._first;if((!o||!o._ts)&&ui.autoSleep&&si._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||si.sleep()}}},e})(ya);pi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var l_=function(e,t,n,r,o,s,a){var l=new jn(this._pt,e,t,0,1,em,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=va(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(dc)||[];d=dc.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?ms(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=dc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Mp.test(r)||p)&&(l.e=0),this._pt=l,l},xh=function(e,t,n,r,o,s,a,l,c,u){Qt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Qt(d)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Qt(d)?c?d_:Jp:Sh,v;if(_n(r)&&(~r.indexOf("random(")&&(r=va(r)),r.charAt(1)==="="&&(v=ms(f,r)+(Dn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||vu)return!isNaN(f*r)&&r!==""?(v=new jn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?m_:Qp,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&ph(t,r),l_.call(this,e,t,f,r,m,l||ui.stringFilter,c))},c_=function(e,t,n,r,o){if(Qt(e)&&(e=la(e,o,t,n,r)),!ji(e)||e.style&&e.nodeType||In(e)||yp(e))return _n(e)?la(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=la(e[a],o,t,n,r);return s},Zp=function(e,t,n,r,o,s){var a,l,c,u;if(oi[e]&&(a=new oi[e]).init(o,a.rawVars?t[e]:c_(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new jn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==fs))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Wr,vu,yh=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!uh,M=e.timeline,L=r.easeReverse||d,C,A,P,w,y,R,F,N,z,k,H,W,V;if(M&&(!f||!o)&&(o="none"),e._ease=Io(o,ma.ease),e._rEase=L&&(Io(L)||e._ease),e._from=!M&&!!r.runBackwards,e._from&&(e.ratio=1),!M||f&&!r.stagger){if(N=_[0]?Do(_[0]).harness:0,W=N&&r[N.prop],C=Fl(r,mh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Ml:N0),g._lazy=0),s){if(Kr(e._startAt=sn.set(_,pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!m)&&e._startAt.revert(Ml),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Zn(l),immediateRender:a,stagger:0,parent:p},C),W&&(P[N.prop]=W),Kr(e._startAt=sn.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ft,Ft);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Zn(l)||l&&!v,A=0;A<_.length;A++){if(y=_[A],F=y._gsap||gh(_)[A]._gsap,e._ptLookup[A]=k={},fu[F.id]&&Yr.length&&Ul(),H=b===_?A:b.indexOf(y),N&&(z=new N).init(y,W||C,e,H,b)!==!1&&(e._pt=w=new jn(e._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(oe){k[oe]=w}),z.priority&&(R=1)),!N||W)for(P in C)oi[P]&&(z=Zp(P,C,e,H,y,b))?z.priority&&(R=1):k[P]=w=xh.call(e,y,P,"get",C[P],H,b,0,r.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),S&&e._pt&&(Wr=e,$t.killTweensOf(y,k,e.globalTime(t)),V=!e.parent,Wr=0),e._pt&&l&&(fu[F.id]=1)}R&&tm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,f&&t<=0&&M.render(yi,!0,!0)},u_=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return vu=1,e.vars[t]="+=0",yh(e,a),vu=0,l?_a(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=tn(n)+Dn(d.e)),d.b&&(d.b=u.s+Dn(d.b))},h_=function(e,t){var n=e[0]?Do(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=Ms({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},f_=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(In(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},la=function(e,t,n,r,o){return Qt(e)?e.call(t,n,r,o):_n(e)&&~e.indexOf("random(")?va(e):e},Kp=_h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jp={};Kn(Kp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return jp[i]=1});var sn=(function(i){vp(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:sa(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||$t,b=(In(n)||yp(n)?Mr(n[0]):"length"in r)?[n]:Si(n),S,M,L,C,A,P,w,y;if(a._targets=b.length?gh(b):_a("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||Wa(c)||Wa(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(S=a.timeline=new Yn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),S.kill(),S.parent=S._dp=dr(a),S._start=0,f||Wa(c)||Wa(u)){if(C=b.length,w=f&&Op(f),ji(f))for(A in f)~Kp.indexOf(A)&&(y||(y={}),y[A]=f[A]);for(M=0;M<C;M++)L=Fl(r,jp),L.stagger=0,R&&(L.easeReverse=R),y&&Ms(L,y),P=b[M],L.duration=+la(c,dr(a),M,P,b),L.delay=(+la(u,dr(a),M,P,b)||0)-a._delay,!f&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),S.to(P,L,w?w(M,P,b):0),S._ease=yt.none;S.duration()?c=u=0:a.timeline=0}else if(v){sa(pi(S.vars.defaults,{ease:"none"})),S._ease=Io(v.ease||r.ease||"none");var F=0,N,z,k;if(In(v))v.forEach(function(H){return S.to(b,H,">")}),S.duration();else{L={};for(A in v)A==="ease"||A==="easeEach"||f_(A,v[A],L,v.easeEach);for(A in L)for(N=L[A].sort(function(H,W){return H.t-W.t}),F=0,M=0;M<N.length;M++)z=N[M],k={ease:z.e,duration:(z.t-(M?N[M-1].t:0))/100*c},k[A]=z.v,S.to(b,k,F),F+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!uh&&(Wr=dr(a),$t.killTweensOf(b),Wr=0),Xi(p,dr(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Yt(p._time)&&Zn(d)&&V0(dr(a))&&p.data!=="nested")&&(a._tTime=-Ft,a.render(Math.max(0,-u)||0)),_&&Ip(dr(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Ft&&!u?l:r<Ft?0:r,f,m,v,g,_,p,b,S;if(!c)W0(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Yt(d%g),d===l?(v=this._repeat,f=c):(_=Yt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=ws(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Yt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Up(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var M=f<a;if(M!==this._inv){var L=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(M?-1:1)/L:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(li(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&du(this,r,o,s),li(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&du(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Kr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){xa||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yh(this,c),u=this._ease(c/this._dur),u_(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(jl(this,0),this.parent||Dp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Wr&&Wr.vars.overwrite!==!0)._first||na(this),this.parent&&s!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?Si(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&k0(a,l))return o==="all"&&(this._pt=0),na(this);for(d=this._op=this._op||[],o!=="all"&&(_n(o)&&(g={},Kn(o,function(b){return g[b]=1}),o=g),o=h_(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Zl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return aa(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return aa(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return $t.killTweensOf(r,o,s)},e})(ya);pi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(i){sn[i]=function(){var e=new Yn,t=mu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Sh=function(e,t,n){return e[t]=n},Jp=function(e,t,n){return e[t](n)},d_=function(e,t,n,r){return e[t](r.fp,n)},p_=function(e,t,n){return e.setAttribute(t,n)},Mh=function(e,t){return Qt(e[t])?Jp:hh(e[t])&&e.setAttribute?p_:Sh},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},m_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},em=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},wh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},__=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},g_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Zl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},v_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},tm=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},jn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||Qp,this.d=l||this,this.set=c||Sh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=v_,this.m=n,this.mt=o,this.tween=r},i})();Kn(_h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return mh[i]=1});di.TweenMax=di.TweenLite=sn;di.TimelineLite=di.TimelineMax=Yn;$t=new Yn({sortChildren:!1,defaults:ma,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=qp;var Uo=[],bl={},x_=[],Pf=0,y_=0,vc=function(e){return(bl[e]||x_).map(function(t){return t()})},xu=function(){var e=Date.now(),t=[];e-Pf>2&&(vc("matchMediaInit"),Uo.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Gi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),vc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Pf=e,vc("matchMedia"))},nm=(function(){function i(t,n){this.selector=n&&_u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=y_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Qt(n)&&(o=r,r=n,n=Qt);var s=this,a=function(){var c=Xt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=_u(o)),Xt=s,d=r.apply(s,arguments),Qt(d)&&s._r.push(d),Xt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Qt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Xt;Xt=null,n(this),Xt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=Uo.length;s--;)Uo[s].id===this.id&&Uo.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),S_=(function(){function i(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){ji(n)||(n={matches:n});var s=new nm(0,o||this.scope),a=s.conditions={},l,c,u;Xt&&!s.selector&&(s.selector=Xt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Gi.matchMedia(n[c]),l&&(Uo.indexOf(s)<0&&Uo.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(xu):l.addEventListener("change",xu)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Gp(r)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,n,r){_n(e)&&(e=Si(e)[0]);var o=Do(e||{}).get,s=n?Pp:Cp;return n==="native"&&(n=""),e&&(t?s((oi[t]&&oi[t].get||o)(e,t,n,r)):function(a,l,c){return s((oi[a]&&oi[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var r=e.map(function(u){return ei.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=oi[t],a=Do(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;fs._pt=0,d.init(e,n?u+n:u,fs,0,[e]),d.render(1,d),fs._pt&&wh(1,fs)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=ei.to(e,pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Io(e.ease,ma.ease)),Tf(ma,e||{})},config:function(e){return Tf(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!oi[a]&&!di[a]&&_a(t+" effect requires "+a+" plugin.")}),pc[t]=function(a,l,c){return n(Si(a),pi(l||{},o),c)},s&&(Yn.prototype[t]=function(a,l,c){return this.add(pc[t](a,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Io(t)},parseEase:function(e,t){return arguments.length?Io(e,t):yt},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),r,o;for(n.smoothChildTiming=Zn(e.smoothChildTiming),$t.remove(n),n._dp=0,n._time=n._tTime=$t._time,r=$t._first;r;)o=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&Xi(n,r,r._start-r._delay),r=o;return Xi($t,n,0),n},context:function(e,t){return e?new nm(e,t):Xt},matchMedia:function(e){return new S_(e)},matchMediaRefresh:function(){return Uo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||xu()},addEventListener:function(e,t){var n=bl[e]||(bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:J0,wrapYoyo:Q0,distribute:Op,random:Bp,snap:zp,normalize:j0,getUnit:Dn,clamp:Y0,splitColor:Wp,toArray:Si,selector:_u,mapRange:Hp,pipe:Z0,unitize:K0,interpolate:e_,shuffle:Np},install:bp,effects:pc,ticker:si,updateRoot:Yn.updateRoot,plugins:oi,globalTimeline:$t,core:{PropTween:jn,globals:Tp,Tween:sn,Timeline:Yn,Animation:ya,getCache:Do,_removeLinkedListItem:Zl,reverting:function(){return yn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return uh=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ol[i]=sn[i]});si.add(Yn.updateRoot);fs=Ol.to({},{duration:0});var M_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},w_=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=M_(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},xc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(_n(o)&&(l={},Kn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}w_(a,o)}}}},ei=Ol.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xc("roundProps",gu),xc("modifiers"),xc("snap",zp))||Ol;sn.version=Yn.version=ei.version="3.15.0";wp=1;fh()&&Ts();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Df,Xr,_s,bh,Co,Lf,Th,b_=function(){return typeof window<"u"},wr={},wo=180/Math.PI,gs=Math.PI/180,$o=Math.atan2,If=1e8,Eh=/([A-Z])/g,T_=/(left|right|width|margin|padding|x)/i,E_=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},C_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},im=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},D_=function(e,t,n){return e.style[t]=n},L_=function(e,t,n){return e.style.setProperty(t,n)},I_=function(e,t,n){return e._gsap[t]=n},U_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},F_=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},N_=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Kt="transform",Jn=Kt+"Origin",O_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in wr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=_r(r,a)}):this.tfm[e]=s.x?s[e]:_r(r,e),e===Jn&&(this.tfm.zOrigin=s.zOrigin);else return qi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Jn,t,"")),e=Kt}(o||t)&&this.props.push(e,t,o[e])},om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},z_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Eh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Th(),(!o||!o.isStart)&&!n[Kt]&&(om(n),r.zOrigin&&n[Jn]&&(n[Jn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},sm=function(e,t){var n={target:e,props:[],revert:z_,save:O_};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},am,Su=function(e,t){var n=Xr.createElementNS?Xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xr.createElement(e);return n&&n.style?n:Xr.createElement(e)},ci=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Eh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Es(t)||t,1)||""},Uf="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var r=t||Co,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Uf[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Uf[s]:"")+e},Mu=function(){b_()&&window.document&&(Df=window,Xr=Df.document,_s=Xr.documentElement,Co=Su("div")||{style:{}},Su("div"),Kt=Es(Kt),Jn=Kt+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",am=!!Es("perspective"),Th=ei.core.reverting,bh=1)},Ff=function(e){var t=e.ownerSVGElement,n=Su("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),_s.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),_s.removeChild(n),o},Nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lm=function(e){var t,n;try{t=e.getBBox()}catch{t=Ff(e),n=1}return t&&(t.width||t.height)||n||(t=Ff(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nf(e,["x","cx","x1"])||0,y:+Nf(e,["y","cy","y1"])||0,width:0,height:0}:t},cm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lm(e))},jr=function(e,t){if(t){var n=e.style,r;t in wr&&t!==Jn&&(t=Kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Eh,"-$1").toLowerCase())):n.removeAttribute(t)}},qr=function(e,t,n,r,o,s){var a=new jn(e._pt,t,n,0,1,s?rm:im);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},Of={deg:1,rad:1,turn:1},B_={grid:1,flex:1},Jr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=Co.style,l=T_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||Of[r]||Of[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&cm(e),(m||s==="%")&&(wr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],tn(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Xr||!g.appendChild)&&(g=Xr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===si.time&&!_.uncache)return tn(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:jr(e,t)}else(m||s==="%")&&!B_[ci(g,"display")]&&(a.position=ci(e,"position")),g===e&&(a.position="static"),g.appendChild(Co),v=Co[u],g.removeChild(Co),a.position="absolute";return l&&m&&(_=Do(g),_.time=si.time,_.width=g[u]),tn(f?v*o/d:v&&o?d/v*o:0)},_r=function(e,t,n,r){var o;return bh||Mu(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),wr[t]&&t!=="transform"?(o=Ma(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Bl(ci(e,Jn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=zl[t]&&zl[t](e,t,n)||ci(e,t)||Ap(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Jr(e,t,o,n)+n:o},k_=function(e,t,n,r){if(!n||n==="none"){var o=Es(t,e,1),s=o&&ci(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new jn(this._pt,e.style,t,0,1,em),l=0,c=0,u,d,f,m,v,g,_,p,b,S,M,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ci(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ci(e,t)||r,g?e.style[t]=g:jr(e,t)),u=[n,r],qp(u),n=u[0],r=u[1],f=n.match(hs)||[],L=r.match(hs)||[],L.length){for(;d=hs.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,M=g.substr((m+"").length),_.charAt(1)==="="&&(_=ms(m,_)+M),p=parseFloat(_),S=_.substr((p+"").length),l=hs.lastIndex-S.length,S||(S=S||ui.units[t]||M,l===r.length&&(r+=S,a.e+=S)),M!==S&&(m=Jr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?rm:im;return Mp.test(r)&&(a.e=0),this._pt=a,a},zf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},H_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=zf[n]||n,t[1]=zf[r]||r,t.join(" ")},V_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],wr[a]&&(l=1,a=a==="transformOrigin"?Jn:Kt),jr(n,a);l&&(jr(n,Kt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ma(n,1),s.uncache=1,om(r)))}},zl={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new jn(e._pt,t,n,0,0,V_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},Sa=[1,0,0,1,0,0],um={},hm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var t=ci(e,Kt);return hm(t)?Sa:t.substr(7).match(Sp).map(tn)},Ah=function(e,t){var n=e._gsap||Do(e),r=e.style,o=Bf(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Sa:o):(o===Sa&&!e.offsetParent&&e!==_s&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,_s.appendChild(e)),o=Bf(e),l?r.display=l:jr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):_s.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},wu=function(e,t,n,r,o,s){var a=e._gsap,l=o||Ah(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],S=t.split(" "),M=parseFloat(S[0])||0,L=parseFloat(S[1])||0,C,A,P,w;n?l!==Sa&&(A=m*_-v*g)&&(P=M*(_/A)+L*(-g/A)+(g*b-_*p)/A,w=M*(-v/A)+L*(m/A)-(m*b-v*p)/A,M=P,L=w):(C=lm(e),M=C.x+(~S[0].indexOf("%")?M/100*C.width:M),L=C.y+(~(S[1]||S[0]).indexOf("%")?L/100*C.height:L)),r||r!==!1&&a.smooth?(p=M-c,b=L-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Jn]="0px 0px",s&&(qr(s,a,"xOrigin",c,M),qr(s,a,"yOrigin",u,L),qr(s,a,"xOffset",d,a.xOffset),qr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+L)},Ma=function(e,t){var n=e._gsap||new $p(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=ci(e,Jn)||"0",u,d,f,m,v,g,_,p,b,S,M,L,C,A,P,w,y,R,F,N,z,k,H,W,V,oe,q,ge,be,Ce,Q,J;return u=d=f=g=_=p=b=S=M=0,m=v=1,n.svg=!!(e.getCTM&&cm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),A=Ah(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),wu(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,C=n.yOrigin||0,A!==Sa&&(R=A[0],F=A[1],N=A[2],z=A[3],u=k=A[4],d=H=A[5],A.length===6?(m=Math.sqrt(R*R+F*F),v=Math.sqrt(z*z+N*N),g=R||F?$o(F,R)*wo:0,b=N||z?$o(N,z)*wo+g:0,b&&(v*=Math.abs(Math.cos(b*gs))),n.svg&&(u-=L-(L*R+C*N),d-=C-(L*F+C*z))):(J=A[6],Ce=A[7],q=A[8],ge=A[9],be=A[10],Q=A[11],u=A[12],d=A[13],f=A[14],P=$o(J,be),_=P*wo,P&&(w=Math.cos(-P),y=Math.sin(-P),W=k*w+q*y,V=H*w+ge*y,oe=J*w+be*y,q=k*-y+q*w,ge=H*-y+ge*w,be=J*-y+be*w,Q=Ce*-y+Q*w,k=W,H=V,J=oe),P=$o(-N,be),p=P*wo,P&&(w=Math.cos(-P),y=Math.sin(-P),W=R*w-q*y,V=F*w-ge*y,oe=N*w-be*y,Q=z*y+Q*w,R=W,F=V,N=oe),P=$o(F,R),g=P*wo,P&&(w=Math.cos(P),y=Math.sin(P),W=R*w+F*y,V=k*w+H*y,F=F*w-R*y,H=H*w-k*y,R=W,k=V),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=tn(Math.sqrt(R*R+F*F+N*N)),v=tn(Math.sqrt(H*H+J*J)),P=$o(k,H),b=Math.abs(P)>2e-4?P*wo:0,M=Q?1/(Q<0?-Q:Q):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hm(ci(e,Kt)),W&&e.setAttribute("transform",W))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=tn(m),n.scaleY=tn(v),n.rotation=tn(g)+a,n.rotationX=tn(_)+a,n.rotationY=tn(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=M+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Jn]=Bl(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?W_:am?fm:G_,n.uncache=0,n},Bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},yc=function(e,t,n){var r=Dn(t);return tn(parseFloat(t)+parseFloat(Jr(e,"x",n+"px",r)))+r},G_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fm(e,t)},fo="0deg",qs="0px",po=") ",fm=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,M="",L=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==fo||u!==fo)){var C=parseFloat(u)*gs,A=Math.sin(C),P=Math.cos(C),w;C=parseFloat(d)*gs,w=Math.cos(C),s=yc(b,s,A*w*-S),a=yc(b,a,-Math.sin(C)*-S),l=yc(b,l,P*w*-S+S)}_!==qs&&(M+="perspective("+_+po),(r||o)&&(M+="translate("+r+"%, "+o+"%) "),(L||s!==qs||a!==qs||l!==qs)&&(M+=l!==qs||L?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+po),c!==fo&&(M+="rotate("+c+po),u!==fo&&(M+="rotateY("+u+po),d!==fo&&(M+="rotateX("+d+po),(f!==fo||m!==fo)&&(M+="skew("+f+", "+m+po),(v!==1||g!==1)&&(M+="scale("+v+", "+g+po),b.style[Kt]=M||"translate(0, 0)"},W_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(s),M=parseFloat(a),L,C,A,P,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=gs,c*=gs,L=Math.cos(l)*d,C=Math.sin(l)*d,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=gs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,P*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),L*=w,C*=w)),L=tn(L),C=tn(C),A=tn(A),P=tn(P)):(L=d,P=f,C=A=0),(S&&!~(s+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(S=Jr(m,"x",s,"px"),M=Jr(m,"y",a,"px")),(v||g||_||p)&&(S=tn(S+v-(v*L+g*A)+_),M=tn(M+g-(v*C+g*P)+p)),(r||o)&&(w=m.getBBox(),S=tn(S+r/100*w.width),M=tn(M+o/100*w.height)),w="matrix("+L+","+C+","+A+","+P+","+S+","+M+")",m.setAttribute("transform",w),b&&(m.style[Kt]=w)},X_=function(e,t,n,r,o){var s=360,a=_n(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?wo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*If)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*If)%s-~~(c/s)*s)),e._pt=f=new jn(e._pt,t,n,r,c,A_),f.e=u,f.u="deg",e._props.push(n),f},kf=function(e,t){for(var n in t)e[n]=t[n];return e},q_=function(e,t,n){var r=kf({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Kt]=t,a=Ma(n,1),jr(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],s[Kt]=t,a=Ma(n,1),s[Kt]=c);for(l in wr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Dn(c),v=Dn(u),d=m!==v?Jr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new jn(e._pt,a,l,d,f-d,yu),e._pt.u=v||0,e._props.push(l));kf(a,r)};Kn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});zl[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return _r(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var dm={name:"css",register:Mu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,S,M,L,C,A,P,w;bh||Mu(),this.styles=this.styles||sm(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(oi[g]&&Zp(g,t,n,r,e,o)))){if(m=typeof u,v=zl[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=va(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",$r.lastIndex=0,$r.test(c)||(_=Dn(c),p=Dn(u),p?_!==p&&(c=Jr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],_n(c)&&~c.indexOf("random(")&&(c=va(c)),Dn(c+"")||c==="auto"||(c+=ui.units[g]||Dn(_r(e,g))||""),(c+"").charAt(1)==="="&&(c=_r(e,g))):c=_r(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in qi&&(g==="autoAlpha"&&(f===1&&_r(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),qr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in wr,S){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=ci(e,"perspective"),y?e.style.perspective=y:jr(e,"perspective")}d=parseFloat(u)}if(M||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),C=t.smoothOrigin!==!1&&L.smooth,M=this._pt=new jn(this._pt,a,Kt,0,1,L.renderTransform,L,0,-1),M.dep=1),g==="scale")this._pt=new jn(this._pt,L,"scaleY",L.scaleY,(b?ms(L.scaleY,b+d):d)-L.scaleY||0,yu),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Jn,0,a[Jn]),u=H_(u),L.svg?wu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&qr(this,L,"zOrigin",L.zOrigin,p),qr(this,a,g,Bl(c),Bl(u)));continue}else if(g==="svgOrigin"){wu(e,u,1,C,0,this);continue}else if(g in um){X_(this,L,g,f,b?ms(f,b+u):u);continue}else if(g==="smoothOrigin"){qr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){q_(this,u,e);continue}}else g in a||(g=Es(g)||g);if(S||(d||d===0)&&(f||f===0)&&!E_.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Dn(u)||(g in ui.units?ui.units[g]:_),_!==p&&(f=Jr(e,g,c,p)),this._pt=new jn(this._pt,S?L:a,g,f,(b?ms(f,b+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?P_:yu),this._pt.u=p||0,S&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=C_):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=R_);else if(g in a)k_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){ph(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}A&&tm(this)},render:function(e,t){if(t.tween._time||!Th())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:_r,aliases:qi,getSetter:function(e,t,n){var r=qi[t];return r&&r.indexOf(",")<0&&(t=r),t in wr&&t!==Jn&&(e._gsap.x||_r(e,"x"))?n&&Lf===n?t==="scale"?U_:I_:(Lf=n||{})&&(t==="scale"?F_:N_):e.style&&!hh(e.style[t])?D_:~t.indexOf("-")?L_:Mh(e,t)},core:{_removeProperty:jr,_getMatrix:Ah}};ei.utils.checkPrefix=Es;ei.core.getStyleSaver=sm;(function(i,e,t,n){var r=Kn(i+","+e+","+t,function(o){wr[o]=1});Kn(e,function(o){ui.units[o]="deg",um[o]=1}),qi[r[13]]=i+","+e,Kn(n,function(o){var s=o.split(":");qi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ui.units[i]="px"});ei.registerPlugin(dm);var Rh=ei.registerPlugin(dm)||ei;Rh.core.Tween;const pm=[{id:"zyrax_drive",title:"Zyrax Drive",tags:"web • three.js • r3f • interactive • 3d",url:"https://kianpk.github.io/zyrax-drive/",colorBg:"#0a0c12",colorText:"#e8ecff"},{id:"orbit_desk",title:"Orbit Desk",tags:"web • react • three.js • portfolio • 3d",url:"https://kianpk.github.io/orbit-desk/",colorBg:"#10131a",colorText:"#f0f3ff"},{id:"playfield",title:"Playfield",tags:"web • three.js • ammo.js • physics • 3d",url:"https://kianpk.github.io/playfield/",colorBg:"#0d1520",colorText:"#d9f0ff"},{id:"tradeforge",title:"TradeForge",tags:"web3 • solidity • foundry • defi",url:"https://kianpk.github.io/tradeforge/",colorBg:"#0b1210",colorText:"#c8ffd8"},{id:"velocity_arena",title:"Velocity Arena",tags:"web • vue • socket.io • multiplayer • game",url:"https://kianpk.github.io/velocity-arena/",colorBg:"#120a14",colorText:"#ffd6f0"},{id:"neon_serpent",title:"Neon Serpent",tags:"web • canvas • arcade • game",url:"https://kianpk.github.io/neon-serpent/",colorBg:"#060b12",colorText:"#9dffe8"},{id:"hexsweep",title:"Hexsweep",tags:"web • svg • puzzle • game",url:"https://kianpk.github.io/hexsweep/",colorBg:"#101018",colorText:"#e4e8ff"},{id:"brickforge",title:"Brickforge",tags:"web • canvas • arcade • particles",url:"https://kianpk.github.io/brickforge/",colorBg:"#140c0a",colorText:"#ffe0d0"},{id:"zyrax_studio",title:"Zyrax Studio",tags:"web • three.js • scroll • immersive",url:"https://kianpk.github.io/zyrax-studio/",colorBg:"#0e1016",colorText:"#f0f1fa"},{id:"server_pulse",title:"Server Pulse",tags:"web • cs2 • realtime • dashboard",url:"https://kianpk.github.io/server-pulse/",colorBg:"#0a1014",colorText:"#cde8ff"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="170",Y_=0,Hf=1,$_=2,mm=1,Z_=2,fr=3,Qr=0,Qn=1,Ln=2,Pi=0,Zr=1,Vf=2,Gf=3,Wf=4,wa=5,kn=100,K_=101,j_=102,J_=103,Q_=104,Tl=200,vi=201,eg=202,tg=203,kl=204,Hl=205,ng=206,ig=207,rg=208,og=209,sg=210,ag=211,lg=212,cg=213,ug=214,bu=0,Tu=1,Eu=2,As=3,Au=4,Ru=5,Cu=6,Pu=7,_m=0,hg=1,fg=2,Ki=0,dg=1,pg=2,mg=3,_g=4,gg=5,vg=6,xg=7,gm=300,Rs=301,Cs=302,Du=303,Lu=304,Jl=306,vs=1e3,Hn=1001,Vl=1002,cn=1003,yg=1004,Xa=1005,vt=1006,Sc=1007,Yi=1008,Di=1009,vm=1010,xm=1011,No=1012,Ph=1013,Oo=1014,$n=1015,$i=1016,Dh=1017,Lh=1018,Ps=1020,ym=35902,Sm=1021,Mm=1022,xn=1023,wm=1024,bm=1025,xs=1026,Ds=1027,Ih=1028,Uh=1029,Tm=1030,Fh=1031,Nh=1033,El=33776,Al=33777,Rl=33778,Cl=33779,Iu=35840,Uu=35841,Fu=35842,Nu=35843,Ou=36196,zu=37492,Bu=37496,ku=37808,Hu=37809,Vu=37810,Gu=37811,Wu=37812,Xu=37813,qu=37814,Yu=37815,$u=37816,Zu=37817,Ku=37818,ju=37819,Ju=37820,Qu=37821,Pl=36492,eh=36494,th=36495,Em=36283,nh=36284,ih=36285,rh=36286,Sg=3200,Mg=3201,wg=0,bg=1,nn="",Bn="srgb",Ji="srgb-linear",Ql="linear",Dt="srgb",Zo=7680,Xf=519,Tg=512,Eg=513,Ag=514,Am=515,Rg=516,Cg=517,Pg=518,Dg=519,qf=35044,Ir=35048,Yf="300 es",vr=2e3,Gl=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $f=1234567;const ca=Math.PI/180,ba=180/Math.PI;function Us(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Pn(i,e,t){return Math.max(e,Math.min(t,i))}function Oh(i,e){return(i%e+e)%e}function Lg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ig(i,e,t){return i!==e?(t-i)/(e-i):0}function ua(i,e,t){return(1-t)*i+t*e}function Ug(i,e,t,n){return ua(i,e,1-Math.exp(-t*n))}function Fg(i,e=1){return e-Math.abs(Oh(i,e*2)-e)}function Ng(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bg(i,e){return i+Math.random()*(e-i)}function kg(i){return i*(.5-Math.random())}function Hg(i){i!==void 0&&($f=i);let e=$f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*ca}function Gg(i){return i*ba}function Wg(i){return(i&i-1)===0&&i!==0}function Xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yg(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:ca,RAD2DEG:ba,generateUUID:Us,clamp:Pn,euclideanModulo:Oh,mapLinear:Lg,inverseLerp:Ig,lerp:ua,damp:Ug,pingpong:Fg,smoothstep:Ng,smootherstep:Og,randInt:zg,randFloat:Bg,randFloatSpread:kg,seededRandom:Hg,degToRad:Vg,radToDeg:Gg,isPowerOfTwo:Wg,ceilPowerOfTwo:Xg,floorPowerOfTwo:qg,setQuaternionFromProperEuler:Yg,normalize:On,denormalize:us};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,o,s,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],S=r[4],M=r[7],L=r[2],C=r[5],A=r[8];return o[0]=s*g+a*b+l*L,o[3]=s*_+a*S+l*C,o[6]=s*p+a*M+l*A,o[1]=c*g+u*b+d*L,o[4]=c*_+u*S+d*C,o[7]=c*p+u*M+d*A,o[2]=f*g+m*b+v*L,o[5]=f*_+m*S+v*C,o[8]=f*p+m*M+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new dt;function Rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){const i=Ta("canvas");return i.style.display="block",i}const Zf={};function ra(i){i in Zf||(Zf[i]=!0,console.warn(i))}function Zg(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Kg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bt={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nn?Ql:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kf=[.64,.33,.3,.6,.15,.06],jf=[.2126,.7152,.0722],Jf=[.3127,.329],Qf=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[Ji]:{primaries:Kf,whitePoint:Jf,transfer:Ql,toXYZ:Qf,fromXYZ:ed,luminanceCoefficients:jf,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:Kf,whitePoint:Jf,transfer:Dt,toXYZ:Qf,fromXYZ:ed,luminanceCoefficients:jf,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}});let Ko;class Jg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ko===void 0&&(Ko=Ta("canvas")),Ko.width=e.width,Ko.height=e.height;const n=Ko.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=yr(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qg=0;class Cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(wc(r[s].image)):o.push(wc(r[s]))}else o=wc(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0;class Sn extends Is{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=Hn,r=Hn,o=vt,s=Yi,a=xn,l=Di,c=Sn.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Us(),this.name="",this.source=new Cm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=gm;Sn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(m+1)/2,L=(p+1)/2,C=(u+f)/4,A=(d+g)/4,P=(v+_)/4;return S>M&&S>L?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=C/n,o=A/n):M>L?M<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),n=C/r,o=P/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=A/o,r=P/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends tv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pm extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nv extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,p*b);_=Math.sin(_*C)/L,a=Math.sin(a*C)/L}const M=a*b;if(l=l*_+f*M,c=c*_+m*M,u=u*_+v*M,d=d*_+g*M,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new X,td=new Vn;class Fs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,bi):bi.fromBufferAttribute(o,s),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Ya.subVectors(this.max,Ys),jo.subVectors(e.a,Ys),Jo.subVectors(e.b,Ys),Qo.subVectors(e.c,Ys),Ur.subVectors(Jo,jo),Fr.subVectors(Qo,Jo),mo.subVectors(jo,Qo);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-mo.z,mo.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,mo.z,0,-mo.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-mo.y,mo.x,0];return!Tc(t,jo,Jo,Qo,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,jo,Jo,Qo,Ya))?!1:($a.crossVectors(Ur,Fr),t=[$a.x,$a.y,$a.z],Tc(t,jo,Jo,Qo,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const or=[new X,new X,new X,new X,new X,new X,new X,new X],bi=new X,qa=new Fs,jo=new X,Jo=new X,Qo=new X,Ur=new X,Fr=new X,mo=new X,Ys=new X,Ya=new X,$a=new X,_o=new X;function Tc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){_o.fromArray(i,o);const a=r.x*Math.abs(_o.x)+r.y*Math.abs(_o.y)+r.z*Math.abs(_o.z),l=e.dot(_o),c=t.dot(_o),u=n.dot(_o);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iv=new Fs,$s=new X,Ec=new X;class zh{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iv.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($s,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Ec)),this.expandByPoint($s.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new X,Ac=new X,Za=new X,Nr=new X,Rc=new X,Ka=new X,Cc=new X;class rv{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ac.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Ac);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Za),a=Nr.dot(this.direction),l=-Nr.dot(Za),c=Nr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ac).addScaledVector(Za,f),m}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),r=sr.dot(sr)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,r,o){Rc.subVectors(t,e),Ka.subVectors(n,e),Cc.crossVectors(Rc,Ka);let s=this.direction.dot(Cc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Nr.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Nr,Ka));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(Nr));if(c<0||l+c>s)return null;const u=-a*Nr.dot(Cc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),o=1/es.setFromMatrixColumn(e,1).length(),s=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,sv)}lookAt(e,t,n){const r=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Or.crossVectors(n,ii),Or.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Or.crossVectors(n,ii)),Or.normalize(),ja.crossVectors(ii,Or),r[0]=Or.x,r[4]=ja.x,r[8]=ii.x,r[1]=Or.y,r[5]=ja.y,r[9]=ii.y,r[2]=Or.z,r[6]=ja.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],S=n[7],M=n[11],L=n[15],C=r[0],A=r[4],P=r[8],w=r[12],y=r[1],R=r[5],F=r[9],N=r[13],z=r[2],k=r[6],H=r[10],W=r[14],V=r[3],oe=r[7],q=r[11],ge=r[15];return o[0]=s*C+a*y+l*z+c*V,o[4]=s*A+a*R+l*k+c*oe,o[8]=s*P+a*F+l*H+c*q,o[12]=s*w+a*N+l*W+c*ge,o[1]=u*C+d*y+f*z+m*V,o[5]=u*A+d*R+f*k+m*oe,o[9]=u*P+d*F+f*H+m*q,o[13]=u*w+d*N+f*W+m*ge,o[2]=v*C+g*y+_*z+p*V,o[6]=v*A+g*R+_*k+p*oe,o[10]=v*P+g*F+_*H+p*q,o[14]=v*w+g*N+_*W+p*ge,o[3]=b*C+S*y+M*z+L*V,o[7]=b*A+S*R+M*k+L*oe,o[11]=b*P+S*F+M*H+L*q,o[15]=b*w+S*N+M*W+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,M=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,L=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,C=t*b+n*S+r*M+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=M*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,S=l*u,M=l*d,L=n.x,C=n.y,A=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+M)*L,r[2]=(v-S)*L,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(f+p))*C,r[6]=(_+b)*C,r[7]=0,r[8]=(v+S)*A,r[9]=(_-b)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=es.set(r[0],r[1],r[2]).length();const s=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ti.copy(this);const c=1/o,u=1/s,d=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=vr){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===vr)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Gl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=vr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===vr)v=(s+o)*d,g=-2*d;else if(a===Gl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new X,Ti=new St,ov=new X(0,0,0),sv=new X(1,1,1),Or=new X,ja=new X,ii=new X,nd=new St,id=new Vn;class mi{constructor(e=0,t=0,n=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const rd=new X,ts=new Vn,ar=new St,Ja=new X,Zs=new X,lv=new X,cv=new Vn,od=new X(1,0,0),sd=new X(0,1,0),ad=new X(0,0,1),ld={type:"added"},uv={type:"removed"},ns={type:"childadded",child:null},Pc={type:"childremoved",child:null};class hi extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new X,t=new mi,n=new Vn,r=new X(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new dt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Zs,Ja,this.up):ar.lookAt(Ja,Zs,this.up),this.quaternion.setFromRotationMatrix(ar),r&&(ar.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(ar),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uv),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}hi.DEFAULT_UP=new X(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new X,lr=new X,Dc=new X,cr=new X,is=new X,rs=new X,cd=new X,Lc=new X,Ic=new X,Uc=new X,Fc=new Bt,Nc=new Bt,Oc=new Bt;class Ci{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ei.subVectors(e,t),r.cross(Ei);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Ei.subVectors(r,t),lr.subVectors(n,t),Dc.subVectors(e,t);const s=Ei.dot(Ei),a=Ei.dot(lr),l=Ei.dot(Dc),c=lr.dot(lr),u=lr.dot(Dc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,cr.x),l.addScaledVector(s,cr.y),l.addScaledVector(a,cr.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Fc.setScalar(0),Nc.setScalar(0),Oc.setScalar(0),Fc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Fc,o.x),s.addScaledVector(Nc,o.y),s.addScaledVector(Oc,o.z),s}static isFrontFacing(e,t,n,r){return Ei.subVectors(n,t),lr.subVectors(e,t),Ei.cross(lr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Ei.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;is.subVectors(r,n),rs.subVectors(o,n),Lc.subVectors(e,n);const l=is.dot(Lc),c=rs.dot(Lc);if(l<=0&&c<=0)return t.copy(n);Ic.subVectors(e,r);const u=is.dot(Ic),d=rs.dot(Ic);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(is,s);Uc.subVectors(e,o);const m=is.dot(Uc),v=rs.dot(Uc);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(rs,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return cd.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(cd,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(is,s).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Oh(e,1),t=Pn(t,0,1),n=Pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=zc(s,o,e+1/3),this.g=zc(s,o,e),this.b=zc(s,o,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const n=Lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return bt.fromWorkingColorSpace(En.copy(this),e),Math.round(Pn(En.r*255,0,255))*65536+Math.round(Pn(En.g*255,0,255))*256+Math.round(Pn(En.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(En.copy(this),t);const n=En.r,r=En.g,o=En.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Bn){bt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,r=En.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Qa);const n=ua(zr.h,Qa.h,t),r=ua(zr.s,Qa.s,t),o=ua(zr.l,Qa.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new $e;$e.NAMES=Lm;let hv=0;class ec extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Us(),this.name="",this.blending=Zr,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Hl&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bh extends ec{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gr=fv();function fv(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function dv(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Pn(i,-65504,65504),gr.floatView[0]=i;const e=gr.uint32View[0],t=e>>23&511;return gr.baseTable[t]+((e&8388607)>>gr.shiftTable[t])}function pv(i){const e=i>>10;return gr.uint32View[0]=gr.mantissaTable[gr.offsetTable[e]+(i&1023)]+gr.exponentTable[e],gr.floatView[0]}const ud={toHalfFloat:dv,fromHalfFloat:pv},on=new X,el=new Qe;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qf,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qf&&(e.usage=this.usage),e}}class Im extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Um extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fo extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mv=0;const _i=new St,Bc=new hi,os=new X,ri=new Fs,Ks=new Fs,mn=new X;class Tr extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Um:Im)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new dt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fo(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];ri.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ri.min,Ks.min),ri.expandByPoint(mn),mn.addVectors(ri.max,Ks.max),ri.expandByPoint(mn)):(ri.expandByPoint(Ks.min),ri.expandByPoint(Ks.max))}ri.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)mn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(mn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),mn.add(os)),r=Math.max(r,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new X,l[P]=new X;const c=new X,u=new X,d=new X,f=new Qe,m=new Qe,v=new Qe,g=new X,_=new X;function p(P,w,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,w),v.fromBufferAttribute(o,y),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(R),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),a[P].add(g),a[w].add(g),a[y].add(g),l[P].add(_),l[w].add(_),l[y].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,w=b.length;P<w;++P){const y=b[P],R=y.start,F=y.count;for(let N=R,z=R+F;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new X,M=new X,L=new X,C=new X;function A(P){L.fromBufferAttribute(r,P),C.copy(L);const w=a[P];S.copy(w),S.sub(L.multiplyScalar(L.dot(w))).normalize(),M.crossVectors(C,w);const R=M.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,w=b.length;P<w;++P){const y=b[P],R=y.start,F=y.count;for(let N=R,z=R+F;N<z;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new X,o=new X,s=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Jt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hd=new St,go=new rv,tl=new zh,fd=new X,nl=new X,il=new X,rl=new X,kc=new X,ol=new X,dd=new X,sl=new X;class Nt extends hi{constructor(e=new Tr,t=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ol.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(kc.fromBufferAttribute(d,e),s?ol.addScaledVector(kc,u):ol.addScaledVector(kc.sub(t),u))}t.add(ol)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(o),go.copy(e.ray).recast(e.near),!(tl.containsPoint(go.origin)===!1&&(go.intersectSphere(tl,fd)===null||go.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(hd.copy(o).invert(),go.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&go.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=a.getX(M),A=a.getX(M+1),P=a.getX(M+2);r=al(this,p,e,n,c,u,d,C,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);r=al(this,s,e,n,c,u,d,b,S,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=M,A=M+1,P=M+2;r=al(this,p,e,n,c,u,d,C,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,S=_+1,M=_+2;r=al(this,s,e,n,c,u,d,b,S,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function _v(i,e,t,n,r,o,s,a){let l;if(e.side===Qn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Qr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:i}}function al(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,rl);const u=_v(i,e,t,n,nl,il,rl,dd);if(u){const d=new X;Ci.getBarycoord(dd,nl,il,rl,d),r&&(u.uv=Ci.getInterpolatedAttribute(r,a,l,c,d,new Qe)),o&&(u.uv1=Ci.getInterpolatedAttribute(o,a,l,c,d,new Qe)),s&&(u.normal=Ci.getInterpolatedAttribute(s,a,l,c,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Ci.getNormal(nl,il,rl,f.normal),u.face=f,u.barycoord=d}return u}class Aa extends Tr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Fo(c,3)),this.setAttribute("normal",new Fo(u,3)),this.setAttribute("uv",new Fo(d,2));function v(g,_,p,b,S,M,L,C,A,P,w){const y=M/A,R=L/P,F=M/2,N=L/2,z=C/2,k=A+1,H=P+1;let W=0,V=0;const oe=new X;for(let q=0;q<H;q++){const ge=q*R-N;for(let be=0;be<k;be++){const Ce=be*y-F;oe[g]=Ce*b,oe[_]=ge*S,oe[p]=z,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[_]=0,oe[p]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(be/A),d.push(1-q/P),W+=1}}for(let q=0;q<P;q++)for(let ge=0;ge<A;ge++){const be=f+ge+k*q,Ce=f+ge+k*(q+1),Q=f+(ge+1)+k*(q+1),J=f+(ge+1)+k*q;l.push(be,Ce,J),l.push(Ce,Q,J),V+=6}a.addGroup(m,V,w),m+=V,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const n=Ls(i[t]);for(const r in n)e[r]=n[r]}return e}function gv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const vv={clone:Ls,merge:zn};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends ec{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nm extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new X,pd=new Qe,md=new Qe;class qn extends Nm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,pd,md),t.subVectors(md,pd)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,as=1;class Sv extends hi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(ss,as,e,t);r.layers=this.layers,this.add(r);const o=new qn(ss,as,e,t);o.layers=this.layers,this.add(o);const s=new qn(ss,as,e,t);s.layers=this.layers,this.add(s);const a=new qn(ss,as,e,t);a.layers=this.layers,this.add(a);const l=new qn(ss,as,e,t);l.layers=this.layers,this.add(l);const c=new qn(ss,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===vr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Om extends Sn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mv extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Om(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Aa(5,5,5),o=new Rt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Pi});o.uniforms.tEquirect.value=t;const s=new Nt(r,o),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=vt),new Sv(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Hc=new X,wv=new X,bv=new dt;class bo{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hc.subVectors(n,t).cross(wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bv.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vo=new zh,ll=new X;class zm{constructor(e=new bo,t=new bo,n=new bo,r=new bo,o=new bo,s=new bo){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],S=r[14],M=r[15];if(n[0].setComponents(l-o,f-c,_-m,M-p).normalize(),n[1].setComponents(l+o,f+c,_+m,M+p).normalize(),n[2].setComponents(l+s,f+u,_+v,M+b).normalize(),n[3].setComponents(l-s,f-u,_-v,M-b).normalize(),n[4].setComponents(l-a,f-d,_-g,M-S).normalize(),t===vr)n[5].setComponents(l+a,f+d,_+g,M+S).normalize();else if(t===Gl)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){return vo.center.set(0,0,0),vo.radius=.7071067811865476,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Tv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class fi extends Tr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let S=0;S<c;S++){const M=S*d-o;v.push(M,-b,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,M=b+c*(p+1),L=b+1+c*(p+1),C=b+1+c*p;m.push(S,M,C),m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new Fo(v,3)),this.setAttribute("normal",new Fo(g,3)),this.setAttribute("uv",new Fo(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Av=`#ifdef USE_ALPHAHASH
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
#endif`,Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
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
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uv=`#ifdef USE_BATCHING
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
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
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
#endif`,kv=`#ifdef USE_BUMPMAP
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zv=`#define PI 3.141592653589793
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
} // validated`,Kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,bx=`struct PhysicalMaterial {
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
}`,Tx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,z1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,j1=`#define TOON
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
}`,J1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ev,alphahash_pars_fragment:Av,alphamap_fragment:Rv,alphamap_pars_fragment:Cv,alphatest_fragment:Pv,alphatest_pars_fragment:Dv,aomap_fragment:Lv,aomap_pars_fragment:Iv,batching_pars_vertex:Uv,batching_vertex:Fv,begin_vertex:Nv,beginnormal_vertex:Ov,bsdfs:zv,iridescence_fragment:Bv,bumpmap_pars_fragment:kv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:Vv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Wv,color_fragment:Xv,color_pars_fragment:qv,color_pars_vertex:Yv,color_vertex:$v,common:Zv,cube_uv_reflection_fragment:Kv,defaultnormal_vertex:jv,displacementmap_pars_vertex:Jv,displacementmap_vertex:Qv,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:ox,envmap_pars_fragment:sx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:_x,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Mx,lights_physical_fragment:wx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:Ex,lights_fragment_end:Ax,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Dx,map_fragment:Lx,map_pars_fragment:Ix,map_particle_fragment:Ux,map_particle_pars_fragment:Fx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:zx,morphcolor_vertex:Bx,morphnormal_vertex:kx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:e1,premultiplied_alpha_fragment:t1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:r1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:l1,shadowmap_vertex:c1,shadowmask_pars_fragment:u1,skinbase_vertex:h1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:_1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:y1,uv_pars_fragment:S1,uv_pars_vertex:M1,uv_vertex:w1,worldpos_vertex:b1,background_vert:T1,background_frag:E1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:P1,depth_vert:D1,depth_frag:L1,distanceRGBA_vert:I1,distanceRGBA_frag:U1,equirect_vert:F1,equirect_frag:N1,linedashed_vert:O1,linedashed_frag:z1,meshbasic_vert:B1,meshbasic_frag:k1,meshlambert_vert:H1,meshlambert_frag:V1,meshmatcap_vert:G1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:q1,meshphong_vert:Y1,meshphong_frag:$1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:j1,meshtoon_frag:J1,points_vert:Q1,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:ry},ke={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Wi={basic:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $e(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:zn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:zn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new $e(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:zn([ke.points,ke.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:zn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:zn([ke.common,ke.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:zn([ke.sprite,ke.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:zn([ke.common,ke.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:zn([ke.lights,ke.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Wi.physical={uniforms:zn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const cl={r:0,b:0,g:0},xo=new mi,oy=new St;function sy(i,e,t,n,r,o,s){const a=new $e(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const M=v(b);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const M=v(S);M&&(M.isCubeTexture||M.mapping===Jl)?(u===void 0&&(u=new Nt(new Aa(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ls(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xo.copy(S.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(xo)),u.material.toneMapped=bt.getTransfer(M.colorSpace)!==Dt,(d!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Nt(new fi(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ls(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=bt.getTransfer(M.colorSpace)!==Dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(cl,Fm(i)),n.buffers.color.setClear(cl.r,cl.g,cl.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function ay(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(y,R,F,N,z){let k=!1;const H=d(N,F,R);o!==H&&(o=H,c(o.object)),k=m(y,N,F,z),k&&v(y,N,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,M(y,R,F,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,F){const N=F.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let k=z[R.id];k===void 0&&(k={},z[R.id]=k);let H=k[N];return H===void 0&&(H=f(l()),k[N]=H),H}function f(y){const R=[],F=[],N=[];for(let z=0;z<t;z++)R[z]=0,F[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,R,F,N){const z=o.attributes,k=R.attributes;let H=0;const W=F.getAttributes();for(const V in W)if(W[V].location>=0){const q=z[V];let ge=k[V];if(ge===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),q===void 0||q.attribute!==ge||ge&&q.data!==ge.data)return!0;H++}return o.attributesNum!==H||o.index!==N}function v(y,R,F,N){const z={},k=R.attributes;let H=0;const W=F.getAttributes();for(const V in W)if(W[V].location>=0){let q=k[V];q===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const ge={};ge.attribute=q,q&&q.data&&(ge.data=q.data),z[V]=ge,H++}o.attributes=z,o.attributesNum=H,o.index=N}function g(){const y=o.newAttributes;for(let R=0,F=y.length;R<F;R++)y[R]=0}function _(y){p(y,0)}function p(y,R){const F=o.newAttributes,N=o.enabledAttributes,z=o.attributeDivisors;F[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),z[y]!==R&&(i.vertexAttribDivisor(y,R),z[y]=R)}function b(){const y=o.newAttributes,R=o.enabledAttributes;for(let F=0,N=R.length;F<N;F++)R[F]!==y[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function S(y,R,F,N,z,k,H){H===!0?i.vertexAttribIPointer(y,R,F,z,k):i.vertexAttribPointer(y,R,F,N,z,k)}function M(y,R,F,N){g();const z=N.attributes,k=F.getAttributes(),H=R.defaultAttributeValues;for(const W in k){const V=k[W];if(V.location>=0){let oe=z[W];if(oe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const q=oe.normalized,ge=oe.itemSize,be=e.get(oe);if(be===void 0)continue;const Ce=be.buffer,Q=be.type,J=be.bytesPerElement,ce=Q===i.INT||Q===i.UNSIGNED_INT||oe.gpuType===Ph;if(oe.isInterleavedBufferAttribute){const se=oe.data,ye=se.stride,De=oe.offset;if(se.isInstancedInterleavedBuffer){for(let Xe=0;Xe<V.locationSize;Xe++)p(V.location+Xe,se.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Xe=0;Xe<V.locationSize;Xe++)_(V.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Xe=0;Xe<V.locationSize;Xe++)S(V.location+Xe,ge/V.locationSize,Q,q,ye*J,(De+ge/V.locationSize*Xe)*J,ce)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<V.locationSize;se++)_(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let se=0;se<V.locationSize;se++)S(V.location+se,ge/V.locationSize,Q,q,ge*J,ge/V.locationSize*se*J,ce)}}else if(H!==void 0){const q=H[W];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(V.location,q);break;case 3:i.vertexAttrib3fv(V.location,q);break;case 4:i.vertexAttrib4fv(V.location,q);break;default:i.vertexAttrib1fv(V.location,q)}}}}b()}function L(){P();for(const y in n){const R=n[y];for(const F in R){const N=R[F];for(const z in N)u(N[z].object),delete N[z];delete R[F]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const F in R){const N=R[F];for(const z in N)u(N[z].object),delete N[z];delete R[F]}delete n[y.id]}function A(y){for(const R in n){const F=n[R];if(F[y.id]===void 0)continue;const N=F[y.id];for(const z in N)u(N[z].object),delete N[z];delete F[y.id]}}function P(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function ly(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cy(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function uy(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new bo,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,S=b*4;let M=p.clippingState||null;l.value=M,M=u(v,f,S,m);for(let L=0;L!==S;++L)M[L]=t[L];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,M=m;S!==g;++S,M+=4)s.copy(d[S]).applyMatrix4(b,a),s.normal.toArray(_,M),_[M+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function hy(i){let e=new WeakMap;function t(s,a){return a===Du?s.mapping=Rs:a===Lu&&(s.mapping=Cs),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Du||a===Lu)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Mv(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class tc extends Nm{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,_d=[.125,.215,.35,.446,.526,.582],Ao=20,Vc=new tc,gd=new $e;let Gc=null,Wc=0,Xc=0,qc=!1;const To=(1+Math.sqrt(5))/2,ls=1/To,vd=[new X(-To,ls,0),new X(To,ls,0),new X(-ls,0,To),new X(ls,0,To),new X(0,To,-ls),new X(0,To,ls),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:$i,format:xn,colorSpace:Ji,depthBuffer:!1},r=yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fy(o)),this._blurMaterial=dy(o,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,r){const a=new qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gd),u.toneMapping=Ki,u.autoClear=!1;const m=new Bh({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),v=new Nt(new Aa,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(gd),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;ul(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Rs||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Nt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=vd[(r-o-1)%vd.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ao-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):Ao;_>Ao&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ao}`);const p=[];let b=0;for(let A=0;A<Ao;++A){const P=A/g,w=Math.exp(-P*P/2);p.push(w),A===0?b+=w:A<_&&(b+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const M=this._sizeLods[r],L=3*M*(r>S-ds?r-S+ds:0),C=4*(this._cubeSize-M);ul(t,L,C,3*M,2*M),l.setRenderTarget(t),l.render(d,Vc)}}function fy(i){const e=[],t=[],n=[];let r=i;const o=i-ds+1+_d.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-ds?l=_d[s-i+ds-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),S=new Float32Array(_*v*m),M=new Float32Array(p*v*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,P=C>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(w,g*v*C),S.set(f,_*v*C);const y=[C,C,C,C,C,C];M.set(y,p*v*C)}const L=new Tr;L.setAttribute("position",new Jt(b,g)),L.setAttribute("uv",new Jt(S,_)),L.setAttribute("faceIndex",new Jt(M,p)),e.push(L),r>ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yd(i,e,t){const n=new br(i,e,t);return n.texture.mapping=Jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ul(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dy(i,e,t){const n=new Float32Array(Ao),r=new X(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Sd(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Md(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function py(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Du||l===Lu,u=l===Rs||l===Cs;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new xd(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xd(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function my(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ra("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _y(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let S=0,M=b.length;S<M;S+=3){const L=b[S+0],C=b[S+1],A=b[S+2];f.push(L,C,C,A,A,L)}}else if(v!==void 0){const b=v.array;g=v.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const L=S+0,C=S+1,A=S+2;f.push(L,C,C,A,A,L)}}else return;const _=new(Rm(f)?Um:Im)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function gy(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function vy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xy(i,e,t){const n=new WeakMap,r=new Bt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let L=a.attributes.position.count*M,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*d),P=new Pm(A,L,C,d);P.type=$n,P.needsUpdate=!0;const w=M*4;for(let R=0;R<d;R++){const F=p[R],N=b[R],z=S[R],k=L*C*4*R;for(let H=0;H<F.count;H++){const W=H*w;v===!0&&(r.fromBufferAttribute(F,H),A[k+W+0]=r.x,A[k+W+1]=r.y,A[k+W+2]=r.z,A[k+W+3]=0),g===!0&&(r.fromBufferAttribute(N,H),A[k+W+4]=r.x,A[k+W+5]=r.y,A[k+W+6]=r.z,A[k+W+7]=0),_===!0&&(r.fromBufferAttribute(z,H),A[k+W+8]=r.x,A[k+W+9]=r.y,A[k+W+10]=r.z,A[k+W+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Qe(L,C)},n.set(a,f),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function yy(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class Wl extends Sn{constructor(e,t,n,r,o,s,a,l,c,u=xs){if(u!==xs&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Oo),n===void 0&&u===Ds&&(n=Ps),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const km=new Sn,wd=new Wl(1,1),Hm=new Pm,Vm=new nv,Gm=new Om,bd=[],Td=[],Ed=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=bd[r];if(o===void 0&&(o=new Float32Array(r),bd[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=Td[e];t===void 0&&(t=new Int32Array(e),Td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),hn(t,n)}}function Ey(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),hn(t,n)}}function Ay(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Ed.set(n),i.uniformMatrix4fv(this.addr,!1,Ed),hn(t,n)}}function Ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function Ly(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function Fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function Ny(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(wd.compareFunction=Am,o=wd):o=km,t.setTexture2D(e||o,r)}function Oy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vm,r)}function zy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gm,r)}function By(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hm,r)}function ky(i){switch(i){case 5126:return Sy;case 35664:return My;case 35665:return wy;case 35666:return by;case 35674:return Ty;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Dy;case 5125:return Ly;case 36294:return Iy;case 36295:return Uy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return By}}function Hy(i,e){i.uniform1fv(this.addr,e)}function Vy(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Gy(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Wy(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Xy(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qy(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yy(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $y(i,e){i.uniform1iv(this.addr,e)}function Zy(i,e){i.uniform2iv(this.addr,e)}function Ky(i,e){i.uniform3iv(this.addr,e)}function jy(i,e){i.uniform4iv(this.addr,e)}function Jy(i,e){i.uniform1uiv(this.addr,e)}function Qy(i,e){i.uniform2uiv(this.addr,e)}function eS(i,e){i.uniform3uiv(this.addr,e)}function tS(i,e){i.uniform4uiv(this.addr,e)}function nS(i,e,t){const n=this.cache,r=e.length,o=nc(t,r);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||km,o[s])}function iS(i,e,t){const n=this.cache,r=e.length,o=nc(t,r);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Vm,o[s])}function rS(i,e,t){const n=this.cache,r=e.length,o=nc(t,r);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Gm,o[s])}function oS(i,e,t){const n=this.cache,r=e.length,o=nc(t,r);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Hm,o[s])}function sS(i){switch(i){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return $y;case 35667:case 35671:return Zy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Jy;case 36294:return Qy;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}class aS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class cS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Cd(i,e){i.seq.push(e),i.map[e.id]=e}function uS(i,e,t){const n=i.name,r=n.length;for(Yc.lastIndex=0;;){const o=Yc.exec(n),s=Yc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Cd(t,c===void 0?new aS(a,i,e):new lS(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new cS(a),Cd(t,d)),t=d}}}class Dl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);uS(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Pd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hS=37297;let fS=0;function dS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Dd=new dt;function pS(i){bt._getMatrix(Dd,bt.workingColorSpace,i);const e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Ql:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ld(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dS(i.getShaderSource(e),s)}else return r}function mS(i,e){const t=pS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _S(i,e){let t;switch(e){case dg:t="Linear";break;case pg:t="Reinhard";break;case mg:t="Cineon";break;case _g:t="ACESFilmic";break;case vg:t="AgX";break;case xg:t="Neutral";break;case gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hl=new X;function gS(){bt.getLuminanceCoefficients(hl);const i=hl.x.toFixed(4),e=hl.y.toFixed(4),t=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function xS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function oa(i){return i!==""}function Id(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(SS,wS)}const MS=new Map;function wS(i,e){let t=mt[e];if(t===void 0){const n=MS.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oh(t)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(i){return i.replace(bS,TS)}function TS(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ES(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _m:e="ENVMAP_BLENDING_MULTIPLY";break;case hg:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function PS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function DS(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=ES(t),c=AS(t),u=RS(t),d=CS(t),f=PS(t),m=vS(t),v=xS(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(oa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(_=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),s=oh(s),s=Id(s,t),s=Ud(s,t),a=oh(a),a=Id(a,t),a=Ud(a,t),s=Fd(s),a=Fd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+_+s,M=b+p+a,L=Pd(r,r.VERTEX_SHADER,S),C=Pd(r,r.FRAGMENT_SHADER,M);r.attachShader(g,L),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(R){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(C).trim();let k=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,C);else{const W=Ld(r,L,"vertex"),V=Ld(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+W+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||z==="")&&(H=!1);H&&(R.diagnostics={runnable:k,programLog:F,vertexShader:{log:N,prefix:_},fragmentShader:{log:z,prefix:p}})}r.deleteShader(L),r.deleteShader(C),P=new Dl(r,g),w=yS(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,hS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=C,this}let LS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new US(e),t.set(e,n)),n}}class US{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}}function FS(i,e,t,n,r,o,s){const a=new Dm,l=new IS,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,y,R,F,N){const z=F.fog,k=N.geometry,H=w.isMeshStandardMaterial?F.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),V=W&&W.mapping===Jl?W.image.height:null,oe=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ge=q!==void 0?q.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let Ce,Q,J,ce;if(oe){const ft=Wi[oe];Ce=ft.vertexShader,Q=ft.fragmentShader}else Ce=w.vertexShader,Q=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Xe=N.isBatchedMesh===!0,Je=!!w.map,He=!!w.matcap,tt=!!W,B=!!w.aoMap,Pe=!!w.lightMap,Fe=!!w.bumpMap,Ke=!!w.normalMap,qe=!!w.displacementMap,et=!!w.emissiveMap,we=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,$=w.clearcoat>0,Y=w.dispersion>0,re=w.iridescence>0,ee=w.sheen>0,Ee=w.transmission>0,pe=T&&!!w.anisotropyMap,de=$&&!!w.clearcoatMap,Ge=$&&!!w.clearcoatNormalMap,me=$&&!!w.clearcoatRoughnessMap,xe=re&&!!w.iridescenceMap,Ae=re&&!!w.iridescenceThicknessMap,Ue=ee&&!!w.sheenColorMap,ue=ee&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Be=!!w.specularColorMap,nt=!!w.specularIntensityMap,G=Ee&&!!w.transmissionMap,ne=Ee&&!!w.thicknessMap,ie=!!w.gradientMap,he=!!w.alphaMap,Oe=w.alphaTest>0,ze=!!w.alphaHash,ot=!!w.extensions;let Et=Ki;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Et=i.toneMapping);const jt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:Q,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Xe,batchingColor:Xe&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ji,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:He,envMap:tt,envMapMode:tt&&W.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Pe,bumpMap:Fe,normalMap:Ke,displacementMap:f&&qe,emissiveMap:et,normalMapObjectSpace:Ke&&w.normalMapType===bg,normalMapTangentSpace:Ke&&w.normalMapType===wg,metalnessMap:we,roughnessMap:U,anisotropy:T,anisotropyMap:pe,clearcoat:$,clearcoatMap:de,clearcoatNormalMap:Ge,clearcoatRoughnessMap:me,dispersion:Y,iridescence:re,iridescenceMap:xe,iridescenceThicknessMap:Ae,sheen:ee,sheenColorMap:Ue,sheenRoughnessMap:ue,specularMap:Ne,specularColorMap:Be,specularIntensityMap:nt,transmission:Ee,transmissionMap:G,thicknessMap:ne,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Zr&&w.alphaToCoverage===!1,alphaMap:he,alphaTest:Oe,alphaHash:ze,combine:w.combine,mapUv:Je&&g(w.map.channel),aoMapUv:B&&g(w.aoMap.channel),lightMapUv:Pe&&g(w.lightMap.channel),bumpMapUv:Fe&&g(w.bumpMap.channel),normalMapUv:Ke&&g(w.normalMap.channel),displacementMapUv:qe&&g(w.displacementMap.channel),emissiveMapUv:et&&g(w.emissiveMap.channel),metalnessMapUv:we&&g(w.metalnessMap.channel),roughnessMapUv:U&&g(w.roughnessMap.channel),anisotropyMapUv:pe&&g(w.anisotropyMap.channel),clearcoatMapUv:de&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(w.sheenRoughnessMap.channel),specularMapUv:Ne&&g(w.specularMap.channel),specularColorMapUv:Be&&g(w.specularColorMap.channel),specularIntensityMapUv:nt&&g(w.specularIntensityMap.channel),transmissionMapUv:G&&g(w.transmissionMap.channel),thicknessMapUv:ne&&g(w.thicknessMap.channel),alphaMapUv:he&&g(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ke||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Je||he),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:et&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ln,flipSided:w.side===Qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ot&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&w.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)y.push(R),y.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(b(y,w),S(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const y=v[w.type];let R;if(y){const F=Wi[y];R=vv.clone(F.uniforms)}else R=w.uniforms;return R}function L(w,y){let R;for(let F=0,N=u.length;F<N;F++){const z=u[F];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new DS(i,y,w,o),u.push(R)),R}function C(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function NS(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function OS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||OS),n.length>1&&n.sort(f||Od),r.length>1&&r.sort(f||Od)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function zS(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new zd,i.set(n,[s])):r>=o.length?(s=new zd,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function BS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new $e};break;case"SpotLight":t={position:new X,direction:new X,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let HS=0;function VS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GS(i){const e=new BS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,o=new St,s=new St;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,S=0,M=0,L=0,C=0,A=0;c.sort(VS);for(let w=0,y=c.length;w<y;w++){const R=c[w],F=R.color,N=R.intensity,z=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);A++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,V=t.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=H,m++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(N),H.distance=z,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[g]=H;const W=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,W.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=W.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=k,M++}g++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(F).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=H,_++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const W=R.shadow,V=t.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=R.shadow.matrix,S++}n.point[v]=H,v++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=A,n.version=HS++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(S.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Bd(i){const e=new GS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function WS(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Bd(i),e.set(r,[a])):o>=s.length?(a=new Bd(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class XS extends ec{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qS extends ec{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`;function ZS(i,e,t){let n=new zm;const r=new Qe,o=new Qe,s=new Bt,a=new XS({depthPacking:Mg}),l=new qS,c={},u=t.maxTextureSize,d={[Qr]:Qn,[Qn]:Qr,[Ln]:Ln},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:YS,fragmentShader:$S}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Tr;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mm;let p=this.type;this.render=function(C,A,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Pi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==fr&&this.type===fr,z=p===fr&&this.type!==fr;for(let k=0,H=C.length;k<H;k++){const W=C[k],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const oe=V.getFrameExtents();if(r.multiply(oe),o.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/oe.x),r.x=o.x*oe.x,V.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/oe.y),r.y=o.y*oe.y,V.mapSize.y=o.y)),V.map===null||N===!0||z===!0){const ge=this.type!==fr?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new br(r.x,r.y,ge),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const q=V.getViewportCount();for(let ge=0;ge<q;ge++){const be=V.getViewport(ge);s.set(o.x*be.x,o.y*be.y,o.x*be.z,o.y*be.w),F.viewport(s),V.updateMatrices(W,ge),n=V.getFrustum(),M(A,P,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===fr&&b(V,P),V.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,y,R)};function b(C,A){const P=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new br(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,P,m,g,null)}function S(C,A,P,w){let y=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=y.uuid,N=A.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let k=z[N];k===void 0&&(k=y.clone(),z[N]=k,A.addEventListener("dispose",L)),y=k}if(y.visible=A.visible,y.wireframe=A.wireframe,w===fr?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=P}return y}function M(C,A,P,w,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===fr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const N=e.update(C),z=C.material;if(Array.isArray(z)){const k=N.groups;for(let H=0,W=k.length;H<W;H++){const V=k[H],oe=z[V.materialIndex];if(oe&&oe.visible){const q=S(C,oe,w,y);C.onBeforeShadow(i,C,A,P,N,q,V),i.renderBufferDirect(P,null,N,q,C,V),C.onAfterShadow(i,C,A,P,N,q,V)}}}else if(z.visible){const k=S(C,z,w,y);C.onBeforeShadow(i,C,A,P,N,k,null),i.renderBufferDirect(P,null,N,k,C,null),C.onAfterShadow(i,C,A,P,N,k,null)}}const F=C.children;for(let N=0,z=F.length;N<z;N++)M(F[N],A,P,w,y)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const w=c[P],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const KS={[bu]:Tu,[Eu]:Cu,[Au]:Pu,[As]:Ru,[Tu]:bu,[Cu]:Eu,[Pu]:Au,[Ru]:As};function jS(i,e){function t(){let G=!1;const ne=new Bt;let ie=null;const he=new Bt(0,0,0,0);return{setMask:function(Oe){ie!==Oe&&!G&&(i.colorMask(Oe,Oe,Oe,Oe),ie=Oe)},setLocked:function(Oe){G=Oe},setClear:function(Oe,ze,ot,Et,jt){jt===!0&&(Oe*=Et,ze*=Et,ot*=Et),ne.set(Oe,ze,ot,Et),he.equals(ne)===!1&&(i.clearColor(Oe,ze,ot,Et),he.copy(ne))},reset:function(){G=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let G=!1,ne=!1,ie=null,he=null,Oe=null;return{setReversed:function(ze){if(ne!==ze){const ot=e.get("EXT_clip_control");ne?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Et=Oe;Oe=null,this.setClear(Et)}ne=ze},getReversed:function(){return ne},setTest:function(ze){ze?se(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ze){ie!==ze&&!G&&(i.depthMask(ze),ie=ze)},setFunc:function(ze){if(ne&&(ze=KS[ze]),he!==ze){switch(ze){case bu:i.depthFunc(i.NEVER);break;case Tu:i.depthFunc(i.ALWAYS);break;case Eu:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Au:i.depthFunc(i.EQUAL);break;case Ru:i.depthFunc(i.GEQUAL);break;case Cu:i.depthFunc(i.GREATER);break;case Pu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ze}},setLocked:function(ze){G=ze},setClear:function(ze){Oe!==ze&&(ne&&(ze=1-ze),i.clearDepth(ze),Oe=ze)},reset:function(){G=!1,ie=null,he=null,Oe=null,ne=!1}}}function r(){let G=!1,ne=null,ie=null,he=null,Oe=null,ze=null,ot=null,Et=null,jt=null;return{setTest:function(ft){G||(ft?se(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ft){ne!==ft&&!G&&(i.stencilMask(ft),ne=ft)},setFunc:function(ft,It,Un){(ie!==ft||he!==It||Oe!==Un)&&(i.stencilFunc(ft,It,Un),ie=ft,he=It,Oe=Un)},setOp:function(ft,It,Un){(ze!==ft||ot!==It||Et!==Un)&&(i.stencilOp(ft,It,Un),ze=ft,ot=It,Et=Un)},setLocked:function(ft){G=ft},setClear:function(ft){jt!==ft&&(i.clearStencil(ft),jt=ft)},reset:function(){G=!1,ne=null,ie=null,he=null,Oe=null,ze=null,ot=null,Et=null,jt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,M=null,L=null,C=null,A=new $e(0,0,0),P=0,w=!1,y=null,R=null,F=null,N=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=W>=2);let oe=null,q={};const ge=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ce=new Bt().fromArray(ge),Q=new Bt().fromArray(be);function J(G,ne,ie,he){const Oe=new Uint8Array(4),ze=i.createTexture();i.bindTexture(G,ze),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ie;ot++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ne+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ze}const ce={};ce[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(i.DEPTH_TEST),s.setFunc(As),Fe(!1),Ke(Hf),se(i.CULL_FACE),B(Pi);function se(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function ye(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function De(G,ne){return d[G]!==ne?(i.bindFramebuffer(G,ne),d[G]=ne,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Xe(G,ne){let ie=m,he=!1;if(G){ie=f.get(ne),ie===void 0&&(ie=[],f.set(ne,ie));const Oe=G.textures;if(ie.length!==Oe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,ot=Oe.length;ze<ot;ze++)ie[ze]=i.COLOR_ATTACHMENT0+ze;ie.length=Oe.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function Je(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const He={[kn]:i.FUNC_ADD,[K_]:i.FUNC_SUBTRACT,[j_]:i.FUNC_REVERSE_SUBTRACT};He[J_]=i.MIN,He[Q_]=i.MAX;const tt={[Tl]:i.ZERO,[vi]:i.ONE,[eg]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[sg]:i.SRC_ALPHA_SATURATE,[rg]:i.DST_COLOR,[ng]:i.DST_ALPHA,[tg]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[og]:i.ONE_MINUS_DST_COLOR,[ig]:i.ONE_MINUS_DST_ALPHA,[ag]:i.CONSTANT_COLOR,[lg]:i.ONE_MINUS_CONSTANT_COLOR,[cg]:i.CONSTANT_ALPHA,[ug]:i.ONE_MINUS_CONSTANT_ALPHA};function B(G,ne,ie,he,Oe,ze,ot,Et,jt,ft){if(G===Pi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),G!==wa){if(G!==_||ft!==w){if((p!==kn||M!==kn)&&(i.blendEquation(i.FUNC_ADD),p=kn,M=kn),ft)switch(G){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vf:i.blendFunc(i.ONE,i.ONE);break;case Gf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,S=null,L=null,C=null,A.set(0,0,0),P=0,_=G,w=ft}return}Oe=Oe||ne,ze=ze||ie,ot=ot||he,(ne!==p||Oe!==M)&&(i.blendEquationSeparate(He[ne],He[Oe]),p=ne,M=Oe),(ie!==b||he!==S||ze!==L||ot!==C)&&(i.blendFuncSeparate(tt[ie],tt[he],tt[ze],tt[ot]),b=ie,S=he,L=ze,C=ot),(Et.equals(A)===!1||jt!==P)&&(i.blendColor(Et.r,Et.g,Et.b,jt),A.copy(Et),P=jt),_=G,w=!1}function Pe(G,ne){G.side===Ln?ye(i.CULL_FACE):se(i.CULL_FACE);let ie=G.side===Qn;ne&&(ie=!ie),Fe(ie),G.blending===Zr&&G.transparent===!1?B(Pi):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),o.setMask(G.colorWrite);const he=G.stencilWrite;a.setTest(he),he&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),et(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(G){y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),y=G)}function Ke(G){G!==Y_?(se(i.CULL_FACE),G!==R&&(G===Hf?i.cullFace(i.BACK):G===$_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),R=G}function qe(G){G!==F&&(H&&i.lineWidth(G),F=G)}function et(G,ne,ie){G?(se(i.POLYGON_OFFSET_FILL),(N!==ne||z!==ie)&&(i.polygonOffset(ne,ie),N=ne,z=ie)):ye(i.POLYGON_OFFSET_FILL)}function we(G){G?se(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+k-1),oe!==G&&(i.activeTexture(G),oe=G)}function T(G,ne,ie){ie===void 0&&(oe===null?ie=i.TEXTURE0+k-1:ie=oe);let he=q[ie];he===void 0&&(he={type:void 0,texture:void 0},q[ie]=he),(he.type!==G||he.texture!==ne)&&(oe!==ie&&(i.activeTexture(ie),oe=ie),i.bindTexture(G,ne||ce[G]),he.type=G,he.texture=ne)}function $(){const G=q[oe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(G){Ce.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function ue(G){Q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Ne(G,ne){let ie=c.get(ne);ie===void 0&&(ie=new WeakMap,c.set(ne,ie));let he=ie.get(G);he===void 0&&(he=i.getUniformBlockIndex(ne,G.name),ie.set(G,he))}function Be(G,ne){const he=c.get(ne).get(G);l.get(ne)!==he&&(i.uniformBlockBinding(ne,he,G.__bindingPointIndex),l.set(ne,he))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,q={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,M=null,L=null,C=null,A=new $e(0,0,0),P=0,w=!1,y=null,R=null,F=null,N=null,z=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:ye,bindFramebuffer:De,drawBuffers:Xe,useProgram:Je,setBlending:B,setMaterial:Pe,setFlipSided:Fe,setCullFace:Ke,setLineWidth:qe,setPolygonOffset:et,setScissorTest:we,activeTexture:U,bindTexture:T,unbindTexture:$,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:xe,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:Ge,texStorage3D:me,texSubImage2D:ee,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:de,scissor:Ue,viewport:ue,reset:nt}}function kd(i,e,t,n){const r=JS(n);switch(t){case Sm:return i*e;case wm:return i*e;case bm:return i*e*2;case Ih:return i*e/r.components*r.byteLength;case Uh:return i*e/r.components*r.byteLength;case Tm:return i*e*2/r.components*r.byteLength;case Fh:return i*e*2/r.components*r.byteLength;case Mm:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case Nh:return i*e*4/r.components*r.byteLength;case El:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Nu:return Math.max(i,16)*Math.max(e,8)/4;case Iu:case Fu:return Math.max(i,8)*Math.max(e,8)/2;case Ou:case zu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Em:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ih:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JS(i){switch(i){case Di:case vm:return{byteLength:1,components:1};case No:case xm:case $i:return{byteLength:2,components:1};case Dh:case Lh:return{byteLength:2,components:4};case Oo:case Ph:case $n:return{byteLength:4,components:1};case ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function QS(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,T){return m?new OffscreenCanvas(U,T):Ta("canvas")}function g(U,T,$){let Y=1;const re=we(U);if((re.width>$||re.height>$)&&(Y=$/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ee=Math.floor(Y*re.width),Ee=Math.floor(Y*re.height);d===void 0&&(d=v(ee,Ee));const pe=T?v(ee,Ee):d;return pe.width=ee,pe.height=Ee,pe.getContext("2d").drawImage(U,0,0,ee,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ee+")."),pe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,T,$,Y,re=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ee=T;if(T===i.RED&&($===i.FLOAT&&(ee=i.R32F),$===i.HALF_FLOAT&&(ee=i.R16F),$===i.UNSIGNED_BYTE&&(ee=i.R8)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.R8UI),$===i.UNSIGNED_SHORT&&(ee=i.R16UI),$===i.UNSIGNED_INT&&(ee=i.R32UI),$===i.BYTE&&(ee=i.R8I),$===i.SHORT&&(ee=i.R16I),$===i.INT&&(ee=i.R32I)),T===i.RG&&($===i.FLOAT&&(ee=i.RG32F),$===i.HALF_FLOAT&&(ee=i.RG16F),$===i.UNSIGNED_BYTE&&(ee=i.RG8)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RG8UI),$===i.UNSIGNED_SHORT&&(ee=i.RG16UI),$===i.UNSIGNED_INT&&(ee=i.RG32UI),$===i.BYTE&&(ee=i.RG8I),$===i.SHORT&&(ee=i.RG16I),$===i.INT&&(ee=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),$===i.UNSIGNED_INT&&(ee=i.RGB32UI),$===i.BYTE&&(ee=i.RGB8I),$===i.SHORT&&(ee=i.RGB16I),$===i.INT&&(ee=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),$===i.UNSIGNED_INT&&(ee=i.RGBA32UI),$===i.BYTE&&(ee=i.RGBA8I),$===i.SHORT&&(ee=i.RGBA16I),$===i.INT&&(ee=i.RGBA32I)),T===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),T===i.RGBA){const Ee=re?Ql:bt.getTransfer(Y);$===i.FLOAT&&(ee=i.RGBA32F),$===i.HALF_FLOAT&&(ee=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ee=Ee===Dt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(U,T){let $;return U?T===null||T===Oo||T===Ps?$=i.DEPTH24_STENCIL8:T===$n?$=i.DEPTH32F_STENCIL8:T===No&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oo||T===Ps?$=i.DEPTH_COMPONENT24:T===$n?$=i.DEPTH_COMPONENT32F:T===No&&($=i.DEPTH_COMPONENT16),$}function L(U,T){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==cn&&U.minFilter!==vt?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function C(U){const T=U.target;T.removeEventListener("dispose",C),P(T),T.isVideoTexture&&u.delete(T)}function A(U){const T=U.target;T.removeEventListener("dispose",A),y(T)}function P(U){const T=n.get(U);if(T.__webglInit===void 0)return;const $=U.source,Y=f.get($);if(Y){const re=Y[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(U),Object.keys(Y).length===0&&f.delete($)}n.remove(U)}function w(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const $=U.source,Y=f.get($);delete Y[T.__cacheKey],s.memory.textures--}function y(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let re=0;re<T.__webglFramebuffer[Y].length;re++)i.deleteFramebuffer(T.__webglFramebuffer[Y][re]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=U.textures;for(let Y=0,re=$.length;Y<re;Y++){const ee=n.get($[Y]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),n.remove($[Y])}n.remove(U)}let R=0;function F(){R=0}function N(){const U=R;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),R+=1,U}function z(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function k(U,T){const $=n.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const Y=U.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,U,T);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function H(U,T){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Q($,U,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function W(U,T){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Q($,U,T);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function V(U,T){const $=n.get(U);if(U.version>0&&$.__version!==U.version){J($,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const oe={[vs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Vl]:i.MIRRORED_REPEAT},q={[cn]:i.NEAREST,[yg]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ge={[Tg]:i.NEVER,[Dg]:i.ALWAYS,[Eg]:i.LESS,[Am]:i.LEQUAL,[Ag]:i.EQUAL,[Pg]:i.GEQUAL,[Rg]:i.GREATER,[Cg]:i.NOTEQUAL};function be(U,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vt||T.magFilter===Sc||T.magFilter===Xa||T.magFilter===Yi||T.minFilter===vt||T.minFilter===Sc||T.minFilter===Xa||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,oe[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,oe[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,oe[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,q[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Xa&&T.minFilter!==Yi||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(U,T){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",C));const Y=T.source;let re=f.get(Y);re===void 0&&(re={},f.set(Y,re));const ee=z(T);if(ee!==U.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),re[ee].usedTimes++;const Ee=re[U.__cacheKey];Ee!==void 0&&(re[U.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(T)),U.__cacheKey=ee,U.__webglTexture=re[ee].texture}return $}function Q(U,T,$){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const re=Ce(U,T),ee=T.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+$);const Ee=n.get(ee);if(ee.version!==Ee.__version||re===!0){t.activeTexture(i.TEXTURE0+$);const pe=bt.getPrimaries(bt.workingColorSpace),de=T.colorSpace===nn?null:bt.getPrimaries(T.colorSpace),Ge=T.colorSpace===nn||pe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let me=g(T.image,!1,r.maxTextureSize);me=et(T,me);const xe=o.convert(T.format,T.colorSpace),Ae=o.convert(T.type);let Ue=S(T.internalFormat,xe,Ae,T.colorSpace,T.isVideoTexture);be(Y,T);let ue;const Ne=T.mipmaps,Be=T.isVideoTexture!==!0,nt=Ee.__version===void 0||re===!0,G=ee.dataReady,ne=L(T,me);if(T.isDepthTexture)Ue=M(T.format===Ds,T.type),nt&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Ue,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,xe,Ae,null));else if(T.isDataTexture)if(Ne.length>0){Be&&nt&&t.texStorage2D(i.TEXTURE_2D,ne,Ue,Ne[0].width,Ne[0].height);for(let ie=0,he=Ne.length;ie<he;ie++)ue=Ne[ie],Be?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,xe,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ie,Ue,ue.width,ue.height,0,xe,Ae,ue.data);T.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(i.TEXTURE_2D,ne,Ue,me.width,me.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,xe,Ae,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,xe,Ae,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,Ue,Ne[0].width,Ne[0].height,me.depth);for(let ie=0,he=Ne.length;ie<he;ie++)if(ue=Ne[ie],T.format!==xn)if(xe!==null)if(Be){if(G)if(T.layerUpdates.size>0){const Oe=kd(ue.width,ue.height,T.format,T.type);for(const ze of T.layerUpdates){const ot=ue.data.subarray(ze*Oe/ue.data.BYTES_PER_ELEMENT,(ze+1)*Oe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ze,ue.width,ue.height,1,xe,ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,me.depth,xe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Ue,ue.width,ue.height,me.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,me.depth,xe,Ae,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Ue,ue.width,ue.height,me.depth,0,xe,Ae,ue.data)}else{Be&&nt&&t.texStorage2D(i.TEXTURE_2D,ne,Ue,Ne[0].width,Ne[0].height);for(let ie=0,he=Ne.length;ie<he;ie++)ue=Ne[ie],T.format!==xn?xe!==null?Be?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Ue,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,xe,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ie,Ue,ue.width,ue.height,0,xe,Ae,ue.data)}else if(T.isDataArrayTexture)if(Be){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,Ue,me.width,me.height,me.depth),G)if(T.layerUpdates.size>0){const ie=kd(me.width,me.height,T.format,T.type);for(const he of T.layerUpdates){const Oe=me.data.subarray(he*ie/me.data.BYTES_PER_ELEMENT,(he+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,xe,Ae,Oe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(T.isData3DTexture)Be?(nt&&t.texStorage3D(i.TEXTURE_3D,ne,Ue,me.width,me.height,me.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(T.isFramebufferTexture){if(nt)if(Be)t.texStorage2D(i.TEXTURE_2D,ne,Ue,me.width,me.height);else{let ie=me.width,he=me.height;for(let Oe=0;Oe<ne;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Ue,ie,he,0,xe,Ae,null),ie>>=1,he>>=1}}else if(Ne.length>0){if(Be&&nt){const ie=we(Ne[0]);t.texStorage2D(i.TEXTURE_2D,ne,Ue,ie.width,ie.height)}for(let ie=0,he=Ne.length;ie<he;ie++)ue=Ne[ie],Be?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,xe,Ae,ue):t.texImage2D(i.TEXTURE_2D,ie,Ue,xe,Ae,ue);T.generateMipmaps=!1}else if(Be){if(nt){const ie=we(me);t.texStorage2D(i.TEXTURE_2D,ne,Ue,ie.width,ie.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ae,me)}else t.texImage2D(i.TEXTURE_2D,0,Ue,xe,Ae,me);_(T)&&p(Y),Ee.__version=ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function J(U,T,$){if(T.image.length!==6)return;const Y=Ce(U,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const ee=n.get(re);if(re.version!==ee.__version||Y===!0){t.activeTexture(i.TEXTURE0+$);const Ee=bt.getPrimaries(bt.workingColorSpace),pe=T.colorSpace===nn?null:bt.getPrimaries(T.colorSpace),de=T.colorSpace===nn||Ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let he=0;he<6;he++)!Ge&&!me?xe[he]=g(T.image[he],!0,r.maxCubemapSize):xe[he]=me?T.image[he].image:T.image[he],xe[he]=et(T,xe[he]);const Ae=xe[0],Ue=o.convert(T.format,T.colorSpace),ue=o.convert(T.type),Ne=S(T.internalFormat,Ue,ue,T.colorSpace),Be=T.isVideoTexture!==!0,nt=ee.__version===void 0||Y===!0,G=re.dataReady;let ne=L(T,Ae);be(i.TEXTURE_CUBE_MAP,T);let ie;if(Ge){Be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ne,Ae.width,Ae.height);for(let he=0;he<6;he++){ie=xe[he].mipmaps;for(let Oe=0;Oe<ie.length;Oe++){const ze=ie[Oe];T.format!==xn?Ue!==null?Be?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,0,0,ze.width,ze.height,Ue,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,Ne,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,0,0,ze.width,ze.height,Ue,ue,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,Ne,ze.width,ze.height,0,Ue,ue,ze.data)}}}else{if(ie=T.mipmaps,Be&&nt){ie.length>0&&ne++;const he=we(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ne,he.width,he.height)}for(let he=0;he<6;he++)if(me){Be?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,xe[he].width,xe[he].height,Ue,ue,xe[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ne,xe[he].width,xe[he].height,0,Ue,ue,xe[he].data);for(let Oe=0;Oe<ie.length;Oe++){const ot=ie[Oe].image[he].image;Be?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,0,0,ot.width,ot.height,Ue,ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,Ne,ot.width,ot.height,0,Ue,ue,ot.data)}}else{Be?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue,ue,xe[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ne,Ue,ue,xe[he]);for(let Oe=0;Oe<ie.length;Oe++){const ze=ie[Oe];Be?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,0,0,Ue,ue,ze.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,Ne,Ue,ue,ze.image[he])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),ee.__version=re.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ce(U,T,$,Y,re,ee){const Ee=o.convert($.format,$.colorSpace),pe=o.convert($.type),de=S($.internalFormat,Ee,pe,$.colorSpace),Ge=n.get(T),me=n.get($);if(me.__renderTarget=T,!Ge.__hasExternalTextures){const xe=Math.max(1,T.width>>ee),Ae=Math.max(1,T.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,de,xe,Ae,T.depth,0,Ee,pe,null):t.texImage2D(re,ee,de,xe,Ae,0,Ee,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,re,me.__webglTexture,0,Fe(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,re,me.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const Y=T.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,ee=M(T.stencilBuffer,re),Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Fe(T);Ke(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ee,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ee,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,U)}else{const Y=T.textures;for(let re=0;re<Y.length;re++){const ee=Y[re],Ee=o.convert(ee.format,ee.colorSpace),pe=o.convert(ee.type),de=S(ee.internalFormat,Ee,pe,ee.colorSpace),Ge=Fe(T);$&&Ke(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,de,T.width,T.height):Ke(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const re=Y.__webglTexture,ee=Fe(T);if(T.depthTexture.format===xs)Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(T.depthTexture.format===Ds)Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function De(U){const T=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const Y=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=Y}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,U)}else if($){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),se(T.__webglDepthbuffer[Y],U,!1);else{const re=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),se(T.__webglDepthbuffer,U,!1);else{const Y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(U,T,$){const Y=n.get(U);T!==void 0&&ce(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&De(U)}function Je(U){const T=U.texture,$=n.get(U),Y=n.get(T);U.addEventListener("dispose",A);const re=U.textures,ee=U.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,s.memory.textures++),ee){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let de=0;de<T.mipmaps.length;de++)$.__webglFramebuffer[pe][de]=i.createFramebuffer()}else $.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)$.__webglFramebuffer[pe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let pe=0,de=re.length;pe<de;pe++){const Ge=n.get(re[pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&Ke(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const de=re[pe];$.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Ge=o.convert(de.format,de.colorSpace),me=o.convert(de.type),xe=S(de.internalFormat,Ge,me,de.colorSpace,U.isXRRenderTarget===!0),Ae=Fe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,xe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),se($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),be(i.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ce($.__webglFramebuffer[pe][de],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de);else ce($.__webglFramebuffer[pe],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,de=re.length;pe<de;pe++){const Ge=re[pe],me=n.get(Ge);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),be(i.TEXTURE_2D,Ge),ce($.__webglFramebuffer,U,Ge,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),_(Ge)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),be(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ce($.__webglFramebuffer[de],U,T,i.COLOR_ATTACHMENT0,pe,de);else ce($.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,pe,0);_(T)&&p(pe),t.unbindTexture()}U.depthBuffer&&De(U)}function He(U){const T=U.textures;for(let $=0,Y=T.length;$<Y;$++){const re=T[$];if(_(re)){const ee=b(U),Ee=n.get(re).__webglTexture;t.bindTexture(ee,Ee),p(ee),t.unbindTexture()}}}const tt=[],B=[];function Pe(U){if(U.samples>0){if(Ke(U)===!1){const T=U.textures,$=U.width,Y=U.height;let re=i.COLOR_BUFFER_BIT;const ee=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(U),pe=T.length>1;if(pe)for(let de=0;de<T.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let de=0;de<T.length;de++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Ge=n.get(T[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,$,Y,0,0,$,Y,re,i.NEAREST),l===!0&&(tt.length=0,B.length=0,tt.push(i.COLOR_ATTACHMENT0+de),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push(ee),B.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let de=0;de<T.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Ge=n.get(T[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Fe(U){return Math.min(r.maxSamples,U.samples)}function Ke(U){const T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(U){const T=s.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function et(U,T){const $=U.colorSpace,Y=U.format,re=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Ji&&$!==nn&&(bt.getTransfer($)===Dt?(Y!==xn||re!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Xe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ke}function eM(i,e){function t(n,r=nn){let o;const s=bt.getTransfer(r);if(n===Di)return i.UNSIGNED_BYTE;if(n===Dh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ym)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vm)return i.BYTE;if(n===xm)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===Ph)return i.INT;if(n===Oo)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===Sm)return i.ALPHA;if(n===Mm)return i.RGB;if(n===xn)return i.RGBA;if(n===wm)return i.LUMINANCE;if(n===bm)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Ih)return i.RED;if(n===Uh)return i.RED_INTEGER;if(n===Tm)return i.RG;if(n===Fh)return i.RG_INTEGER;if(n===Nh)return i.RGBA_INTEGER;if(n===El||n===Al||n===Rl||n===Cl)if(s===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===El)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===El)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Uu||n===Fu||n===Nu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===zu||n===Bu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ou||n===zu)return s===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Bu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===$u||n===Zu||n===Ku||n===ju||n===Ju||n===Qu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ku)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$u)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ku)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ju)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qu)return s===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===eh||n===th)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Pl)return s===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Em||n===nh||n===ih||n===rh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Pl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class tM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Sn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:iM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sM extends Is{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new oM,_=t.getContextAttributes();let p=null,b=null;const S=[],M=[],L=new Qe;let C=null;const A=new qn;A.viewport=new Bt;const P=new qn;P.viewport=new Bt;const w=[A,P],y=new tM;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let J=S[Q];return J===void 0&&(J=new $c,S[Q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Q){let J=S[Q];return J===void 0&&(J=new $c,S[Q]=J),J.getGripSpace()},this.getHand=function(Q){let J=S[Q];return J===void 0&&(J=new $c,S[Q]=J),J.getHandSpace()};function N(Q){const J=M.indexOf(Q.inputSource);if(J===-1)return;const ce=S[J];ce!==void 0&&(ce.update(Q.inputSource,Q.frame,c||s),ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let Q=0;Q<S.length;Q++){const J=M[Q];J!==null&&(M[Q]=null,S[Q].disconnect(J))}R=null,F=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const J={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new br(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,ce=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Ds:xs,ce=_.stencil?Ps:Oo);const ye={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new br(f.textureWidth,f.textureHeight,{format:xn,type:Di,depthTexture:new Wl(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Q){for(let J=0;J<Q.removed.length;J++){const ce=Q.removed[J],se=M.indexOf(ce);se>=0&&(M[se]=null,S[se].disconnect(ce))}for(let J=0;J<Q.added.length;J++){const ce=Q.added[J];let se=M.indexOf(ce);if(se===-1){for(let De=0;De<S.length;De++)if(De>=M.length){M.push(ce),se=De;break}else if(M[De]===null){M[De]=ce,se=De;break}if(se===-1)break}const ye=S[se];ye&&ye.connect(ce)}}const H=new X,W=new X;function V(Q,J,ce){H.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const se=H.distanceTo(W),ye=J.projectionMatrix.elements,De=ce.projectionMatrix.elements,Xe=ye[14]/(ye[10]-1),Je=ye[14]/(ye[10]+1),He=(ye[9]+1)/ye[5],tt=(ye[9]-1)/ye[5],B=(ye[8]-1)/ye[0],Pe=(De[8]+1)/De[0],Fe=Xe*B,Ke=Xe*Pe,qe=se/(-B+Pe),et=qe*-B;if(J.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(et),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ye[10]===-1)Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const we=Xe+qe,U=Je+qe,T=Fe-et,$=Ke+(se-et),Y=He*Je/U*we,re=tt*Je/U*we;Q.projectionMatrix.makePerspective(T,$,Y,re,we,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function oe(Q,J){J===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(J.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let J=Q.near,ce=Q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),y.near=P.near=A.near=J,y.far=P.far=A.far=ce,(R!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,F=y.far),A.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const se=Q.parent,ye=y.cameras;oe(y,se);for(let De=0;De<ye.length;De++)oe(ye[De],se);ye.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),q(Q,y,se)};function q(Q,J,ce){ce===null?Q.matrix.copy(J.matrixWorld):(Q.matrix.copy(ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(J.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ba*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ge=null;function be(Q,J){if(u=J.getViewerPose(c||s),v=J,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let De=0;De<ce.length;De++){const Xe=ce[De];let Je=null;if(m!==null)Je=m.getViewport(Xe);else{const tt=d.getViewSubImage(f,Xe);Je=tt.viewport,De===0&&(e.setRenderTargetTextures(b,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(b))}let He=w[De];He===void 0&&(He=new qn,He.layers.enable(De),He.viewport=new Bt,w[De]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Je.x,Je.y,Je.width,Je.height),De===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(He)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const De=d.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&g.init(e,De,r.renderState)}}for(let ce=0;ce<S.length;ce++){const se=M[ce],ye=S[ce];se!==null&&ye!==void 0&&ye.update(se,J,c||s)}ge&&ge(Q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const Ce=new Bm;Ce.setAnimationLoop(be),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const yo=new mi,aM=new St;function lM(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Fm(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,M)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Qn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Qn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,M=b.envMapRotation;S&&(_.envMap.value=S,yo.copy(M),yo.x*=-1,yo.y*=-1,yo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yo.y*=-1,yo.z*=-1),_.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(yo)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cM(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const M=S.program;n.uniformBlockBinding(b,M)}function c(b,S){let M=r[b.id];M===void 0&&(v(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",_));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;o[b.id]!==C&&(f(b),o[b.id]=C)}function u(b){const S=d();b.__bindingPointIndex=S;const M=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=r[b.id],M=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=M.length;C<A;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,y=P.length;w<y;w++){const R=P[w];if(m(R,C,w,L)===!0){const F=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let k=0;k<N.length;k++){const H=N[k],W=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+z,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,M,L){const C=b.value,A=S+"_"+M;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const P=L[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(b){const S=b.uniforms;let M=0;const L=16;for(let A=0,P=S.length;A<P;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,R=w.length;y<R;y++){const F=w[y],N=Array.isArray(F.value)?F.value:[F.value];for(let z=0,k=N.length;z<k;z++){const H=N[z],W=g(H),V=M%L,oe=V%W.boundary,q=V+oe;M+=oe,q!==0&&L-q<W.storage&&(M+=L-q),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=W.storage}}}const C=M%L;return C>0&&(M+=L-C),b.__size=M,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function _(b){const S=b.target;S.removeEventListener("dispose",_);const M=s.indexOf(S.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class ic{constructor(e={}){const{canvas:t=$g(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Ki,this.toneMappingExposure=1;const M=this;let L=!1,C=0,A=0,P=null,w=-1,y=null;const R=new Bt,F=new Bt;let N=null;const z=new $e(0);let k=0,H=t.width,W=t.height,V=1,oe=null,q=null;const ge=new Bt(0,0,H,W),be=new Bt(0,0,H,W);let Ce=!1;const Q=new zm;let J=!1,ce=!1;const se=new St,ye=new St,De=new X,Xe=new Bt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function tt(){return P===null?V:1}let B=n;function Pe(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ch}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ze,!1),B===null){const x="webgl2";if(B=Pe(x,h),B===null)throw Pe(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Fe,Ke,qe,et,we,U,T,$,Y,re,ee,Ee,pe,de,Ge,me,xe,Ae,Ue,ue,Ne,Be,nt,G;function ne(){Fe=new my(B),Fe.init(),Be=new eM(B,Fe),Ke=new cy(B,Fe,e,Be),qe=new jS(B,Fe),Ke.reverseDepthBuffer&&f&&qe.buffers.depth.setReversed(!0),et=new vy(B),we=new NS,U=new QS(B,Fe,qe,we,Ke,Be,et),T=new hy(M),$=new py(M),Y=new Tv(B),nt=new ay(B,Y),re=new _y(B,Y,et,nt),ee=new yy(B,re,Y,et),Ue=new xy(B,Ke,U),me=new uy(we),Ee=new FS(M,T,$,Fe,Ke,nt,me),pe=new lM(M,we),de=new zS,Ge=new WS(Fe),Ae=new sy(M,T,$,qe,ee,m,l),xe=new ZS(M,ee,Ke),G=new cM(B,et,Ke,qe),ue=new ly(B,Fe,et),Ne=new gy(B,Fe,et),et.programs=Ee.programs,M.capabilities=Ke,M.extensions=Fe,M.properties=we,M.renderLists=de,M.shadowMap=xe,M.state=qe,M.info=et}ne();const ie=new sM(M,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const h=Fe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Fe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(h){h!==void 0&&(V=h,this.setSize(H,W,!1))},this.getSize=function(h){return h.set(H,W)},this.setSize=function(h,x,E=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=h,W=x,t.width=Math.floor(h*V),t.height=Math.floor(x*V),E===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(H*V,W*V).floor()},this.setDrawingBufferSize=function(h,x,E){H=h,W=x,V=E,t.width=Math.floor(h*E),t.height=Math.floor(x*E),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(R)},this.getViewport=function(h){return h.copy(ge)},this.setViewport=function(h,x,E,D){h.isVector4?ge.set(h.x,h.y,h.z,h.w):ge.set(h,x,E,D),qe.viewport(R.copy(ge).multiplyScalar(V).round())},this.getScissor=function(h){return h.copy(be)},this.setScissor=function(h,x,E,D){h.isVector4?be.set(h.x,h.y,h.z,h.w):be.set(h,x,E,D),qe.scissor(F.copy(be).multiplyScalar(V).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(h){qe.setScissorTest(Ce=h)},this.setOpaqueSort=function(h){oe=h},this.setTransparentSort=function(h){q=h},this.getClearColor=function(h){return h.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(h=!0,x=!0,E=!0){let D=0;if(h){let I=!1;if(P!==null){const O=P.texture.format;I=O===Nh||O===Fh||O===Uh}if(I){const O=P.texture.type,Z=O===Di||O===Oo||O===No||O===Ps||O===Dh||O===Lh,ae=Ae.getClearColor(),j=Ae.getClearAlpha(),te=ae.r,K=ae.g,le=ae.b;Z?(v[0]=te,v[1]=K,v[2]=le,v[3]=j,B.clearBufferuiv(B.COLOR,0,v)):(g[0]=te,g[1]=K,g[2]=le,g[3]=j,B.clearBufferiv(B.COLOR,0,g))}else D|=B.COLOR_BUFFER_BIT}x&&(D|=B.DEPTH_BUFFER_BIT),E&&(D|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),de.dispose(),Ge.dispose(),we.dispose(),T.dispose(),$.dispose(),ee.dispose(),nt.dispose(),G.dispose(),Ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Li),ie.removeEventListener("sessionend",no),Gn.stop()};function he(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=et.autoReset,x=xe.enabled,E=xe.autoUpdate,D=xe.needsUpdate,I=xe.type;ne(),et.autoReset=h,xe.enabled=x,xe.autoUpdate=E,xe.needsUpdate=D,xe.type=I}function ze(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function ot(h){const x=h.target;x.removeEventListener("dispose",ot),Et(x)}function Et(h){jt(h),we.remove(h)}function jt(h){const x=we.get(h).programs;x!==void 0&&(x.forEach(function(E){Ee.releaseProgram(E)}),h.isShaderMaterial&&Ee.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,E,D,I,O){x===null&&(x=Je);const Z=I.isMesh&&I.matrixWorld.determinant()<0,ae=Os(h,x,E,D,I);qe.setMaterial(D,Z);let j=E.index,te=1;if(D.wireframe===!0){if(j=re.getWireframeAttribute(E),j===void 0)return;te=2}const K=E.drawRange,le=E.attributes.position;let _e=K.start*te,Me=(K.start+K.count)*te;O!==null&&(_e=Math.max(_e,O.start*te),Me=Math.min(Me,(O.start+O.count)*te)),j!==null?(_e=Math.max(_e,0),Me=Math.min(Me,j.count)):le!=null&&(_e=Math.max(_e,0),Me=Math.min(Me,le.count));const Le=Me-_e;if(Le<0||Le===1/0)return;nt.setup(I,D,ae,E,j);let Re,Te=ue;if(j!==null&&(Re=Y.get(j),Te=Ne,Te.setIndex(Re)),I.isMesh)D.wireframe===!0?(qe.setLineWidth(D.wireframeLinewidth*tt()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),qe.setLineWidth(ve*tt()),I.isLineSegments?Te.setMode(B.LINES):I.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else I.isPoints?Te.setMode(B.POINTS):I.isSprite&&Te.setMode(B.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Te.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Te.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,ut=I._multiDrawCounts,je=I._multiDrawCount,Pt=j?Y.get(j).bytesPerElement:1,st=we.get(D).currentProgram.getUniforms();for(let it=0;it<je;it++)st.setValue(B,"_gl_DrawID",it),Te.render(ve[it]/Pt,ut[it])}else if(I.isInstancedMesh)Te.renderInstances(_e,Le,I.count);else if(E.isInstancedBufferGeometry){const ve=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,ut=Math.min(E.instanceCount,ve);Te.renderInstances(_e,Le,ut)}else Te.render(_e,Le)};function ft(h,x,E){h.transparent===!0&&h.side===Ln&&h.forceSinglePass===!1?(h.side=Qn,h.needsUpdate=!0,Ar(h,x,E),h.side=Qr,h.needsUpdate=!0,Ar(h,x,E),h.side=Ln):Ar(h,x,E)}this.compile=function(h,x,E=null){E===null&&(E=h),p=Ge.get(E),p.init(x),S.push(p),E.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==E&&h.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const O=I.material;if(O)if(Array.isArray(O))for(let Z=0;Z<O.length;Z++){const ae=O[Z];ft(ae,E,I),D.add(ae)}else ft(O,E,I),D.add(O)}),S.pop(),p=null,D},this.compileAsync=function(h,x,E=null){const D=this.compile(h,x,E);return new Promise(I=>{function O(){if(D.forEach(function(Z){we.get(Z).currentProgram.isReady()&&D.delete(Z)}),D.size===0){I(h);return}setTimeout(O,10)}Fe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let It=null;function Un(h){It&&It(h)}function Li(){Gn.stop()}function no(){Gn.start()}const Gn=new Bm;Gn.setAnimationLoop(Un),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(h){It=h,ie.setAnimationLoop(h),h===null?Gn.stop():Gn.start()},ie.addEventListener("sessionstart",Li),ie.addEventListener("sessionend",no),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(x),x=ie.getCamera()),h.isScene===!0&&h.onBeforeRender(M,h,x,P),p=Ge.get(h,S.length),p.init(x),S.push(p),ye.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Q.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,J=me.init(this.clippingPlanes,ce),_=de.get(h,b.length),_.init(),b.push(_),ie.enabled===!0&&ie.isPresenting===!0){const O=M.xr.getDepthSensingMesh();O!==null&&Ii(O,x,-1/0,M.sortObjects)}Ii(h,x,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(oe,q),He=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,He&&Ae.addToRenderList(_,h),this.info.render.frame++,J===!0&&me.beginShadows();const E=p.state.shadowsArray;xe.render(E,h,x),J===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,I=_.transmissive;if(p.setupLights(),x.isArrayCamera){const O=x.cameras;if(I.length>0)for(let Z=0,ae=O.length;Z<ae;Z++){const j=O[Z];io(D,I,h,j)}He&&Ae.render(h);for(let Z=0,ae=O.length;Z<ae;Z++){const j=O[Z];Er(_,h,j,j.viewport)}}else I.length>0&&io(D,I,h,x),He&&Ae.render(h),Er(_,h,x);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(M,h,x),nt.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],J===!0&&me.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Ii(h,x,E,D){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)E=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Q.intersectsSprite(h)){D&&Xe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(ye);const Z=ee.update(h),ae=h.material;ae.visible&&_.push(h,Z,ae,E,Xe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Q.intersectsObject(h))){const Z=ee.update(h),ae=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Xe.copy(h.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Xe.copy(Z.boundingSphere.center)),Xe.applyMatrix4(h.matrixWorld).applyMatrix4(ye)),Array.isArray(ae)){const j=Z.groups;for(let te=0,K=j.length;te<K;te++){const le=j[te],_e=ae[le.materialIndex];_e&&_e.visible&&_.push(h,Z,_e,E,Xe.z,le)}}else ae.visible&&_.push(h,Z,ae,E,Xe.z,null)}}const O=h.children;for(let Z=0,ae=O.length;Z<ae;Z++)Ii(O[Z],x,E,D)}function Er(h,x,E,D){const I=h.opaque,O=h.transmissive,Z=h.transparent;p.setupLightsView(E),J===!0&&me.setGlobalState(M.clippingPlanes,E),D&&qe.viewport(R.copy(D)),I.length>0&&ti(I,x,E),O.length>0&&ti(O,x,E),Z.length>0&&ti(Z,x,E),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function io(h,x,E,D){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new br(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?$i:Di,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const O=p.state.transmissionRenderTarget[D.id],Z=D.viewport||R;O.setSize(Z.z,Z.w);const ae=M.getRenderTarget();M.setRenderTarget(O),M.getClearColor(z),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),He&&Ae.render(E);const j=M.toneMapping;M.toneMapping=Ki;const te=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),J===!0&&me.setGlobalState(M.clippingPlanes,D),ti(h,E,D),U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let le=0,_e=x.length;le<_e;le++){const Me=x[le],Le=Me.object,Re=Me.geometry,Te=Me.material,ve=Me.group;if(Te.side===Ln&&Le.layers.test(D.layers)){const ut=Te.side;Te.side=Qn,Te.needsUpdate=!0,ro(Le,E,D,Re,Te,ve),Te.side=ut,Te.needsUpdate=!0,K=!0}}K===!0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O))}M.setRenderTarget(ae),M.setClearColor(z,k),te!==void 0&&(D.viewport=te),M.toneMapping=j}function ti(h,x,E){const D=x.isScene===!0?x.overrideMaterial:null;for(let I=0,O=h.length;I<O;I++){const Z=h[I],ae=Z.object,j=Z.geometry,te=D===null?Z.material:D,K=Z.group;ae.layers.test(E.layers)&&ro(ae,x,E,j,te,K)}}function ro(h,x,E,D,I,O){h.onBeforeRender(M,x,E,D,I,O),h.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(M,x,E,D,h,O),I.transparent===!0&&I.side===Ln&&I.forceSinglePass===!1?(I.side=Qn,I.needsUpdate=!0,M.renderBufferDirect(E,x,D,I,h,O),I.side=Qr,I.needsUpdate=!0,M.renderBufferDirect(E,x,D,I,h,O),I.side=Ln):M.renderBufferDirect(E,x,D,I,h,O),h.onAfterRender(M,x,E,D,I,O)}function Ar(h,x,E){x.isScene!==!0&&(x=Je);const D=we.get(h),I=p.state.lights,O=p.state.shadowsArray,Z=I.state.version,ae=Ee.getParameters(h,I.state,O,x,E),j=Ee.getProgramCacheKey(ae);let te=D.programs;D.environment=h.isMeshStandardMaterial?x.environment:null,D.fog=x.fog,D.envMap=(h.isMeshStandardMaterial?$:T).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,te===void 0&&(h.addEventListener("dispose",ot),te=new Map,D.programs=te);let K=te.get(j);if(K!==void 0){if(D.currentProgram===K&&D.lightsStateVersion===Z)return er(h,ae),K}else ae.uniforms=Ee.getUniforms(h),h.onBeforeCompile(ae,M),K=Ee.acquireProgram(ae,j),te.set(j,K),D.uniforms=ae.uniforms;const le=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(le.clippingPlanes=me.uniform),er(h,ae),D.needsLights=Fn(h),D.lightsStateVersion=Z,D.needsLights&&(le.ambientLightColor.value=I.state.ambient,le.lightProbe.value=I.state.probe,le.directionalLights.value=I.state.directional,le.directionalLightShadows.value=I.state.directionalShadow,le.spotLights.value=I.state.spot,le.spotLightShadows.value=I.state.spotShadow,le.rectAreaLights.value=I.state.rectArea,le.ltc_1.value=I.state.rectAreaLTC1,le.ltc_2.value=I.state.rectAreaLTC2,le.pointLights.value=I.state.point,le.pointLightShadows.value=I.state.pointShadow,le.hemisphereLights.value=I.state.hemi,le.directionalShadowMap.value=I.state.directionalShadowMap,le.directionalShadowMatrix.value=I.state.directionalShadowMatrix,le.spotShadowMap.value=I.state.spotShadowMap,le.spotLightMatrix.value=I.state.spotLightMatrix,le.spotLightMap.value=I.state.spotLightMap,le.pointShadowMap.value=I.state.pointShadowMap,le.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=K,D.uniformsList=null,K}function oo(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Dl.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function er(h,x){const E=we.get(h);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function Os(h,x,E,D,I){x.isScene!==!0&&(x=Je),U.resetTextureUnits();const O=x.fog,Z=D.isMeshStandardMaterial?x.environment:null,ae=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ji,j=(D.isMeshStandardMaterial?$:T).get(D.envMap||Z),te=D.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,K=!!E.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),le=!!E.morphAttributes.position,_e=!!E.morphAttributes.normal,Me=!!E.morphAttributes.color;let Le=Ki;D.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Le=M.toneMapping);const Re=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Te=Re!==void 0?Re.length:0,ve=we.get(D),ut=p.state.lights;if(J===!0&&(ce===!0||h!==y)){const at=h===y&&D.id===w;me.setState(D,h,at)}let je=!1;D.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ut.state.version||ve.outputColorSpace!==ae||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==j||D.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==me.numPlanes||ve.numIntersection!==me.numIntersection)||ve.vertexAlphas!==te||ve.vertexTangents!==K||ve.morphTargets!==le||ve.morphNormals!==_e||ve.morphColors!==Me||ve.toneMapping!==Le||ve.morphTargetsCount!==Te)&&(je=!0):(je=!0,ve.__version=D.version);let Pt=ve.currentProgram;je===!0&&(Pt=Ar(D,x,I));let st=!1,it=!1,pt=!1;const ct=Pt.getUniforms(),Mt=ve.uniforms;if(qe.useProgram(Pt.program)&&(st=!0,it=!0,pt=!0),D.id!==w&&(w=D.id,it=!0),st||y!==h){qe.buffers.depth.getReversed()?(se.copy(h.projectionMatrix),Kg(se),jg(se),ct.setValue(B,"projectionMatrix",se)):ct.setValue(B,"projectionMatrix",h.projectionMatrix),ct.setValue(B,"viewMatrix",h.matrixWorldInverse);const en=ct.map.cameraPosition;en!==void 0&&en.setValue(B,De.setFromMatrixPosition(h.matrixWorld)),Ke.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ct.setValue(B,"isOrthographic",h.isOrthographicCamera===!0),y!==h&&(y=h,it=!0,pt=!0)}if(I.isSkinnedMesh){ct.setOptional(B,I,"bindMatrix"),ct.setOptional(B,I,"bindMatrixInverse");const at=I.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ct.setValue(B,"boneTexture",at.boneTexture,U))}I.isBatchedMesh&&(ct.setOptional(B,I,"batchingTexture"),ct.setValue(B,"batchingTexture",I._matricesTexture,U),ct.setOptional(B,I,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",I._indirectTexture,U),ct.setOptional(B,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",I._colorsTexture,U));const ht=E.morphAttributes;if((ht.position!==void 0||ht.normal!==void 0||ht.color!==void 0)&&Ue.update(I,E,Pt),(it||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,ct.setValue(B,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Mt.envMap.value=j,Mt.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&x.environment!==null&&(Mt.envMapIntensity.value=x.environmentIntensity),it&&(ct.setValue(B,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&Mn(Mt,pt),O&&D.fog===!0&&pe.refreshFogUniforms(Mt,O),pe.refreshMaterialUniforms(Mt,D,V,W,p.state.transmissionRenderTarget[h.id]),Dl.upload(B,oo(ve),Mt,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Dl.upload(B,oo(ve),Mt,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ct.setValue(B,"center",I.center),ct.setValue(B,"modelViewMatrix",I.modelViewMatrix),ct.setValue(B,"normalMatrix",I.normalMatrix),ct.setValue(B,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const at=D.uniformsGroups;for(let en=0,wn=at.length;en<wn;en++){const bn=at[en];G.update(bn,Pt),G.bind(bn,Pt)}}return Pt}function Mn(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function Fn(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,x,E){we.get(h.texture).__webglTexture=x,we.get(h.depthTexture).__webglTexture=E;const D=we.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=E===void 0,D.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const E=we.get(h);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,E=0){P=h,C=x,A=E;let D=!0,I=null,O=!1,Z=!1;if(h){const j=we.get(h);if(j.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),D=!1;else if(j.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if(j.__hasExternalTextures)U.rebindTextures(h,we.get(h.texture).__webglTexture,we.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const le=h.depthTexture;if(j.__boundDepthTexture!==le){if(le!==null&&we.has(le)&&(h.width!==le.image.width||h.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const te=h.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Z=!0);const K=we.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[x])?I=K[x][E]:I=K[x],O=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=we.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?I=K[E]:I=K,R.copy(h.viewport),F.copy(h.scissor),N=h.scissorTest}else R.copy(ge).multiplyScalar(V).floor(),F.copy(be).multiplyScalar(V).floor(),N=Ce;if(qe.bindFramebuffer(B.FRAMEBUFFER,I)&&D&&qe.drawBuffers(h,I),qe.viewport(R),qe.scissor(F),qe.setScissorTest(N),O){const j=we.get(h.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,j.__webglTexture,E)}else if(Z){const j=we.get(h.texture),te=x||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.__webglTexture,E||0,te)}w=-1},this.readRenderTargetPixels=function(h,x,E,D,I,O,Z){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=we.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Z!==void 0&&(ae=ae[Z]),ae){qe.bindFramebuffer(B.FRAMEBUFFER,ae);try{const j=h.texture,te=j.format,K=j.type;if(!Ke.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-D&&E>=0&&E<=h.height-I&&B.readPixels(x,E,D,I,Be.convert(te),Be.convert(K),O)}finally{const j=P!==null?we.get(P).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(h,x,E,D,I,O,Z){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=we.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Z!==void 0&&(ae=ae[Z]),ae){const j=h.texture,te=j.format,K=j.type;if(!Ke.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-D&&E>=0&&E<=h.height-I){qe.bindFramebuffer(B.FRAMEBUFFER,ae);const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,O.byteLength,B.STREAM_READ),B.readPixels(x,E,D,I,Be.convert(te),Be.convert(K),0);const _e=P!==null?we.get(P).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,_e);const Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zg(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,O),B.deleteBuffer(le),B.deleteSync(Me),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,E=0){h.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-E),I=Math.floor(h.image.width*D),O=Math.floor(h.image.height*D),Z=x!==null?x.x:0,ae=x!==null?x.y:0;U.setTexture2D(h,0),B.copyTexSubImage2D(B.TEXTURE_2D,E,0,0,Z,ae,I,O),qe.unbindTexture()},this.copyTextureToTexture=function(h,x,E=null,D=null,I=0){h.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],x=arguments[2],I=arguments[3]||0,E=null);let O,Z,ae,j,te,K,le,_e,Me;const Le=h.isCompressedTexture?h.mipmaps[I]:h.image;E!==null?(O=E.max.x-E.min.x,Z=E.max.y-E.min.y,ae=E.isBox3?E.max.z-E.min.z:1,j=E.min.x,te=E.min.y,K=E.isBox3?E.min.z:0):(O=Le.width,Z=Le.height,ae=Le.depth||1,j=0,te=0,K=0),D!==null?(le=D.x,_e=D.y,Me=D.z):(le=0,_e=0,Me=0);const Re=Be.convert(x.format),Te=Be.convert(x.type);let ve;x.isData3DTexture?(U.setTexture3D(x,0),ve=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),ve=B.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);const ut=B.getParameter(B.UNPACK_ROW_LENGTH),je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pt=B.getParameter(B.UNPACK_SKIP_PIXELS),st=B.getParameter(B.UNPACK_SKIP_ROWS),it=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,j),B.pixelStorei(B.UNPACK_SKIP_ROWS,te),B.pixelStorei(B.UNPACK_SKIP_IMAGES,K);const pt=h.isDataArrayTexture||h.isData3DTexture,ct=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const Mt=we.get(h),ht=we.get(x),at=we.get(Mt.__renderTarget),en=we.get(ht.__renderTarget);qe.bindFramebuffer(B.READ_FRAMEBUFFER,at.__webglFramebuffer),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let wn=0;wn<ae;wn++)pt&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(h).__webglTexture,I,K+wn),h.isDepthTexture?(ct&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(x).__webglTexture,I,Me+wn),B.blitFramebuffer(j,te,O,Z,le,_e,O,Z,B.DEPTH_BUFFER_BIT,B.NEAREST)):ct?B.copyTexSubImage3D(ve,I,le,_e,Me+wn,j,te,O,Z):B.copyTexSubImage2D(ve,I,le,_e,Me+wn,j,te,O,Z);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ct?h.isDataTexture||h.isData3DTexture?B.texSubImage3D(ve,I,le,_e,Me,O,Z,ae,Re,Te,Le.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(ve,I,le,_e,Me,O,Z,ae,Re,Le.data):B.texSubImage3D(ve,I,le,_e,Me,O,Z,ae,Re,Te,Le):h.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,I,le,_e,O,Z,Re,Te,Le.data):h.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,I,le,_e,Le.width,Le.height,Re,Le.data):B.texSubImage2D(B.TEXTURE_2D,I,le,_e,O,Z,Re,Te,Le);B.pixelStorei(B.UNPACK_ROW_LENGTH,ut),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,it),I===0&&x.generateMipmaps&&B.generateMipmap(ve),qe.unbindTexture()},this.copyTextureToTexture3D=function(h,x,E=null,D=null,I=0){return h.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,D=arguments[1]||null,h=arguments[2],x=arguments[3],I=arguments[4]||0),ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,E,D,I)},this.initRenderTarget=function(h){we.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),qe.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,qe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class eo extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ra extends Sn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=cn,u=cn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Hh extends Sn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Xl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uM{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const hM=new uM;class Ca{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";const ur={};class fM extends Error{constructor(e,t){super(e),this.response=t}}class dM extends Ca{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Xl.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ur[e]!==void 0){ur[e].push({onLoad:t,onProgress:n,onError:r});return}ur[e]=[],ur[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ur[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{g+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,A=u.length;C<A;C++){const P=u[C];P.onProgress&&P.onProgress(L)}p.enqueue(M),b()}},S=>{p.error(S)})}}});return new Response(_)}else throw new fM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Xl.add(e,c);const u=ur[e];delete ur[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ur[e];if(u===void 0)throw this.manager.itemError(e),c;delete ur[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pM extends Ca{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Xl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Ta("img");function l(){u(),Xl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class mM extends Ca{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new Ra,a=new dM(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Hn,s.wrapT=c.wrapT!==void 0?c.wrapT:Hn,s.magFilter=c.magFilter!==void 0?c.magFilter:vt,s.minFilter=c.minFilter!==void 0?c.minFilter:vt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Yi),c.mipmapCount===1&&(s.minFilter=vt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class pr extends Ca{constructor(e){super(e)}load(e,t,n,r){const o=new Sn,s=new pM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Ro extends Tr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var xi=Uint8Array,ps=Uint16Array,_M=Int32Array,Wm=new xi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xm=new xi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gM=new xi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qm=function(i,e){for(var t=new ps(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new _M(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Ym=qm(Wm,2),$m=Ym.b,vM=Ym.r;$m[28]=258,vM[258]=28;var xM=qm(Xm,0),yM=xM.b,sh=new ps(32768);for(var kt=0;kt<32768;++kt){var kr=(kt&43690)>>1|(kt&21845)<<1;kr=(kr&52428)>>2|(kr&13107)<<2,kr=(kr&61680)>>4|(kr&3855)<<4,sh[kt]=((kr&65280)>>8|(kr&255)<<8)>>1}var ha=(function(i,e,t){for(var n=i.length,r=0,o=new ps(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new ps(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new ps(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[sh[d]>>l]=c}else for(a=new ps(n),r=0;r<n;++r)i[r]&&(a[r]=sh[s[i[r]-1]++]>>15-i[r]);return a}),Pa=new xi(288);for(var kt=0;kt<144;++kt)Pa[kt]=8;for(var kt=144;kt<256;++kt)Pa[kt]=9;for(var kt=256;kt<280;++kt)Pa[kt]=7;for(var kt=280;kt<288;++kt)Pa[kt]=8;var Zm=new xi(32);for(var kt=0;kt<32;++kt)Zm[kt]=5;var SM=ha(Pa,9,1),MM=ha(Zm,5,1),Zc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ai=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Kc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},wM=function(i){return(i+7)/8|0},bM=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new xi(i.subarray(e,t))},TM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ri=function(i,e,t){var n=new Error(e||TM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ri),!t)throw n;return n},EM=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new xi(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new xi(r*3));var c=function(Je){var He=t.length;if(Je>He){var tt=new xi(Math.max(He*2,Je));tt.set(t),t=tt}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=Ai(i,d,1);var b=Ai(i,d+1,3);if(d+=3,b)if(b==1)m=SM,v=MM,g=9,_=5;else if(b==2){var C=Ai(i,d,31)+257,A=Ai(i,d+10,15)+4,P=C+Ai(i,d+5,31)+1;d+=14;for(var w=new xi(P),y=new xi(19),R=0;R<A;++R)y[gM[R]]=Ai(i,d+R*3,7);d+=A*3;for(var F=Zc(y),N=(1<<F)-1,z=ha(y,F,1),R=0;R<P;){var k=z[Ai(i,d,N)];d+=k&15;var S=k>>4;if(S<16)w[R++]=S;else{var H=0,W=0;for(S==16?(W=3+Ai(i,d,3),d+=2,H=w[R-1]):S==17?(W=3+Ai(i,d,7),d+=3):S==18&&(W=11+Ai(i,d,127),d+=7);W--;)w[R++]=H}}var V=w.subarray(0,C),oe=w.subarray(C);g=Zc(V),_=Zc(oe),m=ha(V,g,1),v=ha(oe,_,1)}else Ri(1);else{var S=wM(d)+4,M=i[S-4]|i[S-3]<<8,L=S+M;if(L>r){l&&Ri(0);break}a&&c(f+M),t.set(i.subarray(S,L),f),e.b=f+=M,e.p=d=L*8,e.f=u;continue}if(d>p){l&&Ri(0);break}}a&&c(f+131072);for(var q=(1<<g)-1,ge=(1<<_)-1,be=d;;be=d){var H=m[Kc(i,d)&q],Ce=H>>4;if(d+=H&15,d>p){l&&Ri(0);break}if(H||Ri(2),Ce<256)t[f++]=Ce;else if(Ce==256){be=d,m=null;break}else{var Q=Ce-254;if(Ce>264){var R=Ce-257,J=Wm[R];Q=Ai(i,d,(1<<J)-1)+$m[R],d+=J}var ce=v[Kc(i,d)&ge],se=ce>>4;ce||Ri(3),d+=ce&15;var oe=yM[se];if(se>3){var J=Xm[se];oe+=Kc(i,d)&(1<<J)-1,d+=J}if(d>p){l&&Ri(0);break}a&&c(f+131072);var ye=f+Q;if(f<oe){var De=o-oe,Xe=Math.min(oe,ye);for(De+f<0&&Ri(3);f<Xe;++f)t[f]=n[De+f]}for(;f<ye;++f)t[f]=t[f-oe]}}e.l=m,e.p=be,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?bM(t,0,f):t.subarray(0,f)},AM=new xi(0),RM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ri(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ri(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function fl(i,e){return EM(i.subarray(RM(i),-4),{i:2},e,e)}var CM=typeof TextDecoder<"u"&&new TextDecoder,PM=0;try{CM.decode(AM,{stream:!0}),PM=1}catch{}class DM extends mM{constructor(e){super(e),this.type=$i}parse(e){const w=Math.pow(2.7182818,2.2);function y(h,x){let E=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(x[E++]=I);const D=E-1;for(;E<65536;)x[E++]=0;return D}function R(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const F={l:0,c:0,lc:0};function N(h,x,E,D,I){for(;E<h;)x=x<<8|ue(D,I),E+=8;E-=h,F.l=x>>E&(1<<h)-1,F.c=x,F.lc=E}const z=new Array(59);function k(h){for(let E=0;E<=58;++E)z[E]=0;for(let E=0;E<65537;++E)z[h[E]]+=1;let x=0;for(let E=58;E>0;--E){const D=x+z[E]>>1;z[E]=x,x=D}for(let E=0;E<65537;++E){const D=h[E];D>0&&(h[E]=D|z[D]++<<6)}}function H(h,x,E,D,I,O){const Z=x;let ae=0,j=0;for(;D<=I;D++){if(Z.value-x.value>E)return!1;N(6,ae,j,h,Z);const te=F.l;if(ae=F.c,j=F.lc,O[D]=te,te==63){if(Z.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");N(8,ae,j,h,Z);let K=F.l+6;if(ae=F.c,j=F.lc,D+K>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[D++]=0;D--}else if(te>=59){let K=te-59+2;if(D+K>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[D++]=0;D--}}k(O)}function W(h){return h&63}function V(h){return h>>6}function oe(h,x,E,D){for(;x<=E;x++){const I=V(h[x]),O=W(h[x]);if(I>>O)throw new Error("Invalid table entry");if(O>14){const Z=D[I>>O-14];if(Z.len)throw new Error("Invalid table entry");if(Z.lit++,Z.p){const ae=Z.p;Z.p=new Array(Z.lit);for(let j=0;j<Z.lit-1;++j)Z.p[j]=ae[j]}else Z.p=new Array(1);Z.p[Z.lit-1]=x}else if(O){let Z=0;for(let ae=1<<14-O;ae>0;ae--){const j=D[(I<<14-O)+Z];if(j.len||j.p)throw new Error("Invalid table entry");j.len=O,j.lit=x,Z++}}}return!0}const q={c:0,lc:0};function ge(h,x,E,D){h=h<<8|ue(E,D),x+=8,q.c=h,q.lc=x}const be={c:0,lc:0};function Ce(h,x,E,D,I,O,Z,ae,j){if(h==x){D<8&&(ge(E,D,I,O),E=q.c,D=q.lc),D-=8;let te=E>>D;if(te=new Uint8Array([te])[0],ae.value+te>j)return!1;const K=Z[ae.value-1];for(;te-- >0;)Z[ae.value++]=K}else if(ae.value<j)Z[ae.value++]=h;else return!1;be.c=E,be.lc=D}function Q(h){return h&65535}function J(h){const x=Q(h);return x>32767?x-65536:x}const ce={a:0,b:0};function se(h,x){const E=J(h),I=J(x),O=E+(I&1)+(I>>1),Z=O,ae=O-I;ce.a=Z,ce.b=ae}function ye(h,x){const E=Q(h),D=Q(x),I=E-(D>>1)&65535,O=D+I-32768&65535;ce.a=O,ce.b=I}function De(h,x,E,D,I,O,Z){const ae=Z<16384,j=E>I?I:E;let te=1,K,le;for(;te<=j;)te<<=1;for(te>>=1,K=te,te>>=1;te>=1;){le=0;const _e=le+O*(I-K),Me=O*te,Le=O*K,Re=D*te,Te=D*K;let ve,ut,je,Pt;for(;le<=_e;le+=Le){let st=le;const it=le+D*(E-K);for(;st<=it;st+=Te){const pt=st+Re,ct=st+Me,Mt=ct+Re;ae?(se(h[st+x],h[ct+x]),ve=ce.a,je=ce.b,se(h[pt+x],h[Mt+x]),ut=ce.a,Pt=ce.b,se(ve,ut),h[st+x]=ce.a,h[pt+x]=ce.b,se(je,Pt),h[ct+x]=ce.a,h[Mt+x]=ce.b):(ye(h[st+x],h[ct+x]),ve=ce.a,je=ce.b,ye(h[pt+x],h[Mt+x]),ut=ce.a,Pt=ce.b,ye(ve,ut),h[st+x]=ce.a,h[pt+x]=ce.b,ye(je,Pt),h[ct+x]=ce.a,h[Mt+x]=ce.b)}if(E&te){const pt=st+Me;ae?se(h[st+x],h[pt+x]):ye(h[st+x],h[pt+x]),ve=ce.a,h[pt+x]=ce.b,h[st+x]=ve}}if(I&te){let st=le;const it=le+D*(E-K);for(;st<=it;st+=Te){const pt=st+Re;ae?se(h[st+x],h[pt+x]):ye(h[st+x],h[pt+x]),ve=ce.a,h[pt+x]=ce.b,h[st+x]=ve}}K=te,te>>=1}return le}function Xe(h,x,E,D,I,O,Z,ae,j){let te=0,K=0;const le=Z,_e=Math.trunc(D.value+(I+7)/8);for(;D.value<_e;)for(ge(te,K,E,D),te=q.c,K=q.lc;K>=14;){const Le=te>>K-14&16383,Re=x[Le];if(Re.len)K-=Re.len,Ce(Re.lit,O,te,K,E,D,ae,j,le),te=be.c,K=be.lc;else{if(!Re.p)throw new Error("hufDecode issues");let Te;for(Te=0;Te<Re.lit;Te++){const ve=W(h[Re.p[Te]]);for(;K<ve&&D.value<_e;)ge(te,K,E,D),te=q.c,K=q.lc;if(K>=ve&&V(h[Re.p[Te]])==(te>>K-ve&(1<<ve)-1)){K-=ve,Ce(Re.p[Te],O,te,K,E,D,ae,j,le),te=be.c,K=be.lc;break}}if(Te==Re.lit)throw new Error("hufDecode issues")}}const Me=8-I&7;for(te>>=Me,K-=Me;K>0;){const Le=x[te<<14-K&16383];if(Le.len)K-=Le.len,Ce(Le.lit,O,te,K,E,D,ae,j,le),te=be.c,K=be.lc;else throw new Error("hufDecode issues")}return!0}function Je(h,x,E,D,I,O){const Z={value:0},ae=E.value,j=Ue(x,E),te=Ue(x,E);E.value+=4;const K=Ue(x,E);if(E.value+=4,j<0||j>=65537||te<0||te>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const le=new Array(65537),_e=new Array(16384);R(_e);const Me=D-(E.value-ae);if(H(h,E,Me,j,te,le),K>8*(D-(E.value-ae)))throw new Error("Something wrong with hufUncompress");oe(le,j,te,_e),Xe(le,_e,h,E,K,te,O,I,Z)}function He(h,x,E){for(let D=0;D<E;++D)x[D]=h[x[D]]}function tt(h){for(let x=1;x<h.length;x++){const E=h[x-1]+h[x]-128;h[x]=E}}function B(h,x){let E=0,D=Math.floor((h.length+1)/2),I=0;const O=h.length-1;for(;!(I>O||(x[I++]=h[E++],I>O));)x[I++]=h[D++]}function Pe(h){let x=h.byteLength;const E=new Array;let D=0;const I=new DataView(h);for(;x>0;){const O=I.getInt8(D++);if(O<0){const Z=-O;x-=Z+1;for(let ae=0;ae<Z;ae++)E.push(I.getUint8(D++))}else{const Z=O;x-=2;const ae=I.getUint8(D++);for(let j=0;j<Z+1;j++)E.push(ae)}}return E}function Fe(h,x,E,D,I,O){let Z=new DataView(O.buffer);const ae=E[h.idx[0]].width,j=E[h.idx[0]].height,te=3,K=Math.floor(ae/8),le=Math.ceil(ae/8),_e=Math.ceil(j/8),Me=ae-(le-1)*8,Le=j-(_e-1)*8,Re={value:0},Te=new Array(te),ve=new Array(te),ut=new Array(te),je=new Array(te),Pt=new Array(te);for(let it=0;it<te;++it)Pt[it]=x[h.idx[it]],Te[it]=it<1?0:Te[it-1]+le*_e,ve[it]=new Float32Array(64),ut[it]=new Uint16Array(64),je[it]=new Uint16Array(le*64);for(let it=0;it<_e;++it){let pt=8;it==_e-1&&(pt=Le);let ct=8;for(let ht=0;ht<le;++ht){ht==le-1&&(ct=Me);for(let at=0;at<te;++at)ut[at].fill(0),ut[at][0]=I[Te[at]++],Ke(Re,D,ut[at]),qe(ut[at],ve[at]),et(ve[at]);we(ve);for(let at=0;at<te;++at)U(ve[at],je[at],ht*64)}let Mt=0;for(let ht=0;ht<te;++ht){const at=E[h.idx[ht]].type;for(let en=8*it;en<8*it+pt;++en){Mt=Pt[ht][en];for(let wn=0;wn<K;++wn){const bn=wn*64+(en&7)*8;Z.setUint16(Mt+0*at,je[ht][bn+0],!0),Z.setUint16(Mt+2*at,je[ht][bn+1],!0),Z.setUint16(Mt+4*at,je[ht][bn+2],!0),Z.setUint16(Mt+6*at,je[ht][bn+3],!0),Z.setUint16(Mt+8*at,je[ht][bn+4],!0),Z.setUint16(Mt+10*at,je[ht][bn+5],!0),Z.setUint16(Mt+12*at,je[ht][bn+6],!0),Z.setUint16(Mt+14*at,je[ht][bn+7],!0),Mt+=16*at}}if(K!=le)for(let en=8*it;en<8*it+pt;++en){const wn=Pt[ht][en]+8*K*2*at,bn=K*64+(en&7)*8;for(let so=0;so<ct;++so)Z.setUint16(wn+so*2*at,je[ht][bn+so],!0)}}}const st=new Uint16Array(ae);Z=new DataView(O.buffer);for(let it=0;it<te;++it){E[h.idx[it]].decoded=!0;const pt=E[h.idx[it]].type;if(E[it].type==2)for(let ct=0;ct<j;++ct){const Mt=Pt[it][ct];for(let ht=0;ht<ae;++ht)st[ht]=Z.getUint16(Mt+ht*2*pt,!0);for(let ht=0;ht<ae;++ht)Z.setFloat32(Mt+ht*2*pt,ne(st[ht]),!0)}}}function Ke(h,x,E){let D,I=1;for(;I<64;)D=x[h.value],D==65280?I=64:D>>8==255?I+=D&255:(E[I]=D,I++),h.value++}function qe(h,x){x[0]=ne(h[0]),x[1]=ne(h[1]),x[2]=ne(h[5]),x[3]=ne(h[6]),x[4]=ne(h[14]),x[5]=ne(h[15]),x[6]=ne(h[27]),x[7]=ne(h[28]),x[8]=ne(h[2]),x[9]=ne(h[4]),x[10]=ne(h[7]),x[11]=ne(h[13]),x[12]=ne(h[16]),x[13]=ne(h[26]),x[14]=ne(h[29]),x[15]=ne(h[42]),x[16]=ne(h[3]),x[17]=ne(h[8]),x[18]=ne(h[12]),x[19]=ne(h[17]),x[20]=ne(h[25]),x[21]=ne(h[30]),x[22]=ne(h[41]),x[23]=ne(h[43]),x[24]=ne(h[9]),x[25]=ne(h[11]),x[26]=ne(h[18]),x[27]=ne(h[24]),x[28]=ne(h[31]),x[29]=ne(h[40]),x[30]=ne(h[44]),x[31]=ne(h[53]),x[32]=ne(h[10]),x[33]=ne(h[19]),x[34]=ne(h[23]),x[35]=ne(h[32]),x[36]=ne(h[39]),x[37]=ne(h[45]),x[38]=ne(h[52]),x[39]=ne(h[54]),x[40]=ne(h[20]),x[41]=ne(h[22]),x[42]=ne(h[33]),x[43]=ne(h[38]),x[44]=ne(h[46]),x[45]=ne(h[51]),x[46]=ne(h[55]),x[47]=ne(h[60]),x[48]=ne(h[21]),x[49]=ne(h[34]),x[50]=ne(h[37]),x[51]=ne(h[47]),x[52]=ne(h[50]),x[53]=ne(h[56]),x[54]=ne(h[59]),x[55]=ne(h[61]),x[56]=ne(h[35]),x[57]=ne(h[36]),x[58]=ne(h[48]),x[59]=ne(h[49]),x[60]=ne(h[57]),x[61]=ne(h[58]),x[62]=ne(h[62]),x[63]=ne(h[63])}function et(h){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),Z=.5*Math.cos(3*3.14159/8),ae=.5*Math.cos(7*3.14159/16),j=new Array(4),te=new Array(4),K=new Array(4),le=new Array(4);for(let _e=0;_e<8;++_e){const Me=_e*8;j[0]=D*h[Me+2],j[1]=Z*h[Me+2],j[2]=D*h[Me+6],j[3]=Z*h[Me+6],te[0]=E*h[Me+1]+I*h[Me+3]+O*h[Me+5]+ae*h[Me+7],te[1]=I*h[Me+1]-ae*h[Me+3]-E*h[Me+5]-O*h[Me+7],te[2]=O*h[Me+1]-E*h[Me+3]+ae*h[Me+5]+I*h[Me+7],te[3]=ae*h[Me+1]-O*h[Me+3]+I*h[Me+5]-E*h[Me+7],K[0]=x*(h[Me+0]+h[Me+4]),K[3]=x*(h[Me+0]-h[Me+4]),K[1]=j[0]+j[3],K[2]=j[1]-j[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],h[Me+0]=le[0]+te[0],h[Me+1]=le[1]+te[1],h[Me+2]=le[2]+te[2],h[Me+3]=le[3]+te[3],h[Me+4]=le[3]-te[3],h[Me+5]=le[2]-te[2],h[Me+6]=le[1]-te[1],h[Me+7]=le[0]-te[0]}for(let _e=0;_e<8;++_e)j[0]=D*h[16+_e],j[1]=Z*h[16+_e],j[2]=D*h[48+_e],j[3]=Z*h[48+_e],te[0]=E*h[8+_e]+I*h[24+_e]+O*h[40+_e]+ae*h[56+_e],te[1]=I*h[8+_e]-ae*h[24+_e]-E*h[40+_e]-O*h[56+_e],te[2]=O*h[8+_e]-E*h[24+_e]+ae*h[40+_e]+I*h[56+_e],te[3]=ae*h[8+_e]-O*h[24+_e]+I*h[40+_e]-E*h[56+_e],K[0]=x*(h[_e]+h[32+_e]),K[3]=x*(h[_e]-h[32+_e]),K[1]=j[0]+j[3],K[2]=j[1]-j[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],h[0+_e]=le[0]+te[0],h[8+_e]=le[1]+te[1],h[16+_e]=le[2]+te[2],h[24+_e]=le[3]+te[3],h[32+_e]=le[3]-te[3],h[40+_e]=le[2]-te[2],h[48+_e]=le[1]-te[1],h[56+_e]=le[0]-te[0]}function we(h){for(let x=0;x<64;++x){const E=h[0][x],D=h[1][x],I=h[2][x];h[0][x]=E+1.5747*I,h[1][x]=E-.1873*D-.4682*I,h[2][x]=E+1.8556*D}}function U(h,x,E){for(let D=0;D<64;++D)x[E+D]=ud.toHalfFloat(T(h[D]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function $(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Y(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(Pe(x)),D=new Uint8Array(E.length);return tt(E),B(E,D),new DataView(D.buffer)}function re(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=fl(x),D=new Uint8Array(E.length);return tt(E),B(E,D),new DataView(D.buffer)}function ee(h){const x=h.viewer,E={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let O=0;const Z=new Array(h.inputChannels.length);for(let Le=0,Re=h.inputChannels.length;Le<Re;Le++)Z[Le]={},Z[Le].start=O,Z[Le].end=Z[Le].start,Z[Le].nx=h.columns,Z[Le].ny=h.lines,Z[Le].size=h.type,O+=Z[Le].nx*Z[Le].ny*Z[Le].size;const ae=ie(x,E),j=ie(x,E);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ae<=j)for(let Le=0;Le<j-ae+1;Le++)I[Le+ae]=Ne(x,E);const te=new Uint16Array(65536),K=y(I,te),le=Ue(x,E);Je(h.array,x,E,le,D,O);for(let Le=0;Le<h.inputChannels.length;++Le){const Re=Z[Le];for(let Te=0;Te<Z[Le].size;++Te)De(D,Re.start+Te,Re.nx,Re.size,Re.ny,Re.nx*Re.size,K)}He(te,D,O);let _e=0;const Me=new Uint8Array(D.buffer.byteLength);for(let Le=0;Le<h.lines;Le++)for(let Re=0;Re<h.inputChannels.length;Re++){const Te=Z[Re],ve=Te.nx*Te.size,ut=new Uint8Array(D.buffer,Te.end*2,ve*2);Me.set(ut,_e),_e+=ve*2,Te.end+=ve}return new DataView(Me.buffer)}function Ee(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=fl(x),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(D),O=new DataView(I);let Z=0,ae=0;const j=new Array(4);for(let te=0;te<h.lines;te++)for(let K=0;K<h.inputChannels.length;K++){let le=0;switch(h.inputChannels[K].pixelType){case 1:j[0]=Z,j[1]=j[0]+h.columns,Z=j[1]+h.columns;for(let Me=0;Me<h.columns;++Me){const Le=E[j[0]++]<<8|E[j[1]++];le+=Le,O.setUint16(ae,le,!0),ae+=2}break;case 2:j[0]=Z,j[1]=j[0]+h.columns,j[2]=j[1]+h.columns,Z=j[2]+h.columns;for(let Me=0;Me<h.columns;++Me){const Le=E[j[0]++]<<24|E[j[1]++]<<16|E[j[2]++]<<8;le+=Le,O.setUint32(ae,le,!0),ae+=4}break}}return O}function pe(h){const x=h.viewer,E={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Be(x,E),unknownUncompressedSize:Be(x,E),unknownCompressedSize:Be(x,E),acCompressedSize:Be(x,E),dcCompressedSize:Be(x,E),rleCompressedSize:Be(x,E),rleUncompressedSize:Be(x,E),rleRawSize:Be(x,E),totalAcUncompressedCount:Be(x,E),totalDcUncompressedCount:Be(x,E),acCompression:Be(x,E)};if(I.version<2)throw new Error("EXRLoader.parse: "+Mn.compression+" version "+I.version+" is unsupported");const O=new Array;let Z=ie(x,E)-2;for(;Z>0;){const Re=de(x.buffer,E),Te=Ne(x,E),ve=Te>>2&3,ut=(Te>>4)-1,je=new Int8Array([ut])[0],Pt=Ne(x,E);O.push({name:Re,index:je,type:Pt,compression:ve}),Z-=Re.length+3}const ae=Mn.channels,j=new Array(h.inputChannels.length);for(let Re=0;Re<h.inputChannels.length;++Re){const Te=j[Re]={},ve=ae[Re];Te.name=ve.name,Te.compression=0,Te.decoded=!1,Te.type=ve.pixelType,Te.pLinear=ve.pLinear,Te.width=h.columns,Te.height=h.lines}const te={idx:new Array(3)};for(let Re=0;Re<h.inputChannels.length;++Re){const Te=j[Re];for(let ve=0;ve<O.length;++ve){const ut=O[ve];Te.name==ut.name&&(Te.compression=ut.compression,ut.index>=0&&(te.idx[ut.index]=Re),Te.offset=Re)}}let K,le,_e;if(I.acCompressedSize>0)switch(I.acCompression){case 0:K=new Uint16Array(I.totalAcUncompressedCount),Je(h.array,x,E,I.acCompressedSize,K,I.totalAcUncompressedCount);break;case 1:const Re=h.array.slice(E.value,E.value+I.totalAcUncompressedCount),Te=fl(Re);K=new Uint16Array(Te.buffer),E.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Re={array:h.array,offset:E,size:I.dcCompressedSize};le=new Uint16Array(re(Re).buffer),E.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Re=h.array.slice(E.value,E.value+I.rleCompressedSize),Te=fl(Re);_e=Pe(Te.buffer),E.value+=I.rleCompressedSize}let Me=0;const Le=new Array(j.length);for(let Re=0;Re<Le.length;++Re)Le[Re]=new Array;for(let Re=0;Re<h.lines;++Re)for(let Te=0;Te<j.length;++Te)Le[Te].push(Me),Me+=j[Te].width*h.type*2;Fe(te,Le,j,K,le,D);for(let Re=0;Re<j.length;++Re){const Te=j[Re];if(!Te.decoded)switch(Te.compression){case 2:let ve=0,ut=0;for(let je=0;je<h.lines;++je){let Pt=Le[Re][ve];for(let st=0;st<Te.width;++st){for(let it=0;it<2*Te.type;++it)D[Pt++]=_e[ut+it*Te.width*Te.height];ut++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function de(h,x){const E=new Uint8Array(h);let D=0;for(;E[x.value+D]!=0;)D+=1;const I=new TextDecoder().decode(E.slice(x.value,x.value+D));return x.value=x.value+D+1,I}function Ge(h,x,E){const D=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+E));return x.value=x.value+E,D}function me(h,x){const E=Ae(h,x),D=Ue(h,x);return[E,D]}function xe(h,x){const E=Ue(h,x),D=Ue(h,x);return[E,D]}function Ae(h,x){const E=h.getInt32(x.value,!0);return x.value=x.value+4,E}function Ue(h,x){const E=h.getUint32(x.value,!0);return x.value=x.value+4,E}function ue(h,x){const E=h[x.value];return x.value=x.value+1,E}function Ne(h,x){const E=h.getUint8(x.value);return x.value=x.value+1,E}const Be=function(h,x){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(x.value,!0)):E=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,E};function nt(h,x){const E=h.getFloat32(x.value,!0);return x.value+=4,E}function G(h,x){return ud.toHalfFloat(nt(h,x))}function ne(h){const x=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function ie(h,x){const E=h.getUint16(x.value,!0);return x.value+=2,E}function he(h,x){return ne(ie(h,x))}function Oe(h,x,E,D){const I=E.value,O=[];for(;E.value<I+D-1;){const Z=de(x,E),ae=Ae(h,E),j=Ne(h,E);E.value+=3;const te=Ae(h,E),K=Ae(h,E);O.push({name:Z,pixelType:ae,pLinear:j,xSampling:te,ySampling:K})}return E.value+=1,O}function ze(h,x){const E=nt(h,x),D=nt(h,x),I=nt(h,x),O=nt(h,x),Z=nt(h,x),ae=nt(h,x),j=nt(h,x),te=nt(h,x);return{redX:E,redY:D,greenX:I,greenY:O,blueX:Z,blueY:ae,whiteX:j,whiteY:te}}function ot(h,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Ne(h,x);return E[D]}function Et(h,x){const E=Ae(h,x),D=Ae(h,x),I=Ae(h,x),O=Ae(h,x);return{xMin:E,yMin:D,xMax:I,yMax:O}}function jt(h,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Ne(h,x);return E[D]}function ft(h,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Ne(h,x);return E[D]}function It(h,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],I=Ue(h,x),O=Ue(h,x),Z=Ne(h,x);return{xSize:I,ySize:O,levelMode:E[Z&15],roundingMode:D[Z>>4]}}function Un(h,x){const E=nt(h,x),D=nt(h,x);return[E,D]}function Li(h,x){const E=nt(h,x),D=nt(h,x),I=nt(h,x);return[E,D,I]}function no(h,x,E,D,I){if(D==="string"||D==="stringvector"||D==="iccProfile")return Ge(x,E,I);if(D==="chlist")return Oe(h,x,E,I);if(D==="chromaticities")return ze(h,E);if(D==="compression")return ot(h,E);if(D==="box2i")return Et(h,E);if(D==="envmap")return ft(h,E);if(D==="tiledesc")return It(h,E);if(D==="lineOrder")return jt(h,E);if(D==="float")return nt(h,E);if(D==="v2f")return Un(h,E);if(D==="v3f")return Li(h,E);if(D==="int")return Ae(h,E);if(D==="rational")return me(h,E);if(D==="timecode")return xe(h,E);if(D==="preview")return E.value+=I,"skipped";E.value+=I}function Gn(h,x){const E=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function Ii(h,x,E){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=Gn(Math.max(x,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function Er(h,x,E,D){const I=new Array(h);for(let O=0;O<h;O++){const Z=1<<O;let ae=x/Z|0;D=="ROUND_UP"&&ae*Z<x&&(ae+=1);const j=Math.max(ae,1);I[O]=(j+E-1)/E|0}return I}function io(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.tileCount;D++){const I=Ae(h.viewer,x),O=Ae(h.viewer,x);x.value+=8,h.size=Ue(h.viewer,x);const Z=I*h.blockWidth,ae=O*h.blockHeight;h.columns=Z+h.blockWidth>h.width?h.width-Z:h.blockWidth,h.lines=ae+h.blockHeight>h.height?h.height-ae:h.blockHeight;const j=h.columns*h.totalBytes,K=h.size<h.lines*j?h.uncompress(h):$(h);x.value+=h.size;for(let le=0;le<h.lines;le++){const _e=le*h.columns*h.totalBytes;for(let Me=0;Me<h.inputChannels.length;Me++){const Le=Mn.channels[Me].name,Re=h.channelByteOffsets[Le]*h.columns,Te=h.decodeChannels[Le];if(Te===void 0)continue;E.value=_e+Re;const ve=(h.height-(1+ae+le))*h.outLineWidth;for(let ut=0;ut<h.columns;ut++){const je=ve+(ut+Z)*h.outputChannels+Te;h.byteArray[je]=h.getter(K,E)}}}}}function ti(){const h=this,x=h.offset,E={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const I=Ae(h.viewer,x)-Mn.dataWindow.yMin;h.size=Ue(h.viewer,x),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const O=h.columns*h.totalBytes,ae=h.size<h.lines*O?h.uncompress(h):$(h);x.value+=h.size;for(let j=0;j<h.blockHeight;j++){const te=D*h.blockHeight,K=j+h.scanOrder(te);if(K>=h.height)continue;const le=j*O,_e=(h.height-1-K)*h.outLineWidth;for(let Me=0;Me<h.inputChannels.length;Me++){const Le=Mn.channels[Me].name,Re=h.channelByteOffsets[Le]*h.columns,Te=h.decodeChannels[Le];if(Te!==void 0){E.value=le+Re;for(let ve=0;ve<h.columns;ve++){const ut=_e+ve*h.outputChannels+Te;h.byteArray[ut]=h.getter(ae,E)}}}}}}function ro(h,x,E){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const I=h.getUint8(5);D.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},E.value=8;let O=!0;for(;O;){const Z=de(x,E);if(Z==0)O=!1;else{const ae=de(x,E),j=Ue(h,E),te=no(h,x,E,ae,j);te===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ae}'.`):D[Z]=te}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function Ar(h,x,E,D,I){const O={size:0,viewer:x,array:E,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ji};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=$;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=Y;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=re;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=re;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ee;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Ee;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=pe;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=pe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const Z={};for(const K of h.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":Z[K.name]=!0,O.type=K.pixelType}let ae=!1;if(Z.R&&Z.G&&Z.B)ae=!Z.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(Z.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(I){case $n:O.getter=he;break;case $i:O.getter=ie;break}else if(O.type==2)switch(I){case $n:O.getter=nt;break;case $i:O.getter=G}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const j=O.width*O.height*O.outputChannels;switch(I){case $n:O.byteArray=new Float32Array(j),ae&&O.byteArray.fill(1,0,j);break;case $i:O.byteArray=new Uint16Array(j),ae&&O.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let te=0;for(const K of h.channels)O.decodeChannels[K.name]!==void 0&&(O.channelByteOffsets[K.name]=te),te+=K.pixelType*2;if(O.totalBytes=te,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=K=>K:O.scanOrder=K=>O.height-1-K,O.outputChannels==4?(O.format=xn,O.colorSpace=Ji):(O.format=Ih,O.colorSpace=nn),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const K=Ii(h.tiles,O.width,O.height),le=Er(K,O.width,h.tiles.xSize,h.tiles.roundingMode),_e=Er(K,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=le[0]*_e[0];for(let Me=0;Me<K;Me++)for(let Le=0;Le<_e[Me];Le++)for(let Re=0;Re<le[Me];Re++)Be(x,D);O.decode=io.bind(O)}else{O.blockWidth=O.width;const K=Math.ceil(O.height/O.blockHeight);for(let le=0;le<K;le++)Be(x,D);O.decode=ti.bind(O)}return O}const oo={value:0},er=new DataView(e),Os=new Uint8Array(e),Mn=ro(er,e,oo),Fn=Ar(Mn,er,Os,oo,this.type);return Fn.decode(),{header:Mn,width:Fn.width,height:Fn.height,data:Fn.byteArray,format:Fn.format,colorSpace:Fn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=vt,s.magFilter=vt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function An(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new Tr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const M=f.packedComponents,L=M.length,C=f.storageType.indexOf("Int")===0,A=1<<b*8,P=C?A*.5:0,w=1/A;S=new Float32Array(v*g);for(let y=0,R=0;y<v;y++)for(let F=0;F<L;F++){const N=M[F];S[R]=(p[R]+P)*w*N.delta+N.from,R++}}else S=p;if(m==="indices"){let M=S;S instanceof Uint8Array&&(M=new Uint16Array(S.length),M.set(S)),l.setIndex(new Jt(M,1))}else l.setAttribute(m,new Jt(S,g));a+=v*g*b}return l.computeBoundingSphere(),l}const dl=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],jc={density:1,friction:2,restitution:.8},LM=40,Po=8,IM=`
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
`,UM=`
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
uniform vec4 u_nearPositionRadiusList[${Po}];
uniform vec3 u_nearColorList[${Po}];

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

  for (int i = 0; i < ${Po}; i++) {
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
  gi /= float(${Po});

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
`,FM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,NM=`
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
`;function OM(i){const e={...jc},t={...jc},n={...jc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function zM(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Hd(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class BM{constructor(e,t,n,r,o,s=!1){this.position=new X((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Vn().setFromEuler(new mi(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new X,this.gravityAcc=new X}applyImpulse(){this.velocity.add(new X((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(LM),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function kM(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*dl.length),r=dl[n];const o=new eo,s=new qn(25,1,.1,100);s.position.set(0,0,25);const a=new ic({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Ji,a.toneMapping=Ki;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([An(u),new Promise((B,Pe)=>{new DM().load(d,B,void 0,Pe)})]);m.minFilter=vt,m.magFilter=vt,m.generateMipmaps=!1,m.colorSpace=nn;const v=new X(10,10,5),g=OM(r),_=zM("balloonBody-25"),p=[],b=[],S=[],M=[],L=Array.from({length:Po},()=>new Bt(0,0,-999,.01)),C=Array.from({length:Po},()=>new $e(1118481)),A=B=>new Rt({uniforms:{u_matcap:{value:m},u_color:{value:new $e(B.color)},u_bgColor:{value:new $e(1316117)},u_roughness:{value:B.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Bt(0,0,0,1)},u_selfRotation:{value:new Bt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Pe=>Pe.clone())},u_nearColorList:{value:C.map(Pe=>Pe.clone())}},vertexShader:IM,fragmentShader:UM});for(const B of g){const Pe=A(B),Fe=new Nt(f,Pe);Fe.frustumCulled=!1,Fe.scale.setScalar(B.radius),o.add(Fe),b.push(Fe),S.push(Pe),p.push(new BM(B.radius,B.density,B.friction,B.restitution,_,!1)),M.push({i:b.length-1,d2:0})}const P=new Rt({uniforms:{u_color0:{value:new $e(r)},u_color1:{value:new $e(1316117)},u_aspect:{value:1}},vertexShader:FM,fragmentShader:NM,depthWrite:!1}),w=new Nt(new fi(90,60),P);w.position.z=-12,w.renderOrder=-1e3,o.add(w);const y=new Qe(0,0),R=new X,F=new X,N=new X,z=new X,k=new X,H=new X,W=new X,V=new X,oe=new X,q=new X,ge=new Vn,be=.025,Ce=.1,Q=.12,J=B=>{const Pe=(e||i).getBoundingClientRect();y.x=(B.clientX-Pe.left)/Pe.width*2-1,y.y=-((B.clientY-Pe.top)/Pe.height*2-1)};window.addEventListener("pointermove",J);const ce=()=>{n=(n+1)%dl.length,r=dl[n],b.forEach((B,Pe)=>{const Fe=g[Pe];Fe.isColored&&(B.material.uniforms.u_color.value.set(r),Fe.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(B=>B.applyImpulse())},se=()=>ce();i.addEventListener("click",se),e==null||e.addEventListener("click",se);const ye=()=>{const B=e||i.parentElement,Pe=B.clientWidth,Fe=B.clientHeight,Ke=Pe/Math.max(Fe,1);s.fov=Hd(Ke,2.2,2/3,18,30),s.aspect=Ke,s.updateProjectionMatrix(),a.setSize(Pe,Fe,!1),P.uniforms.u_aspect.value=Ke};ye(),window.addEventListener("resize",ye);let De=0,Xe=performance.now();const Je=performance.now(),He=()=>{const Pe=(e||i).getBoundingClientRect();l=Pe.bottom>0&&Pe.top<window.innerHeight};window.addEventListener("scroll",He,{passive:!0}),He();const tt=B=>{if(De=requestAnimationFrame(tt),!l){Xe=B;return}let Pe=Math.min(.05,(B-Xe)/1e3);Xe=B;const Fe=t?1:2;Pe/=Fe;const Ke=(B-Je)/1e3,qe=Hd(Ke,.3,2,25,17.5);s.position.z=qe;for(let et=0;et<Fe;et++){const we=new X(y.x,y.y,.5).unproject(s);we.sub(s.position).normalize();const U=(0-s.position.z)/we.z;R.copy(s.position).addScaledVector(we,U),N.copy(R).sub(F).multiplyScalar(Q/Math.max(Pe,.001)),z.copy(R).sub(s.position);const T=z.lengthSq()||1;F.copy(R);for(let $=0;$<p.length;$++){const Y=p[$];Y.updateGravity(Pe),H.copy(Y.velocity),W.copy(Y.position);for(let pe=$+1;pe<p.length;pe++){const de=p[pe];oe.copy(de.velocity),q.copy(de.position),k.copy(W).sub(q);const Ge=k.length(),me=Y.radius+de.radius;if(Ge<me&&Ge>1e-6){const xe=Math.sqrt(Y.friction*de.friction);Y.frictionTot+=xe,de.frictionTot+=xe,k.normalize(),k.multiplyScalar(.5*(Ge-me)),W.sub(k),q.add(k),k.normalize();const Ae=H.dot(k),Ue=oe.dot(k),ue=Y.mass,Ne=de.mass,Be=(ue*Ae+Ne*Ue-Ne*(Ae-Ue)*Y.restitution)/(ue+Ne),nt=(ue*Ae+Ne*Ue-ue*(Ue-Ae)*de.restitution)/(ue+Ne);H.addScaledVector(k,(Be-Ae)/(1+xe)),oe.addScaledVector(k,(nt-Ue)/(1+xe)),de.position.copy(q),de.velocity.copy(oe)}}V.copy(W).sub(s.position);let re=V.dot(z)/T;re=V.sub(oe.copy(z).multiplyScalar(re)).length()-Y.radius-be,re<0&&(V.copy(W).sub(s.position).cross(z).normalize(),oe.copy(z).cross(V).normalize(),W.sub(oe.multiplyScalar(Ce*re)),oe.multiplyScalar(-Q/Math.max(Pe,.001)),H.add(oe),H.add(N));let ee=W.length();if(ee>0){V.set(1,1,1).normalize();let pe=1-Math.abs(V.dot(oe.copy(W).normalize()));pe*=Pe*Math.min(1,Math.max(0,ee/2))*.5,pe*=$%2*2-1,ge.setFromAxisAngle(V,pe),oe.copy(W).applyQuaternion(ge).sub(V.copy(W)),H.add(oe)}V.crossVectors(W,H);let Ee=V.length();Ee/=Y.inertia,Ee>0&&(V.normalize(),ge.setFromAxisAngle(V,Ee*Pe),Y.quaternion.premultiply(ge)),Y.position.copy(W),Y.velocity.copy(H),Y.update(Pe),["x","y","z"].forEach(pe=>{const de=pe==="z"?5.5:7.5;Y.position[pe]>de&&(Y.position[pe]=de,Y.velocity[pe]*=-.55),Y.position[pe]<-de&&(Y.position[pe]=-de,Y.velocity[pe]*=-.55)})}}for(let et=0;et<b.length;et++){const we=b[et],U=p[et];we.position.copy(U.position),we.quaternion.copy(U.quaternion);const T=S[et].uniforms;T.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),T.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),T.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let et=0;et<b.length;et++){for(let T=0;T<b.length;T++)M[T].i=T,M[T].d2=et===T?0:p[et].position.distanceToSquared(p[T].position);M.sort((T,$)=>T.d2-$.d2);const we=S[et].uniforms.u_nearPositionRadiusList.value,U=S[et].uniforms.u_nearColorList.value;for(let T=0;T<Po;T++){const $=M[T+1]?M[T+1].i:M[0].i,Y=p[$];we[T].set(Y.position.x,Y.position.y,Y.position.z,Y.radius),U[T].copy(S[$].uniforms.u_color.value)}}s.position.x+=(y.x*.9-s.position.x)*.04,s.position.y+=(y.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return De=requestAnimationFrame(tt),{cycleColor:ce,destroy(){cancelAnimationFrame(De),window.removeEventListener("pointermove",J),window.removeEventListener("resize",ye),window.removeEventListener("scroll",He),i.removeEventListener("click",se),e==null||e.removeEventListener("click",se),S.forEach(B=>B.dispose()),P.dispose(),a.dispose()}}}function Zt(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function ai(i){return Zt(i,0,1)}function Km(i,e,t){return(t-i)/(e-i||1)}function Eo(i,e,t){return Zt(Km(i,e,t),0,1)}function fe(i,e,t,n,r,o){let s=Eo(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function Vd(i,e,t,n,r,o){let s=Km(e,t,i);return n+s*(r-n)}function HM(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,S)=>_*(g*g*g)+p*(g*g)+b*g+S,a=(g,_,p,b,S)=>{const M=g*g;return _*(M*g)+p*M+b*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function gt(i){return HM(i,.35,0,0,1)}function ql(i){return i===1?1:1-Math.pow(2,-10*i)}function VM(i){return i===0?0:Math.pow(1024,i-1)}function GM(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function WM(i){return 1-Math.cos(i*Math.PI/2)}function ah(i){return Math.sin(i*Math.PI/2)}function XM(i){return-(Math.cos(Math.PI*i)-1)/2}function qM(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function lh(i){return i*i*i}function Yl(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Rn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,Vd(n,t,t-r,-1,0));s+=Math.max(0,Vd(n,0,-r,0,1));const a=fe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function YM(i){return 1-Math.pow(1-i,3)}function $M(i){return i*i*i*i}function ZM(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Hi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Gd=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function pl(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function Wd(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function Vh(i){const e={};let t=0;for(const f of Gd)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=pl(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=pl(v),p=pl(g),b=Math.max(_.height,Wd(v,1080/1496)),S=Math.max(p.height,Wd(g,1537/2e3));n=(_.top||m.top)-f;const M=(f+b)*.5,L=Math.max((f+S)*.5+f,f*1.85),C=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),A=document.documentElement.scrollHeight,P=C?Math.max(pl(C).bottom,A):A;let w=Math.max(f*1.35,P-m.bottom);const y=Math.max(f*12,A-f-n);let R=Math.max(f*8,m.bottom-n-M-L);const F=M+L+w;F+R>y&&(R=Math.max(f*6,y-F)),F+R>y&&(w=Math.max(f*.5,y-M-L-R)),e.blackFrameShow.pixelCount=M,e.astronautDrop.pixelCount=L,e.astronautWait.pixelCount=Math.max(f*.5,w),r=0;for(const N of Gd){const z=e[N.id];z.pixelFrom=r,z.weight&&(z.pixelCount=R*z.weight/t),z.id==="blackFrameIn"&&(z.pixelCount=Math.min(z.pixelCount,f*1.15)),r+=z.pixelCount,z.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,b=Math.max(p-_,1e-6),S=c()-_,M=S/b;return{ratio:Math.max(0,Math.min(1,M)),raw:M,active:M>=0&&M<1,global:c()/Math.max(r,1),pixel:S,pixelCount:b}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const KM=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,jM=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,JM="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",QM="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",jm=`
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
`,Jm=`
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
`,ew=`
${jm}
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
${Jm}
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
`,tw=`
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
`,Xd=`
${jm}
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
${Jm}
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
`,hr=5,ml=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,nw=`
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
`,iw=`
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
`,rw=`
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
`,ow=`
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
`;function cs(i,e,t=!1,n=0){const r={minFilter:vt,magFilter:vt,format:xn,type:n>0?Di:$i,depthBuffer:t,stencilBuffer:!1,samples:n},o=new br(i,e,r);return t&&n===0&&(o.depthTexture=new Wl(i,e),o.depthTexture.type=No),t&&n>0&&(o.depthTexture=new Wl(i,e),o.depthTexture.type=No),o}function sw(i,e,t,{isMobile:n=!1}={}){const r=new Qe(1,1);i.getSize(r);let o=!!n,s=cs(1,1,!0,4),a=cs(1,1,!1),l=cs(1,1,!1),c=cs(1,1,!1),u=null,d=null;const f=[],m=[];for(let Y=0;Y<hr;Y++)f.push(cs(1,1)),m.push(cs(1,1));const v=new tc(-1,1,1,-1,0,1),g=new Nt(new fi(2,2),new Bh),_=new eo;_.add(g);const p=new Rt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new Qe(1,1)},u_aspect:{value:new Qe(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:ml,fragmentShader:nw,depthTest:!1,depthWrite:!1,toneMapped:!1}),b=[];for(let Y=0;Y<hr;Y++){const re=3+Y*2;b.push(new Rt({uniforms:{u_texture:{value:null},u_resolution:{value:new Qe(1,1)},u_direction:{value:new Qe(1,0)}},defines:{KERNEL_RADIUS:re,SIGMA:re},vertexShader:ml,fragmentShader:iw,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const S=new Float32Array(hr),M=new Rt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:S}},vertexShader:ml,fragmentShader:rw,depthTest:!1,depthWrite:!1,toneMapped:!1});let L=0;const C=new Rt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new St},u_prevProjectionViewMatrix:{value:new St},u_aspect:{value:new Qe(1,1)},u_amount:{value:1}},vertexShader:ml,fragmentShader:ow,depthTest:!1,depthWrite:!1,toneMapped:!1}),A=new St,P=new St,w=new St,y=new St,R=new St,F=new X,N=new mi,z=new X(1,1,1),k=new Vn;let H=!0,W=1,V=!1,oe=0,q=0,ge=1,be=1,Ce=0,Q=.015,J=.6,ce=.3,se=.5,ye=0,De=new $e(0),Xe=!0,Je=1,He=1,tt=1;const B=new Qe(1,0),Pe=new Qe(0,1),Fe=(Y,re)=>{g.material=Y,i.setRenderTarget(re),i.clear(),i.render(_,v)},Ke=Y=>{const re=Math.max(1,Y);return 1<<Math.ceil(Math.log(re)/Math.log(2))},qe=(Y,re)=>{Je=Math.max(1,Math.floor(Y)),He=Math.max(1,Math.floor(re));const ee=1;s.setSize(Math.max(1,Math.floor(Je*ee)),Math.max(1,Math.floor(He*ee))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const Ee=o?3:2;let pe=Math.max(1,Math.ceil(Je/Ee)),de=Math.max(1,Math.ceil(He/Ee));c.setSize(pe,de);for(let me=0;me<hr;me++)f[me].setSize(pe,de),m[me].setSize(pe,de),pe=Math.max(1,Math.ceil(pe/2)),de=Math.max(1,Math.ceil(de/2));p.uniforms.u_texelSize.value.set(1/Je,1/He);const Ge=He/Math.sqrt(Je*Je+He*He)*2;p.uniforms.u_aspect.value.set(Je/He*Ge,Ge),C.uniforms.u_aspect.value.set(Je/Math.max(He,1),1)},et=({blackFrameInRatio:Y=0,blackTitleRatio:re=0,blackTunnelRatio:ee=0,whiteFrameRatio:Ee=0,whiteTunnelWaitRatio:pe=0,astronautDropRatio:de=0,isWhiteTunnelActive:Ge=!1,isBlackTunnelActive:me=!1,isMobile:xe=!1}={})=>{o=!!xe;let Ae=Y*(Lt.lerp(0,.15,re)+Lt.clamp((ee-.2)/.2,0,1)*.25);if(ee>=.65){const ue=Lt.clamp((ee-.65)/.1,0,1);Ae=Ae+(.08-Ae)*ue}if(Ge&&(Ae=0),!Ge&&Y>.55&&ee<.25){const ue=Lt.lerp(xe?.24:.42,xe?.12:.18,Lt.clamp(re/.5,0,1));Ae=Math.max(Ae,ue*Math.min(1,Y))}if(ge=ee<1?Lt.lerp(1,3,Lt.clamp(ee/.7,0,1)):1,Ge){const ue=de>.001&&de<1,Ne=xe?10:16;oe=de<1?Lt.lerp(ue?1.6:4,ue?1.1:2,Lt.clamp(Ee/.05,0,1)):Lt.lerp(0,Ne,Lt.clamp(pe/.1,0,1)),q=ue?xe?.28:.35:xe?.4:.5,be=ue?1:xe?1.1:1.2,tt=ue?.45:xe?.95:1.05,Ae=0;const Be=ue?.12:.3;ye=Lt.lerp(Be,0,Lt.clamp(pe/.1,0,1)),De.set(de<1?"#ffffff":"#000000")}else{tt=1;const ue=Lt.clamp(re/.25,0,1);oe=Lt.lerp(xe?22:30,xe?5:6,ue),ye=0,De.set("#000000")}Ce=Ae;const Ue=!Ge&&Y>.55&&ee<.2;J=Ue?.85:.6,Q=Ue?.04:xe?.012:.02,ce=Ue?.15:.3,se=Ue?.75:.5,Ge||(q=xe?.15:Ue?.55:.5,be=Ue?1.15:1),V=me||Ge},we=(Y,re=0)=>{F.set(0,0,Y),N.set(0,0,re)},U=()=>{H=!0},T=(Y,re)=>{const ee=i.autoClear;i.autoClear=!0,Fe(Y,re),i.autoClear=ee},$=()=>{if(!Xe){i.setRenderTarget(null),i.render(e,t);return}const Y=i.getRenderTarget(),re=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(De,ye),i.clear();const ee=e.background;e.background=null;const Ee=u==null?void 0:u.mesh,pe=!!(Ee!=null&&Ee.visible);pe&&(Ee.visible=!1);const de=d==null?void 0:d.mesh,Ge=!!(de!=null&&de.visible);if(Ge&&(de.visible=!1),i.render(e,t),e.background=ee,d!=null&&d.visible&&d.overlayScene?(de&&(de.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(d.overlayScene,v),i.autoClear=!0):Ge&&de&&(de.visible=!1),u!=null&&u.active&&u.overlayScene){for(let Ne=0;Ne<hr;Ne++)S[Ne]=0,M.uniforms[`u_blurTexture${Ne}`].value=s.texture;M.uniforms.u_texture.value=s.texture,M.uniforms.u_saturation.value=1;const ue=M.uniforms.u_scrollPaint.value;M.uniforms.u_scrollPaint.value=0,Fe(M,a),M.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,He),Ee&&(Ee.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else pe&&Ee&&(Ee.visible=!1);let me=s.texture;if(A.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),w.copy(A).invert(),V&&W>0?(H&&(P.copy(A),H=!1),R.compose(F,k.setFromEuler(N),z),R.invert(),y.copy(P).multiply(R),C.uniforms.u_texture.value=s.texture,C.uniforms.u_depthTexture.value=s.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(w),C.uniforms.u_prevProjectionViewMatrix.value.copy(y),C.uniforms.u_amount.value=W,T(C,l),me=l.texture,P.copy(A)):(P.copy(A),H=!0),oe<.05&&Ce<.005){M.uniforms.u_texture.value=me;for(let ue=0;ue<hr;ue++)S[ue]=0,M.uniforms[`u_blurTexture${ue}`].value=me;M.uniforms.u_saturation.value=1,i.setRenderTarget(null),Fe(M,null),i.autoClear=re,i.setRenderTarget(Y);return}p.uniforms.u_texture.value=me,p.uniforms.u_amount.value=be,p.uniforms.u_haloStrength.value=Ce,p.uniforms.u_haloWidth.value=J,p.uniforms.u_haloRGBShift.value=Q,p.uniforms.u_haloMaskInner.value=ce,p.uniforms.u_haloMaskOuter.value=se,T(p,c);const xe=o?3:hr;let Ae=c;for(let ue=0;ue<xe;ue++){const Ne=b[ue];Ne.uniforms.u_texture.value=Ae.texture,Ne.uniforms.u_resolution.value.set(Ae.width,Ae.height),Ne.uniforms.u_direction.value=B,T(Ne,f[ue]),Ne.uniforms.u_texture.value=f[ue].texture,Ne.uniforms.u_resolution.value.set(f[ue].width,f[ue].height),Ne.uniforms.u_direction.value=Pe,T(Ne,m[ue]),Ae=m[ue]}let Ue=oe;if(o)Ue*=tt;else{const ue=Ke(Je/2)>>1,Ne=Ke(He/2)>>1,Be=Math.max(1,Math.ceil(Math.log(ue*Ne)/Math.log(2)));Ue=oe*1024/Math.pow(Be,4)*.85*48*tt}for(let ue=0;ue<hr;ue++){if(ue>=xe){S[ue]=0;continue}const Ne=(xe-ue)/xe;let Be=Ue*(Ne+(1.2-Ne*2)*q)/Math.pow(2,xe-ue-1);!o&&ue===0&&(Be*=.15),!o&&ue===1&&(Be*=.45),!o&&ue>=3&&(Be*=1.75),S[ue]=Be}M.uniforms.u_texture.value=me,M.uniforms.u_saturation.value=ge;for(let ue=0;ue<hr;ue++){const Ne=ue<xe?m[ue].texture:m[xe-1].texture;M.uniforms[`u_blurTexture${ue}`].value=Ne}i.setRenderTarget(null),Fe(M,null),i.autoClear=re,i.setRenderTarget(Y)};return qe(r.x,r.y),{resize:qe,sync:et,render:$,setEfxOffset:we,markEfxSync:U,setGlassPass(Y){u=Y||null},setFrameBgPass(Y){d=Y||null},setEfxAmount(Y){W=Y},get clearAlpha(){return ye},setEnabled(Y){Xe=!!Y},setScrollVelocity(Y){const re=Math.min(1,Math.abs(Y)*.12);L+=(re-L)*.12,M.uniforms.u_scrollPaint.value=L},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),f.forEach(Y=>Y.dispose()),m.forEach(Y=>Y.dispose()),p.dispose(),M.dispose(),C.dispose(),b.forEach(Y=>Y.dispose()),g.geometry.dispose()}}}function aw(i,e,t){return i+(e-i)*t}const Vr=class Vr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<Vr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&Vr.MAX_VERTICES_MASK,a=s+1&Vr.MAX_VERTICES_MASK;return aw(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ye(Vr,"MAX_VERTICES",512),Ye(Vr,"MAX_VERTICES_MASK",Vr.MAX_VERTICES-1);let $l=Vr;const Vi=new X,pa=class pa{constructor(){this._position=new X,this._rotation=new Vn,this._euler=new mi,this._scale=new X(1,1,1),this._matrix=new St,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new X(1,1,1),this._rotationScale=new X(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new $l,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Vi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Vi.multiply(this._positionScale),Vi.multiplyScalar(this._positionAmplitude*pa.FBM_NORM),this._position.copy(Vi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Vi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Vi.multiply(this._rotationScale),Vi.multiplyScalar(this._rotationAmplitude*pa.FBM_NORM),this._euler.set(Vi.x,Vi.y,Vi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ye(pa,"FBM_NORM",1/.75);let fa=pa;class ch{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const qd=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],lw=26,So=64,cw=34,js=new Qe(1465,1024),uw=`
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
`,hw=`
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
`,fw=`
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
`,dw=`
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
`,_l=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function pw(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function mw(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?cw:lw,[s,a]=await Promise.all([new pr().loadAsync(`${e}assets/textures/tunnels/${r}`),An(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Bn,s.flipY=!1,s.needsUpdate=!0;const l=new Mi;i.add(l);const c=new fi(1,1),u=new Ro;for(const y in c.attributes)u.setAttribute(y,c.attributes[y]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let y=0,R=0;y<o;y++,R+=4){d[y]=y/o;const F=qd[y%qd.length];f[R]=F.x/js.x,f[R+1]=F.y/js.y,f[R+2]=F.w/js.x,f[R+3]=F.h/js.y,m[R]=Math.random(),m[R+1]=Math.random(),m[R+2]=Math.random(),m[R+3]=Math.random()}u.setAttribute("instanceId",new Cn(d,1)),u.setAttribute("instanceUvInfo",new Cn(f,4)),u.setAttribute("instanceRands",new Cn(m,4)),u.instanceCount=o;const v=new Rt({vertexShader:uw,fragmentShader:hw,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:js.clone()},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:wa,blendEquation:kn,blendSrc:kl,blendDst:Hl,blendEquationAlpha:kn,blendSrcAlpha:Tl,blendDstAlpha:Tl,defines:{COUNT:o}}),g=new Nt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new Ro;for(const y in a.attributes)_.setAttribute(y,a.attributes[y]);a.index&&(_.index=a.index);const p=pw("diamonds-3"),b=new Float32Array(So*3),S=new Float32Array(So*3),M=new Float32Array(So*4),L=new X;for(let y=0,R=0,F=0;y<So;y++,R+=3,F+=4)b[R]=16*(p()*2-1),b[R+1]=16*(p()*2-1),b[R+2]=19-(So-y-1)/(So-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[R]=L.x,S[R+1]=L.y,S[R+2]=L.z,M[F]=p(),M[F+1]=p(),M[F+2]=p(),M[F+3]=p();_.setAttribute("a_instancePosition",new Cn(b,3)),_.setAttribute("a_instanceRotationAxis",new Cn(S,3)),_.setAttribute("a_instanceRand",new Cn(M,4)),_.instanceCount=So;const C=[];for(let y=0;y<25;y++)C.push(new Bt(_l[y*4],_l[y*4+1],_l[y*4+2],_l[y*4+3]));const A=new Rt({vertexShader:fw,fragmentShader:dw,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new $e("#689aff")},u_planes:{value:C},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:wa,blendEquation:kn,blendSrc:vi,blendDst:Tl,blendEquationAlpha:kn,blendSrcAlpha:vi,blendDstAlpha:vi}),P=new Nt(_,A);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,l.add(P),g.renderOrder=15;const w=new $e(0);return{update({whiteTunnelWaitRatio:y=0,aspect:R=1,bg:F="#000000"}={}){const N=fe(y,0,.2,0,1),z=N>0;l.visible=z,g.visible=z,P.visible=z,v.uniforms.u_activeRatio.value=N,A.uniforms.u_activeRatio.value=N,v.uniforms.u_aspect.value=R,A.uniforms.u_aspect.value=R,w.set(F),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const gl=946,Yd=2,_w=`
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
`,gw=`
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
`;function $d(i,e,t){const n=new Ra(i,e,t,xn,$n);return n.magFilter=cn,n.minFilter=cn,n.wrapS=Hn,n.wrapT=Hn,n.needsUpdate=!0,n.colorSpace=nn,n}async function vw(i,{base:e}){const[t,n]=await Promise.all([An(`${e}assets/models/tunnels/broken_glass.buf`),An(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const F=new Float32Array(r.array.length);F.set(r.array),t.setAttribute("piece",new Jt(F,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(gl*3),l=new Float32Array(o.length/3*4);for(let F=0,N=0;F<o.length;F+=3,N+=4)l[N]=o[F],l[N+1]=o[F+1],l[N+2]=o[F+2],l[N+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=$d(l,gl,a),d=$d(c,gl,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new Qe(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new Qe(gl,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new Rt({uniforms:f,vertexShader:_w,fragmentShader:gw,transparent:!0,depthWrite:!1,depthTest:!0,side:Ln,toneMapped:!1}),v=new Nt(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new eo,_=new Mi;_.add(v),g.add(_);let p=0,b=1,S=1,M=0,L=1,C=!1;const A=new X(0,0,1),P=new Vn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return C},updateFromScroll:({glassBreakRatio:F=0,astronautDropRatio:N=0,frameHeight:z=0,frameRotation:k=0,frameScale:H=1}={})=>{p=fe(F,0,1,0,1,ah),b=fe(N,.75,1,1,0),S=Math.max(1,z||window.innerHeight),M=k||0,L=Math.max(1e-4,H||1),C=p>0&&N<1,_.visible=C,C||(v.visible=!1)},syncToCamera:(F,N=window.innerHeight)=>{if(!C||!F||p<=0)return v.visible=!1,!1;v.position.copy(F.position),v.quaternion.copy(F.quaternion),v.translateZ(-Yd);const z=Math.tan(F.fov*Math.PI/360)*Yd*2,k=S/Math.max(N,1)*z*L;P.setFromAxisAngle(A,-M),v.quaternion.multiply(P),v.scale.setScalar(Math.max(k,1e-4));const H=p*(a-1),W=Math.floor(H),V=Math.min(W+1,a-1);return f.u_frameFrom.value=W,f.u_frameTo.value=V,f.u_frameRatio.value=H-W,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(F,N,z)=>{f.u_backgroundTexture.value=F,f.u_resolution.value.set(N,z)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const xw=`
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
`,yw=`
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
`;function Zd(i){return new Promise(e=>{new pr().load(i,t=>{t.colorSpace=nn,t.flipY=!1,t.minFilter=vt,t.magFilter=vt,t.needsUpdate=!0,e(t)},void 0,()=>e(null))})}async function Sw({base:i}){const[e,t]=await Promise.all([Zd(`${i}assets/textures/tunnels/tablet.png`),Zd(`${i}assets/textures/tunnels/desktop.png`)]),n=(()=>{const p=new Uint8Array([0,0,0,255]),b=new Ra(p,1,1);return b.needsUpdate=!0,b})(),r={u_bgColor:{value:new $e("#000000")},u_frameOffset:{value:new Qe},u_frameScale:{value:1},u_frameRotate:{value:0},u_radiusScale:{value:1},u_glowColor:{value:new $e(0,0,0)},u_glowRadius:{value:.11},u_glowUpperBound:{value:.5},u_glowPow:{value:.1},u_glowTint:{value:0},u_domXY:{value:new Qe},u_domWH:{value:new Qe(1,1)},u_dom2Offset:{value:new Qe},u_dom2WH:{value:new Qe(1,1)},u_dom2Texture:{value:n},u_viewportResolution:{value:new Qe(1,1)},u_globalRadius:{value:24}},o=new fi(2,2),s=new Rt({uniforms:r,vertexShader:xw,fragmentShader:yw,depthTest:!1,depthWrite:!1,transparent:!0,blending:Zr,toneMapped:!1}),a=new Nt(o,s);a.frustumCulled=!1,a.renderOrder=-1,a.visible=!1,a.name="goal-frame-bg";const l=new eo;l.add(a);const c=new $e("#1a2ffb"),u=new $e("#000000"),d=new $e("#f0f1fa"),f=new $e;let m=0,v=0,g=0;return{mesh:a,overlayScene:l,updateFromScroll:({isBlackSide:p=!1,blackFrameInRatio:b=0,whiteFrameOutRatio:S=0,glassBreakRatio:M=0,astronautDropRatio:L=0,blackFrameShowRatio:C=0,frameRect:A=null,innerRect:P=null,viewportW:w=window.innerWidth,viewportH:y=window.innerHeight,globalRadius:R=24}={})=>{var Je,He;r.u_viewportResolution.value.set(w,y),r.u_globalRadius.value=R;const F=A,N=P||A;if(!F||F.width<4||F.height<4)return a.visible=!1,null;let z,k,H,W=0,V=0,oe=0,q=0;const ge=r.u_glowColor.value;if(p)z=Zt(b,0,1),k=z*.4,H=1,W=fe(z,0,1,.11,-.5),V=fe(z,0,1,.25,2),oe=fe(z,0,1,.06,.3),ge.copy(u).lerp(d,z),r.u_dom2Texture.value=(Je=e==null?void 0:e.image)!=null&&Je.width?e:n,r.u_bgColor.value.set("#000000");else{z=1-Zt(S,0,1),k=z*-.3,H=0;const tt=M;if(tt<0)q=.8,ge.copy(u);else{W=-.25,V=fe(tt,0,.15,0,.45),V=fe(tt,.15,.3,V,1),oe=fe(tt,0,.1,.35,.85),oe=fe(tt,.1,1,oe,.35),q=.28;let B=fe(tt,0,.1,1,0);B=fe(tt,.1,.8,B,.9),ge.copy(c).lerp(f.copy(u),B)}r.u_dom2Texture.value=(He=t==null?void 0:t.image)!=null&&He.width?t:n,r.u_bgColor.value.set("#000000")}const be=y*.2*(1-Zt(C,0,1)),Ce=Math.hypot(w,y),Q=Lt.lerp(1,Ce/Math.min(F.width,F.height),z),J=L,ce=F.top+be,se=ce+F.height,ye=F.bottom>0&&F.top<y&&F.right>0&&F.left<w&&se>0&&ce<y;if(a.visible=z<.999&&J<1&&ye,!a.visible)return null;m=F.left,v=ce,g=0,r.u_domWH.value.set(Math.max(1,Math.ceil(F.width)),Math.max(1,Math.ceil(F.height))),r.u_domXY.value.set(m,v-g),N?(r.u_dom2Offset.value.set(N.left+N.width*.5-F.left-F.width*.5,N.top+N.height*.5-(F.top+be)-F.height*.5),r.u_dom2WH.value.set(Math.max(1,N.width),Math.max(1,N.height))):(r.u_dom2Offset.value.set(0,0),r.u_dom2WH.value.set(F.width,F.height));const De=J<1?w*.5-F.left-F.width*.5:0,Xe=-(F.top+be+F.height*.5-y*.5);return r.u_frameOffset.value.set(De*z,Xe*z),r.u_frameScale.value=Q,r.u_frameRotate.value=k,r.u_radiusScale.value=H,r.u_glowRadius.value=W,r.u_glowUpperBound.value=V,r.u_glowPow.value=oe,r.u_glowTint.value=q,{frameScale:Q,frameRotation:k,cameraViewportOffsetX:De*(1-z),cameraViewportOffsetY:Xe*(1-z)}},resize(p,b){r.u_viewportResolution.value.set(p,b)},get visible(){return a.visible},dispose(){o.dispose(),s.dispose(),e==null||e.dispose(),t==null||t.dispose(),n.dispose()}}}const Js=53,vl=16,xl=20,Kd=["helmet","helmet_glass","glove_shoes","wearpack"],Qs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Jc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function jd(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Jd(i,e){const[t,n]=await Promise.all([jd(i),jd(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new Ra(u,r,o,xn,Di);return d.colorSpace=nn,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=Yi,d.magFilter=vt,d.anisotropy=8,d.wrapS=Hn,d.wrapT=Hn,d.needsUpdate=!0,d}function Qd(i,e,t){const n=new Ra(i,e,t,xn,$n);return n.magFilter=cn,n.minFilter=cn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Qc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new Cn(t,3)}const yl=`
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
`;async function Mw(i,e,t){var of,sf,af,lf;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,S,M,...L]=await Promise.all([An(`${r}assets/models/tunnels/astronaut_animations.buf`),An(`${r}assets/models/tunnels/astronaut_in_animation.buf`),An(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new pr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new pr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new pr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),An(`${r}assets/models/tunnels/tunnel_block_base.buf`),An(`${r}assets/models/tunnels/tunnel_block_wall.buf`),An(`${r}assets/models/tunnels/grid_base_ld.buf`),An(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?An(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?An(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new pr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),An(`${r}assets/models/tunnels/earth_card.buf`),new pr().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...Kd.map(Se=>An(`${r}assets/models/tunnels/astronaut_${Se}.buf`))]),C=new eo;C.background=new $e(0);const A=new X(0,0,25),P=new X(0,0,24),w=45,y=new qn(w,1,1,200);y.position.copy(A),y.lookAt(P);let R;try{R=new ic({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Se){throw console.error("Goal WebGL unavailable",Se),Se}R.setClearColor(0,1),R.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),R.outputColorSpace=Ji,R.toneMapping=Ki,R.autoClear=!0,c.colorSpace=nn,c.generateMipmaps=!1,c.minFilter=vt,c.magFilter=vt,u.colorSpace=nn,u.generateMipmaps=!1,u.minFilter=vt,u.magFilter=vt,d.colorSpace=nn,d.wrapS=d.wrapT=vs,d.generateMipmaps=!1,d.minFilter=vt,d.magFilter=vt;const F=s.attributes.position.array,N=s.attributes.orient.array,z=F.length/3,k=z/Js,H=Math.ceil(Math.sqrt(z)),W=Math.ceil(z/H),V=H*W,oe=new Float32Array(V*4),q=new Float32Array(V*4);for(let Se=0,Ve=0,Ie=0;Se<z;Se++,Ve+=3,Ie+=4)oe[Ie]=F[Ve],oe[Ie+1]=F[Ve+1],oe[Ie+2]=F[Ve+2],oe[Ie+3]=1,q[Ie]=N[Ie],q[Ie+1]=N[Ie+1],q[Ie+2]=N[Ie+2],q[Ie+3]=N[Ie+3];const ge=Qd(oe,H,W),be=Qd(q,H,W),Ce=new Cn(new Float32Array([0,0,18]),3);Ce.setUsage(Ir);const Q=new Cn(new Float32Array([0,0,0,1]),4);Q.setUsage(Ir);const J=new Cn(new Float32Array([0,1,0]),3);J.setUsage(Ir);const ce=new Cn(new Float32Array([90,91,0]),3);ce.setUsage(Ir);const se=()=>{const Se=new br(1,1,{minFilter:vt,magFilter:vt,format:xn,generateMipmaps:!1});return Se.texture.wrapS=Se.texture.wrapT=Vl,Se},ye=se(),De=se(),Xe=se();let Je=ye,He=De;const tt=`
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
}`,Pe=new Rt({uniforms:{u_texture:{value:null},u_direction:{value:new Qe(1,0)},u_resolution:{value:new Qe(1,1)}},vertexShader:B,fragmentShader:tt,depthTest:!1,depthWrite:!1,toneMapped:!1}),Fe=new tc(-1,1,1,-1,0,1),Ke=new eo,qe=new Nt(new fi(2,2),Pe);Ke.add(qe);const et=(Se,Ve)=>{const Ie=Math.max(1,Se.width),Ze=Math.max(1,Se.height);Pe.uniforms.u_resolution.value.set(Ie,Ze),Pe.uniforms.u_texture.value=Se.texture,Pe.uniforms.u_direction.value.set(Ve,0),R.setRenderTarget(Xe),R.clear(),R.render(Ke,Fe),Pe.uniforms.u_texture.value=Xe.texture,Pe.uniforms.u_direction.value.set(0,Ve),R.setRenderTarget(Se),R.clear(),R.render(Ke,Fe),R.setRenderTarget(null)},we={u_animationPositionTexture:{value:ge},u_animationOrientTexture:{value:be},u_animationTextureSize:{value:new Qe(H,W)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new $e("#566d80")},u_bgColor:{value:new $e("#000000")},u_sunPosition:{value:new X(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new $e(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new $e("#aaaafb")},u_cardPosition:{value:new X}},U={u_blackTunnelTexture:{value:Je.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},T={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Se=>{const[Ve,Ie]=await Promise.all([Jd(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_base.webp`),new pr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${Se}_nor.webp`)]);Ie.colorSpace=nn,Ie.flipY=!1,Ie.generateMipmaps=!0,Ie.minFilter=Yi,Ie.magFilter=vt,Ie.anisotropy=8,T[Se]={armb:Ve,nor:Ie}}));const $=((sf=(of=R.capabilities).getMaxAnisotropy)==null?void 0:sf.call(of))||8;for(const Se of Object.keys(T)){const{armb:Ve,nor:Ie}=T[Se];Ve&&(Ve.anisotropy=Math.min(8,$),Ve.needsUpdate=!0),Ie&&(Ie.anisotropy=Math.min(8,$),Ie.needsUpdate=!0)}T.helmet_glass=T.helmet;const Y=new Mi;C.add(Y);const re=[],ee=4,Ee=new Cn(new Float32Array(ee*3),3);Ee.setUsage(Ir);const pe=new Cn(new Float32Array(ee*4),4);pe.setUsage(Ir);const de=new Cn(new Float32Array(ee*3),3);de.setUsage(Ir);const Ge=new Cn(new Float32Array(ee*3),3);Ge.setUsage(Ir);for(let Se=0;Se<ee;Se++)pe.setXYZW(Se,0,0,0,1),de.setXYZ(Se,0,1,0),Ge.setXYZ(Se,90,91,0);const me=[];let xe=0;const Ae={value:0};Kd.forEach((Se,Ve)=>{const Ie=L[Ve],Ze=new Ro;for(const pn in Ie.attributes)Ze.setAttribute(pn,Ie.attributes[pn]);Ie.index&&Ze.setIndex(Ie.index),Ze.instanceCount=1,Ze.setAttribute("instancePos",Ce),Ze.setAttribute("instanceOrient",Q),Ze.setAttribute("instanceAnimationFrameFromToBlend1",J),Ze.setAttribute("instanceAnimationFrameFromToBlend2",ce);const rt=Se==="helmet_glass"||Se==="card"?"helmet":Se,_t=Se==="helmet_glass",lt={...we,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor}},At={...we,...U,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor}},qt=new Rt({uniforms:lt,vertexShader:yl,fragmentShader:ew,transparent:!0,blending:Pi,side:Ln,defines:{BONE_COUNT:Js,IS_WHITE:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),dn=new Rt({uniforms:At,vertexShader:yl,fragmentShader:Xd,transparent:!0,blending:Pi,side:Ln,defines:{BONE_COUNT:Js,IS_BLACK:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),Wn=new Nt(Ze,qt);if(Wn.frustumCulled=!1,Wn.userData.whiteMat=qt,Wn.userData.blackMat=dn,Y.add(Wn),re.push(Wn),!_t){const pn=new Ro;for(const wi in Ie.attributes)pn.setAttribute(wi,Ie.attributes[wi]);Ie.index&&pn.setIndex(Ie.index),pn.instanceCount=ee,pn.setAttribute("instancePos",Ee),pn.setAttribute("instanceOrient",pe),pn.setAttribute("instanceAnimationFrameFromToBlend1",de),pn.setAttribute("instanceAnimationFrameFromToBlend2",Ge);const gn=new Rt({uniforms:{...At,u_armbTexture:{value:T[rt].armb},u_norTexture:{value:T[rt].nor},u_alpha:Ae},vertexShader:yl,fragmentShader:Xd,transparent:!0,depthWrite:!1,depthTest:!1,blending:wa,blendEquation:kn,blendSrc:vi,blendDst:vi,blendEquationAlpha:kn,blendSrcAlpha:vi,blendDstAlpha:vi,side:Ln,defines:{BONE_COUNT:Js,IS_BLACK:!0,IS_CLONE:!0}}),ln=new Nt(pn,gn);ln.frustumCulled=!1,ln.renderOrder=1e3,ln.visible=!1,Y.add(ln),me.push(ln)}});const Ue=new Qe(5,23),ue=new $l;let Ne=0,Be=!1;const nt=document.createElement("canvas");nt.width=nt.height=11;{const Se=nt.getContext("2d");Se.fillStyle="#000",Se.fillRect(0,0,11,11),Se.fillStyle="#f00",Se.fillRect(1,1,3,9),Se.fillStyle="#0f0",Se.fillRect(4,1,3,9),Se.fillStyle="#00f",Se.fillRect(7,1,3,9)}const G=new Hh(nt);G.needsUpdate=!0,G.minFilter=vt,G.magFilter=vt;const ne=await new pr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ne.minFilter=cn,ne.magFilter=cn,ne.colorSpace=nn,ne.flipY=!1;const ie=new fi(.2,.15).translate(0,1.68,.1);ie.setAttribute("boneIndices",new Jt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),ie.setAttribute("boneWeights",new Jt(new Float32Array([1,0,1,0,1,0,1,0]),2)),ie.setAttribute("tangent",new Jt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),ie.setAttribute("ao",new Jt(new Float32Array([1,1,1,1]),1));const he=new Ro;for(const Se in ie.attributes)he.setAttribute(Se,ie.attributes[Se]);ie.index&&he.setIndex(ie.index),he.instanceCount=1,he.setAttribute("instancePos",Ce),he.setAttribute("instanceOrient",Q),he.setAttribute("instanceAnimationFrameFromToBlend1",J),he.setAttribute("instanceAnimationFrameFromToBlend2",ce);const Oe=new Rt({uniforms:{...we,u_cardLedTexture:{value:G},u_cardTexture:{value:ne},u_cardColor:{value:new $e("#ddddff")},u_cardUvOffset:{value:new Qe(0,0)},u_cardTextureSize:{value:Ue},u_cardOpacity:{value:0}},vertexShader:yl,fragmentShader:tw,transparent:!0,depthTest:!1,depthWrite:!1,side:Ln,blending:wa,blendEquation:kn,blendSrc:vi,blendDst:vi,blendEquationAlpha:kn,blendSrcAlpha:vi,blendDstAlpha:vi,defines:{BONE_COUNT:Js}}),ze=new Nt(he,Oe);ze.frustumCulled=!1,ze.renderOrder=100,ze.visible=!1,Y.add(ze);const ot=new Mi;C.add(ot);const Et=new fa;Et.positionAmplitude=2,Et.positionFrequency=1,Et._enableRotationNoise=!1;const jt=Et.position;let ft=0,It=1,Un=typeof window<"u"?window.scrollY:0,Li=1;const no=(Se,Ve)=>{const Ie=new Ro;for(const lt in Se.attributes)Ie.setAttribute(lt,Se.attributes[lt]);Se.index&&Ie.setIndex(Se.index);const Ze=new Float32Array(vl);for(let lt=0;lt<vl;lt++)Ze[lt]=lt;Ie.setAttribute("a_instanceId",new Cn(Ze,1)),Ie.instanceCount=vl;const rt=new Rt({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:jt},u_time:{value:0}},vertexShader:JM,fragmentShader:QM,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:vl,...Ve?{IS_WALL:!0}:{}}}),_t=new Nt(Ie,rt);return _t.frustumCulled=!1,ot.add(_t),rt},Gn=no(f,!1),Ii=no(m,!0),Er=await mw(C,{base:r,isMobile:n,sharedTime:we.u_time}),io=new Rt({uniforms:{u_color:{value:new $e(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Pi}),ti=new Nt(new fi(200,200),io);ti.position.z=-80,ti.renderOrder=-10,C.add(ti),M.colorSpace=nn,M.generateMipmaps=!1,M.minFilter=vt,M.magFilter=vt;const ro={u_earthTexture:{value:M},u_bgColor:{value:new $e(0)},u_atmosphereColor:{value:new $e("#4169E1")}},Ar=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,oo=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,er=new Mi,Os=new Rt({uniforms:ro,vertexShader:Ar,fragmentShader:oo,depthWrite:!0,depthTest:!0}),Mn=new Nt(S,Os);Mn.frustumCulled=!1,Mn.renderOrder=-1,er.add(Mn),C.add(er);const Fn=new Mi;C.add(Fn);const h=await Jd(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);h.wrapS=h.wrapT=vs,b.colorSpace=nn,b.flipY=!1,b.wrapS=b.wrapT=vs;const x={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Je.texture},u_greebleArmbTexture:{value:h},u_greebleNormalTexture:{value:b},u_resolution:{value:new Qe(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new X(0,70,0)},u_color1:{value:new $e(Qs[0])},u_color2:{value:new $e(Jc[0])}},E=(Se,Ve,Ie)=>{const Ze=new Ro;for(const At in Se.attributes)Ze.setAttribute(At,Se.attributes[At]);Se.index&&Ze.setIndex(Se.index);const rt=Se.attributes.position.count;Ze.getAttribute("ao")||Ze.setAttribute("ao",new Jt(new Float32Array(rt).fill(1),1)),Ze.getAttribute("areaRatio")||Ze.setAttribute("areaRatio",new Jt(new Float32Array(rt),1)),Ze.getAttribute("height")||Ze.setAttribute("height",new Jt(new Float32Array(rt).fill(1),1)),Ze.getAttribute("cluster")||Ze.setAttribute("cluster",new Jt(new Float32Array(rt),1)),Ze.setAttribute("instancePos",Qc(Ve.attributes.position)),Ze.setAttribute("instanceGridIds",Qc(Ve.attributes.gridIds)),Ze.setAttribute("instanceAxis",Qc(Ve.attributes.rotAxis)),Ze.instanceCount=Ve.attributes.position.count;const _t=new Rt({uniforms:x,vertexShader:KM,fragmentShader:jM,side:Ln,transparent:!1,depthWrite:!0,blending:Zr,defines:{GRID_SIZE:xl,...Ie?{IS_HD:!0}:{}}}),lt=new Nt(Ze,_t);return lt.frustumCulled=!1,lt.renderOrder=Ie?2:1,Fn.add(lt),lt};E(v,g,!1),o&&_&&p&&E(_,p,!0);let D=0,I=0,O=0,Z=w,ae=0,j=-80,te=0;const K=new fa;K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0;const le=new ch(new X,1,.65,1.3),_e=new ch(new X,1,.85,1.1),Me=Array.from({length:ee},()=>{const Se=new fa;return Se.positionFrequency=.2,Se.rotationFrequency=.6,Se.positionAmplitude=12,Se.rotationAmplitude=10,Se}),Le=Float32Array.from({length:ee+1},(Se,Ve)=>Ve===0?0:Math.random()*2),Re=new Float32Array(ee),Te=new Float32Array(ee),ve=new X,ut=new Vn,je=new St,Pt=new St,st=new X,it=new X,pt=new Vn,ct=new mi,Mt=new X(1,1,1),ht=new $e,at=new $e,en=new X,wn=new X;let bn=0,so=0,rc=0,oc=0,Bo=.08;const Wh=.1;let La=!1,zs=0,Ia=0,Xh=0,Ua=0,Fa=0,qh=0,Yh=0;window.addEventListener("pointermove",Se=>{bn=Se.clientX/Math.max(window.innerWidth,1)*2-1,so=Se.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{La=!0},{passive:!0}),window.addEventListener("pointerup",()=>{La=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{La=!1},{passive:!0});const sc=()=>{y.near=1,y.far=200,y.position.copy(A),y.up.set(0,1,0),y.lookAt(P),y.fov=Z,en.set(0,0,-1).applyQuaternion(y.quaternion);let Se=wn.copy(P).sub(y.position).dot(en);const Ve=y.fov,Ie=Ve+O,Ze=Math.max(1,Math.min(170,Ie));let rt=Se*Math.tan(Ve/360*Math.PI/2)/Math.tan(Ze/360*Math.PI/2)-Se;Number.isFinite(rt)||(rt=0),y.translateZ(rt),y.fov=Ve,Se+=rt;const _t=Math.max(1,R.domElement.width||window.innerWidth),lt=Math.max(1,R.domElement.height||window.innerHeight);Math.abs(Ua)>.25||Math.abs(Fa)>.25?y.setViewOffset(_t,lt,Ua,Fa,_t,lt):y.clearViewOffset(),y.translateZ(Se*-1);const At=n?Bo*.35:Bo,qt=Math.max(-1,Math.min(1,so))*At,dn=Math.max(-1,Math.min(1,-bn))*At;rc+=(qt-rc)*Wh,oc+=(dn-oc)*Wh,ct.set(rc,oc,0),pt.setFromEuler(ct),y.quaternion.multiply(pt),y.translateZ(Se),y.updateProjectionMatrix()},a0=Se=>{K.update(Se),le.update(Se,K.position),st.copy(K.euler),_e.update(Se,st),ct.set(_e.value.x,_e.value.y,_e.value.z),pt.setFromEuler(ct),Pt.compose(le.value,pt,Mt),je.compose(ve,ut,Mt),je.multiply(Pt),je.decompose(st,pt,it);{const Ve=Math.max(1,R.domElement.width||window.innerWidth),Ie=Math.max(1,R.domElement.height||window.innerHeight),Ze=Math.max(.5,y.position.distanceTo(P)),rt=2*Math.tan((y.fov||45)*Math.PI/360)*Ze,_t=rt*(Ve/Ie),lt=.55;st.x+=qh/Ve*_t*lt,st.y+=Yh/Ie*rt*lt}if(Ce.setXYZ(0,st.x,st.y,st.z),Q.setXYZW(0,pt.x,pt.y,pt.z,pt.w),Ce.needsUpdate=!0,Q.needsUpdate=!0,lc=1+Math.min(3.5,le.valueVel.length()*.2+_e.valueVel.length()*.2),xe>.01&&!Vt&&!Ui){for(let Ve=0;Ve<ee;Ve++){const Ie=Me[Ve];Ie.positionFrequency=.2,Ie.rotationFrequency=.6,Ie.positionAmplitude=12,Ie.rotationAmplitude=10,Ie.update(Se),je.compose(ve,ut,Mt),je.multiply(Ie.matrix),je.decompose(st,pt,it);const Ze=Ve/Math.max(ee-1,1),rt=fe(xe,Ze*.3,.7+Ze*.3,1,0,XM);it.set(Ce.getX(0),Ce.getY(0),Ce.getZ(0)),st.lerp(it,rt),Ee.setXYZ(Ve,st.x,st.y,st.z),pe.setXYZW(Ve,pt.x,pt.y,pt.z,pt.w)}Ee.needsUpdate=!0,pe.needsUpdate=!0}},We=document.getElementById("home-goal-tunnel-sticky")||((af=i.closest)==null?void 0:af.call(i,"#home-goal-tunnel-sticky"))||((lf=e==null?void 0:e.querySelector)==null?void 0:lf.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,Nn=Vh(e);let fn=0,Bs=0,ko=0,Ct=0,ni=0,ac=0,ao=0,Na=0,tr=0,Ht=0,$h=0,Ui=!0,rn=!1,Vt=!1,Ho=0,nr=0,lc=1,cc=0,Zh=performance.now(),ks=!1,Kh=!1;const an=sw(R,C,y,{isMobile:n});let Fi=null,Rr=null;try{Fi=await vw(C,{base:r}),an.setGlassPass(Fi)}catch(Se){console.warn("Broken glass failed to load",Se)}try{Rr=await Sw({base:r}),an.setFrameBgPass(Rr)}catch(Se){console.warn("FrameBg failed to load",Se)}let jh=0,Jh=0;const Vo=()=>{var qt;const Se=(qt=We==null?void 0:We.querySelector)==null?void 0:qt.call(We,"[data-goal-screen-clip]"),Ve=We==null?void 0:We.classList.contains("is-windowed"),Ie=We==null?void 0:We.classList.contains("is-pinned"),Ze=Ve&&Se?Se:We;let rt=(Ze==null?void 0:Ze.clientWidth)||window.innerWidth,_t=(Ze==null?void 0:Ze.clientHeight)||window.innerHeight;if((Ie||!Ve)&&n&&window.visualViewport&&(rt=Math.round(window.visualViewport.width)||rt,_t=Math.round(window.visualViewport.height)||_t),rt=Math.max(1,rt),_t=Math.max(1,_t),rt===jh&&_t===Jh)return;jh=rt,Jh=_t,y.aspect=rt/_t,sc(),R.setSize(rt,_t,!1),an.resize(rt,_t),x.u_resolution.value.set(rt,_t);const lt=Math.max(1,Math.floor(rt*.25)),At=Math.max(1,Math.floor(_t*.25));(ye.width!==lt||ye.height!==At)&&(ye.setSize(lt,At),De.setSize(lt,At),Xe.setSize(lt,At))};Vo(),window.addEventListener("resize",Vo);const Qh=(Se,Ve,Ie=100)=>{const Ze=Se.attributes.position.array,rt=Se.attributes.orient.array,_t=Math.min(Math.floor(Ve),Ie-1),lt=Math.min(Math.ceil(Ve),Ie-1),At=Ve-Math.floor(Ve),qt=new X().fromArray(Ze,_t*3).lerp(new X().fromArray(Ze,lt*3),At),dn=new Vn().fromArray(rt,_t*4).slerp(new Vn().fromArray(rt,lt*4),At);return{p:qt,q:dn}},Oa=()=>{var lo,ir,Oi,Wo,ka,cf,uf;if(!e)return;const Se=window.innerHeight,Ve=window.scrollY||0;Ve!==Un&&(Li=Ve>Un?1:-1,Un=Ve),ni=Nn.range("blackFrameIn").ratio;const Ie=Nn.range("blackFrameShow").ratio;ko=Nn.range("blackTitle").ratio,Ct=Nn.range("blackTunnel").ratio,We!=null&&We.classList.contains("is-windowed")&&Vo(),ao=Nn.range("whiteTunnel").ratio,fn=Nn.between("whiteTunnel","whiteFrameOut").ratio,Na=Nn.range("whiteFrameOut").ratio,ac=Nn.range("whiteFrameBreak").ratio,$h=Nn.between("whiteTunnel","whiteFrameBreak").ratio,Ht=Nn.between("whiteFrameBreak","astronautDrop").ratio,tr=((lo=Nn.range("astronautWait"))==null?void 0:lo.ratio)??0,Xh=Nn.between("whiteFrameBreak","astronautWait").ratio;{const Wt=Nn.range("astronautDrop"),zi=window.innerHeight||1,Xo=Math.max(0,Wt.pixel||0),Gs=Math.min(Math.max(1,Wt.pixelCount||Xo),zi*(n?.32:.42)),Bi=Math.min(Xo,Gs),ki=window.innerWidth||1,Pr=((ir=We==null?void 0:We.querySelector)==null?void 0:ir.call(We,"[data-goal-screen-clip]"))||We||e.querySelector("#home-goal-image-out"),qo=(Oi=Pr==null?void 0:Pr.getBoundingClientRect)==null?void 0:Oi.call(Pr),hc=qo?qo.left+qo.width*.5-ki*.5:0;qh=fe(Ht,0,1,0,hc,Yl),Yh=-Bi*fe(Ht,.15,.85,0,1),Ua=0,Fa=0}Ui=ko<1,rn=Ct<1&&!Ui,Vt=fn<=1&&!rn&&!Ui,Bs=Vt?Hi(0,.15,$h):1,an.sync({blackFrameInRatio:ni,blackTitleRatio:ko,blackTunnelRatio:Ct,whiteFrameRatio:ao,whiteTunnelWaitRatio:tr,astronautDropRatio:Ht,isWhiteTunnelActive:Vt,isBlackTunnelActive:rn,isMobile:n});{const Wt=e.querySelector("#home-goal-image-out-inner"),zi=e.querySelector("#home-goal-image-out"),Xo=e.querySelector("#home-goal-image-in"),Gs=e.querySelector("#home-goal-image-in-inner"),Bi=zi==null?void 0:zi.getBoundingClientRect(),ki=Wt==null?void 0:Wt.getBoundingClientRect(),Pr=Xo==null?void 0:Xo.getBoundingClientRect(),qo=Gs==null?void 0:Gs.getBoundingClientRect(),hc=Nn.range("blackFrameShow").ratio,co=window.innerWidth||1,Yo=window.innerHeight||1;let uo=Bi&&Bi.height>8?Bi.height:ki&&ki.height>8?ki.height:0;uo<8&&(uo=((ki==null?void 0:ki.width)||(Wt==null?void 0:Wt.clientWidth)||(We==null?void 0:We.clientWidth)||co*.7)*(1537/2e3));const hf=rn||Ui,h0=We==null?void 0:We.classList.contains("is-pinned"),f0=We==null?void 0:We.classList.contains("is-windowed"),fc=(Wo=We==null?void 0:We.getBoundingClientRect)==null?void 0:Wo.call(We),Ws=(ka=We==null?void 0:We.querySelector)==null?void 0:ka.call(We,"[data-goal-screen-clip]"),Ha=(cf=Ws==null?void 0:Ws.getBoundingClientRect)==null?void 0:cf.call(Ws),Dr=Tt=>!!Tt&&Tt.width>8&&Tt.height>8&&Tt.bottom>8&&Tt.top<Yo-8&&Tt.right>8&&Tt.left<co-8,ff=2e3/1537,df=(Tt,ho)=>{const Xs=Math.max(8,ho),Ga=Xs*ff,_f=(Tt==null?void 0:Tt.width)||co,gf=(Tt==null?void 0:Tt.height)||Yo,vf=(Tt==null?void 0:Tt.left)||0,xf=(Tt==null?void 0:Tt.top)||0;return{left:vf+(_f-Ga)*.5,top:xf+(gf-Xs)*.5,width:Ga,height:Xs,right:vf+(_f-Ga)*.5+Ga,bottom:xf+(gf-Xs)*.5+Xs}};let vn,Va;if(hf)vn=Dr(Pr)?Pr:Dr(Ha)?Ha:Dr(fc)?fc:null,Va=Dr(qo)?qo:vn;else if(h0||f0){const Tt=Dr(Ha)?Ha:fc,ho=Dr(Bi)&&Bi.height>8?Bi.height:Math.min(((Tt==null?void 0:Tt.height)||Yo)*.72,((Tt==null?void 0:Tt.width)||co)*.92/ff);vn=df(Tt,ho),Va={left:vn.left+vn.width*.022,top:vn.top+vn.height*.028,width:vn.width*.957,height:vn.height*.702},uo=vn.height}else vn=Dr(Bi)?Bi:df({left:0,top:0,width:co,height:Yo},uo),Va=Dr(ki)?ki:vn;let pf=20;try{const Tt=getComputedStyle(document.documentElement),ho=parseFloat(Tt.getPropertyValue("--global-border-radius")||"");Number.isFinite(ho)&&ho>0&&(pf=ho)}catch{}const rr=Rr==null?void 0:Rr.updateFromScroll({isBlackSide:hf,blackFrameInRatio:ni,whiteFrameOutRatio:Na,glassBreakRatio:Ht,astronautDropRatio:Ht,blackFrameShowRatio:hc,frameRect:vn,innerRect:Va,viewportW:co,viewportH:Yo,globalRadius:pf});rr&&(Ua=rr.cameraViewportOffsetX||0,Fa=rr.cameraViewportOffsetY||0);const mf=1-Zt(Na,0,1),d0=Math.hypot(co,Yo),p0=Math.min((vn==null?void 0:vn.width)>8?vn.width:uo*(2e3/1537),uo),m0=(rr==null?void 0:rr.frameScale)??Lt.lerp(1,d0/Math.max(p0,1),mf),_0=(rr==null?void 0:rr.frameRotation)??mf*-.3;Fi&&Fi.updateFromScroll({glassBreakRatio:Ht,astronautDropRatio:Ht,frameHeight:uo,frameRotation:_0,frameScale:m0})}we.u_whiteTunnelRatio.value=fn,we.u_showRatio.value=Bs,we.u_frameOutRatio.value=ac,Gn.uniforms.u_ratio.value=fn,Ii.uniforms.u_ratio.value=fn,Gn.uniforms.u_ratioInverse.value=1-fn,Ii.uniforms.u_ratioInverse.value=1-fn,we.u_ambientColor.value.set(Vt&&Ht<1?"#6a7f94":"#566d80");const Ze=new $e("#ffffff");rn||Ui?Ze.set("#000000"):Vt&&Ze.set(Ht<1?"#ffffff":"#000000"),io.uniforms.u_color.value.copy(Ze),C.background=null,R.setClearColor(Ze,an.clearAlpha),we.u_bgColor.value.copy(Ze),We&&!We.classList.contains("is-windowed")&&(We.style.background=Ht>=1&&!n?"transparent":Ze.getStyle());const rt=We==null?void 0:We.classList.contains("is-windowed");!(We==null?void 0:We.classList.contains("is-pinned"))||rt?(document.documentElement.style.background="",document.body.style.background=""):Vt&&Ht>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):Vt?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):rn||Ui?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),ot.visible=Vt&&Ht<1,Fn.visible=rn,ti.visible=!(Vt&&Ht<1),ro.u_bgColor.value.copy(Ze);const lt=Lt.clamp(Ie,0,1),At=Lt.clamp(ni,0,1);Mn.position.y=-(10*(1-lt)+2.5+30*At),Mn.scale.setScalar(fe(At,0,.5,40,70)),er.rotation.x=fe(At,0,.5,0,-1),Mn.visible=At<1&&!Vt&&!rn;const qt=document.getElementById("header");qt&&((We==null?void 0:We.classList.contains("is-pinned"))?Vt||tr>0?qt.style.color="#000000":qt.style.color="#ffffff":qt.style.color="");const dn=e.dataset.goalPhase==="black-tunnel",Wn=e.dataset.goalPhase==="white";(rn&&!dn||Vt&&!Wn)&&an.markEfxSync();const pn=Vt;for(const Wt of re){const zi=pn?Wt.userData.whiteMat:Wt.userData.blackMat;Wt.material!==zi&&(Wt.material=zi)}xe=rn?Hi(.2,.4,Ct):0,Ae.value=xe;for(const Wt of me)Wt.visible=!Vt&&xe>.01;let gn;if(Vt){const Wt=fn<1?fe(fn,0,1,0,79):fe(Ht,0,1,79,99);gn=Qh(l,Wt,100),gn.p.y-=(n?0:.4)*ZM(Ht)}else gn=Qh(a,100*lh(ni),100);if(ve.copy(gn.p),ut.copy(gn.q),K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0,rn){const Wt=Ct;K.positionFrequency=.2+.5*Wt,K.rotationFrequency=.15,K.positionAmplitude=5*Wt,K.rotationAmplitude=60*Wt}else Vt&&(K.positionFrequency=fe(ao,0,.45,.5,.2),K.rotationFrequency=fe(ao,0,.45,.4,.15),K.positionAmplitude=fe(ao,0,.75,5,0),K.rotationAmplitude=fe(ao,0,.75,15,0),Ht>=1&&(K.positionFrequency=.35,K.rotationFrequency=.28,K.positionAmplitude=.55,K.rotationAmplitude=8));Y.visible=Bs>.02;const ln=window.innerHeight||1,wi=(uf=We==null?void 0:We.querySelector)==null?void 0:uf.call(We,"[data-goal-screen-clip]"),Go=Math.max(1,tr>.001||Ht>=1?ln:rt&&(wi==null?void 0:wi.clientHeight)||(We==null?void 0:We.clientHeight)||ln),Cr=ni<1?ni:tr>.001||Ht>=1?1:1-ao,Hs=Lt.lerp(Go,ln,Cr),Vs=A.distanceTo(P),za=w/180*Math.PI,Ba=Math.tan(za/2)*Vs*2*(ln/Math.max(Hs,1));if(Z=Math.atan(Ba/2/Vs)*2/Math.PI*180,n&&y.aspect>0&&y.aspect<.85){const zi=2*Math.atan(Math.tan(52*Math.PI/360)/y.aspect)*180/Math.PI;Z=Math.max(Z,Math.min(zi,82))}Vt?O=fe(fn,0,1,60,0):rn?(O=Math.sin(Ct*10+ft)*(n?4.5:7.5)*Hi(0,.2,Ct),Fn.position.z=-80*Eo(.2,0,Ct)):(O=0,Fn.position.z=-80),Bo=.08*Hi(.5,1,ko)+.02,fn>0&&(Bo*=fe(Nn.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Bo=fe(tr,0,.1,Bo,.05),Ia=(1-zs)*Li*2.5*fe(ni,0,.5,0,1)*fe(tr,0,.25,1,0),sc(),U.u_frameIn.value=ni,U.u_sunFactor.value=rn?1-Hi(.1,.2,Ct):1,U.u_blackTunnelRatio.value=rn?Hi(.1,.3,Ct):0,U.u_endRatio.value=rn?Hi(.65,.9,Ct):0,U.u_offsetZ.value=x.u_offsetZ.value;const Gt=fe(Ht,1,0,.15,.55)*(ac>0?1:0);we.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Gt);const Ni=We.getBoundingClientRect();ks=Ni.bottom>0&&Ni.top<Se,ks&&!Kh&&Ui&&(Ho=0,nr=0),Kh=ks,e.dataset.goalPhase=Vt?"white":rn?"black-tunnel":ni<.98||We!=null&&We.classList.contains("is-windowed")?"window":"title"},l0=Se=>{if(!rn){x.u_showRatio.value=0,an.setEfxOffset(0,0);return}x.u_showRatio.value=VM(Eo(0,.1,Ct));const Ve=x.u_outBloomFromToStrength.value;Ve.z=fe(Ct,.65,.75,0,.2),Ve.z=fe(Ct,.75,.85,Ve.z,.15),Ve.z=fe(Ct,.85,1,Ve.z,.15),Ve.x=fe(Ct,.75,.85,20,60),Ve.x=fe(Ct,.9,1,Ve.x,30);const Ie=fe(Ct,.6,1,0,1,WM);x.u_blackTunnelTransformRatio.value=Ie;const Ze=Li*Se;D+=Ze*Eo(.1,.3,Ct)*fe(Ie,0,.25,1,.5),I+=Ze*fe(Ie,0,.25,1.5,1);const rt=D,_t=Math.floor(rt),lt=rt-_t,At=(_t+Yl(lt))*xl+I*xl+Ct*xl*10,qt=-80*Eo(.2,0,Ct);let dn=qt-j,Wn=At-ae;(Math.abs(Wn)>8||Math.abs(dn)>20)&&(Wn=0,dn=0),te=dn+Wn,j=qt,ae=At,Fn.position.z=qt,x.u_offsetZ.value=At,U.u_offsetZ.value=At,x.u_time.value=ft;const pn=Qs.length*fe(Ct,.2,1,0,1),gn=Math.floor(pn),ln=Math.min(Math.ceil(pn),Qs.length-1),Go=pn-gn>.5?1:0;ht.set(Qs[gn]),at.set(Qs[ln]),ht.lerp(at,Go),x.u_color1.value.copy(ht),ht.set(Jc[gn]),at.set(Jc[ln]),ht.lerp(at,Go),x.u_color2.value.copy(ht);const Cr=n?.45:1;an.setEfxOffset(te*fe(Ct,0,.2,0,1)*Cr,te*Ie*.01*Cr),an.setEfxAmount(fe(Ct,0,.25,.35,.85)*(n?.35:1)),O=Math.sin(Ct*10+ft)*(n?4.5:7.5)*Hi(0,.2,Ct)};let uc=0;const c0=Se=>{if(!Vt){Er.update({whiteTunnelWaitRatio:0,aspect:y.aspect}),uc=fn;return}Et.update(Se),Gn.uniforms.u_time.value=ft,Ii.uniforms.u_time.value=ft,Gn.uniforms.u_fbm.value=jt,Ii.uniforms.u_fbm.value=jt;let Ve=fn-uc;Math.abs(Ve)>.08&&(Ve=0);const Ie=n?0:.7,Ze=Lt.clamp(-Ve*fe(fn,0,.9,500,0,ah)*Ie,-1,1),rt=Lt.clamp(-Ve*fe(fn,0,.8,45,0,ah)*Ie,-1,1);an.setEfxOffset(Ze,rt),an.setEfxAmount(n?0:fe(fn,.75,1,1,0)),uc=fn;const _t=Vt&&Ht>=1?"#000000":Vt?"#ffffff":"#000000",lt=n?Math.max(y.aspect,.95):Math.max(y.aspect,.01);Er.update({whiteTunnelWaitRatio:Ht>=1?tr:0,aspect:lt,bg:_t})},ef=()=>Oa();window.addEventListener("scroll",ef,{passive:!0}),Oa();const tf=Se=>{var Ba;const Ve=Math.min(.05,Math.max(0,Se||.016666666666666666));if(Zh=performance.now(),!ks){if(We){const Gt=We.getBoundingClientRect();Gt.bottom>0&&Gt.top<window.innerHeight&&an.render()}return}zs+=((La?1:0)-zs)*.1,It=fe(zs,0,1,1,.3)*Ve,It=fe(ni,0,1,Ve,It),It=fe(Xh,.5,.75,It,Ve),ft+=It,we.u_time.value=ft,Ia=(1-zs)*Li*2.5*fe(ni,0,.5,0,1)*fe(tr,0,.25,1,0),l0(It),c0(It),a0(It),rn&&(O=Math.sin(Ct*10+ft)*(n?4.5:7.5)*Hi(0,.2,Ct)),sc();const Ie=Ht,Ze=fe(Ie,0,.1,0,1)*fe(Ie,.9,1,1,0);we.u_loopLinearBlend.value=Ze;const rt=fe(Ie,.9,1,0,1,lh);Be=rt>0;let _t,lt,At,qt=!0;if(Ie<.5)nr=0,_t=Hi(-.3,1,ko)*.75,lt=0,At=89,Oe.uniforms.u_cardOpacity.value=0;else{_t=fe(Ie,.85,1,0,1)*(Ie>=1?1.45:1),lt=140,At=Math.min(287,Math.max(140,k-1));const Gt=Math.min(2,Math.max(0,.5+Math.max(0,ue.getFbm(ft*8,3)+.5)*4));Oe.uniforms.u_cardOpacity.value=Gt*rt,Ie<1?(nr=Math.max(0,nr),qt=!1):(qt=!0,nr===Number.POSITIVE_INFINITY&&(Ho=0),nr=0)}nr===0&&(Ho+=It*_t*lc),Ze===1&&(Ho=0);const dn=Math.max(1,At-lt+1),Wn=Le[0];let gn=(Wn+Ho)*60;gn=(gn%dn+dn)%dn;let ln=Math.floor(gn),wi=(ln+1)%dn+lt;ln+=lt,wi<ln&&!qt&&(wi=ln=lt,Ho=-Wn,nr=Number.POSITIVE_INFINITY);const Go=gn-Math.floor(gn);J.setXYZ(0,ln,wi,Go),J.needsUpdate=!0;const Cr=fe(Na+Ie,.9,2,90,139,$M),Hs=Math.floor(Cr),Vs=Math.ceil(Cr),za=Cr-Hs;ce.setXYZ(0,Hs,Vs,za),ce.needsUpdate=!0,ze.visible=Ie>=.95&&Bs>.02,Ne=Be?Ne+It:0;{const Gt=Ue.x,Ni=Ue.y,lo=Math.floor(10*Ne%(Gt*(Ni+1))),ir=lo/(Gt*(Ni+1)),Oi=Eo(0,.15,ir)*Eo(1,.9,ir);we.u_faceLedLight.value=Oi,Oe.uniforms.u_cardUvOffset.value.set(lo%Gt/Gt,(Ni-Math.floor(lo/Gt))/Ni)}if(we.u_cardPosition.value.set(Ce.getX(0),Ce.getY(0)+.9,Ce.getZ(0)),xe>.01&&!Vt&&!Ui){for(let Gt=0;Gt<ee;Gt++){Re[Gt]=(Re[Gt]+.2*It)%1,nr===0&&(Te[Gt]+=It*_t*lc);const ir=(Lt.lerp(0,Le[Gt+1],xe)+Te[Gt])*60%dn;let Oi=Math.floor(ir),Wo=(Oi+1)%dn+lt;Oi+=lt,Wo<Oi&&!qt&&(Wo=Oi=lt);const ka=ir-Math.floor(ir);de.setXYZ(Gt,Oi,Wo,ka),Ge.setXYZ(Gt,Hs,Vs,za)}de.needsUpdate=!0,Ge.needsUpdate=!0}if((Ba=an.setScrollVelocity)==null||Ba.call(an,Math.abs(Ia)+Math.abs(Li)*.5),rn){const Gt=x.u_resolution.value.clone();ot.visible=!1,ti.visible=!1,Y.visible=Bs>.02,x.u_feedbackTexture.value=Je.texture,x.u_resolution.value.set(He.width,He.height),R.setRenderTarget(He),R.setClearColor(0,0),R.clear(),R.render(C,y),et(He,n?10:16),et(He,n?3:4),R.setRenderTarget(null),x.u_resolution.value.copy(Gt);const Ni=Je;Je=He,He=Ni,x.u_feedbackTexture.value=Je.texture,U.u_blackTunnelTexture.value=Je.texture,ti.visible=!0}R.setClearColor(we.u_bgColor.value,an.clearAlpha),an.render()},nf=Se=>{cc=requestAnimationFrame(nf);const Ve=Math.min(.05,(Se-Zh)/1e3);Se-rf>50&&tf(Ve)};let rf=0;const u0=Se=>{rf=performance.now(),tf(Se)};return cc=requestAnimationFrame(nf),requestAnimationFrame(()=>{Vo(),Oa(),an.render()}),{resize:Vo,updateScroll:Oa,tickFrame:u0,getAutoScrollSpeed:()=>Ia,getGlassRatio:()=>(Fi==null?void 0:Fi.ratio)??0,getAstronautDropRatio:()=>Ht,getWhiteTunnelRatio:()=>fn,getBlackFrameInRatio:()=>ni,getBlackTunnelRatio:()=>Ct,getBlackTitleRatio:()=>ko,isGoalAudioActive:()=>!!(We&&(We.classList.contains("is-pinned")||We.classList.contains("is-windowed")||ks&&(Ui||rn||Vt))),destroy(){cancelAnimationFrame(cc),window.removeEventListener("resize",Vo),window.removeEventListener("scroll",ef),Fi==null||Fi.dispose(),Rr==null||Rr.dispose(),ye.dispose(),De.dispose(),Xe.dispose(),Pe.dispose(),an.destroy(),R.dispose()}}}function ww(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=Vh(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(C=>{C._offsetX=0});return}b.forEach(C=>{C.style.transform="translateZ(0)"});let S=g;b.forEach(C=>{const A=C.getBoundingClientRect();C._domRect=A,S-=A.width});let M=0;const L=S/(b.length-1);b.forEach(C=>{C._offsetX=-C._domRect.left+_+M,M+=C._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=fe(_,0,.25,0,1);r.progress();const S=window.visualViewport,M=Math.round((S==null?void 0:S.height)||window.innerHeight),L=Math.round((S==null?void 0:S.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const F=i.getBoundingClientRect(),N=window.scrollY||0,z=Math.round((S==null?void 0:S.offsetLeft)||0),k=Math.round((S==null?void 0:S.width)||window.innerWidth),W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+N,V=N>=W-1&&F.bottom>0,oe=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",V),u&&(u.style.height=V?`${M}px`:"0px"),V&&!oe?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!V&&oe&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.left="",t.style.width="",t.style.height="",window.dispatchEvent(new Event("resize"))),V&&(t.style.top=`${L}px`,t.style.left=`${z}px`,t.style.width=`${k}px`,t.style.height=`${M}px`,t.style.right="auto",t.style.bottom="auto"),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let C=fe(v,a,l,0,1);const A=C>0&&C<1;let P=fe(C,.5,1,1,o()?9:12,lh);P*=fe(C,0,.15,.85,1,YM);let w=fe(C,.9,1,1,0);w*=fe(C,0,.05,0,1),w*=fe(g,0,.12,1,0);const y=fe(C,.4,.6,0,1,Yl);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(w),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=A&&w>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(F=>{const N=F._offsetX||0;F.style.transform=`translateX(${y*N}px)`}),s){const F=fe(g,.02,.15,1,0);s.style.opacity=String(F),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const R=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":R<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Sl(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function bw(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function Mo(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function Tw(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=Mo(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=Mo(document.getElementById("home-reel-desc"),2),l=Mo(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(q=>{q.style.transform="translate3d(0, 100%, 0)"}),v.forEach(q=>{q.style.transform="translate3d(0, 100%, 0)",q.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(q=>{q.style.overflow="hidden",q.style.display="block",q.style.position="relative"}),f=[...Sl(r,"word"),...Sl(o,"word")],f.forEach(q=>{q.style.position="relative",q.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Sl(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),S=Mo(document.getElementById("home-featured-title"),2),M=Mo(document.getElementById("home-featured-disclaimer"),2),L=Mo(document.getElementById("home-featured-cta"),1);let C=[],A=[],P=!0;const w=()=>{P=!1,S&&(S._time=0,S._animating=!1),M&&(M._time=0,M._animating=!1),L&&(L._time=0,L._animating=!1),i()||(A.forEach(q=>{q.style.transform="translate3d(0, 100%, 0)"}),C.forEach(q=>{q.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",C=bw(S),M){const q=M.textContent.trim();M.textContent="";const ge=document.createElement("div");ge.className="line",ge.textContent=q,ge.style.transform="translate3d(0, 100%, 0)",ge.style.willChange="transform";const be=document.createElement("div");be.style.position="relative",be.style.overflow="hidden",be.appendChild(ge),M.appendChild(be),A=[ge]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),w()}})();const R=Mo(document.getElementById("home-goal-title"),2);let F=[];R&&(R.style.overflow="hidden",F=Sl(R,"word"),F.forEach(q=>{q.style.transform="translate3d(0, 100%, 0)",q.style.opacity="0"}));let N=0,z=!1,k=0;const H=q=>{if(!t||!e)return;if(!Rn(e).isActive){g=!0;return}g&&(g=!1,_());const be=Rn(t),Ce=Rn(s||a),J=window.innerHeight*.1;if(t._time=Zt(t._time+(t._animating?q:-q),0,2),a&&(a._time=Zt(a._time+(a._animating?q:-q),0,2)),l&&(l._ratio=ai(l._ratio+(l._animating?q:-q))),be.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):f.forEach((ce,se)=>{let ye,De;se<2?(ye=fe(t._time-Math.abs(2-se)/10,.5,1.2,-m,0,gt),De=fe(t._time-se/10,0,1,100,0,gt)):(ye=0,De=fe(t._time-se/10,0,1,-100,0,gt)),ce.style.transform=`translate3d(${ye}px, ${De}%, 0)`}),n)){const ce=be.showScreenOffset*-J*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Ce.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Ce.showScreenOffset*-J*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(se=>{se.style.opacity="1",se.style.transform="translate3d(0, 0, 0)"}):v.forEach((se,ye)=>{const De=fe(a._time-ye/100,0,1,.1,1,ql),Xe=fe(a._time-ye/100,0,1,100,0,ql);se.style.opacity=String(De),se.style.transform=`translate3d(0, ${Xe}%, 0)`})),l){const se=Ce.showScreenOffset*-J*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${se}px) translate3d(0, ${fe(l._ratio,0,1,150,0,gt)}%, 0) rotate(${fe(l._ratio,0,1,10,0,gt)}deg)`,l.style.opacity=String(gt(l._ratio))):(l.style.transform=`translateY(${se}px)`,l.style.opacity="1")}}if(c){const ce=Rn(c),se=ai(fe(ce.showScreenOffset,.05,.85,0,1,gt));c.style.opacity=String(se),c.style.transform=`translate3d(0, ${fe(se,0,1,80,0,gt)}px, 0) scale(${fe(se,0,1,.96,1,gt)})`}if(u){const ce=Rn(u);k=ai(fe(ce.showScreenOffset,0,.7,0,1,gt)),u.style.opacity=String(.4+k*.6),u.style.transform=`translate3d(0, ${fe(k,0,1,60,0,gt)}px, 0) scale(${fe(k,0,1,.94,1,gt)})`,z=k>.9,N=Zt(N+(z?q:-q*2),0,1.4),d.forEach((se,ye)=>{const De=fe(N-ye/10,0,.6,0,1,gt),Xe=fe(N-ye/10,0,.6,0,180,gt);se.style.transform=`scale(${De}) rotate(${Xe}deg)`,se.style.display="inline-block"})}},W=q=>{if(!b||!S)return;if(Rn(b).isActive){P&&w();const be=Rn(S),Ce=Rn(M),Q=Rn(L);S._time=Zt(S._time+(S._animating?q:-q),0,2),M&&(M._time=Zt(M._time+(M._animating?q:-q),0,2)),L&&(L._time=Zt(L._time+(L._animating?q:-q),0,1)),be.screenRatio>-1&&(S._animating=!0,i()?C.forEach(J=>{J.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((J,ce)=>{const se=fe(S._time*1.5-ce/20,0,1,1,0,gt),ye=fe(S._time*1.5-ce/20,0,1,10,0,gt);J.style.transform=`translate3d(0, ${se}em, 0) rotate(${ye}deg)`})),Ce.screenRatio>-1&&M&&(M._animating=!0,i()?A.forEach(J=>{J.style.transform="translate3d(0, 0, 0)"}):A.forEach((J,ce)=>{const se=fe(M._time-ce/20,0,1,100,0,gt);J.style.transform=`translate3d(0, ${se}%, 0)`})),Q.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${fe(L._time,0,1,150,0,gt)}%, 0) rotate(${fe(L._time,0,1,10,0,gt)}deg)`,L.style.opacity=String(gt(L._time))))}else P=!0},V=q=>{if(!R)return;Rn(R).screenRatio>-1&&(R._animating=!0),R._time=Zt(R._time+(R._animating?q:-q),0,2),F.forEach((be,Ce)=>{const Q=fe(R._time-Ce/20,0,1,0,1,gt),J=fe(R._time-Ce/20,0,1,100,0,gt);be.style.opacity=String(Q),be.style.transform=`translate3d(0, ${J}%, 0)`})},oe=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",oe),{update(q){H(q),W(q),V(q)},destroy(){window.removeEventListener("resize",oe)}}}const ep=28,Ew=4,Aw=8;function tp(){return window.innerWidth<812}function Rw(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,w;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(y=>{const R=document.createElement("div");if(R.className="project-item-line-2-inner-list",R.style.transform="translateY(-400%)",y===" ")R.style.width="0.3em";else for(let F=0;F<4;F++){const N=document.createElement("span");N.textContent=y,R.appendChild(N)}a.appendChild(R),d.push(R)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,S=!1,M=0,L=0,C=0,A=0;return tp()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(y){const R=Rn(t),F=R.ratio>-1&&R.ratio<1;F&&(S=!0),S&&(_+=y);const N=ai(fe(_,0,.85,0,1,gt)),z=fe(N,0,1,90,0,gt);if(t.style.opacity=String(N),t.style.transform=`translate3d(0, ${z}px, 0)`,s&&F){p+=y;const k=Math.min(c.length,Math.floor(ep*p)-Ew),H=Math.min(c.length,Math.floor(ep*p));let W="";for(let V=0;V<Math.max(0,k);V++)W+=c[V];for(let V=0;V<H-Math.max(0,k);V++)W+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=W}if(F&&(b+=y*.8),g=ai(g+(m?1:-1)*y*2.5),tp())d.forEach((k,H)=>{const W=ai(g-Math.abs(H-d.length-1)/100),V=fe(W,0,1,0,1.5,gt);k.style.transform=`translate3d(1.5em, 0, 0) translateX(${V}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((k,H)=>{const W=fe(H,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),V=ai(b-Math.cos(W)/Aw),oe=fe(V,0,1,500,0,GM),q=ai(g-Math.abs(H-d.length-1)/100),ge=fe(q,0,1,0,1.5,gt);k.style.transform=`translate3d(${ge}em, -${oe}%, 0)`}),l){const k=fe(g,.3,1,0,1,gt);l.style.transform=`translateX(${k}em)`}if(v=Zt(v+(f?1:-1)*y,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(C=(Math.random()-.5)*fe(v,0,.6,1,0)*8,A=(Math.random()-.5)*fe(v,0,.6,1,0)*8):(C*=.92,A*=.92),M+=(C-M)*.2,L+=(A-L)*.2;const k=fe(v,0,1,1,1.06,gt);o.style.transform=`translate3d(${M}px, ${L}px, 0) scale(${k})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Ot=768,zt=500;function np(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function xt(i,e){return`rgba(${i[0]},${i[1]},${i[2]},${e})`}function Qi(i,e,t,n){const r=i.createLinearGradient(0,0,Ot,zt);r.addColorStop(0,xt(e,1)),r.addColorStop(.55,xt(e,1)),r.addColorStop(1,xt(t,.35)),i.fillStyle=r,i.fillRect(0,0,Ot,zt);const o=Ot*(.35+.25*Math.sin(n*.35)),s=zt*(.4+.2*Math.cos(n*.28)),a=i.createRadialGradient(o,s,20,o,s,zt*.7);a.addColorStop(0,xt(t,.28)),a.addColorStop(1,xt(t,0)),i.fillStyle=a,i.fillRect(0,0,Ot,zt)}function Cw(i,e,t,n){Qi(i,e,t,n),i.save(),i.translate(Ot*.5,zt*.72);for(let r=0;r<18;r++){const o=(n*.35+r/18)%1,s=-o*zt*.85,a=.15+o*1.6;i.strokeStyle=xt(t,.15+o*.55),i.lineWidth=2*a,i.beginPath(),i.moveTo(-40*a,s),i.lineTo(40*a,s),i.stroke()}i.strokeStyle=xt(t,.55),i.lineWidth=3,i.beginPath(),i.moveTo(-Ot*.45,40),i.lineTo(0,-zt*.7),i.moveTo(Ot*.45,40),i.lineTo(0,-zt*.7),i.stroke();for(let r=0;r<24;r++){const o=(r*97+n*220)%Ot-Ot*.5,s=-((r*53+n*380)%(zt*.9));i.strokeStyle=xt(t,.35),i.lineWidth=1.5,i.beginPath(),i.moveTo(o,s),i.lineTo(o,s-18-r%5*6),i.stroke()}i.restore()}function Pw(i,e,t,n){Qi(i,e,t,n);const r=Ot*.5,o=zt*.48;for(let l=0;l<5;l++){const c=40+l*38;i.strokeStyle=xt(t,.18+l*.06),i.lineWidth=1.5,i.beginPath(),i.ellipse(r,o,c*1.6,c*.55,n*.15+l*.2,0,Math.PI*2),i.stroke();const u=n*(.6+l*.15)+l,d=r+Math.cos(u)*c*1.6,f=o+Math.sin(u)*c*.55;i.fillStyle=xt(t,.85),i.beginPath(),i.arc(d,f,4+l%2,0,Math.PI*2),i.fill()}const s=r+Math.sin(n*.4)*30,a=o+Math.cos(n*.35)*18;i.fillStyle=xt(t,.12),i.strokeStyle=xt(t,.5),i.lineWidth=1.5,i.fillRect(s-70,a-44,140,88),i.strokeRect(s-70,a-44,140,88)}function Dw(i,e,t,n){Qi(i,e,t,n);const r=[[.25,.35,22,1.1],[.55,.55,30,.8],[.72,.3,16,1.4],[.4,.7,20,1],[.8,.65,18,1.25]];for(const[o,s,a,l]of r){const c=o*Ot+Math.sin(n*l)*40,u=s*zt+Math.abs(Math.sin(n*l*1.3))*-50,d=i.createRadialGradient(c-a*.3,u-a*.3,2,c,u,a);d.addColorStop(0,xt([255,255,255],.85)),d.addColorStop(.4,xt(t,.9)),d.addColorStop(1,xt(t,.15)),i.fillStyle=d,i.beginPath(),i.arc(c,u,a,0,Math.PI*2),i.fill()}i.strokeStyle=xt(t,.12);for(let o=0;o<10;o++){const s=zt*.55+o*18+n*40%18;i.beginPath(),i.moveTo(40,s),i.lineTo(Ot-40,s),i.stroke()}}function Lw(i,e,t,n){Qi(i,e,t,n);const r=28,o=(Ot-80)/r;for(let s=0;s<r;s++){const a=40+Math.abs(Math.sin(n*1.2+s*.45))*160+Math.sin(n*.5+s)*30,l=40+s*o,c=Math.sin(n+s*.7)>0;i.fillStyle=c?xt(t,.75):xt([255,90,90],.55),i.fillRect(l+2,zt*.78-a,o-4,a)}i.strokeStyle=xt(t,.5),i.lineWidth=2,i.beginPath();for(let s=0;s<60;s++){const a=40+s/59*(Ot-80),l=zt*.35+Math.sin(n*1.5+s*.2)*50+Math.sin(s*.4)*20;s===0?i.moveTo(a,l):i.lineTo(a,l)}i.stroke()}function Iw(i,e,t,n){Qi(i,e,t,n);for(let r=0;r<5;r++){const o=zt*.25+r*55;i.strokeStyle=xt(t,.2+r*.08),i.lineWidth=3,i.setLineDash([20,28]),i.lineDashOffset=-n*(120+r*40),i.beginPath(),i.moveTo(0,o),i.lineTo(Ot,o+Math.sin(n+r)*8),i.stroke(),i.setLineDash([])}for(let r=0;r<6;r++){const o=(n*(180+r*40)+r*120)%(Ot+40)-20,s=zt*.28+r%5*55;i.fillStyle=xt(t,.9),i.shadowColor=xt(t,.8),i.shadowBlur=16,i.beginPath(),i.ellipse(o,s,18,8,0,0,Math.PI*2),i.fill(),i.shadowBlur=0}}function Uw(i,e,t,n){Qi(i,e,t,n);const r=40;i.lineCap="round",i.lineJoin="round";for(let a=0;a<2;a++){i.beginPath();for(let l=0;l<r;l++){const c=l/r,u=Ot*(.1+c*.8),d=zt*.5+Math.sin(c*Math.PI*3+n*2+a)*(60-a*20)+Math.cos(c*8+n+a)*20;l===0?i.moveTo(u,d):i.lineTo(u,d)}i.strokeStyle=xt(t,a===0?.85:.35),i.lineWidth=a===0?10:4,i.shadowColor=xt(t,.6),i.shadowBlur=18,i.stroke()}i.shadowBlur=0;const o=Ot*.9,s=zt*.5+Math.sin(Math.PI*3+n*2)*60;i.fillStyle=xt(t,1),i.beginPath(),i.arc(o,s,12,0,Math.PI*2),i.fill()}function Fw(i,e,t,n){Qi(i,e,t,n);const r=28,o=r*Math.sqrt(3);for(let s=-1;s<12;s++)for(let a=-1;a<16;a++){const l=a*r*1.5+40,c=s*o+a%2*(o*.5)+20,u=.15+.55*Math.abs(Math.sin(n*1.2+s*.4+a*.25));i.strokeStyle=xt(t,u),i.lineWidth=1.5,i.beginPath();for(let d=0;d<6;d++){const f=Math.PI/3*d,m=l+Math.cos(f)*r,v=c+Math.sin(f)*r;d===0?i.moveTo(m,v):i.lineTo(m,v)}i.closePath(),i.stroke(),(s+a+Math.floor(n*2))%7===0&&(i.fillStyle=xt(t,.25),i.fill())}}function Nw(i,e,t,n){Qi(i,e,t,n);const r=8,o=12,s=(Ot-80)/o,a=28;for(let l=0;l<r;l++)for(let c=0;c<o;c++){if(Math.sin(n*2+l*1.7+c*.9)>.65)continue;const d=40+c*s+l%2*(s*.5),f=50+l*(a+6)+Math.sin(n+c)*2;i.fillStyle=xt(t,.35+l/r*.45),i.strokeStyle=xt([255,220,200],.25),i.fillRect(d,f,s-4,a),i.strokeRect(d,f,s-4,a)}for(let l=0;l<30;l++){const c=(l*73+n*40)%Ot,u=(l*41+n*90)%zt;i.fillStyle=xt(t,.5),i.fillRect(c,u,3,3)}}function Qm(i,e,t,n){Qi(i,e,t,n);const r=Ot*.5,o=zt*.5;for(let s=0;s<10;s++){const a=(n*.25+s/10)%1,l=20+a*220;i.strokeStyle=xt(t,(1-a)*.55),i.lineWidth=2,i.beginPath(),i.ellipse(r,o,l*1.4,l*.55,0,0,Math.PI*2),i.stroke()}i.fillStyle=xt(t,.35),i.beginPath(),i.ellipse(r,o+10,18,34,0,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(r,o-28,14,0,Math.PI*2),i.fill()}function Ow(i,e,t,n){Qi(i,e,t,n),i.strokeStyle=xt(t,.85),i.lineWidth=2.5,i.beginPath();for(let r=0;r<Ot;r+=3){const o=zt*.5+Math.sin(r*.04+n*4)*40*Math.sin(n*2)+Math.sin(r*.12+n*6)*12;r===0?i.moveTo(r,o):i.lineTo(r,o)}i.stroke();for(let r=0;r<8;r++){const o=r/8*Math.PI*2+n*.4,s=Ot*.5+Math.cos(o)*160,a=zt*.5+Math.sin(o)*90;i.fillStyle=xt(t,.8),i.beginPath(),i.arc(s,a,5,0,Math.PI*2),i.fill(),i.strokeStyle=xt(t,.25),i.beginPath(),i.moveTo(Ot*.5,zt*.5),i.lineTo(s,a),i.stroke()}}const zw={zyrax_drive:Cw,orbit_desk:Pw,playfield:Dw,tradeforge:Lw,velocity_arena:Iw,neon_serpent:Uw,hexsweep:Fw,brickforge:Nw,zyrax_studio:Qm,server_pulse:Ow};function Bw(i){const e=document.createElement("canvas");e.width=Ot,e.height=zt;const t=e.getContext("2d",{alpha:!1}),n=np(i.colorBg||"#111111"),r=np(i.colorText||"#ffffff"),o=zw[i.id]||Qm,s=new Hh(e);s.colorSpace=Bn,s.wrapS=s.wrapT=Hn,s.minFilter=vt,s.magFilter=vt,s.generateMipmaps=!1;let a=-1;return{texture:s,size:new Qe(Ot,zt),update(l){l-a<1/30||(a=l,o(t,n,r,l),s.needsUpdate=!0)},dispose(){s.dispose()}}}function kw(){const i=document.createElement("canvas");i.width=256,i.height=256;const e=i.getContext("2d"),t=e.createRadialGradient(128,120,20,128,128,140);t.addColorStop(0,"#e8e8e8"),t.addColorStop(.45,"#888888"),t.addColorStop(1,"#222222"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new Hh(i);return n.colorSpace=nn,n.wrapS=n.wrapT=Hn,n.minFilter=vt,n.magFilter=vt,n.generateMipmaps=!1,n}const ip=12,rp=6,Hw=1.35,Vw=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gw=`
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
  float stepDist = dist / float(${ip});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${ip}; i++) {
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
  float numSampleInv = 1.0 / float(${rp});
  for (int i = 0; i < ${rp}; i++) {
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
`;function Ww(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function Xw(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){},beginOpen(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new ic({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(F){return n.remove(),console.warn("Featured WebGL unavailable",F),{update(){},resize(){},destroy(){},beginOpen(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Bn;const o=new eo,s=new tc(0,1,1,0,-1e3,1e3);s.position.z=10;const a={x:0,y:0},l=F=>{a.x=F.clientX,a.y=F.clientY};window.addEventListener("pointermove",l,{passive:!0});const c=new fi(1,1),u=kw(),d=[],f=Array.from(t.querySelectorAll(".project-item"));let m=null,v=null,g=0,_=!1,p=!1,b=0;const S=new Map;await Promise.all(f.map(async(F,N)=>{var B;const z=F.dataset.id||((B=i[N])==null?void 0:B.id),k=i.find(Pe=>Pe.id===z)||i[N]||{},H=F.querySelector(".project-item-main"),W=F.querySelector(".project-item-image img");W&&(W.style.opacity="0",W.setAttribute("aria-hidden","true"));const V=new $e(F.dataset.colorBg||"#111111"),oe=Bw({id:z,colorBg:F.dataset.colorBg||k.colorBg,colorText:F.dataset.colorText||k.colorText});oe.update(N*.37);const q=new X(0,0,-1),ge=new ch(new X,1,.6,2),be=Ww(1,2.2,.7,3);be.target=0;const Ce=new Qe,Q=new Qe,J={u_texture:{value:oe.texture},u_depthTexture:{value:u},u_colorBg:{value:V},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:oe.size.clone()},u_domWH:{value:new Qe(1,1)},u_shiftXY:{value:Ce},u_focusPos:{value:q},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new Qe(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ce=new Rt({uniforms:J,vertexShader:Vw,fragmentShader:Gw,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),se=new Nt(c,ce);se.frustumCulled=!1,se.renderOrder=10+N,se.visible=!1,o.add(se);let ye=!1,De=0,Xe=0,Je=0;const He=[0,.2,.3],tt=Pe=>{for(let Fe=0;Fe<He.length;Fe++)if(Pe<He[Fe])return Fe;return He.length};window.innerWidth>=812&&(H==null||H.addEventListener("mouseenter",()=>{_||(ye=!0)}),H==null||H.addEventListener("mouseleave",()=>{ye=!1})),F.addEventListener("click",Pe=>{if(Pe.metaKey||Pe.ctrlKey||Pe.shiftKey||Pe.altKey||Pe.button!==0)return;if(_){Pe.preventDefault();return}const Fe=k.url||F.getAttribute("href");Fe&&(Pe.preventDefault(),y(z,Fe))}),d.push({id:z,mesh:se,uniforms:J,cover:oe,focusDyn:ge,focusPos:q,zoomDyn:be,shiftXY:Ce,shiftXYTarget:Q,index:N,main:H,dom:F,get isHover(){return ye},set isHover(Pe){ye=Pe},update(Pe,Fe,Ke,qe,et,we,U){const T=U&&U===z,$=Rn(F);if(!($.ratio>-1&&$.ratio<1)&&!_||!H){Xe=0,se.visible=!1,J.u_showRatio.value=0;return}Xe+=Pe,oe.update(qe+N);const re=H.getBoundingClientRect();let ee=Math.max(1,re.width),Ee=Math.max(1,re.height),pe=re.left+ee*.5,de=Ke-(re.top+Ee*.5);_&&!S.has(z)&&S.set(z,{cx:pe,cy:de,w:ee,h:Ee});const Ge=S.get(z)||{cx:pe,cy:de,w:ee,h:Ee};if(_&&we>0&&U){const G=S.get(U);if(G){const ne=Math.max(Fe/G.w,Ke/G.h)*1.2,ie=Lt.lerp(1,ne,we),he=Lt.lerp(0,Fe*.5-G.cx,we),Oe=Lt.lerp(0,Ke*.5-G.cy,we);pe=(Ge.cx-G.cx)*ie+G.cx+he,de=(Ge.cy-G.cy)*ie+G.cy+Oe,ee=Ge.w*ie,Ee=Ge.h*ie,se.rotation.y=we*.3*((G.cx-Fe*.5)/Fe),se.rotation.z=-we*.3*((G.cx-Fe*.5)/Fe)}}else se.rotation.y=0,se.rotation.z=0;J.u_domWH.value.set(Ge.w,Ge.h),J.u_resolution.value.set(Fe,Ke),J.u_time.value=qe,J.u_rippleStrength.value=_?Math.min(.2,we*.12):Math.min(.15,et*.5),J.u_globalRadius.value=_?Math.min(Ge.w,Ge.h)*Lt.lerp(.04,0,we):Math.min(Ge.w,Ge.h)*.04;const me=fe(Xe,0,2,0,1,ql),xe=N%2-.5,Ae=_?0:(1-me)*xe*-Fe*.1,Ue=_?se.rotation.z:(1-me)*xe*.1;se.position.set(pe+Ae,de,T?2:0),se.scale.set(ee,Ee,1),_||(se.rotation.z=-Ue);const ue=fe(Xe,0,1.5,0,1,ql);J.u_showRatio.value=_?Math.max(ue,1):ue,se.visible=J.u_showRatio.value>.01,se.renderOrder=T?100:10+N;const Ne=De;if(De=Zt(De+(ye&&!_?1:-1)*Pe,0,1),Ne<De){const G=tt(Ne),ne=tt(De);ne!==G&&Q.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(fe(De,0,.6,1,0)),ne===He.length&&Q.multiplyScalar(.5)}else Q.multiplyScalar(.95);Ce.lerp(Q,.2);const Be=ge.target;if(ye&&!_||(T?we:0)>.01){if(ye&&!_){const G=De>0?fe(De,0,.3,1,0)*Ee*.75:0;Be.x=(a.x-re.left-re.width*.5+Math.cos(qe*20)*G)/re.width*-re.height,Be.y=(a.y-re.top-re.height*.5-Math.sin(qe*30)*G)/re.height*re.height}else Be.x=0,Be.y=0;Be.z=.5}else Be.x=0,Be.y=0,Be.z=-1;ge.update(Pe),q.copy(ge.value),be.target=ye||T?1:0,be.update(Pe),J.u_zoomRatio.value=be.value,Je=Zt(Je+(ye||T?.75:-1)*Pe,0,1),J.u_dofRangeOffset.value=Lt.lerp(0,-.5,Je),J.u_saturation.value=0,J.u_brightness.value=0,_?T?J.u_activeRatio.value=we*we:(J.u_activeRatio.value=Math.min(1,we*1.2),J.u_showRatio.value=Math.max(0,1-we*1.4)):J.u_activeRatio.value=0}})}));let M=1,L=1,C=0,A=window.scrollY,P=0;function w(F){var z,k;const N=window.lenis;F?(document.documentElement.classList.add("featured-opening"),(z=N==null?void 0:N.stop)==null||z.call(N)):(document.documentElement.classList.remove("featured-opening"),(k=N==null?void 0:N.start)==null||k.call(N))}function y(F,N){if(!_){m=F,v=N,_=!0,p=!1,g=0,b=0,S.clear(),w(!0);for(const z of d){if(!z.main)continue;const k=z.main.getBoundingClientRect();S.set(z.id,{cx:k.left+k.width*.5,cy:L-(k.top+k.height*.5),w:Math.max(1,k.width),h:Math.max(1,k.height)}),z.isHover=!1}}}const R=()=>{M=window.innerWidth,L=window.innerHeight,r.setSize(M,L,!1),s.left=0,s.right=M,s.top=L,s.bottom=0,s.updateProjectionMatrix()};return R(),window.addEventListener("resize",R),{beginOpen:y,update(F){if(C+=F,_&&(g=Math.min(1,g+F/Hw),b=Yl(g),g>=1&&!p)){p=!0;const W=v;setTimeout(()=>{W&&window.open(W,"_blank","noopener,noreferrer"),setTimeout(()=>{_=!1,m=null,v=null,g=0,b=0,S.clear(),w(!1)},400)},180)}const N=window.scrollY,z=Math.abs(N-A)/Math.max(F,.001);A=N,P+=(Math.min(1,z*.002)-P)*.15;const H=Rn(e).isActive||_;if(n.style.visibility=H?"visible":"hidden",n.style.zIndex=_?"40":"",!!H){for(const W of d)W.update(F,M,L,C,P,b,m);r.render(o,s)}},resize:R,destroy(){window.removeEventListener("pointermove",l),window.removeEventListener("resize",R),document.documentElement.classList.remove("has-featured-webgl","featured-opening"),d.forEach(F=>{var N;(N=F.cover)==null||N.dispose(),F.mesh.material.dispose()}),u.dispose(),c.dispose(),r.dispose(),n.remove()}}}function qw(){return window.innerWidth<812}function Yw(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function $w(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&Yw(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,S=0;const M=C=>{var P;if(!C)return;const A=(P=C.play)==null?void 0:P.call(C);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:C=>{var R;if(!i)return;const A=e?Rn(e):null,P=n?Rn(n):null,w=qw(),y=w?!!(P!=null&&P.isActive):!!A&&A.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",y),y){const F=(A==null?void 0:A.top)??0,N=(A==null?void 0:A.height)??1,z=window.innerHeight,k=F-(z-N)*.5,H=((P==null?void 0:P.top)??0)-(z-((P==null?void 0:P.height)??z))*.5;if(S=ai(fe(window.scrollY+F,k,H,0,1)),S=ai(fe((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,gt)),r&&(M(r),r.style.opacity=String(.35+S*.65)),t&&(M(t),t.style.opacity=String(1-S*.85)),e){const W=fe(S,0,1,1,1.08,gt);e.style.transform=`scale(${W})`,e.style.opacity=String(fe(S,.7,1,1,.15,gt))}if(n){const W=fe(S,0,1,48,0,gt),V=fe(S,0,1,.94,1,gt);n.style.transform=`translate3d(0, ${W}px, 0) scale(${V})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,b=S>.85}else(R=r==null?void 0:r.pause)==null||R.call(r),S=0,m=!1,v=!1,p=!1,b=!1;if(d=Zt(d+(m?C:-C),0,1e9),f=Math.min(S,ai(f+(v?C:-C))),u=d%l,o!=null&&o._splitted&&!w){const F=o._splitted.words;for(let N=0;N<F.length;N++){const z=F[N];c-u>l-1&&(z._randCharIndex=Math.round(Math.random()*(z._chars.length-1)));for(let k=0;k<z._chars.length;k++){const H=z._chars[k];let W=fe(f-N/4-k/20,0,.6,200,0,gt);k===z._randCharIndex&&(W+=fe(u-N/10,.5,1.3,0,-100,gt)),H._inner&&(H._inner.style.transform=`translate3d(0, ${W}%, 0)`)}}}c=u,g=Zt(g+(p?C:-C*2),0,1.4),_=Zt(_+(b?C:-C*2),0,1.4),s.forEach((F,N)=>{const z=fe(g-N/10,0,.6,0,1,gt),k=fe(g-N/10,0,.6,0,180,gt);F.style.transform=`scale(${z}) rotate(${k}deg)`}),a.forEach((F,N)=>{const z=fe(_-N/10,0,.6,0,1,gt),k=fe(_-N/10,0,.6,0,180,gt);F.style.transform=`scale(${z}) rotate(${k}deg)`})},destroy(){}}}const eu=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new X(-.0112049,-.0141946,0),boxMax:new X(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new X(-.0180006,-.00963629,0),boxMax:new X(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Zw=`
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
`,Kw=`
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
`,jw=`
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
`,Jw=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Qw(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function eb(){const i=Qw(),e="/zyrax-studio/",t=await Promise.all(eu.map(A=>An(`${e}assets/models/lines/${A.fileName}.buf`))),n=new eo,r=new qn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let s;try{s=new ic({canvas:i,alpha:!0,antialias:!o,premultipliedAlpha:!1,powerPreference:o?"low-power":"default"})}catch(A){return console.error("Lines WebGL unavailable",A),{update(){},resize(){},destroy(){},setPaused(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new X,c=new X,u=new Fs,d=new Qe,f=new St,m=new St,v=new St,g=new St;let _=!1,p=!0;for(let A=0;A<eu.length;A++){const P=eu[A],w=t[A],y=document.querySelector(P.sectionSelector);if(!y||!w)continue;const R=new Mi,F=new Mi;R.add(F),n.add(R);const N=new Rt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:P.aoThreshold},u_color0:{value:new $e(P.color0)},u_color1:{value:new $e(P.color1)},u_radius:{value:.008}},vertexShader:Zw,fragmentShader:Kw,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),z=new Nt(w,N);z.frustumCulled=!1,z.renderOrder=200,F.add(z);const k=new Rt({uniforms:{u_color0:{value:new $e(P.color0)},u_color1:{value:new $e(P.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:jw,fragmentShader:Jw,side:Ln,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),H=new Nt(new fi(2,2),k);H.frustumCulled=!1,H.renderOrder=200,F.add(H);const W=w.attributes.position.array,V=w.attributes.position.count,oe=new Float32Array(V);for(let q=0;q<V;q++)oe[q]=W[q*3+2];a.push({data:P,sectionEl:y,container:R,inner:F,mesh:z,mat:N,circle:H,circleMat:k,lineRatioArray:oe,cpAttr:w.attributes.CP,cdAttr:w.attributes.Cd,count:V,offsetY:0,framePos:new X,frameQuat:new Vn,frameScale:new X(1,1,1)})}let b=1,S=1;const M=()=>{b=window.innerWidth||1,S=window.innerHeight||1;const A=Math.sqrt(b*b+S*S),P=S/A;d.set(b/S*P,P),r.fov=60,r.aspect=b/S,r.position.set(b/2,-S/2,S/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(b/2,-S/2,0),r.updateProjectionMatrix(),s.setSize(b,S,!1)};M(),window.addEventListener("resize",M);const L=A=>{var T;const{data:P,sectionEl:w,container:y,inner:R,mat:F,circle:N,circleMat:z,lineRatioArray:k,cpAttr:H,cdAttr:W,count:V}=A,q=Rn(w).top+A.offsetY,ge=S,be=P.scrollToRatioFactors;let Ce=ai(-(q-be[0]*ge)/(be[1]*ge));Ce=qM(Ce);const Q=b<=812,J=.008*fe(b,540,1920,2,1)*(Q?.72:1),ce=b/d.x,se=S/d.y;let ye=P.margin.x,De=P.margin.y;Q&&P.id==="goal"&&(ye=.42,De=-.35),R.position.x=ye*ce,R.position.y=De*se-q,R.scale.set(ce,se,1),A._showSmooth==null&&(A._showSmooth=Ce),A._showSmooth+=(Ce-A._showSmooth)*(Q?.32:.18),A._targetA=Ce,F.uniforms.u_showRatio.value=A._showSmooth,F.uniforms.u_radius.value=J;const Xe=(T=w.dataset)==null?void 0:T.goalPhase,Je=P.id==="goal"&&(Xe==="black-tunnel"||Xe==="white");if(y.position.copy(A.framePos),y.quaternion.copy(A.frameQuat),y.scale.copy(A.frameScale),y.updateMatrixWorld(!0),u.min.copy(P.boxMin),u.max.copy(P.boxMax),u.applyMatrix4(R.matrixWorld),y.visible=!Je&&u.max.y>-S&&u.min.y<0&&A._showSmooth>.001,!y.visible)return;const He=A._showSmooth;let tt=0,B=V-1;for(;tt<B;){const $=tt+B+1>>1;k[$]<=He?tt=$:B=$-1}const Pe=tt,Fe=Math.min(Pe+1,V-1);let Ke=0;if(Pe<V-1){const $=k[Fe]-k[Pe]||1;Ke=(He-k[Pe])/$}l.fromArray(H.array,Pe*3),c.fromArray(H.array,Fe*3),l.lerp(c,Ke);const qe=W.array;let et=qe[Pe]*(1-Ke)+qe[Fe]*Ke;et=.9+.1*et;const we=ai((He-(P.aoThreshold-.02))/.04);N.position.copy(l),N.scale.set(J,J,1),z.uniforms.u_ao.value=Math.min(1,et+1-we);let U=k[Pe]*(1-Ke)+k[Fe]*Ke;U=1-Math.pow(1-Zt(U,0,1),2),z.uniforms.u_mixRatio.value=U},C=()=>{if(_){if(p){for(const w of a)w.container.visible=!1;s.clear(),p=!1}return}let A=!1,P=!1;for(const w of a){L(w),w.container.visible&&(A=!0);const y=w._targetA??0,R=w._showSmooth??0;Math.abs(y-R)>8e-4&&(P=!0)}(A||P||p)&&s.render(n,r),p=A||P};return C(),{update:C,resize:M,setGoalOffset(A){const P=a.find(w=>w.data.id==="goal");P&&(P.offsetY=A||0)},setGoalFrame({scale:A=1,rotation:P=0,active:w=!1}={}){const y=a.find(N=>N.data.id==="goal");if(!y)return;if(!w){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const R=b*.5,F=-S*.5;f.makeTranslation(R,F,0),m.makeRotationZ(-P),v.makeScale(A,A,1),g.makeTranslation(-R,-F,0),f.multiply(m).multiply(v).multiply(g),f.decompose(y.framePos,y.frameQuat,y.frameScale)},setPaused(A){if(_=!!A,_){for(const P of a)P.container.visible=!1;try{s.clear()}catch{}p=!1}},destroy(){window.removeEventListener("resize",M),s.dispose(),i.remove()}}}const tu=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function tb(i,e,t,n){var P;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const w=Array.from(e.childNodes);e.appendChild(f),w.forEach(y=>f.appendChild(y))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const w=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==w&&(m.src=w)};v();let g="",_=null,p=(P=e.parentElement)==null?void 0:P.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const w=s||a;if(!w)return null;const y=w.getBoundingClientRect();return y.width<8||y.height<8?null:{left:y.left,top:y.top,width:y.width,height:y.height}},S=()=>{const w=window.visualViewport;return tu&&w?{vw:Math.round(w.width)||window.innerWidth,vh:Math.round(w.height)||window.innerHeight,top:Math.round(w.offsetTop||0),left:Math.round(w.offsetLeft||0)}:{vw:window.innerWidth,vh:window.innerHeight,top:0,left:0}},M=(w,y=0,R=0)=>{if(!w)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const{vw:F,vh:N,top:z,left:k}=S();e.style.position="fixed",e.style.left=`${k}px`,e.style.top=`${z}px`,e.style.width=`${F}px`,e.style.height=`${N}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const H=Zt(R,0,1),W=w.left-k+w.width*d.left*(1-H),V=w.top-z+w.height*d.top*(1-H),oe=w.width*d.width+(F-w.width*d.width)*H,q=w.height*d.height+(N-w.height*d.height)*H;f&&(f.style.inset="unset",f.style.left=`${W}px`,f.style.top=`${V}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,oe)}px`,f.style.height=`${Math.max(1,q)}px`,f.style.borderRadius=H>.85?"0px":`${Math.min(w.width,w.height)*.03*(1-H)}px`,f.style.background="#000",f.style.transform=y?`rotate(${y}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${w.left-k}px`,m.style.top=`${w.top-z}px`,m.style.width=`${w.width}px`,m.style.height=`${w.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=y?`rotate(${y}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},L=()=>{var w;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(w=n==null?void 0:n.setGoalFrame)==null||w.call(n,{active:!1})},C=()=>{const w=t.range("blackFrameShow").ratio,y=t.range("blackFrameIn").ratio,R=t.range("blackTunnel").ratio,F=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),{vw:z,vh:k,top:H,left:W}=S(),V=N.bottom>0&&N.top<k;_=b();const oe=V&&R<.02&&F<.01&&y<.999;if(oe&&_){let q=Zt(y,0,1);if(_.top<k*.4){const J=Zt((k*.4-_.top)/(k*.65),0,1);q=Math.max(q,fe(J,0,1,0,1))}const ge={left:W,top:H,width:z,height:k},be={left:_.left+(ge.left-_.left)*q,top:_.top+(ge.top-_.top)*q,width:_.width+(ge.width-_.width)*q,height:_.height+(ge.height-_.height)*q},Ce=fe(q,0,1,0,.35)*(1-q);M(be,Ce,q);const Q=Math.max(fe(w,0,.2,.35,1),N.top<k*.85?1:0);if(e.style.opacity=String(Q),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(fe(q,0,.75,1,0)*Q),m.style.visibility=q>.92?"hidden":"visible"),o&&(o.style.visibility=q>.98?"hidden":"visible"),u&&(u.style.visibility=q>.55?"":"hidden"),l&&!tu){const J=fe(q,0,1,0,k*.12);l.style.transform=`translate3d(0, ${-J}px, 0)`}if(c&&!tu&&_){const J=i.querySelector("#home-goal-context"),ce=(J==null?void 0:J.getBoundingClientRect().top)??0,se=J&&parseFloat(getComputedStyle(J).paddingTop)||0,ye=_.top-ce-se+_.height*.5;c.style.top=`${ye}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:q>.01,scale:fe(q,0,1,1,2.4),rotation:Ce}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:q,blackFrameShow:w,frameRect:_}}if(g==="window"){L(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),e.classList.add("is-pinned"),e.style.position="fixed",e.style.left=`${W}px`,e.style.top=`${H}px`,e.style.width=`${z}px`,e.style.height=`${k}px`,e.style.right="auto",e.style.bottom="auto",e.style.zIndex="4",e.style.background="#000000",p&&(p.style.height="0px");let q=e.previousElementSibling;for(;q;){if(q!==p&&q.getAttribute("aria-hidden")==="true"){q.style.height=`${k}px`;break}q=q.previousElementSibling}e.parentElement!==document.body&&document.body.appendChild(e),g="full",window.dispatchEvent(new Event("resize"))}else!oe&&o&&R>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden"));return(!V||N.top>k*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:y,blackFrameShow:w,frameRect:_}},A=()=>{v(),C()};return window.addEventListener("resize",A),window.addEventListener("scroll",C,{passive:!0}),C(),{update:C,destroy(){window.removeEventListener("resize",A),window.removeEventListener("scroll",C),m==null||m.remove(),L()},getFrameRect:()=>_}}const op="/zyrax-studio/assets/audios/",nb={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},ib={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function sp(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function rb(){const i={};for(const[p,b]of Object.entries(nb))i[p]=sp(`${op}${b}`,{loop:!0,volume:0});const e={};for(const[p,b]of Object.entries(ib))e[p]=b.map(S=>sp(`${op}${S}`,{loop:!1,volume:.85}));let t=!1,n=null,r=null,o=null,s=1,a=1.2;const l={hover:0,click:0,focus:0,page:0,glass:0};let c=0;const u=async()=>{if(!t){t=!0;try{const p=i.generic;p.volume=0,await p.play(),p.pause(),p.currentTime=0,n||f("generic",.01)}catch{t=!1}}},d=p=>{if(!t)return;const b=e[p];if(!(b!=null&&b.length))return;const S=l[p]%b.length;l[p]=S+1;const M=b[S].cloneNode();M.volume=p==="focus"?.4:p==="glass"?1:.85,M.play().catch(()=>{})},f=(p,b=1.2)=>{if(!i[p]||n===p)return;r=n,o=p,s=0,a=Math.max(.05,b),n=p;const S=i[p];S.volume>.01&&!S.paused||(S.volume=0),t&&S.play().catch(()=>{})},m=p=>{if(t)if(o&&s<1){s=Math.min(1,s+p/a);const b=s*s*(3-2*s);if(r&&i[r]&&(i[r].volume=Math.max(0,1-b),b>=1)){i[r].pause();try{i[r].currentTime=0}catch{}}i[o]&&(i[o].volume=b,i[o].paused&&i[o].play().catch(()=>{})),b>=1&&(r=null,o=null)}else n&&i[n]&&(i[n].volume<1&&(i[n].volume=1),i[n].paused&&i[n].play().catch(()=>{}))},v=()=>{},g=({blackFrameInRatio:p=0,blackTunnelRatio:b=0,whiteTunnelRatio:S=0,astronautDropRatio:M=0}={})=>{const L=M,C=p,A=b,P=S;C>.5&&A===0?(c=0,f("cinematic_2",.5)):A>0&&P===0?(f("cinematic_3",.5),c=0):P>0&&L===0||P>0&&L<=.8?f("cinematic_2",.5):P>0&&L>.8?f("generic_end",1):(c=0,f("generic",1)),L===0?c=1:c===1&&(d("glass"),c=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(p=>{p.addEventListener("mouseenter",()=>d("hover")),p.addEventListener("click",()=>d("click"))});const _=()=>{u()};return window.addEventListener("pointerdown",_,{passive:!0}),window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("wheel",_,{passive:!0,once:!0}),window.addEventListener("keydown",_,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:v,syncTunnelAudio:g,playSfx:d,setEnabled(){},get enabled(){return!0},destroy(){Object.values(i).forEach(p=>{p.pause(),p.src=""})}}}const xr=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let nu=0;const Gh=({notifyResize:i=!1}={})=>{var n;const e=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,t=e*.01;document.documentElement.style.setProperty("--vh",`${t}px`),i&&xr&&Math.abs(e-nu)>1?(nu=e,window.dispatchEvent(new Event("resize"))):nu=e};Gh();window.addEventListener("resize",()=>Gh());let iu=0,e0=()=>{};const t0=()=>{iu||(iu=window.setTimeout(()=>{iu=0,Gh({notifyResize:!0}),e0()},xr?48:0))};var hp;(hp=window.visualViewport)==null||hp.addEventListener("resize",t0);var fp;(fp=window.visualViewport)==null||fp.addEventListener("scroll",t0);const Zi=new A0({duration:xr?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!xr,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:xr?.9:.82,touchMultiplier:xr?1:1.1});window.lenis=Zi;let ea=0,ta=0,da=!1,n0=0;window.addEventListener("wheel",()=>{n0=performance.now(),da=!0},{passive:!0});window.addEventListener("pointerdown",()=>{da=!0},{passive:!0});const ob="/zyrax-studio/assets/projects/",ap=document.getElementById("project-list");ap&&(ap.innerHTML=pm.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${ob}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const sb=document.getElementById("hero-canvas"),ab=document.getElementById("home-hero-visual-container"),Hr=document.getElementById("home-hero"),ru=document.getElementById("home-hero-title"),ou=document.getElementById("home-hero-visual-container"),lp=document.getElementById("home-hero-scroll-container"),Sr=document.getElementById("home-goal"),lb=document.getElementById("goal-tunnel-canvas"),cb=document.getElementById("home-goal-tunnel-title"),i0=document.getElementById("home-goal-tunnel-sticky"),r0=ww(Sr,cb,i0),ub=Sr?Vh(Sr):null,su=rb();let wt=null,cp="";const hb=Tw(),fb=Rw(),db=$w();let Xn=null,Ll=null;const o0=Sr?tb(Sr,i0,ub,{setGoalFrame:(...i)=>{var e;return(e=Xn==null?void 0:Xn.setGoalFrame)==null?void 0:e.call(Xn,...i)}}):{update(){}};e0=()=>{var i;o0.update(),r0.updateScroll(),(i=wt==null?void 0:wt.updateScroll)==null||i.call(wt)};let up=performance.now();Rh.ticker.add(i=>{var r,o,s,a,l,c,u;const e=performance.now(),t=Math.min(.05,(e-up)/1e3);if(up=e,!xr&&(wt!=null&&wt.getAutoScrollSpeed&&(ea=wt.getAutoScrollSpeed()),e-n0>80&&Math.abs(ea)>.01&&(da=!1),ta+=Math.abs(ea)>0&&!da?t:-1,ta=Math.max(0,Math.min(1,ta)),!da&&ta>0&&Math.abs(ea)>.01)){const f=window.innerHeight,m=ea*f*t*ta*.55,v=(Zi.animatedScroll??Zi.scroll??window.scrollY)+m;Zi.scrollTo(v,{immediate:!0,force:!0})}Zi.raf(i*1e3),hb.update(t),fb.update(t),Ll==null||Ll.update(t),db.update(t),Xn==null||Xn.update(),(r=wt==null?void 0:wt.tickFrame)==null||r.call(wt,t),su.update(t);const n=((o=Sr==null?void 0:Sr.dataset)==null?void 0:o.goalPhase)||"";n&&n!==cp&&(cp=n,su.syncGoalPhase(),(s=Xn==null?void 0:Xn.setPaused)==null||s.call(Xn,xr&&(n==="black-tunnel"||n==="white"))),wt!=null&&wt.getAstronautDropRatio&&su.syncTunnelAudio({blackFrameInRatio:((a=wt.getBlackFrameInRatio)==null?void 0:a.call(wt))??0,blackTunnelRatio:((l=wt.getBlackTunnelRatio)==null?void 0:l.call(wt))??0,whiteTunnelRatio:((c=wt.getWhiteTunnelRatio)==null?void 0:c.call(wt))??0,astronautDropRatio:((u=wt.getAstronautDropRatio)==null?void 0:u.call(wt))??0})});Rh.ticker.lagSmoothing(0);Zi.on("scroll",()=>{if(o0.update(),r0.updateScroll(),wt==null||wt.updateScroll(),!Hr)return;const i=Hr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));ru&&(ru.style.transform=`translate3d(0, ${t*-12}vh, 0)`,ru.style.opacity=String(Math.max(0,1-t*1.2))),ou&&(ou.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,ou.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),lp&&(lp.style.opacity=String(Math.max(0,1-t*2)))});eb().then(i=>{Xn=i}).catch(i=>console.error("Scroll lines failed",i));Mw(lb,Sr).then(i=>{wt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{kM(sb,ab).then(()=>Hr==null?void 0:Hr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Hr==null||Hr.classList.add("is-in")})});xr||Xw(pm).then(i=>{Ll=i}).catch(i=>console.error("Featured WebGL failed",i));function s0(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}s0(document.getElementById("home-hero-title"));s0(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const pb=document.querySelectorAll(".home-hero-scroll-container-cross");pb.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const au=document.getElementById("header"),lu=document.getElementById("header-container"),Gr=document.getElementById("header-background"),cu=document.getElementById("header-menu"),Ss=document.getElementById("header-right-menu-btn");let mr=!1;const Da=i=>{mr=!!i,au==null||au.classList.toggle("--menu-opened",mr),lu==null||lu.classList.toggle("--opened",mr),Gr==null||Gr.classList.toggle("--opened",mr),cu==null||cu.classList.toggle("--opened",mr),Ss==null||Ss.classList.toggle("--opened",mr),Gr&&(Gr.style.opacity=mr?window.innerWidth>=1e3?"0.2":"1":"0")};Ss==null||Ss.addEventListener("click",i=>{i.stopPropagation(),Da(!mr)});Gr==null||Gr.addEventListener("click",()=>Da(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Da(!1),t==="contact"?(e.preventDefault(),Zi.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Zi.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!mr)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Da(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Da(!1)});var dp;(dp=document.querySelector("[data-reel]"))==null||dp.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var pp;(pp=document.querySelector("#end-bottom"))==null||pp.addEventListener("click",i=>{i.preventDefault(),Zi.scrollTo("#footer-section")});var mp;(mp=document.querySelector("#footer-bottom-up"))==null||mp.addEventListener("click",i=>{i.preventDefault(),Zi.scrollTo(0)});
