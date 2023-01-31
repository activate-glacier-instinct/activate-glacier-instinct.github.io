import{S as H,i as D,s as O,k as x,q as M,a as C,l as L,m as b,r as z,h as p,c as Y,n as u,b as j,C as d,u as A,B as X,f as S,d as G,t as B,K as k,o as F,w as N,x as R,y as I,z as J,g as K}from"../../../chunks/index-ca27565a.js";class v{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.resetToStart=v.isSettingTrue(this.settings["reset-to-start"]),this.glare=v.isSettingTrue(this.settings.glare),this.glarePrerender=v.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=v.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=v.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(t){return t===""||t===!0||t===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(t.gamma===null||t.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,s=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=e/this.width,r=s/this.height,g=t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),c=t.beta-(this.settings.gyroscopeMinAngleY+this.betazero),i=g/n,y=c/r;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:i+this.left,clientY:y+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t,e;this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1);let s=(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),n=(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),r=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:s,tiltY:n,percentageX:t*100,percentageY:e*100,angle:r}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:t.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const t=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${t}px`,height:`${t}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},s={};for(var n in e)if(n in t)s[n]=t[n];else if(this.element.hasAttribute("data-tilt-"+n)){let r=this.element.getAttribute("data-tilt-"+n);try{s[n]=JSON.parse(r)}catch{s[n]=r}}else s[n]=e[n];return s}static init(t,e){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(s=>{"vanillaTilt"in s||(s.vanillaTilt=new v(s,e))})}}typeof document<"u"&&(window.VanillaTilt=v,v.init(document.querySelectorAll("[data-tilt]")));function U(h){let t,e,s,n=h[0].title+"",r,g,c,i=h[0].where+"",y,l,o,a=h[0].type+"",m,_;return{c(){t=x("li"),e=x("article"),s=x("p"),r=M(n),g=C(),c=x("p"),y=M(i),l=C(),o=x("p"),m=M(a),this.h()},l(f){t=L(f,"LI",{class:!0,"data-tilt":!0,"data-tilt-glare":!0,"data-tilt-max-glare":!0});var E=b(t);e=L(E,"ARTICLE",{class:!0});var w=b(e);s=L(w,"P",{class:!0});var T=b(s);r=z(T,n),T.forEach(p),g=Y(w),c=L(w,"P",{class:!0});var P=b(c);y=z(P,i),P.forEach(p),l=Y(w),o=L(w,"P",{class:!0});var W=b(o);m=z(W,a),W.forEach(p),w.forEach(p),E.forEach(p),this.h()},h(){u(s,"class","svelte-462uq1"),u(c,"class","svelte-462uq1"),u(o,"class","svelte-462uq1"),u(e,"class","card-container svelte-462uq1"),u(t,"class",_="card hologram "+h[0].cardSize+" svelte-462uq1"),u(t,"data-tilt",""),u(t,"data-tilt-glare",""),u(t,"data-tilt-max-glare","0.8")},m(f,E){j(f,t,E),d(t,e),d(e,s),d(s,r),d(e,g),d(e,c),d(c,y),d(e,l),d(e,o),d(o,m)},p(f,[E]){E&1&&n!==(n=f[0].title+"")&&A(r,n),E&1&&i!==(i=f[0].where+"")&&A(y,i),E&1&&a!==(a=f[0].type+"")&&A(m,a),E&1&&_!==(_="card hologram "+f[0].cardSize+" svelte-462uq1")&&u(t,"class",_)},i:X,o:X,d(f){f&&p(t)}}}function Q(h,t,e){let{cardData:s}=t;return h.$$set=n=>{"cardData"in n&&e(0,s=n.cardData)},[s]}class Z extends H{constructor(t){super(),D(this,t,Q,U,O,{cardData:0})}}function $(h,t,e){const s=h.slice();return s[2]=t[e],s}function q(h){let t,e;return t=new Z({props:{cardData:h[2]}}),{c(){N(t.$$.fragment)},l(s){R(t.$$.fragment,s)},m(s,n){I(t,s,n),e=!0},p:X,i(s){e||(S(t.$$.fragment,s),e=!0)},o(s){B(t.$$.fragment,s),e=!1},d(s){J(t,s)}}}function V(h){let t,e,s,n,r,g,c=h[0],i=[];for(let l=0;l<c.length;l+=1)i[l]=q($(h,c,l));const y=l=>B(i[l],1,1,()=>{i[l]=null});return{c(){t=x("section"),e=x("h1"),s=M("Work Experience"),n=C(),r=x("ul");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){t=L(l,"SECTION",{class:!0});var o=b(t);e=L(o,"H1",{class:!0});var a=b(e);s=z(a,"Work Experience"),a.forEach(p),n=Y(o),r=L(o,"UL",{class:!0});var m=b(r);for(let _=0;_<i.length;_+=1)i[_].l(m);m.forEach(p),o.forEach(p),this.h()},h(){u(e,"class","accent"),u(r,"class","card-list svelte-113ier9"),u(t,"class","page screen svelte-113ier9")},m(l,o){j(l,t,o),d(t,e),d(e,s),d(t,n),d(t,r);for(let a=0;a<i.length;a+=1)i[a].m(r,null);g=!0},p(l,[o]){if(o&1){c=l[0];let a;for(a=0;a<c.length;a+=1){const m=$(l,c,a);i[a]?(i[a].p(m,o),S(i[a],1)):(i[a]=q(m),i[a].c(),S(i[a],1),i[a].m(r,null))}for(K(),a=c.length;a<i.length;a+=1)y(a);G()}},i(l){if(!g){for(let o=0;o<c.length;o+=1)S(i[o]);g=!0}},o(l){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)B(i[o]);g=!1},d(l){l&&p(t),k(i,l)}}}function tt(h,t,e){let{data:s}=t;const{cards:n}=s;return F(()=>{const r=document.querySelectorAll(".card"),g=Array.from(r);v.init(g)}),h.$$set=r=>{"data"in r&&e(1,s=r.data)},[n,s]}class st extends H{constructor(t){super(),D(this,t,tt,V,O,{data:1,cards:0})}get cards(){return this.$$.ctx[0]}}export{st as default};