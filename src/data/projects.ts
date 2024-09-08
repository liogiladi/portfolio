export const PROJECT_TYPE_INTITIALS_TO_NAMES = Object.freeze({
	FS: "Fullstack",
	FE: "Frontend",
	BE: "Backend",
});

type ProjectTypeInitials = keyof typeof PROJECT_TYPE_INTITIALS_TO_NAMES;

export type Project = {
	name: string;
	type: ProjectTypeInitials;
	madeWith: string[];
	thumbnailSrc: string;
	description: string;
	githubURL: string;
	liveURL: string;
};

const PROJECTS_DATA: readonly Project[] = Object.freeze([
	{
		name: "Web OS",
		type: "FE",
		madeWith: ["HTML", "CSS", "JavaScript", "Web Components"],
		thumbnailSrc: "/web-os.png",
		description:
			"Emulates a local operating system on a small scale.\n(Recommended for use on a computer as it is not fully adapted and not optimized for mobile at this time)",
		githubURL: "https://github.com/liogiladi/web-os",
		liveURL: "https://web-os-1998.vercel.app",
	},
	{
		name: "Clinic Visits Management",
		type: "FS",
		madeWith: [
			"React.js",
			"Next.js",
			"TypeScript",
			"Supabase",
			"PostgreSQL",
		],
		thumbnailSrc: "/mirpa-a thumbnail.png",
		description:
			"The project simulates both the process of a client requesting a visit for a patient and the process of managing the requests, their approvals/rejections and the patients.",
		githubURL: "https://github.com/liogiladi/mirpa-a",
		liveURL: "https://mirpa-a.vercel.app/",
	},
]);

export default PROJECTS_DATA;
