import styled from 'styled-components'
import {
    FiFacebook,
    FiLinkedin,
    FiInstagram
} from 'react-icons/fi'

export const FooterComposant = styled.div`
    display: flex;
    width: 100%;
    background-color: #27DEBF;

    @media only screen and (max-width: 600px) {
        flex-flow: column nowrap;
        padding: 0 1em;
    }

    @media only screen and (min-width: 600px) {
        
    }

    @media only screen and (min-width: 768px) {
    
    }

    @media only screen and (min-width: 992px) {
        height: 55vh;
        flex-flex: row wrap;
    }

    @media only screen and (min-width: 1600px) {
        height: 33vh;
    }
`;
export const FooterSections = styled.div`
    width: 30%;
    height: 100%;
    padding: 2em;

    @media screen and (max-width: 768px) {
        width: 100%;
        min-height: 0;
    }
`
export const FooterTitle = styled.h1`
    font-size: 22px;
    margin-bottom: 1.5em;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 1em;
    }
`
export const Label = styled.span`
    color: inherit;
    font-family: "Dancing Script", cursive;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;
export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-bottom: 1em;
    width: 100%;
    color: #fff;
` 
export const FooterRow = styled.li`
    font-size: 18px;
    margin-bottom: .2em;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`
export const Maps = styled.iframe`
    border: 0;
    width: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const Path = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    
    &:hover {
        text-decoration: none;
    }
`
export const SocialMedia = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 10%;
    height: 100%;
    padding: 2em;
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: row;
    }
`
export const Facebook = styled(FiFacebook)`
    font-size: 20px;
    color: white;

    &:hover {
        color: rgb(77, 148, 255);
    }
`
export const Instagram = styled(FiInstagram)`
    font-size: 20px;
    color: white;

    &:hover {
        color: rgb(77, 148, 255);
    }
`
export const Linkedin = styled(FiLinkedin)`
    font-size: 20px;
    color: white;

    &:hover {
        color: rgb(77, 148, 255);
    }
`

