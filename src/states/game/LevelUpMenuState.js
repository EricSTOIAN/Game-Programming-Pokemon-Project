import State from "../../../lib/State.js";
import { stateStack, timer, input } from "../../globals.js";
import Menu from "../../user-interface/elements/Menu.js";
import BattleMessageState from "./BattleMessageState.js";
import BattleState from "./BattleState.js";
import BattleTurnState from "./BattleTurnState.js";
import Input from "../../../lib/Input.js";
import Textbox from "../../user-interface/elements/Textbox.js";

export default class LevelUpMenuState extends State {
	static MENU_OPTIONS = {
		Fight: "FIGHT",
		Run: "RUN",
	}

	/**
	 * Represents the menu during the battle that the Player can choose an action from.
	 *
	 * @param {LevelUpMenuState} battleState
	 */
	constructor(battleState) {
		super();

        this.waitDuration = 2;

        this.battleState = battleState;

		const items = [
			{ text: LevelUpMenuState.MENU_OPTIONS.Fight},
			{ text: LevelUpMenuState.MENU_OPTIONS.Run},
		];

		this.battleMenu = new Menu(
			Menu.BATTLE_MENU.x,
			Menu.BATTLE_MENU.y,
			Menu.BATTLE_MENU.width,
			Menu.BATTLE_MENU.height,
			items,
		);
	}

    update() {
		this.battleMenu.update(dt);
        this.battleState.update(dt);

		if (input.isKeyPressed(Input.KEYS.ENTER)) {
			stateStack.pop();
		}
	}

	render() {
		this.battleMenu.render();
	}

    /*update() {
		this.battleMenu.update();
        this.battleState.update();

		if (input.isKeyPressed(Input.KEYS.ENTER)) {
			stateStack.pop();
		}
	}

	render() {
		this.battleMenu.render();
	}*/

	/*update() {
        if (input.isKeyPressed(Input.KEYS.ENTER)){
            stateStack.pop();
        }
		this.battleMenu.update();
	}

	render() {
		this.battleMenu.render();
	}*/
}