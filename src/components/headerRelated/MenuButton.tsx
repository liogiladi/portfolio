import styles from "@/styles/components/headerRelated/menu-button.module.scss";
import { useStore } from "zustand";
import $globalStore from "@/utils/globalStore";

export default function MenuButton() {
	const isOpen = useStore($globalStore, (store) => store.isMenuVisible);

	return (
		<svg
			id={styles["menu-button"]}
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => $globalStore.setState({ isMenuVisible: !isOpen })}
			data-open={isOpen}
		>
			<defs></defs>
			<rect width="50" height="5.69" y="7.055"></rect>
			<rect width="50" height="5.69" y="22.055"></rect>
			<rect width="50" height="5.69" y="37.055"></rect>
		</svg>
	);
}
