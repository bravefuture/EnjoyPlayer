/**
 * [Browser 判断浏览器]
 * @type {Object}
 */ 
let Browser = {},
	nu = navigator.userAgent;

Browser.isSafari = /safari/i.test(nu) && nu.indexOf('Chrome') === -1;
Browser.isChrome = /chrome/i.test(nu);
Browser.isFirefox = /firefox/i.test(nu);
Browser.isIE11 = /trident.*rv:11/i.test(nu);
Browser.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(nu);
Browser.isIOS = /iPad|iPhone|iPod/i.test(nu);
Browser.isAndroid = /Android/i.test(nu);

export default Browser;