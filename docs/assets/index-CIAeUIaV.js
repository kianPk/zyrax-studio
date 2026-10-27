var Up=Object.defineProperty;var Fp=(i,e,t)=>e in i?Up(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>Fp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var ju="1.3.27";function Hf(i,e,t){return Math.max(i,Math.min(e,t))}function Np(i,e,t){return(1-t)*i+t*e}function Op(i,e,t,n){return Np(i,e,1-Math.exp(-t*n))}function zp(i,e){return(i%e+e)%e}var Bp=class{constructor(){Ge(this,"isRunning",!1);Ge(this,"value",0);Ge(this,"from",0);Ge(this,"to",0);Ge(this,"currentTime",0);Ge(this,"lerp");Ge(this,"duration");Ge(this,"easing");Ge(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Hf(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Op(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function kp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Hp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ge(this,"width",0);Ge(this,"height",0);Ge(this,"scrollHeight",0);Ge(this,"scrollWidth",0);Ge(this,"debouncedResize");Ge(this,"wrapperResizeObserver");Ge(this,"contentResizeObserver");Ge(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ge(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ge(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=kp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Vf=class{constructor(){Ge(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Vp=100/6,sr={passive:!1};function Ju(i,e){return i===1?Vp:i===2?e:1}var Gp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ge(this,"touchStart",{x:0,y:0});Ge(this,"lastDelta",{x:0,y:0});Ge(this,"window",{width:0,height:0});Ge(this,"emitter",new Vf);Ge(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ge(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ge(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ge(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Ju(n,this.window.width),o=Ju(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ge(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,sr),this.element.addEventListener("touchstart",this.onTouchStart,sr),this.element.addEventListener("touchmove",this.onTouchMove,sr),this.element.addEventListener("touchend",this.onTouchEnd,sr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,sr),this.element.removeEventListener("touchstart",this.onTouchStart,sr),this.element.removeEventListener("touchmove",this.onTouchMove,sr),this.element.removeEventListener("touchend",this.onTouchEnd,sr)}};const Qu=i=>Math.min(1,1.001-2**(-10*i));var Wp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:y=!1,autoToggle:L=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:R=A,stopInertiaOnNavigate:b=!1,respectReducedMotion:w=!0}={}){Ge(this,"_isScrolling",!1);Ge(this,"_isStopped",!1);Ge(this,"_isLocked",!1);Ge(this,"_preventNextNativeScrollEvent",!1);Ge(this,"_resetVelocityTimeout",null);Ge(this,"_rafId",null);Ge(this,"_isDraggingSelection",!1);Ge(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ge(this,"isTouching");Ge(this,"isIos");Ge(this,"time",0);Ge(this,"userData",{});Ge(this,"lastVelocity",0);Ge(this,"velocity",0);Ge(this,"direction",0);Ge(this,"options");Ge(this,"targetScroll");Ge(this,"animatedScroll");Ge(this,"animate",new Bp);Ge(this,"emitter",new Vf);Ge(this,"dimensions");Ge(this,"virtualScroll");Ge(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ge(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ge(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ge(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ge(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ge(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,M,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((M=v.hasAttribute)==null?void 0:M.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ge(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ge(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=ju,window.lenis||(window.lenis={}),window.lenis.version=ju,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Qu:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:M,autoRaf:S,anchors:y,autoToggle:L,allowNestedScroll:C,naiveDimensions:R,stopInertiaOnNavigate:b,respectReducedMotion:w},this.dimensions=new Hp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Gp(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?y.left:y.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=Hf(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=Qu:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,o=["auto","overlay","scroll"].includes(C.overflowX),s=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,M,S,y,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,M=e,S=o,y=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,M=t,S=s,y=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(M>0?_<p:_>0)&&S&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?zp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Gi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Gf(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ns={duration:.5,overwrite:!1,delay:0},au,an,Ft,li=1e8,At=1/li,lc=Math.PI*2,Xp=lc/4,qp=0,Wf=Math.sqrt,Yp=Math.cos,$p=Math.sin,rn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},lu=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},In=function(e){return e!==!1},cu=function(){return typeof window<"u"},na=function(e){return Vt(e)||rn(e)},Xf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Zp=/random\([^)]+\)/g,Kp=/,\s*/g,eh=/(?:-?\.?\d|\.)+/gi,qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yf=/[+-]=-?[.\d]+/,jp=/[^,'"\[\]\s]+/gi,Jp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Ti,cc,uu,Jn={},Ga={},$f,Zf=function(e){return(Ga=Xo(e,Jn))&&zn},hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Os=function(e,t){return!t&&console.warn(e)},Kf=function(e,t){return e&&(Jn[e]=t)&&Ga&&(Ga[e]=t)||Jn},zs=function(){return 0},Qp={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},em={suppressEvents:!0},fu={},wr=[],uc={},jf,Gn={},ml={},th=30,Ia=[],du="",pu=function(e){var t=e[0],n,r;if(Ii(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ia.length;r--&&!Ia[r].targetTest(t););n=Ia[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xd(e[r],n)))||e.splice(r,1);return e},io=function(e){return e._gsap||pu(ci(e))[0]._gsap},Jf=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():lu(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},No=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},tm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Wa=function(){var e=wr.length,t=wr.slice(0),n,r;for(uc={},wr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},mu=function(e){return!!(e._initted||e._startAt||e.add)},Qf=function(e,t,n,r){wr.length&&!an&&Wa(),e.render(t,n,!!(an&&t<0&&mu(e))),wr.length&&!an&&Wa()},ed=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jp).length<2?t:rn(e)?e.trim():e},td=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Xo=function(e,t){for(var n in t)e[n]=t[n];return e},nh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Xa=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},As=function(e){var t=e.parent||zt,n=e.keyframes?nm(Sn(e.keyframes)):Qn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},im=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},nd=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},tl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hc=function(e,t,n,r){return e._startAt&&(an?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},om=function i(e){return!e||e._ts&&i(e.parent)},ih=function(e){return e._repeat?qo(e._tTime,e=e.duration()+e._rDelay)*e:0},qo=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nl=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},il=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nl(e),n._dirty||ro(n,e)),e},id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qa(e.rawTime(),t),(!t._dur||Ys(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ri=function(e,t,n,r){return t.parent&&Tr(t),t._start=Ot((Ji(n)?n:n||e!==zt?ri(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nd(e,t,"_first","_last",e._sort?"_start":0),fc(t)||(e._recent=t),r||id(e,t),e._ts<0&&il(e,e._tTime),e},rd=function(e,t){return(Jn.ScrollTrigger||hu("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},od=function(e,t,n,r,o){if(gu(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jf!==Wn.frame)return wr.push(e),e._lazy=[o,r],1},sm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},fc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},am=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&sm(e)&&!(!e._initted&&fc(e))||(e._ts<0||e._dp._ts<0)&&!fc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ys(0,e._tDur,t),u=qo(l,a),e._yoyo&&u&1&&(s=1-s),u!==qo(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||an||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&od(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&hc(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Tr(e,1),!n&&!an&&(qn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Yo=function(e,t,n,r){var o=e._repeat,s=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Ot(s*(o+1)+e._rDelay*o):s,a>0&&!r&&il(e,e._tTime=e._tDur*a),e.parent&&nl(e),n||ro(e.parent,e),e},rh=function(e){return e instanceof Ln?ro(e):Yo(e,e._dur)},cm={_start:0,endTime:zs,totalDuration:zs},ri=function i(e,t,n){var r=e.labels,o=e._recent||cm,s=e.duration()>=li?o.endTime(!1):e._dur,a,l,c;return rn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Rs=function(e,t,n){var r=Ji(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;s.immediateRender=In(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new $t(t[0],s,t[o+1])},Pr=function(e,t){return e||e===0?t(e):t},Ys=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!rn(e)||!(t=Jp.exec(e))?"":t[1]},um=function(e,t,n){return Pr(n,function(r){return Ys(e,t,r)})},dc=[].slice,sd=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Ti},hm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return rn(r)&&!t||sd(r,1)?(o=n).push.apply(o,ci(r)):n.push(r)})||n},ci=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):rn(e)&&!n&&(cc||!$o())?dc.call((t||uu).querySelectorAll(e),0):Sn(e)?hm(e,n):sd(e)?dc.call(e,0):e?[e]:[]},pc=function(e){return e=ci(e)[0]||Os("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?Os("Invalid scope")||uu.createElement("div"):e)}},ad=function(e){return e.sort(function(){return .5-Math.random()})},ld=function(e){if(Vt(e))return e;var t=Ii(e)?e:{each:e},n=oo(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return rn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,M,S,y,L,C,A,R,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,li])[1],!b){for(A=-li;A<(A=v[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(_=s[g]=[],p=l?Math.min(b,g)*u-.5:r%b,M=b===li?0:l?g*d/b-.5:r/b|0,A=0,R=li,C=0;C<g;C++)S=C%b-p,y=M-(C/b|0),_[C]=L=c?Math.abs(c==="y"?y:S):Wf(S*S+y*y),L>A&&(A=L),L<R&&(R=L);r==="random"&&ad(_),_.max=A-R,_.min=R,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=xn(t.amount||t.each)||0,n=n&&g<0?bm(n):n}return g=(_[f]-_.min)/_.max||0,Ot(_.b+(n?n(g):g)*_.v)+_.u}},mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ot(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ji(n)?0:xn(n))}},cd=function(e,t){var n=Sn(e),r,o;return!n&&Ii(e)&&(r=n=e.radius||li,e.values?(e=ci(e.values),(o=!Ji(e[0]))&&(r*=r)):e=mc(e.increment)),Pr(t,n?Vt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=li,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||Ji(s)?u:u+xn(s)}:mc(e))},ud=function(e,t,n,r){return Pr(Sn(e)?!t:n===!0?!!(n=0):!r,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},fm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},dm=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},pm=function(e,t,n){return fd(e,t,0,1,n)},hd=function(e,t,n){return Pr(n,function(r){return e[~~t(r)]})},mm=function i(e,t,n){var r=t-e;return Sn(e)?hd(e,i(0,e.length),t):Pr(n,function(o){return(r+(o-e)%r)%r+e})},_m=function i(e,t,n){var r=t-e,o=r*2;return Sn(e)?hd(e,i(0,e.length-1),t):Pr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},Bs=function(e){return e.replace(Zp,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Kp);return ud(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},fd=function(e,t,n,r,o){var s=t-e,a=r-n;return Pr(o,function(l){return n+((l-e)/s*a||0)})},gm=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=rn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=Xo(Sn(e)?[]:{},e));if(!u){for(l in t)_u.call(a,e,l,"get",t[l]);o=function(v){return yu(v,a)||(s?e.p:e)}}}return Pr(n,o)},oh=function(e,t,n){var r=e.labels,o=li,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},qn=function(e,t,n){var r=e.vars,o=r[t],s=Ft,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&wr.length&&Wa(),a&&(Ft=a),u=l?o.apply(c,l):o.call(c),Ft=s,u},Ms=function(e){return Tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&qn(e,"onInterrupt"),e},Io,dd=[],pd=function(e){if(e)if(e=!e.name&&e.default||e,cu()||e.headless){var t=e.name,n=Vt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:zs,render:yu,add:_u,kill:Um,modifier:Im,rawVars:0},s={targetTest:0,get:0,getSetter:xu,aliases:{},register:0};if($o(),e!==r){if(Gn[t])return;Qn(r,Qn(Xa(e,o),s)),Xo(r.prototype,Xo(o,Xa(e,s))),Gn[r.prop=t]=r,e.targetTest&&(Ia.push(r),fu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kf(t,r),e.register&&e.register(zn,r,Fn)}else dd.push(e)},Tt=255,ws={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},_l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},md=function(e,t,n){var r=e?Ji(e)?[e>>16,e>>8&Tt,e&Tt]:0:ws.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ws[e])r=ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(eh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=_l(l+1/3,o,s),r[1]=_l(l,o,s),r[2]=_l(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(qf),n&&r.length<4&&(r[3]=1),r}else r=e.match(eh)||ws.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Tt,s=r[1]/Tt,a=r[2]/Tt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},_d=function(e){var t=[],n=[],r=-1;return e.split(br).forEach(function(o){var s=o.match(Do)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},sh=function(e,t,n){var r="",o=(e+r).match(br),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=md(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=_d(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(br,"1").split(Do),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(br),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},br=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ws)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),vm=/hsl[a]?\(/,gd=function(e){var t=e.join(" "),n;if(br.lastIndex=0,br.test(t))return n=vm.test(t),e[1]=sh(e[1],n),e[0]=sh(e[0],n,_d(e[1])),!0},ks,Wn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,M=_===!0,S,y,L,C;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,S=L-s,(S>0||M)&&(C=++d.frame,f=L-d.time*1e3,d.time=L=L/1e3,s+=S+(S>=o?4:o-S),y=1),M||(l=c(g)),y)for(m=0;m<a.length;m++)a[m](L,f,C,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){$f&&(!cc&&cu()&&(Ti=cc=window,uu=Ti.document||{},Jn.gsap=zn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(zn.version),Zf(Ga||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),dd.forEach(pd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},ks=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ks=0,c=zs},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,M){var S=p?function(y,L,C,A){_(y,L,C,A),d.remove(S)}:_;return d.remove(_),a[M?"unshift":"push"](S),$o(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),$o=function(){return!ks&&Wn.wake()},vt={},xm=/^[\d.\-M][\d.\-,\s]/,ym=/["']/g,Sm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(ym,"").trim():+c,r=l.substr(a+1).trim();return t},Mm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},wm=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Sm(t[1])]:Mm(e).split(",").map(ed)):vt._CE&&xm.test(e)?vt._CE("",e):n},bm=function(e){return function(t){return 1-e(1-t)}},oo=function(e,t){return e&&(Vt(e)?e:vt[e]||wm(e))||t},co=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Un(e,function(a){vt[a]=Jn[a]=o,vt[s=a.toLowerCase()]=n;for(var l in o)vt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=o[l]}),o},vd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gl=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/lc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*$p((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:vd(a);return o=lc/o,l.config=function(c,u){return i(e,c,u)},l},vl=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:vd(n);return r.config=function(o){return i(e,o)},r};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;co(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;co("Elastic",gl("in"),gl("out"),gl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};co("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);co("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});co("Circ",function(i){return-(Wf(1-i*i)-1)});co("Sine",function(i){return i===1?1:-Yp(i*Xp)+1});co("Back",vl("in"),vl("out"),vl());vt.SteppedEase=vt.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-At;return function(a){return((r*Ys(0,s,a)|0)+o)*n}}};Ns.ease=vt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return du+=i+","+i+"Params,"});var xd=function(e,t){this.id=qp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jf,this.set=t?t.getSetter:xu},Hs=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Yo(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),ks||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if($o(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(il(this,n),!o._dp||o.parent||id(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ih(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ih(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?qo(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Ys(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),nl(this),rm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ri(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=em);var r=an;return an=n,mu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,rh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ri(this,n),In(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,In(r)),this._dur||(this._zTime=-At),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-At)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Vt(n)?n:td,l=function(){var u=r.then;r.then=null,o&&o(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ms(this)},i})();Qn(Hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){Gf(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=In(n.sortChildren),zt&&Ri(n.parent||zt,Gi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&rd(Gi(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Rs(0,arguments,this),this},t.from=function(r,o,s){return Rs(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Rs(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,As(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new $t(r,o,ri(this,s),1),this},t.call=function(r,o,s){return Ri(this,$t.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new $t(r,s,ri(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,As(s).immediateRender=In(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,As(a).immediateRender=In(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,M,S,y,L,C,A;if(this!==zt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Ot(u%_),u===l?(g=this._repeat,f=c):(L=Ot(u/_),g=~~L,g&&g===L&&(f=c,g--),f>c&&(f=c)),L=qo(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),C&&g&1&&(f=c-f,A=1),g!==L&&!this._lock){var R=C&&L&1,b=R===(C&&g&1);if(g<L&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ot(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=lm(this,Ot(a),Ot(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!L&&(qn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){M=0,v&&(u+=this._zTime=-At);break}}m=v}else{m=this._last;for(var w=r<0?r:f;m;){if(v=m._prev,(m._act||w<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(w-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(w-m._start)*m._ts,o,s||an&&mu(m)),f!==this._time||!this._ts&&!p){M=0,v&&(u+=this._zTime=w?-At:At);break}}m=v}}if(M&&!o&&(this.pause(),M.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=y,nl(this),this.render(r,o,s);this._onUpdate&&!o&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(Ji(o)||(o=ri(this,o,r)),!(r instanceof Hs)){if(Sn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(rn(r))return this.addLabel(r,o);if(Vt(r))r=$t.delayedCall(0,r);else return this}return this!==r?Ri(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return rn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&tl(this,r),r===this._recent&&(this._recent=this._last),ro(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=ri(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=$t.delayedCall(0,o||zs,s);return a.data="isPause",this._hasPause=1,Ri(this,a,ri(this,r))},t.removePause=function(r){var o=this._first;for(r=ri(this,r);o;)o._start===r&&o.data==="isPause"&&Tr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)yr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=ci(r),l=this._first,c=Ji(o),u;l;)l instanceof $t?tm(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=ri(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=$t.to(s,Qn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||At,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&Yo(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,Qn({startAt:{time:ri(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),oh(this,ri(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),oh(this,ri(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Ot(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return ro(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ro(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=li,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Ri(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Ot(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Yo(s,s===zt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(zt._ts&&(Qf(zt,qa(r,zt)),jf=Wn.frame),Wn.frame>=th){th+=Kn.autoSleep||120;var o=zt._first;if((!o||!o._ts)&&Kn.autoSleep&&Wn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Wn.sleep()}}},e})(Hs);Qn(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Em=function(e,t,n,r,o,s,a){var l=new Fn(this._pt,e,t,0,1,Ed,null,o),c=0,u=0,d,f,m,v,g,_,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Bs(r)),s&&(M=[n,r],s(M,e,t),n=M[0],r=M[1]),f=n.match(pl)||[];d=pl.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?No(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=pl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Yf.test(r)||p)&&(l.e=0),this._pt=l,l},_u=function(e,t,n,r,o,s,a,l,c,u){Vt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Vt(d)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Vt(d)?c?Pm:wd:vu,v;if(rn(r)&&(~r.indexOf("random(")&&(r=Bs(r)),r.charAt(1)==="="&&(v=No(f,r)+(xn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||_c)return!isNaN(f*r)&&r!==""?(v=new Fn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Dm:bd,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&hu(t,r),Em.call(this,e,t,f,r,m,l||Kn.stringFilter,c))},Tm=function(e,t,n,r,o){if(Vt(e)&&(e=Cs(e,o,t,n,r)),!Ii(e)||e.style&&e.nodeType||Sn(e)||Xf(e))return rn(e)?Cs(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=Cs(e[a],o,t,n,r);return s},yd=function(e,t,n,r,o,s){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(o,a.rawVars?t[e]:Tm(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new Fn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==Io))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},yr,_c,gu=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!au,y=e.timeline,L=r.easeReverse||d,C,A,R,b,w,I,z,N,H,G,k,Y,B;if(y&&(!f||!o)&&(o="none"),e._ease=oo(o,Ns.ease),e._rEase=L&&(oo(L)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(N=_[0]?io(_[0]).harness:0,Y=N&&r[N.prop],C=Xa(r,fu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Da:Qp),g._lazy=0),s){if(Tr(e._startAt=$t.set(_,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!m)&&e._startAt.revert(Da),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),R=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},C),Y&&(R[N.prop]=Y),Tr(e._startAt=$t.set(_,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&In(l)||l&&!v,A=0;A<_.length;A++){if(w=_[A],z=w._gsap||pu(_)[A]._gsap,e._ptLookup[A]=G={},uc[z.id]&&wr.length&&Wa(),k=M===_?A:M.indexOf(w),N&&(H=new N).init(w,Y||C,e,k,M)!==!1&&(e._pt=b=new Fn(e._pt,w,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ue){G[ue]=b}),H.priority&&(I=1)),!N||Y)for(R in C)Gn[R]&&(H=yd(R,C,e,k,w,M))?H.priority&&(I=1):G[R]=b=_u.call(e,w,R,"get",C[R],k,M,0,r.stringFilter);e._op&&e._op[A]&&e.kill(w,e._op[A]),S&&e._pt&&(yr=e,zt.killTweensOf(w,G,e.globalTime(t)),B=!e.parent,yr=0),e._pt&&l&&(uc[z.id]=1)}I&&Td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&y.render(li,!0,!0)},Am=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return _c=1,e.vars[t]="+=0",gu(e,a),_c=0,l?Os(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Wt(n)+xn(d.e)),d.b&&(d.b=u.s+xn(d.b))},Rm=function(e,t){var n=e[0]?io(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=Xo({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},Cm=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Cs=function(e,t,n,r,o){return Vt(e)?e.call(t,n,r,o):rn(e)&&~e.indexOf("random(")?Bs(e):e},Sd=du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Md={};Un(Sd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Md[i]=1});var $t=(function(i){Gf(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:As(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||zt,M=(Sn(n)||Xf(n)?Ji(n[0]):"length"in r)?[n]:ci(n),S,y,L,C,A,R,b,w;if(a._targets=M.length?pu(M):Os("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||na(c)||na(u)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(S=a.timeline=new Ln({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Gi(a),S._start=0,f||na(c)||na(u)){if(C=M.length,b=f&&ld(f),Ii(f))for(A in f)~Sd.indexOf(A)&&(w||(w={}),w[A]=f[A]);for(y=0;y<C;y++)L=Xa(r,Md),L.stagger=0,I&&(L.easeReverse=I),w&&Xo(L,w),R=M[y],L.duration=+Cs(c,Gi(a),y,R,M),L.delay=(+Cs(u,Gi(a),y,R,M)||0)-a._delay,!f&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),S.to(R,L,b?b(y,R,M):0),S._ease=vt.none;S.duration()?c=u=0:a.timeline=0}else if(v){As(Qn(S.vars.defaults,{ease:"none"})),S._ease=oo(v.ease||r.ease||"none");var z=0,N,H,G;if(Sn(v))v.forEach(function(k){return S.to(M,k,">")}),S.duration();else{L={};for(A in v)A==="ease"||A==="easeEach"||Cm(A,v[A],L,v.easeEach);for(A in L)for(N=L[A].sort(function(k,Y){return k.t-Y.t}),z=0,y=0;y<N.length;y++)H=N[y],G={ease:H.e,duration:(H.t-(y?N[y-1].t:0))/100*c},G[A]=H.v,S.to(M,G,z),z+=G.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!au&&(yr=Gi(a),zt.killTweensOf(M),yr=0),Ri(p,Gi(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Ot(p._time)&&In(d)&&om(Gi(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),_&&rd(Gi(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-At&&!u?l:r<At?0:r,f,m,v,g,_,p,M,S;if(!c)am(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Ot(d%g),d===l?(v=this._repeat,f=c):(_=Ot(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=qo(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Ot(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(od(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var y=f<a;if(y!==this._inv){var L=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(y?-1:1)/L:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(qn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&hc(this,r,o,s),qn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&qn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&hc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Tr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(qn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){ks||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gu(this,c),u=this._ease(c/this._dur),Am(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(il(this,0),this.parent||nd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Ms(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,yr&&yr.vars.overwrite!==!0)._first||Ms(this),this.parent&&s!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?ci(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&im(a,l))return o==="all"&&(this._pt=0),Ms(this);for(d=this._op=this._op||[],o!=="all"&&(rn(o)&&(g={},Un(o,function(M){return g[M]=1}),o=g),o=Rm(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&tl(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Ms(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Rs(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Rs(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return zt.killTweensOf(r,o,s)},e})(Hs);Qn($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(i){$t[i]=function(){var e=new Ln,t=dc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vu=function(e,t,n){return e[t]=n},wd=function(e,t,n){return e[t](n)},Pm=function(e,t,n,r){return e[t](r.fp,n)},Lm=function(e,t,n){return e.setAttribute(t,n)},xu=function(e,t){return Vt(e[t])?wd:lu(e[t])&&e.setAttribute?Lm:vu},bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Dm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ed=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Im=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},Um=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?tl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Fm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Td=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},Fn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||bd,this.d=l||this,this.set=c||vu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=Fm,this.m=n,this.mt=o,this.tween=r},i})();Un(du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return fu[i]=1});Jn.TweenMax=Jn.TweenLite=$t;Jn.TimelineLite=Jn.TimelineMax=Ln;zt=new Ln({sortChildren:!1,defaults:Ns,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=gd;var so=[],Ua={},Nm=[],ah=0,Om=0,xl=function(e){return(Ua[e]||Nm).map(function(t){return t()})},gc=function(){var e=Date.now(),t=[];e-ah>2&&(xl("matchMediaInit"),so.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Ti.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),xl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ah=e,xl("matchMedia"))},Ad=(function(){function i(t,n){this.selector=n&&pc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Om++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Vt(n)&&(o=r,r=n,n=Vt);var s=this,a=function(){var c=Ft,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=pc(o)),Ft=s,d=r.apply(s,arguments),Vt(d)&&s._r.push(d),Ft=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Vt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof $t&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=so.length;s--;)so[s].id===this.id&&so.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),zm=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Ii(n)||(n={matches:n});var s=new Ad(0,o||this.scope),a=s.conditions={},l,c,u;Ft&&!s.selector&&(s.selector=Ft.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(so.indexOf(s)<0&&so.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gc):l.addEventListener("change",gc)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return pd(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,r){rn(e)&&(e=ci(e)[0]);var o=io(e||{}).get,s=n?td:ed;return n==="native"&&(n=""),e&&(t?s((Gn[t]&&Gn[t].get||o)(e,t,n,r)):function(a,l,c){return s((Gn[a]&&Gn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var r=e.map(function(u){return zn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=Gn[t],a=io(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;Io._pt=0,d.init(e,n?u+n:u,Io,0,[e]),d.render(1,d),Io._pt&&yu(1,Io)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=zn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oo(e.ease,Ns.ease)),nh(Ns,e||{})},config:function(e){return nh(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Jn[a]&&Os(t+" effect requires "+a+" plugin.")}),ml[t]=function(a,l,c){return n(ci(a),Qn(l||{},o),c)},s&&(Ln.prototype[t]=function(a,l,c){return this.add(ml[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=oo(t)},parseEase:function(e,t){return arguments.length?oo(e,t):vt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),r,o;for(n.smoothChildTiming=In(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,r=zt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]))&&Ri(n,r,r._start-r._delay),r=o;return Ri(zt,n,0),n},context:function(e,t){return e?new Ad(e,t):Ft},matchMedia:function(e){return new zm(e)},matchMediaRefresh:function(){return so.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||gc()},addEventListener:function(e,t){var n=Ua[e]||(Ua[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ua[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:mm,wrapYoyo:_m,distribute:ld,random:ud,snap:cd,normalize:pm,getUnit:xn,clamp:um,splitColor:md,toArray:ci,selector:pc,mapRange:fd,pipe:fm,unitize:dm,interpolate:gm,shuffle:ad},install:Zf,effects:ml,ticker:Wn,updateRoot:Ln.updateRoot,plugins:Gn,globalTimeline:zt,core:{PropTween:Fn,globals:Kf,Tween:$t,Timeline:Ln,Animation:Hs,getCache:io,_removeLinkedListItem:tl,reverting:function(){return an},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return au=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ya[i]=$t[i]});Wn.add(Ln.updateRoot);Io=Ya.to({},{duration:0});var Bm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},km=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=Bm(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},yl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(rn(o)&&(l={},Un(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}km(a,o)}}}},zn=Ya.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yl("roundProps",mc),yl("modifiers"),yl("snap",cd))||Ya;$t.version=Ln.version=zn.version="3.15.0";$f=1;cu()&&$o();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lh,Sr,Oo,Su,to,ch,Mu,Hm=function(){return typeof window<"u"},Qi={},Zr=180/Math.PI,zo=Math.PI/180,_o=Math.atan2,uh=1e8,wu=/([A-Z])/g,Vm=/(left|right|width|margin|padding|x)/i,Gm=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ym=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$m=function(e,t,n){return e.style[t]=n},Zm=function(e,t,n){return e.style.setProperty(t,n)},Km=function(e,t,n){return e._gsap[t]=n},jm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jm=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},Qm=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},kt="transform",Nn=kt+"Origin",e_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in Qi&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xi(r,a)}):this.tfm[e]=s.x?s[e]:Xi(r,e),e===Nn&&(this.tfm.zOrigin=s.zOrigin);else return Ci.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(kt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=kt}(o||t)&&this.props.push(e,t,o[e])},Pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},t_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(wu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Mu(),(!o||!o.isStart)&&!n[kt]&&(Pd(n),r.zOrigin&&n[Nn]&&(n[Nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ld=function(e,t){var n={target:e,props:[],revert:t_,save:e_};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Dd,xc=function(e,t){var n=Sr.createElementNS?Sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Sr.createElement(e);return n&&n.style?n:Sr.createElement(e)},Yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(wu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Zo(t)||t,1)||""},hh="O,Moz,ms,Ms,Webkit".split(","),Zo=function(e,t,n){var r=t||to,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(hh[s]+e in o););return s<0?null:(s===3?"ms":s>=0?hh[s]:"")+e},yc=function(){Hm()&&window.document&&(lh=window,Sr=lh.document,Oo=Sr.documentElement,to=xc("div")||{style:{}},xc("div"),kt=Zo(kt),Nn=kt+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dd=!!Zo("perspective"),Mu=zn.core.reverting,Su=1)},fh=function(e){var t=e.ownerSVGElement,n=xc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),Oo.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),Oo.removeChild(n),o},dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Id=function(e){var t,n;try{t=e.getBBox()}catch{t=fh(e),n=1}return t&&(t.width||t.height)||n||(t=fh(e)),t&&!t.width&&!t.x&&!t.y?{x:+dh(e,["x","cx","x1"])||0,y:+dh(e,["y","cy","y1"])||0,width:0,height:0}:t},Ud=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Id(e))},Ar=function(e,t){if(t){var n=e.style,r;t in Qi&&t!==Nn&&(t=kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(wu,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,r,o,s){var a=new Fn(e._pt,t,n,0,1,s?Cd:Rd);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},ph={deg:1,rad:1,turn:1},n_={grid:1,flex:1},Rr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=to.style,l=Vm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||ph[r]||ph[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&Ud(e),(m||s==="%")&&(Qi[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Wt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Sr||!g.appendChild)&&(g=Sr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===Wn.time&&!_.uncache)return Wt(o/_.width*d);if(m&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+r,v=e[u],M?e.style[t]=M:Ar(e,t)}else(m||s==="%")&&!n_[Yn(g,"display")]&&(a.position=Yn(e,"position")),g===e&&(a.position="static"),g.appendChild(to),v=to[u],g.removeChild(to),a.position="absolute";return l&&m&&(_=io(g),_.time=Wn.time,_.width=g[u]),Wt(f?v*o/d:v&&o?d/v*o:0)},Xi=function(e,t,n,r){var o;return Su||yc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(o=Gs(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Za(Yn(e,Nn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=$a[t]&&$a[t](e,t,n)||Yn(e,t)||Jf(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Rr(e,t,o,n)+n:o},i_=function(e,t,n,r){if(!n||n==="none"){var o=Zo(t,e,1),s=o&&Yn(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var a=new Fn(this._pt,e.style,t,0,1,Ed),l=0,c=0,u,d,f,m,v,g,_,p,M,S,y,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yn(e,t)||r,g?e.style[t]=g:Ar(e,t)),u=[n,r],gd(u),n=u[0],r=u[1],f=n.match(Do)||[],L=r.match(Do)||[],L.length){for(;d=Do.exec(r);)_=d[0],M=r.substring(l,d.index),v?v=(v+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,y=g.substr((m+"").length),_.charAt(1)==="="&&(_=No(m,_)+y),p=parseFloat(_),S=_.substr((p+"").length),l=Do.lastIndex-S.length,S||(S=S||Kn.units[t]||y,l===r.length&&(r+=S,a.e+=S)),y!==S&&(m=Rr(e,t,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Cd:Rd;return Yf.test(r)&&(a.e=0),this._pt=a,a},mh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},r_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=mh[n]||n,t[1]=mh[r]||r,t.join(" ")},o_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],Qi[a]&&(l=1,a=a==="transformOrigin"?Nn:kt),Ar(n,a);l&&(Ar(n,kt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Gs(n,1),s.uncache=1,Pd(r)))}},$a={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new Fn(e._pt,t,n,0,0,o_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},Vs=[1,0,0,1,0,0],Fd={},Nd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_h=function(e){var t=Yn(e,kt);return Nd(t)?Vs:t.substr(7).match(qf).map(Wt)},bu=function(e,t){var n=e._gsap||io(e),r=e.style,o=_h(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Vs:o):(o===Vs&&!e.offsetParent&&e!==Oo&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Oo.appendChild(e)),o=_h(e),l?r.display=l:Ar(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Oo.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Sc=function(e,t,n,r,o,s){var a=e._gsap,l=o||bu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],M=l[5],S=t.split(" "),y=parseFloat(S[0])||0,L=parseFloat(S[1])||0,C,A,R,b;n?l!==Vs&&(A=m*_-v*g)&&(R=y*(_/A)+L*(-g/A)+(g*M-_*p)/A,b=y*(-v/A)+L*(m/A)-(m*M-v*p)/A,y=R,L=b):(C=Id(e),y=C.x+(~S[0].indexOf("%")?y/100*C.width:y),L=C.y+(~(S[1]||S[0]).indexOf("%")?L/100*C.height:L)),r||r!==!1&&a.smooth?(p=y-c,M=L-u,a.xOffset=d+(p*m+M*g)-p,a.yOffset=f+(p*v+M*_)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",s&&(Mr(s,a,"xOrigin",c,y),Mr(s,a,"yOrigin",u,L),Mr(s,a,"xOffset",d,a.xOffset),Mr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+L)},Gs=function(e,t){var n=e._gsap||new xd(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Yn(e,Nn)||"0",u,d,f,m,v,g,_,p,M,S,y,L,C,A,R,b,w,I,z,N,H,G,k,Y,B,ue,K,de,me,Ne,Z,re;return u=d=f=g=_=p=M=S=y=0,m=v=1,n.svg=!!(e.getCTM&&Ud(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),r.scale=r.rotate=r.translate="none"),A=bu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Sc(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,C=n.yOrigin||0,A!==Vs&&(I=A[0],z=A[1],N=A[2],H=A[3],u=G=A[4],d=k=A[5],A.length===6?(m=Math.sqrt(I*I+z*z),v=Math.sqrt(H*H+N*N),g=I||z?_o(z,I)*Zr:0,M=N||H?_o(N,H)*Zr+g:0,M&&(v*=Math.abs(Math.cos(M*zo))),n.svg&&(u-=L-(L*I+C*N),d-=C-(L*z+C*H))):(re=A[6],Ne=A[7],K=A[8],de=A[9],me=A[10],Z=A[11],u=A[12],d=A[13],f=A[14],R=_o(re,me),_=R*Zr,R&&(b=Math.cos(-R),w=Math.sin(-R),Y=G*b+K*w,B=k*b+de*w,ue=re*b+me*w,K=G*-w+K*b,de=k*-w+de*b,me=re*-w+me*b,Z=Ne*-w+Z*b,G=Y,k=B,re=ue),R=_o(-N,me),p=R*Zr,R&&(b=Math.cos(-R),w=Math.sin(-R),Y=I*b-K*w,B=z*b-de*w,ue=N*b-me*w,Z=H*w+Z*b,I=Y,z=B,N=ue),R=_o(z,I),g=R*Zr,R&&(b=Math.cos(R),w=Math.sin(R),Y=I*b+z*w,B=G*b+k*w,z=z*b-I*w,k=k*b-G*w,I=Y,G=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Wt(Math.sqrt(I*I+z*z+N*N)),v=Wt(Math.sqrt(k*k+re*re)),R=_o(G,k),M=Math.abs(R)>2e-4?R*Zr:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nd(Yn(e,kt)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(o?(m*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Wt(m),n.scaleY=Wt(v),n.rotation=Wt(g)+a,n.rotationX=Wt(_)+a,n.rotationY=Wt(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Nn]=Za(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?a_:Dd?Od:s_,n.uncache=0,n},Za=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sl=function(e,t,n){var r=xn(t);return Wt(parseFloat(t)+parseFloat(Rr(e,"x",n+"px",r)))+r},s_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Od(e,t)},Br="0deg",hs="0px",kr=") ",Od=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,y="",L=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Br||u!==Br)){var C=parseFloat(u)*zo,A=Math.sin(C),R=Math.cos(C),b;C=parseFloat(d)*zo,b=Math.cos(C),s=Sl(M,s,A*b*-S),a=Sl(M,a,-Math.sin(C)*-S),l=Sl(M,l,R*b*-S+S)}_!==hs&&(y+="perspective("+_+kr),(r||o)&&(y+="translate("+r+"%, "+o+"%) "),(L||s!==hs||a!==hs||l!==hs)&&(y+=l!==hs||L?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+kr),c!==Br&&(y+="rotate("+c+kr),u!==Br&&(y+="rotateY("+u+kr),d!==Br&&(y+="rotateX("+d+kr),(f!==Br||m!==Br)&&(y+="skew("+f+", "+m+kr),(v!==1||g!==1)&&(y+="scale("+v+", "+g+kr),M.style[kt]=y||"translate(0, 0)"},a_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(s),y=parseFloat(a),L,C,A,R,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zo,c*=zo,L=Math.cos(l)*d,C=Math.sin(l)*d,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=zo,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,R*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),L*=b,C*=b)),L=Wt(L),C=Wt(C),A=Wt(A),R=Wt(R)):(L=d,R=f,C=A=0),(S&&!~(s+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Rr(m,"x",s,"px"),y=Rr(m,"y",a,"px")),(v||g||_||p)&&(S=Wt(S+v-(v*L+g*A)+_),y=Wt(y+g-(v*C+g*R)+p)),(r||o)&&(b=m.getBBox(),S=Wt(S+r/100*b.width),y=Wt(y+o/100*b.height)),b="matrix("+L+","+C+","+A+","+R+","+S+","+y+")",m.setAttribute("transform",b),M&&(m.style[kt]=b)},l_=function(e,t,n,r,o){var s=360,a=rn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Zr:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*uh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*uh)%s-~~(c/s)*s)),e._pt=f=new Fn(e._pt,t,n,r,c,Wm),f.e=u,f.u="deg",e._props.push(n),f},gh=function(e,t){for(var n in t)e[n]=t[n];return e},c_=function(e,t,n){var r=gh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[kt]=t,a=Gs(n,1),Ar(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],s[kt]=t,a=Gs(n,1),s[kt]=c);for(l in Qi)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=xn(c),v=xn(u),d=m!==v?Rr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Fn(e._pt,a,l,d,f-d,vc),e._pt.u=v||0,e._props.push(l));gh(a,r)};Un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});$a[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return Xi(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var zd={name:"css",register:yc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,M,S,y,L,C,A,R,b;Su||yc(),this.styles=this.styles||Ld(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&yd(g,t,n,r,e,o)))){if(m=typeof u,v=$a[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Bs(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",br.lastIndex=0,br.test(c)||(_=xn(c),p=xn(u),p?_!==p&&(c=Rr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),R.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],rn(c)&&~c.indexOf("random(")&&(c=Bs(c)),xn(c+"")||c==="auto"||(c+=Kn.units[g]||xn(Xi(e,g))||""),(c+"").charAt(1)==="="&&(c=Xi(e,g))):c=Xi(e,g),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(f===1&&Xi(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),Mr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Qi,S){if(this.styles.save(g),b=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=u,u=Yn(e,"perspective"),w?e.style.perspective=w:Ar(e,"perspective")}d=parseFloat(u)}if(y||(L=e._gsap,L.renderTransform&&!t.parseTransform||Gs(e,t.parseTransform),C=t.smoothOrigin!==!1&&L.smooth,y=this._pt=new Fn(this._pt,a,kt,0,1,L.renderTransform,L,0,-1),y.dep=1),g==="scale")this._pt=new Fn(this._pt,L,"scaleY",L.scaleY,(M?No(L.scaleY,M+d):d)-L.scaleY||0,vc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Nn,0,a[Nn]),u=r_(u),L.svg?Sc(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&Mr(this,L,"zOrigin",L.zOrigin,p),Mr(this,a,g,Za(c),Za(u)));continue}else if(g==="svgOrigin"){Sc(e,u,1,C,0,this);continue}else if(g in Fd){l_(this,L,g,f,M?No(f,M+u):u);continue}else if(g==="smoothOrigin"){Mr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){c_(this,u,e);continue}}else g in a||(g=Zo(g)||g);if(S||(d||d===0)&&(f||f===0)&&!Gm.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=xn(u)||(g in Kn.units?Kn.units[g]:_),_!==p&&(f=Rr(e,g,c,p)),this._pt=new Fn(this._pt,S?L:a,g,f,(M?No(f,M+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Ym:vc),this._pt.u=p||0,S&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=qm):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Xm);else if(g in a)i_.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,o);else if(g!=="parseTransform"){hu(g,u);continue}S||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),s.push(g)}}A&&Td(this)},render:function(e,t){if(t.tween._time||!Mu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Ci,getSetter:function(e,t,n){var r=Ci[t];return r&&r.indexOf(",")<0&&(t=r),t in Qi&&t!==Nn&&(e._gsap.x||Xi(e,"x"))?n&&ch===n?t==="scale"?jm:Km:(ch=n||{})&&(t==="scale"?Jm:Qm):e.style&&!lu(e.style[t])?$m:~t.indexOf("-")?Zm:xu(e,t)},core:{_removeProperty:Ar,_getMatrix:bu}};zn.utils.checkPrefix=Zo;zn.core.getStyleSaver=Ld;(function(i,e,t,n){var r=Un(i+","+e+","+t,function(o){Qi[o]=1});Un(e,function(o){Kn.units[o]="deg",Fd[o]=1}),Ci[r[13]]=i+","+e,Un(n,function(o){var s=o.split(":");Ci[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Kn.units[i]="px"});zn.registerPlugin(zd);var Eu=zn.registerPlugin(zd)||zn;Eu.core.Tween;const Bd=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="170",u_=0,vh=1,h_=2,kd=1,f_=2,Vi=3,Cr=0,On=1,En=2,yi=0,Er=1,xh=2,yh=3,Sh=4,Ws=5,Tn=100,d_=101,p_=102,m_=103,__=104,Fa=200,oi=201,g_=202,v_=203,Bo=204,ko=205,x_=206,y_=207,S_=208,M_=209,w_=210,b_=211,E_=212,T_=213,A_=214,Mc=0,wc=1,bc=2,Ko=3,Ec=4,Tc=5,Ac=6,Rc=7,Hd=0,R_=1,C_=2,Di=0,P_=1,L_=2,D_=3,I_=4,U_=5,F_=6,N_=7,Vd=300,jo=301,Jo=302,Cc=303,Pc=304,rl=306,Ho=1e3,$n=1001,Ka=1002,ln=1003,O_=1004,ia=1005,mt=1006,Ml=1007,Yi=1008,Ui=1009,Gd=1010,Wd=1011,Qo=1012,Au=1013,lo=1014,Zn=1015,Pi=1016,Ru=1017,Cu=1018,es=1020,Xd=35902,qd=1021,Yd=1022,yn=1023,$d=1024,Zd=1025,Vo=1026,ts=1027,Pu=1028,Lu=1029,Kd=1030,Du=1031,Iu=1033,Na=33776,Oa=33777,za=33778,Ba=33779,Lc=35840,Dc=35841,Ic=35842,Uc=35843,Fc=36196,Nc=37492,Oc=37496,zc=37808,Bc=37809,kc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,$c=37818,Zc=37819,Kc=37820,jc=37821,ka=36492,Jc=36494,Qc=36495,jd=36283,eu=36284,tu=36285,nu=36286,z_=3200,B_=3201,k_=0,H_=1,nn="",bn="srgb",Fi="srgb-linear",ol="linear",Et="srgb",go=7680,Mh=519,V_=512,G_=513,W_=514,Jd=515,X_=516,q_=517,Y_=518,$_=519,wh=35044,ar=35048,bh="300 es",$i=2e3,ja=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const Ps=Math.PI/180,Xs=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function vn(i,e,t){return Math.max(e,Math.min(t,i))}function Uu(i,e){return(i%e+e)%e}function Z_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function K_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function j_(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function J_(i,e=1){return e-Math.abs(Uu(i,e*2)-e)}function Q_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function r0(i){i!==void 0&&(Eh=i);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function o0(i){return i*Ps}function s0(i){return i*Xs}function a0(i){return(i&i-1)===0&&i!==0}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function u0(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Lo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Ps,RAD2DEG:Xs,generateUUID:rs,clamp:vn,euclideanModulo:Uu,mapLinear:Z_,inverseLerp:K_,lerp:Ls,damp:j_,pingpong:J_,smoothstep:Q_,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:r0,degToRad:o0,radToDeg:s0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:u0,normalize:Mn,denormalize:Lo};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,r,o,s,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],M=r[1],S=r[4],y=r[7],L=r[2],C=r[5],A=r[8];return o[0]=s*g+a*M+l*L,o[3]=s*_+a*S+l*C,o[6]=s*p+a*y+l*A,o[1]=c*g+u*M+d*L,o[4]=c*_+u*S+d*C,o[7]=c*p+u*y+d*A,o[2]=f*g+m*M+v*L,o[5]=f*_+m*S+v*C,o[8]=f*p+m*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wl.makeScale(e,t)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new ut;function Qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function h0(){const i=qs("canvas");return i.style.display="block",i}const Th={};function bs(i){i in Th||(Th[i]=!0,console.warn(i))}function f0(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function d0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=Go(i.r),i.g=Go(i.g),i.b=Go(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nn?ol:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ah=[.64,.33,.3,.6,.15,.06],Rh=[.2126,.7152,.0722],Ch=[.3127,.329],Ph=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Fi]:{primaries:Ah,whitePoint:Ch,transfer:ol,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Ah,whitePoint:Ch,transfer:Et,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let vo;class m0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vo===void 0&&(vo=qs("canvas")),vo.width=e.width,vo.height=e.height;const n=vo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ki(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(bl(r[s].image)):o.push(bl(r[s]))}else o=bl(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g0=0;class cn extends is{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=$n,r=$n,o=mt,s=Yi,a=yn,l=Ui,c=cn.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=rs(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Vd;cn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,L=(p+1)/2,C=(u+f)/4,A=(d+g)/4,R=(v+_)/4;return S>y&&S>L?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=C/n,o=A/n):y>L?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=C/r,o=R/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=A/o,r=R/o),this.set(n,r,o,t),this}let M=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(_-v)/M,this.y=(d-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v0 extends is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ep(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends v0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tp extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,p*M);_=Math.sin(_*C)/L,a=Math.sin(a*C)/L}const y=a*M;if(l=l*_+f*y,c=c*_+m*y,u=u*_+v*y,d=d*_+g*y,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const El=new q,Dh=new Dn;class os{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,di):di.fromBufferAttribute(o,s),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),oa.subVectors(this.max,fs),xo.subVectors(e.a,fs),yo.subVectors(e.b,fs),So.subVectors(e.c,fs),lr.subVectors(yo,xo),cr.subVectors(So,yo),Hr.subVectors(xo,So);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Hr.z,Hr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Hr.z,0,-Hr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Hr.y,Hr.x,0];return!Tl(t,xo,yo,So,oa)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,xo,yo,So,oa))?!1:(sa.crossVectors(lr,cr),t=[sa.x,sa.y,sa.z],Tl(t,xo,yo,So,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new q,new q,new q,new q,new q,new q,new q,new q],di=new q,ra=new os,xo=new q,yo=new q,So=new q,lr=new q,cr=new q,Hr=new q,fs=new q,oa=new q,sa=new q,Vr=new q;function Tl(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Vr.fromArray(i,o);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=t.dot(Vr),u=n.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const y0=new os,ds=new q,Al=new q;class Fu{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ds,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Al)),this.expandByPoint(ds.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new q,Rl=new q,aa=new q,ur=new q,Cl=new q,la=new q,Pl=new q;class S0{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rl.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Rl);const o=e.distanceTo(t)*.5,s=-this.direction.dot(aa),a=ur.dot(this.direction),l=-ur.dot(aa),c=ur.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rl).addScaledVector(aa,f),m}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),r=Oi.dot(Oi)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,r,o){Cl.subVectors(t,e),la.subVectors(n,e),Pl.crossVectors(Cl,la);let s=this.direction.dot(Pl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(ur,la));if(l<0)return null;const c=a*this.direction.dot(Cl.cross(ur));if(c<0||l+c>s)return null;const u=-a*ur.dot(Pl);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Mo.setFromMatrixColumn(e,0).length(),o=1/Mo.setFromMatrixColumn(e,1).length(),s=1/Mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,w0)}lookAt(e,t,n){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hr.crossVectors(n,Bn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hr.crossVectors(n,Bn)),hr.normalize(),ca.crossVectors(Bn,hr),r[0]=hr.x,r[4]=ca.x,r[8]=Bn.x,r[1]=hr.y,r[5]=ca.y,r[9]=Bn.y,r[2]=hr.z,r[6]=ca.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],M=n[3],S=n[7],y=n[11],L=n[15],C=r[0],A=r[4],R=r[8],b=r[12],w=r[1],I=r[5],z=r[9],N=r[13],H=r[2],G=r[6],k=r[10],Y=r[14],B=r[3],ue=r[7],K=r[11],de=r[15];return o[0]=s*C+a*w+l*H+c*B,o[4]=s*A+a*I+l*G+c*ue,o[8]=s*R+a*z+l*k+c*K,o[12]=s*b+a*N+l*Y+c*de,o[1]=u*C+d*w+f*H+m*B,o[5]=u*A+d*I+f*G+m*ue,o[9]=u*R+d*z+f*k+m*K,o[13]=u*b+d*N+f*Y+m*de,o[2]=v*C+g*w+_*H+p*B,o[6]=v*A+g*I+_*G+p*ue,o[10]=v*R+g*z+_*k+p*K,o[14]=v*b+g*N+_*Y+p*de,o[3]=M*C+S*w+y*H+L*B,o[7]=M*A+S*I+y*G+L*ue,o[11]=M*R+S*z+y*k+L*K,o[15]=M*b+S*N+y*Y+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],M=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,y=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,L=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,C=t*M+n*S+r*y+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=M*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=y*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,M=l*c,S=l*u,y=l*d,L=n.x,C=n.y,A=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+y)*L,r[2]=(v-S)*L,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+p))*C,r[6]=(_+M)*C,r[7]=0,r[8]=(v+S)*A,r[9]=(_-M)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Mo.set(r[0],r[1],r[2]).length();const s=Mo.set(r[4],r[5],r[6]).length(),a=Mo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/o,u=1/s,d=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=$i){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===$i)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===ja)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=$i){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===$i)v=(s+o)*d,g=-2*d;else if(a===ja)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mo=new q,pi=new xt,M0=new q(0,0,0),w0=new q(1,1,1),hr=new q,ca=new q,Bn=new q,Ih=new xt,Uh=new Dn;class ei{constructor(e=0,t=0,n=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const Fh=new q,wo=new Dn,zi=new xt,ua=new q,ps=new q,E0=new q,T0=new Dn,Nh=new q(1,0,0),Oh=new q(0,1,0),zh=new q(0,0,1),Bh={type:"added"},A0={type:"removed"},bo={type:"childadded",child:null},Ll={type:"childremoved",child:null};class jn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new q,t=new ei,n=new Dn,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ut}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ps,ua,this.up):zi.lookAt(ua,ps,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(zi),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bh),bo.child=e,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bh),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jn.DEFAULT_UP=new q(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new q,Bi=new q,Dl=new q,ki=new q,Eo=new q,To=new q,kh=new q,Il=new q,Ul=new q,Fl=new q,Nl=new Lt,Ol=new Lt,zl=new Lt;class xi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mi.subVectors(e,t),r.cross(mi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){mi.subVectors(r,t),Bi.subVectors(n,t),Dl.subVectors(e,t);const s=mi.dot(mi),a=mi.dot(Bi),l=mi.dot(Dl),c=Bi.dot(Bi),u=Bi.dot(Dl),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ki.x),l.addScaledVector(s,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Nl.setScalar(0),Ol.setScalar(0),zl.setScalar(0),Nl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Nl,o.x),s.addScaledVector(Ol,o.y),s.addScaledVector(zl,o.z),s}static isFrontFacing(e,t,n,r){return mi.subVectors(n,t),Bi.subVectors(e,t),mi.cross(Bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),mi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Eo.subVectors(r,n),To.subVectors(o,n),Il.subVectors(e,n);const l=Eo.dot(Il),c=To.dot(Il);if(l<=0&&c<=0)return t.copy(n);Ul.subVectors(e,r);const u=Eo.dot(Ul),d=To.dot(Ul);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Eo,s);Fl.subVectors(e,o);const m=Eo.dot(Fl),v=To.dot(Fl);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(To,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return kh.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(kh,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Eo,s).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=Uu(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Bl(s,o,e+1/3),this.g=Bl(s,o,e),this.b=Bl(s,o,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return yt.fromWorkingColorSpace(mn.copy(this),e),Math.round(vn(mn.r*255,0,255))*65536+Math.round(vn(mn.g*255,0,255))*256+Math.round(vn(mn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,r=mn.g,o=mn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=bn){yt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,r=mn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(ha);const n=Ls(fr.h,ha.h,t),r=Ls(fr.s,ha.s,t),o=Ls(fr.l,ha.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Je;Je.NAMES=ip;let R0=0;class sl extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=rs(),this.name="",this.blending=Er,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=ko,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==Cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nu extends sl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qi=C0();function C0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function P0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=vn(i,-65504,65504),qi.floatView[0]=i;const e=qi.uint32View[0],t=e>>23&511;return qi.baseTable[t]+((e&8388607)>>qi.shiftTable[t])}function L0(i){const e=i>>10;return qi.uint32View[0]=qi.mantissaTable[qi.offsetTable[e]+(i&1023)]+qi.exponentTable[e],qi.floatView[0]}const Hh={toHalfFloat:P0,fromHalfFloat:L0},qt=new q,fa=new rt;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array),o=Mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wh&&(e.usage=this.usage),e}}class rp extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class op extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ao extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let D0=0;const ii=new xt,kl=new jn,Ao=new q,kn=new os,ms=new os,tn=new q;class tr extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?op:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ut().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ao(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];kn.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(kn.min,ms.min),kn.expandByPoint(tn),tn.addVectors(kn.max,ms.max),kn.expandByPoint(tn)):(kn.expandByPoint(ms.min),kn.expandByPoint(ms.max))}kn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)tn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(e,c),tn.add(Ao)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new q,l[R]=new q;const c=new q,u=new q,d=new q,f=new rt,m=new rt,v=new rt,g=new q,_=new q;function p(R,b,w){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,w),f.fromBufferAttribute(o,R),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,w),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(I),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(I),a[R].add(g),a[b].add(g),a[w].add(g),l[R].add(_),l[b].add(_),l[w].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,b=M.length;R<b;++R){const w=M[R],I=w.start,z=w.count;for(let N=I,H=I+z;N<H;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new q,y=new q,L=new q,C=new q;function A(R){L.fromBufferAttribute(r,R),C.copy(L);const b=a[R];S.copy(b),S.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(C,b);const I=y.dot(l[R])<0?-1:1;s.setXYZW(R,S.x,S.y,S.z,I)}for(let R=0,b=M.length;R<b;++R){const w=M[R],I=w.start,z=w.count;for(let N=I,H=I+z;N<H;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new xt,Gr=new S0,da=new Fu,Gh=new q,pa=new q,ma=new q,_a=new q,Hl=new q,ga=new q,Wh=new q,va=new q;class Bt extends jn{constructor(e=new tr,t=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ga.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Hl.fromBufferAttribute(d,e),s?ga.addScaledVector(Hl,u):ga.addScaledVector(Hl.sub(t),u))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(o),Gr.copy(e.ray).recast(e.near),!(da.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(da,Gh)===null||Gr.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(o).invert(),Gr.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],M=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let y=M,L=S;y<L;y+=3){const C=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);r=xa(this,p,e,n,c,u,d,C,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const M=a.getX(_),S=a.getX(_+1),y=a.getX(_+2);r=xa(this,s,e,n,c,u,d,M,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],M=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let y=M,L=S;y<L;y+=3){const C=y,A=y+1,R=y+2;r=xa(this,p,e,n,c,u,d,C,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const M=_,S=_+1,y=_+2;r=xa(this,s,e,n,c,u,d,M,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function I0(i,e,t,n,r,o,s,a){let l;if(e.side===On?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Cr,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function xa(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,pa),i.getVertexPosition(l,ma),i.getVertexPosition(c,_a);const u=I0(i,e,t,n,pa,ma,_a,Wh);if(u){const d=new q;xi.getBarycoord(Wh,pa,ma,_a,d),r&&(u.uv=xi.getInterpolatedAttribute(r,a,l,c,d,new rt)),o&&(u.uv1=xi.getInterpolatedAttribute(o,a,l,c,d,new rt)),s&&(u.normal=xi.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};xi.getNormal(pa,ma,_a,f.normal),u.face=f,u.barycoord=d}return u}class $s extends tr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new ao(c,3)),this.setAttribute("normal",new ao(u,3)),this.setAttribute("uv",new ao(d,2));function v(g,_,p,M,S,y,L,C,A,R,b){const w=y/A,I=L/R,z=y/2,N=L/2,H=C/2,G=A+1,k=R+1;let Y=0,B=0;const ue=new q;for(let K=0;K<k;K++){const de=K*I-N;for(let me=0;me<G;me++){const Ne=me*w-z;ue[g]=Ne*M,ue[_]=de*S,ue[p]=H,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[_]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(me/A),d.push(1-K/R),Y+=1}}for(let K=0;K<R;K++)for(let de=0;de<A;de++){const me=f+de+G*K,Ne=f+de+G*(K+1),Z=f+(de+1)+G*(K+1),re=f+(de+1)+G*K;l.push(me,Ne,re),l.push(Ne,Z,re),B+=6}a.addGroup(m,B,b),m+=B,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const n=ns(i[t]);for(const r in n)e[r]=n[r]}return e}function U0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const F0={clone:ns,merge:wn};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends sl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ap extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new q,Xh=new rt,qh=new rt;class Pn extends ap{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,qh),t.subVectors(qh,Xh)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ro=-90,Co=1;class z0 extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Ro,Co,e,t);r.layers=this.layers,this.add(r);const o=new Pn(Ro,Co,e,t);o.layers=this.layers,this.add(o);const s=new Pn(Ro,Co,e,t);s.layers=this.layers,this.add(s);const a=new Pn(Ro,Co,e,t);a.layers=this.layers,this.add(a);const l=new Pn(Ro,Co,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Ro,Co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class lp extends cn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $s(5,5,5),o=new Ct({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:yi});o.uniforms.tEquirect.value=t;const s=new Bt(r,o),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=mt),new z0(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Vl=new q,k0=new q,H0=new ut;class Kr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vl.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||H0.getNormalMatrix(e),r=this.coplanarPoint(Vl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Fu,ya=new q;class cp{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,o=new Kr,s=new Kr){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],M=r[13],S=r[14],y=r[15];if(n[0].setComponents(l-o,f-c,_-m,y-p).normalize(),n[1].setComponents(l+o,f+c,_+m,y+p).normalize(),n[2].setComponents(l+s,f+u,_+v,y+M).normalize(),n[3].setComponents(l-s,f-u,_-v,y-M).normalize(),n[4].setComponents(l-a,f-d,_-g,y-S).normalize(),t===$i)n[5].setComponents(l+a,f+d,_+g,y+S).normalize();else if(t===ja)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function up(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function V0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Si extends tr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const M=p*f-s;for(let S=0;S<c;S++){const y=S*d-o;v.push(y,-M,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,y=M+c*(p+1),L=M+1+c*(p+1),C=M+1+c*p;m.push(S,y,C),m.push(y,L,C)}this.setIndex(m),this.setAttribute("position",new ao(v,3)),this.setAttribute("normal",new ao(g,3)),this.setAttribute("uv",new ao(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Vg=`
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
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
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
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
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Av=`float getShadowMask() {
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
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,Zv=`#if DEPTH_PACKING == 3200
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
}`,Kv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,ax=`#define MATCAP
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
}`,lx=`#define NORMAL
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
}`,cx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,hx=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,xx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:$0,aomap_fragment:Z0,aomap_pars_fragment:K0,batching_pars_vertex:j0,batching_vertex:J0,begin_vertex:Q0,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:sg,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:ug,color_vertex:hg,common:fg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:_g,emissivemap_fragment:gg,emissivemap_pars_fragment:vg,colorspace_fragment:xg,colorspace_pars_fragment:yg,envmap_fragment:Sg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:wg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Fg,envmap_vertex:Eg,fog_vertex:Tg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Ug,lights_toon_fragment:Ng,lights_toon_pars_fragment:Og,lights_phong_fragment:zg,lights_phong_pars_fragment:Bg,lights_physical_fragment:kg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:Kg,map_particle_fragment:jg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:ev,morphinstance_vertex:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:sv,normal_fragment_maps:av,normal_pars_fragment:lv,normal_pars_vertex:cv,normal_vertex:uv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,opaque_fragment:_v,packing:gv,premultiplied_alpha_fragment:vv,project_vertex:xv,dithering_fragment:yv,dithering_pars_fragment:Sv,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Tv,shadowmask_pars_fragment:Av,skinbase_vertex:Rv,skinning_pars_vertex:Cv,skinning_vertex:Pv,skinnormal_vertex:Lv,specularmap_fragment:Dv,specularmap_pars_fragment:Iv,tonemapping_fragment:Uv,tonemapping_pars_fragment:Fv,transmission_fragment:Nv,transmission_pars_fragment:Ov,uv_pars_fragment:zv,uv_pars_vertex:Bv,uv_vertex:kv,worldpos_vertex:Hv,background_vert:Vv,background_frag:Gv,backgroundCube_vert:Wv,backgroundCube_frag:Xv,cube_vert:qv,cube_frag:Yv,depth_vert:$v,depth_frag:Zv,distanceRGBA_vert:Kv,distanceRGBA_frag:jv,equirect_vert:Jv,equirect_frag:Qv,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:sx,meshmatcap_frag:ax,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:ux,meshphong_frag:hx,meshphysical_vert:fx,meshphysical_frag:dx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:_x,points_frag:gx,shadow_vert:vx,shadow_frag:xx,sprite_vert:yx,sprite_frag:Sx},Ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:wn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:wn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:wn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:wn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:wn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:wn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:wn([Ue.common,Ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:wn([Ue.lights,Ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Sa={r:0,b:0,g:0},Xr=new ei,Mx=new xt;function wx(i,e,t,n,r,o,s){const a=new Je(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function g(M){let S=!1;const y=v(M);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,S){const y=v(S);y&&(y.isCubeTexture||y.mapping===rl)?(u===void 0&&(u=new Bt(new $s(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:ns(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xr.copy(S.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Xr)),u.material.toneMapped=yt.getTransfer(y.colorSpace)!==Et,(d!==y||f!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Bt(new Si(2,2),new Ct({name:"BackgroundMaterial",uniforms:ns(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=yt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(Sa,sp(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:_}}function bx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(w,I,z,N,H){let G=!1;const k=d(N,z,I);o!==k&&(o=k,c(o.object)),G=m(w,N,z,H),G&&v(w,N,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,y(w,I,z,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function d(w,I,z){const N=z.wireframe===!0;let H=n[w.id];H===void 0&&(H={},n[w.id]=H);let G=H[I.id];G===void 0&&(G={},H[I.id]=G);let k=G[N];return k===void 0&&(k=f(l()),G[N]=k),k}function f(w){const I=[],z=[],N=[];for(let H=0;H<t;H++)I[H]=0,z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:N,object:w,attributes:{},index:null}}function m(w,I,z,N){const H=o.attributes,G=I.attributes;let k=0;const Y=z.getAttributes();for(const B in Y)if(Y[B].location>=0){const K=H[B];let de=G[B];if(de===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;k++}return o.attributesNum!==k||o.index!==N}function v(w,I,z,N){const H={},G=I.attributes;let k=0;const Y=z.getAttributes();for(const B in Y)if(Y[B].location>=0){let K=G[B];K===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),H[B]=de,k++}o.attributes=H,o.attributesNum=k,o.index=N}function g(){const w=o.newAttributes;for(let I=0,z=w.length;I<z;I++)w[I]=0}function _(w){p(w,0)}function p(w,I){const z=o.newAttributes,N=o.enabledAttributes,H=o.attributeDivisors;z[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),H[w]!==I&&(i.vertexAttribDivisor(w,I),H[w]=I)}function M(){const w=o.newAttributes,I=o.enabledAttributes;for(let z=0,N=I.length;z<N;z++)I[z]!==w[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function S(w,I,z,N,H,G,k){k===!0?i.vertexAttribIPointer(w,I,z,H,G):i.vertexAttribPointer(w,I,z,N,H,G)}function y(w,I,z,N){g();const H=N.attributes,G=z.getAttributes(),k=I.defaultAttributeValues;for(const Y in G){const B=G[Y];if(B.location>=0){let ue=H[Y];if(ue===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const K=ue.normalized,de=ue.itemSize,me=e.get(ue);if(me===void 0)continue;const Ne=me.buffer,Z=me.type,re=me.bytesPerElement,le=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===Au;if(ue.isInterleavedBufferAttribute){const ne=ue.data,ye=ne.stride,Fe=ue.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)p(B.location+Re,ne.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<B.locationSize;Re++)_(B.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Re=0;Re<B.locationSize;Re++)S(B.location+Re,de/B.locationSize,Z,K,ye*re,(Fe+de/B.locationSize*Re)*re,le)}else{if(ue.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)p(B.location+ne,ue.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<B.locationSize;ne++)_(B.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ne=0;ne<B.locationSize;ne++)S(B.location+ne,de/B.locationSize,Z,K,de*re,de/B.locationSize*ne*re,le)}}else if(k!==void 0){const K=k[Y];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}M()}function L(){R();for(const w in n){const I=n[w];for(const z in I){const N=I[z];for(const H in N)u(N[H].object),delete N[H];delete I[z]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;const I=n[w.id];for(const z in I){const N=I[z];for(const H in N)u(N[H].object),delete N[H];delete I[z]}delete n[w.id]}function A(w){for(const I in n){const z=n[I];if(z[w.id]===void 0)continue;const N=z[w.id];for(const H in N)u(N[H].object),delete N[H];delete z[w.id]}}function R(){b(),s=!0,o!==r&&(o=r,c(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function Ex(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function Ax(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Kr,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const M=o?0:n,S=M*4;let y=p.clippingState||null;l.value=y,y=u(v,f,S,m);for(let L=0;L!==S;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,y=m;S!==g;++S,y+=4)s.copy(d[S]).applyMatrix4(M,a),s.normal.toArray(_,y),_[y+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Rx(i){let e=new WeakMap;function t(s,a){return a===Cc?s.mapping=jo:a===Pc&&(s.mapping=Jo),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Cc||a===Pc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new B0(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Ou extends ap{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Uo=4,Yh=[.125,.215,.35,.446,.526,.582],Qr=20,Gl=new Ou,$h=new Je;let Wl=null,Xl=0,ql=0,Yl=!1;const jr=(1+Math.sqrt(5))/2,Po=1/jr,Zh=[new q(-jr,Po,0),new q(jr,Po,0),new q(-Po,0,jr),new q(Po,0,jr),new q(0,jr,-Po),new q(0,jr,Po),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Pi,format:yn,colorSpace:Fi,depthBuffer:!1},r=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(o)),this._blurMaterial=Px(o,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,n,r){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($h),u.toneMapping=Di,u.autoClear=!1;const m=new Nu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),v=new Bt(new $s,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy($h),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ma(r,M*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jo||e.mapping===Jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Bt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Zh[(r-o-1)%Zh.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Qr-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):Qr;_>Qr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Qr}`);const p=[];let M=0;for(let A=0;A<Qr;++A){const R=A/g,b=Math.exp(-R*R/2);p.push(b),A===0?M+=b:A<_&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const y=this._sizeLods[r],L=3*y*(r>S-Uo?r-S+Uo:0),C=4*(this._cubeSize-y);Ma(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Gl)}}function Cx(i){const e=[],t=[],n=[];let r=i;const o=i-Uo+1+Yh.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Uo?l=Yh[s-i+Uo-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,M=new Float32Array(g*v*m),S=new Float32Array(_*v*m),y=new Float32Array(p*v*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,R=C>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(b,g*v*C),S.set(f,_*v*C);const w=[C,C,C,C,C,C];y.set(w,p*v*C)}const L=new tr;L.setAttribute("position",new Xt(M,g)),L.setAttribute("uv",new Xt(S,_)),L.setAttribute("faceIndex",new Xt(y,p)),e.push(L),r>Uo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(i,e,t){const n=new er(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Px(i,e,t){const n=new Float32Array(Qr),r=new q(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zu(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jh(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Qh(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function Lx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cc||l===Pc,u=l===jo||l===Jo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kh(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Kh(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Dx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ix(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let S=0,y=M.length;S<y;S+=3){const L=M[S+0],C=M[S+1],A=M[S+2];f.push(L,C,C,A,A,L)}}else if(v!==void 0){const M=v.array;g=v.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const L=S+0,C=S+1,A=S+2;f.push(L,C,C,A,A,L)}}else return;const _=new(Qd(f)?op:rp)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ux(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let M=0;M<v;M++)p+=m[M]*g[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nx(i,e,t){const n=new WeakMap,r=new Lt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var m=w;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let L=a.attributes.position.count*y,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*d),R=new tp(A,L,C,d);R.type=Zn,R.needsUpdate=!0;const b=y*4;for(let I=0;I<d;I++){const z=p[I],N=M[I],H=S[I],G=L*C*4*I;for(let k=0;k<z.count;k++){const Y=k*b;v===!0&&(r.fromBufferAttribute(z,k),A[G+Y+0]=r.x,A[G+Y+1]=r.y,A[G+Y+2]=r.z,A[G+Y+3]=0),g===!0&&(r.fromBufferAttribute(N,k),A[G+Y+4]=r.x,A[G+Y+5]=r.y,A[G+Y+6]=r.z,A[G+Y+7]=0),_===!0&&(r.fromBufferAttribute(H,k),A[G+Y+8]=r.x,A[G+Y+9]=r.y,A[G+Y+10]=r.z,A[G+Y+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new rt(L,C)},n.set(a,f),a.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Ox(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class Bu extends cn{constructor(e,t,n,r,o,s,a,l,c,u=Vo){if(u!==Vo&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vo&&(n=lo),n===void 0&&u===ts&&(n=es),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hp=new cn,ef=new Bu(1,1),fp=new tp,dp=new x0,pp=new lp,tf=[],nf=[],rf=new Float32Array(16),of=new Float32Array(9),sf=new Float32Array(4);function ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=tf[r];if(o===void 0&&(o=new Float32Array(r),tf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function al(i,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function Vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),Jt(t,n)}}function Gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),Jt(t,n)}}function Wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;rf.set(n),i.uniformMatrix4fv(this.addr,!1,rf),Jt(t,n)}}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function Zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(ef.compareFunction=Jd,o=ef):o=hp,t.setTexture2D(e||o,r)}function e1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dp,r)}function t1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||pp,r)}function n1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fp,r)}function i1(i){switch(i){case 5126:return zx;case 35664:return Bx;case 35665:return kx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return Zx;case 36294:return Kx;case 36295:return jx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(i,e){i.uniform1fv(this.addr,e)}function o1(i,e){const t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function s1(i,e){const t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function a1(i,e){const t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function l1(i,e){const t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c1(i,e){const t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u1(i,e){const t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h1(i,e){i.uniform1iv(this.addr,e)}function f1(i,e){i.uniform2iv(this.addr,e)}function d1(i,e){i.uniform3iv(this.addr,e)}function p1(i,e){i.uniform4iv(this.addr,e)}function m1(i,e){i.uniform1uiv(this.addr,e)}function _1(i,e){i.uniform2uiv(this.addr,e)}function g1(i,e){i.uniform3uiv(this.addr,e)}function v1(i,e){i.uniform4uiv(this.addr,e)}function x1(i,e,t){const n=this.cache,r=e.length,o=al(t,r);jt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||hp,o[s])}function y1(i,e,t){const n=this.cache,r=e.length,o=al(t,r);jt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||dp,o[s])}function S1(i,e,t){const n=this.cache,r=e.length,o=al(t,r);jt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||pp,o[s])}function M1(i,e,t){const n=this.cache,r=e.length,o=al(t,r);jt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||fp,o[s])}function w1(i){switch(i){case 5126:return r1;case 35664:return o1;case 35665:return s1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return h1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return _1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class b1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class E1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w1(t.type)}}class T1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function af(i,e){i.seq.push(e),i.map[e.id]=e}function A1(i,e,t){const n=i.name,r=n.length;for($l.lastIndex=0;;){const o=$l.exec(n),s=$l.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){af(t,c===void 0?new b1(a,i,e):new E1(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new T1(a),af(t,d)),t=d}}}class Ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);A1(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function lf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R1=37297;let C1=0;function P1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const cf=new ut;function L1(i){yt._getMatrix(cf,yt.workingColorSpace,i);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case ol:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+P1(i.getShaderSource(e),s)}else return r}function D1(i,e){const t=L1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I1(i,e){let t;switch(e){case P_:t="Linear";break;case L_:t="Reinhard";break;case D_:t="Cineon";break;case I_:t="ACESFilmic";break;case F_:t="AgX";break;case N_:t="Neutral";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new q;function U1(){yt.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function N1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Es(i){return i!==""}function hf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(z1,k1)}const B1=new Map;function k1(i,e){let t=ft[e];if(t===void 0){const n=B1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(H1,V1)}function V1(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function pf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function G1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jo:case Jo:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function q1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case R_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $1(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=G1(t),c=W1(t),u=X1(t),d=q1(t),f=Y1(t),m=F1(t),v=N1(o),g=r.createProgram();let _,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Es).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(_=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ft.tonemapping_pars_fragment:"",t.toneMapping!==Di?I1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,D1("linearToOutputTexel",t.outputColorSpace),U1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),s=iu(s),s=hf(s,t),s=ff(s,t),a=iu(a),a=hf(a,t),a=ff(a,t),s=df(s),a=df(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+_+s,y=M+p+a,L=lf(r,r.VERTEX_SHADER,S),C=lf(r,r.FRAGMENT_SHADER,y);r.attachShader(g,L),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(L).trim(),H=r.getShaderInfoLog(C).trim();let G=!0,k=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,C);else{const Y=uf(r,L,"vertex"),B=uf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Y+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||H==="")&&(k=!1);k&&(I.diagnostics={runnable:G,programLog:z,vertexShader:{log:N,prefix:_},fragmentShader:{log:H,prefix:p}})}r.deleteShader(L),r.deleteShader(C),R=new Ha(r,g),b=O1(r,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,R1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=C,this}let Z1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j1(e),t.set(e,n)),n}}class j1{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}}function J1(i,e,t,n,r,o,s){const a=new np,l=new K1,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,w,I,z,N){const H=z.fog,G=N.geometry,k=b.isMeshStandardMaterial?z.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),B=Y&&Y.mapping===rl?Y.image.height:null,ue=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=K!==void 0?K.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let Ne,Z,re,le;if(ue){const _t=Ai[ue];Ne=_t.vertexShader,Z=_t.fragmentShader}else Ne=b.vertexShader,Z=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),le=l.getFragmentShaderID(b);const ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,je=!!b.map,We=!!b.matcap,tt=!!Y,O=!!b.aoMap,Oe=!!b.lightMap,$e=!!b.bumpMap,Xe=!!b.normalMap,ke=!!b.displacementMap,Me=!!b.emissiveMap,Ee=!!b.metalnessMap,U=!!b.roughnessMap,T=b.anisotropy>0,W=b.clearcoat>0,Q=b.dispersion>0,ae=b.iridescence>0,ie=b.sheen>0,he=b.transmission>0,ce=T&&!!b.anisotropyMap,_e=W&&!!b.clearcoatMap,Ze=W&&!!b.clearcoatNormalMap,xe=W&&!!b.clearcoatRoughnessMap,De=ae&&!!b.iridescenceMap,ze=ae&&!!b.iridescenceThicknessMap,Be=ie&&!!b.sheenColorMap,Ce=ie&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,He=!!b.specularColorMap,qe=!!b.specularIntensityMap,V=he&&!!b.transmissionMap,ee=he&&!!b.thicknessMap,oe=!!b.gradientMap,fe=!!b.alphaMap,Le=b.alphaTest>0,Ie=!!b.alphaHash,ot=!!b.extensions;let Mt=Di;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Pt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Z,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fi,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:We,envMap:tt,envMapMode:tt&&Y.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:Oe,bumpMap:$e,normalMap:Xe,displacementMap:f&&ke,emissiveMap:Me,normalMapObjectSpace:Xe&&b.normalMapType===H_,normalMapTangentSpace:Xe&&b.normalMapType===k_,metalnessMap:Ee,roughnessMap:U,anisotropy:T,anisotropyMap:ce,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:xe,dispersion:Q,iridescence:ae,iridescenceMap:De,iridescenceThicknessMap:ze,sheen:ie,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:Qe,specularColorMap:He,specularIntensityMap:qe,transmission:he,transmissionMap:V,thicknessMap:ee,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Er&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Le,alphaHash:Ie,combine:b.combine,mapUv:je&&g(b.map.channel),aoMapUv:O&&g(b.aoMap.channel),lightMapUv:Oe&&g(b.lightMap.channel),bumpMapUv:$e&&g(b.bumpMap.channel),normalMapUv:Xe&&g(b.normalMap.channel),displacementMapUv:ke&&g(b.displacementMap.channel),emissiveMapUv:Me&&g(b.emissiveMap.channel),metalnessMapUv:Ee&&g(b.metalnessMap.channel),roughnessMapUv:U&&g(b.roughnessMap.channel),anisotropyMapUv:ce&&g(b.anisotropyMap.channel),clearcoatMapUv:_e&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(b.sheenRoughnessMap.channel),specularMapUv:Qe&&g(b.specularMap.channel),specularColorMapUv:He&&g(b.specularColorMap.channel),specularIntensityMapUv:qe&&g(b.specularIntensityMap.channel),transmissionMapUv:V&&g(b.transmissionMap.channel),thicknessMapUv:ee&&g(b.thicknessMap.channel),alphaMapUv:fe&&g(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Xe||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(je||fe),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:Me&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(M(w,b),S(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function S(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const w=v[b.type];let I;if(w){const z=Ai[w];I=F0.clone(z.uniforms)}else I=b.uniforms;return I}function L(b,w){let I;for(let z=0,N=u.length;z<N;z++){const H=u[z];if(H.cacheKey===w){I=H,++I.usedTimes;break}}return I===void 0&&(I=new $1(i,w,b,o),u.push(I)),I}function C(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:R}}function Q1(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function ey(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _f(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||ey),n.length>1&&n.sort(f||mf),r.length>1&&r.sort(f||mf)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function ty(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new _f,i.set(n,[s])):r>=o.length?(s=new _f,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ny(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function iy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ry=0;function oy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sy(i){const e=new ny,t=iy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new xt,s=new xt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,M=0,S=0,y=0,L=0,C=0,A=0;c.sort(oy);for(let b=0,w=c.length;b<w;b++){const I=c[b],z=I.color,N=I.intensity,H=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*N,d+=z.g*N,f+=z.b*N;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],N);A++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,B=t.get(I);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=k,m++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(z).multiplyScalar(N),k.distance=H,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[g]=k;const Y=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,Y.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,I.castShadow){const B=t.get(I);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=G,y++}g++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(z).multiplyScalar(N),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=k,_++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const Y=I.shadow,B=t.get(I);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=G,n.pointShadowMatrix[v]=I.shadow.matrix,S++}n.point[v]=k,v++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(N),k.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=k,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==L||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,R.directionalLength=m,R.pointLength=v,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=L,R.numLightProbes=A,n.version=ry++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function gf(i){const e=new sy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function ay(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new gf(i),e.set(r,[a])):o>=s.length?(a=new gf(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ly extends sl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends sl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function fy(i,e,t){let n=new cp;const r=new rt,o=new rt,s=new Lt,a=new ly({depthPacking:B_}),l=new cy,c={},u=t.maxTextureSize,d={[Cr]:On,[On]:Cr,[En]:En},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:uy,fragmentShader:hy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new tr;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let p=this.type;this.render=function(C,A,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(yi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==Vi&&this.type===Vi,H=p===Vi&&this.type!==Vi;for(let G=0,k=C.length;G<k;G++){const Y=C[G],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ue=B.getFrameExtents();if(r.multiply(ue),o.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ue.x),r.x=o.x*ue.x,B.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ue.y),r.y=o.y*ue.y,B.mapSize.y=o.y)),B.map===null||N===!0||H===!0){const de=this.type!==Vi?{minFilter:ln,magFilter:ln}:{};B.map!==null&&B.map.dispose(),B.map=new er(r.x,r.y,de),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const K=B.getViewportCount();for(let de=0;de<K;de++){const me=B.getViewport(de);s.set(o.x*me.x,o.y*me.y,o.x*me.z,o.y*me.w),z.viewport(s),B.updateMatrices(Y,de),n=B.getFrustum(),y(A,R,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&M(B,R),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(b,w,I)};function M(C,A){const R=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new er(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,R,m,g,null)}function S(C,A,R,b){let w=null;const I=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)w=I;else if(w=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=w.uuid,N=A.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let G=H[N];G===void 0&&(G=w.clone(),H[N]=G,A.addEventListener("dispose",L)),w=G}if(w.visible=A.visible,w.wireframe=A.wireframe,b===Vi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=i.properties.get(w);z.light=R}return w}function y(C,A,R,b,w){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Vi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const N=e.update(C),H=C.material;if(Array.isArray(H)){const G=N.groups;for(let k=0,Y=G.length;k<Y;k++){const B=G[k],ue=H[B.materialIndex];if(ue&&ue.visible){const K=S(C,ue,b,w);C.onBeforeShadow(i,C,A,R,N,K,B),i.renderBufferDirect(R,null,N,K,C,B),C.onAfterShadow(i,C,A,R,N,K,B)}}}else if(H.visible){const G=S(C,H,b,w);C.onBeforeShadow(i,C,A,R,N,G,null),i.renderBufferDirect(R,null,N,G,C,null),C.onAfterShadow(i,C,A,R,N,G,null)}}const z=C.children;for(let N=0,H=z.length;N<H;N++)y(z[N],A,R,b,w)}function L(C){C.target.removeEventListener("dispose",L);for(const R in c){const b=c[R],w=C.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const dy={[Mc]:wc,[bc]:Ac,[Ec]:Rc,[Ko]:Tc,[wc]:Mc,[Ac]:bc,[Rc]:Ec,[Tc]:Ko};function py(i,e){function t(){let V=!1;const ee=new Lt;let oe=null;const fe=new Lt(0,0,0,0);return{setMask:function(Le){oe!==Le&&!V&&(i.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ie,ot,Mt,Pt){Pt===!0&&(Le*=Mt,Ie*=Mt,ot*=Mt),ee.set(Le,Ie,ot,Mt),fe.equals(ee)===!1&&(i.clearColor(Le,Ie,ot,Mt),fe.copy(ee))},reset:function(){V=!1,oe=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,ee=!1,oe=null,fe=null,Le=null;return{setReversed:function(Ie){if(ee!==Ie){const ot=e.get("EXT_clip_control");ee?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Le;Le=null,this.setClear(Mt)}ee=Ie},getReversed:function(){return ee},setTest:function(Ie){Ie?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Ie){oe!==Ie&&!V&&(i.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(ee&&(Ie=dy[Ie]),fe!==Ie){switch(Ie){case Mc:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Ko:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ie}},setLocked:function(Ie){V=Ie},setClear:function(Ie){Le!==Ie&&(ee&&(Ie=1-Ie),i.clearDepth(Ie),Le=Ie)},reset:function(){V=!1,oe=null,fe=null,Le=null,ee=!1}}}function r(){let V=!1,ee=null,oe=null,fe=null,Le=null,Ie=null,ot=null,Mt=null,Pt=null;return{setTest:function(_t){V||(_t?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(_t){ee!==_t&&!V&&(i.stencilMask(_t),ee=_t)},setFunc:function(_t,wt,An){(oe!==_t||fe!==wt||Le!==An)&&(i.stencilFunc(_t,wt,An),oe=_t,fe=wt,Le=An)},setOp:function(_t,wt,An){(Ie!==_t||ot!==wt||Mt!==An)&&(i.stencilOp(_t,wt,An),Ie=_t,ot=wt,Mt=An)},setLocked:function(_t){V=_t},setClear:function(_t){Pt!==_t&&(i.clearStencil(_t),Pt=_t)},reset:function(){V=!1,ee=null,oe=null,fe=null,Le=null,Ie=null,ot=null,Mt=null,Pt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,M=null,S=null,y=null,L=null,C=null,A=new Je(0,0,0),R=0,b=!1,w=null,I=null,z=null,N=null,H=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=Y>=2);let ue=null,K={};const de=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ne=new Lt().fromArray(de),Z=new Lt().fromArray(me);function re(V,ee,oe,fe){const Le=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(V,Ie),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<oe;ot++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(ee+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Ie}const le={};le[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),s.setFunc(Ko),$e(!1),Xe(vh),ne(i.CULL_FACE),O(yi);function ne(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function ye(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Fe(V,ee){return d[V]!==ee?(i.bindFramebuffer(V,ee),d[V]=ee,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Re(V,ee){let oe=m,fe=!1;if(V){oe=f.get(ee),oe===void 0&&(oe=[],f.set(ee,oe));const Le=V.textures;if(oe.length!==Le.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,ot=Le.length;Ie<ot;Ie++)oe[Ie]=i.COLOR_ATTACHMENT0+Ie;oe.length=Le.length,fe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,fe=!0);fe&&i.drawBuffers(oe)}function je(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const We={[Tn]:i.FUNC_ADD,[d_]:i.FUNC_SUBTRACT,[p_]:i.FUNC_REVERSE_SUBTRACT};We[m_]=i.MIN,We[__]=i.MAX;const tt={[Fa]:i.ZERO,[oi]:i.ONE,[g_]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[w_]:i.SRC_ALPHA_SATURATE,[S_]:i.DST_COLOR,[x_]:i.DST_ALPHA,[v_]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[M_]:i.ONE_MINUS_DST_COLOR,[y_]:i.ONE_MINUS_DST_ALPHA,[b_]:i.CONSTANT_COLOR,[E_]:i.ONE_MINUS_CONSTANT_COLOR,[T_]:i.CONSTANT_ALPHA,[A_]:i.ONE_MINUS_CONSTANT_ALPHA};function O(V,ee,oe,fe,Le,Ie,ot,Mt,Pt,_t){if(V===yi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),V!==Ws){if(V!==_||_t!==b){if((p!==Tn||y!==Tn)&&(i.blendEquation(i.FUNC_ADD),p=Tn,y=Tn),_t)switch(V){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,S=null,L=null,C=null,A.set(0,0,0),R=0,_=V,b=_t}return}Le=Le||ee,Ie=Ie||oe,ot=ot||fe,(ee!==p||Le!==y)&&(i.blendEquationSeparate(We[ee],We[Le]),p=ee,y=Le),(oe!==M||fe!==S||Ie!==L||ot!==C)&&(i.blendFuncSeparate(tt[oe],tt[fe],tt[Ie],tt[ot]),M=oe,S=fe,L=Ie,C=ot),(Mt.equals(A)===!1||Pt!==R)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Pt),A.copy(Mt),R=Pt),_=V,b=!1}function Oe(V,ee){V.side===En?ye(i.CULL_FACE):ne(i.CULL_FACE);let oe=V.side===On;ee&&(oe=!oe),$e(oe),V.blending===Er&&V.transparent===!1?O(yi):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),o.setMask(V.colorWrite);const fe=V.stencilWrite;a.setTest(fe),fe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Me(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function Xe(V){V!==u_?(ne(i.CULL_FACE),V!==I&&(V===vh?i.cullFace(i.BACK):V===h_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),I=V}function ke(V){V!==z&&(k&&i.lineWidth(V),z=V)}function Me(V,ee,oe){V?(ne(i.POLYGON_OFFSET_FILL),(N!==ee||H!==oe)&&(i.polygonOffset(ee,oe),N=ee,H=oe)):ye(i.POLYGON_OFFSET_FILL)}function Ee(V){V?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function U(V){V===void 0&&(V=i.TEXTURE0+G-1),ue!==V&&(i.activeTexture(V),ue=V)}function T(V,ee,oe){oe===void 0&&(ue===null?oe=i.TEXTURE0+G-1:oe=ue);let fe=K[oe];fe===void 0&&(fe={type:void 0,texture:void 0},K[oe]=fe),(fe.type!==V||fe.texture!==ee)&&(ue!==oe&&(i.activeTexture(oe),ue=oe),i.bindTexture(V,ee||le[V]),fe.type=V,fe.texture=ee)}function W(){const V=K[ue];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(V){Ne.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ne.copy(V))}function Ce(V){Z.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Qe(V,ee){let oe=c.get(ee);oe===void 0&&(oe=new WeakMap,c.set(ee,oe));let fe=oe.get(V);fe===void 0&&(fe=i.getUniformBlockIndex(ee,V.name),oe.set(V,fe))}function He(V,ee){const fe=c.get(ee).get(V);l.get(ee)!==fe&&(i.uniformBlockBinding(ee,fe,V.__bindingPointIndex),l.set(ee,fe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,K={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,M=null,S=null,y=null,L=null,C=null,A=new Je(0,0,0),R=0,b=!1,w=null,I=null,z=null,N=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ne,disable:ye,bindFramebuffer:Fe,drawBuffers:Re,useProgram:je,setBlending:O,setMaterial:Oe,setFlipSided:$e,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:Me,setScissorTest:Ee,activeTexture:U,bindTexture:T,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ae,texImage2D:De,texImage3D:ze,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:Ze,texStorage3D:xe,texSubImage2D:ie,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Be,viewport:Ce,reset:qe}}function vf(i,e,t,n){const r=my(n);switch(t){case qd:return i*e;case $d:return i*e;case Zd:return i*e*2;case Pu:return i*e/r.components*r.byteLength;case Lu:return i*e/r.components*r.byteLength;case Kd:return i*e*2/r.components*r.byteLength;case Du:return i*e*2/r.components*r.byteLength;case Yd:return i*e*3/r.components*r.byteLength;case yn:return i*e*4/r.components*r.byteLength;case Iu:return i*e*4/r.components*r.byteLength;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Uc:return Math.max(i,16)*Math.max(e,8)/4;case Lc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ka:case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(i){switch(i){case Ui:case Gd:return{byteLength:1,components:1};case Qo:case Wd:case Pi:return{byteLength:2,components:1};case Ru:case Cu:return{byteLength:2,components:4};case lo:case Au:case Zn:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _y(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,T){return m?new OffscreenCanvas(U,T):qs("canvas")}function g(U,T,W){let Q=1;const ae=Ee(U);if((ae.width>W||ae.height>W)&&(Q=W/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor(Q*ae.width),he=Math.floor(Q*ae.height);d===void 0&&(d=v(ie,he));const ce=T?v(ie,he):d;return ce.width=ie,ce.height=he,ce.getContext("2d").drawImage(U,0,0,ie,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+he+")."),ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,T,W,Q,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=T;if(T===i.RED&&(W===i.FLOAT&&(ie=i.R32F),W===i.HALF_FLOAT&&(ie=i.R16F),W===i.UNSIGNED_BYTE&&(ie=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.R8UI),W===i.UNSIGNED_SHORT&&(ie=i.R16UI),W===i.UNSIGNED_INT&&(ie=i.R32UI),W===i.BYTE&&(ie=i.R8I),W===i.SHORT&&(ie=i.R16I),W===i.INT&&(ie=i.R32I)),T===i.RG&&(W===i.FLOAT&&(ie=i.RG32F),W===i.HALF_FLOAT&&(ie=i.RG16F),W===i.UNSIGNED_BYTE&&(ie=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RG8UI),W===i.UNSIGNED_SHORT&&(ie=i.RG16UI),W===i.UNSIGNED_INT&&(ie=i.RG32UI),W===i.BYTE&&(ie=i.RG8I),W===i.SHORT&&(ie=i.RG16I),W===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),W===i.UNSIGNED_INT&&(ie=i.RGB32UI),W===i.BYTE&&(ie=i.RGB8I),W===i.SHORT&&(ie=i.RGB16I),W===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),W===i.UNSIGNED_INT&&(ie=i.RGBA32UI),W===i.BYTE&&(ie=i.RGBA8I),W===i.SHORT&&(ie=i.RGBA16I),W===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),T===i.RGBA){const he=ae?ol:yt.getTransfer(Q);W===i.FLOAT&&(ie=i.RGBA32F),W===i.HALF_FLOAT&&(ie=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ie=he===Et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(U,T){let W;return U?T===null||T===lo||T===es?W=i.DEPTH24_STENCIL8:T===Zn?W=i.DEPTH32F_STENCIL8:T===Qo&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===lo||T===es?W=i.DEPTH_COMPONENT24:T===Zn?W=i.DEPTH_COMPONENT32F:T===Qo&&(W=i.DEPTH_COMPONENT16),W}function L(U,T){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==ln&&U.minFilter!==mt?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function C(U){const T=U.target;T.removeEventListener("dispose",C),R(T),T.isVideoTexture&&u.delete(T)}function A(U){const T=U.target;T.removeEventListener("dispose",A),w(T)}function R(U){const T=n.get(U);if(T.__webglInit===void 0)return;const W=U.source,Q=f.get(W);if(Q){const ae=Q[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(U),Object.keys(Q).length===0&&f.delete(W)}n.remove(U)}function b(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const W=U.source,Q=f.get(W);delete Q[T.__cacheKey],s.memory.textures--}function w(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ae=0;ae<T.__webglFramebuffer[Q].length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[Q][ae]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=U.textures;for(let Q=0,ae=W.length;Q<ae;Q++){const ie=n.get(W[Q]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(W[Q])}n.remove(U)}let I=0;function z(){I=0}function N(){const U=I;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),I+=1,U}function H(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function G(U,T){const W=n.get(U);if(U.isVideoTexture&&ke(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const Q=U.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,U,T);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function k(U,T){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Z(W,U,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function Y(U,T){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Z(W,U,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function B(U,T){const W=n.get(U);if(U.version>0&&W.__version!==U.version){re(W,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const ue={[Ho]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},K={[ln]:i.NEAREST,[O_]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[mt]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},de={[V_]:i.NEVER,[$_]:i.ALWAYS,[G_]:i.LESS,[Jd]:i.LEQUAL,[W_]:i.EQUAL,[Y_]:i.GEQUAL,[X_]:i.GREATER,[q_]:i.NOTEQUAL};function me(U,T){if(T.type===Zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mt||T.magFilter===Ml||T.magFilter===ia||T.magFilter===Yi||T.minFilter===mt||T.minFilter===Ml||T.minFilter===ia||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ue[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ue[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ue[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,K[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==ia&&T.minFilter!==Yi||T.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(U,T){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",C));const Q=T.source;let ae=f.get(Q);ae===void 0&&(ae={},f.set(Q,ae));const ie=H(T);if(ie!==U.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ae[ie].usedTimes++;const he=ae[U.__cacheKey];he!==void 0&&(ae[U.__cacheKey].usedTimes--,he.usedTimes===0&&b(T)),U.__cacheKey=ie,U.__webglTexture=ae[ie].texture}return W}function Z(U,T,W){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const ae=Ne(U,T),ie=T.source;t.bindTexture(Q,U.__webglTexture,i.TEXTURE0+W);const he=n.get(ie);if(ie.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);const ce=yt.getPrimaries(yt.workingColorSpace),_e=T.colorSpace===nn?null:yt.getPrimaries(T.colorSpace),Ze=T.colorSpace===nn||ce===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let xe=g(T.image,!1,r.maxTextureSize);xe=Me(T,xe);const De=o.convert(T.format,T.colorSpace),ze=o.convert(T.type);let Be=S(T.internalFormat,De,ze,T.colorSpace,T.isVideoTexture);me(Q,T);let Ce;const Qe=T.mipmaps,He=T.isVideoTexture!==!0,qe=he.__version===void 0||ae===!0,V=ie.dataReady,ee=L(T,xe);if(T.isDepthTexture)Be=y(T.format===ts,T.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,De,ze,null));else if(T.isDataTexture)if(Qe.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,Qe[0].width,Qe[0].height);for(let oe=0,fe=Qe.length;oe<fe;oe++)Ce=Qe[oe],He?V&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,De,ze,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,De,ze,Ce.data);T.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,xe.width,xe.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,De,ze,xe.data)):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,De,ze,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Be,Qe[0].width,Qe[0].height,xe.depth);for(let oe=0,fe=Qe.length;oe<fe;oe++)if(Ce=Qe[oe],T.format!==yn)if(De!==null)if(He){if(V)if(T.layerUpdates.size>0){const Le=vf(Ce.width,Ce.height,T.format,T.type);for(const Ie of T.layerUpdates){const ot=Ce.data.subarray(Ie*Le/Ce.data.BYTES_PER_ELEMENT,(Ie+1)*Le/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ie,Ce.width,Ce.height,1,De,ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,xe.depth,De,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Be,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,xe.depth,De,ze,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Be,Ce.width,Ce.height,xe.depth,0,De,ze,Ce.data)}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,Qe[0].width,Qe[0].height);for(let oe=0,fe=Qe.length;oe<fe;oe++)Ce=Qe[oe],T.format!==yn?De!==null?He?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?V&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,De,ze,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,De,ze,Ce.data)}else if(T.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Be,xe.width,xe.height,xe.depth),V)if(T.layerUpdates.size>0){const oe=vf(xe.width,xe.height,T.format,T.type);for(const fe of T.layerUpdates){const Le=xe.data.subarray(fe*oe/xe.data.BYTES_PER_ELEMENT,(fe+1)*oe/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,De,ze,Le)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,ze,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,De,ze,xe.data);else if(T.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,ee,Be,xe.width,xe.height,xe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,ze,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,De,ze,xe.data);else if(T.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,ee,Be,xe.width,xe.height);else{let oe=xe.width,fe=xe.height;for(let Le=0;Le<ee;Le++)t.texImage2D(i.TEXTURE_2D,Le,Be,oe,fe,0,De,ze,null),oe>>=1,fe>>=1}}else if(Qe.length>0){if(He&&qe){const oe=Ee(Qe[0]);t.texStorage2D(i.TEXTURE_2D,ee,Be,oe.width,oe.height)}for(let oe=0,fe=Qe.length;oe<fe;oe++)Ce=Qe[oe],He?V&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,De,ze,Ce):t.texImage2D(i.TEXTURE_2D,oe,Be,De,ze,Ce);T.generateMipmaps=!1}else if(He){if(qe){const oe=Ee(xe);t.texStorage2D(i.TEXTURE_2D,ee,Be,oe.width,oe.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,ze,xe)}else t.texImage2D(i.TEXTURE_2D,0,Be,De,ze,xe);_(T)&&p(Q),he.__version=ie.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function re(U,T,W){if(T.image.length!==6)return;const Q=Ne(U,T),ae=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const ie=n.get(ae);if(ae.version!==ie.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);const he=yt.getPrimaries(yt.workingColorSpace),ce=T.colorSpace===nn?null:yt.getPrimaries(T.colorSpace),_e=T.colorSpace===nn||he===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,De=[];for(let fe=0;fe<6;fe++)!Ze&&!xe?De[fe]=g(T.image[fe],!0,r.maxCubemapSize):De[fe]=xe?T.image[fe].image:T.image[fe],De[fe]=Me(T,De[fe]);const ze=De[0],Be=o.convert(T.format,T.colorSpace),Ce=o.convert(T.type),Qe=S(T.internalFormat,Be,Ce,T.colorSpace),He=T.isVideoTexture!==!0,qe=ie.__version===void 0||Q===!0,V=ae.dataReady;let ee=L(T,ze);me(i.TEXTURE_CUBE_MAP,T);let oe;if(Ze){He&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Qe,ze.width,ze.height);for(let fe=0;fe<6;fe++){oe=De[fe].mipmaps;for(let Le=0;Le<oe.length;Le++){const Ie=oe[Le];T.format!==yn?Be!==null?He?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ie.width,Ie.height,Be,Ce,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Qe,Ie.width,Ie.height,0,Be,Ce,Ie.data)}}}else{if(oe=T.mipmaps,He&&qe){oe.length>0&&ee++;const fe=Ee(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){He?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De[fe].width,De[fe].height,Be,Ce,De[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,De[fe].width,De[fe].height,0,Be,Ce,De[fe].data);for(let Le=0;Le<oe.length;Le++){const ot=oe[Le].image[fe].image;He?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,ot.width,ot.height,Be,Ce,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Qe,ot.width,ot.height,0,Be,Ce,ot.data)}}else{He?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Ce,De[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Be,Ce,De[fe]);for(let Le=0;Le<oe.length;Le++){const Ie=oe[Le];He?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Be,Ce,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Qe,Be,Ce,Ie.image[fe])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function le(U,T,W,Q,ae,ie){const he=o.convert(W.format,W.colorSpace),ce=o.convert(W.type),_e=S(W.internalFormat,he,ce,W.colorSpace),Ze=n.get(T),xe=n.get(W);if(xe.__renderTarget=T,!Ze.__hasExternalTextures){const De=Math.max(1,T.width>>ie),ze=Math.max(1,T.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,_e,De,ze,T.depth,0,he,ce,null):t.texImage2D(ae,ie,_e,De,ze,0,he,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ae,xe.__webglTexture,0,$e(T)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ae,xe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(U,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const Q=T.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,ie=y(T.stencilBuffer,ae),he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=$e(T);Xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ie,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,U)}else{const Q=T.textures;for(let ae=0;ae<Q.length;ae++){const ie=Q[ae],he=o.convert(ie.format,ie.colorSpace),ce=o.convert(ie.type),_e=S(ie.internalFormat,he,ce,ie.colorSpace),Ze=$e(T);W&&Xe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,_e,T.width,T.height):Xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,_e,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_e,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const ae=Q.__webglTexture,ie=$e(T);if(T.depthTexture.format===Vo)Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(T.depthTexture.format===ts)Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Fe(U){const T=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const Q=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=Q}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,U)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),ne(T.__webglDepthbuffer[Q],U,!1);else{const ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ne(T.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(U,T,W){const Q=n.get(U);T!==void 0&&le(Q.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Fe(U)}function je(U){const T=U.texture,W=n.get(U),Q=n.get(T);U.addEventListener("dispose",A);const ae=U.textures,ie=U.isWebGLCubeRenderTarget===!0,he=ae.length>1;if(he||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,s.memory.textures++),ie){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let _e=0;_e<T.mipmaps.length;_e++)W.__webglFramebuffer[ce][_e]=i.createFramebuffer()}else W.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)W.__webglFramebuffer[ce]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(he)for(let ce=0,_e=ae.length;ce<_e;ce++){const Ze=n.get(ae[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&Xe(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const _e=ae[ce];W.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);const Ze=o.convert(_e.format,_e.colorSpace),xe=o.convert(_e.type),De=S(_e.internalFormat,Ze,xe,_e.colorSpace,U.isXRRenderTarget===!0),ze=$e(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,De,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),me(i.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)le(W.__webglFramebuffer[ce][_e],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else le(W.__webglFramebuffer[ce],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,_e=ae.length;ce<_e;ce++){const Ze=ae[ce],xe=n.get(Ze);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),me(i.TEXTURE_2D,Ze),le(W.__webglFramebuffer,U,Ze,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),_(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),me(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)le(W.__webglFramebuffer[_e],U,T,i.COLOR_ATTACHMENT0,ce,_e);else le(W.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,ce,0);_(T)&&p(ce),t.unbindTexture()}U.depthBuffer&&Fe(U)}function We(U){const T=U.textures;for(let W=0,Q=T.length;W<Q;W++){const ae=T[W];if(_(ae)){const ie=M(U),he=n.get(ae).__webglTexture;t.bindTexture(ie,he),p(ie),t.unbindTexture()}}}const tt=[],O=[];function Oe(U){if(U.samples>0){if(Xe(U)===!1){const T=U.textures,W=U.width,Q=U.height;let ae=i.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(U),ce=T.length>1;if(ce)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Ze=n.get(T[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,ae,i.NEAREST),l===!0&&(tt.length=0,O.length=0,tt.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push(ie),O.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const Ze=n.get(T[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $e(U){return Math.min(r.maxSamples,U.samples)}function Xe(U){const T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(U){const T=s.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function Me(U,T){const W=U.colorSpace,Q=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Fi&&W!==nn&&(yt.getTransfer(W)===Et?(Q!==yn||ae!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=je,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Xe}function gy(i,e){function t(n,r=nn){let o;const s=yt.getTransfer(r);if(n===Ui)return i.UNSIGNED_BYTE;if(n===Ru)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===Qo)return i.UNSIGNED_SHORT;if(n===Au)return i.INT;if(n===lo)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===qd)return i.ALPHA;if(n===Yd)return i.RGB;if(n===yn)return i.RGBA;if(n===$d)return i.LUMINANCE;if(n===Zd)return i.LUMINANCE_ALPHA;if(n===Vo)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Pu)return i.RED;if(n===Lu)return i.RED_INTEGER;if(n===Kd)return i.RG;if(n===Du)return i.RG_INTEGER;if(n===Iu)return i.RGBA_INTEGER;if(n===Na||n===Oa||n===za||n===Ba)if(s===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Dc||n===Ic||n===Uc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Nc||n===Oc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Fc||n===Nc)return s===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Oc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zc||n===Bc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===jc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===zc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Jc||n===Qc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ka)return s===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===eu||n===tu||n===nu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ka)return o.COMPRESSED_RED_RGTC1_EXT;if(n===eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class vy extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Li extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`;class My{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new cn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:yy,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wy extends is{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new My,_=t.getContextAttributes();let p=null,M=null;const S=[],y=[],L=new rt;let C=null;const A=new Pn;A.viewport=new Lt;const R=new Pn;R.viewport=new Lt;const b=[A,R],w=new vy;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new Zl,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new Zl,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new Zl,S[Z]=re),re.getHandSpace()};function N(Z){const re=y.indexOf(Z.inputSource);if(re===-1)return;const le=S[re];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||s),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<S.length;Z++){const re=y[Z];re!==null&&(y[Z]=null,S[Z].disconnect(re))}I=null,z=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,M=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new er(m.framebufferWidth,m.framebufferHeight,{format:yn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,le=null,ne=null;_.depth&&(ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?ts:Vo,le=_.stencil?es:lo);const ye={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new er(f.textureWidth,f.textureHeight,{format:yn,type:Ui,depthTexture:new Bu(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Z){for(let re=0;re<Z.removed.length;re++){const le=Z.removed[re],ne=y.indexOf(le);ne>=0&&(y[ne]=null,S[ne].disconnect(le))}for(let re=0;re<Z.added.length;re++){const le=Z.added[re];let ne=y.indexOf(le);if(ne===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=y.length){y.push(le),ne=Fe;break}else if(y[Fe]===null){y[Fe]=le,ne=Fe;break}if(ne===-1)break}const ye=S[ne];ye&&ye.connect(le)}}const k=new q,Y=new q;function B(Z,re,le){k.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ne=k.distanceTo(Y),ye=re.projectionMatrix.elements,Fe=le.projectionMatrix.elements,Re=ye[14]/(ye[10]-1),je=ye[14]/(ye[10]+1),We=(ye[9]+1)/ye[5],tt=(ye[9]-1)/ye[5],O=(ye[8]-1)/ye[0],Oe=(Fe[8]+1)/Fe[0],$e=Re*O,Xe=Re*Oe,ke=ne/(-O+Oe),Me=ke*-O;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Me),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ee=Re+ke,U=je+ke,T=$e-Me,W=Xe+(ne-Me),Q=We*je/U*Ee,ae=tt*je/U*Ee;Z.projectionMatrix.makePerspective(T,W,Q,ae,Ee,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,le=Z.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(le=g.depthFar)),w.near=R.near=A.near=re,w.far=R.far=A.far=le,(I!==w.near||z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,z=w.far),A.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,w.layers.mask=A.layers.mask|R.layers.mask;const ne=Z.parent,ye=w.cameras;ue(w,ne);for(let Fe=0;Fe<ye.length;Fe++)ue(ye[Fe],ne);ye.length===2?B(w,A,R):w.projectionMatrix.copy(A.projectionMatrix),K(Z,w,ne)};function K(Z,re,le){le===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let de=null;function me(Z,re){if(u=re.getViewerPose(c||s),v=re,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ne=!1;le.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let Fe=0;Fe<le.length;Fe++){const Re=le[Fe];let je=null;if(m!==null)je=m.getViewport(Re);else{const tt=d.getViewSubImage(f,Re);je=tt.viewport,Fe===0&&(e.setRenderTargetTextures(M,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(M))}let We=b[Fe];We===void 0&&(We=new Pn,We.layers.enable(Fe),We.viewport=new Lt,b[Fe]=We),We.matrix.fromArray(Re.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Re.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Fe===0&&(w.matrix.copy(We.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ne===!0&&w.cameras.push(We)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Fe=d.getDepthInformation(le[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let le=0;le<S.length;le++){const ne=y[le],ye=S[le];ne!==null&&ye!==void 0&&ye.update(ne,re,c||s)}de&&de(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ne=new up;Ne.setAnimationLoop(me),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}const qr=new ei,by=new xt;function Ey(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,sp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,y)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,M,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===On&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===On&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,y=M.envMapRotation;S&&(_.envMap.value=S,qr.copy(y),qr.x*=-1,qr.y*=-1,qr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(qr)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,M,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*M,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,M){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const M=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ty(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=r[M.id];y===void 0&&(v(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",_));const L=S.program;n.updateUBOMapping(M,L);const C=e.render.frame;o[M.id]!==C&&(f(M),o[M.id]=C)}function u(M){const S=d();M.__bindingPointIndex=S;const y=i.createBuffer(),L=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=r[M.id],y=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=y.length;C<A;C++){const R=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,w=R.length;b<w;b++){const I=R[b];if(m(I,C,b,L)===!0){const z=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let G=0;G<N.length;G++){const k=N[G],Y=g(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+H,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,S,y,L){const C=M.value,A=S+"_"+y;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const R=L[A];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return L[A]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function v(M){const S=M.uniforms;let y=0;const L=16;for(let A=0,R=S.length;A<R;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,I=b.length;w<I;w++){const z=b[w],N=Array.isArray(z.value)?z.value:[z.value];for(let H=0,G=N.length;H<G;H++){const k=N[H],Y=g(k),B=y%L,ue=B%Y.boundary,K=B+ue;y+=ue,K!==0&&L-K<Y.storage&&(y+=L-K),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Y.storage}}}const C=y%L;return C>0&&(y+=L-C),M.__size=y,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function _(M){const S=M.target;S.removeEventListener("dispose",_);const y=s.indexOf(S.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class ll{constructor(e={}){const{canvas:t=h0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Di,this.toneMappingExposure=1;const y=this;let L=!1,C=0,A=0,R=null,b=-1,w=null;const I=new Lt,z=new Lt;let N=null;const H=new Je(0);let G=0,k=t.width,Y=t.height,B=1,ue=null,K=null;const de=new Lt(0,0,k,Y),me=new Lt(0,0,k,Y);let Ne=!1;const Z=new cp;let re=!1,le=!1;const ne=new xt,ye=new xt,Fe=new q,Re=new Lt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function tt(){return R===null?B:1}let O=n;function Oe(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),O===null){const x="webgl2";if(O=Oe(x,h),O===null)throw Oe(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let $e,Xe,ke,Me,Ee,U,T,W,Q,ae,ie,he,ce,_e,Ze,xe,De,ze,Be,Ce,Qe,He,qe,V;function ee(){$e=new Dx(O),$e.init(),He=new gy(O,$e),Xe=new Tx(O,$e,e,He),ke=new py(O,$e),Xe.reverseDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),Me=new Fx(O),Ee=new Q1,U=new _y(O,$e,ke,Ee,Xe,He,Me),T=new Rx(y),W=new Lx(y),Q=new V0(O),qe=new bx(O,Q),ae=new Ix(O,Q,Me,qe),ie=new Ox(O,ae,Q,Me),Be=new Nx(O,Xe,U),xe=new Ax(Ee),he=new J1(y,T,W,$e,Xe,qe,xe),ce=new Ey(y,Ee),_e=new ty,Ze=new ay($e),ze=new wx(y,T,W,ke,ie,m,l),De=new fy(y,ie,Xe),V=new Ty(O,Me,Xe,ke),Ce=new Ex(O,$e,Me),Qe=new Ux(O,$e,Me),Me.programs=he.programs,y.capabilities=Xe,y.extensions=$e,y.properties=Ee,y.renderLists=_e,y.shadowMap=De,y.state=ke,y.info=Me}ee();const oe=new wy(y,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const h=$e.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=$e.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(k,Y,!1))},this.getSize=function(h){return h.set(k,Y)},this.setSize=function(h,x,E=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=h,Y=x,t.width=Math.floor(h*B),t.height=Math.floor(x*B),E===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(k*B,Y*B).floor()},this.setDrawingBufferSize=function(h,x,E){k=h,Y=x,B=E,t.width=Math.floor(h*E),t.height=Math.floor(x*E),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(I)},this.getViewport=function(h){return h.copy(de)},this.setViewport=function(h,x,E,P){h.isVector4?de.set(h.x,h.y,h.z,h.w):de.set(h,x,E,P),ke.viewport(I.copy(de).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(me)},this.setScissor=function(h,x,E,P){h.isVector4?me.set(h.x,h.y,h.z,h.w):me.set(h,x,E,P),ke.scissor(z.copy(me).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(h){ke.setScissorTest(Ne=h)},this.setOpaqueSort=function(h){ue=h},this.setTransparentSort=function(h){K=h},this.getClearColor=function(h){return h.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(h=!0,x=!0,E=!0){let P=0;if(h){let D=!1;if(R!==null){const F=R.texture.format;D=F===Iu||F===Du||F===Lu}if(D){const F=R.texture.type,X=F===Ui||F===lo||F===Qo||F===es||F===Ru||F===Cu,te=ze.getClearColor(),$=ze.getClearAlpha(),j=te.r,J=te.g,se=te.b;X?(v[0]=j,v[1]=J,v[2]=se,v[3]=$,O.clearBufferuiv(O.COLOR,0,v)):(g[0]=j,g[1]=J,g[2]=se,g[3]=$,O.clearBufferiv(O.COLOR,0,g))}else P|=O.COLOR_BUFFER_BIT}x&&(P|=O.DEPTH_BUFFER_BIT),E&&(P|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),_e.dispose(),Ze.dispose(),Ee.dispose(),T.dispose(),W.dispose(),ie.dispose(),qe.dispose(),V.dispose(),he.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Lr),oe.removeEventListener("sessionend",Dr),un.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=Me.autoReset,x=De.enabled,E=De.autoUpdate,P=De.needsUpdate,D=De.type;ee(),Me.autoReset=h,De.enabled=x,De.autoUpdate=E,De.needsUpdate=P,De.type=D}function Ie(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function ot(h){const x=h.target;x.removeEventListener("dispose",ot),Mt(x)}function Mt(h){Pt(h),Ee.remove(h)}function Pt(h){const x=Ee.get(h).programs;x!==void 0&&(x.forEach(function(E){he.releaseProgram(E)}),h.isShaderMaterial&&he.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,E,P,D,F){x===null&&(x=je);const X=D.isMesh&&D.matrixWorld.determinant()<0,te=uo(h,x,E,P,D);ke.setMaterial(P,X);let $=E.index,j=1;if(P.wireframe===!0){if($=ae.getWireframeAttribute(E),$===void 0)return;j=2}const J=E.drawRange,se=E.attributes.position;let ve=J.start*j,Se=(J.start+J.count)*j;F!==null&&(ve=Math.max(ve,F.start*j),Se=Math.min(Se,(F.start+F.count)*j)),$!==null?(ve=Math.max(ve,0),Se=Math.min(Se,$.count)):se!=null&&(ve=Math.max(ve,0),Se=Math.min(Se,se.count));const Ae=Se-ve;if(Ae<0||Ae===1/0)return;qe.setup(D,P,te,E,$);let Te,we=Ce;if($!==null&&(Te=Q.get($),we=Qe,we.setIndex(Te)),D.isMesh)P.wireframe===!0?(ke.setLineWidth(P.wireframeLinewidth*tt()),we.setMode(O.LINES)):we.setMode(O.TRIANGLES);else if(D.isLine){let pe=P.linewidth;pe===void 0&&(pe=1),ke.setLineWidth(pe*tt()),D.isLineSegments?we.setMode(O.LINES):D.isLineLoop?we.setMode(O.LINE_LOOP):we.setMode(O.LINE_STRIP)}else D.isPoints?we.setMode(O.POINTS):D.isSprite&&we.setMode(O.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)we.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))we.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const pe=D._multiDrawStarts,lt=D._multiDrawCounts,Ye=D._multiDrawCount,St=$?Q.get($).bytesPerElement:1,pt=Ee.get(P).currentProgram.getUniforms();for(let et=0;et<Ye;et++)pt.setValue(O,"_gl_DrawID",et),we.render(pe[et]/St,lt[et])}else if(D.isInstancedMesh)we.renderInstances(ve,Ae,D.count);else if(E.isInstancedBufferGeometry){const pe=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,lt=Math.min(E.instanceCount,pe);we.renderInstances(ve,Ae,lt)}else we.render(ve,Ae)};function _t(h,x,E){h.transparent===!0&&h.side===En&&h.forceSinglePass===!1?(h.side=On,h.needsUpdate=!0,wi(h,x,E),h.side=Cr,h.needsUpdate=!0,wi(h,x,E),h.side=En):wi(h,x,E)}this.compile=function(h,x,E=null){E===null&&(E=h),p=Ze.get(E),p.init(x),S.push(p),E.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),h!==E&&h.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const P=new Set;return h.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const F=D.material;if(F)if(Array.isArray(F))for(let X=0;X<F.length;X++){const te=F[X];_t(te,E,D),P.add(te)}else _t(F,E,D),P.add(F)}),S.pop(),p=null,P},this.compileAsync=function(h,x,E=null){const P=this.compile(h,x,E);return new Promise(D=>{function F(){if(P.forEach(function(X){Ee.get(X).currentProgram.isReady()&&P.delete(X)}),P.size===0){D(h);return}setTimeout(F,10)}$e.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let wt=null;function An(h){wt&&wt(h)}function Lr(){un.stop()}function Dr(){un.start()}const un=new up;un.setAnimationLoop(An),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(h){wt=h,oe.setAnimationLoop(h),h===null?un.stop():un.start()},oe.addEventListener("sessionstart",Lr),oe.addEventListener("sessionend",Dr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(x),x=oe.getCamera()),h.isScene===!0&&h.onBeforeRender(y,h,x,R),p=Ze.get(h,S.length),p.init(x),S.push(p),ye.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Z.setFromProjectionMatrix(ye),le=this.localClippingEnabled,re=xe.init(this.clippingPlanes,le),_=_e.get(h,M.length),_.init(),M.push(_),oe.enabled===!0&&oe.isPresenting===!0){const F=y.xr.getDepthSensingMesh();F!==null&&nr(F,x,-1/0,y.sortObjects)}nr(h,x,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ue,K),We=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,We&&ze.addToRenderList(_,h),this.info.render.frame++,re===!0&&xe.beginShadows();const E=p.state.shadowsArray;De.render(E,h,x),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const P=_.opaque,D=_.transmissive;if(p.setupLights(),x.isArrayCamera){const F=x.cameras;if(D.length>0)for(let X=0,te=F.length;X<te;X++){const $=F[X];Ir(P,D,h,$)}We&&ze.render(h);for(let X=0,te=F.length;X<te;X++){const $=F[X];ir(_,h,$,$.viewport)}}else D.length>0&&Ir(P,D,h,x),We&&ze.render(h),ir(_,h,x);R!==null&&(U.updateMultisampleRenderTarget(R),U.updateRenderTargetMipmap(R)),h.isScene===!0&&h.onAfterRender(y,h,x),qe.resetDefaultState(),b=-1,w=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&xe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function nr(h,x,E,P){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)E=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Z.intersectsSprite(h)){P&&Re.setFromMatrixPosition(h.matrixWorld).applyMatrix4(ye);const X=ie.update(h),te=h.material;te.visible&&_.push(h,X,te,E,Re.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Z.intersectsObject(h))){const X=ie.update(h),te=h.material;if(P&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Re.copy(h.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Re.copy(X.boundingSphere.center)),Re.applyMatrix4(h.matrixWorld).applyMatrix4(ye)),Array.isArray(te)){const $=X.groups;for(let j=0,J=$.length;j<J;j++){const se=$[j],ve=te[se.materialIndex];ve&&ve.visible&&_.push(h,X,ve,E,Re.z,se)}}else te.visible&&_.push(h,X,te,E,Re.z,null)}}const F=h.children;for(let X=0,te=F.length;X<te;X++)nr(F[X],x,E,P)}function ir(h,x,E,P){const D=h.opaque,F=h.transmissive,X=h.transparent;p.setupLightsView(E),re===!0&&xe.setGlobalState(y.clippingPlanes,E),P&&ke.viewport(I.copy(P)),D.length>0&&Mi(D,x,E),F.length>0&&Mi(F,x,E),X.length>0&&Mi(X,x,E),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ir(h,x,E,P){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[P.id]===void 0&&(p.state.transmissionRenderTarget[P.id]=new er(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Pi:Ui,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const F=p.state.transmissionRenderTarget[P.id],X=P.viewport||I;F.setSize(X.z,X.w);const te=y.getRenderTarget();y.setRenderTarget(F),y.getClearColor(H),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),We&&ze.render(E);const $=y.toneMapping;y.toneMapping=Di;const j=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),p.setupLightsView(P),re===!0&&xe.setGlobalState(y.clippingPlanes,P),Mi(h,E,P),U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F),$e.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let se=0,ve=x.length;se<ve;se++){const Se=x[se],Ae=Se.object,Te=Se.geometry,we=Se.material,pe=Se.group;if(we.side===En&&Ae.layers.test(P.layers)){const lt=we.side;we.side=On,we.needsUpdate=!0,It(Ae,E,P,Te,we,pe),we.side=lt,we.needsUpdate=!0,J=!0}}J===!0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F))}y.setRenderTarget(te),y.setClearColor(H,G),j!==void 0&&(P.viewport=j),y.toneMapping=$}function Mi(h,x,E){const P=x.isScene===!0?x.overrideMaterial:null;for(let D=0,F=h.length;D<F;D++){const X=h[D],te=X.object,$=X.geometry,j=P===null?X.material:P,J=X.group;te.layers.test(E.layers)&&It(te,x,E,$,j,J)}}function It(h,x,E,P,D,F){h.onBeforeRender(y,x,E,P,D,F),h.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),D.onBeforeRender(y,x,E,P,h,F),D.transparent===!0&&D.side===En&&D.forceSinglePass===!1?(D.side=On,D.needsUpdate=!0,y.renderBufferDirect(E,x,P,D,h,F),D.side=Cr,D.needsUpdate=!0,y.renderBufferDirect(E,x,P,D,h,F),D.side=En):y.renderBufferDirect(E,x,P,D,h,F),h.onAfterRender(y,x,E,P,D,F)}function wi(h,x,E){x.isScene!==!0&&(x=je);const P=Ee.get(h),D=p.state.lights,F=p.state.shadowsArray,X=D.state.version,te=he.getParameters(h,D.state,F,x,E),$=he.getProgramCacheKey(te);let j=P.programs;P.environment=h.isMeshStandardMaterial?x.environment:null,P.fog=x.fog,P.envMap=(h.isMeshStandardMaterial?W:T).get(h.envMap||P.environment),P.envMapRotation=P.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,j===void 0&&(h.addEventListener("dispose",ot),j=new Map,P.programs=j);let J=j.get($);if(J!==void 0){if(P.currentProgram===J&&P.lightsStateVersion===X)return Ur(h,te),J}else te.uniforms=he.getUniforms(h),h.onBeforeCompile(te,y),J=he.acquireProgram(te,$),j.set($,J),P.uniforms=te.uniforms;const se=P.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(se.clippingPlanes=xe.uniform),Ur(h,te),P.needsLights=hi(h),P.lightsStateVersion=X,P.needsLights&&(se.ambientLightColor.value=D.state.ambient,se.lightProbe.value=D.state.probe,se.directionalLights.value=D.state.directional,se.directionalLightShadows.value=D.state.directionalShadow,se.spotLights.value=D.state.spot,se.spotLightShadows.value=D.state.spotShadow,se.rectAreaLights.value=D.state.rectArea,se.ltc_1.value=D.state.rectAreaLTC1,se.ltc_2.value=D.state.rectAreaLTC2,se.pointLights.value=D.state.point,se.pointLightShadows.value=D.state.pointShadow,se.hemisphereLights.value=D.state.hemi,se.directionalShadowMap.value=D.state.directionalShadowMap,se.directionalShadowMatrix.value=D.state.directionalShadowMatrix,se.spotShadowMap.value=D.state.spotShadowMap,se.spotLightMatrix.value=D.state.spotLightMatrix,se.spotLightMap.value=D.state.spotLightMap,se.pointShadowMap.value=D.state.pointShadowMap,se.pointShadowMatrix.value=D.state.pointShadowMatrix),P.currentProgram=J,P.uniformsList=null,J}function ui(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Ha.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Ur(h,x){const E=Ee.get(h);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function uo(h,x,E,P,D){x.isScene!==!0&&(x=je),U.resetTextureUnits();const F=x.fog,X=P.isMeshStandardMaterial?x.environment:null,te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fi,$=(P.isMeshStandardMaterial?W:T).get(P.envMap||X),j=P.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,J=!!E.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),se=!!E.morphAttributes.position,ve=!!E.morphAttributes.normal,Se=!!E.morphAttributes.color;let Ae=Di;P.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=y.toneMapping);const Te=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,we=Te!==void 0?Te.length:0,pe=Ee.get(P),lt=p.state.lights;if(re===!0&&(le===!0||h!==w)){const Ke=h===w&&P.id===b;xe.setState(P,h,Ke)}let Ye=!1;P.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==lt.state.version||pe.outputColorSpace!==te||D.isBatchedMesh&&pe.batching===!1||!D.isBatchedMesh&&pe.batching===!0||D.isBatchedMesh&&pe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&pe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&pe.instancing===!1||!D.isInstancedMesh&&pe.instancing===!0||D.isSkinnedMesh&&pe.skinning===!1||!D.isSkinnedMesh&&pe.skinning===!0||D.isInstancedMesh&&pe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&pe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&pe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&pe.instancingMorph===!1&&D.morphTexture!==null||pe.envMap!==$||P.fog===!0&&pe.fog!==F||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==xe.numPlanes||pe.numIntersection!==xe.numIntersection)||pe.vertexAlphas!==j||pe.vertexTangents!==J||pe.morphTargets!==se||pe.morphNormals!==ve||pe.morphColors!==Se||pe.toneMapping!==Ae||pe.morphTargetsCount!==we)&&(Ye=!0):(Ye=!0,pe.__version=P.version);let St=pe.currentProgram;Ye===!0&&(St=wi(P,x,D));let pt=!1,et=!1,bt=!1;const ht=St.getUniforms(),st=pe.uniforms;if(ke.useProgram(St.program)&&(pt=!0,et=!0,bt=!0),P.id!==b&&(b=P.id,et=!0),pt||w!==h){ke.buffers.depth.getReversed()?(ne.copy(h.projectionMatrix),d0(ne),p0(ne),ht.setValue(O,"projectionMatrix",ne)):ht.setValue(O,"projectionMatrix",h.projectionMatrix),ht.setValue(O,"viewMatrix",h.matrixWorldInverse);const Ut=ht.map.cameraPosition;Ut!==void 0&&Ut.setValue(O,Fe.setFromMatrixPosition(h.matrixWorld)),Xe.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ht.setValue(O,"isOrthographic",h.isOrthographicCamera===!0),w!==h&&(w=h,et=!0,bt=!0)}if(D.isSkinnedMesh){ht.setOptional(O,D,"bindMatrix"),ht.setOptional(O,D,"bindMatrixInverse");const Ke=D.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ht.setValue(O,"boneTexture",Ke.boneTexture,U))}D.isBatchedMesh&&(ht.setOptional(O,D,"batchingTexture"),ht.setValue(O,"batchingTexture",D._matricesTexture,U),ht.setOptional(O,D,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",D._indirectTexture,U),ht.setOptional(O,D,"batchingColorTexture"),D._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",D._colorsTexture,U));const nt=E.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0)&&Be.update(D,E,St),(et||pe.receiveShadow!==D.receiveShadow)&&(pe.receiveShadow=D.receiveShadow,ht.setValue(O,"receiveShadow",D.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(st.envMap.value=$,st.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&x.environment!==null&&(st.envMapIntensity.value=x.environmentIntensity),et&&(ht.setValue(O,"toneMappingExposure",y.toneMappingExposure),pe.needsLights&&ti(st,bt),F&&P.fog===!0&&ce.refreshFogUniforms(st,F),ce.refreshMaterialUniforms(st,P,B,Y,p.state.transmissionRenderTarget[h.id]),Ha.upload(O,ui(pe),st,U)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Ha.upload(O,ui(pe),st,U),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ht.setValue(O,"center",D.center),ht.setValue(O,"modelViewMatrix",D.modelViewMatrix),ht.setValue(O,"normalMatrix",D.normalMatrix),ht.setValue(O,"modelMatrix",D.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const Ke=P.uniformsGroups;for(let Ut=0,Nt=Ke.length;Ut<Nt;Ut++){const at=Ke[Ut];V.update(at,St),V.bind(at,St)}}return St}function ti(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function hi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(h,x,E){Ee.get(h.texture).__webglTexture=x,Ee.get(h.depthTexture).__webglTexture=E;const P=Ee.get(h);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=E===void 0,P.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const E=Ee.get(h);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,E=0){R=h,C=x,A=E;let P=!0,D=null,F=!1,X=!1;if(h){const $=Ee.get(h);if($.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),P=!1;else if($.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if($.__hasExternalTextures)U.rebindTextures(h,Ee.get(h.texture).__webglTexture,Ee.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const se=h.depthTexture;if($.__boundDepthTexture!==se){if(se!==null&&Ee.has(se)&&(h.width!==se.image.width||h.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const j=h.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(X=!0);const J=Ee.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(J[x])?D=J[x][E]:D=J[x],F=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?D=Ee.get(h).__webglMultisampledFramebuffer:Array.isArray(J)?D=J[E]:D=J,I.copy(h.viewport),z.copy(h.scissor),N=h.scissorTest}else I.copy(de).multiplyScalar(B).floor(),z.copy(me).multiplyScalar(B).floor(),N=Ne;if(ke.bindFramebuffer(O.FRAMEBUFFER,D)&&P&&ke.drawBuffers(h,D),ke.viewport(I),ke.scissor(z),ke.setScissorTest(N),F){const $=Ee.get(h.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+x,$.__webglTexture,E)}else if(X){const $=Ee.get(h.texture),j=x||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.__webglTexture,E||0,j)}b=-1},this.readRenderTargetPixels=function(h,x,E,P,D,F,X){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(te=te[X]),te){ke.bindFramebuffer(O.FRAMEBUFFER,te);try{const $=h.texture,j=$.format,J=$.type;if(!Xe.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-P&&E>=0&&E<=h.height-D&&O.readPixels(x,E,P,D,He.convert(j),He.convert(J),F)}finally{const $=R!==null?Ee.get(R).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(h,x,E,P,D,F,X){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(te=te[X]),te){const $=h.texture,j=$.format,J=$.type;if(!Xe.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-P&&E>=0&&E<=h.height-D){ke.bindFramebuffer(O.FRAMEBUFFER,te);const se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.bufferData(O.PIXEL_PACK_BUFFER,F.byteLength,O.STREAM_READ),O.readPixels(x,E,P,D,He.convert(j),He.convert(J),0);const ve=R!==null?Ee.get(R).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,ve);const Se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await f0(O,Se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,F),O.deleteBuffer(se),O.deleteSync(Se),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,E=0){h.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const P=Math.pow(2,-E),D=Math.floor(h.image.width*P),F=Math.floor(h.image.height*P),X=x!==null?x.x:0,te=x!==null?x.y:0;U.setTexture2D(h,0),O.copyTexSubImage2D(O.TEXTURE_2D,E,0,0,X,te,D,F),ke.unbindTexture()},this.copyTextureToTexture=function(h,x,E=null,P=null,D=0){h.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),P=arguments[0]||null,h=arguments[1],x=arguments[2],D=arguments[3]||0,E=null);let F,X,te,$,j,J,se,ve,Se;const Ae=h.isCompressedTexture?h.mipmaps[D]:h.image;E!==null?(F=E.max.x-E.min.x,X=E.max.y-E.min.y,te=E.isBox3?E.max.z-E.min.z:1,$=E.min.x,j=E.min.y,J=E.isBox3?E.min.z:0):(F=Ae.width,X=Ae.height,te=Ae.depth||1,$=0,j=0,J=0),P!==null?(se=P.x,ve=P.y,Se=P.z):(se=0,ve=0,Se=0);const Te=He.convert(x.format),we=He.convert(x.type);let pe;x.isData3DTexture?(U.setTexture3D(x,0),pe=O.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),pe=O.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),pe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,x.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,x.unpackAlignment);const lt=O.getParameter(O.UNPACK_ROW_LENGTH),Ye=O.getParameter(O.UNPACK_IMAGE_HEIGHT),St=O.getParameter(O.UNPACK_SKIP_PIXELS),pt=O.getParameter(O.UNPACK_SKIP_ROWS),et=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$),O.pixelStorei(O.UNPACK_SKIP_ROWS,j),O.pixelStorei(O.UNPACK_SKIP_IMAGES,J);const bt=h.isDataArrayTexture||h.isData3DTexture,ht=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const st=Ee.get(h),nt=Ee.get(x),Ke=Ee.get(st.__renderTarget),Ut=Ee.get(nt.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,Ke.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Nt=0;Nt<te;Nt++)bt&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(h).__webglTexture,D,J+Nt),h.isDepthTexture?(ht&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(x).__webglTexture,D,Se+Nt),O.blitFramebuffer($,j,F,X,se,ve,F,X,O.DEPTH_BUFFER_BIT,O.NEAREST)):ht?O.copyTexSubImage3D(pe,D,se,ve,Se+Nt,$,j,F,X):O.copyTexSubImage2D(pe,D,se,ve,Se+Nt,$,j,F,X);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?h.isDataTexture||h.isData3DTexture?O.texSubImage3D(pe,D,se,ve,Se,F,X,te,Te,we,Ae.data):x.isCompressedArrayTexture?O.compressedTexSubImage3D(pe,D,se,ve,Se,F,X,te,Te,Ae.data):O.texSubImage3D(pe,D,se,ve,Se,F,X,te,Te,we,Ae):h.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,D,se,ve,F,X,Te,we,Ae.data):h.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,D,se,ve,Ae.width,Ae.height,Te,Ae.data):O.texSubImage2D(O.TEXTURE_2D,D,se,ve,F,X,Te,we,Ae);O.pixelStorei(O.UNPACK_ROW_LENGTH,lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,et),D===0&&x.generateMipmaps&&O.generateMipmap(pe),ke.unbindTexture()},this.copyTextureToTexture3D=function(h,x,E=null,P=null,D=0){return h.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,P=arguments[1]||null,h=arguments[2],x=arguments[3],D=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,E,P,D)},this.initRenderTarget=function(h){Ee.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),ke.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,ke.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class Zs extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ku extends cn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=ln,u=ln,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ay extends cn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ja={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ry{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Cy=new Ry;class Ks{constructor(e){this.manager=e!==void 0?e:Cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class Py extends Error{constructor(e,t){super(e),this.response=t}}class Ly extends Ks{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ja.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){M();function M(){d.read().then(({done:S,value:y})=>{if(S)p.close();else{g+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,A=u.length;C<A;C++){const R=u[C];R.onProgress&&R.onProgress(L)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(_)}else throw new Py(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Ja.add(e,c);const u=Hi[e];delete Hi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dy extends Ks{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Ja.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=qs("img");function l(){u(),Ja.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Iy extends Ks{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new ku,a=new Ly(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:$n,s.wrapT=c.wrapT!==void 0?c.wrapT:$n,s.magFilter=c.magFilter!==void 0?c.magFilter:mt,s.minFilter=c.minFilter!==void 0?c.minFilter:mt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Yi),c.mipmapCount===1&&(s.minFilter=mt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class _r extends Ks{constructor(e){super(e)}load(e,t,n,r){const o=new cn,s=new Dy(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class eo extends tr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var si=Uint8Array,Fo=Uint16Array,Uy=Int32Array,mp=new si([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_p=new si([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fy=new si([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gp=function(i,e){for(var t=new Fo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Uy(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},vp=gp(mp,2),xp=vp.b,Ny=vp.r;xp[28]=258,Ny[258]=28;var Oy=gp(_p,0),zy=Oy.b,ru=new Fo(32768);for(var Dt=0;Dt<32768;++Dt){var pr=(Dt&43690)>>1|(Dt&21845)<<1;pr=(pr&52428)>>2|(pr&13107)<<2,pr=(pr&61680)>>4|(pr&3855)<<4,ru[Dt]=((pr&65280)>>8|(pr&255)<<8)>>1}var Ds=(function(i,e,t){for(var n=i.length,r=0,o=new Fo(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new Fo(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new Fo(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[ru[d]>>l]=c}else for(a=new Fo(n),r=0;r<n;++r)i[r]&&(a[r]=ru[s[i[r]-1]++]>>15-i[r]);return a}),js=new si(288);for(var Dt=0;Dt<144;++Dt)js[Dt]=8;for(var Dt=144;Dt<256;++Dt)js[Dt]=9;for(var Dt=256;Dt<280;++Dt)js[Dt]=7;for(var Dt=280;Dt<288;++Dt)js[Dt]=8;var yp=new si(32);for(var Dt=0;Dt<32;++Dt)yp[Dt]=5;var By=Ds(js,9,1),ky=Ds(yp,5,1),Kl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},_i=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},jl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Hy=function(i){return(i+7)/8|0},Vy=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new si(i.subarray(e,t))},Gy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vi=function(i,e,t){var n=new Error(e||Gy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,vi),!t)throw n;return n},Wy=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new si(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new si(r*3));var c=function(je){var We=t.length;if(je>We){var tt=new si(Math.max(We*2,je));tt.set(t),t=tt}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=_i(i,d,1);var M=_i(i,d+1,3);if(d+=3,M)if(M==1)m=By,v=ky,g=9,_=5;else if(M==2){var C=_i(i,d,31)+257,A=_i(i,d+10,15)+4,R=C+_i(i,d+5,31)+1;d+=14;for(var b=new si(R),w=new si(19),I=0;I<A;++I)w[Fy[I]]=_i(i,d+I*3,7);d+=A*3;for(var z=Kl(w),N=(1<<z)-1,H=Ds(w,z,1),I=0;I<R;){var G=H[_i(i,d,N)];d+=G&15;var S=G>>4;if(S<16)b[I++]=S;else{var k=0,Y=0;for(S==16?(Y=3+_i(i,d,3),d+=2,k=b[I-1]):S==17?(Y=3+_i(i,d,7),d+=3):S==18&&(Y=11+_i(i,d,127),d+=7);Y--;)b[I++]=k}}var B=b.subarray(0,C),ue=b.subarray(C);g=Kl(B),_=Kl(ue),m=Ds(B,g,1),v=Ds(ue,_,1)}else vi(1);else{var S=Hy(d)+4,y=i[S-4]|i[S-3]<<8,L=S+y;if(L>r){l&&vi(0);break}a&&c(f+y),t.set(i.subarray(S,L),f),e.b=f+=y,e.p=d=L*8,e.f=u;continue}if(d>p){l&&vi(0);break}}a&&c(f+131072);for(var K=(1<<g)-1,de=(1<<_)-1,me=d;;me=d){var k=m[jl(i,d)&K],Ne=k>>4;if(d+=k&15,d>p){l&&vi(0);break}if(k||vi(2),Ne<256)t[f++]=Ne;else if(Ne==256){me=d,m=null;break}else{var Z=Ne-254;if(Ne>264){var I=Ne-257,re=mp[I];Z=_i(i,d,(1<<re)-1)+xp[I],d+=re}var le=v[jl(i,d)&de],ne=le>>4;le||vi(3),d+=le&15;var ue=zy[ne];if(ne>3){var re=_p[ne];ue+=jl(i,d)&(1<<re)-1,d+=re}if(d>p){l&&vi(0);break}a&&c(f+131072);var ye=f+Z;if(f<ue){var Fe=o-ue,Re=Math.min(ue,ye);for(Fe+f<0&&vi(3);f<Re;++f)t[f]=n[Fe+f]}for(;f<ye;++f)t[f]=t[f-ue]}}e.l=m,e.p=me,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?Vy(t,0,f):t.subarray(0,f)},Xy=new si(0),qy=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&vi(6,"invalid zlib data"),(i[1]>>5&1)==1&&vi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ba(i,e){return Wy(i.subarray(qy(i),-4),{i:2},e,e)}var Yy=typeof TextDecoder<"u"&&new TextDecoder,$y=0;try{Yy.decode(Xy,{stream:!0}),$y=1}catch{}class Zy extends Iy{constructor(e){super(e),this.type=Pi}parse(e){const b=Math.pow(2.7182818,2.2);function w(h,x){let E=0;for(let D=0;D<65536;++D)(D==0||h[D>>3]&1<<(D&7))&&(x[E++]=D);const P=E-1;for(;E<65536;)x[E++]=0;return P}function I(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const z={l:0,c:0,lc:0};function N(h,x,E,P,D){for(;E<h;)x=x<<8|Ce(P,D),E+=8;E-=h,z.l=x>>E&(1<<h)-1,z.c=x,z.lc=E}const H=new Array(59);function G(h){for(let E=0;E<=58;++E)H[E]=0;for(let E=0;E<65537;++E)H[h[E]]+=1;let x=0;for(let E=58;E>0;--E){const P=x+H[E]>>1;H[E]=x,x=P}for(let E=0;E<65537;++E){const P=h[E];P>0&&(h[E]=P|H[P]++<<6)}}function k(h,x,E,P,D,F){const X=x;let te=0,$=0;for(;P<=D;P++){if(X.value-x.value>E)return!1;N(6,te,$,h,X);const j=z.l;if(te=z.c,$=z.lc,F[P]=j,j==63){if(X.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");N(8,te,$,h,X);let J=z.l+6;if(te=z.c,$=z.lc,P+J>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)F[P++]=0;P--}else if(j>=59){let J=j-59+2;if(P+J>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)F[P++]=0;P--}}G(F)}function Y(h){return h&63}function B(h){return h>>6}function ue(h,x,E,P){for(;x<=E;x++){const D=B(h[x]),F=Y(h[x]);if(D>>F)throw new Error("Invalid table entry");if(F>14){const X=P[D>>F-14];if(X.len)throw new Error("Invalid table entry");if(X.lit++,X.p){const te=X.p;X.p=new Array(X.lit);for(let $=0;$<X.lit-1;++$)X.p[$]=te[$]}else X.p=new Array(1);X.p[X.lit-1]=x}else if(F){let X=0;for(let te=1<<14-F;te>0;te--){const $=P[(D<<14-F)+X];if($.len||$.p)throw new Error("Invalid table entry");$.len=F,$.lit=x,X++}}}return!0}const K={c:0,lc:0};function de(h,x,E,P){h=h<<8|Ce(E,P),x+=8,K.c=h,K.lc=x}const me={c:0,lc:0};function Ne(h,x,E,P,D,F,X,te,$){if(h==x){P<8&&(de(E,P,D,F),E=K.c,P=K.lc),P-=8;let j=E>>P;if(j=new Uint8Array([j])[0],te.value+j>$)return!1;const J=X[te.value-1];for(;j-- >0;)X[te.value++]=J}else if(te.value<$)X[te.value++]=h;else return!1;me.c=E,me.lc=P}function Z(h){return h&65535}function re(h){const x=Z(h);return x>32767?x-65536:x}const le={a:0,b:0};function ne(h,x){const E=re(h),D=re(x),F=E+(D&1)+(D>>1),X=F,te=F-D;le.a=X,le.b=te}function ye(h,x){const E=Z(h),P=Z(x),D=E-(P>>1)&65535,F=P+D-32768&65535;le.a=F,le.b=D}function Fe(h,x,E,P,D,F,X){const te=X<16384,$=E>D?D:E;let j=1,J,se;for(;j<=$;)j<<=1;for(j>>=1,J=j,j>>=1;j>=1;){se=0;const ve=se+F*(D-J),Se=F*j,Ae=F*J,Te=P*j,we=P*J;let pe,lt,Ye,St;for(;se<=ve;se+=Ae){let pt=se;const et=se+P*(E-J);for(;pt<=et;pt+=we){const bt=pt+Te,ht=pt+Se,st=ht+Te;te?(ne(h[pt+x],h[ht+x]),pe=le.a,Ye=le.b,ne(h[bt+x],h[st+x]),lt=le.a,St=le.b,ne(pe,lt),h[pt+x]=le.a,h[bt+x]=le.b,ne(Ye,St),h[ht+x]=le.a,h[st+x]=le.b):(ye(h[pt+x],h[ht+x]),pe=le.a,Ye=le.b,ye(h[bt+x],h[st+x]),lt=le.a,St=le.b,ye(pe,lt),h[pt+x]=le.a,h[bt+x]=le.b,ye(Ye,St),h[ht+x]=le.a,h[st+x]=le.b)}if(E&j){const bt=pt+Se;te?ne(h[pt+x],h[bt+x]):ye(h[pt+x],h[bt+x]),pe=le.a,h[bt+x]=le.b,h[pt+x]=pe}}if(D&j){let pt=se;const et=se+P*(E-J);for(;pt<=et;pt+=we){const bt=pt+Te;te?ne(h[pt+x],h[bt+x]):ye(h[pt+x],h[bt+x]),pe=le.a,h[bt+x]=le.b,h[pt+x]=pe}}J=j,j>>=1}return se}function Re(h,x,E,P,D,F,X,te,$){let j=0,J=0;const se=X,ve=Math.trunc(P.value+(D+7)/8);for(;P.value<ve;)for(de(j,J,E,P),j=K.c,J=K.lc;J>=14;){const Ae=j>>J-14&16383,Te=x[Ae];if(Te.len)J-=Te.len,Ne(Te.lit,F,j,J,E,P,te,$,se),j=me.c,J=me.lc;else{if(!Te.p)throw new Error("hufDecode issues");let we;for(we=0;we<Te.lit;we++){const pe=Y(h[Te.p[we]]);for(;J<pe&&P.value<ve;)de(j,J,E,P),j=K.c,J=K.lc;if(J>=pe&&B(h[Te.p[we]])==(j>>J-pe&(1<<pe)-1)){J-=pe,Ne(Te.p[we],F,j,J,E,P,te,$,se),j=me.c,J=me.lc;break}}if(we==Te.lit)throw new Error("hufDecode issues")}}const Se=8-D&7;for(j>>=Se,J-=Se;J>0;){const Ae=x[j<<14-J&16383];if(Ae.len)J-=Ae.len,Ne(Ae.lit,F,j,J,E,P,te,$,se),j=me.c,J=me.lc;else throw new Error("hufDecode issues")}return!0}function je(h,x,E,P,D,F){const X={value:0},te=E.value,$=Be(x,E),j=Be(x,E);E.value+=4;const J=Be(x,E);if(E.value+=4,$<0||$>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const se=new Array(65537),ve=new Array(16384);I(ve);const Se=P-(E.value-te);if(k(h,E,Se,$,j,se),J>8*(P-(E.value-te)))throw new Error("Something wrong with hufUncompress");ue(se,$,j,ve),Re(se,ve,h,E,J,j,F,D,X)}function We(h,x,E){for(let P=0;P<E;++P)x[P]=h[x[P]]}function tt(h){for(let x=1;x<h.length;x++){const E=h[x-1]+h[x]-128;h[x]=E}}function O(h,x){let E=0,P=Math.floor((h.length+1)/2),D=0;const F=h.length-1;for(;!(D>F||(x[D++]=h[E++],D>F));)x[D++]=h[P++]}function Oe(h){let x=h.byteLength;const E=new Array;let P=0;const D=new DataView(h);for(;x>0;){const F=D.getInt8(P++);if(F<0){const X=-F;x-=X+1;for(let te=0;te<X;te++)E.push(D.getUint8(P++))}else{const X=F;x-=2;const te=D.getUint8(P++);for(let $=0;$<X+1;$++)E.push(te)}}return E}function $e(h,x,E,P,D,F){let X=new DataView(F.buffer);const te=E[h.idx[0]].width,$=E[h.idx[0]].height,j=3,J=Math.floor(te/8),se=Math.ceil(te/8),ve=Math.ceil($/8),Se=te-(se-1)*8,Ae=$-(ve-1)*8,Te={value:0},we=new Array(j),pe=new Array(j),lt=new Array(j),Ye=new Array(j),St=new Array(j);for(let et=0;et<j;++et)St[et]=x[h.idx[et]],we[et]=et<1?0:we[et-1]+se*ve,pe[et]=new Float32Array(64),lt[et]=new Uint16Array(64),Ye[et]=new Uint16Array(se*64);for(let et=0;et<ve;++et){let bt=8;et==ve-1&&(bt=Ae);let ht=8;for(let nt=0;nt<se;++nt){nt==se-1&&(ht=Se);for(let Ke=0;Ke<j;++Ke)lt[Ke].fill(0),lt[Ke][0]=D[we[Ke]++],Xe(Te,P,lt[Ke]),ke(lt[Ke],pe[Ke]),Me(pe[Ke]);Ee(pe);for(let Ke=0;Ke<j;++Ke)U(pe[Ke],Ye[Ke],nt*64)}let st=0;for(let nt=0;nt<j;++nt){const Ke=E[h.idx[nt]].type;for(let Ut=8*et;Ut<8*et+bt;++Ut){st=St[nt][Ut];for(let Nt=0;Nt<J;++Nt){const at=Nt*64+(Ut&7)*8;X.setUint16(st+0*Ke,Ye[nt][at+0],!0),X.setUint16(st+2*Ke,Ye[nt][at+1],!0),X.setUint16(st+4*Ke,Ye[nt][at+2],!0),X.setUint16(st+6*Ke,Ye[nt][at+3],!0),X.setUint16(st+8*Ke,Ye[nt][at+4],!0),X.setUint16(st+10*Ke,Ye[nt][at+5],!0),X.setUint16(st+12*Ke,Ye[nt][at+6],!0),X.setUint16(st+14*Ke,Ye[nt][at+7],!0),st+=16*Ke}}if(J!=se)for(let Ut=8*et;Ut<8*et+bt;++Ut){const Nt=St[nt][Ut]+8*J*2*Ke,at=J*64+(Ut&7)*8;for(let Rn=0;Rn<ht;++Rn)X.setUint16(Nt+Rn*2*Ke,Ye[nt][at+Rn],!0)}}}const pt=new Uint16Array(te);X=new DataView(F.buffer);for(let et=0;et<j;++et){E[h.idx[et]].decoded=!0;const bt=E[h.idx[et]].type;if(E[et].type==2)for(let ht=0;ht<$;++ht){const st=St[et][ht];for(let nt=0;nt<te;++nt)pt[nt]=X.getUint16(st+nt*2*bt,!0);for(let nt=0;nt<te;++nt)X.setFloat32(st+nt*2*bt,ee(pt[nt]),!0)}}}function Xe(h,x,E){let P,D=1;for(;D<64;)P=x[h.value],P==65280?D=64:P>>8==255?D+=P&255:(E[D]=P,D++),h.value++}function ke(h,x){x[0]=ee(h[0]),x[1]=ee(h[1]),x[2]=ee(h[5]),x[3]=ee(h[6]),x[4]=ee(h[14]),x[5]=ee(h[15]),x[6]=ee(h[27]),x[7]=ee(h[28]),x[8]=ee(h[2]),x[9]=ee(h[4]),x[10]=ee(h[7]),x[11]=ee(h[13]),x[12]=ee(h[16]),x[13]=ee(h[26]),x[14]=ee(h[29]),x[15]=ee(h[42]),x[16]=ee(h[3]),x[17]=ee(h[8]),x[18]=ee(h[12]),x[19]=ee(h[17]),x[20]=ee(h[25]),x[21]=ee(h[30]),x[22]=ee(h[41]),x[23]=ee(h[43]),x[24]=ee(h[9]),x[25]=ee(h[11]),x[26]=ee(h[18]),x[27]=ee(h[24]),x[28]=ee(h[31]),x[29]=ee(h[40]),x[30]=ee(h[44]),x[31]=ee(h[53]),x[32]=ee(h[10]),x[33]=ee(h[19]),x[34]=ee(h[23]),x[35]=ee(h[32]),x[36]=ee(h[39]),x[37]=ee(h[45]),x[38]=ee(h[52]),x[39]=ee(h[54]),x[40]=ee(h[20]),x[41]=ee(h[22]),x[42]=ee(h[33]),x[43]=ee(h[38]),x[44]=ee(h[46]),x[45]=ee(h[51]),x[46]=ee(h[55]),x[47]=ee(h[60]),x[48]=ee(h[21]),x[49]=ee(h[34]),x[50]=ee(h[37]),x[51]=ee(h[47]),x[52]=ee(h[50]),x[53]=ee(h[56]),x[54]=ee(h[59]),x[55]=ee(h[61]),x[56]=ee(h[35]),x[57]=ee(h[36]),x[58]=ee(h[48]),x[59]=ee(h[49]),x[60]=ee(h[57]),x[61]=ee(h[58]),x[62]=ee(h[62]),x[63]=ee(h[63])}function Me(h){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),P=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),X=.5*Math.cos(3*3.14159/8),te=.5*Math.cos(7*3.14159/16),$=new Array(4),j=new Array(4),J=new Array(4),se=new Array(4);for(let ve=0;ve<8;++ve){const Se=ve*8;$[0]=P*h[Se+2],$[1]=X*h[Se+2],$[2]=P*h[Se+6],$[3]=X*h[Se+6],j[0]=E*h[Se+1]+D*h[Se+3]+F*h[Se+5]+te*h[Se+7],j[1]=D*h[Se+1]-te*h[Se+3]-E*h[Se+5]-F*h[Se+7],j[2]=F*h[Se+1]-E*h[Se+3]+te*h[Se+5]+D*h[Se+7],j[3]=te*h[Se+1]-F*h[Se+3]+D*h[Se+5]-E*h[Se+7],J[0]=x*(h[Se+0]+h[Se+4]),J[3]=x*(h[Se+0]-h[Se+4]),J[1]=$[0]+$[3],J[2]=$[1]-$[2],se[0]=J[0]+J[1],se[1]=J[3]+J[2],se[2]=J[3]-J[2],se[3]=J[0]-J[1],h[Se+0]=se[0]+j[0],h[Se+1]=se[1]+j[1],h[Se+2]=se[2]+j[2],h[Se+3]=se[3]+j[3],h[Se+4]=se[3]-j[3],h[Se+5]=se[2]-j[2],h[Se+6]=se[1]-j[1],h[Se+7]=se[0]-j[0]}for(let ve=0;ve<8;++ve)$[0]=P*h[16+ve],$[1]=X*h[16+ve],$[2]=P*h[48+ve],$[3]=X*h[48+ve],j[0]=E*h[8+ve]+D*h[24+ve]+F*h[40+ve]+te*h[56+ve],j[1]=D*h[8+ve]-te*h[24+ve]-E*h[40+ve]-F*h[56+ve],j[2]=F*h[8+ve]-E*h[24+ve]+te*h[40+ve]+D*h[56+ve],j[3]=te*h[8+ve]-F*h[24+ve]+D*h[40+ve]-E*h[56+ve],J[0]=x*(h[ve]+h[32+ve]),J[3]=x*(h[ve]-h[32+ve]),J[1]=$[0]+$[3],J[2]=$[1]-$[2],se[0]=J[0]+J[1],se[1]=J[3]+J[2],se[2]=J[3]-J[2],se[3]=J[0]-J[1],h[0+ve]=se[0]+j[0],h[8+ve]=se[1]+j[1],h[16+ve]=se[2]+j[2],h[24+ve]=se[3]+j[3],h[32+ve]=se[3]-j[3],h[40+ve]=se[2]-j[2],h[48+ve]=se[1]-j[1],h[56+ve]=se[0]-j[0]}function Ee(h){for(let x=0;x<64;++x){const E=h[0][x],P=h[1][x],D=h[2][x];h[0][x]=E+1.5747*D,h[1][x]=E-.1873*P-.4682*D,h[2][x]=E+1.8556*P}}function U(h,x,E){for(let P=0;P<64;++P)x[E+P]=Hh.toHalfFloat(T(h[P]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(b,Math.abs(h)-1)}function W(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Q(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(Oe(x)),P=new Uint8Array(E.length);return tt(E),O(E,P),new DataView(P.buffer)}function ae(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=ba(x),P=new Uint8Array(E.length);return tt(E),O(E,P),new DataView(P.buffer)}function ie(h){const x=h.viewer,E={value:h.offset.value},P=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),D=new Uint8Array(8192);let F=0;const X=new Array(h.inputChannels.length);for(let Ae=0,Te=h.inputChannels.length;Ae<Te;Ae++)X[Ae]={},X[Ae].start=F,X[Ae].end=X[Ae].start,X[Ae].nx=h.columns,X[Ae].ny=h.lines,X[Ae].size=h.type,F+=X[Ae].nx*X[Ae].ny*X[Ae].size;const te=oe(x,E),$=oe(x,E);if($>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(te<=$)for(let Ae=0;Ae<$-te+1;Ae++)D[Ae+te]=Qe(x,E);const j=new Uint16Array(65536),J=w(D,j),se=Be(x,E);je(h.array,x,E,se,P,F);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Te=X[Ae];for(let we=0;we<X[Ae].size;++we)Fe(P,Te.start+we,Te.nx,Te.size,Te.ny,Te.nx*Te.size,J)}We(j,P,F);let ve=0;const Se=new Uint8Array(P.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let Te=0;Te<h.inputChannels.length;Te++){const we=X[Te],pe=we.nx*we.size,lt=new Uint8Array(P.buffer,we.end*2,pe*2);Se.set(lt,ve),ve+=pe*2,we.end+=pe}return new DataView(Se.buffer)}function he(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),E=ba(x),P=h.inputChannels.length*h.lines*h.columns*h.totalBytes,D=new ArrayBuffer(P),F=new DataView(D);let X=0,te=0;const $=new Array(4);for(let j=0;j<h.lines;j++)for(let J=0;J<h.inputChannels.length;J++){let se=0;switch(h.inputChannels[J].pixelType){case 1:$[0]=X,$[1]=$[0]+h.columns,X=$[1]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ae=E[$[0]++]<<8|E[$[1]++];se+=Ae,F.setUint16(te,se,!0),te+=2}break;case 2:$[0]=X,$[1]=$[0]+h.columns,$[2]=$[1]+h.columns,X=$[2]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ae=E[$[0]++]<<24|E[$[1]++]<<16|E[$[2]++]<<8;se+=Ae,F.setUint32(te,se,!0),te+=4}break}}return F}function ce(h){const x=h.viewer,E={value:h.offset.value},P=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),D={version:He(x,E),unknownUncompressedSize:He(x,E),unknownCompressedSize:He(x,E),acCompressedSize:He(x,E),dcCompressedSize:He(x,E),rleCompressedSize:He(x,E),rleUncompressedSize:He(x,E),rleRawSize:He(x,E),totalAcUncompressedCount:He(x,E),totalDcUncompressedCount:He(x,E),acCompression:He(x,E)};if(D.version<2)throw new Error("EXRLoader.parse: "+ti.compression+" version "+D.version+" is unsupported");const F=new Array;let X=oe(x,E)-2;for(;X>0;){const Te=_e(x.buffer,E),we=Qe(x,E),pe=we>>2&3,lt=(we>>4)-1,Ye=new Int8Array([lt])[0],St=Qe(x,E);F.push({name:Te,index:Ye,type:St,compression:pe}),X-=Te.length+3}const te=ti.channels,$=new Array(h.inputChannels.length);for(let Te=0;Te<h.inputChannels.length;++Te){const we=$[Te]={},pe=te[Te];we.name=pe.name,we.compression=0,we.decoded=!1,we.type=pe.pixelType,we.pLinear=pe.pLinear,we.width=h.columns,we.height=h.lines}const j={idx:new Array(3)};for(let Te=0;Te<h.inputChannels.length;++Te){const we=$[Te];for(let pe=0;pe<F.length;++pe){const lt=F[pe];we.name==lt.name&&(we.compression=lt.compression,lt.index>=0&&(j.idx[lt.index]=Te),we.offset=Te)}}let J,se,ve;if(D.acCompressedSize>0)switch(D.acCompression){case 0:J=new Uint16Array(D.totalAcUncompressedCount),je(h.array,x,E,D.acCompressedSize,J,D.totalAcUncompressedCount);break;case 1:const Te=h.array.slice(E.value,E.value+D.totalAcUncompressedCount),we=ba(Te);J=new Uint16Array(we.buffer),E.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const Te={array:h.array,offset:E,size:D.dcCompressedSize};se=new Uint16Array(ae(Te).buffer),E.value+=D.dcCompressedSize}if(D.rleRawSize>0){const Te=h.array.slice(E.value,E.value+D.rleCompressedSize),we=ba(Te);ve=Oe(we.buffer),E.value+=D.rleCompressedSize}let Se=0;const Ae=new Array($.length);for(let Te=0;Te<Ae.length;++Te)Ae[Te]=new Array;for(let Te=0;Te<h.lines;++Te)for(let we=0;we<$.length;++we)Ae[we].push(Se),Se+=$[we].width*h.type*2;$e(j,Ae,$,J,se,P);for(let Te=0;Te<$.length;++Te){const we=$[Te];if(!we.decoded)switch(we.compression){case 2:let pe=0,lt=0;for(let Ye=0;Ye<h.lines;++Ye){let St=Ae[Te][pe];for(let pt=0;pt<we.width;++pt){for(let et=0;et<2*we.type;++et)P[St++]=ve[lt+et*we.width*we.height];lt++}pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(P.buffer)}function _e(h,x){const E=new Uint8Array(h);let P=0;for(;E[x.value+P]!=0;)P+=1;const D=new TextDecoder().decode(E.slice(x.value,x.value+P));return x.value=x.value+P+1,D}function Ze(h,x,E){const P=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+E));return x.value=x.value+E,P}function xe(h,x){const E=ze(h,x),P=Be(h,x);return[E,P]}function De(h,x){const E=Be(h,x),P=Be(h,x);return[E,P]}function ze(h,x){const E=h.getInt32(x.value,!0);return x.value=x.value+4,E}function Be(h,x){const E=h.getUint32(x.value,!0);return x.value=x.value+4,E}function Ce(h,x){const E=h[x.value];return x.value=x.value+1,E}function Qe(h,x){const E=h.getUint8(x.value);return x.value=x.value+1,E}const He=function(h,x){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(x.value,!0)):E=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,E};function qe(h,x){const E=h.getFloat32(x.value,!0);return x.value+=4,E}function V(h,x){return Hh.toHalfFloat(qe(h,x))}function ee(h){const x=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function oe(h,x){const E=h.getUint16(x.value,!0);return x.value+=2,E}function fe(h,x){return ee(oe(h,x))}function Le(h,x,E,P){const D=E.value,F=[];for(;E.value<D+P-1;){const X=_e(x,E),te=ze(h,E),$=Qe(h,E);E.value+=3;const j=ze(h,E),J=ze(h,E);F.push({name:X,pixelType:te,pLinear:$,xSampling:j,ySampling:J})}return E.value+=1,F}function Ie(h,x){const E=qe(h,x),P=qe(h,x),D=qe(h,x),F=qe(h,x),X=qe(h,x),te=qe(h,x),$=qe(h,x),j=qe(h,x);return{redX:E,redY:P,greenX:D,greenY:F,blueX:X,blueY:te,whiteX:$,whiteY:j}}function ot(h,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],P=Qe(h,x);return E[P]}function Mt(h,x){const E=ze(h,x),P=ze(h,x),D=ze(h,x),F=ze(h,x);return{xMin:E,yMin:P,xMax:D,yMax:F}}function Pt(h,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],P=Qe(h,x);return E[P]}function _t(h,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],P=Qe(h,x);return E[P]}function wt(h,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],P=["ROUND_DOWN","ROUND_UP"],D=Be(h,x),F=Be(h,x),X=Qe(h,x);return{xSize:D,ySize:F,levelMode:E[X&15],roundingMode:P[X>>4]}}function An(h,x){const E=qe(h,x),P=qe(h,x);return[E,P]}function Lr(h,x){const E=qe(h,x),P=qe(h,x),D=qe(h,x);return[E,P,D]}function Dr(h,x,E,P,D){if(P==="string"||P==="stringvector"||P==="iccProfile")return Ze(x,E,D);if(P==="chlist")return Le(h,x,E,D);if(P==="chromaticities")return Ie(h,E);if(P==="compression")return ot(h,E);if(P==="box2i")return Mt(h,E);if(P==="envmap")return _t(h,E);if(P==="tiledesc")return wt(h,E);if(P==="lineOrder")return Pt(h,E);if(P==="float")return qe(h,E);if(P==="v2f")return An(h,E);if(P==="v3f")return Lr(h,E);if(P==="int")return ze(h,E);if(P==="rational")return xe(h,E);if(P==="timecode")return De(h,E);if(P==="preview")return E.value+=D,"skipped";E.value+=D}function un(h,x){const E=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function nr(h,x,E){let P=0;switch(h.levelMode){case"ONE_LEVEL":P=1;break;case"MIPMAP_LEVELS":P=un(Math.max(x,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return P}function ir(h,x,E,P){const D=new Array(h);for(let F=0;F<h;F++){const X=1<<F;let te=x/X|0;P=="ROUND_UP"&&te*X<x&&(te+=1);const $=Math.max(te,1);D[F]=($+E-1)/E|0}return D}function Ir(){const h=this,x=h.offset,E={value:0};for(let P=0;P<h.tileCount;P++){const D=ze(h.viewer,x),F=ze(h.viewer,x);x.value+=8,h.size=Be(h.viewer,x);const X=D*h.blockWidth,te=F*h.blockHeight;h.columns=X+h.blockWidth>h.width?h.width-X:h.blockWidth,h.lines=te+h.blockHeight>h.height?h.height-te:h.blockHeight;const $=h.columns*h.totalBytes,J=h.size<h.lines*$?h.uncompress(h):W(h);x.value+=h.size;for(let se=0;se<h.lines;se++){const ve=se*h.columns*h.totalBytes;for(let Se=0;Se<h.inputChannels.length;Se++){const Ae=ti.channels[Se].name,Te=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we===void 0)continue;E.value=ve+Te;const pe=(h.height-(1+te+se))*h.outLineWidth;for(let lt=0;lt<h.columns;lt++){const Ye=pe+(lt+X)*h.outputChannels+we;h.byteArray[Ye]=h.getter(J,E)}}}}}function Mi(){const h=this,x=h.offset,E={value:0};for(let P=0;P<h.height/h.blockHeight;P++){const D=ze(h.viewer,x)-ti.dataWindow.yMin;h.size=Be(h.viewer,x),h.lines=D+h.blockHeight>h.height?h.height-D:h.blockHeight;const F=h.columns*h.totalBytes,te=h.size<h.lines*F?h.uncompress(h):W(h);x.value+=h.size;for(let $=0;$<h.blockHeight;$++){const j=P*h.blockHeight,J=$+h.scanOrder(j);if(J>=h.height)continue;const se=$*F,ve=(h.height-1-J)*h.outLineWidth;for(let Se=0;Se<h.inputChannels.length;Se++){const Ae=ti.channels[Se].name,Te=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we!==void 0){E.value=se+Te;for(let pe=0;pe<h.columns;pe++){const lt=ve+pe*h.outputChannels+we;h.byteArray[lt]=h.getter(te,E)}}}}}}function It(h,x,E){const P={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");P.version=h.getUint8(4);const D=h.getUint8(5);P.spec={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)},E.value=8;let F=!0;for(;F;){const X=_e(x,E);if(X==0)F=!1;else{const te=_e(x,E),$=Be(h,E),j=Dr(h,x,E,te,$);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${te}'.`):P[X]=j}}if((D&-7)!=0)throw console.error("THREE.EXRHeader:",P),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return P}function wi(h,x,E,P,D){const F={size:0,viewer:x,array:E,offset:P,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Fi};switch(h.compression){case"NO_COMPRESSION":F.blockHeight=1,F.uncompress=W;break;case"RLE_COMPRESSION":F.blockHeight=1,F.uncompress=Q;break;case"ZIPS_COMPRESSION":F.blockHeight=1,F.uncompress=ae;break;case"ZIP_COMPRESSION":F.blockHeight=16,F.uncompress=ae;break;case"PIZ_COMPRESSION":F.blockHeight=32,F.uncompress=ie;break;case"PXR24_COMPRESSION":F.blockHeight=16,F.uncompress=he;break;case"DWAA_COMPRESSION":F.blockHeight=32,F.uncompress=ce;break;case"DWAB_COMPRESSION":F.blockHeight=256,F.uncompress=ce;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const X={};for(const J of h.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":X[J.name]=!0,F.type=J.pixelType}let te=!1;if(X.R&&X.G&&X.B)te=!X.A,F.outputChannels=4,F.decodeChannels={R:0,G:1,B:2,A:3};else if(X.Y)F.outputChannels=1,F.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(F.type==1)switch(D){case Zn:F.getter=fe;break;case Pi:F.getter=oe;break}else if(F.type==2)switch(D){case Zn:F.getter=qe;break;case Pi:F.getter=V}else throw new Error("EXRLoader.parse: unsupported pixelType "+F.type+" for "+h.compression+".");F.columns=F.width;const $=F.width*F.height*F.outputChannels;switch(D){case Zn:F.byteArray=new Float32Array($),te&&F.byteArray.fill(1,0,$);break;case Pi:F.byteArray=new Uint16Array($),te&&F.byteArray.fill(15360,0,$);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let j=0;for(const J of h.channels)F.decodeChannels[J.name]!==void 0&&(F.channelByteOffsets[J.name]=j),j+=J.pixelType*2;if(F.totalBytes=j,F.outLineWidth=F.width*F.outputChannels,h.lineOrder==="INCREASING_Y"?F.scanOrder=J=>J:F.scanOrder=J=>F.height-1-J,F.outputChannels==4?(F.format=yn,F.colorSpace=Fi):(F.format=Pu,F.colorSpace=nn),h.spec.singleTile){F.blockHeight=h.tiles.ySize,F.blockWidth=h.tiles.xSize;const J=nr(h.tiles,F.width,F.height),se=ir(J,F.width,h.tiles.xSize,h.tiles.roundingMode),ve=ir(J,F.height,h.tiles.ySize,h.tiles.roundingMode);F.tileCount=se[0]*ve[0];for(let Se=0;Se<J;Se++)for(let Ae=0;Ae<ve[Se];Ae++)for(let Te=0;Te<se[Se];Te++)He(x,P);F.decode=Ir.bind(F)}else{F.blockWidth=F.width;const J=Math.ceil(F.height/F.blockHeight);for(let se=0;se<J;se++)He(x,P);F.decode=Mi.bind(F)}return F}const ui={value:0},Ur=new DataView(e),uo=new Uint8Array(e),ti=It(Ur,e,ui),hi=wi(ti,Ur,uo,ui,this.type);return hi.decode(),{header:ti,width:hi.width,height:hi.height,data:hi.byteArray,format:hi.format,colorSpace:hi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=mt,s.magFilter=mt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Hn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new tr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),M=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const y=f.packedComponents,L=y.length,C=f.storageType.indexOf("Int")===0,A=1<<M*8,R=C?A*.5:0,b=1/A;S=new Float32Array(v*g);for(let w=0,I=0;w<v;w++)for(let z=0;z<L;z++){const N=y[z];S[I]=(p[I]+R)*b*N.delta+N.from,I++}}else S=p;if(m==="indices"){let y=S;S instanceof Uint8Array&&(y=new Uint16Array(S.length),y.set(S)),l.setIndex(new Xt(y,1))}else l.setAttribute(m,new Xt(S,g));a+=v*g*M}return l.computeBoundingSphere(),l}const Ea=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Jl={density:1,friction:2,restitution:.8},Ky=40,no=8,jy=`
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
`,Jy=`
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
uniform vec4 u_nearPositionRadiusList[${no}];
uniform vec3 u_nearColorList[${no}];

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

  for (int i = 0; i < ${no}; i++) {
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
  gi /= float(${no});

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
`,Qy=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,eS=`
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
`;function tS(i){const e={...Jl},t={...Jl},n={...Jl};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function nS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function xf(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class iS{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Dn().setFromEuler(new ei(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(Ky),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function rS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Ea.length),r=Ea[n];const o=new Zs,s=new Pn(25,1,.1,100);s.position.set(0,0,25);const a=new ll({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Fi,a.toneMapping=Di;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Hn(u),new Promise((O,Oe)=>{new Zy().load(d,O,void 0,Oe)})]);m.minFilter=mt,m.magFilter=mt,m.generateMipmaps=!1,m.colorSpace=nn;const v=new q(10,10,5),g=tS(r),_=nS("balloonBody-25"),p=[],M=[],S=[],y=[],L=Array.from({length:no},()=>new Lt(0,0,-999,.01)),C=Array.from({length:no},()=>new Je(1118481)),A=O=>new Ct({uniforms:{u_matcap:{value:m},u_color:{value:new Je(O.color)},u_bgColor:{value:new Je(1316117)},u_roughness:{value:O.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Lt(0,0,0,1)},u_selfRotation:{value:new Lt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Oe=>Oe.clone())},u_nearColorList:{value:C.map(Oe=>Oe.clone())}},vertexShader:jy,fragmentShader:Jy});for(const O of g){const Oe=A(O),$e=new Bt(f,Oe);$e.frustumCulled=!1,$e.scale.setScalar(O.radius),o.add($e),M.push($e),S.push(Oe),p.push(new iS(O.radius,O.density,O.friction,O.restitution,_,!1)),y.push({i:M.length-1,d2:0})}const R=new Ct({uniforms:{u_color0:{value:new Je(r)},u_color1:{value:new Je(1316117)},u_aspect:{value:1}},vertexShader:Qy,fragmentShader:eS,depthWrite:!1}),b=new Bt(new Si(90,60),R);b.position.z=-12,b.renderOrder=-1e3,o.add(b);const w=new rt(0,0),I=new q,z=new q,N=new q,H=new q,G=new q,k=new q,Y=new q,B=new q,ue=new q,K=new q,de=new Dn,me=.025,Ne=.1,Z=.12,re=O=>{const Oe=(e||i).getBoundingClientRect();w.x=(O.clientX-Oe.left)/Oe.width*2-1,w.y=-((O.clientY-Oe.top)/Oe.height*2-1)};window.addEventListener("pointermove",re);const le=()=>{n=(n+1)%Ea.length,r=Ea[n],M.forEach((O,Oe)=>{const $e=g[Oe];$e.isColored&&(O.material.uniforms.u_color.value.set(r),$e.color=r)}),R.uniforms.u_color0.value.set(r),p.forEach(O=>O.applyImpulse())},ne=()=>le();i.addEventListener("click",ne),e==null||e.addEventListener("click",ne);const ye=()=>{const O=e||i.parentElement,Oe=O.clientWidth,$e=O.clientHeight,Xe=Oe/Math.max($e,1);s.fov=xf(Xe,2.2,2/3,18,30),s.aspect=Xe,s.updateProjectionMatrix(),a.setSize(Oe,$e,!1),R.uniforms.u_aspect.value=Xe};ye(),window.addEventListener("resize",ye);let Fe=0,Re=performance.now();const je=performance.now(),We=()=>{const Oe=(e||i).getBoundingClientRect();l=Oe.bottom>0&&Oe.top<window.innerHeight};window.addEventListener("scroll",We,{passive:!0}),We();const tt=O=>{if(Fe=requestAnimationFrame(tt),!l){Re=O;return}let Oe=Math.min(.05,(O-Re)/1e3);Re=O;const $e=t?1:2;Oe/=$e;const Xe=(O-je)/1e3,ke=xf(Xe,.3,2,25,17.5);s.position.z=ke;for(let Me=0;Me<$e;Me++){const Ee=new q(w.x,w.y,.5).unproject(s);Ee.sub(s.position).normalize();const U=(0-s.position.z)/Ee.z;I.copy(s.position).addScaledVector(Ee,U),N.copy(I).sub(z).multiplyScalar(Z/Math.max(Oe,.001)),H.copy(I).sub(s.position);const T=H.lengthSq()||1;z.copy(I);for(let W=0;W<p.length;W++){const Q=p[W];Q.updateGravity(Oe),k.copy(Q.velocity),Y.copy(Q.position);for(let ce=W+1;ce<p.length;ce++){const _e=p[ce];ue.copy(_e.velocity),K.copy(_e.position),G.copy(Y).sub(K);const Ze=G.length(),xe=Q.radius+_e.radius;if(Ze<xe&&Ze>1e-6){const De=Math.sqrt(Q.friction*_e.friction);Q.frictionTot+=De,_e.frictionTot+=De,G.normalize(),G.multiplyScalar(.5*(Ze-xe)),Y.sub(G),K.add(G),G.normalize();const ze=k.dot(G),Be=ue.dot(G),Ce=Q.mass,Qe=_e.mass,He=(Ce*ze+Qe*Be-Qe*(ze-Be)*Q.restitution)/(Ce+Qe),qe=(Ce*ze+Qe*Be-Ce*(Be-ze)*_e.restitution)/(Ce+Qe);k.addScaledVector(G,(He-ze)/(1+De)),ue.addScaledVector(G,(qe-Be)/(1+De)),_e.position.copy(K),_e.velocity.copy(ue)}}B.copy(Y).sub(s.position);let ae=B.dot(H)/T;ae=B.sub(ue.copy(H).multiplyScalar(ae)).length()-Q.radius-me,ae<0&&(B.copy(Y).sub(s.position).cross(H).normalize(),ue.copy(H).cross(B).normalize(),Y.sub(ue.multiplyScalar(Ne*ae)),ue.multiplyScalar(-Z/Math.max(Oe,.001)),k.add(ue),k.add(N));let ie=Y.length();if(ie>0){B.set(1,1,1).normalize();let ce=1-Math.abs(B.dot(ue.copy(Y).normalize()));ce*=Oe*Math.min(1,Math.max(0,ie/2))*.5,ce*=W%2*2-1,de.setFromAxisAngle(B,ce),ue.copy(Y).applyQuaternion(de).sub(B.copy(Y)),k.add(ue)}B.crossVectors(Y,k);let he=B.length();he/=Q.inertia,he>0&&(B.normalize(),de.setFromAxisAngle(B,he*Oe),Q.quaternion.premultiply(de)),Q.position.copy(Y),Q.velocity.copy(k),Q.update(Oe),["x","y","z"].forEach(ce=>{const _e=ce==="z"?5.5:7.5;Q.position[ce]>_e&&(Q.position[ce]=_e,Q.velocity[ce]*=-.55),Q.position[ce]<-_e&&(Q.position[ce]=-_e,Q.velocity[ce]*=-.55)})}}for(let Me=0;Me<M.length;Me++){const Ee=M[Me],U=p[Me];Ee.position.copy(U.position),Ee.quaternion.copy(U.quaternion);const T=S[Me].uniforms;T.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),T.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),T.u_bgColor.value.copy(R.uniforms.u_color1.value)}for(let Me=0;Me<M.length;Me++){for(let T=0;T<M.length;T++)y[T].i=T,y[T].d2=Me===T?0:p[Me].position.distanceToSquared(p[T].position);y.sort((T,W)=>T.d2-W.d2);const Ee=S[Me].uniforms.u_nearPositionRadiusList.value,U=S[Me].uniforms.u_nearColorList.value;for(let T=0;T<no;T++){const W=y[T+1]?y[T+1].i:y[0].i,Q=p[W];Ee[T].set(Q.position.x,Q.position.y,Q.position.z,Q.radius),U[T].copy(S[W].uniforms.u_color.value)}}s.position.x+=(w.x*.9-s.position.x)*.04,s.position.y+=(w.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Fe=requestAnimationFrame(tt),{cycleColor:le,destroy(){cancelAnimationFrame(Fe),window.removeEventListener("pointermove",re),window.removeEventListener("resize",ye),window.removeEventListener("scroll",We),i.removeEventListener("click",ne),e==null||e.removeEventListener("click",ne),S.forEach(O=>O.dispose()),R.dispose(),a.dispose()}}}function sn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Xn(i){return sn(i,0,1)}function Sp(i,e,t){return(t-i)/(e-i||1)}function Jr(i,e,t){return sn(Sp(i,e,t),0,1)}function ge(i,e,t,n,r,o){let s=Jr(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function yf(i,e,t,n,r,o){let s=Sp(e,t,i);return n+s*(r-n)}function oS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,M)=>1/(3*_*g*g+2*p*g+M),s=(g,_,p,M,S)=>_*(g*g*g)+p*(g*g)+M*g+S,a=(g,_,p,M,S)=>{const y=g*g;return _*(y*g)+p*y+M*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function dt(i){return oS(i,.35,0,0,1)}function Qa(i){return i===1?1:1-Math.pow(2,-10*i)}function sS(i){return i===0?0:Math.pow(1024,i-1)}function aS(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function Ql(i){return 1-Math.cos(i*Math.PI/2)}function lS(i){return-(Math.cos(Math.PI*i)-1)/2}function cS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function ou(i){return i*i*i}function Mp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function _n(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,yf(n,t,t-r,-1,0));s+=Math.max(0,yf(n,0,-r,0,1));const a=ge(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function uS(i){return 1-Math.pow(1-i,3)}function hS(i){return i*i*i*i}function fS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function gi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Sf=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function Hu(i){const e=Sf.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of Sf){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function o(a,l=a){const c=t[a],u=t[l],d=r(),f=c.from,m=u.to,v=(d-f)/Math.max(m-f,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:d>=f&&d<=m,global:d}}function s(a,l){return o(a,l)}return{items:t,progress:r,range:o,between:s,totalWeight:e}}const dS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,pS=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,mS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",_S="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",wp=`
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
`,bp=`
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
`,gS=`
${wp}
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
${bp}
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
`,vS=`
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
`,Mf=`
${wp}
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
${bp}
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
`,mr=5,Ta=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,xS=`
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
`,yS=`
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
`,SS=`
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
`,MS=`
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
`;function _s(i,e,t=!1){const n={minFilter:mt,magFilter:mt,format:yn,type:Pi,depthBuffer:t,stencilBuffer:!1},r=new er(i,e,n);return t&&(r.depthTexture=new Bu(i,e),r.depthTexture.type=Qo),r}function wS(i,e,t,{isMobile:n=!1}={}){const r=new rt(1,1);i.getSize(r);let o=!!n,s=_s(1,1,!0),a=_s(1,1,!1),l=_s(1,1,!1);const c=[],u=[];for(let Me=0;Me<mr;Me++)c.push(_s(1,1)),u.push(_s(1,1));const d=new Ou(-1,1,1,-1,0,1),f=new Bt(new Si(2,2),new Nu),m=new Zs;m.add(f);const v=new Ct({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new rt(1,1)},u_aspect:{value:new rt(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Ta,fragmentShader:xS,depthTest:!1,depthWrite:!1,toneMapped:!1}),g=[];for(let Me=0;Me<mr;Me++){const Ee=3+Me*2;g.push(new Ct({uniforms:{u_texture:{value:null},u_resolution:{value:new rt(1,1)},u_direction:{value:new rt(1,0)}},defines:{KERNEL_RADIUS:Ee,SIGMA:Ee},vertexShader:Ta,fragmentShader:yS,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const _=new Float32Array(mr),p=new Ct({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:_}},vertexShader:Ta,fragmentShader:SS,depthTest:!1,depthWrite:!1,toneMapped:!1});let M=0;const S=new Ct({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new xt},u_prevProjectionViewMatrix:{value:new xt},u_aspect:{value:new rt(1,1)},u_amount:{value:1}},vertexShader:Ta,fragmentShader:MS,depthTest:!1,depthWrite:!1,toneMapped:!1}),y=new xt,L=new xt,C=new xt,A=new xt,R=new xt,b=new q,w=new ei,I=new q(1,1,1),z=new Dn;let N=!0,H=1,G=!1,k=0,Y=0,B=1,ue=1,K=0,de=.015,me=.6,Ne=.3,Z=.5,re=0,le=!0,ne=1,ye=1;const Fe=new rt(1,0),Re=new rt(0,1),je=(Me,Ee)=>{f.material=Me,i.setRenderTarget(Ee),i.clear(),i.render(m,d)},We=Me=>{const Ee=Math.max(1,Me);return 1<<Math.ceil(Math.log(Ee)/Math.log(2))},tt=(Me,Ee)=>{ne=Math.max(1,Math.floor(Me)),ye=Math.max(1,Math.floor(Ee));const U=o?.5:1;s.setSize(Math.max(1,Math.floor(ne*U)),Math.max(1,Math.floor(ye*U))),a.setSize(s.width,s.height);const T=o?4:2;let W=Math.max(1,Math.ceil(ne/T)),Q=Math.max(1,Math.ceil(ye/T));l.setSize(W,Q);for(let ie=0;ie<mr;ie++)c[ie].setSize(W,Q),u[ie].setSize(W,Q),W=Math.max(1,Math.ceil(W/2)),Q=Math.max(1,Math.ceil(Q/2));v.uniforms.u_texelSize.value.set(1/ne,1/ye);const ae=ye/Math.sqrt(ne*ne+ye*ye)*2;v.uniforms.u_aspect.value.set(ne/ye*ae,ae),S.uniforms.u_aspect.value.set(ne/Math.max(ye,1),1)},O=({blackFrameInRatio:Me=0,blackTitleRatio:Ee=0,blackTunnelRatio:U=0,whiteFrameRatio:T=0,whiteTunnelWaitRatio:W=0,astronautDropRatio:Q=0,isWhiteTunnelActive:ae=!1,isBlackTunnelActive:ie=!1,isMobile:he=!1}={})=>{o=!!he;let ce=Me*(Yt.lerp(0,.15,Ee)+Yt.clamp((U-.2)/.2,0,1)*.25);if(U>=.65){const Ze=Yt.clamp((U-.65)/.1,0,1);ce=ce+(.08-ce)*Ze}if(ae&&(ce=0),!ae&&Me>.55&&U<.25){const Ze=Yt.lerp(he?.24:.42,he?.12:.18,Yt.clamp(Ee/.5,0,1));ce=Math.max(ce,Ze*Math.min(1,Me))}if(K=ce,B=U<1?Yt.lerp(1,3,Yt.clamp(U/.7,0,1)):1,ae){const Ze=he?10:20;k=Q<1?Yt.lerp(he?3.2:3.4,2,Yt.clamp(T/.05,0,1)):Yt.lerp(0,Ze,Yt.clamp(W/.1,0,1)),re=Yt.lerp(.3,0,Yt.clamp(W/.1,0,1))}else{const Ze=Yt.clamp(Ee/.25,0,1);k=Yt.lerp(he?22:30,he?5:6,Ze),re=0}const _e=!ae&&Me>.55&&U<.2;me=_e?.85:.6,de=_e?.04:he?.012:.02,Ne=_e?.15:.3,Z=_e?.75:.5,Y=he?.15:_e?.55:.5,ue=_e?1.15:1,G=ie||ae},Oe=(Me,Ee=0)=>{b.set(0,0,Me),w.set(0,0,Ee)},$e=()=>{N=!0},Xe=(Me,Ee)=>{const U=i.autoClear;i.autoClear=!0,je(Me,Ee),i.autoClear=U},ke=()=>{var ie;if(!le){i.setRenderTarget(null),i.render(e,t);return}const Me=i.getRenderTarget(),Ee=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor((ie=e.background)!=null&&ie.isColor?e.background.getHex():0,re),i.clear();const U=e.background;e.background=null,i.render(e,t),e.background=U;let T=s.texture;if(y.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),C.copy(y).invert(),G&&H>0?(N&&(L.copy(y),N=!1),R.compose(b,z.setFromEuler(w),I),R.invert(),A.copy(L).multiply(R),S.uniforms.u_texture.value=s.texture,S.uniforms.u_depthTexture.value=s.depthTexture,S.uniforms.u_projectionViewInverseMatrix.value.copy(C),S.uniforms.u_prevProjectionViewMatrix.value.copy(A),S.uniforms.u_amount.value=H,Xe(S,a),T=a.texture,L.copy(y)):(L.copy(y),N=!0),k<.05&&K<.005){p.uniforms.u_texture.value=T;for(let he=0;he<mr;he++)_[he]=0,p.uniforms[`u_blurTexture${he}`].value=T;p.uniforms.u_saturation.value=1,i.setRenderTarget(null),je(p,null),i.autoClear=Ee,i.setRenderTarget(Me);return}v.uniforms.u_texture.value=T,v.uniforms.u_amount.value=ue,v.uniforms.u_haloStrength.value=K,v.uniforms.u_haloWidth.value=me,v.uniforms.u_haloRGBShift.value=de,v.uniforms.u_haloMaskInner.value=Ne,v.uniforms.u_haloMaskOuter.value=Z,Xe(v,l);const W=o?3:mr;let Q=l;for(let he=0;he<W;he++){const ce=g[he];ce.uniforms.u_texture.value=Q.texture,ce.uniforms.u_resolution.value.set(Q.width,Q.height),ce.uniforms.u_direction.value=Fe,Xe(ce,c[he]),ce.uniforms.u_texture.value=c[he].texture,ce.uniforms.u_resolution.value.set(c[he].width,c[he].height),ce.uniforms.u_direction.value=Re,Xe(ce,u[he]),Q=u[he]}let ae=k;if(!o){const he=We(ne/2)>>1,ce=We(ye/2)>>1,_e=Math.max(1,Math.ceil(Math.log(he*ce)/Math.log(2)));ae=k*1024/Math.pow(_e,4)*.85*48}for(let he=0;he<mr;he++){if(he>=W){_[he]=0;continue}const ce=(W-he)/W;let _e=ae*(ce+(1.2-ce*2)*Y)/Math.pow(2,W-he-1);!o&&he===0&&(_e*=.15),!o&&he===1&&(_e*=.45),!o&&he>=3&&(_e*=1.75),_[he]=_e}p.uniforms.u_texture.value=T,p.uniforms.u_saturation.value=B;for(let he=0;he<mr;he++){const ce=he<W?u[he].texture:u[W-1].texture;p.uniforms[`u_blurTexture${he}`].value=ce}i.setRenderTarget(null),je(p,null),i.autoClear=Ee,i.setRenderTarget(Me)};return tt(r.x,r.y),{resize:tt,sync:O,render:ke,setEfxOffset:Oe,markEfxSync:$e,setEfxAmount(Me){H=Me},get clearAlpha(){return re},setEnabled(Me){le=!!Me},setScrollVelocity(Me){const Ee=Math.min(1,Math.abs(Me)*.12);M+=(Ee-M)*.12,p.uniforms.u_scrollPaint.value=M},destroy(){s.dispose(),a.dispose(),l.dispose(),c.forEach(Me=>Me.dispose()),u.forEach(Me=>Me.dispose()),v.dispose(),p.dispose(),S.dispose(),g.forEach(Me=>Me.dispose()),f.geometry.dispose()}}}function bS(i,e,t){return i+(e-i)*t}const vr=class vr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<vr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&vr.MAX_VERTICES_MASK,a=s+1&vr.MAX_VERTICES_MASK;return bS(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ge(vr,"MAX_VERTICES",512),Ge(vr,"MAX_VERTICES_MASK",vr.MAX_VERTICES-1);let el=vr;const Ei=new q,Fs=class Fs{constructor(){this._position=new q,this._rotation=new Dn,this._euler=new ei,this._scale=new q(1,1,1),this._matrix=new xt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new el,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Ei.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Ei.multiply(this._positionScale),Ei.multiplyScalar(this._positionAmplitude*Fs.FBM_NORM),this._position.copy(Ei)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Ei.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Ei.multiply(this._rotationScale),Ei.multiplyScalar(this._rotationAmplitude*Fs.FBM_NORM),this._euler.set(Ei.x,Ei.y,Ei.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ge(Fs,"FBM_NORM",1/.75);let Is=Fs;class su{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const wf=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],ES=26,Yr=64,TS=34,gs=new rt(1465,1024),AS=`
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
`,RS=`
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
`,CS=`
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
`,PS=`
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
`,Aa=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function LS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function DS(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?TS:ES,[s,a]=await Promise.all([new _r().loadAsync(`${e}assets/textures/tunnels/${r}`),Hn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=bn,s.flipY=!1,s.needsUpdate=!0;const l=new Li;i.add(l);const c=new Si(1,1),u=new eo;for(const w in c.attributes)u.setAttribute(w,c.attributes[w]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let w=0,I=0;w<o;w++,I+=4){d[w]=w/o;const z=wf[w%wf.length];f[I]=z.x/gs.x,f[I+1]=z.y/gs.y,f[I+2]=z.w/gs.x,f[I+3]=z.h/gs.y,m[I]=Math.random(),m[I+1]=Math.random(),m[I+2]=Math.random(),m[I+3]=Math.random()}u.setAttribute("instanceId",new gn(d,1)),u.setAttribute("instanceUvInfo",new gn(f,4)),u.setAttribute("instanceRands",new gn(m,4)),u.instanceCount=o;const v=new Ct({vertexShader:AS,fragmentShader:RS,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:gs.clone()},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ws,blendEquation:Tn,blendSrc:Bo,blendDst:ko,blendEquationAlpha:Tn,blendSrcAlpha:Fa,blendDstAlpha:Fa,defines:{COUNT:o}}),g=new Bt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new eo;for(const w in a.attributes)_.setAttribute(w,a.attributes[w]);a.index&&(_.index=a.index);const p=LS("diamonds-3"),M=new Float32Array(Yr*3),S=new Float32Array(Yr*3),y=new Float32Array(Yr*4),L=new q;for(let w=0,I=0,z=0;w<Yr;w++,I+=3,z+=4)M[I]=16*(p()*2-1),M[I+1]=16*(p()*2-1),M[I+2]=19-(Yr-w-1)/(Yr-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[I]=L.x,S[I+1]=L.y,S[I+2]=L.z,y[z]=p(),y[z+1]=p(),y[z+2]=p(),y[z+3]=p();_.setAttribute("a_instancePosition",new gn(M,3)),_.setAttribute("a_instanceRotationAxis",new gn(S,3)),_.setAttribute("a_instanceRand",new gn(y,4)),_.instanceCount=Yr;const C=[];for(let w=0;w<25;w++)C.push(new Lt(Aa[w*4],Aa[w*4+1],Aa[w*4+2],Aa[w*4+3]));const A=new Ct({vertexShader:CS,fragmentShader:PS,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Je("#689aff")},u_planes:{value:C},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ws,blendEquation:Tn,blendSrc:oi,blendDst:Fa,blendEquationAlpha:Tn,blendSrcAlpha:oi,blendDstAlpha:oi}),R=new Bt(_,A);R.frustumCulled=!1,R.renderOrder=20,R.visible=!1,A.blending=Er,A.blendSrc=Bo,A.blendDst=ko,A.blendSrcAlpha=Bo,A.blendDstAlpha=ko,l.add(R),g.renderOrder=15;const b=new Je(0);return{update({whiteTunnelWaitRatio:w=0,aspect:I=1,bg:z="#000000"}={}){const N=ge(w,0,.12,0,1),H=N>0;l.visible=H,g.visible=H,R.visible=H,v.uniforms.u_activeRatio.value=N,A.uniforms.u_activeRatio.value=N,v.uniforms.u_aspect.value=I,A.uniforms.u_aspect.value=I,b.set(z),v.uniforms.u_bgColor.value.copy(b),A.uniforms.u_bgColor.value.copy(b)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const vs=53,Ra=16,Ca=20,bf=["helmet","helmet_glass","glove_shoes","wearpack"],xs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],ec=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Ef(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Tf(i,e){const[t,n]=await Promise.all([Ef(i),Ef(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new ku(u,r,o,yn,Ui);return d.colorSpace=nn,d.flipY=!1,d.generateMipmaps=!1,d.minFilter=mt,d.magFilter=mt,d.wrapS=$n,d.wrapT=$n,d.needsUpdate=!0,d}function Af(i,e,t){const n=new ku(i,e,t,yn,Zn);return n.magFilter=ln,n.minFilter=ln,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function tc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new gn(t,3)}const Pa=`
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
`;async function IS(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,M,...S]=await Promise.all([Hn(`${r}assets/models/tunnels/astronaut_animations.buf`),Hn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Hn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new _r().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new _r().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new _r().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Hn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Hn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Hn(`${r}assets/models/tunnels/grid_base_ld.buf`),Hn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Hn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Hn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new _r().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...bf.map(be=>Hn(`${r}assets/models/tunnels/astronaut_${be}.buf`))]),y=new Zs;y.background=new Je(0);const L=new q(0,0,25),C=new q(0,0,24),A=45,R=new Pn(A,1,1,200);R.position.copy(L),R.lookAt(C);let b;try{b=new ll({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(be){throw console.error("Goal WebGL unavailable",be),be}b.setClearColor(0,1),b.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),b.outputColorSpace=Fi,b.toneMapping=Di,b.autoClear=!0,c.colorSpace=nn,c.generateMipmaps=!1,c.minFilter=mt,c.magFilter=mt,u.colorSpace=nn,u.generateMipmaps=!1,u.minFilter=mt,u.magFilter=mt,d.colorSpace=nn,d.wrapS=d.wrapT=Ho,d.generateMipmaps=!1,d.minFilter=mt,d.magFilter=mt;const w=s.attributes.position.array,I=s.attributes.orient.array,z=w.length/3,N=z/vs,H=Math.ceil(Math.sqrt(z)),G=Math.ceil(z/H),k=H*G,Y=new Float32Array(k*4),B=new Float32Array(k*4);for(let be=0,Ve=0,Pe=0;be<z;be++,Ve+=3,Pe+=4)Y[Pe]=w[Ve],Y[Pe+1]=w[Ve+1],Y[Pe+2]=w[Ve+2],Y[Pe+3]=1,B[Pe]=I[Pe],B[Pe+1]=I[Pe+1],B[Pe+2]=I[Pe+2],B[Pe+3]=I[Pe+3];const ue=Af(Y,H,G),K=Af(B,H,G),de=new gn(new Float32Array([0,0,18]),3);de.setUsage(ar);const me=new gn(new Float32Array([0,0,0,1]),4);me.setUsage(ar);const Ne=new gn(new Float32Array([0,1,0]),3);Ne.setUsage(ar);const Z=new gn(new Float32Array([90,91,0]),3);Z.setUsage(ar);const re=()=>{const be=new er(1,1,{minFilter:Yi,magFilter:mt,format:yn,generateMipmaps:!0});return be.texture.wrapS=be.texture.wrapT=Ka,be},le=re(),ne=re();let ye=le,Fe=ne;const Re={u_animationPositionTexture:{value:ue},u_animationOrientTexture:{value:K},u_animationTextureSize:{value:new rt(H,G)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Je("#566d80")},u_bgColor:{value:new Je("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Je(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Je("#aaaafb")},u_cardPosition:{value:new q}},je={u_blackTunnelTexture:{value:ye.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},We={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async be=>{const[Ve,Pe]=await Promise.all([Tf(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${be}_base.webp`),new _r().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_nor.webp`)]);Pe.colorSpace=nn,Pe.flipY=!1,Pe.generateMipmaps=!1,Pe.minFilter=mt,Pe.magFilter=mt,We[be]={armb:Ve,nor:Pe}})),We.helmet_glass=We.helmet;const tt=new Li;y.add(tt);const O=[],Oe=4,$e=new gn(new Float32Array(Oe*3),3);$e.setUsage(ar);const Xe=new gn(new Float32Array(Oe*4),4);Xe.setUsage(ar);const ke=new gn(new Float32Array(Oe*3),3);ke.setUsage(ar);const Me=new gn(new Float32Array(Oe*3),3);Me.setUsage(ar);for(let be=0;be<Oe;be++)Xe.setXYZW(be,0,0,0,1),ke.setXYZ(be,0,1,0),Me.setXYZ(be,90,91,0);const Ee=[];let U=0;const T={value:0};bf.forEach((be,Ve)=>{const Pe=S[Ve],it=new eo;for(const Qt in Pe.attributes)it.setAttribute(Qt,Pe.attributes[Qt]);Pe.index&&it.setIndex(Pe.index),it.instanceCount=1,it.setAttribute("instancePos",de),it.setAttribute("instanceOrient",me),it.setAttribute("instanceAnimationFrameFromToBlend1",Ne),it.setAttribute("instanceAnimationFrameFromToBlend2",Z);const ct=be==="helmet_glass"||be==="card"?"helmet":be,Rt=be==="helmet_glass",gt={...Re,u_armbTexture:{value:We[ct].armb},u_norTexture:{value:We[ct].nor}},Gt={...Re,...je,u_armbTexture:{value:We[ct].armb},u_norTexture:{value:We[ct].nor}},Kt=new Ct({uniforms:gt,vertexShader:Pa,fragmentShader:gS,transparent:!0,blending:yi,side:En,defines:{BONE_COUNT:vs,IS_WHITE:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),fn=new Ct({uniforms:Gt,vertexShader:Pa,fragmentShader:Mf,transparent:!0,blending:yi,side:En,defines:{BONE_COUNT:vs,IS_BLACK:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Cn=new Bt(it,Kt);if(Cn.frustumCulled=!1,Cn.userData.whiteMat=Kt,Cn.userData.blackMat=fn,tt.add(Cn),O.push(Cn),!Rt){const Qt=new eo;for(const bi in Pe.attributes)Qt.setAttribute(bi,Pe.attributes[bi]);Pe.index&&Qt.setIndex(Pe.index),Qt.instanceCount=Oe,Qt.setAttribute("instancePos",$e),Qt.setAttribute("instanceOrient",Xe),Qt.setAttribute("instanceAnimationFrameFromToBlend1",ke),Qt.setAttribute("instanceAnimationFrameFromToBlend2",Me);const fi=new Ct({uniforms:{...Gt,u_armbTexture:{value:We[ct].armb},u_norTexture:{value:We[ct].nor},u_alpha:T},vertexShader:Pa,fragmentShader:Mf,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ws,blendEquation:Tn,blendSrc:oi,blendDst:oi,blendEquationAlpha:Tn,blendSrcAlpha:oi,blendDstAlpha:oi,side:En,defines:{BONE_COUNT:vs,IS_BLACK:!0,IS_CLONE:!0}}),en=new Bt(Qt,fi);en.frustumCulled=!1,en.renderOrder=1e3,en.visible=!1,tt.add(en),Ee.push(en)}});const W=new rt(5,23),Q=new el;let ae=0,ie=!1;const he=document.createElement("canvas");he.width=he.height=11;{const be=he.getContext("2d");be.fillStyle="#000",be.fillRect(0,0,11,11),be.fillStyle="#f00",be.fillRect(1,1,3,9),be.fillStyle="#0f0",be.fillRect(4,1,3,9),be.fillStyle="#00f",be.fillRect(7,1,3,9)}const ce=new Ay(he);ce.needsUpdate=!0,ce.minFilter=mt,ce.magFilter=mt;const _e=await new _r().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);_e.minFilter=ln,_e.magFilter=ln,_e.colorSpace=nn,_e.flipY=!1;const Ze=new Si(.2,.15).translate(0,1.68,.1);Ze.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),Ze.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),Ze.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),Ze.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const xe=new eo;for(const be in Ze.attributes)xe.setAttribute(be,Ze.attributes[be]);Ze.index&&xe.setIndex(Ze.index),xe.instanceCount=1,xe.setAttribute("instancePos",de),xe.setAttribute("instanceOrient",me),xe.setAttribute("instanceAnimationFrameFromToBlend1",Ne),xe.setAttribute("instanceAnimationFrameFromToBlend2",Z);const De=new Ct({uniforms:{...Re,u_cardLedTexture:{value:ce},u_cardTexture:{value:_e},u_cardColor:{value:new Je("#ddddff")},u_cardUvOffset:{value:new rt(0,0)},u_cardTextureSize:{value:W},u_cardOpacity:{value:0}},vertexShader:Pa,fragmentShader:vS,transparent:!0,depthTest:!1,depthWrite:!1,side:En,blending:Ws,blendEquation:Tn,blendSrc:oi,blendDst:oi,blendEquationAlpha:Tn,blendSrcAlpha:oi,blendDstAlpha:oi,defines:{BONE_COUNT:vs}}),ze=new Bt(xe,De);ze.frustumCulled=!1,ze.renderOrder=100,ze.visible=!1,tt.add(ze);const Be=new Li;y.add(Be);const Ce=new Is;Ce.positionAmplitude=2,Ce.positionFrequency=1,Ce._enableRotationNoise=!1;const Qe=Ce.position;let He=0,qe=1,V=typeof window<"u"?window.scrollY:0,ee=1;const oe=(be,Ve)=>{const Pe=new eo;for(const gt in be.attributes)Pe.setAttribute(gt,be.attributes[gt]);be.index&&Pe.setIndex(be.index);const it=new Float32Array(Ra);for(let gt=0;gt<Ra;gt++)it[gt]=gt;Pe.setAttribute("a_instanceId",new gn(it,1)),Pe.instanceCount=Ra;const ct=new Ct({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:Qe},u_time:{value:0}},vertexShader:mS,fragmentShader:_S,transparent:!0,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ra,...Ve?{IS_WALL:!0}:{}}}),Rt=new Bt(Pe,ct);return Rt.frustumCulled=!1,Be.add(Rt),ct},fe=oe(f,!1),Le=oe(m,!0),Ie=await DS(y,{base:r,isMobile:n,sharedTime:Re.u_time}),ot=new Ct({uniforms:{u_color:{value:new Je(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:yi}),Mt=new Bt(new Si(200,200),ot);Mt.position.z=-80,Mt.renderOrder=-10,y.add(Mt);const Pt=new Li;y.add(Pt);const _t=await Tf(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);_t.wrapS=_t.wrapT=Ho,M.colorSpace=nn,M.flipY=!1,M.wrapS=M.wrapT=Ho;const wt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:ye.texture},u_greebleArmbTexture:{value:_t},u_greebleNormalTexture:{value:M},u_resolution:{value:new rt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new Je(xs[0])},u_color2:{value:new Je(ec[0])}},An=(be,Ve,Pe)=>{const it=new eo;for(const Gt in be.attributes)it.setAttribute(Gt,be.attributes[Gt]);be.index&&it.setIndex(be.index);const ct=be.attributes.position.count;it.getAttribute("ao")||it.setAttribute("ao",new Xt(new Float32Array(ct).fill(1),1)),it.getAttribute("areaRatio")||it.setAttribute("areaRatio",new Xt(new Float32Array(ct),1)),it.getAttribute("height")||it.setAttribute("height",new Xt(new Float32Array(ct).fill(1),1)),it.getAttribute("cluster")||it.setAttribute("cluster",new Xt(new Float32Array(ct),1)),it.setAttribute("instancePos",tc(Ve.attributes.position)),it.setAttribute("instanceGridIds",tc(Ve.attributes.gridIds)),it.setAttribute("instanceAxis",tc(Ve.attributes.rotAxis)),it.instanceCount=Ve.attributes.position.count;const Rt=new Ct({uniforms:wt,vertexShader:dS,fragmentShader:pS,side:En,transparent:!1,depthWrite:!0,blending:Er,defines:{GRID_SIZE:Ca,...Pe?{IS_HD:!0}:{}}}),gt=new Bt(it,Rt);return gt.frustumCulled=!1,gt.renderOrder=Pe?2:1,Pt.add(gt),gt};An(v,g,!1),o&&_&&p&&An(_,p,!0);let Lr=0,Dr=0,un=0,nr=A,ir=0,Ir=-80,Mi=0;const It=new Is;It.positionFrequency=.2,It.rotationFrequency=.15,It.positionAmplitude=0,It.rotationAmplitude=0;const wi=new su(new q,1,.65,1.3),ui=new su(new q,1,.85,1.1),Ur=Array.from({length:Oe},()=>{const be=new Is;return be.positionFrequency=.2,be.rotationFrequency=.6,be.positionAmplitude=12,be.rotationAmplitude=10,be}),uo=Float32Array.from({length:Oe+1},(be,Ve)=>Ve===0?0:Math.random()*2),ti=new Float32Array(Oe),hi=new Float32Array(Oe),h=new q,x=new Dn,E=new xt,P=new xt,D=new q,F=new q,X=new Dn,te=new ei,$=new q(1,1,1),j=new Je,J=new Je,se=new q,ve=new q;let Se=0,Ae=0,Te=0,we=0,pe=.08;const lt=.1;let Ye=!1,St=0,pt=0,et=0;window.addEventListener("pointermove",be=>{Se=be.clientX/Math.max(window.innerWidth,1)*2-1,Ae=be.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ye=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ye=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ye=!1},{passive:!0});const bt=()=>{R.near=1,R.far=200,R.position.copy(L),R.up.set(0,1,0),R.lookAt(C),R.fov=nr,se.set(0,0,-1).applyQuaternion(R.quaternion);let be=ve.copy(C).sub(R.position).dot(se);const Ve=R.fov,Pe=Ve+un,it=Math.max(1,Math.min(170,Pe));let ct=be*Math.tan(Ve/360*Math.PI/2)/Math.tan(it/360*Math.PI/2)-be;Number.isFinite(ct)||(ct=0),R.translateZ(ct),R.fov=Ve,be+=ct,R.translateZ(be*-1);const Rt=n?pe*.35:pe,gt=Math.max(-1,Math.min(1,Ae))*Rt,Gt=Math.max(-1,Math.min(1,-Se))*Rt;Te+=(gt-Te)*lt,we+=(Gt-we)*lt,te.set(Te,we,0),X.setFromEuler(te),R.quaternion.multiply(X),R.translateZ(be),R.updateProjectionMatrix()},ht=be=>{if(It.update(be),wi.update(be,It.position),D.copy(It.euler),ui.update(be,D),te.set(ui.value.x,ui.value.y,ui.value.z),X.setFromEuler(te),P.compose(wi.value,X,$),E.compose(h,x,$),E.multiply(P),E.decompose(D,X,F),de.setXYZ(0,D.x,D.y,D.z),me.setXYZW(0,X.x,X.y,X.z,X.w),de.needsUpdate=!0,me.needsUpdate=!0,ul=1+Math.min(3.5,wi.valueVel.length()*.2+ui.valueVel.length()*.2),U>.01&&!Zt&&!Nr){for(let Ve=0;Ve<Oe;Ve++){const Pe=Ur[Ve];Pe.positionFrequency=.2,Pe.rotationFrequency=.6,Pe.positionAmplitude=12,Pe.rotationAmplitude=10,Pe.update(be),E.compose(h,x,$),E.multiply(Pe.matrix),E.decompose(D,X,F);const it=Ve/Math.max(Oe-1,1),ct=ge(U,it*.3,.7+it*.3,1,0,lS);F.set(de.getX(0),de.getY(0),de.getZ(0)),D.lerp(F,ct),$e.setXYZ(Ve,D.x,D.y,D.z),Xe.setXYZW(Ve,X.x,X.y,X.z,X.w)}$e.needsUpdate=!0,Xe.needsUpdate=!0}},st=i.parentElement||e,nt=Hu(e);let Ke=0,Ut=0,Nt=0,at=0,Rn=0,cl=0,Fr=0,Vu=0,ho=0,ni=0,Gu=0,Nr=!0,hn=!1,Zt=!1,as=0,rr=0,ul=1,hl=0,Wu=performance.now(),Qs=!1,Xu=!1;const on=wS(b,y,R,{isMobile:n}),ls=()=>{const be=st,Ve=be.clientWidth||window.innerWidth,Pe=be.clientHeight||window.innerHeight;R.aspect=Ve/Math.max(Pe,1),bt(),b.setSize(Ve,Pe,!1),on.resize(Ve,Pe),wt.u_resolution.value.set(Ve,Pe);const it=Math.max(1,Math.floor(Ve*.25)),ct=Math.max(1,Math.floor(Pe*.25));(le.width!==it||le.height!==ct)&&(le.setSize(it,ct),ne.setSize(it,ct))};ls(),window.addEventListener("resize",ls);const qu=(be,Ve,Pe=100)=>{const it=be.attributes.position.array,ct=be.attributes.orient.array,Rt=Math.min(Math.floor(Ve),Pe-1),gt=Math.min(Math.ceil(Ve),Pe-1),Gt=Ve-Math.floor(Ve),Kt=new q().fromArray(it,Rt*3).lerp(new q().fromArray(it,gt*3),Gt),fn=new Dn().fromArray(ct,Rt*4).slerp(new Dn().fromArray(ct,gt*4),Gt);return{p:Kt,q:fn}},ea=()=>{var cs;if(!e)return;const be=window.innerHeight,Ve=window.scrollY||0;Ve!==V&&(ee=Ve>V?1:-1,V=Ve),Rn=nt.range("blackFrameIn").ratio,Nt=nt.range("blackTitle").ratio,at=nt.range("blackTunnel").ratio,Fr=nt.range("whiteTunnel").ratio,Ke=nt.between("whiteTunnel","whiteFrameOut").ratio,Vu=nt.range("whiteFrameOut").ratio,cl=nt.range("whiteFrameBreak").ratio,Gu=nt.between("whiteTunnel","whiteFrameBreak").ratio,ni=nt.between("whiteFrameBreak","astronautDrop").ratio,ho=((cs=nt.range("astronautWait"))==null?void 0:cs.ratio)??0,et=nt.between("whiteFrameBreak","astronautWait").ratio,Nr=Nt<1,hn=at<1&&!Nr,Zt=Ke<=1&&!hn&&!Nr,Ut=Zt?gi(0,.15,Gu):1,on.sync({blackFrameInRatio:Rn,blackTitleRatio:Nt,blackTunnelRatio:at,whiteFrameRatio:Fr,whiteTunnelWaitRatio:ho,astronautDropRatio:ni,isWhiteTunnelActive:Zt,isBlackTunnelActive:hn,isMobile:n}),Re.u_whiteTunnelRatio.value=Ke,Re.u_showRatio.value=Ut,Re.u_frameOutRatio.value=cl,fe.uniforms.u_ratio.value=Ke,Le.uniforms.u_ratio.value=Ke,fe.uniforms.u_ratioInverse.value=1-Ke,Le.uniforms.u_ratioInverse.value=1-Ke,Re.u_ambientColor.value.set(Zt&&ni<1?"#9eb4c8":"#566d80");const Pe=new Je(Zt&&ni<1?"#ffffff":"#000000");ot.uniforms.u_color.value.copy(Pe),y.background=null,b.setClearColor(Pe,on.clearAlpha),Re.u_bgColor.value.copy(Pe),st&&!st.classList.contains("is-windowed")&&(st.style.background=Pe.getStyle()),(st==null?void 0:st.classList.contains("is-windowed"))?(document.documentElement.style.background="",document.body.style.background=""):Zt&&ni<1?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):hn||Nr?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Be.visible=Zt&&ni<1,Pt.visible=hn;const ct=document.getElementById("header");ct&&((st==null?void 0:st.classList.contains("is-pinned"))?Zt&&ni<1?ct.style.color="#000000":ct.style.color="#ffffff":ct.style.color="");const Rt=e.dataset.goalPhase==="black-tunnel",gt=e.dataset.goalPhase==="white";(hn&&!Rt||Zt&&!gt)&&on.markEfxSync();const Gt=Zt;for(const dn of O){const us=Gt?dn.userData.whiteMat:dn.userData.blackMat;dn.material!==us&&(dn.material=us)}U=hn?gi(.2,.4,at):0,T.value=U;for(const dn of Ee)dn.visible=!Zt&&U>.01;let Kt;if(Zt){const dn=Ke<1?ge(Ke,0,1,0,79):ge(ni,0,1,79,99);Kt=qu(l,dn,100),Kt.p.y-=(n?0:.4)*fS(ni)}else Kt=qu(a,100*ou(Math.min(Nt,1)),100);if(h.copy(Kt.p),x.copy(Kt.q),It.positionFrequency=.2,It.rotationFrequency=.15,It.positionAmplitude=0,It.rotationAmplitude=0,hn){const dn=at;It.positionFrequency=.2+.5*dn,It.rotationFrequency=.15,It.positionAmplitude=5*dn,It.rotationAmplitude=60*dn}else Zt&&(It.positionFrequency=ge(Fr,0,.45,.5,.2),It.rotationFrequency=ge(Fr,0,.45,.4,.15),It.positionAmplitude=ge(Fr,0,.75,5,0),It.rotationAmplitude=ge(Fr,0,.75,15,0));tt.visible=Ut>.02;const fn=window.innerHeight||1,Cn=Math.max(1,(st==null?void 0:st.clientHeight)||fn),Qt=Rn<1?Rn:1-Fr,fi=Yt.lerp(Cn*(n?.72:.55),fn,Qt),en=L.distanceTo(C),bi=A/180*Math.PI,fo=Math.tan(bi/2)*en*2*(fn/Math.max(fi,1));nr=Math.atan(fo/2/en)*2/Math.PI*180,Zt?un=ge(Ke,0,1,n?36:60,0):hn?(un=Math.sin(at*10+He)*(n?4.5:7.5)*gi(0,.2,at),Pt.position.z=-80*Jr(.2,0,at)):(un=ge(Rn,0,1,n?12:20,0),Pt.position.z=-80),pe=.08*gi(.5,1,Nt)+.02,Ke>0&&(pe*=ge(nt.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),pe=ge(ho,0,.1,pe,.05),pt=(1-St)*ee*2.5*ge(Rn,0,.5,0,1)*ge(ho,0,.25,1,0),bt(),je.u_frameIn.value=Rn,je.u_sunFactor.value=hn?1-gi(.1,.2,at):1,je.u_blackTunnelRatio.value=hn?gi(.1,.3,at):0,je.u_endRatio.value=hn?gi(.65,.9,at):0,je.u_offsetZ.value=wt.u_offsetZ.value;const or=ge(ni,1,0,.2,1)*(cl>0?1:0);Re.u_tintColor.value.setStyle("#2533c2").multiplyScalar(or);const po=st.getBoundingClientRect();Qs=po.bottom>0&&po.top<be,Qs&&!Xu&&Nr&&(as=0,rr=0),Xu=Qs,e.dataset.goalPhase=Zt?"white":hn?"black-tunnel":"title"},Pp=be=>{if(!hn){wt.u_showRatio.value=0,on.setEfxOffset(0,0);return}wt.u_showRatio.value=sS(Jr(0,.1,at));const Ve=wt.u_outBloomFromToStrength.value;Ve.z=ge(at,.65,.75,0,.2),Ve.z=ge(at,.75,.85,Ve.z,.15),Ve.z=ge(at,.85,1,Ve.z,.15),Ve.x=ge(at,.75,.85,20,60),Ve.x=ge(at,.9,1,Ve.x,30);const Pe=ge(at,.6,1,0,1,Ql);wt.u_blackTunnelTransformRatio.value=Pe;const it=ee*be;Lr+=it*Jr(.1,.3,at)*ge(Pe,0,.25,1,.5),Dr+=it*ge(Pe,0,.25,1.5,1);const ct=Lr,Rt=Math.floor(ct),gt=ct-Rt,Gt=(Rt+Mp(gt))*Ca+Dr*Ca+at*Ca*10,Kt=-80*Jr(.2,0,at);let fn=Kt-Ir,Cn=Gt-ir;(Math.abs(Cn)>8||Math.abs(fn)>20)&&(Cn=0,fn=0),Mi=fn+Cn,Ir=Kt,ir=Gt,Pt.position.z=Kt,wt.u_offsetZ.value=Gt,je.u_offsetZ.value=Gt,wt.u_time.value=He;const Qt=xs.length*ge(at,.2,1,0,1),fi=Math.floor(Qt),en=Math.min(Math.ceil(Qt),xs.length-1),fo=Qt-fi>.5?1:0;j.set(xs[fi]),J.set(xs[en]),j.lerp(J,fo),wt.u_color1.value.copy(j),j.set(ec[fi]),J.set(ec[en]),j.lerp(J,fo),wt.u_color2.value.copy(j);const or=n?.45:1;on.setEfxOffset(Mi*ge(at,0,.2,0,1)*or,Mi*Pe*.01*or),on.setEfxAmount(ge(at,0,.25,.35,.85)*(n?.35:1)),un=Math.sin(at*10+He)*(n?4.5:7.5)*gi(0,.2,at)};let fl=0;const Lp=be=>{if(!Zt){Ie.update({whiteTunnelWaitRatio:0,aspect:R.aspect}),fl=Ke;return}Ce.update(be),fe.uniforms.u_time.value=He,Le.uniforms.u_time.value=He,fe.uniforms.u_fbm.value=Qe,Le.uniforms.u_fbm.value=Qe;let Ve=Ke-fl;Math.abs(Ve)>.08&&(Ve=0);const Pe=n?.4:1,it=Yt.clamp(-Ve*ge(Ke,0,.9,500,0,Ql)*Pe,-1,1),ct=Yt.clamp(-Ve*ge(Ke,0,.8,45,0,Ql)*Pe,-1,1);on.setEfxOffset(it,ct),on.setEfxAmount(ge(Ke,.75,1,1,0)*(n?.5:1)),fl=Ke;const Rt=Zt&&ni<1?"#ffffff":"#000000",gt=n?Math.max(R.aspect,.95):Math.max(R.aspect,.01);Ie.update({whiteTunnelWaitRatio:ho,aspect:gt,bg:Rt})},Yu=()=>ea();window.addEventListener("scroll",Yu,{passive:!0}),ea();const $u=be=>{var us;const Ve=Math.min(.05,Math.max(0,be||.016666666666666666));if(Wu=performance.now(),!Qs){if(st){const Ht=st.getBoundingClientRect();Ht.bottom>0&&Ht.top<window.innerHeight&&on.render()}return}St+=((Ye?1:0)-St)*.1,qe=ge(St,0,1,1,.3)*Ve,qe=ge(Rn,0,1,Ve,qe),qe=ge(et,.5,.75,qe,Ve),He+=qe,Re.u_time.value=He,pt=(1-St)*ee*2.5*ge(Rn,0,.5,0,1)*ge(ho,0,.25,1,0),Pp(qe),Lp(qe),ht(qe),hn&&(un=Math.sin(at*10+He)*7.5*gi(0,.2,at)),bt();const Pe=ni,it=ge(Pe,0,.1,0,1)*ge(Pe,.9,1,1,0);Re.u_loopLinearBlend.value=it;const ct=ge(Pe,.9,1,0,1,ou);ie=ct>0;let Rt,gt,Gt,Kt=!0;if(Pe<.5)rr=0,Rt=Nt<.08?gi(-.3,1,Nt)*.25:gi(-.3,1,Nt)*.75,gt=0,Gt=89,De.uniforms.u_cardOpacity.value=0;else{Rt=ge(Pe,.9,1,0,1),gt=140,Gt=Math.min(N-1,287);const Ht=Math.min(2,Math.max(0,.5+Math.max(0,Q.getFbm(He*8,3)+.5)*4));De.uniforms.u_cardOpacity.value=Ht*ct,Pe<1?(rr=Math.max(0,rr),Kt=!1):rr=0}rr===0&&(as+=qe*Rt*ul),it===1&&(as=0);const fn=Gt-gt+1,Cn=uo[0];let fi=(Cn+as)*60%fn,en=Math.floor(fi),bi=(en+1)%fn+gt;en+=gt,bi<en&&(Kt||(bi=en=gt,as=-Cn,rr=Number.POSITIVE_INFINITY));const fo=fi-Math.floor(fi);Ne.setXYZ(0,en,bi,Kt||bi>=en?fo:0),Ne.needsUpdate=!0;const or=ge(Vu+Pe,.9,2,90,139,hS),po=Math.floor(or),cs=Math.ceil(or),dn=or-po;Z.setXYZ(0,po,cs,dn),Z.needsUpdate=!0,ze.visible=Pe>=.95&&Ut>.02,ae=ie?ae+qe:0;{const Ht=W.x,Or=W.y,ta=Math.floor(10*ae%(Ht*(Or+1))),mo=ta/(Ht*(Or+1)),zr=Jr(0,.15,mo)*Jr(1,.9,mo);Re.u_faceLedLight.value=zr,De.uniforms.u_cardUvOffset.value.set(ta%Ht/Ht,(Or-Math.floor(ta/Ht))/Or)}if(Re.u_cardPosition.value.set(de.getX(0),de.getY(0)+.9,de.getZ(0)),U>.01&&!Zt&&!Nr){for(let Ht=0;Ht<Oe;Ht++){ti[Ht]=(ti[Ht]+.2*qe)%1,rr===0&&(hi[Ht]+=qe*Rt*ul);const mo=(Yt.lerp(0,uo[Ht+1],U)+hi[Ht])*60%fn;let zr=Math.floor(mo),dl=(zr+1)%fn+gt;zr+=gt,dl<zr&&!Kt&&(dl=zr=gt);const Ip=mo-Math.floor(mo);ke.setXYZ(Ht,zr,dl,Ip),Me.setXYZ(Ht,po,cs,dn)}ke.needsUpdate=!0,Me.needsUpdate=!0}if((us=on.setScrollVelocity)==null||us.call(on,Math.abs(pt)+Math.abs(ee)*.5),hn){const Ht=wt.u_resolution.value.clone();Be.visible=!1,Mt.visible=!1,tt.visible=Ut>.02,wt.u_feedbackTexture.value=ye.texture,wt.u_resolution.value.set(Fe.width,Fe.height),b.setRenderTarget(Fe),b.setClearColor(0,0),b.clear(),b.render(y,R),b.setRenderTarget(null),wt.u_resolution.value.copy(Ht);const Or=ye;ye=Fe,Fe=Or,wt.u_feedbackTexture.value=ye.texture,je.u_blackTunnelTexture.value=ye.texture,Mt.visible=!0}b.setClearColor(Re.u_bgColor.value,on.clearAlpha),on.render()},Zu=be=>{hl=requestAnimationFrame(Zu);const Ve=Math.min(.05,(be-Wu)/1e3);be-Ku>50&&$u(Ve)};let Ku=0;const Dp=be=>{Ku=performance.now(),$u(be)};return hl=requestAnimationFrame(Zu),requestAnimationFrame(()=>{ls(),ea(),on.render()}),{resize:ls,updateScroll:ea,tickFrame:Dp,getAutoScrollSpeed:()=>pt,destroy(){cancelAnimationFrame(hl),window.removeEventListener("resize",ls),window.removeEventListener("scroll",Yu),le.dispose(),ne.dispose(),on.destroy(),b.dispose()}}}function US(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=Hu(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const M=Array.from(p.querySelectorAll(".goal-word"));if(M.length<2){M.forEach(C=>{C._offsetX=0});return}M.forEach(C=>{C.style.transform="translateZ(0)"});let S=g;M.forEach(C=>{const A=C.getBoundingClientRect();C._domRect=A,S-=A.width});let y=0;const L=S/(M.length-1);M.forEach(C=>{C._offsetX=-C._domRect.left+_+y,y+=C._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,M=ge(_,0,.25,0,1);r.progress();const S=window.innerHeight;if(t&&!t.classList.contains("is-windowed")){const w=i.getBoundingClientRect(),I=window.scrollY||0,N=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+I,H=I>=N-1&&w.bottom>S,G=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",H),u&&(u.style.height=H?`${S}px`:"0px"),H&&!G?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!H&&G&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),window.dispatchEvent(new Event("resize"))),t.style.background=M>.05||_>.01?"#ffffff":"#000000"}let y=ge(v,a,l,0,1);const L=y>0&&y<1;let C=ge(y,.5,1,1,o()?9:12,ou);C*=ge(y,0,.15,.85,1,uS);let A=ge(y,.9,1,1,0);A*=ge(y,0,.05,0,1),A*=ge(g,0,.12,1,0);const R=ge(y,.4,.6,0,1,Mp);if(e.classList.toggle("is-on-black",M<.5),e.style.opacity=String(A),e.style.transform=`translate3d(-50%, -50%, 0) scale(${C})`,e.style.visibility=L&&A>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(w=>{const I=w._offsetX||0;w.style.transform=`translateX(${R*I}px)`}),s){const w=ge(g,.02,.15,1,0);s.style.opacity=String(w),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const b=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":b<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:M}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function La(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function FS(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function $r(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function NS(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=$r(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=$r(document.getElementById("home-reel-desc"),2),l=$r(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),v.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(K=>{K.style.overflow="hidden",K.style.display="block",K.style.position="relative"}),f=[...La(r,"word"),...La(o,"word")],f.forEach(K=>{K.style.position="relative",K.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=La(a,"word"),a.style.overflow="hidden"),_())})();const M=document.getElementById("home-featured"),S=$r(document.getElementById("home-featured-title"),2),y=$r(document.getElementById("home-featured-disclaimer"),2),L=$r(document.getElementById("home-featured-cta"),1);let C=[],A=[],R=!0;const b=()=>{R=!1,S&&(S._time=0,S._animating=!1),y&&(y._time=0,y._animating=!1),L&&(L._time=0,L._animating=!1),i()||(A.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),C.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",C=FS(S),y){const K=y.textContent.trim();y.textContent="";const de=document.createElement("div");de.className="line",de.textContent=K,de.style.transform="translate3d(0, 100%, 0)",de.style.willChange="transform";const me=document.createElement("div");me.style.position="relative",me.style.overflow="hidden",me.appendChild(de),y.appendChild(me),A=[de]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),b()}})();const I=$r(document.getElementById("home-goal-title"),2);let z=[];I&&(I.style.overflow="hidden",z=La(I,"word"),z.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}));let N=0,H=!1,G=0;const k=K=>{if(!t||!e)return;if(!_n(e).isActive){g=!0;return}g&&(g=!1,_());const me=_n(t),Ne=_n(s||a),re=window.innerHeight*.1;if(t._time=sn(t._time+(t._animating?K:-K),0,2),a&&(a._time=sn(a._time+(a._animating?K:-K),0,2)),l&&(l._ratio=Xn(l._ratio+(l._animating?K:-K))),me.screenRatio>-1&&(t._animating=!0,i()?f.forEach(le=>{le.style.transform="translate3d(0, 0, 0)"}):f.forEach((le,ne)=>{let ye,Fe;ne<2?(ye=ge(t._time-Math.abs(2-ne)/10,.5,1.2,-m,0,dt),Fe=ge(t._time-ne/10,0,1,100,0,dt)):(ye=0,Fe=ge(t._time-ne/10,0,1,-100,0,dt)),le.style.transform=`translate3d(${ye}px, ${Fe}%, 0)`}),n)){const le=me.showScreenOffset*-re*.5;n.style.transform=`translate3d(0, ${le}px, 0)`}if(Ne.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const le=Ne.showScreenOffset*-re*1.5;if(a&&(a.style.transform=`translate3d(0, ${le}px, 0)`,i()?v.forEach(ne=>{ne.style.opacity="1",ne.style.transform="translate3d(0, 0, 0)"}):v.forEach((ne,ye)=>{const Fe=ge(a._time-ye/100,0,1,.1,1,Qa),Re=ge(a._time-ye/100,0,1,100,0,Qa);ne.style.opacity=String(Fe),ne.style.transform=`translate3d(0, ${Re}%, 0)`})),l){const ne=Ne.showScreenOffset*-re*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ne}px) translate3d(0, ${ge(l._ratio,0,1,150,0,dt)}%, 0) rotate(${ge(l._ratio,0,1,10,0,dt)}deg)`,l.style.opacity=String(dt(l._ratio))):(l.style.transform=`translateY(${ne}px)`,l.style.opacity="1")}}if(c){const le=_n(c),ne=Xn(ge(le.showScreenOffset,.05,.85,0,1,dt));c.style.opacity=String(ne),c.style.transform=`translate3d(0, ${ge(ne,0,1,80,0,dt)}px, 0) scale(${ge(ne,0,1,.96,1,dt)})`}if(u){const le=_n(u);G=Xn(ge(le.showScreenOffset,0,.7,0,1,dt)),u.style.opacity=String(.4+G*.6),u.style.transform=`translate3d(0, ${ge(G,0,1,60,0,dt)}px, 0) scale(${ge(G,0,1,.94,1,dt)})`,H=G>.9,N=sn(N+(H?K:-K*2),0,1.4),d.forEach((ne,ye)=>{const Fe=ge(N-ye/10,0,.6,0,1,dt),Re=ge(N-ye/10,0,.6,0,180,dt);ne.style.transform=`scale(${Fe}) rotate(${Re}deg)`,ne.style.display="inline-block"})}},Y=K=>{if(!M||!S)return;if(_n(M).isActive){R&&b();const me=_n(S),Ne=_n(y),Z=_n(L);S._time=sn(S._time+(S._animating?K:-K),0,2),y&&(y._time=sn(y._time+(y._animating?K:-K),0,2)),L&&(L._time=sn(L._time+(L._animating?K:-K),0,1)),me.screenRatio>-1&&(S._animating=!0,i()?C.forEach(re=>{re.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((re,le)=>{const ne=ge(S._time*1.5-le/20,0,1,1,0,dt),ye=ge(S._time*1.5-le/20,0,1,10,0,dt);re.style.transform=`translate3d(0, ${ne}em, 0) rotate(${ye}deg)`})),Ne.screenRatio>-1&&y&&(y._animating=!0,i()?A.forEach(re=>{re.style.transform="translate3d(0, 0, 0)"}):A.forEach((re,le)=>{const ne=ge(y._time-le/20,0,1,100,0,dt);re.style.transform=`translate3d(0, ${ne}%, 0)`})),Z.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${ge(L._time,0,1,150,0,dt)}%, 0) rotate(${ge(L._time,0,1,10,0,dt)}deg)`,L.style.opacity=String(dt(L._time))))}else R=!0},B=K=>{if(!I)return;_n(I).screenRatio>-1&&(I._animating=!0),I._time=sn(I._time+(I._animating?K:-K),0,2),z.forEach((me,Ne)=>{const Z=ge(I._time-Ne/20,0,1,0,1,dt),re=ge(I._time-Ne/20,0,1,100,0,dt);me.style.opacity=String(Z),me.style.transform=`translate3d(0, ${re}%, 0)`})},ue=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ue),{update(K){k(K),Y(K),B(K)},destroy(){window.removeEventListener("resize",ue)}}}const Rf=28,OS=4,zS=8;function Cf(){return window.innerWidth<812}function BS(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var R,b;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((R=s==null?void 0:s.textContent)==null?void 0:R.trim())||"",u=((b=a==null?void 0:a.textContent)==null?void 0:b.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(w=>{const I=document.createElement("div");if(I.className="project-item-line-2-inner-list",I.style.transform="translateY(-400%)",w===" ")I.style.width="0.3em";else for(let z=0;z<4;z++){const N=document.createElement("span");N.textContent=w,I.appendChild(N)}a.appendChild(I),d.push(I)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,M=0,S=!1,y=0,L=0,C=0,A=0;return Cf()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(w){const I=_n(t),z=I.ratio>-1&&I.ratio<1;z&&(S=!0),S&&(_+=w);const N=Xn(ge(_,0,.85,0,1,dt)),H=ge(N,0,1,90,0,dt);if(t.style.opacity=String(N),t.style.transform=`translate3d(0, ${H}px, 0)`,s&&z){p+=w;const G=Math.min(c.length,Math.floor(Rf*p)-OS),k=Math.min(c.length,Math.floor(Rf*p));let Y="";for(let B=0;B<Math.max(0,G);B++)Y+=c[B];for(let B=0;B<k-Math.max(0,G);B++)Y+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=Y}if(z&&(M+=w*.8),g=Xn(g+(m?1:-1)*w*2.5),Cf())d.forEach((G,k)=>{const Y=Xn(g-Math.abs(k-d.length-1)/100),B=ge(Y,0,1,0,1.5,dt);G.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((G,k)=>{const Y=ge(k,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),B=Xn(M-Math.cos(Y)/zS),ue=ge(B,0,1,500,0,aS),K=Xn(g-Math.abs(k-d.length-1)/100),de=ge(K,0,1,0,1.5,dt);G.style.transform=`translate3d(${de}em, -${ue}%, 0)`}),l){const G=ge(g,.3,1,0,1,dt);l.style.transform=`translateX(${G}em)`}if(v=sn(v+(f?1:-1)*w,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(C=(Math.random()-.5)*ge(v,0,.6,1,0)*8,A=(Math.random()-.5)*ge(v,0,.6,1,0)*8):(C*=.92,A*=.92),y+=(C-y)*.2,L+=(A-L)*.2;const G=ge(v,0,1,1,1.06,dt);o.style.transform=`translate3d(${y}px, ${L}px, 0) scale(${G})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Pf=12,Lf=6,kS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,HS=`
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
  float stepDist = dist / float(${Pf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Pf}; i++) {
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
  float numSampleInv = 1.0 / float(${Lf});
  for (int i = 0; i < ${Lf}; i++) {
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
`;function VS(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function GS(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new ll({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(y){return n.remove(),console.warn("Featured WebGL unavailable",y),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=bn;const o=new Zs,s=new Ou(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new _r,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=y=>{c.x=y.clientX,c.y=y.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new Si(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(y,L)=>{var ne,ye,Fe;const C=y.dataset.id||((ne=i[L])==null?void 0:ne.id),A=y.querySelector(".project-item-main"),R=y.querySelector(".project-item-image img");R&&(R.style.opacity="0",R.setAttribute("aria-hidden","true"));const b=new Je(y.dataset.colorBg||"#111111");let w,I;try{[w,I]=await Promise.all([a.loadAsync(`${l}${C}/home.webp`),a.loadAsync(`${l}${C}/home_depth.webp`)])}catch(Re){console.warn("Featured WebGL textures failed for",C,Re),R&&(R.style.opacity="1");return}w.colorSpace=bn,w.wrapS=w.wrapT=$n,w.minFilter=mt,w.magFilter=mt,w.generateMipmaps=!1,I.colorSpace=nn,I.wrapS=I.wrapT=$n,I.minFilter=mt,I.magFilter=mt,I.generateMipmaps=!1;const z=new rt(((ye=w.image)==null?void 0:ye.width)||1024,((Fe=w.image)==null?void 0:Fe.height)||1024),N=new q(0,0,-1),H=new su(new q,1,.6,2),G=VS(1,2.2,.7,3);G.target=0;const k=new rt,Y=new rt,B={u_texture:{value:w},u_depthTexture:{value:I},u_colorBg:{value:b},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:z},u_domWH:{value:new rt(1,1)},u_shiftXY:{value:k},u_focusPos:{value:N},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new rt(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ue=new Ct({uniforms:B,vertexShader:kS,fragmentShader:HS,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),K=new Bt(d,ue);K.frustumCulled=!1,K.renderOrder=10+L,K.visible=!1,o.add(K);let de=!1,me=0,Ne=0,Z=0;const re=[0,.2,.3],le=Re=>{for(let je=0;je<re.length;je++)if(Re<re[je])return je;return re.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{de=!0}),A==null||A.addEventListener("mouseleave",()=>{de=!1})),f.push({mesh:K,uniforms:B,focusDyn:H,focusPos:N,zoomDyn:G,shiftXY:k,shiftXYTarget:Y,index:L,main:A,dom:y,update(Re,je,We,tt,O){const Oe=_n(y);if(!(Oe.ratio>-1&&Oe.ratio<1)||!A){Ne=0,K.visible=!1,B.u_showRatio.value=0;return}Ne+=Re;const Xe=A.getBoundingClientRect(),ke=Math.max(1,Xe.width),Me=Math.max(1,Xe.height);B.u_domWH.value.set(ke,Me),B.u_resolution.value.set(je,We),B.u_time.value=tt,B.u_rippleStrength.value=Math.min(.15,O*.5),B.u_globalRadius.value=Math.min(ke,Me)*.04;const Ee=ge(Ne,0,2,0,1,Qa),U=L%2-.5,T=(1-Ee)*U*-je*.1,W=(1-Ee)*U*.1;K.position.set(Xe.left+ke*.5+T,We-(Xe.top+Me*.5),0),K.scale.set(ke,Me,1),K.rotation.z=-W;const Q=ge(Ne,0,1.5,0,1,Qa);B.u_showRatio.value=Q,K.visible=Q>.01;const ae=me;if(me=sn(me+(de?1:-1)*Re,0,1),ae<me){const he=le(ae),ce=le(me);ce!==he&&Y.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(ge(me,0,.6,1,0)),ce===re.length&&Y.multiplyScalar(.5)}else Y.multiplyScalar(.95);k.lerp(Y,.2);const ie=H.target;if(de){const he=me>0?ge(me,0,.3,1,0)*Me*.75:0;ie.x=(c.x-Xe.left-ke*.5+Math.cos(tt*20)*he)/ke*-Me,ie.y=(c.y-Xe.top-Me*.5-Math.sin(tt*30)*he)/Me*Me,ie.z=.5}else ie.x=0,ie.y=0,ie.z=-1;H.update(Re),N.copy(H.value),G.target=de?1:0,G.update(Re),B.u_zoomRatio.value=G.value,Z=sn(Z+(de?.75:-1)*Re,0,1),B.u_dofRangeOffset.value=Yt.lerp(0,-.5,Z),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,M=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(y){_+=y;const L=window.scrollY,C=Math.abs(L-p)/Math.max(y,.001);p=L,M+=(Math.min(1,C*.002)-M)*.15;const R=_n(e).isActive;if(n.style.visibility=R?"visible":"hidden",!!R){for(const b of f)b.update(y,v,g,_,M);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(y=>{y.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function WS(){return window.innerWidth<812}function XS(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function qS(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&XS(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,M=!1,S=0;const y=C=>{var R;if(!C)return;const A=(R=C.play)==null?void 0:R.call(C);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:C=>{var I;if(!i)return;const A=e?_n(e):null,R=n?_n(n):null,b=WS(),w=b?!!(R!=null&&R.isActive):!!A&&A.showScreenOffset>0&&(R?R.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",w),w){const z=(A==null?void 0:A.top)??0,N=(A==null?void 0:A.height)??1,H=window.innerHeight,G=z-(H-N)*.5,k=((R==null?void 0:R.top)??0)-(H-((R==null?void 0:R.height)??H))*.5;if(S=Xn(ge(window.scrollY+z,G,k,0,1)),S=Xn(ge((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,dt)),r&&(y(r),r.style.opacity=String(.35+S*.65)),t&&(y(t),t.style.opacity=String(1-S*.85)),e){const Y=ge(S,0,1,1,1.08,dt);e.style.transform=`scale(${Y})`,e.style.opacity=String(ge(S,.7,1,1,.15,dt))}if(n){const Y=ge(S,0,1,48,0,dt),B=ge(S,0,1,.94,1,dt);n.style.transform=`translate3d(0, ${Y}px, 0) scale(${B})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,M=S>.85}else(I=r==null?void 0:r.pause)==null||I.call(r),S=0,m=!1,v=!1,p=!1,M=!1;if(d=sn(d+(m?C:-C),0,1e9),f=Math.min(S,Xn(f+(v?C:-C))),u=d%l,o!=null&&o._splitted&&!b){const z=o._splitted.words;for(let N=0;N<z.length;N++){const H=z[N];c-u>l-1&&(H._randCharIndex=Math.round(Math.random()*(H._chars.length-1)));for(let G=0;G<H._chars.length;G++){const k=H._chars[G];let Y=ge(f-N/4-G/20,0,.6,200,0,dt);G===H._randCharIndex&&(Y+=ge(u-N/10,.5,1.3,0,-100,dt)),k._inner&&(k._inner.style.transform=`translate3d(0, ${Y}%, 0)`)}}}c=u,g=sn(g+(p?C:-C*2),0,1.4),_=sn(_+(M?C:-C*2),0,1.4),s.forEach((z,N)=>{const H=ge(g-N/10,0,.6,0,1,dt),G=ge(g-N/10,0,.6,0,180,dt);z.style.transform=`scale(${H}) rotate(${G}deg)`}),a.forEach((z,N)=>{const H=ge(_-N/10,0,.6,0,1,dt),G=ge(_-N/10,0,.6,0,180,dt);z.style.transform=`scale(${H}) rotate(${G}deg)`})},destroy(){}}}const nc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],YS=`
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
`,$S=`
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
`,ZS=`
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
`,KS=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function jS(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function JS(){const i=jS(),e="/zyrax-studio/",t=await Promise.all(nc.map(p=>Hn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new Zs,r=new Pn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let o;try{o=new ll({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}o.setClearColor(0,0);const s=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.5)),o.autoClear=!0;const a=[],l=new q,c=new q,u=new os,d=new rt;for(let p=0;p<nc.length;p++){const M=nc[p],S=t[p],y=document.querySelector(M.sectionSelector);if(!y||!S)continue;const L=new Li,C=new Li;L.add(C),n.add(L);const A=new Ct({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:M.aoThreshold},u_color0:{value:new Je(M.color0)},u_color1:{value:new Je(M.color1)},u_radius:{value:.008}},vertexShader:YS,fragmentShader:$S,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),R=new Bt(S,A);R.frustumCulled=!1,R.renderOrder=200,C.add(R);const b=new Ct({uniforms:{u_color0:{value:new Je(M.color0)},u_color1:{value:new Je(M.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:ZS,fragmentShader:KS,side:En,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),w=new Bt(new Si(2,2),b);w.frustumCulled=!1,w.renderOrder=200,C.add(w);const I=S.attributes.position.array,z=S.attributes.position.count,N=new Float32Array(z);for(let H=0;H<z;H++)N[H]=I[H*3+2];a.push({data:M,sectionEl:y,container:L,inner:C,mesh:R,mat:A,circle:w,circleMat:b,lineRatioArray:N,cpAttr:S.attributes.CP,cdAttr:S.attributes.Cd,count:z,offsetY:0,framePos:new q,frameQuat:new Dn,frameScale:new q(1,1,1)})}let f=1,m=1;const v=()=>{f=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(f*f+m*m),M=m/p;d.set(f/m*M,M),r.fov=60,r.aspect=f/m,r.position.set(f/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-m/2,0),r.updateProjectionMatrix(),o.setSize(f,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var O;const{data:M,sectionEl:S,container:y,inner:L,mat:C,circle:A,circleMat:R,lineRatioArray:b,cpAttr:w,cdAttr:I,count:z}=p,H=_n(S).top+p.offsetY,G=m,k=M.scrollToRatioFactors;let Y=Xn(-(H-k[0]*G)/(k[1]*G));Y=cS(Y);const B=f<=812,ue=.008*ge(f,540,1920,2,1)*(B?.72:1),K=f/d.x,de=m/d.y;let me=M.margin.x,Ne=M.margin.y;B&&M.id==="goal"&&(me=.42,Ne=-.35),L.position.x=me*K,L.position.y=Ne*de-H,L.scale.set(K,de,1),p._showSmooth==null&&(p._showSmooth=Y),p._showSmooth+=(Y-p._showSmooth)*.18,C.uniforms.u_showRatio.value=p._showSmooth,C.uniforms.u_radius.value=ue;const Z=(O=S.dataset)==null?void 0:O.goalPhase,re=M.id==="goal"&&(Z==="black-tunnel"||Z==="white");y.position.copy(p.framePos),y.quaternion.copy(p.frameQuat),y.scale.copy(p.frameScale),y.updateMatrixWorld(!0),u.min.copy(M.boxMin),u.max.copy(M.boxMax),u.applyMatrix4(L.matrixWorld),y.visible=!re&&u.max.y>-m&&u.min.y<0&&Y>.001;let le=0,ne=0;for(let Oe=0;Oe<z;Oe++)Y>=b[Oe]&&(le=Oe,Oe===z-1?ne=0:ne=(Y-b[Oe])/(b[Oe+1]-b[Oe]||1));const ye=le,Fe=Math.min(le+1,z-1);l.fromArray(w.array,le*3),c.fromArray(w.array,Fe*3),l.lerp(c,ne);const Re=I.array;let je=Re[ye]*(1-ne)+Re[Fe]*ne;je=.9+.1*je;const We=Xn((Y-(M.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(ue,ue,1),R.uniforms.u_ao.value=Math.min(1,je+1-We);let tt=b[ye]*(1-ne)+b[Fe]*ne;tt=1-Math.pow(1-sn(tt,0,1),2),R.uniforms.u_mixRatio.value=tt},_=()=>{for(const p of a)g(p);o.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const M=a.find(S=>S.data.id==="goal");M&&(M.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:M=0,active:S=!1}={}){const y=a.find(I=>I.data.id==="goal");if(!y)return;if(!S){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const L=f*.5,C=-m*.5,A=new xt;A.makeTranslation(L,C,0);const R=new xt().makeRotationZ(-M),b=new xt().makeScale(p,p,1),w=new xt().makeTranslation(-L,-C,0);A.multiply(R).multiply(b).multiply(w),A.decompose(y.framePos,y.frameQuat,y.frameScale)},destroy(){window.removeEventListener("resize",v),o.dispose(),i.remove()}}}const Df=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function QS(i,e,t,n){var A;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1;";const R=Array.from(e.childNodes);e.appendChild(f),R.forEach(b=>f.appendChild(b))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const R=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==R&&(m.src=R)};v();let g="",_=null,p=(A=e.parentElement)==null?void 0:A.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const M=()=>{const R=s||a;if(!R)return null;const b=R.getBoundingClientRect();return b.width<8||b.height<8?null:{left:b.left,top:b.top,width:b.width,height:b.height}},S=(R,b=0)=>{if(!R)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned");const w=window.innerHeight;p&&(p.style.height=`${w}px`),e.style.position="fixed",e.style.left=`${R.left}px`,e.style.top=`${R.top}px`,e.style.width=`${R.width}px`,e.style.height=`${R.height}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius=`${Math.min(R.width,R.height)*.055}px`,e.style.overflow="hidden",e.style.zIndex="3",e.style.transform=b?`rotate(${b}rad)`:"none",e.style.background="transparent",e.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)",f&&(f.style.left=`${d.left*100}%`,f.style.top=`${d.top*100}%`,f.style.width=`${d.width*100}%`,f.style.height=`${d.height*100}%`,f.style.right="auto",f.style.bottom="auto",f.style.inset="",f.style.borderRadius=`${Math.min(R.width,R.height)*.03}px`,f.style.background="#000"),m&&(m.style.position="absolute",m.style.inset="0",m.style.width="100%",m.style.height="100%",m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none")},y=()=>{var R;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",f.style.borderRadius="0",f.style.background=""),m&&(m.style.opacity="0",m.style.visibility="hidden"),(R=n==null?void 0:n.setGoalFrame)==null||R.call(n,{active:!1})},L=()=>{const R=t.range("blackFrameShow").ratio,b=t.range("blackFrameIn").ratio,w=t.range("blackTunnel").ratio,I=t.between("whiteTunnel","whiteFrameOut").ratio,z=i.getBoundingClientRect(),N=window.innerHeight,H=z.bottom>0&&z.top<N;_=M();const G=H&&w<.02&&I<.01&&b<.999;if(G&&_){const k=sn(b,0,1),B={left:0,top:0,width:window.innerWidth,height:N},ue={left:_.left+(B.left-_.left)*k,top:_.top+(B.top-_.top)*k,width:_.width+(B.width-_.width)*k,height:_.height+(B.height-_.height)*k},K=ge(k,0,1,0,.35)*(1-k);S(ue,K);const de=Math.max(ge(R,0,.2,.35,1),z.top<N*.85?1:0);if(e.style.opacity=String(de),e.style.pointerEvents="none",m&&(m.style.opacity=String(ge(k,.05,.75,1,0)*de),m.style.visibility=k>.92?"hidden":"visible"),o&&(o.style.visibility=k>.98?"hidden":"visible"),u&&(u.style.visibility=k>.55?"":"hidden"),l&&!Df){const me=ge(k,0,1,0,N*.12);l.style.transform=`translate3d(0, ${-me}px, 0)`}if(c&&!Df&&_){const me=i.querySelector("#home-goal-context"),Ne=(me==null?void 0:me.getBoundingClientRect().top)??0,Z=me&&parseFloat(getComputedStyle(me).paddingTop)||0,re=_.top-Ne-Z+_.height*.5;c.style.top=`${re}px`,c.style.transform="translateY(-50%)"}if(n!=null&&n.setGoalFrame&&n.setGoalFrame({active:k>.01,scale:ge(k,0,1,1,2.4),rotation:K}),f&&k>.01){const me=d.left*(1-k),Ne=d.top*(1-k),Z=d.width+(1-d.width)*k,re=d.height+(1-d.height)*k;f.style.left=`${me*100}%`,f.style.top=`${Ne*100}%`,f.style.width=`${Z*100}%`,f.style.height=`${re*100}%`}return g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:b,blackFrameShow:R,frameRect:_}}return g==="window"?(y(),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),g="full",window.dispatchEvent(new Event("resize"))):!G&&o&&w>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden")),(!H||z.top>N*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:b,blackFrameShow:R,frameRect:_}},C=()=>{v(),L()};return window.addEventListener("resize",C),{update:L,destroy(){window.removeEventListener("resize",C),m==null||m.remove(),y()},getFrameRect:()=>_}}const If="/zyrax-studio/assets/audios/",eM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},tM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function Uf(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function nM(){const i=document.getElementById("header-right-sound-btn"),e={};for(const[M,S]of Object.entries(eM))e[M]=Uf(`${If}${S}`,{loop:!0,volume:0});const t={};for(const[M,S]of Object.entries(tM))t[M]=S.map(y=>Uf(`${If}${y}`,{loop:!1,volume:.85}));let n=!1,r=!1,o=null,s=null,a=null,l=1,c=1.2;const u={hover:0,click:0,focus:0,page:0},d=async()=>{if(!r){r=!0;try{const M=e.generic;M.volume=0,await M.play(),M.pause(),M.currentTime=0}catch{r=!1}}},f=M=>{if(!n||!r)return;const S=t[M];if(!(S!=null&&S.length))return;const y=u[M]%S.length;u[M]=y+1;const L=S[y].cloneNode();L.volume=M==="focus"?.4:.85,L.play().catch(()=>{})},m=M=>{n=!!M,i==null||i.classList.toggle("is-on",n),n?d().then(()=>{o||v("generic",.8)}):o&&e[o]&&(e[o].volume=0)},v=(M,S=1.2)=>{if(!e[M]||o===M)return;s=o,a=M,l=0,c=Math.max(.05,S),o=M;const y=e[M];y.volume=0,n&&r&&y.play().catch(()=>{})},g=M=>{if(r)if(a&&l<1){l=Math.min(1,l+M/c);const S=l*l*(3-2*l);s&&e[s]&&(e[s].volume=n?1-S:0,S>=1&&(e[s].pause(),e[s].currentTime=0)),e[a]&&(e[a].volume=n?S:0,n&&e[a].paused&&e[a].play().catch(()=>{})),S>=1&&(s=null,a=null)}else o&&e[o]&&(e[o].volume=n?1:0,n&&e[o].paused&&e[o].play().catch(()=>{}))},_=M=>{n&&(M==="window"?v("generic",1):M==="title"||M==="black-tunnel"?v("cinematic_0",1.4):M==="white"?v("cinematic_3",1.6):v("generic",1.2))};i==null||i.addEventListener("click",async()=>{await d(),m(!n),f("click")}),document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(M=>{M.addEventListener("mouseenter",()=>f("hover")),M.addEventListener("click",()=>f("click"))});const p=()=>{d(),window.removeEventListener("pointerdown",p)};return window.addEventListener("pointerdown",p,{passive:!0}),{update:g,syncGoalPhase:_,playSfx:f,setEnabled:m,get enabled(){return n},destroy(){Object.values(e).forEach(M=>{M.pause(),M.src=""})}}}const Ts=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,Ep=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};Ep();window.addEventListener("resize",Ep);const Zi=new Wp({duration:Ts?.85:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!Ts,syncTouch:!1,wheelMultiplier:Ts?.9:.82,touchMultiplier:Ts?1.35:1.1});window.lenis=Zi;let ys=0,Ss=0,Us=!1,Tp=0;window.addEventListener("wheel",()=>{Tp=performance.now(),Us=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Us=!0},{passive:!0});const iM="/zyrax-studio/assets/projects/",Ff=document.getElementById("project-list");Ff&&(Ff.innerHTML=Bd.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${iM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const rM=document.getElementById("hero-canvas"),oM=document.getElementById("home-hero-visual-container"),gr=document.getElementById("home-hero"),ic=document.getElementById("home-hero-title"),rc=document.getElementById("home-hero-visual-container"),Nf=document.getElementById("home-hero-scroll-container"),ji=document.getElementById("home-goal"),sM=document.getElementById("goal-tunnel-canvas"),aM=document.getElementById("home-goal-tunnel-title"),Ap=document.getElementById("home-goal-tunnel-sticky"),lM=US(ji,aM,Ap),cM=ji?Hu(ji):null,Rp=nM();let Vn=null,Of="";const uM=NS(),hM=BS(),fM=qS();let ai=null,Va=null;const dM=ji?QS(ji,Ap,cM,{setGoalFrame:(...i)=>{var e;return(e=ai==null?void 0:ai.setGoalFrame)==null?void 0:e.call(ai,...i)}}):{update(){}};let zf=performance.now();Eu.ticker.add(i=>{var r;const e=performance.now(),t=Math.min(.05,(e-zf)/1e3);if(zf=e,Vn!=null&&Vn.getAutoScrollSpeed&&(ys=Vn.getAutoScrollSpeed()),e-Tp>80&&Math.abs(ys)>.01&&(Us=!1),Ss+=Math.abs(ys)>0&&!Us?t:-1,Ss=Math.max(0,Math.min(1,Ss)),!Us&&Ss>0&&Math.abs(ys)>.01){const o=window.innerHeight,s=ys*o*t*Ss*.55,a=(Zi.animatedScroll??Zi.scroll??window.scrollY)+s;Zi.scrollTo(a,{immediate:!0,force:!0})}Zi.raf(i*1e3),uM.update(t),hM.update(t),Va==null||Va.update(t),fM.update(t),ai==null||ai.update(),(r=Vn==null?void 0:Vn.tickFrame)==null||r.call(Vn,t),Rp.update(t)});Eu.ticker.lagSmoothing(0);Zi.on("scroll",()=>{var o;lM.updateScroll(),dM.update(),Vn==null||Vn.updateScroll(),ai==null||ai.update();const i=((o=ji==null?void 0:ji.dataset)==null?void 0:o.goalPhase)||"";if(i&&i!==Of&&(Of=i,Rp.syncGoalPhase(i)),!gr)return;const e=gr.getBoundingClientRect(),t=window.innerHeight,n=Math.max(0,Math.min(1,-e.top/Math.max(e.height,1))),r=Math.max(0,Math.min(1,(t-e.bottom)/t));ic&&(ic.style.transform=`translate3d(0, ${n*-12}vh, 0)`,ic.style.opacity=String(Math.max(0,1-n*1.2))),rc&&(rc.style.transform=`translate3d(0, ${n*18}vh, 0) scale(${1-n*.08})`,rc.style.opacity=String(Math.max(0,1-Math.max(n,r)*.85))),Nf&&(Nf.style.opacity=String(Math.max(0,1-n*2)))});JS().then(i=>{ai=i}).catch(i=>console.error("Scroll lines failed",i));IS(sM,ji).then(i=>{Vn=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{rS(rM,oM).then(()=>gr==null?void 0:gr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),gr==null||gr.classList.add("is-in")})});Ts||GS(Bd).then(i=>{Va=i}).catch(i=>console.error("Featured WebGL failed",i));function Cp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}Cp(document.getElementById("home-hero-title"));Cp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const pM=document.querySelectorAll(".home-hero-scroll-container-cross");pM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const oc=document.getElementById("header"),sc=document.getElementById("header-container"),xr=document.getElementById("header-background"),ac=document.getElementById("header-menu"),Wo=document.getElementById("header-right-menu-btn");let Wi=!1;const Js=i=>{Wi=!!i,oc==null||oc.classList.toggle("--menu-opened",Wi),sc==null||sc.classList.toggle("--opened",Wi),xr==null||xr.classList.toggle("--opened",Wi),ac==null||ac.classList.toggle("--opened",Wi),Wo==null||Wo.classList.toggle("--opened",Wi),xr&&(xr.style.opacity=Wi?window.innerWidth>=1e3?"0.2":"1":"0")};Wo==null||Wo.addEventListener("click",i=>{i.stopPropagation(),Js(!Wi)});xr==null||xr.addEventListener("click",()=>Js(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Js(!1),t==="contact"?(e.preventDefault(),Zi.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),Zi.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!Wi)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Js(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Js(!1)});var Bf;(Bf=document.querySelector("[data-reel]"))==null||Bf.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var kf;(kf=document.querySelector("#end-bottom"))==null||kf.addEventListener("click",i=>{i.preventDefault(),Zi.scrollTo("#footer-section")});
