import { useState } from "react";
import styles from "@/styles/components/sections/about-section.module.scss";
import { useStore } from "zustand";
import { css } from "glamor";
import useInViewRatio from "@/hooks/useInViewRatio";
import $globalStore from "@/utils/globalStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function AboutSection() {
	const enterFromAbove = useStore($globalStore, (store) => store.aboutEnteredFromAbove);

	const [showRemark, setShowRemark] = useState(false);
	const remarkRef = useInViewRatio((ratio) => {
		if (ratio == 1) setShowRemark(true);
		else if (ratio == 0) setShowRemark(false);
	});

	const isMobile = useMediaQuery("only screen and (max-width:700px)");

	return (
		<section id={styles["about-section"]} data-hash="#about">
			<section style={{ opacity: enterFromAbove ? 1 : 0 }}>
				<h2>About</h2>
				<p>
					In recent years, I found my love in web development and was given the opportunity to
					specialize in it during my military service at the IDF as a full-stack web developer.
				</p>
				<p>
					Alongside the technological aspect, to a large extent, I also have an artistic side,
					through which I was privileged to contribute a portion of my service as a UIUX designer
					for various systems.
				</p>
				<p id={styles.conclusion}>
					<span>My characteristics - orderly, efficient, and dedicated.</span>
					<br />
					<br />
					<span ref={remarkRef} style={{ width: showRemark ? "100%" : "0%", transition: "0.4s" }}>
						&nbsp;&nbsp;Looking forward to the next{isMobile ? <br /> : ""} opportunity
						:)&nbsp;&nbsp;
					</span>
				</p>
			</section>
			<section
				data-invert
				{...css({
					"&::before": {
						top: 0,
						bottom: undefined,
						height: enterFromAbove ? "100%" : "0%",
					},
				})}
			>
				<div id={styles["img-wrapper"]} style={{ height: showRemark ? "100%" : 0 }}></div>
				<a href="/src/assets/Resume.pdf" target="_blank">
					View Résumé
				</a>
			</section>
		</section>
	);
}
