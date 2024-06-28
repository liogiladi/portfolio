import { useEffect, useState } from "react";

export default function useDebounce<T>(state: T, milliseconds: number): T | undefined {
	const [delayedState, setDelayedState] = useState<T>();

	useEffect(() => {
		const id = setTimeout(() => setDelayedState(state), milliseconds);
		return () => clearTimeout(id);
	}, [state, milliseconds]);

	return delayedState;
}
