import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
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
`;
