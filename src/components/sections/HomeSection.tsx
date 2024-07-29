import { useCallback, useMemo } from "react";
import styles from "@/styles/components/sections/home-section.module.scss";

import { css } from "glamor";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";

import useInViewRatio from "@/hooks/useInViewRatio";
import useTimer from "@/hooks/useTimer";
import { NAVIGATION_SECTIONS } from "@/utils/constants";
import $globalStore from "@/utils/globalStore";
import scrollToSection from "@/utils/scrollToSection";

export default function HomeSection() {
	const navigate = useNavigate();

	const ref = useInViewRatio(
		useCallback((ratio) => {
			$globalStore.setState({ aboutEnteredFromAbove: ratio * 10 < 8.5 });
		}, []),
	);

	const reachedAboutSection = useStore($globalStore, (store) => store.aboutEnteredFromAbove);
	const enterAnimationEnded = useTimer(1500);

	const links = useMemo(() => {
		return NAVIGATION_SECTIONS.slice(1).map((name) => (
			<button
				key={name}
				onClick={() => {
					const hash = `#${name}`;
					navigate(hash);
					scrollToSection(hash);
				}}
			>
				{name}
			</button>
		));
	}, [navigate]);

	return (
		<section ref={ref} id={styles["home-section"]} data-hash="#home">
			<div id={styles["home-wrapper"]}>
				<div
					id={styles.home}
					className={
						(!enterAnimationEnded && window.location.hash === "#home") || !window.location.hash
							? styles["home-entry-animation"]
							: ""
					}
					data-invert
					{...css({
						"&::before": {
							height:
								enterAnimationEnded && reachedAboutSection
									? "150%"
									: enterAnimationEnded
									? "100%"
									: "150%",
						},
					})}
				>
					<h1>Lio Giladi</h1>
					<p>Full-Stack Web Developer.</p>
					<p>Designer.</p>
				</div>
				<div
					id={styles.buttons}
					className={
						!enterAnimationEnded && window.location.hash === "#home"
							? styles["buttons-entry-animation"]
							: ""
					}
					style={{
						opacity: enterAnimationEnded && reachedAboutSection ? 0 : enterAnimationEnded ? 1 : 0,
						pointerEvents: reachedAboutSection ? "none" : "unset",
					}}
				>
					{links}
				</div>
			</div>
		</section>
	);
}
