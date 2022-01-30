import Home from "./pages/home";

interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: unknown;
  props?: unknown;
}

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
];

export default routes;
