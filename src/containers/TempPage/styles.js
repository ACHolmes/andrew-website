import styled from "styled-components";

export const Background = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colors.fluorescentBlue};
`

export const TempHeader = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`

export const TempBody = styled.div`
    z-index: 2;
    background-color: ${props => props.theme.colors.white};
    height: 40vh;
    width: 60vw;
    border-radius: 40px;
    border-bottom: solid 4px ${props => props.theme.colors.titaniumYellow};
    border-right: solid 4px ${props => props.theme.colors.titaniumYellow};
    box-shadow: 3px 3px ${props => props.theme.colors.pink};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TempH1 = styled.h1`
    color: ${props => props.theme.colors.pink};
    font-size: 48px;
    font-weight: bolder;
`

export const TempText = styled.div`
    flex: 1;
    font-size: 30px;
    color: ${props => props.theme.colors.fogra};
`

export const GitButton = styled.button`
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.pink};
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tiffany};
    font-size: 30px;
    &:hover{
        background-color: ${props => props.theme.colors.darkCyan};
        cursor: pointer;
    }
`

export const GitLogo = styled.img`
    width: 28px;
    padding-right: 8px;
`
