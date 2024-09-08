/**
 * Client-side way to detect if the user is browsing using a phone
 * @returns {boolean}
 */
export default function isMobile(): boolean {
	if ("ontouchstart" in window) {
		if ("maxTouchPoints" in navigator) {
			return (
				navigator.maxTouchPoints > 0 ||
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				Number((navigator as any)?.msMaxTouchPoints) > 0
			);
		}
		return window.innerWidth <= 750;
	} else {
		const mQ = matchMedia?.("(pointer:coarse)");
		if (mQ?.media === "(pointer:coarse)") {
			return !!mQ.matches;
		} else if ("orientation" in window) {
			return true; // deprecated, but good fallback
		} else {
			// Only as a last resort, fall back to user agent sniffing
			return (
				/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(
					navigator.userAgent
				) ||
				/\b(Android|Windows Phone|iPad|iPod)\b/i.test(
					navigator.userAgent
				)
			);
		}
	}
}
