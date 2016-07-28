 
export default class Controls {
	constructor($el) {
	    this.$el = $el;
	    this.$video = $el.find('video');
	    this.video = $el.find('video').get(0);
	}
	// 播放
	play() {
		this.video.play();
	}
	// 停止
	pause() {
		this.video.pause();
	}
	// 加载视频元素
	load() {
		this.video.load();
	}
	// 设置视频元素的当前来源
	set src(value) {
		this.video.src = value;
	}
	// 返回视频元素的当前来源
	get src() {
		return this.video.src;
	}
	// 指定播放到某个时间点
	set currentTime(value) {
		this.video.currentTime = value;
	}
	// 返回当前播放时间点
	get currentTime() {
		return this.video.currentTime;
	}
	// 返回当前视频的长度
	get duration() {
		return this.video.duration;
	}
	// 设置视频是否静音
	set muted(value) {
		this.video.muted = value;
	}
	// 返回视频是否静音
	get muted() {
		return this.video.muted;
	}
	// 设置视频的音量
	set volume(value) {
		this.video.volume = value;
	}
	// 返回视频的音量
	get volume() {
		return this.video.volume;
	}
	// 设置视频播放的速度
	set playbackRate(value) {
		this.video.playbackRate = value;
	}
	// 返回视频播放的速度
	get playbackRate() {
		return this.video.playbackRate;
	}
	// 返回视频是否暂停
	get paused() {
		return this.video.paused;
	}
	// 返回视频的播放是否已结束
	get ended() {
		return this.video.ended;
	}
	// 设置视频是否应在结束时重新播放
	set loop(value) {
		this.video.loop = value;
	}
	// 返回视频是否应在结束时重新播放
	get loop() {
		return this.video.loop;
	}
	// 设置视频是否应该在页面加载后进行加载
	set preload(value) {
		this.video.preload = value;
	}
	// 返回视频是否应该在页面加载后进行加载
	get preload() {
		return this.video.preload;
	}
	// 返回视频当前的就绪状态
	// 0 = HAVE_NOTHING - 没有关于视频是否就绪的信息
	// 1 = HAVE_METADATA - 关于视频就绪的元数据
	// 2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
	// 3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
	// 4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
	get readyState() {
		return this.video.readyState;
	}
	// 设置是否在加载完成后随即播放视频
	set autoplay(value) {
		this.video.autoplay = value;
	}
	// 返回是否在加载完成后随即播放视频
	get autoplay() {
		return this.video.autoplay;
	}
	// 返回表示视频已缓冲部分的 TimeRanges 对象
	get buffered() {
		return this.video.buffered;
	}
	// 当浏览器可以播放视频时
	canplay(callback = function() {}) {
		this.$video.on('canplay', () => {
			callback();
		});
	}
	// 提示视频/音频的元数据已加载
	loadedmetadata(callback = function() {}) {
		this.$video.on('loadedmetadata', () => {
			callback();
		});
	}
	// 当目前的播放位置已更改时
	timeupdate(callback = function() {}) {
		this.$video.on('timeupdate', () => {
			callback();
		});
	}
	// 	当浏览器正在下载视频时
	progress(callback = function() {}) {
		this.$video.on('progress', () => {
			callback();
		});
	}
	// 	当目前的播放列表已结束时
	endedEvent(callback = function() {}) {
		this.$video.on('ended', () => {
			callback();
		});
	}
	// 	缓存等待中
	waiting(callback = function() {}) {
		this.$video.on('waiting', () => {
			callback();
		});
	}
}
