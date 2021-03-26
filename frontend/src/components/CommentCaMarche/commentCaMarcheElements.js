import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    bacground: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 5em 0 0 0;
    } 
`
export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 5em;

    @media screen and (max-width: 768px) {
        flex-flow: column nowrap;
        padding: 0 5em;
    }
`
export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5em;

    @media screen and (max-width: 768px) {
        flex-flow: column wrap;
    }
`
export const TextWrapper = styled.div`
    max-width: 595px;
`
export const TopLine = styled.p`
    color: #27debf;
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#c7c7c7")};
`;
export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
`
export const Label = styled.span`
    color: ${({ darkText }) => (darkText ? "#010606" : "#c7c7c7")};
    max-width: 18px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 900; 
    font-family: "Dancing Script", cursive;
    text-align: center;
`;