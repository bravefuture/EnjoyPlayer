  
import Browser from 'components/browser';
import Hls from 'hls.js';

let CanPlay = {};

CanPlay.Hls = (source) => {
	let sourceParts = source.split('?')[0].match(/.*\.(.*)$/) || [],
  		isHls = ((sourceParts.length > 1 && sourceParts[1] === 'm3u8'));
  	return !!(Hls.isSupported() && isHls && !Browser.isIOS)
};

export default CanPlay;