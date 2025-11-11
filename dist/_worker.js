var yt=Object.defineProperty;var Me=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var u=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),ke=(e,t,s)=>t.has(e)||Me("Cannot "+s);var o=(e,t,s)=>(ke(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,i)=>(ke(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),f=(e,t,s)=>(ke(e,t,"access private method"),s);var Le=(e,t,s,i)=>({set _(a){p(e,t,a,s)},get _(){return o(e,t,i)}});var _e=(e,t,s)=>(i,a)=>{let r=-1;return n(0);async function n(c){if(c<=r)throw new Error("next() called multiple times");r=c;let l,d=!1,m;if(e[c]?(m=e[c][0][0],i.req.routeIndex=c):m=c===e.length&&a||void 0,m)try{l=await m(i,()=>n(c+1))}catch(g){if(g instanceof Error&&t)i.error=g,l=await t(g,i),d=!0;else throw g}else i.finalized===!1&&s&&(l=await s(i));return l&&(i.finalized===!1||d)&&(i.res=l),i}},jt=Symbol(),Et=async(e,t=Object.create(null))=>{const{all:s=!1,dot:i=!1}=t,r=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Ct(e,{all:s,dot:i}):{}};async function Ct(e,t){const s=await e.formData();return s?St(s,t):{}}function St(e,t){const s=Object.create(null);return e.forEach((i,a)=>{t.all||a.endsWith("[]")?At(s,a,i):s[a]=i}),t.dot&&Object.entries(s).forEach(([i,a])=>{i.includes(".")&&($t(s,i,a),delete s[i])}),s}var At=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},$t=(e,t,s)=>{let i=e;const a=t.split(".");a.forEach((r,n)=>{n===a.length-1?i[r]=s:((!i[r]||typeof i[r]!="object"||Array.isArray(i[r])||i[r]instanceof File)&&(i[r]=Object.create(null)),i=i[r])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Tt(e),i=Ze(s);return kt(i,t)},Tt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,i)=>{const a=`@${i}`;return t.push([a,s]),a}),{groups:t,path:e}},kt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[i]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(i)){e[a]=e[a].replace(i,t[s][1]);break}}return e},we={},Rt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const i=`${e}#${t}`;return we[i]||(s[2]?we[i]=t&&t[0]!==":"&&t[0]!=="*"?[i,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:we[i]=[e,s[1],!0]),we[i]}return null},Ne=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ot=e=>Ne(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let i=s;for(;i<t.length;i++){const a=t.charCodeAt(i);if(a===37){const r=t.indexOf("?",i),n=t.slice(s,r===-1?void 0:r);return Ot(n.includes("%25")?n.replace(/%25/g,"%2525"):n)}else if(a===63)break}return t.slice(s,i)},Dt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let i="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))i+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&i===""?s.push("/"):s.push(i);const r=a.replace("?","");i+="/"+r,s.push(i)}else i+="/"+a}),s.filter((a,r,n)=>n.indexOf(a)===r)},Re=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ne(e,it):e):e,st=(e,t,s)=>{let i;if(!s&&t&&!/[%+]/.test(t)){let n=e.indexOf(`?${t}`,8);for(n===-1&&(n=e.indexOf(`&${t}`,8));n!==-1;){const c=e.charCodeAt(n+t.length+1);if(c===61){const l=n+t.length+2,d=e.indexOf("&",l);return Re(e.slice(l,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";n=e.indexOf(`&${t}`,n+1)}if(i=/[%+]/.test(e),!i)return}const a={};i??(i=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const n=e.indexOf("&",r+1);let c=e.indexOf("=",r);c>n&&n!==-1&&(c=-1);let l=e.slice(r+1,c===-1?n===-1?void 0:n:c);if(i&&(l=Re(l)),r=n,l==="")continue;let d;c===-1?d="":(d=e.slice(c+1,n===-1?void 0:n),i&&(d=Re(d))),s?(a[l]&&Array.isArray(a[l])||(a[l]=[]),a[l].push(d)):a[l]??(a[l]=d)}return t?a[t]:a},Pt=st,Nt=(e,t)=>st(e,t,!0),it=decodeURIComponent,qe=e=>Ne(e,it),re,T,_,rt,nt,De,B,ze,at=(ze=class{constructor(e,t="/",s=[[]]){h(this,_);u(this,"raw");h(this,re);h(this,T);u(this,"routeIndex",0);u(this,"path");u(this,"bodyCache",{});h(this,B,e=>{const{bodyCache:t,raw:s}=this,i=t[e];if(i)return i;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,T,s),p(this,re,{})}param(e){return e?f(this,_,rt).call(this,e):f(this,_,nt).call(this)}query(e){return Pt(this.url,e)}queries(e){return Nt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,i)=>{t[i]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Et(this,e))}json(){return o(this,B).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,B).call(this,"text")}arrayBuffer(){return o(this,B).call(this,"arrayBuffer")}blob(){return o(this,B).call(this,"blob")}formData(){return o(this,B).call(this,"formData")}addValidatedData(e,t){o(this,re)[e]=t}valid(e){return o(this,re)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[jt](){return o(this,T)}get matchedRoutes(){return o(this,T)[0].map(([[,e]])=>e)}get routePath(){return o(this,T)[0].map(([[,e]])=>e)[this.routeIndex].path}},re=new WeakMap,T=new WeakMap,_=new WeakSet,rt=function(e){const t=o(this,T)[0][this.routeIndex][1][e],s=f(this,_,De).call(this,t);return s&&/\%/.test(s)?qe(s):s},nt=function(){const e={},t=Object.keys(o(this,T)[0][this.routeIndex][1]);for(const s of t){const i=f(this,_,De).call(this,o(this,T)[0][this.routeIndex][1][s]);i!==void 0&&(e[s]=/\%/.test(i)?qe(i):i)}return e},De=function(e){return o(this,T)[1]?o(this,T)[1][e]:e},B=new WeakMap,ze),Ft={Stringify:1},ot=async(e,t,s,i,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(c=>c({phase:t,buffer:a,context:i}))).then(c=>Promise.all(c.filter(Boolean).map(l=>ot(l,t,!1,i,a))).then(()=>a[0]))):Promise.resolve(e)},Mt="text/plain; charset=UTF-8",Oe=(e,t)=>({"Content-Type":e,...t}),xe,he,N,ne,F,$,fe,oe,le,K,ve,be,H,ie,Ve,Lt=(Ve=class{constructor(e,t){h(this,H);h(this,xe);h(this,he);u(this,"env",{});h(this,N);u(this,"finalized",!1);u(this,"error");h(this,ne);h(this,F);h(this,$);h(this,fe);h(this,oe);h(this,le);h(this,K);h(this,ve);h(this,be);u(this,"render",(...e)=>(o(this,oe)??p(this,oe,t=>this.html(t)),o(this,oe).call(this,...e)));u(this,"setLayout",e=>p(this,fe,e));u(this,"getLayout",()=>o(this,fe));u(this,"setRenderer",e=>{p(this,oe,e)});u(this,"header",(e,t,s)=>{this.finalized&&p(this,$,new Response(o(this,$).body,o(this,$)));const i=o(this,$)?o(this,$).headers:o(this,K)??p(this,K,new Headers);t===void 0?i.delete(e):s!=null&&s.append?i.append(e,t):i.set(e,t)});u(this,"status",e=>{p(this,ne,e)});u(this,"set",(e,t)=>{o(this,N)??p(this,N,new Map),o(this,N).set(e,t)});u(this,"get",e=>o(this,N)?o(this,N).get(e):void 0);u(this,"newResponse",(...e)=>f(this,H,ie).call(this,...e));u(this,"body",(e,t,s)=>f(this,H,ie).call(this,e,t,s));u(this,"text",(e,t,s)=>!o(this,K)&&!o(this,ne)&&!t&&!s&&!this.finalized?new Response(e):f(this,H,ie).call(this,e,t,Oe(Mt,s)));u(this,"json",(e,t,s)=>f(this,H,ie).call(this,JSON.stringify(e),t,Oe("application/json",s)));u(this,"html",(e,t,s)=>{const i=a=>f(this,H,ie).call(this,a,t,Oe("text/html; charset=UTF-8",s));return typeof e=="object"?ot(e,Ft.Stringify,!1,{}).then(i):i(e)});u(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});u(this,"notFound",()=>(o(this,le)??p(this,le,()=>new Response),o(this,le).call(this,this)));p(this,xe,e),t&&(p(this,F,t.executionCtx),this.env=t.env,p(this,le,t.notFoundHandler),p(this,be,t.path),p(this,ve,t.matchResult))}get req(){return o(this,he)??p(this,he,new at(o(this,xe),o(this,be),o(this,ve))),o(this,he)}get event(){if(o(this,F)&&"respondWith"in o(this,F))return o(this,F);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,F))return o(this,F);throw Error("This context has no ExecutionContext")}get res(){return o(this,$)||p(this,$,new Response(null,{headers:o(this,K)??p(this,K,new Headers)}))}set res(e){if(o(this,$)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,$).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const i=o(this,$).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of i)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}p(this,$,e),this.finalized=!0}get var(){return o(this,N)?Object.fromEntries(o(this,N)):{}}},xe=new WeakMap,he=new WeakMap,N=new WeakMap,ne=new WeakMap,F=new WeakMap,$=new WeakMap,fe=new WeakMap,oe=new WeakMap,le=new WeakMap,K=new WeakMap,ve=new WeakMap,be=new WeakMap,H=new WeakSet,ie=function(e,t,s){const i=o(this,$)?new Headers(o(this,$).headers):o(this,K)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[n,c]of r)n.toLowerCase()==="set-cookie"?i.append(n,c):i.set(n,c)}if(s)for(const[r,n]of Object.entries(s))if(typeof n=="string")i.set(r,n);else{i.delete(r);for(const c of n)i.append(r,c)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ne);return new Response(e,{status:a,headers:i})},Ve),j="ALL",_t="all",qt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},Bt="__COMPOSED_HANDLER",Ht=e=>e.text("404 Not Found",404),Be=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},k,E,mt,R,W,je,Ee,Ge,dt=(Ge=class{constructor(t={}){h(this,E);u(this,"get");u(this,"post");u(this,"put");u(this,"delete");u(this,"options");u(this,"patch");u(this,"all");u(this,"on");u(this,"use");u(this,"router");u(this,"getPath");u(this,"_basePath","/");h(this,k,"/");u(this,"routes",[]);h(this,R,Ht);u(this,"errorHandler",Be);u(this,"onError",t=>(this.errorHandler=t,this));u(this,"notFound",t=>(p(this,R,t),this));u(this,"fetch",(t,...s)=>f(this,E,Ee).call(this,t,s[1],s[0],t.method));u(this,"request",(t,s,i,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,i,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),i,a)));u(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(f(this,E,Ee).call(this,t.request,t,void 0,t.request.method))})});[...qt,_t].forEach(r=>{this[r]=(n,...c)=>(typeof n=="string"?p(this,k,n):f(this,E,W).call(this,r,o(this,k),n),c.forEach(l=>{f(this,E,W).call(this,r,o(this,k),l)}),this)}),this.on=(r,n,...c)=>{for(const l of[n].flat()){p(this,k,l);for(const d of[r].flat())c.map(m=>{f(this,E,W).call(this,d.toUpperCase(),o(this,k),m)})}return this},this.use=(r,...n)=>(typeof r=="string"?p(this,k,r):(p(this,k,"*"),n.unshift(r)),n.forEach(c=>{f(this,E,W).call(this,j,o(this,k),c)}),this);const{strict:i,...a}=t;Object.assign(this,a),this.getPath=i??!0?t.getPath??et:Dt}route(t,s){const i=this.basePath(t);return s.routes.map(a=>{var n;let r;s.errorHandler===Be?r=a.handler:(r=async(c,l)=>(await _e([],s.errorHandler)(c,()=>a.handler(c,l))).res,r[Bt]=a.handler),f(n=i,E,W).call(n,a.method,a.path,r)}),this}basePath(t){const s=f(this,E,mt).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,i){let a,r;i&&(typeof i=="function"?r=i:(r=i.optionHandler,i.replaceRequest===!1?a=l=>l:a=i.replaceRequest));const n=r?l=>{const d=r(l);return Array.isArray(d)?d:[d]}:l=>{let d;try{d=l.executionCtx}catch{}return[l.env,d]};a||(a=(()=>{const l=se(this._basePath,t),d=l==="/"?0:l.length;return m=>{const g=new URL(m.url);return g.pathname=g.pathname.slice(d)||"/",new Request(g,m)}})());const c=async(l,d)=>{const m=await s(a(l.req.raw),...n(l));if(m)return m;await d()};return f(this,E,W).call(this,j,se(t,"*"),c),this}},k=new WeakMap,E=new WeakSet,mt=function(){const t=new dt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,R,o(this,R)),t.routes=this.routes,t},R=new WeakMap,W=function(t,s,i){t=t.toUpperCase(),s=se(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:i};this.router.add(t,s,[i,a]),this.routes.push(a)},je=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ee=function(t,s,i,a){if(a==="HEAD")return(async()=>new Response(null,await f(this,E,Ee).call(this,t,s,i,"GET")))();const r=this.getPath(t,{env:i}),n=this.router.match(a,r),c=new Lt(t,{path:r,matchResult:n,env:i,executionCtx:s,notFoundHandler:o(this,R)});if(n[0].length===1){let d;try{d=n[0][0][0][0](c,async()=>{c.res=await o(this,R).call(this,c)})}catch(m){return f(this,E,je).call(this,m,c)}return d instanceof Promise?d.then(m=>m||(c.finalized?c.res:o(this,R).call(this,c))).catch(m=>f(this,E,je).call(this,m,c)):d??o(this,R).call(this,c)}const l=_e(n[0],this.errorHandler,o(this,R));return(async()=>{try{const d=await l(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return f(this,E,je).call(this,d,c)}})()},Ge),pt=[];function Ut(e,t){const s=this.buildAllMatchers(),i=(a,r)=>{const n=s[a]||s[j],c=n[2][r];if(c)return c;const l=r.match(n[0]);if(!l)return[[],pt];const d=l.indexOf("",1);return[n[1][d],l]};return this.match=i,i(e,t)}var Se="[^/]+",ge=".*",ue="(?:|/.*)",ae=Symbol(),zt=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===ue?1:t===ge||t===ue?-1:e===Se?1:t===Se?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,J,O,We,Pe=(We=class{constructor(){h(this,Q);h(this,J);h(this,O,Object.create(null))}insert(t,s,i,a,r){if(t.length===0){if(o(this,Q)!==void 0)throw ae;if(r)return;p(this,Q,s);return}const[n,...c]=t,l=n==="*"?c.length===0?["","",ge]:["","",Se]:n==="/*"?["","",ue]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(l){const m=l[1];let g=l[2]||Se;if(m&&l[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw ae;if(d=o(this,O)[g],!d){if(Object.keys(o(this,O)).some(x=>x!==ge&&x!==ue))throw ae;if(r)return;d=o(this,O)[g]=new Pe,m!==""&&p(d,J,a.varIndex++)}!r&&m!==""&&i.push([m,o(d,J)])}else if(d=o(this,O)[n],!d){if(Object.keys(o(this,O)).some(m=>m.length>1&&m!==ge&&m!==ue))throw ae;if(r)return;d=o(this,O)[n]=new Pe}d.insert(c,s,i,a,r)}buildRegExpStr(){const s=Object.keys(o(this,O)).sort(Vt).map(i=>{const a=o(this,O)[i];return(typeof o(a,J)=="number"?`(${i})@${o(a,J)}`:zt.has(i)?`\\${i}`:i)+a.buildRegExpStr()});return typeof o(this,Q)=="number"&&s.unshift(`#${o(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,J=new WeakMap,O=new WeakMap,We),Ae,ye,Ye,Gt=(Ye=class{constructor(){h(this,Ae,{varIndex:0});h(this,ye,new Pe)}insert(e,t,s){const i=[],a=[];for(let n=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const d=`@\\${n}`;return a[n]=[d,l],n++,c=!0,d}),!c)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=a.length-1;n>=0;n--){const[c]=a[n];for(let l=r.length-1;l>=0;l--)if(r[l].indexOf(c)!==-1){r[l]=r[l].replace(c,a[n][1]);break}}return o(this,ye).insert(r,t,i,o(this,Ae),s),i}buildRegExp(){let e=o(this,ye).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,n)=>r!==void 0?(s[++t]=Number(r),"$()"):(n!==void 0&&(i[Number(n)]=++t),"")),[new RegExp(`^${e}`),s,i]}},Ae=new WeakMap,ye=new WeakMap,Ye),Wt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function gt(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Yt(){Ce=Object.create(null)}function Kt(e){var d;const t=new Gt,s=[];if(e.length===0)return Wt;const i=e.map(m=>[!/\*|\/:/.test(m[0]),...m]).sort(([m,g],[x,w])=>m?1:x?-1:g.length-w.length),a=Object.create(null);for(let m=0,g=-1,x=i.length;m<x;m++){const[w,I,b]=i[m];w?a[I]=[b.map(([A])=>[A,Object.create(null)]),pt]:g++;let y;try{y=t.insert(I,g,w)}catch(A){throw A===ae?new ct(I):A}w||(s[g]=b.map(([A,ee])=>{const de=Object.create(null);for(ee-=1;ee>=0;ee--){const[D,Ie]=y[ee];de[D]=Ie}return[A,de]}))}const[r,n,c]=t.buildRegExp();for(let m=0,g=s.length;m<g;m++)for(let x=0,w=s[m].length;x<w;x++){const I=(d=s[m][x])==null?void 0:d[1];if(!I)continue;const b=Object.keys(I);for(let y=0,A=b.length;y<A;y++)I[b[y]]=c[I[b[y]]]}const l=[];for(const m in n)l[m]=s[n[m]];return[r,l,a]}function te(e,t){if(e){for(const s of Object.keys(e).sort((i,a)=>a.length-i.length))if(gt(s).test(t))return[...e[s]]}}var U,z,$e,ut,Ke,Qt=(Ke=class{constructor(){h(this,$e);u(this,"name","RegExpRouter");h(this,U);h(this,z);u(this,"match",Ut);p(this,U,{[j]:Object.create(null)}),p(this,z,{[j]:Object.create(null)})}add(e,t,s){var c;const i=o(this,U),a=o(this,z);if(!i||!a)throw new Error(lt);i[e]||[i,a].forEach(l=>{l[e]=Object.create(null),Object.keys(l[j]).forEach(d=>{l[e][d]=[...l[j][d]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=gt(t);e===j?Object.keys(i).forEach(d=>{var m;(m=i[d])[t]||(m[t]=te(i[d],t)||te(i[j],t)||[])}):(c=i[e])[t]||(c[t]=te(i[e],t)||te(i[j],t)||[]),Object.keys(i).forEach(d=>{(e===j||e===d)&&Object.keys(i[d]).forEach(m=>{l.test(m)&&i[d][m].push([s,r])})}),Object.keys(a).forEach(d=>{(e===j||e===d)&&Object.keys(a[d]).forEach(m=>l.test(m)&&a[d][m].push([s,r]))});return}const n=tt(t)||[t];for(let l=0,d=n.length;l<d;l++){const m=n[l];Object.keys(a).forEach(g=>{var x;(e===j||e===g)&&((x=a[g])[m]||(x[m]=[...te(i[g],m)||te(i[j],m)||[]]),a[g][m].push([s,r-d+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,z)).concat(Object.keys(o(this,U))).forEach(t=>{e[t]||(e[t]=f(this,$e,ut).call(this,t))}),p(this,U,p(this,z,void 0)),Yt(),e}},U=new WeakMap,z=new WeakMap,$e=new WeakSet,ut=function(e){const t=[];let s=e===j;return[o(this,U),o(this,z)].forEach(i=>{const a=i[e]?Object.keys(i[e]).map(r=>[r,i[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==j&&t.push(...Object.keys(i[j]).map(r=>[r,i[j][r]]))}),s?Kt(t):null},Ke),V,M,Qe,Jt=(Qe=class{constructor(e){u(this,"name","SmartRouter");h(this,V,[]);h(this,M,[]);p(this,V,e.routers)}add(e,t,s){if(!o(this,M))throw new Error(lt);o(this,M).push([e,t,s])}match(e,t){if(!o(this,M))throw new Error("Fatal error");const s=o(this,V),i=o(this,M),a=s.length;let r=0,n;for(;r<a;r++){const c=s[r];try{for(let l=0,d=i.length;l<d;l++)c.add(...i[l]);n=c.match(e,t)}catch(l){if(l instanceof ct)continue;throw l}this.match=c.match.bind(c),p(this,V,[c]),p(this,M,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(o(this,M)||o(this,V).length!==1)throw new Error("No active router has been determined yet.");return o(this,V)[0]}},V=new WeakMap,M=new WeakMap,Qe),pe=Object.create(null),G,S,X,ce,C,L,Y,Je,xt=(Je=class{constructor(e,t,s){h(this,L);h(this,G);h(this,S);h(this,X);h(this,ce,0);h(this,C,pe);if(p(this,S,s||Object.create(null)),p(this,G,[]),e&&t){const i=Object.create(null);i[e]={handler:t,possibleKeys:[],score:0},p(this,G,[i])}p(this,X,[])}insert(e,t,s){p(this,ce,++Le(this,ce)._);let i=this;const a=It(t),r=[];for(let n=0,c=a.length;n<c;n++){const l=a[n],d=a[n+1],m=Rt(l,d),g=Array.isArray(m)?m[0]:l;if(g in o(i,S)){i=o(i,S)[g],m&&r.push(m[1]);continue}o(i,S)[g]=new xt,m&&(o(i,X).push(m),r.push(m[1])),i=o(i,S)[g]}return o(i,G).push({[e]:{handler:s,possibleKeys:r.filter((n,c,l)=>l.indexOf(n)===c),score:o(this,ce)}}),i}search(e,t){var c;const s=[];p(this,C,pe);let a=[this];const r=Ze(t),n=[];for(let l=0,d=r.length;l<d;l++){const m=r[l],g=l===d-1,x=[];for(let w=0,I=a.length;w<I;w++){const b=a[w],y=o(b,S)[m];y&&(p(y,C,o(b,C)),g?(o(y,S)["*"]&&s.push(...f(this,L,Y).call(this,o(y,S)["*"],e,o(b,C))),s.push(...f(this,L,Y).call(this,y,e,o(b,C)))):x.push(y));for(let A=0,ee=o(b,X).length;A<ee;A++){const de=o(b,X)[A],D=o(b,C)===pe?{}:{...o(b,C)};if(de==="*"){const q=o(b,S)["*"];q&&(s.push(...f(this,L,Y).call(this,q,e,o(b,C))),p(q,C,D),x.push(q));continue}const[Ie,Fe,me]=de;if(!m&&!(me instanceof RegExp))continue;const P=o(b,S)[Ie],bt=r.slice(l).join("/");if(me instanceof RegExp){const q=me.exec(bt);if(q){if(D[Fe]=q[0],s.push(...f(this,L,Y).call(this,P,e,o(b,C),D)),Object.keys(o(P,S)).length){p(P,C,D);const Te=((c=q[0].match(/\//))==null?void 0:c.length)??0;(n[Te]||(n[Te]=[])).push(P)}continue}}(me===!0||me.test(m))&&(D[Fe]=m,g?(s.push(...f(this,L,Y).call(this,P,e,D,o(b,C))),o(P,S)["*"]&&s.push(...f(this,L,Y).call(this,o(P,S)["*"],e,D,o(b,C)))):(p(P,C,D),x.push(P)))}}a=x.concat(n.shift()??[])}return s.length>1&&s.sort((l,d)=>l.score-d.score),[s.map(({handler:l,params:d})=>[l,d])]}},G=new WeakMap,S=new WeakMap,X=new WeakMap,ce=new WeakMap,C=new WeakMap,L=new WeakSet,Y=function(e,t,s,i){const a=[];for(let r=0,n=o(e,G).length;r<n;r++){const c=o(e,G)[r],l=c[t]||c[j],d={};if(l!==void 0&&(l.params=Object.create(null),a.push(l),s!==pe||i&&i!==pe))for(let m=0,g=l.possibleKeys.length;m<g;m++){const x=l.possibleKeys[m],w=d[l.score];l.params[x]=i!=null&&i[x]&&!w?i[x]:s[x]??(i==null?void 0:i[x]),d[l.score]=!0}}return a},Je),Z,Xe,Xt=(Xe=class{constructor(){u(this,"name","TrieRouter");h(this,Z);p(this,Z,new xt)}add(e,t,s){const i=tt(t);if(i){for(let a=0,r=i.length;a<r;a++)o(this,Z).insert(e,i[a],s);return}o(this,Z).insert(e,t,s)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,Xe),ht=class extends dt{constructor(e={}){super(e),this.router=e.router??new Jt({routers:[new Qt,new Xt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},i=(r=>typeof r=="string"?r==="*"?()=>r:n=>r===n?n:null:typeof r=="function"?r:n=>r.includes(n)?n:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(n,c){var m;function l(g,x){n.res.headers.set(g,x)}const d=await i(n.req.header("origin")||"",n);if(d&&l("Access-Control-Allow-Origin",d),s.credentials&&l("Access-Control-Allow-Credentials","true"),(m=s.exposeHeaders)!=null&&m.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),n.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const g=await a(n.req.header("origin")||"",n);g.length&&l("Access-Control-Allow-Methods",g.join(","));let x=s.allowHeaders;if(!(x!=null&&x.length)){const w=n.req.header("Access-Control-Request-Headers");w&&(x=w.split(/\s*,\s*/))}return x!=null&&x.length&&(l("Access-Control-Allow-Headers",x.join(",")),n.res.headers.append("Vary","Access-Control-Request-Headers")),n.res.headers.delete("Content-Length"),n.res.headers.delete("Content-Type"),new Response(null,{headers:n.res.headers,status:204,statusText:"No Content"})}await c(),s.origin!=="*"&&n.header("Vary","Origin",{append:!0})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,He=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,i=e.match(s);if(!i)return;let a=t[i[1]];return a&&a.startsWith("text")&&(a+="; charset=utf-8"),a},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,is=(...e)=>{let t=e.filter(a=>a!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),i=[];for(const a of s)a===".."&&i.length>0&&i.at(-1)!==".."?i.pop():a!=="."&&i.push(a);return i.join("/")||"."},ft={br:".br",zstd:".zst",gzip:".gz"},as=Object.keys(ft),rs="index.html",ns=e=>{const t=e.root??"./",s=e.path,i=e.join??is;return async(a,r)=>{var m,g,x,w;if(a.finalized)return r();let n;if(e.path)n=e.path;else try{if(n=decodeURIComponent(a.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(n))throw new Error}catch{return await((m=e.onNotFound)==null?void 0:m.call(e,a.req.path,a)),r()}let c=i(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(n):n);e.isDir&&await e.isDir(c)&&(c=i(c,rs));const l=e.getContent;let d=await l(c,a);if(d instanceof Response)return a.newResponse(d.body,d);if(d){const I=e.mimes&&He(c,e.mimes)||He(c);if(a.header("Content-Type",I||"application/octet-stream"),e.precompressed&&(!I||es.test(I))){const b=new Set((g=a.req.header("Accept-Encoding"))==null?void 0:g.split(",").map(y=>y.trim()));for(const y of as){if(!b.has(y))continue;const A=await l(c+ft[y],a);if(A){d=A,a.header("Content-Encoding",y),a.header("Vary","Accept-Encoding",{append:!0});break}}}return await((x=e.onFound)==null?void 0:x.call(e,c,a)),a.body(d)}await((w=e.onNotFound)==null?void 0:w.call(e,c,a)),await r()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let i;t&&t.namespace?i=t.namespace:i=__STATIC_CONTENT;const a=s[e]||e;if(!a)return null;const r=await i.get(a,{type:"stream"});return r||null},ls=e=>async function(s,i){return ns({...e,getContent:async r=>os(r,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,i)},cs=e=>ls(e);const v=new ht;v.use("/api/*",Zt());v.use("/static/*",cs({root:"./public"}));v.post("/api/auth/register",async e=>{try{const{email:t,password:s,firstName:i,lastName:a,company:r}=await e.req.json();if(!t||!s||!i||!a)return e.json({error:"Tous les champs sont requis"},400);if(await e.env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(t).first())return e.json({error:"Cet email est déjà utilisé"},400);const c=await e.env.DB.prepare("INSERT INTO users (email, password, first_name, last_name, company) VALUES (?, ?, ?, ?, ?)").bind(t,s,i,a,r||"").run();return e.json({success:!0,userId:c.meta.last_row_id,message:"Compte créé avec succès"})}catch{return e.json({error:"Erreur lors de la création du compte"},500)}});v.post("/api/auth/login",async e=>{try{const{email:t,password:s}=await e.req.json(),i=await e.env.DB.prepare("SELECT id, email, first_name, last_name, company FROM users WHERE email = ? AND password = ?").bind(t,s).first();return i?e.json({success:!0,user:{id:i.id,email:i.email,firstName:i.first_name,lastName:i.last_name,company:i.company}}):e.json({error:"Email ou mot de passe incorrect"},401)}catch{return e.json({error:"Erreur lors de la connexion"},500)}});v.post("/api/assessments",async e=>{try{const{userId:t,assessmentType:s}=await e.req.json(),i=await e.env.DB.prepare("INSERT INTO assessments (user_id, assessment_type, status) VALUES (?, ?, ?)").bind(t,s,"in_progress").run();return e.json({success:!0,assessmentId:i.meta.last_row_id})}catch{return e.json({error:"Erreur lors de la création de l'évaluation"},500)}});v.post("/api/assessments/:id/answers",async e=>{try{const t=e.req.param("id"),{answers:s}=await e.req.json();for(const r of s)await e.env.DB.prepare("INSERT INTO assessment_answers (assessment_id, category, question_key, answer_value) VALUES (?, ?, ?, ?)").bind(t,r.category,r.questionKey,r.value).run();const i=s.reduce((r,n)=>r+n.value,0),a=Math.round(i/s.length*20);return await e.env.DB.prepare("UPDATE assessments SET status = ?, overall_score = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").bind("completed",a,t).run(),e.json({success:!0,score:a})}catch{return e.json({error:"Erreur lors de la sauvegarde des réponses"},500)}});v.get("/api/users/:userId/assessments",async e=>{try{const t=e.req.param("userId"),{results:s}=await e.env.DB.prepare("SELECT id, assessment_type, status, overall_score, created_at FROM assessments WHERE user_id = ? ORDER BY created_at DESC").bind(t).all();return e.json({assessments:s})}catch{return e.json({error:"Erreur lors de la récupération des évaluations"},500)}});v.get("/api/assessments/:id",async e=>{try{const t=e.req.param("id"),s=await e.env.DB.prepare("SELECT * FROM assessments WHERE id = ?").bind(t).first(),{results:i}=await e.env.DB.prepare("SELECT * FROM assessment_answers WHERE assessment_id = ?").bind(t).all();return e.json({assessment:s,answers:i})}catch{return e.json({error:"Erreur lors de la récupération de l'évaluation"},500)}});v.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Factorise.io - Transformation Digitale & IA</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
        <style>
          .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .card-hover:hover { transform: translateY(-5px); transition: all 0.3s; }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md fixed w-full z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-indigo-600"><i class="fas fa-brain mr-2"></i>Factor AI</a>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/services" class="text-gray-700 hover:text-indigo-600">Services</a>
                        <a href="/use-cases" class="text-gray-700 hover:text-indigo-600">Cas d'Usage</a>
                        <a href="/about" class="text-gray-700 hover:text-indigo-600">À propos</a>
                        <a href="/testimonials" class="text-gray-700 hover:text-indigo-600">Témoignages</a>
                        <a href="/faq" class="text-gray-700 hover:text-indigo-600">FAQ</a>
                        <a href="/resources" class="text-gray-700 hover:text-indigo-600">Ressources</a>
                        <a href="/contact" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Contact</a>
                        <a href="/login" class="text-gray-700 hover:text-indigo-600">Connexion</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="gradient-bg text-white pt-32 pb-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl font-bold mb-6">Transformez votre entreprise avec l'IA</h1>
                <p class="text-xl mb-8 opacity-90">Expertise en transformation digitale et intelligence artificielle</p>
                <div class="space-x-4">
                    <a href="/register" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
                        Commencer l'évaluation
                    </a>
                    <a href="#services" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 inline-block">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>

        <!-- Services Section -->
        <section id="services" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center mb-12">Nos Services</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-brain text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Stratégie IA</h3>
                        <p class="text-gray-600">Définissez votre feuille de route IA avec nos experts certifiés</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-chart-line text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Évaluation de Maturité</h3>
                        <p class="text-gray-600">Analysez votre niveau de maturité IA et identifiez les opportunités</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg card-hover">
                        <i class="fas fa-cogs text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Transformation Digitale</h3>
                        <p class="text-gray-600">Accompagnement complet dans votre transformation digitale</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="bg-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold mb-4">Notre Processus Éprouvé</h2>
                    <p class="text-xl text-gray-600">Une approche en 3 étapes pour des résultats garantis</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Step 1 -->
                    <div class="relative">
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                            <div class="absolute -top-6 left-8">
                                <div class="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                    1
                                </div>
                            </div>
                            <div class="mt-8">
                                <div class="text-indigo-600 mb-4">
                                    <i class="fas fa-handshake text-5xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-3">Consultation Gratuite</h3>
                                <p class="text-gray-600 mb-4">Nous comprenons vos besoins et objectifs business pour identifier les opportunités IA à fort ROI.</p>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Analyse de vos défis actuels</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Identification des opportunités</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Évaluation du potentiel ROI</span>
                                    </div>
                                </div>
                                <div class="mt-6 pt-6 border-t border-indigo-200">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-gray-500">Durée</span>
                                        <span class="font-semibold">30-60 min</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-2">
                                        <span class="text-sm text-gray-500">Livrable</span>
                                        <span class="font-semibold text-sm">Rapport opportunités</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Arrow -->
                        <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                            <i class="fas fa-arrow-right text-3xl text-indigo-300"></i>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="relative">
                        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                            <div class="absolute -top-6 left-8">
                                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                    2
                                </div>
                            </div>
                            <div class="mt-8">
                                <div class="text-purple-600 mb-4">
                                    <i class="fas fa-project-diagram text-5xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-3">Diagramme & POC</h3>
                                <p class="text-gray-600 mb-4">Validation rapide avec un proof-of-concept fonctionnel sur vos vraies données.</p>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Diagrammes de processus</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>POC en 1-2 semaines</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Tests avec données réelles</span>
                                    </div>
                                </div>
                                <div class="mt-6 pt-6 border-t border-purple-200">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-gray-500">Durée</span>
                                        <span class="font-semibold">1-2 semaines</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-2">
                                        <span class="text-sm text-gray-500">Livrable</span>
                                        <span class="font-semibold text-sm">POC fonctionnel</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Arrow -->
                        <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                            <i class="fas fa-arrow-right text-3xl text-purple-300"></i>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="relative">
                        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                            <div class="absolute -top-6 left-8">
                                <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                    3
                                </div>
                            </div>
                            <div class="mt-8">
                                <div class="text-green-600 mb-4">
                                    <i class="fas fa-rocket text-5xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-3">Lancement Projet</h3>
                                <p class="text-gray-600 mb-4">Déploiement et intégration complète dans votre infrastructure existante.</p>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Intégration stack existant</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Architecture scalable</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span>Formation et support</span>
                                    </div>
                                </div>
                                <div class="mt-6 pt-6 border-t border-green-200">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-gray-500">Durée</span>
                                        <span class="font-semibold">4-12 semaines</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-2">
                                        <span class="text-sm text-gray-500">Livrable</span>
                                        <span class="font-semibold text-sm">Solution en prod</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Social Proof Stats -->
                <div class="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
                    <div class="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-5xl font-bold mb-2">200+</div>
                            <div class="text-indigo-200">Agents IA Construits</div>
                        </div>
                        <div>
                            <div class="text-5xl font-bold mb-2">1M$</div>
                            <div class="text-indigo-200">Économies Moyennes/An</div>
                        </div>
                        <div>
                            <div class="text-5xl font-bold mb-2">84%</div>
                            <div class="text-indigo-200">Amélioration Résolution</div>
                        </div>
                        <div>
                            <div class="text-5xl font-bold mb-2">50+</div>
                            <div class="text-indigo-200">Clients Satisfaits</div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <p class="text-xl mb-6">Besoin d'aide pour construire des agents IA ? Nous avons construit 200+ agents. Nous savons ce qui fonctionne.</p>
                        <a href="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 inline-block shadow-lg">
                            Réserver une Consultation Gratuite
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Agentic Process Section -->
        <section id="agentic-process" class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold mb-4">Comment Fonctionnent nos Agents IA ?</h2>
                    <p class="text-xl text-gray-600">Architecture agentic moderne avec orchestration intelligente</p>
                </div>

                <!-- Agentic Workflow Diagram -->
                <div class="bg-white rounded-3xl shadow-2xl p-8 mb-12">
                    <div class="grid md:grid-cols-5 gap-6">
                        <!-- Step 1: Input -->
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i class="fas fa-keyboard text-2xl text-white"></i>
                            </div>
                            <h3 class="font-bold mb-2">1. Input</h3>
                            <p class="text-sm text-gray-600">Requête utilisateur en langage naturel</p>
                        </div>

                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-right text-3xl text-indigo-300"></i>
                        </div>

                        <!-- Step 2: Orchestrator -->
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i class="fas fa-brain text-2xl text-white"></i>
                            </div>
                            <h3 class="font-bold mb-2">2. Orchestrator</h3>
                            <p class="text-sm text-gray-600">IA maître décompose en sous-tâches</p>
                        </div>

                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-right text-3xl text-indigo-300"></i>
                        </div>

                        <!-- Step 3: Specialized Agents -->
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <i class="fas fa-users-cog text-2xl text-white"></i>
                            </div>
                            <h3 class="font-bold mb-2">3. Agents Spécialisés</h3>
                            <p class="text-sm text-gray-600">Exécution parallèle des tâches</p>
                        </div>
                    </div>

                    <div class="mt-8 pt-8 border-t border-gray-200">
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Step 4: Tools & APIs -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-tools text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">4. Outils & APIs</h4>
                                    <p class="text-sm text-gray-600">Accès bases de données, APIs externes, calculateurs, recherche web</p>
                                </div>
                            </div>

                            <!-- Step 5: Output -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-check-circle text-indigo-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">5. Résultat Synthétisé</h4>
                                    <p class="text-sm text-gray-600">Orchestrator combine les réponses en réponse finale cohérente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Agent Types Grid -->
                <div class="grid md:grid-cols-4 gap-6 mb-12">
                    <!-- Research Agent -->
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <i class="fas fa-search text-blue-600 text-xl"></i>
                        </div>
                        <h3 class="font-bold mb-2">Research Agent</h3>
                        <p class="text-sm text-gray-600">Recherche et analyse d'information</p>
                        <div class="mt-3 text-xs text-gray-500">
                            <i class="fas fa-check mr-1"></i>Web scraping<br>
                            <i class="fas fa-check mr-1"></i>Data extraction<br>
                            <i class="fas fa-check mr-1"></i>Fact checking
                        </div>
                    </div>

                    <!-- Reasoning Agent -->
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <i class="fas fa-lightbulb text-purple-600 text-xl"></i>
                        </div>
                        <h3 class="font-bold mb-2">Reasoning Agent</h3>
                        <p class="text-sm text-gray-600">Raisonnement logique et analyse</p>
                        <div class="mt-3 text-xs text-gray-500">
                            <i class="fas fa-check mr-1"></i>Problem solving<br>
                            <i class="fas fa-check mr-1"></i>Decision making<br>
                            <i class="fas fa-check mr-1"></i>Pattern detection
                        </div>
                    </div>

                    <!-- Action Agent -->
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <i class="fas fa-cogs text-green-600 text-xl"></i>
                        </div>
                        <h3 class="font-bold mb-2">Action Agent</h3>
                        <p class="text-sm text-gray-600">Exécution d'actions concrètes</p>
                        <div class="mt-3 text-xs text-gray-500">
                            <i class="fas fa-check mr-1"></i>API calls<br>
                            <i class="fas fa-check mr-1"></i>DB operations<br>
                            <i class="fas fa-check mr-1"></i>File handling
                        </div>
                    </div>

                    <!-- Communication Agent -->
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <i class="fas fa-comments text-orange-600 text-xl"></i>
                        </div>
                        <h3 class="font-bold mb-2">Communication Agent</h3>
                        <p class="text-sm text-gray-600">Interface utilisateur naturelle</p>
                        <div class="mt-3 text-xs text-gray-500">
                            <i class="fas fa-check mr-1"></i>Natural language<br>
                            <i class="fas fa-check mr-1"></i>Context awareness<br>
                            <i class="fas fa-check mr-1"></i>Multi-turn dialog
                        </div>
                    </div>
                </div>

                <!-- Benefits of Agentic Approach -->
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 class="text-2xl font-bold mb-6 text-center">Pourquoi l'Approche Agentic ?</h3>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="text-center">
                            <div class="text-4xl mb-2">🎯</div>
                            <h4 class="font-bold mb-2">Spécialisation</h4>
                            <p class="text-sm opacity-90">Chaque agent excelle dans son domaine au lieu d'un modèle généraliste</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl mb-2">⚡</div>
                            <h4 class="font-bold mb-2">Parallélisation</h4>
                            <p class="text-sm opacity-90">Exécution simultanée de multiples tâches pour des réponses 10x plus rapides</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl mb-2">🔄</div>
                            <h4 class="font-bold mb-2">Modularité</h4>
                            <p class="text-sm opacity-90">Ajout/remplacement d'agents sans réarchitecturer tout le système</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="bg-gray-100 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-6">Plus de 20 ans d'expertise</h2>
                        <p class="text-gray-700 mb-4">
                            Expert en transformation digitale et IA, nous accompagnons les entreprises dans leur mutation numérique.
                        </p>
                        <p class="text-gray-700 mb-4">
                            Nos certifications : DeepLearning.AI, Harvard Data Science, MIT Cybersécurité, SAFe Agile Leadership.
                        </p>
                        <div class="flex space-x-4 mt-6">
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">IA Générative</span>
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Data Science</span>
                            <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Blockchain</span>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Expertise technique et vision stratégique</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Approche centrée sur l'humain</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Résultats mesurables et ROI prouvé</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                <span>Connaissance du marché européen</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="gradient-bg text-white py-16">
            <div class="max-w-4xl mx-auto text-center px-4">
                <h2 class="text-3xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
                <p class="text-xl mb-8">Commencez votre évaluation gratuite de maturité IA dès maintenant</p>
                <a href="/register" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
                    Démarrer l'évaluation gratuite
                </a>
            </div>
        </section>

        <!-- Footer -->
        <footer id="contact" class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Factorise.io</h3>
                        <p class="text-gray-400">Transformation Digitale & Intelligence Artificielle</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Contact</h3>
                        <p class="text-gray-400">Île-de-France, France</p>
                        <p class="text-gray-400">contact@factorise.io</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Suivez-nous</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin text-2xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter text-2xl"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github text-2xl"></i></a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Factorise.io - Tous droits réservés</p>
                </div>
            </div>
        </footer>
    </body>
    </html>
  `));v.get("/login",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connexion - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center py-12 px-4">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">Connexion</h2>
                    <p class="text-gray-600 mt-2">Accédez à votre espace personnel</p>
                </div>
                
                <form id="loginForm" class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                        <input type="password" id="password" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div id="errorMessage" class="text-red-600 text-sm hidden"></div>
                    
                    <button type="submit" 
                            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                        Se connecter
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-600">
                    Pas encore de compte ? 
                    <a href="/register" class="text-indigo-600 hover:text-indigo-700 font-semibold">S'inscrire</a>
                </p>
                <p class="text-center mt-2">
                    <a href="/" class="text-gray-600 hover:text-gray-700">← Retour à l'accueil</a>
                </p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            document.getElementById('loginForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const errorDiv = document.getElementById('errorMessage');
                
                try {
                    const response = await axios.post('/api/auth/login', { email, password });
                    
                    if (response.data.success) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        window.location.href = '/dashboard';
                    }
                } catch (error) {
                    errorDiv.textContent = error.response?.data?.error || 'Erreur de connexion';
                    errorDiv.classList.remove('hidden');
                }
            });
        <\/script>
    </body>
    </html>
  `));v.get("/register",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inscription - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div class="min-h-screen flex items-center justify-center py-12 px-4">
            <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">Inscription</h2>
                    <p class="text-gray-600 mt-2">Créez votre compte gratuit</p>
                </div>
                
                <form id="registerForm" class="space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                            <input type="text" id="firstName" required
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                            <input type="text" id="lastName" required
                                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Entreprise (optionnel)</label>
                        <input type="text" id="company"
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                        <input type="password" id="password" required
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    </div>
                    
                    <div id="errorMessage" class="text-red-600 text-sm hidden"></div>
                    
                    <button type="submit" 
                            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                        S'inscrire
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-600">
                    Déjà un compte ? 
                    <a href="/login" class="text-indigo-600 hover:text-indigo-700 font-semibold">Se connecter</a>
                </p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            document.getElementById('registerForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const data = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    company: document.getElementById('company').value,
                    password: document.getElementById('password').value
                };
                const errorDiv = document.getElementById('errorMessage');
                
                try {
                    const response = await axios.post('/api/auth/register', data);
                    
                    if (response.data.success) {
                        alert('Compte créé avec succès !');
                        window.location.href = '/login';
                    }
                } catch (error) {
                    errorDiv.textContent = error.response?.data?.error || 'Erreur lors de l'inscription';
                    errorDiv.classList.remove('hidden');
                }
            });
        <\/script>
    </body>
    </html>
  `));v.get("/dashboard",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <span id="userName" class="text-gray-700"></span>
                        <button onclick="logout()" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-sign-out-alt mr-2"></i>Déconnexion
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 class="text-4xl font-bold mb-8">Bienvenue sur votre espace personnel</h1>
            
            <!-- Action Cards -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-200 hover:border-indigo-400 cursor-pointer"
                     onclick="window.location.href='/assessment'">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-chart-line text-4xl text-indigo-600 mr-4"></i>
                        <h3 class="text-2xl font-bold">Nouvelle Évaluation</h3>
                    </div>
                    <p class="text-gray-600 mb-4">Évaluez votre maturité IA en 15 minutes</p>
                    <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                        Commencer <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-history text-4xl text-gray-600 mr-4"></i>
                        <h3 class="text-2xl font-bold">Mes Évaluations</h3>
                    </div>
                    <p class="text-gray-600 mb-4">Consultez vos évaluations précédentes</p>
                    <div id="assessmentsList" class="space-y-2">
                        <p class="text-gray-500 italic">Chargement...</p>
                    </div>
                </div>
            </div>
            
            <!-- Stats -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <h3 class="text-2xl font-bold mb-6">Vos statistiques</h3>
                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-indigo-600" id="totalAssessments">0</div>
                        <div class="text-gray-600">Évaluations</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-600" id="avgScore">-</div>
                        <div class="text-gray-600">Score moyen</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-600" id="completedCount">0</div>
                        <div class="text-gray-600">Complétées</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-orange-600" id="inProgressCount">0</div>
                        <div class="text-gray-600">En cours</div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            // Vérifier l'authentification
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            if (!user) {
                window.location.href = '/login';
            }
            
            document.getElementById('userName').textContent = user.firstName + ' ' + user.lastName;
            
            // Charger les évaluations
            async function loadAssessments() {
                try {
                    const response = await axios.get('/api/users/' + user.id + '/assessments');
                    const assessments = response.data.assessments;
                    
                    // Stats
                    document.getElementById('totalAssessments').textContent = assessments.length;
                    const completed = assessments.filter(a => a.status === 'completed');
                    document.getElementById('completedCount').textContent = completed.length;
                    document.getElementById('inProgressCount').textContent = assessments.length - completed.length;
                    
                    if (completed.length > 0) {
                        const avgScore = Math.round(completed.reduce((sum, a) => sum + a.overall_score, 0) / completed.length);
                        document.getElementById('avgScore').textContent = avgScore + '%';
                    }
                    
                    // Liste
                    const listDiv = document.getElementById('assessmentsList');
                    if (assessments.length === 0) {
                        listDiv.innerHTML = '<p class="text-gray-500 italic">Aucune évaluation pour le moment</p>';
                    } else {
                        listDiv.innerHTML = assessments.slice(0, 5).map(a => {
                            const date = new Date(a.created_at).toLocaleDateString('fr-FR');
                            const statusColor = a.status === 'completed' ? 'text-green-600' : 'text-orange-600';
                            const statusText = a.status === 'completed' ? 'Complétée' : 'En cours';
                            return '<div class="flex justify-between items-center py-2 border-b">' +
                                   '<span>' + date + ' - ' + (a.assessment_type === 'ia_maturity' ? 'Maturité IA' : 'Stratégie') + '</span>' +
                                   '<span class="' + statusColor + '">' + statusText + (a.overall_score ? ' (' + a.overall_score + '%)' : '') + '</span>' +
                                   '</div>';
                        }).join('');
                    }
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
            
            function logout() {
                localStorage.removeItem('user');
                window.location.href = '/';
            }
            
            loadAssessments();
        <\/script>
    </body>
    </html>
  `));v.get("/assessment",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Évaluation Maturité IA - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/assessment-questions-v2.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
        <script src="/static/assessment.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-arrow-left mr-2"></i>Retour au dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h1 class="text-4xl font-bold mb-4">Évaluation de Maturité IA</h1>
                <p class="text-gray-600 mb-8">
                    Répondez aux questions suivantes pour évaluer le niveau de maturité IA de votre organisation.
                    Utilisez l'échelle de 1 (pas du tout) à 5 (totalement).
                </p>
                
                <!-- Progress Bar -->
                <div class="mb-8">
                    <div class="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progression</span>
                        <span id="progressText">0%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                        <div id="progressBar" class="bg-indigo-600 h-3 rounded-full transition-all duration-300" style="width: 0%"></div>
                    </div>
                </div>
                
                <!-- Questions Container -->
                <div id="questionsContainer"></div>
                
                <!-- Navigation Buttons -->
                <div class="flex justify-between mt-8">
                    <button id="prevBtn" onclick="previousCategory()" 
                            class="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                            disabled>
                        <i class="fas fa-arrow-left mr-2"></i>Précédent
                    </button>
                    <button id="nextBtn" onclick="nextCategory()" 
                            class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                        Suivant <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
    </body>
    </html>
  `));v.get("/results",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Résultats de l'évaluation - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script src="/static/translations.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-home mr-2"></i>Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- Score principal -->
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-2xl p-12 mb-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Résultats de votre évaluation</h1>
                <div class="flex items-center justify-center space-x-4">
                    <i class="fas fa-chart-line text-6xl"></i>
                    <div>
                        <div class="text-7xl font-bold" id="overallScore">-</div>
                        <div class="text-xl">Score de Maturité IA</div>
                    </div>
                </div>
                <p class="mt-6 text-xl" id="scoreInterpretation"></p>
            </div>

            <!-- Analyse par catégorie -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold mb-6">Analyse détaillée par domaine</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <canvas id="radarChart"></canvas>
                    </div>
                    <div id="categoryScores" class="space-y-4"></div>
                </div>
            </div>

            <!-- Recommandations -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 class="text-3xl font-bold mb-6">
                    <i class="fas fa-lightbulb text-yellow-500 mr-3"></i>Recommandations prioritaires
                </h2>
                <div id="recommendations" class="space-y-4"></div>
            </div>

            <!-- Actions -->
            <div class="flex justify-center space-x-4">
                <button onclick="window.print()" 
                        class="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
                    <i class="fas fa-print mr-2"></i>Imprimer les résultats
                </button>
                <a href="/dashboard" 
                   class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 inline-block">
                    <i class="fas fa-home mr-2"></i>Retour au dashboard
                </a>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            const urlParams = new URLSearchParams(window.location.search);
            const assessmentId = urlParams.get('id');
            const overallScore = parseInt(urlParams.get('score'));
            
            // Afficher le score global
            document.getElementById('overallScore').textContent = overallScore + '%';
            
            // Interprétation du score
            let interpretation = '';
            if (overallScore < 30) {
                interpretation = '🔴 Niveau Initial - Votre organisation débute son parcours IA';
            } else if (overallScore < 50) {
                interpretation = '🟠 Niveau Émergent - Des bases solides sont en place';
            } else if (overallScore < 70) {
                interpretation = '🟡 Niveau Intermédiaire - Bonne progression, continuez vos efforts';
            } else if (overallScore < 85) {
                interpretation = '🟢 Niveau Avancé - Très bon niveau de maturité IA';
            } else {
                interpretation = '🏆 Niveau Expert - Excellence dans l\\'adoption de l\\'IA';
            }
            document.getElementById('scoreInterpretation').textContent = interpretation;
            
            // Charger les détails de l'évaluation
            loadAssessmentDetails();
            
            async function loadAssessmentDetails() {
                try {
                    const response = await axios.get('/api/assessments/' + assessmentId);
                    const { answers } = response.data;
                    
                    // Calculer les scores par catégorie
                    const categoryScores = calculateCategoryScores(answers);
                    displayCategoryScores(categoryScores);
                    createRadarChart(categoryScores);
                    generateRecommendations(categoryScores);
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
            
            function calculateCategoryScores(answers) {
                const categories = {
                    vision: { name: 'Vision & Stratégie', icon: 'fa-lightbulb', scores: [] },
                    data: { name: 'Données & Gouvernance', icon: 'fa-database', scores: [] },
                    technologie: { name: 'Technologies & Outils', icon: 'fa-cogs', scores: [] },
                    organisation: { name: 'Organisation & Compétences', icon: 'fa-users', scores: [] },
                    ethique: { name: 'Éthique & Conformité', icon: 'fa-balance-scale', scores: [] }
                };
                
                answers.forEach(answer => {
                    if (categories[answer.category]) {
                        categories[answer.category].scores.push(answer.answer_value);
                    }
                });
                
                // Calculer la moyenne pour chaque catégorie
                Object.keys(categories).forEach(key => {
                    const scores = categories[key].scores;
                    categories[key].average = scores.length > 0 
                        ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 20)
                        : 0;
                });
                
                return categories;
            }
            
            function displayCategoryScores(categoryScores) {
                const container = document.getElementById('categoryScores');
                container.innerHTML = Object.entries(categoryScores).map(([key, cat]) => {
                    const color = cat.average < 40 ? 'red' : cat.average < 60 ? 'orange' : cat.average < 80 ? 'yellow' : 'green';
                    return '<div class="border-l-4 border-' + color + '-500 pl-4">' +
                           '<div class="flex items-center justify-between mb-2">' +
                           '<span class="font-semibold"><i class="fas ' + cat.icon + ' mr-2 text-indigo-600"></i>' + cat.name + '</span>' +
                           '<span class="text-2xl font-bold text-' + color + '-600">' + cat.average + '%</span>' +
                           '</div>' +
                           '<div class="w-full bg-gray-200 rounded-full h-2">' +
                           '<div class="bg-' + color + '-500 h-2 rounded-full" style="width: ' + cat.average + '%"></div>' +
                           '</div>' +
                           '</div>';
                }).join('');
            }
            
            function createRadarChart(categoryScores) {
                const ctx = document.getElementById('radarChart').getContext('2d');
                
                new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: Object.values(categoryScores).map(c => c.name),
                        datasets: [{
                            label: 'Score de maturité',
                            data: Object.values(categoryScores).map(c => c.average),
                            backgroundColor: 'rgba(99, 102, 241, 0.2)',
                            borderColor: 'rgb(99, 102, 241)',
                            pointBackgroundColor: 'rgb(99, 102, 241)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(99, 102, 241)'
                        }]
                    },
                    options: {
                        scales: {
                            r: {
                                beginAtZero: true,
                                max: 100,
                                ticks: { stepSize: 20 }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }
            
            function generateRecommendations(categoryScores) {
                const recommendations = [];
                
                Object.entries(categoryScores).forEach(([key, cat]) => {
                    if (cat.average < 60) {
                        let rec = {
                            category: cat.name,
                            icon: cat.icon,
                            priority: cat.average < 40 ? 'Haute' : 'Moyenne',
                            color: cat.average < 40 ? 'red' : 'orange',
                            actions: []
                        };
                        
                        if (key === 'vision') {
                            rec.actions = [
                                'Définir une stratégie IA claire alignée avec les objectifs business',
                                'Obtenir le sponsorship de la direction générale',
                                'Établir un budget dédié aux initiatives IA'
                            ];
                        } else if (key === 'data') {
                            rec.actions = [
                                'Mettre en place une gouvernance des données',
                                'Améliorer la qualité et l\\'accessibilité des données',
                                'Investir dans une infrastructure de données moderne'
                            ];
                        } else if (key === 'technologie') {
                            rec.actions = [
                                'Adopter des plateformes cloud IA (Azure ML, AWS SageMaker)',
                                'Mettre en place des pratiques MLOps',
                                'Provisionner des ressources de calcul adaptées'
                            ];
                        } else if (key === 'organisation') {
                            rec.actions = [
                                'Recruter ou former des data scientists et ML engineers',
                                'Créer une culture d\\'innovation autour de l\\'IA',
                                'Favoriser la collaboration entre métiers et technique'
                            ];
                        } else if (key === 'ethique') {
                            rec.actions = [
                                'Définir des principes éthiques pour l\\'IA',
                                'Mettre en place des processus de détection des biais',
                                'Assurer la conformité RGPD et AI Act'
                            ];
                        }
                        
                        recommendations.push(rec);
                    }
                });
                
                // Afficher les recommandations
                const container = document.getElementById('recommendations');
                if (recommendations.length === 0) {
                    container.innerHTML = '<p class="text-green-600 text-lg"><i class="fas fa-check-circle mr-2"></i>Excellent ! Votre organisation a un bon niveau de maturité sur tous les domaines.</p>';
                } else {
                    container.innerHTML = recommendations.map(rec => 
                        '<div class="border-l-4 border-' + rec.color + '-500 bg-' + rec.color + '-50 p-6 rounded-r-lg">' +
                        '<div class="flex items-center mb-3">' +
                        '<i class="fas ' + rec.icon + ' text-2xl text-' + rec.color + '-600 mr-3"></i>' +
                        '<h3 class="text-xl font-bold">' + rec.category + '</h3>' +
                        '<span class="ml-auto bg-' + rec.color + '-600 text-white px-3 py-1 rounded-full text-sm">Priorité ' + rec.priority + '</span>' +
                        '</div>' +
                        '<ul class="space-y-2">' +
                        rec.actions.map(action => '<li class="flex items-start"><i class="fas fa-arrow-right text-' + rec.color + '-600 mr-2 mt-1"></i><span>' + action + '</span></li>').join('') +
                        '</ul>' +
                        '</div>'
                    ).join('');
                }
            }
        <\/script>
    </body>
    </html>
  `));v.get("/resources",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ressources - Factorise.io</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/resources-data.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-indigo-600">Factorise.io</a>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/" class="text-gray-700 hover:text-indigo-600">Accueil</a>
                        <a href="/resources" class="text-indigo-600 font-semibold">Ressources</a>
                        <a href="/dashboard" class="text-gray-700 hover:text-indigo-600">Dashboard</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-4">Ressources IA</h1>
                <p class="text-xl text-gray-600">Guides, templates et cas clients pour accélérer votre transformation IA</p>
            </div>

            <!-- Guides -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-6">
                    <i class="fas fa-book text-indigo-600 mr-3"></i>Guides & Documentation
                </h2>
                <div id="guidesContainer" class="grid md:grid-cols-3 gap-6"></div>
            </section>

            <!-- Templates -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-6">
                    <i class="fas fa-file-alt text-indigo-600 mr-3"></i>Templates & Outils
                </h2>
                <div id="templatesContainer" class="grid md:grid-cols-3 gap-6"></div>
            </section>

            <!-- Case Studies -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-6">
                    <i class="fas fa-briefcase text-indigo-600 mr-3"></i>Cas Clients
                </h2>
                <div id="casestudiesContainer" class="grid md:grid-cols-3 gap-6"></div>
            </section>

            <!-- CTA -->
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-12 text-center">
                <h2 class="text-3xl font-bold mb-4">Besoin d'accompagnement personnalisé ?</h2>
                <p class="text-xl mb-6">Nos experts sont à votre disposition pour vous guider</p>
                <a href="/register" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
                    Démarrer votre évaluation
                </a>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            const lang = getCurrentLang();
            const resources = getResources(lang);
            
            // Render resource card
            function renderResourceCard(resource) {
                return \`
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer"
                         onclick="downloadResource('\${resource.downloadUrl}', '\${resource.title}')">
                        <div class="flex items-center mb-4">
                            <i class="fas \${resource.icon} text-3xl text-indigo-600 mr-4"></i>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold">\${resource.title}</h3>
                                <div class="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                                    <span class="bg-indigo-100 text-indigo-600 px-2 py-1 rounded">\${resource.type}</span>
                                    <span>\${resource.size}</span>
                                    \${resource.pages ? '<span>' + resource.pages + '</span>' : ''}
                                    \${resource.industry ? '<span class="bg-green-100 text-green-600 px-2 py-1 rounded">' + resource.industry + '</span>' : ''}
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">\${resource.description}</p>
                        <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                            <i class="fas fa-download mr-2"></i>Télécharger
                        </button>
                    </div>
                \`;
            }
            
            // Render all resources
            document.getElementById('guidesContainer').innerHTML = 
                resources.guides.map(renderResourceCard).join('');
            document.getElementById('templatesContainer').innerHTML = 
                resources.templates.map(renderResourceCard).join('');
            document.getElementById('casestudiesContainer').innerHTML = 
                resources.casestudies.map(renderResourceCard).join('');
        <\/script>
    </body>
    </html>
  `));v.post("/api/contact",async e=>{try{const{name:t,email:s,phone:i,company:a,role:r,message:n,preferredDate:c,budget:l}=await e.req.json();return console.log("Contact form submission:",{name:t,email:s,company:a}),e.json({success:!0,message:"Votre demande a été envoyée avec succès. Nous vous recontacterons sous 24h."})}catch{return e.json({error:"Erreur lors de l'envoi du formulaire"},500)}});v.get("/services",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Services - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/services-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getServicesData(lang);
            
            document.getElementById('app').innerHTML = renderNavigation('services') + \`
              <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 text-center">
                  <h1 class="text-5xl font-bold mb-6">\${data.hero.title}</h1>
                  <p class="text-2xl mb-8 opacity-90">\${data.hero.subtitle}</p>
                  <div class="flex justify-center gap-4">
                    <a href="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Démarrer un Projet</a>
                    <a href="/testimonials" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600">Voir Études de Cas</a>
                  </div>
                </div>
              </div>

              <div class="max-w-7xl mx-auto px-4 py-12">
                <!-- Services Grid -->
                <div class="grid md:grid-cols-2 gap-8 mb-16">
                  \${data.services.map((service, idx) => \`
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group">
                      <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <i class="fas \${service.icon} text-5xl mr-4"></i>
                            <div>
                              <h2 class="text-2xl font-bold">\${service.title}</h2>
                              <p class="text-indigo-100 text-sm mt-1">\${service.tagline}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="p-6">
                        <p class="text-gray-700 mb-6">\${service.description}</p>
                        
                        <!-- Features -->
                        <div class="mb-6">
                          <h3 class="font-bold text-lg mb-3 flex items-center">
                            <i class="fas fa-list-check text-indigo-600 mr-2"></i>
                            Fonctionnalités
                          </h3>
                          <div class="grid gap-2">
                            \${service.features.slice(0,5).map(f => 
                              '<div class="flex items-start text-sm">' +
                                '<i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>' +
                                '<span class="text-gray-600">' + f + '</span>' +
                              '</div>'
                            ).join('')}
                          </div>
                        </div>
                        
                        <!-- Benefits -->
                        <div class="mb-6">
                          <h3 class="font-bold text-lg mb-3 flex items-center">
                            <i class="fas fa-award text-indigo-600 mr-2"></i>
                            Bénéfices
                          </h3>
                          <div class="grid gap-2">
                            \${service.benefits.slice(0,3).map(b => 
                              '<div class="flex items-start text-sm">' +
                                '<i class="fas fa-arrow-right text-indigo-500 mr-2 mt-1"></i>' +
                                '<span class="text-gray-600">' + b + '</span>' +
                              '</div>'
                            ).join('')}
                          </div>
                        </div>
                        
                        <!-- Metrics -->
                        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                          <h4 class="font-bold text-sm mb-3 text-gray-700">Métriques Clés</h4>
                          <div class="grid grid-cols-3 gap-4">
                            \${Object.entries(service.metrics).map(([key, val]) => 
                              '<div class="text-center">' +
                                '<div class="text-2xl font-bold text-indigo-600">' + val + '</div>' +
                                '<div class="text-xs text-gray-600 mt-1">' + key + '</div>' +
                              '</div>'
                            ).join('')}
                          </div>
                        </div>
                        
                        <!-- CTA -->
                        <div class="mt-6">
                          <a href="/contact" class="block text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                            En savoir plus
                          </a>
                        </div>
                      </div>
                    </div>
                  \`).join('')}
                </div>

                <div class="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-12 text-center">
                  <h2 class="text-3xl font-bold mb-4">\${data.cta.title}</h2>
                  <p class="text-xl mb-6">\${data.cta.subtitle}</p>
                  <a href="/contact" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    \${data.cta.primaryButton}
                  </a>
                </div>
              </div>
            \` + renderFooter();
          });
        <\/script>
    </body>
    </html>
  `));v.get("/about",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>À Propos - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/about-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getAboutData(lang);
            
            document.getElementById('app').innerHTML = renderNavigation('about') + \`
              <div class="max-w-7xl mx-auto px-4 py-12">
                <div class="text-center mb-12">
                  <h1 class="text-4xl font-bold mb-4">\${data.hero.title}</h1>
                  <p class="text-xl text-gray-600 mb-4">\${data.hero.subtitle}</p>
                  <p class="text-gray-600 max-w-3xl mx-auto">\${data.hero.description}</p>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                  \${data.stats.map(stat => \`
                    <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                      <i class="fas \${stat.icon} text-3xl text-indigo-600 mb-2"></i>
                      <div class="text-3xl font-bold text-indigo-600">\${stat.value}</div>
                      <div class="text-sm text-gray-600">\${stat.label}</div>
                    </div>
                  \`).join('')}
                </div>

                <!-- Vision & Mission -->
                <div class="grid md:grid-cols-2 gap-8 mb-16">
                  <div class="bg-white rounded-xl shadow-lg p-8">
                    <i class="fas \${data.vision.icon} text-4xl text-indigo-600 mb-4"></i>
                    <h2 class="text-2xl font-bold mb-4">\${data.vision.title}</h2>
                    <p class="text-gray-600">\${data.vision.content}</p>
                  </div>
                  <div class="bg-white rounded-xl shadow-lg p-8">
                    <i class="fas \${data.mission.icon} text-4xl text-indigo-600 mb-4"></i>
                    <h2 class="text-2xl font-bold mb-4">\${data.mission.title}</h2>
                    <p class="text-gray-600">\${data.mission.content}</p>
                  </div>
                </div>

                <!-- Values -->
                <div class="mb-16">
                  <h2 class="text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
                  <div class="grid md:grid-cols-3 gap-6">
                    \${data.values.map(value => \`
                      <div class="bg-white rounded-xl shadow-lg p-6">
                        <i class="fas \${value.icon} text-3xl text-indigo-600 mb-3"></i>
                        <h3 class="text-xl font-bold mb-2">\${value.title}</h3>
                        <p class="text-gray-600">\${value.description}</p>
                      </div>
                    \`).join('')}
                  </div>
                </div>

                <!-- Team -->
                <div class="mb-16">
                  <h2 class="text-3xl font-bold text-center mb-4">\${data.team.title}</h2>
                  <p class="text-center text-gray-600 mb-8">\${data.team.subtitle}</p>
                  <div class="grid md:grid-cols-3 gap-6">
                    \${data.team.members.map(member => \`
                      <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div class="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                          \${member.avatar}
                        </div>
                        <h3 class="text-xl font-bold">\${member.name}</h3>
                        <p class="text-indigo-600 mb-2">\${member.role}</p>
                        <p class="text-sm text-gray-600">\${member.bio}</p>
                      </div>
                    \`).join('')}
                  </div>
                </div>

                <!-- CTA -->
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-12 text-center">
                  <h2 class="text-3xl font-bold mb-4">\${data.cta.title}</h2>
                  <p class="text-xl mb-6">\${data.cta.subtitle}</p>
                  <a href="/contact" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    \${data.cta.primaryButton}
                  </a>
                </div>
              </div>
            \` + renderFooter();
          });
        <\/script>
    </body>
    </html>
  `));v.get("/contact",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            document.getElementById('app').innerHTML = renderNavigation('contact') + \`
              <div class="max-w-4xl mx-auto px-4 py-12">
                <div class="text-center mb-12">
                  <h1 class="text-4xl font-bold mb-4" data-i18n="contact_title">Contactez-Nous</h1>
                  <p class="text-xl text-gray-600" data-i18n="contact_subtitle">Réservez Votre Consultation Gratuite</p>
                  <p class="text-gray-500 mt-2" data-i18n="contact_desc">Prêt à transformer votre entreprise avec l'IA ?</p>
                </div>

                <div class="bg-white rounded-xl shadow-lg p-8">
                  <form id="contactForm" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium mb-2" data-i18n="contact_name">Nom complet</label>
                        <input type="text" name="name" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                      </div>
                      <div>
                        <label class="block text-sm font-medium mb-2" data-i18n="contact_email">Email professionnel</label>
                        <input type="email" name="email" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                      </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium mb-2" data-i18n="contact_phone">Téléphone</label>
                        <input type="tel" name="phone" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                      </div>
                      <div>
                        <label class="block text-sm font-medium mb-2" data-i18n="contact_company">Entreprise</label>
                        <input type="text" name="company" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                      </div>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium mb-2" data-i18n="contact_message">Parlez-nous de votre projet</label>
                      <textarea name="message" rows="5" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                    
                    <div id="formMessage" class="hidden"></div>
                    
                    <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold" data-i18n="contact_submit">
                      Envoyer la demande
                    </button>
                  </form>
                </div>

                <div class="mt-12 grid md:grid-cols-3 gap-6">
                  <div class="bg-white p-6 rounded-lg text-center">
                    <i class="fas fa-envelope text-3xl text-indigo-600 mb-3"></i>
                    <h3 class="font-bold mb-2">Email</h3>
                    <p class="text-gray-600">contact@factor-ai.com</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg text-center">
                    <i class="fas fa-phone text-3xl text-indigo-600 mb-3"></i>
                    <h3 class="font-bold mb-2">Téléphone</h3>
                    <p class="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg text-center">
                    <i class="fas fa-map-marker-alt text-3xl text-indigo-600 mb-3"></i>
                    <h3 class="font-bold mb-2">Adresse</h3>
                    <p class="text-gray-600">Paris, France</p>
                  </div>
                </div>
              </div>
            \` + renderFooter();

            // Form submission
            document.getElementById('contactForm').addEventListener('submit', async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                const result = await response.json();
                const messageEl = document.getElementById('formMessage');
                messageEl.classList.remove('hidden');
                
                if (response.ok) {
                  messageEl.className = 'bg-green-100 text-green-800 p-4 rounded-lg';
                  messageEl.textContent = result.message;
                  e.target.reset();
                } else {
                  messageEl.className = 'bg-red-100 text-red-800 p-4 rounded-lg';
                  messageEl.textContent = result.error;
                }
              } catch (error) {
                document.getElementById('formMessage').className = 'bg-red-100 text-red-800 p-4 rounded-lg block';
                document.getElementById('formMessage').textContent = 'Erreur réseau';
              }
            });
          });
        <\/script>
    </body>
    </html>
  `));v.get("/faq",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FAQ - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/faq-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getFaqData(lang);
            
            document.getElementById('app').innerHTML = renderNavigation('faq') + \`
              <div class="max-w-6xl mx-auto px-4 py-12">
                <div class="text-center mb-12">
                  <h1 class="text-4xl font-bold mb-4">\${data.hero.title}</h1>
                  <p class="text-xl text-gray-600">\${data.hero.subtitle}</p>
                  <div class="mt-6 max-w-xl mx-auto">
                    <input type="text" id="searchInput" placeholder="\${data.hero.searchPlaceholder}" 
                           class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                  </div>
                </div>

                <div id="faqContent" class="space-y-6">
                  \${data.categories.map(cat => \`
                    <div class="bg-white rounded-xl shadow-lg p-6">
                      <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <i class="fas \${cat.icon} text-indigo-600 mr-3"></i>
                        \${cat.name}
                      </h2>
                      <div class="space-y-4">
                        \${cat.questions.map((q, idx) => \`
                          <div class="border-b last:border-0 pb-4 last:pb-0">
                            <button onclick="toggleFaq(this)" class="w-full text-left flex justify-between items-center py-2 hover:text-indigo-600">
                              <span class="font-semibold">\${q.question}</span>
                              <i class="fas fa-chevron-down transition-transform"></i>
                            </button>
                            <div class="hidden mt-2 text-gray-600 pl-4">\${q.answer}</div>
                          </div>
                        \`).join('')}
                      </div>
                    </div>
                  \`).join('')}
                </div>

                <div class="mt-12 bg-indigo-600 text-white rounded-xl p-8 text-center">
                  <h2 class="text-2xl font-bold mb-2">\${data.cta.title}</h2>
                  <p class="mb-4">\${data.cta.subtitle}</p>
                  <a href="/contact" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    \${data.cta.buttonText}
                  </a>
                </div>
              </div>
            \` + renderFooter();

            // Search functionality
            document.getElementById('searchInput').addEventListener('input', (e) => {
              const results = searchFaqQuestions(e.target.value, lang);
              if (e.target.value.trim()) {
                document.getElementById('faqContent').innerHTML = results.length > 0 ? 
                  results.map(r => \`
                    <div class="bg-white rounded-xl shadow-lg p-6">
                      <div class="flex items-center mb-2">
                        <i class="fas \${r.categoryIcon} text-indigo-600 mr-2"></i>
                        <span class="text-sm text-gray-500">\${r.categoryName}</span>
                      </div>
                      <h3 class="font-bold mb-2">\${r.question}</h3>
                      <p class="text-gray-600">\${r.answer}</p>
                    </div>
                  \`).join('') : '<p class="text-center text-gray-500">' + data.cta.subtitle + '</p>';
              } else {
                location.reload();
              }
            });
          });

          function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
          }
        <\/script>
    </body>
    </html>
  `));v.get("/testimonials",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Témoignages - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/testimonials-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getTestimonialsData(lang);
            
            document.getElementById('app').innerHTML = renderNavigation('testimonials') + \`
              <!-- Hero Section -->
              <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 text-center">
                  <h1 class="text-5xl font-bold mb-6">\${data.hero.title}</h1>
                  <p class="text-2xl mb-12 opacity-90">\${data.hero.subtitle}</p>
                  
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    \${data.hero.stats.map(stat => \`
                      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div class="text-4xl font-bold mb-2">\${stat.value}</div>
                        <div class="text-sm text-indigo-100">\${stat.label}</div>
                      </div>
                    \`).join('')}
                  </div>
                </div>
              </div>

              <div class="max-w-7xl mx-auto px-4 py-16">
                <!-- Case Studies Section (Featured First) -->
                <div class="mb-20">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold mb-4">Études de Cas Détaillées</h2>
                    <p class="text-xl text-gray-600">Découvrez comment nous transformons les entreprises avec l'IA</p>
                  </div>
                  
                  <div class="space-y-12">
                    \${data.caseStudies.map((cs, idx) => 
                      '<div class="bg-white rounded-2xl shadow-xl overflow-hidden">' +
                        '<!-- Header with gradient -->' +
                        '<div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">' +
                          '<div class="flex items-start justify-between mb-4">' +
                            '<div>' +
                              '<h3 class="text-3xl font-bold mb-2">' + cs.title + '</h3>' +
                              '<div class="flex items-center text-indigo-100 text-sm">' +
                                '<i class="fas fa-building mr-2"></i>' + cs.client + 
                                '<span class="mx-3">•</span>' +
                                '<i class="fas fa-industry mr-2"></i>' + cs.industry +
                              '</div>' +
                            '</div>' +
                            '<div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-bold">' +
                              cs.duration +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                        
                        '<!-- Body Content -->' +
                        '<div class="p-8">' +
                          '<!-- Challenge Section -->' +
                          '<div class="mb-8">' +
                            '<div class="flex items-center mb-4">' +
                              '<div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">' +
                                '<i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>' +
                              '</div>' +
                              '<h4 class="text-2xl font-bold text-gray-800">Le Défi</h4>' +
                            '</div>' +
                            '<p class="text-gray-700 text-lg leading-relaxed pl-13">' + cs.challenge + '</p>' +
                          '</div>' +
                          
                          '<!-- Solution Section -->' +
                          '<div class="mb-8">' +
                            '<div class="flex items-center mb-4">' +
                              '<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">' +
                                '<i class="fas fa-lightbulb text-blue-600 text-xl"></i>' +
                              '</div>' +
                              '<h4 class="text-2xl font-bold text-gray-800">Notre Solution</h4>' +
                            '</div>' +
                            '<p class="text-gray-700 text-lg leading-relaxed pl-13 mb-4">' + cs.solution + '</p>' +
                            '<div class="pl-13">' +
                              '<h5 class="font-bold text-gray-700 mb-3">Technologies Utilisées:</h5>' +
                              '<div class="flex flex-wrap gap-2">' +
                                cs.technologies.map(tech => 
                                  '<span class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">' +
                                    '<i class="fas fa-code mr-1"></i>' + tech +
                                  '</span>'
                                ).join('') +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                          
                          '<!-- Results Section with Metrics -->' +
                          '<div class="mb-6">' +
                            '<div class="flex items-center mb-4">' +
                              '<div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">' +
                                '<i class="fas fa-chart-line text-green-600 text-xl"></i>' +
                              '</div>' +
                              '<h4 class="text-2xl font-bold text-gray-800">Résultats Mesurables</h4>' +
                            '</div>' +
                            '<div class="grid md:grid-cols-3 gap-4 mb-6">' +
                              cs.results.slice(0,3).map(result => 
                                '<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">' +
                                  '<i class="fas fa-check-circle text-green-600 text-2xl mb-2"></i>' +
                                  '<p class="text-gray-800 font-semibold">' + result + '</p>' +
                                '</div>'
                              ).join('') +
                            '</div>' +
                          '</div>' +
                          
                          '<!-- Impact Metrics Bar -->' +
                          (cs.metrics && cs.metrics.after ? 
                            '<div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">' +
                              '<h5 class="text-center font-bold text-gray-700 mb-4">Métriques Clés (Après)</h5>' +
                              '<div class="grid md:grid-cols-4 gap-4 text-center">' +
                                Object.entries(cs.metrics.after).map(([key, val]) =>
                                  '<div>' +
                                    '<div class="text-2xl font-bold text-indigo-600 mb-1">' + val + '</div>' +
                                    '<div class="text-xs text-gray-600 font-medium">' + key + '</div>' +
                                  '</div>'
                                ).join('') +
                              '</div>' +
                            '</div>' 
                          : '') +
                          
                          '<!-- Testimonial Quote -->' +
                          (cs.testimonialQuote ? 
                            '<div class="mt-6 bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-600">' +
                              '<i class="fas fa-quote-left text-indigo-300 text-2xl mb-3"></i>' +
                              '<p class="text-gray-700 italic text-lg leading-relaxed">' + cs.testimonialQuote + '</p>' +
                            '</div>'
                          : '') +
                        '</div>' +
                      '</div>'
                    ).join('')}
                  </div>
                </div>

                <!-- Testimonials Grid Section -->
                <div class="mb-16">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
                    <p class="text-xl text-gray-600">Plus de 50+ entreprises nous font confiance</p>
                  </div>
                  
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    \${data.testimonials.slice(0,6).map(testimonial => 
                      '<div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">' +
                        '<div class="flex items-center mb-4">' +
                          '<div class="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">' +
                            testimonial.avatar +
                          '</div>' +
                          '<div>' +
                            '<div class="font-bold text-gray-800">' + testimonial.clientName + '</div>' +
                            '<div class="text-sm text-gray-600">' + testimonial.clientRole + '</div>' +
                            '<div class="text-xs text-indigo-600 font-medium">' + testimonial.companyName + '</div>' +
                          '</div>' +
                        '</div>' +
                        '<div class="flex text-yellow-400 mb-3 text-lg">' +
                          '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
                        '</div>' +
                        '<p class="text-gray-700 italic leading-relaxed">' + (testimonial.quote || testimonial.feedback || '') + '</p>' +
                      '</div>'
                    ).join('')}
                  </div>
                </div>

                <!-- Final CTA -->
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12 text-center shadow-2xl">
                  <h2 class="text-4xl font-bold mb-4">\${data.cta.title}</h2>
                  <p class="text-xl mb-8 opacity-90">\${data.cta.subtitle}</p>
                  <div class="flex justify-center gap-4">
                    <a href="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      \${data.cta.primaryButton}
                    </a>
                    <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors">
                      Nos Services
                    </a>
                  </div>
                </div>
              </div>
            \` + renderFooter();
          });
        <\/script>
    </body>
    </html>
  `));v.get("/use-cases",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cas d'Usage IA - Factor AI</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/unified-use-cases-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
        <style>
          .use-case-card { cursor: pointer; transition: all 0.3s; }
          .use-case-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
          .filter-chip { cursor: pointer; transition: all 0.2s; }
          .filter-chip:hover { transform: translateY(-2px); }
          .filter-chip.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
          .badge-quick-win { background: #10b981; color: white; }
          .badge-case-study { background: #3b82f6; color: white; }
          .badge-llm { background: #8b5cf6; color: white; }
          .badge-ml { background: #f97316; color: white; }
          .badge-automation { background: #06b6d4; color: white; }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        
        <!-- Modal for detailed case study -->
        <div id="detailModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 overflow-y-auto">
          <div class="min-h-screen px-4 py-8 flex items-center justify-center">
            <div class="bg-white rounded-2xl max-w-5xl w-full shadow-2xl relative">
              <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <i class="fas fa-times text-2xl"></i>
              </button>
              <div id="modalContent"></div>
            </div>
          </div>
        </div>
        
        <script>
          let currentFilter = 'all';
          let allUseCases = [];
          
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getUnifiedUseCasesData(lang);
            allUseCases = data.useCases;
            
            document.getElementById('app').innerHTML = renderNavigation('use-cases') + \`
              <!-- Hero Section -->
              <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 text-center">
                  <h1 class="text-5xl font-bold mb-6">\${data.hero.title}</h1>
                  <p class="text-2xl mb-4 opacity-90">\${data.hero.subtitle}</p>
                  <p class="text-lg opacity-80 max-w-3xl mx-auto">\${data.hero.description}</p>
                </div>
              </div>

              <div class="max-w-7xl mx-auto px-4 py-16">
                <!-- Categories -->
                \${data.categories.map((category, catIdx) => \`
                  <div class="mb-20">
                    <!-- Category Header -->
                    <div class="text-center mb-12">
                      <div class="inline-block mb-4">
                        <div class="w-20 h-20 bg-gradient-to-r \${category.color} rounded-2xl flex items-center justify-center">
                          <i class="fas \${category.icon} text-4xl text-white"></i>
                        </div>
                      </div>
                      <h2 class="text-4xl font-bold mb-3">\${category.name}</h2>
                      <p class="text-xl text-gray-600">\${category.description}</p>
                    </div>

                    <!-- Use Cases Grid -->
                    <div class="grid md:grid-cols-2 gap-8">
                      \${category.useCases.map((useCase, ucIdx) => 
                        '<div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">' +
                          '<!-- Header -->' +
                          '<div class="bg-gradient-to-r ' + category.color + ' p-6 text-white">' +
                            '<h3 class="text-2xl font-bold mb-2">' + useCase.title + '</h3>' +
                            '<div class="text-sm opacity-90">' +
                              '<i class="fas fa-industry mr-2"></i>' + useCase.industry +
                            '</div>' +
                          '</div>' +
                          
                          '<div class="p-6">' +
                            '<!-- Challenge -->' +
                            '<div class="mb-6">' +
                              '<div class="flex items-center mb-3">' +
                                '<div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">' +
                                  '<i class="fas fa-exclamation-circle text-red-600"></i>' +
                                '</div>' +
                                '<h4 class="text-lg font-bold">Défi</h4>' +
                              '</div>' +
                              '<p class="text-gray-700 pl-11">' + useCase.challenge + '</p>' +
                            '</div>' +
                            
                            '<!-- Solution -->' +
                            '<div class="mb-6">' +
                              '<div class="flex items-center mb-3">' +
                                '<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">' +
                                  '<i class="fas fa-lightbulb text-blue-600"></i>' +
                                '</div>' +
                                '<h4 class="text-lg font-bold">Solution</h4>' +
                              '</div>' +
                              '<p class="text-gray-700 pl-11 mb-3">' + useCase.solution + '</p>' +
                              '<div class="pl-11 flex flex-wrap gap-2">' +
                                useCase.technologies.map(tech =>
                                  '<span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">' +
                                    '<i class="fas fa-code mr-1"></i>' + tech +
                                  '</span>'
                                ).join('') +
                              '</div>' +
                            '</div>' +
                            
                            '<!-- Benefits -->' +
                            '<div class="mb-6">' +
                              '<div class="flex items-center mb-3">' +
                                '<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">' +
                                  '<i class="fas fa-check-circle text-green-600"></i>' +
                                '</div>' +
                                '<h4 class="text-lg font-bold">Bénéfices</h4>' +
                              '</div>' +
                              '<div class="pl-11 space-y-2">' +
                                useCase.benefits.map(benefit =>
                                  '<div class="flex items-start text-sm">' +
                                    '<i class="fas fa-arrow-right text-green-500 mr-2 mt-1"></i>' +
                                    '<span class="text-gray-700">' + benefit + '</span>' +
                                  '</div>'
                                ).join('') +
                              '</div>' +
                            '</div>' +
                            
                            '<!-- Metrics -->' +
                            '<div class="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-4">' +
                              '<h4 class="font-bold text-sm mb-3">Résultats Mesurables</h4>' +
                              '<div class="grid grid-cols-3 gap-3">' +
                                Object.entries(useCase.metrics).map(([key, val]) =>
                                  '<div class="text-center">' +
                                    '<div class="text-2xl font-bold text-indigo-600">' + val + '</div>' +
                                    '<div class="text-xs text-gray-600 mt-1">' + key + '</div>' +
                                  '</div>'
                                ).join('') +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>'
                      ).join('')}
                    </div>
                  </div>
                \`).join('')}

                <!-- CTA Final -->
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12 text-center shadow-2xl">
                  <h2 class="text-4xl font-bold mb-4">\${data.cta.title}</h2>
                  <p class="text-xl mb-8 opacity-90">\${data.cta.subtitle}</p>
                  <div class="flex justify-center gap-4">
                    <a href="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      \${data.cta.primaryButton}
                    </a>
                    <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors">
                      \${data.cta.secondaryButton}
                    </a>
                  </div>
                </div>
              </div>
            \` + renderFooter();
          });
        <\/script>
    </body>
    </html>
  `));v.get("/case-studies",e=>e.redirect("/use-cases",301));v.get("/case-studies-old",e=>e.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Études de Cas - Factor AI (OLD)</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="/static/translations.js"><\/script>
        <script src="/static/case-studies-data.js"><\/script>
        <script src="/static/nav-component.js"><\/script>
        <script src="/static/i18n-page.js"><\/script>
    </head>
    <body class="bg-gray-50">
        <div id="app"></div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getCaseStudiesData(lang);
            
            document.getElementById('app').innerHTML = renderNavigation('case-studies') + \`
              <!-- Hero Section -->
              <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 text-center">
                  <h1 class="text-5xl font-bold mb-6">\${data.hero.title}</h1>
                  <p class="text-2xl mb-4 opacity-90">\${data.hero.subtitle}</p>
                  <p class="text-lg opacity-80 max-w-3xl mx-auto">\${data.hero.description}</p>
                </div>
              </div>

              <!-- Filters -->
              <div class="bg-white shadow-md sticky top-16 z-40">
                <div class="max-w-7xl mx-auto px-4 py-4">
                  <div class="flex items-center justify-center gap-4 flex-wrap">
                    \${data.filters.map(filter => \`
                      <button 
                        onclick="filterCaseStudies('\${filter.id}')"
                        class="filter-btn px-4 py-2 rounded-lg transition-all hover:shadow-md \${filter.id === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
                        data-filter="\${filter.id}">
                        <i class="fas \${filter.icon} mr-2"></i>
                        \${filter.label}
                      </button>
                    \`).join('')}
                  </div>
                </div>
              </div>

              <div class="max-w-7xl mx-auto px-4 py-16">
                <!-- Case Studies -->
                <div id="caseStudiesGrid" class="space-y-20">
                  \${data.caseStudies.map((cs, idx) => \`
                    <div class="case-study-card" data-category="\${cs.category}">
                      <!-- Case Study Header -->
                      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <!-- Hero Banner -->
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
                          <div class="flex items-start justify-between mb-6">
                            <div>
                              <div class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <i class="fas fa-star mr-2"></i>\${cs.featured ? 'Featured Case' : 'Success Story'}
                              </div>
                              <h2 class="text-4xl font-bold mb-3">\${cs.title}</h2>
                              <p class="text-xl text-indigo-100 mb-4">\${cs.tagline}</p>
                              <div class="flex items-center gap-6 text-sm">
                                <div><i class="fas fa-building mr-2"></i>\${cs.client}</div>
                                <div><i class="fas fa-industry mr-2"></i>\${cs.industry}</div>
                                <div><i class="fas fa-users mr-2"></i>\${cs.companySize}</div>
                                <div><i class="fas fa-map-marker-alt mr-2"></i>\${cs.location}</div>
                                <div><i class="fas fa-calendar mr-2"></i>\${cs.duration}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="p-12">
                          <!-- Challenge Section -->
                          <div class="mb-16">
                            <div class="flex items-center mb-6">
                              <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                                <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                              </div>
                              <div>
                                <h3 class="text-3xl font-bold text-gray-800">\${cs.challenge.title}</h3>
                                <p class="text-gray-600">La situation avant notre intervention</p>
                              </div>
                            </div>
                            <p class="text-xl text-gray-700 leading-relaxed mb-6">\${cs.challenge.description}</p>
                            
                            <div class="bg-red-50 rounded-2xl p-6 mb-6">
                              <h4 class="font-bold text-lg mb-4 text-red-800">Points de Douleur Critiques:</h4>
                              <div class="grid md:grid-cols-2 gap-4">
                                \${cs.challenge.painPoints.map(point =>
                                  '<div class="flex items-start">' +
                                    '<i class="fas fa-times-circle text-red-500 mr-3 mt-1"></i>' +
                                    '<span class="text-gray-700">' + point + '</span>' +
                                  '</div>'
                                ).join('')}
                              </div>
                            </div>

                            <div class="bg-gray-50 rounded-2xl p-6 border-l-4 border-red-500">
                              <i class="fas fa-quote-left text-red-300 text-3xl mb-3"></i>
                              <p class="text-xl italic text-gray-700 mb-4">\${cs.challenge.quote}</p>
                              <div class="flex items-center">
                                <div class="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                  \${cs.challenge.quoteAuthor.substring(0,2).toUpperCase()}
                                </div>
                                <div>
                                  <div class="font-bold">\${cs.challenge.quoteAuthor}</div>
                                  <div class="text-sm text-gray-600">\${cs.challenge.quoteRole}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Solution Section -->
                          <div class="mb-16">
                            <div class="flex items-center mb-6">
                              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                                <i class="fas fa-lightbulb text-blue-600 text-2xl"></i>
                              </div>
                              <div>
                                <h3 class="text-3xl font-bold text-gray-800">\${cs.solution.title}</h3>
                                <p class="text-gray-600">Comment nous avons résolu le problème</p>
                              </div>
                            </div>
                            <p class="text-xl text-gray-700 leading-relaxed mb-6">\${cs.solution.description}</p>

                            <div class="grid md:grid-cols-2 gap-8 mb-6">
                              <!-- Approach -->
                              <div class="bg-blue-50 rounded-2xl p-6">
                                <h4 class="font-bold text-lg mb-4 text-blue-800 flex items-center">
                                  <i class="fas fa-route mr-2"></i>Notre Approche
                                </h4>
                                <div class="space-y-3">
                                  \${cs.solution.approach.map((step, i) =>
                                    '<div class="flex items-start">' +
                                      '<div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-1">' + (i+1) + '</div>' +
                                      '<span class="text-gray-700 text-sm">' + step + '</span>' +
                                    '</div>'
                                  ).join('')}
                                </div>
                              </div>

                              <!-- Features -->
                              <div class="bg-blue-50 rounded-2xl p-6">
                                <h4 class="font-bold text-lg mb-4 text-blue-800 flex items-center">
                                  <i class="fas fa-magic mr-2"></i>Fonctionnalités Clés
                                </h4>
                                <div class="space-y-3">
                                  \${cs.solution.features.map(feature =>
                                    '<div class="flex items-start">' +
                                      '<i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>' +
                                      '<span class="text-gray-700 text-sm">' + feature + '</span>' +
                                    '</div>'
                                  ).join('')}
                                </div>
                              </div>
                            </div>

                            <!-- Technologies -->
                            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                              <h4 class="font-bold text-lg mb-4 text-blue-800 flex items-center">
                                <i class="fas fa-code mr-2"></i>Stack Technologique
                              </h4>
                              <div class="flex flex-wrap gap-3">
                                \${cs.solution.technologies.map(tech =>
                                  '<span class="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-blue-200">' +
                                    tech +
                                  '</span>'
                                ).join('')}
                              </div>
                            </div>
                          </div>

                          <!-- Results Section -->
                          <div class="mb-16">
                            <div class="flex items-center mb-6">
                              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                                <i class="fas fa-chart-line text-green-600 text-2xl"></i>
                              </div>
                              <div>
                                <h3 class="text-3xl font-bold text-gray-800">\${cs.results.title}</h3>
                                <p class="text-gray-600">\${cs.results.timeline} - \${cs.results.description}</p>
                              </div>
                            </div>

                            <!-- Metrics Grid -->
                            <div class="grid md:grid-cols-3 gap-6 mb-8">
                              \${cs.results.metrics.map(metric =>
                                '<div class="bg-gradient-to-br from-white to-' + metric.color + '-50 rounded-2xl p-6 shadow-lg border border-' + metric.color + '-200">' +
                                  '<div class="w-12 h-12 bg-' + metric.color + '-100 rounded-xl flex items-center justify-center mb-4">' +
                                    '<i class="fas ' + metric.icon + ' text-' + metric.color + '-600 text-xl"></i>' +
                                  '</div>' +
                                  '<div class="text-sm text-gray-600 mb-2">' + metric.label + '</div>' +
                                  '<div class="grid grid-cols-2 gap-2 mb-3">' +
                                    '<div class="bg-white rounded-lg p-2">' +
                                      '<div class="text-xs text-gray-500">Avant</div>' +
                                      '<div class="font-bold text-gray-800">' + metric.before + '</div>' +
                                    '</div>' +
                                    '<div class="bg-white rounded-lg p-2">' +
                                      '<div class="text-xs text-gray-500">Après</div>' +
                                      '<div class="font-bold text-' + metric.color + '-600">' + metric.after + '</div>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="text-2xl font-bold text-' + metric.color + '-600">' + metric.improvement + '</div>' +
                                '</div>'
                              ).join('')}
                            </div>

                            <!-- Business Impact -->
                            <div class="bg-green-50 rounded-2xl p-6">
                              <h4 class="font-bold text-lg mb-4 text-green-800 flex items-center">
                                <i class="fas fa-trophy mr-2"></i>Impact Business
                              </h4>
                              <div class="grid md:grid-cols-2 gap-3">
                                \${cs.results.businessImpact.map(impact =>
                                  '<div class="flex items-start bg-white rounded-lg p-3">' +
                                    '<i class="fas fa-arrow-up text-green-500 mr-3 mt-1"></i>' +
                                    '<span class="text-gray-700 font-medium">' + impact + '</span>' +
                                  '</div>'
                                ).join('')}
                              </div>
                            </div>
                          </div>

                          <!-- Testimonial -->
                          <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                            <div class="flex items-start mb-6">
                              <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl mr-6 flex-shrink-0">
                                \${cs.testimonial.avatar}
                              </div>
                              <div>
                                <i class="fas fa-quote-left text-3xl text-white/30 mb-4"></i>
                                <p class="text-2xl font-medium mb-4">\${cs.testimonial.quote}</p>
                                <div class="mb-4">
                                  <div class="font-bold text-xl">\${cs.testimonial.author}</div>
                                  <div class="text-indigo-200">\${cs.testimonial.role}</div>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                              <p class="text-white/90 leading-relaxed">\${cs.testimonial.fullStory}</p>
                            </div>
                          </div>

                          <!-- Next Steps -->
                          \${cs.nextSteps && cs.nextSteps.length > 0 ? 
                            '<div class="mt-8 bg-gray-50 rounded-2xl p-6">' +
                              '<h4 class="font-bold text-lg mb-4 flex items-center">' +
                                '<i class="fas fa-road text-indigo-600 mr-2"></i>Prochaines Étapes' +
                              '</h4>' +
                              '<div class="grid md:grid-cols-2 gap-3">' +
                                cs.nextSteps.map(step =>
                                  '<div class="flex items-start">' +
                                    '<i class="fas fa-chevron-right text-indigo-500 mr-3 mt-1"></i>' +
                                    '<span class="text-gray-700">' + step + '</span>' +
                                  '</div>'
                                ).join('') +
                              '</div>' +
                            '</div>'
                          : ''}
                        </div>
                      </div>
                    </div>
                  \`).join('')}
                </div>

                <!-- CTA Final -->
                <div class="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center shadow-2xl">
                  <h2 class="text-4xl font-bold mb-4">\${data.cta.title}</h2>
                  <p class="text-xl mb-8 opacity-90">\${data.cta.subtitle}</p>
                  <div class="flex justify-center gap-4">
                    <a href="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                      \${data.cta.primaryButton}
                    </a>
                    <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors text-lg">
                      \${data.cta.secondaryButton}
                    </a>
                  </div>
                </div>
              </div>

              <script>
                function filterCaseStudies(category) {
                  const cards = document.querySelectorAll('.case-study-card');
                  const buttons = document.querySelectorAll('.filter-btn');
                  
                  buttons.forEach(btn => {
                    if(btn.dataset.filter === category) {
                      btn.className = 'filter-btn px-4 py-2 rounded-lg transition-all hover:shadow-md bg-indigo-600 text-white';
                    } else {
                      btn.className = 'filter-btn px-4 py-2 rounded-lg transition-all hover:shadow-md bg-gray-100 text-gray-700 hover:bg-gray-200';
                    }
                  });
                  
                  cards.forEach(card => {
                    if(category === 'all' || card.dataset.category === category) {
                      card.style.display = 'block';
                    } else {
                      card.style.display = 'none';
                    }
                  });
                }
              <\/script>
            \` + renderFooter();
          });
        <\/script>
    </body>
    </html>
  `));const Ue=new ht,ds=Object.assign({"/src/index.tsx":v});let vt=!1;for(const[,e]of Object.entries(ds))e&&(Ue.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ue.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ue as default};
