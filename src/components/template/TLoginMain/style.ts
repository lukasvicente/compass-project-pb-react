import styled from "styled-components";
import loginBackground from '../../../assets/loginBackground.png'
import logoCompass from '../../../assets/logoCompass.png'

export const ContentLeft = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 50px 0;
@media (max-width: 920px) {
  width: 100%;
  background-image: url(${logoCompass});
  background-repeat: no-repeat;
  background-size: 200px;
  background-position-x: center;
  background-position-y: 25px;
}
@media (max-height: 775px) {
 
}
@media (max-width: 420px) {
  width: 75%;
  margin: 0 10%;
  background-position-x: center;
  background-position-y: 25px;
}
@media (max-width: 375px) {
  align-items: flex-start;
  background-position-x: center;
  background-position-y: 25px;
  background-size: 150px;
  width: 100%;
}
@media (max-width: 320px) {
  margin: 0 7%;
  background-size: 120px;
}
`;

export const ContentRight = styled.div`
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

export const DivTypography = styled.div`
 display: 'grid';
`;