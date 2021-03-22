import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    Path,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
import 'antd/dist/antd.css'
import cookie from "react-cookies";

const Sidebar = ({ isOpen, toggle }) => {
    const token = cookie.load("token");
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
            <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Path to="besoin" onClick={toggle}>
                    Les Besoins
                    </Path>
                    <Path to="freelance" onClick={toggle}>
                    Les Freelances
                    </Path>
                    <Path to="apropos" onClick={toggle}>
                    À propos
                    </Path>
                    {token == null ? (
                    <Path to="/login" onClick={toggle}>
                        Se connecter
                    </Path>
                    ) : (
                    <div> </div>
                    )}
                </SidebarMenu>
                <SideBtnWrap>
                    {token === null ? (
                    <SidebarRoute to="/sinscrire" onClick={toggle}>
                        S'inscrire
                    </SidebarRoute> ) : (
                    <SidebarRoute to="/" onClick={toggle}>
                        Mon Compte
                    </SidebarRoute>       
                    )}
                </SideBtnWrap>  
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;
