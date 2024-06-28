import { memo, useMemo, useState } from "react";
import styles from "@/styles/components/sections/skills-section.module.scss";
import CssIcon from "@/components/icons/Css";
import FigmaIcon from "@/components/icons/Figma";
import GitIcon from "@/components/icons/Git";
import HtmlIcon from "@/components/icons/Html";
import IllustratorIcon from "@/components/icons/Illustrator";
import JavaScriptIcon from "@/components/icons/JavaScript";
import MySqlIcon from "@/components/icons/MySql";
import NextJsIcon from "@/components/icons/NextJs";
import NodeJsIcon from "@/components/icons/NodeJs";
import ReactIcon from "@/components/icons/React";
import RestApi from "@/components/icons/RestApi";
import ScssIcon from "@/components/icons/Scss";
import TypeScriptIcon from "@/components/icons/TypeScript";
import VSCodeIcon from "@/components/icons/VSCode";
import useInViewRatio from "@/hooks/useInViewRatio";

type Icon = { name: string; component: React.ReactElement };

const skills: Icon[] = [
	{ name: "HTML5", component: <HtmlIcon /> },
	{ name: "CSS3", component: <CssIcon /> },
	{ name: "JavaScript", component: <JavaScriptIcon /> },
	{ name: "TypeScript", component: <TypeScriptIcon /> },
	{ name: "Sass", component: <ScssIcon /> },
	{ name: "React", component: <ReactIcon /> },
	{ name: "NextJs", component: <NextJsIcon /> },
	{ name: "RESTful API", component: <RestApi /> },
	{ name: "Node.js", component: <NodeJsIcon /> },
	{ name: "MySql", component: <MySqlIcon /> },
];

const tools: Icon[] = [
	{ name: "VS Code", component: <VSCodeIcon /> },
	{ name: "Git", component: <GitIcon /> },
	{ name: "Figma", component: <FigmaIcon /> },
	{ name: "Adobe Illustrator", component: <IllustratorIcon /> },
];

export default memo(function SkillsSection() {
	const [visible, setVisible] = useState(false);

	const ref = useInViewRatio((ratio) => {
		const ratioFloored = Math.floor(ratio * 10);
		setVisible(ratioFloored > 1);
	});

	const skillsElements = useMemo(
		() =>
			skills.map((skill) => (
				<div key={skill.name} className={styles["icon-wrapper"]}>
					{skill.component}
					<span>{skill.name}</span>
				</div>
			)),
		[],
	);

	const toolsElements = useMemo(
		() =>
			tools.map((tool) => (
				<div key={tool.name} className={styles["icon-wrapper"]}>
					{tool.component}
					<span>{tool.name}</span>
				</div>
			)),
		[],
	);

	const articleStyle = { opacity: visible ? 1 : 0, transition: "0.3s" };

	return (
		<section ref={ref} id={styles["skills-section"]} data-hash="#skills" data-invert>
			<article style={articleStyle}>
				<h3>Skills</h3>
				<div className={styles.icons}>{skillsElements}</div>
			</article>
			<article style={articleStyle}>
				<h3>Tools</h3>
				<div className={styles.icons}>{toolsElements}</div>
			</article>
		</section>
	);
});
