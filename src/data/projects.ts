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
		thumbnailSrc: "/web-os.png",
		description:
			"Emulates a local operating system on a small scale.\n(Recommended for use on a computer as it is not fully adapted and not optimized for mobile at this time)",
		githubURL: "https://github.com/liogiladi/web-os",
		liveURL: "https://web-os-1998.vercel.app",
	},
	/* 	{
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
	}, */
]);

export default PROJECTS_DATA;
