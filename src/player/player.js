import videoHTML from 'video_html/video_html';
import Events from 'events/events';

export default class Player extends Events {
	constructor(selector, args) {
		// 取dom
		const $el = selector instanceof $ ? selector : $(selector);
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
				callback: () => {}
			},
			next: {
				has: false,
				callback: () => {}
			}
		}, args || {});
		// 渲染结构
		$el.html(videoHTML({
			width: args.width,
			height: args.height,
			controlsHeight: args.controlsHeight,
			poster: args.poster,
			hasPrev: args.prev.has,
			hasNext: args.next.has
		}));
		// 调用父类Events的constructor
		super($el, args);
	}
	get version() {
		return '1.0.0';
	}
} 
