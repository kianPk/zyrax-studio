var im=Object.defineProperty;var rm=(i,e,t)=>e in i?im(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ve=(i,e,t)=>rm(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var mh="1.3.27";function ud(i,e,t){return Math.max(i,Math.min(e,t))}function om(i,e,t){return(1-t)*i+t*e}function sm(i,e,t,n){return om(i,e,1-Math.exp(-t*n))}function am(i,e){return(i%e+e)%e}var lm=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=ud(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=sm(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function cm(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var um=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=cm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},hd=class{constructor(){Ve(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let r=0,o=t.length;r<o;r++)(n=t[r])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const hm=100/6,vr={passive:!1};function _h(i,e){return i===1?hm:i===2?e:1}var fm=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new hd);Ve(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ve(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ve(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ve(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=_h(n,this.window.width),o=_h(n,this.window.height);e*=r,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vr),this.element.addEventListener("touchstart",this.onTouchStart,vr),this.element.addEventListener("touchmove",this.onTouchMove,vr),this.element.addEventListener("touchend",this.onTouchEnd,vr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vr),this.element.removeEventListener("touchstart",this.onTouchStart,vr),this.element.removeEventListener("touchmove",this.onTouchMove,vr),this.element.removeEventListener("touchend",this.onTouchEnd,vr)}};const gh=i=>Math.min(1,1.001-2**(-10*i));var dm=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:_,virtualScroll:p,overscroll:w=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:b=!1,respectReducedMotion:M=!0}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"_rafId",null);Ve(this,"_isDraggingSelection",!1);Ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ve(this,"isTouching");Ve(this,"isIos");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new lm);Ve(this,"emitter",new hd);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ve(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ve(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ve(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),o=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(v=>{var g,_,p,w,S;return v instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||u==="vertical"&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=v.hasAttribute)==null?void 0:p.call(v,"data-lenis-prevent-horizontal"))||r&&((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent-touch"))||o&&((S=v.hasAttribute)==null?void 0:S.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,m=r&&n.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=mh,window.lenis||(window.lenis={}),window.lenis.version=mh,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=gh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:_,virtualScroll:p,overscroll:w,autoRaf:S,anchors:x,autoToggle:C,allowNestedScroll:R,naiveDimensions:P,stopInertiaOnNavigate:b,respectReducedMotion:M},this.dimensions=new um(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new fm(t,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],o=n[n.length-1],s=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:s=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,m=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let v=null;if(typeof f=="string"?(v=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),v||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(v=f),v){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?x.left:x.top}const g=v.getBoundingClientRect(),_=getComputedStyle(v),p=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),w=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=f-this.animatedScroll;v>this.limit/2?f-=this.limit:v<-this.limit/2&&(f+=this.limit)}}else f=ud(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof s=="number"&&typeof a!="function"?a=gh:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,f,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let o,s,a,l,c,u,d,f,m,v;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(i);if(r.computedStyle=R,o=["auto","overlay","scroll"].includes(R.overflowX),s=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=s,!(o||s))return!1;d=i.scrollWidth,f=i.scrollHeight,m=i.clientWidth,v=i.clientHeight,a=d>m,l=f>v,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,o=r.hasOverflowX,s=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,p,w,S,x,C;if(g==="horizontal")_=Math.round(i.scrollLeft),p=d-m,w=e,S=o,x=a,C=c;else if(g==="vertical")_=Math.round(i.scrollTop),p=f-v,w=t,S=s,x=l,C=u;else return!1;return!C&&(_>=p||_<=0)?!0:(w>0?_<p:_>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?am(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function nr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function fd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},bu,mn,Ot,mi=1e8,Dt=1/mi,bc=Math.PI*2,pm=bc/4,mm=0,dd=Math.sqrt,_m=Math.cos,gm=Math.sin,fn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},Tu=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},Eu=function(){return typeof window<"u"},da=function(e){return Wt(e)||fn(e)},pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,vm=/random\([^)]+\)/g,xm=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_d=/[+-]=-?[.\d]+/,ym=/[^,'"\[\]\s]+/gi,Sm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,zi,Tc,Au,ri={},nl={},gd,vd=function(e){return(nl=ns(e,ri))&&qn},Ru=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qs=function(e,t){return!t&&console.warn(e)},xd=function(e,t){return e&&(ri[e]=t)&&nl&&(nl[e]=t)||ri},Ys=function(){return 0},Mm={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},wm={suppressEvents:!0},Cu={},Ir=[],Ec={},yd,jn={},Ll={},xh=30,qa=[],Pu="",Du=function(e){var t=e[0],n,r;if(Wi(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=qa.length;r--&&!qa[r].targetTest(t););n=qa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Vd(e[r],n)))||e.splice(r,1);return e},ho=function(e){return e._gsap||Du(_i(e))[0]._gsap},Sd=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():Tu(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Yo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},bm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},il=function(){var e=Ir.length,t=Ir.slice(0),n,r;for(Ec={},Ir.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Lu=function(e){return!!(e._initted||e._startAt||e.add)},Md=function(e,t,n,r){Ir.length&&!mn&&il(),e.render(t,n,!!(mn&&t<0&&Lu(e))),Ir.length&&!mn&&il()},wd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ym).length<2?t:fn(e)?e.trim():e},bd=function(e){return e},oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ns=function(e,t){for(var n in t)e[n]=t[n];return e},yh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},rl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ns=function(e){var t=e.parent||kt,n=e.keyframes?Tm(Tn(e.keyframes)):oi;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Em=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Td=function(e,t,n,r,o){var s=e[r],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},_l=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,s=t._next;o?o._next=s:e[n]===t&&(e[n]=s),s?s._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Am=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ac=function(e,t,n,r){return e._startAt&&(mn?e._startAt.revert(Xa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Rm=function i(e){return!e||e._ts&&i(e.parent)},Sh=function(e){return e._repeat?is(e._tTime,e=e.duration()+e._rDelay)*e:0},is=function(e,t){var n=Math.floor(e=Bt(e/t));return e&&n===e?n-1:n},ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||fo(n,e)),e},Ed=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ol(e.rawTime(),t),(!t._dur||na(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),fo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},ki=function(e,t,n,r){return t.parent&&Nr(t),t._start=Bt((ur(n)?n:n||e!==kt?hi(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Td(e,t,"_first","_last",e._sort?"_start":0),Rc(t)||(e._recent=t),r||Ed(e,t),e._ts<0&&vl(e,e._tTime),e},Ad=function(e,t){return(ri.ScrollTrigger||Ru("scrollTrigger",t))&&ri.ScrollTrigger.create(t,e)},Rd=function(e,t,n,r,o){if(Uu(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yd!==Jn.frame)return Ir.push(e),e._lazy=[o,r],1},Cm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Rc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Pm=function(e,t,n,r){var o=e.ratio,s=t<0||!t&&(!e._start&&Cm(e)&&!(!e._initted&&Rc(e))||(e._ts<0||e._dp._ts<0)&&!Rc(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=na(0,e._tDur,t),u=is(l,a),e._yoyo&&u&1&&(s=1-s),u!==is(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||mn||r||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&Rd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Ac(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Nr(e,1),!n&&!mn&&(ei(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dm=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},rs=function(e,t,n,r){var o=e._repeat,s=Bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Bt(s*(o+1)+e._rDelay*o):s,a>0&&!r&&vl(e,e._tTime=e._tDur*a),e.parent&&gl(e),n||fo(e.parent,e),e},Mh=function(e){return e instanceof Bn?fo(e):rs(e,e._dur)},Lm={_start:0,endTime:Ys,totalDuration:Ys},hi=function i(e,t,n){var r=e.labels,o=e._recent||Lm,s=e.duration()>=mi?o.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?o:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Os=function(e,t,n){var r=ur(t[1]),o=(r?2:1)+(e<2?0:1),s=t[o],a,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;s.immediateRender=Hn(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new Jt(t[0],s,t[o+1])},kr=function(e,t){return e||e===0?t(e):t},na=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!fn(e)||!(t=Sm.exec(e))?"":t[1]},Im=function(e,t,n){return kr(n,function(r){return na(e,t,r)})},Cc=[].slice,Cd=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==zi},Um=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return fn(r)&&!t||Cd(r,1)?(o=n).push.apply(o,_i(r)):n.push(r)})||n},_i=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):fn(e)&&!n&&(Tc||!os())?Cc.call((t||Au).querySelectorAll(e),0):Tn(e)?Um(e,n):Cd(e)?Cc.call(e,0):e?[e]:[]},Pc=function(e){return e=_i(e)[0]||qs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _i(t,n.querySelectorAll?n:n===e?qs("Invalid scope")||Au.createElement("div"):e)}},Pd=function(e){return e.sort(function(){return .5-Math.random()})},Dd=function(e){if(Wt(e))return e;var t=Wi(e)?e:{each:e},n=po(t.ease),r=t.from||0,o=parseFloat(t.base)||0,s={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return fn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,m,v){var g=(v||t).length,_=s[g],p,w,S,x,C,R,A,P,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,mi])[1],!b){for(A=-mi;A<(A=v[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(_=s[g]=[],p=l?Math.min(b,g)*u-.5:r%b,w=b===mi?0:l?g*d/b-.5:r/b|0,A=0,P=mi,R=0;R<g;R++)S=R%b-p,x=w-(R/b|0),_[R]=C=c?Math.abs(c==="y"?x:S):dd(S*S+x*x),C>A&&(A=C),C<P&&(P=C);r==="random"&&Pd(_),_.max=A-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(r==="edges"?-1:1),_.b=g<0?o-g:o,_.u=wn(t.amount||t.each)||0,n=n&&g<0?Ym(n):n}return g=(_[f]-_.min)/_.max||0,Bt(_.b+(n?n(g):g)*_.v)+_.u}},Dc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ur(n)?0:wn(n))}},Ld=function(e,t){var n=Tn(e),r,o;return!n&&Wi(e)&&(r=n=e.radius||mi,e.values?(e=_i(e.values),(o=!ur(e[0]))&&(r*=r)):e=Dc(e.increment)),kr(t,n?Wt(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=mi,u=0,d=e.length,f,m;d--;)o?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:s,o||u===s||ur(s)?u:u+wn(s)}:Dc(e))},Id=function(e,t,n,r){return kr(Tn(e)?!t:n===!0?!!(n=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Fm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,s){return s(o)},r)}},Nm=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},Om=function(e,t,n){return Fd(e,t,0,1,n)},Ud=function(e,t,n){return kr(n,function(r){return e[~~t(r)]})},zm=function i(e,t,n){var r=t-e;return Tn(e)?Ud(e,i(0,e.length),t):kr(n,function(o){return(r+(o-e)%r)%r+e})},Bm=function i(e,t,n){var r=t-e,o=r*2;return Tn(e)?Ud(e,i(0,e.length-1),t):kr(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},$s=function(e){return e.replace(vm,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xm);return Id(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Fd=function(e,t,n,r,o){var s=t-e,a=r-n;return kr(o,function(l){return n+((l-e)/s*a||0)})},km=function i(e,t,n,r){var o=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!o){var s=fn(e),a={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,o=function(v){v*=d;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else r||(e=ns(Tn(e)?[]:{},e));if(!u){for(l in t)Iu.call(a,e,l,"get",t[l]);o=function(v){return Ou(v,a)||(s?e.p:e)}}}return kr(n,o)},wh=function(e,t,n){var r=e.labels,o=mi,s,a,l;for(s in r)a=r[s]-t,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ei=function(e,t,n){var r=e.vars,o=r[t],s=Ot,a=e._ctx,l,c,u;if(o)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ir.length&&il(),a&&(Ot=a),u=l?o.apply(c,l):o.call(c),Ot=s,u},Ls=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ei(e,"onInterrupt"),e},Go,Nd=[],Od=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,n=Wt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Ys,render:Ou,add:Iu,kill:i0,modifier:n0,rawVars:0},s={targetTest:0,get:0,getSetter:Nu,aliases:{},register:0};if(os(),e!==r){if(jn[t])return;oi(r,oi(rl(e,o),s)),ns(r.prototype,ns(o,rl(e,s))),jn[r.prop=t]=r,e.targetTest&&(qa.push(r),Cu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xd(t,r),e.register&&e.register(qn,r,Gn)}else Nd.push(e)},Ct=255,Is={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},zd=function(e,t,n){var r=e?ur(e)?[e>>16,e>>8&Ct,e&Ct]:0:Is.black,o,s,a,l,c,u,d,f,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Is[e])r=Is[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(vh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=Il(l+1/3,o,s),r[1]=Il(l,o,s),r[2]=Il(l-1/3,o,s);else if(~e.indexOf("="))return r=e.match(md),n&&r.length<4&&(r[3]=1),r}else r=e.match(vh)||Is.transparent;r=r.map(Number)}return t&&!v&&(o=r[0]/Ct,s=r[1]/Ct,a=r[2]/Ct,d=Math.max(o,s,a),f=Math.min(o,s,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===o?(s-a)/m+(s<a?6:0):d===s?(a-o)/m+2:(o-s)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Bd=function(e){var t=[],n=[],r=-1;return e.split(Ur).forEach(function(o){var s=o.match(Vo)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},bh=function(e,t,n){var r="",o=(e+r).match(Ur),s=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!o)return e;if(o=o.map(function(f){return(f=zd(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Bd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ur,"1").split(Vo),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!c)for(c=e.split(Ur),d=c.length-1;a<d;a++)r+=c[a]+o[a];return r+c[d]},Ur=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Is)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Hm=/hsl[a]?\(/,kd=function(e){var t=e.join(" "),n;if(Ur.lastIndex=0,Ur.test(t))return n=Hm.test(t),e[1]=bh(e[1],n),e[0]=bh(e[0],n,Bd(e[1])),!0},Zs,Jn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,o=1e3/240,s=o,a=[],l,c,u,d,f,m,v=function g(_){var p=i()-r,w=_===!0,S,x,C,R;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,S=C-s,(S>0||w)&&(R=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,s+=S+(S>=o?4:o-S),x=1),w||(l=c(g)),x)for(m=0;m<a.length;m++)a[m](C,f,R,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){gd&&(!Tc&&Eu()&&(zi=Tc=window,Au=zi.document||{},ri.gsap=qn,(zi.gsapVersions||(zi.gsapVersions=[])).push(qn.version),vd(nl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Nd.forEach(Od)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,s-d.time*1e3+1|0)},Zs=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zs=0,c=Ys},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){o=1e3/(_||240),s=d.time*1e3+o},add:function(_,p,w){var S=p?function(x,C,R,A){_(x,C,R,A),d.remove(S)}:_;return d.remove(_),a[w?"unshift":"push"](S),os(),S},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},d})(),os=function(){return!Zs&&Jn.wake()},mt={},Vm=/^[\d.\-M][\d.\-,\s]/,Gm=/["']/g,Wm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,a,l,c;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Gm,"").trim():+c,r=l.substr(a+1).trim();return t},Xm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},qm=function(e){var t=(e+"").split("("),n=mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Wm(t[1])]:Xm(e).split(",").map(wd)):mt._CE&&Vm.test(e)?mt._CE("",e):n},Ym=function(e){return function(t){return 1-e(1-t)}},po=function(e,t){return e&&(Wt(e)?e:mt[e]||qm(e))||t},xo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},s;return Vn(e,function(a){mt[a]=ri[a]=o,mt[s=a.toLowerCase()]=n;for(var l in o)mt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[a+"."+l]=o[l]}),o},Hd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ul=function i(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),s=o/bc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*gm((u-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Hd(a);return o=bc/o,l.config=function(c,u){return i(e,c,u)},l},Fl=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Hd(n);return r.config=function(o){return i(e,o)},r};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;xo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;xo("Elastic",Ul("in"),Ul("out"),Ul());(function(i,e){var t=1/e,n=2*t,r=2.5*t,o=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};xo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);xo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});xo("Circ",function(i){return-(dd(1-i*i)-1)});xo("Sine",function(i){return i===1?1:-_m(i*pm)+1});xo("Back",Fl("in"),Fl("out"),Fl());mt.SteppedEase=mt.steps=ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,s=1-Dt;return function(a){return((r*na(0,s,a)|0)+o)*n}}};Xs.ease=mt["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Pu+=i+","+i+"Params,"});var Vd=function(e,t){this.id=mm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sd,this.set=t?t.getSetter:Nu},Ks=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rs(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Zs||Jn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(os(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(vl(this,n),!o._dp||o.parent||Ed(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Md(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?is(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(na(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),gl(this),Am(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Bt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ki(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wm);var r=mn;return mn=n,Lu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Mh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(hi(this,n),Hn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Hn(r)),this._dur||(this._zTime=-Dt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Dt)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,o=r._prom;return new Promise(function(s){var a=Wt(n)?n:bd,l=function(){var u=r.then;r.then=null,o&&o(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ls(this)},i})();oi(Ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var Bn=(function(i){fd(e,i);function e(n,r){var o;return n===void 0&&(n={}),o=i.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Hn(n.sortChildren),kt&&ki(n.parent||kt,nr(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Ad(nr(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,s){return Os(0,arguments,this),this},t.from=function(r,o,s){return Os(1,arguments,this),this},t.fromTo=function(r,o,s,a){return Os(2,arguments,this),this},t.set=function(r,o,s){return o.duration=0,o.parent=this,Ns(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Jt(r,o,hi(this,s),1),this},t.call=function(r,o,s){return ki(this,Jt.delayedCall(0,r,o),s)},t.staggerTo=function(r,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Jt(r,s,hi(this,l)),this},t.staggerFrom=function(r,o,s,a,l,c,u){return s.runBackwards=1,Ns(s).immediateRender=Hn(s.immediateRender),this.staggerTo(r,o,s,a,l,c,u)},t.staggerFromTo=function(r,o,s,a,l,c,u,d){return a.startAt=s,Ns(a).immediateRender=Hn(a.immediateRender),this.staggerTo(r,o,a,l,c,u,d)},t.render=function(r,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Bt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,m,v,g,_,p,w,S,x,C,R,A;if(this!==kt&&u>l&&r>=0&&(u=l),u!==this._tTime||s||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,o,s);if(f=Bt(u%_),u===l?(g=this._repeat,f=c):(C=Bt(u/_),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=is(this._tTime,_),!a&&this._tTime&&C!==g&&this._tTime-C*_-this._dur<=0&&(C=g),R&&g&1&&(f=c-f,A=1),g!==C&&!this._lock){var P=R&&C&1,b=P===(R&&g&1);if(g<C&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Bt(g*_)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Dm(this,Bt(a),Bt(f)),w&&(u-=f-(f=w._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!o&&!C&&(ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,o,s),f!==this._time||!this._ts&&!p){w=0,v&&(u+=this._zTime=-Dt);break}}m=v}else{m=this._last;for(var M=r<0?r:f;m;){if(v=m._prev,(m._act||M<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,o,s);if(m.render(m._ts>0?(M-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(M-m._start)*m._ts,o,s||mn&&Lu(m)),f!==this._time||!this._ts&&!p){w=0,v&&(u+=this._zTime=M?-Dt:Dt);break}}m=v}}if(w&&!o&&(this.pause(),w.render(f>=a?0:-Dt)._zTime=f>=a?1:-1,this._ts))return this._start=x,gl(this),this.render(r,o,s);this._onUpdate&&!o&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Nr(this,1),!o&&!(r<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var s=this;if(ur(o)||(o=hi(this,o,r)),!(r instanceof Ks)){if(Tn(r))return r.forEach(function(a){return s.add(a,o)}),this;if(fn(r))return this.addLabel(r,o);if(Wt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?ki(this,r,o):this},t.getChildren=function(r,o,s,a){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Jt?o&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},t.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},t.remove=function(r){return fn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&_l(this,r),r===this._recent&&(this._recent=this._last),fo(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=hi(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,s){var a=Jt.delayedCall(0,o||Ys,s);return a.data="isPause",this._hasPause=1,ki(this,a,hi(this,r))},t.removePause=function(r){var o=this._first;for(r=hi(this,r);o;)o._start===r&&o.data==="isPause"&&Nr(o),o=o._next},t.killTweensOf=function(r,o,s){for(var a=this.getTweensOf(r,s),l=a.length;l--;)Pr!==a[l]&&a[l].kill(r,o);return this},t.getTweensOf=function(r,o){for(var s=[],a=_i(r),l=this._first,c=ur(o),u;l;)l instanceof Jt?bm(l._targets,a)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,o){o=o||{};var s=this,a=hi(s,r),l=o,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=Jt.to(s,oi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Dt,onStart:function(){if(s.pause(),!m){var _=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==_&&rs(v,_,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(r,o,s){return this.tweenTo(o,oi({startAt:{time:hi(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),wh(this,hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),wh(this,hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(r,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(r=Bt(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=r);return fo(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fo(this)},t.totalDuration=function(r){var o=0,s=this,a=s._last,l=mi,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,ki(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=Bt(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;rs(s,s===kt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(kt._ts&&(Md(kt,ol(r,kt)),yd=Jn.frame),Jn.frame>=xh){xh+=ni.autoSleep||120;var o=kt._first;if((!o||!o._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Jn.sleep()}}},e})(Ks);oi(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $m=function(e,t,n,r,o,s,a){var l=new Gn(this._pt,e,t,0,1,$d,null,o),c=0,u=0,d,f,m,v,g,_,p,w;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=$s(r)),s&&(w=[n,r],s(w,e,t),n=w[0],r=w[1]),f=n.match(Dl)||[];d=Dl.exec(r);)v=d[0],g=r.substring(c,d.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:v.charAt(1)==="="?Yo(_,v)-_:parseFloat(v)-_,m:m&&m<4?Math.round:0},c=Dl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(_d.test(r)||p)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,r,o,s,a,l,c,u){Wt(r)&&(r=r(o||0,e,s));var d=e[t],f=n!=="get"?n:Wt(d)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Wt(d)?c?Qm:qd:Fu,v;if(fn(r)&&(~r.indexOf("random(")&&(r=$s(r)),r.charAt(1)==="="&&(v=Yo(f,r)+(wn(f)||0),(v||v===0)&&(r=v))),!u||f!==r||Lc)return!isNaN(f*r)&&r!==""?(v=new Gn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?t0:Yd,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Ru(t,r),$m.call(this,e,t,f,r,m,l||ni.stringFilter,c))},Zm=function(e,t,n,r,o){if(Wt(e)&&(e=zs(e,o,t,n,r)),!Wi(e)||e.style&&e.nodeType||Tn(e)||pd(e))return fn(e)?zs(e,o,t,n,r):e;var s={},a;for(a in e)s[a]=zs(e[a],o,t,n,r);return s},Gd=function(e,t,n,r,o,s){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(o,a.rawVars?t[e]:Zm(t[e],r,o,s,n),n,r,s)!==!1&&(n._pt=l=new Gn(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==Go))for(c=n._ptLookup[n._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Pr,Lc,Uu=function i(e,t,n){var r=e.vars,o=r.ease,s=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,m=r.autoRevert,v=e._dur,g=e._startAt,_=e._targets,p=e.parent,w=p&&p.data==="nested"?p.vars.targets:_,S=e._overwrite==="auto"&&!bu,x=e.timeline,C=r.easeReverse||d,R,A,P,b,M,D,N,F,V,W,G,k,H;if(x&&(!f||!o)&&(o="none"),e._ease=po(o,Xs.ease),e._rEase=C&&(po(C)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(F=_[0]?ho(_[0]).harness:0,k=F&&r[F.prop],R=rl(r,Cu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?Xa:Mm),g._lazy=0),s){if(Nr(e._startAt=Jt.set(_,oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!m)&&e._startAt.revert(Xa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),P=oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Hn(l),immediateRender:a,stagger:0,parent:p},R),k&&(P[F.prop]=k),Nr(e._startAt=Jt.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Xa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Hn(l)||l&&!v,A=0;A<_.length;A++){if(M=_[A],N=M._gsap||Du(_)[A]._gsap,e._ptLookup[A]=W={},Ec[N.id]&&Ir.length&&il(),G=w===_?A:w.indexOf(M),F&&(V=new F).init(M,k||R,e,G,w)!==!1&&(e._pt=b=new Gn(e._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(le){W[le]=b}),V.priority&&(D=1)),!F||k)for(P in R)jn[P]&&(V=Gd(P,R,e,G,M,w))?V.priority&&(D=1):W[P]=b=Iu.call(e,M,P,"get",R[P],G,w,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),S&&e._pt&&(Pr=e,kt.killTweensOf(M,W,e.globalTime(t)),H=!e.parent,Pr=0),e._pt&&l&&(Ec[N.id]=1)}D&&Zd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&x.render(mi,!0,!0)},Km=function(e,t,n,r,o,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Lc=1,e.vars[t]="+=0",Uu(e,a),Lc=0,l?qs(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,d.e&&(d.e=$t(n)+wn(d.e)),d.b&&(d.b=u.s+wn(d.b))},jm=function(e,t){var n=e[0]?ho(e[0]).harness:0,r=n&&n.aliases,o,s,a,l;if(!r)return t;o=ns({},t);for(s in r)if(s in o)for(l=r[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},Jm=function(e,t,n,r){var o=t.ease||r||"power1.inOut",s,a;if(Tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:o})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},zs=function(e,t,n,r,o){return Wt(e)?e.call(t,n,r,o):fn(e)&&~e.indexOf("random(")?$s(e):e},Wd=Pu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xd={};Vn(Wd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Xd[i]=1});var Jt=(function(i){fd(e,i);function e(n,r,o,s){var a;typeof r=="number"&&(o.duration=r,r=o,o=null),a=i.call(this,s?r:Ns(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||kt,w=(Tn(n)||pd(n)?ur(n[0]):"length"in r)?[n]:_i(n),S,x,C,R,A,P,b,M;if(a._targets=w.length?Du(w):qs("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||da(c)||da(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(S=a.timeline=new Bn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:w}),S.kill(),S.parent=S._dp=nr(a),S._start=0,f||da(c)||da(u)){if(R=w.length,b=f&&Dd(f),Wi(f))for(A in f)~Wd.indexOf(A)&&(M||(M={}),M[A]=f[A]);for(x=0;x<R;x++)C=rl(r,Xd),C.stagger=0,D&&(C.easeReverse=D),M&&ns(C,M),P=w[x],C.duration=+zs(c,nr(a),x,P,w),C.delay=(+zs(u,nr(a),x,P,w)||0)-a._delay,!f&&R===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(P,C,b?b(x,P,w):0),S._ease=mt.none;S.duration()?c=u=0:a.timeline=0}else if(v){Ns(oi(S.vars.defaults,{ease:"none"})),S._ease=po(v.ease||r.ease||"none");var N=0,F,V,W;if(Tn(v))v.forEach(function(G){return S.to(w,G,">")}),S.duration();else{C={};for(A in v)A==="ease"||A==="easeEach"||Jm(A,v[A],C,v.easeEach);for(A in C)for(F=C[A].sort(function(G,k){return G.t-k.t}),N=0,x=0;x<F.length;x++)V=F[x],W={ease:V.e,duration:(V.t-(x?F[x-1].t:0))/100*c},W[A]=V.v,S.to(w,W,N),N+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!bu&&(Pr=nr(a),kt.killTweensOf(w),Pr=0),ki(p,nr(a),o),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===Bt(p._time)&&Hn(d)&&Rm(nr(a))&&p.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-u)||0)),_&&Ad(nr(a),_),a}var t=e.prototype;return t.render=function(r,o,s){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Dt&&!u?l:r<Dt?0:r,f,m,v,g,_,p,w,S;if(!c)Pm(this,r,o,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,o,s);if(f=Bt(d%g),d===l?(v=this._repeat,f=c):(_=Bt(d/g),v=~~_,v&&v===_?(f=c,v--):f>c&&(f=c)),p=this._yoyo&&v&1,p&&(f=c-f),_=is(this._tTime,g),f===a&&!s&&this._initted&&v===_)return this._tTime=d,this;v!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(Bt(g*v),!0).invalidate()._lock=0)}if(!this._initted){if(Rd(this,u?r:f,s,o,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&v!==_))return this;if(c!==this._dur)return this.render(r,o,s)}if(this._rEase){var x=f<a;if(x!==this._inv){var C=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(x?-1:1)/C:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!o&&!_&&(ei(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&Ac(this,r,o,s),ei(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!o&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Ac(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Nr(this,1),!o&&!(u&&!a)&&(d||a||p)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,s,a,l){Zs||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uu(this,c),u=this._ease(c/this._dur),Km(this,r,o,s,a,u,c,l)?this.resetTo(r,o,s,a,1):(vl(this,0),this.parent||Td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Pr&&Pr.vars.overwrite!==!0)._first||Ls(this),this.parent&&s!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=r?_i(r):a,c=this._ptLookup,u=this._pt,d,f,m,v,g,_,p;if((!o||o==="all")&&Em(a,l))return o==="all"&&(this._pt=0),Ls(this);for(d=this._op=this._op||[],o!=="all"&&(fn(o)&&(g={},Vn(o,function(w){return g[w]=1}),o=g),o=jm(a,o)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],o==="all"?(d[p]=o,v=f,m={}):(m=d[p]=d[p]||{},v=o);for(g in v)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&_l(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Os(1,arguments)},e.delayedCall=function(r,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,o,s){return Os(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return kt.killTweensOf(r,o,s)},e})(Ks);oi(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(i){Jt[i]=function(){var e=new Bn,t=Cc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Fu=function(e,t,n){return e[t]=n},qd=function(e,t,n){return e[t](n)},Qm=function(e,t,n,r){return e[t](r.fp,n)},e0=function(e,t,n){return e.setAttribute(t,n)},Nu=function(e,t){return Wt(e[t])?qd:Tu(e[t])&&e.setAttribute?e0:Fu},Yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},t0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$d=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ou=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},n0=function(e,t,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,t,n),o=s},i0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_l(this,t,"_pt"):t.dep||(n=1),t=r;return!n},r0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Zd=function(e){for(var t=e._pt,n,r,o,s;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=o},Gn=(function(){function i(t,n,r,o,s,a,l,c,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=a||Yd,this.d=l||this,this.set=c||Fu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=r0,this.m=n,this.mt=o,this.tween=r},i})();Vn(Pu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Cu[i]=1});ri.TweenMax=ri.TweenLite=Jt;ri.TimelineLite=ri.TimelineMax=Bn;kt=new Bn({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=kd;var mo=[],Ya={},o0=[],Th=0,s0=0,Nl=function(e){return(Ya[e]||o0).map(function(t){return t()})},Ic=function(){var e=Date.now(),t=[];e-Th>2&&(Nl("matchMediaInit"),mo.forEach(function(n){var r=n.queries,o=n.conditions,s,a,l,c;for(a in r)s=zi.matchMedia(r[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Nl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Th=e,Nl("matchMedia"))},Kd=(function(){function i(t,n){this.selector=n&&Pc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=s0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,o){Wt(n)&&(o=r,r=n,n=Wt);var s=this,a=function(){var c=Ot,u=s.selector,d;return c&&c!==s&&c.data.push(s),o&&(s.selector=Pc(o)),Ot=s,d=r.apply(s,arguments),Wt(d)&&s._r.push(d),Ot=c,s.selector=u,s.isReverted=!1,d};return s.last=a,n===Wt?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var r=Ot;Ot=null,n(this),Ot=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=o.data.length;l--;)c=o.data[l],c instanceof Bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Jt)&&c.revert&&c.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=mo.length;s--;)mo[s].id===this.id&&mo.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),a0=(function(){function i(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=i.prototype;return e.add=function(n,r,o){Wi(n)||(n={matches:n});var s=new Kd(0,o||this.scope),a=s.conditions={},l,c,u;Ot&&!s.selector&&(s.selector=Ot.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(mo.indexOf(s)<0&&mo.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Od(r)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,r){fn(e)&&(e=_i(e)[0]);var o=ho(e||{}).get,s=n?bd:wd;return n==="native"&&(n=""),e&&(t?s((jn[t]&&jn[t].get||o)(e,t,n,r)):function(a,l,c){return s((jn[a]&&jn[a].get||o)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=_i(e),e.length>1){var r=e.map(function(u){return qn.quickSetter(u,t,n)}),o=r.length;return function(u){for(var d=o;d--;)r[d](u)}}e=e[0]||{};var s=jn[t],a=ho(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;Go._pt=0,d.init(e,n?u+n:u,Go,0,[e]),d.render(1,d),Go._pt&&Ou(1,Go)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,o=qn.to(e,oi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return o.resetTo(t,l,c,u)};return s.tween=o,s},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=po(e.ease,Xs.ease)),yh(Xs,e||{})},config:function(e){return yh(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!jn[a]&&!ri[a]&&qs(t+" effect requires "+a+" plugin.")}),Ll[t]=function(a,l,c){return n(_i(a),oi(l||{},o),c)},s&&(Bn.prototype[t]=function(a,l,c){return this.add(Ll[t](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){mt[e]=po(t)},parseEase:function(e,t){return arguments.length?po(e,t):mt},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bn(e),r,o;for(n.smoothChildTiming=Hn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,r=kt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&ki(n,r,r._start-r._delay),r=o;return ki(kt,n,0),n},context:function(e,t){return e?new Kd(e,t):Ot},matchMedia:function(e){return new a0(e)},matchMediaRefresh:function(){return mo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ic()},addEventListener:function(e,t){var n=Ya[e]||(Ya[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ya[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:zm,wrapYoyo:Bm,distribute:Dd,random:Id,snap:Ld,normalize:Om,getUnit:wn,clamp:Im,splitColor:zd,toArray:_i,selector:Pc,mapRange:Fd,pipe:Fm,unitize:Nm,interpolate:km,shuffle:Pd},install:vd,effects:Ll,ticker:Jn,updateRoot:Bn.updateRoot,plugins:jn,globalTimeline:kt,core:{PropTween:Gn,globals:xd,Tween:Jt,Timeline:Bn,Animation:Ks,getCache:ho,_removeLinkedListItem:_l,reverting:function(){return mn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return bu=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return sl[i]=Jt[i]});Jn.add(Bn.updateRoot);Go=sl.to({},{duration:0});var l0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},c0=function(e,t){var n=e._targets,r,o,s;for(r in t)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=l0(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[o],r))},Ol=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(a){var l,c;if(fn(o)&&(l={},Vn(o,function(u){return l[u]=1}),o=l),t){l={};for(c in o)l[c]=t(o[c]);o=l}c0(a,o)}}}},qn=sl.registerPlugin({name:"attr",init:function(e,t,n,r,o){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],r,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ol("roundProps",Dc),Ol("modifiers"),Ol("snap",Ld))||sl;Jt.version=Bn.version=qn.version="3.15.0";gd=1;Eu()&&os();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Eh,Dr,$o,zu,co,Ah,Bu,u0=function(){return typeof window<"u"},hr={},io=180/Math.PI,Zo=Math.PI/180,To=Math.atan2,Rh=1e8,ku=/([A-Z])/g,h0=/(left|right|width|margin|padding|x)/i,f0=/[\s,\(]\S/,Hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},p0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},m0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},g0=function(e,t,n){return e.style[t]=n},v0=function(e,t,n){return e.style.setProperty(t,n)},x0=function(e,t,n){return e._gsap[t]=n},y0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},S0=function(e,t,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},M0=function(e,t,n,r,o){var s=e._gsap;s[t]=n,s.renderTransform(o,s)},Ht="transform",Wn=Ht+"Origin",w0=function i(e,t){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in hr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=or(r,a)}):this.tfm[e]=s.x?s[e]:or(r,e),e===Wn&&(this.tfm.zOrigin=s.zOrigin);else return Hi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=Ht}(o||t)&&this.props.push(e,t,o[e])},Qd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},b0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(ku,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Bu(),(!o||!o.isStart)&&!n[Ht]&&(Qd(n),r.zOrigin&&n[Wn]&&(n[Wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ep=function(e,t){var n={target:e,props:[],revert:b0,save:w0};return e._gsap||qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},tp,Fc=function(e,t){var n=Dr.createElementNS?Dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Dr.createElement(e);return n&&n.style?n:Dr.createElement(e)},ti=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ku,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ss(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),ss=function(e,t,n){var r=t||co,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ch[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Ch[s]:"")+e},Nc=function(){u0()&&window.document&&(Eh=window,Dr=Eh.document,$o=Dr.documentElement,co=Fc("div")||{style:{}},Fc("div"),Ht=ss(Ht),Wn=Ht+"Origin",co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tp=!!ss("perspective"),Bu=qn.core.reverting,zu=1)},Ph=function(e){var t=e.ownerSVGElement,n=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),$o.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),$o.removeChild(n),o},Dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},np=function(e){var t,n;try{t=e.getBBox()}catch{t=Ph(e),n=1}return t&&(t.width||t.height)||n||(t=Ph(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dh(e,["x","cx","x1"])||0,y:+Dh(e,["y","cy","y1"])||0,width:0,height:0}:t},ip=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&np(e))},Or=function(e,t){if(t){var n=e.style,r;t in hr&&t!==Wn&&(t=Ht),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(ku,"-$1").toLowerCase())):n.removeAttribute(t)}},Lr=function(e,t,n,r,o,s){var a=new Gn(e._pt,t,n,0,1,s?Jd:jd);return e._pt=a,a.b=r,a.e=o,e._props.push(n),a},Lh={deg:1,rad:1,turn:1},T0={grid:1,flex:1},zr=function i(e,t,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=co.style,l=h0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",v,g,_,p;if(r===s||!o||Lh[r]||Lh[s])return o;if(s!=="px"&&!f&&(o=i(e,t,n,"px")),p=e.getCTM&&ip(e),(m||s==="%")&&(hr[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],$t(m?o/v*d:o/100*v);if(a[l?"width":"height"]=d+(f?s:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Dr||!g.appendChild)&&(g=Dr.body),_=g._gsap,_&&m&&_.width&&l&&_.time===Jn.time&&!_.uncache)return $t(o/_.width*d);if(m&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+r,v=e[u],w?e.style[t]=w:Or(e,t)}else(m||s==="%")&&!T0[ti(g,"display")]&&(a.position=ti(e,"position")),g===e&&(a.position="static"),g.appendChild(co),v=co[u],g.removeChild(co),a.position="absolute";return l&&m&&(_=ho(g),_.time=Jn.time,_.width=g[u]),$t(f?v*o/d:v&&o?d/v*o:0)},or=function(e,t,n,r){var o;return zu||Nc(),t in Hi&&t!=="transform"&&(t=Hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(o=Js(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:ll(ti(e,Wn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=al[t]&&al[t](e,t,n)||ti(e,t)||Sd(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?zr(e,t,o,n)+n:o},E0=function(e,t,n,r){if(!n||n==="none"){var o=ss(t,e,1),s=o&&ti(e,o,1);s&&s!==n?(t=o,n=s):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new Gn(this._pt,e.style,t,0,1,$d),l=0,c=0,u,d,f,m,v,g,_,p,w,S,x,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ti(e,t)||r,g?e.style[t]=g:Or(e,t)),u=[n,r],kd(u),n=u[0],r=u[1],f=n.match(Vo)||[],C=r.match(Vo)||[],C.length){for(;d=Vo.exec(r);)_=d[0],w=r.substring(l,d.index),v?v=(v+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(v=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,x=g.substr((m+"").length),_.charAt(1)==="="&&(_=Yo(m,_)+x),p=parseFloat(_),S=_.substr((p+"").length),l=Vo.lastIndex-S.length,S||(S=S||ni.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(m=zr(e,t,g,S)||0),a._pt={_next:a._pt,p:w||c===1?w:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Jd:jd;return _d.test(r)&&(a.e=0),this._pt=a,a},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A0=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ih[n]||n,t[1]=Ih[r]||r,t.join(" ")},R0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,s=n._gsap,a,l,c;if(o==="all"||o===!0)r.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],hr[a]&&(l=1,a=a==="transformOrigin"?Wn:Ht),Or(n,a);l&&(Or(n,Ht),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Js(n,1),s.uncache=1,Qd(r)))}},al={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new Gn(e._pt,t,n,0,0,R0);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},js=[1,0,0,1,0,0],rp={},op=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uh=function(e){var t=ti(e,Ht);return op(t)?js:t.substr(7).match(md).map($t)},Hu=function(e,t){var n=e._gsap||ho(e),r=e.style,o=Uh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?js:o):(o===js&&!e.offsetParent&&e!==$o&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,$o.appendChild(e)),o=Uh(e),l?r.display=l:Or(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):$o.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Oc=function(e,t,n,r,o,s){var a=e._gsap,l=o||Hu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],g=l[2],_=l[3],p=l[4],w=l[5],S=t.split(" "),x=parseFloat(S[0])||0,C=parseFloat(S[1])||0,R,A,P,b;n?l!==js&&(A=m*_-v*g)&&(P=x*(_/A)+C*(-g/A)+(g*w-_*p)/A,b=x*(-v/A)+C*(m/A)-(m*w-v*p)/A,x=P,C=b):(R=np(e),x=R.x+(~S[0].indexOf("%")?x/100*R.width:x),C=R.y+(~(S[1]||S[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&a.smooth?(p=x-c,w=C-u,a.xOffset=d+(p*m+w*g)-p,a.yOffset=f+(p*v+w*_)-w):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Wn]="0px 0px",s&&(Lr(s,a,"xOrigin",c,x),Lr(s,a,"yOrigin",u,C),Lr(s,a,"xOffset",d,a.xOffset),Lr(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+C)},Js=function(e,t){var n=e._gsap||new Vd(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=ti(e,Wn)||"0",u,d,f,m,v,g,_,p,w,S,x,C,R,A,P,b,M,D,N,F,V,W,G,k,H,le,K,ye,Se,Le,j,oe;return u=d=f=g=_=p=w=S=x=0,m=v=1,n.svg=!!(e.getCTM&&ip(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),r.scale=r.rotate=r.translate="none"),A=Hu(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Oc(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,R=n.yOrigin||0,A!==js&&(D=A[0],N=A[1],F=A[2],V=A[3],u=W=A[4],d=G=A[5],A.length===6?(m=Math.sqrt(D*D+N*N),v=Math.sqrt(V*V+F*F),g=D||N?To(N,D)*io:0,w=F||V?To(F,V)*io+g:0,w&&(v*=Math.abs(Math.cos(w*Zo))),n.svg&&(u-=C-(C*D+R*F),d-=R-(C*N+R*V))):(oe=A[6],Le=A[7],K=A[8],ye=A[9],Se=A[10],j=A[11],u=A[12],d=A[13],f=A[14],P=To(oe,Se),_=P*io,P&&(b=Math.cos(-P),M=Math.sin(-P),k=W*b+K*M,H=G*b+ye*M,le=oe*b+Se*M,K=W*-M+K*b,ye=G*-M+ye*b,Se=oe*-M+Se*b,j=Le*-M+j*b,W=k,G=H,oe=le),P=To(-F,Se),p=P*io,P&&(b=Math.cos(-P),M=Math.sin(-P),k=D*b-K*M,H=N*b-ye*M,le=F*b-Se*M,j=V*M+j*b,D=k,N=H,F=le),P=To(N,D),g=P*io,P&&(b=Math.cos(P),M=Math.sin(P),k=D*b+N*M,H=W*b+G*M,N=N*b-D*M,G=G*b-W*M,D=k,W=H),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),m=$t(Math.sqrt(D*D+N*N+F*F)),v=$t(Math.sqrt(G*G+oe*oe)),P=To(W,G),w=Math.abs(P)>2e-4?P*io:0,x=j?1/(j<0?-j:j):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!op(ti(e,Ht)),k&&e.setAttribute("transform",k))),Math.abs(w)>90&&Math.abs(w)<270&&(o?(m*=-1,w+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=$t(m),n.scaleY=$t(v),n.rotation=$t(g)+a,n.rotationX=$t(_)+a,n.rotationY=$t(p)+a,n.skewX=w+a,n.skewY=S+a,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Wn]=ll(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?P0:tp?sp:C0,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},zl=function(e,t,n){var r=wn(t);return $t(parseFloat(t)+parseFloat(zr(e,"x",n+"px",r)))+r},C0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sp(e,t)},Yr="0deg",Ms="0px",$r=") ",sp=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,w=n.target,S=n.zOrigin,x="",C=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Yr||u!==Yr)){var R=parseFloat(u)*Zo,A=Math.sin(R),P=Math.cos(R),b;R=parseFloat(d)*Zo,b=Math.cos(R),s=zl(w,s,A*b*-S),a=zl(w,a,-Math.sin(R)*-S),l=zl(w,l,P*b*-S+S)}_!==Ms&&(x+="perspective("+_+$r),(r||o)&&(x+="translate("+r+"%, "+o+"%) "),(C||s!==Ms||a!==Ms||l!==Ms)&&(x+=l!==Ms||C?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+$r),c!==Yr&&(x+="rotate("+c+$r),u!==Yr&&(x+="rotateY("+u+$r),d!==Yr&&(x+="rotateX("+d+$r),(f!==Yr||m!==Yr)&&(x+="skew("+f+", "+m+$r),(v!==1||g!==1)&&(x+="scale("+v+", "+g+$r),w.style[Ht]=x||"translate(0, 0)"},P0=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,w=n.forceCSS,S=parseFloat(s),x=parseFloat(a),C,R,A,P,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zo,c*=Zo,C=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Zo,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,P*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),C*=b,R*=b)),C=$t(C),R=$t(R),A=$t(A),P=$t(P)):(C=d,P=f,R=A=0),(S&&!~(s+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=zr(m,"x",s,"px"),x=zr(m,"y",a,"px")),(v||g||_||p)&&(S=$t(S+v-(v*C+g*A)+_),x=$t(x+g-(v*R+g*P)+p)),(r||o)&&(b=m.getBBox(),S=$t(S+r/100*b.width),x=$t(x+o/100*b.height)),b="matrix("+C+","+R+","+A+","+P+","+S+","+x+")",m.setAttribute("transform",b),w&&(m.style[Ht]=b)},D0=function(e,t,n,r,o){var s=360,a=fn(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?io:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=o.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*Rh)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*Rh)%s-~~(c/s)*s)),e._pt=f=new Gn(e._pt,t,n,r,c,d0),f.e=u,f.u="deg",e._props.push(n),f},Fh=function(e,t){for(var n in t)e[n]=t[n];return e},L0=function(e,t,n){var r=Fh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,d,f,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Ht]=t,a=Js(n,1),Or(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],s[Ht]=t,a=Js(n,1),s[Ht]=c);for(l in hr)c=r[l],u=a[l],c!==u&&o.indexOf(l)<0&&(m=wn(c),v=wn(u),d=m!==v?zr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Gn(e._pt,a,l,d,f-d,Uc),e._pt.u=v||0,e._props.push(l));Fh(a,r)};Vn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",o="Left",s=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(a){return e<2?i+a:"border"+a+i});al[e>1?"border"+i:i]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=s.map(function(v){return or(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(v,g){return m[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,d)}});var ap={name:"css",register:Nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var s=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,g,_,p,w,S,x,C,R,A,P,b;zu||Nc(),this.styles=this.styles||ep(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(jn[g]&&Gd(g,t,n,r,e,o)))){if(m=typeof u,v=al[g],m==="function"&&(u=u.call(n,r,e,o),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=$s(u)),v)v(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ur.lastIndex=0,Ur.test(c)||(_=wn(c),p=wn(u),p?_!==p&&(c=zr(e,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,r,o,0,0,g),s.push(g),P.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,o):l[g],fn(c)&&~c.indexOf("random(")&&(c=$s(c)),wn(c+"")||c==="auto"||(c+=ni.units[g]||wn(or(e,g))||""),(c+"").charAt(1)==="="&&(c=or(e,g))):c=or(e,g),f=parseFloat(c),w=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),w&&(u=u.substr(2)),d=parseFloat(u),g in Hi&&(g==="autoAlpha"&&(f===1&&or(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),Lr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Hi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in hr,S){if(this.styles.save(g),b=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=ti(e,"perspective"),M?e.style.perspective=M:Or(e,"perspective")}d=parseFloat(u)}if(x||(C=e._gsap,C.renderTransform&&!t.parseTransform||Js(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,x=this._pt=new Gn(this._pt,a,Ht,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new Gn(this._pt,C,"scaleY",C.scaleY,(w?Yo(C.scaleY,w+d):d)-C.scaleY||0,Uc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Wn,0,a[Wn]),u=A0(u),C.svg?Oc(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Lr(this,C,"zOrigin",C.zOrigin,p),Lr(this,a,g,ll(c),ll(u)));continue}else if(g==="svgOrigin"){Oc(e,u,1,R,0,this);continue}else if(g in rp){D0(this,C,g,f,w?Yo(f,w+u):u);continue}else if(g==="smoothOrigin"){Lr(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){L0(this,u,e);continue}}else g in a||(g=ss(g)||g);if(S||(d||d===0)&&(f||f===0)&&!f0.test(u)&&g in a)_=(c+"").substr((f+"").length),d||(d=0),p=wn(u)||(g in ni.units?ni.units[g]:_),_!==p&&(f=zr(e,g,c,p)),this._pt=new Gn(this._pt,S?C:a,g,f,(w?Yo(f,w+d):d)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?_0:Uc),this._pt.u=p||0,S&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=m0):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=p0);else if(g in a)E0.call(this,e,g,c,w?w+u:u);else if(g in e)this.add(e,g,c||e[g],w?w+u:u,r,o);else if(g!=="parseTransform"){Ru(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),s.push(g)}}A&&Zd(this)},render:function(e,t){if(t.tween._time||!Bu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Hi,getSetter:function(e,t,n){var r=Hi[t];return r&&r.indexOf(",")<0&&(t=r),t in hr&&t!==Wn&&(e._gsap.x||or(e,"x"))?n&&Ah===n?t==="scale"?y0:x0:(Ah=n||{})&&(t==="scale"?S0:M0):e.style&&!Tu(e.style[t])?g0:~t.indexOf("-")?v0:Nu(e,t)},core:{_removeProperty:Or,_getMatrix:Hu}};qn.utils.checkPrefix=ss;qn.core.getStyleSaver=ep;(function(i,e,t,n){var r=Vn(i+","+e+","+t,function(o){hr[o]=1});Vn(e,function(o){ni.units[o]="deg",rp[o]=1}),Hi[r[13]]=i+","+e,Vn(n,function(o){var s=o.split(":");Hi[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ni.units[i]="px"});qn.registerPlugin(ap);var Vu=qn.registerPlugin(ap)||qn;Vu.core.Tween;const lp=[{id:"oryzo_ai",title:"Oryzo AI",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/oryzo_ai",colorBg:"#1a1411",colorText:"#ffedd7"},{id:"atlas_motion",title:"Atlas Motion",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/atlas_motion",colorBg:"#181818",colorText:"#ffffff"},{id:"devin_ai",title:"Devin AI",tags:"web • design • development • 3d",url:"https://lusion.co/projects/devin_ai",colorBg:"#121414",colorText:"#ffffff"},{id:"of_the_oak",title:"Of The Oak",tags:"web • design • development • 3d • animation",url:"https://lusion.co/projects/of_the_oak",colorBg:"#111a13",colorText:"#e8ffe9"},{id:"everswap",title:"Everswap",tags:"concept • web • design • development • 3d • animation",url:"https://lusion.co/projects/everswap",colorBg:"#E3E3F8",colorText:"#111111"},{id:"porsche_dream_machine",title:"Porsche: Dream Machine",tags:"concept • 3D illustration • mograph • video",url:"https://lusion.co/projects/porsche_dream_machine",colorBg:"#EFD5D3",colorText:"#1a0a0a"},{id:"synthetic_human",title:"Synthetic Human",tags:"web • design • development • 3d",url:"https://lusion.co/projects/synthetic_human",colorBg:"#9d8aff",colorText:"#120820"},{id:"spatial_fusion",title:"Meta: Spatial Fusion",tags:"web • design • development • 3d",url:"https://lusion.co/projects/spatial_fusion",colorBg:"#D6C8ED",colorText:"#1a1020"},{id:"spaace",title:"Spaace - NFT Marketplace",tags:"web • design • development • 3d • web3",url:"https://lusion.co/projects/spaace",colorBg:"#010a16",colorText:"#d6ecff"},{id:"ddd_2024",title:"DDD 2024",tags:"web • design • development • 3d",url:"https://lusion.co/projects/ddd_2024",colorBg:"#261c46",colorText:"#efe8ff"},{id:"choo_choo_world",title:"Choo Choo World",tags:"concept • web • game design • 3d",url:"https://lusion.co/projects/choo_choo_world",colorBg:"#E8EEF8",colorText:"#101418"},{id:"soda_experience",title:"Soda Experience",tags:"AR • development • 3d",url:"https://lusion.co/projects/soda_experience",colorBg:"#E1E2E4",colorText:"#111111"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gu="170",I0=0,Nh=1,U0=2,cp=1,F0=2,tr=3,Br=0,Xn=1,bn=2,Ci=0,Fr=1,Oh=2,zh=3,Bh=4,Qs=5,Ln=100,N0=101,O0=102,z0=103,B0=104,$a=200,fi=201,k0=202,H0=203,Ko=204,jo=205,V0=206,G0=207,W0=208,X0=209,q0=210,Y0=211,$0=212,Z0=213,K0=214,zc=0,Bc=1,kc=2,as=3,Hc=4,Vc=5,Gc=6,Wc=7,up=0,j0=1,J0=2,Gi=0,Q0=1,e_=2,t_=3,n_=4,i_=5,r_=6,o_=7,hp=300,ls=301,cs=302,Xc=303,qc=304,xl=306,Jo=1e3,In=1001,cl=1002,nn=1003,s_=1004,pa=1005,pt=1006,Bl=1007,Ri=1008,Pi=1009,fp=1010,dp=1011,go=1012,Wu=1013,vo=1014,kn=1015,Vi=1016,Xu=1017,qu=1018,us=1020,pp=35902,mp=1021,_p=1022,pn=1023,gp=1024,vp=1025,Qo=1026,hs=1027,Yu=1028,$u=1029,xp=1030,Zu=1031,Ku=1033,Za=33776,Ka=33777,ja=33778,Ja=33779,Yc=35840,$c=35841,Zc=35842,Kc=35843,jc=36196,Jc=37492,Qc=37496,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,ou=37813,su=37814,au=37815,lu=37816,cu=37817,uu=37818,hu=37819,fu=37820,du=37821,Qa=36492,pu=36494,mu=36495,yp=36283,_u=36284,gu=36285,vu=36286,a_=3200,l_=3201,c_=0,u_=1,Qt="",Pn="srgb",Xi="srgb-linear",yl="linear",Et="srgb",Eo=7680,kh=519,h_=512,f_=513,d_=514,Sp=515,p_=516,m_=517,__=518,g_=519,Hh=35044,xr=35048,Vh="300 es",ar=2e3,ul=2001;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Bs=Math.PI/180,ea=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function v_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function x_(i,e,t){return i!==e?(t-i)/(e-i):0}function ks(i,e,t){return(1-t)*i+t*e}function y_(i,e,t,n){return ks(i,e,1-Math.exp(-t*n))}function S_(i,e=1){return e-Math.abs(ju(i,e*2)-e)}function M_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function w_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function T_(i,e){return i+Math.random()*(e-i)}function E_(i){return i*(.5-Math.random())}function A_(i){i!==void 0&&(Gh=i);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R_(i){return i*Bs}function C_(i){return i*ea}function P_(i){return(i&i-1)===0&&i!==0}function D_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function I_(i,e,t,n,r){const o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+n)/2),u=s((e+n)/2),d=o((e-n)/2),f=s((e-n)/2),m=o((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ho(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:Bs,RAD2DEG:ea,generateUUID:ps,clamp:Mn,euclideanModulo:ju,mapLinear:v_,inverseLerp:x_,lerp:ks,damp:y_,pingpong:S_,smoothstep:M_,smootherstep:w_,randInt:b_,randFloat:T_,randFloatSpread:E_,seededRandom:A_,degToRad:R_,radToDeg:C_,isPowerOfTwo:P_,ceilPowerOfTwo:D_,floorPowerOfTwo:L_,setQuaternionFromProperEuler:I_,normalize:Rn,denormalize:Ho};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,r,o,s,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],g=r[0],_=r[3],p=r[6],w=r[1],S=r[4],x=r[7],C=r[2],R=r[5],A=r[8];return o[0]=s*g+a*w+l*C,o[3]=s*_+a*S+l*R,o[6]=s*p+a*x+l*A,o[1]=c*g+u*w+d*C,o[4]=c*_+u*S+d*R,o[7]=c*p+u*x+d*A,o[2]=f*g+m*w+v*C,o[5]=f*_+m*S+v*R,o[8]=f*p+m*x+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,m=c*o-s*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new ut;function Mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U_(){const i=ta("canvas");return i.style.display="block",i}const Wh={};function Us(i){i in Wh||(Wh[i]=!0,console.warn(i))}function F_(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function N_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?yl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],Yh=[.3127,.329],$h=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Xi]:{primaries:Xh,whitePoint:Yh,transfer:yl,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:Xh,whitePoint:Yh,transfer:Et,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}});let Ao;class z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ao===void 0&&(Ao=ta("canvas")),Ao.width=e.width,Ao.height=e.height;const n=Ao.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=cr(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Hl(r[s].image)):o.push(Hl(r[s]))}else o=Hl(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?z_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k_=0;class _n extends ds{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=In,r=In,o=pt,s=Ri,a=pn,l=Pi,c=_n.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ps(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=hp;_n.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(m+1)/2,C=(p+1)/2,R=(u+f)/4,A=(d+g)/4,P=(v+_)/4;return S>x&&S>C?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=R/n,o=A/n):x>C?x<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),n=R/r,o=P/r):C<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),n=A/o,r=P/o),this.set(n,r,o,t),this}let w=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(_-v)/w,this.y=(d-g)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends H_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bp extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==v){let _=1-a;const p=l*f+c*m+u*v+d*g,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,p*w);_=Math.sin(_*R)/C,a=Math.sin(a*R)/C}const x=a*w;if(l=l*_+f*x,c=c*_+m*x,u=u*_+v*x,d=d*_+g*x,_===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new q,Kh=new Un;class ms{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Si):Si.fromBufferAttribute(o,s),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),_a.subVectors(this.max,ws),Ro.subVectors(e.a,ws),Co.subVectors(e.b,ws),Po.subVectors(e.c,ws),yr.subVectors(Co,Ro),Sr.subVectors(Po,Co),Zr.subVectors(Ro,Po);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!Gl(t,Ro,Co,Po,_a)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,Ro,Co,Po,_a))?!1:(ga.crossVectors(yr,Sr),t=[ga.x,ga.y,ga.z],Gl(t,Ro,Co,Po,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new q,new q,new q,new q,new q,new q,new q,new q],Si=new q,ma=new ms,Ro=new q,Co=new q,Po=new q,yr=new q,Sr=new q,Zr=new q,ws=new q,_a=new q,ga=new q,Kr=new q;function Gl(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Kr.fromArray(i,o);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const G_=new ms,bs=new q,Wl=new q;class Ju{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G_.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Wl)),this.expandByPoint(bs.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new q,Xl=new q,va=new q,Mr=new q,ql=new q,xa=new q,Yl=new q;class W_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xl.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Xl);const o=e.distanceTo(t)*.5,s=-this.direction.dot(va),a=Mr.dot(this.direction),l=-Mr.dot(va),c=Mr.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*l-a,f=s*a-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,m=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xl).addScaledVector(va,f),m}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),r=Zi.dot(Zi)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,r,o){ql.subVectors(t,e),xa.subVectors(n,e),Yl.crossVectors(ql,xa);let s=this.direction.dot(Yl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Mr.subVectors(this.origin,e);const l=a*this.direction.dot(xa.crossVectors(Mr,xa));if(l<0)return null;const c=a*this.direction.dot(ql.cross(Mr));if(c<0||l+c>s)return null;const u=-a*Mr.dot(Yl);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_)}set(e,t,n,r,o,s,a,l,c,u,d,f,m,v,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Do.setFromMatrixColumn(e,0).length(),o=1/Do.setFromMatrixColumn(e,1).length(),s=1/Do.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,g=c*d;t[0]=f-g*a,t[4]=-s*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=a*u,g=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,q_)}lookAt(e,t,n){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),wr.crossVectors(n,Zn),wr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),wr.crossVectors(n,Zn)),wr.normalize(),ya.crossVectors(Zn,wr),r[0]=wr.x,r[4]=ya.x,r[8]=Zn.x,r[1]=wr.y,r[5]=ya.y,r[9]=Zn.y,r[2]=wr.z,r[6]=ya.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],g=n[6],_=n[10],p=n[14],w=n[3],S=n[7],x=n[11],C=n[15],R=r[0],A=r[4],P=r[8],b=r[12],M=r[1],D=r[5],N=r[9],F=r[13],V=r[2],W=r[6],G=r[10],k=r[14],H=r[3],le=r[7],K=r[11],ye=r[15];return o[0]=s*R+a*M+l*V+c*H,o[4]=s*A+a*D+l*W+c*le,o[8]=s*P+a*N+l*G+c*K,o[12]=s*b+a*F+l*k+c*ye,o[1]=u*R+d*M+f*V+m*H,o[5]=u*A+d*D+f*W+m*le,o[9]=u*P+d*N+f*G+m*K,o[13]=u*b+d*F+f*k+m*ye,o[2]=v*R+g*M+_*V+p*H,o[6]=v*A+g*D+_*W+p*le,o[10]=v*P+g*N+_*G+p*K,o[14]=v*b+g*F+_*k+p*ye,o[3]=w*R+S*M+x*V+C*H,o[7]=w*A+S*D+x*W+C*le,o[11]=w*P+S*N+x*G+C*K,o[15]=w*b+S*F+x*k+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],_=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*a*f+n*c*f+r*a*m-n*l*m)+g*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*u-o*l*u)+_*(+t*c*d-t*a*m-o*s*d+n*s*m+o*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],_=e[14],p=e[15],w=d*_*c-g*f*c+g*l*m-a*_*m-d*l*p+a*f*p,S=v*f*c-u*_*c-v*l*m+s*_*m+u*l*p-s*f*p,x=u*g*c-v*d*c+v*a*m-s*g*m-u*a*p+s*d*p,C=v*d*l-u*g*l-v*a*f+s*g*f+u*a*_-s*d*_,R=t*w+n*S+r*x+o*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(g*f*o-d*_*o-g*r*m+n*_*m+d*r*p-n*f*p)*A,e[2]=(a*_*o-g*l*o+g*r*c-n*_*c-a*r*p+n*l*p)*A,e[3]=(d*l*o-a*f*o-d*r*c+n*f*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(u*_*o-v*f*o+v*r*m-t*_*m-u*r*p+t*f*p)*A,e[6]=(v*l*o-s*_*o-v*r*c+t*_*c+s*r*p-t*l*p)*A,e[7]=(s*f*o-u*l*o+u*r*c-t*f*c-s*r*m+t*l*m)*A,e[8]=x*A,e[9]=(v*d*o-u*g*o-v*n*m+t*g*m+u*n*p-t*d*p)*A,e[10]=(s*g*o-v*a*o+v*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*m-t*a*m)*A,e[12]=C*A,e[13]=(u*g*r-v*d*r+v*n*f-t*g*f-u*n*_+t*d*_)*A,e[14]=(v*a*r-s*g*r-v*n*l+t*g*l+s*n*_-t*a*_)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,f=o*c,m=o*u,v=o*d,g=s*u,_=s*d,p=a*d,w=l*c,S=l*u,x=l*d,C=n.x,R=n.y,A=n.z;return r[0]=(1-(g+p))*C,r[1]=(m+x)*C,r[2]=(v-S)*C,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(f+p))*R,r[6]=(_+w)*R,r[7]=0,r[8]=(v+S)*A,r[9]=(_-w)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Do.set(r[0],r[1],r[2]).length();const s=Do.set(r[4],r[5],r[6]).length(),a=Do.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const c=1/o,u=1/s,d=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=ar){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===ar)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===ul)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=ar){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),f=(t+e)*c,m=(n+r)*u;let v,g;if(a===ar)v=(s+o)*d,g=-2*d;else if(a===ul)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Do=new q,Mi=new vt,X_=new q(0,0,0),q_=new q(1,1,1),wr=new q,ya=new q,Zn=new q,jh=new vt,Jh=new Un;class si{constructor(e=0,t=0,n=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const Qh=new q,Lo=new Un,Ki=new vt,Sa=new q,Ts=new q,$_=new q,Z_=new Un,ef=new q(1,0,0),tf=new q(0,1,0),nf=new q(0,0,1),rf={type:"added"},K_={type:"removed"},Io={type:"childadded",child:null},$l={type:"childremoved",child:null};class ii extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new q,t=new si,n=new Un,r=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ut}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ts,Sa,this.up):Ki.lookAt(Sa,Ts,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(Ki),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Io.child=e,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K_),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ii.DEFAULT_UP=new q(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new q,ji=new q,Zl=new q,Ji=new q,Uo=new q,Fo=new q,of=new q,Kl=new q,jl=new q,Jl=new q,Ql=new Ut,ec=new Ut,tc=new Ut;class Ai{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wi.subVectors(e,t),r.cross(wi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){wi.subVectors(r,t),ji.subVectors(n,t),Zl.subVectors(e,t);const s=wi.dot(wi),a=wi.dot(ji),l=wi.dot(Zl),c=ji.dot(ji),u=ji.dot(Zl),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,v=(s*u-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ji.x),l.addScaledVector(s,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Ql.setScalar(0),ec.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ql,o.x),s.addScaledVector(ec,o.y),s.addScaledVector(tc,o.z),s}static isFrontFacing(e,t,n,r){return wi.subVectors(n,t),ji.subVectors(e,t),wi.cross(ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),wi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ai.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Uo.subVectors(r,n),Fo.subVectors(o,n),Kl.subVectors(e,n);const l=Uo.dot(Kl),c=Fo.dot(Kl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,r);const u=Uo.dot(jl),d=Fo.dot(jl);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Uo,s);Jl.subVectors(e,o);const m=Uo.dot(Jl),v=Fo.dot(Jl);if(v>=0&&m<=v)return t.copy(o);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Fo,a);const _=u*v-m*d;if(_<=0&&d-u>=0&&m-v>=0)return of.subVectors(o,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(of,a);const p=1/(_+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(Uo,s).addScaledVector(Fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ju(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=nc(s,o,e+1/3),this.g=nc(s,o,e),this.b=nc(s,o,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Pn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return yt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Mn(vn.r*255,0,255))*65536+Math.round(Mn(vn.g*255,0,255))*256+Math.round(Mn(vn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,r=vn.g,o=vn.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Pn){yt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,r=vn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Ma);const n=ks(br.h,Ma.h,t),r=ks(br.s,Ma.s,t),o=ks(br.l,Ma.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ze;Ze.NAMES=Ep;let j_=0;class Sl extends ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ps(),this.name="",this.blending=Fr,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qu extends Sl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sr=J_();function J_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const o=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,o[l]=c|u}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:s,offsetTable:a}}function Q_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Mn(i,-65504,65504),sr.floatView[0]=i;const e=sr.uint32View[0],t=e>>23&511;return sr.baseTable[t]+((e&8388607)>>sr.shiftTable[t])}function eg(i){const e=i>>10;return sr.uint32View[0]=sr.mantissaTable[sr.offsetTable[e]+(i&1023)]+sr.exponentTable[e],sr.floatView[0]}const sf={toHalfFloat:Q_,fromHalfFloat:eg},jt=new q,wa=new nt;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ho(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class Ap extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rp extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _o extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tg=0;const ui=new vt,ic=new ii,No=new q,Kn=new ms,Es=new ms,hn=new q;class dr extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?Rp:Ap)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ut().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _o(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ju);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Kn.min,Es.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Es.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Es.min),Kn.expandByPoint(Es.max))}Kn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)hn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(No.fromBufferAttribute(e,c),hn.add(No)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,u=new q,d=new q,f=new nt,m=new nt,v=new nt,g=new q,_=new q;function p(P,b,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),f.fromBufferAttribute(o,P),m.fromBufferAttribute(o,b),v.fromBufferAttribute(o,M),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(D),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),a[P].add(g),a[b].add(g),a[M].add(g),l[P].add(_),l[b].add(_),l[M].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,b=w.length;P<b;++P){const M=w[P],D=M.start,N=M.count;for(let F=D,V=D+N;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new q,x=new q,C=new q,R=new q;function A(P){C.fromBufferAttribute(r,P),R.copy(C);const b=a[P];S.copy(b),S.sub(C.multiplyScalar(C.dot(b))).normalize(),x.crossVectors(R,b);const D=x.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,b=w.length;P<b;++P){const M=w[P],D=M.start,N=M.count;for(let F=D,V=D+N;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[m++]}return new Gt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new vt,jr=new W_,ba=new Ju,lf=new q,Ta=new q,Ea=new q,Aa=new q,rc=new q,Ra=new q,cf=new q,Ca=new q;class It extends ii{constructor(e=new dr,t=new Qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ra.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(rc.fromBufferAttribute(d,e),s?Ra.addScaledVector(rc,u):Ra.addScaledVector(rc.sub(t),u))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(o),jr.copy(e.ray).recast(e.near),!(ba.containsPoint(jr.origin)===!1&&(jr.intersectSphere(ba,lf)===null||jr.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(af.copy(o).invert(),jr.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],w=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let x=w,C=S;x<C;x+=3){const R=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=Pa(this,p,e,n,c,u,d,R,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const w=a.getX(_),S=a.getX(_+1),x=a.getX(_+2);r=Pa(this,s,e,n,c,u,d,w,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const _=f[v],p=s[_.materialIndex],w=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let x=w,C=S;x<C;x+=3){const R=x,A=x+1,P=x+2;r=Pa(this,p,e,n,c,u,d,R,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let _=v,p=g;_<p;_+=3){const w=_,S=_+1,x=_+2;r=Pa(this,s,e,n,c,u,d,w,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function ng(i,e,t,n,r,o,s,a){let l;if(e.side===Xn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Br,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ta),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Aa);const u=ng(i,e,t,n,Ta,Ea,Aa,cf);if(u){const d=new q;Ai.getBarycoord(cf,Ta,Ea,Aa,d),r&&(u.uv=Ai.getInterpolatedAttribute(r,a,l,c,d,new nt)),o&&(u.uv1=Ai.getInterpolatedAttribute(o,a,l,c,d,new nt)),s&&(u.normal=Ai.getInterpolatedAttribute(s,a,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Ai.getNormal(Ta,Ea,Aa,f.normal),u.face=f,u.barycoord=d}return u}class ia extends dr{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new _o(c,3)),this.setAttribute("normal",new _o(u,3)),this.setAttribute("uv",new _o(d,2));function v(g,_,p,w,S,x,C,R,A,P,b){const M=x/A,D=C/P,N=x/2,F=C/2,V=R/2,W=A+1,G=P+1;let k=0,H=0;const le=new q;for(let K=0;K<G;K++){const ye=K*D-F;for(let Se=0;Se<W;Se++){const Le=Se*M-N;le[g]=Le*w,le[_]=ye*S,le[p]=V,c.push(le.x,le.y,le.z),le[g]=0,le[_]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),d.push(Se/A),d.push(1-K/P),k+=1}}for(let K=0;K<P;K++)for(let ye=0;ye<A;ye++){const Se=f+ye+W*K,Le=f+ye+W*(K+1),j=f+(ye+1)+W*(K+1),oe=f+(ye+1)+W*K;l.push(Se,Le,oe),l.push(Le,j,oe),H+=6}a.addGroup(m,H,b),m+=H,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const r in n)e[r]=n[r]}return e}function ig(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const rg={clone:fs,merge:Cn};var og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Sl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pp extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new q,uf=new nt,hf=new nt;class zn extends Pp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,uf,hf),t.subVectors(hf,uf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oo=-90,zo=1;class ag extends ii{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Oo,zo,e,t);r.layers=this.layers,this.add(r);const o=new zn(Oo,zo,e,t);o.layers=this.layers,this.add(o);const s=new zn(Oo,zo,e,t);s.layers=this.layers,this.add(s);const a=new zn(Oo,zo,e,t);a.layers=this.layers,this.add(a);const l=new zn(Oo,zo,e,t);l.layers=this.layers,this.add(l);const c=new zn(Oo,zo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===ar)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Dp extends _n{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lg extends fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ia(5,5,5),o=new At({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Ci});o.uniforms.tEquirect.value=t;const s=new It(r,o),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=pt),new ag(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}const oc=new q,cg=new q,ug=new ut;class ro{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=oc.subVectors(n,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ug.getNormalMatrix(e),r=this.coplanarPoint(oc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Ju,Da=new q;class Lp{constructor(e=new ro,t=new ro,n=new ro,r=new ro,o=new ro,s=new ro){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ar){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],_=r[11],p=r[12],w=r[13],S=r[14],x=r[15];if(n[0].setComponents(l-o,f-c,_-m,x-p).normalize(),n[1].setComponents(l+o,f+c,_+m,x+p).normalize(),n[2].setComponents(l+s,f+u,_+v,x+w).normalize(),n[3].setComponents(l-s,f-u,_-v,x-w).normalize(),n[4].setComponents(l-a,f-d,_-g,x-S).normalize(),t===ar)n[5].setComponents(l+a,f+d,_+g,x+S).normalize();else if(t===ul)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ip(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function hg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Di extends dr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],g=[],_=[];for(let p=0;p<u;p++){const w=p*f-s;for(let S=0;S<c;S++){const x=S*d-o;v.push(x,-w,0),g.push(0,0,1),_.push(S/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const S=w+c*p,x=w+c*(p+1),C=w+1+c*(p+1),R=w+1+c*p;m.push(S,x,R),m.push(x,C,R)}this.setIndex(m),this.setAttribute("position",new _o(v,3)),this.setAttribute("normal",new _o(g,3)),this.setAttribute("uv",new _o(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
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
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fg=`#define PI 3.141592653589793
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
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Og=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,uv=`struct PhysicalMaterial {
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
}`,hv=`
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
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
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,zx=`#define TOON
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
}`,Bx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:fg,alphahash_pars_fragment:dg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:_g,alphatest_pars_fragment:gg,aomap_fragment:vg,aomap_pars_fragment:xg,batching_pars_vertex:yg,batching_vertex:Sg,begin_vertex:Mg,beginnormal_vertex:wg,bsdfs:bg,iridescence_fragment:Tg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Dg,color_pars_fragment:Lg,color_pars_vertex:Ig,color_vertex:Ug,common:Fg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Og,displacementmap_pars_vertex:zg,displacementmap_vertex:Bg,emissivemap_fragment:kg,emissivemap_pars_fragment:Hg,colorspace_fragment:Vg,colorspace_pars_fragment:Gg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:qg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:rv,envmap_vertex:$g,fog_vertex:Zg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:ov,lights_toon_pars_fragment:sv,lights_phong_fragment:av,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:hv,lights_fragment_maps:fv,lights_fragment_end:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:yv,map_particle_pars_fragment:Sv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:wv,morphinstance_vertex:bv,morphcolor_vertex:Tv,morphnormal_vertex:Ev,morphtarget_pars_vertex:Av,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:zv,opaque_fragment:Bv,packing:kv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:$v,shadowmap_vertex:Zv,shadowmask_pars_fragment:Kv,skinbase_vertex:jv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:rx,transmission_fragment:ox,transmission_pars_fragment:sx,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:vx,distanceRGBA_vert:xx,distanceRGBA_frag:yx,equirect_vert:Sx,equirect_frag:Mx,linedashed_vert:wx,linedashed_frag:bx,meshbasic_vert:Tx,meshbasic_frag:Ex,meshlambert_vert:Ax,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Nx,meshtoon_vert:Ox,meshtoon_frag:zx,points_vert:Bx,points_frag:kx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:Wx},Ne={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Bi={basic:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Cn([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Cn([Ne.lights,Ne.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Bi.physical={uniforms:Cn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const La={r:0,b:0,g:0},Qr=new si,Xx=new vt;function qx(i,e,t,n,r,o,s){const a=new Ze(0);let l=o===!0?0:1,c,u,d=null,f=0,m=null;function v(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function g(w){let S=!1;const x=v(w);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,S){const x=v(S);x&&(x.isCubeTexture||x.mapping===xl)?(u===void 0&&(u=new It(new ia(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:fs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qr.copy(S.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Qr)),u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Et,(d!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new It(new Di(2,2),new At({name:"BackgroundMaterial",uniforms:fs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(La,Cp(i)),n.buffers.color.setClear(La.r,La.g,La.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:g,addToRenderList:_}}function Yx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(M,D,N,F,V){let W=!1;const G=d(F,N,D);o!==G&&(o=G,c(o.object)),W=m(M,F,N,V),W&&v(M,F,N,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,x(M,D,N,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,D,N){const F=N.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[D.id];W===void 0&&(W={},V[D.id]=W);let G=W[F];return G===void 0&&(G=f(l()),W[F]=G),G}function f(M){const D=[],N=[],F=[];for(let V=0;V<t;V++)D[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,D,N,F){const V=o.attributes,W=D.attributes;let G=0;const k=N.getAttributes();for(const H in k)if(k[H].location>=0){const K=V[H];let ye=W[H];if(ye===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),K===void 0||K.attribute!==ye||ye&&K.data!==ye.data)return!0;G++}return o.attributesNum!==G||o.index!==F}function v(M,D,N,F){const V={},W=D.attributes;let G=0;const k=N.getAttributes();for(const H in k)if(k[H].location>=0){let K=W[H];K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const ye={};ye.attribute=K,K&&K.data&&(ye.data=K.data),V[H]=ye,G++}o.attributes=V,o.attributesNum=G,o.index=F}function g(){const M=o.newAttributes;for(let D=0,N=M.length;D<N;D++)M[D]=0}function _(M){p(M,0)}function p(M,D){const N=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;N[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==D&&(i.vertexAttribDivisor(M,D),V[M]=D)}function w(){const M=o.newAttributes,D=o.enabledAttributes;for(let N=0,F=D.length;N<F;N++)D[N]!==M[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function S(M,D,N,F,V,W,G){G===!0?i.vertexAttribIPointer(M,D,N,V,W):i.vertexAttribPointer(M,D,N,F,V,W)}function x(M,D,N,F){g();const V=F.attributes,W=N.getAttributes(),G=D.defaultAttributeValues;for(const k in W){const H=W[k];if(H.location>=0){let le=V[k];if(le===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const K=le.normalized,ye=le.itemSize,Se=e.get(le);if(Se===void 0)continue;const Le=Se.buffer,j=Se.type,oe=Se.bytesPerElement,ce=j===i.INT||j===i.UNSIGNED_INT||le.gpuType===Wu;if(le.isInterleavedBufferAttribute){const se=le.data,Te=se.stride,Oe=le.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)_(H.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Pe=0;Pe<H.locationSize;Pe++)S(H.location+Pe,ye/H.locationSize,j,K,Te*oe,(Oe+ye/H.locationSize*Pe)*oe,ce)}else{if(le.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<H.locationSize;se++)_(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let se=0;se<H.locationSize;se++)S(H.location+se,ye/H.locationSize,j,K,ye*oe,ye/H.locationSize*se*oe,ce)}}else if(G!==void 0){const K=G[k];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(H.location,K);break;case 3:i.vertexAttrib3fv(H.location,K);break;case 4:i.vertexAttrib4fv(H.location,K);break;default:i.vertexAttrib1fv(H.location,K)}}}}w()}function C(){P();for(const M in n){const D=n[M];for(const N in D){const F=D[N];for(const V in F)u(F[V].object),delete F[V];delete D[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const N in D){const F=D[N];for(const V in F)u(F[V].object),delete F[V];delete D[N]}delete n[M.id]}function A(M){for(const D in n){const N=n[D];if(N[M.id]===void 0)continue;const F=N[M.id];for(const V in F)u(F[V].object),delete F[V];delete N[M.id]}}function P(){b(),s=!0,o!==r&&(o=r,c(o.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function $x(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:R}}function Kx(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new ro,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||o&&!_)o?u(null):c();else{const w=o?0:n,S=w*4;let x=p.clippingState||null;l.value=x,x=u(v,f,S,m);for(let C=0;C!==S;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const p=m+g*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,x=m;S!==g;++S,x+=4)s.copy(d[S]).applyMatrix4(w,a),s.normal.toArray(_,x),_[x+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function jx(i){let e=new WeakMap;function t(s,a){return a===Xc?s.mapping=ls:a===qc&&(s.mapping=cs),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Xc||a===qc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new lg(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class eh extends Pp{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wo=4,ff=[.125,.215,.35,.446,.526,.582],ao=20,sc=new eh,df=new Ze;let ac=null,lc=0,cc=0,uc=!1;const oo=(1+Math.sqrt(5))/2,Bo=1/oo,pf=[new q(-oo,Bo,0),new q(oo,Bo,0),new q(-Bo,0,oo),new q(Bo,0,oo),new q(0,oo,-Bo),new q(0,oo,Bo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,lc,cc),this._renderer.xr.enabled=uc,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Vi,format:pn,colorSpace:Xi,depthBuffer:!1},r=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jx(o)),this._blurMaterial=Qx(o,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,r){const a=new zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(df),u.toneMapping=Gi,u.autoClear=!1;const m=new Qu({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),v=new It(new ia,m);let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(df),g=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ia(r,w*S,p>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=pf[(r-o-1)%pf.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new It(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*ao-1),g=o/v,_=isFinite(o)?1+Math.floor(u*g):ao;_>ao&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ao}`);const p=[];let w=0;for(let A=0;A<ao;++A){const P=A/g,b=Math.exp(-P*P/2);p.push(b),A===0?w+=b:A<_&&(w+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const x=this._sizeLods[r],C=3*x*(r>S-Wo?r-S+Wo:0),R=4*(this._cubeSize-x);Ia(t,C,R,3*x,2*x),l.setRenderTarget(t),l.render(d,sc)}}function Jx(i){const e=[],t=[],n=[];let r=i;const o=i-Wo+1+ff.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Wo?l=ff[s-i+Wo-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,g=3,_=2,p=1,w=new Float32Array(g*v*m),S=new Float32Array(_*v*m),x=new Float32Array(p*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,P=R>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(b,g*v*R),S.set(f,_*v*R);const M=[R,R,R,R,R,R];x.set(M,p*v*R)}const C=new dr;C.setAttribute("position",new Gt(w,g)),C.setAttribute("uv",new Gt(S,_)),C.setAttribute("faceIndex",new Gt(x,p)),e.push(C),r>Wo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){const n=new fr(i,e,t);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qx(i,e,t){const n=new Float32Array(ao),r=new q(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:th(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function vf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function e1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xc||l===qc,u=l===ls||l===cs;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new mf(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new mf(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function t1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function n1(i,e,t,n){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let _=0,p=g.length;_<p;_++)e.update(g[_],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let S=0,x=w.length;S<x;S+=3){const C=w[S+0],R=w[S+1],A=w[S+2];f.push(C,R,R,A,A,C)}}else if(v!==void 0){const w=v.array;g=v.version;for(let S=0,x=w.length/3-1;S<x;S+=3){const C=S+0,R=S+1,A=S+2;f.push(C,R,R,A,A,C)}}else return;const _=new(Mp(f)?Rp:Ap)(f,1);_.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,_)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function i1(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let _=0;for(let p=0;p<v;p++)_+=m[p];t.update(_,n,1)}function d(f,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,v);let p=0;for(let w=0;w<v;w++)p+=m[w]*g[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function r1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function o1(i,e,t){const n=new WeakMap,r=new Ut;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let C=a.attributes.position.count*x,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*d),P=new bp(A,C,R,d);P.type=kn,P.needsUpdate=!0;const b=x*4;for(let D=0;D<d;D++){const N=p[D],F=w[D],V=S[D],W=C*R*4*D;for(let G=0;G<N.count;G++){const k=G*b;v===!0&&(r.fromBufferAttribute(N,G),A[W+k+0]=r.x,A[W+k+1]=r.y,A[W+k+2]=r.z,A[W+k+3]=0),g===!0&&(r.fromBufferAttribute(F,G),A[W+k+4]=r.x,A[W+k+5]=r.y,A[W+k+6]=r.z,A[W+k+7]=0),_===!0&&(r.fromBufferAttribute(V,G),A[W+k+8]=r.x,A[W+k+9]=r.y,A[W+k+10]=r.z,A[W+k+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new nt(C,R)},n.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function s1(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class hl extends _n{constructor(e,t,n,r,o,s,a,l,c,u=Qo){if(u!==Qo&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qo&&(n=vo),n===void 0&&u===hs&&(n=us),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Up=new _n,xf=new hl(1,1),Fp=new bp,Np=new V_,Op=new Dp,yf=[],Sf=[],Mf=new Float32Array(16),wf=new Float32Array(9),bf=new Float32Array(4);function _s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=yf[r];if(o===void 0&&(o=new Float32Array(r),yf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function a1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function h1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),on(t,n)}}function f1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;wf.set(n),i.uniformMatrix3fv(this.addr,!1,wf),on(t,n)}}function d1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),on(t,n)}}function p1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function v1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function M1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(xf.compareFunction=Sp,o=xf):o=Up,t.setTexture2D(e||o,r)}function w1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Np,r)}function b1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Op,r)}function T1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fp,r)}function E1(i){switch(i){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return h1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return _1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return T1}}function A1(i,e){i.uniform1fv(this.addr,e)}function R1(i,e){const t=_s(e,this.size,2);i.uniform2fv(this.addr,t)}function C1(i,e){const t=_s(e,this.size,3);i.uniform3fv(this.addr,t)}function P1(i,e){const t=_s(e,this.size,4);i.uniform4fv(this.addr,t)}function D1(i,e){const t=_s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L1(i,e){const t=_s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I1(i,e){const t=_s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U1(i,e){i.uniform1iv(this.addr,e)}function F1(i,e){i.uniform2iv(this.addr,e)}function N1(i,e){i.uniform3iv(this.addr,e)}function O1(i,e){i.uniform4iv(this.addr,e)}function z1(i,e){i.uniform1uiv(this.addr,e)}function B1(i,e){i.uniform2uiv(this.addr,e)}function k1(i,e){i.uniform3uiv(this.addr,e)}function H1(i,e){i.uniform4uiv(this.addr,e)}function V1(i,e,t){const n=this.cache,r=e.length,o=Ml(t,r);rn(n,o)||(i.uniform1iv(this.addr,o),on(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Up,o[s])}function G1(i,e,t){const n=this.cache,r=e.length,o=Ml(t,r);rn(n,o)||(i.uniform1iv(this.addr,o),on(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Np,o[s])}function W1(i,e,t){const n=this.cache,r=e.length,o=Ml(t,r);rn(n,o)||(i.uniform1iv(this.addr,o),on(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Op,o[s])}function X1(i,e,t){const n=this.cache,r=e.length,o=Ml(t,r);rn(n,o)||(i.uniform1iv(this.addr,o),on(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Fp,o[s])}function q1(i){switch(i){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return P1;case 35674:return D1;case 35675:return L1;case 35676:return I1;case 5124:case 35670:return U1;case 35667:case 35671:return F1;case 35668:case 35672:return N1;case 35669:case 35673:return O1;case 5125:return z1;case 36294:return B1;case 36295:return k1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}class Y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}}class $1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function K1(i,e,t){const n=i.name,r=n.length;for(hc.lastIndex=0;;){const o=hc.exec(n),s=hc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Tf(t,c===void 0?new Y1(a,i,e):new $1(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Z1(a),Tf(t,d)),t=d}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);K1(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Ef(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j1=37297;let J1=0;function Q1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Af=new ut;function ey(i){yt._getMatrix(Af,yt.workingColorSpace,i);const e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case yl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Q1(i.getShaderSource(e),s)}else return r}function ty(i,e){const t=ey(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ny(i,e){let t;switch(e){case Q0:t="Linear";break;case e_:t="Reinhard";break;case t_:t="Cineon";break;case n_:t="ACESFilmic";break;case r_:t="AgX";break;case o_:t="Neutral";break;case i_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ua=new q;function iy(){yt.getLuminanceCoefficients(Ua);const i=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function oy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Fs(i){return i!==""}function Cf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(i){return i.replace(ay,cy)}const ly=new Map;function cy(i,e){let t=ht[e];if(t===void 0){const n=ly.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xu(t)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(uy,hy)}function hy(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function fy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function my(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case up:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case J0:e="ENVMAP_BLENDING_ADD";break}return e}function _y(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gy(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=fy(t),c=dy(t),u=py(t),d=my(t),f=_y(t),m=ry(t),v=oy(o),g=r.createProgram();let _,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(_=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Gi?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ty("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),s=xu(s),s=Cf(s,t),s=Pf(s,t),a=xu(a),a=Cf(a,t),a=Pf(a,t),s=Df(s),a=Df(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+_+s,x=w+p+a,C=Ef(r,r.VERTEX_SHADER,S),R=Ef(r,r.FRAGMENT_SHADER,x);r.attachShader(g,C),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(R).trim();let W=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,R);else{const k=Rf(r,C,"vertex"),H=Rf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+k+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:W,programLog:N,vertexShader:{log:F,prefix:_},fragmentShader:{log:V,prefix:p}})}r.deleteShader(C),r.deleteShader(R),P=new el(r,g),b=sy(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,j1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let vy=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}}function Sy(i,e,t,n,r,o,s){const a=new Tp,l=new xy,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,M,D,N,F){const V=N.fog,W=F.geometry,G=b.isMeshStandardMaterial?N.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),H=k&&k.mapping===xl?k.image.height:null,le=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=K!==void 0?K.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let Le,j,oe,ce;if(le){const _t=Bi[le];Le=_t.vertexShader,j=_t.fragmentShader}else Le=b.vertexShader,j=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const se=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,Ge=!!b.map,Be=!!b.matcap,tt=!!k,z=!!b.aoMap,ke=!!b.lightMap,We=!!b.bumpMap,je=!!b.normalMap,Ue=!!b.displacementMap,qe=!!b.emissiveMap,ze=!!b.metalnessMap,U=!!b.roughnessMap,E=b.anisotropy>0,B=b.clearcoat>0,$=b.dispersion>0,ae=b.iridescence>0,ie=b.sheen>0,Re=b.transmission>0,de=E&&!!b.anisotropyMap,_e=B&&!!b.clearcoatMap,Ke=B&&!!b.clearcoatNormalMap,he=B&&!!b.clearcoatRoughnessMap,ue=ae&&!!b.iridescenceMap,ge=ae&&!!b.iridescenceThicknessMap,Ee=ie&&!!b.sheenColorMap,De=ie&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Xe=!!b.specularColorMap,Qe=!!b.specularIntensityMap,X=Re&&!!b.transmissionMap,ee=Re&&!!b.thicknessMap,te=!!b.gradientMap,fe=!!b.alphaMap,Ie=b.alphaTest>0,Fe=!!b.alphaHash,it=!!b.extensions;let St=Gi;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(St=i.toneMapping);const Xt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Le,fragmentShader:j,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xi,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:Be,envMap:tt,envMapMode:tt&&k.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:ke,bumpMap:We,normalMap:je,displacementMap:f&&Ue,emissiveMap:qe,normalMapObjectSpace:je&&b.normalMapType===u_,normalMapTangentSpace:je&&b.normalMapType===c_,metalnessMap:ze,roughnessMap:U,anisotropy:E,anisotropyMap:de,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:he,dispersion:$,iridescence:ae,iridescenceMap:ue,iridescenceThicknessMap:ge,sheen:ie,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Je,specularColorMap:Xe,specularIntensityMap:Qe,transmission:Re,transmissionMap:X,thicknessMap:ee,gradientMap:te,opaque:b.transparent===!1&&b.blending===Fr&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:Fe,combine:b.combine,mapUv:Ge&&g(b.map.channel),aoMapUv:z&&g(b.aoMap.channel),lightMapUv:ke&&g(b.lightMap.channel),bumpMapUv:We&&g(b.bumpMap.channel),normalMapUv:je&&g(b.normalMap.channel),displacementMapUv:Ue&&g(b.displacementMap.channel),emissiveMapUv:qe&&g(b.emissiveMap.channel),metalnessMapUv:ze&&g(b.metalnessMap.channel),roughnessMapUv:U&&g(b.roughnessMap.channel),anisotropyMapUv:de&&g(b.anisotropyMap.channel),clearcoatMapUv:_e&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(b.sheenRoughnessMap.channel),specularMapUv:Je&&g(b.specularMap.channel),specularColorMapUv:Xe&&g(b.specularColorMap.channel),specularIntensityMapUv:Qe&&g(b.specularIntensityMap.channel),transmissionMapUv:X&&g(b.transmissionMap.channel),thicknessMapUv:ee&&g(b.thicknessMap.channel),alphaMapUv:fe&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(je||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ge||fe),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:qe&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=v[b.type];let D;if(M){const N=Bi[M];D=rg.clone(N.uniforms)}else D=b.uniforms;return D}function C(b,M){let D;for(let N=0,F=u.length;N<F;N++){const V=u[N];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new gy(i,M,b,o),u.push(D)),D}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function My(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function wy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function If(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uf(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,g,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=_),e++,p}function a(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,f,m,v,g,_){const p=s(d,f,m,v,g,_);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||wy),n.length>1&&n.sort(f||If),r.length>1&&r.sort(f||If)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function by(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new Uf,i.set(n,[s])):r>=o.length?(s=new Uf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ze};break;case"SpotLight":t={position:new q,direction:new q,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function Ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ay=0;function Ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cy(i){const e=new Ty,t=Ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,o=new vt,s=new vt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,g=0,_=0,p=0,w=0,S=0,x=0,C=0,R=0,A=0;c.sort(Ry);for(let b=0,M=c.length;b<M;b++){const D=c[b],N=D.color,F=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*F,d+=N.g*F,f+=N.b*F;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],F);A++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[g]=G;const k=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,k.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=k.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,x++}g++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=G,_++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const k=D.shadow,H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=D.shadow.matrix,S++}n.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(F),G.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=A,n.version=Ay++)}function l(c,u){let d=0,f=0,m=0,v=0,g=0;const _=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(S.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),m++}else if(S.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),s.identity(),o.copy(S.matrixWorld),o.premultiply(_),s.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Ff(i){const e=new Cy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Py(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Ff(i),e.set(r,[a])):o>=s.length?(a=new Ff(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dy extends Sl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends Sl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;function Fy(i,e,t){let n=new Lp;const r=new nt,o=new nt,s=new Ut,a=new Dy({depthPacking:l_}),l=new Ly,c={},u=t.maxTextureSize,d={[Br]:Xn,[Xn]:Br,[bn]:bn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Iy,fragmentShader:Uy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new dr;v.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let p=this.type;this.render=function(R,A,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ci),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==tr&&this.type===tr,V=p===tr&&this.type!==tr;for(let W=0,G=R.length;W<G;W++){const k=R[W],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),o.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/le.x),r.x=o.x*le.x,H.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/le.y),r.y=o.y*le.y,H.mapSize.y=o.y)),H.map===null||F===!0||V===!0){const ye=this.type!==tr?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new fr(r.x,r.y,ye),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const K=H.getViewportCount();for(let ye=0;ye<K;ye++){const Se=H.getViewport(ye);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),N.viewport(s),H.updateMatrices(k,ye),n=H.getFrustum(),x(A,P,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&w(H,P),H.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(b,M,D)};function w(R,A){const P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,m,g,null)}function S(R,A,P,b){let M=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,F=A.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let W=V[F];W===void 0&&(W=M.clone(),V[F]=W,A.addEventListener("dispose",C)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,b===tr?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=P}return M}function x(R,A,P,b,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===tr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),V=R.material;if(Array.isArray(V)){const W=F.groups;for(let G=0,k=W.length;G<k;G++){const H=W[G],le=V[H.materialIndex];if(le&&le.visible){const K=S(R,le,b,M);R.onBeforeShadow(i,R,A,P,F,K,H),i.renderBufferDirect(P,null,F,K,R,H),R.onAfterShadow(i,R,A,P,F,K,H)}}}else if(V.visible){const W=S(R,V,b,M);R.onBeforeShadow(i,R,A,P,F,W,null),i.renderBufferDirect(P,null,F,W,R,null),R.onAfterShadow(i,R,A,P,F,W,null)}}const N=R.children;for(let F=0,V=N.length;F<V;F++)x(N[F],A,P,b,M)}function C(R){R.target.removeEventListener("dispose",C);for(const P in c){const b=c[P],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Ny={[zc]:Bc,[kc]:Gc,[Hc]:Wc,[as]:Vc,[Bc]:zc,[Gc]:kc,[Wc]:Hc,[Vc]:as};function Oy(i,e){function t(){let X=!1;const ee=new Ut;let te=null;const fe=new Ut(0,0,0,0);return{setMask:function(Ie){te!==Ie&&!X&&(i.colorMask(Ie,Ie,Ie,Ie),te=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Fe,it,St,Xt){Xt===!0&&(Ie*=St,Fe*=St,it*=St),ee.set(Ie,Fe,it,St),fe.equals(ee)===!1&&(i.clearColor(Ie,Fe,it,St),fe.copy(ee))},reset:function(){X=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let X=!1,ee=!1,te=null,fe=null,Ie=null;return{setReversed:function(Fe){if(ee!==Fe){const it=e.get("EXT_clip_control");ee?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const St=Ie;Ie=null,this.setClear(St)}ee=Fe},getReversed:function(){return ee},setTest:function(Fe){Fe?se(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Fe){te!==Fe&&!X&&(i.depthMask(Fe),te=Fe)},setFunc:function(Fe){if(ee&&(Fe=Ny[Fe]),fe!==Fe){switch(Fe){case zc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case kc:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Fe}},setLocked:function(Fe){X=Fe},setClear:function(Fe){Ie!==Fe&&(ee&&(Fe=1-Fe),i.clearDepth(Fe),Ie=Fe)},reset:function(){X=!1,te=null,fe=null,Ie=null,ee=!1}}}function r(){let X=!1,ee=null,te=null,fe=null,Ie=null,Fe=null,it=null,St=null,Xt=null;return{setTest:function(_t){X||(_t?se(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(_t){ee!==_t&&!X&&(i.stencilMask(_t),ee=_t)},setFunc:function(_t,Zt,Fn){(te!==_t||fe!==Zt||Ie!==Fn)&&(i.stencilFunc(_t,Zt,Fn),te=_t,fe=Zt,Ie=Fn)},setOp:function(_t,Zt,Fn){(Fe!==_t||it!==Zt||St!==Fn)&&(i.stencilOp(_t,Zt,Fn),Fe=_t,it=Zt,St=Fn)},setLocked:function(_t){X=_t},setClear:function(_t){Xt!==_t&&(i.clearStencil(_t),Xt=_t)},reset:function(){X=!1,ee=null,te=null,fe=null,Ie=null,Fe=null,it=null,St=null,Xt=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,w=null,S=null,x=null,C=null,R=null,A=new Ze(0,0,0),P=0,b=!1,M=null,D=null,N=null,F=null,V=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=k>=2);let le=null,K={};const ye=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Le=new Ut().fromArray(ye),j=new Ut().fromArray(Se);function oe(X,ee,te,fe){const Ie=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(X,Fe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<te;it++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ee+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Fe}const ce={};ce[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(i.DEPTH_TEST),s.setFunc(as),We(!1),je(Nh),se(i.CULL_FACE),z(Ci);function se(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function Te(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Oe(X,ee){return d[X]!==ee?(i.bindFramebuffer(X,ee),d[X]=ee,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(X,ee){let te=m,fe=!1;if(X){te=f.get(ee),te===void 0&&(te=[],f.set(ee,te));const Ie=X.textures;if(te.length!==Ie.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,it=Ie.length;Fe<it;Fe++)te[Fe]=i.COLOR_ATTACHMENT0+Fe;te.length=Ie.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function Ge(X){return v!==X?(i.useProgram(X),v=X,!0):!1}const Be={[Ln]:i.FUNC_ADD,[N0]:i.FUNC_SUBTRACT,[O0]:i.FUNC_REVERSE_SUBTRACT};Be[z0]=i.MIN,Be[B0]=i.MAX;const tt={[$a]:i.ZERO,[fi]:i.ONE,[k0]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[q0]:i.SRC_ALPHA_SATURATE,[W0]:i.DST_COLOR,[V0]:i.DST_ALPHA,[H0]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[X0]:i.ONE_MINUS_DST_COLOR,[G0]:i.ONE_MINUS_DST_ALPHA,[Y0]:i.CONSTANT_COLOR,[$0]:i.ONE_MINUS_CONSTANT_COLOR,[Z0]:i.CONSTANT_ALPHA,[K0]:i.ONE_MINUS_CONSTANT_ALPHA};function z(X,ee,te,fe,Ie,Fe,it,St,Xt,_t){if(X===Ci){g===!0&&(Te(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),X!==Qs){if(X!==_||_t!==b){if((p!==Ln||x!==Ln)&&(i.blendEquation(i.FUNC_ADD),p=Ln,x=Ln),_t)switch(X){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,S=null,C=null,R=null,A.set(0,0,0),P=0,_=X,b=_t}return}Ie=Ie||ee,Fe=Fe||te,it=it||fe,(ee!==p||Ie!==x)&&(i.blendEquationSeparate(Be[ee],Be[Ie]),p=ee,x=Ie),(te!==w||fe!==S||Fe!==C||it!==R)&&(i.blendFuncSeparate(tt[te],tt[fe],tt[Fe],tt[it]),w=te,S=fe,C=Fe,R=it),(St.equals(A)===!1||Xt!==P)&&(i.blendColor(St.r,St.g,St.b,Xt),A.copy(St),P=Xt),_=X,b=!1}function ke(X,ee){X.side===bn?Te(i.CULL_FACE):se(i.CULL_FACE);let te=X.side===Xn;ee&&(te=!te),We(te),X.blending===Fr&&X.transparent===!1?z(Ci):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),o.setMask(X.colorWrite);const fe=X.stencilWrite;a.setTest(fe),fe&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(X){M!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),M=X)}function je(X){X!==I0?(se(i.CULL_FACE),X!==D&&(X===Nh?i.cullFace(i.BACK):X===U0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),D=X}function Ue(X){X!==N&&(G&&i.lineWidth(X),N=X)}function qe(X,ee,te){X?(se(i.POLYGON_OFFSET_FILL),(F!==ee||V!==te)&&(i.polygonOffset(ee,te),F=ee,V=te)):Te(i.POLYGON_OFFSET_FILL)}function ze(X){X?se(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function U(X){X===void 0&&(X=i.TEXTURE0+W-1),le!==X&&(i.activeTexture(X),le=X)}function E(X,ee,te){te===void 0&&(le===null?te=i.TEXTURE0+W-1:te=le);let fe=K[te];fe===void 0&&(fe={type:void 0,texture:void 0},K[te]=fe),(fe.type!==X||fe.texture!==ee)&&(le!==te&&(i.activeTexture(te),le=te),i.bindTexture(X,ee||ce[X]),fe.type=X,fe.texture=ee)}function B(){const X=K[le];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(X){Le.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function De(X){j.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Je(X,ee){let te=c.get(ee);te===void 0&&(te=new WeakMap,c.set(ee,te));let fe=te.get(X);fe===void 0&&(fe=i.getUniformBlockIndex(ee,X.name),te.set(X,fe))}function Xe(X,ee){const fe=c.get(ee).get(X);l.get(ee)!==fe&&(i.uniformBlockBinding(ee,fe,X.__bindingPointIndex),l.set(ee,fe))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,K={},d={},f=new WeakMap,m=[],v=null,g=!1,_=null,p=null,w=null,S=null,x=null,C=null,R=null,A=new Ze(0,0,0),P=0,b=!1,M=null,D=null,N=null,F=null,V=null,Le.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:se,disable:Te,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:Ge,setBlending:z,setMaterial:ke,setFlipSided:We,setCullFace:je,setLineWidth:Ue,setPolygonOffset:qe,setScissorTest:ze,activeTexture:U,bindTexture:E,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:ae,texImage2D:ue,texImage3D:ge,updateUBOMapping:Je,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:he,texSubImage2D:ie,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Ee,viewport:De,reset:Qe}}function Nf(i,e,t,n){const r=zy(n);switch(t){case mp:return i*e;case gp:return i*e;case vp:return i*e*2;case Yu:return i*e/r.components*r.byteLength;case $u:return i*e/r.components*r.byteLength;case xp:return i*e*2/r.components*r.byteLength;case Zu:return i*e*2/r.components*r.byteLength;case _p:return i*e*3/r.components*r.byteLength;case pn:return i*e*4/r.components*r.byteLength;case Ku:return i*e*4/r.components*r.byteLength;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:case Kc:return Math.max(i,16)*Math.max(e,8)/4;case Yc:case Zc:return Math.max(i,8)*Math.max(e,8)/2;case jc:case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qa:case pu:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yp:case _u:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(i){switch(i){case Pi:case fp:return{byteLength:1,components:1};case go:case dp:case Vi:return{byteLength:2,components:1};case Xu:case qu:return{byteLength:2,components:4};case vo:case Wu:case kn:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function By(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,E){return m?new OffscreenCanvas(U,E):ta("canvas")}function g(U,E,B){let $=1;const ae=ze(U);if((ae.width>B||ae.height>B)&&($=B/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor($*ae.width),Re=Math.floor($*ae.height);d===void 0&&(d=v(ie,Re));const de=E?v(ie,Re):d;return de.width=ie,de.height=Re,de.getContext("2d").drawImage(U,0,0,ie,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Re+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,E,B,$,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=E;if(E===i.RED&&(B===i.FLOAT&&(ie=i.R32F),B===i.HALF_FLOAT&&(ie=i.R16F),B===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.R8UI),B===i.UNSIGNED_SHORT&&(ie=i.R16UI),B===i.UNSIGNED_INT&&(ie=i.R32UI),B===i.BYTE&&(ie=i.R8I),B===i.SHORT&&(ie=i.R16I),B===i.INT&&(ie=i.R32I)),E===i.RG&&(B===i.FLOAT&&(ie=i.RG32F),B===i.HALF_FLOAT&&(ie=i.RG16F),B===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RG8UI),B===i.UNSIGNED_SHORT&&(ie=i.RG16UI),B===i.UNSIGNED_INT&&(ie=i.RG32UI),B===i.BYTE&&(ie=i.RG8I),B===i.SHORT&&(ie=i.RG16I),B===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),B===i.UNSIGNED_INT&&(ie=i.RGB32UI),B===i.BYTE&&(ie=i.RGB8I),B===i.SHORT&&(ie=i.RGB16I),B===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),B===i.UNSIGNED_INT&&(ie=i.RGBA32UI),B===i.BYTE&&(ie=i.RGBA8I),B===i.SHORT&&(ie=i.RGBA16I),B===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),E===i.RGBA){const Re=ae?yl:yt.getTransfer($);B===i.FLOAT&&(ie=i.RGBA32F),B===i.HALF_FLOAT&&(ie=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ie=Re===Et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(U,E){let B;return U?E===null||E===vo||E===us?B=i.DEPTH24_STENCIL8:E===kn?B=i.DEPTH32F_STENCIL8:E===go&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vo||E===us?B=i.DEPTH_COMPONENT24:E===kn?B=i.DEPTH_COMPONENT32F:E===go&&(B=i.DEPTH_COMPONENT16),B}function C(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==pt?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function R(U){const E=U.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&u.delete(E)}function A(U){const E=U.target;E.removeEventListener("dispose",A),M(E)}function P(U){const E=n.get(U);if(E.__webglInit===void 0)return;const B=U.source,$=f.get(B);if($){const ae=$[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(U),Object.keys($).length===0&&f.delete(B)}n.remove(U)}function b(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const B=U.source,$=f.get(B);delete $[E.__cacheKey],s.memory.textures--}function M(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ae=0;ae<E.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=U.textures;for(let $=0,ae=B.length;$<ae;$++){const ie=n.get(B[$]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(B[$])}n.remove(U)}let D=0;function N(){D=0}function F(){const U=D;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),D+=1,U}function V(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function W(U,E){const B=n.get(U);if(U.isVideoTexture&&Ue(U),U.isRenderTargetTexture===!1&&U.version>0&&B.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,U,E);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function G(U,E){const B=n.get(U);if(U.version>0&&B.__version!==U.version){j(B,U,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function k(U,E){const B=n.get(U);if(U.version>0&&B.__version!==U.version){j(B,U,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function H(U,E){const B=n.get(U);if(U.version>0&&B.__version!==U.version){oe(B,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}const le={[Jo]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},K={[nn]:i.NEAREST,[s_]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[pt]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ye={[h_]:i.NEVER,[g_]:i.ALWAYS,[f_]:i.LESS,[Sp]:i.LEQUAL,[d_]:i.EQUAL,[__]:i.GEQUAL,[p_]:i.GREATER,[m_]:i.NOTEQUAL};function Se(U,E){if(E.type===kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pt||E.magFilter===Bl||E.magFilter===pa||E.magFilter===Ri||E.minFilter===pt||E.minFilter===Bl||E.minFilter===pa||E.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,le[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,K[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==pa&&E.minFilter!==Ri||E.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Le(U,E){let B=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",R));const $=E.source;let ae=f.get($);ae===void 0&&(ae={},f.set($,ae));const ie=V(E);if(ie!==U.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ae[ie].usedTimes++;const Re=ae[U.__cacheKey];Re!==void 0&&(ae[U.__cacheKey].usedTimes--,Re.usedTimes===0&&b(E)),U.__cacheKey=ie,U.__webglTexture=ae[ie].texture}return B}function j(U,E,B){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);const ae=Le(U,E),ie=E.source;t.bindTexture($,U.__webglTexture,i.TEXTURE0+B);const Re=n.get(ie);if(ie.version!==Re.__version||ae===!0){t.activeTexture(i.TEXTURE0+B);const de=yt.getPrimaries(yt.workingColorSpace),_e=E.colorSpace===Qt?null:yt.getPrimaries(E.colorSpace),Ke=E.colorSpace===Qt||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let he=g(E.image,!1,r.maxTextureSize);he=qe(E,he);const ue=o.convert(E.format,E.colorSpace),ge=o.convert(E.type);let Ee=S(E.internalFormat,ue,ge,E.colorSpace,E.isVideoTexture);Se($,E);let De;const Je=E.mipmaps,Xe=E.isVideoTexture!==!0,Qe=Re.__version===void 0||ae===!0,X=ie.dataReady,ee=C(E,he);if(E.isDepthTexture)Ee=x(E.format===hs,E.type),Qe&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Ee,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,ue,ge,null));else if(E.isDataTexture)if(Je.length>0){Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,Je[0].width,Je[0].height);for(let te=0,fe=Je.length;te<fe;te++)De=Je[te],Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,ge,De.data):t.texImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,ue,ge,De.data);E.generateMipmaps=!1}else Xe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,he.width,he.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,ue,ge,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,he.width,he.height,0,ue,ge,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ee,Je[0].width,Je[0].height,he.depth);for(let te=0,fe=Je.length;te<fe;te++)if(De=Je[te],E.format!==pn)if(ue!==null)if(Xe){if(X)if(E.layerUpdates.size>0){const Ie=Nf(De.width,De.height,E.format,E.type);for(const Fe of E.layerUpdates){const it=De.data.subarray(Fe*Ie/De.data.BYTES_PER_ELEMENT,(Fe+1)*Ie/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Fe,De.width,De.height,1,ue,it)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,he.depth,ue,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ee,De.width,De.height,he.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,he.depth,ue,ge,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ee,De.width,De.height,he.depth,0,ue,ge,De.data)}else{Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ee,Ee,Je[0].width,Je[0].height);for(let te=0,fe=Je.length;te<fe;te++)De=Je[te],E.format!==pn?ue!==null?Xe?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,De.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,ue,ge,De.data):t.texImage2D(i.TEXTURE_2D,te,Ee,De.width,De.height,0,ue,ge,De.data)}else if(E.isDataArrayTexture)if(Xe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ee,he.width,he.height,he.depth),X)if(E.layerUpdates.size>0){const te=Nf(he.width,he.height,E.format,E.type);for(const fe of E.layerUpdates){const Ie=he.data.subarray(fe*te/he.data.BYTES_PER_ELEMENT,(fe+1)*te/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,he.width,he.height,1,ue,ge,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ue,ge,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,he.width,he.height,he.depth,0,ue,ge,he.data);else if(E.isData3DTexture)Xe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ee,Ee,he.width,he.height,he.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ue,ge,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,he.width,he.height,he.depth,0,ue,ge,he.data);else if(E.isFramebufferTexture){if(Qe)if(Xe)t.texStorage2D(i.TEXTURE_2D,ee,Ee,he.width,he.height);else{let te=he.width,fe=he.height;for(let Ie=0;Ie<ee;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ee,te,fe,0,ue,ge,null),te>>=1,fe>>=1}}else if(Je.length>0){if(Xe&&Qe){const te=ze(Je[0]);t.texStorage2D(i.TEXTURE_2D,ee,Ee,te.width,te.height)}for(let te=0,fe=Je.length;te<fe;te++)De=Je[te],Xe?X&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue,ge,De):t.texImage2D(i.TEXTURE_2D,te,Ee,ue,ge,De);E.generateMipmaps=!1}else if(Xe){if(Qe){const te=ze(he);t.texStorage2D(i.TEXTURE_2D,ee,Ee,te.width,te.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,ge,he)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,ge,he);_(E)&&p($),Re.__version=ie.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function oe(U,E,B){if(E.image.length!==6)return;const $=Le(U,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+B);const ie=n.get(ae);if(ae.version!==ie.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const Re=yt.getPrimaries(yt.workingColorSpace),de=E.colorSpace===Qt?null:yt.getPrimaries(E.colorSpace),_e=E.colorSpace===Qt||Re===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let fe=0;fe<6;fe++)!Ke&&!he?ue[fe]=g(E.image[fe],!0,r.maxCubemapSize):ue[fe]=he?E.image[fe].image:E.image[fe],ue[fe]=qe(E,ue[fe]);const ge=ue[0],Ee=o.convert(E.format,E.colorSpace),De=o.convert(E.type),Je=S(E.internalFormat,Ee,De,E.colorSpace),Xe=E.isVideoTexture!==!0,Qe=ie.__version===void 0||$===!0,X=ae.dataReady;let ee=C(E,ge);Se(i.TEXTURE_CUBE_MAP,E);let te;if(Ke){Xe&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Je,ge.width,ge.height);for(let fe=0;fe<6;fe++){te=ue[fe].mipmaps;for(let Ie=0;Ie<te.length;Ie++){const Fe=te[Ie];E.format!==pn?Ee!==null?Xe?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Fe.width,Fe.height,Ee,De,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Je,Fe.width,Fe.height,0,Ee,De,Fe.data)}}}else{if(te=E.mipmaps,Xe&&Qe){te.length>0&&ee++;const fe=ze(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(he){Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ue[fe].width,ue[fe].height,Ee,De,ue[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,ue[fe].width,ue[fe].height,0,Ee,De,ue[fe].data);for(let Ie=0;Ie<te.length;Ie++){const it=te[Ie].image[fe].image;Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,it.width,it.height,Ee,De,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Je,it.width,it.height,0,Ee,De,it.data)}}else{Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee,De,ue[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,Ee,De,ue[fe]);for(let Ie=0;Ie<te.length;Ie++){const Fe=te[Ie];Xe?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,Ee,De,Fe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Je,Ee,De,Fe.image[fe])}}}_(E)&&p(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ce(U,E,B,$,ae,ie){const Re=o.convert(B.format,B.colorSpace),de=o.convert(B.type),_e=S(B.internalFormat,Re,de,B.colorSpace),Ke=n.get(E),he=n.get(B);if(he.__renderTarget=E,!Ke.__hasExternalTextures){const ue=Math.max(1,E.width>>ie),ge=Math.max(1,E.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,_e,ue,ge,E.depth,0,Re,de,null):t.texImage2D(ae,ie,_e,ue,ge,0,Re,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ae,he.__webglTexture,0,We(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ae,he.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const $=E.depthTexture,ae=$&&$.isDepthTexture?$.type:null,ie=x(E.stencilBuffer,ae),Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=We(E);je(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ie,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,U)}else{const $=E.textures;for(let ae=0;ae<$.length;ae++){const ie=$[ae],Re=o.convert(ie.format,ie.colorSpace),de=o.convert(ie.type),_e=S(ie.internalFormat,Re,de,ie.colorSpace),Ke=We(E);B&&je(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,_e,E.width,E.height):je(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ae=$.__webglTexture,ie=We(E);if(E.depthTexture.format===Qo)je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===hs)je(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(U){const E=n.get(U),B=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=$}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,U)}else if(B){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),se(E.__webglDepthbuffer[$],U,!1);else{const ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,U,!1);else{const $=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(U,E,B){const $=n.get(U);E!==void 0&&ce($.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Oe(U)}function Ge(U){const E=U.texture,B=n.get(U),$=n.get(E);U.addEventListener("dispose",A);const ae=U.textures,ie=U.isWebGLCubeRenderTarget===!0,Re=ae.length>1;if(Re||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,s.memory.textures++),ie){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let _e=0;_e<E.mipmaps.length;_e++)B.__webglFramebuffer[de][_e]=i.createFramebuffer()}else B.__webglFramebuffer[de]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)B.__webglFramebuffer[de]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Re)for(let de=0,_e=ae.length;de<_e;de++){const Ke=n.get(ae[de]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&je(U)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const _e=ae[de];B.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Ke=o.convert(_e.format,_e.colorSpace),he=o.convert(_e.type),ue=S(_e.internalFormat,Ke,he,_e.colorSpace,U.isXRRenderTarget===!0),ge=We(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),se(B.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Se(i.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ce(B.__webglFramebuffer[de][_e],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else ce(B.__webglFramebuffer[de],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,_e=ae.length;de<_e;de++){const Ke=ae[de],he=n.get(Ke);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Se(i.TEXTURE_2D,Ke),ce(B.__webglFramebuffer,U,Ke,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),_(Ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Se(de,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ce(B.__webglFramebuffer[_e],U,E,i.COLOR_ATTACHMENT0,de,_e);else ce(B.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,de,0);_(E)&&p(de),t.unbindTexture()}U.depthBuffer&&Oe(U)}function Be(U){const E=U.textures;for(let B=0,$=E.length;B<$;B++){const ae=E[B];if(_(ae)){const ie=w(U),Re=n.get(ae).__webglTexture;t.bindTexture(ie,Re),p(ie),t.unbindTexture()}}}const tt=[],z=[];function ke(U){if(U.samples>0){if(je(U)===!1){const E=U.textures,B=U.width,$=U.height;let ae=i.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(U),de=E.length>1;if(de)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ke=n.get(E[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,ae,i.NEAREST),l===!0&&(tt.length=0,z.length=0,tt.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push(ie),z.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ke=n.get(E[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function We(U){return Math.min(r.maxSamples,U.samples)}function je(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(U){const E=s.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function qe(U,E){const B=U.colorSpace,$=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||B!==Xi&&B!==Qt&&(yt.getTransfer(B)===Et?($!==pn||ae!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=je}function ky(i,e){function t(n,r=Qt){let o;const s=yt.getTransfer(r);if(n===Pi)return i.UNSIGNED_BYTE;if(n===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fp)return i.BYTE;if(n===dp)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===vo)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===mp)return i.ALPHA;if(n===_p)return i.RGB;if(n===pn)return i.RGBA;if(n===gp)return i.LUMINANCE;if(n===vp)return i.LUMINANCE_ALPHA;if(n===Qo)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===$u)return i.RED_INTEGER;if(n===xp)return i.RG;if(n===Zu)return i.RG_INTEGER;if(n===Ku)return i.RGBA_INTEGER;if(n===Za||n===Ka||n===ja||n===Ja)if(s===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===$c||n===Zc||n===Kc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Yc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Jc||n===Qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===jc||n===Jc)return s===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Qc)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===ru||n===ou||n===su||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===eu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ou)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===pu||n===mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Qa)return s===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yp||n===_u||n===gu||n===vu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Qa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Hy extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vy={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _n,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends ds{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const g=new Xy,_=t.getContextAttributes();let p=null,w=null;const S=[],x=[],C=new nt;let R=null;const A=new zn;A.viewport=new Ut;const P=new zn;P.viewport=new Ut;const b=[A,P],M=new Hy;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=S[j];return oe===void 0&&(oe=new fc,S[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=S[j];return oe===void 0&&(oe=new fc,S[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=S[j];return oe===void 0&&(oe=new fc,S[j]=oe),oe.getHandSpace()};function F(j){const oe=x.indexOf(j.inputSource);if(oe===-1)return;const ce=S[oe];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||s),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const oe=x[j];oe!==null&&(x[j]=null,S[j].disconnect(oe))}D=null,N=null,g.reset(),e.setRenderTarget(p),m=null,f=null,d=null,r=null,w=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new fr(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,ce=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?hs:Qo,ce=_.stencil?us:vo);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new fr(f.textureWidth,f.textureHeight,{format:pn,type:Pi,depthTexture:new hl(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let oe=0;oe<j.removed.length;oe++){const ce=j.removed[oe],se=x.indexOf(ce);se>=0&&(x[se]=null,S[se].disconnect(ce))}for(let oe=0;oe<j.added.length;oe++){const ce=j.added[oe];let se=x.indexOf(ce);if(se===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=x.length){x.push(ce),se=Oe;break}else if(x[Oe]===null){x[Oe]=ce,se=Oe;break}if(se===-1)break}const Te=S[se];Te&&Te.connect(ce)}}const G=new q,k=new q;function H(j,oe,ce){G.setFromMatrixPosition(oe.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const se=G.distanceTo(k),Te=oe.projectionMatrix.elements,Oe=ce.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),Ge=Te[14]/(Te[10]+1),Be=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],z=(Te[8]-1)/Te[0],ke=(Oe[8]+1)/Oe[0],We=Pe*z,je=Pe*ke,Ue=se/(-z+ke),qe=Ue*-z;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ze=Pe+Ue,U=Ge+Ue,E=We-qe,B=je+(se-qe),$=Be*Ge/U*ze,ae=tt*Ge/U*ze;j.projectionMatrix.makePerspective(E,B,$,ae,ze,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let oe=j.near,ce=j.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),M.near=P.near=A.near=oe,M.far=P.far=A.far=ce,(D!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,N=M.far),A.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const se=j.parent,Te=M.cameras;le(M,se);for(let Oe=0;Oe<Te.length;Oe++)le(Te[Oe],se);Te.length===2?H(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),K(j,M,se)};function K(j,oe,ce){ce===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ea*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ye=null;function Se(j,oe){if(u=oe.getViewerPose(c||s),v=oe,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let se=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Oe=0;Oe<ce.length;Oe++){const Pe=ce[Oe];let Ge=null;if(m!==null)Ge=m.getViewport(Pe);else{const tt=d.getViewSubImage(f,Pe);Ge=tt.viewport,Oe===0&&(e.setRenderTargetTextures(w,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(w))}let Be=b[Oe];Be===void 0&&(Be=new zn,Be.layers.enable(Oe),Be.viewport=new Ut,b[Oe]=Be),Be.matrix.fromArray(Pe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Pe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Oe===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Be)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Oe=d.getDepthInformation(ce[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let ce=0;ce<S.length;ce++){const se=x[ce],Te=S[ce];se!==null&&Te!==void 0&&Te.update(se,oe,c||s)}ye&&ye(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Le=new Ip;Le.setAnimationLoop(Se),this.setAnimationLoop=function(j){ye=j},this.dispose=function(){}}}const eo=new si,Yy=new vt;function $y(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Cp(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,w,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),d(_,p)):p.isMeshPhongMaterial?(o(_,p),u(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&m(_,p,x)):p.isMeshMatcapMaterial?(o(_,p),v(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),g(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,w,S):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Xn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Xn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,x=w.envMapRotation;S&&(_.envMap.value=S,eo.copy(x),eo.x*=-1,eo.y*=-1,eo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),_.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(eo)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,w,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*w,_.scale.value=S*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,w){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const w=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zy(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const x=S.program;n.uniformBlockBinding(w,x)}function c(w,S){let x=r[w.id];x===void 0&&(v(w),x=u(w),r[w.id]=x,w.addEventListener("dispose",_));const C=S.program;n.updateUBOMapping(w,C);const R=e.render.frame;o[w.id]!==R&&(f(w),o[w.id]=R)}function u(w){const S=d();w.__bindingPointIndex=S;const x=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],x=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=x.length;R<A;R++){const P=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,M=P.length;b<M;b++){const D=P[b];if(m(D,R,b,C)===!0){const N=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let W=0;W<F.length;W++){const G=F[W],k=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,x,C){const R=w.value,A=S+"_"+x;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const P=C[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return C[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function v(w){const S=w.uniforms;let x=0;const C=16;for(let A=0,P=S.length;A<P;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,D=b.length;M<D;M++){const N=b[M],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,W=F.length;V<W;V++){const G=F[V],k=g(G),H=x%C,le=H%k.boundary,K=H+le;x+=le,K!==0&&C-K<k.storage&&(x+=C-K),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=k.storage}}}const R=x%C;return R>0&&(x+=C-R),w.__size=x,w.__cache={},this}function g(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function _(w){const S=w.target;S.removeEventListener("dispose",_);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class wl{constructor(e={}){const{canvas:t=U_(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let C=!1,R=0,A=0,P=null,b=-1,M=null;const D=new Ut,N=new Ut;let F=null;const V=new Ze(0);let W=0,G=t.width,k=t.height,H=1,le=null,K=null;const ye=new Ut(0,0,G,k),Se=new Ut(0,0,G,k);let Le=!1;const j=new Lp;let oe=!1,ce=!1;const se=new vt,Te=new vt,Oe=new q,Pe=new Ut,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function tt(){return P===null?H:1}let z=n;function ke(h,y){return t.getContext(h,y)}try{const h={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),z===null){const y="webgl2";if(z=ke(y,h),z===null)throw ke(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let We,je,Ue,qe,ze,U,E,B,$,ae,ie,Re,de,_e,Ke,he,ue,ge,Ee,De,Je,Xe,Qe,X;function ee(){We=new t1(z),We.init(),Xe=new ky(z,We),je=new Zx(z,We,e,Xe),Ue=new Oy(z,We),je.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),qe=new r1(z),ze=new My,U=new By(z,We,Ue,ze,je,Xe,qe),E=new jx(x),B=new e1(x),$=new hg(z),Qe=new Yx(z,$),ae=new n1(z,$,qe,Qe),ie=new s1(z,ae,$,qe),Ee=new o1(z,je,U),he=new Kx(ze),Re=new Sy(x,E,B,We,je,Qe,he),de=new $y(x,ze),_e=new by,Ke=new Py(We),ge=new qx(x,E,B,Ue,ie,m,l),ue=new Fy(x,ie,je),X=new Zy(z,qe,je,Ue),De=new $x(z,We,qe),Je=new i1(z,We,qe),qe.programs=Re.programs,x.capabilities=je,x.extensions=We,x.properties=ze,x.renderLists=_e,x.shadowMap=ue,x.state=Ue,x.info=qe}ee();const te=new qy(x,z);this.xr=te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const h=We.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=We.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(h){h!==void 0&&(H=h,this.setSize(G,k,!1))},this.getSize=function(h){return h.set(G,k)},this.setSize=function(h,y,T=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=h,k=y,t.width=Math.floor(h*H),t.height=Math.floor(y*H),T===!0&&(t.style.width=h+"px",t.style.height=y+"px"),this.setViewport(0,0,h,y)},this.getDrawingBufferSize=function(h){return h.set(G*H,k*H).floor()},this.setDrawingBufferSize=function(h,y,T){G=h,k=y,H=T,t.width=Math.floor(h*T),t.height=Math.floor(y*T),this.setViewport(0,0,h,y)},this.getCurrentViewport=function(h){return h.copy(D)},this.getViewport=function(h){return h.copy(ye)},this.setViewport=function(h,y,T,L){h.isVector4?ye.set(h.x,h.y,h.z,h.w):ye.set(h,y,T,L),Ue.viewport(D.copy(ye).multiplyScalar(H).round())},this.getScissor=function(h){return h.copy(Se)},this.setScissor=function(h,y,T,L){h.isVector4?Se.set(h.x,h.y,h.z,h.w):Se.set(h,y,T,L),Ue.scissor(N.copy(Se).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(h){Ue.setScissorTest(Le=h)},this.setOpaqueSort=function(h){le=h},this.setTransparentSort=function(h){K=h},this.getClearColor=function(h){return h.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(h=!0,y=!0,T=!0){let L=0;if(h){let I=!1;if(P!==null){const O=P.texture.format;I=O===Ku||O===Zu||O===$u}if(I){const O=P.texture.type,Y=O===Pi||O===vo||O===go||O===us||O===Xu||O===qu,ne=ge.getClearColor(),Z=ge.getClearAlpha(),Q=ne.r,J=ne.g,re=ne.b;Y?(v[0]=Q,v[1]=J,v[2]=re,v[3]=Z,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=Q,g[1]=J,g[2]=re,g[3]=Z,z.clearBufferiv(z.COLOR,0,g))}else L|=z.COLOR_BUFFER_BIT}y&&(L|=z.DEPTH_BUFFER_BIT),T&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),_e.dispose(),Ke.dispose(),ze.dispose(),E.dispose(),B.dispose(),ie.dispose(),Qe.dispose(),X.dispose(),Re.dispose(),te.dispose(),te.removeEventListener("sessionstart",yo),te.removeEventListener("sessionend",So),Yn.stop()};function fe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const h=qe.autoReset,y=ue.enabled,T=ue.autoUpdate,L=ue.needsUpdate,I=ue.type;ee(),qe.autoReset=h,ue.enabled=y,ue.autoUpdate=T,ue.needsUpdate=L,ue.type=I}function Fe(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function it(h){const y=h.target;y.removeEventListener("dispose",it),St(y)}function St(h){Xt(h),ze.remove(h)}function Xt(h){const y=ze.get(h).programs;y!==void 0&&(y.forEach(function(T){Re.releaseProgram(T)}),h.isShaderMaterial&&Re.releaseShaderCache(h))}this.renderBufferDirect=function(h,y,T,L,I,O){y===null&&(y=Ge);const Y=I.isMesh&&I.matrixWorld.determinant()<0,ne=Ii(h,y,T,L,I);Ue.setMaterial(L,Y);let Z=T.index,Q=1;if(L.wireframe===!0){if(Z=ae.getWireframeAttribute(T),Z===void 0)return;Q=2}const J=T.drawRange,re=T.attributes.position;let xe=J.start*Q,me=(J.start+J.count)*Q;O!==null&&(xe=Math.max(xe,O.start*Q),me=Math.min(me,(O.start+O.count)*Q)),Z!==null?(xe=Math.max(xe,0),me=Math.min(me,Z.count)):re!=null&&(xe=Math.max(xe,0),me=Math.min(me,re.count));const Ae=me-xe;if(Ae<0||Ae===1/0)return;Qe.setup(I,L,ne,T,Z);let Me,we=De;if(Z!==null&&(Me=$.get(Z),we=Je,we.setIndex(Me)),I.isMesh)L.wireframe===!0?(Ue.setLineWidth(L.wireframeLinewidth*tt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(I.isLine){let ve=L.linewidth;ve===void 0&&(ve=1),Ue.setLineWidth(ve*tt()),I.isLineSegments?we.setMode(z.LINES):I.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else I.isPoints?we.setMode(z.POINTS):I.isSprite&&we.setMode(z.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)we.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))we.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ve=I._multiDrawStarts,rt=I._multiDrawCounts,Ye=I._multiDrawCount,wt=Z?$.get(Z).bytesPerElement:1,gt=ze.get(L).currentProgram.getUniforms();for(let et=0;et<Ye;et++)gt.setValue(z,"_gl_DrawID",et),we.render(ve[et]/wt,rt[et])}else if(I.isInstancedMesh)we.renderInstances(xe,Ae,I.count);else if(T.isInstancedBufferGeometry){const ve=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,rt=Math.min(T.instanceCount,ve);we.renderInstances(xe,Ae,rt)}else we.render(xe,Ae)};function _t(h,y,T){h.transparent===!0&&h.side===bn&&h.forceSinglePass===!1?(h.side=Xn,h.needsUpdate=!0,qi(h,y,T),h.side=Br,h.needsUpdate=!0,qi(h,y,T),h.side=bn):qi(h,y,T)}this.compile=function(h,y,T=null){T===null&&(T=h),p=Ke.get(T),p.init(y),S.push(p),T.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),h!==T&&h.traverseVisible(function(I){I.isLight&&I.layers.test(y.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const L=new Set;return h.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const O=I.material;if(O)if(Array.isArray(O))for(let Y=0;Y<O.length;Y++){const ne=O[Y];_t(ne,T,I),L.add(ne)}else _t(O,T,I),L.add(O)}),S.pop(),p=null,L},this.compileAsync=function(h,y,T=null){const L=this.compile(h,y,T);return new Promise(I=>{function O(){if(L.forEach(function(Y){ze.get(Y).currentProgram.isReady()&&L.delete(Y)}),L.size===0){I(h);return}setTimeout(O,10)}We.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let Zt=null;function Fn(h){Zt&&Zt(h)}function yo(){Yn.stop()}function So(){Yn.start()}const Yn=new Ip;Yn.setAnimationLoop(Fn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(h){Zt=h,te.setAnimationLoop(h),h===null?Yn.stop():Yn.start()},te.addEventListener("sessionstart",yo),te.addEventListener("sessionend",So),this.render=function(h,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(y),y=te.getCamera()),h.isScene===!0&&h.onBeforeRender(x,h,y,P),p=Ke.get(h,S.length),p.init(y),S.push(p),Te.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),j.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,oe=he.init(this.clippingPlanes,ce),_=_e.get(h,w.length),_.init(),w.push(_),te.enabled===!0&&te.isPresenting===!0){const O=x.xr.getDepthSensingMesh();O!==null&&Hr(O,y,-1/0,x.sortObjects)}Hr(h,y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(le,K),Be=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Be&&ge.addToRenderList(_,h),this.info.render.frame++,oe===!0&&he.beginShadows();const T=p.state.shadowsArray;ue.render(T,h,y),oe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=_.opaque,I=_.transmissive;if(p.setupLights(),y.isArrayCamera){const O=y.cameras;if(I.length>0)for(let Y=0,ne=O.length;Y<ne;Y++){const Z=O[Y];vi(L,I,h,Z)}Be&&ge.render(h);for(let Y=0,ne=O.length;Y<ne;Y++){const Z=O[Y];ai(_,h,Z,Z.viewport)}}else I.length>0&&vi(L,I,h,y),Be&&ge.render(h),ai(_,h,y);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),h.isScene===!0&&h.onAfterRender(x,h,y),Qe.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Hr(h,y,T,L){if(h.visible===!1)return;if(h.layers.test(y.layers)){if(h.isGroup)T=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(y);else if(h.isLight)p.pushLight(h),h.castShadow&&p.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){L&&Pe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Te);const Y=ie.update(h),ne=h.material;ne.visible&&_.push(h,Y,ne,T,Pe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){const Y=ie.update(h),ne=h.material;if(L&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Pe.copy(h.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Pe.copy(Y.boundingSphere.center)),Pe.applyMatrix4(h.matrixWorld).applyMatrix4(Te)),Array.isArray(ne)){const Z=Y.groups;for(let Q=0,J=Z.length;Q<J;Q++){const re=Z[Q],xe=ne[re.materialIndex];xe&&xe.visible&&_.push(h,Y,xe,T,Pe.z,re)}}else ne.visible&&_.push(h,Y,ne,T,Pe.z,null)}}const O=h.children;for(let Y=0,ne=O.length;Y<ne;Y++)Hr(O[Y],y,T,L)}function ai(h,y,T,L){const I=h.opaque,O=h.transmissive,Y=h.transparent;p.setupLightsView(T),oe===!0&&he.setGlobalState(x.clippingPlanes,T),L&&Ue.viewport(D.copy(L)),I.length>0&&Li(I,y,T),O.length>0&&Li(O,y,T),Y.length>0&&Li(Y,y,T),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function vi(h,y,T,L){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new fr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Vi:Pi,minFilter:Ri,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const O=p.state.transmissionRenderTarget[L.id],Y=L.viewport||D;O.setSize(Y.z,Y.w);const ne=x.getRenderTarget();x.setRenderTarget(O),x.getClearColor(V),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ge.render(T);const Z=x.toneMapping;x.toneMapping=Gi;const Q=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),oe===!0&&he.setGlobalState(x.clippingPlanes,L),Li(h,T,L),U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O),We.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let re=0,xe=y.length;re<xe;re++){const me=y[re],Ae=me.object,Me=me.geometry,we=me.material,ve=me.group;if(we.side===bn&&Ae.layers.test(L.layers)){const rt=we.side;we.side=Xn,we.needsUpdate=!0,qt(Ae,T,L,Me,we,ve),we.side=rt,we.needsUpdate=!0,J=!0}}J===!0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O))}x.setRenderTarget(ne),x.setClearColor(V,W),Q!==void 0&&(L.viewport=Q),x.toneMapping=Z}function Li(h,y,T){const L=y.isScene===!0?y.overrideMaterial:null;for(let I=0,O=h.length;I<O;I++){const Y=h[I],ne=Y.object,Z=Y.geometry,Q=L===null?Y.material:L,J=Y.group;ne.layers.test(T.layers)&&qt(ne,y,T,Z,Q,J)}}function qt(h,y,T,L,I,O){h.onBeforeRender(x,y,T,L,I,O),h.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),I.onBeforeRender(x,y,T,L,h,O),I.transparent===!0&&I.side===bn&&I.forceSinglePass===!1?(I.side=Xn,I.needsUpdate=!0,x.renderBufferDirect(T,y,L,I,h,O),I.side=Br,I.needsUpdate=!0,x.renderBufferDirect(T,y,L,I,h,O),I.side=bn):x.renderBufferDirect(T,y,L,I,h,O),h.onAfterRender(x,y,T,L,I,O)}function qi(h,y,T){y.isScene!==!0&&(y=Ge);const L=ze.get(h),I=p.state.lights,O=p.state.shadowsArray,Y=I.state.version,ne=Re.getParameters(h,I.state,O,y,T),Z=Re.getProgramCacheKey(ne);let Q=L.programs;L.environment=h.isMeshStandardMaterial?y.environment:null,L.fog=y.fog,L.envMap=(h.isMeshStandardMaterial?B:E).get(h.envMap||L.environment),L.envMapRotation=L.environment!==null&&h.envMap===null?y.environmentRotation:h.envMapRotation,Q===void 0&&(h.addEventListener("dispose",it),Q=new Map,L.programs=Q);let J=Q.get(Z);if(J!==void 0){if(L.currentProgram===J&&L.lightsStateVersion===Y)return mr(h,ne),J}else ne.uniforms=Re.getUniforms(h),h.onBeforeCompile(ne,x),J=Re.acquireProgram(ne,Z),Q.set(Z,J),L.uniforms=ne.uniforms;const re=L.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(re.clippingPlanes=he.uniform),mr(h,ne),L.needsLights=xi(h),L.lightsStateVersion=Y,L.needsLights&&(re.ambientLightColor.value=I.state.ambient,re.lightProbe.value=I.state.probe,re.directionalLights.value=I.state.directional,re.directionalLightShadows.value=I.state.directionalShadow,re.spotLights.value=I.state.spot,re.spotLightShadows.value=I.state.spotShadow,re.rectAreaLights.value=I.state.rectArea,re.ltc_1.value=I.state.rectAreaLTC1,re.ltc_2.value=I.state.rectAreaLTC2,re.pointLights.value=I.state.point,re.pointLightShadows.value=I.state.pointShadow,re.hemisphereLights.value=I.state.hemi,re.directionalShadowMap.value=I.state.directionalShadowMap,re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,re.spotShadowMap.value=I.state.spotShadowMap,re.spotLightMatrix.value=I.state.spotLightMatrix,re.spotLightMap.value=I.state.spotLightMap,re.pointShadowMap.value=I.state.pointShadowMap,re.pointShadowMatrix.value=I.state.pointShadowMatrix),L.currentProgram=J,L.uniformsList=null,J}function pr(h){if(h.uniformsList===null){const y=h.currentProgram.getUniforms();h.uniformsList=el.seqWithValue(y.seq,h.uniforms)}return h.uniformsList}function mr(h,y){const T=ze.get(h);T.outputColorSpace=y.outputColorSpace,T.batching=y.batching,T.batchingColor=y.batchingColor,T.instancing=y.instancing,T.instancingColor=y.instancingColor,T.instancingMorph=y.instancingMorph,T.skinning=y.skinning,T.morphTargets=y.morphTargets,T.morphNormals=y.morphNormals,T.morphColors=y.morphColors,T.morphTargetsCount=y.morphTargetsCount,T.numClippingPlanes=y.numClippingPlanes,T.numIntersection=y.numClipIntersection,T.vertexAlphas=y.vertexAlphas,T.vertexTangents=y.vertexTangents,T.toneMapping=y.toneMapping}function Ii(h,y,T,L,I){y.isScene!==!0&&(y=Ge),U.resetTextureUnits();const O=y.fog,Y=L.isMeshStandardMaterial?y.environment:null,ne=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,Z=(L.isMeshStandardMaterial?B:E).get(L.envMap||Y),Q=L.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,J=!!T.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),re=!!T.morphAttributes.position,xe=!!T.morphAttributes.normal,me=!!T.morphAttributes.color;let Ae=Gi;L.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const Me=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,we=Me!==void 0?Me.length:0,ve=ze.get(L),rt=p.state.lights;if(oe===!0&&(ce===!0||h!==M)){const lt=h===M&&L.id===b;he.setState(L,h,lt)}let Ye=!1;L.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==rt.state.version||ve.outputColorSpace!==ne||I.isBatchedMesh&&ve.batching===!1||!I.isBatchedMesh&&ve.batching===!0||I.isBatchedMesh&&ve.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ve.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ve.instancing===!1||!I.isInstancedMesh&&ve.instancing===!0||I.isSkinnedMesh&&ve.skinning===!1||!I.isSkinnedMesh&&ve.skinning===!0||I.isInstancedMesh&&ve.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ve.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ve.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ve.instancingMorph===!1&&I.morphTexture!==null||ve.envMap!==Z||L.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==he.numPlanes||ve.numIntersection!==he.numIntersection)||ve.vertexAlphas!==Q||ve.vertexTangents!==J||ve.morphTargets!==re||ve.morphNormals!==xe||ve.morphColors!==me||ve.toneMapping!==Ae||ve.morphTargetsCount!==we)&&(Ye=!0):(Ye=!0,ve.__version=L.version);let wt=ve.currentProgram;Ye===!0&&(wt=qi(L,y,I));let gt=!1,et=!1,bt=!1;const st=wt.getUniforms(),xt=ve.uniforms;if(Ue.useProgram(wt.program)&&(gt=!0,et=!0,bt=!0),L.id!==b&&(b=L.id,et=!0),gt||M!==h){Ue.buffers.depth.getReversed()?(se.copy(h.projectionMatrix),N_(se),O_(se),st.setValue(z,"projectionMatrix",se)):st.setValue(z,"projectionMatrix",h.projectionMatrix),st.setValue(z,"viewMatrix",h.matrixWorldInverse);const zt=st.map.cameraPosition;zt!==void 0&&zt.setValue(z,Oe.setFromMatrixPosition(h.matrixWorld)),je.logarithmicDepthBuffer&&st.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&st.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),M!==h&&(M=h,et=!0,bt=!0)}if(I.isSkinnedMesh){st.setOptional(z,I,"bindMatrix"),st.setOptional(z,I,"bindMatrixInverse");const lt=I.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(z,"boneTexture",lt.boneTexture,U))}I.isBatchedMesh&&(st.setOptional(z,I,"batchingTexture"),st.setValue(z,"batchingTexture",I._matricesTexture,U),st.setOptional(z,I,"batchingIdTexture"),st.setValue(z,"batchingIdTexture",I._indirectTexture,U),st.setOptional(z,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(z,"batchingColorTexture",I._colorsTexture,U));const at=T.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&Ee.update(I,T,wt),(et||ve.receiveShadow!==I.receiveShadow)&&(ve.receiveShadow=I.receiveShadow,st.setValue(z,"receiveShadow",I.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(xt.envMap.value=Z,xt.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&y.environment!==null&&(xt.envMapIntensity.value=y.environmentIntensity),et&&(st.setValue(z,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&li(xt,bt),O&&L.fog===!0&&de.refreshFogUniforms(xt,O),de.refreshMaterialUniforms(xt,L,H,k,p.state.transmissionRenderTarget[h.id]),el.upload(z,pr(ve),xt,U)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(el.upload(z,pr(ve),xt,U),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&st.setValue(z,"center",I.center),st.setValue(z,"modelViewMatrix",I.modelViewMatrix),st.setValue(z,"normalMatrix",I.normalMatrix),st.setValue(z,"modelMatrix",I.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const lt=L.uniformsGroups;for(let zt=0,Kt=lt.length;zt<Kt;zt++){const sn=lt[zt];X.update(sn,wt),X.bind(sn,wt)}}return wt}function li(h,y){h.ambientLightColor.needsUpdate=y,h.lightProbe.needsUpdate=y,h.directionalLights.needsUpdate=y,h.directionalLightShadows.needsUpdate=y,h.pointLights.needsUpdate=y,h.pointLightShadows.needsUpdate=y,h.spotLights.needsUpdate=y,h.spotLightShadows.needsUpdate=y,h.rectAreaLights.needsUpdate=y,h.hemisphereLights.needsUpdate=y}function xi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(h,y,T){ze.get(h.texture).__webglTexture=y,ze.get(h.depthTexture).__webglTexture=T;const L=ze.get(h);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=T===void 0,L.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,y){const T=ze.get(h);T.__webglFramebuffer=y,T.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(h,y=0,T=0){P=h,R=y,A=T;let L=!0,I=null,O=!1,Y=!1;if(h){const Z=ze.get(h);if(Z.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(z.FRAMEBUFFER,null),L=!1;else if(Z.__webglFramebuffer===void 0)U.setupRenderTarget(h);else if(Z.__hasExternalTextures)U.rebindTextures(h,ze.get(h.texture).__webglTexture,ze.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const re=h.depthTexture;if(Z.__boundDepthTexture!==re){if(re!==null&&ze.has(re)&&(h.width!==re.image.width||h.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(h)}}const Q=h.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(Y=!0);const J=ze.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(J[y])?I=J[y][T]:I=J[y],O=!0):h.samples>0&&U.useMultisampledRTT(h)===!1?I=ze.get(h).__webglMultisampledFramebuffer:Array.isArray(J)?I=J[T]:I=J,D.copy(h.viewport),N.copy(h.scissor),F=h.scissorTest}else D.copy(ye).multiplyScalar(H).floor(),N.copy(Se).multiplyScalar(H).floor(),F=Le;if(Ue.bindFramebuffer(z.FRAMEBUFFER,I)&&L&&Ue.drawBuffers(h,I),Ue.viewport(D),Ue.scissor(N),Ue.setScissorTest(F),O){const Z=ze.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+y,Z.__webglTexture,T)}else if(Y){const Z=ze.get(h.texture),Q=y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.__webglTexture,T||0,Q)}b=-1},this.readRenderTargetPixels=function(h,y,T,L,I,O,Y){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){Ue.bindFramebuffer(z.FRAMEBUFFER,ne);try{const Z=h.texture,Q=Z.format,J=Z.type;if(!je.textureFormatReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=h.width-L&&T>=0&&T<=h.height-I&&z.readPixels(y,T,L,I,Xe.convert(Q),Xe.convert(J),O)}finally{const Z=P!==null?ze.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,y,T,L,I,O,Y){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=ze.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){const Z=h.texture,Q=Z.format,J=Z.type;if(!je.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=h.width-L&&T>=0&&T<=h.height-I){Ue.bindFramebuffer(z.FRAMEBUFFER,ne);const re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.bufferData(z.PIXEL_PACK_BUFFER,O.byteLength,z.STREAM_READ),z.readPixels(y,T,L,I,Xe.convert(Q),Xe.convert(J),0);const xe=P!==null?ze.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,xe);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await F_(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,O),z.deleteBuffer(re),z.deleteSync(me),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,y=null,T=0){h.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,h=arguments[1]);const L=Math.pow(2,-T),I=Math.floor(h.image.width*L),O=Math.floor(h.image.height*L),Y=y!==null?y.x:0,ne=y!==null?y.y:0;U.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,T,0,0,Y,ne,I,O),Ue.unbindTexture()},this.copyTextureToTexture=function(h,y,T=null,L=null,I=0){h.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,h=arguments[1],y=arguments[2],I=arguments[3]||0,T=null);let O,Y,ne,Z,Q,J,re,xe,me;const Ae=h.isCompressedTexture?h.mipmaps[I]:h.image;T!==null?(O=T.max.x-T.min.x,Y=T.max.y-T.min.y,ne=T.isBox3?T.max.z-T.min.z:1,Z=T.min.x,Q=T.min.y,J=T.isBox3?T.min.z:0):(O=Ae.width,Y=Ae.height,ne=Ae.depth||1,Z=0,Q=0,J=0),L!==null?(re=L.x,xe=L.y,me=L.z):(re=0,xe=0,me=0);const Me=Xe.convert(y.format),we=Xe.convert(y.type);let ve;y.isData3DTexture?(U.setTexture3D(y,0),ve=z.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(U.setTexture2DArray(y,0),ve=z.TEXTURE_2D_ARRAY):(U.setTexture2D(y,0),ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,y.unpackAlignment);const rt=z.getParameter(z.UNPACK_ROW_LENGTH),Ye=z.getParameter(z.UNPACK_IMAGE_HEIGHT),wt=z.getParameter(z.UNPACK_SKIP_PIXELS),gt=z.getParameter(z.UNPACK_SKIP_ROWS),et=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Z),z.pixelStorei(z.UNPACK_SKIP_ROWS,Q),z.pixelStorei(z.UNPACK_SKIP_IMAGES,J);const bt=h.isDataArrayTexture||h.isData3DTexture,st=y.isDataArrayTexture||y.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){const xt=ze.get(h),at=ze.get(y),lt=ze.get(xt.__renderTarget),zt=ze.get(at.__renderTarget);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,lt.__webglFramebuffer),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Kt=0;Kt<ne;Kt++)bt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(h).__webglTexture,I,J+Kt),h.isDepthTexture?(st&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(y).__webglTexture,I,me+Kt),z.blitFramebuffer(Z,Q,O,Y,re,xe,O,Y,z.DEPTH_BUFFER_BIT,z.NEAREST)):st?z.copyTexSubImage3D(ve,I,re,xe,me+Kt,Z,Q,O,Y):z.copyTexSubImage2D(ve,I,re,xe,me+Kt,Z,Q,O,Y);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else st?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,we,Ae.data):y.isCompressedArrayTexture?z.compressedTexSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,Ae.data):z.texSubImage3D(ve,I,re,xe,me,O,Y,ne,Me,we,Ae):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,re,xe,O,Y,Me,we,Ae.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,re,xe,Ae.width,Ae.height,Me,Ae.data):z.texSubImage2D(z.TEXTURE_2D,I,re,xe,O,Y,Me,we,Ae);z.pixelStorei(z.UNPACK_ROW_LENGTH,rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ye),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,et),I===0&&y.generateMipmaps&&z.generateMipmap(ve),Ue.unbindTexture()},this.copyTextureToTexture3D=function(h,y,T=null,L=null,I=0){return h.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,L=arguments[1]||null,h=arguments[2],y=arguments[3],I=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,y,T,L,I)},this.initRenderTarget=function(h){ze.get(h).__webglFramebuffer===void 0&&U.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?U.setTextureCube(h,0):h.isData3DTexture?U.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?U.setTexture2DArray(h,0):U.setTexture2D(h,0),Ue.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,Ue.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class gs extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bl extends _n{constructor(e=null,t=1,n=1,r,o,s,a,l,c=nn,u=nn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ky extends _n{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const fl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jy{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Jy=new jy;class ra{constructor(e){this.manager=e!==void 0?e:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class Qy extends Error{constructor(e,t){super(e),this.response=t}}class eS extends ra{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=fl.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:r});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,v=m!==0;let g=0;const _=new ReadableStream({start(p){w();function w(){d.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let R=0,A=u.length;R<A;R++){const P=u[R];P.onProgress&&P.onProgress(C)}p.enqueue(x),w()}},S=>{p.error(S)})}}});return new Response(_)}else throw new Qy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{fl.add(e,c);const u=Qi[e];delete Qi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tS extends ra{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=fl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=ta("img");function l(){u(),fl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class nS extends ra{constructor(e){super(e)}load(e,t,n,r){const o=this,s=new bl,a=new eS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(e,function(l){let c;try{c=o.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:In,s.wrapT=c.wrapT!==void 0?c.wrapT:In,s.magFilter=c.magFilter!==void 0?c.magFilter:pt,s.minFilter=c.minFilter!==void 0?c.minFilter:pt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ri),c.mipmapCount===1&&(s.minFilter=pt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,r),s}}class ir extends ra{constructor(e){super(e)}load(e,t,n,r){const o=new _n,s=new tS(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class lo extends dr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var di=Uint8Array,Xo=Uint16Array,iS=Int32Array,zp=new di([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bp=new di([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rS=new di([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kp=function(i,e){for(var t=new Xo(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new iS(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)r[o]=o-t[n]<<5|n;return{b:t,r}},Hp=kp(zp,2),Vp=Hp.b,oS=Hp.r;Vp[28]=258,oS[258]=28;var sS=kp(Bp,0),aS=sS.b,yu=new Xo(32768);for(var Ft=0;Ft<32768;++Ft){var Er=(Ft&43690)>>1|(Ft&21845)<<1;Er=(Er&52428)>>2|(Er&13107)<<2,Er=(Er&61680)>>4|(Er&3855)<<4,yu[Ft]=((Er&65280)>>8|(Er&255)<<8)>>1}var Hs=(function(i,e,t){for(var n=i.length,r=0,o=new Xo(e);r<n;++r)i[r]&&++o[i[r]-1];var s=new Xo(e);for(r=1;r<e;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new Xo(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=s[i[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[yu[d]>>l]=c}else for(a=new Xo(n),r=0;r<n;++r)i[r]&&(a[r]=yu[s[i[r]-1]++]>>15-i[r]);return a}),oa=new di(288);for(var Ft=0;Ft<144;++Ft)oa[Ft]=8;for(var Ft=144;Ft<256;++Ft)oa[Ft]=9;for(var Ft=256;Ft<280;++Ft)oa[Ft]=7;for(var Ft=280;Ft<288;++Ft)oa[Ft]=8;var Gp=new di(32);for(var Ft=0;Ft<32;++Ft)Gp[Ft]=5;var lS=Hs(oa,9,1),cS=Hs(Gp,5,1),dc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},bi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},pc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},uS=function(i){return(i+7)/8|0},hS=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new di(i.subarray(e,t))},fS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ei=function(i,e,t){var n=new Error(e||fS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ei),!t)throw n;return n},dS=function(i,e,t,n){var r=i.length,o=0;if(!r||e.f&&!e.l)return t||new di(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new di(r*3));var c=function(Ge){var Be=t.length;if(Ge>Be){var tt=new di(Math.max(Be*2,Ge));tt.set(t),t=tt}},u=e.f||0,d=e.p||0,f=e.b||0,m=e.l,v=e.d,g=e.m,_=e.n,p=r*8;do{if(!m){u=bi(i,d,1);var w=bi(i,d+1,3);if(d+=3,w)if(w==1)m=lS,v=cS,g=9,_=5;else if(w==2){var R=bi(i,d,31)+257,A=bi(i,d+10,15)+4,P=R+bi(i,d+5,31)+1;d+=14;for(var b=new di(P),M=new di(19),D=0;D<A;++D)M[rS[D]]=bi(i,d+D*3,7);d+=A*3;for(var N=dc(M),F=(1<<N)-1,V=Hs(M,N,1),D=0;D<P;){var W=V[bi(i,d,F)];d+=W&15;var S=W>>4;if(S<16)b[D++]=S;else{var G=0,k=0;for(S==16?(k=3+bi(i,d,3),d+=2,G=b[D-1]):S==17?(k=3+bi(i,d,7),d+=3):S==18&&(k=11+bi(i,d,127),d+=7);k--;)b[D++]=G}}var H=b.subarray(0,R),le=b.subarray(R);g=dc(H),_=dc(le),m=Hs(H,g,1),v=Hs(le,_,1)}else Ei(1);else{var S=uS(d)+4,x=i[S-4]|i[S-3]<<8,C=S+x;if(C>r){l&&Ei(0);break}a&&c(f+x),t.set(i.subarray(S,C),f),e.b=f+=x,e.p=d=C*8,e.f=u;continue}if(d>p){l&&Ei(0);break}}a&&c(f+131072);for(var K=(1<<g)-1,ye=(1<<_)-1,Se=d;;Se=d){var G=m[pc(i,d)&K],Le=G>>4;if(d+=G&15,d>p){l&&Ei(0);break}if(G||Ei(2),Le<256)t[f++]=Le;else if(Le==256){Se=d,m=null;break}else{var j=Le-254;if(Le>264){var D=Le-257,oe=zp[D];j=bi(i,d,(1<<oe)-1)+Vp[D],d+=oe}var ce=v[pc(i,d)&ye],se=ce>>4;ce||Ei(3),d+=ce&15;var le=aS[se];if(se>3){var oe=Bp[se];le+=pc(i,d)&(1<<oe)-1,d+=oe}if(d>p){l&&Ei(0);break}a&&c(f+131072);var Te=f+j;if(f<le){var Oe=o-le,Pe=Math.min(le,Te);for(Oe+f<0&&Ei(3);f<Pe;++f)t[f]=n[Oe+f]}for(;f<Te;++f)t[f]=t[f-le]}}e.l=m,e.p=Se,e.b=f,e.f=u,m&&(u=1,e.m=g,e.d=v,e.n=_)}while(!u);return f!=t.length&&s?hS(t,0,f):t.subarray(0,f)},pS=new di(0),mS=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ei(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ei(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Fa(i,e){return dS(i.subarray(mS(i),-4),{i:2},e,e)}var _S=typeof TextDecoder<"u"&&new TextDecoder,gS=0;try{_S.decode(pS,{stream:!0}),gS=1}catch{}class vS extends nS{constructor(e){super(e),this.type=Vi}parse(e){const b=Math.pow(2.7182818,2.2);function M(h,y){let T=0;for(let I=0;I<65536;++I)(I==0||h[I>>3]&1<<(I&7))&&(y[T++]=I);const L=T-1;for(;T<65536;)y[T++]=0;return L}function D(h){for(let y=0;y<16384;y++)h[y]={},h[y].len=0,h[y].lit=0,h[y].p=null}const N={l:0,c:0,lc:0};function F(h,y,T,L,I){for(;T<h;)y=y<<8|De(L,I),T+=8;T-=h,N.l=y>>T&(1<<h)-1,N.c=y,N.lc=T}const V=new Array(59);function W(h){for(let T=0;T<=58;++T)V[T]=0;for(let T=0;T<65537;++T)V[h[T]]+=1;let y=0;for(let T=58;T>0;--T){const L=y+V[T]>>1;V[T]=y,y=L}for(let T=0;T<65537;++T){const L=h[T];L>0&&(h[T]=L|V[L]++<<6)}}function G(h,y,T,L,I,O){const Y=y;let ne=0,Z=0;for(;L<=I;L++){if(Y.value-y.value>T)return!1;F(6,ne,Z,h,Y);const Q=N.l;if(ne=N.c,Z=N.lc,O[L]=Q,Q==63){if(Y.value-y.value>T)throw new Error("Something wrong with hufUnpackEncTable");F(8,ne,Z,h,Y);let J=N.l+6;if(ne=N.c,Z=N.lc,L+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[L++]=0;L--}else if(Q>=59){let J=Q-59+2;if(L+J>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[L++]=0;L--}}W(O)}function k(h){return h&63}function H(h){return h>>6}function le(h,y,T,L){for(;y<=T;y++){const I=H(h[y]),O=k(h[y]);if(I>>O)throw new Error("Invalid table entry");if(O>14){const Y=L[I>>O-14];if(Y.len)throw new Error("Invalid table entry");if(Y.lit++,Y.p){const ne=Y.p;Y.p=new Array(Y.lit);for(let Z=0;Z<Y.lit-1;++Z)Y.p[Z]=ne[Z]}else Y.p=new Array(1);Y.p[Y.lit-1]=y}else if(O){let Y=0;for(let ne=1<<14-O;ne>0;ne--){const Z=L[(I<<14-O)+Y];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=O,Z.lit=y,Y++}}}return!0}const K={c:0,lc:0};function ye(h,y,T,L){h=h<<8|De(T,L),y+=8,K.c=h,K.lc=y}const Se={c:0,lc:0};function Le(h,y,T,L,I,O,Y,ne,Z){if(h==y){L<8&&(ye(T,L,I,O),T=K.c,L=K.lc),L-=8;let Q=T>>L;if(Q=new Uint8Array([Q])[0],ne.value+Q>Z)return!1;const J=Y[ne.value-1];for(;Q-- >0;)Y[ne.value++]=J}else if(ne.value<Z)Y[ne.value++]=h;else return!1;Se.c=T,Se.lc=L}function j(h){return h&65535}function oe(h){const y=j(h);return y>32767?y-65536:y}const ce={a:0,b:0};function se(h,y){const T=oe(h),I=oe(y),O=T+(I&1)+(I>>1),Y=O,ne=O-I;ce.a=Y,ce.b=ne}function Te(h,y){const T=j(h),L=j(y),I=T-(L>>1)&65535,O=L+I-32768&65535;ce.a=O,ce.b=I}function Oe(h,y,T,L,I,O,Y){const ne=Y<16384,Z=T>I?I:T;let Q=1,J,re;for(;Q<=Z;)Q<<=1;for(Q>>=1,J=Q,Q>>=1;Q>=1;){re=0;const xe=re+O*(I-J),me=O*Q,Ae=O*J,Me=L*Q,we=L*J;let ve,rt,Ye,wt;for(;re<=xe;re+=Ae){let gt=re;const et=re+L*(T-J);for(;gt<=et;gt+=we){const bt=gt+Me,st=gt+me,xt=st+Me;ne?(se(h[gt+y],h[st+y]),ve=ce.a,Ye=ce.b,se(h[bt+y],h[xt+y]),rt=ce.a,wt=ce.b,se(ve,rt),h[gt+y]=ce.a,h[bt+y]=ce.b,se(Ye,wt),h[st+y]=ce.a,h[xt+y]=ce.b):(Te(h[gt+y],h[st+y]),ve=ce.a,Ye=ce.b,Te(h[bt+y],h[xt+y]),rt=ce.a,wt=ce.b,Te(ve,rt),h[gt+y]=ce.a,h[bt+y]=ce.b,Te(Ye,wt),h[st+y]=ce.a,h[xt+y]=ce.b)}if(T&Q){const bt=gt+me;ne?se(h[gt+y],h[bt+y]):Te(h[gt+y],h[bt+y]),ve=ce.a,h[bt+y]=ce.b,h[gt+y]=ve}}if(I&Q){let gt=re;const et=re+L*(T-J);for(;gt<=et;gt+=we){const bt=gt+Me;ne?se(h[gt+y],h[bt+y]):Te(h[gt+y],h[bt+y]),ve=ce.a,h[bt+y]=ce.b,h[gt+y]=ve}}J=Q,Q>>=1}return re}function Pe(h,y,T,L,I,O,Y,ne,Z){let Q=0,J=0;const re=Y,xe=Math.trunc(L.value+(I+7)/8);for(;L.value<xe;)for(ye(Q,J,T,L),Q=K.c,J=K.lc;J>=14;){const Ae=Q>>J-14&16383,Me=y[Ae];if(Me.len)J-=Me.len,Le(Me.lit,O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;else{if(!Me.p)throw new Error("hufDecode issues");let we;for(we=0;we<Me.lit;we++){const ve=k(h[Me.p[we]]);for(;J<ve&&L.value<xe;)ye(Q,J,T,L),Q=K.c,J=K.lc;if(J>=ve&&H(h[Me.p[we]])==(Q>>J-ve&(1<<ve)-1)){J-=ve,Le(Me.p[we],O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;break}}if(we==Me.lit)throw new Error("hufDecode issues")}}const me=8-I&7;for(Q>>=me,J-=me;J>0;){const Ae=y[Q<<14-J&16383];if(Ae.len)J-=Ae.len,Le(Ae.lit,O,Q,J,T,L,ne,Z,re),Q=Se.c,J=Se.lc;else throw new Error("hufDecode issues")}return!0}function Ge(h,y,T,L,I,O){const Y={value:0},ne=T.value,Z=Ee(y,T),Q=Ee(y,T);T.value+=4;const J=Ee(y,T);if(T.value+=4,Z<0||Z>=65537||Q<0||Q>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const re=new Array(65537),xe=new Array(16384);D(xe);const me=L-(T.value-ne);if(G(h,T,me,Z,Q,re),J>8*(L-(T.value-ne)))throw new Error("Something wrong with hufUncompress");le(re,Z,Q,xe),Pe(re,xe,h,T,J,Q,O,I,Y)}function Be(h,y,T){for(let L=0;L<T;++L)y[L]=h[y[L]]}function tt(h){for(let y=1;y<h.length;y++){const T=h[y-1]+h[y]-128;h[y]=T}}function z(h,y){let T=0,L=Math.floor((h.length+1)/2),I=0;const O=h.length-1;for(;!(I>O||(y[I++]=h[T++],I>O));)y[I++]=h[L++]}function ke(h){let y=h.byteLength;const T=new Array;let L=0;const I=new DataView(h);for(;y>0;){const O=I.getInt8(L++);if(O<0){const Y=-O;y-=Y+1;for(let ne=0;ne<Y;ne++)T.push(I.getUint8(L++))}else{const Y=O;y-=2;const ne=I.getUint8(L++);for(let Z=0;Z<Y+1;Z++)T.push(ne)}}return T}function We(h,y,T,L,I,O){let Y=new DataView(O.buffer);const ne=T[h.idx[0]].width,Z=T[h.idx[0]].height,Q=3,J=Math.floor(ne/8),re=Math.ceil(ne/8),xe=Math.ceil(Z/8),me=ne-(re-1)*8,Ae=Z-(xe-1)*8,Me={value:0},we=new Array(Q),ve=new Array(Q),rt=new Array(Q),Ye=new Array(Q),wt=new Array(Q);for(let et=0;et<Q;++et)wt[et]=y[h.idx[et]],we[et]=et<1?0:we[et-1]+re*xe,ve[et]=new Float32Array(64),rt[et]=new Uint16Array(64),Ye[et]=new Uint16Array(re*64);for(let et=0;et<xe;++et){let bt=8;et==xe-1&&(bt=Ae);let st=8;for(let at=0;at<re;++at){at==re-1&&(st=me);for(let lt=0;lt<Q;++lt)rt[lt].fill(0),rt[lt][0]=I[we[lt]++],je(Me,L,rt[lt]),Ue(rt[lt],ve[lt]),qe(ve[lt]);ze(ve);for(let lt=0;lt<Q;++lt)U(ve[lt],Ye[lt],at*64)}let xt=0;for(let at=0;at<Q;++at){const lt=T[h.idx[at]].type;for(let zt=8*et;zt<8*et+bt;++zt){xt=wt[at][zt];for(let Kt=0;Kt<J;++Kt){const sn=Kt*64+(zt&7)*8;Y.setUint16(xt+0*lt,Ye[at][sn+0],!0),Y.setUint16(xt+2*lt,Ye[at][sn+1],!0),Y.setUint16(xt+4*lt,Ye[at][sn+2],!0),Y.setUint16(xt+6*lt,Ye[at][sn+3],!0),Y.setUint16(xt+8*lt,Ye[at][sn+4],!0),Y.setUint16(xt+10*lt,Ye[at][sn+5],!0),Y.setUint16(xt+12*lt,Ye[at][sn+6],!0),Y.setUint16(xt+14*lt,Ye[at][sn+7],!0),xt+=16*lt}}if(J!=re)for(let zt=8*et;zt<8*et+bt;++zt){const Kt=wt[at][zt]+8*J*2*lt,sn=J*64+(zt&7)*8;for(let Vr=0;Vr<st;++Vr)Y.setUint16(Kt+Vr*2*lt,Ye[at][sn+Vr],!0)}}}const gt=new Uint16Array(ne);Y=new DataView(O.buffer);for(let et=0;et<Q;++et){T[h.idx[et]].decoded=!0;const bt=T[h.idx[et]].type;if(T[et].type==2)for(let st=0;st<Z;++st){const xt=wt[et][st];for(let at=0;at<ne;++at)gt[at]=Y.getUint16(xt+at*2*bt,!0);for(let at=0;at<ne;++at)Y.setFloat32(xt+at*2*bt,ee(gt[at]),!0)}}}function je(h,y,T){let L,I=1;for(;I<64;)L=y[h.value],L==65280?I=64:L>>8==255?I+=L&255:(T[I]=L,I++),h.value++}function Ue(h,y){y[0]=ee(h[0]),y[1]=ee(h[1]),y[2]=ee(h[5]),y[3]=ee(h[6]),y[4]=ee(h[14]),y[5]=ee(h[15]),y[6]=ee(h[27]),y[7]=ee(h[28]),y[8]=ee(h[2]),y[9]=ee(h[4]),y[10]=ee(h[7]),y[11]=ee(h[13]),y[12]=ee(h[16]),y[13]=ee(h[26]),y[14]=ee(h[29]),y[15]=ee(h[42]),y[16]=ee(h[3]),y[17]=ee(h[8]),y[18]=ee(h[12]),y[19]=ee(h[17]),y[20]=ee(h[25]),y[21]=ee(h[30]),y[22]=ee(h[41]),y[23]=ee(h[43]),y[24]=ee(h[9]),y[25]=ee(h[11]),y[26]=ee(h[18]),y[27]=ee(h[24]),y[28]=ee(h[31]),y[29]=ee(h[40]),y[30]=ee(h[44]),y[31]=ee(h[53]),y[32]=ee(h[10]),y[33]=ee(h[19]),y[34]=ee(h[23]),y[35]=ee(h[32]),y[36]=ee(h[39]),y[37]=ee(h[45]),y[38]=ee(h[52]),y[39]=ee(h[54]),y[40]=ee(h[20]),y[41]=ee(h[22]),y[42]=ee(h[33]),y[43]=ee(h[38]),y[44]=ee(h[46]),y[45]=ee(h[51]),y[46]=ee(h[55]),y[47]=ee(h[60]),y[48]=ee(h[21]),y[49]=ee(h[34]),y[50]=ee(h[37]),y[51]=ee(h[47]),y[52]=ee(h[50]),y[53]=ee(h[56]),y[54]=ee(h[59]),y[55]=ee(h[61]),y[56]=ee(h[35]),y[57]=ee(h[36]),y[58]=ee(h[48]),y[59]=ee(h[49]),y[60]=ee(h[57]),y[61]=ee(h[58]),y[62]=ee(h[62]),y[63]=ee(h[63])}function qe(h){const y=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),Y=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),Z=new Array(4),Q=new Array(4),J=new Array(4),re=new Array(4);for(let xe=0;xe<8;++xe){const me=xe*8;Z[0]=L*h[me+2],Z[1]=Y*h[me+2],Z[2]=L*h[me+6],Z[3]=Y*h[me+6],Q[0]=T*h[me+1]+I*h[me+3]+O*h[me+5]+ne*h[me+7],Q[1]=I*h[me+1]-ne*h[me+3]-T*h[me+5]-O*h[me+7],Q[2]=O*h[me+1]-T*h[me+3]+ne*h[me+5]+I*h[me+7],Q[3]=ne*h[me+1]-O*h[me+3]+I*h[me+5]-T*h[me+7],J[0]=y*(h[me+0]+h[me+4]),J[3]=y*(h[me+0]-h[me+4]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[me+0]=re[0]+Q[0],h[me+1]=re[1]+Q[1],h[me+2]=re[2]+Q[2],h[me+3]=re[3]+Q[3],h[me+4]=re[3]-Q[3],h[me+5]=re[2]-Q[2],h[me+6]=re[1]-Q[1],h[me+7]=re[0]-Q[0]}for(let xe=0;xe<8;++xe)Z[0]=L*h[16+xe],Z[1]=Y*h[16+xe],Z[2]=L*h[48+xe],Z[3]=Y*h[48+xe],Q[0]=T*h[8+xe]+I*h[24+xe]+O*h[40+xe]+ne*h[56+xe],Q[1]=I*h[8+xe]-ne*h[24+xe]-T*h[40+xe]-O*h[56+xe],Q[2]=O*h[8+xe]-T*h[24+xe]+ne*h[40+xe]+I*h[56+xe],Q[3]=ne*h[8+xe]-O*h[24+xe]+I*h[40+xe]-T*h[56+xe],J[0]=y*(h[xe]+h[32+xe]),J[3]=y*(h[xe]-h[32+xe]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],re[0]=J[0]+J[1],re[1]=J[3]+J[2],re[2]=J[3]-J[2],re[3]=J[0]-J[1],h[0+xe]=re[0]+Q[0],h[8+xe]=re[1]+Q[1],h[16+xe]=re[2]+Q[2],h[24+xe]=re[3]+Q[3],h[32+xe]=re[3]-Q[3],h[40+xe]=re[2]-Q[2],h[48+xe]=re[1]-Q[1],h[56+xe]=re[0]-Q[0]}function ze(h){for(let y=0;y<64;++y){const T=h[0][y],L=h[1][y],I=h[2][y];h[0][y]=T+1.5747*I,h[1][y]=T-.1873*L-.4682*I,h[2][y]=T+1.8556*L}}function U(h,y,T){for(let L=0;L<64;++L)y[T+L]=sf.toHalfFloat(E(h[L]))}function E(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(b,Math.abs(h)-1)}function B(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function $(h){const y=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),T=new Uint8Array(ke(y)),L=new Uint8Array(T.length);return tt(T),z(T,L),new DataView(L.buffer)}function ae(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),T=Fa(y),L=new Uint8Array(T.length);return tt(T),z(T,L),new DataView(L.buffer)}function ie(h){const y=h.viewer,T={value:h.offset.value},L=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),I=new Uint8Array(8192);let O=0;const Y=new Array(h.inputChannels.length);for(let Ae=0,Me=h.inputChannels.length;Ae<Me;Ae++)Y[Ae]={},Y[Ae].start=O,Y[Ae].end=Y[Ae].start,Y[Ae].nx=h.columns,Y[Ae].ny=h.lines,Y[Ae].size=h.type,O+=Y[Ae].nx*Y[Ae].ny*Y[Ae].size;const ne=te(y,T),Z=te(y,T);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=Z)for(let Ae=0;Ae<Z-ne+1;Ae++)I[Ae+ne]=Je(y,T);const Q=new Uint16Array(65536),J=M(I,Q),re=Ee(y,T);Ge(h.array,y,T,re,L,O);for(let Ae=0;Ae<h.inputChannels.length;++Ae){const Me=Y[Ae];for(let we=0;we<Y[Ae].size;++we)Oe(L,Me.start+we,Me.nx,Me.size,Me.ny,Me.nx*Me.size,J)}Be(Q,L,O);let xe=0;const me=new Uint8Array(L.buffer.byteLength);for(let Ae=0;Ae<h.lines;Ae++)for(let Me=0;Me<h.inputChannels.length;Me++){const we=Y[Me],ve=we.nx*we.size,rt=new Uint8Array(L.buffer,we.end*2,ve*2);me.set(rt,xe),xe+=ve*2,we.end+=ve}return new DataView(me.buffer)}function Re(h){const y=h.array.slice(h.offset.value,h.offset.value+h.size),T=Fa(y),L=h.inputChannels.length*h.lines*h.columns*h.totalBytes,I=new ArrayBuffer(L),O=new DataView(I);let Y=0,ne=0;const Z=new Array(4);for(let Q=0;Q<h.lines;Q++)for(let J=0;J<h.inputChannels.length;J++){let re=0;switch(h.inputChannels[J].pixelType){case 1:Z[0]=Y,Z[1]=Z[0]+h.columns,Y=Z[1]+h.columns;for(let me=0;me<h.columns;++me){const Ae=T[Z[0]++]<<8|T[Z[1]++];re+=Ae,O.setUint16(ne,re,!0),ne+=2}break;case 2:Z[0]=Y,Z[1]=Z[0]+h.columns,Z[2]=Z[1]+h.columns,Y=Z[2]+h.columns;for(let me=0;me<h.columns;++me){const Ae=T[Z[0]++]<<24|T[Z[1]++]<<16|T[Z[2]++]<<8;re+=Ae,O.setUint32(ne,re,!0),ne+=4}break}}return O}function de(h){const y=h.viewer,T={value:h.offset.value},L=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),I={version:Xe(y,T),unknownUncompressedSize:Xe(y,T),unknownCompressedSize:Xe(y,T),acCompressedSize:Xe(y,T),dcCompressedSize:Xe(y,T),rleCompressedSize:Xe(y,T),rleUncompressedSize:Xe(y,T),rleRawSize:Xe(y,T),totalAcUncompressedCount:Xe(y,T),totalDcUncompressedCount:Xe(y,T),acCompression:Xe(y,T)};if(I.version<2)throw new Error("EXRLoader.parse: "+li.compression+" version "+I.version+" is unsupported");const O=new Array;let Y=te(y,T)-2;for(;Y>0;){const Me=_e(y.buffer,T),we=Je(y,T),ve=we>>2&3,rt=(we>>4)-1,Ye=new Int8Array([rt])[0],wt=Je(y,T);O.push({name:Me,index:Ye,type:wt,compression:ve}),Y-=Me.length+3}const ne=li.channels,Z=new Array(h.inputChannels.length);for(let Me=0;Me<h.inputChannels.length;++Me){const we=Z[Me]={},ve=ne[Me];we.name=ve.name,we.compression=0,we.decoded=!1,we.type=ve.pixelType,we.pLinear=ve.pLinear,we.width=h.columns,we.height=h.lines}const Q={idx:new Array(3)};for(let Me=0;Me<h.inputChannels.length;++Me){const we=Z[Me];for(let ve=0;ve<O.length;++ve){const rt=O[ve];we.name==rt.name&&(we.compression=rt.compression,rt.index>=0&&(Q.idx[rt.index]=Me),we.offset=Me)}}let J,re,xe;if(I.acCompressedSize>0)switch(I.acCompression){case 0:J=new Uint16Array(I.totalAcUncompressedCount),Ge(h.array,y,T,I.acCompressedSize,J,I.totalAcUncompressedCount);break;case 1:const Me=h.array.slice(T.value,T.value+I.totalAcUncompressedCount),we=Fa(Me);J=new Uint16Array(we.buffer),T.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const Me={array:h.array,offset:T,size:I.dcCompressedSize};re=new Uint16Array(ae(Me).buffer),T.value+=I.dcCompressedSize}if(I.rleRawSize>0){const Me=h.array.slice(T.value,T.value+I.rleCompressedSize),we=Fa(Me);xe=ke(we.buffer),T.value+=I.rleCompressedSize}let me=0;const Ae=new Array(Z.length);for(let Me=0;Me<Ae.length;++Me)Ae[Me]=new Array;for(let Me=0;Me<h.lines;++Me)for(let we=0;we<Z.length;++we)Ae[we].push(me),me+=Z[we].width*h.type*2;We(Q,Ae,Z,J,re,L);for(let Me=0;Me<Z.length;++Me){const we=Z[Me];if(!we.decoded)switch(we.compression){case 2:let ve=0,rt=0;for(let Ye=0;Ye<h.lines;++Ye){let wt=Ae[Me][ve];for(let gt=0;gt<we.width;++gt){for(let et=0;et<2*we.type;++et)L[wt++]=xe[rt+et*we.width*we.height];rt++}ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function _e(h,y){const T=new Uint8Array(h);let L=0;for(;T[y.value+L]!=0;)L+=1;const I=new TextDecoder().decode(T.slice(y.value,y.value+L));return y.value=y.value+L+1,I}function Ke(h,y,T){const L=new TextDecoder().decode(new Uint8Array(h).slice(y.value,y.value+T));return y.value=y.value+T,L}function he(h,y){const T=ge(h,y),L=Ee(h,y);return[T,L]}function ue(h,y){const T=Ee(h,y),L=Ee(h,y);return[T,L]}function ge(h,y){const T=h.getInt32(y.value,!0);return y.value=y.value+4,T}function Ee(h,y){const T=h.getUint32(y.value,!0);return y.value=y.value+4,T}function De(h,y){const T=h[y.value];return y.value=y.value+1,T}function Je(h,y){const T=h.getUint8(y.value);return y.value=y.value+1,T}const Xe=function(h,y){let T;return"getBigInt64"in DataView.prototype?T=Number(h.getBigInt64(y.value,!0)):T=h.getUint32(y.value+4,!0)+Number(h.getUint32(y.value,!0)<<32),y.value+=8,T};function Qe(h,y){const T=h.getFloat32(y.value,!0);return y.value+=4,T}function X(h,y){return sf.toHalfFloat(Qe(h,y))}function ee(h){const y=(h&31744)>>10,T=h&1023;return(h>>15?-1:1)*(y?y===31?T?NaN:1/0:Math.pow(2,y-15)*(1+T/1024):6103515625e-14*(T/1024))}function te(h,y){const T=h.getUint16(y.value,!0);return y.value+=2,T}function fe(h,y){return ee(te(h,y))}function Ie(h,y,T,L){const I=T.value,O=[];for(;T.value<I+L-1;){const Y=_e(y,T),ne=ge(h,T),Z=Je(h,T);T.value+=3;const Q=ge(h,T),J=ge(h,T);O.push({name:Y,pixelType:ne,pLinear:Z,xSampling:Q,ySampling:J})}return T.value+=1,O}function Fe(h,y){const T=Qe(h,y),L=Qe(h,y),I=Qe(h,y),O=Qe(h,y),Y=Qe(h,y),ne=Qe(h,y),Z=Qe(h,y),Q=Qe(h,y);return{redX:T,redY:L,greenX:I,greenY:O,blueX:Y,blueY:ne,whiteX:Z,whiteY:Q}}function it(h,y){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=Je(h,y);return T[L]}function St(h,y){const T=ge(h,y),L=ge(h,y),I=ge(h,y),O=ge(h,y);return{xMin:T,yMin:L,xMax:I,yMax:O}}function Xt(h,y){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=Je(h,y);return T[L]}function _t(h,y){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=Je(h,y);return T[L]}function Zt(h,y){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],I=Ee(h,y),O=Ee(h,y),Y=Je(h,y);return{xSize:I,ySize:O,levelMode:T[Y&15],roundingMode:L[Y>>4]}}function Fn(h,y){const T=Qe(h,y),L=Qe(h,y);return[T,L]}function yo(h,y){const T=Qe(h,y),L=Qe(h,y),I=Qe(h,y);return[T,L,I]}function So(h,y,T,L,I){if(L==="string"||L==="stringvector"||L==="iccProfile")return Ke(y,T,I);if(L==="chlist")return Ie(h,y,T,I);if(L==="chromaticities")return Fe(h,T);if(L==="compression")return it(h,T);if(L==="box2i")return St(h,T);if(L==="envmap")return _t(h,T);if(L==="tiledesc")return Zt(h,T);if(L==="lineOrder")return Xt(h,T);if(L==="float")return Qe(h,T);if(L==="v2f")return Fn(h,T);if(L==="v3f")return yo(h,T);if(L==="int")return ge(h,T);if(L==="rational")return he(h,T);if(L==="timecode")return ue(h,T);if(L==="preview")return T.value+=I,"skipped";T.value+=I}function Yn(h,y){const T=Math.log2(h);return y=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function Hr(h,y,T){let L=0;switch(h.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=Yn(Math.max(y,T),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function ai(h,y,T,L){const I=new Array(h);for(let O=0;O<h;O++){const Y=1<<O;let ne=y/Y|0;L=="ROUND_UP"&&ne*Y<y&&(ne+=1);const Z=Math.max(ne,1);I[O]=(Z+T-1)/T|0}return I}function vi(){const h=this,y=h.offset,T={value:0};for(let L=0;L<h.tileCount;L++){const I=ge(h.viewer,y),O=ge(h.viewer,y);y.value+=8,h.size=Ee(h.viewer,y);const Y=I*h.blockWidth,ne=O*h.blockHeight;h.columns=Y+h.blockWidth>h.width?h.width-Y:h.blockWidth,h.lines=ne+h.blockHeight>h.height?h.height-ne:h.blockHeight;const Z=h.columns*h.totalBytes,J=h.size<h.lines*Z?h.uncompress(h):B(h);y.value+=h.size;for(let re=0;re<h.lines;re++){const xe=re*h.columns*h.totalBytes;for(let me=0;me<h.inputChannels.length;me++){const Ae=li.channels[me].name,Me=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we===void 0)continue;T.value=xe+Me;const ve=(h.height-(1+ne+re))*h.outLineWidth;for(let rt=0;rt<h.columns;rt++){const Ye=ve+(rt+Y)*h.outputChannels+we;h.byteArray[Ye]=h.getter(J,T)}}}}}function Li(){const h=this,y=h.offset,T={value:0};for(let L=0;L<h.height/h.blockHeight;L++){const I=ge(h.viewer,y)-li.dataWindow.yMin;h.size=Ee(h.viewer,y),h.lines=I+h.blockHeight>h.height?h.height-I:h.blockHeight;const O=h.columns*h.totalBytes,ne=h.size<h.lines*O?h.uncompress(h):B(h);y.value+=h.size;for(let Z=0;Z<h.blockHeight;Z++){const Q=L*h.blockHeight,J=Z+h.scanOrder(Q);if(J>=h.height)continue;const re=Z*O,xe=(h.height-1-J)*h.outLineWidth;for(let me=0;me<h.inputChannels.length;me++){const Ae=li.channels[me].name,Me=h.channelByteOffsets[Ae]*h.columns,we=h.decodeChannels[Ae];if(we!==void 0){T.value=re+Me;for(let ve=0;ve<h.columns;ve++){const rt=xe+ve*h.outputChannels+we;h.byteArray[rt]=h.getter(ne,T)}}}}}}function qt(h,y,T){const L={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=h.getUint8(4);const I=h.getUint8(5);L.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},T.value=8;let O=!0;for(;O;){const Y=_e(y,T);if(Y==0)O=!1;else{const ne=_e(y,T),Z=Ee(h,T),Q=So(h,y,T,ne,Z);Q===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):L[Y]=Q}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function qi(h,y,T,L,I){const O={size:0,viewer:y,array:T,offset:L,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xi};switch(h.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=B;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=$;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ae;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ae;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ie;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Re;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=de;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=de;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const Y={};for(const J of h.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":Y[J.name]=!0,O.type=J.pixelType}let ne=!1;if(Y.R&&Y.G&&Y.B)ne=!Y.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(Y.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(I){case kn:O.getter=fe;break;case Vi:O.getter=te;break}else if(O.type==2)switch(I){case kn:O.getter=Qe;break;case Vi:O.getter=X}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+h.compression+".");O.columns=O.width;const Z=O.width*O.height*O.outputChannels;switch(I){case kn:O.byteArray=new Float32Array(Z),ne&&O.byteArray.fill(1,0,Z);break;case Vi:O.byteArray=new Uint16Array(Z),ne&&O.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let Q=0;for(const J of h.channels)O.decodeChannels[J.name]!==void 0&&(O.channelByteOffsets[J.name]=Q),Q+=J.pixelType*2;if(O.totalBytes=Q,O.outLineWidth=O.width*O.outputChannels,h.lineOrder==="INCREASING_Y"?O.scanOrder=J=>J:O.scanOrder=J=>O.height-1-J,O.outputChannels==4?(O.format=pn,O.colorSpace=Xi):(O.format=Yu,O.colorSpace=Qt),h.spec.singleTile){O.blockHeight=h.tiles.ySize,O.blockWidth=h.tiles.xSize;const J=Hr(h.tiles,O.width,O.height),re=ai(J,O.width,h.tiles.xSize,h.tiles.roundingMode),xe=ai(J,O.height,h.tiles.ySize,h.tiles.roundingMode);O.tileCount=re[0]*xe[0];for(let me=0;me<J;me++)for(let Ae=0;Ae<xe[me];Ae++)for(let Me=0;Me<re[me];Me++)Xe(y,L);O.decode=vi.bind(O)}else{O.blockWidth=O.width;const J=Math.ceil(O.height/O.blockHeight);for(let re=0;re<J;re++)Xe(y,L);O.decode=Li.bind(O)}return O}const pr={value:0},mr=new DataView(e),Ii=new Uint8Array(e),li=qt(mr,e,pr),xi=qi(li,mr,Ii,pr,this.type);return xi.decode(),{header:li,width:xi.width,height:xi.height,data:xi.byteArray,format:xi.format,colorSpace:xi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function o(s,a){s.colorSpace=a.colorSpace,s.minFilter=pt,s.magFilter=pt,s.generateMipmaps=!1,s.flipY=!1,t&&t(s,a)}return super.load(e,o,n,r)}}async function xn(i){const t=await(await fetch(i)).arrayBuffer(),n=new Uint32Array(t,0,1)[0],r=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t,4,n))),o=r.vertexCount,s=r.indexCount;let a=4+n;const l=new dr,c=r.attributes;for(let u=0,d=c.length;u<d;u++){const f=c[u],m=f.id,v=m==="indices"?s:o,g=f.componentSize,_=globalThis[f.storageType],p=new _(t,a,v*g),w=_.BYTES_PER_ELEMENT;let S;if(f.needsPack){const x=f.packedComponents,C=x.length,R=f.storageType.indexOf("Int")===0,A=1<<w*8,P=R?A*.5:0,b=1/A;S=new Float32Array(v*g);for(let M=0,D=0;M<v;M++)for(let N=0;N<C;N++){const F=x[N];S[D]=(p[D]+P)*b*F.delta+F.from,D++}}else S=p;if(m==="indices"){let x=S;S instanceof Uint8Array&&(x=new Uint16Array(S.length),x.set(S)),l.setIndex(new Gt(x,1))}else l.setAttribute(m,new Gt(S,g));a+=v*g*w}return l.computeBoundingSphere(),l}const Na=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],mc={density:1,friction:2,restitution:.8},xS=40,uo=8,yS=`
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
`,SS=`
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
uniform vec4 u_nearPositionRadiusList[${uo}];
uniform vec3 u_nearColorList[${uo}];

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

  for (int i = 0; i < ${uo}; i++) {
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
  gi /= float(${uo});

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
`,MS=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,wS=`
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
`;function bS(i){const e={...mc},t={...mc},n={...mc};return[{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!0,isColored:!0,radius:1,...e},{color:i,isRough:!1,isColored:!0,radius:1,...t},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...e},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...t},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...n},{color:"#111111",isRough:!1,isColored:!1,radius:1,...t}]}function TS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function Of(i,e,t,n,r){const o=Math.max(0,Math.min(1,(i-e)/(t-e||1)));return n+(r-n)*o}class ES{constructor(e,t,n,r,o,s=!1){this.position=new q((o()-.5)*12,(o()-.5)*12,s?7+o():(o()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new Un().setFromEuler(new si(o()*Math.PI,o()*Math.PI,o()*Math.PI)),this.radius=1.05*e,this.density=t,this.friction=n,this.restitution=r,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new q,this.gravityAcc=new q}applyImpulse(){this.velocity.add(new q((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(e){this.gravityForce.copy(this.position).negate().multiplyScalar(xS),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,e),this.frictionTot*=.5}update(e){this.position.addScaledVector(this.velocity,e),this.velocity.multiplyScalar(Math.pow(.2,e))}}async function AS(i,e){const t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let n=Math.floor(Math.random()*Na.length),r=Na[n];const o=new gs,s=new zn(25,1,.1,100);s.position.set(0,0,25);const a=new wl({canvas:i,antialias:!t,alpha:!1,powerPreference:"high-performance"});a.setClearColor(1316117,1),a.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:1.5)),a.outputColorSpace=Xi,a.toneMapping=Gi;let l=!0;const c="/zyrax-studio/",u=`${c}assets/models/home/${t?"cross_ld":"cross"}.buf`,d=`${c}assets/textures/home/${t?"matcap_ld":"matcap"}.exr`,[f,m]=await Promise.all([xn(u),new Promise((z,ke)=>{new vS().load(d,z,void 0,ke)})]);m.minFilter=pt,m.magFilter=pt,m.generateMipmaps=!1,m.colorSpace=Qt;const v=new q(10,10,5),g=bS(r),_=TS("balloonBody-25"),p=[],w=[],S=[],x=[],C=Array.from({length:uo},()=>new Ut(0,0,-999,.01)),R=Array.from({length:uo},()=>new Ze(1118481)),A=z=>new At({uniforms:{u_matcap:{value:m},u_color:{value:new Ze(z.color)},u_bgColor:{value:new Ze(1316117)},u_roughness:{value:z.isRough?.8:.1},u_lightPosition:{value:v},u_selfPositionRadius:{value:new Ut(0,0,0,1)},u_selfRotation:{value:new Ut(0,0,0,1)},u_nearPositionRadiusList:{value:C.map(ke=>ke.clone())},u_nearColorList:{value:R.map(ke=>ke.clone())}},vertexShader:yS,fragmentShader:SS});for(const z of g){const ke=A(z),We=new It(f,ke);We.frustumCulled=!1,We.scale.setScalar(z.radius),o.add(We),w.push(We),S.push(ke),p.push(new ES(z.radius,z.density,z.friction,z.restitution,_,!1)),x.push({i:w.length-1,d2:0})}const P=new At({uniforms:{u_color0:{value:new Ze(r)},u_color1:{value:new Ze(1316117)},u_aspect:{value:1}},vertexShader:MS,fragmentShader:wS,depthWrite:!1}),b=new It(new Di(90,60),P);b.position.z=-12,b.renderOrder=-1e3,o.add(b);const M=new nt(0,0),D=new q,N=new q,F=new q,V=new q,W=new q,G=new q,k=new q,H=new q,le=new q,K=new q,ye=new Un,Se=.025,Le=.1,j=.12,oe=z=>{const ke=(e||i).getBoundingClientRect();M.x=(z.clientX-ke.left)/ke.width*2-1,M.y=-((z.clientY-ke.top)/ke.height*2-1)};window.addEventListener("pointermove",oe);const ce=()=>{n=(n+1)%Na.length,r=Na[n],w.forEach((z,ke)=>{const We=g[ke];We.isColored&&(z.material.uniforms.u_color.value.set(r),We.color=r)}),P.uniforms.u_color0.value.set(r),p.forEach(z=>z.applyImpulse())},se=()=>ce();i.addEventListener("click",se),e==null||e.addEventListener("click",se);const Te=()=>{const z=e||i.parentElement,ke=z.clientWidth,We=z.clientHeight,je=ke/Math.max(We,1);s.fov=Of(je,2.2,2/3,18,30),s.aspect=je,s.updateProjectionMatrix(),a.setSize(ke,We,!1),P.uniforms.u_aspect.value=je};Te(),window.addEventListener("resize",Te);let Oe=0,Pe=performance.now();const Ge=performance.now(),Be=()=>{const ke=(e||i).getBoundingClientRect();l=ke.bottom>0&&ke.top<window.innerHeight};window.addEventListener("scroll",Be,{passive:!0}),Be();const tt=z=>{if(Oe=requestAnimationFrame(tt),!l){Pe=z;return}let ke=Math.min(.05,(z-Pe)/1e3);Pe=z;const We=t?1:2;ke/=We;const je=(z-Ge)/1e3,Ue=Of(je,.3,2,25,17.5);s.position.z=Ue;for(let qe=0;qe<We;qe++){const ze=new q(M.x,M.y,.5).unproject(s);ze.sub(s.position).normalize();const U=(0-s.position.z)/ze.z;D.copy(s.position).addScaledVector(ze,U),F.copy(D).sub(N).multiplyScalar(j/Math.max(ke,.001)),V.copy(D).sub(s.position);const E=V.lengthSq()||1;N.copy(D);for(let B=0;B<p.length;B++){const $=p[B];$.updateGravity(ke),G.copy($.velocity),k.copy($.position);for(let de=B+1;de<p.length;de++){const _e=p[de];le.copy(_e.velocity),K.copy(_e.position),W.copy(k).sub(K);const Ke=W.length(),he=$.radius+_e.radius;if(Ke<he&&Ke>1e-6){const ue=Math.sqrt($.friction*_e.friction);$.frictionTot+=ue,_e.frictionTot+=ue,W.normalize(),W.multiplyScalar(.5*(Ke-he)),k.sub(W),K.add(W),W.normalize();const ge=G.dot(W),Ee=le.dot(W),De=$.mass,Je=_e.mass,Xe=(De*ge+Je*Ee-Je*(ge-Ee)*$.restitution)/(De+Je),Qe=(De*ge+Je*Ee-De*(Ee-ge)*_e.restitution)/(De+Je);G.addScaledVector(W,(Xe-ge)/(1+ue)),le.addScaledVector(W,(Qe-Ee)/(1+ue)),_e.position.copy(K),_e.velocity.copy(le)}}H.copy(k).sub(s.position);let ae=H.dot(V)/E;ae=H.sub(le.copy(V).multiplyScalar(ae)).length()-$.radius-Se,ae<0&&(H.copy(k).sub(s.position).cross(V).normalize(),le.copy(V).cross(H).normalize(),k.sub(le.multiplyScalar(Le*ae)),le.multiplyScalar(-j/Math.max(ke,.001)),G.add(le),G.add(F));let ie=k.length();if(ie>0){H.set(1,1,1).normalize();let de=1-Math.abs(H.dot(le.copy(k).normalize()));de*=ke*Math.min(1,Math.max(0,ie/2))*.5,de*=B%2*2-1,ye.setFromAxisAngle(H,de),le.copy(k).applyQuaternion(ye).sub(H.copy(k)),G.add(le)}H.crossVectors(k,G);let Re=H.length();Re/=$.inertia,Re>0&&(H.normalize(),ye.setFromAxisAngle(H,Re*ke),$.quaternion.premultiply(ye)),$.position.copy(k),$.velocity.copy(G),$.update(ke),["x","y","z"].forEach(de=>{const _e=de==="z"?5.5:7.5;$.position[de]>_e&&($.position[de]=_e,$.velocity[de]*=-.55),$.position[de]<-_e&&($.position[de]=-_e,$.velocity[de]*=-.55)})}}for(let qe=0;qe<w.length;qe++){const ze=w[qe],U=p[qe];ze.position.copy(U.position),ze.quaternion.copy(U.quaternion);const E=S[qe].uniforms;E.u_selfPositionRadius.value.set(U.position.x,U.position.y,U.position.z,U.radius),E.u_selfRotation.value.set(U.quaternion.x,U.quaternion.y,U.quaternion.z,U.quaternion.w),E.u_bgColor.value.copy(P.uniforms.u_color1.value)}for(let qe=0;qe<w.length;qe++){for(let E=0;E<w.length;E++)x[E].i=E,x[E].d2=qe===E?0:p[qe].position.distanceToSquared(p[E].position);x.sort((E,B)=>E.d2-B.d2);const ze=S[qe].uniforms.u_nearPositionRadiusList.value,U=S[qe].uniforms.u_nearColorList.value;for(let E=0;E<uo;E++){const B=x[E+1]?x[E+1].i:x[0].i,$=p[B];ze[E].set($.position.x,$.position.y,$.position.z,$.radius),U[E].copy(S[B].uniforms.u_color.value)}}s.position.x+=(M.x*.9-s.position.x)*.04,s.position.y+=(M.y*.55-s.position.y)*.04,s.lookAt(0,0,0),a.render(o,s)};return Oe=requestAnimationFrame(tt),{cycleColor:ce,destroy(){cancelAnimationFrame(Oe),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",Te),window.removeEventListener("scroll",Be),i.removeEventListener("click",se),e==null||e.removeEventListener("click",se),S.forEach(z=>z.dispose()),P.dispose(),a.dispose()}}}function tn(i,e=0,t=1){return Math.max(e,Math.min(t,i))}function Qn(i){return tn(i,0,1)}function Wp(i,e,t){return(t-i)/(e-i||1)}function so(i,e,t){return tn(Wp(i,e,t),0,1)}function pe(i,e,t,n,r,o){let s=so(e,t,i);return o&&(s=o(s)),n+s*(r-n)}function zf(i,e,t,n,r,o){let s=Wp(e,t,i);return n+s*(r-n)}function RS(i,e,t,n,r){if(i<=0)return 0;if(i>=1)return 1;const o=(g,_,p,w)=>1/(3*_*g*g+2*p*g+w),s=(g,_,p,w,S)=>_*(g*g*g)+p*(g*g)+w*g+S,a=(g,_,p,w,S)=>{const x=g*g;return _*(x*g)+p*x+w*g+S},l=1-3*n+3*e,c=3*n-6*e,u=3*e,d=1-3*r+3*t,f=3*r-6*t,m=3*t;let v=i;for(let g=0;g<100;g++){const _=s(v,l,c,u,0);let p=o(v,l,c,u);p===1/0&&(p=i),v-=(_-i)*p,v=Math.min(Math.max(v,0),1)}return a(v,d,f,m,0)}function dt(i){return RS(i,.35,0,0,1)}function dl(i){return i===1?1:1-Math.pow(2,-10*i)}function CS(i){return i===0?0:Math.pow(1024,i-1)}function PS(i){return i===0?0:i===1?1:(i*=2,i<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2))}function DS(i){return 1-Math.cos(i*Math.PI/2)}function Su(i){return Math.sin(i*Math.PI/2)}function LS(i){return-(Math.cos(Math.PI*i)-1)/2}function IS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Mu(i){return i*i*i}function Xp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function yn(i){if(!i)return{top:0,bottom:0,height:0,ratio:1,screenRatio:1,showScreenOffset:0,hideScreenOffset:0,isActive:!1};const e=i.getBoundingClientRect(),t=window.innerHeight||1,n=e.top,r=e.height,o=e.bottom;let s=Math.min(0,zf(n,t,t-r,-1,0));s+=Math.max(0,zf(n,0,-r,0,1));const a=pe(n,t,-r,-1,1),l=-(n-t)/t,c=-(n+r)/t,u=s>=-1&&s<=1;return{top:n,bottom:o,height:r,width:e.width,ratio:s,screenRatio:a,showScreenOffset:l,hideScreenOffset:c,isActive:u}}function US(i){return 1-Math.pow(1-i,3)}function FS(i){return i*i*i*i}function NS(i){const t=2.5949095;return i<.5?Math.pow(2*i,2)*((t+1)*2*i-t)/2:(Math.pow(2*i-2,2)*((t+1)*(i*2-2)+t)+2)/2}function Ti(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}const Bf=[{id:"blackFrameShow",isPixelBased:!0},{id:"blackFrameIn",weight:1},{id:"blackTitle",weight:5},{id:"blackTunnel",weight:12},{id:"whiteTunnel",weight:2},{id:"whiteFrameOut",weight:1},{id:"whiteFrameBreak",weight:1.5},{id:"astronautDrop",isPixelBased:!0},{id:"astronautWait",isPixelBased:!0}];function Oa(i){if(!i)return{top:0,bottom:0,height:0,left:0,width:0};const e=i.getBoundingClientRect(),t=e.top+window.scrollY;return{top:t,bottom:t+e.height,height:e.height,left:e.left+window.scrollX,width:e.width}}function kf(i,e){var o,s,a,l;if(!i)return 0;const t=i.getBoundingClientRect().height;if(t>8)return t;const n=((o=i.querySelector)==null?void 0:o.call(i,'[id$="-inner"]'))||((a=(s=i.parentElement)==null?void 0:s.querySelector)==null?void 0:a.call(s,'[id$="-inner"]'))||i,r=((l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n).width)||i.getBoundingClientRect().width||window.innerWidth*.45;return Math.max(8,r*e)}function nh(i){const e={};let t=0;for(const f of Bf)e[f.id]={...f,pixelFrom:0,pixelTo:0,pixelCount:0},f.weight&&(t+=f.weight);let n=0,r=1,o=-1;function s(){if(!i)return;const f=window.innerHeight||1,m=Oa(i),v=i.querySelector("#home-goal-image-in")||i.querySelector("#home-goal-image-in-inner"),g=i.querySelector("#home-goal-image-out")||i.querySelector("#home-goal-image-out-inner"),_=Oa(v),p=Oa(g),w=Math.max(_.height,kf(v,1080/1496)),S=Math.max(p.height,kf(g,1537/2e3));n=(_.top||m.top)-f;const x=(f+w)*.5,C=(f+S)*.5+f,R=document.querySelector("footer")||document.getElementById("home-footer")||document.getElementById("site-footer"),A=R?Oa(R).bottom:document.documentElement.scrollHeight,P=Math.max(f*.5,A-m.bottom),b=Math.max(f*8,m.bottom-n-x-C);e.blackFrameShow.pixelCount=x,e.astronautDrop.pixelCount=C,e.astronautWait.pixelCount=P,r=0;for(const M of Bf){const D=e[M.id];D.pixelFrom=r,D.weight&&(D.pixelCount=b*D.weight/t),D.id==="blackFrameIn"&&(D.pixelCount=Math.min(D.pixelCount,f*1.15)),r+=D.pixelCount,D.pixelTo=r}}function a(){const f=(window.innerHeight|0)*1e6+((i==null?void 0:i.offsetHeight)|0)%1e6;f!==o&&(o=f,s())}function l(){return window.scrollY||window.pageYOffset||0}function c(){return a(),l()-n}function u(f,m=f){a();const v=e[f],g=e[m],_=v.pixelFrom,p=g.pixelTo,w=Math.max(p-_,1e-6),S=c()-_,x=S/w;return{ratio:Math.max(0,Math.min(1,x)),raw:x,active:x>=0&&x<1,global:c()/Math.max(r,1),pixel:S,pixelCount:w}}function d(f,m){return u(f,m)}return typeof window<"u"&&(s(),window.addEventListener("resize",()=>{o=-1,s()})),{items:e,progress:()=>(a(),Math.max(0,Math.min(1,c()/Math.max(r,1)))),range:u,between:d,totalWeight:t,rebuild:s}}const OS=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
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
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,zS=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,BS="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",kS="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",qp=`
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
`,Yp=`
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
`,HS=`
${qp}
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
${Yp}
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
`,VS=`
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
`,Hf=`
${qp}
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
${Yp}
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
`,er=5,za=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,GS=`
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
`,WS=`
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
`,XS=`
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
`,qS=`
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
`;function ko(i,e,t=!1,n=0){const r={minFilter:pt,magFilter:pt,format:pn,type:n>0?Pi:Vi,depthBuffer:t,stencilBuffer:!1,samples:n},o=new fr(i,e,r);return t&&n===0&&(o.depthTexture=new hl(i,e),o.depthTexture.type=go),t&&n>0&&(o.depthTexture=new hl(i,e),o.depthTexture.type=go),o}function YS(i,e,t,{isMobile:n=!1}={}){const r=new nt(1,1);i.getSize(r);let o=!!n,s=ko(1,1,!0,4),a=ko(1,1,!1),l=ko(1,1,!1),c=ko(1,1,!1),u=null;const d=[],f=[];for(let B=0;B<er;B++)d.push(ko(1,1)),f.push(ko(1,1));const m=new eh(-1,1,1,-1,0,1),v=new It(new Di(2,2),new Qu),g=new gs;g.add(v);const _=new At({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new nt(1,1)},u_aspect:{value:new nt(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:za,fragmentShader:GS,depthTest:!1,depthWrite:!1,toneMapped:!1}),p=[];for(let B=0;B<er;B++){const $=3+B*2;p.push(new At({uniforms:{u_texture:{value:null},u_resolution:{value:new nt(1,1)},u_direction:{value:new nt(1,0)}},defines:{KERNEL_RADIUS:$,SIGMA:$},vertexShader:za,fragmentShader:WS,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const w=new Float32Array(er),S=new At({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:w}},vertexShader:za,fragmentShader:XS,depthTest:!1,depthWrite:!1,toneMapped:!1});let x=0;const C=new At({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new nt(1,1)},u_amount:{value:1}},vertexShader:za,fragmentShader:qS,depthTest:!1,depthWrite:!1,toneMapped:!1}),R=new vt,A=new vt,P=new vt,b=new vt,M=new vt,D=new q,N=new si,F=new q(1,1,1),V=new Un;let W=!0,G=1,k=!1,H=0,le=0,K=1,ye=1,Se=0,Le=.015,j=.6,oe=.3,ce=.5,se=0,Te=new Ze(0),Oe=!0,Pe=1,Ge=1,Be=1;const tt=new nt(1,0),z=new nt(0,1),ke=(B,$)=>{v.material=B,i.setRenderTarget($),i.clear(),i.render(g,m)},We=B=>{const $=Math.max(1,B);return 1<<Math.ceil(Math.log($)/Math.log(2))},je=(B,$)=>{Pe=Math.max(1,Math.floor(B)),Ge=Math.max(1,Math.floor($));const ae=1;s.setSize(Math.max(1,Math.floor(Pe*ae)),Math.max(1,Math.floor(Ge*ae))),a.setSize(s.width,s.height),l.setSize(s.width,s.height);const ie=o?3:2;let Re=Math.max(1,Math.ceil(Pe/ie)),de=Math.max(1,Math.ceil(Ge/ie));c.setSize(Re,de);for(let Ke=0;Ke<er;Ke++)d[Ke].setSize(Re,de),f[Ke].setSize(Re,de),Re=Math.max(1,Math.ceil(Re/2)),de=Math.max(1,Math.ceil(de/2));_.uniforms.u_texelSize.value.set(1/Pe,1/Ge);const _e=Ge/Math.sqrt(Pe*Pe+Ge*Ge)*2;_.uniforms.u_aspect.value.set(Pe/Ge*_e,_e),C.uniforms.u_aspect.value.set(Pe/Math.max(Ge,1),1)},Ue=({blackFrameInRatio:B=0,blackTitleRatio:$=0,blackTunnelRatio:ae=0,whiteFrameRatio:ie=0,whiteTunnelWaitRatio:Re=0,astronautDropRatio:de=0,isWhiteTunnelActive:_e=!1,isBlackTunnelActive:Ke=!1,isMobile:he=!1}={})=>{o=!!he;let ue=B*(Vt.lerp(0,.15,$)+Vt.clamp((ae-.2)/.2,0,1)*.25);if(ae>=.65){const Ee=Vt.clamp((ae-.65)/.1,0,1);ue=ue+(.08-ue)*Ee}if(_e&&(ue=0),!_e&&B>.55&&ae<.25){const Ee=Vt.lerp(he?.24:.42,he?.12:.18,Vt.clamp($/.5,0,1));ue=Math.max(ue,Ee*Math.min(1,B))}if(Se=ue,K=ae<1?Vt.lerp(1,3,Vt.clamp(ae/.7,0,1)):1,_e){const Ee=he?12:20;H=de<1?Vt.lerp(4,2,Vt.clamp(ie/.05,0,1)):Vt.lerp(0,Ee,Vt.clamp(Re/.1,0,1)),le=he?.45:.62,ye=he?1.2:1.35,Be=he?1.15:1.35,se=Vt.lerp(.38,0,Vt.clamp(Re/.1,0,1)),Te.set("#ffffff")}else{Be=1;const Ee=Vt.clamp($/.25,0,1);H=Vt.lerp(he?22:30,he?5:6,Ee),se=0,Te.set("#000000")}const ge=!_e&&B>.55&&ae<.2;j=ge?.85:.6,Le=ge?.04:he?.012:.02,oe=ge?.15:.3,ce=ge?.75:.5,_e||(le=he?.15:ge?.55:.5,ye=ge?1.15:1),k=Ke||_e},qe=(B,$=0)=>{D.set(0,0,B),N.set(0,0,$)},ze=()=>{W=!0},U=(B,$)=>{const ae=i.autoClear;i.autoClear=!0,ke(B,$),i.autoClear=ae},E=()=>{if(!Oe){i.setRenderTarget(null),i.render(e,t);return}const B=i.getRenderTarget(),$=i.autoClear;i.setRenderTarget(s),i.autoClear=!0,i.setClearColor(Te,se),i.clear();const ae=e.background;e.background=null;const ie=u==null?void 0:u.mesh,Re=!!(ie!=null&&ie.visible);if(Re&&(ie.visible=!1),i.render(e,t),e.background=ae,u!=null&&u.active&&u.overlayScene){for(let ge=0;ge<er;ge++)w[ge]=0,S.uniforms[`u_blurTexture${ge}`].value=s.texture;S.uniforms.u_texture.value=s.texture,S.uniforms.u_saturation.value=1;const ue=S.uniforms.u_scrollPaint.value;S.uniforms.u_scrollPaint.value=0,ke(S,a),S.uniforms.u_scrollPaint.value=ue,u.setBackground(a.texture,a.width,a.height),u.syncToCamera(t,Ge),ie&&(ie.visible=!0),i.setRenderTarget(s),i.autoClear=!1,i.clearDepth(),i.render(u.overlayScene,t),i.autoClear=!0}else Re&&ie&&(ie.visible=!1);let de=s.texture;if(R.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),P.copy(R).invert(),k&&G>0?(W&&(A.copy(R),W=!1),M.compose(D,V.setFromEuler(N),F),M.invert(),b.copy(A).multiply(M),C.uniforms.u_texture.value=s.texture,C.uniforms.u_depthTexture.value=s.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(P),C.uniforms.u_prevProjectionViewMatrix.value.copy(b),C.uniforms.u_amount.value=G,U(C,l),de=l.texture,A.copy(R)):(A.copy(R),W=!0),H<.05&&Se<.005){S.uniforms.u_texture.value=de;for(let ue=0;ue<er;ue++)w[ue]=0,S.uniforms[`u_blurTexture${ue}`].value=de;S.uniforms.u_saturation.value=1,i.setRenderTarget(null),ke(S,null),i.autoClear=$,i.setRenderTarget(B);return}_.uniforms.u_texture.value=de,_.uniforms.u_amount.value=ye,_.uniforms.u_haloStrength.value=Se,_.uniforms.u_haloWidth.value=j,_.uniforms.u_haloRGBShift.value=Le,_.uniforms.u_haloMaskInner.value=oe,_.uniforms.u_haloMaskOuter.value=ce,U(_,c);const _e=o?3:er;let Ke=c;for(let ue=0;ue<_e;ue++){const ge=p[ue];ge.uniforms.u_texture.value=Ke.texture,ge.uniforms.u_resolution.value.set(Ke.width,Ke.height),ge.uniforms.u_direction.value=tt,U(ge,d[ue]),ge.uniforms.u_texture.value=d[ue].texture,ge.uniforms.u_resolution.value.set(d[ue].width,d[ue].height),ge.uniforms.u_direction.value=z,U(ge,f[ue]),Ke=f[ue]}let he=H;if(o)he*=Be;else{const ue=We(Pe/2)>>1,ge=We(Ge/2)>>1,Ee=Math.max(1,Math.ceil(Math.log(ue*ge)/Math.log(2)));he=H*1024/Math.pow(Ee,4)*.85*48*Be}for(let ue=0;ue<er;ue++){if(ue>=_e){w[ue]=0;continue}const ge=(_e-ue)/_e;let Ee=he*(ge+(1.2-ge*2)*le)/Math.pow(2,_e-ue-1);!o&&ue===0&&(Ee*=.15),!o&&ue===1&&(Ee*=.45),!o&&ue>=3&&(Ee*=1.75),w[ue]=Ee}S.uniforms.u_texture.value=de,S.uniforms.u_saturation.value=K;for(let ue=0;ue<er;ue++){const ge=ue<_e?f[ue].texture:f[_e-1].texture;S.uniforms[`u_blurTexture${ue}`].value=ge}i.setRenderTarget(null),ke(S,null),i.autoClear=$,i.setRenderTarget(B)};return je(r.x,r.y),{resize:je,sync:Ue,render:E,setEfxOffset:qe,markEfxSync:ze,setGlassPass(B){u=B||null},setEfxAmount(B){G=B},get clearAlpha(){return se},setEnabled(B){Oe=!!B},setScrollVelocity(B){const $=Math.min(1,Math.abs(B)*.12);x+=($-x)*.12,S.uniforms.u_scrollPaint.value=x},destroy(){s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.forEach(B=>B.dispose()),f.forEach(B=>B.dispose()),_.dispose(),S.dispose(),C.dispose(),p.forEach(B=>B.dispose()),v.geometry.dispose()}}}function $S(i,e,t){return i+(e-i)*t}const Rr=class Rr{constructor(){this._scale=1,this._amplitude=1,this._r=[];for(let e=0;e<Rr.MAX_VERTICES;e++)this._r.push(Math.random()-.5)}getVal(e){const t=e*this._scale,n=Math.floor(t),r=t-n,o=r*r*(3-2*r),s=n&Rr.MAX_VERTICES_MASK,a=s+1&Rr.MAX_VERTICES_MASK;return $S(this._r[s],this._r[a],o)*this._amplitude}getFbm(e,t){let n=0,r=.5;for(let o=0;o<t;o++)n+=r*this.getVal(e),e*=2,r*=.5;return n}};Ve(Rr,"MAX_VERTICES",512),Ve(Rr,"MAX_VERTICES_MASK",Rr.MAX_VERTICES-1);let pl=Rr;const Oi=new q,Ws=class Ws{constructor(){this._position=new q,this._rotation=new Un,this._euler=new si,this._scale=new q(1,1,1),this._matrix=new vt,this._enablePositionNoise=!0,this._enableRotationNoise=!0,this._positionFrequency=.25,this._rotationFrequency=.25,this._positionAmplitude=.3,this._rotationAmplitude=.003,this._positionScale=new q(1,1,1),this._rotationScale=new q(1,1,0),this._positionFractalLevel=3,this._rotationFractalLevel=3,this._times=new Float32Array(6),this._noise=new pl,this.rehash()}rehash(){for(let e=0;e<6;e++)this._times[e]=Math.random()*-1e4}update(e){const t=e===void 0?.016666666666666666:e;if(this._enablePositionNoise){for(let n=0;n<3;n++)this._times[n]+=this._positionFrequency*t;Oi.set(this._noise.getFbm(this._times[0],this._positionFractalLevel),this._noise.getFbm(this._times[1],this._positionFractalLevel),this._noise.getFbm(this._times[2],this._positionFractalLevel)),Oi.multiply(this._positionScale),Oi.multiplyScalar(this._positionAmplitude*Ws.FBM_NORM),this._position.copy(Oi)}if(this._enableRotationNoise){for(let n=0;n<3;n++)this._times[n+3]+=this._rotationFrequency*t;Oi.set(this._noise.getFbm(this._times[3],this._rotationFractalLevel),this._noise.getFbm(this._times[4],this._rotationFractalLevel),this._noise.getFbm(this._times[5],this._rotationFractalLevel)),Oi.multiply(this._rotationScale),Oi.multiplyScalar(this._rotationAmplitude*Ws.FBM_NORM),this._euler.set(Oi.x,Oi.y,Oi.z),this._rotation.setFromEuler(this._euler)}this._matrix.compose(this._position,this._rotation,this._scale)}get positionAmplitude(){return this._positionAmplitude}set positionAmplitude(e){this._positionAmplitude=e}get positionFrequency(){return this._positionFrequency}set positionFrequency(e){this._positionFrequency=e}get rotationAmplitude(){return this._rotationAmplitude}set rotationAmplitude(e){this._rotationAmplitude=e}get rotationFrequency(){return this._rotationFrequency}set rotationFrequency(e){this._rotationFrequency=e}get matrix(){return this._matrix}get euler(){return this._euler}get position(){return this._position}};Ve(Ws,"FBM_NORM",1/.75);let Vs=Ws;class wu{constructor(e,t=1.5,n=.8,r=2,o=!0){this.isRobust=o,this.setFZR(t,n,r),this.target=e.clone(),this.target0=e.clone(),this.prevTarget=e.clone(),this.value=e.clone(),this.valueVel=e.clone().setScalar(0),this._targetVelCache=this.valueVel.clone(),this._cache1=this.valueVel.clone(),this._cache2=this.valueVel.clone()}setFZR(e=this._f,t=this._z,n=this._r){this._f=e,this._z=t,this._r=n;const r=Math.PI*2*e;this.isRobust&&(this._w=r,this._d=this._w*Math.sqrt(Math.abs(this._z*this._z-1))),this.k1=t/(Math.PI*e),this.k2=1/(r*r),this.k3=n*t/r}_computeRobustStableCoefficients(e){if(this._w*e<this._z)this._k1Stable=this.k1,this._k2Stable=Math.max(this.k2,e*e/2+e*this.k1/2,e*this.k1);else{const t=Math.exp(-this._z*this._w*e),n=2*t*(this._z<=1?Math.cos(e*this._d):Math.cosh(e*this._d)),r=t*t,o=e/(1+r-n);this._k1Stable=(1-r)*o,this._k2Stable=e*o}}update(e,t=this.target){return e<=0?this.value:(this._targetVelCache.copy(t).sub(this.prevTarget).divideScalar(e),this.prevTarget.copy(t),this._computeRobustStableCoefficients(e),this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),this._cache1.copy(t).add(this._targetVelCache.multiplyScalar(this.k3)).sub(this.value).sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable)).multiplyScalar(e/this._k2Stable),this.valueVel.add(this._cache1),this.value)}reset(e=this.target0){this.valueVel.setScalar(0),this.prevTarget.copy(e),this.target.copy(e),this.value.copy(e)}}const Vf=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],ZS=26,to=64,KS=34,As=new nt(1465,1024),jS=`
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
`,JS=`
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
`,QS=`
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
`,eM=`
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
`,Ba=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function tM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}async function nM(i,{base:e,isMobile:t,sharedTime:n}){const r="stickers.png",o=t?KS:ZS,[s,a]=await Promise.all([new ir().loadAsync(`${e}assets/textures/tunnels/${r}`),xn(`${e}assets/models/tunnels/diamond.buf`)]);s.colorSpace=Pn,s.flipY=!1,s.needsUpdate=!0;const l=new gi;i.add(l);const c=new Di(1,1),u=new lo;for(const M in c.attributes)u.setAttribute(M,c.attributes[M]);u.index=c.index;const d=new Float32Array(o),f=new Float32Array(o*4),m=new Float32Array(o*4);for(let M=0,D=0;M<o;M++,D+=4){d[M]=M/o;const N=Vf[M%Vf.length];f[D]=N.x/As.x,f[D+1]=N.y/As.y,f[D+2]=N.w/As.x,f[D+3]=N.h/As.y,m[D]=Math.random(),m[D+1]=Math.random(),m[D+2]=Math.random(),m[D+3]=Math.random()}u.setAttribute("instanceId",new Sn(d,1)),u.setAttribute("instanceUvInfo",new Sn(f,4)),u.setAttribute("instanceRands",new Sn(m,4)),u.instanceCount=o;const v=new At({vertexShader:jS,fragmentShader:JS,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:s},u_textureSize:{value:As.clone()},u_bgColor:{value:new Ze(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Qs,blendEquation:Ln,blendSrc:Ko,blendDst:jo,blendEquationAlpha:Ln,blendSrcAlpha:$a,blendDstAlpha:$a,defines:{COUNT:o}}),g=new It(u,v);g.frustumCulled=!1,g.visible=!1,l.add(g);const _=new lo;for(const M in a.attributes)_.setAttribute(M,a.attributes[M]);a.index&&(_.index=a.index);const p=tM("diamonds-3"),w=new Float32Array(to*3),S=new Float32Array(to*3),x=new Float32Array(to*4),C=new q;for(let M=0,D=0,N=0;M<to;M++,D+=3,N+=4)w[D]=16*(p()*2-1),w[D+1]=16*(p()*2-1),w[D+2]=19-(to-M-1)/(to-1)*8,C.set(p()*2-1,p()*2-1,p()*2-1).normalize(),S[D]=C.x,S[D+1]=C.y,S[D+2]=C.z,x[N]=p(),x[N+1]=p(),x[N+2]=p(),x[N+3]=p();_.setAttribute("a_instancePosition",new Sn(w,3)),_.setAttribute("a_instanceRotationAxis",new Sn(S,3)),_.setAttribute("a_instanceRand",new Sn(x,4)),_.instanceCount=to;const R=[];for(let M=0;M<25;M++)R.push(new Ut(Ba[M*4],Ba[M*4+1],Ba[M*4+2],Ba[M*4+3]));const A=new At({vertexShader:QS,fragmentShader:eM,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new Ze("#689aff")},u_planes:{value:R},u_bgColor:{value:new Ze(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Qs,blendEquation:Ln,blendSrc:fi,blendDst:$a,blendEquationAlpha:Ln,blendSrcAlpha:fi,blendDstAlpha:fi}),P=new It(_,A);P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,A.blending=Fr,A.blendSrc=Ko,A.blendDst=jo,A.blendSrcAlpha=Ko,A.blendDstAlpha=jo,l.add(P),g.renderOrder=15;const b=new Ze(0);return{update({whiteTunnelWaitRatio:M=0,aspect:D=1,bg:N="#000000"}={}){const F=pe(M,0,.12,0,1),V=F>0;l.visible=V,g.visible=V,P.visible=V,v.uniforms.u_activeRatio.value=F,A.uniforms.u_activeRatio.value=F,v.uniforms.u_aspect.value=D,A.uniforms.u_aspect.value=D,b.set(N),v.uniforms.u_bgColor.value.copy(b),A.uniforms.u_bgColor.value.copy(b)},dispose(){u.dispose(),c.dispose(),v.dispose(),s.dispose(),_.dispose(),A.dispose(),a.dispose(),i.remove(l)}}}const ka=946,Gf=2,iM=`
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
`,rM=`
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
`;function Wf(i,e,t){const n=new bl(i,e,t,pn,kn);return n.magFilter=nn,n.minFilter=nn,n.wrapS=In,n.wrapT=In,n.needsUpdate=!0,n.colorSpace=Qt,n}async function oM(i,{base:e}){const[t,n]=await Promise.all([xn(`${e}assets/models/tunnels/broken_glass.buf`),xn(`${e}assets/models/tunnels/broken_glass_animation.buf`)]),r=t.getAttribute("piece");if(r&&!(r.array instanceof Float32Array)){const N=new Float32Array(r.array.length);N.set(r.array),t.setAttribute("piece",new Gt(N,1))}const o=n.attributes.position.array,s=n.attributes.orient.array,a=o.length/(ka*3),l=new Float32Array(o.length/3*4);for(let N=0,F=0;N<o.length;N+=3,F+=4)l[F]=o[N],l[F+1]=o[N+1],l[F+2]=o[N+2],l[F+3]=0;const c=s instanceof Float32Array?s:new Float32Array(s),u=Wf(l,ka,a),d=Wf(c,ka,a),f={u_backgroundTexture:{value:null},u_resolution:{value:new nt(1,1)},u_positionTexture:{value:u},u_orientTexture:{value:d},u_textureSize:{value:new nt(ka,a)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},m=new At({uniforms:f,vertexShader:iM,fragmentShader:rM,transparent:!0,depthWrite:!1,depthTest:!0,side:bn,toneMapped:!1}),v=new It(t,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1e3,v.name="goal-broken-glass";const g=new gs,_=new gi;_.add(v),g.add(_);let p=0,w=1,S=1,x=0,C=1,R=!1;const A=new q(0,0,1),P=new Un;return{container:_,overlayScene:g,mesh:v,get ratio(){return p},get active(){return R},updateFromScroll:({whiteFrameBreakRatio:N=0,astronautDropRatio:F=0,frameHeight:V=0,frameRotation:W=0,frameScale:G=1}={})=>{p=pe(N,0,1,0,1,Su),w=pe(F,.75,1,1,0),S=Math.max(1,V||window.innerHeight),x=W||0,C=G||1,R=p>.001&&F<1,_.visible=R,R||(v.visible=!1)},syncToCamera:(N,F=window.innerHeight)=>{if(!R||!N)return v.visible=!1,!1;v.position.copy(N.position),v.quaternion.copy(N.quaternion),v.translateZ(-Gf);const V=Math.tan(N.fov*Math.PI/360)*Gf*2,W=S/Math.max(F,1)*V*C;P.setFromAxisAngle(A,-x),v.quaternion.multiply(P),v.scale.setScalar(Math.max(W,1e-4));const G=p*(a-1),k=Math.floor(G),H=Math.min(k+1,a-1);return f.u_frameFrom.value=k,f.u_frameTo.value=H,f.u_frameRatio.value=G-k,f.u_fragmentScale.value=w,v.visible=!0,!0},setBackground:(N,F,V)=>{f.u_backgroundTexture.value=N,f.u_resolution.value.set(F,V)},dispose(){t.dispose(),n.dispose(),m.dispose(),u.dispose(),d.dispose()}}}const Rs=53,Ha=16,Va=20,Xf=["helmet","helmet_glass","glove_shoes","wearpack"],Cs=["#0d2b27","#ba0000","#00b5a6","#0099ff"],_c=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function qf(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}async function Yf(i,e){const[t,n]=await Promise.all([qf(i),qf(e)]),r=t.width,o=t.height,s=document.createElement("canvas");s.width=r,s.height=o;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,r,o);const l=a.getImageData(0,0,r,o).data;a.clearRect(0,0,r,o),a.drawImage(t,0,0,r,o);const c=a.getImageData(0,0,r,o).data,u=new Uint8Array(r*o*4);for(let f=0;f<u.length;f+=4)u[f]=c[f],u[f+1]=c[f+1],u[f+2]=c[f+2],u[f+3]=l[f];const d=new bl(u,r,o,pn,Pi);return d.colorSpace=Qt,d.flipY=!1,d.generateMipmaps=!0,d.minFilter=Ri,d.magFilter=pt,d.anisotropy=8,d.wrapS=In,d.wrapT=In,d.needsUpdate=!0,d}function $f(i,e,t){const n=new bl(i,e,t,pn,kn);return n.magFilter=nn,n.minFilter=nn,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function gc(i){const e=i.array,t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return new Sn(t,3)}const Ga=`
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
`;async function sM(i,e,t){var hh,fh,dh,ph;const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,r="/zyrax-studio/",o=!n,[s,a,l,c,u,d,f,m,v,g,_,p,w,S,x,...C]=await Promise.all([xn(`${r}assets/models/tunnels/astronaut_animations.buf`),xn(`${r}assets/models/tunnels/astronaut_in_animation.buf`),xn(`${r}assets/models/tunnels/astronaut_out_animation.buf`),new ir().loadAsync(`${r}assets/textures/tunnels/white_matcap.jpg`),new ir().loadAsync(`${r}assets/textures/tunnels/earth.webp`),new ir().loadAsync(`${r}assets/textures/tunnels/white_block.webp`),xn(`${r}assets/models/tunnels/tunnel_block_base.buf`),xn(`${r}assets/models/tunnels/tunnel_block_wall.buf`),xn(`${r}assets/models/tunnels/grid_base_ld.buf`),xn(`${r}assets/models/tunnels/grid_structure_ld.buf`),o?xn(`${r}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),o?xn(`${r}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new ir().loadAsync(`${r}assets/textures/tunnels/grids/greeble_nor.webp`),xn(`${r}assets/models/tunnels/earth_card.buf`),new ir().loadAsync(`${r}assets/textures/tunnels/earth_landscape.jpg`),...Xf.map(be=>xn(`${r}assets/models/tunnels/astronaut_${be}.buf`))]),R=new gs;R.background=new Ze(0);const A=new q(0,0,25),P=new q(0,0,24),b=45,M=new zn(b,1,1,200);M.position.copy(A),M.lookAt(P);let D;try{D=new wl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(be){throw console.error("Goal WebGL unavailable",be),be}D.setClearColor(0,1),D.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),D.outputColorSpace=Xi,D.toneMapping=Gi,D.autoClear=!0,c.colorSpace=Qt,c.generateMipmaps=!1,c.minFilter=pt,c.magFilter=pt,u.colorSpace=Qt,u.generateMipmaps=!1,u.minFilter=pt,u.magFilter=pt,d.colorSpace=Qt,d.wrapS=d.wrapT=Jo,d.generateMipmaps=!1,d.minFilter=pt,d.magFilter=pt;const N=s.attributes.position.array,F=s.attributes.orient.array,V=N.length/3,W=V/Rs,G=Math.ceil(Math.sqrt(V)),k=Math.ceil(V/G),H=G*k,le=new Float32Array(H*4),K=new Float32Array(H*4);for(let be=0,He=0,Ce=0;be<V;be++,He+=3,Ce+=4)le[Ce]=N[He],le[Ce+1]=N[He+1],le[Ce+2]=N[He+2],le[Ce+3]=1,K[Ce]=F[Ce],K[Ce+1]=F[Ce+1],K[Ce+2]=F[Ce+2],K[Ce+3]=F[Ce+3];const ye=$f(le,G,k),Se=$f(K,G,k),Le=new Sn(new Float32Array([0,0,18]),3);Le.setUsage(xr);const j=new Sn(new Float32Array([0,0,0,1]),4);j.setUsage(xr);const oe=new Sn(new Float32Array([0,1,0]),3);oe.setUsage(xr);const ce=new Sn(new Float32Array([90,91,0]),3);ce.setUsage(xr);const se=()=>{const be=new fr(1,1,{minFilter:Ri,magFilter:pt,format:pn,generateMipmaps:!0});return be.texture.wrapS=be.texture.wrapT=cl,be},Te=se(),Oe=se();let Pe=Te,Ge=Oe;const Be={u_animationPositionTexture:{value:ye},u_animationOrientTexture:{value:Se},u_animationTextureSize:{value:new nt(G,k)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:c},u_envTexture:{value:u},u_ambientColor:{value:new Ze("#566d80")},u_bgColor:{value:new Ze("#000000")},u_sunPosition:{value:new q(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new Ze(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new Ze("#aaaafb")},u_cardPosition:{value:new q}},tt={u_blackTunnelTexture:{value:Pe.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},z={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async be=>{const[He,Ce]=await Promise.all([Yf(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_arm.webp`,`${r}assets/textures/tunnels/astronaut/astronaut_${be}_base.webp`),new ir().loadAsync(`${r}assets/textures/tunnels/astronaut/astronaut_${be}_nor.webp`)]);Ce.colorSpace=Qt,Ce.flipY=!1,Ce.generateMipmaps=!0,Ce.minFilter=Ri,Ce.magFilter=pt,Ce.anisotropy=8,z[be]={armb:He,nor:Ce}}));const ke=((fh=(hh=D.capabilities).getMaxAnisotropy)==null?void 0:fh.call(hh))||8;for(const be of Object.keys(z)){const{armb:He,nor:Ce}=z[be];He&&(He.anisotropy=Math.min(8,ke),He.needsUpdate=!0),Ce&&(Ce.anisotropy=Math.min(8,ke),Ce.needsUpdate=!0)}z.helmet_glass=z.helmet;const We=new gi;R.add(We);const je=[],Ue=4,qe=new Sn(new Float32Array(Ue*3),3);qe.setUsage(xr);const ze=new Sn(new Float32Array(Ue*4),4);ze.setUsage(xr);const U=new Sn(new Float32Array(Ue*3),3);U.setUsage(xr);const E=new Sn(new Float32Array(Ue*3),3);E.setUsage(xr);for(let be=0;be<Ue;be++)ze.setXYZW(be,0,0,0,1),U.setXYZ(be,0,1,0),E.setXYZ(be,90,91,0);const B=[];let $=0;const ae={value:0};Xf.forEach((be,He)=>{const Ce=C[He],$e=new lo;for(const un in Ce.attributes)$e.setAttribute(un,Ce.attributes[un]);Ce.index&&$e.setIndex(Ce.index),$e.instanceCount=1,$e.setAttribute("instancePos",Le),$e.setAttribute("instanceOrient",j),$e.setAttribute("instanceAnimationFrameFromToBlend1",oe),$e.setAttribute("instanceAnimationFrameFromToBlend2",ce);const ot=be==="helmet_glass"||be==="card"?"helmet":be,Mt=be==="helmet_glass",ft={...Be,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor}},Rt={...Be,...tt,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor}},cn=new At({uniforms:ft,vertexShader:Ga,fragmentShader:HS,transparent:!0,blending:Ci,side:bn,defines:{BONE_COUNT:Rs,IS_WHITE:!0,...Mt?{IS_HELMET_GLASS:!0}:{}}}),Nn=new At({uniforms:Rt,vertexShader:Ga,fragmentShader:Hf,transparent:!0,blending:Ci,side:bn,defines:{BONE_COUNT:Rs,IS_BLACK:!0,...Mt?{IS_HELMET_GLASS:!0}:{}}}),On=new It($e,cn);if(On.frustumCulled=!1,On.userData.whiteMat=cn,On.userData.blackMat=Nn,We.add(On),je.push(On),!Mt){const un=new lo;for(const ci in Ce.attributes)un.setAttribute(ci,Ce.attributes[ci]);Ce.index&&un.setIndex(Ce.index),un.instanceCount=Ue,un.setAttribute("instancePos",qe),un.setAttribute("instanceOrient",ze),un.setAttribute("instanceAnimationFrameFromToBlend1",U),un.setAttribute("instanceAnimationFrameFromToBlend2",E);const An=new At({uniforms:{...Rt,u_armbTexture:{value:z[ot].armb},u_norTexture:{value:z[ot].nor},u_alpha:ae},vertexShader:Ga,fragmentShader:Hf,transparent:!0,depthWrite:!1,depthTest:!1,blending:Qs,blendEquation:Ln,blendSrc:fi,blendDst:fi,blendEquationAlpha:Ln,blendSrcAlpha:fi,blendDstAlpha:fi,side:bn,defines:{BONE_COUNT:Rs,IS_BLACK:!0,IS_CLONE:!0}}),en=new It(un,An);en.frustumCulled=!1,en.renderOrder=1e3,en.visible=!1,We.add(en),B.push(en)}});const ie=new nt(5,23),Re=new pl;let de=0,_e=!1;const Ke=document.createElement("canvas");Ke.width=Ke.height=11;{const be=Ke.getContext("2d");be.fillStyle="#000",be.fillRect(0,0,11,11),be.fillStyle="#f00",be.fillRect(1,1,3,9),be.fillStyle="#0f0",be.fillRect(4,1,3,9),be.fillStyle="#00f",be.fillRect(7,1,3,9)}const he=new Ky(Ke);he.needsUpdate=!0,he.minFilter=pt,he.magFilter=pt;const ue=await new ir().loadAsync(`${r}assets/textures/tunnels/astronaut/face.png`);ue.minFilter=nn,ue.magFilter=nn,ue.colorSpace=Qt,ue.flipY=!1;const ge=new Di(.2,.15).translate(0,1.68,.1);ge.setAttribute("boneIndices",new Gt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),ge.setAttribute("boneWeights",new Gt(new Float32Array([1,0,1,0,1,0,1,0]),2)),ge.setAttribute("tangent",new Gt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),ge.setAttribute("ao",new Gt(new Float32Array([1,1,1,1]),1));const Ee=new lo;for(const be in ge.attributes)Ee.setAttribute(be,ge.attributes[be]);ge.index&&Ee.setIndex(ge.index),Ee.instanceCount=1,Ee.setAttribute("instancePos",Le),Ee.setAttribute("instanceOrient",j),Ee.setAttribute("instanceAnimationFrameFromToBlend1",oe),Ee.setAttribute("instanceAnimationFrameFromToBlend2",ce);const De=new At({uniforms:{...Be,u_cardLedTexture:{value:he},u_cardTexture:{value:ue},u_cardColor:{value:new Ze("#ddddff")},u_cardUvOffset:{value:new nt(0,0)},u_cardTextureSize:{value:ie},u_cardOpacity:{value:0}},vertexShader:Ga,fragmentShader:VS,transparent:!0,depthTest:!1,depthWrite:!1,side:bn,blending:Qs,blendEquation:Ln,blendSrc:fi,blendDst:fi,blendEquationAlpha:Ln,blendSrcAlpha:fi,blendDstAlpha:fi,defines:{BONE_COUNT:Rs}}),Je=new It(Ee,De);Je.frustumCulled=!1,Je.renderOrder=100,Je.visible=!1,We.add(Je);const Xe=new gi;R.add(Xe);const Qe=new Vs;Qe.positionAmplitude=2,Qe.positionFrequency=1,Qe._enableRotationNoise=!1;const X=Qe.position;let ee=0,te=1,fe=typeof window<"u"?window.scrollY:0,Ie=1;const Fe=(be,He)=>{const Ce=new lo;for(const ft in be.attributes)Ce.setAttribute(ft,be.attributes[ft]);be.index&&Ce.setIndex(be.index);const $e=new Float32Array(Ha);for(let ft=0;ft<Ha;ft++)$e[ft]=ft;Ce.setAttribute("a_instanceId",new Sn($e,1)),Ce.instanceCount=Ha;const ot=new At({uniforms:{u_texture:{value:d},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:X},u_time:{value:0}},vertexShader:BS,fragmentShader:kS,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Ha,...He?{IS_WALL:!0}:{}}}),Mt=new It(Ce,ot);return Mt.frustumCulled=!1,Xe.add(Mt),ot},it=Fe(f,!1),St=Fe(m,!0),Xt=await nM(R,{base:r,isMobile:n,sharedTime:Be.u_time}),_t=new At({uniforms:{u_color:{value:new Ze(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:Ci}),Zt=new It(new Di(200,200),_t);Zt.position.z=-80,Zt.renderOrder=-10,R.add(Zt),x.colorSpace=Qt,x.generateMipmaps=!1,x.minFilter=pt,x.magFilter=pt;const Fn={u_earthTexture:{value:x},u_bgColor:{value:new Ze(0)},u_atmosphereColor:{value:new Ze("#4169E1")}},yo=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,So=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,Yn=new gi,Hr=new At({uniforms:Fn,vertexShader:yo,fragmentShader:So,depthWrite:!0,depthTest:!0}),ai=new It(S,Hr);ai.frustumCulled=!1,ai.renderOrder=-1,Yn.add(ai),R.add(Yn);const vi=new gi;R.add(vi);const Li=await Yf(`${r}assets/textures/tunnels/grids/greeble_arm.webp`,`${r}assets/textures/tunnels/grids/greeble_base.webp`);Li.wrapS=Li.wrapT=Jo,w.colorSpace=Qt,w.flipY=!1,w.wrapS=w.wrapT=Jo;const qt={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:Pe.texture},u_greebleArmbTexture:{value:Li},u_greebleNormalTexture:{value:w},u_resolution:{value:new nt(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new q(0,70,0)},u_color1:{value:new Ze(Cs[0])},u_color2:{value:new Ze(_c[0])}},qi=(be,He,Ce)=>{const $e=new lo;for(const Rt in be.attributes)$e.setAttribute(Rt,be.attributes[Rt]);be.index&&$e.setIndex(be.index);const ot=be.attributes.position.count;$e.getAttribute("ao")||$e.setAttribute("ao",new Gt(new Float32Array(ot).fill(1),1)),$e.getAttribute("areaRatio")||$e.setAttribute("areaRatio",new Gt(new Float32Array(ot),1)),$e.getAttribute("height")||$e.setAttribute("height",new Gt(new Float32Array(ot).fill(1),1)),$e.getAttribute("cluster")||$e.setAttribute("cluster",new Gt(new Float32Array(ot),1)),$e.setAttribute("instancePos",gc(He.attributes.position)),$e.setAttribute("instanceGridIds",gc(He.attributes.gridIds)),$e.setAttribute("instanceAxis",gc(He.attributes.rotAxis)),$e.instanceCount=He.attributes.position.count;const Mt=new At({uniforms:qt,vertexShader:OS,fragmentShader:zS,side:bn,transparent:!1,depthWrite:!0,blending:Fr,defines:{GRID_SIZE:Va,...Ce?{IS_HD:!0}:{}}}),ft=new It($e,Mt);return ft.frustumCulled=!1,ft.renderOrder=Ce?2:1,vi.add(ft),ft};qi(v,g,!1),o&&_&&p&&qi(_,p,!0);let pr=0,mr=0,Ii=0,li=b,xi=0,h=-80,y=0;const T=new Vs;T.positionFrequency=.2,T.rotationFrequency=.15,T.positionAmplitude=0,T.rotationAmplitude=0;const L=new wu(new q,1,.65,1.3),I=new wu(new q,1,.85,1.1),O=Array.from({length:Ue},()=>{const be=new Vs;return be.positionFrequency=.2,be.rotationFrequency=.6,be.positionAmplitude=12,be.rotationAmplitude=10,be}),Y=Float32Array.from({length:Ue+1},(be,He)=>He===0?0:Math.random()*2),ne=new Float32Array(Ue),Z=new Float32Array(Ue),Q=new q,J=new Un,re=new vt,xe=new vt,me=new q,Ae=new q,Me=new Un,we=new si,ve=new q(1,1,1),rt=new Ze,Ye=new Ze,wt=new q,gt=new q;let et=0,bt=0,st=0,xt=0,at=.08;const lt=.1;let zt=!1,Kt=0,sn=0,Vr=0;window.addEventListener("pointermove",be=>{et=be.clientX/Math.max(window.innerWidth,1)*2-1,bt=be.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{zt=!0},{passive:!0}),window.addEventListener("pointerup",()=>{zt=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{zt=!1},{passive:!0});const El=()=>{M.near=1,M.far=200,M.position.copy(A),M.up.set(0,1,0),M.lookAt(P),M.fov=li,wt.set(0,0,-1).applyQuaternion(M.quaternion);let be=gt.copy(P).sub(M.position).dot(wt);const He=M.fov,Ce=He+Ii,$e=Math.max(1,Math.min(170,Ce));let ot=be*Math.tan(He/360*Math.PI/2)/Math.tan($e/360*Math.PI/2)-be;Number.isFinite(ot)||(ot=0),M.translateZ(ot),M.fov=He,be+=ot,M.translateZ(be*-1);const Mt=n?at*.35:at,ft=Math.max(-1,Math.min(1,bt))*Mt,Rt=Math.max(-1,Math.min(1,-et))*Mt;st+=(ft-st)*lt,xt+=(Rt-xt)*lt,we.set(st,xt,0),Me.setFromEuler(we),M.quaternion.multiply(Me),M.translateZ(be),M.updateProjectionMatrix()},jp=be=>{if(T.update(be),L.update(be,T.position),me.copy(T.euler),I.update(be,me),we.set(I.value.x,I.value.y,I.value.z),Me.setFromEuler(we),xe.compose(L.value,Me,ve),re.compose(Q,J,ve),re.multiply(xe),re.decompose(me,Me,Ae),Le.setXYZ(0,me.x,me.y,me.z),j.setXYZW(0,Me.x,Me.y,Me.z,Me.w),Le.needsUpdate=!0,j.needsUpdate=!0,Al=1+Math.min(3.5,L.valueVel.length()*.2+I.valueVel.length()*.2),$>.01&&!Yt&&!Xr){for(let He=0;He<Ue;He++){const Ce=O[He];Ce.positionFrequency=.2,Ce.rotationFrequency=.6,Ce.positionAmplitude=12,Ce.rotationAmplitude=10,Ce.update(be),re.compose(Q,J,ve),re.multiply(Ce.matrix),re.decompose(me,Me,Ae);const $e=He/Math.max(Ue-1,1),ot=pe($,$e*.3,.7+$e*.3,1,0,LS);Ae.set(Le.getX(0),Le.getY(0),Le.getZ(0)),me.lerp(Ae,ot),qe.setXYZ(He,me.x,me.y,me.z),ze.setXYZW(He,Me.x,Me.y,Me.z,Me.w)}qe.needsUpdate=!0,ze.needsUpdate=!0}},ct=document.getElementById("home-goal-tunnel-sticky")||((dh=i.closest)==null?void 0:dh.call(i,"#home-goal-tunnel-sticky"))||((ph=e==null?void 0:e.querySelector)==null?void 0:ph.call(e,"#home-goal-tunnel-sticky"))||i.parentElement||e,$n=nh(e);let an=0,vs=0,Gr=0,Tt=0,yi=0,aa=0,Wr=0,la=0,Mo=0,En=0,ih=0,Xr=!0,dn=!1,Yt=!1,xs=0,_r=0,Al=1,Rl=0,rh=performance.now(),ca=!1,oh=!1;const ln=YS(D,R,M,{isMobile:n});let Ui=null;try{Ui=await oM(R,{base:r}),ln.setGlassPass(Ui)}catch(be){console.warn("Broken glass failed to load",be)}const wo=()=>{var Rt;const be=(Rt=ct==null?void 0:ct.querySelector)==null?void 0:Rt.call(ct,"[data-goal-screen-clip]"),He=ct==null?void 0:ct.classList.contains("is-windowed"),Ce=He&&be?be:ct;let $e=(Ce==null?void 0:Ce.clientWidth)||window.innerWidth,ot=(Ce==null?void 0:Ce.clientHeight)||window.innerHeight;!He&&n&&window.visualViewport&&($e=Math.round(window.visualViewport.width)||$e,ot=Math.round(window.visualViewport.height)||ot),M.aspect=$e/Math.max(ot,1),El(),D.setSize($e,ot,!1),ln.resize($e,ot),qt.u_resolution.value.set($e,ot);const Mt=Math.max(1,Math.floor($e*.25)),ft=Math.max(1,Math.floor(ot*.25));(Te.width!==Mt||Te.height!==ft)&&(Te.setSize(Mt,ft),Oe.setSize(Mt,ft))};wo(),window.addEventListener("resize",wo);const sh=(be,He,Ce=100)=>{const $e=be.attributes.position.array,ot=be.attributes.orient.array,Mt=Math.min(Math.floor(He),Ce-1),ft=Math.min(Math.ceil(He),Ce-1),Rt=He-Math.floor(He),cn=new q().fromArray($e,Mt*3).lerp(new q().fromArray($e,ft*3),Rt),Nn=new Un().fromArray(ot,Mt*4).slerp(new Un().fromArray(ot,ft*4),Rt);return{p:cn,q:Nn}},ua=()=>{var qr,Yi;if(!e)return;const be=window.innerHeight,He=window.scrollY||0;He!==fe&&(Ie=He>fe?1:-1,fe=He),yi=$n.range("blackFrameIn").ratio;const Ce=$n.range("blackFrameShow").ratio;if(Gr=$n.range("blackTitle").ratio,Tt=$n.range("blackTunnel").ratio,ct!=null&&ct.classList.contains("is-windowed")&&wo(),Wr=$n.range("whiteTunnel").ratio,an=$n.between("whiteTunnel","whiteFrameOut").ratio,la=$n.range("whiteFrameOut").ratio,aa=$n.range("whiteFrameBreak").ratio,ih=$n.between("whiteTunnel","whiteFrameBreak").ratio,En=$n.between("whiteFrameBreak","astronautDrop").ratio,Mo=((qr=$n.range("astronautWait"))==null?void 0:qr.ratio)??0,Vr=$n.between("whiteFrameBreak","astronautWait").ratio,Xr=Gr<1,dn=Tt<1&&!Xr,Yt=an<=1&&!dn&&!Xr,vs=Yt?Ti(0,.15,ih):1,ln.sync({blackFrameInRatio:yi,blackTitleRatio:Gr,blackTunnelRatio:Tt,whiteFrameRatio:Wr,whiteTunnelWaitRatio:Mo,astronautDropRatio:En,isWhiteTunnelActive:Yt,isBlackTunnelActive:dn,isMobile:n}),Ui){const Lt=e.querySelector("#home-goal-image-out"),Ni=Lt==null?void 0:Lt.getBoundingClientRect(),Pl=Ni&&Ni.height>8?Ni.height:(ct==null?void 0:ct.clientHeight)||be,tm=pe(la,0,1,1.15,1),nm=pe(la,0,1,-.12,0);Ui.updateFromScroll({whiteFrameBreakRatio:aa,astronautDropRatio:En,frameHeight:Pl,frameRotation:nm,frameScale:tm})}Be.u_whiteTunnelRatio.value=an,Be.u_showRatio.value=vs,Be.u_frameOutRatio.value=aa,it.uniforms.u_ratio.value=an,St.uniforms.u_ratio.value=an,it.uniforms.u_ratioInverse.value=1-an,St.uniforms.u_ratioInverse.value=1-an,Be.u_ambientColor.value.set(Yt&&En<1?"#6a7f94":"#566d80");const $e=new Ze(Yt&&En<1?"#ffffff":"#000000");_t.uniforms.u_color.value.copy($e),R.background=null,D.setClearColor($e,ln.clearAlpha),Be.u_bgColor.value.copy($e),ct&&!ct.classList.contains("is-windowed")&&(ct.style.background=$e.getStyle());const ot=ct==null?void 0:ct.classList.contains("is-windowed");!(ct==null?void 0:ct.classList.contains("is-pinned"))||ot?(document.documentElement.style.background="",document.body.style.background=""):Yt&&En<1?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):dn||Xr?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Xe.visible=Yt&&En<1,vi.visible=dn,Zt.visible=!(Yt&&En<1),Fn.u_bgColor.value.copy($e);const ft=Vt.clamp(Ce,0,1),Rt=Vt.clamp(yi,0,1);ai.position.y=-(10*(1-ft)+2.5+30*Rt),ai.scale.setScalar(pe(Rt,0,.5,40,70)),Yn.rotation.x=pe(Rt,0,.5,0,-1),ai.visible=Rt<1&&!Yt&&!dn;const cn=document.getElementById("header");cn&&((ct==null?void 0:ct.classList.contains("is-pinned"))?Yt&&En<1?cn.style.color="#000000":cn.style.color="#ffffff":cn.style.color="");const Nn=e.dataset.goalPhase==="black-tunnel",On=e.dataset.goalPhase==="white";(dn&&!Nn||Yt&&!On)&&ln.markEfxSync();const un=Yt;for(const Lt of je){const Ni=un?Lt.userData.whiteMat:Lt.userData.blackMat;Lt.material!==Ni&&(Lt.material=Ni)}$=dn?Ti(.2,.4,Tt):0,ae.value=$;for(const Lt of B)Lt.visible=!Yt&&$>.01;let An;if(Yt){const Lt=an<1?pe(an,0,1,0,79):pe(En,0,1,79,99);An=sh(l,Lt,100),An.p.y-=(n?0:.4)*NS(En)}else An=sh(a,100*Mu(yi),100);if(Q.copy(An.p),J.copy(An.q),T.positionFrequency=.2,T.rotationFrequency=.15,T.positionAmplitude=0,T.rotationAmplitude=0,dn){const Lt=Tt;T.positionFrequency=.2+.5*Lt,T.rotationFrequency=.15,T.positionAmplitude=5*Lt,T.rotationAmplitude=60*Lt}else Yt&&(T.positionFrequency=pe(Wr,0,.45,.5,.2),T.rotationFrequency=pe(Wr,0,.45,.4,.15),T.positionAmplitude=pe(Wr,0,.75,5,0),T.rotationAmplitude=pe(Wr,0,.75,15,0));We.visible=vs>.02;const en=window.innerHeight||1,ci=(Yi=ct==null?void 0:ct.querySelector)==null?void 0:Yi.call(ct,"[data-goal-screen-clip]"),bo=Math.max(1,ot&&(ci==null?void 0:ci.clientHeight)||(ct==null?void 0:ct.clientHeight)||en),gr=yi<1?yi:1-Wr,ys=Vt.lerp(bo,en,gr),Ss=A.distanceTo(P),ha=b/180*Math.PI,fa=Math.tan(ha/2)*Ss*2*(en/Math.max(ys,1));li=Math.atan(fa/2/Ss)*2/Math.PI*180,Yt?Ii=pe(an,0,1,60,0):dn?(Ii=Math.sin(Tt*10+ee)*(n?4.5:7.5)*Ti(0,.2,Tt),vi.position.z=-80*so(.2,0,Tt)):(Ii=0,vi.position.z=-80),at=.08*Ti(.5,1,Gr)+.02,an>0&&(at*=pe($n.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),at=pe(Mo,0,.1,at,.05),sn=(1-Kt)*Ie*2.5*pe(yi,0,.5,0,1)*pe(Mo,0,.25,1,0),El(),tt.u_frameIn.value=yi,tt.u_sunFactor.value=dn?1-Ti(.1,.2,Tt):1,tt.u_blackTunnelRatio.value=dn?Ti(.1,.3,Tt):0,tt.u_endRatio.value=dn?Ti(.65,.9,Tt):0,tt.u_offsetZ.value=qt.u_offsetZ.value;const Nt=pe(En,1,0,.2,1)*(aa>0?1:0);Be.u_tintColor.value.setStyle("#2533c2").multiplyScalar(Nt);const Fi=ct.getBoundingClientRect();ca=Fi.bottom>0&&Fi.top<be,ca&&!oh&&Xr&&(xs=0,_r=0),oh=ca,e.dataset.goalPhase=Yt?"white":dn?"black-tunnel":yi<.98||ct!=null&&ct.classList.contains("is-windowed")?"window":"title"},Jp=be=>{if(!dn){qt.u_showRatio.value=0,ln.setEfxOffset(0,0);return}qt.u_showRatio.value=CS(so(0,.1,Tt));const He=qt.u_outBloomFromToStrength.value;He.z=pe(Tt,.65,.75,0,.2),He.z=pe(Tt,.75,.85,He.z,.15),He.z=pe(Tt,.85,1,He.z,.15),He.x=pe(Tt,.75,.85,20,60),He.x=pe(Tt,.9,1,He.x,30);const Ce=pe(Tt,.6,1,0,1,DS);qt.u_blackTunnelTransformRatio.value=Ce;const $e=Ie*be;pr+=$e*so(.1,.3,Tt)*pe(Ce,0,.25,1,.5),mr+=$e*pe(Ce,0,.25,1.5,1);const ot=pr,Mt=Math.floor(ot),ft=ot-Mt,Rt=(Mt+Xp(ft))*Va+mr*Va+Tt*Va*10,cn=-80*so(.2,0,Tt);let Nn=cn-h,On=Rt-xi;(Math.abs(On)>8||Math.abs(Nn)>20)&&(On=0,Nn=0),y=Nn+On,h=cn,xi=Rt,vi.position.z=cn,qt.u_offsetZ.value=Rt,tt.u_offsetZ.value=Rt,qt.u_time.value=ee;const un=Cs.length*pe(Tt,.2,1,0,1),An=Math.floor(un),en=Math.min(Math.ceil(un),Cs.length-1),bo=un-An>.5?1:0;rt.set(Cs[An]),Ye.set(Cs[en]),rt.lerp(Ye,bo),qt.u_color1.value.copy(rt),rt.set(_c[An]),Ye.set(_c[en]),rt.lerp(Ye,bo),qt.u_color2.value.copy(rt);const gr=n?.45:1;ln.setEfxOffset(y*pe(Tt,0,.2,0,1)*gr,y*Ce*.01*gr),ln.setEfxAmount(pe(Tt,0,.25,.35,.85)*(n?.35:1)),Ii=Math.sin(Tt*10+ee)*(n?4.5:7.5)*Ti(0,.2,Tt)};let Cl=0;const Qp=be=>{if(!Yt){Xt.update({whiteTunnelWaitRatio:0,aspect:M.aspect}),Cl=an;return}Qe.update(be),it.uniforms.u_time.value=ee,St.uniforms.u_time.value=ee,it.uniforms.u_fbm.value=X,St.uniforms.u_fbm.value=X;let He=an-Cl;Math.abs(He)>.08&&(He=0);const Ce=n?0:.7,$e=Vt.clamp(-He*pe(an,0,.9,500,0,Su)*Ce,-1,1),ot=Vt.clamp(-He*pe(an,0,.8,45,0,Su)*Ce,-1,1);ln.setEfxOffset($e,ot),ln.setEfxAmount(n?0:pe(an,.75,1,1,0)),Cl=an;const Mt=Yt&&En<1?"#ffffff":"#000000",ft=n?Math.max(M.aspect,.95):Math.max(M.aspect,.01);Xt.update({whiteTunnelWaitRatio:Mo,aspect:ft,bg:Mt})},ah=()=>ua();window.addEventListener("scroll",ah,{passive:!0}),ua();const lh=be=>{var fa;const He=Math.min(.05,Math.max(0,be||.016666666666666666));if(rh=performance.now(),!ca){if(ct){const Nt=ct.getBoundingClientRect();Nt.bottom>0&&Nt.top<window.innerHeight&&ln.render()}return}Kt+=((zt?1:0)-Kt)*.1,te=pe(Kt,0,1,1,.3)*He,te=pe(yi,0,1,He,te),te=pe(Vr,.5,.75,te,He),ee+=te,Be.u_time.value=ee,sn=(1-Kt)*Ie*2.5*pe(yi,0,.5,0,1)*pe(Mo,0,.25,1,0),Jp(te),Qp(te),jp(te),dn&&(Ii=Math.sin(Tt*10+ee)*7.5*Ti(0,.2,Tt)),El();const Ce=En,$e=pe(Ce,0,.1,0,1)*pe(Ce,.9,1,1,0);Be.u_loopLinearBlend.value=$e;const ot=pe(Ce,.9,1,0,1,Mu);_e=ot>0;let Mt,ft,Rt,cn=!0;if(Ce<.5)_r=0,Mt=Gr<.08?Ti(-.3,1,Gr)*.25:Ti(-.3,1,Gr)*.75,ft=0,Rt=89,De.uniforms.u_cardOpacity.value=0;else{Mt=pe(Ce,.9,1,0,1),ft=140,Rt=Math.min(W-1,287);const Nt=Math.min(2,Math.max(0,.5+Math.max(0,Re.getFbm(ee*8,3)+.5)*4));De.uniforms.u_cardOpacity.value=Nt*ot,Ce<1?(_r=Math.max(0,_r),cn=!1):_r=0}_r===0&&(xs+=te*Mt*Al),$e===1&&(xs=0);const Nn=Rt-ft+1,On=Y[0];let An=(On+xs)*60%Nn,en=Math.floor(An),ci=(en+1)%Nn+ft;en+=ft,ci<en&&(cn||(ci=en=ft,xs=-On,_r=Number.POSITIVE_INFINITY));const bo=An-Math.floor(An);oe.setXYZ(0,en,ci,cn||ci>=en?bo:0),oe.needsUpdate=!0;const gr=pe(la+Ce,.9,2,90,139,FS),ys=Math.floor(gr),Ss=Math.ceil(gr),ha=gr-ys;ce.setXYZ(0,ys,Ss,ha),ce.needsUpdate=!0,Je.visible=Ce>=.95&&vs>.02,de=_e?de+te:0;{const Nt=ie.x,Fi=ie.y,qr=Math.floor(10*de%(Nt*(Fi+1))),Yi=qr/(Nt*(Fi+1)),Lt=so(0,.15,Yi)*so(1,.9,Yi);Be.u_faceLedLight.value=Lt,De.uniforms.u_cardUvOffset.value.set(qr%Nt/Nt,(Fi-Math.floor(qr/Nt))/Fi)}if(Be.u_cardPosition.value.set(Le.getX(0),Le.getY(0)+.9,Le.getZ(0)),$>.01&&!Yt&&!Xr){for(let Nt=0;Nt<Ue;Nt++){ne[Nt]=(ne[Nt]+.2*te)%1,_r===0&&(Z[Nt]+=te*Mt*Al);const Yi=(Vt.lerp(0,Y[Nt+1],$)+Z[Nt])*60%Nn;let Lt=Math.floor(Yi),Ni=(Lt+1)%Nn+ft;Lt+=ft,Ni<Lt&&!cn&&(Ni=Lt=ft);const Pl=Yi-Math.floor(Yi);U.setXYZ(Nt,Lt,Ni,Pl),E.setXYZ(Nt,ys,Ss,ha)}U.needsUpdate=!0,E.needsUpdate=!0}if((fa=ln.setScrollVelocity)==null||fa.call(ln,Math.abs(sn)+Math.abs(Ie)*.5),dn){const Nt=qt.u_resolution.value.clone();Xe.visible=!1,Zt.visible=!1,We.visible=vs>.02,qt.u_feedbackTexture.value=Pe.texture,qt.u_resolution.value.set(Ge.width,Ge.height),D.setRenderTarget(Ge),D.setClearColor(0,0),D.clear(),D.render(R,M),D.setRenderTarget(null),qt.u_resolution.value.copy(Nt);const Fi=Pe;Pe=Ge,Ge=Fi,qt.u_feedbackTexture.value=Pe.texture,tt.u_blackTunnelTexture.value=Pe.texture,Zt.visible=!0}D.setClearColor(Be.u_bgColor.value,ln.clearAlpha),ln.render()},ch=be=>{Rl=requestAnimationFrame(ch);const He=Math.min(.05,(be-rh)/1e3);be-uh>50&&lh(He)};let uh=0;const em=be=>{uh=performance.now(),lh(be)};return Rl=requestAnimationFrame(ch),requestAnimationFrame(()=>{wo(),ua(),ln.render()}),{resize:wo,updateScroll:ua,tickFrame:em,getAutoScrollSpeed:()=>sn,getGlassRatio:()=>(Ui==null?void 0:Ui.ratio)??0,getAstronautDropRatio:()=>En,getWhiteTunnelRatio:()=>an,destroy(){cancelAnimationFrame(Rl),window.removeEventListener("resize",wo),window.removeEventListener("scroll",ah),Ui==null||Ui.dispose(),Te.dispose(),Oe.dispose(),ln.destroy(),D.dispose()}}}function aM(i,e,t){if(!i||!e)return{updateScroll(){},destroy(){}};const n=Array.from(e.querySelectorAll(".home-goal-tunnel-title-line"));n.forEach(v=>{if(v.querySelector(".goal-word"))return;const g=v.textContent.replace(/\s+/g," ").trim().split(" ");v.innerHTML=g.map(_=>`<span class="goal-word">${_}</span>`).join(" ")});const r=nh(i),o=()=>window.innerWidth<812,s=i.querySelector("#home-goal-texts")||i.querySelector(".home-goal-texts-paragraph"),a=.25,l=1,c=()=>{e.style.transform="translate3d(-50%, -50%, 0)";const v=e.getBoundingClientRect(),g=v.width,_=v.left;n.forEach(p=>{const w=Array.from(p.querySelectorAll(".goal-word"));if(w.length<2){w.forEach(R=>{R._offsetX=0});return}w.forEach(R=>{R.style.transform="translateZ(0)"});let S=g;w.forEach(R=>{const A=R.getBoundingClientRect();R._domRect=A,S-=A.width});let x=0;const C=S/(w.length-1);w.forEach(R=>{R._offsetX=-R._domRect.left+_+x,x+=R._domRect.width+C})})};c(),window.addEventListener("resize",c);let u=null,d=null,f=null;t&&t.parentElement&&(d=t.parentElement,f=t.nextSibling,u=document.createElement("div"),u.setAttribute("aria-hidden","true"),u.style.width="100%",u.style.pointerEvents="none",t.parentElement.insertBefore(u,t));const m=()=>{const v=r.range("blackTitle").ratio,g=r.range("blackTunnel").ratio,_=r.between("whiteTunnel","whiteFrameOut").ratio,p=r.between("whiteFrameBreak","astronautDrop").ratio,w=pe(_,0,.25,0,1);r.progress();const S=window.visualViewport,x=Math.round((S==null?void 0:S.height)||window.innerHeight),C=Math.round((S==null?void 0:S.offsetTop)||0);if(t&&!t.classList.contains("is-windowed")){const N=i.getBoundingClientRect(),F=window.scrollY||0,W=(t.classList.contains("is-pinned")&&u?u:t).getBoundingClientRect().top+F,G=F>=W-1&&N.bottom>x,k=t.classList.contains("is-pinned");t.classList.toggle("is-pinned",G),u&&(u.style.height=G?`${x}px`:"0px"),G&&!k?(document.body.appendChild(t),window.dispatchEvent(new Event("resize"))):!G&&k&&d&&(f&&f.parentNode===d?d.insertBefore(t,f):u&&u.parentNode===d?d.insertBefore(t,u.nextSibling):d.appendChild(t),t.style.top="",t.style.height="",window.dispatchEvent(new Event("resize"))),G&&(t.style.top=`${C}px`,t.style.height=`${x}px`),t.style.background=w>.05||_>.01?"#ffffff":"#000000"}let R=pe(v,a,l,0,1);const A=R>0&&R<1;let P=pe(R,.5,1,1,o()?9:12,Mu);P*=pe(R,0,.15,.85,1,US);let b=pe(R,.9,1,1,0);b*=pe(R,0,.05,0,1),b*=pe(g,0,.12,1,0);const M=pe(R,.4,.6,0,1,Xp);if(e.classList.toggle("is-on-black",w<.5),e.style.opacity=String(b),e.style.transform=`translate3d(-50%, -50%, 0) scale(${P})`,e.style.visibility=A&&b>.02?"visible":"hidden",e.querySelectorAll(".goal-word").forEach(N=>{const F=N._offsetX||0;N.style.transform=`translateX(${M*F}px)`}),s){const N=pe(g,.02,.15,1,0);s.style.opacity=String(N),t!=null&&t.classList.contains("is-windowed")||(s.style.transform="none")}const D=r.range("blackFrameIn").ratio;return i.dataset.goalPhase=_>.01?"white":g>.01?"black-tunnel":D<.98?"window":"title",{blackTitleRatio:v,blackTunnelRatio:g,whiteTunnelRatio:_,astronautDropRatio:p,toWhite:w}};return window.addEventListener("scroll",m,{passive:!0}),m(),{updateScroll:m,ranges:r,destroy(){window.removeEventListener("scroll",m),window.removeEventListener("resize",c)}}}function Wa(i,e="word"){if(!i)return[];const t=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const n=t.split(" "),r=[];return n.forEach((o,s)=>{const a=document.createElement("div");a.className=e,a.textContent=o,a.style.display="inline-block",a.style.willChange="transform",i.appendChild(a),r.push(a),s<n.length-1&&i.appendChild(document.createTextNode(" "))}),r}function lM(i){if(!i)return[];const e=i.textContent.replace(/\s+/g," ").trim();i.textContent="";const t=[];return e.split(" ").forEach((n,r,o)=>{const s=document.createElement("div");s.className="word",s.style.display="inline-block",[...n].forEach(a=>{const l=document.createElement("div");l.className="char",l.textContent=a,l.style.display="inline-block",l.style.position="relative",l.style.willChange="transform",l.style.transform="translate3d(0, 1em, 0) rotate(10deg)",s.appendChild(l),t.push(l)}),i.appendChild(s),r<o.length-1&&i.appendChild(document.createTextNode(" "))}),t}function no(i,e=2){return i?(i._time=0,i._animating=!1,i._maxTime=e,i):null}function cM(){const i=()=>window.innerWidth<812,e=document.getElementById("home-reel"),t=no(document.getElementById("home-reel-title"),2),n=document.getElementById("home-reel-title-inner"),r=document.getElementById("home-reel-title-line-1"),o=document.getElementById("home-reel-title-line-2"),s=document.getElementById("home-reel-content"),a=no(document.getElementById("home-reel-desc"),2),l=no(document.getElementById("home-reel-cta"),1),c=document.getElementById("home-reel-thumb"),u=document.getElementById("home-reel-video-container"),d=Array.from(document.querySelectorAll(".home-reel-video-container-cross"));let f=[],m=0,v=[],g=!0;const _=()=>{f.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),v.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}),l&&(l.style.transform="translate3d(0, 150%, 0) rotate(10deg)",l.style.opacity="0",l._ratio=0,l._animating=!1),t&&(t._time=0,t._animating=!1),a&&(a._time=0,a._animating=!1)};(()=>{!r||!o||([r,o].forEach(K=>{K.style.overflow="hidden",K.style.display="block",K.style.position="relative"}),f=[...Wa(r,"word"),...Wa(o,"word")],f.forEach(K=>{K.style.position="relative",K.style.bottom="0.1em"}),m=parseFloat(getComputedStyle(r).paddingLeft)||0,a&&(v=Wa(a,"word"),a.style.overflow="hidden"),_())})();const w=document.getElementById("home-featured"),S=no(document.getElementById("home-featured-title"),2),x=no(document.getElementById("home-featured-disclaimer"),2),C=no(document.getElementById("home-featured-cta"),1);let R=[],A=[],P=!0;const b=()=>{P=!1,S&&(S._time=0,S._animating=!1),x&&(x._time=0,x._animating=!1),C&&(C._time=0,C._animating=!1),i()||(A.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}),R.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)"}))};(()=>{if(S){if(S.style.overflow="hidden",R=lM(S),x){const K=x.textContent.trim();x.textContent="";const ye=document.createElement("div");ye.className="line",ye.textContent=K,ye.style.transform="translate3d(0, 100%, 0)",ye.style.willChange="transform";const Se=document.createElement("div");Se.style.position="relative",Se.style.overflow="hidden",Se.appendChild(ye),x.appendChild(Se),A=[ye]}C&&(C.style.transform="translate3d(0, 150%, 0) rotate(10deg)",C.style.opacity="0",C.style.overflow="hidden"),b()}})();const D=no(document.getElementById("home-goal-title"),2);let N=[];D&&(D.style.overflow="hidden",N=Wa(D,"word"),N.forEach(K=>{K.style.transform="translate3d(0, 100%, 0)",K.style.opacity="0"}));let F=0,V=!1,W=0;const G=K=>{if(!t||!e)return;if(!yn(e).isActive){g=!0;return}g&&(g=!1,_());const Se=yn(t),Le=yn(s||a),oe=window.innerHeight*.1;if(t._time=tn(t._time+(t._animating?K:-K),0,2),a&&(a._time=tn(a._time+(a._animating?K:-K),0,2)),l&&(l._ratio=Qn(l._ratio+(l._animating?K:-K))),Se.screenRatio>-1&&(t._animating=!0,i()?f.forEach(ce=>{ce.style.transform="translate3d(0, 0, 0)"}):f.forEach((ce,se)=>{let Te,Oe;se<2?(Te=pe(t._time-Math.abs(2-se)/10,.5,1.2,-m,0,dt),Oe=pe(t._time-se/10,0,1,100,0,dt)):(Te=0,Oe=pe(t._time-se/10,0,1,-100,0,dt)),ce.style.transform=`translate3d(${Te}px, ${Oe}%, 0)`}),n)){const ce=Se.showScreenOffset*-oe*.5;n.style.transform=`translate3d(0, ${ce}px, 0)`}if(Le.screenRatio>-1){a&&(a._animating=!0),l&&(l._animating=!0);const ce=Le.showScreenOffset*-oe*1.5;if(a&&(a.style.transform=`translate3d(0, ${ce}px, 0)`,i()?v.forEach(se=>{se.style.opacity="1",se.style.transform="translate3d(0, 0, 0)"}):v.forEach((se,Te)=>{const Oe=pe(a._time-Te/100,0,1,.1,1,dl),Pe=pe(a._time-Te/100,0,1,100,0,dl);se.style.opacity=String(Oe),se.style.transform=`translate3d(0, ${Pe}%, 0)`})),l){const se=Le.showScreenOffset*-oe*1.25;window.innerWidth>=812?(l.style.transform=`translateY(${se}px) translate3d(0, ${pe(l._ratio,0,1,150,0,dt)}%, 0) rotate(${pe(l._ratio,0,1,10,0,dt)}deg)`,l.style.opacity=String(dt(l._ratio))):(l.style.transform=`translateY(${se}px)`,l.style.opacity="1")}}if(c){const ce=yn(c),se=Qn(pe(ce.showScreenOffset,.05,.85,0,1,dt));c.style.opacity=String(se),c.style.transform=`translate3d(0, ${pe(se,0,1,80,0,dt)}px, 0) scale(${pe(se,0,1,.96,1,dt)})`}if(u){const ce=yn(u);W=Qn(pe(ce.showScreenOffset,0,.7,0,1,dt)),u.style.opacity=String(.4+W*.6),u.style.transform=`translate3d(0, ${pe(W,0,1,60,0,dt)}px, 0) scale(${pe(W,0,1,.94,1,dt)})`,V=W>.9,F=tn(F+(V?K:-K*2),0,1.4),d.forEach((se,Te)=>{const Oe=pe(F-Te/10,0,.6,0,1,dt),Pe=pe(F-Te/10,0,.6,0,180,dt);se.style.transform=`scale(${Oe}) rotate(${Pe}deg)`,se.style.display="inline-block"})}},k=K=>{if(!w||!S)return;if(yn(w).isActive){P&&b();const Se=yn(S),Le=yn(x),j=yn(C);S._time=tn(S._time+(S._animating?K:-K),0,2),x&&(x._time=tn(x._time+(x._animating?K:-K),0,2)),C&&(C._time=tn(C._time+(C._animating?K:-K),0,1)),Se.screenRatio>-1&&(S._animating=!0,i()?R.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0) rotate(0deg)"}):R.forEach((oe,ce)=>{const se=pe(S._time*1.5-ce/20,0,1,1,0,dt),Te=pe(S._time*1.5-ce/20,0,1,10,0,dt);oe.style.transform=`translate3d(0, ${se}em, 0) rotate(${Te}deg)`})),Le.screenRatio>-1&&x&&(x._animating=!0,i()?A.forEach(oe=>{oe.style.transform="translate3d(0, 0, 0)"}):A.forEach((oe,ce)=>{const se=pe(x._time-ce/20,0,1,100,0,dt);oe.style.transform=`translate3d(0, ${se}%, 0)`})),j.screenRatio>-1&&C&&(i()?(C.style.transform="translate3d(0, 0, 0) rotate(0deg)",C.style.opacity="1"):(C._animating=!0,C.style.transform=`translate3d(0, ${pe(C._time,0,1,150,0,dt)}%, 0) rotate(${pe(C._time,0,1,10,0,dt)}deg)`,C.style.opacity=String(dt(C._time))))}else P=!0},H=K=>{if(!D)return;yn(D).screenRatio>-1&&(D._animating=!0),D._time=tn(D._time+(D._animating?K:-K),0,2),N.forEach((Se,Le)=>{const j=pe(D._time-Le/20,0,1,0,1,dt),oe=pe(D._time-Le/20,0,1,100,0,dt);Se.style.opacity=String(j),Se.style.transform=`translate3d(0, ${oe}%, 0)`})},le=()=>{r&&(m=parseFloat(getComputedStyle(r).paddingLeft)||0)};return window.addEventListener("resize",le),{update(K){G(K),k(K),H(K)},destroy(){window.removeEventListener("resize",le)}}}const Zf=28,uM=4,hM=8;function Kf(){return window.innerWidth<812}function fM(i=document){const e=Array.from(i.querySelectorAll(".project-item")).map((t,n)=>{var P,b;const r=t.querySelector(".project-item-main"),o=t.querySelector(".project-item-image"),s=t.querySelector(".project-item-line-1"),a=t.querySelector(".project-item-line-2-inner"),l=t.querySelector(".project-item-line-2-icon"),c=((P=s==null?void 0:s.textContent)==null?void 0:P.trim())||"",u=((b=a==null?void 0:a.textContent)==null?void 0:b.trim())||"",d=[];a&&(a.textContent="",[...u].forEach(M=>{const D=document.createElement("div");if(D.className="project-item-line-2-inner-list",D.style.transform="translateY(-400%)",M===" ")D.style.width="0.3em";else for(let N=0;N<4;N++){const F=document.createElement("span");F.textContent=M,D.appendChild(F)}a.appendChild(D),d.push(D)})),s&&(s.textContent="");let f=!1,m=!1,v=0,g=0,_=0,p=0,w=0,S=!1,x=0,C=0,R=0,A=0;return Kf()||(t.addEventListener("mouseenter",()=>{m=!0}),t.addEventListener("mouseleave",()=>{m=!1}),r==null||r.addEventListener("mouseenter",()=>{f=!0}),r==null||r.addEventListener("mouseleave",()=>{f=!1})),{dom:t,main:r,image:o,line1:s,line2Icon:l,tags:c,letterCols:d,index:n,update(M){const D=yn(t),N=D.ratio>-1&&D.ratio<1;N&&(S=!0),S&&(_+=M);const F=Qn(pe(_,0,.85,0,1,dt)),V=pe(F,0,1,90,0,dt);if(t.style.opacity=String(F),t.style.transform=`translate3d(0, ${V}px, 0)`,s&&N){p+=M;const W=Math.min(c.length,Math.floor(Zf*p)-uM),G=Math.min(c.length,Math.floor(Zf*p));let k="";for(let H=0;H<Math.max(0,W);H++)k+=c[H];for(let H=0;H<G-Math.max(0,W);H++)k+=String.fromCharCode(33+Math.floor(Math.random()*93));s.textContent=k}if(N&&(w+=M*.8),g=Qn(g+(m?1:-1)*M*2.5),Kf())d.forEach((W,G)=>{const k=Qn(g-Math.abs(G-d.length-1)/100),H=pe(k,0,1,0,1.5,dt);W.style.transform=`translate3d(1.5em, 0, 0) translateX(${H}em)`}),l&&(l.style.transform="translateX(1em)");else if(d.forEach((W,G)=>{const k=pe(G,0,Math.max(1,d.length-1),Math.PI/2,3*Math.PI/2),H=Qn(w-Math.cos(k)/hM),le=pe(H,0,1,500,0,PS),K=Qn(g-Math.abs(G-d.length-1)/100),ye=pe(K,0,1,0,1.5,dt);W.style.transform=`translate3d(${ye}em, -${le}%, 0)`}),l){const W=pe(g,.3,1,0,1,dt);l.style.transform=`translateX(${W}em)`}if(v=tn(v+(f?1:-1)*M,0,1),o&&!document.documentElement.classList.contains("has-featured-webgl")){f?(R=(Math.random()-.5)*pe(v,0,.6,1,0)*8,A=(Math.random()-.5)*pe(v,0,.6,1,0)*8):(R*=.92,A*=.92),x+=(R-x)*.2,C+=(A-C)*.2;const W=pe(v,0,1,1,1.06,dt);o.style.transform=`translate3d(${x}px, ${C}px, 0) scale(${W})`}}}});return{update(t){for(const n of e)n.update(t)},destroy(){}}}const jf=12,Jf=6,dM=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pM=`
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
  float stepDist = dist / float(${jf});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${jf}; i++) {
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
  float numSampleInv = 1.0 / float(${Jf});
  for (int i = 0; i < ${Jf}; i++) {
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
`;function mM(i,e,t,n){const r=Math.PI*2*e,o=t/(Math.PI*e),s=1/(r*r),a=n*t/r;let l=i,c=0,u=i,d=i;return{get value(){return l},set target(f){d=f},get target(){return d},update(f){if(f<=0)return l;const m=(d-u)/f;u=d;const v=Math.max(s,f*f/2+f*o/2,f*o);return l+=c*f,c+=(d+a*m-l-o*c)*f/v,l}}}async function _M(i){const e=document.getElementById("home-featured"),t=document.getElementById("project-list");if(!e||!t)return{update(){},resize(){},destroy(){}};const n=document.createElement("canvas");n.id="featured-webgl-canvas",n.setAttribute("aria-hidden","true"),document.body.appendChild(n);let r;try{r=new wl({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(x){return n.remove(),console.warn("Featured WebGL unavailable",x),{update(){},resize(){},destroy(){}}}document.documentElement.classList.add("has-featured-webgl"),r.setPixelRatio(1),r.setClearColor(0,0),r.outputColorSpace=Pn;const o=new gs,s=new eh(0,1,1,0,-1e3,1e3);s.position.z=10;const a=new ir,l="/zyrax-studio/assets/projects/",c={x:0,y:0},u=x=>{c.x=x.clientX,c.y=x.clientY};window.addEventListener("pointermove",u,{passive:!0});const d=new Di(1,1),f=[],m=Array.from(t.querySelectorAll(".project-item"));await Promise.all(m.map(async(x,C)=>{var se,Te,Oe;const R=x.dataset.id||((se=i[C])==null?void 0:se.id),A=x.querySelector(".project-item-main"),P=x.querySelector(".project-item-image img");P&&(P.style.opacity="0",P.setAttribute("aria-hidden","true"));const b=new Ze(x.dataset.colorBg||"#111111");let M,D;try{[M,D]=await Promise.all([a.loadAsync(`${l}${R}/home.webp`),a.loadAsync(`${l}${R}/home_depth.webp`)])}catch(Pe){console.warn("Featured WebGL textures failed for",R,Pe),P&&(P.style.opacity="1");return}M.colorSpace=Pn,M.wrapS=M.wrapT=In,M.minFilter=pt,M.magFilter=pt,M.generateMipmaps=!1,D.colorSpace=Qt,D.wrapS=D.wrapT=In,D.minFilter=pt,D.magFilter=pt,D.generateMipmaps=!1;const N=new nt(((Te=M.image)==null?void 0:Te.width)||1024,((Oe=M.image)==null?void 0:Oe.height)||1024),F=new q(0,0,-1),V=new wu(new q,1,.6,2),W=mM(1,2.2,.7,3);W.target=0;const G=new nt,k=new nt,H={u_texture:{value:M},u_depthTexture:{value:D},u_colorBg:{value:b},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:N},u_domWH:{value:new nt(1,1)},u_shiftXY:{value:G},u_focusPos:{value:F},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new nt(1,1)},u_globalRadius:{value:15},u_time:{value:0}},le=new At({uniforms:H,vertexShader:dM,fragmentShader:pM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),K=new It(d,le);K.frustumCulled=!1,K.renderOrder=10+C,K.visible=!1,o.add(K);let ye=!1,Se=0,Le=0,j=0;const oe=[0,.2,.3],ce=Pe=>{for(let Ge=0;Ge<oe.length;Ge++)if(Pe<oe[Ge])return Ge;return oe.length};window.innerWidth>=812&&(A==null||A.addEventListener("mouseenter",()=>{ye=!0}),A==null||A.addEventListener("mouseleave",()=>{ye=!1})),f.push({mesh:K,uniforms:H,focusDyn:V,focusPos:F,zoomDyn:W,shiftXY:G,shiftXYTarget:k,index:C,main:A,dom:x,update(Pe,Ge,Be,tt,z){const ke=yn(x);if(!(ke.ratio>-1&&ke.ratio<1)||!A){Le=0,K.visible=!1,H.u_showRatio.value=0;return}Le+=Pe;const je=A.getBoundingClientRect(),Ue=Math.max(1,je.width),qe=Math.max(1,je.height);H.u_domWH.value.set(Ue,qe),H.u_resolution.value.set(Ge,Be),H.u_time.value=tt,H.u_rippleStrength.value=Math.min(.15,z*.5),H.u_globalRadius.value=Math.min(Ue,qe)*.04;const ze=pe(Le,0,2,0,1,dl),U=C%2-.5,E=(1-ze)*U*-Ge*.1,B=(1-ze)*U*.1;K.position.set(je.left+Ue*.5+E,Be-(je.top+qe*.5),0),K.scale.set(Ue,qe,1),K.rotation.z=-B;const $=pe(Le,0,1.5,0,1,dl);H.u_showRatio.value=$,K.visible=$>.01;const ae=Se;if(Se=tn(Se+(ye?1:-1)*Pe,0,1),ae<Se){const Re=ce(ae),de=ce(Se);de!==Re&&k.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(pe(Se,0,.6,1,0)),de===oe.length&&k.multiplyScalar(.5)}else k.multiplyScalar(.95);G.lerp(k,.2);const ie=V.target;if(ye){const Re=Se>0?pe(Se,0,.3,1,0)*qe*.75:0;ie.x=(c.x-je.left-Ue*.5+Math.cos(tt*20)*Re)/Ue*-qe,ie.y=(c.y-je.top-qe*.5-Math.sin(tt*30)*Re)/qe*qe,ie.z=.5}else ie.x=0,ie.y=0,ie.z=-1;V.update(Pe),F.copy(V.value),W.target=ye?1:0,W.update(Pe),H.u_zoomRatio.value=W.value,j=tn(j+(ye?.75:-1)*Pe,0,1),H.u_dofRangeOffset.value=Vt.lerp(0,-.5,j),H.u_saturation.value=0,H.u_brightness.value=0,H.u_activeRatio.value=0}})}));let v=1,g=1,_=0,p=window.scrollY,w=0;const S=()=>{v=window.innerWidth,g=window.innerHeight,r.setSize(v,g,!1),s.left=0,s.right=v,s.top=g,s.bottom=0,s.updateProjectionMatrix()};return S(),window.addEventListener("resize",S),{update(x){_+=x;const C=window.scrollY,R=Math.abs(C-p)/Math.max(x,.001);p=C,w+=(Math.min(1,R*.002)-w)*.15;const P=yn(e).isActive;if(n.style.visibility=P?"visible":"hidden",!!P){for(const b of f)b.update(x,v,g,_,w);r.render(o,s)}},resize:S,destroy(){window.removeEventListener("pointermove",u),window.removeEventListener("resize",S),document.documentElement.classList.remove("has-featured-webgl"),f.forEach(x=>{x.mesh.material.dispose()}),d.dispose(),r.dispose(),n.remove()}}}function gM(){return window.innerWidth<812}function vM(i){if(!i||i._splitted)return;const e=Array.from(i.querySelectorAll(".home-reel-video-title-word"));e.forEach(t=>{const n=t.textContent;t.textContent="",t._chars=[],[...n].forEach(r=>{const o=document.createElement("span");o.className="reel-char-wrap",o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top";const s=document.createElement("span");s.className="reel-char",s.textContent=r,s.style.display="inline-block",o.appendChild(s),o._inner=s,t.appendChild(o),t._chars.push(o)}),t._randCharIndex=0}),i._splitted={words:e}}function xM(){const i=document.getElementById("home-reel"),e=document.getElementById("home-reel-thumb"),t=document.getElementById("home-reel-thumb-video");document.getElementById("home-reel-video");const n=document.getElementById("home-reel-video-container"),r=document.getElementById("home-reel-video-el"),o=document.getElementById("home-reel-video-title"),s=Array.from(document.querySelectorAll("#home-reel-video-container-top .home-reel-video-container-cross")),a=Array.from(document.querySelectorAll("#home-reel-video-container-bottom .home-reel-video-container-cross"));o&&vM(o);const l=2;let c=0,u=0,d=0,f=0,m=!1,v=!1,g=0,_=0,p=!1,w=!1,S=0;const x=R=>{var P;if(!R)return;const A=(P=R.play)==null?void 0:P.call(R);A&&typeof A.catch=="function"&&A.catch(()=>{})};return{update:R=>{var D;if(!i)return;const A=e?yn(e):null,P=n?yn(n):null,b=gM(),M=b?!!(P!=null&&P.isActive):!!A&&A.showScreenOffset>0&&(P?P.hideScreenOffset<1:!0);if(n&&n.classList.toggle("--is-visible",M),M){const N=(A==null?void 0:A.top)??0,F=(A==null?void 0:A.height)??1,V=window.innerHeight,W=N-(V-F)*.5,G=((P==null?void 0:P.top)??0)-(V-((P==null?void 0:P.height)??V))*.5;if(S=Qn(pe(window.scrollY+N,W,G,0,1)),S=Qn(pe((A==null?void 0:A.showScreenOffset)??0,.15,1.1,0,1,dt)),r&&(x(r),r.style.opacity=String(.35+S*.65)),t&&(x(t),t.style.opacity=String(1-S*.85)),e){const k=pe(S,0,1,1,1.08,dt);e.style.transform=`scale(${k})`,e.style.opacity=String(pe(S,.7,1,1,.15,dt))}if(n){const k=pe(S,0,1,48,0,dt),H=pe(S,0,1,.94,1,dt);n.style.transform=`translate3d(0, ${k}px, 0) scale(${H})`,n.style.opacity=String(.25+S*.75)}S===1||S>.9?(m=!0,v=!0):(v=!1,m=!1),p=S>.85,w=S>.85}else(D=r==null?void 0:r.pause)==null||D.call(r),S=0,m=!1,v=!1,p=!1,w=!1;if(d=tn(d+(m?R:-R),0,1e9),f=Math.min(S,Qn(f+(v?R:-R))),u=d%l,o!=null&&o._splitted&&!b){const N=o._splitted.words;for(let F=0;F<N.length;F++){const V=N[F];c-u>l-1&&(V._randCharIndex=Math.round(Math.random()*(V._chars.length-1)));for(let W=0;W<V._chars.length;W++){const G=V._chars[W];let k=pe(f-F/4-W/20,0,.6,200,0,dt);W===V._randCharIndex&&(k+=pe(u-F/10,.5,1.3,0,-100,dt)),G._inner&&(G._inner.style.transform=`translate3d(0, ${k}%, 0)`)}}}c=u,g=tn(g+(p?R:-R*2),0,1.4),_=tn(_+(w?R:-R*2),0,1.4),s.forEach((N,F)=>{const V=pe(g-F/10,0,.6,0,1,dt),W=pe(g-F/10,0,.6,0,180,dt);N.style.transform=`scale(${V}) rotate(${W}deg)`}),a.forEach((N,F)=>{const V=pe(_-F/10,0,.6,0,1,dt),W=pe(_-F/10,0,.6,0,180,dt);N.style.transform=`scale(${V}) rotate(${W}deg)`})},destroy(){}}}const vc=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new q(-.0112049,-.0141946,0),boxMax:new q(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new q(-.0180006,-.00963629,0),boxMax:new q(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],yM=`
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
`,SM=`
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
`,MM=`
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
`,wM=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function bM(){let i=document.getElementById("lines-canvas");if(i)return i;i=document.createElement("canvas"),i.id="lines-canvas",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const e=document.getElementById("ui");return e&&e.parentNode?e.parentNode.insertBefore(i,e):document.body.appendChild(i),i}async function TM(){const i=bM(),e="/zyrax-studio/",t=await Promise.all(vc.map(p=>xn(`${e}assets/models/lines/${p.fileName}.buf`))),n=new gs,r=new zn(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);let o;try{o=new wl({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(p){return console.error("Lines WebGL unavailable",p),{update(){},resize(){},destroy(){}}}o.setClearColor(0,0);const s=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;o.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.5)),o.autoClear=!0;const a=[],l=new q,c=new q,u=new ms,d=new nt;for(let p=0;p<vc.length;p++){const w=vc[p],S=t[p],x=document.querySelector(w.sectionSelector);if(!x||!S)continue;const C=new gi,R=new gi;C.add(R),n.add(C);const A=new At({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:w.aoThreshold},u_color0:{value:new Ze(w.color0)},u_color1:{value:new Ze(w.color1)},u_radius:{value:.008}},vertexShader:yM,fragmentShader:SM,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),P=new It(S,A);P.frustumCulled=!1,P.renderOrder=200,R.add(P);const b=new At({uniforms:{u_color0:{value:new Ze(w.color0)},u_color1:{value:new Ze(w.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:MM,fragmentShader:wM,side:bn,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),M=new It(new Di(2,2),b);M.frustumCulled=!1,M.renderOrder=200,R.add(M);const D=S.attributes.position.array,N=S.attributes.position.count,F=new Float32Array(N);for(let V=0;V<N;V++)F[V]=D[V*3+2];a.push({data:w,sectionEl:x,container:C,inner:R,mesh:P,mat:A,circle:M,circleMat:b,lineRatioArray:F,cpAttr:S.attributes.CP,cdAttr:S.attributes.Cd,count:N,offsetY:0,framePos:new q,frameQuat:new Un,frameScale:new q(1,1,1)})}let f=1,m=1;const v=()=>{f=window.innerWidth||1,m=window.innerHeight||1;const p=Math.sqrt(f*f+m*m),w=m/p;d.set(f/m*w,w),r.fov=60,r.aspect=f/m,r.position.set(f/2,-m/2,m/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(f/2,-m/2,0),r.updateProjectionMatrix(),o.setSize(f,m,!1)};v(),window.addEventListener("resize",v);const g=p=>{var z;const{data:w,sectionEl:S,container:x,inner:C,mat:R,circle:A,circleMat:P,lineRatioArray:b,cpAttr:M,cdAttr:D,count:N}=p,V=yn(S).top+p.offsetY,W=m,G=w.scrollToRatioFactors;let k=Qn(-(V-G[0]*W)/(G[1]*W));k=IS(k);const H=f<=812,le=.008*pe(f,540,1920,2,1)*(H?.72:1),K=f/d.x,ye=m/d.y;let Se=w.margin.x,Le=w.margin.y;H&&w.id==="goal"&&(Se=.42,Le=-.35),C.position.x=Se*K,C.position.y=Le*ye-V,C.scale.set(K,ye,1),p._showSmooth==null&&(p._showSmooth=k),p._showSmooth+=(k-p._showSmooth)*.18,R.uniforms.u_showRatio.value=p._showSmooth,R.uniforms.u_radius.value=le;const j=(z=S.dataset)==null?void 0:z.goalPhase,oe=w.id==="goal"&&(j==="black-tunnel"||j==="white");x.position.copy(p.framePos),x.quaternion.copy(p.frameQuat),x.scale.copy(p.frameScale),x.updateMatrixWorld(!0),u.min.copy(w.boxMin),u.max.copy(w.boxMax),u.applyMatrix4(C.matrixWorld),x.visible=!oe&&u.max.y>-m&&u.min.y<0&&k>.001;let ce=0,se=0;for(let ke=0;ke<N;ke++)k>=b[ke]&&(ce=ke,ke===N-1?se=0:se=(k-b[ke])/(b[ke+1]-b[ke]||1));const Te=ce,Oe=Math.min(ce+1,N-1);l.fromArray(M.array,ce*3),c.fromArray(M.array,Oe*3),l.lerp(c,se);const Pe=D.array;let Ge=Pe[Te]*(1-se)+Pe[Oe]*se;Ge=.9+.1*Ge;const Be=Qn((k-(w.aoThreshold-.02))/.04);A.position.copy(l),A.scale.set(le,le,1),P.uniforms.u_ao.value=Math.min(1,Ge+1-Be);let tt=b[Te]*(1-se)+b[Oe]*se;tt=1-Math.pow(1-tn(tt,0,1),2),P.uniforms.u_mixRatio.value=tt},_=()=>{for(const p of a)g(p);o.render(n,r)};return _(),{update:_,resize:v,setGoalOffset(p){const w=a.find(S=>S.data.id==="goal");w&&(w.offsetY=p||0)},setGoalFrame({scale:p=1,rotation:w=0,active:S=!1}={}){const x=a.find(D=>D.data.id==="goal");if(!x)return;if(!S){x.framePos.set(0,0,0),x.frameQuat.identity(),x.frameScale.set(1,1,1);return}const C=f*.5,R=-m*.5,A=new vt;A.makeTranslation(C,R,0);const P=new vt().makeRotationZ(-w),b=new vt().makeScale(p,p,1),M=new vt().makeTranslation(-C,-R,0);A.multiply(P).multiply(b).multiply(M),A.decompose(x.framePos,x.frameQuat,x.frameScale)},destroy(){window.removeEventListener("resize",v),o.dispose(),i.remove()}}}const Qf=typeof window<"u"&&(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812);function EM(i,e,t,n){var A;if(!i||!e)return{update(){},destroy(){},getFrameRect:()=>null};const r="/zyrax-studio/",o=i.querySelector("#home-goal-image-in-outer"),s=i.querySelector("#home-goal-image-in-inner"),a=i.querySelector("#home-goal-image-in"),l=i.querySelector("#home-goal-context-inner"),c=i.querySelector("#home-goal-texts"),u=i.querySelector("#home-goal-tunnel-title"),d={left:.039,top:.054,width:.925,height:.895};let f=e.querySelector("[data-goal-screen-clip]");if(!f){f=document.createElement("div"),f.setAttribute("data-goal-screen-clip",""),f.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;";const P=Array.from(e.childNodes);e.appendChild(f),P.forEach(b=>f.appendChild(b))}let m=e.querySelector("#home-goal-frame-bezel");m||(m=document.createElement("img"),m.id="home-goal-frame-bezel",m.alt="",m.setAttribute("aria-hidden","true"),m.decoding="async",e.appendChild(m));const v=()=>{const P=`${r}assets/textures/tunnels/tablet_bezel.png`;m.getAttribute("src")!==P&&(m.src=P)};v();let g="",_=null,p=(A=e.parentElement)==null?void 0:A.querySelector("[data-goal-flow-spacer]");!p&&e.parentElement&&(p=document.createElement("div"),p.setAttribute("data-goal-flow-spacer",""),p.setAttribute("aria-hidden","true"),p.style.width="100%",p.style.pointerEvents="none",p.style.height="0px",e.parentElement.insertBefore(p,e));const w=()=>{const P=s||a;if(!P)return null;const b=P.getBoundingClientRect();return b.width<8||b.height<8?null:{left:b.left,top:b.top,width:b.width,height:b.height}},S=(P,b=0,M=0)=>{if(!P)return;e.classList.add("is-windowed"),e.classList.remove("is-pinned"),p&&(p.style.height="0px");const D=window.innerWidth,N=window.innerHeight;e.style.position="fixed",e.style.left="0px",e.style.top="0px",e.style.width=`${D}px`,e.style.height=`${N}px`,e.style.right="auto",e.style.bottom="auto",e.style.borderRadius="0",e.style.overflow="hidden",e.style.zIndex="3",e.style.transform="none",e.style.background="transparent",e.style.boxShadow="none";const F=tn(M,0,1),V=P.left+P.width*d.left*(1-F),W=P.top+P.height*d.top*(1-F),G=P.width*d.width+(D-P.width*d.width)*F,k=P.height*d.height+(N-P.height*d.height)*F;f&&(f.style.inset="unset",f.style.left=`${V}px`,f.style.top=`${W}px`,f.style.right="auto",f.style.bottom="auto",f.style.width=`${Math.max(1,G)}px`,f.style.height=`${Math.max(1,k)}px`,f.style.borderRadius=F>.85?"0px":`${Math.min(P.width,P.height)*.03*(1-F)}px`,f.style.background="#000",f.style.transform=b?`rotate(${b}rad)`:"none",f.style.transformOrigin="center center"),m&&(m.style.position="absolute",m.style.inset="unset",m.style.left=`${P.left}px`,m.style.top=`${P.top}px`,m.style.width=`${P.width}px`,m.style.height=`${P.height}px`,m.style.objectFit="fill",m.style.zIndex="6",m.style.pointerEvents="none",m.style.transform=b?`rotate(${b}rad)`:"none",m.style.transformOrigin="center center",m.style.boxShadow="0 18px 60px rgba(0,0,0,0.28)")},x=()=>{var P;e.classList.remove("is-windowed"),e.style.position="",e.style.borderRadius="",e.style.transform="",e.style.width="",e.style.height="",e.style.left="",e.style.top="",e.style.right="",e.style.bottom="",e.style.zIndex="",e.style.background="",e.style.boxShadow="",e.style.overflow="",e.style.opacity="",e.style.pointerEvents="",p&&(p.style.height="0px"),f&&(f.style.left="0",f.style.top="0",f.style.right="0",f.style.bottom="0",f.style.width="100%",f.style.height="100%",f.style.inset="0",f.style.borderRadius="0",f.style.background="",f.style.transform=""),m&&(m.style.opacity="0",m.style.visibility="hidden",m.style.transform="",m.style.boxShadow=""),(P=n==null?void 0:n.setGoalFrame)==null||P.call(n,{active:!1})},C=()=>{const P=t.range("blackFrameShow").ratio,b=t.range("blackFrameIn").ratio,M=t.range("blackTunnel").ratio,D=t.between("whiteTunnel","whiteFrameOut").ratio,N=i.getBoundingClientRect(),F=window.innerHeight,V=window.innerWidth,W=N.bottom>0&&N.top<F;_=w();const G=W&&M<.02&&D<.01&&b<.999;if(G&&_){let k=tn(b,0,1);if(_.top<F*.4){const Se=tn((F*.4-_.top)/(F*.65),0,1);k=Math.max(k,pe(Se,0,1,0,1))}const H={left:0,top:0,width:V,height:F},le={left:_.left+(H.left-_.left)*k,top:_.top+(H.top-_.top)*k,width:_.width+(H.width-_.width)*k,height:_.height+(H.height-_.height)*k},K=pe(k,0,1,0,.35)*(1-k);S(le,K,k);const ye=Math.max(pe(P,0,.2,.35,1),N.top<F*.85?1:0);if(e.style.opacity=String(ye),e.style.pointerEvents="none",document.documentElement.classList.add("is-goal-window"),document.documentElement.style.background="",document.body.style.background="",m&&(m.style.opacity=String(pe(k,0,.75,1,0)*ye),m.style.visibility=k>.92?"hidden":"visible"),o&&(o.style.visibility=k>.98?"hidden":"visible"),u&&(u.style.visibility=k>.55?"":"hidden"),l&&!Qf){const Se=pe(k,0,1,0,F*.12);l.style.transform=`translate3d(0, ${-Se}px, 0)`}if(c&&!Qf&&_){const Se=i.querySelector("#home-goal-context"),Le=(Se==null?void 0:Se.getBoundingClientRect().top)??0,j=Se&&parseFloat(getComputedStyle(Se).paddingTop)||0,oe=_.top-Le-j+_.height*.5;c.style.top=`${oe}px`,c.style.transform="translateY(-50%)"}return n!=null&&n.setGoalFrame&&n.setGoalFrame({active:k>.01,scale:pe(k,0,1,1,2.4),rotation:K}),g!=="window"&&(g="window",window.dispatchEvent(new Event("resize"))),{mode:"window",blackFrameIn:k,blackFrameShow:P,frameRect:_}}return g==="window"?(x(),document.documentElement.classList.remove("is-goal-window"),e.style.opacity="",e.style.pointerEvents="",o&&(o.style.visibility="hidden"),l&&(l.style.transform=""),u&&(u.style.visibility=""),g="full",window.dispatchEvent(new Event("resize"))):!G&&o&&M>.05&&(o.style.visibility="hidden",m&&(m.style.opacity="0",m.style.visibility="hidden")),(!W||N.top>F*.9)&&m&&(m.style.opacity="0",m.style.visibility="hidden"),{mode:g||"full",blackFrameIn:b,blackFrameShow:P,frameRect:_}},R=()=>{v(),C()};return window.addEventListener("resize",R),{update:C,destroy(){window.removeEventListener("resize",R),m==null||m.remove(),x()},getFrameRect:()=>_}}const ed="/zyrax-studio/assets/audios/",AM={generic:"generic.ogg",cinematic_0:"cinematic_0.ogg",cinematic_2:"cinematic_2.ogg",cinematic_3:"cinematic_3.ogg",generic_end:"generic_end.ogg"},RM={hover:["hover_0.ogg","hover_1.ogg","hover_2.ogg"],click:["click_0.ogg","click_1.ogg"],focus:["focus_0.ogg","focus_1.ogg","focus_2.ogg"],page:["page_0.ogg","page_1.ogg"],glass:["glass_broken.ogg"]};function td(i,{loop:e=!1,volume:t=1}={}){const n=new Audio(i);return n.preload="auto",n.loop=e,n.volume=t,n.crossOrigin="anonymous",n}function CM(){const i=document.getElementById("header-right-sound-btn"),e={};for(const[x,C]of Object.entries(AM))e[x]=td(`${ed}${C}`,{loop:!0,volume:0});const t={};for(const[x,C]of Object.entries(RM))t[x]=C.map(R=>td(`${ed}${R}`,{loop:!1,volume:.85}));let n=!1,r=!1,o=null,s=null,a=null,l=1,c=1.2;const u={hover:0,click:0,focus:0,page:0,glass:0},d=async()=>{if(!r){r=!0;try{const x=e.generic;x.volume=0,await x.play(),x.pause(),x.currentTime=0}catch{r=!1}}},f=x=>{if(!n||!r)return;const C=t[x];if(!(C!=null&&C.length))return;const R=u[x]%C.length;u[x]=R+1;const A=C[R].cloneNode();A.volume=x==="focus"?.4:x==="glass"?1:.85,A.play().catch(()=>{})},m=x=>{n=!!x,i==null||i.classList.toggle("is-on",n),n?d().then(()=>{o||v("generic",.8)}):o&&e[o]&&(e[o].volume=0)},v=(x,C=1.2)=>{if(!e[x]||o===x)return;s=o,a=x,l=0,c=Math.max(.05,C),o=x;const R=e[x];R.volume=0,n&&r&&R.play().catch(()=>{})},g=x=>{if(r)if(a&&l<1){l=Math.min(1,l+x/c);const C=l*l*(3-2*l);s&&e[s]&&(e[s].volume=n?1-C:0,C>=1&&(e[s].pause(),e[s].currentTime=0)),e[a]&&(e[a].volume=n?C:0,n&&e[a].paused&&e[a].play().catch(()=>{})),C>=1&&(s=null,a=null)}else o&&e[o]&&(e[o].volume=n?1:0,n&&e[o].paused&&e[o].play().catch(()=>{}))};let _=0;const p=x=>{n&&(x==="window"?v("generic",1):x==="title"||x==="black-tunnel"?v("cinematic_0",1.4):x==="white"?v("cinematic_3",1.6):v("generic",1.2))},w=({blackFrameInRatio:x=0,blackTunnelRatio:C=0,whiteTunnelRatio:R=0,astronautDropRatio:A=0}={})=>{n&&(x>.5&&C===0||C>0&&R===0?(_=0,v("cinematic_0",.8)):R>0&&A<=.8?v("cinematic_3",.8):R>0&&A>.8&&v("generic_end",1),A===0?_=1:_===1&&(f("glass"),_=2))};i==null||i.addEventListener("click",async()=>{await d(),m(!n),f("click")}),document.querySelectorAll("#header-right-talk-btn, #header-right-menu-btn, .header-menu-link").forEach(x=>{x.addEventListener("mouseenter",()=>f("hover")),x.addEventListener("click",()=>f("click"))});const S=()=>{d(),window.removeEventListener("pointerdown",S)};return window.addEventListener("pointerdown",S,{passive:!0}),{update:g,syncGoalPhase:p,syncTunnelAudio:w,playSfx:f,setEnabled:m,get enabled(){return n},destroy(){Object.values(e).forEach(x=>{x.pause(),x.src=""})}}}const qo=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,Tl=()=>{var e;const i=((e=window.visualViewport)==null?void 0:e.height)||window.innerHeight;document.documentElement.style.setProperty("--vh",`${i*.01}px`)};Tl();window.addEventListener("resize",Tl);var sd;(sd=window.visualViewport)==null||sd.addEventListener("resize",Tl);var ad;(ad=window.visualViewport)==null||ad.addEventListener("scroll",Tl);const lr=new dm({duration:qo?.7:1.35,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!qo,syncTouch:!1,syncTouchLerp:0,touchInertiaMultiplier:0,wheelMultiplier:qo?.9:.82,touchMultiplier:qo?1:1.1});window.lenis=lr;let Ps=0,Ds=0,Gs=!1,$p=0;window.addEventListener("wheel",()=>{$p=performance.now(),Gs=!0},{passive:!0});window.addEventListener("pointerdown",()=>{Gs=!0},{passive:!0});const PM="/zyrax-studio/assets/projects/",nd=document.getElementById("project-list");nd&&(nd.innerHTML=lp.map(i=>`
    <a class="project-item project-type-website" href="${i.url}" target="_blank" rel="noreferrer"
       data-id="${i.id}" data-color-bg="${i.colorBg}" data-color-text="${i.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${i.colorBg}">
          <img src="${PM}${i.id}/home.webp" alt="${i.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${i.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
          <div class="project-item-line-2-inner">${i.title}</div>
        </div>
      </div>
    </a>`).join(""));const DM=document.getElementById("hero-canvas"),LM=document.getElementById("home-hero-visual-container"),Ar=document.getElementById("home-hero"),xc=document.getElementById("home-hero-title"),yc=document.getElementById("home-hero-visual-container"),id=document.getElementById("home-hero-scroll-container"),Dn=document.getElementById("home-goal"),IM=document.getElementById("goal-tunnel-canvas"),UM=document.getElementById("home-goal-tunnel-title"),Zp=document.getElementById("home-goal-tunnel-sticky"),FM=aM(Dn,UM,Zp),NM=Dn?nh(Dn):null,ml=CM();let Pt=null,rd="";const OM=cM(),zM=fM(),BM=xM();let pi=null,tl=null;const kM=Dn?EM(Dn,Zp,NM,{setGoalFrame:(...i)=>{var e;return(e=pi==null?void 0:pi.setGoalFrame)==null?void 0:e.call(pi,...i)}}):{update(){}};let od=performance.now();Vu.ticker.add(i=>{var n,r,o,s;const e=performance.now(),t=Math.min(.05,(e-od)/1e3);if(od=e,!qo&&(Pt!=null&&Pt.getAutoScrollSpeed&&(Ps=Pt.getAutoScrollSpeed()),e-$p>80&&Math.abs(Ps)>.01&&(Gs=!1),Ds+=Math.abs(Ps)>0&&!Gs?t:-1,Ds=Math.max(0,Math.min(1,Ds)),!Gs&&Ds>0&&Math.abs(Ps)>.01)){const l=window.innerHeight,c=Ps*l*t*Ds*.55,u=(lr.animatedScroll??lr.scroll??window.scrollY)+c;lr.scrollTo(u,{immediate:!0,force:!0})}lr.raf(i*1e3),OM.update(t),zM.update(t),tl==null||tl.update(t),BM.update(t),pi==null||pi.update(),(n=Pt==null?void 0:Pt.tickFrame)==null||n.call(Pt,t),ml.update(t),Pt!=null&&Pt.getAstronautDropRatio&&ml.syncTunnelAudio({blackFrameInRatio:((r=Dn==null?void 0:Dn.dataset)==null?void 0:r.goalPhase)==="window"?0:1,blackTunnelRatio:((o=Dn==null?void 0:Dn.dataset)==null?void 0:o.goalPhase)==="black-tunnel"?1:0,whiteTunnelRatio:((s=Pt.getWhiteTunnelRatio)==null?void 0:s.call(Pt))??0,astronautDropRatio:Pt.getAstronautDropRatio()??0})});Vu.ticker.lagSmoothing(0);lr.on("scroll",()=>{var o,s;FM.updateScroll(),kM.update(),Pt==null||Pt.updateScroll(),pi==null||pi.update();const i=((o=Dn==null?void 0:Dn.dataset)==null?void 0:o.goalPhase)||"";if(i&&i!==rd&&(rd=i,ml.syncGoalPhase(i)),Pt!=null&&Pt.getAstronautDropRatio&&ml.syncTunnelAudio({whiteTunnelRatio:((s=Pt.getWhiteTunnelRatio)==null?void 0:s.call(Pt))??0,astronautDropRatio:Pt.getAstronautDropRatio()??0}),!Ar)return;const e=Ar.getBoundingClientRect(),t=window.innerHeight,n=Math.max(0,Math.min(1,-e.top/Math.max(e.height,1))),r=Math.max(0,Math.min(1,(t-e.bottom)/t));xc&&(xc.style.transform=`translate3d(0, ${n*-12}vh, 0)`,xc.style.opacity=String(Math.max(0,1-n*1.2))),yc&&(yc.style.transform=`translate3d(0, ${n*18}vh, 0) scale(${1-n*.08})`,yc.style.opacity=String(Math.max(0,1-Math.max(n,r)*.85))),id&&(id.style.opacity=String(Math.max(0,1-n*2)))});TM().then(i=>{pi=i}).catch(i=>console.error("Scroll lines failed",i));sM(IM,Dn).then(i=>{Pt=i}).catch(i=>{console.error("Goal tunnel failed",i)}).finally(()=>{AS(DM,LM).then(()=>Ar==null?void 0:Ar.classList.add("is-in")).catch(i=>{console.error("Balloons hero failed",i),Ar==null||Ar.classList.add("is-in")})});qo||_M(lp).then(i=>{tl=i}).catch(i=>console.error("Featured WebGL failed",i));function Kp(i,e="word"){if(!i)return;const n=i.textContent.trim().split(/\s+/);i.textContent="",n.forEach((r,o)=>{const s=document.createElement("span");s.className=e,s.textContent=r,s.style.transitionDelay=`${o*35}ms`,i.appendChild(s),i.appendChild(document.createTextNode(" "))})}Kp(document.getElementById("home-hero-title"));Kp(document.getElementById("home-hero-scroll"));requestAnimationFrame(()=>{var i;(i=document.getElementById("home-hero-title"))==null||i.classList.add("is-in")});const HM=document.querySelectorAll(".home-hero-scroll-container-cross");HM.forEach((i,e)=>{i.style.transitionDelay=`${.15+e*.08}s`});const Sc=document.getElementById("header"),Mc=document.getElementById("header-container"),Cr=document.getElementById("header-background"),wc=document.getElementById("header-menu"),ts=document.getElementById("header-right-menu-btn");let rr=!1;const sa=i=>{rr=!!i,Sc==null||Sc.classList.toggle("--menu-opened",rr),Mc==null||Mc.classList.toggle("--opened",rr),Cr==null||Cr.classList.toggle("--opened",rr),wc==null||wc.classList.toggle("--opened",rr),ts==null||ts.classList.toggle("--opened",rr),Cr&&(Cr.style.opacity=rr?window.innerWidth>=1e3?"0.2":"1":"0")};ts==null||ts.addEventListener("click",i=>{i.stopPropagation(),sa(!rr)});Cr==null||Cr.addEventListener("click",()=>sa(!1));document.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",e=>{const t=i.getAttribute("data-scroll-to"),n=i.getAttribute("href");sa(!1),t==="contact"?(e.preventDefault(),lr.scrollTo("#footer-section")):n&&n.startsWith("#")&&(e.preventDefault(),lr.scrollTo(n==="#top"?0:n))})});document.addEventListener("click",i=>{var t,n;if(!rr)return;const e=i.target;(t=e==null?void 0:e.closest)!=null&&t.call(e,"#header-menu")||(n=e==null?void 0:e.closest)!=null&&n.call(e,"#header-right-menu-btn")||sa(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&sa(!1)});var ld;(ld=document.querySelector("[data-reel]"))==null||ld.addEventListener("click",i=>{const e=i.currentTarget;e.classList.toggle("is-playing");const t=e.querySelectorAll(".home-reel-video-title-word");t[0]&&(t[0].textContent=e.classList.contains("is-playing")?"PAUSE":"PLAY"),window.open("https://kianpk.github.io/zyrax-drive/","_blank","noreferrer")});var cd;(cd=document.querySelector("#end-bottom"))==null||cd.addEventListener("click",i=>{i.preventDefault(),lr.scrollTo("#footer-section")});
