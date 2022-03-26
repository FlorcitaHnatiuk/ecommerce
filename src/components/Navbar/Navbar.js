import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Container, Wrapper, LogoContainer, MobileIcon, Menu, MenuItem, MenuItemLink } from './Navbar.elements';
import { FaMeetup, FaBars, FaHome, FaSistrix, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons';


export const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(true);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <FaMeetup />
                        <p>mercado libre</p>
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHome />
                                    Home
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaSistrix />
                                    Productos
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <CartWidget />
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}


