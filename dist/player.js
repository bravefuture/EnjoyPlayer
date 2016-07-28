(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Enjoy", [], factory);
	else if(typeof exports === 'object')
		exports["Enjoy"] = factory();
	else
		root["Enjoy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _player = __webpack_require__(1);

	var _player2 = _interopRequireDefault(_player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(62);
	exports.default = { Player: _player2.default };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _video_html = __webpack_require__(2);

	var _video_html2 = _interopRequireDefault(_video_html);

	var _events = __webpack_require__(11);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = function (_Events) {
		_inherits(Player, _Events);

		function Player(selector, args) {
			_classCallCheck(this, Player);

			// 取dom
			var $el = selector instanceof $ ? selector : $(selector);
			// 取参数
			args = $.extend({
				width: 800,
				height: 450,
				autoPlay: false,
				controlsHeight: 44,
				poster: '',
				volume: 0.5,
				loop: false,
				preload: 'metadata',
				prev: {
					has: false,
					callback: function callback() {}
				},
				next: {
					has: false,
					callback: function callback() {}
				}
			}, args || {});
			// 渲染结构
			$el.html((0, _video_html2.default)({
				width: args.width,
				height: args.height,
				controlsHeight: args.controlsHeight,
				poster: args.poster,
				hasPrev: args.prev.has,
				hasNext: args.next.has
			}));
			// 调用父类Events的constructor
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, $el, args));
		}

		_createClass(Player, [{
			key: 'version',
			get: function get() {
				return '1.0.0';
			}
		}]);

		return Player;
	}(_events2.default);

	exports.default = Player;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _play = __webpack_require__(3);

	var _play2 = _interopRequireDefault(_play);

	var _pause = __webpack_require__(4);

	var _pause2 = _interopRequireDefault(_pause);

	var _muted = __webpack_require__(5);

	var _muted2 = _interopRequireDefault(_muted);

	var _not_muted = __webpack_require__(6);

	var _not_muted2 = _interopRequireDefault(_not_muted);

	var _prev = __webpack_require__(7);

	var _prev2 = _interopRequireDefault(_prev);

	var _next = __webpack_require__(8);

	var _next2 = _interopRequireDefault(_next);

	var _fullscreen = __webpack_require__(9);

	var _fullscreen2 = _interopRequireDefault(_fullscreen);

	var _exit_fullscreen = __webpack_require__(10);

	var _exit_fullscreen2 = _interopRequireDefault(_exit_fullscreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [videoHTML 返回video结构]
	 * @param  {[type]} args     [description]
	 * @return {[type]}          [description]
	 */
	var videoHTML = function videoHTML() {
		var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var enjoyPlayerPlayBtn = '<i class="enjoy-player-play-btn">' + _play2.default + '</i>';
		var enjoyPlayerPauseBtn = '<i class="enjoy-player-pause-btn">' + _pause2.default + '</i>';
		var enjoyPlayerPrevBtn = '<i class="enjoy-player-prev-btn">' + _prev2.default + '</i>';
		var enjoyPlayerNextBtn = '<i class="enjoy-player-next-btn">' + _next2.default + '</i>';


		enjoyPlayerPrevBtn = args.hasPrev === false ? '' : enjoyPlayerPrevBtn;
		enjoyPlayerNextBtn = args.hasNext === false ? '' : enjoyPlayerNextBtn;

		return '<div class="enjoy-player-wrap" style="width:' + args.width + 'px;height:' + (args.height + args.controlsHeight) + 'px;">\n\t\t\t\t<div class="enjoy-player-loading">loading...</div>\n\t\t\t\t<video class="enjoy-player-video" poster="' + args.poster + '" width="' + args.width + '" height="' + args.height + '"></video>\n\t\t\t\t<div class="enjoy-player-bar-bg">\n\t\t\t\t\t<div class="enjoy-player-buffered"></div>\n\t\t\t\t\t<div class="enjoy-player-played"></div>\n\t\t\t\t\t<div class="enjoy-player-bar-point"><i></i></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="enjoy-player-controls" style="height:' + args.controlsHeight + 'px">\n\t\t\t\t\t' + enjoyPlayerPrevBtn + '\n\t\t\t\t\t' + enjoyPlayerPlayBtn + '\n\t\t\t\t\t' + enjoyPlayerPauseBtn + '\n\t\t\t\t\t' + enjoyPlayerNextBtn + '\n\t\t\t\t\t<span class="enjoy-player-progress"><i class="enjoy-player-postion"></i> | <i class="enjoy-player-duration"></i></span>\n\t\t\t\t\t<i class="enjoy-player-fullscreen">' + _fullscreen2.default + '</i>\n\t\t\t\t\t<i class="enjoy-player-exit-fullscreen">' + _exit_fullscreen2.default + '</i>\n\t\t\t\t\t<span class="enjoy-player-volume">\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t<i></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class="enjoy-player-muted">' + _not_muted2.default + '</i>\t\t\t\t\t\n\t\t\t\t\t<i class="enjoy-player-has-muted">' + _muted2.default + '</i>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>';
	};
	exports.default = videoHTML;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M6 4l20 12-20 12z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M4 4h10v24h-10zM18 4h10v24h-10z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z\" style=\"fill:white;\"></path><path d=\"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z\" style=\"fill:white;\"></path><path d=\"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M4 28v-24h4v11l10-10v10l10-10v22l-10-10v10l-10-10v11z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\"><path d=\"M28 4v24h-4v-11l-10 10v-10l-10 10v-22l10 10v-10l10 10v-11z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\"><g></g><path d=\"M512 0v208l-80-80-96 96-48-48 96-96-80-80zM224 336l-96 96 80 80h-208v-208l80 80 96-96z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\"><g id=\"icomoon-ignore\"></g><path d=\"M224 288v208l-80-80-96 96-48-48 96-96-80-80zM512 48l-96 96 80 80h-208v-208l80 80 96-96z\" style=\"fill:white;\"></path></svg>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _time_format = __webpack_require__(12);

	var _time_format2 = _interopRequireDefault(_time_format);

	var _browser = __webpack_require__(13);

	var _browser2 = _interopRequireDefault(_browser);

	var _can_play = __webpack_require__(14);

	var _can_play2 = _interopRequireDefault(_can_play);

	var _controls = __webpack_require__(61);

	var _controls2 = _interopRequireDefault(_controls);

	var _hls = __webpack_require__(15);

	var _hls2 = _interopRequireDefault(_hls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Events = function (_Controls) {
		_inherits(Events, _Controls);

		function Events($el, args) {
			_classCallCheck(this, Events);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Events).call(this, $el));
			// 调用父类Controls的constructor


			_this.$el = $el;
			_this.el = $el.get(0);
			_this.video = $el.find('video').get(0);
			_this.args = args;

			_this.getDom();
			_this.getW();
			_this.bindEvents();
			return _this;
		}
		// 取dom


		_createClass(Events, [{
			key: 'getDom',
			value: function getDom() {
				this.$playBtn = this.$el.find('.enjoy-player-play-btn');
				this.$pauseBtn = this.$el.find('.enjoy-player-pause-btn');
				this.$postionTime = this.$el.find('.enjoy-player-postion');
				this.$durationTime = this.$el.find('.enjoy-player-duration');
				this.$barBg = this.$el.find('.enjoy-player-bar-bg');
				this.$barPoint = this.$el.find('.enjoy-player-bar-point');
				this.$barBuffered = this.$el.find('.enjoy-player-buffered');
				this.$barPlayed = this.$el.find('.enjoy-player-played');
				this.$chooseVolume = this.$el.find('.enjoy-player-volume');
				this.$muted = this.$el.find('.enjoy-player-muted');
				this.$fullscreen = this.$el.find('.enjoy-player-fullscreen');
				this.$exitFullscreen = this.$el.find('.enjoy-player-exit-fullscreen');
				this.$wrap = this.$el.find('.enjoy-player-wrap');
				this.$hasMuted = this.$el.find('.enjoy-player-has-muted');
				this.$loading = this.$el.find('.enjoy-player-loading');
			}
			// 取dom宽度

		}, {
			key: 'getW',
			value: function getW() {
				this.barBgW = this.$barBg.width();
				this.barPointW = this.$barPoint.width();
			}
		}, {
			key: 'bindResize',
			value: function bindResize() {
				var _this2 = this;

				var timer = void 0;
				$(window).on('resize.enjoyPlayer', function () {
					timer = setTimeout(function () {
						if (timer) {
							clearTimeout(timer);
						}
						_this2.getW();
					}, 200);
				});
			}
		}, {
			key: 'bindEvents',
			value: function bindEvents() {
				this.bindHLS();
				this.bindAutoPlay();
				this.bindPlay();
				this.bindPause();
				this.bindDuration();
				this.bindNextVideo();
				this.bindPrevVideo();
				this.bindSeekDrag();
				this.bindSeekChoose();
				this.bindBuffered();
				this.bindEnded();
				this.bindChooseVolume();
				this.bindMuted();
				this.bindFullscreen();
				this.bindExitFullscreen();
				this.bindResize();
				this.bindBuffering();
				this.bindLoop();
				this.bindPreload();
			}
			// 源是否为m3u8格式

		}, {
			key: 'bindHLS',
			value: function bindHLS() {
				var _this3 = this;

				if (_can_play2.default.Hls(this.args.src)) {
					var hls = new _hls2.default();
					hls.attachMedia(this.video);
					hls.on(_hls2.default.Events.MEDIA_ATTACHED, function () {
						hls.loadSource(_this3.args.src);
					});
				} else {
					this.src = this.args.src;
				}
			}
			// 是否自动播放

		}, {
			key: 'bindAutoPlay',
			value: function bindAutoPlay() {
				if (this.args.autoPlay === true) {
					this.$playBtn.hide();
					this.$pauseBtn.css('display', 'inline-block');
				}
				this.autoplay = this.args.autoPlay;
				this.load();
			}
			// 是否循环播放

		}, {
			key: 'bindLoop',
			value: function bindLoop() {
				if (this.args.loop === true) {
					this.loop = true;
				}
			}
			// 视频是否应该在页面加载后进行加载

		}, {
			key: 'bindPreload',
			value: function bindPreload() {
				this.preload = this.args.preload;
			}
			// 播放

		}, {
			key: 'bindPlay',
			value: function bindPlay() {
				var _this4 = this;

				this.$playBtn.on('click', function () {
					_this4.$playBtn.hide();
					_this4.$pauseBtn.css('display', 'inline-block');
					_this4.play();
				});
			}
			// 停止

		}, {
			key: 'bindPause',
			value: function bindPause() {
				var _this5 = this;

				this.$pauseBtn.on('click', function () {
					_this5.$playBtn.css('display', 'inline-block');
					_this5.$pauseBtn.hide();
					_this5.pause();
				});
			}
			// 播放结束

		}, {
			key: 'bindEnded',
			value: function bindEnded() {
				var _this6 = this;

				this.endedEvent(function () {
					_this6.$playBtn.css('display', 'inline-block');
					_this6.$pauseBtn.hide();
				});
			}
			// 播放时间

		}, {
			key: 'bindDuration',
			value: function bindDuration() {
				var _this7 = this;

				// 提示视频的元数据已加载
				this.loadedmetadata(function () {
					_this7.$durationTime.html((0, _time_format2.default)(_this7.duration));
				});
				// 默认值
				this.$postionTime.html((0, _time_format2.default)(this.currentTime));
				// 当目前的播放位置已更改时
				this.timeupdate(function () {
					_this7.$postionTime.html((0, _time_format2.default)(_this7.currentTime));
					_this7.bindProgress();
					_this7.isShowLoading = false;
				});
			}
			// 下一个视频

		}, {
			key: 'bindNextVideo',
			value: function bindNextVideo() {
				var _this8 = this;

				if (this.args.next.has === true) {
					this.$nextBtn = $('.enjoy-player-next-btn');
					this.$nextBtn.on('click', function () {
						_this8.args.next.callback(_this8);
					});
				}
			}
			// 上一个视频

		}, {
			key: 'bindPrevVideo',
			value: function bindPrevVideo() {
				var _this9 = this;

				if (this.args.prev.has === true) {
					this.$prevBtn = $('.enjoy-player-prev-btn');
					this.$prevBtn.on('click', function () {
						_this9.args.prev.callback(_this9);
					});
				}
			}
			// 播放进度

		}, {
			key: 'bindProgress',
			value: function bindProgress() {
				var played = this.currentTime / this.duration * this.barBgW - this.barPointW / 2;
				this.$barPoint.css('left', played);
				this.$barPlayed.width(played);
			}
		}, {
			key: 'bindSeek',
			value: function bindSeek(e) {
				var barBgOL = this.$barBg.offset().left,
				    left = e.pageX - barBgOL - this.barPointW / 2;
				left = Math.max(Math.min(left, this.barBgW - this.barPointW / 2), -this.barPointW / 2);
				this.$barPoint.css('left', left);
				//设置播放进度
				this.currentTime = (left + this.barPointW / 2) * this.duration / this.barBgW;
			}
			// 拖拉进度

		}, {
			key: 'bindSeekDrag',
			value: function bindSeekDrag() {
				var _this10 = this;

				var $doc = $(document);
				this.$barPoint.on('mousedown.enjoyPlayer', function (e) {
					$doc.on('mousemove.enjoyPlayer', function (e) {
						e.preventDefault();
						_this10.bindSeek(e);
					});
					$doc.on('mouseup.enjoyPlayer', function () {
						$doc.off('mousemove.enjoyPlayer');
					});
				});
			}
			// 点击进度条

		}, {
			key: 'bindSeekChoose',
			value: function bindSeekChoose() {
				var _this11 = this;

				this.$barBg.on('click', function (e) {
					e.preventDefault();
					_this11.bindSeek(e);
				});
			}
			// 选择音量

		}, {
			key: 'bindChooseVolume',
			value: function bindChooseVolume() {
				var _self = this;
				this.$i = this.$chooseVolume.find('i');
				var iLen = this.$i.length;
				this.args.volume = Math.max(Math.min(this.args.volume, 1), 0);
				this.volume = this.args.volume;
				// 选择音量
				this.$chooseVolume.on('click', 'i', function () {
					var index = $(this).index();
					_self.$hasMuted.trigger('click');
					for (var i = 0; i < iLen; i++) {
						if (i <= index) {
							_self.$i.eq(i).addClass('enjoy-player-volume-choosed');
						} else {
							_self.$i.eq(i).removeClass('enjoy-player-volume-choosed');
						}
					}
					_self.volume = index / iLen;
				});
				// 默认音量
				if (this.args.volume !== 0) {
					this.$i.eq(Math.round(this.args.volume * iLen) - 1).trigger('click');
				}
			}
			// 设置静音

		}, {
			key: 'bindMuted',
			value: function bindMuted() {
				var _this12 = this;

				this.$muted.on('click', function () {
					_this12.muted = true;
					_this12.$muted.hide();
					_this12.$hasMuted.css('display', 'inline-block');
					_this12.$i.addClass('enjoy-player-volume-muted');
				});
				this.$hasMuted.on('click', function () {
					_this12.muted = false;
					_this12.$muted.css('display', 'inline-block');
					_this12.$hasMuted.hide();
					_this12.$i.removeClass('enjoy-player-volume-muted');
				});
			}
			// 缓冲

		}, {
			key: 'bindBuffered',
			value: function bindBuffered() {
				var _this13 = this;

				this.progress(function () {
					if (!_this13.buffered.length) {
						return;
					}
					var bufferedIndex = 0;
					for (var i = 0; i < _this13.buffered.length; i++) {
						if (_this13.currentTime >= _this13.buffered.start(i) && _this13.currentTime < _this13.buffered.end(i)) {
							bufferedIndex = i;
							break;
						}
					}
					_this13.$barBuffered.css({
						left: _this13.buffered.start(bufferedIndex) / _this13.duration * _this13.barBgW,
						width: _this13.buffered.end(bufferedIndex) / _this13.duration * _this13.barBgW - _this13.buffered.start(bufferedIndex) / _this13.duration * _this13.barBgW
					});
				});
			}
			// 全屏

		}, {
			key: 'bindFullscreen',
			value: function bindFullscreen() {
				var _this14 = this;

				this.$fullscreen.on('click', function () {
					_this14.judgeFullscreen();
					_this14.$wrap.addClass('enjoy-player-has-fullscreen');
					_this14.$exitFullscreen.css('display', 'inline-block');
					_this14.$fullscreen.hide();
				});
			}
			// 判断全屏

		}, {
			key: 'judgeFullscreen',
			value: function judgeFullscreen() {
				if (this.el.requestFullscreen) {
					this.el.requestFullscreen();
				} else if (this.el.webkitRequestFullscreen) {
					this.el.webkitRequestFullscreen();
				} else if (this.el.mozRequestFullScreen) {
					this.el.mozRequestFullScreen();
				} else if (this.el.msRequestFullscreen) {
					this.video.msRequestFullscreen();
				} else if (this.el.querySelector && this.el.querySelector('video') && this.el.querySelector('video').webkitEnterFullScreen) {
					this.el.querySelector('video').webkitEnterFullScreen();
				}
			}
			// 退出全屏

		}, {
			key: 'bindExitFullscreen',
			value: function bindExitFullscreen() {
				var _this15 = this;

				this.$exitFullscreen.on('click', function () {
					_this15.judgeExitFullscreen();
					_this15.$wrap.removeClass('enjoy-player-has-fullscreen');
					_this15.$exitFullscreen.hide();
					_this15.$fullscreen.css('display', 'inline-block');
				});
			}
			// 判断退出全屏

		}, {
			key: 'judgeExitFullscreen',
			value: function judgeExitFullscreen() {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
			// 缓冲中

		}, {
			key: 'bindBuffering',
			value: function bindBuffering() {
				var _this16 = this;

				this.isShowLoading = true;
				this.canplay(function () {
					_this16.isShowLoading = true;
				});
				var prevTime = 0,
				    currentTime = 0;
				setInterval(function () {
					currentTime = _this16.currentTime;
					if (prevTime === currentTime) {
						_this16.isShowLoading = true;
					}
					prevTime = currentTime;
					if (_this16.isShowLoading === true && !_this16.paused && !_this16.ended) {
						_this16.$loading.show();
					} else {
						_this16.$loading.hide();
					}
				}, 100);
			}
		}]);

		return Events;
	}(_controls2.default);

	exports.default = Events;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * [补零]
	 * @param  {[type]} value [description]
	 * @return {[type]}       [description]
	 */
	var zerofill = function zerofill(value) {
	  value = value + '';
	  return value.length > 1 ? value : '0' + value;
	};
	/**
	 * [格式化时间]
	 * @param  {Number} time [description]
	 * @return {[type]}      [description]
	 */
	var TimeFormat = function TimeFormat() {
	  var time = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	  time = parseInt(time);
	  var hours = parseInt(time / 3600);
	  var minutes = parseInt(time / 60 % 60);
	  var seconds = time % 60;

	  hours = hours === 0 ? '' : zerofill(hours) + ':';
	  time = hours + zerofill(minutes) + ':' + zerofill(seconds);
	  return time;
	};

	exports.default = TimeFormat;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * [Browser 判断浏览器]
	 * @type {Object}
	 */
	var Browser = {},
	    nu = navigator.userAgent;

	Browser.isSafari = /safari/i.test(nu) && nu.indexOf('Chrome') === -1;
	Browser.isChrome = /chrome/i.test(nu);
	Browser.isFirefox = /firefox/i.test(nu);
	Browser.isIE11 = /trident.*rv:11/i.test(nu);
	Browser.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(nu);
	Browser.isIOS = /iPad|iPhone|iPod/i.test(nu);
	Browser.isAndroid = /Android/i.test(nu);

	exports.default = Browser;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _browser = __webpack_require__(13);

	var _browser2 = _interopRequireDefault(_browser);

	var _hls = __webpack_require__(15);

	var _hls2 = _interopRequireDefault(_hls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CanPlay = {};

	CanPlay.Hls = function (source) {
	  var sourceParts = source.split('?')[0].match(/.*\.(.*)$/) || [],
	      isHls = sourceParts.length > 1 && sourceParts[1] === 'm3u8';
	  return !!(_hls2.default.isSupported() && isHls && !_browser2.default.isIOS);
	};

	exports.default = CanPlay;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This is mostly for support of the es6 module export
	// syntax with the babel compiler, it looks like it doesnt support
	// function exports like we are used to in node/commonjs
	module.exports = __webpack_require__(16).default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * HLS interface
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _errors = __webpack_require__(18);

	var _playlistLoader = __webpack_require__(19);

	var _playlistLoader2 = _interopRequireDefault(_playlistLoader);

	var _fragmentLoader = __webpack_require__(24);

	var _fragmentLoader2 = _interopRequireDefault(_fragmentLoader);

	var _abrController = __webpack_require__(25);

	var _abrController2 = _interopRequireDefault(_abrController);

	var _bufferController = __webpack_require__(29);

	var _bufferController2 = _interopRequireDefault(_bufferController);

	var _capLevelController = __webpack_require__(30);

	var _capLevelController2 = _interopRequireDefault(_capLevelController);

	var _audioStreamController = __webpack_require__(31);

	var _audioStreamController2 = _interopRequireDefault(_audioStreamController);

	var _streamController = __webpack_require__(52);

	var _streamController2 = _interopRequireDefault(_streamController);

	var _levelController = __webpack_require__(53);

	var _levelController2 = _interopRequireDefault(_levelController);

	var _timelineController = __webpack_require__(54);

	var _timelineController2 = _interopRequireDefault(_timelineController);

	var _fpsController = __webpack_require__(57);

	var _fpsController2 = _interopRequireDefault(_fpsController);

	var _audioTrackController = __webpack_require__(58);

	var _audioTrackController2 = _interopRequireDefault(_audioTrackController);

	var _logger = __webpack_require__(21);

	var _xhrLoader = __webpack_require__(59);

	var _xhrLoader2 = _interopRequireDefault(_xhrLoader);

	var _events3 = __webpack_require__(45);

	var _events4 = _interopRequireDefault(_events3);

	var _keyLoader = __webpack_require__(60);

	var _keyLoader2 = _interopRequireDefault(_keyLoader);

	var _cues = __webpack_require__(56);

	var _cues2 = _interopRequireDefault(_cues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hls = function () {
	  _createClass(Hls, null, [{
	    key: 'isSupported',
	    value: function isSupported() {
	      return window.MediaSource && typeof window.MediaSource.isTypeSupported === 'function' && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
	    }
	  }, {
	    key: 'version',
	    get: function get() {
	      // replaced with browserify-versionify transform
	      return '__VERSION__';
	    }
	  }, {
	    key: 'Events',
	    get: function get() {
	      return _events2.default;
	    }
	  }, {
	    key: 'ErrorTypes',
	    get: function get() {
	      return _errors.ErrorTypes;
	    }
	  }, {
	    key: 'ErrorDetails',
	    get: function get() {
	      return _errors.ErrorDetails;
	    }
	  }, {
	    key: 'DefaultConfig',
	    get: function get() {
	      if (!Hls.defaultConfig) {
	        Hls.defaultConfig = {
	          autoStartLoad: true,
	          startPosition: -1,
	          debug: false,
	          capLevelOnFPSDrop: false,
	          capLevelToPlayerSize: false,
	          maxBufferLength: 30,
	          maxBufferSize: 60 * 1000 * 1000,
	          maxBufferHole: 0.5,
	          maxSeekHole: 2,
	          seekHoleNudgeDuration: 0.01,
	          stalledInBufferedNudgeThreshold: 10,
	          maxFragLookUpTolerance: 0.2,
	          liveSyncDurationCount: 3,
	          liveMaxLatencyDurationCount: Infinity,
	          liveSyncDuration: undefined,
	          liveMaxLatencyDuration: undefined,
	          maxMaxBufferLength: 600,
	          enableWorker: true,
	          enableSoftwareAES: true,
	          manifestLoadingTimeOut: 10000,
	          manifestLoadingMaxRetry: 1,
	          manifestLoadingRetryDelay: 1000,
	          levelLoadingTimeOut: 10000,
	          levelLoadingMaxRetry: 4,
	          levelLoadingRetryDelay: 1000,
	          fragLoadingTimeOut: 20000,
	          fragLoadingMaxRetry: 6,
	          fragLoadingRetryDelay: 1000,
	          fragLoadingLoopThreshold: 3,
	          startFragPrefetch: false,
	          fpsDroppedMonitoringPeriod: 5000,
	          fpsDroppedMonitoringThreshold: 0.2,
	          appendErrorMaxRetry: 3,
	          loader: _xhrLoader2.default,
	          fLoader: undefined,
	          pLoader: undefined,
	          abrController: _abrController2.default,
	          bufferController: _bufferController2.default,
	          capLevelController: _capLevelController2.default,
	          fpsController: _fpsController2.default,
	          streamController: _streamController2.default,
	          audioStreamController: _audioStreamController2.default,
	          timelineController: _timelineController2.default,
	          cueHandler: _cues2.default,
	          enableCEA708Captions: true,
	          enableMP2TPassThrough: false,
	          stretchShortVideoTrack: false,
	          abrEwmaFastLive: 5,
	          abrEwmaSlowLive: 9,
	          abrEwmaFastVoD: 4,
	          abrEwmaSlowVoD: 15,
	          abrEwmaDefaultEstimate: 5e5, // 500 kbps
	          abrBandWidthFactor: 0.8,
	          abrBandWidthUpFactor: 0.7
	        };
	      }
	      return Hls.defaultConfig;
	    },
	    set: function set(defaultConfig) {
	      Hls.defaultConfig = defaultConfig;
	    }
	  }]);

	  function Hls() {
	    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Hls);

	    var defaultConfig = Hls.DefaultConfig;

	    if ((config.liveSyncDurationCount || config.liveMaxLatencyDurationCount) && (config.liveSyncDuration || config.liveMaxLatencyDuration)) {
	      throw new Error('Illegal hls.js config: don\'t mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration');
	    }

	    for (var prop in defaultConfig) {
	      if (prop in config) {
	        continue;
	      }
	      config[prop] = defaultConfig[prop];
	    }

	    if (config.liveMaxLatencyDurationCount !== undefined && config.liveMaxLatencyDurationCount <= config.liveSyncDurationCount) {
	      throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
	    }

	    if (config.liveMaxLatencyDuration !== undefined && (config.liveMaxLatencyDuration <= config.liveSyncDuration || config.liveSyncDuration === undefined)) {
	      throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
	    }

	    (0, _logger.enableLogs)(config.debug);
	    this.config = config;
	    // observer setup
	    var observer = this.observer = new _events4.default();
	    observer.trigger = function trigger(event) {
	      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        data[_key - 1] = arguments[_key];
	      }

	      observer.emit.apply(observer, [event, event].concat(data));
	    };

	    observer.off = function off(event) {
	      for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        data[_key2 - 1] = arguments[_key2];
	      }

	      observer.removeListener.apply(observer, [event].concat(data));
	    };
	    this.on = observer.on.bind(observer);
	    this.off = observer.off.bind(observer);
	    this.trigger = observer.trigger.bind(observer);
	    this.playlistLoader = new _playlistLoader2.default(this);
	    this.fragmentLoader = new _fragmentLoader2.default(this);
	    this.levelController = new _levelController2.default(this);
	    this.abrController = new config.abrController(this);
	    this.bufferController = new config.bufferController(this);
	    this.capLevelController = new config.capLevelController(this);
	    this.fpsController = new config.fpsController(this);
	    this.streamController = new config.streamController(this);
	    this.audioStreamController = new config.audioStreamController(this);
	    this.timelineController = new config.timelineController(this);
	    this.audioTrackController = new _audioTrackController2.default(this);
	    this.keyLoader = new _keyLoader2.default(this);
	  }

	  _createClass(Hls, [{
	    key: 'destroy',
	    value: function destroy() {
	      _logger.logger.log('destroy');
	      this.trigger(_events2.default.DESTROYING);
	      this.detachMedia();
	      this.playlistLoader.destroy();
	      this.fragmentLoader.destroy();
	      this.levelController.destroy();
	      this.abrController.destroy();
	      this.bufferController.destroy();
	      this.capLevelController.destroy();
	      this.fpsController.destroy();
	      this.streamController.destroy();
	      this.audioStreamController.destroy();
	      this.timelineController.destroy();
	      this.audioTrackController.destroy();
	      this.keyLoader.destroy();
	      this.url = null;
	      this.observer.removeAllListeners();
	    }
	  }, {
	    key: 'attachMedia',
	    value: function attachMedia(media) {
	      _logger.logger.log('attachMedia');
	      this.media = media;
	      this.trigger(_events2.default.MEDIA_ATTACHING, { media: media });
	    }
	  }, {
	    key: 'detachMedia',
	    value: function detachMedia() {
	      _logger.logger.log('detachMedia');
	      this.trigger(_events2.default.MEDIA_DETACHING);
	      this.media = null;
	    }
	  }, {
	    key: 'loadSource',
	    value: function loadSource(url) {
	      _logger.logger.log('loadSource:' + url);
	      this.url = url;
	      // when attaching to a source URL, trigger a playlist load
	      this.trigger(_events2.default.MANIFEST_LOADING, { url: url });
	    }
	  }, {
	    key: 'startLoad',
	    value: function startLoad() {
	      var startPosition = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

	      _logger.logger.log('startLoad');
	      this.levelController.startLoad();
	      this.streamController.startLoad(startPosition);
	      this.audioStreamController.startLoad(startPosition);
	    }
	  }, {
	    key: 'stopLoad',
	    value: function stopLoad() {
	      _logger.logger.log('stopLoad');
	      this.levelController.stopLoad();
	      this.streamController.stopLoad();
	      this.audioStreamController.stopLoad();
	    }
	  }, {
	    key: 'swapAudioCodec',
	    value: function swapAudioCodec() {
	      _logger.logger.log('swapAudioCodec');
	      this.streamController.swapAudioCodec();
	    }
	  }, {
	    key: 'recoverMediaError',
	    value: function recoverMediaError() {
	      _logger.logger.log('recoverMediaError');
	      var media = this.media;
	      this.detachMedia();
	      this.attachMedia(media);
	    }

	    /** Return all quality levels **/

	  }, {
	    key: 'levels',
	    get: function get() {
	      return this.levelController.levels;
	    }

	    /** Return current playback quality level **/

	  }, {
	    key: 'currentLevel',
	    get: function get() {
	      return this.streamController.currentLevel;
	    }

	    /* set quality level immediately (-1 for automatic level selection) */
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set currentLevel:' + newLevel);
	      this.loadLevel = newLevel;
	      this.streamController.immediateLevelSwitch();
	    }

	    /** Return next playback quality level (quality level of next fragment) **/

	  }, {
	    key: 'nextLevel',
	    get: function get() {
	      return this.streamController.nextLevel;
	    }

	    /* set quality level for next fragment (-1 for automatic level selection) */
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set nextLevel:' + newLevel);
	      this.levelController.manualLevel = newLevel;
	      this.streamController.nextLevelSwitch();
	    }

	    /** Return the quality level of current/last loaded fragment **/

	  }, {
	    key: 'loadLevel',
	    get: function get() {
	      return this.levelController.level;
	    }

	    /* set quality level for current/next loaded fragment (-1 for automatic level selection) */
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set loadLevel:' + newLevel);
	      this.levelController.manualLevel = newLevel;
	    }

	    /** Return the quality level of next loaded fragment **/

	  }, {
	    key: 'nextLoadLevel',
	    get: function get() {
	      return this.levelController.nextLoadLevel;
	    }

	    /** set quality level of next loaded fragment **/
	    ,
	    set: function set(level) {
	      this.levelController.nextLoadLevel = level;
	    }

	    /** Return first level (index of first level referenced in manifest)
	    **/

	  }, {
	    key: 'firstLevel',
	    get: function get() {
	      return this.levelController.firstLevel;
	    }

	    /** set first level (index of first level referenced in manifest)
	    **/
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set firstLevel:' + newLevel);
	      this.levelController.firstLevel = newLevel;
	    }

	    /** Return start level (level of first fragment that will be played back)
	        if not overrided by user, first level appearing in manifest will be used as start level
	        if -1 : automatic start level selection, playback will start from level matching download bandwidth (determined from download of first segment)
	    **/

	  }, {
	    key: 'startLevel',
	    get: function get() {
	      return this.levelController.startLevel;
	    }

	    /** set  start level (level of first fragment that will be played back)
	        if not overrided by user, first level appearing in manifest will be used as start level
	        if -1 : automatic start level selection, playback will start from level matching download bandwidth (determined from download of first segment)
	    **/
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set startLevel:' + newLevel);
	      this.levelController.startLevel = newLevel;
	    }

	    /** Return the capping/max level value that could be used by automatic level selection algorithm **/

	  }, {
	    key: 'autoLevelCapping',
	    get: function get() {
	      return this.abrController.autoLevelCapping;
	    }

	    /** set the capping/max level value that could be used by automatic level selection algorithm **/
	    ,
	    set: function set(newLevel) {
	      _logger.logger.log('set autoLevelCapping:' + newLevel);
	      this.abrController.autoLevelCapping = newLevel;
	    }

	    /* check if we are in automatic level selection mode */

	  }, {
	    key: 'autoLevelEnabled',
	    get: function get() {
	      return this.levelController.manualLevel === -1;
	    }

	    /* return manual level */

	  }, {
	    key: 'manualLevel',
	    get: function get() {
	      return this.levelController.manualLevel;
	    }

	    /** get alternate audio tracks list from playlist **/

	  }, {
	    key: 'audioTracks',
	    get: function get() {
	      return this.audioTrackController.audioTracks;
	    }

	    /** get index of the selected audio track (index in audio track lists) **/

	  }, {
	    key: 'audioTrack',
	    get: function get() {
	      return this.audioTrackController.audioTrack;
	    }

	    /** select an audio track, based on its index in audio track lists**/
	    ,
	    set: function set(audioTrackId) {
	      this.audioTrackController.audioTrack = audioTrackId;
	    }
	  }]);

	  return Hls;
	}();

	exports.default = Hls;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  // fired before MediaSource is attaching to media element - data: { media }
	  MEDIA_ATTACHING: 'hlsMediaAttaching',
	  // fired when MediaSource has been succesfully attached to media element - data: { }
	  MEDIA_ATTACHED: 'hlsMediaAttached',
	  // fired before detaching MediaSource from media element - data: { }
	  MEDIA_DETACHING: 'hlsMediaDetaching',
	  // fired when MediaSource has been detached from media element - data: { }
	  MEDIA_DETACHED: 'hlsMediaDetached',
	  // fired when we buffer is going to be resetted
	  BUFFER_RESET: 'hlsBufferReset',
	  // fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
	  BUFFER_CODECS: 'hlsBufferCodecs',
	  // fired when sourcebuffers have been created data: { tracks : tracks}
	  BUFFER_CREATED: 'hlsBufferCreated',
	  // fired when we append a segment to the buffer - data: { segment: segment object }
	  BUFFER_APPENDING: 'hlsBufferAppending',
	  // fired when we are done with appending a media segment to the buffer data : { parent : segment parent that triggered BUFFER_APPENDING }
	  BUFFER_APPENDED: 'hlsBufferAppended',
	  // fired when the stream is finished and we want to notify the media buffer that there will be no more data
	  BUFFER_EOS: 'hlsBufferEos',
	  // fired when the media buffer should be flushed - data {startOffset, endOffset}
	  BUFFER_FLUSHING: 'hlsBufferFlushing',
	  // fired when the media has been flushed
	  BUFFER_FLUSHED: 'hlsBufferFlushed',
	  // fired to signal that a manifest loading starts - data: { url : manifestURL}
	  MANIFEST_LOADING: 'hlsManifestLoading',
	  // fired after manifest has been loaded - data: { levels : [available quality levels] , audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
	  MANIFEST_LOADED: 'hlsManifestLoaded',
	  // fired after manifest has been parsed - data: { levels : [available quality levels] , firstLevel : index of first quality level appearing in Manifest}
	  MANIFEST_PARSED: 'hlsManifestParsed',
	  // fired when a level playlist loading starts - data: { url : level URL  level : id of level being loaded}
	  LEVEL_LOADING: 'hlsLevelLoading',
	  // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : { trequest, tfirst, tload, mtime} }
	  LEVEL_LOADED: 'hlsLevelLoaded',
	  // fired when a level's details have been updated based on previous details, after it has been loaded. - data: { details : levelDetails object, level : id of updated level }
	  LEVEL_UPDATED: 'hlsLevelUpdated',
	  // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
	  LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated',
	  // fired when a level switch is requested - data: { level : id of new level }
	  LEVEL_SWITCH: 'hlsLevelSwitch',
	  // fired to notify that audio track lists has been updated data: { audioTracks : audioTracks}
	  AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated',
	  // fired when an audio track switch occurs - data: {  id : audio track id}
	  AUDIO_TRACK_SWITCH: 'hlsAudioTrackSwitch',
	  // fired when an audio track loading starts - data: { url : audio track URL  id : audio track id}
	  AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading',
	  // fired when an audio track loading  finishes - data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime} }
	  AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded',
	  // fired when a fragment loading starts - data: { frag : fragment object}
	  FRAG_LOADING: 'hlsFragLoading',
	  // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded}}
	  FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress',
	  // Identifier for fragment load aborting for emergency switch down - data: {frag : fragment object}
	  FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted',
	  // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length}}
	  FRAG_LOADED: 'hlsFragLoaded',
	  // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, level : levelId, sn : sequence number, moov : moov MP4 box, codecs : codecs found while parsing fragment}
	  FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment',
	  // fired when parsing sei text is completed - data: { id : demuxer id, , level : levelId, sn : sequence number, samples : [ sei samples pes ] }
	  FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata',
	  // fired when parsing id3 is completed - data: { id : demuxer id, , level : levelId, sn : sequence number, samples : [ id3 samples pes ] }
	  FRAG_PARSING_METADATA: 'hlsFragParsingMetadata',
	  // fired when data have been extracted from fragment - data: { id : demuxer id, level : levelId, sn : sequence number, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
	  FRAG_PARSING_DATA: 'hlsFragParsingData',
	  // fired when fragment parsing is completed - data: { id : demuxer id; level : levelId, sn : sequence number, }
	  FRAG_PARSED: 'hlsFragParsed',
	  // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id,frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length} }
	  FRAG_BUFFERED: 'hlsFragBuffered',
	  // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
	  FRAG_CHANGED: 'hlsFragChanged',
	  // Identifier for a FPS drop event - data: {curentDropped, currentDecoded, totalDroppedFrames}
	  FPS_DROP: 'hlsFpsDrop',
	  //triggered when FPS drop triggers auto level capping - data: {level, droppedlevel}
	  FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping',
	  // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data}
	  ERROR: 'hlsError',
	  // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example
	  DESTROYING: 'hlsDestroying',
	  // fired when a decrypt key loading starts - data: { frag : fragment object}
	  KEY_LOADING: 'hlsKeyLoading',
	  // fired when a decrypt key loading is completed - data: { frag : fragment object, payload : key payload, stats : { trequest, tfirst, tload, length}}
	  KEY_LOADED: 'hlsKeyLoaded',
	  // fired upon stream controller state transitions - data: {previousState, nextState}
	  STREAM_STATE_TRANSITION: 'hlsStreamStateTransition'
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ErrorTypes = exports.ErrorTypes = {
	  // Identifier for a network error (loading error / timeout ...)
	  NETWORK_ERROR: 'networkError',
	  // Identifier for a media Error (video/parsing/mediasource error)
	  MEDIA_ERROR: 'mediaError',
	  // Identifier for all other errors
	  OTHER_ERROR: 'otherError'
	};

	var ErrorDetails = exports.ErrorDetails = {
	  // Identifier for a manifest load error - data: { url : faulty URL, response : XHR response}
	  MANIFEST_LOAD_ERROR: 'manifestLoadError',
	  // Identifier for a manifest load timeout - data: { url : faulty URL, response : XHR response}
	  MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut',
	  // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
	  MANIFEST_PARSING_ERROR: 'manifestParsingError',
	  // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
	  MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError',
	  // Identifier for a level load error - data: { url : faulty URL, response : XHR response}
	  LEVEL_LOAD_ERROR: 'levelLoadError',
	  // Identifier for a level load timeout - data: { url : faulty URL, response : XHR response}
	  LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut',
	  // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
	  LEVEL_SWITCH_ERROR: 'levelSwitchError',
	  // Identifier for an audio track load error - data: { url : faulty URL, response : XHR response}
	  AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError',
	  // Identifier for an audio track load timeout - data: { url : faulty URL, response : XHR response}
	  AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut',
	  // Identifier for fragment load error - data: { frag : fragment object, response : XHR response}
	  FRAG_LOAD_ERROR: 'fragLoadError',
	  // Identifier for fragment loop loading error - data: { frag : fragment object}
	  FRAG_LOOP_LOADING_ERROR: 'fragLoopLoadingError',
	  // Identifier for fragment load timeout error - data: { frag : fragment object}
	  FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut',
	  // Identifier for a fragment decryption error event - data: parsing error description
	  FRAG_DECRYPT_ERROR: 'fragDecryptError',
	  // Identifier for a fragment parsing error event - data: parsing error description
	  FRAG_PARSING_ERROR: 'fragParsingError',
	  // Identifier for decrypt key load error - data: { frag : fragment object, response : XHR response}
	  KEY_LOAD_ERROR: 'keyLoadError',
	  // Identifier for decrypt key load timeout error - data: { frag : fragment object}
	  KEY_LOAD_TIMEOUT: 'keyLoadTimeOut',
	  // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : {  err : exception , mimeType : mimeType }
	  BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError',
	  // Identifier for a buffer append error - data: append error description
	  BUFFER_APPEND_ERROR: 'bufferAppendError',
	  // Identifier for a buffer appending error event - data: appending error description
	  BUFFER_APPENDING_ERROR: 'bufferAppendingError',
	  // Identifier for a buffer stalled error event
	  BUFFER_STALLED_ERROR: 'bufferStalledError',
	  // Identifier for a buffer full event
	  BUFFER_FULL_ERROR: 'bufferFullError',
	  // Identifier for a buffer seek over hole event
	  BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole',
	  // Identifier for an internal exception happening inside hls.js while handling an event
	  INTERNAL_EXCEPTION: 'internalException'
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _errors = __webpack_require__(18);

	var _url = __webpack_require__(22);

	var _url2 = _interopRequireDefault(_url);

	var _attrList = __webpack_require__(23);

	var _attrList2 = _interopRequireDefault(_attrList);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Playlist Loader
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var PlaylistLoader = function (_EventHandler) {
	  _inherits(PlaylistLoader, _EventHandler);

	  function PlaylistLoader(hls) {
	    _classCallCheck(this, PlaylistLoader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlaylistLoader).call(this, hls, _events2.default.MANIFEST_LOADING, _events2.default.LEVEL_LOADING, _events2.default.AUDIO_TRACK_LOADING));

	    _this.loaders = {};
	    return _this;
	  }

	  _createClass(PlaylistLoader, [{
	    key: 'destroy',
	    value: function destroy() {
	      for (var loaderName in this.loaders) {
	        var loader = this.loaders[loaderName];
	        if (loader) {
	          loader.destroy();
	        }
	      }
	      this.loaders = {};
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onManifestLoading',
	    value: function onManifestLoading(data) {
	      this.load(data.url, { type: 'manifest' });
	    }
	  }, {
	    key: 'onLevelLoading',
	    value: function onLevelLoading(data) {
	      this.load(data.url, { type: 'level', level: data.level, id: data.id });
	    }
	  }, {
	    key: 'onAudioTrackLoading',
	    value: function onAudioTrackLoading(data) {
	      this.load(data.url, { type: 'audioTrack', id: data.id });
	    }
	  }, {
	    key: 'load',
	    value: function load(url, context) {
	      var config = this.hls.config,
	          retry,
	          timeout,
	          retryDelay;
	      if (context.type === 'manifest') {
	        retry = config.manifestLoadingMaxRetry;
	        timeout = config.manifestLoadingTimeOut;
	        retryDelay = config.manifestLoadingRetryDelay;
	      } else {
	        retry = config.levelLoadingMaxRetry;
	        timeout = config.levelLoadingTimeOut;
	        retryDelay = config.levelLoadingRetryDelay;
	      }
	      var loader = this.loaders[context.type];
	      if (loader) {
	        _logger.logger.warn('abort previous loader for type:' + context.type);
	        loader.abort();
	      }
	      loader = this.loaders[context.type] = context.loader = typeof config.pLoader !== 'undefined' ? new config.pLoader(config) : new config.loader(config);
	      loader.load(url, context, '', this.loadsuccess.bind(this), this.loaderror.bind(this), this.loadtimeout.bind(this), timeout, retry, retryDelay);
	    }
	  }, {
	    key: 'resolve',
	    value: function resolve(url, baseUrl) {
	      return _url2.default.buildAbsoluteURL(baseUrl, url);
	    }
	  }, {
	    key: 'parseMasterPlaylist',
	    value: function parseMasterPlaylist(string, baseurl) {
	      var levels = [],
	          result = void 0;

	      // https://regex101.com is your friend
	      var re = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
	      while ((result = re.exec(string)) != null) {
	        var level = {};

	        var attrs = level.attrs = new _attrList2.default(result[1]);
	        level.url = this.resolve(result[2], baseurl);

	        var resolution = attrs.decimalResolution('RESOLUTION');
	        if (resolution) {
	          level.width = resolution.width;
	          level.height = resolution.height;
	        }
	        level.bitrate = attrs.decimalInteger('AVERAGE-BANDWIDTH') || attrs.decimalInteger('BANDWIDTH');
	        level.name = attrs.NAME;

	        var codecs = attrs.CODECS;
	        if (codecs) {
	          codecs = codecs.split(',');
	          for (var i = 0; i < codecs.length; i++) {
	            var codec = codecs[i];
	            if (codec.indexOf('avc1') !== -1) {
	              level.videoCodec = this.avc1toavcoti(codec);
	            } else {
	              level.audioCodec = codec;
	            }
	          }
	        }

	        levels.push(level);
	      }
	      return levels;
	    }
	  }, {
	    key: 'parseMasterPlaylistMedia',
	    value: function parseMasterPlaylistMedia(string, baseurl, type) {
	      var medias = [],
	          result = void 0,
	          id = 0;

	      // https://regex101.com is your friend
	      var re = /#EXT-X-MEDIA:(.*)/g;
	      while ((result = re.exec(string)) != null) {
	        var media = {};
	        var attrs = new _attrList2.default(result[1]);
	        if (attrs.TYPE === type) {
	          media.groupId = attrs['GROUP-ID'];
	          media.name = attrs.NAME;
	          media.default = attrs.DEFAULT === 'YES';
	          media.autoselect = attrs.AUTOSELECT === 'YES';
	          media.forced = attrs.FORCED === 'YES';
	          media.url = attrs.URI ? this.resolve(attrs.URI, baseurl) : '';
	          media.lang = attrs.LANGUAGE;
	          if (!media.name) {
	            media.name = media.lang;
	          }
	          media.id = id++;
	          medias.push(media);
	        }
	      }
	      return medias;
	    }
	    /**
	     * Utility method for parseLevelPlaylist to create an initialization vector for a given segment
	     * @returns {Uint8Array}
	     */

	  }, {
	    key: 'createInitializationVector',
	    value: function createInitializationVector(segmentNumber) {
	      var uint8View = new Uint8Array(16);

	      for (var i = 12; i < 16; i++) {
	        uint8View[i] = segmentNumber >> 8 * (15 - i) & 0xff;
	      }

	      return uint8View;
	    }

	    /**
	     * Utility method for parseLevelPlaylist to get a fragment's decryption data from the currently parsed encryption key data
	     * @param levelkey - a playlist's encryption info
	     * @param segmentNumber - the fragment's segment number
	     * @returns {*} - an object to be applied as a fragment's decryptdata
	     */

	  }, {
	    key: 'fragmentDecryptdataFromLevelkey',
	    value: function fragmentDecryptdataFromLevelkey(levelkey, segmentNumber) {
	      var decryptdata = levelkey;

	      if (levelkey && levelkey.method && levelkey.uri && !levelkey.iv) {
	        decryptdata = this.cloneObj(levelkey);
	        decryptdata.iv = this.createInitializationVector(segmentNumber);
	      }

	      return decryptdata;
	    }
	  }, {
	    key: 'avc1toavcoti',
	    value: function avc1toavcoti(codec) {
	      var result,
	          avcdata = codec.split('.');
	      if (avcdata.length > 2) {
	        result = avcdata.shift() + '.';
	        result += parseInt(avcdata.shift()).toString(16);
	        result += ('000' + parseInt(avcdata.shift()).toString(16)).substr(-4);
	      } else {
	        result = codec;
	      }
	      return result;
	    }
	  }, {
	    key: 'cloneObj',
	    value: function cloneObj(obj) {
	      return JSON.parse(JSON.stringify(obj));
	    }
	  }, {
	    key: 'parseLevelPlaylist',
	    value: function parseLevelPlaylist(string, baseurl, id, type) {
	      var currentSN = 0,
	          fragdecryptdata,
	          totalduration = 0,
	          level = { url: baseurl, fragments: [], live: true, startSN: 0 },
	          levelkey = { method: null, key: null, iv: null, uri: null },
	          cc = 0,
	          programDateTime = null,
	          frag = null,
	          result,
	          regexp,
	          byteRangeEndOffset,
	          byteRangeStartOffset,
	          tagList = [];

	      regexp = /(?:#EXT-X-(MEDIA-SEQUENCE):(\d+))|(?:#EXT-X-(TARGETDURATION):(\d+))|(?:#EXT-X-(KEY):(.*)[\r\n]+([^#|\r\n]+)?)|(?:#EXT-X-(START):(.*))|(?:#EXT(INF):([\d\.]+)[^\r\n]*([\r\n]+[^#|\r\n]+)?)|(?:#EXT-X-(BYTERANGE):([\d]+[@[\d]*)]*[\r\n]+([^#|\r\n]+)?|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.*)[\r\n]+([^#|\r\n]+)?)|(?:#EXT-X-(VERSION):(.*))|(?:#(.*):(.*))|(?:#(.*))/g;
	      while ((result = regexp.exec(string)) !== null) {
	        result.shift();
	        result = result.filter(function (n) {
	          return n !== undefined;
	        });
	        switch (result[0]) {
	          case 'MEDIA-SEQUENCE':
	            currentSN = level.startSN = parseInt(result[1]);
	            break;
	          case 'TARGETDURATION':
	            level.targetduration = parseFloat(result[1]);
	            break;
	          case 'VERSION':
	            break;
	          case 'EXTM3U':
	            break;
	          case 'ENDLIST':
	            level.live = false;
	            break;
	          case 'DIS':
	            cc++;
	            tagList.push(result);
	            break;
	          case 'BYTERANGE':
	            var params = result[1].split('@');
	            if (params.length === 1) {
	              byteRangeStartOffset = byteRangeEndOffset;
	            } else {
	              byteRangeStartOffset = parseInt(params[1]);
	            }
	            byteRangeEndOffset = parseInt(params[0]) + byteRangeStartOffset;
	            if (frag && !frag.url) {
	              frag.byteRangeStartOffset = byteRangeStartOffset;
	              frag.byteRangeEndOffset = byteRangeEndOffset;
	              frag.url = this.resolve(result[2], baseurl);
	              tagList.push(result);
	            }
	            break;
	          case 'INF':
	            var duration = parseFloat(result[1]);
	            if (!isNaN(duration)) {
	              var sn = currentSN++;
	              fragdecryptdata = this.fragmentDecryptdataFromLevelkey(levelkey, sn);
	              var url = result[2] ? this.resolve(result[2], baseurl) : null;
	              tagList.push(result);
	              frag = { url: url,
	                type: type,
	                duration: duration,
	                start: totalduration,
	                sn: sn,
	                level: id,
	                cc: cc,
	                byteRangeStartOffset: byteRangeStartOffset,
	                byteRangeEndOffset: byteRangeEndOffset,
	                decryptdata: fragdecryptdata,
	                programDateTime: programDateTime,
	                tagList: tagList };
	              level.fragments.push(frag);
	              totalduration += duration;
	              byteRangeStartOffset = null;
	              programDateTime = null;
	              tagList = [];
	            }
	            break;
	          case 'KEY':
	            // https://tools.ietf.org/html/draft-pantos-http-live-streaming-08#section-3.4.4
	            var decryptparams = result[1];
	            var keyAttrs = new _attrList2.default(decryptparams);
	            var decryptmethod = keyAttrs.enumeratedString('METHOD'),
	                decrypturi = keyAttrs.URI,
	                decryptiv = keyAttrs.hexadecimalInteger('IV');
	            if (decryptmethod) {
	              levelkey = { method: null, key: null, iv: null, uri: null };
	              if (decrypturi && decryptmethod === 'AES-128') {
	                levelkey.method = decryptmethod;
	                // URI to get the key
	                levelkey.uri = this.resolve(decrypturi, baseurl);
	                levelkey.key = null;
	                // Initialization Vector (IV)
	                levelkey.iv = decryptiv;
	              }
	            }

	            //issue #425, applying url and decrypt data in instances where EXT-KEY immediately follow EXT-INF
	            if (frag && !frag.url && result.length >= 3) {
	              frag.url = this.resolve(result[2], baseurl);

	              //we have not moved onto another segment, we are still parsing one
	              fragdecryptdata = this.fragmentDecryptdataFromLevelkey(levelkey, currentSN - 1);
	              frag.decryptdata = fragdecryptdata;
	              tagList.push(result);
	            }
	            break;
	          case 'START':
	            var startParams = result[1];
	            var startAttrs = new _attrList2.default(startParams);
	            var startTimeOffset = startAttrs.decimalFloatingPoint('TIME-OFFSET');
	            if (startTimeOffset) {
	              level.startTimeOffset = startTimeOffset;
	            }
	            break;
	          case 'PROGRAM-DATE-TIME':
	            programDateTime = new Date(Date.parse(result[1]));
	            tagList.push(result);
	            if (frag && !frag.url && result.length >= 3) {
	              frag.url = this.resolve(result[2], baseurl);
	              frag.programDateTime = programDateTime;
	            }
	            break;
	          default:
	            tagList.push(result);
	            break;
	        }
	      }
	      //logger.log('found ' + level.fragments.length + ' fragments');
	      if (frag && !frag.url) {
	        level.fragments.pop();
	        totalduration -= frag.duration;
	      }
	      level.totalduration = totalduration;
	      level.averagetargetduration = totalduration / level.fragments.length;
	      level.endSN = currentSN - 1;
	      return level;
	    }
	  }, {
	    key: 'loadsuccess',
	    value: function loadsuccess(event, stats, context) {
	      var target = event.currentTarget,
	          string = target.responseText,
	          url = target.responseURL,
	          type = context.type,
	          id = context.id,
	          level = context.level,
	          hls = this.hls;

	      this.loaders[type] = undefined;
	      // responseURL not supported on some browsers (it is used to detect URL redirection)
	      // data-uri mode also not supported (but no need to detect redirection)
	      if (url === undefined || url.indexOf('data:') === 0) {
	        // fallback to initial URL
	        url = context.url;
	      }
	      stats.tload = performance.now();
	      stats.mtime = new Date(target.getResponseHeader('Last-Modified'));
	      if (string.indexOf('#EXTM3U') === 0) {
	        if (string.indexOf('#EXTINF:') > 0) {
	          // 1 level playlist
	          // if first request, fire manifest loaded event, level will be reloaded afterwards
	          // (this is to have a uniform logic for 1 level/multilevel playlists)
	          if (type === 'manifest') {
	            hls.trigger(_events2.default.MANIFEST_LOADED, { levels: [{ url: url }], url: url, stats: stats });
	          } else {
	            var isLevel = type === 'level',
	                levelDetails = this.parseLevelPlaylist(string, url, level || id, isLevel ? 'main' : 'audio');
	            stats.tparsed = performance.now();
	            if (isLevel) {
	              hls.trigger(_events2.default.LEVEL_LOADED, { details: levelDetails, level: level, id: id, stats: stats });
	            } else {
	              hls.trigger(_events2.default.AUDIO_TRACK_LOADED, { details: levelDetails, id: id, stats: stats });
	            }
	          }
	        } else {
	          var levels = this.parseMasterPlaylist(string, url),
	              audiotracks = this.parseMasterPlaylistMedia(string, url, 'AUDIO');
	          // multi level playlist, parse level info
	          if (levels.length) {
	            hls.trigger(_events2.default.MANIFEST_LOADED, { levels: levels, audioTracks: audiotracks, url: url, stats: stats });
	          } else {
	            hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: true, url: url, reason: 'no level found in manifest' });
	          }
	        }
	      } else {
	        hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: true, url: url, reason: 'no EXTM3U delimiter' });
	      }
	    }
	  }, {
	    key: 'loaderror',
	    value: function loaderror(event, context) {
	      var details,
	          fatal,
	          loader = context.loader;
	      switch (context.type) {
	        case 'manifest':
	          details = _errors.ErrorDetails.MANIFEST_LOAD_ERROR;
	          fatal = true;
	          break;
	        case 'level':
	          details = _errors.ErrorDetails.LEVEL_LOAD_ERROR;
	          fatal = false;
	          break;
	        case 'audioTrack':
	          details = _errors.ErrorDetails.AUDIOTRACK_LOAD_ERROR;
	          fatal = false;
	          break;
	      }
	      if (loader) {
	        loader.abort();
	        this.loaders[context.type] = undefined;
	      }
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: details, fatal: fatal, url: loader.url, loader: loader, response: event.currentTarget, context: context });
	    }
	  }, {
	    key: 'loadtimeout',
	    value: function loadtimeout(event, stats, context) {
	      var details,
	          fatal,
	          loader = context.loader;
	      switch (context.type) {
	        case 'manifest':
	          details = _errors.ErrorDetails.MANIFEST_LOAD_TIMEOUT;
	          fatal = true;
	          break;
	        case 'level':
	          details = _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT;
	          fatal = false;
	          break;
	        case 'audioTrack':
	          details = _errors.ErrorDetails.AUDIOTRACK_LOAD_TIMEOUT;
	          fatal = false;
	          break;
	      }
	      if (loader) {
	        loader.abort();
	        this.loaders[context.type] = undefined;
	      }
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: details, fatal: fatal, url: loader.url, loader: loader, context: context });
	    }
	  }]);

	  return PlaylistLoader;
	}(_eventHandler2.default);

	exports.default = PlaylistLoader;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * All objects in the event handling chain should inherit from this class
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _logger = __webpack_require__(21);

	var _errors = __webpack_require__(18);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventHandler = function () {
	  function EventHandler(hls) {
	    _classCallCheck(this, EventHandler);

	    this.hls = hls;
	    this.onEvent = this.onEvent.bind(this);

	    for (var _len = arguments.length, events = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      events[_key - 1] = arguments[_key];
	    }

	    this.handledEvents = events;
	    this.useGenericHandler = true;

	    this.registerListeners();
	  }

	  _createClass(EventHandler, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.unregisterListeners();
	    }
	  }, {
	    key: 'isEventHandler',
	    value: function isEventHandler() {
	      return _typeof(this.handledEvents) === 'object' && this.handledEvents.length && typeof this.onEvent === 'function';
	    }
	  }, {
	    key: 'registerListeners',
	    value: function registerListeners() {
	      if (this.isEventHandler()) {
	        this.handledEvents.forEach(function (event) {
	          if (event === 'hlsEventGeneric') {
	            throw new Error('Forbidden event name: ' + event);
	          }
	          this.hls.on(event, this.onEvent);
	        }.bind(this));
	      }
	    }
	  }, {
	    key: 'unregisterListeners',
	    value: function unregisterListeners() {
	      if (this.isEventHandler()) {
	        this.handledEvents.forEach(function (event) {
	          this.hls.off(event, this.onEvent);
	        }.bind(this));
	      }
	    }

	    /**
	     * arguments: event (string), data (any)
	     */

	  }, {
	    key: 'onEvent',
	    value: function onEvent(event, data) {
	      this.onEventGeneric(event, data);
	    }
	  }, {
	    key: 'onEventGeneric',
	    value: function onEventGeneric(event, data) {
	      var eventToFunction = function eventToFunction(event, data) {
	        var funcName = 'on' + event.replace('hls', '');
	        if (typeof this[funcName] !== 'function') {
	          throw new Error('Event ' + event + ' has no generic handler in this ' + this.constructor.name + ' class (tried ' + funcName + ')');
	        }
	        return this[funcName].bind(this, data);
	      };
	      try {
	        eventToFunction.call(this, event, data).call();
	      } catch (err) {
	        _logger.logger.error('internal error happened while processing ' + event + ':' + err.message);
	        this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.OTHER_ERROR, details: _errors.ErrorDetails.INTERNAL_EXCEPTION, fatal: false, event: event, err: err });
	      }
	    }
	  }]);

	  return EventHandler;
	}();

	exports.default = EventHandler;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function noop() {}

	var fakeLogger = {
	  trace: noop,
	  debug: noop,
	  log: noop,
	  warn: noop,
	  info: noop,
	  error: noop
	};

	var exportedLogger = fakeLogger;

	//let lastCallTime;
	// function formatMsgWithTimeInfo(type, msg) {
	//   const now = Date.now();
	//   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
	//   lastCallTime = now;
	//   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
	//   return msg;
	// }

	function formatMsg(type, msg) {
	  msg = '[' + type + '] > ' + msg;
	  return msg;
	}

	function consolePrintFn(type) {
	  var func = window.console[type];
	  if (func) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      if (args[0]) {
	        args[0] = formatMsg(type, args[0]);
	      }
	      func.apply(window.console, args);
	    };
	  }
	  return noop;
	}

	function exportLoggerFunctions(debugConfig) {
	  for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    functions[_key2 - 1] = arguments[_key2];
	  }

	  functions.forEach(function (type) {
	    exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
	  });
	}

	var enableLogs = exports.enableLogs = function enableLogs(debugConfig) {
	  if (debugConfig === true || (typeof debugConfig === 'undefined' ? 'undefined' : _typeof(debugConfig)) === 'object') {
	    exportLoggerFunctions(debugConfig,
	    // Remove out from list here to hard-disable a log-level
	    //'trace',
	    'debug', 'log', 'info', 'warn', 'error');
	    // Some browsers don't allow to use bind on console object anyway
	    // fallback to default if needed
	    try {
	      exportedLogger.log();
	    } catch (e) {
	      exportedLogger = fakeLogger;
	    }
	  } else {
	    exportedLogger = fakeLogger;
	  }
	};

	var logger = exports.logger = exportedLogger;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var URLHelper = {
	  // build an absolute URL from a relative one using the provided baseURL
	  // if relativeURL is an absolute URL it will be returned as is.
	  buildAbsoluteURL: function buildAbsoluteURL(baseURL, relativeURL) {
	    // remove any remaining space and CRLF
	    relativeURL = relativeURL.trim();
	    if (/^[a-z]+:/i.test(relativeURL)) {
	      // complete url, not relative
	      return relativeURL;
	    }

	    var relativeURLQuery = null;
	    var relativeURLHash = null;

	    var relativeURLHashSplit = /^([^#]*)(.*)$/.exec(relativeURL);
	    if (relativeURLHashSplit) {
	      relativeURLHash = relativeURLHashSplit[2];
	      relativeURL = relativeURLHashSplit[1];
	    }
	    var relativeURLQuerySplit = /^([^\?]*)(.*)$/.exec(relativeURL);
	    if (relativeURLQuerySplit) {
	      relativeURLQuery = relativeURLQuerySplit[2];
	      relativeURL = relativeURLQuerySplit[1];
	    }

	    var baseURLHashSplit = /^([^#]*)(.*)$/.exec(baseURL);
	    if (baseURLHashSplit) {
	      baseURL = baseURLHashSplit[1];
	    }
	    var baseURLQuerySplit = /^([^\?]*)(.*)$/.exec(baseURL);
	    if (baseURLQuerySplit) {
	      baseURL = baseURLQuerySplit[1];
	    }

	    var baseURLDomainSplit = /^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(baseURL);
	    if (!baseURLDomainSplit) {
	      throw new Error('Error trying to parse base URL.');
	    }

	    // e.g. 'http:', 'https:', ''
	    var baseURLProtocol = baseURLDomainSplit[2] || '';
	    // e.g. 'http://example.com', '//example.com', ''
	    var baseURLProtocolDomain = baseURLDomainSplit[1] || '';
	    // e.g. '/a/b/c/playlist.m3u8'
	    var baseURLPath = baseURLDomainSplit[4];

	    var builtURL = null;
	    if (/^\/\//.test(relativeURL)) {
	      // relative url starts wth '//' so copy protocol (which may be '' if baseUrl didn't provide one)
	      builtURL = baseURLProtocol + '//' + URLHelper.buildAbsolutePath('', relativeURL.substring(2));
	    } else if (/^\//.test(relativeURL)) {
	      // relative url starts with '/' so start from root of domain
	      builtURL = baseURLProtocolDomain + '/' + URLHelper.buildAbsolutePath('', relativeURL.substring(1));
	    } else {
	      builtURL = URLHelper.buildAbsolutePath(baseURLProtocolDomain + baseURLPath, relativeURL);
	    }

	    // put the query and hash parts back
	    if (relativeURLQuery) {
	      builtURL += relativeURLQuery;
	    }
	    if (relativeURLHash) {
	      builtURL += relativeURLHash;
	    }
	    return builtURL;
	  },

	  // build an absolute path using the provided basePath
	  // adapted from https://developer.mozilla.org/en-US/docs/Web/API/document/cookie#Using_relative_URLs_in_the_path_parameter
	  // this does not handle the case where relativePath is "/" or "//". These cases should be handled outside this.
	  buildAbsolutePath: function buildAbsolutePath(basePath, relativePath) {
	    var sRelPath = relativePath;
	    var nUpLn,
	        sDir = '',
	        sPath = basePath.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, '$1'));
	    for (var nEnd, nStart = 0; nEnd = sPath.indexOf('/../', nStart), nEnd > -1; nStart = nEnd + nUpLn) {
	      nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
	      sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp('(?:\\\/+[^\\\/]*){0,' + (nUpLn - 1) / 3 + '}$'), '/');
	    }
	    return sDir + sPath.substr(nStart);
	  }
	};

	module.exports = URLHelper;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// adapted from https://github.com/kanongil/node-m3u8parse/blob/master/attrlist.js

	var AttrList = function () {
	  function AttrList(attrs) {
	    _classCallCheck(this, AttrList);

	    if (typeof attrs === 'string') {
	      attrs = AttrList.parseAttrList(attrs);
	    }
	    for (var attr in attrs) {
	      if (attrs.hasOwnProperty(attr)) {
	        this[attr] = attrs[attr];
	      }
	    }
	  }

	  _createClass(AttrList, [{
	    key: 'decimalInteger',
	    value: function decimalInteger(attrName) {
	      var intValue = parseInt(this[attrName], 10);
	      if (intValue > Number.MAX_SAFE_INTEGER) {
	        return Infinity;
	      }
	      return intValue;
	    }
	  }, {
	    key: 'hexadecimalInteger',
	    value: function hexadecimalInteger(attrName) {
	      if (this[attrName]) {
	        var stringValue = (this[attrName] || '0x').slice(2);
	        stringValue = (stringValue.length & 1 ? '0' : '') + stringValue;

	        var value = new Uint8Array(stringValue.length / 2);
	        for (var i = 0; i < stringValue.length / 2; i++) {
	          value[i] = parseInt(stringValue.slice(i * 2, i * 2 + 2), 16);
	        }
	        return value;
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'hexadecimalIntegerAsNumber',
	    value: function hexadecimalIntegerAsNumber(attrName) {
	      var intValue = parseInt(this[attrName], 16);
	      if (intValue > Number.MAX_SAFE_INTEGER) {
	        return Infinity;
	      }
	      return intValue;
	    }
	  }, {
	    key: 'decimalFloatingPoint',
	    value: function decimalFloatingPoint(attrName) {
	      return parseFloat(this[attrName]);
	    }
	  }, {
	    key: 'enumeratedString',
	    value: function enumeratedString(attrName) {
	      return this[attrName];
	    }
	  }, {
	    key: 'decimalResolution',
	    value: function decimalResolution(attrName) {
	      var res = /^(\d+)x(\d+)$/.exec(this[attrName]);
	      if (res === null) {
	        return undefined;
	      }
	      return {
	        width: parseInt(res[1], 10),
	        height: parseInt(res[2], 10)
	      };
	    }
	  }], [{
	    key: 'parseAttrList',
	    value: function parseAttrList(input) {
	      var re = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
	      var match,
	          attrs = {};
	      while ((match = re.exec(input)) !== null) {
	        var value = match[2],
	            quote = '"';

	        if (value.indexOf(quote) === 0 && value.lastIndexOf(quote) === value.length - 1) {
	          value = value.slice(1, -1);
	        }
	        attrs[match[1]] = value;
	      }
	      return attrs;
	    }
	  }]);

	  return AttrList;
	}();

	exports.default = AttrList;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _errors = __webpack_require__(18);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Fragment Loader
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var FragmentLoader = function (_EventHandler) {
	  _inherits(FragmentLoader, _EventHandler);

	  function FragmentLoader(hls) {
	    _classCallCheck(this, FragmentLoader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FragmentLoader).call(this, hls, _events2.default.FRAG_LOADING));

	    _this.loaders = {};
	    return _this;
	  }

	  _createClass(FragmentLoader, [{
	    key: 'destroy',
	    value: function destroy() {
	      for (var loaderName in this.loaders) {
	        var loader = this.loaders[loaderName];
	        if (loader) {
	          loader.destroy();
	        }
	      }
	      this.loaders = {};
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onFragLoading',
	    value: function onFragLoading(data) {
	      var frag = data.frag,
	          type = frag.type,
	          loader = this.loaders[type],
	          config = this.hls.config;

	      frag.loaded = 0;
	      if (loader) {
	        _logger.logger.warn('abort previous fragment loader for type:' + type);
	        loader.abort();
	      }
	      loader = this.loaders[type] = frag.loader = typeof config.fLoader !== 'undefined' ? new config.fLoader(config) : new config.loader(config);
	      loader.load(frag.url, { frag: frag }, 'arraybuffer', this.loadsuccess.bind(this), this.loaderror.bind(this), this.loadtimeout.bind(this), config.fragLoadingTimeOut, 1, 0, this.loadprogress.bind(this), frag);
	    }
	  }, {
	    key: 'loadsuccess',
	    value: function loadsuccess(event, stats, context) {
	      var payload = event.currentTarget.response,
	          frag = context.frag;
	      stats.length = payload.byteLength;
	      // detach fragment loader on load success
	      frag.loader = undefined;
	      this.loaders[frag.type] = undefined;
	      this.hls.trigger(_events2.default.FRAG_LOADED, { payload: payload, frag: frag, stats: stats });
	    }
	  }, {
	    key: 'loaderror',
	    value: function loaderror(event, context) {
	      var loader = context.loader;
	      if (loader) {
	        loader.abort();
	      }
	      this.loaders[context.type] = undefined;
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: context.frag, response: event });
	    }
	  }, {
	    key: 'loadtimeout',
	    value: function loadtimeout(event, stats, context) {
	      var loader = context.loader;
	      if (loader) {
	        loader.abort();
	      }
	      this.loaders[context.type] = undefined;
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: context.frag });
	    }
	  }, {
	    key: 'loadprogress',
	    value: function loadprogress(event, stats, context) {
	      var frag = context.frag;
	      frag.loaded = stats.loaded;
	      this.hls.trigger(_events2.default.FRAG_LOAD_PROGRESS, { frag: frag, stats: stats });
	    }
	  }]);

	  return FragmentLoader;
	}(_eventHandler2.default);

	exports.default = FragmentLoader;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _bufferHelper = __webpack_require__(26);

	var _bufferHelper2 = _interopRequireDefault(_bufferHelper);

	var _errors = __webpack_require__(18);

	var _logger = __webpack_require__(21);

	var _ewmaBandwidthEstimator = __webpack_require__(27);

	var _ewmaBandwidthEstimator2 = _interopRequireDefault(_ewmaBandwidthEstimator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * simple ABR Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  - compute next level based on last fragment bw heuristics
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  - implement an abandon rules triggered if we have less than 2 frag buffered and if computed bw shows that we risk buffer stalling
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var AbrController = function (_EventHandler) {
	  _inherits(AbrController, _EventHandler);

	  function AbrController(hls) {
	    _classCallCheck(this, AbrController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbrController).call(this, hls, _events2.default.FRAG_LOADING, _events2.default.FRAG_LOADED, _events2.default.ERROR));

	    _this.lastLoadedFragLevel = 0;
	    _this._autoLevelCapping = -1;
	    _this._nextAutoLevel = -1;
	    _this.hls = hls;
	    _this.onCheck = _this.abandonRulesCheck.bind(_this);
	    return _this;
	  }

	  _createClass(AbrController, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.clearTimer();
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onFragLoading',
	    value: function onFragLoading(data) {
	      var frag = data.frag;
	      if (frag.type === 'main') {
	        if (!this.timer) {
	          this.timer = setInterval(this.onCheck, 100);
	        }
	        // lazy init of bw Estimator, rationale is that we use different params for Live/VoD
	        // so we need to wait for stream manifest / playlist type to instantiate it.
	        if (!this.bwEstimator) {
	          var hls = this.hls,
	              level = data.frag.level,
	              isLive = hls.levels[level].details.live,
	              config = hls.config,
	              ewmaFast = void 0,
	              ewmaSlow = void 0;

	          if (isLive) {
	            ewmaFast = config.abrEwmaFastLive;
	            ewmaSlow = config.abrEwmaSlowLive;
	          } else {
	            ewmaFast = config.abrEwmaFastVoD;
	            ewmaSlow = config.abrEwmaSlowVoD;
	          }
	          this.bwEstimator = new _ewmaBandwidthEstimator2.default(hls, ewmaSlow, ewmaFast, config.abrEwmaDefaultEstimate);
	        }
	        frag.trequest = performance.now();
	        this.fragCurrent = frag;
	      }
	    }
	  }, {
	    key: 'abandonRulesCheck',
	    value: function abandonRulesCheck() {
	      /*
	        monitor fragment retrieval time...
	        we compute expected time of arrival of the complete fragment.
	        we compare it to expected time of buffer starvation
	      */
	      var hls = this.hls,
	          v = hls.media,
	          frag = this.fragCurrent;

	      // if loader has been destroyed or loading has been aborted, stop timer and return
	      if (!frag.loader || frag.loader.stats && frag.loader.stats.aborted) {
	        _logger.logger.warn('frag loader destroy or aborted, disarm abandonRulesCheck');
	        this.clearTimer();
	        return;
	      }
	      /* only monitor frag retrieval time if
	      (video not paused OR first fragment being loaded(ready state === HAVE_NOTHING = 0)) AND autoswitching enabled AND not lowest level (=> means that we have several levels) */
	      if (v && (!v.paused && v.playbackRate !== 0 || !v.readyState) && frag.autoLevel && frag.level) {
	        var requestDelay = performance.now() - frag.trequest,
	            playbackRate = Math.abs(v.playbackRate);
	        // monitor fragment load progress after half of expected fragment duration,to stabilize bitrate
	        if (requestDelay > 500 * frag.duration / playbackRate) {
	          var levels = hls.levels,
	              loadRate = Math.max(1, frag.loaded * 1000 / requestDelay),
	              // byte/s; at least 1 byte/s to avoid division by zero
	          // compute expected fragment length using frag duration and level bitrate. also ensure that expected len is gte than already loaded size
	          expectedLen = Math.max(frag.loaded, Math.round(frag.duration * levels[frag.level].bitrate / 8)),
	              pos = v.currentTime,
	              fragLoadedDelay = (expectedLen - frag.loaded) / loadRate,
	              bufferStarvationDelay = (_bufferHelper2.default.bufferInfo(v, pos, hls.config.maxBufferHole).end - pos) / playbackRate;
	          // consider emergency switch down only if we have less than 2 frag buffered AND
	          // time to finish loading current fragment is bigger than buffer starvation delay
	          // ie if we risk buffer starvation if bw does not increase quickly
	          if (bufferStarvationDelay < 2 * frag.duration / playbackRate && fragLoadedDelay > bufferStarvationDelay) {
	            var fragLevelNextLoadedDelay = void 0,
	                nextLoadLevel = void 0;
	            // lets iterate through lower level and try to find the biggest one that could avoid rebuffering
	            // we start from current level - 1 and we step down , until we find a matching level
	            for (nextLoadLevel = frag.level - 1; nextLoadLevel >= 0; nextLoadLevel--) {
	              // compute time to load next fragment at lower level
	              // 0.8 : consider only 80% of current bw to be conservative
	              // 8 = bits per byte (bps/Bps)
	              fragLevelNextLoadedDelay = frag.duration * levels[nextLoadLevel].bitrate / (8 * 0.8 * loadRate);
	              _logger.logger.log('fragLoadedDelay/bufferStarvationDelay/fragLevelNextLoadedDelay[' + nextLoadLevel + '] :' + fragLoadedDelay.toFixed(1) + '/' + bufferStarvationDelay.toFixed(1) + '/' + fragLevelNextLoadedDelay.toFixed(1));
	              if (fragLevelNextLoadedDelay < bufferStarvationDelay) {
	                // we found a lower level that be rebuffering free with current estimated bw !
	                break;
	              }
	            }
	            // only emergency switch down if it takes less time to load new fragment at lowest level instead
	            // of finishing loading current one ...
	            if (fragLevelNextLoadedDelay < fragLoadedDelay) {
	              // ensure nextLoadLevel is not negative
	              nextLoadLevel = Math.max(0, nextLoadLevel);
	              // force next load level in auto mode
	              hls.nextLoadLevel = nextLoadLevel;
	              // update bw estimate for this fragment before cancelling load (this will help reducing the bw)
	              this.bwEstimator.sample(requestDelay, frag.loaded);
	              // abort fragment loading ...
	              _logger.logger.warn('loading too slow, abort fragment loading and switch to level ' + nextLoadLevel);
	              //abort fragment loading
	              frag.loader.abort();
	              this.clearTimer();
	              hls.trigger(_events2.default.FRAG_LOAD_EMERGENCY_ABORTED, { frag: frag });
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'onFragLoaded',
	    value: function onFragLoaded(data) {
	      var frag = data.frag;
	      if (frag.type === 'main') {
	        var stats = data.stats;
	        // only update stats on first frag loading
	        // if same frag is loaded multiple times, it might be in browser cache, and loaded quickly
	        // and leading to wrong bw estimation
	        if (stats.aborted === undefined && frag.loadCounter === 1) {
	          this.bwEstimator.sample(performance.now() - stats.trequest, stats.loaded);
	        }

	        // stop monitoring bw once frag loaded
	        this.clearTimer();
	        // store level id after successful fragment load
	        this.lastLoadedFragLevel = frag.level;
	        // reset forced auto level value so that next level will be selected
	        this._nextAutoLevel = -1;
	      }
	    }
	  }, {
	    key: 'onError',
	    value: function onError(data) {
	      // stop timer in case of frag loading error
	      switch (data.details) {
	        case _errors.ErrorDetails.FRAG_LOAD_ERROR:
	        case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
	          this.clearTimer();
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'clearTimer',
	    value: function clearTimer() {
	      if (this.timer) {
	        clearInterval(this.timer);
	        this.timer = null;
	      }
	    }

	    /** Return the capping/max level value that could be used by automatic level selection algorithm **/

	  }, {
	    key: 'autoLevelCapping',
	    get: function get() {
	      return this._autoLevelCapping;
	    }

	    /** set the capping/max level value that could be used by automatic level selection algorithm **/
	    ,
	    set: function set(newLevel) {
	      this._autoLevelCapping = newLevel;
	    }
	  }, {
	    key: 'nextAutoLevel',
	    get: function get() {
	      var hls = this.hls,
	          config = hls.config,
	          levels = hls.levels,
	          v = hls.media,
	          i = void 0,
	          maxAutoLevel = void 0;
	      if (this._autoLevelCapping === -1 && levels && levels.length) {
	        maxAutoLevel = levels.length - 1;
	      } else {
	        maxAutoLevel = this._autoLevelCapping;
	      }

	      // in case next auto level has been forced, return it straight-away (but capped)
	      if (this._nextAutoLevel !== -1) {
	        return Math.min(this._nextAutoLevel, maxAutoLevel);
	      }
	      var playbackRate = v && v.playbackRate !== 0 ? Math.abs(v.playbackRate) : 1.0,
	          avgbw = this.bwEstimator ? this.bwEstimator.getEstimate() / playbackRate : config.abrEwmaDefaultEstimate / playbackRate,
	          adjustedbw = void 0;
	      // follow algorithm captured from stagefright :
	      // https://android.googlesource.com/platform/frameworks/av/+/master/media/libstagefright/httplive/LiveSession.cpp
	      // Pick the highest bandwidth stream below or equal to estimated bandwidth.
	      for (i = 0; i <= maxAutoLevel; i++) {
	        // consider only 80% of the available bandwidth, but if we are switching up,
	        // be even more conservative (70%) to avoid overestimating and immediately
	        // switching back.
	        if (i <= this.lastLoadedFragLevel) {
	          adjustedbw = config.abrBandWidthFactor * avgbw;
	        } else {
	          adjustedbw = config.abrBandWidthUpFactor * avgbw;
	        }
	        if (adjustedbw < levels[i].bitrate) {
	          return Math.max(0, i - 1);
	        }
	      }
	      return i - 1;
	    },
	    set: function set(nextLevel) {
	      this._nextAutoLevel = nextLevel;
	    }
	  }]);

	  return AbrController;
	}(_eventHandler2.default);

	exports.default = AbrController;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffer Helper class, providing methods dealing buffer length retrieval
	*/

	var BufferHelper = function () {
	  function BufferHelper() {
	    _classCallCheck(this, BufferHelper);
	  }

	  _createClass(BufferHelper, null, [{
	    key: "bufferInfo",
	    value: function bufferInfo(media, pos, maxHoleDuration) {
	      if (media) {
	        var vbuffered = media.buffered,
	            buffered = [],
	            i;
	        for (i = 0; i < vbuffered.length; i++) {
	          buffered.push({ start: vbuffered.start(i), end: vbuffered.end(i) });
	        }
	        return this.bufferedInfo(buffered, pos, maxHoleDuration);
	      } else {
	        return { len: 0, start: 0, end: 0, nextStart: undefined };
	      }
	    }
	  }, {
	    key: "bufferedInfo",
	    value: function bufferedInfo(buffered, pos, maxHoleDuration) {
	      var buffered2 = [],

	      // bufferStart and bufferEnd are buffer boundaries around current video position
	      bufferLen,
	          bufferStart,
	          bufferEnd,
	          bufferStartNext,
	          i;
	      // sort on buffer.start/smaller end (IE does not always return sorted buffered range)
	      buffered.sort(function (a, b) {
	        var diff = a.start - b.start;
	        if (diff) {
	          return diff;
	        } else {
	          return b.end - a.end;
	        }
	      });
	      // there might be some small holes between buffer time range
	      // consider that holes smaller than maxHoleDuration are irrelevant and build another
	      // buffer time range representations that discards those holes
	      for (i = 0; i < buffered.length; i++) {
	        var buf2len = buffered2.length;
	        if (buf2len) {
	          var buf2end = buffered2[buf2len - 1].end;
	          // if small hole (value between 0 or maxHoleDuration ) or overlapping (negative)
	          if (buffered[i].start - buf2end < maxHoleDuration) {
	            // merge overlapping time ranges
	            // update lastRange.end only if smaller than item.end
	            // e.g.  [ 1, 15] with  [ 2,8] => [ 1,15] (no need to modify lastRange.end)
	            // whereas [ 1, 8] with  [ 2,15] => [ 1,15] ( lastRange should switch from [1,8] to [1,15])
	            if (buffered[i].end > buf2end) {
	              buffered2[buf2len - 1].end = buffered[i].end;
	            }
	          } else {
	            // big hole
	            buffered2.push(buffered[i]);
	          }
	        } else {
	          // first value
	          buffered2.push(buffered[i]);
	        }
	      }
	      for (i = 0, bufferLen = 0, bufferStart = bufferEnd = pos; i < buffered2.length; i++) {
	        var start = buffered2[i].start,
	            end = buffered2[i].end;
	        //logger.log('buf start/end:' + buffered.start(i) + '/' + buffered.end(i));
	        if (pos + maxHoleDuration >= start && pos < end) {
	          // play position is inside this buffer TimeRange, retrieve end of buffer position and buffer length
	          bufferStart = start;
	          bufferEnd = end;
	          bufferLen = bufferEnd - pos;
	        } else if (pos + maxHoleDuration < start) {
	          bufferStartNext = start;
	          break;
	        }
	      }
	      return { len: bufferLen, start: bufferStart, end: bufferEnd, nextStart: bufferStartNext };
	    }
	  }]);

	  return BufferHelper;
	}();

	exports.default = BufferHelper;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * EWMA Bandwidth Estimator
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  - heavily inspired from shaka-player
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Tracks bandwidth samples and estimates available bandwidth.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Based on the minimum of two exponentially-weighted moving averages with
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * different half-lives.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _ewma = __webpack_require__(28);

	var _ewma2 = _interopRequireDefault(_ewma);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EwmaBandWidthEstimator = function () {
	  function EwmaBandWidthEstimator(hls, slow, fast, defaultEstimate) {
	    _classCallCheck(this, EwmaBandWidthEstimator);

	    this.hls = hls;
	    this.defaultEstimate_ = defaultEstimate;
	    this.minWeight_ = 0.001;
	    this.minDelayMs_ = 50;
	    this.slow_ = new _ewma2.default(slow);
	    this.fast_ = new _ewma2.default(fast);
	  }

	  _createClass(EwmaBandWidthEstimator, [{
	    key: 'sample',
	    value: function sample(durationMs, numBytes) {
	      durationMs = Math.max(durationMs, this.minDelayMs_);
	      var bandwidth = 8000 * numBytes / durationMs,

	      //console.log('instant bw:'+ Math.round(bandwidth));
	      // we weight sample using loading duration....
	      weight = durationMs / 1000;
	      this.fast_.sample(weight, bandwidth);
	      this.slow_.sample(weight, bandwidth);
	    }
	  }, {
	    key: 'getEstimate',
	    value: function getEstimate() {
	      if (!this.fast_ || !this.slow_ || this.fast_.getTotalWeight() < this.minWeight_) {
	        return this.defaultEstimate_;
	      }
	      //console.log('slow estimate:'+ Math.round(this.slow_.getEstimate()));
	      //console.log('fast estimate:'+ Math.round(this.fast_.getEstimate()));
	      // Take the minimum of these two estimates.  This should have the effect of
	      // adapting down quickly, but up more slowly.
	      return Math.min(this.fast_.getEstimate(), this.slow_.getEstimate());
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);

	  return EwmaBandWidthEstimator;
	}();

	exports.default = EwmaBandWidthEstimator;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * compute an Exponential Weighted moving average
	 * - https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
	 *  - heavily inspired from shaka-player
	 */

	var EWMA = function () {

	  //  About half of the estimated value will be from the last |halfLife| samples by weight.

	  function EWMA(halfLife) {
	    _classCallCheck(this, EWMA);

	    // Larger values of alpha expire historical data more slowly.
	    this.alpha_ = halfLife ? Math.exp(Math.log(0.5) / halfLife) : 0;
	    this.estimate_ = 0;
	    this.totalWeight_ = 0;
	  }

	  _createClass(EWMA, [{
	    key: "sample",
	    value: function sample(weight, value) {
	      var adjAlpha = Math.pow(this.alpha_, weight);
	      this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_;
	      this.totalWeight_ += weight;
	    }
	  }, {
	    key: "getTotalWeight",
	    value: function getTotalWeight() {
	      return this.totalWeight_;
	    }
	  }, {
	    key: "getEstimate",
	    value: function getEstimate() {
	      if (this.alpha_) {
	        var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
	        return this.estimate_ / zeroFactor;
	      } else {
	        return this.estimate_;
	      }
	    }
	  }]);

	  return EWMA;
	}();

	exports.default = EWMA;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	var _errors = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Buffer Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var BufferController = function (_EventHandler) {
	  _inherits(BufferController, _EventHandler);

	  function BufferController(hls) {
	    _classCallCheck(this, BufferController);

	    // the value that we have set mediasource.duration to
	    // (the actual duration may be tweaked slighly by the browser)

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BufferController).call(this, hls, _events2.default.MEDIA_ATTACHING, _events2.default.MEDIA_DETACHING, _events2.default.MANIFEST_PARSED, _events2.default.BUFFER_RESET, _events2.default.BUFFER_APPENDING, _events2.default.BUFFER_CODECS, _events2.default.BUFFER_EOS, _events2.default.BUFFER_FLUSHING, _events2.default.LEVEL_UPDATED));

	    _this._msDuration = null;
	    // the value that we want to set mediaSource.duration to
	    _this._levelDuration = null;

	    // Source Buffer listeners
	    _this.onsbue = _this.onSBUpdateEnd.bind(_this);
	    _this.onsbe = _this.onSBUpdateError.bind(_this);
	    _this.pendingTracks = {};
	    return _this;
	  }

	  _createClass(BufferController, [{
	    key: 'destroy',
	    value: function destroy() {
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onManifestParsed',
	    value: function onManifestParsed(data) {
	      var audioExpected = data.audio,
	          videoExpected = data.video,
	          sourceBufferNb = 0;
	      if (audioExpected || videoExpected) {
	        sourceBufferNb = (audioExpected ? 1 : 0) + (videoExpected ? 1 : 0);
	        _logger.logger.log(sourceBufferNb + ' sourceBuffer(s) expected');
	      }
	      this.sourceBufferNb = sourceBufferNb;
	    }
	  }, {
	    key: 'onMediaAttaching',
	    value: function onMediaAttaching(data) {
	      var media = this.media = data.media;
	      if (media) {
	        // setup the media source
	        var ms = this.mediaSource = new MediaSource();
	        //Media Source listeners
	        this.onmso = this.onMediaSourceOpen.bind(this);
	        this.onmse = this.onMediaSourceEnded.bind(this);
	        this.onmsc = this.onMediaSourceClose.bind(this);
	        ms.addEventListener('sourceopen', this.onmso);
	        ms.addEventListener('sourceended', this.onmse);
	        ms.addEventListener('sourceclose', this.onmsc);
	        // link video and media Source
	        media.src = URL.createObjectURL(ms);
	      }
	    }
	  }, {
	    key: 'onMediaDetaching',
	    value: function onMediaDetaching() {
	      _logger.logger.log('media source detaching');
	      var ms = this.mediaSource;
	      if (ms) {
	        if (ms.readyState === 'open') {
	          try {
	            // endOfStream could trigger exception if any sourcebuffer is in updating state
	            // we don't really care about checking sourcebuffer state here,
	            // as we are anyway detaching the MediaSource
	            // let's just avoid this exception to propagate
	            ms.endOfStream();
	          } catch (err) {
	            _logger.logger.warn('onMediaDetaching:' + err.message + ' while calling endOfStream');
	          }
	        }
	        ms.removeEventListener('sourceopen', this.onmso);
	        ms.removeEventListener('sourceended', this.onmse);
	        ms.removeEventListener('sourceclose', this.onmsc);

	        try {
	          // unlink MediaSource from video tag
	          this.media.src = '';
	          this.media.removeAttribute('src');
	        } catch (err) {
	          _logger.logger.warn('onMediaDetaching:' + err.message + ' while unlinking video.src');
	        }
	        this.mediaSource = null;
	        this.media = null;
	        this.pendingTracks = {};
	        this.sourceBuffer = {};
	      }
	      this.onmso = this.onmse = this.onmsc = null;
	      this.hls.trigger(_events2.default.MEDIA_DETACHED);
	    }
	  }, {
	    key: 'onMediaSourceOpen',
	    value: function onMediaSourceOpen() {
	      _logger.logger.log('media source opened');
	      this.hls.trigger(_events2.default.MEDIA_ATTACHED, { media: this.media });
	      // once received, don't listen anymore to sourceopen event
	      this.mediaSource.removeEventListener('sourceopen', this.onmso);
	      this.checkPendingTracks();
	    }
	  }, {
	    key: 'checkPendingTracks',
	    value: function checkPendingTracks() {
	      // if any buffer codecs pending, check if we have enough to create sourceBuffers
	      var pendingTracks = this.pendingTracks,
	          pendingTracksNb = Object.keys(pendingTracks).length;
	      // if any pending tracks and (if nb of pending tracks matching expected nb or if unknoown expected nb)
	      if (pendingTracksNb && (this.sourceBufferNb === pendingTracksNb || this.sourceBufferNb === 0)) {
	        // ok, let's create them now !
	        this.createSourceBuffers(pendingTracks);
	        this.pendingTracks = {};
	        // append any pending segments now !
	        this.doAppending();
	      }
	    }
	  }, {
	    key: 'onMediaSourceClose',
	    value: function onMediaSourceClose() {
	      _logger.logger.log('media source closed');
	    }
	  }, {
	    key: 'onMediaSourceEnded',
	    value: function onMediaSourceEnded() {
	      _logger.logger.log('media source ended');
	    }
	  }, {
	    key: 'onSBUpdateEnd',
	    value: function onSBUpdateEnd() {

	      if (this._needsFlush) {
	        this.doFlush();
	      }

	      if (this._needsEos) {
	        this.onBufferEos();
	      }
	      this.appending = false;
	      this.hls.trigger(_events2.default.BUFFER_APPENDED, { parent: this.parent });

	      // don't append in flushing mode
	      if (!this._needsFlush) {
	        this.doAppending();
	      }

	      this.updateMediaElementDuration();
	    }
	  }, {
	    key: 'onSBUpdateError',
	    value: function onSBUpdateError(event) {
	      _logger.logger.error('sourceBuffer error:' + event);
	      // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
	      // this error might not always be fatal (it is fatal if decode error is set, in that case
	      // it will be followed by a mediaElement error ...)
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: false });
	      // we don't need to do more than that, as accordin to the spec, updateend will be fired just after
	    }
	  }, {
	    key: 'onBufferReset',
	    value: function onBufferReset() {
	      var sourceBuffer = this.sourceBuffer;
	      for (var type in sourceBuffer) {
	        var sb = sourceBuffer[type];
	        try {
	          this.mediaSource.removeSourceBuffer(sb);
	          sb.removeEventListener('updateend', this.onsbue);
	          sb.removeEventListener('error', this.onsbe);
	        } catch (err) {}
	      }
	      this.sourceBuffer = {};
	      this.flushRange = [];
	      this.appended = 0;
	    }
	  }, {
	    key: 'onBufferCodecs',
	    value: function onBufferCodecs(tracks) {
	      // if source buffer(s) not created yet, appended buffer tracks in this.pendingTracks
	      // if sourcebuffers already created, do nothing ...
	      if (Object.keys(this.sourceBuffer).length === 0) {
	        for (var trackName in tracks) {
	          this.pendingTracks[trackName] = tracks[trackName];
	        }
	        var mediaSource = this.mediaSource;
	        if (mediaSource && mediaSource.readyState === 'open') {
	          // try to create sourcebuffers if mediasource opened
	          this.checkPendingTracks();
	        }
	      }
	    }
	  }, {
	    key: 'createSourceBuffers',
	    value: function createSourceBuffers(tracks) {
	      var sourceBuffer = this.sourceBuffer,
	          mediaSource = this.mediaSource;

	      for (var trackName in tracks) {
	        if (!sourceBuffer[trackName]) {
	          var track = tracks[trackName];
	          // use levelCodec as first priority
	          var codec = track.levelCodec || track.codec;
	          var mimeType = track.container + ';codecs=' + codec;
	          _logger.logger.log('creating sourceBuffer with mimeType:' + mimeType);
	          try {
	            var sb = sourceBuffer[trackName] = mediaSource.addSourceBuffer(mimeType);
	            sb.addEventListener('updateend', this.onsbue);
	            sb.addEventListener('error', this.onsbe);
	            track.buffer = sb;
	          } catch (err) {
	            _logger.logger.error('error while trying to add sourceBuffer:' + err.message);
	            this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: false, err: err, mimeType: mimeType });
	          }
	        }
	      }
	      this.hls.trigger(_events2.default.BUFFER_CREATED, { tracks: tracks });
	    }
	  }, {
	    key: 'onBufferAppending',
	    value: function onBufferAppending(data) {
	      if (!this._needsFlush) {
	        if (!this.segments) {
	          this.segments = [data];
	        } else {
	          this.segments.push(data);
	        }
	        this.doAppending();
	      }
	    }
	  }, {
	    key: 'onBufferAppendFail',
	    value: function onBufferAppendFail(data) {
	      _logger.logger.error('sourceBuffer error:' + data.event);
	      // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
	      // this error might not always be fatal (it is fatal if decode error is set, in that case
	      // it will be followed by a mediaElement error ...)
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: false, frag: this.fragCurrent });
	    }
	  }, {
	    key: 'onBufferEos',
	    value: function onBufferEos() {
	      var sb = this.sourceBuffer,
	          mediaSource = this.mediaSource;
	      if (!mediaSource || mediaSource.readyState !== 'open') {
	        return;
	      }
	      if (!(sb.audio && sb.audio.updating || sb.video && sb.video.updating)) {
	        _logger.logger.log('all media data available, signal endOfStream() to MediaSource and stop loading fragment');
	        //Notify the media element that it now has all of the media data
	        mediaSource.endOfStream();
	        this._needsEos = false;
	      } else {
	        this._needsEos = true;
	      }
	    }
	  }, {
	    key: 'onBufferFlushing',
	    value: function onBufferFlushing(data) {
	      this.flushRange.push({ start: data.startOffset, end: data.endOffset, type: data.type });
	      // attempt flush immediatly
	      this.flushBufferCounter = 0;
	      this.doFlush();
	    }
	  }, {
	    key: 'onLevelUpdated',
	    value: function onLevelUpdated(event) {
	      var details = event.details;
	      if (details.fragments.length === 0) {
	        return;
	      }
	      this._levelDuration = details.totalduration + details.fragments[0].start;
	      this.updateMediaElementDuration();
	    }

	    // https://github.com/dailymotion/hls.js/issues/355

	  }, {
	    key: 'updateMediaElementDuration',
	    value: function updateMediaElementDuration() {
	      if (this._levelDuration === null) {
	        return;
	      }
	      var media = this.media,
	          mediaSource = this.mediaSource,
	          sourceBuffer = this.sourceBuffer;
	      if (!media || !mediaSource || !sourceBuffer || media.readyState === 0 || mediaSource.readyState !== 'open') {
	        return;
	      }
	      for (var type in sourceBuffer) {
	        if (sourceBuffer[type].updating) {
	          // can't set duration whilst a buffer is updating
	          return;
	        }
	      }
	      if (this._msDuration === null) {
	        // initialise to the value that the media source is reporting
	        this._msDuration = mediaSource.duration;
	      }
	      // this._levelDuration was the last value we set.
	      // not using mediaSource.duration as the browser may tweak this value
	      // only update mediasource duration if its value increase, this is to avoid
	      // flushing already buffered portion when switching between quality level, as they
	      if (this._levelDuration > this._msDuration) {
	        _logger.logger.log('Updating mediasource duration to ' + this._levelDuration);
	        mediaSource.duration = this._levelDuration;
	        this._msDuration = this._levelDuration;
	      }
	    }
	  }, {
	    key: 'doFlush',
	    value: function doFlush() {
	      // loop through all buffer ranges to flush
	      while (this.flushRange.length) {
	        var range = this.flushRange[0];
	        // flushBuffer will abort any buffer append in progress and flush Audio/Video Buffer
	        if (this.flushBuffer(range.start, range.end, range.type)) {
	          // range flushed, remove from flush array
	          this.flushRange.shift();
	          this.flushBufferCounter = 0;
	        } else {
	          this._needsFlush = true;
	          // avoid looping, wait for SB update end to retrigger a flush
	          return;
	        }
	      }
	      if (this.flushRange.length === 0) {
	        // everything flushed
	        this._needsFlush = false;

	        // let's recompute this.appended, which is used to avoid flush looping
	        var appended = 0;
	        var sourceBuffer = this.sourceBuffer;
	        for (var type in sourceBuffer) {
	          appended += sourceBuffer[type].buffered.length;
	        }
	        this.appended = appended;
	        this.hls.trigger(_events2.default.BUFFER_FLUSHED);
	      }
	    }
	  }, {
	    key: 'doAppending',
	    value: function doAppending() {
	      var hls = this.hls,
	          sourceBuffer = this.sourceBuffer,
	          segments = this.segments;
	      if (Object.keys(sourceBuffer).length) {
	        if (this.media.error) {
	          this.segments = [];
	          _logger.logger.error('trying to append although a media error occured, flush segment and abort');
	          return;
	        }
	        if (this.appending) {
	          //logger.log(`sb appending in progress`);
	          return;
	        }
	        if (segments && segments.length) {
	          var segment = segments.shift();
	          try {
	            if (sourceBuffer[segment.type]) {
	              //logger.log(`appending ${segment.type} SB, size:${segment.data.length}`);
	              this.parent = segment.parent;
	              sourceBuffer[segment.type].appendBuffer(segment.data);
	              this.appendError = 0;
	              this.appended++;
	              this.appending = true;
	            } else {
	              // in case we don't have any source buffer matching with this segment type,
	              // it means that Mediasource fails to create sourcebuffer
	              // discard this segment, and trigger update end
	              this.onSBUpdateEnd();
	            }
	          } catch (err) {
	            // in case any error occured while appending, put back segment in segments table
	            _logger.logger.error('error while trying to append buffer:' + err.message);
	            segments.unshift(segment);
	            var event = { type: _errors.ErrorTypes.MEDIA_ERROR };
	            if (err.code !== 22) {
	              if (this.appendError) {
	                this.appendError++;
	              } else {
	                this.appendError = 1;
	              }
	              event.details = _errors.ErrorDetails.BUFFER_APPEND_ERROR;
	              event.frag = this.fragCurrent;
	              /* with UHD content, we could get loop of quota exceeded error until
	                browser is able to evict some data from sourcebuffer. retrying help recovering this
	              */
	              if (this.appendError > hls.config.appendErrorMaxRetry) {
	                _logger.logger.log('fail ' + hls.config.appendErrorMaxRetry + ' times to append segment in sourceBuffer');
	                segments = [];
	                event.fatal = true;
	                hls.trigger(_events2.default.ERROR, event);
	                return;
	              } else {
	                event.fatal = false;
	                hls.trigger(_events2.default.ERROR, event);
	              }
	            } else {
	              // QuotaExceededError: http://www.w3.org/TR/html5/infrastructure.html#quotaexceedederror
	              // let's stop appending any segments, and report BUFFER_FULL_ERROR error
	              this.segments = [];
	              event.details = _errors.ErrorDetails.BUFFER_FULL_ERROR;
	              hls.trigger(_events2.default.ERROR, event);
	              return;
	            }
	          }
	        }
	      }
	    }

	    /*
	      flush specified buffered range,
	      return true once range has been flushed.
	      as sourceBuffer.remove() is asynchronous, flushBuffer will be retriggered on sourceBuffer update end
	    */

	  }, {
	    key: 'flushBuffer',
	    value: function flushBuffer(startOffset, endOffset, typeIn) {
	      var sb, i, bufStart, bufEnd, flushStart, flushEnd;
	      //logger.log('flushBuffer,pos/start/end: ' + this.media.currentTime + '/' + startOffset + '/' + endOffset);
	      // safeguard to avoid infinite looping : don't try to flush more than the nb of appended segments
	      if (this.flushBufferCounter < this.appended && this.sourceBuffer) {
	        for (var type in this.sourceBuffer) {
	          // check if sourcebuffer type is defined (typeIn): if yes, let's only flush this one
	          // if no, let's flush all sourcebuffers
	          if (typeIn && type !== typeIn) {
	            continue;
	          }
	          sb = this.sourceBuffer[type];
	          if (!sb.updating) {
	            for (i = 0; i < sb.buffered.length; i++) {
	              bufStart = sb.buffered.start(i);
	              bufEnd = sb.buffered.end(i);
	              // workaround firefox not able to properly flush multiple buffered range.
	              if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 && endOffset === Number.POSITIVE_INFINITY) {
	                flushStart = startOffset;
	                flushEnd = endOffset;
	              } else {
	                flushStart = Math.max(bufStart, startOffset);
	                flushEnd = Math.min(bufEnd, endOffset);
	              }
	              /* sometimes sourcebuffer.remove() does not flush
	                 the exact expected time range.
	                 to avoid rounding issues/infinite loop,
	                 only flush buffer range of length greater than 500ms.
	              */
	              if (Math.min(flushEnd, bufEnd) - flushStart > 0.5) {
	                this.flushBufferCounter++;
	                _logger.logger.log('flush ' + type + ' [' + flushStart + ',' + flushEnd + '], of [' + bufStart + ',' + bufEnd + '], pos:' + this.media.currentTime);
	                sb.remove(flushStart, flushEnd);
	                return false;
	              }
	            }
	          } else {
	            //logger.log('abort ' + type + ' append in progress');
	            // this will abort any appending in progress
	            //sb.abort();
	            _logger.logger.warn('cannot flush, sb updating in progress');
	            return false;
	          }
	        }
	      } else {
	        _logger.logger.warn('abort flushing too many retries');
	      }
	      _logger.logger.log('buffer flushed');
	      // everything flushed !
	      return true;
	    }
	  }]);

	  return BufferController;
	}(_eventHandler2.default);

	exports.default = BufferController;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * cap stream level to media size dimension controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var CapLevelController = function (_EventHandler) {
	  _inherits(CapLevelController, _EventHandler);

	  function CapLevelController(hls) {
	    _classCallCheck(this, CapLevelController);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CapLevelController).call(this, hls, _events2.default.FPS_DROP_LEVEL_CAPPING, _events2.default.MEDIA_ATTACHING, _events2.default.MANIFEST_PARSED));
	  }

	  _createClass(CapLevelController, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (this.hls.config.capLevelToPlayerSize) {
	        this.media = this.restrictedLevels = null;
	        this.autoLevelCapping = Number.POSITIVE_INFINITY;
	        if (this.timer) {
	          this.timer = clearInterval(this.timer);
	        }
	      }
	    }
	  }, {
	    key: 'onFpsDropLevelCapping',
	    value: function onFpsDropLevelCapping(data) {
	      if (!this.restrictedLevels) {
	        this.restrictedLevels = [];
	      }
	      if (!this.isLevelRestricted(data.droppedLevel)) {
	        this.restrictedLevels.push(data.droppedLevel);
	      }
	    }
	  }, {
	    key: 'onMediaAttaching',
	    value: function onMediaAttaching(data) {
	      this.media = data.media instanceof HTMLVideoElement ? data.media : null;
	    }
	  }, {
	    key: 'onManifestParsed',
	    value: function onManifestParsed(data) {
	      if (this.hls.config.capLevelToPlayerSize) {
	        this.autoLevelCapping = Number.POSITIVE_INFINITY;
	        this.levels = data.levels;
	        this.hls.firstLevel = this.getMaxLevel(data.firstLevel);
	        clearInterval(this.timer);
	        this.timer = setInterval(this.detectPlayerSize.bind(this), 1000);
	        this.detectPlayerSize();
	      }
	    }
	  }, {
	    key: 'detectPlayerSize',
	    value: function detectPlayerSize() {
	      if (this.media) {
	        var levelsLength = this.levels ? this.levels.length : 0;
	        if (levelsLength) {
	          this.hls.autoLevelCapping = this.getMaxLevel(levelsLength - 1);
	          if (this.hls.autoLevelCapping > this.autoLevelCapping) {
	            // if auto level capping has a higher value for the previous one, flush the buffer using nextLevelSwitch
	            // usually happen when the user go to the fullscreen mode.
	            this.hls.streamController.nextLevelSwitch();
	          }
	          this.autoLevelCapping = this.hls.autoLevelCapping;
	        }
	      }
	    }

	    /*
	    * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
	    */

	  }, {
	    key: 'getMaxLevel',
	    value: function getMaxLevel(capLevelIndex) {
	      var result = 0,
	          i = void 0,
	          level = void 0,
	          mWidth = this.mediaWidth,
	          mHeight = this.mediaHeight,
	          lWidth = 0,
	          lHeight = 0;

	      for (i = 0; i <= capLevelIndex; i++) {
	        level = this.levels[i];
	        if (this.isLevelRestricted(i)) {
	          break;
	        }
	        result = i;
	        lWidth = level.width;
	        lHeight = level.height;
	        if (mWidth <= lWidth || mHeight <= lHeight) {
	          break;
	        }
	      }
	      return result;
	    }
	  }, {
	    key: 'isLevelRestricted',
	    value: function isLevelRestricted(level) {
	      return this.restrictedLevels && this.restrictedLevels.indexOf(level) !== -1 ? true : false;
	    }
	  }, {
	    key: 'contentScaleFactor',
	    get: function get() {
	      var pixelRatio = 1;
	      try {
	        pixelRatio = window.devicePixelRatio;
	      } catch (e) {}
	      return pixelRatio;
	    }
	  }, {
	    key: 'mediaWidth',
	    get: function get() {
	      var width = void 0;
	      if (this.media) {
	        width = this.media.width || this.media.clientWidth || this.media.offsetWidth;
	        width *= this.contentScaleFactor;
	      }
	      return width;
	    }
	  }, {
	    key: 'mediaHeight',
	    get: function get() {
	      var height = void 0;
	      if (this.media) {
	        height = this.media.height || this.media.clientHeight || this.media.offsetHeight;
	        height *= this.contentScaleFactor;
	      }
	      return height;
	    }
	  }]);

	  return CapLevelController;
	}(_eventHandler2.default);

	exports.default = CapLevelController;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _demuxer = __webpack_require__(32);

	var _demuxer2 = _interopRequireDefault(_demuxer);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	var _binarySearch = __webpack_require__(50);

	var _binarySearch2 = _interopRequireDefault(_binarySearch);

	var _bufferHelper = __webpack_require__(26);

	var _bufferHelper2 = _interopRequireDefault(_bufferHelper);

	var _levelHelper = __webpack_require__(51);

	var _levelHelper2 = _interopRequireDefault(_levelHelper);

	var _errors = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Audio Stream Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var State = {
	  STOPPED: 'STOPPED',
	  STARTING: 'STARTING',
	  IDLE: 'IDLE',
	  PAUSED: 'PAUSED',
	  KEY_LOADING: 'KEY_LOADING',
	  FRAG_LOADING: 'FRAG_LOADING',
	  FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
	  WAITING_TRACK: 'WAITING_TRACK',
	  PARSING: 'PARSING',
	  PARSED: 'PARSED',
	  ENDED: 'ENDED',
	  ERROR: 'ERROR'
	};

	var AudioStreamController = function (_EventHandler) {
	  _inherits(AudioStreamController, _EventHandler);

	  function AudioStreamController(hls) {
	    _classCallCheck(this, AudioStreamController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AudioStreamController).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.AUDIO_TRACKS_UPDATED, _events2.default.AUDIO_TRACK_SWITCH, _events2.default.AUDIO_TRACK_LOADED, _events2.default.KEY_LOADED, _events2.default.FRAG_LOADED, _events2.default.FRAG_PARSING_INIT_SEGMENT, _events2.default.FRAG_PARSING_DATA, _events2.default.FRAG_PARSED, _events2.default.ERROR, _events2.default.BUFFER_CREATED, _events2.default.BUFFER_APPENDED, _events2.default.BUFFER_FLUSHED));

	    _this.config = hls.config;
	    _this.audioCodecSwap = false;
	    _this.ticks = 0;
	    _this.ontick = _this.tick.bind(_this);
	    return _this;
	  }

	  _createClass(AudioStreamController, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.stopLoad();
	      if (this.timer) {
	        clearInterval(this.timer);
	        this.timer = null;
	      }
	      _eventHandler2.default.prototype.destroy.call(this);
	      this.state = State.STOPPED;
	    }
	  }, {
	    key: 'startLoad',
	    value: function startLoad(startPosition) {
	      if (this.tracks) {
	        var media = this.media,
	            lastCurrentTime = this.lastCurrentTime;
	        this.stopLoad();
	        if (!this.timer) {
	          this.timer = setInterval(this.ontick, 100);
	        }
	        this.fragLoadError = 0;
	        if (media && lastCurrentTime) {
	          _logger.logger.log('configure startPosition @' + lastCurrentTime);
	          this.state = State.IDLE;
	        } else {
	          this.lastCurrentTime = this.startPosition ? this.startPosition : startPosition;
	          this.state = State.STARTING;
	        }
	        this.nextLoadPosition = this.startPosition = this.lastCurrentTime;
	        this.tick();
	      } else {
	        _logger.logger.warn('cannot start loading as audio tracks not parsed yet');
	        this.startPosition = startPosition;
	        this.state = State.STOPPED;
	      }
	    }
	  }, {
	    key: 'stopLoad',
	    value: function stopLoad() {
	      var frag = this.fragCurrent;
	      if (frag) {
	        if (frag.loader) {
	          frag.loader.abort();
	        }
	        this.fragCurrent = null;
	      }
	      this.fragPrevious = null;
	      if (this.demuxer) {
	        this.demuxer.destroy();
	        this.demuxer = null;
	      }
	      this.state = State.STOPPED;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.ticks++;
	      if (this.ticks === 1) {
	        this.doTick();
	        if (this.ticks > 1) {
	          setTimeout(this.tick, 1);
	        }
	        this.ticks = 0;
	      }
	    }
	  }, {
	    key: 'doTick',
	    value: function doTick() {
	      var _this2 = this;

	      var pos,
	          track,
	          trackDetails,
	          hls = this.hls,
	          config = hls.config;
	      _logger.logger.log('audioStream:' + this.state);
	      switch (this.state) {
	        case State.ERROR:
	        //don't do anything in error state to avoid breaking further ...
	        case State.PAUSED:
	          //don't do anything in paused state either ...
	          break;
	        case State.STARTING:
	          this.state = State.WAITING_TRACK;
	          this.loadedmetadata = false;
	          break;
	        case State.IDLE:
	          // if video not attached AND
	          // start fragment already requested OR start frag prefetch disable
	          // exit loop
	          // => if media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
	          if (!this.media && (this.startFragRequested || !config.startFragPrefetch)) {
	            break;
	          }
	          // determine next candidate fragment to be loaded, based on current position and
	          //  end of buffer position
	          // if we have not yet loaded any fragment, start loading from start position
	          if (this.loadedmetadata) {
	            pos = this.media.currentTime;
	          } else {
	            pos = this.nextLoadPosition;
	          }
	          var media = this.mediaBuffer ? this.mediaBuffer : this.media;
	          var bufferInfo = _bufferHelper2.default.bufferInfo(media, pos, config.maxBufferHole),
	              bufferLen = bufferInfo.len,
	              bufferEnd = bufferInfo.end,
	              fragPrevious = this.fragPrevious,
	              maxBufLen = config.maxMaxBufferLength;

	          // if buffer length is less than maxBufLen try to load a new fragment
	          if (bufferLen < maxBufLen && this.trackId < this.tracks.length) {
	            trackDetails = this.tracks[this.trackId].details;
	            // if track info not retrieved yet, switch state and wait for track retrieval
	            if (typeof trackDetails === 'undefined') {
	              this.state = State.WAITING_TRACK;
	              break;
	            }
	            // find fragment index, contiguous with end of buffer position
	            var fragments = trackDetails.fragments,
	                fragLen = fragments.length,
	                start = fragments[0].start,
	                end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
	                frag = void 0;

	            // if bufferEnd before start of playlist, load first fragment
	            if (bufferEnd < start) {
	              frag = fragments[0];
	            } else {
	              (function () {
	                var foundFrag = void 0;
	                var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
	                if (bufferEnd < end) {
	                  if (bufferEnd > end - maxFragLookUpTolerance) {
	                    maxFragLookUpTolerance = 0;
	                  }
	                  foundFrag = _binarySearch2.default.search(fragments, function (candidate) {
	                    // offset should be within fragment boundary - config.maxFragLookUpTolerance
	                    // this is to cope with situations like
	                    // bufferEnd = 9.991
	                    // frag[Ø] : [0,10]
	                    // frag[1] : [10,20]
	                    // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
	                    //              frag start               frag start+duration
	                    //                  |-----------------------------|
	                    //              <--->                         <--->
	                    //  ...--------><-----------------------------><---------....
	                    // previous frag         matching fragment         next frag
	                    //  return -1             return 0                 return 1
	                    //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
	                    if (candidate.start + candidate.duration - maxFragLookUpTolerance <= bufferEnd) {
	                      return 1;
	                    } else if (candidate.start - maxFragLookUpTolerance > bufferEnd) {
	                      return -1;
	                    }
	                    return 0;
	                  });
	                } else {
	                  // reach end of playlist
	                  foundFrag = fragments[fragLen - 1];
	                }
	                if (foundFrag) {
	                  frag = foundFrag;
	                  start = foundFrag.start;
	                  //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
	                  if (fragPrevious && frag.level === fragPrevious.level && frag.sn === fragPrevious.sn) {
	                    if (frag.sn < trackDetails.endSN) {
	                      frag = fragments[frag.sn + 1 - trackDetails.startSN];
	                      _logger.logger.log('SN just loaded, load next one: ' + frag.sn);
	                    } else {
	                      // have we reached end of VOD playlist ?
	                      if (!trackDetails.live) {
	                        _this2.state = State.ENDED;
	                      }
	                      frag = null;
	                    }
	                  }
	                }
	              })();
	            }
	            if (frag) {
	              //logger.log('      loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
	              if (frag.decryptdata.uri != null && frag.decryptdata.key == null) {
	                _logger.logger.log('Loading key for ' + frag.sn + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + this.trackId);
	                this.state = State.KEY_LOADING;
	                hls.trigger(_events2.default.KEY_LOADING, { frag: frag });
	              } else {
	                _logger.logger.log('Loading ' + frag.sn + ' of [' + trackDetails.startSN + ' ,' + trackDetails.endSN + '],track ' + this.trackId + ', currentTime:' + pos + ',bufferEnd:' + bufferEnd.toFixed(3));
	                // ensure that we are not reloading the same fragments in loop ...
	                if (this.fragLoadIdx !== undefined) {
	                  this.fragLoadIdx++;
	                } else {
	                  this.fragLoadIdx = 0;
	                }
	                if (frag.loadCounter) {
	                  frag.loadCounter++;
	                  var maxThreshold = config.fragLoadingLoopThreshold;
	                  // if this frag has already been loaded 3 times, and if it has been reloaded recently
	                  if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) {
	                    hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: false, frag: frag });
	                    return;
	                  }
	                } else {
	                  frag.loadCounter = 1;
	                }
	                frag.loadIdx = this.fragLoadIdx;
	                this.fragCurrent = frag;
	                this.startFragRequested = true;
	                hls.trigger(_events2.default.FRAG_LOADING, { frag: frag });
	                this.state = State.FRAG_LOADING;
	              }
	            }
	          }
	          break;
	        case State.WAITING_TRACK:
	          track = this.tracks[this.trackId];
	          // check if playlist is already loaded
	          if (track && track.details) {
	            this.state = State.IDLE;
	          }
	          break;
	        case State.FRAG_LOADING_WAITING_RETRY:
	          var now = performance.now();
	          var retryDate = this.retryDate;
	          media = this.media;
	          var isSeeking = media && media.seeking;
	          // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
	          if (!retryDate || now >= retryDate || isSeeking) {
	            _logger.logger.log('audioStreamController: retryDate reached, switch back to IDLE state');
	            this.state = State.IDLE;
	          }
	          break;
	        case State.STOPPED:
	        case State.FRAG_LOADING:
	        case State.PARSING:
	        case State.PARSED:
	        case State.ENDED:
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'onMediaAttached',
	    value: function onMediaAttached(data) {
	      var media = this.media = data.media;
	      this.onvseeking = this.onMediaSeeking.bind(this);
	      this.onvended = this.onMediaEnded.bind(this);
	      media.addEventListener('seeking', this.onvseeking);
	      media.addEventListener('ended', this.onvended);
	      var config = this.config;
	      if (this.tracks && config.autoStartLoad) {
	        this.startLoad(config.startPosition);
	      }
	    }
	  }, {
	    key: 'onMediaDetaching',
	    value: function onMediaDetaching() {
	      var media = this.media;
	      if (media && media.ended) {
	        _logger.logger.log('MSE detaching and video ended, reset startPosition');
	        this.startPosition = this.lastCurrentTime = 0;
	      }

	      // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
	      var tracks = this.tracks;
	      if (tracks) {
	        // reset fragment load counter
	        tracks.forEach(function (track) {
	          if (track.details) {
	            track.details.fragments.forEach(function (fragment) {
	              fragment.loadCounter = undefined;
	            });
	          }
	        });
	      }
	      // remove video listeners
	      if (media) {
	        media.removeEventListener('seeking', this.onvseeking);
	        media.removeEventListener('ended', this.onvended);
	        this.onvseeking = this.onvseeked = this.onvended = null;
	      }
	      this.media = null;
	      this.loadedmetadata = false;
	      this.stopLoad();
	    }
	  }, {
	    key: 'onMediaSeeking',
	    value: function onMediaSeeking() {
	      if (this.state === State.ENDED) {
	        // switch to IDLE state to check for potential new fragment
	        this.state = State.IDLE;
	      }
	      if (this.media) {
	        this.lastCurrentTime = this.media.currentTime;
	      }
	      // avoid reporting fragment loop loading error in case user is seeking several times on same position
	      if (this.fragLoadIdx !== undefined) {
	        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	      }
	      // tick to speed up processing
	      this.tick();
	    }
	  }, {
	    key: 'onMediaEnded',
	    value: function onMediaEnded() {
	      // reset startPosition and lastCurrentTime to restart playback @ stream beginning
	      this.startPosition = this.lastCurrentTime = 0;
	    }
	  }, {
	    key: 'onAudioTracksUpdated',
	    value: function onAudioTracksUpdated(data) {
	      _logger.logger.log('audio tracks updated');
	      this.tracks = data.audioTracks;
	    }
	  }, {
	    key: 'onAudioTrackSwitch',
	    value: function onAudioTrackSwitch(data) {
	      this.trackId = data.id;
	      this.state = State.IDLE;

	      this.fragCurrent = null;
	      this.state = State.PAUSED;
	      // flush audio source buffer
	      this.hls.trigger(_events2.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: 'audio' });
	      this.tick();
	    }
	  }, {
	    key: 'onAudioTrackLoaded',
	    value: function onAudioTrackLoaded(data) {
	      var details = data.details,
	          trackId = data.id,
	          track = this.tracks[trackId],
	          duration = details.totalduration;

	      _logger.logger.log('track ' + trackId + ' loaded [' + details.startSN + ',' + details.endSN + '],duration:' + duration);
	      details.PTSKnown = false;
	      track.details = details;

	      // compute start position
	      if (!this.startFragRequested) {
	        // compute start position if set to -1. use it straight away if value is defined
	        if (this.startPosition === -1) {
	          // first, check if start time offset has been set in playlist, if yes, use this value
	          var startTimeOffset = details.startTimeOffset;
	          if (!isNaN(startTimeOffset)) {
	            _logger.logger.log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
	            this.startPosition = startTimeOffset;
	          } else {
	            this.startPosition = 0;
	          }
	        }
	        this.nextLoadPosition = this.startPosition;
	      }
	      // only switch batck to IDLE state if we were waiting for track to start downloading a new fragment
	      if (this.state === State.WAITING_TRACK) {
	        this.state = State.IDLE;
	      }
	      //trigger handler right now
	      this.tick();
	    }
	  }, {
	    key: 'onKeyLoaded',
	    value: function onKeyLoaded() {
	      if (this.state === State.KEY_LOADING) {
	        this.state = State.IDLE;
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onFragLoaded',
	    value: function onFragLoaded(data) {
	      var fragCurrent = this.fragCurrent;
	      if (this.state === State.FRAG_LOADING && fragCurrent && data.frag.type === 'audio' && data.frag.level === fragCurrent.level && data.frag.sn === fragCurrent.sn) {
	        this.state = State.PARSING;
	        // transmux the MPEG-TS data to ISO-BMFF segments
	        this.stats = data.stats;
	        var track = this.tracks[this.trackId],
	            details = track.details,
	            duration = details.totalduration,
	            start = fragCurrent.start,
	            trackId = fragCurrent.level,
	            sn = fragCurrent.sn,
	            audioCodec = this.config.defaultAudioCodec || track.audioCodec;
	        this.pendingAppending = 0;
	        if (!this.demuxer) {
	          this.demuxer = new _demuxer2.default(this.hls, 'audio');
	        }
	        _logger.logger.log('Demuxing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],track ' + trackId);
	        this.demuxer.push(data.payload, audioCodec, null, start, fragCurrent.cc, trackId, sn, duration, fragCurrent.decryptdata);
	      }
	      this.fragLoadError = 0;
	    }
	  }, {
	    key: 'onFragParsingInitSegment',
	    value: function onFragParsingInitSegment(data) {
	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'audio' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        var tracks = data.tracks,
	            track = void 0;

	        // include levelCodec in audio and video tracks
	        track = tracks.audio;
	        if (track) {
	          track.levelCodec = 'mp4a.40.2';
	          track.id = data.id;
	          this.hls.trigger(_events2.default.BUFFER_CODECS, tracks);
	          _logger.logger.log('track:audio,container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
	          var initSegment = track.initSegment;
	          if (initSegment) {
	            this.pendingAppending++;
	            this.hls.trigger(_events2.default.BUFFER_APPENDING, { type: 'audio', data: initSegment, parent: 'audio' });
	          }
	          //trigger handler right now
	          this.tick();
	        }
	      }
	    }
	  }, {
	    key: 'onFragParsingData',
	    value: function onFragParsingData(data) {
	      var _this3 = this;

	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'audio' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        var track = this.tracks[this.trackId],
	            frag = this.fragCurrent;

	        _logger.logger.log('parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb);
	        _levelHelper2.default.updateFragPTSDTS(track.details, frag.sn, data.startPTS, data.endPTS);

	        [data.data1, data.data2].forEach(function (buffer) {
	          if (buffer) {
	            _this3.pendingAppending++;
	            _this3.hls.trigger(_events2.default.BUFFER_APPENDING, { type: data.type, data: buffer, parent: 'audio' });
	          }
	        });
	        this.nextLoadPosition = data.endPTS;
	        //trigger handler right now
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onFragParsed',
	    value: function onFragParsed(data) {
	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'audio' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        this.stats.tparsed = performance.now();
	        this.state = State.PARSED;
	        this._checkAppendedParsed();
	      }
	    }
	  }, {
	    key: 'onBufferCreated',
	    value: function onBufferCreated(data) {
	      var audioTrack = data.tracks.audio;
	      if (audioTrack) {
	        this.mediaBuffer = audioTrack.buffer;
	        this.loadedmetadata = true;
	      }
	    }
	  }, {
	    key: 'onBufferAppended',
	    value: function onBufferAppended(data) {
	      if (data.parent === 'audio') {
	        switch (this.state) {
	          case State.PARSING:
	          case State.PARSED:
	            this.pendingAppending--;
	            this._checkAppendedParsed();
	            break;
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: '_checkAppendedParsed',
	    value: function _checkAppendedParsed() {
	      //trigger handler right now
	      if (this.state === State.PARSED && this.pendingAppending === 0) {
	        var frag = this.fragCurrent,
	            stats = this.stats;
	        if (frag) {
	          this.fragPrevious = frag;
	          stats.tbuffered = performance.now();
	          this.fragLastKbps = Math.round(8 * stats.length / (stats.tbuffered - stats.tfirst));
	          this.hls.trigger(_events2.default.FRAG_BUFFERED, { stats: stats, frag: frag, id: 'audio' });
	          var media = this.mediaBuffer ? this.mediaBuffer : this.media;
	          _logger.logger.log('audio buffered : ' + this.timeRangesToString(media.buffered));
	          this.state = State.IDLE;
	        }
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onError',
	    value: function onError(data) {
	      switch (data.details) {
	        case _errors.ErrorDetails.FRAG_LOAD_ERROR:
	        case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
	          if (!data.fatal) {
	            var loadError = this.fragLoadError;
	            if (loadError) {
	              loadError++;
	            } else {
	              loadError = 1;
	            }
	            if (loadError <= this.config.fragLoadingMaxRetry) {
	              this.fragLoadError = loadError;
	              // reset load counter to avoid frag loop loading error
	              data.frag.loadCounter = 0;
	              // exponential backoff capped to 64s
	              var delay = Math.min(Math.pow(2, loadError - 1) * this.config.fragLoadingRetryDelay, 64000);
	              _logger.logger.warn('audioStreamController: frag loading failed, retry in ' + delay + ' ms');
	              this.retryDate = performance.now() + delay;
	              // retry loading state
	              this.state = State.FRAG_LOADING_WAITING_RETRY;
	            } else {
	              _logger.logger.error('audioStreamController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
	              // redispatch same error but with fatal set to true
	              data.fatal = true;
	              this.hls.trigger(_events2.default.ERROR, data);
	              this.state = State.ERROR;
	            }
	          }
	          break;
	        case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
	        case _errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
	        case _errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
	        case _errors.ErrorDetails.KEY_LOAD_ERROR:
	        case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
	          //  when in ERROR state, don't switch back to IDLE state in case a non-fatal error is received
	          if (this.state !== State.ERROR) {
	            // if fatal error, stop processing, otherwise move to IDLE to retry loading
	            this.state = data.fatal ? State.ERROR : State.IDLE;
	            _logger.logger.warn('audioStreamController: ' + data.details + ' while loading frag,switch to ' + this.state + ' state ...');
	          }
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'onBufferFlushed',
	    value: function onBufferFlushed() {
	      // increase fragment load Index to avoid frag loop loading error after buffer flush
	      this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	      // move to IDLE once flush complete. this should trigger new fragment loading
	      this.state = State.IDLE;
	      // reset reference to frag
	      this.fragPrevious = null;
	      this.tick();
	    }
	  }, {
	    key: 'timeRangesToString',
	    value: function timeRangesToString(r) {
	      var log = '',
	          len = r.length;
	      for (var i = 0; i < len; i++) {
	        log += '[' + r.start(i) + ',' + r.end(i) + ']';
	      }
	      return log;
	    }
	  }]);

	  return AudioStreamController;
	}(_eventHandler2.default);

	exports.default = AudioStreamController;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _demuxerInline = __webpack_require__(33);

	var _demuxerInline2 = _interopRequireDefault(_demuxerInline);

	var _demuxerWorker = __webpack_require__(44);

	var _demuxerWorker2 = _interopRequireDefault(_demuxerWorker);

	var _logger = __webpack_require__(21);

	var _decrypter = __webpack_require__(46);

	var _decrypter2 = _interopRequireDefault(_decrypter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Demuxer = function () {
	  function Demuxer(hls, id) {
	    _classCallCheck(this, Demuxer);

	    this.hls = hls;
	    this.id = id;
	    var typeSupported = {
	      mp4: MediaSource.isTypeSupported('video/mp4'),
	      mp2t: hls.config.enableMP2TPassThrough && MediaSource.isTypeSupported('video/mp2t')
	    };
	    if (hls.config.enableWorker && typeof Worker !== 'undefined') {
	      _logger.logger.log('demuxing in webworker');
	      try {
	        var work = __webpack_require__(49);
	        this.w = work(_demuxerWorker2.default);
	        this.onwmsg = this.onWorkerMessage.bind(this);
	        this.w.addEventListener('message', this.onwmsg);
	        this.w.postMessage({ cmd: 'init', typeSupported: typeSupported, id: id, config: JSON.stringify(hls.config) });
	      } catch (err) {
	        _logger.logger.error('error while initializing DemuxerWorker, fallback on DemuxerInline');
	        this.demuxer = new _demuxerInline2.default(hls, id, typeSupported);
	      }
	    } else {
	      this.demuxer = new _demuxerInline2.default(hls, id, typeSupported);
	    }
	    this.demuxInitialized = true;
	  }

	  _createClass(Demuxer, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (this.w) {
	        this.w.removeEventListener('message', this.onwmsg);
	        this.w.terminate();
	        this.w = null;
	      } else {
	        this.demuxer.destroy();
	        this.demuxer = null;
	      }
	      if (this.decrypter) {
	        this.decrypter.destroy();
	        this.decrypter = null;
	      }
	    }
	  }, {
	    key: 'pushDecrypted',
	    value: function pushDecrypted(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration) {
	      if (this.w) {
	        // post fragment payload as transferable objects (no copy)
	        this.w.postMessage({ cmd: 'demux', data: data, audioCodec: audioCodec, videoCodec: videoCodec, timeOffset: timeOffset, cc: cc, level: level, sn: sn, duration: duration }, [data]);
	      } else {
	        this.demuxer.push(new Uint8Array(data), audioCodec, videoCodec, timeOffset, cc, level, sn, duration);
	      }
	    }
	  }, {
	    key: 'push',
	    value: function push(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration, decryptdata) {
	      if (data.byteLength > 0 && decryptdata != null && decryptdata.key != null && decryptdata.method === 'AES-128') {
	        if (this.decrypter == null) {
	          this.decrypter = new _decrypter2.default(this.hls);
	        }

	        var localthis = this;
	        this.decrypter.decrypt(data, decryptdata.key, decryptdata.iv, function (decryptedData) {
	          localthis.pushDecrypted(decryptedData, audioCodec, videoCodec, timeOffset, cc, level, sn, duration);
	        });
	      } else {
	        this.pushDecrypted(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration);
	      }
	    }
	  }, {
	    key: 'onWorkerMessage',
	    value: function onWorkerMessage(ev) {
	      var data = ev.data,
	          hls = this.hls,
	          id = data.id,
	          level = data.level,
	          sn = data.sn;

	      //console.log('onWorkerMessage:' + data.event);
	      switch (data.event) {
	        case _events2.default.FRAG_PARSING_INIT_SEGMENT:
	          hls.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT, { id: id, level: level, sn: sn, tracks: data.tracks, unique: data.unique });
	          break;
	        case _events2.default.FRAG_PARSING_DATA:
	          hls.trigger(_events2.default.FRAG_PARSING_DATA, {
	            id: id,
	            level: level,
	            sn: sn,
	            data1: new Uint8Array(data.data1),
	            data2: new Uint8Array(data.data2),
	            startPTS: data.startPTS,
	            endPTS: data.endPTS,
	            startDTS: data.startDTS,
	            endDTS: data.endDTS,
	            type: data.type,
	            nb: data.nb,
	            dropped: data.dropped
	          });
	          break;
	        case _events2.default.FRAG_PARSING_METADATA:
	          hls.trigger(_events2.default.FRAG_PARSING_METADATA, {
	            id: id,
	            level: level,
	            sn: sn,
	            samples: data.samples
	          });
	          break;
	        case _events2.default.FRAG_PARSING_USERDATA:
	          hls.trigger(_events2.default.FRAG_PARSING_USERDATA, {
	            id: id,
	            level: level,
	            sn: sn,
	            samples: data.samples
	          });
	          break;
	        default:
	          hls.trigger(data.event, data.data);
	          break;
	      }
	    }
	  }]);

	  return Demuxer;
	}();

	exports.default = Demuxer;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*  inline demuxer.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   probe fragments and instantiate appropriate demuxer depending on content type (TSDemuxer, AACDemuxer, ...)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _errors = __webpack_require__(18);

	var _aacdemuxer = __webpack_require__(34);

	var _aacdemuxer2 = _interopRequireDefault(_aacdemuxer);

	var _tsdemuxer = __webpack_require__(37);

	var _tsdemuxer2 = _interopRequireDefault(_tsdemuxer);

	var _mp4Remuxer = __webpack_require__(39);

	var _mp4Remuxer2 = _interopRequireDefault(_mp4Remuxer);

	var _passthroughRemuxer = __webpack_require__(43);

	var _passthroughRemuxer2 = _interopRequireDefault(_passthroughRemuxer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DemuxerInline = function () {
	  function DemuxerInline(hls, id, typeSupported) {
	    var config = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	    _classCallCheck(this, DemuxerInline);

	    this.hls = hls;
	    this.id = id;
	    this.config = this.hls.config || config;
	    this.typeSupported = typeSupported;
	  }

	  _createClass(DemuxerInline, [{
	    key: 'destroy',
	    value: function destroy() {
	      var demuxer = this.demuxer;
	      if (demuxer) {
	        demuxer.destroy();
	      }
	    }
	  }, {
	    key: 'push',
	    value: function push(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration) {
	      var demuxer = this.demuxer;
	      if (!demuxer) {
	        var hls = this.hls,
	            id = this.id;
	        // probe for content type
	        if (_tsdemuxer2.default.probe(data)) {
	          if (this.typeSupported.mp2t === true) {
	            demuxer = new _tsdemuxer2.default(hls, id, _passthroughRemuxer2.default, this.config);
	          } else {
	            demuxer = new _tsdemuxer2.default(hls, id, _mp4Remuxer2.default, this.config);
	          }
	        } else if (_aacdemuxer2.default.probe(data)) {
	          demuxer = new _aacdemuxer2.default(hls, id, _mp4Remuxer2.default, this.config);
	        } else {
	          hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, id: id, details: _errors.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: 'no demux matching with content found' });
	          return;
	        }
	        this.demuxer = demuxer;
	      }
	      demuxer.push(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration);
	    }
	  }]);

	  return DemuxerInline;
	}();

	exports.default = DemuxerInline;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AAC demuxer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _adts = __webpack_require__(35);

	var _adts2 = _interopRequireDefault(_adts);

	var _logger = __webpack_require__(21);

	var _id = __webpack_require__(36);

	var _id2 = _interopRequireDefault(_id);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AACDemuxer = function () {
	  function AACDemuxer(observer, id, remuxerClass, config) {
	    _classCallCheck(this, AACDemuxer);

	    this.observer = observer;
	    this.id = id;
	    this.remuxerClass = remuxerClass;
	    this.config = config;
	    this.remuxer = new this.remuxerClass(observer, id, config);
	    this.insertDiscontinuity();
	  }

	  _createClass(AACDemuxer, [{
	    key: 'insertDiscontinuity',
	    value: function insertDiscontinuity() {
	      this._aacTrack = { container: 'audio/adts', type: 'audio', id: -1, sequenceNumber: 0, samples: [], len: 0 };
	    }
	  }, {
	    key: 'push',


	    // feed incoming data to the front of the parsing pipeline
	    value: function push(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration) {
	      var track,
	          id3 = new _id2.default(data),
	          pts = 90 * id3.timeStamp,
	          config,
	          frameLength,
	          frameDuration,
	          frameIndex,
	          offset,
	          headerLength,
	          stamp,
	          len,
	          aacSample;

	      var contiguous = false;
	      if (cc !== this.lastCC) {
	        _logger.logger.log(this.id + ' discontinuity detected');
	        this.lastCC = cc;
	        this.insertDiscontinuity();
	        this.remuxer.switchLevel();
	        this.remuxer.insertDiscontinuity();
	      } else if (level !== this.lastLevel) {
	        _logger.logger.log('audio track switch detected');
	        this.lastLevel = level;
	        this.remuxer.switchLevel();
	        this.insertDiscontinuity();
	      } else if (sn === this.lastSN + 1) {
	        contiguous = true;
	      }
	      track = this._aacTrack;
	      this.lastSN = sn;
	      this.lastLevel = level;

	      // look for ADTS header (0xFFFx)
	      for (offset = id3.length, len = data.length; offset < len - 1; offset++) {
	        if (data[offset] === 0xff && (data[offset + 1] & 0xf0) === 0xf0) {
	          break;
	        }
	      }

	      if (!track.audiosamplerate) {
	        config = _adts2.default.getAudioConfig(this.observer, data, offset, audioCodec);
	        track.config = config.config;
	        track.audiosamplerate = config.samplerate;
	        track.channelCount = config.channelCount;
	        track.codec = config.codec;
	        track.duration = duration;
	        _logger.logger.log('parsed codec:' + track.codec + ',rate:' + config.samplerate + ',nb channel:' + config.channelCount);
	      }
	      frameIndex = 0;
	      frameDuration = 1024 * 90000 / track.audiosamplerate;
	      while (offset + 5 < len) {
	        // The protection skip bit tells us if we have 2 bytes of CRC data at the end of the ADTS header
	        headerLength = !!(data[offset + 1] & 0x01) ? 7 : 9;
	        // retrieve frame size
	        frameLength = (data[offset + 3] & 0x03) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 0xE0) >>> 5;
	        frameLength -= headerLength;
	        //stamp = pes.pts;

	        if (frameLength > 0 && offset + headerLength + frameLength <= len) {
	          stamp = pts + frameIndex * frameDuration;
	          //logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
	          aacSample = { unit: data.subarray(offset + headerLength, offset + headerLength + frameLength), pts: stamp, dts: stamp };
	          track.samples.push(aacSample);
	          track.len += frameLength;
	          offset += frameLength + headerLength;
	          frameIndex++;
	          // look for ADTS header (0xFFFx)
	          for (; offset < len - 1; offset++) {
	            if (data[offset] === 0xff && (data[offset + 1] & 0xf0) === 0xf0) {
	              break;
	            }
	          }
	        } else {
	          break;
	        }
	      }
	      this.remuxer.remux(level, sn, this._aacTrack, { samples: [] }, { samples: [{ pts: pts, dts: pts, unit: id3.payload }] }, { samples: [] }, timeOffset, contiguous);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }], [{
	    key: 'probe',
	    value: function probe(data) {
	      // check if data contains ID3 timestamp and ADTS sync worc
	      var id3 = new _id2.default(data),
	          offset,
	          len;
	      if (id3.hasTimeStamp) {
	        // look for ADTS header (0xFFFx)
	        for (offset = id3.length, len = data.length; offset < len - 1; offset++) {
	          if (data[offset] === 0xff && (data[offset + 1] & 0xf0) === 0xf0) {
	            //logger.log('ADTS sync word found !');
	            return true;
	          }
	        }
	      }
	      return false;
	    }
	  }]);

	  return AACDemuxer;
	}();

	exports.default = AACDemuxer;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  ADTS parser helper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _logger = __webpack_require__(21);

	var _errors = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ADTS = function () {
	  function ADTS() {
	    _classCallCheck(this, ADTS);
	  }

	  _createClass(ADTS, null, [{
	    key: 'getAudioConfig',
	    value: function getAudioConfig(observer, data, offset, audioCodec) {
	      var adtsObjectType,
	          // :int
	      adtsSampleingIndex,
	          // :int
	      adtsExtensionSampleingIndex,
	          // :int
	      adtsChanelConfig,
	          // :int
	      config,
	          userAgent = navigator.userAgent.toLowerCase(),
	          adtsSampleingRates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
	      // byte 2
	      adtsObjectType = ((data[offset + 2] & 0xC0) >>> 6) + 1;
	      adtsSampleingIndex = (data[offset + 2] & 0x3C) >>> 2;
	      if (adtsSampleingIndex > adtsSampleingRates.length - 1) {
	        observer.trigger(Event.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: 'invalid ADTS sampling index:' + adtsSampleingIndex });
	        return;
	      }
	      adtsChanelConfig = (data[offset + 2] & 0x01) << 2;
	      // byte 3
	      adtsChanelConfig |= (data[offset + 3] & 0xC0) >>> 6;
	      _logger.logger.log('manifest codec:' + audioCodec + ',ADTS data:type:' + adtsObjectType + ',sampleingIndex:' + adtsSampleingIndex + '[' + adtsSampleingRates[adtsSampleingIndex] + 'Hz],channelConfig:' + adtsChanelConfig);
	      // firefox: freq less than 24kHz = AAC SBR (HE-AAC)
	      if (userAgent.indexOf('firefox') !== -1) {
	        if (adtsSampleingIndex >= 6) {
	          adtsObjectType = 5;
	          config = new Array(4);
	          // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
	          // there is a factor 2 between frame sample rate and output sample rate
	          // multiply frequency by 2 (see table below, equivalent to substract 3)
	          adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
	        } else {
	          adtsObjectType = 2;
	          config = new Array(2);
	          adtsExtensionSampleingIndex = adtsSampleingIndex;
	        }
	        // Android : always use AAC
	      } else if (userAgent.indexOf('android') !== -1) {
	          adtsObjectType = 2;
	          config = new Array(2);
	          adtsExtensionSampleingIndex = adtsSampleingIndex;
	        } else {
	          /*  for other browsers (chrome ...)
	              always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
	          */
	          adtsObjectType = 5;
	          config = new Array(4);
	          // if (manifest codec is HE-AAC or HE-AACv2) OR (manifest codec not specified AND frequency less than 24kHz)
	          if (audioCodec && (audioCodec.indexOf('mp4a.40.29') !== -1 || audioCodec.indexOf('mp4a.40.5') !== -1) || !audioCodec && adtsSampleingIndex >= 6) {
	            // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
	            // there is a factor 2 between frame sample rate and output sample rate
	            // multiply frequency by 2 (see table below, equivalent to substract 3)
	            adtsExtensionSampleingIndex = adtsSampleingIndex - 3;
	          } else {
	            // if (manifest codec is AAC) AND (frequency less than 24kHz AND nb channel is 1) OR (manifest codec not specified and mono audio)
	            // Chrome fails to play back with low frequency AAC LC mono when initialized with HE-AAC.  This is not a problem with stereo.
	            if (audioCodec && audioCodec.indexOf('mp4a.40.2') !== -1 && adtsSampleingIndex >= 6 && adtsChanelConfig === 1 || !audioCodec && adtsChanelConfig === 1) {
	              adtsObjectType = 2;
	              config = new Array(2);
	            }
	            adtsExtensionSampleingIndex = adtsSampleingIndex;
	          }
	        }
	      /* refer to http://wiki.multimedia.cx/index.php?title=MPEG-4_Audio#Audio_Specific_Config
	          ISO 14496-3 (AAC).pdf - Table 1.13 — Syntax of AudioSpecificConfig()
	        Audio Profile / Audio Object Type
	        0: Null
	        1: AAC Main
	        2: AAC LC (Low Complexity)
	        3: AAC SSR (Scalable Sample Rate)
	        4: AAC LTP (Long Term Prediction)
	        5: SBR (Spectral Band Replication)
	        6: AAC Scalable
	       sampling freq
	        0: 96000 Hz
	        1: 88200 Hz
	        2: 64000 Hz
	        3: 48000 Hz
	        4: 44100 Hz
	        5: 32000 Hz
	        6: 24000 Hz
	        7: 22050 Hz
	        8: 16000 Hz
	        9: 12000 Hz
	        10: 11025 Hz
	        11: 8000 Hz
	        12: 7350 Hz
	        13: Reserved
	        14: Reserved
	        15: frequency is written explictly
	        Channel Configurations
	        These are the channel configurations:
	        0: Defined in AOT Specifc Config
	        1: 1 channel: front-center
	        2: 2 channels: front-left, front-right
	      */
	      // audioObjectType = profile => profile, the MPEG-4 Audio Object Type minus 1
	      config[0] = adtsObjectType << 3;
	      // samplingFrequencyIndex
	      config[0] |= (adtsSampleingIndex & 0x0E) >> 1;
	      config[1] |= (adtsSampleingIndex & 0x01) << 7;
	      // channelConfiguration
	      config[1] |= adtsChanelConfig << 3;
	      if (adtsObjectType === 5) {
	        // adtsExtensionSampleingIndex
	        config[1] |= (adtsExtensionSampleingIndex & 0x0E) >> 1;
	        config[2] = (adtsExtensionSampleingIndex & 0x01) << 7;
	        // adtsObjectType (force to 2, chrome is checking that object type is less than 5 ???
	        //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc
	        config[2] |= 2 << 2;
	        config[3] = 0;
	      }
	      return { config: config, samplerate: adtsSampleingRates[adtsSampleingIndex], channelCount: adtsChanelConfig, codec: 'mp4a.40.' + adtsObjectType };
	    }
	  }]);

	  return ADTS;
	}();

	exports.default = ADTS;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ID3 parser
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _logger = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import Hex from '../utils/hex';

	var ID3 = function () {
	  function ID3(data) {
	    _classCallCheck(this, ID3);

	    this._hasTimeStamp = false;
	    var offset = 0,
	        byte1,
	        byte2,
	        byte3,
	        byte4,
	        tagSize,
	        endPos,
	        header,
	        len;
	    do {
	      header = this.readUTF(data, offset, 3);
	      offset += 3;
	      // first check for ID3 header
	      if (header === 'ID3') {
	        // skip 24 bits
	        offset += 3;
	        // retrieve tag(s) length
	        byte1 = data[offset++] & 0x7f;
	        byte2 = data[offset++] & 0x7f;
	        byte3 = data[offset++] & 0x7f;
	        byte4 = data[offset++] & 0x7f;
	        tagSize = (byte1 << 21) + (byte2 << 14) + (byte3 << 7) + byte4;
	        endPos = offset + tagSize;
	        //logger.log(`ID3 tag found, size/end: ${tagSize}/${endPos}`);

	        // read ID3 tags
	        this._parseID3Frames(data, offset, endPos);
	        offset = endPos;
	      } else if (header === '3DI') {
	        // http://id3.org/id3v2.4.0-structure chapter 3.4.   ID3v2 footer
	        offset += 7;
	        _logger.logger.log('3DI footer found, end: ' + offset);
	      } else {
	        offset -= 3;
	        len = offset;
	        if (len) {
	          //logger.log(`ID3 len: ${len}`);
	          if (!this.hasTimeStamp) {
	            _logger.logger.warn('ID3 tag found, but no timestamp');
	          }
	          this._length = len;
	          this._payload = data.subarray(0, len);
	        }
	        return;
	      }
	    } while (true);
	  }

	  _createClass(ID3, [{
	    key: 'readUTF',
	    value: function readUTF(data, start, len) {

	      var result = '',
	          offset = start,
	          end = start + len;
	      do {
	        result += String.fromCharCode(data[offset++]);
	      } while (offset < end);
	      return result;
	    }
	  }, {
	    key: '_parseID3Frames',
	    value: function _parseID3Frames(data, offset, endPos) {
	      var tagId, tagLen, tagStart, tagFlags, timestamp;
	      while (offset + 8 <= endPos) {
	        tagId = this.readUTF(data, offset, 4);
	        offset += 4;

	        tagLen = data[offset++] << 24 + data[offset++] << 16 + data[offset++] << 8 + data[offset++];

	        tagFlags = data[offset++] << 8 + data[offset++];

	        tagStart = offset;
	        //logger.log("ID3 tag id:" + tagId);
	        switch (tagId) {
	          case 'PRIV':
	            //logger.log('parse frame:' + Hex.hexDump(data.subarray(offset,endPos)));
	            // owner should be "com.apple.streaming.transportStreamTimestamp"
	            if (this.readUTF(data, offset, 44) === 'com.apple.streaming.transportStreamTimestamp') {
	              offset += 44;
	              // smelling even better ! we found the right descriptor
	              // skip null character (string end) + 3 first bytes
	              offset += 4;

	              // timestamp is 33 bit expressed as a big-endian eight-octet number, with the upper 31 bits set to zero.
	              var pts33Bit = data[offset++] & 0x1;
	              this._hasTimeStamp = true;

	              timestamp = ((data[offset++] << 23) + (data[offset++] << 15) + (data[offset++] << 7) + data[offset++]) / 45;

	              if (pts33Bit) {
	                timestamp += 47721858.84; // 2^32 / 90
	              }
	              timestamp = Math.round(timestamp);
	              _logger.logger.trace('ID3 timestamp found: ' + timestamp);
	              this._timeStamp = timestamp;
	            }
	            break;
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'hasTimeStamp',
	    get: function get() {
	      return this._hasTimeStamp;
	    }
	  }, {
	    key: 'timeStamp',
	    get: function get() {
	      return this._timeStamp;
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return this._length;
	    }
	  }, {
	    key: 'payload',
	    get: function get() {
	      return this._payload;
	    }
	  }]);

	  return ID3;
	}();

	exports.default = ID3;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * highly optimized TS demuxer:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * parse PAT, PMT
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * extract PES packet from audio and video PIDs
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * extract AVC/H264 NAL units and AAC/ADTS samples from PES packet
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * trigger the remuxer upon parsing completion
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it also tries to workaround as best as it can audio codec switch (HE-AAC to AAC and vice versa), without having to restart the MediaSource.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it also controls the remuxing process :
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * upon discontinuity or level switch detection, it will also notifies the remuxer so that it can reset its state.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	// import Hex from '../utils/hex';


	var _adts = __webpack_require__(35);

	var _adts2 = _interopRequireDefault(_adts);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _expGolomb = __webpack_require__(38);

	var _expGolomb2 = _interopRequireDefault(_expGolomb);

	var _logger = __webpack_require__(21);

	var _errors = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TSDemuxer = function () {
	  function TSDemuxer(observer, id, remuxerClass, config) {
	    _classCallCheck(this, TSDemuxer);

	    this.observer = observer;
	    this.id = id;
	    this.remuxerClass = remuxerClass;
	    this.config = config;
	    this.lastCC = 0;
	    this.remuxer = new this.remuxerClass(observer, id, config);
	  }

	  _createClass(TSDemuxer, [{
	    key: 'switchLevel',
	    value: function switchLevel() {
	      this.pmtParsed = false;
	      this._pmtId = -1;
	      this._avcTrack = { container: 'video/mp2t', type: 'video', id: -1, sequenceNumber: 0, samples: [], len: 0, nbNalu: 0, dropped: 0 };
	      this._aacTrack = { container: 'video/mp2t', type: 'audio', id: -1, sequenceNumber: 0, samples: [], len: 0 };
	      this._id3Track = { type: 'id3', id: -1, sequenceNumber: 0, samples: [], len: 0 };
	      this._txtTrack = { type: 'text', id: -1, sequenceNumber: 0, samples: [], len: 0 };
	      // flush any partial content
	      this.aacOverFlow = null;
	      this.aacLastPTS = null;
	      this.avcNaluState = 0;
	      this.remuxer.switchLevel();
	    }
	  }, {
	    key: 'insertDiscontinuity',
	    value: function insertDiscontinuity() {
	      this.switchLevel();
	      this.remuxer.insertDiscontinuity();
	    }

	    // feed incoming data to the front of the parsing pipeline

	  }, {
	    key: 'push',
	    value: function push(data, audioCodec, videoCodec, timeOffset, cc, level, sn, duration) {
	      var avcData,
	          aacData,
	          id3Data,
	          start,
	          len = data.length,
	          stt,
	          pid,
	          atf,
	          offset,
	          codecsOnly = this.remuxer.passthrough,
	          unknownPIDs = false;

	      this.audioCodec = audioCodec;
	      this.videoCodec = videoCodec;
	      this.timeOffset = timeOffset;
	      this._duration = duration;
	      this.contiguous = false;
	      if (cc !== this.lastCC) {
	        _logger.logger.log('discontinuity detected');
	        this.insertDiscontinuity();
	        this.lastCC = cc;
	      }
	      if (level !== this.lastLevel) {
	        _logger.logger.log('level switch detected');
	        this.switchLevel();
	        this.lastLevel = level;
	      } else if (sn === this.lastSN + 1) {
	        this.contiguous = true;
	      }
	      this.lastSN = sn;

	      var pmtParsed = this.pmtParsed,
	          avcId = this._avcTrack.id,
	          aacId = this._aacTrack.id,
	          id3Id = this._id3Track.id;

	      // don't parse last TS packet if incomplete
	      len -= len % 188;
	      // loop through TS packets
	      for (start = 0; start < len; start += 188) {
	        if (data[start] === 0x47) {
	          stt = !!(data[start + 1] & 0x40);
	          // pid is a 13-bit field starting at the last bit of TS[1]
	          pid = ((data[start + 1] & 0x1f) << 8) + data[start + 2];
	          atf = (data[start + 3] & 0x30) >> 4;
	          // if an adaption field is present, its length is specified by the fifth byte of the TS packet header.
	          if (atf > 1) {
	            offset = start + 5 + data[start + 4];
	            // continue if there is only adaptation field
	            if (offset === start + 188) {
	              continue;
	            }
	          } else {
	            offset = start + 4;
	          }
	          if (pmtParsed) {
	            if (pid === avcId) {
	              if (stt) {
	                if (avcData) {
	                  this._parseAVCPES(this._parsePES(avcData));
	                  if (codecsOnly) {
	                    // if we have video codec info AND
	                    // if audio PID is undefined OR if we have audio codec info,
	                    // we have all codec info !
	                    if (this._avcTrack.codec && (aacId === -1 || this._aacTrack.codec)) {
	                      this.remux(level, sn, data);
	                      return;
	                    }
	                  }
	                }
	                avcData = { data: [], size: 0 };
	              }
	              if (avcData) {
	                avcData.data.push(data.subarray(offset, start + 188));
	                avcData.size += start + 188 - offset;
	              }
	            } else if (pid === aacId) {
	              if (stt) {
	                if (aacData) {
	                  this._parseAACPES(this._parsePES(aacData));
	                  if (codecsOnly) {
	                    // here we now that we have audio codec info
	                    // if video PID is undefined OR if we have video codec info,
	                    // we have all codec infos !
	                    if (this._aacTrack.codec && (avcId === -1 || this._avcTrack.codec)) {
	                      this.remux(level, sn, data);
	                      return;
	                    }
	                  }
	                }
	                aacData = { data: [], size: 0 };
	              }
	              if (aacData) {
	                aacData.data.push(data.subarray(offset, start + 188));
	                aacData.size += start + 188 - offset;
	              }
	            } else if (pid === id3Id) {
	              if (stt) {
	                if (id3Data) {
	                  this._parseID3PES(this._parsePES(id3Data));
	                }
	                id3Data = { data: [], size: 0 };
	              }
	              if (id3Data) {
	                id3Data.data.push(data.subarray(offset, start + 188));
	                id3Data.size += start + 188 - offset;
	              }
	            }
	          } else {
	            if (stt) {
	              offset += data[offset] + 1;
	            }
	            if (pid === 0) {
	              this._parsePAT(data, offset);
	            } else if (pid === this._pmtId) {
	              this._parsePMT(data, offset);
	              pmtParsed = this.pmtParsed = true;
	              avcId = this._avcTrack.id;
	              aacId = this._aacTrack.id;
	              id3Id = this._id3Track.id;
	              if (unknownPIDs) {
	                _logger.logger.log('reparse from beginning');
	                unknownPIDs = false;
	                // we set it to -188, the += 188 in the for loop will reset start to 0
	                start = -188;
	              }
	            } else {
	              _logger.logger.log('unknown PID found before PAT/PMT');
	              unknownPIDs = true;
	            }
	          }
	        } else {
	          this.observer.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, id: this.id, details: _errors.ErrorDetails.FRAG_PARSING_ERROR, fatal: false, reason: 'TS packet did not start with 0x47' });
	        }
	      }
	      // parse last PES packet
	      if (avcData) {
	        this._parseAVCPES(this._parsePES(avcData));
	      }
	      if (aacData) {
	        this._parseAACPES(this._parsePES(aacData));
	      }
	      if (id3Data) {
	        this._parseID3PES(this._parsePES(id3Data));
	      }
	      this.remux(level, sn, null);
	    }
	  }, {
	    key: 'remux',
	    value: function remux(level, sn, data) {
	      this.remuxer.remux(level, sn, this._aacTrack, this._avcTrack, this._id3Track, this._txtTrack, this.timeOffset, this.contiguous, data);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.switchLevel();
	      this._initPTS = this._initDTS = undefined;
	      this._duration = 0;
	    }
	  }, {
	    key: '_parsePAT',
	    value: function _parsePAT(data, offset) {
	      // skip the PSI header and parse the first PMT entry
	      this._pmtId = (data[offset + 10] & 0x1F) << 8 | data[offset + 11];
	      //logger.log('PMT PID:'  + this._pmtId);
	    }
	  }, {
	    key: '_parsePMT',
	    value: function _parsePMT(data, offset) {
	      var sectionLength, tableEnd, programInfoLength, pid;
	      sectionLength = (data[offset + 1] & 0x0f) << 8 | data[offset + 2];
	      tableEnd = offset + 3 + sectionLength - 4;
	      // to determine where the table is, we have to figure out how
	      // long the program info descriptors are
	      programInfoLength = (data[offset + 10] & 0x0f) << 8 | data[offset + 11];
	      // advance the offset to the first entry in the mapping table
	      offset += 12 + programInfoLength;
	      while (offset < tableEnd) {
	        pid = (data[offset + 1] & 0x1F) << 8 | data[offset + 2];
	        switch (data[offset]) {
	          // ISO/IEC 13818-7 ADTS AAC (MPEG-2 lower bit-rate audio)
	          case 0x0f:
	            //logger.log('AAC PID:'  + pid);
	            if (this._aacTrack.id === -1) {
	              this._aacTrack.id = pid;
	            }
	            break;
	          // Packetized metadata (ID3)
	          case 0x15:
	            //logger.log('ID3 PID:'  + pid);
	            this._id3Track.id = pid;
	            break;
	          // ITU-T Rec. H.264 and ISO/IEC 14496-10 (lower bit-rate video)
	          case 0x1b:
	            //logger.log('AVC PID:'  + pid);
	            if (this._avcTrack.id === -1) {
	              this._avcTrack.id = pid;
	            }
	            break;
	          default:
	            _logger.logger.log('unkown stream type:' + data[offset]);
	            break;
	        }
	        // move to the next table entry
	        // skip past the elementary stream descriptors, if present
	        offset += ((data[offset + 3] & 0x0F) << 8 | data[offset + 4]) + 5;
	      }
	    }
	  }, {
	    key: '_parsePES',
	    value: function _parsePES(stream) {
	      var i = 0,
	          frag,
	          pesFlags,
	          pesPrefix,
	          pesLen,
	          pesHdrLen,
	          pesData,
	          pesPts,
	          pesDts,
	          payloadStartOffset,
	          data = stream.data;
	      //retrieve PTS/DTS from first fragment
	      frag = data[0];
	      pesPrefix = (frag[0] << 16) + (frag[1] << 8) + frag[2];
	      if (pesPrefix === 1) {
	        pesLen = (frag[4] << 8) + frag[5];
	        pesFlags = frag[7];
	        if (pesFlags & 0xC0) {
	          /* PES header described here : http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
	              as PTS / DTS is 33 bit we cannot use bitwise operator in JS,
	              as Bitwise operators treat their operands as a sequence of 32 bits */
	          pesPts = (frag[9] & 0x0E) * 536870912 + // 1 << 29
	          (frag[10] & 0xFF) * 4194304 + // 1 << 22
	          (frag[11] & 0xFE) * 16384 + // 1 << 14
	          (frag[12] & 0xFF) * 128 + // 1 << 7
	          (frag[13] & 0xFE) / 2;
	          // check if greater than 2^32 -1
	          if (pesPts > 4294967295) {
	            // decrement 2^33
	            pesPts -= 8589934592;
	          }
	          if (pesFlags & 0x40) {
	            pesDts = (frag[14] & 0x0E) * 536870912 + // 1 << 29
	            (frag[15] & 0xFF) * 4194304 + // 1 << 22
	            (frag[16] & 0xFE) * 16384 + // 1 << 14
	            (frag[17] & 0xFF) * 128 + // 1 << 7
	            (frag[18] & 0xFE) / 2;
	            // check if greater than 2^32 -1
	            if (pesDts > 4294967295) {
	              // decrement 2^33
	              pesDts -= 8589934592;
	            }
	          } else {
	            pesDts = pesPts;
	          }
	        }
	        pesHdrLen = frag[8];
	        payloadStartOffset = pesHdrLen + 9;

	        stream.size -= payloadStartOffset;
	        //reassemble PES packet
	        pesData = new Uint8Array(stream.size);
	        while (data.length) {
	          frag = data.shift();
	          var len = frag.byteLength;
	          if (payloadStartOffset) {
	            if (payloadStartOffset > len) {
	              // trim full frag if PES header bigger than frag
	              payloadStartOffset -= len;
	              continue;
	            } else {
	              // trim partial frag if PES header smaller than frag
	              frag = frag.subarray(payloadStartOffset);
	              len -= payloadStartOffset;
	              payloadStartOffset = 0;
	            }
	          }
	          pesData.set(frag, i);
	          i += len;
	        }
	        return { data: pesData, pts: pesPts, dts: pesDts, len: pesLen };
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_parseAVCPES',
	    value: function _parseAVCPES(pes) {
	      var _this = this;

	      var track = this._avcTrack,
	          samples = track.samples,
	          units = this._parseAVCNALu(pes.data),
	          units2 = [],
	          debug = false,
	          key = false,
	          length = 0,
	          expGolombDecoder,
	          avcSample,
	          push,
	          i;
	      // no NALu found
	      if (units.length === 0 && samples.length > 0) {
	        // append pes.data to previous NAL unit
	        var lastavcSample = samples[samples.length - 1];
	        var lastUnit = lastavcSample.units.units[lastavcSample.units.units.length - 1];
	        var tmp = new Uint8Array(lastUnit.data.byteLength + pes.data.byteLength);
	        tmp.set(lastUnit.data, 0);
	        tmp.set(pes.data, lastUnit.data.byteLength);
	        lastUnit.data = tmp;
	        lastavcSample.units.length += pes.data.byteLength;
	        track.len += pes.data.byteLength;
	      }
	      //free pes.data to save up some memory
	      pes.data = null;
	      var debugString = '';

	      var pushAccesUnit = function () {
	        if (units2.length) {
	          // only push AVC sample if keyframe already found in this fragment OR
	          //    keyframe found in last fragment (track.sps) AND
	          //        samples already appended (we already found a keyframe in this fragment) OR fragment is contiguous
	          if (key === true || track.sps && (samples.length || this.contiguous)) {
	            avcSample = { units: { units: units2, length: length }, pts: pes.pts, dts: pes.dts, key: key };
	            samples.push(avcSample);
	            track.len += length;
	            track.nbNalu += units2.length;
	          } else {
	            // dropped samples, track it
	            track.dropped++;
	          }
	          units2 = [];
	          length = 0;
	        }
	      }.bind(this);

	      units.forEach(function (unit) {
	        switch (unit.type) {
	          //NDR
	          case 1:
	            push = true;
	            if (debug) {
	              debugString += 'NDR ';
	            }
	            break;
	          //IDR
	          case 5:
	            push = true;
	            if (debug) {
	              debugString += 'IDR ';
	            }
	            key = true;
	            break;
	          //SEI
	          case 6:
	            push = true;
	            if (debug) {
	              debugString += 'SEI ';
	            }
	            unit.data = _this.discardEPB(unit.data);
	            expGolombDecoder = new _expGolomb2.default(unit.data);

	            // skip frameType
	            expGolombDecoder.readUByte();

	            var payloadType = 0;
	            var payloadSize = 0;
	            var endOfCaptions = false;

	            while (!endOfCaptions && expGolombDecoder.bytesAvailable > 1) {
	              payloadType = 0;
	              do {
	                if (expGolombDecoder.bytesAvailable !== 0) {
	                  payloadType += expGolombDecoder.readUByte();
	                }
	              } while (payloadType === 0xFF);

	              // Parse payload size.
	              payloadSize = 0;
	              do {
	                if (expGolombDecoder.bytesAvailable !== 0) {
	                  payloadSize += expGolombDecoder.readUByte();
	                }
	              } while (payloadSize === 0xFF);

	              // TODO: there can be more than one payload in an SEI packet...
	              // TODO: need to read type and size in a while loop to get them all
	              if (payloadType === 4 && expGolombDecoder.bytesAvailable !== 0) {

	                endOfCaptions = true;

	                var countryCode = expGolombDecoder.readUByte();

	                if (countryCode === 181) {
	                  var providerCode = expGolombDecoder.readUShort();

	                  if (providerCode === 49) {
	                    var userStructure = expGolombDecoder.readUInt();

	                    if (userStructure === 0x47413934) {
	                      var userDataType = expGolombDecoder.readUByte();

	                      // Raw CEA-608 bytes wrapped in CEA-708 packet
	                      if (userDataType === 3) {
	                        var firstByte = expGolombDecoder.readUByte();
	                        var secondByte = expGolombDecoder.readUByte();

	                        var totalCCs = 31 & firstByte;
	                        var byteArray = [firstByte, secondByte];

	                        for (i = 0; i < totalCCs; i++) {
	                          // 3 bytes per CC
	                          byteArray.push(expGolombDecoder.readUByte());
	                          byteArray.push(expGolombDecoder.readUByte());
	                          byteArray.push(expGolombDecoder.readUByte());
	                        }

	                        _this._insertSampleInOrder(_this._txtTrack.samples, { type: 3, pts: pes.pts, bytes: byteArray });
	                      }
	                    }
	                  }
	                }
	              } else if (payloadSize < expGolombDecoder.bytesAvailable) {
	                for (i = 0; i < payloadSize; i++) {
	                  expGolombDecoder.readUByte();
	                }
	              }
	            }
	            break;
	          //SPS
	          case 7:
	            push = true;
	            if (debug) {
	              debugString += 'SPS ';
	            }
	            if (!track.sps) {
	              expGolombDecoder = new _expGolomb2.default(unit.data);
	              var config = expGolombDecoder.readSPS();
	              track.width = config.width;
	              track.height = config.height;
	              track.sps = [unit.data];
	              track.duration = _this._duration;
	              var codecarray = unit.data.subarray(1, 4);
	              var codecstring = 'avc1.';
	              for (i = 0; i < 3; i++) {
	                var h = codecarray[i].toString(16);
	                if (h.length < 2) {
	                  h = '0' + h;
	                }
	                codecstring += h;
	              }
	              track.codec = codecstring;
	            }
	            break;
	          //PPS
	          case 8:
	            push = true;
	            if (debug) {
	              debugString += 'PPS ';
	            }
	            if (!track.pps) {
	              track.pps = [unit.data];
	            }
	            break;
	          case 9:
	            push = false;
	            if (debug) {
	              debugString += 'AUD ';
	            }
	            pushAccesUnit();
	            break;
	          default:
	            push = false;
	            debugString += 'unknown NAL ' + unit.type + ' ';
	            break;
	        }
	        if (push) {
	          units2.push(unit);
	          length += unit.data.byteLength;
	        }
	      });
	      if (debug || debugString.length) {
	        _logger.logger.log(debugString);
	      }
	      pushAccesUnit();
	    }
	  }, {
	    key: '_insertSampleInOrder',
	    value: function _insertSampleInOrder(arr, data) {
	      var len = arr.length;
	      if (len > 0) {
	        if (data.pts >= arr[len - 1].pts) {
	          arr.push(data);
	        } else {
	          for (var pos = len - 1; pos >= 0; pos--) {
	            if (data.pts < arr[pos].pts) {
	              arr.splice(pos, 0, data);
	              break;
	            }
	          }
	        }
	      } else {
	        arr.push(data);
	      }
	    }
	  }, {
	    key: '_parseAVCNALu',
	    value: function _parseAVCNALu(array) {
	      var i = 0,
	          len = array.byteLength,
	          value,
	          overflow,
	          state = this.avcNaluState;
	      var units = [],
	          unit,
	          unitType,
	          lastUnitStart,
	          lastUnitType;
	      //logger.log('PES:' + Hex.hexDump(array));
	      while (i < len) {
	        value = array[i++];
	        // finding 3 or 4-byte start codes (00 00 01 OR 00 00 00 01)
	        switch (state) {
	          case 0:
	            if (value === 0) {
	              state = 1;
	            }
	            break;
	          case 1:
	            if (value === 0) {
	              state = 2;
	            } else {
	              state = 0;
	            }
	            break;
	          case 2:
	          case 3:
	            if (value === 0) {
	              state = 3;
	            } else if (value === 1 && i < len) {
	              unitType = array[i] & 0x1f;
	              //logger.log('find NALU @ offset:' + i + ',type:' + unitType);
	              if (lastUnitStart) {
	                unit = { data: array.subarray(lastUnitStart, i - state - 1), type: lastUnitType };
	                //logger.log('pushing NALU, type/size:' + unit.type + '/' + unit.data.byteLength);
	                units.push(unit);
	              } else {
	                // lastUnitStart is undefined => this is the first start code found in this PES packet
	                // first check if start code delimiter is overlapping between 2 PES packets,
	                // ie it started in last packet (lastState not zero)
	                // and ended at the beginning of this PES packet (i <= 4 - lastState)
	                var lastState = this.avcNaluState;
	                if (lastState && i <= 4 - lastState) {
	                  // start delimiter overlapping between PES packets
	                  // strip start delimiter bytes from the end of last NAL unit
	                  var track = this._avcTrack,
	                      samples = track.samples;
	                  if (samples.length) {
	                    var lastavcSample = samples[samples.length - 1],
	                        lastUnits = lastavcSample.units.units,
	                        lastUnit = lastUnits[lastUnits.length - 1];
	                    // check if lastUnit had a state different from zero
	                    if (lastUnit.state) {
	                      // strip last bytes
	                      lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState);
	                      lastavcSample.units.length -= lastState;
	                      track.len -= lastState;
	                    }
	                  }
	                }
	                // If NAL units are not starting right at the beginning of the PES packet, push preceding data into previous NAL unit.
	                overflow = i - state - 1;
	                if (overflow > 0) {
	                  var _track = this._avcTrack,
	                      _samples = _track.samples;
	                  //logger.log('first NALU found with overflow:' + overflow);
	                  if (_samples.length) {
	                    var _lastavcSample = _samples[_samples.length - 1],
	                        _lastUnits = _lastavcSample.units.units,
	                        _lastUnit = _lastUnits[_lastUnits.length - 1],
	                        tmp = new Uint8Array(_lastUnit.data.byteLength + overflow);
	                    tmp.set(_lastUnit.data, 0);
	                    tmp.set(array.subarray(0, overflow), _lastUnit.data.byteLength);
	                    _lastUnit.data = tmp;
	                    _lastavcSample.units.length += overflow;
	                    _track.len += overflow;
	                  }
	                }
	              }
	              lastUnitStart = i;
	              lastUnitType = unitType;
	              state = 0;
	            } else {
	              state = 0;
	            }
	            break;
	          default:
	            break;
	        }
	      }
	      if (lastUnitStart) {
	        unit = { data: array.subarray(lastUnitStart, len), type: lastUnitType, state: state };
	        units.push(unit);
	        //logger.log('pushing NALU, type/size/state:' + unit.type + '/' + unit.data.byteLength + '/' + state);
	        this.avcNaluState = state;
	      }
	      return units;
	    }

	    /**
	     * remove Emulation Prevention bytes from a RBSP
	     */

	  }, {
	    key: 'discardEPB',
	    value: function discardEPB(data) {
	      var length = data.byteLength,
	          EPBPositions = [],
	          i = 1,
	          newLength,
	          newData;

	      // Find all `Emulation Prevention Bytes`
	      while (i < length - 2) {
	        if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
	          EPBPositions.push(i + 2);
	          i += 2;
	        } else {
	          i++;
	        }
	      }

	      // If no Emulation Prevention Bytes were found just return the original
	      // array
	      if (EPBPositions.length === 0) {
	        return data;
	      }

	      // Create a new array to hold the NAL unit data
	      newLength = length - EPBPositions.length;
	      newData = new Uint8Array(newLength);
	      var sourceIndex = 0;

	      for (i = 0; i < newLength; sourceIndex++, i++) {
	        if (sourceIndex === EPBPositions[0]) {
	          // Skip this byte
	          sourceIndex++;
	          // Remove this position index
	          EPBPositions.shift();
	        }
	        newData[i] = data[sourceIndex];
	      }
	      return newData;
	    }
	  }, {
	    key: '_parseAACPES',
	    value: function _parseAACPES(pes) {
	      var track = this._aacTrack,
	          data = pes.data,
	          pts = pes.pts,
	          startOffset = 0,
	          duration = this._duration,
	          audioCodec = this.audioCodec,
	          aacOverFlow = this.aacOverFlow,
	          aacLastPTS = this.aacLastPTS,
	          config,
	          frameLength,
	          frameDuration,
	          frameIndex,
	          offset,
	          headerLength,
	          stamp,
	          len,
	          aacSample;
	      if (aacOverFlow) {
	        var tmp = new Uint8Array(aacOverFlow.byteLength + data.byteLength);
	        tmp.set(aacOverFlow, 0);
	        tmp.set(data, aacOverFlow.byteLength);
	        //logger.log(`AAC: append overflowing ${aacOverFlow.byteLength} bytes to beginning of new PES`);
	        data = tmp;
	      }
	      // look for ADTS header (0xFFFx)
	      for (offset = startOffset, len = data.length; offset < len - 1; offset++) {
	        if (data[offset] === 0xff && (data[offset + 1] & 0xf0) === 0xf0) {
	          break;
	        }
	      }
	      // if ADTS header does not start straight from the beginning of the PES payload, raise an error
	      if (offset) {
	        var reason, fatal;
	        if (offset < len - 1) {
	          reason = 'AAC PES did not start with ADTS header,offset:' + offset;
	          fatal = false;
	        } else {
	          reason = 'no ADTS header found in AAC PES';
	          fatal = true;
	        }
	        this.observer.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, id: this.id, details: _errors.ErrorDetails.FRAG_PARSING_ERROR, fatal: fatal, reason: reason });
	        if (fatal) {
	          return;
	        }
	      }
	      if (!track.audiosamplerate) {
	        config = _adts2.default.getAudioConfig(this.observer, data, offset, audioCodec);
	        track.config = config.config;
	        track.audiosamplerate = config.samplerate;
	        track.channelCount = config.channelCount;
	        track.codec = config.codec;
	        track.duration = duration;
	        _logger.logger.log('parsed codec:' + track.codec + ',rate:' + config.samplerate + ',nb channel:' + config.channelCount);
	      }
	      frameIndex = 0;
	      frameDuration = 1024 * 90000 / track.audiosamplerate;

	      // if last AAC frame is overflowing, we should ensure timestamps are contiguous:
	      // first sample PTS should be equal to last sample PTS + frameDuration
	      if (aacOverFlow && aacLastPTS) {
	        var newPTS = aacLastPTS + frameDuration;
	        if (Math.abs(newPTS - pts) > 1) {
	          _logger.logger.log('AAC: align PTS for overlapping frames by ' + Math.round((newPTS - pts) / 90));
	          pts = newPTS;
	        }
	      }

	      while (offset + 5 < len) {
	        // The protection skip bit tells us if we have 2 bytes of CRC data at the end of the ADTS header
	        headerLength = !!(data[offset + 1] & 0x01) ? 7 : 9;
	        // retrieve frame size
	        frameLength = (data[offset + 3] & 0x03) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 0xE0) >>> 5;
	        frameLength -= headerLength;
	        //stamp = pes.pts;

	        if (frameLength > 0 && offset + headerLength + frameLength <= len) {
	          stamp = pts + frameIndex * frameDuration;
	          //logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
	          aacSample = { unit: data.subarray(offset + headerLength, offset + headerLength + frameLength), pts: stamp, dts: stamp };
	          track.samples.push(aacSample);
	          track.len += frameLength;
	          offset += frameLength + headerLength;
	          frameIndex++;
	          // look for ADTS header (0xFFFx)
	          for (; offset < len - 1; offset++) {
	            if (data[offset] === 0xff && (data[offset + 1] & 0xf0) === 0xf0) {
	              break;
	            }
	          }
	        } else {
	          break;
	        }
	      }
	      if (offset < len) {
	        aacOverFlow = data.subarray(offset, len);
	        //logger.log(`AAC: overflow detected:${len-offset}`);
	      } else {
	          aacOverFlow = null;
	        }
	      this.aacOverFlow = aacOverFlow;
	      this.aacLastPTS = stamp;
	    }
	  }, {
	    key: '_parseID3PES',
	    value: function _parseID3PES(pes) {
	      this._id3Track.samples.push(pes);
	    }
	  }], [{
	    key: 'probe',
	    value: function probe(data) {
	      // a TS fragment should contain at least 3 TS packets, a PAT, a PMT, and one PID, each starting with 0x47
	      if (data.length >= 3 * 188 && data[0] === 0x47 && data[188] === 0x47 && data[2 * 188] === 0x47) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }]);

	  return TSDemuxer;
	}();

	exports.default = TSDemuxer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _logger = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ExpGolomb = function () {
	  function ExpGolomb(data) {
	    _classCallCheck(this, ExpGolomb);

	    this.data = data;
	    // the number of bytes left to examine in this.data
	    this.bytesAvailable = this.data.byteLength;
	    // the current word being examined
	    this.word = 0; // :uint
	    // the number of bits left to examine in the current word
	    this.bitsAvailable = 0; // :uint
	  }

	  // ():void


	  _createClass(ExpGolomb, [{
	    key: 'loadWord',
	    value: function loadWord() {
	      var position = this.data.byteLength - this.bytesAvailable,
	          workingBytes = new Uint8Array(4),
	          availableBytes = Math.min(4, this.bytesAvailable);
	      if (availableBytes === 0) {
	        throw new Error('no bytes available');
	      }
	      workingBytes.set(this.data.subarray(position, position + availableBytes));
	      this.word = new DataView(workingBytes.buffer).getUint32(0);
	      // track the amount of this.data that has been processed
	      this.bitsAvailable = availableBytes * 8;
	      this.bytesAvailable -= availableBytes;
	    }

	    // (count:int):void

	  }, {
	    key: 'skipBits',
	    value: function skipBits(count) {
	      var skipBytes; // :int
	      if (this.bitsAvailable > count) {
	        this.word <<= count;
	        this.bitsAvailable -= count;
	      } else {
	        count -= this.bitsAvailable;
	        skipBytes = count >> 3;
	        count -= skipBytes >> 3;
	        this.bytesAvailable -= skipBytes;
	        this.loadWord();
	        this.word <<= count;
	        this.bitsAvailable -= count;
	      }
	    }

	    // (size:int):uint

	  }, {
	    key: 'readBits',
	    value: function readBits(size) {
	      var bits = Math.min(this.bitsAvailable, size),
	          // :uint
	      valu = this.word >>> 32 - bits; // :uint
	      if (size > 32) {
	        _logger.logger.error('Cannot read more than 32 bits at a time');
	      }
	      this.bitsAvailable -= bits;
	      if (this.bitsAvailable > 0) {
	        this.word <<= bits;
	      } else if (this.bytesAvailable > 0) {
	        this.loadWord();
	      }
	      bits = size - bits;
	      if (bits > 0) {
	        return valu << bits | this.readBits(bits);
	      } else {
	        return valu;
	      }
	    }

	    // ():uint

	  }, {
	    key: 'skipLZ',
	    value: function skipLZ() {
	      var leadingZeroCount; // :uint
	      for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
	        if (0 !== (this.word & 0x80000000 >>> leadingZeroCount)) {
	          // the first bit of working word is 1
	          this.word <<= leadingZeroCount;
	          this.bitsAvailable -= leadingZeroCount;
	          return leadingZeroCount;
	        }
	      }
	      // we exhausted word and still have not found a 1
	      this.loadWord();
	      return leadingZeroCount + this.skipLZ();
	    }

	    // ():void

	  }, {
	    key: 'skipUEG',
	    value: function skipUEG() {
	      this.skipBits(1 + this.skipLZ());
	    }

	    // ():void

	  }, {
	    key: 'skipEG',
	    value: function skipEG() {
	      this.skipBits(1 + this.skipLZ());
	    }

	    // ():uint

	  }, {
	    key: 'readUEG',
	    value: function readUEG() {
	      var clz = this.skipLZ(); // :uint
	      return this.readBits(clz + 1) - 1;
	    }

	    // ():int

	  }, {
	    key: 'readEG',
	    value: function readEG() {
	      var valu = this.readUEG(); // :int
	      if (0x01 & valu) {
	        // the number is odd if the low order bit is set
	        return 1 + valu >>> 1; // add 1 to make it even, and divide by 2
	      } else {
	          return -1 * (valu >>> 1); // divide by two then make it negative
	        }
	    }

	    // Some convenience functions
	    // :Boolean

	  }, {
	    key: 'readBoolean',
	    value: function readBoolean() {
	      return 1 === this.readBits(1);
	    }

	    // ():int

	  }, {
	    key: 'readUByte',
	    value: function readUByte() {
	      return this.readBits(8);
	    }

	    // ():int

	  }, {
	    key: 'readUShort',
	    value: function readUShort() {
	      return this.readBits(16);
	    }
	    // ():int

	  }, {
	    key: 'readUInt',
	    value: function readUInt() {
	      return this.readBits(32);
	    }

	    /**
	     * Advance the ExpGolomb decoder past a scaling list. The scaling
	     * list is optionally transmitted as part of a sequence parameter
	     * set and is not relevant to transmuxing.
	     * @param count {number} the number of entries in this scaling list
	     * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
	     */

	  }, {
	    key: 'skipScalingList',
	    value: function skipScalingList(count) {
	      var lastScale = 8,
	          nextScale = 8,
	          j,
	          deltaScale;
	      for (j = 0; j < count; j++) {
	        if (nextScale !== 0) {
	          deltaScale = this.readEG();
	          nextScale = (lastScale + deltaScale + 256) % 256;
	        }
	        lastScale = nextScale === 0 ? lastScale : nextScale;
	      }
	    }

	    /**
	     * Read a sequence parameter set and return some interesting video
	     * properties. A sequence parameter set is the H264 metadata that
	     * describes the properties of upcoming video frames.
	     * @param data {Uint8Array} the bytes of a sequence parameter set
	     * @return {object} an object with configuration parsed from the
	     * sequence parameter set, including the dimensions of the
	     * associated video frames.
	     */

	  }, {
	    key: 'readSPS',
	    value: function readSPS() {
	      var frameCropLeftOffset = 0,
	          frameCropRightOffset = 0,
	          frameCropTopOffset = 0,
	          frameCropBottomOffset = 0,
	          sarScale = 1,
	          profileIdc,
	          profileCompat,
	          levelIdc,
	          numRefFramesInPicOrderCntCycle,
	          picWidthInMbsMinus1,
	          picHeightInMapUnitsMinus1,
	          frameMbsOnlyFlag,
	          scalingListCount,
	          i;
	      this.readUByte();
	      profileIdc = this.readUByte(); // profile_idc
	      profileCompat = this.readBits(5); // constraint_set[0-4]_flag, u(5)
	      this.skipBits(3); // reserved_zero_3bits u(3),
	      levelIdc = this.readUByte(); //level_idc u(8)
	      this.skipUEG(); // seq_parameter_set_id
	      // some profiles have more optional data we don't need
	      if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128) {
	        var chromaFormatIdc = this.readUEG();
	        if (chromaFormatIdc === 3) {
	          this.skipBits(1); // separate_colour_plane_flag
	        }
	        this.skipUEG(); // bit_depth_luma_minus8
	        this.skipUEG(); // bit_depth_chroma_minus8
	        this.skipBits(1); // qpprime_y_zero_transform_bypass_flag
	        if (this.readBoolean()) {
	          // seq_scaling_matrix_present_flag
	          scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
	          for (i = 0; i < scalingListCount; i++) {
	            if (this.readBoolean()) {
	              // seq_scaling_list_present_flag[ i ]
	              if (i < 6) {
	                this.skipScalingList(16);
	              } else {
	                this.skipScalingList(64);
	              }
	            }
	          }
	        }
	      }
	      this.skipUEG(); // log2_max_frame_num_minus4
	      var picOrderCntType = this.readUEG();
	      if (picOrderCntType === 0) {
	        this.readUEG(); //log2_max_pic_order_cnt_lsb_minus4
	      } else if (picOrderCntType === 1) {
	          this.skipBits(1); // delta_pic_order_always_zero_flag
	          this.skipEG(); // offset_for_non_ref_pic
	          this.skipEG(); // offset_for_top_to_bottom_field
	          numRefFramesInPicOrderCntCycle = this.readUEG();
	          for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
	            this.skipEG(); // offset_for_ref_frame[ i ]
	          }
	        }
	      this.skipUEG(); // max_num_ref_frames
	      this.skipBits(1); // gaps_in_frame_num_value_allowed_flag
	      picWidthInMbsMinus1 = this.readUEG();
	      picHeightInMapUnitsMinus1 = this.readUEG();
	      frameMbsOnlyFlag = this.readBits(1);
	      if (frameMbsOnlyFlag === 0) {
	        this.skipBits(1); // mb_adaptive_frame_field_flag
	      }
	      this.skipBits(1); // direct_8x8_inference_flag
	      if (this.readBoolean()) {
	        // frame_cropping_flag
	        frameCropLeftOffset = this.readUEG();
	        frameCropRightOffset = this.readUEG();
	        frameCropTopOffset = this.readUEG();
	        frameCropBottomOffset = this.readUEG();
	      }
	      if (this.readBoolean()) {
	        // vui_parameters_present_flag
	        if (this.readBoolean()) {
	          // aspect_ratio_info_present_flag
	          var sarRatio = void 0;
	          var aspectRatioIdc = this.readUByte();
	          switch (aspectRatioIdc) {
	            case 1:
	              sarRatio = [1, 1];break;
	            case 2:
	              sarRatio = [12, 11];break;
	            case 3:
	              sarRatio = [10, 11];break;
	            case 4:
	              sarRatio = [16, 11];break;
	            case 5:
	              sarRatio = [40, 33];break;
	            case 6:
	              sarRatio = [24, 11];break;
	            case 7:
	              sarRatio = [20, 11];break;
	            case 8:
	              sarRatio = [32, 11];break;
	            case 9:
	              sarRatio = [80, 33];break;
	            case 10:
	              sarRatio = [18, 11];break;
	            case 11:
	              sarRatio = [15, 11];break;
	            case 12:
	              sarRatio = [64, 33];break;
	            case 13:
	              sarRatio = [160, 99];break;
	            case 14:
	              sarRatio = [4, 3];break;
	            case 15:
	              sarRatio = [3, 2];break;
	            case 16:
	              sarRatio = [2, 1];break;
	            case 255:
	              {
	                sarRatio = [this.readUByte() << 8 | this.readUByte(), this.readUByte() << 8 | this.readUByte()];
	                break;
	              }
	          }
	          if (sarRatio) {
	            sarScale = sarRatio[0] / sarRatio[1];
	          }
	        }
	      }
	      return {
	        width: Math.ceil(((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2) * sarScale),
	        height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset)
	      };
	    }
	  }, {
	    key: 'readSliceType',
	    value: function readSliceType() {
	      // skip NALu type
	      this.readUByte();
	      // discard first_mb_in_slice
	      this.readUEG();
	      // return slice_type
	      return this.readUEG();
	    }
	  }]);

	  return ExpGolomb;
	}();

	exports.default = ExpGolomb;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fMP4 remuxer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _aac = __webpack_require__(40);

	var _aac2 = _interopRequireDefault(_aac);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _logger = __webpack_require__(21);

	var _mp4Generator = __webpack_require__(41);

	var _mp4Generator2 = _interopRequireDefault(_mp4Generator);

	var _errors = __webpack_require__(18);

	__webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MP4Remuxer = function () {
	  function MP4Remuxer(observer, id, config) {
	    _classCallCheck(this, MP4Remuxer);

	    this.observer = observer;
	    this.id = id;
	    this.config = config;
	    this.ISGenerated = false;
	    this.PES2MP4SCALEFACTOR = 4;
	    this.PES_TIMESCALE = 90000;
	    this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR;
	  }

	  _createClass(MP4Remuxer, [{
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'insertDiscontinuity',
	    value: function insertDiscontinuity() {
	      this._initPTS = this._initDTS = undefined;
	    }
	  }, {
	    key: 'switchLevel',
	    value: function switchLevel() {
	      this.ISGenerated = false;
	    }
	  }, {
	    key: 'remux',
	    value: function remux(level, sn, audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous) {
	      this.level = level;
	      this.sn = sn;
	      // generate Init Segment if needed
	      if (!this.ISGenerated) {
	        this.generateIS(audioTrack, videoTrack, timeOffset);
	      }

	      if (this.ISGenerated) {
	        // Purposefully remuxing audio before video, so that remuxVideo can use nextAacPts, which is
	        // calculated in remuxAudio.
	        //logger.log('nb AAC samples:' + audioTrack.samples.length);
	        if (audioTrack.samples.length) {
	          var audioData = this.remuxAudio(audioTrack, timeOffset, contiguous);
	          //logger.log('nb AVC samples:' + videoTrack.samples.length);
	          if (videoTrack.samples.length) {
	            var audioTrackLength = void 0;
	            if (audioData) {
	              audioTrackLength = audioData.endPTS - audioData.startPTS;
	            }
	            this.remuxVideo(videoTrack, timeOffset, contiguous, audioTrackLength);
	          }
	        } else {
	          var videoData = void 0;
	          //logger.log('nb AVC samples:' + videoTrack.samples.length);
	          if (videoTrack.samples.length) {
	            videoData = this.remuxVideo(videoTrack, timeOffset, contiguous);
	          }
	          if (videoData && audioTrack.codec) {
	            this.remuxEmptyAudio(audioTrack, timeOffset, contiguous, videoData);
	          }
	        }
	      }
	      //logger.log('nb ID3 samples:' + audioTrack.samples.length);
	      if (id3Track.samples.length) {
	        this.remuxID3(id3Track, timeOffset);
	      }
	      //logger.log('nb ID3 samples:' + audioTrack.samples.length);
	      if (textTrack.samples.length) {
	        this.remuxText(textTrack, timeOffset);
	      }
	      //notify end of parsing
	      this.observer.trigger(_events2.default.FRAG_PARSED, { id: this.id, level: this.level, sn: this.sn });
	    }
	  }, {
	    key: 'generateIS',
	    value: function generateIS(audioTrack, videoTrack, timeOffset) {
	      var observer = this.observer,
	          audioSamples = audioTrack.samples,
	          videoSamples = videoTrack.samples,
	          pesTimeScale = this.PES_TIMESCALE,
	          tracks = {},
	          data = { id: this.id, level: this.level, sn: this.sn, tracks: tracks, unique: false },
	          computePTSDTS = this._initPTS === undefined,
	          initPTS,
	          initDTS;

	      if (computePTSDTS) {
	        initPTS = initDTS = Infinity;
	      }
	      if (audioTrack.config && audioSamples.length) {
	        audioTrack.timescale = audioTrack.audiosamplerate;
	        // MP4 duration (track duration in seconds multiplied by timescale) is coded on 32 bits
	        // we know that each AAC sample contains 1024 frames....
	        // in order to avoid overflowing the 32 bit counter for large duration, we use smaller timescale (timescale/gcd)
	        // we just need to ensure that AAC sample duration will still be an integer (will be 1024/gcd)
	        if (audioTrack.timescale * audioTrack.duration > Math.pow(2, 32)) {
	          (function () {
	            var greatestCommonDivisor = function greatestCommonDivisor(a, b) {
	              if (!b) {
	                return a;
	              }
	              return greatestCommonDivisor(b, a % b);
	            };
	            audioTrack.timescale = audioTrack.audiosamplerate / greatestCommonDivisor(audioTrack.audiosamplerate, 1024);
	          })();
	        }
	        _logger.logger.log('audio mp4 timescale :' + audioTrack.timescale);
	        tracks.audio = {
	          container: 'audio/mp4',
	          codec: audioTrack.codec,
	          initSegment: _mp4Generator2.default.initSegment([audioTrack]),
	          metadata: {
	            channelCount: audioTrack.channelCount
	          }
	        };
	        if (computePTSDTS) {
	          // remember first PTS of this demuxing context. for audio, PTS + DTS ...
	          initPTS = initDTS = audioSamples[0].pts - pesTimeScale * timeOffset;
	        }
	      }

	      if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
	        videoTrack.timescale = this.MP4_TIMESCALE;
	        tracks.video = {
	          container: 'video/mp4',
	          codec: videoTrack.codec,
	          initSegment: _mp4Generator2.default.initSegment([videoTrack]),
	          metadata: {
	            width: videoTrack.width,
	            height: videoTrack.height
	          }
	        };
	        if (computePTSDTS) {
	          initPTS = Math.min(initPTS, videoSamples[0].pts - pesTimeScale * timeOffset);
	          initDTS = Math.min(initDTS, videoSamples[0].dts - pesTimeScale * timeOffset);
	        }
	      }

	      if (Object.keys(tracks).length) {
	        observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT, data);
	        this.ISGenerated = true;
	        if (computePTSDTS) {
	          this._initPTS = initPTS;
	          this._initDTS = initDTS;
	        }
	      } else {
	        observer.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, id: this.id, details: _errors.ErrorDetails.FRAG_PARSING_ERROR, fatal: false, reason: 'no audio/video samples found' });
	      }
	    }
	  }, {
	    key: 'remuxVideo',
	    value: function remuxVideo(track, timeOffset, contiguous, audioTrackLength) {
	      var offset = 8,
	          pesTimeScale = this.PES_TIMESCALE,
	          pes2mp4ScaleFactor = this.PES2MP4SCALEFACTOR,
	          mp4SampleDuration,
	          mdat,
	          moof,
	          firstPTS,
	          firstDTS,
	          nextDTS,
	          lastPTS,
	          lastDTS,
	          inputSamples = track.samples,
	          outputSamples = [];

	      // PTS is coded on 33bits, and can loop from -2^32 to 2^32
	      // PTSNormalize will make PTS/DTS value monotonic, we use last known DTS value as reference value
	      var nextAvcDts = void 0;
	      if (contiguous) {
	        // if parsed fragment is contiguous with last one, let's use last DTS value as reference
	        nextAvcDts = this.nextAvcDts;
	      } else {
	        // if not contiguous, let's use target timeOffset
	        nextAvcDts = timeOffset * pesTimeScale;
	      }

	      // compute first DTS and last DTS, normalize them against reference value
	      var sample = inputSamples[0];
	      firstDTS = Math.max(this._PTSNormalize(sample.dts, nextAvcDts) - this._initDTS, 0);
	      firstPTS = Math.max(this._PTSNormalize(sample.pts, nextAvcDts) - this._initDTS, 0);

	      // check timestamp continuity accross consecutive fragments (this is to remove inter-fragment gap/hole)
	      var delta = Math.round((firstDTS - nextAvcDts) / 90);
	      // if fragment are contiguous, detect hole/overlapping between fragments
	      if (contiguous) {
	        if (delta) {
	          if (delta > 1) {
	            _logger.logger.log('AVC:' + delta + ' ms hole between fragments detected,filling it');
	          } else if (delta < -1) {
	            _logger.logger.log('AVC:' + -delta + ' ms overlapping between fragments detected');
	          }
	          // remove hole/gap : set DTS to next expected DTS
	          firstDTS = nextAvcDts;
	          inputSamples[0].dts = firstDTS + this._initDTS;
	          // offset PTS as well, ensure that PTS is smaller or equal than new DTS
	          firstPTS = Math.max(firstPTS - delta, nextAvcDts);
	          inputSamples[0].pts = firstPTS + this._initDTS;
	          _logger.logger.log('Video/PTS/DTS adjusted: ' + firstPTS + '/' + firstDTS + ',delta:' + delta);
	        }
	      }
	      nextDTS = firstDTS;

	      // compute lastPTS/lastDTS
	      sample = inputSamples[inputSamples.length - 1];
	      lastDTS = Math.max(this._PTSNormalize(sample.dts, nextAvcDts) - this._initDTS, 0);
	      lastPTS = Math.max(this._PTSNormalize(sample.pts, nextAvcDts) - this._initDTS, 0);
	      lastPTS = Math.max(lastPTS, lastDTS);

	      var vendor = navigator.vendor,
	          userAgent = navigator.userAgent,
	          isSafari = vendor && vendor.indexOf('Apple') > -1 && userAgent && !userAgent.match('CriOS');

	      // on Safari let's signal the same sample duration for all samples
	      // sample duration (as expected by trun MP4 boxes), should be the delta between sample DTS
	      // set this constant duration as being the avg delta between consecutive DTS.
	      if (isSafari) {
	        mp4SampleDuration = Math.round((lastDTS - firstDTS) / (pes2mp4ScaleFactor * (inputSamples.length - 1)));
	      }

	      // normalize all PTS/DTS now ...
	      for (var i = 0; i < inputSamples.length; i++) {
	        var _sample = inputSamples[i];
	        if (isSafari) {
	          // sample DTS is computed using a constant decoding offset (mp4SampleDuration) between samples
	          _sample.dts = firstDTS + i * pes2mp4ScaleFactor * mp4SampleDuration;
	        } else {
	          // ensure sample monotonic DTS
	          _sample.dts = Math.max(this._PTSNormalize(_sample.dts, nextAvcDts) - this._initDTS, firstDTS);
	          // ensure dts is a multiple of scale factor to avoid rounding issues
	          _sample.dts = Math.round(_sample.dts / pes2mp4ScaleFactor) * pes2mp4ScaleFactor;
	        }
	        // we normalize PTS against nextAvcDts, we also substract initDTS (some streams don't start @ PTS O)
	        // and we ensure that computed value is greater or equal than sample DTS
	        _sample.pts = Math.max(this._PTSNormalize(_sample.pts, nextAvcDts) - this._initDTS, _sample.dts);
	        // ensure pts is a multiple of scale factor to avoid rounding issues
	        _sample.pts = Math.round(_sample.pts / pes2mp4ScaleFactor) * pes2mp4ScaleFactor;
	      }

	      /* concatenate the video data and construct the mdat in place
	        (need 8 more bytes to fill length and mpdat type) */
	      mdat = new Uint8Array(track.len + 4 * track.nbNalu + 8);
	      var view = new DataView(mdat.buffer);
	      view.setUint32(0, mdat.byteLength);
	      mdat.set(_mp4Generator2.default.types.mdat, 4);

	      for (var _i = 0; _i < inputSamples.length; _i++) {
	        var avcSample = inputSamples[_i],
	            mp4SampleLength = 0,
	            compositionTimeOffset = void 0;
	        // convert NALU bitstream to MP4 format (prepend NALU with size field)
	        while (avcSample.units.units.length) {
	          var unit = avcSample.units.units.shift();
	          view.setUint32(offset, unit.data.byteLength);
	          offset += 4;
	          mdat.set(unit.data, offset);
	          offset += unit.data.byteLength;
	          mp4SampleLength += 4 + unit.data.byteLength;
	        }

	        if (!isSafari) {
	          // expected sample duration is the Decoding Timestamp diff of consecutive samples
	          if (_i < inputSamples.length - 1) {
	            mp4SampleDuration = inputSamples[_i + 1].dts - avcSample.dts;
	          } else {
	            var config = this.config,
	                lastFrameDuration = avcSample.dts - inputSamples[_i > 0 ? _i - 1 : _i].dts;
	            if (config.stretchShortVideoTrack) {
	              // In some cases, a segment's audio track duration may exceed the video track duration.
	              // Since we've already remuxed audio, and we know how long the audio track is, we look to
	              // see if the delta to the next segment is longer than the minimum of maxBufferHole and
	              // maxSeekHole. If so, playback would potentially get stuck, so we artificially inflate
	              // the duration of the last frame to minimize any potential gap between segments.
	              var maxBufferHole = config.maxBufferHole,
	                  maxSeekHole = config.maxSeekHole,
	                  gapTolerance = Math.floor(Math.min(maxBufferHole, maxSeekHole) * pesTimeScale),
	                  deltaToFrameEnd = (audioTrackLength ? firstPTS + audioTrackLength * pesTimeScale : this.nextAacPts) - avcSample.pts;
	              if (deltaToFrameEnd > gapTolerance) {
	                // We subtract lastFrameDuration from deltaToFrameEnd to try to prevent any video
	                // frame overlap. maxBufferHole/maxSeekHole should be >> lastFrameDuration anyway.
	                mp4SampleDuration = deltaToFrameEnd - lastFrameDuration;
	                if (mp4SampleDuration < 0) {
	                  mp4SampleDuration = lastFrameDuration;
	                }
	                _logger.logger.log('It is approximately ' + deltaToFrameEnd / 90 + ' ms to the next segment; using duration ' + mp4SampleDuration / 90 + ' ms for the last video frame.');
	              } else {
	                mp4SampleDuration = lastFrameDuration;
	              }
	            } else {
	              mp4SampleDuration = lastFrameDuration;
	            }
	          }
	          mp4SampleDuration /= pes2mp4ScaleFactor;
	          compositionTimeOffset = Math.round((avcSample.pts - avcSample.dts) / pes2mp4ScaleFactor);
	        } else {
	          compositionTimeOffset = Math.max(0, mp4SampleDuration * Math.round((avcSample.pts - avcSample.dts) / (pes2mp4ScaleFactor * mp4SampleDuration)));
	        }

	        //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${avcSample.pts}/${avcSample.dts}/${this._initDTS}/${ptsnorm}/${dtsnorm}/${(avcSample.pts/4294967296).toFixed(3)}');
	        outputSamples.push({
	          size: mp4SampleLength,
	          // constant duration
	          duration: mp4SampleDuration,
	          cts: compositionTimeOffset,
	          flags: {
	            isLeading: 0,
	            isDependedOn: 0,
	            hasRedundancy: 0,
	            degradPrio: 0,
	            dependsOn: avcSample.key ? 2 : 1,
	            isNonSync: avcSample.key ? 0 : 1
	          }
	        });
	      }
	      // next AVC sample DTS should be equal to last sample DTS + last sample duration (in PES timescale)
	      this.nextAvcDts = lastDTS + mp4SampleDuration * pes2mp4ScaleFactor;
	      var dropped = track.dropped;
	      track.len = 0;
	      track.nbNalu = 0;
	      track.dropped = 0;
	      if (outputSamples.length && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
	        var flags = outputSamples[0].flags;
	        // chrome workaround, mark first sample as being a Random Access Point to avoid sourcebuffer append issue
	        // https://code.google.com/p/chromium/issues/detail?id=229412
	        flags.dependsOn = 2;
	        flags.isNonSync = 0;
	      }
	      track.samples = outputSamples;
	      moof = _mp4Generator2.default.moof(track.sequenceNumber++, firstDTS / pes2mp4ScaleFactor, track);
	      track.samples = [];

	      var data = {
	        id: this.id,
	        level: this.level,
	        sn: this.sn,
	        data1: moof,
	        data2: mdat,
	        startPTS: firstPTS / pesTimeScale,
	        endPTS: (lastPTS + pes2mp4ScaleFactor * mp4SampleDuration) / pesTimeScale,
	        startDTS: firstDTS / pesTimeScale,
	        endDTS: this.nextAvcDts / pesTimeScale,
	        type: 'video',
	        nb: outputSamples.length,
	        dropped: dropped
	      };
	      this.observer.trigger(_events2.default.FRAG_PARSING_DATA, data);
	      return data;
	    }
	  }, {
	    key: 'remuxAudio',
	    value: function remuxAudio(track, timeOffset, contiguous) {
	      var pesTimeScale = this.PES_TIMESCALE,
	          mp4timeScale = track.timescale,
	          pes2mp4ScaleFactor = pesTimeScale / mp4timeScale,
	          expectedSampleDuration = track.timescale * 1024 / track.audiosamplerate;
	      var view,
	          offset = 8,
	          aacSample,
	          mp4Sample,
	          unit,
	          mdat,
	          moof,
	          firstPTS,
	          firstDTS,
	          lastDTS,
	          pts,
	          dts,
	          ptsnorm,
	          dtsnorm,
	          samples = [],
	          samples0 = [];

	      track.samples.sort(function (a, b) {
	        return a.pts - b.pts;
	      });
	      samples0 = track.samples;

	      var nextAacPts = contiguous ? this.nextAacPts : timeOffset * pesTimeScale;

	      // If the audio track is missing samples, the frames seem to get "left-shifted" within the
	      // resulting mp4 segment, causing sync issues and leaving gaps at the end of the audio segment.
	      // In an effort to prevent this from happening, we inject frames here where there are gaps.
	      // When possible, we inject a silent frame; when that's not possible, we duplicate the last
	      // frame.
	      var firstPtsNorm = this._PTSNormalize(samples0[0].pts - this._initPTS, nextAacPts),
	          pesFrameDuration = expectedSampleDuration * pes2mp4ScaleFactor;
	      var nextPtsNorm = firstPtsNorm + pesFrameDuration;
	      for (var i = 1; i < samples0.length;) {
	        // First, let's see how far off this frame is from where we expect it to be
	        var sample = samples0[i],
	            ptsNorm = this._PTSNormalize(sample.pts - this._initPTS, nextAacPts),
	            delta = ptsNorm - nextPtsNorm;

	        // If we're overlapping by more than half a duration, drop this sample
	        if (delta < -0.5 * pesFrameDuration) {
	          _logger.logger.log('Dropping frame due to ' + Math.abs(delta / 90) + ' ms overlap.');
	          samples0.splice(i, 1);
	          track.len -= sample.unit.length;
	          // Don't touch nextPtsNorm or i
	        }
	        // Otherwise, if we're more than half a frame away from where we should be, insert missing frames
	        else if (delta > 0.5 * pesFrameDuration) {
	            var missing = Math.round(delta / pesFrameDuration);
	            _logger.logger.log('Injecting ' + missing + ' frame' + (missing > 1 ? 's' : '') + ' of missing audio due to ' + Math.round(delta / 90) + ' ms gap.');
	            for (var j = 0; j < missing; j++) {
	              var newStamp = samples0[i - 1].pts + pesFrameDuration,
	                  fillFrame = _aac2.default.getSilentFrame(track.channelCount);
	              if (!fillFrame) {
	                _logger.logger.log('Unable to get silent frame for given audio codec; duplicating last frame instead.');
	                fillFrame = sample.unit.slice(0);
	              }
	              samples0.splice(i, 0, { unit: fillFrame, pts: newStamp, dts: newStamp });
	              track.len += fillFrame.length;
	              i += 1;
	            }

	            // Adjust sample to next expected pts
	            nextPtsNorm += (missing + 1) * pesFrameDuration;
	            sample.pts = samples0[i - 1].pts + pesFrameDuration;
	            i += 1;
	          }
	          // Otherwise, we're within half a frame duration, so just adjust pts
	          else {
	              if (Math.abs(delta) > 0.1 * pesFrameDuration) {
	                _logger.logger.log('Invalid frame delta ' + (ptsNorm - nextPtsNorm + pesFrameDuration) + ' at PTS ' + Math.round(ptsNorm / 90) + ' (should be ' + pesFrameDuration + ').');
	              }
	              nextPtsNorm += pesFrameDuration;
	              sample.pts = samples0[i - 1].pts + pesFrameDuration;
	              i += 1;
	            }
	      }

	      while (samples0.length) {
	        aacSample = samples0.shift();
	        unit = aacSample.unit;
	        pts = aacSample.pts - this._initDTS;
	        dts = aacSample.dts - this._initDTS;
	        //logger.log(`Audio/PTS:${Math.round(pts/90)}`);
	        // if not first sample
	        if (lastDTS !== undefined) {
	          ptsnorm = this._PTSNormalize(pts, lastDTS);
	          dtsnorm = this._PTSNormalize(dts, lastDTS);
	          mp4Sample.duration = (dtsnorm - lastDTS) / pes2mp4ScaleFactor;
	        } else {
	          ptsnorm = this._PTSNormalize(pts, nextAacPts);
	          dtsnorm = this._PTSNormalize(dts, nextAacPts);
	          var _delta = Math.round(1000 * (ptsnorm - nextAacPts) / pesTimeScale);
	          // if fragment are contiguous, detect hole/overlapping between fragments
	          if (contiguous) {
	            // log delta
	            if (_delta) {
	              if (_delta > 0) {
	                _logger.logger.log(_delta + ' ms hole between AAC samples detected,filling it');
	                // if we have frame overlap, overlapping for more than half a frame duraion
	              } else if (_delta < -12) {
	                  // drop overlapping audio frames... browser will deal with it
	                  _logger.logger.log(-_delta + ' ms overlapping between AAC samples detected, drop frame');
	                  track.len -= unit.byteLength;
	                  continue;
	                }
	              // set PTS/DTS to expected PTS/DTS
	              ptsnorm = dtsnorm = nextAacPts;
	            }
	          }
	          // remember first PTS of our aacSamples, ensure value is positive
	          firstPTS = Math.max(0, ptsnorm);
	          firstDTS = Math.max(0, dtsnorm);
	          if (track.len > 0) {
	            /* concatenate the audio data and construct the mdat in place
	              (need 8 more bytes to fill length and mdat type) */
	            mdat = new Uint8Array(track.len + 8);
	            view = new DataView(mdat.buffer);
	            view.setUint32(0, mdat.byteLength);
	            mdat.set(_mp4Generator2.default.types.mdat, 4);
	          } else {
	            // no audio samples
	            return;
	          }
	        }
	        mdat.set(unit, offset);
	        offset += unit.byteLength;
	        //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${aacSample.pts}/${aacSample.dts}/${this._initDTS}/${ptsnorm}/${dtsnorm}/${(aacSample.pts/4294967296).toFixed(3)}');
	        mp4Sample = {
	          size: unit.byteLength,
	          cts: 0,
	          duration: 0,
	          flags: {
	            isLeading: 0,
	            isDependedOn: 0,
	            hasRedundancy: 0,
	            degradPrio: 0,
	            dependsOn: 1
	          }
	        };
	        samples.push(mp4Sample);
	        lastDTS = dtsnorm;
	      }
	      var lastSampleDuration = 0;
	      var nbSamples = samples.length;
	      //set last sample duration as being identical to previous sample
	      if (nbSamples >= 2) {
	        lastSampleDuration = samples[nbSamples - 2].duration;
	        mp4Sample.duration = lastSampleDuration;
	      }
	      if (nbSamples) {
	        // next aac sample PTS should be equal to last sample PTS + duration
	        this.nextAacPts = ptsnorm + pes2mp4ScaleFactor * lastSampleDuration;
	        //logger.log('Audio/PTS/PTSend:' + aacSample.pts.toFixed(0) + '/' + this.nextAacDts.toFixed(0));
	        track.len = 0;
	        track.samples = samples;
	        moof = _mp4Generator2.default.moof(track.sequenceNumber++, firstDTS / pes2mp4ScaleFactor, track);
	        track.samples = [];
	        var audioData = {
	          id: this.id,
	          level: this.level,
	          sn: this.sn,
	          data1: moof,
	          data2: mdat,
	          startPTS: firstPTS / pesTimeScale,
	          endPTS: this.nextAacPts / pesTimeScale,
	          startDTS: firstDTS / pesTimeScale,
	          endDTS: (dtsnorm + pes2mp4ScaleFactor * lastSampleDuration) / pesTimeScale,
	          type: 'audio',
	          nb: nbSamples
	        };
	        this.observer.trigger(_events2.default.FRAG_PARSING_DATA, audioData);
	        return audioData;
	      }
	      return null;
	    }
	  }, {
	    key: 'remuxEmptyAudio',
	    value: function remuxEmptyAudio(track, timeOffset, contiguous, videoData) {
	      var pesTimeScale = this.PES_TIMESCALE,
	          mp4timeScale = track.timescale ? track.timescale : track.audiosamplerate,
	          pes2mp4ScaleFactor = pesTimeScale / mp4timeScale,


	      // sync with video's timestamp
	      startDTS = videoData.startDTS * pesTimeScale,
	          endDTS = videoData.endDTS * pesTimeScale,


	      // one sample's duration value
	      sampleDuration = 1024,
	          frameDuration = pes2mp4ScaleFactor * sampleDuration,


	      // samples count of this segment's duration
	      nbSamples = Math.ceil((endDTS - startDTS) / frameDuration),


	      // silent frame
	      silentFrame = _aac2.default.getSilentFrame(track.channelCount);

	      // Can't remux if we can't generate a silent frame...
	      if (!silentFrame) {
	        _logger.logger.trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!');
	        return;
	      }

	      var samples = [];
	      for (var i = 0; i < nbSamples; i++) {
	        var stamp = startDTS + i * frameDuration;
	        samples.push({ unit: silentFrame.slice(0), pts: stamp, dts: stamp });
	        track.len += silentFrame.length;
	      }
	      track.samples = samples;

	      this.remuxAudio(track, timeOffset, contiguous);
	    }
	  }, {
	    key: 'remuxID3',
	    value: function remuxID3(track, timeOffset) {
	      var length = track.samples.length,
	          sample;
	      // consume samples
	      if (length) {
	        for (var index = 0; index < length; index++) {
	          sample = track.samples[index];
	          // setting id3 pts, dts to relative time
	          // using this._initPTS and this._initDTS to calculate relative time
	          sample.pts = (sample.pts - this._initPTS) / this.PES_TIMESCALE;
	          sample.dts = (sample.dts - this._initDTS) / this.PES_TIMESCALE;
	        }
	        this.observer.trigger(_events2.default.FRAG_PARSING_METADATA, {
	          id: this.id,
	          level: this.level,
	          sn: this.sn,
	          samples: track.samples
	        });
	      }

	      track.samples = [];
	      timeOffset = timeOffset;
	    }
	  }, {
	    key: 'remuxText',
	    value: function remuxText(track, timeOffset) {
	      track.samples.sort(function (a, b) {
	        return a.pts - b.pts;
	      });

	      var length = track.samples.length,
	          sample;
	      // consume samples
	      if (length) {
	        for (var index = 0; index < length; index++) {
	          sample = track.samples[index];
	          // setting text pts, dts to relative time
	          // using this._initPTS and this._initDTS to calculate relative time
	          sample.pts = (sample.pts - this._initPTS) / this.PES_TIMESCALE;
	        }
	        this.observer.trigger(_events2.default.FRAG_PARSING_USERDATA, {
	          id: this.id,
	          level: this.level,
	          sn: this.sn,
	          samples: track.samples
	        });
	      }

	      track.samples = [];
	      timeOffset = timeOffset;
	    }
	  }, {
	    key: '_PTSNormalize',
	    value: function _PTSNormalize(value, reference) {
	      var offset;
	      if (reference === undefined) {
	        return value;
	      }
	      if (reference < value) {
	        // - 2^33
	        offset = -8589934592;
	      } else {
	        // + 2^33
	        offset = 8589934592;
	      }
	      /* PTS is 33bit (from 0 to 2^33 -1)
	        if diff between value and reference is bigger than half of the amplitude (2^32) then it means that
	        PTS looping occured. fill the gap */
	      while (Math.abs(value - reference) > 4294967296) {
	        value += offset;
	      }
	      return value;
	    }
	  }, {
	    key: 'passthrough',
	    get: function get() {
	      return false;
	    }
	  }]);

	  return MP4Remuxer;
	}();

	exports.default = MP4Remuxer;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *  AAC helper
	 */

	var AAC = function () {
	  function AAC() {
	    _classCallCheck(this, AAC);
	  }

	  _createClass(AAC, null, [{
	    key: "getSilentFrame",
	    value: function getSilentFrame(channelCount) {
	      if (channelCount === 1) {
	        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
	      } else if (channelCount === 2) {
	        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
	      } else if (channelCount === 3) {
	        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
	      } else if (channelCount === 4) {
	        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
	      } else if (channelCount === 5) {
	        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
	      } else if (channelCount === 6) {
	        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
	      }
	      return null;
	    }
	  }]);

	  return AAC;
	}();

	exports.default = AAC;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Generate MP4 Box
	*/

	//import Hex from '../utils/hex';

	var MP4 = function () {
	  function MP4() {
	    _classCallCheck(this, MP4);
	  }

	  _createClass(MP4, null, [{
	    key: 'init',
	    value: function init() {
	      MP4.types = {
	        avc1: [], // codingname
	        avcC: [],
	        btrt: [],
	        dinf: [],
	        dref: [],
	        esds: [],
	        ftyp: [],
	        hdlr: [],
	        mdat: [],
	        mdhd: [],
	        mdia: [],
	        mfhd: [],
	        minf: [],
	        moof: [],
	        moov: [],
	        mp4a: [],
	        mvex: [],
	        mvhd: [],
	        sdtp: [],
	        stbl: [],
	        stco: [],
	        stsc: [],
	        stsd: [],
	        stsz: [],
	        stts: [],
	        tfdt: [],
	        tfhd: [],
	        traf: [],
	        trak: [],
	        trun: [],
	        trex: [],
	        tkhd: [],
	        vmhd: [],
	        smhd: []
	      };

	      var i;
	      for (i in MP4.types) {
	        if (MP4.types.hasOwnProperty(i)) {
	          MP4.types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)];
	        }
	      }

	      var videoHdlr = new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x00, // pre_defined
	      0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
	      ]);

	      var audioHdlr = new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x00, // pre_defined
	      0x73, 0x6f, 0x75, 0x6e, // handler_type: 'soun'
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'SoundHandler'
	      ]);

	      MP4.HDLR_TYPES = {
	        'video': videoHdlr,
	        'audio': audioHdlr
	      };

	      var dref = new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x01, // entry_count
	      0x00, 0x00, 0x00, 0x0c, // entry_size
	      0x75, 0x72, 0x6c, 0x20, // 'url' type
	      0x00, // version 0
	      0x00, 0x00, 0x01 // entry_flags
	      ]);

	      var stco = new Uint8Array([0x00, // version
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x00 // entry_count
	      ]);

	      MP4.STTS = MP4.STSC = MP4.STCO = stco;

	      MP4.STSZ = new Uint8Array([0x00, // version
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x00, // sample_size
	      0x00, 0x00, 0x00, 0x00]);
	      // sample_count
	      MP4.VMHD = new Uint8Array([0x00, // version
	      0x00, 0x00, 0x01, // flags
	      0x00, 0x00, // graphicsmode
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
	      ]);
	      MP4.SMHD = new Uint8Array([0x00, // version
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, // balance
	      0x00, 0x00 // reserved
	      ]);

	      MP4.STSD = new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x01]); // entry_count

	      var majorBrand = new Uint8Array([105, 115, 111, 109]); // isom
	      var avc1Brand = new Uint8Array([97, 118, 99, 49]); // avc1
	      var minorVersion = new Uint8Array([0, 0, 0, 1]);

	      MP4.FTYP = MP4.box(MP4.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand);
	      MP4.DINF = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, dref));
	    }
	  }, {
	    key: 'box',
	    value: function box(type) {
	      var payload = Array.prototype.slice.call(arguments, 1),
	          size = 8,
	          i = payload.length,
	          len = i,
	          result;
	      // calculate the total size we need to allocate
	      while (i--) {
	        size += payload[i].byteLength;
	      }
	      result = new Uint8Array(size);
	      result[0] = size >> 24 & 0xff;
	      result[1] = size >> 16 & 0xff;
	      result[2] = size >> 8 & 0xff;
	      result[3] = size & 0xff;
	      result.set(type, 4);
	      // copy the payload into the result
	      for (i = 0, size = 8; i < len; i++) {
	        // copy payload[i] array @ offset size
	        result.set(payload[i], size);
	        size += payload[i].byteLength;
	      }
	      return result;
	    }
	  }, {
	    key: 'hdlr',
	    value: function hdlr(type) {
	      return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[type]);
	    }
	  }, {
	    key: 'mdat',
	    value: function mdat(data) {
	      return MP4.box(MP4.types.mdat, data);
	    }
	  }, {
	    key: 'mdhd',
	    value: function mdhd(timescale, duration) {
	      duration *= timescale;
	      return MP4.box(MP4.types.mdhd, new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x02, // creation_time
	      0x00, 0x00, 0x00, 0x03, // modification_time
	      timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, // timescale
	      duration >> 24, duration >> 16 & 0xFF, duration >> 8 & 0xFF, duration & 0xFF, // duration
	      0x55, 0xc4, // 'und' language (undetermined)
	      0x00, 0x00]));
	    }
	  }, {
	    key: 'mdia',
	    value: function mdia(track) {
	      return MP4.box(MP4.types.mdia, MP4.mdhd(track.timescale, track.duration), MP4.hdlr(track.type), MP4.minf(track));
	    }
	  }, {
	    key: 'mfhd',
	    value: function mfhd(sequenceNumber) {
	      return MP4.box(MP4.types.mfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, // flags
	      sequenceNumber >> 24, sequenceNumber >> 16 & 0xFF, sequenceNumber >> 8 & 0xFF, sequenceNumber & 0xFF]));
	    }
	  }, {
	    key: 'minf',
	    // sequence_number
	    value: function minf(track) {
	      if (track.type === 'audio') {
	        return MP4.box(MP4.types.minf, MP4.box(MP4.types.smhd, MP4.SMHD), MP4.DINF, MP4.stbl(track));
	      } else {
	        return MP4.box(MP4.types.minf, MP4.box(MP4.types.vmhd, MP4.VMHD), MP4.DINF, MP4.stbl(track));
	      }
	    }
	  }, {
	    key: 'moof',
	    value: function moof(sn, baseMediaDecodeTime, track) {
	      return MP4.box(MP4.types.moof, MP4.mfhd(sn), MP4.traf(track, baseMediaDecodeTime));
	    }
	    /**
	     * @param tracks... (optional) {array} the tracks associated with this movie
	     */

	  }, {
	    key: 'moov',
	    value: function moov(tracks) {
	      var i = tracks.length,
	          boxes = [];

	      while (i--) {
	        boxes[i] = MP4.trak(tracks[i]);
	      }

	      return MP4.box.apply(null, [MP4.types.moov, MP4.mvhd(tracks[0].timescale, tracks[0].duration)].concat(boxes).concat(MP4.mvex(tracks)));
	    }
	  }, {
	    key: 'mvex',
	    value: function mvex(tracks) {
	      var i = tracks.length,
	          boxes = [];

	      while (i--) {
	        boxes[i] = MP4.trex(tracks[i]);
	      }
	      return MP4.box.apply(null, [MP4.types.mvex].concat(boxes));
	    }
	  }, {
	    key: 'mvhd',
	    value: function mvhd(timescale, duration) {
	      duration *= timescale;
	      var bytes = new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      0x00, 0x00, 0x00, 0x01, // creation_time
	      0x00, 0x00, 0x00, 0x02, // modification_time
	      timescale >> 24 & 0xFF, timescale >> 16 & 0xFF, timescale >> 8 & 0xFF, timescale & 0xFF, // timescale
	      duration >> 24 & 0xFF, duration >> 16 & 0xFF, duration >> 8 & 0xFF, duration & 0xFF, // duration
	      0x00, 0x01, 0x00, 0x00, // 1.0 rate
	      0x01, 0x00, // 1.0 volume
	      0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // transformation: unity matrix
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
	      0xff, 0xff, 0xff, 0xff // next_track_ID
	      ]);
	      return MP4.box(MP4.types.mvhd, bytes);
	    }
	  }, {
	    key: 'sdtp',
	    value: function sdtp(track) {
	      var samples = track.samples || [],
	          bytes = new Uint8Array(4 + samples.length),
	          flags,
	          i;
	      // leave the full box header (4 bytes) all zero
	      // write the sample table
	      for (i = 0; i < samples.length; i++) {
	        flags = samples[i].flags;
	        bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
	      }

	      return MP4.box(MP4.types.sdtp, bytes);
	    }
	  }, {
	    key: 'stbl',
	    value: function stbl(track) {
	      return MP4.box(MP4.types.stbl, MP4.stsd(track), MP4.box(MP4.types.stts, MP4.STTS), MP4.box(MP4.types.stsc, MP4.STSC), MP4.box(MP4.types.stsz, MP4.STSZ), MP4.box(MP4.types.stco, MP4.STCO));
	    }
	  }, {
	    key: 'avc1',
	    value: function avc1(track) {
	      var sps = [],
	          pps = [],
	          i,
	          data,
	          len;
	      // assemble the SPSs

	      for (i = 0; i < track.sps.length; i++) {
	        data = track.sps[i];
	        len = data.byteLength;
	        sps.push(len >>> 8 & 0xFF);
	        sps.push(len & 0xFF);
	        sps = sps.concat(Array.prototype.slice.call(data)); // SPS
	      }

	      // assemble the PPSs
	      for (i = 0; i < track.pps.length; i++) {
	        data = track.pps[i];
	        len = data.byteLength;
	        pps.push(len >>> 8 & 0xFF);
	        pps.push(len & 0xFF);
	        pps = pps.concat(Array.prototype.slice.call(data));
	      }

	      var avcc = MP4.box(MP4.types.avcC, new Uint8Array([0x01, // version
	      sps[3], // profile
	      sps[4], // profile compat
	      sps[5], // level
	      0xfc | 3, // lengthSizeMinusOne, hard-coded to 4 bytes
	      0xE0 | track.sps.length // 3bit reserved (111) + numOfSequenceParameterSets
	      ].concat(sps).concat([track.pps.length // numOfPictureParameterSets
	      ]).concat(pps))),
	          // "PPS"
	      width = track.width,
	          height = track.height;
	      //console.log('avcc:' + Hex.hexDump(avcc));
	      return MP4.box(MP4.types.avc1, new Uint8Array([0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, // reserved
	      0x00, 0x01, // data_reference_index
	      0x00, 0x00, // pre_defined
	      0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
	      width >> 8 & 0xFF, width & 0xff, // width
	      height >> 8 & 0xFF, height & 0xff, // height
	      0x00, 0x48, 0x00, 0x00, // horizresolution
	      0x00, 0x48, 0x00, 0x00, // vertresolution
	      0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x01, // frame_count
	      0x12, 0x64, 0x61, 0x69, 0x6C, //dailymotion/hls.js
	      0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
	      0x00, 0x18, // depth = 24
	      0x11, 0x11]), // pre_defined = -1
	      avcc, MP4.box(MP4.types.btrt, new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
	      0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
	      0x00, 0x2d, 0xc6, 0xc0])) // avgBitrate
	      );
	    }
	  }, {
	    key: 'esds',
	    value: function esds(track) {
	      var configlen = track.config.length;
	      return new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags

	      0x03, // descriptor_type
	      0x17 + configlen, // length
	      0x00, 0x01, //es_id
	      0x00, // stream_priority

	      0x04, // descriptor_type
	      0x0f + configlen, // length
	      0x40, //codec : mpeg4_audio
	      0x15, // stream_type
	      0x00, 0x00, 0x00, // buffer_size
	      0x00, 0x00, 0x00, 0x00, // maxBitrate
	      0x00, 0x00, 0x00, 0x00, // avgBitrate

	      0x05 // descriptor_type
	      ].concat([configlen]).concat(track.config).concat([0x06, 0x01, 0x02])); // GASpecificConfig)); // length + audio config descriptor
	    }
	  }, {
	    key: 'mp4a',
	    value: function mp4a(track) {
	      var audiosamplerate = track.audiosamplerate;
	      return MP4.box(MP4.types.mp4a, new Uint8Array([0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, 0x00, // reserved
	      0x00, 0x01, // data_reference_index
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, track.channelCount, // channelcount
	      0x00, 0x10, // sampleSize:16bits
	      0x00, 0x00, 0x00, 0x00, // reserved2
	      audiosamplerate >> 8 & 0xFF, audiosamplerate & 0xff, //
	      0x00, 0x00]), MP4.box(MP4.types.esds, MP4.esds(track)));
	    }
	  }, {
	    key: 'stsd',
	    value: function stsd(track) {
	      if (track.type === 'audio') {
	        return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(track));
	      } else {
	        return MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(track));
	      }
	    }
	  }, {
	    key: 'tkhd',
	    value: function tkhd(track) {
	      var id = track.id,
	          duration = track.duration * track.timescale,
	          width = track.width,
	          height = track.height;
	      return MP4.box(MP4.types.tkhd, new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x07, // flags
	      0x00, 0x00, 0x00, 0x00, // creation_time
	      0x00, 0x00, 0x00, 0x00, // modification_time
	      id >> 24 & 0xFF, id >> 16 & 0xFF, id >> 8 & 0xFF, id & 0xFF, // track_ID
	      0x00, 0x00, 0x00, 0x00, // reserved
	      duration >> 24, duration >> 16 & 0xFF, duration >> 8 & 0xFF, duration & 0xFF, // duration
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
	      0x00, 0x00, // layer
	      0x00, 0x00, // alternate_group
	      0x00, 0x00, // non-audio track volume
	      0x00, 0x00, // reserved
	      0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // transformation: unity matrix
	      width >> 8 & 0xFF, width & 0xFF, 0x00, 0x00, // width
	      height >> 8 & 0xFF, height & 0xFF, 0x00, 0x00 // height
	      ]));
	    }
	  }, {
	    key: 'traf',
	    value: function traf(track, baseMediaDecodeTime) {
	      var sampleDependencyTable = MP4.sdtp(track),
	          id = track.id;
	      return MP4.box(MP4.types.traf, MP4.box(MP4.types.tfhd, new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF])), // track_ID
	      MP4.box(MP4.types.tfdt, new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      baseMediaDecodeTime >> 24, baseMediaDecodeTime >> 16 & 0XFF, baseMediaDecodeTime >> 8 & 0XFF, baseMediaDecodeTime & 0xFF])), // baseMediaDecodeTime
	      MP4.trun(track, sampleDependencyTable.length + 16 + // tfhd
	      16 + // tfdt
	      8 + // traf header
	      16 + // mfhd
	      8 + // moof header
	      8), // mdat header
	      sampleDependencyTable);
	    }

	    /**
	     * Generate a track box.
	     * @param track {object} a track definition
	     * @return {Uint8Array} the track box
	     */

	  }, {
	    key: 'trak',
	    value: function trak(track) {
	      track.duration = track.duration || 0xffffffff;
	      return MP4.box(MP4.types.trak, MP4.tkhd(track), MP4.mdia(track));
	    }
	  }, {
	    key: 'trex',
	    value: function trex(track) {
	      var id = track.id;
	      return MP4.box(MP4.types.trex, new Uint8Array([0x00, // version 0
	      0x00, 0x00, 0x00, // flags
	      id >> 24, id >> 16 & 0XFF, id >> 8 & 0XFF, id & 0xFF, // track_ID
	      0x00, 0x00, 0x00, 0x01, // default_sample_description_index
	      0x00, 0x00, 0x00, 0x00, // default_sample_duration
	      0x00, 0x00, 0x00, 0x00, // default_sample_size
	      0x00, 0x01, 0x00, 0x01 // default_sample_flags
	      ]));
	    }
	  }, {
	    key: 'trun',
	    value: function trun(track, offset) {
	      var samples = track.samples || [],
	          len = samples.length,
	          arraylen = 12 + 16 * len,
	          array = new Uint8Array(arraylen),
	          i,
	          sample,
	          duration,
	          size,
	          flags,
	          cts;
	      offset += 8 + arraylen;
	      array.set([0x00, // version 0
	      0x00, 0x0f, 0x01, // flags
	      len >>> 24 & 0xFF, len >>> 16 & 0xFF, len >>> 8 & 0xFF, len & 0xFF, // sample_count
	      offset >>> 24 & 0xFF, offset >>> 16 & 0xFF, offset >>> 8 & 0xFF, offset & 0xFF // data_offset
	      ], 0);
	      for (i = 0; i < len; i++) {
	        sample = samples[i];
	        duration = sample.duration;
	        size = sample.size;
	        flags = sample.flags;
	        cts = sample.cts;
	        array.set([duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, // sample_duration
	        size >>> 24 & 0xFF, size >>> 16 & 0xFF, size >>> 8 & 0xFF, size & 0xFF, // sample_size
	        flags.isLeading << 2 | flags.dependsOn, flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync, flags.degradPrio & 0xF0 << 8, flags.degradPrio & 0x0F, // sample_flags
	        cts >>> 24 & 0xFF, cts >>> 16 & 0xFF, cts >>> 8 & 0xFF, cts & 0xFF // sample_composition_time_offset
	        ], 12 + 16 * i);
	      }
	      return MP4.box(MP4.types.trun, array);
	    }
	  }, {
	    key: 'initSegment',
	    value: function initSegment(tracks) {
	      if (!MP4.types) {
	        MP4.init();
	      }
	      var movie = MP4.moov(tracks),
	          result;
	      result = new Uint8Array(MP4.FTYP.byteLength + movie.byteLength);
	      result.set(MP4.FTYP);
	      result.set(movie, MP4.FTYP.byteLength);
	      return result;
	    }
	  }]);

	  return MP4;
	}();

	exports.default = MP4;

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
	  ArrayBuffer.prototype.slice = function (start, end) {
	    var that = new Uint8Array(this);
	    if (end === undefined) {
	      end = that.length;
	    }
	    var result = new ArrayBuffer(end - start);
	    var resultArray = new Uint8Array(result);
	    for (var i = 0; i < resultArray.length; i++) {
	      resultArray[i] = that[i + start];
	    }
	    return result;
	  };
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * passthrough remuxer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PassThroughRemuxer = function () {
	  function PassThroughRemuxer(observer, id) {
	    _classCallCheck(this, PassThroughRemuxer);

	    this.observer = observer;
	    this.id = id;
	    this.ISGenerated = false;
	  }

	  _createClass(PassThroughRemuxer, [{
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'insertDiscontinuity',
	    value: function insertDiscontinuity() {}
	  }, {
	    key: 'switchLevel',
	    value: function switchLevel() {
	      this.ISGenerated = false;
	    }
	  }, {
	    key: 'remux',
	    value: function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, rawData) {
	      var observer = this.observer;
	      // generate Init Segment if needed
	      if (!this.ISGenerated) {
	        var tracks = {},
	            data = { id: this.id, tracks: tracks, unique: true },
	            track = videoTrack,
	            codec = track.codec;

	        if (codec) {
	          data.tracks.video = {
	            container: track.container,
	            codec: codec,
	            metadata: {
	              width: track.width,
	              height: track.height
	            }
	          };
	        }

	        track = audioTrack;
	        codec = track.codec;
	        if (codec) {
	          data.tracks.audio = {
	            container: track.container,
	            codec: codec,
	            metadata: {
	              channelCount: track.channelCount
	            }
	          };
	        }
	        this.ISGenerated = true;
	        observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT, data);
	      }
	      observer.trigger(_events2.default.FRAG_PARSING_DATA, {
	        id: this.id,
	        data1: rawData,
	        startPTS: timeOffset,
	        startDTS: timeOffset,
	        type: 'audiovideo',
	        nb: 1,
	        dropped: 0
	      });
	    }
	  }, {
	    key: 'passthrough',
	    get: function get() {
	      return true;
	    }
	  }]);

	  return PassThroughRemuxer;
	}();

	exports.default = PassThroughRemuxer;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _demuxerInline = __webpack_require__(33);

	var _demuxerInline2 = _interopRequireDefault(_demuxerInline);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _events3 = __webpack_require__(45);

	var _events4 = _interopRequireDefault(_events3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DemuxerWorker = function DemuxerWorker(self) {
	  // observer setup
	  var observer = new _events4.default();
	  observer.trigger = function trigger(event) {
	    for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      data[_key - 1] = arguments[_key];
	    }

	    observer.emit.apply(observer, [event, event].concat(data));
	  };

	  observer.off = function off(event) {
	    for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      data[_key2 - 1] = arguments[_key2];
	    }

	    observer.removeListener.apply(observer, [event].concat(data));
	  };
	  self.addEventListener('message', function (ev) {
	    var data = ev.data;
	    //console.log('demuxer cmd:' + data.cmd);
	    switch (data.cmd) {
	      case 'init':
	        self.demuxer = new _demuxerInline2.default(observer, data.id, data.typeSupported, JSON.parse(data.config));
	        break;
	      case 'demux':
	        self.demuxer.push(new Uint8Array(data.data), data.audioCodec, data.videoCodec, data.timeOffset, data.cc, data.level, data.sn, data.duration);
	        break;
	      default:
	        break;
	    }
	  });

	  // listen to events triggered by Demuxer
	  observer.on(_events2.default.FRAG_PARSING_INIT_SEGMENT, function (ev, data) {
	    self.postMessage({ event: ev, id: data.id, level: data.level, sn: data.sn, tracks: data.tracks, unique: data.unique });
	  });

	  observer.on(_events2.default.FRAG_PARSING_DATA, function (ev, data) {
	    var objData = { event: ev, id: data.id, level: data.level, sn: data.sn, type: data.type, startPTS: data.startPTS, endPTS: data.endPTS, startDTS: data.startDTS, endDTS: data.endDTS, data1: data.data1.buffer, data2: data.data2.buffer, nb: data.nb, dropped: data.dropped };
	    // pass data1/data2 as transferable object (no copy)
	    self.postMessage(objData, [objData.data1, objData.data2]);
	  });

	  observer.on(_events2.default.FRAG_PARSED, function (event, data) {
	    self.postMessage({ event: event, data: data });
	  });

	  observer.on(_events2.default.ERROR, function (event, data) {
	    self.postMessage({ event: event, data: data });
	  });

	  observer.on(_events2.default.FRAG_PARSING_METADATA, function (event, data) {
	    var objData = { event: event, id: data.id, samples: data.samples };
	    self.postMessage(objData);
	  });

	  observer.on(_events2.default.FRAG_PARSING_USERDATA, function (event, data) {
	    var objData = { event: event, id: data.id, samples: data.samples };
	    self.postMessage(objData);
	  });
	}; /* demuxer web worker.
	    *  - listen to worker message, and trigger DemuxerInline upon reception of Fragments.
	    *  - provides MP4 Boxes back to main thread using [transferable objects](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) in order to minimize message passing overhead.
	    */

	exports.default = DemuxerWorker;

/***/ },
/* 45 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AES128 decryption.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _aes128Decrypter = __webpack_require__(47);

	var _aes128Decrypter2 = _interopRequireDefault(_aes128Decrypter);

	var _errors = __webpack_require__(18);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Decrypter = function () {
	  function Decrypter(hls) {
	    _classCallCheck(this, Decrypter);

	    this.hls = hls;
	    try {
	      var browserCrypto = window ? window.crypto : crypto;
	      this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
	      this.disableWebCrypto = !this.subtle;
	    } catch (e) {
	      this.disableWebCrypto = true;
	    }
	  }

	  _createClass(Decrypter, [{
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'decrypt',
	    value: function decrypt(data, key, iv, callback) {
	      if (this.disableWebCrypto && this.hls.config.enableSoftwareAES) {
	        this.decryptBySoftware(data, key, iv, callback);
	      } else {
	        this.decryptByWebCrypto(data, key, iv, callback);
	      }
	    }
	  }, {
	    key: 'decryptByWebCrypto',
	    value: function decryptByWebCrypto(data, key, iv, callback) {
	      var _this = this;

	      _logger.logger.log('decrypting by WebCrypto API');

	      this.subtle.importKey('raw', key, { name: 'AES-CBC', length: 128 }, false, ['decrypt']).then(function (importedKey) {
	        _this.subtle.decrypt({ name: 'AES-CBC', iv: iv.buffer }, importedKey, data).then(callback).catch(function (err) {
	          _this.onWebCryptoError(err, data, key, iv, callback);
	        });
	      }).catch(function (err) {
	        _this.onWebCryptoError(err, data, key, iv, callback);
	      });
	    }
	  }, {
	    key: 'decryptBySoftware',
	    value: function decryptBySoftware(data, key8, iv8, callback) {
	      _logger.logger.log('decrypting by JavaScript Implementation');

	      var view = new DataView(key8.buffer);
	      var key = new Uint32Array([view.getUint32(0), view.getUint32(4), view.getUint32(8), view.getUint32(12)]);

	      view = new DataView(iv8.buffer);
	      var iv = new Uint32Array([view.getUint32(0), view.getUint32(4), view.getUint32(8), view.getUint32(12)]);

	      var decrypter = new _aes128Decrypter2.default(key, iv);
	      callback(decrypter.decrypt(data).buffer);
	    }
	  }, {
	    key: 'onWebCryptoError',
	    value: function onWebCryptoError(err, data, key, iv, callback) {
	      if (this.hls.config.enableSoftwareAES) {
	        _logger.logger.log('disabling to use WebCrypto API');
	        this.disableWebCrypto = true;
	        this.decryptBySoftware(data, key, iv, callback);
	      } else {
	        _logger.logger.error('decrypting error : ' + err.message);
	        this.hls.trigger(Event.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: true, reason: err.message });
	      }
	    }
	  }]);

	  return Decrypter;
	}();

	exports.default = Decrypter;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file contains an adaptation of the AES decryption algorithm
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * from the Standford Javascript Cryptography Library. That work is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * covered by the following copyright and permissions notice:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2009-2010 Emily Stark, Mike Hamburg, Dan Boneh.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Redistribution and use in source and binary forms, with or without
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modification, are permitted provided that the following conditions are
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * met:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 1. Redistributions of source code must retain the above copyright
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    notice, this list of conditions and the following disclaimer.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2. Redistributions in binary form must reproduce the above
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    copyright notice, this list of conditions and the following
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    disclaimer in the documentation and/or other materials provided
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *    with the distribution.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ``AS IS'' AND ANY EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR CONTRIBUTORS BE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The views and conclusions contained in the software and documentation
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * are those of the authors and should not be interpreted as representing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * official policies, either expressed or implied, of the authors.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _aes = __webpack_require__(48);

	var _aes2 = _interopRequireDefault(_aes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AES128Decrypter = function () {
	  function AES128Decrypter(key, initVector) {
	    _classCallCheck(this, AES128Decrypter);

	    this.key = key;
	    this.iv = initVector;
	  }

	  /**
	   * Convert network-order (big-endian) bytes into their little-endian
	   * representation.
	   */


	  _createClass(AES128Decrypter, [{
	    key: 'ntoh',
	    value: function ntoh(word) {
	      return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24;
	    }

	    /**
	     * Decrypt bytes using AES-128 with CBC and PKCS#7 padding.
	     * @param encrypted {Uint8Array} the encrypted bytes
	     * @param key {Uint32Array} the bytes of the decryption key
	     * @param initVector {Uint32Array} the initialization vector (IV) to
	     * use for the first round of CBC.
	     * @return {Uint8Array} the decrypted bytes
	     *
	     * @see http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
	     * @see http://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_.28CBC.29
	     * @see https://tools.ietf.org/html/rfc2315
	     */

	  }, {
	    key: 'doDecrypt',
	    value: function doDecrypt(encrypted, key, initVector) {
	      var
	      // word-level access to the encrypted bytes
	      encrypted32 = new Int32Array(encrypted.buffer, encrypted.byteOffset, encrypted.byteLength >> 2),
	          decipher = new _aes2.default(Array.prototype.slice.call(key)),


	      // byte and word-level access for the decrypted output
	      decrypted = new Uint8Array(encrypted.byteLength),
	          decrypted32 = new Int32Array(decrypted.buffer),


	      // temporary variables for working with the IV, encrypted, and
	      // decrypted data
	      init0,
	          init1,
	          init2,
	          init3,
	          encrypted0,
	          encrypted1,
	          encrypted2,
	          encrypted3,


	      // iteration variable
	      wordIx;

	      // pull out the words of the IV to ensure we don't modify the
	      // passed-in reference and easier access
	      init0 = ~ ~initVector[0];
	      init1 = ~ ~initVector[1];
	      init2 = ~ ~initVector[2];
	      init3 = ~ ~initVector[3];

	      // decrypt four word sequences, applying cipher-block chaining (CBC)
	      // to each decrypted block
	      for (wordIx = 0; wordIx < encrypted32.length; wordIx += 4) {
	        // convert big-endian (network order) words into little-endian
	        // (javascript order)
	        encrypted0 = ~ ~this.ntoh(encrypted32[wordIx]);
	        encrypted1 = ~ ~this.ntoh(encrypted32[wordIx + 1]);
	        encrypted2 = ~ ~this.ntoh(encrypted32[wordIx + 2]);
	        encrypted3 = ~ ~this.ntoh(encrypted32[wordIx + 3]);

	        // decrypt the block
	        decipher.decrypt(encrypted0, encrypted1, encrypted2, encrypted3, decrypted32, wordIx);

	        // XOR with the IV, and restore network byte-order to obtain the
	        // plaintext
	        decrypted32[wordIx] = this.ntoh(decrypted32[wordIx] ^ init0);
	        decrypted32[wordIx + 1] = this.ntoh(decrypted32[wordIx + 1] ^ init1);
	        decrypted32[wordIx + 2] = this.ntoh(decrypted32[wordIx + 2] ^ init2);
	        decrypted32[wordIx + 3] = this.ntoh(decrypted32[wordIx + 3] ^ init3);

	        // setup the IV for the next round
	        init0 = encrypted0;
	        init1 = encrypted1;
	        init2 = encrypted2;
	        init3 = encrypted3;
	      }

	      return decrypted;
	    }
	  }, {
	    key: 'localDecrypt',
	    value: function localDecrypt(encrypted, key, initVector, decrypted) {
	      var bytes = this.doDecrypt(encrypted, key, initVector);
	      decrypted.set(bytes, encrypted.byteOffset);
	    }
	  }, {
	    key: 'decrypt',
	    value: function decrypt(encrypted) {
	      var step = 4 * 8000,

	      //encrypted32 = new Int32Array(encrypted.buffer),
	      encrypted32 = new Int32Array(encrypted),
	          decrypted = new Uint8Array(encrypted.byteLength),
	          i = 0;

	      // split up the encryption job and do the individual chunks asynchronously
	      var key = this.key;
	      var initVector = this.iv;
	      this.localDecrypt(encrypted32.subarray(i, i + step), key, initVector, decrypted);

	      for (i = step; i < encrypted32.length; i += step) {
	        initVector = new Uint32Array([this.ntoh(encrypted32[i - 4]), this.ntoh(encrypted32[i - 3]), this.ntoh(encrypted32[i - 2]), this.ntoh(encrypted32[i - 1])]);
	        this.localDecrypt(encrypted32.subarray(i, i + step), key, initVector, decrypted);
	      }

	      return decrypted;
	    }
	  }]);

	  return AES128Decrypter;
	}();

	exports.default = AES128Decrypter;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 *
	 * This file contains an adaptation of the AES decryption algorithm
	 * from the Standford Javascript Cryptography Library. That work is
	 * covered by the following copyright and permissions notice:
	 *
	 * Copyright 2009-2010 Emily Stark, Mike Hamburg, Dan Boneh.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 * 1. Redistributions of source code must retain the above copyright
	 *    notice, this list of conditions and the following disclaimer.
	 *
	 * 2. Redistributions in binary form must reproduce the above
	 *    copyright notice, this list of conditions and the following
	 *    disclaimer in the documentation and/or other materials provided
	 *    with the distribution.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ``AS IS'' AND ANY EXPRESS OR
	 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
	 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
	 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
	 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
	 * IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 * The views and conclusions contained in the software and documentation
	 * are those of the authors and should not be interpreted as representing
	 * official policies, either expressed or implied, of the authors.
	 */

	var AES = function () {

	  /**
	   * Schedule out an AES key for both encryption and decryption. This
	   * is a low-level class. Use a cipher mode to do bulk encryption.
	   *
	   * @constructor
	   * @param key {Array} The key as an array of 4, 6 or 8 words.
	   */

	  function AES(key) {
	    _classCallCheck(this, AES);

	    /**
	     * The expanded S-box and inverse S-box tables. These will be computed
	     * on the client so that we don't have to send them down the wire.
	     *
	     * There are two tables, _tables[0] is for encryption and
	     * _tables[1] is for decryption.
	     *
	     * The first 4 sub-tables are the expanded S-box with MixColumns. The
	     * last (_tables[01][4]) is the S-box itself.
	     *
	     * @private
	     */
	    this._tables = [[[], [], [], [], []], [[], [], [], [], []]];

	    this._precompute();

	    var i,
	        j,
	        tmp,
	        encKey,
	        decKey,
	        sbox = this._tables[0][4],
	        decTable = this._tables[1],
	        keyLen = key.length,
	        rcon = 1;

	    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
	      throw new Error('Invalid aes key size=' + keyLen);
	    }

	    encKey = key.slice(0);
	    decKey = [];
	    this._key = [encKey, decKey];

	    // schedule encryption keys
	    for (i = keyLen; i < 4 * keyLen + 28; i++) {
	      tmp = encKey[i - 1];

	      // apply sbox
	      if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
	        tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];

	        // shift rows and add rcon
	        if (i % keyLen === 0) {
	          tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
	          rcon = rcon << 1 ^ (rcon >> 7) * 283;
	        }
	      }

	      encKey[i] = encKey[i - keyLen] ^ tmp;
	    }

	    // schedule decryption keys
	    for (j = 0; i; j++, i--) {
	      tmp = encKey[j & 3 ? i : i - 4];
	      if (i <= 4 || j < 4) {
	        decKey[j] = tmp;
	      } else {
	        decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
	      }
	    }
	  }

	  /**
	   * Expand the S-box tables.
	   *
	   * @private
	   */


	  _createClass(AES, [{
	    key: '_precompute',
	    value: function _precompute() {
	      var encTable = this._tables[0],
	          decTable = this._tables[1],
	          sbox = encTable[4],
	          sboxInv = decTable[4],
	          i,
	          x,
	          xInv,
	          d = [],
	          th = [],
	          x2,
	          x4,
	          x8,
	          s,
	          tEnc,
	          tDec;

	      // Compute double and third tables
	      for (i = 0; i < 256; i++) {
	        th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
	      }

	      for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
	        // Compute sbox
	        s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
	        s = s >> 8 ^ s & 255 ^ 99;
	        sbox[x] = s;
	        sboxInv[s] = x;

	        // Compute MixColumns
	        x8 = d[x4 = d[x2 = d[x]]];
	        tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
	        tEnc = d[s] * 0x101 ^ s * 0x1010100;

	        for (i = 0; i < 4; i++) {
	          encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
	          decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
	        }
	      }

	      // Compactify. Considerable speedup on Firefox.
	      for (i = 0; i < 5; i++) {
	        encTable[i] = encTable[i].slice(0);
	        decTable[i] = decTable[i].slice(0);
	      }
	    }

	    /**
	     * Decrypt 16 bytes, specified as four 32-bit words.
	     * @param encrypted0 {number} the first word to decrypt
	     * @param encrypted1 {number} the second word to decrypt
	     * @param encrypted2 {number} the third word to decrypt
	     * @param encrypted3 {number} the fourth word to decrypt
	     * @param out {Int32Array} the array to write the decrypted words
	     * into
	     * @param offset {number} the offset into the output array to start
	     * writing results
	     * @return {Array} The plaintext.
	     */

	  }, {
	    key: 'decrypt',
	    value: function decrypt(encrypted0, encrypted1, encrypted2, encrypted3, out, offset) {
	      var key = this._key[1],

	      // state variables a,b,c,d are loaded with pre-whitened data
	      a = encrypted0 ^ key[0],
	          b = encrypted3 ^ key[1],
	          c = encrypted2 ^ key[2],
	          d = encrypted1 ^ key[3],
	          a2,
	          b2,
	          c2,
	          nInnerRounds = key.length / 4 - 2,
	          // key.length === 2 ?
	      i,
	          kIndex = 4,
	          table = this._tables[1],


	      // load up the tables
	      table0 = table[0],
	          table1 = table[1],
	          table2 = table[2],
	          table3 = table[3],
	          sbox = table[4];

	      // Inner rounds. Cribbed from OpenSSL.
	      for (i = 0; i < nInnerRounds; i++) {
	        a2 = table0[a >>> 24] ^ table1[b >> 16 & 255] ^ table2[c >> 8 & 255] ^ table3[d & 255] ^ key[kIndex];
	        b2 = table0[b >>> 24] ^ table1[c >> 16 & 255] ^ table2[d >> 8 & 255] ^ table3[a & 255] ^ key[kIndex + 1];
	        c2 = table0[c >>> 24] ^ table1[d >> 16 & 255] ^ table2[a >> 8 & 255] ^ table3[b & 255] ^ key[kIndex + 2];
	        d = table0[d >>> 24] ^ table1[a >> 16 & 255] ^ table2[b >> 8 & 255] ^ table3[c & 255] ^ key[kIndex + 3];
	        kIndex += 4;
	        a = a2;b = b2;c = c2;
	      }

	      // Last round.
	      for (i = 0; i < 4; i++) {
	        out[(3 & -i) + offset] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
	        a2 = a;a = b;b = c;c = d;d = a2;
	      }
	    }
	  }]);

	  return AES;
	}();

	exports.default = AES;

/***/ },
/* 49 */
/***/ function(module, exports) {

	var bundleFn = arguments[3];
	var sources = arguments[4];
	var cache = arguments[5];

	var stringify = JSON.stringify;

	module.exports = function (fn, options) {
	    var wkey;
	    var cacheKeys = Object.keys(cache);

	    for (var i = 0, l = cacheKeys.length; i < l; i++) {
	        var key = cacheKeys[i];
	        var exp = cache[key].exports;
	        // Using babel as a transpiler to use esmodule, the export will always
	        // be an object with the default export as a property of it. To ensure
	        // the existing api and babel esmodule exports are both supported we
	        // check for both
	        if (exp === fn || exp && exp.default === fn) {
	            wkey = key;
	            break;
	        }
	    }

	    if (!wkey) {
	        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
	        var wcache = {};
	        for (var i = 0, l = cacheKeys.length; i < l; i++) {
	            var key = cacheKeys[i];
	            wcache[key] = key;
	        }
	        sources[wkey] = [
	            Function(['require','module','exports'], '(' + fn + ')(self)'),
	            wcache
	        ];
	    }
	    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

	    var scache = {}; scache[wkey] = wkey;
	    sources[skey] = [
	        Function(['require'], (
	            // try to call default if defined to also support babel esmodule
	            // exports
	            'var f = require(' + stringify(wkey) + ');' +
	            '(f.default ? f.default : f)(self);'
	        )),
	        scache
	    ];

	    var src = '(' + bundleFn + ')({'
	        + Object.keys(sources).map(function (key) {
	            return stringify(key) + ':['
	                + sources[key][0]
	                + ',' + stringify(sources[key][1]) + ']'
	            ;
	        }).join(',')
	        + '},{},[' + stringify(skey) + '])'
	    ;

	    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

	    var blob = new Blob([src], { type: 'text/javascript' });
	    if (options && options.bare) { return blob; }
	    var workerUrl = URL.createObjectURL(blob);
	    var worker = new Worker(workerUrl);
	    worker.objectURL = workerUrl;
	    return worker;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	var BinarySearch = {
	    /**
	     * Searches for an item in an array which matches a certain condition.
	     * This requires the condition to only match one item in the array,
	     * and for the array to be ordered.
	     *
	     * @param {Array} list The array to search.
	     * @param {Function} comparisonFunction
	     *      Called and provided a candidate item as the first argument.
	     *      Should return:
	     *          > -1 if the item should be located at a lower index than the provided item.
	     *          > 1 if the item should be located at a higher index than the provided item.
	     *          > 0 if the item is the item you're looking for.
	     *
	     * @return {*} The object if it is found or null otherwise.
	     */
	    search: function search(list, comparisonFunction) {
	        var minIndex = 0;
	        var maxIndex = list.length - 1;
	        var currentIndex = null;
	        var currentElement = null;

	        while (minIndex <= maxIndex) {
	            currentIndex = (minIndex + maxIndex) / 2 | 0;
	            currentElement = list[currentIndex];

	            var comparisonResult = comparisonFunction(currentElement);
	            if (comparisonResult > 0) {
	                minIndex = currentIndex + 1;
	            } else if (comparisonResult < 0) {
	                maxIndex = currentIndex - 1;
	            } else {
	                return currentElement;
	            }
	        }

	        return null;
	    }
	};

	module.exports = BinarySearch;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Level Helper class, providing methods dealing with playlist sliding and drift
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _logger = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LevelHelper = function () {
	  function LevelHelper() {
	    _classCallCheck(this, LevelHelper);
	  }

	  _createClass(LevelHelper, null, [{
	    key: 'mergeDetails',
	    value: function mergeDetails(oldDetails, newDetails) {
	      var start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN,
	          end = Math.min(oldDetails.endSN, newDetails.endSN) - newDetails.startSN,
	          delta = newDetails.startSN - oldDetails.startSN,
	          oldfragments = oldDetails.fragments,
	          newfragments = newDetails.fragments,
	          ccOffset = 0,
	          PTSFrag;

	      // check if old/new playlists have fragments in common
	      if (end < start) {
	        newDetails.PTSKnown = false;
	        return;
	      }
	      // loop through overlapping SN and update startPTS , cc, and duration if any found
	      for (var i = start; i <= end; i++) {
	        var oldFrag = oldfragments[delta + i],
	            newFrag = newfragments[i];
	        if (newFrag && oldFrag) {
	          ccOffset = oldFrag.cc - newFrag.cc;
	          if (!isNaN(oldFrag.startPTS)) {
	            newFrag.start = newFrag.startPTS = oldFrag.startPTS;
	            newFrag.endPTS = oldFrag.endPTS;
	            newFrag.duration = oldFrag.duration;
	            PTSFrag = newFrag;
	          }
	        }
	      }

	      if (ccOffset) {
	        _logger.logger.log('discontinuity sliding from playlist, take drift into account');
	        for (i = 0; i < newfragments.length; i++) {
	          newfragments[i].cc += ccOffset;
	        }
	      }

	      // if at least one fragment contains PTS info, recompute PTS information for all fragments
	      if (PTSFrag) {
	        LevelHelper.updateFragPTSDTS(newDetails, PTSFrag.sn, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS);
	      } else {
	        // ensure that delta is within oldfragments range
	        // also adjust sliding in case delta is 0 (we could have old=[50-60] and new=old=[50-61])
	        // in that case we also need to adjust start offset of all fragments
	        if (delta >= 0 && delta < oldfragments.length) {
	          // adjust start by sliding offset
	          var sliding = oldfragments[delta].start;
	          for (i = 0; i < newfragments.length; i++) {
	            newfragments[i].start += sliding;
	          }
	        }
	      }
	      // if we are here, it means we have fragments overlapping between
	      // old and new level. reliable PTS info is thus relying on old level
	      newDetails.PTSKnown = oldDetails.PTSKnown;
	      return;
	    }
	  }, {
	    key: 'updateFragPTSDTS',
	    value: function updateFragPTSDTS(details, sn, startPTS, endPTS, startDTS, endDTS) {
	      var fragIdx, fragments, frag, i;
	      // exit if sn out of range
	      if (sn < details.startSN || sn > details.endSN) {
	        return 0;
	      }
	      fragIdx = sn - details.startSN;
	      fragments = details.fragments;
	      frag = fragments[fragIdx];
	      if (!isNaN(frag.startPTS)) {
	        // delta PTS between audio and video
	        var deltaPTS = Math.abs(frag.startPTS - startPTS);
	        if (isNaN(frag.deltaPTS)) {
	          frag.deltaPTS = deltaPTS;
	        } else {
	          frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS);
	        }
	        startPTS = Math.min(startPTS, frag.startPTS);
	        endPTS = Math.max(endPTS, frag.endPTS);
	        startDTS = Math.min(startDTS, frag.startDTS);
	        endDTS = Math.max(endDTS, frag.endDTS);
	      }

	      var drift = startPTS - frag.start;

	      frag.start = frag.startPTS = startPTS;
	      frag.endPTS = endPTS;
	      frag.startDTS = startDTS;
	      frag.endDTS = endDTS;
	      frag.duration = endPTS - startPTS;
	      // adjust fragment PTS/duration from seqnum-1 to frag 0
	      for (i = fragIdx; i > 0; i--) {
	        LevelHelper.updatePTS(fragments, i, i - 1);
	      }

	      // adjust fragment PTS/duration from seqnum to last frag
	      for (i = fragIdx; i < fragments.length - 1; i++) {
	        LevelHelper.updatePTS(fragments, i, i + 1);
	      }
	      details.PTSKnown = true;
	      //logger.log(`                                            frag start/end:${startPTS.toFixed(3)}/${endPTS.toFixed(3)}`);

	      return drift;
	    }
	  }, {
	    key: 'updatePTS',
	    value: function updatePTS(fragments, fromIdx, toIdx) {
	      var fragFrom = fragments[fromIdx],
	          fragTo = fragments[toIdx],
	          fragToPTS = fragTo.startPTS;
	      // if we know startPTS[toIdx]
	      if (!isNaN(fragToPTS)) {
	        // update fragment duration.
	        // it helps to fix drifts between playlist reported duration and fragment real duration
	        if (toIdx > fromIdx) {
	          fragFrom.duration = fragToPTS - fragFrom.start;
	          if (fragFrom.duration < 0) {
	            _logger.logger.error('negative duration computed for frag ' + fragFrom.sn + ',level ' + fragFrom.level + ', there should be some duration drift between playlist and fragment!');
	          }
	        } else {
	          fragTo.duration = fragFrom.start - fragToPTS;
	          if (fragTo.duration < 0) {
	            _logger.logger.error('negative duration computed for frag ' + fragTo.sn + ',level ' + fragTo.level + ', there should be some duration drift between playlist and fragment!');
	          }
	        }
	      } else {
	        // we dont know startPTS[toIdx]
	        if (toIdx > fromIdx) {
	          fragTo.start = fragFrom.start + fragFrom.duration;
	        } else {
	          fragTo.start = fragFrom.start - fragTo.duration;
	        }
	      }
	    }
	  }]);

	  return LevelHelper;
	}();

	exports.default = LevelHelper;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _demuxer = __webpack_require__(32);

	var _demuxer2 = _interopRequireDefault(_demuxer);

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	var _binarySearch = __webpack_require__(50);

	var _binarySearch2 = _interopRequireDefault(_binarySearch);

	var _bufferHelper = __webpack_require__(26);

	var _bufferHelper2 = _interopRequireDefault(_bufferHelper);

	var _levelHelper = __webpack_require__(51);

	var _levelHelper2 = _interopRequireDefault(_levelHelper);

	var _errors = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Stream Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var State = {
	  STOPPED: 'STOPPED',
	  STARTING: 'STARTING',
	  IDLE: 'IDLE',
	  PAUSED: 'PAUSED',
	  KEY_LOADING: 'KEY_LOADING',
	  FRAG_LOADING: 'FRAG_LOADING',
	  FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
	  WAITING_LEVEL: 'WAITING_LEVEL',
	  PARSING: 'PARSING',
	  PARSED: 'PARSED',
	  ENDED: 'ENDED',
	  ERROR: 'ERROR'
	};

	var StreamController = function (_EventHandler) {
	  _inherits(StreamController, _EventHandler);

	  function StreamController(hls) {
	    _classCallCheck(this, StreamController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StreamController).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_PARSED, _events2.default.LEVEL_LOADED, _events2.default.KEY_LOADED, _events2.default.FRAG_LOADED, _events2.default.FRAG_LOAD_EMERGENCY_ABORTED, _events2.default.FRAG_PARSING_INIT_SEGMENT, _events2.default.FRAG_PARSING_DATA, _events2.default.FRAG_PARSED, _events2.default.ERROR, _events2.default.BUFFER_CREATED, _events2.default.BUFFER_APPENDED, _events2.default.BUFFER_FLUSHED));

	    _this.config = hls.config;
	    _this.audioCodecSwap = false;
	    _this.ticks = 0;
	    _this.ontick = _this.tick.bind(_this);
	    return _this;
	  }

	  _createClass(StreamController, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.stopLoad();
	      if (this.timer) {
	        clearInterval(this.timer);
	        this.timer = null;
	      }
	      _eventHandler2.default.prototype.destroy.call(this);
	      this.state = State.STOPPED;
	    }
	  }, {
	    key: 'startLoad',
	    value: function startLoad(startPosition) {
	      if (this.levels) {
	        var media = this.media,
	            lastCurrentTime = this.lastCurrentTime;
	        this.stopLoad();
	        this.demuxer = new _demuxer2.default(this.hls, 'main');
	        if (!this.timer) {
	          this.timer = setInterval(this.ontick, 100);
	        }
	        this.level = -1;
	        this.fragLoadError = 0;
	        if (media && lastCurrentTime > 0) {
	          _logger.logger.log('configure startPosition @' + lastCurrentTime);
	          if (!this.lastPaused) {
	            _logger.logger.log('resuming video');
	            media.play();
	          }
	          this.state = State.IDLE;
	        } else {
	          this.lastCurrentTime = this.startPosition ? this.startPosition : startPosition;
	          this.state = State.STARTING;
	        }
	        this.nextLoadPosition = this.startPosition = this.lastCurrentTime;
	        this.tick();
	      } else {
	        _logger.logger.warn('cannot start loading as manifest not parsed yet');
	        this.state = State.STOPPED;
	      }
	    }
	  }, {
	    key: 'stopLoad',
	    value: function stopLoad() {
	      var frag = this.fragCurrent;
	      if (frag) {
	        if (frag.loader) {
	          frag.loader.abort();
	        }
	        this.fragCurrent = null;
	      }
	      this.fragPrevious = null;
	      if (this.demuxer) {
	        this.demuxer.destroy();
	        this.demuxer = null;
	      }
	      this.state = State.STOPPED;
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.ticks++;
	      if (this.ticks === 1) {
	        this.doTick();
	        if (this.ticks > 1) {
	          setTimeout(this.tick, 1);
	        }
	        this.ticks = 0;
	      }
	    }
	  }, {
	    key: 'doTick',
	    value: function doTick() {
	      switch (this.state) {
	        case State.STARTING:
	          var hls = this.hls;
	          // determine load level
	          var startLevel = hls.startLevel;
	          if (startLevel === -1) {
	            // -1 : guess start Level by doing a bitrate test by loading first fragment of lowest quality level
	            startLevel = 0;
	            this.fragBitrateTest = true;
	          }
	          // set new level to playlist loader : this will trigger start level load
	          // hls.nextLoadLevel remains until it is set to a new value or until a new frag is successfully loaded
	          this.level = hls.nextLoadLevel = startLevel;
	          this.state = State.WAITING_LEVEL;
	          this.loadedmetadata = false;
	          break;
	        case State.IDLE:
	          // when this returns false there was an error and we shall return immediatly
	          // from current tick
	          if (!this._doTickIdle()) {
	            return;
	          }
	          break;
	        case State.WAITING_LEVEL:
	          var level = this.levels[this.level];
	          // check if playlist is already loaded
	          if (level && level.details) {
	            this.state = State.IDLE;
	          }
	          break;
	        case State.FRAG_LOADING_WAITING_RETRY:
	          var now = performance.now();
	          var retryDate = this.retryDate;
	          // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
	          if (!retryDate || now >= retryDate || this.media && this.media.seeking) {
	            _logger.logger.log('mediaController: retryDate reached, switch back to IDLE state');
	            this.state = State.IDLE;
	          }
	          break;
	        case State.ERROR:
	        case State.PAUSED:
	        case State.STOPPED:
	        case State.FRAG_LOADING:
	        case State.PARSING:
	        case State.PARSED:
	        case State.ENDED:
	          break;
	        default:
	          break;
	      }
	      // check buffer
	      this._checkBuffer();
	      // check/update current fragment
	      this._checkFragmentChanged();
	    }

	    // Ironically the "idle" state is the on we do the most logic in it seems ....
	    // NOTE: Maybe we could rather schedule a check for buffer length after half of the currently
	    //       played segment, or on pause/play/seek instead of naively checking every 100ms?

	  }, {
	    key: '_doTickIdle',
	    value: function _doTickIdle() {
	      var hls = this.hls,
	          config = hls.config;

	      // if video not attached AND
	      // start fragment already requested OR start frag prefetch disable
	      // exit loop
	      // => if media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
	      if (!this.media && (this.startFragRequested || !config.startFragPrefetch)) {
	        return true;
	      }

	      // if we have not yet loaded any fragment, start loading from start position
	      var pos = void 0;
	      if (this.loadedmetadata) {
	        pos = this.media.currentTime;
	      } else {
	        pos = this.nextLoadPosition;
	      }
	      // determine next load level
	      var level = hls.nextLoadLevel;

	      // compute max Buffer Length that we could get from this load level, based on level bitrate. don't buffer more than 60 MB and more than 30s
	      var maxBufLen = void 0;
	      if (this.levels[level].hasOwnProperty('bitrate')) {
	        maxBufLen = Math.max(8 * config.maxBufferSize / this.levels[level].bitrate, config.maxBufferLength);
	        maxBufLen = Math.min(maxBufLen, config.maxMaxBufferLength);
	      } else {
	        maxBufLen = config.maxBufferLength;
	      }

	      // determine next candidate fragment to be loaded, based on current position and end of buffer position
	      // ensure up to `config.maxMaxBufferLength` of buffer upfront

	      var bufferInfo = _bufferHelper2.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, pos, config.maxBufferHole),
	          bufferLen = bufferInfo.len;
	      // Stay idle if we are still with buffer margins
	      if (bufferLen >= maxBufLen) {
	        return true;
	      }

	      // if buffer length is less than maxBufLen try to load a new fragment ...
	      _logger.logger.trace('buffer length of ' + bufferLen.toFixed(3) + ' is below max of ' + maxBufLen.toFixed(3) + '. checking for more payload ...');

	      // set next load level : this will trigger a playlist load if needed
	      hls.nextLoadLevel = level;
	      this.level = level;

	      var levelDetails = this.levels[level].details;
	      // if level info not retrieved yet, switch state and wait for level retrieval
	      // if live playlist, ensure that new playlist has been refreshed to avoid loading/try to load
	      // a useless and outdated fragment (that might even introduce load error if it is already out of the live playlist)
	      if (typeof levelDetails === 'undefined' || levelDetails.live && this.levelLastLoaded !== level) {
	        this.state = State.WAITING_LEVEL;
	        return true;
	      }

	      // if we have the levelDetails for the selected variant, lets continue enrichen our stream (load keys/fragments or trigger EOS, etc..)
	      return this._fetchPayloadOrEos({ pos: pos, bufferInfo: bufferInfo, levelDetails: levelDetails });
	    }
	  }, {
	    key: '_fetchPayloadOrEos',
	    value: function _fetchPayloadOrEos(_ref) {
	      var pos = _ref.pos;
	      var bufferInfo = _ref.bufferInfo;
	      var levelDetails = _ref.levelDetails;

	      var fragPrevious = this.fragPrevious,
	          level = this.level;

	      // find fragment index, contiguous with end of buffer position
	      var fragments = levelDetails.fragments,
	          fragLen = fragments.length,
	          start = fragments[0].start,
	          end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration,
	          bufferEnd = bufferInfo.end,
	          frag = void 0;

	      // in case of live playlist we need to ensure that requested position is not located before playlist start
	      if (levelDetails.live) {
	        frag = this._ensureFragmentAtLivePoint({ levelDetails: levelDetails, bufferEnd: bufferEnd, start: start, end: end, fragPrevious: fragPrevious, fragments: fragments, fragLen: fragLen });
	        // if it explicitely returns null don't load any fragment and exit function now
	        if (frag === null) {
	          return false;
	        }
	      } else {
	        // VoD playlist: if bufferEnd before start of playlist, load first fragment
	        if (bufferEnd < start) {
	          frag = fragments[0];
	        }
	      }
	      if (!frag) {
	        frag = this._findFragment({ start: start, fragPrevious: fragPrevious, fragLen: fragLen, fragments: fragments, bufferEnd: bufferEnd, end: end, levelDetails: levelDetails });
	      }
	      if (frag) {
	        return this._loadFragmentOrKey({ frag: frag, level: level, levelDetails: levelDetails, pos: pos, bufferEnd: bufferEnd });
	      }
	      return true;
	    }
	  }, {
	    key: '_ensureFragmentAtLivePoint',
	    value: function _ensureFragmentAtLivePoint(_ref2) {
	      var levelDetails = _ref2.levelDetails;
	      var bufferEnd = _ref2.bufferEnd;
	      var start = _ref2.start;
	      var end = _ref2.end;
	      var fragPrevious = _ref2.fragPrevious;
	      var fragments = _ref2.fragments;
	      var fragLen = _ref2.fragLen;

	      var config = this.hls.config;

	      var frag = void 0;

	      // check if requested position is within seekable boundaries :
	      //logger.log(`start/pos/bufEnd/seeking:${start.toFixed(3)}/${pos.toFixed(3)}/${bufferEnd.toFixed(3)}/${this.media.seeking}`);
	      var maxLatency = config.liveMaxLatencyDuration !== undefined ? config.liveMaxLatencyDuration : config.liveMaxLatencyDurationCount * levelDetails.targetduration;

	      if (bufferEnd < Math.max(start, end - maxLatency)) {
	        var targetLatency = config.liveSyncDuration !== undefined ? config.liveSyncDuration : config.liveSyncDurationCount * levelDetails.targetduration;
	        var liveSyncPosition = start + Math.max(0, levelDetails.totalduration - targetLatency);
	        _logger.logger.log('buffer end: ' + bufferEnd + ' is located too far from the end of live sliding playlist, reset currentTime to : ' + liveSyncPosition.toFixed(3));
	        bufferEnd = liveSyncPosition;
	        var media = this.media;
	        if (media && media.readyState && media.duration > liveSyncPosition) {
	          media.currentTime = liveSyncPosition;
	        }
	      }

	      // if end of buffer greater than live edge, don't load any fragment
	      // this could happen if live playlist intermittently slides in the past.
	      // level 1 loaded [182580161,182580167]
	      // level 1 loaded [182580162,182580169]
	      // Loading 182580168 of [182580162 ,182580169],level 1 ..
	      // Loading 182580169 of [182580162 ,182580169],level 1 ..
	      // level 1 loaded [182580162,182580168] <============= here we should have bufferEnd > end. in that case break to avoid reloading 182580168
	      // level 1 loaded [182580164,182580171]
	      //
	      if (levelDetails.PTSKnown && bufferEnd > end) {
	        return null;
	      }

	      if (this.startFragRequested && !levelDetails.PTSKnown) {
	        /* we are switching level on live playlist, but we don't have any PTS info for that quality level ...
	           try to load frag matching with next SN.
	           even if SN are not synchronized between playlists, loading this frag will help us
	           compute playlist sliding and find the right one after in case it was not the right consecutive one */
	        if (fragPrevious) {
	          var targetSN = fragPrevious.sn + 1;
	          if (targetSN >= levelDetails.startSN && targetSN <= levelDetails.endSN) {
	            frag = fragments[targetSN - levelDetails.startSN];
	            _logger.logger.log('live playlist, switching playlist, load frag with next SN: ' + frag.sn);
	          }
	        }
	        if (!frag) {
	          /* we have no idea about which fragment should be loaded.
	             so let's load mid fragment. it will help computing playlist sliding and find the right one
	          */
	          frag = fragments[Math.min(fragLen - 1, Math.round(fragLen / 2))];
	          _logger.logger.log('live playlist, switching playlist, unknown, load middle frag : ' + frag.sn);
	        }
	      }
	      return frag;
	    }
	  }, {
	    key: '_findFragment',
	    value: function _findFragment(_ref3) {
	      var start = _ref3.start;
	      var fragPrevious = _ref3.fragPrevious;
	      var fragLen = _ref3.fragLen;
	      var fragments = _ref3.fragments;
	      var bufferEnd = _ref3.bufferEnd;
	      var end = _ref3.end;
	      var levelDetails = _ref3.levelDetails;

	      var config = this.hls.config;

	      var frag = void 0,
	          foundFrag = void 0,
	          maxFragLookUpTolerance = config.maxFragLookUpTolerance;

	      if (bufferEnd < end) {
	        if (bufferEnd > end - maxFragLookUpTolerance) {
	          maxFragLookUpTolerance = 0;
	        }
	        foundFrag = _binarySearch2.default.search(fragments, function (candidate) {
	          // offset should be within fragment boundary - config.maxFragLookUpTolerance
	          // this is to cope with situations like
	          // bufferEnd = 9.991
	          // frag[Ø] : [0,10]
	          // frag[1] : [10,20]
	          // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
	          //              frag start               frag start+duration
	          //                  |-----------------------------|
	          //              <--->                         <--->
	          //  ...--------><-----------------------------><---------....
	          // previous frag         matching fragment         next frag
	          //  return -1             return 0                 return 1
	          //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
	          if (candidate.start + candidate.duration - maxFragLookUpTolerance <= bufferEnd) {
	            return 1;
	          } // if maxFragLookUpTolerance will have negative value then don't return -1 for first element
	          else if (candidate.start - maxFragLookUpTolerance > bufferEnd && candidate.start) {
	              return -1;
	            }
	          return 0;
	        });
	      } else {
	        // reach end of playlist
	        foundFrag = fragments[fragLen - 1];
	      }
	      if (foundFrag) {
	        frag = foundFrag;
	        start = foundFrag.start;
	        //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
	        if (fragPrevious && frag.level === fragPrevious.level && frag.sn === fragPrevious.sn) {
	          if (frag.sn < levelDetails.endSN) {
	            var deltaPTS = fragPrevious.deltaPTS,
	                curSNIdx = frag.sn - levelDetails.startSN;
	            // if there is a significant delta between audio and video, larger than max allowed hole,
	            // and if previous remuxed fragment did not start with a keyframe. (fragPrevious.dropped)
	            // let's try to load previous fragment again to get last keyframe
	            // then we will reload again current fragment (that way we should be able to fill the buffer hole ...)
	            if (deltaPTS && deltaPTS > config.maxBufferHole && fragPrevious.dropped) {
	              frag = fragments[curSNIdx - 1];
	              _logger.logger.warn('SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this');
	              // decrement previous frag load counter to avoid frag loop loading error when next fragment will get reloaded
	              fragPrevious.loadCounter--;
	            } else {
	              frag = fragments[curSNIdx + 1];
	              _logger.logger.log('SN just loaded, load next one: ' + frag.sn);
	            }
	          } else {
	            // have we reached end of VOD playlist ?
	            if (!levelDetails.live) {
	              // Finalize the media stream
	              this.hls.trigger(_events2.default.BUFFER_EOS);
	              // We might be loading the last fragment but actually the media
	              // is currently processing a seek command and waiting for new data to resume at another point.
	              // Going to ended state while media is seeking can spawn an infinite buffering broken state.
	              if (!this.media.seeking) {
	                this.state = State.ENDED;
	              }
	            }
	            frag = null;
	          }
	        }
	      }
	      return frag;
	    }
	  }, {
	    key: '_loadFragmentOrKey',
	    value: function _loadFragmentOrKey(_ref4) {
	      var frag = _ref4.frag;
	      var level = _ref4.level;
	      var levelDetails = _ref4.levelDetails;
	      var pos = _ref4.pos;
	      var bufferEnd = _ref4.bufferEnd;

	      var hls = this.hls,
	          config = hls.config;

	      //logger.log('loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
	      if (frag.decryptdata.uri != null && frag.decryptdata.key == null) {
	        _logger.logger.log('Loading key for ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level);
	        this.state = State.KEY_LOADING;
	        hls.trigger(_events2.default.KEY_LOADING, { frag: frag });
	      } else {
	        _logger.logger.log('Loading ' + frag.sn + ' of [' + levelDetails.startSN + ' ,' + levelDetails.endSN + '],level ' + level + ', currentTime:' + pos + ',bufferEnd:' + bufferEnd.toFixed(3));
	        // ensure that we are not reloading the same fragments in loop ...
	        if (this.fragLoadIdx !== undefined) {
	          this.fragLoadIdx++;
	        } else {
	          this.fragLoadIdx = 0;
	        }
	        if (frag.loadCounter) {
	          frag.loadCounter++;
	          var maxThreshold = config.fragLoadingLoopThreshold;
	          // if this frag has already been loaded 3 times, and if it has been reloaded recently
	          if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) {
	            hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: false, frag: frag });
	            return false;
	          }
	        } else {
	          frag.loadCounter = 1;
	        }
	        frag.loadIdx = this.fragLoadIdx;
	        frag.autoLevel = hls.autoLevelEnabled;
	        this.fragCurrent = frag;
	        this.startFragRequested = true;
	        hls.trigger(_events2.default.FRAG_LOADING, { frag: frag });
	        this.state = State.FRAG_LOADING;
	        return true;
	      }
	    }
	  }, {
	    key: 'getBufferRange',
	    value: function getBufferRange(position) {
	      var i,
	          range,
	          bufferRange = this.bufferRange;
	      if (bufferRange) {
	        for (i = bufferRange.length - 1; i >= 0; i--) {
	          range = bufferRange[i];
	          if (position >= range.start && position <= range.end) {
	            return range;
	          }
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'followingBufferRange',
	    value: function followingBufferRange(range) {
	      if (range) {
	        // try to get range of next fragment (500ms after this range)
	        return this.getBufferRange(range.end + 0.5);
	      }
	      return null;
	    }
	  }, {
	    key: 'isBuffered',
	    value: function isBuffered(position) {
	      var media = this.media;
	      if (media) {
	        var buffered = media.buffered;
	        for (var i = 0; i < buffered.length; i++) {
	          if (position >= buffered.start(i) && position <= buffered.end(i)) {
	            return true;
	          }
	        }
	      }
	      return false;
	    }
	  }, {
	    key: '_checkFragmentChanged',
	    value: function _checkFragmentChanged() {
	      var rangeCurrent,
	          currentTime,
	          video = this.media;
	      if (video && video.seeking === false) {
	        currentTime = video.currentTime;
	        /* if video element is in seeked state, currentTime can only increase.
	          (assuming that playback rate is positive ...)
	          As sometimes currentTime jumps back to zero after a
	          media decode error, check this, to avoid seeking back to
	          wrong position after a media decode error
	        */
	        if (currentTime > video.playbackRate * this.lastCurrentTime) {
	          this.lastCurrentTime = currentTime;
	        }
	        if (this.isBuffered(currentTime)) {
	          rangeCurrent = this.getBufferRange(currentTime);
	        } else if (this.isBuffered(currentTime + 0.1)) {
	          /* ensure that FRAG_CHANGED event is triggered at startup,
	            when first video frame is displayed and playback is paused.
	            add a tolerance of 100ms, in case current position is not buffered,
	            check if current pos+100ms is buffered and use that buffer range
	            for FRAG_CHANGED event reporting */
	          rangeCurrent = this.getBufferRange(currentTime + 0.1);
	        }
	        if (rangeCurrent) {
	          var fragPlaying = rangeCurrent.frag;
	          if (fragPlaying !== this.fragPlaying) {
	            this.fragPlaying = fragPlaying;
	            this.hls.trigger(_events2.default.FRAG_CHANGED, { frag: fragPlaying });
	          }
	        }
	      }
	    }

	    /*
	      on immediate level switch :
	       - pause playback if playing
	       - cancel any pending load request
	       - and trigger a buffer flush
	    */

	  }, {
	    key: 'immediateLevelSwitch',
	    value: function immediateLevelSwitch() {
	      _logger.logger.log('immediateLevelSwitch');
	      if (!this.immediateSwitch) {
	        this.immediateSwitch = true;
	        var media = this.media,
	            previouslyPaused = void 0;
	        if (media) {
	          previouslyPaused = media.paused;
	          media.pause();
	        } else {
	          // don't restart playback after instant level switch in case media not attached
	          previouslyPaused = true;
	        }
	        this.previouslyPaused = previouslyPaused;
	      }
	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && fragCurrent.loader) {
	        fragCurrent.loader.abort();
	      }
	      this.fragCurrent = null;
	      this.state = State.PAUSED;
	      // flush everything
	      this.hls.trigger(_events2.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY });
	    }

	    /*
	       on immediate level switch end, after new fragment has been buffered :
	        - nudge video decoder by slightly adjusting video currentTime
	        - resume the playback if needed
	    */

	  }, {
	    key: 'immediateLevelSwitchEnd',
	    value: function immediateLevelSwitchEnd() {
	      this.immediateSwitch = false;
	      var media = this.media;
	      if (media && media.readyState) {
	        media.currentTime -= 0.0001;
	        if (!this.previouslyPaused) {
	          media.play();
	        }
	      }
	    }
	  }, {
	    key: 'nextLevelSwitch',
	    value: function nextLevelSwitch() {
	      /* try to switch ASAP without breaking video playback :
	         in order to ensure smooth but quick level switching,
	        we need to find the next flushable buffer range
	        we should take into account new segment fetch time
	      */
	      var media = this.media;
	      // ensure that media is defined and that metadata are available (to retrieve currentTime)
	      if (media && media.readyState) {
	        var fetchdelay = void 0,
	            currentRange = void 0,
	            nextRange = void 0;
	        // increase fragment load Index to avoid frag loop loading error after buffer flush
	        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	        currentRange = this.getBufferRange(media.currentTime);
	        if (currentRange && currentRange.start > 1) {
	          // flush buffer preceding current fragment (flush until current fragment start offset)
	          // minus 1s to avoid video freezing, that could happen if we flush keyframe of current video ...
	          this.state = State.PAUSED;
	          this.hls.trigger(_events2.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: currentRange.start - 1 });
	        }
	        if (!media.paused) {
	          // add a safety delay of 1s
	          var nextLevelId = this.hls.nextLoadLevel,
	              nextLevel = this.levels[nextLevelId],
	              fragLastKbps = this.fragLastKbps;
	          if (fragLastKbps && this.fragCurrent) {
	            fetchdelay = this.fragCurrent.duration * nextLevel.bitrate / (1000 * fragLastKbps) + 1;
	          } else {
	            fetchdelay = 0;
	          }
	        } else {
	          fetchdelay = 0;
	        }
	        //logger.log('fetchdelay:'+fetchdelay);
	        // find buffer range that will be reached once new fragment will be fetched
	        nextRange = this.getBufferRange(media.currentTime + fetchdelay);
	        if (nextRange) {
	          // we can flush buffer range following this one without stalling playback
	          nextRange = this.followingBufferRange(nextRange);
	          if (nextRange) {
	            // if we are here, we can also cancel any loading/demuxing in progress, as they are useless
	            var fragCurrent = this.fragCurrent;
	            if (fragCurrent && fragCurrent.loader) {
	              fragCurrent.loader.abort();
	            }
	            this.fragCurrent = null;
	            // flush position is the start position of this new buffer
	            this.state = State.PAUSED;
	            this.hls.trigger(_events2.default.BUFFER_FLUSHING, { startOffset: nextRange.start, endOffset: Number.POSITIVE_INFINITY });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'onMediaAttached',
	    value: function onMediaAttached(data) {
	      var media = this.media = data.media;
	      this.onvseeking = this.onMediaSeeking.bind(this);
	      this.onvseeked = this.onMediaSeeked.bind(this);
	      this.onvended = this.onMediaEnded.bind(this);
	      media.addEventListener('seeking', this.onvseeking);
	      media.addEventListener('seeked', this.onvseeked);
	      media.addEventListener('ended', this.onvended);
	      var config = this.config;
	      if (this.levels && config.autoStartLoad) {
	        this.hls.startLoad(config.startPosition);
	      }
	    }
	  }, {
	    key: 'onMediaDetaching',
	    value: function onMediaDetaching() {
	      var media = this.media;
	      if (media && media.ended) {
	        _logger.logger.log('MSE detaching and video ended, reset startPosition');
	        this.startPosition = this.lastCurrentTime = 0;
	      }

	      // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
	      var levels = this.levels;
	      if (levels) {
	        // reset fragment load counter
	        levels.forEach(function (level) {
	          if (level.details) {
	            level.details.fragments.forEach(function (fragment) {
	              fragment.loadCounter = undefined;
	            });
	          }
	        });
	      }
	      // remove video listeners
	      if (media) {
	        media.removeEventListener('seeking', this.onvseeking);
	        media.removeEventListener('seeked', this.onvseeked);
	        media.removeEventListener('ended', this.onvended);
	        this.onvseeking = this.onvseeked = this.onvended = null;
	      }
	      this.media = null;
	      this.loadedmetadata = false;
	      this.stopLoad();
	    }
	  }, {
	    key: 'onMediaSeeking',
	    value: function onMediaSeeking() {
	      _logger.logger.log('media seeking to ' + this.media.currentTime);
	      if (this.state === State.FRAG_LOADING) {
	        // check if currently loaded fragment is inside buffer.
	        //if outside, cancel fragment loading, otherwise do nothing
	        if (_bufferHelper2.default.bufferInfo(this.media, this.media.currentTime, this.config.maxBufferHole).len === 0) {
	          _logger.logger.log('seeking outside of buffer while fragment load in progress, cancel fragment load');
	          var fragCurrent = this.fragCurrent;
	          if (fragCurrent) {
	            if (fragCurrent.loader) {
	              fragCurrent.loader.abort();
	            }
	            this.fragCurrent = null;
	          }
	          this.fragPrevious = null;
	          // switch to IDLE state to load new fragment
	          this.state = State.IDLE;
	        }
	      } else if (this.state === State.ENDED) {
	        // switch to IDLE state to check for potential new fragment
	        this.state = State.IDLE;
	      }
	      if (this.media) {
	        this.lastCurrentTime = this.media.currentTime;
	      }
	      // avoid reporting fragment loop loading error in case user is seeking several times on same position
	      if (this.state !== State.FRAG_LOADING && this.fragLoadIdx !== undefined) {
	        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	      }
	      // tick to speed up processing
	      this.tick();
	    }
	  }, {
	    key: 'onMediaSeeked',
	    value: function onMediaSeeked() {
	      _logger.logger.log('media seeked to ' + this.media.currentTime);
	      // tick to speed up FRAGMENT_PLAYING triggering
	      this.tick();
	    }
	  }, {
	    key: 'onMediaEnded',
	    value: function onMediaEnded() {
	      _logger.logger.log('media ended');
	      // reset startPosition and lastCurrentTime to restart playback @ stream beginning
	      this.startPosition = this.lastCurrentTime = 0;
	    }
	  }, {
	    key: 'onManifestLoading',
	    value: function onManifestLoading() {
	      // reset buffer on manifest loading
	      _logger.logger.log('trigger BUFFER_RESET');
	      this.hls.trigger(_events2.default.BUFFER_RESET);
	      this.bufferRange = [];
	      this.stalled = false;
	    }
	  }, {
	    key: 'onManifestParsed',
	    value: function onManifestParsed(data) {
	      var aac = false,
	          heaac = false,
	          codec;
	      data.levels.forEach(function (level) {
	        // detect if we have different kind of audio codecs used amongst playlists
	        codec = level.audioCodec;
	        if (codec) {
	          if (codec.indexOf('mp4a.40.2') !== -1) {
	            aac = true;
	          }
	          if (codec.indexOf('mp4a.40.5') !== -1) {
	            heaac = true;
	          }
	        }
	      });
	      this.audioCodecSwitch = aac && heaac;
	      if (this.audioCodecSwitch) {
	        _logger.logger.log('both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC');
	      }
	      this.levels = data.levels;
	      this.startLevelLoaded = false;
	      this.startFragRequested = false;
	      var config = this.config;
	      if (config.autoStartLoad) {
	        this.hls.startLoad(config.startPosition);
	      }
	    }
	  }, {
	    key: 'onLevelLoaded',
	    value: function onLevelLoaded(data) {
	      var newDetails = data.details,
	          newLevelId = data.level,
	          curLevel = this.levels[newLevelId],
	          duration = newDetails.totalduration,
	          sliding = 0;

	      _logger.logger.log('level ' + newLevelId + ' loaded [' + newDetails.startSN + ',' + newDetails.endSN + '],duration:' + duration);
	      this.levelLastLoaded = newLevelId;

	      if (newDetails.live) {
	        var curDetails = curLevel.details;
	        if (curDetails) {
	          // we already have details for that level, merge them
	          _levelHelper2.default.mergeDetails(curDetails, newDetails);
	          sliding = newDetails.fragments[0].start;
	          if (newDetails.PTSKnown) {
	            _logger.logger.log('live playlist sliding:' + sliding.toFixed(3));
	          } else {
	            _logger.logger.log('live playlist - outdated PTS, unknown sliding');
	          }
	        } else {
	          newDetails.PTSKnown = false;
	          _logger.logger.log('live playlist - first load, unknown sliding');
	        }
	      } else {
	        newDetails.PTSKnown = false;
	      }
	      // override level info
	      curLevel.details = newDetails;
	      this.hls.trigger(_events2.default.LEVEL_UPDATED, { details: newDetails, level: newLevelId });

	      if (this.startFragRequested === false) {
	        // compute start position if set to -1. use it straight away if value is defined
	        if (this.startPosition === -1) {
	          // first, check if start time offset has been set in playlist, if yes, use this value
	          var startTimeOffset = newDetails.startTimeOffset;
	          if (!isNaN(startTimeOffset)) {
	            _logger.logger.log('start time offset found in playlist, adjust startPosition to ' + startTimeOffset);
	            this.startPosition = startTimeOffset;
	          } else {
	            // if live playlist, set start position to be fragment N-this.config.liveSyncDurationCount (usually 3)
	            if (newDetails.live) {
	              var targetLatency = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * newDetails.targetduration;
	              this.startPosition = Math.max(0, sliding + duration - targetLatency);
	            } else {
	              this.startPosition = 0;
	            }
	          }
	        }
	        this.nextLoadPosition = this.startPosition;
	      }
	      // only switch batck to IDLE state if we were waiting for level to start downloading a new fragment
	      if (this.state === State.WAITING_LEVEL) {
	        this.state = State.IDLE;
	      }
	      //trigger handler right now
	      this.tick();
	    }
	  }, {
	    key: 'onKeyLoaded',
	    value: function onKeyLoaded() {
	      if (this.state === State.KEY_LOADING) {
	        this.state = State.IDLE;
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onFragLoaded',
	    value: function onFragLoaded(data) {
	      var fragCurrent = this.fragCurrent;
	      if (this.state === State.FRAG_LOADING && fragCurrent && data.frag.type === 'main' && data.frag.level === fragCurrent.level && data.frag.sn === fragCurrent.sn) {
	        _logger.logger.log('Loaded  ' + fragCurrent.sn + ' of level ' + fragCurrent.level);
	        if (this.fragBitrateTest === true) {
	          // switch back to IDLE state ... we just loaded a fragment to determine adequate start bitrate and initialize autoswitch algo
	          this.state = State.IDLE;
	          this.fragBitrateTest = false;
	          this.startFragRequested = false;
	          data.stats.tparsed = data.stats.tbuffered = performance.now();
	          this.hls.trigger(_events2.default.FRAG_BUFFERED, { stats: data.stats, frag: fragCurrent, id: 'main' });
	        } else {
	          this.state = State.PARSING;
	          // transmux the MPEG-TS data to ISO-BMFF segments
	          this.stats = data.stats;
	          var currentLevel = this.levels[this.level],
	              details = currentLevel.details,
	              duration = details.totalduration,
	              start = fragCurrent.startDTS !== undefined ? fragCurrent.startDTS : fragCurrent.start,
	              level = fragCurrent.level,
	              sn = fragCurrent.sn,
	              audioCodec = this.config.defaultAudioCodec || currentLevel.audioCodec;
	          if (this.audioCodecSwap) {
	            _logger.logger.log('swapping playlist audio codec');
	            if (audioCodec === undefined) {
	              audioCodec = this.lastAudioCodec;
	            }
	            if (audioCodec) {
	              if (audioCodec.indexOf('mp4a.40.5') !== -1) {
	                audioCodec = 'mp4a.40.2';
	              } else {
	                audioCodec = 'mp4a.40.5';
	              }
	            }
	          }
	          this.pendingAppending = 0;
	          _logger.logger.log('Demuxing ' + sn + ' of [' + details.startSN + ' ,' + details.endSN + '],level ' + level + ', cc ' + fragCurrent.cc);
	          var demuxer = this.demuxer;
	          if (demuxer) {
	            demuxer.push(data.payload, audioCodec, currentLevel.videoCodec, start, fragCurrent.cc, level, sn, duration, fragCurrent.decryptdata);
	          }
	        }
	      }
	      this.fragLoadError = 0;
	    }
	  }, {
	    key: 'onFragParsingInitSegment',
	    value: function onFragParsingInitSegment(data) {
	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'main' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        var tracks = data.tracks,
	            trackName,
	            track;

	        // include levelCodec in audio and video tracks
	        track = tracks.audio;
	        if (track) {
	          var audioCodec = this.levels[this.level].audioCodec,
	              ua = navigator.userAgent.toLowerCase();
	          if (audioCodec && this.audioCodecSwap) {
	            _logger.logger.log('swapping playlist audio codec');
	            if (audioCodec.indexOf('mp4a.40.5') !== -1) {
	              audioCodec = 'mp4a.40.2';
	            } else {
	              audioCodec = 'mp4a.40.5';
	            }
	          }
	          // in case AAC and HE-AAC audio codecs are signalled in manifest
	          // force HE-AAC , as it seems that most browsers prefers that way,
	          // except for mono streams OR on FF
	          // these conditions might need to be reviewed ...
	          if (this.audioCodecSwitch) {
	            // don't force HE-AAC if mono stream
	            if (track.metadata.channelCount !== 1 &&
	            // don't force HE-AAC if firefox
	            ua.indexOf('firefox') === -1) {
	              audioCodec = 'mp4a.40.5';
	            }
	          }
	          // HE-AAC is broken on Android, always signal audio codec as AAC even if variant manifest states otherwise
	          if (ua.indexOf('android') !== -1) {
	            audioCodec = 'mp4a.40.2';
	            _logger.logger.log('Android: force audio codec to' + audioCodec);
	          }
	          track.levelCodec = audioCodec;
	          track.id = data.id;
	        }
	        track = tracks.video;
	        if (track) {
	          track.levelCodec = this.levels[this.level].videoCodec;
	          track.id = data.id;
	        }

	        // if remuxer specify that a unique track needs to generated,
	        // let's merge all tracks together
	        if (data.unique) {
	          var mergedTrack = {
	            codec: '',
	            levelCodec: ''
	          };
	          for (trackName in data.tracks) {
	            track = tracks[trackName];
	            mergedTrack.container = track.container;
	            if (mergedTrack.codec) {
	              mergedTrack.codec += ',';
	              mergedTrack.levelCodec += ',';
	            }
	            if (track.codec) {
	              mergedTrack.codec += track.codec;
	            }
	            if (track.levelCodec) {
	              mergedTrack.levelCodec += track.levelCodec;
	            }
	          }
	          tracks = { audiovideo: mergedTrack };
	        }
	        this.hls.trigger(_events2.default.BUFFER_CODECS, tracks);
	        // loop through tracks that are going to be provided to bufferController
	        for (trackName in tracks) {
	          track = tracks[trackName];
	          _logger.logger.log('track:' + trackName + ',container:' + track.container + ',codecs[level/parsed]=[' + track.levelCodec + '/' + track.codec + ']');
	          var initSegment = track.initSegment;
	          if (initSegment) {
	            this.pendingAppending++;
	            this.hls.trigger(_events2.default.BUFFER_APPENDING, { type: trackName, data: initSegment, parent: 'main' });
	          }
	        }
	        //trigger handler right now
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onFragParsingData',
	    value: function onFragParsingData(data) {
	      var _this2 = this;

	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'main' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        var level = this.levels[this.level],
	            frag = this.fragCurrent;

	        _logger.logger.log('parsed ' + data.type + ',PTS:[' + data.startPTS.toFixed(3) + ',' + data.endPTS.toFixed(3) + '],DTS:[' + data.startDTS.toFixed(3) + '/' + data.endDTS.toFixed(3) + '],nb:' + data.nb + ',dropped:' + (data.dropped || 0));

	        var drift = _levelHelper2.default.updateFragPTSDTS(level.details, frag.sn, data.startPTS, data.endPTS, data.startDTS, data.endDTS),
	            hls = this.hls;
	        hls.trigger(_events2.default.LEVEL_PTS_UPDATED, { details: level.details, level: this.level, drift: drift });

	        // has remuxer dropped video frames located before first keyframe ?
	        if (data.type === 'video') {
	          frag.dropped = data.dropped;
	        }

	        [data.data1, data.data2].forEach(function (buffer) {
	          if (buffer) {
	            _this2.pendingAppending++;
	            hls.trigger(_events2.default.BUFFER_APPENDING, { type: data.type, data: buffer, parent: 'main' });
	          }
	        });

	        this.nextLoadPosition = data.endPTS;
	        this.bufferRange.push({ type: data.type, start: data.startPTS, end: data.endPTS, frag: frag });

	        //trigger handler right now
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onFragParsed',
	    value: function onFragParsed(data) {
	      var fragCurrent = this.fragCurrent;
	      if (fragCurrent && data.id === 'main' && data.sn === fragCurrent.sn && data.level === fragCurrent.level && this.state === State.PARSING) {
	        this.stats.tparsed = performance.now();
	        this.state = State.PARSED;
	        this._checkAppendedParsed();
	      }
	    }
	  }, {
	    key: 'onBufferCreated',
	    value: function onBufferCreated(data) {
	      var tracks = data.tracks,
	          mediaTrack = void 0,
	          name = void 0,
	          alternate = false;
	      for (var type in tracks) {
	        var track = tracks[type];
	        if (track.id === 'main') {
	          name = type;
	          mediaTrack = track;
	        } else {
	          alternate = true;
	        }
	      }
	      if (alternate && mediaTrack) {
	        _logger.logger.log('alternate track found, use ' + name + '.buffered to schedule main fragment loading');
	        this.mediaBuffer = mediaTrack.buffer;
	      } else {
	        this.mediaBuffer = this.media;
	      }
	    }
	  }, {
	    key: 'onBufferAppended',
	    value: function onBufferAppended(data) {
	      if (data.parent === 'main') {
	        switch (this.state) {
	          case State.PARSING:
	          case State.PARSED:
	            this.pendingAppending--;
	            this._checkAppendedParsed();
	            break;
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: '_checkAppendedParsed',
	    value: function _checkAppendedParsed() {
	      //trigger handler right now
	      if (this.state === State.PARSED && this.pendingAppending === 0) {
	        var frag = this.fragCurrent,
	            stats = this.stats;
	        if (frag) {
	          this.fragPrevious = frag;
	          stats.tbuffered = performance.now();
	          this.fragLastKbps = Math.round(8 * stats.length / (stats.tbuffered - stats.tfirst));
	          this.hls.trigger(_events2.default.FRAG_BUFFERED, { stats: stats, frag: frag, id: 'main' });
	          var media = this.mediaBuffer ? this.mediaBuffer : this.media;
	          _logger.logger.log('main buffered : ' + this.timeRangesToString(media.buffered));
	          this.state = State.IDLE;
	        }
	        this.tick();
	      }
	    }
	  }, {
	    key: 'onError',
	    value: function onError(data) {
	      switch (data.details) {
	        case _errors.ErrorDetails.FRAG_LOAD_ERROR:
	        case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
	          if (!data.fatal) {
	            var loadError = this.fragLoadError;
	            if (loadError) {
	              loadError++;
	            } else {
	              loadError = 1;
	            }
	            if (loadError <= this.config.fragLoadingMaxRetry) {
	              this.fragLoadError = loadError;
	              // reset load counter to avoid frag loop loading error
	              data.frag.loadCounter = 0;
	              // exponential backoff capped to 64s
	              var delay = Math.min(Math.pow(2, loadError - 1) * this.config.fragLoadingRetryDelay, 64000);
	              _logger.logger.warn('mediaController: frag loading failed, retry in ' + delay + ' ms');
	              this.retryDate = performance.now() + delay;
	              // retry loading state
	              this.state = State.FRAG_LOADING_WAITING_RETRY;
	            } else {
	              _logger.logger.error('mediaController: ' + data.details + ' reaches max retry, redispatch as fatal ...');
	              // redispatch same error but with fatal set to true
	              data.fatal = true;
	              this.hls.trigger(_events2.default.ERROR, data);
	              this.state = State.ERROR;
	            }
	          }
	          break;
	        case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
	        case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
	        case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
	        case _errors.ErrorDetails.KEY_LOAD_ERROR:
	        case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
	          //  when in ERROR state, don't switch back to IDLE state in case a non-fatal error is received
	          if (this.state !== State.ERROR) {
	            // if fatal error, stop processing, otherwise move to IDLE to retry loading
	            this.state = data.fatal ? State.ERROR : State.IDLE;
	            _logger.logger.warn('mediaController: ' + data.details + ' while loading frag,switch to ' + this.state + ' state ...');
	          }
	          break;
	        case _errors.ErrorDetails.BUFFER_FULL_ERROR:
	          // only reduce max buf len if in appending state
	          if (this.state === State.PARSING || this.state === State.PARSED) {
	            // reduce max buffer length as it might be too high. we do this to avoid loop flushing ...
	            this.config.maxMaxBufferLength /= 2;
	            _logger.logger.warn('reduce max buffer length to ' + this.config.maxMaxBufferLength + 's and switch to IDLE state');
	            // increase fragment load Index to avoid frag loop loading error after buffer flush
	            this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	            this.state = State.IDLE;
	          }
	          break;
	        default:
	          break;
	      }
	    }
	  }, {
	    key: '_checkBuffer',
	    value: function _checkBuffer() {
	      var media = this.media;
	      // if ready state different from HAVE_NOTHING (numeric value 0), we are allowed to seek
	      if (media && media.readyState) {
	        var currentTime = media.currentTime,
	            buffered = media.buffered;
	        // adjust currentTime to start position on loaded metadata
	        if (!this.loadedmetadata && buffered.length) {
	          this.loadedmetadata = true;
	          // only adjust currentTime if startPosition not equal to 0
	          var startPosition = this.startPosition;
	          // if currentTime === 0 AND not matching with expected startPosition
	          if (!currentTime && currentTime !== startPosition) {
	            if (startPosition) {
	              _logger.logger.log('target start position:' + startPosition);
	              // at that stage, there should be only one buffered range, as we reach that code after first fragment has been
	              var bufferStart = buffered.start(0),
	                  bufferEnd = buffered.end(0);
	              // if startPosition not buffered, let's seek to buffered.start(0)
	              if (startPosition < bufferStart || startPosition > bufferEnd) {
	                startPosition = bufferStart;
	                _logger.logger.log('target start position not buffered, seek to buffered.start(0) ' + bufferStart);
	              }
	              _logger.logger.log('adjust currentTime from ' + currentTime + ' to ' + startPosition);
	              media.currentTime = startPosition;
	            }
	          }
	        } else {
	          var bufferInfo = _bufferHelper2.default.bufferInfo(media, currentTime, 0),
	              expectedPlaying = !(media.paused || // not playing when media is paused
	          media.ended || // not playing when media is ended
	          media.buffered.length === 0),
	              // not playing if nothing buffered
	          jumpThreshold = 0.4,
	              // tolerance needed as some browsers stalls playback before reaching buffered range end
	          playheadMoving = currentTime > media.playbackRate * this.lastCurrentTime;

	          if (this.stalled && playheadMoving) {
	            this.stalled = false;
	            _logger.logger.log('playback not stuck anymore @' + currentTime);
	          }
	          // check buffer upfront
	          // if less than jumpThreshold second is buffered, let's check in more details
	          if (expectedPlaying && bufferInfo.len <= jumpThreshold) {
	            if (playheadMoving) {
	              // playhead moving
	              jumpThreshold = 0;
	              this.seekHoleNudgeDuration = 0;
	            } else {
	              // playhead not moving AND media expected to play
	              if (!this.stalled) {
	                this.seekHoleNudgeDuration = 0;
	                _logger.logger.log('playback seems stuck @' + currentTime);
	                this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.BUFFER_STALLED_ERROR, fatal: false });
	                this.stalled = true;
	              } else {
	                this.seekHoleNudgeDuration += this.config.seekHoleNudgeDuration;
	              }
	            }
	            // if we are below threshold, try to jump to start of next buffer range if close
	            if (bufferInfo.len <= jumpThreshold) {
	              // no buffer available @ currentTime, check if next buffer is close (within a config.maxSeekHole second range)
	              var nextBufferStart = bufferInfo.nextStart,
	                  delta = nextBufferStart - currentTime;
	              if (nextBufferStart && delta < this.config.maxSeekHole && delta > 0) {
	                // next buffer is close ! adjust currentTime to nextBufferStart
	                // this will ensure effective video decoding
	                _logger.logger.log('adjust currentTime from ' + media.currentTime + ' to next buffered @ ' + nextBufferStart + ' + nudge ' + this.seekHoleNudgeDuration);
	                var hole = nextBufferStart + this.seekHoleNudgeDuration - media.currentTime;
	                media.currentTime = nextBufferStart + this.seekHoleNudgeDuration;
	                this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: false, hole: hole });
	              }
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'onFragLoadEmergencyAborted',
	    value: function onFragLoadEmergencyAborted() {
	      this.state = State.IDLE;
	      this.tick();
	    }
	  }, {
	    key: 'onBufferFlushed',
	    value: function onBufferFlushed() {
	      /* after successful buffer flushing, rebuild buffer Range array
	        loop through existing buffer range and check if
	        corresponding range is still buffered. only push to new array already buffered range
	      */
	      var newRange = [],
	          range,
	          i;
	      for (i = 0; i < this.bufferRange.length; i++) {
	        range = this.bufferRange[i];
	        if (this.isBuffered((range.start + range.end) / 2)) {
	          newRange.push(range);
	        }
	      }
	      this.bufferRange = newRange;

	      // handle end of immediate switching if needed
	      if (this.immediateSwitch) {
	        this.immediateLevelSwitchEnd();
	      }
	      // increase fragment load Index to avoid frag loop loading error after buffer flush
	      this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold;
	      // move to IDLE once flush complete. this should trigger new fragment loading
	      this.state = State.IDLE;
	      // reset reference to frag
	      this.fragPrevious = null;
	    }
	  }, {
	    key: 'swapAudioCodec',
	    value: function swapAudioCodec() {
	      this.audioCodecSwap = !this.audioCodecSwap;
	    }
	  }, {
	    key: 'timeRangesToString',
	    value: function timeRangesToString(r) {
	      var log = '',
	          len = r.length;
	      for (var i = 0; i < len; i++) {
	        log += '[' + r.start(i) + ',' + r.end(i) + ']';
	      }
	      return log;
	    }
	  }, {
	    key: 'state',
	    set: function set(nextState) {
	      if (this.state !== nextState) {
	        var previousState = this.state;
	        this._state = nextState;
	        _logger.logger.log('engine state transition from ' + previousState + ' to ' + nextState);
	        this.hls.trigger(_events2.default.STREAM_STATE_TRANSITION, { previousState: previousState, nextState: nextState });
	      }
	    },
	    get: function get() {
	      return this._state;
	    }
	  }, {
	    key: 'currentLevel',
	    get: function get() {
	      if (this.media) {
	        var range = this.getBufferRange(this.media.currentTime);
	        if (range) {
	          return range.frag.level;
	        }
	      }
	      return -1;
	    }
	  }, {
	    key: 'nextBufferRange',
	    get: function get() {
	      if (this.media) {
	        // first get end range of current fragment
	        return this.followingBufferRange(this.getBufferRange(this.media.currentTime));
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'nextLevel',
	    get: function get() {
	      var range = this.nextBufferRange;
	      if (range) {
	        return range.frag.level;
	      } else {
	        return -1;
	      }
	    }
	  }]);

	  return StreamController;
	}(_eventHandler2.default);

	exports.default = StreamController;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	var _errors = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Level Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var LevelController = function (_EventHandler) {
	  _inherits(LevelController, _EventHandler);

	  function LevelController(hls) {
	    _classCallCheck(this, LevelController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LevelController).call(this, hls, _events2.default.MANIFEST_LOADED, _events2.default.LEVEL_LOADED, _events2.default.ERROR));

	    _this.ontick = _this.tick.bind(_this);
	    _this._manualLevel = _this._autoLevelCapping = -1;
	    return _this;
	  }

	  _createClass(LevelController, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (this.timer) {
	        clearTimeout(this.timer);
	        this.timer = null;
	      }
	      this._manualLevel = -1;
	    }
	  }, {
	    key: 'startLoad',
	    value: function startLoad() {
	      this.canload = true;
	      // speed up live playlist refresh if timer exists
	      if (this.timer) {
	        this.tick();
	      }
	    }
	  }, {
	    key: 'stopLoad',
	    value: function stopLoad() {
	      this.canload = false;
	    }
	  }, {
	    key: 'onManifestLoaded',
	    value: function onManifestLoaded(data) {
	      var levels0 = [],
	          levels = [],
	          bitrateStart,
	          i,
	          bitrateSet = {},
	          videoCodecFound = false,
	          audioCodecFound = false,
	          hls = this.hls;

	      // regroup redundant level together
	      data.levels.forEach(function (level) {
	        if (level.videoCodec) {
	          videoCodecFound = true;
	        }
	        if (level.audioCodec || level.attrs && level.attrs.AUDIO) {
	          audioCodecFound = true;
	        }
	        var redundantLevelId = bitrateSet[level.bitrate];
	        if (redundantLevelId === undefined) {
	          bitrateSet[level.bitrate] = levels0.length;
	          level.url = [level.url];
	          level.urlId = 0;
	          levels0.push(level);
	        } else {
	          levels0[redundantLevelId].url.push(level.url);
	        }
	      });

	      // remove audio-only level if we also have levels with audio+video codecs signalled
	      if (videoCodecFound && audioCodecFound) {
	        levels0.forEach(function (level) {
	          if (level.videoCodec) {
	            levels.push(level);
	          }
	        });
	      } else {
	        levels = levels0;
	      }

	      // only keep level with supported audio/video codecs
	      levels = levels.filter(function (level) {
	        var checkSupportedAudio = function checkSupportedAudio(codec) {
	          return MediaSource.isTypeSupported('audio/mp4;codecs=' + codec);
	        };
	        var checkSupportedVideo = function checkSupportedVideo(codec) {
	          return MediaSource.isTypeSupported('video/mp4;codecs=' + codec);
	        };
	        var audioCodec = level.audioCodec,
	            videoCodec = level.videoCodec;

	        return (!audioCodec || checkSupportedAudio(audioCodec)) && (!videoCodec || checkSupportedVideo(videoCodec));
	      });

	      if (levels.length) {
	        // start bitrate is the first bitrate of the manifest
	        bitrateStart = levels[0].bitrate;
	        // sort level on bitrate
	        levels.sort(function (a, b) {
	          return a.bitrate - b.bitrate;
	        });
	        this._levels = levels;
	        // find index of first level in sorted levels
	        for (i = 0; i < levels.length; i++) {
	          if (levels[i].bitrate === bitrateStart) {
	            this._firstLevel = i;
	            _logger.logger.log('manifest loaded,' + levels.length + ' level(s) found, first bitrate:' + bitrateStart);
	            break;
	          }
	        }
	        hls.trigger(_events2.default.MANIFEST_PARSED, { levels: this._levels, firstLevel: this._firstLevel, stats: data.stats, audio: audioCodecFound, video: videoCodecFound });
	      } else {
	        hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.MEDIA_ERROR, details: _errors.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: hls.url, reason: 'no level with compatible codecs found in manifest' });
	      }
	      return;
	    }
	  }, {
	    key: 'setLevelInternal',
	    value: function setLevelInternal(newLevel) {
	      var levels = this._levels;
	      // check if level idx is valid
	      if (newLevel >= 0 && newLevel < levels.length) {
	        // stopping live reloading timer if any
	        if (this.timer) {
	          clearTimeout(this.timer);
	          this.timer = null;
	        }
	        this._level = newLevel;
	        _logger.logger.log('switching to level ' + newLevel);
	        this.hls.trigger(_events2.default.LEVEL_SWITCH, { level: newLevel });
	        var level = levels[newLevel];
	        // check if we need to load playlist for this level
	        if (level.details === undefined || level.details.live === true) {
	          // level not retrieved yet, or live playlist we need to (re)load it
	          _logger.logger.log('(re)loading playlist for level ' + newLevel);
	          var urlId = level.urlId;
	          this.hls.trigger(_events2.default.LEVEL_LOADING, { url: level.url[urlId], level: newLevel, id: urlId });
	        }
	      } else {
	        // invalid level id given, trigger error
	        this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.OTHER_ERROR, details: _errors.ErrorDetails.LEVEL_SWITCH_ERROR, level: newLevel, fatal: false, reason: 'invalid level idx' });
	      }
	    }
	  }, {
	    key: 'onError',
	    value: function onError(data) {
	      if (data.fatal) {
	        return;
	      }

	      var details = data.details,
	          hls = this.hls,
	          levelId = void 0,
	          level = void 0,
	          levelError = false;
	      // try to recover not fatal errors
	      switch (details) {
	        case _errors.ErrorDetails.FRAG_LOAD_ERROR:
	        case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
	        case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
	        case _errors.ErrorDetails.KEY_LOAD_ERROR:
	        case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
	          levelId = data.frag.level;
	          break;
	        case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
	        case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
	          levelId = data.level;
	          levelError = true;
	          break;
	        default:
	          break;
	      }
	      /* try to switch to a redundant stream if any available.
	       * if no redundant stream available, emergency switch down (if in auto mode and current level not 0)
	       * otherwise, we cannot recover this network error ...
	       * don't raise FRAG_LOAD_ERROR and FRAG_LOAD_TIMEOUT as fatal, as it is handled by mediaController
	       */
	      if (levelId !== undefined) {
	        level = this._levels[levelId];
	        if (level.urlId < level.url.length - 1) {
	          level.urlId++;
	          level.details = undefined;
	          _logger.logger.warn('level controller,' + details + ' for level ' + levelId + ': switching to redundant stream id ' + level.urlId);
	        } else {
	          // we could try to recover if in auto mode and current level not lowest level (0)
	          var recoverable = this._manualLevel === -1 && levelId;
	          if (recoverable) {
	            _logger.logger.warn('level controller,' + details + ': emergency switch-down for next fragment');
	            hls.abrController.nextAutoLevel = 0;
	          } else if (level && level.details && level.details.live) {
	            _logger.logger.warn('level controller,' + details + ' on live stream, discard');
	            if (levelError) {
	              // reset this._level so that another call to set level() will retrigger a frag load
	              this._level = undefined;
	            }
	            // FRAG_LOAD_ERROR and FRAG_LOAD_TIMEOUT are handled by mediaController
	          } else if (details !== _errors.ErrorDetails.FRAG_LOAD_ERROR && details !== _errors.ErrorDetails.FRAG_LOAD_TIMEOUT) {
	              _logger.logger.error('cannot recover ' + details + ' error');
	              this._level = undefined;
	              // stopping live reloading timer if any
	              if (this.timer) {
	                clearTimeout(this.timer);
	                this.timer = null;
	              }
	              // redispatch same error but with fatal set to true
	              data.fatal = true;
	              hls.trigger(_events2.default.ERROR, data);
	            }
	        }
	      }
	    }
	  }, {
	    key: 'onLevelLoaded',
	    value: function onLevelLoaded(data) {
	      // only process level loaded events matching with expected level
	      if (data.level === this._level) {
	        var newDetails = data.details;
	        // if current playlist is a live playlist, arm a timer to reload it
	        if (newDetails.live) {
	          var reloadInterval = 1000 * (newDetails.averagetargetduration ? newDetails.averagetargetduration : newDetails.targetduration),
	              curLevel = this._levels[data.level],
	              curDetails = curLevel.details;
	          if (curDetails && newDetails.endSN === curDetails.endSN) {
	            // follow HLS Spec, If the client reloads a Playlist file and finds that it has not
	            // changed then it MUST wait for a period of one-half the target
	            // duration before retrying.
	            reloadInterval /= 2;
	            _logger.logger.log('same live playlist, reload twice faster');
	          }
	          // decrement reloadInterval with level loading delay
	          reloadInterval -= performance.now() - data.stats.trequest;
	          // in any case, don't reload more than every second
	          reloadInterval = Math.max(1000, Math.round(reloadInterval));
	          _logger.logger.log('live playlist, reload in ' + reloadInterval + ' ms');
	          this.timer = setTimeout(this.ontick, reloadInterval);
	        } else {
	          this.timer = null;
	        }
	      }
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      var levelId = this._level;
	      if (levelId !== undefined && this.canload) {
	        var level = this._levels[levelId],
	            urlId = level.urlId;
	        this.hls.trigger(_events2.default.LEVEL_LOADING, { url: level.url[urlId], level: levelId, id: urlId });
	      }
	    }
	  }, {
	    key: 'levels',
	    get: function get() {
	      return this._levels;
	    }
	  }, {
	    key: 'level',
	    get: function get() {
	      return this._level;
	    },
	    set: function set(newLevel) {
	      var levels = this._levels;
	      if (levels && levels.length > newLevel) {
	        if (this._level !== newLevel || levels[newLevel].details === undefined) {
	          this.setLevelInternal(newLevel);
	        }
	      }
	    }
	  }, {
	    key: 'manualLevel',
	    get: function get() {
	      return this._manualLevel;
	    },
	    set: function set(newLevel) {
	      this._manualLevel = newLevel;
	      if (this._startLevel === undefined) {
	        this._startLevel = newLevel;
	      }
	      if (newLevel !== -1) {
	        this.level = newLevel;
	      }
	    }
	  }, {
	    key: 'firstLevel',
	    get: function get() {
	      return this._firstLevel;
	    },
	    set: function set(newLevel) {
	      this._firstLevel = newLevel;
	    }
	  }, {
	    key: 'startLevel',
	    get: function get() {
	      if (this._startLevel === undefined) {
	        return this._firstLevel;
	      } else {
	        return this._startLevel;
	      }
	    },
	    set: function set(newLevel) {
	      this._startLevel = newLevel;
	    }
	  }, {
	    key: 'nextLoadLevel',
	    get: function get() {
	      if (this._manualLevel !== -1) {
	        return this._manualLevel;
	      } else {
	        return this.hls.abrController.nextAutoLevel;
	      }
	    },
	    set: function set(nextLevel) {
	      this.level = nextLevel;
	      if (this._manualLevel === -1) {
	        this.hls.abrController.nextAutoLevel = nextLevel;
	      }
	    }
	  }]);

	  return LevelController;
	}(_eventHandler2.default);

	exports.default = LevelController;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _cea608Parser = __webpack_require__(55);

	var _cea608Parser2 = _interopRequireDefault(_cea608Parser);

	var _cues = __webpack_require__(56);

	var _cues2 = _interopRequireDefault(_cues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Timeline Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var TimelineController = function (_EventHandler) {
	  _inherits(TimelineController, _EventHandler);

	  function TimelineController(hls) {
	    _classCallCheck(this, TimelineController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineController).call(this, hls, _events2.default.MEDIA_ATTACHING, _events2.default.MEDIA_DETACHING, _events2.default.FRAG_PARSING_USERDATA, _events2.default.MANIFEST_LOADING, _events2.default.FRAG_LOADED, _events2.default.LEVEL_SWITCH));

	    _this.hls = hls;
	    _this.config = hls.config;
	    _this.enabled = true;

	    if (_this.config.enableCEA708Captions) {
	      var self = _this;

	      var channel1 = {
	        'newCue': function newCue(startTime, endTime, screen) {
	          if (!self.textTrack1) {
	            self.textTrack1 = self.createTextTrack('captions', 'Unknown CC1', 'en');
	            //            self.textTrack1.mode = 'showing';
	          }

	          _cues2.default.newCue(self.textTrack1, startTime, endTime, screen);
	        }
	      };

	      var channel2 = {
	        'newCue': function newCue(startTime, endTime, screen) {
	          if (!self.textTrack2) {
	            self.textTrack2 = self.createTextTrack('captions', 'Unknown CC2', 'es');
	          }

	          _cues2.default.newCue(self.textTrack2, startTime, endTime, screen);
	        }
	      };

	      _this.cea608Parser = new _cea608Parser2.default(0, channel1, channel2);
	    }
	    return _this;
	  }

	  _createClass(TimelineController, [{
	    key: 'clearCurrentCues',
	    value: function clearCurrentCues(track) {
	      if (track && track.cues) {
	        while (track.cues.length > 0) {
	          track.removeCue(track.cues[0]);
	        }
	      }
	    }
	  }, {
	    key: 'createTextTrack',
	    value: function createTextTrack(kind, label, lang) {
	      if (this.media) {
	        return this.media.addTextTrack(kind, label, lang);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onMediaAttaching',
	    value: function onMediaAttaching(data) {
	      this.media = data.media;
	    }
	  }, {
	    key: 'onMediaDetaching',
	    value: function onMediaDetaching() {}
	  }, {
	    key: 'onManifestLoading',
	    value: function onManifestLoading() {
	      this.lastPts = Number.NEGATIVE_INFINITY;
	    }
	  }, {
	    key: 'onLevelSwitch',
	    value: function onLevelSwitch() {
	      if (this.hls.currentLevel.closedCaptions === 'NONE') {
	        this.enabled = false;
	      } else {
	        this.enabled = true;
	      }
	    }
	  }, {
	    key: 'onFragLoaded',
	    value: function onFragLoaded(data) {
	      if (data.frag.type === 'main') {
	        var pts = data.frag.start; //Number.POSITIVE_INFINITY;
	        // if this is a frag for a previously loaded timerange, remove all captions
	        // TODO: consider just removing captions for the timerange
	        if (pts <= this.lastPts) {
	          this.clearCurrentCues(this.textTrack1);
	          this.clearCurrentCues(this.textTrack2);
	        }
	        this.lastPts = pts;
	      }
	    }
	  }, {
	    key: 'onFragParsingUserdata',
	    value: function onFragParsingUserdata(data) {
	      // push all of the CEA-708 messages into the interpreter
	      // immediately. It will create the proper timestamps based on our PTS value
	      if (this.enabled) {
	        for (var i = 0; i < data.samples.length; i++) {
	          var ccdatas = this.extractCea608Data(data.samples[i].bytes);
	          this.cea608Parser.addData(data.samples[i].pts, ccdatas);
	        }
	      }
	    }
	  }, {
	    key: 'extractCea608Data',
	    value: function extractCea608Data(byteArray) {
	      var count = byteArray[0] & 31;
	      var position = 2;
	      var tmpByte, ccbyte1, ccbyte2, ccValid, ccType;
	      var actualCCBytes = [];

	      for (var j = 0; j < count; j++) {
	        tmpByte = byteArray[position++];
	        ccbyte1 = 0x7F & byteArray[position++];
	        ccbyte2 = 0x7F & byteArray[position++];
	        ccValid = (4 & tmpByte) === 0 ? false : true;
	        ccType = 3 & tmpByte;

	        if (ccbyte1 === 0 && ccbyte2 === 0) {
	          continue;
	        }

	        if (ccValid) {
	          if (ccType === 0) // || ccType === 1
	            {
	              actualCCBytes.push(ccbyte1);
	              actualCCBytes.push(ccbyte2);
	            }
	        }
	      }
	      return actualCCBytes;
	    }
	  }]);

	  return TimelineController;
	}(_eventHandler2.default);

	exports.default = TimelineController;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 * This code was ported from the dash.js project at:
	 *   https://github.com/Dash-Industry-Forum/dash.js/blob/development/externals/cea608-parser.js
	 *   https://github.com/Dash-Industry-Forum/dash.js/commit/8269b26a761e0853bb21d78780ed945144ecdd4d#diff-71bc295a2d6b6b7093a1d3290d53a4b2
	 *
	 * The original copyright appears below:
	 *
	 * The copyright in this software is being made available under the BSD License,
	 * included below. This software may be subject to other third party and contributor
	 * rights, including patent rights, and no such rights are granted under this license.
	 *
	 * Copyright (c) 2015-2016, DASH Industry Forum.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification,
	 * are permitted provided that the following conditions are met:
	 *  1. Redistributions of source code must retain the above copyright notice, this
	 *  list of conditions and the following disclaimer.
	 *  * Redistributions in binary form must reproduce the above copyright notice,
	 *  this list of conditions and the following disclaimer in the documentation and/or
	 *  other materials provided with the distribution.
	 *  2. Neither the name of Dash Industry Forum nor the names of its
	 *  contributors may be used to endorse or promote products derived from this software
	 *  without specific prior written permission.
	 *
	 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
	 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
	 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
	 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
	 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 *  POSSIBILITY OF SUCH DAMAGE.
	 */
	/**
	 *  Exceptions from regular ASCII. CodePoints are mapped to UTF-16 codes
	 */

	var specialCea608CharsCodes = {
	    0x2a: 0xe1, // lowercase a, acute accent
	    0x5c: 0xe9, // lowercase e, acute accent
	    0x5e: 0xed, // lowercase i, acute accent
	    0x5f: 0xf3, // lowercase o, acute accent
	    0x60: 0xfa, // lowercase u, acute accent
	    0x7b: 0xe7, // lowercase c with cedilla
	    0x7c: 0xf7, // division symbol
	    0x7d: 0xd1, // uppercase N tilde
	    0x7e: 0xf1, // lowercase n tilde
	    0x7f: 0x2588, // Full block
	    // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
	    // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
	    // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
	    0x80: 0xae, // Registered symbol (R)
	    0x81: 0xb0, // degree sign
	    0x82: 0xbd, // 1/2 symbol
	    0x83: 0xbf, // Inverted (open) question mark
	    0x84: 0x2122, // Trademark symbol (TM)
	    0x85: 0xa2, // Cents symbol
	    0x86: 0xa3, // Pounds sterling
	    0x87: 0x266a, // Music 8'th note
	    0x88: 0xe0, // lowercase a, grave accent
	    0x89: 0x20, // transparent space (regular)
	    0x8a: 0xe8, // lowercase e, grave accent
	    0x8b: 0xe2, // lowercase a, circumflex accent
	    0x8c: 0xea, // lowercase e, circumflex accent
	    0x8d: 0xee, // lowercase i, circumflex accent
	    0x8e: 0xf4, // lowercase o, circumflex accent
	    0x8f: 0xfb, // lowercase u, circumflex accent
	    // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
	    // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
	    0x90: 0xc1, // capital letter A with acute
	    0x91: 0xc9, // capital letter E with acute
	    0x92: 0xd3, // capital letter O with acute
	    0x93: 0xda, // capital letter U with acute
	    0x94: 0xdc, // capital letter U with diaresis
	    0x95: 0xfc, // lowercase letter U with diaeresis
	    0x96: 0x2018, // opening single quote
	    0x97: 0xa1, // inverted exclamation mark
	    0x98: 0x2a, // asterisk
	    0x99: 0x2019, // closing single quote
	    0x9a: 0x2501, // box drawings heavy horizontal
	    0x9b: 0xa9, // copyright sign
	    0x9c: 0x2120, // Service mark
	    0x9d: 0x2022, // (round) bullet
	    0x9e: 0x201c, // Left double quotation mark
	    0x9f: 0x201d, // Right double quotation mark
	    0xa0: 0xc0, // uppercase A, grave accent
	    0xa1: 0xc2, // uppercase A, circumflex
	    0xa2: 0xc7, // uppercase C with cedilla
	    0xa3: 0xc8, // uppercase E, grave accent
	    0xa4: 0xca, // uppercase E, circumflex
	    0xa5: 0xcb, // capital letter E with diaresis
	    0xa6: 0xeb, // lowercase letter e with diaresis
	    0xa7: 0xce, // uppercase I, circumflex
	    0xa8: 0xcf, // uppercase I, with diaresis
	    0xa9: 0xef, // lowercase i, with diaresis
	    0xaa: 0xd4, // uppercase O, circumflex
	    0xab: 0xd9, // uppercase U, grave accent
	    0xac: 0xf9, // lowercase u, grave accent
	    0xad: 0xdb, // uppercase U, circumflex
	    0xae: 0xab, // left-pointing double angle quotation mark
	    0xaf: 0xbb, // right-pointing double angle quotation mark
	    // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
	    // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
	    0xb0: 0xc3, // Uppercase A, tilde
	    0xb1: 0xe3, // Lowercase a, tilde
	    0xb2: 0xcd, // Uppercase I, acute accent
	    0xb3: 0xcc, // Uppercase I, grave accent
	    0xb4: 0xec, // Lowercase i, grave accent
	    0xb5: 0xd2, // Uppercase O, grave accent
	    0xb6: 0xf2, // Lowercase o, grave accent
	    0xb7: 0xd5, // Uppercase O, tilde
	    0xb8: 0xf5, // Lowercase o, tilde
	    0xb9: 0x7b, // Open curly brace
	    0xba: 0x7d, // Closing curly brace
	    0xbb: 0x5c, // Backslash
	    0xbc: 0x5e, // Caret
	    0xbd: 0x5f, // Underscore
	    0xbe: 0x7c, // Pipe (vertical line)
	    0xbf: 0x223c, // Tilde operator
	    0xc0: 0xc4, // Uppercase A, umlaut
	    0xc1: 0xe4, // Lowercase A, umlaut
	    0xc2: 0xd6, // Uppercase O, umlaut
	    0xc3: 0xf6, // Lowercase o, umlaut
	    0xc4: 0xdf, // Esszett (sharp S)
	    0xc5: 0xa5, // Yen symbol
	    0xc6: 0xa4, // Generic currency sign
	    0xc7: 0x2503, // Box drawings heavy vertical
	    0xc8: 0xc5, // Uppercase A, ring
	    0xc9: 0xe5, // Lowercase A, ring
	    0xca: 0xd8, // Uppercase O, stroke
	    0xcb: 0xf8, // Lowercase o, strok
	    0xcc: 0x250f, // Box drawings heavy down and right
	    0xcd: 0x2513, // Box drawings heavy down and left
	    0xce: 0x2517, // Box drawings heavy up and right
	    0xcf: 0x251b // Box drawings heavy up and left
	};

	/**
	 * Utils
	 */
	var getCharForByte = function getCharForByte(byte) {
	    var charCode = byte;
	    if (specialCea608CharsCodes.hasOwnProperty(byte)) {
	        charCode = specialCea608CharsCodes[byte];
	    }
	    return String.fromCharCode(charCode);
	};

	var NR_ROWS = 15,
	    NR_COLS = 32;
	// Tables to look up row from PAC data
	var rowsLowCh1 = { 0x11: 1, 0x12: 3, 0x15: 5, 0x16: 7, 0x17: 9, 0x10: 11, 0x13: 12, 0x14: 14 };
	var rowsHighCh1 = { 0x11: 2, 0x12: 4, 0x15: 6, 0x16: 8, 0x17: 10, 0x13: 13, 0x14: 15 };
	var rowsLowCh2 = { 0x19: 1, 0x1A: 3, 0x1D: 5, 0x1E: 7, 0x1F: 9, 0x18: 11, 0x1B: 12, 0x1C: 14 };
	var rowsHighCh2 = { 0x19: 2, 0x1A: 4, 0x1D: 6, 0x1E: 8, 0x1F: 10, 0x1B: 13, 0x1C: 15 };

	var backgroundColors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'];

	/**
	 * Simple logger class to be able to write with time-stamps and filter on level.
	 */
	var logger = {
	    verboseFilter: { 'DATA': 3, 'DEBUG': 3, 'INFO': 2, 'WARNING': 2, 'TEXT': 1, 'ERROR': 0 },
	    time: null,
	    verboseLevel: 0, // Only write errors
	    setTime: function setTime(newTime) {
	        this.time = newTime;
	    },
	    log: function log(severity, msg) {
	        var minLevel = this.verboseFilter[severity];
	        if (this.verboseLevel >= minLevel) {
	            console.log(this.time + ' [' + severity + '] ' + msg);
	        }
	    }
	};

	var numArrayToHexArray = function numArrayToHexArray(numArray) {
	    var hexArray = [];
	    for (var j = 0; j < numArray.length; j++) {
	        hexArray.push(numArray[j].toString(16));
	    }
	    return hexArray;
	};

	var PenState = function () {
	    function PenState(foreground, underline, italics, background, flash) {
	        _classCallCheck(this, PenState);

	        this.foreground = foreground || 'white';
	        this.underline = underline || false;
	        this.italics = italics || false;
	        this.background = background || 'black';
	        this.flash = flash || false;
	    }

	    _createClass(PenState, [{
	        key: 'reset',
	        value: function reset() {
	            this.foreground = 'white';
	            this.underline = false;
	            this.italics = false;
	            this.background = 'black';
	            this.flash = false;
	        }
	    }, {
	        key: 'setStyles',
	        value: function setStyles(styles) {
	            var attribs = ['foreground', 'underline', 'italics', 'background', 'flash'];
	            for (var i = 0; i < attribs.length; i++) {
	                var style = attribs[i];
	                if (styles.hasOwnProperty(style)) {
	                    this[style] = styles[style];
	                }
	            }
	        }
	    }, {
	        key: 'isDefault',
	        value: function isDefault() {
	            return this.foreground === 'white' && !this.underline && !this.italics && this.background === 'black' && !this.flash;
	        }
	    }, {
	        key: 'equals',
	        value: function equals(other) {
	            return this.foreground === other.foreground && this.underline === other.underline && this.italics === other.italics && this.background === other.background && this.flash === other.flash;
	        }
	    }, {
	        key: 'copy',
	        value: function copy(newPenState) {
	            this.foreground = newPenState.foreground;
	            this.underline = newPenState.underline;
	            this.italics = newPenState.italics;
	            this.background = newPenState.background;
	            this.flash = newPenState.flash;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'color=' + this.foreground + ', underline=' + this.underline + ', italics=' + this.italics + ', background=' + this.background + ', flash=' + this.flash;
	        }
	    }]);

	    return PenState;
	}();

	/**
	 * Unicode character with styling and background.
	 * @constructor
	 */


	var StyledUnicodeChar = function () {
	    function StyledUnicodeChar(uchar, foreground, underline, italics, background, flash) {
	        _classCallCheck(this, StyledUnicodeChar);

	        this.uchar = uchar || ' '; // unicode character
	        this.penState = new PenState(foreground, underline, italics, background, flash);
	    }

	    _createClass(StyledUnicodeChar, [{
	        key: 'reset',
	        value: function reset() {
	            this.uchar = ' ';
	            this.penState.reset();
	        }
	    }, {
	        key: 'setChar',
	        value: function setChar(uchar, newPenState) {
	            this.uchar = uchar;
	            this.penState.copy(newPenState);
	        }
	    }, {
	        key: 'setPenState',
	        value: function setPenState(newPenState) {
	            this.penState.copy(newPenState);
	        }
	    }, {
	        key: 'equals',
	        value: function equals(other) {
	            return this.uchar === other.uchar && this.penState.equals(other.penState);
	        }
	    }, {
	        key: 'copy',
	        value: function copy(newChar) {
	            this.uchar = newChar.uchar;
	            this.penState.copy(newChar.penState);
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return this.uchar === ' ' && this.penState.isDefault();
	        }
	    }]);

	    return StyledUnicodeChar;
	}();

	/**
	 * CEA-608 row consisting of NR_COLS instances of StyledUnicodeChar.
	 * @constructor
	 */


	var Row = function () {
	    function Row() {
	        _classCallCheck(this, Row);

	        this.chars = [];
	        for (var i = 0; i < NR_COLS; i++) {
	            this.chars.push(new StyledUnicodeChar());
	        }
	        this.pos = 0;
	        this.currPenState = new PenState();
	    }

	    _createClass(Row, [{
	        key: 'equals',
	        value: function equals(other) {
	            var equal = true;
	            for (var i = 0; i < NR_COLS; i++) {
	                if (!this.chars[i].equals(other.chars[i])) {
	                    equal = false;
	                    break;
	                }
	            }
	            return equal;
	        }
	    }, {
	        key: 'copy',
	        value: function copy(other) {
	            for (var i = 0; i < NR_COLS; i++) {
	                this.chars[i].copy(other.chars[i]);
	            }
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            var empty = true;
	            for (var i = 0; i < NR_COLS; i++) {
	                if (!this.chars[i].isEmpty()) {
	                    empty = false;
	                    break;
	                }
	            }
	            return empty;
	        }

	        /**
	         *  Set the cursor to a valid column.
	         */

	    }, {
	        key: 'setCursor',
	        value: function setCursor(absPos) {
	            if (this.pos !== absPos) {
	                this.pos = absPos;
	            }
	            if (this.pos < 0) {
	                logger.log('ERROR', 'Negative cursor position ' + this.pos);
	                this.pos = 0;
	            } else if (this.pos > NR_COLS) {
	                logger.log('ERROR', 'Too large cursor position ' + this.pos);
	                this.pos = NR_COLS;
	            }
	        }

	        /**
	         * Move the cursor relative to current position.
	         */

	    }, {
	        key: 'moveCursor',
	        value: function moveCursor(relPos) {
	            var newPos = this.pos + relPos;
	            if (relPos > 1) {
	                for (var i = this.pos + 1; i < newPos + 1; i++) {
	                    this.chars[i].setPenState(this.currPenState);
	                }
	            }
	            this.setCursor(newPos);
	        }

	        /**
	         * Backspace, move one step back and clear character.
	         */

	    }, {
	        key: 'backSpace',
	        value: function backSpace() {
	            this.moveCursor(-1);
	            this.chars[this.pos].setChar(' ', this.currPenState);
	        }
	    }, {
	        key: 'insertChar',
	        value: function insertChar(byte) {
	            if (byte >= 0x90) {
	                //Extended char
	                this.backSpace();
	            }
	            var char = getCharForByte(byte);
	            if (this.pos >= NR_COLS) {
	                logger.log('ERROR', 'Cannot insert ' + byte.toString(16) + ' (' + char + ') at position ' + this.pos + '. Skipping it!');
	                return;
	            }
	            this.chars[this.pos].setChar(char, this.currPenState);
	            this.moveCursor(1);
	        }
	    }, {
	        key: 'clearFromPos',
	        value: function clearFromPos(startPos) {
	            var i;
	            for (i = startPos; i < NR_COLS; i++) {
	                this.chars[i].reset();
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.clearFromPos(0);
	            this.pos = 0;
	            this.currPenState.reset();
	        }
	    }, {
	        key: 'clearToEndOfRow',
	        value: function clearToEndOfRow() {
	            this.clearFromPos(this.pos);
	        }
	    }, {
	        key: 'getTextString',
	        value: function getTextString() {
	            var chars = [];
	            var empty = true;
	            for (var i = 0; i < NR_COLS; i++) {
	                var char = this.chars[i].uchar;
	                if (char !== ' ') {
	                    empty = false;
	                }
	                chars.push(char);
	            }
	            if (empty) {
	                return '';
	            } else {
	                return chars.join('');
	            }
	        }
	    }, {
	        key: 'setPenStyles',
	        value: function setPenStyles(styles) {
	            this.currPenState.setStyles(styles);
	            var currChar = this.chars[this.pos];
	            currChar.setPenState(this.currPenState);
	        }
	    }]);

	    return Row;
	}();

	/**
	 * Keep a CEA-608 screen of 32x15 styled characters
	 * @constructor
	*/


	var CaptionScreen = function () {
	    function CaptionScreen() {
	        _classCallCheck(this, CaptionScreen);

	        this.rows = [];
	        for (var i = 0; i < NR_ROWS; i++) {
	            this.rows.push(new Row()); // Note that we use zero-based numbering (0-14)
	        }
	        this.currRow = NR_ROWS - 1;
	        this.nrRollUpRows = null;
	        this.reset();
	    }

	    _createClass(CaptionScreen, [{
	        key: 'reset',
	        value: function reset() {
	            for (var i = 0; i < NR_ROWS; i++) {
	                this.rows[i].clear();
	            }
	            this.currRow = NR_ROWS - 1;
	        }
	    }, {
	        key: 'equals',
	        value: function equals(other) {
	            var equal = true;
	            for (var i = 0; i < NR_ROWS; i++) {
	                if (!this.rows[i].equals(other.rows[i])) {
	                    equal = false;
	                    break;
	                }
	            }
	            return equal;
	        }
	    }, {
	        key: 'copy',
	        value: function copy(other) {
	            for (var i = 0; i < NR_ROWS; i++) {
	                this.rows[i].copy(other.rows[i]);
	            }
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            var empty = true;
	            for (var i = 0; i < NR_ROWS; i++) {
	                if (!this.rows[i].isEmpty()) {
	                    empty = false;
	                    break;
	                }
	            }
	            return empty;
	        }
	    }, {
	        key: 'backSpace',
	        value: function backSpace() {
	            var row = this.rows[this.currRow];
	            row.backSpace();
	        }
	    }, {
	        key: 'clearToEndOfRow',
	        value: function clearToEndOfRow() {
	            var row = this.rows[this.currRow];
	            row.clearToEndOfRow();
	        }

	        /**
	         * Insert a character (without styling) in the current row.
	         */

	    }, {
	        key: 'insertChar',
	        value: function insertChar(char) {
	            var row = this.rows[this.currRow];
	            row.insertChar(char);
	        }
	    }, {
	        key: 'setPen',
	        value: function setPen(styles) {
	            var row = this.rows[this.currRow];
	            row.setPenStyles(styles);
	        }
	    }, {
	        key: 'moveCursor',
	        value: function moveCursor(relPos) {
	            var row = this.rows[this.currRow];
	            row.moveCursor(relPos);
	        }
	    }, {
	        key: 'setCursor',
	        value: function setCursor(absPos) {
	            logger.log('INFO', 'setCursor: ' + absPos);
	            var row = this.rows[this.currRow];
	            row.setCursor(absPos);
	        }
	    }, {
	        key: 'setPAC',
	        value: function setPAC(pacData) {
	            logger.log('INFO', 'pacData = ' + JSON.stringify(pacData));
	            var newRow = pacData.row - 1;
	            if (this.nrRollUpRows && newRow < this.nrRollUpRows - 1) {
	                newRow = this.nrRollUpRows - 1;
	            }
	            this.currRow = newRow;
	            var row = this.rows[this.currRow];
	            if (pacData.indent !== null) {
	                var indent = pacData.indent;
	                var prevPos = Math.max(indent - 1, 0);
	                row.setCursor(pacData.indent);
	                pacData.color = row.chars[prevPos].penState.foreground;
	            }
	            var styles = { foreground: pacData.color, underline: pacData.underline, italics: pacData.italics, background: 'black', flash: false };
	            this.setPen(styles);
	        }

	        /**
	         * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
	         */

	    }, {
	        key: 'setBkgData',
	        value: function setBkgData(bkgData) {

	            logger.log('INFO', 'bkgData = ' + JSON.stringify(bkgData));
	            this.backSpace();
	            this.setPen(bkgData);
	            this.insertChar(0x20); //Space
	        }
	    }, {
	        key: 'setRollUpRows',
	        value: function setRollUpRows(nrRows) {
	            this.nrRollUpRows = nrRows;
	        }
	    }, {
	        key: 'rollUp',
	        value: function rollUp() {
	            if (this.nrRollUpRows === null) {
	                logger.log('DEBUG', 'roll_up but nrRollUpRows not set yet');
	                return; //Not properly setup
	            }
	            logger.log('TEXT', this.getDisplayText());
	            var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
	            var topRow = this.rows.splice(topRowIndex, 1)[0];
	            topRow.clear();
	            this.rows.splice(this.currRow, 0, topRow);
	            logger.log('INFO', 'Rolling up');
	            //logger.log('TEXT', this.get_display_text())
	        }

	        /**
	         * Get all non-empty rows with as unicode text.
	         */

	    }, {
	        key: 'getDisplayText',
	        value: function getDisplayText(asOneRow) {
	            asOneRow = asOneRow || false;
	            var displayText = [];
	            var text = '';
	            var rowNr = -1;
	            for (var i = 0; i < NR_ROWS; i++) {
	                var rowText = this.rows[i].getTextString();
	                if (rowText) {
	                    rowNr = i + 1;
	                    if (asOneRow) {
	                        displayText.push('Row ' + rowNr + ': \'' + rowText + '\'');
	                    } else {
	                        displayText.push(rowText.trim());
	                    }
	                }
	            }
	            if (displayText.length > 0) {
	                if (asOneRow) {
	                    text = '[' + displayText.join(' | ') + ']';
	                } else {
	                    text = displayText.join('\n');
	                }
	            }
	            return text;
	        }
	    }, {
	        key: 'getTextAndFormat',
	        value: function getTextAndFormat() {
	            return this.rows;
	        }
	    }]);

	    return CaptionScreen;
	}();

	//var modes = ['MODE_ROLL-UP', 'MODE_POP-ON', 'MODE_PAINT-ON', 'MODE_TEXT'];

	var Cea608Channel = function () {
	    function Cea608Channel(channelNumber, outputFilter) {
	        _classCallCheck(this, Cea608Channel);

	        this.chNr = channelNumber;
	        this.outputFilter = outputFilter;
	        this.mode = null;
	        this.verbose = 0;
	        this.displayedMemory = new CaptionScreen();
	        this.nonDisplayedMemory = new CaptionScreen();
	        this.lastOutputScreen = new CaptionScreen();
	        this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
	        this.writeScreen = this.displayedMemory;
	        this.mode = null;
	        this.cueStartTime = null; // Keeps track of where a cue started.
	    }

	    _createClass(Cea608Channel, [{
	        key: 'reset',
	        value: function reset() {
	            this.mode = null;
	            this.displayedMemory.reset();
	            this.nonDisplayedMemory.reset();
	            this.lastOutputScreen.reset();
	            this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
	            this.writeScreen = this.displayedMemory;
	            this.mode = null;
	            this.cueStartTime = null;
	            this.lastCueEndTime = null;
	        }
	    }, {
	        key: 'getHandler',
	        value: function getHandler() {
	            return this.outputFilter;
	        }
	    }, {
	        key: 'setHandler',
	        value: function setHandler(newHandler) {
	            this.outputFilter = newHandler;
	        }
	    }, {
	        key: 'setPAC',
	        value: function setPAC(pacData) {
	            this.writeScreen.setPAC(pacData);
	        }
	    }, {
	        key: 'setBkgData',
	        value: function setBkgData(bkgData) {
	            this.writeScreen.setBkgData(bkgData);
	        }
	    }, {
	        key: 'setMode',
	        value: function setMode(newMode) {
	            if (newMode === this.mode) {
	                return;
	            }
	            this.mode = newMode;
	            logger.log('INFO', 'MODE=' + newMode);
	            if (this.mode === 'MODE_POP-ON') {
	                this.writeScreen = this.nonDisplayedMemory;
	            } else {
	                this.writeScreen = this.displayedMemory;
	                this.writeScreen.reset();
	            }
	            if (this.mode !== 'MODE_ROLL-UP') {
	                this.displayedMemory.nrRollUpRows = null;
	                this.nonDisplayedMemory.nrRollUpRows = null;
	            }
	            this.mode = newMode;
	        }
	    }, {
	        key: 'insertChars',
	        value: function insertChars(chars) {
	            for (var i = 0; i < chars.length; i++) {
	                this.writeScreen.insertChar(chars[i]);
	            }
	            var screen = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
	            logger.log('INFO', screen + ': ' + this.writeScreen.getDisplayText(true));
	            if (this.mode === 'MODE_PAINT-ON' || this.mode === 'MODE_ROLL-UP') {
	                logger.log('TEXT', 'DISPLAYED: ' + this.displayedMemory.getDisplayText(true));
	                this.outputDataUpdate();
	            }
	        }
	    }, {
	        key: 'ccRCL',
	        value: function ccRCL() {
	            // Resume Caption Loading (switch mode to Pop On)
	            logger.log('INFO', 'RCL - Resume Caption Loading');
	            this.setMode('MODE_POP-ON');
	        }
	    }, {
	        key: 'ccBS',
	        value: function ccBS() {
	            // BackSpace
	            logger.log('INFO', 'BS - BackSpace');
	            if (this.mode === 'MODE_TEXT') {
	                return;
	            }
	            this.writeScreen.backSpace();
	            if (this.writeScreen === this.displayedMemory) {
	                this.outputDataUpdate();
	            }
	        }
	    }, {
	        key: 'ccAOF',
	        value: function ccAOF() {
	            // Reserved (formerly Alarm Off)
	            return;
	        }
	    }, {
	        key: 'ccAON',
	        value: function ccAON() {
	            // Reserved (formerly Alarm On)
	            return;
	        }
	    }, {
	        key: 'ccDER',
	        value: function ccDER() {
	            // Delete to End of Row
	            logger.log('INFO', 'DER- Delete to End of Row');
	            this.writeScreen.clearToEndOfRow();
	            this.outputDataUpdate();
	        }
	    }, {
	        key: 'ccRU',
	        value: function ccRU(nrRows) {
	            //Roll-Up Captions-2,3,or 4 Rows
	            logger.log('INFO', 'RU(' + nrRows + ') - Roll Up');
	            this.writeScreen = this.displayedMemory;
	            this.setMode('MODE_ROLL-UP');
	            this.writeScreen.setRollUpRows(nrRows);
	        }
	    }, {
	        key: 'ccFON',
	        value: function ccFON() {
	            //Flash On
	            logger.log('INFO', 'FON - Flash On');
	            this.writeScreen.setPen({ flash: true });
	        }
	    }, {
	        key: 'ccRDC',
	        value: function ccRDC() {
	            // Resume Direct Captioning (switch mode to PaintOn)
	            logger.log('INFO', 'RDC - Resume Direct Captioning');
	            this.setMode('MODE_PAINT-ON');
	        }
	    }, {
	        key: 'ccTR',
	        value: function ccTR() {
	            // Text Restart in text mode (not supported, however)
	            logger.log('INFO', 'TR');
	            this.setMode('MODE_TEXT');
	        }
	    }, {
	        key: 'ccRTD',
	        value: function ccRTD() {
	            // Resume Text Display in Text mode (not supported, however)
	            logger.log('INFO', 'RTD');
	            this.setMode('MODE_TEXT');
	        }
	    }, {
	        key: 'ccEDM',
	        value: function ccEDM() {
	            // Erase Displayed Memory
	            logger.log('INFO', 'EDM - Erase Displayed Memory');
	            this.displayedMemory.reset();
	            this.outputDataUpdate();
	        }
	    }, {
	        key: 'ccCR',
	        value: function ccCR() {
	            // Carriage Return
	            logger.log('CR - Carriage Return');
	            this.writeScreen.rollUp();
	            this.outputDataUpdate();
	        }
	    }, {
	        key: 'ccENM',
	        value: function ccENM() {
	            //Erase Non-Displayed Memory
	            logger.log('INFO', 'ENM - Erase Non-displayed Memory');
	            this.nonDisplayedMemory.reset();
	        }
	    }, {
	        key: 'ccEOC',
	        value: function ccEOC() {
	            //End of Caption (Flip Memories)
	            logger.log('INFO', 'EOC - End Of Caption');
	            if (this.mode === 'MODE_POP-ON') {
	                var tmp = this.displayedMemory;
	                this.displayedMemory = this.nonDisplayedMemory;
	                this.nonDisplayedMemory = tmp;
	                this.writeScreen = this.nonDisplayedMemory;
	                logger.log('TEXT', 'DISP: ' + this.displayedMemory.getDisplayText());
	            }
	            this.outputDataUpdate();
	        }
	    }, {
	        key: 'ccTO',
	        value: function ccTO(nrCols) {
	            // Tab Offset 1,2, or 3 columns
	            logger.log('INFO', 'TO(' + nrCols + ') - Tab Offset');
	            this.writeScreen.moveCursor(nrCols);
	        }
	    }, {
	        key: 'ccMIDROW',
	        value: function ccMIDROW(secondByte) {
	            // Parse MIDROW command
	            var styles = { flash: false };
	            styles.underline = secondByte % 2 === 1;
	            styles.italics = secondByte >= 0x2e;
	            if (!styles.italics) {
	                var colorIndex = Math.floor(secondByte / 2) - 0x10;
	                var colors = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'];
	                styles.foreground = colors[colorIndex];
	            } else {
	                styles.foreground = 'white';
	            }
	            logger.log('INFO', 'MIDROW: ' + JSON.stringify(styles));
	            this.writeScreen.setPen(styles);
	        }
	    }, {
	        key: 'outputDataUpdate',
	        value: function outputDataUpdate() {
	            var t = logger.time;
	            if (t === null) {
	                return;
	            }
	            if (this.outputFilter) {
	                if (this.outputFilter.updateData) {
	                    this.outputFilter.updateData(t, this.displayedMemory);
	                }
	                if (this.cueStartTime === null && !this.displayedMemory.isEmpty()) {
	                    // Start of a new cue
	                    this.cueStartTime = t;
	                } else {
	                    if (!this.displayedMemory.equals(this.lastOutputScreen)) {
	                        if (this.outputFilter.newCue) {
	                            this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen);
	                        }
	                        this.cueStartTime = this.displayedMemory.isEmpty() ? null : t;
	                    }
	                }
	                this.lastOutputScreen.copy(this.displayedMemory);
	            }
	        }
	    }, {
	        key: 'cueSplitAtTime',
	        value: function cueSplitAtTime(t) {
	            if (this.outputFilter) {
	                if (!this.displayedMemory.isEmpty()) {
	                    if (this.outputFilter.newCue) {
	                        this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory);
	                    }
	                    this.cueStartTime = t;
	                }
	            }
	        }
	    }]);

	    return Cea608Channel;
	}();

	var Cea608Parser = function () {
	    function Cea608Parser(field, out1, out2) {
	        _classCallCheck(this, Cea608Parser);

	        this.field = field || 1;
	        this.outputs = [out1, out2];
	        this.channels = [new Cea608Channel(1, out1), new Cea608Channel(2, out2)];
	        this.currChNr = -1; // Will be 1 or 2
	        this.lastCmdA = null; // First byte of last command
	        this.lastCmdB = null; // Second byte of last command
	        this.bufferedData = [];
	        this.startTime = null;
	        this.lastTime = null;
	        this.dataCounters = { 'padding': 0, 'char': 0, 'cmd': 0, 'other': 0 };
	    }

	    _createClass(Cea608Parser, [{
	        key: 'getHandler',
	        value: function getHandler(index) {
	            return this.channels[index].getHandler();
	        }
	    }, {
	        key: 'setHandler',
	        value: function setHandler(index, newHandler) {
	            this.channels[index].setHandler(newHandler);
	        }

	        /**
	         * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
	         */

	    }, {
	        key: 'addData',
	        value: function addData(t, byteList) {
	            var cmdFound,
	                a,
	                b,
	                charsFound = false;

	            this.lastTime = t;
	            logger.setTime(t);

	            for (var i = 0; i < byteList.length; i += 2) {
	                a = byteList[i] & 0x7f;
	                b = byteList[i + 1] & 0x7f;
	                if (a === 0 && b === 0) {
	                    this.dataCounters.padding += 2;
	                    continue;
	                } else {
	                    logger.log('DATA', '[' + numArrayToHexArray([byteList[i], byteList[i + 1]]) + '] -> (' + numArrayToHexArray([a, b]) + ')');
	                }
	                cmdFound = this.parseCmd(a, b);
	                if (!cmdFound) {
	                    cmdFound = this.parseMidrow(a, b);
	                }
	                if (!cmdFound) {
	                    cmdFound = this.parsePAC(a, b);
	                }
	                if (!cmdFound) {
	                    cmdFound = this.parseBackgroundAttributes(a, b);
	                }
	                if (!cmdFound) {
	                    charsFound = this.parseChars(a, b);
	                    if (charsFound) {
	                        if (this.currChNr && this.currChNr >= 0) {
	                            var channel = this.channels[this.currChNr - 1];
	                            channel.insertChars(charsFound);
	                        } else {
	                            logger.log('WARNING', 'No channel found yet. TEXT-MODE?');
	                        }
	                    }
	                }
	                if (cmdFound) {
	                    this.dataCounters.cmd += 2;
	                } else if (charsFound) {
	                    this.dataCounters.char += 2;
	                } else {
	                    this.dataCounters.other += 2;
	                    logger.log('WARNING', 'Couldn\'t parse cleaned data ' + numArrayToHexArray([a, b]) + ' orig: ' + numArrayToHexArray([byteList[i], byteList[i + 1]]));
	                }
	            }
	        }

	        /**
	         * Parse Command.
	         * @returns {Boolean} Tells if a command was found
	         */

	    }, {
	        key: 'parseCmd',
	        value: function parseCmd(a, b) {
	            var chNr = null;

	            var cond1 = (a === 0x14 || a === 0x1C) && 0x20 <= b && b <= 0x2F;
	            var cond2 = (a === 0x17 || a === 0x1F) && 0x21 <= b && b <= 0x23;
	            if (!(cond1 || cond2)) {
	                return false;
	            }

	            if (a === this.lastCmdA && b === this.lastCmdB) {
	                this.lastCmdA = null;
	                this.lastCmdB = null; // Repeated commands are dropped (once)
	                logger.log('DEBUG', 'Repeated command (' + numArrayToHexArray([a, b]) + ') is dropped');
	                return true;
	            }

	            if (a === 0x14 || a === 0x17) {
	                chNr = 1;
	            } else {
	                chNr = 2; // (a === 0x1C || a=== 0x1f)
	            }

	            var channel = this.channels[chNr - 1];

	            if (a === 0x14 || a === 0x1C) {
	                if (b === 0x20) {
	                    channel.ccRCL();
	                } else if (b === 0x21) {
	                    channel.ccBS();
	                } else if (b === 0x22) {
	                    channel.ccAOF();
	                } else if (b === 0x23) {
	                    channel.ccAON();
	                } else if (b === 0x24) {
	                    channel.ccDER();
	                } else if (b === 0x25) {
	                    channel.ccRU(2);
	                } else if (b === 0x26) {
	                    channel.ccRU(3);
	                } else if (b === 0x27) {
	                    channel.ccRU(4);
	                } else if (b === 0x28) {
	                    channel.ccFON();
	                } else if (b === 0x29) {
	                    channel.ccRDC();
	                } else if (b === 0x2A) {
	                    channel.ccTR();
	                } else if (b === 0x2B) {
	                    channel.ccRTD();
	                } else if (b === 0x2C) {
	                    channel.ccEDM();
	                } else if (b === 0x2D) {
	                    channel.ccCR();
	                } else if (b === 0x2E) {
	                    channel.ccENM();
	                } else if (b === 0x2F) {
	                    channel.ccEOC();
	                }
	            } else {
	                //a == 0x17 || a == 0x1F
	                channel.ccTO(b - 0x20);
	            }
	            this.lastCmdA = a;
	            this.lastCmdB = b;
	            this.currChNr = chNr;
	            return true;
	        }

	        /**
	         * Parse midrow styling command
	         * @returns {Boolean}
	         */

	    }, {
	        key: 'parseMidrow',
	        value: function parseMidrow(a, b) {
	            var chNr = null;

	            if ((a === 0x11 || a === 0x19) && 0x20 <= b && b <= 0x2f) {
	                if (a === 0x11) {
	                    chNr = 1;
	                } else {
	                    chNr = 2;
	                }
	                if (chNr !== this.currChNr) {
	                    logger.log('ERROR', 'Mismatch channel in midrow parsing');
	                    return false;
	                }
	                var channel = this.channels[chNr - 1];
	                channel.ccMIDROW(b);
	                logger.log('DEBUG', 'MIDROW (' + numArrayToHexArray([a, b]) + ')');
	                return true;
	            }
	            return false;
	        }
	        /**
	         * Parse Preable Access Codes (Table 53).
	         * @returns {Boolean} Tells if PAC found
	         */

	    }, {
	        key: 'parsePAC',
	        value: function parsePAC(a, b) {

	            var chNr = null;
	            var row = null;

	            var case1 = (0x11 <= a && a <= 0x17 || 0x19 <= a && a <= 0x1F) && 0x40 <= b && b <= 0x7F;
	            var case2 = (a === 0x10 || a === 0x18) && 0x40 <= b && b <= 0x5F;
	            if (!(case1 || case2)) {
	                return false;
	            }

	            if (a === this.lastCmdA && b === this.lastCmdB) {
	                this.lastCmdA = null;
	                this.lastCmdB = null;
	                return true; // Repeated commands are dropped (once)
	            }

	            chNr = a <= 0x17 ? 1 : 2;

	            if (0x40 <= b && b <= 0x5F) {
	                row = chNr === 1 ? rowsLowCh1[a] : rowsLowCh2[a];
	            } else {
	                // 0x60 <= b <= 0x7F
	                row = chNr === 1 ? rowsHighCh1[a] : rowsHighCh2[a];
	            }
	            var pacData = this.interpretPAC(row, b);
	            var channel = this.channels[chNr - 1];
	            channel.setPAC(pacData);
	            this.lastCmdA = a;
	            this.lastCmdB = b;
	            this.currChNr = chNr;
	            return true;
	        }

	        /**
	         * Interpret the second byte of the pac, and return the information.
	         * @returns {Object} pacData with style parameters.
	         */

	    }, {
	        key: 'interpretPAC',
	        value: function interpretPAC(row, byte) {
	            var pacIndex = byte;
	            var pacData = { color: null, italics: false, indent: null, underline: false, row: row };

	            if (byte > 0x5F) {
	                pacIndex = byte - 0x60;
	            } else {
	                pacIndex = byte - 0x40;
	            }
	            pacData.underline = (pacIndex & 1) === 1;
	            if (pacIndex <= 0xd) {
	                pacData.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][Math.floor(pacIndex / 2)];
	            } else if (pacIndex <= 0xf) {
	                pacData.italics = true;
	                pacData.color = 'white';
	            } else {
	                pacData.indent = Math.floor((pacIndex - 0x10) / 2) * 4;
	            }
	            return pacData; // Note that row has zero offset. The spec uses 1.
	        }

	        /**
	         * Parse characters.
	         * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
	         */

	    }, {
	        key: 'parseChars',
	        value: function parseChars(a, b) {

	            var channelNr = null,
	                charCodes = null,
	                charCode1 = null;

	            if (a >= 0x19) {
	                channelNr = 2;
	                charCode1 = a - 8;
	            } else {
	                channelNr = 1;
	                charCode1 = a;
	            }
	            if (0x11 <= charCode1 && charCode1 <= 0x13) {
	                // Special character
	                var oneCode = b;
	                if (charCode1 === 0x11) {
	                    oneCode = b + 0x50;
	                } else if (charCode1 === 0x12) {
	                    oneCode = b + 0x70;
	                } else {
	                    oneCode = b + 0x90;
	                }
	                logger.log('INFO', 'Special char \'' + getCharForByte(oneCode) + '\' in channel ' + channelNr);
	                charCodes = [oneCode];
	            } else if (0x20 <= a && a <= 0x7f) {
	                charCodes = b === 0 ? [a] : [a, b];
	            }
	            if (charCodes) {
	                var hexCodes = numArrayToHexArray(charCodes);
	                logger.log('DEBUG', 'Char codes =  ' + hexCodes.join(','));
	                this.lastCmdA = null;
	                this.lastCmdB = null;
	            }
	            return charCodes;
	        }

	        /**
	        * Parse extended background attributes as well as new foreground color black.
	        * @returns{Boolean} Tells if background attributes are found
	        */

	    }, {
	        key: 'parseBackgroundAttributes',
	        value: function parseBackgroundAttributes(a, b) {
	            var bkgData, index, chNr, channel;

	            var case1 = (a === 0x10 || a === 0x18) && 0x20 <= b && b <= 0x2f;
	            var case2 = (a === 0x17 || a === 0x1f) && 0x2d <= b && b <= 0x2f;
	            if (!(case1 || case2)) {
	                return false;
	            }
	            bkgData = {};
	            if (a === 0x10 || a === 0x18) {
	                index = Math.floor((b - 0x20) / 2);
	                bkgData.background = backgroundColors[index];
	                if (b % 2 === 1) {
	                    bkgData.background = bkgData.background + '_semi';
	                }
	            } else if (b === 0x2d) {
	                bkgData.background = 'transparent';
	            } else {
	                bkgData.foreground = 'black';
	                if (b === 0x2f) {
	                    bkgData.underline = true;
	                }
	            }
	            chNr = a < 0x18 ? 1 : 2;
	            channel = this.channels[chNr - 1];
	            channel.setBkgData(bkgData);
	            this.lastCmdA = null;
	            this.lastCmdB = null;
	            return true;
	        }

	        /**
	         * Reset state of parser and its channels.
	         */

	    }, {
	        key: 'reset',
	        value: function reset() {
	            for (var i = 0; i < this.channels.length; i++) {
	                if (this.channels[i]) {
	                    this.channels[i].reset();
	                }
	            }
	            this.lastCmdA = null;
	            this.lastCmdB = null;
	        }

	        /**
	         * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
	         */

	    }, {
	        key: 'cueSplitAtTime',
	        value: function cueSplitAtTime(t) {
	            for (var i = 0; i < this.channels.length; i++) {
	                if (this.channels[i]) {
	                    this.channels[i].cueSplitAtTime(t);
	                }
	            }
	        }
	    }]);

	    return Cea608Parser;
	}();

	exports.default = Cea608Parser;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	var Cues = {

	  newCue: function newCue(track, startTime, endTime, captionScreen) {
	    var row;
	    var cue;
	    var indenting;
	    var indent;
	    var text;
	    var VTTCue = window.VTTCue || window.TextTrackCue;

	    for (var r = 0; r < captionScreen.rows.length; r++) {
	      row = captionScreen.rows[r];
	      indenting = true;
	      indent = 0;
	      text = '';

	      if (!row.isEmpty()) {
	        for (var c = 0; c < row.chars.length; c++) {
	          if (row.chars[c].uchar.match(/\s/) && indenting) {
	            indent++;
	          } else {
	            text += row.chars[c].uchar;
	            indenting = false;
	          }
	        }
	        cue = new VTTCue(startTime, endTime, text.trim());

	        if (indent >= 16) {
	          indent--;
	        } else {
	          indent++;
	        }

	        // VTTCue.line get's flakey when using controls, so let's now include line 13&14
	        // also, drop line 1 since it's to close to the top
	        if (navigator.userAgent.match(/Firefox\//)) {
	          cue.line = r + 1;
	        } else {
	          cue.line = r > 7 ? r - 2 : r + 1;
	        }
	        cue.align = 'left';
	        cue.position = 100 * (indent / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0);
	        track.addCue(cue);
	      }
	    }
	  }

	};

	module.exports = Cues;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FPS Controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var FPSController = function (_EventHandler) {
	  _inherits(FPSController, _EventHandler);

	  function FPSController(hls) {
	    _classCallCheck(this, FPSController);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FPSController).call(this, hls, _events2.default.MEDIA_ATTACHING));
	  }

	  _createClass(FPSController, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }
	      this.isVideoPlaybackQualityAvailable = false;
	    }
	  }, {
	    key: 'onMediaAttaching',
	    value: function onMediaAttaching(data) {
	      if (this.hls.config.capLevelOnFPSDrop) {
	        this.video = data.media instanceof HTMLVideoElement ? data.media : null;
	        if (typeof this.video.getVideoPlaybackQuality === 'function') {
	          this.isVideoPlaybackQualityAvailable = true;
	        }
	        clearInterval(this.timer);
	        this.timer = setInterval(this.checkFPSInterval.bind(this), this.hls.config.fpsDroppedMonitoringPeriod);
	      }
	    }
	  }, {
	    key: 'checkFPS',
	    value: function checkFPS(video, decodedFrames, droppedFrames) {
	      var currentTime = performance.now();
	      if (decodedFrames) {
	        if (this.lastTime) {
	          var currentPeriod = currentTime - this.lastTime,
	              currentDropped = droppedFrames - this.lastDroppedFrames,
	              currentDecoded = decodedFrames - this.lastDecodedFrames,
	              droppedFPS = 1000 * currentDropped / currentPeriod;
	          this.hls.trigger(_events2.default.FPS_DROP, { currentDropped: currentDropped, currentDecoded: currentDecoded, totalDroppedFrames: droppedFrames });
	          if (droppedFPS > 0) {
	            //logger.log('checkFPS : droppedFPS/decodedFPS:' + droppedFPS/(1000 * currentDecoded / currentPeriod));
	            if (currentDropped > this.hls.config.fpsDroppedMonitoringThreshold * currentDecoded) {
	              var currentLevel = this.hls.currentLevel;
	              _logger.logger.warn('drop FPS ratio greater than max allowed value for currentLevel: ' + currentLevel);
	              if (currentLevel > 0 && (this.hls.autoLevelCapping === -1 || this.hls.autoLevelCapping >= currentLevel)) {
	                currentLevel = currentLevel - 1;
	                this.hls.trigger(_events2.default.FPS_DROP_LEVEL_CAPPING, { level: currentLevel, droppedLevel: this.hls.currentLevel });
	                this.hls.autoLevelCapping = currentLevel;
	                this.hls.streamController.nextLevelSwitch();
	              }
	            }
	          }
	        }
	        this.lastTime = currentTime;
	        this.lastDroppedFrames = droppedFrames;
	        this.lastDecodedFrames = decodedFrames;
	      }
	    }
	  }, {
	    key: 'checkFPSInterval',
	    value: function checkFPSInterval() {
	      if (this.video) {
	        if (this.isVideoPlaybackQualityAvailable) {
	          var videoPlaybackQuality = this.video.getVideoPlaybackQuality();
	          this.checkFPS(this.video, videoPlaybackQuality.totalVideoFrames, videoPlaybackQuality.droppedVideoFrames);
	        } else {
	          this.checkFPS(this.video, this.video.webkitDecodedFrameCount, this.video.webkitDroppedFrameCount);
	        }
	      }
	    }
	  }]);

	  return FPSController;
	}(_eventHandler2.default);

	exports.default = FPSController;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * audio track controller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var AudioTrackController = function (_EventHandler) {
	  _inherits(AudioTrackController, _EventHandler);

	  function AudioTrackController(hls) {
	    _classCallCheck(this, AudioTrackController);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AudioTrackController).call(this, hls, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_LOADED, _events2.default.AUDIO_TRACK_LOADED));

	    _this.tracks = [];
	    _this.trackId = 0;
	    return _this;
	  }

	  _createClass(AudioTrackController, [{
	    key: 'destroy',
	    value: function destroy() {
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onManifestLoading',
	    value: function onManifestLoading() {
	      // reset audio tracks on manifest loading
	      this.tracks = [];
	      this.trackId = 0;
	    }
	  }, {
	    key: 'onManifestLoaded',
	    value: function onManifestLoaded(data) {
	      var _this2 = this;

	      var tracks = data.audioTracks || [];
	      this.tracks = tracks;
	      this.hls.trigger(_events2.default.AUDIO_TRACKS_UPDATED, { audioTracks: tracks });
	      // loop through available audio tracks and autoselect default if needed
	      tracks.forEach(function (track) {
	        if (track.default) {
	          _this2.audioTrack = track.id;
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'onAudioTrackLoaded',
	    value: function onAudioTrackLoaded(data) {
	      if (data.id < this.tracks.length) {
	        _logger.logger.log('audioTrack ' + data.id + ' loaded');
	        this.tracks[data.id].details = data.details;
	        // check if current playlist is a live playlist
	        if (data.details.live && !this.timer) {
	          // if live playlist we will have to reload it periodically
	          // set reload period to playlist target duration
	          this.timer = setInterval(this.ontick, 1000 * data.details.targetduration);
	        }
	        if (!data.details.live && this.timer) {
	          // playlist is not live and timer is armed : stopping it
	          clearInterval(this.timer);
	          this.timer = null;
	        }
	      }
	    }

	    /** get alternate audio tracks list from playlist **/

	  }, {
	    key: 'setAudioTrackInternal',
	    value: function setAudioTrackInternal(newId) {
	      // check if level idx is valid
	      if (newId >= 0 && newId < this.tracks.length) {
	        // stopping live reloading timer if any
	        if (this.timer) {
	          clearInterval(this.timer);
	          this.timer = null;
	        }
	        this.trackId = newId;
	        _logger.logger.log('switching to audioTrack ' + newId);
	        this.hls.trigger(_events2.default.AUDIO_TRACK_SWITCH, { id: newId });
	        var audioTrack = this.tracks[newId];
	        // check if we need to load playlist for this audio Track
	        if (audioTrack.details === undefined || audioTrack.details.live === true) {
	          // track not retrieved yet, or live playlist we need to (re)load it
	          _logger.logger.log('(re)loading playlist for audioTrack ' + newId);
	          this.hls.trigger(_events2.default.AUDIO_TRACK_LOADING, { url: audioTrack.url, id: newId });
	        }
	      }
	    }
	  }, {
	    key: 'audioTracks',
	    get: function get() {
	      return this.tracks;
	    }

	    /** get index of the selected audio track (index in audio track lists) **/

	  }, {
	    key: 'audioTrack',
	    get: function get() {
	      return this.trackId;
	    }

	    /** select an audio track, based on its index in audio track lists**/
	    ,
	    set: function set(audioTrackId) {
	      if (this.trackId !== audioTrackId || this.tracks[audioTrackId].details === undefined) {
	        this.setAudioTrackInternal(audioTrackId);
	      }
	    }
	  }]);

	  return AudioTrackController;
	}(_eventHandler2.default);

	exports.default = AudioTrackController;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * XHR based logger
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _logger = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var XhrLoader = function () {
	  function XhrLoader(config) {
	    _classCallCheck(this, XhrLoader);

	    if (config && config.xhrSetup) {
	      this.xhrSetup = config.xhrSetup;
	    }
	  }

	  _createClass(XhrLoader, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.abort();
	      this.loader = null;
	    }
	  }, {
	    key: 'abort',
	    value: function abort() {
	      var loader = this.loader,
	          timeoutHandle = this.timeoutHandle;
	      if (loader && loader.readyState !== 4) {
	        this.stats.aborted = true;
	        loader.abort();
	      }
	      if (timeoutHandle) {
	        window.clearTimeout(timeoutHandle);
	      }
	    }
	  }, {
	    key: 'load',
	    value: function load(url, context, responseType, onSuccess, onError, onTimeout, timeout, maxRetry, retryDelay) {
	      var onProgress = arguments.length <= 9 || arguments[9] === undefined ? null : arguments[9];
	      var frag = arguments.length <= 10 || arguments[10] === undefined ? null : arguments[10];

	      this.url = url;
	      this.context = context;
	      if (context) {
	        context.url = url;
	      }
	      if (frag && !isNaN(frag.byteRangeStartOffset) && !isNaN(frag.byteRangeEndOffset)) {
	        this.byteRange = frag.byteRangeStartOffset + '-' + (frag.byteRangeEndOffset - 1);
	      }
	      this.responseType = responseType;
	      this.onSuccess = onSuccess;
	      this.onProgress = onProgress;
	      this.onTimeout = onTimeout;
	      this.onError = onError;
	      this.stats = { trequest: performance.now(), retry: 0 };
	      this.timeout = timeout;
	      this.maxRetry = maxRetry;
	      this.retryDelay = retryDelay;
	      this.loadInternal();
	    }
	  }, {
	    key: 'loadInternal',
	    value: function loadInternal() {
	      var xhr;

	      if (typeof XDomainRequest !== 'undefined') {
	        xhr = this.loader = new XDomainRequest();
	      } else {
	        xhr = this.loader = new XMLHttpRequest();
	      }

	      xhr.onloadend = this.loadend.bind(this);
	      xhr.onprogress = this.loadprogress.bind(this);

	      xhr.open('GET', this.url, true);
	      if (this.byteRange) {
	        xhr.setRequestHeader('Range', 'bytes=' + this.byteRange);
	      }
	      xhr.responseType = this.responseType;
	      var stats = this.stats;
	      stats.tfirst = 0;
	      stats.loaded = 0;
	      if (this.xhrSetup) {
	        this.xhrSetup(xhr, this.url);
	      }
	      this.timeoutHandle = window.setTimeout(this.loadtimeout.bind(this), this.timeout);
	      xhr.send();
	    }
	  }, {
	    key: 'loadend',
	    value: function loadend(event) {
	      var xhr = event.currentTarget,
	          status = xhr.status,
	          stats = this.stats,
	          context = this.context;
	      // don't proceed if xhr has been aborted
	      if (!stats.aborted) {
	        // http status between 200 to 299 are all successful
	        if (status >= 200 && status < 300) {
	          window.clearTimeout(this.timeoutHandle);
	          stats.tload = Math.max(stats.tfirst, performance.now());
	          this.onSuccess(event, stats, context);
	        } else {
	          // error ...
	          if (stats.retry < this.maxRetry) {
	            _logger.logger.warn(status + ' while loading ' + this.url + ', retrying in ' + this.retryDelay + '...');
	            this.destroy();
	            window.setTimeout(this.loadInternal.bind(this), this.retryDelay);
	            // exponential backoff
	            this.retryDelay = Math.min(2 * this.retryDelay, 64000);
	            stats.retry++;
	          } else {
	            window.clearTimeout(this.timeoutHandle);
	            _logger.logger.error(status + ' while loading ' + this.url);
	            this.onError(event, context);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'loadtimeout',
	    value: function loadtimeout(event) {
	      _logger.logger.warn('timeout while loading ' + this.url);
	      this.onTimeout(event, this.stats, this.context);
	    }
	  }, {
	    key: 'loadprogress',
	    value: function loadprogress(event) {
	      var stats = this.stats;
	      if (stats.tfirst === 0) {
	        stats.tfirst = Math.max(performance.now(), stats.trequest);
	      }
	      stats.loaded = event.loaded;
	      if (event.lengthComputable) {
	        stats.total = event.total;
	      }
	      if (this.onProgress) {
	        this.onProgress(event, stats, this.context);
	      }
	    }
	  }]);

	  return XhrLoader;
	}();

	exports.default = XhrLoader;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(17);

	var _events2 = _interopRequireDefault(_events);

	var _eventHandler = __webpack_require__(20);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _errors = __webpack_require__(18);

	var _logger = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Decrypt key Loader
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var KeyLoader = function (_EventHandler) {
	  _inherits(KeyLoader, _EventHandler);

	  function KeyLoader(hls) {
	    _classCallCheck(this, KeyLoader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KeyLoader).call(this, hls, _events2.default.KEY_LOADING));

	    _this.loaders = {};
	    _this.decryptkey = null;
	    _this.decrypturl = null;
	    return _this;
	  }

	  _createClass(KeyLoader, [{
	    key: 'destroy',
	    value: function destroy() {
	      for (var loaderName in this.loaders) {
	        var loader = this.loaders[loaderName];
	        if (loader) {
	          loader.destroy();
	        }
	      }
	      this.loaders = {};
	      _eventHandler2.default.prototype.destroy.call(this);
	    }
	  }, {
	    key: 'onKeyLoading',
	    value: function onKeyLoading(data) {
	      var frag = data.frag,
	          type = frag.type,
	          loader = this.loaders[type],
	          decryptdata = frag.decryptdata,
	          uri = decryptdata.uri;
	      // if uri is different from previous one or if decrypt key not retrieved yet
	      if (uri !== this.decrypturl || this.decryptkey === null) {
	        var config = this.hls.config;

	        if (loader) {
	          _logger.logger.warn('abort previous fragment loader for type:' + type);
	          loader.abort();
	        }
	        frag.loader = this.loaders[type] = new config.loader(config);
	        this.decrypturl = uri;
	        this.decryptkey = null;
	        frag.loader.load(uri, { frag: frag }, 'arraybuffer', this.loadsuccess.bind(this), this.loaderror.bind(this), this.loadtimeout.bind(this), config.fragLoadingTimeOut, config.fragLoadingMaxRetry, config.fragLoadingRetryDelay, this.loadprogress.bind(this), frag);
	      } else if (this.decryptkey) {
	        // we already loaded this key, return it
	        decryptdata.key = this.decryptkey;
	        this.hls.trigger(_events2.default.KEY_LOADED, { frag: frag });
	      }
	    }
	  }, {
	    key: 'loadsuccess',
	    value: function loadsuccess(event, stats, context) {
	      var frag = context.frag;
	      this.decryptkey = frag.decryptdata.key = new Uint8Array(event.currentTarget.response);
	      // detach fragment loader on load success
	      frag.loader = undefined;
	      this.loaders[context.type] = undefined;
	      this.hls.trigger(_events2.default.KEY_LOADED, { frag: frag });
	    }
	  }, {
	    key: 'loaderror',
	    value: function loaderror(event, context) {
	      var frag = context.frag,
	          loader = frag.loader;
	      if (loader) {
	        loader.abort();
	      }
	      this.loaders[context.type] = undefined;
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: frag, response: event });
	    }
	  }, {
	    key: 'loadtimeout',
	    value: function loadtimeout(event, stats, context) {
	      var frag = context.frag,
	          loader = frag.loader;
	      if (loader) {
	        loader.abort();
	      }
	      this.loaders[context.type] = undefined;
	      this.hls.trigger(_events2.default.ERROR, { type: _errors.ErrorTypes.NETWORK_ERROR, details: _errors.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: false, frag: frag });
	    }
	  }, {
	    key: 'loadprogress',
	    value: function loadprogress() {}
	  }]);

	  return KeyLoader;
	}(_eventHandler2.default);

	exports.default = KeyLoader;

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controls = function () {
		function Controls($el) {
			_classCallCheck(this, Controls);

			this.$el = $el;
			this.$video = $el.find('video');
			this.video = $el.find('video').get(0);
		}
		// 播放


		_createClass(Controls, [{
			key: 'play',
			value: function play() {
				this.video.play();
			}
			// 停止

		}, {
			key: 'pause',
			value: function pause() {
				this.video.pause();
			}
			// 加载视频元素

		}, {
			key: 'load',
			value: function load() {
				this.video.load();
			}
			// 设置视频元素的当前来源

		}, {
			key: 'canplay',

			// 当浏览器可以播放视频时
			value: function canplay() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('canplay', function () {
					callback();
				});
			}
			// 提示视频/音频的元数据已加载

		}, {
			key: 'loadedmetadata',
			value: function loadedmetadata() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('loadedmetadata', function () {
					callback();
				});
			}
			// 当目前的播放位置已更改时

		}, {
			key: 'timeupdate',
			value: function timeupdate() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('timeupdate', function () {
					callback();
				});
			}
			// 	当浏览器正在下载视频时

		}, {
			key: 'progress',
			value: function progress() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('progress', function () {
					callback();
				});
			}
			// 	当目前的播放列表已结束时

		}, {
			key: 'endedEvent',
			value: function endedEvent() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('ended', function () {
					callback();
				});
			}
			// 	缓存等待中

		}, {
			key: 'waiting',
			value: function waiting() {
				var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

				this.$video.on('waiting', function () {
					callback();
				});
			}
		}, {
			key: 'src',
			set: function set(value) {
				this.video.src = value;
			}
			// 返回视频元素的当前来源
			,
			get: function get() {
				return this.video.src;
			}
			// 指定播放到某个时间点

		}, {
			key: 'currentTime',
			set: function set(value) {
				this.video.currentTime = value;
			}
			// 返回当前播放时间点
			,
			get: function get() {
				return this.video.currentTime;
			}
			// 返回当前视频的长度

		}, {
			key: 'duration',
			get: function get() {
				return this.video.duration;
			}
			// 设置视频是否静音

		}, {
			key: 'muted',
			set: function set(value) {
				this.video.muted = value;
			}
			// 返回视频是否静音
			,
			get: function get() {
				return this.video.muted;
			}
			// 设置视频的音量

		}, {
			key: 'volume',
			set: function set(value) {
				this.video.volume = value;
			}
			// 返回视频的音量
			,
			get: function get() {
				return this.video.volume;
			}
			// 设置视频播放的速度

		}, {
			key: 'playbackRate',
			set: function set(value) {
				this.video.playbackRate = value;
			}
			// 返回视频播放的速度
			,
			get: function get() {
				return this.video.playbackRate;
			}
			// 返回视频是否暂停

		}, {
			key: 'paused',
			get: function get() {
				return this.video.paused;
			}
			// 返回视频的播放是否已结束

		}, {
			key: 'ended',
			get: function get() {
				return this.video.ended;
			}
			// 设置视频是否应在结束时重新播放

		}, {
			key: 'loop',
			set: function set(value) {
				this.video.loop = value;
			}
			// 返回视频是否应在结束时重新播放
			,
			get: function get() {
				return this.video.loop;
			}
			// 设置视频是否应该在页面加载后进行加载

		}, {
			key: 'preload',
			set: function set(value) {
				this.video.preload = value;
			}
			// 返回视频是否应该在页面加载后进行加载
			,
			get: function get() {
				return this.video.preload;
			}
			// 返回视频当前的就绪状态
			// 0 = HAVE_NOTHING - 没有关于视频是否就绪的信息
			// 1 = HAVE_METADATA - 关于视频就绪的元数据
			// 2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
			// 3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
			// 4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放

		}, {
			key: 'readyState',
			get: function get() {
				return this.video.readyState;
			}
			// 设置是否在加载完成后随即播放视频

		}, {
			key: 'autoplay',
			set: function set(value) {
				this.video.autoplay = value;
			}
			// 返回是否在加载完成后随即播放视频
			,
			get: function get() {
				return this.video.autoplay;
			}
			// 返回表示视频已缓冲部分的 TimeRanges 对象

		}, {
			key: 'buffered',
			get: function get() {
				return this.video.buffered;
			}
		}]);

		return Controls;
	}();

	exports.default = Controls;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(65)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./player.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./player.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(64)();
	// imports


	// module
	exports.push([module.id, "html {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  font-size: 100%; }\n\na {\n  cursor: pointer;\n  outline: 0 none; }\n\n:active {\n  outline: 0; }\n\n:visited {\n  outline: 0; }\n\n:link, :visited, ins {\n  text-decoration: none; }\n\n[hidden] {\n  display: none; }\n\nbody {\n  margin: 0;\n  background: #FFF;\n  font-size: 12px; }\n\ndl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, select, textarea, p, blockquote, th, td,\narticle, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0; }\n\nfieldset, iframe {\n  border: 0 none; }\n\nimg {\n  border: 0 none;\n  -ms-interpolation-mode: bicubic;\n  vertical-align: middle; }\n\naddress, caption, cite, code, dfn, em, i, th, var, optgroup {\n  font-style: normal; }\n\nh1, h2, h3, h4, h5, h6, code, kbd, samp, tt, sup, sub, small, input, button, textarea, select {\n  font-size: 100%; }\n\nabbr, acronym {\n  border: 0 none;\n  font-variant: normal; }\n\ninput, button, textarea, select, optgroup, option {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\ntextarea, input, select {\n  outline: 0 none; }\n\nol, ul, li, menu {\n  list-style: none outside none; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nsup {\n  vertical-align: text-top; }\n\nsub {\n  vertical-align: text-bottom; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\nmark {\n  background-color: #FF6; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help; }\n\ninput, select, button {\n  vertical-align: middle; }\n\nbutton {\n  width: auto;\n  cursor: pointer;\n  overflow: visible; }\n\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box; }\n\nbutton::-moz-focus-inner,\ninput[type=file] > input[type=button]::-moz-focus-inner {\n  border: 0 none;\n  padding: 0; }\n\n.enjoy-player-wrap .enjoy-player-controls, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume {\n  *zoom: 1; }\n  .enjoy-player-wrap .enjoy-player-controls:before, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume:before, .enjoy-player-wrap .enjoy-player-controls:after, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume:after {\n    display: table;\n    content: \"\";\n    line-height: 0; }\n  .enjoy-player-wrap .enjoy-player-controls:after, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume:after {\n    clear: both; }\n\n.enjoy-player-wrap .enjoy-player-controls .enjoy-player-play-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-pause-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-prev-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-next-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-progress, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume i {\n  float: left;\n  display: inline; }\n\n.enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-muted, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-has-muted, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-fullscreen, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-exit-fullscreen {\n  float: right;\n  display: inline; }\n\n.enjoy-player-wrap .enjoy-player-controls .enjoy-player-play-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-pause-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-prev-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-next-btn {\n  cursor: pointer; }\n\n.enjoy-player-wrap {\n  position: relative; }\n  .enjoy-player-wrap .enjoy-player-video {\n    display: block;\n    background-color: #000; }\n  .enjoy-player-wrap .enjoy-player-bar-bg {\n    width: 100%;\n    height: 3px;\n    background-color: #888;\n    position: relative; }\n  .enjoy-player-wrap .enjoy-player-bar-point {\n    width: 12px;\n    height: 12px;\n    position: absolute;\n    overflow: hidden;\n    border-radius: 100%;\n    left: -6px;\n    top: -4px;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.5); }\n    .enjoy-player-wrap .enjoy-player-bar-point i {\n      display: block;\n      width: 6px;\n      height: 6px;\n      margin: 3px auto 0;\n      border-radius: 100%;\n      background-color: #fff; }\n  .enjoy-player-wrap .enjoy-player-loading {\n    display: none;\n    color: #fff;\n    font-size: 16px;\n    width: 150px;\n    text-align: center;\n    margin-left: -75px;\n    position: absolute;\n    left: 50%;\n    top: 45%; }\n  .enjoy-player-wrap .enjoy-player-buffered {\n    position: absolute;\n    height: 3px;\n    background-color: #fff; }\n  .enjoy-player-wrap .enjoy-player-played {\n    position: absolute;\n    height: 3px;\n    left: 0;\n    background-color: #e75c5d; }\n  .enjoy-player-wrap .enjoy-player-controls {\n    height: 44px;\n    width: 100%;\n    background: #111111;\n    color: #fff; }\n    .enjoy-player-wrap .enjoy-player-controls i, .enjoy-player-wrap .enjoy-player-controls b, .enjoy-player-wrap .enjoy-player-controls span {\n      display: inline-block; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-play-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-pause-btn {\n      width: 24px;\n      height: 24px;\n      margin: 10px 3px 0; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-pause-btn {\n      display: none; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-prev-btn, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-next-btn {\n      width: 24px;\n      height: 24px;\n      margin: 10px 3px 0; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-prev-btn {\n      margin-left: 15px; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-progress {\n      margin: 15px 0 0 10px; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume {\n      margin: 20px 10px 0 0; }\n      .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume i {\n        width: 1px;\n        height: 8px;\n        border-right: #444 2px solid;\n        overflow: hidden; }\n      .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume .enjoy-player-volume-choosed {\n        border-color: #fff; }\n      .enjoy-player-wrap .enjoy-player-controls .enjoy-player-volume .enjoy-player-volume-muted {\n        border-color: #444; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-muted, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-has-muted {\n      width: 20px;\n      height: 20px;\n      margin: 13px 8px 0; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-has-muted {\n      display: none; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-fullscreen, .enjoy-player-wrap .enjoy-player-controls .enjoy-player-exit-fullscreen {\n      width: 15px;\n      height: 15px;\n      margin: 15px 10px 0 0; }\n    .enjoy-player-wrap .enjoy-player-controls .enjoy-player-exit-fullscreen {\n      display: none; }\n\n.enjoy-player-has-fullscreen {\n  width: 100% !important;\n  height: 100% !important; }\n  .enjoy-player-has-fullscreen video {\n    width: 100% !important;\n    height: 100% !important; }\n", ""]);

	// exports


/***/ },
/* 64 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
; 