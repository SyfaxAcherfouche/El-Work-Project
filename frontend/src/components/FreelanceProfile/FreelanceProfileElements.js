import styled from 'styled-components'

export const Profile = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-color:  #f6f6f6;
    margin: 1em 0 1em 0;
    
`;
export const ProfileImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
`
export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 1em;
`
export const Name = styled.h1`
    color: #161d6f;
    font-size: 2.5em;
`
export const Title = styled.h3`
    color: #98ded9;
    font-size: 1.5em;
`
export const Adress = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #161d6f;
    font-size: 1.2em;
`
export const Price = styled.h3`
    color: #b3b1b1;
    font-size: 1.5em;
    margin-top: 2em;
`
export const ProfileContact = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
` 
export const Button = styled.button`
    border: 1px solid #27DEBF;
    background-color: transparent;
    color: #27DEBF;
    padding: 6px;
    margin: .3em 0;
    width: 10em;
    
    &:hover {
        color: #fff;
        background-color: #27DEBF;
        border: none;
    }
`
export const FreelanceInformation = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    min-height: 50vh;

    @media screen and (max-width: 760px) {
        flex-direction: column;
    }
`
export const Competences = styled.div`
    width: 29vw;
    height: 100%;
    min-height: 37vh;
    padding: 1em;
    background-color:  rgb(252, 252, 252);
    border-radius: 2em;
    
    @media screen and (max-width: 760px) {
        width: 100%;
        margin-bottom: 1em;
    }
`
export const Description = styled.div`
    width: 68.6vw;
    height: 100%;
    min-height: 38vh;
    padding: 1em;
    background-color:  rgb(252, 252, 252);
    border-radius: 2em;

    @media screen and (max-width: 760px) {
        width: 100%;
    }
`
export const DescriptionTitle = styled.h1`
    font-size: 2em;
    color: black;

    @media screen and (max-width: 968px) {
        font-size: 1.5em;
    }
`
export const DescriptionText = styled.p`
    font-size: 1.2em;
    color: black;
`
export const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
`