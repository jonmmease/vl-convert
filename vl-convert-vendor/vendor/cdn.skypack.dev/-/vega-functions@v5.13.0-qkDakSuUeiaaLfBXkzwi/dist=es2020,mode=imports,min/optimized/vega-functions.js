import{truthy as k,error as h,hasOwnProperty as y,isFunction as Y,isString as b,extend as I,isArray as p,field as nn,peek as j,isBoolean as en,isDate as rn,isNumber as on,isObject as D,isRegExp as an,toBoolean as sn,toDate as cn,toNumber as un,toString as fn,flush as ln,lerp as dn,pad as mn,span as pn,inrange as gn,truncate as hn,quarter as vn,utcquarter as xn,extent as wn,clampRange as yn,panLinear as bn,panLog as Sn,panPow as Nn,panSymlog as An,zoomLinear as Fn,zoomLog as Pn,zoomPow as En,zoomSymlog as zn,stringValue as S,identity as Rn,array as U}from"/-/vega-util@v1.17.0-uRskU0IBL2vWCP4Va8OC/dist=es2020,mode=imports,min/optimized/vega-util.js";import{Literal as v,constants as In,codegenExpression as jn,functions as Dn,parseExpression as Ln,CallExpression as On}from"/-/vega-expression@v5.0.0-kP0F2avA8xgwhtleXksI/dist=es2020,mode=imports,min/optimized/vega-expression.js";import{geoBounds as Mn,geoCentroid as Vn,geoArea as qn}from"/-/d3-geo@v3.0.1-kwyelOm8gApBxT2oVVB9/dist=es2020,mode=imports,min/optimized/d3-geo.js";import{rgb as W,lab as Bn,hcl as Cn,hsl as Gn}from"/-/d3-color@v3.0.1-PMFX4FeSjgNPlkOOfuhz/dist=es2020,mode=imports,min/optimized/d3-color.js";import{isTuple as Z}from"/-/vega-dataflow@v5.7.4-DrCzG6Luqf74SfPN5Hxw/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{bandSpace as Tn,scale as H,scaleFraction as Xn}from"/-/vega-scale@v7.2.0-V0J4hKWZmxW22KwUY6dZ/dist=es2020,mode=imports,min/optimized/vega-scale.js";import{Gradient as $n,pathRender as kn,pathParse as Yn,Bounds as K,intersect as Un}from"/-/vega-scenegraph@v4.10.0-2GCI9CL2cGgIKRDV0eDe/dist=es2020,mode=imports,min/optimized/vega-scenegraph.js";import{selectionVisitor as L,selectionTest as Wn,selectionIdTest as Zn,selectionResolve as Hn,selectionTuples as Kn}from"/-/vega-selections@v5.4.0-zzF465zXstRQFfOBiACh/dist=es2020,mode=imports,min/optimized/vega-selections.js";import{random as Qn,cumulativeNormal as Jn,cumulativeLogNormal as _n,cumulativeUniform as te,densityNormal as ne,densityLogNormal as ee,densityUniform as re,quantileNormal as ie,quantileLogNormal as oe,quantileUniform as ae,sampleNormal as se,sampleLogNormal as ce,sampleUniform as ue}from"/-/vega-statistics@v1.8.0-ffGE4n8RjawoHviWdqFQ/dist=es2020,mode=imports,min/optimized/vega-statistics.js";import{utcOffset as fe,utcSequence as le,timeOffset as de,timeSequence as me,timeUnitSpecifier as pe,week as ge,utcweek as he,dayofyear as ve,utcdayofyear as xe}from"/-/vega-time@v2.1.0-LVGYZzfDGZrYRhsP6b35/dist=es2020,mode=imports,min/optimized/vega-time.js";import{range as we}from"/-/d3-array@v3.1.1-Ibshj34oOmCw8da1RLSW/dist=es2020,mode=imports,min/optimized/d3-array.js";function O(t){const n=this.context.data[t];return n?n.values.value:[]}function Q(t,n,e){const r=this.context.data[t]["index:"+n],i=r?r.value.get(e):void 0;return i&&i.count}function J(t,n){const e=this.context.dataflow,r=this.context.data[t],i=r.input;return e.pulse(i,e.changeset().remove(k).insert(n)),1}function _(t,n,e){if(t){const r=this.context.dataflow,i=t.mark.source;r.pulse(i,r.changeset().encode(t,n))}return e!==void 0?e:t}const x=t=>function(n,e){const r=this.context.dataflow.locale();return r[t](e)(n)},tt=x("format"),M=x("timeFormat"),nt=x("utcFormat"),et=x("timeParse"),rt=x("utcParse"),N=new Date(2e3,0,1);function A(t,n,e){return!Number.isInteger(t)||!Number.isInteger(n)?"":(N.setYear(2e3),N.setMonth(t),N.setDate(n),M.call(this,N,e))}function it(t){return A.call(this,t,1,"%B")}function ot(t){return A.call(this,t,1,"%b")}function at(t){return A.call(this,0,2+t,"%A")}function st(t){return A.call(this,0,2+t,"%a")}const ct=":",ut="@",F="%",V="$";function P(t,n,e,r){n[0].type!==v&&h("First argument to data functions must be a string literal.");const i=n[0].value,o=ct+i;if(!y(o,r))try{r[o]=e.getData(i).tuplesRef()}catch(a){}}function ft(t,n,e,r){n[0].type!==v&&h("First argument to indata must be a string literal."),n[1].type!==v&&h("Second argument to indata must be a string literal.");const i=n[0].value,o=n[1].value,a=ut+o;y(a,r)||(r[a]=e.getData(i).indataRef(e,o))}function f(t,n,e,r){if(n[0].type===v)lt(e,r,n[0].value);else for(t in e.scales)lt(e,r,t)}function lt(t,n,e){const r=F+e;if(!y(n,r))try{n[r]=t.scaleRef(e)}catch(i){}}function m(t,n){let e;return Y(t)?t:b(t)?(e=n.scales[t])&&e.value:void 0}function ye(t,n,e){n.__bandwidth=i=>i&&i.bandwidth?i.bandwidth():0,e._bandwidth=f,e._range=f,e._scale=f;const r=i=>"_["+(i.type===v?S(F+i.value):S(F)+"+"+t(i))+"]";return{_bandwidth:i=>"this.__bandwidth(".concat(r(i[0]),")"),_range:i=>"".concat(r(i[0]),".range()"),_scale:i=>"".concat(r(i[0]),"(").concat(t(i[1]),")")}}function q(t,n){return function(e,r,i){if(e){const o=m(e,(i||this).context);return o&&o.path[t](r)}else return n(r)}}const dt=q("area",qn),mt=q("bounds",Mn),pt=q("centroid",Vn);function gt(t){const n=this.context.group;let e=!1;if(n)for(;t;){if(t===n){e=!0;break}t=t.mark.group}return e}function B(t,n,e){try{t[n].apply(t,["EXPRESSION"].concat([].slice.call(e)))}catch(r){t.warn(r)}return e[e.length-1]}function ht(){return B(this.context.dataflow,"warn",arguments)}function vt(){return B(this.context.dataflow,"info",arguments)}function xt(){return B(this.context.dataflow,"debug",arguments)}function C(t){const n=t/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}function E(t){const n=W(t),e=C(n.r),r=C(n.g),i=C(n.b);return .2126*e+.7152*r+.0722*i}function wt(t,n){const e=E(t),r=E(n),i=Math.max(e,r),o=Math.min(e,r);return(i+.05)/(o+.05)}function yt(){const t=[].slice.call(arguments);return t.unshift({}),I(...t)}function bt(t,n){return t===n||t!==t&&n!==n?!0:p(t)?p(n)&&t.length===n.length?be(t,n):!1:D(t)&&D(n)?St(t,n):!1}function be(t,n){for(let e=0,r=t.length;e<r;++e)if(!bt(t[e],n[e]))return!1;return!0}function St(t,n){for(const e in t)if(!bt(t[e],n[e]))return!1;return!0}function Nt(t){return n=>St(t,n)}function At(t,n,e,r,i,o){const a=this.context.dataflow,u=this.context.data[t],s=u.input,l=a.stamp();let d=u.changes,g,R;if(a._trigger===!1||!(s.value.length||n||r))return 0;if((!d||d.stamp<l)&&(u.changes=d=a.changeset(),d.stamp=l,a.runAfter(()=>{u.modified=!0,a.pulse(s,d).run()},!0,1)),e&&(g=e===!0?k:p(e)||Z(e)?e:Nt(e),d.remove(g)),n&&d.insert(n),r&&(g=Nt(r),s.value.some(g)?d.remove(g):d.insert(r)),i)for(R in o)d.modify(i,R,o[R]);return 1}function Ft(t){const n=t.touches,e=n[0].clientX-n[1].clientX,r=n[0].clientY-n[1].clientY;return Math.sqrt(e*e+r*r)}function Pt(t){const n=t.touches;return Math.atan2(n[0].clientY-n[1].clientY,n[0].clientX-n[1].clientX)}const Et={};function zt(t,n){const e=Et[n]||(Et[n]=nn(n));return p(t)?t.map(e):e(t)}function G(t){return p(t)||ArrayBuffer.isView(t)?t:null}function T(t){return G(t)||(b(t)?t:null)}function Rt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return G(t).join(...e)}function It(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return T(t).indexOf(...e)}function jt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return T(t).lastIndexOf(...e)}function Dt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return T(t).slice(...e)}function Lt(t,n,e){return Y(e)&&h("Function argument passed to replace."),String(t).replace(n,e)}function Ot(t){return G(t).slice().reverse()}function Mt(t,n,e){return Tn(t||0,n||0,e||0)}function Vt(t,n){const e=m(t,(n||this).context);return e&&e.bandwidth?e.bandwidth():0}function qt(t,n){const e=m(t,(n||this).context);return e?e.copy():void 0}function Bt(t,n){const e=m(t,(n||this).context);return e?e.domain():[]}function Ct(t,n,e){const r=m(t,(e||this).context);return r?p(n)?(r.invertRange||r.invert)(n):(r.invert||r.invertExtent)(n):void 0}function Gt(t,n){const e=m(t,(n||this).context);return e&&e.range?e.range():[]}function Tt(t,n,e){const r=m(t,(e||this).context);return r?r(n):void 0}function Xt(t,n,e,r,i){t=m(t,(i||this).context);const o=$n(n,e);let a=t.domain(),u=a[0],s=j(a),l=Rn;return s-u?l=Xn(t,u,s):t=(t.interpolator?H("sequential")().interpolator(t.interpolator()):H("linear")().interpolate(t.interpolate()).range(t.range())).domain([u=0,s=1]),t.ticks&&(a=t.ticks(+r||15),u!==a[0]&&a.unshift(u),s!==j(a)&&a.push(s)),a.forEach(d=>o.stop(l(d),t(d))),o}function $t(t,n,e){const r=m(t,(e||this).context);return function(i){return r?r.path.context(i)(n):""}}function kt(t){let n=null;return function(e){return e?kn(e,n=n||Yn(t)):t}}const Yt=t=>t.data;function Ut(t,n){const e=O.call(n,t);return e.root&&e.root.lookup||{}}function Wt(t,n,e){const r=Ut(t,this),i=r[n],o=r[e];return i&&o?i.path(o).map(Yt):void 0}function Zt(t,n){const e=Ut(t,this)[n];return e?e.ancestors().map(Yt):void 0}const Ht=()=>typeof window!="undefined"&&window||null;function Kt(){const t=Ht();return t?t.screen:{}}function Qt(){const t=Ht();return t?[t.innerWidth,t.innerHeight]:[void 0,void 0]}function Jt(){const t=this.context.dataflow,n=t.container&&t.container();return n?[n.clientWidth,n.clientHeight]:[void 0,void 0]}function _t(t,n,e){if(!t)return[];const[r,i]=t,o=new K().set(r[0],r[1],i[0],i[1]),a=e||this.context.dataflow.scenegraph().root;return Un(a,o,Se(n))}function Se(t){let n=null;if(t){const e=U(t.marktype),r=U(t.markname);n=i=>(!e.length||e.some(o=>i.marktype===o))&&(!r.length||r.some(o=>i.name===o))}return n}function Ne(t,n,e){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:5;const i=t[t.length-1];return i===void 0||Math.sqrt((i[0]-n)**2+(i[1]-e)**2)>r?(t.push([n,e]),[...t]):t}function Ae(t){return(t??[]).reduce((n,e,r)=>{let[i,o]=e;return n+=r==0?"M ".concat(i,",").concat(o," "):r===t.length-1?" Z":"L ".concat(i,",").concat(o," ")},"")}function Fe(t,n,e){const{x:r,y:i,mark:o}=e,a=new K().set(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);for(const[s,l]of n)s<a.x1&&(a.x1=s),s>a.x2&&(a.x2=s),l<a.y1&&(a.y1=l),l>a.y2&&(a.y2=l);a.translate(r,i);const u=_t([[a.x1,a.y1],[a.x2,a.y2]],t,o);return u.filter(s=>Pe(s.x,s.y,n))}function Pe(t,n,e){let r=0;for(let i=0,o=e.length-1;i<e.length;o=i++){const[a,u]=e[o],[s,l]=e[i];l>n!=u>n&&t<(a-s)*(n-l)/(u-l)+s&&r++}return r&1}const w={random(){return Qn()},cumulativeNormal:Jn,cumulativeLogNormal:_n,cumulativeUniform:te,densityNormal:ne,densityLogNormal:ee,densityUniform:re,quantileNormal:ie,quantileLogNormal:oe,quantileUniform:ae,sampleNormal:se,sampleLogNormal:ce,sampleUniform:ue,isArray:p,isBoolean:en,isDate:rn,isDefined(t){return t!==void 0},isNumber:on,isObject:D,isRegExp:an,isString:b,isTuple:Z,isValid(t){return t!=null&&t===t},toBoolean:sn,toDate(t){return cn(t)},toNumber:un,toString:fn,indexof:It,join:Rt,lastindexof:jt,replace:Lt,reverse:Ot,slice:Dt,flush:ln,lerp:dn,merge:yt,pad:mn,peek:j,pluck:zt,span:pn,inrange:gn,truncate:hn,rgb:W,lab:Bn,hcl:Cn,hsl:Gn,luminance:E,contrast:wt,sequence:we,format:tt,utcFormat:nt,utcParse:rt,utcOffset:fe,utcSequence:le,timeFormat:M,timeParse:et,timeOffset:de,timeSequence:me,timeUnitSpecifier:pe,monthFormat:it,monthAbbrevFormat:ot,dayFormat:at,dayAbbrevFormat:st,quarter:vn,utcquarter:xn,week:ge,utcweek:he,dayofyear:ve,utcdayofyear:xe,warn:ht,info:vt,debug:xt,extent(t){return wn(t)},inScope:gt,intersect:_t,clampRange:yn,pinchDistance:Ft,pinchAngle:Pt,screen:Kt,containerSize:Jt,windowSize:Qt,bandspace:Mt,setdata:J,pathShape:kt,panLinear:bn,panLog:Sn,panPow:Nn,panSymlog:An,zoomLinear:Fn,zoomLog:Pn,zoomPow:En,zoomSymlog:zn,encode:_,modify:At,lassoAppend:Ne,lassoPath:Ae,intersectLasso:Fe},Ee=["view","item","group","xy","x","y"],ze="event.vega.",tn="this.",X={},$={forbidden:["_"],allowed:["datum","event","item"],fieldvar:"datum",globalvar:t=>"_[".concat(S(V+t),"]"),functions:Re,constants:In,visitors:X},z=jn($);function Re(t){const n=Dn(t);Ee.forEach(e=>n[e]=ze+e);for(const e in w)n[e]=tn+e;return I(n,ye(t,w,X)),n}function c(t,n,e){return arguments.length===1?w[t]:(w[t]=n,e&&(X[t]=e),z&&(z.functions[t]=tn+t),this)}c("bandwidth",Vt,f),c("copy",qt,f),c("domain",Bt,f),c("range",Gt,f),c("invert",Ct,f),c("scale",Tt,f),c("gradient",Xt,f),c("geoArea",dt,f),c("geoBounds",mt,f),c("geoCentroid",pt,f),c("geoShape",$t,f),c("indata",Q,ft),c("data",O,P),c("treePath",Wt,P),c("treeAncestors",Zt,P),c("vlSelectionTest",Wn,L),c("vlSelectionIdTest",Zn,L),c("vlSelectionResolve",Hn,L),c("vlSelectionTuples",Kn);function Ie(t,n){const e={};let r;try{t=b(t)?t:S(t)+"",r=Ln(t)}catch(o){h("Expression parse error: "+t)}r.visit(o=>{if(o.type!==On)return;const a=o.callee.name,u=$.visitors[a];u&&u(a,o.arguments,n,e)});const i=z(r);return i.globals.forEach(o=>{const a=V+o;!y(e,a)&&n.getSignal(o)&&(e[a]=n.signalRef(o))}),{$expr:I({code:i.code},n.options.ast?{ast:r}:null),$fields:i.fields,$params:e}}export{ct as DataPrefix,ut as IndexPrefix,F as ScalePrefix,V as SignalPrefix,Mt as bandspace,Vt as bandwidth,z as codeGenerator,$ as codegenParams,Jt as containerSize,wt as contrast,qt as copy,O as data,P as dataVisitor,st as dayAbbrevFormat,at as dayFormat,xt as debug,Bt as domain,_ as encode,c as expressionFunction,tt as format,w as functionContext,dt as geoArea,mt as geoBounds,pt as geoCentroid,$t as geoShape,gt as inScope,Q as indata,ft as indataVisitor,It as indexof,vt as info,Ct as invert,Rt as join,jt as lastindexof,E as luminance,yt as merge,At as modify,ot as monthAbbrevFormat,it as monthFormat,Ie as parseExpression,kt as pathShape,Pt as pinchAngle,Ft as pinchDistance,zt as pluck,Gt as range,Lt as replace,Ot as reverse,Tt as scale,Xt as scaleGradient,f as scaleVisitor,Kt as screen,J as setdata,Dt as slice,M as timeFormat,et as timeParse,Zt as treeAncestors,Wt as treePath,nt as utcFormat,rt as utcParse,ht as warn,Qt as windowSize};export default null;