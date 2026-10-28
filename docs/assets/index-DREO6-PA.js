var u0=Object.defineProperty;var f0=(i,e,t)=>e in i?u0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ye=(i,e,t)=>f0(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var mh="1.3.27";function up(i,e,t){return Math.max(i,Math.min(e,t))}function h0(i,e,t){return(1-t)*i+t*e}function d0(i,e,t,n){return h0(i,e,1-Math.exp(-t*n))}function p0(i,e){return(i%e+e)%e}var m0=class{constructor(){Ye(this,"isRunning",!1);Ye(this,"value",0);Ye(this,"from",0);Ye(this,"to",0);Ye(this,"currentTime",0);Ye(this,"lerp");Ye(this,"duration");Ye(this,"easing");Ye(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=up(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=d0(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function _0(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var g0=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ye(this,"width",0);Ye(this,"height",0);Ye(this,"scrollHeight",0);Ye(this,"scrollWidth",0);Ye(this,"debouncedResize");Ye(this,"wrapperResizeObserver");Ye(this,"contentResizeObserver");Ye(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ye(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ye(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=_0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fp=class{constructor(){Ye(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const v0=100/6,Rr={passive:!1};function _h(i,e){return i===1?v0:i===2?e:1}var x0=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ye(this,"touchStart",{x:0,y:0});Ye(this,"lastDelta",{x:0,y:0});Ye(this,"window",{width:0,height:0});Ye(this,"emitter",new fp);Ye(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ye(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ye(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ye(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=_h(n,this.window.width),o=_h(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ye(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rr),this.element.addEventListener("touchstart",this.onTouchStart,Rr),this.element.addEventListener("touchmove",this.onTouchMove,Rr),this.element.addEventListener("touchend",this.onTouchEnd,Rr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Rr),this.element.removeEventListener("touchstart",this.onTouchStart,Rr),this.element.removeEventListener("touchmove",this.onTouchMove,Rr),this.element.removeEventListener("touchend",this.onTouchEnd,Rr)}};const gh=i=>Math.min(1,1.001-2**(-10*i));var y0=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:w=!1,anchors:S=!1,autoToggle:D=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:P=T,stopInertiaOnNavigate:M=!1,respectReducedMotion:y=!0}={}){Ye(this,"_isScrolling",!1);Ye(this,"_isStopped",!1);Ye(this,"_isLocked",!1);Ye(this,"_preventNextNativeScrollEvent",!1);Ye(this,"_resetVelocityTimeout",null);Ye(this,"_rafId",null);Ye(this,"_isDraggingSelection",!1);Ye(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ye(this,"isTouching");Ye(this,"isIos");Ye(this,"time",0);Ye(this,"userData",{});Ye(this,"lastVelocity",0);Ye(this,"velocity",0);Ye(this,"direction",0);Ye(this,"options");Ye(this,"targetScroll");Ye(this,"animatedScroll");Ye(this,"animate",new m0);Ye(this,"emitter",new fp);Ye(this,"dimensions");Ye(this,"virtualScroll");Ye(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ye(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ye(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ye(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ye(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ye(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,w;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ye(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ye(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=mh,window.lenis||(window.lenis={}),window.lenis.version=mh,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=gh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:w,anchors:S,autoToggle:D,allowNestedScroll:C,naiveDimensions:P,stopInertiaOnNavigate:M,respectReducedMotion:y},this.dimensions=new g0(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new x0(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=i,m=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let v=null;if(typeof h=="string"?(v=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),v||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(v=h),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(w)?0:w)}}if(typeof h=="number"){if(h+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=h-this.animatedScroll;v>this.limit/2?h-=this.limit:v<-this.limit/2&&(h+=this.limit)}}else h=up(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof s=="number"&&typeof a!="function"?a=gh:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,h,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,h,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(i);if(r.computedStyle=C,o=["auto","overlay","scroll"].includes(C.overflowX),s=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,h=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=h>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=h,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,h=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,w,S,D;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,w=o,S=a,D=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=h-v,b=t,w=s,S=l,D=u;else return!1;return!D&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&w&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?p0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function cr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fa={duration:.5,overwrite:!1,delay:0},af,gn,Ht,gi=1e8,It=1/gi,ou=Math.PI*2,S0=ou/4,w0=0,dp=Math.sqrt,M0=Math.cos,b0=Math.sin,dn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},lf=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},qn=function(e){return e!==!1},cf=function(){return typeof window<"u"},ka=function(e){return Kt(e)||dn(e)},pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,T0=/random\([^)]+\)/g,E0=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_p=/[+-]=-?[.\d]+/,A0=/[^,'"\[\]\s]+/gi,R0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,Bi,su,uf,ui={},Cl={},gp,vp=function(e){return(Cl=vs(e,ui))&&jn},ff=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ha=function(e,t){return!t&&console.warn(e)},xp=function(e,t){return e&&(ui[e]=t)&&Cl&&(Cl[e]=t)||ui},da=function(){return 0},C0={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},P0={suppressEvents:!0},hf={},Gr=[],au={},yp,ni={},cc={},xh=30,xl=[],df="",pf=function(e){var t=e[0],n,r;if($i(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=xl.length;r--&&!xl[r].targetTest(t););n=xl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Vp(e[r],n)))||e.splice(r,1);return e},Ao=function(e){return e._gsap||pf(vi(e))[0]._gsap},Sp=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():lf(n)&&e.getAttribute&&e.getAttribute(t)||n},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},L0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pl=function(){var e=Gr.length,t=Gr.slice(0),n,r;for(au={},Gr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},mf=function(e){return!!(e._initted||e._startAt||e.add)},wp=function(e,t,n,r){Gr.length&&!gn&&Pl(),e.render(t,n,!!(gn&&t<0&&mf(e))),Gr.length&&!gn&&Pl()},Mp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(A0).length<2?t:dn(e)?e.trim():e},bp=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},D0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vs=function(e,t){for(var n in t)e[n]=t[n];return e},yh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ll=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},na=function(e){var t=e.parent||Xt,n=e.keyframes?D0(Pn(e.keyframes)):fi;if(qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},I0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Tp=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Wl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},U0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lu=function(e,t,n,r){return e._startAt&&(gn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},F0=function i(e){return!e||e._ts&&i(e.parent)},Sh=function(e){return e._repeat?xs(e._tTime,e=e.duration()+e._rDelay)*e:0},xs=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xl=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},ql=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xl(e),n._dirty||Ro(n,e)),e},Ep=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Dl(e.rawTime(),t),(!t._dur||wa(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Vi=function(e,t,n,r){return t.parent&&qr(t),t._start=Wt((gr(n)?n:n||e!==Xt?pi(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tp(e,t,"_first","_last",e._sort?"_start":0),cu(t)||(e._recent=t),r||Ep(e,t),e._ts<0&&ql(e,e._tTime),e},Ap=function(e,t){return(ui.ScrollTrigger||ff("scrollTrigger",t))&&ui.ScrollTrigger.create(t,e)},Rp=function(e,t,n,r,o){if(gf(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yp!==ii.frame)return Gr.push(e),e._lazy=[o,r],1},N0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},cu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},O0=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&N0(e)&&!(!e._initted&&cu(e))||(e._ts<0||e._dp._ts<0)&&!cu(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=wa(0,e._tDur,t),u=xs(l,a),e._yoyo&&u&1&&(s=1-s),u!==xs(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||gn||r||e._zTime===It||!t&&e._zTime){if(!e._initted&&Rp(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&lu(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&qr(e,1),!n&&!gn&&(oi(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},z0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ys=function(e,t,n,r){var o=e._repeat,s=Wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Wt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&ql(e,e._tTime=e._tDur*a),e.parent&&Xl(e),n||Ro(e.parent,e),e},wh=function(e){return e instanceof Wn?Ro(e):ys(e,e._dur)},B0={_start:0,endTime:da,totalDuration:da},pi=function i(e,t,n){var r=e.labels,o=e._recent||B0,s=e.duration()>=gi?o.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ia=function(e,t,n){var r=gr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;s.immediateRender=qn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new nn(t[0],s,t[o+1])},jr=function(e,t){return e||e===0?t(e):t},wa=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!dn(e)||!(t=R0.exec(e))?"":t[1]},k0=function(e,t,n){return jr(n,function(r){return wa(e,t,r)})},uu=[].slice,Cp=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Bi},H0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return dn(r)&&!t||Cp(r,1)?(o=n).push.apply(o,vi(r)):n.push(r)})||n},vi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):dn(e)&&!n&&(su||!Ss())?uu.call((t||uf).querySelectorAll(e),0):Pn(e)?H0(e,n):Cp(e)?uu.call(e,0):e?[e]:[]},fu=function(e){return e=vi(e)[0]||ha("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?ha("Invalid scope")||uf.createElement("div"):e)}},Pp=function(e){return e.sort(function(){return .5-Math.random()})},Lp=function(e){if(Kt(e))return e;var t=$i(e)?e:{each:e},n=Co(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return dn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(h,m,v){var g=(v||t).length,_=s[g],p,b,w,S,D,C,T,P,M;if(!_){if(M=t.grid==="auto"?0:(t.grid||[1,gi])[1],!M){for(T=-gi;T<(T=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(_=s[g]=[],p=l?Math.min(M,g)*u-.5:r%M,b=M===gi?0:l?g*d/M-.5:r/M|0,T=0,P=gi,C=0;C<g;C++)w=C%M-p,S=b-(C/M|0),_[C]=D=c?Math.abs(c==="y"?S:w):dp(w*w+S*S),D>T&&(T=D),D<P&&(P=D);r==="random"&&Pp(_),_.max=T-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=Rn(t.amount||t.each)||0,n=n&&g<0?e_(n):n}return g=(_[h]-_.min)/_.max||0,Wt(_.b+(n?n(g):g)*_.v)+_.u}},hu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Wt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(gr(n)?0:Rn(n))}},Dp=function(e,t){var n=Pn(e),r,o;return!n&&$i(e)&&(r=n=e.radius||gi,e.values?(e=vi(e.values),(o=!gr(e[0]))&&(r*=r)):e=hu(e.increment)),jr(t,n?Kt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=gi,u=0,d=e.length,h,m;d--;)o?(h=e[d].x-a,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:s,o||u===s||gr(s)?u:u+Rn(s)}:hu(e))},Ip=function(e,t,n,r){return jr(Pn(e)?!t:n===!0?!!(n=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},V0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},G0=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},W0=function(e,t,n){return Fp(e,t,0,1,n)},Up=function(e,t,n){return jr(n,function(r){return e[~~t(r)]})},X0=function i(e,t,n){var r=t-e;return Pn(e)?Up(e,i(0,e.length),t):jr(n,function(o){return(r+(o-e)%r)%r+e})},q0=function i(e,t,n){var r=t-e,o=r*2;return Pn(e)?Up(e,i(0,e.length-1),t):jr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},pa=function(e){return e.replace(T0,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(E0);return Ip(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Fp=function(e,t,n,r,o){var s=t-e,a=r-n;return jr(o,function(l){return n+((l-e)/s*a||0)})},Y0=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=dn(e),a={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(h,~~v);return u[g](v-g)},n=t}else r||(e=vs(Pn(e)?[]:{},e));if(!u){for(l in t)_f.call(a,e,l,"get",t[l]);o=function(v){return yf(v,a)||(s?e.p:e)}}}return jr(n,o)},Mh=function(e,t,n){var r=e.labels,o=gi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},oi=function(e,t,n){var r=e.vars,o=r[t],s=Ht,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Gr.length&&Pl(),a&&(Ht=a),u=l?o.apply(c,l):o.call(c),Ht=s,u},Js=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&oi(e,"onInterrupt"),e},ls,Np=[],Op=function(e){if(e)if(e=!e.name&&e.default||e,cf()||e.headless){var t=e.name,n=Kt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:da,render:yf,add:_f,kill:u_,modifier:c_,rawVars:0},s={targetTest:0,get:0,getSetter:xf,aliases:{},register:0};if(Ss(),e!==r){if(ni[t])return;fi(r,fi(Ll(e,o),s)),vs(r.prototype,vs(o,Ll(e,s))),ni[r.prop=t]=r,e.targetTest&&(xl.push(r),hf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xp(t,r),e.register&&e.register(jn,r,$n)}else Np.push(e)},Dt=255,Qs={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},uc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},zp=function(e,t,n){var r=e?gr(e)?[e>>16,e>>8&Dt,e&Dt]:0:Qs.black,o,s,a,l,c,u,d,h,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qs[e])r=Qs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(vh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=uc(l+1/3,o,s),r[1]=uc(l,o,s),r[2]=uc(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(mp),n&&r.length<4&&(r[3]=1),r}else r=e.match(vh)||Qs.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Dt,s=r[1]/Dt,a=r[2]/Dt,d=Math.max(o,s,a),h=Math.min(o,s,a),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Bp=function(e){var t=[],n=[],r=-1;return e.split(Wr).forEach(function(o){var s=o.match(as)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},bh=function(e,t,n){var r="",o=(e+r).match(Wr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(h){return(h=zp(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Bp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Wr,"1").split(as),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Wr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Wr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qs)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),$0=/hsl[a]?\(/,kp=function(e){var t=e.join(" "),n;if(Wr.lastIndex=0,Wr.test(t))return n=$0.test(t),e[1]=bh(e[1],n),e[0]=bh(e[0],n,Bp(e[1])),!0},ma,ii=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,h,m,v=function g(_){var p=i()-r,b=_===!0,w,S,D,C;if((p>e||p<0)&&(n+=p-t),r+=p,D=r-n,w=D-s,(w>0||b)&&(C=++d.frame,h=D-d.time*1e3,d.time=D=D/1e3,s+=w+(w>=o?4:o-w),S=1),b||(l=c(g)),S)for(m=0;m<a.length;m++)a[m](D,h,C,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){gp&&(!su&&cf()&&(Bi=su=window,uf=Bi.document||{},ui.gsap=jn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(jn.version),vp(Cl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),Np.forEach(Op)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},ma=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=da},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var w=p?function(S,D,C,T){_(S,D,C,T),d.remove(w)}:_;return d.remove(_),a[b?"unshift":"push"](w),Ss(),w},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),Ss=function(){return!ma&&ii.wake()},xt={},Z0=/^[\d.\-M][\d.\-,\s]/,K0=/["']/g,j0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(K0,"").trim():+c,r=l.substr(a+1).trim();return t},J0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Q0=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[j0(t[1])]:J0(e).split(",").map(Mp)):xt._CE&&Z0.test(e)?xt._CE("",e):n},e_=function(e){return function(t){return 1-e(1-t)}},Co=function(e,t){return e&&(Kt(e)?e:xt[e]||Q0(e))||t},Uo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Yn(e,function(a){xt[a]=ui[a]=o,xt[s=a.toLowerCase()]=n;for(var l in o)xt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xt[a+"."+l]=o[l]}),o},Hp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/ou*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*b0((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Hp(a);return o=ou/o,l.config=function(c,u){return i(e,c,u)},l},hc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Hp(n);return r.config=function(o){return i(e,o)},r};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Uo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Uo("Elastic",fc("in"),fc("out"),fc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Uo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Uo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Uo("Circ",function(i){return-(dp(1-i*i)-1)});Uo("Sine",function(i){return i===1?1:-M0(i*S0)+1});Uo("Back",hc("in"),hc("out"),hc());xt.SteppedEase=xt.steps=ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-It;return function(a){return((r*wa(0,s,a)|0)+o)*n}}};fa.ease=xt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return df+=i+","+i+"Params,"});var Vp=function(e,t){this.id=w0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sp,this.set=t?t.getSetter:xf},_a=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ys(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),ma||ii.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ss(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ql(this,n),!o._dp||o.parent||Ep(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?xs(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(wa(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),Xl(this),U0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=P0);var r=gn;return gn=n,mf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),qn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,qn(r)),this._dur||(this._zTime=-It),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-It)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Kt(n)?n:bp,l=function(){var u=r.then;r.then=null,o&&o(),Kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Js(this)},i})();fi(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Wn=(function(i){hp(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=qn(n.sortChildren),Xt&&Vi(n.parent||Xt,cr(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Ap(cr(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return ia(0,arguments,this),this},t.from=function(r,o,s){return ia(1,arguments,this),this},t.fromTo=function(r,o,s,a){return ia(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,na(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new nn(r,o,pi(this,s),1),this},t.call=function(r,o,s){return Vi(this,nn.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new nn(r,s,pi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,na(s).immediateRender=qn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,na(a).immediateRender=qn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Wt(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,m,v,g,_,p,b,w,S,D,C,T;if(this!==Xt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,w=this._ts,p=!w,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(h=Wt(u%_),u===l?(g=this._repeat,h=c):(D=Wt(u/_),g=~~D,g&&g===D&&(h=c,g--),h>c&&(h=c)),D=xs(this._tTime,_),!a&&this._tTime&&D!==g&&this._tTime-D*_-this._dur<=0&&(D=g),C&&g&1&&(h=c-h,T=1),g!==D&&!this._lock){var P=C&&D&1,M=P===(C&&g&1);if(g<D&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Wt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,D=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=z0(this,Wt(a),Wt(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!D&&(oi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||h>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,o,s),h!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-It);break}}m=v}else{m=this._last;for(var y=r<0?r:h;m;){if(v=m._prev,(m._act||y<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,o,s||gn&&mf(m)),h!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=y?-It:It);break}}m=v}}if(b&&!o&&(this.pause(),b.render(h>=a?0:-It)._zTime=h>=a?1:-1,this._ts))return this._start=S,Xl(this),this.render(r,o,s);this._onUpdate&&!o&&oi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(oi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(gr(o)||(o=pi(this,o,r)),!(r instanceof _a)){if(Pn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(dn(r))return this.addLabel(r,o);if(Kt(r))r=nn.delayedCall(0,r);else return this}return this!==r?Vi(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return dn(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(r.parent===this&&Wl(this,r),r===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=pi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=nn.delayedCall(0,o||da,s);return a.data="isPause",this._hasPause=1,Vi(this,a,pi(this,r))},t.removePause=function(r){var o=this._first;for(r=pi(this,r);o;)o._start===r&&o.data==="isPause"&&qr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)kr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=vi(r),l=this._first,c=gr(o),u;l;)l instanceof nn?L0(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=pi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,v=nn.to(s,fi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||It,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&ys(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return h?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,fi({startAt:{time:pi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Mh(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Mh(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Wt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return Ro(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ro(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=gi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Vi(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Wt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;ys(s,s===Xt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Xt._ts&&(wp(Xt,Dl(r,Xt)),yp=ii.frame),ii.frame>=xh){xh+=ai.autoSleep||120;var o=Xt._first;if((!o||!o._ts)&&ai.autoSleep&&ii._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ii.sleep()}}},e})(_a);fi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var t_=function(e,t,n,r,o,s,a){var l=new $n(this._pt,e,t,0,1,$p,null,o),c=0,u=0,d,h,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=pa(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),h=n.match(lc)||[];d=lc.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==h[u++]&&(_=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?fs(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=lc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(_p.test(r)||p)&&(l.e=0),this._pt=l,l},_f=function(e,t,n,r,o,s,a,l,c,u){Kt(r)&&(r=r(o||0,e,s));var d=e[t],h=n!=="get"?n:Kt(d)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Kt(d)?c?s_:qp:vf,v;if(dn(r)&&(~r.indexOf("random(")&&(r=pa(r)),r.charAt(1)==="="&&(v=fs(h,r)+(Rn(h)||0),(v||v===0)&&(r=v))),!u||h!==r||du)return!isNaN(h*r)&&r!==""?(v=new $n(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?l_:Yp,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&ff(t,r),t_.call(this,e,t,h,r,m,l||ai.stringFilter,c))},n_=function(e,t,n,r,o){if(Kt(e)&&(e=ra(e,o,t,n,r)),!$i(e)||e.style&&e.nodeType||Pn(e)||pp(e))return dn(e)?ra(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=ra(e[a],o,t,n,r);return s},Gp=function(e,t,n,r,o,s){var a,l,c,u;if(ni[e]&&(a=new ni[e]).init(o,a.rawVars?t[e]:n_(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new $n(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==ls))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kr,du,gf=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,w=e._overwrite==="auto"&&!af,S=e.timeline,D=r.easeReverse||d,C,T,P,M,y,R,F,N,z,H,V,W,B;if(S&&(!h||!o)&&(o="none"),e._ease=Co(o,fa.ease),e._rEase=D&&(Co(D)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(N=_[0]?Ao(_[0]).harness:0,W=N&&r[N.prop],C=Ll(r,hf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?vl:C0),g._lazy=0),s){if(qr(e._startAt=nn.set(_,fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!m)&&e._startAt.revert(vl),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=fi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&qn(l),immediateRender:a,stagger:0,parent:p},C),W&&(P[N.prop]=W),qr(e._startAt=nn.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&qn(l)||l&&!v,T=0;T<_.length;T++){if(y=_[T],F=y._gsap||pf(_)[T]._gsap,e._ptLookup[T]=H={},au[F.id]&&Gr.length&&Pl(),V=b===_?T:b.indexOf(y),N&&(z=new N).init(y,W||C,e,V,b)!==!1&&(e._pt=M=new $n(e._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(oe){H[oe]=M}),z.priority&&(R=1)),!N||W)for(P in C)ni[P]&&(z=Gp(P,C,e,V,y,b))?z.priority&&(R=1):H[P]=M=_f.call(e,y,P,"get",C[P],V,b,0,r.stringFilter);e._op&&e._op[T]&&e.kill(y,e._op[T]),w&&e._pt&&(kr=e,Xt.killTweensOf(y,H,e.globalTime(t)),B=!e.parent,kr=0),e._pt&&l&&(au[F.id]=1)}R&&Zp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&S.render(gi,!0,!0)},i_=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,m;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return du=1,e.vars[t]="+=0",gf(e,a),du=0,l?ha(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Jt(n)+Rn(d.e)),d.b&&(d.b=u.s+Rn(d.b))},r_=function(e,t){var n=e[0]?Ao(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=vs({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},o_=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},ra=function(e,t,n,r,o){return Kt(e)?e.call(t,n,r,o):dn(e)&&~e.indexOf("random(")?pa(e):e},Wp=df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xp={};Yn(Wp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Xp[i]=1});var nn=(function(i){hp(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:na(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Xt,b=(Pn(n)||pp(n)?gr(n[0]):"length"in r)?[n]:vi(n),w,S,D,C,T,P,M,y;if(a._targets=b.length?pf(b):ha("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||h||ka(c)||ka(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(w=a.timeline=new Wn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),w.kill(),w.parent=w._dp=cr(a),w._start=0,h||ka(c)||ka(u)){if(C=b.length,M=h&&Lp(h),$i(h))for(T in h)~Wp.indexOf(T)&&(y||(y={}),y[T]=h[T]);for(S=0;S<C;S++)D=Ll(r,Xp),D.stagger=0,R&&(D.easeReverse=R),y&&vs(D,y),P=b[S],D.duration=+ra(c,cr(a),S,P,b),D.delay=(+ra(u,cr(a),S,P,b)||0)-a._delay,!h&&C===1&&D.delay&&(a._delay=u=D.delay,a._start+=u,D.delay=0),w.to(P,D,M?M(S,P,b):0),w._ease=xt.none;w.duration()?c=u=0:a.timeline=0}else if(v){na(fi(w.vars.defaults,{ease:"none"})),w._ease=Co(v.ease||r.ease||"none");var F=0,N,z,H;if(Pn(v))v.forEach(function(V){return w.to(b,V,">")}),w.duration();else{D={};for(T in v)T==="ease"||T==="easeEach"||o_(T,v[T],D,v.easeEach);for(T in D)for(N=D[T].sort(function(V,W){return V.t-W.t}),F=0,S=0;S<N.length;S++)z=N[S],H={ease:z.e,duration:(z.t-(S?N[S-1].t:0))/100*c},H[T]=z.v,w.to(b,H,F),F+=H.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return m===!0&&!af&&(kr=cr(a),Xt.killTweensOf(b),kr=0),Vi(p,cr(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Wt(p._time)&&qn(d)&&F0(cr(a))&&p.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),_&&Ap(cr(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-It&&!u?l:r<It?0:r,h,m,v,g,_,p,b,w;if(!c)O0(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(h=Wt(d%g),d===l?(v=this._repeat,h=c):(_=Wt(d/g),v=~~_,v&&v===_?(h=c,v--):h>c&&(h=c)),p=this._yoyo&&v&1,p&&(h=c-h),_=xs(this._tTime,g),h===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=s=1,this.render(Wt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Rp(this,u?r:h,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var S=h<a;if(S!==this._inv){var D=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=D?(S?-1:1)/D:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(h/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(oi(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;w&&w.render(r<0?r:w._dur*w._ease(h/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&lu(this,r,o,s),oi(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&oi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&lu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(oi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){ma||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gf(this,c),u=this._ease(c/this._dur),i_(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(ql(this,0),this.parent||Tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,kr&&kr.vars.overwrite!==!0)._first||Js(this),this.parent&&s!==this.timeline.totalDuration()&&ys(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?vi(r):a,c=this._ptLookup,u=this._pt,d,h,m,v,g,_,p;if((!o||o==="all")&&I0(a,l))return o==="all"&&(this._pt=0),Js(this);for(d=this._op=this._op||[],o!=="all"&&(dn(o)&&(g={},Yn(o,function(b){return g[b]=1}),o=g),o=r_(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],o==="all"?(d[p]=o,v=h,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=h&&h[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Wl(this,_,"_pt"),delete h[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Js(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return ia(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return ia(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Xt.killTweensOf(r,o,s)},e})(_a);fi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(i){nn[i]=function(){var e=new Wn,t=uu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vf=function(e,t,n){return e[t]=n},qp=function(e,t,n){return e[t](n)},s_=function(e,t,n,r){return e[t](r.fp,n)},a_=function(e,t,n){return e.setAttribute(t,n)},xf=function(e,t){return Kt(e[t])?qp:lf(e[t])&&e.setAttribute?a_:vf},Yp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},l_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$p=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},c_=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},u_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},f_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Zp=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},$n=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||Yp,this.d=l||this,this.set=c||vf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=f_,this.m=n,this.mt=o,this.tween=r},i})();Yn(df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return hf[i]=1});ui.TweenMax=ui.TweenLite=nn;ui.TimelineLite=ui.TimelineMax=Wn;Xt=new Wn({sortChildren:!1,defaults:fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=kp;var Po=[],yl={},h_=[],Th=0,d_=0,dc=function(e){return(yl[e]||h_).map(function(t){return t()})},pu=function(){var e=Date.now(),t=[];e-Th>2&&(dc("matchMediaInit"),Po.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Bi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),dc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Th=e,dc("matchMedia"))},Kp=(function(){function i(t,n){this.selector=n&&fu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=d_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Kt(n)&&(o=r,r=n,n=Kt);var s=this,a=function(){var c=Ht,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=fu(o)),Ht=s,d=r.apply(s,arguments),Kt(d)&&s._r.push(d),Ht=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Kt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Ht;Ht=null,n(this),Ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=Po.length;s--;)Po[s].id===this.id&&Po.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),p_=(function(){function i(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){$i(n)||(n={matches:n});var s=new Kp(0,o||this.scope),a=s.conditions={},l,c,u;Ht&&!s.selector&&(s.selector=Ht.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Bi.matchMedia(n[c]),l&&(Po.indexOf(s)<0&&Po.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(pu):l.addEventListener("change",pu)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Il={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Op(r)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,r){dn(e)&&(e=vi(e)[0]);var o=Ao(e||{}).get,s=n?bp:Mp;return n==="native"&&(n=""),e&&(t?s((ni[t]&&ni[t].get||o)(e,t,n,r)):function(a,l,c){return s((ni[a]&&ni[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=ni[t],a=Ao(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;ls._pt=0,d.init(e,n?u+n:u,ls,0,[e]),d.render(1,d),ls._pt&&yf(1,ls)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=jn.to(e,fi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Co(e.ease,fa.ease)),yh(fa,e||{})},config:function(e){return yh(ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ni[a]&&!ui[a]&&ha(t+" effect requires "+a+" plugin.")}),cc[t]=function(a,l,c){return n(vi(a),fi(l||{},o),c)},s&&(Wn.prototype[t]=function(a,l,c){return this.add(cc[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){xt[e]=Co(t)},parseEase:function(e,t){return arguments.length?Co(e,t):xt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wn(e),r,o;for(n.smoothChildTiming=qn(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,r=Xt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&Vi(n,r,r._start-r._delay),r=o;return Vi(Xt,n,0),n},context:function(e,t){return e?new Kp(e,t):Ht},matchMedia:function(e){return new p_(e)},matchMediaRefresh:function(){return Po.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||pu()},addEventListener:function(e,t){var n=yl[e]||(yl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:X0,wrapYoyo:q0,distribute:Lp,random:Ip,snap:Dp,normalize:W0,getUnit:Rn,clamp:k0,splitColor:zp,toArray:vi,selector:fu,mapRange:Fp,pipe:V0,unitize:G0,interpolate:Y0,shuffle:Pp},install:vp,effects:cc,ticker:ii,updateRoot:Wn.updateRoot,plugins:ni,globalTimeline:Xt,core:{PropTween:$n,globals:xp,Tween:nn,Timeline:Wn,Animation:_a,getCache:Ao,_removeLinkedListItem:Wl,reverting:function(){return gn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return af=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Il[i]=nn[i]});ii.add(Wn.updateRoot);ls=Il.to({},{duration:0});var m_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},__=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=m_(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},pc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(dn(o)&&(l={},Yn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}__(a,o)}}}},jn=Il.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pc("roundProps",hu),pc("modifiers"),pc("snap",Dp))||Il;nn.version=Wn.version=jn.version="3.15.0";gp=1;cf()&&Ss();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Eh,Hr,hs,Sf,To,Ah,wf,g_=function(){return typeof window<"u"},vr={},xo=180/Math.PI,ds=Math.PI/180,Wo=Math.atan2,Rh=1e8,Mf=/([A-Z])/g,v_=/(left|right|width|margin|padding|x)/i,x_=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},M_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b_=function(e,t,n){return e.style[t]=n},T_=function(e,t,n){return e.style.setProperty(t,n)},E_=function(e,t,n){return e._gsap[t]=n},A_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},R_=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},C_=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Yt="transform",Zn=Yt+"Origin",P_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in vr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(r,a)}):this.tfm[e]=s.x?s[e]:fr(r,e),e===Zn&&(this.tfm.zOrigin=s.zOrigin);else return Gi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Yt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=Yt}(o||t)&&this.props.push(e,t,o[e])},Qp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Mf,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=wf(),(!o||!o.isStart)&&!n[Yt]&&(Qp(n),r.zOrigin&&n[Zn]&&(n[Zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},em=function(e,t){var n={target:e,props:[],revert:L_,save:P_};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},tm,_u=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},si=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Mf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ws(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),ws=function(e,t,n){var r=t||To,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ch[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Ch[s]:"")+e},gu=function(){g_()&&window.document&&(Eh=window,Hr=Eh.document,hs=Hr.documentElement,To=_u("div")||{style:{}},_u("div"),Yt=ws(Yt),Zn=Yt+"Origin",To.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tm=!!ws("perspective"),wf=jn.core.reverting,Sf=1)},Ph=function(e){var t=e.ownerSVGElement,n=_u("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),hs.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),hs.removeChild(n),o},Lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nm=function(e){var t,n;try{t=e.getBBox()}catch{t=Ph(e),n=1}return t&&(t.width||t.height)||n||(t=Ph(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lh(e,["x","cx","x1"])||0,y:+Lh(e,["y","cy","y1"])||0,width:0,height:0}:t},im=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nm(e))},Yr=function(e,t){if(t){var n=e.style,r;t in vr&&t!==Zn&&(t=Yt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Mf,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,r,o,s){var a=new $n(e._pt,t,n,0,1,s?Jp:jp);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},Dh={deg:1,rad:1,turn:1},D_={grid:1,flex:1},$r=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=To.style,l=v_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||Dh[r]||Dh[s])return o;if(s!=="px"&&!h&&(o=i(e,t,n,"px")),p=e.getCTM&&im(e),(m||s==="%")&&(vr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Jt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(h?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Hr||!g.appendChild)&&(g=Hr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===ii.time&&!_.uncache)return Jt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:Yr(e,t)}else(m||s==="%")&&!D_[si(g,"display")]&&(a.position=si(e,"position")),g===e&&(a.position="static"),g.appendChild(To),v=To[u],g.removeChild(To),a.position="absolute";return l&&m&&(_=Ao(g),_.time=ii.time,_.width=g[u]),Jt(h?v*o/d:v&&o?d/v*o:0)},fr=function(e,t,n,r){var o;return Sf||gu(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(o=va(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Fl(si(e,Zn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=Ul[t]&&Ul[t](e,t,n)||si(e,t)||Sp(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?$r(e,t,o,n)+n:o},I_=function(e,t,n,r){if(!n||n==="none"){var o=ws(t,e,1),s=o&&si(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=si(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,$p),l=0,c=0,u,d,h,m,v,g,_,p,b,w,S,D;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=si(e,t)||r,g?e.style[t]=g:Yr(e,t)),u=[n,r],kp(u),n=u[0],r=u[1],h=n.match(as)||[],D=r.match(as)||[],D.length){for(;d=as.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=h[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),_.charAt(1)==="="&&(_=fs(m,_)+S),p=parseFloat(_),w=_.substr((p+"").length),l=as.lastIndex-w.length,w||(w=w||ai.units[t]||S,l===r.length&&(r+=w,a.e+=w)),S!==w&&(m=$r(e,t,g,w)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Jp:jp;return _p.test(r)&&(a.e=0),this._pt=a,a},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},U_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ih[n]||n,t[1]=Ih[r]||r,t.join(" ")},F_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],vr[a]&&(l=1,a=a==="transformOrigin"?Zn:Yt),Yr(n,a);l&&(Yr(n,Yt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",va(n,1),s.uncache=1,Qp(r)))}},Ul={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new $n(e._pt,t,n,0,0,F_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ga=[1,0,0,1,0,0],rm={},om=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uh=function(e){var t=si(e,Yt);return om(t)?ga:t.substr(7).match(mp).map(Jt)},bf=function(e,t){var n=e._gsap||Ao(e),r=e.style,o=Uh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?ga:o):(o===ga&&!e.offsetParent&&e!==hs&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,hs.appendChild(e)),o=Uh(e),l?r.display=l:Yr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):hs.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},vu=function(e,t,n,r,o,s){var a=e._gsap,l=o||bf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],w=t.split(" "),S=parseFloat(w[0])||0,D=parseFloat(w[1])||0,C,T,P,M;n?l!==ga&&(T=m*_-v*g)&&(P=S*(_/T)+D*(-g/T)+(g*b-_*p)/T,M=S*(-v/T)+D*(m/T)-(m*b-v*p)/T,S=P,D=M):(C=nm(e),S=C.x+(~w[0].indexOf("%")?S/100*C.width:S),D=C.y+(~(w[1]||w[0]).indexOf("%")?D/100*C.height:D)),r||r!==!1&&a.smooth?(p=S-c,b=D-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=h+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=D,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Zn]="0px 0px",s&&(Vr(s,a,"xOrigin",c,S),Vr(s,a,"yOrigin",u,D),Vr(s,a,"xOffset",d,a.xOffset),Vr(s,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+D)},va=function(e,t){var n=e._gsap||new Vp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=si(e,Zn)||"0",u,d,h,m,v,g,_,p,b,w,S,D,C,T,P,M,y,R,F,N,z,H,V,W,B,oe,G,_e,Se,Ae,J,te;return u=d=h=g=_=p=b=w=S=0,m=v=1,n.svg=!!(e.getCTM&&im(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),T=bf(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),vu(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),D=n.xOrigin||0,C=n.yOrigin||0,T!==ga&&(R=T[0],F=T[1],N=T[2],z=T[3],u=H=T[4],d=V=T[5],T.length===6?(m=Math.sqrt(R*R+F*F),v=Math.sqrt(z*z+N*N),g=R||F?Wo(F,R)*xo:0,b=N||z?Wo(N,z)*xo+g:0,b&&(v*=Math.abs(Math.cos(b*ds))),n.svg&&(u-=D-(D*R+C*N),d-=C-(D*F+C*z))):(te=T[6],Ae=T[7],G=T[8],_e=T[9],Se=T[10],J=T[11],u=T[12],d=T[13],h=T[14],P=Wo(te,Se),_=P*xo,P&&(M=Math.cos(-P),y=Math.sin(-P),W=H*M+G*y,B=V*M+_e*y,oe=te*M+Se*y,G=H*-y+G*M,_e=V*-y+_e*M,Se=te*-y+Se*M,J=Ae*-y+J*M,H=W,V=B,te=oe),P=Wo(-N,Se),p=P*xo,P&&(M=Math.cos(-P),y=Math.sin(-P),W=R*M-G*y,B=F*M-_e*y,oe=N*M-Se*y,J=z*y+J*M,R=W,F=B,N=oe),P=Wo(F,R),g=P*xo,P&&(M=Math.cos(P),y=Math.sin(P),W=R*M+F*y,B=H*M+V*y,F=F*M-R*y,V=V*M-H*y,R=W,H=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Jt(Math.sqrt(R*R+F*F+N*N)),v=Jt(Math.sqrt(V*V+te*te)),P=Wo(H,V),b=Math.abs(P)>2e-4?P*xo:0,S=J?1/(J<0?-J:J):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!om(si(e,Yt)),W&&e.setAttribute("transform",W))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=Jt(m),n.scaleY=Jt(v),n.rotation=Jt(g)+a,n.rotationX=Jt(_)+a,n.rotationY=Jt(p)+a,n.skewX=b+a,n.skewY=w+a,n.transformPerspective=S+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Zn]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?O_:tm?sm:N_,n.uncache=0,n},Fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},mc=function(e,t,n){var r=Rn(t);return Jt(parseFloat(t)+parseFloat($r(e,"x",n+"px",r)))+r},N_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sm(e,t)},lo="0deg",Vs="0px",co=") ",sm=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,w=n.zOrigin,S="",D=p==="auto"&&e&&e!==1||p===!0;if(w&&(d!==lo||u!==lo)){var C=parseFloat(u)*ds,T=Math.sin(C),P=Math.cos(C),M;C=parseFloat(d)*ds,M=Math.cos(C),s=mc(b,s,T*M*-w),a=mc(b,a,-Math.sin(C)*-w),l=mc(b,l,P*M*-w+w)}_!==Vs&&(S+="perspective("+_+co),(r||o)&&(S+="translate("+r+"%, "+o+"%) "),(D||s!==Vs||a!==Vs||l!==Vs)&&(S+=l!==Vs||D?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+co),c!==lo&&(S+="rotate("+c+co),u!==lo&&(S+="rotateY("+u+co),d!==lo&&(S+="rotateX("+d+co),(h!==lo||m!==lo)&&(S+="skew("+h+", "+m+co),(v!==1||g!==1)&&(S+="scale("+v+", "+g+co),b.style[Yt]=S||"translate(0, 0)"},O_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,w=parseFloat(s),S=parseFloat(a),D,C,T,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ds,c*=ds,D=Math.cos(l)*d,C=Math.sin(l)*d,T=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=ds,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),D*=M,C*=M)),D=Jt(D),C=Jt(C),T=Jt(T),P=Jt(P)):(D=d,P=h,C=T=0),(w&&!~(s+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(w=$r(m,"x",s,"px"),S=$r(m,"y",a,"px")),(v||g||_||p)&&(w=Jt(w+v-(v*D+g*T)+_),S=Jt(S+g-(v*C+g*P)+p)),(r||o)&&(M=m.getBBox(),w=Jt(w+r/100*M.width),S=Jt(S+o/100*M.height)),M="matrix("+D+","+C+","+T+","+P+","+w+","+S+")",m.setAttribute("transform",M),b&&(m.style[Yt]=M)},z_=function(e,t,n,r,o){var s=360,a=dn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?xo:1),c=l-r,u=r+c+"deg",d,h;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Rh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Rh)%s-~~(c/s)*s)),e._pt=h=new $n(e._pt,t,n,r,c,y_),h.e=u,h.u="deg",e._props.push(n),h},Fh=function(e,t){for(var n in t)e[n]=t[n];return e},B_=function(e,t,n){var r=Fh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,h,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Yt]=t,a=va(n,1),Yr(n,Yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Yt],s[Yt]=t,a=va(n,1),s[Yt]=c);for(l in vr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=Rn(c),v=Rn(u),d=m!==v?$r(n,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new $n(e._pt,a,l,d,h-d,mu),e._pt.u=v||0,e._props.push(l));Fh(a,r)};Yn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});Ul[e>1?"border"+i:i]=function(a,l,c,u,d){var h,m;if(arguments.length<4)return h=s.map(function(v){return fr(a,v,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,m,d)}});var am={name:"css",register:gu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,h,m,v,g,_,p,b,w,S,D,C,T,P,M;Sf||gu(),this.styles=this.styles||em(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ni[g]&&Gp(g,t,n,r,e,o)))){if(m=typeof u,v=Ul[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=pa(u)),v)v(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Wr.lastIndex=0,Wr.test(c)||(_=Rn(c),p=Rn(u),p?_!==p&&(c=$r(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],dn(c)&&~c.indexOf("random(")&&(c=pa(c)),Rn(c+"")||c==="auto"||(c+=ai.units[g]||Rn(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),h=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(h===1&&fr(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),Vr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in vr,w){if(this.styles.save(g),M=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=si(e,"perspective"),y?e.style.perspective=y:Yr(e,"perspective")}d=parseFloat(u)}if(S||(D=e._gsap,D.renderTransform&&!t.parseTransform||va(e,t.parseTransform),C=t.smoothOrigin!==!1&&D.smooth,S=this._pt=new $n(this._pt,a,Yt,0,1,D.renderTransform,D,0,-1),S.dep=1),g==="scale")this._pt=new $n(this._pt,D,"scaleY",D.scaleY,(b?fs(D.scaleY,b+d):d)-D.scaleY||0,mu),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Zn,0,a[Zn]),u=U_(u),D.svg?vu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==D.zOrigin&&Vr(this,D,"zOrigin",D.zOrigin,p),Vr(this,a,g,Fl(c),Fl(u)));continue}else if(g==="svgOrigin"){vu(e,u,1,C,0,this);continue}else if(g in rm){z_(this,D,g,h,b?fs(h,b+u):u);continue}else if(g==="smoothOrigin"){Vr(this,D,"smooth",D.smooth,u);continue}else if(g==="force3D"){D[g]=u;continue}else if(g==="transform"){B_(this,u,e);continue}}else g in a||(g=ws(g)||g);if(w||(d||d===0)&&(h||h===0)&&!x_.test(u)&&g in a)_=(c+"").substr((h+"").length),d||(d=0),p=Rn(u)||(g in ai.units?ai.units[g]:_),_!==p&&(h=$r(e,g,c,p)),this._pt=new $n(this._pt,w?D:a,g,h,(b?fs(h,b+d):d)-h,!w&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?M_:mu),this._pt.u=p||0,w&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=w_):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=S_);else if(g in a)I_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){ff(g,u);continue}w||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}T&&Zp(this)},render:function(e,t){if(t.tween._time||!wf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Gi,getSetter:function(e,t,n){var r=Gi[t];return r&&r.indexOf(",")<0&&(t=r),t in vr&&t!==Zn&&(e._gsap.x||fr(e,"x"))?n&&Ah===n?t==="scale"?A_:E_:(Ah=n||{})&&(t==="scale"?R_:C_):e.style&&!lf(e.style[t])?b_:~t.indexOf("-")?T_:xf(e,t)},core:{_removeProperty:Yr,_getMatrix:bf}};jn.utils.checkPrefix=ws;jn.core.getStyleSaver=em;(function(i,e,t,n){var r=Yn(i+","+e+","+t,function(o){vr[o]=1});Yn(e,function(o){ai.units[o]="deg",rm[o]=1}),Gi[r[13]]=i+","+e,Yn(n,function(o){var s=o.split(":");Gi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ai.units[i]="px"});jn.registerPlugin(am);var Tf=jn.registerPlugin(am)||jn;Tf.core.Tween;const lm=[{id:"zyrax_drive",title:"Zyrax Drive",tags:"web • three.js • r3f • interactive • 3d",url:"https://kianpk.github.io/zyrax-drive/",colorBg:"#0a0c12",colorText:"#e8ecff"},{id:"orbit_desk",title:"Orbit Desk",tags:"web • react • three.js • portfolio • 3d",url:"https://kianpk.github.io/orbit-desk/",colorBg:"#10131a",colorText:"#f0f3ff"},{id:"playfield",title:"Playfield",tags:"web • three.js • ammo.js • physics • 3d",url:"https://kianpk.github.io/playfield/",colorBg:"#0d1520",colorText:"#d9f0ff"},{id:"tradeforge",title:"TradeForge",tags:"web3 • solidity • foundry • defi",url:"https://kianpk.github.io/tradeforge/",colorBg:"#0b1210",colorText:"#c8ffd8"},{id:"velocity_arena",title:"Velocity Arena",tags:"web • vue • socket.io • multiplayer • game",url:"https://kianpk.github.io/velocity-arena/",colorBg:"#120a14",colorText:"#ffd6f0"},{id:"neon_serpent",title:"Neon Serpent",tags:"web • canvas • arcade • game",url:"https://kianpk.github.io/neon-serpent/",colorBg:"#060b12",colorText:"#9dffe8"},{id:"hexsweep",title:"Hexsweep",tags:"web • svg • puzzle • game",url:"https://kianpk.github.io/hexsweep/",colorBg:"#101018",colorText:"#e4e8ff"},{id:"brickforge",title:"Brickforge",tags:"web • canvas • arcade • particles",url:"https://kianpk.github.io/brickforge/",colorBg:"#140c0a",colorText:"#ffe0d0"},{id:"zyrax_studio",title:"Zyrax Studio",tags:"web • three.js • scroll • immersive",url:"https://kianpk.github.io/zyrax-studio/",colorBg:"#0e1016",colorText:"#f0f1fa"},{id:"server_pulse",title:"Server Pulse",tags:"web • cs2 • realtime • dashboard",url:"https://kianpk.github.io/server-pulse/",colorBg:"#0a1014",colorText:"#cde8ff"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="170",k_=0,Nh=1,H_=2,cm=1,V_=2,lr=3,Zr=0,Kn=1,Cn=2,Ai=0,Xr=1,Oh=2,zh=3,Bh=4,xa=5,On=100,G_=101,W_=102,X_=103,q_=104,Sl=200,mi=201,Y_=202,$_=203,Nl=204,Ol=205,Z_=206,K_=207,j_=208,J_=209,Q_=210,eg=211,tg=212,ng=213,ig=214,xu=0,yu=1,Su=2,Ms=3,wu=4,Mu=5,bu=6,Tu=7,um=0,rg=1,og=2,Yi=0,sg=1,ag=2,lg=3,cg=4,ug=5,fg=6,hg=7,fm=300,bs=301,Ts=302,Eu=303,Au=304,Yl=306,ps=1e3,zn=1001,zl=1002,sn=1003,dg=1004,Ha=1005,vt=1006,_c=1007,Wi=1008,Ri=1009,hm=1010,dm=1011,Do=1012,Af=1013,Io=1014,Xn=1015,Xi=1016,Rf=1017,Cf=1018,Es=1020,pm=35902,mm=1021,_m=1022,_n=1023,gm=1024,vm=1025,ms=1026,As=1027,Pf=1028,Lf=1029,xm=1030,Df=1031,If=1033,wl=33776,Ml=33777,bl=33778,Tl=33779,Ru=35840,Cu=35841,Pu=35842,Lu=35843,Du=36196,Iu=37492,Uu=37496,Fu=37808,Nu=37809,Ou=37810,zu=37811,Bu=37812,ku=37813,Hu=37814,Vu=37815,Gu=37816,Wu=37817,Xu=37818,qu=37819,Yu=37820,$u=37821,El=36492,Zu=36494,Ku=36495,ym=36283,ju=36284,Ju=36285,Qu=36286,pg=3200,mg=3201,_g=0,gg=1,Qt="",Nn="srgb",Zi="srgb-linear",$l="linear",Pt="srgb",Xo=7680,kh=519,vg=512,xg=513,yg=514,Sm=515,Sg=516,wg=517,Mg=518,bg=519,Hh=35044,Cr=35048,Vh="300 es",dr=2e3,Bl=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const oa=Math.PI/180,ya=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function An(i,e,t){return Math.max(e,Math.min(t,i))}function Uf(i,e){return(i%e+e)%e}function Tg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Eg(i,e,t){return i!==e?(t-i)/(e-i):0}function sa(i,e,t){return(1-t)*i+t*e}function Ag(i,e,t,n){return sa(i,e,1-Math.exp(-t*n))}function Rg(i,e=1){return e-Math.abs(Uf(i,e*2)-e)}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dg(i,e){return i+Math.random()*(e-i)}function Ig(i){return i*(.5-Math.random())}function Ug(i){i!==void 0&&(Gh=i);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fg(i){return i*oa}function Ng(i){return i*ya}function Og(i){return(i&i-1)===0&&i!==0}function zg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kg(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),h=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:oa,RAD2DEG:ya,generateUUID:Ps,clamp:An,euclideanModulo:Uf,mapLinear:Tg,inverseLerp:Eg,lerp:sa,damp:Ag,pingpong:Rg,smoothstep:Cg,smootherstep:Pg,randInt:Lg,randFloat:Dg,randFloatSpread:Ig,seededRandom:Ug,degToRad:Fg,radToDeg:Ng,isPowerOfTwo:Og,ceilPowerOfTwo:zg,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:kg,normalize:Un,denormalize:ss};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,o,s,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],w=r[4],S=r[7],D=r[2],C=r[5],T=r[8];return o[0]=s*g+a*b+l*D,o[3]=s*_+a*w+l*C,o[6]=s*p+a*S+l*T,o[1]=c*g+u*b+d*D,o[4]=c*_+u*w+d*C,o[7]=c*p+u*S+d*T,o[2]=h*g+m*b+v*D,o[5]=h*_+m*w+v*C,o[8]=h*p+m*S+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,m=c*o-s*l,v=t*d+n*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gc.makeScale(e,t)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new dt;function wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hg(){const i=Sa("canvas");return i.style.display="block",i}const Wh={};function ea(i){i in Wh||(Wh[i]=!0,console.warn(i))}function Vg(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Gg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?$l:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],Yh=[.3127,.329],$h=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[Zi]:{primaries:Xh,whitePoint:Yh,transfer:$l,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:Xh,whitePoint:Yh,transfer:Pt,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}});let qo;class Xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qo===void 0&&(qo=Sa("canvas")),qo.width=e.width,qo.height=e.height;const n=qo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=mr(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class Mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vc(r[s].image)):o.push(vc(r[s]))}else o=vc(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class vn extends Cs{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=zn,r=zn,o=vt,s=Wi,a=_n,l=Ri,c=vn.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ps(),this.name="",this.source=new Mm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=fm;vn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(m+1)/2,D=(p+1)/2,C=(u+h)/4,T=(d+g)/4,P=(v+_)/4;return w>S&&w>D?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=C/n,o=T/n):S>D?S<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),n=C/r,o=P/r):D<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),n=T/o,r=P/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $g extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends $g{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bm extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zg extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==h||c!==m||u!==v){let _=1-a;const p=l*h+c*m+u*v+d*g,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const D=Math.sqrt(w),C=Math.atan2(D,p*b);_=Math.sin(_*C)/D,a=Math.sin(a*C)/D}const S=a*b;if(l=l*_+h*S,c=c*_+m*S,u=u*_+v*S,d=d*_+g*S,_===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],h=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*h,e[t+1]=l*v+u*h+c*d-a*m,e[t+2]=c*v+u*m+a*h-l*d,e[t+3]=u*v-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),h=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"YXZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"ZXY":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"ZYX":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"YZX":this._x=h*u*d+c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d-h*m*v;break;case"XZY":this._x=h*u*d-c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new q,Kh=new Bn;class Ls{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Si):Si.fromBufferAttribute(o,s),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Ga.subVectors(this.max,Gs),Yo.subVectors(e.a,Gs),$o.subVectors(e.b,Gs),Zo.subVectors(e.c,Gs),Pr.subVectors($o,Yo),Lr.subVectors(Zo,$o),uo.subVectors(Yo,Zo);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-uo.z,uo.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,uo.z,0,-uo.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-uo.y,uo.x,0];return!yc(t,Yo,$o,Zo,Ga)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Yo,$o,Zo,Ga))?!1:(Wa.crossVectors(Pr,Lr),t=[Wa.x,Wa.y,Wa.z],yc(t,Yo,$o,Zo,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new q,new q,new q,new q,new q,new q,new q,new q],Si=new q,Va=new Ls,Yo=new q,$o=new q,Zo=new q,Pr=new q,Lr=new q,uo=new q,Gs=new q,Ga=new q,Wa=new q,fo=new q;function yc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){fo.fromArray(i,o);const a=r.x*Math.abs(fo.x)+r.y*Math.abs(fo.y)+r.z*Math.abs(fo.z),l=e.dot(fo),c=t.dot(fo),u=n.dot(fo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Kg=new Ls,Ws=new q,Sc=new q;class Ff{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kg.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Sc)),this.expandByPoint(Ws.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new q,wc=new q,Xa=new q,Dr=new q,Mc=new q,qa=new q,bc=new q;class jg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(wc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Xa),a=Dr.dot(this.direction),l=-Dr.dot(Xa),c=Dr.lengthSq(),u=Math.abs(1-s*s);let d,h,m,v;if(u>0)if(d=s*l-a,h=s*a-l,v=o*u,d>=0)if(h>=-v)if(h<=v){const g=1/u;d*=g,h*=g,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wc).addScaledVector(Xa,h),m}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),r=nr.dot(nr)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,r,o){Mc.subVectors(t,e),qa.subVectors(n,e),bc.crossVectors(Mc,qa);let s=this.direction.dot(bc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Dr.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Dr,qa));if(l<0)return null;const c=a*this.direction.dot(Mc.cross(Dr));if(c<0||l+c>s)return null;const u=-a*Dr.dot(bc);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,o,s,a,l,c,u,d,h,m,v,g,_){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,h,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,h,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),o=1/Ko.setFromMatrixColumn(e,1).length(),s=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,v=c*u,g=c*d;t[0]=h+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,v=c*u,g=c*d;t[0]=h-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=h-g*d}else if(e.order==="XZY"){const h=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,n){const r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ir.crossVectors(n,ei),Ir.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ir.crossVectors(n,ei)),Ir.normalize(),Ya.crossVectors(ei,Ir),r[0]=Ir.x,r[4]=Ya.x,r[8]=ei.x,r[1]=Ir.y,r[5]=Ya.y,r[9]=ei.y,r[2]=Ir.z,r[6]=Ya.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],w=n[7],S=n[11],D=n[15],C=r[0],T=r[4],P=r[8],M=r[12],y=r[1],R=r[5],F=r[9],N=r[13],z=r[2],H=r[6],V=r[10],W=r[14],B=r[3],oe=r[7],G=r[11],_e=r[15];return o[0]=s*C+a*y+l*z+c*B,o[4]=s*T+a*R+l*H+c*oe,o[8]=s*P+a*F+l*V+c*G,o[12]=s*M+a*N+l*W+c*_e,o[1]=u*C+d*y+h*z+m*B,o[5]=u*T+d*R+h*H+m*oe,o[9]=u*P+d*F+h*V+m*G,o[13]=u*M+d*N+h*W+m*_e,o[2]=v*C+g*y+_*z+p*B,o[6]=v*T+g*R+_*H+p*oe,o[10]=v*P+g*F+_*V+p*G,o[14]=v*M+g*N+_*W+p*_e,o[3]=b*C+w*y+S*z+D*B,o[7]=b*T+w*R+S*H+D*oe,o[11]=b*P+w*F+S*V+D*G,o[15]=b*M+w*N+S*W+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*h+n*c*h+r*a*m-n*l*m)+g*(+t*l*m-t*c*h+o*s*h-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*h+r*s*d-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*h*c+g*l*m-a*_*m-d*l*p+a*h*p,w=v*h*c-u*_*c-v*l*m+s*_*m+u*l*p-s*h*p,S=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,D=v*d*l-u*g*l-v*a*h+s*g*h+u*a*_-s*d*_,C=t*b+n*w+r*S+o*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=b*T,e[1]=(g*h*o-d*_*o-g*r*m+n*_*m+d*r*p-n*h*p)*T,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*T,e[3]=(d*l*o-a*h*o-d*r*c+n*h*c+a*r*m-n*l*m)*T,e[4]=w*T,e[5]=(u*_*o-v*h*o+v*r*m-t*_*m-u*r*p+t*h*p)*T,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*T,e[7]=(s*h*o-u*l*o+u*r*c-t*h*c-s*r*m+t*l*m)*T,e[8]=S*T,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*T,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*T,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*T,e[12]=D*T,e[13]=(u*g*r-v*d*r+v*n*h-t*g*h-u*n*_+t*d*_)*T,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*T,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,h=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,w=l*u,S=l*d,D=n.x,C=n.y,T=n.z;return r[0]=(1-(g+p))*D,r[1]=(m+S)*D,r[2]=(v-w)*D,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+p))*C,r[6]=(_+b)*C,r[7]=0,r[8]=(v+w)*T,r[9]=(_-b)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Ko.set(r[0],r[1],r[2]).length();const s=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],wi.copy(this);const c=1/o,u=1/s,d=1/a;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=dr){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let m,v;if(a===dr)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Bl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=dr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),h=(t+e)*c,m=(n+r)*u;let v,g;if(a===dr)v=(s+o)*d,g=-2*d;else if(a===Bl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ko=new q,wi=new yt,Jg=new q(0,0,0),Qg=new q(1,1,1),Ir=new q,Ya=new q,ei=new q,jh=new yt,Jh=new Bn;class hi{constructor(e=0,t=0,n=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-An(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ev=0;const Qh=new q,jo=new Bn,ir=new yt,$a=new q,Xs=new q,tv=new q,nv=new Bn,ed=new q(1,0,0),td=new q(0,1,0),nd=new q(0,0,1),id={type:"added"},iv={type:"removed"},Jo={type:"childadded",child:null},Tc={type:"childremoved",child:null};class li extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new q,t=new hi,n=new Bn,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new dt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.multiply(jo),this}rotateOnWorldAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.premultiply(jo),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Xs,$a,this.up):ir.lookAt($a,Xs,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),jo.setFromRotationMatrix(ir),this.quaternion.premultiply(jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iv),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,nv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}li.DEFAULT_UP=new q(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new q,rr=new q,Ec=new q,or=new q,Qo=new q,es=new q,rd=new q,Ac=new q,Rc=new q,Cc=new q,Pc=new Ft,Lc=new Ft,Dc=new Ft;class Ei{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mi.subVectors(e,t),r.cross(Mi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Mi.subVectors(r,t),rr.subVectors(n,t),Ec.subVectors(e,t);const s=Mi.dot(Mi),a=Mi.dot(rr),l=Mi.dot(Ec),c=rr.dot(rr),u=rr.dot(Ec),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,v=(s*u-a*l)*h;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,or.x),l.addScaledVector(s,or.y),l.addScaledVector(a,or.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Pc.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Pc,o.x),s.addScaledVector(Lc,o.y),s.addScaledVector(Dc,o.z),s}static isFrontFacing(e,t,n,r){return Mi.subVectors(n,t),rr.subVectors(e,t),Mi.cross(rr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Mi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Qo.subVectors(r,n),es.subVectors(o,n),Ac.subVectors(e,n);const l=Qo.dot(Ac),c=es.dot(Ac);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,r);const u=Qo.dot(Rc),d=es.dot(Rc);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Qo,s);Cc.subVectors(e,o);const m=Qo.dot(Cc),v=es.dot(Cc);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(es,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return rd.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(rd,a);const p=1/(_+g+h);return s=g*p,a=h*p,t.copy(n).addScaledVector(Qo,s).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=Uf(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Ic(s,o,e+1/3),this.g=Ic(s,o,e),this.b=Ic(s,o,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=Em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Mt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(An(Mn.r*255,0,255))*65536+Math.round(An(Mn.g*255,0,255))*256+Math.round(An(Mn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,r=Mn.g,o=Mn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Nn){Mt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,r=Mn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Za);const n=sa(Ur.h,Za.h,t),r=sa(Ur.s,Za.s,t),o=sa(Ur.l,Za.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new $e;$e.NAMES=Em;let rv=0;class Zl extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Ps(),this.name="",this.blending=Xr,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nf extends Zl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=ov();function ov(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function sv(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=An(i,-65504,65504),hr.floatView[0]=i;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function av(i){const e=i>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(i&1023)]+hr.exponentTable[e],hr.floatView[0]}const od={toHalfFloat:sv,fromHalfFloat:av},tn=new q,Ka=new et;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class Am extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rm extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lo extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lv=0;const di=new yt,Uc=new li,ts=new q,ti=new Ls,qs=new Ls,hn=new q;class yr extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wm(e)?Rm:Am)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new dt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lo(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ti.min,qs.min),ti.expandByPoint(hn),hn.addVectors(ti.max,qs.max),ti.expandByPoint(hn)):(ti.expandByPoint(qs.min),ti.expandByPoint(qs.max))}ti.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)hn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),hn.add(ts)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,u=new q,d=new q,h=new et,m=new et,v=new et,g=new q,_=new q;function p(P,M,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),h.fromBufferAttribute(o,P),m.fromBufferAttribute(o,M),v.fromBufferAttribute(o,y),u.sub(c),d.sub(c),m.sub(h),v.sub(h);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(R),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),a[P].add(g),a[M].add(g),a[y].add(g),l[P].add(_),l[M].add(_),l[y].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){const y=b[P],R=y.start,F=y.count;for(let N=R,z=R+F;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new q,S=new q,D=new q,C=new q;function T(P){D.fromBufferAttribute(r,P),C.copy(D);const M=a[P];w.copy(M),w.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(C,M);const R=S.dot(l[P])<0?-1:1;s.setXYZW(P,w.x,w.y,w.z,R)}for(let P=0,M=b.length;P<M;++P){const y=b[P],R=y.start,F=y.count;for(let N=R,z=R+F;N<z;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)h[v++]=c[m++]}return new Zt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sd=new yt,ho=new jg,ja=new Ff,ad=new q,Ja=new q,Qa=new q,el=new q,Fc=new q,tl=new q,ld=new q,nl=new q;class Ut extends li{constructor(e=new yr,t=new Nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){tl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Fc.fromBufferAttribute(d,e),s?tl.addScaledVector(Fc,u):tl.addScaledVector(Fc.sub(t),u))}t.add(tl)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(o),ho.copy(e.ray).recast(e.near),!(ja.containsPoint(ho.origin)===!1&&(ho.intersectSphere(ja,ad)===null||ho.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(sd.copy(o).invert(),ho.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&ho.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const _=h[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),w=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=b,D=w;S<D;S+=3){const C=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=il(this,p,e,n,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),w=a.getX(_+1),S=a.getX(_+2);r=il(this,s,e,n,c,u,d,b,w,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const _=h[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),w=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=b,D=w;S<D;S+=3){const C=S,T=S+1,P=S+2;r=il(this,p,e,n,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,w=_+1,S=_+2;r=il(this,s,e,n,c,u,d,b,w,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function cv(i,e,t,n,r,o,s,a){let l;if(e.side===Kn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Zr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nl);return c<t.near||c>t.far?null:{distance:c,point:nl.clone(),object:i}}function il(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ja),i.getVertexPosition(l,Qa),i.getVertexPosition(c,el);const u=cv(i,e,t,n,Ja,Qa,el,ld);if(u){const d=new q;Ei.getBarycoord(ld,Ja,Qa,el,d),r&&(u.uv=Ei.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(u.uv1=Ei.getInterpolatedAttribute(o,a,l,c,d,new et)),s&&(u.normal=Ei.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};Ei.getNormal(Ja,Qa,el,h.normal),u.face=h,u.barycoord=d}return u}class Ma extends yr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Lo(c,3)),this.setAttribute("normal",new Lo(u,3)),this.setAttribute("uv",new Lo(d,2));function v(g,_,p,b,w,S,D,C,T,P,M){const y=S/T,R=D/P,F=S/2,N=D/2,z=C/2,H=T+1,V=P+1;let W=0,B=0;const oe=new q;for(let G=0;G<V;G++){const _e=G*R-N;for(let Se=0;Se<H;Se++){const Ae=Se*y-F;oe[g]=Ae*b,oe[_]=_e*w,oe[p]=z,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[_]=0,oe[p]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(Se/T),d.push(1-G/P),W+=1}}for(let G=0;G<P;G++)for(let _e=0;_e<T;_e++){const Se=h+_e+H*G,Ae=h+_e+H*(G+1),J=h+(_e+1)+H*(G+1),te=h+(_e+1)+H*G;l.push(Se,Ae,te),l.push(Ae,J,te),B+=6}a.addGroup(m,B,M),m+=B,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const r in n)e[r]=n[r]}return e}function uv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const fv={clone:Rs,merge:Fn};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Zl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pm extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new q,cd=new et,ud=new et;class Gn extends Pm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ud),t.subVectors(ud,cd)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class pv extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new Gn(ns,is,e,t);o.layers=this.layers,this.add(o);const s=new Gn(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new Gn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new Gn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new Gn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lm extends vn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mv extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ma(5,5,5),o=new At({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Ai});o.uniforms.tEquirect.value=t;const s=new Ut(r,o),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=vt),new pv(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const Nc=new q,_v=new q,gv=new dt;class yo{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nc.subVectors(n,t).cross(_v.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gv.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new Ff,rl=new q;class Dm{constructor(e=new yo,t=new yo,n=new yo,r=new yo,o=new yo,s=new yo){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],w=r[14],S=r[15];if(n[0].setComponents(l-o,h-c,_-m,S-p).normalize(),n[1].setComponents(l+o,h+c,_+m,S+p).normalize(),n[2].setComponents(l+s,h+u,_+v,S+b).normalize(),n[3].setComponents(l-s,h-u,_-v,S-b).normalize(),n[4].setComponents(l-a,h-d,_-g,S-w).normalize(),t===dr)n[5].setComponents(l+a,h+d,_+g,S+w).normalize();else if(t===Bl)n[5].setComponents(a,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Im(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function vv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<d.length;m++){const v=d[h],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,d[h]=g)}d.length=h+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ci extends yr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*h-s;for(let w=0;w<c;w++){const S=w*d-o;v.push(S,-b,0),g.push(0,0,1),_.push(w/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,S=b+c*(p+1),D=b+1+c*(p+1),C=b+1+c*p;m.push(w,S,C),m.push(S,D,C)}this.setIndex(m),this.setAttribute("position",new Lo(v,3)),this.setAttribute("normal",new Lo(g,3)),this.setAttribute("uv",new Lo(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
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
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
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
#endif`,Iv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,gx=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
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
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
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
#endif`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,y1=`varying vec3 vWorldDirection;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,E1=`#define DISTANCE
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
}`,A1=`#define DISTANCE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,I1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,k1=`#define PHONG
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
}`,H1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,G1=`#define STANDARD
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
}`,W1=`#define TOON
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
}`,X1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,Z1=`uniform vec3 color;
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
}`,K1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Sv,alphamap_pars_fragment:wv,alphatest_fragment:Mv,alphatest_pars_fragment:bv,aomap_fragment:Tv,aomap_pars_fragment:Ev,batching_pars_vertex:Av,batching_vertex:Rv,begin_vertex:Cv,beginnormal_vertex:Pv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Ov,color_fragment:zv,color_pars_fragment:Bv,color_pars_vertex:kv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:qv,emissivemap_fragment:Yv,emissivemap_pars_fragment:$v,colorspace_fragment:Zv,colorspace_pars_fragment:Kv,envmap_fragment:jv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:ox,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:hx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:_x,lights_physical_pars_fragment:gx,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:Tx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Nx,normal_fragment_maps:Ox,normal_pars_fragment:zx,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:$x,project_vertex:Zx,dithering_fragment:Kx,dithering_pars_fragment:jx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:r1,skinning_pars_vertex:o1,skinning_vertex:s1,skinnormal_vertex:a1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:f1,transmission_fragment:h1,transmission_pars_fragment:d1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:_1,worldpos_vertex:g1,background_vert:v1,background_frag:x1,backgroundCube_vert:y1,backgroundCube_frag:S1,cube_vert:w1,cube_frag:M1,depth_vert:b1,depth_frag:T1,distanceRGBA_vert:E1,distanceRGBA_frag:A1,equirect_vert:R1,equirect_frag:C1,linedashed_vert:P1,linedashed_frag:L1,meshbasic_vert:D1,meshbasic_frag:I1,meshlambert_vert:U1,meshlambert_frag:F1,meshmatcap_vert:N1,meshmatcap_frag:O1,meshnormal_vert:z1,meshnormal_frag:B1,meshphong_vert:k1,meshphong_frag:H1,meshphysical_vert:V1,meshphysical_frag:G1,meshtoon_vert:W1,meshtoon_frag:X1,points_vert:q1,points_frag:Y1,shadow_vert:$1,shadow_frag:Z1,sprite_vert:K1,sprite_frag:j1},Oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ol={r:0,b:0,g:0},mo=new hi,J1=new yt;function Q1(i,e,t,n,r,o,s){const a=new $e(0);let l=o===!0?0:1,c,u,d=null,h=0,m=null;function v(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function g(b){let w=!1;const S=v(b);S===null?p(a,l):S&&S.isColor&&(p(S,1),w=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){const S=v(w);S&&(S.isCubeTexture||S.mapping===Yl)?(u===void 0&&(u=new Ut(new Ma(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Rs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mo.copy(w.backgroundRotation),mo.x*=-1,mo.y*=-1,mo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(mo)),u.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,(d!==S||h!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ut(new ci(2,2),new At({name:"BackgroundMaterial",uniforms:Rs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(ol,Cm(i)),n.buffers.color.setClear(ol.r,ol.g,ol.b,w,s)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function ey(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let o=r,s=!1;function a(y,R,F,N,z){let H=!1;const V=d(N,F,R);o!==V&&(o=V,c(o.object)),H=m(y,N,F,z),H&&v(y,N,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,S(y,R,F,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,F){const N=F.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let V=H[N];return V===void 0&&(V=h(l()),H[N]=V),V}function h(y){const R=[],F=[],N=[];for(let z=0;z<t;z++)R[z]=0,F[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,R,F,N){const z=o.attributes,H=R.attributes;let V=0;const W=F.getAttributes();for(const B in W)if(W[B].location>=0){const G=z[B];let _e=H[B];if(_e===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),G===void 0||G.attribute!==_e||_e&&G.data!==_e.data)return!0;V++}return o.attributesNum!==V||o.index!==N}function v(y,R,F,N){const z={},H=R.attributes;let V=0;const W=F.getAttributes();for(const B in W)if(W[B].location>=0){let G=H[B];G===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(G=y.instanceColor));const _e={};_e.attribute=G,G&&G.data&&(_e.data=G.data),z[B]=_e,V++}o.attributes=z,o.attributesNum=V,o.index=N}function g(){const y=o.newAttributes;for(let R=0,F=y.length;R<F;R++)y[R]=0}function _(y){p(y,0)}function p(y,R){const F=o.newAttributes,N=o.enabledAttributes,z=o.attributeDivisors;F[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),z[y]!==R&&(i.vertexAttribDivisor(y,R),z[y]=R)}function b(){const y=o.newAttributes,R=o.enabledAttributes;for(let F=0,N=R.length;F<N;F++)R[F]!==y[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function w(y,R,F,N,z,H,V){V===!0?i.vertexAttribIPointer(y,R,F,z,H):i.vertexAttribPointer(y,R,F,N,z,H)}function S(y,R,F,N){g();const z=N.attributes,H=F.getAttributes(),V=R.defaultAttributeValues;for(const W in H){const B=H[W];if(B.location>=0){let oe=z[W];if(oe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const G=oe.normalized,_e=oe.itemSize,Se=e.get(oe);if(Se===void 0)continue;const Ae=Se.buffer,J=Se.type,te=Se.bytesPerElement,ce=J===i.INT||J===i.UNSIGNED_INT||oe.gpuType===Af;if(oe.isInterleavedBufferAttribute){const le=oe.data,Me=le.stride,Ue=oe.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<B.locationSize;ze++)p(B.location+ze,le.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<B.locationSize;ze++)_(B.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ze=0;ze<B.locationSize;ze++)w(B.location+ze,_e/B.locationSize,J,G,Me*te,(Ue+_e/B.locationSize*ze)*te,ce)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<B.locationSize;le++)p(B.location+le,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<B.locationSize;le++)_(B.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let le=0;le<B.locationSize;le++)w(B.location+le,_e/B.locationSize,J,G,_e*te,_e/B.locationSize*le*te,ce)}}else if(V!==void 0){const G=V[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(B.location,G);break;case 3:i.vertexAttrib3fv(B.location,G);break;case 4:i.vertexAttrib4fv(B.location,G);break;default:i.vertexAttrib1fv(B.location,G)}}}}b()}function D(){P();for(const y in n){const R=n[y];for(const F in R){const N=R[F];for(const z in N)u(N[z].object),delete N[z];delete R[F]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const F in R){const N=R[F];for(const z in N)u(N[z].object),delete N[z];delete R[F]}delete n[y.id]}function T(y){for(const R in n){const F=n[R];if(F[y.id]===void 0)continue;const N=F[y.id];for(const z in N)u(N[z].object),delete N[z];delete F[y.id]}}function P(){M(),s=!0,o!==r&&(o=r,c(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function ty(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*h[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ny(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ri&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:D,maxSamples:C}}function iy(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new yo,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||r;return r=h,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,w=b*4;let S=p.clippingState||null;l.value=S,S=u(v,h,w,m);for(let D=0;D!==w;++D)S[D]=t[D];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,S=m;w!==g;++w,S+=4)s.copy(d[w]).applyMatrix4(b,a),s.normal.toArray(_,S),_[S+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function ry(i){let e=new WeakMap;function t(s,a){return a===Eu?s.mapping=bs:a===Au&&(s.mapping=Ts),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Eu||a===Au)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new mv(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Kl extends Pm{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,fd=[.125,.215,.35,.446,.526,.582],Mo=20,Oc=new Kl,hd=new $e;let zc=null,Bc=0,kc=0,Hc=!1;const So=(1+Math.sqrt(5))/2,rs=1/So,dd=[new q(-So,rs,0),new q(So,rs,0),new q(-rs,0,So),new q(rs,0,So),new q(0,So,-rs),new q(0,So,rs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,kc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Xi,format:_n,colorSpace:Zi,depthBuffer:!1},r=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oy(o)),this._blurMaterial=sy(o,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,r){const a=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hd),u.toneMapping=Yi,u.autoClear=!1;const m=new Nf({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new Ut(new Ma,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(hd),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;sl(r,b*w,p>2?w:0,w,w),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bs||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=dd[(r-o-1)%dd.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Mo-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):Mo;_>Mo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Mo}`);const p=[];let b=0;for(let T=0;T<Mo;++T){const P=T/g,M=Math.exp(-P*P/2);p.push(M),T===0?b+=M:T<_&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-n;const S=this._sizeLods[r],D=3*S*(r>w-cs?r-w+cs:0),C=4*(this._cubeSize-S);sl(t,D,C,3*S,2*S),l.setRenderTarget(t),l.render(d,Oc)}}function oy(i){const e=[],t=[],n=[];let r=i;const o=i-cs+1+fd.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-cs?l=fd[s-i+cs-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),w=new Float32Array(_*v*m),S=new Float32Array(p*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,P=C>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,g*v*C),w.set(h,_*v*C);const y=[C,C,C,C,C,C];S.set(y,p*v*C)}const D=new yr;D.setAttribute("position",new Zt(b,g)),D.setAttribute("uv",new Zt(w,_)),D.setAttribute("faceIndex",new Zt(S,p)),e.push(D),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(i,e,t){const n=new xr(i,e,t);return n.texture.mapping=Yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sy(i,e,t){const n=new Float32Array(Mo),r=new q(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function _d(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function gd(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Of(){return`

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
	`}function ay(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eu||l===Au,u=l===bs||l===Ts;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new pd(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new pd(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function ly(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ea("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cy(i,e,t,n){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let w=0,S=b.length;w<S;w+=3){const D=b[w+0],C=b[w+1],T=b[w+2];h.push(D,C,C,T,T,D)}}else if(v!==void 0){const b=v.array;g=v.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const D=w+0,C=w+1,T=w+2;h.push(D,C,C,T,T,D)}}else return;const _=new(wm(h)?Rm:Am)(h,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function uy(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,m){i.drawElements(n,m,o,h*s),t.update(m,n,1)}function c(h,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,h*s,v),t.update(m,n,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,h,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(h,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)c(h[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,h,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hy(i,e,t){const n=new WeakMap,r=new Ft;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let D=a.attributes.position.count*S,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const T=new Float32Array(D*C*4*d),P=new bm(T,D,C,d);P.type=Xn,P.needsUpdate=!0;const M=S*4;for(let R=0;R<d;R++){const F=p[R],N=b[R],z=w[R],H=D*C*4*R;for(let V=0;V<F.count;V++){const W=V*M;v===!0&&(r.fromBufferAttribute(F,V),T[H+W+0]=r.x,T[H+W+1]=r.y,T[H+W+2]=r.z,T[H+W+3]=0),g===!0&&(r.fromBufferAttribute(N,V),T[H+W+4]=r.x,T[H+W+5]=r.y,T[H+W+6]=r.z,T[H+W+7]=0),_===!0&&(r.fromBufferAttribute(z,V),T[H+W+8]=r.x,T[H+W+9]=r.y,T[H+W+10]=r.z,T[H+W+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new et(D,C)},n.set(a,h),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function dy(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class kl extends vn{constructor(e,t,n,r,o,s,a,l,c,u=ms){if(u!==ms&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Io),n===void 0&&u===As&&(n=Es),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Um=new vn,vd=new kl(1,1),Fm=new bm,Nm=new Zg,Om=new Lm,xd=[],yd=[],Sd=new Float32Array(16),wd=new Float32Array(9),Md=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=xd[r];if(o===void 0&&(o=new Float32Array(r),xd[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jl(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function vy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),ln(t,n)}}function xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),ln(t,n)}}function yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),ln(t,n)}}function Sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function Ty(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Cy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=Sm,o=vd):o=Um,t.setTexture2D(e||o,r)}function Py(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nm,r)}function Ly(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Om,r)}function Dy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fm,r)}function Iy(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return _y;case 35666:return gy;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return My;case 35669:case 35673:return by;case 5125:return Ty;case 36294:return Ey;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Uy(i,e){i.uniform1fv(this.addr,e)}function Fy(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Ny(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function Oy(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function zy(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function By(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ky(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hy(i,e){i.uniform1iv(this.addr,e)}function Vy(i,e){i.uniform2iv(this.addr,e)}function Gy(i,e){i.uniform3iv(this.addr,e)}function Wy(i,e){i.uniform4iv(this.addr,e)}function Xy(i,e){i.uniform1uiv(this.addr,e)}function qy(i,e){i.uniform2uiv(this.addr,e)}function Yy(i,e){i.uniform3uiv(this.addr,e)}function $y(i,e){i.uniform4uiv(this.addr,e)}function Zy(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Um,o[s])}function Ky(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Nm,o[s])}function jy(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Om,o[s])}function Jy(i,e,t){const n=this.cache,r=e.length,o=jl(t,r);an(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Fm,o[s])}function Qy(i){switch(i){case 5126:return Uy;case 35664:return Fy;case 35665:return Ny;case 35666:return Oy;case 35674:return zy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Jy}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function iS(i,e,t){const n=i.name,r=n.length;for(Vc.lastIndex=0;;){const o=Vc.exec(n),s=Vc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){bd(t,c===void 0?new eS(a,i,e):new tS(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new nS(a),bd(t,d)),t=d}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);iS(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Td(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rS=37297;let oS=0;function sS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Ed=new dt;function aS(i){Mt._getMatrix(Ed,Mt.workingColorSpace,i);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case $l:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sS(i.getShaderSource(e),s)}else return r}function lS(i,e){const t=aS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cS(i,e){let t;switch(e){case sg:t="Linear";break;case ag:t="Reinhard";break;case lg:t="Cineon";break;case cg:t="ACESFilmic";break;case fg:t="AgX";break;case hg:t="Neutral";break;case ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const al=new q;function uS(){Mt.getLuminanceCoefficients(al);const i=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function hS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function ta(i){return i!==""}function Rd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(i){return i.replace(pS,_S)}const mS=new Map;function _S(i,e){let t=mt[e];if(t===void 0){const n=mS.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ef(t)}const gS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(gS,vS)}function vS(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ld(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function xS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ts:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case um:e="ENVMAP_BLENDING_MULTIPLY";break;case rg:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function MS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bS(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=xS(t),c=yS(t),u=SS(t),d=wS(t),h=MS(t),m=fS(t),v=hS(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ta).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(_=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),s=ef(s),s=Rd(s,t),s=Cd(s,t),a=ef(a),a=Rd(a,t),a=Cd(a,t),s=Pd(s),a=Pd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+_+s,S=b+p+a,D=Td(r,r.VERTEX_SHADER,w),C=Td(r,r.FRAGMENT_SHADER,S);r.attachShader(g,D),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(D).trim(),z=r.getShaderInfoLog(C).trim();let H=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,D,C);else{const W=Ad(r,D,"vertex"),B=Ad(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+W+`
`+B)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:F,vertexShader:{log:N,prefix:_},fragmentShader:{log:z,prefix:p}})}r.deleteShader(D),r.deleteShader(C),P=new Al(r,g),M=dS(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,rS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=C,this}let TS=0;class ES{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AS(e),t.set(e,n)),n}}class AS{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}}function RS(i,e,t,n,r,o,s){const a=new Tm,l=new ES,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,y,R,F,N){const z=F.fog,H=N.geometry,V=M.isMeshStandardMaterial?F.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),B=W&&W.mapping===Yl?W.image.height:null,oe=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=G!==void 0?G.length:0;let Se=0;H.morphAttributes.position!==void 0&&(Se=1),H.morphAttributes.normal!==void 0&&(Se=2),H.morphAttributes.color!==void 0&&(Se=3);let Ae,J,te,ce;if(oe){const ht=Hi[oe];Ae=ht.vertexShader,J=ht.fragmentShader}else Ae=M.vertexShader,J=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const le=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Ze=!!M.map,Be=!!M.matcap,tt=!!W,k=!!M.aoMap,We=!!M.lightMap,Xe=!!M.bumpMap,qe=!!M.normalMap,Ve=!!M.displacementMap,Ke=!!M.emissiveMap,Re=!!M.metalnessMap,U=!!M.roughnessMap,E=M.anisotropy>0,$=M.clearcoat>0,Y=M.dispersion>0,se=M.iridescence>0,Q=M.sheen>0,Te=M.transmission>0,de=E&&!!M.anisotropyMap,pe=$&&!!M.clearcoatMap,Qe=$&&!!M.clearcoatNormalMap,me=$&&!!M.clearcoatRoughnessMap,ye=se&&!!M.iridescenceMap,Ce=se&&!!M.iridescenceThicknessMap,De=Q&&!!M.sheenColorMap,ue=Q&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,Ge=!!M.specularColorMap,it=!!M.specularIntensityMap,X=Te&&!!M.transmissionMap,ne=Te&&!!M.thicknessMap,re=!!M.gradientMap,he=!!M.alphaMap,Ne=M.alphaTest>0,Ie=!!M.alphaHash,ot=!!M.extensions;let Tt=Yi;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const $t={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Ae,fragmentShader:J,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ze,batchingColor:ze&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Zi,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:Be,envMap:tt,envMapMode:tt&&W.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:We,bumpMap:Xe,normalMap:qe,displacementMap:h&&Ve,emissiveMap:Ke,normalMapObjectSpace:qe&&M.normalMapType===gg,normalMapTangentSpace:qe&&M.normalMapType===_g,metalnessMap:Re,roughnessMap:U,anisotropy:E,anisotropyMap:de,clearcoat:$,clearcoatMap:pe,clearcoatNormalMap:Qe,clearcoatRoughnessMap:me,dispersion:Y,iridescence:se,iridescenceMap:ye,iridescenceThicknessMap:Ce,sheen:Q,sheenColorMap:De,sheenRoughnessMap:ue,specularMap:Fe,specularColorMap:Ge,specularIntensityMap:it,transmission:Te,transmissionMap:X,thicknessMap:ne,gradientMap:re,opaque:M.transparent===!1&&M.blending===Xr&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Ne,alphaHash:Ie,combine:M.combine,mapUv:Ze&&g(M.map.channel),aoMapUv:k&&g(M.aoMap.channel),lightMapUv:We&&g(M.lightMap.channel),bumpMapUv:Xe&&g(M.bumpMap.channel),normalMapUv:qe&&g(M.normalMap.channel),displacementMapUv:Ve&&g(M.displacementMap.channel),emissiveMapUv:Ke&&g(M.emissiveMap.channel),metalnessMapUv:Re&&g(M.metalnessMap.channel),roughnessMapUv:U&&g(M.roughnessMap.channel),anisotropyMapUv:de&&g(M.anisotropyMap.channel),clearcoatMapUv:pe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(M.sheenRoughnessMap.channel),specularMapUv:Fe&&g(M.specularMap.channel),specularColorMapUv:Ge&&g(M.specularColorMap.channel),specularIntensityMapUv:it&&g(M.specularIntensityMap.channel),transmissionMapUv:X&&g(M.transmissionMap.channel),thicknessMapUv:ne&&g(M.thicknessMap.channel),alphaMapUv:he&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ze||he),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ke&&M.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(M.emissiveMap.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===Kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const y=v[M.type];let R;if(y){const F=Hi[y];R=fv.clone(F.uniforms)}else R=M.uniforms;return R}function D(M,y){let R;for(let F=0,N=u.length;F<N;F++){const z=u[F];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new bS(i,y,M,o),u.push(R)),R}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function CS(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function PS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Id(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,h,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,h,m,v,g,_){const p=s(d,h,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,h,m,v,g,_){const p=s(d,h,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||PS),n.length>1&&n.sort(h||Dd),r.length>1&&r.sort(h||Dd)}function u(){for(let d=e,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function LS(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Id,i.set(n,[s])):r>=o.length?(s=new Id,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function DS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new $e};break;case"SpotLight":t={position:new q,direction:new q,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function IS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let US=0;function FS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function NS(i){const e=new DS,t=IS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new yt,s=new yt;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,w=0,S=0,D=0,C=0,T=0;c.sort(FS);for(let M=0,y=c.length;M<y;M++){const R=c[M],F=R.color,N=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*N,d+=F.g*N,h+=F.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=V,m++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;const W=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,W.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=W.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=H,S++}g++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=V,_++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const W=R.shadow,B=t.get(R);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=R.shadow.matrix,w++}n.point[v]=V,v++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==S||P.numSpotMaps!==D||P.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=S,P.numSpotMaps=D,P.numLightProbes=T,n.version=US++)}function l(c,u){let d=0,h=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(w.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(w.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),s.identity(),o.copy(w.matrixWorld),o.premultiply(_),s.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(w.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),h++}else if(w.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Ud(i){const e=new NS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function OS(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Ud(i),e.set(r,[a])):o>=s.length?(a=new Ud(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class zS extends Zl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends Zl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
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
}`;function VS(i,e,t){let n=new Dm;const r=new et,o=new et,s=new Ft,a=new zS({depthPacking:mg}),l=new BS,c={},u=t.maxTextureSize,d={[Zr]:Kn,[Kn]:Zr,[Cn]:Cn},h=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:kS,fragmentShader:HS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new yr;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ut(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let p=this.type;this.render=function(C,T,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==lr&&this.type===lr,z=p===lr&&this.type!==lr;for(let H=0,V=C.length;H<V;H++){const W=C[H],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const oe=B.getFrameExtents();if(r.multiply(oe),o.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/oe.x),r.x=o.x*oe.x,B.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/oe.y),r.y=o.y*oe.y,B.mapSize.y=o.y)),B.map===null||N===!0||z===!0){const _e=this.type!==lr?{minFilter:sn,magFilter:sn}:{};B.map!==null&&B.map.dispose(),B.map=new xr(r.x,r.y,_e),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const G=B.getViewportCount();for(let _e=0;_e<G;_e++){const Se=B.getViewport(_e);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),F.viewport(s),B.updateMatrices(W,_e),n=B.getFrustum(),S(T,P,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===lr&&b(B,P),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(M,y,R)};function b(C,T){const P=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,P,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,P,m,g,null)}function w(C,T,P,M){let y=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,N=T.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let H=z[N];H===void 0&&(H=y.clone(),z[N]=H,T.addEventListener("dispose",D)),y=H}if(y.visible=T.visible,y.wireframe=T.wireframe,M===lr?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=P}return y}function S(C,T,P,M,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===lr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const N=e.update(C),z=C.material;if(Array.isArray(z)){const H=N.groups;for(let V=0,W=H.length;V<W;V++){const B=H[V],oe=z[B.materialIndex];if(oe&&oe.visible){const G=w(C,oe,M,y);C.onBeforeShadow(i,C,T,P,N,G,B),i.renderBufferDirect(P,null,N,G,C,B),C.onAfterShadow(i,C,T,P,N,G,B)}}}else if(z.visible){const H=w(C,z,M,y);C.onBeforeShadow(i,C,T,P,N,H,null),i.renderBufferDirect(P,null,N,H,C,null),C.onAfterShadow(i,C,T,P,N,H,null)}}const F=C.children;for(let N=0,z=F.length;N<z;N++)S(F[N],T,P,M,y)}function D(C){C.target.removeEventListener("dispose",D);for(const P in c){const M=c[P],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const GS={[xu]:yu,[Su]:bu,[wu]:Tu,[Ms]:Mu,[yu]:xu,[bu]:Su,[Tu]:wu,[Mu]:Ms};function WS(i,e){function t(){let X=!1;const ne=new Ft;let re=null;const he=new Ft(0,0,0,0);return{setMask:function(Ne){re!==Ne&&!X&&(i.colorMask(Ne,Ne,Ne,Ne),re=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,Ie,ot,Tt,$t){$t===!0&&(Ne*=Tt,Ie*=Tt,ot*=Tt),ne.set(Ne,Ie,ot,Tt),he.equals(ne)===!1&&(i.clearColor(Ne,Ie,ot,Tt),he.copy(ne))},reset:function(){X=!1,re=null,he.set(-1,0,0,0)}}}function n(){let X=!1,ne=!1,re=null,he=null,Ne=null;return{setReversed:function(Ie){if(ne!==Ie){const ot=e.get("EXT_clip_control");ne?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Tt=Ne;Ne=null,this.setClear(Tt)}ne=Ie},getReversed:function(){return ne},setTest:function(Ie){Ie?le(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ie){re!==Ie&&!X&&(i.depthMask(Ie),re=Ie)},setFunc:function(Ie){if(ne&&(Ie=GS[Ie]),he!==Ie){switch(Ie){case xu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case Su:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case wu:i.depthFunc(i.EQUAL);break;case Mu:i.depthFunc(i.GEQUAL);break;case bu:i.depthFunc(i.GREATER);break;case Tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ie}},setLocked:function(Ie){X=Ie},setClear:function(Ie){Ne!==Ie&&(ne&&(Ie=1-Ie),i.clearDepth(Ie),Ne=Ie)},reset:function(){X=!1,re=null,he=null,Ne=null,ne=!1}}}function r(){let X=!1,ne=null,re=null,he=null,Ne=null,Ie=null,ot=null,Tt=null,$t=null;return{setTest:function(ht){X||(ht?le(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ht){ne!==ht&&!X&&(i.stencilMask(ht),ne=ht)},setFunc:function(ht,Lt,Ln){(re!==ht||he!==Lt||Ne!==Ln)&&(i.stencilFunc(ht,Lt,Ln),re=ht,he=Lt,Ne=Ln)},setOp:function(ht,Lt,Ln){(Ie!==ht||ot!==Lt||Tt!==Ln)&&(i.stencilOp(ht,Lt,Ln),Ie=ht,ot=Lt,Tt=Ln)},setLocked:function(ht){X=ht},setClear:function(ht){$t!==ht&&(i.clearStencil(ht),$t=ht)},reset:function(){X=!1,ne=null,re=null,he=null,Ne=null,Ie=null,ot=null,Tt=null,$t=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,w=null,S=null,D=null,C=null,T=new $e(0,0,0),P=0,M=!1,y=null,R=null,F=null,N=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=W>=2);let oe=null,G={};const _e=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Ae=new Ft().fromArray(_e),J=new Ft().fromArray(Se);function te(X,ne,re,he){const Ne=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(X,Ie),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<re;ot++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(ne+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return Ie}const ce={};ce[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(i.DEPTH_TEST),s.setFunc(Ms),Xe(!1),qe(Nh),le(i.CULL_FACE),k(Ai);function le(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function Me(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Ue(X,ne){return d[X]!==ne?(i.bindFramebuffer(X,ne),d[X]=ne,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function ze(X,ne){let re=m,he=!1;if(X){re=h.get(ne),re===void 0&&(re=[],h.set(ne,re));const Ne=X.textures;if(re.length!==Ne.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,ot=Ne.length;Ie<ot;Ie++)re[Ie]=i.COLOR_ATTACHMENT0+Ie;re.length=Ne.length,he=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,he=!0);he&&i.drawBuffers(re)}function Ze(X){return v!==X?(i.useProgram(X),v=X,!0):!1}const Be={[On]:i.FUNC_ADD,[G_]:i.FUNC_SUBTRACT,[W_]:i.FUNC_REVERSE_SUBTRACT};Be[X_]=i.MIN,Be[q_]=i.MAX;const tt={[Sl]:i.ZERO,[mi]:i.ONE,[Y_]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[Q_]:i.SRC_ALPHA_SATURATE,[j_]:i.DST_COLOR,[Z_]:i.DST_ALPHA,[$_]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[J_]:i.ONE_MINUS_DST_COLOR,[K_]:i.ONE_MINUS_DST_ALPHA,[eg]:i.CONSTANT_COLOR,[tg]:i.ONE_MINUS_CONSTANT_COLOR,[ng]:i.CONSTANT_ALPHA,[ig]:i.ONE_MINUS_CONSTANT_ALPHA};function k(X,ne,re,he,Ne,Ie,ot,Tt,$t,ht){if(X===Ai){g===!0&&(Me(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),X!==xa){if(X!==_||ht!==M){if((p!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),p=On,S=On),ht)switch(X){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,w=null,D=null,C=null,T.set(0,0,0),P=0,_=X,M=ht}return}Ne=Ne||ne,Ie=Ie||re,ot=ot||he,(ne!==p||Ne!==S)&&(i.blendEquationSeparate(Be[ne],Be[Ne]),p=ne,S=Ne),(re!==b||he!==w||Ie!==D||ot!==C)&&(i.blendFuncSeparate(tt[re],tt[he],tt[Ie],tt[ot]),b=re,w=he,D=Ie,C=ot),(Tt.equals(T)===!1||$t!==P)&&(i.blendColor(Tt.r,Tt.g,Tt.b,$t),T.copy(Tt),P=$t),_=X,M=!1}function We(X,ne){X.side===Cn?Me(i.CULL_FACE):le(i.CULL_FACE);let re=X.side===Kn;ne&&(re=!re),Xe(re),X.blending===Xr&&X.transparent===!1?k(Ai):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),o.setMask(X.colorWrite);const he=X.stencilWrite;a.setTest(he),he&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(X){y!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),y=X)}function qe(X){X!==k_?(le(i.CULL_FACE),X!==R&&(X===Nh?i.cullFace(i.BACK):X===H_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),R=X}function Ve(X){X!==F&&(V&&i.lineWidth(X),F=X)}function Ke(X,ne,re){X?(le(i.POLYGON_OFFSET_FILL),(N!==ne||z!==re)&&(i.polygonOffset(ne,re),N=ne,z=re)):Me(i.POLYGON_OFFSET_FILL)}function Re(X){X?le(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function U(X){X===void 0&&(X=i.TEXTURE0+H-1),oe!==X&&(i.activeTexture(X),oe=X)}function E(X,ne,re){re===void 0&&(oe===null?re=i.TEXTURE0+H-1:re=oe);let he=G[re];he===void 0&&(he={type:void 0,texture:void 0},G[re]=he),(he.type!==X||he.texture!==ne)&&(oe!==re&&(i.activeTexture(re),oe=re),i.bindTexture(X,ne||ce[X]),he.type=X,he.texture=ne)}function $(){const X=G[oe];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(X){Ae.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function ue(X){J.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Fe(X,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let he=re.get(X);he===void 0&&(he=i.getUniformBlockIndex(ne,X.name),re.set(X,he))}function Ge(X,ne){const he=c.get(ne).get(X);l.get(ne)!==he&&(i.uniformBlockBinding(ne,he,X.__bindingPointIndex),l.set(ne,he))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,G={},d={},h=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,w=null,S=null,D=null,C=null,T=new $e(0,0,0),P=0,M=!1,y=null,R=null,F=null,N=null,z=null,Ae.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:le,disable:Me,bindFramebuffer:Ue,drawBuffers:ze,useProgram:Ze,setBlending:k,setMaterial:We,setFlipSided:Xe,setCullFace:qe,setLineWidth:Ve,setPolygonOffset:Ke,setScissorTest:Re,activeTexture:U,bindTexture:E,unbindTexture:$,compressedTexImage2D:Y,compressedTexImage3D:se,texImage2D:ye,texImage3D:Ce,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:Qe,texStorage3D:me,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:pe,scissor:De,viewport:ue,reset:it}}function Fd(i,e,t,n){const r=XS(n);switch(t){case mm:return i*e;case gm:return i*e;case vm:return i*e*2;case Pf:return i*e/r.components*r.byteLength;case Lf:return i*e/r.components*r.byteLength;case xm:return i*e*2/r.components*r.byteLength;case Df:return i*e*2/r.components*r.byteLength;case _m:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case If:return i*e*4/r.components*r.byteLength;case wl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:case Lu:return Math.max(i,16)*Math.max(e,8)/4;case Ru:case Pu:return Math.max(i,8)*Math.max(e,8)/2;case Du:case Iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $u:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case El:case Zu:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ym:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ju:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XS(i){switch(i){case Ri:case hm:return{byteLength:1,components:1};case Do:case dm:case Xi:return{byteLength:2,components:1};case Rf:case Cf:return{byteLength:2,components:4};case Io:case Af:case Xn:return{byteLength:4,components:1};case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qS(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,E){return m?new OffscreenCanvas(U,E):Sa("canvas")}function g(U,E,$){let Y=1;const se=Re(U);if((se.width>$||se.height>$)&&(Y=$/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Q=Math.floor(Y*se.width),Te=Math.floor(Y*se.height);d===void 0&&(d=v(Q,Te));const de=E?v(Q,Te):d;return de.width=Q,de.height=Te,de.getContext("2d").drawImage(U,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Te+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(U,E,$,Y,se=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Q=E;if(E===i.RED&&($===i.FLOAT&&(Q=i.R32F),$===i.HALF_FLOAT&&(Q=i.R16F),$===i.UNSIGNED_BYTE&&(Q=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.R8UI),$===i.UNSIGNED_SHORT&&(Q=i.R16UI),$===i.UNSIGNED_INT&&(Q=i.R32UI),$===i.BYTE&&(Q=i.R8I),$===i.SHORT&&(Q=i.R16I),$===i.INT&&(Q=i.R32I)),E===i.RG&&($===i.FLOAT&&(Q=i.RG32F),$===i.HALF_FLOAT&&(Q=i.RG16F),$===i.UNSIGNED_BYTE&&(Q=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RG8UI),$===i.UNSIGNED_SHORT&&(Q=i.RG16UI),$===i.UNSIGNED_INT&&(Q=i.RG32UI),$===i.BYTE&&(Q=i.RG8I),$===i.SHORT&&(Q=i.RG16I),$===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),$===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),$===i.UNSIGNED_INT&&(Q=i.RGB32UI),$===i.BYTE&&(Q=i.RGB8I),$===i.SHORT&&(Q=i.RGB16I),$===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),$===i.UNSIGNED_INT&&(Q=i.RGBA32UI),$===i.BYTE&&(Q=i.RGBA8I),$===i.SHORT&&(Q=i.RGBA16I),$===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),E===i.RGBA){const Te=se?$l:Mt.getTransfer(Y);$===i.FLOAT&&(Q=i.RGBA32F),$===i.HALF_FLOAT&&(Q=i.RGBA16F),$===i.UNSIGNED_BYTE&&(Q=Te===Pt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(U,E){let $;return U?E===null||E===Io||E===Es?$=i.DEPTH24_STENCIL8:E===Xn?$=i.DEPTH32F_STENCIL8:E===Do&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Io||E===Es?$=i.DEPTH_COMPONENT24:E===Xn?$=i.DEPTH_COMPONENT32F:E===Do&&($=i.DEPTH_COMPONENT16),$}function D(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==sn&&U.minFilter!==vt?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function C(U){const E=U.target;E.removeEventListener("dispose",C),P(E),E.isVideoTexture&&u.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),y(E)}function P(U){const E=n.get(U);if(E.__webglInit===void 0)return;const $=U.source,Y=h.get($);if(Y){const se=Y[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(U),Object.keys(Y).length===0&&h.delete($)}n.remove(U)}function M(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const $=U.source,Y=h.get($);delete Y[E.__cacheKey],s.memory.textures--}function y(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let se=0;se<E.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(E.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[Y]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let Y=0,se=$.length;Y<se;Y++){const Q=n.get($[Y]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove($[Y])}n.remove(U)}let R=0;function F(){R=0}function N(){const U=R;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),R+=1,U}function z(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function H(U,E){const $=n.get(U);if(U.isVideoTexture&&Ve(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const Y=U.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J($,U,E);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function V(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){J($,U,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function W(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){J($,U,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function B(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){te($,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const oe={[ps]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},G={[sn]:i.NEAREST,[dg]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[_c]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},_e={[vg]:i.NEVER,[bg]:i.ALWAYS,[xg]:i.LESS,[Sm]:i.LEQUAL,[yg]:i.EQUAL,[Mg]:i.GEQUAL,[Sg]:i.GREATER,[wg]:i.NOTEQUAL};function Se(U,E){if(E.type===Xn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vt||E.magFilter===_c||E.magFilter===Ha||E.magFilter===Wi||E.minFilter===vt||E.minFilter===_c||E.minFilter===Ha||E.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,oe[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,G[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,G[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Ha&&E.minFilter!==Wi||E.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",C));const Y=E.source;let se=h.get(Y);se===void 0&&(se={},h.set(Y,se));const Q=z(E);if(Q!==U.__cacheKey){se[Q]===void 0&&(se[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),se[Q].usedTimes++;const Te=se[U.__cacheKey];Te!==void 0&&(se[U.__cacheKey].usedTimes--,Te.usedTimes===0&&M(E)),U.__cacheKey=Q,U.__webglTexture=se[Q].texture}return $}function J(U,E,$){let Y=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=i.TEXTURE_3D);const se=Ae(U,E),Q=E.source;t.bindTexture(Y,U.__webglTexture,i.TEXTURE0+$);const Te=n.get(Q);if(Q.version!==Te.__version||se===!0){t.activeTexture(i.TEXTURE0+$);const de=Mt.getPrimaries(Mt.workingColorSpace),pe=E.colorSpace===Qt?null:Mt.getPrimaries(E.colorSpace),Qe=E.colorSpace===Qt||de===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=g(E.image,!1,r.maxTextureSize);me=Ke(E,me);const ye=o.convert(E.format,E.colorSpace),Ce=o.convert(E.type);let De=w(E.internalFormat,ye,Ce,E.colorSpace,E.isVideoTexture);Se(Y,E);let ue;const Fe=E.mipmaps,Ge=E.isVideoTexture!==!0,it=Te.__version===void 0||se===!0,X=Q.dataReady,ne=D(E,me);if(E.isDepthTexture)De=S(E.format===As,E.type),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,ye,Ce,null));else if(E.isDataTexture)if(Fe.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,ne,De,Fe[0].width,Fe[0].height);for(let re=0,he=Fe.length;re<he;re++)ue=Fe[re],Ge?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ue.width,ue.height,ye,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,re,De,ue.width,ue.height,0,ye,Ce,ue.data);E.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,ne,De,me.width,me.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,ye,Ce,me.data)):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,ye,Ce,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,De,Fe[0].width,Fe[0].height,me.depth);for(let re=0,he=Fe.length;re<he;re++)if(ue=Fe[re],E.format!==_n)if(ye!==null)if(Ge){if(X)if(E.layerUpdates.size>0){const Ne=Fd(ue.width,ue.height,E.format,E.type);for(const Ie of E.layerUpdates){const ot=ue.data.subarray(Ie*Ne/ue.data.BYTES_PER_ELEMENT,(Ie+1)*Ne/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ie,ue.width,ue.height,1,ye,ot)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,me.depth,ye,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,De,ue.width,ue.height,me.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,me.depth,ye,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,De,ue.width,ue.height,me.depth,0,ye,Ce,ue.data)}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,ne,De,Fe[0].width,Fe[0].height);for(let re=0,he=Fe.length;re<he;re++)ue=Fe[re],E.format!==_n?ye!==null?Ge?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ue.width,ue.height,ye,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,re,De,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ue.width,ue.height,ye,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,re,De,ue.width,ue.height,0,ye,Ce,ue.data)}else if(E.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,De,me.width,me.height,me.depth),X)if(E.layerUpdates.size>0){const re=Fd(me.width,me.height,E.format,E.type);for(const he of E.layerUpdates){const Ne=me.data.subarray(he*re/me.data.BYTES_PER_ELEMENT,(he+1)*re/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,ye,Ce,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ye,Ce,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,ye,Ce,me.data);else if(E.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,ne,De,me.width,me.height,me.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ye,Ce,me.data)):t.texImage3D(i.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,ye,Ce,me.data);else if(E.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,ne,De,me.width,me.height);else{let re=me.width,he=me.height;for(let Ne=0;Ne<ne;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,De,re,he,0,ye,Ce,null),re>>=1,he>>=1}}else if(Fe.length>0){if(Ge&&it){const re=Re(Fe[0]);t.texStorage2D(i.TEXTURE_2D,ne,De,re.width,re.height)}for(let re=0,he=Fe.length;re<he;re++)ue=Fe[re],Ge?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye,Ce,ue):t.texImage2D(i.TEXTURE_2D,re,De,ye,Ce,ue);E.generateMipmaps=!1}else if(Ge){if(it){const re=Re(me);t.texStorage2D(i.TEXTURE_2D,ne,De,re.width,re.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ce,me)}else t.texImage2D(i.TEXTURE_2D,0,De,ye,Ce,me);_(E)&&p(Y),Te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function te(U,E,$){if(E.image.length!==6)return;const Y=Ae(U,E),se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const Q=n.get(se);if(se.version!==Q.__version||Y===!0){t.activeTexture(i.TEXTURE0+$);const Te=Mt.getPrimaries(Mt.workingColorSpace),de=E.colorSpace===Qt?null:Mt.getPrimaries(E.colorSpace),pe=E.colorSpace===Qt||Te===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let he=0;he<6;he++)!Qe&&!me?ye[he]=g(E.image[he],!0,r.maxCubemapSize):ye[he]=me?E.image[he].image:E.image[he],ye[he]=Ke(E,ye[he]);const Ce=ye[0],De=o.convert(E.format,E.colorSpace),ue=o.convert(E.type),Fe=w(E.internalFormat,De,ue,E.colorSpace),Ge=E.isVideoTexture!==!0,it=Q.__version===void 0||Y===!0,X=se.dataReady;let ne=D(E,Ce);Se(i.TEXTURE_CUBE_MAP,E);let re;if(Qe){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Fe,Ce.width,Ce.height);for(let he=0;he<6;he++){re=ye[he].mipmaps;for(let Ne=0;Ne<re.length;Ne++){const Ie=re[Ne];E.format!==_n?De!==null?Ge?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,Ie.width,Ie.height,De,ue,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Fe,Ie.width,Ie.height,0,De,ue,Ie.data)}}}else{if(re=E.mipmaps,Ge&&it){re.length>0&&ne++;const he=Re(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Fe,he.width,he.height)}for(let he=0;he<6;he++)if(me){Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ye[he].width,ye[he].height,De,ue,ye[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Fe,ye[he].width,ye[he].height,0,De,ue,ye[he].data);for(let Ne=0;Ne<re.length;Ne++){const ot=re[Ne].image[he].image;Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,ot.width,ot.height,De,ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Fe,ot.width,ot.height,0,De,ue,ot.data)}}else{Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De,ue,ye[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Fe,De,ue,ye[he]);for(let Ne=0;Ne<re.length;Ne++){const Ie=re[Ne];Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,De,ue,Ie.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Fe,De,ue,Ie.image[he])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),Q.__version=se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ce(U,E,$,Y,se,Q){const Te=o.convert($.format,$.colorSpace),de=o.convert($.type),pe=w($.internalFormat,Te,de,$.colorSpace),Qe=n.get(E),me=n.get($);if(me.__renderTarget=E,!Qe.__hasExternalTextures){const ye=Math.max(1,E.width>>Q),Ce=Math.max(1,E.height>>Q);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,pe,ye,Ce,E.depth,0,Te,de,null):t.texImage2D(se,Q,pe,ye,Ce,0,Te,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),qe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,me.__webglTexture,0,Xe(E)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,me.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(U,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const Y=E.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,Q=S(E.stencilBuffer,se),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Xe(E);qe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Q,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,U)}else{const Y=E.textures;for(let se=0;se<Y.length;se++){const Q=Y[se],Te=o.convert(Q.format,Q.colorSpace),de=o.convert(Q.type),pe=w(Q.internalFormat,Te,de,Q.colorSpace),Qe=Xe(E);$&&qe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,pe,E.width,E.height):qe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const se=Y.__webglTexture,Q=Xe(E);if(E.depthTexture.format===ms)qe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(E.depthTexture.format===As)qe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ue(U){const E=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Y=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=Y}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Me(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=i.createRenderbuffer(),le(E.__webglDepthbuffer[Y],U,!1);else{const se=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),le(E.__webglDepthbuffer,U,!1);else{const Y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(U,E,$){const Y=n.get(U);E!==void 0&&ce(Y.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ue(U)}function Ze(U){const E=U.texture,$=n.get(U),Y=n.get(E);U.addEventListener("dispose",T);const se=U.textures,Q=U.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=E.version,s.memory.textures++),Q){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)$.__webglFramebuffer[de][pe]=i.createFramebuffer()}else $.__webglFramebuffer[de]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)$.__webglFramebuffer[de]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Te)for(let de=0,pe=se.length;de<pe;de++){const Qe=n.get(se[de]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&qe(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const pe=se[de];$.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const Qe=o.convert(pe.format,pe.colorSpace),me=o.convert(pe.type),ye=w(pe.internalFormat,Qe,me,pe.colorSpace,U.isXRRenderTarget===!0),Ce=Xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ye,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,$.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),le($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Se(i.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)ce($.__webglFramebuffer[de][pe],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else ce($.__webglFramebuffer[de],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,pe=se.length;de<pe;de++){const Qe=se[de],me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Se(i.TEXTURE_2D,Qe),ce($.__webglFramebuffer,U,Qe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),_(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),Se(de,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)ce($.__webglFramebuffer[pe],U,E,i.COLOR_ATTACHMENT0,de,pe);else ce($.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,de,0);_(E)&&p(de),t.unbindTexture()}U.depthBuffer&&Ue(U)}function Be(U){const E=U.textures;for(let $=0,Y=E.length;$<Y;$++){const se=E[$];if(_(se)){const Q=b(U),Te=n.get(se).__webglTexture;t.bindTexture(Q,Te),p(Q),t.unbindTexture()}}}const tt=[],k=[];function We(U){if(U.samples>0){if(qe(U)===!1){const E=U.textures,$=U.width,Y=U.height;let se=i.COLOR_BUFFER_BIT;const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(U),de=E.length>1;if(de)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const Qe=n.get(E[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,$,Y,0,0,$,Y,se,i.NEAREST),l===!0&&(tt.length=0,k.length=0,tt.push(i.COLOR_ATTACHMENT0+pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push(Q),k.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const Qe=n.get(E[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Xe(U){return Math.min(r.maxSamples,U.samples)}function qe(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ve(U){const E=s.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function Ke(U,E){const $=U.colorSpace,Y=U.format,se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Zi&&$!==Qt&&(Mt.getTransfer($)===Pt?(Y!==_n||se!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Re(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=ze,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=qe}function YS(i,e){function t(n,r=Qt){let o;const s=Mt.getTransfer(r);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Rf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hm)return i.BYTE;if(n===dm)return i.SHORT;if(n===Do)return i.UNSIGNED_SHORT;if(n===Af)return i.INT;if(n===Io)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===mm)return i.ALPHA;if(n===_m)return i.RGB;if(n===_n)return i.RGBA;if(n===gm)return i.LUMINANCE;if(n===vm)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Pf)return i.RED;if(n===Lf)return i.RED_INTEGER;if(n===xm)return i.RG;if(n===Df)return i.RG_INTEGER;if(n===If)return i.RGBA_INTEGER;if(n===wl||n===Ml||n===bl||n===Tl)if(s===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===wl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===wl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Cu||n===Pu||n===Lu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ru)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Iu||n===Uu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Du||n===Iu)return s===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Uu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fu||n===Nu||n===Ou||n===zu||n===Bu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===$u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Fu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ou)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ku)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yu)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$u)return s===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Zu||n===Ku)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===El)return s===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ym||n===ju||n===Ju||n===Qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===El)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $S extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jS=`
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

}`;class JS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new vn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:KS,fragmentShader:jS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends Cs{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,v=null;const g=new JS,_=t.getContextAttributes();let p=null,b=null;const w=[],S=[],D=new et;let C=null;const T=new Gn;T.viewport=new Ft;const P=new Gn;P.viewport=new Ft;const M=[T,P],y=new $S;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=w[J];return te===void 0&&(te=new Gc,w[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=w[J];return te===void 0&&(te=new Gc,w[J]=te),te.getGripSpace()},this.getHand=function(J){let te=w[J];return te===void 0&&(te=new Gc,w[J]=te),te.getHandSpace()};function N(J){const te=S.indexOf(J.inputSource);if(te===-1)return;const ce=w[te];ce!==void 0&&(ce.update(J.inputSource,J.frame,c||s),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let J=0;J<w.length;J++){const te=S[J];te!==null&&(S[J]=null,w[J].disconnect(te))}R=null,F=null,g.reset(),e.setRenderTarget(p),m=null,h=null,d=null,r=null,b=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new xr(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,ce=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?As:ms,ce=_.stencil?Es:Io);const Me={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new xr(h.textureWidth,h.textureHeight,{format:_n,type:Ri,depthTexture:new kl(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let te=0;te<J.removed.length;te++){const ce=J.removed[te],le=S.indexOf(ce);le>=0&&(S[le]=null,w[le].disconnect(ce))}for(let te=0;te<J.added.length;te++){const ce=J.added[te];let le=S.indexOf(ce);if(le===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=S.length){S.push(ce),le=Ue;break}else if(S[Ue]===null){S[Ue]=ce,le=Ue;break}if(le===-1)break}const Me=w[le];Me&&Me.connect(ce)}}const V=new q,W=new q;function B(J,te,ce){V.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const le=V.distanceTo(W),Me=te.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,ze=Me[14]/(Me[10]-1),Ze=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],tt=(Me[9]-1)/Me[5],k=(Me[8]-1)/Me[0],We=(Ue[8]+1)/Ue[0],Xe=ze*k,qe=ze*We,Ve=le/(-k+We),Ke=Ve*-k;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Re=ze+Ve,U=Ze+Ve,E=Xe-Ke,$=qe+(le-Ke),Y=Be*Ze/U*Re,se=tt*Ze/U*Re;J.projectionMatrix.makePerspective(E,$,Y,se,Re,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let te=J.near,ce=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),y.near=P.near=T.near=te,y.far=P.far=T.far=ce,(R!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,F=y.far),T.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,y.layers.mask=T.layers.mask|P.layers.mask;const le=J.parent,Me=y.cameras;oe(y,le);for(let Ue=0;Ue<Me.length;Ue++)oe(Me[Ue],le);Me.length===2?B(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),G(J,y,le)};function G(J,te,ce){ce===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ya*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let _e=null;function Se(J,te){if(u=te.getViewerPose(c||s),v=te,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let le=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Ue=0;Ue<ce.length;Ue++){const ze=ce[Ue];let Ze=null;if(m!==null)Ze=m.getViewport(ze);else{const tt=d.getViewSubImage(h,ze);Ze=tt.viewport,Ue===0&&(e.setRenderTargetTextures(b,tt.colorTexture,h.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(b))}let Be=M[Ue];Be===void 0&&(Be=new Gn,Be.layers.enable(Ue),Be.viewport=new Ft,M[Ue]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ue===0&&(y.matrix.copy(Be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Be)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ue=d.getDepthInformation(ce[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(e,Ue,r.renderState)}}for(let ce=0;ce<w.length;ce++){const le=S[ce],Me=w[ce];le!==null&&Me!==void 0&&Me.update(le,te,c||s)}_e&&_e(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ae=new Im;Ae.setAnimationLoop(Se),this.setAnimationLoop=function(J){_e=J},this.dispose=function(){}}}const _o=new hi,ew=new yt;function tw(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Cm(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),h(_,p),p.isMeshPhysicalMaterial&&m(_,p,S)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,w):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Kn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Kn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,S=b.envMapRotation;w&&(_.envMap.value=w,_o.copy(S),_o.x*=-1,_o.y*=-1,_o.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),_.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(_o)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=w*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nw(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function c(b,w){let S=r[b.id];S===void 0&&(v(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",_));const D=w.program;n.updateUBOMapping(b,D);const C=e.render.frame;o[b.id]!==C&&(h(b),o[b.id]=C)}function u(b){const w=d();b.__bindingPointIndex=w;const S=i.createBuffer(),D=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=r[b.id],S=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,T=S.length;C<T;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,y=P.length;M<y;M++){const R=P[M];if(m(R,C,M,D)===!0){const F=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<N.length;H++){const V=N[H],W=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,w,S,D){const C=b.value,T=w+"_"+S;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{const P=D[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(b){const w=b.uniforms;let S=0;const D=16;for(let T=0,P=w.length;T<P;T++){const M=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,R=M.length;y<R;y++){const F=M[y],N=Array.isArray(F.value)?F.value:[F.value];for(let z=0,H=N.length;z<H;z++){const V=N[z],W=g(V),B=S%D,oe=B%W.boundary,G=B+oe;S+=oe,G!==0&&D-G<W.storage&&(S+=D-G),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=W.storage}}}const C=S%D;return C>0&&(S+=D-C),b.__size=S,b.__cache={},this}function g(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function _(b){const w=b.target;w.removeEventListener("dispose",_);const S=s.indexOf(w.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Jl{constructor(e={}){const{canvas:t=Hg(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=Yi,this.toneMappingExposure=1;const S=this;let D=!1,C=0,T=0,P=null,M=-1,y=null;const R=new Ft,F=new Ft;let N=null;const z=new $e(0);let H=0,V=t.width,W=t.height,B=1,oe=null,G=null;const _e=new Ft(0,0,V,W),Se=new Ft(0,0,V,W);let Ae=!1;const J=new Dm;let te=!1,ce=!1;const le=new yt,Me=new yt,Ue=new q,ze=new Ft,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function tt(){return P===null?B:1}let k=n;function We(f,x){return t.getContext(f,x)}try{const f={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),k===null){const x="webgl2";if(k=We(x,f),k===null)throw We(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let Xe,qe,Ve,Ke,Re,U,E,$,Y,se,Q,Te,de,pe,Qe,me,ye,Ce,De,ue,Fe,Ge,it,X;function ne(){Xe=new ly(k),Xe.init(),Ge=new YS(k,Xe),qe=new ny(k,Xe,e,Ge),Ve=new WS(k,Xe),qe.reverseDepthBuffer&&h&&Ve.buffers.depth.setReversed(!0),Ke=new fy(k),Re=new CS,U=new qS(k,Xe,Ve,Re,qe,Ge,Ke),E=new ry(S),$=new ay(S),Y=new vv(k),it=new ey(k,Y),se=new cy(k,Y,Ke,it),Q=new dy(k,se,Y,Ke),De=new hy(k,qe,U),me=new iy(Re),Te=new RS(S,E,$,Xe,qe,it,me),de=new tw(S,Re),pe=new LS,Qe=new OS(Xe),Ce=new Q1(S,E,$,Ve,Q,m,l),ye=new VS(S,Q,qe),X=new nw(k,Ke,qe,Ve),ue=new ty(k,Xe,Ke),Fe=new uy(k,Xe,Ke),Ke.programs=Te.programs,S.capabilities=qe,S.extensions=Xe,S.properties=Re,S.renderLists=pe,S.shadowMap=ye,S.state=Ve,S.info=Ke}ne();const re=new QS(S,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const f=Xe.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=Xe.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(f){f!==void 0&&(B=f,this.setSize(V,W,!1))},this.getSize=function(f){return f.set(V,W)},this.setSize=function(f,x,A=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=f,W=x,t.width=Math.floor(f*B),t.height=Math.floor(x*B),A===!0&&(t.style.width=f+"px",t.style.height=x+"px"),this.setViewport(0,0,f,x)},this.getDrawingBufferSize=function(f){return f.set(V*B,W*B).floor()},this.setDrawingBufferSize=function(f,x,A){V=f,W=x,B=A,t.width=Math.floor(f*A),t.height=Math.floor(x*A),this.setViewport(0,0,f,x)},this.getCurrentViewport=function(f){return f.copy(R)},this.getViewport=function(f){return f.copy(_e)},this.setViewport=function(f,x,A,L){f.isVector4?_e.set(f.x,f.y,f.z,f.w):_e.set(f,x,A,L),Ve.viewport(R.copy(_e).multiplyScalar(B).round())},this.getScissor=function(f){return f.copy(Se)},this.setScissor=function(f,x,A,L){f.isVector4?Se.set(f.x,f.y,f.z,f.w):Se.set(f,x,A,L),Ve.scissor(F.copy(Se).multiplyScalar(B).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(f){Ve.setScissorTest(Ae=f)},this.setOpaqueSort=function(f){oe=f},this.setTransparentSort=function(f){G=f},this.getClearColor=function(f){return f.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(f=!0,x=!0,A=!0){let L=0;if(f){let I=!1;if(P!==null){const O=P.texture.format;I=O===If||O===Df||O===Lf}if(I){const O=P.texture.type,Z=O===Ri||O===Io||O===Do||O===Es||O===Rf||O===Cf,ie=Ce.getClearColor(),j=Ce.getClearAlpha(),ee=ie.r,K=ie.g,ae=ie.b;Z?(v[0]=ee,v[1]=K,v[2]=ae,v[3]=j,k.clearBufferuiv(k.COLOR,0,v)):(g[0]=ee,g[1]=K,g[2]=ae,g[3]=j,k.clearBufferiv(k.COLOR,0,g))}else L|=k.COLOR_BUFFER_BIT}x&&(L|=k.DEPTH_BUFFER_BIT),A&&(L|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),pe.dispose(),Qe.dispose(),Re.dispose(),E.dispose(),$.dispose(),Q.dispose(),it.dispose(),X.dispose(),Te.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ci),re.removeEventListener("sessionend",Jr),kn.stop()};function he(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const f=Ke.autoReset,x=ye.enabled,A=ye.autoUpdate,L=ye.needsUpdate,I=ye.type;ne(),Ke.autoReset=f,ye.enabled=x,ye.autoUpdate=A,ye.needsUpdate=L,ye.type=I}function Ie(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function ot(f){const x=f.target;x.removeEventListener("dispose",ot),Tt(x)}function Tt(f){$t(f),Re.remove(f)}function $t(f){const x=Re.get(f).programs;x!==void 0&&(x.forEach(function(A){Te.releaseProgram(A)}),f.isShaderMaterial&&Te.releaseShaderCache(f))}this.renderBufferDirect=function(f,x,A,L,I,O){x===null&&(x=Ze);const Z=I.isMesh&&I.matrixWorld.determinant()<0,ie=Is(f,x,A,L,I);Ve.setMaterial(L,Z);let j=A.index,ee=1;if(L.wireframe===!0){if(j=se.getWireframeAttribute(A),j===void 0)return;ee=2}const K=A.drawRange,ae=A.attributes.position;let ge=K.start*ee,we=(K.start+K.count)*ee;O!==null&&(ge=Math.max(ge,O.start*ee),we=Math.min(we,(O.start+O.count)*ee)),j!==null?(ge=Math.max(ge,0),we=Math.min(we,j.count)):ae!=null&&(ge=Math.max(ge,0),we=Math.min(we,ae.count));const Pe=we-ge;if(Pe<0||Pe===1/0)return;it.setup(I,L,ie,A,j);let Ee,be=ue;if(j!==null&&(Ee=Y.get(j),be=Fe,be.setIndex(Ee)),I.isMesh)L.wireframe===!0?(Ve.setLineWidth(L.wireframeLinewidth*tt()),be.setMode(k.LINES)):be.setMode(k.TRIANGLES);else if(I.isLine){let ve=L.linewidth;ve===void 0&&(ve=1),Ve.setLineWidth(ve*tt()),I.isLineSegments?be.setMode(k.LINES):I.isLineLoop?be.setMode(k.LINE_LOOP):be.setMode(k.LINE_STRIP)}else I.isPoints?be.setMode(k.POINTS):I.isSprite&&be.setMode(k.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)be.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))be.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,ut=I._multiDrawCounts,Je=I._multiDrawCount,Ct=j?Y.get(j).bytesPerElement:1,st=Re.get(L).currentProgram.getUniforms();for(let nt=0;nt<Je;nt++)st.setValue(k,"_gl_DrawID",nt),be.render(ve[nt]/Ct,ut[nt])}else if(I.isInstancedMesh)be.renderInstances(ge,Pe,I.count);else if(A.isInstancedBufferGeometry){const ve=A._maxInstanceCount!==void 0?A._maxInstanceCount:1/0,ut=Math.min(A.instanceCount,ve);be.renderInstances(ge,Pe,ut)}else be.render(ge,Pe)};function ht(f,x,A){f.transparent===!0&&f.side===Cn&&f.forceSinglePass===!1?(f.side=Kn,f.needsUpdate=!0,wr(f,x,A),f.side=Zr,f.needsUpdate=!0,wr(f,x,A),f.side=Cn):wr(f,x,A)}this.compile=function(f,x,A=null){A===null&&(A=f),p=Qe.get(A),p.init(x),w.push(p),A.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),f!==A&&f.traverseVisible(function(I){I.isLight&&I.layers.test(x.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const L=new Set;return f.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const O=I.material;if(O)if(Array.isArray(O))for(let Z=0;Z<O.length;Z++){const ie=O[Z];ht(ie,A,I),L.add(ie)}else ht(O,A,I),L.add(O)}),w.pop(),p=null,L},this.compileAsync=function(f,x,A=null){const L=this.compile(f,x,A);return new Promise(I=>{function O(){if(L.forEach(function(Z){Re.get(Z).currentProgram.isReady()&&L.delete(Z)}),L.size===0){I(f);return}setTimeout(O,10)}Xe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Lt=null;function Ln(f){Lt&&Lt(f)}function Ci(){kn.stop()}function Jr(){kn.start()}const kn=new Im;kn.setAnimationLoop(Ln),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(f){Lt=f,re.setAnimationLoop(f),f===null?kn.stop():kn.start()},re.addEventListener("sessionstart",Ci),re.addEventListener("sessionend",Jr),this.render=function(f,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),f.isScene===!0&&f.onBeforeRender(S,f,x,P),p=Qe.get(f,w.length),p.init(x),w.push(p),Me.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),J.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,te=me.init(this.clippingPlanes,ce),_=pe.get(f,b.length),_.init(),b.push(_),re.enabled===!0&&re.isPresenting===!0){const O=S.xr.getDepthSensingMesh();O!==null&&Pi(O,x,-1/0,S.sortObjects)}Pi(f,x,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(oe,G),Be=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Be&&Ce.addToRenderList(_,f),this.info.render.frame++,te===!0&&me.beginShadows();const A=p.state.shadowsArray;ye.render(A,f,x),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=_.opaque,I=_.transmissive;if(p.setupLights(),x.isArrayCamera){const O=x.cameras;if(I.length>0)for(let Z=0,ie=O.length;Z<ie;Z++){const j=O[Z];Qr(L,I,f,j)}Be&&Ce.render(f);for(let Z=0,ie=O.length;Z<ie;Z++){const j=O[Z];Sr(_,f,j,j.viewport)}}else I.length>0&&Qr(L,I,f,x),Be&&Ce.render(f),Sr(_,f,x);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),f.isScene===!0&&f.onAfterRender(S,f,x),it.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],te===!0&&me.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Pi(f,x,A,L){if(f.visible===!1)return;if(f.layers.test(x.layers)){if(f.isGroup)A=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(x);else if(f.isLight)p.pushLight(f),f.castShadow&&p.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||J.intersectsSprite(f)){L&&ze.setFromMatrixPosition(f.matrixWorld).applyMatrix4(Me);const Z=Q.update(f),ie=f.material;ie.visible&&_.push(f,Z,ie,A,ze.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||J.intersectsObject(f))){const Z=Q.update(f),ie=f.material;if(L&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),ze.copy(f.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),ze.copy(Z.boundingSphere.center)),ze.applyMatrix4(f.matrixWorld).applyMatrix4(Me)),Array.isArray(ie)){const j=Z.groups;for(let ee=0,K=j.length;ee<K;ee++){const ae=j[ee],ge=ie[ae.materialIndex];ge&&ge.visible&&_.push(f,Z,ge,A,ze.z,ae)}}else ie.visible&&_.push(f,Z,ie,A,ze.z,null)}}const O=f.children;for(let Z=0,ie=O.length;Z<ie;Z++)Pi(O[Z],x,A,L)}function Sr(f,x,A,L){const I=f.opaque,O=f.transmissive,Z=f.transparent;p.setupLightsView(A),te===!0&&me.setGlobalState(S.clippingPlanes,A),L&&Ve.viewport(R.copy(L)),I.length>0&&Jn(I,x,A),O.length>0&&Jn(O,x,A),Z.length>0&&Jn(Z,x,A),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Qr(f,x,A,L){if((A.isScene===!0?A.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new xr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Xi:Ri,minFilter:Wi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const O=p.state.transmissionRenderTarget[L.id],Z=L.viewport||R;O.setSize(Z.z,Z.w);const ie=S.getRenderTarget();S.setRenderTarget(O),S.getClearColor(z),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Ce.render(A);const j=S.toneMapping;S.toneMapping=Yi;const ee=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),te===!0&&me.setGlobalState(S.clippingPlanes,L),Jn(f,A,L),U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let ae=0,ge=x.length;ae<ge;ae++){const we=x[ae],Pe=we.object,Ee=we.geometry,be=we.material,ve=we.group;if(be.side===Cn&&Pe.layers.test(L.layers)){const ut=be.side;be.side=Kn,be.needsUpdate=!0,eo(Pe,A,L,Ee,be,ve),be.side=ut,be.needsUpdate=!0,K=!0}}K===!0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O))}S.setRenderTarget(ie),S.setClearColor(z,H),ee!==void 0&&(L.viewport=ee),S.toneMapping=j}function Jn(f,x,A){const L=x.isScene===!0?x.overrideMaterial:null;for(let I=0,O=f.length;I<O;I++){const Z=f[I],ie=Z.object,j=Z.geometry,ee=L===null?Z.material:L,K=Z.group;ie.layers.test(A.layers)&&eo(ie,x,A,j,ee,K)}}function eo(f,x,A,L,I,O){f.onBeforeRender(S,x,A,L,I,O),f.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),I.onBeforeRender(S,x,A,L,f,O),I.transparent===!0&&I.side===Cn&&I.forceSinglePass===!1?(I.side=Kn,I.needsUpdate=!0,S.renderBufferDirect(A,x,L,I,f,O),I.side=Zr,I.needsUpdate=!0,S.renderBufferDirect(A,x,L,I,f,O),I.side=Cn):S.renderBufferDirect(A,x,L,I,f,O),f.onAfterRender(S,x,A,L,I,O)}function wr(f,x,A){x.isScene!==!0&&(x=Ze);const L=Re.get(f),I=p.state.lights,O=p.state.shadowsArray,Z=I.state.version,ie=Te.getParameters(f,I.state,O,x,A),j=Te.getProgramCacheKey(ie);let ee=L.programs;L.environment=f.isMeshStandardMaterial?x.environment:null,L.fog=x.fog,L.envMap=(f.isMeshStandardMaterial?$:E).get(f.envMap||L.environment),L.envMapRotation=L.environment!==null&&f.envMap===null?x.environmentRotation:f.envMapRotation,ee===void 0&&(f.addEventListener("dispose",ot),ee=new Map,L.programs=ee);let K=ee.get(j);if(K!==void 0){if(L.currentProgram===K&&L.lightsStateVersion===Z)return Ki(f,ie),K}else ie.uniforms=Te.getUniforms(f),f.onBeforeCompile(ie,S),K=Te.acquireProgram(ie,j),ee.set(j,K),L.uniforms=ie.uniforms;const ae=L.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(ae.clippingPlanes=me.uniform),Ki(f,ie),L.needsLights=Dn(f),L.lightsStateVersion=Z,L.needsLights&&(ae.ambientLightColor.value=I.state.ambient,ae.lightProbe.value=I.state.probe,ae.directionalLights.value=I.state.directional,ae.directionalLightShadows.value=I.state.directionalShadow,ae.spotLights.value=I.state.spot,ae.spotLightShadows.value=I.state.spotShadow,ae.rectAreaLights.value=I.state.rectArea,ae.ltc_1.value=I.state.rectAreaLTC1,ae.ltc_2.value=I.state.rectAreaLTC2,ae.pointLights.value=I.state.point,ae.pointLightShadows.value=I.state.pointShadow,ae.hemisphereLights.value=I.state.hemi,ae.directionalShadowMap.value=I.state.directionalShadowMap,ae.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ae.spotShadowMap.value=I.state.spotShadowMap,ae.spotLightMatrix.value=I.state.spotLightMatrix,ae.spotLightMap.value=I.state.spotLightMap,ae.pointShadowMap.value=I.state.pointShadowMap,ae.pointShadowMatrix.value=I.state.pointShadowMatrix),L.currentProgram=K,L.uniformsList=null,K}function to(f){if(f.uniformsList===null){const x=f.currentProgram.getUniforms();f.uniformsList=Al.seqWithValue(x.seq,f.uniforms)}return f.uniformsList}function Ki(f,x){const A=Re.get(f);A.outputColorSpace=x.outputColorSpace,A.batching=x.batching,A.batchingColor=x.batchingColor,A.instancing=x.instancing,A.instancingColor=x.instancingColor,A.instancingMorph=x.instancingMorph,A.skinning=x.skinning,A.morphTargets=x.morphTargets,A.morphNormals=x.morphNormals,A.morphColors=x.morphColors,A.morphTargetsCount=x.morphTargetsCount,A.numClippingPlanes=x.numClippingPlanes,A.numIntersection=x.numClipIntersection,A.vertexAlphas=x.vertexAlphas,A.vertexTangents=x.vertexTangents,A.toneMapping=x.toneMapping}function Is(f,x,A,L,I){x.isScene!==!0&&(x=Ze),U.resetTextureUnits();const O=x.fog,Z=L.isMeshStandardMaterial?x.environment:null,ie=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zi,j=(L.isMeshStandardMaterial?$:E).get(L.envMap||Z),ee=L.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,K=!!A.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ae=!!A.morphAttributes.position,ge=!!A.morphAttributes.normal,we=!!A.morphAttributes.color;let Pe=Yi;L.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pe=S.toneMapping);const Ee=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,be=Ee!==void 0?Ee.length:0,ve=Re.get(L),ut=p.state.lights;if(te===!0&&(ce===!0||f!==y)){const at=f===y&&L.id===M;me.setState(L,f,at)}let Je=!1;L.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ut.state.version||ve.outputColorSpace!==ie||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==j||L.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==me.numPlanes||ve.numIntersection!==me.numIntersection)||ve.vertexAlphas!==ee||ve.vertexTangents!==K||ve.morphTargets!==ae||ve.morphNormals!==ge||ve.morphColors!==we||ve.toneMapping!==Pe||ve.morphTargetsCount!==be)&&(Je=!0):(Je=!0,ve.__version=L.version);let Ct=ve.currentProgram;Je===!0&&(Ct=wr(L,x,I));let st=!1,nt=!1,pt=!1;const ct=Ct.getUniforms(),St=ve.uniforms;if(Ve.useProgram(Ct.program)&&(st=!0,nt=!0,pt=!0),L.id!==M&&(M=L.id,nt=!0),st||y!==f){Ve.buffers.depth.getReversed()?(le.copy(f.projectionMatrix),Gg(le),Wg(le),ct.setValue(k,"projectionMatrix",le)):ct.setValue(k,"projectionMatrix",f.projectionMatrix),ct.setValue(k,"viewMatrix",f.matrixWorldInverse);const jt=ct.map.cameraPosition;jt!==void 0&&jt.setValue(k,Ue.setFromMatrixPosition(f.matrixWorld)),qe.logarithmicDepthBuffer&&ct.setValue(k,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ct.setValue(k,"isOrthographic",f.isOrthographicCamera===!0),y!==f&&(y=f,nt=!0,pt=!0)}if(I.isSkinnedMesh){ct.setOptional(k,I,"bindMatrix"),ct.setOptional(k,I,"bindMatrixInverse");const at=I.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ct.setValue(k,"boneTexture",at.boneTexture,U))}I.isBatchedMesh&&(ct.setOptional(k,I,"batchingTexture"),ct.setValue(k,"batchingTexture",I._matricesTexture,U),ct.setOptional(k,I,"batchingIdTexture"),ct.setValue(k,"batchingIdTexture",I._indirectTexture,U),ct.setOptional(k,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(k,"batchingColorTexture",I._colorsTexture,U));const ft=A.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&De.update(I,A,Ct),(nt||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,ct.setValue(k,"receiveShadow",I.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(St.envMap.value=j,St.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&x.environment!==null&&(St.envMapIntensity.value=x.environmentIntensity),nt&&(ct.setValue(k,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&xn(St,pt),O&&L.fog===!0&&de.refreshFogUniforms(St,O),de.refreshMaterialUniforms(St,L,B,W,p.state.transmissionRenderTarget[f.id]),Al.upload(k,to(ve),St,U)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Al.upload(k,to(ve),St,U),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ct.setValue(k,"center",I.center),ct.setValue(k,"modelViewMatrix",I.modelViewMatrix),ct.setValue(k,"normalMatrix",I.normalMatrix),ct.setValue(k,"modelMatrix",I.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const at=L.uniformsGroups;for(let jt=0,yn=at.length;jt<yn;jt++){const Sn=at[jt];X.update(Sn,Ct),X.bind(Sn,Ct)}}return Ct}function xn(f,x){f.ambientLightColor.needsUpdate=x,f.lightProbe.needsUpdate=x,f.directionalLights.needsUpdate=x,f.directionalLightShadows.needsUpdate=x,f.pointLights.needsUpdate=x,f.pointLightShadows.needsUpdate=x,f.spotLights.needsUpdate=x,f.spotLightShadows.needsUpdate=x,f.rectAreaLights.needsUpdate=x,f.hemisphereLights.needsUpdate=x}function Dn(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(f,x,A){Re.get(f.texture).__webglTexture=x,Re.get(f.depthTexture).__webglTexture=A;const L=Re.get(f);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=A===void 0,L.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(f,x){const A=Re.get(f);A.__webglFramebuffer=x,A.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(f,x=0,A=0){P=f,C=x,T=A;let L=!0,I=null,O=!1,Z=!1;if(f){const j=Re.get(f);if(j.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(k.FRAMEBUFFER,null),L=!1;else if(j.__webglFramebuffer===void 0)U.setupRenderTarget(f);else if(j.__hasExternalTextures)U.rebindTextures(f,Re.get(f.texture).__webglTexture,Re.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const ae=f.depthTexture;if(j.__boundDepthTexture!==ae){if(ae!==null&&Re.has(ae)&&(f.width!==ae.image.width||f.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(f)}}const ee=f.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Z=!0);const K=Re.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(K[x])?I=K[x][A]:I=K[x],O=!0):f.samples>0&&U.useMultisampledRTT(f)===!1?I=Re.get(f).__webglMultisampledFramebuffer:Array.isArray(K)?I=K[A]:I=K,R.copy(f.viewport),F.copy(f.scissor),N=f.scissorTest}else R.copy(_e).multiplyScalar(B).floor(),F.copy(Se).multiplyScalar(B).floor(),N=Ae;if(Ve.bindFramebuffer(k.FRAMEBUFFER,I)&&L&&Ve.drawBuffers(f,I),Ve.viewport(R),Ve.scissor(F),Ve.setScissorTest(N),O){const j=Re.get(f.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+x,j.__webglTexture,A)}else if(Z){const j=Re.get(f.texture),ee=x||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.__webglTexture,A||0,ee)}M=-1},this.readRenderTargetPixels=function(f,x,A,L,I,O,Z){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Re.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&Z!==void 0&&(ie=ie[Z]),ie){Ve.bindFramebuffer(k.FRAMEBUFFER,ie);try{const j=f.texture,ee=j.format,K=j.type;if(!qe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=f.width-L&&A>=0&&A<=f.height-I&&k.readPixels(x,A,L,I,Ge.convert(ee),Ge.convert(K),O)}finally{const j=P!==null?Re.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(f,x,A,L,I,O,Z){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Re.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&Z!==void 0&&(ie=ie[Z]),ie){const j=f.texture,ee=j.format,K=j.type;if(!qe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=f.width-L&&A>=0&&A<=f.height-I){Ve.bindFramebuffer(k.FRAMEBUFFER,ie);const ae=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.bufferData(k.PIXEL_PACK_BUFFER,O.byteLength,k.STREAM_READ),k.readPixels(x,A,L,I,Ge.convert(ee),Ge.convert(K),0);const ge=P!==null?Re.get(P).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,ge);const we=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Vg(k,we,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,O),k.deleteBuffer(ae),k.deleteSync(we),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(f,x=null,A=0){f.isTexture!==!0&&(ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,f=arguments[1]);const L=Math.pow(2,-A),I=Math.floor(f.image.width*L),O=Math.floor(f.image.height*L),Z=x!==null?x.x:0,ie=x!==null?x.y:0;U.setTexture2D(f,0),k.copyTexSubImage2D(k.TEXTURE_2D,A,0,0,Z,ie,I,O),Ve.unbindTexture()},this.copyTextureToTexture=function(f,x,A=null,L=null,I=0){f.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,f=arguments[1],x=arguments[2],I=arguments[3]||0,A=null);let O,Z,ie,j,ee,K,ae,ge,we;const Pe=f.isCompressedTexture?f.mipmaps[I]:f.image;A!==null?(O=A.max.x-A.min.x,Z=A.max.y-A.min.y,ie=A.isBox3?A.max.z-A.min.z:1,j=A.min.x,ee=A.min.y,K=A.isBox3?A.min.z:0):(O=Pe.width,Z=Pe.height,ie=Pe.depth||1,j=0,ee=0,K=0),L!==null?(ae=L.x,ge=L.y,we=L.z):(ae=0,ge=0,we=0);const Ee=Ge.convert(x.format),be=Ge.convert(x.type);let ve;x.isData3DTexture?(U.setTexture3D(x,0),ve=k.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),ve=k.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),ve=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,x.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,x.unpackAlignment);const ut=k.getParameter(k.UNPACK_ROW_LENGTH),Je=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ct=k.getParameter(k.UNPACK_SKIP_PIXELS),st=k.getParameter(k.UNPACK_SKIP_ROWS),nt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,j),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,K);const pt=f.isDataArrayTexture||f.isData3DTexture,ct=x.isDataArrayTexture||x.isData3DTexture;if(f.isRenderTargetTexture||f.isDepthTexture){const St=Re.get(f),ft=Re.get(x),at=Re.get(St.__renderTarget),jt=Re.get(ft.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,at.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let yn=0;yn<ie;yn++)pt&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.get(f).__webglTexture,I,K+yn),f.isDepthTexture?(ct&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.get(x).__webglTexture,I,we+yn),k.blitFramebuffer(j,ee,O,Z,ae,ge,O,Z,k.DEPTH_BUFFER_BIT,k.NEAREST)):ct?k.copyTexSubImage3D(ve,I,ae,ge,we+yn,j,ee,O,Z):k.copyTexSubImage2D(ve,I,ae,ge,we+yn,j,ee,O,Z);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ct?f.isDataTexture||f.isData3DTexture?k.texSubImage3D(ve,I,ae,ge,we,O,Z,ie,Ee,be,Pe.data):x.isCompressedArrayTexture?k.compressedTexSubImage3D(ve,I,ae,ge,we,O,Z,ie,Ee,Pe.data):k.texSubImage3D(ve,I,ae,ge,we,O,Z,ie,Ee,be,Pe):f.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,I,ae,ge,O,Z,Ee,be,Pe.data):f.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,I,ae,ge,Pe.width,Pe.height,Ee,Pe.data):k.texSubImage2D(k.TEXTURE_2D,I,ae,ge,O,Z,Ee,be,Pe);k.pixelStorei(k.UNPACK_ROW_LENGTH,ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ct),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nt),I===0&&x.generateMipmaps&&k.generateMipmap(ve),Ve.unbindTexture()},this.copyTextureToTexture3D=function(f,x,A=null,L=null,I=0){return f.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),A=arguments[0]||null,L=arguments[1]||null,f=arguments[2],x=arguments[3],I=arguments[4]||0),ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(f,x,A,L,I)},this.initRenderTarget=function(f){Re.get(f).__webglFramebuffer===void 0&&U.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?U.setTextureCube(f,0):f.isData3DTexture?U.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?U.setTexture2DArray(f,0):U.setTexture2D(f,0),Ve.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Ve.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class Kr extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ba extends vn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=sn,u=sn,d,h){super(null,s,a,l,c,u,r,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class iw extends vn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rw{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const ow=new rw;class Ta{constructor(e){this.manager=e!==void 0?e:ow,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class sw extends Error{constructor(e,t){super(e),this.response=t}}class aw extends Ta{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Hl.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:n,onError:r});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=sr[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=h?parseInt(h):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:w,value:S})=>{if(w)p.close();else{g+=S.byteLength;const D=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,T=u.length;C<T;C++){const P=u[C];P.onProgress&&P.onProgress(D)}p.enqueue(S),b()}},w=>{p.error(w)})}}});return new Response(_)}else throw new sw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Hl.add(e,c);const u=sr[e];delete sr[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=sr[e];if(u===void 0)throw this.manager.itemError(e),c;delete sr[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lw extends Ta{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Hl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Sa("img");function l(){u(),Hl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class cw extends Ta{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new ba,a=new aw(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:zn,s.wrapT=c.wrapT!==void 0?c.wrapT:zn,s.magFilter=c.magFilter!==void 0?c.magFilter:vt,s.minFilter=c.minFilter!==void 0?c.minFilter:vt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Wi),c.mipmapCount===1&&(s.minFilter=vt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class ki extends Ta{constructor(e){super(e)}load(e,t,n,r){const o=new vn,s=new lw(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class bo extends yr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var _i=Uint8Array,us=Uint16Array,uw=Int32Array,zm=new _i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bm=new _i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fw=new _i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),km=function(i,e){for(var t=new us(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new uw(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Hm=km(zm,2),Vm=Hm.b,hw=Hm.r;Vm[28]=258,hw[258]=28;var dw=km(Bm,0),pw=dw.b,tf=new us(32768);for(var Nt=0;Nt<32768;++Nt){var Nr=(Nt&43690)>>1|(Nt&21845)<<1;Nr=(Nr&52428)>>2|(Nr&13107)<<2,Nr=(Nr&61680)>>4|(Nr&3855)<<4,tf[Nt]=((Nr&65280)>>8|(Nr&255)<<8)>>1}var aa=(function(i,e,t){for(var n=i.length,r=0,o=new us(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new us(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new us(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)a[tf[d]>>l]=c}else for(a=new us(n),r=0;r<n;++r)i[r]&&(a[r]=tf[s[i[r]-1]++]>>15-i[r]);return a}),Ea=new _i(288);for(var Nt=0;Nt<144;++Nt)Ea[Nt]=8;for(var Nt=144;Nt<256;++Nt)Ea[Nt]=9;for(var Nt=256;Nt<280;++Nt)Ea[Nt]=7;for(var Nt=280;Nt<288;++Nt)Ea[Nt]=8;var Gm=new _i(32);for(var Nt=0;Nt<32;++Nt)Gm[Nt]=5;var mw=aa(Ea,9,1),_w=aa(Gm,5,1),Wc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},bi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Xc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},gw=function(i){return(i+7)/8|0},vw=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new _i(i.subarray(e,t))},xw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ti=function(i,e,t){var n=new Error(e||xw[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ti),!t)throw n;return n},yw=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new _i(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new _i(r*3));var c=function(Ze){var Be=t.length;if(Ze>Be){var tt=new _i(Math.max(Be*2,Ze));tt.set(t),t=tt}},u=e.f||0,d=e.p||0,h=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=bi(i,d,1);var b=bi(i,d+1,3);if(d+=3,b)if(b==1)m=mw,v=_w,g=9,_=5;else if(b==2){var C=bi(i,d,31)+257,T=bi(i,d+10,15)+4,P=C+bi(i,d+5,31)+1;d+=14;for(var M=new _i(P),y=new _i(19),R=0;R<T;++R)y[fw[R]]=bi(i,d+R*3,7);d+=T*3;for(var F=Wc(y),N=(1<<F)-1,z=aa(y,F,1),R=0;R<P;){var H=z[bi(i,d,N)];d+=H&15;var w=H>>4;if(w<16)M[R++]=w;else{var V=0,W=0;for(w==16?(W=3+bi(i,d,3),d+=2,V=M[R-1]):w==17?(W=3+bi(i,d,7),d+=3):w==18&&(W=11+bi(i,d,127),d+=7);W--;)M[R++]=V}}var B=M.subarray(0,C),oe=M.subarray(C);g=Wc(B),_=Wc(oe),m=aa(B,g,1),v=aa(oe,_,1)}else Ti(1);else{var w=gw(d)+4,S=i[w-4]|i[w-3]<<8,D=w+S;if(D>r){l&&Ti(0);break}a&&c(h+S),t.set(i.subarray(w,D),h),e.b=h+=S,e.p=d=D*8,e.f=u;continue}if(d>p){l&&Ti(0);break}}a&&c(h+131072);for(var G=(1<<g)-1,_e=(1<<_)-1,Se=d;;Se=d){var V=m[Xc(i,d)&G],Ae=V>>4;if(d+=V&15,d>p){l&&Ti(0);break}if(V||Ti(2),Ae<256)t[h++]=Ae;else if(Ae==256){Se=d,m=null;break}else{var J=Ae-254;if(Ae>264){var R=Ae-257,te=zm[R];J=bi(i,d,(1<<te)-1)+Vm[R],d+=te}var ce=v[Xc(i,d)&_e],le=ce>>4;ce||Ti(3),d+=ce&15;var oe=pw[le];if(le>3){var te=Bm[le];oe+=Xc(i,d)&(1<<te)-1,d+=te}if(d>p){l&&Ti(0);break}a&&c(h+131072);var Me=h+J;if(h<oe){var Ue=o-oe,ze=Math.min(oe,Me);for(Ue+h<0&&Ti(3);h<ze;++h)t[h]=n[Ue+h]}for(;h<Me;++h)t[h]=t[h-oe]}}e.l=m,e.p=Se,e.b=h,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return h!=t.length&&s?vw(t,0,h):t.subarray(0,h)},Sw=new _i(0),ww=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ti(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ti(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ll(i,e){return yw(i.subarray(ww(i),-4),{i:2},e,e)}var Mw=typeof TextDecoder<"u"&&new TextDecoder,bw=0;try{Mw.decode(Sw,{stream:!0}),bw=1}catch{}class Tw extends cw{constructor(e){super(e),this.type=Xi}parse(e){const M=Math.pow(2.7182818,2.2);function y(f,x){let A=0;for(let I=0;I<65536;++I)(I==0||f[I>>3]&1<<(I&7))&&(x[A++]=I);const L=A-1;for(;A<65536;)x[A++]=0;return L}function R(f){for(let x=0;x<16384;x++)f[x]={},f[x].len=0,f[x].lit=0,f[x].p=null}const F={l:0,c:0,lc:0};function N(f,x,A,L,I){for(;A<f;)x=x<<8|ue(L,I),A+=8;A-=f,F.l=x>>A&(1<<f)-1,F.c=x,F.lc=A}const z=new Array(59);function H(f){for(let A=0;A<=58;++A)z[A]=0;for(let A=0;A<65537;++A)z[f[A]]+=1;let x=0;for(let A=58;A>0;--A){const L=x+z[A]>>1;z[A]=x,x=L}for(let A=0;A<65537;++A){const L=f[A];L>0&&(f[A]=L|z[L]++<<6)}}function V(f,x,A,L,I,O){const Z=x;let ie=0,j=0;for(;L<=I;L++){if(Z.value-x.value>A)return!1;N(6,ie,j,f,Z);const ee=F.l;if(ie=F.c,j=F.lc,O[L]=ee,ee==63){if(Z.value-x.value>A)throw new Error("Something wrong with hufUnpackEncTable");N(8,ie,j,f,Z);let K=F.l+6;if(ie=F.c,j=F.lc,L+K>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[L++]=0;L--}else if(ee>=59){let K=ee-59+2;if(L+K>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)O[L++]=0;L--}}H(O)}function W(f){return f&63}function B(f){return f>>6}function oe(f,x,A,L){for(;x<=A;x++){const I=B(f[x]),O=W(f[x]);if(I>>O)throw new Error("Invalid table entry");if(O>14){const Z=L[I>>O-14];if(Z.len)throw new Error("Invalid table entry");if(Z.lit++,Z.p){const ie=Z.p;Z.p=new Array(Z.lit);for(let j=0;j<Z.lit-1;++j)Z.p[j]=ie[j]}else Z.p=new Array(1);Z.p[Z.lit-1]=x}else if(O){let Z=0;for(let ie=1<<14-O;ie>0;ie--){const j=L[(I<<14-O)+Z];if(j.len||j.p)throw new Error("Invalid table entry");j.len=O,j.lit=x,Z++}}}return!0}const G={c:0,lc:0};function _e(f,x,A,L){f=f<<8|ue(A,L),x+=8,G.c=f,G.lc=x}const Se={c:0,lc:0};function Ae(f,x,A,L,I,O,Z,ie,j){if(f==x){L<8&&(_e(A,L,I,O),A=G.c,L=G.lc),L-=8;let ee=A>>L;if(ee=new Uint8Array([ee])[0],ie.value+ee>j)return!1;const K=Z[ie.value-1];for(;ee-- >0;)Z[ie.value++]=K}else if(ie.value<j)Z[ie.value++]=f;else return!1;Se.c=A,Se.lc=L}function J(f){return f&65535}function te(f){const x=J(f);return x>32767?x-65536:x}const ce={a:0,b:0};function le(f,x){const A=te(f),I=te(x),O=A+(I&1)+(I>>1),Z=O,ie=O-I;ce.a=Z,ce.b=ie}function Me(f,x){const A=J(f),L=J(x),I=A-(L>>1)&65535,O=L+I-32768&65535;ce.a=O,ce.b=I}function Ue(f,x,A,L,I,O,Z){const ie=Z<16384,j=A>I?I:A;let ee=1,K,ae;for(;ee<=j;)ee<<=1;for(ee>>=1,K=ee,ee>>=1;ee>=1;){ae=0;const ge=ae+O*(I-K),we=O*ee,Pe=O*K,Ee=L*ee,be=L*K;let ve,ut,Je,Ct;for(;ae<=ge;ae+=Pe){let st=ae;const nt=ae+L*(A-K);for(;st<=nt;st+=be){const pt=st+Ee,ct=st+we,St=ct+Ee;ie?(le(f[st+x],f[ct+x]),ve=ce.a,Je=ce.b,le(f[pt+x],f[St+x]),ut=ce.a,Ct=ce.b,le(ve,ut),f[st+x]=ce.a,f[pt+x]=ce.b,le(Je,Ct),f[ct+x]=ce.a,f[St+x]=ce.b):(Me(f[st+x],f[ct+x]),ve=ce.a,Je=ce.b,Me(f[pt+x],f[St+x]),ut=ce.a,Ct=ce.b,Me(ve,ut),f[st+x]=ce.a,f[pt+x]=ce.b,Me(Je,Ct),f[ct+x]=ce.a,f[St+x]=ce.b)}if(A&ee){const pt=st+we;ie?le(f[st+x],f[pt+x]):Me(f[st+x],f[pt+x]),ve=ce.a,f[pt+x]=ce.b,f[st+x]=ve}}if(I&ee){let st=ae;const nt=ae+L*(A-K);for(;st<=nt;st+=be){const pt=st+Ee;ie?le(f[st+x],f[pt+x]):Me(f[st+x],f[pt+x]),ve=ce.a,f[pt+x]=ce.b,f[st+x]=ve}}K=ee,ee>>=1}return ae}function ze(f,x,A,L,I,O,Z,ie,j){let ee=0,K=0;const ae=Z,ge=Math.trunc(L.value+(I+7)/8);for(;L.value<ge;)for(_e(ee,K,A,L),ee=G.c,K=G.lc;K>=14;){const Pe=ee>>K-14&16383,Ee=x[Pe];if(Ee.len)K-=Ee.len,Ae(Ee.lit,O,ee,K,A,L,ie,j,ae),ee=Se.c,K=Se.lc;else{if(!Ee.p)throw new Error("hufDecode issues");let be;for(be=0;be<Ee.lit;be++){const ve=W(f[Ee.p[be]]);for(;K<ve&&L.value<ge;)_e(ee,K,A,L),ee=G.c,K=G.lc;if(K>=ve&&B(f[Ee.p[be]])==(ee>>K-ve&(1<<ve)-1)){K-=ve,Ae(Ee.p[be],O,ee,K,A,L,ie,j,ae),ee=Se.c,K=Se.lc;break}}if(be==Ee.lit)throw new Error("hufDecode issues")}}const we=8-I&7;for(ee>>=we,K-=we;K>0;){const Pe=x[ee<<14-K&16383];if(Pe.len)K-=Pe.len,Ae(Pe.lit,O,ee,K,A,L,ie,j,ae),ee=Se.c,K=Se.lc;else throw new Error("hufDecode issues")}return!0}function Ze(f,x,A,L,I,O){const Z={value:0},ie=A.value,j=De(x,A),ee=De(x,A);A.value+=4;const K=De(x,A);if(A.value+=4,j<0||j>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ae=new Array(65537),ge=new Array(16384);R(ge);const we=L-(A.value-ie);if(V(f,A,we,j,ee,ae),K>8*(L-(A.value-ie)))throw new Error("Something wrong with hufUncompress");oe(ae,j,ee,ge),ze(ae,ge,f,A,K,ee,O,I,Z)}function Be(f,x,A){for(let L=0;L<A;++L)x[L]=f[x[L]]}function tt(f){for(let x=1;x<f.length;x++){const A=f[x-1]+f[x]-128;f[x]=A}}function k(f,x){let A=0,L=Math.floor((f.length+1)/2),I=0;const O=f.length-1;for(;!(I>O||(x[I++]=f[A++],I>O));)x[I++]=f[L++]}function We(f){let x=f.byteLength;const A=new Array;let L=0;const I=new DataView(f);for(;x>0;){const O=I.getInt8(L++);if(O<0){const Z=-O;x-=Z+1;for(let ie=0;ie<Z;ie++)A.push(I.getUint8(L++))}else{const Z=O;x-=2;const ie=I.getUint8(L++);for(let j=0;j<Z+1;j++)A.push(ie)}}return A}function Xe(f,x,A,L,I,O){let Z=new DataView(O.buffer);const ie=A[f.idx[0]].width,j=A[f.idx[0]].height,ee=3,K=Math.floor(ie/8),ae=Math.ceil(ie/8),ge=Math.ceil(j/8),we=ie-(ae-1)*8,Pe=j-(ge-1)*8,Ee={value:0},be=new Array(ee),ve=new Array(ee),ut=new Array(ee),Je=new Array(ee),Ct=new Array(ee);for(let nt=0;nt<ee;++nt)Ct[nt]=x[f.idx[nt]],be[nt]=nt<1?0:be[nt-1]+ae*ge,ve[nt]=new Float32Array(64),ut[nt]=new Uint16Array(64),Je[nt]=new Uint16Array(ae*64);for(let nt=0;nt<ge;++nt){let pt=8;nt==ge-1&&(pt=Pe);let ct=8;for(let ft=0;ft<ae;++ft){ft==ae-1&&(ct=we);for(let at=0;at<ee;++at)ut[at].fill(0),ut[at][0]=I[be[at]++],qe(Ee,L,ut[at]),Ve(ut[at],ve[at]),Ke(ve[at]);Re(ve);for(let at=0;at<ee;++at)U(ve[at],Je[at],ft*64)}let St=0;for(let ft=0;ft<ee;++ft){const at=A[f.idx[ft]].type;for(let jt=8*nt;jt<8*nt+pt;++jt){St=Ct[ft][jt];for(let yn=0;yn<K;++yn){const Sn=yn*64+(jt&7)*8;Z.setUint16(St+0*at,Je[ft][Sn+0],!0),Z.setUint16(St+2*at,Je[ft][Sn+1],!0),Z.setUint16(St+4*at,Je[ft][Sn+2],!0),Z.setUint16(St+6*at,Je[ft][Sn+3],!0),Z.setUint16(St+8*at,Je[ft][Sn+4],!0),Z.setUint16(St+10*at,Je[ft][Sn+5],!0),Z.setUint16(St+12*at,Je[ft][Sn+6],!0),Z.setUint16(St+14*at,Je[ft][Sn+7],!0),St+=16*at}}if(K!=ae)for(let jt=8*nt;jt<8*nt+pt;++jt){const yn=Ct[ft][jt]+8*K*2*at,Sn=K*64+(jt&7)*8;for(let no=0;no<ct;++no)Z.setUint16(yn+no*2*at,Je[ft][Sn+no],!0)}}}const st=new Uint16Array(ie);Z=new DataView(O.buffer);for(let nt=0;nt<ee;++nt){A[f.idx[nt]].decoded=!0;const pt=A[f.idx[nt]].type;if(A[nt].type==2)for(let ct=0;ct<j;++ct){const St=Ct[nt][ct];for(let ft=0;ft<ie;++ft)st[ft]=Z.getUint16(St+ft*2*pt,!0);for(let ft=0;ft<ie;++ft)Z.setFloat32(St+ft*2*pt,ne(st[ft]),!0)}}}function qe(f,x,A){let L,I=1;for(;I<64;)L=x[f.value],L==65280?I=64:L>>8==255?I+=L&255:(A[I]=L,I++),f.value++}function Ve(f,x){x[0]=ne(f[0]),x[1]=ne(f[1]),x[2]=ne(f[5]),x[3]=ne(f[6]),x[4]=ne(f[14]),x[5]=ne(f[15]),x[6]=ne(f[27]),x[7]=ne(f[28]),x[8]=ne(f[2]),x[9]=ne(f[4]),x[10]=ne(f[7]),x[11]=ne(f[13]),x[12]=ne(f[16]),x[13]=ne(f[26]),x[14]=ne(f[29]),x[15]=ne(f[42]),x[16]=ne(f[3]),x[17]=ne(f[8]),x[18]=ne(f[12]),x[19]=ne(f[17]),x[20]=ne(f[25]),x[21]=ne(f[30]),x[22]=ne(f[41]),x[23]=ne(f[43]),x[24]=ne(f[9]),x[25]=ne(f[11]),x[26]=ne(f[18]),x[27]=ne(f[24]),x[28]=ne(f[31]),x[29]=ne(f[40]),x[30]=ne(f[44]),x[31]=ne(f[53]),x[32]=ne(f[10]),x[33]=ne(f[19]),x[34]=ne(f[23]),x[35]=ne(f[32]),x[36]=ne(f[39]),x[37]=ne(f[45]),x[38]=ne(f[52]),x[39]=ne(f[54]),x[40]=ne(f[20]),x[41]=ne(f[22]),x[42]=ne(f[33]),x[43]=ne(f[38]),x[44]=ne(f[46]),x[45]=ne(f[51]),x[46]=ne(f[55]),x[47]=ne(f[60]),x[48]=ne(f[21]),x[49]=ne(f[34]),x[50]=ne(f[37]),x[51]=ne(f[47]),x[52]=ne(f[50]),x[53]=ne(f[56]),x[54]=ne(f[59]),x[55]=ne(f[61]),x[56]=ne(f[35]),x[57]=ne(f[36]),x[58]=ne(f[48]),x[59]=ne(f[49]),x[60]=ne(f[57]),x[61]=ne(f[58]),x[62]=ne(f[62]),x[63]=ne(f[63])}function Ke(f){const x=.5*Math.cos(.7853975),A=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),Z=.5*Math.cos(3*3.14159/8),ie=.5*Math.cos(7*3.14159/16),j=new Array(4),ee=new Array(4),K=new Array(4),ae=new Array(4);for(let ge=0;ge<8;++ge){const we=ge*8;j[0]=L*f[we+2],j[1]=Z*f[we+2],j[2]=L*f[we+6],j[3]=Z*f[we+6],ee[0]=A*f[we+1]+I*f[we+3]+O*f[we+5]+ie*f[we+7],ee[1]=I*f[we+1]-ie*f[we+3]-A*f[we+5]-O*f[we+7],ee[2]=O*f[we+1]-A*f[we+3]+ie*f[we+5]+I*f[we+7],ee[3]=ie*f[we+1]-O*f[we+3]+I*f[we+5]-A*f[we+7],K[0]=x*(f[we+0]+f[we+4]),K[3]=x*(f[we+0]-f[we+4]),K[1]=j[0]+j[3],K[2]=j[1]-j[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],f[we+0]=ae[0]+ee[0],f[we+1]=ae[1]+ee[1],f[we+2]=ae[2]+ee[2],f[we+3]=ae[3]+ee[3],f[we+4]=ae[3]-ee[3],f[we+5]=ae[2]-ee[2],f[we+6]=ae[1]-ee[1],f[we+7]=ae[0]-ee[0]}for(let ge=0;ge<8;++ge)j[0]=L*f[16+ge],j[1]=Z*f[16+ge],j[2]=L*f[48+ge],j[3]=Z*f[48+ge],ee[0]=A*f[8+ge]+I*f[24+ge]+O*f[40+ge]+ie*f[56+ge],ee[1]=I*f[8+ge]-ie*f[24+ge]-A*f[40+ge]-O*f[56+ge],ee[2]=O*f[8+ge]-A*f[24+ge]+ie*f[40+ge]+I*f[56+ge],ee[3]=ie*f[8+ge]-O*f[24+ge]+I*f[40+ge]-A*f[56+ge],K[0]=x*(f[ge]+f[32+ge]),K[3]=x*(f[ge]-f[32+ge]),K[1]=j[0]+j[3],K[2]=j[1]-j[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],f[0+ge]=ae[0]+ee[0],f[8+ge]=ae[1]+ee[1],f[16+ge]=ae[2]+ee[2],f[24+ge]=ae[3]+ee[3],f[32+ge]=ae[3]-ee[3],f[40+ge]=ae[2]-ee[2],f[48+ge]=ae[1]-ee[1],f[56+ge]=ae[0]-ee[0]}function Re(f){for(let x=0;x<64;++x){const A=f[0][x],L=f[1][x],I=f[2][x];f[0][x]=A+1.5747*I,f[1][x]=A-.1873*L-.4682*I,f[2][x]=A+1.8556*L}}function U(f,x,A){for(let L=0;L<64;++L)x[A+L]=od.toHalfFloat(E(f[L]))}function E(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(M,Math.abs(f)-1)}function $(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function Y(f){const x=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),A=new Uint8Array(We(x)),L=new Uint8Array(A.length);return tt(A),k(A,L),new DataView(L.buffer)}function se(f){const x=f.array.slice(f.offset.value,f.offset.value+f.size),A=ll(x),L=new Uint8Array(A.length);return tt(A),k(A,L),new DataView(L.buffer)}function Q(f){const x=f.viewer,A={value:f.offset.value},L=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),I=new Uint8Array(8192);let O=0;const Z=new Array(f.inputChannels.length);for(let Pe=0,Ee=f.inputChannels.length;Pe<Ee;Pe++)Z[Pe]={},Z[Pe].start=O,Z[Pe].end=Z[Pe].start,Z[Pe].nx=f.columns,Z[Pe].ny=f.lines,Z[Pe].size=f.type,O+=Z[Pe].nx*Z[Pe].ny*Z[Pe].size;const ie=re(x,A),j=re(x,A);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ie<=j)for(let Pe=0;Pe<j-ie+1;Pe++)I[Pe+ie]=Fe(x,A);const ee=new Uint16Array(65536),K=y(I,ee),ae=De(x,A);Ze(f.array,x,A,ae,L,O);for(let Pe=0;Pe<f.inputChannels.length;++Pe){const Ee=Z[Pe];for(let be=0;be<Z[Pe].size;++be)Ue(L,Ee.start+be,Ee.nx,Ee.size,Ee.ny,Ee.nx*Ee.size,K)}Be(ee,L,O);let ge=0;const we=new Uint8Array(L.buffer.byteLength);for(let Pe=0;Pe<f.lines;Pe++)for(let Ee=0;Ee<f.inputChannels.length;Ee++){const be=Z[Ee],ve=be.nx*be.size,ut=new Uint8Array(L.buffer,be.end*2,ve*2);we.set(ut,ge),ge+=ve*2,be.end+=ve}return new DataView(we.buffer)}function Te(f){const x=f.array.slice(f.offset.value,f.offset.value+f.size),A=ll(x),L=f.inputChannels.length*f.lines*f.columns*f.totalBytes,I=new ArrayBuffer(L),O=new DataView(I);let Z=0,ie=0;const j=new Array(4);for(let ee=0;ee<f.lines;ee++)for(let K=0;K<f.inputChannels.length;K++){let ae=0;switch(f.inputChannels[K].pixelType){case 1:j[0]=Z,j[1]=j[0]+f.columns,Z=j[1]+f.columns;for(let we=0;we<f.columns;++we){const Pe=A[j[0]++]<<8|A[j[1]++];ae+=Pe,O.setUint16(ie,ae,!0),ie+=2}break;case 2:j[0]=Z,j[1]=j[0]+f.columns,j[2]=j[1]+f.columns,Z=j[2]+f.columns;for(let we=0;we<f.columns;++we){const Pe=A[j[0]++]<<24|A[j[1]++]<<16|A[j[2]++]<<8;ae+=Pe,O.setUint32(ie,ae,!0),ie+=4}break}}return O}function de(f){const x=f.viewer,A={value:f.offset.value},L=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),I={version:Ge(x,A),unknownUncompressedSize:Ge(x,A),unknownCompressedSize:Ge(x,A),acCompressedSize:Ge(x,A),dcCompressedSize:Ge(x,A),rleCompressedSize:Ge(x,A),rleUncompressedSize:Ge(x,A),rleRawSize:Ge(x,A),totalAcUncompressedCount:Ge(x,A),totalDcUncompressedCount:Ge(x,A),acCompression:Ge(x,A)};if(I.version<2)throw new Error("EXRLoader.parse: "+xn.compression+" version "+I.version+" is unsupported");const O=new Array;let Z=re(x,A)-2;for(;Z>0;){const Ee=pe(x.buffer,A),be=Fe(x,A),ve=be>>2&3,ut=(be>>4)-1,Je=new Int8Array([ut])[0],Ct=Fe(x,A);O.push({name:Ee,index:Je,type:Ct,compression:ve}),Z-=Ee.length+3}const ie=xn.channels,j=new Array(f.inputChannels.length);for(let Ee=0;Ee<f.inputChannels.length;++Ee){const be=j[Ee]={},ve=ie[Ee];be.name=ve.name,be.compression=0,be.decoded=!1,be.type=ve.pixelType,be.pLinear=ve.pLinear,be.width=f.columns,be.height=f.lines}const ee={idx:new Array(3)};for(let Ee=0;Ee<f.inputChannels.length;++Ee){const be=j[Ee];for(let ve=0;ve<O.length;++ve){const ut=O[ve];be.name==ut.name&&(be.compression=ut.compression,ut.index>=0&&(ee.idx[ut.index]=Ee),be.offset=Ee)}}let K,ae,ge;if(I.acCompressedSize>0)switch(I.acCompression){case 0:K=new Uint16Array(I.totalAcUncompressedCount),Ze(f.array,x,A,I.acCompressedSize,K,I.totalAcUncompressedCount);break;case 1:const Ee=f.array.slice(A.value,A.value+I.totalAcUncompressedCount),be=ll(Ee);K=new Uint16Array(be.buffer),A.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Ee={array:f.array,offset:A,size:I.dcCompressedSize};ae=new Uint16Array(se(Ee).buffer),A.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Ee=f.array.slice(A.value,A.value+I.rleCompressedSize),be=ll(Ee);ge=We(be.buffer),A.value+=I.rleCompressedSize}let we=0;const Pe=new Array(j.length);for(let Ee=0;Ee<Pe.length;++Ee)Pe[Ee]=new Array;for(let Ee=0;Ee<f.lines;++Ee)for(let be=0;be<j.length;++be)Pe[be].push(we),we+=j[be].width*f.type*2;Xe(ee,Pe,j,K,ae,L);for(let Ee=0;Ee<j.length;++Ee){const be=j[Ee];if(!be.decoded)switch(be.compression){case 2:let ve=0,ut=0;for(let Je=0;Je<f.lines;++Je){let Ct=Pe[Ee][ve];for(let st=0;st<be.width;++st){for(let nt=0;nt<2*be.type;++nt)L[Ct++]=ge[ut+nt*be.width*be.height];ut++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function pe(f,x){const A=new Uint8Array(f);let L=0;for(;A[x.value+L]!=0;)L+=1;const I=new TextDecoder().decode(A.slice(x.value,x.value+L));return x.value=x.value+L+1,I}function Qe(f,x,A){const L=new TextDecoder().decode(new Uint8Array(f).slice(x.value,x.value+A));return x.value=x.value+A,L}function me(f,x){const A=Ce(f,x),L=De(f,x);return[A,L]}function ye(f,x){const A=De(f,x),L=De(f,x);return[A,L]}function Ce(f,x){const A=f.getInt32(x.value,!0);return x.value=x.value+4,A}function De(f,x){const A=f.getUint32(x.value,!0);return x.value=x.value+4,A}function ue(f,x){const A=f[x.value];return x.value=x.value+1,A}function Fe(f,x){const A=f.getUint8(x.value);return x.value=x.value+1,A}const Ge=function(f,x){let A;return"getBigInt64"in DataView.prototype?A=Number(f.getBigInt64(x.value,!0)):A=f.getUint32(x.value+4,!0)+Number(f.getUint32(x.value,!0)<<32),x.value+=8,A};function it(f,x){const A=f.getFloat32(x.value,!0);return x.value+=4,A}function X(f,x){return od.toHalfFloat(it(f,x))}function ne(f){const x=(f&31744)>>10,A=f&1023;return(f>>15?-1:1)*(x?x===31?A?NaN:1/0:Math.pow(2,x-15)*(1+A/1024):6103515625e-14*(A/1024))}function re(f,x){const A=f.getUint16(x.value,!0);return x.value+=2,A}function he(f,x){return ne(re(f,x))}function Ne(f,x,A,L){const I=A.value,O=[];for(;A.value<I+L-1;){const Z=pe(x,A),ie=Ce(f,A),j=Fe(f,A);A.value+=3;const ee=Ce(f,A),K=Ce(f,A);O.push({name:Z,pixelType:ie,pLinear:j,xSampling:ee,ySampling:K})}return A.value+=1,O}function Ie(f,x){const A=it(f,x),L=it(f,x),I=it(f,x),O=it(f,x),Z=it(f,x),ie=it(f,x),j=it(f,x),ee=it(f,x);return{redX:A,redY:L,greenX:I,greenY:O,blueX:Z,blueY:ie,whiteX:j,whiteY:ee}}function ot(f,x){const A=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=Fe(f,x);return A[L]}function Tt(f,x){const A=Ce(f,x),L=Ce(f,x),I=Ce(f,x),O=Ce(f,x);return{xMin:A,yMin:L,xMax:I,yMax:O}}function $t(f,x){const A=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=Fe(f,x);return A[L]}function ht(f,x){const A=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=Fe(f,x);return A[L]}function Lt(f,x){const A=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],I=De(f,x),O=De(f,x),Z=Fe(f,x);return{xSize:I,ySize:O,levelMode:A[Z&15],roundingMode:L[Z>>4]}}function Ln(f,x){const A=it(f,x),L=it(f,x);return[A,L]}function Ci(f,x){const A=it(f,x),L=it(f,x),I=it(f,x);return[A,L,I]}function Jr(f,x,A,L,I){if(L==="string"||L==="stringvector"||L==="iccProfile")return Qe(x,A,I);if(L==="chlist")return Ne(f,x,A,I);if(L==="chromaticities")return Ie(f,A);if(L==="compression")return ot(f,A);if(L==="box2i")return Tt(f,A);if(L==="envmap")return ht(f,A);if(L==="tiledesc")return Lt(f,A);if(L==="lineOrder")return $t(f,A);if(L==="float")return it(f,A);if(L==="v2f")return Ln(f,A);if(L==="v3f")return Ci(f,A);if(L==="int")return Ce(f,A);if(L==="rational")return me(f,A);if(L==="timecode")return ye(f,A);if(L==="preview")return A.value+=I,"skipped";A.value+=I}function kn(f,x){const A=Math.log2(f);return x=="ROUND_DOWN"?Math.floor(A):Math.ceil(A)}function Pi(f,x,A){let L=0;switch(f.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=kn(Math.max(x,A),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function Sr(f,x,A,L){const I=new Array(f);for(let O=0;O<f;O++){const Z=1<<O;let ie=x/Z|0;L=="ROUND_UP"&&ie*Z<x&&(ie+=1);const j=Math.max(ie,1);I[O]=(j+A-1)/A|0}return I}function Qr(){const f=this,x=f.offset,A={value:0};for(let L=0;L<f.tileCount;L++){const I=Ce(f.viewer,x),O=Ce(f.viewer,x);x.value+=8,f.size=De(f.viewer,x);const Z=I*f.blockWidth,ie=O*f.blockHeight;f.columns=Z+f.blockWidth>f.width?f.width-Z:f.blockWidth,f.lines=ie+f.blockHeight>f.height?f.height-ie:f.blockHeight;const j=f.columns*f.totalBytes,K=f.size<f.lines*j?f.uncompress(f):$(f);x.value+=f.size;for(let ae=0;ae<f.lines;ae++){const ge=ae*f.columns*f.totalBytes;for(let we=0;we<f.inputChannels.length;we++){const Pe=xn.channels[we].name,Ee=f.channelByteOffsets[Pe]*f.columns,be=f.decodeChannels[Pe];if(be===void 0)continue;A.value=ge+Ee;const ve=(f.height-(1+ie+ae))*f.outLineWidth;for(let ut=0;ut<f.columns;ut++){const Je=ve+(ut+Z)*f.outputChannels+be;f.byteArray[Je]=f.getter(K,A)}}}}}function Jn(){const f=this,x=f.offset,A={value:0};for(let L=0;L<f.height/f.blockHeight;L++){const I=Ce(f.viewer,x)-xn.dataWindow.yMin;f.size=De(f.viewer,x),f.lines=I+f.blockHeight>f.height?f.height-I:f.blockHeight;const O=f.columns*f.totalBytes,ie=f.size<f.lines*O?f.uncompress(f):$(f);x.value+=f.size;for(let j=0;j<f.blockHeight;j++){const ee=L*f.blockHeight,K=j+f.scanOrder(ee);if(K>=f.height)continue;const ae=j*O,ge=(f.height-1-K)*f.outLineWidth;for(let we=0;we<f.inputChannels.length;we++){const Pe=xn.channels[we].name,Ee=f.channelByteOffsets[Pe]*f.columns,be=f.decodeChannels[Pe];if(be!==void 0){A.value=ae+Ee;for(let ve=0;ve<f.columns;ve++){const ut=ge+ve*f.outputChannels+be;f.byteArray[ut]=f.getter(ie,A)}}}}}}function eo(f,x,A){const L={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=f.getUint8(4);const I=f.getUint8(5);L.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},A.value=8;let O=!0;for(;O;){const Z=pe(x,A);if(Z==0)O=!1;else{const ie=pe(x,A),j=De(f,A),ee=Jr(f,x,A,ie,j);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ie}'.`):L[Z]=ee}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function wr(f,x,A,L,I){const O={size:0,viewer:x,array:A,offset:L,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Zi};switch(f.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=$;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=Y;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=se;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=Q;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Te;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=de;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=de;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const Z={};for(const K of f.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":Z[K.name]=!0,O.type=K.pixelType}let ie=!1;if(Z.R&&Z.G&&Z.B)ie=!Z.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(Z.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(I){case Xn:O.getter=he;break;case Xi:O.getter=re;break}else if(O.type==2)switch(I){case Xn:O.getter=it;break;case Xi:O.getter=X}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+f.compression+".");O.columns=O.width;const j=O.width*O.height*O.outputChannels;switch(I){case Xn:O.byteArray=new Float32Array(j),ie&&O.byteArray.fill(1,0,j);break;case Xi:O.byteArray=new Uint16Array(j),ie&&O.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let ee=0;for(const K of f.channels)O.decodeChannels[K.name]!==void 0&&(O.channelByteOffsets[K.name]=ee),ee+=K.pixelType*2;if(O.totalBytes=ee,O.outLineWidth=O.width*O.outputChannels,f.lineOrder==="INCREASING_Y"?O.scanOrder=K=>K:O.scanOrder=K=>O.height-1-K,O.outputChannels==4?(O.format=_n,O.colorSpace=Zi):(O.format=Pf,O.colorSpace=Qt),f.spec.singleTile){O.blockHeight=f.tiles.ySize,O.blockWidth=f.tiles.xSize;const K=Pi(f.tiles,O.width,O.height),ae=Sr(K,O.width,f.tiles.xSize,f.tiles.roundingMode),ge=Sr(K,O.height,f.tiles.ySize,f.tiles.roundingMode);O.tileCount=ae[0]*ge[0];for(let we=0;we<K;we++)for(let Pe=0;Pe<ge[we];Pe++)for(let Ee=0;Ee<ae[we];Ee++)Ge(x,L);O.decode=Qr.bind(O)}else{O.blockWidth=O.width;const K=Math.ceil(O.height/O.blockHeight);for(let ae=0;ae<K;ae++)Ge(x,L);O.decode=Jn.bind(O)}return O}const to={value:0},Ki=new DataView(e),Is=new Uint8Array(e),xn=eo(Ki,e,to),Dn=wr(xn,Ki,Is,to,this.type);return Dn.decode(),{header:xn,width:Dn.width,height:Dn.height,data:Dn.byteArray,format:Dn.format,colorSpace:Dn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=vt,s.magFilter=vt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function bn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new yr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const h=c[u],m=h.id,v=m==="indices"?s:o,g=h.componentSize,_=globalThis[h.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let w;if(h.needsPack){const S=h.packedComponents,D=S.length,C=h.storageType.indexOf("Int")===0,T=1<<b*8,P=C?T*.5:0,M=1/T;w=new Float32Array(v*g);for(let y=0,R=0;y<v;y++)for(let F=0;F<D;F++){const N=S[F];w[R]=(p[R]+P)*M*N.delta+N.from,R++}}else w=p;if(m==="indices"){let S=w;w instanceof Uint8Array&&(S=new Uint16Array(w.length),S.set(w)),l.setIndex(new Zt(S,1))}else l.setAttribute(m,new Zt(w,g));a+=v*g*b}return l.computeBoundingSphere(),l}const cl=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],qc={density:1,friction:2,restitution:.8},Ew=40,Eo=8,Aw=`
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
`,Rw=`
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
`,Cw=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Pw=`
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
`;function Lw(i){const e={...qc},t={...qc},n={...qc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function Dw(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Nd(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class Iw{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Bn().setFromEuler(new hi(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(Ew),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function Uw(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*cl.length),r=cl[n];const o=new Kr,s=new Gn(25,1,.1,100);s.position.set(0,0,25);const a=new Jl({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Zi,a.toneMapping=Yi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[h,m]=await Promise.all([bn(u),new Promise((k,We)=>{new Tw().load(d,k,void 0,We)})]);m.minFilter=vt,m.magFilter=vt,m.generateMipmaps=!1,m.colorSpace=Qt;const v=new q(10,10,5),g=Lw(r),_=Dw("balloonBody-25"),p=[],b=[],w=[],S=[],D=Array.from({length:Eo},()=>new Ft(0,0,-999,.01)),C=Array.from({length:Eo},()=>new $e(1118481)),T=k=>new At({uniforms:{u_matcap:{value:m},u_color:{value:new $e(k.color)},u_bgColor:{value:new $e(1316117)},u_roughness:{value:k.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ft(0,0,0,1)},u_selfRotation:{value:new Ft(0,0,0,1)},u_nearPositionRadiusList:{value:D.map(We=>We.clone())},u_nearColorList:{value:C.map(We=>We.clone())}},vertexShader:Aw,fragmentShader:Rw});for(const k of g){const We=T(k),Xe=new Ut(h,We);Xe.frustumCulled=!1,Xe.scale.setScalar(k.radius),o.add(Xe),b.push(Xe),w.push(We),p.push(new Iw(k.radius,k.density,k.friction,k.restitution,_,!1)),S.push({i:b.length-1,d2:0})}const P=new At({uniforms:{u_color0:{value:new $e(r)},u_color1:{value:new $e(1316117)},u_aspect:{value:1}},vertexShader:Cw,fragmentShader:Pw,depthWrite:!1}),M=new Ut(new ci(90,60),P);M.position.z=-12,M.renderOrder=-1e3,o.add(M);const y=new et(0,0),R=new q,F=new q,N=new q,z=new q,H=new q,V=new q,W=new q,B=new q,oe=new q,G=new q,_e=new Bn,Se=.025,Ae=.1,J=.12,te=k=>{const We=(e||i).getBoundingClientRect();y.x=(k.clientX-We.left)/We.width*2-1,y.y=-((k.clientY-We.top)/We.height*2-1)};window.addEventListener("pointermove",te);const ce=()=>{n=(n+1)%cl.length,r=cl[n],b.forEach((k,We)=>{const Xe=g[We];Xe.isColored&&(k.material.uniforms.u_color.value.set(r),Xe.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(k=>k.applyImpulse())},le=()=>ce();i.addEventListener("click",le),e==null||e.addEventListener("click",le);const Me=()=>{const k=e||i.parentElement,We=k.clientWidth,Xe=k.clientHeight,qe=We/Math.max(Xe,1);s.fov=Nd(qe,2.2,2/3,18,30),s.aspect=qe,s.updateProjectionMatrix(),a.setSize(We,Xe,!1),P.uniforms.u_aspect.value=qe};Me(),window.addEventListener("resize",Me);let Ue=0,ze=performance.now();const Ze=performance.now(),Be=()=>{const We=(e||i).getBoundingClientRect();l=We.bottom>0&&We.top<window.innerHeight};window.addEventListener("scroll",Be,{passive:!0}),Be();const tt=k=>{if(Ue=requestAnimationFrame(tt),!l){ze=k;return}let We=Math.min(.05,(k-ze)/1e3);ze=k;const Xe=t?1:2;We/=Xe;const qe=(k-Ze)/1e3,Ve=Nd(qe,.3,2,25,17.5);s.position.z=Ve;for(let Ke=0;Ke<Xe;Ke++){const Re=new q(y.x,y.y,.5).unproject(s);Re.sub(s.position).normalize();const U=(0-s.position.z)/Re.z;R.copy(s.position).addScaledVector(Re,U),N.copy(R).sub(F).multiplyScalar(J/Math.max(We,.001)),z.copy(R).sub(s.position);const E=z.lengthSq()||1;F.copy(R);for(let $=0;$<p.length;$++){const Y=p[$];Y.updateGravity(We),V.copy(Y.velocity),W.copy(Y.position);for(let de=$+1;de<p.length;de++){const pe=p[de];oe.copy(pe.velocity),G.copy(pe.position),H.copy(W).sub(G);const Qe=H.length(),me=Y.radius+pe.radius;if(Qe<me&&Qe>1e-6){const ye=Math.sqrt(Y.friction*pe.friction);Y.frictionTot+=ye,pe.frictionTot+=ye,H.normalize(),H.multiplyScalar(.5*(Qe-me)),W.sub(H),G.add(H),H.normalize();const Ce=V.dot(H),De=oe.dot(H),ue=Y.mass,Fe=pe.mass,Ge=(ue*Ce+Fe*De-Fe*(Ce-De)*Y.restitution)/(ue+Fe),it=(ue*Ce+Fe*De-ue*(De-Ce)*pe.restitution)/(ue+Fe);V.addScaledVector(H,(Ge-Ce)/(1+ye)),oe.addScaledVector(H,(it-De)/(1+ye)),pe.position.copy(G),pe.velocity.copy(oe)}}B.copy(W).sub(s.position);let se=B.dot(z)/E;se=B.sub(oe.copy(z).multiplyScalar(se)).length()-Y.radius-Se,se<0&&(B.copy(W).sub(s.position).cross(z).normalize(),oe.copy(z).cross(B).normalize(),W.sub(oe.multiplyScalar(Ae*se)),oe.multiplyScalar(-J/Math.max(We,.001)),V.add(oe),V.add(N));let Q=W.length();if(Q>0){B.set(1,1,1).normalize();let de=1-Math.abs(B.dot(oe.copy(W).normalize()));de*=We*Math.min(1,Math.max(0,Q/2))*.5,de*=$%2*2-1,_e.setFromAxisAngle(B,de),oe.copy(W).applyQuaternion(_e).sub(B.copy(W)),V.add(oe)}B.crossVectors(W,V);let Te=B.length();Te/=Y.inertia,Te>0&&(B.normalize(),_e.setFromAxisAngle(B,Te*We),Y.quaternion.premultiply(_e)),Y.position.copy(W),Y.velocity.copy(V),Y.update(We),["x","y","z"].forEach(de=>{const pe=de==="z"?5.5:7.5;Y.position[de]>pe&&(Y.position[de]=pe,Y.velocity[de]*=-.55),Y.position[de]<-pe&&(Y.position[de]=-pe,Y.velocity[de]*=-.55)})}}for(let Ke=0;Ke<b.length;Ke++){const Re=b[Ke],U=p[Ke];Re.position.copy(U.position),Re.quaternion.copy(U.quaternion);const E=w[Ke].uniforms;E.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),E.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),E.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let Ke=0;Ke<b.length;Ke++){for(let E=0;E<b.length;E++)S[E].i=E,S[E].d2=Ke===E?0:p[Ke].position.distanceToSquared(p[E].position);S.sort((E,$)=>E.d2-$.d2);const Re=w[Ke].uniforms.u_nearPositionRadiusList.value,U=w[Ke].uniforms.u_nearColorList.value;for(let E=0;E<Eo;E++){const $=S[E+1]?S[E+1].i:S[0].i,Y=p[$];Re[E].set(Y.position.x,Y.position.y,Y.position.z,Y.radius),U[E].copy(w[$].uniforms.u_color.value)}}s.position.x+=(y.x*.9-s.position.x)*.04,s.position.y+=(y.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Ue=requestAnimationFrame(tt),{cycleColor:ce,destroy(){cancelAnimationFrame(Ue),window.removeEventListener("pointermove",te),window.removeEventListener("resize",Me),window.removeEventListener("scroll",Be),i.removeEventListener("click",le),e==null||e.removeEventListener("click",le),w.forEach(k=>k.dispose()),P.dispose(),a.dispose()}}}function qt(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function ri(i){return qt(i,0,1)}function Wm(i,e,t){return(t-i)/(e-i||1)}function wo(i,e,t){return qt(Wm(i,e,t),0,1)}function fe(i,e,t,n,r,o){let s=wo(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function Od(i,e,t,n,r,o){let s=Wm(e,t,i);return n+s*(r-n)}function Fw(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,w)=>_*(g*g*g)+p*(g*g)+b*g+w,a=(g,_,p,b,w)=>{const S=g*g;return _*(S*g)+p*S+b*g+w},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,h=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,h,m,0)}function gt(i){return Fw(i,.35,0,0,1)}function Vl(i){return i===1?1:1-Math.pow(2,-10*i)}function Nw(i){return i===0?0:Math.pow(1024,i-1)}function Ow(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function zw(i){return 1-Math.cos(i*Math.PI/2)}function nf(i){return Math.sin(i*Math.PI/2)}function Bw(i){return-(Math.cos(Math.PI*i)-1)/2}function kw(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function rf(i){return i*i*i}function of(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Tn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,Od(n,t,t-r,-1,0));s+=Math.max(0,Od(n,0,-r,0,1));const a=fe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function Hw(i){return 1-Math.pow(1-i,3)}function Vw(i){return i*i*i*i}function Gw(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Oi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const zd=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function ul(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function Bd(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function zf(i){const e={};let t=0;for(const h of zd)e[h.id]={...h,pixelFrom:0,pixelTo:0,pixelCount:0},h.weight&&(t+=h.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const h=window.innerHeight||1,m=ul(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=ul(v),p=ul(g),b=Math.max(_.height,Bd(v,1080/1496)),w=Math.max(p.height,Bd(g,1537/2e3));n=(_.top||m.top)-h;const S=(h+b)*.5,D=Math.max((h+w)*.5+h,h*1.85),C=document.getElementById("footer-section")||document.getElementById("end-section")||document.querySelector("footer"),T=document.documentElement.scrollHeight,P=C?Math.max(ul(C).bottom,T):T;let M=Math.max(h*1.35,P-m.bottom);const y=Math.max(h*12,T-h-n);let R=Math.max(h*8,m.bottom-n-S-D);const F=S+D+M;F+R>y&&(R=Math.max(h*6,y-F)),F+R>y&&(M=Math.max(h*.5,y-S-D-R)),e.blackFrameShow.pixelCount=S,e.astronautDrop.pixelCount=D,e.astronautWait.pixelCount=Math.max(h*.5,M),r=0;for(const N of zd){const z=e[N.id];z.pixelFrom=r,z.weight&&(z.pixelCount=R*z.weight/t),z.id==="blackFrameIn"&&(z.pixelCount=Math.min(z.pixelCount,h*1.15)),r+=z.pixelCount,z.pixelTo=r}}function a(){const h=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;h!==o&&(o=h,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(h,m=h){a();const v=e[h],g=e[m],_=v.pixelFrom,p=g.pixelTo,b=Math.max(p-_,1e-6),w=c()-_,S=w/b;return{ratio:Math.max(0,Math.min(1,S)),raw:S,active:S>=0&&S<1,global:c()/Math.max(r,1),pixel:w,pixelCount:b}}function d(h,m){return u(h,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const Ww=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,Xw=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,qw="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",Yw="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Xm=`
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
`,qm=`
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
`,$w=`
${Xm}
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
${qm}
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
`,Zw=`
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
`,kd=`
${Xm}
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
${qm}
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
`,ar=5,fl=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Kw=`
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
`,jw=`
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
`,Jw=`
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
`,Qw=`
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
`;function os(i,e,t=!1,n=0){const r={minFilter:vt,magFilter:vt,format:_n,type:n>0?Ri:Xi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new xr(i,e,r);return t&&n===0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Do),t&&n>0&&(o.depthTexture=new kl(i,e),o.depthTexture.type=Do),o}function eM(i,e,t,{isMobile:n=!1}={}){const r=new et(1,1);i.getSize(r);let o=!!n,s=os(1,1,!0,4),a=os(1,1,!1),l=os(1,1,!1),c=os(1,1,!1),u=null,d=null;const h=[],m=[];for(let Y=0;Y<ar;Y++)h.push(os(1,1)),m.push(os(1,1));const v=new Kl(-1,1,1,-1,0,1),g=new Ut(new ci(2,2),new Nf),_=new Kr;_.add(g);const p=new At({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new et(1,1)},u_aspect:{value:new et(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:fl,fragmentShader:Kw,depthTest:!1,depthWrite:!1,toneMapped:!1}),b=[];for(let Y=0;Y<ar;Y++){const se=3+Y*2;b.push(new At({uniforms:{u_texture:{value:null},u_resolution:{value:new et(1,1)},u_direction:{value:new et(1,0)}},defines:{KERNEL_RADIUS:se,SIGMA:se},vertexShader:fl,fragmentShader:jw,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const w=new Float32Array(ar),S=new At({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:w}},vertexShader:fl,fragmentShader:Jw,depthTest:!1,depthWrite:!1,toneMapped:!1});let D=0;const C=new At({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new yt},u_prevProjectionViewMatrix:{value:new yt},u_aspect:{value:new et(1,1)},u_amount:{value:1}},vertexShader:fl,fragmentShader:Qw,depthTest:!1,depthWrite:!1,toneMapped:!1}),T=new yt,P=new yt,M=new yt,y=new yt,R=new yt,F=new q,N=new hi,z=new q(1,1,1),H=new Bn;let V=!0,W=1,B=!1,oe=0,G=0,_e=1,Se=1,Ae=0,J=.015,te=.6,ce=.3,le=.5,Me=0,Ue=new $e(0),ze=!0,Ze=1,Be=1,tt=1;const k=new et(1,0),We=new et(0,1),Xe=(Y,se)=>{g.material=Y,i.setRenderTarget(se),i.clear(),i.render(_,v)},qe=Y=>{const se=Math.max(1,Y);return 1<<Math.ceil(Math.log(se)/Math.log(2))},Ve=(Y,se)=>{Ze=Math.max(1,Math.floor(Y)),Be=Math.max(1,Math.floor(se));const Q=1;s.setSize(Math.max(1,Math.floor(Ze*Q)),Math.max(1,Math.floor(Be*Q))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const Te=o?3:2;let de=Math.max(1,Math.ceil(Ze/Te)),pe=Math.max(1,Math.ceil(Be/Te));c.setSize(de,pe);for(let me=0;me<ar;me++)h[me].setSize(de,pe),m[me].setSize(de,pe),de=Math.max(1,Math.ceil(de/2)),pe=Math.max(1,Math.ceil(pe/2));p.uniforms.u_texelSize.value.set(1/Ze,1/Be);const Qe=Be/Math.sqrt(Ze*Ze+Be*Be)*2;p.uniforms.u_aspect.value.set(Ze/Be*Qe,Qe),C.uniforms.u_aspect.value.set(Ze/Math.max(Be,1),1)},Ke=({blackFrameInRatio:Y=0,blackTitleRatio:se=0,blackTunnelRatio:Q=0,whiteFrameRatio:Te=0,whiteTunnelWaitRatio:de=0,astronautDropRatio:pe=0,isWhiteTunnelActive:Qe=!1,isBlackTunnelActive:me=!1,isMobile:ye=!1}={})=>{o=!!ye;let Ce=Y*(kt.lerp(0,.15,se)+kt.clamp((Q-.2)/.2,0,1)*.25);if(Q>=.65){const ue=kt.clamp((Q-.65)/.1,0,1);Ce=Ce+(.08-Ce)*ue}if(Qe&&(Ce=0),!Qe&&Y>.55&&Q<.25){const ue=kt.lerp(ye?.24:.42,ye?.12:.18,kt.clamp(se/.5,0,1));Ce=Math.max(Ce,ue*Math.min(1,Y))}if(_e=Q<1?kt.lerp(1,3,kt.clamp(Q/.7,0,1)):1,Qe){const ue=pe>.001&&pe<1,Fe=ye?10:16;oe=pe<1?kt.lerp(ue?1.6:4,ue?1.1:2,kt.clamp(Te/.05,0,1)):kt.lerp(0,Fe,kt.clamp(de/.1,0,1)),G=ue?ye?.28:.35:ye?.4:.5,Se=ue?1:ye?1.1:1.2,tt=ue?.45:ye?.95:1.05,Ce=0;const Ge=ue?.12:.3;Me=kt.lerp(Ge,0,kt.clamp(de/.1,0,1)),Ue.set(pe<1?"#ffffff":"#000000")}else{tt=1;const ue=kt.clamp(se/.25,0,1);oe=kt.lerp(ye?22:30,ye?5:6,ue),Me=0,Ue.set("#000000")}Ae=Ce;const De=!Qe&&Y>.55&&Q<.2;te=De?.85:.6,J=De?.04:ye?.012:.02,ce=De?.15:.3,le=De?.75:.5,Qe||(G=ye?.15:De?.55:.5,Se=De?1.15:1),B=me||Qe},Re=(Y,se=0)=>{F.set(0,0,Y),N.set(0,0,se)},U=()=>{V=!0},E=(Y,se)=>{const Q=i.autoClear;i.autoClear=!0,Xe(Y,se),i.autoClear=Q},$=()=>{if(!ze){i.setRenderTarget(null),i.render(e,t);return}const Y=i.getRenderTarget(),se=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(Ue,Me),i.clear();const Q=e.background;e.background=null;const Te=u==null?void 0:u.mesh,de=!!(Te!=null&&Te.visible);de&&(Te.visible=!1);const pe=d==null?void 0:d.mesh,Qe=!!(pe!=null&&pe.visible);if(Qe&&(pe.visible=!1),i.render(e,t),e.background=Q,d!=null&&d.visible&&d.overlayScene?(pe&&(pe.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(d.overlayScene,v),i.autoClear=!0):Qe&&pe&&(pe.visible=!1),u!=null&&u.active&&u.overlayScene){for(let Fe=0;Fe<ar;Fe++)w[Fe]=0,S.uniforms[`u_blurTexture${Fe}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ue=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,Xe(S,a),S.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Be),Te&&(Te.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else de&&Te&&(Te.visible=!1);let me=s.texture;if(T.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),M.copy(T).invert(),B&&W>0?(V&&(P.copy(T),V=!1),R.compose(F,H.setFromEuler(N),z),R.invert(),y.copy(P).multiply(R),C.uniforms.u_texture.value=s.texture,C.uniforms.u_depthTexture.value=s.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(M),C.uniforms.u_prevProjectionViewMatrix.value.copy(y),C.uniforms.u_amount.value=W,E(C,l),me=l.texture,P.copy(T)):(P.copy(T),V=!0),oe<.05&&Ae<.005){S.uniforms.u_texture.value=me;for(let ue=0;ue<ar;ue++)w[ue]=0,S.uniforms[`u_blurTexture${ue}`].value=me;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),Xe(S,null),i.autoClear=se,i.setRenderTarget(Y);return}p.uniforms.u_texture.value=me,p.uniforms.u_amount.value=Se,p.uniforms.u_haloStrength.value=Ae,p.uniforms.u_haloWidth.value=te,p.uniforms.u_haloRGBShift.value=J,p.uniforms.u_haloMaskInner.value=ce,p.uniforms.u_haloMaskOuter.value=le,E(p,c);const ye=o?3:ar;let Ce=c;for(let ue=0;ue<ye;ue++){const Fe=b[ue];Fe.uniforms.u_texture.value=Ce.texture,Fe.uniforms.u_resolution.value.set(Ce.width,Ce.height),Fe.uniforms.u_direction.value=k,E(Fe,h[ue]),Fe.uniforms.u_texture.value=h[ue].texture,Fe.uniforms.u_resolution.value.set(h[ue].width,h[ue].height),Fe.uniforms.u_direction.value=We,E(Fe,m[ue]),Ce=m[ue]}let De=oe;if(o)De*=tt;else{const ue=qe(Ze/2)>>1,Fe=qe(Be/2)>>1,Ge=Math.max(1,Math.ceil(Math.log(ue*Fe)/Math.log(2)));De=oe*1024/Math.pow(Ge,4)*.85*48*tt}for(let ue=0;ue<ar;ue++){if(ue>=ye){w[ue]=0;continue}const Fe=(ye-ue)/ye;let Ge=De*(Fe+(1.2-Fe*2)*G)/Math.pow(2,ye-ue-1);!o&&ue===0&&(Ge*=.15),!o&&ue===1&&(Ge*=.45),!o&&ue>=3&&(Ge*=1.75),w[ue]=Ge}S.uniforms.u_texture.value=me,S.uniforms.u_saturation.value=_e;for(let ue=0;ue<ar;ue++){const Fe=ue<ye?m[ue].texture:m[ye-1].texture;S.uniforms[`u_blurTexture${ue}`].value=Fe}i.setRenderTarget(null),Xe(S,null),i.autoClear=se,i.setRenderTarget(Y)};return Ve(r.x,r.y),{resize:Ve,sync:Ke,render:$,setEfxOffset:Re,markEfxSync:U,setGlassPass(Y){u=Y||null},setFrameBgPass(Y){d=Y||null},setEfxAmount(Y){W=Y},get clearAlpha(){return Me},setEnabled(Y){ze=!!Y},setScrollVelocity(Y){const se=Math.min(1,Math.abs(Y)*.12);D+=(se-D)*.12,S.uniforms.u_scrollPaint.value=D},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),h.forEach(Y=>Y.dispose()),m.forEach(Y=>Y.dispose()),p.dispose(),S.dispose(),C.dispose(),b.forEach(Y=>Y.dispose()),g.geometry.dispose()}}}function tM(i,e,t){return i+(e-i)*t}const zr=class zr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<zr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&zr.MAX_VERTICES_MASK,a=s+1&zr.MAX_VERTICES_MASK;return tM(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ye(zr,"MAX_VERTICES",512),Ye(zr,"MAX_VERTICES_MASK",zr.MAX_VERTICES-1);let Gl=zr;const zi=new q,ua=class ua{constructor(){this._position=new q,this._rotation=new Bn,this._euler=new hi,this._scale=new q(1,1,1),this._matrix=new yt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Gl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;zi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),zi.multiply(this._positionScale),zi.multiplyScalar(this._positionAmplitude*ua.FBM_NORM),this._position.copy(zi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;zi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),zi.multiply(this._rotationScale),zi.multiplyScalar(this._rotationAmplitude*ua.FBM_NORM),this._euler.set(zi.x,zi.y,zi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ye(ua,"FBM_NORM",1/.75);let la=ua;class sf{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Hd=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],nM=26,go=64,iM=34,Ys=new et(1465,1024),rM=`
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
`,oM=`
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
`,sM=`
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
`,aM=`
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
`,hl=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function lM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function cM(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?iM:nM,[s,a]=await Promise.all([new ki().loadAsync(`${e}assets/textures/tunnels/${r}`),bn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Nn,s.flipY=!1,s.needsUpdate=!0;const l=new xi;i.add(l);const c=new ci(1,1),u=new bo;for(const y in c.attributes)u.setAttribute(y,c.attributes[y]);u.index=c.index;const d=new Float32Array(o),h=new Float32Array(o*4),m=new Float32Array(o*4);for(let y=0,R=0;y<o;y++,R+=4){d[y]=y/o;const F=Hd[y%Hd.length];h[R]=F.x/Ys.x,h[R+1]=F.y/Ys.y,h[R+2]=F.w/Ys.x,h[R+3]=F.h/Ys.y,m[R]=Math.random(),m[R+1]=Math.random(),m[R+2]=Math.random(),m[R+3]=Math.random()}u.setAttribute("instanceId",new En(d,1)),u.setAttribute("instanceUvInfo",new En(h,4)),u.setAttribute("instanceRands",new En(m,4)),u.instanceCount=o;const v=new At({vertexShader:rM,fragmentShader:oM,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:Ys.clone()},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:xa,blendEquation:On,blendSrc:Nl,blendDst:Ol,blendEquationAlpha:On,blendSrcAlpha:Sl,blendDstAlpha:Sl,defines:{COUNT:o}}),g=new Ut(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new bo;for(const y in a.attributes)_.setAttribute(y,a.attributes[y]);a.index&&(_.index=a.index);const p=lM("diamonds-3"),b=new Float32Array(go*3),w=new Float32Array(go*3),S=new Float32Array(go*4),D=new q;for(let y=0,R=0,F=0;y<go;y++,R+=3,F+=4)b[R]=16*(p()*2-1),b[R+1]=16*(p()*2-1),b[R+2]=19-(go-y-1)/(go-1)*8,D.set(p()*2-1,p()*2-1,p()*2-1).normalize(),w[R]=D.x,w[R+1]=D.y,w[R+2]=D.z,S[F]=p(),S[F+1]=p(),S[F+2]=p(),S[F+3]=p();_.setAttribute("a_instancePosition",new En(b,3)),_.setAttribute("a_instanceRotationAxis",new En(w,3)),_.setAttribute("a_instanceRand",new En(S,4)),_.instanceCount=go;const C=[];for(let y=0;y<25;y++)C.push(new Ft(hl[y*4],hl[y*4+1],hl[y*4+2],hl[y*4+3]));const T=new At({vertexShader:sM,fragmentShader:aM,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new $e("#689aff")},u_planes:{value:C},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:xa,blendEquation:On,blendSrc:mi,blendDst:Sl,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi}),P=new Ut(_,T);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,l.add(P),g.renderOrder=15;const M=new $e(0);return{update({whiteTunnelWaitRatio:y=0,aspect:R=1,bg:F="#000000"}={}){const N=fe(y,0,.2,0,1),z=N>0;l.visible=z,g.visible=z,P.visible=z,v.uniforms.u_activeRatio.value=N,T.uniforms.u_activeRatio.value=N,v.uniforms.u_aspect.value=R,T.uniforms.u_aspect.value=R,M.set(F),v.uniforms.u_bgColor.value.copy(M),T.uniforms.u_bgColor.value.copy(M)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),T.dispose(),a.dispose(),i.remove(l)}}}const dl=946,Vd=2,uM=`
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
`,fM=`
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
`;function Gd(i,e,t){const n=new ba(i,e,t,_n,Xn);return n.magFilter=sn,n.minFilter=sn,n.wrapS=zn,n.wrapT=zn,n.needsUpdate=!0,n.colorSpace=Qt,n}async function hM(i,{base:e}){const[t,n]=await Promise.all([bn(`${e}assets/models/tunnels/broken_glass.buf`),bn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const F=new Float32Array(r.array.length);F.set(r.array),t.setAttribute("piece",new Zt(F,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(dl*3),l=new Float32Array(o.length/3*4);for(let F=0,N=0;F<o.length;F+=3,N+=4)l[N]=o[F],l[N+1]=o[F+1],l[N+2]=o[F+2],l[N+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Gd(l,dl,a),d=Gd(c,dl,a),h={u_backgroundTexture:{value:null},u_resolution:{value:new et(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new et(dl,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new At({uniforms:h,vertexShader:uM,fragmentShader:fM,transparent:!0,depthWrite:!1,depthTest:!0,side:Cn,toneMapped:!1}),v=new Ut(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new Kr,_=new xi;_.add(v),g.add(_);let p=0,b=1,w=1,S=0,D=1,C=!1;const T=new q(0,0,1),P=new Bn;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return C},updateFromScroll:({glassBreakRatio:F=0,astronautDropRatio:N=0,frameHeight:z=0,frameRotation:H=0,frameScale:V=1}={})=>{p=fe(F,0,1,0,1,nf),b=fe(N,.75,1,1,0),w=Math.max(1,z||window.innerHeight),S=H||0,D=Math.max(1e-4,V||1),C=p>0&&N<1,_.visible=C,C||(v.visible=!1)},syncToCamera:(F,N=window.innerHeight)=>{if(!C||!F||p<=0)return v.visible=!1,!1;v.position.copy(F.position),v.quaternion.copy(F.quaternion),v.translateZ(-Vd);const z=Math.tan(F.fov*Math.PI/360)*Vd*2,H=w/Math.max(N,1)*z*D;P.setFromAxisAngle(T,-S),v.quaternion.multiply(P),v.scale.setScalar(Math.max(H,1e-4));const V=p*(a-1),W=Math.floor(V),B=Math.min(W+1,a-1);return h.u_frameFrom.value=W,h.u_frameTo.value=B,h.u_frameRatio.value=V-W,h.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(F,N,z)=>{h.u_backgroundTexture.value=F,h.u_resolution.value.set(N,z)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const dM=`
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
`,pM=`
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
`;function Wd(i){return new Promise(e=>{new ki().load(i,t=>{t.colorSpace=Qt,t.flipY=!1,t.minFilter=vt,t.magFilter=vt,t.needsUpdate=!0,e(t)},void 0,()=>e(null))})}async function mM({base:i}){const[e,t]=await Promise.all([Wd(`${i}assets/textures/tunnels/tablet.png`),Wd(`${i}assets/textures/tunnels/desktop.png`)]),n=(()=>{const p=new Uint8Array([0,0,0,255]),b=new ba(p,1,1);return b.needsUpdate=!0,b})(),r={u_bgColor:{value:new $e("#000000")},u_frameOffset:{value:new et},u_frameScale:{value:1},u_frameRotate:{value:0},u_radiusScale:{value:1},u_glowColor:{value:new $e(0,0,0)},u_glowRadius:{value:.11},u_glowUpperBound:{value:.5},u_glowPow:{value:.1},u_glowTint:{value:0},u_domXY:{value:new et},u_domWH:{value:new et(1,1)},u_dom2Offset:{value:new et},u_dom2WH:{value:new et(1,1)},u_dom2Texture:{value:n},u_viewportResolution:{value:new et(1,1)},u_globalRadius:{value:24}},o=new ci(2,2),s=new At({uniforms:r,vertexShader:dM,fragmentShader:pM,depthTest:!1,depthWrite:!1,transparent:!0,blending:Xr,toneMapped:!1}),a=new Ut(o,s);a.frustumCulled=!1,a.renderOrder=-1,a.visible=!1,a.name="goal-frame-bg";const l=new Kr;l.add(a);const c=new $e("#1a2ffb"),u=new $e("#000000"),d=new $e("#f0f1fa"),h=new $e;let m=0,v=0,g=0;return{mesh:a,overlayScene:l,updateFromScroll:({isBlackSide:p=!1,blackFrameInRatio:b=0,whiteFrameOutRatio:w=0,glassBreakRatio:S=0,astronautDropRatio:D=0,blackFrameShowRatio:C=0,frameRect:T=null,innerRect:P=null,viewportW:M=window.innerWidth,viewportH:y=window.innerHeight,globalRadius:R=24}={})=>{var Ze,Be;r.u_viewportResolution.value.set(M,y),r.u_globalRadius.value=R;const F=T,N=P||T;if(!F||F.width<4||F.height<4)return a.visible=!1,null;let z,H,V,W=0,B=0,oe=0,G=0;const _e=r.u_glowColor.value;if(p)z=qt(b,0,1),H=z*.4,V=1,W=fe(z,0,1,.11,-.5),B=fe(z,0,1,.25,2),oe=fe(z,0,1,.06,.3),_e.copy(u).lerp(d,z),r.u_dom2Texture.value=(Ze=e==null?void 0:e.image)!=null&&Ze.width?e:n,r.u_bgColor.value.set("#000000");else{z=1-qt(w,0,1),H=z*-.3,V=0;const tt=S;if(tt<0)G=.8,_e.copy(u);else{W=-.25,B=fe(tt,0,.15,0,.45),B=fe(tt,.15,.3,B,1),oe=fe(tt,0,.1,.35,.85),oe=fe(tt,.1,1,oe,.35),G=.28;let k=fe(tt,0,.1,1,0);k=fe(tt,.1,.8,k,.9),_e.copy(c).lerp(h.copy(u),k)}r.u_dom2Texture.value=(Be=t==null?void 0:t.image)!=null&&Be.width?t:n,r.u_bgColor.value.set("#000000")}const Se=y*.2*(1-qt(C,0,1)),Ae=Math.hypot(M,y),J=kt.lerp(1,Ae/Math.min(F.width,F.height),z),te=D,ce=F.top+Se,le=ce+F.height,Me=F.bottom>0&&F.top<y&&F.right>0&&F.left<M&&le>0&&ce<y;if(a.visible=z<.999&&te<1&&Me,!a.visible)return null;m=F.left,v=ce,g=0,r.u_domWH.value.set(Math.max(1,Math.ceil(F.width)),Math.max(1,Math.ceil(F.height))),r.u_domXY.value.set(m,v-g),N?(r.u_dom2Offset.value.set(N.left+N.width*.5-F.left-F.width*.5,N.top+N.height*.5-(F.top+Se)-F.height*.5),r.u_dom2WH.value.set(Math.max(1,N.width),Math.max(1,N.height))):(r.u_dom2Offset.value.set(0,0),r.u_dom2WH.value.set(F.width,F.height));const Ue=te<1?M*.5-F.left-F.width*.5:0,ze=-(F.top+Se+F.height*.5-y*.5);return r.u_frameOffset.value.set(Ue*z,ze*z),r.u_frameScale.value=J,r.u_frameRotate.value=H,r.u_radiusScale.value=V,r.u_glowRadius.value=W,r.u_glowUpperBound.value=B,r.u_glowPow.value=oe,r.u_glowTint.value=G,{frameScale:J,frameRotation:H,cameraViewportOffsetX:Ue*(1-z),cameraViewportOffsetY:ze*(1-z)}},resize(p,b){r.u_viewportResolution.value.set(p,b)},get visible(){return a.visible},dispose(){o.dispose(),s.dispose(),e==null||e.dispose(),t==null||t.dispose(),n.dispose()}}}const $s=53,pl=16,ml=20,Xd=["helmet","helmet_glass","glove_shoes","wearpack"],Zs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Yc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function qd(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Yd(i,e){const[t,n]=await Promise.all([qd(i),qd(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let h=0;h<u.length;h+=4)u[h]=c[h],u[h+1]=c[h+1],u[h+2]=c[h+2],u[h+3]=l[h];const d=new ba(u,r,o,_n,Ri);return d.colorSpace=Qt,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=Wi,d.magFilter=vt,d.anisotropy=8,d.wrapS=zn,d.wrapT=zn,d.needsUpdate=!0,d}function $d(i,e,t){const n=new ba(i,e,t,_n,Xn);return n.magFilter=sn,n.minFilter=sn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function $c(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new En(t,3)}const _l=`
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
`;async function _M(i,e,t){var eh,th,nh,ih;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,h,m,v,g,_,p,b,w,S,...D]=await Promise.all([bn(`${r}assets/models/tunnels/astronaut_animations.buf`),bn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),bn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new ki().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new ki().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new ki().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),bn(`${r}assets/models/tunnels/tunnel_block_base.buf`),bn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),bn(`${r}assets/models/tunnels/grid_base_ld.buf`),bn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?bn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?bn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new ki().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),bn(`${r}assets/models/tunnels/earth_card.buf`),new ki().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...Xd.map(xe=>bn(`${r}assets/models/tunnels/astronaut_${xe}.buf`))]),C=new Kr;C.background=new $e(0);const T=new q(0,0,25),P=new q(0,0,24),M=45,y=new Gn(M,1,1,200);y.position.copy(T),y.lookAt(P);let R;try{R=new Jl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(xe){throw console.error("Goal WebGL unavailable",xe),xe}R.setClearColor(0,1),R.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),R.outputColorSpace=Zi,R.toneMapping=Yi,R.autoClear=!0,c.colorSpace=Qt,c.generateMipmaps=!1,c.minFilter=vt,c.magFilter=vt,u.colorSpace=Qt,u.generateMipmaps=!1,u.minFilter=vt,u.magFilter=vt,d.colorSpace=Qt,d.wrapS=d.wrapT=ps,d.generateMipmaps=!1,d.minFilter=vt,d.magFilter=vt;const F=s.attributes.position.array,N=s.attributes.orient.array,z=F.length/3,H=z/$s,V=Math.ceil(Math.sqrt(z)),W=Math.ceil(z/V),B=V*W,oe=new Float32Array(B*4),G=new Float32Array(B*4);for(let xe=0,ke=0,Le=0;xe<z;xe++,ke+=3,Le+=4)oe[Le]=F[ke],oe[Le+1]=F[ke+1],oe[Le+2]=F[ke+2],oe[Le+3]=1,G[Le]=N[Le],G[Le+1]=N[Le+1],G[Le+2]=N[Le+2],G[Le+3]=N[Le+3];const _e=$d(oe,V,W),Se=$d(G,V,W),Ae=new En(new Float32Array([0,0,18]),3);Ae.setUsage(Cr);const J=new En(new Float32Array([0,0,0,1]),4);J.setUsage(Cr);const te=new En(new Float32Array([0,1,0]),3);te.setUsage(Cr);const ce=new En(new Float32Array([90,91,0]),3);ce.setUsage(Cr);const le=()=>{const xe=new xr(1,1,{minFilter:vt,magFilter:vt,format:_n,generateMipmaps:!1});return xe.texture.wrapS=xe.texture.wrapT=zl,xe},Me=le(),Ue=le(),ze=le();let Ze=Me,Be=Ue;const tt=`
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
}`,k=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,We=new At({uniforms:{u_texture:{value:null},u_direction:{value:new et(1,0)},u_resolution:{value:new et(1,1)}},vertexShader:k,fragmentShader:tt,depthTest:!1,depthWrite:!1,toneMapped:!1}),Xe=new Kl(-1,1,1,-1,0,1),qe=new Kr,Ve=new Ut(new ci(2,2),We);qe.add(Ve);const Ke=(xe,ke)=>{const Le=Math.max(1,xe.width),je=Math.max(1,xe.height);We.uniforms.u_resolution.value.set(Le,je),We.uniforms.u_texture.value=xe.texture,We.uniforms.u_direction.value.set(ke,0),R.setRenderTarget(ze),R.clear(),R.render(qe,Xe),We.uniforms.u_texture.value=ze.texture,We.uniforms.u_direction.value.set(0,ke),R.setRenderTarget(xe),R.clear(),R.render(qe,Xe),R.setRenderTarget(null)},Re={u_animationPositionTexture:{value:_e},u_animationOrientTexture:{value:Se},u_animationTextureSize:{value:new et(V,W)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new $e("#566d80")},u_bgColor:{value:new $e("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new $e(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new $e("#aaaafb")},u_cardPosition:{value:new q}},U={u_blackTunnelTexture:{value:Ze.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},E={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async xe=>{const[ke,Le]=await Promise.all([Yd(`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_base.webp`),new ki().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${xe}_nor.webp`)]);Le.colorSpace=Qt,Le.flipY=!1,Le.generateMipmaps=!0,Le.minFilter=Wi,Le.magFilter=vt,Le.anisotropy=8,E[xe]={armb:ke,nor:Le}}));const $=((th=(eh=R.capabilities).getMaxAnisotropy)==null?void 0:th.call(eh))||8;for(const xe of Object.keys(E)){const{armb:ke,nor:Le}=E[xe];ke&&(ke.anisotropy=Math.min(8,$),ke.needsUpdate=!0),Le&&(Le.anisotropy=Math.min(8,$),Le.needsUpdate=!0)}E.helmet_glass=E.helmet;const Y=new xi;C.add(Y);const se=[],Q=4,Te=new En(new Float32Array(Q*3),3);Te.setUsage(Cr);const de=new En(new Float32Array(Q*4),4);de.setUsage(Cr);const pe=new En(new Float32Array(Q*3),3);pe.setUsage(Cr);const Qe=new En(new Float32Array(Q*3),3);Qe.setUsage(Cr);for(let xe=0;xe<Q;xe++)de.setXYZW(xe,0,0,0,1),pe.setXYZ(xe,0,1,0),Qe.setXYZ(xe,90,91,0);const me=[];let ye=0;const Ce={value:0};Xd.forEach((xe,ke)=>{const Le=D[ke],je=new bo;for(const fn in Le.attributes)je.setAttribute(fn,Le.attributes[fn]);Le.index&&je.setIndex(Le.index),je.instanceCount=1,je.setAttribute("instancePos",Ae),je.setAttribute("instanceOrient",J),je.setAttribute("instanceAnimationFrameFromToBlend1",te),je.setAttribute("instanceAnimationFrameFromToBlend2",ce);const rt=xe==="helmet_glass"||xe==="card"?"helmet":xe,_t=xe==="helmet_glass",lt={...Re,u_armbTexture:{value:E[rt].armb},u_norTexture:{value:E[rt].nor}},Et={...Re,...U,u_armbTexture:{value:E[rt].armb},u_norTexture:{value:E[rt].nor}},Vt=new At({uniforms:lt,vertexShader:_l,fragmentShader:$w,transparent:!0,blending:Ai,side:Cn,defines:{BONE_COUNT:$s,IS_WHITE:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),un=new At({uniforms:Et,vertexShader:_l,fragmentShader:kd,transparent:!0,blending:Ai,side:Cn,defines:{BONE_COUNT:$s,IS_BLACK:!0,..._t?{IS_HELMET_GLASS:!0}:{}}}),Hn=new Ut(je,Vt);if(Hn.frustumCulled=!1,Hn.userData.whiteMat=Vt,Hn.userData.blackMat=un,Y.add(Hn),se.push(Hn),!_t){const fn=new bo;for(const yi in Le.attributes)fn.setAttribute(yi,Le.attributes[yi]);Le.index&&fn.setIndex(Le.index),fn.instanceCount=Q,fn.setAttribute("instancePos",Te),fn.setAttribute("instanceOrient",de),fn.setAttribute("instanceAnimationFrameFromToBlend1",pe),fn.setAttribute("instanceAnimationFrameFromToBlend2",Qe);const pn=new At({uniforms:{...Et,u_armbTexture:{value:E[rt].armb},u_norTexture:{value:E[rt].nor},u_alpha:Ce},vertexShader:_l,fragmentShader:kd,transparent:!0,depthWrite:!1,depthTest:!1,blending:xa,blendEquation:On,blendSrc:mi,blendDst:mi,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi,side:Cn,defines:{BONE_COUNT:$s,IS_BLACK:!0,IS_CLONE:!0}}),on=new Ut(fn,pn);on.frustumCulled=!1,on.renderOrder=1e3,on.visible=!1,Y.add(on),me.push(on)}});const De=new et(5,23),ue=new Gl;let Fe=0,Ge=!1;const it=document.createElement("canvas");it.width=it.height=11;{const xe=it.getContext("2d");xe.fillStyle="#000",xe.fillRect(0,0,11,11),xe.fillStyle="#f00",xe.fillRect(1,1,3,9),xe.fillStyle="#0f0",xe.fillRect(4,1,3,9),xe.fillStyle="#00f",xe.fillRect(7,1,3,9)}const X=new iw(it);X.needsUpdate=!0,X.minFilter=vt,X.magFilter=vt;const ne=await new ki().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ne.minFilter=sn,ne.magFilter=sn,ne.colorSpace=Qt,ne.flipY=!1;const re=new ci(.2,.15).translate(0,1.68,.1);re.setAttribute("boneIndices",new Zt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),re.setAttribute("boneWeights",new Zt(new Float32Array([1,0,1,0,1,0,1,0]),2)),re.setAttribute("tangent",new Zt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),re.setAttribute("ao",new Zt(new Float32Array([1,1,1,1]),1));const he=new bo;for(const xe in re.attributes)he.setAttribute(xe,re.attributes[xe]);re.index&&he.setIndex(re.index),he.instanceCount=1,he.setAttribute("instancePos",Ae),he.setAttribute("instanceOrient",J),he.setAttribute("instanceAnimationFrameFromToBlend1",te),he.setAttribute("instanceAnimationFrameFromToBlend2",ce);const Ne=new At({uniforms:{...Re,u_cardLedTexture:{value:X},u_cardTexture:{value:ne},u_cardColor:{value:new $e("#ddddff")},u_cardUvOffset:{value:new et(0,0)},u_cardTextureSize:{value:De},u_cardOpacity:{value:0}},vertexShader:_l,fragmentShader:Zw,transparent:!0,depthTest:!1,depthWrite:!1,side:Cn,blending:xa,blendEquation:On,blendSrc:mi,blendDst:mi,blendEquationAlpha:On,blendSrcAlpha:mi,blendDstAlpha:mi,defines:{BONE_COUNT:$s}}),Ie=new Ut(he,Ne);Ie.frustumCulled=!1,Ie.renderOrder=100,Ie.visible=!1,Y.add(Ie);const ot=new xi;C.add(ot);const Tt=new la;Tt.positionAmplitude=2,Tt.positionFrequency=1,Tt._enableRotationNoise=!1;const $t=Tt.position;let ht=0,Lt=1,Ln=typeof window<"u"?window.scrollY:0,Ci=1;const Jr=(xe,ke)=>{const Le=new bo;for(const lt in xe.attributes)Le.setAttribute(lt,xe.attributes[lt]);xe.index&&Le.setIndex(xe.index);const je=new Float32Array(pl);for(let lt=0;lt<pl;lt++)je[lt]=lt;Le.setAttribute("a_instanceId",new En(je,1)),Le.instanceCount=pl;const rt=new At({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:$t},u_time:{value:0}},vertexShader:qw,fragmentShader:Yw,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:pl,...ke?{IS_WALL:!0}:{}}}),_t=new Ut(Le,rt);return _t.frustumCulled=!1,ot.add(_t),rt},kn=Jr(h,!1),Pi=Jr(m,!0),Sr=await cM(C,{base:r,isMobile:n,sharedTime:Re.u_time}),Qr=new At({uniforms:{u_color:{value:new $e(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ai}),Jn=new Ut(new ci(200,200),Qr);Jn.position.z=-80,Jn.renderOrder=-10,C.add(Jn),S.colorSpace=Qt,S.generateMipmaps=!1,S.minFilter=vt,S.magFilter=vt;const eo={u_earthTexture:{value:S},u_bgColor:{value:new $e(0)},u_atmosphereColor:{value:new $e("#4169E1")}},wr=`
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
}`,Ki=new xi,Is=new At({uniforms:eo,vertexShader:wr,fragmentShader:to,depthWrite:!0,depthTest:!0}),xn=new Ut(w,Is);xn.frustumCulled=!1,xn.renderOrder=-1,Ki.add(xn),C.add(Ki);const Dn=new xi;C.add(Dn);const f=await Yd(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);f.wrapS=f.wrapT=ps,b.colorSpace=Qt,b.flipY=!1,b.wrapS=b.wrapT=ps;const x={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Ze.texture},u_greebleArmbTexture:{value:f},u_greebleNormalTexture:{value:b},u_resolution:{value:new et(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new $e(Zs[0])},u_color2:{value:new $e(Yc[0])}},A=(xe,ke,Le)=>{const je=new bo;for(const Et in xe.attributes)je.setAttribute(Et,xe.attributes[Et]);xe.index&&je.setIndex(xe.index);const rt=xe.attributes.position.count;je.getAttribute("ao")||je.setAttribute("ao",new Zt(new Float32Array(rt).fill(1),1)),je.getAttribute("areaRatio")||je.setAttribute("areaRatio",new Zt(new Float32Array(rt),1)),je.getAttribute("height")||je.setAttribute("height",new Zt(new Float32Array(rt).fill(1),1)),je.getAttribute("cluster")||je.setAttribute("cluster",new Zt(new Float32Array(rt),1)),je.setAttribute("instancePos",$c(ke.attributes.position)),je.setAttribute("instanceGridIds",$c(ke.attributes.gridIds)),je.setAttribute("instanceAxis",$c(ke.attributes.rotAxis)),je.instanceCount=ke.attributes.position.count;const _t=new At({uniforms:x,vertexShader:Ww,fragmentShader:Xw,side:Cn,transparent:!1,depthWrite:!0,blending:Xr,defines:{GRID_SIZE:ml,...Le?{IS_HD:!0}:{}}}),lt=new Ut(je,_t);return lt.frustumCulled=!1,lt.renderOrder=Le?2:1,Dn.add(lt),lt};A(v,g,!1),o&&_&&p&&A(_,p,!0);let L=0,I=0,O=0,Z=M,ie=0,j=-80,ee=0;const K=new la;K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0;const ae=new sf(new q,1,.65,1.3),ge=new sf(new q,1,.85,1.1),we=Array.from({length:Q},()=>{const xe=new la;return xe.positionFrequency=.2,xe.rotationFrequency=.6,xe.positionAmplitude=12,xe.rotationAmplitude=10,xe}),Pe=Float32Array.from({length:Q+1},(xe,ke)=>ke===0?0:Math.random()*2),Ee=new Float32Array(Q),be=new Float32Array(Q),ve=new q,ut=new Bn,Je=new yt,Ct=new yt,st=new q,nt=new q,pt=new Bn,ct=new hi,St=new q(1,1,1),ft=new $e,at=new $e,jt=new q,yn=new q;let Sn=0,no=0,Ql=0,ec=0,Fo=.08;const kf=.1;let Ra=!1,Us=0,Ca=0,Hf=0,Pa=0,La=0,Vf=0,Gf=0;window.addEventListener("pointermove",xe=>{Sn=xe.clientX/Math.max(window.innerWidth,1)*2-1,no=xe.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ra=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ra=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ra=!1},{passive:!0});const tc=()=>{y.near=1,y.far=200,y.position.copy(T),y.up.set(0,1,0),y.lookAt(P),y.fov=Z,jt.set(0,0,-1).applyQuaternion(y.quaternion);let xe=yn.copy(P).sub(y.position).dot(jt);const ke=y.fov,Le=ke+O,je=Math.max(1,Math.min(170,Le));let rt=xe*Math.tan(ke/360*Math.PI/2)/Math.tan(je/360*Math.PI/2)-xe;Number.isFinite(rt)||(rt=0),y.translateZ(rt),y.fov=ke,xe+=rt;const _t=Math.max(1,R.domElement.width||window.innerWidth),lt=Math.max(1,R.domElement.height||window.innerHeight);Math.abs(Pa)>.25||Math.abs(La)>.25?y.setViewOffset(_t,lt,Pa,La,_t,lt):y.clearViewOffset(),y.translateZ(xe*-1);const Et=n?Fo*.35:Fo,Vt=Math.max(-1,Math.min(1,no))*Et,un=Math.max(-1,Math.min(1,-Sn))*Et;Ql+=(Vt-Ql)*kf,ec+=(un-ec)*kf,ct.set(Ql,ec,0),pt.setFromEuler(ct),y.quaternion.multiply(pt),y.translateZ(xe),y.updateProjectionMatrix()},e0=xe=>{K.update(xe),ae.update(xe,K.position),st.copy(K.euler),ge.update(xe,st),ct.set(ge.value.x,ge.value.y,ge.value.z),pt.setFromEuler(ct),Ct.compose(ae.value,pt,St),Je.compose(ve,ut,St),Je.multiply(Ct),Je.decompose(st,pt,nt);{const ke=Math.max(1,R.domElement.width||window.innerWidth),Le=Math.max(1,R.domElement.height||window.innerHeight),je=Math.max(.5,y.position.distanceTo(P)),rt=2*Math.tan((y.fov||45)*Math.PI/360)*je,_t=rt*(ke/Le),lt=.55;st.x+=Vf/ke*_t*lt,st.y+=Gf/Le*rt*lt}if(Ae.setXYZ(0,st.x,st.y,st.z),J.setXYZW(0,pt.x,pt.y,pt.z,pt.w),Ae.needsUpdate=!0,J.needsUpdate=!0,ic=1+Math.min(3.5,ae.valueVel.length()*.2+ge.valueVel.length()*.2),ye>.01&&!zt&&!Li){for(let ke=0;ke<Q;ke++){const Le=we[ke];Le.positionFrequency=.2,Le.rotationFrequency=.6,Le.positionAmplitude=12,Le.rotationAmplitude=10,Le.update(xe),Je.compose(ve,ut,St),Je.multiply(Le.matrix),Je.decompose(st,pt,nt);const je=ke/Math.max(Q-1,1),rt=fe(ye,je*.3,.7+je*.3,1,0,Bw);nt.set(Ae.getX(0),Ae.getY(0),Ae.getZ(0)),st.lerp(nt,rt),Te.setXYZ(ke,st.x,st.y,st.z),de.setXYZW(ke,pt.x,pt.y,pt.z,pt.w)}Te.needsUpdate=!0,de.needsUpdate=!0}},He=document.getElementById("home-goal-tunnel-sticky")||((nh=i.closest)==null?void 0:nh.call(i,"#home-goal-tunnel-sticky"))||((ih=e==null?void 0:e.querySelector)==null?void 0:ih.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,In=zf(e);let cn=0,Fs=0,No=0,Rt=0,Qn=0,nc=0,io=0,Da=0,ji=0,Ot=0,Wf=0,Li=!0,en=!1,zt=!1,Oo=0,Ji=0,ic=1,rc=0,Xf=performance.now(),Ns=!1,qf=!1;const rn=eM(R,C,y,{isMobile:n});let Di=null,Mr=null;try{Di=await hM(C,{base:r}),rn.setGlassPass(Di)}catch(xe){console.warn("Broken glass failed to load",xe)}try{Mr=await mM({base:r}),rn.setFrameBgPass(Mr)}catch(xe){console.warn("FrameBg failed to load",xe)}let Yf=0,$f=0;const zo=()=>{var Vt;const xe=(Vt=He==null?void 0:He.querySelector)==null?void 0:Vt.call(He,"[data-goal-screen-clip]"),ke=He==null?void 0:He.classList.contains("is-windowed"),Le=He==null?void 0:He.classList.contains("is-pinned"),je=ke&&xe?xe:He;let rt=(je==null?void 0:je.clientWidth)||window.innerWidth,_t=(je==null?void 0:je.clientHeight)||window.innerHeight;if((Le||!ke)&&n&&window.visualViewport&&(rt=Math.round(window.visualViewport.width)||rt,_t=Math.round(window.visualViewport.height)||_t),rt=Math.max(1,rt),_t=Math.max(1,_t),rt===Yf&&_t===$f)return;Yf=rt,$f=_t,y.aspect=rt/_t,tc(),R.setSize(rt,_t,!1),rn.resize(rt,_t),x.u_resolution.value.set(rt,_t);const lt=Math.max(1,Math.floor(rt*.25)),Et=Math.max(1,Math.floor(_t*.25));(Me.width!==lt||Me.height!==Et)&&(Me.setSize(lt,Et),Ue.setSize(lt,Et),ze.setSize(lt,Et))};zo(),window.addEventListener("resize",zo);const Zf=(xe,ke,Le=100)=>{const je=xe.attributes.position.array,rt=xe.attributes.orient.array,_t=Math.min(Math.floor(ke),Le-1),lt=Math.min(Math.ceil(ke),Le-1),Et=ke-Math.floor(ke),Vt=new q().fromArray(je,_t*3).lerp(new q().fromArray(je,lt*3),Et),un=new Bn().fromArray(rt,_t*4).slerp(new Bn().fromArray(rt,lt*4),Et);return{p:Vt,q:un}},Ia=()=>{var ro,Qi,Ui,ko,Na,rh,oh;if(!e)return;const xe=window.innerHeight,ke=window.scrollY||0;ke!==Ln&&(Ci=ke>Ln?1:-1,Ln=ke),Qn=In.range("blackFrameIn").ratio;const Le=In.range("blackFrameShow").ratio;No=In.range("blackTitle").ratio,Rt=In.range("blackTunnel").ratio,He!=null&&He.classList.contains("is-windowed")&&zo(),io=In.range("whiteTunnel").ratio,cn=In.between("whiteTunnel","whiteFrameOut").ratio,Da=In.range("whiteFrameOut").ratio,nc=In.range("whiteFrameBreak").ratio,Wf=In.between("whiteTunnel","whiteFrameBreak").ratio,Ot=In.between("whiteFrameBreak","astronautDrop").ratio,ji=((ro=In.range("astronautWait"))==null?void 0:ro.ratio)??0,Hf=In.between("whiteFrameBreak","astronautWait").ratio;{const Gt=In.range("astronautDrop"),Tr=window.innerHeight||1,Ho=Math.max(0,Gt.pixel||0),Bs=Math.min(Math.max(1,Gt.pixelCount||Ho),Tr*(n?.32:.42)),Fi=Math.min(Ho,Bs),Ni=window.innerWidth||1,Er=((Qi=He==null?void 0:He.querySelector)==null?void 0:Qi.call(He,"[data-goal-screen-clip]"))||He||e.querySelector("#home-goal-image-out"),Vo=(Ui=Er==null?void 0:Er.getBoundingClientRect)==null?void 0:Ui.call(Er),sc=Vo?Vo.left+Vo.width*.5-Ni*.5:0;Vf=fe(Ot,0,1,0,sc,of),Gf=-Fi*fe(Ot,.15,.85,0,1),Pa=0,La=0}Li=No<1,en=Rt<1&&!Li,zt=cn<=1&&!en&&!Li,Fs=zt?Oi(0,.15,Wf):1,rn.sync({blackFrameInRatio:Qn,blackTitleRatio:No,blackTunnelRatio:Rt,whiteFrameRatio:io,whiteTunnelWaitRatio:ji,astronautDropRatio:Ot,isWhiteTunnelActive:zt,isBlackTunnelActive:en,isMobile:n});{const Gt=e.querySelector("#home-goal-image-out-inner"),Tr=e.querySelector("#home-goal-image-out"),Ho=e.querySelector("#home-goal-image-in"),Bs=e.querySelector("#home-goal-image-in-inner"),Fi=Tr==null?void 0:Tr.getBoundingClientRect(),Ni=Gt==null?void 0:Gt.getBoundingClientRect(),Er=Ho==null?void 0:Ho.getBoundingClientRect(),Vo=Bs==null?void 0:Bs.getBoundingClientRect(),sc=In.range("blackFrameShow").ratio,oo=window.innerWidth||1,Go=window.innerHeight||1;let so=Fi&&Fi.height>8?Fi.height:Ni&&Ni.height>8?Ni.height:0;so<8&&(so=((Ni==null?void 0:Ni.width)||(Gt==null?void 0:Gt.clientWidth)||(He==null?void 0:He.clientWidth)||oo*.7)*(1537/2e3));const sh=en||Li,r0=He==null?void 0:He.classList.contains("is-pinned"),o0=He==null?void 0:He.classList.contains("is-windowed"),ac=(ko=He==null?void 0:He.getBoundingClientRect)==null?void 0:ko.call(He),ks=(Na=He==null?void 0:He.querySelector)==null?void 0:Na.call(He,"[data-goal-screen-clip]"),Oa=(rh=ks==null?void 0:ks.getBoundingClientRect)==null?void 0:rh.call(ks),Ar=bt=>!!bt&&bt.width>8&&bt.height>8&&bt.bottom>8&&bt.top<Go-8&&bt.right>8&&bt.left<oo-8,ah=2e3/1537,lh=(bt,ao)=>{const Hs=Math.max(8,ao),Ba=Hs*ah,fh=(bt==null?void 0:bt.width)||oo,hh=(bt==null?void 0:bt.height)||Go,dh=(bt==null?void 0:bt.left)||0,ph=(bt==null?void 0:bt.top)||0;return{left:dh+(fh-Ba)*.5,top:ph+(hh-Hs)*.5,width:Ba,height:Hs,right:dh+(fh-Ba)*.5+Ba,bottom:ph+(hh-Hs)*.5+Hs}};let mn,za;if(sh)mn=Ar(Er)?Er:Ar(Oa)?Oa:Ar(ac)?ac:null,za=Ar(Vo)?Vo:mn;else if(r0||o0){const bt=Ar(Oa)?Oa:ac,ao=Ar(Fi)&&Fi.height>8?Fi.height:Math.min(((bt==null?void 0:bt.height)||Go)*.72,((bt==null?void 0:bt.width)||oo)*.92/ah);mn=lh(bt,ao),za={left:mn.left+mn.width*.022,top:mn.top+mn.height*.028,width:mn.width*.957,height:mn.height*.702},so=mn.height}else mn=Ar(Fi)?Fi:lh({left:0,top:0,width:oo,height:Go},so),za=Ar(Ni)?Ni:mn;let ch=20;try{const bt=getComputedStyle(document.documentElement),ao=parseFloat(bt.getPropertyValue("--global-border-radius")||"");Number.isFinite(ao)&&ao>0&&(ch=ao)}catch{}const er=Mr==null?void 0:Mr.updateFromScroll({isBlackSide:sh,blackFrameInRatio:Qn,whiteFrameOutRatio:Da,glassBreakRatio:Ot,astronautDropRatio:Ot,blackFrameShowRatio:sc,frameRect:mn,innerRect:za,viewportW:oo,viewportH:Go,globalRadius:ch});er&&(Pa=er.cameraViewportOffsetX||0,La=er.cameraViewportOffsetY||0);const uh=1-qt(Da,0,1),s0=Math.hypot(oo,Go),a0=Math.min((mn==null?void 0:mn.width)>8?mn.width:so*(2e3/1537),so),l0=(er==null?void 0:er.frameScale)??kt.lerp(1,s0/Math.max(a0,1),uh),c0=(er==null?void 0:er.frameRotation)??uh*-.3;Di&&Di.updateFromScroll({glassBreakRatio:Ot,astronautDropRatio:Ot,frameHeight:so,frameRotation:c0,frameScale:l0})}Re.u_whiteTunnelRatio.value=cn,Re.u_showRatio.value=Fs,Re.u_frameOutRatio.value=nc,kn.uniforms.u_ratio.value=cn,Pi.uniforms.u_ratio.value=cn,kn.uniforms.u_ratioInverse.value=1-cn,Pi.uniforms.u_ratioInverse.value=1-cn,Re.u_ambientColor.value.set(zt&&Ot<1?"#6a7f94":"#566d80");const je=new $e("#ffffff");en||Li?je.set("#000000"):zt&&je.set(Ot<1?"#ffffff":"#000000"),Qr.uniforms.u_color.value.copy(je),C.background=null,R.setClearColor(je,rn.clearAlpha),Re.u_bgColor.value.copy(je),He&&!He.classList.contains("is-windowed")&&(He.style.background=Ot>=1&&!n?"transparent":je.getStyle());const rt=He==null?void 0:He.classList.contains("is-windowed");!(He==null?void 0:He.classList.contains("is-pinned"))||rt?(document.documentElement.style.background="",document.body.style.background=""):zt&&Ot>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):zt?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):en||Li?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),ot.visible=zt&&Ot<1,Dn.visible=en,Jn.visible=!(zt&&Ot<1),eo.u_bgColor.value.copy(je);const lt=kt.clamp(Le,0,1),Et=kt.clamp(Qn,0,1);xn.position.y=-(10*(1-lt)+2.5+30*Et),xn.scale.setScalar(fe(Et,0,.5,40,70)),Ki.rotation.x=fe(Et,0,.5,0,-1),xn.visible=Et<1&&!zt&&!en;const Vt=document.getElementById("header");Vt&&((He==null?void 0:He.classList.contains("is-pinned"))?zt||ji>0?Vt.style.color="#000000":Vt.style.color="#ffffff":Vt.style.color="");const un=e.dataset.goalPhase==="black-tunnel",Hn=e.dataset.goalPhase==="white";(en&&!un||zt&&!Hn)&&rn.markEfxSync();const fn=zt;for(const Gt of se){const Tr=fn?Gt.userData.whiteMat:Gt.userData.blackMat;Gt.material!==Tr&&(Gt.material=Tr)}ye=en?Oi(.2,.4,Rt):0,Ce.value=ye;for(const Gt of me)Gt.visible=!zt&&ye>.01;let pn;if(zt){const Gt=cn<1?fe(cn,0,1,0,79):fe(Ot,0,1,79,99);pn=Zf(l,Gt,100),pn.p.y-=(n?0:.4)*Gw(Ot)}else pn=Zf(a,100*rf(Qn),100);if(ve.copy(pn.p),ut.copy(pn.q),K.positionFrequency=.2,K.rotationFrequency=.15,K.positionAmplitude=0,K.rotationAmplitude=0,en){const Gt=Rt;K.positionFrequency=.2+.5*Gt,K.rotationFrequency=.15,K.positionAmplitude=5*Gt,K.rotationAmplitude=60*Gt}else zt&&(K.positionFrequency=fe(io,0,.45,.5,.2),K.rotationFrequency=fe(io,0,.45,.4,.15),K.positionAmplitude=fe(io,0,.75,5,0),K.rotationAmplitude=fe(io,0,.75,15,0),Ot>=1&&(K.positionFrequency=.35,K.rotationFrequency=.28,K.positionAmplitude=.55,K.rotationAmplitude=8));Y.visible=Fs>.02;const on=window.innerHeight||1,yi=(oh=He==null?void 0:He.querySelector)==null?void 0:oh.call(He,"[data-goal-screen-clip]"),Bo=Math.max(1,ji>.001||Ot>=1?on:rt&&(yi==null?void 0:yi.clientHeight)||(He==null?void 0:He.clientHeight)||on),br=Qn<1?Qn:ji>.001||Ot>=1?1:1-io,Os=kt.lerp(Bo,on,br),zs=T.distanceTo(P),Ua=M/180*Math.PI,Fa=Math.tan(Ua/2)*zs*2*(on/Math.max(Os,1));Z=Math.atan(Fa/2/zs)*2/Math.PI*180,zt?O=fe(cn,0,1,60,0):en?(O=Math.sin(Rt*10+ht)*(n?4.5:7.5)*Oi(0,.2,Rt),Dn.position.z=-80*wo(.2,0,Rt)):(O=0,Dn.position.z=-80),Fo=.08*Oi(.5,1,No)+.02,cn>0&&(Fo*=fe(In.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Fo=fe(ji,0,.1,Fo,.05),Ca=(1-Us)*Ci*2.5*fe(Qn,0,.5,0,1)*fe(ji,0,.25,1,0),tc(),U.u_frameIn.value=Qn,U.u_sunFactor.value=en?1-Oi(.1,.2,Rt):1,U.u_blackTunnelRatio.value=en?Oi(.1,.3,Rt):0,U.u_endRatio.value=en?Oi(.65,.9,Rt):0,U.u_offsetZ.value=x.u_offsetZ.value;const Bt=fe(Ot,1,0,.15,.55)*(nc>0?1:0);Re.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Bt);const Ii=He.getBoundingClientRect();Ns=Ii.bottom>0&&Ii.top<xe,Ns&&!qf&&Li&&(Oo=0,Ji=0),qf=Ns,e.dataset.goalPhase=zt?"white":en?"black-tunnel":Qn<.98||He!=null&&He.classList.contains("is-windowed")?"window":"title"},t0=xe=>{if(!en){x.u_showRatio.value=0,rn.setEfxOffset(0,0);return}x.u_showRatio.value=Nw(wo(0,.1,Rt));const ke=x.u_outBloomFromToStrength.value;ke.z=fe(Rt,.65,.75,0,.2),ke.z=fe(Rt,.75,.85,ke.z,.15),ke.z=fe(Rt,.85,1,ke.z,.15),ke.x=fe(Rt,.75,.85,20,60),ke.x=fe(Rt,.9,1,ke.x,30);const Le=fe(Rt,.6,1,0,1,zw);x.u_blackTunnelTransformRatio.value=Le;const je=Ci*xe;L+=je*wo(.1,.3,Rt)*fe(Le,0,.25,1,.5),I+=je*fe(Le,0,.25,1.5,1);const rt=L,_t=Math.floor(rt),lt=rt-_t,Et=(_t+of(lt))*ml+I*ml+Rt*ml*10,Vt=-80*wo(.2,0,Rt);let un=Vt-j,Hn=Et-ie;(Math.abs(Hn)>8||Math.abs(un)>20)&&(Hn=0,un=0),ee=un+Hn,j=Vt,ie=Et,Dn.position.z=Vt,x.u_offsetZ.value=Et,U.u_offsetZ.value=Et,x.u_time.value=ht;const fn=Zs.length*fe(Rt,.2,1,0,1),pn=Math.floor(fn),on=Math.min(Math.ceil(fn),Zs.length-1),Bo=fn-pn>.5?1:0;ft.set(Zs[pn]),at.set(Zs[on]),ft.lerp(at,Bo),x.u_color1.value.copy(ft),ft.set(Yc[pn]),at.set(Yc[on]),ft.lerp(at,Bo),x.u_color2.value.copy(ft);const br=n?.45:1;rn.setEfxOffset(ee*fe(Rt,0,.2,0,1)*br,ee*Le*.01*br),rn.setEfxAmount(fe(Rt,0,.25,.35,.85)*(n?.35:1)),O=Math.sin(Rt*10+ht)*(n?4.5:7.5)*Oi(0,.2,Rt)};let oc=0;const n0=xe=>{if(!zt){Sr.update({whiteTunnelWaitRatio:0,aspect:y.aspect}),oc=cn;return}Tt.update(xe),kn.uniforms.u_time.value=ht,Pi.uniforms.u_time.value=ht,kn.uniforms.u_fbm.value=$t,Pi.uniforms.u_fbm.value=$t;let ke=cn-oc;Math.abs(ke)>.08&&(ke=0);const Le=n?0:.7,je=kt.clamp(-ke*fe(cn,0,.9,500,0,nf)*Le,-1,1),rt=kt.clamp(-ke*fe(cn,0,.8,45,0,nf)*Le,-1,1);rn.setEfxOffset(je,rt),rn.setEfxAmount(n?0:fe(cn,.75,1,1,0)),oc=cn;const _t=zt&&Ot>=1?"#000000":zt?"#ffffff":"#000000",lt=n?Math.max(y.aspect,.95):Math.max(y.aspect,.01);Sr.update({whiteTunnelWaitRatio:Ot>=1?ji:0,aspect:lt,bg:_t})},Kf=()=>Ia();window.addEventListener("scroll",Kf,{passive:!0}),Ia();const jf=xe=>{var Fa;const ke=Math.min(.05,Math.max(0,xe||.016666666666666666));if(Xf=performance.now(),!Ns){if(He){const Bt=He.getBoundingClientRect();Bt.bottom>0&&Bt.top<window.innerHeight&&rn.render()}return}Us+=((Ra?1:0)-Us)*.1,Lt=fe(Us,0,1,1,.3)*ke,Lt=fe(Qn,0,1,ke,Lt),Lt=fe(Hf,.5,.75,Lt,ke),ht+=Lt,Re.u_time.value=ht,Ca=(1-Us)*Ci*2.5*fe(Qn,0,.5,0,1)*fe(ji,0,.25,1,0),t0(Lt),n0(Lt),e0(Lt),en&&(O=Math.sin(Rt*10+ht)*(n?4.5:7.5)*Oi(0,.2,Rt)),tc();const Le=Ot,je=fe(Le,0,.1,0,1)*fe(Le,.9,1,1,0);Re.u_loopLinearBlend.value=je;const rt=fe(Le,.9,1,0,1,rf);Ge=rt>0;let _t,lt,Et,Vt=!0;if(Le<.5)Ji=0,_t=Oi(-.3,1,No)*.75,lt=0,Et=89,Ne.uniforms.u_cardOpacity.value=0;else{_t=fe(Le,.85,1,0,1)*(Le>=1?1.45:1),lt=140,Et=Math.min(287,Math.max(140,H-1));const Bt=Math.min(2,Math.max(0,.5+Math.max(0,ue.getFbm(ht*8,3)+.5)*4));Ne.uniforms.u_cardOpacity.value=Bt*rt,Le<1?(Ji=Math.max(0,Ji),Vt=!1):(Vt=!0,Ji===Number.POSITIVE_INFINITY&&(Oo=0),Ji=0)}Ji===0&&(Oo+=Lt*_t*ic),je===1&&(Oo=0);const un=Math.max(1,Et-lt+1),Hn=Pe[0];let pn=(Hn+Oo)*60;pn=(pn%un+un)%un;let on=Math.floor(pn),yi=(on+1)%un+lt;on+=lt,yi<on&&!Vt&&(yi=on=lt,Oo=-Hn,Ji=Number.POSITIVE_INFINITY);const Bo=pn-Math.floor(pn);te.setXYZ(0,on,yi,Bo),te.needsUpdate=!0;const br=fe(Da+Le,.9,2,90,139,Vw),Os=Math.floor(br),zs=Math.ceil(br),Ua=br-Os;ce.setXYZ(0,Os,zs,Ua),ce.needsUpdate=!0,Ie.visible=Le>=.95&&Fs>.02,Fe=Ge?Fe+Lt:0;{const Bt=De.x,Ii=De.y,ro=Math.floor(10*Fe%(Bt*(Ii+1))),Qi=ro/(Bt*(Ii+1)),Ui=wo(0,.15,Qi)*wo(1,.9,Qi);Re.u_faceLedLight.value=Ui,Ne.uniforms.u_cardUvOffset.value.set(ro%Bt/Bt,(Ii-Math.floor(ro/Bt))/Ii)}if(Re.u_cardPosition.value.set(Ae.getX(0),Ae.getY(0)+.9,Ae.getZ(0)),ye>.01&&!zt&&!Li){for(let Bt=0;Bt<Q;Bt++){Ee[Bt]=(Ee[Bt]+.2*Lt)%1,Ji===0&&(be[Bt]+=Lt*_t*ic);const Qi=(kt.lerp(0,Pe[Bt+1],ye)+be[Bt])*60%un;let Ui=Math.floor(Qi),ko=(Ui+1)%un+lt;Ui+=lt,ko<Ui&&!Vt&&(ko=Ui=lt);const Na=Qi-Math.floor(Qi);pe.setXYZ(Bt,Ui,ko,Na),Qe.setXYZ(Bt,Os,zs,Ua)}pe.needsUpdate=!0,Qe.needsUpdate=!0}if((Fa=rn.setScrollVelocity)==null||Fa.call(rn,Math.abs(Ca)+Math.abs(Ci)*.5),en){const Bt=x.u_resolution.value.clone();ot.visible=!1,Jn.visible=!1,Y.visible=Fs>.02,x.u_feedbackTexture.value=Ze.texture,x.u_resolution.value.set(Be.width,Be.height),R.setRenderTarget(Be),R.setClearColor(0,0),R.clear(),R.render(C,y),Ke(Be,n?10:16),Ke(Be,n?3:4),R.setRenderTarget(null),x.u_resolution.value.copy(Bt);const Ii=Ze;Ze=Be,Be=Ii,x.u_feedbackTexture.value=Ze.texture,U.u_blackTunnelTexture.value=Ze.texture,Jn.visible=!0}R.setClearColor(Re.u_bgColor.value,rn.clearAlpha),rn.render()},Jf=xe=>{rc=requestAnimationFrame(Jf);const ke=Math.min(.05,(xe-Xf)/1e3);xe-Qf>50&&jf(ke)};let Qf=0;const i0=xe=>{Qf=performance.now(),jf(xe)};return rc=requestAnimationFrame(Jf),requestAnimationFrame(()=>{zo(),Ia(),rn.render()}),{resize:zo,updateScroll:Ia,tickFrame:i0,getAutoScrollSpeed:()=>Ca,getGlassRatio:()=>(Di==null?void 0:Di.ratio)??0,getAstronautDropRatio:()=>Ot,getWhiteTunnelRatio:()=>cn,getBlackFrameInRatio:()=>Qn,getBlackTunnelRatio:()=>Rt,getBlackTitleRatio:()=>No,isGoalAudioActive:()=>!!(He&&(He.classList.contains("is-pinned")||He.classList.contains("is-windowed")||Ns&&(Li||en||zt))),destroy(){cancelAnimationFrame(rc),window.removeEventListener("resize",zo),window.removeEventListener("scroll",Kf),Di==null||Di.dispose(),Mr==null||Mr.dispose(),Me.dispose(),Ue.dispose(),ze.dispose(),We.dispose(),rn.destroy(),R.dispose()}}}function gM(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=zf(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(C=>{C._offsetX=0});return}b.forEach(C=>{C.style.transform="translateZ(0)"});let w=g;b.forEach(C=>{const T=C.getBoundingClientRect();C._domRect=T,w-=T.width});let S=0;const D=w/(b.length-1);b.forEach(C=>{C._offsetX=-C._domRect.left+_+S,S+=C._domRect.width+D})})};c(),window.addEventListener("resize",c);let u=null,d=null,h=null;t&&t.parentElement&&(d=t.parentElement,h=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=fe(_,0,.25,0,1);r.progress();const w=window.visualViewport,S=Math.round((w==null?void 0:w.height)||window.innerHeight),D=Math.round((w==null?void 0:w.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const F=i.getBoundingClientRect(),N=window.scrollY||0,z=Math.round((w==null?void 0:w.offsetLeft)||0),H=Math.round((w==null?void 0:w.width)||window.innerWidth),W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+N,B=N>=W-1&&F.bottom>0,oe=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",B),u&&(u.style.height=B?`${S}px`:"0px"),B&&!oe?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!B&&oe&&d&&(h&&h.parentNode===d?d.insertBefore(t,h):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.left="",t.style.width="",t.style.height="",window.dispatchEvent(new Event("resize"))),B&&(t.style.top=`${D}px`,t.style.left=`${z}px`,t.style.width=`${H}px`,t.style.height=`${S}px`,t.style.right="auto",t.style.bottom="auto"),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let C=fe(v,a,l,0,1);const T=C>0&&C<1;let P=fe(C,.5,1,1,o()?9:12,rf);P*=fe(C,0,.15,.85,1,Hw);let M=fe(C,.9,1,1,0);M*=fe(C,0,.05,0,1),M*=fe(g,0,.12,1,0);const y=fe(C,.4,.6,0,1,of);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(M),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=T&&M>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(F=>{const N=F._offsetX||0;F.style.transform=`translateX(${y*N}px)`}),s){const F=fe(g,.02,.15,1,0);s.style.opacity=String(F),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const R=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":R<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function gl(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function vM(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function vo(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function xM(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=vo(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=vo(document.getElementById("home-reel-desc"),2),l=vo(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let h=[],m=0,v=[],g=!0;const _=()=>{h.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}),v.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)",G.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(G=>{G.style.overflow="hidden",G.style.display="block",G.style.position="relative"}),h=[...gl(r,"word"),...gl(o,"word")],h.forEach(G=>{G.style.position="relative",G.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=gl(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),w=vo(document.getElementById("home-featured-title"),2),S=vo(document.getElementById("home-featured-disclaimer"),2),D=vo(document.getElementById("home-featured-cta"),1);let C=[],T=[],P=!0;const M=()=>{P=!1,w&&(w._time=0,w._animating=!1),S&&(S._time=0,S._animating=!1),D&&(D._time=0,D._animating=!1),i()||(T.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}),C.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(w){if(w.style.overflow="hidden",C=vM(w),S){const G=S.textContent.trim();S.textContent="";const _e=document.createElement("div");_e.className="line",_e.textContent=G,_e.style.transform="translate3d(0, 100%, 0)",_e.style.willChange="transform";const Se=document.createElement("div");Se.style.position="relative",Se.style.overflow="hidden",Se.appendChild(_e),S.appendChild(Se),T=[_e]}D&&(D.style.transform="translate3d(0, 150%, 0) rotate(10deg)",D.style.opacity="0",D.style.overflow="hidden"),M()}})();const R=vo(document.getElementById("home-goal-title"),2);let F=[];R&&(R.style.overflow="hidden",F=gl(R,"word"),F.forEach(G=>{G.style.transform="translate3d(0, 100%, 0)",G.style.opacity="0"}));let N=0,z=!1,H=0;const V=G=>{if(!t||!e)return;if(!Tn(e).isActive){g=!0;return}g&&(g=!1,_());const Se=Tn(t),Ae=Tn(s||a),te=window.innerHeight*.1;if(t._time=qt(t._time+(t._animating?G:-G),0,2),a&&(a._time=qt(a._time+(a._animating?G:-G),0,2)),l&&(l._ratio=ri(l._ratio+(l._animating?G:-G))),Se.screenRatio>-1&&(t._animating=!0,i()?h.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):h.forEach((ce,le)=>{let Me,Ue;le<2?(Me=fe(t._time-Math.abs(2-le)/10,.5,1.2,-m,0,gt),Ue=fe(t._time-le/10,0,1,100,0,gt)):(Me=0,Ue=fe(t._time-le/10,0,1,-100,0,gt)),ce.style.transform=`translate3d(${Me}px, ${Ue}%, 0)`}),n)){const ce=Se.showScreenOffset*-te*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Ae.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Ae.showScreenOffset*-te*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(le=>{le.style.opacity="1",le.style.transform="translate3d(0, 0, 0)"}):v.forEach((le,Me)=>{const Ue=fe(a._time-Me/100,0,1,.1,1,Vl),ze=fe(a._time-Me/100,0,1,100,0,Vl);le.style.opacity=String(Ue),le.style.transform=`translate3d(0, ${ze}%, 0)`})),l){const le=Ae.showScreenOffset*-te*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${le}px) translate3d(0, ${fe(l._ratio,0,1,150,0,gt)}%, 0) rotate(${fe(l._ratio,0,1,10,0,gt)}deg)`,l.style.opacity=String(gt(l._ratio))):(l.style.transform=`translateY(${le}px)`,l.style.opacity="1")}}if(c){const ce=Tn(c),le=ri(fe(ce.showScreenOffset,.05,.85,0,1,gt));c.style.opacity=String(le),c.style.transform=`translate3d(0, ${fe(le,0,1,80,0,gt)}px, 0) scale(${fe(le,0,1,.96,1,gt)})`}if(u){const ce=Tn(u);H=ri(fe(ce.showScreenOffset,0,.7,0,1,gt)),u.style.opacity=String(.4+H*.6),u.style.transform=`translate3d(0, ${fe(H,0,1,60,0,gt)}px, 0) scale(${fe(H,0,1,.94,1,gt)})`,z=H>.9,N=qt(N+(z?G:-G*2),0,1.4),d.forEach((le,Me)=>{const Ue=fe(N-Me/10,0,.6,0,1,gt),ze=fe(N-Me/10,0,.6,0,180,gt);le.style.transform=`scale(${Ue}) rotate(${ze}deg)`,le.style.display="inline-block"})}},W=G=>{if(!b||!w)return;if(Tn(b).isActive){P&&M();const Se=Tn(w),Ae=Tn(S),J=Tn(D);w._time=qt(w._time+(w._animating?G:-G),0,2),S&&(S._time=qt(S._time+(S._animating?G:-G),0,2)),D&&(D._time=qt(D._time+(D._animating?G:-G),0,1)),Se.screenRatio>-1&&(w._animating=!0,i()?C.forEach(te=>{te.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):C.forEach((te,ce)=>{const le=fe(w._time*1.5-ce/20,0,1,1,0,gt),Me=fe(w._time*1.5-ce/20,0,1,10,0,gt);te.style.transform=`translate3d(0, ${le}em, 0) rotate(${Me}deg)`})),Ae.screenRatio>-1&&S&&(S._animating=!0,i()?T.forEach(te=>{te.style.transform="translate3d(0, 0, 0)"}):T.forEach((te,ce)=>{const le=fe(S._time-ce/20,0,1,100,0,gt);te.style.transform=`translate3d(0, ${le}%, 0)`})),J.screenRatio>-1&&D&&(i()?(D.style.transform="translate3d(0, 0, 0) rotate(0deg)",D.style.opacity="1"):(D._animating=!0,D.style.transform=`translate3d(0, ${fe(D._time,0,1,150,0,gt)}%, 0) rotate(${fe(D._time,0,1,10,0,gt)}deg)`,D.style.opacity=String(gt(D._time))))}else P=!0},B=G=>{if(!R)return;Tn(R).screenRatio>-1&&(R._animating=!0),R._time=qt(R._time+(R._animating?G:-G),0,2),F.forEach((Se,Ae)=>{const J=fe(R._time-Ae/20,0,1,0,1,gt),te=fe(R._time-Ae/20,0,1,100,0,gt);Se.style.opacity=String(J),Se.style.transform=`translate3d(0, ${te}%, 0)`})},oe=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",oe),{update(G){V(G),W(G),B(G)},destroy(){window.removeEventListener("resize",oe)}}}const Zd=28,yM=4,SM=8;function Kd(){return window.innerWidth<812}function wM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,M;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((M=a==null?void 0:a.textContent)==null?void 0:M.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(y=>{const R=document.createElement("div");if(R.className="project-item-line-2-inner-list",R.style.transform="translateY(-400%)",y===" ")R.style.width="0.3em";else for(let F=0;F<4;F++){const N=document.createElement("span");N.textContent=y,R.appendChild(N)}a.appendChild(R),d.push(R)})),s&&(s.textContent="");let h=!1,m=!1,v=0,g=0,_=0,p=0,b=0,w=!1,S=0,D=0,C=0,T=0;return Kd()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{h=!0}),r==null||r.addEventListener("mouseleave",()=>{h=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(y){const R=Tn(t),F=R.ratio>-1&&R.ratio<1;F&&(w=!0),w&&(_+=y);const N=ri(fe(_,0,.85,0,1,gt)),z=fe(N,0,1,90,0,gt);if(t.style.opacity=String(N),t.style.transform=`translate3d(0, ${z}px, 0)`,s&&F){p+=y;const H=Math.min(c.length,Math.floor(Zd*p)-yM),V=Math.min(c.length,Math.floor(Zd*p));let W="";for(let B=0;B<Math.max(0,H);B++)W+=c[B];for(let B=0;B<V-Math.max(0,H);B++)W+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=W}if(F&&(b+=y*.8),g=ri(g+(m?1:-1)*y*2.5),Kd())d.forEach((H,V)=>{const W=ri(g-Math.abs(V-d.length-1)/100),B=fe(W,0,1,0,1.5,gt);H.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((H,V)=>{const W=fe(V,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),B=ri(b-Math.cos(W)/SM),oe=fe(B,0,1,500,0,Ow),G=ri(g-Math.abs(V-d.length-1)/100),_e=fe(G,0,1,0,1.5,gt);H.style.transform=`translate3d(${_e}em, -${oe}%, 0)`}),l){const H=fe(g,.3,1,0,1,gt);l.style.transform=`translateX(${H}em)`}if(v=qt(v+(h?1:-1)*y,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){h?(C=(Math.random()-.5)*fe(v,0,.6,1,0)*8,T=(Math.random()-.5)*fe(v,0,.6,1,0)*8):(C*=.92,T*=.92),S+=(C-S)*.2,D+=(T-D)*.2;const H=fe(v,0,1,1,1.06,gt);o.style.transform=`translate3d(${S}px, ${D}px, 0) scale(${H})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const jd=12,Jd=6,MM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,bM=`
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
  float stepDist = dist / float(${jd});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${jd}; i++) {
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
  float numSampleInv = 1.0 / float(${Jd});
  for (int i = 0; i < ${Jd}; i++) {
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
`;function TM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(h){d=h},get target(){return d},update(h){if(h<=0)return l;const m=(d-u)/h;u=d;const v=Math.max(s,h*h/2+h*o/2,h*o);return l+=c*h,c+=(d+a*m-l-o*c)*h/v,l}}}async function EM(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new Jl({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(S){return n.remove(),console.warn("Featured WebGL unavailable",S),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Nn;const o=new Kr,s=new Kl(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new ki,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=S=>{c.x=S.clientX,c.y=S.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new ci(1,1),h=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(S,D)=>{var le,Me,Ue;const C=S.dataset.id||((le=i[D])==null?void 0:le.id),T=S.querySelector(".project-item-main"),P=S.querySelector(".project-item-image img");P&&(P.style.opacity="0",P.setAttribute("aria-hidden","true"));const M=new $e(S.dataset.colorBg||"#111111");let y,R;try{[y,R]=await Promise.all([a.loadAsync(`${l}${C}/home.webp`),a.loadAsync(`${l}${C}/home_depth.webp`)])}catch(ze){console.warn("Featured WebGL textures failed for",C,ze),P&&(P.style.opacity="1");return}y.colorSpace=Nn,y.wrapS=y.wrapT=zn,y.minFilter=vt,y.magFilter=vt,y.generateMipmaps=!1,R.colorSpace=Qt,R.wrapS=R.wrapT=zn,R.minFilter=vt,R.magFilter=vt,R.generateMipmaps=!1;const F=new et(((Me=y.image)==null?void 0:Me.width)||1024,((Ue=y.image)==null?void 0:Ue.height)||1024),N=new q(0,0,-1),z=new sf(new q,1,.6,2),H=TM(1,2.2,.7,3);H.target=0;const V=new et,W=new et,B={u_texture:{value:y},u_depthTexture:{value:R},u_colorBg:{value:M},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:F},u_domWH:{value:new et(1,1)},u_shiftXY:{value:V},u_focusPos:{value:N},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new et(1,1)},u_globalRadius:{value:15},u_time:{value:0}},oe=new At({uniforms:B,vertexShader:MM,fragmentShader:bM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),G=new Ut(d,oe);G.frustumCulled=!1,G.renderOrder=10+D,G.visible=!1,o.add(G);let _e=!1,Se=0,Ae=0,J=0;const te=[0,.2,.3],ce=ze=>{for(let Ze=0;Ze<te.length;Ze++)if(ze<te[Ze])return Ze;return te.length};window.innerWidth>=812&&(T==null||T.addEventListener("mouseenter",()=>{_e=!0}),T==null||T.addEventListener("mouseleave",()=>{_e=!1})),h.push({mesh:G,uniforms:B,focusDyn:z,focusPos:N,zoomDyn:H,shiftXY:V,shiftXYTarget:W,index:D,main:T,dom:S,update(ze,Ze,Be,tt,k){const We=Tn(S);if(!(We.ratio>-1&&We.ratio<1)||!T){Ae=0,G.visible=!1,B.u_showRatio.value=0;return}Ae+=ze;const qe=T.getBoundingClientRect(),Ve=Math.max(1,qe.width),Ke=Math.max(1,qe.height);B.u_domWH.value.set(Ve,Ke),B.u_resolution.value.set(Ze,Be),B.u_time.value=tt,B.u_rippleStrength.value=Math.min(.15,k*.5),B.u_globalRadius.value=Math.min(Ve,Ke)*.04;const Re=fe(Ae,0,2,0,1,Vl),U=D%2-.5,E=(1-Re)*U*-Ze*.1,$=(1-Re)*U*.1;G.position.set(qe.left+Ve*.5+E,Be-(qe.top+Ke*.5),0),G.scale.set(Ve,Ke,1),G.rotation.z=-$;const Y=fe(Ae,0,1.5,0,1,Vl);B.u_showRatio.value=Y,G.visible=Y>.01;const se=Se;if(Se=qt(Se+(_e?1:-1)*ze,0,1),se<Se){const Te=ce(se),de=ce(Se);de!==Te&&W.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(fe(Se,0,.6,1,0)),de===te.length&&W.multiplyScalar(.5)}else W.multiplyScalar(.95);V.lerp(W,.2);const Q=z.target;if(_e){const Te=Se>0?fe(Se,0,.3,1,0)*Ke*.75:0;Q.x=(c.x-qe.left-Ve*.5+Math.cos(tt*20)*Te)/Ve*-Ke,Q.y=(c.y-qe.top-Ke*.5-Math.sin(tt*30)*Te)/Ke*Ke,Q.z=.5}else Q.x=0,Q.y=0,Q.z=-1;z.update(ze),N.copy(z.value),H.target=_e?1:0,H.update(ze),B.u_zoomRatio.value=H.value,J=qt(J+(_e?.75:-1)*ze,0,1),B.u_dofRangeOffset.value=kt.lerp(0,-.5,J),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,b=0;const w=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return w(),window.addEventListener("resize",w),{update(S){_+=S;const D=window.scrollY,C=Math.abs(D-p)/Math.max(S,.001);p=D,b+=(Math.min(1,C*.002)-b)*.15;const P=Tn(e).isActive;if(n.style.visibility=P?"visible":"hidden",!!P){for(const M of h)M.update(S,v,g,_,b);r.render(o,s)}},resize:w,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",w),document.documentElement.classList.remove("has-featured-webgl"),h.forEach(S=>{S.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function AM(){return window.innerWidth<812}function RM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function CM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&RM(o);const l=2;let c=0,u=0,d=0,h=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,w=0;const S=C=>{var P;if(!C)return;const T=(P=C.play)==null?void 0:P.call(C);T&&typeof T.catch=="function"&&T.catch(()=>{})};return{update:C=>{var R;if(!i)return;const T=e?Tn(e):null,P=n?Tn(n):null,M=AM(),y=M?!!(P!=null&&P.isActive):!!T&&T.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",y),y){const F=(T==null?void 0:T.top)??0,N=(T==null?void 0:T.height)??1,z=window.innerHeight,H=F-(z-N)*.5,V=((P==null?void 0:P.top)??0)-(z-((P==null?void 0:P.height)??z))*.5;if(w=ri(fe(window.scrollY+F,H,V,0,1)),w=ri(fe((T==null?void 0:T.showScreenOffset)??0,.15,1.1,0,1,gt)),r&&(S(r),r.style.opacity=String(.35+w*.65)),t&&(S(t),t.style.opacity=String(1-w*.85)),e){const W=fe(w,0,1,1,1.08,gt);e.style.transform=`scale(${W})`,e.style.opacity=String(fe(w,.7,1,1,.15,gt))}if(n){const W=fe(w,0,1,48,0,gt),B=fe(w,0,1,.94,1,gt);n.style.transform=`translate3d(0, ${W}px, 0) scale(${B})`,n.style.opacity=String(.25+w*.75)}w===1||w>.9?(m=!0,v=!0):(v=!1,m=!1),p=w>.85,b=w>.85}else(R=r==null?void 0:r.pause)==null||R.call(r),w=0,m=!1,v=!1,p=!1,b=!1;if(d=qt(d+(m?C:-C),0,1e9),h=Math.min(w,ri(h+(v?C:-C))),u=d%l,o!=null&&o._splitted&&!M){const F=o._splitted.words;for(let N=0;N<F.length;N++){const z=F[N];c-u>l-1&&(z._randCharIndex=Math.round(Math.random()*(z._chars.length-1)));for(let H=0;H<z._chars.length;H++){const V=z._chars[H];let W=fe(h-N/4-H/20,0,.6,200,0,gt);H===z._randCharIndex&&(W+=fe(u-N/10,.5,1.3,0,-100,gt)),V._inner&&(V._inner.style.transform=`translate3d(0, ${W}%, 0)`)}}}c=u,g=qt(g+(p?C:-C*2),0,1.4),_=qt(_+(b?C:-C*2),0,1.4),s.forEach((F,N)=>{const z=fe(g-N/10,0,.6,0,1,gt),H=fe(g-N/10,0,.6,0,180,gt);F.style.transform=`scale(${z}) rotate(${H}deg)`}),a.forEach((F,N)=>{const z=fe(_-N/10,0,.6,0,1,gt),H=fe(_-N/10,0,.6,0,180,gt);F.style.transform=`scale(${z}) rotate(${H}deg)`})},destroy(){}}}const Zc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],PM=`
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
`,LM=`
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
`,IM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function UM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function FM(){const i=UM(),e="/zyrax-studio/",t=await Promise.all(Zc.map(T=>bn(`${e}assets/models/lines/${T.fileName}.buf`))),n=new Kr,r=new Gn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const o=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let s;try{s=new Jl({canvas:i,alpha:!0,antialias:!o,premultipliedAlpha:!1,powerPreference:o?"low-power":"default"})}catch(T){return console.error("Lines WebGL unavailable",T),{update(){},resize(){},destroy(){},setPaused(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,o?1:1.5)),s.autoClear=!0;const a=[],l=new q,c=new q,u=new Ls,d=new et,h=new yt,m=new yt,v=new yt,g=new yt;let _=!1,p=!0;for(let T=0;T<Zc.length;T++){const P=Zc[T],M=t[T],y=document.querySelector(P.sectionSelector);if(!y||!M)continue;const R=new xi,F=new xi;R.add(F),n.add(R);const N=new At({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:P.aoThreshold},u_color0:{value:new $e(P.color0)},u_color1:{value:new $e(P.color1)},u_radius:{value:.008}},vertexShader:PM,fragmentShader:LM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),z=new Ut(M,N);z.frustumCulled=!1,z.renderOrder=200,F.add(z);const H=new At({uniforms:{u_color0:{value:new $e(P.color0)},u_color1:{value:new $e(P.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:DM,fragmentShader:IM,side:Cn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),V=new Ut(new ci(2,2),H);V.frustumCulled=!1,V.renderOrder=200,F.add(V);const W=M.attributes.position.array,B=M.attributes.position.count,oe=new Float32Array(B);for(let G=0;G<B;G++)oe[G]=W[G*3+2];a.push({data:P,sectionEl:y,container:R,inner:F,mesh:z,mat:N,circle:V,circleMat:H,lineRatioArray:oe,cpAttr:M.attributes.CP,cdAttr:M.attributes.Cd,count:B,offsetY:0,framePos:new q,frameQuat:new Bn,frameScale:new q(1,1,1)})}let b=1,w=1;const S=()=>{b=window.innerWidth||1,w=window.innerHeight||1;const T=Math.sqrt(b*b+w*w),P=w/T;d.set(b/w*P,P),r.fov=60,r.aspect=b/w,r.position.set(b/2,-w/2,w/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(b/2,-w/2,0),r.updateProjectionMatrix(),s.setSize(b,w,!1)};S(),window.addEventListener("resize",S);const D=T=>{var E;const{data:P,sectionEl:M,container:y,inner:R,mat:F,circle:N,circleMat:z,lineRatioArray:H,cpAttr:V,cdAttr:W,count:B}=T,G=Tn(M).top+T.offsetY,_e=w,Se=P.scrollToRatioFactors;let Ae=ri(-(G-Se[0]*_e)/(Se[1]*_e));Ae=kw(Ae);const J=b<=812,te=.008*fe(b,540,1920,2,1)*(J?.72:1),ce=b/d.x,le=w/d.y;let Me=P.margin.x,Ue=P.margin.y;J&&P.id==="goal"&&(Me=.42,Ue=-.35),R.position.x=Me*ce,R.position.y=Ue*le-G,R.scale.set(ce,le,1),T._showSmooth==null&&(T._showSmooth=Ae),T._showSmooth+=(Ae-T._showSmooth)*(J?.32:.18),T._targetA=Ae,F.uniforms.u_showRatio.value=T._showSmooth,F.uniforms.u_radius.value=te;const ze=(E=M.dataset)==null?void 0:E.goalPhase,Ze=P.id==="goal"&&(ze==="black-tunnel"||ze==="white");if(y.position.copy(T.framePos),y.quaternion.copy(T.frameQuat),y.scale.copy(T.frameScale),y.updateMatrixWorld(!0),u.min.copy(P.boxMin),u.max.copy(P.boxMax),u.applyMatrix4(R.matrixWorld),y.visible=!Ze&&u.max.y>-w&&u.min.y<0&&T._showSmooth>.001,!y.visible)return;const Be=T._showSmooth;let tt=0,k=B-1;for(;tt<k;){const $=tt+k+1>>1;H[$]<=Be?tt=$:k=$-1}const We=tt,Xe=Math.min(We+1,B-1);let qe=0;if(We<B-1){const $=H[Xe]-H[We]||1;qe=(Be-H[We])/$}l.fromArray(V.array,We*3),c.fromArray(V.array,Xe*3),l.lerp(c,qe);const Ve=W.array;let Ke=Ve[We]*(1-qe)+Ve[Xe]*qe;Ke=.9+.1*Ke;const Re=ri((Be-(P.aoThreshold-.02))/.04);N.position.copy(l),N.scale.set(te,te,1),z.uniforms.u_ao.value=Math.min(1,Ke+1-Re);let U=H[We]*(1-qe)+H[Xe]*qe;U=1-Math.pow(1-qt(U,0,1),2),z.uniforms.u_mixRatio.value=U},C=()=>{if(_){if(p){for(const M of a)M.container.visible=!1;s.clear(),p=!1}return}let T=!1,P=!1;for(const M of a){D(M),M.container.visible&&(T=!0);const y=M._targetA??0,R=M._showSmooth??0;Math.abs(y-R)>8e-4&&(P=!0)}(T||P||p)&&s.render(n,r),p=T||P};return C(),{update:C,resize:S,setGoalOffset(T){const P=a.find(M=>M.data.id==="goal");P&&(P.offsetY=T||0)},setGoalFrame({scale:T=1,rotation:P=0,active:M=!1}={}){const y=a.find(N=>N.data.id==="goal");if(!y)return;if(!M){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const R=b*.5,F=-w*.5;h.makeTranslation(R,F,0),m.makeRotationZ(-P),v.makeScale(T,T,1),g.makeTranslation(-R,-F,0),h.multiply(m).multiply(v).multiply(g),h.decompose(y.framePos,y.frameQuat,y.frameScale)},setPaused(T){if(_=!!T,_){for(const P of a)P.container.visible=!1;try{s.clear()}catch{}p=!1}},destroy(){window.removeEventListener("resize",S),s.dispose(),i.remove()}}}const Kc=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function NM(i,e,t,n){var P;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let h=e.querySelector("[data-goal-screen-clip]");if(!h){h=document.createElement("div"),h.setAttribute("data-goal-screen-clip",""),h.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const M=Array.from(e.childNodes);e.appendChild(h),M.forEach(y=>h.appendChild(y))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const M=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==M&&(m.src=M)};v();let g="",_=null,p=(P=e.parentElement)==null?void 0:P.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const M=s||a;if(!M)return null;const y=M.getBoundingClientRect();return y.width<8||y.height<8?null:{left:y.left,top:y.top,width:y.width,height:y.height}},w=()=>{const M=window.visualViewport;return Kc&&M?{vw:Math.round(M.width)||window.innerWidth,vh:Math.round(M.height)||window.innerHeight,top:Math.round(M.offsetTop||0),left:Math.round(M.offsetLeft||0)}:{vw:window.innerWidth,vh:window.innerHeight,top:0,left:0}},S=(M,y=0,R=0)=>{if(!M)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const{vw:F,vh:N,top:z,left:H}=w();e.style.position="fixed",e.style.left=`${H}px`,e.style.top=`${z}px`,e.style.width=`${F}px`,e.style.height=`${N}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const V=qt(R,0,1),W=M.left-H+M.width*d.left*(1-V),B=M.top-z+M.height*d.top*(1-V),oe=M.width*d.width+(F-M.width*d.width)*V,G=M.height*d.height+(N-M.height*d.height)*V;h&&(h.style.inset="unset",h.style.left=`${W}px`,h.style.top=`${B}px`,h.style.right="auto",h.style.bottom="auto",h.style.width=`${Math.max(1,oe)}px`,h.style.height=`${Math.max(1,G)}px`,h.style.borderRadius=V>.85?"0px":`${Math.min(M.width,M.height)*.03*(1-V)}px`,h.style.background="#000",h.style.transform=y?`rotate(${y}rad)`:"none",h.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${M.left-H}px`,m.style.top=`${M.top-z}px`,m.style.width=`${M.width}px`,m.style.height=`${M.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=y?`rotate(${y}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},D=()=>{var M;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),h&&(h.style.left="0",h.style.top="0",h.style.right="0",h.style.bottom="0",h.style.width="100%",h.style.height="100%",h.style.inset="0",h.style.borderRadius="0",h.style.background="",h.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(M=n==null?void 0:n.setGoalFrame)==null||M.call(n,{active:!1})},C=()=>{const M=t.range("blackFrameShow").ratio,y=t.range("blackFrameIn").ratio,R=t.range("blackTunnel").ratio,F=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),{vw:z,vh:H,top:V,left:W}=w(),B=N.bottom>0&&N.top<H;_=b();const oe=B&&R<.02&&F<.01&&y<.999;if(oe&&_){let G=qt(y,0,1);if(_.top<H*.4){const te=qt((H*.4-_.top)/(H*.65),0,1);G=Math.max(G,fe(te,0,1,0,1))}const _e={left:W,top:V,width:z,height:H},Se={left:_.left+(_e.left-_.left)*G,top:_.top+(_e.top-_.top)*G,width:_.width+(_e.width-_.width)*G,height:_.height+(_e.height-_.height)*G},Ae=fe(G,0,1,0,.35)*(1-G);S(Se,Ae,G);const J=Math.max(fe(M,0,.2,.35,1),N.top<H*.85?1:0);if(e.style.opacity=String(J),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(fe(G,0,.75,1,0)*J),m.style.visibility=G>.92?"hidden":"visible"),o&&(o.style.visibility=G>.98?"hidden":"visible"),u&&(u.style.visibility=G>.55?"":"hidden"),l&&!Kc){const te=fe(G,0,1,0,H*.12);l.style.transform=`translate3d(0, ${-te}px, 0)`}if(c&&!Kc&&_){const te=i.querySelector("#home-goal-context"),ce=(te==null?void 0:te.getBoundingClientRect().top)??0,le=te&&parseFloat(getComputedStyle(te).paddingTop)||0,Me=_.top-ce-le+_.height*.5;c.style.top=`${Me}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:G>.01,scale:fe(G,0,1,1,2.4),rotation:Ae}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:G,blackFrameShow:M,frameRect:_}}if(g==="window"){D(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),e.classList.add("is-pinned"),e.style.position="fixed",e.style.left=`${W}px`,e.style.top=`${V}px`,e.style.width=`${z}px`,e.style.height=`${H}px`,e.style.right="auto",e.style.bottom="auto",e.style.zIndex="4",e.style.background="#000000",p&&(p.style.height="0px");let G=e.previousElementSibling;for(;G;){if(G!==p&&G.getAttribute("aria-hidden")==="true"){G.style.height=`${H}px`;break}G=G.previousElementSibling}e.parentElement!==document.body&&document.body.appendChild(e),g="full",window.dispatchEvent(new Event("resize"))}else!oe&&o&&R>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden"));return(!B||N.top>H*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:y,blackFrameShow:M,frameRect:_}},T=()=>{v(),C()};return window.addEventListener("resize",T),window.addEventListener("scroll",C,{passive:!0}),C(),{update:C,destroy(){window.removeEventListener("resize",T),window.removeEventListener("scroll",C),m==null||m.remove(),D()},getFrameRect:()=>_}}const Qd="/zyrax-studio/assets/audios/",OM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},zM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function ep(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function BM(){const i={};for(const[p,b]of Object.entries(OM))i[p]=ep(`${Qd}${b}`,{loop:!0,volume:0});const e={};for(const[p,b]of Object.entries(zM))e[p]=b.map(w=>ep(`${Qd}${w}`,{loop:!1,volume:.85}));let t=!1,n=null,r=null,o=null,s=1,a=1.2;const l={hover:0,click:0,focus:0,page:0,glass:0};let c=0;const u=async()=>{if(!t){t=!0;try{const p=i.generic;p.volume=0,await p.play(),p.pause(),p.currentTime=0,n||h("generic",.01)}catch{t=!1}}},d=p=>{if(!t)return;const b=e[p];if(!(b!=null&&b.length))return;const w=l[p]%b.length;l[p]=w+1;const S=b[w].cloneNode();S.volume=p==="focus"?.4:p==="glass"?1:.85,S.play().catch(()=>{})},h=(p,b=1.2)=>{if(!i[p]||n===p)return;r=n,o=p,s=0,a=Math.max(.05,b),n=p;const w=i[p];w.volume>.01&&!w.paused||(w.volume=0),t&&w.play().catch(()=>{})},m=p=>{if(t)if(o&&s<1){s=Math.min(1,s+p/a);const b=s*s*(3-2*s);if(r&&i[r]&&(i[r].volume=Math.max(0,1-b),b>=1)){i[r].pause();try{i[r].currentTime=0}catch{}}i[o]&&(i[o].volume=b,i[o].paused&&i[o].play().catch(()=>{})),b>=1&&(r=null,o=null)}else n&&i[n]&&(i[n].volume<1&&(i[n].volume=1),i[n].paused&&i[n].play().catch(()=>{}))},v=()=>{},g=({blackFrameInRatio:p=0,blackTunnelRatio:b=0,whiteTunnelRatio:w=0,astronautDropRatio:S=0}={})=>{const D=S,C=p,T=b,P=w;C>.5&&T===0?(c=0,h("cinematic_2",.5)):T>0&&P===0?(h("cinematic_3",.5),c=0):P>0&&D===0||P>0&&D<=.8?h("cinematic_2",.5):P>0&&D>.8?h("generic_end",1):(c=0,h("generic",1)),D===0?c=1:c===1&&(d("glass"),c=2)};document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(p=>{p.addEventListener("mouseenter",()=>d("hover")),p.addEventListener("click",()=>d("click"))});const _=()=>{u()};return window.addEventListener("pointerdown",_,{passive:!0}),window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("wheel",_,{passive:!0,once:!0}),window.addEventListener("keydown",_,{passive:!0,once:!0}),u(),{update:m,syncGoalPhase:v,syncTunnelAudio:g,playSfx:d,setEnabled(){},get enabled(){return!0},destroy(){Object.values(i).forEach(p=>{p.pause(),p.src=""})}}}const pr=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let jc=0;const Bf=({notifyResize:i=!1}={})=>{var n;const e=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,t=e*.01;document.documentElement.style.setProperty("--vh",`${t}px`),i&&pr&&Math.abs(e-jc)>1?(jc=e,window.dispatchEvent(new Event("resize"))):jc=e};Bf();window.addEventListener("resize",()=>Bf());let Jc=0,Ym=()=>{};const $m=()=>{Jc||(Jc=window.setTimeout(()=>{Jc=0,Bf({notifyResize:!0}),Ym()},pr?48:0))};var op;(op=window.visualViewport)==null||op.addEventListener("resize",$m);var sp;(sp=window.visualViewport)==null||sp.addEventListener("scroll",$m);const qi=new y0({duration:pr?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!pr,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:pr?.9:.82,touchMultiplier:pr?1:1.1});window.lenis=qi;let Ks=0,js=0,ca=!1,Zm=0;window.addEventListener("wheel",()=>{Zm=performance.now(),ca=!0},{passive:!0});window.addEventListener("pointerdown",()=>{ca=!0},{passive:!0});const kM="/zyrax-studio/assets/projects/",tp=document.getElementById("project-list");tp&&(tp.innerHTML=lm.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${kM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const HM=document.getElementById("hero-canvas"),VM=document.getElementById("home-hero-visual-container"),Or=document.getElementById("home-hero"),Qc=document.getElementById("home-hero-title"),eu=document.getElementById("home-hero-visual-container"),np=document.getElementById("home-hero-scroll-container"),_r=document.getElementById("home-goal"),GM=document.getElementById("goal-tunnel-canvas"),WM=document.getElementById("home-goal-tunnel-title"),Km=document.getElementById("home-goal-tunnel-sticky"),jm=gM(_r,WM,Km),XM=_r?zf(_r):null,tu=BM();let wt=null,ip="";const qM=xM(),YM=wM(),$M=CM();let Vn=null,Rl=null;const Jm=_r?NM(_r,Km,XM,{setGoalFrame:(...i)=>{var e;return(e=Vn==null?void 0:Vn.setGoalFrame)==null?void 0:e.call(Vn,...i)}}):{update(){}};Ym=()=>{var i;Jm.update(),jm.updateScroll(),(i=wt==null?void 0:wt.updateScroll)==null||i.call(wt)};let rp=performance.now();Tf.ticker.add(i=>{var r,o,s,a,l,c,u;const e=performance.now(),t=Math.min(.05,(e-rp)/1e3);if(rp=e,!pr&&(wt!=null&&wt.getAutoScrollSpeed&&(Ks=wt.getAutoScrollSpeed()),e-Zm>80&&Math.abs(Ks)>.01&&(ca=!1),js+=Math.abs(Ks)>0&&!ca?t:-1,js=Math.max(0,Math.min(1,js)),!ca&&js>0&&Math.abs(Ks)>.01)){const h=window.innerHeight,m=Ks*h*t*js*.55,v=(qi.animatedScroll??qi.scroll??window.scrollY)+m;qi.scrollTo(v,{immediate:!0,force:!0})}qi.raf(i*1e3),qM.update(t),YM.update(t),Rl==null||Rl.update(t),$M.update(t),Vn==null||Vn.update(),(r=wt==null?void 0:wt.tickFrame)==null||r.call(wt,t),tu.update(t);const n=((o=_r==null?void 0:_r.dataset)==null?void 0:o.goalPhase)||"";n&&n!==ip&&(ip=n,tu.syncGoalPhase(),(s=Vn==null?void 0:Vn.setPaused)==null||s.call(Vn,pr&&(n==="black-tunnel"||n==="white"))),wt!=null&&wt.getAstronautDropRatio&&tu.syncTunnelAudio({blackFrameInRatio:((a=wt.getBlackFrameInRatio)==null?void 0:a.call(wt))??0,blackTunnelRatio:((l=wt.getBlackTunnelRatio)==null?void 0:l.call(wt))??0,whiteTunnelRatio:((c=wt.getWhiteTunnelRatio)==null?void 0:c.call(wt))??0,astronautDropRatio:((u=wt.getAstronautDropRatio)==null?void 0:u.call(wt))??0})});Tf.ticker.lagSmoothing(0);qi.on("scroll",()=>{if(Jm.update(),jm.updateScroll(),wt==null||wt.updateScroll(),!Or)return;const i=Or.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));Qc&&(Qc.style.transform=`translate3d(0, ${t*-12}vh, 0)`,Qc.style.opacity=String(Math.max(0,1-t*1.2))),eu&&(eu.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,eu.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),np&&(np.style.opacity=String(Math.max(0,1-t*2)))});FM().then(i=>{Vn=i}).catch(i=>console.error("Scroll lines failed",i));_M(GM,_r).then(i=>{wt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{Uw(HM,VM).then(()=>Or==null?void 0:Or.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Or==null||Or.classList.add("is-in")})});pr||EM(lm).then(i=>{Rl=i}).catch(i=>console.error("Featured WebGL failed",i));function Qm(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}Qm(document.getElementById("home-hero-title"));Qm(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const ZM=document.querySelectorAll(".home-hero-scroll-container-cross");ZM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const nu=document.getElementById("header"),iu=document.getElementById("header-container"),Br=document.getElementById("header-background"),ru=document.getElementById("header-menu"),gs=document.getElementById("header-right-menu-btn");let ur=!1;const Aa=i=>{ur=!!i,nu==null||nu.classList.toggle("--menu-opened",ur),iu==null||iu.classList.toggle("--opened",ur),Br==null||Br.classList.toggle("--opened",ur),ru==null||ru.classList.toggle("--opened",ur),gs==null||gs.classList.toggle("--opened",ur),Br&&(Br.style.opacity=ur?window.innerWidth>=1e3?"0.2":"1":"0")};gs==null||gs.addEventListener("click",i=>{i.stopPropagation(),Aa(!ur)});Br==null||Br.addEventListener("click",()=>Aa(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");Aa(!1),t==="contact"?(e.preventDefault(),qi.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),qi.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!ur)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||Aa(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&Aa(!1)});var ap;(ap=document.querySelector("[data-reel]"))==null||ap.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var lp;(lp=document.querySelector("#end-bottom"))==null||lp.addEventListener("click",i=>{i.preventDefault(),qi.scrollTo("#footer-section")});var cp;(cp=document.querySelector("#footer-bottom-up"))==null||cp.addEventListener("click",i=>{i.preventDefault(),qi.scrollTo(0)});
