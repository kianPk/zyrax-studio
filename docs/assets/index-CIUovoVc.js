var kp=Object.defineProperty;var Hp=(i,e,t)=>e in i?kp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>Hp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var th="1.3.27";function Zf(i,e,t){return Math.max(i,Math.min(e,t))}function Vp(i,e,t){return(1-t)*i+t*e}function Gp(i,e,t,n){return Vp(i,e,1-Math.exp(-t*n))}function Wp(i,e){return(i%e+e)%e}var Xp=class{constructor(){Ge(this,"isRunning",!1);Ge(this,"value",0);Ge(this,"from",0);Ge(this,"to",0);Ge(this,"currentTime",0);Ge(this,"lerp");Ge(this,"duration");Ge(this,"easing");Ge(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Zf(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Gp(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function qp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Yp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ge(this,"width",0);Ge(this,"height",0);Ge(this,"scrollHeight",0);Ge(this,"scrollWidth",0);Ge(this,"debouncedResize");Ge(this,"wrapperResizeObserver");Ge(this,"contentResizeObserver");Ge(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ge(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ge(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=qp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Kf=class{constructor(){Ge(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const $p=100/6,hr={passive:!1};function nh(i,e){return i===1?$p:i===2?e:1}var Zp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ge(this,"touchStart",{x:0,y:0});Ge(this,"lastDelta",{x:0,y:0});Ge(this,"window",{width:0,height:0});Ge(this,"emitter",new Kf);Ge(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ge(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ge(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ge(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=nh(n,this.window.width),o=nh(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ge(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hr),this.element.addEventListener("touchstart",this.onTouchStart,hr),this.element.addEventListener("touchmove",this.onTouchMove,hr),this.element.addEventListener("touchend",this.onTouchEnd,hr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hr),this.element.removeEventListener("touchstart",this.onTouchStart,hr),this.element.removeEventListener("touchmove",this.onTouchMove,hr),this.element.removeEventListener("touchend",this.onTouchEnd,hr)}};const ih=i=>Math.min(1,1.001-2**(-10*i));var Kp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:b=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:P=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:R=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){Ge(this,"_isScrolling",!1);Ge(this,"_isStopped",!1);Ge(this,"_isLocked",!1);Ge(this,"_preventNextNativeScrollEvent",!1);Ge(this,"_resetVelocityTimeout",null);Ge(this,"_rafId",null);Ge(this,"_isDraggingSelection",!1);Ge(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ge(this,"isTouching");Ge(this,"isIos");Ge(this,"time",0);Ge(this,"userData",{});Ge(this,"lastVelocity",0);Ge(this,"velocity",0);Ge(this,"direction",0);Ge(this,"options");Ge(this,"targetScroll");Ge(this,"animatedScroll");Ge(this,"animate",new Xp);Ge(this,"emitter",new Kf);Ge(this,"dimensions");Ge(this,"virtualScroll");Ge(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ge(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ge(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ge(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ge(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ge(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,b,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ge(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ge(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=th,window.lenis||(window.lenis={}),window.lenis.version=th,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=ih:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:b,autoRaf:S,anchors:x,autoToggle:C,allowNestedScroll:P,naiveDimensions:R,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Yp(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Zp(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?x.left:x.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),b=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=Zf(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=ih:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const P=window.getComputedStyle(i);if(r.computedStyle=P,o=["auto","overlay","scroll"].includes(P.overflowX),s=["auto","overlay","scroll"].includes(P.overflowY),c=["auto"].includes(P.overscrollBehaviorX),u=["auto"].includes(P.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,b,S,x,C;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,b=e,S=o,x=a,C=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,b=t,S=s,x=l,C=u;else return!1;return!C&&(_>=p||_<=0)?!0:(b>0?_<p:_>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Wp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function $i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function jf(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},du,fn,Bt,ui=1e8,Pt=1/ui,dc=Math.PI*2,jp=dc/4,Jp=0,Jf=Math.sqrt,Qp=Math.cos,em=Math.sin,an=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},pu=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},mu=function(){return typeof window<"u"},sa=function(e){return qt(e)||an(e)},Qf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,tm=/random\([^)]+\)/g,nm=/,\s*/g,rh=/(?:-?\.?\d|\.)+/gi,ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,im=/[^,'"\[\]\s]+/gi,rm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Pi,pc,_u,ti={},$a={},nd,id=function(e){return($a=$o(e,ti))&&Wn},gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ks=function(e,t){return!t&&console.warn(e)},rd=function(e,t){return e&&(ti[e]=t)&&$a&&($a[e]=t)||ti},Hs=function(){return 0},om={suppressEvents:!0,isStart:!0,kill:!1},Oa={suppressEvents:!0,kill:!1},sm={suppressEvents:!0},vu={},Ar=[],mc={},od,$n={},Sl={},oh=30,za=[],xu="",yu=function(e){var t=e[0],n,r;if(Ni(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=za.length;r--&&!za[r].targetTest(t););n=za[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ad(e[r],n)))||e.splice(r,1);return e},so=function(e){return e._gsap||yu(hi(e))[0]._gsap},sd=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():pu(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Bo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},am=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Za=function(){var e=Ar.length,t=Ar.slice(0),n,r;for(mc={},Ar.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Su=function(e){return!!(e._initted||e._startAt||e.add)},ad=function(e,t,n,r){Ar.length&&!fn&&Za(),e.render(t,n,!!(fn&&t<0&&Su(e))),Ar.length&&!fn&&Za()},ld=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(im).length<2?t:an(e)?e.trim():e},cd=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},$o=function(e,t){for(var n in t)e[n]=t[n];return e},sh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ka=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ps=function(e){var t=e.parent||Gt,n=e.keyframes?lm(Tn(e.keyframes)):ni;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ud=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},al=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},um=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_c=function(e,t,n,r){return e._startAt&&(fn?e._startAt.revert(Oa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hm=function i(e){return!e||e._ts&&i(e.parent)},ah=function(e){return e._repeat?Zo(e._tTime,e=e.duration()+e._rDelay)*e:0},Zo=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ll=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},cl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ll(e),n._dirty||ao(n,e)),e},hd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ja(e.rawTime(),t),(!t._dur||Ks(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Li=function(e,t,n,r){return t.parent&&Pr(t),t._start=Vt((nr(n)?n:n||e!==Gt?si(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ud(e,t,"_first","_last",e._sort?"_start":0),gc(t)||(e._recent=t),r||hd(e,t),e._ts<0&&cl(e,e._tTime),e},fd=function(e,t){return(ti.ScrollTrigger||gu("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},dd=function(e,t,n,r,o){if(wu(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&od!==Zn.frame)return Ar.push(e),e._lazy=[o,r],1},fm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},gc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dm=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&fm(e)&&!(!e._initted&&gc(e))||(e._ts<0||e._dp._ts<0)&&!gc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ks(0,e._tDur,t),u=Zo(l,a),e._yoyo&&u&1&&(s=1-s),u!==Zo(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||fn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&dd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&_c(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Pr(e,1),!n&&!fn&&(jn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ko=function(e,t,n,r){var o=e._repeat,s=Vt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Vt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&cl(e,e._tTime=e._tDur*a),e.parent&&ll(e),n||ao(e.parent,e),e},lh=function(e){return e instanceof On?ao(e):Ko(e,e._dur)},mm={_start:0,endTime:Hs,totalDuration:Hs},si=function i(e,t,n){var r=e.labels,o=e._recent||mm,s=e.duration()>=ui?o.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Ds=function(e,t,n){var r=nr(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;s.immediateRender=Bn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Kt(t[0],s,t[o+1])},Ur=function(e,t){return e||e===0?t(e):t},Ks=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!an(e)||!(t=rm.exec(e))?"":t[1]},_m=function(e,t,n){return Ur(n,function(r){return Ks(e,t,r)})},vc=[].slice,pd=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Pi},gm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return an(r)&&!t||pd(r,1)?(o=n).push.apply(o,hi(r)):n.push(r)})||n},hi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):an(e)&&!n&&(pc||!jo())?vc.call((t||_u).querySelectorAll(e),0):Tn(e)?gm(e,n):pd(e)?vc.call(e,0):e?[e]:[]},xc=function(e){return e=hi(e)[0]||ks("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?ks("Invalid scope")||_u.createElement("div"):e)}},md=function(e){return e.sort(function(){return .5-Math.random()})},_d=function(e){if(qt(e))return e;var t=Ni(e)?e:{each:e},n=lo(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return an(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,b,S,x,C,P,A,R,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,ui])[1],!w){for(A=-ui;A<(A=v[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=s[g]=[],p=l?Math.min(w,g)*u-.5:r%w,b=w===ui?0:l?g*d/w-.5:r/w|0,A=0,R=ui,P=0;P<g;P++)S=P%w-p,x=b-(P/w|0),_[P]=C=c?Math.abs(c==="y"?x:S):Jf(S*S+x*x),C>A&&(A=C),C<R&&(R=C);r==="random"&&md(_),_.max=A-R,_.min=R,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=wn(t.amount||t.each)||0,n=n&&g<0?Pm(n):n}return g=(_[f]-_.min)/_.max||0,Vt(_.b+(n?n(g):g)*_.v)+_.u}},yc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Vt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(nr(n)?0:wn(n))}},gd=function(e,t){var n=Tn(e),r,o;return!n&&Ni(e)&&(r=n=e.radius||ui,e.values?(e=hi(e.values),(o=!nr(e[0]))&&(r*=r)):e=yc(e.increment)),Ur(t,n?qt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=ui,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||nr(s)?u:u+wn(s)}:yc(e))},vd=function(e,t,n,r){return Ur(Tn(e)?!t:n===!0?!!(n=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},vm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},xm=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},ym=function(e,t,n){return yd(e,t,0,1,n)},xd=function(e,t,n){return Ur(n,function(r){return e[~~t(r)]})},Sm=function i(e,t,n){var r=t-e;return Tn(e)?xd(e,i(0,e.length),t):Ur(n,function(o){return(r+(o-e)%r)%r+e})},Mm=function i(e,t,n){var r=t-e,o=r*2;return Tn(e)?xd(e,i(0,e.length-1),t):Ur(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},Vs=function(e){return e.replace(tm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(nm);return vd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},yd=function(e,t,n,r,o){var s=t-e,a=r-n;return Ur(o,function(l){return n+((l-e)/s*a||0)})},wm=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=an(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=$o(Tn(e)?[]:{},e));if(!u){for(l in t)Mu.call(a,e,l,"get",t[l]);o=function(v){return Eu(v,a)||(s?e.p:e)}}}return Ur(n,o)},ch=function(e,t,n){var r=e.labels,o=ui,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},jn=function(e,t,n){var r=e.vars,o=r[t],s=Bt,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ar.length&&Za(),a&&(Bt=a),u=l?o.apply(c,l):o.call(c),Bt=s,u},Es=function(e){return Pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&jn(e,"onInterrupt"),e},Fo,Sd=[],Md=function(e){if(e)if(e=!e.name&&e.default||e,mu()||e.headless){var t=e.name,n=qt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Hs,render:Eu,add:Mu,kill:km,modifier:Bm,rawVars:0},s={targetTest:0,get:0,getSetter:Tu,aliases:{},register:0};if(jo(),e!==r){if($n[t])return;ni(r,ni(Ka(e,o),s)),$o(r.prototype,$o(o,Ka(e,s))),$n[r.prop=t]=r,e.targetTest&&(za.push(r),vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rd(t,r),e.register&&e.register(Wn,r,Hn)}else Sd.push(e)},Rt=255,As={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Ml=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},wd=function(e,t,n){var r=e?nr(e)?[e>>16,e>>8&Rt,e&Rt]:0:As.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])r=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(rh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=Ml(l+1/3,o,s),r[1]=Ml(l,o,s),r[2]=Ml(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(ed),n&&r.length<4&&(r[3]=1),r}else r=e.match(rh)||As.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Rt,s=r[1]/Rt,a=r[2]/Rt,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},bd=function(e){var t=[],n=[],r=-1;return e.split(Rr).forEach(function(o){var s=o.match(Uo)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},uh=function(e,t,n){var r="",o=(e+r).match(Rr),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=wd(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=bd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Rr,"1").split(Uo),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Rr),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Rr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),bm=/hsl[a]?\(/,Td=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=bm.test(t),e[1]=uh(e[1],n),e[0]=uh(e[0],n,bd(e[1])),!0},Gs,Zn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,b=_===!0,S,x,C,P;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,S=C-s,(S>0||b)&&(P=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,s+=S+(S>=o?4:o-S),x=1),b||(l=c(g)),x)for(m=0;m<a.length;m++)a[m](C,f,P,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){nd&&(!pc&&mu()&&(Pi=pc=window,_u=Pi.document||{},ti.gsap=Wn,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(Wn.version),id($a||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),Sd.forEach(Md)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},Gs=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Gs=0,c=Hs},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,b){var S=p?function(x,C,P,A){_(x,C,P,A),d.remove(S)}:_;return d.remove(_),a[b?"unshift":"push"](S),jo(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),jo=function(){return!Gs&&Zn.wake()},vt={},Tm=/^[\d.\-M][\d.\-,\s]/,Em=/["']/g,Am=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Em,"").trim():+c,r=l.substr(a+1).trim();return t},Rm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Cm=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Am(t[1])]:Rm(e).split(",").map(ld)):vt._CE&&Tm.test(e)?vt._CE("",e):n},Pm=function(e){return function(t){return 1-e(1-t)}},lo=function(e,t){return e&&(qt(e)?e:vt[e]||Cm(e))||t},fo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return kn(e,function(a){vt[a]=ti[a]=o,vt[s=a.toLowerCase()]=n;for(var l in o)vt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=o[l]}),o},Ed=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wl=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/dc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*em((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ed(a);return o=dc/o,l.config=function(c,u){return i(e,c,u)},l},bl=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Ed(n);return r.config=function(o){return i(e,o)},r};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;fo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;fo("Elastic",wl("in"),wl("out"),wl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};fo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);fo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});fo("Circ",function(i){return-(Jf(1-i*i)-1)});fo("Sine",function(i){return i===1?1:-Qp(i*jp)+1});fo("Back",bl("in"),bl("out"),bl());vt.SteppedEase=vt.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Pt;return function(a){return((r*Ks(0,s,a)|0)+o)*n}}};Bs.ease=vt["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return xu+=i+","+i+"Params,"});var Ad=function(e,t){this.id=Jp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sd,this.set=t?t.getSetter:Tu},Ws=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ko(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Gs||Zn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(jo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(cl(this,n),!o._dp||o.parent||hd(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ad(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ah(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ah(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?Zo(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Ks(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),ll(this),um(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Vt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Li(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sm);var r=fn;return fn=n,Su(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,lh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(si(this,n),Bn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Bn(r)),this._dur||(this._zTime=-Pt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Pt)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=qt(n)?n:cd,l=function(){var u=r.then;r.then=null,o&&o(),qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Es(this)},i})();ni(Ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var On=(function(i){jf(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Bn(n.sortChildren),Gt&&Li(n.parent||Gt,$i(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&fd($i(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Ds(0,arguments,this),this},t.from=function(r,o,s){return Ds(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Ds(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,Ps(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Kt(r,o,si(this,s),1),this},t.call=function(r,o,s){return Li(this,Kt.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Kt(r,s,si(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,Ps(s).immediateRender=Bn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,Ps(a).immediateRender=Bn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Vt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,b,S,x,C,P,A;if(this!==Gt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Vt(u%_),u===l?(g=this._repeat,f=c):(C=Vt(u/_),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=Zo(this._tTime,_),!a&&this._tTime&&C!==g&&this._tTime-C*_-this._dur<=0&&(C=g),P&&g&1&&(f=c-f,A=1),g!==C&&!this._lock){var R=P&&C&1,w=R===(P&&g&1);if(g<C&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Vt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=pm(this,Vt(a),Vt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!C&&(jn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=-Pt);break}}m=v}else{m=this._last;for(var M=r<0?r:f;m;){if(v=m._prev,(m._act||M<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(M-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(M-m._start)*m._ts,o,s||fn&&Su(m)),f!==this._time||!this._ts&&!p){b=0,v&&(u+=this._zTime=M?-Pt:Pt);break}}m=v}}if(b&&!o&&(this.pause(),b.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=x,ll(this),this.render(r,o,s);this._onUpdate&&!o&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Pr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(jn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(nr(o)||(o=si(this,o,r)),!(r instanceof Ws)){if(Tn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(an(r))return this.addLabel(r,o);if(qt(r))r=Kt.delayedCall(0,r);else return this}return this!==r?Li(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return an(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&al(this,r),r===this._recent&&(this._recent=this._last),ao(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(Zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=si(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=Kt.delayedCall(0,o||Hs,s);return a.data="isPause",this._hasPause=1,Li(this,a,si(this,r))},t.removePause=function(r){var o=this._first;for(r=si(this,r);o;)o._start===r&&o.data==="isPause"&&Pr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)br!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=hi(r),l=this._first,c=nr(o),u;l;)l instanceof Kt?am(l._targets,a)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=si(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=Kt.to(s,ni({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Pt,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&Ko(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,ni({startAt:{time:si(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ch(this,si(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ch(this,si(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Vt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return ao(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ao(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=ui,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Li(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Vt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Ko(s,s===Gt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Gt._ts&&(ad(Gt,ja(r,Gt)),od=Zn.frame),Zn.frame>=oh){oh+=Qn.autoSleep||120;var o=Gt._first;if((!o||!o._ts)&&Qn.autoSleep&&Zn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Zn.sleep()}}},e})(Ws);ni(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dm=function(e,t,n,r,o,s,a){var l=new Hn(this._pt,e,t,0,1,Id,null,o),c=0,u=0,d,f,m,v,g,_,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Vs(r)),s&&(b=[n,r],s(b,e,t),n=b[0],r=b[1]),f=n.match(yl)||[];d=yl.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?Bo(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=yl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(td.test(r)||p)&&(l.e=0),this._pt=l,l},Mu=function(e,t,n,r,o,s,a,l,c,u){qt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:qt(d)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=qt(d)?c?Nm:Dd:bu,v;if(an(r)&&(~r.indexOf("random(")&&(r=Vs(r)),r.charAt(1)==="="&&(v=Bo(f,r)+(wn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||Sc)return!isNaN(f*r)&&r!==""?(v=new Hn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?zm:Ld,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&gu(t,r),Dm.call(this,e,t,f,r,m,l||Qn.stringFilter,c))},Lm=function(e,t,n,r,o){if(qt(e)&&(e=Ls(e,o,t,n,r)),!Ni(e)||e.style&&e.nodeType||Tn(e)||Qf(e))return an(e)?Ls(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=Ls(e[a],o,t,n,r);return s},Rd=function(e,t,n,r,o,s){var a,l,c,u;if($n[e]&&(a=new $n[e]).init(o,a.rawVars?t[e]:Lm(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new Hn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==Fo))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},br,Sc,wu=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!du,x=e.timeline,C=r.easeReverse||d,P,A,R,w,M,L,N,O,H,V,k,Y,B;if(x&&(!f||!o)&&(o="none"),e._ease=lo(o,Bs.ease),e._rEase=C&&(lo(C)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(O=_[0]?so(_[0]).harness:0,Y=O&&r[O.prop],P=Ka(r,vu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Oa:om),g._lazy=0),s){if(Pr(e._startAt=Kt.set(_,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!m)&&e._startAt.revert(Oa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),R=ni({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Bn(l),immediateRender:a,stagger:0,parent:p},P),Y&&(R[O.prop]=Y),Pr(e._startAt=Kt.set(_,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(Oa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Bn(l)||l&&!v,A=0;A<_.length;A++){if(M=_[A],N=M._gsap||yu(_)[A]._gsap,e._ptLookup[A]=V={},mc[N.id]&&Ar.length&&Za(),k=b===_?A:b.indexOf(M),O&&(H=new O).init(M,Y||P,e,k,b)!==!1&&(e._pt=w=new Hn(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ce){V[ce]=w}),H.priority&&(L=1)),!O||Y)for(R in P)$n[R]&&(H=Rd(R,P,e,k,M,b))?H.priority&&(L=1):V[R]=w=Mu.call(e,M,R,"get",P[R],k,b,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),S&&e._pt&&(br=e,Gt.killTweensOf(M,V,e.globalTime(t)),B=!e.parent,br=0),e._pt&&l&&(mc[N.id]=1)}L&&Ud(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&x.render(ui,!0,!0)},Im=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sc=1,e.vars[t]="+=0",wu(e,a),Sc=0,l?ks(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=Yt(n)+wn(d.e)),d.b&&(d.b=u.s+wn(d.b))},Um=function(e,t){var n=e[0]?so(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=$o({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},Fm=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},Ls=function(e,t,n,r,o){return qt(e)?e.call(t,n,r,o):an(e)&&~e.indexOf("random(")?Vs(e):e},Cd=xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Pd={};kn(Cd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Pd[i]=1});var Kt=(function(i){jf(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:Ps(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||Gt,b=(Tn(n)||Qf(n)?nr(n[0]):"length"in r)?[n]:hi(n),S,x,C,P,A,R,w,M;if(a._targets=b.length?yu(b):ks("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||sa(c)||sa(u)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(S=a.timeline=new On({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),S.kill(),S.parent=S._dp=$i(a),S._start=0,f||sa(c)||sa(u)){if(P=b.length,w=f&&_d(f),Ni(f))for(A in f)~Cd.indexOf(A)&&(M||(M={}),M[A]=f[A]);for(x=0;x<P;x++)C=Ka(r,Pd),C.stagger=0,L&&(C.easeReverse=L),M&&$o(C,M),R=b[x],C.duration=+Ls(c,$i(a),x,R,b),C.delay=(+Ls(u,$i(a),x,R,b)||0)-a._delay,!f&&P===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(R,C,w?w(x,R,b):0),S._ease=vt.none;S.duration()?c=u=0:a.timeline=0}else if(v){Ps(ni(S.vars.defaults,{ease:"none"})),S._ease=lo(v.ease||r.ease||"none");var N=0,O,H,V;if(Tn(v))v.forEach(function(k){return S.to(b,k,">")}),S.duration();else{C={};for(A in v)A==="ease"||A==="easeEach"||Fm(A,v[A],C,v.easeEach);for(A in C)for(O=C[A].sort(function(k,Y){return k.t-Y.t}),N=0,x=0;x<O.length;x++)H=O[x],V={ease:H.e,duration:(H.t-(x?O[x-1].t:0))/100*c},V[A]=H.v,S.to(b,V,N),N+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!du&&(br=$i(a),Gt.killTweensOf(b),br=0),Li(p,$i(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Vt(p._time)&&Bn(d)&&hm($i(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),_&&fd($i(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Pt&&!u?l:r<Pt?0:r,f,m,v,g,_,p,b,S;if(!c)dm(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Vt(d%g),d===l?(v=this._repeat,f=c):(_=Vt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=Zo(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Vt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(dd(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var x=f<a;if(x!==this._inv){var C=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(x?-1:1)/C:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(jn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&_c(this,r,o,s),jn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_c(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){Gs||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wu(this,c),u=this._ease(c/this._dur),Im(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(cl(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,br&&br.vars.overwrite!==!0)._first||Es(this),this.parent&&s!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?hi(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&cm(a,l))return o==="all"&&(this._pt=0),Es(this);for(d=this._op=this._op||[],o!=="all"&&(an(o)&&(g={},kn(o,function(b){return g[b]=1}),o=g),o=Um(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&al(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Es(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Ds(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Ds(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Gt.killTweensOf(r,o,s)},e})(Ws);ni(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(i){Kt[i]=function(){var e=new On,t=vc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var bu=function(e,t,n){return e[t]=n},Dd=function(e,t,n){return e[t](n)},Nm=function(e,t,n,r){return e[t](r.fp,n)},Om=function(e,t,n){return e.setAttribute(t,n)},Tu=function(e,t){return qt(e[t])?Dd:pu(e[t])&&e.setAttribute?Om:bu},Ld=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Id=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Eu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Bm=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},km=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?al(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Hm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ud=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},Hn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||Ld,this.d=l||this,this.set=c||bu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=Hm,this.m=n,this.mt=o,this.tween=r},i})();kn(xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return vu[i]=1});ti.TweenMax=ti.TweenLite=Kt;ti.TimelineLite=ti.TimelineMax=On;Gt=new On({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Td;var co=[],Ba={},Vm=[],hh=0,Gm=0,Tl=function(e){return(Ba[e]||Vm).map(function(t){return t()})},Mc=function(){var e=Date.now(),t=[];e-hh>2&&(Tl("matchMediaInit"),co.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=Pi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Tl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),hh=e,Tl("matchMedia"))},Fd=(function(){function i(t,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Gm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){qt(n)&&(o=r,r=n,n=qt);var s=this,a=function(){var c=Bt,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=xc(o)),Bt=s,d=r.apply(s,arguments),qt(d)&&s._r.push(d),Bt=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===qt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Bt;Bt=null,n(this),Bt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Kt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=co.length;s--;)co[s].id===this.id&&co.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),Wm=(function(){function i(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Ni(n)||(n={matches:n});var s=new Fd(0,o||this.scope),a=s.conditions={},l,c,u;Bt&&!s.selector&&(s.selector=Bt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Pi.matchMedia(n[c]),l&&(co.indexOf(s)<0&&co.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Mc):l.addEventListener("change",Mc)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Md(r)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){an(e)&&(e=hi(e)[0]);var o=so(e||{}).get,s=n?cd:ld;return n==="native"&&(n=""),e&&(t?s(($n[t]&&$n[t].get||o)(e,t,n,r)):function(a,l,c){return s(($n[a]&&$n[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var r=e.map(function(u){return Wn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=$n[t],a=so(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;Fo._pt=0,d.init(e,n?u+n:u,Fo,0,[e]),d.render(1,d),Fo._pt&&Eu(1,Fo)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=Wn.to(e,ni((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lo(e.ease,Bs.ease)),sh(Bs,e||{})},config:function(e){return sh(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!$n[a]&&!ti[a]&&ks(t+" effect requires "+a+" plugin.")}),Sl[t]=function(a,l,c){return n(hi(a),ni(l||{},o),c)},s&&(On.prototype[t]=function(a,l,c){return this.add(Sl[t](a,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=lo(t)},parseEase:function(e,t){return arguments.length?lo(e,t):vt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,o;for(n.smoothChildTiming=Bn(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,r=Gt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof Kt&&r.vars.onComplete===r._targets[0]))&&Li(n,r,r._start-r._delay),r=o;return Li(Gt,n,0),n},context:function(e,t){return e?new Fd(e,t):Bt},matchMedia:function(e){return new Wm(e)},matchMediaRefresh:function(){return co.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Mc()},addEventListener:function(e,t){var n=Ba[e]||(Ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ba[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Sm,wrapYoyo:Mm,distribute:_d,random:vd,snap:gd,normalize:ym,getUnit:wn,clamp:_m,splitColor:wd,toArray:hi,selector:xc,mapRange:yd,pipe:vm,unitize:xm,interpolate:wm,shuffle:md},install:id,effects:Sl,ticker:Zn,updateRoot:On.updateRoot,plugins:$n,globalTimeline:Gt,core:{PropTween:Hn,globals:rd,Tween:Kt,Timeline:On,Animation:Ws,getCache:so,_removeLinkedListItem:al,reverting:function(){return fn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return du=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ja[i]=Kt[i]});Zn.add(On.updateRoot);Fo=Ja.to({},{duration:0});var Xm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qm=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=Xm(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},El=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(an(o)&&(l={},kn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}qm(a,o)}}}},Wn=Ja.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},El("roundProps",yc),El("modifiers"),El("snap",gd))||Ja;Kt.version=On.version=Wn.version="3.15.0";nd=1;mu()&&jo();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fh,Tr,ko,Au,ro,dh,Ru,Ym=function(){return typeof window<"u"},ir={},Jr=180/Math.PI,Ho=Math.PI/180,go=Math.atan2,ph=1e8,Cu=/([A-Z])/g,$m=/(left|right|width|margin|padding|x)/i,Zm=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Km=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Od=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},e_=function(e,t,n){return e.style[t]=n},t_=function(e,t,n){return e.style.setProperty(t,n)},n_=function(e,t,n){return e._gsap[t]=n},i_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},r_=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},o_=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Wt="transform",Vn=Wt+"Origin",s_=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in ir&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ki(r,a)}):this.tfm[e]=s.x?s[e]:Ki(r,e),e===Vn&&(this.tfm.zOrigin=s.zOrigin);else return Ii.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Wt}(o||t)&&this.props.push(e,t,o[e])},zd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},a_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Cu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Ru(),(!o||!o.isStart)&&!n[Wt]&&(zd(n),r.zOrigin&&n[Vn]&&(n[Vn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Bd=function(e,t){var n={target:e,props:[],revert:a_,save:s_};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},kd,bc=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},Jn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Cu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Jo(t)||t,1)||""},mh="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,t,n){var r=t||ro,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(mh[s]+e in o););return s<0?null:(s===3?"ms":s>=0?mh[s]:"")+e},Tc=function(){Ym()&&window.document&&(fh=window,Tr=fh.document,ko=Tr.documentElement,ro=bc("div")||{style:{}},bc("div"),Wt=Jo(Wt),Vn=Wt+"Origin",ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kd=!!Jo("perspective"),Ru=Wn.core.reverting,Au=1)},_h=function(e){var t=e.ownerSVGElement,n=bc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),ko.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),ko.removeChild(n),o},gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hd=function(e){var t,n;try{t=e.getBBox()}catch{t=_h(e),n=1}return t&&(t.width||t.height)||n||(t=_h(e)),t&&!t.width&&!t.x&&!t.y?{x:+gh(e,["x","cx","x1"])||0,y:+gh(e,["y","cy","y1"])||0,width:0,height:0}:t},Vd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hd(e))},Dr=function(e,t){if(t){var n=e.style,r;t in ir&&t!==Vn&&(t=Wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Cu,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,r,o,s){var a=new Hn(e._pt,t,n,0,1,s?Od:Nd);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},vh={deg:1,rad:1,turn:1},l_={grid:1,flex:1},Lr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=ro.style,l=$m.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||vh[r]||vh[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&Vd(e),(m||s==="%")&&(ir[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],Yt(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Tr||!g.appendChild)&&(g=Tr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===Zn.time&&!_.uncache)return Yt(o/_.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,v=e[u],b?e.style[t]=b:Dr(e,t)}else(m||s==="%")&&!l_[Jn(g,"display")]&&(a.position=Jn(e,"position")),g===e&&(a.position="static"),g.appendChild(ro),v=ro[u],g.removeChild(ro),a.position="absolute";return l&&m&&(_=so(g),_.time=Zn.time,_.width=g[u]),Yt(f?v*o/d:v&&o?d/v*o:0)},Ki=function(e,t,n,r){var o;return Au||Tc(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(o=qs(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:el(Jn(e,Vn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=Qa[t]&&Qa[t](e,t,n)||Jn(e,t)||sd(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Lr(e,t,o,n)+n:o},c_=function(e,t,n,r){if(!n||n==="none"){var o=Jo(t,e,1),s=o&&Jn(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=Jn(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,Id),l=0,c=0,u,d,f,m,v,g,_,p,b,S,x,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Jn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Jn(e,t)||r,g?e.style[t]=g:Dr(e,t)),u=[n,r],Td(u),n=u[0],r=u[1],f=n.match(Uo)||[],C=r.match(Uo)||[],C.length){for(;d=Uo.exec(r);)_=d[0],b=r.substring(l,d.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,x=g.substr((m+"").length),_.charAt(1)==="="&&(_=Bo(m,_)+x),p=parseFloat(_),S=_.substr((p+"").length),l=Uo.lastIndex-S.length,S||(S=S||Qn.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(m=Lr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Od:Nd;return td.test(r)&&(a.e=0),this._pt=a,a},xh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},u_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=xh[n]||n,t[1]=xh[r]||r,t.join(" ")},h_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],ir[a]&&(l=1,a=a==="transformOrigin"?Vn:Wt),Dr(n,a);l&&(Dr(n,Wt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qs(n,1),s.uncache=1,zd(r)))}},Qa={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new Hn(e._pt,t,n,0,0,h_);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},Xs=[1,0,0,1,0,0],Gd={},Wd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yh=function(e){var t=Jn(e,Wt);return Wd(t)?Xs:t.substr(7).match(ed).map(Yt)},Pu=function(e,t){var n=e._gsap||so(e),r=e.style,o=yh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Xs:o):(o===Xs&&!e.offsetParent&&e!==ko&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ko.appendChild(e)),o=yh(e),l?r.display=l:Dr(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ko.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ec=function(e,t,n,r,o,s){var a=e._gsap,l=o||Pu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],b=l[5],S=t.split(" "),x=parseFloat(S[0])||0,C=parseFloat(S[1])||0,P,A,R,w;n?l!==Xs&&(A=m*_-v*g)&&(R=x*(_/A)+C*(-g/A)+(g*b-_*p)/A,w=x*(-v/A)+C*(m/A)-(m*b-v*p)/A,x=R,C=w):(P=Hd(e),x=P.x+(~S[0].indexOf("%")?x/100*P.width:x),C=P.y+(~(S[1]||S[0]).indexOf("%")?C/100*P.height:C)),r||r!==!1&&a.smooth?(p=x-c,b=C-u,a.xOffset=d+(p*m+b*g)-p,a.yOffset=f+(p*v+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",s&&(Er(s,a,"xOrigin",c,x),Er(s,a,"yOrigin",u,C),Er(s,a,"xOffset",d,a.xOffset),Er(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+C)},qs=function(e,t){var n=e._gsap||new Ad(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Jn(e,Vn)||"0",u,d,f,m,v,g,_,p,b,S,x,C,P,A,R,w,M,L,N,O,H,V,k,Y,B,ce,K,de,ge,Oe,Z,re;return u=d=f=g=_=p=b=S=x=0,m=v=1,n.svg=!!(e.getCTM&&Vd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),r.scale=r.rotate=r.translate="none"),A=Pu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Ec(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,P=n.yOrigin||0,A!==Xs&&(L=A[0],N=A[1],O=A[2],H=A[3],u=V=A[4],d=k=A[5],A.length===6?(m=Math.sqrt(L*L+N*N),v=Math.sqrt(H*H+O*O),g=L||N?go(N,L)*Jr:0,b=O||H?go(O,H)*Jr+g:0,b&&(v*=Math.abs(Math.cos(b*Ho))),n.svg&&(u-=C-(C*L+P*O),d-=P-(C*N+P*H))):(re=A[6],Oe=A[7],K=A[8],de=A[9],ge=A[10],Z=A[11],u=A[12],d=A[13],f=A[14],R=go(re,ge),_=R*Jr,R&&(w=Math.cos(-R),M=Math.sin(-R),Y=V*w+K*M,B=k*w+de*M,ce=re*w+ge*M,K=V*-M+K*w,de=k*-M+de*w,ge=re*-M+ge*w,Z=Oe*-M+Z*w,V=Y,k=B,re=ce),R=go(-O,ge),p=R*Jr,R&&(w=Math.cos(-R),M=Math.sin(-R),Y=L*w-K*M,B=N*w-de*M,ce=O*w-ge*M,Z=H*M+Z*w,L=Y,N=B,O=ce),R=go(N,L),g=R*Jr,R&&(w=Math.cos(R),M=Math.sin(R),Y=L*w+N*M,B=V*w+k*M,N=N*w-L*M,k=k*w-V*M,L=Y,V=B),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=Yt(Math.sqrt(L*L+N*N+O*O)),v=Yt(Math.sqrt(k*k+re*re)),R=go(V,k),b=Math.abs(R)>2e-4?R*Jr:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wd(Jn(e,Wt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(m*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Yt(m),n.scaleY=Yt(v),n.rotation=Yt(g)+a,n.rotationX=Yt(_)+a,n.rotationY=Yt(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Vn]=el(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?d_:kd?Xd:f_,n.uncache=0,n},el=function(e){return(e=e.split(" "))[0]+" "+e[1]},Al=function(e,t,n){var r=wn(t);return Yt(parseFloat(t)+parseFloat(Lr(e,"x",n+"px",r)))+r},f_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xd(e,t)},Vr="0deg",_s="0px",Gr=") ",Xd=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,x="",C=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Vr||u!==Vr)){var P=parseFloat(u)*Ho,A=Math.sin(P),R=Math.cos(P),w;P=parseFloat(d)*Ho,w=Math.cos(P),s=Al(b,s,A*w*-S),a=Al(b,a,-Math.sin(P)*-S),l=Al(b,l,R*w*-S+S)}_!==_s&&(x+="perspective("+_+Gr),(r||o)&&(x+="translate("+r+"%, "+o+"%) "),(C||s!==_s||a!==_s||l!==_s)&&(x+=l!==_s||C?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Gr),c!==Vr&&(x+="rotate("+c+Gr),u!==Vr&&(x+="rotateY("+u+Gr),d!==Vr&&(x+="rotateX("+d+Gr),(f!==Vr||m!==Vr)&&(x+="skew("+f+", "+m+Gr),(v!==1||g!==1)&&(x+="scale("+v+", "+g+Gr),b.style[Wt]=x||"translate(0, 0)"},d_=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(s),x=parseFloat(a),C,P,A,R,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ho,c*=Ho,C=Math.cos(l)*d,P=Math.sin(l)*d,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Ho,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,R*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),C*=w,P*=w)),C=Yt(C),P=Yt(P),A=Yt(A),R=Yt(R)):(C=d,R=f,P=A=0),(S&&!~(s+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Lr(m,"x",s,"px"),x=Lr(m,"y",a,"px")),(v||g||_||p)&&(S=Yt(S+v-(v*C+g*A)+_),x=Yt(x+g-(v*P+g*R)+p)),(r||o)&&(w=m.getBBox(),S=Yt(S+r/100*w.width),x=Yt(x+o/100*w.height)),w="matrix("+C+","+P+","+A+","+R+","+S+","+x+")",m.setAttribute("transform",w),b&&(m.style[Wt]=w)},p_=function(e,t,n,r,o){var s=360,a=an(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Jr:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*ph)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*ph)%s-~~(c/s)*s)),e._pt=f=new Hn(e._pt,t,n,r,c,Km),f.e=u,f.u="deg",e._props.push(n),f},Sh=function(e,t){for(var n in t)e[n]=t[n];return e},m_=function(e,t,n){var r=Sh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Wt]=t,a=qs(n,1),Dr(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],s[Wt]=t,a=qs(n,1),s[Wt]=c);for(l in ir)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=wn(c),v=wn(u),d=m!==v?Lr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Hn(e._pt,a,l,d,f-d,wc),e._pt.u=v||0,e._props.push(l));Sh(a,r)};kn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});Qa[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return Ki(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var qd={name:"css",register:Tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,b,S,x,C,P,A,R,w;Au||Tc(),this.styles=this.styles||Bd(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!($n[g]&&Rd(g,t,n,r,e,o)))){if(m=typeof u,v=Qa[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Vs(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(_=wn(c),p=wn(u),p?_!==p&&(c=Lr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),R.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],an(c)&&~c.indexOf("random(")&&(c=Vs(c)),wn(c+"")||c==="auto"||(c+=Qn.units[g]||wn(Ki(e,g))||""),(c+"").charAt(1)==="="&&(c=Ki(e,g))):c=Ki(e,g),f=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in Ii&&(g==="autoAlpha"&&(f===1&&Ki(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),Er(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ir,S){if(this.styles.save(g),w=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Jn(e,"perspective"),M?e.style.perspective=M:Dr(e,"perspective")}d=parseFloat(u)}if(x||(C=e._gsap,C.renderTransform&&!t.parseTransform||qs(e,t.parseTransform),P=t.smoothOrigin!==!1&&C.smooth,x=this._pt=new Hn(this._pt,a,Wt,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new Hn(this._pt,C,"scaleY",C.scaleY,(b?Bo(C.scaleY,b+d):d)-C.scaleY||0,wc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Vn,0,a[Vn]),u=u_(u),C.svg?Ec(e,u,0,P,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Er(this,C,"zOrigin",C.zOrigin,p),Er(this,a,g,el(c),el(u)));continue}else if(g==="svgOrigin"){Ec(e,u,1,P,0,this);continue}else if(g in Gd){p_(this,C,g,f,b?Bo(f,b+u):u);continue}else if(g==="smoothOrigin"){Er(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){m_(this,u,e);continue}}else g in a||(g=Jo(g)||g);if(S||(d||d===0)&&(f||f===0)&&!Zm.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=wn(u)||(g in Qn.units?Qn.units[g]:_),_!==p&&(f=Lr(e,g,c,p)),this._pt=new Hn(this._pt,S?C:a,g,f,(b?Bo(f,b+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Qm:wc),this._pt.u=p||0,S&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=Jm):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jm);else if(g in a)c_.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,r,o);else if(g!=="parseTransform"){gu(g,u);continue}S||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),s.push(g)}}A&&Ud(this)},render:function(e,t){if(t.tween._time||!Ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:Ii,getSetter:function(e,t,n){var r=Ii[t];return r&&r.indexOf(",")<0&&(t=r),t in ir&&t!==Vn&&(e._gsap.x||Ki(e,"x"))?n&&dh===n?t==="scale"?i_:n_:(dh=n||{})&&(t==="scale"?r_:o_):e.style&&!pu(e.style[t])?e_:~t.indexOf("-")?t_:Tu(e,t)},core:{_removeProperty:Dr,_getMatrix:Pu}};Wn.utils.checkPrefix=Jo;Wn.core.getStyleSaver=Bd;(function(i,e,t,n){var r=kn(i+","+e+","+t,function(o){ir[o]=1});kn(e,function(o){Qn.units[o]="deg",Gd[o]=1}),Ii[r[13]]=i+","+e,kn(n,function(o){var s=o.split(":");Ii[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Qn.units[i]="px"});Wn.registerPlugin(qd);var Du=Wn.registerPlugin(qd)||Wn;Du.core.Tween;const Yd=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="170",__=0,Mh=1,g_=2,$d=1,v_=2,Yi=3,Ir=0,Gn=1,bn=2,wi=0,Cr=1,wh=2,bh=3,Th=4,Ys=5,Dn=100,x_=101,y_=102,S_=103,M_=104,ka=200,ai=201,w_=202,b_=203,Vo=204,Go=205,T_=206,E_=207,A_=208,R_=209,C_=210,P_=211,D_=212,L_=213,I_=214,Ac=0,Rc=1,Cc=2,Qo=3,Pc=4,Dc=5,Lc=6,Ic=7,Zd=0,U_=1,F_=2,Fi=0,N_=1,O_=2,z_=3,B_=4,k_=5,H_=6,V_=7,Kd=300,es=301,ts=302,Uc=303,Fc=304,ul=306,Wo=1e3,Ln=1001,tl=1002,tn=1003,G_=1004,aa=1005,_t=1006,Rl=1007,Ji=1008,Oi=1009,jd=1010,Jd=1011,ns=1012,Iu=1013,ho=1014,zn=1015,Ui=1016,Uu=1017,Fu=1018,is=1020,Qd=35902,ep=1021,tp=1022,hn=1023,np=1024,ip=1025,Xo=1026,rs=1027,Nu=1028,Ou=1029,rp=1030,zu=1031,Bu=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Nc=35840,Oc=35841,zc=35842,Bc=35843,kc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,$c=37813,Zc=37814,Kc=37815,jc=37816,Jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,Xa=36492,iu=36494,ru=36495,op=36283,ou=36284,su=36285,au=36286,W_=3200,X_=3201,q_=0,Y_=1,en="",Cn="srgb",zi="srgb-linear",hl="linear",Et="srgb",vo=7680,Eh=519,$_=512,Z_=513,K_=514,sp=515,j_=516,J_=517,Q_=518,e0=519,Ah=35044,fr=35048,Rh="300 es",Qi=2e3,nl=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const Is=Math.PI/180,$s=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function ku(i,e){return(i%e+e)%e}function t0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function Us(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return Us(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(ku(i,e*2)-e)}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l0(i,e){return i+Math.random()*(e-i)}function c0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(Ch=i);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(i){return i*Is}function f0(i){return i*$s}function d0(i){return(i&i-1)===0&&i!==0}function p0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function m0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Io(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:Is,RAD2DEG:$s,generateUUID:as,clamp:Mn,euclideanModulo:ku,mapLinear:t0,inverseLerp:n0,lerp:Us,damp:i0,pingpong:r0,smoothstep:o0,smootherstep:s0,randInt:a0,randFloat:l0,randFloatSpread:c0,seededRandom:u0,degToRad:h0,radToDeg:f0,isPowerOfTwo:d0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:_0,normalize:En,denormalize:Io};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,r,o,s,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],b=r[1],S=r[4],x=r[7],C=r[2],P=r[5],A=r[8];return o[0]=s*g+a*b+l*C,o[3]=s*_+a*S+l*P,o[6]=s*p+a*x+l*A,o[1]=c*g+u*b+d*C,o[4]=c*_+u*S+d*P,o[7]=c*p+u*x+d*A,o[2]=f*g+m*b+v*C,o[5]=f*_+m*S+v*P,o[8]=f*p+m*x+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new ut;function ap(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function g0(){const i=Zs("canvas");return i.style.display="block",i}const Ph={};function Rs(i){i in Ph||(Ph[i]=!0,console.warn(i))}function v0(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function x0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=qo(i.r),i.g=qo(i.g),i.b=qo(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===en?hl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dh=[.64,.33,.3,.6,.15,.06],Lh=[.2126,.7152,.0722],Ih=[.3127,.329],Uh=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[zi]:{primaries:Dh,whitePoint:Ih,transfer:hl,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Lh,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:Dh,whitePoint:Ih,transfer:Et,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Lh,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let xo;class S0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xo===void 0&&(xo=Zs("canvas")),xo.width=e.width,xo.height=e.height;const n=xo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=tr(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Pl(r[s].image)):o.push(Pl(r[s]))}else o=Pl(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?S0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class dn extends ss{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Ln,r=Ln,o=_t,s=Ji,a=hn,l=Oi,c=dn.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=as(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Kd;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(m+1)/2,C=(p+1)/2,P=(u+f)/4,A=(d+g)/4,R=(v+_)/4;return S>x&&S>C?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=P/n,o=A/n):x>C?x<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),n=P/r,o=R/r):C<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),n=A/o,r=R/o),this.set(n,r,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends b0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cp extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),P=Math.atan2(C,p*b);_=Math.sin(_*P)/C,a=Math.sin(a*P)/C}const x=a*b;if(l=l*_+f*x,c=c*_+m*x,u=u*_+v*x,d=d*_+g*x,_===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new q,Nh=new In;class ls{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,mi):mi.fromBufferAttribute(o,s),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),ca.subVectors(this.max,gs),yo.subVectors(e.a,gs),So.subVectors(e.b,gs),Mo.subVectors(e.c,gs),dr.subVectors(So,yo),pr.subVectors(Mo,So),Wr.subVectors(yo,Mo);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Wr.z,Wr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Wr.z,0,-Wr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Wr.y,Wr.x,0];return!Ll(t,yo,So,Mo,ca)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,yo,So,Mo,ca))?!1:(ua.crossVectors(dr,pr),t=[ua.x,ua.y,ua.z],Ll(t,yo,So,Mo,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new q,new q,new q,new q,new q,new q,new q,new q],mi=new q,la=new ls,yo=new q,So=new q,Mo=new q,dr=new q,pr=new q,Wr=new q,gs=new q,ca=new q,ua=new q,Xr=new q;function Ll(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Xr.fromArray(i,o);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const E0=new ls,vs=new q,Il=new q;class Hu{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):E0.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Il)),this.expandByPoint(vs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new q,Ul=new q,ha=new q,mr=new q,Fl=new q,fa=new q,Nl=new q;class A0{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ul.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Ul);const o=e.distanceTo(t)*.5,s=-this.direction.dot(ha),a=mr.dot(this.direction),l=-mr.dot(ha),c=mr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ul).addScaledVector(ha,f),m}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),r=Hi.dot(Hi)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,r,o){Fl.subVectors(t,e),fa.subVectors(n,e),Nl.crossVectors(Fl,fa);let s=this.direction.dot(Nl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mr.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(mr,fa));if(l<0)return null;const c=a*this.direction.dot(Fl.cross(mr));if(c<0||l+c>s)return null;const u=-a*mr.dot(Nl);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/wo.setFromMatrixColumn(e,0).length(),o=1/wo.setFromMatrixColumn(e,1).length(),s=1/wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,n){const r=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),_r.crossVectors(n,qn),_r.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),_r.crossVectors(n,qn)),_r.normalize(),da.crossVectors(qn,_r),r[0]=_r.x,r[4]=da.x,r[8]=qn.x,r[1]=_r.y,r[5]=da.y,r[9]=qn.y,r[2]=_r.z,r[6]=da.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],b=n[3],S=n[7],x=n[11],C=n[15],P=r[0],A=r[4],R=r[8],w=r[12],M=r[1],L=r[5],N=r[9],O=r[13],H=r[2],V=r[6],k=r[10],Y=r[14],B=r[3],ce=r[7],K=r[11],de=r[15];return o[0]=s*P+a*M+l*H+c*B,o[4]=s*A+a*L+l*V+c*ce,o[8]=s*R+a*N+l*k+c*K,o[12]=s*w+a*O+l*Y+c*de,o[1]=u*P+d*M+f*H+m*B,o[5]=u*A+d*L+f*V+m*ce,o[9]=u*R+d*N+f*k+m*K,o[13]=u*w+d*O+f*Y+m*de,o[2]=v*P+g*M+_*H+p*B,o[6]=v*A+g*L+_*V+p*ce,o[10]=v*R+g*N+_*k+p*K,o[14]=v*w+g*O+_*Y+p*de,o[3]=b*P+S*M+x*H+C*B,o[7]=b*A+S*L+x*V+C*ce,o[11]=b*R+S*N+x*k+C*K,o[15]=b*w+S*O+x*Y+C*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],b=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,x=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,C=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,P=t*b+n*S+r*x+o*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=b*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=x*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=C*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,b=l*c,S=l*u,x=l*d,C=n.x,P=n.y,A=n.z;return r[0]=(1-(g+p))*C,r[1]=(m+x)*C,r[2]=(v-S)*C,r[3]=0,r[4]=(m-x)*P,r[5]=(1-(f+p))*P,r[6]=(_+b)*P,r[7]=0,r[8]=(v+S)*A,r[9]=(_-b)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=wo.set(r[0],r[1],r[2]).length();const s=wo.set(r[4],r[5],r[6]).length(),a=wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_i.copy(this);const c=1/o,u=1/s,d=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,t.setFromRotationMatrix(_i),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Qi){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===Qi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===nl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Qi){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===Qi)v=(s+o)*d,g=-2*d;else if(a===nl)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wo=new q,_i=new xt,R0=new q(0,0,0),C0=new q(1,1,1),_r=new q,da=new q,qn=new q,Oh=new xt,zh=new In;class ii{constructor(e=0,t=0,n=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const Bh=new q,bo=new In,Vi=new xt,pa=new q,xs=new q,D0=new q,L0=new In,kh=new q(1,0,0),Hh=new q(0,1,0),Vh=new q(0,0,1),Gh={type:"added"},I0={type:"removed"},To={type:"childadded",child:null},Ol={type:"childremoved",child:null};class ei extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new q,t=new ii,n=new In,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ut}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(xs,pa,this.up):Vi.lookAt(pa,xs,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),bo.setFromRotationMatrix(Vi),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),To.child=e,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ei.DEFAULT_UP=new q(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new q,Gi=new q,zl=new q,Wi=new q,Eo=new q,Ao=new q,Wh=new q,Bl=new q,kl=new q,Hl=new q,Vl=new Ut,Gl=new Ut,Wl=new Ut;class Si{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gi.subVectors(e,t),r.cross(gi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){gi.subVectors(r,t),Gi.subVectors(n,t),zl.subVectors(e,t);const s=gi.dot(gi),a=gi.dot(Gi),l=gi.dot(zl),c=Gi.dot(Gi),u=Gi.dot(zl),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Wi.x),l.addScaledVector(s,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Vl,o.x),s.addScaledVector(Gl,o.y),s.addScaledVector(Wl,o.z),s}static isFrontFacing(e,t,n,r){return gi.subVectors(n,t),Gi.subVectors(e,t),gi.cross(Gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Eo.subVectors(r,n),Ao.subVectors(o,n),Bl.subVectors(e,n);const l=Eo.dot(Bl),c=Ao.dot(Bl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,r);const u=Eo.dot(kl),d=Ao.dot(kl);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Eo,s);Hl.subVectors(e,o);const m=Eo.dot(Hl),v=Ao.dot(Hl);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ao,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return Wh.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(Wh,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Eo,s).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ku(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Xl(s,o,e+1/3),this.g=Xl(s,o,e),this.b=Xl(s,o,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return yt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Mn(xn.r*255,0,255))*65536+Math.round(Mn(xn.g*255,0,255))*256+Math.round(Mn(xn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,r=xn.g,o=xn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Cn){yt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,r=xn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(ma);const n=Us(gr.h,ma.h,t),r=Us(gr.s,ma.s,t),o=Us(gr.l,ma.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new et;et.NAMES=hp;let U0=0;class fl extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=as(),this.name="",this.blending=Cr,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vu extends fl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ji=F0();function F0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function N0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Mn(i,-65504,65504),ji.floatView[0]=i;const e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function O0(i){const e=i>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(i&1023)]+ji.exponentTable[e],ji.floatView[0]}const Xh={toHalfFloat:N0,fromHalfFloat:O0},$t=new q,_a=new it;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Io(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),e}}class fp extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dp extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class uo extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let z0=0;const oi=new xt,ql=new ei,Ro=new q,Yn=new ls,ys=new ls,sn=new q;class or extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?dp:fp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ut().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new uo(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Yn.min,ys.min),Yn.expandByPoint(sn),sn.addVectors(Yn.max,ys.max),Yn.expandByPoint(sn)):(Yn.expandByPoint(ys.min),Yn.expandByPoint(ys.max))}Yn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)sn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),sn.add(Ro)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new q,l[R]=new q;const c=new q,u=new q,d=new q,f=new it,m=new it,v=new it,g=new q,_=new q;function p(R,w,M){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(o,R),m.fromBufferAttribute(o,w),v.fromBufferAttribute(o,M),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(L),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(L),a[R].add(g),a[w].add(g),a[M].add(g),l[R].add(_),l[w].add(_),l[M].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,w=b.length;R<w;++R){const M=b[R],L=M.start,N=M.count;for(let O=L,H=L+N;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new q,x=new q,C=new q,P=new q;function A(R){C.fromBufferAttribute(r,R),P.copy(C);const w=a[R];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(P,w);const L=x.dot(l[R])<0?-1:1;s.setXYZW(R,S.x,S.y,S.z,L)}for(let R=0,w=b.length;R<w;++R){const M=b[R],L=M.start,N=M.count;for(let O=L,H=L+N;O<H;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new xt,qr=new A0,ga=new Hu,Yh=new q,va=new q,xa=new q,ya=new q,Yl=new q,Sa=new q,$h=new q,Ma=new q;class kt extends ei{constructor(e=new or,t=new Vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Sa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Yl.fromBufferAttribute(d,e),s?Sa.addScaledVector(Yl,u):Sa.addScaledVector(Yl.sub(t),u))}t.add(Sa)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(o),qr.copy(e.ray).recast(e.near),!(ga.containsPoint(qr.origin)===!1&&(qr.intersectSphere(ga,Yh)===null||qr.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(qh.copy(o).invert(),qr.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let x=b,C=S;x<C;x+=3){const P=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);r=wa(this,p,e,n,c,u,d,P,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=a.getX(_),S=a.getX(_+1),x=a.getX(_+2);r=wa(this,s,e,n,c,u,d,b,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],b=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let x=b,C=S;x<C;x+=3){const P=x,A=x+1,R=x+2;r=wa(this,p,e,n,c,u,d,P,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const b=_,S=_+1,x=_+2;r=wa(this,s,e,n,c,u,d,b,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function B0(i,e,t,n,r,o,s,a){let l;if(e.side===Gn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Ir,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:i}}function wa(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,va),i.getVertexPosition(l,xa),i.getVertexPosition(c,ya);const u=B0(i,e,t,n,va,xa,ya,$h);if(u){const d=new q;Si.getBarycoord($h,va,xa,ya,d),r&&(u.uv=Si.getInterpolatedAttribute(r,a,l,c,d,new it)),o&&(u.uv1=Si.getInterpolatedAttribute(o,a,l,c,d,new it)),s&&(u.normal=Si.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Si.getNormal(va,xa,ya,f.normal),u.face=f,u.barycoord=d}return u}class js extends or{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new uo(c,3)),this.setAttribute("normal",new uo(u,3)),this.setAttribute("uv",new uo(d,2));function v(g,_,p,b,S,x,C,P,A,R,w){const M=x/A,L=C/R,N=x/2,O=C/2,H=P/2,V=A+1,k=R+1;let Y=0,B=0;const ce=new q;for(let K=0;K<k;K++){const de=K*L-O;for(let ge=0;ge<V;ge++){const Oe=ge*M-N;ce[g]=Oe*b,ce[_]=de*S,ce[p]=H,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[_]=0,ce[p]=P>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(ge/A),d.push(1-K/R),Y+=1}}for(let K=0;K<R;K++)for(let de=0;de<A;de++){const ge=f+de+V*K,Oe=f+de+V*(K+1),Z=f+(de+1)+V*(K+1),re=f+(de+1)+V*K;l.push(ge,Oe,re),l.push(Oe,Z,re),B+=6}a.addGroup(m,B,w),m+=B,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const r in n)e[r]=n[r]}return e}function k0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const H0={clone:os,merge:An};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends fl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mp extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new q,Zh=new it,Kh=new it;class Nn extends mp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Kh),t.subVectors(Kh,Zh)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Co=-90,Po=1;class W0 extends ei{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Co,Po,e,t);r.layers=this.layers,this.add(r);const o=new Nn(Co,Po,e,t);o.layers=this.layers,this.add(o);const s=new Nn(Co,Po,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Co,Po,e,t);a.layers=this.layers,this.add(a);const l=new Nn(Co,Po,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Co,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class _p extends dn{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X0 extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _p(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),o=new Dt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:wi});o.uniforms.tEquirect.value=t;const s=new kt(r,o),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=_t),new W0(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const $l=new q,q0=new q,Y0=new ut;class Qr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$l.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Y0.getNormalMatrix(e),r=this.coplanarPoint($l).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Hu,ba=new q;class gp{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,o=new Qr,s=new Qr){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],b=r[13],S=r[14],x=r[15];if(n[0].setComponents(l-o,f-c,_-m,x-p).normalize(),n[1].setComponents(l+o,f+c,_+m,x+p).normalize(),n[2].setComponents(l+s,f+u,_+v,x+b).normalize(),n[3].setComponents(l-s,f-u,_-v,x-b).normalize(),n[4].setComponents(l-a,f-d,_-g,x-S).normalize(),t===Qi)n[5].setComponents(l+a,f+d,_+g,x+S).normalize();else if(t===nl)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vp(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function $0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class bi extends or{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const b=p*f-s;for(let S=0;S<c;S++){const x=S*d-o;v.push(x,-b,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,x=b+c*(p+1),C=b+1+c*(p+1),P=b+1+c*p;m.push(S,x,P),m.push(x,C,P)}this.setIndex(m),this.setAttribute("position",new uo(v,3)),this.setAttribute("normal",new uo(g,3)),this.setAttribute("uv",new uo(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
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
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,cg=`#ifdef USE_BUMPMAP
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
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
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,$g=`
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rv=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iv=`float getShadowMask() {
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
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,nx=`#define DISTANCE
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
}`,ix=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,px=`#define NORMAL
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
}`,mx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Z0,alphahash_pars_fragment:K0,alphamap_fragment:j0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:sg,bsdfs:ag,iridescence_fragment:lg,bumpmap_pars_fragment:cg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:dg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:_g,color_vertex:gg,common:vg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Sg,displacementmap_vertex:Mg,emissivemap_fragment:wg,emissivemap_pars_fragment:bg,colorspace_fragment:Tg,colorspace_pars_fragment:Eg,envmap_fragment:Ag,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Lg,fog_pars_vertex:Ig,fog_fragment:Ug,fog_pars_fragment:Fg,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Og,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Bg,lights_pars_begin:kg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:$g,lights_fragment_maps:Zg,lights_fragment_end:Kg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:ev,map_fragment:tv,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:rv,metalnessmap_fragment:ov,metalnessmap_pars_fragment:sv,morphinstance_vertex:av,morphcolor_vertex:lv,morphnormal_vertex:cv,morphtarget_pars_vertex:uv,morphtarget_vertex:hv,normal_fragment_begin:fv,normal_fragment_maps:dv,normal_pars_fragment:pv,normal_pars_vertex:mv,normal_vertex:_v,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:vv,clearcoat_normal_fragment_maps:xv,clearcoat_pars_fragment:yv,iridescence_pars_fragment:Sv,opaque_fragment:Mv,packing:wv,premultiplied_alpha_fragment:bv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:Av,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Iv,skinbase_vertex:Uv,skinning_pars_vertex:Fv,skinning_vertex:Nv,skinnormal_vertex:Ov,specularmap_fragment:zv,specularmap_pars_fragment:Bv,tonemapping_fragment:kv,tonemapping_pars_fragment:Hv,transmission_fragment:Vv,transmission_pars_fragment:Gv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:qv,worldpos_vertex:Yv,background_vert:$v,background_frag:Zv,backgroundCube_vert:Kv,backgroundCube_frag:jv,cube_vert:Jv,cube_frag:Qv,depth_vert:ex,depth_frag:tx,distanceRGBA_vert:nx,distanceRGBA_frag:ix,equirect_vert:rx,equirect_frag:ox,linedashed_vert:sx,linedashed_frag:ax,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:ux,meshlambert_frag:hx,meshmatcap_vert:fx,meshmatcap_frag:dx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:_x,meshphong_frag:gx,meshphysical_vert:vx,meshphysical_frag:xx,meshtoon_vert:yx,meshtoon_frag:Sx,points_vert:Mx,points_frag:wx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:Ax},Fe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Di={basic:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:An([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:An([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:An([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:An([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:An([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:An([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:An([Fe.common,Fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:An([Fe.lights,Fe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Di.physical={uniforms:An([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ta={r:0,b:0,g:0},$r=new ii,Rx=new xt;function Cx(i,e,t,n,r,o,s){const a=new et(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const x=v(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const x=v(S);x&&(x.isCubeTexture||x.mapping===ul)?(u===void 0&&(u=new kt(new js(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:os(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(S.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler($r)),u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Et,(d!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new bi(2,2),new Dt({name:"BackgroundMaterial",uniforms:os(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Ta,pp(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:_}}function Px(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(M,L,N,O,H){let V=!1;const k=d(O,N,L);o!==k&&(o=k,c(o.object)),V=m(M,O,N,H),V&&v(M,O,N,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,x(M,L,N,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,N){const O=N.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let V=H[L.id];V===void 0&&(V={},H[L.id]=V);let k=V[O];return k===void 0&&(k=f(l()),V[O]=k),k}function f(M){const L=[],N=[],O=[];for(let H=0;H<t;H++)L[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,L,N,O){const H=o.attributes,V=L.attributes;let k=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){const K=H[B];let de=V[B];if(de===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;k++}return o.attributesNum!==k||o.index!==O}function v(M,L,N,O){const H={},V=L.attributes;let k=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){let K=V[B];K===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),H[B]=de,k++}o.attributes=H,o.attributesNum=k,o.index=O}function g(){const M=o.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function _(M){p(M,0)}function p(M,L){const N=o.newAttributes,O=o.enabledAttributes,H=o.attributeDivisors;N[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),H[M]!==L&&(i.vertexAttribDivisor(M,L),H[M]=L)}function b(){const M=o.newAttributes,L=o.enabledAttributes;for(let N=0,O=L.length;N<O;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function S(M,L,N,O,H,V,k){k===!0?i.vertexAttribIPointer(M,L,N,H,V):i.vertexAttribPointer(M,L,N,O,H,V)}function x(M,L,N,O){g();const H=O.attributes,V=N.getAttributes(),k=L.defaultAttributeValues;for(const Y in V){const B=V[Y];if(B.location>=0){let ce=H[Y];if(ce===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const K=ce.normalized,de=ce.itemSize,ge=e.get(ce);if(ge===void 0)continue;const Oe=ge.buffer,Z=ge.type,re=ge.bytesPerElement,le=Z===i.INT||Z===i.UNSIGNED_INT||ce.gpuType===Iu;if(ce.isInterleavedBufferAttribute){const se=ce.data,be=se.stride,Re=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)p(B.location+Te,se.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Te=0;Te<B.locationSize;Te++)_(B.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Te=0;Te<B.locationSize;Te++)S(B.location+Te,de/B.locationSize,Z,K,be*re,(Re+de/B.locationSize*Te)*re,le)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)p(B.location+se,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<B.locationSize;se++)_(B.location+se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let se=0;se<B.locationSize;se++)S(B.location+se,de/B.locationSize,Z,K,de*re,de/B.locationSize*se*re,le)}}else if(k!==void 0){const K=k[Y];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}b()}function C(){R();for(const M in n){const L=n[M];for(const N in L){const O=L[N];for(const H in O)u(O[H].object),delete O[H];delete L[N]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const O=L[N];for(const H in O)u(O[H].object),delete O[H];delete L[N]}delete n[M.id]}function A(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const O=N[M.id];for(const H in O)u(O[H].object),delete O[H];delete N[M.id]}}function R(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function Dx(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:P}}function Ix(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Qr,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const b=o?0:n,S=b*4;let x=p.clippingState||null;l.value=x,x=u(v,f,S,m);for(let C=0;C!==S;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,x=m;S!==g;++S,x+=4)s.copy(d[S]).applyMatrix4(b,a),s.normal.toArray(_,x),_[x+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Ux(i){let e=new WeakMap;function t(s,a){return a===Uc?s.mapping=es:a===Fc&&(s.mapping=ts),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Uc||a===Fc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new X0(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Gu extends mp{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const No=4,jh=[.125,.215,.35,.446,.526,.582],no=20,Zl=new Gu,Jh=new et;let Kl=null,jl=0,Jl=0,Ql=!1;const eo=(1+Math.sqrt(5))/2,Do=1/eo,Qh=[new q(-eo,Do,0),new q(eo,Do,0),new q(-Do,0,eo),new q(Do,0,eo),new q(0,eo,-Do),new q(0,eo,Do),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,jl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:Ui,format:hn,colorSpace:zi,depthBuffer:!1},r=tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(o)),this._blurMaterial=Nx(o,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,n,r){const a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Fi,u.autoClear=!1;const m=new Vu({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),v=new kt(new js,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Jh),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ea(r,b*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Zl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Qh[(r-o-1)%Qh.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new kt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*no-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):no;_>no&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${no}`);const p=[];let b=0;for(let A=0;A<no;++A){const R=A/g,w=Math.exp(-R*R/2);p.push(w),A===0?b+=w:A<_&&(b+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const x=this._sizeLods[r],C=3*x*(r>S-No?r-S+No:0),P=4*(this._cubeSize-x);Ea(t,C,P,3*x,2*x),l.setRenderTarget(t),l.render(d,Zl)}}function Fx(i){const e=[],t=[],n=[];let r=i;const o=i-No+1+jh.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-No?l=jh[s-i+No-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,b=new Float32Array(g*v*m),S=new Float32Array(_*v*m),x=new Float32Array(p*v*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,R=P>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];b.set(w,g*v*P),S.set(f,_*v*P);const M=[P,P,P,P,P,P];x.set(M,p*v*P)}const C=new or;C.setAttribute("position",new Xt(b,g)),C.setAttribute("uv",new Xt(S,_)),C.setAttribute("faceIndex",new Xt(x,p)),e.push(C),r>No&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tf(i,e,t){const n=new rr(i,e,t);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Nx(i,e,t){const n=new Float32Array(no),r=new q(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nf(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function rf(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wu(){return`

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
	`}function Ox(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===Fc,u=l===es||l===ts;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ef(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new ef(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function zx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bx(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let S=0,x=b.length;S<x;S+=3){const C=b[S+0],P=b[S+1],A=b[S+2];f.push(C,P,P,A,A,C)}}else if(v!==void 0){const b=v.array;g=v.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const C=S+0,P=S+1,A=S+2;f.push(C,P,P,A,A,C)}}else return;const _=new(ap(f)?dp:fp)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function kx(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b]*g[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Hx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Vx(i,e,t){const n=new WeakMap,r=new Ut;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let C=a.attributes.position.count*x,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*P*4*d),R=new cp(A,C,P,d);R.type=zn,R.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const N=p[L],O=b[L],H=S[L],V=C*P*4*L;for(let k=0;k<N.count;k++){const Y=k*w;v===!0&&(r.fromBufferAttribute(N,k),A[V+Y+0]=r.x,A[V+Y+1]=r.y,A[V+Y+2]=r.z,A[V+Y+3]=0),g===!0&&(r.fromBufferAttribute(O,k),A[V+Y+4]=r.x,A[V+Y+5]=r.y,A[V+Y+6]=r.z,A[V+Y+7]=0),_===!0&&(r.fromBufferAttribute(H,k),A[V+Y+8]=r.x,A[V+Y+9]=r.y,A[V+Y+10]=r.z,A[V+Y+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new it(C,P)},n.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Gx(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class Xu extends dn{constructor(e,t,n,r,o,s,a,l,c,u=Xo){if(u!==Xo&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xo&&(n=ho),n===void 0&&u===rs&&(n=is),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xp=new dn,of=new Xu(1,1),yp=new cp,Sp=new T0,Mp=new _p,sf=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=sf[r];if(o===void 0&&(o=new Float32Array(r),sf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dl(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function $x(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;uf.set(n),i.uniformMatrix2fv(this.addr,!1,uf),rn(t,n)}}function Zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),rn(t,n)}}function Kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),rn(t,n)}}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function t1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function o1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(of.compareFunction=sp,o=of):o=xp,t.setTexture2D(e||o,r)}function s1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Sp,r)}function a1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mp,r)}function l1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yp,r)}function c1(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return $x;case 35675:return Zx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}function u1(i,e){i.uniform1fv(this.addr,e)}function h1(i,e){const t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function f1(i,e){const t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function d1(i,e){const t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function p1(i,e){const t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function m1(i,e){const t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _1(i,e){const t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g1(i,e){i.uniform1iv(this.addr,e)}function v1(i,e){i.uniform2iv(this.addr,e)}function x1(i,e){i.uniform3iv(this.addr,e)}function y1(i,e){i.uniform4iv(this.addr,e)}function S1(i,e){i.uniform1uiv(this.addr,e)}function M1(i,e){i.uniform2uiv(this.addr,e)}function w1(i,e){i.uniform3uiv(this.addr,e)}function b1(i,e){i.uniform4uiv(this.addr,e)}function T1(i,e,t){const n=this.cache,r=e.length,o=dl(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||xp,o[s])}function E1(i,e,t){const n=this.cache,r=e.length,o=dl(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Sp,o[s])}function A1(i,e,t){const n=this.cache,r=e.length,o=dl(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Mp,o[s])}function R1(i,e,t){const n=this.cache,r=e.length,o=dl(t,r);nn(n,o)||(i.uniform1iv(this.addr,o),rn(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||yp,o[s])}function C1(i){switch(i){case 5126:return u1;case 35664:return h1;case 35665:return f1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return _1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return y1;case 5125:return S1;case 36294:return M1;case 36295:return w1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class D1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C1(t.type)}}class L1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function hf(i,e){i.seq.push(e),i.map[e.id]=e}function I1(i,e,t){const n=i.name,r=n.length;for(ec.lastIndex=0;;){const o=ec.exec(n),s=ec.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){hf(t,c===void 0?new P1(a,i,e):new D1(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new L1(a),hf(t,d)),t=d}}}class qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);I1(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function ff(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U1=37297;let F1=0;function N1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const df=new ut;function O1(i){yt._getMatrix(df,yt.workingColorSpace,i);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case hl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+N1(i.getShaderSource(e),s)}else return r}function z1(i,e){const t=O1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B1(i,e){let t;switch(e){case N_:t="Linear";break;case O_:t="Reinhard";break;case z_:t="Cineon";break;case B_:t="ACESFilmic";break;case H_:t="AgX";break;case V_:t="Neutral";break;case k_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new q;function k1(){yt.getLuminanceCoefficients(Aa);const i=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function V1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Cs(i){return i!==""}function mf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(W1,q1)}const X1=new Map;function q1(i,e){let t=ft[e];if(t===void 0){const n=X1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(i){return i.replace(Y1,$1)}function $1(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function vf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Z1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function Q1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ey(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=Z1(t),c=K1(t),u=j1(t),d=J1(t),f=Q1(t),m=H1(t),v=V1(o),g=r.createProgram();let _,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(_=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Fi?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),s=lu(s),s=mf(s,t),s=_f(s,t),a=lu(a),a=mf(a,t),a=_f(a,t),s=gf(s),a=gf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+_+s,x=b+p+a,C=ff(r,r.VERTEX_SHADER,S),P=ff(r,r.FRAGMENT_SHADER,x);r.attachShader(g,C),r.attachShader(g,P),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(P).trim();let V=!0,k=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,P);else{const Y=pf(r,C,"vertex"),B=pf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Y+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(k=!1);k&&(L.diagnostics={runnable:V,programLog:N,vertexShader:{log:O,prefix:_},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(P),R=new qa(r,g),w=G1(r,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,U1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=P,this}let ty=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iy(e),t.set(e,n)),n}}class iy{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}}function ry(i,e,t,n,r,o,s){const a=new up,l=new ny,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,M,L,N,O){const H=N.fog,V=O.geometry,k=w.isMeshStandardMaterial?N.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),B=Y&&Y.mapping===ul?Y.image.height:null,ce=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=K!==void 0?K.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let Oe,Z,re,le;if(ce){const gt=Di[ce];Oe=gt.vertexShader,Z=gt.fragmentShader}else Oe=w.vertexShader,Z=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const se=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,je=!!w.map,qe=!!w.matcap,ot=!!Y,z=!!w.aoMap,Ne=!!w.lightMap,Ye=!!w.bumpMap,Je=!!w.normalMap,Be=!!w.displacementMap,We=!!w.emissiveMap,ze=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,G=w.clearcoat>0,j=w.dispersion>0,ae=w.iridescence>0,ne=w.sheen>0,Ee=w.transmission>0,he=T&&!!w.anisotropyMap,ve=G&&!!w.clearcoatMap,Ve=G&&!!w.clearcoatNormalMap,pe=G&&!!w.clearcoatRoughnessMap,ue=ae&&!!w.iridescenceMap,xe=ae&&!!w.iridescenceThicknessMap,Le=ne&&!!w.sheenColorMap,Pe=ne&&!!w.sheenRoughnessMap,tt=!!w.specularMap,He=!!w.specularColorMap,$e=!!w.specularIntensityMap,W=Ee&&!!w.transmissionMap,ee=Ee&&!!w.thicknessMap,ie=!!w.gradientMap,fe=!!w.alphaMap,Ie=w.alphaTest>0,Ue=!!w.alphaHash,st=!!w.extensions;let Mt=Fi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Lt={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:Oe,fragmentShader:Z,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:qe,envMap:ot,envMapMode:ot&&Y.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:Ne,bumpMap:Ye,normalMap:Je,displacementMap:f&&Be,emissiveMap:We,normalMapObjectSpace:Je&&w.normalMapType===Y_,normalMapTangentSpace:Je&&w.normalMapType===q_,metalnessMap:ze,roughnessMap:U,anisotropy:T,anisotropyMap:he,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:Ve,clearcoatRoughnessMap:pe,dispersion:j,iridescence:ae,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:Pe,specularMap:tt,specularColorMap:He,specularIntensityMap:$e,transmission:Ee,transmissionMap:W,thicknessMap:ee,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:Ue,combine:w.combine,mapUv:je&&g(w.map.channel),aoMapUv:z&&g(w.aoMap.channel),lightMapUv:Ne&&g(w.lightMap.channel),bumpMapUv:Ye&&g(w.bumpMap.channel),normalMapUv:Je&&g(w.normalMap.channel),displacementMapUv:Be&&g(w.displacementMap.channel),emissiveMapUv:We&&g(w.emissiveMap.channel),metalnessMapUv:ze&&g(w.metalnessMap.channel),roughnessMapUv:U&&g(w.roughnessMap.channel),anisotropyMapUv:he&&g(w.anisotropyMap.channel),clearcoatMapUv:ve&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(w.sheenRoughnessMap.channel),specularMapUv:tt&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:$e&&g(w.specularIntensityMap.channel),transmissionMapUv:W&&g(w.transmissionMap.channel),thicknessMapUv:ee&&g(w.thicknessMap.channel),alphaMapUv:fe&&g(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Je||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(je||fe),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&yt.getTransfer(w.map.colorSpace)===Et,decodeVideoTextureEmissive:We&&w.emissiveMap.isVideoTexture===!0&&yt.getTransfer(w.emissiveMap.colorSpace)===Et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bn,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:st&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&w.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(b(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=v[w.type];let L;if(M){const N=Di[M];L=H0.clone(N.uniforms)}else L=w.uniforms;return L}function C(w,M){let L;for(let N=0,O=u.length;N<O;N++){const H=u[N];if(H.cacheKey===M){L=H,++L.usedTimes;break}}return L===void 0&&(L=new ey(i,M,w,o),u.push(L)),L}function P(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:R}}function oy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function sy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yf(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||sy),n.length>1&&n.sort(f||xf),r.length>1&&r.sort(f||xf)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function ay(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new yf,i.set(n,[s])):r>=o.length?(s=new yf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new et};break;case"SpotLight":t={position:new q,direction:new q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uy=0;function hy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fy(i){const e=new ly,t=cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new xt,s=new xt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,b=0,S=0,x=0,C=0,P=0,A=0;c.sort(hy);for(let w=0,M=c.length;w<M;w++){const L=c[w],N=L.color,O=L.intensity,H=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],O);A++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,B=t.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=k,m++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(O),k.distance=H,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[g]=k;const Y=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,Y.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[g]=Y.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=V,x++}g++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(N).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=k,_++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Y=L.shadow,B=t.get(L);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=L.shadow.matrix,S++}n.point[v]=k,v++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,R.directionalLength=m,R.pointLength=v,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=A,n.version=uy++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(S.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Sf(i){const e=new fy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function dy(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Sf(i),e.set(r,[a])):o>=s.length?(a=new Sf(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class py extends fl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends fl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`;function vy(i,e,t){let n=new gp;const r=new it,o=new it,s=new Ut,a=new py({depthPacking:X_}),l=new my,c={},u=t.maxTextureSize,d={[Ir]:Gn,[Gn]:Ir,[bn]:bn},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:_y,fragmentShader:gy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new or;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(P,A,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(wi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==Yi&&this.type===Yi,H=p===Yi&&this.type!==Yi;for(let V=0,k=P.length;V<k;V++){const Y=P[V],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ce=B.getFrameExtents();if(r.multiply(ce),o.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ce.x),r.x=o.x*ce.x,B.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ce.y),r.y=o.y*ce.y,B.mapSize.y=o.y)),B.map===null||O===!0||H===!0){const de=this.type!==Yi?{minFilter:tn,magFilter:tn}:{};B.map!==null&&B.map.dispose(),B.map=new rr(r.x,r.y,de),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const K=B.getViewportCount();for(let de=0;de<K;de++){const ge=B.getViewport(de);s.set(o.x*ge.x,o.y*ge.y,o.x*ge.z,o.y*ge.w),N.viewport(s),B.updateMatrices(Y,de),n=B.getFrustum(),x(A,R,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Yi&&b(B,R),B.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,M,L)};function b(P,A){const R=e.update(g);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new rr(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,g,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,R,m,g,null)}function S(P,A,R,w){let M=null;const L=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,O=A.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let V=H[O];V===void 0&&(V=M.clone(),H[O]=V,A.addEventListener("dispose",C)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Yi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=R}return M}function x(P,A,R,w,M){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Yi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const O=e.update(P),H=P.material;if(Array.isArray(H)){const V=O.groups;for(let k=0,Y=V.length;k<Y;k++){const B=V[k],ce=H[B.materialIndex];if(ce&&ce.visible){const K=S(P,ce,w,M);P.onBeforeShadow(i,P,A,R,O,K,B),i.renderBufferDirect(R,null,O,K,P,B),P.onAfterShadow(i,P,A,R,O,K,B)}}}else if(H.visible){const V=S(P,H,w,M);P.onBeforeShadow(i,P,A,R,O,V,null),i.renderBufferDirect(R,null,O,V,P,null),P.onAfterShadow(i,P,A,R,O,V,null)}}const N=P.children;for(let O=0,H=N.length;O<H;O++)x(N[O],A,R,w,M)}function C(P){P.target.removeEventListener("dispose",C);for(const R in c){const w=c[R],M=P.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const xy={[Ac]:Rc,[Cc]:Lc,[Pc]:Ic,[Qo]:Dc,[Rc]:Ac,[Lc]:Cc,[Ic]:Pc,[Dc]:Qo};function yy(i,e){function t(){let W=!1;const ee=new Ut;let ie=null;const fe=new Ut(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!W&&(i.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,Ue,st,Mt,Lt){Lt===!0&&(Ie*=Mt,Ue*=Mt,st*=Mt),ee.set(Ie,Ue,st,Mt),fe.equals(ee)===!1&&(i.clearColor(Ie,Ue,st,Mt),fe.copy(ee))},reset:function(){W=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let W=!1,ee=!1,ie=null,fe=null,Ie=null;return{setReversed:function(Ue){if(ee!==Ue){const st=e.get("EXT_clip_control");ee?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Ie;Ie=null,this.setClear(Mt)}ee=Ue},getReversed:function(){return ee},setTest:function(Ue){Ue?se(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ue){ie!==Ue&&!W&&(i.depthMask(Ue),ie=Ue)},setFunc:function(Ue){if(ee&&(Ue=xy[Ue]),fe!==Ue){switch(Ue){case Ac:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case Qo:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Lc:i.depthFunc(i.GREATER);break;case Ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){Ie!==Ue&&(ee&&(Ue=1-Ue),i.clearDepth(Ue),Ie=Ue)},reset:function(){W=!1,ie=null,fe=null,Ie=null,ee=!1}}}function r(){let W=!1,ee=null,ie=null,fe=null,Ie=null,Ue=null,st=null,Mt=null,Lt=null;return{setTest:function(gt){W||(gt?se(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(gt){ee!==gt&&!W&&(i.stencilMask(gt),ee=gt)},setFunc:function(gt,wt,Un){(ie!==gt||fe!==wt||Ie!==Un)&&(i.stencilFunc(gt,wt,Un),ie=gt,fe=wt,Ie=Un)},setOp:function(gt,wt,Un){(Ue!==gt||st!==wt||Mt!==Un)&&(i.stencilOp(gt,wt,Un),Ue=gt,st=wt,Mt=Un)},setLocked:function(gt){W=gt},setClear:function(gt){Lt!==gt&&(i.clearStencil(gt),Lt=gt)},reset:function(){W=!1,ee=null,ie=null,fe=null,Ie=null,Ue=null,st=null,Mt=null,Lt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,x=null,C=null,P=null,A=new et(0,0,0),R=0,w=!1,M=null,L=null,N=null,O=null,H=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=Y>=2);let ce=null,K={};const de=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Oe=new Ut().fromArray(de),Z=new Ut().fromArray(ge);function re(W,ee,ie,fe){const Ie=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(W,Ue),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<ie;st++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ee+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Ue}const le={};le[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(i.DEPTH_TEST),s.setFunc(Qo),Ye(!1),Je(Mh),se(i.CULL_FACE),z(wi);function se(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function be(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Re(W,ee){return d[W]!==ee?(i.bindFramebuffer(W,ee),d[W]=ee,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(W,ee){let ie=m,fe=!1;if(W){ie=f.get(ee),ie===void 0&&(ie=[],f.set(ee,ie));const Ie=W.textures;if(ie.length!==Ie.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,st=Ie.length;Ue<st;Ue++)ie[Ue]=i.COLOR_ATTACHMENT0+Ue;ie.length=Ie.length,fe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ie)}function je(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const qe={[Dn]:i.FUNC_ADD,[x_]:i.FUNC_SUBTRACT,[y_]:i.FUNC_REVERSE_SUBTRACT};qe[S_]=i.MIN,qe[M_]=i.MAX;const ot={[ka]:i.ZERO,[ai]:i.ONE,[w_]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[C_]:i.SRC_ALPHA_SATURATE,[A_]:i.DST_COLOR,[T_]:i.DST_ALPHA,[b_]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[R_]:i.ONE_MINUS_DST_COLOR,[E_]:i.ONE_MINUS_DST_ALPHA,[P_]:i.CONSTANT_COLOR,[D_]:i.ONE_MINUS_CONSTANT_COLOR,[L_]:i.CONSTANT_ALPHA,[I_]:i.ONE_MINUS_CONSTANT_ALPHA};function z(W,ee,ie,fe,Ie,Ue,st,Mt,Lt,gt){if(W===wi){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),W!==Ys){if(W!==_||gt!==w){if((p!==Dn||x!==Dn)&&(i.blendEquation(i.FUNC_ADD),p=Dn,x=Dn),gt)switch(W){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,S=null,C=null,P=null,A.set(0,0,0),R=0,_=W,w=gt}return}Ie=Ie||ee,Ue=Ue||ie,st=st||fe,(ee!==p||Ie!==x)&&(i.blendEquationSeparate(qe[ee],qe[Ie]),p=ee,x=Ie),(ie!==b||fe!==S||Ue!==C||st!==P)&&(i.blendFuncSeparate(ot[ie],ot[fe],ot[Ue],ot[st]),b=ie,S=fe,C=Ue,P=st),(Mt.equals(A)===!1||Lt!==R)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Lt),A.copy(Mt),R=Lt),_=W,w=!1}function Ne(W,ee){W.side===bn?be(i.CULL_FACE):se(i.CULL_FACE);let ie=W.side===Gn;ee&&(ie=!ie),Ye(ie),W.blending===Cr&&W.transparent===!1?z(wi):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),o.setMask(W.colorWrite);const fe=W.stencilWrite;a.setTest(fe),fe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(W){M!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),M=W)}function Je(W){W!==__?(se(i.CULL_FACE),W!==L&&(W===Mh?i.cullFace(i.BACK):W===g_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=W}function Be(W){W!==N&&(k&&i.lineWidth(W),N=W)}function We(W,ee,ie){W?(se(i.POLYGON_OFFSET_FILL),(O!==ee||H!==ie)&&(i.polygonOffset(ee,ie),O=ee,H=ie)):be(i.POLYGON_OFFSET_FILL)}function ze(W){W?se(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(W){W===void 0&&(W=i.TEXTURE0+V-1),ce!==W&&(i.activeTexture(W),ce=W)}function T(W,ee,ie){ie===void 0&&(ce===null?ie=i.TEXTURE0+V-1:ie=ce);let fe=K[ie];fe===void 0&&(fe={type:void 0,texture:void 0},K[ie]=fe),(fe.type!==W||fe.texture!==ee)&&(ce!==ie&&(i.activeTexture(ie),ce=ie),i.bindTexture(W,ee||le[W]),fe.type=W,fe.texture=ee)}function G(){const W=K[ce];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){Oe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function Pe(W){Z.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function tt(W,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let fe=ie.get(W);fe===void 0&&(fe=i.getUniformBlockIndex(ee,W.name),ie.set(W,fe))}function He(W,ee){const fe=c.get(ee).get(W);l.get(ee)!==fe&&(i.uniformBlockBinding(ee,fe,W.__bindingPointIndex),l.set(ee,fe))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,K={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,b=null,S=null,x=null,C=null,P=null,A=new et(0,0,0),R=0,w=!1,M=null,L=null,N=null,O=null,H=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:be,bindFramebuffer:Re,drawBuffers:Te,useProgram:je,setBlending:z,setMaterial:Ne,setFlipSided:Ye,setCullFace:Je,setLineWidth:Be,setPolygonOffset:We,setScissorTest:ze,activeTexture:U,bindTexture:T,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:ae,texImage2D:ue,texImage3D:xe,updateUBOMapping:tt,uniformBlockBinding:He,texStorage2D:Ve,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Le,viewport:Pe,reset:$e}}function Mf(i,e,t,n){const r=Sy(n);switch(t){case ep:return i*e;case np:return i*e;case ip:return i*e*2;case Nu:return i*e/r.components*r.byteLength;case Ou:return i*e/r.components*r.byteLength;case rp:return i*e*2/r.components*r.byteLength;case zu:return i*e*2/r.components*r.byteLength;case tp:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case Bu:return i*e*4/r.components*r.byteLength;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:case Bc:return Math.max(i,16)*Math.max(e,8)/4;case Nc:case zc:return Math.max(i,8)*Math.max(e,8)/2;case kc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case iu:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*16;case op:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*8;case su:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sy(i){switch(i){case Oi:case jd:return{byteLength:1,components:1};case ns:case Jd:case Ui:return{byteLength:2,components:1};case Uu:case Fu:return{byteLength:2,components:4};case ho:case Iu:case zn:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function My(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,T){return m?new OffscreenCanvas(U,T):Zs("canvas")}function g(U,T,G){let j=1;const ae=ze(U);if((ae.width>G||ae.height>G)&&(j=G/Math.max(ae.width,ae.height)),j<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ne=Math.floor(j*ae.width),Ee=Math.floor(j*ae.height);d===void 0&&(d=v(ne,Ee));const he=T?v(ne,Ee):d;return he.width=ne,he.height=Ee,he.getContext("2d").drawImage(U,0,0,ne,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ee+")."),he}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,T,G,j,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ne=T;if(T===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),T===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),T===i.RGBA){const Ee=ae?hl:yt.getTransfer(j);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=Ee===Et?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(U,T){let G;return U?T===null||T===ho||T===is?G=i.DEPTH24_STENCIL8:T===zn?G=i.DEPTH32F_STENCIL8:T===ns&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ho||T===is?G=i.DEPTH_COMPONENT24:T===zn?G=i.DEPTH_COMPONENT32F:T===ns&&(G=i.DEPTH_COMPONENT16),G}function C(U,T){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==tn&&U.minFilter!==_t?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function P(U){const T=U.target;T.removeEventListener("dispose",P),R(T),T.isVideoTexture&&u.delete(T)}function A(U){const T=U.target;T.removeEventListener("dispose",A),M(T)}function R(U){const T=n.get(U);if(T.__webglInit===void 0)return;const G=U.source,j=f.get(G);if(j){const ae=j[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(U),Object.keys(j).length===0&&f.delete(G)}n.remove(U)}function w(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const G=U.source,j=f.get(G);delete j[T.__cacheKey],s.memory.textures--}function M(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ae=0;ae<T.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=U.textures;for(let j=0,ae=G.length;j<ae;j++){const ne=n.get(G[j]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(G[j])}n.remove(U)}let L=0;function N(){L=0}function O(){const U=L;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),L+=1,U}function H(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function V(U,T){const G=n.get(U);if(U.isVideoTexture&&Be(U),U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){const j=U.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,U,T);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function k(U,T){const G=n.get(U);if(U.version>0&&G.__version!==U.version){Z(G,U,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function Y(U,T){const G=n.get(U);if(U.version>0&&G.__version!==U.version){Z(G,U,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function B(U,T){const G=n.get(U);if(U.version>0&&G.__version!==U.version){re(G,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const ce={[Wo]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},K={[tn]:i.NEAREST,[G_]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[_t]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},de={[$_]:i.NEVER,[e0]:i.ALWAYS,[Z_]:i.LESS,[sp]:i.LEQUAL,[K_]:i.EQUAL,[Q_]:i.GEQUAL,[j_]:i.GREATER,[J_]:i.NOTEQUAL};function ge(U,T){if(T.type===zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_t||T.magFilter===Rl||T.magFilter===aa||T.magFilter===Ji||T.minFilter===_t||T.minFilter===Rl||T.minFilter===aa||T.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ce[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ce[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ce[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,K[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==aa&&T.minFilter!==Ji||T.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(U,T){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",P));const j=T.source;let ae=f.get(j);ae===void 0&&(ae={},f.set(j,ae));const ne=H(T);if(ne!==U.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ae[ne].usedTimes++;const Ee=ae[U.__cacheKey];Ee!==void 0&&(ae[U.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(T)),U.__cacheKey=ne,U.__webglTexture=ae[ne].texture}return G}function Z(U,T,G){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const ae=Oe(U,T),ne=T.source;t.bindTexture(j,U.__webglTexture,i.TEXTURE0+G);const Ee=n.get(ne);if(ne.version!==Ee.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const he=yt.getPrimaries(yt.workingColorSpace),ve=T.colorSpace===en?null:yt.getPrimaries(T.colorSpace),Ve=T.colorSpace===en||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let pe=g(T.image,!1,r.maxTextureSize);pe=We(T,pe);const ue=o.convert(T.format,T.colorSpace),xe=o.convert(T.type);let Le=S(T.internalFormat,ue,xe,T.colorSpace,T.isVideoTexture);ge(j,T);let Pe;const tt=T.mipmaps,He=T.isVideoTexture!==!0,$e=Ee.__version===void 0||ae===!0,W=ne.dataReady,ee=C(T,pe);if(T.isDepthTexture)Le=x(T.format===rs,T.type),$e&&(He?t.texStorage2D(i.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Le,pe.width,pe.height,0,ue,xe,null));else if(T.isDataTexture)if(tt.length>0){He&&$e&&t.texStorage2D(i.TEXTURE_2D,ee,Le,tt[0].width,tt[0].height);for(let ie=0,fe=tt.length;ie<fe;ie++)Pe=tt[ie],He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,ue,xe,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Le,Pe.width,Pe.height,0,ue,xe,Pe.data);T.generateMipmaps=!1}else He?($e&&t.texStorage2D(i.TEXTURE_2D,ee,Le,pe.width,pe.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,ue,xe,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Le,pe.width,pe.height,0,ue,xe,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Le,tt[0].width,tt[0].height,pe.depth);for(let ie=0,fe=tt.length;ie<fe;ie++)if(Pe=tt[ie],T.format!==hn)if(ue!==null)if(He){if(W)if(T.layerUpdates.size>0){const Ie=Mf(Pe.width,Pe.height,T.format,T.type);for(const Ue of T.layerUpdates){const st=Pe.data.subarray(Ue*Ie/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Ie/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Ue,Pe.width,Pe.height,1,ue,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,pe.depth,ue,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Le,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Pe.width,Pe.height,pe.depth,ue,xe,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Le,Pe.width,Pe.height,pe.depth,0,ue,xe,Pe.data)}else{He&&$e&&t.texStorage2D(i.TEXTURE_2D,ee,Le,tt[0].width,tt[0].height);for(let ie=0,fe=tt.length;ie<fe;ie++)Pe=tt[ie],T.format!==hn?ue!==null?He?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,ue,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Le,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe.width,Pe.height,ue,xe,Pe.data):t.texImage2D(i.TEXTURE_2D,ie,Le,Pe.width,Pe.height,0,ue,xe,Pe.data)}else if(T.isDataArrayTexture)if(He){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Le,pe.width,pe.height,pe.depth),W)if(T.layerUpdates.size>0){const ie=Mf(pe.width,pe.height,T.format,T.type);for(const fe of T.layerUpdates){const Ie=pe.data.subarray(fe*ie/pe.data.BYTES_PER_ELEMENT,(fe+1)*ie/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,pe.width,pe.height,1,ue,xe,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ue,xe,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,ue,xe,pe.data);else if(T.isData3DTexture)He?($e&&t.texStorage3D(i.TEXTURE_3D,ee,Le,pe.width,pe.height,pe.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ue,xe,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,ue,xe,pe.data);else if(T.isFramebufferTexture){if($e)if(He)t.texStorage2D(i.TEXTURE_2D,ee,Le,pe.width,pe.height);else{let ie=pe.width,fe=pe.height;for(let Ie=0;Ie<ee;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Le,ie,fe,0,ue,xe,null),ie>>=1,fe>>=1}}else if(tt.length>0){if(He&&$e){const ie=ze(tt[0]);t.texStorage2D(i.TEXTURE_2D,ee,Le,ie.width,ie.height)}for(let ie=0,fe=tt.length;ie<fe;ie++)Pe=tt[ie],He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue,xe,Pe):t.texImage2D(i.TEXTURE_2D,ie,Le,ue,xe,Pe);T.generateMipmaps=!1}else if(He){if($e){const ie=ze(pe);t.texStorage2D(i.TEXTURE_2D,ee,Le,ie.width,ie.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,xe,pe)}else t.texImage2D(i.TEXTURE_2D,0,Le,ue,xe,pe);_(T)&&p(j),Ee.__version=ne.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function re(U,T,G){if(T.image.length!==6)return;const j=Oe(U,T),ae=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);const ne=n.get(ae);if(ae.version!==ne.__version||j===!0){t.activeTexture(i.TEXTURE0+G);const Ee=yt.getPrimaries(yt.workingColorSpace),he=T.colorSpace===en?null:yt.getPrimaries(T.colorSpace),ve=T.colorSpace===en||Ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ve=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let fe=0;fe<6;fe++)!Ve&&!pe?ue[fe]=g(T.image[fe],!0,r.maxCubemapSize):ue[fe]=pe?T.image[fe].image:T.image[fe],ue[fe]=We(T,ue[fe]);const xe=ue[0],Le=o.convert(T.format,T.colorSpace),Pe=o.convert(T.type),tt=S(T.internalFormat,Le,Pe,T.colorSpace),He=T.isVideoTexture!==!0,$e=ne.__version===void 0||j===!0,W=ae.dataReady;let ee=C(T,xe);ge(i.TEXTURE_CUBE_MAP,T);let ie;if(Ve){He&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,tt,xe.width,xe.height);for(let fe=0;fe<6;fe++){ie=ue[fe].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){const Ue=ie[Ie];T.format!==hn?Le!==null?He?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,tt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Ue.width,Ue.height,Le,Pe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,tt,Ue.width,Ue.height,0,Le,Pe,Ue.data)}}}else{if(ie=T.mipmaps,He&&$e){ie.length>0&&ee++;const fe=ze(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,tt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(pe){He?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ue[fe].width,ue[fe].height,Le,Pe,ue[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,ue[fe].width,ue[fe].height,0,Le,Pe,ue[fe].data);for(let Ie=0;Ie<ie.length;Ie++){const st=ie[Ie].image[fe].image;He?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,st.width,st.height,Le,Pe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,tt,st.width,st.height,0,Le,Pe,st.data)}}else{He?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Le,Pe,ue[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,Le,Pe,ue[fe]);for(let Ie=0;Ie<ie.length;Ie++){const Ue=ie[Ie];He?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,Le,Pe,Ue.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,tt,Le,Pe,Ue.image[fe])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function le(U,T,G,j,ae,ne){const Ee=o.convert(G.format,G.colorSpace),he=o.convert(G.type),ve=S(G.internalFormat,Ee,he,G.colorSpace),Ve=n.get(T),pe=n.get(G);if(pe.__renderTarget=T,!Ve.__hasExternalTextures){const ue=Math.max(1,T.width>>ne),xe=Math.max(1,T.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,ve,ue,xe,T.depth,0,Ee,he,null):t.texImage2D(ae,ne,ve,ue,xe,0,Ee,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ae,pe.__webglTexture,0,Ye(T)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ae,pe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const j=T.depthTexture,ae=j&&j.isDepthTexture?j.type:null,ne=x(T.stencilBuffer,ae),Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ye(T);Je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ne,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ne,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,U)}else{const j=T.textures;for(let ae=0;ae<j.length;ae++){const ne=j[ae],Ee=o.convert(ne.format,ne.colorSpace),he=o.convert(ne.type),ve=S(ne.internalFormat,Ee,he,ne.colorSpace),Ve=Ye(T);G&&Je(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,ve,T.width,T.height):Je(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const ae=j.__webglTexture,ne=Ye(T);if(T.depthTexture.format===Xo)Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(T.depthTexture.format===rs)Je(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Re(U){const T=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const j=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",ae)};j.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=j}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,U)}else if(G){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),se(T.__webglDepthbuffer[j],U,!1);else{const ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),se(T.__webglDepthbuffer,U,!1);else{const j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(U,T,G){const j=n.get(U);T!==void 0&&le(j.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Re(U)}function je(U){const T=U.texture,G=n.get(U),j=n.get(T);U.addEventListener("dispose",A);const ae=U.textures,ne=U.isWebGLCubeRenderTarget===!0,Ee=ae.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,s.memory.textures++),ne){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let ve=0;ve<T.mipmaps.length;ve++)G.__webglFramebuffer[he][ve]=i.createFramebuffer()}else G.__webglFramebuffer[he]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)G.__webglFramebuffer[he]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let he=0,ve=ae.length;he<ve;he++){const Ve=n.get(ae[he]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&Je(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const ve=ae[he];G.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Ve=o.convert(ve.format,ve.colorSpace),pe=o.convert(ve.type),ue=S(ve.internalFormat,Ve,pe,ve.colorSpace,U.isXRRenderTarget===!0),xe=Ye(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,G.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),se(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T);for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)le(G.__webglFramebuffer[he][ve],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else le(G.__webglFramebuffer[he],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,ve=ae.length;he<ve;he++){const Ve=ae[he],pe=n.get(Ve);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),ge(i.TEXTURE_2D,Ve),le(G.__webglFramebuffer,U,Ve,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),_(Ve)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),ge(he,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)le(G.__webglFramebuffer[ve],U,T,i.COLOR_ATTACHMENT0,he,ve);else le(G.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,he,0);_(T)&&p(he),t.unbindTexture()}U.depthBuffer&&Re(U)}function qe(U){const T=U.textures;for(let G=0,j=T.length;G<j;G++){const ae=T[G];if(_(ae)){const ne=b(U),Ee=n.get(ae).__webglTexture;t.bindTexture(ne,Ee),p(ne),t.unbindTexture()}}}const ot=[],z=[];function Ne(U){if(U.samples>0){if(Je(U)===!1){const T=U.textures,G=U.width,j=U.height;let ae=i.COLOR_BUFFER_BIT;const ne=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(U),he=T.length>1;if(he)for(let ve=0;ve<T.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const Ve=n.get(T[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,ae,i.NEAREST),l===!0&&(ot.length=0,z.length=0,ot.push(i.COLOR_ATTACHMENT0+ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ot.push(ne),z.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<T.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const Ve=n.get(T[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ye(U){return Math.min(r.maxSamples,U.samples)}function Je(U){const T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(U){const T=s.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function We(U,T){const G=U.colorSpace,j=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==zi&&G!==en&&(yt.getTransfer(G)===Et?(j!==hn||ae!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=je,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Je}function wy(i,e){function t(n,r=en){let o;const s=yt.getTransfer(r);if(n===Oi)return i.UNSIGNED_BYTE;if(n===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jd)return i.BYTE;if(n===Jd)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Iu)return i.INT;if(n===ho)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===ep)return i.ALPHA;if(n===tp)return i.RGB;if(n===hn)return i.RGBA;if(n===np)return i.LUMINANCE;if(n===ip)return i.LUMINANCE_ALPHA;if(n===Xo)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===Nu)return i.RED;if(n===Ou)return i.RED_INTEGER;if(n===rp)return i.RG;if(n===zu)return i.RG_INTEGER;if(n===Bu)return i.RGBA_INTEGER;if(n===Ha||n===Va||n===Ga||n===Wa)if(s===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===Oc||n===zc||n===Bc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Hc||n===Vc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===kc||n===Hc)return s===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Vc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Gc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===iu||n===ru)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Xa)return s===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ru)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===op||n===ou||n===su||n===au)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===su)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class by extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ty={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new dn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends ss{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new Ry,_=t.getContextAttributes();let p=null,b=null;const S=[],x=[],C=new it;let P=null;const A=new Nn;A.viewport=new Ut;const R=new Nn;R.viewport=new Ut;const w=[A,R],M=new by;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new tc,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new tc,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new tc,S[Z]=re),re.getHandSpace()};function O(Z){const re=x.indexOf(Z.inputSource);if(re===-1)return;const le=S[re];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||s),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",V);for(let Z=0;Z<S.length;Z++){const re=x[Z];re!==null&&(x[Z]=null,S[Z].disconnect(re))}L=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,b=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new rr(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,le=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?rs:Xo,le=_.stencil?is:ho);const be={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new rr(f.textureWidth,f.textureHeight,{format:hn,type:Oi,depthTexture:new Xu(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(Z){for(let re=0;re<Z.removed.length;re++){const le=Z.removed[re],se=x.indexOf(le);se>=0&&(x[se]=null,S[se].disconnect(le))}for(let re=0;re<Z.added.length;re++){const le=Z.added[re];let se=x.indexOf(le);if(se===-1){for(let Re=0;Re<S.length;Re++)if(Re>=x.length){x.push(le),se=Re;break}else if(x[Re]===null){x[Re]=le,se=Re;break}if(se===-1)break}const be=S[se];be&&be.connect(le)}}const k=new q,Y=new q;function B(Z,re,le){k.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const se=k.distanceTo(Y),be=re.projectionMatrix.elements,Re=le.projectionMatrix.elements,Te=be[14]/(be[10]-1),je=be[14]/(be[10]+1),qe=(be[9]+1)/be[5],ot=(be[9]-1)/be[5],z=(be[8]-1)/be[0],Ne=(Re[8]+1)/Re[0],Ye=Te*z,Je=Te*Ne,Be=se/(-z+Ne),We=Be*-z;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(Be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ze=Te+Be,U=je+Be,T=Ye-We,G=Je+(se-We),j=qe*je/U*ze,ae=ot*je/U*ze;Z.projectionMatrix.makePerspective(T,G,j,ae,ze,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,le=Z.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(le=g.depthFar)),M.near=R.near=A.near=re,M.far=R.far=A.far=le,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),A.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const se=Z.parent,be=M.cameras;ce(M,se);for(let Re=0;Re<be.length;Re++)ce(be[Re],se);be.length===2?B(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),K(Z,M,se)};function K(Z,re,le){le===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$s*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let de=null;function ge(Z,re){if(u=re.getViewerPose(c||s),v=re,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;le.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Re=0;Re<le.length;Re++){const Te=le[Re];let je=null;if(m!==null)je=m.getViewport(Te);else{const ot=d.getViewSubImage(f,Te);je=ot.viewport,Re===0&&(e.setRenderTargetTextures(b,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(b))}let qe=w[Re];qe===void 0&&(qe=new Nn,qe.layers.enable(Re),qe.viewport=new Ut,w[Re]=qe),qe.matrix.fromArray(Te.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Te.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(je.x,je.y,je.width,je.height),Re===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(qe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Re=d.getDepthInformation(le[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,r.renderState)}}for(let le=0;le<S.length;le++){const se=x[le],be=S[le];se!==null&&be!==void 0&&be.update(se,re,c||s)}de&&de(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const Oe=new vp;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}const Zr=new ii,Py=new xt;function Dy(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,pp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,x)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,b,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Gn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Gn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(_.envMap.value=S,Zr.copy(x),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),_.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Zr)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,b,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ly(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=r[b.id];x===void 0&&(v(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",_));const C=S.program;n.updateUBOMapping(b,C);const P=e.render.frame;o[b.id]!==P&&(f(b),o[b.id]=P)}function u(b){const S=d();b.__bindingPointIndex=S;const x=i.createBuffer(),C=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=r[b.id],x=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,A=x.length;P<A;P++){const R=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,M=R.length;w<M;w++){const L=R[w];if(m(L,P,w,C)===!0){const N=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let V=0;V<O.length;V++){const k=O[V],Y=g(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+H,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,x,C){const P=b.value,A=S+"_"+x;if(C[A]===void 0)return typeof P=="number"||typeof P=="boolean"?C[A]=P:C[A]=P.clone(),!0;{const R=C[A];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return C[A]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function v(b){const S=b.uniforms;let x=0;const C=16;for(let A=0,R=S.length;A<R;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,L=w.length;M<L;M++){const N=w[M],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,V=O.length;H<V;H++){const k=O[H],Y=g(k),B=x%C,ce=B%Y.boundary,K=B+ce;x+=ce,K!==0&&C-K<Y.storage&&(x+=C-K),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Y.storage}}}const P=x%C;return P>0&&(x+=C-P),b.__size=x,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function _(b){const S=b.target;S.removeEventListener("dispose",_);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class pl{constructor(e={}){const{canvas:t=g0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=Fi,this.toneMappingExposure=1;const x=this;let C=!1,P=0,A=0,R=null,w=-1,M=null;const L=new Ut,N=new Ut;let O=null;const H=new et(0);let V=0,k=t.width,Y=t.height,B=1,ce=null,K=null;const de=new Ut(0,0,k,Y),ge=new Ut(0,0,k,Y);let Oe=!1;const Z=new gp;let re=!1,le=!1;const se=new xt,be=new xt,Re=new q,Te=new Ut,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ot(){return R===null?B:1}let z=n;function Ne(h,y){return t.getContext(h,y)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),z===null){const y="webgl2";if(z=Ne(y,h),z===null)throw Ne(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Ye,Je,Be,We,ze,U,T,G,j,ae,ne,Ee,he,ve,Ve,pe,ue,xe,Le,Pe,tt,He,$e,W;function ee(){Ye=new zx(z),Ye.init(),He=new wy(z,Ye),Je=new Lx(z,Ye,e,He),Be=new yy(z,Ye),Je.reverseDepthBuffer&&f&&Be.buffers.depth.setReversed(!0),We=new Hx(z),ze=new oy,U=new My(z,Ye,Be,ze,Je,He,We),T=new Ux(x),G=new Ox(x),j=new $0(z),$e=new Px(z,j),ae=new Bx(z,j,We,$e),ne=new Gx(z,ae,j,We),Le=new Vx(z,Je,U),pe=new Ix(ze),Ee=new ry(x,T,G,Ye,Je,$e,pe),he=new Dy(x,ze),ve=new ay,Ve=new dy(Ye),xe=new Cx(x,T,G,Be,ne,m,l),ue=new vy(x,ne,Je),W=new Ly(z,We,Je,Be),Pe=new Dx(z,Ye,We),tt=new kx(z,Ye,We),We.programs=Ee.programs,x.capabilities=Je,x.extensions=Ye,x.properties=ze,x.renderLists=ve,x.shadowMap=ue,x.state=Be,x.info=We}ee();const ie=new Cy(x,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const h=Ye.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Ye.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(k,Y,!1))},this.getSize=function(h){return h.set(k,Y)},this.setSize=function(h,y,E=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=h,Y=y,t.width=Math.floor(h*B),t.height=Math.floor(y*B),E===!0&&(t.style.width=h+"px",t.style.height=y+"px"),this.setViewport(0,0,h,y)},this.getDrawingBufferSize=function(h){return h.set(k*B,Y*B).floor()},this.setDrawingBufferSize=function(h,y,E){k=h,Y=y,B=E,t.width=Math.floor(h*E),t.height=Math.floor(y*E),this.setViewport(0,0,h,y)},this.getCurrentViewport=function(h){return h.copy(L)},this.getViewport=function(h){return h.copy(de)},this.setViewport=function(h,y,E,D){h.isVector4?de.set(h.x,h.y,h.z,h.w):de.set(h,y,E,D),Be.viewport(L.copy(de).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(ge)},this.setScissor=function(h,y,E,D){h.isVector4?ge.set(h.x,h.y,h.z,h.w):ge.set(h,y,E,D),Be.scissor(N.copy(ge).multiplyScalar(B).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(h){Be.setScissorTest(Oe=h)},this.setOpaqueSort=function(h){ce=h},this.setTransparentSort=function(h){K=h},this.getClearColor=function(h){return h.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(h=!0,y=!0,E=!0){let D=0;if(h){let I=!1;if(R!==null){const F=R.texture.format;I=F===Bu||F===zu||F===Ou}if(I){const F=R.texture.type,X=F===Oi||F===ho||F===ns||F===is||F===Uu||F===Fu,te=xe.getClearColor(),$=xe.getClearAlpha(),J=te.r,Q=te.g,oe=te.b;X?(v[0]=J,v[1]=Q,v[2]=oe,v[3]=$,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=J,g[1]=Q,g[2]=oe,g[3]=$,z.clearBufferiv(z.COLOR,0,g))}else D|=z.COLOR_BUFFER_BIT}y&&(D|=z.DEPTH_BUFFER_BIT),E&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ve.dispose(),Ve.dispose(),ze.dispose(),T.dispose(),G.dispose(),ne.dispose(),$e.dispose(),W.dispose(),Ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Fr),ie.removeEventListener("sessionend",Nr),pn.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const h=We.autoReset,y=ue.enabled,E=ue.autoUpdate,D=ue.needsUpdate,I=ue.type;ee(),We.autoReset=h,ue.enabled=y,ue.autoUpdate=E,ue.needsUpdate=D,ue.type=I}function Ue(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function st(h){const y=h.target;y.removeEventListener("dispose",st),Mt(y)}function Mt(h){Lt(h),ze.remove(h)}function Lt(h){const y=ze.get(h).programs;y!==void 0&&(y.forEach(function(E){Ee.releaseProgram(E)}),h.isShaderMaterial&&Ee.releaseShaderCache(h))}this.renderBufferDirect=function(h,y,E,D,I,F){y===null&&(y=je);const X=I.isMesh&&I.matrixWorld.determinant()<0,te=po(h,y,E,D,I);Be.setMaterial(D,X);let $=E.index,J=1;if(D.wireframe===!0){if($=ae.getWireframeAttribute(E),$===void 0)return;J=2}const Q=E.drawRange,oe=E.attributes.position;let ye=Q.start*J,Se=(Q.start+Q.count)*J;F!==null&&(ye=Math.max(ye,F.start*J),Se=Math.min(Se,(F.start+F.count)*J)),$!==null?(ye=Math.max(ye,0),Se=Math.min(Se,$.count)):oe!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,oe.count));const Ce=Se-ye;if(Ce<0||Ce===1/0)return;$e.setup(I,D,te,E,$);let Ae,Me=Pe;if($!==null&&(Ae=j.get($),Me=tt,Me.setIndex(Ae)),I.isMesh)D.wireframe===!0?(Be.setLineWidth(D.wireframeLinewidth*ot()),Me.setMode(z.LINES)):Me.setMode(z.TRIANGLES);else if(I.isLine){let _e=D.linewidth;_e===void 0&&(_e=1),Be.setLineWidth(_e*ot()),I.isLineSegments?Me.setMode(z.LINES):I.isLineLoop?Me.setMode(z.LINE_LOOP):Me.setMode(z.LINE_STRIP)}else I.isPoints?Me.setMode(z.POINTS):I.isSprite&&Me.setMode(z.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Me.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Me.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const _e=I._multiDrawStarts,ct=I._multiDrawCounts,Ze=I._multiDrawCount,St=$?j.get($).bytesPerElement:1,mt=ze.get(D).currentProgram.getUniforms();for(let nt=0;nt<Ze;nt++)mt.setValue(z,"_gl_DrawID",nt),Me.render(_e[nt]/St,ct[nt])}else if(I.isInstancedMesh)Me.renderInstances(ye,Ce,I.count);else if(E.isInstancedBufferGeometry){const _e=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,ct=Math.min(E.instanceCount,_e);Me.renderInstances(ye,Ce,ct)}else Me.render(ye,Ce)};function gt(h,y,E){h.transparent===!0&&h.side===bn&&h.forceSinglePass===!1?(h.side=Gn,h.needsUpdate=!0,Ei(h,y,E),h.side=Ir,h.needsUpdate=!0,Ei(h,y,E),h.side=bn):Ei(h,y,E)}this.compile=function(h,y,E=null){E===null&&(E=h),p=Ve.get(E),p.init(y),S.push(p),E.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==E&&h.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const D=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const F=I.material;if(F)if(Array.isArray(F))for(let X=0;X<F.length;X++){const te=F[X];gt(te,E,I),D.add(te)}else gt(F,E,I),D.add(F)}),S.pop(),p=null,D},this.compileAsync=function(h,y,E=null){const D=this.compile(h,y,E);return new Promise(I=>{function F(){if(D.forEach(function(X){ze.get(X).currentProgram.isReady()&&D.delete(X)}),D.size===0){I(h);return}setTimeout(F,10)}Ye.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let wt=null;function Un(h){wt&&wt(h)}function Fr(){pn.stop()}function Nr(){pn.start()}const pn=new vp;pn.setAnimationLoop(Un),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(h){wt=h,ie.setAnimationLoop(h),h===null?pn.stop():pn.start()},ie.addEventListener("sessionstart",Fr),ie.addEventListener("sessionend",Nr),this.render=function(h,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(y),y=ie.getCamera()),h.isScene===!0&&h.onBeforeRender(x,h,y,R),p=Ve.get(h,S.length),p.init(y),S.push(p),be.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Z.setFromProjectionMatrix(be),le=this.localClippingEnabled,re=pe.init(this.clippingPlanes,le),_=ve.get(h,b.length),_.init(),b.push(_),ie.enabled===!0&&ie.isPresenting===!0){const F=x.xr.getDepthSensingMesh();F!==null&&sr(F,y,-1/0,x.sortObjects)}sr(h,y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ce,K),qe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,qe&&xe.addToRenderList(_,h),this.info.render.frame++,re===!0&&pe.beginShadows();const E=p.state.shadowsArray;ue.render(E,h,y),re===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,I=_.transmissive;if(p.setupLights(),y.isArrayCamera){const F=y.cameras;if(I.length>0)for(let X=0,te=F.length;X<te;X++){const $=F[X];Or(D,I,h,$)}qe&&xe.render(h);for(let X=0,te=F.length;X<te;X++){const $=F[X];ar(_,h,$,$.viewport)}}else I.length>0&&Or(D,I,h,y),qe&&xe.render(h),ar(_,h,y);R!==null&&(U.updateMultisampleRenderTarget(R),U.updateRenderTargetMipmap(R)),h.isScene===!0&&h.onAfterRender(x,h,y),$e.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function sr(h,y,E,D){if(h.visible===!1)return;if(h.layers.test(y.layers)){if(h.isGroup)E=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(y);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Z.intersectsSprite(h)){D&&Te.setFromMatrixPosition(h.matrixWorld).applyMatrix4(be);const X=ne.update(h),te=h.material;te.visible&&_.push(h,X,te,E,Te.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Z.intersectsObject(h))){const X=ne.update(h),te=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Te.copy(h.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Te.copy(X.boundingSphere.center)),Te.applyMatrix4(h.matrixWorld).applyMatrix4(be)),Array.isArray(te)){const $=X.groups;for(let J=0,Q=$.length;J<Q;J++){const oe=$[J],ye=te[oe.materialIndex];ye&&ye.visible&&_.push(h,X,ye,E,Te.z,oe)}}else te.visible&&_.push(h,X,te,E,Te.z,null)}}const F=h.children;for(let X=0,te=F.length;X<te;X++)sr(F[X],y,E,D)}function ar(h,y,E,D){const I=h.opaque,F=h.transmissive,X=h.transparent;p.setupLightsView(E),re===!0&&pe.setGlobalState(x.clippingPlanes,E),D&&Be.viewport(L.copy(D)),I.length>0&&Ti(I,y,E),F.length>0&&Ti(F,y,E),X.length>0&&Ti(X,y,E),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Or(h,y,E,D){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new rr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ui:Oi,minFilter:Ji,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const F=p.state.transmissionRenderTarget[D.id],X=D.viewport||L;F.setSize(X.z,X.w);const te=x.getRenderTarget();x.setRenderTarget(F),x.getClearColor(H),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),qe&&xe.render(E);const $=x.toneMapping;x.toneMapping=Fi;const J=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),re===!0&&pe.setGlobalState(x.clippingPlanes,D),Ti(h,E,D),U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Q=!1;for(let oe=0,ye=y.length;oe<ye;oe++){const Se=y[oe],Ce=Se.object,Ae=Se.geometry,Me=Se.material,_e=Se.group;if(Me.side===bn&&Ce.layers.test(D.layers)){const ct=Me.side;Me.side=Gn,Me.needsUpdate=!0,Nt(Ce,E,D,Ae,Me,_e),Me.side=ct,Me.needsUpdate=!0,Q=!0}}Q===!0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F))}x.setRenderTarget(te),x.setClearColor(H,V),J!==void 0&&(D.viewport=J),x.toneMapping=$}function Ti(h,y,E){const D=y.isScene===!0?y.overrideMaterial:null;for(let I=0,F=h.length;I<F;I++){const X=h[I],te=X.object,$=X.geometry,J=D===null?X.material:D,Q=X.group;te.layers.test(E.layers)&&Nt(te,y,E,$,J,Q)}}function Nt(h,y,E,D,I,F){h.onBeforeRender(x,y,E,D,I,F),h.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(x,y,E,D,h,F),I.transparent===!0&&I.side===bn&&I.forceSinglePass===!1?(I.side=Gn,I.needsUpdate=!0,x.renderBufferDirect(E,y,D,I,h,F),I.side=Ir,I.needsUpdate=!0,x.renderBufferDirect(E,y,D,I,h,F),I.side=bn):x.renderBufferDirect(E,y,D,I,h,F),h.onAfterRender(x,y,E,D,I,F)}function Ei(h,y,E){y.isScene!==!0&&(y=je);const D=ze.get(h),I=p.state.lights,F=p.state.shadowsArray,X=I.state.version,te=Ee.getParameters(h,I.state,F,y,E),$=Ee.getProgramCacheKey(te);let J=D.programs;D.environment=h.isMeshStandardMaterial?y.environment:null,D.fog=y.fog,D.envMap=(h.isMeshStandardMaterial?G:T).get(h.envMap||D.environment),D.envMapRotation=D.environment!==null&&h.envMap===null?y.environmentRotation:h.envMapRotation,J===void 0&&(h.addEventListener("dispose",st),J=new Map,D.programs=J);let Q=J.get($);if(Q!==void 0){if(D.currentProgram===Q&&D.lightsStateVersion===X)return zr(h,te),Q}else te.uniforms=Ee.getUniforms(h),h.onBeforeCompile(te,x),Q=Ee.acquireProgram(te,$),J.set($,Q),D.uniforms=te.uniforms;const oe=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(oe.clippingPlanes=pe.uniform),zr(h,te),D.needsLights=di(h),D.lightsStateVersion=X,D.needsLights&&(oe.ambientLightColor.value=I.state.ambient,oe.lightProbe.value=I.state.probe,oe.directionalLights.value=I.state.directional,oe.directionalLightShadows.value=I.state.directionalShadow,oe.spotLights.value=I.state.spot,oe.spotLightShadows.value=I.state.spotShadow,oe.rectAreaLights.value=I.state.rectArea,oe.ltc_1.value=I.state.rectAreaLTC1,oe.ltc_2.value=I.state.rectAreaLTC2,oe.pointLights.value=I.state.point,oe.pointLightShadows.value=I.state.pointShadow,oe.hemisphereLights.value=I.state.hemi,oe.directionalShadowMap.value=I.state.directionalShadowMap,oe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,oe.spotShadowMap.value=I.state.spotShadowMap,oe.spotLightMatrix.value=I.state.spotLightMatrix,oe.spotLightMap.value=I.state.spotLightMap,oe.pointShadowMap.value=I.state.pointShadowMap,oe.pointShadowMatrix.value=I.state.pointShadowMatrix),D.currentProgram=Q,D.uniformsList=null,Q}function fi(h){if(h.uniformsList===null){const y=h.currentProgram.getUniforms();h.uniformsList=qa.seqWithValue(y.seq,h.uniforms)}return h.uniformsList}function zr(h,y){const E=ze.get(h);E.outputColorSpace=y.outputColorSpace,E.batching=y.batching,E.batchingColor=y.batchingColor,E.instancing=y.instancing,E.instancingColor=y.instancingColor,E.instancingMorph=y.instancingMorph,E.skinning=y.skinning,E.morphTargets=y.morphTargets,E.morphNormals=y.morphNormals,E.morphColors=y.morphColors,E.morphTargetsCount=y.morphTargetsCount,E.numClippingPlanes=y.numClippingPlanes,E.numIntersection=y.numClipIntersection,E.vertexAlphas=y.vertexAlphas,E.vertexTangents=y.vertexTangents,E.toneMapping=y.toneMapping}function po(h,y,E,D,I){y.isScene!==!0&&(y=je),U.resetTextureUnits();const F=y.fog,X=D.isMeshStandardMaterial?y.environment:null,te=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zi,$=(D.isMeshStandardMaterial?G:T).get(D.envMap||X),J=D.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,Q=!!E.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),oe=!!E.morphAttributes.position,ye=!!E.morphAttributes.normal,Se=!!E.morphAttributes.color;let Ce=Fi;D.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=x.toneMapping);const Ae=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Me=Ae!==void 0?Ae.length:0,_e=ze.get(D),ct=p.state.lights;if(re===!0&&(le===!0||h!==M)){const Ke=h===M&&D.id===w;pe.setState(D,h,Ke)}let Ze=!1;D.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==ct.state.version||_e.outputColorSpace!==te||I.isBatchedMesh&&_e.batching===!1||!I.isBatchedMesh&&_e.batching===!0||I.isBatchedMesh&&_e.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&_e.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&_e.instancing===!1||!I.isInstancedMesh&&_e.instancing===!0||I.isSkinnedMesh&&_e.skinning===!1||!I.isSkinnedMesh&&_e.skinning===!0||I.isInstancedMesh&&_e.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&_e.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&_e.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&_e.instancingMorph===!1&&I.morphTexture!==null||_e.envMap!==$||D.fog===!0&&_e.fog!==F||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==pe.numPlanes||_e.numIntersection!==pe.numIntersection)||_e.vertexAlphas!==J||_e.vertexTangents!==Q||_e.morphTargets!==oe||_e.morphNormals!==ye||_e.morphColors!==Se||_e.toneMapping!==Ce||_e.morphTargetsCount!==Me)&&(Ze=!0):(Ze=!0,_e.__version=D.version);let St=_e.currentProgram;Ze===!0&&(St=Ei(D,y,I));let mt=!1,nt=!1,Tt=!1;const ht=St.getUniforms(),ke=_e.uniforms;if(Be.useProgram(St.program)&&(mt=!0,nt=!0,Tt=!0),D.id!==w&&(w=D.id,nt=!0),mt||M!==h){Be.buffers.depth.getReversed()?(se.copy(h.projectionMatrix),x0(se),y0(se),ht.setValue(z,"projectionMatrix",se)):ht.setValue(z,"projectionMatrix",h.projectionMatrix),ht.setValue(z,"viewMatrix",h.matrixWorldInverse);const Ot=ht.map.cameraPosition;Ot!==void 0&&Ot.setValue(z,Re.setFromMatrixPosition(h.matrixWorld)),Je.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ht.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,nt=!0,Tt=!0)}if(I.isSkinnedMesh){ht.setOptional(z,I,"bindMatrix"),ht.setOptional(z,I,"bindMatrixInverse");const Ke=I.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ht.setValue(z,"boneTexture",Ke.boneTexture,U))}I.isBatchedMesh&&(ht.setOptional(z,I,"batchingTexture"),ht.setValue(z,"batchingTexture",I._matricesTexture,U),ht.setOptional(z,I,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",I._indirectTexture,U),ht.setOptional(z,I,"batchingColorTexture"),I._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",I._colorsTexture,U));const rt=E.morphAttributes;if((rt.position!==void 0||rt.normal!==void 0||rt.color!==void 0)&&Le.update(I,E,St),(nt||_e.receiveShadow!==I.receiveShadow)&&(_e.receiveShadow=I.receiveShadow,ht.setValue(z,"receiveShadow",I.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(ke.envMap.value=$,ke.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&y.environment!==null&&(ke.envMapIntensity.value=y.environmentIntensity),nt&&(ht.setValue(z,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&ri(ke,Tt),F&&D.fog===!0&&he.refreshFogUniforms(ke,F),he.refreshMaterialUniforms(ke,D,B,Y,p.state.transmissionRenderTarget[h.id]),qa.upload(z,fi(_e),ke,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(qa.upload(z,fi(_e),ke,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ht.setValue(z,"center",I.center),ht.setValue(z,"modelViewMatrix",I.modelViewMatrix),ht.setValue(z,"normalMatrix",I.normalMatrix),ht.setValue(z,"modelMatrix",I.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Ke=D.uniformsGroups;for(let Ot=0,Ht=Ke.length;Ot<Ht;Ot++){const lt=Ke[Ot];W.update(lt,St),W.bind(lt,St)}}return St}function ri(h,y){h.ambientLightColor.needsUpdate=y,h.lightProbe.needsUpdate=y,h.directionalLights.needsUpdate=y,h.directionalLightShadows.needsUpdate=y,h.pointLights.needsUpdate=y,h.pointLightShadows.needsUpdate=y,h.spotLights.needsUpdate=y,h.spotLightShadows.needsUpdate=y,h.rectAreaLights.needsUpdate=y,h.hemisphereLights.needsUpdate=y}function di(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(h,y,E){ze.get(h.texture).__webglTexture=y,ze.get(h.depthTexture).__webglTexture=E;const D=ze.get(h);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=E===void 0,D.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,y){const E=ze.get(h);E.__webglFramebuffer=y,E.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(h,y=0,E=0){R=h,P=y,A=E;let D=!0,I=null,F=!1,X=!1;if(h){const $=ze.get(h);if($.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(z.FRAMEBUFFER,null),D=!1;else if($.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if($.__hasExternalTextures)U.rebindTextures(h,ze.get(h.texture).__webglTexture,ze.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const oe=h.depthTexture;if($.__boundDepthTexture!==oe){if(oe!==null&&ze.has(oe)&&(h.width!==oe.image.width||h.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const J=h.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(X=!0);const Q=ze.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Q[y])?I=Q[y][E]:I=Q[y],F=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=ze.get(h).__webglMultisampledFramebuffer:Array.isArray(Q)?I=Q[E]:I=Q,L.copy(h.viewport),N.copy(h.scissor),O=h.scissorTest}else L.copy(de).multiplyScalar(B).floor(),N.copy(ge).multiplyScalar(B).floor(),O=Oe;if(Be.bindFramebuffer(z.FRAMEBUFFER,I)&&D&&Be.drawBuffers(h,I),Be.viewport(L),Be.scissor(N),Be.setScissorTest(O),F){const $=ze.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+y,$.__webglTexture,E)}else if(X){const $=ze.get(h.texture),J=y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.__webglTexture,E||0,J)}w=-1},this.readRenderTargetPixels=function(h,y,E,D,I,F,X){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(te=te[X]),te){Be.bindFramebuffer(z.FRAMEBUFFER,te);try{const $=h.texture,J=$.format,Q=$.type;if(!Je.textureFormatReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=h.width-D&&E>=0&&E<=h.height-I&&z.readPixels(y,E,D,I,He.convert(J),He.convert(Q),F)}finally{const $=R!==null?ze.get(R).__webglFramebuffer:null;Be.bindFramebuffer(z.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(h,y,E,D,I,F,X){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(te=te[X]),te){const $=h.texture,J=$.format,Q=$.type;if(!Je.textureFormatReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=h.width-D&&E>=0&&E<=h.height-I){Be.bindFramebuffer(z.FRAMEBUFFER,te);const oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.bufferData(z.PIXEL_PACK_BUFFER,F.byteLength,z.STREAM_READ),z.readPixels(y,E,D,I,He.convert(J),He.convert(Q),0);const ye=R!==null?ze.get(R).__webglFramebuffer:null;Be.bindFramebuffer(z.FRAMEBUFFER,ye);const Se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await v0(z,Se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,F),z.deleteBuffer(oe),z.deleteSync(Se),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,y=null,E=0){h.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,h=arguments[1]);const D=Math.pow(2,-E),I=Math.floor(h.image.width*D),F=Math.floor(h.image.height*D),X=y!==null?y.x:0,te=y!==null?y.y:0;U.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,E,0,0,X,te,I,F),Be.unbindTexture()},this.copyTextureToTexture=function(h,y,E=null,D=null,I=0){h.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,h=arguments[1],y=arguments[2],I=arguments[3]||0,E=null);let F,X,te,$,J,Q,oe,ye,Se;const Ce=h.isCompressedTexture?h.mipmaps[I]:h.image;E!==null?(F=E.max.x-E.min.x,X=E.max.y-E.min.y,te=E.isBox3?E.max.z-E.min.z:1,$=E.min.x,J=E.min.y,Q=E.isBox3?E.min.z:0):(F=Ce.width,X=Ce.height,te=Ce.depth||1,$=0,J=0,Q=0),D!==null?(oe=D.x,ye=D.y,Se=D.z):(oe=0,ye=0,Se=0);const Ae=He.convert(y.format),Me=He.convert(y.type);let _e;y.isData3DTexture?(U.setTexture3D(y,0),_e=z.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(U.setTexture2DArray(y,0),_e=z.TEXTURE_2D_ARRAY):(U.setTexture2D(y,0),_e=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,y.unpackAlignment);const ct=z.getParameter(z.UNPACK_ROW_LENGTH),Ze=z.getParameter(z.UNPACK_IMAGE_HEIGHT),St=z.getParameter(z.UNPACK_SKIP_PIXELS),mt=z.getParameter(z.UNPACK_SKIP_ROWS),nt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$),z.pixelStorei(z.UNPACK_SKIP_ROWS,J),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Q);const Tt=h.isDataArrayTexture||h.isData3DTexture,ht=y.isDataArrayTexture||y.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const ke=ze.get(h),rt=ze.get(y),Ke=ze.get(ke.__renderTarget),Ot=ze.get(rt.__renderTarget);Be.bindFramebuffer(z.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Be.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Ht=0;Ht<te;Ht++)Tt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(h).__webglTexture,I,Q+Ht),h.isDepthTexture?(ht&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(y).__webglTexture,I,Se+Ht),z.blitFramebuffer($,J,F,X,oe,ye,F,X,z.DEPTH_BUFFER_BIT,z.NEAREST)):ht?z.copyTexSubImage3D(_e,I,oe,ye,Se+Ht,$,J,F,X):z.copyTexSubImage2D(_e,I,oe,ye,Se+Ht,$,J,F,X);Be.bindFramebuffer(z.READ_FRAMEBUFFER,null),Be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ht?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(_e,I,oe,ye,Se,F,X,te,Ae,Me,Ce.data):y.isCompressedArrayTexture?z.compressedTexSubImage3D(_e,I,oe,ye,Se,F,X,te,Ae,Ce.data):z.texSubImage3D(_e,I,oe,ye,Se,F,X,te,Ae,Me,Ce):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,oe,ye,F,X,Ae,Me,Ce.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,oe,ye,Ce.width,Ce.height,Ae,Ce.data):z.texSubImage2D(z.TEXTURE_2D,I,oe,ye,F,X,Ae,Me,Ce);z.pixelStorei(z.UNPACK_ROW_LENGTH,ct),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ze),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,mt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nt),I===0&&y.generateMipmaps&&z.generateMipmap(_e),Be.unbindTexture()},this.copyTextureToTexture3D=function(h,y,E=null,D=null,I=0){return h.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,D=arguments[1]||null,h=arguments[2],y=arguments[3],I=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,y,E,D,I)},this.initRenderTarget=function(h){ze.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),Be.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,Be.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class us extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ml extends dn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=tn,u=tn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn extends Xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Iy extends dn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const il={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Uy{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Fy=new Uy;class Js{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class Ny extends Error{constructor(e,t){super(e),this.response=t}}class Oy extends Js{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=il.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:r});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let P=0,A=u.length;P<A;P++){const R=u[P];R.onProgress&&R.onProgress(C)}p.enqueue(x),b()}},S=>{p.error(S)})}}});return new Response(_)}else throw new Ny(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{il.add(e,c);const u=Xi[e];delete Xi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zy extends Js{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=il.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=Zs("img");function l(){u(),il.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class By extends Js{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new ml,a=new Oy(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Ln,s.wrapT=c.wrapT!==void 0?c.wrapT:Ln,s.magFilter=c.magFilter!==void 0?c.magFilter:_t,s.minFilter=c.minFilter!==void 0?c.minFilter:_t,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ji),c.mipmapCount===1&&(s.minFilter=_t),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class yr extends Js{constructor(e){super(e)}load(e,t,n,r){const o=new dn,s=new zy(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class io extends or{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var li=Uint8Array,Oo=Uint16Array,ky=Int32Array,wp=new li([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bp=new li([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hy=new li([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tp=function(i,e){for(var t=new Oo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ky(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Ep=Tp(wp,2),Ap=Ep.b,Vy=Ep.r;Ap[28]=258,Vy[258]=28;var Gy=Tp(bp,0),Wy=Gy.b,cu=new Oo(32768);for(var Ft=0;Ft<32768;++Ft){var xr=(Ft&43690)>>1|(Ft&21845)<<1;xr=(xr&52428)>>2|(xr&13107)<<2,xr=(xr&61680)>>4|(xr&3855)<<4,cu[Ft]=((xr&65280)>>8|(xr&255)<<8)>>1}var Fs=(function(i,e,t){for(var n=i.length,r=0,o=new Oo(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new Oo(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new Oo(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[cu[d]>>l]=c}else for(a=new Oo(n),r=0;r<n;++r)i[r]&&(a[r]=cu[s[i[r]-1]++]>>15-i[r]);return a}),Qs=new li(288);for(var Ft=0;Ft<144;++Ft)Qs[Ft]=8;for(var Ft=144;Ft<256;++Ft)Qs[Ft]=9;for(var Ft=256;Ft<280;++Ft)Qs[Ft]=7;for(var Ft=280;Ft<288;++Ft)Qs[Ft]=8;var Rp=new li(32);for(var Ft=0;Ft<32;++Ft)Rp[Ft]=5;var Xy=Fs(Qs,9,1),qy=Fs(Rp,5,1),nc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},vi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ic=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Yy=function(i){return(i+7)/8|0},$y=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new li(i.subarray(e,t))},Zy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],yi=function(i,e,t){var n=new Error(e||Zy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,yi),!t)throw n;return n},Ky=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new li(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new li(r*3));var c=function(je){var qe=t.length;if(je>qe){var ot=new li(Math.max(qe*2,je));ot.set(t),t=ot}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=vi(i,d,1);var b=vi(i,d+1,3);if(d+=3,b)if(b==1)m=Xy,v=qy,g=9,_=5;else if(b==2){var P=vi(i,d,31)+257,A=vi(i,d+10,15)+4,R=P+vi(i,d+5,31)+1;d+=14;for(var w=new li(R),M=new li(19),L=0;L<A;++L)M[Hy[L]]=vi(i,d+L*3,7);d+=A*3;for(var N=nc(M),O=(1<<N)-1,H=Fs(M,N,1),L=0;L<R;){var V=H[vi(i,d,O)];d+=V&15;var S=V>>4;if(S<16)w[L++]=S;else{var k=0,Y=0;for(S==16?(Y=3+vi(i,d,3),d+=2,k=w[L-1]):S==17?(Y=3+vi(i,d,7),d+=3):S==18&&(Y=11+vi(i,d,127),d+=7);Y--;)w[L++]=k}}var B=w.subarray(0,P),ce=w.subarray(P);g=nc(B),_=nc(ce),m=Fs(B,g,1),v=Fs(ce,_,1)}else yi(1);else{var S=Yy(d)+4,x=i[S-4]|i[S-3]<<8,C=S+x;if(C>r){l&&yi(0);break}a&&c(f+x),t.set(i.subarray(S,C),f),e.b=f+=x,e.p=d=C*8,e.f=u;continue}if(d>p){l&&yi(0);break}}a&&c(f+131072);for(var K=(1<<g)-1,de=(1<<_)-1,ge=d;;ge=d){var k=m[ic(i,d)&K],Oe=k>>4;if(d+=k&15,d>p){l&&yi(0);break}if(k||yi(2),Oe<256)t[f++]=Oe;else if(Oe==256){ge=d,m=null;break}else{var Z=Oe-254;if(Oe>264){var L=Oe-257,re=wp[L];Z=vi(i,d,(1<<re)-1)+Ap[L],d+=re}var le=v[ic(i,d)&de],se=le>>4;le||yi(3),d+=le&15;var ce=Wy[se];if(se>3){var re=bp[se];ce+=ic(i,d)&(1<<re)-1,d+=re}if(d>p){l&&yi(0);break}a&&c(f+131072);var be=f+Z;if(f<ce){var Re=o-ce,Te=Math.min(ce,be);for(Re+f<0&&yi(3);f<Te;++f)t[f]=n[Re+f]}for(;f<be;++f)t[f]=t[f-ce]}}e.l=m,e.p=ge,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?$y(t,0,f):t.subarray(0,f)},jy=new li(0),Jy=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&yi(6,"invalid zlib data"),(i[1]>>5&1)==1&&yi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ra(i,e){return Ky(i.subarray(Jy(i),-4),{i:2},e,e)}var Qy=typeof TextDecoder<"u"&&new TextDecoder,eS=0;try{Qy.decode(jy,{stream:!0}),eS=1}catch{}class tS extends By{constructor(e){super(e),this.type=Ui}parse(e){const w=Math.pow(2.7182818,2.2);function M(h,y){let E=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(y[E++]=I);const D=E-1;for(;E<65536;)y[E++]=0;return D}function L(h){for(let y=0;y<16384;y++)h[y]={},h[y].len=0,h[y].lit=0,h[y].p=null}const N={l:0,c:0,lc:0};function O(h,y,E,D,I){for(;E<h;)y=y<<8|Pe(D,I),E+=8;E-=h,N.l=y>>E&(1<<h)-1,N.c=y,N.lc=E}const H=new Array(59);function V(h){for(let E=0;E<=58;++E)H[E]=0;for(let E=0;E<65537;++E)H[h[E]]+=1;let y=0;for(let E=58;E>0;--E){const D=y+H[E]>>1;H[E]=y,y=D}for(let E=0;E<65537;++E){const D=h[E];D>0&&(h[E]=D|H[D]++<<6)}}function k(h,y,E,D,I,F){const X=y;let te=0,$=0;for(;D<=I;D++){if(X.value-y.value>E)return!1;O(6,te,$,h,X);const J=N.l;if(te=N.c,$=N.lc,F[D]=J,J==63){if(X.value-y.value>E)throw new Error("Something wrong with hufUnpackEncTable");O(8,te,$,h,X);let Q=N.l+6;if(te=N.c,$=N.lc,D+Q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)F[D++]=0;D--}else if(J>=59){let Q=J-59+2;if(D+Q>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)F[D++]=0;D--}}V(F)}function Y(h){return h&63}function B(h){return h>>6}function ce(h,y,E,D){for(;y<=E;y++){const I=B(h[y]),F=Y(h[y]);if(I>>F)throw new Error("Invalid table entry");if(F>14){const X=D[I>>F-14];if(X.len)throw new Error("Invalid table entry");if(X.lit++,X.p){const te=X.p;X.p=new Array(X.lit);for(let $=0;$<X.lit-1;++$)X.p[$]=te[$]}else X.p=new Array(1);X.p[X.lit-1]=y}else if(F){let X=0;for(let te=1<<14-F;te>0;te--){const $=D[(I<<14-F)+X];if($.len||$.p)throw new Error("Invalid table entry");$.len=F,$.lit=y,X++}}}return!0}const K={c:0,lc:0};function de(h,y,E,D){h=h<<8|Pe(E,D),y+=8,K.c=h,K.lc=y}const ge={c:0,lc:0};function Oe(h,y,E,D,I,F,X,te,$){if(h==y){D<8&&(de(E,D,I,F),E=K.c,D=K.lc),D-=8;let J=E>>D;if(J=new Uint8Array([J])[0],te.value+J>$)return!1;const Q=X[te.value-1];for(;J-- >0;)X[te.value++]=Q}else if(te.value<$)X[te.value++]=h;else return!1;ge.c=E,ge.lc=D}function Z(h){return h&65535}function re(h){const y=Z(h);return y>32767?y-65536:y}const le={a:0,b:0};function se(h,y){const E=re(h),I=re(y),F=E+(I&1)+(I>>1),X=F,te=F-I;le.a=X,le.b=te}function be(h,y){const E=Z(h),D=Z(y),I=E-(D>>1)&65535,F=D+I-32768&65535;le.a=F,le.b=I}function Re(h,y,E,D,I,F,X){const te=X<16384,$=E>I?I:E;let J=1,Q,oe;for(;J<=$;)J<<=1;for(J>>=1,Q=J,J>>=1;J>=1;){oe=0;const ye=oe+F*(I-Q),Se=F*J,Ce=F*Q,Ae=D*J,Me=D*Q;let _e,ct,Ze,St;for(;oe<=ye;oe+=Ce){let mt=oe;const nt=oe+D*(E-Q);for(;mt<=nt;mt+=Me){const Tt=mt+Ae,ht=mt+Se,ke=ht+Ae;te?(se(h[mt+y],h[ht+y]),_e=le.a,Ze=le.b,se(h[Tt+y],h[ke+y]),ct=le.a,St=le.b,se(_e,ct),h[mt+y]=le.a,h[Tt+y]=le.b,se(Ze,St),h[ht+y]=le.a,h[ke+y]=le.b):(be(h[mt+y],h[ht+y]),_e=le.a,Ze=le.b,be(h[Tt+y],h[ke+y]),ct=le.a,St=le.b,be(_e,ct),h[mt+y]=le.a,h[Tt+y]=le.b,be(Ze,St),h[ht+y]=le.a,h[ke+y]=le.b)}if(E&J){const Tt=mt+Se;te?se(h[mt+y],h[Tt+y]):be(h[mt+y],h[Tt+y]),_e=le.a,h[Tt+y]=le.b,h[mt+y]=_e}}if(I&J){let mt=oe;const nt=oe+D*(E-Q);for(;mt<=nt;mt+=Me){const Tt=mt+Ae;te?se(h[mt+y],h[Tt+y]):be(h[mt+y],h[Tt+y]),_e=le.a,h[Tt+y]=le.b,h[mt+y]=_e}}Q=J,J>>=1}return oe}function Te(h,y,E,D,I,F,X,te,$){let J=0,Q=0;const oe=X,ye=Math.trunc(D.value+(I+7)/8);for(;D.value<ye;)for(de(J,Q,E,D),J=K.c,Q=K.lc;Q>=14;){const Ce=J>>Q-14&16383,Ae=y[Ce];if(Ae.len)Q-=Ae.len,Oe(Ae.lit,F,J,Q,E,D,te,$,oe),J=ge.c,Q=ge.lc;else{if(!Ae.p)throw new Error("hufDecode issues");let Me;for(Me=0;Me<Ae.lit;Me++){const _e=Y(h[Ae.p[Me]]);for(;Q<_e&&D.value<ye;)de(J,Q,E,D),J=K.c,Q=K.lc;if(Q>=_e&&B(h[Ae.p[Me]])==(J>>Q-_e&(1<<_e)-1)){Q-=_e,Oe(Ae.p[Me],F,J,Q,E,D,te,$,oe),J=ge.c,Q=ge.lc;break}}if(Me==Ae.lit)throw new Error("hufDecode issues")}}const Se=8-I&7;for(J>>=Se,Q-=Se;Q>0;){const Ce=y[J<<14-Q&16383];if(Ce.len)Q-=Ce.len,Oe(Ce.lit,F,J,Q,E,D,te,$,oe),J=ge.c,Q=ge.lc;else throw new Error("hufDecode issues")}return!0}function je(h,y,E,D,I,F){const X={value:0},te=E.value,$=Le(y,E),J=Le(y,E);E.value+=4;const Q=Le(y,E);if(E.value+=4,$<0||$>=65537||J<0||J>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const oe=new Array(65537),ye=new Array(16384);L(ye);const Se=D-(E.value-te);if(k(h,E,Se,$,J,oe),Q>8*(D-(E.value-te)))throw new Error("Something wrong with hufUncompress");ce(oe,$,J,ye),Te(oe,ye,h,E,Q,J,F,I,X)}function qe(h,y,E){for(let D=0;D<E;++D)y[D]=h[y[D]]}function ot(h){for(let y=1;y<h.length;y++){const E=h[y-1]+h[y]-128;h[y]=E}}function z(h,y){let E=0,D=Math.floor((h.length+1)/2),I=0;const F=h.length-1;for(;!(I>F||(y[I++]=h[E++],I>F));)y[I++]=h[D++]}function Ne(h){let y=h.byteLength;const E=new Array;let D=0;const I=new DataView(h);for(;y>0;){const F=I.getInt8(D++);if(F<0){const X=-F;y-=X+1;for(let te=0;te<X;te++)E.push(I.getUint8(D++))}else{const X=F;y-=2;const te=I.getUint8(D++);for(let $=0;$<X+1;$++)E.push(te)}}return E}function Ye(h,y,E,D,I,F){let X=new DataView(F.buffer);const te=E[h.idx[0]].width,$=E[h.idx[0]].height,J=3,Q=Math.floor(te/8),oe=Math.ceil(te/8),ye=Math.ceil($/8),Se=te-(oe-1)*8,Ce=$-(ye-1)*8,Ae={value:0},Me=new Array(J),_e=new Array(J),ct=new Array(J),Ze=new Array(J),St=new Array(J);for(let nt=0;nt<J;++nt)St[nt]=y[h.idx[nt]],Me[nt]=nt<1?0:Me[nt-1]+oe*ye,_e[nt]=new Float32Array(64),ct[nt]=new Uint16Array(64),Ze[nt]=new Uint16Array(oe*64);for(let nt=0;nt<ye;++nt){let Tt=8;nt==ye-1&&(Tt=Ce);let ht=8;for(let rt=0;rt<oe;++rt){rt==oe-1&&(ht=Se);for(let Ke=0;Ke<J;++Ke)ct[Ke].fill(0),ct[Ke][0]=I[Me[Ke]++],Je(Ae,D,ct[Ke]),Be(ct[Ke],_e[Ke]),We(_e[Ke]);ze(_e);for(let Ke=0;Ke<J;++Ke)U(_e[Ke],Ze[Ke],rt*64)}let ke=0;for(let rt=0;rt<J;++rt){const Ke=E[h.idx[rt]].type;for(let Ot=8*nt;Ot<8*nt+Tt;++Ot){ke=St[rt][Ot];for(let Ht=0;Ht<Q;++Ht){const lt=Ht*64+(Ot&7)*8;X.setUint16(ke+0*Ke,Ze[rt][lt+0],!0),X.setUint16(ke+2*Ke,Ze[rt][lt+1],!0),X.setUint16(ke+4*Ke,Ze[rt][lt+2],!0),X.setUint16(ke+6*Ke,Ze[rt][lt+3],!0),X.setUint16(ke+8*Ke,Ze[rt][lt+4],!0),X.setUint16(ke+10*Ke,Ze[rt][lt+5],!0),X.setUint16(ke+12*Ke,Ze[rt][lt+6],!0),X.setUint16(ke+14*Ke,Ze[rt][lt+7],!0),ke+=16*Ke}}if(Q!=oe)for(let Ot=8*nt;Ot<8*nt+Tt;++Ot){const Ht=St[rt][Ot]+8*Q*2*Ke,lt=Q*64+(Ot&7)*8;for(let mn=0;mn<ht;++mn)X.setUint16(Ht+mn*2*Ke,Ze[rt][lt+mn],!0)}}}const mt=new Uint16Array(te);X=new DataView(F.buffer);for(let nt=0;nt<J;++nt){E[h.idx[nt]].decoded=!0;const Tt=E[h.idx[nt]].type;if(E[nt].type==2)for(let ht=0;ht<$;++ht){const ke=St[nt][ht];for(let rt=0;rt<te;++rt)mt[rt]=X.getUint16(ke+rt*2*Tt,!0);for(let rt=0;rt<te;++rt)X.setFloat32(ke+rt*2*Tt,ee(mt[rt]),!0)}}}function Je(h,y,E){let D,I=1;for(;I<64;)D=y[h.value],D==65280?I=64:D>>8==255?I+=D&255:(E[I]=D,I++),h.value++}function Be(h,y){y[0]=ee(h[0]),y[1]=ee(h[1]),y[2]=ee(h[5]),y[3]=ee(h[6]),y[4]=ee(h[14]),y[5]=ee(h[15]),y[6]=ee(h[27]),y[7]=ee(h[28]),y[8]=ee(h[2]),y[9]=ee(h[4]),y[10]=ee(h[7]),y[11]=ee(h[13]),y[12]=ee(h[16]),y[13]=ee(h[26]),y[14]=ee(h[29]),y[15]=ee(h[42]),y[16]=ee(h[3]),y[17]=ee(h[8]),y[18]=ee(h[12]),y[19]=ee(h[17]),y[20]=ee(h[25]),y[21]=ee(h[30]),y[22]=ee(h[41]),y[23]=ee(h[43]),y[24]=ee(h[9]),y[25]=ee(h[11]),y[26]=ee(h[18]),y[27]=ee(h[24]),y[28]=ee(h[31]),y[29]=ee(h[40]),y[30]=ee(h[44]),y[31]=ee(h[53]),y[32]=ee(h[10]),y[33]=ee(h[19]),y[34]=ee(h[23]),y[35]=ee(h[32]),y[36]=ee(h[39]),y[37]=ee(h[45]),y[38]=ee(h[52]),y[39]=ee(h[54]),y[40]=ee(h[20]),y[41]=ee(h[22]),y[42]=ee(h[33]),y[43]=ee(h[38]),y[44]=ee(h[46]),y[45]=ee(h[51]),y[46]=ee(h[55]),y[47]=ee(h[60]),y[48]=ee(h[21]),y[49]=ee(h[34]),y[50]=ee(h[37]),y[51]=ee(h[47]),y[52]=ee(h[50]),y[53]=ee(h[56]),y[54]=ee(h[59]),y[55]=ee(h[61]),y[56]=ee(h[35]),y[57]=ee(h[36]),y[58]=ee(h[48]),y[59]=ee(h[49]),y[60]=ee(h[57]),y[61]=ee(h[58]),y[62]=ee(h[62]),y[63]=ee(h[63])}function We(h){const y=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),X=.5*Math.cos(3*3.14159/8),te=.5*Math.cos(7*3.14159/16),$=new Array(4),J=new Array(4),Q=new Array(4),oe=new Array(4);for(let ye=0;ye<8;++ye){const Se=ye*8;$[0]=D*h[Se+2],$[1]=X*h[Se+2],$[2]=D*h[Se+6],$[3]=X*h[Se+6],J[0]=E*h[Se+1]+I*h[Se+3]+F*h[Se+5]+te*h[Se+7],J[1]=I*h[Se+1]-te*h[Se+3]-E*h[Se+5]-F*h[Se+7],J[2]=F*h[Se+1]-E*h[Se+3]+te*h[Se+5]+I*h[Se+7],J[3]=te*h[Se+1]-F*h[Se+3]+I*h[Se+5]-E*h[Se+7],Q[0]=y*(h[Se+0]+h[Se+4]),Q[3]=y*(h[Se+0]-h[Se+4]),Q[1]=$[0]+$[3],Q[2]=$[1]-$[2],oe[0]=Q[0]+Q[1],oe[1]=Q[3]+Q[2],oe[2]=Q[3]-Q[2],oe[3]=Q[0]-Q[1],h[Se+0]=oe[0]+J[0],h[Se+1]=oe[1]+J[1],h[Se+2]=oe[2]+J[2],h[Se+3]=oe[3]+J[3],h[Se+4]=oe[3]-J[3],h[Se+5]=oe[2]-J[2],h[Se+6]=oe[1]-J[1],h[Se+7]=oe[0]-J[0]}for(let ye=0;ye<8;++ye)$[0]=D*h[16+ye],$[1]=X*h[16+ye],$[2]=D*h[48+ye],$[3]=X*h[48+ye],J[0]=E*h[8+ye]+I*h[24+ye]+F*h[40+ye]+te*h[56+ye],J[1]=I*h[8+ye]-te*h[24+ye]-E*h[40+ye]-F*h[56+ye],J[2]=F*h[8+ye]-E*h[24+ye]+te*h[40+ye]+I*h[56+ye],J[3]=te*h[8+ye]-F*h[24+ye]+I*h[40+ye]-E*h[56+ye],Q[0]=y*(h[ye]+h[32+ye]),Q[3]=y*(h[ye]-h[32+ye]),Q[1]=$[0]+$[3],Q[2]=$[1]-$[2],oe[0]=Q[0]+Q[1],oe[1]=Q[3]+Q[2],oe[2]=Q[3]-Q[2],oe[3]=Q[0]-Q[1],h[0+ye]=oe[0]+J[0],h[8+ye]=oe[1]+J[1],h[16+ye]=oe[2]+J[2],h[24+ye]=oe[3]+J[3],h[32+ye]=oe[3]-J[3],h[40+ye]=oe[2]-J[2],h[48+ye]=oe[1]-J[1],h[56+ye]=oe[0]-J[0]}function ze(h){for(let y=0;y<64;++y){const E=h[0][y],D=h[1][y],I=h[2][y];h[0][y]=E+1.5747*I,h[1][y]=E-.1873*D-.4682*I,h[2][y]=E+1.8556*D}}function U(h,y,E){for(let D=0;D<64;++D)y[E+D]=Xh.toHalfFloat(T(h[D]))}function T(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(w,Math.abs(h)-1)}function G(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function j(h){const y=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(Ne(y)),D=new Uint8Array(E.length);return ot(E),z(E,D),new DataView(D.buffer)}function ae(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),E=Ra(y),D=new Uint8Array(E.length);return ot(E),z(E,D),new DataView(D.buffer)}function ne(h){const y=h.viewer,E={value:h.offset.value},D=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let F=0;const X=new Array(h.inputChannels.length);for(let Ce=0,Ae=h.inputChannels.length;Ce<Ae;Ce++)X[Ce]={},X[Ce].start=F,X[Ce].end=X[Ce].start,X[Ce].nx=h.columns,X[Ce].ny=h.lines,X[Ce].size=h.type,F+=X[Ce].nx*X[Ce].ny*X[Ce].size;const te=ie(y,E),$=ie(y,E);if($>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(te<=$)for(let Ce=0;Ce<$-te+1;Ce++)I[Ce+te]=tt(y,E);const J=new Uint16Array(65536),Q=M(I,J),oe=Le(y,E);je(h.array,y,E,oe,D,F);for(let Ce=0;Ce<h.inputChannels.length;++Ce){const Ae=X[Ce];for(let Me=0;Me<X[Ce].size;++Me)Re(D,Ae.start+Me,Ae.nx,Ae.size,Ae.ny,Ae.nx*Ae.size,Q)}qe(J,D,F);let ye=0;const Se=new Uint8Array(D.buffer.byteLength);for(let Ce=0;Ce<h.lines;Ce++)for(let Ae=0;Ae<h.inputChannels.length;Ae++){const Me=X[Ae],_e=Me.nx*Me.size,ct=new Uint8Array(D.buffer,Me.end*2,_e*2);Se.set(ct,ye),ye+=_e*2,Me.end+=_e}return new DataView(Se.buffer)}function Ee(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),E=Ra(y),D=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(D),F=new DataView(I);let X=0,te=0;const $=new Array(4);for(let J=0;J<h.lines;J++)for(let Q=0;Q<h.inputChannels.length;Q++){let oe=0;switch(h.inputChannels[Q].pixelType){case 1:$[0]=X,$[1]=$[0]+h.columns,X=$[1]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ce=E[$[0]++]<<8|E[$[1]++];oe+=Ce,F.setUint16(te,oe,!0),te+=2}break;case 2:$[0]=X,$[1]=$[0]+h.columns,$[2]=$[1]+h.columns,X=$[2]+h.columns;for(let Se=0;Se<h.columns;++Se){const Ce=E[$[0]++]<<24|E[$[1]++]<<16|E[$[2]++]<<8;oe+=Ce,F.setUint32(te,oe,!0),te+=4}break}}return F}function he(h){const y=h.viewer,E={value:h.offset.value},D=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:He(y,E),unknownUncompressedSize:He(y,E),unknownCompressedSize:He(y,E),acCompressedSize:He(y,E),dcCompressedSize:He(y,E),rleCompressedSize:He(y,E),rleUncompressedSize:He(y,E),rleRawSize:He(y,E),totalAcUncompressedCount:He(y,E),totalDcUncompressedCount:He(y,E),acCompression:He(y,E)};if(I.version<2)throw new Error("EXRLoader.parse: "+ri.compression+" version "+I.version+" is unsupported");const F=new Array;let X=ie(y,E)-2;for(;X>0;){const Ae=ve(y.buffer,E),Me=tt(y,E),_e=Me>>2&3,ct=(Me>>4)-1,Ze=new Int8Array([ct])[0],St=tt(y,E);F.push({name:Ae,index:Ze,type:St,compression:_e}),X-=Ae.length+3}const te=ri.channels,$=new Array(h.inputChannels.length);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=$[Ae]={},_e=te[Ae];Me.name=_e.name,Me.compression=0,Me.decoded=!1,Me.type=_e.pixelType,Me.pLinear=_e.pLinear,Me.width=h.columns,Me.height=h.lines}const J={idx:new Array(3)};for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=$[Ae];for(let _e=0;_e<F.length;++_e){const ct=F[_e];Me.name==ct.name&&(Me.compression=ct.compression,ct.index>=0&&(J.idx[ct.index]=Ae),Me.offset=Ae)}}let Q,oe,ye;if(I.acCompressedSize>0)switch(I.acCompression){case 0:Q=new Uint16Array(I.totalAcUncompressedCount),je(h.array,y,E,I.acCompressedSize,Q,I.totalAcUncompressedCount);break;case 1:const Ae=h.array.slice(E.value,E.value+I.totalAcUncompressedCount),Me=Ra(Ae);Q=new Uint16Array(Me.buffer),E.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Ae={array:h.array,offset:E,size:I.dcCompressedSize};oe=new Uint16Array(ae(Ae).buffer),E.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Ae=h.array.slice(E.value,E.value+I.rleCompressedSize),Me=Ra(Ae);ye=Ne(Me.buffer),E.value+=I.rleCompressedSize}let Se=0;const Ce=new Array($.length);for(let Ae=0;Ae<Ce.length;++Ae)Ce[Ae]=new Array;for(let Ae=0;Ae<h.lines;++Ae)for(let Me=0;Me<$.length;++Me)Ce[Me].push(Se),Se+=$[Me].width*h.type*2;Ye(J,Ce,$,Q,oe,D);for(let Ae=0;Ae<$.length;++Ae){const Me=$[Ae];if(!Me.decoded)switch(Me.compression){case 2:let _e=0,ct=0;for(let Ze=0;Ze<h.lines;++Ze){let St=Ce[Ae][_e];for(let mt=0;mt<Me.width;++mt){for(let nt=0;nt<2*Me.type;++nt)D[St++]=ye[ct+nt*Me.width*Me.height];ct++}_e++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function ve(h,y){const E=new Uint8Array(h);let D=0;for(;E[y.value+D]!=0;)D+=1;const I=new TextDecoder().decode(E.slice(y.value,y.value+D));return y.value=y.value+D+1,I}function Ve(h,y,E){const D=new TextDecoder().decode(new Uint8Array(h).slice(y.value,y.value+E));return y.value=y.value+E,D}function pe(h,y){const E=xe(h,y),D=Le(h,y);return[E,D]}function ue(h,y){const E=Le(h,y),D=Le(h,y);return[E,D]}function xe(h,y){const E=h.getInt32(y.value,!0);return y.value=y.value+4,E}function Le(h,y){const E=h.getUint32(y.value,!0);return y.value=y.value+4,E}function Pe(h,y){const E=h[y.value];return y.value=y.value+1,E}function tt(h,y){const E=h.getUint8(y.value);return y.value=y.value+1,E}const He=function(h,y){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(y.value,!0)):E=h.getUint32(y.value+4,!0)+Number(h.getUint32(y.value,!0)<<32),y.value+=8,E};function $e(h,y){const E=h.getFloat32(y.value,!0);return y.value+=4,E}function W(h,y){return Xh.toHalfFloat($e(h,y))}function ee(h){const y=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(y?y===31?E?NaN:1/0:Math.pow(2,y-15)*(1+E/1024):6103515625e-14*(E/1024))}function ie(h,y){const E=h.getUint16(y.value,!0);return y.value+=2,E}function fe(h,y){return ee(ie(h,y))}function Ie(h,y,E,D){const I=E.value,F=[];for(;E.value<I+D-1;){const X=ve(y,E),te=xe(h,E),$=tt(h,E);E.value+=3;const J=xe(h,E),Q=xe(h,E);F.push({name:X,pixelType:te,pLinear:$,xSampling:J,ySampling:Q})}return E.value+=1,F}function Ue(h,y){const E=$e(h,y),D=$e(h,y),I=$e(h,y),F=$e(h,y),X=$e(h,y),te=$e(h,y),$=$e(h,y),J=$e(h,y);return{redX:E,redY:D,greenX:I,greenY:F,blueX:X,blueY:te,whiteX:$,whiteY:J}}function st(h,y){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=tt(h,y);return E[D]}function Mt(h,y){const E=xe(h,y),D=xe(h,y),I=xe(h,y),F=xe(h,y);return{xMin:E,yMin:D,xMax:I,yMax:F}}function Lt(h,y){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=tt(h,y);return E[D]}function gt(h,y){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=tt(h,y);return E[D]}function wt(h,y){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],I=Le(h,y),F=Le(h,y),X=tt(h,y);return{xSize:I,ySize:F,levelMode:E[X&15],roundingMode:D[X>>4]}}function Un(h,y){const E=$e(h,y),D=$e(h,y);return[E,D]}function Fr(h,y){const E=$e(h,y),D=$e(h,y),I=$e(h,y);return[E,D,I]}function Nr(h,y,E,D,I){if(D==="string"||D==="stringvector"||D==="iccProfile")return Ve(y,E,I);if(D==="chlist")return Ie(h,y,E,I);if(D==="chromaticities")return Ue(h,E);if(D==="compression")return st(h,E);if(D==="box2i")return Mt(h,E);if(D==="envmap")return gt(h,E);if(D==="tiledesc")return wt(h,E);if(D==="lineOrder")return Lt(h,E);if(D==="float")return $e(h,E);if(D==="v2f")return Un(h,E);if(D==="v3f")return Fr(h,E);if(D==="int")return xe(h,E);if(D==="rational")return pe(h,E);if(D==="timecode")return ue(h,E);if(D==="preview")return E.value+=I,"skipped";E.value+=I}function pn(h,y){const E=Math.log2(h);return y=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function sr(h,y,E){let D=0;switch(h.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=pn(Math.max(y,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function ar(h,y,E,D){const I=new Array(h);for(let F=0;F<h;F++){const X=1<<F;let te=y/X|0;D=="ROUND_UP"&&te*X<y&&(te+=1);const $=Math.max(te,1);I[F]=($+E-1)/E|0}return I}function Or(){const h=this,y=h.offset,E={value:0};for(let D=0;D<h.tileCount;D++){const I=xe(h.viewer,y),F=xe(h.viewer,y);y.value+=8,h.size=Le(h.viewer,y);const X=I*h.blockWidth,te=F*h.blockHeight;h.columns=X+h.blockWidth>h.width?h.width-X:h.blockWidth,h.lines=te+h.blockHeight>h.height?h.height-te:h.blockHeight;const $=h.columns*h.totalBytes,Q=h.size<h.lines*$?h.uncompress(h):G(h);y.value+=h.size;for(let oe=0;oe<h.lines;oe++){const ye=oe*h.columns*h.totalBytes;for(let Se=0;Se<h.inputChannels.length;Se++){const Ce=ri.channels[Se].name,Ae=h.channelByteOffsets[Ce]*h.columns,Me=h.decodeChannels[Ce];if(Me===void 0)continue;E.value=ye+Ae;const _e=(h.height-(1+te+oe))*h.outLineWidth;for(let ct=0;ct<h.columns;ct++){const Ze=_e+(ct+X)*h.outputChannels+Me;h.byteArray[Ze]=h.getter(Q,E)}}}}}function Ti(){const h=this,y=h.offset,E={value:0};for(let D=0;D<h.height/h.blockHeight;D++){const I=xe(h.viewer,y)-ri.dataWindow.yMin;h.size=Le(h.viewer,y),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const F=h.columns*h.totalBytes,te=h.size<h.lines*F?h.uncompress(h):G(h);y.value+=h.size;for(let $=0;$<h.blockHeight;$++){const J=D*h.blockHeight,Q=$+h.scanOrder(J);if(Q>=h.height)continue;const oe=$*F,ye=(h.height-1-Q)*h.outLineWidth;for(let Se=0;Se<h.inputChannels.length;Se++){const Ce=ri.channels[Se].name,Ae=h.channelByteOffsets[Ce]*h.columns,Me=h.decodeChannels[Ce];if(Me!==void 0){E.value=oe+Ae;for(let _e=0;_e<h.columns;_e++){const ct=ye+_e*h.outputChannels+Me;h.byteArray[ct]=h.getter(te,E)}}}}}}function Nt(h,y,E){const D={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=h.getUint8(4);const I=h.getUint8(5);D.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},E.value=8;let F=!0;for(;F;){const X=ve(y,E);if(X==0)F=!1;else{const te=ve(y,E),$=Le(h,E),J=Nr(h,y,E,te,$);J===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${te}'.`):D[X]=J}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function Ei(h,y,E,D,I){const F={size:0,viewer:y,array:E,offset:D,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:zi};switch(h.compression){case"NO_COMPRESSION":F.blockHeight=1,F.uncompress=G;break;case"RLE_COMPRESSION":F.blockHeight=1,F.uncompress=j;break;case"ZIPS_COMPRESSION":F.blockHeight=1,F.uncompress=ae;break;case"ZIP_COMPRESSION":F.blockHeight=16,F.uncompress=ae;break;case"PIZ_COMPRESSION":F.blockHeight=32,F.uncompress=ne;break;case"PXR24_COMPRESSION":F.blockHeight=16,F.uncompress=Ee;break;case"DWAA_COMPRESSION":F.blockHeight=32,F.uncompress=he;break;case"DWAB_COMPRESSION":F.blockHeight=256,F.uncompress=he;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const X={};for(const Q of h.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":X[Q.name]=!0,F.type=Q.pixelType}let te=!1;if(X.R&&X.G&&X.B)te=!X.A,F.outputChannels=4,F.decodeChannels={R:0,G:1,B:2,A:3};else if(X.Y)F.outputChannels=1,F.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(F.type==1)switch(I){case zn:F.getter=fe;break;case Ui:F.getter=ie;break}else if(F.type==2)switch(I){case zn:F.getter=$e;break;case Ui:F.getter=W}else throw new Error("EXRLoader.parse: unsupported pixelType "+F.type+" for "+h.compression+".");F.columns=F.width;const $=F.width*F.height*F.outputChannels;switch(I){case zn:F.byteArray=new Float32Array($),te&&F.byteArray.fill(1,0,$);break;case Ui:F.byteArray=new Uint16Array($),te&&F.byteArray.fill(15360,0,$);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let J=0;for(const Q of h.channels)F.decodeChannels[Q.name]!==void 0&&(F.channelByteOffsets[Q.name]=J),J+=Q.pixelType*2;if(F.totalBytes=J,F.outLineWidth=F.width*F.outputChannels,h.lineOrder==="INCREASING_Y"?F.scanOrder=Q=>Q:F.scanOrder=Q=>F.height-1-Q,F.outputChannels==4?(F.format=hn,F.colorSpace=zi):(F.format=Nu,F.colorSpace=en),h.spec.singleTile){F.blockHeight=h.tiles.ySize,F.blockWidth=h.tiles.xSize;const Q=sr(h.tiles,F.width,F.height),oe=ar(Q,F.width,h.tiles.xSize,h.tiles.roundingMode),ye=ar(Q,F.height,h.tiles.ySize,h.tiles.roundingMode);F.tileCount=oe[0]*ye[0];for(let Se=0;Se<Q;Se++)for(let Ce=0;Ce<ye[Se];Ce++)for(let Ae=0;Ae<oe[Se];Ae++)He(y,D);F.decode=Or.bind(F)}else{F.blockWidth=F.width;const Q=Math.ceil(F.height/F.blockHeight);for(let oe=0;oe<Q;oe++)He(y,D);F.decode=Ti.bind(F)}return F}const fi={value:0},zr=new DataView(e),po=new Uint8Array(e),ri=Nt(zr,e,fi),di=Ei(ri,zr,po,fi,this.type);return di.decode(),{header:ri,width:di.width,height:di.height,data:di.byteArray,format:di.format,colorSpace:di.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=_t,s.magFilter=_t,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function Rn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new or,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),b=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const x=f.packedComponents,C=x.length,P=f.storageType.indexOf("Int")===0,A=1<<b*8,R=P?A*.5:0,w=1/A;S=new Float32Array(v*g);for(let M=0,L=0;M<v;M++)for(let N=0;N<C;N++){const O=x[N];S[L]=(p[L]+R)*w*O.delta+O.from,L++}}else S=p;if(m==="indices"){let x=S;S instanceof Uint8Array&&(x=new Uint16Array(S.length),x.set(S)),l.setIndex(new Xt(x,1))}else l.setAttribute(m,new Xt(S,g));a+=v*g*b}return l.computeBoundingSphere(),l}const Ca=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],rc={density:1,friction:2,restitution:.8},nS=40,oo=8,iS=`
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
`,rS=`
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
`,oS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,sS=`
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
`;function aS(i){const e={...rc},t={...rc},n={...rc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function lS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function wf(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class cS{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new In().setFromEuler(new ii(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(nS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function uS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Ca.length),r=Ca[n];const o=new us,s=new Nn(25,1,.1,100);s.position.set(0,0,25);const a=new pl({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=zi,a.toneMapping=Fi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([Rn(u),new Promise((z,Ne)=>{new tS().load(d,z,void 0,Ne)})]);m.minFilter=_t,m.magFilter=_t,m.generateMipmaps=!1,m.colorSpace=en;const v=new q(10,10,5),g=aS(r),_=lS("balloonBody-25"),p=[],b=[],S=[],x=[],C=Array.from({length:oo},()=>new Ut(0,0,-999,.01)),P=Array.from({length:oo},()=>new et(1118481)),A=z=>new Dt({uniforms:{u_matcap:{value:m},u_color:{value:new et(z.color)},u_bgColor:{value:new et(1316117)},u_roughness:{value:z.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ut(0,0,0,1)},u_selfRotation:{value:new Ut(0,0,0,1)},u_nearPositionRadiusList:{value:C.map(Ne=>Ne.clone())},u_nearColorList:{value:P.map(Ne=>Ne.clone())}},vertexShader:iS,fragmentShader:rS});for(const z of g){const Ne=A(z),Ye=new kt(f,Ne);Ye.frustumCulled=!1,Ye.scale.setScalar(z.radius),o.add(Ye),b.push(Ye),S.push(Ne),p.push(new cS(z.radius,z.density,z.friction,z.restitution,_,!1)),x.push({i:b.length-1,d2:0})}const R=new Dt({uniforms:{u_color0:{value:new et(r)},u_color1:{value:new et(1316117)},u_aspect:{value:1}},vertexShader:oS,fragmentShader:sS,depthWrite:!1}),w=new kt(new bi(90,60),R);w.position.z=-12,w.renderOrder=-1e3,o.add(w);const M=new it(0,0),L=new q,N=new q,O=new q,H=new q,V=new q,k=new q,Y=new q,B=new q,ce=new q,K=new q,de=new In,ge=.025,Oe=.1,Z=.12,re=z=>{const Ne=(e||i).getBoundingClientRect();M.x=(z.clientX-Ne.left)/Ne.width*2-1,M.y=-((z.clientY-Ne.top)/Ne.height*2-1)};window.addEventListener("pointermove",re);const le=()=>{n=(n+1)%Ca.length,r=Ca[n],b.forEach((z,Ne)=>{const Ye=g[Ne];Ye.isColored&&(z.material.uniforms.u_color.value.set(r),Ye.color=r)}),R.uniforms.u_color0.value.set(r),p.forEach(z=>z.applyImpulse())},se=()=>le();i.addEventListener("click",se),e==null||e.addEventListener("click",se);const be=()=>{const z=e||i.parentElement,Ne=z.clientWidth,Ye=z.clientHeight,Je=Ne/Math.max(Ye,1);s.fov=wf(Je,2.2,2/3,18,30),s.aspect=Je,s.updateProjectionMatrix(),a.setSize(Ne,Ye,!1),R.uniforms.u_aspect.value=Je};be(),window.addEventListener("resize",be);let Re=0,Te=performance.now();const je=performance.now(),qe=()=>{const Ne=(e||i).getBoundingClientRect();l=Ne.bottom>0&&Ne.top<window.innerHeight};window.addEventListener("scroll",qe,{passive:!0}),qe();const ot=z=>{if(Re=requestAnimationFrame(ot),!l){Te=z;return}let Ne=Math.min(.05,(z-Te)/1e3);Te=z;const Ye=t?1:2;Ne/=Ye;const Je=(z-je)/1e3,Be=wf(Je,.3,2,25,17.5);s.position.z=Be;for(let We=0;We<Ye;We++){const ze=new q(M.x,M.y,.5).unproject(s);ze.sub(s.position).normalize();const U=(0-s.position.z)/ze.z;L.copy(s.position).addScaledVector(ze,U),O.copy(L).sub(N).multiplyScalar(Z/Math.max(Ne,.001)),H.copy(L).sub(s.position);const T=H.lengthSq()||1;N.copy(L);for(let G=0;G<p.length;G++){const j=p[G];j.updateGravity(Ne),k.copy(j.velocity),Y.copy(j.position);for(let he=G+1;he<p.length;he++){const ve=p[he];ce.copy(ve.velocity),K.copy(ve.position),V.copy(Y).sub(K);const Ve=V.length(),pe=j.radius+ve.radius;if(Ve<pe&&Ve>1e-6){const ue=Math.sqrt(j.friction*ve.friction);j.frictionTot+=ue,ve.frictionTot+=ue,V.normalize(),V.multiplyScalar(.5*(Ve-pe)),Y.sub(V),K.add(V),V.normalize();const xe=k.dot(V),Le=ce.dot(V),Pe=j.mass,tt=ve.mass,He=(Pe*xe+tt*Le-tt*(xe-Le)*j.restitution)/(Pe+tt),$e=(Pe*xe+tt*Le-Pe*(Le-xe)*ve.restitution)/(Pe+tt);k.addScaledVector(V,(He-xe)/(1+ue)),ce.addScaledVector(V,($e-Le)/(1+ue)),ve.position.copy(K),ve.velocity.copy(ce)}}B.copy(Y).sub(s.position);let ae=B.dot(H)/T;ae=B.sub(ce.copy(H).multiplyScalar(ae)).length()-j.radius-ge,ae<0&&(B.copy(Y).sub(s.position).cross(H).normalize(),ce.copy(H).cross(B).normalize(),Y.sub(ce.multiplyScalar(Oe*ae)),ce.multiplyScalar(-Z/Math.max(Ne,.001)),k.add(ce),k.add(O));let ne=Y.length();if(ne>0){B.set(1,1,1).normalize();let he=1-Math.abs(B.dot(ce.copy(Y).normalize()));he*=Ne*Math.min(1,Math.max(0,ne/2))*.5,he*=G%2*2-1,de.setFromAxisAngle(B,he),ce.copy(Y).applyQuaternion(de).sub(B.copy(Y)),k.add(ce)}B.crossVectors(Y,k);let Ee=B.length();Ee/=j.inertia,Ee>0&&(B.normalize(),de.setFromAxisAngle(B,Ee*Ne),j.quaternion.premultiply(de)),j.position.copy(Y),j.velocity.copy(k),j.update(Ne),["x","y","z"].forEach(he=>{const ve=he==="z"?5.5:7.5;j.position[he]>ve&&(j.position[he]=ve,j.velocity[he]*=-.55),j.position[he]<-ve&&(j.position[he]=-ve,j.velocity[he]*=-.55)})}}for(let We=0;We<b.length;We++){const ze=b[We],U=p[We];ze.position.copy(U.position),ze.quaternion.copy(U.quaternion);const T=S[We].uniforms;T.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),T.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),T.u_bgColor.value.copy(R.uniforms.u_color1.value)}for(let We=0;We<b.length;We++){for(let T=0;T<b.length;T++)x[T].i=T,x[T].d2=We===T?0:p[We].position.distanceToSquared(p[T].position);x.sort((T,G)=>T.d2-G.d2);const ze=S[We].uniforms.u_nearPositionRadiusList.value,U=S[We].uniforms.u_nearColorList.value;for(let T=0;T<oo;T++){const G=x[T+1]?x[T+1].i:x[0].i,j=p[G];ze[T].set(j.position.x,j.position.y,j.position.z,j.radius),U[T].copy(S[G].uniforms.u_color.value)}}s.position.x+=(M.x*.9-s.position.x)*.04,s.position.y+=(M.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Re=requestAnimationFrame(ot),{cycleColor:le,destroy(){cancelAnimationFrame(Re),window.removeEventListener("pointermove",re),window.removeEventListener("resize",be),window.removeEventListener("scroll",qe),i.removeEventListener("click",se),e==null||e.removeEventListener("click",se),S.forEach(z=>z.dispose()),R.dispose(),a.dispose()}}}function un(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Kn(i){return un(i,0,1)}function Cp(i,e,t){return(t-i)/(e-i||1)}function to(i,e,t){return un(Cp(i,e,t),0,1)}function me(i,e,t,n,r,o){let s=to(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function bf(i,e,t,n,r,o){let s=Cp(e,t,i);return n+s*(r-n)}function hS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,b)=>1/(3*_*g*g+2*p*g+b),s=(g,_,p,b,S)=>_*(g*g*g)+p*(g*g)+b*g+S,a=(g,_,p,b,S)=>{const x=g*g;return _*(x*g)+p*x+b*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function pt(i){return hS(i,.35,0,0,1)}function rl(i){return i===1?1:1-Math.pow(2,-10*i)}function fS(i){return i===0?0:Math.pow(1024,i-1)}function dS(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function pS(i){return 1-Math.cos(i*Math.PI/2)}function uu(i){return Math.sin(i*Math.PI/2)}function mS(i){return-(Math.cos(Math.PI*i)-1)/2}function _S(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function hu(i){return i*i*i}function Pp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function yn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,bf(n,t,t-r,-1,0));s+=Math.max(0,bf(n,0,-r,0,1));const a=me(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function gS(i){return 1-Math.pow(1-i,3)}function vS(i){return i*i*i*i}function xS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function xi(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Tf=[{id:"blackFrameShow",weight:.55},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",weight:1.6},{id:"astronautWait",weight:.9}];function qu(i){const e=Tf.reduce((a,l)=>a+l.weight,0),t={};let n=0;for(const a of Tf){const l=a.weight/e;t[a.id]={...a,from:n,to:n+l},n+=l}function r(){const a=i.getBoundingClientRect(),l=window.innerHeight,c=a.height-l;return Math.max(0,Math.min(1,-a.top/Math.max(c,1)))}function o(a,l=a){const c=t[a],u=t[l],d=r(),f=c.from,m=u.to,v=(d-f)/Math.max(m-f,1e-6);return{ratio:Math.max(0,Math.min(1,v)),raw:v,active:d>=f&&d<=m,global:d}}function s(a,l){return o(a,l)}return{items:t,progress:r,range:o,between:s,totalWeight:e}}const yS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,SS=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,MS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",wS="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Dp=`
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
`,Lp=`
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
`,bS=`
${Dp}
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
${Lp}
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
`,TS=`
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
`,Ef=`
${Dp}
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
${Lp}
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
`,qi=5,Pa=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ES=`
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
`,AS=`
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
`,RS=`
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
`,CS=`
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
`;function Lo(i,e,t=!1){const n={minFilter:_t,magFilter:_t,format:hn,type:Ui,depthBuffer:t,stencilBuffer:!1},r=new rr(i,e,n);return t&&(r.depthTexture=new Xu(i,e),r.depthTexture.type=ns),r}function PS(i,e,t,{isMobile:n=!1}={}){const r=new it(1,1);i.getSize(r);let o=!!n,s=Lo(1,1,!0),a=Lo(1,1,!1),l=Lo(1,1,!1),c=Lo(1,1,!1),u=null;const d=[],f=[];for(let T=0;T<qi;T++)d.push(Lo(1,1)),f.push(Lo(1,1));const m=new Gu(-1,1,1,-1,0,1),v=new kt(new bi(2,2),new Vu),g=new us;g.add(v);const _=new Dt({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new it(1,1)},u_aspect:{value:new it(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Pa,fragmentShader:ES,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=[];for(let T=0;T<qi;T++){const G=3+T*2;p.push(new Dt({uniforms:{u_texture:{value:null},u_resolution:{value:new it(1,1)},u_direction:{value:new it(1,0)}},defines:{KERNEL_RADIUS:G,SIGMA:G},vertexShader:Pa,fragmentShader:AS,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const b=new Float32Array(qi),S=new Dt({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:b}},vertexShader:Pa,fragmentShader:RS,depthTest:!1,depthWrite:!1,toneMapped:!1});let x=0;const C=new Dt({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new xt},u_prevProjectionViewMatrix:{value:new xt},u_aspect:{value:new it(1,1)},u_amount:{value:1}},vertexShader:Pa,fragmentShader:CS,depthTest:!1,depthWrite:!1,toneMapped:!1}),P=new xt,A=new xt,R=new xt,w=new xt,M=new xt,L=new q,N=new ii,O=new q(1,1,1),H=new In;let V=!0,k=1,Y=!1,B=0,ce=0,K=1,de=1,ge=0,Oe=.015,Z=.6,re=.3,le=.5,se=0,be=!0,Re=1,Te=1,je=1;const qe=new it(1,0),ot=new it(0,1),z=(T,G)=>{v.material=T,i.setRenderTarget(G),i.clear(),i.render(g,m)},Ne=T=>{const G=Math.max(1,T);return 1<<Math.ceil(Math.log(G)/Math.log(2))},Ye=(T,G)=>{Re=Math.max(1,Math.floor(T)),Te=Math.max(1,Math.floor(G));const j=o?.85:1;s.setSize(Math.max(1,Math.floor(Re*j)),Math.max(1,Math.floor(Te*j))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const ae=o?4:2;let ne=Math.max(1,Math.ceil(Re/ae)),Ee=Math.max(1,Math.ceil(Te/ae));c.setSize(ne,Ee);for(let ve=0;ve<qi;ve++)d[ve].setSize(ne,Ee),f[ve].setSize(ne,Ee),ne=Math.max(1,Math.ceil(ne/2)),Ee=Math.max(1,Math.ceil(Ee/2));_.uniforms.u_texelSize.value.set(1/Re,1/Te);const he=Te/Math.sqrt(Re*Re+Te*Te)*2;_.uniforms.u_aspect.value.set(Re/Te*he,he),C.uniforms.u_aspect.value.set(Re/Math.max(Te,1),1)},Je=({blackFrameInRatio:T=0,blackTitleRatio:G=0,blackTunnelRatio:j=0,whiteFrameRatio:ae=0,whiteTunnelWaitRatio:ne=0,astronautDropRatio:Ee=0,isWhiteTunnelActive:he=!1,isBlackTunnelActive:ve=!1,isMobile:Ve=!1}={})=>{o=!!Ve;let pe=T*(Zt.lerp(0,.15,G)+Zt.clamp((j-.2)/.2,0,1)*.25);if(j>=.65){const xe=Zt.clamp((j-.65)/.1,0,1);pe=pe+(.08-pe)*xe}if(he&&(pe=0),!he&&T>.55&&j<.25){const xe=Zt.lerp(Ve?.24:.42,Ve?.12:.18,Zt.clamp(G/.5,0,1));pe=Math.max(pe,xe*Math.min(1,T))}if(ge=pe,K=j<1?Zt.lerp(1,3,Zt.clamp(j/.7,0,1)):1,he){const xe=Ve?8:16;B=Ee<1?Zt.lerp(4,2,Zt.clamp(ae/.05,0,1)):Zt.lerp(0,xe,Zt.clamp(ne/.1,0,1)),ce=Ve?.28:.42,de=Ve?.95:1,je=Ve?.55:.72,se=Zt.lerp(.45,0,Zt.clamp(ne/.1,0,1))}else{je=1;const xe=Zt.clamp(G/.25,0,1);B=Zt.lerp(Ve?22:30,Ve?5:6,xe),se=0}const ue=!he&&T>.55&&j<.2;Z=ue?.85:.6,Oe=ue?.04:Ve?.012:.02,re=ue?.15:.3,le=ue?.75:.5,ce=Ve?.15:ue?.55:.5,de=ue?1.15:1,Y=ve||he},Be=(T,G=0)=>{L.set(0,0,T),N.set(0,0,G)},We=()=>{V=!0},ze=(T,G)=>{const j=i.autoClear;i.autoClear=!0,z(T,G),i.autoClear=j},U=()=>{var pe;if(!be){i.setRenderTarget(null),i.render(e,t);return}const T=i.getRenderTarget(),G=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor((pe=e.background)!=null&&pe.isColor?e.background.getHex():0,se),i.clear();const j=e.background;e.background=null;const ae=u==null?void 0:u.mesh,ne=!!(ae!=null&&ae.visible);if(ne&&(ae.visible=!1),i.render(e,t),e.background=j,u!=null&&u.active&&u.overlayScene){for(let xe=0;xe<qi;xe++)b[xe]=0,S.uniforms[`u_blurTexture${xe}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ue=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,z(S,a),S.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Te),ae&&(ae.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else ne&&ae&&(ae.visible=!1);let Ee=s.texture;if(P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),R.copy(P).invert(),Y&&k>0?(V&&(A.copy(P),V=!1),M.compose(L,H.setFromEuler(N),O),M.invert(),w.copy(A).multiply(M),C.uniforms.u_texture.value=s.texture,C.uniforms.u_depthTexture.value=s.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(R),C.uniforms.u_prevProjectionViewMatrix.value.copy(w),C.uniforms.u_amount.value=k,ze(C,l),Ee=l.texture,A.copy(P)):(A.copy(P),V=!0),B<.05&&ge<.005){S.uniforms.u_texture.value=Ee;for(let ue=0;ue<qi;ue++)b[ue]=0,S.uniforms[`u_blurTexture${ue}`].value=Ee;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),z(S,null),i.autoClear=G,i.setRenderTarget(T);return}_.uniforms.u_texture.value=Ee,_.uniforms.u_amount.value=de,_.uniforms.u_haloStrength.value=ge,_.uniforms.u_haloWidth.value=Z,_.uniforms.u_haloRGBShift.value=Oe,_.uniforms.u_haloMaskInner.value=re,_.uniforms.u_haloMaskOuter.value=le,ze(_,c);const he=o?3:qi;let ve=c;for(let ue=0;ue<he;ue++){const xe=p[ue];xe.uniforms.u_texture.value=ve.texture,xe.uniforms.u_resolution.value.set(ve.width,ve.height),xe.uniforms.u_direction.value=qe,ze(xe,d[ue]),xe.uniforms.u_texture.value=d[ue].texture,xe.uniforms.u_resolution.value.set(d[ue].width,d[ue].height),xe.uniforms.u_direction.value=ot,ze(xe,f[ue]),ve=f[ue]}let Ve=B;if(o)Ve*=je;else{const ue=Ne(Re/2)>>1,xe=Ne(Te/2)>>1,Le=Math.max(1,Math.ceil(Math.log(ue*xe)/Math.log(2)));Ve=B*1024/Math.pow(Le,4)*.85*48*je}for(let ue=0;ue<qi;ue++){if(ue>=he){b[ue]=0;continue}const xe=(he-ue)/he;let Le=Ve*(xe+(1.2-xe*2)*ce)/Math.pow(2,he-ue-1);!o&&ue===0&&(Le*=.15),!o&&ue===1&&(Le*=.45),!o&&ue>=3&&(Le*=1.75),b[ue]=Le}S.uniforms.u_texture.value=Ee,S.uniforms.u_saturation.value=K;for(let ue=0;ue<qi;ue++){const xe=ue<he?f[ue].texture:f[he-1].texture;S.uniforms[`u_blurTexture${ue}`].value=xe}i.setRenderTarget(null),z(S,null),i.autoClear=G,i.setRenderTarget(T)};return Ye(r.x,r.y),{resize:Ye,sync:Je,render:U,setEfxOffset:Be,markEfxSync:We,setGlassPass(T){u=T||null},setEfxAmount(T){k=T},get clearAlpha(){return se},setEnabled(T){be=!!T},setScrollVelocity(T){const G=Math.min(1,Math.abs(T)*.12);x+=(G-x)*.12,S.uniforms.u_scrollPaint.value=x},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.forEach(T=>T.dispose()),f.forEach(T=>T.dispose()),_.dispose(),S.dispose(),C.dispose(),p.forEach(T=>T.dispose()),v.geometry.dispose()}}}function DS(i,e,t){return i+(e-i)*t}const Mr=class Mr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<Mr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&Mr.MAX_VERTICES_MASK,a=s+1&Mr.MAX_VERTICES_MASK;return DS(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ge(Mr,"MAX_VERTICES",512),Ge(Mr,"MAX_VERTICES_MASK",Mr.MAX_VERTICES-1);let ol=Mr;const Ci=new q,zs=class zs{constructor(){this._position=new q,this._rotation=new In,this._euler=new ii,this._scale=new q(1,1,1),this._matrix=new xt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new ol,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Ci.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Ci.multiply(this._positionScale),Ci.multiplyScalar(this._positionAmplitude*zs.FBM_NORM),this._position.copy(Ci)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Ci.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Ci.multiply(this._rotationScale),Ci.multiplyScalar(this._rotationAmplitude*zs.FBM_NORM),this._euler.set(Ci.x,Ci.y,Ci.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ge(zs,"FBM_NORM",1/.75);let Ns=zs;class fu{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Af=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],LS=26,Kr=64,IS=34,Ss=new it(1465,1024),US=`
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
`,FS=`
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
`,NS=`
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
`,OS=`
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
`,Da=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function zS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function BS(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?IS:LS,[s,a]=await Promise.all([new yr().loadAsync(`${e}assets/textures/tunnels/${r}`),Rn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Cn,s.flipY=!1,s.needsUpdate=!0;const l=new Mi;i.add(l);const c=new bi(1,1),u=new io;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let M=0,L=0;M<o;M++,L+=4){d[M]=M/o;const N=Af[M%Af.length];f[L]=N.x/Ss.x,f[L+1]=N.y/Ss.y,f[L+2]=N.w/Ss.x,f[L+3]=N.h/Ss.y,m[L]=Math.random(),m[L+1]=Math.random(),m[L+2]=Math.random(),m[L+3]=Math.random()}u.setAttribute("instanceId",new Sn(d,1)),u.setAttribute("instanceUvInfo",new Sn(f,4)),u.setAttribute("instanceRands",new Sn(m,4)),u.instanceCount=o;const v=new Dt({vertexShader:US,fragmentShader:FS,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:Ss.clone()},u_bgColor:{value:new et(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ys,blendEquation:Dn,blendSrc:Vo,blendDst:Go,blendEquationAlpha:Dn,blendSrcAlpha:ka,blendDstAlpha:ka,defines:{COUNT:o}}),g=new kt(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new io;for(const M in a.attributes)_.setAttribute(M,a.attributes[M]);a.index&&(_.index=a.index);const p=zS("diamonds-3"),b=new Float32Array(Kr*3),S=new Float32Array(Kr*3),x=new Float32Array(Kr*4),C=new q;for(let M=0,L=0,N=0;M<Kr;M++,L+=3,N+=4)b[L]=16*(p()*2-1),b[L+1]=16*(p()*2-1),b[L+2]=19-(Kr-M-1)/(Kr-1)*8,C.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[L]=C.x,S[L+1]=C.y,S[L+2]=C.z,x[N]=p(),x[N+1]=p(),x[N+2]=p(),x[N+3]=p();_.setAttribute("a_instancePosition",new Sn(b,3)),_.setAttribute("a_instanceRotationAxis",new Sn(S,3)),_.setAttribute("a_instanceRand",new Sn(x,4)),_.instanceCount=Kr;const P=[];for(let M=0;M<25;M++)P.push(new Ut(Da[M*4],Da[M*4+1],Da[M*4+2],Da[M*4+3]));const A=new Dt({vertexShader:NS,fragmentShader:OS,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new et("#689aff")},u_planes:{value:P},u_bgColor:{value:new et(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ys,blendEquation:Dn,blendSrc:ai,blendDst:ka,blendEquationAlpha:Dn,blendSrcAlpha:ai,blendDstAlpha:ai}),R=new kt(_,A);R.frustumCulled=!1,R.renderOrder=20,R.visible=!1,A.blending=Cr,A.blendSrc=Vo,A.blendDst=Go,A.blendSrcAlpha=Vo,A.blendDstAlpha=Go,l.add(R),g.renderOrder=15;const w=new et(0);return{update({whiteTunnelWaitRatio:M=0,aspect:L=1,bg:N="#000000"}={}){const O=me(M,0,.12,0,1),H=O>0;l.visible=H,g.visible=H,R.visible=H,v.uniforms.u_activeRatio.value=O,A.uniforms.u_activeRatio.value=O,v.uniforms.u_aspect.value=L,A.uniforms.u_aspect.value=L,w.set(N),v.uniforms.u_bgColor.value.copy(w),A.uniforms.u_bgColor.value.copy(w)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const La=946,Rf=2,kS=`
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
`,HS=`
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
`;function Cf(i,e,t){const n=new ml(i,e,t,hn,zn);return n.magFilter=tn,n.minFilter=tn,n.wrapS=Ln,n.wrapT=Ln,n.needsUpdate=!0,n.colorSpace=en,n}async function VS(i,{base:e}){const[t,n]=await Promise.all([Rn(`${e}assets/models/tunnels/broken_glass.buf`),Rn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Xt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(La*3),l=new Float32Array(o.length/3*4);for(let N=0,O=0;N<o.length;N+=3,O+=4)l[O]=o[N],l[O+1]=o[N+1],l[O+2]=o[N+2],l[O+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Cf(l,La,a),d=Cf(c,La,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new it(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new it(La,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new Dt({uniforms:f,vertexShader:kS,fragmentShader:HS,transparent:!0,depthWrite:!1,depthTest:!0,side:bn,toneMapped:!1}),v=new kt(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new us,_=new Mi;_.add(v),g.add(_);let p=0,b=1,S=1,x=0,C=1,P=!1;const A=new q(0,0,1),R=new In;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return P},updateFromScroll:({whiteFrameBreakRatio:N=0,astronautDropRatio:O=0,frameHeight:H=0,frameRotation:V=0,frameScale:k=1}={})=>{p=me(N,0,1,0,1,uu),b=me(O,.75,1,1,0),S=Math.max(1,H||window.innerHeight),x=V||0,C=k||1,P=p>.001&&O<1,_.visible=P,P||(v.visible=!1)},syncToCamera:(N,O=window.innerHeight)=>{if(!P||!N)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-Rf);const H=Math.tan(N.fov*Math.PI/360)*Rf*2,V=S/Math.max(O,1)*H*C;R.setFromAxisAngle(A,-x),v.quaternion.multiply(R),v.scale.setScalar(Math.max(V,1e-4));const k=p*(a-1),Y=Math.floor(k),B=Math.min(Y+1,a-1);return f.u_frameFrom.value=Y,f.u_frameTo.value=B,f.u_frameRatio.value=k-Y,f.u_fragmentScale.value=b,v.visible=!0,!0},setBackground:(N,O,H)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(O,H)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const Ms=53,Ia=16,Ua=20,Pf=["helmet","helmet_glass","glove_shoes","wearpack"],ws=["#0d2b27","#ba0000","#00b5a6","#0099ff"],oc=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Df(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Lf(i,e){const[t,n]=await Promise.all([Df(i),Df(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new ml(u,r,o,hn,Oi);return d.colorSpace=en,d.flipY=!1,d.generateMipmaps=!1,d.minFilter=_t,d.magFilter=_t,d.wrapS=Ln,d.wrapT=Ln,d.needsUpdate=!0,d}function If(i,e,t){const n=new ml(i,e,t,hn,zn);return n.magFilter=tn,n.minFilter=tn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function sc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new Sn(t,3)}const Fa=`
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
`;async function GS(i,e,t){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,b,...S]=await Promise.all([Rn(`${r}assets/models/tunnels/astronaut_animations.buf`),Rn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),Rn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new yr().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new yr().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new yr().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),Rn(`${r}assets/models/tunnels/tunnel_block_base.buf`),Rn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),Rn(`${r}assets/models/tunnels/grid_base_ld.buf`),Rn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?Rn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?Rn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new yr().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),...Pf.map(we=>Rn(`${r}assets/models/tunnels/astronaut_${we}.buf`))]),x=new us;x.background=new et(0);const C=new q(0,0,25),P=new q(0,0,24),A=45,R=new Nn(A,1,1,200);R.position.copy(C),R.lookAt(P);let w;try{w=new pl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(we){throw console.error("Goal WebGL unavailable",we),we}w.setClearColor(0,1),w.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.5)),w.outputColorSpace=zi,w.toneMapping=Fi,w.autoClear=!0,c.colorSpace=en,c.generateMipmaps=!1,c.minFilter=_t,c.magFilter=_t,u.colorSpace=en,u.generateMipmaps=!1,u.minFilter=_t,u.magFilter=_t,d.colorSpace=en,d.wrapS=d.wrapT=Wo,d.generateMipmaps=!1,d.minFilter=_t,d.magFilter=_t;const M=s.attributes.position.array,L=s.attributes.orient.array,N=M.length/3,O=N/Ms,H=Math.ceil(Math.sqrt(N)),V=Math.ceil(N/H),k=H*V,Y=new Float32Array(k*4),B=new Float32Array(k*4);for(let we=0,Xe=0,De=0;we<N;we++,Xe+=3,De+=4)Y[De]=M[Xe],Y[De+1]=M[Xe+1],Y[De+2]=M[Xe+2],Y[De+3]=1,B[De]=L[De],B[De+1]=L[De+1],B[De+2]=L[De+2],B[De+3]=L[De+3];const ce=If(Y,H,V),K=If(B,H,V),de=new Sn(new Float32Array([0,0,18]),3);de.setUsage(fr);const ge=new Sn(new Float32Array([0,0,0,1]),4);ge.setUsage(fr);const Oe=new Sn(new Float32Array([0,1,0]),3);Oe.setUsage(fr);const Z=new Sn(new Float32Array([90,91,0]),3);Z.setUsage(fr);const re=()=>{const we=new rr(1,1,{minFilter:Ji,magFilter:_t,format:hn,generateMipmaps:!0});return we.texture.wrapS=we.texture.wrapT=tl,we},le=re(),se=re();let be=le,Re=se;const Te={u_animationPositionTexture:{value:ce},u_animationOrientTexture:{value:K},u_animationTextureSize:{value:new it(H,V)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new et("#566d80")},u_bgColor:{value:new et("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new et(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new et("#aaaafb")},u_cardPosition:{value:new q}},je={u_blackTunnelTexture:{value:be.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},qe={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async we=>{const[Xe,De]=await Promise.all([Lf(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${we}_base.webp`),new yr().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${we}_nor.webp`)]);De.colorSpace=en,De.flipY=!1,De.generateMipmaps=!1,De.minFilter=_t,De.magFilter=_t,qe[we]={armb:Xe,nor:De}})),qe.helmet_glass=qe.helmet;const ot=new Mi;x.add(ot);const z=[],Ne=4,Ye=new Sn(new Float32Array(Ne*3),3);Ye.setUsage(fr);const Je=new Sn(new Float32Array(Ne*4),4);Je.setUsage(fr);const Be=new Sn(new Float32Array(Ne*3),3);Be.setUsage(fr);const We=new Sn(new Float32Array(Ne*3),3);We.setUsage(fr);for(let we=0;we<Ne;we++)Je.setXYZW(we,0,0,0,1),Be.setXYZ(we,0,1,0),We.setXYZ(we,90,91,0);const ze=[];let U=0;const T={value:0};Pf.forEach((we,Xe)=>{const De=S[Xe],Qe=new io;for(const Qt in De.attributes)Qe.setAttribute(Qt,De.attributes[Qt]);De.index&&Qe.setIndex(De.index),Qe.instanceCount=1,Qe.setAttribute("instancePos",de),Qe.setAttribute("instanceOrient",ge),Qe.setAttribute("instanceAnimationFrameFromToBlend1",Oe),Qe.setAttribute("instanceAnimationFrameFromToBlend2",Z);const at=we==="helmet_glass"||we==="card"?"helmet":we,bt=we==="helmet_glass",dt={...Te,u_armbTexture:{value:qe[at].armb},u_norTexture:{value:qe[at].nor}},zt={...Te,...je,u_armbTexture:{value:qe[at].armb},u_norTexture:{value:qe[at].nor}},Jt=new Dt({uniforms:dt,vertexShader:Fa,fragmentShader:bS,transparent:!0,blending:wi,side:bn,defines:{BONE_COUNT:Ms,IS_WHITE:!0,...bt?{IS_HELMET_GLASS:!0}:{}}}),ln=new Dt({uniforms:zt,vertexShader:Fa,fragmentShader:Ef,transparent:!0,blending:wi,side:bn,defines:{BONE_COUNT:Ms,IS_BLACK:!0,...bt?{IS_HELMET_GLASS:!0}:{}}}),gn=new kt(Qe,Jt);if(gn.frustumCulled=!1,gn.userData.whiteMat=Jt,gn.userData.blackMat=ln,ot.add(gn),z.push(gn),!bt){const Qt=new io;for(const Ri in De.attributes)Qt.setAttribute(Ri,De.attributes[Ri]);De.index&&Qt.setIndex(De.index),Qt.instanceCount=Ne,Qt.setAttribute("instancePos",Ye),Qt.setAttribute("instanceOrient",Je),Qt.setAttribute("instanceAnimationFrameFromToBlend1",Be),Qt.setAttribute("instanceAnimationFrameFromToBlend2",We);const pi=new Dt({uniforms:{...zt,u_armbTexture:{value:qe[at].armb},u_norTexture:{value:qe[at].nor},u_alpha:T},vertexShader:Fa,fragmentShader:Ef,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ys,blendEquation:Dn,blendSrc:ai,blendDst:ai,blendEquationAlpha:Dn,blendSrcAlpha:ai,blendDstAlpha:ai,side:bn,defines:{BONE_COUNT:Ms,IS_BLACK:!0,IS_CLONE:!0}}),cn=new kt(Qt,pi);cn.frustumCulled=!1,cn.renderOrder=1e3,cn.visible=!1,ot.add(cn),ze.push(cn)}});const G=new it(5,23),j=new ol;let ae=0,ne=!1;const Ee=document.createElement("canvas");Ee.width=Ee.height=11;{const we=Ee.getContext("2d");we.fillStyle="#000",we.fillRect(0,0,11,11),we.fillStyle="#f00",we.fillRect(1,1,3,9),we.fillStyle="#0f0",we.fillRect(4,1,3,9),we.fillStyle="#00f",we.fillRect(7,1,3,9)}const he=new Iy(Ee);he.needsUpdate=!0,he.minFilter=_t,he.magFilter=_t;const ve=await new yr().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ve.minFilter=tn,ve.magFilter=tn,ve.colorSpace=en,ve.flipY=!1;const Ve=new bi(.2,.15).translate(0,1.68,.1);Ve.setAttribute("boneIndices",new Xt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),Ve.setAttribute("boneWeights",new Xt(new Float32Array([1,0,1,0,1,0,1,0]),2)),Ve.setAttribute("tangent",new Xt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),Ve.setAttribute("ao",new Xt(new Float32Array([1,1,1,1]),1));const pe=new io;for(const we in Ve.attributes)pe.setAttribute(we,Ve.attributes[we]);Ve.index&&pe.setIndex(Ve.index),pe.instanceCount=1,pe.setAttribute("instancePos",de),pe.setAttribute("instanceOrient",ge),pe.setAttribute("instanceAnimationFrameFromToBlend1",Oe),pe.setAttribute("instanceAnimationFrameFromToBlend2",Z);const ue=new Dt({uniforms:{...Te,u_cardLedTexture:{value:he},u_cardTexture:{value:ve},u_cardColor:{value:new et("#ddddff")},u_cardUvOffset:{value:new it(0,0)},u_cardTextureSize:{value:G},u_cardOpacity:{value:0}},vertexShader:Fa,fragmentShader:TS,transparent:!0,depthTest:!1,depthWrite:!1,side:bn,blending:Ys,blendEquation:Dn,blendSrc:ai,blendDst:ai,blendEquationAlpha:Dn,blendSrcAlpha:ai,blendDstAlpha:ai,defines:{BONE_COUNT:Ms}}),xe=new kt(pe,ue);xe.frustumCulled=!1,xe.renderOrder=100,xe.visible=!1,ot.add(xe);const Le=new Mi;x.add(Le);const Pe=new Ns;Pe.positionAmplitude=2,Pe.positionFrequency=1,Pe._enableRotationNoise=!1;const tt=Pe.position;let He=0,$e=1,W=typeof window<"u"?window.scrollY:0,ee=1;const ie=(we,Xe)=>{const De=new io;for(const dt in we.attributes)De.setAttribute(dt,we.attributes[dt]);we.index&&De.setIndex(we.index);const Qe=new Float32Array(Ia);for(let dt=0;dt<Ia;dt++)Qe[dt]=dt;De.setAttribute("a_instanceId",new Sn(Qe,1)),De.instanceCount=Ia;const at=new Dt({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:tt},u_time:{value:0}},vertexShader:MS,fragmentShader:wS,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ia,...Xe?{IS_WALL:!0}:{}}}),bt=new kt(De,at);return bt.frustumCulled=!1,Le.add(bt),at},fe=ie(f,!1),Ie=ie(m,!0),Ue=await BS(x,{base:r,isMobile:n,sharedTime:Te.u_time}),st=new Dt({uniforms:{u_color:{value:new et(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:wi}),Mt=new kt(new bi(200,200),st);Mt.position.z=-80,Mt.renderOrder=-10,x.add(Mt);const Lt=new Mi;x.add(Lt);const gt=await Lf(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);gt.wrapS=gt.wrapT=Wo,b.colorSpace=en,b.flipY=!1,b.wrapS=b.wrapT=Wo;const wt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:be.texture},u_greebleArmbTexture:{value:gt},u_greebleNormalTexture:{value:b},u_resolution:{value:new it(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new et(ws[0])},u_color2:{value:new et(oc[0])}},Un=(we,Xe,De)=>{const Qe=new io;for(const zt in we.attributes)Qe.setAttribute(zt,we.attributes[zt]);we.index&&Qe.setIndex(we.index);const at=we.attributes.position.count;Qe.getAttribute("ao")||Qe.setAttribute("ao",new Xt(new Float32Array(at).fill(1),1)),Qe.getAttribute("areaRatio")||Qe.setAttribute("areaRatio",new Xt(new Float32Array(at),1)),Qe.getAttribute("height")||Qe.setAttribute("height",new Xt(new Float32Array(at).fill(1),1)),Qe.getAttribute("cluster")||Qe.setAttribute("cluster",new Xt(new Float32Array(at),1)),Qe.setAttribute("instancePos",sc(Xe.attributes.position)),Qe.setAttribute("instanceGridIds",sc(Xe.attributes.gridIds)),Qe.setAttribute("instanceAxis",sc(Xe.attributes.rotAxis)),Qe.instanceCount=Xe.attributes.position.count;const bt=new Dt({uniforms:wt,vertexShader:yS,fragmentShader:SS,side:bn,transparent:!1,depthWrite:!0,blending:Cr,defines:{GRID_SIZE:Ua,...De?{IS_HD:!0}:{}}}),dt=new kt(Qe,bt);return dt.frustumCulled=!1,dt.renderOrder=De?2:1,Lt.add(dt),dt};Un(v,g,!1),o&&_&&p&&Un(_,p,!0);let Fr=0,Nr=0,pn=0,sr=A,ar=0,Or=-80,Ti=0;const Nt=new Ns;Nt.positionFrequency=.2,Nt.rotationFrequency=.15,Nt.positionAmplitude=0,Nt.rotationAmplitude=0;const Ei=new fu(new q,1,.65,1.3),fi=new fu(new q,1,.85,1.1),zr=Array.from({length:Ne},()=>{const we=new Ns;return we.positionFrequency=.2,we.rotationFrequency=.6,we.positionAmplitude=12,we.rotationAmplitude=10,we}),po=Float32Array.from({length:Ne+1},(we,Xe)=>Xe===0?0:Math.random()*2),ri=new Float32Array(Ne),di=new Float32Array(Ne),h=new q,y=new In,E=new xt,D=new xt,I=new q,F=new q,X=new In,te=new ii,$=new q(1,1,1),J=new et,Q=new et,oe=new q,ye=new q;let Se=0,Ce=0,Ae=0,Me=0,_e=.08;const ct=.1;let Ze=!1,St=0,mt=0,nt=0;window.addEventListener("pointermove",we=>{Se=we.clientX/Math.max(window.innerWidth,1)*2-1,Ce=we.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Ze=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Ze=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Ze=!1},{passive:!0});const Tt=()=>{R.near=1,R.far=200,R.position.copy(C),R.up.set(0,1,0),R.lookAt(P),R.fov=sr,oe.set(0,0,-1).applyQuaternion(R.quaternion);let we=ye.copy(P).sub(R.position).dot(oe);const Xe=R.fov,De=Xe+pn,Qe=Math.max(1,Math.min(170,De));let at=we*Math.tan(Xe/360*Math.PI/2)/Math.tan(Qe/360*Math.PI/2)-we;Number.isFinite(at)||(at=0),R.translateZ(at),R.fov=Xe,we+=at,R.translateZ(we*-1);const bt=n?_e*.35:_e,dt=Math.max(-1,Math.min(1,Ce))*bt,zt=Math.max(-1,Math.min(1,-Se))*bt;Ae+=(dt-Ae)*ct,Me+=(zt-Me)*ct,te.set(Ae,Me,0),X.setFromEuler(te),R.quaternion.multiply(X),R.translateZ(we),R.updateProjectionMatrix()},ht=we=>{if(Nt.update(we),Ei.update(we,Nt.position),I.copy(Nt.euler),fi.update(we,I),te.set(fi.value.x,fi.value.y,fi.value.z),X.setFromEuler(te),D.compose(Ei.value,X,$),E.compose(h,y,$),E.multiply(D),E.decompose(I,X,F),de.setXYZ(0,I.x,I.y,I.z),ge.setXYZW(0,X.x,X.y,X.z,X.w),de.needsUpdate=!0,ge.needsUpdate=!0,gl=1+Math.min(3.5,Ei.valueVel.length()*.2+fi.valueVel.length()*.2),U>.01&&!jt&&!kr){for(let Xe=0;Xe<Ne;Xe++){const De=zr[Xe];De.positionFrequency=.2,De.rotationFrequency=.6,De.positionAmplitude=12,De.rotationAmplitude=10,De.update(we),E.compose(h,y,$),E.multiply(De.matrix),E.decompose(I,X,F);const Qe=Xe/Math.max(Ne-1,1),at=me(U,Qe*.3,.7+Qe*.3,1,0,mS);F.set(de.getX(0),de.getY(0),de.getZ(0)),I.lerp(F,at),Ye.setXYZ(Xe,I.x,I.y,I.z),Je.setXYZW(Xe,X.x,X.y,X.z,X.w)}Ye.needsUpdate=!0,Je.needsUpdate=!0}},ke=i.parentElement||e,rt=qu(e);let Ke=0,Ot=0,Ht=0,lt=0,mn=0,ta=0,Br=0,na=0,mo=0,Fn=0,Yu=0,kr=!0,_n=!1,jt=!1,hs=0,lr=0,gl=1,vl=0,$u=performance.now(),ia=!1,Zu=!1;const on=PS(w,x,R,{isMobile:n});let Ai=null;try{Ai=await VS(x,{base:r}),on.setGlassPass(Ai)}catch(we){console.warn("Broken glass failed to load",we)}const _o=()=>{var zt;const we=(zt=ke==null?void 0:ke.querySelector)==null?void 0:zt.call(ke,"[data-goal-screen-clip]"),Xe=ke==null?void 0:ke.classList.contains("is-windowed"),De=Xe&&we?we:ke;let Qe=(De==null?void 0:De.clientWidth)||window.innerWidth,at=(De==null?void 0:De.clientHeight)||window.innerHeight;!Xe&&n&&window.visualViewport&&(Qe=Math.round(window.visualViewport.width)||Qe,at=Math.round(window.visualViewport.height)||at),R.aspect=Qe/Math.max(at,1),Tt(),w.setSize(Qe,at,!1),on.resize(Qe,at),wt.u_resolution.value.set(Qe,at);const bt=Math.max(1,Math.floor(Qe*.25)),dt=Math.max(1,Math.floor(at*.25));(le.width!==bt||le.height!==dt)&&(le.setSize(bt,dt),se.setSize(bt,dt))};_o(),window.addEventListener("resize",_o);const Ku=(we,Xe,De=100)=>{const Qe=we.attributes.position.array,at=we.attributes.orient.array,bt=Math.min(Math.floor(Xe),De-1),dt=Math.min(Math.ceil(Xe),De-1),zt=Xe-Math.floor(Xe),Jt=new q().fromArray(Qe,bt*3).lerp(new q().fromArray(Qe,dt*3),zt),ln=new In().fromArray(at,bt*4).slerp(new In().fromArray(at,dt*4),zt);return{p:Jt,q:ln}},ra=()=>{var ps,It;if(!e)return;const we=window.innerHeight,Xe=window.scrollY||0;if(Xe!==W&&(ee=Xe>W?1:-1,W=Xe),mn=rt.range("blackFrameIn").ratio,Ht=rt.range("blackTitle").ratio,lt=rt.range("blackTunnel").ratio,ke!=null&&ke.classList.contains("is-windowed")&&_o(),Br=rt.range("whiteTunnel").ratio,Ke=rt.between("whiteTunnel","whiteFrameOut").ratio,na=rt.range("whiteFrameOut").ratio,ta=rt.range("whiteFrameBreak").ratio,Yu=rt.between("whiteTunnel","whiteFrameBreak").ratio,Fn=rt.between("whiteFrameBreak","astronautDrop").ratio,mo=((ps=rt.range("astronautWait"))==null?void 0:ps.ratio)??0,nt=rt.between("whiteFrameBreak","astronautWait").ratio,kr=Ht<1,_n=lt<1&&!kr,jt=Ke<=1&&!_n&&!kr,Ot=jt?xi(0,.15,Yu):1,on.sync({blackFrameInRatio:mn,blackTitleRatio:Ht,blackTunnelRatio:lt,whiteFrameRatio:Br,whiteTunnelWaitRatio:mo,astronautDropRatio:Fn,isWhiteTunnelActive:jt,isBlackTunnelActive:_n,isMobile:n}),Ai){const At=e.querySelector("#home-goal-image-out"),Xn=At==null?void 0:At.getBoundingClientRect(),ur=Xn&&Xn.height>8?Xn.height:(ke==null?void 0:ke.clientHeight)||we,Bi=me(na,0,1,1.15,1),ms=me(na,0,1,-.12,0);Ai.updateFromScroll({whiteFrameBreakRatio:ta,astronautDropRatio:Fn,frameHeight:ur,frameRotation:ms,frameScale:Bi})}Te.u_whiteTunnelRatio.value=Ke,Te.u_showRatio.value=Ot,Te.u_frameOutRatio.value=ta,fe.uniforms.u_ratio.value=Ke,Ie.uniforms.u_ratio.value=Ke,fe.uniforms.u_ratioInverse.value=1-Ke,Ie.uniforms.u_ratioInverse.value=1-Ke,Te.u_ambientColor.value.set(jt&&Fn<1?"#6a7f94":"#566d80");const De=new et(jt&&Fn<1?"#ffffff":"#000000");st.uniforms.u_color.value.copy(De),x.background=null,w.setClearColor(De,on.clearAlpha),Te.u_bgColor.value.copy(De),ke&&!ke.classList.contains("is-windowed")&&(ke.style.background=De.getStyle());const Qe=ke==null?void 0:ke.classList.contains("is-windowed");Qe?(document.documentElement.style.background="",document.body.style.background=""):jt&&Fn<1?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):_n||kr?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Le.visible=jt&&Fn<1,Lt.visible=_n;const at=document.getElementById("header");at&&((ke==null?void 0:ke.classList.contains("is-pinned"))?jt&&Fn<1?at.style.color="#000000":at.style.color="#ffffff":at.style.color="");const bt=e.dataset.goalPhase==="black-tunnel",dt=e.dataset.goalPhase==="white";(_n&&!bt||jt&&!dt)&&on.markEfxSync();const zt=jt;for(const At of z){const Xn=zt?At.userData.whiteMat:At.userData.blackMat;At.material!==Xn&&(At.material=Xn)}U=_n?xi(.2,.4,lt):0,T.value=U;for(const At of ze)At.visible=!jt&&U>.01;let Jt;if(jt){const At=Ke<1?me(Ke,0,1,0,79):me(Fn,0,1,79,99);Jt=Ku(l,At,100),Jt.p.y-=(n?0:.4)*xS(Fn)}else{const At=me(Math.max(mn,.001),0,1,.28,.4),Xn=Math.max(Ht,Qe?At:0);Jt=Ku(a,100*hu(Math.min(Xn,1)),100)}if(h.copy(Jt.p),y.copy(Jt.q),Nt.positionFrequency=.2,Nt.rotationFrequency=.15,Nt.positionAmplitude=0,Nt.rotationAmplitude=0,_n){const At=lt;Nt.positionFrequency=.2+.5*At,Nt.rotationFrequency=.15,Nt.positionAmplitude=5*At,Nt.rotationAmplitude=60*At}else jt&&(Nt.positionFrequency=me(Br,0,.45,.5,.2),Nt.rotationFrequency=me(Br,0,.45,.4,.15),Nt.positionAmplitude=me(Br,0,.75,5,0),Nt.rotationAmplitude=me(Br,0,.75,15,0));ot.visible=Ot>.02;const ln=window.innerHeight||1,gn=(It=ke==null?void 0:ke.querySelector)==null?void 0:It.call(ke,"[data-goal-screen-clip]"),Qt=Math.max(1,Qe&&(gn==null?void 0:gn.clientHeight)||(ke==null?void 0:ke.clientHeight)||ln),pi=mn<1?mn:1-Br,cn=Qe?Math.max(Qt*(n?1.35:1.65),ln*(n?.55:.72)):Qt*(n?.72:.55),Ri=Zt.lerp(cn,ln,pi),Hr=C.distanceTo(P),cr=A/180*Math.PI,fs=Math.tan(cr/2)*Hr*2*(ln/Math.max(Ri,1));sr=Math.atan(fs/2/Hr)*2/Math.PI*180,jt?pn=me(Ke,0,1,60,0):_n?(pn=Math.sin(lt*10+He)*(n?4.5:7.5)*xi(0,.2,lt),Lt.position.z=-80*to(.2,0,lt)):(pn=me(mn,0,1,Qe?n?-10:-18:n?12:20,0),Lt.position.z=-80),_e=.08*xi(.5,1,Ht)+.02,Ke>0&&(_e*=me(rt.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),_e=me(mo,0,.1,_e,.05),mt=(1-St)*ee*2.5*me(mn,0,.5,0,1)*me(mo,0,.25,1,0),Tt(),je.u_frameIn.value=mn,je.u_sunFactor.value=_n?1-xi(.1,.2,lt):1,je.u_blackTunnelRatio.value=_n?xi(.1,.3,lt):0,je.u_endRatio.value=_n?xi(.65,.9,lt):0,je.u_offsetZ.value=wt.u_offsetZ.value;const oa=me(Fn,1,0,.2,1)*(ta>0?1:0);Te.u_tintColor.value.setStyle("#2533c2").multiplyScalar(oa);const ds=ke.getBoundingClientRect();ia=ds.bottom>0&&ds.top<we,ia&&!Zu&&kr&&(hs=0,lr=0),Zu=ia,e.dataset.goalPhase=jt?"white":_n?"black-tunnel":mn<.98||ke!=null&&ke.classList.contains("is-windowed")?"window":"title"},Np=we=>{if(!_n){wt.u_showRatio.value=0,on.setEfxOffset(0,0);return}wt.u_showRatio.value=fS(to(0,.1,lt));const Xe=wt.u_outBloomFromToStrength.value;Xe.z=me(lt,.65,.75,0,.2),Xe.z=me(lt,.75,.85,Xe.z,.15),Xe.z=me(lt,.85,1,Xe.z,.15),Xe.x=me(lt,.75,.85,20,60),Xe.x=me(lt,.9,1,Xe.x,30);const De=me(lt,.6,1,0,1,pS);wt.u_blackTunnelTransformRatio.value=De;const Qe=ee*we;Fr+=Qe*to(.1,.3,lt)*me(De,0,.25,1,.5),Nr+=Qe*me(De,0,.25,1.5,1);const at=Fr,bt=Math.floor(at),dt=at-bt,zt=(bt+Pp(dt))*Ua+Nr*Ua+lt*Ua*10,Jt=-80*to(.2,0,lt);let ln=Jt-Or,gn=zt-ar;(Math.abs(gn)>8||Math.abs(ln)>20)&&(gn=0,ln=0),Ti=ln+gn,Or=Jt,ar=zt,Lt.position.z=Jt,wt.u_offsetZ.value=zt,je.u_offsetZ.value=zt,wt.u_time.value=He;const Qt=ws.length*me(lt,.2,1,0,1),pi=Math.floor(Qt),cn=Math.min(Math.ceil(Qt),ws.length-1),Hr=Qt-pi>.5?1:0;J.set(ws[pi]),Q.set(ws[cn]),J.lerp(Q,Hr),wt.u_color1.value.copy(J),J.set(oc[pi]),Q.set(oc[cn]),J.lerp(Q,Hr),wt.u_color2.value.copy(J);const cr=n?.45:1;on.setEfxOffset(Ti*me(lt,0,.2,0,1)*cr,Ti*De*.01*cr),on.setEfxAmount(me(lt,0,.25,.35,.85)*(n?.35:1)),pn=Math.sin(lt*10+He)*(n?4.5:7.5)*xi(0,.2,lt)};let xl=0;const Op=we=>{if(!jt){Ue.update({whiteTunnelWaitRatio:0,aspect:R.aspect}),xl=Ke;return}Pe.update(we),fe.uniforms.u_time.value=He,Ie.uniforms.u_time.value=He,fe.uniforms.u_fbm.value=tt,Ie.uniforms.u_fbm.value=tt;let Xe=Ke-xl;Math.abs(Xe)>.08&&(Xe=0);const De=n?.35:1,Qe=Zt.clamp(-Xe*me(Ke,0,.9,500,0,uu)*De,-1,1),at=Zt.clamp(-Xe*me(Ke,0,.8,45,0,uu)*De,-1,1);on.setEfxOffset(Qe,at),on.setEfxAmount(me(Ke,.75,1,1,0)*(n?.4:1)),xl=Ke;const bt=jt&&Fn<1?"#ffffff":"#000000",dt=n?Math.max(R.aspect,.95):Math.max(R.aspect,.01);Ue.update({whiteTunnelWaitRatio:mo,aspect:dt,bg:bt})},ju=()=>ra();window.addEventListener("scroll",ju,{passive:!0}),ra();const Ju=we=>{var ps;const Xe=Math.min(.05,Math.max(0,we||.016666666666666666));if($u=performance.now(),!ia){if(ke){const It=ke.getBoundingClientRect();It.bottom>0&&It.top<window.innerHeight&&on.render()}return}St+=((Ze?1:0)-St)*.1,$e=me(St,0,1,1,.3)*Xe,$e=me(mn,0,1,Xe,$e),$e=me(nt,.5,.75,$e,Xe),He+=$e,Te.u_time.value=He,mt=(1-St)*ee*2.5*me(mn,0,.5,0,1)*me(mo,0,.25,1,0),Np($e),Op($e),ht($e),_n&&(pn=Math.sin(lt*10+He)*7.5*xi(0,.2,lt)),Tt();const De=Fn,Qe=me(De,0,.1,0,1)*me(De,.9,1,1,0);Te.u_loopLinearBlend.value=Qe;const at=me(De,.9,1,0,1,hu);ne=at>0;let bt,dt,zt,Jt=!0;if(De<.5)lr=0,bt=Ht<.08?xi(-.3,1,Ht)*.25:xi(-.3,1,Ht)*.75,dt=0,zt=89,ue.uniforms.u_cardOpacity.value=0;else{bt=me(De,.9,1,0,1),dt=140,zt=Math.min(O-1,287);const It=Math.min(2,Math.max(0,.5+Math.max(0,j.getFbm(He*8,3)+.5)*4));ue.uniforms.u_cardOpacity.value=It*at,De<1?(lr=Math.max(0,lr),Jt=!1):lr=0}lr===0&&(hs+=$e*bt*gl),Qe===1&&(hs=0);const ln=zt-dt+1,gn=po[0];let pi=(gn+hs)*60%ln,cn=Math.floor(pi),Ri=(cn+1)%ln+dt;cn+=dt,Ri<cn&&(Jt||(Ri=cn=dt,hs=-gn,lr=Number.POSITIVE_INFINITY));const Hr=pi-Math.floor(pi);Oe.setXYZ(0,cn,Ri,Jt||Ri>=cn?Hr:0),Oe.needsUpdate=!0;const cr=me(na+De,.9,2,90,139,vS),fs=Math.floor(cr),oa=Math.ceil(cr),ds=cr-fs;Z.setXYZ(0,fs,oa,ds),Z.needsUpdate=!0,xe.visible=De>=.95&&Ot>.02,ae=ne?ae+$e:0;{const It=G.x,At=G.y,Xn=Math.floor(10*ae%(It*(At+1))),ur=Xn/(It*(At+1)),Bi=to(0,.15,ur)*to(1,.9,ur);Te.u_faceLedLight.value=Bi,ue.uniforms.u_cardUvOffset.value.set(Xn%It/It,(At-Math.floor(Xn/It))/At)}if(Te.u_cardPosition.value.set(de.getX(0),de.getY(0)+.9,de.getZ(0)),U>.01&&!jt&&!kr){for(let It=0;It<Ne;It++){ri[It]=(ri[It]+.2*$e)%1,lr===0&&(di[It]+=$e*bt*gl);const ur=(Zt.lerp(0,po[It+1],U)+di[It])*60%ln;let Bi=Math.floor(ur),ms=(Bi+1)%ln+dt;Bi+=dt,ms<Bi&&!Jt&&(ms=Bi=dt);const Bp=ur-Math.floor(ur);Be.setXYZ(It,Bi,ms,Bp),We.setXYZ(It,fs,oa,ds)}Be.needsUpdate=!0,We.needsUpdate=!0}if((ps=on.setScrollVelocity)==null||ps.call(on,Math.abs(mt)+Math.abs(ee)*.5),_n){const It=wt.u_resolution.value.clone();Le.visible=!1,Mt.visible=!1,ot.visible=Ot>.02,wt.u_feedbackTexture.value=be.texture,wt.u_resolution.value.set(Re.width,Re.height),w.setRenderTarget(Re),w.setClearColor(0,0),w.clear(),w.render(x,R),w.setRenderTarget(null),wt.u_resolution.value.copy(It);const At=be;be=Re,Re=At,wt.u_feedbackTexture.value=be.texture,je.u_blackTunnelTexture.value=be.texture,Mt.visible=!0}w.setClearColor(Te.u_bgColor.value,on.clearAlpha),on.render()},Qu=we=>{vl=requestAnimationFrame(Qu);const Xe=Math.min(.05,(we-$u)/1e3);we-eh>50&&Ju(Xe)};let eh=0;const zp=we=>{eh=performance.now(),Ju(we)};return vl=requestAnimationFrame(Qu),requestAnimationFrame(()=>{_o(),ra(),on.render()}),{resize:_o,updateScroll:ra,tickFrame:zp,getAutoScrollSpeed:()=>mt,getGlassRatio:()=>(Ai==null?void 0:Ai.ratio)??0,getAstronautDropRatio:()=>Fn,getWhiteTunnelRatio:()=>Ke,destroy(){cancelAnimationFrame(vl),window.removeEventListener("resize",_o),window.removeEventListener("scroll",ju),Ai==null||Ai.dispose(),le.dispose(),se.dispose(),on.destroy(),w.dispose()}}}function WS(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=qu(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const b=Array.from(p.querySelectorAll(".goal-word"));if(b.length<2){b.forEach(P=>{P._offsetX=0});return}b.forEach(P=>{P.style.transform="translateZ(0)"});let S=g;b.forEach(P=>{const A=P.getBoundingClientRect();P._domRect=A,S-=A.width});let x=0;const C=S/(b.length-1);b.forEach(P=>{P._offsetX=-P._domRect.left+_+x,x+=P._domRect.width+C})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,b=me(_,0,.25,0,1);r.progress();const S=window.innerHeight;if(t&&!t.classList.contains("is-windowed")){const M=i.getBoundingClientRect(),L=window.scrollY||0,O=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+L,H=L>=O-1&&M.bottom>S,V=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",H),u&&(u.style.height=H?`${S}px`:"0px"),H&&!V?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!H&&V&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),window.dispatchEvent(new Event("resize"))),t.style.background=b>.05||_>.01?"#ffffff":"#000000"}let x=me(v,a,l,0,1);const C=x>0&&x<1;let P=me(x,.5,1,1,o()?9:12,hu);P*=me(x,0,.15,.85,1,gS);let A=me(x,.9,1,1,0);A*=me(x,0,.05,0,1),A*=me(g,0,.12,1,0);const R=me(x,.4,.6,0,1,Pp);if(e.classList.toggle("is-on-black",b<.5),e.style.opacity=String(A),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=C&&A>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(M=>{const L=M._offsetX||0;M.style.transform=`translateX(${R*L}px)`}),s){const M=me(g,.02,.15,1,0);s.style.opacity=String(M),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const w=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":w<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:b}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Na(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function XS(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function jr(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function qS(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=jr(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=jr(document.getElementById("home-reel-desc"),2),l=jr(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),v.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(K=>{K.style.overflow="hidden",K.style.display="block",K.style.position="relative"}),f=[...Na(r,"word"),...Na(o,"word")],f.forEach(K=>{K.style.position="relative",K.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Na(a,"word"),a.style.overflow="hidden"),_())})();const b=document.getElementById("home-featured"),S=jr(document.getElementById("home-featured-title"),2),x=jr(document.getElementById("home-featured-disclaimer"),2),C=jr(document.getElementById("home-featured-cta"),1);let P=[],A=[],R=!0;const w=()=>{R=!1,S&&(S._time=0,S._animating=!1),x&&(x._time=0,x._animating=!1),C&&(C._time=0,C._animating=!1),i()||(A.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),P.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",P=XS(S),x){const K=x.textContent.trim();x.textContent="";const de=document.createElement("div");de.className="line",de.textContent=K,de.style.transform="translate3d(0, 100%, 0)",de.style.willChange="transform";const ge=document.createElement("div");ge.style.position="relative",ge.style.overflow="hidden",ge.appendChild(de),x.appendChild(ge),A=[de]}C&&(C.style.transform="translate3d(0, 150%, 0) rotate(10deg)",C.style.opacity="0",C.style.overflow="hidden"),w()}})();const L=jr(document.getElementById("home-goal-title"),2);let N=[];L&&(L.style.overflow="hidden",N=Na(L,"word"),N.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}));let O=0,H=!1,V=0;const k=K=>{if(!t||!e)return;if(!yn(e).isActive){g=!0;return}g&&(g=!1,_());const ge=yn(t),Oe=yn(s||a),re=window.innerHeight*.1;if(t._time=un(t._time+(t._animating?K:-K),0,2),a&&(a._time=un(a._time+(a._animating?K:-K),0,2)),l&&(l._ratio=Kn(l._ratio+(l._animating?K:-K))),ge.screenRatio>-1&&(t._animating=!0,i()?f.forEach(le=>{le.style.transform="translate3d(0, 0, 0)"}):f.forEach((le,se)=>{let be,Re;se<2?(be=me(t._time-Math.abs(2-se)/10,.5,1.2,-m,0,pt),Re=me(t._time-se/10,0,1,100,0,pt)):(be=0,Re=me(t._time-se/10,0,1,-100,0,pt)),le.style.transform=`translate3d(${be}px, ${Re}%, 0)`}),n)){const le=ge.showScreenOffset*-re*.5;n.style.transform=`translate3d(0, ${le}px, 0)`}if(Oe.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const le=Oe.showScreenOffset*-re*1.5;if(a&&(a.style.transform=`translate3d(0, ${le}px, 0)`,i()?v.forEach(se=>{se.style.opacity="1",se.style.transform="translate3d(0, 0, 0)"}):v.forEach((se,be)=>{const Re=me(a._time-be/100,0,1,.1,1,rl),Te=me(a._time-be/100,0,1,100,0,rl);se.style.opacity=String(Re),se.style.transform=`translate3d(0, ${Te}%, 0)`})),l){const se=Oe.showScreenOffset*-re*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${se}px) translate3d(0, ${me(l._ratio,0,1,150,0,pt)}%, 0) rotate(${me(l._ratio,0,1,10,0,pt)}deg)`,l.style.opacity=String(pt(l._ratio))):(l.style.transform=`translateY(${se}px)`,l.style.opacity="1")}}if(c){const le=yn(c),se=Kn(me(le.showScreenOffset,.05,.85,0,1,pt));c.style.opacity=String(se),c.style.transform=`translate3d(0, ${me(se,0,1,80,0,pt)}px, 0) scale(${me(se,0,1,.96,1,pt)})`}if(u){const le=yn(u);V=Kn(me(le.showScreenOffset,0,.7,0,1,pt)),u.style.opacity=String(.4+V*.6),u.style.transform=`translate3d(0, ${me(V,0,1,60,0,pt)}px, 0) scale(${me(V,0,1,.94,1,pt)})`,H=V>.9,O=un(O+(H?K:-K*2),0,1.4),d.forEach((se,be)=>{const Re=me(O-be/10,0,.6,0,1,pt),Te=me(O-be/10,0,.6,0,180,pt);se.style.transform=`scale(${Re}) rotate(${Te}deg)`,se.style.display="inline-block"})}},Y=K=>{if(!b||!S)return;if(yn(b).isActive){R&&w();const ge=yn(S),Oe=yn(x),Z=yn(C);S._time=un(S._time+(S._animating?K:-K),0,2),x&&(x._time=un(x._time+(x._animating?K:-K),0,2)),C&&(C._time=un(C._time+(C._animating?K:-K),0,1)),ge.screenRatio>-1&&(S._animating=!0,i()?P.forEach(re=>{re.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):P.forEach((re,le)=>{const se=me(S._time*1.5-le/20,0,1,1,0,pt),be=me(S._time*1.5-le/20,0,1,10,0,pt);re.style.transform=`translate3d(0, ${se}em, 0) rotate(${be}deg)`})),Oe.screenRatio>-1&&x&&(x._animating=!0,i()?A.forEach(re=>{re.style.transform="translate3d(0, 0, 0)"}):A.forEach((re,le)=>{const se=me(x._time-le/20,0,1,100,0,pt);re.style.transform=`translate3d(0, ${se}%, 0)`})),Z.screenRatio>-1&&C&&(i()?(C.style.transform="translate3d(0, 0, 0) rotate(0deg)",C.style.opacity="1"):(C._animating=!0,C.style.transform=`translate3d(0, ${me(C._time,0,1,150,0,pt)}%, 0) rotate(${me(C._time,0,1,10,0,pt)}deg)`,C.style.opacity=String(pt(C._time))))}else R=!0},B=K=>{if(!L)return;yn(L).screenRatio>-1&&(L._animating=!0),L._time=un(L._time+(L._animating?K:-K),0,2),N.forEach((ge,Oe)=>{const Z=me(L._time-Oe/20,0,1,0,1,pt),re=me(L._time-Oe/20,0,1,100,0,pt);ge.style.opacity=String(Z),ge.style.transform=`translate3d(0, ${re}%, 0)`})},ce=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",ce),{update(K){k(K),Y(K),B(K)},destroy(){window.removeEventListener("resize",ce)}}}const Uf=28,YS=4,$S=8;function Ff(){return window.innerWidth<812}function ZS(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var R,w;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((R=s==null?void 0:s.textContent)==null?void 0:R.trim())||"",u=((w=a==null?void 0:a.textContent)==null?void 0:w.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(M=>{const L=document.createElement("div");if(L.className="project-item-line-2-inner-list",L.style.transform="translateY(-400%)",M===" ")L.style.width="0.3em";else for(let N=0;N<4;N++){const O=document.createElement("span");O.textContent=M,L.appendChild(O)}a.appendChild(L),d.push(L)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,b=0,S=!1,x=0,C=0,P=0,A=0;return Ff()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(M){const L=yn(t),N=L.ratio>-1&&L.ratio<1;N&&(S=!0),S&&(_+=M);const O=Kn(me(_,0,.85,0,1,pt)),H=me(O,0,1,90,0,pt);if(t.style.opacity=String(O),t.style.transform=`translate3d(0, ${H}px, 0)`,s&&N){p+=M;const V=Math.min(c.length,Math.floor(Uf*p)-YS),k=Math.min(c.length,Math.floor(Uf*p));let Y="";for(let B=0;B<Math.max(0,V);B++)Y+=c[B];for(let B=0;B<k-Math.max(0,V);B++)Y+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=Y}if(N&&(b+=M*.8),g=Kn(g+(m?1:-1)*M*2.5),Ff())d.forEach((V,k)=>{const Y=Kn(g-Math.abs(k-d.length-1)/100),B=me(Y,0,1,0,1.5,pt);V.style.transform=`translate3d(1.5em, 0, 0) translateX(${B}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((V,k)=>{const Y=me(k,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),B=Kn(b-Math.cos(Y)/$S),ce=me(B,0,1,500,0,dS),K=Kn(g-Math.abs(k-d.length-1)/100),de=me(K,0,1,0,1.5,pt);V.style.transform=`translate3d(${de}em, -${ce}%, 0)`}),l){const V=me(g,.3,1,0,1,pt);l.style.transform=`translateX(${V}em)`}if(v=un(v+(f?1:-1)*M,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(P=(Math.random()-.5)*me(v,0,.6,1,0)*8,A=(Math.random()-.5)*me(v,0,.6,1,0)*8):(P*=.92,A*=.92),x+=(P-x)*.2,C+=(A-C)*.2;const V=me(v,0,1,1,1.06,pt);o.style.transform=`translate3d(${x}px, ${C}px, 0) scale(${V})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const Nf=12,Of=6,KS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,jS=`
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
  float stepDist = dist / float(${Nf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${Nf}; i++) {
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
  float numSampleInv = 1.0 / float(${Of});
  for (int i = 0; i < ${Of}; i++) {
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
`;function JS(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function QS(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new pl({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(x){return n.remove(),console.warn("Featured WebGL unavailable",x),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Cn;const o=new us,s=new Gu(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new yr,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=x=>{c.x=x.clientX,c.y=x.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new bi(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(x,C)=>{var se,be,Re;const P=x.dataset.id||((se=i[C])==null?void 0:se.id),A=x.querySelector(".project-item-main"),R=x.querySelector(".project-item-image img");R&&(R.style.opacity="0",R.setAttribute("aria-hidden","true"));const w=new et(x.dataset.colorBg||"#111111");let M,L;try{[M,L]=await Promise.all([a.loadAsync(`${l}${P}/home.webp`),a.loadAsync(`${l}${P}/home_depth.webp`)])}catch(Te){console.warn("Featured WebGL textures failed for",P,Te),R&&(R.style.opacity="1");return}M.colorSpace=Cn,M.wrapS=M.wrapT=Ln,M.minFilter=_t,M.magFilter=_t,M.generateMipmaps=!1,L.colorSpace=en,L.wrapS=L.wrapT=Ln,L.minFilter=_t,L.magFilter=_t,L.generateMipmaps=!1;const N=new it(((be=M.image)==null?void 0:be.width)||1024,((Re=M.image)==null?void 0:Re.height)||1024),O=new q(0,0,-1),H=new fu(new q,1,.6,2),V=JS(1,2.2,.7,3);V.target=0;const k=new it,Y=new it,B={u_texture:{value:M},u_depthTexture:{value:L},u_colorBg:{value:w},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:N},u_domWH:{value:new it(1,1)},u_shiftXY:{value:k},u_focusPos:{value:O},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new it(1,1)},u_globalRadius:{value:15},u_time:{value:0}},ce=new Dt({uniforms:B,vertexShader:KS,fragmentShader:jS,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),K=new kt(d,ce);K.frustumCulled=!1,K.renderOrder=10+C,K.visible=!1,o.add(K);let de=!1,ge=0,Oe=0,Z=0;const re=[0,.2,.3],le=Te=>{for(let je=0;je<re.length;je++)if(Te<re[je])return je;return re.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{de=!0}),A==null||A.addEventListener("mouseleave",()=>{de=!1})),f.push({mesh:K,uniforms:B,focusDyn:H,focusPos:O,zoomDyn:V,shiftXY:k,shiftXYTarget:Y,index:C,main:A,dom:x,update(Te,je,qe,ot,z){const Ne=yn(x);if(!(Ne.ratio>-1&&Ne.ratio<1)||!A){Oe=0,K.visible=!1,B.u_showRatio.value=0;return}Oe+=Te;const Je=A.getBoundingClientRect(),Be=Math.max(1,Je.width),We=Math.max(1,Je.height);B.u_domWH.value.set(Be,We),B.u_resolution.value.set(je,qe),B.u_time.value=ot,B.u_rippleStrength.value=Math.min(.15,z*.5),B.u_globalRadius.value=Math.min(Be,We)*.04;const ze=me(Oe,0,2,0,1,rl),U=C%2-.5,T=(1-ze)*U*-je*.1,G=(1-ze)*U*.1;K.position.set(Je.left+Be*.5+T,qe-(Je.top+We*.5),0),K.scale.set(Be,We,1),K.rotation.z=-G;const j=me(Oe,0,1.5,0,1,rl);B.u_showRatio.value=j,K.visible=j>.01;const ae=ge;if(ge=un(ge+(de?1:-1)*Te,0,1),ae<ge){const Ee=le(ae),he=le(ge);he!==Ee&&Y.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(me(ge,0,.6,1,0)),he===re.length&&Y.multiplyScalar(.5)}else Y.multiplyScalar(.95);k.lerp(Y,.2);const ne=H.target;if(de){const Ee=ge>0?me(ge,0,.3,1,0)*We*.75:0;ne.x=(c.x-Je.left-Be*.5+Math.cos(ot*20)*Ee)/Be*-We,ne.y=(c.y-Je.top-We*.5-Math.sin(ot*30)*Ee)/We*We,ne.z=.5}else ne.x=0,ne.y=0,ne.z=-1;H.update(Te),O.copy(H.value),V.target=de?1:0,V.update(Te),B.u_zoomRatio.value=V.value,Z=un(Z+(de?.75:-1)*Te,0,1),B.u_dofRangeOffset.value=Zt.lerp(0,-.5,Z),B.u_saturation.value=0,B.u_brightness.value=0,B.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,b=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(x){_+=x;const C=window.scrollY,P=Math.abs(C-p)/Math.max(x,.001);p=C,b+=(Math.min(1,P*.002)-b)*.15;const R=yn(e).isActive;if(n.style.visibility=R?"visible":"hidden",!!R){for(const w of f)w.update(x,v,g,_,b);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(x=>{x.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function eM(){return window.innerWidth<812}function tM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function nM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&tM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,b=!1,S=0;const x=P=>{var R;if(!P)return;const A=(R=P.play)==null?void 0:R.call(P);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:P=>{var L;if(!i)return;const A=e?yn(e):null,R=n?yn(n):null,w=eM(),M=w?!!(R!=null&&R.isActive):!!A&&A.showScreenOffset>0&&(R?R.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const N=(A==null?void 0:A.top)??0,O=(A==null?void 0:A.height)??1,H=window.innerHeight,V=N-(H-O)*.5,k=((R==null?void 0:R.top)??0)-(H-((R==null?void 0:R.height)??H))*.5;if(S=Kn(me(window.scrollY+N,V,k,0,1)),S=Kn(me((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,pt)),r&&(x(r),r.style.opacity=String(.35+S*.65)),t&&(x(t),t.style.opacity=String(1-S*.85)),e){const Y=me(S,0,1,1,1.08,pt);e.style.transform=`scale(${Y})`,e.style.opacity=String(me(S,.7,1,1,.15,pt))}if(n){const Y=me(S,0,1,48,0,pt),B=me(S,0,1,.94,1,pt);n.style.transform=`translate3d(0, ${Y}px, 0) scale(${B})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,b=S>.85}else(L=r==null?void 0:r.pause)==null||L.call(r),S=0,m=!1,v=!1,p=!1,b=!1;if(d=un(d+(m?P:-P),0,1e9),f=Math.min(S,Kn(f+(v?P:-P))),u=d%l,o!=null&&o._splitted&&!w){const N=o._splitted.words;for(let O=0;O<N.length;O++){const H=N[O];c-u>l-1&&(H._randCharIndex=Math.round(Math.random()*(H._chars.length-1)));for(let V=0;V<H._chars.length;V++){const k=H._chars[V];let Y=me(f-O/4-V/20,0,.6,200,0,pt);V===H._randCharIndex&&(Y+=me(u-O/10,.5,1.3,0,-100,pt)),k._inner&&(k._inner.style.transform=`translate3d(0, ${Y}%, 0)`)}}}c=u,g=un(g+(p?P:-P*2),0,1.4),_=un(_+(b?P:-P*2),0,1.4),s.forEach((N,O)=>{const H=me(g-O/10,0,.6,0,1,pt),V=me(g-O/10,0,.6,0,180,pt);N.style.transform=`scale(${H}) rotate(${V}deg)`}),a.forEach((N,O)=>{const H=me(_-O/10,0,.6,0,1,pt),V=me(_-O/10,0,.6,0,180,pt);N.style.transform=`scale(${H}) rotate(${V}deg)`})},destroy(){}}}const ac=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],iM=`
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
`,rM=`
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
`,oM=`
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
`,sM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function aM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function lM(){const i=aM(),e="/zyrax-studio/",t=await Promise.all(ac.map(p=>Rn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new us,r=new Nn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let o;try{o=new pl({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}o.setClearColor(0,0);const s=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.5)),o.autoClear=!0;const a=[],l=new q,c=new q,u=new ls,d=new it;for(let p=0;p<ac.length;p++){const b=ac[p],S=t[p],x=document.querySelector(b.sectionSelector);if(!x||!S)continue;const C=new Mi,P=new Mi;C.add(P),n.add(C);const A=new Dt({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:b.aoThreshold},u_color0:{value:new et(b.color0)},u_color1:{value:new et(b.color1)},u_radius:{value:.008}},vertexShader:iM,fragmentShader:rM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),R=new kt(S,A);R.frustumCulled=!1,R.renderOrder=200,P.add(R);const w=new Dt({uniforms:{u_color0:{value:new et(b.color0)},u_color1:{value:new et(b.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:oM,fragmentShader:sM,side:bn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new kt(new bi(2,2),w);M.frustumCulled=!1,M.renderOrder=200,P.add(M);const L=S.attributes.position.array,N=S.attributes.position.count,O=new Float32Array(N);for(let H=0;H<N;H++)O[H]=L[H*3+2];a.push({data:b,sectionEl:x,container:C,inner:P,mesh:R,mat:A,circle:M,circleMat:w,lineRatioArray:O,cpAttr:S.attributes.CP,cdAttr:S.attributes.Cd,count:N,offsetY:0,framePos:new q,frameQuat:new In,frameScale:new q(1,1,1)})}let f=1,m=1;const v=()=>{f=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(f*f+m*m),b=m/p;d.set(f/m*b,b),r.fov=60,r.aspect=f/m,r.position.set(f/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-m/2,0),r.updateProjectionMatrix(),o.setSize(f,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var z;const{data:b,sectionEl:S,container:x,inner:C,mat:P,circle:A,circleMat:R,lineRatioArray:w,cpAttr:M,cdAttr:L,count:N}=p,H=yn(S).top+p.offsetY,V=m,k=b.scrollToRatioFactors;let Y=Kn(-(H-k[0]*V)/(k[1]*V));Y=_S(Y);const B=f<=812,ce=.008*me(f,540,1920,2,1)*(B?.72:1),K=f/d.x,de=m/d.y;let ge=b.margin.x,Oe=b.margin.y;B&&b.id==="goal"&&(ge=.42,Oe=-.35),C.position.x=ge*K,C.position.y=Oe*de-H,C.scale.set(K,de,1),p._showSmooth==null&&(p._showSmooth=Y),p._showSmooth+=(Y-p._showSmooth)*.18,P.uniforms.u_showRatio.value=p._showSmooth,P.uniforms.u_radius.value=ce;const Z=(z=S.dataset)==null?void 0:z.goalPhase,re=b.id==="goal"&&(Z==="black-tunnel"||Z==="white");x.position.copy(p.framePos),x.quaternion.copy(p.frameQuat),x.scale.copy(p.frameScale),x.updateMatrixWorld(!0),u.min.copy(b.boxMin),u.max.copy(b.boxMax),u.applyMatrix4(C.matrixWorld),x.visible=!re&&u.max.y>-m&&u.min.y<0&&Y>.001;let le=0,se=0;for(let Ne=0;Ne<N;Ne++)Y>=w[Ne]&&(le=Ne,Ne===N-1?se=0:se=(Y-w[Ne])/(w[Ne+1]-w[Ne]||1));const be=le,Re=Math.min(le+1,N-1);l.fromArray(M.array,le*3),c.fromArray(M.array,Re*3),l.lerp(c,se);const Te=L.array;let je=Te[be]*(1-se)+Te[Re]*se;je=.9+.1*je;const qe=Kn((Y-(b.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(ce,ce,1),R.uniforms.u_ao.value=Math.min(1,je+1-qe);let ot=w[be]*(1-se)+w[Re]*se;ot=1-Math.pow(1-un(ot,0,1),2),R.uniforms.u_mixRatio.value=ot},_=()=>{for(const p of a)g(p);o.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const b=a.find(S=>S.data.id==="goal");b&&(b.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:b=0,active:S=!1}={}){const x=a.find(L=>L.data.id==="goal");if(!x)return;if(!S){x.framePos.set(0,0,0),x.frameQuat.identity(),x.frameScale.set(1,1,1);return}const C=f*.5,P=-m*.5,A=new xt;A.makeTranslation(C,P,0);const R=new xt().makeRotationZ(-b),w=new xt().makeScale(p,p,1),M=new xt().makeTranslation(-C,-P,0);A.multiply(R).multiply(w).multiply(M),A.decompose(x.framePos,x.frameQuat,x.frameScale)},destroy(){window.removeEventListener("resize",v),o.dispose(),i.remove()}}}const zf=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function cM(i,e,t,n){var A;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1;";const R=Array.from(e.childNodes);e.appendChild(f),R.forEach(w=>f.appendChild(w))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const R=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==R&&(m.src=R)};v();let g="",_=null,p=(A=e.parentElement)==null?void 0:A.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const b=()=>{const R=s||a;if(!R)return null;const w=R.getBoundingClientRect();return w.width<8||w.height<8?null:{left:w.left,top:w.top,width:w.width,height:w.height}},S=(R,w=0)=>{if(!R)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned");const M=window.innerHeight;p&&(p.style.height=`${M}px`),e.style.position="fixed",e.style.left=`${R.left}px`,e.style.top=`${R.top}px`,e.style.width=`${R.width}px`,e.style.height=`${R.height}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius=`${Math.min(R.width,R.height)*.055}px`,e.style.overflow="hidden",e.style.zIndex="3",e.style.transform=w?`rotate(${w}rad)`:"none",e.style.background="transparent",e.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)",f&&(f.style.left=`${d.left*100}%`,f.style.top=`${d.top*100}%`,f.style.width=`${d.width*100}%`,f.style.height=`${d.height*100}%`,f.style.right="auto",f.style.bottom="auto",f.style.inset="",f.style.borderRadius=`${Math.min(R.width,R.height)*.03}px`,f.style.background="#000"),m&&(m.style.position="absolute",m.style.inset="0",m.style.width="100%",m.style.height="100%",m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none")},x=()=>{var R;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background=""),m&&(m.style.opacity="0",m.style.visibility="hidden"),(R=n==null?void 0:n.setGoalFrame)==null||R.call(n,{active:!1})},C=()=>{const R=t.range("blackFrameShow").ratio,w=t.range("blackFrameIn").ratio,M=t.range("blackTunnel").ratio,L=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),O=window.innerHeight,H=N.bottom>0&&N.top<O;_=b();const V=H&&M<.02&&L<.01&&w<.999;if(V&&_){const k=un(w,0,1),B={left:0,top:0,width:window.innerWidth,height:O},ce={left:_.left+(B.left-_.left)*k,top:_.top+(B.top-_.top)*k,width:_.width+(B.width-_.width)*k,height:_.height+(B.height-_.height)*k},K=me(k,0,1,0,.35)*(1-k);S(ce,K);const de=Math.max(me(R,0,.2,.35,1),N.top<O*.85?1:0);if(e.style.opacity=String(de),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(me(k,.05,.75,1,0)*de),m.style.visibility=k>.92?"hidden":"visible"),o&&(o.style.visibility=k>.98?"hidden":"visible"),u&&(u.style.visibility=k>.55?"":"hidden"),l&&!zf){const ge=me(k,0,1,0,O*.12);l.style.transform=`translate3d(0, ${-ge}px, 0)`}if(c&&!zf&&_){const ge=i.querySelector("#home-goal-context"),Oe=(ge==null?void 0:ge.getBoundingClientRect().top)??0,Z=ge&&parseFloat(getComputedStyle(ge).paddingTop)||0,re=_.top-Oe-Z+_.height*.5;c.style.top=`${re}px`,c.style.transform="translateY(-50%)"}if(n!=null&&n.setGoalFrame&&n.setGoalFrame({active:k>.01,scale:me(k,0,1,1,2.4),rotation:K}),f&&k>.01){const ge=d.left*(1-k),Oe=d.top*(1-k),Z=d.width+(1-d.width)*k,re=d.height+(1-d.height)*k;f.style.left=`${ge*100}%`,f.style.top=`${Oe*100}%`,f.style.width=`${Z*100}%`,f.style.height=`${re*100}%`}return g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:w,blackFrameShow:R,frameRect:_}}return g==="window"?(x(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),g="full",window.dispatchEvent(new Event("resize"))):!V&&o&&M>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden")),(!H||N.top>O*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:w,blackFrameShow:R,frameRect:_}},P=()=>{v(),C()};return window.addEventListener("resize",P),{update:C,destroy(){window.removeEventListener("resize",P),m==null||m.remove(),x()},getFrameRect:()=>_}}const Bf="/zyrax-studio/assets/audios/",uM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},hM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function kf(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function fM(){const i=document.getElementById("header-right-sound-btn"),e={};for(const[x,C]of Object.entries(uM))e[x]=kf(`${Bf}${C}`,{loop:!0,volume:0});const t={};for(const[x,C]of Object.entries(hM))t[x]=C.map(P=>kf(`${Bf}${P}`,{loop:!1,volume:.85}));let n=!1,r=!1,o=null,s=null,a=null,l=1,c=1.2;const u={hover:0,click:0,focus:0,page:0,glass:0},d=async()=>{if(!r){r=!0;try{const x=e.generic;x.volume=0,await x.play(),x.pause(),x.currentTime=0}catch{r=!1}}},f=x=>{if(!n||!r)return;const C=t[x];if(!(C!=null&&C.length))return;const P=u[x]%C.length;u[x]=P+1;const A=C[P].cloneNode();A.volume=x==="focus"?.4:x==="glass"?1:.85,A.play().catch(()=>{})},m=x=>{n=!!x,i==null||i.classList.toggle("is-on",n),n?d().then(()=>{o||v("generic",.8)}):o&&e[o]&&(e[o].volume=0)},v=(x,C=1.2)=>{if(!e[x]||o===x)return;s=o,a=x,l=0,c=Math.max(.05,C),o=x;const P=e[x];P.volume=0,n&&r&&P.play().catch(()=>{})},g=x=>{if(r)if(a&&l<1){l=Math.min(1,l+x/c);const C=l*l*(3-2*l);s&&e[s]&&(e[s].volume=n?1-C:0,C>=1&&(e[s].pause(),e[s].currentTime=0)),e[a]&&(e[a].volume=n?C:0,n&&e[a].paused&&e[a].play().catch(()=>{})),C>=1&&(s=null,a=null)}else o&&e[o]&&(e[o].volume=n?1:0,n&&e[o].paused&&e[o].play().catch(()=>{}))};let _=0;const p=x=>{n&&(x==="window"?v("generic",1):x==="title"||x==="black-tunnel"?v("cinematic_0",1.4):x==="white"?v("cinematic_3",1.6):v("generic",1.2))},b=({blackFrameInRatio:x=0,blackTunnelRatio:C=0,whiteTunnelRatio:P=0,astronautDropRatio:A=0}={})=>{n&&(x>.5&&C===0||C>0&&P===0?(_=0,v("cinematic_0",.8)):P>0&&A<=.8?v("cinematic_3",.8):P>0&&A>.8&&v("generic_end",1),A===0?_=1:_===1&&(f("glass"),_=2))};i==null||i.addEventListener("click",async()=>{await d(),m(!n),f("click")}),document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(x=>{x.addEventListener("mouseenter",()=>f("hover")),x.addEventListener("click",()=>f("click"))});const S=()=>{d(),window.removeEventListener("pointerdown",S)};return window.addEventListener("pointerdown",S,{passive:!0}),{update:g,syncGoalPhase:p,syncTunnelAudio:b,playSfx:f,setEnabled:m,get enabled(){return n},destroy(){Object.values(e).forEach(x=>{x.pause(),x.src=""})}}}const zo=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,_l=()=>{var e;const i=((e=window.visualViewport)==null?void 0:e.height)||window.innerHeight;document.documentElement.style.setProperty("--vh",`${i*.01}px`)};_l();window.addEventListener("resize",_l);var Xf;(Xf=window.visualViewport)==null||Xf.addEventListener("resize",_l);var qf;(qf=window.visualViewport)==null||qf.addEventListener("scroll",_l);const er=new Kp({duration:zo?.85:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!zo,syncTouch:!1,wheelMultiplier:zo?.9:.82,touchMultiplier:zo?1.35:1.1});window.lenis=er;let bs=0,Ts=0,Os=!1,Ip=0;window.addEventListener("wheel",()=>{Ip=performance.now(),Os=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Os=!0},{passive:!0});const dM="/zyrax-studio/assets/projects/",Hf=document.getElementById("project-list");Hf&&(Hf.innerHTML=Yd.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${dM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const pM=document.getElementById("hero-canvas"),mM=document.getElementById("home-hero-visual-container"),Sr=document.getElementById("home-hero"),lc=document.getElementById("home-hero-title"),cc=document.getElementById("home-hero-visual-container"),Vf=document.getElementById("home-hero-scroll-container"),Pn=document.getElementById("home-goal"),_M=document.getElementById("goal-tunnel-canvas"),gM=document.getElementById("home-goal-tunnel-title"),Up=document.getElementById("home-goal-tunnel-sticky"),vM=WS(Pn,gM,Up),xM=Pn?qu(Pn):null,sl=fM();let Ct=null,Gf="";const yM=qS(),SM=ZS(),MM=nM();let ci=null,Ya=null;const wM=Pn?cM(Pn,Up,xM,{setGoalFrame:(...i)=>{var e;return(e=ci==null?void 0:ci.setGoalFrame)==null?void 0:e.call(ci,...i)}}):{update(){}};let Wf=performance.now();Du.ticker.add(i=>{var n,r,o,s;const e=performance.now(),t=Math.min(.05,(e-Wf)/1e3);if(Wf=e,!zo&&(Ct!=null&&Ct.getAutoScrollSpeed&&(bs=Ct.getAutoScrollSpeed()),e-Ip>80&&Math.abs(bs)>.01&&(Os=!1),Ts+=Math.abs(bs)>0&&!Os?t:-1,Ts=Math.max(0,Math.min(1,Ts)),!Os&&Ts>0&&Math.abs(bs)>.01)){const l=window.innerHeight,c=bs*l*t*Ts*.55,u=(er.animatedScroll??er.scroll??window.scrollY)+c;er.scrollTo(u,{immediate:!0,force:!0})}er.raf(i*1e3),yM.update(t),SM.update(t),Ya==null||Ya.update(t),MM.update(t),ci==null||ci.update(),(n=Ct==null?void 0:Ct.tickFrame)==null||n.call(Ct,t),sl.update(t),Ct!=null&&Ct.getAstronautDropRatio&&sl.syncTunnelAudio({blackFrameInRatio:((r=Pn==null?void 0:Pn.dataset)==null?void 0:r.goalPhase)==="window"?0:1,blackTunnelRatio:((o=Pn==null?void 0:Pn.dataset)==null?void 0:o.goalPhase)==="black-tunnel"?1:0,whiteTunnelRatio:((s=Ct.getWhiteTunnelRatio)==null?void 0:s.call(Ct))??0,astronautDropRatio:Ct.getAstronautDropRatio()??0})});Du.ticker.lagSmoothing(0);er.on("scroll",()=>{var o,s;vM.updateScroll(),wM.update(),Ct==null||Ct.updateScroll(),ci==null||ci.update();const i=((o=Pn==null?void 0:Pn.dataset)==null?void 0:o.goalPhase)||"";if(i&&i!==Gf&&(Gf=i,sl.syncGoalPhase(i)),Ct!=null&&Ct.getAstronautDropRatio&&sl.syncTunnelAudio({whiteTunnelRatio:((s=Ct.getWhiteTunnelRatio)==null?void 0:s.call(Ct))??0,astronautDropRatio:Ct.getAstronautDropRatio()??0}),!Sr)return;const e=Sr.getBoundingClientRect(),t=window.innerHeight,n=Math.max(0,Math.min(1,-e.top/Math.max(e.height,1))),r=Math.max(0,Math.min(1,(t-e.bottom)/t));lc&&(lc.style.transform=`translate3d(0, ${n*-12}vh, 0)`,lc.style.opacity=String(Math.max(0,1-n*1.2))),cc&&(cc.style.transform=`translate3d(0, ${n*18}vh, 0) scale(${1-n*.08})`,cc.style.opacity=String(Math.max(0,1-Math.max(n,r)*.85))),Vf&&(Vf.style.opacity=String(Math.max(0,1-n*2)))});lM().then(i=>{ci=i}).catch(i=>console.error("Scroll lines failed",i));GS(_M,Pn).then(i=>{Ct=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{uS(pM,mM).then(()=>Sr==null?void 0:Sr.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Sr==null||Sr.classList.add("is-in")})});zo||QS(Yd).then(i=>{Ya=i}).catch(i=>console.error("Featured WebGL failed",i));function Fp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}Fp(document.getElementById("home-hero-title"));Fp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const bM=document.querySelectorAll(".home-hero-scroll-container-cross");bM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const uc=document.getElementById("header"),hc=document.getElementById("header-container"),wr=document.getElementById("header-background"),fc=document.getElementById("header-menu"),Yo=document.getElementById("header-right-menu-btn");let Zi=!1;const ea=i=>{Zi=!!i,uc==null||uc.classList.toggle("--menu-opened",Zi),hc==null||hc.classList.toggle("--opened",Zi),wr==null||wr.classList.toggle("--opened",Zi),fc==null||fc.classList.toggle("--opened",Zi),Yo==null||Yo.classList.toggle("--opened",Zi),wr&&(wr.style.opacity=Zi?window.innerWidth>=1e3?"0.2":"1":"0")};Yo==null||Yo.addEventListener("click",i=>{i.stopPropagation(),ea(!Zi)});wr==null||wr.addEventListener("click",()=>ea(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");ea(!1),t==="contact"?(e.preventDefault(),er.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),er.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!Zi)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||ea(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&ea(!1)});var Yf;(Yf=document.querySelector("[data-reel]"))==null||Yf.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var $f;($f=document.querySelector("#end-bottom"))==null||$f.addEventListener("click",i=>{i.preventDefault(),er.scrollTo("#footer-section")});
