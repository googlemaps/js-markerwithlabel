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
import { initialize } from "@googlemaps/jest-mocks";

class OverlayView {}
beforeAll(() => {
  document.body.innerHTML = "";
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

test("should render the divs correctly with string content", () => {
  const label = new Label({ labelContent: "foo", labelClass: "label" });
  label.draw();
  expect(label["labelDiv"]).toMatchInlineSnapshot(`
    <div
      class="label marker-label"
      style="position: absolute; opacity: 1; display: block; left: 1px; top: 3px; z-index: 4;"
    >
      foo
    </div>
  `);
  expect(label["eventDiv"]).toMatchInlineSnapshot(`
    <div
      class="label marker-label-event"
      style="position: absolute; opacity: 0.01; cursor: pointer; display: block; left: 1px; top: 3px; z-index: 4;"
    >
      foo
    </div>
  `);
});

test("should render the divs correctly with node content", () => {
  const label = new Label({ labelContent: document.createElement("img") });
  label.draw();
  expect(label["labelDiv"]).toMatchInlineSnapshot(`
    <div
      class="marker-label"
      style="position: absolute; opacity: 1; display: block; left: 1px; top: 3px; z-index: 4;"
    >
      <img />
    </div>
  `);
  expect(label["eventDiv"]).toMatchInlineSnapshot(`
    <div
      class="marker-label marker-label-event"
      style="position: absolute; opacity: 0.01; cursor: pointer; display: block; left: 1px; top: 3px; z-index: 4;"
    >
      <img />
    </div>
  `);
});

test("should render the divs with options", () => {
  const label = new Label({
    labelContent: "foo",
    opacity: 0.5,
    labelClass: "label",
    position: { lat: 0, lng: 0 },
    anchorPoint: { x: 100, y: 200 } as google.maps.Point,
    labelZIndexOffset: 10,
    zIndex: 1000,
    draggable: false,
    clickable: false,
  });
  label.draw();
  expect(label["labelDiv"]).toMatchInlineSnapshot(`
    <div
      class="label marker-label"
      style="position: absolute; opacity: 0.5; display: block; left: 1px; top: 3px; z-index: 1010;"
    >
      foo
    </div>
  `);
  expect(label["eventDiv"]).toMatchInlineSnapshot(`
    <div
      class="label marker-label-event"
      style="position: absolute; opacity: 0.01; display: none; left: 1px; top: 3px; z-index: 1010; cursor: inherit;"
    >
      foo
    </div>
  `);
});

test.each([
  [false, false, "none"],
  [true, false, "block"],
  [false, true, "block"],
  [true, true, "block"],
])(
  "should render the event div based upon interactivity %s %s %s",
  (clickable, draggable, display) => {
    const label = new Label({
      labelContent: "foo",
      draggable: false,
      clickable: false,
    });

    label.visible = true;

    label.clickable = clickable;
    label.draggable = draggable;
    label.draw();
    expect(label["eventDiv"].style.display).toBe(display);
    expect(label["eventDiv"].style.cursor).toBe(
      display === "block" ? "pointer" : "inherit"
    );
  }
);

test("should not display event div if marker is not visible", () => {
  const label = new Label({ labelContent: "foo" });

  label.clickable = true;
  label.draggable = true;
  label.visible = false;

  label.draw();
  expect(label["eventDiv"].style.display).toBe("none");
});
