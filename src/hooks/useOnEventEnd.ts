import { useCallback, useRef } from "react";

/**
 * @param callback called on <Event>'s end
 * @returns handler to call in on<Event> event, pass in `useCallback`
 */
export default function useOnEventEnd(callback: () => void) {
	const timeoutId = useRef(0);
	const handler = useCallback(() => {
		clearTimeout(timeoutId.current);
		timeoutId.current = setTimeout(() => {
			callback();
			clearInterval(timeoutId.current);
		}, 100);
	}, [callback]);

	return handler;
}
