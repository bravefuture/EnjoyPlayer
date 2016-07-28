 
import playIcon from 'icons/play.svg';
import pauseIcon from 'icons/pause.svg';
import mutedIcon from 'icons/muted.svg';
import notMutedIcon from 'icons/not_muted.svg';
import prevIcon from 'icons/prev.svg';
import nextIcon from 'icons/next.svg';
import fullscreenIcon from 'icons/fullscreen.svg';
import exitFullscreenIcon from 'icons/exit_fullscreen.svg';

/**
 * [videoHTML 返回video结构]
 * @param  {[type]} args     [description]
 * @return {[type]}          [description]
 */
const videoHTML = function(args = {}) {
	
	let [enjoyPlayerPlayBtn, enjoyPlayerPauseBtn, enjoyPlayerPrevBtn, enjoyPlayerNextBtn] = ['<i class="enjoy-player-play-btn">'+ playIcon +'</i>', '<i class="enjoy-player-pause-btn">'+ pauseIcon +'</i>', '<i class="enjoy-player-prev-btn">'+ prevIcon +'</i>', '<i class="enjoy-player-next-btn">'+ nextIcon +'</i>'];

	enjoyPlayerPrevBtn = args.hasPrev === false ? '' : enjoyPlayerPrevBtn;
	enjoyPlayerNextBtn = args.hasNext === false ? '' : enjoyPlayerNextBtn;

	return `<div class="enjoy-player-wrap" style="width:${args.width}px;height:${args.height + args.controlsHeight}px;">
				<div class="enjoy-player-loading">loading...</div>
				<video class="enjoy-player-video" poster="${args.poster}" width="${args.width}" height="${args.height}"></video>
				<div class="enjoy-player-bar-bg">
					<div class="enjoy-player-buffered"></div>
					<div class="enjoy-player-played"></div>
					<div class="enjoy-player-bar-point"><i></i></div>
				</div>
				<div class="enjoy-player-controls" style="height:${args.controlsHeight}px">
					${enjoyPlayerPrevBtn}
					${enjoyPlayerPlayBtn}
					${enjoyPlayerPauseBtn}
					${enjoyPlayerNextBtn}
					<span class="enjoy-player-progress"><i class="enjoy-player-postion"></i> | <i class="enjoy-player-duration"></i></span>
					<i class="enjoy-player-fullscreen">${fullscreenIcon}</i>
					<i class="enjoy-player-exit-fullscreen">${exitFullscreenIcon}</i>
					<span class="enjoy-player-volume">
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</span>
					<i class="enjoy-player-muted">${notMutedIcon}</i>					
					<i class="enjoy-player-has-muted">${mutedIcon}</i>					
				</div>
			</div>`;
};
export default videoHTML;