import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { Container, Wrapper, LogoContainer, MobileIcon, Menu, MenuItem, MenuItemLink } from './Navbar.elements';
import { FaBars, FaHome, FaSistrix, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons';



export const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <Link to='/'>
                            <h3>La Vinería</h3>
                        </Link>
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <Link to='/list' className="navItem">Vinos</Link>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to='/detail' className="navItem">Detalle</Link>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaSistrix />
                                    Rosados
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


