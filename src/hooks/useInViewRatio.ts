import { useEffect, useRef } from "react";
import { THRESHOLD } from "@/utils/constants";

interface IntersectionObserverInit {
	root?: Element | Document | null;
	rootMargin?: string;
	threshold?: number | number[];
}

export default function useInViewRatio<T extends HTMLElement>(
	callback: (ratio: number) => void,
	options: IntersectionObserverInit = {
		threshold: THRESHOLD,
	},
) {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const io = new IntersectionObserver(([entry]) => {
			callback(entry.intersectionRatio);
		}, options);

		if (ref.current) io.observe(ref.current);

		return () => {
			if (ref.current) io.unobserve(ref.current);
		};
	}, [callback, options]);

	return ref;
}
