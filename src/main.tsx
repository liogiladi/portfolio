import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@/styles/global.scss";

import Index from "@/pages/Index";
import Page404 from "@/pages/404";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "*",
		element: <Page404 />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
