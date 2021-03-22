import styled from 'styled-components'
import {
    MdKeyboardArrowRight,
    MdArrowForward 
} from 'react-icons/md'
import { 
    BsSearch 
} from 'react-icons/bs'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    margin: 0;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg, 
                rgba(0, 0, 0, 0) 0%, 
                rgba(0, 0, 0, 0) 50%
            ), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, 
            transparent 100%);
        z-index: 2;
    }
` 
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;
export const Label = styled.span`
    color: #fff;
    font-size: 24px;
    font-weight: 900; 
    font-family: "Dancing Script", cursive;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const SearchIcon = styled(BsSearch)`
    margin-left: 8px;
    font-size: 20px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        flex-direction: column;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
        flex-direction: column;
    }
`;






