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

import { Label } from "./label";
import { MarkerWithLabel } from "./marker";
import { initialize } from "@googlemaps/jest-mocks";

class OverlayView {}
beforeAll(() => {
  jest.useFakeTimers();
  initialize();
  google.maps.OverlayView = OverlayView as any;
  Label.prototype.getProjection = (): google.maps.MapCanvasProjection => {
    return ({
      fromPointToLatLng: () => {},
      fromLatLngToPoint: () => {},
      fromLatLngToDivPixel: (position: google.maps.LatLng) => {
        return { x: 1, y: 3 };
      },
    } as unknown) as google.maps.MapCanvasProjection;
  };
});

beforeEach(() => {
  // avoid type error without new
  google.maps.Marker = jest.fn() as any;
  google.maps.Marker.prototype.setMap = jest.fn();
  google.maps.Marker.prototype.getMap = jest.fn();

  Label.prototype.setMap = jest.fn();

  google.maps.event.addDomListener = jest.fn();
});

test("should have listeners after multiple calls to setMap", () => {
  const map = (jest.fn() as any) as google.maps.Map;
  (google.maps.Marker.prototype.getMap as jest.Mock).mockImplementation(() => {
    return map;
  });
  const marker = new MarkerWithLabel({ labelContent: "foo" });

  marker.setMap(map);
  jest.advanceTimersByTime(1);
  expect(marker["interactiveListeners"].length).toBeGreaterThan(0);

  marker.setMap(null);
  jest.advanceTimersByTime(1);
  expect(marker["interactiveListeners"]).toBe(null);

  marker.setMap(map);
  jest.advanceTimersByTime(1);
  expect(marker["interactiveListeners"].length).toBeGreaterThan(0);
});

test("should have interactive listeners", () => {
  const marker = new MarkerWithLabel({ labelContent: "foo" });
  (google.maps.Marker.prototype.getMap as jest.Mock).mockImplementation(() => {
    return {} as google.maps.Map;
  });
  marker["addInteractiveListeners"]();

  expect(
    (google.maps.event.addDomListener as any).mock.calls.map((c: any[]) => c[1])
  ).toMatchInlineSnapshot(`
    Array [
      "mouseover",
      "mouseout",
      "mousedown",
      "mouseup",
      "click",
      "dblclick",
      "touchstart",
      "touchmove",
      "touchend",
    ]
  `);
});

test("should not have interactive listeners if no map", () => {
  const marker = new MarkerWithLabel({ labelContent: "foo" });
  (google.maps.Marker.prototype.getMap as jest.Mock).mockImplementation(() => {
    return;
  });
  marker["addInteractiveListeners"]();

  expect(google.maps.event.addDomListener as jest.Mock).toHaveBeenCalledTimes(
    0
  );
});

test("should set class on label", () => {
  const marker = new MarkerWithLabel({ labelContent: "foo" });
  const className = "bar baz";
  marker.labelClass = className;
  expect(marker.labelClass).toMatch(className);
});
