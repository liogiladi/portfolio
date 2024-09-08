import { useMemo, useState } from "react";
import styles from "@/styles/components/sections/projects-section.module.scss";
import isMobile from "@/utils/isMobile";
import useInViewRatio from "@/hooks/useInViewRatio";
import useDebounce from "@/hooks/useDebounce";
import PROJECTS_DATA from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
	const [headingVisible, setHeadingVisible] = useState(false);
	const itemsVisible = useDebounce(headingVisible, 200);
	const [inMobile] = useState(isMobile());

	const ref = useInViewRatio((ratio) => {
		const ratioFloored = Math.floor(ratio * 10);
		setHeadingVisible(ratioFloored > 0);
	});

	const projects = useMemo(
		() =>
			PROJECTS_DATA.map((data) => (
				<ProjectCard key={data.name} {...data} />
			)),
		[]
	);

	const xPosition = headingVisible && itemsVisible ? "0" : "-100vw";

	return (
		<section
			ref={ref}
			id={styles["projects-section"]}
			data-hash="#projects"
			data-mobile={inMobile}
		>
			<h2
				style={{
					opacity: headingVisible ? 1 : 0,
					transition: "0.3s",
				}}
			>
				Projects
			</h2>
			<div
				id={styles.projects}
				style={{
					[inMobile ? "transform" : "left"]: inMobile
						? `translate(${xPosition})`
						: xPosition,
					transition:
						headingVisible && itemsVisible ? "0.7s" : "0.3s",
				}}
			>
				{projects}
			</div>
		</section>
	);
}
