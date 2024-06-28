import { useEffect, useState } from "react";

/**
 * @param milliseconds
 * @returns `true` if the given time has passed since the component has mounted, else returns `false`.
 */
export default function useTimer(milliseconds: number) {
	const [reached, setReached] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			setReached(true);
		}, milliseconds);

		return () => clearTimeout(id);
	}, [milliseconds]);

	return reached;
}
