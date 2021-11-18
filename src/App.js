import { lazy } from "solid-js";
import { useRoutes, Link } from "solid-app-router";

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
    path: "/portfolio",
    component: lazy(() => import("./Pages/Portfolio/Portfolio")),
    menuText: "Portfolio",
    placement: "menuItem"
  },
  {
    path: "/ota-yhteytta",
    component: lazy(() => import("./Pages/ContactMe/ContactMe")),
    menuText: "Ota yhtettä",
    placement: "menuItem"
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