import { styled } from "solid-styled-components";
import { NavLink } from "solid-app-router";
import { sizes } from '../../lib/screenSizes'
import Logo from "./Logo";

function RenderMenuItems({menuItemData}) {
    return(
        <For each={menuItemData}>{(item) => {
            return(
                <MenuItem>
                    <NavLink class="nav" href={item.path}>
                        {item.menuText}
                    </NavLink>
                </MenuItem>
            )
        }}
        </For>
    )
}

export default function Header({
    pages
    }){
    //pages.map(p => console.log("https://www.infograafikko.fi"+p.path))
    const logoData = pages.filter(p => p.placement == "logo")[0]
    const menuItemData = pages.filter(p => p.placement == "menuItem")

     return(
        <Container>
        <MenuContainer>
            {/*<NavLinkLogo 
                class="nav" 
                href={logoData.path}
                height="40px"
                heightM="30px"
                margin="6px"
                linkToMainPage={true}
                >
                <Logo
                    color="#f7931e"
                    color2="#fff"
                />
            </NavLinkLogo>*/}
            <MenuItems>
                <RenderMenuItems 
                    menuItemData={menuItemData}
                />
                <NavLinkLogo 
                    class="nav" 
                    href={menuItemData[0].path}
                    height="40px"
                    heightM="30px"
                    margin="6px"
                    linkToMainPage={true}
                    >
                    <Logo
                        color="#f7931e"
                        color2="#fff"
                    />
                </NavLinkLogo>
            </MenuItems>
        </MenuContainer>
        </Container>
     )
}

const NavLinkLogo = styled(NavLink)(
    props => `
    height: ${props.height};
    margin: ${props.margin};
    cursor: ${props.linkToMainPage ? "pointer" : "default"};
    width: 160px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    @media only screen and (max-width: 500px) {
        
        display: none;
    }
  `
);

const MenuContainer = styled("div")(
    props => `
    position: relative;
    background-color: #333;
    height: 50px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 30;
  `
);

const Container = styled("div")(
    props => `
    position: relative;
    background-color: #333;
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    top: 0;
  `
);

const MenuItems = styled("div")(
  props => `
    align-items: center;
    justify-content: center;
    display: flex;
`
);

const MenuItem = styled("div")(
    props => `
      margin: 12px;
      cursor: pointer;
      line-height: 1.25;

      & a {
          color: white;
          text-decoration: none;
          font-family: 'Palanquin';
      }
  `
  );