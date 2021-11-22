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
import { MarkerSafe } from "./marker-safe";
export interface MarkerWithLabelOptions extends google.maps.MarkerOptions {
    labelContent: string | HTMLElement;
    labelAnchor?: google.maps.Point;
    labelZIndexOffset?: number;
    labelClass?: string;
}
export declare class MarkerWithLabel extends MarkerSafe {
    private label;
    private propertyListeners;
    private interactiveListeners;
    private isTouchScreen;
    private isDraggingLabel;
    private isMouseDownOnLabel;
    private shouldIgnoreClick;
    private eventOffset;
    private mouseOutTimeout;
    constructor(options: MarkerWithLabelOptions);
    get isInteractive(): boolean;
    get labelContent(): string | HTMLElement;
    set labelContent(content: string | HTMLElement);
    get labelClass(): string;
    set labelClass(className: string);
    setMap(map: google.maps.Map | google.maps.StreetViewPanorama | null): void;
    private handleClickableOrDraggableChange;
    private removeInteractiveListeners;
    private addInteractiveListeners;
}
