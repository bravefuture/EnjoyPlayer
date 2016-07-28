/**
 * [补零]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */ 
const zerofill = (value) => {
	value = value + '';
	return value.length > 1 ? value : '0' + value;
};
/**
 * [格式化时间]
 * @param  {Number} time [description]
 * @return {[type]}      [description]
 */
const TimeFormat = (time = 0) => {
	time = parseInt(time);
	let [hours, minutes, seconds] = [parseInt(time / 3600), parseInt(time / 60 % 60), time % 60];
	hours = hours === 0 ? '' : zerofill(hours) + ':';
	time = hours + zerofill(minutes) + ':' + zerofill(seconds);
	return time;
};

export default TimeFormat;