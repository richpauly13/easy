(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-easy-docs-src-app-components-components-module"],{

/***/ "0qoL":
/*!****************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/switch/switch.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJzd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "1Ht8":
/*!**********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/tab/tab.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJ0YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "3+yz":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/button/button.component.ts ***!
  \**************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./button.component.html */ "4xvb");
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component.scss */ "idVZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ButtonComponent = class ButtonComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Button - EASY');
    }
};
ButtonComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-button',
        template: _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ButtonComponent);



/***/ }),

/***/ "33Fc":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/slider/slider.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- eslint-disable @angular-eslint/template/accessibility-label-has-associated-control -->\n<!-- eslint-disable @angular-eslint/template/accessibility-label-for -->\n<h1>Slider</h1>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n\t\t<p class=\"pad-b-sm\"><code>import &#123; SliderModule &#125; from 'easy-framework';</code></p>\n\t\t<p>Sliders are styled with a <code>.slider-[circle || square || label]</code> class on <code>&lt;input=\"range\"&gt;</code> or <code>&lt;label&gt;</code> elements.</p>\n\t\t<p><strong>Note</strong>: If a slider does not have <code>max</code>, <code>min</code>, <code>step</code>, <code>value</code>, <code>for</code>, <code>id</code>, and/or <code>aria-orientation</code> attributes, they will be set and updated automatically.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm border-b-gray\">\n\t\t<label class=\"slider-label pad-b-xs\">Slider Circle</label>\n\t\t<input class=\"slider-circle\" type=\"range\">\n\t\t<label class=\"slider-label pad-tb-xs\">Slider Sqaure</label>\n\t\t<input class=\"slider-square\" type=\"range\">\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-label pad-b-xs\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-circle\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"range\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-label pad-tb-xs\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-square\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"range\"</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Slider Colors</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n\t\t<p>A slider track can be styled using a <code>bg-*</code> and a thumb can be styled using a <code>text-*</code> class from the <a class=\"text-dk-blue\" href=\"https://richpauly13.github.io/easy/#/utilities/color\">Color</a> page.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm border-b-gray\">\n\t\t<label class=\"slider-label pad-b-xs\">Slider Circle</label>\n\t\t<input class=\"slider-circle bg-green text-white\" type=\"range\">\n\t\t<label class=\"slider-label pad-tb-xs\">Slider Sqaure</label>\n\t\t<input class=\"slider-square bg-blue text-black\" type=\"range\">\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-label pad-b-xs\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-circle bg-green text-white\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"range\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-label pad-tb-xs\"</span> &gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"slider-square bg-blue text-black\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"range\"</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n");

/***/ }),

/***/ "4s6I":
/*!**********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/card/card.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "ECn4");
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.scss */ "rei/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let CardComponent = class CardComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Card - EASY');
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-card',
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardComponent);



/***/ }),

/***/ "4xvb":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/button/button.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Button</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; ButtonModule &#125; from 'easy-framework';</code></p>\r\n        <p>Buttons are styled with a <code>.btn[-xs || -sm || -md || -lg || -xl || -full]</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The <code>.btn</code> class does not have any padding, but still behaves like other <code>.btn-*</code> classes.</p>\r\n\t\t<p><strong>Note</strong>: A button without a type defaults to type=\"submit\" which can cause unwanted behavior, so type=\"button\" will be automatically assigned if no type is present.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm\">\r\n\t\t<button class=\"btn bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn</button>\r\n        <button class=\"btn-xs bg-dk-blue text-white bg-hover-blue\" type=\"button\">xs</button>\r\n        <button class=\"btn-sm bg-dk-blue text-white bg-hover-blue\" type=\"button\">sm</button>\r\n        <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">md</button>\r\n        <button class=\"btn-lg bg-dk-blue text-white bg-hover-blue\" type=\"button\">lg</button>\r\n        <button class=\"btn-xl bg-dk-blue text-white bg-hover-blue\" type=\"button\">xl</button>\r\n        <button class=\"btn-full bg-dk-blue text-white bg-hover-blue\" type=\"button\">full</button>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm border-tb-gray\">\r\n\t\t\t<span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-xs bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>xs<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-sm bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>sm<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>md<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-lg bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>lg<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-xl bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>xl<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-full bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Group</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\r\n        <p>Buttons are grouped with a <code>.btn-group-[row || col || full]</code> class on a parent container.</p>\r\n\t\t<p><strong>Note</strong>: The aria role=\"group\" and an aria-label will be automatically assigned to the button group if neither are present.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm\">\r\n        <section class=\"btn-group-row\">\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-row</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-row</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-row</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-row</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-row</button>\r\n        </section>\r\n        <section class=\"btn-group-col\">\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-col</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-col</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-col</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-col</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-col</button>\r\n        </section>\r\n        <section class=\"btn-group-full\">\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-full</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-full</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-full</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-full</button>\r\n            <button class=\"btn-md bg-dk-blue text-white bg-hover-blue\" type=\"button\">btn-group-full</button>\r\n        </section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm border-tb-gray\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-group-row\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-row<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-row<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-row<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-row<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-row<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-group-column\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-col<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-col<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-col<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-col<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-col<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-group-full\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>btn-group-full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Rounded</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\r\n        <p>Buttons are rounded by adding a <code>.rounded</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm\">\r\n        <button class=\"btn-xs rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">xs</button>\r\n        <button class=\"btn-sm rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">sm</button>\r\n        <button class=\"btn-md rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">md</button>\r\n        <button class=\"btn-lg rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">lg</button>\r\n        <button class=\"btn-xl rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">xl</button>\r\n        <button class=\"btn-full rounded bg-dk-blue text-white bg-hover-blue\" type=\"button\">full</button>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm border-tb-gray\">\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-xs rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>xs<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-sm rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>sm<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>md<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-lg rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>lg<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-xl rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>xl<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-full rounded bg-dk-blue text-white bg-hover-blue\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>full<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>State</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\r\n        <p>Buttons are disabled by adding a <code>disabled</code> attribute.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm\">\r\n        <button class=\"btn-md\" type=\"button\" disabled>disabled</button>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm border-tb-gray\">\r\n            <span>&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-md\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span> <span class=\"attribute\">disabled</span>&gt;</span>disabled<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "6b1d":
/*!******************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/progress/progress.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progress.component.html */ "L76I");
/* harmony import */ var _progress_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress.component.scss */ "tb6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let ProgressComponent = class ProgressComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Progress - EASY');
    }
};
ProgressComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-progress',
        template: _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_progress_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProgressComponent);



/***/ }),

/***/ "9lNX":
/*!************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/alert/alert.component.ts ***!
  \************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "HFx2");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "dNOK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let AlertComponent = class AlertComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Alert - EASY');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertComponent);



/***/ }),

/***/ "ECn4":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/card/card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Card</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; CardModule &#125; from 'easy-framework';</code></p>\r\n        <p>A basic card is styled with a <code>.card</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Cards</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Basic cards an be evenly laid out using a <code>.cards</code> container class.</p>\r\n\t\t<p><strong>Note</strong>: The aria role=\"group\" will be automatically assigned to the card group.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray cards\">\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n        <article class=\"card\">\r\n            <p>card</p>\r\n        </article>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"cards\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Card Focus</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Add a <code>.card-focus</code> class to a card to make it focusable.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <article class=\"card card-focus\">\r\n            <p>card</p>\r\n        </article>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card card-focus\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span>&gt;</span>card<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Complex Card</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>A complex card is styled with <a class=\"text-dk-blue\" href=\"https://richpauly13.github.io/easy/#/utilities/alignment\">utility</a> classes.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <article class=\"card\">\r\n\t\t\t<h3 class=\"text-md pad-b-sm\">Card Title</h3>\r\n            <p class=\"text-dk-gray pad-b-sm\">Card subtitle</p>\r\n\t\t\t<figure class=\"pad-b-sm\">\r\n\t\t\t\t<img class=\"center\" src=\"https://plchldr.co/i/100x100?&bg=d2d2d2&fc=fff&text=100x100\" alt=\"placeholder image\">\r\n\t\t\t</figure>\r\n\t\t\t<p class=\"pad-b-sm text-c\">Card content</p>\r\n\t\t\t<button class=\"btn-sm bg-dk-blue text-white bg-hover-lt-gray text-hover-lt-black\" type=\"button\">Click</button>\r\n        </article>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">article</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"card\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">h3</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"text-md pad-b-sm\"</span>&gt;</span>Card Title<span>&lt;/<span class=\"tag\">h3</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"text-dk-gray pad-b-sm\"</span>&gt;</span>Card subtitle<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">figure</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"pad-b-sm\"</span>&gt;</span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">img</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"center\"</span> <span class=\"attribute\">src</span>=<span class=\"value\">\"https://plchldr.co/i/100x100?&bg=d2d2d2&fc=fff&text=100x100\"</span> <span class=\"attribute\">alt</span>=<span class=\"value\">\"placeholder image\"</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">figure</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"pad-b-sm text-c\"</span>&gt;</span>Card content<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"btn-sm bg-dk-blue text-white bg-hover-lt-gray text-hover-lt-black\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>Click<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">article</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "EOzg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/form/form.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- eslint-disable @angular-eslint/template/accessibility-label-has-associated-control -->\n<!-- eslint-disable @angular-eslint/template/accessibility-label-for -->\n<h1>Form</h1>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p class=\"pad-b-sm\"><code>import &#123; FormModule &#125; from 'easy-framework';</code></p>\n\t\t<p>Basic forms are styled with <code>.field-group</code>, <code>.form-label</code>, and <code>.form-field</code> classes.</p>\n\t\t<p><strong>Note</strong>: Forms will have a unique <code>id</code>, a unique <code>for</code>, <code>role</code>, and <code>.pad-*</code> class attributes added, if not present.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"formForm\">\n\t\t\t<section class=\"field-group\">\n\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t</section>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"formForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Fieldset</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>A fieldset is optionally styled with a <code>.fieldset</code> class and has an optional <code>&lt;legend&gt;</code> tag as the first child.</p>\n\t\t<p>A Fieldset is used to group similar fields together both visually and for assitive technologies.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"fieldsetForm\">\n\t\t\t<fieldset class=\"fieldset\">\n\t\t\t\t<legend>Contact Information</legend>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Email</label>\n\t\t\t\t\t<input formControlName=\"email\" class=\"form-field\" type=\"email\">\n\t\t\t\t</section>\n\t\t\t</fieldset>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"fieldsetForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"fieldset\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>Contact Information<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Email<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"email\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"email\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Form Label</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Form labels are styled with a <code>.form-label</code> class.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"formLabelForm\">\n\t\t\t<section class=\"field-group\">\n\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t</section>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"formLabelForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Form Field</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Form fields are styled with a <code>.form-field</code> class.&nbsp;&nbsp;Different styles are applied based on the form field.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"formFieldForm\">\n\t\t\t<fieldset>\n\t\t\t\t<legend>Demographics</legend>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Gender</label>\n\t\t\t\t\t<select formControlName=\"gender\" class=\"form-field\">\n\t\t\t\t\t\t<option value=\"1\">--- Select Gender ---</option>\n\t\t\t\t\t\t<option value=\"2\">Female</option>\n\t\t\t\t\t\t<option value=\"3\">Male</option>\n\t\t\t\t\t</select>\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Languages</label>\n\t\t\t\t\t<select formControlName=\"languages\" class=\"form-field\" multiple>\n\t\t\t\t\t\t<option value=\"1\">English</option>\n\t\t\t\t\t\t<option value=\"2\">French</option>\n\t\t\t\t\t\t<option value=\"3\">Spanish</option>\n\t\t\t\t\t</select>\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Note</label>\n\t\t\t\t\t<textarea formControlName=\"note\" class=\"form-field\"></textarea>\n\t\t\t\t</section>\n\t\t\t</fieldset>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"formFieldForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>Demographics<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Gender<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">select</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"gender\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"1\"</span>&gt;</span>--- Select Gender ---<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"2\"</span>&gt;</span>Female<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"3\"</span>&gt;</span>Male<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">select</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Languages<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">select</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"languages\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">multiple</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"1\"</span>&gt;</span>English<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"2\"</span>&gt;</span>French<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">option</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"3\"</span>&gt;</span>Spanish<span>&lt;/<span class=\"tag\">option</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">select</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Note<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">textarea</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"note\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span>&gt;</span><span>&lt;/<span class=\"tag\">textarea</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Form Group Inline</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Inline form groups are styled with <code>.form-group-inline</code> class.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"formGroupForm\">\n\t\t\t<fieldset class=\"form-group-inline\">\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t\t<input formControlName=\"name1\" class=\"form-field\" type=\"text\">\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Email</label>\n\t\t\t\t\t<input formControlName=\"email1\" class=\"form-field\" type=\"email\">\n\t\t\t\t</section>\n\t\t\t</fieldset>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"formGroupForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-group-inline\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name1\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Email<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"email1\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"email\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Field Group</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Field groups are styled with a <code>.field-group</code> class.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"fieldGroupForm\">\n\t\t\t<section class=\"field-group\">\n\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t</section>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"fieldGroupForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>Checkbox/Radio Group</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Checkbox and radio fields are styled with a <code>.checkbox-group</code> or <code>.radio-group</code> and <code>.checkbox-label</code> or <code>.radio-label</code> classes.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"checkboxRadioGroupForm\">\n\t\t\t<fieldset class=\"fieldset\">\n\t\t\t\t<legend>Preferences</legend>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t\t<input formControlName=\"name\" class=\"form-field\" type=\"text\">\n\t\t\t\t</section>\n\t\t\t\t<fieldset class=\"radio-group fieldset\">\n\t\t\t\t\t<legend>Like</legend>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"like\" class=\"form-field\" type=\"radio\" value=\"yes\">\n\t\t\t\t\t\t<label class=\"radio-label\">Yes</label>\n\t\t\t\t\t</section>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"like\" class=\"form-field\" type=\"radio\" value=\"no\">\n\t\t\t\t\t\t<label class=\"radio-label\">No</label>\n\t\t\t\t\t</section>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"checkbox-group fieldset\">\n\t\t\t\t\t<legend>Color</legend>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"color\" class=\"form-field\" type=\"checkbox\">\n\t\t\t\t\t\t<label class=\"checkbox-label\">Blue</label>\n\t\t\t\t\t</section>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"color\" class=\"form-field\" type=\"checkbox\">\n\t\t\t\t\t\t<label class=\"checkbox-label\">Green</label>\n\t\t\t\t\t</section>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"color\" class=\"form-field\" type=\"checkbox\">\n\t\t\t\t\t\t<label class=\"checkbox-label\">Red</label>\n\t\t\t\t\t</section>\n\t\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t\t<input formControlName=\"color\" class=\"form-field\" type=\"checkbox\">\n\t\t\t\t\t\t<label class=\"checkbox-label\">Yellow</label>\n\t\t\t\t\t</section>\n\t\t\t\t</fieldset>\n\t\t\t</fieldset>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"checkboxRadioGroupForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"fieldset\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>Preferences<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Name<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"name\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"radio-group fieldset\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>Like<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"like\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"radio\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"yes\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"radio-label\"</span>&gt;</span>Yes<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"like\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"radio\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"no\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"radio-label\"</span>&gt;</span>No<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"checkbox-group fieldset\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>Color<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"color\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"checkbox-label\"</span>&gt;</span>Blue<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"color\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"checkbox-label\"</span>&gt;</span>Green<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"color\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"checkbox-label\"</span>&gt;</span>Red<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"color\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"checkbox-label\"</span>&gt;</span>Yellow<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n\n<h2>State</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray\">\n\t<section class=\"pad-a-sm bg-lt-gray border-tb-gray\">\n\t\t<p>Form fields can be disabled by adding a <code>disabled</code> attribute or by adding a <code>readonly</code> attribute.</p>\n\t</section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<form [formGroup]=\"formFieldStateForm\">\n\t\t\t<fieldset>\n\t\t\t\t<legend>States</legend>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Disabled</label>\n\t\t\t\t\t<input formControlName=\"disabled\" class=\"form-field\" type=\"text\">\n\t\t\t\t</section>\n\t\t\t\t<section class=\"field-group\">\n\t\t\t\t\t<label class=\"form-label\">Readonly</label>\n\t\t\t\t\t<input formControlName=\"readonly\" class=\"form-field\" type=\"text\" readonly>\n\t\t\t\t</section>\n\t\t\t</fieldset>\n\t\t</form>\n\t</section>\n\n\t<figure>\n\t\t<pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">form</span> <span class=\"attribute\">[formGroup]</span>=<span class=\"value\">\"formFieldStateForm\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">fieldset</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-group\"</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">legend</span>&gt;</span>States<span>&lt;/<span class=\"tag\">legend</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Disabled<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"disabled\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"field-group\"</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-label\"</span>&gt;</span>Readonly<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">input</span> <span class=\"attribute\">formControlName</span>=<span class=\"value\">\"readonly\"</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"form-field\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"text\"</span> <span class=\"attribute\">readonly</span>&gt;</span>\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">section</span>&gt;</span>\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">fieldset</span>&gt;</span>\n\t\t\t<span>&lt;/<span class=\"tag\">form</span>&gt;</span>\n\t\t</pre>\n\t</figure>\n</article>\n");

/***/ }),

/***/ "Etpf":
/*!****************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/spinner/spinner.component.ts ***!
  \****************************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner.component.html */ "proT");
/* harmony import */ var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component.scss */ "Pyob");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let SpinnerComponent = class SpinnerComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Spinner - EASY');
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpinnerComponent);



/***/ }),

/***/ "G0n4":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/switch/switch.component.ts ***!
  \**************************************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_switch_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./switch.component.html */ "jt8G");
/* harmony import */ var _switch_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch.component.scss */ "0qoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let SwitchComponent = class SwitchComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Switch - EASY');
    }
};
SwitchComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SwitchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-switch',
        template: _raw_loader_switch_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_switch_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SwitchComponent);



/***/ }),

/***/ "GwBh":
/*!**********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/form/form.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form.component.html */ "EOzg");
/* harmony import */ var _form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component.scss */ "MwnL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






let FormComponent = class FormComponent {
    constructor(formBuilder, title) {
        this.formBuilder = formBuilder;
        this.title = title;
        this.checkboxRadioGroupForm = this.formBuilder.group({});
        this.fieldGroupForm = this.formBuilder.group({});
        this.fieldsetForm = this.formBuilder.group({});
        this.formFieldForm = this.formBuilder.group({});
        this.formFieldStateForm = this.formBuilder.group({});
        this.formForm = this.formBuilder.group({});
        this.formGroupForm = this.formBuilder.group({});
        this.formLabelForm = this.formBuilder.group({});
    }
    ngOnInit() {
        this.checkboxRadioGroupForm = this.formBuilder.group({
            color: null,
            like: null,
            name: ''
        });
        this.fieldGroupForm = this.formBuilder.group({
            name: ''
        });
        this.fieldsetForm = this.formBuilder.group({
            name: '',
            email: ''
        });
        this.formFieldForm = this.formBuilder.group({
            gender: 1,
            languages: '',
            name: '',
            note: ''
        });
        this.formFieldStateForm = this.formBuilder.group({
            disabled: {
                disabled: true,
                value: 'disabled'
            },
            readonly: 'readonly'
        });
        this.formFieldStateForm.updateValueAndValidity();
        this.formForm = this.formBuilder.group({
            name: ''
        });
        this.formGroupForm = this.formBuilder.group({
            email1: '',
            email2: '',
            name1: '',
            name2: ''
        });
        this.formLabelForm = this.formBuilder.group({
            name: ''
        });
        this.title.setTitle('Components - Form - EASY');
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-form',
        template: _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormComponent);



/***/ }),

/***/ "HFx2":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/alert/alert.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Alert</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; AlertModule &#125; from 'easy-framework';</code></p>\r\n        <p>Alerts are styled with an <code>.alert-[bad || good || info || warn]</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The aria role=\"alert\", tabindex=\"-1\", and a unique aria-labelledby and id will be automatically assigned to the alert.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <aside class=\"alert-bad\">bad</aside>\r\n        <aside class=\"alert-good\">good</aside>\r\n        <aside class=\"alert-info\">info</aside>\r\n        <aside class=\"alert-warn\">warn</aside>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"alert-bad\"</span>&gt;</span>bad<span>&lt;/<span class=\"tag\">aside</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"alert-good\"</span>&gt;</span>good<span>&lt;/<span class=\"tag\">aside</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"alert-info\"</span>&gt;</span>info<span>&lt;/<span class=\"tag\">aside</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"alert-warn\"</span>&gt;</span>warn<span>&lt;/<span class=\"tag\">aside</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Close</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Alerts are closed by adding a <code>.close</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The aria role=\"alertdialog\" will be automatically assigned to an alert with a <code>.close</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <aside class=\"alert-good close\">close</aside>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"alert-good close\"</span>&gt;</span>close<span>&lt;/<span class=\"tag\">aside</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "I6DC":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/tab/tab.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tab</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; TabModule &#125; from 'easy-framework';</code></p>\r\n\t\t<p>Tabs are used to change views while on the same route.</p>\r\n        <p>Tabs are styled with <code>.tab-btn</code>, <code>.tab-content</code>, and <code>.tabs</code> classes.</p>\r\n\t\t<p><strong>Note</strong>: A role attribute of tab, tabpanel, and tablist, respectively, will be added automatically.</p>\r\n    </section>\r\n\r\n\t<section class=\"pad-a-sm border-b-gray\">\r\n        <section class=\"tabs\">\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 1</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 2</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 3</button>\r\n\t\t\t<p class=\"tab-content\">tab-content 1</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 2</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 3</p>\r\n\t\t</section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tabs\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 1<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 2<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 3<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Tab Button</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Tab buttons are styled with a <code>.tab-btn</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The attributes of aria-posinset, aria-setsize, aria-controls, aria-selected, type, and a unique id will be added and updated automatically.</p>\r\n\t\t<p><strong>Note</strong>: Do not use <code>.btn-*</code> classes on the <code>.tab-btn</code> class as it will cause a component selector clash.</p>\r\n\t</section>\r\n\r\n\t<section class=\"pad-a-sm border-b-gray\">\r\n        <section class=\"tabs\">\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 1</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 2</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 3</button>\r\n\t\t\t<p class=\"tab-content\">tab-content 1</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 2</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 3</p>\r\n\t\t</section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tabs\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 1<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 2<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 3<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Tab Content</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Tab contents are styled with a <code>.tab-content</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The attributes of aria-hidden, aria-labelledby, a unique id, and the <code>.hide</code> class will be added and updated automatically.</p>\r\n\t</section>\r\n\r\n\t<section class=\"pad-a-sm border-b-gray\">\r\n        <section class=\"tabs\">\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 1</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 2</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 3</button>\r\n\t\t\t<p class=\"tab-content\">tab-content 1</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 2</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 3</p>\r\n\t\t</section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tabs\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 1<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 2<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 3<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Tabs</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Tab groups are styled with a <code>.tabs</code> class.</p>\r\n\t</section>\r\n\r\n\t<section class=\"pad-a-sm border-b-gray\">\r\n        <section class=\"tabs\">\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 1</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 2</button>\r\n\t\t\t<button class=\"tab-btn pad-lr-md pad-tb-xs\" type=\"button\">tab-btn 3</button>\r\n\t\t\t<p class=\"tab-content\">tab-content 1</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 2</p>\r\n\t\t\t<p class=\"tab-content\">tab-content 3</p>\r\n\t\t</section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tabs\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 1<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 2<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-btn pad-lr-md pad-tb-xs\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"button\"</span>&gt;</span>tab-btn 3<span>&lt;/<span class=\"tag\">button</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"tab-content\"</span>&gt;</span>tab-content 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "ILkC":
/*!*************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/components.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJjb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "JvhF":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/table/table.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Table</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; TableModule &#125; from 'easy-framework';</code></p>\r\n        <p>Basic tables are styled with <code>.table</code>, <code>.table-cell</code>, <code>.table-header</code>, <code>.table-header-cell</code>, and <code>.table-row</code> classes.</p>\r\n\t\t<p><strong>Note</strong>: Proper aria roles will be added based on the element's class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <ul class=\"table\">\r\n            <li class=\"table-header\">\r\n                <p class=\"table-header-cell\">header cell 1</p>\r\n                <p class=\"table-header-cell\">header cell 2</p>\r\n                <p class=\"table-header-cell\">header cell 3</p>\r\n                <p class=\"table-header-cell\">header cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Table Bordered</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Bordered tables are styled with a <code>.table-bordered</code> instead of a <code>.table</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <ul class=\"table-bordered\">\r\n            <li class=\"table-header\">\r\n                <p class=\"table-header-cell\">header cell 1</p>\r\n                <p class=\"table-header-cell\">header cell 2</p>\r\n                <p class=\"table-header-cell\">header cell 3</p>\r\n                <p class=\"table-header-cell\">header cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-bordered\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Table Hover</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Hover tables are styled with a <code>.table-hover</code> instead of a <code>.table</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <ul class=\"table-hover\">\r\n            <li class=\"table-header\">\r\n                <p class=\"table-header-cell\">header cell 1</p>\r\n                <p class=\"table-header-cell\">header cell 2</p>\r\n                <p class=\"table-header-cell\">header cell 3</p>\r\n                <p class=\"table-header-cell\">header cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-hover\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Table Striped</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Striped tables are styled with a <code>.table-striped</code> instead of a <code>.table</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <ul class=\"table-striped\">\r\n            <li class=\"table-header\">\r\n                <p class=\"table-header-cell\">header cell 1</p>\r\n                <p class=\"table-header-cell\">header cell 2</p>\r\n                <p class=\"table-header-cell\">header cell 3</p>\r\n                <p class=\"table-header-cell\">header cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-striped\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Table Combination</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>Combination tables are styled with <code>.table-bordered</code>, <code>.table-hover</code>, and/or <code>.table-striped</code> classes instead of a <code>.table</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <ul class=\"table-bordered table-hover table-striped\">\r\n            <li class=\"table-header\">\r\n                <p class=\"table-header-cell\">header cell 1</p>\r\n                <p class=\"table-header-cell\">header cell 2</p>\r\n                <p class=\"table-header-cell\">header cell 3</p>\r\n                <p class=\"table-header-cell\">header cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n\r\n            <li class=\"table-row\">\r\n                <p class=\"table-cell\">row cell 1</p>\r\n                <p class=\"table-cell\">row cell 2</p>\r\n                <p class=\"table-cell\">row cell 3</p>\r\n                <p class=\"table-cell\">row cell 4</p>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-bordered table-hover table-striped\"</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n                <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n            <span>&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Table Wrapper</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>To make your table mobile friendly, add a <code>.table-wrapper</code> class to a container.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <section class=\"table-wrapper\">\r\n\t\t\t<ul class=\"table-bordered table-hover table-striped\">\r\n\t\t\t\t<li class=\"table-header\">\r\n\t\t\t\t\t<p class=\"table-header-cell\">header cell 1</p>\r\n\t\t\t\t\t<p class=\"table-header-cell\">header cell 2</p>\r\n\t\t\t\t\t<p class=\"table-header-cell\">header cell 3</p>\r\n\t\t\t\t\t<p class=\"table-header-cell\">header cell 4</p>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t\t<li class=\"table-row\">\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 1</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 2</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 3</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 4</p>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t\t<li class=\"table-row\">\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 1</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 2</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 3</p>\r\n\t\t\t\t\t<p class=\"table-cell\">row cell 4</p>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</section>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n\t\t\t<span>&lt;<span class=\"tag\">section</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-wrapper\"</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">ul</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-bordered table-hover table-striped\"</span>&gt;</span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header\"</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-header-cell\"</span>&gt;</span>header cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">li</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-row\"</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 2<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 3<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"table-cell\"</span>&gt;</span>row cell 4<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">li</span>&gt;</span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"tag\">ul</span>&gt;</span>\r\n\t\t\t<span>&lt;/<span class=\"tag\">section</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "L76I":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/progress/progress.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- eslint-disable @angular-eslint/template/accessibility-label-has-associated-control -->\n<!-- eslint-disable @angular-eslint/template/accessibility-label-for -->\n<h1>Progress</h1>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n\t\t<p class=\"pad-b-sm\"><code>import &#123; ProgressModule &#125; from 'easy-framework';</code></p>\n        <p>Progress bars are styled with <code>.progress[-label || -striped]</code> classes.</p>\n\t\t<p><strong>Note</strong>: If a progress bar does not have a <code>value</code> attribute, it is considered indeterminate.</p>\n\t\t<p><strong>Note</strong>: If a progress bar not have <code>max</code>, <code>position</code>, <code>for</code>, and/or <code>id</code>, attributes, they will be set and updated automatically.</p>\n    </section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<label class=\"progress-label pad-b-xs\">determinate</label>\n\t\t<progress class=\"progress mar-b-sm\" value=\"50\"></progress>\n\t\t<label class=\"progress-label pad-b-xs\">indeterminate</label>\n\t\t<progress class=\"progress\"></progress>\n    </section>\n\n    <figure>\n        <pre class=\"pad-a-sm border-t-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>determinate<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress mar-b-sm\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"50\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>indeterminate<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n        </pre>\n    </figure>\n</article>\n\n<h2>Progress Colors</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n        <p>A progress bar can be styled using a <code>bg-*</code> and a progress bar value can be styled using a <code>text-*</code> class from the <a class=\"text-dk-blue\" href=\"https://richpauly13.github.io/easy/#/utilities/color\">Color</a> page.</p>\n    </section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<label class=\"progress-label pad-b-xs\">progress bar and value color</label>\n\t\t<progress class=\"progress text-green bg-black\" value=\"50\"></progress>\n    </section>\n\n    <figure>\n        <pre class=\"pad-a-sm border-t-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>progress bar and value color<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress text-green bg-black\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"50\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n        </pre>\n    </figure>\n</article>\n\n<h2>Progress Rounded</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n        <p>Progress bars are rounded using a <code>.rounded</code> class.</p>\n\t\t<p><strong>Note</strong>: A progress bar's value will be vertical until it reaches 100%, then it will be rounded to match the progress bar.</p>\n    </section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<label class=\"progress-label pad-b-xs\">50% of max</label>\n\t\t<progress class=\"progress rounded mar-b-sm\" value=\"50\"></progress>\n\t\t<label class=\"progress-label pad-b-xs\">100% of max</label>\n\t\t<progress class=\"progress rounded\" value=\"100\"></progress>\n    </section>\n\n\t<figure>\n        <pre class=\"pad-a-sm border-t-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>50% of max<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress rounded mar-b-sm\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"50\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>100% of max<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress rounded\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"100\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n        </pre>\n    </figure>\n</article>\n\n<h2>Progress Striped</h2>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n        <p>Progress bars are striped using a <code>.striped</code> class.</p>\n    </section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<label class=\"progress-label pad-b-xs\">striped</label>\n\t\t<progress class=\"progress-striped mar-b-sm\" value=\"50\"></progress>\n\t\t<label class=\"progress-label pad-b-xs\">colored striped</label>\n\t\t<progress class=\"progress-striped text-green\" value=\"50\"></progress>\n    </section>\n\n    <figure>\n        <pre class=\"pad-a-sm border-t-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>striped<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-striped mar-b-sm\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"50\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-label pad-b-xs\"</span>&gt;</span>colored striped<span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">progress</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"progress-striped text-green\"</span> <span class=\"attribute\">value</span>=<span class=\"value\">\"50\"</span>&gt;</span><span>&lt;/<span class=\"tag\">progress</span>&gt;</span>\n        </pre>\n    </figure>\n</article>\n");

/***/ }),

/***/ "MwnL":
/*!************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/form/form.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0QiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Pyob":
/*!******************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/spinner/spinner.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0QiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "U0tO":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/slider/slider.component.ts ***!
  \**************************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slider.component.html */ "33Fc");
/* harmony import */ var _slider_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.component.scss */ "mokx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let SliderComponent = class SliderComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Slider - EASY');
    }
};
SliderComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-slider',
        template: _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_slider_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SliderComponent);



/***/ }),

/***/ "YX6f":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/badge/badge.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEIiwiZmlsZSI6ImJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "bAZT":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/badge/badge.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Badge</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; BadgeModule &#125; from 'easy-framework';</code></p>\r\n        <p>Badges are styled with a <code>.badge-[sm || md || lg]</code> class.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <p class=\"badge-sm bg-dk-blue text-white\">1</p>\r\n        <p class=\"badge-md bg-dk-blue text-white\">20</p>\r\n        <p class=\"badge-lg bg-dk-blue text-white\">300</p>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"badge-sm bg-dk-blue text-white\"</span>&gt;</span>1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"badge-md bg-dk-blue text-white\"</span>&gt;</span>20<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"badge-lg bg-dk-blue text-white\"</span>&gt;</span>300<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n\r\n<h2>Empty</h2>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-lr-gray border-t-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n        <p>If a badge does not contain text, it is not rendered.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray\">\r\n        <p class=\"badge-sm bg-dk-blue text-white\">1</p>\r\n        <p class=\"badge-md bg-dk-blue text-white\"></p>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"badge-sm bg-dk-blue text-white\"</span>&gt;</span>1<span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"badge-md bg-dk-blue text-white\"</span>&gt;</span><span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n        </pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "dNOK":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/alert/alert.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "idVZ":
/*!****************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/button/button.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "jt8G":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/switch/switch.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- eslint-disable @angular-eslint/template/accessibility-label-has-associated-control -->\n<!-- eslint-disable @angular-eslint/template/accessibility-label-for -->\n<h1>Switch</h1>\n\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\n\t\t<p class=\"pad-b-sm\"><code>import &#123; SwitchModule &#125; from 'easy-framework';</code></p>\n        <p>Switches are styled with a <code>.switch-[circle || square]</code> class on an <code>input type=\"checkbox\"</code> element.</p>\n\t\t<p>Switch labels are styled with a <code>.switch-label</code> class on a <code>label</code> element.</p>\n\t\t<p><strong>Note</strong>: Switches will have <code>role=\"switch\"</code>, a unique <code>id</code>, a unique <code>for</code>, <code>aria-label</code>, <code>class=show-sr</code>, and <code>checked</code> attributes added and updated automatically, if not present.</p>\n    </section>\n\n\t<section class=\"pad-a-sm\">\n\t\t<input class=\"switch-circle\" type=\"checkbox\">\n\t\t<label class=\"switch-label mar-r-md\"></label>\n\t\t<input class=\"switch-square\" type=\"checkbox\">\n\t\t<label class=\"switch-label\"></label>\n    </section>\n\n    <figure>\n        <pre class=\"pad-a-sm border-tb-gray\">\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"switch-circle\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"switch-label mar-r-md\"</span>&gt;</span><span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">input</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"switch-square\"</span> <span class=\"attribute\">type</span>=<span class=\"value\">\"checkbox\"</span>&gt;</span>\n\t\t\t<span>&lt;<span class=\"tag\">label</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"switch-label\"</span>&gt;</span><span>&lt;/<span class=\"tag\">label</span>&gt;</span>\n        </pre>\n    </figure>\n</article>\n\n");

/***/ }),

/***/ "m5BC":
/*!************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/badge/badge.component.ts ***!
  \************************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./badge.component.html */ "bAZT");
/* harmony import */ var _badge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.component.scss */ "YX6f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let BadgeComponent = class BadgeComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Badge - EASY');
    }
};
BadgeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
BadgeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-badge',
        template: _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_badge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BadgeComponent);



/***/ }),

/***/ "mTGt":
/*!********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/tab/tab.component.ts ***!
  \********************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab.component.html */ "I6DC");
/* harmony import */ var _tab_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component.scss */ "1Ht8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let TabComponent = class TabComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Tab - EASY');
    }
};
TabComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
TabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-tab',
        template: _raw_loader_tab_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_tab_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabComponent);



/***/ }),

/***/ "mokx":
/*!****************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/slider/slider.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nf8u":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/components.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav-v border-a-gray box-shadow-1 pos-f-l\">\r\n\t<ul class=\"nav-row\">\r\n\t\t<li *ngFor=\"let nav of navs; let navIndex = index; trackBy: trackById\" class=\"nav-item\">\r\n\t\t\t<a [routerLink]=\"['/components', nav]\" routerLinkActive=\"active bg-lt-gray\" class=\"bg-hover-lt-gray nav-link pad-tb-sm\">{{nav | titlecase}}</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "proT":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/components/spinner/spinner.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Spinner</h1>\r\n\r\n<article class=\"mar-b-lg box-shadow-1 border-a-gray\">\r\n    <section class=\"pad-a-sm bg-lt-gray border-b-gray\">\r\n\t\t<p class=\"pad-b-sm\"><code>import &#123; SpinnerModule &#125; from 'easy-framework';</code></p>\r\n        <p>Spinners are styled with a <code>.spinner[-2 || -multi]</code> class.</p>\r\n\t\t<p><strong>Note</strong>: The aria role=\"progressbar\" and aria-label=\"please wait\" will be automatically assigned to the spinner, if not present.</p>\r\n    </section>\r\n\r\n    <section class=\"pad-a-sm border-b-gray row\">\r\n\t\t<p class=\"spinner mar-r-xs\"></p>\r\n\t\t<p class=\"spinner-2 mar-r-xs\"></p>\r\n\t\t<p class=\"spinner-multi\"></p>\r\n    </section>\r\n\r\n    <figure>\r\n        <pre class=\"pad-a-sm\">\r\n            <span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"spinner\"</span>&gt;</span><span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t<span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"spinner-2\"</span>&gt;</span><span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t\t<span>&lt;<span class=\"tag\">p</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"spinner-multi\"</span>&gt;</span><span>&lt;/<span class=\"tag\">p</span>&gt;</span>\r\n\t\t</pre>\r\n    </figure>\r\n</article>\r\n");

/***/ }),

/***/ "r6XB":
/*!**************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/table/table.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "rei/":
/*!************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/card/card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0QiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "sYTO":
/*!***********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/components.component.ts ***!
  \***********************************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./components.component.html */ "nf8u");
/* harmony import */ var _components_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.component.scss */ "ILkC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ComponentsComponent = class ComponentsComponent {
    constructor() {
        this.navs = [
            'alert',
            'badge',
            'button',
            'card',
            'form',
            'progress',
            'slider',
            'spinner',
            'switch',
            'tab',
            'table'
        ];
    }
    trackById(navIndex, nav) {
        return `${nav}${navIndex}`;
    }
};
ComponentsComponent.ctorParameters = () => [];
ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-components',
        template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_components_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComponentsComponent);



/***/ }),

/***/ "tb6v":
/*!********************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/progress/progress.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEIiwiZmlsZSI6InByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "tm1p":
/*!************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/table/table.component.ts ***!
  \************************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table.component.html */ "JvhF");
/* harmony import */ var _table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.component.scss */ "r6XB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





let TableComponent = class TableComponent {
    constructor(title) {
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Components - Table - EASY');
    }
};
TableComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-table',
        template: _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TableComponent);



/***/ }),

/***/ "vGaj":
/*!********************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/components.module.ts ***!
  \********************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/alert.component */ "9lNX");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge/badge.component */ "m5BC");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "3+yz");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "4s6I");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.component */ "sYTO");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components-routing.module */ "xbkw");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "GwBh");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress/progress.component */ "6b1d");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/shared.module */ "rtsS");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider/slider.component */ "U0tO");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spinner/spinner.component */ "Etpf");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./switch/switch.component */ "G0n4");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tab/tab.component */ "mTGt");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./table/table.component */ "tm1p");
















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"],
            _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"],
            _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
            _components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
            _slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
            _switch_switch_component__WEBPACK_IMPORTED_MODULE_13__["SwitchComponent"],
            _tab_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
            _table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"]
        ],
        exports: [
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"],
            _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"],
            _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
            _components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
            _components_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsRoutingModule"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
            _slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
            _switch_switch_component__WEBPACK_IMPORTED_MODULE_13__["SwitchComponent"],
            _tab_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
            _table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "xbkw":
/*!****************************************************************************!*\
  !*** ./projects/easy-docs/src/app/components/components-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "9lNX");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge/badge.component */ "m5BC");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.component */ "3+yz");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "4s6I");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.component */ "sYTO");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "GwBh");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress/progress.component */ "6b1d");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider/slider.component */ "U0tO");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinner/spinner.component */ "Etpf");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./switch/switch.component */ "G0n4");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tab/tab.component */ "mTGt");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table/table.component */ "tm1p");















const routes = [
    {
        path: '',
        component: _components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"],
        children: [
            {
                component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
                path: 'alert'
            },
            {
                component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__["BadgeComponent"],
                path: 'badge'
            },
            {
                component: _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"],
                path: 'button'
            },
            {
                component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                path: 'card'
            },
            {
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                path: 'form'
            },
            {
                component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
                path: 'progress'
            },
            {
                component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
                path: 'slider'
            },
            {
                component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
                path: 'spinner'
            },
            {
                component: _switch_switch_component__WEBPACK_IMPORTED_MODULE_12__["SwitchComponent"],
                path: 'switch'
            },
            {
                component: _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__["TabComponent"],
                path: 'tab'
            },
            {
                component: _table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
                path: 'table'
            },
            {
                redirectTo: 'alert',
                pathMatch: 'full',
                path: ''
            }
        ]
    }
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], ComponentsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=projects-easy-docs-src-app-components-components-module.40c1dd474733c21e2387.js.map