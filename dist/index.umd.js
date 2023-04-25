!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.map.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.object.assign.js","core-js/modules/es.object.to-string.js","core-js/modules/web.dom-collections.for-each.js","core-js/modules/es.array.map.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).markerWithLabel={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,s=void 0,"symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?s:String(s)),i)}var o,s}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,n)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function g(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}function u(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function v(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}var d="block",f="none",h="absolute",b="marker-label",p=function(e){o(s,e);var n=l(s);function s(e){var i,o=e.clickable,r=void 0===o||o,a=e.cursor,l=void 0===a?"pointer":a,c=e.draggable,g=void 0===c||c,u=e.labelAnchor,v=void 0===u?new google.maps.Point(0,0):u,d=e.labelClass,f=void 0===d?b:d,h=e.labelContent,p=e.position,m=e.opacity,y=void 0===m?1:m,L=e.map,D=e.labelZIndexOffset,O=void 0===D?1:D,k=e.visible,j=void 0===k||k,w=e.zIndex,P=void 0===w?0:w;return t(this,s),(i=n.call(this)).createElements(),i.anchor=v,i.content=h,i.className=f,i.clickable=r,i.cursor=l,i.draggable=g,p instanceof google.maps.LatLng?i.position=p:i.position=new google.maps.LatLng(p),i.opacity=y,i.visible=j,i.zIndex=P,i.zIndexOffset=O,L&&i.setMap(L),i}return i(s,[{key:"element",get:function(){return this.labelDiv}},{key:"content",get:function(){return this.labelDiv.innerHTML},set:function(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}},{key:"className",get:function(){return this.labelDiv.className},set:function(e){this.labelDiv.className=e,this.labelDiv.classList.add(b),this.eventDiv.className=e,this.eventDiv.classList.add("marker-label-event")}},{key:"cursor",get:function(){return this.isInteractive?this.hoverCursor:"inherit"},set:function(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}},{key:"isInteractive",get:function(){return this.draggable||this.clickable}},{key:"opacity",set:function(e){this.labelDiv.style.opacity=String(e)}},{key:"title",set:function(e){this.eventDiv.title=e}},{key:"visible",set:function(e){e?(this.labelDiv.style.display=d,this.eventDiv.style.display=d):(this.labelDiv.style.display=f,this.eventDiv.style.display=f)}},{key:"onAdd",value:function(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}},{key:"draw",value:function(){var e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),n=Math.round(e.y+this.anchor.y);this.labelDiv.style.left="".concat(t,"px"),this.labelDiv.style.top="".concat(n,"px"),this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;var i=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(i),this.eventDiv.style.zIndex=String(i),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:f,this.eventDiv.style.cursor=this.cursor}},{key:"addDomListener",value:function(e,t){var n=this;return this.eventDiv.addEventListener(e,t),{remove:function(){return n.eventDiv.removeEventListener(e,t)}}}},{key:"onRemove",value:function(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}},{key:"createElements",value:function(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.style.position=h,this.eventDiv.style.position=h,this.eventDiv.style.opacity="0.01"}}]),s}(i((function e(){t(this,e),g(e,google.maps.OverlayView)}))),m="click",y="dblclick",L="drag",D="dragend",O="dragstart",k="mousedown",j="mouseover",w="mouseout",P="mouseup",I=function(e){o(r,e);var n=l(r);function r(e){var i,o,s,l;return t(this,r),(i=n.call(this,(o=e,s=["labelAnchor","labelZIndexOffset","labelClass","labelContent"],l=Object.assign({},o),s.forEach((function(e){return delete l[e]})),l))).isTouchScreen=!1,i.isDraggingLabel=!1,i.isMouseDownOnLabel=!1,i.shouldIgnoreClick=!1,i.label=new p(Object.assign({},e)),i.propertyListeners=[google.maps.event.addListener(a(i),"clickable_changed",i.handleClickableOrDraggableChange),google.maps.event.addListener(a(i),"cursor_changed",(function(){i.label.cursor=i.getCursor()})),google.maps.event.addListener(a(i),"draggable_changed",i.handleClickableOrDraggableChange),google.maps.event.addListener(a(i),"position_changed",(function(){i.label.position=i.getPosition()})),google.maps.event.addListener(a(i),"opacity_changed",(function(){i.label.opacity=i.getOpacity()})),google.maps.event.addListener(a(i),"title_changed",(function(){i.label.title=i.getTitle()})),google.maps.event.addListener(a(i),"visible_changed",(function(){i.label.visible=i.getVisible()})),google.maps.event.addListener(a(i),"zindex_changed",(function(){i.label.zIndex=i.getZIndex(),i.label.draw()}))],i}return i(r,[{key:"isInteractive",get:function(){return this.getClickable()||this.getDraggable()}},{key:"labelElement",get:function(){return this.label.element}},{key:"labelContent",get:function(){return this.label.content},set:function(e){this.label.content=e}},{key:"labelClass",get:function(){return this.label.className},set:function(e){this.label.className=e}},{key:"setMap",value:function(e){var t=this;c(s(r.prototype),"setMap",this).call(this,e),setTimeout((function(){t.label.setMap(e),t.removeInteractiveListeners(),e&&t.addInteractiveListeners()}))}},{key:"handleClickableOrDraggableChange",value:function(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}},{key:"removeInteractiveListeners",value:function(){this.interactiveListeners&&(this.interactiveListeners.forEach((function(e){return google.maps.event.removeListener(e)})),this.interactiveListeners=null)}},{key:"addInteractiveListeners",value:function(){var e=this;if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(j,(function(t){e.isTouchScreen||(google.maps.event.trigger(e,j,{latLng:e.getPosition()}),u(t))})),this.label.addDomListener(w,(function(t){e.isTouchScreen||(e.mouseOutTimeout&&clearTimeout(e.mouseOutTimeout),e.isMouseDownOnLabel?e.mouseOutTimeout=setTimeout((function(){e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,P,{latLng:e.getPosition()}),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,D,{latLng:e.getPosition()}))),google.maps.event.trigger(e,w,{latLng:e.getPosition()})}),200):google.maps.event.trigger(e,w,{latLng:e.getPosition()}),u(t))})),this.label.addDomListener(k,(function(t){e.isDraggingLabel=!1,e.isMouseDownOnLabel=!0,google.maps.event.trigger(e,k,{latLng:e.getPosition()}),e.isTouchScreen||u(t)})),this.label.addDomListener(P,(function(t){var n={latLng:e.getPosition()};e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,P,n),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,D,n)),e.getDraggable()||u(t))})),this.label.addDomListener(m,(function(t){e.shouldIgnoreClick?e.shouldIgnoreClick=!1:google.maps.event.trigger(e,m,{latLng:e.getPosition()}),u(t)})),this.label.addDomListener(y,(function(t){google.maps.event.trigger(e,y,{latLng:e.getPosition()}),u(t)})),google.maps.event.addListener(this.getMap(),"mousemove",(function(t){if(e.isMouseDownOnLabel&&e.getDraggable())if(e.isDraggingLabel){var n=new google.maps.LatLng(t.latLng.lat()-e.eventOffset.y,t.latLng.lng()-e.eventOffset.x);google.maps.event.trigger(e,L,Object.assign(Object.assign({},t),{latLng:n}))}else e.isDraggingLabel=!0,e.eventOffset=new google.maps.Point(t.latLng.lng()-e.getPosition().lng(),t.latLng.lat()-e.getPosition().lat()),google.maps.event.trigger(e,O,Object.assign(Object.assign({},t),{latLng:e.getPosition()}))})),google.maps.event.addListener(this,O,(function(){e.label.zIndex=1e6})),google.maps.event.addListener(this,L,(function(t){var n=t.latLng;e.setPosition(n)})),google.maps.event.addListener(this,D,(function(){e.label.zIndex=e.getZIndex(),e.label.draw()})),this.label.addDomListener("touchstart",(function(t){e.isTouchScreen=!0,v(t)})),this.label.addDomListener("touchmove",(function(e){v(e)})),this.label.addDomListener("touchend",(function(e){v(e)}))]}}}]),r}(i((function e(n){t(this,e),g(e,google.maps.Marker),google.maps.Marker.call(this,n)})));e.MarkerWithLabel=I,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
