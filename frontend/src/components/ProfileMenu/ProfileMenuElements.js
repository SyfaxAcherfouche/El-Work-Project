import styled from 'styled-components'
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

export const ProfileMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: transparent;
    border-radius: 45px;
    
    @media screen and (max-width: 760px) {
        display: none;
    }
`;
export const ProfileImage = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`; 
export const Path = styled(Link)`
    text-decoration: none;
    color: gray;

    &:hover {
        text-decoration: none;
        color: #27debf;
    }
`;
export const LogOut = styled(MenuItem)`
    &:hover {
        color: red;
    }
`