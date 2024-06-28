import NetworkBackground from "@/components/NetworkBackground";
import styles from "@/styles/pages/404.module.scss";

export default function Page404() {
	return (
		<main id={styles["page-404"]}>
			<NetworkBackground />
			<div id={styles.message}>
				<h1>404</h1>
				<h2>not found...</h2>
			</div>
		</main>
	);
}
