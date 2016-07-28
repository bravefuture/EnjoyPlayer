 
import TimeFormat from 'components/time_format';
import Browser from 'components/browser';
import CanPlay from 'components/can_play';
import Controls from 'controls/controls';
import Hls from 'hls.js';

export default class Events extends Controls{
	constructor($el, args) {
		// 调用父类Controls的constructor
		super($el);

		this.$el = $el;
		this.el = $el.get(0);
		this.video = $el.find('video').get(0);
		this.args = args;

		this.getDom();
		this.getW();
		this.bindEvents();
	}
	// 取dom
	getDom() {
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
	getW() {		
		this.barBgW = this.$barBg.width();
		this.barPointW = this.$barPoint.width();
	}
	bindResize() {
		let timer;
		$(window).on('resize.enjoyPlayer', () => {
			timer = setTimeout(() => {
				if (timer) {
					clearTimeout(timer);
				}
				this.getW();
			}, 200);
		});
	}
	bindEvents() {
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
	bindHLS() {
        if (CanPlay.Hls(this.args.src)) {
            var hls = new Hls();
            hls.attachMedia(this.video);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                hls.loadSource(this.args.src);
            });
        } else {
        	this.src = this.args.src;
        }
	}
	// 是否自动播放
	bindAutoPlay() {
		if (this.args.autoPlay === true) {
			this.$playBtn.hide();
			this.$pauseBtn.css('display', 'inline-block');			
		}
		this.autoplay = this.args.autoPlay;
		this.load();
	}
	// 是否循环播放
	bindLoop() {
		if (this.args.loop === true) {
			this.loop = true;		
		}
	}
	// 视频是否应该在页面加载后进行加载
	bindPreload() {
		this.preload = this.args.preload;
	}
	// 播放
	bindPlay() {
		this.$playBtn.on('click', () => {
			this.$playBtn.hide();
			this.$pauseBtn.css('display', 'inline-block');
			this.play();
		});
	}
	// 停止
	bindPause() {
		this.$pauseBtn.on('click', () => {
			this.$playBtn.css('display', 'inline-block');
			this.$pauseBtn.hide();
			this.pause();
		});
	}
	// 播放结束
	bindEnded() {
		this.endedEvent(() => {
			this.$playBtn.css('display', 'inline-block');
			this.$pauseBtn.hide();			
		});
	}
	// 播放时间
	bindDuration() {
		// 提示视频的元数据已加载
		this.loadedmetadata(() => {
			this.$durationTime.html(TimeFormat(this.duration));
		});
		// 默认值
		this.$postionTime.html(TimeFormat(this.currentTime));
		// 当目前的播放位置已更改时
		this.timeupdate(() => {
			this.$postionTime.html(TimeFormat(this.currentTime));
			this.bindProgress();
			this.isShowLoading = false;
		});
	}
	// 下一个视频
	bindNextVideo() {
		if (this.args.next.has === true) {
			this.$nextBtn = $('.enjoy-player-next-btn');
			this.$nextBtn.on('click', () => {
				this.args.next.callback(this);
			});
		}
	}
	// 上一个视频
	bindPrevVideo() {
		if (this.args.prev.has === true) {
			this.$prevBtn = $('.enjoy-player-prev-btn');
			this.$prevBtn.on('click', () => {
				this.args.prev.callback(this);
			});
		}
	}
	// 播放进度
	bindProgress() {
		let played = this.currentTime / this.duration * this.barBgW - this.barPointW / 2;
		this.$barPoint.css('left', played);
        this.$barPlayed.width(played);
	}
	bindSeek(e) {
        let barBgOL = this.$barBg.offset().left,
            left = e.pageX - barBgOL - this.barPointW / 2;                
        left = Math.max(Math.min(left, this.barBgW - this.barPointW / 2), - this.barPointW / 2);
        this.$barPoint.css('left', left);
        //设置播放进度
        this.currentTime = (left + this.barPointW / 2) * this.duration / this.barBgW;		
	}
	// 拖拉进度
	bindSeekDrag() {
		const $doc = $(document);
		this.$barPoint.on('mousedown.enjoyPlayer', (e) => {
            $doc.on('mousemove.enjoyPlayer', (e) => {
            	e.preventDefault();
            	this.bindSeek(e);
            });
            $doc.on('mouseup.enjoyPlayer', () => {
                $doc.off('mousemove.enjoyPlayer');
            });
        });
	}
	// 点击进度条
	bindSeekChoose() {
		this.$barBg.on('click', (e) => {
            e.preventDefault();
            this.bindSeek(e);
		});
	}
	// 选择音量
	bindChooseVolume() {
		let _self = this;
		this.$i = this.$chooseVolume.find('i');
		let	iLen = this.$i.length;
		this.args.volume = Math.max(Math.min(this.args.volume, 1), 0);
		this.volume = this.args.volume;
		// 选择音量
		this.$chooseVolume.on('click', 'i', function() {
			let index = $(this).index();
			_self.$hasMuted.trigger('click');
			for(let i = 0; i < iLen; i++) {
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
	bindMuted() {
		this.$muted.on('click', () => {
			this.muted = true;
			this.$muted.hide();
			this.$hasMuted.css('display', 'inline-block');
			this.$i.addClass('enjoy-player-volume-muted');
		});
		this.$hasMuted.on('click', () => {
			this.muted = false;
			this.$muted.css('display', 'inline-block');
			this.$hasMuted.hide();
			this.$i.removeClass('enjoy-player-volume-muted');
		});
	}
	// 缓冲
	bindBuffered() {
		this.progress(() => {
			if (!this.buffered.length) {
				return;
			}
			let bufferedIndex = 0;
			for (let i = 0; i < this.buffered.length; i++) {
				if (this.currentTime >= this.buffered.start(i) && this.currentTime < this.buffered.end(i)) {
					bufferedIndex = i;
					break;
				}
			}
			this.$barBuffered.css({
				left: this.buffered.start(bufferedIndex) / this.duration * this.barBgW,
				width: this.buffered.end(bufferedIndex) / this.duration * this.barBgW - this.buffered.start(bufferedIndex) / this.duration * this.barBgW
			});
		});
	}
	// 全屏
	bindFullscreen() {
		this.$fullscreen.on('click', () => {
			this.judgeFullscreen();
			this.$wrap.addClass('enjoy-player-has-fullscreen');
			this.$exitFullscreen.css('display', 'inline-block');
			this.$fullscreen.hide();
		});
	}
	// 判断全屏
	judgeFullscreen() {
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
	bindExitFullscreen() {
		this.$exitFullscreen.on('click', () => {
			this.judgeExitFullscreen();
			this.$wrap.removeClass('enjoy-player-has-fullscreen');
			this.$exitFullscreen.hide();
			this.$fullscreen.css('display', 'inline-block');
		});
	}
	// 判断退出全屏
	judgeExitFullscreen() {
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
	bindBuffering() {
		this.isShowLoading = true;
		this.canplay(() => {
			this.isShowLoading = true;
		});
		let prevTime = 0,
			currentTime = 0;
		setInterval(() => {			
			currentTime = this.currentTime;
			if (prevTime === currentTime) {
				this.isShowLoading = true;
			}
			prevTime = currentTime;
			if (this.isShowLoading === true && !this.paused && !this.ended) {
				this.$loading.show();
			} else {
				this.$loading.hide();
			}			
		}, 100);
	}
}
