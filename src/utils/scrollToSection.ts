import $globalStore from "@/utils/globalStore";

export default function scrollToSection(hash: string) {
	const section = document.querySelector(`section[data-hash='${hash}']`);
	const container = $globalStore.getState().mainElement;

	if (section && container) {
		$globalStore.setState({ beingAutoScrolled: true });
		const rect = section.getBoundingClientRect();
		console.log("hash", hash);

		let position = container.scrollTop + rect.top;
		if (rect.height <= window.innerHeight) {
			position -= (window.innerHeight - rect.height) / 2;
		}

		container.scrollTo({
			behavior: "smooth",
			top: position,
		});
	}
}
