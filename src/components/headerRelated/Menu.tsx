import { useMemo } from "react";
import styles from "@/styles/components/headerRelated/menu.module.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "zustand";

import { NAVIGATION_SECTIONS } from "@/utils/constants";
import scrollToSection from "@/utils/scrollToSection";
import $globalStore from "@/utils/globalStore";

import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/Linkedin";

export default function Menu() {
	const navigate = useNavigate();
	const { hash } = useLocation();
	const isVisible = useStore($globalStore, (store) => store.isMenuVisible);

	const links = useMemo(() => {
		return NAVIGATION_SECTIONS.map((name) => (
			<li key={name}>
				<button
					onClick={() => {
						const hash = `#${name}`;
						navigate(hash);
						scrollToSection(hash);
						$globalStore.setState({ isMenuVisible: false });
					}}
					data-current={hash === `#${name}`}
				>
					{name}
				</button>
			</li>
		));
	}, [navigate, hash]);

	return (
		<div
			id={styles.menu}
			style={{ transform: `translateX(${isVisible ? 0 : "100vw"})` }}
		>
			<nav>
				<ul>{links}</ul>

				<div id={styles.social}>
					<a href="https://www.linkedin.com/in/lio-giladi">
						<LinkedIn />
					</a>
					<a href="https://github.com/liogiladi">
						<GitHub />
					</a>
					<a href="/Lio Giladi Resume.pdf" target="_blank">
						Résumé
					</a>
				</div>
			</nav>
		</div>
	);
}
