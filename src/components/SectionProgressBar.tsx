import { useEffect, useMemo, useRef } from "react";
import styles from "@/styles/components/section-progress-bar.module.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useStore } from "zustand";

import { NAVIGATION_SECTIONS } from "@/utils/constants";
import scrollToSection from "@/utils/scrollToSection";
import $globalStore from "@/utils/globalStore";

export default function SectionProgress() {
	const { hash } = useLocation();
	const navigate = useNavigate();
	const scrollProgress = useStore(
		$globalStore,
		(store) => store.scrollProgress
	);
	const visible = useStore(
		$globalStore,
		(store) => store.aboutEnteredFromAbove
	);
	const isMobile = useMediaQuery("only screen and (max-width: 700px)");
	const hasMounted = useRef(false);

	const indicators = useMemo(() => {
		const currentHashIndex = NAVIGATION_SECTIONS.indexOf(
			hash.slice(1) || "home"
		);

		return NAVIGATION_SECTIONS.map((name, index) => (
			<span
				key={name}
				onClick={() => {
					const hash = `#${name}`;
					navigate(hash);
					scrollToSection(hash);
				}}
				className={index == currentHashIndex ? styles.marked : ""}
			/>
		));
	}, [hash, navigate]);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}

		const navigateTo = (destination: string) => {
			if (
				window.location.hash !== destination &&
				!$globalStore.getState().beingAutoScrolled
			)
				navigate(destination);
		};

		/**
		 * 2 problems:
		 * - If the height of the document changes in the future, the values will need to be updated - not dynamic.
		 * - renders on every scroll.
		 *
		 * Not ideal but eh...
		 */

		if (scrollProgress < 6) {
			navigateTo("#home");
		} else if (scrollProgress < 30) {
			navigateTo("#about");
		} else if (scrollProgress < 55) {
			navigateTo("#skills");
		} else {
			navigateTo("#projects");
		}
	}, [navigate, scrollProgress]);

	if (isMobile) return;

	return (
		<div
			id={styles["section-progress"]}
			style={{
				opacity: visible ? 1 : 0,
				pointerEvents: visible ? "unset" : "none",
			}}
		>
			{indicators}
		</div>
	);
}
