# Holy-Grail Layout

[![npm](https://img.shields.io/npm/v/holy-grail-layout)](https://www.npmjs.com/package/holy-grail-layout#top)
![Dependency status](https://img.shields.io/librariesio/release/npm/holy-grail-layout)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/holy-grail-layout)

Provides an extended "Holy Grail" layout as a [web component].

Features:

* Lightweight (graph 2.88 kB minified, 1.34 kB gzipped, 1.14 kB brotlied)
* [Custom Element Manifest]
* [IntelliSense](#intellisense) for VS Code

## Synopsis

<!--
```
<custom-element-demo>
  <template>
    <script defer src=https://unpkg.com/holy-grail-layout@2.0.0/dist/index.min.js></script>
    <holy-grail>
      <header slot="head" style="background: #ffcdd2">Head</header>
      <nav slot="nav-top" style="background: #bbdefb">Top Nav</nav>
      <main slot="main" style="background: #dcedc8">Main</main>
      <nav slot="nav-bottom" style="background: #bbdefb">Bottom Nav</nav>
      <aside slot="side-start" style="background: #e1bee7">Start Side</aside>
      <aside slot="side-end" style="background: #e1bee7">End Side</aside>
      <footer slot="foot" style="background: #ffecb3">Foot</footer>
    </holy-grail>
  </template>
</custom-element-demo>
```
-->
```html
<holy-grail>
  <header slot="head">...</header>
  <nav slot="nav-top">...</nav>
  <main slot="main">...</main>
  <nav slot="nav-bottom">...</nav>
  <aside slot="side-start">...</aside>
  <aside slot="side-end">...</aside>
  <footer slot="foot">...</footer>
</holy-grail>
<script defer src=https://unpkg.com/holy-grail-layout@2.0.0/dist/index.min.js></script>
```

![Complete Layout](doc/complete-collapsed.png)

## Installation

Make sure that you have installed [Node.js]. Use your favourite package manager ([NPM], [Yarn] or [PNPM]) to add the `holy-grail-layout` module to your project. Add `-D` on the command line if you use a bundler:

```
npm i holy-grail-layout
yarn add holy-grail-layout
pnpm i holy-grail-layout
```

If you write a plain HTML page, insert the `holy-grail-layout` script pointing either to CDN or to the local filesystem:

```html
<script src=https://unpkg.com/holy-grail-layout@2.0.0/dist/index.min.js></script>
<script src=node_modules/holy-grail-layout/dist/index.min.js></script>
```

## Elements

### holy-grail

The custom element `holy-grail` renders a "Holy Grail" layout in its shadow root and populates its parts from teh corresponding slots.

```html
<holy-grail>...</holy-grail>
```

#### Attributes

| Name | Type   | Description                                                                                            |
|------|--------|--------------------------------------------------------------------------------------------------------|
| size | string | Disables the responsive behaviour by forcing the screen width to be detected as `small`, `medium` or `large`. |

The width breakpoint between `small` and `medium` sizes is `480px`. The width breakpoint between `medium` and `large` sizes is `768px`.

#### Slots

| Name       | Description                                                                                   |
|------------|-----------------------------------------------------------------------------------------------|
| head       | Topmost horizontal slot, as wide as the whole element, as high as its content.                |
| nav-top    | A horizontal slot above the "main" slot, as wide as the "main" slot, as high as its content.  |
| main       | A large slot in the middle of the element, fills the rest of width and height of the element. |
| nav-bottom | A horizontal slot below the "main" slot, as wide as the "main" slot, as high as its content.  |
| side-start | A vertical slot on the left side(in the left-to-right text-writing direction) with an explicit width (25% of the element by default), as high as the content between the \"head\" and \"foot\" slots. The width can be customised by a style using the part \"side-start\" in the selector. |
| side-end   | A vertical slot on the right side (in the left-to-right text-writing direction) with an explicit width (25% of the element by default), as high as the content between the \"head\" and \"foot\" slots. The width can be customised by a style using the part \"side-end\" in the selector. |
| foot       | Bottommost horizontal slot, as wide as the whole element, as high as its content.             |

### Styles

CSS variables `--holy-grail-side-start-width` and `--holy-grail-side-end-width` can be used to set the widths of the slots `side-start` and `side-end`. The default values are `25%`.

```css
holy-grail {
  --holy-grail-side-start-width: 33%;
}
```

Parts `main`, `side-start` and `side-end` can be used for advanced styling of the stretchable slots of the layout:

```css
holy-grail::part(side-start) {
  width: 33%;
}
```

#### Examples

All slots populated, screen wider than 767px, see [the source](example/complete.html):

```html
<holy-grail>
  <header slot="head">...</header>
  <nav slot="nav-top">...</nav>
  <main slot="main">...</main>
  <nav slot="nav-bottom">...</nav>
  <aside slot="side-start">...</aside>
  <aside slot="side-end">...</aside>
  <footer slot="foot">...</footer>
</holy-grail>
```

![Complete Layout, Large](doc/complete-expanded.png)

All slots populated, screen wider than 479px, but narrower than 768px:

![Complete Layout, Middle](doc/complete-middle.png)

All slots populated, screen narrower than 480px:

![Complete Layout, Small](doc/complete-small.png)

Only some slots populated, screen wider than 767px, see [the source](example/partial.html):

```html
<holy-grail>
  <header slot="head">...</header>
  <nav slot="nav-top">...</nav>
  <main slot="main">...</main>
  <nav slot="nav-bottom">...</nav>
  <aside slot="side-start">...</aside>
</holy-grail>
```

![Partial Layout, Large](doc/partial-expanded.png)

Only some slots populated, screen wider than 479px, but narrower than 768px:

![Partial Layout, Middle](doc/partial-middle.png)

Only some slots populated, screen narrower than 480px:

![Partial Layout, Small](doc/partial-small.png)

## IntelliSense

The language support in the VS Code editor can offer auto-completion and hover information for custom elements. To enable this feature for custom elements in this package, insert the following property to `settings.json`:

```json
"html.customData": ["node_modules/holy-grail-layout/dist/html-custom-data.json"]
```

You will need to restart the VS Code to have this change applied.

## License

Copyright (c) 2023 Ferdinand Prantl

Licensed under the MIT license.

[web component]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
[Custom Element Manifest]: https://github.com/webcomponents/custom-elements-manifest#readme
[Web Worker]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
[Node.js]: https://nodejs.org/
[NPM]: https://docs.npmjs.com/cli/npm
[Yarn]: https://classic.yarnpkg.com/docs/cli/
[PNPM]: https://pnpm.js.org/pnpm-cli
