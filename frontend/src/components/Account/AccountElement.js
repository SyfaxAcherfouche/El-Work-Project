import styled from 'styled-components'

export const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2em;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-flow: column wrap; 
`
export const ImageWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
`
export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`
export const UploadInputWrapper = styled.div`
    padding: 1em;
    @media screen and (max-width: 680px) {
        width: 100%;
    }
`
export const InputImage = styled.input`
    margin-left: 5em;
`
export const NameWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 680px) {
        flex-flow: column nowrap; 
        width: 100%;
    }
` 
export const ContactWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 680px) {
        flex-flow: column nowrap; 
        width: 100%;
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1em;
`
export const ButtonUpdate = styled.button`
    border-radius: 50px;
    background: transparent;
    color: #27debf;
    white-space: nowrap;
    padding: 10px 22px;
    margin: 6px;
    font-size: 16px;
    outline: none;
    border: 1px solid #27debf;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #27debf;
        color: #fff;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
`
