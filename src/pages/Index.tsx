import { useCallback, useEffect, useRef } from "react";
import styles from "@/styles/pages/index.module.scss";
import useOnEventEnd from "@/hooks/useOnEventEnd";
import $globalStore from "@/utils/globalStore";
import Header from "@/components/headerRelated/Header";
import NetworkBackground from "@/components/NetworkBackground";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SectionProgress from "@/components/SectionProgressBar";
import scrollToSection from "@/utils/scrollToSection";

export default function Index() {
	const mainRef = useRef<HTMLElement>(null);
	const handleEndScroll = useOnEventEnd(
		useCallback(() => {
			if ($globalStore.getState().beingAutoScrolled)
				$globalStore.setState({ beingAutoScrolled: false });
		}, [])
	);

	useEffect(() => {
		scrollToSection(window.location.hash);
	}, []);

	return (
		<>
			<Header />
			<main
				ref={mainRef}
				id={styles["index-page"]}
				onScroll={(e) => {
					const scrollHeight = Math.floor(
						e.currentTarget.scrollHeight -
							e.currentTarget.clientHeight
					);
					$globalStore.setState({
						scrollProgress:
							(e.currentTarget.scrollTop / scrollHeight) * 100,
					});
					handleEndScroll();
				}}
			>
				<SectionProgress />
				<NetworkBackground />
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
			</main>
		</>
	);
}
