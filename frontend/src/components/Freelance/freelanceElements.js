import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Chip } from "@material-ui/core";

export const CardsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 1.45em 0 0;

    @media screen and (max-width: 786px){
		flex-flow: column nowrap;
        justify-content: center;
    }    

`
export const NumberOfFreelance = styled.h1`
    width: 100%;
    font-size: 1.5em;
    margin: 0 0 0 1em;
    color: #b3b1b1;
    @media screen and (max-width: 786px){
		font-size: 1em;
    }  
`;
export const Input = styled.input`
    padding: .1em 1em;
    border: solid 0.5px;
    border-radius: .2em;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    &:focus {
        border-color: #27debf;
    }

    @media screen and (max-width: 786px){
		width: 15em;
        margin: 0.8em;
    }   
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 15em;
    height: auto;
    margin: 1em;
    cursor: pointer;

    @media screen and (max-width: 786px){
		
		margin-bottom: 30px;
    }    
}
`
export const Img = styled.img`
    width: 100%;
    height: 15em;
    border-radius: 6px 6px 0 0;
`

export const Panel = styled.div`
    padding: 5%;
	box-shadow: 0px 6px 18px -8px rgba(118,130,183,1);
	border-radius: 0 0 6px 6px;
`

export const FreelanceName = styled.h1`
    font-size: 1.2em;
    text-align: center;
    color: black;
`

export const Title = styled.h1`
    font-size: .8em;
    text-align: center;
    text-transform: uppercase;
    color: #b3b1b1;
`

export const Price = styled.span`
    color: #27DEBF;
    font-weight: 700;
    float: right;
    
`

export const Breaker = styled.span`
    display: inline-block;
    height: 5px;
    background: #27DEBF;
    width: 30px;
    position: relative;
    border-radius: 4px;
    text-align: center;
    
    &:after {
        position: absolute;
        content: "";
        background: #27DEBF;
        width: 30px;
        height: 5px;
        left: 150%;
        border-radius: 4px;
    }
`
export const CompetenceWrapper = styled.div`
    width: 100%;
    height: 5em;
`
export const Competence = styled(Chip)`
    margin: 1.5px;
`
export const CircularWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
`;
export const LinkToProfile = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;