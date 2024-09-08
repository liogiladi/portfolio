import { create } from "zustand";

type Store = {
	isMenuVisible: boolean;
	aboutEnteredFromAbove: boolean;
	scrollProgress: number;
	beingAutoScrolled: boolean;
};

const $globalStore = create<Store>()((set) => ({
	isMenuVisible: false,
	aboutEnteredFromAbove: false,
	scrollProgress: 0,
	beingAutoScrolled: false,
	setValue(store: Partial<Store>) {
		set(store);
	},
}));

export default $globalStore;
