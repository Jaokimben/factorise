var yt=Object.defineProperty;var He=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Oe=(e,t,s)=>t.has(e)||He("Cannot "+s);var o=(e,t,s)=>(Oe(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?He("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s,r)=>(Oe(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Oe(e,t,"access private method"),s);var Fe=(e,t,s,r)=>({set _(a){h(e,t,a,s)},get _(){return o(e,t,r)}});var Le=(e,t,s)=>(r,a)=>{let i=-1;return n(0);async function n(l){if(l<=i)throw new Error("next() called multiple times");i=l;let c,d=!1,u;if(e[l]?(u=e[l][0][0],r.req.routeIndex=l):u=l===e.length&&a||void 0,u)try{c=await u(r,()=>n(l+1))}catch(p){if(p instanceof Error&&t)r.error=p,c=await t(p,r),d=!0;else throw p}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||d)&&(r.res=c),r}},Et=Symbol(),jt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,i=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Ct(e,{all:s,dot:r}):{}};async function Ct(e,t){const s=await e.formData();return s?St(s,t):{}}function St(e,t){const s=Object.create(null);return e.forEach((r,a)=>{t.all||a.endsWith("[]")?Rt(s,a,r):s[a]=r}),t.dot&&Object.entries(s).forEach(([r,a])=>{r.includes(".")&&(At(s,r,a),delete s[r])}),s}var Rt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},At=(e,t,s)=>{let r=e;const a=t.split(".");a.forEach((i,n)=>{n===a.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Tt(e),r=Ze(s);return Ot(r,t)},Tt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const a=`@${r}`;return t.push([a,s]),a}),{groups:t,path:e}},Ot=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(r)){e[a]=e[a].replace(r,t[s][1]);break}}return e},we={},Dt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return we[r]||(s[2]?we[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:we[r]=[e,s[1],!0]),we[r]}return null},Me=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Nt=e=>Me(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const a=t.charCodeAt(r);if(a===37){const i=t.indexOf("?",r),n=t.slice(s,i===-1?void 0:i);return Nt(n.includes("%25")?n.replace(/%25/g,"%2525"):n)}else if(a===63)break}return t.slice(s,r)},Pt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))r+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&r===""?s.push("/"):s.push(r);const i=a.replace("?","");r+="/"+i,s.push(r)}else r+="/"+a}),s.filter((a,i,n)=>n.indexOf(a)===i)},De=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Me(e,rt):e):e,st=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let n=e.indexOf(`?${t}`,8);for(n===-1&&(n=e.indexOf(`&${t}`,8));n!==-1;){const l=e.charCodeAt(n+t.length+1);if(l===61){const c=n+t.length+2,d=e.indexOf("&",c);return De(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";n=e.indexOf(`&${t}`,n+1)}if(r=/[%+]/.test(e),!r)return}const a={};r??(r=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const n=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>n&&n!==-1&&(l=-1);let c=e.slice(i+1,l===-1?n===-1?void 0:n:l);if(r&&(c=De(c)),i=n,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,n===-1?void 0:n),r&&(d=De(d))),s?(a[c]&&Array.isArray(a[c])||(a[c]=[]),a[c].push(d)):a[c]??(a[c]=d)}return t?a[t]:a},_t=st,Mt=(e,t)=>st(e,t,!0),rt=decodeURIComponent,Be=e=>Me(e,rt),ie,T,L,it,nt,Pe,q,Ue,at=(Ue=class{constructor(e,t="/",s=[[]]){g(this,L);f(this,"raw");g(this,ie);g(this,T);f(this,"routeIndex",0);f(this,"path");f(this,"bodyCache",{});g(this,q,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,h(this,T,s),h(this,ie,{})}param(e){return e?x(this,L,it).call(this,e):x(this,L,nt).call(this)}query(e){return _t(this.url,e)}queries(e){return Mt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await jt(this,e))}json(){return o(this,q).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,q).call(this,"text")}arrayBuffer(){return o(this,q).call(this,"arrayBuffer")}blob(){return o(this,q).call(this,"blob")}formData(){return o(this,q).call(this,"formData")}addValidatedData(e,t){o(this,ie)[e]=t}valid(e){return o(this,ie)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Et](){return o(this,T)}get matchedRoutes(){return o(this,T)[0].map(([[,e]])=>e)}get routePath(){return o(this,T)[0].map(([[,e]])=>e)[this.routeIndex].path}},ie=new WeakMap,T=new WeakMap,L=new WeakSet,it=function(e){const t=o(this,T)[0][this.routeIndex][1][e],s=x(this,L,Pe).call(this,t);return s&&/\%/.test(s)?Be(s):s},nt=function(){const e={},t=Object.keys(o(this,T)[0][this.routeIndex][1]);for(const s of t){const r=x(this,L,Pe).call(this,o(this,T)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Be(r):r)}return e},Pe=function(e){return o(this,T)[1]?o(this,T)[1][e]:e},q=new WeakMap,Ue),kt={Stringify:1},ot=async(e,t,s,r,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:r}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ot(c,t,!1,r,a))).then(()=>a[0]))):Promise.resolve(e)},Ht="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),me,ge,M,ne,k,A,xe,oe,ce,Y,ve,be,$,re,Ve,Ft=(Ve=class{constructor(e,t){g(this,$);g(this,me);g(this,ge);f(this,"env",{});g(this,M);f(this,"finalized",!1);f(this,"error");g(this,ne);g(this,k);g(this,A);g(this,xe);g(this,oe);g(this,ce);g(this,Y);g(this,ve);g(this,be);f(this,"render",(...e)=>(o(this,oe)??h(this,oe,t=>this.html(t)),o(this,oe).call(this,...e)));f(this,"setLayout",e=>h(this,xe,e));f(this,"getLayout",()=>o(this,xe));f(this,"setRenderer",e=>{h(this,oe,e)});f(this,"header",(e,t,s)=>{this.finalized&&h(this,A,new Response(o(this,A).body,o(this,A)));const r=o(this,A)?o(this,A).headers:o(this,Y)??h(this,Y,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});f(this,"status",e=>{h(this,ne,e)});f(this,"set",(e,t)=>{o(this,M)??h(this,M,new Map),o(this,M).set(e,t)});f(this,"get",e=>o(this,M)?o(this,M).get(e):void 0);f(this,"newResponse",(...e)=>x(this,$,re).call(this,...e));f(this,"body",(e,t,s)=>x(this,$,re).call(this,e,t,s));f(this,"text",(e,t,s)=>!o(this,Y)&&!o(this,ne)&&!t&&!s&&!this.finalized?new Response(e):x(this,$,re).call(this,e,t,Ne(Ht,s)));f(this,"json",(e,t,s)=>x(this,$,re).call(this,JSON.stringify(e),t,Ne("application/json",s)));f(this,"html",(e,t,s)=>{const r=a=>x(this,$,re).call(this,a,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?ot(e,kt.Stringify,!1,{}).then(r):r(e)});f(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});f(this,"notFound",()=>(o(this,ce)??h(this,ce,()=>new Response),o(this,ce).call(this,this)));h(this,me,e),t&&(h(this,k,t.executionCtx),this.env=t.env,h(this,ce,t.notFoundHandler),h(this,be,t.path),h(this,ve,t.matchResult))}get req(){return o(this,ge)??h(this,ge,new at(o(this,me),o(this,be),o(this,ve))),o(this,ge)}get event(){if(o(this,k)&&"respondWith"in o(this,k))return o(this,k);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,k))return o(this,k);throw Error("This context has no ExecutionContext")}get res(){return o(this,A)||h(this,A,new Response(null,{headers:o(this,Y)??h(this,Y,new Headers)}))}set res(e){if(o(this,A)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,A).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,A).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of r)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}h(this,A,e),this.finalized=!0}get var(){return o(this,M)?Object.fromEntries(o(this,M)):{}}},me=new WeakMap,ge=new WeakMap,M=new WeakMap,ne=new WeakMap,k=new WeakMap,A=new WeakMap,xe=new WeakMap,oe=new WeakMap,ce=new WeakMap,Y=new WeakMap,ve=new WeakMap,be=new WeakMap,$=new WeakSet,re=function(e,t,s){const r=o(this,A)?new Headers(o(this,A).headers):o(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[n,l]of i)n.toLowerCase()==="set-cookie"?r.append(n,l):r.set(n,l)}if(s)for(const[i,n]of Object.entries(s))if(typeof n=="string")r.set(i,n);else{r.delete(i);for(const l of n)r.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ne);return new Response(e,{status:a,headers:r})},Ve),w="ALL",Lt="all",Bt=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},qt="__COMPOSED_HANDLER",$t=e=>e.text("404 Not Found",404),qe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,E,ut,D,G,Ee,je,We,dt=(We=class{constructor(t={}){g(this,E);f(this,"get");f(this,"post");f(this,"put");f(this,"delete");f(this,"options");f(this,"patch");f(this,"all");f(this,"on");f(this,"use");f(this,"router");f(this,"getPath");f(this,"_basePath","/");g(this,O,"/");f(this,"routes",[]);g(this,D,$t);f(this,"errorHandler",qe);f(this,"onError",t=>(this.errorHandler=t,this));f(this,"notFound",t=>(h(this,D,t),this));f(this,"fetch",(t,...s)=>x(this,E,je).call(this,t,s[1],s[0],t.method));f(this,"request",(t,s,r,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),r,a)));f(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,je).call(this,t.request,t,void 0,t.request.method))})});[...Bt,Lt].forEach(i=>{this[i]=(n,...l)=>(typeof n=="string"?h(this,O,n):x(this,E,G).call(this,i,o(this,O),n),l.forEach(c=>{x(this,E,G).call(this,i,o(this,O),c)}),this)}),this.on=(i,n,...l)=>{for(const c of[n].flat()){h(this,O,c);for(const d of[i].flat())l.map(u=>{x(this,E,G).call(this,d.toUpperCase(),o(this,O),u)})}return this},this.use=(i,...n)=>(typeof i=="string"?h(this,O,i):(h(this,O,"*"),n.unshift(i)),n.forEach(l=>{x(this,E,G).call(this,w,o(this,O),l)}),this);const{strict:r,...a}=t;Object.assign(this,a),this.getPath=r??!0?t.getPath??et:Pt}route(t,s){const r=this.basePath(t);return s.routes.map(a=>{var n;let i;s.errorHandler===qe?i=a.handler:(i=async(l,c)=>(await Le([],s.errorHandler)(l,()=>a.handler(l,c))).res,i[qt]=a.handler),x(n=r,E,G).call(n,a.method,a.path,i)}),this}basePath(t){const s=x(this,E,ut).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,r){let a,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?a=c=>c:a=r.replaceRequest));const n=i?c=>{const d=i(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};a||(a=(()=>{const c=se(this._basePath,t),d=c==="/"?0:c.length;return u=>{const p=new URL(u.url);return p.pathname=p.pathname.slice(d)||"/",new Request(p,u)}})());const l=async(c,d)=>{const u=await s(a(c.req.raw),...n(c));if(u)return u;await d()};return x(this,E,G).call(this,w,se(t,"*"),l),this}},O=new WeakMap,E=new WeakSet,ut=function(){const t=new dt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,h(t,D,o(this,D)),t.routes=this.routes,t},D=new WeakMap,G=function(t,s,r){t=t.toUpperCase(),s=se(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,a]),this.routes.push(a)},Ee=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},je=function(t,s,r,a){if(a==="HEAD")return(async()=>new Response(null,await x(this,E,je).call(this,t,s,r,"GET")))();const i=this.getPath(t,{env:r}),n=this.router.match(a,i),l=new Ft(t,{path:i,matchResult:n,env:r,executionCtx:s,notFoundHandler:o(this,D)});if(n[0].length===1){let d;try{d=n[0][0][0][0](l,async()=>{l.res=await o(this,D).call(this,l)})}catch(u){return x(this,E,Ee).call(this,u,l)}return d instanceof Promise?d.then(u=>u||(l.finalized?l.res:o(this,D).call(this,l))).catch(u=>x(this,E,Ee).call(this,u,l)):d??o(this,D).call(this,l)}const c=Le(n[0],this.errorHandler,o(this,D));return(async()=>{try{const d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return x(this,E,Ee).call(this,d,l)}})()},We),ht=[];function zt(e,t){const s=this.buildAllMatchers(),r=(a,i)=>{const n=s[a]||s[w],l=n[2][i];if(l)return l;const c=i.match(n[0]);if(!c)return[[],ht];const d=c.indexOf("",1);return[n[1][d],c]};return this.match=r,r(e,t)}var Se="[^/]+",pe=".*",fe="(?:|/.*)",ae=Symbol(),Ut=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===pe||e===fe?1:t===pe||t===fe?-1:e===Se?1:t===Se?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,X,N,Ge,_e=(Ge=class{constructor(){g(this,J);g(this,X);g(this,N,Object.create(null))}insert(t,s,r,a,i){if(t.length===0){if(o(this,J)!==void 0)throw ae;if(i)return;h(this,J,s);return}const[n,...l]=t,c=n==="*"?l.length===0?["","",pe]:["","",Se]:n==="/*"?["","",fe]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const u=c[1];let p=c[2]||Se;if(u&&c[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw ae;if(d=o(this,N)[p],!d){if(Object.keys(o(this,N)).some(m=>m!==pe&&m!==fe))throw ae;if(i)return;d=o(this,N)[p]=new _e,u!==""&&h(d,X,a.varIndex++)}!i&&u!==""&&r.push([u,o(d,X)])}else if(d=o(this,N)[n],!d){if(Object.keys(o(this,N)).some(u=>u.length>1&&u!==pe&&u!==fe))throw ae;if(i)return;d=o(this,N)[n]=new _e}d.insert(l,s,r,a,i)}buildRegExpStr(){const s=Object.keys(o(this,N)).sort(Vt).map(r=>{const a=o(this,N)[r];return(typeof o(a,X)=="number"?`(${r})@${o(a,X)}`:Ut.has(r)?`\\${r}`:r)+a.buildRegExpStr()});return typeof o(this,J)=="number"&&s.unshift(`#${o(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,X=new WeakMap,N=new WeakMap,Ge),Re,ye,Ke,Wt=(Ke=class{constructor(){g(this,Re,{varIndex:0});g(this,ye,new _e)}insert(e,t,s){const r=[],a=[];for(let n=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const d=`@\\${n}`;return a[n]=[d,c],n++,l=!0,d}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=a.length-1;n>=0;n--){const[l]=a[n];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(l)!==-1){i[c]=i[c].replace(l,a[n][1]);break}}return o(this,ye).insert(i,t,r,o(this,Re),s),r}buildRegExp(){let e=o(this,ye).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,n)=>i!==void 0?(s[++t]=Number(i),"$()"):(n!==void 0&&(r[Number(n)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Re=new WeakMap,ye=new WeakMap,Ke),Gt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function pt(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Kt(){Ce=Object.create(null)}function Yt(e){var d;const t=new Wt,s=[];if(e.length===0)return Gt;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,p],[m,y])=>u?1:m?-1:p.length-y.length),a=Object.create(null);for(let u=0,p=-1,m=r.length;u<m;u++){const[y,I,v]=r[u];y?a[I]=[v.map(([R])=>[R,Object.create(null)]),ht]:p++;let b;try{b=t.insert(I,p,y)}catch(R){throw R===ae?new lt(I):R}y||(s[p]=v.map(([R,ee])=>{const de=Object.create(null);for(ee-=1;ee>=0;ee--){const[P,Ie]=b[ee];de[P]=Ie}return[R,de]}))}const[i,n,l]=t.buildRegExp();for(let u=0,p=s.length;u<p;u++)for(let m=0,y=s[u].length;m<y;m++){const I=(d=s[u][m])==null?void 0:d[1];if(!I)continue;const v=Object.keys(I);for(let b=0,R=v.length;b<R;b++)I[v[b]]=l[I[v[b]]]}const c=[];for(const u in n)c[u]=s[n[u]];return[i,c,a]}function te(e,t){if(e){for(const s of Object.keys(e).sort((r,a)=>a.length-r.length))if(pt(s).test(t))return[...e[s]]}}var z,U,Ae,ft,Ye,Jt=(Ye=class{constructor(){g(this,Ae);f(this,"name","RegExpRouter");g(this,z);g(this,U);f(this,"match",zt);h(this,z,{[w]:Object.create(null)}),h(this,U,{[w]:Object.create(null)})}add(e,t,s){var l;const r=o(this,z),a=o(this,U);if(!r||!a)throw new Error(ct);r[e]||[r,a].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(d=>{c[e][d]=[...c[w][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=pt(t);e===w?Object.keys(r).forEach(d=>{var u;(u=r[d])[t]||(u[t]=te(r[d],t)||te(r[w],t)||[])}):(l=r[e])[t]||(l[t]=te(r[e],t)||te(r[w],t)||[]),Object.keys(r).forEach(d=>{(e===w||e===d)&&Object.keys(r[d]).forEach(u=>{c.test(u)&&r[d][u].push([s,i])})}),Object.keys(a).forEach(d=>{(e===w||e===d)&&Object.keys(a[d]).forEach(u=>c.test(u)&&a[d][u].push([s,i]))});return}const n=tt(t)||[t];for(let c=0,d=n.length;c<d;c++){const u=n[c];Object.keys(a).forEach(p=>{var m;(e===w||e===p)&&((m=a[p])[u]||(m[u]=[...te(r[p],u)||te(r[w],u)||[]]),a[p][u].push([s,i-d+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,U)).concat(Object.keys(o(this,z))).forEach(t=>{e[t]||(e[t]=x(this,Ae,ft).call(this,t))}),h(this,z,h(this,U,void 0)),Kt(),e}},z=new WeakMap,U=new WeakMap,Ae=new WeakSet,ft=function(e){const t=[];let s=e===w;return[o(this,z),o(this,U)].forEach(r=>{const a=r[e]?Object.keys(r[e]).map(i=>[i,r[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==w&&t.push(...Object.keys(r[w]).map(i=>[i,r[w][i]]))}),s?Yt(t):null},Ye),V,H,Je,Xt=(Je=class{constructor(e){f(this,"name","SmartRouter");g(this,V,[]);g(this,H,[]);h(this,V,e.routers)}add(e,t,s){if(!o(this,H))throw new Error(ct);o(this,H).push([e,t,s])}match(e,t){if(!o(this,H))throw new Error("Fatal error");const s=o(this,V),r=o(this,H),a=s.length;let i=0,n;for(;i<a;i++){const l=s[i];try{for(let c=0,d=r.length;c<d;c++)l.add(...r[c]);n=l.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=l.match.bind(l),h(this,V,[l]),h(this,H,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(o(this,H)||o(this,V).length!==1)throw new Error("No active router has been determined yet.");return o(this,V)[0]}},V=new WeakMap,H=new WeakMap,Je),he=Object.create(null),W,C,Q,le,j,F,K,Xe,mt=(Xe=class{constructor(e,t,s){g(this,F);g(this,W);g(this,C);g(this,Q);g(this,le,0);g(this,j,he);if(h(this,C,s||Object.create(null)),h(this,W,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},h(this,W,[r])}h(this,Q,[])}insert(e,t,s){h(this,le,++Fe(this,le)._);let r=this;const a=It(t),i=[];for(let n=0,l=a.length;n<l;n++){const c=a[n],d=a[n+1],u=Dt(c,d),p=Array.isArray(u)?u[0]:c;if(p in o(r,C)){r=o(r,C)[p],u&&i.push(u[1]);continue}o(r,C)[p]=new mt,u&&(o(r,Q).push(u),i.push(u[1])),r=o(r,C)[p]}return o(r,W).push({[e]:{handler:s,possibleKeys:i.filter((n,l,c)=>c.indexOf(n)===l),score:o(this,le)}}),r}search(e,t){var l;const s=[];h(this,j,he);let a=[this];const i=Ze(t),n=[];for(let c=0,d=i.length;c<d;c++){const u=i[c],p=c===d-1,m=[];for(let y=0,I=a.length;y<I;y++){const v=a[y],b=o(v,C)[u];b&&(h(b,j,o(v,j)),p?(o(b,C)["*"]&&s.push(...x(this,F,K).call(this,o(b,C)["*"],e,o(v,j))),s.push(...x(this,F,K).call(this,b,e,o(v,j)))):m.push(b));for(let R=0,ee=o(v,Q).length;R<ee;R++){const de=o(v,Q)[R],P=o(v,j)===he?{}:{...o(v,j)};if(de==="*"){const B=o(v,C)["*"];B&&(s.push(...x(this,F,K).call(this,B,e,o(v,j))),h(B,j,P),m.push(B));continue}const[Ie,ke,ue]=de;if(!u&&!(ue instanceof RegExp))continue;const _=o(v,C)[Ie],bt=i.slice(c).join("/");if(ue instanceof RegExp){const B=ue.exec(bt);if(B){if(P[ke]=B[0],s.push(...x(this,F,K).call(this,_,e,o(v,j),P)),Object.keys(o(_,C)).length){h(_,j,P);const Te=((l=B[0].match(/\//))==null?void 0:l.length)??0;(n[Te]||(n[Te]=[])).push(_)}continue}}(ue===!0||ue.test(u))&&(P[ke]=u,p?(s.push(...x(this,F,K).call(this,_,e,P,o(v,j))),o(_,C)["*"]&&s.push(...x(this,F,K).call(this,o(_,C)["*"],e,P,o(v,j)))):(h(_,j,P),m.push(_)))}}a=m.concat(n.shift()??[])}return s.length>1&&s.sort((c,d)=>c.score-d.score),[s.map(({handler:c,params:d})=>[c,d])]}},W=new WeakMap,C=new WeakMap,Q=new WeakMap,le=new WeakMap,j=new WeakMap,F=new WeakSet,K=function(e,t,s,r){const a=[];for(let i=0,n=o(e,W).length;i<n;i++){const l=o(e,W)[i],c=l[t]||l[w],d={};if(c!==void 0&&(c.params=Object.create(null),a.push(c),s!==he||r&&r!==he))for(let u=0,p=c.possibleKeys.length;u<p;u++){const m=c.possibleKeys[u],y=d[c.score];c.params[m]=r!=null&&r[m]&&!y?r[m]:s[m]??(r==null?void 0:r[m]),d[c.score]=!0}}return a},Xe),Z,Qe,Qt=(Qe=class{constructor(){f(this,"name","TrieRouter");g(this,Z);h(this,Z,new mt)}add(e,t,s){const r=tt(t);if(r){for(let a=0,i=r.length;a<i;a++)o(this,Z).insert(e,r[a],s);return}o(this,Z).insert(e,t,s)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,Qe),gt=class extends dt{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Jt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(i=>typeof i=="string"?i==="*"?()=>i:n=>i===n?n:null:typeof i=="function"?i:n=>i.includes(n)?n:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(n,l){var u;function c(p,m){n.res.headers.set(p,m)}const d=await r(n.req.header("origin")||"",n);if(d&&c("Access-Control-Allow-Origin",d),s.credentials&&c("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),n.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const p=await a(n.req.header("origin")||"",n);p.length&&c("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const y=n.req.header("Access-Control-Request-Headers");y&&(m=y.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),n.res.headers.append("Vary","Access-Control-Request-Headers")),n.res.headers.delete("Content-Length"),n.res.headers.delete("Content-Type"),new Response(null,{headers:n.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&n.header("Vary","Origin",{append:!0})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,$e=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=e.match(s);if(!r)return;let a=t[r[1]];return a&&a.startsWith("text")&&(a+="; charset=utf-8"),a},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,rs=(...e)=>{let t=e.filter(a=>a!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),r=[];for(const a of s)a===".."&&r.length>0&&r.at(-1)!==".."?r.pop():a!=="."&&r.push(a);return r.join("/")||"."},xt={br:".br",zstd:".zst",gzip:".gz"},as=Object.keys(xt),is="index.html",ns=e=>{const t=e.root??"./",s=e.path,r=e.join??rs;return async(a,i)=>{var u,p,m,y;if(a.finalized)return i();let n;if(e.path)n=e.path;else try{if(n=decodeURIComponent(a.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(n))throw new Error}catch{return await((u=e.onNotFound)==null?void 0:u.call(e,a.req.path,a)),i()}let l=r(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(n):n);e.isDir&&await e.isDir(l)&&(l=r(l,is));const c=e.getContent;let d=await c(l,a);if(d instanceof Response)return a.newResponse(d.body,d);if(d){const I=e.mimes&&$e(l,e.mimes)||$e(l);if(a.header("Content-Type",I||"application/octet-stream"),e.precompressed&&(!I||es.test(I))){const v=new Set((p=a.req.header("Accept-Encoding"))==null?void 0:p.split(",").map(b=>b.trim()));for(const b of as){if(!v.has(b))continue;const R=await c(l+xt[b],a);if(R){d=R,a.header("Content-Encoding",b),a.header("Vary","Accept-Encoding",{append:!0});break}}}return await((m=e.onFound)==null?void 0:m.call(e,l,a)),a.body(d)}await((y=e.onNotFound)==null?void 0:y.call(e,l,a)),await i()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let r;t&&t.namespace?r=t.namespace:r=__STATIC_CONTENT;const a=s[e]||e;if(!a)return null;const i=await r.get(a,{type:"stream"});return i||null},cs=e=>async function(s,r){return ns({...e,getContent:async i=>os(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,r)},ls=e=>cs(e);const S=new gt;S.use("/api/*",Zt());S.use("/static/*",ls({root:"./public"}));S.post("/api/auth/register",async e=>{try{const{email:t,password:s,firstName:r,lastName:a,company:i}=await e.req.json();if(!t||!s||!r||!a)return e.json({error:"Tous les champs sont requis"},400);if(await e.env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(t).first())return e.json({error:"Cet email est déjà utilisé"},400);const l=await e.env.DB.prepare("INSERT INTO users (email, password, first_name, last_name, company) VALUES (?, ?, ?, ?, ?)").bind(t,s,r,a,i||"").run();return e.json({success:!0,userId:l.meta.last_row_id,message:"Compte créé avec succès"})}catch{return e.json({error:"Erreur lors de la création du compte"},500)}});S.post("/api/auth/login",async e=>{try{const{email:t,password:s}=await e.req.json(),r=await e.env.DB.prepare("SELECT id, email, first_name, last_name, company FROM users WHERE email = ? AND password = ?").bind(t,s).first();return r?e.json({success:!0,user:{id:r.id,email:r.email,firstName:r.first_name,lastName:r.last_name,company:r.company}}):e.json({error:"Email ou mot de passe incorrect"},401)}catch{return e.json({error:"Erreur lors de la connexion"},500)}});S.post("/api/assessments",async e=>{try{const{userId:t,assessmentType:s}=await e.req.json(),r=await e.env.DB.prepare("INSERT INTO assessments (user_id, assessment_type, status) VALUES (?, ?, ?)").bind(t,s,"in_progress").run();return e.json({success:!0,assessmentId:r.meta.last_row_id})}catch{return e.json({error:"Erreur lors de la création de l'évaluation"},500)}});S.post("/api/assessments/:id/answers",async e=>{try{const t=e.req.param("id"),{answers:s}=await e.req.json();for(const i of s)await e.env.DB.prepare("INSERT INTO assessment_answers (assessment_id, category, question_key, answer_value) VALUES (?, ?, ?, ?)").bind(t,i.category,i.questionKey,i.value).run();const r=s.reduce((i,n)=>i+n.value,0),a=Math.round(r/s.length*20);return await e.env.DB.prepare("UPDATE assessments SET status = ?, overall_score = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").bind("completed",a,t).run(),e.json({success:!0,score:a})}catch{return e.json({error:"Erreur lors de la sauvegarde des réponses"},500)}});S.get("/api/users/:userId/assessments",async e=>{try{const t=e.req.param("userId"),{results:s}=await e.env.DB.prepare("SELECT id, assessment_type, status, overall_score, created_at FROM assessments WHERE user_id = ? ORDER BY created_at DESC").bind(t).all();return e.json({assessments:s})}catch{return e.json({error:"Erreur lors de la récupération des évaluations"},500)}});S.get("/api/assessments/:id",async e=>{try{const t=e.req.param("id"),s=await e.env.DB.prepare("SELECT * FROM assessments WHERE id = ?").bind(t).first(),{results:r}=await e.env.DB.prepare("SELECT * FROM assessment_answers WHERE assessment_id = ?").bind(t).all();return e.json({assessment:s,answers:r})}catch{return e.json({error:"Erreur lors de la récupération de l'évaluation"},500)}});S.get("/",e=>e.html(`
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
                        <span class="text-2xl font-bold text-indigo-600">Factorise.io</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="#services" class="text-gray-700 hover:text-indigo-600">Services</a>
                        <a href="#about" class="text-gray-700 hover:text-indigo-600">À propos</a>
                        <a href="#contact" class="text-gray-700 hover:text-indigo-600">Contact</a>
                        <a href="/login" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                            Connexion
                        </a>
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
  `));S.get("/login",e=>e.html(`
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
  `));S.get("/register",e=>e.html(`
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
  `));S.get("/dashboard",e=>e.html(`
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
  `));S.get("/assessment",e=>e.html(`
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
  `));S.get("/results",e=>e.html(`
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
  `));S.get("/resources",e=>e.html(`
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
  `));const ze=new gt,ds=Object.assign({"/src/index.tsx":S});let vt=!1;for(const[,e]of Object.entries(ds))e&&(ze.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ze.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{ze as default};
