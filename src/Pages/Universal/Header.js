import { styled } from "solid-styled-components";
import { NavLink } from "solid-app-router";

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

    const logoData = pages.filter(p => p.placement == "logo")[0]
    const menuItemData = pages.filter(p => p.placement == "menuItem")

     return(
        <MenuContainer>
            <NavLinkLogo 
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
            </NavLinkLogo>
            <MenuItems>
                <RenderMenuItems 
                    menuItemData={menuItemData}
                />
            </MenuItems>
        </MenuContainer>
         
     )
}

const NavLinkLogo = styled(NavLink)(
    props => `
    height: ${props.height};
    margin: ${props.margin};
    cursor: ${props.linkToMainPage ? "pointer" : "default"};
  `
);

const MenuContainer = styled("div")(
    props => `
    position: relative;
    background-color: #333;
    height: 50px;
    width: 100%;
    display: flex;
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