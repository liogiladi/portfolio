import { create } from "zustand";

type Store = {
	readonly mainElement: HTMLElement | null;
	isMenuVisible: boolean;
	aboutEnteredFromAbove: boolean;
	scrollProgress: number;
	beingAutoScrolled: boolean;
};

const $globalStore = create<Store>()((set) => ({
	mainElement: null,
	isMenuVisible: false,
	aboutEnteredFromAbove: false,
	scrollProgress: 0,
	beingAutoScrolled: false,
	setValue(store: Partial<Store>) {
		set(store);
	},
}));

export default $globalStore;
