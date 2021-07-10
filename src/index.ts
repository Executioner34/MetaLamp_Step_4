import $ = require("jquery");
import './demo/style.scss';
import Presenter from "./plugin/Presenter";

// class Slider {
// 	$slider: JQuery;
// 	$between!: JQuery;
// 	$button!: JQuery;
// 	constructor(selector: string) {
// 		this.$slider = $(selector);
// 		this._setup();
// 	}

// 	_setup(): void {
// 		const between = document.createElement('div');
// 		const $between = $(between).addClass('js-range-slider__between');
// 		$($between).css({'width': `${Number($(this.$slider).outerWidth) - Number($(this.$button).outerWidth)}px`})
// 		$(this.$slider).append($between);
// 		this.$between = $between;
// 		const button = document.createElement('button');
// 		const $button = $(button).addClass('js-range-slider__button');
// 		$(this.$between).append($button);
// 		this.$button = $button;
// 		this.clickHandler = this.clickHandler.bind(this);
// 		$(this.$button).on('mousedown', this.clickHandler);
// 		$(this.$button).on('dragstart', function(event) {
// 			return false
// 		})
// 		// console.log(this.sliderCoords);
// 		// console.log(this.buttonCoords)
// 	}
	
// 	_getCoords(elem: JQuery<HTMLElement>): JQueryCoordinates {
// 		const box = $(elem).position();
// 		return box
// 	}

// 	clickHandler(event: { pageX: number; }) {
// 		let sliderCoords = this._getCoords(this.$slider);
// 		let betweenCoords = this._getCoords(this.$between);
// 		let buttonCoords = this._getCoords(this.$button);
// 		let shiftX1 = event.pageX - buttonCoords.left;
// 		// console.log(event.pageX);
// 		// console.log(buttonCoords.left)
// 		$(document).on('mousemove' , (event) => {
// 			let left = event.pageX - sliderCoords.left;
// 			let right = $(this.$slider).outerWidth()! - $(this.$button).width()! ;
// 			if (left < 0 ) {
// 				left = 0;
// 			}
// 			if (left > right) {
// 				left = right;
// 			}
// 			console.log(`event.pageX ${event.pageX}, shift1 ${shiftX1}, sliderCoords.left ${sliderCoords.left}, right: ${right}`)
// 			$(this.$button).css({'margin-left': `${left}px`});
// 			// $(this.$between).css({ 'margin-left': `${}px` });
// 			// $(this.$between).css({'width': `${right - left}px`});
// 			buttonCoords.left = left;
// 		})
// 		$(document).on('mouseup', () => {
// 			$(document).off('mousemove');
// 			$(document).off('mouseup');
// 		})
// 		return false
// 	}
// }

const slider = new Presenter('.js-range-slider');
// module.exports = {}