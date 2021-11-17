/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
function abortEvent(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
}
function stopPropagation(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
}
function omit(o, keys) {
    const x = Object.assign({}, o);
    keys.forEach((k) => delete x[k]);
    return x;
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @ignore
 */
class OverlayViewSafe {
    constructor() {
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
}

/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BLOCK = "block";
const NONE = "none";
const ABSOLUTE = "absolute";
const CURSOR = "pointer";
const LABEL_CLASS = "marker-label";
const EVENT_CLASS = "marker-label-event";
const EVENT_DIV_OPACITY = "0.01";
class Label extends OverlayViewSafe {
    constructor({ clickable = true, cursor = CURSOR, draggable = true, labelAnchor = new google.maps.Point(0, 0), labelClass = LABEL_CLASS, labelContent, position, opacity = 1, map, labelZIndexOffset = 1, visible = true, zIndex = 0, }) {
        super();
        this.createElements();
        this.anchor = labelAnchor;
        this.content = labelContent;
        this.className = labelClass;
        this.clickable = clickable;
        this.cursor = cursor;
        this.draggable = draggable;
        if (position instanceof google.maps.LatLng) {
            this.position = position;
        }
        else {
            this.position = new google.maps.LatLng(position);
        }
        this.opacity = opacity;
        this.visible = visible;
        this.zIndex = zIndex;
        this.zIndexOffset = labelZIndexOffset;
        if (map) {
            this.setMap(map);
        }
    }
    get content() {
        return this.labelDiv.innerHTML;
    }
    set content(content) {
        if (typeof content === "string") {
            this.labelDiv.innerHTML = content;
            this.eventDiv.innerHTML = content;
        }
        else {
            this.labelDiv.innerHTML = "";
            this.labelDiv.appendChild(content);
            this.eventDiv.innerHTML = "";
            this.eventDiv.appendChild(content.cloneNode(true));
        }
    }
    /**
     * Get the class of the label div elements.
     *
     * **Note**: This will always return the default `marker-label`.
     */
    get className() {
        return this.labelDiv.className;
    }
    /**
     * Set the class of the label div elements.
     *
     * **Note**: The default `marker-label` will additionaly be added.
     */
    set className(className) {
        this.labelDiv.className = className;
        this.labelDiv.classList.add(LABEL_CLASS);
        this.eventDiv.className = className;
        this.eventDiv.classList.add(EVENT_CLASS);
    }
    set cursor(cursor) {
        this.hoverCursor = cursor;
        if (this.isInteractive) {
            this.eventDiv.style.cursor = cursor;
        }
    }
    get cursor() {
        return this.isInteractive ? this.hoverCursor : "inherit";
    }
    get isInteractive() {
        return this.draggable || this.clickable;
    }
    set opacity(opacity) {
        this.labelDiv.style.opacity = String(opacity);
    }
    set title(title) {
        this.eventDiv.title = title;
    }
    set visible(visible) {
        if (visible) {
            this.labelDiv.style.display = BLOCK;
            this.eventDiv.style.display = BLOCK;
        }
        else {
            this.labelDiv.style.display = NONE;
            this.eventDiv.style.display = NONE;
        }
    }
    onAdd() {
        this.getPanes().markerLayer.appendChild(this.labelDiv);
        this.getPanes().overlayMouseTarget.appendChild(this.eventDiv);
    }
    draw() {
        const coordinates = this.getProjection().fromLatLngToDivPixel(this.position);
        const x = Math.round(coordinates.x + this.anchor.x);
        const y = Math.round(coordinates.y + this.anchor.y);
        this.labelDiv.style.left = `${x}px`;
        this.labelDiv.style.top = `${y}px`;
        this.eventDiv.style.left = this.labelDiv.style.left;
        this.eventDiv.style.top = this.labelDiv.style.top;
        // If zIndex is not defined, used vertical position on map.
        const zIndex = (this.zIndex || Math.ceil(coordinates.y)) + this.zIndexOffset;
        this.labelDiv.style.zIndex = String(zIndex);
        this.eventDiv.style.zIndex = String(zIndex);
        // If not interactive set display none on event div
        this.eventDiv.style.display = this.isInteractive
            ? this.eventDiv.style.display
            : NONE;
        this.eventDiv.style.cursor = this.cursor;
    }
    addDomListener(event, handler) {
        return google.maps.event.addDomListener(this.eventDiv, event, handler);
    }
    onRemove() {
        this.labelDiv.parentNode.removeChild(this.labelDiv);
        this.eventDiv.parentNode.removeChild(this.eventDiv);
    }
    createElements() {
        this.labelDiv = document.createElement("div");
        this.eventDiv = document.createElement("div");
        // default class names
        this.labelDiv.classList.add(LABEL_CLASS);
        this.labelDiv.classList.add(EVENT_CLASS);
        // default styles for both divs
        this.labelDiv.style.position = ABSOLUTE;
        this.eventDiv.style.position = ABSOLUTE;
        // default styles for eventDiv
        this.eventDiv.style.opacity = EVENT_DIV_OPACITY;
    }
}

/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @ignore
 */
class MarkerSafe {
    constructor(options) {
        extend(MarkerSafe, google.maps.Marker);
        google.maps.Marker.call(this, options);
    }
}

/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CLICK = "click";
const DBLCLICK = "dblclick";
const DRAG = "drag";
const DRAGEND = "dragend";
const DRAGSTART = "dragstart";
const MOUSEDOWN = "mousedown";
const MOUSEMOVE = "mousemove";
const MOUSEOVER = "mouseover";
const MOUSEOUT = "mouseout";
const MOUSEUP = "mouseup";
class MarkerWithLabel extends MarkerSafe {
    constructor(options) {
        // need to omit extended options to Marker class that collide with setters/getters
        super(omit(options, [
            "labelAnchor",
            "labelZIndexOffset",
            "labelClass",
            "labelContent",
        ]));
        this.isTouchScreen = false;
        this.isDraggingLabel = false;
        this.isMouseDownOnLabel = false;
        this.shouldIgnoreClick = false;
        this.label = new Label(Object.assign({}, options));
        this.propertyListeners = [
            google.maps.event.addListener(this, "clickable_changed", this.handleClickableOrDraggableChange),
            google.maps.event.addListener(this, "cursor_changed", () => {
                this.label.cursor = this.getCursor();
            }),
            google.maps.event.addListener(this, "draggable_changed", this.handleClickableOrDraggableChange),
            google.maps.event.addListener(this, "position_changed", () => {
                this.label.position = this.getPosition();
            }),
            google.maps.event.addListener(this, "opacity_changed", () => {
                this.label.opacity = this.getOpacity();
            }),
            google.maps.event.addListener(this, "title_changed", () => {
                this.label.title = this.getTitle();
            }),
            google.maps.event.addListener(this, "visible_changed", () => {
                this.label.visible = this.getVisible();
            }),
            google.maps.event.addListener(this, "zindex_changed", () => {
                this.label.zIndex = this.getZIndex();
                this.label.draw();
            }),
        ];
    }
    get isInteractive() {
        return this.getClickable() || this.getDraggable();
    }
    get labelContent() {
        return this.label.content;
    }
    set labelContent(content) {
        this.label.content = content;
    }
    get labelClass() {
        return this.label.className;
    }
    set labelClass(className) {
        this.label.className = className;
    }
    setMap(map) {
        super.setMap(map);
        setTimeout(() => {
            this.label.setMap(map);
            this.removeInteractiveListeners();
            if (map) {
                this.addInteractiveListeners();
            }
        });
    }
    handleClickableOrDraggableChange() {
        this.label.clickable = this.getClickable();
        this.label.draggable = this.getDraggable();
        if (this.isInteractive) {
            this.addInteractiveListeners();
        }
        else {
            this.removeInteractiveListeners();
        }
    }
    removeInteractiveListeners() {
        if (this.interactiveListeners) {
            this.interactiveListeners.forEach((l) => google.maps.event.removeListener(l));
            this.interactiveListeners = null;
        }
    }
    addInteractiveListeners() {
        if (!this.interactiveListeners) {
            // If the map is not set, do not set listeners
            if (!this.getMap()) {
                return;
            }
            this.interactiveListeners = [
                this.label.addDomListener(MOUSEOVER, (e) => {
                    if (!this.isTouchScreen) {
                        google.maps.event.trigger(this, MOUSEOVER, {
                            latLng: this.getPosition(),
                        });
                        abortEvent(e);
                    }
                }),
                this.label.addDomListener(MOUSEOUT, (e) => {
                    if (!this.isTouchScreen) {
                        // wrap the mouseout event in a timeout to avoid the case where mouseup occurs out
                        if (this.mouseOutTimeout) {
                            clearTimeout(this.mouseOutTimeout);
                        }
                        if (this.isMouseDownOnLabel) {
                            this.mouseOutTimeout = setTimeout(() => {
                                if (this.isMouseDownOnLabel) {
                                    this.isMouseDownOnLabel = false;
                                    google.maps.event.trigger(this, MOUSEUP, {
                                        latLng: this.getPosition(),
                                    });
                                    if (this.isDraggingLabel) {
                                        this.isDraggingLabel = false;
                                        this.shouldIgnoreClick = true;
                                        google.maps.event.trigger(this, DRAGEND, {
                                            latLng: this.getPosition(),
                                        });
                                    }
                                }
                                google.maps.event.trigger(this, MOUSEOUT, {
                                    latLng: this.getPosition(),
                                });
                            }, 200);
                        }
                        else {
                            google.maps.event.trigger(this, MOUSEOUT, {
                                latLng: this.getPosition(),
                            });
                        }
                        abortEvent(e);
                    }
                }),
                this.label.addDomListener(MOUSEDOWN, (e) => {
                    this.isDraggingLabel = false;
                    this.isMouseDownOnLabel = true;
                    google.maps.event.trigger(this, MOUSEDOWN, {
                        latLng: this.getPosition(),
                    });
                    if (!this.isTouchScreen) {
                        abortEvent(e);
                    }
                }),
                this.label.addDomListener(MOUSEUP, (e) => {
                    const markerEvent = { latLng: this.getPosition() };
                    if (this.isMouseDownOnLabel) {
                        this.isMouseDownOnLabel = false;
                        google.maps.event.trigger(this, MOUSEUP, markerEvent);
                        if (this.isDraggingLabel) {
                            this.isDraggingLabel = false;
                            this.shouldIgnoreClick = true;
                            google.maps.event.trigger(this, DRAGEND, markerEvent);
                        }
                        if (!this.getDraggable()) {
                            abortEvent(e);
                        }
                    }
                }),
                this.label.addDomListener(CLICK, (e) => {
                    if (this.shouldIgnoreClick) {
                        this.shouldIgnoreClick = false;
                    }
                    else {
                        google.maps.event.trigger(this, CLICK, {
                            latLng: this.getPosition(),
                        });
                    }
                    abortEvent(e);
                }),
                this.label.addDomListener(DBLCLICK, (e) => {
                    google.maps.event.trigger(this, DBLCLICK, {
                        latLng: this.getPosition(),
                    });
                    abortEvent(e);
                }),
                google.maps.event.addListener(this.getMap(), MOUSEMOVE, (e) => {
                    if (this.isMouseDownOnLabel && this.getDraggable()) {
                        if (this.isDraggingLabel) {
                            // Adjust for offset
                            const position = new google.maps.LatLng(e.latLng.lat() - this.eventOffset.y, e.latLng.lng() - this.eventOffset.x);
                            // this.setPosition(position);
                            google.maps.event.trigger(this, DRAG, Object.assign(Object.assign({}, e), { latLng: position }));
                        }
                        else {
                            this.isDraggingLabel = true;
                            // Calculate and store event offset from marker position
                            this.eventOffset = new google.maps.Point(e.latLng.lng() - this.getPosition().lng(), e.latLng.lat() - this.getPosition().lat());
                            google.maps.event.trigger(this, DRAGSTART, Object.assign(Object.assign({}, e), { latLng: this.getPosition() }));
                        }
                    }
                }),
                google.maps.event.addListener(this, DRAGSTART, () => {
                    this.label.zIndex = 1000000;
                }),
                google.maps.event.addListener(this, DRAG, ({ latLng }) => {
                    this.setPosition(latLng);
                }),
                google.maps.event.addListener(this, DRAGEND, () => {
                    this.label.zIndex = this.getZIndex();
                    this.label.draw();
                }),
                // Prevent touch events from passing through the label DIV to the underlying map.
                this.label.addDomListener("touchstart", (e) => {
                    this.isTouchScreen = true;
                    stopPropagation(e);
                }),
                this.label.addDomListener("touchmove", (e) => {
                    stopPropagation(e);
                }),
                this.label.addDomListener("touchend", (e) => {
                    stopPropagation(e);
                }),
            ];
        }
    }
}

/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { MarkerWithLabel as default };
//# sourceMappingURL=index.esm.js.map
