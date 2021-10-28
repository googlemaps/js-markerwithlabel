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

import {abortEvent, omit, stopPropagation} from './util';

import {Label} from './label';
import {MarkerSafe} from './marker-safe';

const CLICK = 'click';
const DBLCLICK = 'dblclick';
const DRAG = 'drag';
const DRAGEND = 'dragend';
const DRAGSTART = 'dragstart';
const MOUSEDOWN = 'mousedown';
const MOUSEMOVE = 'mousemove';
const MOUSEOVER = 'mouseover';
const MOUSEOUT = 'mouseout';
const MOUSEUP = 'mouseup';

export interface MarkerWithLabelOptions extends google.maps.MarkerOptions {
  labelContent: string | HTMLElement;
  labelAnchor?: google.maps.Point;
  labelZIndexOffset?: number;
  labelClass?: string;
}

export class MarkerWithLabel extends MarkerSafe {
  private label: Label;
  private propertyListeners: google.maps.MapsEventListener[];
  private interactiveListeners: google.maps.MapsEventListener[];
  private isTouchScreen = false;
  private isDraggingLabel = false;
  private isMouseDownOnLabel = false;
  private shouldIgnoreClick = false;
  private eventOffset: google.maps.Point | null;
  private mouseOutTimeout: ReturnType<typeof setTimeout>;

  constructor(options: MarkerWithLabelOptions) {
    // need to omit extended options to Marker class that collide with setters/getters
    super(
      omit(options, [
        'labelAnchor',
        'labelZIndexOffset',
        'labelClass',
        'labelContent',
      ])
    );
    this.label = new Label({...{}, ...options});

    this.propertyListeners = [
      google.maps.event.addListener(
        this,
        'clickable_changed',
        this.handleClickableOrDraggableChange
      ),
      google.maps.event.addListener(this, 'cursor_changed', () => {
        this.label.cursor = this.getCursor();
      }),
      google.maps.event.addListener(
        this,
        'draggable_changed',
        this.handleClickableOrDraggableChange
      ),
      google.maps.event.addListener(this, 'position_changed', () => {
        this.label.position = this.getPosition();
      }),
      google.maps.event.addListener(this, 'opacity_changed', () => {
        this.label.opacity = this.getOpacity();
      }),
      google.maps.event.addListener(this, 'title_changed', () => {
        this.label.title = this.getTitle();
      }),
      google.maps.event.addListener(this, 'visible_changed', () => {
        this.label.visible = this.getVisible();
      }),
      google.maps.event.addListener(this, 'zindex_changed', () => {
        this.label.zIndex = this.getZIndex();
        this.label.draw();
      }),
    ];
  }

  get isInteractive() {
    return this.getClickable() || this.getDraggable();
  }

  get labelContent(): string | HTMLElement {
    return this.label.content;
  }

  set labelContent(content: string | HTMLElement) {
    this.label.content = content;
  }

  get labelClass() {
    return this.label.className;
  }

  set labelClass(className: string) {
    this.label.className = className;
  }

  setMap(map: google.maps.Map | google.maps.StreetViewPanorama | null): void {
    super.setMap(map);
    setTimeout(() => {
      this.label.setMap(map);
      this.removeInteractiveListeners();
      if (map) {
        this.addInteractiveListeners();
      }
    });
  }

  private handleClickableOrDraggableChange() {
    this.label.clickable = this.getClickable();
    this.label.draggable = this.getDraggable();

    if (this.isInteractive) {
      this.addInteractiveListeners();
    } else {
      this.removeInteractiveListeners();
    }
  }

  private removeInteractiveListeners() {
    if (this.interactiveListeners) {
      this.interactiveListeners.forEach(l =>
        google.maps.event.removeListener(l)
      );
      this.interactiveListeners = null;
    }
  }

  private addInteractiveListeners() {
    if (!this.interactiveListeners) {
      // If the map is not set, do not set listeners
      if (!this.getMap()) {
        return;
      }

      this.interactiveListeners = [
        this.label.addDomListener(MOUSEOVER, e => {
          if (!this.isTouchScreen) {
            google.maps.event.trigger(this, MOUSEOVER, {
              latLng: this.getPosition(),
            });

            abortEvent(e);
          }
        }),
        this.label.addDomListener(MOUSEOUT, e => {
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
            } else {
              google.maps.event.trigger(this, MOUSEOUT, {
                latLng: this.getPosition(),
              });
            }

            abortEvent(e);
          }
        }),
        this.label.addDomListener(MOUSEDOWN, e => {
          this.isDraggingLabel = false;
          this.isMouseDownOnLabel = true;
          google.maps.event.trigger(this, MOUSEDOWN, {
            latLng: this.getPosition(),
          });
          if (!this.isTouchScreen) {
            abortEvent(e);
          }
        }),
        this.label.addDomListener(MOUSEUP, e => {
          const markerEvent = {latLng: this.getPosition()};

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
        this.label.addDomListener(CLICK, e => {
          if (this.shouldIgnoreClick) {
            this.shouldIgnoreClick = false;
          } else {
            google.maps.event.trigger(this, CLICK, {
              latLng: this.getPosition(),
            });
          }
          abortEvent(e);
        }),
        this.label.addDomListener(DBLCLICK, e => {
          google.maps.event.trigger(this, DBLCLICK, {
            latLng: this.getPosition(),
          });
          abortEvent(e);
        }),
        google.maps.event.addListener(
          this.getMap(),
          MOUSEMOVE,
          (e: google.maps.MapMouseEvent) => {
            if (this.isMouseDownOnLabel && this.getDraggable()) {
              if (this.isDraggingLabel) {
                // Adjust for offset
                const position = new google.maps.LatLng(
                  e.latLng.lat() - this.eventOffset.y,
                  e.latLng.lng() - this.eventOffset.x
                );
                // this.setPosition(position);
                google.maps.event.trigger(this, DRAG, {
                  ...e,
                  latLng: position,
                });
              } else {
                this.isDraggingLabel = true;

                // Calculate and store event offset from marker position
                this.eventOffset = new google.maps.Point(
                  e.latLng.lng() - this.getPosition().lng(),
                  e.latLng.lat() - this.getPosition().lat()
                );
                google.maps.event.trigger(this, DRAGSTART, {
                  ...e,
                  latLng: this.getPosition(),
                });
              }
            }
          }
        ),
        google.maps.event.addListener(this, DRAGSTART, () => {
          this.label.zIndex = 1000000;
        }),
        google.maps.event.addListener(
          this,
          DRAG,
          ({latLng}: google.maps.MapMouseEvent) => {
            this.setPosition(latLng);
          }
        ),
        google.maps.event.addListener(this, DRAGEND, () => {
          this.label.zIndex = this.getZIndex();
          this.label.draw();
        }),
        // Prevent touch events from passing through the label DIV to the underlying map.
        this.label.addDomListener('touchstart', e => {
          this.isTouchScreen = true;
          stopPropagation(e);
        }),
        this.label.addDomListener('touchmove', e => {
          stopPropagation(e);
        }),
        this.label.addDomListener('touchend', e => {
          stopPropagation(e);
        }),
      ];
    }
  }
}
