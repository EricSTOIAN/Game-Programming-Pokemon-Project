import UserInterfaceElement from '../UserInterfaceElement.js';
import SoundName from '../../enums/SoundName.js';
import { context, input, sounds } from '../../globals.js';
import Vector from '../../../lib/Vector.js';
import Input from '../../../lib/Input.js';

export default class ProgressBar extends UserInterfaceElement {
	/**
	 * A UI element that gives us a list of textual items that link to callbacks;
	 * this particular implementation only has one dimension of items (vertically),
	 * but a more robust implementation might include columns as well for a more
	 * grid-like selection, as seen in many other kinds of interfaces and games.
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {array} items Elements are objects that each
	 * have a string `text` and function `onSelect` property.
	 */
	constructor(x, y, width, height) {
		super(x, y, width, height);
	}

	update() {
		this.update();
	}

	render() {
		super.render();

        context.save();
		context.textBaseline = 'top';
		context.fillStyle = Colour.Black;
        context.fillRect(this.position.x + this.dimensions.x - 70,
			this.position.y + this.dimensions.y - 50, 100, 10);
        context.restore();
	}
}