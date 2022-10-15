import styled from "styled-components";

export const Background = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colors.grey};
`

export const LandingHeader = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`
  