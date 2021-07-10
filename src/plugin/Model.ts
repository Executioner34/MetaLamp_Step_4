import MakeObservableSubject from "./Observer";

export default class Model {
	modelObserbleSubject: MakeObservableSubject;
	pageX!: number;
	sliderCoords!: JQueryCoordinates;
	buttonCoords!: JQueryCoordinates;
	betweenCoords!: number;
	outerWidth!: number | undefined;
	buttonWidth!: number | undefined;
	left!: number;
	right!: number;

	constructor() {
		this.modelObserbleSubject = new MakeObservableSubject();
	}
	
	init(buttonCoords: JQueryCoordinates, pageX: number, outerWidth: number | undefined, buttonWidth: number | undefined, sliderCoords: JQueryCoordinates) {
		this.buttonCoords = buttonCoords;
		this.pageX = pageX;
		this.outerWidth = outerWidth;
		this.buttonWidth = buttonWidth;
		this.sliderCoords = sliderCoords;
		this.left = Math.trunc(this.pageX - this.sliderCoords.left);
		if (this.outerWidth && this.buttonWidth) {
			this.right = this.outerWidth - this.buttonWidth
		};
		this.getCoords()
	}

	getCoords() {
		if (this.left < 0) {
			this.left = 0;
		}
		if (this.left > this.right) {
			this.left = Math.trunc(this.right);
		}
		this.modelObserbleSubject.notify()
	}
}