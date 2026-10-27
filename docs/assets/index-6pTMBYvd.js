var Cp=Object.defineProperty;var Pp=(i,e,t)=>e in i?Cp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>Pp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var $u="1.3.27";function Ff(i,e,t){return Math.max(i,Math.min(e,t))}function Lp(i,e,t){return(1-t)*i+t*e}function Dp(i,e,t,n){return Lp(i,e,1-Math.exp(-t*n))}function Ip(i,e){return(i%e+e)%e}var Up=class{constructor(){Ge(this,"isRunning",!1);Ge(this,"value",0);Ge(this,"from",0);Ge(this,"to",0);Ge(this,"currentTime",0);Ge(this,"lerp");Ge(this,"duration");Ge(this,"easing");Ge(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Ff(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Dp(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Np(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Fp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ge(this,"width",0);Ge(this,"height",0);Ge(this,"scrollHeight",0);Ge(this,"scrollWidth",0);Ge(this,"debouncedResize");Ge(this,"wrapperResizeObserver");Ge(this,"contentResizeObserver");Ge(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ge(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ge(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Np(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Of=class{constructor(){Ge(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Op=100/6,rr={passive:!1};function Ku(i,e){return i===1?Op:i===2?e:1}var zp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ge(this,"touchStart",{x:0,y:0});Ge(this,"lastDelta",{x:0,y:0});Ge(this,"window",{width:0,height:0});Ge(this,"emitter",new Of);Ge(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ge(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ge(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ge(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Ku(n,this.window.width),s=Ku(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ge(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}};const ju=i=>Math.min(1,1.001-2**(-10*i));var Bp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:E=!0,autoRaf:y=!1,anchors:S=!1,autoToggle:L=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){Ge(this,"_isScrolling",!1);Ge(this,"_isStopped",!1);Ge(this,"_isLocked",!1);Ge(this,"_preventNextNativeScrollEvent",!1);Ge(this,"_resetVelocityTimeout",null);Ge(this,"_rafId",null);Ge(this,"_isDraggingSelection",!1);Ge(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ge(this,"isTouching");Ge(this,"isIos");Ge(this,"time",0);Ge(this,"userData",{});Ge(this,"lastVelocity",0);Ge(this,"velocity",0);Ge(this,"direction",0);Ge(this,"options");Ge(this,"targetScroll");Ge(this,"animatedScroll");Ge(this,"animate",new Up);Ge(this,"emitter",new Of);Ge(this,"dimensions");Ge(this,"virtualScroll");Ge(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ge(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ge(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ge(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ge(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ge(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,E,y;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((E=v.hasAttribute)==null?void 0:E.call(v,"data-lenis-prevent-touch"))||s&&((y=v.hasAttribute)==null?void 0:y.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ge(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ge(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=$u,window.lenis||(window.lenis={}),window.lenis.version=$u,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=ju:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:E,autoRaf:y,anchors:S,autoToggle:L,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Fp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new zp(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=i,m=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),E=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(y)?0:y)}}if(typeof d=="number"){if(d+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=Ff(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=ju:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,d,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=f>m,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,E,y,S,L;if(g==="horizontal")_=Math.round(i.scrollLeft),p=f-m,E=e,y=s,S=a,L=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=d-v,E=t,y=o,S=l,L=u;else return!1;return!L&&(_>=p||_<=0)?!0:(E>0?_<p:_>0)&&y&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Ip(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Gi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function zf(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},su,on,Ft,li=1e8,At=1/li,oc=Math.PI*2,kp=oc/4,Hp=0,Bf=Math.sqrt,Vp=Math.cos,Gp=Math.sin,tn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},ou=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},In=function(e){return e!==!1},au=function(){return typeof window<"u"},ea=function(e){return Gt(e)||tn(e)},kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Wp=/random\([^)]+\)/g,Xp=/,\s*/g,Ju=/(?:-?\.?\d|\.)+/gi,Hf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vf=/[+-]=-?[.\d]+/,qp=/[^,'"\[\]\s]+/gi,Yp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,bi,ac,lu,Jn={},Ha={},Gf,Wf=function(e){return(Ha=Gs(e,Jn))&&zn},cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},Xf=function(e,t){return e&&(Jn[e]=t)&&Ha&&(Ha[e]=t)||Jn},Fo=function(){return 0},Zp={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},$p={suppressEvents:!0},uu={},yr=[],lc={},qf,Gn={},dl={},Qu=30,La=[],hu="",fu=function(e){var t=e[0],n,r;if(Di(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=La.length;r--&&!La[r].targetTest(t););n=La[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new pd(e[r],n)))||e.splice(r,1);return e},ts=function(e){return e._gsap||fu(ci(e))[0]._gsap},Yf=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():ou(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Us=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Kp=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Va=function(){var e=yr.length,t=yr.slice(0),n,r;for(lc={},yr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},du=function(e){return!!(e._initted||e._startAt||e.add)},Zf=function(e,t,n,r){yr.length&&!on&&Va(),e.render(t,n,!!(on&&t<0&&du(e))),yr.length&&!on&&Va()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qp).length<2?t:tn(e)?e.trim():e},Kf=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},jp=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Gs=function(e,t){for(var n in t)e[n]=t[n];return e},eh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Di(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ga=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},bo=function(e){var t=e.parent||Bt,n=e.keyframes?jp(Sn(e.keyframes)):Qn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jp=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},jf=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Qa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cc=function(e,t,n,r){return e._startAt&&(on?e._startAt.revert(Pa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},em=function i(e){return!e||e._ts&&i(e.parent)},th=function(e){return e._repeat?Ws(e._tTime,e=e.duration()+e._rDelay)*e:0},Ws=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||ns(n,e)),e},Jf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wa(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ai=function(e,t,n,r){return t.parent&&Er(t),t._start=zt((ji(n)?n:n||e!==Bt?si(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jf(e,t,"_first","_last",e._sort?"_start":0),uc(t)||(e._recent=t),r||Jf(e,t),e._ts<0&&tl(e,e._tTime),e},Qf=function(e,t){return(Jn.ScrollTrigger||cu("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},ed=function(e,t,n,r,s){if(mu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qf!==Wn.frame)return yr.push(e),e._lazy=[s,r],1},tm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},uc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nm=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&tm(e)&&!(!e._initted&&uc(e))||(e._ts<0||e._dp._ts<0)&&!uc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Xo(0,e._tDur,t),u=Ws(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ws(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||on||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&ed(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&cc(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Er(e,1),!n&&!on&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},im=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Xs=function(e,t,n,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&tl(e,e._tTime=e._tDur*a),e.parent&&el(e),n||ns(e.parent,e),e},nh=function(e){return e instanceof Ln?ns(e):Xs(e,e._dur)},rm={_start:0,endTime:Fo,totalDuration:Fo},si=function i(e,t,n){var r=e.labels,s=e._recent||rm,o=e.duration()>=li?s.endTime(!1):e._dur,a,l,c;return tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},To=function(e,t,n){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Rr=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!tn(e)||!(t=Yp.exec(e))?"":t[1]},sm=function(e,t,n){return Rr(n,function(r){return Xo(e,t,r)})},hc=[].slice,td=function(e,t){return e&&Di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==bi},om=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return tn(r)&&!t||td(r,1)?(s=n).push.apply(s,ci(r)):n.push(r)})||n},ci=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):tn(e)&&!n&&(ac||!qs())?hc.call((t||lu).querySelectorAll(e),0):Sn(e)?om(e,n):td(e)?hc.call(e,0):e?[e]:[]},fc=function(e){return e=ci(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?No("Invalid scope")||lu.createElement("div"):e)}},nd=function(e){return e.sort(function(){return .5-Math.random()})},id=function(e){if(Gt(e))return e;var t=Di(e)?e:{each:e},n=is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return tn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,m,v){var g=(v||t).length,_=o[g],p,E,y,S,L,C,A,P,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,li])[1],!w){for(A=-li;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=o[g]=[],p=l?Math.min(w,g)*u-.5:r%w,E=w===li?0:l?g*f/w-.5:r/w|0,A=0,P=li,C=0;C<g;C++)y=C%w-p,S=E-(C/w|0),_[C]=L=c?Math.abs(c==="y"?S:y):Bf(y*y+S*S),L>A&&(A=L),L<P&&(P=L);r==="random"&&nd(_),_.max=A-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=vn(t.amount||t.each)||0,n=n&&g<0?xm(n):n}return g=(_[d]-_.min)/_.max||0,zt(_.b+(n?n(g):g)*_.v)+_.u}},dc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ji(n)?0:vn(n))}},rd=function(e,t){var n=Sn(e),r,s;return!n&&Di(e)&&(r=n=e.radius||li,e.values?(e=ci(e.values),(s=!ji(e[0]))&&(r*=r)):e=dc(e.increment)),Rr(t,n?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=li,u=0,f=e.length,d,m;f--;)s?(d=e[f].x-a,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ji(o)?u:u+vn(o)}:dc(e))},sd=function(e,t,n,r){return Rr(Sn(e)?!t:n===!0?!!(n=0):!r,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},am=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},lm=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},cm=function(e,t,n){return ad(e,t,0,1,n)},od=function(e,t,n){return Rr(n,function(r){return e[~~t(r)]})},um=function i(e,t,n){var r=t-e;return Sn(e)?od(e,i(0,e.length),t):Rr(n,function(s){return(r+(s-e)%r)%r+e})},hm=function i(e,t,n){var r=t-e,s=r*2;return Sn(e)?od(e,i(0,e.length-1),t):Rr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Oo=function(e){return e.replace(Wp,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Xp);return sd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},ad=function(e,t,n,r,s){var o=t-e,a=r-n;return Rr(s,function(l){return n+((l-e)/o*a||0)})},fm=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=tn(e),a={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else r||(e=Gs(Sn(e)?[]:{},e));if(!u){for(l in t)pu.call(a,e,l,"get",t[l]);s=function(v){return vu(v,a)||(o?e.p:e)}}}return Rr(n,s)},ih=function(e,t,n){var r=e.labels,s=li,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&yr.length&&Va(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},So=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&qn(e,"onInterrupt"),e},Ls,ld=[],cd=function(e){if(e)if(e=!e.name&&e.default||e,au()||e.headless){var t=e.name,n=Gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fo,render:vu,add:pu,kill:Cm,modifier:Rm,rawVars:0},o={targetTest:0,get:0,getSetter:gu,aliases:{},register:0};if(qs(),e!==r){if(Gn[t])return;Qn(r,Qn(Ga(e,s),o)),Gs(r.prototype,Gs(s,Ga(e,o))),Gn[r.prop=t]=r,e.targetTest&&(La.push(r),uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xf(t,r),e.register&&e.register(zn,r,Nn)}else ld.push(e)},Tt=255,yo={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},ud=function(e,t,n){var r=e?ji(e)?[e>>16,e>>8&Tt,e&Tt]:0:yo.black,s,o,a,l,c,u,f,d,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])r=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Ju),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=pl(l+1/3,s,o),r[1]=pl(l,s,o),r[2]=pl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Hf),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ju)||yo.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(m=f-d,c=u>.5?m/(2-f-d):m/(f+d),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},hd=function(e){var t=[],n=[],r=-1;return e.split(Mr).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},rh=function(e,t,n){var r="",s=(e+r).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=ud(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=hd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Mr,"1").split(Ps),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Mr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),dm=/hsl[a]?\(/,fd=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=dm.test(t),e[1]=rh(e[1],n),e[0]=rh(e[0],n,hd(e[1])),!0},zo,Wn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,d,m,v=function g(_){var p=i()-r,E=_===!0,y,S,L,C;if((p>e||p<0)&&(n+=p-t),r+=p,L=r-n,y=L-o,(y>0||E)&&(C=++f.frame,d=L-f.time*1e3,f.time=L=L/1e3,o+=y+(y>=s?4:s-y),S=1),E||(l=c(g)),S)for(m=0;m<a.length;m++)a[m](L,d,C,_)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Gf&&(!ac&&au()&&(bi=ac=window,lu=bi.document||{},Jn.gsap=zn,(bi.gsapVersions||(bi.gsapVersions=[])).push(zn.version),Wf(Ha||bi.GreenSockGlobals||!bi.gsap&&bi||{}),ld.forEach(cd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(_){return setTimeout(_,o-f.time*1e3+1|0)},zo=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Fo},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,p,E){var y=p?function(S,L,C,A){_(S,L,C,A),f.remove(y)}:_;return f.remove(_),a[E?"unshift":"push"](y),qs(),y},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},f})(),qs=function(){return!zo&&Wn.wake()},vt={},pm=/^[\d.\-M][\d.\-,\s]/,mm=/["']/g,_m=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(mm,"").trim():+c,r=l.substr(a+1).trim();return t},gm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},vm=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_m(t[1])]:gm(e).split(",").map($f)):vt._CE&&pm.test(e)?vt._CE("",e):n},xm=function(e){return function(t){return 1-e(1-t)}},is=function(e,t){return e&&(Gt(e)?e:vt[e]||vm(e))||t},ls=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Un(e,function(a){vt[a]=Jn[a]=s,vt[o=a.toLowerCase()]=n;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},dd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ml=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/oc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Gp((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:dd(a);return s=oc/s,l.config=function(c,u){return i(e,c,u)},l},_l=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dd(n);return r.config=function(s){return i(e,s)},r};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ls(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;ls("Elastic",ml("in"),ml("out"),ml());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ls("Circ",function(i){return-(Bf(1-i*i)-1)});ls("Sine",function(i){return i===1?1:-Vp(i*kp)+1});ls("Back",_l("in"),_l("out"),_l());vt.SteppedEase=vt.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*Xo(0,o,a)|0)+s)*n}}};Uo.ease=vt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return hu+=i+","+i+"Params,"});var pd=function(e,t){this.id=Hp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yf,this.set=t?t.getSetter:gu},Bo=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xs(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),zo||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,n),!s._dp||s.parent||Jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+th(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+th(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ws(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),el(this),Qp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ai(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$p);var r=on;return on=n,du(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,nh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(si(this,n),In(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,In(r)),this._dur||(this._zTime=-At),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(n)?n:Kf,l=function(){var u=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){So(this)},i})();Qn(Bo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){zf(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Bt&&Ai(n.parent||Bt,Gi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qf(Gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return To(0,arguments,this),this},t.from=function(r,s,o){return To(1,arguments,this),this},t.fromTo=function(r,s,o,a){return To(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,si(this,o),1),this},t.call=function(r,s,o){return Ai(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(r,o,si(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,bo(o).immediateRender=In(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,bo(a).immediateRender=In(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:zt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,m,v,g,_,p,E,y,S,L,C,A;if(this!==Bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(d=zt(u%_),u===l?(g=this._repeat,d=c):(L=zt(u/_),g=~~L,g&&g===L&&(d=c,g--),d>c&&(d=c)),L=Ws(this._tTime,_),!a&&this._tTime&&L!==g&&this._tTime-L*_-this._dur<=0&&(L=g),C&&g&1&&(d=c-d,A=1),g!==L&&!this._lock){var P=C&&L&1,w=P===(C&&g&1);if(g<L&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:zt(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,L=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=im(this,zt(a),zt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!L&&(qn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||d>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=-At);break}}m=v}else{m=this._last;for(var M=r<0?r:d;m;){if(v=m._prev,(m._act||M<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(M-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(M-m._start)*m._ts,s,o||on&&du(m)),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=M?-At:At);break}}m=v}}if(E&&!s&&(this.pause(),E.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=S,el(this),this.render(r,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ji(s)||(s=si(this,s,r)),!(r instanceof Bo)){if(Sn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(tn(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?Ai(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return tn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Qa(this,r),r===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=si(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Fo,o);return a.data="isPause",this._hasPause=1,Ai(this,a,si(this,r))},t.removePause=function(r){var s=this._first;for(r=si(this,r);s;)s._start===r&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)vr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ci(r),l=this._first,c=ji(s),u;l;)l instanceof Zt?Kp(l._targets,a)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=si(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,m,v=Zt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!m){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==_&&Xs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qn({startAt:{time:si(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ih(this,si(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ih(this,si(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=zt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=li,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xs(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(Zf(Bt,Wa(r,Bt)),qf=Wn.frame),Wn.frame>=Qu){Qu+=Kn.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Kn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e})(Bo);Qn(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sm=function(e,t,n,r,s,o,a){var l=new Nn(this._pt,e,t,0,1,Sd,null,s),c=0,u=0,f,d,m,v,g,_,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Oo(r)),o&&(E=[n,r],o(E,e,t),n=E[0],r=E[1]),d=n.match(fl)||[];f=fl.exec(r);)v=f[0],g=r.substring(c,f.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?Us(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=fl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Vf.test(r)||p)&&(l.e=0),this._pt=l,l},pu=function(e,t,n,r,s,o,a,l,c,u){Gt(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:Gt(f)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Gt(f)?c?bm:vd:_u,v;if(tn(r)&&(~r.indexOf("random(")&&(r=Oo(r)),r.charAt(1)==="="&&(v=Us(d,r)+(vn(d)||0),(v||v===0)&&(r=v))),!u||d!==r||pc)return!isNaN(d*r)&&r!==""?(v=new Nn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?Am:xd,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&cu(t,r),Sm.call(this,e,t,d,r,m,l||Kn.stringFilter,c))},ym=function(e,t,n,r,s){if(Gt(e)&&(e=Ao(e,s,t,n,r)),!Di(e)||e.style&&e.nodeType||Sn(e)||kf(e))return tn(e)?Ao(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ao(e[a],s,t,n,r);return o},md=function(e,t,n,r,s,o){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:ym(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},vr,pc,mu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:_,y=e._overwrite==="auto"&&!su,S=e.timeline,L=r.easeReverse||f,C,A,P,w,M,U,z,O,k,X,Y,q,B;if(S&&(!d||!s)&&(s="none"),e._ease=is(s,Uo.ease),e._rEase=L&&(is(L)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(O=_[0]?ts(_[0]).harness:0,q=O&&r[O.prop],C=Ga(r,uu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Pa:Zp),g._lazy=0),o){if(Er(e._startAt=Zt.set(_,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!m)&&e._startAt.revert(Pa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},C),q&&(P[O.prop]=q),Er(e._startAt=Zt.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Pa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&In(l)||l&&!v,A=0;A<_.length;A++){if(M=_[A],z=M._gsap||fu(_)[A]._gsap,e._ptLookup[A]=X={},lc[z.id]&&yr.length&&Va(),Y=E===_?A:E.indexOf(M),O&&(k=new O).init(M,q||C,e,Y,E)!==!1&&(e._pt=w=new Nn(e._pt,M,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ue){X[ue]=w}),k.priority&&(U=1)),!O||q)for(P in C)Gn[P]&&(k=md(P,C,e,Y,M,E))?k.priority&&(U=1):X[P]=w=pu.call(e,M,P,"get",C[P],Y,E,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),y&&e._pt&&(vr=e,Bt.killTweensOf(M,X,e.globalTime(t)),B=!e.parent,vr=0),e._pt&&l&&(lc[z.id]=1)}U&&yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,d&&t<=0&&S.render(li,!0,!0)},Mm=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pc=1,e.vars[t]="+=0",mu(e,a),pc=0,l?No(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)f=c[m],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Wt(n)+vn(f.e)),f.b&&(f.b=u.s+vn(f.b))},wm=function(e,t){var n=e[0]?ts(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Gs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Em=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ao=function(e,t,n,r,s){return Gt(e)?e.call(t,n,r,s):tn(e)&&~e.indexOf("random(")?Oo(e):e},_d=hu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gd={};Un(_d+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return gd[i]=1});var Zt=(function(i){zf(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:bo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Bt,E=(Sn(n)||kf(n)?ji(n[0]):"length"in r)?[n]:ci(n),y,S,L,C,A,P,w,M;if(a._targets=E.length?fu(E):No("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||d||ea(c)||ea(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(y=a.timeline=new Ln({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:E}),y.kill(),y.parent=y._dp=Gi(a),y._start=0,d||ea(c)||ea(u)){if(C=E.length,w=d&&id(d),Di(d))for(A in d)~_d.indexOf(A)&&(M||(M={}),M[A]=d[A]);for(S=0;S<C;S++)L=Ga(r,gd),L.stagger=0,U&&(L.easeReverse=U),M&&Gs(L,M),P=E[S],L.duration=+Ao(c,Gi(a),S,P,E),L.delay=(+Ao(u,Gi(a),S,P,E)||0)-a._delay,!d&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),y.to(P,L,w?w(S,P,E):0),y._ease=vt.none;y.duration()?c=u=0:a.timeline=0}else if(v){bo(Qn(y.vars.defaults,{ease:"none"})),y._ease=is(v.ease||r.ease||"none");var z=0,O,k,X;if(Sn(v))v.forEach(function(Y){return y.to(E,Y,">")}),y.duration();else{L={};for(A in v)A==="ease"||A==="easeEach"||Em(A,v[A],L,v.easeEach);for(A in L)for(O=L[A].sort(function(Y,q){return Y.t-q.t}),z=0,S=0;S<O.length;S++)k=O[S],X={ease:k.e,duration:(k.t-(S?O[S-1].t:0))/100*c},X[A]=k.v,y.to(E,X,z),z+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!su&&(vr=Gi(a),Bt.killTweensOf(E),vr=0),Ai(p,Gi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===zt(p._time)&&In(f)&&em(Gi(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),_&&Qf(Gi(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-At&&!u?l:r<At?0:r,d,m,v,g,_,p,E,y;if(!c)nm(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=zt(f%g),f===l?(v=this._repeat,d=c):(_=zt(f/g),v=~~_,v&&v===_?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),_=Ws(this._tTime,g),d===a&&!o&&this._initted&&v===_)return this._tTime=f,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(zt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(ed(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var L=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=L?(S?-1:1)/L:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(d/c);if(this._from&&(this.ratio=E=1-E),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(qn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;y&&y.render(r<0?r:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&cc(this,r,s,o),qn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&cc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Er(this,1),!s&&!(u&&!a)&&(f||a||p)&&(qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){zo||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mu(this,c),u=this._ease(c/this._dur),Mm(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(tl(this,0),this.parent||jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?So(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vr&&vr.vars.overwrite!==!0)._first||So(this),this.parent&&o!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ci(r):a,c=this._ptLookup,u=this._pt,f,d,m,v,g,_,p;if((!s||s==="all")&&Jp(a,l))return s==="all"&&(this._pt=0),So(this);for(f=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},Un(s,function(E){return g[E]=1}),s=g),s=wm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,m={}):(m=f[p]=f[p]||{},v=s);for(g in v)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Qa(this,_,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&So(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return To(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return To(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e})(Bo);Qn(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var e=new Ln,t=hc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var _u=function(e,t,n){return e[t]=n},vd=function(e,t,n){return e[t](n)},bm=function(e,t,n,r){return e[t](r.fp,n)},Tm=function(e,t,n){return e.setAttribute(t,n)},gu=function(e,t){return Gt(e[t])?vd:ou(e[t])&&e.setAttribute?Tm:_u},xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Am=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},vu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rm=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Cm=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Qa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Pm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},yd=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Nn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||xd,this.d=l||this,this.set=c||_u,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Pm,this.m=n,this.mt=s,this.tween=r},i})();Un(hu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return uu[i]=1});Jn.TweenMax=Jn.TweenLite=Zt;Jn.TimelineLite=Jn.TimelineMax=Ln;Bt=new Ln({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=fd;var rs=[],Da={},Lm=[],sh=0,Dm=0,gl=function(e){return(Da[e]||Lm).map(function(t){return t()})},mc=function(){var e=Date.now(),t=[];e-sh>2&&(gl("matchMediaInit"),rs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=bi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),gl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),sh=e,gl("matchMedia"))},Md=(function(){function i(t,n){this.selector=n&&fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Gt(n)&&(s=r,r=n,n=Gt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=fc(s)),Ft=o,f=r.apply(o,arguments),Gt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=rs.length;o--;)rs[o].id===this.id&&rs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Im=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Di(n)||(n={matches:n});var o=new Md(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(rs.indexOf(o)<0&&rs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(mc):l.addEventListener("change",mc)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return cd(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){tn(e)&&(e=ci(e)[0]);var s=ts(e||{}).get,o=n?Kf:$f;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var r=e.map(function(u){return zn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Gn[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ls._pt=0,f.init(e,n?u+n:u,Ls,0,[e]),f.render(1,f),Ls._pt&&vu(1,Ls)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=zn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,Uo.ease)),eh(Uo,e||{})},config:function(e){return eh(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Jn[a]&&No(t+" effect requires "+a+" plugin.")}),dl[t]=function(a,l,c){return n(ci(a),Qn(l||{},s),c)},o&&(Ln.prototype[t]=function(a,l,c){return this.add(dl[t](a,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):vt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),r,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&Ai(n,r,r._start-r._delay),r=s;return Ai(Bt,n,0),n},context:function(e,t){return e?new Md(e,t):Ft},matchMedia:function(e){return new Im(e)},matchMediaRefresh:function(){return rs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||mc()},addEventListener:function(e,t){var n=Da[e]||(Da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Da[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:um,wrapYoyo:hm,distribute:id,random:sd,snap:rd,normalize:cm,getUnit:vn,clamp:sm,splitColor:ud,toArray:ci,selector:fc,mapRange:ad,pipe:am,unitize:lm,interpolate:fm,shuffle:nd},install:Wf,effects:dl,ticker:Wn,updateRoot:Ln.updateRoot,plugins:Gn,globalTimeline:Bt,core:{PropTween:Nn,globals:Xf,Tween:Zt,Timeline:Ln,Animation:Bo,getCache:ts,_removeLinkedListItem:Qa,reverting:function(){return on},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return su=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Xa[i]=Zt[i]});Wn.add(Ln.updateRoot);Ls=Xa.to({},{duration:0});var Um=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Nm=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Um(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},vl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Nm(a,s)}}}},zn=Xa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vl("roundProps",dc),vl("modifiers"),vl("snap",rd))||Xa;Zt.version=Ln.version=zn.version="3.15.0";Gf=1;au()&&qs();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oh,xr,Ns,xu,Qr,ah,Su,Fm=function(){return typeof window<"u"},Ji={},Yr=180/Math.PI,Fs=Math.PI/180,ps=Math.atan2,lh=1e8,yu=/([A-Z])/g,Om=/(left|right|width|margin|padding|x)/i,zm=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_c=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},km=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ed=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gm=function(e,t,n){return e.style[t]=n},Wm=function(e,t,n){return e.style.setProperty(t,n)},Xm=function(e,t,n){return e._gsap[t]=n},qm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ym=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Zm=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Fn=Ht+"Origin",$m=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xi(r,a)}):this.tfm[e]=o.x?o[e]:Xi(r,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},bd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Km=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Su(),(!s||!s.isStart)&&!n[Ht]&&(bd(n),r.zOrigin&&n[Fn]&&(n[Fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Td=function(e,t){var n={target:e,props:[],revert:Km,save:$m};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Ad,gc=function(e,t){var n=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return n&&n.style?n:xr.createElement(e)},Yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(yu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ys(t)||t,1)||""},ch="O,Moz,ms,Ms,Webkit".split(","),Ys=function(e,t,n){var r=t||Qr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ch[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ch[o]:"")+e},vc=function(){Fm()&&window.document&&(oh=window,xr=oh.document,Ns=xr.documentElement,Qr=gc("div")||{style:{}},gc("div"),Ht=Ys(Ht),Fn=Ht+"Origin",Qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ad=!!Ys("perspective"),Su=zn.core.reverting,xu=1)},uh=function(e){var t=e.ownerSVGElement,n=gc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ns.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ns.removeChild(n),s},hh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rd=function(e){var t,n;try{t=e.getBBox()}catch{t=uh(e),n=1}return t&&(t.width||t.height)||n||(t=uh(e)),t&&!t.width&&!t.x&&!t.y?{x:+hh(e,["x","cx","x1"])||0,y:+hh(e,["y","cy","y1"])||0,width:0,height:0}:t},Cd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rd(e))},br=function(e,t){if(t){var n=e.style,r;t in Ji&&t!==Fn&&(t=Ht),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(yu,"-$1").toLowerCase())):n.removeAttribute(t)}},Sr=function(e,t,n,r,s,o){var a=new Nn(e._pt,t,n,0,1,o?Ed:wd);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},fh={deg:1,rad:1,turn:1},jm={grid:1,flex:1},Tr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Qr.style,l=Om.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",m=r==="%",v,g,_,p;if(r===o||!s||fh[r]||fh[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Cd(e),(m||o==="%")&&(Ji[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Wt(m?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===xr||!g.appendChild)&&(g=xr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===Wn.time&&!_.uncache)return Wt(s/_.width*f);if(m&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,v=e[u],E?e.style[t]=E:br(e,t)}else(m||o==="%")&&!jm[Yn(g,"display")]&&(a.position=Yn(e,"position")),g===e&&(a.position="static"),g.appendChild(Qr),v=Qr[u],g.removeChild(Qr),a.position="absolute";return l&&m&&(_=ts(g),_.time=Wn.time,_.width=g[u]),Wt(d?v*s/f:v&&s?f/v*s:0)},Xi=function(e,t,n,r){var s;return xu||vc(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Ho(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ya(Yn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qa[t]&&qa[t](e,t,n)||Yn(e,t)||Yf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},Jm=function(e,t,n,r){if(!n||n==="none"){var s=Ys(t,e,1),o=s&&Yn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,Sd),l=0,c=0,u,f,d,m,v,g,_,p,E,y,S,L;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yn(e,t)||r,g?e.style[t]=g:br(e,t)),u=[n,r],fd(u),n=u[0],r=u[1],d=n.match(Ps)||[],L=r.match(Ps)||[],L.length){for(;f=Ps.exec(r);)_=f[0],E=r.substring(l,f.index),v?v=(v+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(v=1),_!==(g=d[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),_.charAt(1)==="="&&(_=Us(m,_)+S),p=parseFloat(_),y=_.substr((p+"").length),l=Ps.lastIndex-y.length,y||(y=y||Kn.units[t]||S,l===r.length&&(r+=y,a.e+=y)),S!==y&&(m=Tr(e,t,g,y)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ed:wd;return Vf.test(r)&&(a.e=0),this._pt=a,a},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qm=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=dh[n]||n,t[1]=dh[r]||r,t.join(" ")},e_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?Fn:Ht),br(n,a);l&&(br(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ho(n,1),o.uncache=1,bd(r)))}},qa={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,e_);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ko=[1,0,0,1,0,0],Pd={},Ld=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ph=function(e){var t=Yn(e,Ht);return Ld(t)?ko:t.substr(7).match(Hf).map(Wt)},Mu=function(e,t){var n=e._gsap||ts(e),r=e.style,s=ph(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ko:s):(s===ko&&!e.offsetParent&&e!==Ns&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ns.appendChild(e)),s=ph(e),l?r.display=l:br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xc=function(e,t,n,r,s,o){var a=e._gsap,l=s||Mu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],E=l[5],y=t.split(" "),S=parseFloat(y[0])||0,L=parseFloat(y[1])||0,C,A,P,w;n?l!==ko&&(A=m*_-v*g)&&(P=S*(_/A)+L*(-g/A)+(g*E-_*p)/A,w=S*(-v/A)+L*(m/A)-(m*E-v*p)/A,S=P,L=w):(C=Rd(e),S=C.x+(~y[0].indexOf("%")?S/100*C.width:S),L=C.y+(~(y[1]||y[0]).indexOf("%")?L/100*C.height:L)),r||r!==!1&&a.smooth?(p=S-c,E=L-u,a.xOffset=f+(p*m+E*g)-p,a.yOffset=d+(p*v+E*_)-E):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(Sr(o,a,"xOrigin",c,S),Sr(o,a,"yOrigin",u,L),Sr(o,a,"xOffset",f,a.xOffset),Sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},Ho=function(e,t){var n=e._gsap||new pd(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Yn(e,Fn)||"0",u,f,d,m,v,g,_,p,E,y,S,L,C,A,P,w,M,U,z,O,k,X,Y,q,B,ue,j,de,we,ze,J,oe;return u=f=d=g=_=p=E=y=S=0,m=v=1,n.svg=!!(e.getCTM&&Cd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),r.scale=r.rotate=r.translate="none"),A=Mu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),xc(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),L=n.xOrigin||0,C=n.yOrigin||0,A!==ko&&(U=A[0],z=A[1],O=A[2],k=A[3],u=X=A[4],f=Y=A[5],A.length===6?(m=Math.sqrt(U*U+z*z),v=Math.sqrt(k*k+O*O),g=U||z?ps(z,U)*Yr:0,E=O||k?ps(O,k)*Yr+g:0,E&&(v*=Math.abs(Math.cos(E*Fs))),n.svg&&(u-=L-(L*U+C*O),f-=C-(L*z+C*k))):(oe=A[6],ze=A[7],j=A[8],de=A[9],we=A[10],J=A[11],u=A[12],f=A[13],d=A[14],P=ps(oe,we),_=P*Yr,P&&(w=Math.cos(-P),M=Math.sin(-P),q=X*w+j*M,B=Y*w+de*M,ue=oe*w+we*M,j=X*-M+j*w,de=Y*-M+de*w,we=oe*-M+we*w,J=ze*-M+J*w,X=q,Y=B,oe=ue),P=ps(-O,we),p=P*Yr,P&&(w=Math.cos(-P),M=Math.sin(-P),q=U*w-j*M,B=z*w-de*M,ue=O*w-we*M,J=k*M+J*w,U=q,z=B,O=ue),P=ps(z,U),g=P*Yr,P&&(w=Math.cos(P),M=Math.sin(P),q=U*w+z*M,B=X*w+Y*M,z=z*w-U*M,Y=Y*w-X*M,U=q,X=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Wt(Math.sqrt(U*U+z*z+O*O)),v=Wt(Math.sqrt(Y*Y+oe*oe)),P=ps(X,Y),E=Math.abs(P)>2e-4?P*Yr:0,S=J?1/(J<0?-J:J):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ld(Yn(e,Ht)),q&&e.setAttribute("transform",q))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Wt(m),n.scaleY=Wt(v),n.rotation=Wt(g)+a,n.rotationX=Wt(_)+a,n.rotationY=Wt(p)+a,n.skewX=E+a,n.skewY=y+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Fn]=Ya(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?n_:Ad?Dd:t_,n.uncache=0,n},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},xl=function(e,t,n){var r=vn(t);return Wt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",r)))+r},t_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dd(e,t)},Or="0deg",lo="0px",zr=") ",Dd=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,E=n.target,y=n.zOrigin,S="",L=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Or||u!==Or)){var C=parseFloat(u)*Fs,A=Math.sin(C),P=Math.cos(C),w;C=parseFloat(f)*Fs,w=Math.cos(C),o=xl(E,o,A*w*-y),a=xl(E,a,-Math.sin(C)*-y),l=xl(E,l,P*w*-y+y)}_!==lo&&(S+="perspective("+_+zr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(L||o!==lo||a!==lo||l!==lo)&&(S+=l!==lo||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+zr),c!==Or&&(S+="rotate("+c+zr),u!==Or&&(S+="rotateY("+u+zr),f!==Or&&(S+="rotateX("+f+zr),(d!==Or||m!==Or)&&(S+="skew("+d+", "+m+zr),(v!==1||g!==1)&&(S+="scale("+v+", "+g+zr),E.style[Ht]=S||"translate(0, 0)"},n_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,E=n.forceCSS,y=parseFloat(o),S=parseFloat(a),L,C,A,P,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,L=Math.cos(l)*f,C=Math.sin(l)*f,A=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=Fs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,P*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),L*=w,C*=w)),L=Wt(L),C=Wt(C),A=Wt(A),P=Wt(P)):(L=f,P=d,C=A=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Tr(m,"x",o,"px"),S=Tr(m,"y",a,"px")),(v||g||_||p)&&(y=Wt(y+v-(v*L+g*A)+_),S=Wt(S+g-(v*C+g*P)+p)),(r||s)&&(w=m.getBBox(),y=Wt(y+r/100*w.width),S=Wt(S+s/100*w.height)),w="matrix("+L+","+C+","+A+","+P+","+y+","+S+")",m.setAttribute("transform",w),E&&(m.style[Ht]=w)},i_=function(e,t,n,r,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Yr:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*lh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*lh)%o-~~(c/o)*o)),e._pt=d=new Nn(e._pt,t,n,r,c,Bm),d.e=u,d.u="deg",e._props.push(n),d},mh=function(e,t){for(var n in t)e[n]=t[n];return e},r_=function(e,t,n){var r=mh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=Ho(n,1),br(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=Ho(n,1),o[Ht]=c);for(l in Ji)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=vn(c),v=vn(u),f=m!==v?Tr(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,a,l,f,d-f,_c),e._pt.u=v||0,e._props.push(l));mh(a,r)};Un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});qa[e>1?"border"+i:i]=function(a,l,c,u,f){var d,m;if(arguments.length<4)return d=o.map(function(v){return Xi(a,v,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(v,g){return m[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,m,f)}});var Id={name:"css",register:vc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,m,v,g,_,p,E,y,S,L,C,A,P,w;xu||vc(),this.styles=this.styles||Td(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&md(g,t,n,r,e,s)))){if(m=typeof u,v=qa[g],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Oo(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Mr.lastIndex=0,Mr.test(c)||(_=vn(c),p=vn(u),p?_!==p&&(c=Tr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],tn(c)&&~c.indexOf("random(")&&(c=Oo(c)),vn(c+"")||c==="auto"||(c+=Kn.units[g]||vn(Xi(e,g))||""),(c+"").charAt(1)==="="&&(c=Xi(e,g))):c=Xi(e,g),d=parseFloat(c),E=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),g in Ri&&(g==="autoAlpha"&&(d===1&&Xi(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),Sr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ji,y){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Yn(e,"perspective"),M?e.style.perspective=M:br(e,"perspective")}f=parseFloat(u)}if(S||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),C=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new Nn(this._pt,a,Ht,0,1,L.renderTransform,L,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,L,"scaleY",L.scaleY,(E?Us(L.scaleY,E+f):f)-L.scaleY||0,_c),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Fn,0,a[Fn]),u=Qm(u),L.svg?xc(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==L.zOrigin&&Sr(this,L,"zOrigin",L.zOrigin,p),Sr(this,a,g,Ya(c),Ya(u)));continue}else if(g==="svgOrigin"){xc(e,u,1,C,0,this);continue}else if(g in Pd){i_(this,L,g,d,E?Us(d,E+u):u);continue}else if(g==="smoothOrigin"){Sr(this,L,"smooth",L.smooth,u);continue}else if(g==="force3D"){L[g]=u;continue}else if(g==="transform"){r_(this,u,e);continue}}else g in a||(g=Ys(g)||g);if(y||(f||f===0)&&(d||d===0)&&!zm.test(u)&&g in a)_=(c+"").substr((d+"").length),f||(f=0),p=vn(u)||(g in Kn.units?Kn.units[g]:_),_!==p&&(d=Tr(e,g,c,p)),this._pt=new Nn(this._pt,y?L:a,g,d,(E?Us(d,E+f):f)-d,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Vm:_c),this._pt.u=p||0,y&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=Hm):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=km);else if(g in a)Jm.call(this,e,g,c,E?E+u:u);else if(g in e)this.add(e,g,c||e[g],E?E+u:u,r,s);else if(g!=="parseTransform"){cu(g,u);continue}y||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}A&&yd(this)},render:function(e,t){if(t.tween._time||!Su())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Ri,getSetter:function(e,t,n){var r=Ri[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==Fn&&(e._gsap.x||Xi(e,"x"))?n&&ah===n?t==="scale"?qm:Xm:(ah=n||{})&&(t==="scale"?Ym:Zm):e.style&&!ou(e.style[t])?Gm:~t.indexOf("-")?Wm:gu(e,t)},core:{_removeProperty:br,_getMatrix:Mu}};zn.utils.checkPrefix=Ys;zn.core.getStyleSaver=Td;(function(i,e,t,n){var r=Un(i+","+e+","+t,function(s){Ji[s]=1});Un(e,function(s){Kn.units[s]="deg",Pd[s]=1}),Ri[r[13]]=i+","+e,Un(n,function(s){var o=s.split(":");Ri[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Kn.units[i]="px"});zn.registerPlugin(Id);var wu=zn.registerPlugin(Id)||zn;wu.core.Tween;const Ud=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="170",s_=0,_h=1,o_=2,Nd=1,a_=2,Vi=3,Ar=0,On=1,En=2,xi=0,wr=1,gh=2,vh=3,xh=4,Vo=5,bn=100,l_=101,c_=102,u_=103,h_=104,Ia=200,oi=201,f_=202,d_=203,Os=204,zs=205,p_=206,m_=207,__=208,g_=209,v_=210,x_=211,S_=212,y_=213,M_=214,Sc=0,yc=1,Mc=2,Zs=3,wc=4,Ec=5,bc=6,Tc=7,Fd=0,w_=1,E_=2,Li=0,b_=1,T_=2,A_=3,R_=4,C_=5,P_=6,L_=7,Od=300,$s=301,Ks=302,Ac=303,Rc=304,nl=306,Bs=1e3,Zn=1001,Za=1002,an=1003,D_=1004,ta=1005,mt=1006,Sl=1007,Yi=1008,Ii=1009,zd=1010,Bd=1011,js=1012,bu=1013,as=1014,$n=1015,Ci=1016,Tu=1017,Au=1018,Js=1020,kd=35902,Hd=1021,Vd=1022,xn=1023,Gd=1024,Wd=1025,ks=1026,Qs=1027,Ru=1028,Cu=1029,Xd=1030,Pu=1031,Lu=1033,Ua=33776,Na=33777,Fa=33778,Oa=33779,Cc=35840,Pc=35841,Lc=35842,Dc=35843,Ic=36196,Uc=37492,Nc=37496,Fc=37808,Oc=37809,zc=37810,Bc=37811,kc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Zc=37820,$c=37821,za=36492,Kc=36494,jc=36495,qd=36283,Jc=36284,Qc=36285,eu=36286,I_=3200,U_=3201,N_=0,F_=1,en="",wn="srgb",Ui="srgb-linear",il="linear",bt="srgb",ms=7680,Sh=519,O_=512,z_=513,B_=514,Yd=515,k_=516,H_=517,V_=518,G_=519,yh=35044,sr=35048,Mh="300 es",Zi=2e3,$a=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const Ro=Math.PI/180,Go=180/Math.PI;function no(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function W_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function X_(i,e,t){return i!==e?(t-i)/(e-i):0}function Co(i,e,t){return(1-t)*i+t*e}function q_(i,e,t,n){return Co(i,e,1-Math.exp(-t*n))}function Y_(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function Z_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function K_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j_(i,e){return i+Math.random()*(e-i)}function J_(i){return i*(.5-Math.random())}function Q_(i){i!==void 0&&(wh=i);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e0(i){return i*Ro}function t0(i){return i*Go}function n0(i){return(i&i-1)===0&&i!==0}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function r0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function s0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Ro,RAD2DEG:Go,generateUUID:no,clamp:gn,euclideanModulo:Du,mapLinear:W_,inverseLerp:X_,lerp:Co,damp:q_,pingpong:Y_,smoothstep:Z_,smootherstep:$_,randInt:K_,randFloat:j_,randFloatSpread:J_,seededRandom:Q_,degToRad:e0,radToDeg:t0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:r0,setQuaternionFromProperEuler:s0,normalize:yn,denormalize:Cs};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,r,s,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],E=r[1],y=r[4],S=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*g+a*E+l*L,s[3]=o*_+a*y+l*C,s[6]=o*p+a*S+l*A,s[1]=c*g+u*E+f*L,s[4]=c*_+u*y+f*C,s[7]=c*p+u*S+f*A,s[2]=d*g+m*E+v*L,s[5]=d*_+m*y+v*C,s[8]=d*p+m*S+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,v=t*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new ct;function Zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o0(){const i=Wo("canvas");return i.style.display="block",i}const Eh={};function Mo(i){i in Eh||(Eh[i]=!0,console.warn(i))}function a0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function l0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===en?il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bh=[.64,.33,.3,.6,.15,.06],Th=[.2126,.7152,.0722],Ah=[.3127,.329],Rh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Ui]:{primaries:bh,whitePoint:Ah,transfer:il,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:Th,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:bh,whitePoint:Ah,transfer:bt,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:Th,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}});let _s;class u0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Wo("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h0=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ml(r[o].image)):s.push(Ml(r[o]))}else s=Ml(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?u0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class ln extends to{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Zn,r=Zn,s=mt,o=Yi,a=xn,l=Ii,c=ln.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=no(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Od;ln.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,L=(p+1)/2,C=(u+d)/4,A=(f+g)/4,P=(v+_)/4;return y>S&&y>L?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=C/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=P/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=P/s),this.set(n,r,s,t),this}let E=Math.sqrt((_-v)*(_-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(_-v)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d0 extends to{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends d0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kd extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p0 extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==v){let _=1-a;const p=l*d+c*m+u*v+f*g,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),C=Math.atan2(L,p*E);_=Math.sin(_*C)/L,a=Math.sin(a*C)/L}const S=a*E;if(l=l*_+d*S,c=c*_+m*S,u=u*_+v*S,f=f*_+g*S,_===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-a*m,e[t+2]=c*v+u*m+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new W,Ph=new Dn;class io{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),ia.subVectors(this.max,co),gs.subVectors(e.a,co),vs.subVectors(e.b,co),xs.subVectors(e.c,co),or.subVectors(vs,gs),ar.subVectors(xs,vs),Br.subVectors(gs,xs);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Br.z,Br.y,or.z,0,-or.x,ar.z,0,-ar.x,Br.z,0,-Br.x,-or.y,or.x,0,-ar.y,ar.x,0,-Br.y,Br.x,0];return!El(t,gs,vs,xs,ia)||(t=[1,0,0,0,1,0,0,0,1],!El(t,gs,vs,xs,ia))?!1:(ra.crossVectors(or,ar),t=[ra.x,ra.y,ra.z],El(t,gs,vs,xs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new W,new W,new W,new W,new W,new W,new W,new W],fi=new W,na=new io,gs=new W,vs=new W,xs=new W,or=new W,ar=new W,Br=new W,co=new W,ia=new W,ra=new W,kr=new W;function El(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){kr.fromArray(i,s);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=t.dot(kr),u=n.dot(kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const m0=new io,uo=new W,bl=new W;class Iu{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(uo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(bl)),this.expandByPoint(uo.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new W,Tl=new W,sa=new W,lr=new W,Al=new W,oa=new W,Rl=new W;class _0{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(Tl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=lr.dot(this.direction),l=-lr.dot(sa),c=lr.lengthSq(),u=Math.abs(1-o*o);let f,d,m,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tl).addScaledVector(sa,d),m}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),r=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,r,s){Al.subVectors(t,e),oa.subVectors(n,e),Rl.crossVectors(Al,oa);let o=this.direction.dot(Rl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(lr,oa));if(l<0)return null;const c=a*this.direction.dot(Al.cross(lr));if(c<0||l+c>o)return null;const u=-a*lr.dot(Rl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,r,s,o,a,l,c,u,f,d,m,v,g,_){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,m,v,g,_)}set(e,t,n,r,s,o,a,l,c,u,f,d,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,g=c*f;t[0]=d+g*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,v0)}lookAt(e,t,n){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),cr.crossVectors(n,Bn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),cr.crossVectors(n,Bn)),cr.normalize(),aa.crossVectors(Bn,cr),r[0]=cr.x,r[4]=aa.x,r[8]=Bn.x,r[1]=cr.y,r[5]=aa.y,r[9]=Bn.y,r[2]=cr.z,r[6]=aa.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],E=n[3],y=n[7],S=n[11],L=n[15],C=r[0],A=r[4],P=r[8],w=r[12],M=r[1],U=r[5],z=r[9],O=r[13],k=r[2],X=r[6],Y=r[10],q=r[14],B=r[3],ue=r[7],j=r[11],de=r[15];return s[0]=o*C+a*M+l*k+c*B,s[4]=o*A+a*U+l*X+c*ue,s[8]=o*P+a*z+l*Y+c*j,s[12]=o*w+a*O+l*q+c*de,s[1]=u*C+f*M+d*k+m*B,s[5]=u*A+f*U+d*X+m*ue,s[9]=u*P+f*z+d*Y+m*j,s[13]=u*w+f*O+d*q+m*de,s[2]=v*C+g*M+_*k+p*B,s[6]=v*A+g*U+_*X+p*ue,s[10]=v*P+g*z+_*Y+p*j,s[14]=v*w+g*O+_*q+p*de,s[3]=E*C+y*M+S*k+L*B,s[7]=E*A+y*U+S*X+L*ue,s[11]=E*P+y*z+S*Y+L*j,s[15]=E*w+y*O+S*q+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*m-n*l*m)+g*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+_*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],E=f*_*c-g*d*c+g*l*m-a*_*m-f*l*p+a*d*p,y=v*d*c-u*_*c-v*l*m+o*_*m+u*l*p-o*d*p,S=u*g*c-v*f*c+v*a*m-o*g*m-u*a*p+o*f*p,L=v*f*l-u*g*l-v*a*d+o*g*d+u*a*_-o*f*_,C=t*E+n*y+r*S+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(g*d*s-f*_*s-g*r*m+n*_*m+f*r*p-n*d*p)*A,e[2]=(a*_*s-g*l*s+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*m-n*l*m)*A,e[4]=y*A,e[5]=(u*_*s-v*d*s+v*r*m-t*_*m-u*r*p+t*d*p)*A,e[6]=(v*l*s-o*_*s-v*r*c+t*_*c+o*r*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*A,e[8]=S*A,e[9]=(v*f*s-u*g*s-v*n*m+t*g*m+u*n*p-t*f*p)*A,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*_+t*f*_)*A,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*_-t*a*_)*A,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,v=s*f,g=o*u,_=o*f,p=a*f,E=l*c,y=l*u,S=l*f,L=n.x,C=n.y,A=n.z;return r[0]=(1-(g+p))*L,r[1]=(m+S)*L,r[2]=(v-y)*L,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+p))*C,r[6]=(_+E)*C,r[7]=0,r[8]=(v+y)*A,r[9]=(_-E)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),a=Ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const c=1/s,u=1/o,f=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,v;if(a===Zi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$a)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zi){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,m=(n+r)*u;let v,g;if(a===Zi)v=(o+s)*f,g=-2*f;else if(a===$a)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new W,di=new xt,g0=new W(0,0,0),v0=new W(1,1,1),cr=new W,aa=new W,Bn=new W,Lh=new xt,Dh=new Dn;class ei{constructor(e=0,t=0,n=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x0=0;const Ih=new W,ys=new Dn,zi=new xt,la=new W,ho=new W,S0=new W,y0=new Dn,Uh=new W(1,0,0),Nh=new W(0,1,0),Fh=new W(0,0,1),Oh={type:"added"},M0={type:"removed"},Ms={type:"childadded",child:null},Cl={type:"childremoved",child:null};class jn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new W,t=new ei,n=new Dn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ct}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ho,la,this.up):zi.lookAt(la,ho,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(zi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jn.DEFAULT_UP=new W(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new W,Bi=new W,Pl=new W,ki=new W,ws=new W,Es=new W,zh=new W,Ll=new W,Dl=new W,Il=new W,Ul=new Dt,Nl=new Dt,Fl=new Dt;class vi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pi.subVectors(e,t),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pi.subVectors(r,t),Bi.subVectors(n,t),Pl.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Bi),l=pi.dot(Pl),c=Bi.dot(Bi),u=Bi.dot(Pl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ul.setScalar(0),Nl.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ul,s.x),o.addScaledVector(Nl,s.y),o.addScaledVector(Fl,s.z),o}static isFrontFacing(e,t,n,r){return pi.subVectors(n,t),Bi.subVectors(e,t),pi.cross(Bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),pi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,n),Es.subVectors(s,n),Ll.subVectors(e,n);const l=ws.dot(Ll),c=Es.dot(Ll);if(l<=0&&c<=0)return t.copy(n);Dl.subVectors(e,r);const u=ws.dot(Dl),f=Es.dot(Dl);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ws,o);Il.subVectors(e,s);const m=ws.dot(Il),v=Es.dot(Il);if(v>=0&&m<=v)return t.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Es,a);const _=u*v-m*f;if(_<=0&&f-u>=0&&m-v>=0)return zh.subVectors(s,r),a=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(zh,a);const p=1/(_+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(ws,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Du(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ol(o,s,e+1/3),this.g=Ol(o,s,e),this.b=Ol(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return St.fromWorkingColorSpace(dn.copy(this),e),Math.round(gn(dn.r*255,0,255))*65536+Math.round(gn(dn.g*255,0,255))*256+Math.round(gn(dn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,r=dn.g,s=dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=wn){St.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,r=dn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(ca);const n=Co(ur.h,ca.h,t),r=Co(ur.s,ca.s,t),s=Co(ur.l,ca.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Je;Je.NAMES=Jd;let w0=0;class rl extends to{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=no(),this.name="",this.blending=wr,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=zs,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==zs&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uu extends rl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qi=E0();function E0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function b0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=gn(i,-65504,65504),qi.floatView[0]=i;const e=qi.uint32View[0],t=e>>23&511;return qi.baseTable[t]+((e&8388607)>>qi.shiftTable[t])}function T0(i){const e=i>>10;return qi.uint32View[0]=qi.mantissaTable[qi.offsetTable[e]+(i&1023)]+qi.exponentTable[e],qi.floatView[0]}const Bh={toHalfFloat:b0,fromHalfFloat:T0},qt=new W,ua=new rt;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),e}}class Qd extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ep extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ss extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let A0=0;const ri=new xt,zl=new jn,bs=new W,kn=new io,fo=new io,Qt=new W;class er extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?ep:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ss(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(kn.min,fo.min),kn.expandByPoint(Qt),Qt.addVectors(kn.max,fo.max),kn.expandByPoint(Qt)):(kn.expandByPoint(fo.min),kn.expandByPoint(fo.max))}kn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Qt.add(bs)),r=Math.max(r,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new W,l[P]=new W;const c=new W,u=new W,f=new W,d=new rt,m=new rt,v=new rt,g=new W,_=new W;function p(P,w,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),v.sub(d);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(U),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(U),a[P].add(g),a[w].add(g),a[M].add(g),l[P].add(_),l[w].add(_),l[M].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,w=E.length;P<w;++P){const M=E[P],U=M.start,z=M.count;for(let O=U,k=U+z;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new W,S=new W,L=new W,C=new W;function A(P){L.fromBufferAttribute(r,P),C.copy(L);const w=a[P];y.copy(w),y.sub(L.multiplyScalar(L.dot(w))).normalize(),S.crossVectors(C,w);const U=S.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,w=E.length;P<w;++P){const M=E[P],U=M.start,z=M.count;for(let O=U,k=U+z;O<k;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[m++]}return new Xt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new xt,Hr=new _0,ha=new Iu,Hh=new W,fa=new W,da=new W,pa=new W,Bl=new W,ma=new W,Vh=new W,_a=new W;class kt extends jn{constructor(e=new er,t=new Uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Bl.fromBufferAttribute(f,e),o?ma.addScaledVector(Bl,u):ma.addScaledVector(Bl.sub(t),u))}t.add(ma)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(ha.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(ha,Hh)===null||Hr.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(kh.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(kh),!(n.boundingBox!==null&&Hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const _=d[v],p=o[_.materialIndex],E=Math.max(_.start,m.start),y=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,L=y;S<L;S+=3){const C=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=ga(this,p,e,n,c,u,f,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const E=a.getX(_),y=a.getX(_+1),S=a.getX(_+2);r=ga(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const _=d[v],p=o[_.materialIndex],E=Math.max(_.start,m.start),y=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,L=y;S<L;S+=3){const C=S,A=S+1,P=S+2;r=ga(this,p,e,n,c,u,f,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const E=_,y=_+1,S=_+2;r=ga(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function R0(i,e,t,n,r,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function ga(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,fa),i.getVertexPosition(l,da),i.getVertexPosition(c,pa);const u=R0(i,e,t,n,fa,da,pa,Vh);if(u){const f=new W;vi.getBarycoord(Vh,fa,da,pa,f),r&&(u.uv=vi.getInterpolatedAttribute(r,a,l,c,f,new rt)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,f,new rt)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};vi.getNormal(fa,da,pa,d.normal),u.face=d,u.barycoord=f}return u}class qo extends er{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(u,3)),this.setAttribute("uv",new ss(f,2));function v(g,_,p,E,y,S,L,C,A,P,w){const M=S/A,U=L/P,z=S/2,O=L/2,k=C/2,X=A+1,Y=P+1;let q=0,B=0;const ue=new W;for(let j=0;j<Y;j++){const de=j*U-O;for(let we=0;we<X;we++){const ze=we*M-z;ue[g]=ze*E,ue[_]=de*y,ue[p]=k,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[_]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(we/A),f.push(1-j/P),q+=1}}for(let j=0;j<P;j++)for(let de=0;de<A;de++){const we=d+de+X*j,ze=d+de+X*(j+1),J=d+(de+1)+X*(j+1),oe=d+(de+1)+X*j;l.push(we,ze,oe),l.push(ze,J,oe),B+=6}a.addGroup(m,B,w),m+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=eo(i[t]);for(const r in n)e[r]=n[r]}return e}function C0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const P0={clone:eo,merge:Mn};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends rl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class np extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new W,Gh=new rt,Wh=new rt;class Pn extends np{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,As=1;class I0 extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Ts,As,e,t);r.layers=this.layers,this.add(r);const s=new Pn(Ts,As,e,t);s.layers=this.layers,this.add(s);const o=new Pn(Ts,As,e,t);o.layers=this.layers,this.add(o);const a=new Pn(Ts,As,e,t);a.layers=this.layers,this.add(a);const l=new Pn(Ts,As,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ip extends ln{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ip(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qo(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:xi});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=mt),new I0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const kl=new W,N0=new W,F0=new ct;class Zr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=kl.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F0.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Iu,va=new W;class rp{constructor(e=new Zr,t=new Zr,n=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],E=r[13],y=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,_-m,S-p).normalize(),n[1].setComponents(l+s,d+c,_+m,S+p).normalize(),n[2].setComponents(l+o,d+u,_+v,S+E).normalize(),n[3].setComponents(l-o,d-u,_-v,S-E).normalize(),n[4].setComponents(l-a,d-f,_-g,S-y).normalize(),t===Zi)n[5].setComponents(l+a,d+f,_+g,S+y).normalize();else if(t===$a)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function O0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],g=f[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const g=f[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Si extends er{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-E,0),g.push(0,0,1),_.push(y/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,S=E+c*(p+1),L=E+1+c*(p+1),C=E+1+c*p;m.push(y,S,C),m.push(S,L,C)}this.setIndex(m),this.setAttribute("position",new ss(v,3)),this.setAttribute("normal",new ss(g,3)),this.setAttribute("uv",new ss(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K0=`float G_BlinnPhong_Implicit( ) {
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Fg=`struct PhysicalMaterial {
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
}`,Og=`
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
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
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mv=`float getShadowMask() {
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
}`,wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
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
}`,Wv=`#if DEPTH_PACKING == 3200
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
}`,Xv=`#define DISTANCE
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
}`,qv=`#define DISTANCE
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Jv=`uniform vec3 diffuse;
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
}`,Qv=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,ax=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,cx=`#define TOON
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
}`,ux=`#define TOON
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
}`,hx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:z0,alphahash_pars_fragment:B0,alphamap_fragment:k0,alphamap_pars_fragment:H0,alphatest_fragment:V0,alphatest_pars_fragment:G0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:Z0,beginnormal_vertex:$0,bsdfs:K0,iridescence_fragment:j0,bumpmap_pars_fragment:J0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:rg,color_pars_vertex:sg,color_vertex:og,common:ag,cube_uv_reflection_fragment:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:ug,displacementmap_vertex:hg,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:_g,envmap_common_pars_fragment:gg,envmap_pars_fragment:vg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Pg,envmap_vertex:Sg,fog_vertex:yg,fog_pars_vertex:Mg,fog_fragment:wg,fog_pars_fragment:Eg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Ug,lights_physical_fragment:Ng,lights_physical_pars_fragment:Fg,lights_fragment_begin:Og,lights_fragment_maps:zg,lights_fragment_end:Bg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Kg,morphcolor_vertex:jg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:rv,normal_vertex:sv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:uv,opaque_fragment:hv,packing:fv,premultiplied_alpha_fragment:dv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:_v,roughnessmap_fragment:gv,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:Sv,shadowmap_vertex:yv,shadowmask_pars_fragment:Mv,skinbase_vertex:wv,skinning_pars_vertex:Ev,skinning_vertex:bv,skinnormal_vertex:Tv,specularmap_fragment:Av,specularmap_pars_fragment:Rv,tonemapping_fragment:Cv,tonemapping_pars_fragment:Pv,transmission_fragment:Lv,transmission_pars_fragment:Dv,uv_pars_fragment:Iv,uv_pars_vertex:Uv,uv_vertex:Nv,worldpos_vertex:Fv,background_vert:Ov,background_frag:zv,backgroundCube_vert:Bv,backgroundCube_frag:kv,cube_vert:Hv,cube_frag:Vv,depth_vert:Gv,depth_frag:Wv,distanceRGBA_vert:Xv,distanceRGBA_frag:qv,equirect_vert:Yv,equirect_frag:Zv,linedashed_vert:$v,linedashed_frag:Kv,meshbasic_vert:jv,meshbasic_frag:Jv,meshlambert_vert:Qv,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:rx,meshphong_vert:sx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:ux,points_vert:hx,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:_x},Ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ti={basic:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Mn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Mn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Mn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Mn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Mn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Mn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Mn([Ue.common,Ue.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Mn([Ue.lights,Ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ti.physical={uniforms:Mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const xa={r:0,b:0,g:0},Gr=new ei,gx=new xt;function vx(i,e,t,n,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function g(E){let y=!1;const S=v(E);S===null?p(a,l):S&&S.isColor&&(p(S,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,y){const S=v(y);S&&(S.isCubeTexture||S.mapping===nl)?(u===void 0&&(u=new kt(new qo(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:eo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gr.copy(y.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(Gr)),u.material.toneMapped=St.getTransfer(S.colorSpace)!==bt,(f!==S||d!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new Si(2,2),new Ct({name:"BackgroundMaterial",uniforms:eo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=St.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(xa,tp(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:_}}function xx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,U,z,O,k){let X=!1;const Y=f(O,z,U);s!==Y&&(s=Y,c(s.object)),X=m(M,O,z,k),X&&v(M,O,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(M,U,z,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,U,z){const O=z.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let X=k[U.id];X===void 0&&(X={},k[U.id]=X);let Y=X[O];return Y===void 0&&(Y=d(l()),X[O]=Y),Y}function d(M){const U=[],z=[],O=[];for(let k=0;k<t;k++)U[k]=0,z[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,U,z,O){const k=s.attributes,X=U.attributes;let Y=0;const q=z.getAttributes();for(const B in q)if(q[B].location>=0){const j=k[B];let de=X[B];if(de===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),j===void 0||j.attribute!==de||de&&j.data!==de.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function v(M,U,z,O){const k={},X=U.attributes;let Y=0;const q=z.getAttributes();for(const B in q)if(q[B].location>=0){let j=X[B];j===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const de={};de.attribute=j,j&&j.data&&(de.data=j.data),k[B]=de,Y++}s.attributes=k,s.attributesNum=Y,s.index=O}function g(){const M=s.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function _(M){p(M,0)}function p(M,U){const z=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;z[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),k[M]!==U&&(i.vertexAttribDivisor(M,U),k[M]=U)}function E(){const M=s.newAttributes,U=s.enabledAttributes;for(let z=0,O=U.length;z<O;z++)U[z]!==M[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function y(M,U,z,O,k,X,Y){Y===!0?i.vertexAttribIPointer(M,U,z,k,X):i.vertexAttribPointer(M,U,z,O,k,X)}function S(M,U,z,O){g();const k=O.attributes,X=z.getAttributes(),Y=U.defaultAttributeValues;for(const q in X){const B=X[q];if(B.location>=0){let ue=k[q];if(ue===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const j=ue.normalized,de=ue.itemSize,we=e.get(ue);if(we===void 0)continue;const ze=we.buffer,J=we.type,oe=we.bytesPerElement,le=J===i.INT||J===i.UNSIGNED_INT||ue.gpuType===bu;if(ue.isInterleavedBufferAttribute){const ne=ue.data,ve=ne.stride,Ne=ue.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)p(B.location+Re,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<B.locationSize;Re++)_(B.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Re=0;Re<B.locationSize;Re++)y(B.location+Re,de/B.locationSize,J,j,ve*oe,(Ne+de/B.locationSize*Re)*oe,le)}else{if(ue.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)p(B.location+ne,ue.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<B.locationSize;ne++)_(B.location+ne);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ne=0;ne<B.locationSize;ne++)y(B.location+ne,de/B.locationSize,J,j,de*oe,de/B.locationSize*ne*oe,le)}}else if(Y!==void 0){const j=Y[q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}E()}function L(){P();for(const M in n){const U=n[M];for(const z in U){const O=U[z];for(const k in O)u(O[k].object),delete O[k];delete U[z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const z in U){const O=U[z];for(const k in O)u(O[k].object),delete O[k];delete U[z]}delete n[M.id]}function A(M){for(const U in n){const z=n[U];if(z[M.id]===void 0)continue;const O=z[M.id];for(const k in O)u(O[k].object),delete O[k];delete z[M.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:E}}function Sx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function Mx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Zr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!_)s?u(null):c();else{const E=s?0:n,y=E*4;let S=p.clippingState||null;l.value=S,S=u(v,d,y,m);for(let L=0;L!==y;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,v){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<p)&&(_=new Float32Array(p));for(let y=0,S=m;y!==g;++y,S+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function wx(i){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=$s:a===Rc&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===Rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new U0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nu extends np{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ds=4,Xh=[.125,.215,.35,.446,.526,.582],jr=20,Hl=new Nu,qh=new Je;let Vl=null,Gl=0,Wl=0,Xl=!1;const $r=(1+Math.sqrt(5))/2,Rs=1/$r,Yh=[new W(-$r,Rs,0),new W($r,Rs,0),new W(-Rs,0,$r),new W(Rs,0,$r),new W(0,$r,-Rs),new W(0,$r,Rs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Gl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Ci,format:xn,colorSpace:Ui,depthBuffer:!1},r=$h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(s)),this._blurMaterial=bx(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,r){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(qh),u.toneMapping=Li,u.autoClear=!1;const m=new Uu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),v=new kt(new qo,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(qh),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Sa(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===$s||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yh[(r-s-1)%Yh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jr-1),g=s/v,_=isFinite(s)?1+Math.floor(u*g):jr;_>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${jr}`);const p=[];let E=0;for(let A=0;A<jr;++A){const P=A/g,w=Math.exp(-P*P/2);p.push(w),A===0?E+=w:A<_&&(E+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const S=this._sizeLods[r],L=3*S*(r>y-Ds?r-y+Ds:0),C=4*(this._cubeSize-S);Sa(t,L,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Hl)}}function Ex(i){const e=[],t=[],n=[];let r=i;const s=i-Ds+1+Xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ds?l=Xh[o-i+Ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,g=3,_=2,p=1,E=new Float32Array(g*v*m),y=new Float32Array(_*v*m),S=new Float32Array(p*v*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,P=C>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(w,g*v*C),y.set(d,_*v*C);const M=[C,C,C,C,C,C];S.set(M,p*v*C)}const L=new er;L.setAttribute("position",new Xt(E,g)),L.setAttribute("uv",new Xt(y,_)),L.setAttribute("faceIndex",new Xt(S,p)),e.push(L),r>Ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $h(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bx(i,e,t){const n=new Float32Array(jr),r=new W(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Kh(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function jh(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}function Tx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ac||l===Rc,u=l===$s||l===Ks;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Zh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Zh(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ax(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Mo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rx(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let y=0,S=E.length;y<S;y+=3){const L=E[y+0],C=E[y+1],A=E[y+2];d.push(L,C,C,A,A,L)}}else if(v!==void 0){const E=v.array;g=v.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const L=y+0,C=y+1,A=y+2;d.push(L,C,C,A,A,L)}}else return;const _=new(Zd(d)?ep:Qd)(d,1);_.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Cx(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),t.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*o,v),t.update(m,n,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function f(d,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,g,0,v);let p=0;for(let E=0;E<v;E++)p+=m[E]*g[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Px(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Lx(i,e,t){const n=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let L=a.attributes.position.count*S,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*f),P=new Kd(A,L,C,f);P.type=$n,P.needsUpdate=!0;const w=S*4;for(let U=0;U<f;U++){const z=p[U],O=E[U],k=y[U],X=L*C*4*U;for(let Y=0;Y<z.count;Y++){const q=Y*w;v===!0&&(r.fromBufferAttribute(z,Y),A[X+q+0]=r.x,A[X+q+1]=r.y,A[X+q+2]=r.z,A[X+q+3]=0),g===!0&&(r.fromBufferAttribute(O,Y),A[X+q+4]=r.x,A[X+q+5]=r.y,A[X+q+6]=r.z,A[X+q+7]=0),_===!0&&(r.fromBufferAttribute(k,Y),A[X+q+8]=r.x,A[X+q+9]=r.y,A[X+q+10]=r.z,A[X+q+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new rt(L,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Dx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ou extends ln{constructor(e,t,n,r,s,o,a,l,c,u=ks){if(u!==ks&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=as),n===void 0&&u===Qs&&(n=Js),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const op=new ln,Jh=new Ou(1,1),ap=new Kd,lp=new p0,cp=new ip,Qh=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),rf=new Float32Array(4);function ro(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),jt(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),jt(t,n)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),jt(t,n)}}function kx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function Zx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=Yd,s=Jh):s=op,t.setTexture2D(e||s,r)}function $x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lp,r)}function Kx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cp,r)}function jx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ap,r)}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Ox;case 35675:return zx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}function Qx(i,e){i.uniform1fv(this.addr,e)}function eS(i,e){const t=ro(e,this.size,2);i.uniform2fv(this.addr,t)}function tS(i,e){const t=ro(e,this.size,3);i.uniform3fv(this.addr,t)}function nS(i,e){const t=ro(e,this.size,4);i.uniform4fv(this.addr,t)}function iS(i,e){const t=ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rS(i,e){const t=ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sS(i,e){const t=ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oS(i,e){i.uniform1iv(this.addr,e)}function aS(i,e){i.uniform2iv(this.addr,e)}function lS(i,e){i.uniform3iv(this.addr,e)}function cS(i,e){i.uniform4iv(this.addr,e)}function uS(i,e){i.uniform1uiv(this.addr,e)}function hS(i,e){i.uniform2uiv(this.addr,e)}function fS(i,e){i.uniform3uiv(this.addr,e)}function dS(i,e){i.uniform4uiv(this.addr,e)}function pS(i,e,t){const n=this.cache,r=e.length,s=sl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||op,s[o])}function mS(i,e,t){const n=this.cache,r=e.length,s=sl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lp,s[o])}function _S(i,e,t){const n=this.cache,r=e.length,s=sl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cp,s[o])}function gS(i,e,t){const n=this.cache,r=e.length,s=sl(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ap,s[o])}function vS(i){switch(i){case 5126:return Qx;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return gS}}class xS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class SS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vS(t.type)}}class yS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function sf(i,e){i.seq.push(e),i.map[e.id]=e}function MS(i,e,t){const n=i.name,r=n.length;for(ql.lastIndex=0;;){const s=ql.exec(n),o=ql.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sf(t,c===void 0?new xS(a,i,e):new SS(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new yS(a),sf(t,f)),t=f}}}class Ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);MS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function of(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wS=37297;let ES=0;function bS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const af=new ct;function TS(i){St._getMatrix(af,St.workingColorSpace,i);const e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case il:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bS(i.getShaderSource(e),o)}else return r}function AS(i,e){const t=TS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RS(i,e){let t;switch(e){case b_:t="Linear";break;case T_:t="Reinhard";break;case A_:t="Cineon";break;case R_:t="ACESFilmic";break;case P_:t="AgX";break;case L_:t="Neutral";break;case C_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ya=new W;function CS(){St.getLuminanceCoefficients(ya);const i=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function LS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wo(i){return i!==""}function cf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(IS,NS)}const US=new Map;function NS(i,e){let t=ht[e];if(t===void 0){const n=US.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(i){return i.replace(FS,OS)}function OS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function BS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function HS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case E_:e="ENVMAP_BLENDING_ADD";break}return e}function VS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function GS(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zS(t),c=BS(t),u=kS(t),f=HS(t),d=VS(t),m=PS(t),v=LS(s),g=r.createProgram();let _,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(_=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?ht.tonemapping_pars_fragment:"",t.toneMapping!==Li?RS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),CS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=tu(o),o=cf(o,t),o=uf(o,t),a=tu(a),a=cf(a,t),a=uf(a,t),o=hf(o),a=hf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+_+o,S=E+p+a,L=of(r,r.VERTEX_SHADER,y),C=of(r,r.FRAGMENT_SHADER,S);r.attachShader(g,L),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(U){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(C).trim();let X=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,C);else{const q=lf(r,L,"vertex"),B=lf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+q+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||k==="")&&(Y=!1);Y&&(U.diagnostics={runnable:X,programLog:z,vertexShader:{log:O,prefix:_},fragmentShader:{log:k,prefix:p}})}r.deleteShader(L),r.deleteShader(C),P=new Ba(r,g),w=DS(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,wS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ES++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=C,this}let WS=0;class XS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qS(e),t.set(e,n)),n}}class qS{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}}function YS(i,e,t,n,r,s,o){const a=new jd,l=new XS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,M,U,z,O){const k=z.fog,X=O.geometry,Y=w.isMeshStandardMaterial?z.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),B=q&&q.mapping===nl?q.image.height:null,ue=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=j!==void 0?j.length:0;let we=0;X.morphAttributes.position!==void 0&&(we=1),X.morphAttributes.normal!==void 0&&(we=2),X.morphAttributes.color!==void 0&&(we=3);let ze,J,oe,le;if(ue){const _t=Ti[ue];ze=_t.vertexShader,J=_t.fragmentShader}else ze=w.vertexShader,J=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,je=!!w.map,We=!!w.matcap,nt=!!q,F=!!w.aoMap,Fe=!!w.lightMap,Ze=!!w.bumpMap,Xe=!!w.normalMap,ke=!!w.displacementMap,ye=!!w.emissiveMap,be=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,V=w.clearcoat>0,Q=w.dispersion>0,ae=w.iridescence>0,ie=w.sheen>0,he=w.transmission>0,ce=T&&!!w.anisotropyMap,me=V&&!!w.clearcoatMap,$e=V&&!!w.clearcoatNormalMap,ge=V&&!!w.clearcoatRoughnessMap,De=ae&&!!w.iridescenceMap,Oe=ae&&!!w.iridescenceThicknessMap,Be=ie&&!!w.sheenColorMap,Ce=ie&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,He=!!w.specularColorMap,qe=!!w.specularIntensityMap,H=he&&!!w.transmissionMap,ee=he&&!!w.thicknessMap,re=!!w.gradientMap,fe=!!w.alphaMap,Le=w.alphaTest>0,Ie=!!w.alphaHash,st=!!w.extensions;let Mt=Li;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Pt={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:J,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ui,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:We,envMap:nt,envMapMode:nt&&q.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Fe,bumpMap:Ze,normalMap:Xe,displacementMap:d&&ke,emissiveMap:ye,normalMapObjectSpace:Xe&&w.normalMapType===F_,normalMapTangentSpace:Xe&&w.normalMapType===N_,metalnessMap:be,roughnessMap:I,anisotropy:T,anisotropyMap:ce,clearcoat:V,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:ge,dispersion:Q,iridescence:ae,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:ie,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:Qe,specularColorMap:He,specularIntensityMap:qe,transmission:he,transmissionMap:H,thicknessMap:ee,gradientMap:re,opaque:w.transparent===!1&&w.blending===wr&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:Le,alphaHash:Ie,combine:w.combine,mapUv:je&&g(w.map.channel),aoMapUv:F&&g(w.aoMap.channel),lightMapUv:Fe&&g(w.lightMap.channel),bumpMapUv:Ze&&g(w.bumpMap.channel),normalMapUv:Xe&&g(w.normalMap.channel),displacementMapUv:ke&&g(w.displacementMap.channel),emissiveMapUv:ye&&g(w.emissiveMap.channel),metalnessMapUv:be&&g(w.metalnessMap.channel),roughnessMapUv:I&&g(w.roughnessMap.channel),anisotropyMapUv:ce&&g(w.anisotropyMap.channel),clearcoatMapUv:me&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(w.sheenRoughnessMap.channel),specularMapUv:Qe&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:qe&&g(w.specularIntensityMap.channel),transmissionMapUv:H&&g(w.transmissionMap.channel),thicknessMapUv:ee&&g(w.thicknessMap.channel),alphaMapUv:fe&&g(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xe||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(je||fe),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&St.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===On,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:st&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&w.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(E(M,w),y(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=v[w.type];let U;if(M){const z=Ti[M];U=P0.clone(z.uniforms)}else U=w.uniforms;return U}function L(w,M){let U;for(let z=0,O=u.length;z<O;z++){const k=u[z];if(k.cacheKey===M){U=k,++U.usedTimes;break}}return U===void 0&&(U=new GS(i,M,w,s),u.push(U)),U}function C(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function ZS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $S(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,m,v,g,_){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:_},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=_),e++,p}function a(f,d,m,v,g,_){const p=o(f,d,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(f,d,m,v,g,_){const p=o(f,d,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||$S),n.length>1&&n.sort(d||df),r.length>1&&r.sort(d||df)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function KS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new pf,i.set(n,[o])):r>=s.length?(o=new pf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Je};break;case"SpotLight":t={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function JS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QS=0;function e1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t1(i){const e=new jS,t=JS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new xt,o=new xt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,E=0,y=0,S=0,L=0,C=0,A=0;c.sort(e1);for(let w=0,M=c.length;w<M;w++){const U=c[w],z=U.color,O=U.intensity,k=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=z.r*O,f+=z.g*O,d+=z.b*O;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],O);A++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,B=t.get(U);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=Y,m++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(z).multiplyScalar(O),Y.distance=k,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[g]=Y;const q=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,q.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,U.castShadow){const B=t.get(U);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=X,S++}g++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(z).multiplyScalar(O),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=Y,_++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const q=U.shadow,B=t.get(U);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=U.shadow.matrix,y++}n.point[v]=Y,v++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(O),Y.groundColor.copy(U.groundColor).multiplyScalar(O),n.hemi[p]=Y,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=A,n.version=QS++)}function l(c,u){let f=0,d=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(y.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function mf(i){const e=new t1(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function n1(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new mf(i),e.set(r,[a])):s>=o.length?(a=new mf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class i1 extends rl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r1 extends rl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function a1(i,e,t){let n=new rp;const r=new rt,s=new rt,o=new Dt,a=new i1({depthPacking:U_}),l=new r1,c={},u=t.maxTextureSize,f={[Ar]:On,[On]:Ar,[En]:En},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(C,A,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Vi&&this.type===Vi,k=p===Vi&&this.type!==Vi;for(let X=0,Y=C.length;X<Y;X++){const q=C[X],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ue=B.getFrameExtents();if(r.multiply(ue),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,B.mapSize.y=s.y)),B.map===null||O===!0||k===!0){const de=this.type!==Vi?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(r.x,r.y,de),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const j=B.getViewportCount();for(let de=0;de<j;de++){const we=B.getViewport(de);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),z.viewport(o),B.updateMatrices(q,de),n=B.getFrustum(),S(A,P,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&E(B,P),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,M,U)};function E(C,A){const P=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,P,m,g,null)}function y(C,A,P,w){let M=null;const U=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,O=A.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let X=k[O];X===void 0&&(X=M.clone(),k[O]=X,A.addEventListener("dispose",L)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function S(C,A,P,w,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Vi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const O=e.update(C),k=C.material;if(Array.isArray(k)){const X=O.groups;for(let Y=0,q=X.length;Y<q;Y++){const B=X[Y],ue=k[B.materialIndex];if(ue&&ue.visible){const j=y(C,ue,w,M);C.onBeforeShadow(i,C,A,P,O,j,B),i.renderBufferDirect(P,null,O,j,C,B),C.onAfterShadow(i,C,A,P,O,j,B)}}}else if(k.visible){const X=y(C,k,w,M);C.onBeforeShadow(i,C,A,P,O,X,null),i.renderBufferDirect(P,null,O,X,C,null),C.onAfterShadow(i,C,A,P,O,X,null)}}const z=C.children;for(let O=0,k=z.length;O<k;O++)S(z[O],A,P,w,M)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const w=c[P],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const l1={[Sc]:yc,[Mc]:bc,[wc]:Tc,[Zs]:Ec,[yc]:Sc,[bc]:Mc,[Tc]:wc,[Ec]:Zs};function c1(i,e){function t(){let H=!1;const ee=new Dt;let re=null;const fe=new Dt(0,0,0,0);return{setMask:function(Le){re!==Le&&!H&&(i.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){H=Le},setClear:function(Le,Ie,st,Mt,Pt){Pt===!0&&(Le*=Mt,Ie*=Mt,st*=Mt),ee.set(Le,Ie,st,Mt),fe.equals(ee)===!1&&(i.clearColor(Le,Ie,st,Mt),fe.copy(ee))},reset:function(){H=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let H=!1,ee=!1,re=null,fe=null,Le=null;return{setReversed:function(Ie){if(ee!==Ie){const st=e.get("EXT_clip_control");ee?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Le;Le=null,this.setClear(Mt)}ee=Ie},getReversed:function(){return ee},setTest:function(Ie){Ie?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Ie){re!==Ie&&!H&&(i.depthMask(Ie),re=Ie)},setFunc:function(Ie){if(ee&&(Ie=l1[Ie]),fe!==Ie){switch(Ie){case Sc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ie}},setLocked:function(Ie){H=Ie},setClear:function(Ie){Le!==Ie&&(ee&&(Ie=1-Ie),i.clearDepth(Ie),Le=Ie)},reset:function(){H=!1,re=null,fe=null,Le=null,ee=!1}}}function r(){let H=!1,ee=null,re=null,fe=null,Le=null,Ie=null,st=null,Mt=null,Pt=null;return{setTest:function(_t){H||(_t?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(_t){ee!==_t&&!H&&(i.stencilMask(_t),ee=_t)},setFunc:function(_t,wt,Tn){(re!==_t||fe!==wt||Le!==Tn)&&(i.stencilFunc(_t,wt,Tn),re=_t,fe=wt,Le=Tn)},setOp:function(_t,wt,Tn){(Ie!==_t||st!==wt||Mt!==Tn)&&(i.stencilOp(_t,wt,Tn),Ie=_t,st=wt,Mt=Tn)},setLocked:function(_t){H=_t},setClear:function(_t){Pt!==_t&&(i.clearStencil(_t),Pt=_t)},reset:function(){H=!1,ee=null,re=null,fe=null,Le=null,Ie=null,st=null,Mt=null,Pt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],v=null,g=!1,_=null,p=null,E=null,y=null,S=null,L=null,C=null,A=new Je(0,0,0),P=0,w=!1,M=null,U=null,z=null,O=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=q>=2);let ue=null,j={};const de=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),ze=new Dt().fromArray(de),J=new Dt().fromArray(we);function oe(H,ee,re,fe){const Le=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(H,Ie),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<re;st++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(ee+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Ie}const le={};le[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Zs),Ze(!1),Xe(_h),ne(i.CULL_FACE),F(xi);function ne(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function ve(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ne(H,ee){return f[H]!==ee?(i.bindFramebuffer(H,ee),f[H]=ee,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ee),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Re(H,ee){let re=m,fe=!1;if(H){re=d.get(ee),re===void 0&&(re=[],d.set(ee,re));const Le=H.textures;if(re.length!==Le.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,st=Le.length;Ie<st;Ie++)re[Ie]=i.COLOR_ATTACHMENT0+Ie;re.length=Le.length,fe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,fe=!0);fe&&i.drawBuffers(re)}function je(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const We={[bn]:i.FUNC_ADD,[l_]:i.FUNC_SUBTRACT,[c_]:i.FUNC_REVERSE_SUBTRACT};We[u_]=i.MIN,We[h_]=i.MAX;const nt={[Ia]:i.ZERO,[oi]:i.ONE,[f_]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[v_]:i.SRC_ALPHA_SATURATE,[__]:i.DST_COLOR,[p_]:i.DST_ALPHA,[d_]:i.ONE_MINUS_SRC_COLOR,[zs]:i.ONE_MINUS_SRC_ALPHA,[g_]:i.ONE_MINUS_DST_COLOR,[m_]:i.ONE_MINUS_DST_ALPHA,[x_]:i.CONSTANT_COLOR,[S_]:i.ONE_MINUS_CONSTANT_COLOR,[y_]:i.CONSTANT_ALPHA,[M_]:i.ONE_MINUS_CONSTANT_ALPHA};function F(H,ee,re,fe,Le,Ie,st,Mt,Pt,_t){if(H===xi){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),H!==Vo){if(H!==_||_t!==w){if((p!==bn||S!==bn)&&(i.blendEquation(i.FUNC_ADD),p=bn,S=bn),_t)switch(H){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,y=null,L=null,C=null,A.set(0,0,0),P=0,_=H,w=_t}return}Le=Le||ee,Ie=Ie||re,st=st||fe,(ee!==p||Le!==S)&&(i.blendEquationSeparate(We[ee],We[Le]),p=ee,S=Le),(re!==E||fe!==y||Ie!==L||st!==C)&&(i.blendFuncSeparate(nt[re],nt[fe],nt[Ie],nt[st]),E=re,y=fe,L=Ie,C=st),(Mt.equals(A)===!1||Pt!==P)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Pt),A.copy(Mt),P=Pt),_=H,w=!1}function Fe(H,ee){H.side===En?ve(i.CULL_FACE):ne(i.CULL_FACE);let re=H.side===On;ee&&(re=!re),Ze(re),H.blending===wr&&H.transparent===!1?F(xi):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const fe=H.stencilWrite;a.setTest(fe),fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){M!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),M=H)}function Xe(H){H!==s_?(ne(i.CULL_FACE),H!==U&&(H===_h?i.cullFace(i.BACK):H===o_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),U=H}function ke(H){H!==z&&(Y&&i.lineWidth(H),z=H)}function ye(H,ee,re){H?(ne(i.POLYGON_OFFSET_FILL),(O!==ee||k!==re)&&(i.polygonOffset(ee,re),O=ee,k=re)):ve(i.POLYGON_OFFSET_FILL)}function be(H){H?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function I(H){H===void 0&&(H=i.TEXTURE0+X-1),ue!==H&&(i.activeTexture(H),ue=H)}function T(H,ee,re){re===void 0&&(ue===null?re=i.TEXTURE0+X-1:re=ue);let fe=j[re];fe===void 0&&(fe={type:void 0,texture:void 0},j[re]=fe),(fe.type!==H||fe.texture!==ee)&&(ue!==re&&(i.activeTexture(re),ue=re),i.bindTexture(H,ee||le[H]),fe.type=H,fe.texture=ee)}function V(){const H=j[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(H){ze.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ze.copy(H))}function Ce(H){J.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function Qe(H,ee){let re=c.get(ee);re===void 0&&(re=new WeakMap,c.set(ee,re));let fe=re.get(H);fe===void 0&&(fe=i.getUniformBlockIndex(ee,H.name),re.set(H,fe))}function He(H,ee){const fe=c.get(ee).get(H);l.get(ee)!==fe&&(i.uniformBlockBinding(ee,fe,H.__bindingPointIndex),l.set(ee,fe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,j={},f={},d=new WeakMap,m=[],v=null,g=!1,_=null,p=null,E=null,y=null,S=null,L=null,C=null,A=new Je(0,0,0),P=0,w=!1,M=null,U=null,z=null,O=null,k=null,ze.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ve,bindFramebuffer:Ne,drawBuffers:Re,useProgram:je,setBlending:F,setMaterial:Fe,setFlipSided:Ze,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:ye,setScissorTest:be,activeTexture:I,bindTexture:T,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ae,texImage2D:De,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Be,viewport:Ce,reset:qe}}function _f(i,e,t,n){const r=u1(n);switch(t){case Hd:return i*e;case Gd:return i*e;case Wd:return i*e*2;case Ru:return i*e/r.components*r.byteLength;case Cu:return i*e/r.components*r.byteLength;case Xd:return i*e*2/r.components*r.byteLength;case Pu:return i*e*2/r.components*r.byteLength;case Vd:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case Lu:return i*e*4/r.components*r.byteLength;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Cc:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Ic:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case za:case Kc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qd:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(i){switch(i){case Ii:case zd:return{byteLength:1,components:1};case js:case Bd:case Ci:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case as:case bu:case $n:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function h1(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return m?new OffscreenCanvas(I,T):Wo("canvas")}function g(I,T,V){let Q=1;const ae=be(I);if((ae.width>V||ae.height>V)&&(Q=V/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ie=Math.floor(Q*ae.width),he=Math.floor(Q*ae.height);f===void 0&&(f=v(ie,he));const ce=T?v(ie,he):f;return ce.width=ie,ce.height=he,ce.getContext("2d").drawImage(I,0,0,ie,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+he+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,T,V,Q,ae=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ie=T;if(T===i.RED&&(V===i.FLOAT&&(ie=i.R32F),V===i.HALF_FLOAT&&(ie=i.R16F),V===i.UNSIGNED_BYTE&&(ie=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.R8UI),V===i.UNSIGNED_SHORT&&(ie=i.R16UI),V===i.UNSIGNED_INT&&(ie=i.R32UI),V===i.BYTE&&(ie=i.R8I),V===i.SHORT&&(ie=i.R16I),V===i.INT&&(ie=i.R32I)),T===i.RG&&(V===i.FLOAT&&(ie=i.RG32F),V===i.HALF_FLOAT&&(ie=i.RG16F),V===i.UNSIGNED_BYTE&&(ie=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RG8UI),V===i.UNSIGNED_SHORT&&(ie=i.RG16UI),V===i.UNSIGNED_INT&&(ie=i.RG32UI),V===i.BYTE&&(ie=i.RG8I),V===i.SHORT&&(ie=i.RG16I),V===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),V===i.UNSIGNED_INT&&(ie=i.RGB32UI),V===i.BYTE&&(ie=i.RGB8I),V===i.SHORT&&(ie=i.RGB16I),V===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),V===i.UNSIGNED_INT&&(ie=i.RGBA32UI),V===i.BYTE&&(ie=i.RGBA8I),V===i.SHORT&&(ie=i.RGBA16I),V===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),T===i.RGBA){const he=ae?il:St.getTransfer(Q);V===i.FLOAT&&(ie=i.RGBA32F),V===i.HALF_FLOAT&&(ie=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ie=he===bt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(I,T){let V;return I?T===null||T===as||T===Js?V=i.DEPTH24_STENCIL8:T===$n?V=i.DEPTH32F_STENCIL8:T===js&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===as||T===Js?V=i.DEPTH_COMPONENT24:T===$n?V=i.DEPTH_COMPONENT32F:T===js&&(V=i.DEPTH_COMPONENT16),V}function L(I,T){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==mt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function C(I){const T=I.target;T.removeEventListener("dispose",C),P(T),T.isVideoTexture&&u.delete(T)}function A(I){const T=I.target;T.removeEventListener("dispose",A),M(T)}function P(I){const T=n.get(I);if(T.__webglInit===void 0)return;const V=I.source,Q=d.get(V);if(Q){const ae=Q[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(I),Object.keys(Q).length===0&&d.delete(V)}n.remove(I)}function w(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const V=I.source,Q=d.get(V);delete Q[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ae=0;ae<T.__webglFramebuffer[Q].length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[Q][ae]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=I.textures;for(let Q=0,ae=V.length;Q<ae;Q++){const ie=n.get(V[Q]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(I)}let U=0;function z(){U=0}function O(){const I=U;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function k(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function X(I,T){const V=n.get(I);if(I.isVideoTexture&&ke(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){const Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,I,T);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function Y(I,T){const V=n.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function q(I,T){const V=n.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,T);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function B(I,T){const V=n.get(I);if(I.version>0&&V.__version!==I.version){oe(V,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const ue={[Bs]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},j={[an]:i.NEAREST,[D_]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[mt]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},de={[O_]:i.NEVER,[G_]:i.ALWAYS,[z_]:i.LESS,[Yd]:i.LEQUAL,[B_]:i.EQUAL,[V_]:i.GEQUAL,[k_]:i.GREATER,[H_]:i.NOTEQUAL};function we(I,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mt||T.magFilter===Sl||T.magFilter===ta||T.magFilter===Yi||T.minFilter===mt||T.minFilter===Sl||T.minFilter===ta||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ue[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ue[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ue[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,j[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==ta&&T.minFilter!==Yi||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ze(I,T){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",C));const Q=T.source;let ae=d.get(Q);ae===void 0&&(ae={},d.set(Q,ae));const ie=k(T);if(ie!==I.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[ie].usedTimes++;const he=ae[I.__cacheKey];he!==void 0&&(ae[I.__cacheKey].usedTimes--,he.usedTimes===0&&w(T)),I.__cacheKey=ie,I.__webglTexture=ae[ie].texture}return V}function J(I,T,V){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const ae=ze(I,T),ie=T.source;t.bindTexture(Q,I.__webglTexture,i.TEXTURE0+V);const he=n.get(ie);if(ie.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+V);const ce=St.getPrimaries(St.workingColorSpace),me=T.colorSpace===en?null:St.getPrimaries(T.colorSpace),$e=T.colorSpace===en||ce===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ge=g(T.image,!1,r.maxTextureSize);ge=ye(T,ge);const De=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let Be=y(T.internalFormat,De,Oe,T.colorSpace,T.isVideoTexture);we(Q,T);let Ce;const Qe=T.mipmaps,He=T.isVideoTexture!==!0,qe=he.__version===void 0||ae===!0,H=ie.dataReady,ee=L(T,ge);if(T.isDepthTexture)Be=S(T.format===Qs,T.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,Be,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,De,Oe,null));else if(T.isDataTexture)if(Qe.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,Qe[0].width,Qe[0].height);for(let re=0,fe=Qe.length;re<fe;re++)Ce=Qe[re],He?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,De,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,De,Oe,Ce.data);T.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,ge.width,ge.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,De,Oe,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,De,Oe,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Be,Qe[0].width,Qe[0].height,ge.depth);for(let re=0,fe=Qe.length;re<fe;re++)if(Ce=Qe[re],T.format!==xn)if(De!==null)if(He){if(H)if(T.layerUpdates.size>0){const Le=_f(Ce.width,Ce.height,T.format,T.type);for(const Ie of T.layerUpdates){const st=Ce.data.subarray(Ie*Le/Ce.data.BYTES_PER_ELEMENT,(Ie+1)*Le/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ie,Ce.width,Ce.height,1,De,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,ge.depth,De,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Be,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,ge.depth,De,Oe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Be,Ce.width,Ce.height,ge.depth,0,De,Oe,Ce.data)}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,ee,Be,Qe[0].width,Qe[0].height);for(let re=0,fe=Qe.length;re<fe;re++)Ce=Qe[re],T.format!==xn?De!==null?He?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,De,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,De,Oe,Ce.data)}else if(T.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Be,ge.width,ge.height,ge.depth),H)if(T.layerUpdates.size>0){const re=_f(ge.width,ge.height,T.format,T.type);for(const fe of T.layerUpdates){const Le=ge.data.subarray(fe*re/ge.data.BYTES_PER_ELEMENT,(fe+1)*re/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ge.width,ge.height,1,De,Oe,Le)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,Oe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,De,Oe,ge.data);else if(T.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,ee,Be,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,Oe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,De,Oe,ge.data);else if(T.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,ee,Be,ge.width,ge.height);else{let re=ge.width,fe=ge.height;for(let Le=0;Le<ee;Le++)t.texImage2D(i.TEXTURE_2D,Le,Be,re,fe,0,De,Oe,null),re>>=1,fe>>=1}}else if(Qe.length>0){if(He&&qe){const re=be(Qe[0]);t.texStorage2D(i.TEXTURE_2D,ee,Be,re.width,re.height)}for(let re=0,fe=Qe.length;re<fe;re++)Ce=Qe[re],He?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,De,Oe,Ce):t.texImage2D(i.TEXTURE_2D,re,Be,De,Oe,Ce);T.generateMipmaps=!1}else if(He){if(qe){const re=be(ge);t.texStorage2D(i.TEXTURE_2D,ee,Be,re.width,re.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Oe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Be,De,Oe,ge);_(T)&&p(Q),he.__version=ie.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function oe(I,T,V){if(T.image.length!==6)return;const Q=ze(I,T),ae=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);const ie=n.get(ae);if(ae.version!==ie.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const he=St.getPrimaries(St.workingColorSpace),ce=T.colorSpace===en?null:St.getPrimaries(T.colorSpace),me=T.colorSpace===en||he===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,De=[];for(let fe=0;fe<6;fe++)!$e&&!ge?De[fe]=g(T.image[fe],!0,r.maxCubemapSize):De[fe]=ge?T.image[fe].image:T.image[fe],De[fe]=ye(T,De[fe]);const Oe=De[0],Be=s.convert(T.format,T.colorSpace),Ce=s.convert(T.type),Qe=y(T.internalFormat,Be,Ce,T.colorSpace),He=T.isVideoTexture!==!0,qe=ie.__version===void 0||Q===!0,H=ae.dataReady;let ee=L(T,Oe);we(i.TEXTURE_CUBE_MAP,T);let re;if($e){He&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Qe,Oe.width,Oe.height);for(let fe=0;fe<6;fe++){re=De[fe].mipmaps;for(let Le=0;Le<re.length;Le++){const Ie=re[Le];T.format!==xn?Be!==null?He?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ie.width,Ie.height,Be,Ce,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Qe,Ie.width,Ie.height,0,Be,Ce,Ie.data)}}}else{if(re=T.mipmaps,He&&qe){re.length>0&&ee++;const fe=be(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ge){He?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De[fe].width,De[fe].height,Be,Ce,De[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,De[fe].width,De[fe].height,0,Be,Ce,De[fe].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[fe].image;He?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,st.width,st.height,Be,Ce,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Qe,st.width,st.height,0,Be,Ce,st.data)}}else{He?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Ce,De[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Be,Ce,De[fe]);for(let Le=0;Le<re.length;Le++){const Ie=re[Le];He?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Be,Ce,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Qe,Be,Ce,Ie.image[fe])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function le(I,T,V,Q,ae,ie){const he=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),me=y(V.internalFormat,he,ce,V.colorSpace),$e=n.get(T),ge=n.get(V);if(ge.__renderTarget=T,!$e.__hasExternalTextures){const De=Math.max(1,T.width>>ie),Oe=Math.max(1,T.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,me,De,Oe,T.depth,0,he,ce,null):t.texImage2D(ae,ie,me,De,Oe,0,he,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ae,ge.__webglTexture,0,Ze(T)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ae,ge.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(I,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const Q=T.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,ie=S(T.stencilBuffer,ae),he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Ze(T);Xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ie,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,I)}else{const Q=T.textures;for(let ae=0;ae<Q.length;ae++){const ie=Q[ae],he=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),me=y(ie.internalFormat,he,ce,ie.colorSpace),$e=Ze(T);V&&Xe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,me,T.width,T.height):Xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,me,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,me,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const ae=Q.__webglTexture,ie=Ze(T);if(T.depthTexture.format===ks)Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(T.depthTexture.format===Qs)Xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const T=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=Q}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ve(T.__webglFramebuffer,I)}else if(V){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),ne(T.__webglDepthbuffer[Q],I,!1);else{const ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ne(T.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(I,T,V){const Q=n.get(I);T!==void 0&&le(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ne(I)}function je(I){const T=I.texture,V=n.get(I),Q=n.get(T);I.addEventListener("dispose",A);const ae=I.textures,ie=I.isWebGLCubeRenderTarget===!0,he=ae.length>1;if(he||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,o.memory.textures++),ie){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let me=0;me<T.mipmaps.length;me++)V.__webglFramebuffer[ce][me]=i.createFramebuffer()}else V.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)V.__webglFramebuffer[ce]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(he)for(let ce=0,me=ae.length;ce<me;ce++){const $e=n.get(ae[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Xe(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const me=ae[ce];V.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ce]);const $e=s.convert(me.format,me.colorSpace),ge=s.convert(me.type),De=y(me.internalFormat,$e,ge,me.colorSpace,I.isXRRenderTarget===!0),Oe=Ze(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,De,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,V.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),we(i.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)le(V.__webglFramebuffer[ce][me],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else le(V.__webglFramebuffer[ce],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,me=ae.length;ce<me;ce++){const $e=ae[ce],ge=n.get($e);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),we(i.TEXTURE_2D,$e),le(V.__webglFramebuffer,I,$e,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),_($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),we(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)le(V.__webglFramebuffer[me],I,T,i.COLOR_ATTACHMENT0,ce,me);else le(V.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ce,0);_(T)&&p(ce),t.unbindTexture()}I.depthBuffer&&Ne(I)}function We(I){const T=I.textures;for(let V=0,Q=T.length;V<Q;V++){const ae=T[V];if(_(ae)){const ie=E(I),he=n.get(ae).__webglTexture;t.bindTexture(ie,he),p(ie),t.unbindTexture()}}}const nt=[],F=[];function Fe(I){if(I.samples>0){if(Xe(I)===!1){const T=I.textures,V=I.width,Q=I.height;let ae=i.COLOR_BUFFER_BIT;const ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(I),ce=T.length>1;if(ce)for(let me=0;me<T.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<T.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const $e=n.get(T[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,ae,i.NEAREST),l===!0&&(nt.length=0,F.length=0,nt.push(i.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(nt.push(ie),F.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<T.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const $e=n.get(T[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ze(I){return Math.min(r.maxSamples,I.samples)}function Xe(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function ye(I,T){const V=I.colorSpace,Q=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Ui&&V!==en&&(St.getTransfer(V)===bt?(Q!==xn||ae!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function be(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=je,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Xe}function f1(i,e){function t(n,r=en){let s;const o=St.getTransfer(r);if(n===Ii)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return i.BYTE;if(n===Bd)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===bu)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Hd)return i.ALPHA;if(n===Vd)return i.RGB;if(n===xn)return i.RGBA;if(n===Gd)return i.LUMINANCE;if(n===Wd)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===Ru)return i.RED;if(n===Cu)return i.RED_INTEGER;if(n===Xd)return i.RG;if(n===Pu)return i.RG_INTEGER;if(n===Lu)return i.RGBA_INTEGER;if(n===Ua||n===Na||n===Fa||n===Oa)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Pc||n===Lc||n===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Uc||n===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ic||n===Uc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===Oc||n===zc||n===Bc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Kc||n===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qd||n===Jc||n===Qc||n===eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class d1 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p1={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class g1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:m1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v1 extends to{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const g=new g1,_=t.getContextAttributes();let p=null,E=null;const y=[],S=[],L=new rt;let C=null;const A=new Pn;A.viewport=new Dt;const P=new Pn;P.viewport=new Dt;const w=[A,P],M=new d1;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=y[J];return oe===void 0&&(oe=new Yl,y[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=y[J];return oe===void 0&&(oe=new Yl,y[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=y[J];return oe===void 0&&(oe=new Yl,y[J]=oe),oe.getHandSpace()};function O(J){const oe=S.indexOf(J.inputSource);if(oe===-1)return;const le=y[oe];le!==void 0&&(le.update(J.inputSource,J.frame,c||o),le.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let J=0;J<y.length;J++){const oe=S[J];oe!==null&&(S[J]=null,y[J].disconnect(oe))}U=null,z=null,g.reset(),e.setRenderTarget(p),m=null,d=null,f=null,r=null,E=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Qi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,le=null,ne=null;_.depth&&(ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?Qs:ks,le=_.stencil?Js:as);const ve={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Qi(d.textureWidth,d.textureHeight,{format:xn,type:Ii,depthTexture:new Ou(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(J){for(let oe=0;oe<J.removed.length;oe++){const le=J.removed[oe],ne=S.indexOf(le);ne>=0&&(S[ne]=null,y[ne].disconnect(le))}for(let oe=0;oe<J.added.length;oe++){const le=J.added[oe];let ne=S.indexOf(le);if(ne===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=S.length){S.push(le),ne=Ne;break}else if(S[Ne]===null){S[Ne]=le,ne=Ne;break}if(ne===-1)break}const ve=y[ne];ve&&ve.connect(le)}}const Y=new W,q=new W;function B(J,oe,le){Y.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const ne=Y.distanceTo(q),ve=oe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Re=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],F=(ve[8]-1)/ve[0],Fe=(Ne[8]+1)/Ne[0],Ze=Re*F,Xe=Re*Fe,ke=ne/(-F+Fe),ye=ke*-F;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const be=Re+ke,I=je+ke,T=Ze-ye,V=Xe+(ne-ye),Q=We*je/I*be,ae=nt*je/I*be;J.projectionMatrix.makePerspective(T,V,Q,ae,be,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let oe=J.near,le=J.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),M.near=P.near=A.near=oe,M.far=P.far=A.far=le,(U!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,z=M.far),A.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ne=J.parent,ve=M.cameras;ue(M,ne);for(let Ne=0;Ne<ve.length;Ne++)ue(ve[Ne],ne);ve.length===2?B(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),j(J,M,ne)};function j(J,oe,le){le===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Go*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let de=null;function we(J,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ne=!1;le.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let Ne=0;Ne<le.length;Ne++){const Re=le[Ne];let je=null;if(m!==null)je=m.getViewport(Re);else{const nt=f.getViewSubImage(d,Re);je=nt.viewport,Ne===0&&(e.setRenderTargetTextures(E,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(E))}let We=w[Ne];We===void 0&&(We=new Pn,We.layers.enable(Ne),We.viewport=new Dt,w[Ne]=We),We.matrix.fromArray(Re.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Re.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Ne===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(We)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Ne=f.getDepthInformation(le[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,r.renderState)}}for(let le=0;le<y.length;le++){const ne=S[le],ve=y[le];ne!==null&&ve!==void 0&&ve.update(ne,oe,c||o)}de&&de(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const ze=new sp;ze.setAnimationLoop(we),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}const Wr=new ei,x1=new xt;function S1(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,tp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,E,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&m(_,p,S)):p.isMeshMatcapMaterial?(s(_,p),v(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,E,y):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===On&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===On&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,S=E.envMapRotation;y&&(_.envMap.value=y,Wr.copy(S),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),_.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(Wr)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,E,y){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*E,_.scale.value=y*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,E){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const E=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function y1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function c(E,y){let S=r[E.id];S===void 0&&(v(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",_));const L=y.program;n.updateUBOMapping(E,L);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function u(E){const y=f();E.__bindingPointIndex=y;const S=i.createBuffer(),L=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],S=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=S.length;C<A;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,M=P.length;w<M;w++){const U=P[w];if(m(U,C,w,L)===!0){const z=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let X=0;X<O.length;X++){const Y=O[X],q=g(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,z+k,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,S,L){const C=E.value,A=y+"_"+S;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const P=L[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(E){const y=E.uniforms;let S=0;const L=16;for(let A=0,P=y.length;A<P;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,U=w.length;M<U;M++){const z=w[M],O=Array.isArray(z.value)?z.value:[z.value];for(let k=0,X=O.length;k<X;k++){const Y=O[k],q=g(Y),B=S%L,ue=B%q.boundary,j=B+ue;S+=ue,j!==0&&L-j<q.storage&&(S+=L-j),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=q.storage}}}const C=S%L;return C>0&&(S+=L-C),E.__size=S,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function _(E){const y=E.target;y.removeEventListener("dispose",_);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ol{constructor(e={}){const{canvas:t=o0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=Li,this.toneMappingExposure=1;const S=this;let L=!1,C=0,A=0,P=null,w=-1,M=null;const U=new Dt,z=new Dt;let O=null;const k=new Je(0);let X=0,Y=t.width,q=t.height,B=1,ue=null,j=null;const de=new Dt(0,0,Y,q),we=new Dt(0,0,Y,q);let ze=!1;const J=new rp;let oe=!1,le=!1;const ne=new xt,ve=new xt,Ne=new W,Re=new Dt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function nt(){return P===null?B:1}let F=n;function Fe(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),F===null){const x="webgl2";if(F=Fe(x,h),F===null)throw Fe(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Ze,Xe,ke,ye,be,I,T,V,Q,ae,ie,he,ce,me,$e,ge,De,Oe,Be,Ce,Qe,He,qe,H;function ee(){Ze=new Ax(F),Ze.init(),He=new f1(F,Ze),Xe=new yx(F,Ze,e,He),ke=new c1(F,Ze),Xe.reverseDepthBuffer&&d&&ke.buffers.depth.setReversed(!0),ye=new Px(F),be=new ZS,I=new h1(F,Ze,ke,be,Xe,He,ye),T=new wx(S),V=new Tx(S),Q=new O0(F),qe=new xx(F,Q),ae=new Rx(F,Q,ye,qe),ie=new Dx(F,ae,Q,ye),Be=new Lx(F,Xe,I),ge=new Mx(be),he=new YS(S,T,V,Ze,Xe,qe,ge),ce=new S1(S,be),me=new KS,$e=new n1(Ze),Oe=new vx(S,T,V,ke,ie,m,l),De=new a1(S,ie,Xe),H=new y1(F,ye,Xe,ke),Ce=new Sx(F,Ze,ye),Qe=new Cx(F,Ze,ye),ye.programs=he.programs,S.capabilities=Xe,S.extensions=Ze,S.properties=be,S.renderLists=me,S.shadowMap=De,S.state=ke,S.info=ye}ee();const re=new v1(S,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=Ze.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Ze.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(Y,q,!1))},this.getSize=function(h){return h.set(Y,q)},this.setSize=function(h,x,b=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=h,q=x,t.width=Math.floor(h*B),t.height=Math.floor(x*B),b===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(Y*B,q*B).floor()},this.setDrawingBufferSize=function(h,x,b){Y=h,q=x,B=b,t.width=Math.floor(h*b),t.height=Math.floor(x*b),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(U)},this.getViewport=function(h){return h.copy(de)},this.setViewport=function(h,x,b,R){h.isVector4?de.set(h.x,h.y,h.z,h.w):de.set(h,x,b,R),ke.viewport(U.copy(de).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(we)},this.setScissor=function(h,x,b,R){h.isVector4?we.set(h.x,h.y,h.z,h.w):we.set(h,x,b,R),ke.scissor(z.copy(we).multiplyScalar(B).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(h){ke.setScissorTest(ze=h)},this.setOpaqueSort=function(h){ue=h},this.setTransparentSort=function(h){j=h},this.getClearColor=function(h){return h.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(h=!0,x=!0,b=!0){let R=0;if(h){let D=!1;if(P!==null){const N=P.texture.format;D=N===Lu||N===Pu||N===Cu}if(D){const N=P.texture.type,G=N===Ii||N===as||N===js||N===Js||N===Tu||N===Au,te=Oe.getClearColor(),Z=Oe.getClearAlpha(),$=te.r,K=te.g,se=te.b;G?(v[0]=$,v[1]=K,v[2]=se,v[3]=Z,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=$,g[1]=K,g[2]=se,g[3]=Z,F.clearBufferiv(F.COLOR,0,g))}else R|=F.COLOR_BUFFER_BIT}x&&(R|=F.DEPTH_BUFFER_BIT),b&&(R|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),me.dispose(),$e.dispose(),be.dispose(),T.dispose(),V.dispose(),ie.dispose(),qe.dispose(),H.dispose(),he.dispose(),re.dispose(),re.removeEventListener("sessionstart",Cr),re.removeEventListener("sessionend",Pr),cn.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const h=ye.autoReset,x=De.enabled,b=De.autoUpdate,R=De.needsUpdate,D=De.type;ee(),ye.autoReset=h,De.enabled=x,De.autoUpdate=b,De.needsUpdate=R,De.type=D}function Ie(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function st(h){const x=h.target;x.removeEventListener("dispose",st),Mt(x)}function Mt(h){Pt(h),be.remove(h)}function Pt(h){const x=be.get(h).programs;x!==void 0&&(x.forEach(function(b){he.releaseProgram(b)}),h.isShaderMaterial&&he.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,b,R,D,N){x===null&&(x=je);const G=D.isMesh&&D.matrixWorld.determinant()<0,te=cs(h,x,b,R,D);ke.setMaterial(R,G);let Z=b.index,$=1;if(R.wireframe===!0){if(Z=ae.getWireframeAttribute(b),Z===void 0)return;$=2}const K=b.drawRange,se=b.attributes.position;let _e=K.start*$,Se=(K.start+K.count)*$;N!==null&&(_e=Math.max(_e,N.start*$),Se=Math.min(Se,(N.start+N.count)*$)),Z!==null?(_e=Math.max(_e,0),Se=Math.min(Se,Z.count)):se!=null&&(_e=Math.max(_e,0),Se=Math.min(Se,se.count));const Ae=Se-_e;if(Ae<0||Ae===1/0)return;qe.setup(D,R,te,b,Z);let Te,Me=Ce;if(Z!==null&&(Te=Q.get(Z),Me=Qe,Me.setIndex(Te)),D.isMesh)R.wireframe===!0?(ke.setLineWidth(R.wireframeLinewidth*nt()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(D.isLine){let pe=R.linewidth;pe===void 0&&(pe=1),ke.setLineWidth(pe*nt()),D.isLineSegments?Me.setMode(F.LINES):D.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else D.isPoints?Me.setMode(F.POINTS):D.isSprite&&Me.setMode(F.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Me.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Me.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const pe=D._multiDrawStarts,lt=D._multiDrawCounts,Ye=D._multiDrawCount,yt=Z?Q.get(Z).bytesPerElement:1,pt=be.get(R).currentProgram.getUniforms();for(let tt=0;tt<Ye;tt++)pt.setValue(F,"_gl_DrawID",tt),Me.render(pe[tt]/yt,lt[tt])}else if(D.isInstancedMesh)Me.renderInstances(_e,Ae,D.count);else if(b.isInstancedBufferGeometry){const pe=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,lt=Math.min(b.instanceCount,pe);Me.renderInstances(_e,Ae,lt)}else Me.render(_e,Ae)};function _t(h,x,b){h.transparent===!0&&h.side===En&&h.forceSinglePass===!1?(h.side=On,h.needsUpdate=!0,Mi(h,x,b),h.side=Ar,h.needsUpdate=!0,Mi(h,x,b),h.side=En):Mi(h,x,b)}this.compile=function(h,x,b=null){b===null&&(b=h),p=$e.get(b),p.init(x),y.push(p),b.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),h!==b&&h.traverseVisible(function(D){D.isLight&&D.layers.test(x.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const R=new Set;return h.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const N=D.material;if(N)if(Array.isArray(N))for(let G=0;G<N.length;G++){const te=N[G];_t(te,b,D),R.add(te)}else _t(N,b,D),R.add(N)}),y.pop(),p=null,R},this.compileAsync=function(h,x,b=null){const R=this.compile(h,x,b);return new Promise(D=>{function N(){if(R.forEach(function(G){be.get(G).currentProgram.isReady()&&R.delete(G)}),R.size===0){D(h);return}setTimeout(N,10)}Ze.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let wt=null;function Tn(h){wt&&wt(h)}function Cr(){cn.stop()}function Pr(){cn.start()}const cn=new sp;cn.setAnimationLoop(Tn),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(h){wt=h,re.setAnimationLoop(h),h===null?cn.stop():cn.start()},re.addEventListener("sessionstart",Cr),re.addEventListener("sessionend",Pr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,P),p=$e.get(h,y.length),p.init(x),y.push(p),ve.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),J.setFromProjectionMatrix(ve),le=this.localClippingEnabled,oe=ge.init(this.clippingPlanes,le),_=me.get(h,E.length),_.init(),E.push(_),re.enabled===!0&&re.isPresenting===!0){const N=S.xr.getDepthSensingMesh();N!==null&&tr(N,x,-1/0,S.sortObjects)}tr(h,x,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ue,j),We=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,We&&Oe.addToRenderList(_,h),this.info.render.frame++,oe===!0&&ge.beginShadows();const b=p.state.shadowsArray;De.render(b,h,x),oe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=_.opaque,D=_.transmissive;if(p.setupLights(),x.isArrayCamera){const N=x.cameras;if(D.length>0)for(let G=0,te=N.length;G<te;G++){const Z=N[G];Lr(R,D,h,Z)}We&&Oe.render(h);for(let G=0,te=N.length;G<te;G++){const Z=N[G];nr(_,h,Z,Z.viewport)}}else D.length>0&&Lr(R,D,h,x),We&&Oe.render(h),nr(_,h,x);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(S,h,x),qe.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&ge.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function tr(h,x,b,R){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)b=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||J.intersectsSprite(h)){R&&Re.setFromMatrixPosition(h.matrixWorld).applyMatrix4(ve);const G=ie.update(h),te=h.material;te.visible&&_.push(h,G,te,b,Re.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||J.intersectsObject(h))){const G=ie.update(h),te=h.material;if(R&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Re.copy(h.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),Re.copy(G.boundingSphere.center)),Re.applyMatrix4(h.matrixWorld).applyMatrix4(ve)),Array.isArray(te)){const Z=G.groups;for(let $=0,K=Z.length;$<K;$++){const se=Z[$],_e=te[se.materialIndex];_e&&_e.visible&&_.push(h,G,_e,b,Re.z,se)}}else te.visible&&_.push(h,G,te,b,Re.z,null)}}const N=h.children;for(let G=0,te=N.length;G<te;G++)tr(N[G],x,b,R)}function nr(h,x,b,R){const D=h.opaque,N=h.transmissive,G=h.transparent;p.setupLightsView(b),oe===!0&&ge.setGlobalState(S.clippingPlanes,b),R&&ke.viewport(U.copy(R)),D.length>0&&yi(D,x,b),N.length>0&&yi(N,x,b),G.length>0&&yi(G,x,b),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Lr(h,x,b,R){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[R.id]===void 0&&(p.state.transmissionRenderTarget[R.id]=new Qi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Ci:Ii,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const N=p.state.transmissionRenderTarget[R.id],G=R.viewport||U;N.setSize(G.z,G.w);const te=S.getRenderTarget();S.setRenderTarget(N),S.getClearColor(k),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),We&&Oe.render(b);const Z=S.toneMapping;S.toneMapping=Li;const $=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),p.setupLightsView(R),oe===!0&&ge.setGlobalState(S.clippingPlanes,R),yi(h,b,R),I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let se=0,_e=x.length;se<_e;se++){const Se=x[se],Ae=Se.object,Te=Se.geometry,Me=Se.material,pe=Se.group;if(Me.side===En&&Ae.layers.test(R.layers)){const lt=Me.side;Me.side=On,Me.needsUpdate=!0,Ut(Ae,b,R,Te,Me,pe),Me.side=lt,Me.needsUpdate=!0,K=!0}}K===!0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N))}S.setRenderTarget(te),S.setClearColor(k,X),$!==void 0&&(R.viewport=$),S.toneMapping=Z}function yi(h,x,b){const R=x.isScene===!0?x.overrideMaterial:null;for(let D=0,N=h.length;D<N;D++){const G=h[D],te=G.object,Z=G.geometry,$=R===null?G.material:R,K=G.group;te.layers.test(b.layers)&&Ut(te,x,b,Z,$,K)}}function Ut(h,x,b,R,D,N){h.onBeforeRender(S,x,b,R,D,N),h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),D.onBeforeRender(S,x,b,R,h,N),D.transparent===!0&&D.side===En&&D.forceSinglePass===!1?(D.side=On,D.needsUpdate=!0,S.renderBufferDirect(b,x,R,D,h,N),D.side=Ar,D.needsUpdate=!0,S.renderBufferDirect(b,x,R,D,h,N),D.side=En):S.renderBufferDirect(b,x,R,D,h,N),h.onAfterRender(S,x,b,R,D,N)}function Mi(h,x,b){x.isScene!==!0&&(x=je);const R=be.get(h),D=p.state.lights,N=p.state.shadowsArray,G=D.state.version,te=he.getParameters(h,D.state,N,x,b),Z=he.getProgramCacheKey(te);let $=R.programs;R.environment=h.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(h.isMeshStandardMaterial?V:T).get(h.envMap||R.environment),R.envMapRotation=R.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,$===void 0&&(h.addEventListener("dispose",st),$=new Map,R.programs=$);let K=$.get(Z);if(K!==void 0){if(R.currentProgram===K&&R.lightsStateVersion===G)return Dr(h,te),K}else te.uniforms=he.getUniforms(h),h.onBeforeCompile(te,S),K=he.acquireProgram(te,Z),$.set(Z,K),R.uniforms=te.uniforms;const se=R.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(se.clippingPlanes=ge.uniform),Dr(h,te),R.needsLights=hi(h),R.lightsStateVersion=G,R.needsLights&&(se.ambientLightColor.value=D.state.ambient,se.lightProbe.value=D.state.probe,se.directionalLights.value=D.state.directional,se.directionalLightShadows.value=D.state.directionalShadow,se.spotLights.value=D.state.spot,se.spotLightShadows.value=D.state.spotShadow,se.rectAreaLights.value=D.state.rectArea,se.ltc_1.value=D.state.rectAreaLTC1,se.ltc_2.value=D.state.rectAreaLTC2,se.pointLights.value=D.state.point,se.pointLightShadows.value=D.state.pointShadow,se.hemisphereLights.value=D.state.hemi,se.directionalShadowMap.value=D.state.directionalShadowMap,se.directionalShadowMatrix.value=D.state.directionalShadowMatrix,se.spotShadowMap.value=D.state.spotShadowMap,se.spotLightMatrix.value=D.state.spotLightMatrix,se.spotLightMap.value=D.state.spotLightMap,se.pointShadowMap.value=D.state.pointShadowMap,se.pointShadowMatrix.value=D.state.pointShadowMatrix),R.currentProgram=K,R.uniformsList=null,K}function ui(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Ba.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Dr(h,x){const b=be.get(h);b.outputColorSpace=x.outputColorSpace,b.batching=x.batching,b.batchingColor=x.batchingColor,b.instancing=x.instancing,b.instancingColor=x.instancingColor,b.instancingMorph=x.instancingMorph,b.skinning=x.skinning,b.morphTargets=x.morphTargets,b.morphNormals=x.morphNormals,b.morphColors=x.morphColors,b.morphTargetsCount=x.morphTargetsCount,b.numClippingPlanes=x.numClippingPlanes,b.numIntersection=x.numClipIntersection,b.vertexAlphas=x.vertexAlphas,b.vertexTangents=x.vertexTangents,b.toneMapping=x.toneMapping}function cs(h,x,b,R,D){x.isScene!==!0&&(x=je),I.resetTextureUnits();const N=x.fog,G=R.isMeshStandardMaterial?x.environment:null,te=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,Z=(R.isMeshStandardMaterial?V:T).get(R.envMap||G),$=R.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,K=!!b.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),se=!!b.morphAttributes.position,_e=!!b.morphAttributes.normal,Se=!!b.morphAttributes.color;let Ae=Li;R.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=S.toneMapping);const Te=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Me=Te!==void 0?Te.length:0,pe=be.get(R),lt=p.state.lights;if(oe===!0&&(le===!0||h!==M)){const Ke=h===M&&R.id===w;ge.setState(R,h,Ke)}let Ye=!1;R.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==lt.state.version||pe.outputColorSpace!==te||D.isBatchedMesh&&pe.batching===!1||!D.isBatchedMesh&&pe.batching===!0||D.isBatchedMesh&&pe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&pe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&pe.instancing===!1||!D.isInstancedMesh&&pe.instancing===!0||D.isSkinnedMesh&&pe.skinning===!1||!D.isSkinnedMesh&&pe.skinning===!0||D.isInstancedMesh&&pe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&pe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&pe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&pe.instancingMorph===!1&&D.morphTexture!==null||pe.envMap!==Z||R.fog===!0&&pe.fog!==N||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==ge.numPlanes||pe.numIntersection!==ge.numIntersection)||pe.vertexAlphas!==$||pe.vertexTangents!==K||pe.morphTargets!==se||pe.morphNormals!==_e||pe.morphColors!==Se||pe.toneMapping!==Ae||pe.morphTargetsCount!==Me)&&(Ye=!0):(Ye=!0,pe.__version=R.version);let yt=pe.currentProgram;Ye===!0&&(yt=Mi(R,x,D));let pt=!1,tt=!1,Et=!1;const ut=yt.getUniforms(),ot=pe.uniforms;if(ke.useProgram(yt.program)&&(pt=!0,tt=!0,Et=!0),R.id!==w&&(w=R.id,tt=!0),pt||M!==h){ke.buffers.depth.getReversed()?(ne.copy(h.projectionMatrix),l0(ne),c0(ne),ut.setValue(F,"projectionMatrix",ne)):ut.setValue(F,"projectionMatrix",h.projectionMatrix),ut.setValue(F,"viewMatrix",h.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,Ne.setFromMatrixPosition(h.matrixWorld)),Xe.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ut.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,tt=!0,Et=!0)}if(D.isSkinnedMesh){ut.setOptional(F,D,"bindMatrix"),ut.setOptional(F,D,"bindMatrixInverse");const Ke=D.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ut.setValue(F,"boneTexture",Ke.boneTexture,I))}D.isBatchedMesh&&(ut.setOptional(F,D,"batchingTexture"),ut.setValue(F,"batchingTexture",D._matricesTexture,I),ut.setOptional(F,D,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",D._indirectTexture,I),ut.setOptional(F,D,"batchingColorTexture"),D._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",D._colorsTexture,I));const it=b.morphAttributes;if((it.position!==void 0||it.normal!==void 0||it.color!==void 0)&&Be.update(D,b,yt),(tt||pe.receiveShadow!==D.receiveShadow)&&(pe.receiveShadow=D.receiveShadow,ut.setValue(F,"receiveShadow",D.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(ot.envMap.value=Z,ot.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(ot.envMapIntensity.value=x.environmentIntensity),tt&&(ut.setValue(F,"toneMappingExposure",S.toneMappingExposure),pe.needsLights&&ti(ot,Et),N&&R.fog===!0&&ce.refreshFogUniforms(ot,N),ce.refreshMaterialUniforms(ot,R,B,q,p.state.transmissionRenderTarget[h.id]),Ba.upload(F,ui(pe),ot,I)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ba.upload(F,ui(pe),ot,I),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ut.setValue(F,"center",D.center),ut.setValue(F,"modelViewMatrix",D.modelViewMatrix),ut.setValue(F,"normalMatrix",D.normalMatrix),ut.setValue(F,"modelMatrix",D.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Ke=R.uniformsGroups;for(let Nt=0,Ot=Ke.length;Nt<Ot;Nt++){const at=Ke[Nt];H.update(at,yt),H.bind(at,yt)}}return yt}function ti(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function hi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,x,b){be.get(h.texture).__webglTexture=x,be.get(h.depthTexture).__webglTexture=b;const R=be.get(h);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=b===void 0,R.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const b=be.get(h);b.__webglFramebuffer=x,b.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,b=0){P=h,C=x,A=b;let R=!0,D=null,N=!1,G=!1;if(h){const Z=be.get(h);if(Z.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(F.FRAMEBUFFER,null),R=!1;else if(Z.__webglFramebuffer===void 0)I.setupRenderTarget(h);else if(Z.__hasExternalTextures)I.rebindTextures(h,be.get(h.texture).__webglTexture,be.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const se=h.depthTexture;if(Z.__boundDepthTexture!==se){if(se!==null&&be.has(se)&&(h.width!==se.image.width||h.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(h)}}const $=h.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(G=!0);const K=be.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[x])?D=K[x][b]:D=K[x],N=!0):h.samples>0&&I.useMultisampledRTT(h)===!1?D=be.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?D=K[b]:D=K,U.copy(h.viewport),z.copy(h.scissor),O=h.scissorTest}else U.copy(de).multiplyScalar(B).floor(),z.copy(we).multiplyScalar(B).floor(),O=ze;if(ke.bindFramebuffer(F.FRAMEBUFFER,D)&&R&&ke.drawBuffers(h,D),ke.viewport(U),ke.scissor(z),ke.setScissorTest(O),N){const Z=be.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,Z.__webglTexture,b)}else if(G){const Z=be.get(h.texture),$=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.__webglTexture,b||0,$)}w=-1},this.readRenderTargetPixels=function(h,x,b,R,D,N,G){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=be.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te){ke.bindFramebuffer(F.FRAMEBUFFER,te);try{const Z=h.texture,$=Z.format,K=Z.type;if(!Xe.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-R&&b>=0&&b<=h.height-D&&F.readPixels(x,b,R,D,He.convert($),He.convert(K),N)}finally{const Z=P!==null?be.get(P).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,x,b,R,D,N,G){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=be.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te){const Z=h.texture,$=Z.format,K=Z.type;if(!Xe.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-R&&b>=0&&b<=h.height-D){ke.bindFramebuffer(F.FRAMEBUFFER,te);const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,N.byteLength,F.STREAM_READ),F.readPixels(x,b,R,D,He.convert($),He.convert(K),0);const _e=P!==null?be.get(P).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,_e);const Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await a0(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,N),F.deleteBuffer(se),F.deleteSync(Se),N}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,b=0){h.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const R=Math.pow(2,-b),D=Math.floor(h.image.width*R),N=Math.floor(h.image.height*R),G=x!==null?x.x:0,te=x!==null?x.y:0;I.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,b,0,0,G,te,D,N),ke.unbindTexture()},this.copyTextureToTexture=function(h,x,b=null,R=null,D=0){h.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,h=arguments[1],x=arguments[2],D=arguments[3]||0,b=null);let N,G,te,Z,$,K,se,_e,Se;const Ae=h.isCompressedTexture?h.mipmaps[D]:h.image;b!==null?(N=b.max.x-b.min.x,G=b.max.y-b.min.y,te=b.isBox3?b.max.z-b.min.z:1,Z=b.min.x,$=b.min.y,K=b.isBox3?b.min.z:0):(N=Ae.width,G=Ae.height,te=Ae.depth||1,Z=0,$=0,K=0),R!==null?(se=R.x,_e=R.y,Se=R.z):(se=0,_e=0,Se=0);const Te=He.convert(x.format),Me=He.convert(x.type);let pe;x.isData3DTexture?(I.setTexture3D(x,0),pe=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(I.setTexture2DArray(x,0),pe=F.TEXTURE_2D_ARRAY):(I.setTexture2D(x,0),pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const lt=F.getParameter(F.UNPACK_ROW_LENGTH),Ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yt=F.getParameter(F.UNPACK_SKIP_PIXELS),pt=F.getParameter(F.UNPACK_SKIP_ROWS),tt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Z),F.pixelStorei(F.UNPACK_SKIP_ROWS,$),F.pixelStorei(F.UNPACK_SKIP_IMAGES,K);const Et=h.isDataArrayTexture||h.isData3DTexture,ut=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const ot=be.get(h),it=be.get(x),Ke=be.get(ot.__renderTarget),Nt=be.get(it.__renderTarget);ke.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<te;Ot++)Et&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(h).__webglTexture,D,K+Ot),h.isDepthTexture?(ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(x).__webglTexture,D,Se+Ot),F.blitFramebuffer(Z,$,N,G,se,_e,N,G,F.DEPTH_BUFFER_BIT,F.NEAREST)):ut?F.copyTexSubImage3D(pe,D,se,_e,Se+Ot,Z,$,N,G):F.copyTexSubImage2D(pe,D,se,_e,Se+Ot,Z,$,N,G);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(pe,D,se,_e,Se,N,G,te,Te,Me,Ae.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(pe,D,se,_e,Se,N,G,te,Te,Ae.data):F.texSubImage3D(pe,D,se,_e,Se,N,G,te,Te,Me,Ae):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,se,_e,N,G,Te,Me,Ae.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,se,_e,Ae.width,Ae.height,Te,Ae.data):F.texSubImage2D(F.TEXTURE_2D,D,se,_e,N,G,Te,Me,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tt),D===0&&x.generateMipmaps&&F.generateMipmap(pe),ke.unbindTexture()},this.copyTextureToTexture3D=function(h,x,b=null,R=null,D=0){return h.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,R=arguments[1]||null,h=arguments[2],x=arguments[3],D=arguments[4]||0),Mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,b,R,D)},this.initRenderTarget=function(h){be.get(h).__webglFramebuffer===void 0&&I.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?I.setTextureCube(h,0):h.isData3DTexture?I.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?I.setTexture2DArray(h,0):I.setTexture2D(h,0),ke.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,ke.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Yo extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zu extends ln{constructor(e=null,t=1,n=1,r,s,o,a,l,c=an,u=an,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class M1 extends ln{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class w1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const E1=new w1;class Zo{constructor(e){this.manager=e!==void 0?e:E1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class b1 extends Error{constructor(e,t){super(e),this.response=t}}class T1 extends Zo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ka.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){E();function E(){f.read().then(({done:y,value:S})=>{if(y)p.close();else{g+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,A=u.length;C<A;C++){const P=u[C];P.onProgress&&P.onProgress(L)}p.enqueue(S),E()}},y=>{p.error(y)})}}});return new Response(_)}else throw new b1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Ka.add(e,c);const u=Hi[e];delete Hi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class A1 extends Zo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ka.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Wo("img");function l(){u(),Ka.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class R1 extends Zo{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new zu,a=new T1(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Zn,o.wrapT=c.wrapT!==void 0?c.wrapT:Zn,o.magFilter=c.magFilter!==void 0?c.magFilter:mt,o.minFilter=c.minFilter!==void 0?c.minFilter:mt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yi),c.mipmapCount===1&&(o.minFilter=mt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class pr extends Zo{constructor(e){super(e)}load(e,t,n,r){const s=new ln,o=new A1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Jr extends er{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ai=Uint8Array,Is=Uint16Array,C1=Int32Array,up=new ai([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hp=new ai([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),P1=new ai([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fp=function(i,e){for(var t=new Is(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new C1(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},dp=fp(up,2),pp=dp.b,L1=dp.r;pp[28]=258,L1[258]=28;var D1=fp(hp,0),I1=D1.b,nu=new Is(32768);for(var It=0;It<32768;++It){var fr=(It&43690)>>1|(It&21845)<<1;fr=(fr&52428)>>2|(fr&13107)<<2,fr=(fr&61680)>>4|(fr&3855)<<4,nu[It]=((fr&65280)>>8|(fr&255)<<8)>>1}var Po=(function(i,e,t){for(var n=i.length,r=0,s=new Is(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Is(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Is(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[nu[f]>>l]=c}else for(a=new Is(n),r=0;r<n;++r)i[r]&&(a[r]=nu[o[i[r]-1]++]>>15-i[r]);return a}),$o=new ai(288);for(var It=0;It<144;++It)$o[It]=8;for(var It=144;It<256;++It)$o[It]=9;for(var It=256;It<280;++It)$o[It]=7;for(var It=280;It<288;++It)$o[It]=8;var mp=new ai(32);for(var It=0;It<32;++It)mp[It]=5;var U1=Po($o,9,1),N1=Po(mp,5,1),Zl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},mi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},$l=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},F1=function(i){return(i+7)/8|0},O1=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new ai(i.subarray(e,t))},z1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],gi=function(i,e,t){var n=new Error(e||z1[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,gi),!t)throw n;return n},B1=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new ai(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new ai(r*3));var c=function(je){var We=t.length;if(je>We){var nt=new ai(Math.max(We*2,je));nt.set(t),t=nt}},u=e.f||0,f=e.p||0,d=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=mi(i,f,1);var E=mi(i,f+1,3);if(f+=3,E)if(E==1)m=U1,v=N1,g=9,_=5;else if(E==2){var C=mi(i,f,31)+257,A=mi(i,f+10,15)+4,P=C+mi(i,f+5,31)+1;f+=14;for(var w=new ai(P),M=new ai(19),U=0;U<A;++U)M[P1[U]]=mi(i,f+U*3,7);f+=A*3;for(var z=Zl(M),O=(1<<z)-1,k=Po(M,z,1),U=0;U<P;){var X=k[mi(i,f,O)];f+=X&15;var y=X>>4;if(y<16)w[U++]=y;else{var Y=0,q=0;for(y==16?(q=3+mi(i,f,3),f+=2,Y=w[U-1]):y==17?(q=3+mi(i,f,7),f+=3):y==18&&(q=11+mi(i,f,127),f+=7);q--;)w[U++]=Y}}var B=w.subarray(0,C),ue=w.subarray(C);g=Zl(B),_=Zl(ue),m=Po(B,g,1),v=Po(ue,_,1)}else gi(1);else{var y=F1(f)+4,S=i[y-4]|i[y-3]<<8,L=y+S;if(L>r){l&&gi(0);break}a&&c(d+S),t.set(i.subarray(y,L),d),e.b=d+=S,e.p=f=L*8,e.f=u;continue}if(f>p){l&&gi(0);break}}a&&c(d+131072);for(var j=(1<<g)-1,de=(1<<_)-1,we=f;;we=f){var Y=m[$l(i,f)&j],ze=Y>>4;if(f+=Y&15,f>p){l&&gi(0);break}if(Y||gi(2),ze<256)t[d++]=ze;else if(ze==256){we=f,m=null;break}else{var J=ze-254;if(ze>264){var U=ze-257,oe=up[U];J=mi(i,f,(1<<oe)-1)+pp[U],f+=oe}var le=v[$l(i,f)&de],ne=le>>4;le||gi(3),f+=le&15;var ue=I1[ne];if(ne>3){var oe=hp[ne];ue+=$l(i,f)&(1<<oe)-1,f+=oe}if(f>p){l&&gi(0);break}a&&c(d+131072);var ve=d+J;if(d<ue){var Ne=s-ue,Re=Math.min(ue,ve);for(Ne+d<0&&gi(3);d<Re;++d)t[d]=n[Ne+d]}for(;d<ve;++d)t[d]=t[d-ue]}}e.l=m,e.p=we,e.b=d,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return d!=t.length&&o?O1(t,0,d):t.subarray(0,d)},k1=new ai(0),H1=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&gi(6,"invalid zlib data"),(i[1]>>5&1)==1&&gi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ma(i,e){return B1(i.subarray(H1(i),-4),{i:2},e,e)}var V1=typeof TextDecoder<"u"&&new TextDecoder,G1=0;try{V1.decode(k1,{stream:!0}),G1=1}catch{}class W1 extends R1{constructor(e){super(e),this.type=Ci}parse(e){const w=Math.pow(2.7182818,2.2);function M(h,x){let b=0;for(let D=0;D<65536;++D)(D==0||h[D>>3]&1<<(D&7))&&(x[b++]=D);const R=b-1;for(;b<65536;)x[b++]=0;return R}function U(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const z={l:0,c:0,lc:0};function O(h,x,b,R,D){for(;b<h;)x=x<<8|Ce(R,D),b+=8;b-=h,z.l=x>>b&(1<<h)-1,z.c=x,z.lc=b}const k=new Array(59);function X(h){for(let b=0;b<=58;++b)k[b]=0;for(let b=0;b<65537;++b)k[h[b]]+=1;let x=0;for(let b=58;b>0;--b){const R=x+k[b]>>1;k[b]=x,x=R}for(let b=0;b<65537;++b){const R=h[b];R>0&&(h[b]=R|k[R]++<<6)}}function Y(h,x,b,R,D,N){const G=x;let te=0,Z=0;for(;R<=D;R++){if(G.value-x.value>b)return!1;O(6,te,Z,h,G);const $=z.l;if(te=z.c,Z=z.lc,N[R]=$,$==63){if(G.value-x.value>b)throw new Error("Something wrong with hufUnpackEncTable");O(8,te,Z,h,G);let K=z.l+6;if(te=z.c,Z=z.lc,R+K>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}else if($>=59){let K=$-59+2;if(R+K>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}}X(N)}function q(h){return h&63}function B(h){return h>>6}function ue(h,x,b,R){for(;x<=b;x++){const D=B(h[x]),N=q(h[x]);if(D>>N)throw new Error("Invalid table entry");if(N>14){const G=R[D>>N-14];if(G.len)throw new Error("Invalid table entry");if(G.lit++,G.p){const te=G.p;G.p=new Array(G.lit);for(let Z=0;Z<G.lit-1;++Z)G.p[Z]=te[Z]}else G.p=new Array(1);G.p[G.lit-1]=x}else if(N){let G=0;for(let te=1<<14-N;te>0;te--){const Z=R[(D<<14-N)+G];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=N,Z.lit=x,G++}}}return!0}const j={c:0,lc:0};function de(h,x,b,R){h=h<<8|Ce(b,R),x+=8,j.c=h,j.lc=x}const we={c:0,lc:0};function ze(h,x,b,R,D,N,G,te,Z){if(h==x){R<8&&(de(b,R,D,N),b=j.c,R=j.lc),R-=8;let $=b>>R;if($=new Uint8Array([$])[0],te.value+$>Z)return!1;const K=G[te.value-1];for(;$-- >0;)G[te.value++]=K}else if(te.value<Z)G[te.value++]=h;else return!1;we.c=b,we.lc=R}function J(h){return h&65535}function oe(h){const x=J(h);return x>32767?x-65536:x}const le={a:0,b:0};function ne(h,x){const b=oe(h),D=oe(x),N=b+(D&1)+(D>>1),G=N,te=N-D;le.a=G,le.b=te}function ve(h,x){const b=J(h),R=J(x),D=b-(R>>1)&65535,N=R+D-32768&65535;le.a=N,le.b=D}function Ne(h,x,b,R,D,N,G){const te=G<16384,Z=b>D?D:b;let $=1,K,se;for(;$<=Z;)$<<=1;for($>>=1,K=$,$>>=1;$>=1;){se=0;const _e=se+N*(D-K),Se=N*$,Ae=N*K,Te=R*$,Me=R*K;let pe,lt,Ye,yt;for(;se<=_e;se+=Ae){let pt=se;const tt=se+R*(b-K);for(;pt<=tt;pt+=Me){const Et=pt+Te,ut=pt+Se,ot=ut+Te;te?(ne(h[pt+x],h[ut+x]),pe=le.a,Ye=le.b,ne(h[Et+x],h[ot+x]),lt=le.a,yt=le.b,ne(pe,lt),h[pt+x]=le.a,h[Et+x]=le.b,ne(Ye,yt),h[ut+x]=le.a,h[ot+x]=le.b):(ve(h[pt+x],h[ut+x]),pe=le.a,Ye=le.b,ve(h[Et+x],h[ot+x]),lt=le.a,yt=le.b,ve(pe,lt),h[pt+x]=le.a,h[Et+x]=le.b,ve(Ye,yt),h[ut+x]=le.a,h[ot+x]=le.b)}if(b&$){const Et=pt+Se;te?ne(h[pt+x],h[Et+x]):ve(h[pt+x],h[Et+x]),pe=le.a,h[Et+x]=le.b,h[pt+x]=pe}}if(D&$){let pt=se;const tt=se+R*(b-K);for(;pt<=tt;pt+=Me){const Et=pt+Te;te?ne(h[pt+x],h[Et+x]):ve(h[pt+x],h[Et+x]),pe=le.a,h[Et+x]=le.b,h[pt+x]=pe}}K=$,$>>=1}return se}function Re(h,x,b,R,D,N,G,te,Z){let $=0,K=0;const se=G,_e=Math.trunc(R.value+(D+7)/8);for(;R.value<_e;)for(de($,K,b,R),$=j.c,K=j.lc;K>=14;){const Ae=$>>K-14&16383,Te=x[Ae];if(Te.len)K-=Te.len,ze(Te.lit,N,$,K,b,R,te,Z,se),$=we.c,K=we.lc;else{if(!Te.p)throw new Error("hufDecode issues");let Me;for(Me=0;Me<Te.lit;Me++){const pe=q(h[Te.p[Me]]);for(;K<pe&&R.value<_e;)de($,K,b,R),$=j.c,K=j.lc;if(K>=pe&&B(h[Te.p[Me]])==($>>K-pe&(1<<pe)-1)){K-=pe,ze(Te.p[Me],N,$,K,b,R,te,Z,se),$=we.c,K=we.lc;break}}if(Me==Te.lit)throw new Error("hufDecode issues")}}const Se=8-D&7;for($>>=Se,K-=Se;K>0;){const Ae=x[$<<14-K&16383];if(Ae.len)K-=Ae.len,ze(Ae.lit,N,$,K,b,R,te,Z,se),$=we.c,K=we.lc;else throw new Error("hufDecode issues")}return!0}function je(h,x,b,R,D,N){const G={value:0},te=b.value,Z=Be(x,b),$=Be(x,b);b.value+=4;const K=Be(x,b);if(b.value+=4,Z<0||Z>=65537||$<0||$>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const se=new Array(65537),_e=new Array(16384);U(_e);const Se=R-(b.value-te);if(Y(h,b,Se,Z,$,se),K>8*(R-(b.value-te)))throw new Error("Something wrong with hufUncompress");ue(se,Z,$,_e),Re(se,_e,h,b,K,$,N,D,G)}function We(h,x,b){for(let R=0;R<b;++R)x[R]=h[x[R]]}function nt(h){for(let x=1;x<h.length;x++){const b=h[x-1]+h[x]-128;h[x]=b}}function F(h,x){let b=0,R=Math.floor((h.length+1)/2),D=0;const N=h.length-1;for(;!(D>N||(x[D++]=h[b++],D>N));)x[D++]=h[R++]}function Fe(h){let x=h.byteLength;const b=new Array;let R=0;const D=new DataView(h);for(;x>0;){const N=D.getInt8(R++);if(N<0){const G=-N;x-=G+1;for(let te=0;te<G;te++)b.push(D.getUint8(R++))}else{const G=N;x-=2;const te=D.getUint8(R++);for(let Z=0;Z<G+1;Z++)b.push(te)}}return b}function Ze(h,x,b,R,D,N){let G=new DataView(N.buffer);const te=b[h.idx[0]].width,Z=b[h.idx[0]].height,$=3,K=Math.floor(te/8),se=Math.ceil(te/8),_e=Math.ceil(Z/8),Se=te-(se-1)*8,Ae=Z-(_e-1)*8,Te={value:0},Me=new Array($),pe=new Array($),lt=new Array($),Ye=new Array($),yt=new Array($);for(let tt=0;tt<$;++tt)yt[tt]=x[h.idx[tt]],Me[tt]=tt<1?0:Me[tt-1]+se*_e,pe[tt]=new Float32Array(64),lt[tt]=new Uint16Array(64),Ye[tt]=new Uint16Array(se*64);for(let tt=0;tt<_e;++tt){let Et=8;tt==_e-1&&(Et=Ae);let ut=8;for(let it=0;it<se;++it){it==se-1&&(ut=Se);for(let Ke=0;Ke<$;++Ke)lt[Ke].fill(0),lt[Ke][0]=D[Me[Ke]++],Xe(Te,R,lt[Ke]),ke(lt[Ke],pe[Ke]),ye(pe[Ke]);be(pe);for(let Ke=0;Ke<$;++Ke)I(pe[Ke],Ye[Ke],it*64)}let ot=0;for(let it=0;it<$;++it){const Ke=b[h.idx[it]].type;for(let Nt=8*tt;Nt<8*tt+Et;++Nt){ot=yt[it][Nt];for(let Ot=0;Ot<K;++Ot){const at=Ot*64+(Nt&7)*8;G.setUint16(ot+0*Ke,Ye[it][at+0],!0),G.setUint16(ot+2*Ke,Ye[it][at+1],!0),G.setUint16(ot+4*Ke,Ye[it][at+2],!0),G.setUint16(ot+6*Ke,Ye[it][at+3],!0),G.setUint16(ot+8*Ke,Ye[it][at+4],!0),G.setUint16(ot+10*Ke,Ye[it][at+5],!0),G.setUint16(ot+12*Ke,Ye[it][at+6],!0),G.setUint16(ot+14*Ke,Ye[it][at+7],!0),ot+=16*Ke}}if(K!=se)for(let Nt=8*tt;Nt<8*tt+Et;++Nt){const Ot=yt[it][Nt]+8*K*2*Ke,at=K*64+(Nt&7)*8;for(let An=0;An<ut;++An)G.setUint16(Ot+An*2*Ke,Ye[it][at+An],!0)}}}const pt=new Uint16Array(te);G=new DataView(N.buffer);for(let tt=0;tt<$;++tt){b[h.idx[tt]].decoded=!0;const Et=b[h.idx[tt]].type;if(b[tt].type==2)for(let ut=0;ut<Z;++ut){const ot=yt[tt][ut];for(let it=0;it<te;++it)pt[it]=G.getUint16(ot+it*2*Et,!0);for(let it=0;it<te;++it)G.setFloat32(ot+it*2*Et,ee(pt[it]),!0)}}}function Xe(h,x,b){let R,D=1;for(;D<64;)R=x[h.value],R==65280?D=64:R>>8==255?D+=R&255:(b[D]=R,D++),h.value++}function ke(h,x){x[0]=ee(h[0]),x[1]=ee(h[1]),x[2]=ee(h[5]),x[3]=ee(h[6]),x[4]=ee(h[14]),x[5]=ee(h[15]),x[6]=ee(h[27]),x[7]=ee(h[28]),x[8]=ee(h[2]),x[9]=ee(h[4]),x[10]=ee(h[7]),x[11]=ee(h[13]),x[12]=ee(h[16]),x[13]=ee(h[26]),x[14]=ee(h[29]),x[15]=ee(h[42]),x[16]=ee(h[3]),x[17]=ee(h[8]),x[18]=ee(h[12]),x[19]=ee(h[17]),x[20]=ee(h[25]),x[21]=ee(h[30]),x[22]=ee(h[41]),x[23]=ee(h[43]),x[24]=ee(h[9]),x[25]=ee(h[11]),x[26]=ee(h[18]),x[27]=ee(h[24]),x[28]=ee(h[31]),x[29]=ee(h[40]),x[30]=ee(h[44]),x[31]=ee(h[53]),x[32]=ee(h[10]),x[33]=ee(h[19]),x[34]=ee(h[23]),x[35]=ee(h[32]),x[36]=ee(h[39]),x[37]=ee(h[45]),x[38]=ee(h[52]),x[39]=ee(h[54]),x[40]=ee(h[20]),x[41]=ee(h[22]),x[42]=ee(h[33]),x[43]=ee(h[38]),x[44]=ee(h[46]),x[45]=ee(h[51]),x[46]=ee(h[55]),x[47]=ee(h[60]),x[48]=ee(h[21]),x[49]=ee(h[34]),x[50]=ee(h[37]),x[51]=ee(h[47]),x[52]=ee(h[50]),x[53]=ee(h[56]),x[54]=ee(h[59]),x[55]=ee(h[61]),x[56]=ee(h[35]),x[57]=ee(h[36]),x[58]=ee(h[48]),x[59]=ee(h[49]),x[60]=ee(h[57]),x[61]=ee(h[58]),x[62]=ee(h[62]),x[63]=ee(h[63])}function ye(h){const x=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),G=.5*Math.cos(3*3.14159/8),te=.5*Math.cos(7*3.14159/16),Z=new Array(4),$=new Array(4),K=new Array(4),se=new Array(4);for(let _e=0;_e<8;++_e){const Se=_e*8;Z[0]=R*h[Se+2],Z[1]=G*h[Se+2],Z[2]=R*h[Se+6],Z[3]=G*h[Se+6],$[0]=b*h[Se+1]+D*h[Se+3]+N*h[Se+5]+te*h[Se+7],$[1]=D*h[Se+1]-te*h[Se+3]-b*h[Se+5]-N*h[Se+7],$[2]=N*h[Se+1]-b*h[Se+3]+te*h[Se+5]+D*h[Se+7],$[3]=te*h[Se+1]-N*h[Se+3]+D*h[Se+5]-b*h[Se+7],K[0]=x*(h[Se+0]+h[Se+4]),K[3]=x*(h[Se+0]-h[Se+4]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],se[0]=K[0]+K[1],se[1]=K[3]+K[2],se[2]=K[3]-K[2],se[3]=K[0]-K[1],h[Se+0]=se[0]+$[0],h[Se+1]=se[1]+$[1],h[Se+2]=se[2]+$[2],h[Se+3]=se[3]+$[3],h[Se+4]=se[3]-$[3],h[Se+5]=se[2]-$[2],h[Se+6]=se[1]-$[1],h[Se+7]=se[0]-$[0]}for(let _e=0;_e<8;++_e)Z[0]=R*h[16+_e],Z[1]=G*h[16+_e],Z[2]=R*h[48+_e],Z[3]=G*h[48+_e],$[0]=b*h[8+_e]+D*h[24+_e]+N*h[40+_e]+te*h[56+_e],$[1]=D*h[8+_e]-te*h[24+_e]-b*h[40+_e]-N*h[56+_e],$[2]=N*h[8+_e]-b*h[24+_e]+te*h[40+_e]+D*h[56+_e],$[3]=te*h[8+_e]-N*h[24+_e]+D*h[40+_e]-b*h[56+_e],K[0]=x*(h[_e]+h[32+_e]),K[3]=x*(h[_e]-h[32+_e]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],se[0]=K[0]+K[1],se[1]=K[3]+K[2],se[2]=K[3]-K[2],se[3]=K[0]-K[1],h[0+_e]=se[0]+$[0],h[8+_e]=se[1]+$[1],h[16+_e]=se[2]+$[2],h[24+_e]=se[3]+$[3],h[32+_e]=se[3]-$[3],h[40+_e]=se[2]-$[2],h[48+_e]=se[1]-$[1],h[56+_e]=se[0]-$[0]}function be(h){for(let x=0;x<64;++x){const b=h[0][x],R=h[1][x],D=h[2][x];h[0][x]=b+1.5747*D,h[1][x]=b-.1873*R-.4682*D,h[2][x]=b+1.8556*R}}function I(h,x,b){for(let R=0;R<64;++R)x[b+R]=Bh.toHalfFloat(T(h[R]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function V(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Q(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),b=new Uint8Array(Fe(x)),R=new Uint8Array(b.length);return nt(b),F(b,R),new DataView(R.buffer)}function ae(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=Ma(x),R=new Uint8Array(b.length);return nt(b),F(b,R),new DataView(R.buffer)}function ie(h){const x=h.viewer,b={value:h.offset.value},R=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),D=new Uint8Array(8192);let N=0;const G=new Array(h.inputChannels.length);for(let Ae=0,Te=h.inputChannels.length;Ae<Te;Ae++)G[Ae]={},G[Ae].start=N,G[Ae].end=G[Ae].start,G[Ae].nx=h.columns,G[Ae].ny=h.lines,G[Ae].size=h.type,N+=G[Ae].nx*G[Ae].ny*G[Ae].size;const te=re(x,b),Z=re(x,b);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(te<=Z)for(let Ae=0;Ae<Z-te+1;Ae++)D[Ae+te]=Qe(x,b);const $=new Uint16Array(65536),K=M(D,$),se=Be(x,b);je(h.array,x,b,se,R,N);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Te=G[Ae];for(let Me=0;Me<G[Ae].size;++Me)Ne(R,Te.start+Me,Te.nx,Te.size,Te.ny,Te.nx*Te.size,K)}We($,R,N);let _e=0;const Se=new Uint8Array(R.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let Te=0;Te<h.inputChannels.length;Te++){const Me=G[Te],pe=Me.nx*Me.size,lt=new Uint8Array(R.buffer,Me.end*2,pe*2);Se.set(lt,_e),_e+=pe*2,Me.end+=pe}return new DataView(Se.buffer)}function he(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=Ma(x),R=h.inputChannels.length*h.lines*h.columns*h.totalBytes,D=new ArrayBuffer(R),N=new DataView(D);let G=0,te=0;const Z=new Array(4);for(let $=0;$<h.lines;$++)for(let K=0;K<h.inputChannels.length;K++){let se=0;switch(h.inputChannels[K].pixelType){case 1:Z[0]=G,Z[1]=Z[0]+h.columns,G=Z[1]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ae=b[Z[0]++]<<8|b[Z[1]++];se+=Ae,N.setUint16(te,se,!0),te+=2}break;case 2:Z[0]=G,Z[1]=Z[0]+h.columns,Z[2]=Z[1]+h.columns,G=Z[2]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ae=b[Z[0]++]<<24|b[Z[1]++]<<16|b[Z[2]++]<<8;se+=Ae,N.setUint32(te,se,!0),te+=4}break}}return N}function ce(h){const x=h.viewer,b={value:h.offset.value},R=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),D={version:He(x,b),unknownUncompressedSize:He(x,b),unknownCompressedSize:He(x,b),acCompressedSize:He(x,b),dcCompressedSize:He(x,b),rleCompressedSize:He(x,b),rleUncompressedSize:He(x,b),rleRawSize:He(x,b),totalAcUncompressedCount:He(x,b),totalDcUncompressedCount:He(x,b),acCompression:He(x,b)};if(D.version<2)throw new Error("EXRLoader.parse: "+ti.compression+" version "+D.version+" is unsupported");const N=new Array;let G=re(x,b)-2;for(;G>0;){const Te=me(x.buffer,b),Me=Qe(x,b),pe=Me>>2&3,lt=(Me>>4)-1,Ye=new Int8Array([lt])[0],yt=Qe(x,b);N.push({name:Te,index:Ye,type:yt,compression:pe}),G-=Te.length+3}const te=ti.channels,Z=new Array(h.inputChannels.length);for(let Te=0;Te<h.inputChannels.length;++Te){const Me=Z[Te]={},pe=te[Te];Me.name=pe.name,Me.compression=0,Me.decoded=!1,Me.type=pe.pixelType,Me.pLinear=pe.pLinear,Me.width=h.columns,Me.height=h.lines}const $={idx:new Array(3)};for(let Te=0;Te<h.inputChannels.length;++Te){const Me=Z[Te];for(let pe=0;pe<N.length;++pe){const lt=N[pe];Me.name==lt.name&&(Me.compression=lt.compression,lt.index>=0&&($.idx[lt.index]=Te),Me.offset=Te)}}let K,se,_e;if(D.acCompressedSize>0)switch(D.acCompression){case 0:K=new Uint16Array(D.totalAcUncompressedCount),je(h.array,x,b,D.acCompressedSize,K,D.totalAcUncompressedCount);break;case 1:const Te=h.array.slice(b.value,b.value+D.totalAcUncompressedCount),Me=Ma(Te);K=new Uint16Array(Me.buffer),b.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const Te={array:h.array,offset:b,size:D.dcCompressedSize};se=new Uint16Array(ae(Te).buffer),b.value+=D.dcCompressedSize}if(D.rleRawSize>0){const Te=h.array.slice(b.value,b.value+D.rleCompressedSize),Me=Ma(Te);_e=Fe(Me.buffer),b.value+=D.rleCompressedSize}let Se=0;const Ae=new Array(Z.length);for(let Te=0;Te<Ae.length;++Te)Ae[Te]=new Array;for(let Te=0;Te<h.lines;++Te)for(let Me=0;Me<Z.length;++Me)Ae[Me].push(Se),Se+=Z[Me].width*h.type*2;Ze($,Ae,Z,K,se,R);for(let Te=0;Te<Z.length;++Te){const Me=Z[Te];if(!Me.decoded)switch(Me.compression){case 2:let pe=0,lt=0;for(let Ye=0;Ye<h.lines;++Ye){let yt=Ae[Te][pe];for(let pt=0;pt<Me.width;++pt){for(let tt=0;tt<2*Me.type;++tt)R[yt++]=_e[lt+tt*Me.width*Me.height];lt++}pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function me(h,x){const b=new Uint8Array(h);let R=0;for(;b[x.value+R]!=0;)R+=1;const D=new TextDecoder().decode(b.slice(x.value,x.value+R));return x.value=x.value+R+1,D}function $e(h,x,b){const R=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+b));return x.value=x.value+b,R}function ge(h,x){const b=Oe(h,x),R=Be(h,x);return[b,R]}function De(h,x){const b=Be(h,x),R=Be(h,x);return[b,R]}function Oe(h,x){const b=h.getInt32(x.value,!0);return x.value=x.value+4,b}function Be(h,x){const b=h.getUint32(x.value,!0);return x.value=x.value+4,b}function Ce(h,x){const b=h[x.value];return x.value=x.value+1,b}function Qe(h,x){const b=h.getUint8(x.value);return x.value=x.value+1,b}const He=function(h,x){let b;return"getBigInt64"in DataView.prototype?b=Number(h.getBigInt64(x.value,!0)):b=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,b};function qe(h,x){const b=h.getFloat32(x.value,!0);return x.value+=4,b}function H(h,x){return Bh.toHalfFloat(qe(h,x))}function ee(h){const x=(h&31744)>>10,b=h&1023;return(h>>15?-1:1)*(x?x===31?b?NaN:1/0:Math.pow(2,x-15)*(1+b/1024):6103515625e-14*(b/1024))}function re(h,x){const b=h.getUint16(x.value,!0);return x.value+=2,b}function fe(h,x){return ee(re(h,x))}function Le(h,x,b,R){const D=b.value,N=[];for(;b.value<D+R-1;){const G=me(x,b),te=Oe(h,b),Z=Qe(h,b);b.value+=3;const $=Oe(h,b),K=Oe(h,b);N.push({name:G,pixelType:te,pLinear:Z,xSampling:$,ySampling:K})}return b.value+=1,N}function Ie(h,x){const b=qe(h,x),R=qe(h,x),D=qe(h,x),N=qe(h,x),G=qe(h,x),te=qe(h,x),Z=qe(h,x),$=qe(h,x);return{redX:b,redY:R,greenX:D,greenY:N,blueX:G,blueY:te,whiteX:Z,whiteY:$}}function st(h,x){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=Qe(h,x);return b[R]}function Mt(h,x){const b=Oe(h,x),R=Oe(h,x),D=Oe(h,x),N=Oe(h,x);return{xMin:b,yMin:R,xMax:D,yMax:N}}function Pt(h,x){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=Qe(h,x);return b[R]}function _t(h,x){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=Qe(h,x);return b[R]}function wt(h,x){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],D=Be(h,x),N=Be(h,x),G=Qe(h,x);return{xSize:D,ySize:N,levelMode:b[G&15],roundingMode:R[G>>4]}}function Tn(h,x){const b=qe(h,x),R=qe(h,x);return[b,R]}function Cr(h,x){const b=qe(h,x),R=qe(h,x),D=qe(h,x);return[b,R,D]}function Pr(h,x,b,R,D){if(R==="string"||R==="stringvector"||R==="iccProfile")return $e(x,b,D);if(R==="chlist")return Le(h,x,b,D);if(R==="chromaticities")return Ie(h,b);if(R==="compression")return st(h,b);if(R==="box2i")return Mt(h,b);if(R==="envmap")return _t(h,b);if(R==="tiledesc")return wt(h,b);if(R==="lineOrder")return Pt(h,b);if(R==="float")return qe(h,b);if(R==="v2f")return Tn(h,b);if(R==="v3f")return Cr(h,b);if(R==="int")return Oe(h,b);if(R==="rational")return ge(h,b);if(R==="timecode")return De(h,b);if(R==="preview")return b.value+=D,"skipped";b.value+=D}function cn(h,x){const b=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function tr(h,x,b){let R=0;switch(h.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=cn(Math.max(x,b),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function nr(h,x,b,R){const D=new Array(h);for(let N=0;N<h;N++){const G=1<<N;let te=x/G|0;R=="ROUND_UP"&&te*G<x&&(te+=1);const Z=Math.max(te,1);D[N]=(Z+b-1)/b|0}return D}function Lr(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.tileCount;R++){const D=Oe(h.viewer,x),N=Oe(h.viewer,x);x.value+=8,h.size=Be(h.viewer,x);const G=D*h.blockWidth,te=N*h.blockHeight;h.columns=G+h.blockWidth>h.width?h.width-G:h.blockWidth,h.lines=te+h.blockHeight>h.height?h.height-te:h.blockHeight;const Z=h.columns*h.totalBytes,K=h.size<h.lines*Z?h.uncompress(h):V(h);x.value+=h.size;for(let se=0;se<h.lines;se++){const _e=se*h.columns*h.totalBytes;for(let Se=0;Se<h.inputChannels.length;Se++){const Ae=ti.channels[Se].name,Te=h.channelByteOffsets[Ae]*h.columns,Me=h.decodeChannels[Ae];if(Me===void 0)continue;b.value=_e+Te;const pe=(h.height-(1+te+se))*h.outLineWidth;for(let lt=0;lt<h.columns;lt++){const Ye=pe+(lt+G)*h.outputChannels+Me;h.byteArray[Ye]=h.getter(K,b)}}}}}function yi(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.height/h.blockHeight;R++){const D=Oe(h.viewer,x)-ti.dataWindow.yMin;h.size=Be(h.viewer,x),h.lines=D+h.blockHeight>h.height?h.height-D:h.blockHeight;const N=h.columns*h.totalBytes,te=h.size<h.lines*N?h.uncompress(h):V(h);x.value+=h.size;for(let Z=0;Z<h.blockHeight;Z++){const $=R*h.blockHeight,K=Z+h.scanOrder($);if(K>=h.height)continue;const se=Z*N,_e=(h.height-1-K)*h.outLineWidth;for(let Se=0;Se<h.inputChannels.length;Se++){const Ae=ti.channels[Se].name,Te=h.channelByteOffsets[Ae]*h.columns,Me=h.decodeChannels[Ae];if(Me!==void 0){b.value=se+Te;for(let pe=0;pe<h.columns;pe++){const lt=_e+pe*h.outputChannels+Me;h.byteArray[lt]=h.getter(te,b)}}}}}}function Ut(h,x,b){const R={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=h.getUint8(4);const D=h.getUint8(5);R.spec={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)},b.value=8;let N=!0;for(;N;){const G=me(x,b);if(G==0)N=!1;else{const te=me(x,b),Z=Be(h,b),$=Pr(h,x,b,te,Z);$===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${te}'.`):R[G]=$}}if((D&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function Mi(h,x,b,R,D){const N={size:0,viewer:x,array:b,offset:R,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ui};switch(h.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=V;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=Q;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=ae;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=ae;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=ie;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=he;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=ce;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=ce;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const G={};for(const K of h.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":G[K.name]=!0,N.type=K.pixelType}let te=!1;if(G.R&&G.G&&G.B)te=!G.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(G.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(D){case $n:N.getter=fe;break;case Ci:N.getter=re;break}else if(N.type==2)switch(D){case $n:N.getter=qe;break;case Ci:N.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+h.compression+".");N.columns=N.width;const Z=N.width*N.height*N.outputChannels;switch(D){case $n:N.byteArray=new Float32Array(Z),te&&N.byteArray.fill(1,0,Z);break;case Ci:N.byteArray=new Uint16Array(Z),te&&N.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let $=0;for(const K of h.channels)N.decodeChannels[K.name]!==void 0&&(N.channelByteOffsets[K.name]=$),$+=K.pixelType*2;if(N.totalBytes=$,N.outLineWidth=N.width*N.outputChannels,h.lineOrder==="INCREASING_Y"?N.scanOrder=K=>K:N.scanOrder=K=>N.height-1-K,N.outputChannels==4?(N.format=xn,N.colorSpace=Ui):(N.format=Ru,N.colorSpace=en),h.spec.singleTile){N.blockHeight=h.tiles.ySize,N.blockWidth=h.tiles.xSize;const K=tr(h.tiles,N.width,N.height),se=nr(K,N.width,h.tiles.xSize,h.tiles.roundingMode),_e=nr(K,N.height,h.tiles.ySize,h.tiles.roundingMode);N.tileCount=se[0]*_e[0];for(let Se=0;Se<K;Se++)for(let Ae=0;Ae<_e[Se];Ae++)for(let Te=0;Te<se[Se];Te++)He(x,R);N.decode=Lr.bind(N)}else{N.blockWidth=N.width;const K=Math.ceil(N.height/N.blockHeight);for(let se=0;se<K;se++)He(x,R);N.decode=yi.bind(N)}return N}const ui={value:0},Dr=new DataView(e),cs=new Uint8Array(e),ti=Ut(Dr,e,ui),hi=Mi(ti,Dr,cs,ui,this.type);return hi.decode(),{header:ti,width:hi.width,height:hi.height,data:hi.byteArray,format:hi.format,colorSpace:hi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=mt,o.magFilter=mt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function Hn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new er,c=r.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],m=d.id,v=m==="indices"?o:s,g=d.componentSize,_=globalThis[d.storageType],p=new _(t,a,v*g),E=_.BYTES_PER_ELEMENT;let y;if(d.needsPack){const S=d.packedComponents,L=S.length,C=d.storageType.indexOf("Int")===0,A=1<<E*8,P=C?A*.5:0,w=1/A;y=new Float32Array(v*g);for(let M=0,U=0;M<v;M++)for(let z=0;z<L;z++){const O=S[z];y[U]=(p[U]+P)*w*O.delta+O.from,U++}}else y=p;if(m==="indices"){let S=y;y instanceof Uint8Array&&(S=new Uint16Array(y.length),S.set(y)),l.setIndex(new Xt(S,1))}else l.setAttribute(m,new Xt(y,g));a+=v*g*E}return l.computeBoundingSphere(),l}const wa=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Kl={density:1,friction:2,restitution:.8},X1=40,es=8,q1=`
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
`,Y1=`
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
uniform vec4 u_nearPositionRadiusList[${es}];
uniform vec3 u_nearColorList[${es}];

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

  for (int i = 0; i < ${es}; i++) {
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
  gi /= float(${es});

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
`,Z1=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,$1=`
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
`;function K1(i){const e={...Kl},t={...Kl},n={...Kl};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function j1(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function gf(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class J1{constructor(e,t,n,r,s,o=!1){this.position=new W((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Dn().setFromEuler(new ei(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new W,this.gravityAcc=new W}applyImpulse(){this.velocity.add(new W((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(X1),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function Q1(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*wa.length),r=wa[n];const s=new Yo,o=new Pn(25,1,.1,100);o.position.set(0,0,25);const a=new ol({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Ui,a.toneMapping=Li;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,m]=await Promise.all([Hn(u),new Promise((F,Fe)=>{new W1().load(f,F,void 0,Fe)})]);m.minFilter=mt,m.magFilter=mt,m.generateMipmaps=!1,m.colorSpace=en;const v=new W(10,10,5),g=K1(r),_=j1("balloonBody-25"),p=[],E=[],y=[],S=[],L=Array.from({length:es},()=>new Dt(0,0,-999,.01)),C=Array.from({length:es},()=>new Je(1118481)),A=F=>new Ct({uniforms:{u_matcap:{value:m},u_color:{value:new Je(F.color)},u_bgColor:{value:new Je(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Dt(0,0,0,1)},u_selfRotation:{value:new Dt(0,0,0,1)},u_nearPositionRadiusList:{value:L.map(Fe=>Fe.clone())},u_nearColorList:{value:C.map(Fe=>Fe.clone())}},vertexShader:q1,fragmentShader:Y1});for(const F of g){const Fe=A(F),Ze=new kt(d,Fe);Ze.frustumCulled=!1,Ze.scale.setScalar(F.radius),s.add(Ze),E.push(Ze),y.push(Fe),p.push(new J1(F.radius,F.density,F.friction,F.restitution,_,!1)),S.push({i:E.length-1,d2:0})}const P=new Ct({uniforms:{u_color0:{value:new Je(r)},u_color1:{value:new Je(1316117)},u_aspect:{value:1}},vertexShader:Z1,fragmentShader:$1,depthWrite:!1}),w=new kt(new Si(90,60),P);w.position.z=-12,w.renderOrder=-1e3,s.add(w);const M=new rt(0,0),U=new W,z=new W,O=new W,k=new W,X=new W,Y=new W,q=new W,B=new W,ue=new W,j=new W,de=new Dn,we=.025,ze=.1,J=.12,oe=F=>{const Fe=(e||i).getBoundingClientRect();M.x=(F.clientX-Fe.left)/Fe.width*2-1,M.y=-((F.clientY-Fe.top)/Fe.height*2-1)};window.addEventListener("pointermove",oe);const le=()=>{n=(n+1)%wa.length,r=wa[n],E.forEach((F,Fe)=>{const Ze=g[Fe];Ze.isColored&&(F.material.uniforms.u_color.value.set(r),Ze.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},ne=()=>le();i.addEventListener("click",ne),e==null||e.addEventListener("click",ne);const ve=()=>{const F=e||i.parentElement,Fe=F.clientWidth,Ze=F.clientHeight,Xe=Fe/Math.max(Ze,1);o.fov=gf(Xe,2.2,2/3,18,30),o.aspect=Xe,o.updateProjectionMatrix(),a.setSize(Fe,Ze,!1),P.uniforms.u_aspect.value=Xe};ve(),window.addEventListener("resize",ve);let Ne=0,Re=performance.now();const je=performance.now(),We=()=>{const Fe=(e||i).getBoundingClientRect();l=Fe.bottom>0&&Fe.top<window.innerHeight};window.addEventListener("scroll",We,{passive:!0}),We();const nt=F=>{if(Ne=requestAnimationFrame(nt),!l){Re=F;return}let Fe=Math.min(.05,(F-Re)/1e3);Re=F;const Ze=t?1:2;Fe/=Ze;const Xe=(F-je)/1e3,ke=gf(Xe,.3,2,25,17.5);o.position.z=ke;for(let ye=0;ye<Ze;ye++){const be=new W(M.x,M.y,.5).unproject(o);be.sub(o.position).normalize();const I=(0-o.position.z)/be.z;U.copy(o.position).addScaledVector(be,I),O.copy(U).sub(z).multiplyScalar(J/Math.max(Fe,.001)),k.copy(U).sub(o.position);const T=k.lengthSq()||1;z.copy(U);for(let V=0;V<p.length;V++){const Q=p[V];Q.updateGravity(Fe),Y.copy(Q.velocity),q.copy(Q.position);for(let ce=V+1;ce<p.length;ce++){const me=p[ce];ue.copy(me.velocity),j.copy(me.position),X.copy(q).sub(j);const $e=X.length(),ge=Q.radius+me.radius;if($e<ge&&$e>1e-6){const De=Math.sqrt(Q.friction*me.friction);Q.frictionTot+=De,me.frictionTot+=De,X.normalize(),X.multiplyScalar(.5*($e-ge)),q.sub(X),j.add(X),X.normalize();const Oe=Y.dot(X),Be=ue.dot(X),Ce=Q.mass,Qe=me.mass,He=(Ce*Oe+Qe*Be-Qe*(Oe-Be)*Q.restitution)/(Ce+Qe),qe=(Ce*Oe+Qe*Be-Ce*(Be-Oe)*me.restitution)/(Ce+Qe);Y.addScaledVector(X,(He-Oe)/(1+De)),ue.addScaledVector(X,(qe-Be)/(1+De)),me.position.copy(j),me.velocity.copy(ue)}}B.copy(q).sub(o.position);let ae=B.dot(k)/T;ae=B.sub(ue.copy(k).multiplyScalar(ae)).length()-Q.radius-we,ae<0&&(B.copy(q).sub(o.position).cross(k).normalize(),ue.copy(k).cross(B).normalize(),q.sub(ue.multiplyScalar(ze*ae)),ue.multiplyScalar(-J/Math.max(Fe,.001)),Y.add(ue),Y.add(O));let ie=q.length();if(ie>0){B.set(1,1,1).normalize();let ce=1-Math.abs(B.dot(ue.copy(q).normalize()));ce*=Fe*Math.min(1,Math.max(0,ie/2))*.5,ce*=V%2*2-1,de.setFromAxisAngle(B,ce),ue.copy(q).applyQuaternion(de).sub(B.copy(q)),Y.add(ue)}B.crossVectors(q,Y);let he=B.length();he/=Q.inertia,he>0&&(B.normalize(),de.setFromAxisAngle(B,he*Fe),Q.quaternion.premultiply(de)),Q.position.copy(q),Q.velocity.copy(Y),Q.update(Fe),["x","y","z"].forEach(ce=>{const me=ce==="z"?5.5:7.5;Q.position[ce]>me&&(Q.position[ce]=me,Q.velocity[ce]*=-.55),Q.position[ce]<-me&&(Q.position[ce]=-me,Q.velocity[ce]*=-.55)})}}for(let ye=0;ye<E.length;ye++){const be=E[ye],I=p[ye];be.position.copy(I.position),be.quaternion.copy(I.quaternion);const T=y[ye].uniforms;T.u_selfPositionRadius.value.set(I.position.x,I.position.y,I.position.z,I.radius),T.u_selfRotation.value.set(I.quaternion.x,I.quaternion.y,I.quaternion.z,I.quaternion.w),T.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let ye=0;ye<E.length;ye++){for(let T=0;T<E.length;T++)S[T].i=T,S[T].d2=ye===T?0:p[ye].position.distanceToSquared(p[T].position);S.sort((T,V)=>T.d2-V.d2);const be=y[ye].uniforms.u_nearPositionRadiusList.value,I=y[ye].uniforms.u_nearColorList.value;for(let T=0;T<es;T++){const V=S[T+1]?S[T+1].i:S[0].i,Q=p[V];be[T].set(Q.position.x,Q.position.y,Q.position.z,Q.radius),I[T].copy(y[V].uniforms.u_color.value)}}o.position.x+=(M.x*.9-o.position.x)*.04,o.position.y+=(M.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Ne=requestAnimationFrame(nt),{cycleColor:le,destroy(){cancelAnimationFrame(Ne),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",ve),window.removeEventListener("scroll",We),i.removeEventListener("click",ne),e==null||e.removeEventListener("click",ne),y.forEach(F=>F.dispose()),P.dispose(),a.dispose()}}}function _n(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Xn(i){return _n(i,0,1)}function _p(i,e,t){return(t-i)/(e-i||1)}function Kr(i,e,t){return _n(_p(i,e,t),0,1)}function xe(i,e,t,n,r,s){let o=Kr(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function vf(i,e,t,n,r,s){let o=_p(e,t,i);return n+o*(r-n)}function ey(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,_,p,E)=>1/(3*_*g*g+2*p*g+E),o=(g,_,p,E,y)=>_*(g*g*g)+p*(g*g)+E*g+y,a=(g,_,p,E,y)=>{const S=g*g;return _*(S*g)+p*S+E*g+y},l=1-3*n+3*e,c=3*n-6*e,u=3*e,f=1-3*r+3*t,d=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=o(v,l,c,u,0);let p=s(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,m,0)}function ft(i){return ey(i,.35,0,0,1)}function ja(i){return i===1?1:1-Math.pow(2,-10*i)}function ty(i){return i===0?0:Math.pow(1024,i-1)}function ny(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function jl(i){return 1-Math.cos(i*Math.PI/2)}function iy(i){return-(Math.cos(Math.PI*i)-1)/2}function ry(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function iu(i){return i*i*i}function gp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function pn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,vf(n,t,t-r,-1,0));o+=Math.max(0,vf(n,0,-r,0,1));const a=xe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function sy(i){return 1-Math.pow(1-i,3)}function oy(i){return i*i*i*i}function ay(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function _i(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const xf=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function vp(i){const e=xf.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of xf){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=r(),d=c.from,m=u.to,v=(f-d)/Math.max(m-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=m,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const ly=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,cy=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,uy="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",hy="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",xp=`
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
`,Sp=`
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
`,fy=`
${xp}
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
${Sp}
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
`,dy=`
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
`,Sf=`
${xp}
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
${Sp}
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
`,dr=5,Ea=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,py=`
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
`,my=`
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
`,_y=`
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
`,gy=`
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
`;function po(i,e,t=!1){const n={minFilter:mt,magFilter:mt,format:xn,type:Ci,depthBuffer:t,stencilBuffer:!1},r=new Qi(i,e,n);return t&&(r.depthTexture=new Ou(i,e),r.depthTexture.type=js),r}function vy(i,e,t,{isMobile:n=!1}={}){const r=new rt(1,1);i.getSize(r);let s=!!n,o=po(1,1,!0),a=po(1,1,!1),l=po(1,1,!1);const c=[],u=[];for(let ye=0;ye<dr;ye++)c.push(po(1,1)),u.push(po(1,1));const f=new Nu(-1,1,1,-1,0,1),d=new kt(new Si(2,2),new Uu),m=new Yo;m.add(d);const v=new Ct({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new rt(1,1)},u_aspect:{value:new rt(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Ea,fragmentShader:py,depthTest:!1,depthWrite:!1,toneMapped:!1}),g=[];for(let ye=0;ye<dr;ye++){const be=3+ye*2;g.push(new Ct({uniforms:{u_texture:{value:null},u_resolution:{value:new rt(1,1)},u_direction:{value:new rt(1,0)}},defines:{KERNEL_RADIUS:be,SIGMA:be},vertexShader:Ea,fragmentShader:my,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const _=new Float32Array(dr),p=new Ct({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:_}},vertexShader:Ea,fragmentShader:_y,depthTest:!1,depthWrite:!1,toneMapped:!1});let E=0;const y=new Ct({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new xt},u_prevProjectionViewMatrix:{value:new xt},u_aspect:{value:new rt(1,1)},u_amount:{value:1}},vertexShader:Ea,fragmentShader:gy,depthTest:!1,depthWrite:!1,toneMapped:!1}),S=new xt,L=new xt,C=new xt,A=new xt,P=new xt,w=new W,M=new ei,U=new W(1,1,1),z=new Dn;let O=!0,k=1,X=!1,Y=0,q=0,B=1,ue=1,j=0,de=.015,we=.6,ze=.3,J=.5,oe=0,le=!0,ne=1,ve=1;const Ne=new rt(1,0),Re=new rt(0,1),je=(ye,be)=>{d.material=ye,i.setRenderTarget(be),i.clear(),i.render(m,f)},We=ye=>{const be=Math.max(1,ye);return 1<<Math.ceil(Math.log(be)/Math.log(2))},nt=(ye,be)=>{ne=Math.max(1,Math.floor(ye)),ve=Math.max(1,Math.floor(be));const I=s?.5:1;o.setSize(Math.max(1,Math.floor(ne*I)),Math.max(1,Math.floor(ve*I))),a.setSize(o.width,o.height);const T=s?4:2;let V=Math.max(1,Math.ceil(ne/T)),Q=Math.max(1,Math.ceil(ve/T));l.setSize(V,Q);for(let ie=0;ie<dr;ie++)c[ie].setSize(V,Q),u[ie].setSize(V,Q),V=Math.max(1,Math.ceil(V/2)),Q=Math.max(1,Math.ceil(Q/2));v.uniforms.u_texelSize.value.set(1/ne,1/ve);const ae=ve/Math.sqrt(ne*ne+ve*ve)*2;v.uniforms.u_aspect.value.set(ne/ve*ae,ae),y.uniforms.u_aspect.value.set(ne/Math.max(ve,1),1)},F=({blackFrameInRatio:ye=0,blackTitleRatio:be=0,blackTunnelRatio:I=0,whiteFrameRatio:T=0,whiteTunnelWaitRatio:V=0,astronautDropRatio:Q=0,isWhiteTunnelActive:ae=!1,isBlackTunnelActive:ie=!1,isMobile:he=!1}={})=>{s=!!he;let ce=ye*(Yt.lerp(0,.15,be)+Yt.clamp((I-.2)/.2,0,1)*.25);if(I>=.65){const $e=Yt.clamp((I-.65)/.1,0,1);ce=ce+(.08-ce)*$e}if(ae&&(ce=0),!ae&&ye>.55&&I<.25){const $e=Yt.lerp(he?.24:.42,he?.12:.18,Yt.clamp(be/.5,0,1));ce=Math.max(ce,$e*Math.min(1,ye))}if(j=ce,B=I<1?Yt.lerp(1,3,Yt.clamp(I/.7,0,1)):1,ae){const $e=he?10:20;Y=Q<1?Yt.lerp(he?3.2:3.4,2,Yt.clamp(T/.05,0,1)):Yt.lerp(0,$e,Yt.clamp(V/.1,0,1)),oe=Yt.lerp(.3,0,Yt.clamp(V/.1,0,1))}else{const $e=Yt.clamp(be/.25,0,1);Y=Yt.lerp(he?22:30,he?5:6,$e),oe=0}const me=!ae&&ye>.55&&I<.2;we=me?.85:.6,de=me?.04:he?.012:.02,ze=me?.15:.3,J=me?.75:.5,q=he?.15:me?.55:.5,ue=me?1.15:1,X=ie||ae},Fe=(ye,be=0)=>{w.set(0,0,ye),M.set(0,0,be)},Ze=()=>{O=!0},Xe=(ye,be)=>{const I=i.autoClear;i.autoClear=!0,je(ye,be),i.autoClear=I},ke=()=>{var ie;if(!le){i.setRenderTarget(null),i.render(e,t);return}const ye=i.getRenderTarget(),be=i.autoClear;i.setRenderTarget(o),i.autoClear=!0,i.setClearColor((ie=e.background)!=null&&ie.isColor?e.background.getHex():0,oe),i.clear();const I=e.background;e.background=null,i.render(e,t),e.background=I;let T=o.texture;if(S.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),C.copy(S).invert(),X&&k>0?(O&&(L.copy(S),O=!1),P.compose(w,z.setFromEuler(M),U),P.invert(),A.copy(L).multiply(P),y.uniforms.u_texture.value=o.texture,y.uniforms.u_depthTexture.value=o.depthTexture,y.uniforms.u_projectionViewInverseMatrix.value.copy(C),y.uniforms.u_prevProjectionViewMatrix.value.copy(A),y.uniforms.u_amount.value=k,Xe(y,a),T=a.texture,L.copy(S)):(L.copy(S),O=!0),Y<.05&&j<.005){p.uniforms.u_texture.value=T;for(let he=0;he<dr;he++)_[he]=0,p.uniforms[`u_blurTexture${he}`].value=T;p.uniforms.u_saturation.value=1,i.setRenderTarget(null),je(p,null),i.autoClear=be,i.setRenderTarget(ye);return}v.uniforms.u_texture.value=T,v.uniforms.u_amount.value=ue,v.uniforms.u_haloStrength.value=j,v.uniforms.u_haloWidth.value=we,v.uniforms.u_haloRGBShift.value=de,v.uniforms.u_haloMaskInner.value=ze,v.uniforms.u_haloMaskOuter.value=J,Xe(v,l);const V=s?3:dr;let Q=l;for(let he=0;he<V;he++){const ce=g[he];ce.uniforms.u_texture.value=Q.texture,ce.uniforms.u_resolution.value.set(Q.width,Q.height),ce.uniforms.u_direction.value=Ne,Xe(ce,c[he]),ce.uniforms.u_texture.value=c[he].texture,ce.uniforms.u_resolution.value.set(c[he].width,c[he].height),ce.uniforms.u_direction.value=Re,Xe(ce,u[he]),Q=u[he]}let ae=Y;if(!s){const he=We(ne/2)>>1,ce=We(ve/2)>>1,me=Math.max(1,Math.ceil(Math.log(he*ce)/Math.log(2)));ae=Y*1024/Math.pow(me,4)*.85*48}for(let he=0;he<dr;he++){if(he>=V){_[he]=0;continue}const ce=(V-he)/V;let me=ae*(ce+(1.2-ce*2)*q)/Math.pow(2,V-he-1);!s&&he===0&&(me*=.15),!s&&he===1&&(me*=.45),!s&&he>=3&&(me*=1.75),_[he]=me}p.uniforms.u_texture.value=T,p.uniforms.u_saturation.value=B;for(let he=0;he<dr;he++){const ce=he<V?u[he].texture:u[V-1].texture;p.uniforms[`u_blurTexture${he}`].value=ce}i.setRenderTarget(null),je(p,null),i.autoClear=be,i.setRenderTarget(ye)};return nt(r.x,r.y),{resize:nt,sync:F,render:ke,setEfxOffset:Fe,markEfxSync:Ze,setEfxAmount(ye){k=ye},get clearAlpha(){return oe},setEnabled(ye){le=!!ye},setScrollVelocity(ye){const be=Math.min(1,Math.abs(ye)*.12);E+=(be-E)*.12,p.uniforms.u_scrollPaint.value=E},destroy(){o.dispose(),a.dispose(),l.dispose(),c.forEach(ye=>ye.dispose()),u.forEach(ye=>ye.dispose()),v.dispose(),p.dispose(),y.dispose(),g.forEach(ye=>ye.dispose()),d.geometry.dispose()}}}function xy(i,e,t){return i+(e-i)*t}const _r=class _r{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<_r.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,s=r*r*(3-2*r),o=n&_r.MAX_VERTICES_MASK,a=o+1&_r.MAX_VERTICES_MASK;return xy(this._r[o],this._r[a],s)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let s=0;s<t;s++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ge(_r,"MAX_VERTICES",512),Ge(_r,"MAX_VERTICES_MASK",_r.MAX_VERTICES-1);let Ja=_r;const Ei=new W,Io=class Io{constructor(){this._position=new W,this._rotation=new Dn,this._euler=new ei,this._scale=new W(1,1,1),this._matrix=new xt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new W(1,1,1),this._rotationScale=new W(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Ja,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Ei.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Ei.multiply(this._positionScale),Ei.multiplyScalar(this._positionAmplitude*Io.FBM_NORM),this._position.copy(Ei)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Ei.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Ei.multiply(this._rotationScale),Ei.multiplyScalar(this._rotationAmplitude*Io.FBM_NORM),this._euler.set(Ei.x,Ei.y,Ei.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ge(Io,"FBM_NORM",1/.75);let Lo=Io;class ru{constructor(e,t=1.5,n=.8,r=2,s=!0){this.isRobust=s,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,s=e/(1+r-n);this._k1Stable=(1-r)*s,this._k2Stable=e*s}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const yf=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],Sy=26,Xr=64,yy=34,mo=new rt(1465,1024),My=`
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
`,wy=`
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
`,Ey=`
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
`,by=`
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
`,ba=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function Ty(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function Ay(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",s=t?yy:Sy,[o,a]=await Promise.all([new pr().loadAsync(`${e}assets/textures/tunnels/${r}`),Hn(`${e}assets/models/tunnels/diamond.buf`)]);o.colorSpace=wn,o.flipY=!1,o.needsUpdate=!0;const l=new Pi;i.add(l);const c=new Si(1,1),u=new Jr;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const f=new Float32Array(s),d=new Float32Array(s*4),m=new Float32Array(s*4);for(let M=0,U=0;M<s;M++,U+=4){f[M]=M/s;const z=yf[M%yf.length];d[U]=z.x/mo.x,d[U+1]=z.y/mo.y,d[U+2]=z.w/mo.x,d[U+3]=z.h/mo.y,m[U]=Math.random(),m[U+1]=Math.random(),m[U+2]=Math.random(),m[U+3]=Math.random()}u.setAttribute("instanceId",new mn(f,1)),u.setAttribute("instanceUvInfo",new mn(d,4)),u.setAttribute("instanceRands",new mn(m,4)),u.instanceCount=s;const v=new Ct({vertexShader:My,fragmentShader:wy,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:o},u_textureSize:{value:mo.clone()},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Vo,blendEquation:bn,blendSrc:Os,blendDst:zs,blendEquationAlpha:bn,blendSrcAlpha:Ia,blendDstAlpha:Ia,defines:{COUNT:s}}),g=new kt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new Jr;for(const M in a.attributes)_.setAttribute(M,a.attributes[M]);a.index&&(_.index=a.index);const p=Ty("diamonds-3"),E=new Float32Array(Xr*3),y=new Float32Array(Xr*3),S=new Float32Array(Xr*4),L=new W;for(let M=0,U=0,z=0;M<Xr;M++,U+=3,z+=4)E[U]=16*(p()*2-1),E[U+1]=16*(p()*2-1),E[U+2]=19-(Xr-M-1)/(Xr-1)*8,L.set(p()*2-1,p()*2-1,p()*2-1).normalize(),y[U]=L.x,y[U+1]=L.y,y[U+2]=L.z,S[z]=p(),S[z+1]=p(),S[z+2]=p(),S[z+3]=p();_.setAttribute("a_instancePosition",new mn(E,3)),_.setAttribute("a_instanceRotationAxis",new mn(y,3)),_.setAttribute("a_instanceRand",new mn(S,4)),_.instanceCount=Xr;const C=[];for(let M=0;M<25;M++)C.push(new Dt(ba[M*4],ba[M*4+1],ba[M*4+2],ba[M*4+3]));const A=new Ct({vertexShader:Ey,fragmentShader:by,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Je("#689aff")},u_planes:{value:C},u_bgColor:{value:new Je(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Vo,blendEquation:bn,blendSrc:oi,blendDst:Ia,blendEquationAlpha:bn,blendSrcAlpha:oi,blendDstAlpha:oi}),P=new kt(_,A);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,A.blending=wr,A.blendSrc=Os,A.blendDst=zs,A.blendSrcAlpha=Os,A.blendDstAlpha=zs,l.add(P),g.renderOrder=15;const w=new Je(0);return{update({whiteTunnelWaitRatio:M=0,aspect:U=1,bg:z="#000000"}={}){const O=xe(M,0,.12,0,1),k=O>0;l.visible=k,g.visible=k,P.visible=k,v.uniforms.u_activeRatio.value=O,A.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=U,A.uniforms.u_aspect.value=U,w.set(z),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),o.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const _o=53,Ta=16,Aa=20,Mf=["helmet","helmet_glass","glove_shoes","wearpack"],go=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Jl=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function wf(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Ef(i,e){const[t,n]=await Promise.all([wf(i),wf(e)]),r=t.width,s=t.height,o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,s);const l=a.getImageData(0,0,r,s).data;a.clearRect(0,0,r,s),a.drawImage(t,0,0,r,s);const c=a.getImageData(0,0,r,s).data,u=new Uint8Array(r*s*4);for(let d=0;d<u.length;d+=4)u[d]=c[d],u[d+1]=c[d+1],u[d+2]=c[d+2],u[d+3]=l[d];const f=new zu(u,r,s,xn,Ii);return f.colorSpace=en,f.flipY=!1,f.generateMipmaps=!1,f.minFilter=mt,f.magFilter=mt,f.wrapS=Zn,f.wrapT=Zn,f.needsUpdate=!0,f}function bf(i,e,t){const n=new zu(i,e,t,xn,$n);return n.magFilter=an,n.minFilter=an,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Ql(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new mn(t,3)}const Ra=`
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
`;async function Ry(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,u,f,d,m,v,g,_,p,E,...y]=await Promise.all([Hn(`${r}assets/models/tunnels/astronaut_animations.buf`),Hn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Hn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new pr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new pr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new pr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Hn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Hn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Hn(`${r}assets/models/tunnels/grid_base_ld.buf`),Hn(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?Hn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?Hn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new pr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...Mf.map(Ee=>Hn(`${r}assets/models/tunnels/astronaut_${Ee}.buf`))]),S=new Yo;S.background=new Je(0);const L=new W(0,0,25),C=new W(0,0,24),A=45,P=new Pn(A,1,1,200);P.position.copy(L),P.lookAt(C);let w;try{w=new ol({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(Ee){throw console.error("Goal WebGL unavailable",Ee),Ee}w.setClearColor(0,1),w.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.35)),w.outputColorSpace=Ui,w.toneMapping=Li,w.autoClear=!0,c.colorSpace=en,c.generateMipmaps=!1,c.minFilter=mt,c.magFilter=mt,u.colorSpace=en,u.generateMipmaps=!1,u.minFilter=mt,u.magFilter=mt,f.colorSpace=en,f.wrapS=f.wrapT=Bs,f.generateMipmaps=!1,f.minFilter=mt,f.magFilter=mt;const M=o.attributes.position.array,U=o.attributes.orient.array,z=M.length/3,O=z/_o,k=Math.ceil(Math.sqrt(z)),X=Math.ceil(z/k),Y=k*X,q=new Float32Array(Y*4),B=new Float32Array(Y*4);for(let Ee=0,Ve=0,Pe=0;Ee<z;Ee++,Ve+=3,Pe+=4)q[Pe]=M[Ve],q[Pe+1]=M[Ve+1],q[Pe+2]=M[Ve+2],q[Pe+3]=1,B[Pe]=U[Pe],B[Pe+1]=U[Pe+1],B[Pe+2]=U[Pe+2],B[Pe+3]=U[Pe+3];const ue=bf(q,k,X),j=bf(B,k,X),de=new mn(new Float32Array([0,0,18]),3);de.setUsage(sr);const we=new mn(new Float32Array([0,0,0,1]),4);we.setUsage(sr);const ze=new mn(new Float32Array([0,1,0]),3);ze.setUsage(sr);const J=new mn(new Float32Array([90,91,0]),3);J.setUsage(sr);const oe=()=>{const Ee=new Qi(1,1,{minFilter:Yi,magFilter:mt,format:xn,generateMipmaps:!0});return Ee.texture.wrapS=Ee.texture.wrapT=Za,Ee},le=oe(),ne=oe();let ve=le,Ne=ne;const Re={u_animationPositionTexture:{value:ue},u_animationOrientTexture:{value:j},u_animationTextureSize:{value:new rt(k,X)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Je("#566d80")},u_bgColor:{value:new Je("#000000")},u_sunPosition:{value:new W(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Je(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Je("#aaaafb")},u_cardPosition:{value:new W}},je={u_blackTunnelTexture:{value:ve.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},We={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async Ee=>{const[Ve,Pe]=await Promise.all([Ef(`${r}assets/textures/tunnels/astronaut/astronaut_${Ee}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${Ee}_base.webp`),new pr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${Ee}_nor.webp`)]);Pe.colorSpace=en,Pe.flipY=!1,Pe.generateMipmaps=!1,Pe.minFilter=mt,Pe.magFilter=mt,We[Ee]={armb:Ve,nor:Pe}})),We.helmet_glass=We.helmet;const nt=new Pi;S.add(nt);const F=[],Fe=4,Ze=new mn(new Float32Array(Fe*3),3);Ze.setUsage(sr);const Xe=new mn(new Float32Array(Fe*4),4);Xe.setUsage(sr);const ke=new mn(new Float32Array(Fe*3),3);ke.setUsage(sr);const ye=new mn(new Float32Array(Fe*3),3);ye.setUsage(sr);for(let Ee=0;Ee<Fe;Ee++)Xe.setXYZW(Ee,0,0,0,1),ke.setXYZ(Ee,0,1,0),ye.setXYZ(Ee,90,91,0);const be=[];let I=0;const T={value:0};Mf.forEach((Ee,Ve)=>{const Pe=y[Ve],et=new Jr;for(const Jt in Pe.attributes)et.setAttribute(Jt,Pe.attributes[Jt]);Pe.index&&et.setIndex(Pe.index),et.instanceCount=1,et.setAttribute("instancePos",de),et.setAttribute("instanceOrient",we),et.setAttribute("instanceAnimationFrameFromToBlend1",ze),et.setAttribute("instanceAnimationFrameFromToBlend2",J);const dt=Ee==="helmet_glass"||Ee==="card"?"helmet":Ee,Rt=Ee==="helmet_glass",gt={...Re,u_armbTexture:{value:We[dt].armb},u_norTexture:{value:We[dt].nor}},Lt={...Re,...je,u_armbTexture:{value:We[dt].armb},u_norTexture:{value:We[dt].nor}},rn=new Ct({uniforms:gt,vertexShader:Ra,fragmentShader:fy,transparent:!0,blending:xi,side:En,defines:{BONE_COUNT:_o,IS_WHITE:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Rn=new Ct({uniforms:Lt,vertexShader:Ra,fragmentShader:Sf,transparent:!0,blending:xi,side:En,defines:{BONE_COUNT:_o,IS_BLACK:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Cn=new kt(et,rn);if(Cn.frustumCulled=!1,Cn.userData.whiteMat=rn,Cn.userData.blackMat=Rn,nt.add(Cn),F.push(Cn),!Rt){const Jt=new Jr;for(const wi in Pe.attributes)Jt.setAttribute(wi,Pe.attributes[wi]);Pe.index&&Jt.setIndex(Pe.index),Jt.instanceCount=Fe,Jt.setAttribute("instancePos",Ze),Jt.setAttribute("instanceOrient",Xe),Jt.setAttribute("instanceAnimationFrameFromToBlend1",ke),Jt.setAttribute("instanceAnimationFrameFromToBlend2",ye);const ii=new Ct({uniforms:{...Lt,u_armbTexture:{value:We[dt].armb},u_norTexture:{value:We[dt].nor},u_alpha:T},vertexShader:Ra,fragmentShader:Sf,transparent:!0,depthWrite:!1,depthTest:!1,blending:Vo,blendEquation:bn,blendSrc:oi,blendDst:oi,blendEquationAlpha:bn,blendSrcAlpha:oi,blendDstAlpha:oi,side:En,defines:{BONE_COUNT:_o,IS_BLACK:!0,IS_CLONE:!0}}),sn=new kt(Jt,ii);sn.frustumCulled=!1,sn.renderOrder=1e3,sn.visible=!1,nt.add(sn),be.push(sn)}});const V=new rt(5,23),Q=new Ja;let ae=0,ie=!1;const he=document.createElement("canvas");he.width=he.height=11;{const Ee=he.getContext("2d");Ee.fillStyle="#000",Ee.fillRect(0,0,11,11),Ee.fillStyle="#f00",Ee.fillRect(1,1,3,9),Ee.fillStyle="#0f0",Ee.fillRect(4,1,3,9),Ee.fillStyle="#00f",Ee.fillRect(7,1,3,9)}const ce=new M1(he);ce.needsUpdate=!0,ce.minFilter=mt,ce.magFilter=mt;const me=await new pr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);me.minFilter=an,me.magFilter=an,me.colorSpace=en,me.flipY=!1;const $e=new Si(.2,.15).translate(0,1.68,.1);$e.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),$e.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),$e.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),$e.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const ge=new Jr;for(const Ee in $e.attributes)ge.setAttribute(Ee,$e.attributes[Ee]);$e.index&&ge.setIndex($e.index),ge.instanceCount=1,ge.setAttribute("instancePos",de),ge.setAttribute("instanceOrient",we),ge.setAttribute("instanceAnimationFrameFromToBlend1",ze),ge.setAttribute("instanceAnimationFrameFromToBlend2",J);const De=new Ct({uniforms:{...Re,u_cardLedTexture:{value:ce},u_cardTexture:{value:me},u_cardColor:{value:new Je("#ddddff")},u_cardUvOffset:{value:new rt(0,0)},u_cardTextureSize:{value:V},u_cardOpacity:{value:0}},vertexShader:Ra,fragmentShader:dy,transparent:!0,depthTest:!1,depthWrite:!1,side:En,blending:Vo,blendEquation:bn,blendSrc:oi,blendDst:oi,blendEquationAlpha:bn,blendSrcAlpha:oi,blendDstAlpha:oi,defines:{BONE_COUNT:_o}}),Oe=new kt(ge,De);Oe.frustumCulled=!1,Oe.renderOrder=100,Oe.visible=!1,nt.add(Oe);const Be=new Pi;S.add(Be);const Ce=new Lo;Ce.positionAmplitude=2,Ce.positionFrequency=1,Ce._enableRotationNoise=!1;const Qe=Ce.position;let He=0,qe=1,H=typeof window<"u"?window.scrollY:0,ee=1;const re=(Ee,Ve)=>{const Pe=new Jr;for(const gt in Ee.attributes)Pe.setAttribute(gt,Ee.attributes[gt]);Ee.index&&Pe.setIndex(Ee.index);const et=new Float32Array(Ta);for(let gt=0;gt<Ta;gt++)et[gt]=gt;Pe.setAttribute("a_instanceId",new mn(et,1)),Pe.instanceCount=Ta;const dt=new Ct({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:Qe},u_time:{value:0}},vertexShader:uy,fragmentShader:hy,transparent:!0,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ta,...Ve?{IS_WALL:!0}:{}}}),Rt=new kt(Pe,dt);return Rt.frustumCulled=!1,Be.add(Rt),dt},fe=re(d,!1),Le=re(m,!0),Ie=await Ay(S,{base:r,isMobile:n,sharedTime:Re.u_time}),st=new Ct({uniforms:{u_color:{value:new Je(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:xi}),Mt=new kt(new Si(200,200),st);Mt.position.z=-80,Mt.renderOrder=-10,S.add(Mt);const Pt=new Pi;S.add(Pt);const _t=await Ef(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);_t.wrapS=_t.wrapT=Bs,E.colorSpace=en,E.flipY=!1,E.wrapS=E.wrapT=Bs;const wt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:ve.texture},u_greebleArmbTexture:{value:_t},u_greebleNormalTexture:{value:E},u_resolution:{value:new rt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new W(0,70,0)},u_color1:{value:new Je(go[0])},u_color2:{value:new Je(Jl[0])}},Tn=(Ee,Ve,Pe)=>{const et=new Jr;for(const Lt in Ee.attributes)et.setAttribute(Lt,Ee.attributes[Lt]);Ee.index&&et.setIndex(Ee.index);const dt=Ee.attributes.position.count;et.getAttribute("ao")||et.setAttribute("ao",new Xt(new Float32Array(dt).fill(1),1)),et.getAttribute("areaRatio")||et.setAttribute("areaRatio",new Xt(new Float32Array(dt),1)),et.getAttribute("height")||et.setAttribute("height",new Xt(new Float32Array(dt).fill(1),1)),et.getAttribute("cluster")||et.setAttribute("cluster",new Xt(new Float32Array(dt),1)),et.setAttribute("instancePos",Ql(Ve.attributes.position)),et.setAttribute("instanceGridIds",Ql(Ve.attributes.gridIds)),et.setAttribute("instanceAxis",Ql(Ve.attributes.rotAxis)),et.instanceCount=Ve.attributes.position.count;const Rt=new Ct({uniforms:wt,vertexShader:ly,fragmentShader:cy,side:En,transparent:!1,depthWrite:!0,blending:wr,defines:{GRID_SIZE:Aa,...Pe?{IS_HD:!0}:{}}}),gt=new kt(et,Rt);return gt.frustumCulled=!1,gt.renderOrder=Pe?2:1,Pt.add(gt),gt};Tn(v,g,!1),s&&_&&p&&Tn(_,p,!0);let Cr=0,Pr=0,cn=0,tr=A,nr=0,Lr=-80,yi=0;const Ut=new Lo;Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0;const Mi=new ru(new W,1,.65,1.3),ui=new ru(new W,1,.85,1.1),Dr=Array.from({length:Fe},()=>{const Ee=new Lo;return Ee.positionFrequency=.2,Ee.rotationFrequency=.6,Ee.positionAmplitude=12,Ee.rotationAmplitude=10,Ee}),cs=Float32Array.from({length:Fe+1},(Ee,Ve)=>Ve===0?0:Math.random()*2),ti=new Float32Array(Fe),hi=new Float32Array(Fe),h=new W,x=new Dn,b=new xt,R=new xt,D=new W,N=new W,G=new Dn,te=new ei,Z=new W(1,1,1),$=new Je,K=new Je,se=new W,_e=new W;let Se=0,Ae=0,Te=0,Me=0,pe=.08;const lt=.1;let Ye=!1,yt=0,pt=0,tt=0;window.addEventListener("pointermove",Ee=>{Se=Ee.clientX/Math.max(window.innerWidth,1)*2-1,Ae=Ee.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ye=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ye=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ye=!1},{passive:!0});const Et=()=>{P.near=1,P.far=200,P.position.copy(L),P.up.set(0,1,0),P.lookAt(C),P.fov=tr,se.set(0,0,-1).applyQuaternion(P.quaternion);let Ee=_e.copy(C).sub(P.position).dot(se);const Ve=P.fov,Pe=Ve+cn,et=Math.max(1,Math.min(170,Pe));let dt=Ee*Math.tan(Ve/360*Math.PI/2)/Math.tan(et/360*Math.PI/2)-Ee;Number.isFinite(dt)||(dt=0),P.translateZ(dt),P.fov=Ve,Ee+=dt,P.translateZ(Ee*-1);const Rt=n?pe*.35:pe,gt=Math.max(-1,Math.min(1,Ae))*Rt,Lt=Math.max(-1,Math.min(1,-Se))*Rt;Te+=(gt-Te)*lt,Me+=(Lt-Me)*lt,te.set(Te,Me,0),G.setFromEuler(te),P.quaternion.multiply(G),P.translateZ(Ee),P.updateProjectionMatrix()},ut=Ee=>{if(Ut.update(Ee),Mi.update(Ee,Ut.position),D.copy(Ut.euler),ui.update(Ee,D),te.set(ui.value.x,ui.value.y,ui.value.z),G.setFromEuler(te),R.compose(Mi.value,G,Z),b.compose(h,x,Z),b.multiply(R),b.decompose(D,G,N),de.setXYZ(0,D.x,D.y,D.z),we.setXYZW(0,G.x,G.y,G.z,G.w),de.needsUpdate=!0,we.needsUpdate=!0,ll=1+Math.min(3.5,Mi.valueVel.length()*.2+ui.valueVel.length()*.2),I>.01&&!$t&&!Ur){for(let Ve=0;Ve<Fe;Ve++){const Pe=Dr[Ve];Pe.positionFrequency=.2,Pe.rotationFrequency=.6,Pe.positionAmplitude=12,Pe.rotationAmplitude=10,Pe.update(Ee),b.compose(h,x,Z),b.multiply(Pe.matrix),b.decompose(D,G,N);const et=Ve/Math.max(Fe-1,1),dt=xe(I,et*.3,.7+et*.3,1,0,iy);N.set(de.getX(0),de.getY(0),de.getZ(0)),D.lerp(N,dt),Ze.setXYZ(Ve,D.x,D.y,D.z),Xe.setXYZW(Ve,G.x,G.y,G.z,G.w)}Ze.needsUpdate=!0,Xe.needsUpdate=!0}},ot=i.parentElement||e,it=vp(e);let Ke=0,Nt=0,Ot=0,at=0,An=0,al=0,Ir=0,Bu=0,us=0,ni=0,ku=0,Ur=!0,un=!1,$t=!1,so=0,ir=0,ll=1,cl=0,Hu=performance.now(),jo=!1,Vu=!1;const nn=vy(w,S,P,{isMobile:n}),oo=()=>{const Ee=ot,Ve=Ee.clientWidth||window.innerWidth,Pe=Ee.clientHeight||window.innerHeight;P.aspect=Ve/Math.max(Pe,1),Et(),w.setSize(Ve,Pe,!1),nn.resize(Ve,Pe),wt.u_resolution.value.set(Ve,Pe);const et=Math.max(1,Math.floor(Ve*.25)),dt=Math.max(1,Math.floor(Pe*.25));(le.width!==et||le.height!==dt)&&(le.setSize(et,dt),ne.setSize(et,dt))};oo(),window.addEventListener("resize",oo);const Gu=(Ee,Ve,Pe=100)=>{const et=Ee.attributes.position.array,dt=Ee.attributes.orient.array,Rt=Math.min(Math.floor(Ve),Pe-1),gt=Math.min(Math.ceil(Ve),Pe-1),Lt=Ve-Math.floor(Ve),rn=new W().fromArray(et,Rt*3).lerp(new W().fromArray(et,gt*3),Lt),Rn=new Dn().fromArray(dt,Rt*4).slerp(new Dn().fromArray(dt,gt*4),Lt);return{p:rn,q:Rn}},Jo=()=>{var fs;if(!e)return;const Ee=window.innerHeight,Ve=window.scrollY||0;Ve!==H&&(ee=Ve>H?1:-1,H=Ve),An=it.range("blackFrameIn").ratio,Ot=it.range("blackTitle").ratio,at=it.range("blackTunnel").ratio,Ir=it.range("whiteTunnel").ratio,Ke=it.between("whiteTunnel","whiteFrameOut").ratio,Bu=it.range("whiteFrameOut").ratio,al=it.range("whiteFrameBreak").ratio,ku=it.between("whiteTunnel","whiteFrameBreak").ratio,ni=it.between("whiteFrameBreak","astronautDrop").ratio,us=((fs=it.range("astronautWait"))==null?void 0:fs.ratio)??0,tt=it.between("whiteFrameBreak","astronautWait").ratio,Ur=Ot<1,un=at<1&&!Ur,$t=Ke<=1&&!un&&!Ur,Nt=$t?_i(0,.15,ku):1,nn.sync({blackFrameInRatio:An,blackTitleRatio:Ot,blackTunnelRatio:at,whiteFrameRatio:Ir,whiteTunnelWaitRatio:us,astronautDropRatio:ni,isWhiteTunnelActive:$t,isBlackTunnelActive:un,isMobile:n}),Re.u_whiteTunnelRatio.value=Ke,Re.u_showRatio.value=Nt,Re.u_frameOutRatio.value=al,fe.uniforms.u_ratio.value=Ke,Le.uniforms.u_ratio.value=Ke,fe.uniforms.u_ratioInverse.value=1-Ke,Le.uniforms.u_ratioInverse.value=1-Ke,Re.u_ambientColor.value.set($t&&ni<1?"#9eb4c8":"#566d80");const Pe=new Je($t&&ni<1?"#ffffff":"#000000");st.uniforms.u_color.value.copy(Pe),S.background=null,w.setClearColor(Pe,nn.clearAlpha),Re.u_bgColor.value.copy(Pe),ot&&(ot.style.background=Pe.getStyle()),$t&&ni<1?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):un||Ur?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Be.visible=$t&&ni<1,Pt.visible=un;const et=document.getElementById("header");et&&((ot==null?void 0:ot.classList.contains("is-pinned"))?$t&&ni<1?et.style.color="#000000":et.style.color="#ffffff":et.style.color="");const dt=e.dataset.goalPhase==="black-tunnel",Rt=e.dataset.goalPhase==="white";(un&&!dt||$t&&!Rt)&&nn.markEfxSync();const gt=$t;for(const hn of F){const ao=gt?hn.userData.whiteMat:hn.userData.blackMat;hn.material!==ao&&(hn.material=ao)}I=un?_i(.2,.4,at):0,T.value=I;for(const hn of be)hn.visible=!$t&&I>.01;let Lt;if($t){const hn=Ke<1?xe(Ke,0,1,0,79):xe(ni,0,1,79,99);Lt=Gu(l,hn,100),Lt.p.y-=(n?0:.4)*ay(ni)}else Lt=Gu(a,100*iu(Math.min(Ot,1)),100);if(h.copy(Lt.p),x.copy(Lt.q),Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0,un){const hn=at;Ut.positionFrequency=.2+.5*hn,Ut.rotationFrequency=.15,Ut.positionAmplitude=5*hn,Ut.rotationAmplitude=60*hn}else $t&&(Ut.positionFrequency=xe(Ir,0,.45,.5,.2),Ut.rotationFrequency=xe(Ir,0,.45,.4,.15),Ut.positionAmplitude=xe(Ir,0,.75,5,0),Ut.rotationAmplitude=xe(Ir,0,.75,15,0));nt.visible=Nt>.02;const rn=window.innerHeight||1,Rn=Math.max(1,(ot==null?void 0:ot.clientHeight)||rn),Cn=An<1?An:1-Ir,Jt=Yt.lerp(Rn*(n?.72:.55),rn,Cn),ii=L.distanceTo(C),sn=A/180*Math.PI,wi=Math.tan(sn/2)*ii*2*(rn/Math.max(Jt,1));tr=Math.atan(wi/2/ii)*2/Math.PI*180,$t?cn=xe(Ke,0,1,n?36:60,0):un?(cn=Math.sin(at*10+He)*(n?4.5:7.5)*_i(0,.2,at),Pt.position.z=-80*Kr(.2,0,at)):(cn=xe(An,0,1,n?12:20,0),Pt.position.z=-80),pe=.08*_i(.5,1,Ot)+.02,Ke>0&&(pe*=xe(it.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),pe=xe(us,0,.1,pe,.05),pt=(1-yt)*ee*2.5*xe(An,0,.5,0,1)*xe(us,0,.25,1,0),Et(),je.u_frameIn.value=An,je.u_sunFactor.value=un?1-_i(.1,.2,at):1,je.u_blackTunnelRatio.value=un?_i(.1,.3,at):0,je.u_endRatio.value=un?_i(.65,.9,at):0,je.u_offsetZ.value=wt.u_offsetZ.value;const hs=xe(ni,1,0,.2,1)*(al>0?1:0);Re.u_tintColor.value.setStyle("#2533c2").multiplyScalar(hs);const Ni=ot.getBoundingClientRect();jo=Ni.bottom>0&&Ni.top<Ee,jo&&!Vu&&Ur&&(so=0,ir=0),Vu=jo,e.dataset.goalPhase=$t?"white":un?"black-tunnel":"title"},bp=Ee=>{if(!un){wt.u_showRatio.value=0,nn.setEfxOffset(0,0);return}wt.u_showRatio.value=ty(Kr(0,.1,at));const Ve=wt.u_outBloomFromToStrength.value;Ve.z=xe(at,.65,.75,0,.2),Ve.z=xe(at,.75,.85,Ve.z,.15),Ve.z=xe(at,.85,1,Ve.z,.15),Ve.x=xe(at,.75,.85,20,60),Ve.x=xe(at,.9,1,Ve.x,30);const Pe=xe(at,.6,1,0,1,jl);wt.u_blackTunnelTransformRatio.value=Pe;const et=ee*Ee;Cr+=et*Kr(.1,.3,at)*xe(Pe,0,.25,1,.5),Pr+=et*xe(Pe,0,.25,1.5,1);const dt=Cr,Rt=Math.floor(dt),gt=dt-Rt,Lt=(Rt+gp(gt))*Aa+Pr*Aa+at*Aa*10,rn=-80*Kr(.2,0,at);let Rn=rn-Lr,Cn=Lt-nr;(Math.abs(Cn)>8||Math.abs(Rn)>20)&&(Cn=0,Rn=0),yi=Rn+Cn,Lr=rn,nr=Lt,Pt.position.z=rn,wt.u_offsetZ.value=Lt,je.u_offsetZ.value=Lt,wt.u_time.value=He;const Jt=go.length*xe(at,.2,1,0,1),ii=Math.floor(Jt),sn=Math.min(Math.ceil(Jt),go.length-1),hs=Jt-ii>.5?1:0;$.set(go[ii]),K.set(go[sn]),$.lerp(K,hs),wt.u_color1.value.copy($),$.set(Jl[ii]),K.set(Jl[sn]),$.lerp(K,hs),wt.u_color2.value.copy($);const Ni=n?.45:1;nn.setEfxOffset(yi*xe(at,0,.2,0,1)*Ni,yi*Pe*.01*Ni),nn.setEfxAmount(xe(at,0,.25,.35,.85)*(n?.35:1)),cn=Math.sin(at*10+He)*(n?4.5:7.5)*_i(0,.2,at)};let ul=0;const Tp=Ee=>{if(!$t){Ie.update({whiteTunnelWaitRatio:0,aspect:P.aspect}),ul=Ke;return}Ce.update(Ee),fe.uniforms.u_time.value=He,Le.uniforms.u_time.value=He,fe.uniforms.u_fbm.value=Qe,Le.uniforms.u_fbm.value=Qe;let Ve=Ke-ul;Math.abs(Ve)>.08&&(Ve=0);const Pe=n?.4:1,et=Yt.clamp(-Ve*xe(Ke,0,.9,500,0,jl)*Pe,-1,1),dt=Yt.clamp(-Ve*xe(Ke,0,.8,45,0,jl)*Pe,-1,1);nn.setEfxOffset(et,dt),nn.setEfxAmount(xe(Ke,.75,1,1,0)*(n?.5:1)),ul=Ke;const Rt=$t&&ni<1?"#ffffff":"#000000",gt=n?Math.max(P.aspect,.95):Math.max(P.aspect,.01);Ie.update({whiteTunnelWaitRatio:us,aspect:gt,bg:Rt})},Wu=()=>Jo();window.addEventListener("scroll",Wu,{passive:!0}),Jo();const Xu=Ee=>{var Zu;const Ve=Math.min(.05,Math.max(0,Ee||.016666666666666666));if(Hu=performance.now(),!jo){if(ot){const Vt=ot.getBoundingClientRect();Vt.bottom>0&&Vt.top<window.innerHeight&&nn.render()}return}yt+=((Ye?1:0)-yt)*.1,qe=xe(yt,0,1,1,.3)*Ve,qe=xe(An,0,1,Ve,qe),qe=xe(tt,.5,.75,qe,Ve),He+=qe,Re.u_time.value=He,pt=(1-yt)*ee*2.5*xe(An,0,.5,0,1)*xe(us,0,.25,1,0),bp(qe),Tp(qe),ut(qe),un&&(cn=Math.sin(at*10+He)*7.5*_i(0,.2,at)),Et();const Pe=ni,et=xe(Pe,0,.1,0,1)*xe(Pe,.9,1,1,0);Re.u_loopLinearBlend.value=et;const dt=xe(Pe,.9,1,0,1,iu);ie=dt>0;let Rt,gt,Lt,rn=!0;if(Pe<.5)ir=0,Rt=Ot<.08?_i(-.3,1,Ot)*.25:_i(-.3,1,Ot)*.75,gt=0,Lt=89,De.uniforms.u_cardOpacity.value=0;else{Rt=xe(Pe,.9,1,0,1),gt=140,Lt=Math.min(O-1,287);const Vt=Math.min(2,Math.max(0,.5+Math.max(0,Q.getFbm(He*8,3)+.5)*4));De.uniforms.u_cardOpacity.value=Vt*dt,Pe<1?(ir=Math.max(0,ir),rn=!1):ir=0}ir===0&&(so+=qe*Rt*ll),et===1&&(so=0);const Rn=Lt-gt+1,Cn=cs[0];let ii=(Cn+so)*60%Rn,sn=Math.floor(ii),wi=(sn+1)%Rn+gt;sn+=gt,wi<sn&&(rn||(wi=sn=gt,so=-Cn,ir=Number.POSITIVE_INFINITY));const hs=ii-Math.floor(ii);ze.setXYZ(0,sn,wi,rn||wi>=sn?hs:0),ze.needsUpdate=!0;const Ni=xe(Bu+Pe,.9,2,90,139,oy),fs=Math.floor(Ni),hn=Math.ceil(Ni),ao=Ni-fs;J.setXYZ(0,fs,hn,ao),J.needsUpdate=!0,Oe.visible=Pe>=.95&&Nt>.02,ae=ie?ae+qe:0;{const Vt=V.x,Nr=V.y,Qo=Math.floor(10*ae%(Vt*(Nr+1))),ds=Qo/(Vt*(Nr+1)),Fr=Kr(0,.15,ds)*Kr(1,.9,ds);Re.u_faceLedLight.value=Fr,De.uniforms.u_cardUvOffset.value.set(Qo%Vt/Vt,(Nr-Math.floor(Qo/Vt))/Nr)}if(Re.u_cardPosition.value.set(de.getX(0),de.getY(0)+.9,de.getZ(0)),I>.01&&!$t&&!Ur){for(let Vt=0;Vt<Fe;Vt++){ti[Vt]=(ti[Vt]+.2*qe)%1,ir===0&&(hi[Vt]+=qe*Rt*ll);const ds=(Yt.lerp(0,cs[Vt+1],I)+hi[Vt])*60%Rn;let Fr=Math.floor(ds),hl=(Fr+1)%Rn+gt;Fr+=gt,hl<Fr&&!rn&&(hl=Fr=gt);const Rp=ds-Math.floor(ds);ke.setXYZ(Vt,Fr,hl,Rp),ye.setXYZ(Vt,fs,hn,ao)}ke.needsUpdate=!0,ye.needsUpdate=!0}if((Zu=nn.setScrollVelocity)==null||Zu.call(nn,Math.abs(pt)+Math.abs(ee)*.5),un){const Vt=wt.u_resolution.value.clone();Be.visible=!1,Mt.visible=!1,nt.visible=Nt>.02,wt.u_feedbackTexture.value=ve.texture,wt.u_resolution.value.set(Ne.width,Ne.height),w.setRenderTarget(Ne),w.setClearColor(0,0),w.clear(),w.render(S,P),w.setRenderTarget(null),wt.u_resolution.value.copy(Vt);const Nr=ve;ve=Ne,Ne=Nr,wt.u_feedbackTexture.value=ve.texture,je.u_blackTunnelTexture.value=ve.texture,Mt.visible=!0}w.setClearColor(Re.u_bgColor.value,nn.clearAlpha),nn.render()},qu=Ee=>{cl=requestAnimationFrame(qu);const Ve=Math.min(.05,(Ee-Hu)/1e3);Ee-Yu>50&&Xu(Ve)};let Yu=0;const Ap=Ee=>{Yu=performance.now(),Xu(Ee)};return cl=requestAnimationFrame(qu),requestAnimationFrame(()=>{oo(),Jo(),nn.render()}),{resize:oo,updateScroll:Jo,tickFrame:Ap,getAutoScrollSpeed:()=>pt,destroy(){cancelAnimationFrame(cl),window.removeEventListener("resize",oo),window.removeEventListener("scroll",Wu),le.dispose(),ne.dispose(),nn.destroy(),w.dispose()}}}function Cy(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=vp(i),s=()=>window.innerWidth<812,o=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const E=Array.from(p.querySelectorAll(".goal-word"));if(E.length<2){E.forEach(C=>{C._offsetX=0});return}E.forEach(C=>{C.style.transform="translateZ(0)"});let y=g;E.forEach(C=>{const A=C.getBoundingClientRect();C._domRect=A,y-=A.width});let S=0;const L=y/(E.length-1);E.forEach(C=>{C._offsetX=-C._domRect.left+_+S,S+=C._domRect.width+L})})};c(),window.addEventListener("resize",c);let u=null,f=null,d=null;t&&t.parentElement&&(f=t.parentElement,d=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,E=xe(_,0,.25,0,1);r.progress();const y=window.innerHeight;if(t){const w=i.getBoundingClientRect(),M=window.scrollY||0,z=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+M,O=M>=z-1&&w.bottom>y,k=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",O),u&&(u.style.height=O?`${y}px`:"0px"),O&&!k?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!O&&k&&f&&(d&&d.parentNode===f?f.insertBefore(t,d):u&&u.parentNode===f?f.insertBefore(t,u.nextSibling):f.appendChild(t),window.dispatchEvent(new Event("resize"))),t.style.background=E>.05||_>.01?"#ffffff":"#000000"}let S=xe(v,a,l,0,1);const L=S>0&&S<1;let C=xe(S,.5,1,1,s()?9:12,iu);C*=xe(S,0,.15,.85,1,sy);let A=xe(S,.9,1,1,0);A*=xe(S,0,.05,0,1),A*=xe(g,0,.12,1,0);const P=xe(S,.4,.6,0,1,gp);if(e.classList.toggle("is-on-black",E<.5),e.style.opacity=String(A),e.style.transform=`translate3d(-50%, -50%, 0) scale(${C})`,e.style.visibility=L&&A>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(w=>{const M=w._offsetX||0;w.style.transform=`translateX(${P*M}px)`}),o){const w=xe(g,.02,.15,1,0);o.style.opacity=String(w),o.style.transform="none"}return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:E}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Ca(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function Py(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function qr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function Ly(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=qr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=qr(document.getElementById("home-reel-desc"),2),l=qr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],m=0,v=[],g=!0;const _=()=>{d.forEach(j=>{j.style.transform="translate3d(0, 100%, 0)"}),v.forEach(j=>{j.style.transform="translate3d(0, 100%, 0)",j.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(j=>{j.style.overflow="hidden",j.style.display="block",j.style.position="relative"}),d=[...Ca(r,"word"),...Ca(s,"word")],d.forEach(j=>{j.style.position="relative",j.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Ca(a,"word"),a.style.overflow="hidden"),_())})();const E=document.getElementById("home-featured"),y=qr(document.getElementById("home-featured-title"),2),S=qr(document.getElementById("home-featured-disclaimer"),2),L=qr(document.getElementById("home-featured-cta"),1);let C=[],A=[],P=!0;const w=()=>{P=!1,y&&(y._time=0,y._animating=!1),S&&(S._time=0,S._animating=!1),L&&(L._time=0,L._animating=!1),i()||(A.forEach(j=>{j.style.transform="translate3d(0, 100%, 0)"}),C.forEach(j=>{j.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(y){if(y.style.overflow="hidden",C=Py(y),S){const j=S.textContent.trim();S.textContent="";const de=document.createElement("div");de.className="line",de.textContent=j,de.style.transform="translate3d(0, 100%, 0)",de.style.willChange="transform";const we=document.createElement("div");we.style.position="relative",we.style.overflow="hidden",we.appendChild(de),S.appendChild(we),A=[de]}L&&(L.style.transform="translate3d(0, 150%, 0) rotate(10deg)",L.style.opacity="0",L.style.overflow="hidden"),w()}})();const U=qr(document.getElementById("home-goal-title"),2);let z=[];U&&(U.style.overflow="hidden",z=Ca(U,"word"),z.forEach(j=>{j.style.transform="translate3d(0, 100%, 0)",j.style.opacity="0"}));let O=0,k=!1,X=0;const Y=j=>{if(!t||!e)return;if(!pn(e).isActive){g=!0;return}g&&(g=!1,_());const we=pn(t),ze=pn(o||a),oe=window.innerHeight*.1;if(t._time=_n(t._time+(t._animating?j:-j),0,2),a&&(a._time=_n(a._time+(a._animating?j:-j),0,2)),l&&(l._ratio=Xn(l._ratio+(l._animating?j:-j))),we.screenRatio>-1&&(t._animating=!0,i()?d.forEach(le=>{le.style.transform="translate3d(0, 0, 0)"}):d.forEach((le,ne)=>{let ve,Ne;ne<2?(ve=xe(t._time-Math.abs(2-ne)/10,.5,1.2,-m,0,ft),Ne=xe(t._time-ne/10,0,1,100,0,ft)):(ve=0,Ne=xe(t._time-ne/10,0,1,-100,0,ft)),le.style.transform=`translate3d(${ve}px, ${Ne}%, 0)`}),n)){const le=we.showScreenOffset*-oe*.5;n.style.transform=`translate3d(0, ${le}px, 0)`}if(ze.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const le=ze.showScreenOffset*-oe*1.5;if(a&&(a.style.transform=`translate3d(0, ${le}px, 0)`,i()?v.forEach(ne=>{ne.style.opacity="1",ne.style.transform="translate3d(0, 0, 0)"}):v.forEach((ne,ve)=>{const Ne=xe(a._time-ve/100,0,1,.1,1,ja),Re=xe(a._time-ve/100,0,1,100,0,ja);ne.style.opacity=String(Ne),ne.style.transform=`translate3d(0, ${Re}%, 0)`})),l){const ne=ze.showScreenOffset*-oe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ne}px) translate3d(0, ${xe(l._ratio,0,1,150,0,ft)}%, 0) rotate(${xe(l._ratio,0,1,10,0,ft)}deg)`,l.style.opacity=String(ft(l._ratio))):(l.style.transform=`translateY(${ne}px)`,l.style.opacity="1")}}if(c){const le=pn(c),ne=Xn(xe(le.showScreenOffset,.05,.85,0,1,ft));c.style.opacity=String(ne),c.style.transform=`translate3d(0, ${xe(ne,0,1,80,0,ft)}px, 0) scale(${xe(ne,0,1,.96,1,ft)})`}if(u){const le=pn(u);X=Xn(xe(le.showScreenOffset,0,.7,0,1,ft)),u.style.opacity=String(.4+X*.6),u.style.transform=`translate3d(0, ${xe(X,0,1,60,0,ft)}px, 0) scale(${xe(X,0,1,.94,1,ft)})`,k=X>.9,O=_n(O+(k?j:-j*2),0,1.4),f.forEach((ne,ve)=>{const Ne=xe(O-ve/10,0,.6,0,1,ft),Re=xe(O-ve/10,0,.6,0,180,ft);ne.style.transform=`scale(${Ne}) rotate(${Re}deg)`,ne.style.display="inline-block"})}},q=j=>{if(!E||!y)return;if(pn(E).isActive){P&&w();const we=pn(y),ze=pn(S),J=pn(L);y._time=_n(y._time+(y._animating?j:-j),0,2),S&&(S._time=_n(S._time+(S._animating?j:-j),0,2)),L&&(L._time=_n(L._time+(L._animating?j:-j),0,1)),we.screenRatio>-1&&(y._animating=!0,i()?C.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((oe,le)=>{const ne=xe(y._time*1.5-le/20,0,1,1,0,ft),ve=xe(y._time*1.5-le/20,0,1,10,0,ft);oe.style.transform=`translate3d(0, ${ne}em, 0) rotate(${ve}deg)`})),ze.screenRatio>-1&&S&&(S._animating=!0,i()?A.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):A.forEach((oe,le)=>{const ne=xe(S._time-le/20,0,1,100,0,ft);oe.style.transform=`translate3d(0, ${ne}%, 0)`})),J.screenRatio>-1&&L&&(i()?(L.style.transform="translate3d(0, 0, 0) rotate(0deg)",L.style.opacity="1"):(L._animating=!0,L.style.transform=`translate3d(0, ${xe(L._time,0,1,150,0,ft)}%, 0) rotate(${xe(L._time,0,1,10,0,ft)}deg)`,L.style.opacity=String(ft(L._time))))}else P=!0},B=j=>{if(!U)return;pn(U).screenRatio>-1&&(U._animating=!0),U._time=_n(U._time+(U._animating?j:-j),0,2),z.forEach((we,ze)=>{const J=xe(U._time-ze/20,0,1,0,1,ft),oe=xe(U._time-ze/20,0,1,100,0,ft);we.style.opacity=String(J),we.style.transform=`translate3d(0, ${oe}%, 0)`})},ue=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ue),{update(j){Y(j),q(j),B(j)},destroy(){window.removeEventListener("resize",ue)}}}const Tf=28,Dy=4,Iy=8;function Af(){return window.innerWidth<812}function Uy(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,w;const r=t.querySelector(".project-item-main"),s=t.querySelector(".project-item-image"),o=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=o==null?void 0:o.textContent)==null?void 0:P.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",f=[];a&&(a.textContent="",[...u].forEach(M=>{const U=document.createElement("div");if(U.className="project-item-line-2-inner-list",U.style.transform="translateY(-400%)",M===" ")U.style.width="0.3em";else for(let z=0;z<4;z++){const O=document.createElement("span");O.textContent=M,U.appendChild(O)}a.appendChild(U),f.push(U)})),o&&(o.textContent="");let d=!1,m=!1,v=0,g=0,_=0,p=0,E=0,y=!1,S=0,L=0,C=0,A=0;return Af()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{d=!0}),r==null||r.addEventListener("mouseleave",()=>{d=!1})),{dom:t,main:r,image:s,line1:o,line2Icon:l,tags:c,letterCols:f,index:n,update(M){const U=pn(t),z=U.ratio>-1&&U.ratio<1;z&&(y=!0),y&&(_+=M);const O=Xn(xe(_,0,.85,0,1,ft)),k=xe(O,0,1,90,0,ft);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${k}px, 0)`,o&&z){p+=M;const X=Math.min(c.length,Math.floor(Tf*p)-Dy),Y=Math.min(c.length,Math.floor(Tf*p));let q="";for(let B=0;B<Math.max(0,X);B++)q+=c[B];for(let B=0;B<Y-Math.max(0,X);B++)q+=String.fromCharCode(33+Math.floor(Math.random()*93));o.textContent=q}if(z&&(E+=M*.8),g=Xn(g+(m?1:-1)*M*2.5),Af())f.forEach((X,Y)=>{const q=Xn(g-Math.abs(Y-f.length-1)/100),B=xe(q,0,1,0,1.5,ft);X.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(f.forEach((X,Y)=>{const q=xe(Y,0,Math.max(1,f.length-1),Math.PI/2,3*Math.PI/2),B=Xn(E-Math.cos(q)/Iy),ue=xe(B,0,1,500,0,ny),j=Xn(g-Math.abs(Y-f.length-1)/100),de=xe(j,0,1,0,1.5,ft);X.style.transform=`translate3d(${de}em, -${ue}%, 0)`}),l){const X=xe(g,.3,1,0,1,ft);l.style.transform=`translateX(${X}em)`}if(v=_n(v+(d?1:-1)*M,0,1),s&&!document.documentElement.classList.contains("has-featured-webgl")){d?(C=(Math.random()-.5)*xe(v,0,.6,1,0)*8,A=(Math.random()-.5)*xe(v,0,.6,1,0)*8):(C*=.92,A*=.92),S+=(C-S)*.2,L+=(A-L)*.2;const X=xe(v,0,1,1,1.06,ft);s.style.transform=`translate3d(${S}px, ${L}px, 0) scale(${X})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Rf=12,Cf=6,Ny=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Fy=`
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
  float stepDist = dist / float(${Rf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Rf}; i++) {
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
  float numSampleInv = 1.0 / float(${Cf});
  for (int i = 0; i < ${Cf}; i++) {
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
`;function Oy(i,e,t,n){const r=Math.PI*2*e,s=t/(Math.PI*e),o=1/(r*r),a=n*t/r;let l=i,c=0,u=i,f=i;return{get value(){return l},set target(d){f=d},get target(){return f},update(d){if(d<=0)return l;const m=(f-u)/d;u=f;const v=Math.max(o,d*d/2+d*s/2,d*s);return l+=c*d,c+=(f+a*m-l-s*c)*d/v,l}}}async function zy(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new ol({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(S){return n.remove(),console.warn("Featured WebGL unavailable",S),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=wn;const s=new Yo,o=new Nu(0,1,1,0,-1e3,1e3);o.position.z=10;const a=new pr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=S=>{c.x=S.clientX,c.y=S.clientY};window.addEventListener("pointermove",u,{passive:!0});const f=new Si(1,1),d=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(S,L)=>{var ne,ve,Ne;const C=S.dataset.id||((ne=i[L])==null?void 0:ne.id),A=S.querySelector(".project-item-main"),P=S.querySelector(".project-item-image img");P&&(P.style.opacity="0",P.setAttribute("aria-hidden","true"));const w=new Je(S.dataset.colorBg||"#111111");let M,U;try{[M,U]=await Promise.all([a.loadAsync(`${l}${C}/home.webp`),a.loadAsync(`${l}${C}/home_depth.webp`)])}catch(Re){console.warn("Featured WebGL textures failed for",C,Re),P&&(P.style.opacity="1");return}M.colorSpace=wn,M.wrapS=M.wrapT=Zn,M.minFilter=mt,M.magFilter=mt,M.generateMipmaps=!1,U.colorSpace=en,U.wrapS=U.wrapT=Zn,U.minFilter=mt,U.magFilter=mt,U.generateMipmaps=!1;const z=new rt(((ve=M.image)==null?void 0:ve.width)||1024,((Ne=M.image)==null?void 0:Ne.height)||1024),O=new W(0,0,-1),k=new ru(new W,1,.6,2),X=Oy(1,2.2,.7,3);X.target=0;const Y=new rt,q=new rt,B={u_texture:{value:M},u_depthTexture:{value:U},u_colorBg:{value:w},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:z},u_domWH:{value:new rt(1,1)},u_shiftXY:{value:Y},u_focusPos:{value:O},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new rt(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ue=new Ct({uniforms:B,vertexShader:Ny,fragmentShader:Fy,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),j=new kt(f,ue);j.frustumCulled=!1,j.renderOrder=10+L,j.visible=!1,s.add(j);let de=!1,we=0,ze=0,J=0;const oe=[0,.2,.3],le=Re=>{for(let je=0;je<oe.length;je++)if(Re<oe[je])return je;return oe.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{de=!0}),A==null||A.addEventListener("mouseleave",()=>{de=!1})),d.push({mesh:j,uniforms:B,focusDyn:k,focusPos:O,zoomDyn:X,shiftXY:Y,shiftXYTarget:q,index:L,main:A,dom:S,update(Re,je,We,nt,F){const Fe=pn(S);if(!(Fe.ratio>-1&&Fe.ratio<1)||!A){ze=0,j.visible=!1,B.u_showRatio.value=0;return}ze+=Re;const Xe=A.getBoundingClientRect(),ke=Math.max(1,Xe.width),ye=Math.max(1,Xe.height);B.u_domWH.value.set(ke,ye),B.u_resolution.value.set(je,We),B.u_time.value=nt,B.u_rippleStrength.value=Math.min(.15,F*.5),B.u_globalRadius.value=Math.min(ke,ye)*.04;const be=xe(ze,0,2,0,1,ja),I=L%2-.5,T=(1-be)*I*-je*.1,V=(1-be)*I*.1;j.position.set(Xe.left+ke*.5+T,We-(Xe.top+ye*.5),0),j.scale.set(ke,ye,1),j.rotation.z=-V;const Q=xe(ze,0,1.5,0,1,ja);B.u_showRatio.value=Q,j.visible=Q>.01;const ae=we;if(we=_n(we+(de?1:-1)*Re,0,1),ae<we){const he=le(ae),ce=le(we);ce!==he&&q.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(xe(we,0,.6,1,0)),ce===oe.length&&q.multiplyScalar(.5)}else q.multiplyScalar(.95);Y.lerp(q,.2);const ie=k.target;if(de){const he=we>0?xe(we,0,.3,1,0)*ye*.75:0;ie.x=(c.x-Xe.left-ke*.5+Math.cos(nt*20)*he)/ke*-ye,ie.y=(c.y-Xe.top-ye*.5-Math.sin(nt*30)*he)/ye*ye,ie.z=.5}else ie.x=0,ie.y=0,ie.z=-1;k.update(Re),O.copy(k.value),X.target=de?1:0,X.update(Re),B.u_zoomRatio.value=X.value,J=_n(J+(de?.75:-1)*Re,0,1),B.u_dofRangeOffset.value=Yt.lerp(0,-.5,J),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,E=0;const y=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),o.left=0,o.right=v,o.top=g,o.bottom=0,o.updateProjectionMatrix()};return y(),window.addEventListener("resize",y),{update(S){_+=S;const L=window.scrollY,C=Math.abs(L-p)/Math.max(S,.001);p=L,E+=(Math.min(1,C*.002)-E)*.15;const P=pn(e).isActive;if(n.style.visibility=P?"visible":"hidden",!!P){for(const w of d)w.update(S,v,g,_,E);r.render(s,o)}},resize:y,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",y),document.documentElement.classList.remove("has-featured-webgl"),d.forEach(S=>{S.mesh.material.dispose()}),f.dispose(),r.dispose(),n.remove()}}}function By(){return window.innerWidth<812}function ky(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const s=document.createElement("span");s.className="reel-char-wrap",s.style.display="inline-block",s.style.overflow="hidden",s.style.verticalAlign="top";const o=document.createElement("span");o.className="reel-char",o.textContent=r,o.style.display="inline-block",s.appendChild(o),s._inner=o,t.appendChild(s),t._chars.push(s)}),t._randCharIndex=0}),i._splitted={words:e}}function Hy(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),s=document.getElementById("home-reel-video-title"),o=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));s&&ky(s);const l=2;let c=0,u=0,f=0,d=0,m=!1,v=!1,g=0,_=0,p=!1,E=!1,y=0;const S=C=>{var P;if(!C)return;const A=(P=C.play)==null?void 0:P.call(C);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:C=>{var U;if(!i)return;const A=e?pn(e):null,P=n?pn(n):null,w=By(),M=w?!!(P!=null&&P.isActive):!!A&&A.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const z=(A==null?void 0:A.top)??0,O=(A==null?void 0:A.height)??1,k=window.innerHeight,X=z-(k-O)*.5,Y=((P==null?void 0:P.top)??0)-(k-((P==null?void 0:P.height)??k))*.5;if(y=Xn(xe(window.scrollY+z,X,Y,0,1)),y=Xn(xe((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,ft)),r&&(S(r),r.style.opacity=String(.35+y*.65)),t&&(S(t),t.style.opacity=String(1-y*.85)),e){const q=xe(y,0,1,1,1.08,ft);e.style.transform=`scale(${q})`,e.style.opacity=String(xe(y,.7,1,1,.15,ft))}if(n){const q=xe(y,0,1,48,0,ft),B=xe(y,0,1,.94,1,ft);n.style.transform=`translate3d(0, ${q}px, 0) scale(${B})`,n.style.opacity=String(.25+y*.75)}y===1||y>.9?(m=!0,v=!0):(v=!1,m=!1),p=y>.85,E=y>.85}else(U=r==null?void 0:r.pause)==null||U.call(r),y=0,m=!1,v=!1,p=!1,E=!1;if(f=_n(f+(m?C:-C),0,1e9),d=Math.min(y,Xn(d+(v?C:-C))),u=f%l,s!=null&&s._splitted&&!w){const z=s._splitted.words;for(let O=0;O<z.length;O++){const k=z[O];c-u>l-1&&(k._randCharIndex=Math.round(Math.random()*(k._chars.length-1)));for(let X=0;X<k._chars.length;X++){const Y=k._chars[X];let q=xe(d-O/4-X/20,0,.6,200,0,ft);X===k._randCharIndex&&(q+=xe(u-O/10,.5,1.3,0,-100,ft)),Y._inner&&(Y._inner.style.transform=`translate3d(0, ${q}%, 0)`)}}}c=u,g=_n(g+(p?C:-C*2),0,1.4),_=_n(_+(E?C:-C*2),0,1.4),o.forEach((z,O)=>{const k=xe(g-O/10,0,.6,0,1,ft),X=xe(g-O/10,0,.6,0,180,ft);z.style.transform=`scale(${k}) rotate(${X}deg)`}),a.forEach((z,O)=>{const k=xe(_-O/10,0,.6,0,1,ft),X=xe(_-O/10,0,.6,0,180,ft);z.style.transform=`scale(${k}) rotate(${X}deg)`})},destroy(){}}}const ec=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new W(-.0112049,-.0141946,0),boxMax:new W(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new W(-.0180006,-.00963629,0),boxMax:new W(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Vy=`
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
`,Gy=`
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
`,Wy=`
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
`,Xy=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function qy(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function Yy(){const i=qy(),e="/zyrax-studio/",t=await Promise.all(ec.map(p=>Hn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new Yo,r=new Pn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let s;try{s=new ol({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new W,c=new W,u=new io,f=new rt;for(let p=0;p<ec.length;p++){const E=ec[p],y=t[p],S=document.querySelector(E.sectionSelector);if(!S||!y)continue;const L=new Pi,C=new Pi;L.add(C),n.add(L);const A=new Ct({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:E.aoThreshold},u_color0:{value:new Je(E.color0)},u_color1:{value:new Je(E.color1)},u_radius:{value:.008}},vertexShader:Vy,fragmentShader:Gy,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),P=new kt(y,A);P.frustumCulled=!1,P.renderOrder=200,C.add(P);const w=new Ct({uniforms:{u_color0:{value:new Je(E.color0)},u_color1:{value:new Je(E.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:Wy,fragmentShader:Xy,side:En,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new kt(new Si(2,2),w);M.frustumCulled=!1,M.renderOrder=200,C.add(M);const U=y.attributes.position.array,z=y.attributes.position.count,O=new Float32Array(z);for(let k=0;k<z;k++)O[k]=U[k*3+2];a.push({data:E,sectionEl:S,container:L,inner:C,mesh:P,mat:A,circle:M,circleMat:w,lineRatioArray:O,cpAttr:y.attributes.CP,cdAttr:y.attributes.Cd,count:z,offsetY:0,framePos:new W,frameQuat:new Dn,frameScale:new W(1,1,1)})}let d=1,m=1;const v=()=>{d=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(d*d+m*m),E=m/p;f.set(d/m*E,E),r.fov=60,r.aspect=d/m,r.position.set(d/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(d/2,-m/2,0),r.updateProjectionMatrix(),s.setSize(d,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var F;const{data:E,sectionEl:y,container:S,inner:L,mat:C,circle:A,circleMat:P,lineRatioArray:w,cpAttr:M,cdAttr:U,count:z}=p,k=pn(y).top+p.offsetY,X=m,Y=E.scrollToRatioFactors;let q=Xn(-(k-Y[0]*X)/(Y[1]*X));q=ry(q);const B=d<=812,ue=.008*xe(d,540,1920,2,1)*(B?.72:1),j=d/f.x,de=m/f.y;let we=E.margin.x,ze=E.margin.y;B&&E.id==="goal"&&(we=.42,ze=-.35),L.position.x=we*j,L.position.y=ze*de-k,L.scale.set(j,de,1),p._showSmooth==null&&(p._showSmooth=q),p._showSmooth+=(q-p._showSmooth)*.18,C.uniforms.u_showRatio.value=p._showSmooth,C.uniforms.u_radius.value=ue;const J=(F=y.dataset)==null?void 0:F.goalPhase,oe=E.id==="goal"&&(J==="black-tunnel"||J==="white");S.position.copy(p.framePos),S.quaternion.copy(p.frameQuat),S.scale.copy(p.frameScale),S.updateMatrixWorld(!0),u.min.copy(E.boxMin),u.max.copy(E.boxMax),u.applyMatrix4(L.matrixWorld),S.visible=!oe&&u.max.y>-m&&u.min.y<0&&q>.001;let le=0,ne=0;for(let Fe=0;Fe<z;Fe++)q>=w[Fe]&&(le=Fe,Fe===z-1?ne=0:ne=(q-w[Fe])/(w[Fe+1]-w[Fe]||1));const ve=le,Ne=Math.min(le+1,z-1);l.fromArray(M.array,le*3),c.fromArray(M.array,Ne*3),l.lerp(c,ne);const Re=U.array;let je=Re[ve]*(1-ne)+Re[Ne]*ne;je=.9+.1*je;const We=Xn((q-(E.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(ue,ue,1),P.uniforms.u_ao.value=Math.min(1,je+1-We);let nt=w[ve]*(1-ne)+w[Ne]*ne;nt=1-Math.pow(1-_n(nt,0,1),2),P.uniforms.u_mixRatio.value=nt},_=()=>{for(const p of a)g(p);s.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const E=a.find(y=>y.data.id==="goal");E&&(E.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:E=0,active:y=!1}={}){const S=a.find(U=>U.data.id==="goal");if(!S)return;if(!y){S.framePos.set(0,0,0),S.frameQuat.identity(),S.frameScale.set(1,1,1);return}const L=d*.5,C=-m*.5,A=new xt;A.makeTranslation(L,C,0);const P=new xt().makeRotationZ(-E),w=new xt().makeScale(p,p,1),M=new xt().makeTranslation(-L,-C,0);A.multiply(P).multiply(w).multiply(M),A.decompose(S.framePos,S.frameQuat,S.frameScale)},destroy(){window.removeEventListener("resize",v),s.dispose(),i.remove()}}}const Eo=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,yp=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};yp();window.addEventListener("resize",yp);const $i=new Bp({duration:Eo?.85:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!Eo,syncTouch:!1,wheelMultiplier:Eo?.9:.82,touchMultiplier:Eo?1.35:1.1});window.lenis=$i;let vo=0,xo=0,Do=!1,Mp=0;window.addEventListener("wheel",()=>{Mp=performance.now(),Do=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Do=!0},{passive:!0});const Zy="/zyrax-studio/assets/projects/",Pf=document.getElementById("project-list");Pf&&(Pf.innerHTML=Ud.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${Zy}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const $y=document.getElementById("hero-canvas"),Ky=document.getElementById("home-hero-visual-container"),mr=document.getElementById("home-hero"),tc=document.getElementById("home-hero-title"),nc=document.getElementById("home-hero-visual-container"),Lf=document.getElementById("home-hero-scroll-container"),wp=document.getElementById("home-goal"),jy=document.getElementById("goal-tunnel-canvas"),Jy=document.getElementById("home-goal-tunnel-title"),Qy=document.getElementById("home-goal-tunnel-sticky"),eM=Cy(wp,Jy,Qy);let Vn=null;const tM=Ly(),nM=Uy(),iM=Hy();let os=null,ka=null,Df=performance.now();wu.ticker.add(i=>{var r;const e=performance.now(),t=Math.min(.05,(e-Df)/1e3);if(Df=e,Vn!=null&&Vn.getAutoScrollSpeed&&(vo=Vn.getAutoScrollSpeed()),e-Mp>80&&Math.abs(vo)>.01&&(Do=!1),xo+=Math.abs(vo)>0&&!Do?t:-1,xo=Math.max(0,Math.min(1,xo)),!Do&&xo>0&&Math.abs(vo)>.01){const s=window.innerHeight,o=vo*s*t*xo*.55,a=($i.animatedScroll??$i.scroll??window.scrollY)+o;$i.scrollTo(a,{immediate:!0,force:!0})}$i.raf(i*1e3),tM.update(t),nM.update(t),ka==null||ka.update(t),iM.update(t),os==null||os.update(),(r=Vn==null?void 0:Vn.tickFrame)==null||r.call(Vn,t)});wu.ticker.lagSmoothing(0);$i.on("scroll",()=>{if(eM.updateScroll(),Vn==null||Vn.updateScroll(),os==null||os.update(),!mr)return;const i=mr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));tc&&(tc.style.transform=`translate3d(0, ${t*-12}vh, 0)`,tc.style.opacity=String(Math.max(0,1-t*1.2))),nc&&(nc.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,nc.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Lf&&(Lf.style.opacity=String(Math.max(0,1-t*2)))});Yy().then(i=>{os=i}).catch(i=>console.error("Scroll lines failed",i));Ry(jy,wp).then(i=>{Vn=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{Q1($y,Ky).then(()=>mr==null?void 0:mr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),mr==null||mr.classList.add("is-in")})});Eo||zy(Ud).then(i=>{ka=i}).catch(i=>console.error("Featured WebGL failed",i));function Ep(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}Ep(document.getElementById("home-hero-title"));Ep(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const rM=document.querySelectorAll(".home-hero-scroll-container-cross");rM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const ic=document.getElementById("header"),rc=document.getElementById("header-container"),gr=document.getElementById("header-background"),sc=document.getElementById("header-menu"),Vs=document.getElementById("header-right-menu-btn");let Wi=!1;const Ko=i=>{Wi=!!i,ic==null||ic.classList.toggle("--menu-opened",Wi),rc==null||rc.classList.toggle("--opened",Wi),gr==null||gr.classList.toggle("--opened",Wi),sc==null||sc.classList.toggle("--opened",Wi),Vs==null||Vs.classList.toggle("--opened",Wi),gr&&(gr.style.opacity=Wi?window.innerWidth>=1e3?"0.2":"1":"0")};Vs==null||Vs.addEventListener("click",i=>{i.stopPropagation(),Ko(!Wi)});gr==null||gr.addEventListener("click",()=>Ko(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Ko(!1),t==="contact"?(e.preventDefault(),$i.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),$i.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!Wi)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Ko(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Ko(!1)});var If;(If=document.querySelector("[data-reel]"))==null||If.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Uf;(Uf=document.querySelector("[data-sound]"))==null||Uf.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var Nf;(Nf=document.querySelector("#end-bottom"))==null||Nf.addEventListener("click",i=>{i.preventDefault(),$i.scrollTo("#footer-section")});
