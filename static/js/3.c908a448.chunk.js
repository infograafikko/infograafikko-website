(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return d}));var i,o=e(2),a=e(3);const c=Object(o.a)("div")(n=>"\n    position: relative;\n    background-color: ".concat(n.background,";\n    width: 100%;\n\n  ")),r=Object(a.b)(i||(s=[" \n    0% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n    100% { background-position: 0% 50%; }\n"],l||(l=s.slice(0)),i=Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(l)}}))));var s,l;const d=Object(o.a)("div")(n=>"\n    position: relative;\n    background: linear-gradient(270deg, ".concat(n.background1,", ").concat(n.background2,");\n    background-size: 400% 400%;\n    width: 100%;\n\n    animation-name: ").concat(r,";\n    animation-duration: 40s;\n    animation-iteration-count: infinite;\n\n  "))},11:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a}));var i=e(0);function o(n){const t=()=>{n(window.scrollY)};Object(i.n)(()=>window.addEventListener("scroll",t,{passive:!0})),Object(i.m)(()=>window.removeEventListener("scroll",t))}function a(n,t,e,o){const a=()=>{const i=document.querySelector(n);if(null!==i){const n=(i.getBoundingClientRect().top+i.getBoundingClientRect().height/2)/window.innerHeight;n<1&&n>-1&&function(n,t,e,i,o){const a=n.querySelector(i),c=n.querySelector(o),r=[...a.classList];r.includes("preAnimation")&&t<=e?(a.classList.add("animateHeart"),a.classList.remove("preAnimation"),a.classList.add("showInSVG"),a.classList.remove("hideInSVG"),c.classList.add("hideInSVG"),c.classList.remove("showInSVG")):r.includes("animateHeart")&&t>e&&(a.classList.remove("animateHeart"),a.classList.add("preAnimation"),a.classList.remove("showInSVG"),a.classList.add("hideInSVG"),c.classList.remove("hideInSVG"),c.classList.add("showInSVG"))}(i,n,t,e,o)}};Object(i.n)(()=>window.addEventListener("scroll",a,{passive:!0})),Object(i.m)(()=>window.removeEventListener("scroll",a))}},12:function(n,t,e){n.exports=e.p+"static/media/lead-laptop.5de578ef.png"},13:function(n,t,e){n.exports=e.p+"static/media/lead-phone-infographic.d2b8a33e.svg"},14:function(n,t,e){n.exports=e.p+"static/media/lead-phone-plain.63aa8071.svg"},46:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return M}));var i=e(0),o=e(10);var a=e(2),c=e(5);const r=Object(a.a)("div")(n=>"\n    display: flex;\n    max-width: ".concat(c.a.xl,";\n    margin: auto;\n    padding: 0 16px;\n\n    @media only screen and (max-width: ").concat(c.a.m,") {\n        flex-direction: column;\n    }\n  ")),s=Object(a.a)("div")(n=>"\n    padding-top: 36px;\n    margin-right: 10px;\n    width: 40%;\n    line-height: 1.2;\n\n    @media only screen and (max-width: ".concat(c.a.l,") {\n        width: 45%;\n    }\n\n    @media only screen and (max-width: ").concat(c.a.m,") {\n        width: calc(100% - 20px);\n    }\n\n  ")),l=Object(a.a)("h1")(n=>"\n    font-family: 'Palanquin', sans-serif;\n    font-weight: 700;\n    font-size: 41px;\n    margin: 0;\n\n    @media only screen and (max-width: ".concat(c.a.l,") {\n        font-size: 36px;\n    }\n\n  ")),d=Object(a.a)("p")(n=>"\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 18px;\n    margin: 24px 0;\n    line-height: 1.2;\n\n    @media only screen and (max-width: ".concat(c.a.m,") {\n        width: calc(100% - 20px);\n    }\n  ")),h=Object(a.a)("div")(n=>"\n    margin: 24px;\n    flex-direction: row;\n    position: relative;\n    height: ".concat(n.height,";\n    max-width: calc(100% - 20px);\n\n  ")),u=Object(a.a)("div")(n=>"\n  position: absolute;\n  height: ".concat(n.height,";\n  left: ").concat(n.left,";\n  top: ").concat(n.top,";\n\n  @media only screen and (max-width: ").concat(c.a.m,") {\n      height: ").concat(n.heightM,";\n      left: ").concat(n.leftM,";\n  }\n\n  @media only screen and (max-width: ").concat(c.a.s,") {\n      height: ").concat(n.heightS,";\n      left: ").concat(n.leftS,";\n  }\n")),f=Object(a.a)("img")(n=>"\n  height: 100%;\n"),m=Object(a.a)("img")(n=>"\n  clip-path: inset(".concat(n.inset," round ").concat(n.insetRound,");\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: ").concat(n.top,";\n\n  @media only screen and (max-width: ").concat(c.a.m,") {\n    clip-path: inset(").concat(n.insetMobile," round ").concat(n.insetRoundMobile,");\n    top: ").concat(n.topMobile,";\n  }\n")),b=Object(a.a)("img")(n=>"\n    position: absolute;\n    height: ".concat(n.height,";\n    left: ").concat(n.left,";\n    top: ").concat(n.top,";\n\n    @media only screen and (max-width: ").concat(c.a.m,") {\n        height: ").concat(n.heightM,";\n        left: ").concat(n.leftM,";\n    }\n\n    @media only screen and (max-width: ").concat(c.a.s,") {\n        height: ").concat(n.heightS,";\n        left: ").concat(n.leftS,";\n    }\n  "));var p=e(9),g=e(12),v=e.n(g),x=e(13),w=e.n(x),y=e(14),j=e.n(y),O=e(11);function k(n,t){const e=10*t,i=37-n/e+"%";return"".concat(1.5+n/e+"%"," 4% ").concat(i," 4%")}const S=(n,t)=>-n/(10*t)+"%";function L(n){let{title:t,text:e,buttonText:o,buttonPath:a,ref:c}=n;const[g,x]=Object(i.h)(0);return Object(O.a)(x),Object(i.c)(r,{ref(n){"function"===typeof c?c(n):c=n},get children(){return[Object(i.c)(s,{get children(){return[Object(i.c)(l,{children:t}),Object(i.c)(d,{children:e}),Object(i.c)(p.a,{buttonType:"primary",buttonPath:a,text:o})]}}),Object(i.c)(h,{height:"70vh",get children(){return[Object(i.c)(b,{left:"10vw",leftM:"10vw",leftS:"10vw",top:"40px",height:"60vh",heightM:"50vh",heighS:"50vh",src:v.a,alt:"Infografikka esitt\xe4\xe4, miten kiviaines kiert\xe4\xe4 ty\xf6maalla"}),Object(i.c)(u,{left:"10px",leftM:"10px",leftS:"-10px",height:"70vh",heightM:"70vh",heightS:"70vh",get children(){return[Object(i.c)(f,{src:j.a,alt:"Puhelin upotettuna taittoon - p\xe4\xe4ll\xe4 n\xe4kyy infografiikkaa"}),Object(i.c)(m,{src:w.a,get inset(){return k(g(),2.5)},get insetMobile(){return k(g(),5)},insetRound:"3vh",insetRoundMobile:"24px",get top(){return S(g(),2.5)},get topMobile(){return S(g(),5)},alt:"Infografikkaa esitt\xe4\xe4, miten voit optimoida markkinointiviestej\xe4si neurotutkimuksen avulla."})]}})]}})]}})}function M(){let n;const t=Object(i.j)(async()=>{var t,i;return await(t=n,i="img",new Promise(n=>{let e=0;const o=()=>{const a=Array.from(t.querySelectorAll(i));a.every(n=>1==n.complete&&n.naturalHeight>0)||e>9?n(a):(e+=1,setTimeout(()=>o(),50))};o()})),e.e(2).then(e.bind(null,45))});return[Object(i.c)(o.a,{background1:"#ffb8d6",background2:"#f7b76d",get children(){return Object(i.c)(L,{title:"Infografiikalla viestit selke\xe4mmin, vaikuttavammin ja visuaalisemmin",text:"Maailma on t\xe4ynn\xe4 tietoa, joka ansaitsee tulla n\xe4ytetyksi. Autan yrityksi\xe4, hallintoa ja yhteis\xf6j\xe4 esitt\xe4m\xe4\xe4n tietoa visuaalisemmin ja kiinnostavammin. Tutustu, miten infografiikka auttaa juuri sinun yrityst\xe4si.",buttonText:"Ota yhtett\xe4 >",buttonPath:"/ota-yhteytta",ref(t){"function"===typeof n?n(t):n=t}})}}),Object(i.c)(t,{})]}},9:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e(0),o=e(2),a=e(4),c=e(5);function r(n){let{buttonType:t="primary",color:e="#f7931e",border:o="#f7931e",textColor:a="black",colorSecondary:c="white",borderSecondary:r="#f7931e",textColorSecondary:d="black",fontFamily:h="Palanquin",fontWeight:u="600",fontSize:f="16px",text:m="placeholder",buttonPath:b="",target:p="",onClick:g}=n;const v="primary"==t?{color:e,border:o,textColor:a,fontFamily:h,fontWeight:u,fontSize:f}:{color:c,border:r,textColor:d,fontFamily:h,fontWeight:u,fontSize:f};return b.length>1?Object(i.c)(l,{href:b,target:p,get children(){return Object(i.c)(s,Object(i.k)(v,{children:m}))}}):Object(i.c)(s,Object(i.k)({name:"subscribe",id:"mc-embedded-subscribe",class:"button",type:"submit",onClick:g},v,{children:m}))}const s=Object(o.a)("button")(n=>"\n    background-color: ".concat(n.color,";\n    border: 3px solid ").concat(n.border,";\n    font-family: ").concat(n.fontFamily,";\n    font-size: ").concat(n.fontSize,";\n    font-weight: ").concat(n.fontWeight,";\n    border-radius: 24px;\n    padding: 4px 16px;\n    cursor: pointer;\n    text-decoration: none;\n    color: ").concat(n.textColor,";\n    width: fit-content;\n    margin-right: 12px;\n\n    @media only screen and (max-width: ").concat(c.a.s,") {\n        margin-top: ").concat(""!==n.target&&"12px",";\n    }\n    \n  ")),l=Object(o.a)(a.a)(n=>"\n    text-decoration: none;\n    cursor: pointer;\n  ")}}]);