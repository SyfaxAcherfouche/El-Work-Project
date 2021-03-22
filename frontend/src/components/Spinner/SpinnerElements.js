import styled from "styled-components";

export const Loarder = styled.div`
    border: 6px solid #f3f3f3; /* Light grey */
    border-top: 6px solid #27debf; /* Green */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1.2s linear infinite;

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`;