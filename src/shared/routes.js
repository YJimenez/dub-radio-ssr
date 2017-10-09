import Home from './components/main.js'
import About from './components/about.js'

const routes = [
	{
		path: "/",
		component: Home,
		exact: true
	},
	{
		path: "/:about",
		component: About
	}
];

export default routes;