import styled from "styled-components";
import loginBackground from '../../../assets/loginBackground.png'

export const ContainerRight = styled.div`
  width: 50%;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 35px;
  img {
    width: 306px;
    height: 69px;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;