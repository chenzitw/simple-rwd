:earth_asia:  [**English**](README.md)  [中文](README.zh-tw.md)

# Simple-RWD
Time is money; Simple is needed.  
So you need a simple way for making Responsive Web Design.

## Overview
It's all about "Device", "Breakpoint" and "Container" below.

### Device
These are devices defined by screen width:
- s: Small device (unusual)
- m: Mobile device
- sm: Shortcut for small device and mobile device both (equal to s & m)
- tb: Tablet
- pc: Normal screen of computer or notebook
- hd: HD screen of computer or notebook

### Breakpoint
These breakpoints determine the range of each device for media query:
- m: Starting at 320px as default.
- tb: Starting at 768px as default.
- pc: Starting at 992px as default.
- hd: Starting at 1200px as default.

### Container
A fixed width block element centered horizontally.
- m: Being 320px wide as default.
- tb: Being 720px wide as default.
- pc: Being 960px wide as default.
- hd: Being 1140px wide as default.

## Installation
[![NPM](https://nodei.co/npm/simple-rwd.png?mini=true)](https://npmjs.org/package/simple-rwd)

Install via NPM: `npm install simple-rwd --save`

Or just copy from the source code.

## Usage

### SASS mixin
You can use these two mixin for making RWD simply.

#### simple-rwd()
It is very simple to use CSS media queries.

First, import the core mixin: `@import './node_modules/simple-rwd/';`

Then, call the mixin with devices as arguments.

```scss
.image {
  @include simple-rwd(s, m) {
    max-width: 100%;
  }
}
```

Finally, you will get the result with media query.

```css
@media (max-width: 767px) {
  .image {
    max-width: 100%;
  }
}
```

#### simple-rwd-container()
It is also very simple to make a fixed width container centered horizontally.

First, import the container mixin: `@import './node_modules/simple-rwd/container.scss';`

Then, call the mixin with devices you want as arguments.

```scss
.wrapper {
  @include simple-rwd-container(m, pc)
}
```

Finally, you will get the result.

```css
.wrapper {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}
.wrapper::before, .wrapper::after {
  display: block;
  content: '';
  overflow: auto;
}

@media (min-width: 320px) and (max-width: 767px) {
  .wrapper { width: 320px; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .wrapper { width: 320px; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .wrapper { width: 960px; }
}

@media (min-width: 1200px) {
  .wrapper { width: 960px; }
}
```

#### Custom
You can override the configuration simply.  
Just change the value of variables below after importing core mixin:

```scss
@import './node_modules/simple-rwd/container.scss';

$simple-rwd-breakpoint-m: 320;
$simple-rwd-breakpoint-tb: 768;
$simple-rwd-breakpoint-pc: 992;
$simple-rwd-breakpoint-hd: 1200;

$simple-rwd-container-m: 320;
$simple-rwd-container-tb: 720;
$simple-rwd-container-pc: 960;
$simple-rwd-container-hd: 1140;

.container { @include simple-rwd-container(m, pc); }
```

### Pure CSS class
You can use class for making RWD simply.  
Here are two ways to import:

1. Link CSS file directly: `<link href="simple-rwd-class.css" rel="stylesheet">`
2. Import in SASS: `@import './node_modules/simple-rwd/class.scss';`

#### Visible
It is very simple to show or hide on multiple devices.  
Just add the class on the element.

For showing: `<el class="simple-rwd show tb hd" />`  
The element will be shown in devices `tb` and `hd`.


For hiding: `<el class="simple-rwd hide sm pc" />`  
The element will be hidden in devices `sm` and `pc`.

#### Container
It is also very simple to make a fixed width container centered horizontally for wrapping content.

Just add the class on the element: `<div class="simple-rwd container tb pc hd">`

## Demo
Visit the [Demo](https://chenzitw.github.io/simple-rwd/demo/).

## License
[DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE](https://github.com/chenzitw/simple-rwd/blob/master/LICENSE)

----

Made in Taiwan, ray of sunshine!
