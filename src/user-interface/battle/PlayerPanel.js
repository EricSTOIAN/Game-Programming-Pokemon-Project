import Colour from "../../enums/Colour.js";
import { context } from "../../globals.js";
import Pokemon from "../../entities/Pokemon.js";
import UserInterfaceElement from "../UserInterfaceElement.js";
import Panel from "../elements/Panel.js";

export default class BattlePlayerPanel extends Panel {
	/**
	 * The Panel displayed beside the Player's Pokemon
	 * during battle that displays their name, health,
	 * level and experience.
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {Pokemon} pokemon
	 * @param {object} options Options for the super Panel.
	 */
	constructor(x, y, width, height, pokemon, options = {}) {
		super(x, y, width, height, options);

		this.pokemon = pokemon;
	}

	render() {
		super.render();

		this.renderStatistics();

		this.renderBar();

		this.renderExperienceBar();
	}

	/**
	 * All the magic number offsets here are to
	 * arrange all the pieces nicely in the space.
	 */
	renderStatistics() {
		context.save();
		context.textBaseline = 'top';
		context.fillStyle = Colour.Black;
		context.font = `${UserInterfaceElement.FONT_SIZE}px ${UserInterfaceElement.FONT_FAMILY}`;
		context.fillText(
			this.pokemon.name.toUpperCase(),
			this.position.x + 15,
			this.position.y + 12
		);
		context.textAlign = 'right';
		context.fillText(
			`Lv${this.pokemon.level}`,
			this.position.x + this.dimensions.x - 10,
			this.position.y + 12
		);
		context.fillText(
			`HP: ${this.pokemon.getHealthMeter()}`,
			this.position.x + this.dimensions.x - 30,
			this.position.y + this.dimensions.y - 50
		);
		
		// context.fillText(
		// 	`EXP: ${this.pokemon.getExperienceMeter()}`,
		// 	this.position.x + this.dimensions.x - 30,
		// 	this.position.y + this.dimensions.y - 25
		// );
		context.restore();
	}

	renderBar(){
		context.save();
		context.rect(this.position.x + 15,
			this.position.y + this.dimensions.y - 25, 150, 10);
		const healthBar = this.pokemon.currentHealth / this.pokemon.health * 100;

		if(healthBar <= 25){
			context.fillStyle = "red";
		}
		else if(healthBar <= 50){
			context.fillStyle = "yellow";
		}
		else{
			context.fillStyle = "green";
		}
		context.fillRect(this.position.x + 15,
			this.position.y + this.dimensions.y - 25, healthBar * 1.5, 10);
		context.restore();
	}

	renderExperienceBar(){
		context.save();
		context.rect(this.position.x + 15,
			this.position.y + this.dimensions.y - 35, 150, 4);
		const healthBar = this.pokemon.currentExperience - this.pokemon.levelExperience / this.pokemon.targetExperience - this.pokemon.levelExperience;

		context.fillStyle = "blue";
		context.fillRect(this.position.x,
			this.position.y + this.dimensions.y + 5, healthBar * 2, 4);
		context.restore();
	}
}
