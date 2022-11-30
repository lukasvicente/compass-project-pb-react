import styled, {css} from "styled-components";
import { IPrposTextField } from '../../types/index';

 

export const Icon = styled.div<IPrposTextField>`
  position: fixed;
  margin-left: ${(props) => props.iconEnd === 'inside' ? '390px': '325px' } ;
  margin-top: 15px;

`;

export const Content = styled.div`
display: grid;
margin-bottom: 20px;
margin-top: 20px;
 
`;

export const Label = styled.label`
color: ${(props) => props.theme.palette.error.main};
margin-left: 20px;
margin-top: 2px;
`;

export const Input = styled.input<IPrposTextField>`
  ${(props) => {
    switch (props.variant) {
      case "standard":
        return css`
        border: 1px solid ${ props.error ? props.theme.palette.error.main : '#FFFFFF' };
        `;
      case "arround":
      return css`
        box-sizing: border-box;
        width: 379px;
        height: 60px;
        background: #26292C;
        border: 1px solid ${ props.error ? props.theme.palette.error.main : '#FFFFFF' };
        border-radius: 50px;
        color: #FFFFFF;
        padding-left: 20px;
 
      `;
      default:
        return css`
        border: 1px solid ${ props.error ? props.theme.palette.error.main : '#FFFFFF' };
        `;
    }
  }}
`;



