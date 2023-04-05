## [2.1.1](https://github.com/prantlf/holy-grail-layout/compare/v2.1.0...v2.1.1) (2023-04-05)


### Bug Fixes

* Add summary with attributes and slots to IntelliSense ([182c804](https://github.com/prantlf/holy-grail-layout/commit/182c804ac5abb551ddbd617c24467824dab6f83d))

# [2.1.0](https://github.com/prantlf/holy-grail-layout/compare/v2.0.1...v2.1.0) (2023-04-05)


### Bug Fixes

* Fix the link to the documentation in IntelliSense ([a69aef4](https://github.com/prantlf/holy-grail-layout/commit/a69aef41cc6e33304bedcfe5bd293d4ce686187c))


### Features

* Introduce the size attribute to suppress the responsiveness ([7c79702](https://github.com/prantlf/holy-grail-layout/commit/7c79702466548bd83efbe04a841dcf4deb835312))

## [2.0.1](https://github.com/prantlf/holy-grail-layout/compare/v2.0.0...v2.0.1) (2023-04-05)


### Bug Fixes

* Fix hidden sides after slot renaming ([f359cbf](https://github.com/prantlf/holy-grail-layout/commit/f359cbf3970937181b1ddd274da1d25a1f321c27))

# [2.0.0](https://github.com/prantlf/holy-grail-layout/compare/v1.0.0...v2.0.0) (2023-03-27)


### Features

* Add CSS variables for widths of side parts ([c6bfb2f](https://github.com/prantlf/holy-grail-layout/commit/c6bfb2fd91fdc0922a603d8150b19a4b0b779306))
* Move the location part of nav and side slots to the end ([5726806](https://github.com/prantlf/holy-grail-layout/commit/572680607ad47d8c1a1a8c65ea95491196327629))
* Rename header and footer slots to head and foot ([48079b9](https://github.com/prantlf/holy-grail-layout/commit/48079b9dea95f13a7b4bc7c2533a62505641c69d))


### BREAKING CHANGES

* Rename slots in your markup. Use "side-start"
instead of "start-side", "side-end" instead of "end-side",
"nav-top" instead of "top-nav" and "nav-bottom" instead of "bottom-nav".
* Rename slots in your markup. Use "head"
instead of "header" and "foot" instead of "footer". I hope
that this was the only and last annoying breaking change.

## 1.0.0 (2023-03-26)

Initial release
