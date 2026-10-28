var Xp=Object.defineProperty;var qp=(i,e,t)=>e in i?Xp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Xe=(i,e,t)=>qp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var ah="1.3.27";function td(i,e,t){return Math.max(i,Math.min(e,t))}function Yp(i,e,t){return(1-t)*i+t*e}function $p(i,e,t,n){return Yp(i,e,1-Math.exp(-t*n))}function Zp(i,e){return(i%e+e)%e}var Kp=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=td(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=$p(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function jp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Jp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=jp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},nd=class{constructor(){Xe(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Qp=100/6,dr={passive:!1};function lh(i,e){return i===1?Qp:i===2?e:1}var em=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new nd);Xe(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Xe(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Xe(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Xe(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=lh(n,this.window.width),o=lh(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,dr),this.element.addEventListener("touchstart",this.onTouchStart,dr),this.element.addEventListener("touchmove",this.onTouchMove,dr),this.element.addEventListener("touchend",this.onTouchEnd,dr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,dr),this.element.removeEventListener("touchstart",this.onTouchStart,dr),this.element.removeEventListener("touchmove",this.onTouchMove,dr),this.element.removeEventListener("touchend",this.onTouchEnd,dr)}};const ch=i=>Math.min(1,1.001-2**(-10*i));var tm=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:P=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:C=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"_rafId",null);Xe(this,"_isDraggingSelection",!1);Xe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xe(this,"isTouching");Xe(this,"isIos");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new Kp);Xe(this,"emitter",new nd);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Xe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xe(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Xe(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Xe(this,"onPointerDown",i=>{i.button===1&&this.reset()});Xe(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=ah,window.lenis||(window.lenis={}),window.lenis.version=ah,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=ch:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:S,anchors:x,autoToggle:P,allowNestedScroll:R,naiveDimensions:C,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Jp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new em(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?x.left:x.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=td(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=ch:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(i);if(r.computedStyle=R,o=["auto","overlay","scroll"].includes(R.overflowX),s=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,S,x,P;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,S=o,x=a,P=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,S=s,x=l,P=u;else return!1;return!P&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Zp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Qi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function id(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},_u,pn,Bt,fi=1e8,Pt=1/fi,_c=Math.PI*2,nm=_c/4,im=0,rd=Math.sqrt,rm=Math.cos,om=Math.sin,ln=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},gu=function(e){return typeof e>"u"},Bi=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},vu=function(){return typeof window<"u"},aa=function(e){return qt(e)||ln(e)},od=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,sm=/random\([^)]+\)/g,am=/,\s*/g,uh=/(?:-?\.?\d|\.)+/gi,sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,lm=/[^,'"\[\]\s]+/gi,cm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Ii,gc,xu,ei={},Za={},ld,cd=function(e){return(Za=Zo(e,ei))&&Wn},yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ks=function(e,t){return!t&&console.warn(e)},ud=function(e,t){return e&&(ei[e]=t)&&Za&&(Za[e]=t)||ei},Hs=function(){return 0},um={suppressEvents:!0,isStart:!0,kill:!1},za={suppressEvents:!0,kill:!1},hm={suppressEvents:!0},Su={},Cr=[],vc={},hd,Yn={},bl={},hh=30,Ba=[],Mu="",wu=function(e){var t=e[0],n,r;if(Bi(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ba.length;r--&&!Ba[r].targetTest(t););n=Ba[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Id(e[r],n)))||e.splice(r,1);return e},so=function(e){return e._gsap||wu(di(e))[0]._gsap},fd=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():gu(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},ko=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},fm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ka=function(){var e=Cr.length,t=Cr.slice(0),n,r;for(vc={},Cr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bu=function(e){return!!(e._initted||e._startAt||e.add)},dd=function(e,t,n,r){Cr.length&&!pn&&Ka(),e.render(t,n,!!(pn&&t<0&&bu(e))),Cr.length&&!pn&&Ka()},pd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lm).length<2?t:ln(e)?e.trim():e},md=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Zo=function(e,t){for(var n in t)e[n]=t[n];return e},fh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ja=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ps=function(e){var t=e.parent||Vt,n=e.keyframes?dm(bn(e.keyframes)):ti;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},_d=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},cl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xc=function(e,t,n,r){return e._startAt&&(pn?e._startAt.revert(za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_m=function i(e){return!e||e._ts&&i(e.parent)},dh=function(e){return e._repeat?Ko(e._tTime,e=e.duration()+e._rDelay)*e:0},Ko=function(e,t){var n=Math.floor(e=Ht(e/t));return e&&n===e?n-1:n},Ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ul=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ul(e),n._dirty||ao(n,e)),e},gd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ja(e.rawTime(),t),(!t._dur||Ks(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Fi=function(e,t,n,r){return t.parent&&Lr(t),t._start=Ht((sr(n)?n:n||e!==Vt?li(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_d(e,t,"_first","_last",e._sort?"_start":0),yc(t)||(e._recent=t),r||gd(e,t),e._ts<0&&hl(e,e._tTime),e},vd=function(e,t){return(ei.ScrollTrigger||yu("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},xd=function(e,t,n,r,o){if(Eu(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hd!==$n.frame)return Cr.push(e),e._lazy=[o,r],1},gm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vm=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&gm(e)&&!(!e._initted&&yc(e))||(e._ts<0||e._dp._ts<0)&&!yc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ks(0,e._tDur,t),u=Ko(l,a),e._yoyo&&u&1&&(s=1-s),u!==Ko(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||pn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&xd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&xc(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Lr(e,1),!n&&!pn&&(Kn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},jo=function(e,t,n,r){var o=e._repeat,s=Ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Ht(s*(o+1)+e._rDelay*o):s,a>0&&!r&&hl(e,e._tTime=e._tDur*a),e.parent&&ul(e),n||ao(e.parent,e),e},ph=function(e){return e instanceof On?ao(e):jo(e,e._dur)},ym={_start:0,endTime:Hs,totalDuration:Hs},li=function i(e,t,n){var r=e.labels,o=e._recent||ym,s=e.duration()>=fi?o.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Ds=function(e,t,n){var r=sr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;s.immediateRender=Bn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Qt(t[0],s,t[o+1])},Nr=function(e,t){return e||e===0?t(e):t},Ks=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!ln(e)||!(t=cm.exec(e))?"":t[1]},Sm=function(e,t,n){return Nr(n,function(r){return Ks(e,t,r)})},Sc=[].slice,yd=function(e,t){return e&&Bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bi(e[0]))&&!e.nodeType&&e!==Ii},Mm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return ln(r)&&!t||yd(r,1)?(o=n).push.apply(o,di(r)):n.push(r)})||n},di=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):ln(e)&&!n&&(gc||!Jo())?Sc.call((t||xu).querySelectorAll(e),0):bn(e)?Mm(e,n):yd(e)?Sc.call(e,0):e?[e]:[]},Mc=function(e){return e=di(e)[0]||ks("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return di(t,n.querySelectorAll?n:n===e?ks("Invalid scope")||xu.createElement("div"):e)}},Sd=function(e){return e.sort(function(){return .5-Math.random()})},Md=function(e){if(qt(e))return e;var t=Bi(e)?e:{each:e},n=lo(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return ln(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,S,x,P,R,A,C,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,fi])[1],!w){for(A=-fi;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=s[g]=[],p=l?Math.min(w,g)*u-.5:r%w,b=w===fi?0:l?g*d/w-.5:r/w|0,A=0,C=fi,R=0;R<g;R++)S=R%w-p,x=b-(R/w|0),_[R]=P=c?Math.abs(c==="y"?x:S):rd(S*S+x*x),P>A&&(A=P),P<C&&(C=P);r==="random"&&Sd(_),_.max=A-C,_.min=C,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Mn(t.amount||t.each)||0,n=n&&g<0?Fm(n):n}return g=(_[f]-_.min)/_.max||0,Ht(_.b+(n?n(g):g)*_.v)+_.u}},wc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ht(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(sr(n)?0:Mn(n))}},wd=function(e,t){var n=bn(e),r,o;return!n&&Bi(e)&&(r=n=e.radius||fi,e.values?(e=di(e.values),(o=!sr(e[0]))&&(r*=r)):e=wc(e.increment)),Nr(t,n?qt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=fi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||sr(s)?u:u+Mn(s)}:wc(e))},bd=function(e,t,n,r){return Nr(bn(e)?!t:n===!0?!!(n=0):!r,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},wm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},bm=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},Tm=function(e,t,n){return Ed(e,t,0,1,n)},Td=function(e,t,n){return Nr(n,function(r){return e[~~t(r)]})},Em=function i(e,t,n){var r=t-e;return bn(e)?Td(e,i(0,e.length),t):Nr(n,function(o){return(r+(o-e)%r)%r+e})},Am=function i(e,t,n){var r=t-e,o=r*2;return bn(e)?Td(e,i(0,e.length-1),t):Nr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},Vs=function(e){return e.replace(sm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(am);return bd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Ed=function(e,t,n,r,o){var s=t-e,a=r-n;return Nr(o,function(l){return n+((l-e)/s*a||0)})},Rm=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=ln(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=Zo(bn(e)?[]:{},e));if(!u){for(l in t)Tu.call(a,e,l,"get",t[l]);o=function(v){return Cu(v,a)||(s?e.p:e)}}}return Nr(n,o)},mh=function(e,t,n){var r=e.labels,o=fi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},Kn=function(e,t,n){var r=e.vars,o=r[t],s=Bt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Cr.length&&Ka(),a&&(Bt=a),u=l?o.apply(c,l):o.call(c),Bt=s,u},Es=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&Kn(e,"onInterrupt"),e},No,Ad=[],Rd=function(e){if(e)if(e=!e.name&&e.default||e,vu()||e.headless){var t=e.name,n=qt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Hs,render:Cu,add:Tu,kill:Xm,modifier:Wm,rawVars:0},s={targetTest:0,get:0,getSetter:Ru,aliases:{},register:0};if(Jo(),e!==r){if(Yn[t])return;ti(r,ti(ja(e,o),s)),Zo(r.prototype,Zo(o,ja(e,s))),Yn[r.prop=t]=r,e.targetTest&&(Ba.push(r),Su[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ud(t,r),e.register&&e.register(Wn,r,Hn)}else Ad.push(e)},Rt=255,As={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Tl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},Cd=function(e,t,n){var r=e?sr(e)?[e>>16,e>>8&Rt,e&Rt]:0:As.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])r=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(uh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=Tl(l+1/3,o,s),r[1]=Tl(l,o,s),r[2]=Tl(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(sd),n&&r.length<4&&(r[3]=1),r}else r=e.match(uh)||As.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Rt,s=r[1]/Rt,a=r[2]/Rt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Pd=function(e){var t=[],n=[],r=-1;return e.split(Pr).forEach(function(o){var s=o.match(Fo)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},_h=function(e,t,n){var r="",o=(e+r).match(Pr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=Cd(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Pd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Pr,"1").split(Fo),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Pr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Pr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Cm=/hsl[a]?\(/,Dd=function(e){var t=e.join(" "),n;if(Pr.lastIndex=0,Pr.test(t))return n=Cm.test(t),e[1]=_h(e[1],n),e[0]=_h(e[0],n,Pd(e[1])),!0},Gs,$n=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,S,x,P,R;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,S=P-s,(S>0||b)&&(R=++d.frame,f=P-d.time*1e3,d.time=P=P/1e3,s+=S+(S>=o?4:o-S),x=1),b||(l=c(g)),x)for(m=0;m<a.length;m++)a[m](P,f,R,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){ld&&(!gc&&vu()&&(Ii=gc=window,xu=Ii.document||{},ei.gsap=Wn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Wn.version),cd(Za||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),Ad.forEach(Rd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},Gs=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Gs=0,c=Hs},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var S=p?function(x,P,R,A){_(x,P,R,A),d.remove(S)}:_;return d.remove(_),a[b?"unshift":"push"](S),Jo(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),Jo=function(){return!Gs&&$n.wake()},_t={},Pm=/^[\d.\-M][\d.\-,\s]/,Dm=/["']/g,Lm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Dm,"").trim():+c,r=l.substr(a+1).trim();return t},Im=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Um=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lm(t[1])]:Im(e).split(",").map(pd)):_t._CE&&Pm.test(e)?_t._CE("",e):n},Fm=function(e){return function(t){return 1-e(1-t)}},lo=function(e,t){return e&&(qt(e)?e:_t[e]||Um(e))||t},po=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return kn(e,function(a){_t[a]=ei[a]=o,_t[s=a.toLowerCase()]=n;for(var l in o)_t[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=o[l]}),o},Ld=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},El=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/_c*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*om((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ld(a);return o=_c/o,l.config=function(c,u){return i(e,c,u)},l},Al=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Ld(n);return r.config=function(o){return i(e,o)},r};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;po(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;po("Elastic",El("in"),El("out"),El());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};po("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);po("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});po("Circ",function(i){return-(rd(1-i*i)-1)});po("Sine",function(i){return i===1?1:-rm(i*nm)+1});po("Back",Al("in"),Al("out"),Al());_t.SteppedEase=_t.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Pt;return function(a){return((r*Ks(0,s,a)|0)+o)*n}}};Bs.ease=_t["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Mu+=i+","+i+"Params,"});var Id=function(e,t){this.id=im++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fd,this.set=t?t.getSetter:Ru},Ws=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,jo(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Gs||$n.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,jo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Jo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(hl(this,n),!o._dp||o.parent||gd(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?Ko(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Ks(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),ul(this),mm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ht(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ja(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=hm);var r=pn;return pn=n,bu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,ph(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(li(this,n),Bn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Bn(r)),this._dur||(this._zTime=-Pt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Pt)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=qt(n)?n:md,l=function(){var u=r.then;r.then=null,o&&o(),qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Es(this)},i})();ti(Ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var On=(function(i){id(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Bn(n.sortChildren),Vt&&Fi(n.parent||Vt,Qi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&vd(Qi(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Ds(0,arguments,this),this},t.from=function(r,o,s){return Ds(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Ds(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,Ps(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Qt(r,o,li(this,s),1),this},t.call=function(r,o,s){return Fi(this,Qt.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Qt(r,s,li(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,Ps(s).immediateRender=Bn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,Ps(a).immediateRender=Bn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ht(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,S,x,P,R,A;if(this!==Vt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Ht(u%_),u===l?(g=this._repeat,f=c):(P=Ht(u/_),g=~~P,g&&g===P&&(f=c,g--),f>c&&(f=c)),P=Ko(this._tTime,_),!a&&this._tTime&&P!==g&&this._tTime-P*_-this._dur<=0&&(P=g),R&&g&1&&(f=c-f,A=1),g!==P&&!this._lock){var C=R&&P&1,w=C===(R&&g&1);if(g<P&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ht(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=xm(this,Ht(a),Ht(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!P&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-Pt);break}}m=v}else{m=this._last;for(var M=r<0?r:f;m;){if(v=m._prev,(m._act||M<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(M-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(M-m._start)*m._ts,o,s||pn&&bu(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=M?-Pt:Pt);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=x,ul(this),this.render(r,o,s);this._onUpdate&&!o&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Lr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(sr(o)||(o=li(this,o,r)),!(r instanceof Ws)){if(bn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(ln(r))return this.addLabel(r,o);if(qt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?Fi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return ln(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&cl(this,r),r===this._recent&&(this._recent=this._last),ao(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht($n.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=li(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=Qt.delayedCall(0,o||Hs,s);return a.data="isPause",this._hasPause=1,Fi(this,a,li(this,r))},t.removePause=function(r){var o=this._first;for(r=li(this,r);o;)o._start===r&&o.data==="isPause"&&Lr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Er!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=di(r),l=this._first,c=sr(o),u;l;)l instanceof Qt?fm(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=li(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=Qt.to(s,ti({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Pt,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&jo(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,ti({startAt:{time:li(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),mh(this,li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),mh(this,li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Ht(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return ao(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ao(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=fi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Fi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Ht(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;jo(s,s===Vt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Vt._ts&&(dd(Vt,Ja(r,Vt)),hd=$n.frame),$n.frame>=hh){hh+=Jn.autoSleep||120;var o=Vt._first;if((!o||!o._ts)&&Jn.autoSleep&&$n._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||$n.sleep()}}},e})(Ws);ti(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nm=function(e,t,n,r,o,s,a){var l=new Hn(this._pt,e,t,0,1,Bd,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Vs(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(wl)||[];d=wl.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?ko(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=wl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(ad.test(r)||p)&&(l.e=0),this._pt=l,l},Tu=function(e,t,n,r,o,s,a,l,c,u){qt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:qt(d)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=qt(d)?c?Hm:Od:Au,v;if(ln(r)&&(~r.indexOf("random(")&&(r=Vs(r)),r.charAt(1)==="="&&(v=ko(f,r)+(Mn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||bc)return!isNaN(f*r)&&r!==""?(v=new Hn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Gm:zd,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&yu(t,r),Nm.call(this,e,t,f,r,m,l||Jn.stringFilter,c))},Om=function(e,t,n,r,o){if(qt(e)&&(e=Ls(e,o,t,n,r)),!Bi(e)||e.style&&e.nodeType||bn(e)||od(e))return ln(e)?Ls(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=Ls(e[a],o,t,n,r);return s},Ud=function(e,t,n,r,o,s){var a,l,c,u;if(Yn[e]&&(a=new Yn[e]).init(o,a.rawVars?t[e]:Om(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new Hn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==No))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Er,bc,Eu=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!_u,x=e.timeline,P=r.easeReverse||d,R,A,C,w,M,L,N,O,G,W,H,X,B;if(x&&(!f||!o)&&(o="none"),e._ease=lo(o,Bs.ease),e._rEase=P&&(lo(P)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(O=_[0]?so(_[0]).harness:0,X=O&&r[O.prop],R=ja(r,Su),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?za:um),g._lazy=0),s){if(Lr(e._startAt=Qt.set(_,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!a&&!m)&&e._startAt.revert(za),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),C=ti({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Bn(l),immediateRender:a,stagger:0,parent:p},R),X&&(C[O.prop]=X),Lr(e._startAt=Qt.set(_,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(za):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Bn(l)||l&&!v,A=0;A<_.length;A++){if(M=_[A],N=M._gsap||wu(_)[A]._gsap,e._ptLookup[A]=W={},vc[N.id]&&Cr.length&&Ka(),H=b===_?A:b.indexOf(M),O&&(G=new O).init(M,X||R,e,H,b)!==!1&&(e._pt=w=new Hn(e._pt,M,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(ue){W[ue]=w}),G.priority&&(L=1)),!O||X)for(C in R)Yn[C]&&(G=Ud(C,R,e,H,M,b))?G.priority&&(L=1):W[C]=w=Tu.call(e,M,C,"get",R[C],H,b,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),S&&e._pt&&(Er=e,Vt.killTweensOf(M,W,e.globalTime(t)),B=!e.parent,Er=0),e._pt&&l&&(vc[N.id]=1)}L&&kd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&x.render(fi,!0,!0)},zm=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bc=1,e.vars[t]="+=0",Eu(e,a),bc=0,l?ks(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Yt(n)+Mn(d.e)),d.b&&(d.b=u.s+Mn(d.b))},Bm=function(e,t){var n=e[0]?so(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=Zo({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},km=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Ls=function(e,t,n,r,o){return qt(e)?e.call(t,n,r,o):ln(e)&&~e.indexOf("random(")?Vs(e):e},Fd=Mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nd={};kn(Fd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Nd[i]=1});var Qt=(function(i){id(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:Ps(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Vt,b=(bn(n)||od(n)?sr(n[0]):"length"in r)?[n]:di(n),S,x,P,R,A,C,w,M;if(a._targets=b.length?wu(b):ks("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||aa(c)||aa(u)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(S=a.timeline=new On({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),S.kill(),S.parent=S._dp=Qi(a),S._start=0,f||aa(c)||aa(u)){if(R=b.length,w=f&&Md(f),Bi(f))for(A in f)~Fd.indexOf(A)&&(M||(M={}),M[A]=f[A]);for(x=0;x<R;x++)P=ja(r,Nd),P.stagger=0,L&&(P.easeReverse=L),M&&Zo(P,M),C=b[x],P.duration=+Ls(c,Qi(a),x,C,b),P.delay=(+Ls(u,Qi(a),x,C,b)||0)-a._delay,!f&&R===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),S.to(C,P,w?w(x,C,b):0),S._ease=_t.none;S.duration()?c=u=0:a.timeline=0}else if(v){Ps(ti(S.vars.defaults,{ease:"none"})),S._ease=lo(v.ease||r.ease||"none");var N=0,O,G,W;if(bn(v))v.forEach(function(H){return S.to(b,H,">")}),S.duration();else{P={};for(A in v)A==="ease"||A==="easeEach"||km(A,v[A],P,v.easeEach);for(A in P)for(O=P[A].sort(function(H,X){return H.t-X.t}),N=0,x=0;x<O.length;x++)G=O[x],W={ease:G.e,duration:(G.t-(x?O[x-1].t:0))/100*c},W[A]=G.v,S.to(b,W,N),N+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!_u&&(Er=Qi(a),Vt.killTweensOf(b),Er=0),Fi(p,Qi(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Ht(p._time)&&Bn(d)&&_m(Qi(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),_&&vd(Qi(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Pt&&!u?l:r<Pt?0:r,f,m,v,g,_,p,b,S;if(!c)vm(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Ht(d%g),d===l?(v=this._repeat,f=c):(_=Ht(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=Ko(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Ht(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(xd(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var x=f<a;if(x!==this._inv){var P=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(x?-1:1)/P:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(Kn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&xc(this,r,o,s),Kn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&Kn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&xc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Lr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(Kn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){Gs||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Eu(this,c),u=this._ease(c/this._dur),zm(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(hl(this,0),this.parent||_d(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Er&&Er.vars.overwrite!==!0)._first||Es(this),this.parent&&s!==this.timeline.totalDuration()&&jo(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?di(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&pm(a,l))return o==="all"&&(this._pt=0),Es(this);for(d=this._op=this._op||[],o!=="all"&&(ln(o)&&(g={},kn(o,function(b){return g[b]=1}),o=g),o=Bm(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&cl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Es(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Ds(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Ds(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Vt.killTweensOf(r,o,s)},e})(Ws);ti(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(i){Qt[i]=function(){var e=new On,t=Sc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Au=function(e,t,n){return e[t]=n},Od=function(e,t,n){return e[t](n)},Hm=function(e,t,n,r){return e[t](r.fp,n)},Vm=function(e,t,n){return e.setAttribute(t,n)},Ru=function(e,t){return qt(e[t])?Od:gu(e[t])&&e.setAttribute?Vm:Au},zd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Cu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Wm=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},Xm=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?cl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},qm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},kd=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},Hn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||zd,this.d=l||this,this.set=c||Au,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=qm,this.m=n,this.mt=o,this.tween=r},i})();kn(Mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Su[i]=1});ei.TweenMax=ei.TweenLite=Qt;ei.TimelineLite=ei.TimelineMax=On;Vt=new On({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Dd;var co=[],ka={},Ym=[],gh=0,$m=0,Rl=function(e){return(ka[e]||Ym).map(function(t){return t()})},Tc=function(){var e=Date.now(),t=[];e-gh>2&&(Rl("matchMediaInit"),co.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Ii.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),gh=e,Rl("matchMedia"))},Hd=(function(){function i(t,n){this.selector=n&&Mc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$m++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){qt(n)&&(o=r,r=n,n=qt);var s=this,a=function(){var c=Bt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=Mc(o)),Bt=s,d=r.apply(s,arguments),qt(d)&&s._r.push(d),Bt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===qt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Bt;Bt=null,n(this),Bt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=co.length;s--;)co[s].id===this.id&&co.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),Zm=(function(){function i(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Bi(n)||(n={matches:n});var s=new Hd(0,o||this.scope),a=s.conditions={},l,c,u;Bt&&!s.selector&&(s.selector=Bt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(co.indexOf(s)<0&&co.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tc):l.addEventListener("change",Tc)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Rd(r)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,r){ln(e)&&(e=di(e)[0]);var o=so(e||{}).get,s=n?md:pd;return n==="native"&&(n=""),e&&(t?s((Yn[t]&&Yn[t].get||o)(e,t,n,r)):function(a,l,c){return s((Yn[a]&&Yn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=di(e),e.length>1){var r=e.map(function(u){return Wn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=Yn[t],a=so(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;No._pt=0,d.init(e,n?u+n:u,No,0,[e]),d.render(1,d),No._pt&&Cu(1,No)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=Wn.to(e,ti((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lo(e.ease,Bs.ease)),fh(Bs,e||{})},config:function(e){return fh(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Yn[a]&&!ei[a]&&ks(t+" effect requires "+a+" plugin.")}),bl[t]=function(a,l,c){return n(di(a),ti(l||{},o),c)},s&&(On.prototype[t]=function(a,l,c){return this.add(bl[t](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=lo(t)},parseEase:function(e,t){return arguments.length?lo(e,t):_t},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,o;for(n.smoothChildTiming=Bn(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,r=Vt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&Fi(n,r,r._start-r._delay),r=o;return Fi(Vt,n,0),n},context:function(e,t){return e?new Hd(e,t):Bt},matchMedia:function(e){return new Zm(e)},matchMediaRefresh:function(){return co.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Tc()},addEventListener:function(e,t){var n=ka[e]||(ka[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ka[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Em,wrapYoyo:Am,distribute:Md,random:bd,snap:wd,normalize:Tm,getUnit:Mn,clamp:Sm,splitColor:Cd,toArray:di,selector:Mc,mapRange:Ed,pipe:wm,unitize:bm,interpolate:Rm,shuffle:Sd},install:cd,effects:bl,ticker:$n,updateRoot:On.updateRoot,plugins:Yn,globalTimeline:Vt,core:{PropTween:Hn,globals:ud,Tween:Qt,Timeline:On,Animation:Ws,getCache:so,_removeLinkedListItem:cl,reverting:function(){return pn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return _u=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Qa[i]=Qt[i]});$n.add(On.updateRoot);No=Qa.to({},{duration:0});var Km=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jm=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=Km(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},Cl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(ln(o)&&(l={},kn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}jm(a,o)}}}},Wn=Qa.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cl("roundProps",wc),Cl("modifiers"),Cl("snap",wd))||Qa;Qt.version=On.version=Wn.version="3.15.0";ld=1;vu()&&Jo();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vh,Ar,Ho,Pu,ro,xh,Du,Jm=function(){return typeof window<"u"},ar={},Jr=180/Math.PI,Vo=Math.PI/180,vo=Math.atan2,yh=1e8,Lu=/([A-Z])/g,Qm=/(left|right|width|margin|padding|x)/i,e0=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},t0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},i0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o0=function(e,t,n){return e.style[t]=n},s0=function(e,t,n){return e.style.setProperty(t,n)},a0=function(e,t,n){return e._gsap[t]=n},l0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},c0=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},u0=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Gt="transform",Vn=Gt+"Origin",h0=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in ar&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=tr(r,a)}):this.tfm[e]=s.x?s[e]:tr(r,e),e===Vn&&(this.tfm.zOrigin=s.zOrigin);else return Ni.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Gt}(o||t)&&this.props.push(e,t,o[e])},Wd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},f0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Du(),(!o||!o.isStart)&&!n[Gt]&&(Wd(n),r.zOrigin&&n[Vn]&&(n[Vn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Xd=function(e,t){var n={target:e,props:[],revert:f0,save:h0};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},qd,Ac=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},jn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Qo(t)||t,1)||""},Sh="O,Moz,ms,Ms,Webkit".split(","),Qo=function(e,t,n){var r=t||ro,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Sh[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Sh[s]:"")+e},Rc=function(){Jm()&&window.document&&(vh=window,Ar=vh.document,Ho=Ar.documentElement,ro=Ac("div")||{style:{}},Ac("div"),Gt=Qo(Gt),Vn=Gt+"Origin",ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qd=!!Qo("perspective"),Du=Wn.core.reverting,Pu=1)},Mh=function(e){var t=e.ownerSVGElement,n=Ac("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),Ho.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),Ho.removeChild(n),o},wh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yd=function(e){var t,n;try{t=e.getBBox()}catch{t=Mh(e),n=1}return t&&(t.width||t.height)||n||(t=Mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+wh(e,["x","cx","x1"])||0,y:+wh(e,["y","cy","y1"])||0,width:0,height:0}:t},$d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yd(e))},Ir=function(e,t){if(t){var n=e.style,r;t in ar&&t!==Vn&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,r,o,s){var a=new Hn(e._pt,t,n,0,1,s?Gd:Vd);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},bh={deg:1,rad:1,turn:1},d0={grid:1,flex:1},Ur=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=ro.style,l=Qm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||bh[r]||bh[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&$d(e),(m||s==="%")&&(ar[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Yt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ar||!g.appendChild)&&(g=Ar.body),_=g._gsap,_&&m&&_.width&&l&&_.time===$n.time&&!_.uncache)return Yt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:Ir(e,t)}else(m||s==="%")&&!d0[jn(g,"display")]&&(a.position=jn(e,"position")),g===e&&(a.position="static"),g.appendChild(ro),v=ro[u],g.removeChild(ro),a.position="absolute";return l&&m&&(_=so(g),_.time=$n.time,_.width=g[u]),Yt(f?v*o/d:v&&o?d/v*o:0)},tr=function(e,t,n,r){var o;return Pu||Rc(),t in Ni&&t!=="transform"&&(t=Ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(o=qs(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:tl(jn(e,Vn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=el[t]&&el[t](e,t,n)||jn(e,t)||fd(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Ur(e,t,o,n)+n:o},p0=function(e,t,n,r){if(!n||n==="none"){var o=Qo(t,e,1),s=o&&jn(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,Bd),l=0,c=0,u,d,f,m,v,g,_,p,b,S,x,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=jn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=jn(e,t)||r,g?e.style[t]=g:Ir(e,t)),u=[n,r],Dd(u),n=u[0],r=u[1],f=n.match(Fo)||[],P=r.match(Fo)||[],P.length){for(;d=Fo.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,x=g.substr((m+"").length),_.charAt(1)==="="&&(_=ko(m,_)+x),p=parseFloat(_),S=_.substr((p+"").length),l=Fo.lastIndex-S.length,S||(S=S||Jn.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(m=Ur(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Gd:Vd;return ad.test(r)&&(a.e=0),this._pt=a,a},Th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m0=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Th[n]||n,t[1]=Th[r]||r,t.join(" ")},_0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],ar[a]&&(l=1,a=a==="transformOrigin"?Vn:Gt),Ir(n,a);l&&(Ir(n,Gt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qs(n,1),s.uncache=1,Wd(r)))}},el={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new Hn(e._pt,t,n,0,0,_0);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},Xs=[1,0,0,1,0,0],Zd={},Kd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eh=function(e){var t=jn(e,Gt);return Kd(t)?Xs:t.substr(7).match(sd).map(Yt)},Iu=function(e,t){var n=e._gsap||so(e),r=e.style,o=Eh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Xs:o):(o===Xs&&!e.offsetParent&&e!==Ho&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ho.appendChild(e)),o=Eh(e),l?r.display=l:Ir(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Ho.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Cc=function(e,t,n,r,o,s){var a=e._gsap,l=o||Iu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],S=t.split(" "),x=parseFloat(S[0])||0,P=parseFloat(S[1])||0,R,A,C,w;n?l!==Xs&&(A=m*_-v*g)&&(C=x*(_/A)+P*(-g/A)+(g*b-_*p)/A,w=x*(-v/A)+P*(m/A)-(m*b-v*p)/A,x=C,P=w):(R=Yd(e),x=R.x+(~S[0].indexOf("%")?x/100*R.width:x),P=R.y+(~(S[1]||S[0]).indexOf("%")?P/100*R.height:P)),r||r!==!1&&a.smooth?(p=x-c,b=P-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",s&&(Rr(s,a,"xOrigin",c,x),Rr(s,a,"yOrigin",u,P),Rr(s,a,"xOffset",d,a.xOffset),Rr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+P)},qs=function(e,t){var n=e._gsap||new Id(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=jn(e,Vn)||"0",u,d,f,m,v,g,_,p,b,S,x,P,R,A,C,w,M,L,N,O,G,W,H,X,B,ue,Q,de,ge,Oe,K,oe;return u=d=f=g=_=p=b=S=x=0,m=v=1,n.svg=!!(e.getCTM&&$d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),A=Iu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Cc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),P=n.xOrigin||0,R=n.yOrigin||0,A!==Xs&&(L=A[0],N=A[1],O=A[2],G=A[3],u=W=A[4],d=H=A[5],A.length===6?(m=Math.sqrt(L*L+N*N),v=Math.sqrt(G*G+O*O),g=L||N?vo(N,L)*Jr:0,b=O||G?vo(O,G)*Jr+g:0,b&&(v*=Math.abs(Math.cos(b*Vo))),n.svg&&(u-=P-(P*L+R*O),d-=R-(P*N+R*G))):(oe=A[6],Oe=A[7],Q=A[8],de=A[9],ge=A[10],K=A[11],u=A[12],d=A[13],f=A[14],C=vo(oe,ge),_=C*Jr,C&&(w=Math.cos(-C),M=Math.sin(-C),X=W*w+Q*M,B=H*w+de*M,ue=oe*w+ge*M,Q=W*-M+Q*w,de=H*-M+de*w,ge=oe*-M+ge*w,K=Oe*-M+K*w,W=X,H=B,oe=ue),C=vo(-O,ge),p=C*Jr,C&&(w=Math.cos(-C),M=Math.sin(-C),X=L*w-Q*M,B=N*w-de*M,ue=O*w-ge*M,K=G*M+K*w,L=X,N=B,O=ue),C=vo(N,L),g=C*Jr,C&&(w=Math.cos(C),M=Math.sin(C),X=L*w+N*M,B=W*w+H*M,N=N*w-L*M,H=H*w-W*M,L=X,W=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Yt(Math.sqrt(L*L+N*N+O*O)),v=Yt(Math.sqrt(H*H+oe*oe)),C=vo(W,H),b=Math.abs(C)>2e-4?C*Jr:0,x=K?1/(K<0?-K:K):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kd(jn(e,Gt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Yt(m),n.scaleY=Yt(v),n.rotation=Yt(g)+a,n.rotationX=Yt(_)+a,n.rotationY=Yt(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Vn]=tl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?v0:qd?jd:g0,n.uncache=0,n},tl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pl=function(e,t,n){var r=Mn(t);return Yt(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",r)))+r},g0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jd(e,t)},Vr="0deg",_s="0px",Gr=") ",jd=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,x="",P=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Vr||u!==Vr)){var R=parseFloat(u)*Vo,A=Math.sin(R),C=Math.cos(R),w;R=parseFloat(d)*Vo,w=Math.cos(R),s=Pl(b,s,A*w*-S),a=Pl(b,a,-Math.sin(R)*-S),l=Pl(b,l,C*w*-S+S)}_!==_s&&(x+="perspective("+_+Gr),(r||o)&&(x+="translate("+r+"%, "+o+"%) "),(P||s!==_s||a!==_s||l!==_s)&&(x+=l!==_s||P?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Gr),c!==Vr&&(x+="rotate("+c+Gr),u!==Vr&&(x+="rotateY("+u+Gr),d!==Vr&&(x+="rotateX("+d+Gr),(f!==Vr||m!==Vr)&&(x+="skew("+f+", "+m+Gr),(v!==1||g!==1)&&(x+="scale("+v+", "+g+Gr),b.style[Gt]=x||"translate(0, 0)"},v0=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(s),x=parseFloat(a),P,R,A,C,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vo,c*=Vo,P=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Vo,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,C*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),P*=w,R*=w)),P=Yt(P),R=Yt(R),A=Yt(A),C=Yt(C)):(P=d,C=f,R=A=0),(S&&!~(s+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Ur(m,"x",s,"px"),x=Ur(m,"y",a,"px")),(v||g||_||p)&&(S=Yt(S+v-(v*P+g*A)+_),x=Yt(x+g-(v*R+g*C)+p)),(r||o)&&(w=m.getBBox(),S=Yt(S+r/100*w.width),x=Yt(x+o/100*w.height)),w="matrix("+P+","+R+","+A+","+C+","+S+","+x+")",m.setAttribute("transform",w),b&&(m.style[Gt]=w)},x0=function(e,t,n,r,o){var s=360,a=ln(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Jr:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*yh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*yh)%s-~~(c/s)*s)),e._pt=f=new Hn(e._pt,t,n,r,c,t0),f.e=u,f.u="deg",e._props.push(n),f},Ah=function(e,t){for(var n in t)e[n]=t[n];return e},y0=function(e,t,n){var r=Ah({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Gt]=t,a=qs(n,1),Ir(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],s[Gt]=t,a=qs(n,1),s[Gt]=c);for(l in ar)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Mn(c),v=Mn(u),d=m!==v?Ur(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Hn(e._pt,a,l,d,f-d,Ec),e._pt.u=v||0,e._props.push(l));Ah(a,r)};kn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});el[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return tr(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var Jd={name:"css",register:Rc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,S,x,P,R,A,C,w;Pu||Rc(),this.styles=this.styles||Xd(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Yn[g]&&Ud(g,t,n,r,e,o)))){if(m=typeof u,v=el[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Vs(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Pr.lastIndex=0,Pr.test(c)||(_=Mn(c),p=Mn(u),p?_!==p&&(c=Ur(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),C.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],ln(c)&&~c.indexOf("random(")&&(c=Vs(c)),Mn(c+"")||c==="auto"||(c+=Jn.units[g]||Mn(tr(e,g))||""),(c+"").charAt(1)==="="&&(c=tr(e,g))):c=tr(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Ni&&(g==="autoAlpha"&&(f===1&&tr(e,"visibility")==="hidden"&&d&&(f=0),C.push("visibility",0,a.visibility),Rr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ni[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ar,S){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=jn(e,"perspective"),M?e.style.perspective=M:Ir(e,"perspective")}d=parseFloat(u)}if(x||(P=e._gsap,P.renderTransform&&!t.parseTransform||qs(e,t.parseTransform),R=t.smoothOrigin!==!1&&P.smooth,x=this._pt=new Hn(this._pt,a,Gt,0,1,P.renderTransform,P,0,-1),x.dep=1),g==="scale")this._pt=new Hn(this._pt,P,"scaleY",P.scaleY,(b?ko(P.scaleY,b+d):d)-P.scaleY||0,Ec),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Vn,0,a[Vn]),u=m0(u),P.svg?Cc(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&Rr(this,P,"zOrigin",P.zOrigin,p),Rr(this,a,g,tl(c),tl(u)));continue}else if(g==="svgOrigin"){Cc(e,u,1,R,0,this);continue}else if(g in Zd){x0(this,P,g,f,b?ko(f,b+u):u);continue}else if(g==="smoothOrigin"){Rr(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){y0(this,u,e);continue}}else g in a||(g=Qo(g)||g);if(S||(d||d===0)&&(f||f===0)&&!e0.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=Mn(u)||(g in Jn.units?Jn.units[g]:_),_!==p&&(f=Ur(e,g,c,p)),this._pt=new Hn(this._pt,S?P:a,g,f,(b?ko(f,b+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?r0:Ec),this._pt.u=p||0,S&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=i0):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=n0);else if(g in a)p0.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){yu(g,u);continue}S||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),s.push(g)}}A&&kd(this)},render:function(e,t){if(t.tween._time||!Du())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:Ni,getSetter:function(e,t,n){var r=Ni[t];return r&&r.indexOf(",")<0&&(t=r),t in ar&&t!==Vn&&(e._gsap.x||tr(e,"x"))?n&&xh===n?t==="scale"?l0:a0:(xh=n||{})&&(t==="scale"?c0:u0):e.style&&!gu(e.style[t])?o0:~t.indexOf("-")?s0:Ru(e,t)},core:{_removeProperty:Ir,_getMatrix:Iu}};Wn.utils.checkPrefix=Qo;Wn.core.getStyleSaver=Xd;(function(i,e,t,n){var r=kn(i+","+e+","+t,function(o){ar[o]=1});kn(e,function(o){Jn.units[o]="deg",Zd[o]=1}),Ni[r[13]]=i+","+e,kn(n,function(o){var s=o.split(":");Ni[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Jn.units[i]="px"});Wn.registerPlugin(Jd);var Uu=Wn.registerPlugin(Jd)||Wn;Uu.core.Tween;const Qd=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="170",S0=0,Rh=1,M0=2,ep=1,w0=2,Ji=3,Fr=0,Gn=1,wn=2,Ei=0,Dr=1,Ch=2,Ph=3,Dh=4,Ys=5,In=100,b0=101,T0=102,E0=103,A0=104,Ha=200,ci=201,R0=202,C0=203,Go=204,Wo=205,P0=206,D0=207,L0=208,I0=209,U0=210,F0=211,N0=212,O0=213,z0=214,Pc=0,Dc=1,Lc=2,es=3,Ic=4,Uc=5,Fc=6,Nc=7,tp=0,B0=1,k0=2,zi=0,H0=1,V0=2,G0=3,W0=4,X0=5,q0=6,Y0=7,np=300,ts=301,ns=302,Oc=303,zc=304,fl=306,Xo=1e3,Un=1001,nl=1002,tn=1003,$0=1004,la=1005,gt=1006,Dl=1007,bi=1008,Ai=1009,ip=1010,rp=1011,ho=1012,Nu=1013,fo=1014,zn=1015,Oi=1016,Ou=1017,zu=1018,is=1020,op=35902,sp=1021,ap=1022,dn=1023,lp=1024,cp=1025,qo=1026,rs=1027,Bu=1028,ku=1029,up=1030,Hu=1031,Vu=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Bc=35840,kc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,$c=37810,Zc=37811,Kc=37812,jc=37813,Jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,ru=37820,ou=37821,qa=36492,su=36494,au=36495,hp=36283,lu=36284,cu=36285,uu=36286,Z0=3200,K0=3201,j0=0,J0=1,en="",Dn="srgb",ki="srgb-linear",dl="linear",Et="srgb",xo=7680,Lh=519,Q0=512,e_=513,t_=514,fp=515,n_=516,i_=517,r_=518,o_=519,Ih=35044,pr=35048,Uh="300 es",ir=2e3,il=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const Is=Math.PI/180,$s=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function Gu(i,e){return(i%e+e)%e}function s_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function a_(i,e,t){return i!==e?(t-i)/(e-i):0}function Us(i,e,t){return(1-t)*i+t*e}function l_(i,e,t,n){return Us(i,e,1-Math.exp(-t*n))}function c_(i,e=1){return e-Math.abs(Gu(i,e*2)-e)}function u_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d_(i,e){return i+Math.random()*(e-i)}function p_(i){return i*(.5-Math.random())}function m_(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function __(i){return i*Is}function g_(i){return i*$s}function v_(i){return(i&i-1)===0&&i!==0}function x_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function S_(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Uo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:Is,RAD2DEG:$s,generateUUID:as,clamp:Sn,euclideanModulo:Gu,mapLinear:s_,inverseLerp:a_,lerp:Us,damp:l_,pingpong:c_,smoothstep:u_,smootherstep:h_,randInt:f_,randFloat:d_,randFloatSpread:p_,seededRandom:m_,degToRad:__,radToDeg:g_,isPowerOfTwo:v_,ceilPowerOfTwo:x_,floorPowerOfTwo:y_,setQuaternionFromProperEuler:S_,normalize:Rn,denormalize:Uo};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,r,o,s,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],S=r[4],x=r[7],P=r[2],R=r[5],A=r[8];return o[0]=s*g+a*b+l*P,o[3]=s*_+a*S+l*R,o[6]=s*p+a*x+l*A,o[1]=c*g+u*b+d*P,o[4]=c*_+u*S+d*R,o[7]=c*p+u*x+d*A,o[2]=f*g+m*b+v*P,o[5]=f*_+m*S+v*R,o[8]=f*p+m*x+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new ct;function dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M_(){const i=Zs("canvas");return i.style.display="block",i}const Nh={};function Rs(i){i in Nh||(Nh[i]=!0,console.warn(i))}function w_(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function b_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=Yo(i.r),i.g=Yo(i.g),i.b=Yo(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===en?dl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Oh=[.64,.33,.3,.6,.15,.06],zh=[.2126,.7152,.0722],Bh=[.3127,.329],kh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[ki]:{primaries:Oh,whitePoint:Bh,transfer:dl,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:zh,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:Oh,whitePoint:Bh,transfer:Et,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:zh,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}});let yo;class E_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yo===void 0&&(yo=Zs("canvas")),yo.width=e.width,yo.height=e.height;const n=yo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=or(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Il(r[s].image)):o.push(Il(r[s]))}else o=Il(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?E_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class mn extends ss{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Un,r=Un,o=gt,s=bi,a=dn,l=Ai,c=mn.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=as(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=np;mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(m+1)/2,P=(p+1)/2,R=(u+f)/4,A=(d+g)/4,C=(v+_)/4;return S>x&&S>P?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=R/n,o=A/n):x>P?x<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),n=R/r,o=C/r):P<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),n=A/o,r=C/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends C_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mp extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),R=Math.atan2(P,p*b);_=Math.sin(_*R)/P,a=Math.sin(a*R)/P}const x=a*b;if(l=l*_+f*x,c=c*_+m*x,u=u*_+v*x,d=d*_+g*x,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new q,Vh=new Fn;class ls{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,gi):gi.fromBufferAttribute(o,s),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),ua.subVectors(this.max,gs),So.subVectors(e.a,gs),Mo.subVectors(e.b,gs),wo.subVectors(e.c,gs),mr.subVectors(Mo,So),_r.subVectors(wo,Mo),Wr.subVectors(So,wo);let t=[0,-mr.z,mr.y,0,-_r.z,_r.y,0,-Wr.z,Wr.y,mr.z,0,-mr.x,_r.z,0,-_r.x,Wr.z,0,-Wr.x,-mr.y,mr.x,0,-_r.y,_r.x,0,-Wr.y,Wr.x,0];return!Fl(t,So,Mo,wo,ua)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,So,Mo,wo,ua))?!1:(ha.crossVectors(mr,_r),t=[ha.x,ha.y,ha.z],Fl(t,So,Mo,wo,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new q,new q,new q,new q,new q,new q,new q,new q],gi=new q,ca=new ls,So=new q,Mo=new q,wo=new q,mr=new q,_r=new q,Wr=new q,gs=new q,ua=new q,ha=new q,Xr=new q;function Fl(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Xr.fromArray(i,o);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const D_=new ls,vs=new q,Nl=new q;class Wu{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):D_.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Nl)),this.expandByPoint(vs.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new q,Ol=new q,fa=new q,gr=new q,zl=new q,da=new q,Bl=new q;class L_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ol.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Ol);const o=e.distanceTo(t)*.5,s=-this.direction.dot(fa),a=gr.dot(this.direction),l=-gr.dot(fa),c=gr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ol).addScaledVector(fa,f),m}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),r=qi.dot(qi)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,r,o){zl.subVectors(t,e),da.subVectors(n,e),Bl.crossVectors(zl,da);let s=this.direction.dot(Bl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(da.crossVectors(gr,da));if(l<0)return null;const c=a*this.direction.dot(zl.cross(gr));if(c<0||l+c>s)return null;const u=-a*gr.dot(Bl);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),o=1/bo.setFromMatrixColumn(e,1).length(),s=1/bo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,n){const r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),vr.crossVectors(n,Xn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),vr.crossVectors(n,Xn)),vr.normalize(),pa.crossVectors(Xn,vr),r[0]=vr.x,r[4]=pa.x,r[8]=Xn.x,r[1]=vr.y,r[5]=pa.y,r[9]=Xn.y,r[2]=vr.z,r[6]=pa.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],S=n[7],x=n[11],P=n[15],R=r[0],A=r[4],C=r[8],w=r[12],M=r[1],L=r[5],N=r[9],O=r[13],G=r[2],W=r[6],H=r[10],X=r[14],B=r[3],ue=r[7],Q=r[11],de=r[15];return o[0]=s*R+a*M+l*G+c*B,o[4]=s*A+a*L+l*W+c*ue,o[8]=s*C+a*N+l*H+c*Q,o[12]=s*w+a*O+l*X+c*de,o[1]=u*R+d*M+f*G+m*B,o[5]=u*A+d*L+f*W+m*ue,o[9]=u*C+d*N+f*H+m*Q,o[13]=u*w+d*O+f*X+m*de,o[2]=v*R+g*M+_*G+p*B,o[6]=v*A+g*L+_*W+p*ue,o[10]=v*C+g*N+_*H+p*Q,o[14]=v*w+g*O+_*X+p*de,o[3]=b*R+S*M+x*G+P*B,o[7]=b*A+S*L+x*W+P*ue,o[11]=b*C+S*N+x*H+P*Q,o[15]=b*w+S*O+x*X+P*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,x=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,P=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,R=t*b+n*S+r*x+o*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=x*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=P*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,S=l*u,x=l*d,P=n.x,R=n.y,A=n.z;return r[0]=(1-(g+p))*P,r[1]=(m+x)*P,r[2]=(v-S)*P,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(f+p))*R,r[6]=(_+b)*R,r[7]=0,r[8]=(v+S)*A,r[9]=(_-b)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=bo.set(r[0],r[1],r[2]).length();const s=bo.set(r[4],r[5],r[6]).length(),a=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],vi.copy(this);const c=1/o,u=1/s,d=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=ir){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===ir)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===il)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=ir){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===ir)v=(s+o)*d,g=-2*d;else if(a===il)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bo=new q,vi=new vt,I_=new q(0,0,0),U_=new q(1,1,1),vr=new q,pa=new q,Xn=new q,Gh=new vt,Wh=new Fn;class ni{constructor(e=0,t=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const Xh=new q,To=new Fn,Yi=new vt,ma=new q,xs=new q,N_=new q,O_=new Fn,qh=new q(1,0,0),Yh=new q(0,1,0),$h=new q(0,0,1),Zh={type:"added"},z_={type:"removed"},Eo={type:"childadded",child:null},kl={type:"childremoved",child:null};class Qn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new q,t=new ni,n=new Fn,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ct}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(xs,ma,this.up):Yi.lookAt(ma,xs,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),To.setFromRotationMatrix(Yi),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Qn.DEFAULT_UP=new q(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new q,$i=new q,Hl=new q,Zi=new q,Ao=new q,Ro=new q,Kh=new q,Vl=new q,Gl=new q,Wl=new q,Xl=new Ft,ql=new Ft,Yl=new Ft;class wi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xi.subVectors(e,t),r.cross(xi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){xi.subVectors(r,t),$i.subVectors(n,t),Hl.subVectors(e,t);const s=xi.dot(xi),a=xi.dot($i),l=xi.dot(Hl),c=$i.dot($i),u=$i.dot(Hl),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Zi.x),l.addScaledVector(s,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Xl.setScalar(0),ql.setScalar(0),Yl.setScalar(0),Xl.fromBufferAttribute(e,t),ql.fromBufferAttribute(e,n),Yl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Xl,o.x),s.addScaledVector(ql,o.y),s.addScaledVector(Yl,o.z),s}static isFrontFacing(e,t,n,r){return xi.subVectors(n,t),$i.subVectors(e,t),xi.cross($i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Ao.subVectors(r,n),Ro.subVectors(o,n),Vl.subVectors(e,n);const l=Ao.dot(Vl),c=Ro.dot(Vl);if(l<=0&&c<=0)return t.copy(n);Gl.subVectors(e,r);const u=Ao.dot(Gl),d=Ro.dot(Gl);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Ao,s);Wl.subVectors(e,o);const m=Ao.dot(Wl),v=Ro.dot(Wl);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ro,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return Kh.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(Kh,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Ao,s).addScaledVector(Ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},_a={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Gu(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=$l(s,o,e+1/3),this.g=$l(s,o,e),this.b=$l(s,o,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Dn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return St.fromWorkingColorSpace(vn.copy(this),e),Math.round(Sn(vn.r*255,0,255))*65536+Math.round(Sn(vn.g*255,0,255))*256+Math.round(Sn(vn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,r=vn.g,o=vn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Dn){St.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,r=vn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(_a);const n=Us(xr.h,_a.h,t),r=Us(xr.s,_a.s,t),o=Us(xr.l,_a.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new et;et.NAMES=gp;let B_=0;class pl extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=as(),this.name="",this.blending=Dr,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xu extends pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nr=k_();function k_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function H_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Sn(i,-65504,65504),nr.floatView[0]=i;const e=nr.uint32View[0],t=e>>23&511;return nr.baseTable[t]+((e&8388607)>>nr.shiftTable[t])}function V_(i){const e=i>>10;return nr.uint32View[0]=nr.mantissaTable[nr.offsetTable[e]+(i&1023)]+nr.exponentTable[e],nr.floatView[0]}const jh={toHalfFloat:H_,fromHalfFloat:V_},jt=new q,ga=new it;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Uo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class vp extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xp extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class uo extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G_=0;const ai=new vt,Zl=new Qn,Co=new q,qn=new ls,ys=new ls,an=new q;class cr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dp(e)?xp:vp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ct().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new uo(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(qn.min,ys.min),qn.expandByPoint(an),an.addVectors(qn.max,ys.max),qn.expandByPoint(an)):(qn.expandByPoint(ys.min),qn.expandByPoint(ys.max))}qn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)an.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(an));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),an.add(Co)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;const c=new q,u=new q,d=new q,f=new it,m=new it,v=new it,g=new q,_=new q;function p(C,w,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(o,C),m.fromBufferAttribute(o,w),v.fromBufferAttribute(o,M),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(L),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(L),a[C].add(g),a[w].add(g),a[M].add(g),l[C].add(_),l[w].add(_),l[M].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,w=b.length;C<w;++C){const M=b[C],L=M.start,N=M.count;for(let O=L,G=L+N;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new q,x=new q,P=new q,R=new q;function A(C){P.fromBufferAttribute(r,C),R.copy(P);const w=a[C];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(R,w);const L=x.dot(l[C])<0?-1:1;s.setXYZW(C,S.x,S.y,S.z,L)}for(let C=0,w=b.length;C<w;++C){const M=b[C],L=M.start,N=M.count;for(let O=L,G=L+N;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new vt,qr=new L_,va=new Wu,Qh=new q,xa=new q,ya=new q,Sa=new q,Kl=new q,Ma=new q,ef=new q,wa=new q;class kt extends Qn{constructor(e=new cr,t=new Xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ma.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Kl.fromBufferAttribute(d,e),s?Ma.addScaledVector(Kl,u):Ma.addScaledVector(Kl.sub(t),u))}t.add(Ma)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(o),qr.copy(e.ray).recast(e.near),!(va.containsPoint(qr.origin)===!1&&(qr.intersectSphere(va,Qh)===null||qr.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Jh.copy(o).invert(),qr.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let x=b,P=S;x<P;x+=3){const R=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);r=ba(this,p,e,n,c,u,d,R,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),S=a.getX(_+1),x=a.getX(_+2);r=ba(this,s,e,n,c,u,d,b,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let x=b,P=S;x<P;x+=3){const R=x,A=x+1,C=x+2;r=ba(this,p,e,n,c,u,d,R,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,S=_+1,x=_+2;r=ba(this,s,e,n,c,u,d,b,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function W_(i,e,t,n,r,o,s,a){let l;if(e.side===Gn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Fr,a),l===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:i}}function ba(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,xa),i.getVertexPosition(l,ya),i.getVertexPosition(c,Sa);const u=W_(i,e,t,n,xa,ya,Sa,ef);if(u){const d=new q;wi.getBarycoord(ef,xa,ya,Sa,d),r&&(u.uv=wi.getInterpolatedAttribute(r,a,l,c,d,new it)),o&&(u.uv1=wi.getInterpolatedAttribute(o,a,l,c,d,new it)),s&&(u.normal=wi.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};wi.getNormal(xa,ya,Sa,f.normal),u.face=f,u.barycoord=d}return u}class js extends cr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new uo(c,3)),this.setAttribute("normal",new uo(u,3)),this.setAttribute("uv",new uo(d,2));function v(g,_,p,b,S,x,P,R,A,C,w){const M=x/A,L=P/C,N=x/2,O=P/2,G=R/2,W=A+1,H=C+1;let X=0,B=0;const ue=new q;for(let Q=0;Q<H;Q++){const de=Q*L-O;for(let ge=0;ge<W;ge++){const Oe=ge*M-N;ue[g]=Oe*b,ue[_]=de*S,ue[p]=G,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[_]=0,ue[p]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(ge/A),d.push(1-Q/C),X+=1}}for(let Q=0;Q<C;Q++)for(let de=0;de<A;de++){const ge=f+de+W*Q,Oe=f+de+W*(Q+1),K=f+(de+1)+W*(Q+1),oe=f+(de+1)+W*Q;l.push(ge,Oe,oe),l.push(Oe,K,oe),B+=6}a.addGroup(m,B,w),m+=B,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const r in n)e[r]=n[r]}return e}function X_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const q_={clone:os,merge:Cn};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sp extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new q,tf=new it,nf=new it;class Nn extends Sp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Po=-90,Do=1;class Z_ extends Qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Po,Do,e,t);r.layers=this.layers,this.add(r);const o=new Nn(Po,Do,e,t);o.layers=this.layers,this.add(o);const s=new Nn(Po,Do,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Po,Do,e,t);a.layers=this.layers,this.add(a);const l=new Nn(Po,Do,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Po,Do,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Mp extends mn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),o=new Dt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Ei});o.uniforms.tEquirect.value=t;const s=new kt(r,o),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=gt),new Z_(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const jl=new q,j_=new q,J_=new ct;class Qr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jl.subVectors(n,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||J_.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Wu,Ta=new q;class wp{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,o=new Qr,s=new Qr){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],S=r[14],x=r[15];if(n[0].setComponents(l-o,f-c,_-m,x-p).normalize(),n[1].setComponents(l+o,f+c,_+m,x+p).normalize(),n[2].setComponents(l+s,f+u,_+v,x+b).normalize(),n[3].setComponents(l-s,f-u,_-v,x-b).normalize(),n[4].setComponents(l-a,f-d,_-g,x-S).normalize(),t===ir)n[5].setComponents(l+a,f+d,_+g,x+S).normalize();else if(t===il)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bp(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Q_(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Ri extends cr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let S=0;S<c;S++){const x=S*d-o;v.push(x,-b,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,x=b+c*(p+1),P=b+1+c*(p+1),R=b+1+c*p;m.push(S,x,R),m.push(x,P,R)}this.setIndex(m),this.setAttribute("position",new uo(v,3)),this.setAttribute("normal",new uo(g,3)),this.setAttribute("uv",new uo(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
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
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Jg=`struct PhysicalMaterial {
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
}`,Qg=`
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,_v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,sx=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:rg,alphatest_pars_fragment:og,aomap_fragment:sg,aomap_pars_fragment:ag,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:ug,beginnormal_vertex:hg,bsdfs:fg,iridescence_fragment:dg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:gg,clipping_planes_vertex:vg,color_fragment:xg,color_pars_fragment:yg,color_pars_vertex:Sg,color_vertex:Mg,common:wg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Ag,emissivemap_fragment:Rg,emissivemap_pars_fragment:Cg,colorspace_fragment:Pg,colorspace_pars_fragment:Dg,envmap_fragment:Lg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Ug,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:qg,envmap_vertex:Ng,fog_vertex:Og,fog_pars_vertex:zg,fog_fragment:Bg,fog_pars_fragment:kg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:Yg,lights_toon_pars_fragment:$g,lights_phong_fragment:Zg,lights_phong_pars_fragment:Kg,lights_physical_fragment:jg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Qg,lights_fragment_maps:ev,lights_fragment_end:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:ov,map_fragment:sv,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:hv,morphinstance_vertex:fv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:_v,normal_fragment_begin:gv,normal_fragment_maps:vv,normal_pars_fragment:xv,normal_pars_vertex:yv,normal_vertex:Sv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Ev,opaque_fragment:Av,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Pv,dithering_fragment:Dv,dithering_pars_fragment:Lv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:zv,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:Hv,skinnormal_vertex:Vv,specularmap_fragment:Gv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:$v,uv_pars_fragment:Zv,uv_pars_vertex:Kv,uv_vertex:jv,worldpos_vertex:Jv,background_vert:Qv,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:rx,depth_vert:ox,depth_frag:sx,distanceRGBA_vert:ax,distanceRGBA_frag:lx,equirect_vert:cx,equirect_frag:ux,linedashed_vert:hx,linedashed_frag:fx,meshbasic_vert:dx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:_x,meshmatcap_vert:gx,meshmatcap_frag:vx,meshnormal_vert:xx,meshnormal_frag:yx,meshphong_vert:Sx,meshphong_frag:Mx,meshphysical_vert:wx,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Dx,sprite_frag:Lx},Ne={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ui={basic:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Cn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Cn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Cn([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Cn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Cn([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Cn([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Cn([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Cn([Ne.lights,Ne.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ui.physical={uniforms:Cn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ea={r:0,b:0,g:0},$r=new ni,Ix=new vt;function Ux(i,e,t,n,r,o,s){const a=new et(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const x=v(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const x=v(S);x&&(x.isCubeTexture||x.mapping===fl)?(u===void 0&&(u=new kt(new js(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:os(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(S.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler($r)),u.material.toneMapped=St.getTransfer(x.colorSpace)!==Et,(d!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new Ri(2,2),new Dt({name:"BackgroundMaterial",uniforms:os(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=St.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Ea,yp(i)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function Fx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(M,L,N,O,G){let W=!1;const H=d(O,N,L);o!==H&&(o=H,c(o.object)),W=m(M,O,N,G),W&&v(M,O,N,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,x(M,L,N,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,N){const O=N.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let H=W[O];return H===void 0&&(H=f(l()),W[O]=H),H}function f(M){const L=[],N=[],O=[];for(let G=0;G<t;G++)L[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,L,N,O){const G=o.attributes,W=L.attributes;let H=0;const X=N.getAttributes();for(const B in X)if(X[B].location>=0){const Q=G[B];let de=W[B];if(de===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;H++}return o.attributesNum!==H||o.index!==O}function v(M,L,N,O){const G={},W=L.attributes;let H=0;const X=N.getAttributes();for(const B in X)if(X[B].location>=0){let Q=W[B];Q===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),G[B]=de,H++}o.attributes=G,o.attributesNum=H,o.index=O}function g(){const M=o.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function _(M){p(M,0)}function p(M,L){const N=o.newAttributes,O=o.enabledAttributes,G=o.attributeDivisors;N[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),G[M]!==L&&(i.vertexAttribDivisor(M,L),G[M]=L)}function b(){const M=o.newAttributes,L=o.enabledAttributes;for(let N=0,O=L.length;N<O;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function S(M,L,N,O,G,W,H){H===!0?i.vertexAttribIPointer(M,L,N,G,W):i.vertexAttribPointer(M,L,N,O,G,W)}function x(M,L,N,O){g();const G=O.attributes,W=N.getAttributes(),H=L.defaultAttributeValues;for(const X in W){const B=W[X];if(B.location>=0){let ue=G[X];if(ue===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const Q=ue.normalized,de=ue.itemSize,ge=e.get(ue);if(ge===void 0)continue;const Oe=ge.buffer,K=ge.type,oe=ge.bytesPerElement,le=K===i.INT||K===i.UNSIGNED_INT||ue.gpuType===Nu;if(ue.isInterleavedBufferAttribute){const se=ue.data,be=se.stride,Fe=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)p(B.location+Te,se.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Te=0;Te<B.locationSize;Te++)_(B.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Te=0;Te<B.locationSize;Te++)S(B.location+Te,de/B.locationSize,K,Q,be*oe,(Fe+de/B.locationSize*Te)*oe,le)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)p(B.location+se,ue.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<B.locationSize;se++)_(B.location+se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let se=0;se<B.locationSize;se++)S(B.location+se,de/B.locationSize,K,Q,de*oe,de/B.locationSize*se*oe,le)}}else if(H!==void 0){const Q=H[X];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(B.location,Q);break;case 3:i.vertexAttrib3fv(B.location,Q);break;case 4:i.vertexAttrib4fv(B.location,Q);break;default:i.vertexAttrib1fv(B.location,Q)}}}}b()}function P(){C();for(const M in n){const L=n[M];for(const N in L){const O=L[N];for(const G in O)u(O[G].object),delete O[G];delete L[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const O=L[N];for(const G in O)u(O[G].object),delete O[G];delete L[N]}delete n[M.id]}function A(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const O=N[M.id];for(const G in O)u(O[G].object),delete O[G];delete N[M.id]}}function C(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function Nx(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ox(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ai&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function zx(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Qr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,S=b*4;let x=p.clippingState||null;l.value=x,x=u(v,f,S,m);for(let P=0;P!==S;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,x=m;S!==g;++S,x+=4)s.copy(d[S]).applyMatrix4(b,a),s.normal.toArray(_,x),_[x+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Bx(i){let e=new WeakMap;function t(s,a){return a===Oc?s.mapping=ts:a===zc&&(s.mapping=ns),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Oc||a===zc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new K_(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class qu extends Sp{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,rf=[.125,.215,.35,.446,.526,.582],no=20,Jl=new qu,of=new et;let Ql=null,ec=0,tc=0,nc=!1;const eo=(1+Math.sqrt(5))/2,Lo=1/eo,sf=[new q(-eo,Lo,0),new q(eo,Lo,0),new q(-Lo,0,eo),new q(Lo,0,eo),new q(0,eo,-Lo),new q(0,eo,Lo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Oi,format:dn,colorSpace:ki,depthBuffer:!1},r=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(o)),this._blurMaterial=Hx(o,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,n,r){const a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(of),u.toneMapping=zi,u.autoClear=!1;const m=new Xu({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),v=new kt(new js,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(of),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Aa(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Jl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=sf[(r-o-1)%sf.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new kt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*no-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):no;_>no&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${no}`);const p=[];let b=0;for(let A=0;A<no;++A){const C=A/g,w=Math.exp(-C*C/2);p.push(w),A===0?b+=w:A<_&&(b+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const x=this._sizeLods[r],P=3*x*(r>S-Oo?r-S+Oo:0),R=4*(this._cubeSize-x);Aa(t,P,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Jl)}}function kx(i){const e=[],t=[],n=[];let r=i;const o=i-Oo+1+rf.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Oo?l=rf[s-i+Oo-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),S=new Float32Array(_*v*m),x=new Float32Array(p*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,C=R>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(w,g*v*R),S.set(f,_*v*R);const M=[R,R,R,R,R,R];x.set(M,p*v*R)}const P=new cr;P.setAttribute("position",new Xt(b,g)),P.setAttribute("uv",new Xt(S,_)),P.setAttribute("faceIndex",new Xt(x,p)),e.push(P),r>Oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(i,e,t){const n=new lr(i,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hx(i,e,t){const n=new Float32Array(no),r=new q(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function cf(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function uf(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function Vx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===zc,u=l===ts||l===ns;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new af(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new af(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Gx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wx(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let S=0,x=b.length;S<x;S+=3){const P=b[S+0],R=b[S+1],A=b[S+2];f.push(P,R,R,A,A,P)}}else if(v!==void 0){const b=v.array;g=v.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const P=S+0,R=S+1,A=S+2;f.push(P,R,R,A,A,P)}}else return;const _=new(dp(f)?xp:vp)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Xx(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yx(i,e,t){const n=new WeakMap,r=new Ft;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let P=a.attributes.position.count*x,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*d),C=new mp(A,P,R,d);C.type=zn,C.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const N=p[L],O=b[L],G=S[L],W=P*R*4*L;for(let H=0;H<N.count;H++){const X=H*w;v===!0&&(r.fromBufferAttribute(N,H),A[W+X+0]=r.x,A[W+X+1]=r.y,A[W+X+2]=r.z,A[W+X+3]=0),g===!0&&(r.fromBufferAttribute(O,H),A[W+X+4]=r.x,A[W+X+5]=r.y,A[W+X+6]=r.z,A[W+X+7]=0),_===!0&&(r.fromBufferAttribute(G,H),A[W+X+8]=r.x,A[W+X+9]=r.y,A[W+X+10]=r.z,A[W+X+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new it(P,R)},n.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function $x(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class rl extends mn{constructor(e,t,n,r,o,s,a,l,c,u=qo){if(u!==qo&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qo&&(n=fo),n===void 0&&u===rs&&(n=is),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tp=new mn,hf=new rl(1,1),Ep=new mp,Ap=new P_,Rp=new Mp,ff=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),_f=new Float32Array(4);function cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=ff[r];if(o===void 0&&(o=new Float32Array(r),ff[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ml(i,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),rn(t,n)}}function e1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;mf.set(n),i.uniformMatrix3fv(this.addr,!1,mf),rn(t,n)}}function t1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;pf.set(n),i.uniformMatrix4fv(this.addr,!1,pf),rn(t,n)}}function n1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function o1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function s1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function u1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=fp,o=hf):o=Tp,t.setTexture2D(e||o,r)}function h1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ap,r)}function f1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rp,r)}function d1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ep,r)}function p1(i){switch(i){case 5126:return Zx;case 35664:return Kx;case 35665:return jx;case 35666:return Jx;case 35674:return Qx;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return o1;case 5125:return s1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(i,e){i.uniform1fv(this.addr,e)}function _1(i,e){const t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function g1(i,e){const t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function v1(i,e){const t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function x1(i,e){const t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y1(i,e){const t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S1(i,e){const t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M1(i,e){i.uniform1iv(this.addr,e)}function w1(i,e){i.uniform2iv(this.addr,e)}function b1(i,e){i.uniform3iv(this.addr,e)}function T1(i,e){i.uniform4iv(this.addr,e)}function E1(i,e){i.uniform1uiv(this.addr,e)}function A1(i,e){i.uniform2uiv(this.addr,e)}function R1(i,e){i.uniform3uiv(this.addr,e)}function C1(i,e){i.uniform4uiv(this.addr,e)}function P1(i,e,t){const n=this.cache,r=e.length,o=ml(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Tp,o[s])}function D1(i,e,t){const n=this.cache,r=e.length,o=ml(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ap,o[s])}function L1(i,e,t){const n=this.cache,r=e.length,o=ml(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Rp,o[s])}function I1(i,e,t){const n=this.cache,r=e.length,o=ml(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ep,o[s])}function U1(i){switch(i){case 5126:return m1;case 35664:return _1;case 35665:return g1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return w1;case 35668:case 35672:return b1;case 35669:case 35673:return T1;case 5125:return E1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return I1}}class F1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p1(t.type)}}class N1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U1(t.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function gf(i,e){i.seq.push(e),i.map[e.id]=e}function z1(i,e,t){const n=i.name,r=n.length;for(ic.lastIndex=0;;){const o=ic.exec(n),s=ic.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){gf(t,c===void 0?new F1(a,i,e):new N1(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new O1(a),gf(t,d)),t=d}}}class Ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);z1(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function vf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const B1=37297;let k1=0;function H1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const xf=new ct;function V1(i){St._getMatrix(xf,St.workingColorSpace,i);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case dl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+H1(i.getShaderSource(e),s)}else return r}function G1(i,e){const t=V1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function W1(i,e){let t;switch(e){case H0:t="Linear";break;case V0:t="Reinhard";break;case G0:t="Cineon";break;case W0:t="ACESFilmic";break;case q0:t="AgX";break;case Y0:t="Neutral";break;case X0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new q;function X1(){St.getLuminanceCoefficients(Ra);const i=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Y1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Cs(i){return i!==""}function Sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(Z1,j1)}const K1=new Map;function j1(i,e){let t=ut[e];if(t===void 0){const n=K1.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(J1,Q1)}function Q1(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ey(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function ty(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ny(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function iy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tp:e="ENVMAP_BLENDING_MULTIPLY";break;case B0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function ry(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function oy(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=ey(t),c=ty(t),u=ny(t),d=iy(t),f=ry(t),m=q1(t),v=Y1(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(_=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ut.tonemapping_pars_fragment:"",t.toneMapping!==zi?W1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,G1("linearToOutputTexel",t.outputColorSpace),X1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),s=hu(s),s=Sf(s,t),s=Mf(s,t),a=hu(a),a=Sf(a,t),a=Mf(a,t),s=wf(s),a=wf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+_+s,x=b+p+a,P=vf(r,r.VERTEX_SHADER,S),R=vf(r,r.FRAGMENT_SHADER,x);r.attachShader(g,P),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(R).trim();let W=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,R);else{const X=yf(r,P,"vertex"),B=yf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||G==="")&&(H=!1);H&&(L.diagnostics={runnable:W,programLog:N,vertexShader:{log:O,prefix:_},fragmentShader:{log:G,prefix:p}})}r.deleteShader(P),r.deleteShader(R),C=new Ya(r,g),w=$1(r,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,B1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}let sy=0;class ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ly(e),t.set(e,n)),n}}class ly{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}}function cy(i,e,t,n,r,o,s){const a=new _p,l=new ay,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,M,L,N,O){const G=N.fog,W=O.geometry,H=w.isMeshStandardMaterial?N.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),B=X&&X.mapping===fl?X.image.height:null,ue=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=Q!==void 0?Q.length:0;let ge=0;W.morphAttributes.position!==void 0&&(ge=1),W.morphAttributes.normal!==void 0&&(ge=2),W.morphAttributes.color!==void 0&&(ge=3);let Oe,K,oe,le;if(ue){const dt=Ui[ue];Oe=dt.vertexShader,K=dt.fragmentShader}else Oe=w.vertexShader,K=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const se=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,Ve=!!w.map,Ge=!!w.matcap,st=!!X,z=!!w.aoMap,He=!!w.lightMap,Be=!!w.bumpMap,$e=!!w.normalMap,ke=!!w.displacementMap,qe=!!w.emissiveMap,ze=!!w.metalnessMap,U=!!w.roughnessMap,E=w.anisotropy>0,k=w.clearcoat>0,Z=w.dispersion>0,ae=w.iridescence>0,ne=w.sheen>0,Ce=w.transmission>0,fe=E&&!!w.anisotropyMap,_e=k&&!!w.clearcoatMap,Ze=k&&!!w.clearcoatNormalMap,he=k&&!!w.clearcoatRoughnessMap,ce=ae&&!!w.iridescenceMap,ye=ae&&!!w.iridescenceThicknessMap,Ee=ne&&!!w.sheenColorMap,De=ne&&!!w.sheenRoughnessMap,Je=!!w.specularMap,Ye=!!w.specularColorMap,Qe=!!w.specularIntensityMap,V=Ce&&!!w.transmissionMap,te=Ce&&!!w.thicknessMap,ie=!!w.gradientMap,pe=!!w.alphaMap,Ue=w.alphaTest>0,Le=!!w.alphaHash,rt=!!w.extensions;let At=zi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(At=i.toneMapping);const It={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Oe,fragmentShader:K,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ki,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:Ge,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:He,bumpMap:Be,normalMap:$e,displacementMap:f&&ke,emissiveMap:qe,normalMapObjectSpace:$e&&w.normalMapType===J0,normalMapTangentSpace:$e&&w.normalMapType===j0,metalnessMap:ze,roughnessMap:U,anisotropy:E,anisotropyMap:fe,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:he,dispersion:Z,iridescence:ae,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:ne,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Je,specularColorMap:Ye,specularIntensityMap:Qe,transmission:Ce,transmissionMap:V,thicknessMap:te,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Dr&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:Le,combine:w.combine,mapUv:Ve&&g(w.map.channel),aoMapUv:z&&g(w.aoMap.channel),lightMapUv:He&&g(w.lightMap.channel),bumpMapUv:Be&&g(w.bumpMap.channel),normalMapUv:$e&&g(w.normalMap.channel),displacementMapUv:ke&&g(w.displacementMap.channel),emissiveMapUv:qe&&g(w.emissiveMap.channel),metalnessMapUv:ze&&g(w.metalnessMap.channel),roughnessMapUv:U&&g(w.roughnessMap.channel),anisotropyMapUv:fe&&g(w.anisotropyMap.channel),clearcoatMapUv:_e&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(w.sheenRoughnessMap.channel),specularMapUv:Je&&g(w.specularMap.channel),specularColorMapUv:Ye&&g(w.specularColorMap.channel),specularIntensityMapUv:Qe&&g(w.specularIntensityMap.channel),transmissionMapUv:V&&g(w.transmissionMap.channel),thicknessMapUv:te&&g(w.thicknessMap.channel),alphaMapUv:pe&&g(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($e||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ve||pe),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===Et,decodeVideoTextureEmissive:qe&&w.emissiveMap.isVideoTexture===!0&&St.getTransfer(w.emissiveMap.colorSpace)===Et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wn,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:rt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&w.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(b(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=v[w.type];let L;if(M){const N=Ui[M];L=q_.clone(N.uniforms)}else L=w.uniforms;return L}function P(w,M){let L;for(let N=0,O=u.length;N<O;N++){const G=u[N];if(G.cacheKey===M){L=G,++L.usedTimes;break}}return L===void 0&&(L=new oy(i,M,w,o),u.push(L)),L}function R(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:C}}function uy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function hy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||hy),n.length>1&&n.sort(f||Tf),r.length>1&&r.sort(f||Tf)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function fy(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Ef,i.set(n,[s])):r>=o.length?(s=new Ef,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new et};break;case"SpotLight":t={position:new q,direction:new q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function py(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let my=0;function _y(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gy(i){const e=new dy,t=py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new vt,s=new vt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,S=0,x=0,P=0,R=0,A=0;c.sort(_y);for(let w=0,M=c.length;w<M;w++){const L=c[w],N=L.color,O=L.intensity,G=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],O);A++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,B=t.get(L);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=H,m++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[g]=H;const X=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,X.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[g]=X.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=W,x++}g++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(N).multiplyScalar(O),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=H,_++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const X=L.shadow,B=t.get(L);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=L.shadow.matrix,S++}n.point[v]=H,v++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(O),H.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,C.directionalLength=m,C.pointLength=v,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=A,n.version=my++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(S.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Af(i){const e=new gy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function vy(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Af(i),e.set(r,[a])):o>=s.length?(a=new Af(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class xy extends pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yy extends pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
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
}`;function wy(i,e,t){let n=new wp;const r=new it,o=new it,s=new Ft,a=new xy({depthPacking:K0}),l=new yy,c={},u=t.maxTextureSize,d={[Fr]:Gn,[Gn]:Fr,[wn]:wn},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Sy,fragmentShader:My}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new cr;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ep;let p=this.type;this.render=function(R,A,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==Ji&&this.type===Ji,G=p===Ji&&this.type!==Ji;for(let W=0,H=R.length;W<H;W++){const X=R[W],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ue=B.getFrameExtents();if(r.multiply(ue),o.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ue.x),r.x=o.x*ue.x,B.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ue.y),r.y=o.y*ue.y,B.mapSize.y=o.y)),B.map===null||O===!0||G===!0){const de=this.type!==Ji?{minFilter:tn,magFilter:tn}:{};B.map!==null&&B.map.dispose(),B.map=new lr(r.x,r.y,de),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Q=B.getViewportCount();for(let de=0;de<Q;de++){const ge=B.getViewport(de);s.set(o.x*ge.x,o.y*ge.y,o.x*ge.z,o.y*ge.w),N.viewport(s),B.updateMatrices(X,de),n=B.getFrustum(),x(A,C,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Ji&&b(B,C),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,M,L)};function b(R,A){const C=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new lr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,C,m,g,null)}function S(R,A,C,w){let M=null;const L=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,O=A.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let W=G[O];W===void 0&&(W=M.clone(),G[O]=W,A.addEventListener("dispose",P)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Ji?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=C}return M}function x(R,A,C,w,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ji)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const O=e.update(R),G=R.material;if(Array.isArray(G)){const W=O.groups;for(let H=0,X=W.length;H<X;H++){const B=W[H],ue=G[B.materialIndex];if(ue&&ue.visible){const Q=S(R,ue,w,M);R.onBeforeShadow(i,R,A,C,O,Q,B),i.renderBufferDirect(C,null,O,Q,R,B),R.onAfterShadow(i,R,A,C,O,Q,B)}}}else if(G.visible){const W=S(R,G,w,M);R.onBeforeShadow(i,R,A,C,O,W,null),i.renderBufferDirect(C,null,O,W,R,null),R.onAfterShadow(i,R,A,C,O,W,null)}}const N=R.children;for(let O=0,G=N.length;O<G;O++)x(N[O],A,C,w,M)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const w=c[C],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const by={[Pc]:Dc,[Lc]:Fc,[Ic]:Nc,[es]:Uc,[Dc]:Pc,[Fc]:Lc,[Nc]:Ic,[Uc]:es};function Ty(i,e){function t(){let V=!1;const te=new Ft;let ie=null;const pe=new Ft(0,0,0,0);return{setMask:function(Ue){ie!==Ue&&!V&&(i.colorMask(Ue,Ue,Ue,Ue),ie=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,Le,rt,At,It){It===!0&&(Ue*=At,Le*=At,rt*=At),te.set(Ue,Le,rt,At),pe.equals(te)===!1&&(i.clearColor(Ue,Le,rt,At),pe.copy(te))},reset:function(){V=!1,ie=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,te=!1,ie=null,pe=null,Ue=null;return{setReversed:function(Le){if(te!==Le){const rt=e.get("EXT_clip_control");te?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const At=Ue;Ue=null,this.setClear(At)}te=Le},getReversed:function(){return te},setTest:function(Le){Le?se(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Le){ie!==Le&&!V&&(i.depthMask(Le),ie=Le)},setFunc:function(Le){if(te&&(Le=by[Le]),pe!==Le){switch(Le){case Pc:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Uc:i.depthFunc(i.GEQUAL);break;case Fc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Le}},setLocked:function(Le){V=Le},setClear:function(Le){Ue!==Le&&(te&&(Le=1-Le),i.clearDepth(Le),Ue=Le)},reset:function(){V=!1,ie=null,pe=null,Ue=null,te=!1}}}function r(){let V=!1,te=null,ie=null,pe=null,Ue=null,Le=null,rt=null,At=null,It=null;return{setTest:function(dt){V||(dt?se(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(dt){te!==dt&&!V&&(i.stencilMask(dt),te=dt)},setFunc:function(dt,cn,bt){(ie!==dt||pe!==cn||Ue!==bt)&&(i.stencilFunc(dt,cn,bt),ie=dt,pe=cn,Ue=bt)},setOp:function(dt,cn,bt){(Le!==dt||rt!==cn||At!==bt)&&(i.stencilOp(dt,cn,bt),Le=dt,rt=cn,At=bt)},setLocked:function(dt){V=dt},setClear:function(dt){It!==dt&&(i.clearStencil(dt),It=dt)},reset:function(){V=!1,te=null,ie=null,pe=null,Ue=null,Le=null,rt=null,At=null,It=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,x=null,P=null,R=null,A=new et(0,0,0),C=0,w=!1,M=null,L=null,N=null,O=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=X>=2);let ue=null,Q={};const de=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Oe=new Ft().fromArray(de),K=new Ft().fromArray(ge);function oe(V,te,ie,pe){const Ue=new Uint8Array(4),Le=i.createTexture();i.bindTexture(V,Le),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ie;rt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(te+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Le}const le={};le[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(i.DEPTH_TEST),s.setFunc(es),Be(!1),$e(Rh),se(i.CULL_FACE),z(Ei);function se(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function be(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Fe(V,te){return d[V]!==te?(i.bindFramebuffer(V,te),d[V]=te,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(V,te){let ie=m,pe=!1;if(V){ie=f.get(te),ie===void 0&&(ie=[],f.set(te,ie));const Ue=V.textures;if(ie.length!==Ue.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,rt=Ue.length;Le<rt;Le++)ie[Le]=i.COLOR_ATTACHMENT0+Le;ie.length=Ue.length,pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ie)}function Ve(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Ge={[In]:i.FUNC_ADD,[b0]:i.FUNC_SUBTRACT,[T0]:i.FUNC_REVERSE_SUBTRACT};Ge[E0]=i.MIN,Ge[A0]=i.MAX;const st={[Ha]:i.ZERO,[ci]:i.ONE,[R0]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[L0]:i.DST_COLOR,[P0]:i.DST_ALPHA,[C0]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[I0]:i.ONE_MINUS_DST_COLOR,[D0]:i.ONE_MINUS_DST_ALPHA,[F0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[O0]:i.CONSTANT_ALPHA,[z0]:i.ONE_MINUS_CONSTANT_ALPHA};function z(V,te,ie,pe,Ue,Le,rt,At,It,dt){if(V===Ei){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),V!==Ys){if(V!==_||dt!==w){if((p!==In||x!==In)&&(i.blendEquation(i.FUNC_ADD),p=In,x=In),dt)switch(V){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,S=null,P=null,R=null,A.set(0,0,0),C=0,_=V,w=dt}return}Ue=Ue||te,Le=Le||ie,rt=rt||pe,(te!==p||Ue!==x)&&(i.blendEquationSeparate(Ge[te],Ge[Ue]),p=te,x=Ue),(ie!==b||pe!==S||Le!==P||rt!==R)&&(i.blendFuncSeparate(st[ie],st[pe],st[Le],st[rt]),b=ie,S=pe,P=Le,R=rt),(At.equals(A)===!1||It!==C)&&(i.blendColor(At.r,At.g,At.b,It),A.copy(At),C=It),_=V,w=!1}function He(V,te){V.side===wn?be(i.CULL_FACE):se(i.CULL_FACE);let ie=V.side===Gn;te&&(ie=!ie),Be(ie),V.blending===Dr&&V.transparent===!1?z(Ei):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),o.setMask(V.colorWrite);const pe=V.stencilWrite;a.setTest(pe),pe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function $e(V){V!==S0?(se(i.CULL_FACE),V!==L&&(V===Rh?i.cullFace(i.BACK):V===M0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=V}function ke(V){V!==N&&(H&&i.lineWidth(V),N=V)}function qe(V,te,ie){V?(se(i.POLYGON_OFFSET_FILL),(O!==te||G!==ie)&&(i.polygonOffset(te,ie),O=te,G=ie)):be(i.POLYGON_OFFSET_FILL)}function ze(V){V?se(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(V){V===void 0&&(V=i.TEXTURE0+W-1),ue!==V&&(i.activeTexture(V),ue=V)}function E(V,te,ie){ie===void 0&&(ue===null?ie=i.TEXTURE0+W-1:ie=ue);let pe=Q[ie];pe===void 0&&(pe={type:void 0,texture:void 0},Q[ie]=pe),(pe.type!==V||pe.texture!==te)&&(ue!==ie&&(i.activeTexture(ie),ue=ie),i.bindTexture(V,te||le[V]),pe.type=V,pe.texture=te)}function k(){const V=Q[ue];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(V){Oe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function De(V){K.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function Je(V,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let pe=ie.get(V);pe===void 0&&(pe=i.getUniformBlockIndex(te,V.name),ie.set(V,pe))}function Ye(V,te){const pe=c.get(te).get(V);l.get(te)!==pe&&(i.uniformBlockBinding(te,pe,V.__bindingPointIndex),l.set(te,pe))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,Q={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,x=null,P=null,R=null,A=new et(0,0,0),C=0,w=!1,M=null,L=null,N=null,O=null,G=null,Oe.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:be,bindFramebuffer:Fe,drawBuffers:Te,useProgram:Ve,setBlending:z,setMaterial:He,setFlipSided:Be,setCullFace:$e,setLineWidth:ke,setPolygonOffset:qe,setScissorTest:ze,activeTexture:U,bindTexture:E,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ae,texImage2D:ce,texImage3D:ye,updateUBOMapping:Je,uniformBlockBinding:Ye,texStorage2D:Ze,texStorage3D:he,texSubImage2D:ne,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ee,viewport:De,reset:Qe}}function Rf(i,e,t,n){const r=Ey(n);switch(t){case sp:return i*e;case lp:return i*e;case cp:return i*e*2;case Bu:return i*e/r.components*r.byteLength;case ku:return i*e/r.components*r.byteLength;case up:return i*e*2/r.components*r.byteLength;case Hu:return i*e*2/r.components*r.byteLength;case ap:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case Vu:return i*e*4/r.components*r.byteLength;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:case Vc:return Math.max(i,16)*Math.max(e,8)/4;case Bc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qa:case su:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hp:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cu:case uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ey(i){switch(i){case Ai:case ip:return{byteLength:1,components:1};case ho:case rp:case Oi:return{byteLength:2,components:1};case Ou:case zu:return{byteLength:2,components:4};case fo:case Nu:case zn:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ay(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,E){return m?new OffscreenCanvas(U,E):Zs("canvas")}function g(U,E,k){let Z=1;const ae=ze(U);if((ae.width>k||ae.height>k)&&(Z=k/Math.max(ae.width,ae.height)),Z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ne=Math.floor(Z*ae.width),Ce=Math.floor(Z*ae.height);d===void 0&&(d=v(ne,Ce));const fe=E?v(ne,Ce):d;return fe.width=ne,fe.height=Ce,fe.getContext("2d").drawImage(U,0,0,ne,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ce+")."),fe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,E,k,Z,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ne=E;if(E===i.RED&&(k===i.FLOAT&&(ne=i.R32F),k===i.HALF_FLOAT&&(ne=i.R16F),k===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.R8UI),k===i.UNSIGNED_SHORT&&(ne=i.R16UI),k===i.UNSIGNED_INT&&(ne=i.R32UI),k===i.BYTE&&(ne=i.R8I),k===i.SHORT&&(ne=i.R16I),k===i.INT&&(ne=i.R32I)),E===i.RG&&(k===i.FLOAT&&(ne=i.RG32F),k===i.HALF_FLOAT&&(ne=i.RG16F),k===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RG8UI),k===i.UNSIGNED_SHORT&&(ne=i.RG16UI),k===i.UNSIGNED_INT&&(ne=i.RG32UI),k===i.BYTE&&(ne=i.RG8I),k===i.SHORT&&(ne=i.RG16I),k===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),k===i.UNSIGNED_INT&&(ne=i.RGB32UI),k===i.BYTE&&(ne=i.RGB8I),k===i.SHORT&&(ne=i.RGB16I),k===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),k===i.UNSIGNED_INT&&(ne=i.RGBA32UI),k===i.BYTE&&(ne=i.RGBA8I),k===i.SHORT&&(ne=i.RGBA16I),k===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),E===i.RGBA){const Ce=ae?dl:St.getTransfer(Z);k===i.FLOAT&&(ne=i.RGBA32F),k===i.HALF_FLOAT&&(ne=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ne=Ce===Et?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(U,E){let k;return U?E===null||E===fo||E===is?k=i.DEPTH24_STENCIL8:E===zn?k=i.DEPTH32F_STENCIL8:E===ho&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fo||E===is?k=i.DEPTH_COMPONENT24:E===zn?k=i.DEPTH_COMPONENT32F:E===ho&&(k=i.DEPTH_COMPONENT16),k}function P(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==tn&&U.minFilter!==gt?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function R(U){const E=U.target;E.removeEventListener("dispose",R),C(E),E.isVideoTexture&&u.delete(E)}function A(U){const E=U.target;E.removeEventListener("dispose",A),M(E)}function C(U){const E=n.get(U);if(E.__webglInit===void 0)return;const k=U.source,Z=f.get(k);if(Z){const ae=Z[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(U),Object.keys(Z).length===0&&f.delete(k)}n.remove(U)}function w(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const k=U.source,Z=f.get(k);delete Z[E.__cacheKey],s.memory.textures--}function M(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ae=0;ae<E.__webglFramebuffer[Z].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[Z][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=U.textures;for(let Z=0,ae=k.length;Z<ae;Z++){const ne=n.get(k[Z]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(k[Z])}n.remove(U)}let L=0;function N(){L=0}function O(){const U=L;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),L+=1,U}function G(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function W(U,E){const k=n.get(U);if(U.isVideoTexture&&ke(U),U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){const Z=U.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,U,E);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function H(U,E){const k=n.get(U);if(U.version>0&&k.__version!==U.version){K(k,U,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function X(U,E){const k=n.get(U);if(U.version>0&&k.__version!==U.version){K(k,U,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function B(U,E){const k=n.get(U);if(U.version>0&&k.__version!==U.version){oe(k,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}const ue={[Xo]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},Q={[tn]:i.NEAREST,[$0]:i.NEAREST_MIPMAP_NEAREST,[la]:i.NEAREST_MIPMAP_LINEAR,[gt]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},de={[Q0]:i.NEVER,[o_]:i.ALWAYS,[e_]:i.LESS,[fp]:i.LEQUAL,[t_]:i.EQUAL,[r_]:i.GEQUAL,[n_]:i.GREATER,[i_]:i.NOTEQUAL};function ge(U,E){if(E.type===zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gt||E.magFilter===Dl||E.magFilter===la||E.magFilter===bi||E.minFilter===gt||E.minFilter===Dl||E.minFilter===la||E.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ue[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ue[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ue[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==la&&E.minFilter!==bi||E.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(U,E){let k=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",R));const Z=E.source;let ae=f.get(Z);ae===void 0&&(ae={},f.set(Z,ae));const ne=G(E);if(ne!==U.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),ae[ne].usedTimes++;const Ce=ae[U.__cacheKey];Ce!==void 0&&(ae[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(E)),U.__cacheKey=ne,U.__webglTexture=ae[ne].texture}return k}function K(U,E,k){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const ae=Oe(U,E),ne=E.source;t.bindTexture(Z,U.__webglTexture,i.TEXTURE0+k);const Ce=n.get(ne);if(ne.version!==Ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+k);const fe=St.getPrimaries(St.workingColorSpace),_e=E.colorSpace===en?null:St.getPrimaries(E.colorSpace),Ze=E.colorSpace===en||fe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let he=g(E.image,!1,r.maxTextureSize);he=qe(E,he);const ce=o.convert(E.format,E.colorSpace),ye=o.convert(E.type);let Ee=S(E.internalFormat,ce,ye,E.colorSpace,E.isVideoTexture);ge(Z,E);let De;const Je=E.mipmaps,Ye=E.isVideoTexture!==!0,Qe=Ce.__version===void 0||ae===!0,V=ne.dataReady,te=P(E,he);if(E.isDepthTexture)Ee=x(E.format===rs,E.type),Qe&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,ce,ye,null));else if(E.isDataTexture)if(Je.length>0){Ye&&Qe&&t.texStorage2D(i.TEXTURE_2D,te,Ee,Je[0].width,Je[0].height);for(let ie=0,pe=Je.length;ie<pe;ie++)De=Je[ie],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,ce,ye,De.data):t.texImage2D(i.TEXTURE_2D,ie,Ee,De.width,De.height,0,ce,ye,De.data);E.generateMipmaps=!1}else Ye?(Qe&&t.texStorage2D(i.TEXTURE_2D,te,Ee,he.width,he.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,ce,ye,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,ce,ye,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ee,Je[0].width,Je[0].height,he.depth);for(let ie=0,pe=Je.length;ie<pe;ie++)if(De=Je[ie],E.format!==dn)if(ce!==null)if(Ye){if(V)if(E.layerUpdates.size>0){const Ue=Rf(De.width,De.height,E.format,E.type);for(const Le of E.layerUpdates){const rt=De.data.subarray(Le*Ue/De.data.BYTES_PER_ELEMENT,(Le+1)*Ue/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Le,De.width,De.height,1,ce,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,De.width,De.height,he.depth,ce,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Ee,De.width,De.height,he.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,De.width,De.height,he.depth,ce,ye,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Ee,De.width,De.height,he.depth,0,ce,ye,De.data)}else{Ye&&Qe&&t.texStorage2D(i.TEXTURE_2D,te,Ee,Je[0].width,Je[0].height);for(let ie=0,pe=Je.length;ie<pe;ie++)De=Je[ie],E.format!==dn?ce!==null?Ye?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,ce,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Ee,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,ce,ye,De.data):t.texImage2D(i.TEXTURE_2D,ie,Ee,De.width,De.height,0,ce,ye,De.data)}else if(E.isDataArrayTexture)if(Ye){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ee,he.width,he.height,he.depth),V)if(E.layerUpdates.size>0){const ie=Rf(he.width,he.height,E.format,E.type);for(const pe of E.layerUpdates){const Ue=he.data.subarray(pe*ie/he.data.BYTES_PER_ELEMENT,(pe+1)*ie/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,he.width,he.height,1,ce,ye,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ce,ye,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,he.width,he.height,he.depth,0,ce,ye,he.data);else if(E.isData3DTexture)Ye?(Qe&&t.texStorage3D(i.TEXTURE_3D,te,Ee,he.width,he.height,he.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ce,ye,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,he.width,he.height,he.depth,0,ce,ye,he.data);else if(E.isFramebufferTexture){if(Qe)if(Ye)t.texStorage2D(i.TEXTURE_2D,te,Ee,he.width,he.height);else{let ie=he.width,pe=he.height;for(let Ue=0;Ue<te;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ee,ie,pe,0,ce,ye,null),ie>>=1,pe>>=1}}else if(Je.length>0){if(Ye&&Qe){const ie=ze(Je[0]);t.texStorage2D(i.TEXTURE_2D,te,Ee,ie.width,ie.height)}for(let ie=0,pe=Je.length;ie<pe;ie++)De=Je[ie],Ye?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ce,ye,De):t.texImage2D(i.TEXTURE_2D,ie,Ee,ce,ye,De);E.generateMipmaps=!1}else if(Ye){if(Qe){const ie=ze(he);t.texStorage2D(i.TEXTURE_2D,te,Ee,ie.width,ie.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,ye,he)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ce,ye,he);_(E)&&p(Z),Ce.__version=ne.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function oe(U,E,k){if(E.image.length!==6)return;const Z=Oe(U,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+k);const ne=n.get(ae);if(ae.version!==ne.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);const Ce=St.getPrimaries(St.workingColorSpace),fe=E.colorSpace===en?null:St.getPrimaries(E.colorSpace),_e=E.colorSpace===en||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let pe=0;pe<6;pe++)!Ze&&!he?ce[pe]=g(E.image[pe],!0,r.maxCubemapSize):ce[pe]=he?E.image[pe].image:E.image[pe],ce[pe]=qe(E,ce[pe]);const ye=ce[0],Ee=o.convert(E.format,E.colorSpace),De=o.convert(E.type),Je=S(E.internalFormat,Ee,De,E.colorSpace),Ye=E.isVideoTexture!==!0,Qe=ne.__version===void 0||Z===!0,V=ae.dataReady;let te=P(E,ye);ge(i.TEXTURE_CUBE_MAP,E);let ie;if(Ze){Ye&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Je,ye.width,ye.height);for(let pe=0;pe<6;pe++){ie=ce[pe].mipmaps;for(let Ue=0;Ue<ie.length;Ue++){const Le=ie[Ue];E.format!==dn?Ee!==null?Ye?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Le.width,Le.height,Ee,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Le.width,Le.height,Ee,De,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Je,Le.width,Le.height,0,Ee,De,Le.data)}}}else{if(ie=E.mipmaps,Ye&&Qe){ie.length>0&&te++;const pe=ze(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(he){Ye?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce[pe].width,ce[pe].height,Ee,De,ce[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Je,ce[pe].width,ce[pe].height,0,Ee,De,ce[pe].data);for(let Ue=0;Ue<ie.length;Ue++){const rt=ie[Ue].image[pe].image;Ye?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,rt.width,rt.height,Ee,De,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Je,rt.width,rt.height,0,Ee,De,rt.data)}}else{Ye?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee,De,ce[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Je,Ee,De,ce[pe]);for(let Ue=0;Ue<ie.length;Ue++){const Le=ie[Ue];Ye?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Ee,De,Le.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Je,Ee,De,Le.image[pe])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function le(U,E,k,Z,ae,ne){const Ce=o.convert(k.format,k.colorSpace),fe=o.convert(k.type),_e=S(k.internalFormat,Ce,fe,k.colorSpace),Ze=n.get(E),he=n.get(k);if(he.__renderTarget=E,!Ze.__hasExternalTextures){const ce=Math.max(1,E.width>>ne),ye=Math.max(1,E.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,_e,ce,ye,E.depth,0,Ce,fe,null):t.texImage2D(ae,ne,_e,ce,ye,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),$e(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ae,he.__webglTexture,0,Be(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ae,he.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const Z=E.depthTexture,ae=Z&&Z.isDepthTexture?Z.type:null,ne=x(E.stencilBuffer,ae),Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Be(E);$e(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ne,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const Z=E.textures;for(let ae=0;ae<Z.length;ae++){const ne=Z[ae],Ce=o.convert(ne.format,ne.colorSpace),fe=o.convert(ne.type),_e=S(ne.internalFormat,Ce,fe,ne.colorSpace),Ze=Be(E);k&&$e(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,_e,E.width,E.height):$e(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ae=Z.__webglTexture,ne=Be(E);if(E.depthTexture.format===qo)$e(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===rs)$e(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Fe(U){const E=n.get(U),k=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Z=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ae)};Z.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=Z}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,U)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),se(E.__webglDepthbuffer[Z],U,!1);else{const ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,U,!1);else{const Z=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(U,E,k){const Z=n.get(U);E!==void 0&&le(Z.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Fe(U)}function Ve(U){const E=U.texture,k=n.get(U),Z=n.get(E);U.addEventListener("dispose",A);const ae=U.textures,ne=U.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,s.memory.textures++),ne){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[fe][_e]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,_e=ae.length;fe<_e;fe++){const Ze=n.get(ae[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&$e(U)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){const _e=ae[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ze=o.convert(_e.format,_e.colorSpace),he=o.convert(_e.type),ce=S(_e.internalFormat,Ze,he,_e.colorSpace,U.isXRRenderTarget===!0),ye=Be(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ce,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),se(k.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(i.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)le(k.__webglFramebuffer[fe][_e],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else le(k.__webglFramebuffer[fe],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,_e=ae.length;fe<_e;fe++){const Ze=ae[fe],he=n.get(Ze);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),ge(i.TEXTURE_2D,Ze),le(k.__webglFramebuffer,U,Ze,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),_(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),ge(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)le(k.__webglFramebuffer[_e],U,E,i.COLOR_ATTACHMENT0,fe,_e);else le(k.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,fe,0);_(E)&&p(fe),t.unbindTexture()}U.depthBuffer&&Fe(U)}function Ge(U){const E=U.textures;for(let k=0,Z=E.length;k<Z;k++){const ae=E[k];if(_(ae)){const ne=b(U),Ce=n.get(ae).__webglTexture;t.bindTexture(ne,Ce),p(ne),t.unbindTexture()}}}const st=[],z=[];function He(U){if(U.samples>0){if($e(U)===!1){const E=U.textures,k=U.width,Z=U.height;let ae=i.COLOR_BUFFER_BIT;const ne=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),fe=E.length>1;if(fe)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Ze=n.get(E[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,ae,i.NEAREST),l===!0&&(st.length=0,z.length=0,st.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(st.push(ne),z.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const Ze=n.get(E[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Be(U){return Math.min(r.maxSamples,U.samples)}function $e(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(U){const E=s.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function qe(U,E){const k=U.colorSpace,Z=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||k!==ki&&k!==en&&(St.getTransfer(k)===Et?(Z!==dn||ae!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=$e}function Ry(i,e){function t(n,r=en){let o;const s=St.getTransfer(r);if(n===Ai)return i.UNSIGNED_BYTE;if(n===Ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===op)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ip)return i.BYTE;if(n===rp)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===Nu)return i.INT;if(n===fo)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===sp)return i.ALPHA;if(n===ap)return i.RGB;if(n===dn)return i.RGBA;if(n===lp)return i.LUMINANCE;if(n===cp)return i.LUMINANCE_ALPHA;if(n===qo)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===Bu)return i.RED;if(n===ku)return i.RED_INTEGER;if(n===up)return i.RG;if(n===Hu)return i.RG_INTEGER;if(n===Vu)return i.RGBA_INTEGER;if(n===Va||n===Ga||n===Wa||n===Xa)if(s===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Va)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Va)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===kc||n===Hc||n===Vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Bc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Wc||n===Xc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Gc||n===Wc)return s===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===ou)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===su||n===au)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===qa)return s===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hp||n===lu||n===cu||n===uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===qa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cy extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Py={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Py)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
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

}`;class Iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:Dy,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uy extends ss{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new Iy,_=t.getContextAttributes();let p=null,b=null;const S=[],x=[],P=new it;let R=null;const A=new Nn;A.viewport=new Ft;const C=new Nn;C.viewport=new Ft;const w=[A,C],M=new Cy;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=S[K];return oe===void 0&&(oe=new rc,S[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=S[K];return oe===void 0&&(oe=new rc,S[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=S[K];return oe===void 0&&(oe=new rc,S[K]=oe),oe.getHandSpace()};function O(K){const oe=x.indexOf(K.inputSource);if(oe===-1)return;const le=S[oe];le!==void 0&&(le.update(K.inputSource,K.frame,c||s),le.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let K=0;K<S.length;K++){const oe=x[K];oe!==null&&(x[K]=null,S[K].disconnect(oe))}L=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new lr(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,le=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?rs:qo,le=_.stencil?is:fo);const be={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new lr(f.textureWidth,f.textureHeight,{format:dn,type:Ai,depthTexture:new rl(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(K){for(let oe=0;oe<K.removed.length;oe++){const le=K.removed[oe],se=x.indexOf(le);se>=0&&(x[se]=null,S[se].disconnect(le))}for(let oe=0;oe<K.added.length;oe++){const le=K.added[oe];let se=x.indexOf(le);if(se===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=x.length){x.push(le),se=Fe;break}else if(x[Fe]===null){x[Fe]=le,se=Fe;break}if(se===-1)break}const be=S[se];be&&be.connect(le)}}const H=new q,X=new q;function B(K,oe,le){H.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const se=H.distanceTo(X),be=oe.projectionMatrix.elements,Fe=le.projectionMatrix.elements,Te=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],st=(be[9]-1)/be[5],z=(be[8]-1)/be[0],He=(Fe[8]+1)/Fe[0],Be=Te*z,$e=Te*He,ke=se/(-z+He),qe=ke*-z;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ze=Te+ke,U=Ve+ke,E=Be-qe,k=$e+(se-qe),Z=Ge*Ve/U*ze,ae=st*Ve/U*ze;K.projectionMatrix.makePerspective(E,k,Z,ae,ze,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,le=K.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),M.near=C.near=A.near=oe,M.far=C.far=A.far=le,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),A.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const se=K.parent,be=M.cameras;ue(M,se);for(let Fe=0;Fe<be.length;Fe++)ue(be[Fe],se);be.length===2?B(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Q(K,M,se)};function Q(K,oe,le){le===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$s*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let de=null;function ge(K,oe){if(u=oe.getViewerPose(c||s),v=oe,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;le.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Fe=0;Fe<le.length;Fe++){const Te=le[Fe];let Ve=null;if(m!==null)Ve=m.getViewport(Te);else{const st=d.getViewSubImage(f,Te);Ve=st.viewport,Fe===0&&(e.setRenderTargetTextures(b,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(b))}let Ge=w[Fe];Ge===void 0&&(Ge=new Nn,Ge.layers.enable(Fe),Ge.viewport=new Ft,w[Fe]=Ge),Ge.matrix.fromArray(Te.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Te.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Fe===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Ge)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Fe=d.getDepthInformation(le[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let le=0;le<S.length;le++){const se=x[le],be=S[le];se!==null&&be!==void 0&&be.update(se,oe,c||s)}de&&de(K,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Oe=new bp;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}}const Zr=new ni,Fy=new vt;function Ny(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,yp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,x)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Gn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Gn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(_.envMap.value=S,Zr.copy(x),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),_.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(Zr)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Oy(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=r[b.id];x===void 0&&(v(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",_));const P=S.program;n.updateUBOMapping(b,P);const R=e.render.frame;o[b.id]!==R&&(f(b),o[b.id]=R)}function u(b){const S=d();b.__bindingPointIndex=S;const x=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=r[b.id],x=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=x.length;R<A;R++){const C=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,M=C.length;w<M;w++){const L=C[w];if(m(L,R,w,P)===!0){const N=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let W=0;W<O.length;W++){const H=O[W],X=g(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+G,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,x,P){const R=b.value,A=S+"_"+x;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const C=P[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function v(b){const S=b.uniforms;let x=0;const P=16;for(let A=0,C=S.length;A<C;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,L=w.length;M<L;M++){const N=w[M],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=O.length;G<W;G++){const H=O[G],X=g(H),B=x%P,ue=B%X.boundary,Q=B+ue;x+=ue,Q!==0&&P-Q<X.storage&&(x+=P-Q),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const R=x%P;return R>0&&(x+=P-R),b.__size=x,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function _(b){const S=b.target;S.removeEventListener("dispose",_);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class _l{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let P=!1,R=0,A=0,C=null,w=-1,M=null;const L=new Ft,N=new Ft;let O=null;const G=new et(0);let W=0,H=t.width,X=t.height,B=1,ue=null,Q=null;const de=new Ft(0,0,H,X),ge=new Ft(0,0,H,X);let Oe=!1;const K=new wp;let oe=!1,le=!1;const se=new vt,be=new vt,Fe=new q,Te=new Ft,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function st(){return C===null?B:1}let z=n;function He(h,y){return t.getContext(h,y)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Le,!1),z===null){const y="webgl2";if(z=He(y,h),z===null)throw He(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Be,$e,ke,qe,ze,U,E,k,Z,ae,ne,Ce,fe,_e,Ze,he,ce,ye,Ee,De,Je,Ye,Qe,V;function te(){Be=new Gx(z),Be.init(),Ye=new Ry(z,Be),$e=new Ox(z,Be,e,Ye),ke=new Ty(z,Be),$e.reverseDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),qe=new qx(z),ze=new uy,U=new Ay(z,Be,ke,ze,$e,Ye,qe),E=new Bx(x),k=new Vx(x),Z=new Q_(z),Qe=new Fx(z,Z),ae=new Wx(z,Z,qe,Qe),ne=new $x(z,ae,Z,qe),Ee=new Yx(z,$e,U),he=new zx(ze),Ce=new cy(x,E,k,Be,$e,Qe,he),fe=new Ny(x,ze),_e=new fy,Ze=new vy(Be),ye=new Ux(x,E,k,ke,ne,m,l),ce=new wy(x,ne,$e),V=new Oy(z,qe,$e,ke),De=new Nx(z,Be,qe),Je=new Xx(z,Be,qe),qe.programs=Ce.programs,x.capabilities=$e,x.extensions=Be,x.properties=ze,x.renderLists=_e,x.shadowMap=ce,x.state=ke,x.info=qe}te();const ie=new Uy(x,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const h=Be.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Be.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(H,X,!1))},this.getSize=function(h){return h.set(H,X)},this.setSize=function(h,y,T=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=h,X=y,t.width=Math.floor(h*B),t.height=Math.floor(y*B),T===!0&&(t.style.width=h+"px",t.style.height=y+"px"),this.setViewport(0,0,h,y)},this.getDrawingBufferSize=function(h){return h.set(H*B,X*B).floor()},this.setDrawingBufferSize=function(h,y,T){H=h,X=y,B=T,t.width=Math.floor(h*T),t.height=Math.floor(y*T),this.setViewport(0,0,h,y)},this.getCurrentViewport=function(h){return h.copy(L)},this.getViewport=function(h){return h.copy(de)},this.setViewport=function(h,y,T,D){h.isVector4?de.set(h.x,h.y,h.z,h.w):de.set(h,y,T,D),ke.viewport(L.copy(de).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(ge)},this.setScissor=function(h,y,T,D){h.isVector4?ge.set(h.x,h.y,h.z,h.w):ge.set(h,y,T,D),ke.scissor(N.copy(ge).multiplyScalar(B).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(h){ke.setScissorTest(Oe=h)},this.setOpaqueSort=function(h){ue=h},this.setTransparentSort=function(h){Q=h},this.getClearColor=function(h){return h.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(h=!0,y=!0,T=!0){let D=0;if(h){let I=!1;if(C!==null){const F=C.texture.format;I=F===Vu||F===Hu||F===ku}if(I){const F=C.texture.type,Y=F===Ai||F===fo||F===ho||F===is||F===Ou||F===zu,j=ye.getClearColor(),$=ye.getClearAlpha(),ee=j.r,J=j.g,re=j.b;Y?(v[0]=ee,v[1]=J,v[2]=re,v[3]=$,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=ee,g[1]=J,g[2]=re,g[3]=$,z.clearBufferiv(z.COLOR,0,g))}else D|=z.COLOR_BUFFER_BIT}y&&(D|=z.DEPTH_BUFFER_BIT),T&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),_e.dispose(),Ze.dispose(),ze.dispose(),E.dispose(),k.dispose(),ne.dispose(),Qe.dispose(),V.dispose(),Ce.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Or),ie.removeEventListener("sessionend",zr),ii.stop()};function pe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const h=qe.autoReset,y=ce.enabled,T=ce.autoUpdate,D=ce.needsUpdate,I=ce.type;te(),qe.autoReset=h,ce.enabled=y,ce.autoUpdate=T,ce.needsUpdate=D,ce.type=I}function Le(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function rt(h){const y=h.target;y.removeEventListener("dispose",rt),At(y)}function At(h){It(h),ze.remove(h)}function It(h){const y=ze.get(h).programs;y!==void 0&&(y.forEach(function(T){Ce.releaseProgram(T)}),h.isShaderMaterial&&Ce.releaseShaderCache(h))}this.renderBufferDirect=function(h,y,T,D,I,F){y===null&&(y=Ve);const Y=I.isMesh&&I.matrixWorld.determinant()<0,j=hs(h,y,T,D,I);ke.setMaterial(D,Y);let $=T.index,ee=1;if(D.wireframe===!0){if($=ae.getWireframeAttribute(T),$===void 0)return;ee=2}const J=T.drawRange,re=T.attributes.position;let xe=J.start*ee,Se=(J.start+J.count)*ee;F!==null&&(xe=Math.max(xe,F.start*ee),Se=Math.min(Se,(F.start+F.count)*ee)),$!==null?(xe=Math.max(xe,0),Se=Math.min(Se,$.count)):re!=null&&(xe=Math.max(xe,0),Se=Math.min(Se,re.count));const Pe=Se-xe;if(Pe<0||Pe===1/0)return;Qe.setup(I,D,j,T,$);let Ae,Me=De;if($!==null&&(Ae=Z.get($),Me=Je,Me.setIndex(Ae)),I.isMesh)D.wireframe===!0?(ke.setLineWidth(D.wireframeLinewidth*st()),Me.setMode(z.LINES)):Me.setMode(z.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),ke.setLineWidth(ve*st()),I.isLineSegments?Me.setMode(z.LINES):I.isLineLoop?Me.setMode(z.LINE_LOOP):Me.setMode(z.LINE_STRIP)}else I.isPoints?Me.setMode(z.POINTS):I.isSprite&&Me.setMode(z.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Me.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Me.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,ot=I._multiDrawCounts,Ke=I._multiDrawCount,wt=$?Z.get($).bytesPerElement:1,pt=ze.get(D).currentProgram.getUniforms();for(let tt=0;tt<Ke;tt++)pt.setValue(z,"_gl_DrawID",tt),Me.render(ve[tt]/wt,ot[tt])}else if(I.isInstancedMesh)Me.renderInstances(xe,Pe,I.count);else if(T.isInstancedBufferGeometry){const ve=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,ot=Math.min(T.instanceCount,ve);Me.renderInstances(xe,Pe,ot)}else Me.render(xe,Pe)};function dt(h,y,T){h.transparent===!0&&h.side===wn&&h.forceSinglePass===!1?(h.side=Gn,h.needsUpdate=!0,Lt(h,y,T),h.side=Fr,h.needsUpdate=!0,Lt(h,y,T),h.side=wn):Lt(h,y,T)}this.compile=function(h,y,T=null){T===null&&(T=h),p=Ze.get(T),p.init(y),S.push(p),T.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==T&&h.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const F=I.material;if(F)if(Array.isArray(F))for(let Y=0;Y<F.length;Y++){const j=F[Y];dt(j,T,I),D.add(j)}else dt(F,T,I),D.add(F)}),S.pop(),p=null,D},this.compileAsync=function(h,y,T=null){const D=this.compile(h,y,T);return new Promise(I=>{function F(){if(D.forEach(function(Y){ze.get(Y).currentProgram.isReady()&&D.delete(Y)}),D.size===0){I(h);return}setTimeout(F,10)}Be.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let cn=null;function bt(h){cn&&cn(h)}function Or(){ii.stop()}function zr(){ii.start()}const ii=new bp;ii.setAnimationLoop(bt),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(h){cn=h,ie.setAnimationLoop(h),h===null?ii.stop():ii.start()},ie.addEventListener("sessionstart",Or),ie.addEventListener("sessionend",zr),this.render=function(h,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(y),y=ie.getCamera()),h.isScene===!0&&h.onBeforeRender(x,h,y,C),p=Ze.get(h,S.length),p.init(y),S.push(p),be.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),K.setFromProjectionMatrix(be),le=this.localClippingEnabled,oe=he.init(this.clippingPlanes,le),_=_e.get(h,b.length),_.init(),b.push(_),ie.enabled===!0&&ie.isPresenting===!0){const F=x.xr.getDepthSensingMesh();F!==null&&ri(F,y,-1/0,x.sortObjects)}ri(h,y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ue,Q),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&ye.addToRenderList(_,h),this.info.render.frame++,oe===!0&&he.beginShadows();const T=p.state.shadowsArray;ce.render(T,h,y),oe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,I=_.transmissive;if(p.setupLights(),y.isArrayCamera){const F=y.cameras;if(I.length>0)for(let Y=0,j=F.length;Y<j;Y++){const $=F[Y];Br(D,I,h,$)}Ge&&ye.render(h);for(let Y=0,j=F.length;Y<j;Y++){const $=F[Y];ur(_,h,$,$.viewport)}}else I.length>0&&Br(D,I,h,y),Ge&&ye.render(h),ur(_,h,y);C!==null&&(U.updateMultisampleRenderTarget(C),U.updateRenderTargetMipmap(C)),h.isScene===!0&&h.onAfterRender(x,h,y),Qe.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function ri(h,y,T,D){if(h.visible===!1)return;if(h.layers.test(y.layers)){if(h.isGroup)T=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(y);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||K.intersectsSprite(h)){D&&Te.setFromMatrixPosition(h.matrixWorld).applyMatrix4(be);const Y=ne.update(h),j=h.material;j.visible&&_.push(h,Y,j,T,Te.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||K.intersectsObject(h))){const Y=ne.update(h),j=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Te.copy(h.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Te.copy(Y.boundingSphere.center)),Te.applyMatrix4(h.matrixWorld).applyMatrix4(be)),Array.isArray(j)){const $=Y.groups;for(let ee=0,J=$.length;ee<J;ee++){const re=$[ee],xe=j[re.materialIndex];xe&&xe.visible&&_.push(h,Y,xe,T,Te.z,re)}}else j.visible&&_.push(h,Y,j,T,Te.z,null)}}const F=h.children;for(let Y=0,j=F.length;Y<j;Y++)ri(F[Y],y,T,D)}function ur(h,y,T,D){const I=h.opaque,F=h.transmissive,Y=h.transparent;p.setupLightsView(T),oe===!0&&he.setGlobalState(x.clippingPlanes,T),D&&ke.viewport(L.copy(D)),I.length>0&&Hi(I,y,T),F.length>0&&Hi(F,y,T),Y.length>0&&Hi(Y,y,T),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Br(h,y,T,D){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new lr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Oi:Ai,minFilter:bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const F=p.state.transmissionRenderTarget[D.id],Y=D.viewport||L;F.setSize(Y.z,Y.w);const j=x.getRenderTarget();x.setRenderTarget(F),x.getClearColor(G),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&ye.render(T);const $=x.toneMapping;x.toneMapping=zi;const ee=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),oe===!0&&he.setGlobalState(x.clippingPlanes,D),Hi(h,T,D),U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F),Be.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let re=0,xe=y.length;re<xe;re++){const Se=y[re],Pe=Se.object,Ae=Se.geometry,Me=Se.material,ve=Se.group;if(Me.side===wn&&Pe.layers.test(D.layers)){const ot=Me.side;Me.side=Gn,Me.needsUpdate=!0,hr(Pe,T,D,Ae,Me,ve),Me.side=ot,Me.needsUpdate=!0,J=!0}}J===!0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F))}x.setRenderTarget(j),x.setClearColor(G,W),ee!==void 0&&(D.viewport=ee),x.toneMapping=$}function Hi(h,y,T){const D=y.isScene===!0?y.overrideMaterial:null;for(let I=0,F=h.length;I<F;I++){const Y=h[I],j=Y.object,$=Y.geometry,ee=D===null?Y.material:D,J=Y.group;j.layers.test(T.layers)&&hr(j,y,T,$,ee,J)}}function hr(h,y,T,D,I,F){h.onBeforeRender(x,y,T,D,I,F),h.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(x,y,T,D,h,F),I.transparent===!0&&I.side===wn&&I.forceSinglePass===!1?(I.side=Gn,I.needsUpdate=!0,x.renderBufferDirect(T,y,D,I,h,F),I.side=Fr,I.needsUpdate=!0,x.renderBufferDirect(T,y,D,I,h,F),I.side=wn):x.renderBufferDirect(T,y,D,I,h,F),h.onAfterRender(x,y,T,D,I,F)}function Lt(h,y,T){y.isScene!==!0&&(y=Ve);const D=ze.get(h),I=p.state.lights,F=p.state.shadowsArray,Y=I.state.version,j=Ce.getParameters(h,I.state,F,y,T),$=Ce.getProgramCacheKey(j);let ee=D.programs;D.environment=h.isMeshStandardMaterial?y.environment:null,D.fog=y.fog,D.envMap=(h.isMeshStandardMaterial?k:E).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?y.environmentRotation:h.envMapRotation,ee===void 0&&(h.addEventListener("dispose",rt),ee=new Map,D.programs=ee);let J=ee.get($);if(J!==void 0){if(D.currentProgram===J&&D.lightsStateVersion===Y)return pi(h,j),J}else j.uniforms=Ce.getUniforms(h),h.onBeforeCompile(j,x),J=Ce.acquireProgram(j,$),ee.set($,J),D.uniforms=j.uniforms;const re=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(re.clippingPlanes=he.uniform),pi(h,j),D.needsLights=mi(h),D.lightsStateVersion=Y,D.needsLights&&(re.ambientLightColor.value=I.state.ambient,re.lightProbe.value=I.state.probe,re.directionalLights.value=I.state.directional,re.directionalLightShadows.value=I.state.directionalShadow,re.spotLights.value=I.state.spot,re.spotLightShadows.value=I.state.spotShadow,re.rectAreaLights.value=I.state.rectArea,re.ltc_1.value=I.state.rectAreaLTC1,re.ltc_2.value=I.state.rectAreaLTC2,re.pointLights.value=I.state.point,re.pointLightShadows.value=I.state.pointShadow,re.hemisphereLights.value=I.state.hemi,re.directionalShadowMap.value=I.state.directionalShadowMap,re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,re.spotShadowMap.value=I.state.spotShadowMap,re.spotLightMatrix.value=I.state.spotLightMatrix,re.spotLightMap.value=I.state.spotLightMap,re.pointShadowMap.value=I.state.pointShadowMap,re.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=J,D.uniformsList=null,J}function Vi(h){if(h.uniformsList===null){const y=h.currentProgram.getUniforms();h.uniformsList=Ya.seqWithValue(y.seq,h.uniforms)}return h.uniformsList}function pi(h,y){const T=ze.get(h);T.outputColorSpace=y.outputColorSpace,T.batching=y.batching,T.batchingColor=y.batchingColor,T.instancing=y.instancing,T.instancingColor=y.instancingColor,T.instancingMorph=y.instancingMorph,T.skinning=y.skinning,T.morphTargets=y.morphTargets,T.morphNormals=y.morphNormals,T.morphColors=y.morphColors,T.morphTargetsCount=y.morphTargetsCount,T.numClippingPlanes=y.numClippingPlanes,T.numIntersection=y.numClipIntersection,T.vertexAlphas=y.vertexAlphas,T.vertexTangents=y.vertexTangents,T.toneMapping=y.toneMapping}function hs(h,y,T,D,I){y.isScene!==!0&&(y=Ve),U.resetTextureUnits();const F=y.fog,Y=D.isMeshStandardMaterial?y.environment:null,j=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ki,$=(D.isMeshStandardMaterial?k:E).get(D.envMap||Y),ee=D.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,J=!!T.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),re=!!T.morphAttributes.position,xe=!!T.morphAttributes.normal,Se=!!T.morphAttributes.color;let Pe=zi;D.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=x.toneMapping);const Ae=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Me=Ae!==void 0?Ae.length:0,ve=ze.get(D),ot=p.state.lights;if(oe===!0&&(le===!0||h!==M)){const nt=h===M&&D.id===w;he.setState(D,h,nt)}let Ke=!1;D.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ot.state.version||ve.outputColorSpace!==j||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==$||D.fog===!0&&ve.fog!==F||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==he.numPlanes||ve.numIntersection!==he.numIntersection)||ve.vertexAlphas!==ee||ve.vertexTangents!==J||ve.morphTargets!==re||ve.morphNormals!==xe||ve.morphColors!==Se||ve.toneMapping!==Pe||ve.morphTargetsCount!==Me)&&(Ke=!0):(Ke=!0,ve.__version=D.version);let wt=ve.currentProgram;Ke===!0&&(wt=Lt(D,y,I));let pt=!1,tt=!1,Tt=!1;const at=wt.getUniforms(),Mt=ve.uniforms;if(ke.useProgram(wt.program)&&(pt=!0,tt=!0,Tt=!0),D.id!==w&&(w=D.id,tt=!0),pt||M!==h){ke.buffers.depth.getReversed()?(se.copy(h.projectionMatrix),b_(se),T_(se),at.setValue(z,"projectionMatrix",se)):at.setValue(z,"projectionMatrix",h.projectionMatrix),at.setValue(z,"viewMatrix",h.matrixWorldInverse);const mt=at.map.cameraPosition;mt!==void 0&&mt.setValue(z,Fe.setFromMatrixPosition(h.matrixWorld)),$e.logarithmicDepthBuffer&&at.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&at.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,tt=!0,Tt=!0)}if(I.isSkinnedMesh){at.setOptional(z,I,"bindMatrix"),at.setOptional(z,I,"bindMatrixInverse");const nt=I.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),at.setValue(z,"boneTexture",nt.boneTexture,U))}I.isBatchedMesh&&(at.setOptional(z,I,"batchingTexture"),at.setValue(z,"batchingTexture",I._matricesTexture,U),at.setOptional(z,I,"batchingIdTexture"),at.setValue(z,"batchingIdTexture",I._indirectTexture,U),at.setOptional(z,I,"batchingColorTexture"),I._colorsTexture!==null&&at.setValue(z,"batchingColorTexture",I._colorsTexture,U));const Ie=T.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&Ee.update(I,T,wt),(tt||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,at.setValue(z,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Mt.envMap.value=$,Mt.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&y.environment!==null&&(Mt.envMapIntensity.value=y.environmentIntensity),tt&&(at.setValue(z,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&oi(Mt,Tt),F&&D.fog===!0&&fe.refreshFogUniforms(Mt,F),fe.refreshMaterialUniforms(Mt,D,B,X,p.state.transmissionRenderTarget[h.id]),Ya.upload(z,Vi(ve),Mt,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ya.upload(z,Vi(ve),Mt,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&at.setValue(z,"center",I.center),at.setValue(z,"modelViewMatrix",I.modelViewMatrix),at.setValue(z,"normalMatrix",I.normalMatrix),at.setValue(z,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const nt=D.uniformsGroups;for(let mt=0,$t=nt.length;mt<$t;mt++){const Wt=nt[mt];V.update(Wt,wt),V.bind(Wt,wt)}}return wt}function oi(h,y){h.ambientLightColor.needsUpdate=y,h.lightProbe.needsUpdate=y,h.directionalLights.needsUpdate=y,h.directionalLightShadows.needsUpdate=y,h.pointLights.needsUpdate=y,h.pointLightShadows.needsUpdate=y,h.spotLights.needsUpdate=y,h.spotLightShadows.needsUpdate=y,h.rectAreaLights.needsUpdate=y,h.hemisphereLights.needsUpdate=y}function mi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(h,y,T){ze.get(h.texture).__webglTexture=y,ze.get(h.depthTexture).__webglTexture=T;const D=ze.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=T===void 0,D.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,y){const T=ze.get(h);T.__webglFramebuffer=y,T.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(h,y=0,T=0){C=h,R=y,A=T;let D=!0,I=null,F=!1,Y=!1;if(h){const $=ze.get(h);if($.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(z.FRAMEBUFFER,null),D=!1;else if($.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if($.__hasExternalTextures)U.rebindTextures(h,ze.get(h.texture).__webglTexture,ze.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const re=h.depthTexture;if($.__boundDepthTexture!==re){if(re!==null&&ze.has(re)&&(h.width!==re.image.width||h.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const ee=h.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Y=!0);const J=ze.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(J[y])?I=J[y][T]:I=J[y],F=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=ze.get(h).__webglMultisampledFramebuffer:Array.isArray(J)?I=J[T]:I=J,L.copy(h.viewport),N.copy(h.scissor),O=h.scissorTest}else L.copy(de).multiplyScalar(B).floor(),N.copy(ge).multiplyScalar(B).floor(),O=Oe;if(ke.bindFramebuffer(z.FRAMEBUFFER,I)&&D&&ke.drawBuffers(h,I),ke.viewport(L),ke.scissor(N),ke.setScissorTest(O),F){const $=ze.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+y,$.__webglTexture,T)}else if(Y){const $=ze.get(h.texture),ee=y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.__webglTexture,T||0,ee)}w=-1},this.readRenderTargetPixels=function(h,y,T,D,I,F,Y){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(j=j[Y]),j){ke.bindFramebuffer(z.FRAMEBUFFER,j);try{const $=h.texture,ee=$.format,J=$.type;if(!$e.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=h.width-D&&T>=0&&T<=h.height-I&&z.readPixels(y,T,D,I,Ye.convert(ee),Ye.convert(J),F)}finally{const $=C!==null?ze.get(C).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(h,y,T,D,I,F,Y){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(j=j[Y]),j){const $=h.texture,ee=$.format,J=$.type;if(!$e.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=h.width-D&&T>=0&&T<=h.height-I){ke.bindFramebuffer(z.FRAMEBUFFER,j);const re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.bufferData(z.PIXEL_PACK_BUFFER,F.byteLength,z.STREAM_READ),z.readPixels(y,T,D,I,Ye.convert(ee),Ye.convert(J),0);const xe=C!==null?ze.get(C).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,xe);const Se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await w_(z,Se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,F),z.deleteBuffer(re),z.deleteSync(Se),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,y=null,T=0){h.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-T),I=Math.floor(h.image.width*D),F=Math.floor(h.image.height*D),Y=y!==null?y.x:0,j=y!==null?y.y:0;U.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,T,0,0,Y,j,I,F),ke.unbindTexture()},this.copyTextureToTexture=function(h,y,T=null,D=null,I=0){h.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],y=arguments[2],I=arguments[3]||0,T=null);let F,Y,j,$,ee,J,re,xe,Se;const Pe=h.isCompressedTexture?h.mipmaps[I]:h.image;T!==null?(F=T.max.x-T.min.x,Y=T.max.y-T.min.y,j=T.isBox3?T.max.z-T.min.z:1,$=T.min.x,ee=T.min.y,J=T.isBox3?T.min.z:0):(F=Pe.width,Y=Pe.height,j=Pe.depth||1,$=0,ee=0,J=0),D!==null?(re=D.x,xe=D.y,Se=D.z):(re=0,xe=0,Se=0);const Ae=Ye.convert(y.format),Me=Ye.convert(y.type);let ve;y.isData3DTexture?(U.setTexture3D(y,0),ve=z.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(U.setTexture2DArray(y,0),ve=z.TEXTURE_2D_ARRAY):(U.setTexture2D(y,0),ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,y.unpackAlignment);const ot=z.getParameter(z.UNPACK_ROW_LENGTH),Ke=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wt=z.getParameter(z.UNPACK_SKIP_PIXELS),pt=z.getParameter(z.UNPACK_SKIP_ROWS),tt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,J);const Tt=h.isDataArrayTexture||h.isData3DTexture,at=y.isDataArrayTexture||y.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const Mt=ze.get(h),Ie=ze.get(y),nt=ze.get(Mt.__renderTarget),mt=ze.get(Ie.__renderTarget);ke.bindFramebuffer(z.READ_FRAMEBUFFER,nt.__webglFramebuffer),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let $t=0;$t<j;$t++)Tt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(h).__webglTexture,I,J+$t),h.isDepthTexture?(at&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(y).__webglTexture,I,Se+$t),z.blitFramebuffer($,ee,F,Y,re,xe,F,Y,z.DEPTH_BUFFER_BIT,z.NEAREST)):at?z.copyTexSubImage3D(ve,I,re,xe,Se+$t,$,ee,F,Y):z.copyTexSubImage2D(ve,I,re,xe,Se+$t,$,ee,F,Y);ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else at?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(ve,I,re,xe,Se,F,Y,j,Ae,Me,Pe.data):y.isCompressedArrayTexture?z.compressedTexSubImage3D(ve,I,re,xe,Se,F,Y,j,Ae,Pe.data):z.texSubImage3D(ve,I,re,xe,Se,F,Y,j,Ae,Me,Pe):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,re,xe,F,Y,Ae,Me,Pe.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,re,xe,Pe.width,Pe.height,Ae,Pe.data):z.texSubImage2D(z.TEXTURE_2D,I,re,xe,F,Y,Ae,Me,Pe);z.pixelStorei(z.UNPACK_ROW_LENGTH,ot),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ke),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,tt),I===0&&y.generateMipmaps&&z.generateMipmap(ve),ke.unbindTexture()},this.copyTextureToTexture3D=function(h,y,T=null,D=null,I=0){return h.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,D=arguments[1]||null,h=arguments[2],y=arguments[3],I=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,y,T,D,I)},this.initRenderTarget=function(h){ze.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),ke.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,ke.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class us extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gl extends mn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=tn,u=tn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class zy extends mn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ol={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class By{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const ky=new By;class Js{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class Hy extends Error{constructor(e,t){super(e),this.response=t}}class Vy extends Js{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ol.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:r});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ki[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let R=0,A=u.length;R<A;R++){const C=u[R];C.onProgress&&C.onProgress(P)}p.enqueue(x),b()}},S=>{p.error(S)})}}});return new Response(_)}else throw new Hy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{ol.add(e,c);const u=Ki[e];delete Ki[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gy extends Js{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ol.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Zs("img");function l(){u(),ol.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Wy extends Js{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new gl,a=new Vy(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Un,s.wrapT=c.wrapT!==void 0?c.wrapT:Un,s.magFilter=c.magFilter!==void 0?c.magFilter:gt,s.minFilter=c.minFilter!==void 0?c.minFilter:gt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=bi),c.mipmapCount===1&&(s.minFilter=gt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class Mr extends Js{constructor(e){super(e)}load(e,t,n,r){const o=new mn,s=new Gy(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class io extends cr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ui=Uint8Array,zo=Uint16Array,Xy=Int32Array,Cp=new ui([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pp=new ui([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qy=new ui([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Dp=function(i,e){for(var t=new zo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Xy(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Lp=Dp(Cp,2),Ip=Lp.b,Yy=Lp.r;Ip[28]=258,Yy[258]=28;var $y=Dp(Pp,0),Zy=$y.b,fu=new zo(32768);for(var Nt=0;Nt<32768;++Nt){var Sr=(Nt&43690)>>1|(Nt&21845)<<1;Sr=(Sr&52428)>>2|(Sr&13107)<<2,Sr=(Sr&61680)>>4|(Sr&3855)<<4,fu[Nt]=((Sr&65280)>>8|(Sr&255)<<8)>>1}var Fs=(function(i,e,t){for(var n=i.length,r=0,o=new zo(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new zo(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new zo(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[fu[d]>>l]=c}else for(a=new zo(n),r=0;r<n;++r)i[r]&&(a[r]=fu[s[i[r]-1]++]>>15-i[r]);return a}),Qs=new ui(288);for(var Nt=0;Nt<144;++Nt)Qs[Nt]=8;for(var Nt=144;Nt<256;++Nt)Qs[Nt]=9;for(var Nt=256;Nt<280;++Nt)Qs[Nt]=7;for(var Nt=280;Nt<288;++Nt)Qs[Nt]=8;var Up=new ui(32);for(var Nt=0;Nt<32;++Nt)Up[Nt]=5;var Ky=Fs(Qs,9,1),jy=Fs(Up,5,1),oc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},yi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},sc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Jy=function(i){return(i+7)/8|0},Qy=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new ui(i.subarray(e,t))},eS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mi=function(i,e,t){var n=new Error(e||eS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Mi),!t)throw n;return n},tS=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new ui(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new ui(r*3));var c=function(Ve){var Ge=t.length;if(Ve>Ge){var st=new ui(Math.max(Ge*2,Ve));st.set(t),t=st}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=yi(i,d,1);var b=yi(i,d+1,3);if(d+=3,b)if(b==1)m=Ky,v=jy,g=9,_=5;else if(b==2){var R=yi(i,d,31)+257,A=yi(i,d+10,15)+4,C=R+yi(i,d+5,31)+1;d+=14;for(var w=new ui(C),M=new ui(19),L=0;L<A;++L)M[qy[L]]=yi(i,d+L*3,7);d+=A*3;for(var N=oc(M),O=(1<<N)-1,G=Fs(M,N,1),L=0;L<C;){var W=G[yi(i,d,O)];d+=W&15;var S=W>>4;if(S<16)w[L++]=S;else{var H=0,X=0;for(S==16?(X=3+yi(i,d,3),d+=2,H=w[L-1]):S==17?(X=3+yi(i,d,7),d+=3):S==18&&(X=11+yi(i,d,127),d+=7);X--;)w[L++]=H}}var B=w.subarray(0,R),ue=w.subarray(R);g=oc(B),_=oc(ue),m=Fs(B,g,1),v=Fs(ue,_,1)}else Mi(1);else{var S=Jy(d)+4,x=i[S-4]|i[S-3]<<8,P=S+x;if(P>r){l&&Mi(0);break}a&&c(f+x),t.set(i.subarray(S,P),f),e.b=f+=x,e.p=d=P*8,e.f=u;continue}if(d>p){l&&Mi(0);break}}a&&c(f+131072);for(var Q=(1<<g)-1,de=(1<<_)-1,ge=d;;ge=d){var H=m[sc(i,d)&Q],Oe=H>>4;if(d+=H&15,d>p){l&&Mi(0);break}if(H||Mi(2),Oe<256)t[f++]=Oe;else if(Oe==256){ge=d,m=null;break}else{var K=Oe-254;if(Oe>264){var L=Oe-257,oe=Cp[L];K=yi(i,d,(1<<oe)-1)+Ip[L],d+=oe}var le=v[sc(i,d)&de],se=le>>4;le||Mi(3),d+=le&15;var ue=Zy[se];if(se>3){var oe=Pp[se];ue+=sc(i,d)&(1<<oe)-1,d+=oe}if(d>p){l&&Mi(0);break}a&&c(f+131072);var be=f+K;if(f<ue){var Fe=o-ue,Te=Math.min(ue,be);for(Fe+f<0&&Mi(3);f<Te;++f)t[f]=n[Fe+f]}for(;f<be;++f)t[f]=t[f-ue]}}e.l=m,e.p=ge,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?Qy(t,0,f):t.subarray(0,f)},nS=new ui(0),iS=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Mi(6,"invalid zlib data"),(i[1]>>5&1)==1&&Mi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ca(i,e){return tS(i.subarray(iS(i),-4),{i:2},e,e)}var rS=typeof TextDecoder<"u"&&new TextDecoder,oS=0;try{rS.decode(nS,{stream:!0}),oS=1}catch{}class sS extends Wy{constructor(e){super(e),this.type=Oi}parse(e){const w=Math.pow(2.7182818,2.2);function M(h,y){let T=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(y[T++]=I);const D=T-1;for(;T<65536;)y[T++]=0;return D}function L(h){for(let y=0;y<16384;y++)h[y]={},h[y].len=0,h[y].lit=0,h[y].p=null}const N={l:0,c:0,lc:0};function O(h,y,T,D,I){for(;T<h;)y=y<<8|De(D,I),T+=8;T-=h,N.l=y>>T&(1<<h)-1,N.c=y,N.lc=T}const G=new Array(59);function W(h){for(let T=0;T<=58;++T)G[T]=0;for(let T=0;T<65537;++T)G[h[T]]+=1;let y=0;for(let T=58;T>0;--T){const D=y+G[T]>>1;G[T]=y,y=D}for(let T=0;T<65537;++T){const D=h[T];D>0&&(h[T]=D|G[D]++<<6)}}function H(h,y,T,D,I,F){const Y=y;let j=0,$=0;for(;D<=I;D++){if(Y.value-y.value>T)return!1;O(6,j,$,h,Y);const ee=N.l;if(j=N.c,$=N.lc,F[D]=ee,ee==63){if(Y.value-y.value>T)throw new Error("Something wrong with hufUnpackEncTable");O(8,j,$,h,Y);let J=N.l+6;if(j=N.c,$=N.lc,D+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)F[D++]=0;D--}else if(ee>=59){let J=ee-59+2;if(D+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)F[D++]=0;D--}}W(F)}function X(h){return h&63}function B(h){return h>>6}function ue(h,y,T,D){for(;y<=T;y++){const I=B(h[y]),F=X(h[y]);if(I>>F)throw new Error("Invalid table entry");if(F>14){const Y=D[I>>F-14];if(Y.len)throw new Error("Invalid table entry");if(Y.lit++,Y.p){const j=Y.p;Y.p=new Array(Y.lit);for(let $=0;$<Y.lit-1;++$)Y.p[$]=j[$]}else Y.p=new Array(1);Y.p[Y.lit-1]=y}else if(F){let Y=0;for(let j=1<<14-F;j>0;j--){const $=D[(I<<14-F)+Y];if($.len||$.p)throw new Error("Invalid table entry");$.len=F,$.lit=y,Y++}}}return!0}const Q={c:0,lc:0};function de(h,y,T,D){h=h<<8|De(T,D),y+=8,Q.c=h,Q.lc=y}const ge={c:0,lc:0};function Oe(h,y,T,D,I,F,Y,j,$){if(h==y){D<8&&(de(T,D,I,F),T=Q.c,D=Q.lc),D-=8;let ee=T>>D;if(ee=new Uint8Array([ee])[0],j.value+ee>$)return!1;const J=Y[j.value-1];for(;ee-- >0;)Y[j.value++]=J}else if(j.value<$)Y[j.value++]=h;else return!1;ge.c=T,ge.lc=D}function K(h){return h&65535}function oe(h){const y=K(h);return y>32767?y-65536:y}const le={a:0,b:0};function se(h,y){const T=oe(h),I=oe(y),F=T+(I&1)+(I>>1),Y=F,j=F-I;le.a=Y,le.b=j}function be(h,y){const T=K(h),D=K(y),I=T-(D>>1)&65535,F=D+I-32768&65535;le.a=F,le.b=I}function Fe(h,y,T,D,I,F,Y){const j=Y<16384,$=T>I?I:T;let ee=1,J,re;for(;ee<=$;)ee<<=1;for(ee>>=1,J=ee,ee>>=1;ee>=1;){re=0;const xe=re+F*(I-J),Se=F*ee,Pe=F*J,Ae=D*ee,Me=D*J;let ve,ot,Ke,wt;for(;re<=xe;re+=Pe){let pt=re;const tt=re+D*(T-J);for(;pt<=tt;pt+=Me){const Tt=pt+Ae,at=pt+Se,Mt=at+Ae;j?(se(h[pt+y],h[at+y]),ve=le.a,Ke=le.b,se(h[Tt+y],h[Mt+y]),ot=le.a,wt=le.b,se(ve,ot),h[pt+y]=le.a,h[Tt+y]=le.b,se(Ke,wt),h[at+y]=le.a,h[Mt+y]=le.b):(be(h[pt+y],h[at+y]),ve=le.a,Ke=le.b,be(h[Tt+y],h[Mt+y]),ot=le.a,wt=le.b,be(ve,ot),h[pt+y]=le.a,h[Tt+y]=le.b,be(Ke,wt),h[at+y]=le.a,h[Mt+y]=le.b)}if(T&ee){const Tt=pt+Se;j?se(h[pt+y],h[Tt+y]):be(h[pt+y],h[Tt+y]),ve=le.a,h[Tt+y]=le.b,h[pt+y]=ve}}if(I&ee){let pt=re;const tt=re+D*(T-J);for(;pt<=tt;pt+=Me){const Tt=pt+Ae;j?se(h[pt+y],h[Tt+y]):be(h[pt+y],h[Tt+y]),ve=le.a,h[Tt+y]=le.b,h[pt+y]=ve}}J=ee,ee>>=1}return re}function Te(h,y,T,D,I,F,Y,j,$){let ee=0,J=0;const re=Y,xe=Math.trunc(D.value+(I+7)/8);for(;D.value<xe;)for(de(ee,J,T,D),ee=Q.c,J=Q.lc;J>=14;){const Pe=ee>>J-14&16383,Ae=y[Pe];if(Ae.len)J-=Ae.len,Oe(Ae.lit,F,ee,J,T,D,j,$,re),ee=ge.c,J=ge.lc;else{if(!Ae.p)throw new Error("hufDecode issues");let Me;for(Me=0;Me<Ae.lit;Me++){const ve=X(h[Ae.p[Me]]);for(;J<ve&&D.value<xe;)de(ee,J,T,D),ee=Q.c,J=Q.lc;if(J>=ve&&B(h[Ae.p[Me]])==(ee>>J-ve&(1<<ve)-1)){J-=ve,Oe(Ae.p[Me],F,ee,J,T,D,j,$,re),ee=ge.c,J=ge.lc;break}}if(Me==Ae.lit)throw new Error("hufDecode issues")}}const Se=8-I&7;for(ee>>=Se,J-=Se;J>0;){const Pe=y[ee<<14-J&16383];if(Pe.len)J-=Pe.len,Oe(Pe.lit,F,ee,J,T,D,j,$,re),ee=ge.c,J=ge.lc;else throw new Error("hufDecode issues")}return!0}function Ve(h,y,T,D,I,F){const Y={value:0},j=T.value,$=Ee(y,T),ee=Ee(y,T);T.value+=4;const J=Ee(y,T);if(T.value+=4,$<0||$>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const re=new Array(65537),xe=new Array(16384);L(xe);const Se=D-(T.value-j);if(H(h,T,Se,$,ee,re),J>8*(D-(T.value-j)))throw new Error("Something wrong with hufUncompress");ue(re,$,ee,xe),Te(re,xe,h,T,J,ee,F,I,Y)}function Ge(h,y,T){for(let D=0;D<T;++D)y[D]=h[y[D]]}function st(h){for(let y=1;y<h.length;y++){const T=h[y-1]+h[y]-128;h[y]=T}}function z(h,y){let T=0,D=Math.floor((h.length+1)/2),I=0;const F=h.length-1;for(;!(I>F||(y[I++]=h[T++],I>F));)y[I++]=h[D++]}function He(h){let y=h.byteLength;const T=new Array;let D=0;const I=new DataView(h);for(;y>0;){const F=I.getInt8(D++);if(F<0){const Y=-F;y-=Y+1;for(let j=0;j<Y;j++)T.push(I.getUint8(D++))}else{const Y=F;y-=2;const j=I.getUint8(D++);for(let $=0;$<Y+1;$++)T.push(j)}}return T}function Be(h,y,T,D,I,F){let Y=new DataView(F.buffer);const j=T[h.idx[0]].width,$=T[h.idx[0]].height,ee=3,J=Math.floor(j/8),re=Math.ceil(j/8),xe=Math.ceil($/8),Se=j-(re-1)*8,Pe=$-(xe-1)*8,Ae={value:0},Me=new Array(ee),ve=new Array(ee),ot=new Array(ee),Ke=new Array(ee),wt=new Array(ee);for(let tt=0;tt<ee;++tt)wt[tt]=y[h.idx[tt]],Me[tt]=tt<1?0:Me[tt-1]+re*xe,ve[tt]=new Float32Array(64),ot[tt]=new Uint16Array(64),Ke[tt]=new Uint16Array(re*64);for(let tt=0;tt<xe;++tt){let Tt=8;tt==xe-1&&(Tt=Pe);let at=8;for(let Ie=0;Ie<re;++Ie){Ie==re-1&&(at=Se);for(let nt=0;nt<ee;++nt)ot[nt].fill(0),ot[nt][0]=I[Me[nt]++],$e(Ae,D,ot[nt]),ke(ot[nt],ve[nt]),qe(ve[nt]);ze(ve);for(let nt=0;nt<ee;++nt)U(ve[nt],Ke[nt],Ie*64)}let Mt=0;for(let Ie=0;Ie<ee;++Ie){const nt=T[h.idx[Ie]].type;for(let mt=8*tt;mt<8*tt+Tt;++mt){Mt=wt[Ie][mt];for(let $t=0;$t<J;++$t){const Wt=$t*64+(mt&7)*8;Y.setUint16(Mt+0*nt,Ke[Ie][Wt+0],!0),Y.setUint16(Mt+2*nt,Ke[Ie][Wt+1],!0),Y.setUint16(Mt+4*nt,Ke[Ie][Wt+2],!0),Y.setUint16(Mt+6*nt,Ke[Ie][Wt+3],!0),Y.setUint16(Mt+8*nt,Ke[Ie][Wt+4],!0),Y.setUint16(Mt+10*nt,Ke[Ie][Wt+5],!0),Y.setUint16(Mt+12*nt,Ke[Ie][Wt+6],!0),Y.setUint16(Mt+14*nt,Ke[Ie][Wt+7],!0),Mt+=16*nt}}if(J!=re)for(let mt=8*tt;mt<8*tt+Tt;++mt){const $t=wt[Ie][mt]+8*J*2*nt,Wt=J*64+(mt&7)*8;for(let xt=0;xt<at;++xt)Y.setUint16($t+xt*2*nt,Ke[Ie][Wt+xt],!0)}}}const pt=new Uint16Array(j);Y=new DataView(F.buffer);for(let tt=0;tt<ee;++tt){T[h.idx[tt]].decoded=!0;const Tt=T[h.idx[tt]].type;if(T[tt].type==2)for(let at=0;at<$;++at){const Mt=wt[tt][at];for(let Ie=0;Ie<j;++Ie)pt[Ie]=Y.getUint16(Mt+Ie*2*Tt,!0);for(let Ie=0;Ie<j;++Ie)Y.setFloat32(Mt+Ie*2*Tt,te(pt[Ie]),!0)}}}function $e(h,y,T){let D,I=1;for(;I<64;)D=y[h.value],D==65280?I=64:D>>8==255?I+=D&255:(T[I]=D,I++),h.value++}function ke(h,y){y[0]=te(h[0]),y[1]=te(h[1]),y[2]=te(h[5]),y[3]=te(h[6]),y[4]=te(h[14]),y[5]=te(h[15]),y[6]=te(h[27]),y[7]=te(h[28]),y[8]=te(h[2]),y[9]=te(h[4]),y[10]=te(h[7]),y[11]=te(h[13]),y[12]=te(h[16]),y[13]=te(h[26]),y[14]=te(h[29]),y[15]=te(h[42]),y[16]=te(h[3]),y[17]=te(h[8]),y[18]=te(h[12]),y[19]=te(h[17]),y[20]=te(h[25]),y[21]=te(h[30]),y[22]=te(h[41]),y[23]=te(h[43]),y[24]=te(h[9]),y[25]=te(h[11]),y[26]=te(h[18]),y[27]=te(h[24]),y[28]=te(h[31]),y[29]=te(h[40]),y[30]=te(h[44]),y[31]=te(h[53]),y[32]=te(h[10]),y[33]=te(h[19]),y[34]=te(h[23]),y[35]=te(h[32]),y[36]=te(h[39]),y[37]=te(h[45]),y[38]=te(h[52]),y[39]=te(h[54]),y[40]=te(h[20]),y[41]=te(h[22]),y[42]=te(h[33]),y[43]=te(h[38]),y[44]=te(h[46]),y[45]=te(h[51]),y[46]=te(h[55]),y[47]=te(h[60]),y[48]=te(h[21]),y[49]=te(h[34]),y[50]=te(h[37]),y[51]=te(h[47]),y[52]=te(h[50]),y[53]=te(h[56]),y[54]=te(h[59]),y[55]=te(h[61]),y[56]=te(h[35]),y[57]=te(h[36]),y[58]=te(h[48]),y[59]=te(h[49]),y[60]=te(h[57]),y[61]=te(h[58]),y[62]=te(h[62]),y[63]=te(h[63])}function qe(h){const y=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),Y=.5*Math.cos(3*3.14159/8),j=.5*Math.cos(7*3.14159/16),$=new Array(4),ee=new Array(4),J=new Array(4),re=new Array(4);for(let xe=0;xe<8;++xe){const Se=xe*8;$[0]=D*h[Se+2],$[1]=Y*h[Se+2],$[2]=D*h[Se+6],$[3]=Y*h[Se+6],ee[0]=T*h[Se+1]+I*h[Se+3]+F*h[Se+5]+j*h[Se+7],ee[1]=I*h[Se+1]-j*h[Se+3]-T*h[Se+5]-F*h[Se+7],ee[2]=F*h[Se+1]-T*h[Se+3]+j*h[Se+5]+I*h[Se+7],ee[3]=j*h[Se+1]-F*h[Se+3]+I*h[Se+5]-T*h[Se+7],J[0]=y*(h[Se+0]+h[Se+4]),J[3]=y*(h[Se+0]-h[Se+4]),J[1]=$[0]+$[3],J[2]=$[1]-$[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[Se+0]=re[0]+ee[0],h[Se+1]=re[1]+ee[1],h[Se+2]=re[2]+ee[2],h[Se+3]=re[3]+ee[3],h[Se+4]=re[3]-ee[3],h[Se+5]=re[2]-ee[2],h[Se+6]=re[1]-ee[1],h[Se+7]=re[0]-ee[0]}for(let xe=0;xe<8;++xe)$[0]=D*h[16+xe],$[1]=Y*h[16+xe],$[2]=D*h[48+xe],$[3]=Y*h[48+xe],ee[0]=T*h[8+xe]+I*h[24+xe]+F*h[40+xe]+j*h[56+xe],ee[1]=I*h[8+xe]-j*h[24+xe]-T*h[40+xe]-F*h[56+xe],ee[2]=F*h[8+xe]-T*h[24+xe]+j*h[40+xe]+I*h[56+xe],ee[3]=j*h[8+xe]-F*h[24+xe]+I*h[40+xe]-T*h[56+xe],J[0]=y*(h[xe]+h[32+xe]),J[3]=y*(h[xe]-h[32+xe]),J[1]=$[0]+$[3],J[2]=$[1]-$[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[0+xe]=re[0]+ee[0],h[8+xe]=re[1]+ee[1],h[16+xe]=re[2]+ee[2],h[24+xe]=re[3]+ee[3],h[32+xe]=re[3]-ee[3],h[40+xe]=re[2]-ee[2],h[48+xe]=re[1]-ee[1],h[56+xe]=re[0]-ee[0]}function ze(h){for(let y=0;y<64;++y){const T=h[0][y],D=h[1][y],I=h[2][y];h[0][y]=T+1.5747*I,h[1][y]=T-.1873*D-.4682*I,h[2][y]=T+1.8556*D}}function U(h,y,T){for(let D=0;D<64;++D)y[T+D]=jh.toHalfFloat(E(h[D]))}function E(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function k(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Z(h){const y=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),T=new Uint8Array(He(y)),D=new Uint8Array(T.length);return st(T),z(T,D),new DataView(D.buffer)}function ae(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ca(y),D=new Uint8Array(T.length);return st(T),z(T,D),new DataView(D.buffer)}function ne(h){const y=h.viewer,T={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let F=0;const Y=new Array(h.inputChannels.length);for(let Pe=0,Ae=h.inputChannels.length;Pe<Ae;Pe++)Y[Pe]={},Y[Pe].start=F,Y[Pe].end=Y[Pe].start,Y[Pe].nx=h.columns,Y[Pe].ny=h.lines,Y[Pe].size=h.type,F+=Y[Pe].nx*Y[Pe].ny*Y[Pe].size;const j=ie(y,T),$=ie(y,T);if($>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(j<=$)for(let Pe=0;Pe<$-j+1;Pe++)I[Pe+j]=Je(y,T);const ee=new Uint16Array(65536),J=M(I,ee),re=Ee(y,T);Ve(h.array,y,T,re,D,F);for(let Pe=0;Pe<h.inputChannels.length;++Pe){const Ae=Y[Pe];for(let Me=0;Me<Y[Pe].size;++Me)Fe(D,Ae.start+Me,Ae.nx,Ae.size,Ae.ny,Ae.nx*Ae.size,J)}Ge(ee,D,F);let xe=0;const Se=new Uint8Array(D.buffer.byteLength);for(let Pe=0;Pe<h.lines;Pe++)for(let Ae=0;Ae<h.inputChannels.length;Ae++){const Me=Y[Ae],ve=Me.nx*Me.size,ot=new Uint8Array(D.buffer,Me.end*2,ve*2);Se.set(ot,xe),xe+=ve*2,Me.end+=ve}return new DataView(Se.buffer)}function Ce(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),T=Ca(y),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(D),F=new DataView(I);let Y=0,j=0;const $=new Array(4);for(let ee=0;ee<h.lines;ee++)for(let J=0;J<h.inputChannels.length;J++){let re=0;switch(h.inputChannels[J].pixelType){case 1:$[0]=Y,$[1]=$[0]+h.columns,Y=$[1]+h.columns;for(let Se=0;Se<h.columns;++Se){const Pe=T[$[0]++]<<8|T[$[1]++];re+=Pe,F.setUint16(j,re,!0),j+=2}break;case 2:$[0]=Y,$[1]=$[0]+h.columns,$[2]=$[1]+h.columns,Y=$[2]+h.columns;for(let Se=0;Se<h.columns;++Se){const Pe=T[$[0]++]<<24|T[$[1]++]<<16|T[$[2]++]<<8;re+=Pe,F.setUint32(j,re,!0),j+=4}break}}return F}function fe(h){const y=h.viewer,T={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Ye(y,T),unknownUncompressedSize:Ye(y,T),unknownCompressedSize:Ye(y,T),acCompressedSize:Ye(y,T),dcCompressedSize:Ye(y,T),rleCompressedSize:Ye(y,T),rleUncompressedSize:Ye(y,T),rleRawSize:Ye(y,T),totalAcUncompressedCount:Ye(y,T),totalDcUncompressedCount:Ye(y,T),acCompression:Ye(y,T)};if(I.version<2)throw new Error("EXRLoader.parse: "+oi.compression+" version "+I.version+" is unsupported");const F=new Array;let Y=ie(y,T)-2;for(;Y>0;){const Ae=_e(y.buffer,T),Me=Je(y,T),ve=Me>>2&3,ot=(Me>>4)-1,Ke=new Int8Array([ot])[0],wt=Je(y,T);F.push({name:Ae,index:Ke,type:wt,compression:ve}),Y-=Ae.length+3}const j=oi.channels,$=new Array(h.inputChannels.length);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=$[Ae]={},ve=j[Ae];Me.name=ve.name,Me.compression=0,Me.decoded=!1,Me.type=ve.pixelType,Me.pLinear=ve.pLinear,Me.width=h.columns,Me.height=h.lines}const ee={idx:new Array(3)};for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=$[Ae];for(let ve=0;ve<F.length;++ve){const ot=F[ve];Me.name==ot.name&&(Me.compression=ot.compression,ot.index>=0&&(ee.idx[ot.index]=Ae),Me.offset=Ae)}}let J,re,xe;if(I.acCompressedSize>0)switch(I.acCompression){case 0:J=new Uint16Array(I.totalAcUncompressedCount),Ve(h.array,y,T,I.acCompressedSize,J,I.totalAcUncompressedCount);break;case 1:const Ae=h.array.slice(T.value,T.value+I.totalAcUncompressedCount),Me=Ca(Ae);J=new Uint16Array(Me.buffer),T.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Ae={array:h.array,offset:T,size:I.dcCompressedSize};re=new Uint16Array(ae(Ae).buffer),T.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Ae=h.array.slice(T.value,T.value+I.rleCompressedSize),Me=Ca(Ae);xe=He(Me.buffer),T.value+=I.rleCompressedSize}let Se=0;const Pe=new Array($.length);for(let Ae=0;Ae<Pe.length;++Ae)Pe[Ae]=new Array;for(let Ae=0;Ae<h.lines;++Ae)for(let Me=0;Me<$.length;++Me)Pe[Me].push(Se),Se+=$[Me].width*h.type*2;Be(ee,Pe,$,J,re,D);for(let Ae=0;Ae<$.length;++Ae){const Me=$[Ae];if(!Me.decoded)switch(Me.compression){case 2:let ve=0,ot=0;for(let Ke=0;Ke<h.lines;++Ke){let wt=Pe[Ae][ve];for(let pt=0;pt<Me.width;++pt){for(let tt=0;tt<2*Me.type;++tt)D[wt++]=xe[ot+tt*Me.width*Me.height];ot++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function _e(h,y){const T=new Uint8Array(h);let D=0;for(;T[y.value+D]!=0;)D+=1;const I=new TextDecoder().decode(T.slice(y.value,y.value+D));return y.value=y.value+D+1,I}function Ze(h,y,T){const D=new TextDecoder().decode(new Uint8Array(h).slice(y.value,y.value+T));return y.value=y.value+T,D}function he(h,y){const T=ye(h,y),D=Ee(h,y);return[T,D]}function ce(h,y){const T=Ee(h,y),D=Ee(h,y);return[T,D]}function ye(h,y){const T=h.getInt32(y.value,!0);return y.value=y.value+4,T}function Ee(h,y){const T=h.getUint32(y.value,!0);return y.value=y.value+4,T}function De(h,y){const T=h[y.value];return y.value=y.value+1,T}function Je(h,y){const T=h.getUint8(y.value);return y.value=y.value+1,T}const Ye=function(h,y){let T;return"getBigInt64"in DataView.prototype?T=Number(h.getBigInt64(y.value,!0)):T=h.getUint32(y.value+4,!0)+Number(h.getUint32(y.value,!0)<<32),y.value+=8,T};function Qe(h,y){const T=h.getFloat32(y.value,!0);return y.value+=4,T}function V(h,y){return jh.toHalfFloat(Qe(h,y))}function te(h){const y=(h&31744)>>10,T=h&1023;return(h>>15?-1:1)*(y?y===31?T?NaN:1/0:Math.pow(2,y-15)*(1+T/1024):6103515625e-14*(T/1024))}function ie(h,y){const T=h.getUint16(y.value,!0);return y.value+=2,T}function pe(h,y){return te(ie(h,y))}function Ue(h,y,T,D){const I=T.value,F=[];for(;T.value<I+D-1;){const Y=_e(y,T),j=ye(h,T),$=Je(h,T);T.value+=3;const ee=ye(h,T),J=ye(h,T);F.push({name:Y,pixelType:j,pLinear:$,xSampling:ee,ySampling:J})}return T.value+=1,F}function Le(h,y){const T=Qe(h,y),D=Qe(h,y),I=Qe(h,y),F=Qe(h,y),Y=Qe(h,y),j=Qe(h,y),$=Qe(h,y),ee=Qe(h,y);return{redX:T,redY:D,greenX:I,greenY:F,blueX:Y,blueY:j,whiteX:$,whiteY:ee}}function rt(h,y){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Je(h,y);return T[D]}function At(h,y){const T=ye(h,y),D=ye(h,y),I=ye(h,y),F=ye(h,y);return{xMin:T,yMin:D,xMax:I,yMax:F}}function It(h,y){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Je(h,y);return T[D]}function dt(h,y){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Je(h,y);return T[D]}function cn(h,y){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],I=Ee(h,y),F=Ee(h,y),Y=Je(h,y);return{xSize:I,ySize:F,levelMode:T[Y&15],roundingMode:D[Y>>4]}}function bt(h,y){const T=Qe(h,y),D=Qe(h,y);return[T,D]}function Or(h,y){const T=Qe(h,y),D=Qe(h,y),I=Qe(h,y);return[T,D,I]}function zr(h,y,T,D,I){if(D==="string"||D==="stringvector"||D==="iccProfile")return Ze(y,T,I);if(D==="chlist")return Ue(h,y,T,I);if(D==="chromaticities")return Le(h,T);if(D==="compression")return rt(h,T);if(D==="box2i")return At(h,T);if(D==="envmap")return dt(h,T);if(D==="tiledesc")return cn(h,T);if(D==="lineOrder")return It(h,T);if(D==="float")return Qe(h,T);if(D==="v2f")return bt(h,T);if(D==="v3f")return Or(h,T);if(D==="int")return ye(h,T);if(D==="rational")return he(h,T);if(D==="timecode")return ce(h,T);if(D==="preview")return T.value+=I,"skipped";T.value+=I}function ii(h,y){const T=Math.log2(h);return y=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function ri(h,y,T){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=ii(Math.max(y,T),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function ur(h,y,T,D){const I=new Array(h);for(let F=0;F<h;F++){const Y=1<<F;let j=y/Y|0;D=="ROUND_UP"&&j*Y<y&&(j+=1);const $=Math.max(j,1);I[F]=($+T-1)/T|0}return I}function Br(){const h=this,y=h.offset,T={value:0};for(let D=0;D<h.tileCount;D++){const I=ye(h.viewer,y),F=ye(h.viewer,y);y.value+=8,h.size=Ee(h.viewer,y);const Y=I*h.blockWidth,j=F*h.blockHeight;h.columns=Y+h.blockWidth>h.width?h.width-Y:h.blockWidth,h.lines=j+h.blockHeight>h.height?h.height-j:h.blockHeight;const $=h.columns*h.totalBytes,J=h.size<h.lines*$?h.uncompress(h):k(h);y.value+=h.size;for(let re=0;re<h.lines;re++){const xe=re*h.columns*h.totalBytes;for(let Se=0;Se<h.inputChannels.length;Se++){const Pe=oi.channels[Se].name,Ae=h.channelByteOffsets[Pe]*h.columns,Me=h.decodeChannels[Pe];if(Me===void 0)continue;T.value=xe+Ae;const ve=(h.height-(1+j+re))*h.outLineWidth;for(let ot=0;ot<h.columns;ot++){const Ke=ve+(ot+Y)*h.outputChannels+Me;h.byteArray[Ke]=h.getter(J,T)}}}}}function Hi(){const h=this,y=h.offset,T={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const I=ye(h.viewer,y)-oi.dataWindow.yMin;h.size=Ee(h.viewer,y),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const F=h.columns*h.totalBytes,j=h.size<h.lines*F?h.uncompress(h):k(h);y.value+=h.size;for(let $=0;$<h.blockHeight;$++){const ee=D*h.blockHeight,J=$+h.scanOrder(ee);if(J>=h.height)continue;const re=$*F,xe=(h.height-1-J)*h.outLineWidth;for(let Se=0;Se<h.inputChannels.length;Se++){const Pe=oi.channels[Se].name,Ae=h.channelByteOffsets[Pe]*h.columns,Me=h.decodeChannels[Pe];if(Me!==void 0){T.value=re+Ae;for(let ve=0;ve<h.columns;ve++){const ot=xe+ve*h.outputChannels+Me;h.byteArray[ot]=h.getter(j,T)}}}}}}function hr(h,y,T){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const I=h.getUint8(5);D.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},T.value=8;let F=!0;for(;F;){const Y=_e(y,T);if(Y==0)F=!1;else{const j=_e(y,T),$=Ee(h,T),ee=zr(h,y,T,j,$);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${j}'.`):D[Y]=ee}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function Lt(h,y,T,D,I){const F={size:0,viewer:y,array:T,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:ki};switch(h.compression){case"NO_COMPRESSION":F.blockHeight=1,F.uncompress=k;break;case"RLE_COMPRESSION":F.blockHeight=1,F.uncompress=Z;break;case"ZIPS_COMPRESSION":F.blockHeight=1,F.uncompress=ae;break;case"ZIP_COMPRESSION":F.blockHeight=16,F.uncompress=ae;break;case"PIZ_COMPRESSION":F.blockHeight=32,F.uncompress=ne;break;case"PXR24_COMPRESSION":F.blockHeight=16,F.uncompress=Ce;break;case"DWAA_COMPRESSION":F.blockHeight=32,F.uncompress=fe;break;case"DWAB_COMPRESSION":F.blockHeight=256,F.uncompress=fe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const Y={};for(const J of h.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":Y[J.name]=!0,F.type=J.pixelType}let j=!1;if(Y.R&&Y.G&&Y.B)j=!Y.A,F.outputChannels=4,F.decodeChannels={R:0,G:1,B:2,A:3};else if(Y.Y)F.outputChannels=1,F.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(F.type==1)switch(I){case zn:F.getter=pe;break;case Oi:F.getter=ie;break}else if(F.type==2)switch(I){case zn:F.getter=Qe;break;case Oi:F.getter=V}else throw new Error("EXRLoader.parse: unsupported pixelType "+F.type+" for "+h.compression+".");F.columns=F.width;const $=F.width*F.height*F.outputChannels;switch(I){case zn:F.byteArray=new Float32Array($),j&&F.byteArray.fill(1,0,$);break;case Oi:F.byteArray=new Uint16Array($),j&&F.byteArray.fill(15360,0,$);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let ee=0;for(const J of h.channels)F.decodeChannels[J.name]!==void 0&&(F.channelByteOffsets[J.name]=ee),ee+=J.pixelType*2;if(F.totalBytes=ee,F.outLineWidth=F.width*F.outputChannels,h.lineOrder==="INCREASING_Y"?F.scanOrder=J=>J:F.scanOrder=J=>F.height-1-J,F.outputChannels==4?(F.format=dn,F.colorSpace=ki):(F.format=Bu,F.colorSpace=en),h.spec.singleTile){F.blockHeight=h.tiles.ySize,F.blockWidth=h.tiles.xSize;const J=ri(h.tiles,F.width,F.height),re=ur(J,F.width,h.tiles.xSize,h.tiles.roundingMode),xe=ur(J,F.height,h.tiles.ySize,h.tiles.roundingMode);F.tileCount=re[0]*xe[0];for(let Se=0;Se<J;Se++)for(let Pe=0;Pe<xe[Se];Pe++)for(let Ae=0;Ae<re[Se];Ae++)Ye(y,D);F.decode=Br.bind(F)}else{F.blockWidth=F.width;const J=Math.ceil(F.height/F.blockHeight);for(let re=0;re<J;re++)Ye(y,D);F.decode=Hi.bind(F)}return F}const Vi={value:0},pi=new DataView(e),hs=new Uint8Array(e),oi=hr(pi,e,Vi),mi=Lt(oi,pi,hs,Vi,this.type);return mi.decode(),{header:oi,width:mi.width,height:mi.height,data:mi.byteArray,format:mi.format,colorSpace:mi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=gt,s.magFilter=gt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Pn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new cr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const x=f.packedComponents,P=x.length,R=f.storageType.indexOf("Int")===0,A=1<<b*8,C=R?A*.5:0,w=1/A;S=new Float32Array(v*g);for(let M=0,L=0;M<v;M++)for(let N=0;N<P;N++){const O=x[N];S[L]=(p[L]+C)*w*O.delta+O.from,L++}}else S=p;if(m==="indices"){let x=S;S instanceof Uint8Array&&(x=new Uint16Array(S.length),x.set(S)),l.setIndex(new Xt(x,1))}else l.setAttribute(m,new Xt(S,g));a+=v*g*b}return l.computeBoundingSphere(),l}const Pa=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],ac={density:1,friction:2,restitution:.8},aS=40,oo=8,lS=`
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
`,cS=`
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
uniform vec4 u_nearPositionRadiusList[${oo}];
uniform vec3 u_nearColorList[${oo}];

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

  for (int i = 0; i < ${oo}; i++) {
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
  gi /= float(${oo});

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
`,uS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hS=`
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
`;function fS(i){const e={...ac},t={...ac},n={...ac};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function dS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Cf(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class pS{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Fn().setFromEuler(new ni(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(aS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function mS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Pa.length),r=Pa[n];const o=new us,s=new Nn(25,1,.1,100);s.position.set(0,0,25);const a=new _l({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=ki,a.toneMapping=zi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Pn(u),new Promise((z,He)=>{new sS().load(d,z,void 0,He)})]);m.minFilter=gt,m.magFilter=gt,m.generateMipmaps=!1,m.colorSpace=en;const v=new q(10,10,5),g=fS(r),_=dS("balloonBody-25"),p=[],b=[],S=[],x=[],P=Array.from({length:oo},()=>new Ft(0,0,-999,.01)),R=Array.from({length:oo},()=>new et(1118481)),A=z=>new Dt({uniforms:{u_matcap:{value:m},u_color:{value:new et(z.color)},u_bgColor:{value:new et(1316117)},u_roughness:{value:z.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ft(0,0,0,1)},u_selfRotation:{value:new Ft(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(He=>He.clone())},u_nearColorList:{value:R.map(He=>He.clone())}},vertexShader:lS,fragmentShader:cS});for(const z of g){const He=A(z),Be=new kt(f,He);Be.frustumCulled=!1,Be.scale.setScalar(z.radius),o.add(Be),b.push(Be),S.push(He),p.push(new pS(z.radius,z.density,z.friction,z.restitution,_,!1)),x.push({i:b.length-1,d2:0})}const C=new Dt({uniforms:{u_color0:{value:new et(r)},u_color1:{value:new et(1316117)},u_aspect:{value:1}},vertexShader:uS,fragmentShader:hS,depthWrite:!1}),w=new kt(new Ri(90,60),C);w.position.z=-12,w.renderOrder=-1e3,o.add(w);const M=new it(0,0),L=new q,N=new q,O=new q,G=new q,W=new q,H=new q,X=new q,B=new q,ue=new q,Q=new q,de=new Fn,ge=.025,Oe=.1,K=.12,oe=z=>{const He=(e||i).getBoundingClientRect();M.x=(z.clientX-He.left)/He.width*2-1,M.y=-((z.clientY-He.top)/He.height*2-1)};window.addEventListener("pointermove",oe);const le=()=>{n=(n+1)%Pa.length,r=Pa[n],b.forEach((z,He)=>{const Be=g[He];Be.isColored&&(z.material.uniforms.u_color.value.set(r),Be.color=r)}),C.uniforms.u_color0.value.set(r),p.forEach(z=>z.applyImpulse())},se=()=>le();i.addEventListener("click",se),e==null||e.addEventListener("click",se);const be=()=>{const z=e||i.parentElement,He=z.clientWidth,Be=z.clientHeight,$e=He/Math.max(Be,1);s.fov=Cf($e,2.2,2/3,18,30),s.aspect=$e,s.updateProjectionMatrix(),a.setSize(He,Be,!1),C.uniforms.u_aspect.value=$e};be(),window.addEventListener("resize",be);let Fe=0,Te=performance.now();const Ve=performance.now(),Ge=()=>{const He=(e||i).getBoundingClientRect();l=He.bottom>0&&He.top<window.innerHeight};window.addEventListener("scroll",Ge,{passive:!0}),Ge();const st=z=>{if(Fe=requestAnimationFrame(st),!l){Te=z;return}let He=Math.min(.05,(z-Te)/1e3);Te=z;const Be=t?1:2;He/=Be;const $e=(z-Ve)/1e3,ke=Cf($e,.3,2,25,17.5);s.position.z=ke;for(let qe=0;qe<Be;qe++){const ze=new q(M.x,M.y,.5).unproject(s);ze.sub(s.position).normalize();const U=(0-s.position.z)/ze.z;L.copy(s.position).addScaledVector(ze,U),O.copy(L).sub(N).multiplyScalar(K/Math.max(He,.001)),G.copy(L).sub(s.position);const E=G.lengthSq()||1;N.copy(L);for(let k=0;k<p.length;k++){const Z=p[k];Z.updateGravity(He),H.copy(Z.velocity),X.copy(Z.position);for(let fe=k+1;fe<p.length;fe++){const _e=p[fe];ue.copy(_e.velocity),Q.copy(_e.position),W.copy(X).sub(Q);const Ze=W.length(),he=Z.radius+_e.radius;if(Ze<he&&Ze>1e-6){const ce=Math.sqrt(Z.friction*_e.friction);Z.frictionTot+=ce,_e.frictionTot+=ce,W.normalize(),W.multiplyScalar(.5*(Ze-he)),X.sub(W),Q.add(W),W.normalize();const ye=H.dot(W),Ee=ue.dot(W),De=Z.mass,Je=_e.mass,Ye=(De*ye+Je*Ee-Je*(ye-Ee)*Z.restitution)/(De+Je),Qe=(De*ye+Je*Ee-De*(Ee-ye)*_e.restitution)/(De+Je);H.addScaledVector(W,(Ye-ye)/(1+ce)),ue.addScaledVector(W,(Qe-Ee)/(1+ce)),_e.position.copy(Q),_e.velocity.copy(ue)}}B.copy(X).sub(s.position);let ae=B.dot(G)/E;ae=B.sub(ue.copy(G).multiplyScalar(ae)).length()-Z.radius-ge,ae<0&&(B.copy(X).sub(s.position).cross(G).normalize(),ue.copy(G).cross(B).normalize(),X.sub(ue.multiplyScalar(Oe*ae)),ue.multiplyScalar(-K/Math.max(He,.001)),H.add(ue),H.add(O));let ne=X.length();if(ne>0){B.set(1,1,1).normalize();let fe=1-Math.abs(B.dot(ue.copy(X).normalize()));fe*=He*Math.min(1,Math.max(0,ne/2))*.5,fe*=k%2*2-1,de.setFromAxisAngle(B,fe),ue.copy(X).applyQuaternion(de).sub(B.copy(X)),H.add(ue)}B.crossVectors(X,H);let Ce=B.length();Ce/=Z.inertia,Ce>0&&(B.normalize(),de.setFromAxisAngle(B,Ce*He),Z.quaternion.premultiply(de)),Z.position.copy(X),Z.velocity.copy(H),Z.update(He),["x","y","z"].forEach(fe=>{const _e=fe==="z"?5.5:7.5;Z.position[fe]>_e&&(Z.position[fe]=_e,Z.velocity[fe]*=-.55),Z.position[fe]<-_e&&(Z.position[fe]=-_e,Z.velocity[fe]*=-.55)})}}for(let qe=0;qe<b.length;qe++){const ze=b[qe],U=p[qe];ze.position.copy(U.position),ze.quaternion.copy(U.quaternion);const E=S[qe].uniforms;E.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),E.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),E.u_bgColor.value.copy(C.uniforms.u_color1.value)}for(let qe=0;qe<b.length;qe++){for(let E=0;E<b.length;E++)x[E].i=E,x[E].d2=qe===E?0:p[qe].position.distanceToSquared(p[E].position);x.sort((E,k)=>E.d2-k.d2);const ze=S[qe].uniforms.u_nearPositionRadiusList.value,U=S[qe].uniforms.u_nearColorList.value;for(let E=0;E<oo;E++){const k=x[E+1]?x[E+1].i:x[0].i,Z=p[k];ze[E].set(Z.position.x,Z.position.y,Z.position.z,Z.radius),U[E].copy(S[k].uniforms.u_color.value)}}s.position.x+=(M.x*.9-s.position.x)*.04,s.position.y+=(M.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Fe=requestAnimationFrame(st),{cycleColor:le,destroy(){cancelAnimationFrame(Fe),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",be),window.removeEventListener("scroll",Ge),i.removeEventListener("click",se),e==null||e.removeEventListener("click",se),S.forEach(z=>z.dispose()),C.dispose(),a.dispose()}}}function fn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Zn(i){return fn(i,0,1)}function Fp(i,e,t){return(t-i)/(e-i||1)}function to(i,e,t){return fn(Fp(i,e,t),0,1)}function me(i,e,t,n,r,o){let s=to(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function Pf(i,e,t,n,r,o){let s=Fp(e,t,i);return n+s*(r-n)}function _S(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,S)=>_*(g*g*g)+p*(g*g)+b*g+S,a=(g,_,p,b,S)=>{const x=g*g;return _*(x*g)+p*x+b*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function ft(i){return _S(i,.35,0,0,1)}function sl(i){return i===1?1:1-Math.pow(2,-10*i)}function gS(i){return i===0?0:Math.pow(1024,i-1)}function vS(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function xS(i){return 1-Math.cos(i*Math.PI/2)}function du(i){return Math.sin(i*Math.PI/2)}function yS(i){return-(Math.cos(Math.PI*i)-1)/2}function SS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function pu(i){return i*i*i}function Np(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function xn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,Pf(n,t,t-r,-1,0));s+=Math.max(0,Pf(n,0,-r,0,1));const a=me(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function MS(i){return 1-Math.pow(1-i,3)}function wS(i){return i*i*i*i}function bS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Si(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Df=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function $u(i){const e=Df.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of Df){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function o(a,l=a){const c=t[a],u=t[l],d=r(),f=c.from,m=u.to,v=(d-f)/Math.max(m-f,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:d>=f&&d<=m,global:d}}function s(a,l){return o(a,l)}return{items:t,progress:r,range:o,between:s,totalWeight:e}}const TS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,ES=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,AS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",RS="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Op=`
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
`,zp=`
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
`,CS=`
${Op}
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
${zp}
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
`,PS=`
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
`,Lf=`
${Op}
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
${zp}
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
`,ji=5,Da=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,DS=`
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
`,LS=`
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
`,IS=`
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
`,US=`
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
`;function Io(i,e,t=!1,n=0){const r={minFilter:gt,magFilter:gt,format:dn,type:n>0?Ai:Oi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new lr(i,e,r);return t&&n===0&&(o.depthTexture=new rl(i,e),o.depthTexture.type=ho),t&&n>0&&(o.depthTexture=new rl(i,e),o.depthTexture.type=ho),o}function FS(i,e,t,{isMobile:n=!1}={}){const r=new it(1,1);i.getSize(r);let o=!!n,s=Io(1,1,!0,4),a=Io(1,1,!1),l=Io(1,1,!1),c=Io(1,1,!1),u=null;const d=[],f=[];for(let k=0;k<ji;k++)d.push(Io(1,1)),f.push(Io(1,1));const m=new qu(-1,1,1,-1,0,1),v=new kt(new Ri(2,2),new Xu),g=new us;g.add(v);const _=new Dt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new it(1,1)},u_aspect:{value:new it(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Da,fragmentShader:DS,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=[];for(let k=0;k<ji;k++){const Z=3+k*2;p.push(new Dt({uniforms:{u_texture:{value:null},u_resolution:{value:new it(1,1)},u_direction:{value:new it(1,0)}},defines:{KERNEL_RADIUS:Z,SIGMA:Z},vertexShader:Da,fragmentShader:LS,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const b=new Float32Array(ji),S=new Dt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:b}},vertexShader:Da,fragmentShader:IS,depthTest:!1,depthWrite:!1,toneMapped:!1});let x=0;const P=new Dt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new it(1,1)},u_amount:{value:1}},vertexShader:Da,fragmentShader:US,depthTest:!1,depthWrite:!1,toneMapped:!1}),R=new vt,A=new vt,C=new vt,w=new vt,M=new vt,L=new q,N=new ni,O=new q(1,1,1),G=new Fn;let W=!0,H=1,X=!1,B=0,ue=0,Q=1,de=1,ge=0,Oe=.015,K=.6,oe=.3,le=.5,se=0,be=new et(0),Fe=!0,Te=1,Ve=1,Ge=1;const st=new it(1,0),z=new it(0,1),He=(k,Z)=>{v.material=k,i.setRenderTarget(Z),i.clear(),i.render(g,m)},Be=k=>{const Z=Math.max(1,k);return 1<<Math.ceil(Math.log(Z)/Math.log(2))},$e=(k,Z)=>{Te=Math.max(1,Math.floor(k)),Ve=Math.max(1,Math.floor(Z));const ae=1;s.setSize(Math.max(1,Math.floor(Te*ae)),Math.max(1,Math.floor(Ve*ae))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const ne=o?3:2;let Ce=Math.max(1,Math.ceil(Te/ne)),fe=Math.max(1,Math.ceil(Ve/ne));c.setSize(Ce,fe);for(let Ze=0;Ze<ji;Ze++)d[Ze].setSize(Ce,fe),f[Ze].setSize(Ce,fe),Ce=Math.max(1,Math.ceil(Ce/2)),fe=Math.max(1,Math.ceil(fe/2));_.uniforms.u_texelSize.value.set(1/Te,1/Ve);const _e=Ve/Math.sqrt(Te*Te+Ve*Ve)*2;_.uniforms.u_aspect.value.set(Te/Ve*_e,_e),P.uniforms.u_aspect.value.set(Te/Math.max(Ve,1),1)},ke=({blackFrameInRatio:k=0,blackTitleRatio:Z=0,blackTunnelRatio:ae=0,whiteFrameRatio:ne=0,whiteTunnelWaitRatio:Ce=0,astronautDropRatio:fe=0,isWhiteTunnelActive:_e=!1,isBlackTunnelActive:Ze=!1,isMobile:he=!1}={})=>{o=!!he;let ce=k*(Jt.lerp(0,.15,Z)+Jt.clamp((ae-.2)/.2,0,1)*.25);if(ae>=.65){const Ee=Jt.clamp((ae-.65)/.1,0,1);ce=ce+(.08-ce)*Ee}if(_e&&(ce=0),!_e&&k>.55&&ae<.25){const Ee=Jt.lerp(he?.24:.42,he?.12:.18,Jt.clamp(Z/.5,0,1));ce=Math.max(ce,Ee*Math.min(1,k))}if(ge=ce,Q=ae<1?Jt.lerp(1,3,Jt.clamp(ae/.7,0,1)):1,_e){const Ee=he?12:20;B=fe<1?Jt.lerp(4,2,Jt.clamp(ne/.05,0,1)):Jt.lerp(0,Ee,Jt.clamp(Ce/.1,0,1)),ue=he?.45:.62,de=he?1.2:1.35,Ge=he?1.15:1.35,se=Jt.lerp(.38,0,Jt.clamp(Ce/.1,0,1)),be.set("#ffffff")}else{Ge=1;const Ee=Jt.clamp(Z/.25,0,1);B=Jt.lerp(he?22:30,he?5:6,Ee),se=0,be.set("#000000")}const ye=!_e&&k>.55&&ae<.2;K=ye?.85:.6,Oe=ye?.04:he?.012:.02,oe=ye?.15:.3,le=ye?.75:.5,_e||(ue=he?.15:ye?.55:.5,de=ye?1.15:1),X=Ze||_e},qe=(k,Z=0)=>{L.set(0,0,k),N.set(0,0,Z)},ze=()=>{W=!0},U=(k,Z)=>{const ae=i.autoClear;i.autoClear=!0,He(k,Z),i.autoClear=ae},E=()=>{if(!Fe){i.setRenderTarget(null),i.render(e,t);return}const k=i.getRenderTarget(),Z=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(be,se),i.clear();const ae=e.background;e.background=null;const ne=u==null?void 0:u.mesh,Ce=!!(ne!=null&&ne.visible);if(Ce&&(ne.visible=!1),i.render(e,t),e.background=ae,u!=null&&u.active&&u.overlayScene){for(let ye=0;ye<ji;ye++)b[ye]=0,S.uniforms[`u_blurTexture${ye}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ce=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,He(S,a),S.uniforms.u_scrollPaint.value=ce,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Ve),ne&&(ne.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else Ce&&ne&&(ne.visible=!1);let fe=s.texture;if(R.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),C.copy(R).invert(),X&&H>0?(W&&(A.copy(R),W=!1),M.compose(L,G.setFromEuler(N),O),M.invert(),w.copy(A).multiply(M),P.uniforms.u_texture.value=s.texture,P.uniforms.u_depthTexture.value=s.depthTexture,P.uniforms.u_projectionViewInverseMatrix.value.copy(C),P.uniforms.u_prevProjectionViewMatrix.value.copy(w),P.uniforms.u_amount.value=H,U(P,l),fe=l.texture,A.copy(R)):(A.copy(R),W=!0),B<.05&&ge<.005){S.uniforms.u_texture.value=fe;for(let ce=0;ce<ji;ce++)b[ce]=0,S.uniforms[`u_blurTexture${ce}`].value=fe;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),He(S,null),i.autoClear=Z,i.setRenderTarget(k);return}_.uniforms.u_texture.value=fe,_.uniforms.u_amount.value=de,_.uniforms.u_haloStrength.value=ge,_.uniforms.u_haloWidth.value=K,_.uniforms.u_haloRGBShift.value=Oe,_.uniforms.u_haloMaskInner.value=oe,_.uniforms.u_haloMaskOuter.value=le,U(_,c);const _e=o?3:ji;let Ze=c;for(let ce=0;ce<_e;ce++){const ye=p[ce];ye.uniforms.u_texture.value=Ze.texture,ye.uniforms.u_resolution.value.set(Ze.width,Ze.height),ye.uniforms.u_direction.value=st,U(ye,d[ce]),ye.uniforms.u_texture.value=d[ce].texture,ye.uniforms.u_resolution.value.set(d[ce].width,d[ce].height),ye.uniforms.u_direction.value=z,U(ye,f[ce]),Ze=f[ce]}let he=B;if(o)he*=Ge;else{const ce=Be(Te/2)>>1,ye=Be(Ve/2)>>1,Ee=Math.max(1,Math.ceil(Math.log(ce*ye)/Math.log(2)));he=B*1024/Math.pow(Ee,4)*.85*48*Ge}for(let ce=0;ce<ji;ce++){if(ce>=_e){b[ce]=0;continue}const ye=(_e-ce)/_e;let Ee=he*(ye+(1.2-ye*2)*ue)/Math.pow(2,_e-ce-1);!o&&ce===0&&(Ee*=.15),!o&&ce===1&&(Ee*=.45),!o&&ce>=3&&(Ee*=1.75),b[ce]=Ee}S.uniforms.u_texture.value=fe,S.uniforms.u_saturation.value=Q;for(let ce=0;ce<ji;ce++){const ye=ce<_e?f[ce].texture:f[_e-1].texture;S.uniforms[`u_blurTexture${ce}`].value=ye}i.setRenderTarget(null),He(S,null),i.autoClear=Z,i.setRenderTarget(k)};return $e(r.x,r.y),{resize:$e,sync:ke,render:E,setEfxOffset:qe,markEfxSync:ze,setGlassPass(k){u=k||null},setEfxAmount(k){H=k},get clearAlpha(){return se},setEnabled(k){Fe=!!k},setScrollVelocity(k){const Z=Math.min(1,Math.abs(k)*.12);x+=(Z-x)*.12,S.uniforms.u_scrollPaint.value=x},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.forEach(k=>k.dispose()),f.forEach(k=>k.dispose()),_.dispose(),S.dispose(),P.dispose(),p.forEach(k=>k.dispose()),v.geometry.dispose()}}}function NS(i,e,t){return i+(e-i)*t}const br=class br{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<br.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&br.MAX_VERTICES_MASK,a=s+1&br.MAX_VERTICES_MASK;return NS(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Xe(br,"MAX_VERTICES",512),Xe(br,"MAX_VERTICES_MASK",br.MAX_VERTICES-1);let al=br;const Li=new q,zs=class zs{constructor(){this._position=new q,this._rotation=new Fn,this._euler=new ni,this._scale=new q(1,1,1),this._matrix=new vt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new al,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Li.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Li.multiply(this._positionScale),Li.multiplyScalar(this._positionAmplitude*zs.FBM_NORM),this._position.copy(Li)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Li.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Li.multiply(this._rotationScale),Li.multiplyScalar(this._rotationAmplitude*zs.FBM_NORM),this._euler.set(Li.x,Li.y,Li.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Xe(zs,"FBM_NORM",1/.75);let Ns=zs;class mu{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const If=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],OS=26,Kr=64,zS=34,Ss=new it(1465,1024),BS=`
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
`,kS=`
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
`,HS=`
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
`,VS=`
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
`,La=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function GS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function WS(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?zS:OS,[s,a]=await Promise.all([new Mr().loadAsync(`${e}assets/textures/tunnels/${r}`),Pn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Dn,s.flipY=!1,s.needsUpdate=!0;const l=new Ti;i.add(l);const c=new Ri(1,1),u=new io;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let M=0,L=0;M<o;M++,L+=4){d[M]=M/o;const N=If[M%If.length];f[L]=N.x/Ss.x,f[L+1]=N.y/Ss.y,f[L+2]=N.w/Ss.x,f[L+3]=N.h/Ss.y,m[L]=Math.random(),m[L+1]=Math.random(),m[L+2]=Math.random(),m[L+3]=Math.random()}u.setAttribute("instanceId",new yn(d,1)),u.setAttribute("instanceUvInfo",new yn(f,4)),u.setAttribute("instanceRands",new yn(m,4)),u.instanceCount=o;const v=new Dt({vertexShader:BS,fragmentShader:kS,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:Ss.clone()},u_bgColor:{value:new et(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ys,blendEquation:In,blendSrc:Go,blendDst:Wo,blendEquationAlpha:In,blendSrcAlpha:Ha,blendDstAlpha:Ha,defines:{COUNT:o}}),g=new kt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new io;for(const M in a.attributes)_.setAttribute(M,a.attributes[M]);a.index&&(_.index=a.index);const p=GS("diamonds-3"),b=new Float32Array(Kr*3),S=new Float32Array(Kr*3),x=new Float32Array(Kr*4),P=new q;for(let M=0,L=0,N=0;M<Kr;M++,L+=3,N+=4)b[L]=16*(p()*2-1),b[L+1]=16*(p()*2-1),b[L+2]=19-(Kr-M-1)/(Kr-1)*8,P.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[L]=P.x,S[L+1]=P.y,S[L+2]=P.z,x[N]=p(),x[N+1]=p(),x[N+2]=p(),x[N+3]=p();_.setAttribute("a_instancePosition",new yn(b,3)),_.setAttribute("a_instanceRotationAxis",new yn(S,3)),_.setAttribute("a_instanceRand",new yn(x,4)),_.instanceCount=Kr;const R=[];for(let M=0;M<25;M++)R.push(new Ft(La[M*4],La[M*4+1],La[M*4+2],La[M*4+3]));const A=new Dt({vertexShader:HS,fragmentShader:VS,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new et("#689aff")},u_planes:{value:R},u_bgColor:{value:new et(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ys,blendEquation:In,blendSrc:ci,blendDst:Ha,blendEquationAlpha:In,blendSrcAlpha:ci,blendDstAlpha:ci}),C=new kt(_,A);C.frustumCulled=!1,C.renderOrder=20,C.visible=!1,A.blending=Dr,A.blendSrc=Go,A.blendDst=Wo,A.blendSrcAlpha=Go,A.blendDstAlpha=Wo,l.add(C),g.renderOrder=15;const w=new et(0);return{update({whiteTunnelWaitRatio:M=0,aspect:L=1,bg:N="#000000"}={}){const O=me(M,0,.12,0,1),G=O>0;l.visible=G,g.visible=G,C.visible=G,v.uniforms.u_activeRatio.value=O,A.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=L,A.uniforms.u_aspect.value=L,w.set(N),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const Ia=946,Uf=2,XS=`
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
`,qS=`
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
`;function Ff(i,e,t){const n=new gl(i,e,t,dn,zn);return n.magFilter=tn,n.minFilter=tn,n.wrapS=Un,n.wrapT=Un,n.needsUpdate=!0,n.colorSpace=en,n}async function YS(i,{base:e}){const[t,n]=await Promise.all([Pn(`${e}assets/models/tunnels/broken_glass.buf`),Pn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Xt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(Ia*3),l=new Float32Array(o.length/3*4);for(let N=0,O=0;N<o.length;N+=3,O+=4)l[O]=o[N],l[O+1]=o[N+1],l[O+2]=o[N+2],l[O+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Ff(l,Ia,a),d=Ff(c,Ia,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new it(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new it(Ia,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new Dt({uniforms:f,vertexShader:XS,fragmentShader:qS,transparent:!0,depthWrite:!1,depthTest:!0,side:wn,toneMapped:!1}),v=new kt(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new us,_=new Ti;_.add(v),g.add(_);let p=0,b=1,S=1,x=0,P=1,R=!1;const A=new q(0,0,1),C=new Fn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return R},updateFromScroll:({whiteFrameBreakRatio:N=0,astronautDropRatio:O=0,frameHeight:G=0,frameRotation:W=0,frameScale:H=1}={})=>{p=me(N,0,1,0,1,du),b=me(O,.75,1,1,0),S=Math.max(1,G||window.innerHeight),x=W||0,P=H||1,R=p>.001&&O<1,_.visible=R,R||(v.visible=!1)},syncToCamera:(N,O=window.innerHeight)=>{if(!R||!N)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-Uf);const G=Math.tan(N.fov*Math.PI/360)*Uf*2,W=S/Math.max(O,1)*G*P;C.setFromAxisAngle(A,-x),v.quaternion.multiply(C),v.scale.setScalar(Math.max(W,1e-4));const H=p*(a-1),X=Math.floor(H),B=Math.min(X+1,a-1);return f.u_frameFrom.value=X,f.u_frameTo.value=B,f.u_frameRatio.value=H-X,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(N,O,G)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(O,G)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const Ms=53,Ua=16,Fa=20,Nf=["helmet","helmet_glass","glove_shoes","wearpack"],ws=["#0d2b27","#ba0000","#00b5a6","#0099ff"],lc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Of(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function zf(i,e){const[t,n]=await Promise.all([Of(i),Of(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new gl(u,r,o,dn,Ai);return d.colorSpace=en,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=bi,d.magFilter=gt,d.anisotropy=8,d.wrapS=Un,d.wrapT=Un,d.needsUpdate=!0,d}function Bf(i,e,t){const n=new gl(i,e,t,dn,zn);return n.magFilter=tn,n.minFilter=tn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function cc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new yn(t,3)}const Na=`
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
`;async function $S(i,e,t){var ih,rh,oh,sh;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,...S]=await Promise.all([Pn(`${r}assets/models/tunnels/astronaut_animations.buf`),Pn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Pn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new Mr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new Mr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new Mr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Pn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Pn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Pn(`${r}assets/models/tunnels/grid_base_ld.buf`),Pn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Pn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Pn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new Mr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...Nf.map(we=>Pn(`${r}assets/models/tunnels/astronaut_${we}.buf`))]),x=new us;x.background=new et(0);const P=new q(0,0,25),R=new q(0,0,24),A=45,C=new Nn(A,1,1,200);C.position.copy(P),C.lookAt(R);let w;try{w=new _l({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(we){throw console.error("Goal WebGL unavailable",we),we}w.setClearColor(0,1),w.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),w.outputColorSpace=ki,w.toneMapping=zi,w.autoClear=!0,c.colorSpace=en,c.generateMipmaps=!1,c.minFilter=gt,c.magFilter=gt,u.colorSpace=en,u.generateMipmaps=!1,u.minFilter=gt,u.magFilter=gt,d.colorSpace=en,d.wrapS=d.wrapT=Xo,d.generateMipmaps=!1,d.minFilter=gt,d.magFilter=gt;const M=s.attributes.position.array,L=s.attributes.orient.array,N=M.length/3,O=N/Ms,G=Math.ceil(Math.sqrt(N)),W=Math.ceil(N/G),H=G*W,X=new Float32Array(H*4),B=new Float32Array(H*4);for(let we=0,We=0,Re=0;we<N;we++,We+=3,Re+=4)X[Re]=M[We],X[Re+1]=M[We+1],X[Re+2]=M[We+2],X[Re+3]=1,B[Re]=L[Re],B[Re+1]=L[Re+1],B[Re+2]=L[Re+2],B[Re+3]=L[Re+3];const ue=Bf(X,G,W),Q=Bf(B,G,W),de=new yn(new Float32Array([0,0,18]),3);de.setUsage(pr);const ge=new yn(new Float32Array([0,0,0,1]),4);ge.setUsage(pr);const Oe=new yn(new Float32Array([0,1,0]),3);Oe.setUsage(pr);const K=new yn(new Float32Array([90,91,0]),3);K.setUsage(pr);const oe=()=>{const we=new lr(1,1,{minFilter:bi,magFilter:gt,format:dn,generateMipmaps:!0});return we.texture.wrapS=we.texture.wrapT=nl,we},le=oe(),se=oe();let be=le,Fe=se;const Te={u_animationPositionTexture:{value:ue},u_animationOrientTexture:{value:Q},u_animationTextureSize:{value:new it(G,W)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new et("#566d80")},u_bgColor:{value:new et("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new et(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new et("#aaaafb")},u_cardPosition:{value:new q}},Ve={u_blackTunnelTexture:{value:be.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},Ge={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async we=>{const[We,Re]=await Promise.all([zf(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${we}_base.webp`),new Mr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_nor.webp`)]);Re.colorSpace=en,Re.flipY=!1,Re.generateMipmaps=!0,Re.minFilter=bi,Re.magFilter=gt,Re.anisotropy=8,Ge[we]={armb:We,nor:Re}}));const st=((rh=(ih=w.capabilities).getMaxAnisotropy)==null?void 0:rh.call(ih))||8;for(const we of Object.keys(Ge)){const{armb:We,nor:Re}=Ge[we];We&&(We.anisotropy=Math.min(8,st),We.needsUpdate=!0),Re&&(Re.anisotropy=Math.min(8,st),Re.needsUpdate=!0)}Ge.helmet_glass=Ge.helmet;const z=new Ti;x.add(z);const He=[],Be=4,$e=new yn(new Float32Array(Be*3),3);$e.setUsage(pr);const ke=new yn(new Float32Array(Be*4),4);ke.setUsage(pr);const qe=new yn(new Float32Array(Be*3),3);qe.setUsage(pr);const ze=new yn(new Float32Array(Be*3),3);ze.setUsage(pr);for(let we=0;we<Be;we++)ke.setXYZW(we,0,0,0,1),qe.setXYZ(we,0,1,0),ze.setXYZ(we,90,91,0);const U=[];let E=0;const k={value:0};Nf.forEach((we,We)=>{const Re=S[We],je=new io;for(const Kt in Re.attributes)je.setAttribute(Kt,Re.attributes[Kt]);Re.index&&je.setIndex(Re.index),je.instanceCount=1,je.setAttribute("instancePos",de),je.setAttribute("instanceOrient",ge),je.setAttribute("instanceAnimationFrameFromToBlend1",Oe),je.setAttribute("instanceAnimationFrameFromToBlend2",K);const lt=we==="helmet_glass"||we==="card"?"helmet":we,yt=we==="helmet_glass",ht={...Te,u_armbTexture:{value:Ge[lt].armb},u_norTexture:{value:Ge[lt].nor}},Ot={...Te,...Ve,u_armbTexture:{value:Ge[lt].armb},u_norTexture:{value:Ge[lt].nor}},En=new Dt({uniforms:ht,vertexShader:Na,fragmentShader:CS,transparent:!0,blending:Ei,side:wn,defines:{BONE_COUNT:Ms,IS_WHITE:!0,...yt?{IS_HELMET_GLASS:!0}:{}}}),sn=new Dt({uniforms:Ot,vertexShader:Na,fragmentShader:Lf,transparent:!0,blending:Ei,side:wn,defines:{BONE_COUNT:Ms,IS_BLACK:!0,...yt?{IS_HELMET_GLASS:!0}:{}}}),un=new kt(je,En);if(un.frustumCulled=!1,un.userData.whiteMat=En,un.userData.blackMat=sn,z.add(un),He.push(un),!yt){const Kt=new io;for(const Pi in Re.attributes)Kt.setAttribute(Pi,Re.attributes[Pi]);Re.index&&Kt.setIndex(Re.index),Kt.instanceCount=Be,Kt.setAttribute("instancePos",$e),Kt.setAttribute("instanceOrient",ke),Kt.setAttribute("instanceAnimationFrameFromToBlend1",qe),Kt.setAttribute("instanceAnimationFrameFromToBlend2",ze);const si=new Dt({uniforms:{...Ot,u_armbTexture:{value:Ge[lt].armb},u_norTexture:{value:Ge[lt].nor},u_alpha:k},vertexShader:Na,fragmentShader:Lf,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ys,blendEquation:In,blendSrc:ci,blendDst:ci,blendEquationAlpha:In,blendSrcAlpha:ci,blendDstAlpha:ci,side:wn,defines:{BONE_COUNT:Ms,IS_BLACK:!0,IS_CLONE:!0}}),hn=new kt(Kt,si);hn.frustumCulled=!1,hn.renderOrder=1e3,hn.visible=!1,z.add(hn),U.push(hn)}});const Z=new it(5,23),ae=new al;let ne=0,Ce=!1;const fe=document.createElement("canvas");fe.width=fe.height=11;{const we=fe.getContext("2d");we.fillStyle="#000",we.fillRect(0,0,11,11),we.fillStyle="#f00",we.fillRect(1,1,3,9),we.fillStyle="#0f0",we.fillRect(4,1,3,9),we.fillStyle="#00f",we.fillRect(7,1,3,9)}const _e=new zy(fe);_e.needsUpdate=!0,_e.minFilter=gt,_e.magFilter=gt;const Ze=await new Mr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);Ze.minFilter=tn,Ze.magFilter=tn,Ze.colorSpace=en,Ze.flipY=!1;const he=new Ri(.2,.15).translate(0,1.68,.1);he.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),he.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),he.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),he.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const ce=new io;for(const we in he.attributes)ce.setAttribute(we,he.attributes[we]);he.index&&ce.setIndex(he.index),ce.instanceCount=1,ce.setAttribute("instancePos",de),ce.setAttribute("instanceOrient",ge),ce.setAttribute("instanceAnimationFrameFromToBlend1",Oe),ce.setAttribute("instanceAnimationFrameFromToBlend2",K);const ye=new Dt({uniforms:{...Te,u_cardLedTexture:{value:_e},u_cardTexture:{value:Ze},u_cardColor:{value:new et("#ddddff")},u_cardUvOffset:{value:new it(0,0)},u_cardTextureSize:{value:Z},u_cardOpacity:{value:0}},vertexShader:Na,fragmentShader:PS,transparent:!0,depthTest:!1,depthWrite:!1,side:wn,blending:Ys,blendEquation:In,blendSrc:ci,blendDst:ci,blendEquationAlpha:In,blendSrcAlpha:ci,blendDstAlpha:ci,defines:{BONE_COUNT:Ms}}),Ee=new kt(ce,ye);Ee.frustumCulled=!1,Ee.renderOrder=100,Ee.visible=!1,z.add(Ee);const De=new Ti;x.add(De);const Je=new Ns;Je.positionAmplitude=2,Je.positionFrequency=1,Je._enableRotationNoise=!1;const Ye=Je.position;let Qe=0,V=1,te=typeof window<"u"?window.scrollY:0,ie=1;const pe=(we,We)=>{const Re=new io;for(const ht in we.attributes)Re.setAttribute(ht,we.attributes[ht]);we.index&&Re.setIndex(we.index);const je=new Float32Array(Ua);for(let ht=0;ht<Ua;ht++)je[ht]=ht;Re.setAttribute("a_instanceId",new yn(je,1)),Re.instanceCount=Ua;const lt=new Dt({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:Ye},u_time:{value:0}},vertexShader:AS,fragmentShader:RS,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ua,...We?{IS_WALL:!0}:{}}}),yt=new kt(Re,lt);return yt.frustumCulled=!1,De.add(yt),lt},Ue=pe(f,!1),Le=pe(m,!0),rt=await WS(x,{base:r,isMobile:n,sharedTime:Te.u_time}),At=new Dt({uniforms:{u_color:{value:new et(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ei}),It=new kt(new Ri(200,200),At);It.position.z=-80,It.renderOrder=-10,x.add(It);const dt=new Ti;x.add(dt);const cn=await zf(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);cn.wrapS=cn.wrapT=Xo,b.colorSpace=en,b.flipY=!1,b.wrapS=b.wrapT=Xo;const bt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:be.texture},u_greebleArmbTexture:{value:cn},u_greebleNormalTexture:{value:b},u_resolution:{value:new it(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new et(ws[0])},u_color2:{value:new et(lc[0])}},Or=(we,We,Re)=>{const je=new io;for(const Ot in we.attributes)je.setAttribute(Ot,we.attributes[Ot]);we.index&&je.setIndex(we.index);const lt=we.attributes.position.count;je.getAttribute("ao")||je.setAttribute("ao",new Xt(new Float32Array(lt).fill(1),1)),je.getAttribute("areaRatio")||je.setAttribute("areaRatio",new Xt(new Float32Array(lt),1)),je.getAttribute("height")||je.setAttribute("height",new Xt(new Float32Array(lt).fill(1),1)),je.getAttribute("cluster")||je.setAttribute("cluster",new Xt(new Float32Array(lt),1)),je.setAttribute("instancePos",cc(We.attributes.position)),je.setAttribute("instanceGridIds",cc(We.attributes.gridIds)),je.setAttribute("instanceAxis",cc(We.attributes.rotAxis)),je.instanceCount=We.attributes.position.count;const yt=new Dt({uniforms:bt,vertexShader:TS,fragmentShader:ES,side:wn,transparent:!1,depthWrite:!0,blending:Dr,defines:{GRID_SIZE:Fa,...Re?{IS_HD:!0}:{}}}),ht=new kt(je,yt);return ht.frustumCulled=!1,ht.renderOrder=Re?2:1,dt.add(ht),ht};Or(v,g,!1),o&&_&&p&&Or(_,p,!0);let zr=0,ii=0,ri=0,ur=A,Br=0,Hi=-80,hr=0;const Lt=new Ns;Lt.positionFrequency=.2,Lt.rotationFrequency=.15,Lt.positionAmplitude=0,Lt.rotationAmplitude=0;const Vi=new mu(new q,1,.65,1.3),pi=new mu(new q,1,.85,1.1),hs=Array.from({length:Be},()=>{const we=new Ns;return we.positionFrequency=.2,we.rotationFrequency=.6,we.positionAmplitude=12,we.rotationAmplitude=10,we}),oi=Float32Array.from({length:Be+1},(we,We)=>We===0?0:Math.random()*2),mi=new Float32Array(Be),h=new Float32Array(Be),y=new q,T=new Fn,D=new vt,I=new vt,F=new q,Y=new q,j=new Fn,$=new ni,ee=new q(1,1,1),J=new et,re=new et,xe=new q,Se=new q;let Pe=0,Ae=0,Me=0,ve=0,ot=.08;const Ke=.1;let wt=!1,pt=0,tt=0,Tt=0;window.addEventListener("pointermove",we=>{Pe=we.clientX/Math.max(window.innerWidth,1)*2-1,Ae=we.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{wt=!0},{passive:!0}),window.addEventListener("pointerup",()=>{wt=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{wt=!1},{passive:!0});const at=()=>{C.near=1,C.far=200,C.position.copy(P),C.up.set(0,1,0),C.lookAt(R),C.fov=ur,xe.set(0,0,-1).applyQuaternion(C.quaternion);let we=Se.copy(R).sub(C.position).dot(xe);const We=C.fov,Re=We+ri,je=Math.max(1,Math.min(170,Re));let lt=we*Math.tan(We/360*Math.PI/2)/Math.tan(je/360*Math.PI/2)-we;Number.isFinite(lt)||(lt=0),C.translateZ(lt),C.fov=We,we+=lt,C.translateZ(we*-1);const yt=n?ot*.35:ot,ht=Math.max(-1,Math.min(1,Ae))*yt,Ot=Math.max(-1,Math.min(1,-Pe))*yt;Me+=(ht-Me)*Ke,ve+=(Ot-ve)*Ke,$.set(Me,ve,0),j.setFromEuler($),C.quaternion.multiply(j),C.translateZ(we),C.updateProjectionMatrix()},Mt=we=>{if(Lt.update(we),Vi.update(we,Lt.position),F.copy(Lt.euler),pi.update(we,F),$.set(pi.value.x,pi.value.y,pi.value.z),j.setFromEuler($),I.compose(Vi.value,j,ee),D.compose(y,T,ee),D.multiply(I),D.decompose(F,j,Y),de.setXYZ(0,F.x,F.y,F.z),ge.setXYZW(0,j.x,j.y,j.z,j.w),de.needsUpdate=!0,ge.needsUpdate=!0,xl=1+Math.min(3.5,Vi.valueVel.length()*.2+pi.valueVel.length()*.2),E>.01&&!Zt&&!Hr){for(let We=0;We<Be;We++){const Re=hs[We];Re.positionFrequency=.2,Re.rotationFrequency=.6,Re.positionAmplitude=12,Re.rotationAmplitude=10,Re.update(we),D.compose(y,T,ee),D.multiply(Re.matrix),D.decompose(F,j,Y);const je=We/Math.max(Be-1,1),lt=me(E,je*.3,.7+je*.3,1,0,yS);Y.set(de.getX(0),de.getY(0),de.getZ(0)),F.lerp(Y,lt),$e.setXYZ(We,F.x,F.y,F.z),ke.setXYZW(We,j.x,j.y,j.z,j.w)}$e.needsUpdate=!0,ke.needsUpdate=!0}},Ie=document.getElementById("home-goal-tunnel-sticky")||((oh=i.closest)==null?void 0:oh.call(i,"#home-goal-tunnel-sticky"))||((sh=e==null?void 0:e.querySelector)==null?void 0:sh.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,nt=$u(e);let mt=0,$t=0,Wt=0,xt=0,_i=0,ta=0,kr=0,na=0,mo=0,Tn=0,Zu=0,Hr=!0,_n=!1,Zt=!1,fs=0,fr=0,xl=1,yl=0,Ku=performance.now(),ia=!1,ju=!1;const on=FS(w,x,C,{isMobile:n});let Ci=null;try{Ci=await YS(x,{base:r}),on.setGlassPass(Ci)}catch(we){console.warn("Broken glass failed to load",we)}const _o=()=>{var Ot;const we=(Ot=Ie==null?void 0:Ie.querySelector)==null?void 0:Ot.call(Ie,"[data-goal-screen-clip]"),We=Ie==null?void 0:Ie.classList.contains("is-windowed"),Re=We&&we?we:Ie;let je=(Re==null?void 0:Re.clientWidth)||window.innerWidth,lt=(Re==null?void 0:Re.clientHeight)||window.innerHeight;!We&&n&&window.visualViewport&&(je=Math.round(window.visualViewport.width)||je,lt=Math.round(window.visualViewport.height)||lt),C.aspect=je/Math.max(lt,1),at(),w.setSize(je,lt,!1),on.resize(je,lt),bt.u_resolution.value.set(je,lt);const yt=Math.max(1,Math.floor(je*.25)),ht=Math.max(1,Math.floor(lt*.25));(le.width!==yt||le.height!==ht)&&(le.setSize(yt,ht),se.setSize(yt,ht))};_o(),window.addEventListener("resize",_o);const Ju=(we,We,Re=100)=>{const je=we.attributes.position.array,lt=we.attributes.orient.array,yt=Math.min(Math.floor(We),Re-1),ht=Math.min(Math.ceil(We),Re-1),Ot=We-Math.floor(We),En=new q().fromArray(je,yt*3).lerp(new q().fromArray(je,ht*3),Ot),sn=new Fn().fromArray(lt,yt*4).slerp(new Fn().fromArray(lt,ht*4),Ot);return{p:En,q:sn}},ra=()=>{var Ut,Di;if(!e)return;const we=window.innerHeight,We=window.scrollY||0;if(We!==te&&(ie=We>te?1:-1,te=We),_i=nt.range("blackFrameIn").ratio,Wt=nt.range("blackTitle").ratio,xt=nt.range("blackTunnel").ratio,Ie!=null&&Ie.classList.contains("is-windowed")&&_o(),kr=nt.range("whiteTunnel").ratio,mt=nt.between("whiteTunnel","whiteFrameOut").ratio,na=nt.range("whiteFrameOut").ratio,ta=nt.range("whiteFrameBreak").ratio,Zu=nt.between("whiteTunnel","whiteFrameBreak").ratio,Tn=nt.between("whiteFrameBreak","astronautDrop").ratio,mo=((Ut=nt.range("astronautWait"))==null?void 0:Ut.ratio)??0,Tt=nt.between("whiteFrameBreak","astronautWait").ratio,Hr=Wt<1,_n=xt<1&&!Hr,Zt=mt<=1&&!_n&&!Hr,$t=Zt?Si(0,.15,Zu):1,on.sync({blackFrameInRatio:_i,blackTitleRatio:Wt,blackTunnelRatio:xt,whiteFrameRatio:kr,whiteTunnelWaitRatio:mo,astronautDropRatio:Tn,isWhiteTunnelActive:Zt,isBlackTunnelActive:_n,isMobile:n}),Ci){const zt=e.querySelector("#home-goal-image-out"),An=zt==null?void 0:zt.getBoundingClientRect(),Wi=An&&An.height>8?An.height:(Ie==null?void 0:Ie.clientHeight)||we,ms=me(na,0,1,1.15,1),Ml=me(na,0,1,-.12,0);Ci.updateFromScroll({whiteFrameBreakRatio:ta,astronautDropRatio:Tn,frameHeight:Wi,frameRotation:Ml,frameScale:ms})}Te.u_whiteTunnelRatio.value=mt,Te.u_showRatio.value=$t,Te.u_frameOutRatio.value=ta,Ue.uniforms.u_ratio.value=mt,Le.uniforms.u_ratio.value=mt,Ue.uniforms.u_ratioInverse.value=1-mt,Le.uniforms.u_ratioInverse.value=1-mt,Te.u_ambientColor.value.set(Zt&&Tn<1?"#6a7f94":"#566d80");const Re=new et(Zt&&Tn<1?"#ffffff":"#000000");At.uniforms.u_color.value.copy(Re),x.background=null,w.setClearColor(Re,on.clearAlpha),Te.u_bgColor.value.copy(Re),Ie&&!Ie.classList.contains("is-windowed")&&(Ie.style.background=Re.getStyle());const je=Ie==null?void 0:Ie.classList.contains("is-windowed");!(Ie==null?void 0:Ie.classList.contains("is-pinned"))||je?(document.documentElement.style.background="",document.body.style.background=""):Zt&&Tn<1?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):_n||Hr?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),De.visible=Zt&&Tn<1,dt.visible=_n,It.visible=!(Zt&&Tn<1);const yt=document.getElementById("header");yt&&((Ie==null?void 0:Ie.classList.contains("is-pinned"))?Zt&&Tn<1?yt.style.color="#000000":yt.style.color="#ffffff":yt.style.color="");const ht=e.dataset.goalPhase==="black-tunnel",Ot=e.dataset.goalPhase==="white";(_n&&!ht||Zt&&!Ot)&&on.markEfxSync();const En=Zt;for(const zt of He){const An=En?zt.userData.whiteMat:zt.userData.blackMat;zt.material!==An&&(zt.material=An)}E=_n?Si(.2,.4,xt):0,k.value=E;for(const zt of U)zt.visible=!Zt&&E>.01;let sn;if(Zt){const zt=mt<1?me(mt,0,1,0,79):me(Tn,0,1,79,99);sn=Ju(l,zt,100),sn.p.y-=(n?0:.4)*bS(Tn)}else{const zt=me(Math.max(_i,.001),0,1,.28,.4),An=Math.max(Wt,je?zt:0);sn=Ju(a,100*pu(Math.min(An,1)),100)}if(y.copy(sn.p),T.copy(sn.q),Lt.positionFrequency=.2,Lt.rotationFrequency=.15,Lt.positionAmplitude=0,Lt.rotationAmplitude=0,_n){const zt=xt;Lt.positionFrequency=.2+.5*zt,Lt.rotationFrequency=.15,Lt.positionAmplitude=5*zt,Lt.rotationAmplitude=60*zt}else Zt&&(Lt.positionFrequency=me(kr,0,.45,.5,.2),Lt.rotationFrequency=me(kr,0,.45,.4,.15),Lt.positionAmplitude=me(kr,0,.75,5,0),Lt.rotationAmplitude=me(kr,0,.75,15,0));z.visible=$t>.02;const un=window.innerHeight||1,Kt=(Di=Ie==null?void 0:Ie.querySelector)==null?void 0:Di.call(Ie,"[data-goal-screen-clip]"),si=Math.max(1,je&&(Kt==null?void 0:Kt.clientHeight)||(Ie==null?void 0:Ie.clientHeight)||un),hn=_i<1?_i:1-kr,Pi=je?Math.max(si*(n?1.55:1.95),un*(n?.62:.82)):si*(n?.72:.55),go=Jt.lerp(Pi,un,hn),Gi=P.distanceTo(R),ds=A/180*Math.PI,oa=Math.tan(ds/2)*Gi*2*(un/Math.max(go,1));ur=Math.atan(oa/2/Gi)*2/Math.PI*180,Zt?ri=me(mt,0,1,60,0):_n?(ri=Math.sin(xt*10+Qe)*(n?4.5:7.5)*Si(0,.2,xt),dt.position.z=-80*to(.2,0,xt)):(ri=me(_i,0,1,je?n?-16:-28:n?12:20,0),dt.position.z=-80),ot=.08*Si(.5,1,Wt)+.02,mt>0&&(ot*=me(nt.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),ot=me(mo,0,.1,ot,.05),tt=(1-pt)*ie*2.5*me(_i,0,.5,0,1)*me(mo,0,.25,1,0),at(),Ve.u_frameIn.value=_i,Ve.u_sunFactor.value=_n?1-Si(.1,.2,xt):1,Ve.u_blackTunnelRatio.value=_n?Si(.1,.3,xt):0,Ve.u_endRatio.value=_n?Si(.65,.9,xt):0,Ve.u_offsetZ.value=bt.u_offsetZ.value;const sa=me(Tn,1,0,.2,1)*(ta>0?1:0);Te.u_tintColor.value.setStyle("#2533c2").multiplyScalar(sa);const ps=Ie.getBoundingClientRect();ia=ps.bottom>0&&ps.top<we,ia&&!ju&&Hr&&(fs=0,fr=0),ju=ia,e.dataset.goalPhase=Zt?"white":_n?"black-tunnel":_i<.98||Ie!=null&&Ie.classList.contains("is-windowed")?"window":"title"},Vp=we=>{if(!_n){bt.u_showRatio.value=0,on.setEfxOffset(0,0);return}bt.u_showRatio.value=gS(to(0,.1,xt));const We=bt.u_outBloomFromToStrength.value;We.z=me(xt,.65,.75,0,.2),We.z=me(xt,.75,.85,We.z,.15),We.z=me(xt,.85,1,We.z,.15),We.x=me(xt,.75,.85,20,60),We.x=me(xt,.9,1,We.x,30);const Re=me(xt,.6,1,0,1,xS);bt.u_blackTunnelTransformRatio.value=Re;const je=ie*we;zr+=je*to(.1,.3,xt)*me(Re,0,.25,1,.5),ii+=je*me(Re,0,.25,1.5,1);const lt=zr,yt=Math.floor(lt),ht=lt-yt,Ot=(yt+Np(ht))*Fa+ii*Fa+xt*Fa*10,En=-80*to(.2,0,xt);let sn=En-Hi,un=Ot-Br;(Math.abs(un)>8||Math.abs(sn)>20)&&(un=0,sn=0),hr=sn+un,Hi=En,Br=Ot,dt.position.z=En,bt.u_offsetZ.value=Ot,Ve.u_offsetZ.value=Ot,bt.u_time.value=Qe;const Kt=ws.length*me(xt,.2,1,0,1),si=Math.floor(Kt),hn=Math.min(Math.ceil(Kt),ws.length-1),go=Kt-si>.5?1:0;J.set(ws[si]),re.set(ws[hn]),J.lerp(re,go),bt.u_color1.value.copy(J),J.set(lc[si]),re.set(lc[hn]),J.lerp(re,go),bt.u_color2.value.copy(J);const Gi=n?.45:1;on.setEfxOffset(hr*me(xt,0,.2,0,1)*Gi,hr*Re*.01*Gi),on.setEfxAmount(me(xt,0,.25,.35,.85)*(n?.35:1)),ri=Math.sin(xt*10+Qe)*(n?4.5:7.5)*Si(0,.2,xt)};let Sl=0;const Gp=we=>{if(!Zt){rt.update({whiteTunnelWaitRatio:0,aspect:C.aspect}),Sl=mt;return}Je.update(we),Ue.uniforms.u_time.value=Qe,Le.uniforms.u_time.value=Qe,Ue.uniforms.u_fbm.value=Ye,Le.uniforms.u_fbm.value=Ye;let We=mt-Sl;Math.abs(We)>.08&&(We=0);const Re=n?0:.7,je=Jt.clamp(-We*me(mt,0,.9,500,0,du)*Re,-1,1),lt=Jt.clamp(-We*me(mt,0,.8,45,0,du)*Re,-1,1);on.setEfxOffset(je,lt),on.setEfxAmount(n?0:me(mt,.75,1,1,0)),Sl=mt;const yt=Zt&&Tn<1?"#ffffff":"#000000",ht=n?Math.max(C.aspect,.95):Math.max(C.aspect,.01);rt.update({whiteTunnelWaitRatio:mo,aspect:ht,bg:yt})},Qu=()=>ra();window.addEventListener("scroll",Qu,{passive:!0}),ra();const eh=we=>{var ps;const We=Math.min(.05,Math.max(0,we||.016666666666666666));if(Ku=performance.now(),!ia){if(Ie){const Ut=Ie.getBoundingClientRect();Ut.bottom>0&&Ut.top<window.innerHeight&&on.render()}return}pt+=((wt?1:0)-pt)*.1,V=me(pt,0,1,1,.3)*We,V=me(_i,0,1,We,V),V=me(Tt,.5,.75,V,We),Qe+=V,Te.u_time.value=Qe,tt=(1-pt)*ie*2.5*me(_i,0,.5,0,1)*me(mo,0,.25,1,0),Vp(V),Gp(V),Mt(V),_n&&(ri=Math.sin(xt*10+Qe)*7.5*Si(0,.2,xt)),at();const Re=Tn,je=me(Re,0,.1,0,1)*me(Re,.9,1,1,0);Te.u_loopLinearBlend.value=je;const lt=me(Re,.9,1,0,1,pu);Ce=lt>0;let yt,ht,Ot,En=!0;if(Re<.5)fr=0,yt=Wt<.08?Si(-.3,1,Wt)*.25:Si(-.3,1,Wt)*.75,ht=0,Ot=89,ye.uniforms.u_cardOpacity.value=0;else{yt=me(Re,.9,1,0,1),ht=140,Ot=Math.min(O-1,287);const Ut=Math.min(2,Math.max(0,.5+Math.max(0,ae.getFbm(Qe*8,3)+.5)*4));ye.uniforms.u_cardOpacity.value=Ut*lt,Re<1?(fr=Math.max(0,fr),En=!1):fr=0}fr===0&&(fs+=V*yt*xl),je===1&&(fs=0);const sn=Ot-ht+1,un=oi[0];let si=(un+fs)*60%sn,hn=Math.floor(si),Pi=(hn+1)%sn+ht;hn+=ht,Pi<hn&&(En||(Pi=hn=ht,fs=-un,fr=Number.POSITIVE_INFINITY));const go=si-Math.floor(si);Oe.setXYZ(0,hn,Pi,En||Pi>=hn?go:0),Oe.needsUpdate=!0;const Gi=me(na+Re,.9,2,90,139,wS),ds=Math.floor(Gi),oa=Math.ceil(Gi),sa=Gi-ds;K.setXYZ(0,ds,oa,sa),K.needsUpdate=!0,Ee.visible=Re>=.95&&$t>.02,ne=Ce?ne+V:0;{const Ut=Z.x,Di=Z.y,zt=Math.floor(10*ne%(Ut*(Di+1))),An=zt/(Ut*(Di+1)),Wi=to(0,.15,An)*to(1,.9,An);Te.u_faceLedLight.value=Wi,ye.uniforms.u_cardUvOffset.value.set(zt%Ut/Ut,(Di-Math.floor(zt/Ut))/Di)}if(Te.u_cardPosition.value.set(de.getX(0),de.getY(0)+.9,de.getZ(0)),E>.01&&!Zt&&!Hr){for(let Ut=0;Ut<Be;Ut++){mi[Ut]=(mi[Ut]+.2*V)%1,fr===0&&(h[Ut]+=V*yt*xl);const An=(Jt.lerp(0,oi[Ut+1],E)+h[Ut])*60%sn;let Wi=Math.floor(An),ms=(Wi+1)%sn+ht;Wi+=ht,ms<Wi&&!En&&(ms=Wi=ht);const Ml=An-Math.floor(An);qe.setXYZ(Ut,Wi,ms,Ml),ze.setXYZ(Ut,ds,oa,sa)}qe.needsUpdate=!0,ze.needsUpdate=!0}if((ps=on.setScrollVelocity)==null||ps.call(on,Math.abs(tt)+Math.abs(ie)*.5),_n){const Ut=bt.u_resolution.value.clone();De.visible=!1,It.visible=!1,z.visible=$t>.02,bt.u_feedbackTexture.value=be.texture,bt.u_resolution.value.set(Fe.width,Fe.height),w.setRenderTarget(Fe),w.setClearColor(0,0),w.clear(),w.render(x,C),w.setRenderTarget(null),bt.u_resolution.value.copy(Ut);const Di=be;be=Fe,Fe=Di,bt.u_feedbackTexture.value=be.texture,Ve.u_blackTunnelTexture.value=be.texture,It.visible=!0}w.setClearColor(Te.u_bgColor.value,on.clearAlpha),on.render()},th=we=>{yl=requestAnimationFrame(th);const We=Math.min(.05,(we-Ku)/1e3);we-nh>50&&eh(We)};let nh=0;const Wp=we=>{nh=performance.now(),eh(we)};return yl=requestAnimationFrame(th),requestAnimationFrame(()=>{_o(),ra(),on.render()}),{resize:_o,updateScroll:ra,tickFrame:Wp,getAutoScrollSpeed:()=>tt,getGlassRatio:()=>(Ci==null?void 0:Ci.ratio)??0,getAstronautDropRatio:()=>Tn,getWhiteTunnelRatio:()=>mt,destroy(){cancelAnimationFrame(yl),window.removeEventListener("resize",_o),window.removeEventListener("scroll",Qu),Ci==null||Ci.dispose(),le.dispose(),se.dispose(),on.destroy(),w.dispose()}}}function ZS(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=$u(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(R=>{R._offsetX=0});return}b.forEach(R=>{R.style.transform="translateZ(0)"});let S=g;b.forEach(R=>{const A=R.getBoundingClientRect();R._domRect=A,S-=A.width});let x=0;const P=S/(b.length-1);b.forEach(R=>{R._offsetX=-R._domRect.left+_+x,x+=R._domRect.width+P})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=me(_,0,.25,0,1);r.progress();const S=window.visualViewport,x=Math.round((S==null?void 0:S.height)||window.innerHeight),P=Math.round((S==null?void 0:S.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const N=i.getBoundingClientRect(),O=window.scrollY||0,W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+O,H=O>=W-1&&N.bottom>x,X=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",H),u&&(u.style.height=H?`${x}px`:"0px"),H&&!X?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!H&&X&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.height="",window.dispatchEvent(new Event("resize"))),H&&(t.style.top=`${P}px`,t.style.height=`${x}px`),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let R=me(v,a,l,0,1);const A=R>0&&R<1;let C=me(R,.5,1,1,o()?9:12,pu);C*=me(R,0,.15,.85,1,MS);let w=me(R,.9,1,1,0);w*=me(R,0,.05,0,1),w*=me(g,0,.12,1,0);const M=me(R,.4,.6,0,1,Np);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(w),e.style.transform=`translate3d(-50%, -50%, 0) scale(${C})`,e.style.visibility=A&&w>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(N=>{const O=N._offsetX||0;N.style.transform=`translateX(${M*O}px)`}),s){const N=me(g,.02,.15,1,0);s.style.opacity=String(N),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const L=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":L<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Oa(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function KS(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function jr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function jS(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=jr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=jr(document.getElementById("home-reel-desc"),2),l=jr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(Q=>{Q.style.transform="translate3d(0, 100%, 0)"}),v.forEach(Q=>{Q.style.transform="translate3d(0, 100%, 0)",Q.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(Q=>{Q.style.overflow="hidden",Q.style.display="block",Q.style.position="relative"}),f=[...Oa(r,"word"),...Oa(o,"word")],f.forEach(Q=>{Q.style.position="relative",Q.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Oa(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),S=jr(document.getElementById("home-featured-title"),2),x=jr(document.getElementById("home-featured-disclaimer"),2),P=jr(document.getElementById("home-featured-cta"),1);let R=[],A=[],C=!0;const w=()=>{C=!1,S&&(S._time=0,S._animating=!1),x&&(x._time=0,x._animating=!1),P&&(P._time=0,P._animating=!1),i()||(A.forEach(Q=>{Q.style.transform="translate3d(0, 100%, 0)"}),R.forEach(Q=>{Q.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",R=KS(S),x){const Q=x.textContent.trim();x.textContent="";const de=document.createElement("div");de.className="line",de.textContent=Q,de.style.transform="translate3d(0, 100%, 0)",de.style.willChange="transform";const ge=document.createElement("div");ge.style.position="relative",ge.style.overflow="hidden",ge.appendChild(de),x.appendChild(ge),A=[de]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),w()}})();const L=jr(document.getElementById("home-goal-title"),2);let N=[];L&&(L.style.overflow="hidden",N=Oa(L,"word"),N.forEach(Q=>{Q.style.transform="translate3d(0, 100%, 0)",Q.style.opacity="0"}));let O=0,G=!1,W=0;const H=Q=>{if(!t||!e)return;if(!xn(e).isActive){g=!0;return}g&&(g=!1,_());const ge=xn(t),Oe=xn(s||a),oe=window.innerHeight*.1;if(t._time=fn(t._time+(t._animating?Q:-Q),0,2),a&&(a._time=fn(a._time+(a._animating?Q:-Q),0,2)),l&&(l._ratio=Zn(l._ratio+(l._animating?Q:-Q))),ge.screenRatio>-1&&(t._animating=!0,i()?f.forEach(le=>{le.style.transform="translate3d(0, 0, 0)"}):f.forEach((le,se)=>{let be,Fe;se<2?(be=me(t._time-Math.abs(2-se)/10,.5,1.2,-m,0,ft),Fe=me(t._time-se/10,0,1,100,0,ft)):(be=0,Fe=me(t._time-se/10,0,1,-100,0,ft)),le.style.transform=`translate3d(${be}px, ${Fe}%, 0)`}),n)){const le=ge.showScreenOffset*-oe*.5;n.style.transform=`translate3d(0, ${le}px, 0)`}if(Oe.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const le=Oe.showScreenOffset*-oe*1.5;if(a&&(a.style.transform=`translate3d(0, ${le}px, 0)`,i()?v.forEach(se=>{se.style.opacity="1",se.style.transform="translate3d(0, 0, 0)"}):v.forEach((se,be)=>{const Fe=me(a._time-be/100,0,1,.1,1,sl),Te=me(a._time-be/100,0,1,100,0,sl);se.style.opacity=String(Fe),se.style.transform=`translate3d(0, ${Te}%, 0)`})),l){const se=Oe.showScreenOffset*-oe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${se}px) translate3d(0, ${me(l._ratio,0,1,150,0,ft)}%, 0) rotate(${me(l._ratio,0,1,10,0,ft)}deg)`,l.style.opacity=String(ft(l._ratio))):(l.style.transform=`translateY(${se}px)`,l.style.opacity="1")}}if(c){const le=xn(c),se=Zn(me(le.showScreenOffset,.05,.85,0,1,ft));c.style.opacity=String(se),c.style.transform=`translate3d(0, ${me(se,0,1,80,0,ft)}px, 0) scale(${me(se,0,1,.96,1,ft)})`}if(u){const le=xn(u);W=Zn(me(le.showScreenOffset,0,.7,0,1,ft)),u.style.opacity=String(.4+W*.6),u.style.transform=`translate3d(0, ${me(W,0,1,60,0,ft)}px, 0) scale(${me(W,0,1,.94,1,ft)})`,G=W>.9,O=fn(O+(G?Q:-Q*2),0,1.4),d.forEach((se,be)=>{const Fe=me(O-be/10,0,.6,0,1,ft),Te=me(O-be/10,0,.6,0,180,ft);se.style.transform=`scale(${Fe}) rotate(${Te}deg)`,se.style.display="inline-block"})}},X=Q=>{if(!b||!S)return;if(xn(b).isActive){C&&w();const ge=xn(S),Oe=xn(x),K=xn(P);S._time=fn(S._time+(S._animating?Q:-Q),0,2),x&&(x._time=fn(x._time+(x._animating?Q:-Q),0,2)),P&&(P._time=fn(P._time+(P._animating?Q:-Q),0,1)),ge.screenRatio>-1&&(S._animating=!0,i()?R.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):R.forEach((oe,le)=>{const se=me(S._time*1.5-le/20,0,1,1,0,ft),be=me(S._time*1.5-le/20,0,1,10,0,ft);oe.style.transform=`translate3d(0, ${se}em, 0) rotate(${be}deg)`})),Oe.screenRatio>-1&&x&&(x._animating=!0,i()?A.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):A.forEach((oe,le)=>{const se=me(x._time-le/20,0,1,100,0,ft);oe.style.transform=`translate3d(0, ${se}%, 0)`})),K.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${me(P._time,0,1,150,0,ft)}%, 0) rotate(${me(P._time,0,1,10,0,ft)}deg)`,P.style.opacity=String(ft(P._time))))}else C=!0},B=Q=>{if(!L)return;xn(L).screenRatio>-1&&(L._animating=!0),L._time=fn(L._time+(L._animating?Q:-Q),0,2),N.forEach((ge,Oe)=>{const K=me(L._time-Oe/20,0,1,0,1,ft),oe=me(L._time-Oe/20,0,1,100,0,ft);ge.style.opacity=String(K),ge.style.transform=`translate3d(0, ${oe}%, 0)`})},ue=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ue),{update(Q){H(Q),X(Q),B(Q)},destroy(){window.removeEventListener("resize",ue)}}}const kf=28,JS=4,QS=8;function Hf(){return window.innerWidth<812}function eM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var C,w;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((C=s==null?void 0:s.textContent)==null?void 0:C.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(M=>{const L=document.createElement("div");if(L.className="project-item-line-2-inner-list",L.style.transform="translateY(-400%)",M===" ")L.style.width="0.3em";else for(let N=0;N<4;N++){const O=document.createElement("span");O.textContent=M,L.appendChild(O)}a.appendChild(L),d.push(L)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,S=!1,x=0,P=0,R=0,A=0;return Hf()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(M){const L=xn(t),N=L.ratio>-1&&L.ratio<1;N&&(S=!0),S&&(_+=M);const O=Zn(me(_,0,.85,0,1,ft)),G=me(O,0,1,90,0,ft);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${G}px, 0)`,s&&N){p+=M;const W=Math.min(c.length,Math.floor(kf*p)-JS),H=Math.min(c.length,Math.floor(kf*p));let X="";for(let B=0;B<Math.max(0,W);B++)X+=c[B];for(let B=0;B<H-Math.max(0,W);B++)X+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=X}if(N&&(b+=M*.8),g=Zn(g+(m?1:-1)*M*2.5),Hf())d.forEach((W,H)=>{const X=Zn(g-Math.abs(H-d.length-1)/100),B=me(X,0,1,0,1.5,ft);W.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((W,H)=>{const X=me(H,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),B=Zn(b-Math.cos(X)/QS),ue=me(B,0,1,500,0,vS),Q=Zn(g-Math.abs(H-d.length-1)/100),de=me(Q,0,1,0,1.5,ft);W.style.transform=`translate3d(${de}em, -${ue}%, 0)`}),l){const W=me(g,.3,1,0,1,ft);l.style.transform=`translateX(${W}em)`}if(v=fn(v+(f?1:-1)*M,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(R=(Math.random()-.5)*me(v,0,.6,1,0)*8,A=(Math.random()-.5)*me(v,0,.6,1,0)*8):(R*=.92,A*=.92),x+=(R-x)*.2,P+=(A-P)*.2;const W=me(v,0,1,1,1.06,ft);o.style.transform=`translate3d(${x}px, ${P}px, 0) scale(${W})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Vf=12,Gf=6,tM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nM=`
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
  float stepDist = dist / float(${Vf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Vf}; i++) {
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
  float numSampleInv = 1.0 / float(${Gf});
  for (int i = 0; i < ${Gf}; i++) {
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
`;function iM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function rM(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new _l({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(x){return n.remove(),console.warn("Featured WebGL unavailable",x),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Dn;const o=new us,s=new qu(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new Mr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=x=>{c.x=x.clientX,c.y=x.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new Ri(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(x,P)=>{var se,be,Fe;const R=x.dataset.id||((se=i[P])==null?void 0:se.id),A=x.querySelector(".project-item-main"),C=x.querySelector(".project-item-image img");C&&(C.style.opacity="0",C.setAttribute("aria-hidden","true"));const w=new et(x.dataset.colorBg||"#111111");let M,L;try{[M,L]=await Promise.all([a.loadAsync(`${l}${R}/home.webp`),a.loadAsync(`${l}${R}/home_depth.webp`)])}catch(Te){console.warn("Featured WebGL textures failed for",R,Te),C&&(C.style.opacity="1");return}M.colorSpace=Dn,M.wrapS=M.wrapT=Un,M.minFilter=gt,M.magFilter=gt,M.generateMipmaps=!1,L.colorSpace=en,L.wrapS=L.wrapT=Un,L.minFilter=gt,L.magFilter=gt,L.generateMipmaps=!1;const N=new it(((be=M.image)==null?void 0:be.width)||1024,((Fe=M.image)==null?void 0:Fe.height)||1024),O=new q(0,0,-1),G=new mu(new q,1,.6,2),W=iM(1,2.2,.7,3);W.target=0;const H=new it,X=new it,B={u_texture:{value:M},u_depthTexture:{value:L},u_colorBg:{value:w},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:N},u_domWH:{value:new it(1,1)},u_shiftXY:{value:H},u_focusPos:{value:O},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new it(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ue=new Dt({uniforms:B,vertexShader:tM,fragmentShader:nM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),Q=new kt(d,ue);Q.frustumCulled=!1,Q.renderOrder=10+P,Q.visible=!1,o.add(Q);let de=!1,ge=0,Oe=0,K=0;const oe=[0,.2,.3],le=Te=>{for(let Ve=0;Ve<oe.length;Ve++)if(Te<oe[Ve])return Ve;return oe.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{de=!0}),A==null||A.addEventListener("mouseleave",()=>{de=!1})),f.push({mesh:Q,uniforms:B,focusDyn:G,focusPos:O,zoomDyn:W,shiftXY:H,shiftXYTarget:X,index:P,main:A,dom:x,update(Te,Ve,Ge,st,z){const He=xn(x);if(!(He.ratio>-1&&He.ratio<1)||!A){Oe=0,Q.visible=!1,B.u_showRatio.value=0;return}Oe+=Te;const $e=A.getBoundingClientRect(),ke=Math.max(1,$e.width),qe=Math.max(1,$e.height);B.u_domWH.value.set(ke,qe),B.u_resolution.value.set(Ve,Ge),B.u_time.value=st,B.u_rippleStrength.value=Math.min(.15,z*.5),B.u_globalRadius.value=Math.min(ke,qe)*.04;const ze=me(Oe,0,2,0,1,sl),U=P%2-.5,E=(1-ze)*U*-Ve*.1,k=(1-ze)*U*.1;Q.position.set($e.left+ke*.5+E,Ge-($e.top+qe*.5),0),Q.scale.set(ke,qe,1),Q.rotation.z=-k;const Z=me(Oe,0,1.5,0,1,sl);B.u_showRatio.value=Z,Q.visible=Z>.01;const ae=ge;if(ge=fn(ge+(de?1:-1)*Te,0,1),ae<ge){const Ce=le(ae),fe=le(ge);fe!==Ce&&X.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(me(ge,0,.6,1,0)),fe===oe.length&&X.multiplyScalar(.5)}else X.multiplyScalar(.95);H.lerp(X,.2);const ne=G.target;if(de){const Ce=ge>0?me(ge,0,.3,1,0)*qe*.75:0;ne.x=(c.x-$e.left-ke*.5+Math.cos(st*20)*Ce)/ke*-qe,ne.y=(c.y-$e.top-qe*.5-Math.sin(st*30)*Ce)/qe*qe,ne.z=.5}else ne.x=0,ne.y=0,ne.z=-1;G.update(Te),O.copy(G.value),W.target=de?1:0,W.update(Te),B.u_zoomRatio.value=W.value,K=fn(K+(de?.75:-1)*Te,0,1),B.u_dofRangeOffset.value=Jt.lerp(0,-.5,K),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,b=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(x){_+=x;const P=window.scrollY,R=Math.abs(P-p)/Math.max(x,.001);p=P,b+=(Math.min(1,R*.002)-b)*.15;const C=xn(e).isActive;if(n.style.visibility=C?"visible":"hidden",!!C){for(const w of f)w.update(x,v,g,_,b);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(x=>{x.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function oM(){return window.innerWidth<812}function sM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function aM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&sM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,S=0;const x=R=>{var C;if(!R)return;const A=(C=R.play)==null?void 0:C.call(R);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:R=>{var L;if(!i)return;const A=e?xn(e):null,C=n?xn(n):null,w=oM(),M=w?!!(C!=null&&C.isActive):!!A&&A.showScreenOffset>0&&(C?C.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const N=(A==null?void 0:A.top)??0,O=(A==null?void 0:A.height)??1,G=window.innerHeight,W=N-(G-O)*.5,H=((C==null?void 0:C.top)??0)-(G-((C==null?void 0:C.height)??G))*.5;if(S=Zn(me(window.scrollY+N,W,H,0,1)),S=Zn(me((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,ft)),r&&(x(r),r.style.opacity=String(.35+S*.65)),t&&(x(t),t.style.opacity=String(1-S*.85)),e){const X=me(S,0,1,1,1.08,ft);e.style.transform=`scale(${X})`,e.style.opacity=String(me(S,.7,1,1,.15,ft))}if(n){const X=me(S,0,1,48,0,ft),B=me(S,0,1,.94,1,ft);n.style.transform=`translate3d(0, ${X}px, 0) scale(${B})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,b=S>.85}else(L=r==null?void 0:r.pause)==null||L.call(r),S=0,m=!1,v=!1,p=!1,b=!1;if(d=fn(d+(m?R:-R),0,1e9),f=Math.min(S,Zn(f+(v?R:-R))),u=d%l,o!=null&&o._splitted&&!w){const N=o._splitted.words;for(let O=0;O<N.length;O++){const G=N[O];c-u>l-1&&(G._randCharIndex=Math.round(Math.random()*(G._chars.length-1)));for(let W=0;W<G._chars.length;W++){const H=G._chars[W];let X=me(f-O/4-W/20,0,.6,200,0,ft);W===G._randCharIndex&&(X+=me(u-O/10,.5,1.3,0,-100,ft)),H._inner&&(H._inner.style.transform=`translate3d(0, ${X}%, 0)`)}}}c=u,g=fn(g+(p?R:-R*2),0,1.4),_=fn(_+(b?R:-R*2),0,1.4),s.forEach((N,O)=>{const G=me(g-O/10,0,.6,0,1,ft),W=me(g-O/10,0,.6,0,180,ft);N.style.transform=`scale(${G}) rotate(${W}deg)`}),a.forEach((N,O)=>{const G=me(_-O/10,0,.6,0,1,ft),W=me(_-O/10,0,.6,0,180,ft);N.style.transform=`scale(${G}) rotate(${W}deg)`})},destroy(){}}}const uc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],lM=`
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
`,cM=`
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
`,uM=`
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
`,hM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function fM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function dM(){const i=fM(),e="/zyrax-studio/",t=await Promise.all(uc.map(p=>Pn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new us,r=new Nn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let o;try{o=new _l({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}o.setClearColor(0,0);const s=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.5)),o.autoClear=!0;const a=[],l=new q,c=new q,u=new ls,d=new it;for(let p=0;p<uc.length;p++){const b=uc[p],S=t[p],x=document.querySelector(b.sectionSelector);if(!x||!S)continue;const P=new Ti,R=new Ti;P.add(R),n.add(P);const A=new Dt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:b.aoThreshold},u_color0:{value:new et(b.color0)},u_color1:{value:new et(b.color1)},u_radius:{value:.008}},vertexShader:lM,fragmentShader:cM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),C=new kt(S,A);C.frustumCulled=!1,C.renderOrder=200,R.add(C);const w=new Dt({uniforms:{u_color0:{value:new et(b.color0)},u_color1:{value:new et(b.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:uM,fragmentShader:hM,side:wn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new kt(new Ri(2,2),w);M.frustumCulled=!1,M.renderOrder=200,R.add(M);const L=S.attributes.position.array,N=S.attributes.position.count,O=new Float32Array(N);for(let G=0;G<N;G++)O[G]=L[G*3+2];a.push({data:b,sectionEl:x,container:P,inner:R,mesh:C,mat:A,circle:M,circleMat:w,lineRatioArray:O,cpAttr:S.attributes.CP,cdAttr:S.attributes.Cd,count:N,offsetY:0,framePos:new q,frameQuat:new Fn,frameScale:new q(1,1,1)})}let f=1,m=1;const v=()=>{f=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(f*f+m*m),b=m/p;d.set(f/m*b,b),r.fov=60,r.aspect=f/m,r.position.set(f/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-m/2,0),r.updateProjectionMatrix(),o.setSize(f,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var z;const{data:b,sectionEl:S,container:x,inner:P,mat:R,circle:A,circleMat:C,lineRatioArray:w,cpAttr:M,cdAttr:L,count:N}=p,G=xn(S).top+p.offsetY,W=m,H=b.scrollToRatioFactors;let X=Zn(-(G-H[0]*W)/(H[1]*W));X=SS(X);const B=f<=812,ue=.008*me(f,540,1920,2,1)*(B?.72:1),Q=f/d.x,de=m/d.y;let ge=b.margin.x,Oe=b.margin.y;B&&b.id==="goal"&&(ge=.42,Oe=-.35),P.position.x=ge*Q,P.position.y=Oe*de-G,P.scale.set(Q,de,1),p._showSmooth==null&&(p._showSmooth=X),p._showSmooth+=(X-p._showSmooth)*.18,R.uniforms.u_showRatio.value=p._showSmooth,R.uniforms.u_radius.value=ue;const K=(z=S.dataset)==null?void 0:z.goalPhase,oe=b.id==="goal"&&(K==="black-tunnel"||K==="white");x.position.copy(p.framePos),x.quaternion.copy(p.frameQuat),x.scale.copy(p.frameScale),x.updateMatrixWorld(!0),u.min.copy(b.boxMin),u.max.copy(b.boxMax),u.applyMatrix4(P.matrixWorld),x.visible=!oe&&u.max.y>-m&&u.min.y<0&&X>.001;let le=0,se=0;for(let He=0;He<N;He++)X>=w[He]&&(le=He,He===N-1?se=0:se=(X-w[He])/(w[He+1]-w[He]||1));const be=le,Fe=Math.min(le+1,N-1);l.fromArray(M.array,le*3),c.fromArray(M.array,Fe*3),l.lerp(c,se);const Te=L.array;let Ve=Te[be]*(1-se)+Te[Fe]*se;Ve=.9+.1*Ve;const Ge=Zn((X-(b.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(ue,ue,1),C.uniforms.u_ao.value=Math.min(1,Ve+1-Ge);let st=w[be]*(1-se)+w[Fe]*se;st=1-Math.pow(1-fn(st,0,1),2),C.uniforms.u_mixRatio.value=st},_=()=>{for(const p of a)g(p);o.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const b=a.find(S=>S.data.id==="goal");b&&(b.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:b=0,active:S=!1}={}){const x=a.find(L=>L.data.id==="goal");if(!x)return;if(!S){x.framePos.set(0,0,0),x.frameQuat.identity(),x.frameScale.set(1,1,1);return}const P=f*.5,R=-m*.5,A=new vt;A.makeTranslation(P,R,0);const C=new vt().makeRotationZ(-b),w=new vt().makeScale(p,p,1),M=new vt().makeTranslation(-P,-R,0);A.multiply(C).multiply(w).multiply(M),A.decompose(x.framePos,x.frameQuat,x.frameScale)},destroy(){window.removeEventListener("resize",v),o.dispose(),i.remove()}}}const Wf=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function pM(i,e,t,n){var A;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const C=Array.from(e.childNodes);e.appendChild(f),C.forEach(w=>f.appendChild(w))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const C=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==C&&(m.src=C)};v();let g="",_=null,p=(A=e.parentElement)==null?void 0:A.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const C=s||a;if(!C)return null;const w=C.getBoundingClientRect();return w.width<8||w.height<8?null:{left:w.left,top:w.top,width:w.width,height:w.height}},S=(C,w=0)=>{if(!C)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned");const M=window.innerHeight;p&&(p.style.height=`${M}px`),e.style.position="fixed",e.style.left=`${C.left}px`,e.style.top=`${C.top}px`,e.style.width=`${C.width}px`,e.style.height=`${C.height}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius=`${Math.min(C.width,C.height)*.055}px`,e.style.overflow="hidden",e.style.zIndex="3",e.style.transform=w?`rotate(${w}rad)`:"none",e.style.background="#000",e.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)",f&&(f.style.inset="unset",f.style.left=`${d.left*100}%`,f.style.top=`${d.top*100}%`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${d.width*100}%`,f.style.height=`${d.height*100}%`,f.style.borderRadius=`${Math.min(C.width,C.height)*.03}px`,f.style.background="#000"),m&&(m.style.position="absolute",m.style.inset="0",m.style.width="100%",m.style.height="100%",m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none")},x=()=>{var C;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background=""),m&&(m.style.opacity="0",m.style.visibility="hidden"),(C=n==null?void 0:n.setGoalFrame)==null||C.call(n,{active:!1})},P=()=>{const C=t.range("blackFrameShow").ratio,w=t.range("blackFrameIn").ratio,M=t.range("blackTunnel").ratio,L=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),O=window.innerHeight,G=N.bottom>0&&N.top<O;_=b();const W=G&&M<.02&&L<.01&&w<.999;if(W&&_){const H=fn(w,0,1),B={left:0,top:0,width:window.innerWidth,height:O},ue={left:_.left+(B.left-_.left)*H,top:_.top+(B.top-_.top)*H,width:_.width+(B.width-_.width)*H,height:_.height+(B.height-_.height)*H},Q=me(H,0,1,0,.35)*(1-H);S(ue,Q);const de=Math.max(me(C,0,.2,.35,1),N.top<O*.85?1:0);if(e.style.opacity=String(de),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(me(H,.05,.75,1,0)*de),m.style.visibility=H>.92?"hidden":"visible"),o&&(o.style.visibility=H>.98?"hidden":"visible"),u&&(u.style.visibility=H>.55?"":"hidden"),l&&!Wf){const ge=me(H,0,1,0,O*.12);l.style.transform=`translate3d(0, ${-ge}px, 0)`}if(c&&!Wf&&_){const ge=i.querySelector("#home-goal-context"),Oe=(ge==null?void 0:ge.getBoundingClientRect().top)??0,K=ge&&parseFloat(getComputedStyle(ge).paddingTop)||0,oe=_.top-Oe-K+_.height*.5;c.style.top=`${oe}px`,c.style.transform="translateY(-50%)"}if(n!=null&&n.setGoalFrame&&n.setGoalFrame({active:H>.01,scale:me(H,0,1,1,2.4),rotation:Q}),f&&H>.01){const ge=d.left*(1-H),Oe=d.top*(1-H),K=d.width+(1-d.width)*H,oe=d.height+(1-d.height)*H;f.style.inset="unset",f.style.left=`${ge*100}%`,f.style.top=`${Oe*100}%`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${K*100}%`,f.style.height=`${oe*100}%`}return g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:w,blackFrameShow:C,frameRect:_}}return g==="window"?(x(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),g="full",window.dispatchEvent(new Event("resize"))):!W&&o&&M>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden")),(!G||N.top>O*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:w,blackFrameShow:C,frameRect:_}},R=()=>{v(),P()};return window.addEventListener("resize",R),{update:P,destroy(){window.removeEventListener("resize",R),m==null||m.remove(),x()},getFrameRect:()=>_}}const Xf="/zyrax-studio/assets/audios/",mM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},_M={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function qf(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function gM(){const i=document.getElementById("header-right-sound-btn"),e={};for(const[x,P]of Object.entries(mM))e[x]=qf(`${Xf}${P}`,{loop:!0,volume:0});const t={};for(const[x,P]of Object.entries(_M))t[x]=P.map(R=>qf(`${Xf}${R}`,{loop:!1,volume:.85}));let n=!1,r=!1,o=null,s=null,a=null,l=1,c=1.2;const u={hover:0,click:0,focus:0,page:0,glass:0},d=async()=>{if(!r){r=!0;try{const x=e.generic;x.volume=0,await x.play(),x.pause(),x.currentTime=0}catch{r=!1}}},f=x=>{if(!n||!r)return;const P=t[x];if(!(P!=null&&P.length))return;const R=u[x]%P.length;u[x]=R+1;const A=P[R].cloneNode();A.volume=x==="focus"?.4:x==="glass"?1:.85,A.play().catch(()=>{})},m=x=>{n=!!x,i==null||i.classList.toggle("is-on",n),n?d().then(()=>{o||v("generic",.8)}):o&&e[o]&&(e[o].volume=0)},v=(x,P=1.2)=>{if(!e[x]||o===x)return;s=o,a=x,l=0,c=Math.max(.05,P),o=x;const R=e[x];R.volume=0,n&&r&&R.play().catch(()=>{})},g=x=>{if(r)if(a&&l<1){l=Math.min(1,l+x/c);const P=l*l*(3-2*l);s&&e[s]&&(e[s].volume=n?1-P:0,P>=1&&(e[s].pause(),e[s].currentTime=0)),e[a]&&(e[a].volume=n?P:0,n&&e[a].paused&&e[a].play().catch(()=>{})),P>=1&&(s=null,a=null)}else o&&e[o]&&(e[o].volume=n?1:0,n&&e[o].paused&&e[o].play().catch(()=>{}))};let _=0;const p=x=>{n&&(x==="window"?v("generic",1):x==="title"||x==="black-tunnel"?v("cinematic_0",1.4):x==="white"?v("cinematic_3",1.6):v("generic",1.2))},b=({blackFrameInRatio:x=0,blackTunnelRatio:P=0,whiteTunnelRatio:R=0,astronautDropRatio:A=0}={})=>{n&&(x>.5&&P===0||P>0&&R===0?(_=0,v("cinematic_0",.8)):R>0&&A<=.8?v("cinematic_3",.8):R>0&&A>.8&&v("generic_end",1),A===0?_=1:_===1&&(f("glass"),_=2))};i==null||i.addEventListener("click",async()=>{await d(),m(!n),f("click")}),document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(x=>{x.addEventListener("mouseenter",()=>f("hover")),x.addEventListener("click",()=>f("click"))});const S=()=>{d(),window.removeEventListener("pointerdown",S)};return window.addEventListener("pointerdown",S,{passive:!0}),{update:g,syncGoalPhase:p,syncTunnelAudio:b,playSfx:f,setEnabled:m,get enabled(){return n},destroy(){Object.values(e).forEach(x=>{x.pause(),x.src=""})}}}const Bo=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,vl=()=>{var e;const i=((e=window.visualViewport)==null?void 0:e.height)||window.innerHeight;document.documentElement.style.setProperty("--vh",`${i*.01}px`)};vl();window.addEventListener("resize",vl);var jf;(jf=window.visualViewport)==null||jf.addEventListener("resize",vl);var Jf;(Jf=window.visualViewport)==null||Jf.addEventListener("scroll",vl);const rr=new tm({duration:Bo?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!Bo,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:Bo?.9:.82,touchMultiplier:Bo?1:1.1});window.lenis=rr;let bs=0,Ts=0,Os=!1,Bp=0;window.addEventListener("wheel",()=>{Bp=performance.now(),Os=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Os=!0},{passive:!0});const vM="/zyrax-studio/assets/projects/",Yf=document.getElementById("project-list");Yf&&(Yf.innerHTML=Qd.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${vM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const xM=document.getElementById("hero-canvas"),yM=document.getElementById("home-hero-visual-container"),wr=document.getElementById("home-hero"),hc=document.getElementById("home-hero-title"),fc=document.getElementById("home-hero-visual-container"),$f=document.getElementById("home-hero-scroll-container"),Ln=document.getElementById("home-goal"),SM=document.getElementById("goal-tunnel-canvas"),MM=document.getElementById("home-goal-tunnel-title"),kp=document.getElementById("home-goal-tunnel-sticky"),wM=ZS(Ln,MM,kp),bM=Ln?$u(Ln):null,ll=gM();let Ct=null,Zf="";const TM=jS(),EM=eM(),AM=aM();let hi=null,$a=null;const RM=Ln?pM(Ln,kp,bM,{setGoalFrame:(...i)=>{var e;return(e=hi==null?void 0:hi.setGoalFrame)==null?void 0:e.call(hi,...i)}}):{update(){}};let Kf=performance.now();Uu.ticker.add(i=>{var n,r,o,s;const e=performance.now(),t=Math.min(.05,(e-Kf)/1e3);if(Kf=e,!Bo&&(Ct!=null&&Ct.getAutoScrollSpeed&&(bs=Ct.getAutoScrollSpeed()),e-Bp>80&&Math.abs(bs)>.01&&(Os=!1),Ts+=Math.abs(bs)>0&&!Os?t:-1,Ts=Math.max(0,Math.min(1,Ts)),!Os&&Ts>0&&Math.abs(bs)>.01)){const l=window.innerHeight,c=bs*l*t*Ts*.55,u=(rr.animatedScroll??rr.scroll??window.scrollY)+c;rr.scrollTo(u,{immediate:!0,force:!0})}rr.raf(i*1e3),TM.update(t),EM.update(t),$a==null||$a.update(t),AM.update(t),hi==null||hi.update(),(n=Ct==null?void 0:Ct.tickFrame)==null||n.call(Ct,t),ll.update(t),Ct!=null&&Ct.getAstronautDropRatio&&ll.syncTunnelAudio({blackFrameInRatio:((r=Ln==null?void 0:Ln.dataset)==null?void 0:r.goalPhase)==="window"?0:1,blackTunnelRatio:((o=Ln==null?void 0:Ln.dataset)==null?void 0:o.goalPhase)==="black-tunnel"?1:0,whiteTunnelRatio:((s=Ct.getWhiteTunnelRatio)==null?void 0:s.call(Ct))??0,astronautDropRatio:Ct.getAstronautDropRatio()??0})});Uu.ticker.lagSmoothing(0);rr.on("scroll",()=>{var o,s;wM.updateScroll(),RM.update(),Ct==null||Ct.updateScroll(),hi==null||hi.update();const i=((o=Ln==null?void 0:Ln.dataset)==null?void 0:o.goalPhase)||"";if(i&&i!==Zf&&(Zf=i,ll.syncGoalPhase(i)),Ct!=null&&Ct.getAstronautDropRatio&&ll.syncTunnelAudio({whiteTunnelRatio:((s=Ct.getWhiteTunnelRatio)==null?void 0:s.call(Ct))??0,astronautDropRatio:Ct.getAstronautDropRatio()??0}),!wr)return;const e=wr.getBoundingClientRect(),t=window.innerHeight,n=Math.max(0,Math.min(1,-e.top/Math.max(e.height,1))),r=Math.max(0,Math.min(1,(t-e.bottom)/t));hc&&(hc.style.transform=`translate3d(0, ${n*-12}vh, 0)`,hc.style.opacity=String(Math.max(0,1-n*1.2))),fc&&(fc.style.transform=`translate3d(0, ${n*18}vh, 0) scale(${1-n*.08})`,fc.style.opacity=String(Math.max(0,1-Math.max(n,r)*.85))),$f&&($f.style.opacity=String(Math.max(0,1-n*2)))});dM().then(i=>{hi=i}).catch(i=>console.error("Scroll lines failed",i));$S(SM,Ln).then(i=>{Ct=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{mS(xM,yM).then(()=>wr==null?void 0:wr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),wr==null||wr.classList.add("is-in")})});Bo||rM(Qd).then(i=>{$a=i}).catch(i=>console.error("Featured WebGL failed",i));function Hp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}Hp(document.getElementById("home-hero-title"));Hp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const CM=document.querySelectorAll(".home-hero-scroll-container-cross");CM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const dc=document.getElementById("header"),pc=document.getElementById("header-container"),Tr=document.getElementById("header-background"),mc=document.getElementById("header-menu"),$o=document.getElementById("header-right-menu-btn");let er=!1;const ea=i=>{er=!!i,dc==null||dc.classList.toggle("--menu-opened",er),pc==null||pc.classList.toggle("--opened",er),Tr==null||Tr.classList.toggle("--opened",er),mc==null||mc.classList.toggle("--opened",er),$o==null||$o.classList.toggle("--opened",er),Tr&&(Tr.style.opacity=er?window.innerWidth>=1e3?"0.2":"1":"0")};$o==null||$o.addEventListener("click",i=>{i.stopPropagation(),ea(!er)});Tr==null||Tr.addEventListener("click",()=>ea(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");ea(!1),t==="contact"?(e.preventDefault(),rr.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),rr.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!er)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||ea(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&ea(!1)});var Qf;(Qf=document.querySelector("[data-reel]"))==null||Qf.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var ed;(ed=document.querySelector("#end-bottom"))==null||ed.addEventListener("click",i=>{i.preventDefault(),rr.scrollTo("#footer-section")});
