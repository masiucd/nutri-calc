import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from "@react-router/dev/routes";

export default [
	layout("./routes/marketing/layout.tsx", [
		index("routes/marketing/home.tsx"),
		//
	]),
	...prefix("/calculate", [
		layout("routes/applications/layout.tsx", [
			index("routes/applications/index.tsx"),
		]),
	]),
	// route("/calculate", "routes/calculate.tsx"),
] satisfies RouteConfig;
