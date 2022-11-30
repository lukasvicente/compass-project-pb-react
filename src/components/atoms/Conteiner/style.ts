import styled from "styled-components";

interface IConteinerProps {
  background: string,
  mxWidth: string
}

export const Content = styled.div<IConteinerProps>`
// background-color:  ${(props) => props.theme.palette.primary.main};

//background: ${(props) => props.background} rgb(0,0,0);
display: flex;
background: ${(props) => props.background};
height: 100vh;
width: ${(props) => props.mxWidth};
`;