# EnjoyPlayer 
## h5播放器（支持m3u8格式）
html结构：
```html
<div id="video"></div>
```

实例化：
```javascript
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
```

