var yt=Object.defineProperty;var Me=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Oe=(e,t,s)=>t.has(e)||Me("Cannot "+s);var o=(e,t,s)=>(Oe(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s,a)=>(Oe(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Oe(e,t,"access private method"),s);var Fe=(e,t,s,a)=>({set _(i){m(e,t,i,s)},get _(){return o(e,t,a)}});var Le=(e,t,s)=>(a,i)=>{let r=-1;return n(0);async function n(c){if(c<=r)throw new Error("next() called multiple times");r=c;let l,d=!1,p;if(e[c]?(p=e[c][0][0],a.req.routeIndex=c):p=c===e.length&&i||void 0,p)try{l=await p(a,()=>n(c+1))}catch(u){if(u instanceof Error&&t)a.error=u,l=await t(u,a),d=!0;else throw u}else a.finalized===!1&&s&&(l=await s(a));return l&&(a.finalized===!1||d)&&(a.res=l),a}},jt=Symbol(),Et=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,r=(e instanceof it?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Ct(e,{all:s,dot:a}):{}};async function Ct(e,t){const s=await e.formData();return s?St(s,t):{}}function St(e,t){const s=Object.create(null);return e.forEach((a,i)=>{t.all||i.endsWith("[]")?At(s,i,a):s[i]=a}),t.dot&&Object.entries(s).forEach(([a,i])=>{a.includes(".")&&(Rt(s,a,i),delete s[a])}),s}var At=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Rt=(e,t,s)=>{let a=e;const i=t.split(".");i.forEach((r,n)=>{n===i.length-1?a[r]=s:((!a[r]||typeof a[r]!="object"||Array.isArray(a[r])||a[r]instanceof File)&&(a[r]=Object.create(null)),a=a[r])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Tt=e=>{const{groups:t,path:s}=It(e),a=Ze(s);return Ot(a,t)},It=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const i=`@${a}`;return t.push([i,s]),i}),{groups:t,path:e}},Ot=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(a)){e[i]=e[i].replace(a,t[s][1]);break}}return e},we={},Dt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return we[a]||(s[2]?we[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:we[a]=[e,s[1],!0]),we[a]}return null},Pe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},$t=e=>Pe(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const i=t.charCodeAt(a);if(i===37){const r=t.indexOf("?",a),n=t.slice(s,r===-1?void 0:r);return $t(n.includes("%25")?n.replace(/%25/g,"%2525"):n)}else if(i===63)break}return t.slice(s,a)},kt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))a+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&a===""?s.push("/"):s.push(a);const r=i.replace("?","");a+="/"+r,s.push(a)}else a+="/"+i}),s.filter((i,r,n)=>n.indexOf(i)===r)},De=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Pe(e,at):e):e,st=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let n=e.indexOf(`?${t}`,8);for(n===-1&&(n=e.indexOf(`&${t}`,8));n!==-1;){const c=e.charCodeAt(n+t.length+1);if(c===61){const l=n+t.length+2,d=e.indexOf("&",l);return De(e.slice(l,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";n=e.indexOf(`&${t}`,n+1)}if(a=/[%+]/.test(e),!a)return}const i={};a??(a=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const n=e.indexOf("&",r+1);let c=e.indexOf("=",r);c>n&&n!==-1&&(c=-1);let l=e.slice(r+1,c===-1?n===-1?void 0:n:c);if(a&&(l=De(l)),r=n,l==="")continue;let d;c===-1?d="":(d=e.slice(c+1,n===-1?void 0:n),a&&(d=De(d))),s?(i[l]&&Array.isArray(i[l])||(i[l]=[]),i[l].push(d)):i[l]??(i[l]=d)}return t?i[t]:i},Nt=st,Pt=(e,t)=>st(e,t,!0),at=decodeURIComponent,qe=e=>Pe(e,at),re,I,L,rt,nt,ke,H,Ue,it=(Ue=class{constructor(e,t="/",s=[[]]){f(this,L);g(this,"raw");f(this,re);f(this,I);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});f(this,H,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const i=Object.keys(t)[0];return i?t[i].then(r=>(i==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,m(this,I,s),m(this,re,{})}param(e){return e?x(this,L,rt).call(this,e):x(this,L,nt).call(this)}query(e){return Nt(this.url,e)}queries(e){return Pt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Et(this,e))}json(){return o(this,H).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,H).call(this,"text")}arrayBuffer(){return o(this,H).call(this,"arrayBuffer")}blob(){return o(this,H).call(this,"blob")}formData(){return o(this,H).call(this,"formData")}addValidatedData(e,t){o(this,re)[e]=t}valid(e){return o(this,re)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[jt](){return o(this,I)}get matchedRoutes(){return o(this,I)[0].map(([[,e]])=>e)}get routePath(){return o(this,I)[0].map(([[,e]])=>e)[this.routeIndex].path}},re=new WeakMap,I=new WeakMap,L=new WeakSet,rt=function(e){const t=o(this,I)[0][this.routeIndex][1][e],s=x(this,L,ke).call(this,t);return s&&/\%/.test(s)?qe(s):s},nt=function(){const e={},t=Object.keys(o(this,I)[0][this.routeIndex][1]);for(const s of t){const a=x(this,L,ke).call(this,o(this,I)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?qe(a):a)}return e},ke=function(e){return o(this,I)[1]?o(this,I)[1][e]:e},H=new WeakMap,Ue),_t={Stringify:1},ot=async(e,t,s,a,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(i?i[0]+=e:i=[e],Promise.all(r.map(c=>c({phase:t,buffer:i,context:a}))).then(c=>Promise.all(c.filter(Boolean).map(l=>ot(l,t,!1,a,i))).then(()=>i[0]))):Promise.resolve(e)},Mt="text/plain; charset=UTF-8",$e=(e,t)=>({"Content-Type":e,...t}),he,fe,P,ne,_,R,xe,oe,le,K,ve,be,B,ae,Ve,Ft=(Ve=class{constructor(e,t){f(this,B);f(this,he);f(this,fe);g(this,"env",{});f(this,P);g(this,"finalized",!1);g(this,"error");f(this,ne);f(this,_);f(this,R);f(this,xe);f(this,oe);f(this,le);f(this,K);f(this,ve);f(this,be);g(this,"render",(...e)=>(o(this,oe)??m(this,oe,t=>this.html(t)),o(this,oe).call(this,...e)));g(this,"setLayout",e=>m(this,xe,e));g(this,"getLayout",()=>o(this,xe));g(this,"setRenderer",e=>{m(this,oe,e)});g(this,"header",(e,t,s)=>{this.finalized&&m(this,R,new Response(o(this,R).body,o(this,R)));const a=o(this,R)?o(this,R).headers:o(this,K)??m(this,K,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});g(this,"status",e=>{m(this,ne,e)});g(this,"set",(e,t)=>{o(this,P)??m(this,P,new Map),o(this,P).set(e,t)});g(this,"get",e=>o(this,P)?o(this,P).get(e):void 0);g(this,"newResponse",(...e)=>x(this,B,ae).call(this,...e));g(this,"body",(e,t,s)=>x(this,B,ae).call(this,e,t,s));g(this,"text",(e,t,s)=>!o(this,K)&&!o(this,ne)&&!t&&!s&&!this.finalized?new Response(e):x(this,B,ae).call(this,e,t,$e(Mt,s)));g(this,"json",(e,t,s)=>x(this,B,ae).call(this,JSON.stringify(e),t,$e("application/json",s)));g(this,"html",(e,t,s)=>{const a=i=>x(this,B,ae).call(this,i,t,$e("text/html; charset=UTF-8",s));return typeof e=="object"?ot(e,_t.Stringify,!1,{}).then(a):a(e)});g(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});g(this,"notFound",()=>(o(this,le)??m(this,le,()=>new Response),o(this,le).call(this,this)));m(this,he,e),t&&(m(this,_,t.executionCtx),this.env=t.env,m(this,le,t.notFoundHandler),m(this,be,t.path),m(this,ve,t.matchResult))}get req(){return o(this,fe)??m(this,fe,new it(o(this,he),o(this,be),o(this,ve))),o(this,fe)}get event(){if(o(this,_)&&"respondWith"in o(this,_))return o(this,_);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,_))return o(this,_);throw Error("This context has no ExecutionContext")}get res(){return o(this,R)||m(this,R,new Response(null,{headers:o(this,K)??m(this,K,new Headers)}))}set res(e){if(o(this,R)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,R).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=o(this,R).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of a)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}m(this,R,e),this.finalized=!0}get var(){return o(this,P)?Object.fromEntries(o(this,P)):{}}},he=new WeakMap,fe=new WeakMap,P=new WeakMap,ne=new WeakMap,_=new WeakMap,R=new WeakMap,xe=new WeakMap,oe=new WeakMap,le=new WeakMap,K=new WeakMap,ve=new WeakMap,be=new WeakMap,B=new WeakSet,ae=function(e,t,s){const a=o(this,R)?new Headers(o(this,R).headers):o(this,K)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[n,c]of r)n.toLowerCase()==="set-cookie"?a.append(n,c):a.set(n,c)}if(s)for(const[r,n]of Object.entries(s))if(typeof n=="string")a.set(r,n);else{a.delete(r);for(const c of n)a.append(r,c)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ne);return new Response(e,{status:i,headers:a})},Ve),j="ALL",Lt="all",qt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},Ht="__COMPOSED_HANDLER",Bt=e=>e.text("404 Not Found",404),He=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,E,pt,D,W,je,Ee,Ge,dt=(Ge=class{constructor(t={}){f(this,E);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");f(this,O,"/");g(this,"routes",[]);f(this,D,Bt);g(this,"errorHandler",He);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(m(this,D,t),this));g(this,"fetch",(t,...s)=>x(this,E,Ee).call(this,t,s[1],s[0],t.method));g(this,"request",(t,s,a,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),a,i)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Ee).call(this,t.request,t,void 0,t.request.method))})});[...qt,Lt].forEach(r=>{this[r]=(n,...c)=>(typeof n=="string"?m(this,O,n):x(this,E,W).call(this,r,o(this,O),n),c.forEach(l=>{x(this,E,W).call(this,r,o(this,O),l)}),this)}),this.on=(r,n,...c)=>{for(const l of[n].flat()){m(this,O,l);for(const d of[r].flat())c.map(p=>{x(this,E,W).call(this,d.toUpperCase(),o(this,O),p)})}return this},this.use=(r,...n)=>(typeof r=="string"?m(this,O,r):(m(this,O,"*"),n.unshift(r)),n.forEach(c=>{x(this,E,W).call(this,j,o(this,O),c)}),this);const{strict:a,...i}=t;Object.assign(this,i),this.getPath=a??!0?t.getPath??et:kt}route(t,s){const a=this.basePath(t);return s.routes.map(i=>{var n;let r;s.errorHandler===He?r=i.handler:(r=async(c,l)=>(await Le([],s.errorHandler)(c,()=>i.handler(c,l))).res,r[Ht]=i.handler),x(n=a,E,W).call(n,i.method,i.path,r)}),this}basePath(t){const s=x(this,E,pt).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,a){let i,r;a&&(typeof a=="function"?r=a:(r=a.optionHandler,a.replaceRequest===!1?i=l=>l:i=a.replaceRequest));const n=r?l=>{const d=r(l);return Array.isArray(d)?d:[d]}:l=>{let d;try{d=l.executionCtx}catch{}return[l.env,d]};i||(i=(()=>{const l=se(this._basePath,t),d=l==="/"?0:l.length;return p=>{const u=new URL(p.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,p)}})());const c=async(l,d)=>{const p=await s(i(l.req.raw),...n(l));if(p)return p;await d()};return x(this,E,W).call(this,j,se(t,"*"),c),this}},O=new WeakMap,E=new WeakSet,pt=function(){const t=new dt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,m(t,D,o(this,D)),t.routes=this.routes,t},D=new WeakMap,W=function(t,s,a){t=t.toUpperCase(),s=se(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,i]),this.routes.push(i)},je=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ee=function(t,s,a,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,E,Ee).call(this,t,s,a,"GET")))();const r=this.getPath(t,{env:a}),n=this.router.match(i,r),c=new Ft(t,{path:r,matchResult:n,env:a,executionCtx:s,notFoundHandler:o(this,D)});if(n[0].length===1){let d;try{d=n[0][0][0][0](c,async()=>{c.res=await o(this,D).call(this,c)})}catch(p){return x(this,E,je).call(this,p,c)}return d instanceof Promise?d.then(p=>p||(c.finalized?c.res:o(this,D).call(this,c))).catch(p=>x(this,E,je).call(this,p,c)):d??o(this,D).call(this,c)}const l=Le(n[0],this.errorHandler,o(this,D));return(async()=>{try{const d=await l(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return x(this,E,je).call(this,d,c)}})()},Ge),mt=[];function zt(e,t){const s=this.buildAllMatchers(),a=(i,r)=>{const n=s[i]||s[j],c=n[2][r];if(c)return c;const l=r.match(n[0]);if(!l)return[[],mt];const d=l.indexOf("",1);return[n[1][d],l]};return this.match=a,a(e,t)}var Se="[^/]+",ue=".*",ge="(?:|/.*)",ie=Symbol(),Ut=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ue||e===ge?1:t===ue||t===ge?-1:e===Se?1:t===Se?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,J,$,We,Ne=(We=class{constructor(){f(this,Q);f(this,J);f(this,$,Object.create(null))}insert(t,s,a,i,r){if(t.length===0){if(o(this,Q)!==void 0)throw ie;if(r)return;m(this,Q,s);return}const[n,...c]=t,l=n==="*"?c.length===0?["","",ue]:["","",Se]:n==="/*"?["","",ge]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(l){const p=l[1];let u=l[2]||Se;if(p&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ie;if(d=o(this,$)[u],!d){if(Object.keys(o(this,$)).some(h=>h!==ue&&h!==ge))throw ie;if(r)return;d=o(this,$)[u]=new Ne,p!==""&&m(d,J,i.varIndex++)}!r&&p!==""&&a.push([p,o(d,J)])}else if(d=o(this,$)[n],!d){if(Object.keys(o(this,$)).some(p=>p.length>1&&p!==ue&&p!==ge))throw ie;if(r)return;d=o(this,$)[n]=new Ne}d.insert(c,s,a,i,r)}buildRegExpStr(){const s=Object.keys(o(this,$)).sort(Vt).map(a=>{const i=o(this,$)[a];return(typeof o(i,J)=="number"?`(${a})@${o(i,J)}`:Ut.has(a)?`\\${a}`:a)+i.buildRegExpStr()});return typeof o(this,Q)=="number"&&s.unshift(`#${o(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,J=new WeakMap,$=new WeakMap,We),Ae,ye,Ye,Gt=(Ye=class{constructor(){f(this,Ae,{varIndex:0});f(this,ye,new Ne)}insert(e,t,s){const a=[],i=[];for(let n=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const d=`@\\${n}`;return i[n]=[d,l],n++,c=!0,d}),!c)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=i.length-1;n>=0;n--){const[c]=i[n];for(let l=r.length-1;l>=0;l--)if(r[l].indexOf(c)!==-1){r[l]=r[l].replace(c,i[n][1]);break}}return o(this,ye).insert(r,t,a,o(this,Ae),s),a}buildRegExp(){let e=o(this,ye).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,r,n)=>r!==void 0?(s[++t]=Number(r),"$()"):(n!==void 0&&(a[Number(n)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Ae=new WeakMap,ye=new WeakMap,Ye),Wt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ut(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Yt(){Ce=Object.create(null)}function Kt(e){var d;const t=new Gt,s=[];if(e.length===0)return Wt;const a=e.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,u],[h,w])=>p?1:h?-1:u.length-w.length),i=Object.create(null);for(let p=0,u=-1,h=a.length;p<h;p++){const[w,T,v]=a[p];w?i[T]=[v.map(([A])=>[A,Object.create(null)]),mt]:u++;let y;try{y=t.insert(T,u,w)}catch(A){throw A===ie?new ct(T):A}w||(s[u]=v.map(([A,ee])=>{const de=Object.create(null);for(ee-=1;ee>=0;ee--){const[k,Te]=y[ee];de[k]=Te}return[A,de]}))}const[r,n,c]=t.buildRegExp();for(let p=0,u=s.length;p<u;p++)for(let h=0,w=s[p].length;h<w;h++){const T=(d=s[p][h])==null?void 0:d[1];if(!T)continue;const v=Object.keys(T);for(let y=0,A=v.length;y<A;y++)T[v[y]]=c[T[v[y]]]}const l=[];for(const p in n)l[p]=s[n[p]];return[r,l,i]}function te(e,t){if(e){for(const s of Object.keys(e).sort((a,i)=>i.length-a.length))if(ut(s).test(t))return[...e[s]]}}var z,U,Re,gt,Ke,Qt=(Ke=class{constructor(){f(this,Re);g(this,"name","RegExpRouter");f(this,z);f(this,U);g(this,"match",zt);m(this,z,{[j]:Object.create(null)}),m(this,U,{[j]:Object.create(null)})}add(e,t,s){var c;const a=o(this,z),i=o(this,U);if(!a||!i)throw new Error(lt);a[e]||[a,i].forEach(l=>{l[e]=Object.create(null),Object.keys(l[j]).forEach(d=>{l[e][d]=[...l[j][d]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ut(t);e===j?Object.keys(a).forEach(d=>{var p;(p=a[d])[t]||(p[t]=te(a[d],t)||te(a[j],t)||[])}):(c=a[e])[t]||(c[t]=te(a[e],t)||te(a[j],t)||[]),Object.keys(a).forEach(d=>{(e===j||e===d)&&Object.keys(a[d]).forEach(p=>{l.test(p)&&a[d][p].push([s,r])})}),Object.keys(i).forEach(d=>{(e===j||e===d)&&Object.keys(i[d]).forEach(p=>l.test(p)&&i[d][p].push([s,r]))});return}const n=tt(t)||[t];for(let l=0,d=n.length;l<d;l++){const p=n[l];Object.keys(i).forEach(u=>{var h;(e===j||e===u)&&((h=i[u])[p]||(h[p]=[...te(a[u],p)||te(a[j],p)||[]]),i[u][p].push([s,r-d+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,U)).concat(Object.keys(o(this,z))).forEach(t=>{e[t]||(e[t]=x(this,Re,gt).call(this,t))}),m(this,z,m(this,U,void 0)),Yt(),e}},z=new WeakMap,U=new WeakMap,Re=new WeakSet,gt=function(e){const t=[];let s=e===j;return[o(this,z),o(this,U)].forEach(a=>{const i=a[e]?Object.keys(a[e]).map(r=>[r,a[e][r]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==j&&t.push(...Object.keys(a[j]).map(r=>[r,a[j][r]]))}),s?Kt(t):null},Ke),V,M,Qe,Jt=(Qe=class{constructor(e){g(this,"name","SmartRouter");f(this,V,[]);f(this,M,[]);m(this,V,e.routers)}add(e,t,s){if(!o(this,M))throw new Error(lt);o(this,M).push([e,t,s])}match(e,t){if(!o(this,M))throw new Error("Fatal error");const s=o(this,V),a=o(this,M),i=s.length;let r=0,n;for(;r<i;r++){const c=s[r];try{for(let l=0,d=a.length;l<d;l++)c.add(...a[l]);n=c.match(e,t)}catch(l){if(l instanceof ct)continue;throw l}this.match=c.match.bind(c),m(this,V,[c]),m(this,M,void 0);break}if(r===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(o(this,M)||o(this,V).length!==1)throw new Error("No active router has been determined yet.");return o(this,V)[0]}},V=new WeakMap,M=new WeakMap,Qe),me=Object.create(null),G,S,X,ce,C,F,Y,Je,ht=(Je=class{constructor(e,t,s){f(this,F);f(this,G);f(this,S);f(this,X);f(this,ce,0);f(this,C,me);if(m(this,S,s||Object.create(null)),m(this,G,[]),e&&t){const a=Object.create(null);a[e]={handler:t,possibleKeys:[],score:0},m(this,G,[a])}m(this,X,[])}insert(e,t,s){m(this,ce,++Fe(this,ce)._);let a=this;const i=Tt(t),r=[];for(let n=0,c=i.length;n<c;n++){const l=i[n],d=i[n+1],p=Dt(l,d),u=Array.isArray(p)?p[0]:l;if(u in o(a,S)){a=o(a,S)[u],p&&r.push(p[1]);continue}o(a,S)[u]=new ht,p&&(o(a,X).push(p),r.push(p[1])),a=o(a,S)[u]}return o(a,G).push({[e]:{handler:s,possibleKeys:r.filter((n,c,l)=>l.indexOf(n)===c),score:o(this,ce)}}),a}search(e,t){var c;const s=[];m(this,C,me);let i=[this];const r=Ze(t),n=[];for(let l=0,d=r.length;l<d;l++){const p=r[l],u=l===d-1,h=[];for(let w=0,T=i.length;w<T;w++){const v=i[w],y=o(v,S)[p];y&&(m(y,C,o(v,C)),u?(o(y,S)["*"]&&s.push(...x(this,F,Y).call(this,o(y,S)["*"],e,o(v,C))),s.push(...x(this,F,Y).call(this,y,e,o(v,C)))):h.push(y));for(let A=0,ee=o(v,X).length;A<ee;A++){const de=o(v,X)[A],k=o(v,C)===me?{}:{...o(v,C)};if(de==="*"){const q=o(v,S)["*"];q&&(s.push(...x(this,F,Y).call(this,q,e,o(v,C))),m(q,C,k),h.push(q));continue}const[Te,_e,pe]=de;if(!p&&!(pe instanceof RegExp))continue;const N=o(v,S)[Te],bt=r.slice(l).join("/");if(pe instanceof RegExp){const q=pe.exec(bt);if(q){if(k[_e]=q[0],s.push(...x(this,F,Y).call(this,N,e,o(v,C),k)),Object.keys(o(N,S)).length){m(N,C,k);const Ie=((c=q[0].match(/\//))==null?void 0:c.length)??0;(n[Ie]||(n[Ie]=[])).push(N)}continue}}(pe===!0||pe.test(p))&&(k[_e]=p,u?(s.push(...x(this,F,Y).call(this,N,e,k,o(v,C))),o(N,S)["*"]&&s.push(...x(this,F,Y).call(this,o(N,S)["*"],e,k,o(v,C)))):(m(N,C,k),h.push(N)))}}i=h.concat(n.shift()??[])}return s.length>1&&s.sort((l,d)=>l.score-d.score),[s.map(({handler:l,params:d})=>[l,d])]}},G=new WeakMap,S=new WeakMap,X=new WeakMap,ce=new WeakMap,C=new WeakMap,F=new WeakSet,Y=function(e,t,s,a){const i=[];for(let r=0,n=o(e,G).length;r<n;r++){const c=o(e,G)[r],l=c[t]||c[j],d={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),s!==me||a&&a!==me))for(let p=0,u=l.possibleKeys.length;p<u;p++){const h=l.possibleKeys[p],w=d[l.score];l.params[h]=a!=null&&a[h]&&!w?a[h]:s[h]??(a==null?void 0:a[h]),d[l.score]=!0}}return i},Je),Z,Xe,Xt=(Xe=class{constructor(){g(this,"name","TrieRouter");f(this,Z);m(this,Z,new ht)}add(e,t,s){const a=tt(t);if(a){for(let i=0,r=a.length;i<r;i++)o(this,Z).insert(e,a[i],s);return}o(this,Z).insert(e,t,s)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,Xe),ft=class extends dt{constructor(e={}){super(e),this.router=e.router??new Jt({routers:[new Qt,new Xt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(r=>typeof r=="string"?r==="*"?()=>r:n=>r===n?n:null:typeof r=="function"?r:n=>r.includes(n)?n:null)(s.origin),i=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(n,c){var p;function l(u,h){n.res.headers.set(u,h)}const d=await a(n.req.header("origin")||"",n);if(d&&l("Access-Control-Allow-Origin",d),s.credentials&&l("Access-Control-Allow-Credentials","true"),(p=s.exposeHeaders)!=null&&p.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),n.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await i(n.req.header("origin")||"",n);u.length&&l("Access-Control-Allow-Methods",u.join(","));let h=s.allowHeaders;if(!(h!=null&&h.length)){const w=n.req.header("Access-Control-Request-Headers");w&&(h=w.split(/\s*,\s*/))}return h!=null&&h.length&&(l("Access-Control-Allow-Headers",h.join(",")),n.res.headers.append("Vary","Access-Control-Request-Headers")),n.res.headers.delete("Content-Length"),n.res.headers.delete("Content-Type"),new Response(null,{headers:n.res.headers,status:204,statusText:"No Content"})}await c(),s.origin!=="*"&&n.header("Vary","Origin",{append:!0})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Be=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,a=e.match(s);if(!a)return;let i=t[a[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,as=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),a=[];for(const i of s)i===".."&&a.length>0&&a.at(-1)!==".."?a.pop():i!=="."&&a.push(i);return a.join("/")||"."},xt={br:".br",zstd:".zst",gzip:".gz"},is=Object.keys(xt),rs="index.html",ns=e=>{const t=e.root??"./",s=e.path,a=e.join??as;return async(i,r)=>{var p,u,h,w;if(i.finalized)return r();let n;if(e.path)n=e.path;else try{if(n=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(n))throw new Error}catch{return await((p=e.onNotFound)==null?void 0:p.call(e,i.req.path,i)),r()}let c=a(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(n):n);e.isDir&&await e.isDir(c)&&(c=a(c,rs));const l=e.getContent;let d=await l(c,i);if(d instanceof Response)return i.newResponse(d.body,d);if(d){const T=e.mimes&&Be(c,e.mimes)||Be(c);if(i.header("Content-Type",T||"application/octet-stream"),e.precompressed&&(!T||es.test(T))){const v=new Set((u=i.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(y=>y.trim()));for(const y of is){if(!v.has(y))continue;const A=await l(c+xt[y],i);if(A){d=A,i.header("Content-Encoding",y),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((h=e.onFound)==null?void 0:h.call(e,c,i)),i.body(d)}await((w=e.onNotFound)==null?void 0:w.call(e,c,i)),await r()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let a;t&&t.namespace?a=t.namespace:a=__STATIC_CONTENT;const i=s[e]||e;if(!i)return null;const r=await a.get(i,{type:"stream"});return r||null},ls=e=>async function(s,a){return ns({...e,getContent:async r=>os(r,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,a)},cs=e=>ls(e);const b=new ft;b.use("/api/*",Zt());b.use("/static/*",cs({root:"./public"}));b.post("/api/auth/register",async e=>{try{const{email:t,password:s,firstName:a,lastName:i,company:r}=await e.req.json();if(!t||!s||!a||!i)return e.json({error:"Tous les champs sont requis"},400);if(await e.env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(t).first())return e.json({error:"Cet email est déjà utilisé"},400);const c=await e.env.DB.prepare("INSERT INTO users (email, password, first_name, last_name, company) VALUES (?, ?, ?, ?, ?)").bind(t,s,a,i,r||"").run();return e.json({success:!0,userId:c.meta.last_row_id,message:"Compte créé avec succès"})}catch{return e.json({error:"Erreur lors de la création du compte"},500)}});b.post("/api/auth/login",async e=>{try{const{email:t,password:s}=await e.req.json(),a=await e.env.DB.prepare("SELECT id, email, first_name, last_name, company FROM users WHERE email = ? AND password = ?").bind(t,s).first();return a?e.json({success:!0,user:{id:a.id,email:a.email,firstName:a.first_name,lastName:a.last_name,company:a.company}}):e.json({error:"Email ou mot de passe incorrect"},401)}catch{return e.json({error:"Erreur lors de la connexion"},500)}});b.post("/api/assessments",async e=>{try{const{userId:t,assessmentType:s}=await e.req.json(),a=await e.env.DB.prepare("INSERT INTO assessments (user_id, assessment_type, status) VALUES (?, ?, ?)").bind(t,s,"in_progress").run();return e.json({success:!0,assessmentId:a.meta.last_row_id})}catch{return e.json({error:"Erreur lors de la création de l'évaluation"},500)}});b.post("/api/assessments/:id/answers",async e=>{try{const t=e.req.param("id"),{answers:s}=await e.req.json();for(const r of s)await e.env.DB.prepare("INSERT INTO assessment_answers (assessment_id, category, question_key, answer_value) VALUES (?, ?, ?, ?)").bind(t,r.category,r.questionKey,r.value).run();const a=s.reduce((r,n)=>r+n.value,0),i=Math.round(a/s.length*20);return await e.env.DB.prepare("UPDATE assessments SET status = ?, overall_score = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").bind("completed",i,t).run(),e.json({success:!0,score:i})}catch{return e.json({error:"Erreur lors de la sauvegarde des réponses"},500)}});b.get("/api/users/:userId/assessments",async e=>{try{const t=e.req.param("userId"),{results:s}=await e.env.DB.prepare("SELECT id, assessment_type, status, overall_score, created_at FROM assessments WHERE user_id = ? ORDER BY created_at DESC").bind(t).all();return e.json({assessments:s})}catch{return e.json({error:"Erreur lors de la récupération des évaluations"},500)}});b.get("/api/assessments/:id",async e=>{try{const t=e.req.param("id"),s=await e.env.DB.prepare("SELECT * FROM assessments WHERE id = ?").bind(t).first(),{results:a}=await e.env.DB.prepare("SELECT * FROM assessment_answers WHERE assessment_id = ?").bind(t).all();return e.json({assessment:s,answers:a})}catch{return e.json({error:"Erreur lors de la récupération de l'évaluation"},500)}});b.get("/",e=>e.html(`
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
                        <span class="text-2xl font-bold text-indigo-600"><i class="fas fa-brain mr-2"></i>Factor AI</span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/services" class="text-gray-700 hover:text-indigo-600">Services</a>
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
  `));b.get("/login",e=>e.html(`
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
  `));b.get("/register",e=>e.html(`
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
  `));b.get("/dashboard",e=>e.html(`
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
  `));b.get("/assessment",e=>e.html(`
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
  `));b.get("/results",e=>e.html(`
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
  `));b.get("/resources",e=>e.html(`
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
  `));b.post("/api/contact",async e=>{try{const{name:t,email:s,phone:a,company:i,role:r,message:n,preferredDate:c,budget:l}=await e.req.json();return console.log("Contact form submission:",{name:t,email:s,company:i}),e.json({success:!0,message:"Votre demande a été envoyée avec succès. Nous vous recontacterons sous 24h."})}catch{return e.json({error:"Erreur lors de l'envoi du formulaire"},500)}});b.get("/services",e=>e.html(`
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
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getServicesData(lang);
            
            document.body.innerHTML = renderNavigation('services') + \`
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
  `));b.get("/about",e=>e.html(`
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
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getAboutData(lang);
            
            document.body.innerHTML = renderNavigation('about') + \`
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
  `));b.get("/contact",e=>e.html(`
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
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            document.body.innerHTML = renderNavigation('contact') + \`
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
  `));b.get("/faq",e=>e.html(`
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
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getFaqData(lang);
            
            document.body.innerHTML = renderNavigation('faq') + \`
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
  `));b.get("/testimonials",e=>e.html(`
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
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const lang = getCurrentLang();
            const data = getTestimonialsData(lang);
            
            document.body.innerHTML = renderNavigation('testimonials') + \`
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
  `));const ze=new ft,ds=Object.assign({"/src/index.tsx":b});let vt=!1;for(const[,e]of Object.entries(ds))e&&(ze.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ze.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{ze as default};
