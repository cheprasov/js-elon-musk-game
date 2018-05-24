/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.js */ \"./src/game/game.js\");\n/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/event-manager.js */ \"./src/event/event-manager.js\");\n\n\n\n\n\n\n_event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onReady(() => {\n\n    let game = new _game_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        containerId: 'the-game',\n        width: _config_js__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"],\n        height: _config_js__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"]\n    });\n    game.show();\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: GAME_WIDTH, GAME_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 800;\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/event/event-manager.js":
/*!************************************!*\
  !*** ./src/event/event-manager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventManager; });\n\n\nlet eventList = {};\n\nclass EventManager {\n\n    /**\n     * @return {Function}\n     */\n    static getRequestAnimFrame() {\n        if (EventManager.requestAnimFrame) {\n            return EventManager.requestAnimFrame;\n        }\n        if (!window) {\n            EventManager.requestAnimFrame = function (callback) {\n                setTimeout(callback, 1000 / 60);\n            };\n        } else {\n            EventManager.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n                window.setTimeout(callback, 1000 / 60);\n            };\n        }\n        return EventManager.requestAnimFrame;\n    }\n\n    /**\n     * @param {Function} callback\n     * @return {Function}\n     */\n    static requestAnimationFrame(callback) {\n        const render = () => {\n            let time = Date.now();\n            if (callback(time)) {\n                EventManager.getRequestAnimFrame()(render);\n            }\n        };\n        return render;\n    }\n\n    /**\n     * @param {Function} callback\n     */\n    static onReady(callback) {\n        let completed = () => {\n            document.removeEventListener(\"DOMContentLoaded\", completed);\n            window.removeEventListener(\"load\", completed);\n            callback();\n        };\n        if (document.readyState === \"complete\") {\n            completed();\n        } else {\n            document.addEventListener(\"DOMContentLoaded\", completed);\n            window.addEventListener(\"load\", completed);\n        }\n    }\n\n    /**\n     * @param {HTMLElement} container\n     * @param {string} type\n     * @param {string} classSelector\n     * @param {Function} callback\n     */\n    static bind(container, type, classSelector, callback) {\n        container.addEventListener(type, function (e) {\n            if (!classSelector || e.target.classList.contains(classSelector)) {\n                callback(e.target);\n            }\n        });\n    }\n\n    /**\n     * @param {string} action\n     * @param {Function} callback\n     * @param {number} count\n     */\n    static event(action, callback, count = Infinity) {\n        if (!eventList[action]) {\n            eventList[action] = [];\n        }\n        eventList[action].push({\n            callback: callback,\n            count: count\n        });\n    }\n\n    /**\n     * @return {Object}\n     */\n    static getEventList() {\n        return eventList;\n    }\n\n    /**\n     * @param {(string|null)=} event\n     * @return {Object}\n     */\n    static clearEventList(event = null) {\n        if (event) {\n            delete eventList[event];\n        } else {\n            eventList = {};\n        }\n    }\n\n    /**\n     * @param {string} action\n     * @param {*=} data\n     */\n    static trigger(action, data = null) {\n        if (!action) {\n            return;\n        }\n        if (!eventList[action] || !eventList[action].length) {\n            return;\n        }\n        for (let i = 0; i < eventList[action].length; i += 1) {\n            if (eventList[action][i].count-- > 0) {\n                eventList[action][i].callback(data);\n            }\n        }\n        for (let i = eventList[action].length - 1; i >= 0; i -= 1) {\n            if (eventList[action][i].count <= 0) {\n                eventList[action].splice(i, 1);\n            }\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/event/event-manager.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _render_canvas_canvas_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../render/canvas/canvas-render.js */ \"./src/render/canvas/canvas-render.js\");\n/* harmony import */ var _template_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../template/template.js */ \"./src/template/template.js\");\n/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../event/event-manager.js */ \"./src/event/event-manager.js\");\n/* harmony import */ var _sounder_mp3_sounder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../sounder/mp3-sounder.js */ \"./src/sounder/mp3-sounder.js\");\n/* harmony import */ var _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rocket/rocker.js */ \"./src/game/rocket/rocker.js\");\n\n\n\n\n\n\n\n\n\n\nclass Game {\n    /**\n     * @param {Object} config\n     * @private\n     */\n    constructor(config) {\n        this._setConfig(config);\n        this.canvas = null;\n        this.container = null;\n    }\n\n    /**\n     *\n     */\n    show() {\n        this.show = () => {/* only once we can call init method */};\n        this._render();\n        this._bindEvents();\n    }\n\n    /**\n     * @param {Object} config\n     * @private\n     */\n    _setConfig(config) {\n        this.config = config;\n    }\n\n    /**\n     * @return {Object}\n     */\n    _getConfig() {\n        return this.config;\n    }\n\n    /**\n     * @param {RenderInterface} render\n     * @private\n     */\n    _setRender(render) {\n        this.render = render;\n    }\n\n    /**\n     * @return {RenderInterface}\n     * @private\n     */\n    _getRender() {\n        return this.render;\n    }\n\n    _render() {\n        this.container = document.getElementById(this._getConfig().containerId);\n        this.container.innerHTML = _template_template_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        this.canvas = this.container.querySelector('.game-canvas');\n        this.canvas.width = this._getConfig().width;\n        this.canvas.height = this._getConfig().height;\n        this._setRender(new _render_canvas_canvas_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas));\n    }\n\n    _bindEvents() {\n        let container = this.container;\n        _event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(container, 'click', 'js-game-play', () => {\n            container.querySelector('.page-menu').style.display = 'none';\n            container.querySelector('.page-results').style.display = 'none';\n            container.querySelector('.page-game').style.display = 'block';\n            this._create();\n        });\n        container.querySelector('.page-menu').style.display = 'block';\n\n        let mp3 = new _sounder_mp3_sounder_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.container);\n\n        //EventManager.event(EVENT_LOGIC_GAME_OVER, (results) => {\n        //    setTimeout(() => {\n        //        container.querySelector('.page-results').style.display = 'block';\n        //        mp3.sound('win', 1);\n        //    }, 2000);\n        //});\n        //EventManager.event(EVENT_GAME_PLAY, () => {\n        //    mp3.music('bees', 1);\n        //});\n    }\n\n    _getRockets() {\n        let destroys = [null, _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__[\"DESTROY_ON_START\"], _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__[\"DESTROY_BY_UFO\"], _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__[\"DESTROY_BY_ASTEROID\"], _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__[\"DESTROY_ON_LANDING\"]];\n        destroys.sort(() => Math.random() * 100 - 50);\n\n        const rockets = [];\n        let i = 1;\n        for (let destroyId of destroys) {\n            rockets.push(new _rocket_rocker_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](i, destroyId));\n        }\n\n        return rockets;\n    }\n\n    _create() {\n        this.rockets = this._getRockets();\n    }\n}\n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/game/rocket/rocker.js":
/*!***********************************!*\
  !*** ./src/game/rocket/rocker.js ***!
  \***********************************/
/*! exports provided: DESTROY_ON_START, DESTROY_BY_UFO, DESTROY_BY_ASTEROID, DESTROY_ON_LANDING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DESTROY_ON_START\", function() { return DESTROY_ON_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DESTROY_BY_UFO\", function() { return DESTROY_BY_UFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DESTROY_BY_ASTEROID\", function() { return DESTROY_BY_ASTEROID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DESTROY_ON_LANDING\", function() { return DESTROY_ON_LANDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\n/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../event/event-manager.js */ \"./src/event/event-manager.js\");\n\n\n\n\nconst DESTROY_ON_START = 1;\nconst DESTROY_BY_UFO = 2;\nconst DESTROY_BY_ASTEROID = 3;\nconst DESTROY_ON_LANDING = 4;\n\nclass Rocket {\n\n    constructor(number, destroyId = null) {\n        this.number = number;\n        this.destroyId = destroyId;\n    }\n\n    getDestroyId() {\n        return this.destroyId;\n    }\n\n    destroy() {\n        _event_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trigger(ROCKET_DESTROYED, this);\n    }\n}\n\n//# sourceURL=webpack:///./src/game/rocket/rocker.js?");

/***/ }),

/***/ "./src/render/canvas/canvas-render.js":
/*!********************************************!*\
  !*** ./src/render/canvas/canvas-render.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasRender; });\n/* harmony import */ var _render_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../render-interface.js */ \"./src/render/render-interface.js\");\n/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../event/event-manager.js */ \"./src/event/event-manager.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config.js */ \"./src/config.js\");\n/* harmony import */ var _object_explosion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object/explosion.js */ \"./src/render/canvas/object/explosion.js\");\n/* harmony import */ var _object_hit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object/hit.js */ \"./src/render/canvas/object/hit.js\");\n\n\n\n\n\n\n\n\n\n\n//let imageQueenBee = new ImageQueenBee();\n//let imageDroneBee = new ImageDroneBee();\n//let imageWorkerBee = new ImageWorkerBee();\n\nclass CanvasRender extends _render_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    /**\n     * @param {HTMLCanvasElement} canvas\n     */\n    constructor(canvas) {\n        super();\n        this.time = new Date();\n        this.canvas = canvas;\n        this.context = canvas.getContext('2d');\n        this.renderElements = [];\n        //\n        //EventManager.event(EVENT_BEE_IS_DEAD, (bee) => {\n        //    this.renderElements.push({\n        //        type: 'explosion',\n        //        image: new ImageExplosion(),\n        //        position: bee.getPosition(Date.now())\n        //    });\n        //});\n        //\n        //EventManager.event(EVENT_BEE_IS_HITED, (bee) => {\n        //    for (let i = 0; i < this.renderElements.length; i += 1) {\n        //        if (this.renderElements[i].type === 'weapon') {\n        //            this.renderElements.splice(i, 1);\n        //        }\n        //    }\n        //    let pos = bee.getPosition(Date.now());\n        //    this.renderElements.push({\n        //        type: 'hit',\n        //        image: new ImageHit(),\n        //        position: {x: pos.x, y: pos.y}\n        //    });\n        //    let weapon = new ImageFireWeapon();\n        //    this.renderElements.push({\n        //        type: 'weapon',\n        //        image: weapon,\n        //        position: {x: pos.x, y: GAME_HEIGHT - weapon.getHeight() / 2}\n        //    });\n        //});\n    }\n\n    /**\n     * @return {number}\n     * @private\n     */\n    _getTime() {\n        return this.time.getTime();\n    }\n\n    /**\n     * @param {Logic} logic\n     */\n    render(logic) {\n        let render = _event_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requestAnimationFrame(time => {\n            let stop = true;\n            this._clear();\n            let bees = logic.getBees();\n            if (bees.length) {\n                stop = false;\n                for (let i = 0; i < bees.length; i += 1) {\n                    this._renderBee(time, bees[i]);\n                }\n            }\n            if (this.renderElements.length) {\n                stop = false;\n                for (let i = 0; i < this.renderElements.length; i += 1) {\n                    if (this._renderElement(time, this.renderElements[i])) {\n                        this.renderElements.splice(i--, 1);\n                    }\n                }\n            }\n            return !stop;\n        });\n        render();\n    }\n\n    _clear() {\n        this.context.clearRect(-1, -1, this.canvas.width + 3, this.canvas.height + 3);\n    }\n\n    _renderElement(time, element) {\n        this.context.save();\n        this.context.translate(element.position.x, element.position.y);\n        let result = element.image.render(this.context, time);\n        this.context.restore();\n        return !result;\n    }\n\n    /**\n     * @param {number} time\n     * @param {BeeInterface} bee\n     * @private\n     */\n    _renderBee(time, bee) {\n        let position = bee.getPosition(time);\n        let rotate = bee.getRotate(time);\n\n        let imageBee;\n\n        if (bee instanceof QueenBee) {\n            imageBee = imageQueenBee;\n        } else if (bee instanceof WorkerBee) {\n            imageBee = imageWorkerBee;\n        } else if (bee instanceof DroneBee) {\n            imageBee = imageDroneBee;\n        } else {\n            throw new Error('Image for bee is not found');\n        }\n\n        let angle = rotate * (Math.PI / 180);\n        this.context.save();\n        this.context.translate(position.x, position.y);\n        this.context.rotate(angle);\n        imageBee.render(this.context, time);\n        this.context.restore();\n\n        this.context.save();\n        this.context.translate(position.x, position.y);\n        this._renderBeeHealt(bee, imageBee);\n        this.context.restore();\n    }\n\n    /**\n     * @param {BeeInterface} bee\n     * @param {ImageClass} imageBee\n     * @private\n     */\n    _renderBeeHealt(bee, imageBee) {\n        let health = bee.getHealth() / bee.getMaxHealth();\n        let y = imageBee.getScale() * imageBee.getHeight() * 0.40;\n\n        let w = bee.getMaxHealth() / 2;\n        let l = bee.getHealth() / 2;\n\n        this.context.fillStyle = '#ffffff';\n        this.context.fillRect(-w / 2 - 1, y - 1, w + 2, 7);\n\n        this.context.fillStyle = '#eb212e';\n        this.context.globalAlpha = 0.25;\n        this.context.fillRect(-w / 2, y, w, 5);\n\n        this.context.globalAlpha = 1;\n        this.context.fillRect(-w / 2, y, l, 5);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/render/canvas/canvas-render.js?");

/***/ }),

/***/ "./src/render/canvas/object/explosion.js":
/*!***********************************************!*\
  !*** ./src/render/canvas/object/explosion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Explosion; });\n/* harmony import */ var _image_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-class.js */ \"./src/render/canvas/object/image-class.js\");\n\n\n\n\nclass Explosion extends _image_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super({\n            image: 'imgs/explosion.png',\n            width: 100,\n            height: 100,\n            scale: 1,\n            loop: 1,\n            sprites: {\n                grid: { cols: 9, rows: 8 },\n                count: 72,\n                speed: 500\n            }\n        });\n    }\n\n}\n\n//# sourceURL=webpack:///./src/render/canvas/object/explosion.js?");

/***/ }),

/***/ "./src/render/canvas/object/hit.js":
/*!*****************************************!*\
  !*** ./src/render/canvas/object/hit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hit; });\n/* harmony import */ var _image_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-class.js */ \"./src/render/canvas/object/image-class.js\");\n\n\n\n\nclass Hit extends _image_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super({\n            image: 'imgs/light.png',\n            width: 192,\n            height: 192,\n            scale: 0.5,\n            loop: 1,\n            sprites: {\n                grid: { cols: 5, rows: 5 },\n                count: 21,\n                speed: 500\n            }\n        });\n    }\n\n}\n\n//# sourceURL=webpack:///./src/render/canvas/object/hit.js?");

/***/ }),

/***/ "./src/render/canvas/object/image-class.js":
/*!*************************************************!*\
  !*** ./src/render/canvas/object/image-class.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageClass; });\n\n\nclass ImageClass {\n\n    constructor(options) {\n        this.setImage(options.image);\n        this.setSize(options.width, options.height);\n\n        if ('sprites' in options) {\n            this.setSprites(options.sprites);\n        }\n\n        this.scale = options.scale || 1;\n        this.loop = options.loop || Infinity;\n    }\n\n    setSize(width, height) {\n        this.width = width || 0;\n        this.height = height || 0;\n    }\n\n    getWidth() {\n        return this.width;\n    }\n\n    getHeight() {\n        return this.height;\n    }\n\n    getScale() {\n        return this.scale;\n    }\n\n    setSprites(sprites) {\n        this.sprites = {\n            loops: sprites.loops || 1,\n            speed: sprites.speed || 1,\n            count: sprites.count || 1,\n            frames: sprites.frames || [],\n            _time: 0\n        };\n        this.sprites.rate = this.sprites.speed / this.sprites.count;\n        if (sprites && sprites.grid && sprites.grid.cols && sprites.grid.rows) {\n            let count = 0;\n            for (let rows = 0; rows < sprites.grid.rows; rows += 1) {\n                for (let cols = 0; cols < sprites.grid.cols; cols += 1) {\n                    if (count < this.sprites.count) {\n                        this.sprites.frames.push({\n                            x: cols * this.width + (sprites.grid.x || 0),\n                            y: rows * this.height + (sprites.grid.y || 0)\n                        });\n                        count += 1;\n                    }\n                }\n            }\n        }\n    }\n\n    /**\n     * @param {string} img\n     */\n    setImage(img) {\n        this.image = null;\n        let image = new Image();\n        image.onload = () => {\n            this.image = image;\n        };\n        image.src = img;\n    }\n\n    /**\n     * @param {CanvasRenderingContext2D} context\n     * @param {float} time\n     * @return {boolean}\n     */\n    render(context, time) {\n        if (!this.image) {\n            return true;\n        }\n        if (this.loop <= 0) {\n            return false;\n        }\n        if (this.scale && this.scale !== 1) {\n            context.scale(this.scale, this.scale);\n        }\n        if (this.sprites) {\n            if (!this.sprites._time) {\n                this.lastIndex = -1;\n                this.sprites._time = time;\n            }\n            let delta = time - this.sprites._time;\n            let index = Math.floor(delta % this.sprites.speed / this.sprites.rate);\n            if (index < this.lastIndex) {\n                if (--this.loop <= 0) {\n                    return false;\n                }\n            }\n            this.lastIndex = index;\n            let frame = this.sprites.frames[index];\n            context.drawImage(this.image, frame.x, frame.y, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);\n        } else {\n            context.drawImage(this.image, 0, 0, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);\n        }\n        return true;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/render/canvas/object/image-class.js?");

/***/ }),

/***/ "./src/render/render-interface.js":
/*!****************************************!*\
  !*** ./src/render/render-interface.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RenderInterface; });\n\n\nclass RenderInterface {\n\n  /**\n   * @param {Logic} logic\n   */\n  render(logic) {}\n\n}\n\n//# sourceURL=webpack:///./src/render/render-interface.js?");

/***/ }),

/***/ "./src/sounder/mp3-sounder.js":
/*!************************************!*\
  !*** ./src/sounder/mp3-sounder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mp3Sounder; });\n/* harmony import */ var _sounder_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounder-interface.js */ \"./src/sounder/sounder-interface.js\");\n/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../event/event-manager.js */ \"./src/event/event-manager.js\");\n\n\n\n\n\nclass Mp3Sounder extends _sounder_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    /**\n     * @param {HTMLElement} container\n     */\n    constructor(container) {\n        super();\n        this.container = container;\n\n        let elements = this.container.querySelectorAll('.sound');\n        let element;\n        for (let i = 0; i < elements.length; i += 1) {\n            element = elements[i];\n            _event_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(element, 'play', false, element => {\n                element.classList.add('playing');\n            });\n            _event_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(element, 'ended', false, element => {\n                element.classList.remove('playing');\n            });\n        }\n    }\n\n    /**\n     * @inheritDoc\n     */\n    sound(name, volume = 1) {\n        let element = this.container.querySelector('.sound.sound-' + name + ':not(.playing)');\n        if (element) {\n            element.volume = volume || 1;\n            element.play();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/sounder/mp3-sounder.js?");

/***/ }),

/***/ "./src/sounder/sounder-interface.js":
/*!******************************************!*\
  !*** ./src/sounder/sounder-interface.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SounderInterface; });\n\n\nclass SounderInterface {\n\n  /**\n   * @param {string} name\n   * @param {number} volume\n   */\n  sound(name, volume) {}\n\n  /**\n   * @param {string} name\n   * @param {number=} volume\n   * @param {boolean=} play\n   */\n  music(name, volume = 1, play = true) {}\n}\n\n//# sourceURL=webpack:///./src/sounder/sounder-interface.js?");

/***/ }),

/***/ "./src/template/template.js":
/*!**********************************!*\
  !*** ./src/template/template.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet template = `\n    <div class=\"game\">\n\n        <div class=\"page page-game\">\n            <canvas class=\"game-canvas\"></canvas>\n            <button class=\"button button-hit js-game-hit-bee\">Hit Bee</button>\n        </div>\n\n        <div class=\"page page-results\">\n            <button class=\"button button-replay js-game-play\">Replay</button>\n        </div>\n\n        <div class=\"page page-menu\">\n            <div class=\"title\">\n                Help Elon Musk to made history launching a car to Mars\n            </div>\n            <button class=\"button button-start js-game-play\">Play</button>\n        </div>\n\n        <div class=\"sounds\" style=\"display: none\">\n            <audio controls class=\"music music-bees\" loop>\n                <source src=\"mp3/bees.mp3\" />\n            </audio>\n\n            <audio controls class=\"sound sound-win\">\n                <source src=\"mp3/win.mp3\" />\n            </audio>\n\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-shotgun\">\n                <source src=\"mp3/shotgun.mp3\" />\n            </audio>\n\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n            <audio controls class=\"sound sound-bomb\">\n                <source src=\"mp3/bomb.mp3\" />\n            </audio>\n        </div>\n    </div>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (template);\n\n//# sourceURL=webpack:///./src/template/template.js?");

/***/ })

/******/ });