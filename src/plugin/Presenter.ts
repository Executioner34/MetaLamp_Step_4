import Model from "./Model";
import View from "./View";


export default class Presenter {
	model!: Model;
	view!: View;
	buttonCoords!: JQueryCoordinates;
	pageX!: number;
	outerWidth!: number | undefined;
	buttonWidth!: number | undefined;
	sliderCoords!: JQueryCoordinates;
	constructor(selector: string) {
		this.init(selector)
	}

	private init(selector: string) {
		this.model = new Model();
		this.view = new View(selector);
		this.view.viewObserbleSubject.addObservers( () => {
			this.buttonCoords = this.view.buttonCoords;
			this.pageX = this.view.pageX;
			this.outerWidth = this.view.outerWidth;
			this.buttonWidth = this.view.buttonWidth;
			this.sliderCoords = this.view.sliderCoords;
			this.model.init(this.buttonCoords, this.pageX, this.outerWidth, this.buttonWidth, this.sliderCoords)
		})
		this.model.modelObserbleSubject.addObservers( () => {
			this.view.update(this.model.left, this.model.right)
		})
	}
}