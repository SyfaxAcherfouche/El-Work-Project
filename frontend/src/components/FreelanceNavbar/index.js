import React, { useState, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import ProfileMenu from '../ProfileMenu/index'

import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
    Path
} from './FreelanceNavbarElements'

const Navbar = ({ toggle, userContext }) => {
    const [nav, setNav] = useState(false) 
    const { token, setToken } = useContext(userContext);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    } 
    window.addEventListener('scroll', changeBackground)
    console.log(token, 'f navbar');
    return (
        <>
            <Nav className={ nav ? 'nav active' : 'nav'}>
                <NavBarContainer>
                    <Path to='/' >
                        <NavLogo className={ nav ? 'nav active' : 'nav'}>El Work</NavLogo>
                    </Path>
                    <MobileIcon className={ nav ? 'nav active' : 'nav'} onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <Path to='/besoin'>
                                <NavLinks className={ nav ? 'nav active' : 'nav'}>Les Besoins</NavLinks>
                            </Path>
                        </NavItem>
                        <NavItem>
                            <Path to='/freelance' >
                                <NavLinks className={ nav ? 'nav active' : 'nav'}>Nos Freelances</NavLinks>
                            </Path>
                        </NavItem>
                        <NavItem>
                            <Path to='/about'>
                                <NavLinks className={ nav ? 'nav active' : 'nav'}>À propos</NavLinks>
                            </Path>
                        </NavItem>
                        { token?.token ? <div> </div> : <NavItem>
                            <Path to='/login'>
                                <NavLinks className={ nav ? 'nav active' : 'nav'}>Se connecter</NavLinks>
                            </Path>
                        </NavItem>  }
                    </NavMenu>
                    { token?.token ? <ProfileMenu userContext={userContext}/> : <NavBtn>
                        <NavBtnLink to='/register'>
                            S'inscrire
                        </NavBtnLink>
                    </NavBtn>}
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
