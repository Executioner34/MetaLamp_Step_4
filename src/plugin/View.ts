import MakeObservableSubject from "./Observer";


export default class View {
	$slider: JQuery<HTMLElement>;
	$between: JQuery<HTMLElement>;
	$button: JQuery<HTMLElement>;
	viewObserbleSubject: MakeObservableSubject;
	buttonCoords!: JQueryCoordinates;
	pageX!: number;
	sliderCoords!: JQueryCoordinates;
	outerWidth!: number | undefined;
	buttonWidth!: number | undefined;

	constructor(selector: string) {
		this.$slider = $(selector);
		this.$between = $('<div/>').addClass('js-range-slider__between').appendTo(selector);
		this.$button = $('<button></button>').addClass('js-range-slider__button').appendTo(selector)
		this.viewObserbleSubject = new MakeObservableSubject();
		this.clickHandler = this.clickHandler.bind(this);
		$(this.$button).on('mousedown', this.clickHandler);
		$(this.$button).on('dragstart', function() {
			return false
		})
	}


	private getCoords(elem: JQuery<HTMLElement>): JQueryCoordinates {
		const box = $(elem).position();
		return box
	}

	private clickHandler(event: { pageX: number; }) {
		let sliderCoords = this.getCoords(this.$slider);
		let betweenCoords = this.getCoords(this.$between);
		let buttonCoords = this.getCoords(this.$button);
		$(document).on('mousemove' , (event) => {
			this.buttonCoords = buttonCoords;
			this.pageX = event.pageX;
			this.sliderCoords = sliderCoords;
			this.outerWidth = $(this.$slider).outerWidth();
			this.buttonWidth = $(this.$button).width();
			this.viewObserbleSubject.notify()
		})
		$(document).on('mouseup', () => {
			$(document).off('mousemove');
			$(document).off('mouseup');
		})
		return false
	}

	update(left: number, right: number) {
		$(this.$button).css({'margin-left': `${left}px`});
		$(this.$between).css({'width': `${right - left}px`});
		$(this.$between).css({'margin-left': `${left}px`})
		this.buttonCoords.left = left;
	}
}
