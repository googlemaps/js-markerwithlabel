!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).markerWithLabel={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=function(e){return e&&e.Math==Math&&e},p=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof f&&f)||function(){return this}()||Function("return this")(),v={},h=function(e){try{return!!e()}catch(e){return!0}},b=!h((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d=!h((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),y=d,m=Function.prototype.call,L=y?m.bind(m):function(){return m.apply(m,arguments)},O={},D={}.propertyIsEnumerable,w=Object.getOwnPropertyDescriptor,S=w&&!D.call({1:2},1);O.f=S?function(e){var t=w(this,e);return!!t&&t.enumerable}:D;var j,P,k=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},T=d,M=Function.prototype,C=M.bind,I=M.call,x=T&&C.bind(I,I),E=T?function(e){return e&&x(e)}:function(e){return e&&function(){return I.apply(e,arguments)}},_=E,N=_({}.toString),R=_("".slice),A=function(e){return R(N(e),8,-1)},z=h,F=A,G=Object,V=E("".split),H=z((function(){return!G("z").propertyIsEnumerable(0)}))?function(e){return"String"==F(e)?V(e,""):G(e)}:G,B=TypeError,W=function(e){if(null==e)throw B("Can't call method on "+e);return e},Z=H,q=W,U=function(e){return Z(q(e))},K=function(e){return"function"==typeof e},X=K,Y=function(e){return"object"==typeof e?null!==e:X(e)},$=p,J=K,Q=function(e){return J(e)?e:void 0},ee=function(e,t){return arguments.length<2?Q($[e]):$[e]&&$[e][t]},te=E({}.isPrototypeOf),ne=p,re=ee("navigator","userAgent")||"",ie=ne.process,oe=ne.Deno,ae=ie&&ie.versions||oe&&oe.version,se=ae&&ae.v8;se&&(P=(j=se.split("."))[0]>0&&j[0]<4?1:+(j[0]+j[1])),!P&&re&&(!(j=re.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=re.match(/Chrome\/(\d+)/))&&(P=+j[1]);var le=P,ce=le,ue=h,fe=!!Object.getOwnPropertySymbols&&!ue((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ce&&ce<41})),ge=fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,pe=ee,ve=K,he=te,be=Object,de=ge?function(e){return"symbol"==typeof e}:function(e){var t=pe("Symbol");return ve(t)&&he(t.prototype,be(e))},ye=String,me=K,Le=function(e){try{return ye(e)}catch(e){return"Object"}},Oe=TypeError,De=function(e){if(me(e))return e;throw Oe(Le(e)+" is not a function")},we=De,Se=L,je=K,Pe=Y,ke=TypeError,Te={exports:{}},Me=p,Ce=Object.defineProperty,Ie=function(e,t){try{Ce(Me,e,{value:t,configurable:!0,writable:!0})}catch(n){Me[e]=t}return t},xe=Ie,Ee="__core-js_shared__",_e=p[Ee]||xe(Ee,{}),Ne=_e;(Te.exports=function(e,t){return Ne[e]||(Ne[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Re=W,Ae=Object,ze=function(e){return Ae(Re(e))},Fe=ze,Ge=E({}.hasOwnProperty),Ve=Object.hasOwn||function(e,t){return Ge(Fe(e),t)},He=E,Be=0,We=Math.random(),Ze=He(1..toString),qe=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ze(++Be+We,36)},Ue=p,Ke=Te.exports,Xe=Ve,Ye=qe,$e=fe,Je=ge,Qe=Ke("wks"),et=Ue.Symbol,tt=et&&et.for,nt=Je?et:et&&et.withoutSetter||Ye,rt=function(e){if(!Xe(Qe,e)||!$e&&"string"!=typeof Qe[e]){var t="Symbol."+e;$e&&Xe(et,e)?Qe[e]=et[e]:Qe[e]=Je&&tt?tt(t):nt(t)}return Qe[e]},it=L,ot=Y,at=de,st=function(e,t){var n=e[t];return null==n?void 0:we(n)},lt=function(e,t){var n,r;if("string"===t&&je(n=e.toString)&&!Pe(r=Se(n,e)))return r;if(je(n=e.valueOf)&&!Pe(r=Se(n,e)))return r;if("string"!==t&&je(n=e.toString)&&!Pe(r=Se(n,e)))return r;throw ke("Can't convert object to primitive value")},ct=TypeError,ut=rt("toPrimitive"),ft=function(e,t){if(!ot(e)||at(e))return e;var n,r=st(e,ut);if(r){if(void 0===t&&(t="default"),n=it(r,e,t),!ot(n)||at(n))return n;throw ct("Can't convert object to primitive value")}return void 0===t&&(t="number"),lt(e,t)},gt=de,pt=function(e){var t=ft(e,"string");return gt(t)?t:t+""},vt=Y,ht=p.document,bt=vt(ht)&&vt(ht.createElement),dt=function(e){return bt?ht.createElement(e):{}},yt=dt,mt=!b&&!h((function(){return 7!=Object.defineProperty(yt("div"),"a",{get:function(){return 7}}).a})),Lt=b,Ot=L,Dt=O,wt=k,St=U,jt=pt,Pt=Ve,kt=mt,Tt=Object.getOwnPropertyDescriptor;v.f=Lt?Tt:function(e,t){if(e=St(e),t=jt(t),kt)try{return Tt(e,t)}catch(e){}if(Pt(e,t))return wt(!Ot(Dt.f,e,t),e[t])};var Mt={},Ct=b&&h((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),It=Y,xt=String,Et=TypeError,_t=function(e){if(It(e))return e;throw Et(xt(e)+" is not an object")},Nt=b,Rt=mt,At=Ct,zt=_t,Ft=pt,Gt=TypeError,Vt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Bt="enumerable",Wt="configurable",Zt="writable";Mt.f=Nt?At?function(e,t,n){if(zt(e),t=Ft(t),zt(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Zt in n&&!n.writable){var r=Ht(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:Wt in n?n.configurable:r.configurable,enumerable:Bt in n?n.enumerable:r.enumerable,writable:!1})}return Vt(e,t,n)}:Vt:function(e,t,n){if(zt(e),t=Ft(t),zt(n),Rt)try{return Vt(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Gt("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var qt=Mt,Ut=k,Kt=b?function(e,t,n){return qt.f(e,t,Ut(1,n))}:function(e,t,n){return e[t]=n,e},Xt={exports:{}},Yt=b,$t=Ve,Jt=Function.prototype,Qt=Yt&&Object.getOwnPropertyDescriptor,en=$t(Jt,"name"),tn={EXISTS:en,PROPER:en&&"something"===function(){}.name,CONFIGURABLE:en&&(!Yt||Yt&&Qt(Jt,"name").configurable)},nn=K,rn=_e,on=E(Function.toString);nn(rn.inspectSource)||(rn.inspectSource=function(e){return on(e)});var an,sn,ln,cn=rn.inspectSource,un=K,fn=cn,gn=p.WeakMap,pn=un(gn)&&/native code/.test(fn(gn)),vn=Te.exports,hn=qe,bn=vn("keys"),dn={},yn=pn,mn=p,Ln=E,On=Y,Dn=Kt,wn=Ve,Sn=_e,jn=function(e){return bn[e]||(bn[e]=hn(e))},Pn=dn,kn="Object already initialized",Tn=mn.TypeError,Mn=mn.WeakMap;if(yn||Sn.state){var Cn=Sn.state||(Sn.state=new Mn),In=Ln(Cn.get),xn=Ln(Cn.has),En=Ln(Cn.set);an=function(e,t){if(xn(Cn,e))throw new Tn(kn);return t.facade=e,En(Cn,e,t),t},sn=function(e){return In(Cn,e)||{}},ln=function(e){return xn(Cn,e)}}else{var _n=jn("state");Pn[_n]=!0,an=function(e,t){if(wn(e,_n))throw new Tn(kn);return t.facade=e,Dn(e,_n,t),t},sn=function(e){return wn(e,_n)?e[_n]:{}},ln=function(e){return wn(e,_n)}}var Nn={set:an,get:sn,has:ln,enforce:function(e){return ln(e)?sn(e):an(e,{})},getterFor:function(e){return function(t){var n;if(!On(t)||(n=sn(t)).type!==e)throw Tn("Incompatible receiver, "+e+" required");return n}}},Rn=h,An=K,zn=Ve,Fn=b,Gn=tn.CONFIGURABLE,Vn=cn,Hn=Nn.enforce,Bn=Nn.get,Wn=Object.defineProperty,Zn=Fn&&!Rn((function(){return 8!==Wn((function(){}),"length",{value:8}).length})),qn=String(String).split("String"),Un=Xt.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!zn(e,"name")||Gn&&e.name!==t)&&(Fn?Wn(e,"name",{value:t,configurable:!0}):e.name=t),Zn&&n&&zn(n,"arity")&&e.length!==n.arity&&Wn(e,"length",{value:n.arity});try{n&&zn(n,"constructor")&&n.constructor?Fn&&Wn(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Hn(e);return zn(r,"source")||(r.source=qn.join("string"==typeof t?t:"")),e};Function.prototype.toString=Un((function(){return An(this)&&Bn(this).source||Vn(this)}),"toString");var Kn=K,Xn=Mt,Yn=Xt.exports,$n=Ie,Jn=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(Kn(n)&&Yn(n,o,r),r.global)i?e[t]=n:$n(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:Xn.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},Qn={},er=Math.ceil,tr=Math.floor,nr=Math.trunc||function(e){var t=+e;return(t>0?tr:er)(t)},rr=function(e){var t=+e;return t!=t||0===t?0:nr(t)},ir=rr,or=Math.max,ar=Math.min,sr=rr,lr=Math.min,cr=function(e){return e>0?lr(sr(e),9007199254740991):0},ur=function(e){return cr(e.length)},fr=U,gr=function(e,t){var n=ir(e);return n<0?or(n+t,0):ar(n,t)},pr=ur,vr=function(e){return function(t,n,r){var i,o=fr(t),a=pr(o),s=gr(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},hr={includes:vr(!0),indexOf:vr(!1)},br=Ve,dr=U,yr=hr.indexOf,mr=dn,Lr=E([].push),Or=function(e,t){var n,r=dr(e),i=0,o=[];for(n in r)!br(mr,n)&&br(r,n)&&Lr(o,n);for(;t.length>i;)br(r,n=t[i++])&&(~yr(o,n)||Lr(o,n));return o},Dr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wr=Or,Sr=Dr.concat("length","prototype");Qn.f=Object.getOwnPropertyNames||function(e){return wr(e,Sr)};var jr={};jr.f=Object.getOwnPropertySymbols;var Pr=ee,kr=Qn,Tr=jr,Mr=_t,Cr=E([].concat),Ir=Pr("Reflect","ownKeys")||function(e){var t=kr.f(Mr(e)),n=Tr.f;return n?Cr(t,n(e)):t},xr=Ve,Er=Ir,_r=v,Nr=Mt,Rr=h,Ar=K,zr=/#|\.prototype\./,Fr=function(e,t){var n=Vr[Gr(e)];return n==Br||n!=Hr&&(Ar(t)?Rr(t):!!t)},Gr=Fr.normalize=function(e){return String(e).replace(zr,".").toLowerCase()},Vr=Fr.data={},Hr=Fr.NATIVE="N",Br=Fr.POLYFILL="P",Wr=Fr,Zr=p,qr=v.f,Ur=Kt,Kr=Jn,Xr=Ie,Yr=function(e,t,n){for(var r=Er(t),i=Nr.f,o=_r.f,a=0;a<r.length;a++){var s=r[a];xr(e,s)||n&&xr(n,s)||i(e,s,o(t,s))}},$r=Wr,Jr=function(e,t){var n,r,i,o,a,s=e.target,l=e.global,c=e.stat;if(n=l?Zr:c?Zr[s]||Xr(s,{}):(Zr[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=qr(n,r))&&a.value:n[r],!$r(l?r:s+(c?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Yr(o,i)}(e.sham||i&&i.sham)&&Ur(o,"sham",!0),Kr(n,r,o,e)}},Qr=Or,ei=Dr,ti=Object.keys||function(e){return Qr(e,ei)},ni=b,ri=E,ii=L,oi=h,ai=ti,si=jr,li=O,ci=ze,ui=H,fi=Object.assign,gi=Object.defineProperty,pi=ri([].concat),vi=!fi||oi((function(){if(ni&&1!==fi({b:1},fi(gi({},"a",{enumerable:!0,get:function(){gi(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=fi({},e)[n]||ai(fi({},t)).join("")!=r}))?function(e,t){for(var n=ci(e),r=arguments.length,i=1,o=si.f,a=li.f;r>i;)for(var s,l=ui(arguments[i++]),c=o?pi(ai(l),o(l)):ai(l),u=c.length,f=0;u>f;)s=c[f++],ni&&!ii(a,l,s)||(n[s]=l[s]);return n}:fi;Jr({target:"Object",stat:!0,arity:2,forced:Object.assign!==vi},{assign:vi});var hi={};hi[rt("toStringTag")]="z";var bi="[object z]"===String(hi),di=bi,yi=K,mi=A,Li=rt("toStringTag"),Oi=Object,Di="Arguments"==mi(function(){return arguments}()),wi=di?mi:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Oi(e),Li))?n:Di?mi(t):"Object"==(r=mi(t))&&yi(t.callee)?"Arguments":r},Si=wi,ji=bi?{}.toString:function(){return"[object "+Si(this)+"]"};bi||Jn(Object.prototype,"toString",ji,{unsafe:!0});var Pi=dt("span").classList,ki=Pi&&Pi.constructor&&Pi.constructor.prototype,Ti=ki===Object.prototype?void 0:ki,Mi=De,Ci=d,Ii=E(E.bind),xi=A,Ei=Array.isArray||function(e){return"Array"==xi(e)},_i=E,Ni=h,Ri=K,Ai=wi,zi=cn,Fi=function(){},Gi=[],Vi=ee("Reflect","construct"),Hi=/^\s*(?:class|function)\b/,Bi=_i(Hi.exec),Wi=!Hi.exec(Fi),Zi=function(e){if(!Ri(e))return!1;try{return Vi(Fi,Gi,e),!0}catch(e){return!1}},qi=function(e){if(!Ri(e))return!1;switch(Ai(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Wi||!!Bi(Hi,zi(e))}catch(e){return!0}};qi.sham=!0;var Ui=!Vi||Ni((function(){var e;return Zi(Zi.call)||!Zi(Object)||!Zi((function(){e=!0}))||e}))?qi:Zi,Ki=Ei,Xi=Ui,Yi=Y,$i=rt("species"),Ji=Array,Qi=function(e){var t;return Ki(e)&&(t=e.constructor,(Xi(t)&&(t===Ji||Ki(t.prototype))||Yi(t)&&null===(t=t[$i]))&&(t=void 0)),void 0===t?Ji:t},eo=function(e,t){return Mi(e),void 0===t?e:Ci?Ii(e,t):function(){return e.apply(t,arguments)}},to=H,no=ze,ro=ur,io=function(e,t){return new(Qi(e))(0===t?0:t)},oo=E([].push),ao=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,o=6==e,a=7==e,s=5==e||o;return function(l,c,u,f){for(var g,p,v=no(l),h=to(v),b=eo(c,u),d=ro(h),y=0,m=f||io,L=t?m(l,d):n||a?m(l,0):void 0;d>y;y++)if((s||y in h)&&(p=b(g=h[y],y,v),e))if(t)L[y]=p;else if(p)switch(e){case 3:return!0;case 5:return g;case 6:return y;case 2:oo(L,g)}else switch(e){case 4:return!1;case 7:oo(L,g)}return o?-1:r||i?i:L}},so={forEach:ao(0),map:ao(1),filter:ao(2),some:ao(3),every:ao(4),find:ao(5),findIndex:ao(6),filterReject:ao(7)},lo=h,co=so.forEach,uo=p,fo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},go=Ti,po=function(e,t){var n=[][e];return!!n&&lo((function(){n.call(null,t||function(){return 1},1)}))}("forEach")?[].forEach:function(e){return co(this,e,arguments.length>1?arguments[1]:void 0)},vo=Kt,ho=function(e){if(e&&e.forEach!==po)try{vo(e,"forEach",po)}catch(t){e.forEach=po}};for(var bo in fo)fo[bo]&&ho(uo[bo]&&uo[bo].prototype);function yo(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}function mo(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function Lo(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}ho(go);var Oo=h,Do=le,wo=rt("species"),So=so.map;Jr({target:"Array",proto:!0,forced:!function(e){return Do>=51||!Oo((function(){var t=[];return(t.constructor={})[wo]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}("map")},{map:function(e){return So(this,e,arguments.length>1?arguments[1]:void 0)}});var jo="block",Po="none",ko="absolute",To="marker-label",Mo=function(e){i(o,e);var n=c(o);function o(e){var r,i=e.clickable,a=void 0===i||i,s=e.cursor,l=void 0===s?"pointer":s,c=e.draggable,u=void 0===c||c,f=e.labelAnchor,g=void 0===f?new google.maps.Point(0,0):f,p=e.labelClass,v=void 0===p?To:p,h=e.labelContent,b=e.position,d=e.opacity,y=void 0===d?1:d,m=e.map,L=e.labelZIndexOffset,O=void 0===L?1:L,D=e.visible,w=void 0===D||D,S=e.zIndex,j=void 0===S?0:S;return t(this,o),(r=n.call(this)).createElements(),r.anchor=g,r.content=h,r.className=v,r.clickable=a,r.cursor=l,r.draggable=u,b instanceof google.maps.LatLng?r.position=b:r.position=new google.maps.LatLng(b),r.opacity=y,r.visible=w,r.zIndex=j,r.zIndexOffset=O,m&&r.setMap(m),r}return r(o,[{key:"element",get:function(){return this.labelDiv}},{key:"content",get:function(){return this.labelDiv.innerHTML},set:function(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}},{key:"className",get:function(){return this.labelDiv.className},set:function(e){this.labelDiv.className=e,this.labelDiv.classList.add(To),this.eventDiv.className=e,this.eventDiv.classList.add("marker-label-event")}},{key:"cursor",get:function(){return this.isInteractive?this.hoverCursor:"inherit"},set:function(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}},{key:"isInteractive",get:function(){return this.draggable||this.clickable}},{key:"opacity",set:function(e){this.labelDiv.style.opacity=String(e)}},{key:"title",set:function(e){this.eventDiv.title=e}},{key:"visible",set:function(e){e?(this.labelDiv.style.display=jo,this.eventDiv.style.display=jo):(this.labelDiv.style.display=Po,this.eventDiv.style.display=Po)}},{key:"onAdd",value:function(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}},{key:"draw",value:function(){var e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),n=Math.round(e.y+this.anchor.y);this.labelDiv.style.left="".concat(t,"px"),this.labelDiv.style.top="".concat(n,"px"),this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;var r=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(r),this.eventDiv.style.zIndex=String(r),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:Po,this.eventDiv.style.cursor=this.cursor}},{key:"addDomListener",value:function(e,t){return google.maps.event.addDomListener(this.eventDiv,e,t)}},{key:"onRemove",value:function(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}},{key:"createElements",value:function(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.style.position=ko,this.eventDiv.style.position=ko,this.eventDiv.style.opacity="0.01"}}]),o}(r((function e(){t(this,e),yo(e,google.maps.OverlayView)}))),Co="click",Io="dblclick",xo="drag",Eo="dragend",_o="dragstart",No="mousedown",Ro="mouseover",Ao="mouseout",zo="mouseup",Fo=function(e){i(a,e);var n=c(a);function a(e){var r;return t(this,a),(r=n.call(this,function(e,t){var n=Object.assign({},e);return t.forEach((function(e){return delete n[e]})),n}(e,["labelAnchor","labelZIndexOffset","labelClass","labelContent"]))).isTouchScreen=!1,r.isDraggingLabel=!1,r.isMouseDownOnLabel=!1,r.shouldIgnoreClick=!1,r.label=new Mo(Object.assign({},e)),r.propertyListeners=[google.maps.event.addListener(s(r),"clickable_changed",r.handleClickableOrDraggableChange),google.maps.event.addListener(s(r),"cursor_changed",(function(){r.label.cursor=r.getCursor()})),google.maps.event.addListener(s(r),"draggable_changed",r.handleClickableOrDraggableChange),google.maps.event.addListener(s(r),"position_changed",(function(){r.label.position=r.getPosition()})),google.maps.event.addListener(s(r),"opacity_changed",(function(){r.label.opacity=r.getOpacity()})),google.maps.event.addListener(s(r),"title_changed",(function(){r.label.title=r.getTitle()})),google.maps.event.addListener(s(r),"visible_changed",(function(){r.label.visible=r.getVisible()})),google.maps.event.addListener(s(r),"zindex_changed",(function(){r.label.zIndex=r.getZIndex(),r.label.draw()}))],r}return r(a,[{key:"isInteractive",get:function(){return this.getClickable()||this.getDraggable()}},{key:"labelElement",get:function(){return this.label.element}},{key:"labelContent",get:function(){return this.label.content},set:function(e){this.label.content=e}},{key:"labelClass",get:function(){return this.label.className},set:function(e){this.label.className=e}},{key:"setMap",value:function(e){var t=this;u(o(a.prototype),"setMap",this).call(this,e),setTimeout((function(){t.label.setMap(e),t.removeInteractiveListeners(),e&&t.addInteractiveListeners()}))}},{key:"handleClickableOrDraggableChange",value:function(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}},{key:"removeInteractiveListeners",value:function(){this.interactiveListeners&&(this.interactiveListeners.forEach((function(e){return google.maps.event.removeListener(e)})),this.interactiveListeners=null)}},{key:"addInteractiveListeners",value:function(){var e=this;if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(Ro,(function(t){e.isTouchScreen||(google.maps.event.trigger(e,Ro,{latLng:e.getPosition()}),mo(t))})),this.label.addDomListener(Ao,(function(t){e.isTouchScreen||(e.mouseOutTimeout&&clearTimeout(e.mouseOutTimeout),e.isMouseDownOnLabel?e.mouseOutTimeout=setTimeout((function(){e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,zo,{latLng:e.getPosition()}),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,Eo,{latLng:e.getPosition()}))),google.maps.event.trigger(e,Ao,{latLng:e.getPosition()})}),200):google.maps.event.trigger(e,Ao,{latLng:e.getPosition()}),mo(t))})),this.label.addDomListener(No,(function(t){e.isDraggingLabel=!1,e.isMouseDownOnLabel=!0,google.maps.event.trigger(e,No,{latLng:e.getPosition()}),e.isTouchScreen||mo(t)})),this.label.addDomListener(zo,(function(t){var n={latLng:e.getPosition()};e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,zo,n),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,Eo,n)),e.getDraggable()||mo(t))})),this.label.addDomListener(Co,(function(t){e.shouldIgnoreClick?e.shouldIgnoreClick=!1:google.maps.event.trigger(e,Co,{latLng:e.getPosition()}),mo(t)})),this.label.addDomListener(Io,(function(t){google.maps.event.trigger(e,Io,{latLng:e.getPosition()}),mo(t)})),google.maps.event.addListener(this.getMap(),"mousemove",(function(t){if(e.isMouseDownOnLabel&&e.getDraggable())if(e.isDraggingLabel){var n=new google.maps.LatLng(t.latLng.lat()-e.eventOffset.y,t.latLng.lng()-e.eventOffset.x);google.maps.event.trigger(e,xo,Object.assign(Object.assign({},t),{latLng:n}))}else e.isDraggingLabel=!0,e.eventOffset=new google.maps.Point(t.latLng.lng()-e.getPosition().lng(),t.latLng.lat()-e.getPosition().lat()),google.maps.event.trigger(e,_o,Object.assign(Object.assign({},t),{latLng:e.getPosition()}))})),google.maps.event.addListener(this,_o,(function(){e.label.zIndex=1e6})),google.maps.event.addListener(this,xo,(function(t){var n=t.latLng;e.setPosition(n)})),google.maps.event.addListener(this,Eo,(function(){e.label.zIndex=e.getZIndex(),e.label.draw()})),this.label.addDomListener("touchstart",(function(t){e.isTouchScreen=!0,Lo(t)})),this.label.addDomListener("touchmove",(function(e){Lo(e)})),this.label.addDomListener("touchend",(function(e){Lo(e)}))]}}}]),a}(r((function e(n){t(this,e),yo(e,google.maps.Marker),google.maps.Marker.call(this,n)})));e.MarkerWithLabel=Fo,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
