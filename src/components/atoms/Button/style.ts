import styled, { css }  from "styled-components";
import { IPrposButton } from '../../types/index';
 

export const ButtonComponent = styled.button<IPrposButton>`
  ${(props) => {
    switch (props.variant) {
      case "default":
        return css`
         
        `;
      case "secondary":
      return css`
        width: 379px;
        height: 60px;
        border-radius: 50px;
        padding-left: 20px;
        background-color: ${ props.theme.palette.secondary.main };
        color: ${ props.theme.palette.secondary.contrastText };
        border: 1px solid ${ props.theme.palette.secondary.main };
        :hover {
          background-color: ${ props.theme.palette.secondary.light };
        }
        :active {

          transform: translateY(4px);
        }
      `;
      default:
        return css`
        
        `;
    }
  }}
`;