:earth_asia:  [**中文**](README.zh-tw.md)  [English](README.md)

# Simple-RWD
光陰似金；簡明在心。  
因而你需要打造適應網頁設計的簡明之道。

## 概觀
旨在「裝置」、「臨界」與「活匣」如後述。

### 裝置
依畫面寬度形成的裝置：
- s: 小型裝置（罕見）
- m: 行動裝置
- sm: 小型裝置與行動裝置兼具之快捷法（等於 s 及 m）
- tb: 平板電腦
- pc: 普通螢幕之電腦或筆記型電腦
- hd: 高解析螢幕之電腦或筆記型電腦

### 臨界
臨界點決定了各裝置的媒體查詢範圍：
- m: 預設始於 320px。
- tb: 預設始於 768px。
- pc: 預設始於 992px。
- hd: 預設始於 1200px。

### 活匣
水平置中的定寬塊形元素。
- m: 預設為 320px 寬。
- tb: 預設為 720px 寬。
- pc: 預設為 960px 寬。
- hd: 預設為 1140px 寬。

## 安裝
[![NPM](https://nodei.co/npm/simple-rwd.png?mini=true)](https://npmjs.org/package/simple-rwd)

從 NPM 安裝：`npm install simple-rwd --save`

或者直接從原始碼抄錄。

## 用法

### SASS 集成式
用這兩個集成式，輕鬆打造適應網頁設計。

#### simple-rwd()
使用 CSS 的媒體查詢真的很簡單。

首先引入核心集成式：`@import './node_modules/simple-rwd/';`

接著以裝置為參數呼叫集成式。

```scss
.image {
  @include simple-rwd(s, m) {
    max-width: 100%;
  }
}
```

最後你便會得到有媒體查詢的結果。

```css
@media (max-width: 767px) {
  .image {
    max-width: 100%;
  }
}
```

#### simple-rwd-container()
打造水平置中的定寬活匣也是真的很簡單。

首先引入活匣集成式：`@import './node_modules/simple-rwd/container.scss';`

接著以想要的裝置為參數呼叫集成式。

```scss
.wrapper {
  @include simple-rwd-container(m, pc)
}
```

最後你便會得到結果。

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

#### 訂製
你能輕鬆覆寫配置。  
只要在引入核心集成式後更改下列變數的值：

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

### 純 CSS 類別
你能使用類別來輕鬆打造適應網頁設計。  
有兩種方法引入：

1. 直接連結 CSS 檔：`<link href="simple-rwd-class.css" rel="stylesheet">`  
2. 在 SASS 中引入：`@import './node_modules/simple-rwd/class.scss';`

#### 隱現
在多重裝置上現形或隱形真的很簡單。  
只要為元素加上類別。

現形：`<el class="simple-rwd show tb hd" />`  
此元素會在裝置 `tb` 與 `hd` 中現形。

隱形：`<el class="simple-rwd hide sm pc" />`  
此元素會在裝置 `sm` 與 `pc` 中隱形。

#### 活匣
打造水平置中的定寬活匣也是真的很簡單。

只要為元素加上類別：`<div class="simple-rwd container tb pc hd">`

## 示範
瀏覽[示範](https://chenzitw.github.io/simple-rwd/demo/)。

## 憑證
[要衝啥小隨你公眾憑證](https://github.com/chenzitw/simple-rwd/blob/master/LICENSE)

----

臺灣製造，舉世之傲！
