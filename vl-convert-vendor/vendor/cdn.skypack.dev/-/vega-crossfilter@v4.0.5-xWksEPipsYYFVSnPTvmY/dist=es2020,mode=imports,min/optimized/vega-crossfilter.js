import{permute as L,bisectLeft as O,bisectRight as U}from"/-/d3-array@v2.12.1-Ilh7e293asl3yQWpnFdl/dist=es2020,mode=imports,min/optimized/d3-array.js";import{Transform as M}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{inherits as C}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";const P=e=>new Uint8Array(e),S=e=>new Uint16Array(e),b=e=>new Uint32Array(e);function _(){let e=8,t=[],r=b(0),o=k(0,e),d=k(0,e);return{data:()=>t,seen:()=>r=E(r,t.length),add(s){for(let a=0,f=t.length,l=s.length,n;a<l;++a)n=s[a],n._index=f++,t.push(n)},remove(s,a){const f=t.length,l=Array(f-s),n=t;let h,i,c;for(i=0;!a[i]&&i<f;++i)l[i]=t[i],n[i]=i;for(c=i;i<f;++i)h=t[i],a[i]?n[i]=-1:(n[i]=c,o[c]=o[i],d[c]=d[i],l[c]=h,h._index=c++),o[i]=0;return t=l,n},size:()=>t.length,curr:()=>o,prev:()=>d,reset:s=>d[s]=o[s],all:()=>e<257?255:e<65537?65535:4294967295,set(s,a){o[s]|=a},clear(s,a){o[s]&=~a},resize(s,a){const f=o.length;(s>f||a>e)&&(e=Math.max(a,e),o=k(s,e,o),d=k(s,e))}}}function E(e,t,r){return e.length>=t?e:(r=r||new e.constructor(t),r.set(e),r)}function k(e,t,r){const o=(t<257?P:t<65537?S:b)(e);return r&&o.set(r),o}function R(e,t,r){const o=1<<t;return{one:o,zero:~o,range:r.slice(),bisect:e.bisect,index:e.index,size:e.size,onAdd(d,s){const a=this,f=a.bisect(a.range,d.value),l=d.index,n=f[0],h=f[1],i=l.length;let c;for(c=0;c<n;++c)s[l[c]]|=o;for(c=h;c<i;++c)s[l[c]]|=o;return a}}}function F(){let e=b(0),t=[],r=0;function o(f,l,n){if(!l.length)return[];const h=r,i=l.length,c=b(i);let u=Array(i),g,p,m;for(m=0;m<i;++m)u[m]=f(l[m]),c[m]=m;if(u=I(u,c),h)g=t,p=e,t=Array(h+i),e=b(h+i),B(n,g,p,h,u,c,i,t,e);else{if(n>0)for(m=0;m<i;++m)c[m]+=n;t=u,e=c}return r=h+i,{index:c,value:u}}function d(f,l){const n=r;let h,i,c;for(i=0;!l[e[i]]&&i<n;++i);for(c=i;i<n;++i)l[h=e[i]]||(e[c]=h,t[c]=t[i],++c);r=n-f}function s(f){for(let l=0,n=r;l<n;++l)e[l]=f[e[l]]}function a(f,l){let n;return l?n=l.length:(l=t,n=r),[O(l,f[0],0,n),U(l,f[1],0,n)]}return{insert:o,remove:d,bisect:a,reindex:s,index:()=>e,size:()=>r}}function I(e,t){return e.sort.call(t,(r,o)=>{const d=e[r],s=e[o];return d<s?-1:d>s?1:0}),L(e,t)}function B(e,t,r,o,d,s,a,f,l){let n=0,h=0,i;for(i=0;n<o&&h<a;++i)t[n]<d[h]?(f[i]=t[n],l[i]=r[n++]):(f[i]=d[h],l[i]=s[h++]+e);for(;n<o;++n,++i)f[i]=t[n],l[i]=r[n];for(;h<a;++h,++i)f[i]=d[h],l[i]=s[h]+e}function j(e){M.call(this,_(),e),this._indices=null,this._dims=null}j.Definition={type:"CrossFilter",metadata:{},params:[{name:"fields",type:"field",array:!0,required:!0},{name:"query",type:"array",array:!0,required:!0,content:{type:"number",array:!0,length:2}}]},C(j,M,{transform(e,t){if(this._dims){var r=e.modified("fields")||e.fields.some(o=>t.modified(o.fields));return r?this.reinit(e,t):this.eval(e,t)}else return this.init(e,t)},init(e,t){const r=e.fields,o=e.query,d=this._indices={},s=this._dims=[],a=o.length;let f=0,l,n;for(;f<a;++f)l=r[f].fname,n=d[l]||(d[l]=F()),s.push(R(n,f,o[f]));return this.eval(e,t)},reinit(e,t){const r=t.materialize().fork(),o=e.fields,d=e.query,s=this._indices,a=this._dims,f=this.value,l=f.curr(),n=f.prev(),h=f.all(),i=r.rem=r.add,c=r.mod,u=d.length,g={};let p,m,y,v,D,q,x,z,A;if(n.set(l),t.rem.length&&(D=this.remove(e,t,r)),t.add.length&&f.add(t.add),t.mod.length)for(q={},v=t.mod,x=0,z=v.length;x<z;++x)q[v[x]._index]=1;for(x=0;x<u;++x)A=o[x],(!a[x]||e.modified("fields",x)||t.modified(A.fields))&&(y=A.fname,(p=g[y])||(s[y]=m=F(),g[y]=p=m.insert(A,t.source,0)),a[x]=R(m,x,d[x]).onAdd(p,l));for(x=0,z=f.data().length;x<z;++x){if(D[x])continue;n[x]!==l[x]?i.push(x):q[x]&&l[x]!==h&&c.push(x)}return f.mask=(1<<u)-1,r},eval(e,t){const r=t.materialize().fork(),o=this._dims.length;let d=0;return t.rem.length&&(this.remove(e,t,r),d|=(1<<o)-1),e.modified("query")&&!e.modified("fields")&&(d|=this.update(e,t,r)),t.add.length&&(this.insert(e,t,r),d|=(1<<o)-1),t.mod.length&&(this.modify(t,r),d|=(1<<o)-1),this.value.mask=d,r},insert(e,t,r){const o=t.add,d=this.value,s=this._dims,a=this._indices,f=e.fields,l={},n=r.add,h=d.size()+o.length,i=s.length;let c=d.size(),u,g,p;d.resize(h,i),d.add(o);const m=d.curr(),y=d.prev(),v=d.all();for(u=0;u<i;++u)g=f[u].fname,p=l[g]||(l[g]=a[g].insert(f[u],o,c)),s[u].onAdd(p,m);for(;c<h;++c)y[c]=v,m[c]!==v&&n.push(c)},modify(e,t){const r=t.mod,o=this.value,d=o.curr(),s=o.all(),a=e.mod;let f,l,n;for(f=0,l=a.length;f<l;++f)n=a[f]._index,d[n]!==s&&r.push(n)},remove(e,t,r){const o=this._indices,d=this.value,s=d.curr(),a=d.prev(),f=d.all(),l={},n=r.rem,h=t.rem;let i,c,u,g;for(i=0,c=h.length;i<c;++i)u=h[i]._index,l[u]=1,a[u]=g=s[u],s[u]=f,g!==f&&n.push(u);for(u in o)o[u].remove(c,l);return this.reindex(t,c,l),l},reindex(e,t,r){const o=this._indices,d=this.value;e.runAfter(()=>{const s=d.remove(t,r);for(const a in o)o[a].reindex(s)})},update(e,t,r){const o=this._dims,d=e.query,s=t.stamp,a=o.length;let f=0,l,n;for(r.filters=0,n=0;n<a;++n)e.modified("query",n)&&(l=n,++f);if(f===1)f=o[l].one,this.incrementOne(o[l],d[l],r.add,r.rem);else for(n=0,f=0;n<a;++n){if(!e.modified("query",n))continue;f|=o[n].one,this.incrementAll(o[n],d[n],s,r.add),r.rem=r.add}return f},incrementAll(e,t,r,o){const d=this.value,s=d.seen(),a=d.curr(),f=d.prev(),l=e.index(),n=e.bisect(e.range),h=e.bisect(t),i=h[0],c=h[1],u=n[0],g=n[1],p=e.one;let m,y,v;if(i<u)for(m=i,y=Math.min(u,c);m<y;++m)v=l[m],s[v]!==r&&(f[v]=a[v],s[v]=r,o.push(v)),a[v]^=p;else if(i>u)for(m=u,y=Math.min(i,g);m<y;++m)v=l[m],s[v]!==r&&(f[v]=a[v],s[v]=r,o.push(v)),a[v]^=p;if(c>g)for(m=Math.max(i,g),y=c;m<y;++m)v=l[m],s[v]!==r&&(f[v]=a[v],s[v]=r,o.push(v)),a[v]^=p;else if(c<g)for(m=Math.max(u,c),y=g;m<y;++m)v=l[m],s[v]!==r&&(f[v]=a[v],s[v]=r,o.push(v)),a[v]^=p;e.range=t.slice()},incrementOne(e,t,r,o){const d=this.value,s=d.curr(),a=e.index(),f=e.bisect(e.range),l=e.bisect(t),n=l[0],h=l[1],i=f[0],c=f[1],u=e.one;let g,p,m;if(n<i)for(g=n,p=Math.min(i,h);g<p;++g)m=a[g],s[m]^=u,r.push(m);else if(n>i)for(g=i,p=Math.min(n,c);g<p;++g)m=a[g],s[m]^=u,o.push(m);if(h>c)for(g=Math.max(n,c),p=h;g<p;++g)m=a[g],s[m]^=u,r.push(m);else if(h<c)for(g=Math.max(i,h),p=c;g<p;++g)m=a[g],s[m]^=u,o.push(m);e.range=t.slice()}});function w(e){M.call(this,null,e)}w.Definition={type:"ResolveFilter",metadata:{},params:[{name:"ignore",type:"number",required:!0,description:"A bit mask indicating which filters to ignore."},{name:"filter",type:"object",required:!0,description:"Per-tuple filter bitmaps from a CrossFilter transform."}]},C(w,M,{transform(e,t){const r=~(e.ignore||0),o=e.filter,d=o.mask;if((d&r)===0)return t.StopPropagation;const s=t.fork(t.ALL),a=o.data(),f=o.curr(),l=o.prev(),n=h=>f[h]&r?null:a[h];return s.filter(s.MOD,n),d&d-1?(s.filter(s.ADD,h=>{const i=f[h]&r,c=!i&&i^l[h]&r;return c?a[h]:null}),s.filter(s.REM,h=>{const i=f[h]&r,c=i&&!(i^(i^l[h]&r));return c?a[h]:null})):(s.filter(s.ADD,n),s.filter(s.REM,h=>(f[h]&r)===d?a[h]:null)),s.filter(s.SOURCE,h=>n(h._index))}});export{j as crossfilter,w as resolvefilter};export default null;