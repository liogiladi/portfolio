import $globalStore from "@/utils/globalStore";

export default function scrollToSection(hash: string) {
	const section = document.querySelector(`section[data-hash='${hash}']`);

	if (section) {
		$globalStore.setState({ beingAutoScrolled: true });
		const rect = section.getBoundingClientRect();

		let position = document.documentElement.scrollTop + rect.top;
		if (rect.height <= window.innerHeight) {
			position -= (window.innerHeight - rect.height) / 2;
		}

		window.scrollTo({
			behavior: "smooth",
			top: position,
		});
	}
}
