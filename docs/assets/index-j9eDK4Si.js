var Ep=Object.defineProperty;var bp=(i,e,t)=>e in i?Ep(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var We=(i,e,t)=>bp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Hu="1.3.27";function Pf(i,e,t){return Math.max(i,Math.min(e,t))}function Tp(i,e,t){return(1-t)*i+t*e}function Ap(i,e,t,n){return Tp(i,e,1-Math.exp(-t*n))}function Rp(i,e){return(i%e+e)%e}var Cp=class{constructor(){We(this,"isRunning",!1);We(this,"value",0);We(this,"from",0);We(this,"to",0);We(this,"currentTime",0);We(this,"lerp");We(this,"duration");We(this,"easing");We(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Pf(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Ap(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Pp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Lp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){We(this,"width",0);We(this,"height",0);We(this,"scrollHeight",0);We(this,"scrollWidth",0);We(this,"debouncedResize");We(this,"wrapperResizeObserver");We(this,"contentResizeObserver");We(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});We(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});We(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Pp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Lf=class{constructor(){We(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,s=t.length;r<s;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Dp=100/6,rr={passive:!1};function Vu(i,e){return i===1?Dp:i===2?e:1}var Ip=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){We(this,"touchStart",{x:0,y:0});We(this,"lastDelta",{x:0,y:0});We(this,"window",{width:0,height:0});We(this,"emitter",new Lf);We(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});We(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});We(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});We(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Vu(n,this.window.width),s=Vu(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});We(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rr),this.element.addEventListener("touchstart",this.onTouchStart,rr),this.element.addEventListener("touchmove",this.onTouchMove,rr),this.element.addEventListener("touchend",this.onTouchEnd,rr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rr),this.element.removeEventListener("touchstart",this.onTouchStart,rr),this.element.removeEventListener("touchmove",this.onTouchMove,rr),this.element.removeEventListener("touchend",this.onTouchEnd,rr)}};const Gu=i=>Math.min(1,1.001-2**(-10*i));var Up=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:E=!0,autoRaf:y=!1,anchors:S=!1,autoToggle:P=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:C=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){We(this,"_isScrolling",!1);We(this,"_isStopped",!1);We(this,"_isLocked",!1);We(this,"_preventNextNativeScrollEvent",!1);We(this,"_resetVelocityTimeout",null);We(this,"_rafId",null);We(this,"_isDraggingSelection",!1);We(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));We(this,"isTouching");We(this,"isIos");We(this,"time",0);We(this,"userData",{});We(this,"lastVelocity",0);We(this,"velocity",0);We(this,"direction",0);We(this,"options");We(this,"targetScroll");We(this,"animatedScroll");We(this,"animate",new Cp);We(this,"emitter",new Lf);We(this,"dimensions");We(this,"virtualScroll");We(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});We(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});We(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});We(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});We(this,"onPointerDown",i=>{i.button===1&&this.reset()});We(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,m,p,E,y;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((E=v.hasAttribute)==null?void 0:E.call(v,"data-lenis-prevent-touch"))||s&&((y=v.hasAttribute)==null?void 0:y.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});We(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});We(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Hu,window.lenis||(window.lenis={}),window.lenis.version=Hu,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Gu:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:_,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:p,overscroll:E,autoRaf:y,anchors:S,autoToggle:P,allowNestedScroll:D,naiveDimensions:C,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Lp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ip(t,{touchMultiplier:_,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=i,_=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),E=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(y)?0:y)}}if(typeof d=="number"){if(d+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=Pf(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Gu:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,d,_,v;if(n-(r.time??0)>2e3){r.time=Date.now();const D=window.getComputedStyle(i);if(r.computedStyle=D,s=["auto","overlay","scroll"].includes(D.overflowX),o=["auto","overlay","scroll"].includes(D.overflowY),c=["auto"].includes(D.overscrollBehaviorX),u=["auto"].includes(D.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,d=i.scrollHeight,_=i.clientWidth,v=i.clientHeight,a=f>_,l=d>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=_,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,_=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,E,y,S,P;if(g==="horizontal")m=Math.round(i.scrollLeft),p=f-_,E=e,y=s,S=a,P=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=d-v,E=t,y=o,S=l,P=u;else return!1;return!P&&(m>=p||m<=0)?!0:(E>0?m<p:m>0)&&y&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Rp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function Xi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Df(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},jc,on,Ft,ai=1e8,At=1/ai,Jl=Math.PI*2,Np=Jl/4,Fp=0,If=Math.sqrt,Op=Math.cos,zp=Math.sin,Qt=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Jc=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},In=function(e){return e!==!1},Qc=function(){return typeof window<"u"},$o=function(e){return Gt(e)||Qt(e)},Uf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Bp=/random\([^)]+\)/g,kp=/,\s*/g,Wu=/(?:-?\.?\d|\.)+/gi,Nf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ff=/[+-]=-?[.\d]+/,Hp=/[^,'"\[\]\s]+/gi,Vp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ai,Ql,eu,Jn={},Fa={},Of,zf=function(e){return(Fa=ks(e,Jn))&&zn},tu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lo=function(e,t){return!t&&console.warn(e)},Bf=function(e,t){return e&&(Jn[e]=t)&&Fa&&(Fa[e]=t)||Jn},Do=function(){return 0},Gp={suppressEvents:!0,isStart:!0,kill:!1},ba={suppressEvents:!0,kill:!1},Wp={suppressEvents:!0},nu={},xr=[],ec={},kf,Gn={},ll={},Xu=30,Ta=[],iu="",ru=function(e){var t=e[0],n,r;if(Ui(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ta.length;r--&&!Ta[r].targetTest(t););n=Ta[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ld(e[r],n)))||e.splice(r,1);return e},Jr=function(e){return e._gsap||ru(li(e))[0]._gsap},Hf=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():Jc(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Xp=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Oa=function(){var e=xr.length,t=xr.slice(0),n,r;for(ec={},xr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},su=function(e){return!!(e._initted||e._startAt||e.add)},Vf=function(e,t,n,r){xr.length&&!on&&Oa(),e.render(t,n,!!(on&&t<0&&su(e))),xr.length&&!on&&Oa()},Gf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hp).length<2?t:Qt(e)?e.trim():e},Wf=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qp=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ks=function(e,t){for(var n in t)e[n]=t[n];return e},qu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},za=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},yo=function(e){var t=e.parent||Bt,n=e.keyframes?qp(Sn(e.keyframes)):Qn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yp=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Xf=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Za=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Zp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tc=function(e,t,n,r){return e._startAt&&(on?e._startAt.revert(ba):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$p=function i(e){return!e||e._ts&&i(e.parent)},Yu=function(e){return e._repeat?Hs(e._tTime,e=e.duration()+e._rDelay)*e:0},Hs=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Ba=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$a=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Ka=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$a(e),n._dirty||Qr(n,e)),e},qf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ba(e.rawTime(),t),(!t._dur||Ho(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ci=function(e,t,n,r){return t.parent&&Mr(t),t._start=zt((ji(n)?n:n||e!==Bt?ri(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xf(e,t,"_first","_last",e._sort?"_start":0),nc(t)||(e._recent=t),r||qf(e,t),e._ts<0&&Ka(e,e._tTime),e},Yf=function(e,t){return(Jn.ScrollTrigger||tu("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},Zf=function(e,t,n,r,s){if(au(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kf!==Wn.frame)return xr.push(e),e._lazy=[s,r],1},Kp=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},nc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jp=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Kp(e)&&!(!e._initted&&nc(e))||(e._ts<0||e._dp._ts<0)&&!nc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ho(0,e._tDur,t),u=Hs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Hs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||on||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&Zf(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&tc(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Mr(e,1),!n&&!on&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Jp=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Vs=function(e,t,n,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ka(e,e._tTime=e._tDur*a),e.parent&&$a(e),n||Qr(e.parent,e),e},Zu=function(e){return e instanceof Ln?Qr(e):Vs(e,e._dur)},Qp={_start:0,endTime:Do,totalDuration:Do},ri=function i(e,t,n){var r=e.labels,s=e._recent||Qp,o=e.duration()>=ai?s.endTime(!1):e._dur,a,l,c;return Qt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Mo=function(e,t,n){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Tr=function(e,t){return e||e===0?t(e):t},Ho=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!Qt(e)||!(t=Vp.exec(e))?"":t[1]},em=function(e,t,n){return Tr(n,function(r){return Ho(e,t,r)})},ic=[].slice,$f=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==Ai},tm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Qt(r)&&!t||$f(r,1)?(s=n).push.apply(s,li(r)):n.push(r)})||n},li=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):Qt(e)&&!n&&(Ql||!Gs())?ic.call((t||eu).querySelectorAll(e),0):Sn(e)?tm(e,n):$f(e)?ic.call(e,0):e?[e]:[]},rc=function(e){return e=li(e)[0]||Lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Lo("Invalid scope")||eu.createElement("div"):e)}},Kf=function(e){return e.sort(function(){return .5-Math.random()})},jf=function(e){if(Gt(e))return e;var t=Ui(e)?e:{each:e},n=es(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Qt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,_,v){var g=(v||t).length,m=o[g],p,E,y,S,P,D,A,C,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ai])[1],!w){for(A=-ai;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=o[g]=[],p=l?Math.min(w,g)*u-.5:r%w,E=w===ai?0:l?g*f/w-.5:r/w|0,A=0,C=ai,D=0;D<g;D++)y=D%w-p,S=E-(D/w|0),m[D]=P=c?Math.abs(c==="y"?S:y):If(y*y+S*S),P>A&&(A=P),P<C&&(C=P);r==="random"&&Kf(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=vn(t.amount||t.each)||0,n=n&&g<0?pm(n):n}return g=(m[d]-m.min)/m.max||0,zt(m.b+(n?n(g):g)*m.v)+m.u}},sc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ji(n)?0:vn(n))}},Jf=function(e,t){var n=Sn(e),r,s;return!n&&Ui(e)&&(r=n=e.radius||ai,e.values?(e=li(e.values),(s=!ji(e[0]))&&(r*=r)):e=sc(e.increment)),Tr(t,n?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ai,u=0,f=e.length,d,_;f--;)s?(d=e[f].x-a,_=e[f].y-l,d=d*d+_*_):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ji(o)?u:u+vn(o)}:sc(e))},Qf=function(e,t,n,r){return Tr(Sn(e)?!t:n===!0?!!(n=0):!r,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},nm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},im=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},rm=function(e,t,n){return td(e,t,0,1,n)},ed=function(e,t,n){return Tr(n,function(r){return e[~~t(r)]})},sm=function i(e,t,n){var r=t-e;return Sn(e)?ed(e,i(0,e.length),t):Tr(n,function(s){return(r+(s-e)%r)%r+e})},om=function i(e,t,n){var r=t-e,s=r*2;return Sn(e)?ed(e,i(0,e.length-1),t):Tr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Io=function(e){return e.replace(Bp,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(kp);return Qf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},td=function(e,t,n,r,s){var o=t-e,a=r-n;return Tr(s,function(l){return n+((l-e)/o*a||0)})},am=function i(e,t,n,r){var s=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!s){var o=Qt(e),a={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else r||(e=ks(Sn(e)?[]:{},e));if(!u){for(l in t)ou.call(a,e,l,"get",t[l]);s=function(v){return uu(v,a)||(o?e.p:e)}}}return Tr(n,s)},$u=function(e,t,n){var r=e.labels,s=ai,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&xr.length&&Oa(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},go=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&qn(e,"onInterrupt"),e},Cs,nd=[],id=function(e){if(e)if(e=!e.name&&e.default||e,Qc()||e.headless){var t=e.name,n=Gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Do,render:uu,add:ou,kill:Em,modifier:wm,rawVars:0},o={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(Gs(),e!==r){if(Gn[t])return;Qn(r,Qn(za(e,s),o)),ks(r.prototype,ks(s,za(e,o))),Gn[r.prop=t]=r,e.targetTest&&(Ta.push(r),nu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bf(t,r),e.register&&e.register(zn,r,Nn)}else nd.push(e)},Tt=255,vo={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},cl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},rd=function(e,t,n){var r=e?ji(e)?[e>>16,e>>8&Tt,e&Tt]:0:vo.black,s,o,a,l,c,u,f,d,_,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])r=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Wu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=cl(l+1/3,s,o),r[1]=cl(l,s,o),r[2]=cl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Nf),n&&r.length<4&&(r[3]=1),r}else r=e.match(Wu)||vo.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(_=f-d,c=u>.5?_/(2-f-d):_/(f+d),l=f===s?(o-a)/_+(o<a?6:0):f===o?(a-s)/_+2:(s-o)/_+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},sd=function(e){var t=[],n=[],r=-1;return e.split(Sr).forEach(function(s){var o=s.match(Rs)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ku=function(e,t,n){var r="",s=(e+r).match(Sr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=rd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=sd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Sr,"1").split(Rs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Sr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Sr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),lm=/hsl[a]?\(/,od=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=lm.test(t),e[1]=Ku(e[1],n),e[0]=Ku(e[0],n,sd(e[1])),!0},Uo,Wn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,d,_,v=function g(m){var p=i()-r,E=m===!0,y,S,P,D;if((p>e||p<0)&&(n+=p-t),r+=p,P=r-n,y=P-o,(y>0||E)&&(D=++f.frame,d=P-f.time*1e3,f.time=P=P/1e3,o+=y+(y>=s?4:s-y),S=1),E||(l=c(g)),S)for(_=0;_<a.length;_++)a[_](P,d,D,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Of&&(!Ql&&Qc()&&(Ai=Ql=window,eu=Ai.document||{},Jn.gsap=zn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(zn.version),zf(Fa||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),nd.forEach(id)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Uo=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Do},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,E){var y=p?function(S,P,D,A){m(S,P,D,A),f.remove(y)}:m;return f.remove(m),a[E?"unshift":"push"](y),Gs(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&_>=p&&_--},_listeners:a},f})(),Gs=function(){return!Uo&&Wn.wake()},gt={},cm=/^[\d.\-M][\d.\-,\s]/,um=/["']/g,hm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(um,"").trim():+c,r=l.substr(a+1).trim();return t},fm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},dm=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hm(t[1])]:fm(e).split(",").map(Gf)):gt._CE&&cm.test(e)?gt._CE("",e):n},pm=function(e){return function(t){return 1-e(1-t)}},es=function(e,t){return e&&(Gt(e)?e:gt[e]||dm(e))||t},ss=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Un(e,function(a){gt[a]=Jn[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},ad=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ul=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Jl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*zp((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ad(a);return s=Jl/s,l.config=function(c,u){return i(e,c,u)},l},hl=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ad(n);return r.config=function(s){return i(e,s)},r};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ss(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;ss("Elastic",ul("in"),ul("out"),ul());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ss("Circ",function(i){return-(If(1-i*i)-1)});ss("Sine",function(i){return i===1?1:-Op(i*Np)+1});ss("Back",hl("in"),hl("out"),hl());gt.SteppedEase=gt.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*Ho(0,o,a)|0)+s)*n}}};Po.ease=gt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return iu+=i+","+i+"Params,"});var ld=function(e,t){this.id=Fp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Hf,this.set=t?t.getSetter:cu},No=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Uo||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ka(this,n),!s._dp||s.parent||qf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Hs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Ho(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),$a(this),Zp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ci(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Wp);var r=on;return on=n,su(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Zu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ri(this,n),In(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,In(r)),this._dur||(this._zTime=-At),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(n)?n:Wf,l=function(){var u=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){go(this)},i})();Qn(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Ln=(function(i){Df(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Bt&&Ci(n.parent||Bt,Xi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yf(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Mo(0,arguments,this),this},t.from=function(r,s,o){return Mo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Mo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,yo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,ri(this,o),1),this},t.call=function(r,s,o){return Ci(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(r,o,ri(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,yo(o).immediateRender=In(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,yo(a).immediateRender=In(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:zt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,_,v,g,m,p,E,y,S,P,D,A;if(this!==Bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=zt(u%m),u===l?(g=this._repeat,d=c):(P=zt(u/m),g=~~P,g&&g===P&&(d=c,g--),d>c&&(d=c)),P=Hs(this._tTime,m),!a&&this._tTime&&P!==g&&this._tTime-P*m-this._dur<=0&&(P=g),D&&g&1&&(d=c-d,A=1),g!==P&&!this._lock){var C=D&&P&1,w=C===(D&&g&1);if(g<P&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(A?0:zt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,P=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Jp(this,zt(a),zt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!P&&(qn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(_=this._first;_;){if(v=_._next,(_._act||d>=_._start)&&_._ts&&E!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(d-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(d-_._start)*_._ts,s,o),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=-At);break}}_=v}else{_=this._last;for(var M=r<0?r:d;_;){if(v=_._prev,(_._act||M<=_._end)&&_._ts&&E!==_){if(_.parent!==this)return this.render(r,s,o);if(_.render(_._ts>0?(M-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(M-_._start)*_._ts,s,o||on&&su(_)),d!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=M?-At:At);break}}_=v}}if(E&&!s&&(this.pause(),E.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=S,$a(this),this.render(r,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ji(s)||(s=ri(this,s,r)),!(r instanceof No)){if(Sn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Qt(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?Ci(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Qt(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Za(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ri(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,Ci(this,a,ri(this,r))},t.removePause=function(r){var s=this._first;for(r=ri(this,r);s;)s._start===r&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_r!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=li(r),l=this._first,c=ji(s),u;l;)l instanceof Zt?Xp(l._targets,a)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ri(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,_,v=Zt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!_){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&Vs(v,m,0,1).render(v._time,!0,!0),_=1}u&&u.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qn({startAt:{time:ri(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),$u(this,ri(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),$u(this,ri(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=zt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Qr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ai,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(Vf(Bt,Ba(r,Bt)),kf=Wn.frame),Wn.frame>=Xu){Xu+=Kn.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Kn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e})(No);Qn(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var mm=function(e,t,n,r,s,o,a){var l=new Nn(this._pt,e,t,0,1,pd,null,s),c=0,u=0,f,d,_,v,g,m,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Io(r)),o&&(E=[n,r],o(E,e,t),n=E[0],r=E[1]),d=n.match(al)||[];f=al.exec(r);)v=f[0],g=r.substring(c,f.index),_?_=(_+1)%5:g.substr(-5)==="rgba("&&(_=1),v!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?Ds(m,v)-m:parseFloat(v)-m,m:_&&_<4?Math.round:0},c=al.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Ff.test(r)||p)&&(l.e=0),this._pt=l,l},ou=function(e,t,n,r,s,o,a,l,c,u){Gt(r)&&(r=r(s||0,e,o));var f=e[t],d=n!=="get"?n:Gt(f)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,_=Gt(f)?c?Sm:fd:lu,v;if(Qt(r)&&(~r.indexOf("random(")&&(r=Io(r)),r.charAt(1)==="="&&(v=Ds(d,r)+(vn(d)||0),(v||v===0)&&(r=v))),!u||d!==r||oc)return!isNaN(d*r)&&r!==""?(v=new Nn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?Mm:dd,0,_),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&tu(t,r),mm.call(this,e,t,d,r,_,l||Kn.stringFilter,c))},_m=function(e,t,n,r,s){if(Gt(e)&&(e=wo(e,s,t,n,r)),!Ui(e)||e.style&&e.nodeType||Sn(e)||Uf(e))return Qt(e)?wo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=wo(e[a],s,t,n,r);return o},cd=function(e,t,n,r,s,o){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:_m(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},_r,oc,au=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,_=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!jc,S=e.timeline,P=r.easeReverse||f,D,A,C,w,M,U,z,O,X,Y,q,W,B;if(S&&(!d||!s)&&(s="none"),e._ease=es(s,Po.ease),e._rEase=P&&(es(P)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(O=m[0]?Jr(m[0]).harness:0,W=O&&r[O.prop],D=za(r,nu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!_?g.render(-1,!0):g.revert(u&&v?ba:Gp),g._lazy=0),o){if(Mr(e._startAt=Zt.set(m,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!_)&&e._startAt.revert(ba),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),C=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},D),W&&(C[O.prop]=W),Mr(e._startAt=Zt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(ba):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&In(l)||l&&!v,A=0;A<m.length;A++){if(M=m[A],z=M._gsap||ru(m)[A]._gsap,e._ptLookup[A]=Y={},ec[z.id]&&xr.length&&Oa(),q=E===m?A:E.indexOf(M),O&&(X=new O).init(M,W||D,e,q,E)!==!1&&(e._pt=w=new Nn(e._pt,M,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(ce){Y[ce]=w}),X.priority&&(U=1)),!O||W)for(C in D)Gn[C]&&(X=cd(C,D,e,q,M,E))?X.priority&&(U=1):Y[C]=w=ou.call(e,M,C,"get",D[C],q,E,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),y&&e._pt&&(_r=e,Bt.killTweensOf(M,Y,e.globalTime(t)),B=!e.parent,_r=0),e._pt&&l&&(ec[z.id]=1)}U&&md(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,d&&t<=0&&S.render(ai,!0,!0)},gm=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,_;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,_=e._targets.length;_--;){if(u=d[_][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return oc=1,e.vars[t]="+=0",au(e,a),oc=0,l?Lo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(_=c.length;_--;)f=c[_],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Wt(n)+vn(f.e)),f.b&&(f.b=u.s+vn(f.b))},vm=function(e,t){var n=e[0]?Jr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=ks({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xm=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wo=function(e,t,n,r,s){return Gt(e)?e.call(t,n,r,s):Qt(e)&&~e.indexOf("random(")?Io(e):e},ud=iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hd={};Un(ud+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return hd[i]=1});var Zt=(function(i){Df(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:yo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,_=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||Bt,E=(Sn(n)||Uf(n)?ji(n[0]):"length"in r)?[n]:li(n),y,S,P,D,A,C,w,M;if(a._targets=E.length?ru(E):Lo("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=_,v||d||$o(c)||$o(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(y=a.timeline=new Ln({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:E}),y.kill(),y.parent=y._dp=Xi(a),y._start=0,d||$o(c)||$o(u)){if(D=E.length,w=d&&jf(d),Ui(d))for(A in d)~ud.indexOf(A)&&(M||(M={}),M[A]=d[A]);for(S=0;S<D;S++)P=za(r,hd),P.stagger=0,U&&(P.easeReverse=U),M&&ks(P,M),C=E[S],P.duration=+wo(c,Xi(a),S,C,E),P.delay=(+wo(u,Xi(a),S,C,E)||0)-a._delay,!d&&D===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),y.to(C,P,w?w(S,C,E):0),y._ease=gt.none;y.duration()?c=u=0:a.timeline=0}else if(v){yo(Qn(y.vars.defaults,{ease:"none"})),y._ease=es(v.ease||r.ease||"none");var z=0,O,X,Y;if(Sn(v))v.forEach(function(q){return y.to(E,q,">")}),y.duration();else{P={};for(A in v)A==="ease"||A==="easeEach"||xm(A,v[A],P,v.easeEach);for(A in P)for(O=P[A].sort(function(q,W){return q.t-W.t}),z=0,S=0;S<O.length;S++)X=O[S],Y={ease:X.e,duration:(X.t-(S?O[S-1].t:0))/100*c},Y[A]=X.v,y.to(E,Y,z),z+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return _===!0&&!jc&&(_r=Xi(a),Bt.killTweensOf(E),_r=0),Ci(p,Xi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===zt(p._time)&&In(f)&&$p(Xi(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),m&&Yf(Xi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-At&&!u?l:r<At?0:r,d,_,v,g,m,p,E,y;if(!c)jp(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=zt(f%g),f===l?(v=this._repeat,d=c):(m=zt(f/g),v=~~m,v&&v===m?(d=c,v--):d>c&&(d=c)),p=this._yoyo&&v&1,p&&(d=c-d),m=Hs(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(zt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Zf(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var P=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(S?-1:1)/P:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(d/c);if(this._from&&(this.ratio=E=1-E),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(qn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(E,_.d),_=_._next;y&&y.render(r<0?r:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&tc(this,r,s,o),qn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&tc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Mr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Uo||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||au(this,c),u=this._ease(c/this._dur),gm(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ka(this,0),this.parent||Xf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_r&&_r.vars.overwrite!==!0)._first||go(this),this.parent&&o!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?li(r):a,c=this._ptLookup,u=this._pt,f,d,_,v,g,m,p;if((!s||s==="all")&&Yp(a,l))return s==="all"&&(this._pt=0),go(this);for(f=this._op=this._op||[],s!=="all"&&(Qt(s)&&(g={},Un(s,function(E){return g[E]=1}),s=g),s=vm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,v=d,_={}):(_=f[p]=f[p]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Za(this,m,"_pt"),delete d[g]),_!=="all"&&(_[g]=1)}return this._initted&&!this._pt&&u&&go(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Mo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Mo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e})(No);Qn(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var e=new Ln,t=ic.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var lu=function(e,t,n){return e[t]=n},fd=function(e,t,n){return e[t](n)},Sm=function(e,t,n,r){return e[t](r.fp,n)},ym=function(e,t,n){return e.setAttribute(t,n)},cu=function(e,t){return Gt(e[t])?fd:Jc(e[t])&&e.setAttribute?ym:lu},dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},uu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wm=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Em=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Za(this,t,"_pt"):t.dep||(n=1),t=r;return!n},bm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},md=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Nn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||dd,this.d=l||this,this.set=c||lu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=bm,this.m=n,this.mt=s,this.tween=r},i})();Un(iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return nu[i]=1});Jn.TweenMax=Jn.TweenLite=Zt;Jn.TimelineLite=Jn.TimelineMax=Ln;Bt=new Ln({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=od;var ts=[],Aa={},Tm=[],ju=0,Am=0,fl=function(e){return(Aa[e]||Tm).map(function(t){return t()})},ac=function(){var e=Date.now(),t=[];e-ju>2&&(fl("matchMediaInit"),ts.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ju=e,fl("matchMedia"))},_d=(function(){function i(t,n){this.selector=n&&rc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Am++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Gt(n)&&(s=r,r=n,n=Gt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=rc(s)),Ft=o,f=r.apply(o,arguments),Gt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Rm=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ui(n)||(n={matches:n});var o=new _d(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ai.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ac):l.addEventListener("change",ac)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),ka={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return id(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Qt(e)&&(e=li(e)[0]);var s=Jr(e||{}).get,o=n?Wf:Gf;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var r=e.map(function(u){return zn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Gn[t],a=Jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Cs._pt=0,f.init(e,n?u+n:u,Cs,0,[e]),f.render(1,f),Cs._pt&&uu(1,Cs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=zn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Po.ease)),qu(Po,e||{})},config:function(e){return qu(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Jn[a]&&Lo(t+" effect requires "+a+" plugin.")}),ll[t]=function(a,l,c){return n(li(a),Qn(l||{},s),c)},o&&(Ln.prototype[t]=function(a,l,c){return this.add(ll[t](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):gt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),r,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&Ci(n,r,r._start-r._delay),r=s;return Ci(Bt,n,0),n},context:function(e,t){return e?new _d(e,t):Ft},matchMedia:function(e){return new Rm(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ac()},addEventListener:function(e,t){var n=Aa[e]||(Aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Aa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:sm,wrapYoyo:om,distribute:jf,random:Qf,snap:Jf,normalize:rm,getUnit:vn,clamp:em,splitColor:rd,toArray:li,selector:rc,mapRange:td,pipe:nm,unitize:im,interpolate:am,shuffle:Kf},install:zf,effects:ll,ticker:Wn,updateRoot:Ln.updateRoot,plugins:Gn,globalTimeline:Bt,core:{PropTween:Nn,globals:Bf,Tween:Zt,Timeline:Ln,Animation:No,getCache:Jr,_removeLinkedListItem:Za,reverting:function(){return on},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return jc=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ka[i]=Zt[i]});Wn.add(Ln.updateRoot);Cs=ka.to({},{duration:0});var Cm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pm=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Cm(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},dl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Qt(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Pm(a,s)}}}},zn=ka.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dl("roundProps",sc),dl("modifiers"),dl("snap",Jf))||ka;Zt.version=Ln.version=zn.version="3.15.0";Of=1;Qc()&&Gs();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ju,gr,Is,hu,$r,Qu,fu,Lm=function(){return typeof window<"u"},Ji={},Gr=180/Math.PI,Us=Math.PI/180,fs=Math.atan2,eh=1e8,du=/([A-Z])/g,Dm=/(left|right|width|margin|padding|x)/i,Im=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Um=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Om=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zm=function(e,t,n){return e.style[t]=n},Bm=function(e,t,n){return e.style.setProperty(t,n)},km=function(e,t,n){return e._gsap[t]=n},Hm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Vm=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Gm=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Fn=Ht+"Origin",Wm=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qi(r,a)}):this.tfm[e]=o.x?o[e]:qi(r,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},xd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xm=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(du,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fu(),(!s||!s.isStart)&&!n[Ht]&&(xd(n),r.zOrigin&&n[Fn]&&(n[Fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Sd=function(e,t){var n={target:e,props:[],revert:Xm,save:Wm};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},yd,cc=function(e,t){var n=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return n&&n.style?n:gr.createElement(e)},Yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(du,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ws(t)||t,1)||""},th="O,Moz,ms,Ms,Webkit".split(","),Ws=function(e,t,n){var r=t||$r,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(th[o]+e in s););return o<0?null:(o===3?"ms":o>=0?th[o]:"")+e},uc=function(){Lm()&&window.document&&(Ju=window,gr=Ju.document,Is=gr.documentElement,$r=cc("div")||{style:{}},cc("div"),Ht=Ws(Ht),Fn=Ht+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yd=!!Ws("perspective"),fu=zn.core.reverting,hu=1)},nh=function(e){var t=e.ownerSVGElement,n=cc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Is.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Is.removeChild(n),s},ih=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Md=function(e){var t,n;try{t=e.getBBox()}catch{t=nh(e),n=1}return t&&(t.width||t.height)||n||(t=nh(e)),t&&!t.width&&!t.x&&!t.y?{x:+ih(e,["x","cx","x1"])||0,y:+ih(e,["y","cy","y1"])||0,width:0,height:0}:t},wd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Md(e))},wr=function(e,t){if(t){var n=e.style,r;t in Ji&&t!==Fn&&(t=Ht),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(du,"-$1").toLowerCase())):n.removeAttribute(t)}},vr=function(e,t,n,r,s,o){var a=new Nn(e._pt,t,n,0,1,o?vd:gd);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},rh={deg:1,rad:1,turn:1},qm={grid:1,flex:1},Er=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=$r.style,l=Dm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",_=r==="%",v,g,m,p;if(r===o||!s||rh[r]||rh[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&wd(e),(_||o==="%")&&(Ji[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Wt(_?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),m=g._gsap,m&&_&&m.width&&l&&m.time===Wn.time&&!m.uncache)return Wt(s/m.width*f);if(_&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,v=e[u],E?e.style[t]=E:wr(e,t)}else(_||o==="%")&&!qm[Yn(g,"display")]&&(a.position=Yn(e,"position")),g===e&&(a.position="static"),g.appendChild($r),v=$r[u],g.removeChild($r),a.position="absolute";return l&&_&&(m=Jr(g),m.time=Wn.time,m.width=g[u]),Wt(d?v*s/f:v&&s?f/v*s:0)},qi=function(e,t,n,r){var s;return hu||uc(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Oo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Va(Yn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ha[t]&&Ha[t](e,t,n)||Yn(e,t)||Hf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},Ym=function(e,t,n,r){if(!n||n==="none"){var s=Ws(t,e,1),o=s&&Yn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,pd),l=0,c=0,u,f,d,_,v,g,m,p,E,y,S,P;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yn(e,t)||r,g?e.style[t]=g:wr(e,t)),u=[n,r],od(u),n=u[0],r=u[1],d=n.match(Rs)||[],P=r.match(Rs)||[],P.length){for(;f=Rs.exec(r);)m=f[0],E=r.substring(l,f.index),v?v=(v+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(v=1),m!==(g=d[c++]||"")&&(_=parseFloat(g)||0,S=g.substr((_+"").length),m.charAt(1)==="="&&(m=Ds(_,m)+S),p=parseFloat(m),y=m.substr((p+"").length),l=Rs.lastIndex-y.length,y||(y=y||Kn.units[t]||S,l===r.length&&(r+=y,a.e+=y)),S!==y&&(_=Er(e,t,g,y)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:_,c:p-_,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vd:gd;return Ff.test(r)&&(a.e=0),this._pt=a,a},sh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zm=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=sh[n]||n,t[1]=sh[r]||r,t.join(" ")},$m=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?Fn:Ht),wr(n,a);l&&(wr(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Oo(n,1),o.uncache=1,xd(r)))}},Ha={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,$m);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Fo=[1,0,0,1,0,0],Ed={},bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},oh=function(e){var t=Yn(e,Ht);return bd(t)?Fo:t.substr(7).match(Nf).map(Wt)},pu=function(e,t){var n=e._gsap||Jr(e),r=e.style,s=oh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fo:s):(s===Fo&&!e.offsetParent&&e!==Is&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Is.appendChild(e)),s=oh(e),l?r.display=l:wr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hc=function(e,t,n,r,s,o){var a=e._gsap,l=s||pu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,_=l[0],v=l[1],g=l[2],m=l[3],p=l[4],E=l[5],y=t.split(" "),S=parseFloat(y[0])||0,P=parseFloat(y[1])||0,D,A,C,w;n?l!==Fo&&(A=_*m-v*g)&&(C=S*(m/A)+P*(-g/A)+(g*E-m*p)/A,w=S*(-v/A)+P*(_/A)-(_*E-v*p)/A,S=C,P=w):(D=Md(e),S=D.x+(~y[0].indexOf("%")?S/100*D.width:S),P=D.y+(~(y[1]||y[0]).indexOf("%")?P/100*D.height:P)),r||r!==!1&&a.smooth?(p=S-c,E=P-u,a.xOffset=f+(p*_+E*g)-p,a.yOffset=d+(p*v+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(vr(o,a,"xOrigin",c,S),vr(o,a,"yOrigin",u,P),vr(o,a,"xOffset",f,a.xOffset),vr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+P)},Oo=function(e,t){var n=e._gsap||new ld(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Yn(e,Fn)||"0",u,f,d,_,v,g,m,p,E,y,S,P,D,A,C,w,M,U,z,O,X,Y,q,W,B,ce,J,he,ye,Be,j,se;return u=f=d=g=m=p=E=y=S=0,_=v=1,n.svg=!!(e.getCTM&&wd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),r.scale=r.rotate=r.translate="none"),A=pu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),hc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,A)),P=n.xOrigin||0,D=n.yOrigin||0,A!==Fo&&(U=A[0],z=A[1],O=A[2],X=A[3],u=Y=A[4],f=q=A[5],A.length===6?(_=Math.sqrt(U*U+z*z),v=Math.sqrt(X*X+O*O),g=U||z?fs(z,U)*Gr:0,E=O||X?fs(O,X)*Gr+g:0,E&&(v*=Math.abs(Math.cos(E*Us))),n.svg&&(u-=P-(P*U+D*O),f-=D-(P*z+D*X))):(se=A[6],Be=A[7],J=A[8],he=A[9],ye=A[10],j=A[11],u=A[12],f=A[13],d=A[14],C=fs(se,ye),m=C*Gr,C&&(w=Math.cos(-C),M=Math.sin(-C),W=Y*w+J*M,B=q*w+he*M,ce=se*w+ye*M,J=Y*-M+J*w,he=q*-M+he*w,ye=se*-M+ye*w,j=Be*-M+j*w,Y=W,q=B,se=ce),C=fs(-O,ye),p=C*Gr,C&&(w=Math.cos(-C),M=Math.sin(-C),W=U*w-J*M,B=z*w-he*M,ce=O*w-ye*M,j=X*M+j*w,U=W,z=B,O=ce),C=fs(z,U),g=C*Gr,C&&(w=Math.cos(C),M=Math.sin(C),W=U*w+z*M,B=Y*w+q*M,z=z*w-U*M,q=q*w-Y*M,U=W,Y=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),_=Wt(Math.sqrt(U*U+z*z+O*O)),v=Wt(Math.sqrt(q*q+se*se)),C=fs(Y,q),E=Math.abs(C)>2e-4?C*Gr:0,S=j?1/(j<0?-j:j):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bd(Yn(e,Ht)),W&&e.setAttribute("transform",W))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(_*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Wt(_),n.scaleY=Wt(v),n.rotation=Wt(g)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(p)+a,n.skewX=E+a,n.skewY=y+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Fn]=Va(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?jm:yd?Td:Km,n.uncache=0,n},Va=function(e){return(e=e.split(" "))[0]+" "+e[1]},pl=function(e,t,n){var r=vn(t);return Wt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",r)))+r},Km=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Td(e,t)},Ir="0deg",so="0px",Ur=") ",Td=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,_=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,y=n.zOrigin,S="",P=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Ir||u!==Ir)){var D=parseFloat(u)*Us,A=Math.sin(D),C=Math.cos(D),w;D=parseFloat(f)*Us,w=Math.cos(D),o=pl(E,o,A*w*-y),a=pl(E,a,-Math.sin(D)*-y),l=pl(E,l,C*w*-y+y)}m!==so&&(S+="perspective("+m+Ur),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(P||o!==so||a!==so||l!==so)&&(S+=l!==so||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ur),c!==Ir&&(S+="rotate("+c+Ur),u!==Ir&&(S+="rotateY("+u+Ur),f!==Ir&&(S+="rotateX("+f+Ur),(d!==Ir||_!==Ir)&&(S+="skew("+d+", "+_+Ur),(v!==1||g!==1)&&(S+="scale("+v+", "+g+Ur),E.style[Ht]=S||"translate(0, 0)"},jm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,_=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,y=parseFloat(o),S=parseFloat(a),P,D,A,C,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,P=Math.cos(l)*f,D=Math.sin(l)*f,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Us,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,C*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),P*=w,D*=w)),P=Wt(P),D=Wt(D),A=Wt(A),C=Wt(C)):(P=f,C=d,D=A=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Er(_,"x",o,"px"),S=Er(_,"y",a,"px")),(v||g||m||p)&&(y=Wt(y+v-(v*P+g*A)+m),S=Wt(S+g-(v*D+g*C)+p)),(r||s)&&(w=_.getBBox(),y=Wt(y+r/100*w.width),S=Wt(S+s/100*w.height)),w="matrix("+P+","+D+","+A+","+C+","+y+","+S+")",_.setAttribute("transform",w),E&&(_.style[Ht]=w)},Jm=function(e,t,n,r,s){var o=360,a=Qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gr:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*eh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*eh)%o-~~(c/o)*o)),e._pt=d=new Nn(e._pt,t,n,r,c,Um),d.e=u,d.u="deg",e._props.push(n),d},ah=function(e,t){for(var n in t)e[n]=t[n];return e},Qm=function(e,t,n){var r=ah({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,_,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=Oo(n,1),wr(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=Oo(n,1),o[Ht]=c);for(l in Ji)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(_=vn(c),v=vn(u),f=_!==v?Er(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,a,l,f,d-f,lc),e._pt.u=v||0,e._props.push(l));ah(a,r)};Un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ha[e>1?"border"+i:i]=function(a,l,c,u,f){var d,_;if(arguments.length<4)return d=o.map(function(v){return qi(a,v,c)}),_=d.join(" "),_.split(d[0]).length===5?d[0]:_;d=(u+"").split(" "),_={},o.forEach(function(v,g){return _[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,_,f)}});var Ad={name:"css",register:uc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,_,v,g,m,p,E,y,S,P,D,A,C,w;hu||uc(),this.styles=this.styles||Sd(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&cd(g,t,n,r,e,s)))){if(_=typeof u,v=Ha[g],_==="function"&&(u=u.call(n,r,e,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=Io(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(m=vn(c),p=vn(u),p?m!==p&&(c=Er(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(_!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Qt(c)&&~c.indexOf("random(")&&(c=Io(c)),vn(c+"")||c==="auto"||(c+=Kn.units[g]||vn(qi(e,g))||""),(c+"").charAt(1)==="="&&(c=qi(e,g))):c=qi(e,g),d=parseFloat(c),E=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),g in Pi&&(g==="autoAlpha"&&(d===1&&qi(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),vr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Pi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ji,y){if(this.styles.save(g),w=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Yn(e,"perspective"),M?e.style.perspective=M:wr(e,"perspective")}f=parseFloat(u)}if(S||(P=e._gsap,P.renderTransform&&!t.parseTransform||Oo(e,t.parseTransform),D=t.smoothOrigin!==!1&&P.smooth,S=this._pt=new Nn(this._pt,a,Ht,0,1,P.renderTransform,P,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,P,"scaleY",P.scaleY,(E?Ds(P.scaleY,E+f):f)-P.scaleY||0,lc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Fn,0,a[Fn]),u=Zm(u),P.svg?hc(e,u,0,D,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&vr(this,P,"zOrigin",P.zOrigin,p),vr(this,a,g,Va(c),Va(u)));continue}else if(g==="svgOrigin"){hc(e,u,1,D,0,this);continue}else if(g in Ed){Jm(this,P,g,d,E?Ds(d,E+u):u);continue}else if(g==="smoothOrigin"){vr(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){Qm(this,u,e);continue}}else g in a||(g=Ws(g)||g);if(y||(f||f===0)&&(d||d===0)&&!Im.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=vn(u)||(g in Kn.units?Kn.units[g]:m),m!==p&&(d=Er(e,g,c,p)),this._pt=new Nn(this._pt,y?P:a,g,d,(E?Ds(d,E+f):f)-d,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Om:lc),this._pt.u=p||0,y&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=Fm):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Nm);else if(g in a)Ym.call(this,e,g,c,E?E+u:u);else if(g in e)this.add(e,g,c||e[g],E?E+u:u,r,s);else if(g!=="parseTransform"){tu(g,u);continue}y||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}A&&md(this)},render:function(e,t){if(t.tween._time||!fu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Pi,getSetter:function(e,t,n){var r=Pi[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==Fn&&(e._gsap.x||qi(e,"x"))?n&&Qu===n?t==="scale"?Hm:km:(Qu=n||{})&&(t==="scale"?Vm:Gm):e.style&&!Jc(e.style[t])?zm:~t.indexOf("-")?Bm:cu(e,t)},core:{_removeProperty:wr,_getMatrix:pu}};zn.utils.checkPrefix=Ws;zn.core.getStyleSaver=Sd;(function(i,e,t,n){var r=Un(i+","+e+","+t,function(s){Ji[s]=1});Un(e,function(s){Kn.units[s]="deg",Ed[s]=1}),Pi[r[13]]=i+","+e,Un(n,function(s){var o=s.split(":");Pi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Kn.units[i]="px"});zn.registerPlugin(Ad);var mu=zn.registerPlugin(Ad)||zn;mu.core.Tween;const Rd=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="170",e_=0,lh=1,t_=2,Cd=1,n_=2,Wi=3,br=0,On=1,En=2,xi=0,yr=1,ch=2,uh=3,hh=4,zo=5,bn=100,i_=101,r_=102,s_=103,o_=104,Ra=200,si=201,a_=202,l_=203,Ns=204,Fs=205,c_=206,u_=207,h_=208,f_=209,d_=210,p_=211,m_=212,__=213,g_=214,fc=0,dc=1,pc=2,Xs=3,mc=4,_c=5,gc=6,vc=7,Pd=0,v_=1,x_=2,Ii=0,S_=1,y_=2,M_=3,w_=4,E_=5,b_=6,T_=7,Ld=300,qs=301,Ys=302,xc=303,Sc=304,ja=306,Os=1e3,Zn=1001,Ga=1002,an=1003,A_=1004,Ko=1005,St=1006,ml=1007,Zi=1008,Ni=1009,Dd=1010,Id=1011,Zs=1012,gu=1013,rs=1014,$n=1015,Li=1016,vu=1017,xu=1018,$s=1020,Ud=35902,Nd=1021,Fd=1022,xn=1023,Od=1024,zd=1025,zs=1026,Ks=1027,Su=1028,yu=1029,Bd=1030,Mu=1031,wu=1033,Ca=33776,Pa=33777,La=33778,Da=33779,yc=35840,Mc=35841,wc=35842,Ec=35843,bc=36196,Tc=37492,Ac=37496,Rc=37808,Cc=37809,Pc=37810,Lc=37811,Dc=37812,Ic=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,zc=37818,Bc=37819,kc=37820,Hc=37821,Ia=36492,Vc=36494,Gc=36495,kd=36283,Wc=36284,Xc=36285,qc=36286,R_=3200,C_=3201,P_=0,L_=1,sn="",mn="srgb",Fi="srgb-linear",Ja="linear",bt="srgb",ds=7680,fh=519,D_=512,I_=513,U_=514,Hd=515,N_=516,F_=517,O_=518,z_=519,dh=35044,sr=35048,ph="300 es",$i=2e3,Wa=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const Eo=Math.PI/180,Bo=180/Math.PI;function Qs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Eu(i,e){return(i%e+e)%e}function B_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function k_(i,e,t){return i!==e?(t-i)/(e-i):0}function bo(i,e,t){return(1-t)*i+t*e}function H_(i,e,t,n){return bo(i,e,1-Math.exp(-t*n))}function V_(i,e=1){return e-Math.abs(Eu(i,e*2)-e)}function G_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function W_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function X_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function q_(i,e){return i+Math.random()*(e-i)}function Y_(i){return i*(.5-Math.random())}function Z_(i){i!==void 0&&(mh=i);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $_(i){return i*Eo}function K_(i){return i*Bo}function j_(i){return(i&i-1)===0&&i!==0}function J_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Q_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function e0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),_=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*_,a*c);break;case"YXY":i.set(l*_,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*_,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function As(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Eo,RAD2DEG:Bo,generateUUID:Qs,clamp:gn,euclideanModulo:Eu,mapLinear:B_,inverseLerp:k_,lerp:bo,damp:H_,pingpong:V_,smoothstep:G_,smootherstep:W_,randInt:X_,randFloat:q_,randFloatSpread:Y_,seededRandom:Z_,degToRad:$_,radToDeg:K_,isPowerOfTwo:j_,ceilPowerOfTwo:J_,floorPowerOfTwo:Q_,setQuaternionFromProperEuler:e0,normalize:Mn,denormalize:As};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,r,s,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],_=n[5],v=n[8],g=r[0],m=r[3],p=r[6],E=r[1],y=r[4],S=r[7],P=r[2],D=r[5],A=r[8];return s[0]=o*g+a*E+l*P,s[3]=o*m+a*y+l*D,s[6]=o*p+a*S+l*A,s[1]=c*g+u*E+f*P,s[4]=c*m+u*y+f*D,s[7]=c*p+u*S+f*A,s[2]=d*g+_*E+v*P,s[5]=d*m+_*y+v*D,s[8]=d*p+_*S+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,_=c*s-o*l,v=t*f+n*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=_*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new ct;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function t0(){const i=ko("canvas");return i.style.display="block",i}const _h={};function xo(i){i in _h||(_h[i]=!0,console.warn(i))}function n0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function i0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sn?Ja:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],xh=[.3127,.329],Sh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Fi]:{primaries:gh,whitePoint:xh,transfer:Ja,toXYZ:Sh,fromXYZ:yh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:gh,whitePoint:xh,transfer:bt,toXYZ:Sh,fromXYZ:yh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let ps;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=ko("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gl(r[o].image)):s.push(gl(r[o]))}else s=gl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?s0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class ln extends Js{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Zn,r=Zn,s=St,o=Zi,a=xn,l=Ni,c=ln.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Qs(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ld;ln.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],_=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(_+1)/2,P=(p+1)/2,D=(u+d)/4,A=(f+g)/4,C=(v+m)/4;return y>S&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=D/n,s=A/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=C/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=C/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends l0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wd extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c0 extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],_=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==_||u!==v){let m=1-a;const p=l*d+c*_+u*v+f*g,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),D=Math.atan2(P,p*E);m=Math.sin(m*D)/P,a=Math.sin(a*D)/P}const S=a*E;if(l=l*m+d*S,c=c*m+_*S,u=u*m+v*S,f=f*m+g*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*_-c*d,e[t+1]=l*v+u*d+c*f-a*_,e[t+2]=c*v+u*_+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"YXZ":this._x=d*u*f+c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"ZXY":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f-d*_*v;break;case"ZYX":this._x=d*u*f-c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f+d*_*v;break;case"YZX":this._x=d*u*f+c*_*v,this._y=c*_*f+d*u*v,this._z=c*u*v-d*_*f,this._w=c*u*f-d*_*v;break;case"XZY":this._x=d*u*f-c*_*v,this._y=c*_*f-d*u*v,this._z=c*u*v+d*_*f,this._w=c*u*f+d*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new G,Mh=new Dn;class eo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Jo.subVectors(this.max,oo),ms.subVectors(e.a,oo),_s.subVectors(e.b,oo),gs.subVectors(e.c,oo),or.subVectors(_s,ms),ar.subVectors(gs,_s),Nr.subVectors(ms,gs);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Nr.z,Nr.y,or.z,0,-or.x,ar.z,0,-ar.x,Nr.z,0,-Nr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Nr.y,Nr.x,0];return!xl(t,ms,_s,gs,Jo)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,ms,_s,gs,Jo))?!1:(Qo.crossVectors(or,ar),t=[Qo.x,Qo.y,Qo.z],xl(t,ms,_s,gs,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new G,new G,new G,new G,new G,new G,new G,new G],hi=new G,jo=new eo,ms=new G,_s=new G,gs=new G,or=new G,ar=new G,Nr=new G,oo=new G,Jo=new G,Qo=new G,Fr=new G;function xl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fr.fromArray(i,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=n.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const u0=new eo,ao=new G,Sl=new G;class bu{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ao,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Sl)),this.expandByPoint(ao.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new G,yl=new G,ea=new G,lr=new G,Ml=new G,ta=new G,wl=new G;class h0{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(yl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=lr.dot(this.direction),l=-lr.dot(ea),c=lr.lengthSq(),u=Math.abs(1-o*o);let f,d,_,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,_=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),_=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yl).addScaledVector(ea,d),_}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const n=Bi.dot(this.direction),r=Bi.dot(Bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,r,s){Ml.subVectors(t,e),ta.subVectors(n,e),wl.crossVectors(Ml,ta);let o=this.direction.dot(wl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(lr,ta));if(l<0)return null;const c=a*this.direction.dot(Ml.cross(lr));if(c<0||l+c>o)return null;const u=-a*lr.dot(wl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m)}set(e,t,n,r,s,o,a,l,c,u,f,d,_,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=_,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d+g*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,_=l*f,v=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,_=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-_,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,_=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,n){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),cr.crossVectors(n,Bn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),cr.crossVectors(n,Bn)),cr.normalize(),na.crossVectors(Bn,cr),r[0]=cr.x,r[4]=na.x,r[8]=Bn.x,r[1]=cr.y,r[5]=na.y,r[9]=Bn.y,r[2]=cr.z,r[6]=na.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],_=n[13],v=n[2],g=n[6],m=n[10],p=n[14],E=n[3],y=n[7],S=n[11],P=n[15],D=r[0],A=r[4],C=r[8],w=r[12],M=r[1],U=r[5],z=r[9],O=r[13],X=r[2],Y=r[6],q=r[10],W=r[14],B=r[3],ce=r[7],J=r[11],he=r[15];return s[0]=o*D+a*M+l*X+c*B,s[4]=o*A+a*U+l*Y+c*ce,s[8]=o*C+a*z+l*q+c*J,s[12]=o*w+a*O+l*W+c*he,s[1]=u*D+f*M+d*X+_*B,s[5]=u*A+f*U+d*Y+_*ce,s[9]=u*C+f*z+d*q+_*J,s[13]=u*w+f*O+d*W+_*he,s[2]=v*D+g*M+m*X+p*B,s[6]=v*A+g*U+m*Y+p*ce,s[10]=v*C+g*z+m*q+p*J,s[14]=v*w+g*O+m*W+p*he,s[3]=E*D+y*M+S*X+P*B,s[7]=E*A+y*U+S*Y+P*ce,s[11]=E*C+y*z+S*q+P*J,s[15]=E*w+y*O+S*W+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],_=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*_-n*l*_)+g*(+t*l*_-t*c*d+s*o*d-r*o*_+r*c*u-s*l*u)+m*(+t*c*f-t*a*_-s*o*f+n*o*_+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],_=e[11],v=e[12],g=e[13],m=e[14],p=e[15],E=f*m*c-g*d*c+g*l*_-a*m*_-f*l*p+a*d*p,y=v*d*c-u*m*c-v*l*_+o*m*_+u*l*p-o*d*p,S=u*g*c-v*f*c+v*a*_-o*g*_-u*a*p+o*f*p,P=v*f*l-u*g*l-v*a*d+o*g*d+u*a*m-o*f*m,D=t*E+n*y+r*S+s*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=E*A,e[1]=(g*d*s-f*m*s-g*r*_+n*m*_+f*r*p-n*d*p)*A,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*A,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*_-n*l*_)*A,e[4]=y*A,e[5]=(u*m*s-v*d*s+v*r*_-t*m*_-u*r*p+t*d*p)*A,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*_+t*l*_)*A,e[8]=S*A,e[9]=(v*f*s-u*g*s-v*n*_+t*g*_+u*n*p-t*f*p)*A,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*_-t*a*_)*A,e[12]=P*A,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*m+t*f*m)*A,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*A,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,_=s*u,v=s*f,g=o*u,m=o*f,p=a*f,E=l*c,y=l*u,S=l*f,P=n.x,D=n.y,A=n.z;return r[0]=(1-(g+p))*P,r[1]=(_+S)*P,r[2]=(v-y)*P,r[3]=0,r[4]=(_-S)*D,r[5]=(1-(d+p))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(v+y)*A,r[9]=(m-E)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,u=1/o,f=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,t.setFromRotationMatrix(fi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,v;if(a===$i)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Wa)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$i){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,_=(n+r)*u;let v,g;if(a===$i)v=(o+s)*f,g=-2*f;else if(a===Wa)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new G,fi=new vt,f0=new G(0,0,0),d0=new G(1,1,1),cr=new G,na=new G,Bn=new G,wh=new vt,Eh=new Dn;class ei{constructor(e=0,t=0,n=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const bh=new G,xs=new Dn,ki=new vt,ia=new G,lo=new G,m0=new G,_0=new Dn,Th=new G(1,0,0),Ah=new G(0,1,0),Rh=new G(0,0,1),Ch={type:"added"},g0={type:"removed"},Ss={type:"childadded",child:null},El={type:"childremoved",child:null};class jn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new G,t=new ei,n=new Dn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ct}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(lo,ia,this.up):ki.lookAt(ia,lo,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(ki),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jn.DEFAULT_UP=new G(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new G,Hi=new G,bl=new G,Vi=new G,ys=new G,Ms=new G,Ph=new G,Tl=new G,Al=new G,Rl=new G,Cl=new Dt,Pl=new Dt,Ll=new Dt;class vi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),di.subVectors(e,t),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){di.subVectors(r,t),Hi.subVectors(n,t),bl.subVectors(e,t);const o=di.dot(di),a=di.dot(Hi),l=di.dot(bl),c=Hi.dot(Hi),u=Hi.dot(bl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Cl.setScalar(0),Pl.setScalar(0),Ll.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cl,s.x),o.addScaledVector(Pl,s.y),o.addScaledVector(Ll,s.z),o}static isFrontFacing(e,t,n,r){return di.subVectors(n,t),Hi.subVectors(e,t),di.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,n),Ms.subVectors(s,n),Tl.subVectors(e,n);const l=ys.dot(Tl),c=Ms.dot(Tl);if(l<=0&&c<=0)return t.copy(n);Al.subVectors(e,r);const u=ys.dot(Al),f=Ms.dot(Al);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ys,o);Rl.subVectors(e,s);const _=ys.dot(Rl),v=Ms.dot(Rl);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ms,a);const m=u*v-_*f;if(m<=0&&f-u>=0&&_-v>=0)return Ph.subVectors(s,r),a=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(Ph,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=Eu(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Dl(o,s,e+1/3),this.g=Dl(o,s,e),this.b=Dl(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return xt.fromWorkingColorSpace(fn.copy(this),e),Math.round(gn(fn.r*255,0,255))*65536+Math.round(gn(fn.g*255,0,255))*256+Math.round(gn(fn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=mn){xt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,r=fn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(ra);const n=bo(ur.h,ra.h,t),r=bo(ur.s,ra.s,t),s=bo(ur.l,ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $e;$e.NAMES=qd;let v0=0;class Qa extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Qs(),this.name="",this.blending=yr,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ns,this.blendDst=Fs,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ns&&(n.blendSrc=this.blendSrc),this.blendDst!==Fs&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tu extends Qa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yi=x0();function x0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function S0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=gn(i,-65504,65504),Yi.floatView[0]=i;const e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function y0(i){const e=i>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(i&1023)]+Yi.exponentTable[e],Yi.floatView[0]}const Lh={toHalfFloat:S0,fromHalfFloat:y0},qt=new G,sa=new nt;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=As(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}}class Yd extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zd extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ns extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let M0=0;const ii=new vt,Il=new jn,ws=new G,kn=new eo,co=new eo,Jt=new G;class er extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Zd:Yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ns(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(kn.min,co.min),kn.expandByPoint(Jt),Jt.addVectors(kn.max,co.max),kn.expandByPoint(Jt)):(kn.expandByPoint(co.min),kn.expandByPoint(co.max))}kn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Jt.add(ws)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new G,l[C]=new G;const c=new G,u=new G,f=new G,d=new nt,_=new nt,v=new nt,g=new G,m=new G;function p(C,w,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),_.sub(d),v.sub(d);const U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(U),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(U),a[C].add(g),a[w].add(g),a[M].add(g),l[C].add(m),l[w].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,w=E.length;C<w;++C){const M=E[C],U=M.start,z=M.count;for(let O=U,X=U+z;O<X;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new G,S=new G,P=new G,D=new G;function A(C){P.fromBufferAttribute(r,C),D.copy(P);const w=a[C];y.copy(w),y.sub(P.multiplyScalar(P.dot(w))).normalize(),S.crossVectors(D,w);const U=S.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,U)}for(let C=0,w=E.length;C<w;++C){const M=E[C],U=M.start,z=M.count;for(let O=U,X=U+z;O<X;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,_=e.count;d<_;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=t.count;d<_;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?_=l[g]*a.data.stride+a.offset:_=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[_++]}return new Xt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],_=e(d,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new vt,Or=new h0,oa=new bu,Ih=new G,aa=new G,la=new G,ca=new G,Ul=new G,ua=new G,Uh=new G,ha=new G;class kt extends jn{constructor(e=new er,t=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ul.fromBufferAttribute(f,e),o?ua.addScaledVector(Ul,u):ua.addScaledVector(Ul.sub(t),u))}t.add(ua)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(oa.containsPoint(Or.origin)===!1&&(Or.intersectSphere(oa,Ih)===null||Or.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],E=Math.max(m.start,_.start),y=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=E,P=y;S<P;S+=3){const D=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=fa(this,p,e,n,c,u,f,D,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(a.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=fa(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],E=Math.max(m.start,_.start),y=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=E,P=y;S<P;S+=3){const D=S,A=S+1,C=S+2;r=fa(this,p,e,n,c,u,f,D,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=v,p=g;m<p;m+=3){const E=m,y=m+1,S=m+2;r=fa(this,o,e,n,c,u,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function w0(i,e,t,n,r,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:i}}function fa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,aa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);const u=w0(i,e,t,n,aa,la,ca,Uh);if(u){const f=new G;vi.getBarycoord(Uh,aa,la,ca,f),r&&(u.uv=vi.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=vi.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};vi.getNormal(aa,la,ca,d.normal),u.face=d,u.barycoord=f}return u}class Vo extends er{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(f,2));function v(g,m,p,E,y,S,P,D,A,C,w){const M=S/A,U=P/C,z=S/2,O=P/2,X=D/2,Y=A+1,q=C+1;let W=0,B=0;const ce=new G;for(let J=0;J<q;J++){const he=J*U-O;for(let ye=0;ye<Y;ye++){const Be=ye*M-z;ce[g]=Be*E,ce[m]=he*y,ce[p]=X,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=D>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(ye/A),f.push(1-J/C),W+=1}}for(let J=0;J<C;J++)for(let he=0;he<A;he++){const ye=d+he+Y*J,Be=d+he+Y*(J+1),j=d+(he+1)+Y*(J+1),se=d+(he+1)+Y*J;l.push(ye,Be,se),l.push(Be,j,se),B+=6}a.addGroup(_,B,w),_+=B,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const n=js(i[t]);for(const r in n)e[r]=n[r]}return e}function E0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $d(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const b0={clone:js,merge:wn};var T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Qa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kd extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new G,Nh=new nt,Fh=new nt;class Pn extends Kd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Fh),t.subVectors(Fh,Nh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,bs=1;class R0 extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Es,bs,e,t);r.layers=this.layers,this.add(r);const s=new Pn(Es,bs,e,t);s.layers=this.layers,this.add(s);const o=new Pn(Es,bs,e,t);o.layers=this.layers,this.add(o);const a=new Pn(Es,bs,e,t);a.layers=this.layers,this.add(a);const l=new Pn(Es,bs,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Es,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jd extends ln{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vo(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:xi});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=St),new R0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Nl=new G,P0=new G,L0=new ct;class Wr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nl.subVectors(n,t).cross(P0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||L0.getNormalMatrix(e),r=this.coplanarPoint(Nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new bu,da=new G;class Jd{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,s=new Wr,o=new Wr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],_=r[8],v=r[9],g=r[10],m=r[11],p=r[12],E=r[13],y=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-_,S-p).normalize(),n[1].setComponents(l+s,d+c,m+_,S+p).normalize(),n[2].setComponents(l+o,d+u,m+v,S+E).normalize(),n[3].setComponents(l-o,d-u,m-v,S-E).normalize(),n[4].setComponents(l-a,d-f,m-g,S-y).normalize(),t===$i)n[5].setComponents(l+a,d+f,m+g,S+y).normalize();else if(t===Wa)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function D0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<f.length;_++){const v=f[d],g=f[_];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let _=0,v=f.length;_<v;_++){const g=f[_];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Si extends er{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,_=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-E,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,S=E+c*(p+1),P=E+1+c*(p+1),D=E+1+c*p;_.push(y,S,D),_.push(S,P,D)}this.setIndex(_),this.setAttribute("position",new ns(v,3)),this.setAttribute("normal",new ns(g,3)),this.setAttribute("uv",new ns(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`struct PhysicalMaterial {
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tv=`#ifdef USE_NORMALMAP
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
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gv=`float getShadowMask() {
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
}`,vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
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
}`,Bv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`uniform float scale;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,$v=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Jv=`#define NORMAL
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
}`,Qv=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,tx=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,sx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:I0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:z0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:H0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:j0,color_fragment:J0,color_pars_fragment:Q0,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:rg,displacementmap_pars_vertex:sg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:ug,envmap_fragment:hg,envmap_common_pars_fragment:fg,envmap_pars_fragment:dg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:bg,envmap_vertex:mg,fog_vertex:_g,fog_pars_vertex:gg,fog_fragment:vg,fog_pars_fragment:xg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:yg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:wg,lights_pars_begin:Eg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Ug,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:zg,map_fragment:Bg,map_pars_fragment:kg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Zg,morphtarget_vertex:$g,normal_fragment_begin:Kg,normal_fragment_maps:jg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:ev,normalmap_pars_fragment:tv,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:sv,opaque_fragment:ov,packing:av,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:uv,dithering_pars_fragment:hv,roughnessmap_fragment:fv,roughnessmap_pars_fragment:dv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:_v,shadowmask_pars_fragment:gv,skinbase_vertex:vv,skinning_pars_vertex:xv,skinning_vertex:Sv,skinnormal_vertex:yv,specularmap_fragment:Mv,specularmap_pars_fragment:wv,tonemapping_fragment:Ev,tonemapping_pars_fragment:bv,transmission_fragment:Tv,transmission_pars_fragment:Av,uv_pars_fragment:Rv,uv_pars_vertex:Cv,uv_vertex:Pv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Iv,backgroundCube_vert:Uv,backgroundCube_frag:Nv,cube_vert:Fv,cube_frag:Ov,depth_vert:zv,depth_frag:Bv,distanceRGBA_vert:kv,distanceRGBA_frag:Hv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:Wv,linedashed_frag:Xv,meshbasic_vert:qv,meshbasic_frag:Yv,meshlambert_vert:Zv,meshlambert_frag:$v,meshmatcap_vert:Kv,meshmatcap_frag:jv,meshnormal_vert:Jv,meshnormal_frag:Qv,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:rx,meshtoon_frag:sx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:hx},Ne={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ri={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ri.physical={uniforms:wn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const pa={r:0,b:0,g:0},Br=new ei,fx=new vt;function dx(i,e,t,n,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,_=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function g(E){let y=!1;const S=v(E);S===null?p(a,l):S&&S.isColor&&(p(S,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const S=v(y);S&&(S.isCubeTexture||S.mapping===ja)?(u===void 0&&(u=new kt(new Vo(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:js(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(y.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Br)),u.material.toneMapped=xt.getTransfer(S.colorSpace)!==bt,(f!==S||d!==S.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new Si(2,2),new Ct({name:"BackgroundMaterial",uniforms:js(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,_=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(pa,$d(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m}}function px(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,U,z,O,X){let Y=!1;const q=f(O,z,U);s!==q&&(s=q,c(s.object)),Y=_(M,O,z,X),Y&&v(M,O,z,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(M,U,z,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,U,z){const O=z.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let Y=X[U.id];Y===void 0&&(Y={},X[U.id]=Y);let q=Y[O];return q===void 0&&(q=d(l()),Y[O]=q),q}function d(M){const U=[],z=[],O=[];for(let X=0;X<t;X++)U[X]=0,z[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function _(M,U,z,O){const X=s.attributes,Y=U.attributes;let q=0;const W=z.getAttributes();for(const B in W)if(W[B].location>=0){const J=X[B];let he=Y[B];if(he===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function v(M,U,z,O){const X={},Y=U.attributes;let q=0;const W=z.getAttributes();for(const B in W)if(W[B].location>=0){let J=Y[B];J===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),X[B]=he,q++}s.attributes=X,s.attributesNum=q,s.index=O}function g(){const M=s.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function m(M){p(M,0)}function p(M,U){const z=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;z[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),X[M]!==U&&(i.vertexAttribDivisor(M,U),X[M]=U)}function E(){const M=s.newAttributes,U=s.enabledAttributes;for(let z=0,O=U.length;z<O;z++)U[z]!==M[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function y(M,U,z,O,X,Y,q){q===!0?i.vertexAttribIPointer(M,U,z,X,Y):i.vertexAttribPointer(M,U,z,O,X,Y)}function S(M,U,z,O){g();const X=O.attributes,Y=z.getAttributes(),q=U.defaultAttributeValues;for(const W in Y){const B=Y[W];if(B.location>=0){let ce=X[W];if(ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const J=ce.normalized,he=ce.itemSize,ye=e.get(ce);if(ye===void 0)continue;const Be=ye.buffer,j=ye.type,se=ye.bytesPerElement,oe=j===i.INT||j===i.UNSIGNED_INT||ce.gpuType===gu;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Me=ae.stride,Re=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<B.locationSize;Ce++)p(B.location+Ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)m(B.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ce=0;Ce<B.locationSize;Ce++)y(B.location+Ce,he/B.locationSize,j,J,Me*se,(Re+he/B.locationSize*Ce)*se,oe)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<B.locationSize;ae++)p(B.location+ae,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<B.locationSize;ae++)m(B.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ae=0;ae<B.locationSize;ae++)y(B.location+ae,he/B.locationSize,j,J,he*se,he/B.locationSize*ae*se,oe)}}else if(q!==void 0){const J=q[W];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}E()}function P(){C();for(const M in n){const U=n[M];for(const z in U){const O=U[z];for(const X in O)u(O[X].object),delete O[X];delete U[z]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const z in U){const O=U[z];for(const X in O)u(O[X].object),delete O[X];delete U[z]}delete n[M.id]}function A(M){for(const U in n){const z=n[U];if(z[M.id]===void 0)continue;const O=z[M.id];for(const X in O)u(O[X].object),delete O[X];delete z[M.id]}}function C(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function mx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,n,1)}function l(c,u,f,d){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _x(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:P,maxSamples:D}}function gx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Wr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||n!==0||r;return r=d,n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,_){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,y=E*4;let S=p.clippingState||null;l.value=S,S=u(v,d,y,_);for(let P=0;P!==y;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,_,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=_+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=_;y!==g;++y,S+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function vx(i){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=qs:a===Sc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===Sc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Au extends Kd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Oh=[.125,.215,.35,.446,.526,.582],Yr=20,Fl=new Au,zh=new $e;let Ol=null,zl=0,Bl=0,kl=!1;const Xr=(1+Math.sqrt(5))/2,Ts=1/Xr,Bh=[new G(-Xr,Ts,0),new G(Xr,Ts,0),new G(-Ts,0,Xr),new G(Ts,0,Xr),new G(0,Xr,-Ts),new G(0,Xr,Ts),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ol=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,zl,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Li,format:xn,colorSpace:Fi,depthBuffer:!1},r=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(s)),this._blurMaterial=Sx(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,r){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zh),u.toneMapping=Ii,u.autoClear=!1;const _=new Tu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),v=new kt(new Vo,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(zh),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;ma(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===qs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bh[(r-s-1)%Bh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Yr-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Yr;m>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const p=[];let E=0;for(let A=0;A<Yr;++A){const C=A/g,w=Math.exp(-C*C/2);p.push(w),A===0?E+=w:A<m&&(E+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const S=this._sizeLods[r],P=3*S*(r>y-Ps?r-y+Ps:0),D=4*(this._cubeSize-S);ma(t,P,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Fl)}}function xx(i){const e=[],t=[],n=[];let r=i;const s=i-Ps+1+Oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ps?l=Oh[o-i+Ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,g=3,m=2,p=1,E=new Float32Array(g*v*_),y=new Float32Array(m*v*_),S=new Float32Array(p*v*_);for(let D=0;D<_;D++){const A=D%3*2/3-1,C=D>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(w,g*v*D),y.set(d,m*v*D);const M=[D,D,D,D,D,D];S.set(M,p*v*D)}const P=new er;P.setAttribute("position",new Xt(E,g)),P.setAttribute("uv",new Xt(y,m)),P.setAttribute("faceIndex",new Xt(S,p)),e.push(P),r>Ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sx(i,e,t){const n=new Float32Array(Yr),r=new G(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Vh(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Gh(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function yx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xc||l===Sc,u=l===qs||l===Ys;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new kh(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wx(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const g=_[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,v=f.attributes.position;let g=0;if(_!==null){const E=_.array;g=_.version;for(let y=0,S=E.length;y<S;y+=3){const P=E[y+0],D=E[y+1],A=E[y+2];d.push(P,D,D,A,A,P)}}else if(v!==void 0){const E=v.array;g=v.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const P=y+0,D=y+1,A=y+2;d.push(P,D,D,A,A,P)}}else return;const m=new(Vd(d)?Zd:Yd)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ex(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,_){i.drawElements(n,_,s,d*o),t.update(_,n,1)}function c(d,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,d*o,v),t.update(_,n,v))}function u(d,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,n,1)}function f(d,_,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,_[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,d,0,g,0,v);let p=0;for(let E=0;E<v;E++)p+=_[E]*g[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tx(i,e,t){const n=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var _=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*D*4*f),C=new Wd(A,P,D,f);C.type=$n,C.needsUpdate=!0;const w=S*4;for(let U=0;U<f;U++){const z=p[U],O=E[U],X=y[U],Y=P*D*4*U;for(let q=0;q<z.count;q++){const W=q*w;v===!0&&(r.fromBufferAttribute(z,q),A[Y+W+0]=r.x,A[Y+W+1]=r.y,A[Y+W+2]=r.z,A[Y+W+3]=0),g===!0&&(r.fromBufferAttribute(O,q),A[Y+W+4]=r.x,A[Y+W+5]=r.y,A[Y+W+6]=r.z,A[Y+W+7]=0),m===!0&&(r.fromBufferAttribute(X,q),A[Y+W+8]=r.x,A[Y+W+9]=r.y,A[Y+W+10]=r.z,A[Y+W+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new nt(P,D)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Ax(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Cu extends ln{constructor(e,t,n,r,s,o,a,l,c,u=zs){if(u!==zs&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=rs),n===void 0&&u===Ks&&(n=$s),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ep=new ln,Wh=new Cu(1,1),tp=new Wd,np=new c0,ip=new jd,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),$h=new Float32Array(4);function to(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xh[r];if(s===void 0&&(s=new Float32Array(r),Xh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;$h.set(n),i.uniformMatrix2fv(this.addr,!1,$h),Kt(t,n)}}function Ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Kt(t,n)}}function Ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),Kt(t,n)}}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=Hd,s=Wh):s=ep,t.setTexture2D(e||s,r)}function Wx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||np,r)}function Xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ip,r)}function qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tp,r)}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return Bx;case 36294:return kx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Zx(i,e){i.uniform1fv(this.addr,e)}function $x(i,e){const t=to(e,this.size,2);i.uniform2fv(this.addr,t)}function Kx(i,e){const t=to(e,this.size,3);i.uniform3fv(this.addr,t)}function jx(i,e){const t=to(e,this.size,4);i.uniform4fv(this.addr,t)}function Jx(i,e){const t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qx(i,e){const t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eS(i,e){const t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tS(i,e){i.uniform1iv(this.addr,e)}function nS(i,e){i.uniform2iv(this.addr,e)}function iS(i,e){i.uniform3iv(this.addr,e)}function rS(i,e){i.uniform4iv(this.addr,e)}function sS(i,e){i.uniform1uiv(this.addr,e)}function oS(i,e){i.uniform2uiv(this.addr,e)}function aS(i,e){i.uniform3uiv(this.addr,e)}function lS(i,e){i.uniform4uiv(this.addr,e)}function cS(i,e,t){const n=this.cache,r=e.length,s=el(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ep,s[o])}function uS(i,e,t){const n=this.cache,r=e.length,s=el(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||np,s[o])}function hS(i,e,t){const n=this.cache,r=e.length,s=el(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ip,s[o])}function fS(i,e,t){const n=this.cache,r=e.length,s=el(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tp,s[o])}function dS(i){switch(i){case 5126:return Zx;case 35664:return $x;case 35665:return Kx;case 35666:return jx;case 35674:return Jx;case 35675:return Qx;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return fS}}class pS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class mS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class _S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Kh(i,e){i.seq.push(e),i.map[e.id]=e}function gS(i,e,t){const n=i.name,r=n.length;for(Hl.lastIndex=0;;){const s=Hl.exec(n),o=Hl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kh(t,c===void 0?new pS(a,i,e):new mS(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new _S(a),Kh(t,f)),t=f}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function jh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vS=37297;let xS=0;function SS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jh=new ct;function yS(i){xt._getMatrix(Jh,xt.workingColorSpace,i);const e=`mat3( ${Jh.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Ja:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SS(i.getShaderSource(e),o)}else return r}function MS(i,e){const t=yS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wS(i,e){let t;switch(e){case S_:t="Linear";break;case y_:t="Reinhard";break;case M_:t="Cineon";break;case w_:t="ACESFilmic";break;case b_:t="AgX";break;case T_:t="Neutral";break;case E_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new G;function ES(){xt.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function TS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function So(i){return i!==""}function ef(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(RS,PS)}const CS=new Map;function PS(i,e){let t=ht[e];if(t===void 0){const n=CS.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(LS,DS)}function DS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function IS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function US(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pd:e="ENVMAP_BLENDING_MULTIPLY";break;case v_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function OS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zS(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IS(t),c=US(t),u=NS(t),f=FS(t),d=OS(t),_=bS(t),v=TS(s),g=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(So).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ii?wS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=Yc(o),o=ef(o,t),o=tf(o,t),a=Yc(a),a=ef(a,t),a=tf(a,t),o=nf(o),a=nf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,S=E+p+a,P=jh(r,r.VERTEX_SHADER,y),D=jh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,P),r.attachShader(g,D),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(U){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(D).trim();let Y=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,D);else{const W=Qh(r,P,"vertex"),B=Qh(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+W+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||X==="")&&(q=!1);q&&(U.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(D),C=new Ua(r,g),w=AS(r,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,vS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let BS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HS(e),t.set(e,n)),n}}class HS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function VS(i,e,t,n,r,s,o){const a=new Xd,l=new kS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,U,z,O){const X=z.fog,Y=O.geometry,q=w.isMeshStandardMaterial?z.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),B=W&&W.mapping===ja?W.image.height:null,ce=v[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const J=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=J!==void 0?J.length:0;let ye=0;Y.morphAttributes.position!==void 0&&(ye=1),Y.morphAttributes.normal!==void 0&&(ye=2),Y.morphAttributes.color!==void 0&&(ye=3);let Be,j,se,oe;if(ce){const mt=Ri[ce];Be=mt.vertexShader,j=mt.fragmentShader}else Be=w.vertexShader,j=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),oe=l.getFragmentShaderID(w);const ae=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,it=!!w.map,Ve=!!w.matcap,st=!!W,F=!!w.aoMap,Xe=!!w.lightMap,ze=!!w.bumpMap,Ke=!!w.normalMap,ge=!!w.displacementMap,Fe=!!w.emissiveMap,Te=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,H=w.clearcoat>0,Q=w.dispersion>0,ee=w.iridescence>0,te=w.sheen>0,be=w.transmission>0,fe=T&&!!w.anisotropyMap,xe=H&&!!w.clearcoatMap,Qe=H&&!!w.clearcoatNormalMap,me=H&&!!w.clearcoatRoughnessMap,Ie=ee&&!!w.iridescenceMap,Oe=ee&&!!w.iridescenceThicknessMap,ke=te&&!!w.sheenColorMap,Pe=te&&!!w.sheenRoughnessMap,je=!!w.specularMap,He=!!w.specularColorMap,qe=!!w.specularIntensityMap,k=be&&!!w.transmissionMap,ne=be&&!!w.thicknessMap,re=!!w.gradientMap,ue=!!w.alphaMap,De=w.alphaTest>0,Ue=!!w.alphaHash,rt=!!w.extensions;let Mt=Ii;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Pt={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:j,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Fi,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Ve,envMap:st,envMapMode:st&&W.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Xe,bumpMap:ze,normalMap:Ke,displacementMap:d&&ge,emissiveMap:Fe,normalMapObjectSpace:Ke&&w.normalMapType===L_,normalMapTangentSpace:Ke&&w.normalMapType===P_,metalnessMap:Te,roughnessMap:I,anisotropy:T,anisotropyMap:fe,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Qe,clearcoatRoughnessMap:me,dispersion:Q,iridescence:ee,iridescenceMap:Ie,iridescenceThicknessMap:Oe,sheen:te,sheenColorMap:ke,sheenRoughnessMap:Pe,specularMap:je,specularColorMap:He,specularIntensityMap:qe,transmission:be,transmissionMap:k,thicknessMap:ne,gradientMap:re,opaque:w.transparent===!1&&w.blending===yr&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:De,alphaHash:Ue,combine:w.combine,mapUv:it&&g(w.map.channel),aoMapUv:F&&g(w.aoMap.channel),lightMapUv:Xe&&g(w.lightMap.channel),bumpMapUv:ze&&g(w.bumpMap.channel),normalMapUv:Ke&&g(w.normalMap.channel),displacementMapUv:ge&&g(w.displacementMap.channel),emissiveMapUv:Fe&&g(w.emissiveMap.channel),metalnessMapUv:Te&&g(w.metalnessMap.channel),roughnessMapUv:I&&g(w.roughnessMap.channel),anisotropyMapUv:fe&&g(w.anisotropyMap.channel),clearcoatMapUv:xe&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(w.sheenRoughnessMap.channel),specularMapUv:je&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:qe&&g(w.specularIntensityMap.channel),transmissionMapUv:k&&g(w.transmissionMap.channel),thicknessMapUv:ne&&g(w.thicknessMap.channel),alphaMapUv:ue&&g(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ke||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(it||ue),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&xt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&xt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===On,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:rt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&w.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(E(M,w),y(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=v[w.type];let U;if(M){const z=Ri[M];U=b0.clone(z.uniforms)}else U=w.uniforms;return U}function P(w,M){let U;for(let z=0,O=u.length;z<O;z++){const X=u[z];if(X.cacheKey===M){U=X,++U.usedTimes;break}}return U===void 0&&(U=new zS(i,M,w,s),u.push(U)),U}function D(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:C}}function GS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function WS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function of(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,_,v,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,d,_,v,g,m){const p=o(f,d,_,v,g,m);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||WS),n.length>1&&n.sort(d||sf),r.length>1&&r.sort(d||sf)}function u(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new of,i.set(n,[o])):r>=s.length?(o=new of,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function YS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ZS=0;function $S(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function KS(i){const e=new qS,t=YS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new vt,o=new vt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let _=0,v=0,g=0,m=0,p=0,E=0,y=0,S=0,P=0,D=0,A=0;c.sort($S);for(let w=0,M=c.length;w<M;w++){const U=c[w],z=U.color,O=U.intensity,X=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=z.r*O,f+=z.g*O,d+=z.b*O;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],O);A++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,B=t.get(U);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[_]=B,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=U.shadow.matrix,E++}n.directional[_]=q,_++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(z).multiplyScalar(O),q.distance=X,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[g]=q;const W=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,W.updateMatrices(U),U.castShadow&&D++),n.spotLightMatrix[g]=W.matrix,U.castShadow){const B=t.get(U);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=Y,S++}g++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(z).multiplyScalar(O),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=q,m++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const W=U.shadow,B=t.get(U);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=U.shadow.matrix,y++}n.point[v]=q,v++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(O),q.groundColor.copy(U.groundColor).multiplyScalar(O),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==_||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+P-D,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,C.directionalLength=_,C.pointLength=v,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=P,C.numLightProbes=A,n.version=ZS++)}function l(c,u){let f=0,d=0,_=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function af(i){const e=new KS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jS(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new af(i),e.set(r,[a])):s>=o.length?(a=new af(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class JS extends Qa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QS extends Qa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`;function n1(i,e,t){let n=new Jd;const r=new nt,s=new nt,o=new Dt,a=new JS({depthPacking:C_}),l=new QS,c={},u=t.maxTextureSize,f={[br]:On,[On]:br,[En]:En},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(D,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Wi&&this.type===Wi,X=p===Wi&&this.type!==Wi;for(let Y=0,q=D.length;Y<q;Y++){const W=D[Y],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ce=B.getFrameExtents();if(r.multiply(ce),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,B.mapSize.y=s.y)),B.map===null||O===!0||X===!0){const he=this.type!==Wi?{minFilter:an,magFilter:an}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(r.x,r.y,he),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const J=B.getViewportCount();for(let he=0;he<J;he++){const ye=B.getViewport(he);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),z.viewport(o),B.updateMatrices(W,he),n=B.getFrustum(),S(A,C,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Wi&&E(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,U)};function E(D,A){const C=e.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,g,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(A,null,C,_,g,null)}function y(D,A,C,w){let M=null;const U=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)M=U;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,O=A.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let Y=X[O];Y===void 0&&(Y=M.clone(),X[O]=Y,A.addEventListener("dispose",P)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Wi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=C}return M}function S(D,A,C,w,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Wi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);const O=e.update(D),X=D.material;if(Array.isArray(X)){const Y=O.groups;for(let q=0,W=Y.length;q<W;q++){const B=Y[q],ce=X[B.materialIndex];if(ce&&ce.visible){const J=y(D,ce,w,M);D.onBeforeShadow(i,D,A,C,O,J,B),i.renderBufferDirect(C,null,O,J,D,B),D.onAfterShadow(i,D,A,C,O,J,B)}}}else if(X.visible){const Y=y(D,X,w,M);D.onBeforeShadow(i,D,A,C,O,Y,null),i.renderBufferDirect(C,null,O,Y,D,null),D.onAfterShadow(i,D,A,C,O,Y,null)}}const z=D.children;for(let O=0,X=z.length;O<X;O++)S(z[O],A,C,w,M)}function P(D){D.target.removeEventListener("dispose",P);for(const C in c){const w=c[C],M=D.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const i1={[fc]:dc,[pc]:gc,[mc]:vc,[Xs]:_c,[dc]:fc,[gc]:pc,[vc]:mc,[_c]:Xs};function r1(i,e){function t(){let k=!1;const ne=new Dt;let re=null;const ue=new Dt(0,0,0,0);return{setMask:function(De){re!==De&&!k&&(i.colorMask(De,De,De,De),re=De)},setLocked:function(De){k=De},setClear:function(De,Ue,rt,Mt,Pt){Pt===!0&&(De*=Mt,Ue*=Mt,rt*=Mt),ne.set(De,Ue,rt,Mt),ue.equals(ne)===!1&&(i.clearColor(De,Ue,rt,Mt),ue.copy(ne))},reset:function(){k=!1,re=null,ue.set(-1,0,0,0)}}}function n(){let k=!1,ne=!1,re=null,ue=null,De=null;return{setReversed:function(Ue){if(ne!==Ue){const rt=e.get("EXT_clip_control");ne?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Mt=De;De=null,this.setClear(Mt)}ne=Ue},getReversed:function(){return ne},setTest:function(Ue){Ue?ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ue){re!==Ue&&!k&&(i.depthMask(Ue),re=Ue)},setFunc:function(Ue){if(ne&&(Ue=i1[Ue]),ue!==Ue){switch(Ue){case fc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case pc:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ue}},setLocked:function(Ue){k=Ue},setClear:function(Ue){De!==Ue&&(ne&&(Ue=1-Ue),i.clearDepth(Ue),De=Ue)},reset:function(){k=!1,re=null,ue=null,De=null,ne=!1}}}function r(){let k=!1,ne=null,re=null,ue=null,De=null,Ue=null,rt=null,Mt=null,Pt=null;return{setTest:function(mt){k||(mt?ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(mt){ne!==mt&&!k&&(i.stencilMask(mt),ne=mt)},setFunc:function(mt,wt,Tn){(re!==mt||ue!==wt||De!==Tn)&&(i.stencilFunc(mt,wt,Tn),re=mt,ue=wt,De=Tn)},setOp:function(mt,wt,Tn){(Ue!==mt||rt!==wt||Mt!==Tn)&&(i.stencilOp(mt,wt,Tn),Ue=mt,rt=wt,Mt=Tn)},setLocked:function(mt){k=mt},setClear:function(mt){Pt!==mt&&(i.clearStencil(mt),Pt=mt)},reset:function(){k=!1,ne=null,re=null,ue=null,De=null,Ue=null,rt=null,Mt=null,Pt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,E=null,y=null,S=null,P=null,D=null,A=new $e(0,0,0),C=0,w=!1,M=null,U=null,z=null,O=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=W>=2);let ce=null,J={};const he=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Be=new Dt().fromArray(he),j=new Dt().fromArray(ye);function se(k,ne,re,ue){const De=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(k,Ue),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<re;rt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ne+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ue}const oe={};oe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Xs),ze(!1),Ke(lh),ae(i.CULL_FACE),F(xi);function ae(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Me(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Re(k,ne){return f[k]!==ne?(i.bindFramebuffer(k,ne),f[k]=ne,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ne),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(k,ne){let re=_,ue=!1;if(k){re=d.get(ne),re===void 0&&(re=[],d.set(ne,re));const De=k.textures;if(re.length!==De.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,rt=De.length;Ue<rt;Ue++)re[Ue]=i.COLOR_ATTACHMENT0+Ue;re.length=De.length,ue=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ue=!0);ue&&i.drawBuffers(re)}function it(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const Ve={[bn]:i.FUNC_ADD,[i_]:i.FUNC_SUBTRACT,[r_]:i.FUNC_REVERSE_SUBTRACT};Ve[s_]=i.MIN,Ve[o_]=i.MAX;const st={[Ra]:i.ZERO,[si]:i.ONE,[a_]:i.SRC_COLOR,[Ns]:i.SRC_ALPHA,[d_]:i.SRC_ALPHA_SATURATE,[h_]:i.DST_COLOR,[c_]:i.DST_ALPHA,[l_]:i.ONE_MINUS_SRC_COLOR,[Fs]:i.ONE_MINUS_SRC_ALPHA,[f_]:i.ONE_MINUS_DST_COLOR,[u_]:i.ONE_MINUS_DST_ALPHA,[p_]:i.CONSTANT_COLOR,[m_]:i.ONE_MINUS_CONSTANT_COLOR,[__]:i.CONSTANT_ALPHA,[g_]:i.ONE_MINUS_CONSTANT_ALPHA};function F(k,ne,re,ue,De,Ue,rt,Mt,Pt,mt){if(k===xi){g===!0&&(Me(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),k!==zo){if(k!==m||mt!==w){if((p!==bn||S!==bn)&&(i.blendEquation(i.FUNC_ADD),p=bn,S=bn),mt)switch(k){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,y=null,P=null,D=null,A.set(0,0,0),C=0,m=k,w=mt}return}De=De||ne,Ue=Ue||re,rt=rt||ue,(ne!==p||De!==S)&&(i.blendEquationSeparate(Ve[ne],Ve[De]),p=ne,S=De),(re!==E||ue!==y||Ue!==P||rt!==D)&&(i.blendFuncSeparate(st[re],st[ue],st[Ue],st[rt]),E=re,y=ue,P=Ue,D=rt),(Mt.equals(A)===!1||Pt!==C)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Pt),A.copy(Mt),C=Pt),m=k,w=!1}function Xe(k,ne){k.side===En?Me(i.CULL_FACE):ae(i.CULL_FACE);let re=k.side===On;ne&&(re=!re),ze(re),k.blending===yr&&k.transparent===!1?F(xi):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ue=k.stencilWrite;a.setTest(ue),ue&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function Ke(k){k!==e_?(ae(i.CULL_FACE),k!==U&&(k===lh?i.cullFace(i.BACK):k===t_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=k}function ge(k){k!==z&&(q&&i.lineWidth(k),z=k)}function Fe(k,ne,re){k?(ae(i.POLYGON_OFFSET_FILL),(O!==ne||X!==re)&&(i.polygonOffset(ne,re),O=ne,X=re)):Me(i.POLYGON_OFFSET_FILL)}function Te(k){k?ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function I(k){k===void 0&&(k=i.TEXTURE0+Y-1),ce!==k&&(i.activeTexture(k),ce=k)}function T(k,ne,re){re===void 0&&(ce===null?re=i.TEXTURE0+Y-1:re=ce);let ue=J[re];ue===void 0&&(ue={type:void 0,texture:void 0},J[re]=ue),(ue.type!==k||ue.texture!==ne)&&(ce!==re&&(i.activeTexture(re),ce=re),i.bindTexture(k,ne||oe[k]),ue.type=k,ue.texture=ne)}function H(){const k=J[ce];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){Be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function Pe(k){j.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function je(k,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let ue=re.get(k);ue===void 0&&(ue=i.getUniformBlockIndex(ne,k.name),re.set(k,ue))}function He(k,ne){const ue=c.get(ne).get(k);l.get(ne)!==ue&&(i.uniformBlockBinding(ne,ue,k.__bindingPointIndex),l.set(ne,ue))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,J={},f={},d=new WeakMap,_=[],v=null,g=!1,m=null,p=null,E=null,y=null,S=null,P=null,D=null,A=new $e(0,0,0),C=0,w=!1,M=null,U=null,z=null,O=null,X=null,Be.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Me,bindFramebuffer:Re,drawBuffers:Ce,useProgram:it,setBlending:F,setMaterial:Xe,setFlipSided:ze,setCullFace:Ke,setLineWidth:ge,setPolygonOffset:Fe,setScissorTest:Te,activeTexture:I,bindTexture:T,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Ie,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:He,texStorage2D:Qe,texStorage3D:me,texSubImage2D:te,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ke,viewport:Pe,reset:qe}}function lf(i,e,t,n){const r=s1(n);switch(t){case Nd:return i*e;case Od:return i*e;case zd:return i*e*2;case Su:return i*e/r.components*r.byteLength;case yu:return i*e/r.components*r.byteLength;case Bd:return i*e*2/r.components*r.byteLength;case Mu:return i*e*2/r.components*r.byteLength;case Fd:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case wu:return i*e*4/r.components*r.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:case Ec:return Math.max(i,16)*Math.max(e,8)/4;case yc:case wc:return Math.max(i,8)*Math.max(e,8)/2;case bc:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kd:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xc:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s1(i){switch(i){case Ni:case Dd:return{byteLength:1,components:1};case Zs:case Id:case Li:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case rs:case gu:case $n:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o1(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return _?new OffscreenCanvas(I,T):ko("canvas")}function g(I,T,H){let Q=1;const ee=Te(I);if((ee.width>H||ee.height>H)&&(Q=H/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(Q*ee.width),be=Math.floor(Q*ee.height);f===void 0&&(f=v(te,be));const fe=T?v(te,be):f;return fe.width=te,fe.height=be,fe.getContext("2d").drawImage(I,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+be+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,T,H,Q,ee=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=T;if(T===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),T===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),T===i.RGBA){const be=ee?Ja:xt.getTransfer(Q);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=be===bt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(I,T){let H;return I?T===null||T===rs||T===$s?H=i.DEPTH24_STENCIL8:T===$n?H=i.DEPTH32F_STENCIL8:T===Zs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===$s?H=i.DEPTH_COMPONENT24:T===$n?H=i.DEPTH_COMPONENT32F:T===Zs&&(H=i.DEPTH_COMPONENT16),H}function P(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==St?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){const T=I.target;T.removeEventListener("dispose",D),C(T),T.isVideoTexture&&u.delete(T)}function A(I){const T=I.target;T.removeEventListener("dispose",A),M(T)}function C(I){const T=n.get(I);if(T.__webglInit===void 0)return;const H=I.source,Q=d.get(H);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(I),Object.keys(Q).length===0&&d.delete(H)}n.remove(I)}function w(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const H=I.source,Q=d.get(H);delete Q[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ee=0;ee<T.__webglFramebuffer[Q].length;ee++)i.deleteFramebuffer(T.__webglFramebuffer[Q][ee]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=I.textures;for(let Q=0,ee=H.length;Q<ee;Q++){const te=n.get(H[Q]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(I)}let U=0;function z(){U=0}function O(){const I=U;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function X(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Y(I,T){const H=n.get(I);if(I.isVideoTexture&&ge(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,I,T);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function q(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){j(H,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function W(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){j(H,I,T);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function B(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){se(H,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const ce={[Os]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},J={[an]:i.NEAREST,[A_]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},he={[D_]:i.NEVER,[z_]:i.ALWAYS,[I_]:i.LESS,[Hd]:i.LEQUAL,[U_]:i.EQUAL,[O_]:i.GEQUAL,[N_]:i.GREATER,[F_]:i.NOTEQUAL};function ye(I,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===St||T.magFilter===ml||T.magFilter===Ko||T.magFilter===Zi||T.minFilter===St||T.minFilter===ml||T.minFilter===Ko||T.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ce[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ce[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ce[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==Ko&&T.minFilter!==Zi||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Be(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D));const Q=T.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const te=X(T);if(te!==I.__cacheKey){ee[te]===void 0&&(ee[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[te].usedTimes++;const be=ee[I.__cacheKey];be!==void 0&&(ee[I.__cacheKey].usedTimes--,be.usedTimes===0&&w(T)),I.__cacheKey=te,I.__webglTexture=ee[te].texture}return H}function j(I,T,H){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const ee=Be(I,T),te=T.source;t.bindTexture(Q,I.__webglTexture,i.TEXTURE0+H);const be=n.get(te);if(te.version!==be.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const fe=xt.getPrimaries(xt.workingColorSpace),xe=T.colorSpace===sn?null:xt.getPrimaries(T.colorSpace),Qe=T.colorSpace===sn||fe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=g(T.image,!1,r.maxTextureSize);me=Fe(T,me);const Ie=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let ke=y(T.internalFormat,Ie,Oe,T.colorSpace,T.isVideoTexture);ye(Q,T);let Pe;const je=T.mipmaps,He=T.isVideoTexture!==!0,qe=be.__version===void 0||ee===!0,k=te.dataReady,ne=P(T,me);if(T.isDepthTexture)ke=S(T.format===Ks,T.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,ke,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,ke,me.width,me.height,0,Ie,Oe,null));else if(T.isDataTexture)if(je.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,ne,ke,je[0].width,je[0].height);for(let re=0,ue=je.length;re<ue;re++)Pe=je[re],He?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,Ie,Oe,Pe.data):t.texImage2D(i.TEXTURE_2D,re,ke,Pe.width,Pe.height,0,Ie,Oe,Pe.data);T.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,ne,ke,me.width,me.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ie,Oe,me.data)):t.texImage2D(i.TEXTURE_2D,0,ke,me.width,me.height,0,Ie,Oe,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ke,je[0].width,je[0].height,me.depth);for(let re=0,ue=je.length;re<ue;re++)if(Pe=je[re],T.format!==xn)if(Ie!==null)if(He){if(k)if(T.layerUpdates.size>0){const De=lf(Pe.width,Pe.height,T.format,T.type);for(const Ue of T.layerUpdates){const rt=Pe.data.subarray(Ue*De/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*De/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ue,Pe.width,Pe.height,1,Ie,rt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,me.depth,Ie,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,ke,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,me.depth,Ie,Oe,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,ke,Pe.width,Pe.height,me.depth,0,Ie,Oe,Pe.data)}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,ne,ke,je[0].width,je[0].height);for(let re=0,ue=je.length;re<ue;re++)Pe=je[re],T.format!==xn?Ie!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,Ie,Oe,Pe.data):t.texImage2D(i.TEXTURE_2D,re,ke,Pe.width,Pe.height,0,Ie,Oe,Pe.data)}else if(T.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ke,me.width,me.height,me.depth),k)if(T.layerUpdates.size>0){const re=lf(me.width,me.height,T.format,T.type);for(const ue of T.layerUpdates){const De=me.data.subarray(ue*re/me.data.BYTES_PER_ELEMENT,(ue+1)*re/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,Ie,Oe,De)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ie,Oe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,me.width,me.height,me.depth,0,Ie,Oe,me.data);else if(T.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,ne,ke,me.width,me.height,me.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ie,Oe,me.data)):t.texImage3D(i.TEXTURE_3D,0,ke,me.width,me.height,me.depth,0,Ie,Oe,me.data);else if(T.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,ne,ke,me.width,me.height);else{let re=me.width,ue=me.height;for(let De=0;De<ne;De++)t.texImage2D(i.TEXTURE_2D,De,ke,re,ue,0,Ie,Oe,null),re>>=1,ue>>=1}}else if(je.length>0){if(He&&qe){const re=Te(je[0]);t.texStorage2D(i.TEXTURE_2D,ne,ke,re.width,re.height)}for(let re=0,ue=je.length;re<ue;re++)Pe=je[re],He?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ie,Oe,Pe):t.texImage2D(i.TEXTURE_2D,re,ke,Ie,Oe,Pe);T.generateMipmaps=!1}else if(He){if(qe){const re=Te(me);t.texStorage2D(i.TEXTURE_2D,ne,ke,re.width,re.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Oe,me)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ie,Oe,me);m(T)&&p(Q),be.__version=te.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function se(I,T,H){if(T.image.length!==6)return;const Q=Be(I,T),ee=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const te=n.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);const be=xt.getPrimaries(xt.workingColorSpace),fe=T.colorSpace===sn?null:xt.getPrimaries(T.colorSpace),xe=T.colorSpace===sn||be===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ue=0;ue<6;ue++)!Qe&&!me?Ie[ue]=g(T.image[ue],!0,r.maxCubemapSize):Ie[ue]=me?T.image[ue].image:T.image[ue],Ie[ue]=Fe(T,Ie[ue]);const Oe=Ie[0],ke=s.convert(T.format,T.colorSpace),Pe=s.convert(T.type),je=y(T.internalFormat,ke,Pe,T.colorSpace),He=T.isVideoTexture!==!0,qe=te.__version===void 0||Q===!0,k=ee.dataReady;let ne=P(T,Oe);ye(i.TEXTURE_CUBE_MAP,T);let re;if(Qe){He&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,je,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){re=Ie[ue].mipmaps;for(let De=0;De<re.length;De++){const Ue=re[De];T.format!==xn?ke!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ue.width,Ue.height,ke,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,je,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ue.width,Ue.height,ke,Pe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,je,Ue.width,Ue.height,0,ke,Pe,Ue.data)}}}else{if(re=T.mipmaps,He&&qe){re.length>0&&ne++;const ue=Te(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ie[ue].width,Ie[ue].height,ke,Pe,Ie[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Ie[ue].width,Ie[ue].height,0,ke,Pe,Ie[ue].data);for(let De=0;De<re.length;De++){const rt=re[De].image[ue].image;He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,rt.width,rt.height,ke,Pe,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,je,rt.width,rt.height,0,ke,Pe,rt.data)}}else{He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ke,Pe,Ie[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,ke,Pe,Ie[ue]);for(let De=0;De<re.length;De++){const Ue=re[De];He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,ke,Pe,Ue.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,je,ke,Pe,Ue.image[ue])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),te.__version=ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function oe(I,T,H,Q,ee,te){const be=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),xe=y(H.internalFormat,be,fe,H.colorSpace),Qe=n.get(T),me=n.get(H);if(me.__renderTarget=T,!Qe.__hasExternalTextures){const Ie=Math.max(1,T.width>>te),Oe=Math.max(1,T.height>>te);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,xe,Ie,Oe,T.depth,0,be,fe,null):t.texImage2D(ee,te,xe,Ie,Oe,0,be,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ee,me.__webglTexture,0,ze(T)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ee,me.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(I,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const Q=T.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=S(T.stencilBuffer,ee),be=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ze(T);Ke(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,te,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,I)}else{const Q=T.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],be=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),xe=y(te.internalFormat,be,fe,te.colorSpace),Qe=ze(T);H&&Ke(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,xe,T.width,T.height):Ke(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const ee=Q.__webglTexture,te=ze(T);if(T.depthTexture.format===zs)Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Ks)Ke(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Re(I){const T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=Q}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),ae(T.__webglDepthbuffer[Q],I,!1);else{const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ae(T.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(I,T,H){const Q=n.get(I);T!==void 0&&oe(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Re(I)}function it(I){const T=I.texture,H=n.get(I),Q=n.get(T);I.addEventListener("dispose",A);const ee=I.textures,te=I.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let xe=0;xe<T.mipmaps.length;xe++)H.__webglFramebuffer[fe][xe]=i.createFramebuffer()}else H.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)H.__webglFramebuffer[fe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(be)for(let fe=0,xe=ee.length;fe<xe;fe++){const Qe=n.get(ee[fe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ke(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const xe=ee[fe];H.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const Qe=s.convert(xe.format,xe.colorSpace),me=s.convert(xe.type),Ie=y(xe.internalFormat,Qe,me,xe.colorSpace,I.isXRRenderTarget===!0),Oe=ze(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ie,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ye(i.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)oe(H.__webglFramebuffer[fe][xe],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else oe(H.__webglFramebuffer[fe],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,xe=ee.length;fe<xe;fe++){const Qe=ee[fe],me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ye(i.TEXTURE_2D,Qe),oe(H.__webglFramebuffer,I,Qe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),ye(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)oe(H.__webglFramebuffer[xe],I,T,i.COLOR_ATTACHMENT0,fe,xe);else oe(H.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,fe,0);m(T)&&p(fe),t.unbindTexture()}I.depthBuffer&&Re(I)}function Ve(I){const T=I.textures;for(let H=0,Q=T.length;H<Q;H++){const ee=T[H];if(m(ee)){const te=E(I),be=n.get(ee).__webglTexture;t.bindTexture(te,be),p(te),t.unbindTexture()}}}const st=[],F=[];function Xe(I){if(I.samples>0){if(Ke(I)===!1){const T=I.textures,H=I.width,Q=I.height;let ee=i.COLOR_BUFFER_BIT;const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(I),fe=T.length>1;if(fe)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Qe=n.get(T[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,i.NEAREST),l===!0&&(st.length=0,F.length=0,st.push(i.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(st.push(te),F.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Qe=n.get(T[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ze(I){return Math.min(r.maxSamples,I.samples)}function Ke(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ge(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Fe(I,T){const H=I.colorSpace,Q=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Fi&&H!==sn&&(xt.getTransfer(H)===bt?(Q!==xn||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Ce,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke}function a1(i,e){function t(n,r=sn){let s;const o=xt.getTransfer(r);if(n===Ni)return i.UNSIGNED_BYTE;if(n===vu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return i.BYTE;if(n===Id)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===gu)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===Nd)return i.ALPHA;if(n===Fd)return i.RGB;if(n===xn)return i.RGBA;if(n===Od)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===yu)return i.RED_INTEGER;if(n===Bd)return i.RG;if(n===Mu)return i.RG_INTEGER;if(n===wu)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===La||n===Da)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===wc||n===Ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Tc||n===Ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bc||n===Tc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===kc||n===Hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Vc||n===Gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kd||n===Wc||n===Xc||n===qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class l1 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c1={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const u1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
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

}`;class f1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:u1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d1 extends Js{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,_=null,v=null;const g=new f1,m=t.getContextAttributes();let p=null,E=null;const y=[],S=[],P=new nt;let D=null;const A=new Pn;A.viewport=new Dt;const C=new Pn;C.viewport=new Dt;const w=[A,C],M=new l1;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=y[j];return se===void 0&&(se=new Vl,y[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=y[j];return se===void 0&&(se=new Vl,y[j]=se),se.getGripSpace()},this.getHand=function(j){let se=y[j];return se===void 0&&(se=new Vl,y[j]=se),se.getHandSpace()};function O(j){const se=S.indexOf(j.inputSource);if(se===-1)return;const oe=y[se];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||o),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<y.length;j++){const se=S[j];se!==null&&(S[j]=null,y[j].disconnect(se))}U=null,z=null,g.reset(),e.setRenderTarget(p),_=null,d=null,f=null,r=null,E=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new Qi(_.framebufferWidth,_.framebufferHeight,{format:xn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,oe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ks:zs,oe=m.stencil?$s:rs);const Me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Qi(d.textureWidth,d.textureHeight,{format:xn,type:Ni,depthTexture:new Cu(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(j){for(let se=0;se<j.removed.length;se++){const oe=j.removed[se],ae=S.indexOf(oe);ae>=0&&(S[ae]=null,y[ae].disconnect(oe))}for(let se=0;se<j.added.length;se++){const oe=j.added[se];let ae=S.indexOf(oe);if(ae===-1){for(let Re=0;Re<y.length;Re++)if(Re>=S.length){S.push(oe),ae=Re;break}else if(S[Re]===null){S[Re]=oe,ae=Re;break}if(ae===-1)break}const Me=y[ae];Me&&Me.connect(oe)}}const q=new G,W=new G;function B(j,se,oe){q.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const ae=q.distanceTo(W),Me=se.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Ce=Me[14]/(Me[10]-1),it=Me[14]/(Me[10]+1),Ve=(Me[9]+1)/Me[5],st=(Me[9]-1)/Me[5],F=(Me[8]-1)/Me[0],Xe=(Re[8]+1)/Re[0],ze=Ce*F,Ke=Ce*Xe,ge=ae/(-F+Xe),Fe=ge*-F;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Me[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Te=Ce+ge,I=it+ge,T=ze-Fe,H=Ke+(ae-Fe),Q=Ve*it/I*Te,ee=st*it/I*Te;j.projectionMatrix.makePerspective(T,H,Q,ee,Te,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let se=j.near,oe=j.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),M.near=C.near=A.near=se,M.far=C.far=A.far=oe,(U!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,z=M.far),A.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const ae=j.parent,Me=M.cameras;ce(M,ae);for(let Re=0;Re<Me.length;Re++)ce(Me[Re],ae);Me.length===2?B(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),J(j,M,ae)};function J(j,se,oe){oe===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let he=null;function ye(j,se){if(u=se.getViewerPose(c||o),v=se,u!==null){const oe=u.views;_!==null&&(e.setRenderTargetFramebuffer(E,_.framebuffer),e.setRenderTarget(E));let ae=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Re=0;Re<oe.length;Re++){const Ce=oe[Re];let it=null;if(_!==null)it=_.getViewport(Ce);else{const st=f.getViewSubImage(d,Ce);it=st.viewport,Re===0&&(e.setRenderTargetTextures(E,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(E))}let Ve=w[Re];Ve===void 0&&(Ve=new Pn,Ve.layers.enable(Re),Ve.viewport=new Dt,w[Re]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Re===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Ve)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Re=f.getDepthInformation(oe[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,r.renderState)}}for(let oe=0;oe<y.length;oe++){const ae=S[oe],Me=y[oe];ae!==null&&Me!==void 0&&Me.update(ae,se,c||o)}he&&he(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),v=null}const Be=new Qd;Be.setAnimationLoop(ye),this.setAnimationLoop=function(j){he=j},this.dispose=function(){}}}const kr=new ei,p1=new vt;function m1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,S=E.envMapRotation;y&&(m.envMap.value=y,kr.copy(S),kr.x*=-1,kr.y*=-1,kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(kr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function c(E,y){let S=r[E.id];S===void 0&&(v(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(E,P);const D=e.render.frame;s[E.id]!==D&&(d(E),s[E.id]=D)}function u(E){const y=f();E.__bindingPointIndex=y;const S=i.createBuffer(),P=E.__size,D=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],S=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,A=S.length;D<A;D++){const C=Array.isArray(S[D])?S[D]:[S[D]];for(let w=0,M=C.length;w<M;w++){const U=C[w];if(_(U,D,w,P)===!0){const z=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let Y=0;Y<O.length;Y++){const q=O[Y],W=g(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+X,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(E,y,S,P){const D=E.value,A=y+"_"+S;if(P[A]===void 0)return typeof D=="number"||typeof D=="boolean"?P[A]=D:P[A]=D.clone(),!0;{const C=P[A];if(typeof D=="number"||typeof D=="boolean"){if(C!==D)return P[A]=D,!0}else if(C.equals(D)===!1)return C.copy(D),!0}return!1}function v(E){const y=E.uniforms;let S=0;const P=16;for(let A=0,C=y.length;A<C;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,U=w.length;M<U;M++){const z=w[M],O=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=O.length;X<Y;X++){const q=O[X],W=g(q),B=S%P,ce=B%W.boundary,J=B+ce;S+=ce,J!==0&&P-J<W.storage&&(S+=P-J),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=W.storage}}}const D=S%P;return D>0&&(S+=P-D),E.__size=S,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class tl{constructor(e={}){const{canvas:t=t0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Ii,this.toneMappingExposure=1;const S=this;let P=!1,D=0,A=0,C=null,w=-1,M=null;const U=new Dt,z=new Dt;let O=null;const X=new $e(0);let Y=0,q=t.width,W=t.height,B=1,ce=null,J=null;const he=new Dt(0,0,q,W),ye=new Dt(0,0,q,W);let Be=!1;const j=new Jd;let se=!1,oe=!1;const ae=new vt,Me=new vt,Re=new G,Ce=new Dt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function st(){return C===null?B:1}let F=n;function Xe(h,x){return t.getContext(h,x)}try{const h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_u}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const x="webgl2";if(F=Xe(x,h),F===null)throw Xe(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let ze,Ke,ge,Fe,Te,I,T,H,Q,ee,te,be,fe,xe,Qe,me,Ie,Oe,ke,Pe,je,He,qe,k;function ne(){ze=new Mx(F),ze.init(),He=new a1(F,ze),Ke=new _x(F,ze,e,He),ge=new r1(F,ze),Ke.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),Fe=new bx(F),Te=new GS,I=new o1(F,ze,ge,Te,Ke,He,Fe),T=new vx(S),H=new yx(S),Q=new D0(F),qe=new px(F,Q),ee=new wx(F,Q,Fe,qe),te=new Ax(F,ee,Q,Fe),ke=new Tx(F,Ke,I),me=new gx(Te),be=new VS(S,T,H,ze,Ke,qe,me),fe=new m1(S,Te),xe=new XS,Qe=new jS(ze),Oe=new dx(S,T,H,ge,te,_,l),Ie=new n1(S,te,Ke),k=new _1(F,Fe,Ke,ge),Pe=new mx(F,ze,Fe),je=new Ex(F,ze,Fe),Fe.programs=be.programs,S.capabilities=Ke,S.extensions=ze,S.properties=Te,S.renderLists=xe,S.shadowMap=Ie,S.state=ge,S.info=Fe}ne();const re=new d1(S,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const h=ze.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=ze.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(q,W,!1))},this.getSize=function(h){return h.set(q,W)},this.setSize=function(h,x,b=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=h,W=x,t.width=Math.floor(h*B),t.height=Math.floor(x*B),b===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(q*B,W*B).floor()},this.setDrawingBufferSize=function(h,x,b){q=h,W=x,B=b,t.width=Math.floor(h*b),t.height=Math.floor(x*b),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(U)},this.getViewport=function(h){return h.copy(he)},this.setViewport=function(h,x,b,R){h.isVector4?he.set(h.x,h.y,h.z,h.w):he.set(h,x,b,R),ge.viewport(U.copy(he).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(ye)},this.setScissor=function(h,x,b,R){h.isVector4?ye.set(h.x,h.y,h.z,h.w):ye.set(h,x,b,R),ge.scissor(z.copy(ye).multiplyScalar(B).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(h){ge.setScissorTest(Be=h)},this.setOpaqueSort=function(h){ce=h},this.setTransparentSort=function(h){J=h},this.getClearColor=function(h){return h.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(h=!0,x=!0,b=!0){let R=0;if(h){let L=!1;if(C!==null){const N=C.texture.format;L=N===wu||N===Mu||N===yu}if(L){const N=C.texture.type,V=N===Ni||N===rs||N===Zs||N===$s||N===vu||N===xu,ie=Oe.getClearColor(),Z=Oe.getClearAlpha(),$=ie.r,K=ie.g,le=ie.b;V?(v[0]=$,v[1]=K,v[2]=le,v[3]=Z,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=$,g[1]=K,g[2]=le,g[3]=Z,F.clearBufferiv(F.COLOR,0,g))}else R|=F.COLOR_BUFFER_BIT}x&&(R|=F.DEPTH_BUFFER_BIT),b&&(R|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),xe.dispose(),Qe.dispose(),Te.dispose(),T.dispose(),H.dispose(),te.dispose(),qe.dispose(),k.dispose(),be.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ar),re.removeEventListener("sessionend",Rr),cn.stop()};function ue(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const h=Fe.autoReset,x=Ie.enabled,b=Ie.autoUpdate,R=Ie.needsUpdate,L=Ie.type;ne(),Fe.autoReset=h,Ie.enabled=x,Ie.autoUpdate=b,Ie.needsUpdate=R,Ie.type=L}function Ue(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function rt(h){const x=h.target;x.removeEventListener("dispose",rt),Mt(x)}function Mt(h){Pt(h),Te.remove(h)}function Pt(h){const x=Te.get(h).programs;x!==void 0&&(x.forEach(function(b){be.releaseProgram(b)}),h.isShaderMaterial&&be.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,b,R,L,N){x===null&&(x=it);const V=L.isMesh&&L.matrixWorld.determinant()<0,ie=os(h,x,b,R,L);ge.setMaterial(R,V);let Z=b.index,$=1;if(R.wireframe===!0){if(Z=ee.getWireframeAttribute(b),Z===void 0)return;$=2}const K=b.drawRange,le=b.attributes.position;let pe=K.start*$,ve=(K.start+K.count)*$;N!==null&&(pe=Math.max(pe,N.start*$),ve=Math.min(ve,(N.start+N.count)*$)),Z!==null?(pe=Math.max(pe,0),ve=Math.min(ve,Z.count)):le!=null&&(pe=Math.max(pe,0),ve=Math.min(ve,le.count));const Ae=ve-pe;if(Ae<0||Ae===1/0)return;qe.setup(L,R,ie,b,Z);let Ee,Se=Pe;if(Z!==null&&(Ee=Q.get(Z),Se=je,Se.setIndex(Ee)),L.isMesh)R.wireframe===!0?(ge.setLineWidth(R.wireframeLinewidth*st()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(L.isLine){let de=R.linewidth;de===void 0&&(de=1),ge.setLineWidth(de*st()),L.isLineSegments?Se.setMode(F.LINES):L.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else L.isPoints?Se.setMode(F.POINTS):L.isSprite&&Se.setMode(F.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Se.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Se.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const de=L._multiDrawStarts,lt=L._multiDrawCounts,Ye=L._multiDrawCount,yt=Z?Q.get(Z).bytesPerElement:1,pt=Te.get(R).currentProgram.getUniforms();for(let et=0;et<Ye;et++)pt.setValue(F,"_gl_DrawID",et),Se.render(de[et]/yt,lt[et])}else if(L.isInstancedMesh)Se.renderInstances(pe,Ae,L.count);else if(b.isInstancedBufferGeometry){const de=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,lt=Math.min(b.instanceCount,de);Se.renderInstances(pe,Ae,lt)}else Se.render(pe,Ae)};function mt(h,x,b){h.transparent===!0&&h.side===En&&h.forceSinglePass===!1?(h.side=On,h.needsUpdate=!0,wi(h,x,b),h.side=br,h.needsUpdate=!0,wi(h,x,b),h.side=En):wi(h,x,b)}this.compile=function(h,x,b=null){b===null&&(b=h),p=Qe.get(b),p.init(x),y.push(p),b.traverseVisible(function(L){L.isLight&&L.layers.test(x.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),h!==b&&h.traverseVisible(function(L){L.isLight&&L.layers.test(x.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const R=new Set;return h.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const N=L.material;if(N)if(Array.isArray(N))for(let V=0;V<N.length;V++){const ie=N[V];mt(ie,b,L),R.add(ie)}else mt(N,b,L),R.add(N)}),y.pop(),p=null,R},this.compileAsync=function(h,x,b=null){const R=this.compile(h,x,b);return new Promise(L=>{function N(){if(R.forEach(function(V){Te.get(V).currentProgram.isReady()&&R.delete(V)}),R.size===0){L(h);return}setTimeout(N,10)}ze.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let wt=null;function Tn(h){wt&&wt(h)}function Ar(){cn.stop()}function Rr(){cn.start()}const cn=new Qd;cn.setAnimationLoop(Tn),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(h){wt=h,re.setAnimationLoop(h),h===null?cn.stop():cn.start()},re.addEventListener("sessionstart",Ar),re.addEventListener("sessionend",Rr),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(x),x=re.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,x,C),p=Qe.get(h,y.length),p.init(x),y.push(p),Me.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),j.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,se=me.init(this.clippingPlanes,oe),m=xe.get(h,E.length),m.init(),E.push(m),re.enabled===!0&&re.isPresenting===!0){const N=S.xr.getDepthSensingMesh();N!==null&&yi(N,x,-1/0,S.sortObjects)}yi(h,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ce,J),Ve=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ve&&Oe.addToRenderList(m,h),this.info.render.frame++,se===!0&&me.beginShadows();const b=p.state.shadowsArray;Ie.render(b,h,x),se===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=m.opaque,L=m.transmissive;if(p.setupLights(),x.isArrayCamera){const N=x.cameras;if(L.length>0)for(let V=0,ie=N.length;V<ie;V++){const Z=N[V];Cr(R,L,h,Z)}Ve&&Oe.render(h);for(let V=0,ie=N.length;V<ie;V++){const Z=N[V];tr(m,h,Z,Z.viewport)}}else L.length>0&&Cr(R,L,h,x),Ve&&Oe.render(h),tr(m,h,x);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),h.isScene===!0&&h.onAfterRender(S,h,x),qe.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&me.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function yi(h,x,b,R){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)b=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){R&&Ce.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Me);const V=te.update(h),ie=h.material;ie.visible&&m.push(h,V,ie,b,Ce.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){const V=te.update(h),ie=h.material;if(R&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ce.copy(h.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Ce.copy(V.boundingSphere.center)),Ce.applyMatrix4(h.matrixWorld).applyMatrix4(Me)),Array.isArray(ie)){const Z=V.groups;for(let $=0,K=Z.length;$<K;$++){const le=Z[$],pe=ie[le.materialIndex];pe&&pe.visible&&m.push(h,V,pe,b,Ce.z,le)}}else ie.visible&&m.push(h,V,ie,b,Ce.z,null)}}const N=h.children;for(let V=0,ie=N.length;V<ie;V++)yi(N[V],x,b,R)}function tr(h,x,b,R){const L=h.opaque,N=h.transmissive,V=h.transparent;p.setupLightsView(b),se===!0&&me.setGlobalState(S.clippingPlanes,b),R&&ge.viewport(U.copy(R)),L.length>0&&Mi(L,x,b),N.length>0&&Mi(N,x,b),V.length>0&&Mi(V,x,b),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Cr(h,x,b,R){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[R.id]===void 0&&(p.state.transmissionRenderTarget[R.id]=new Qi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Li:Ni,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const N=p.state.transmissionRenderTarget[R.id],V=R.viewport||U;N.setSize(V.z,V.w);const ie=S.getRenderTarget();S.setRenderTarget(N),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Ve&&Oe.render(b);const Z=S.toneMapping;S.toneMapping=Ii;const $=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),p.setupLightsView(R),se===!0&&me.setGlobalState(S.clippingPlanes,R),Mi(h,b,R),I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N),ze.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let le=0,pe=x.length;le<pe;le++){const ve=x[le],Ae=ve.object,Ee=ve.geometry,Se=ve.material,de=ve.group;if(Se.side===En&&Ae.layers.test(R.layers)){const lt=Se.side;Se.side=On,Se.needsUpdate=!0,Ut(Ae,b,R,Ee,Se,de),Se.side=lt,Se.needsUpdate=!0,K=!0}}K===!0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N))}S.setRenderTarget(ie),S.setClearColor(X,Y),$!==void 0&&(R.viewport=$),S.toneMapping=Z}function Mi(h,x,b){const R=x.isScene===!0?x.overrideMaterial:null;for(let L=0,N=h.length;L<N;L++){const V=h[L],ie=V.object,Z=V.geometry,$=R===null?V.material:R,K=V.group;ie.layers.test(b.layers)&&Ut(ie,x,b,Z,$,K)}}function Ut(h,x,b,R,L,N){h.onBeforeRender(S,x,b,R,L,N),h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),L.onBeforeRender(S,x,b,R,h,N),L.transparent===!0&&L.side===En&&L.forceSinglePass===!1?(L.side=On,L.needsUpdate=!0,S.renderBufferDirect(b,x,R,L,h,N),L.side=br,L.needsUpdate=!0,S.renderBufferDirect(b,x,R,L,h,N),L.side=En):S.renderBufferDirect(b,x,R,L,h,N),h.onAfterRender(S,x,b,R,L,N)}function wi(h,x,b){x.isScene!==!0&&(x=it);const R=Te.get(h),L=p.state.lights,N=p.state.shadowsArray,V=L.state.version,ie=be.getParameters(h,L.state,N,x,b),Z=be.getProgramCacheKey(ie);let $=R.programs;R.environment=h.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(h.isMeshStandardMaterial?H:T).get(h.envMap||R.environment),R.envMapRotation=R.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,$===void 0&&(h.addEventListener("dispose",rt),$=new Map,R.programs=$);let K=$.get(Z);if(K!==void 0){if(R.currentProgram===K&&R.lightsStateVersion===V)return Pr(h,ie),K}else ie.uniforms=be.getUniforms(h),h.onBeforeCompile(ie,S),K=be.acquireProgram(ie,Z),$.set(Z,K),R.uniforms=ie.uniforms;const le=R.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(le.clippingPlanes=me.uniform),Pr(h,ie),R.needsLights=ui(h),R.lightsStateVersion=V,R.needsLights&&(le.ambientLightColor.value=L.state.ambient,le.lightProbe.value=L.state.probe,le.directionalLights.value=L.state.directional,le.directionalLightShadows.value=L.state.directionalShadow,le.spotLights.value=L.state.spot,le.spotLightShadows.value=L.state.spotShadow,le.rectAreaLights.value=L.state.rectArea,le.ltc_1.value=L.state.rectAreaLTC1,le.ltc_2.value=L.state.rectAreaLTC2,le.pointLights.value=L.state.point,le.pointLightShadows.value=L.state.pointShadow,le.hemisphereLights.value=L.state.hemi,le.directionalShadowMap.value=L.state.directionalShadowMap,le.directionalShadowMatrix.value=L.state.directionalShadowMatrix,le.spotShadowMap.value=L.state.spotShadowMap,le.spotLightMatrix.value=L.state.spotLightMatrix,le.spotLightMap.value=L.state.spotLightMap,le.pointShadowMap.value=L.state.pointShadowMap,le.pointShadowMatrix.value=L.state.pointShadowMatrix),R.currentProgram=K,R.uniformsList=null,K}function ci(h){if(h.uniformsList===null){const x=h.currentProgram.getUniforms();h.uniformsList=Ua.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Pr(h,x){const b=Te.get(h);b.outputColorSpace=x.outputColorSpace,b.batching=x.batching,b.batchingColor=x.batchingColor,b.instancing=x.instancing,b.instancingColor=x.instancingColor,b.instancingMorph=x.instancingMorph,b.skinning=x.skinning,b.morphTargets=x.morphTargets,b.morphNormals=x.morphNormals,b.morphColors=x.morphColors,b.morphTargetsCount=x.morphTargetsCount,b.numClippingPlanes=x.numClippingPlanes,b.numIntersection=x.numClipIntersection,b.vertexAlphas=x.vertexAlphas,b.vertexTangents=x.vertexTangents,b.toneMapping=x.toneMapping}function os(h,x,b,R,L){x.isScene!==!0&&(x=it),I.resetTextureUnits();const N=x.fog,V=R.isMeshStandardMaterial?x.environment:null,ie=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fi,Z=(R.isMeshStandardMaterial?H:T).get(R.envMap||V),$=R.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,K=!!b.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),le=!!b.morphAttributes.position,pe=!!b.morphAttributes.normal,ve=!!b.morphAttributes.color;let Ae=Ii;R.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=S.toneMapping);const Ee=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Se=Ee!==void 0?Ee.length:0,de=Te.get(R),lt=p.state.lights;if(se===!0&&(oe===!0||h!==M)){const Ze=h===M&&R.id===w;me.setState(R,h,Ze)}let Ye=!1;R.version===de.__version?(de.needsLights&&de.lightsStateVersion!==lt.state.version||de.outputColorSpace!==ie||L.isBatchedMesh&&de.batching===!1||!L.isBatchedMesh&&de.batching===!0||L.isBatchedMesh&&de.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&de.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&de.instancing===!1||!L.isInstancedMesh&&de.instancing===!0||L.isSkinnedMesh&&de.skinning===!1||!L.isSkinnedMesh&&de.skinning===!0||L.isInstancedMesh&&de.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&de.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&de.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&de.instancingMorph===!1&&L.morphTexture!==null||de.envMap!==Z||R.fog===!0&&de.fog!==N||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==me.numPlanes||de.numIntersection!==me.numIntersection)||de.vertexAlphas!==$||de.vertexTangents!==K||de.morphTargets!==le||de.morphNormals!==pe||de.morphColors!==ve||de.toneMapping!==Ae||de.morphTargetsCount!==Se)&&(Ye=!0):(Ye=!0,de.__version=R.version);let yt=de.currentProgram;Ye===!0&&(yt=wi(R,x,L));let pt=!1,et=!1,Et=!1;const ut=yt.getUniforms(),ot=de.uniforms;if(ge.useProgram(yt.program)&&(pt=!0,et=!0,Et=!0),R.id!==w&&(w=R.id,et=!0),pt||M!==h){ge.buffers.depth.getReversed()?(ae.copy(h.projectionMatrix),i0(ae),r0(ae),ut.setValue(F,"projectionMatrix",ae)):ut.setValue(F,"projectionMatrix",h.projectionMatrix),ut.setValue(F,"viewMatrix",h.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,Re.setFromMatrixPosition(h.matrixWorld)),Ke.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ut.setValue(F,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,et=!0,Et=!0)}if(L.isSkinnedMesh){ut.setOptional(F,L,"bindMatrix"),ut.setOptional(F,L,"bindMatrixInverse");const Ze=L.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ut.setValue(F,"boneTexture",Ze.boneTexture,I))}L.isBatchedMesh&&(ut.setOptional(F,L,"batchingTexture"),ut.setValue(F,"batchingTexture",L._matricesTexture,I),ut.setOptional(F,L,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",L._indirectTexture,I),ut.setOptional(F,L,"batchingColorTexture"),L._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",L._colorsTexture,I));const tt=b.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0)&&ke.update(L,b,yt),(et||de.receiveShadow!==L.receiveShadow)&&(de.receiveShadow=L.receiveShadow,ut.setValue(F,"receiveShadow",L.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(ot.envMap.value=Z,ot.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(ot.envMapIntensity.value=x.environmentIntensity),et&&(ut.setValue(F,"toneMappingExposure",S.toneMappingExposure),de.needsLights&&ti(ot,Et),N&&R.fog===!0&&fe.refreshFogUniforms(ot,N),fe.refreshMaterialUniforms(ot,R,B,W,p.state.transmissionRenderTarget[h.id]),Ua.upload(F,ci(de),ot,I)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ua.upload(F,ci(de),ot,I),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ut.setValue(F,"center",L.center),ut.setValue(F,"modelViewMatrix",L.modelViewMatrix),ut.setValue(F,"normalMatrix",L.normalMatrix),ut.setValue(F,"modelMatrix",L.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Ze=R.uniformsGroups;for(let Nt=0,Ot=Ze.length;Nt<Ot;Nt++){const at=Ze[Nt];k.update(at,yt),k.bind(at,yt)}}return yt}function ti(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function ui(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(h,x,b){Te.get(h.texture).__webglTexture=x,Te.get(h.depthTexture).__webglTexture=b;const R=Te.get(h);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=b===void 0,R.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){const b=Te.get(h);b.__webglFramebuffer=x,b.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,b=0){C=h,D=x,A=b;let R=!0,L=null,N=!1,V=!1;if(h){const Z=Te.get(h);if(Z.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(F.FRAMEBUFFER,null),R=!1;else if(Z.__webglFramebuffer===void 0)I.setupRenderTarget(h);else if(Z.__hasExternalTextures)I.rebindTextures(h,Te.get(h.texture).__webglTexture,Te.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const le=h.depthTexture;if(Z.__boundDepthTexture!==le){if(le!==null&&Te.has(le)&&(h.width!==le.image.width||h.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(h)}}const $=h.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(V=!0);const K=Te.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[x])?L=K[x][b]:L=K[x],N=!0):h.samples>0&&I.useMultisampledRTT(h)===!1?L=Te.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?L=K[b]:L=K,U.copy(h.viewport),z.copy(h.scissor),O=h.scissorTest}else U.copy(he).multiplyScalar(B).floor(),z.copy(ye).multiplyScalar(B).floor(),O=Be;if(ge.bindFramebuffer(F.FRAMEBUFFER,L)&&R&&ge.drawBuffers(h,L),ge.viewport(U),ge.scissor(z),ge.setScissorTest(O),N){const Z=Te.get(h.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,Z.__webglTexture,b)}else if(V){const Z=Te.get(h.texture),$=x||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.__webglTexture,b||0,$)}w=-1},this.readRenderTargetPixels=function(h,x,b,R,L,N,V){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Te.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(ie=ie[V]),ie){ge.bindFramebuffer(F.FRAMEBUFFER,ie);try{const Z=h.texture,$=Z.format,K=Z.type;if(!Ke.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-R&&b>=0&&b<=h.height-L&&F.readPixels(x,b,R,L,He.convert($),He.convert(K),N)}finally{const Z=C!==null?Te.get(C).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,x,b,R,L,N,V){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Te.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(ie=ie[V]),ie){const Z=h.texture,$=Z.format,K=Z.type;if(!Ke.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-R&&b>=0&&b<=h.height-L){ge.bindFramebuffer(F.FRAMEBUFFER,ie);const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,N.byteLength,F.STREAM_READ),F.readPixels(x,b,R,L,He.convert($),He.convert(K),0);const pe=C!==null?Te.get(C).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,pe);const ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await n0(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,N),F.deleteBuffer(le),F.deleteSync(ve),N}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,x=null,b=0){h.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);const R=Math.pow(2,-b),L=Math.floor(h.image.width*R),N=Math.floor(h.image.height*R),V=x!==null?x.x:0,ie=x!==null?x.y:0;I.setTexture2D(h,0),F.copyTexSubImage2D(F.TEXTURE_2D,b,0,0,V,ie,L,N),ge.unbindTexture()},this.copyTextureToTexture=function(h,x,b=null,R=null,L=0){h.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,h=arguments[1],x=arguments[2],L=arguments[3]||0,b=null);let N,V,ie,Z,$,K,le,pe,ve;const Ae=h.isCompressedTexture?h.mipmaps[L]:h.image;b!==null?(N=b.max.x-b.min.x,V=b.max.y-b.min.y,ie=b.isBox3?b.max.z-b.min.z:1,Z=b.min.x,$=b.min.y,K=b.isBox3?b.min.z:0):(N=Ae.width,V=Ae.height,ie=Ae.depth||1,Z=0,$=0,K=0),R!==null?(le=R.x,pe=R.y,ve=R.z):(le=0,pe=0,ve=0);const Ee=He.convert(x.format),Se=He.convert(x.type);let de;x.isData3DTexture?(I.setTexture3D(x,0),de=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(I.setTexture2DArray(x,0),de=F.TEXTURE_2D_ARRAY):(I.setTexture2D(x,0),de=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const lt=F.getParameter(F.UNPACK_ROW_LENGTH),Ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yt=F.getParameter(F.UNPACK_SKIP_PIXELS),pt=F.getParameter(F.UNPACK_SKIP_ROWS),et=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Z),F.pixelStorei(F.UNPACK_SKIP_ROWS,$),F.pixelStorei(F.UNPACK_SKIP_IMAGES,K);const Et=h.isDataArrayTexture||h.isData3DTexture,ut=x.isDataArrayTexture||x.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const ot=Te.get(h),tt=Te.get(x),Ze=Te.get(ot.__renderTarget),Nt=Te.get(tt.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<ie;Ot++)Et&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(h).__webglTexture,L,K+Ot),h.isDepthTexture?(ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,L,ve+Ot),F.blitFramebuffer(Z,$,N,V,le,pe,N,V,F.DEPTH_BUFFER_BIT,F.NEAREST)):ut?F.copyTexSubImage3D(de,L,le,pe,ve+Ot,Z,$,N,V):F.copyTexSubImage2D(de,L,le,pe,ve+Ot,Z,$,N,V);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?h.isDataTexture||h.isData3DTexture?F.texSubImage3D(de,L,le,pe,ve,N,V,ie,Ee,Se,Ae.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(de,L,le,pe,ve,N,V,ie,Ee,Ae.data):F.texSubImage3D(de,L,le,pe,ve,N,V,ie,Ee,Se,Ae):h.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,L,le,pe,N,V,Ee,Se,Ae.data):h.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,L,le,pe,Ae.width,Ae.height,Ee,Ae.data):F.texSubImage2D(F.TEXTURE_2D,L,le,pe,N,V,Ee,Se,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,et),L===0&&x.generateMipmaps&&F.generateMipmap(de),ge.unbindTexture()},this.copyTextureToTexture3D=function(h,x,b=null,R=null,L=0){return h.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,R=arguments[1]||null,h=arguments[2],x=arguments[3],L=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,b,R,L)},this.initRenderTarget=function(h){Te.get(h).__webglFramebuffer===void 0&&I.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?I.setTextureCube(h,0):h.isData3DTexture?I.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?I.setTexture2DArray(h,0):I.setTexture2D(h,0),ge.unbindTexture()},this.resetState=function(){D=0,A=0,C=null,ge.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}class Go extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pu extends ln{constructor(e=null,t=1,n=1,r,s,o,a,l,c=an,u=an,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class g1 extends ln{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class v1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const x1=new v1;class Wo{constructor(e){this.manager=e!==void 0?e:x1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class S1 extends Error{constructor(e,t){super(e),this.response=t}}class y1 extends Wo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:r});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),_=d?parseInt(d):0,v=_!==0;let g=0;const m=new ReadableStream({start(p){E();function E(){f.read().then(({done:y,value:S})=>{if(y)p.close();else{g+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:_});for(let D=0,A=u.length;D<A;D++){const C=u[D];C.onProgress&&C.onProgress(P)}p.enqueue(S),E()}},y=>{p.error(y)})}}});return new Response(m)}else throw new S1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(d);return c.arrayBuffer().then(v=>_.decode(v))}}}).then(c=>{Xa.add(e,c);const u=Gi[e];delete Gi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onLoad&&_.onLoad(c)}}).catch(c=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let f=0,d=u.length;f<d;f++){const _=u[f];_.onError&&_.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class M1 extends Wo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ko("img");function l(){u(),Xa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class w1 extends Wo{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Pu,a=new y1(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Zn,o.wrapT=c.wrapT!==void 0?c.wrapT:Zn,o.magFilter=c.magFilter!==void 0?c.magFilter:St,o.minFilter=c.minFilter!==void 0?c.minFilter:St,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zi),c.mipmapCount===1&&(o.minFilter=St),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class dr extends Wo{constructor(e){super(e)}load(e,t,n,r){const s=new ln,o=new M1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zr extends er{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var oi=Uint8Array,Ls=Uint16Array,E1=Int32Array,rp=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),sp=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),b1=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),op=function(i,e){for(var t=new Ls(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new E1(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},ap=op(rp,2),lp=ap.b,T1=ap.r;lp[28]=258,T1[258]=28;var A1=op(sp,0),R1=A1.b,Zc=new Ls(32768);for(var It=0;It<32768;++It){var fr=(It&43690)>>1|(It&21845)<<1;fr=(fr&52428)>>2|(fr&13107)<<2,fr=(fr&61680)>>4|(fr&3855)<<4,Zc[It]=((fr&65280)>>8|(fr&255)<<8)>>1}var To=(function(i,e,t){for(var n=i.length,r=0,s=new Ls(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Ls(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Ls(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)a[Zc[f]>>l]=c}else for(a=new Ls(n),r=0;r<n;++r)i[r]&&(a[r]=Zc[o[i[r]-1]++]>>15-i[r]);return a}),Xo=new oi(288);for(var It=0;It<144;++It)Xo[It]=8;for(var It=144;It<256;++It)Xo[It]=9;for(var It=256;It<280;++It)Xo[It]=7;for(var It=280;It<288;++It)Xo[It]=8;var cp=new oi(32);for(var It=0;It<32;++It)cp[It]=5;var C1=To(Xo,9,1),P1=To(cp,5,1),Gl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},pi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Wl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},L1=function(i){return(i+7)/8|0},D1=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new oi(i.subarray(e,t))},I1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],gi=function(i,e,t){var n=new Error(e||I1[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,gi),!t)throw n;return n},U1=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new oi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new oi(r*3));var c=function(it){var Ve=t.length;if(it>Ve){var st=new oi(Math.max(Ve*2,it));st.set(t),t=st}},u=e.f||0,f=e.p||0,d=e.b||0,_=e.l,v=e.d,g=e.m,m=e.n,p=r*8;do{if(!_){u=pi(i,f,1);var E=pi(i,f+1,3);if(f+=3,E)if(E==1)_=C1,v=P1,g=9,m=5;else if(E==2){var D=pi(i,f,31)+257,A=pi(i,f+10,15)+4,C=D+pi(i,f+5,31)+1;f+=14;for(var w=new oi(C),M=new oi(19),U=0;U<A;++U)M[b1[U]]=pi(i,f+U*3,7);f+=A*3;for(var z=Gl(M),O=(1<<z)-1,X=To(M,z,1),U=0;U<C;){var Y=X[pi(i,f,O)];f+=Y&15;var y=Y>>4;if(y<16)w[U++]=y;else{var q=0,W=0;for(y==16?(W=3+pi(i,f,3),f+=2,q=w[U-1]):y==17?(W=3+pi(i,f,7),f+=3):y==18&&(W=11+pi(i,f,127),f+=7);W--;)w[U++]=q}}var B=w.subarray(0,D),ce=w.subarray(D);g=Gl(B),m=Gl(ce),_=To(B,g,1),v=To(ce,m,1)}else gi(1);else{var y=L1(f)+4,S=i[y-4]|i[y-3]<<8,P=y+S;if(P>r){l&&gi(0);break}a&&c(d+S),t.set(i.subarray(y,P),d),e.b=d+=S,e.p=f=P*8,e.f=u;continue}if(f>p){l&&gi(0);break}}a&&c(d+131072);for(var J=(1<<g)-1,he=(1<<m)-1,ye=f;;ye=f){var q=_[Wl(i,f)&J],Be=q>>4;if(f+=q&15,f>p){l&&gi(0);break}if(q||gi(2),Be<256)t[d++]=Be;else if(Be==256){ye=f,_=null;break}else{var j=Be-254;if(Be>264){var U=Be-257,se=rp[U];j=pi(i,f,(1<<se)-1)+lp[U],f+=se}var oe=v[Wl(i,f)&he],ae=oe>>4;oe||gi(3),f+=oe&15;var ce=R1[ae];if(ae>3){var se=sp[ae];ce+=Wl(i,f)&(1<<se)-1,f+=se}if(f>p){l&&gi(0);break}a&&c(d+131072);var Me=d+j;if(d<ce){var Re=s-ce,Ce=Math.min(ce,Me);for(Re+d<0&&gi(3);d<Ce;++d)t[d]=n[Re+d]}for(;d<Me;++d)t[d]=t[d-ce]}}e.l=_,e.p=ye,e.b=d,e.f=u,_&&(u=1,e.m=g,e.d=v,e.n=m)}while(!u);return d!=t.length&&o?D1(t,0,d):t.subarray(0,d)},N1=new oi(0),F1=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&gi(6,"invalid zlib data"),(i[1]>>5&1)==1&&gi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function ga(i,e){return U1(i.subarray(F1(i),-4),{i:2},e,e)}var O1=typeof TextDecoder<"u"&&new TextDecoder,z1=0;try{O1.decode(N1,{stream:!0}),z1=1}catch{}class B1 extends w1{constructor(e){super(e),this.type=Li}parse(e){const w=Math.pow(2.7182818,2.2);function M(h,x){let b=0;for(let L=0;L<65536;++L)(L==0||h[L>>3]&1<<(L&7))&&(x[b++]=L);const R=b-1;for(;b<65536;)x[b++]=0;return R}function U(h){for(let x=0;x<16384;x++)h[x]={},h[x].len=0,h[x].lit=0,h[x].p=null}const z={l:0,c:0,lc:0};function O(h,x,b,R,L){for(;b<h;)x=x<<8|Pe(R,L),b+=8;b-=h,z.l=x>>b&(1<<h)-1,z.c=x,z.lc=b}const X=new Array(59);function Y(h){for(let b=0;b<=58;++b)X[b]=0;for(let b=0;b<65537;++b)X[h[b]]+=1;let x=0;for(let b=58;b>0;--b){const R=x+X[b]>>1;X[b]=x,x=R}for(let b=0;b<65537;++b){const R=h[b];R>0&&(h[b]=R|X[R]++<<6)}}function q(h,x,b,R,L,N){const V=x;let ie=0,Z=0;for(;R<=L;R++){if(V.value-x.value>b)return!1;O(6,ie,Z,h,V);const $=z.l;if(ie=z.c,Z=z.lc,N[R]=$,$==63){if(V.value-x.value>b)throw new Error("Something wrong with hufUnpackEncTable");O(8,ie,Z,h,V);let K=z.l+6;if(ie=z.c,Z=z.lc,R+K>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}else if($>=59){let K=$-59+2;if(R+K>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)N[R++]=0;R--}}Y(N)}function W(h){return h&63}function B(h){return h>>6}function ce(h,x,b,R){for(;x<=b;x++){const L=B(h[x]),N=W(h[x]);if(L>>N)throw new Error("Invalid table entry");if(N>14){const V=R[L>>N-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const ie=V.p;V.p=new Array(V.lit);for(let Z=0;Z<V.lit-1;++Z)V.p[Z]=ie[Z]}else V.p=new Array(1);V.p[V.lit-1]=x}else if(N){let V=0;for(let ie=1<<14-N;ie>0;ie--){const Z=R[(L<<14-N)+V];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=N,Z.lit=x,V++}}}return!0}const J={c:0,lc:0};function he(h,x,b,R){h=h<<8|Pe(b,R),x+=8,J.c=h,J.lc=x}const ye={c:0,lc:0};function Be(h,x,b,R,L,N,V,ie,Z){if(h==x){R<8&&(he(b,R,L,N),b=J.c,R=J.lc),R-=8;let $=b>>R;if($=new Uint8Array([$])[0],ie.value+$>Z)return!1;const K=V[ie.value-1];for(;$-- >0;)V[ie.value++]=K}else if(ie.value<Z)V[ie.value++]=h;else return!1;ye.c=b,ye.lc=R}function j(h){return h&65535}function se(h){const x=j(h);return x>32767?x-65536:x}const oe={a:0,b:0};function ae(h,x){const b=se(h),L=se(x),N=b+(L&1)+(L>>1),V=N,ie=N-L;oe.a=V,oe.b=ie}function Me(h,x){const b=j(h),R=j(x),L=b-(R>>1)&65535,N=R+L-32768&65535;oe.a=N,oe.b=L}function Re(h,x,b,R,L,N,V){const ie=V<16384,Z=b>L?L:b;let $=1,K,le;for(;$<=Z;)$<<=1;for($>>=1,K=$,$>>=1;$>=1;){le=0;const pe=le+N*(L-K),ve=N*$,Ae=N*K,Ee=R*$,Se=R*K;let de,lt,Ye,yt;for(;le<=pe;le+=Ae){let pt=le;const et=le+R*(b-K);for(;pt<=et;pt+=Se){const Et=pt+Ee,ut=pt+ve,ot=ut+Ee;ie?(ae(h[pt+x],h[ut+x]),de=oe.a,Ye=oe.b,ae(h[Et+x],h[ot+x]),lt=oe.a,yt=oe.b,ae(de,lt),h[pt+x]=oe.a,h[Et+x]=oe.b,ae(Ye,yt),h[ut+x]=oe.a,h[ot+x]=oe.b):(Me(h[pt+x],h[ut+x]),de=oe.a,Ye=oe.b,Me(h[Et+x],h[ot+x]),lt=oe.a,yt=oe.b,Me(de,lt),h[pt+x]=oe.a,h[Et+x]=oe.b,Me(Ye,yt),h[ut+x]=oe.a,h[ot+x]=oe.b)}if(b&$){const Et=pt+ve;ie?ae(h[pt+x],h[Et+x]):Me(h[pt+x],h[Et+x]),de=oe.a,h[Et+x]=oe.b,h[pt+x]=de}}if(L&$){let pt=le;const et=le+R*(b-K);for(;pt<=et;pt+=Se){const Et=pt+Ee;ie?ae(h[pt+x],h[Et+x]):Me(h[pt+x],h[Et+x]),de=oe.a,h[Et+x]=oe.b,h[pt+x]=de}}K=$,$>>=1}return le}function Ce(h,x,b,R,L,N,V,ie,Z){let $=0,K=0;const le=V,pe=Math.trunc(R.value+(L+7)/8);for(;R.value<pe;)for(he($,K,b,R),$=J.c,K=J.lc;K>=14;){const Ae=$>>K-14&16383,Ee=x[Ae];if(Ee.len)K-=Ee.len,Be(Ee.lit,N,$,K,b,R,ie,Z,le),$=ye.c,K=ye.lc;else{if(!Ee.p)throw new Error("hufDecode issues");let Se;for(Se=0;Se<Ee.lit;Se++){const de=W(h[Ee.p[Se]]);for(;K<de&&R.value<pe;)he($,K,b,R),$=J.c,K=J.lc;if(K>=de&&B(h[Ee.p[Se]])==($>>K-de&(1<<de)-1)){K-=de,Be(Ee.p[Se],N,$,K,b,R,ie,Z,le),$=ye.c,K=ye.lc;break}}if(Se==Ee.lit)throw new Error("hufDecode issues")}}const ve=8-L&7;for($>>=ve,K-=ve;K>0;){const Ae=x[$<<14-K&16383];if(Ae.len)K-=Ae.len,Be(Ae.lit,N,$,K,b,R,ie,Z,le),$=ye.c,K=ye.lc;else throw new Error("hufDecode issues")}return!0}function it(h,x,b,R,L,N){const V={value:0},ie=b.value,Z=ke(x,b),$=ke(x,b);b.value+=4;const K=ke(x,b);if(b.value+=4,Z<0||Z>=65537||$<0||$>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const le=new Array(65537),pe=new Array(16384);U(pe);const ve=R-(b.value-ie);if(q(h,b,ve,Z,$,le),K>8*(R-(b.value-ie)))throw new Error("Something wrong with hufUncompress");ce(le,Z,$,pe),Ce(le,pe,h,b,K,$,N,L,V)}function Ve(h,x,b){for(let R=0;R<b;++R)x[R]=h[x[R]]}function st(h){for(let x=1;x<h.length;x++){const b=h[x-1]+h[x]-128;h[x]=b}}function F(h,x){let b=0,R=Math.floor((h.length+1)/2),L=0;const N=h.length-1;for(;!(L>N||(x[L++]=h[b++],L>N));)x[L++]=h[R++]}function Xe(h){let x=h.byteLength;const b=new Array;let R=0;const L=new DataView(h);for(;x>0;){const N=L.getInt8(R++);if(N<0){const V=-N;x-=V+1;for(let ie=0;ie<V;ie++)b.push(L.getUint8(R++))}else{const V=N;x-=2;const ie=L.getUint8(R++);for(let Z=0;Z<V+1;Z++)b.push(ie)}}return b}function ze(h,x,b,R,L,N){let V=new DataView(N.buffer);const ie=b[h.idx[0]].width,Z=b[h.idx[0]].height,$=3,K=Math.floor(ie/8),le=Math.ceil(ie/8),pe=Math.ceil(Z/8),ve=ie-(le-1)*8,Ae=Z-(pe-1)*8,Ee={value:0},Se=new Array($),de=new Array($),lt=new Array($),Ye=new Array($),yt=new Array($);for(let et=0;et<$;++et)yt[et]=x[h.idx[et]],Se[et]=et<1?0:Se[et-1]+le*pe,de[et]=new Float32Array(64),lt[et]=new Uint16Array(64),Ye[et]=new Uint16Array(le*64);for(let et=0;et<pe;++et){let Et=8;et==pe-1&&(Et=Ae);let ut=8;for(let tt=0;tt<le;++tt){tt==le-1&&(ut=ve);for(let Ze=0;Ze<$;++Ze)lt[Ze].fill(0),lt[Ze][0]=L[Se[Ze]++],Ke(Ee,R,lt[Ze]),ge(lt[Ze],de[Ze]),Fe(de[Ze]);Te(de);for(let Ze=0;Ze<$;++Ze)I(de[Ze],Ye[Ze],tt*64)}let ot=0;for(let tt=0;tt<$;++tt){const Ze=b[h.idx[tt]].type;for(let Nt=8*et;Nt<8*et+Et;++Nt){ot=yt[tt][Nt];for(let Ot=0;Ot<K;++Ot){const at=Ot*64+(Nt&7)*8;V.setUint16(ot+0*Ze,Ye[tt][at+0],!0),V.setUint16(ot+2*Ze,Ye[tt][at+1],!0),V.setUint16(ot+4*Ze,Ye[tt][at+2],!0),V.setUint16(ot+6*Ze,Ye[tt][at+3],!0),V.setUint16(ot+8*Ze,Ye[tt][at+4],!0),V.setUint16(ot+10*Ze,Ye[tt][at+5],!0),V.setUint16(ot+12*Ze,Ye[tt][at+6],!0),V.setUint16(ot+14*Ze,Ye[tt][at+7],!0),ot+=16*Ze}}if(K!=le)for(let Nt=8*et;Nt<8*et+Et;++Nt){const Ot=yt[tt][Nt]+8*K*2*Ze,at=K*64+(Nt&7)*8;for(let An=0;An<ut;++An)V.setUint16(Ot+An*2*Ze,Ye[tt][at+An],!0)}}}const pt=new Uint16Array(ie);V=new DataView(N.buffer);for(let et=0;et<$;++et){b[h.idx[et]].decoded=!0;const Et=b[h.idx[et]].type;if(b[et].type==2)for(let ut=0;ut<Z;++ut){const ot=yt[et][ut];for(let tt=0;tt<ie;++tt)pt[tt]=V.getUint16(ot+tt*2*Et,!0);for(let tt=0;tt<ie;++tt)V.setFloat32(ot+tt*2*Et,ne(pt[tt]),!0)}}}function Ke(h,x,b){let R,L=1;for(;L<64;)R=x[h.value],R==65280?L=64:R>>8==255?L+=R&255:(b[L]=R,L++),h.value++}function ge(h,x){x[0]=ne(h[0]),x[1]=ne(h[1]),x[2]=ne(h[5]),x[3]=ne(h[6]),x[4]=ne(h[14]),x[5]=ne(h[15]),x[6]=ne(h[27]),x[7]=ne(h[28]),x[8]=ne(h[2]),x[9]=ne(h[4]),x[10]=ne(h[7]),x[11]=ne(h[13]),x[12]=ne(h[16]),x[13]=ne(h[26]),x[14]=ne(h[29]),x[15]=ne(h[42]),x[16]=ne(h[3]),x[17]=ne(h[8]),x[18]=ne(h[12]),x[19]=ne(h[17]),x[20]=ne(h[25]),x[21]=ne(h[30]),x[22]=ne(h[41]),x[23]=ne(h[43]),x[24]=ne(h[9]),x[25]=ne(h[11]),x[26]=ne(h[18]),x[27]=ne(h[24]),x[28]=ne(h[31]),x[29]=ne(h[40]),x[30]=ne(h[44]),x[31]=ne(h[53]),x[32]=ne(h[10]),x[33]=ne(h[19]),x[34]=ne(h[23]),x[35]=ne(h[32]),x[36]=ne(h[39]),x[37]=ne(h[45]),x[38]=ne(h[52]),x[39]=ne(h[54]),x[40]=ne(h[20]),x[41]=ne(h[22]),x[42]=ne(h[33]),x[43]=ne(h[38]),x[44]=ne(h[46]),x[45]=ne(h[51]),x[46]=ne(h[55]),x[47]=ne(h[60]),x[48]=ne(h[21]),x[49]=ne(h[34]),x[50]=ne(h[37]),x[51]=ne(h[47]),x[52]=ne(h[50]),x[53]=ne(h[56]),x[54]=ne(h[59]),x[55]=ne(h[61]),x[56]=ne(h[35]),x[57]=ne(h[36]),x[58]=ne(h[48]),x[59]=ne(h[49]),x[60]=ne(h[57]),x[61]=ne(h[58]),x[62]=ne(h[62]),x[63]=ne(h[63])}function Fe(h){const x=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),L=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),ie=.5*Math.cos(7*3.14159/16),Z=new Array(4),$=new Array(4),K=new Array(4),le=new Array(4);for(let pe=0;pe<8;++pe){const ve=pe*8;Z[0]=R*h[ve+2],Z[1]=V*h[ve+2],Z[2]=R*h[ve+6],Z[3]=V*h[ve+6],$[0]=b*h[ve+1]+L*h[ve+3]+N*h[ve+5]+ie*h[ve+7],$[1]=L*h[ve+1]-ie*h[ve+3]-b*h[ve+5]-N*h[ve+7],$[2]=N*h[ve+1]-b*h[ve+3]+ie*h[ve+5]+L*h[ve+7],$[3]=ie*h[ve+1]-N*h[ve+3]+L*h[ve+5]-b*h[ve+7],K[0]=x*(h[ve+0]+h[ve+4]),K[3]=x*(h[ve+0]-h[ve+4]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],h[ve+0]=le[0]+$[0],h[ve+1]=le[1]+$[1],h[ve+2]=le[2]+$[2],h[ve+3]=le[3]+$[3],h[ve+4]=le[3]-$[3],h[ve+5]=le[2]-$[2],h[ve+6]=le[1]-$[1],h[ve+7]=le[0]-$[0]}for(let pe=0;pe<8;++pe)Z[0]=R*h[16+pe],Z[1]=V*h[16+pe],Z[2]=R*h[48+pe],Z[3]=V*h[48+pe],$[0]=b*h[8+pe]+L*h[24+pe]+N*h[40+pe]+ie*h[56+pe],$[1]=L*h[8+pe]-ie*h[24+pe]-b*h[40+pe]-N*h[56+pe],$[2]=N*h[8+pe]-b*h[24+pe]+ie*h[40+pe]+L*h[56+pe],$[3]=ie*h[8+pe]-N*h[24+pe]+L*h[40+pe]-b*h[56+pe],K[0]=x*(h[pe]+h[32+pe]),K[3]=x*(h[pe]-h[32+pe]),K[1]=Z[0]+Z[3],K[2]=Z[1]-Z[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],h[0+pe]=le[0]+$[0],h[8+pe]=le[1]+$[1],h[16+pe]=le[2]+$[2],h[24+pe]=le[3]+$[3],h[32+pe]=le[3]-$[3],h[40+pe]=le[2]-$[2],h[48+pe]=le[1]-$[1],h[56+pe]=le[0]-$[0]}function Te(h){for(let x=0;x<64;++x){const b=h[0][x],R=h[1][x],L=h[2][x];h[0][x]=b+1.5747*L,h[1][x]=b-.1873*R-.4682*L,h[2][x]=b+1.8556*R}}function I(h,x,b){for(let R=0;R<64;++R)x[b+R]=Lh.toHalfFloat(T(h[R]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function H(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function Q(h){const x=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),b=new Uint8Array(Xe(x)),R=new Uint8Array(b.length);return st(b),F(b,R),new DataView(R.buffer)}function ee(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=ga(x),R=new Uint8Array(b.length);return st(b),F(b,R),new DataView(R.buffer)}function te(h){const x=h.viewer,b={value:h.offset.value},R=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),L=new Uint8Array(8192);let N=0;const V=new Array(h.inputChannels.length);for(let Ae=0,Ee=h.inputChannels.length;Ae<Ee;Ae++)V[Ae]={},V[Ae].start=N,V[Ae].end=V[Ae].start,V[Ae].nx=h.columns,V[Ae].ny=h.lines,V[Ae].size=h.type,N+=V[Ae].nx*V[Ae].ny*V[Ae].size;const ie=re(x,b),Z=re(x,b);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ie<=Z)for(let Ae=0;Ae<Z-ie+1;Ae++)L[Ae+ie]=je(x,b);const $=new Uint16Array(65536),K=M(L,$),le=ke(x,b);it(h.array,x,b,le,R,N);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Ee=V[Ae];for(let Se=0;Se<V[Ae].size;++Se)Re(R,Ee.start+Se,Ee.nx,Ee.size,Ee.ny,Ee.nx*Ee.size,K)}Ve($,R,N);let pe=0;const ve=new Uint8Array(R.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let Ee=0;Ee<h.inputChannels.length;Ee++){const Se=V[Ee],de=Se.nx*Se.size,lt=new Uint8Array(R.buffer,Se.end*2,de*2);ve.set(lt,pe),pe+=de*2,Se.end+=de}return new DataView(ve.buffer)}function be(h){const x=h.array.slice(h.offset.value,h.offset.value+h.size),b=ga(x),R=h.inputChannels.length*h.lines*h.columns*h.totalBytes,L=new ArrayBuffer(R),N=new DataView(L);let V=0,ie=0;const Z=new Array(4);for(let $=0;$<h.lines;$++)for(let K=0;K<h.inputChannels.length;K++){let le=0;switch(h.inputChannels[K].pixelType){case 1:Z[0]=V,Z[1]=Z[0]+h.columns,V=Z[1]+h.columns;for(let ve=0;ve<h.columns;++ve){const Ae=b[Z[0]++]<<8|b[Z[1]++];le+=Ae,N.setUint16(ie,le,!0),ie+=2}break;case 2:Z[0]=V,Z[1]=Z[0]+h.columns,Z[2]=Z[1]+h.columns,V=Z[2]+h.columns;for(let ve=0;ve<h.columns;++ve){const Ae=b[Z[0]++]<<24|b[Z[1]++]<<16|b[Z[2]++]<<8;le+=Ae,N.setUint32(ie,le,!0),ie+=4}break}}return N}function fe(h){const x=h.viewer,b={value:h.offset.value},R=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),L={version:He(x,b),unknownUncompressedSize:He(x,b),unknownCompressedSize:He(x,b),acCompressedSize:He(x,b),dcCompressedSize:He(x,b),rleCompressedSize:He(x,b),rleUncompressedSize:He(x,b),rleRawSize:He(x,b),totalAcUncompressedCount:He(x,b),totalDcUncompressedCount:He(x,b),acCompression:He(x,b)};if(L.version<2)throw new Error("EXRLoader.parse: "+ti.compression+" version "+L.version+" is unsupported");const N=new Array;let V=re(x,b)-2;for(;V>0;){const Ee=xe(x.buffer,b),Se=je(x,b),de=Se>>2&3,lt=(Se>>4)-1,Ye=new Int8Array([lt])[0],yt=je(x,b);N.push({name:Ee,index:Ye,type:yt,compression:de}),V-=Ee.length+3}const ie=ti.channels,Z=new Array(h.inputChannels.length);for(let Ee=0;Ee<h.inputChannels.length;++Ee){const Se=Z[Ee]={},de=ie[Ee];Se.name=de.name,Se.compression=0,Se.decoded=!1,Se.type=de.pixelType,Se.pLinear=de.pLinear,Se.width=h.columns,Se.height=h.lines}const $={idx:new Array(3)};for(let Ee=0;Ee<h.inputChannels.length;++Ee){const Se=Z[Ee];for(let de=0;de<N.length;++de){const lt=N[de];Se.name==lt.name&&(Se.compression=lt.compression,lt.index>=0&&($.idx[lt.index]=Ee),Se.offset=Ee)}}let K,le,pe;if(L.acCompressedSize>0)switch(L.acCompression){case 0:K=new Uint16Array(L.totalAcUncompressedCount),it(h.array,x,b,L.acCompressedSize,K,L.totalAcUncompressedCount);break;case 1:const Ee=h.array.slice(b.value,b.value+L.totalAcUncompressedCount),Se=ga(Ee);K=new Uint16Array(Se.buffer),b.value+=L.totalAcUncompressedCount;break}if(L.dcCompressedSize>0){const Ee={array:h.array,offset:b,size:L.dcCompressedSize};le=new Uint16Array(ee(Ee).buffer),b.value+=L.dcCompressedSize}if(L.rleRawSize>0){const Ee=h.array.slice(b.value,b.value+L.rleCompressedSize),Se=ga(Ee);pe=Xe(Se.buffer),b.value+=L.rleCompressedSize}let ve=0;const Ae=new Array(Z.length);for(let Ee=0;Ee<Ae.length;++Ee)Ae[Ee]=new Array;for(let Ee=0;Ee<h.lines;++Ee)for(let Se=0;Se<Z.length;++Se)Ae[Se].push(ve),ve+=Z[Se].width*h.type*2;ze($,Ae,Z,K,le,R);for(let Ee=0;Ee<Z.length;++Ee){const Se=Z[Ee];if(!Se.decoded)switch(Se.compression){case 2:let de=0,lt=0;for(let Ye=0;Ye<h.lines;++Ye){let yt=Ae[Ee][de];for(let pt=0;pt<Se.width;++pt){for(let et=0;et<2*Se.type;++et)R[yt++]=pe[lt+et*Se.width*Se.height];lt++}de++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function xe(h,x){const b=new Uint8Array(h);let R=0;for(;b[x.value+R]!=0;)R+=1;const L=new TextDecoder().decode(b.slice(x.value,x.value+R));return x.value=x.value+R+1,L}function Qe(h,x,b){const R=new TextDecoder().decode(new Uint8Array(h).slice(x.value,x.value+b));return x.value=x.value+b,R}function me(h,x){const b=Oe(h,x),R=ke(h,x);return[b,R]}function Ie(h,x){const b=ke(h,x),R=ke(h,x);return[b,R]}function Oe(h,x){const b=h.getInt32(x.value,!0);return x.value=x.value+4,b}function ke(h,x){const b=h.getUint32(x.value,!0);return x.value=x.value+4,b}function Pe(h,x){const b=h[x.value];return x.value=x.value+1,b}function je(h,x){const b=h.getUint8(x.value);return x.value=x.value+1,b}const He=function(h,x){let b;return"getBigInt64"in DataView.prototype?b=Number(h.getBigInt64(x.value,!0)):b=h.getUint32(x.value+4,!0)+Number(h.getUint32(x.value,!0)<<32),x.value+=8,b};function qe(h,x){const b=h.getFloat32(x.value,!0);return x.value+=4,b}function k(h,x){return Lh.toHalfFloat(qe(h,x))}function ne(h){const x=(h&31744)>>10,b=h&1023;return(h>>15?-1:1)*(x?x===31?b?NaN:1/0:Math.pow(2,x-15)*(1+b/1024):6103515625e-14*(b/1024))}function re(h,x){const b=h.getUint16(x.value,!0);return x.value+=2,b}function ue(h,x){return ne(re(h,x))}function De(h,x,b,R){const L=b.value,N=[];for(;b.value<L+R-1;){const V=xe(x,b),ie=Oe(h,b),Z=je(h,b);b.value+=3;const $=Oe(h,b),K=Oe(h,b);N.push({name:V,pixelType:ie,pLinear:Z,xSampling:$,ySampling:K})}return b.value+=1,N}function Ue(h,x){const b=qe(h,x),R=qe(h,x),L=qe(h,x),N=qe(h,x),V=qe(h,x),ie=qe(h,x),Z=qe(h,x),$=qe(h,x);return{redX:b,redY:R,greenX:L,greenY:N,blueX:V,blueY:ie,whiteX:Z,whiteY:$}}function rt(h,x){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=je(h,x);return b[R]}function Mt(h,x){const b=Oe(h,x),R=Oe(h,x),L=Oe(h,x),N=Oe(h,x);return{xMin:b,yMin:R,xMax:L,yMax:N}}function Pt(h,x){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=je(h,x);return b[R]}function mt(h,x){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=je(h,x);return b[R]}function wt(h,x){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],L=ke(h,x),N=ke(h,x),V=je(h,x);return{xSize:L,ySize:N,levelMode:b[V&15],roundingMode:R[V>>4]}}function Tn(h,x){const b=qe(h,x),R=qe(h,x);return[b,R]}function Ar(h,x){const b=qe(h,x),R=qe(h,x),L=qe(h,x);return[b,R,L]}function Rr(h,x,b,R,L){if(R==="string"||R==="stringvector"||R==="iccProfile")return Qe(x,b,L);if(R==="chlist")return De(h,x,b,L);if(R==="chromaticities")return Ue(h,b);if(R==="compression")return rt(h,b);if(R==="box2i")return Mt(h,b);if(R==="envmap")return mt(h,b);if(R==="tiledesc")return wt(h,b);if(R==="lineOrder")return Pt(h,b);if(R==="float")return qe(h,b);if(R==="v2f")return Tn(h,b);if(R==="v3f")return Ar(h,b);if(R==="int")return Oe(h,b);if(R==="rational")return me(h,b);if(R==="timecode")return Ie(h,b);if(R==="preview")return b.value+=L,"skipped";b.value+=L}function cn(h,x){const b=Math.log2(h);return x=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function yi(h,x,b){let R=0;switch(h.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=cn(Math.max(x,b),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function tr(h,x,b,R){const L=new Array(h);for(let N=0;N<h;N++){const V=1<<N;let ie=x/V|0;R=="ROUND_UP"&&ie*V<x&&(ie+=1);const Z=Math.max(ie,1);L[N]=(Z+b-1)/b|0}return L}function Cr(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.tileCount;R++){const L=Oe(h.viewer,x),N=Oe(h.viewer,x);x.value+=8,h.size=ke(h.viewer,x);const V=L*h.blockWidth,ie=N*h.blockHeight;h.columns=V+h.blockWidth>h.width?h.width-V:h.blockWidth,h.lines=ie+h.blockHeight>h.height?h.height-ie:h.blockHeight;const Z=h.columns*h.totalBytes,K=h.size<h.lines*Z?h.uncompress(h):H(h);x.value+=h.size;for(let le=0;le<h.lines;le++){const pe=le*h.columns*h.totalBytes;for(let ve=0;ve<h.inputChannels.length;ve++){const Ae=ti.channels[ve].name,Ee=h.channelByteOffsets[Ae]*h.columns,Se=h.decodeChannels[Ae];if(Se===void 0)continue;b.value=pe+Ee;const de=(h.height-(1+ie+le))*h.outLineWidth;for(let lt=0;lt<h.columns;lt++){const Ye=de+(lt+V)*h.outputChannels+Se;h.byteArray[Ye]=h.getter(K,b)}}}}}function Mi(){const h=this,x=h.offset,b={value:0};for(let R=0;R<h.height/h.blockHeight;R++){const L=Oe(h.viewer,x)-ti.dataWindow.yMin;h.size=ke(h.viewer,x),h.lines=L+h.blockHeight>h.height?h.height-L:h.blockHeight;const N=h.columns*h.totalBytes,ie=h.size<h.lines*N?h.uncompress(h):H(h);x.value+=h.size;for(let Z=0;Z<h.blockHeight;Z++){const $=R*h.blockHeight,K=Z+h.scanOrder($);if(K>=h.height)continue;const le=Z*N,pe=(h.height-1-K)*h.outLineWidth;for(let ve=0;ve<h.inputChannels.length;ve++){const Ae=ti.channels[ve].name,Ee=h.channelByteOffsets[Ae]*h.columns,Se=h.decodeChannels[Ae];if(Se!==void 0){b.value=le+Ee;for(let de=0;de<h.columns;de++){const lt=pe+de*h.outputChannels+Se;h.byteArray[lt]=h.getter(ie,b)}}}}}}function Ut(h,x,b){const R={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=h.getUint8(4);const L=h.getUint8(5);R.spec={singleTile:!!(L&2),longName:!!(L&4),deepFormat:!!(L&8),multiPart:!!(L&16)},b.value=8;let N=!0;for(;N;){const V=xe(x,b);if(V==0)N=!1;else{const ie=xe(x,b),Z=ke(h,b),$=Rr(h,x,b,ie,Z);$===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ie}'.`):R[V]=$}}if((L&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function wi(h,x,b,R,L){const N={size:0,viewer:x,array:b,offset:R,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Fi};switch(h.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=H;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=Q;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=ee;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=ee;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=te;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=be;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=fe;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=fe;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const V={};for(const K of h.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":V[K.name]=!0,N.type=K.pixelType}let ie=!1;if(V.R&&V.G&&V.B)ie=!V.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(L){case $n:N.getter=ue;break;case Li:N.getter=re;break}else if(N.type==2)switch(L){case $n:N.getter=qe;break;case Li:N.getter=k}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+h.compression+".");N.columns=N.width;const Z=N.width*N.height*N.outputChannels;switch(L){case $n:N.byteArray=new Float32Array(Z),ie&&N.byteArray.fill(1,0,Z);break;case Li:N.byteArray=new Uint16Array(Z),ie&&N.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",L);break}let $=0;for(const K of h.channels)N.decodeChannels[K.name]!==void 0&&(N.channelByteOffsets[K.name]=$),$+=K.pixelType*2;if(N.totalBytes=$,N.outLineWidth=N.width*N.outputChannels,h.lineOrder==="INCREASING_Y"?N.scanOrder=K=>K:N.scanOrder=K=>N.height-1-K,N.outputChannels==4?(N.format=xn,N.colorSpace=Fi):(N.format=Su,N.colorSpace=sn),h.spec.singleTile){N.blockHeight=h.tiles.ySize,N.blockWidth=h.tiles.xSize;const K=yi(h.tiles,N.width,N.height),le=tr(K,N.width,h.tiles.xSize,h.tiles.roundingMode),pe=tr(K,N.height,h.tiles.ySize,h.tiles.roundingMode);N.tileCount=le[0]*pe[0];for(let ve=0;ve<K;ve++)for(let Ae=0;Ae<pe[ve];Ae++)for(let Ee=0;Ee<le[ve];Ee++)He(x,R);N.decode=Cr.bind(N)}else{N.blockWidth=N.width;const K=Math.ceil(N.height/N.blockHeight);for(let le=0;le<K;le++)He(x,R);N.decode=Mi.bind(N)}return N}const ci={value:0},Pr=new DataView(e),os=new Uint8Array(e),ti=Ut(Pr,e,ci),ui=wi(ti,Pr,os,ci,this.type);return ui.decode(),{header:ti,width:ui.width,height:ui.height,data:ui.byteArray,format:ui.format,colorSpace:ui.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=St,o.magFilter=St,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}async function Hn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),s=r.vertexCount,o=r.indexCount;let a=4+n;const l=new er,c=r.attributes;for(let u=0,f=c.length;u<f;u++){const d=c[u],_=d.id,v=_==="indices"?o:s,g=d.componentSize,m=globalThis[d.storageType],p=new m(t,a,v*g),E=m.BYTES_PER_ELEMENT;let y;if(d.needsPack){const S=d.packedComponents,P=S.length,D=d.storageType.indexOf("Int")===0,A=1<<E*8,C=D?A*.5:0,w=1/A;y=new Float32Array(v*g);for(let M=0,U=0;M<v;M++)for(let z=0;z<P;z++){const O=S[z];y[U]=(p[U]+C)*w*O.delta+O.from,U++}}else y=p;if(_==="indices"){let S=y;y instanceof Uint8Array&&(S=new Uint16Array(y.length),S.set(y)),l.setIndex(new Xt(S,1))}else l.setAttribute(_,new Xt(y,g));a+=v*g*E}return l.computeBoundingSphere(),l}const va=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],Xl={density:1,friction:2,restitution:.8},k1=40,Kr=8,H1=`
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
`,V1=`
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
uniform vec4 u_nearPositionRadiusList[${Kr}];
uniform vec3 u_nearColorList[${Kr}];

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

  for (int i = 0; i < ${Kr}; i++) {
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
  gi /= float(${Kr});

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
`,G1=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,W1=`
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
`;function X1(i){const e={...Xl},t={...Xl},n={...Xl};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function q1(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function cf(i,e,t,n,r){const s=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*s}class Y1{constructor(e,t,n,r,s,o=!1){this.position=new G((s()-.5)*12,(s()-.5)*12,o?7+s():(s()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Dn().setFromEuler(new ei(s()*Math.PI,s()*Math.PI,s()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new G,this.gravityAcc=new G}applyImpulse(){this.velocity.add(new G((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(k1),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function Z1(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*va.length),r=va[n];const s=new Go,o=new Pn(25,1,.1,100);o.position.set(0,0,25);const a=new tl({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Fi,a.toneMapping=Ii;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,f=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[d,_]=await Promise.all([Hn(u),new Promise((F,Xe)=>{new B1().load(f,F,void 0,Xe)})]);_.minFilter=St,_.magFilter=St,_.generateMipmaps=!1,_.colorSpace=sn;const v=new G(10,10,5),g=X1(r),m=q1("balloonBody-25"),p=[],E=[],y=[],S=[],P=Array.from({length:Kr},()=>new Dt(0,0,-999,.01)),D=Array.from({length:Kr},()=>new $e(1118481)),A=F=>new Ct({uniforms:{u_matcap:{value:_},u_color:{value:new $e(F.color)},u_bgColor:{value:new $e(1316117)},u_roughness:{value:F.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Dt(0,0,0,1)},u_selfRotation:{value:new Dt(0,0,0,1)},u_nearPositionRadiusList:{value:P.map(Xe=>Xe.clone())},u_nearColorList:{value:D.map(Xe=>Xe.clone())}},vertexShader:H1,fragmentShader:V1});for(const F of g){const Xe=A(F),ze=new kt(d,Xe);ze.frustumCulled=!1,ze.scale.setScalar(F.radius),s.add(ze),E.push(ze),y.push(Xe),p.push(new Y1(F.radius,F.density,F.friction,F.restitution,m,!1)),S.push({i:E.length-1,d2:0})}const C=new Ct({uniforms:{u_color0:{value:new $e(r)},u_color1:{value:new $e(1316117)},u_aspect:{value:1}},vertexShader:G1,fragmentShader:W1,depthWrite:!1}),w=new kt(new Si(90,60),C);w.position.z=-12,w.renderOrder=-1e3,s.add(w);const M=new nt(0,0),U=new G,z=new G,O=new G,X=new G,Y=new G,q=new G,W=new G,B=new G,ce=new G,J=new G,he=new Dn,ye=.025,Be=.1,j=.12,se=F=>{const Xe=(e||i).getBoundingClientRect();M.x=(F.clientX-Xe.left)/Xe.width*2-1,M.y=-((F.clientY-Xe.top)/Xe.height*2-1)};window.addEventListener("pointermove",se);const oe=()=>{n=(n+1)%va.length,r=va[n],E.forEach((F,Xe)=>{const ze=g[Xe];ze.isColored&&(F.material.uniforms.u_color.value.set(r),ze.color=r)}),C.uniforms.u_color0.value.set(r),p.forEach(F=>F.applyImpulse())},ae=()=>oe();i.addEventListener("click",ae),e==null||e.addEventListener("click",ae);const Me=()=>{const F=e||i.parentElement,Xe=F.clientWidth,ze=F.clientHeight,Ke=Xe/Math.max(ze,1);o.fov=cf(Ke,2.2,2/3,18,30),o.aspect=Ke,o.updateProjectionMatrix(),a.setSize(Xe,ze,!1),C.uniforms.u_aspect.value=Ke};Me(),window.addEventListener("resize",Me);let Re=0,Ce=performance.now();const it=performance.now(),Ve=()=>{const Xe=(e||i).getBoundingClientRect();l=Xe.bottom>0&&Xe.top<window.innerHeight};window.addEventListener("scroll",Ve,{passive:!0}),Ve();const st=F=>{if(Re=requestAnimationFrame(st),!l){Ce=F;return}let Xe=Math.min(.05,(F-Ce)/1e3);Ce=F;const ze=t?1:2;Xe/=ze;const Ke=(F-it)/1e3,ge=cf(Ke,.3,2,25,17.5);o.position.z=ge;for(let Fe=0;Fe<ze;Fe++){const Te=new G(M.x,M.y,.5).unproject(o);Te.sub(o.position).normalize();const I=(0-o.position.z)/Te.z;U.copy(o.position).addScaledVector(Te,I),O.copy(U).sub(z).multiplyScalar(j/Math.max(Xe,.001)),X.copy(U).sub(o.position);const T=X.lengthSq()||1;z.copy(U);for(let H=0;H<p.length;H++){const Q=p[H];Q.updateGravity(Xe),q.copy(Q.velocity),W.copy(Q.position);for(let fe=H+1;fe<p.length;fe++){const xe=p[fe];ce.copy(xe.velocity),J.copy(xe.position),Y.copy(W).sub(J);const Qe=Y.length(),me=Q.radius+xe.radius;if(Qe<me&&Qe>1e-6){const Ie=Math.sqrt(Q.friction*xe.friction);Q.frictionTot+=Ie,xe.frictionTot+=Ie,Y.normalize(),Y.multiplyScalar(.5*(Qe-me)),W.sub(Y),J.add(Y),Y.normalize();const Oe=q.dot(Y),ke=ce.dot(Y),Pe=Q.mass,je=xe.mass,He=(Pe*Oe+je*ke-je*(Oe-ke)*Q.restitution)/(Pe+je),qe=(Pe*Oe+je*ke-Pe*(ke-Oe)*xe.restitution)/(Pe+je);q.addScaledVector(Y,(He-Oe)/(1+Ie)),ce.addScaledVector(Y,(qe-ke)/(1+Ie)),xe.position.copy(J),xe.velocity.copy(ce)}}B.copy(W).sub(o.position);let ee=B.dot(X)/T;ee=B.sub(ce.copy(X).multiplyScalar(ee)).length()-Q.radius-ye,ee<0&&(B.copy(W).sub(o.position).cross(X).normalize(),ce.copy(X).cross(B).normalize(),W.sub(ce.multiplyScalar(Be*ee)),ce.multiplyScalar(-j/Math.max(Xe,.001)),q.add(ce),q.add(O));let te=W.length();if(te>0){B.set(1,1,1).normalize();let fe=1-Math.abs(B.dot(ce.copy(W).normalize()));fe*=Xe*Math.min(1,Math.max(0,te/2))*.5,fe*=H%2*2-1,he.setFromAxisAngle(B,fe),ce.copy(W).applyQuaternion(he).sub(B.copy(W)),q.add(ce)}B.crossVectors(W,q);let be=B.length();be/=Q.inertia,be>0&&(B.normalize(),he.setFromAxisAngle(B,be*Xe),Q.quaternion.premultiply(he)),Q.position.copy(W),Q.velocity.copy(q),Q.update(Xe),["x","y","z"].forEach(fe=>{const xe=fe==="z"?5.5:7.5;Q.position[fe]>xe&&(Q.position[fe]=xe,Q.velocity[fe]*=-.55),Q.position[fe]<-xe&&(Q.position[fe]=-xe,Q.velocity[fe]*=-.55)})}}for(let Fe=0;Fe<E.length;Fe++){const Te=E[Fe],I=p[Fe];Te.position.copy(I.position),Te.quaternion.copy(I.quaternion);const T=y[Fe].uniforms;T.u_selfPositionRadius.value.set(I.position.x,I.position.y,I.position.z,I.radius),T.u_selfRotation.value.set(I.quaternion.x,I.quaternion.y,I.quaternion.z,I.quaternion.w),T.u_bgColor.value.copy(C.uniforms.u_color1.value)}for(let Fe=0;Fe<E.length;Fe++){for(let T=0;T<E.length;T++)S[T].i=T,S[T].d2=Fe===T?0:p[Fe].position.distanceToSquared(p[T].position);S.sort((T,H)=>T.d2-H.d2);const Te=y[Fe].uniforms.u_nearPositionRadiusList.value,I=y[Fe].uniforms.u_nearColorList.value;for(let T=0;T<Kr;T++){const H=S[T+1]?S[T+1].i:S[0].i,Q=p[H];Te[T].set(Q.position.x,Q.position.y,Q.position.z,Q.radius),I[T].copy(y[H].uniforms.u_color.value)}}o.position.x+=(M.x*.9-o.position.x)*.04,o.position.y+=(M.y*.55-o.position.y)*.04,o.lookAt(0,0,0),a.render(s,o)};return Re=requestAnimationFrame(st),{cycleColor:oe,destroy(){cancelAnimationFrame(Re),window.removeEventListener("pointermove",se),window.removeEventListener("resize",Me),window.removeEventListener("scroll",Ve),i.removeEventListener("click",ae),e==null||e.removeEventListener("click",ae),y.forEach(F=>F.dispose()),C.dispose(),a.dispose()}}}function _n(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Xn(i){return _n(i,0,1)}function up(i,e,t){return(t-i)/(e-i||1)}function qr(i,e,t){return _n(up(i,e,t),0,1)}function _e(i,e,t,n,r,s){let o=qr(e,t,i);return s&&(o=s(o)),n+o*(r-n)}function uf(i,e,t,n,r,s){let o=up(e,t,i);return n+o*(r-n)}function $1(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const s=(g,m,p,E)=>1/(3*m*g*g+2*p*g+E),o=(g,m,p,E,y)=>m*(g*g*g)+p*(g*g)+E*g+y,a=(g,m,p,E,y)=>{const S=g*g;return m*(S*g)+p*S+E*g+y},l=1-3*n+3*e,c=3*n-6*e,u=3*e,f=1-3*r+3*t,d=3*r-6*t,_=3*t;let v=i;for(let g=0;g<100;g++){const m=o(v,l,c,u,0);let p=s(v,l,c,u);p===1/0&&(p=i),v-=(m-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,f,d,_,0)}function ft(i){return $1(i,.35,0,0,1)}function qa(i){return i===1?1:1-Math.pow(2,-10*i)}function K1(i){return i===0?0:Math.pow(1024,i-1)}function j1(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function ql(i){return 1-Math.cos(i*Math.PI/2)}function J1(i){return-(Math.cos(Math.PI*i)-1)/2}function Q1(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function $c(i){return i*i*i}function hp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function dn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,s=e.bottom;let o=Math.min(0,uf(n,t,t-r,-1,0));o+=Math.max(0,uf(n,0,-r,0,1));const a=_e(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=o>=-1&&o<=1;return{top:n,bottom:s,height:r,width:e.width,ratio:o,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function ey(i){return 1-Math.pow(1-i,3)}function ty(i){return i*i*i*i}function ny(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function mi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const hf=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function fp(i){const e=hf.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of hf){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function s(a,l=a){const c=t[a],u=t[l],f=r(),d=c.from,_=u.to,v=(f-d)/Math.max(_-d,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:f>=d&&f<=_,global:f}}function o(a,l){return s(a,l)}return{items:t,progress:r,range:s,between:o,totalWeight:e}}const iy=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,ry=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,sy="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",oy="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",dp=`
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
`,pp=`
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
`,ay=`
${dp}
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
${pp}
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
`,ly=`
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
`,ff=`
${dp}
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
${pp}
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
`,_i=5,xa=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,cy=`
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
`,uy=`
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
`,hy=`
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
`,fy=`
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
`;function uo(i,e,t=!1){const n={minFilter:St,magFilter:St,format:xn,type:Li,depthBuffer:t,stencilBuffer:!1},r=new Qi(i,e,n);return t&&(r.depthTexture=new Cu(i,e),r.depthTexture.type=Zs),r}function dy(i,e,t){const n=new nt(1,1);i.getSize(n);let r=uo(1,1,!0),s=uo(1,1,!1),o=uo(1,1,!1);const a=[],l=[];for(let ge=0;ge<_i;ge++)a.push(uo(1,1)),l.push(uo(1,1));const c=new Au(-1,1,1,-1,0,1),u=new kt(new Si(2,2),new Tu),f=new Go;f.add(u);const d=new Ct({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new nt(1,1)},u_aspect:{value:new nt(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:xa,fragmentShader:cy,depthTest:!1,depthWrite:!1,toneMapped:!1}),_=[];for(let ge=0;ge<_i;ge++){const Fe=3+ge*2;_.push(new Ct({uniforms:{u_texture:{value:null},u_resolution:{value:new nt(1,1)},u_direction:{value:new nt(1,0)}},defines:{KERNEL_RADIUS:Fe,SIGMA:Fe},vertexShader:xa,fragmentShader:uy,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const v=new Float32Array(_i),g=new Ct({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:v}},vertexShader:xa,fragmentShader:hy,depthTest:!1,depthWrite:!1,toneMapped:!1});let m=0;const p=new Ct({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new nt(1,1)},u_amount:{value:1}},vertexShader:xa,fragmentShader:fy,depthTest:!1,depthWrite:!1,toneMapped:!1}),E=new vt,y=new vt,S=new vt,P=new vt,D=new vt,A=new G,C=new ei,w=new G(1,1,1),M=new Dn;let U=!0,z=1,O=!1,X=0,Y=0,q=1,W=1,B=0,ce=.015,J=.6,he=.3,ye=.5,Be=0,j=!0,se=!1,oe=1,ae=1;const Me=new nt(1,0),Re=new nt(0,1),Ce=(ge,Fe)=>{u.material=ge,i.setRenderTarget(Fe),i.clear(),i.render(f,c)},it=ge=>{const Fe=Math.max(1,ge);return 1<<Math.ceil(Math.log(Fe)/Math.log(2))},Ve=(ge,Fe)=>{oe=Math.max(1,Math.floor(ge)),ae=Math.max(1,Math.floor(Fe)),r.setSize(oe,ae),s.setSize(oe,ae);let Te=Math.max(1,Math.ceil(oe/2)),I=Math.max(1,Math.ceil(ae/2));o.setSize(Te,I);for(let H=0;H<_i;H++)a[H].setSize(Te,I),l[H].setSize(Te,I),Te=Math.max(1,Math.ceil(Te/2)),I=Math.max(1,Math.ceil(I/2));d.uniforms.u_texelSize.value.set(1/oe,1/ae);const T=ae/Math.sqrt(oe*oe+ae*ae)*2;d.uniforms.u_aspect.value.set(oe/ae*T,T),p.uniforms.u_aspect.value.set(oe/Math.max(ae,1),1)},st=({blackFrameInRatio:ge=0,blackTitleRatio:Fe=0,blackTunnelRatio:Te=0,whiteFrameRatio:I=0,whiteTunnelWaitRatio:T=0,astronautDropRatio:H=0,isWhiteTunnelActive:Q=!1,isBlackTunnelActive:ee=!1,isMobile:te=!1}={})=>{se=!!te;let be=ge*(Yt.lerp(0,.15,Fe)+Yt.clamp((Te-.2)/.2,0,1)*.25);if(Te>=.65){const fe=Yt.clamp((Te-.65)/.1,0,1);be=be+(.08-be)*fe}if(Q&&(be=0),!Q&&!te&&ge>.85&&Te<.05){const fe=Yt.lerp(.16,.1,Yt.clamp(Fe/.35,0,1));be=Math.max(be,fe*ge)}if(te&&!Q&&(be*=1.05),B=be,q=Te<1?Yt.lerp(1,3,Yt.clamp(Te/.7,0,1)):1,Q){const fe=te?8:20,xe=te?2.6:4,Qe=Yt.clamp((T-.08)/.22,0,1);X=H<1?Yt.lerp(xe,2,Yt.clamp(I/.05,0,1)):Yt.lerp(0,fe,Qe),Be=Yt.lerp(.3,0,Yt.clamp(T/.18,0,1))}else{const fe=Yt.clamp(Fe/.25,0,1);X=Yt.lerp(te?22:30,te?5:6,fe),Be=0}J=.6,ce=te?.012:.02,he=.3,ye=.5,Y=te?0:.45,W=1,O=ee||Q},F=(ge,Fe=0)=>{A.set(0,0,ge),C.set(0,0,Fe)},Xe=()=>{U=!0},ze=(ge,Fe)=>{const Te=i.autoClear;i.autoClear=!0,Ce(ge,Fe),i.autoClear=Te},Ke=()=>{var Q;if(!j){i.setRenderTarget(null),i.render(e,t);return}const ge=i.getRenderTarget(),Fe=i.autoClear;i.setRenderTarget(r),i.autoClear=!0,i.setClearColor((Q=e.background)!=null&&Q.isColor?e.background.getHex():0,Be),i.clear();const Te=e.background;e.background=null,i.render(e,t),e.background=Te;let I=r.texture;if(E.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),S.copy(E).invert(),O&&z>0?(U&&(y.copy(E),U=!1),D.compose(A,M.setFromEuler(C),w),D.invert(),P.copy(y).multiply(D),p.uniforms.u_texture.value=r.texture,p.uniforms.u_depthTexture.value=r.depthTexture,p.uniforms.u_projectionViewInverseMatrix.value.copy(S),p.uniforms.u_prevProjectionViewMatrix.value.copy(P),p.uniforms.u_amount.value=z,ze(p,s),I=s.texture,y.copy(E)):(y.copy(E),U=!0),X<.05&&B<.005){g.uniforms.u_texture.value=I;for(let ee=0;ee<_i;ee++)v[ee]=0,g.uniforms[`u_blurTexture${ee}`].value=I;g.uniforms.u_saturation.value=1,i.setRenderTarget(null),Ce(g,null),i.autoClear=Fe,i.setRenderTarget(ge);return}d.uniforms.u_texture.value=I,d.uniforms.u_amount.value=W,d.uniforms.u_haloStrength.value=B,d.uniforms.u_haloWidth.value=J,d.uniforms.u_haloRGBShift.value=ce,d.uniforms.u_haloMaskInner.value=he,d.uniforms.u_haloMaskOuter.value=ye,ze(d,o);let T=o;for(let ee=0;ee<_i;ee++){const te=_[ee];te.uniforms.u_texture.value=T.texture,te.uniforms.u_resolution.value.set(T.width,T.height),te.uniforms.u_direction.value=Me,ze(te,a[ee]),te.uniforms.u_texture.value=a[ee].texture,te.uniforms.u_resolution.value.set(a[ee].width,a[ee].height),te.uniforms.u_direction.value=Re,ze(te,l[ee]),T=l[ee]}let H=X;if(!se){const ee=it(oe/2)>>1,te=it(ae/2)>>1,be=Math.max(1,Math.ceil(Math.log(ee*te)/Math.log(2)));H=X*1024/Math.pow(be,4)*.85*40}for(let ee=0;ee<_i;ee++){const te=(_i-ee)/_i;let be=H*(te+(1.2-te*2)*Y)/Math.pow(2,_i-ee-1);!se&&ee===0&&(be*=.18),!se&&ee===1&&(be*=.5),!se&&ee>=3&&(be*=1.55),v[ee]=be}g.uniforms.u_texture.value=I,g.uniforms.u_saturation.value=q;for(let ee=0;ee<_i;ee++)g.uniforms[`u_blurTexture${ee}`].value=l[ee].texture;i.setRenderTarget(null),Ce(g,null),i.autoClear=Fe,i.setRenderTarget(ge)};return Ve(n.x,n.y),{resize:Ve,sync:st,render:Ke,setEfxOffset:F,markEfxSync:Xe,setEfxAmount(ge){z=ge},get clearAlpha(){return Be},setEnabled(ge){j=!!ge},setScrollVelocity(ge){const Fe=Math.min(1,Math.abs(ge)*.12);m+=(Fe-m)*.12,g.uniforms.u_scrollPaint.value=m},destroy(){r.dispose(),s.dispose(),o.dispose(),a.forEach(ge=>ge.dispose()),l.forEach(ge=>ge.dispose()),d.dispose(),g.dispose(),p.dispose(),_.forEach(ge=>ge.dispose()),u.geometry.dispose()}}}function py(i,e,t){return i+(e-i)*t}const mr=class mr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<mr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,s=r*r*(3-2*r),o=n&mr.MAX_VERTICES_MASK,a=o+1&mr.MAX_VERTICES_MASK;return py(this._r[o],this._r[a],s)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let s=0;s<t;s++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};We(mr,"MAX_VERTICES",512),We(mr,"MAX_VERTICES_MASK",mr.MAX_VERTICES-1);let Ya=mr;const Ti=new G,Co=class Co{constructor(){this._position=new G,this._rotation=new Dn,this._euler=new ei,this._scale=new G(1,1,1),this._matrix=new vt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new G(1,1,1),this._rotationScale=new G(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new Ya,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Ti.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Ti.multiply(this._positionScale),Ti.multiplyScalar(this._positionAmplitude*Co.FBM_NORM),this._position.copy(Ti)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Ti.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Ti.multiply(this._rotationScale),Ti.multiplyScalar(this._rotationAmplitude*Co.FBM_NORM),this._euler.set(Ti.x,Ti.y,Ti.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};We(Co,"FBM_NORM",1/.75);let Ao=Co;class Kc{constructor(e,t=1.5,n=.8,r=2,s=!0){this.isRobust=s,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,s=e/(1+r-n);this._k1Stable=(1-r)*s,this._k2Stable=e*s}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const df=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],my=26,Hr=64,_y=34,ho=new nt(1465,1024),gy=`
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
`,vy=`
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
`,xy=`
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
`,Sy=`
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
`,Sa=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function yy(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function My(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",s=t?_y:my,[o,a]=await Promise.all([new dr().loadAsync(`${e}assets/textures/tunnels/${r}`),Hn(`${e}assets/models/tunnels/diamond.buf`)]);o.colorSpace=mn,o.flipY=!1,o.needsUpdate=!0;const l=new Di;i.add(l);const c=new Si(1,1),u=new Zr;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const f=new Float32Array(s),d=new Float32Array(s*4),_=new Float32Array(s*4);for(let M=0,U=0;M<s;M++,U+=4){f[M]=M/s;const z=df[M%df.length];d[U]=z.x/ho.x,d[U+1]=z.y/ho.y,d[U+2]=z.w/ho.x,d[U+3]=z.h/ho.y,_[U]=Math.random(),_[U+1]=Math.random(),_[U+2]=Math.random(),_[U+3]=Math.random()}u.setAttribute("instanceId",new pn(f,1)),u.setAttribute("instanceUvInfo",new pn(d,4)),u.setAttribute("instanceRands",new pn(_,4)),u.instanceCount=s;const v=new Ct({vertexShader:gy,fragmentShader:vy,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:o},u_textureSize:{value:ho.clone()},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:zo,blendEquation:bn,blendSrc:Ns,blendDst:Fs,blendEquationAlpha:bn,blendSrcAlpha:Ra,blendDstAlpha:Ra,defines:{COUNT:s}}),g=new kt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const m=new Zr;for(const M in a.attributes)m.setAttribute(M,a.attributes[M]);a.index&&(m.index=a.index);const p=yy("diamonds-3"),E=new Float32Array(Hr*3),y=new Float32Array(Hr*3),S=new Float32Array(Hr*4),P=new G;for(let M=0,U=0,z=0;M<Hr;M++,U+=3,z+=4)E[U]=16*(p()*2-1),E[U+1]=16*(p()*2-1),E[U+2]=19-(Hr-M-1)/(Hr-1)*8,P.set(p()*2-1,p()*2-1,p()*2-1).normalize(),y[U]=P.x,y[U+1]=P.y,y[U+2]=P.z,S[z]=p(),S[z+1]=p(),S[z+2]=p(),S[z+3]=p();m.setAttribute("a_instancePosition",new pn(E,3)),m.setAttribute("a_instanceRotationAxis",new pn(y,3)),m.setAttribute("a_instanceRand",new pn(S,4)),m.instanceCount=Hr;const D=[];for(let M=0;M<25;M++)D.push(new Dt(Sa[M*4],Sa[M*4+1],Sa[M*4+2],Sa[M*4+3]));const A=new Ct({vertexShader:xy,fragmentShader:Sy,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new $e("#689aff")},u_planes:{value:D},u_bgColor:{value:new $e(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:zo,blendEquation:bn,blendSrc:si,blendDst:Ra,blendEquationAlpha:bn,blendSrcAlpha:si,blendDstAlpha:si}),C=new kt(m,A);C.frustumCulled=!1,C.renderOrder=20,C.visible=!1,A.blending=yr,A.blendSrc=Ns,A.blendDst=Fs,A.blendSrcAlpha=Ns,A.blendDstAlpha=Fs,l.add(C),g.renderOrder=15;const w=new $e(0);return{update({whiteTunnelWaitRatio:M=0,aspect:U=1,bg:z="#000000"}={}){const O=_e(M,0,.12,0,1),X=O>0;l.visible=X,g.visible=X,C.visible=X,v.uniforms.u_activeRatio.value=O,A.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=U,A.uniforms.u_aspect.value=U,w.set(z),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),o.dispose(),m.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const fo=53,ya=16,Ma=20,pf=["helmet","helmet_glass","glove_shoes","wearpack"],po=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Yl=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function mf(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function _f(i,e){const[t,n]=await Promise.all([mf(i),mf(e)]),r=t.width,s=t.height,o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,s);const l=a.getImageData(0,0,r,s).data;a.clearRect(0,0,r,s),a.drawImage(t,0,0,r,s);const c=a.getImageData(0,0,r,s).data,u=new Uint8Array(r*s*4);for(let d=0;d<u.length;d+=4)u[d]=c[d],u[d+1]=c[d+1],u[d+2]=c[d+2],u[d+3]=l[d];const f=new Pu(u,r,s,xn,Ni);return f.colorSpace=sn,f.flipY=!1,f.generateMipmaps=!1,f.minFilter=St,f.magFilter=St,f.wrapS=Zn,f.wrapT=Zn,f.needsUpdate=!0,f}function gf(i,e,t){const n=new Pu(i,e,t,xn,$n);return n.magFilter=an,n.minFilter=an,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Zl(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new pn(t,3)}const wa=`
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
`;async function wy(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",s=!n,[o,a,l,c,u,f,d,_,v,g,m,p,E,...y]=await Promise.all([Hn(`${r}assets/models/tunnels/astronaut_animations.buf`),Hn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Hn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new dr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new dr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new dr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Hn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Hn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Hn(`${r}assets/models/tunnels/grid_base_ld.buf`),Hn(`${r}assets/models/tunnels/grid_structure_ld.buf`),s?Hn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),s?Hn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new dr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...pf.map(we=>Hn(`${r}assets/models/tunnels/astronaut_${we}.buf`))]),S=new Go;S.background=new $e(0);const P=new G(0,0,25),D=new G(0,0,24),A=45,C=new Pn(A,1,1,200);C.position.copy(P),C.lookAt(D);let w;try{w=new tl({canvas:i,antialias:!n,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(we){throw console.error("Goal WebGL unavailable",we),we}w.setClearColor(0,1),w.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:1.35)),w.outputColorSpace=Fi,w.toneMapping=Ii,w.autoClear=!0,c.colorSpace=sn,c.generateMipmaps=!1,c.minFilter=St,c.magFilter=St,u.colorSpace=sn,u.generateMipmaps=!1,u.minFilter=St,u.magFilter=St,f.colorSpace=mn,f.wrapS=f.wrapT=Os;const M=o.attributes.position.array,U=o.attributes.orient.array,z=M.length/3,O=z/fo,X=Math.ceil(Math.sqrt(z)),Y=Math.ceil(z/X),q=X*Y,W=new Float32Array(q*4),B=new Float32Array(q*4);for(let we=0,Ge=0,Le=0;we<z;we++,Ge+=3,Le+=4)W[Le]=M[Ge],W[Le+1]=M[Ge+1],W[Le+2]=M[Ge+2],W[Le+3]=1,B[Le]=U[Le],B[Le+1]=U[Le+1],B[Le+2]=U[Le+2],B[Le+3]=U[Le+3];const ce=gf(W,X,Y),J=gf(B,X,Y),he=new pn(new Float32Array([0,0,18]),3);he.setUsage(sr);const ye=new pn(new Float32Array([0,0,0,1]),4);ye.setUsage(sr);const Be=new pn(new Float32Array([0,1,0]),3);Be.setUsage(sr);const j=new pn(new Float32Array([90,91,0]),3);j.setUsage(sr);const se=()=>{const we=new Qi(1,1,{minFilter:Zi,magFilter:St,format:xn,generateMipmaps:!0});return we.texture.wrapS=we.texture.wrapT=Ga,we},oe=se(),ae=se();let Me=oe,Re=ae;const Ce={u_animationPositionTexture:{value:ce},u_animationOrientTexture:{value:J},u_animationTextureSize:{value:new nt(X,Y)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new $e("#566d80")},u_bgColor:{value:new $e("#000000")},u_sunPosition:{value:new G(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new $e(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new $e("#aaaafb")},u_cardPosition:{value:new G}},it={u_blackTunnelTexture:{value:Me.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},Ve={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async we=>{const[Ge,Le]=await Promise.all([_f(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${we}_base.webp`),new dr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_nor.webp`)]);Le.colorSpace=sn,Le.flipY=!1,Le.generateMipmaps=!1,Le.minFilter=St,Le.magFilter=St,Ve[we]={armb:Ge,nor:Le}})),Ve.helmet_glass=Ve.helmet;const st=new Di;S.add(st);const F=[],Xe=4,ze=new pn(new Float32Array(Xe*3),3);ze.setUsage(sr);const Ke=new pn(new Float32Array(Xe*4),4);Ke.setUsage(sr);const ge=new pn(new Float32Array(Xe*3),3);ge.setUsage(sr);const Fe=new pn(new Float32Array(Xe*3),3);Fe.setUsage(sr);for(let we=0;we<Xe;we++)Ke.setXYZW(we,0,0,0,1),ge.setXYZ(we,0,1,0),Fe.setXYZ(we,90,91,0);const Te=[];let I=0;const T={value:0};pf.forEach((we,Ge)=>{const Le=y[Ge],Je=new Zr;for(const jt in Le.attributes)Je.setAttribute(jt,Le.attributes[jt]);Le.index&&Je.setIndex(Le.index),Je.instanceCount=1,Je.setAttribute("instancePos",he),Je.setAttribute("instanceOrient",ye),Je.setAttribute("instanceAnimationFrameFromToBlend1",Be),Je.setAttribute("instanceAnimationFrameFromToBlend2",j);const dt=we==="helmet_glass"||we==="card"?"helmet":we,Rt=we==="helmet_glass",_t={...Ce,u_armbTexture:{value:Ve[dt].armb},u_norTexture:{value:Ve[dt].nor}},Lt={...Ce,...it,u_armbTexture:{value:Ve[dt].armb},u_norTexture:{value:Ve[dt].nor}},nn=new Ct({uniforms:_t,vertexShader:wa,fragmentShader:ay,transparent:!0,blending:xi,side:En,defines:{BONE_COUNT:fo,IS_WHITE:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Rn=new Ct({uniforms:Lt,vertexShader:wa,fragmentShader:ff,transparent:!0,blending:xi,side:En,defines:{BONE_COUNT:fo,IS_BLACK:!0,...Rt?{IS_HELMET_GLASS:!0}:{}}}),Cn=new kt(Je,nn);if(Cn.frustumCulled=!1,Cn.userData.whiteMat=nn,Cn.userData.blackMat=Rn,st.add(Cn),F.push(Cn),!Rt){const jt=new Zr;for(const bi in Le.attributes)jt.setAttribute(bi,Le.attributes[bi]);Le.index&&jt.setIndex(Le.index),jt.instanceCount=Xe,jt.setAttribute("instancePos",ze),jt.setAttribute("instanceOrient",Ke),jt.setAttribute("instanceAnimationFrameFromToBlend1",ge),jt.setAttribute("instanceAnimationFrameFromToBlend2",Fe);const ni=new Ct({uniforms:{...Lt,u_armbTexture:{value:Ve[dt].armb},u_norTexture:{value:Ve[dt].nor},u_alpha:T},vertexShader:wa,fragmentShader:ff,transparent:!0,depthWrite:!1,depthTest:!1,blending:zo,blendEquation:bn,blendSrc:si,blendDst:si,blendEquationAlpha:bn,blendSrcAlpha:si,blendDstAlpha:si,side:En,defines:{BONE_COUNT:fo,IS_BLACK:!0,IS_CLONE:!0}}),rn=new kt(jt,ni);rn.frustumCulled=!1,rn.renderOrder=1e3,rn.visible=!1,st.add(rn),Te.push(rn)}});const H=new nt(5,23),Q=new Ya;let ee=0,te=!1;const be=document.createElement("canvas");be.width=be.height=11;{const we=be.getContext("2d");we.fillStyle="#000",we.fillRect(0,0,11,11),we.fillStyle="#f00",we.fillRect(1,1,3,9),we.fillStyle="#0f0",we.fillRect(4,1,3,9),we.fillStyle="#00f",we.fillRect(7,1,3,9)}const fe=new g1(be);fe.needsUpdate=!0,fe.minFilter=St,fe.magFilter=St;const xe=await new dr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);xe.minFilter=an,xe.magFilter=an,xe.colorSpace=sn,xe.flipY=!1;const Qe=new Si(.2,.15).translate(0,1.68,.1);Qe.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),Qe.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),Qe.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),Qe.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const me=new Zr;for(const we in Qe.attributes)me.setAttribute(we,Qe.attributes[we]);Qe.index&&me.setIndex(Qe.index),me.instanceCount=1,me.setAttribute("instancePos",he),me.setAttribute("instanceOrient",ye),me.setAttribute("instanceAnimationFrameFromToBlend1",Be),me.setAttribute("instanceAnimationFrameFromToBlend2",j);const Ie=new Ct({uniforms:{...Ce,u_cardLedTexture:{value:fe},u_cardTexture:{value:xe},u_cardColor:{value:new $e("#ddddff")},u_cardUvOffset:{value:new nt(0,0)},u_cardTextureSize:{value:H},u_cardOpacity:{value:0}},vertexShader:wa,fragmentShader:ly,transparent:!0,depthTest:!1,depthWrite:!1,side:En,blending:zo,blendEquation:bn,blendSrc:si,blendDst:si,blendEquationAlpha:bn,blendSrcAlpha:si,blendDstAlpha:si,defines:{BONE_COUNT:fo}}),Oe=new kt(me,Ie);Oe.frustumCulled=!1,Oe.renderOrder=100,Oe.visible=!1,st.add(Oe);const ke=new Di;S.add(ke);const Pe=new Ao;Pe.positionAmplitude=2,Pe.positionFrequency=1,Pe._enableRotationNoise=!1;const je=Pe.position;let He=0,qe=1,k=typeof window<"u"?window.scrollY:0,ne=1;const re=(we,Ge)=>{const Le=new Zr;for(const _t in we.attributes)Le.setAttribute(_t,we.attributes[_t]);we.index&&Le.setIndex(we.index);const Je=new Float32Array(ya);for(let _t=0;_t<ya;_t++)Je[_t]=_t;Le.setAttribute("a_instanceId",new pn(Je,1)),Le.instanceCount=ya;const dt=new Ct({uniforms:{u_texture:{value:f},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:je},u_time:{value:0}},vertexShader:sy,fragmentShader:oy,transparent:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:ya,...Ge?{IS_WALL:!0}:{}}}),Rt=new kt(Le,dt);return Rt.frustumCulled=!1,ke.add(Rt),dt},ue=re(d,!1),De=re(_,!0),Ue=await My(S,{base:r,isMobile:n,sharedTime:Ce.u_time}),rt=new Ct({uniforms:{u_color:{value:new $e(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:xi}),Mt=new kt(new Si(200,200),rt);Mt.position.z=-80,Mt.renderOrder=-10,S.add(Mt);const Pt=new Di;S.add(Pt);const mt=await _f(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);mt.wrapS=mt.wrapT=Os,E.colorSpace=sn,E.flipY=!1,E.wrapS=E.wrapT=Os;const wt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Me.texture},u_greebleArmbTexture:{value:mt},u_greebleNormalTexture:{value:E},u_resolution:{value:new nt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new G(0,70,0)},u_color1:{value:new $e(po[0])},u_color2:{value:new $e(Yl[0])}},Tn=(we,Ge,Le)=>{const Je=new Zr;for(const Lt in we.attributes)Je.setAttribute(Lt,we.attributes[Lt]);we.index&&Je.setIndex(we.index);const dt=we.attributes.position.count;Je.getAttribute("ao")||Je.setAttribute("ao",new Xt(new Float32Array(dt).fill(1),1)),Je.getAttribute("areaRatio")||Je.setAttribute("areaRatio",new Xt(new Float32Array(dt),1)),Je.getAttribute("height")||Je.setAttribute("height",new Xt(new Float32Array(dt).fill(1),1)),Je.getAttribute("cluster")||Je.setAttribute("cluster",new Xt(new Float32Array(dt),1)),Je.setAttribute("instancePos",Zl(Ge.attributes.position)),Je.setAttribute("instanceGridIds",Zl(Ge.attributes.gridIds)),Je.setAttribute("instanceAxis",Zl(Ge.attributes.rotAxis)),Je.instanceCount=Ge.attributes.position.count;const Rt=new Ct({uniforms:wt,vertexShader:iy,fragmentShader:ry,side:En,transparent:!1,depthWrite:!0,blending:yr,defines:{GRID_SIZE:Ma,...Le?{IS_HD:!0}:{}}}),_t=new kt(Je,Rt);return _t.frustumCulled=!1,_t.renderOrder=Le?2:1,Pt.add(_t),_t};Tn(v,g,!1),s&&m&&p&&Tn(m,p,!0);let Ar=0,Rr=0,cn=0,yi=A,tr=0,Cr=-80,Mi=0;const Ut=new Ao;Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0;const wi=new Kc(new G,1,.65,1.3),ci=new Kc(new G,1,.85,1.1),Pr=Array.from({length:Xe},()=>{const we=new Ao;return we.positionFrequency=.2,we.rotationFrequency=.6,we.positionAmplitude=12,we.rotationAmplitude=10,we}),os=Float32Array.from({length:Xe+1},(we,Ge)=>Ge===0?0:Math.random()*2),ti=new Float32Array(Xe),ui=new Float32Array(Xe),h=new G,x=new Dn,b=new vt,R=new vt,L=new G,N=new G,V=new Dn,ie=new ei,Z=new G(1,1,1),$=new $e,K=new $e,le=new G,pe=new G;let ve=0,Ae=0,Ee=0,Se=0,de=.08;const lt=.1;let Ye=!1,yt=0,pt=0,et=0;window.addEventListener("pointermove",we=>{ve=we.clientX/Math.max(window.innerWidth,1)*2-1,Ae=we.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ye=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ye=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ye=!1},{passive:!0});const Et=()=>{C.near=1,C.far=200,C.position.copy(P),C.up.set(0,1,0),C.lookAt(D),C.fov=yi,le.set(0,0,-1).applyQuaternion(C.quaternion);let we=pe.copy(D).sub(C.position).dot(le);const Ge=C.fov,Le=Ge+cn,Je=Math.max(1,Math.min(170,Le));let dt=we*Math.tan(Ge/360*Math.PI/2)/Math.tan(Je/360*Math.PI/2)-we;Number.isFinite(dt)||(dt=0),C.translateZ(dt),C.fov=Ge,we+=dt,C.translateZ(we*-1);const Rt=n?de*.35:de,_t=Math.max(-1,Math.min(1,Ae))*Rt,Lt=Math.max(-1,Math.min(1,-ve))*Rt;Ee+=(_t-Ee)*lt,Se+=(Lt-Se)*lt,ie.set(Ee,Se,0),V.setFromEuler(ie),C.quaternion.multiply(V),C.translateZ(we),C.updateProjectionMatrix()},ut=we=>{if(Ut.update(we),wi.update(we,Ut.position),L.copy(Ut.euler),ci.update(we,L),ie.set(ci.value.x,ci.value.y,ci.value.z),V.setFromEuler(ie),R.compose(wi.value,V,Z),b.compose(h,x,Z),b.multiply(R),b.decompose(L,V,N),he.setXYZ(0,L.x,L.y,L.z),ye.setXYZW(0,V.x,V.y,V.z,V.w),he.needsUpdate=!0,ye.needsUpdate=!0,il=1+Math.min(3.5,wi.valueVel.length()*.2+ci.valueVel.length()*.2),I>.01&&!en&&!ls){for(let Ge=0;Ge<Xe;Ge++){const Le=Pr[Ge];Le.positionFrequency=.2,Le.rotationFrequency=.6,Le.positionAmplitude=12,Le.rotationAmplitude=10,Le.update(we),b.compose(h,x,Z),b.multiply(Le.matrix),b.decompose(L,V,N);const Je=Ge/Math.max(Xe-1,1),dt=_e(I,Je*.3,.7+Je*.3,1,0,J1);N.set(he.getX(0),he.getY(0),he.getZ(0)),L.lerp(N,dt),ze.setXYZ(Ge,L.x,L.y,L.z),Ke.setXYZW(Ge,V.x,V.y,V.z,V.w)}ze.needsUpdate=!0,Ke.needsUpdate=!0}},ot=i.parentElement||e,tt=fp(e);let Ze=0,Nt=0,Ot=0,at=0,An=0,nl=0,nr=0,Lu=0,as=0,Ei=0,Du=0,ls=!0,yn=!1,en=!1,no=0,ir=0,il=1,rl=0,Iu=performance.now(),qo=!1,Uu=!1;const tn=dy(w,S,C),io=()=>{const we=ot,Ge=we.clientWidth||window.innerWidth,Le=we.clientHeight||window.innerHeight;C.aspect=Ge/Math.max(Le,1),Et(),w.setSize(Ge,Le,!1),tn.resize(Ge,Le),wt.u_resolution.value.set(Ge,Le);const Je=Math.max(1,Math.floor(Ge*.25)),dt=Math.max(1,Math.floor(Le*.25));(oe.width!==Je||oe.height!==dt)&&(oe.setSize(Je,dt),ae.setSize(Je,dt))};io(),window.addEventListener("resize",io);const Nu=(we,Ge,Le=100)=>{const Je=we.attributes.position.array,dt=we.attributes.orient.array,Rt=Math.min(Math.floor(Ge),Le-1),_t=Math.min(Math.ceil(Ge),Le-1),Lt=Ge-Math.floor(Ge),nn=new G().fromArray(Je,Rt*3).lerp(new G().fromArray(Je,_t*3),Lt),Rn=new Dn().fromArray(dt,Rt*4).slerp(new Dn().fromArray(dt,_t*4),Lt);return{p:nn,q:Rn}},Yo=()=>{var us;if(!e)return;const we=window.innerHeight,Ge=window.scrollY||0;Ge!==k&&(ne=Ge>k?1:-1,k=Ge),An=tt.range("blackFrameIn").ratio,Ot=tt.range("blackTitle").ratio,at=tt.range("blackTunnel").ratio,nr=tt.range("whiteTunnel").ratio,Ze=tt.between("whiteTunnel","whiteFrameOut").ratio,Lu=tt.range("whiteFrameOut").ratio,nl=tt.range("whiteFrameBreak").ratio,Du=tt.between("whiteTunnel","whiteFrameBreak").ratio,Ei=tt.between("whiteFrameBreak","astronautDrop").ratio,as=((us=tt.range("astronautWait"))==null?void 0:us.ratio)??0,et=tt.between("whiteFrameBreak","astronautWait").ratio,ls=Ot<1,yn=at<1&&!ls,en=Ze<=1&&!yn&&!ls,Nt=en?mi(0,.15,Du):1,tn.sync({blackFrameInRatio:An,blackTitleRatio:Ot,blackTunnelRatio:at,whiteFrameRatio:nr,whiteTunnelWaitRatio:as,astronautDropRatio:Ei,isWhiteTunnelActive:en,isBlackTunnelActive:yn,isMobile:n}),Ce.u_whiteTunnelRatio.value=Ze,Ce.u_showRatio.value=Nt,Ce.u_frameOutRatio.value=nl,ue.uniforms.u_ratio.value=Ze,De.uniforms.u_ratio.value=Ze,ue.uniforms.u_ratioInverse.value=1-Ze,De.uniforms.u_ratioInverse.value=1-Ze;const Le=new $e(en&&Ei<1?"#ffffff":"#000000");rt.uniforms.u_color.value.copy(Le),S.background=null,w.setClearColor(Le,tn.clearAlpha),Ce.u_bgColor.value.copy(Le),ot&&(ot.style.background=Le.getStyle()),ke.visible=en&&Ei<1,Pt.visible=yn;const Je=document.getElementById("header");Je&&((ot==null?void 0:ot.classList.contains("is-pinned"))?en&&Ei<1?Je.style.color="#000000":Je.style.color="#ffffff":Je.style.color="");const dt=e.dataset.goalPhase==="black-tunnel",Rt=e.dataset.goalPhase==="white";(yn&&!dt||en&&!Rt)&&tn.markEfxSync();const _t=en;for(const un of F){const ro=_t?un.userData.whiteMat:un.userData.blackMat;un.material!==ro&&(un.material=ro)}I=yn?mi(.2,.4,at):0,T.value=I;for(const un of Te)un.visible=!en&&I>.01;let Lt;if(en){const un=Ze<1?_e(Ze,0,1,0,79):_e(Ei,0,1,79,99);Lt=Nu(l,un,100),Lt.p.y-=(n?0:.4)*ny(Ei)}else Lt=Nu(a,100*$c(Math.min(Ot,1)),100);if(h.copy(Lt.p),x.copy(Lt.q),Ut.positionFrequency=.2,Ut.rotationFrequency=.15,Ut.positionAmplitude=0,Ut.rotationAmplitude=0,yn){const un=at;Ut.positionFrequency=.2+.5*un,Ut.rotationFrequency=.15,Ut.positionAmplitude=5*un,Ut.rotationAmplitude=60*un}else en&&(Ut.positionFrequency=_e(nr,0,.45,.5,.2),Ut.rotationFrequency=_e(nr,0,.45,.4,.15),Ut.positionAmplitude=_e(nr,0,.75,5,0),Ut.rotationAmplitude=_e(nr,0,.75,15,0));st.visible=Nt>.02;const nn=window.innerHeight||1,Rn=Math.max(1,(ot==null?void 0:ot.clientHeight)||nn),Cn=An<1?An:1-nr,jt=Yt.lerp(Rn*(n?.72:.55),nn,Cn),ni=P.distanceTo(D),rn=A/180*Math.PI,bi=Math.tan(rn/2)*ni*2*(nn/Math.max(jt,1));yi=Math.atan(bi/2/ni)*2/Math.PI*180,en?(cn=_e(Ze,0,1,n?36:60,0),yi=_e(nr,0,1,yi,n?58:70)):yn?(cn=Math.sin(at*10+He)*(n?4.5:7.5)*mi(0,.2,at),Pt.position.z=-80*qr(.2,0,at)):(cn=_e(An,0,1,n?12:20,0),Pt.position.z=-80),de=.08*mi(.5,1,Ot)+.02,Ze>0&&(de*=_e(tt.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),de=_e(as,0,.1,de,.05),pt=(1-yt)*ne*2.5*_e(An,0,.5,0,1)*_e(as,0,.25,1,0),Et(),it.u_frameIn.value=An,it.u_sunFactor.value=yn?1-mi(.1,.2,at):1,it.u_blackTunnelRatio.value=yn?mi(.1,.3,at):0,it.u_endRatio.value=yn?mi(.65,.9,at):0,it.u_offsetZ.value=wt.u_offsetZ.value;const cs=_e(Ei,1,0,.2,1)*(nl>0?1:0);Ce.u_tintColor.value.setStyle("#2533c2").multiplyScalar(cs);const Oi=ot.getBoundingClientRect();qo=Oi.bottom>0&&Oi.top<we,qo&&!Uu&&ls&&(no=0,ir=0),Uu=qo,e.dataset.goalPhase=en?"white":yn?"black-tunnel":"title"},Sp=we=>{if(!yn){wt.u_showRatio.value=0,tn.setEfxOffset(0,0);return}wt.u_showRatio.value=K1(qr(0,.1,at));const Ge=wt.u_outBloomFromToStrength.value;Ge.z=_e(at,.65,.75,0,.2),Ge.z=_e(at,.75,.85,Ge.z,.15),Ge.z=_e(at,.85,1,Ge.z,.15),Ge.x=_e(at,.75,.85,20,60),Ge.x=_e(at,.9,1,Ge.x,30);const Le=_e(at,.6,1,0,1,ql);wt.u_blackTunnelTransformRatio.value=Le;const Je=ne*we;Ar+=Je*qr(.1,.3,at)*_e(Le,0,.25,1,.5),Rr+=Je*_e(Le,0,.25,1.5,1);const dt=Ar,Rt=Math.floor(dt),_t=dt-Rt,Lt=(Rt+hp(_t))*Ma+Rr*Ma+at*Ma*10,nn=-80*qr(.2,0,at);let Rn=nn-Cr,Cn=Lt-tr;(Math.abs(Cn)>8||Math.abs(Rn)>20)&&(Cn=0,Rn=0),Mi=Rn+Cn,Cr=nn,tr=Lt,Pt.position.z=nn,wt.u_offsetZ.value=Lt,it.u_offsetZ.value=Lt,wt.u_time.value=He;const jt=po.length*_e(at,.2,1,0,1),ni=Math.floor(jt),rn=Math.min(Math.ceil(jt),po.length-1),cs=jt-ni>.5?1:0;$.set(po[ni]),K.set(po[rn]),$.lerp(K,cs),wt.u_color1.value.copy($),$.set(Yl[ni]),K.set(Yl[rn]),$.lerp(K,cs),wt.u_color2.value.copy($);const Oi=n?.45:1;tn.setEfxOffset(Mi*_e(at,0,.2,0,1)*Oi,Mi*Le*.01*Oi),tn.setEfxAmount(_e(at,0,.25,.35,.85)*(n?.35:1)),cn=Math.sin(at*10+He)*(n?4.5:7.5)*mi(0,.2,at)};let sl=0;const yp=we=>{if(!en){Ue.update({whiteTunnelWaitRatio:0,aspect:C.aspect}),sl=Ze;return}Pe.update(we),ue.uniforms.u_time.value=He,De.uniforms.u_time.value=He,ue.uniforms.u_fbm.value=je,De.uniforms.u_fbm.value=je;let Ge=Ze-sl;Math.abs(Ge)>.08&&(Ge=0);const Le=n?.4:1,Je=Yt.clamp(-Ge*_e(Ze,0,.9,500,0,ql)*Le,-1,1),dt=Yt.clamp(-Ge*_e(Ze,0,.8,45,0,ql)*Le,-1,1);tn.setEfxOffset(Je,dt),tn.setEfxAmount(_e(Ze,.75,1,1,0)*(n?.5:1)),sl=Ze;const Rt=en&&Ei<1?"#ffffff":"#000000",_t=n?Math.max(C.aspect,.95):Math.max(C.aspect,.01);Ue.update({whiteTunnelWaitRatio:as,aspect:_t,bg:Rt})},Fu=()=>Yo();window.addEventListener("scroll",Fu,{passive:!0}),Yo();const Ou=we=>{var ku;const Ge=Math.min(.05,Math.max(0,we||.016666666666666666));if(Iu=performance.now(),!qo){if(ot){const Vt=ot.getBoundingClientRect();Vt.bottom>0&&Vt.top<window.innerHeight&&tn.render()}return}yt+=((Ye?1:0)-yt)*.1,qe=_e(yt,0,1,1,.3)*Ge,qe=_e(An,0,1,Ge,qe),qe=_e(et,.5,.75,qe,Ge),He+=qe,Ce.u_time.value=He,pt=(1-yt)*ne*2.5*_e(An,0,.5,0,1)*_e(as,0,.25,1,0),Sp(qe),yp(qe),ut(qe),yn&&(cn=Math.sin(at*10+He)*7.5*mi(0,.2,at)),Et();const Le=Ei,Je=_e(Le,0,.1,0,1)*_e(Le,.9,1,1,0);Ce.u_loopLinearBlend.value=Je;const dt=_e(Le,.9,1,0,1,$c);te=dt>0;let Rt,_t,Lt,nn=!0;if(Le<.5)ir=0,Rt=Ot<.08?mi(-.3,1,Ot)*.25:mi(-.3,1,Ot)*.75,_t=0,Lt=89,Ie.uniforms.u_cardOpacity.value=0;else{Rt=_e(Le,.9,1,0,1),_t=140,Lt=Math.min(O-1,287);const Vt=Math.min(2,Math.max(0,.5+Math.max(0,Q.getFbm(He*8,3)+.5)*4));Ie.uniforms.u_cardOpacity.value=Vt*dt,Le<1?(ir=Math.max(0,ir),nn=!1):ir=0}ir===0&&(no+=qe*Rt*il),Je===1&&(no=0);const Rn=Lt-_t+1,Cn=os[0];let ni=(Cn+no)*60%Rn,rn=Math.floor(ni),bi=(rn+1)%Rn+_t;rn+=_t,bi<rn&&(nn||(bi=rn=_t,no=-Cn,ir=Number.POSITIVE_INFINITY));const cs=ni-Math.floor(ni);Be.setXYZ(0,rn,bi,nn||bi>=rn?cs:0),Be.needsUpdate=!0;const Oi=_e(Lu+Le,.9,2,90,139,ty),us=Math.floor(Oi),un=Math.ceil(Oi),ro=Oi-us;j.setXYZ(0,us,un,ro),j.needsUpdate=!0,Oe.visible=Le>=.95&&Nt>.02,ee=te?ee+qe:0;{const Vt=H.x,Lr=H.y,Zo=Math.floor(10*ee%(Vt*(Lr+1))),hs=Zo/(Vt*(Lr+1)),Dr=qr(0,.15,hs)*qr(1,.9,hs);Ce.u_faceLedLight.value=Dr,Ie.uniforms.u_cardUvOffset.value.set(Zo%Vt/Vt,(Lr-Math.floor(Zo/Vt))/Lr)}if(Ce.u_cardPosition.value.set(he.getX(0),he.getY(0)+.9,he.getZ(0)),I>.01&&!en&&!ls){for(let Vt=0;Vt<Xe;Vt++){ti[Vt]=(ti[Vt]+.2*qe)%1,ir===0&&(ui[Vt]+=qe*Rt*il);const hs=(Yt.lerp(0,os[Vt+1],I)+ui[Vt])*60%Rn;let Dr=Math.floor(hs),ol=(Dr+1)%Rn+_t;Dr+=_t,ol<Dr&&!nn&&(ol=Dr=_t);const wp=hs-Math.floor(hs);ge.setXYZ(Vt,Dr,ol,wp),Fe.setXYZ(Vt,us,un,ro)}ge.needsUpdate=!0,Fe.needsUpdate=!0}if((ku=tn.setScrollVelocity)==null||ku.call(tn,Math.abs(pt)+Math.abs(ne)*.5),yn){const Vt=wt.u_resolution.value.clone();ke.visible=!1,Mt.visible=!1,st.visible=Nt>.02,wt.u_feedbackTexture.value=Me.texture,wt.u_resolution.value.set(Re.width,Re.height),w.setRenderTarget(Re),w.setClearColor(0,0),w.clear(),w.render(S,C),w.setRenderTarget(null),wt.u_resolution.value.copy(Vt);const Lr=Me;Me=Re,Re=Lr,wt.u_feedbackTexture.value=Me.texture,it.u_blackTunnelTexture.value=Me.texture,Mt.visible=!0}w.setClearColor(Ce.u_bgColor.value,tn.clearAlpha),tn.render()},zu=we=>{rl=requestAnimationFrame(zu);const Ge=Math.min(.05,(we-Iu)/1e3);we-Bu>50&&Ou(Ge)};let Bu=0;const Mp=we=>{Bu=performance.now(),Ou(we)};return rl=requestAnimationFrame(zu),requestAnimationFrame(()=>{io(),Yo(),tn.render()}),{resize:io,updateScroll:Yo,tickFrame:Mp,getAutoScrollSpeed:()=>pt,destroy(){cancelAnimationFrame(rl),window.removeEventListener("resize",io),window.removeEventListener("scroll",Fu),oe.dispose(),ae.dispose(),tn.destroy(),w.dispose()}}}function Ey(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(d=>{if(d.querySelector(".goal-word"))return;const _=d.textContent.replace(/\s+/g," ").trim().split(" ");d.innerHTML=_.map(v=>`<span class="goal-word">${v}</span>`).join(" ")});const r=fp(i),s=()=>window.innerWidth<812,o=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const d=e.getBoundingClientRect(),_=d.width,v=d.left;n.forEach(g=>{const m=Array.from(g.querySelectorAll(".goal-word"));if(m.length<2){m.forEach(S=>{S._offsetX=0});return}m.forEach(S=>{S.style.transform="translateZ(0)"});let p=_;m.forEach(S=>{const P=S.getBoundingClientRect();S._domRect=P,p-=P.width});let E=0;const y=p/(m.length-1);m.forEach(S=>{S._offsetX=-S._domRect.left+v+E,E+=S._domRect.width+y})})};c(),window.addEventListener("resize",c);let u=null;t&&t.parentElement&&(u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const f=()=>{const d=r.range("blackTitle").ratio,_=r.range("blackTunnel").ratio,v=r.between("whiteTunnel","whiteFrameOut").ratio,g=r.between("whiteFrameBreak","astronautDrop").ratio,m=_e(v,0,.25,0,1);r.progress();const p=window.innerHeight;if(t){const A=i.getBoundingClientRect(),C=window.scrollY||0,M=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+C,U=C>=M-1&&A.bottom>p;t.classList.toggle("is-pinned",U),u&&(u.style.height=U?`${t.offsetHeight||p}px`:"0px"),t.style.background=m>.5?"#f0f1fa":"#000000"}let E=_e(d,a,l,0,1);const y=E>0&&E<1;let S=_e(E,.5,1,1,s()?9:12,$c);S*=_e(E,0,.15,.85,1,ey);let P=_e(E,.9,1,1,0);P*=_e(E,0,.05,0,1),P*=_e(_,0,.12,1,0);const D=_e(E,.4,.6,0,1,hp);if(e.classList.toggle("is-on-black",m<.5),e.style.opacity=String(P),e.style.transform=`translate3d(-50%, -50%, 0) scale(${S})`,e.style.visibility=y&&P>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(A=>{const C=A._offsetX||0;A.style.transform=`translateX(${D*C}px)`}),o){const A=_e(_,.02,.15,1,0);o.style.opacity=String(A),o.style.transform="none"}return i.dataset.goalPhase=v>.01?"white":_>.01?"black-tunnel":"title",{blackTitleRatio:d,blackTunnelRatio:_,whiteTunnelRatio:v,astronautDropRatio:g,toWhite:m}};return window.addEventListener("scroll",f,{passive:!0}),f(),{updateScroll:f,ranges:r,destroy(){window.removeEventListener("scroll",f),window.removeEventListener("resize",c)}}}function Ea(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((s,o)=>{const a=document.createElement("div");a.className=e,a.textContent=s,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),o<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function by(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,s)=>{const o=document.createElement("div");o.className="word",o.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",o.appendChild(l),t.push(l)}),i.appendChild(o),r<s.length-1&&i.appendChild(document.createTextNode(" "))}),t}function Vr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function Ty(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=Vr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),s=document.getElementById("home-reel-title-line-2"),o=document.getElementById("home-reel-content"),a=Vr(document.getElementById("home-reel-desc"),2),l=Vr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),f=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let d=[],_=0,v=[],g=!0;const m=()=>{d.forEach(J=>{J.style.transform="translate3d(0, 100%, 0)"}),v.forEach(J=>{J.style.transform="translate3d(0, 100%, 0)",J.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!s||([r,s].forEach(J=>{J.style.overflow="hidden",J.style.display="block",J.style.position="relative"}),d=[...Ea(r,"word"),...Ea(s,"word")],d.forEach(J=>{J.style.position="relative",J.style.bottom="0.1em"}),_=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Ea(a,"word"),a.style.overflow="hidden"),m())})();const E=document.getElementById("home-featured"),y=Vr(document.getElementById("home-featured-title"),2),S=Vr(document.getElementById("home-featured-disclaimer"),2),P=Vr(document.getElementById("home-featured-cta"),1);let D=[],A=[],C=!0;const w=()=>{C=!1,y&&(y._time=0,y._animating=!1),S&&(S._time=0,S._animating=!1),P&&(P._time=0,P._animating=!1),i()||(A.forEach(J=>{J.style.transform="translate3d(0, 100%, 0)"}),D.forEach(J=>{J.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(y){if(y.style.overflow="hidden",D=by(y),S){const J=S.textContent.trim();S.textContent="";const he=document.createElement("div");he.className="line",he.textContent=J,he.style.transform="translate3d(0, 100%, 0)",he.style.willChange="transform";const ye=document.createElement("div");ye.style.position="relative",ye.style.overflow="hidden",ye.appendChild(he),S.appendChild(ye),A=[he]}P&&(P.style.transform="translate3d(0, 150%, 0) rotate(10deg)",P.style.opacity="0",P.style.overflow="hidden"),w()}})();const U=Vr(document.getElementById("home-goal-title"),2);let z=[];U&&(U.style.overflow="hidden",z=Ea(U,"word"),z.forEach(J=>{J.style.transform="translate3d(0, 100%, 0)",J.style.opacity="0"}));let O=0,X=!1,Y=0;const q=J=>{if(!t||!e)return;if(!dn(e).isActive){g=!0;return}g&&(g=!1,m());const ye=dn(t),Be=dn(o||a),se=window.innerHeight*.1;if(t._time=_n(t._time+(t._animating?J:-J),0,2),a&&(a._time=_n(a._time+(a._animating?J:-J),0,2)),l&&(l._ratio=Xn(l._ratio+(l._animating?J:-J))),ye.screenRatio>-1&&(t._animating=!0,i()?d.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):d.forEach((oe,ae)=>{let Me,Re;ae<2?(Me=_e(t._time-Math.abs(2-ae)/10,.5,1.2,-_,0,ft),Re=_e(t._time-ae/10,0,1,100,0,ft)):(Me=0,Re=_e(t._time-ae/10,0,1,-100,0,ft)),oe.style.transform=`translate3d(${Me}px, ${Re}%, 0)`}),n)){const oe=ye.showScreenOffset*-se*.5;n.style.transform=`translate3d(0, ${oe}px, 0)`}if(Be.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const oe=Be.showScreenOffset*-se*1.5;if(a&&(a.style.transform=`translate3d(0, ${oe}px, 0)`,i()?v.forEach(ae=>{ae.style.opacity="1",ae.style.transform="translate3d(0, 0, 0)"}):v.forEach((ae,Me)=>{const Re=_e(a._time-Me/100,0,1,.1,1,qa),Ce=_e(a._time-Me/100,0,1,100,0,qa);ae.style.opacity=String(Re),ae.style.transform=`translate3d(0, ${Ce}%, 0)`})),l){const ae=Be.showScreenOffset*-se*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${ae}px) translate3d(0, ${_e(l._ratio,0,1,150,0,ft)}%, 0) rotate(${_e(l._ratio,0,1,10,0,ft)}deg)`,l.style.opacity=String(ft(l._ratio))):(l.style.transform=`translateY(${ae}px)`,l.style.opacity="1")}}if(c){const oe=dn(c),ae=Xn(_e(oe.showScreenOffset,.05,.85,0,1,ft));c.style.opacity=String(ae),c.style.transform=`translate3d(0, ${_e(ae,0,1,80,0,ft)}px, 0) scale(${_e(ae,0,1,.96,1,ft)})`}if(u){const oe=dn(u);Y=Xn(_e(oe.showScreenOffset,0,.7,0,1,ft)),u.style.opacity=String(.4+Y*.6),u.style.transform=`translate3d(0, ${_e(Y,0,1,60,0,ft)}px, 0) scale(${_e(Y,0,1,.94,1,ft)})`,X=Y>.9,O=_n(O+(X?J:-J*2),0,1.4),f.forEach((ae,Me)=>{const Re=_e(O-Me/10,0,.6,0,1,ft),Ce=_e(O-Me/10,0,.6,0,180,ft);ae.style.transform=`scale(${Re}) rotate(${Ce}deg)`,ae.style.display="inline-block"})}},W=J=>{if(!E||!y)return;if(dn(E).isActive){C&&w();const ye=dn(y),Be=dn(S),j=dn(P);y._time=_n(y._time+(y._animating?J:-J),0,2),S&&(S._time=_n(S._time+(S._animating?J:-J),0,2)),P&&(P._time=_n(P._time+(P._animating?J:-J),0,1)),ye.screenRatio>-1&&(y._animating=!0,i()?D.forEach(se=>{se.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):D.forEach((se,oe)=>{const ae=_e(y._time*1.5-oe/20,0,1,1,0,ft),Me=_e(y._time*1.5-oe/20,0,1,10,0,ft);se.style.transform=`translate3d(0, ${ae}em, 0) rotate(${Me}deg)`})),Be.screenRatio>-1&&S&&(S._animating=!0,i()?A.forEach(se=>{se.style.transform="translate3d(0, 0, 0)"}):A.forEach((se,oe)=>{const ae=_e(S._time-oe/20,0,1,100,0,ft);se.style.transform=`translate3d(0, ${ae}%, 0)`})),j.screenRatio>-1&&P&&(i()?(P.style.transform="translate3d(0, 0, 0) rotate(0deg)",P.style.opacity="1"):(P._animating=!0,P.style.transform=`translate3d(0, ${_e(P._time,0,1,150,0,ft)}%, 0) rotate(${_e(P._time,0,1,10,0,ft)}deg)`,P.style.opacity=String(ft(P._time))))}else C=!0},B=J=>{if(!U)return;dn(U).screenRatio>-1&&(U._animating=!0),U._time=_n(U._time+(U._animating?J:-J),0,2),z.forEach((ye,Be)=>{const j=_e(U._time-Be/20,0,1,0,1,ft),se=_e(U._time-Be/20,0,1,100,0,ft);ye.style.opacity=String(j),ye.style.transform=`translate3d(0, ${se}%, 0)`})},ce=()=>{r&&(_=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ce),{update(J){q(J),W(J),B(J)},destroy(){window.removeEventListener("resize",ce)}}}const vf=28,Ay=4,Ry=8;function xf(){return window.innerWidth<812}function Cy(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var C,w;const r=t.querySelector(".project-item-main"),s=t.querySelector(".project-item-image"),o=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((C=o==null?void 0:o.textContent)==null?void 0:C.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",f=[];a&&(a.textContent="",[...u].forEach(M=>{const U=document.createElement("div");if(U.className="project-item-line-2-inner-list",U.style.transform="translateY(-400%)",M===" ")U.style.width="0.3em";else for(let z=0;z<4;z++){const O=document.createElement("span");O.textContent=M,U.appendChild(O)}a.appendChild(U),f.push(U)})),o&&(o.textContent="");let d=!1,_=!1,v=0,g=0,m=0,p=0,E=0,y=!1,S=0,P=0,D=0,A=0;return xf()||(t.addEventListener("mouseenter",()=>{_=!0}),t.addEventListener("mouseleave",()=>{_=!1}),r==null||r.addEventListener("mouseenter",()=>{d=!0}),r==null||r.addEventListener("mouseleave",()=>{d=!1})),{dom:t,main:r,image:s,line1:o,line2Icon:l,tags:c,letterCols:f,index:n,update(M){const U=dn(t),z=U.ratio>-1&&U.ratio<1;z&&(y=!0),y&&(m+=M);const O=Xn(_e(m,0,.85,0,1,ft)),X=_e(O,0,1,90,0,ft);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${X}px, 0)`,o&&z){p+=M;const Y=Math.min(c.length,Math.floor(vf*p)-Ay),q=Math.min(c.length,Math.floor(vf*p));let W="";for(let B=0;B<Math.max(0,Y);B++)W+=c[B];for(let B=0;B<q-Math.max(0,Y);B++)W+=String.fromCharCode(33+Math.floor(Math.random()*93));o.textContent=W}if(z&&(E+=M*.8),g=Xn(g+(_?1:-1)*M*2.5),xf())f.forEach((Y,q)=>{const W=Xn(g-Math.abs(q-f.length-1)/100),B=_e(W,0,1,0,1.5,ft);Y.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(f.forEach((Y,q)=>{const W=_e(q,0,Math.max(1,f.length-1),Math.PI/2,3*Math.PI/2),B=Xn(E-Math.cos(W)/Ry),ce=_e(B,0,1,500,0,j1),J=Xn(g-Math.abs(q-f.length-1)/100),he=_e(J,0,1,0,1.5,ft);Y.style.transform=`translate3d(${he}em, -${ce}%, 0)`}),l){const Y=_e(g,.3,1,0,1,ft);l.style.transform=`translateX(${Y}em)`}if(v=_n(v+(d?1:-1)*M,0,1),s&&!document.documentElement.classList.contains("has-featured-webgl")){d?(D=(Math.random()-.5)*_e(v,0,.6,1,0)*8,A=(Math.random()-.5)*_e(v,0,.6,1,0)*8):(D*=.92,A*=.92),S+=(D-S)*.2,P+=(A-P)*.2;const Y=_e(v,0,1,1,1.06,ft);s.style.transform=`translate3d(${S}px, ${P}px, 0) scale(${Y})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Sf=12,yf=6,Py=`
uniform vec2 u_resolution;
uniform vec2 u_domXY;
uniform vec2 u_domWH;
uniform vec3 u_meshOffset;
uniform float u_rotZ;
varying vec2 v_uv;
void main() {
  v_uv = uv;
  vec2 local = position.xy; // PlaneGeometry -0.5..0.5
  float c = cos(u_rotZ);
  float s = sin(u_rotZ);
  vec2 rotated = vec2(local.x * c - local.y * s, local.x * s + local.y * c);
  vec2 px = u_domXY + (rotated + 0.5) * u_domWH + u_meshOffset.xy;
  vec2 ndc = vec2(
    (px.x / u_resolution.x) * 2.0 - 1.0,
    -(px.y / u_resolution.y) * 2.0 + 1.0
  );
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,Ly=`
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
  return smoothstep(0., 0. - fwidth(d), d);
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
  float stepDist = dist / float(${Sf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Sf}; i++) {
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
  float numSampleInv = 1.0 / float(${yf});
  for (int i = 0; i < ${yf}; i++) {
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
`;function Dy(i,e,t,n){const r=Math.PI*2*e,s=t/(Math.PI*e),o=1/(r*r),a=n*t/r;let l=i,c=0,u=i,f=i;return{get value(){return l},set target(d){f=d},get target(){return f},update(d){if(d<=0)return l;const _=(f-u)/d;u=f;const v=Math.max(o,d*d/2+d*s/2,d*s);return l+=c*d,c+=(f+a*_-l-s*c)*d/v,l},reset(d=i){l=d,c=0,u=d,f=d}}}async function Iy(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n),document.documentElement.classList.add("has-featured-webgl");const r=new tl({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1});r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),r.setClearColor(0,0),r.outputColorSpace=mn;const s=new Go,o=new Au(-1,1,1,-1,0,1),a=new dr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=y=>{c.x=y.clientX,c.y=y.clientY};window.addEventListener("pointermove",u,{passive:!0});const f=[],d=Array.from(t.querySelectorAll(".project-item"));await Promise.all(d.map(async(y,S)=>{var oe,ae,Me;const P=y.dataset.id||((oe=i[S])==null?void 0:oe.id),D=y.querySelector(".project-item-main"),A=y.querySelector(".project-item-image img");A&&(A.style.opacity="0",A.setAttribute("aria-hidden","true"));const C=new $e(y.dataset.colorBg||"#111111");let w,M;try{[w,M]=await Promise.all([a.loadAsync(`${l}${P}/home.webp`),a.loadAsync(`${l}${P}/home_depth.webp`)])}catch(Re){console.warn("Featured WebGL textures failed for",P,Re),A&&(A.style.opacity="1");return}w.colorSpace=mn,w.wrapS=w.wrapT=Zn,M.colorSpace=sn,M.wrapS=M.wrapT=Zn,M.minFilter=St,M.magFilter=St,M.generateMipmaps=!1;const U=new nt(((ae=w.image)==null?void 0:ae.width)||1024,((Me=w.image)==null?void 0:Me.height)||1024),z=new G(0,0,-1),O=new Kc(new G,1,.6,2),X=Dy(1,2.2,.7,3);X.target=0;const Y=new nt,q=new nt,W={u_texture:{value:w},u_depthTexture:{value:M},u_colorBg:{value:C},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:U},u_domWH:{value:new nt(1,1)},u_domXY:{value:new nt(0,0)},u_shiftXY:{value:Y},u_focusPos:{value:z},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new nt(1,1)},u_globalRadius:{value:15},u_time:{value:0},u_meshOffset:{value:new G},u_rotZ:{value:0}},B=new Ct({uniforms:W,vertexShader:Py,fragmentShader:Ly,transparent:!0,depthTest:!1,depthWrite:!1}),ce=new kt(new Si(1,1),B);ce.frustumCulled=!1,ce.renderOrder=10+S,ce.visible=!1,s.add(ce);let J=!1,he=0,ye=0,Be=0;const j=[0,.2,.3],se=Re=>{for(let Ce=0;Ce<j.length;Ce++)if(Re<j[Ce])return Ce;return j.length};window.innerWidth>=812&&(D==null||D.addEventListener("mouseenter",()=>{J=!0}),D==null||D.addEventListener("mouseleave",()=>{J=!1})),f.push({mesh:ce,uniforms:W,focusDyn:O,focusPos:z,zoomDyn:X,shiftXY:Y,shiftXYTarget:q,index:S,main:D,dom:y,update(Re,Ce,it,Ve,st){const F=dn(y);if(!(F.ratio>-1&&F.ratio<1)){ye=0,ce.visible=!1,W.u_showRatio.value=0;return}ye+=Re;const ze=D.getBoundingClientRect();W.u_domXY.value.set(ze.left,ze.top),W.u_domWH.value.set(Math.max(1,ze.width),Math.max(1,ze.height)),W.u_resolution.value.set(Ce,it),W.u_time.value=Ve,W.u_rippleStrength.value=Math.min(.15,st*.5),W.u_globalRadius.value=Math.min(ze.width,ze.height)*.04;const Ke=_e(ye,0,2,0,1,qa),ge=S%2-.5;W.u_meshOffset.value.set((1-Ke)*ge*-Ce*.1,0,0),W.u_rotZ.value=(1-Ke)*ge*.1;const Fe=_e(ye,0,1.5,0,1,qa);W.u_showRatio.value=Fe,ce.visible=Fe>.01;const Te=he;if(he=_n(he+(J?1:-1)*Re,0,1),Te<he){const T=se(Te),H=se(he);H!==T&&q.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(_e(he,0,.6,1,0)),H===j.length&&q.multiplyScalar(.5)}else q.multiplyScalar(.95);Y.lerp(q,.2);const I=O.target;if(J){const T=ze.width,H=ze.height,Q=ze.left,ee=ze.top,te=c.x,be=c.y,fe=he>0?_e(he,0,.3,1,0)*H*.75:0,xe=1;I.x=(te-Q-T*.5+Math.cos(Ve*20)*fe)/T*-H*xe,I.y=(be-ee-H*.5-Math.sin(Ve*30)*fe)/H*H*xe,I.z=.5}else I.x=0,I.y=0,I.z=-1;O.update(Re),z.copy(O.value),X.target=J?1:0,X.update(Re),W.u_zoomRatio.value=X.value,Be=_n(Be+(J?.75:-1)*Re,0,1),W.u_dofRangeOffset.value=Yt.lerp(0,-.5,Be),W.u_saturation.value=0,W.u_brightness.value=0,W.u_activeRatio.value=0}})}));let _=1,v=1,g=0,m=window.scrollY,p=0;const E=()=>{_=window.innerWidth,v=window.innerHeight,r.setSize(_,v,!1)};return E(),window.addEventListener("resize",E),{update(y){g+=y;const S=window.scrollY,P=Math.abs(S-m)/Math.max(y,.001);m=S,p+=(Math.min(1,P*.002)-p)*.15;const A=dn(e).isActive;if(n.style.visibility=A?"visible":"hidden",!!A){for(const C of f)C.update(y,_,v,g,p);r.render(s,o)}},resize:E,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",E),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(y=>{y.mesh.geometry.dispose(),y.mesh.material.dispose()}),r.dispose(),n.remove()}}}function Uy(){return window.innerWidth<812}function Ny(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const s=document.createElement("span");s.className="reel-char-wrap",s.style.display="inline-block",s.style.overflow="hidden",s.style.verticalAlign="top";const o=document.createElement("span");o.className="reel-char",o.textContent=r,o.style.display="inline-block",s.appendChild(o),s._inner=o,t.appendChild(s),t._chars.push(s)}),t._randCharIndex=0}),i._splitted={words:e}}function Fy(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),s=document.getElementById("home-reel-video-title"),o=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));s&&Ny(s);const l=2;let c=0,u=0,f=0,d=0,_=!1,v=!1,g=0,m=0,p=!1,E=!1,y=0;const S=D=>{var C;if(!D)return;const A=(C=D.play)==null?void 0:C.call(D);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:D=>{var U;if(!i)return;const A=e?dn(e):null,C=n?dn(n):null,w=Uy(),M=w?!!(C!=null&&C.isActive):!!A&&A.showScreenOffset>0&&(C?C.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const z=(A==null?void 0:A.top)??0,O=(A==null?void 0:A.height)??1,X=window.innerHeight,Y=z-(X-O)*.5,q=((C==null?void 0:C.top)??0)-(X-((C==null?void 0:C.height)??X))*.5;if(y=Xn(_e(window.scrollY+z,Y,q,0,1)),y=Xn(_e((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,ft)),r&&(S(r),r.style.opacity=String(.35+y*.65)),t&&(S(t),t.style.opacity=String(1-y*.85)),e){const W=_e(y,0,1,1,1.08,ft);e.style.transform=`scale(${W})`,e.style.opacity=String(_e(y,.7,1,1,.15,ft))}if(n){const W=_e(y,0,1,48,0,ft),B=_e(y,0,1,.94,1,ft);n.style.transform=`translate3d(0, ${W}px, 0) scale(${B})`,n.style.opacity=String(.25+y*.75)}y===1||y>.9?(_=!0,v=!0):(v=!1,_=!1),p=y>.85,E=y>.85}else(U=r==null?void 0:r.pause)==null||U.call(r),y=0,_=!1,v=!1,p=!1,E=!1;if(f=_n(f+(_?D:-D),0,1e9),d=Math.min(y,Xn(d+(v?D:-D))),u=f%l,s!=null&&s._splitted&&!w){const z=s._splitted.words;for(let O=0;O<z.length;O++){const X=z[O];c-u>l-1&&(X._randCharIndex=Math.round(Math.random()*(X._chars.length-1)));for(let Y=0;Y<X._chars.length;Y++){const q=X._chars[Y];let W=_e(d-O/4-Y/20,0,.6,200,0,ft);Y===X._randCharIndex&&(W+=_e(u-O/10,.5,1.3,0,-100,ft)),q._inner&&(q._inner.style.transform=`translate3d(0, ${W}%, 0)`)}}}c=u,g=_n(g+(p?D:-D*2),0,1.4),m=_n(m+(E?D:-D*2),0,1.4),o.forEach((z,O)=>{const X=_e(g-O/10,0,.6,0,1,ft),Y=_e(g-O/10,0,.6,0,180,ft);z.style.transform=`scale(${X}) rotate(${Y}deg)`}),a.forEach((z,O)=>{const X=_e(m-O/10,0,.6,0,1,ft),Y=_e(m-O/10,0,.6,0,180,ft);z.style.transform=`scale(${X}) rotate(${Y}deg)`})},destroy(){}}}const $l=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new G(-.0112049,-.0141946,0),boxMax:new G(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new G(-.0180006,-.00963629,0),boxMax:new G(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Oy=`
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
`,zy=`
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
`,By=`
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
`,ky=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Hy(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function Vy(){const i=Hy(),e="/zyrax-studio/",t=await Promise.all($l.map(m=>Hn(`${e}assets/models/lines/${m.fileName}.buf`))),n=new Go,r=new Pn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let s;try{s=new tl({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(m){return console.error("Lines WebGL unavailable",m),{update(){},resize(){},destroy(){}}}s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.autoClear=!0;const o=[],a=new G,l=new G,c=new eo,u=new nt;for(let m=0;m<$l.length;m++){const p=$l[m],E=t[m],y=document.querySelector(p.sectionSelector);if(!y||!E)continue;const S=new Di,P=new Di;S.add(P),n.add(S);const D=new Ct({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:p.aoThreshold},u_color0:{value:new $e(p.color0)},u_color1:{value:new $e(p.color1)},u_radius:{value:.008}},vertexShader:Oy,fragmentShader:zy,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),A=new kt(E,D);A.frustumCulled=!1,A.renderOrder=200,P.add(A);const C=new Ct({uniforms:{u_color0:{value:new $e(p.color0)},u_color1:{value:new $e(p.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:By,fragmentShader:ky,side:En,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),w=new kt(new Si(2,2),C);w.frustumCulled=!1,w.renderOrder=200,P.add(w);const M=E.attributes.position.array,U=E.attributes.position.count,z=new Float32Array(U);for(let O=0;O<U;O++)z[O]=M[O*3+2];o.push({data:p,sectionEl:y,container:S,inner:P,mesh:A,mat:D,circle:w,circleMat:C,lineRatioArray:z,cpAttr:E.attributes.CP,cdAttr:E.attributes.Cd,count:U,offsetY:0,framePos:new G,frameQuat:new Dn,frameScale:new G(1,1,1)})}let f=1,d=1;const _=()=>{f=window.innerWidth||1,d=window.innerHeight||1;const m=Math.sqrt(f*f+d*d),p=d/m;u.set(f/d*p,p),r.fov=60,r.aspect=f/d,r.position.set(f/2,-d/2,d/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-d/2,0),r.updateProjectionMatrix(),s.setSize(f,d,!1)};_(),window.addEventListener("resize",_);const v=m=>{var st;const{data:p,sectionEl:E,container:y,inner:S,mat:P,circle:D,circleMat:A,lineRatioArray:C,cpAttr:w,cdAttr:M,count:U}=m,O=dn(E).top+m.offsetY,X=d,Y=p.scrollToRatioFactors;let q=Xn(-(O-Y[0]*X)/(Y[1]*X));q=Q1(q);const W=f<=812,B=.008*_e(f,540,1920,2,1)*(W?.72:1),ce=f/u.x,J=d/u.y;let he=p.margin.x,ye=p.margin.y;W&&p.id==="goal"&&(he=.42,ye=-.35),S.position.x=he*ce,S.position.y=ye*J-O,S.scale.set(ce,J,1),m._showSmooth==null&&(m._showSmooth=q),m._showSmooth+=(q-m._showSmooth)*.18,P.uniforms.u_showRatio.value=m._showSmooth,P.uniforms.u_radius.value=B;const Be=(st=E.dataset)==null?void 0:st.goalPhase,j=p.id==="goal"&&(Be==="black-tunnel"||Be==="white");y.position.copy(m.framePos),y.quaternion.copy(m.frameQuat),y.scale.copy(m.frameScale),y.updateMatrixWorld(!0),c.min.copy(p.boxMin),c.max.copy(p.boxMax),c.applyMatrix4(S.matrixWorld),y.visible=!j&&c.max.y>-d&&c.min.y<0&&q>.001;let se=0,oe=0;for(let F=0;F<U;F++)q>=C[F]&&(se=F,F===U-1?oe=0:oe=(q-C[F])/(C[F+1]-C[F]||1));const ae=se,Me=Math.min(se+1,U-1);a.fromArray(w.array,se*3),l.fromArray(w.array,Me*3),a.lerp(l,oe);const Re=M.array;let Ce=Re[ae]*(1-oe)+Re[Me]*oe;Ce=.9+.1*Ce;const it=Xn((q-(p.aoThreshold-.02))/.04);D.position.copy(a),D.scale.set(B,B,1),A.uniforms.u_ao.value=Math.min(1,Ce+1-it);let Ve=C[ae]*(1-oe)+C[Me]*oe;Ve=1-Math.pow(1-_n(Ve,0,1),2),A.uniforms.u_mixRatio.value=Ve},g=()=>{for(const m of o)v(m);s.render(n,r)};return g(),{update:g,resize:_,setGoalOffset(m){const p=o.find(E=>E.data.id==="goal");p&&(p.offsetY=m||0)},setGoalFrame({scale:m=1,rotation:p=0,active:E=!1}={}){const y=o.find(M=>M.data.id==="goal");if(!y)return;if(!E){y.framePos.set(0,0,0),y.frameQuat.identity(),y.frameScale.set(1,1,1);return}const S=f*.5,P=-d*.5,D=new vt;D.makeTranslation(S,P,0);const A=new vt().makeRotationZ(-p),C=new vt().makeScale(m,m,1),w=new vt().makeTranslation(-S,-P,0);D.multiply(A).multiply(C).multiply(w),D.decompose(y.framePos,y.frameQuat,y.frameScale)},destroy(){window.removeEventListener("resize",_),s.dispose(),i.remove()}}}const Mf=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),mp=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};mp();window.addEventListener("resize",mp);const jr=new Up({duration:Mf?1.05:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0,syncTouch:!1,wheelMultiplier:Mf?.9:.82,touchMultiplier:1.1});window.lenis=jr;let mo=0,_o=0,Ro=!1,_p=0;window.addEventListener("wheel",()=>{_p=performance.now(),Ro=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Ro=!0},{passive:!0});const Gy="/zyrax-studio/assets/projects/",wf=document.getElementById("project-list");wf&&(wf.innerHTML=Rd.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${Gy}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const Wy=document.getElementById("hero-canvas"),Xy=document.getElementById("home-hero-visual-container"),pr=document.getElementById("home-hero"),Kl=document.getElementById("home-hero-title"),jl=document.getElementById("home-hero-visual-container"),Ef=document.getElementById("home-hero-scroll-container"),gp=document.getElementById("home-goal"),qy=document.getElementById("goal-tunnel-canvas"),Yy=document.getElementById("home-goal-tunnel-title"),Zy=document.getElementById("home-goal-tunnel-sticky"),$y=Ey(gp,Yy,Zy);let Vn=null;const Ky=Ty(),jy=Cy(),Jy=Fy();let is=null,Na=null,bf=performance.now();mu.ticker.add(i=>{var r;const e=performance.now(),t=Math.min(.05,(e-bf)/1e3);if(bf=e,Vn!=null&&Vn.getAutoScrollSpeed&&(mo=Vn.getAutoScrollSpeed()),e-_p>80&&Math.abs(mo)>.01&&(Ro=!1),_o+=Math.abs(mo)>0&&!Ro?t:-1,_o=Math.max(0,Math.min(1,_o)),!Ro&&_o>0&&Math.abs(mo)>.01){const s=window.innerHeight,o=mo*s*t*_o*.55,a=(jr.animatedScroll??jr.scroll??window.scrollY)+o;jr.scrollTo(a,{immediate:!0,force:!0})}jr.raf(i*1e3),Ky.update(t),jy.update(t),Na==null||Na.update(t),Jy.update(t),is==null||is.update(),(r=Vn==null?void 0:Vn.tickFrame)==null||r.call(Vn,t)});mu.ticker.lagSmoothing(0);jr.on("scroll",()=>{if($y.updateScroll(),Vn==null||Vn.updateScroll(),is==null||is.update(),!pr)return;const i=pr.getBoundingClientRect(),e=window.innerHeight,t=Math.max(0,Math.min(1,-i.top/Math.max(i.height,1))),n=Math.max(0,Math.min(1,(e-i.bottom)/e));Kl&&(Kl.style.transform=`translate3d(0, ${t*-12}vh, 0)`,Kl.style.opacity=String(Math.max(0,1-t*1.2))),jl&&(jl.style.transform=`translate3d(0, ${t*18}vh, 0) scale(${1-t*.08})`,jl.style.opacity=String(Math.max(0,1-Math.max(t,n)*.85))),Ef&&(Ef.style.opacity=String(Math.max(0,1-t*2)))});Vy().then(i=>{is=i}).catch(i=>console.error("Scroll lines failed",i));wy(qy,gp).then(i=>{Vn=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{Z1(Wy,Xy).then(()=>pr==null?void 0:pr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),pr==null||pr.classList.add("is-in")})});Iy(Rd).then(i=>{Na=i}).catch(i=>console.error("Featured WebGL failed",i));function vp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,s)=>{const o=document.createElement("span");o.className=e,o.textContent=r,o.style.transitionDelay=`${s*35}ms`,i.appendChild(o),i.appendChild(document.createTextNode(" "))})}vp(document.getElementById("home-hero-title"));vp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const Qy=document.querySelectorAll(".home-hero-scroll-container-cross");Qy.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const xp=document.querySelector("[data-menu]");var Tf;(Tf=document.querySelector("[data-menu-open]"))==null||Tf.addEventListener("click",()=>{xp.hidden=!1,document.body.style.overflow="hidden"});document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{xp.hidden=!0,document.body.style.overflow=""})});var Af;(Af=document.querySelector("[data-reel]"))==null||Af.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var Rf;(Rf=document.querySelector("[data-sound]"))==null||Rf.addEventListener("click",i=>{i.currentTarget.classList.toggle("is-on")});var Cf;(Cf=document.querySelector("#end-bottom"))==null||Cf.addEventListener("click",i=>{i.preventDefault(),jr.scrollTo("#footer-section")});
