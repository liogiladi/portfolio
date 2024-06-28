export type Project = {
	name: string;
	madeWith: string[];
	thumbnailSrc: string;
	description: string;
	githubURL: string;
	liveURL: string;
};

const PROJECTS_DATA: readonly Project[] = Object.freeze([
	{
		name: "Web OS",
		madeWith: ["HTML", "CSS", "JavaScript", "Web Components"],
		thumbnailSrc: "",
		description: "Emulates a local operating system on a small scale.",
		githubURL: "",
		liveURL: "",
	},
	{
		name: "Clinic Family Visits",
		madeWith: ["React", "Next.js", "TypeScript", "SCSS", "MySQL"],
		thumbnailSrc: "",
		description: "A user interface for clinic staff to manage patient family visits.",
		githubURL: "",
		liveURL: "",
	},
	{
		name: "Book Shop",
		madeWith: ["React", "CSS", "Express.js", "TypeScript", "MongoDB"],
		thumbnailSrc: "",
		description: "Book",
		githubURL: "",
		liveURL: "",
	},
]);

export default PROJECTS_DATA;
