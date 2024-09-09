import styles from "@/styles/components/headerRelated/header.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MenuButton from "@/components/headerRelated/MenuButton";
import Menu from "@/components/headerRelated/Menu";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/Linkedin";

export default function Header() {
	const isMobile = useMediaQuery("only screen and (max-width: 700px)");

	return (
		<header id={styles.header}>
			{isMobile ? (
				<>
					<Menu />
					<MenuButton />
				</>
			) : (
				<div id={styles.links}>
					<a href="https://www.linkedin.com/in/lio-giladi">
						<LinkedIn />
					</a>
					<a href="https://github.com/liogiladi">
						<GitHub />
					</a>
				</div>
			)}
		</header>
	);
}
