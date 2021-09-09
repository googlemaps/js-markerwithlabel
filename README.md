# Google Maps JavaScript MarkerWithLabel

[![npm](https://img.shields.io/npm/v/@googlemaps/markerwithlabel)](https://www.npmjs.com/package/@googlemaps/markerwithlabel)
![Build](https://github.com/googlemaps/js-markerwithlabel/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-markerwithlabel/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-markerwithlabel/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-markerwithlabel)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-markerwithlabel?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)](https://discord.gg/jRteCzP)

## Description

The library provides Markers with labels for Google Maps Platform.

> **Note**: This library is the nearly the same interface as the existing library `@google/markerwithlabel`, but renamed and in its own repository. All future development will continue here.

> **Note**: There are some breaking changes from `@google/markerwithlabel` including anchor position. This should be considered a major version bump!

## Install

Available via npm as the package [@googlemaps/markerwithlabel](https://www.npmjs.com/package/@googlemaps/markerwithlabel).

`npm i @googlemaps/markerwithlabel`

or

`yarn add @googlemaps/markerwithlabel`

Alternativly you may add the umd package directly to the html document using the unpkg link.

`<script src="https://unpkg.com/@googlemaps/markerwithlabel/dist/index.min.js"></script>`

When adding via unpkg, the marker with labels can be accessed at `MarkerWithLabel`.

A version can be specified by using `https://unpkg.com/@googlemaps/markerwithlabel@VERSION/dist/...`.

## Documentation

The reference documentation can be found at this [link](https://googlemaps.github.io/js-markerwithlabel/index.html).

## Example

```js
new MarkerWithLabel({
    position: new google.maps.LatLng(49.475, -123.84),
    clickable: true,
    draggable: true,
    map: map,
    labelContent: "foo", // can also be HTMLElement
    labelAnchor: new google.maps.Point(-21, 3),
    labelClass: "labels", // the CSS class for the label
    labelStyle: { opacity: 1.0 },
})
```

View the package in action:

- [Basic Example](https://googlemaps.github.io/js-markerwithlabel/examples/basic.html)
- [Events Example](https://googlemaps.github.io/js-markerwithlabel/examples/events.html)
- [Lettered Example](https://googlemaps.github.io/js-markerwithlabel/examples/lettered.html)
- [Picture Example](https://googlemaps.github.io/js-markerwithlabel/examples/picturelabel.html)
