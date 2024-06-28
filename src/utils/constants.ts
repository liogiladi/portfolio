const EVERY_PERCENTAGES = 10;
export const THRESHOLD = new Array(EVERY_PERCENTAGES + 1)
	.fill(0)
	.map((_, index) => (1 / EVERY_PERCENTAGES) * index);

export const NAVIGATION_SECTIONS = ["home", "about", "skills", "projects"];
