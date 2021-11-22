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
/// <reference types="google.maps" />
import { MarkerWithLabelOptions } from "./marker";
import { OverlayViewSafe } from "./overlay-view-safe";
export declare type LabelOptions = Partial<MarkerWithLabelOptions>;
export declare class Label extends OverlayViewSafe {
    anchor: google.maps.Point;
    position: google.maps.LatLng;
    zIndex: number;
    clickable: boolean;
    draggable: boolean;
    private labelDiv;
    private eventDiv;
    private zIndexOffset;
    private hoverCursor;
    constructor({ clickable, cursor, draggable, labelAnchor, labelClass, labelContent, position, opacity, map, labelZIndexOffset, visible, zIndex, }: LabelOptions);
    get content(): string | HTMLElement;
    set content(content: string | HTMLElement);
    /**
     * Get the class of the label div elements.
     *
     * **Note**: This will always return the default `marker-label`.
     */
    get className(): string;
    /**
     * Set the class of the label div elements.
     *
     * **Note**: The default `marker-label` will additionaly be added.
     */
    set className(className: string);
    set cursor(cursor: string);
    get cursor(): string;
    get isInteractive(): boolean;
    set opacity(opacity: number);
    set title(title: string);
    set visible(visible: boolean);
    onAdd(): void;
    draw(): void;
    addDomListener(event: string, handler: (event: Event) => void): google.maps.MapsEventListener;
    onRemove(): void;
    private createElements;
}
