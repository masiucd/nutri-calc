import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./routes/marketing/layout.tsx", [
		index("routes/marketing/home.tsx"),
		route("/about", "routes/marketing/about.tsx"),
	]),
	...prefix("/calculate", [
		layout("routes/applications/layout.tsx", [
			index("routes/applications/index.tsx"),
		]),
	]),
] satisfies RouteConfig;
