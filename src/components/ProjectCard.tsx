import { useMemo } from "react";
import styles from "@/styles/components/project-card.module.scss";
import { Project } from "@/data/projects";

export default function ProjectCard(props: Project) {
	const madeWith = useMemo(() => {
		return (
			<ul>
				{props.madeWith.map((item) => (
					<li key={`${props.name}-${item}`}>{item}</li>
				))}
			</ul>
		);
	}, [props.madeWith, props.name]);

	return (
		<article className={styles["project-card"]} data-invert>
			<header>
				<h3>{props.name}</h3>
				{madeWith}
			</header>
			<div className={styles.preview}>
				<img
					src={props.thumbnailSrc || "src/assets/wallpaperflare.com_wallpaper.jpg"}
					alt="project card preview picture"
				/>
				<div className={styles.overlay}>
					<p>{props.description}</p>
				</div>
			</div>
			<div className={styles.links}>
				<a href={props.liveURL}>Live Site</a>
				<a href={props.githubURL}>Code</a>
			</div>
		</article>
	);
}
