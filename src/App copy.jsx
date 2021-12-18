import { lazy } from "solid-js";
import { useRoutes } from "solid-app-router";
import PortfolioList from "./Pages/Portfolio/PortfolioItems/PortfolioList";

import BlogList from "./Pages/Blog/BlogItems/BlogList";

import Header from "./Pages/Universal/Header";
import Footer from "./Pages/Universal/Footer";

import { styled } from "solid-styled-components";


const pages = [
  {
    path: "/",
    component: lazy(() => import("./Pages/Home/Home")),
    menuText: "Etusivu",
    placement: "menuItem"
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
    component: lazy(() => import("./Pages/Blog/BlogArticle")),
    menuText: "",
    data: (() => BlogList), //neat way of getting data to list of urls
    placement: null
  },
  {
    path: "/portfolio",
    component: lazy(() => import("./Pages/Portfolio/Portfolio")),
    menuText: "Portfolio",
    data: lazy(() => PortfolioList), //neat way of getting data to list of urls
    placement: "menuItem"
  },
  {
    path: "/portfolio/:item",
    component: lazy(() => import("./Pages/Portfolio/PortfolioPage")),
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

  return (
    <Container>
      <Header 
        pages={pages}
      />
      <RouteContainer>
        <Routes />
      </RouteContainer>
      <Footer />
    </Container>
  );
}


export default App;

const Container = styled("div")(
  props => `
  overflow-x: hidden;
  
`
);

const RouteContainer = styled("div")(
  props => `
  min-height: 100vh;
  
`
);