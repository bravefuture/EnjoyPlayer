/**
 * [h5播放器]
 * @update: 2016.07.20
 * @author: yongcheng0660@163.com
 * @github: https://github.com/bravefuture
 * html结构：
<div id="video"></div>
 * 	
 * 实例化
var player = new Enjoy.Player('#video', {
	src: '/test.m3u8',
	width: 800,
	height: 450,
	autoPlay: false,
	controlsHeight: 44,
	poster: '',
	volume: 0.5,
	loop: false,
	preload: 'metadata',
	prev: {
		has: true,
		callback: function() {
			console.log('prev')
		}
	},
	next: {
		has: true,
		callback: function(player) {
			player.src = '/test.mp4';
			player.bindAutoPlay();
			console.log('next')
		}
	}
});
 */

require('sass/player.scss');
import Player from 'player/player';

export default {Player} 


