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

import { MarkerWithLabelOptions } from "./marker";
import { OverlayViewSafe } from "./overlay-view-safe";

export type LabelOptions = Partial<MarkerWithLabelOptions>;

const BLOCK = "block";
const NONE = "none";
const ABSOLUTE = "absolute";
const CURSOR = "pointer";
const LABEL_CLASS = "marker-label";
const EVENT_CLASS = "marker-label-event";
const EVENT_DIV_OPACITY = "0.01";

export class Label extends OverlayViewSafe {
  public anchor: google.maps.Point;
  public position: google.maps.LatLng;
  public zIndex: number;
  public clickable: boolean;
  public draggable: boolean;
  private labelDiv: HTMLElement;
  private eventDiv: HTMLElement;
  private zIndexOffset: number;
  private hoverCursor: string;

  constructor({
    clickable = true,
    cursor = CURSOR,
    draggable = true,
    labelAnchor = new google.maps.Point(0, 0),
    labelClass = LABEL_CLASS,
    labelContent,
    position,
    opacity = 1,
    map,
    labelZIndexOffset = 1,
    visible = true,
    zIndex = 0,
  }: LabelOptions) {
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
    } else {
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

  public get element(): HTMLElement {
    return this.labelDiv;
  }

  public get content(): string {
    return this.labelDiv.innerHTML;
  }

  public set content(content: string | HTMLElement) {
    if (typeof content === "string") {
      this.labelDiv.innerHTML = content;
      this.eventDiv.innerHTML = content;
    } else {
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
  public get className(): string {
    return this.labelDiv.className;
  }

  /**
   * Set the class of the label div elements.
   *
   * **Note**: The default `marker-label` will additionaly be added.
   */
  public set className(className: string) {
    this.labelDiv.className = className;
    this.labelDiv.classList.add(LABEL_CLASS);
    this.eventDiv.className = className;
    this.eventDiv.classList.add(EVENT_CLASS);
  }

  public set cursor(cursor: string) {
    this.hoverCursor = cursor;
    if (this.isInteractive) {
      this.eventDiv.style.cursor = cursor;
    }
  }

  public get cursor(): string {
    return this.isInteractive ? this.hoverCursor : "inherit";
  }

  public get isInteractive(): boolean {
    return this.draggable || this.clickable;
  }

  public set opacity(opacity: number) {
    this.labelDiv.style.opacity = String(opacity);
  }

  public set title(title: string) {
    this.eventDiv.title = title;
  }

  public set visible(visible: boolean) {
    if (visible) {
      this.labelDiv.style.display = BLOCK;
      this.eventDiv.style.display = BLOCK;
    } else {
      this.labelDiv.style.display = NONE;
      this.eventDiv.style.display = NONE;
    }
  }

  public onAdd(): void {
    this.getPanes().markerLayer.appendChild(this.labelDiv);
    this.getPanes().overlayMouseTarget.appendChild(this.eventDiv);
  }

  public draw(): void {
    const coordinates = this.getProjection().fromLatLngToDivPixel(
      this.position
    );
    const x = Math.round(coordinates.x + this.anchor.x);
    const y = Math.round(coordinates.y + this.anchor.y);
    this.labelDiv.style.left = `${x}px`;
    this.labelDiv.style.top = `${y}px`;
    this.eventDiv.style.left = this.labelDiv.style.left;
    this.eventDiv.style.top = this.labelDiv.style.top;

    // If zIndex is not defined, used vertical position on map.
    const zIndex =
      (this.zIndex || Math.ceil(coordinates.y)) + this.zIndexOffset;
    this.labelDiv.style.zIndex = String(zIndex);
    this.eventDiv.style.zIndex = String(zIndex);

    // If not interactive set display none on event div
    this.eventDiv.style.display = this.isInteractive
      ? this.eventDiv.style.display
      : NONE;
    this.eventDiv.style.cursor = this.cursor;
  }

  public addDomListener(
    event: string,
    handler: (event: Event) => void
    ): google.maps.MapsEventListener {
    this.eventDiv.addEventListener(event, handler);
    return { remove: () => this.eventDiv.removeEventListener(event, handler) };
  }

  public onRemove(): void {
    this.labelDiv.parentNode.removeChild(this.labelDiv);
    this.eventDiv.parentNode.removeChild(this.eventDiv);
  }

  private createElements(): void {
    this.labelDiv = document.createElement("div");
    this.eventDiv = document.createElement("div");

    // default styles for both divs
    this.labelDiv.style.position = ABSOLUTE;
    this.eventDiv.style.position = ABSOLUTE;

    // default styles for eventDiv
    this.eventDiv.style.opacity = EVENT_DIV_OPACITY;
  }
}
