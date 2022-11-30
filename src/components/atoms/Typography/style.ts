import styled  from "styled-components";
import { IPrposTypography } from '../../types/index';

export const DivTypography = styled.div<IPrposTypography>`
color: ${(props) => props.color } ;
`;