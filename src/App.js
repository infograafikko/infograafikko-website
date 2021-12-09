import { lazy } from "solid-js";
import { useRoutes } from "solid-app-router";
import PortfolioList from "./Pages/Portfolio/PortfolioItems/PortfolioList";

import BlogList from "./Pages/Blog/BlogItems/BlogList";

import Header from "./Pages/Universal/Header";

import { styled } from "solid-styled-components";


const pages = [
  {
    path: "/",
    component: lazy(() => import("./Pages/Home/Home")),
    menuText: "",
    placement: "logo"
  },
  {
    path: "/blogi",
    component: lazy(() => import("./Pages/Blog/Blog")),
    menuText: "Blogi",
    data: (() => BlogList), //neat way of getting data to list of urls
    placement: "menuItem"
  },
  {
    path: "/blogi/:item",
    component: lazy(() => import("./Pages/Blog/BlogItems/BlogItems")),
    menuText: "",
    data: (() => BlogList), //neat way of getting data to list of urls
    placement: null
  },
  {
    path: "/portfolio",
    component: lazy(() => import("./Pages/Portfolio/Portfolio")),
    menuText: "Portfolio",
    data: (() => PortfolioList), //neat way of getting data to list of urls
    placement: "menuItem"
  },
  {
    path: "/portfolio/:item",
    component: lazy(() => import("./Pages/Portfolio/PortfolioItems/PortfolioItems")),
    menuText: "",
    data: (() => PortfolioList), //neat way of getting data to list of urls
    placement: null
  },
  {
    path: "/ota-yhteytta",
    component: lazy(() => import("./Pages/ContactMe/ContactMe")),
    menuText: "Ota yhtettä",
    placement: "menuItem"
  },
  {
    path: "/peruuta-uutiskirje",
    component: lazy(() => import("./Pages/CancelNewsletter/CancelNewsletter")),
    menuText: "",
    placement: null
  },
  {
    path: "/*all",
    component: lazy(() => import("./Pages/notFound")),
    menuText: "",
    placement: null
  }
];

function App() {
  const Routes = useRoutes(pages);
  console.log(process.env)

  return (
    <Container>
      <Header 
        pages={pages}
      />
      <Routes />
    </Container>
  );
}


export default App;

const Container = styled("div")(
  props => `
  overflow-x: hidden;
  
`
);